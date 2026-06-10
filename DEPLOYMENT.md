# Relatório Técnico de Deploy — Aftersale Landing

Documento de referência para a equipe DevOps responsável pela construção dos
manifests Kubernetes, Helm Charts e pipelines CI/CD para Oracle Kubernetes
Engine (OKE).

---

## 1. Ambiente

| Item                     | Valor                                                       |
| ------------------------ | ----------------------------------------------------------- |
| Runtime de build         | Bun 1.1 (Node.js ≥ 20 também suportado)                     |
| Runtime de produção      | Nginx 1.27-alpine                                           |
| Framework principal      | TanStack Start v1 + TanStack Router + React 19              |
| Build tool               | Vite 7                                                      |
| Linguagem                | TypeScript 5.8 (strict)                                     |
| Estilo de execução final | Assets estáticos (SPA com client-side routing)              |

> **Estratégia de containerização escolhida:** multi-stage `bun build → nginx
> static`. O template Lovable padrão visa Cloudflare Workers (workerd), runtime
> incompatível com OKE. Como o projeto não possui server functions nem rotas
> `/api/*`, servir o bundle estático com Nginx é a alternativa mais leve,
> segura e idiomática para Kubernetes.

---

## 2. Rede

| Item                  | Valor                                                  |
| --------------------- | ------------------------------------------------------ |
| Porta da aplicação    | **8080/TCP** (não privilegiada, compatível non-root)   |
| Endpoints públicos    | `/` (e qualquer rota do TanStack Router via fallback)  |
| Endpoint healthcheck  | `GET /healthz` → `200 ok`                              |
| Endpoint readiness    | `GET /readyz` → `200 ready`                            |
| Endpoint de métricas  | Não há (não há backend; instrumentação fica no Ingress/Service Mesh) |

Cabeçalhos de segurança configurados no Nginx: `X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy`, `server_tokens off`.

---

## 3. Persistência

| Item                                | Valor                                       |
| ----------------------------------- | ------------------------------------------- |
| Banco de dados                      | **Nenhum** (site estático sem backend)      |
| Diretórios que armazenam arquivos   | Nenhum (apenas leitura de `/usr/share/nginx/html`) |
| Armazenamento persistente (PVC)     | **Não necessário**                          |

Filesystem do container é efêmero e somente-leitura por convenção (pode ser
montado `readOnlyRootFilesystem: true` com `emptyDir` para `/var/cache/nginx`
e `/var/run`).

---

## 4. Dependências

| Categoria                      | Necessidade                                              |
| ------------------------------ | -------------------------------------------------------- |
| APIs externas                  | Nenhuma obrigatória em runtime                           |
| Serviços de autenticação       | Nenhum                                                   |
| Cache                          | Nenhum (cache HTTP via Nginx + CDN/Ingress)              |
| Filas                          | Nenhuma                                                  |
| Serviços obrigatórios          | Apenas o Ingress / Load Balancer do OKE                  |
| Fontes externas (build/runtime)| Google Fonts (Rubik, DM Sans) carregado pelo browser     |

---

## 5. Recursos (estimativa)

Por se tratar de Nginx servindo conteúdo estático, o consumo é baixíssimo.

| Recurso              | Request sugerido | Limit sugerido |
| -------------------- | ---------------- | -------------- |
| CPU                  | `50m`            | `200m`         |
| Memória              | `64Mi`           | `128Mi`        |
| Réplicas mínimas     | **2** (HA)       | HPA até 4–6 com base em CPU/Req-rate |

---

## 6. Possíveis problemas em ambiente containerizado

| Item                              | Status no projeto | Observação                                       |
| --------------------------------- | ----------------- | ------------------------------------------------ |
| Dependência de filesystem local   | Não               | Apenas leitura dos assets do bundle              |
| Dependência de sessão local       | Não               | Aplicação stateless                              |
| Arquivos temporários              | Apenas Nginx (`/var/cache/nginx`, `/var/run`) | Use `emptyDir` se rootFS for read-only |
| Configurações hardcoded           | Não               | Strings de UI são i18n; nenhuma URL crítica fixa |
| Segredos embutidos no código      | **Não** — confirmado | Nenhum `process.env` de secret é lido; o front só consome `VITE_*` (públicas por natureza) |
| Dependência de hostname específico| Não               | Nginx aceita `server_name _;`                    |
| Dependência de IP fixo            | Não               | —                                                |

---

## 7. Informações para Kubernetes

### Porta
- **Containerport:** `8080`
- **Service port sugerido:** `80 → 8080`

### Comando de inicialização
- Definido no Dockerfile (`CMD ["nginx", "-g", "daemon off;"]`).
- Não é necessário sobrescrever `command`/`args` no manifest.

### Variáveis — ConfigMap (não-sensíveis)
- `NODE_ENV=production`
- `PORT=8080`
- `PUBLIC_SITE_URL`
- `VITE_API_BASE_URL` *(somente se aplicável; embutida em build time)*
- `VITE_ANALYTICS_ID` *(somente se aplicável; embutida em build time)*

### Variáveis — Secret
- Nenhuma variável sensível é exigida no runtime atual.
- Caso futuras integrações exijam tokens/chaves privadas, devem ser servidas
  por **backend separado** (nunca como `VITE_*`, pois seriam públicas).

### Recursos mínimos recomendados
- `requests`: CPU `50m`, memória `64Mi`
- `limits`:  CPU `200m`, memória `128Mi`

### Probes (Healthcheck / Readiness)
```yaml
livenessProbe:
  httpGet: { path: /healthz, port: 8080 }
  initialDelaySeconds: 5
  periodSeconds: 30
  timeoutSeconds: 3
readinessProbe:
  httpGet: { path: /readyz, port: 8080 }
  initialDelaySeconds: 2
  periodSeconds: 10
  timeoutSeconds: 3
```

### PVC
- **Não necessário.** Aplicação totalmente stateless.

### Segurança recomendada no Pod
```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 101            # usuário nginx da imagem oficial
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false
  capabilities: { drop: ["ALL"] }
volumeMounts:
  - { name: nginx-cache, mountPath: /var/cache/nginx }
  - { name: nginx-run,   mountPath: /var/run }
volumes:
  - { name: nginx-cache, emptyDir: {} }
  - { name: nginx-run,   emptyDir: {} }
```

### Dependências obrigatórias antes do deploy
1. **OCIR (Oracle Container Registry)** para hospedar a imagem buildada.
2. **Ingress Controller** (Nginx Ingress ou OCI Native Ingress) no cluster OKE.
3. **Certificado TLS** (cert-manager ou OCI Certificates) para o domínio público.
4. **ConfigMap** com as variáveis listadas acima (se forem usadas no build).
5. *(Opcional)* HPA configurado se for prevista carga variável.

---

## 8. Observações Finais

- A imagem final é leve (~30–40 MB, base `nginx:alpine`) e roda como uid 101.
- O `HEALTHCHECK` do Dockerfile usa `wget` (presente no `nginx:alpine`).
- O `.dockerignore` exclui `node_modules`, `.git`, `.env*` (exceto example) e
  artefatos de build para reduzir contexto enviado ao Docker daemon.
- Não há server-side rendering ativo nesta imagem; toda a renderização ocorre
  no cliente após o carregamento do bundle (comportamento padrão de SPA).

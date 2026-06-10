# Aftersale — Landing Page

Landing page institucional da Aftersale construída com TanStack Start (React 19) e
Tailwind CSS v4, com suporte multi-idioma (PT/EN/ES). O build gera assets
estáticos otimizados, servidos em produção por Nginx dentro de container Docker
pronto para deploy no Oracle Kubernetes Engine (OKE).

## Objetivo

Apresentar a solução Aftersale (Troque Fácil, calculadora de savings, cases,
métricas e CTAs de contato) com performance, SEO e i18n.

## Tecnologias

- **Runtime de build:** Bun 1.1 (também compatível com Node.js ≥ 20)
- **Runtime de produção:** Nginx 1.27 (servindo o bundle estático)
- **Framework:** TanStack Start v1 + TanStack Router + React 19
- **Build tool:** Vite 7
- **Estilo:** Tailwind CSS v4 + shadcn/ui (Radix UI)
- **Animações:** Framer Motion
- **i18n:** Context próprio (`src/i18n/`) — PT/EN/ES
- **Validação:** Zod + React Hook Form
- **TypeScript:** 5.8 (modo strict)

## Estrutura do Projeto

```
.
├── public/                     # Assets estáticos públicos (logos, vídeos, SVGs)
├── src/
│   ├── assets/                 # Imagens importadas pelo bundler
│   ├── components/
│   │   ├── site/               # Seções da landing (Hero, Features, CTA, etc.)
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── hooks/                  # Hooks React reutilizáveis
│   ├── i18n/                   # LanguageContext + translations.ts
│   ├── lib/                    # Utilitários (cn, error-page, error-capture)
│   ├── routes/                 # Rotas file-based (TanStack Router)
│   │   ├── __root.tsx          # Layout raiz (HTML shell)
│   │   └── index.tsx           # Página inicial
│   ├── router.tsx              # Configuração do router
│   ├── server.ts               # Entry SSR (wrapper de tratamento de erros)
│   ├── start.ts                # Configuração do TanStack Start
│   └── styles.css              # Tailwind v4 + tokens de design
├── docker/
│   └── nginx.conf              # Configuração Nginx do container de produção
├── Dockerfile                  # Build multi-stage de produção
├── .dockerignore
├── .env.example                # Modelo das variáveis de ambiente
├── DEPLOYMENT.md               # Relatório técnico para DevOps / OKE
├── vite.config.ts
├── wrangler.jsonc              # Mantido para compatibilidade do template
└── package.json
```

## Como Executar Localmente

Pré-requisitos: Bun ≥ 1.1 (recomendado) **ou** Node.js ≥ 20.

```bash
# 1. Instalar dependências
bun install         # ou: npm install

# 2. Variáveis de ambiente (opcional para dev local)
cp .env.example .env

# 3. Servidor de desenvolvimento (HMR)
bun run dev         # http://localhost:8080
```

## Como Executar via Docker

```bash
# Build da imagem
docker build -t aftersale-landing:latest .

# Execução local (mapeando 8080 -> 8080)
docker run --rm -p 8080:8080 --name aftersale aftersale-landing:latest

# Acesso
open http://localhost:8080
```

A imagem final roda como usuário não-root (`nginx`, uid 101), expõe somente a
porta **8080** e possui `HEALTHCHECK` interno em `/healthz`.

## Processo de Build

```bash
bun run build
```

- Vite 7 compila a aplicação para `dist/` (assets do client em `dist/client/`).
- No Dockerfile, o `builder` (`oven/bun:1.1-alpine`) gera o bundle.
- Apenas o conteúdo de `dist/client/` é copiado para o runtime Nginx — devDeps
  e código-fonte ficam fora da imagem final.

## Processo de Start da Aplicação

- **Local (dev):** `bun run dev` → Vite dev server (HMR).
- **Local (build estático):** `bun run preview` após `bun run build`.
- **Container:** `CMD ["nginx", "-g", "daemon off;"]` (definido no Dockerfile).

Para o relatório técnico completo (rede, recursos, dependências, problemas de
container, seção "Informações para Kubernetes") consulte [DEPLOYMENT.md](./DEPLOYMENT.md).

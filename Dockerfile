# syntax=docker/dockerfile:1.7

# ============================================================
# Stage 1 — Build
# ============================================================
FROM oven/bun:1.1-alpine AS builder

WORKDIR /app

# Instala dependências aproveitando cache de camadas
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copia o restante do código e gera o build de produção
COPY . .
RUN bun run build

# ============================================================
# Stage 2 — Runtime (estático servido por Nginx, não-root)
# ============================================================
FROM nginx:1.27-alpine AS runtime

# Remove configuração default
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Configuração Nginx (porta 8080, SPA fallback, healthcheck)
COPY docker/nginx.conf /etc/nginx/conf.d/app.conf

# Copia artefatos estáticos do build (TanStack Start emite client em dist/client)
COPY --from=builder /app/dist/client/ /usr/share/nginx/html/

# Permissões para usuário não-root (nginx user já existe na imagem oficial, uid 101)
RUN chown -R nginx:nginx /usr/share/nginx/html \
 && chown -R nginx:nginx /var/cache/nginx \
 && chown -R nginx:nginx /var/log/nginx \
 && touch /var/run/nginx.pid \
 && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]

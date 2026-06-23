FROM mcr.microsoft.com/devcontainers/javascript-node:24 AS builder
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN HUSKY=0 pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:1.31-trixie AS production
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

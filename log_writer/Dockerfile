FROM node:24.5.0-alpine

WORKDIR /usr/src/app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PORT=3001

COPY . .

RUN npm install --global corepack@latest && corepack enable pnpm && pnpm install && adduser appuser -D && chown appuser .  && rm -rf /var/lib/apt/lists/*

USER appuser

CMD ["pnpm", "run", "start"]
FROM node:18 AS build

WORKDIR /usr/src/app

# Copia os arquivos de definição
COPY client/package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY client ./

# Compila a aplicação
RUN npm run build

# Etapa de produção
FROM node:18-slim AS production

WORKDIR /usr/src/app

# Copia artefatos da build
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

# Remove dependências de desenvolvimento
RUN npm prune --production

EXPOSE 3000

USER node

CMD ["npm", "start"]
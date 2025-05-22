# Etapa de build
FROM node:18 AS build

WORKDIR /app

COPY client/package*.json ./
RUN npm install

COPY client ./
RUN npm run build

# Etapa de produção
FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app ./

RUN npm prune --production

EXPOSE 3000
CMD ["npm", "start"]

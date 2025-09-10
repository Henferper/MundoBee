FROM node:18

WORKDIR /app
ENV NODE_ENV=production

# Copia package.json e instala dependências
COPY client/package*.json ./
RUN npm install

# Copia todo o código do client
COPY client ./ 

# Build do Next
RUN npm run build

EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]

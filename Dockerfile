#Definir o ambiente no qual o container rodará - Nesse caso o node:16
FROM node:16

#Criar pasta dentro do container - nesse caso a pasta "app"
WORKDIR /app

#copiar o package.json e package-lock.json para a pasta "app"
COPY package*.json ./

#rodar o npm i para instalar as dependencias do package.json
RUN npm install

#copiar todos os arquivos da pasta atual da máquina para a pasta "app" do container
#deve ser criado o arquivo .dockerignore com o node_modules
COPY . .

#define o valor dos envs existentes na aplicação no container
ENV PORT=4002

#expor/abrir a porta da aplicação
EXPOSE 4002

#rodar a aplicação
CMD ["npm", "start"]

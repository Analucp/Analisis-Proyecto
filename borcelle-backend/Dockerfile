# Usa una imagen base de Node.js
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto del backend (5000)
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "run", "dev"]
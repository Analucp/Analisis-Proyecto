# Usa una imagen base de Node.js
FROM node:18-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Copia las dependencias
COPY package*.json ./

# Instala dependencias y construye el frontend
RUN npm install
COPY . .
RUN npm run build  # Asume que usas Vite/React

# Servidor ligero para producción (nginx)
FROM nginx:alpine

# Copia los archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 (HTTP)
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
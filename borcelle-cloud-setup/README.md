# Borcelle Spa - Cloud Setup

Este repositorio contiene la configuración base para desplegar el frontend del proyecto Borcelle Spa usando Docker y Kubernetes.

## 🐳 Docker

### Crear imagen
```bash
docker build -t borcelle-frontend .
```

### Ejecutar con docker-compose
```bash
docker-compose up --build
```

## ☸️ Kubernetes

### Desplegar en clúster
```bash
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
```

> Reemplaza `tu_usuario_dockerhub` con tu usuario real de Docker Hub si vas a subir la imagen.

## 🔐 Requisitos
- Docker
- Docker Hub (opcional)
- Kubernetes (Minikube o clúster en la nube)

---
Autor: [Tu Nombre]
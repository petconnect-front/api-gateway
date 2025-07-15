# 🧭 PetConnect - API Gateway

Este proyecto es el **API Gateway** central de la aplicación distribuida **PetConnect**. Su propósito es enrutar todas las peticiones HTTP entrantes hacia los 30 microservicios que conforman la arquitectura de la red social.

---

## 🚀 Tecnologías usadas

- Node.js + Express
- http-proxy-middleware
- Dotenv
- Morgan
- Docker

---

## 📦 Instalación local

```bash
cd api-gateway
npm install
npm start

El servidor quedará corriendo en:
http://localhost:4000

🧩 Funcionalidades
Redirección transparente a microservicios REST

Reescritura automática de rutas

Soporte para múltiples dominios (usuarios, mascotas, contenido, etc.)

Arquitectura escalable y desacoplada

MIT © Diego Navarrete - PetConnect 2025
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// === GESTIÓN DE USUARIOS ===
app.use("/api/v1/auth", createProxyMiddleware({ target: "http://auth-service:3001", changeOrigin: true }));
app.use("/api/user-profile", createProxyMiddleware({ target: "http://user-profile-service:3002", changeOrigin: true }));
app.use("/api/v1/roles", createProxyMiddleware({ target: "http://role-service:3003", changeOrigin: true }));
app.use("/api/v1/user-preferences", createProxyMiddleware({ target: "http://user-preferences-service:3004", changeOrigin: true }));
app.use("/api/v1/session", createProxyMiddleware({ target: "http://session-service:3005", changeOrigin: true }));

// === GESTIÓN DE MASCOTAS ===
app.use("/api/pet-profile", createProxyMiddleware({ target: "http://pet-profile-service:3006", changeOrigin: true }));
app.use("/api/v1/pet-health", createProxyMiddleware({ target: "http://pet-health-service:3007", changeOrigin: true }));
app.use("/api/v1/pet-matching", createProxyMiddleware({ target: "http://pet-matching-service:3008", changeOrigin: true }));
app.use("/api/v1/pet-preferences", createProxyMiddleware({ target: "http://pet-preferences-service:3009", changeOrigin: true }));
app.use("/api/v1/pet-events", createProxyMiddleware({ target: "http://pet-event-service:3010", changeOrigin: true }));

// === SOCIAL / CONTENIDO ===
app.use("/api/v1/posts", createProxyMiddleware({ target: "http://post-service:3011", changeOrigin: true }));
app.use("/api/v1/comments", createProxyMiddleware({ target: "http://comment-service:3012", changeOrigin: true }));
app.use("/api/v1/likes", createProxyMiddleware({ target: "http://like-service:3013", changeOrigin: true }));
app.use("/api/v1/media", createProxyMiddleware({ target: "http://media-service:3014", changeOrigin: true }));
app.use("/api/v1/stories", createProxyMiddleware({ target: "http://story-service:3015", changeOrigin: true }));
app.use("/api/v1/feed", createProxyMiddleware({ target: "http://feed-service:3016", changeOrigin: true }));

// === REFUGIOS Y FUNDACIONES ===
app.use("/api/v1/shelters", createProxyMiddleware({ target: "http://shelter-service:3017", changeOrigin: true }));
app.use("/api/v1/donations", createProxyMiddleware({ target: "http://donation-service:3018", changeOrigin: true }));

// === MENSAJERÍA Y NOTIFICACIONES ===
app.use("/api/v1/chat", createProxyMiddleware({ target: "http://chat-service:3019", changeOrigin: true }));
app.use("/api/v1/notifications", createProxyMiddleware({ target: "http://notification-service:3020", changeOrigin: true }));
app.use("/api/v1/email", createProxyMiddleware({ target: "http://email-service:3021", changeOrigin: true }));
app.use("/api/v1/events", createProxyMiddleware({ target: "http://event-bus-service:3022", changeOrigin: true }));

// === MODERACIÓN Y SEGURIDAD ===
app.use("/api/v1/reports", createProxyMiddleware({ target: "http://report-service:3023", changeOrigin: true }));

// === ANALÍTICA Y MINERÍA DE DATOS ===
app.use("/api/v1/analytics", createProxyMiddleware({ target: "http://analytics-service:3024", changeOrigin: true }));
app.use("/api/v1/event-tracking", createProxyMiddleware({ target: "http://event-tracking-service:3025", changeOrigin: true }));
app.use("/api/v1/recommendations", createProxyMiddleware({ target: "http://recommendation-service:3026", changeOrigin: true }));
app.use("/api/v1/data-mining", createProxyMiddleware({ target: "http://data-mining-service:3027", changeOrigin: true }));

// === INFRAESTRUCTURA Y ADMINISTRACIÓN ===
app.use("/api/v1/logs", createProxyMiddleware({ target: "http://log-service:3028", changeOrigin: true }));
app.use("/api/v1/monitoring", createProxyMiddleware({ target: "http://monitoring-service:3029", changeOrigin: true }));
app.use("/api/v1/admin", createProxyMiddleware({ target: "http://admin-dashboard-service:3030", changeOrigin: true }));

// Endpoint para testear que el API Gateway está vivo
app.get("/", (req, res) => {
  res.send("✅ API Gateway funcionando");
});

// Solo levanta servidor si no estamos en entorno de test (para Jest)
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`✅ API Gateway corriendo en http://localhost:${PORT}`);
  });
}

export default app;

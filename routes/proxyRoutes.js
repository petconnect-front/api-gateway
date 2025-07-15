import { createProxyMiddleware } from "http-proxy-middleware";

export default function proxyRoutes(app) {
  const map = [
    { path: "/api/v1/auth", target: process.env.AUTH_SERVICE },
    { path: "/api/user-profile", target: process.env.USER_PROFILE_SERVICE },
    { path: "/api/pet-profile", target: process.env.PET_PROFILE_SERVICE },
    { path: "/api/v1/posts", target: process.env.POST_SERVICE },
    { path: "/api/v1/likes", target: process.env.LIKE_SERVICE },
    { path: "/api/v1/comments", target: process.env.COMMENT_SERVICE },
    { path: "/api/v1/media", target: process.env.MEDIA_SERVICE },
    { path: "/api/v1/chat", target: process.env.CHAT_SERVICE },
    // Agrega los demás
  ];

  map.forEach(({ path, target }) => {
    app.use(path, createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: (pathReq, req) => {
        const newPath = pathReq.replace(new RegExp(`^${path}`), "");
        return newPath === "" ? "/" : newPath;
      }
    }));
  });

  // Health check
  app.get("/health", (req, res) => {
    res.json({ status: "API Gateway activo 🚀" });
  });
}

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: ".",
  base: "/digital-id-card/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  publicDir: "attached_assets",
});
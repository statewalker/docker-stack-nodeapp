import react from "@vitejs/plugin-react";
import path from "path";
import UnoCSS from "unocss/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const port: number = Number(process.env.CLIENT_PORT) || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    UnoCSS(),
  ],
  server: {
    open: false,
    host: '0.0.0.0',
    cors: true,
    port,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["."],
    },
  },
});

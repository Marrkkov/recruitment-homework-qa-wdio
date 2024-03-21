import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  define: {
    "process.env": process.env, // Pass environment variables defined in .env files
    "import.meta.env": process.env, // Pass Vite-specific environment variables
  },
});

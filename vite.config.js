import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint"; // 🔹 Bunu ekle
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()], // 🔹 ESLint plugin'ini buraya ekle
});

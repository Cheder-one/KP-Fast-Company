import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import errorOverlay from "vite-plugin-error-overlay";

export default defineConfig({
  plugins: [react(), errorOverlay(), eslintPlugin({ cache: false, fix: true })]
});

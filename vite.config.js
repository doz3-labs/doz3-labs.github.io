import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages: set base to your repo name, e.g. base: "/my-repo/"
// So the site works at https://username.github.io/my-repo/
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});

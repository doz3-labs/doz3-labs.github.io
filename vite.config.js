import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: base must match where the site is served or assets 404 → white screen.
// doz3-labs.github.io is at root → base "/". Project sites use base "/REPO_NAME/"
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "**/*.PNG",
  plugins: [react()],
});

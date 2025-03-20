import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/e-plantShopping/", // ✅ Ensure this matches your GitHub Pages repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "/src/main.jsx", // ✅ Ensure Vite knows where to find `main.jsx`
    },
  },
});




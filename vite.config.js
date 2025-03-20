import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/e-plantShopping/", // Ensure this matches your GitHub repo name
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensure JSX files are properly resolved
  },
  esbuild: {
    loader: "jsx", // Ensure JSX is handled correctly
  },
});




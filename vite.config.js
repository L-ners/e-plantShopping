import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/e-plantShopping/", // Make sure it matches your repo name
  plugins: [react()],
});


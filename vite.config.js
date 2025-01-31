import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Environment-based base path
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? './' : '/portfolio',
});

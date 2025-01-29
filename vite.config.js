<<<<<<< HEAD

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Environment-based base path
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",  // Make sure this matches your repo name!
>>>>>>> 58dff87ee0a1f9f8bb9c498b29f3800d6dcf8cc8
});

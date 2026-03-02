import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
//  base: '/J-HarmoniX-web/', // Obbligatorio se non hai un dominio custom
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target moderni per bundle più piccoli
    target: "es2020",
    // Chunk splitting per migliorare LCP e TTI
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core (critico, caricato subito)
          "vendor-react": ["react", "react-dom"],
          // Framer Motion (pesante, lazy-loadable)
          "vendor-motion": ["framer-motion"],
          // Radix UI (componenti UI)
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
          ],
          // Router
          "vendor-router": ["react-router-dom"],
        },
        // Naming deterministico per cache busting
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    // Aumenta il warning size per chunk (default 500kB)
    chunkSizeWarningLimit: 1000,
    // Source maps in produzione per debugging SEO tecnico
    sourcemap: false,
    // Minificazione aggressiva
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
    },
  },
}));


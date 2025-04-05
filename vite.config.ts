import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    build: {
        sourcemap: "hidden",
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom", "react-router-dom"],
                    ui: ["@radix-ui/react-icons", "@radix-ui/react-dialog"],
                    form: ["react-hook-form", "@hookform/resolvers", "zod"],
                },
            },
        },
    },
});

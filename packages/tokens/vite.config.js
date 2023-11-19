import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    minify: true,
    outDir: "./dist",
    rollupOptions: {
      output: { format: "esm" },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "arkyn_tokens",
      fileName: "bundle",
    },
  },
});

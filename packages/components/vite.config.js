import { defineConfig } from "vite";
import { resolve } from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  build: {
    minify: true,
    outDir: "./dist",
    rollupOptions: {
      external: ["@remix-run/react", "react", "react-dom"],
      output: { format: "esm" },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "arkyn_components",
      fileName: "bundle",
    },
  },
});

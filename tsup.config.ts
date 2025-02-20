import { defineConfig } from "tsup";
import sassPlugin from "esbuild-plugin-sass";

export default defineConfig({
  entry: ["src/slider/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  esbuildPlugins: [sassPlugin()],
  outExtension({ format }) {
    return format === "cjs" ? { js: ".cjs" } : { js: ".mjs" };
  },
  external: ["react", "react-dom", "@babel/runtime"],
});

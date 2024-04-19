import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["index.ts", "src/components/alert.tsx", "src/components/input.tsx"],
    dts: true,
    clean: true,
    sourcemap: true,
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    watch: true,
    setupFiles: "ts-node/register", // Ensure ts-node is used for TypeScript support
  },
});
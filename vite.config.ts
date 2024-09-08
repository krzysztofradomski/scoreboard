/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        "src/components/scoreboard/Scoreboard.tsx"
      ),
      name: "FootballScoreboard",
      fileName: (format) => `football-scoreboard.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    root: "src/",
  },
});

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ricardo-gabriel-rouco.github.io/omegareparaciones/",
  base: "/omegareparaciones/",
  vite: {
    plugins: [tailwindcss()],
  },
});


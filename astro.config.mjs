// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Add the i18n configuration
  i18n: {
    // This is your default language
    defaultLocale: "en",
    // These are all the languages you support
    locales: ["en", "es"],
    // Strategy: 'en' paths will be at '/', 'es' paths will be at '/es/'
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
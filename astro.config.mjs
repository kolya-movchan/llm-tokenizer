import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "http://localhost:4322",
  integrations: [
    react(),
    tailwind(),
    sitemap({
      entryLimit: 1000,
      lastmod: new Date(),
    }),
  ],
  output: "static",
  devToolbar: {
    enabled: false,
  },
});

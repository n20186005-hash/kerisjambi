import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical origin for metadata, language alternates and sitemap.
const PRODUCTION_SITE = "https://kerisjambi.com";
const configuredSite = (process.env.PUBLIC_SITE_URL?.trim()) || PRODUCTION_SITE;
const site = configuredSite ? new URL(configuredSite).href : undefined;

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

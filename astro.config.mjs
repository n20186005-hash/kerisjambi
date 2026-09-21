import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Satu-satunya sumber URL produksi. Domain produksi disematkan agar canonical,
// Open Graph absolut, dan sitemap selalu terbit (menghindari duplikasi http/https
// seperti yang terlihat di Search Console). PUBLIC_SITE_URL dapat menimpa bila ada.
const PRODUCTION_SITE = "https://kerisjambi.com";
const configuredSite = (process.env.PUBLIC_SITE_URL?.trim()) || PRODUCTION_SITE;
const site = configuredSite ? new URL(configuredSite) : undefined;

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: [".manus.computer"] },
    preview: { allowedHosts: [".manus.computer"] }
  }
});

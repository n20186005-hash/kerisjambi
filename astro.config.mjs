import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Satu-satunya sumber URL produksi. Bila kosong, build tetap berjalan tanpa canonical/OG absolut dan tanpa sitemap.
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
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

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { SITE } from "./src/config";


export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,
  trailingSlash: "always",
  output: "server",
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});

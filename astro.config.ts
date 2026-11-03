import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';


import netlify from '@astrojs/netlify';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  experiments: {
    react: true,
  },
  output: 'server',
  adapter: netlify({ edgeMiddleware: true }),
  ssr: true,
  integrations: [
    react({
      content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    ],
  site: 'https://castelll0009.github.io',
  base: ''
}

);
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

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
    react({}),
    tailwind({
    
    }),
    ],
  site: 'https://castelll0009.github.io',
  base: ''
}

);
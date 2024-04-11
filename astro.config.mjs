import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';
import react from "@astrojs/react";


import netlify from '@astrojs/netlify';
import netlify from '@astrojs/netlify/functions';

import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
   site: 'https://lucky-meringue-8b3000.netlify.app',
   output: 'server',  
   adapter: netlify(),
  experiments: {
    react: true,
  },
 
 
  ssr: true,
  integrations: [ solid({
    include: ['**/solid/*', '**/node_modules/@suid/material/**'],
  }),
   react(), 
   tailwind({
     // Example: Provide a custom path to a Tailwind config file
     configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url)),
     applyBaseStyles: true,
  }
  )],
 
  base: ''
}

);
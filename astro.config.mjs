// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import partytown from '@astrojs/partytown';

import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), icon(), partytown()],
  output: "server", 
  adapter: node({
    mode: 'standalone'
  })
});

import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
// https://astro.build/config

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({// ...
  // integrations: [lit()],

  integrations: [
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});
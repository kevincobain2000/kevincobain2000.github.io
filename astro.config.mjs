import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default defineConfig({

  integrations: [
    compress(),
    image(),
    sitemap(),
    mdx({
      remarkPlugins: {
        extends: [setFallbackLayout, remarkReadingTime],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
      wrap: true,
    },
  },
});


function setFallbackLayout() {
  // sets a default layout for all mdx files
  return function (_tree, file) {
    const layout =
      file.data.astro.frontmatter.layout ?? "@layouts/BlogLayout.astro";
    file.data.astro.frontmatter.layout = layout;
  };
}

function remarkReadingTime() {
  // adds a reading time to all mdx files
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    file.data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
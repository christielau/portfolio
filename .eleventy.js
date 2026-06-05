/**
 * Eleventy config for the portfolio site.
 * Source lives in `src/`; build output is `_site/` (see `.gitignore`).
 * Global data JSON files: `src/_data/` (e.g. `site.json`, `work.json`, `navigation.json`).
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copied to `_site/_redirects` for Netlify redirects
  eleventyConfig.addPassthroughCopy("src/_redirects");

  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/work/*.md")
      .filter((item) => item.inputPath.indexOf("_template.md") === -1)
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

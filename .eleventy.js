module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("misc");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("newsletters");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};

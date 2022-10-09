module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('css/tailwind.css');
  eleventyConfig.addWatchTarget('css/tailwind.config.js');

  eleventyConfig.addPassthroughCopy("css/tailwind.css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };

}
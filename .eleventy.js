module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addWatchTarget('./src/css/tailwind.config.js');

  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };

}
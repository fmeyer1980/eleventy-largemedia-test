module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/images");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src/site",
            output: "_site",
            includes: "_includes"
        }
    }
}
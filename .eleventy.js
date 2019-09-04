module.exports = function(config) {
    config.addPassthroughCopy("assets/images");

    // minify the html output when building for realz
    if(process.env.ELEVENTY_ENV == 'prod') {
        config.addTransform("htmlmin", require("./src/utils/minify-html.js"));
    }

    // A responsive image helper using Netlify Large Media - image transformation
    config.addShortcode("picture", require("./src/utils/picture.js"));
    // A lazy loading image helper using Netlify Large Media - image transformation
    config.addShortcode("lazypicture", require("./src/utils/lazy-picture.js"));

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
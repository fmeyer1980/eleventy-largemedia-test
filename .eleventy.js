module.exports = function(config) {

    // Layout aliases can make templates more portable
    config.addLayoutAlias('default', 'layouts/default.njk');

    config.addPassthroughCopy("assets/images");
    config.addPassthroughCopy("assets/js");

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
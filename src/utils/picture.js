// Generate an picture tag with image src URLs which use Neltify image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<picture>
  <source srcset="/assets/images/${url}?nf_resize=fit&w=700" media="(min-width: 1200px)">
  <source srcset="/assets/images/${url}?nf_resize=fit&w=600" media="(min-width: 740px)">
  <img src="/assets/images/${url}?nf_resize=fit&w=500" alt="${alt}" />
</picture>`;
};



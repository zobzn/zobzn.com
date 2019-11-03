const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"]
};

module.exports = withMDX(withSass(nextConfig));

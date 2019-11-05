const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const nextConfig = {
  // target: "serverless",
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }

    return config;
  }
};

module.exports = withMDX(withSass(nextConfig));

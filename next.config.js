const path = require("path");

const withSass = require("@zeit/next-sass");

const nextConfig = {
  // target: "serverless",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md"],
  webpack: (config, options) => {
    const { isServer } = options;

    config.module.rules.push({
      test: /\.md$/,
      use: [
        options.defaultLoaders.babel,
        path.join(__dirname, "./src/lib/md-loader")
      ]
    });

    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader"
    });

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }

    return config;
  }
};

module.exports = withSass(nextConfig);

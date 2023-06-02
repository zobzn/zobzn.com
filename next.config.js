const path = require("path");

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md"],
  webpack: (config, options) => {
    // const { isServer } = options;

    config.module.rules.push({
      test: /\.md$/,
      use: [
        options.defaultLoaders.babel,
        path.join(__dirname, "./src/lib/md-loader"),
      ],
    });

    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });

    // Fixes npm packages that depend on `fs` module
    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   };
    // }

    return config;
  },
  eslint: {
    dirs: ["src"],
  },
};

module.exports = nextConfig;

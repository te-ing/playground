const webpack = require("webpack");
const path = require("path");

module.exports = function override(config) {
  config.module = {
    ...config.module,
    rules: [
    ...config.module.rules,
    {
      include: path.resolve(__dirname, 'src/page'),
      test: /\.(ts|tsx)$/,
      use:  path.resolve(__dirname, 'custom-loader.js'),
      exclude: /node_modules/
    },
  ],
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
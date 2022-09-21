const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/natify.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "natify.js",
    publicPath: "/dist/",
    libraryTarget: "umd",
    library: "natify",
    umdNamedDefine: true,
    libraryExport: "default",
    clean: true,
  },
  plugins: [new CompressionPlugin()],
};

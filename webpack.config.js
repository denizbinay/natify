const path = require("path");

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
};

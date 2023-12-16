const path = require("path");

const webConfig = {
  name: "electron-renderer",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  target: "electron-renderer",
  devServer: {
    port: "3000",
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: false,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/, // This regex will match .ts, .tsx, and .js files
        exclude: [/node_modules/, /src\/main\.ts/],
        use: "ts-loader",
      },
    ],
  },
};

const electronConfig = {
  name: "electron-main",
  entry: {
    main: path.resolve(__dirname, "src/main.ts"),
  },
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  target: "electron-main",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/, // This regex will match .ts, .tsx, and .js files
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};

module.exports = [webConfig, electronConfig];

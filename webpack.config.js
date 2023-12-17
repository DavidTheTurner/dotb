const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";
const mode = isDevelopment ? "development" : "production";
const outputPath = isDevelopment ? "dist" : "build";
const devServer = isDevelopment
  ? {
      port: "9222",
      static: {
        directory: path.join(__dirname, outputPath),
      },
      open: false,
      hot: true,
      liveReload: true,
    }
  : undefined;

const webConfig = {
  name: "electron-renderer",
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  target: "electron-renderer",
  devServer: {
    port: "9222",
    static: {
      directory: path.join(__dirname, "build"),
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
    path: path.resolve(__dirname, "build"),
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};

module.exports = [webConfig, electronConfig];

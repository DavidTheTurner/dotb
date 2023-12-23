const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rendererConfig = {
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
  watchOptions: {
    ignored: /node_modules/,
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/, // This regex will match .ts, .tsx, and .js files
        exclude: [/node_modules/, /src\/main\.ts/],
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

const mainConfig = {
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
        use: "babel-loader",
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
      excludeChunks: ["main"],
    }),
  ],
};

const preloadConfig = {
  name: "electron-preload",
  entry: {
    preload: path.resolve(__dirname, "src/preload.ts"),
  },
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  target: "electron-preload",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/, // This regex will match .ts, .tsx, and .js files
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};

module.exports = [rendererConfig, mainConfig, preloadConfig];

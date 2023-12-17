const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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

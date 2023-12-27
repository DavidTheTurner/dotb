const path = require("path");

module.exports = {
  name: "electron-main",
  entry: {
    main: path.resolve(__dirname, "src/main.ts"),
  },
  devtool: "source-map",
  mode: "development",
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
};

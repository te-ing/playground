const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development", // production이 기본값 production은 최적화되어 development에 비해 용량이 작음
  devServer: {
    port: "3001",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: false, // 실행시 웹페이지 열리는지
    hot: true, // 핫 리로드 (완전한 로드없이 리로드 되도록 핫 모듈 교체)
    liveReload: true, // 변경할 때 앱을 자동으로 업데이트
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

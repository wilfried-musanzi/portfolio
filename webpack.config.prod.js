const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
const terser = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new terser(), new CssMinimizerPlugin()],
  },
});

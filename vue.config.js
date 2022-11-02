const { defineConfig } = require('@vue/cli-service');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = defineConfig({
  css: {
    sourceMap: true,
  },

  chainWebpack: (config) => {
    config.optimization.splitChunks({
      maxAsyncRequests: 6,
      maxInitialRequests: 6,
    });
  },

  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
    devtool: 'source-map',
  },

  transpileDependencies: true,

  pwa: {
    name: 'Eduity App',
    themeColor: '#66615B',
    msTileColor: '#66615B',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#66615B',
  },

  runtimeCompiler: true,
});

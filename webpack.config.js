const webpack = require('webpack');
const PreactRefreshPlugin = require('@prefresh/webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  optimization: { minimize: false, runtimeChunk: 'single' },
  target: 'web',
  entry: {
      boot: './boot',
      app: './app',
  },
  output: {
    filename: () => `[name].js`,
    publicPath: '/assets/',
  },
  plugins: 
    [
        new webpack.DefinePlugin({}),
        new PreactRefreshPlugin(),
      ],
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    quiet: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8080,
    contentBase: process.cwd(),
    headers: { 'access-control-allow-origin': '*' },
  },
};

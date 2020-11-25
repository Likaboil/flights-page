const webpack = require(`webpack`);
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const StylelintPlugin = require(`stylelint-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CssMinimizerPlugin = require(`css-minimizer-webpack-plugin`);
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`),
  },
  devtool: `source-map`,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    watchContentBase: true,
    open: true,
    hot: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `public/index.html`)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StylelintPlugin(),
    new MiniCssExtractPlugin({
      filename: `style.min.css`,
      path: path.join(__dirname, `build`),
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, `css-loader`,
          {loader: `postcss-loader`,
            options: {
              postcssOptions: {
                plugins: [`postcss-preset-env`],
              },
            },
          },
          {loader: `sass-loader`,
            options: {
              sourceMap: true,
              sassOptions: {
                implementation: require(`node-sass`),
                outputStyle: `compressed`,
              },
            },
          }
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: `asset/resource`,
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: `asset/inline`,
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};

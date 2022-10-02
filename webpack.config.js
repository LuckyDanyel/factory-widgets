const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        travelataWidget: path.resolve(__dirname, './vue/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'travelataWidget',
        libraryExport: 'default',
        libraryTarget: 'umd',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
    },
    experiments: {
        topLevelAwait: true
      }
}
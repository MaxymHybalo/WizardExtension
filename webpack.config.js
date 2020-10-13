const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/index.js',
    content: './content.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'linkTag' },
          },
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader' },
          // { loader: 'file-loader' }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

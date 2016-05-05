var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }],
      query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')]
  },
  output: {
    path: './src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
 
     }
  };

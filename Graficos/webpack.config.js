var path = require('path')
var config = {
  entry: {
    // boot: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'src', 'bootstrap.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: ['source-map'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015', 'stage-3']
        }
      }
    ]
  }
}

module.exports = config

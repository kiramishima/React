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
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config

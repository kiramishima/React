var path = require('path')
var webpack = require('webpack')
var config = {
  entry: {
    // boot: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'src', 'bootstrap.js'),
    psar_main: path.join(__dirname, 'src', 'boot_graph_principal.js'),
    psar_ind_info: path.join(__dirname, 'src', 'boot_graph_info_indicador.js'),
    psar_tendencias: path.join(__dirname, 'src', 'boot_graph_tendencias.js'),
    psar_grafica: path.join(__dirname, 'src', 'boot_graph.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
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
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css!sass',
        include: [path.join(__dirname, 'src', 'sass'), path.join(__dirname, 'node_modules')]
      },{
        test: /\.css$/,
        loader: 'style-loader!css'
      },
      {test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|ttf)$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}

module.exports = config

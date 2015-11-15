module.exports = {
  context: __dirname,
  entry: './src/client.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.js',
  },
  externals: {
    'node_modules/cesium/Build/Cesium/Cesium': 'Cesium'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  }
};

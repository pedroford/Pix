const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Aponte para o arquivo de entrada principal do seu projeto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Aponte para a pasta de saída do seu projeto
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader para transpilar código JS moderno
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Adicione loaders para arquivos CSS
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  watch: true,
};

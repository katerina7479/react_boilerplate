production = false;

module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      PageOne: 'app/components/PageOne.jsx',
      PageTwo: 'app/components/PageTwo.jsx',
    },
    extensions: ['','.js','.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower-components|Makefile)/
      }
    ]
  },
  externals: {
  'Config': JSON.stringify(production? require('./config.prod.json') : require('./config.dev.json'))
  }
};

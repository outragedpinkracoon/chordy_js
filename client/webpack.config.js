config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map',
  resolve: {
    alias: {
     handlebars: 'handlebars/dist/handlebars.min.js'
   },
   extensions: ['', '.js']
 },
 module:{
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel', // 'babel-loader' is also a legal name to reference
       query: {
         presets: ['es2015']
       }
     }
   ]
 }
}

module.exports = config;
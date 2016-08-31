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
   }
 }
}

module.exports = config;

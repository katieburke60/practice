//Webpack is a compiler that takes multiple JS modules and bundles them into a single, unified file.
  //Goes through dependencies and adds them where needed.
  //Browser only needs to request, wait for, and process through one file (versus looking at every dependency and JS file.)
  //HTML and CSS files can be turned into bundle-able JS modules using loaders

//In the HTML of the project, we point our <script> tag to "bundle.js", so it references the all-neatly-bundled-up JS file that webpack made for us!

//***See test in module.exports[loaders] below.

//Add webpack with
npm add --dev webpack webpack-dev-server

//webpack.config.js

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      //need to install the css loader package
        //npm install css-loader --save-dev
      { test: /\.css$/, loader: 'style!css' },
      //first looks for all the files in the program that have the extension .css
      //then transforms them into JS modules.
      //That will be bundled together with the rest of the JS into bundle.js file
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  }
};

SOURCES
//https://blog.envylabs.com/getting-started-with-webpack-2-ed2b86c68783
//https://webpack.js.org/concepts/

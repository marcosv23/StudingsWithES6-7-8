module.exports ={
  entry:['@babel/polyfill','./src/main.js'],
  output:{
    path: __dirname +"/public",/*
    global variable that points to to webpack directory */
    filename: 'bundle.js',
  },
  devServer:{
    contentBase: __dirname +'/public'  //path to Open the Server of Aplication
  },
  module:{
    rules: [
      /*these say to application how the
      loader babel will behalf 
      After all, we will handle 
      several files acessed by webpack*/
    {
    test:/\.js$/,
    exclude: /node_modules/,
    use: 
    { 
      loader:'babel-loader'
    }
  }
  ],
},
};
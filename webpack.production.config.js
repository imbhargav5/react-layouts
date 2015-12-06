var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        bundle : ['./dev/main.js'],
        vendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        path: path.join(__dirname, "docs/")
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(__dirname, "dev"),
                path.resolve(__dirname, "src")]
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader",sassLoaders.join('!'))

            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]

}

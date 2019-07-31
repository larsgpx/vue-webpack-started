const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

var extractPlugin = new extractTextPlugin({
    filename:'main.scss'
});

module.exports ={
    entry:'./src/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {                        
                test: /\.js$/,
                exclude: /nodule_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            }
        ]        
           

    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename:"./dist/css/main.css"
        }
    ]
};
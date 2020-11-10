const path=require('path');
const mini=require('mini-css-extract-plugin');
let  HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');


module.exports={
    mode:'development',
    entry:{
        app:'./src/index.js',
        addReview:'./src/addReview.js',
        sendRequest:'./src/sendRequest.js',
        
},
    output:{ filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:"/node_modules/"
                    },{
                test:/\.scss$/,
                use:[
                    mini.loader,
                    {
                        loader:"css-loader",
                        options:{
                            sourceMap:true
                        }
                    },{
                        loader:"postcss-loader",
                        options:{
                            sourceMap:true
                        }
                      
                    },{
                        loader:"sass-loader",
                      
                    }
                    
                    ]
                
            }, {test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                  options: {
                    outputPath: '../fonts',
                }},{
         test: /\.(png|svg|jpg|gif)$/,
         use: [
             {
               loader: "file-loader",

         
               options: {
                 name:'[name].[ext]',
                outputPath:'./img/'
               }
             },
           ],
       }
        ]
    },
    plugins:[
        new mini({
            filename:'[name].css',
            
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'mytitle',
            template:"./src/html/index.html",
            chunks:['app'],
              favicon: "./src/img/plain.png"

        }),new HtmlWebpackPlugin({
            filename:'addReview.html',
            title:'mytitle',
            template:"./src/html/addReview.html",
            chunks:['addReview'],
              favicon: "./src/img/plain.png"
        }),
        new HtmlWebpackPlugin({
            filename:'sendRequest.html',
            title:'mytitle',
            template:"./src/html/sendRequest.html",
            chunks:['sendRequest'],
              favicon: "./src/img/plain.png"
        }),
         new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname,'./src/html/nav.html'),
             template_filename:['index.html','addReview.html','sendRequest.html'],
            location: 'nav',
            }
         ),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname,'./src/html/footer.html'),
             template_filename:['index.html','addReview.html','sendRequest.html'],
            location: 'footer',
            }
         ),
        
    ]
        
    
}
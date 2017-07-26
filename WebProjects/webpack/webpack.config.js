var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); 
//var CommonsChunkPlugin = require('commons-chunk-plugin');
module.exports = {
    context: __dirname,
    entry: {
        vendor: ['./src/script/zxf_page.js','./src/script/jquery.ui.js'],
        ana: ['./src/script/index-ana.js'],
        eve: ['./src/script/index-event.js'],
        spe: ['./src/script/index-spe.js'],
        login: ['./src/script/index-login.js'],
        //jqueryUi: './src/script/jquery-ui.min.js',
        //eve: ['src/script/JS/index-event.js']

    },
    output: {
        path: path.resolve(__dirname,'dist'),  //  HTML JS 文件默认输出路径 ！！
        //path: __dirname,
        filename: 'JS/[name]-[chunkhash].js',
    },
    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        "jquery": "window.jQuery",
         "echarts": "echarts"
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            //use: ['style-loader','css-loader','postcss-loader'],
            use: ExtractTextPlugin.extract({
                        use: ['css-loader' ,'postcss-loader'],
                        fallback: 'style-loader',
                    }),
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname,'src/style/images/'),
            include: path.resolve(__dirname,'src/script/'),
            query:{
                presets: ['env']
            }
        },
        {
            test: /\.(jpg|png|gif|svg)$/i,  // loader+query   use + options
            loader: 'url-loader',
            query: {
                name: '[hash:8]-[name].[ext]',
                limit: 8192
            }
        },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'Spe-test.html',
            template: 'src/html/BDo-Spe.html',
            chunks: ['spe','vendor'],
            minify: {
                removeComments: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'Event-test.html',
            template: 'src/html/BDo-Event.html',
            chunks: ['eve','vendor'],
            minify: {
                removeComments: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'Ana-test.html',
            template: 'src/html/BDo-Ana.html',
            chunks: ['ana','vendor'],
            minify: {
                removeComments: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'Login-test.html',
            template: 'src/html/BDo-Login.html',
            chunks: ['login'],
            minify: {
                removeComments: true
            }
        }),
/*        new UglifyJSPlugin({ //压缩
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),*/
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        new ExtractTextPlugin({
            filename:'assets/style/style-[id]-[contenthash].css'
        }),
    ]
}
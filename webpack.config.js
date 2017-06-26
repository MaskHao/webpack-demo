/**
 * Created by WillWang on 2017/5/16.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var open = require('open');

module.exports = {
     // entry: './src/app/index.js',
    context: path.resolve(__dirname, './src'),   // 用于从配置中解析入口起点(entry point)和 loader
    entry: {
        index: [
             //'react-hot-loader/patch',// 开启 React 代码的模块热替换(HMR)
            //'webpack-dev-server/client?http://localhost:2017',// 为 webpack-dev-server 的环境打包代码  然后连接到指定服务器域名与端口
           // 'webpack/hot/dev-server',  // 为热替换(HMR)打包好代码  only- 意味着只有成功更新运行代码才会执行热替换(HMR)
            "./app/index",
            "babel-polyfill",
            "./style/content"
        ],
        // vendor: 'moment'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/",
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        //library: "CANG",
        //libraryTarget: "window",
        // filename: "[name].[chunkhash].js",
        sourceMapFilename: "[file].map"
    },
    module:{
        // noParse:/jquery|lodash/,   //防止解析任何与给定正则表达式相匹配的文件
        rules:[
            {test:/\.css/,
                // use: ['style-loader','css-loader']
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})

            },
            {test:/\.less/,
                // use: ['style-loader','css-loader']
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})

            },
            {test:/\.scss/,
                // use: ['style-loader','css-loader']
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})

            },
            {test:/\.ts$/, use:'ts-loader'},
            {
                test:/\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "src/app")          //匹配文件
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")  //不匹配文件
                ],
                use: 'babel-loader',                     //相对上下文解析
                // options: {                                      // loader 的可选项
                //     presets: ["es2015",'react']
                // },
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|svg)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 100000
            //         }
            //     }
            // }
        ]
    },


    //解析模块请求的选项 （不适用于对loader解析）
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src/app")
        ],
        // 解析模块时应该搜索的目录

        // 使用的扩展名    // 现在可以写 require('file') 代替 require('file.json')
        extensions: [".js", ".json", ".jsx", ".css", ".scss", ".less"],
        alias: {
            // 模块别名列表
            'react': path.resolve(__dirname, "node_modules/react/dist/react"),
            'react-dom': path.resolve(__dirname, "node_modules/react-dom/dist/react-dom")
            // 起别名 "react-dom"
            // 模块别名相对于当前上下文导入
        }
    },

    //devtool: "source-map",     // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试  牺牲了构建速度的 `source-map' 是最详细的。

    //stats: "errors-only",       // 精确控制要显示的 bundle 信息

    devServer: {
        hot:true,        // 开启服务器的模块热替换(HMR)
        port:2011,
        inline: true, //设置为true，当源文件改变会自动刷新页面
        //compress:true,  //一切服务都启用gzip压缩
        contentBase: [path.resolve(__dirname, "src")],            //服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        historyApiFallback: true,  //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },

    plugins: [
        new ExtractTextPlugin({filename: '[name].css', allChunks: true,}),
        new webpack.optimize.CommonsChunkPlugin({
            // name: 'vendor', //指定公共bundle的名字
            //names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
            name: 'shared',
            filename: 'shared.js',
            minChunks: 2,
        }),
        // new webpack.optimize.CommonsChunkPlugin( common,common.js),


        // new webpack.optimize.UglifyJsPlugin({}),

        // 对应全局变量 在运行 webpack 时设置环境变量，并且使用 Node.js 的 process.env 来引用变量。NODE_ENV 变量通常被视为事实标准
        // cross-env 包来跨平台设置(cross-platform-set)环境变量
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production'),
        //         'DEBUG': false
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),  //模块热替换

        new webpack.ProvidePlugin({                 //不要每个页面要import
            $: 'jquery',
            "React": "react",
            "ReactDOM": "react-dom",
            "_": "lodash",
            "classnames": "classnames"
        }),
       // new webpack.NamedModulesPlugin(), // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

    ]
};

/**
 * Created by WillWang on 2017/5/25.
 */
/**
 * Created by WillWang on 2017/5/16.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './src/app/index.js',

    entry: {
        index: ["./src/app/index.js","babel-polyfill","./src/style/index"],
        // vendor: 'moment'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/",
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        // filename: "[name].[chunkhash].js",
        sourceMapFilename: "[file].map"
    },
    module:{
        // noParse:/jquery|lodash/,   //防止解析任何与给定正则表达式相匹配的文件
        rules:[
            {test:/\.(css|less|scss)/,
                // use: ['style-loader','css-loader']
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader','less-loader'], publicPath: "/dist"})

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
            }
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

    devtool: "source-map", // enum
    // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // 牺牲了构建速度的 `source-map' 是最详细的。

    stats: "errors-only",
    // 精确控制要显示的 bundle 信息

    devServer: {
        port:8011,
        inline: true, //设置为true，当源文件改变会自动刷新页面
        compress:true,  //一切服务都启用gzip压缩
        contentBase: [path.resolve(__dirname, "src")],            //服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        historyApiFallback: true,  //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },

    plugins: [
        new ExtractTextPlugin({filename: '[name].css', allChunks: true,}),
        new webpack.optimize.CommonsChunkPlugin({
            // name: 'vendor', //指定公共bundle的名字
            names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
        }),
        // new webpack.optimize.CommonsChunkPlugin( common,common.js),


        new webpack.optimize.UglifyJsPlugin(),

        // 对应全局变量 在运行 webpack 时设置环境变量，并且使用 Node.js 的 process.env 来引用变量。NODE_ENV 变量通常被视为事实标准
        // cross-env 包来跨平台设置(cross-platform-set)环境变量
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'DEBUG': false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),  //模块热替换

        new webpack.ProvidePlugin({                 //不要每个页面要import
            $: 'jquery',
            "React": "react",
            "ReactDOM": "react-dom",
            "_": "lodash",
            "classnames": "classnames"
        }),
    ]
};

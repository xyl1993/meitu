var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var TEM_PATH = path.resolve(ROOT_PATH, 'views/template');

module.exports = {
    entry: {
        main: [SRC_PATH + '/main.js']//,SRC_PATH + '/router/index.js'
    },
    output: {
        path: 'public/dist',
        publicPath: 'public/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [/*{
            test: /\.jsx?$/,
            loader: 'babel',
            include: PUB_PATH,
            query: {
                presets: [
                    ["es2015"]
                   
                  ],
            }
        }, */{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            js: 'babel'
            //css: 'style!css!autoprefixer',
            // html:'html-loader'
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',
    resolve: {
      // require时省略的扩展名，如：require('module') 不需要module.js
      extensions: ['', '.js', '.vue','.css'],
      // 别名，可以直接使用别名来代表设定的路径以及其他
      alias: {
          'vue$': 'vue/dist/vue.js'
      }
  },
}

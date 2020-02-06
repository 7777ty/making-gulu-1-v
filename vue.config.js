const path = require('path')  //引入path模块，nodeJs的模块。

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')  //首先，确认icons的目录

    config.module
        .rule('svg-sprite') //添加名为'svg-sprite'的规则
        .test(/\.svg$/) //文件如果能够符合这一规则'\.svg$'这是一正则表达式（以svg结尾），我就要使用它的规则。
        .include.add(dir).end() // 只包含 icons 目录
        .use('svg-sprite-loader').loader ('svg-sprite-loader').options({extract:false}).end()  //声明使用的loader，添加一个选项，extrac：false意为不要解析出文件。loader配置完毕。
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

  }
}

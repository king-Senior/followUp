/**
 *  打包配置
 *  执行  node r.js -o rquire_config.js
 *  参数：
 *      appDir              要打包的目录
 *      baseUrl             js文件路径
 *      dir                 打包后输出的路径
 *      mainConfigFile      requirjs配置文件
 *      name                单模块打包
 *      modules             多模块打包
 *      exclude:[]          移除依赖
 *      include:[]          添加依赖（添加文件一起打包）
 *      excludeShallow:[]   潜移除依赖
 *
 *      使用npm打包 ，不需要使用 node r.js -o rquire_config.js
 *
 *      在根目录初始化  npm init
 *      在package.json  scripts(脚本) : { "package":" node r.js -o rquire_config.js "  }
 *      执行npm打包  npm run package
 *
 *
 */
({
    appDir:'./',
    baseUrl:'./',
    dir:'./build',
    // optimze:'uglify',
    mainConfigFile:'./main.js',
    modules:[
        {name:'index_main'},
        {name:'historyorder_main'},
        {name:'hotsales_main'},
        {name:'porgress_main'},
        {name:'searchlist_main'}
        ]
})
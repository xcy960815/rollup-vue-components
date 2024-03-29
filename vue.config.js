const {
    defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
    runtimeCompiler: true,
    transpileDependencies: true,
    pages: {
        //配置多页面入口
        index: {
            entry: './example/main.js',
            //当有多行是，VUE以最后一行entry为准。         
            template: 'example/index.html',
        },
    },
})
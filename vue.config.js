const path = require("path");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    // 导出路径
    publicPath: './',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    // Vue 兼容ie 是个数组，可配置。
    transpileDependencies: true,
    // 语法检查
    lintOnSave: false, 
    // 可以用来传递任何第三方插件选项
    pluginOptions: {
        // less theme
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                path.resolve(__dirname, "./src/theme/style.less"),
            ],
        },
    },
})
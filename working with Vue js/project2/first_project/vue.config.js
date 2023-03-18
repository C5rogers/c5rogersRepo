const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
                changeOrgin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        }
    }
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/base.scss";'
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 100,
              propList: ["*"],
            }),
            require('autoprefixer')({
              overrideBrowserslist: [
                "last 10 versions", // 所有主流浏览器最近10版本用
              ],
            }),
          ]
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
})
// const { defineConfig } = require('@vue/cli-service')
// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: '@import "~@/assets/scss/base.scss";'
//       }
//     }
//   },
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:7001',
//         changeOrigin: true
//       }
//     }
//   }
// }
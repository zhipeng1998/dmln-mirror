
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  base: '/',
  plugins: [
    vue(),
    inject({
      $: 'jquery', // 这里会自动载入 node_modules 中的 jquery
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
      BMap: 'BMap'
    }),
    createHtmlPlugin({
      /**
       * 需要注入 index.html ejs 模版的数据
       * https://blog.csdn.net/SilenceJude/article/details/128297371
       */
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString()
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build:{
    target:['edge90','chrome90','firefox90','safari15']
  }
})


if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;
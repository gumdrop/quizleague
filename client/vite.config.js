import { defineConfig } from "vite";
import scalaJSPlugin from "@scala-js/vite-plugin-scalajs";
import {resolve} from 'path';

export default defineConfig({
  plugins: [scalaJSPlugin({
      cwd:'../',
      projectID:'client'
  })],
  resolve: {
      alias: {
        vue: resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
      },
      dedupe: ['vuetify', 'vue'],
    },
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, './index.html'),
        resolve(__dirname, './maintain/index.html'),
       ],
       output: {
       manualChunks: {
       		firebase: ['firebase'],
       		vuetify: ['vuetify'],
       		rxjs: ['rxjs']
       	}
       }
    },
  },
  server: {
      proxy: {
        '/rest': 'http://localhost:8080',
    }
  },
});
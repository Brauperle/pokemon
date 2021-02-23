import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import {terser} from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  root:"./",
  plugins: [
    reactRefresh()
  ],
  build: {
    // minify:"terser",
    // terserOptions: {

    // },
    // cleanCssOptions: {

    // },
    // rollupOptions: {
    //   plugins: [
    //     // terser({
    //     // })
    //     // nodeResolve({
    //     //   extensions: ['.js', '.jsx']
    //     // })
    //   ]
    // }
  }
})

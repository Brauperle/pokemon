import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import commonjs from '@rollup/plugin-commonjs'
// import babel from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh()
    // {
    //   ...commonjs(), // CommonJS modules to ES6
    //   apply: 'build' // Only used when using vite build
    // },
    // {
    //   ...babel(), // integration between Rollup and Babel
    //   apply: 'build' // Only used when using vite build
    // }
  ]
})

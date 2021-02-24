import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import babel from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    {
      ...babel({
        babelHelpers: 'runtime',
        exclude: /node_modules/,
        plugins: [
          ['babel-plugin-styled-components', {
            minify: true,
            transpileTemplateLiterals: true
          }],
          ['@babel/transform-runtime', {
            regenerator: true
          }]
        ]
      }),
      apply: 'build' // Only used when using vite build
    }
  ]
})

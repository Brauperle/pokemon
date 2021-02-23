import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  build: {
    rollupOptions: {
      plugins:[
        nodeResolve({
          extensions:['.js', '.jsx']
        })
      ]
    }
  }
})

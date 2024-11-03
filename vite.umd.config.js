import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
const resolvePath = (path) => {
  return resolve(import.meta.dirname, path)
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('src/')
    }
  },
  publicDir: false,
  build: {
    target: "modules",
    outDir: 'dist/umd',
    lib: {
      entry: resolvePath('src/bundle.js'),
      formats: ['umd'],
      name: 'eleUI',
      fileName: (format, entryName) => `ele-ui-${entryName}.${format}.js`,
    },
    rollupOptions: {

      external: [
        'vue'
      ],
      output: {
        exports: 'named',
        globals: {
          vue:'Vue'
        }
      }
    }
  }
})

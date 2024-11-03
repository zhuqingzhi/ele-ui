import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vite.dev/config/
const resolvePath = (path) => {
  return resolve(import.meta.dirname,path)
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
    outDir: 'dist/es',
    lib: {
      entry: resolvePath('src/bundle.js'),
      formats: ['es'],
      name:'eleUI',
      fileName: (format, entryName) => `ele-ui-${entryName}.${format}.js`,
    },
    rollupOptions: {

      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-free'
      ]
    }
  }
})

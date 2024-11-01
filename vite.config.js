import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env': process.env
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '~': '/src'
        }
    }
})

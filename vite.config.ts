import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    publicDir: "disable",
    base: command === "build" ? "/dist/" : "",
    plugins: [
        reactRefresh(),
    ],
    build: {
        manifest: true,
        outDir: 'public/dist',
        rollupOptions: {
            input: 'resources/ts/app.ts'
        }
    }
}))

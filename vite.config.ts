import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    publicDir: "disable",
    base: command === "build" ? "/dist/" : "",
    plugins: [
        reactRefresh(),
        tsconfigPaths(),
        svgr(),
    ],
    build: {
        manifest: true,
        outDir: 'public/dist',
        rollupOptions: {
            input: 'resources/js/app.tsx'
        }
    }
}))

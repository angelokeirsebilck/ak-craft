import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import manifestSRI from 'vite-plugin-manifest-sri';
import {visualizer} from 'rollup-plugin-visualizer';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import critical from 'rollup-plugin-critical';
import {ViteFaviconsPlugin} from 'vite-plugin-favicon2';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        outDir: 'web/dist',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
            },
            output: {
                sourcemap: true
            },
        }
    },
    plugins: [
        critical({
            criticalUrl: 'http://localhost',
            criticalBase: 'web/dist/criticalcss/',
            criticalPages: [
                {uri: '/', template: 'index'},
            ],
            criticalConfig: {}
        }),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        nodeResolve({
            moduleDirectories: [
                path.resolve('./node_modules'),
            ],
        }),
        // ViteFaviconsPlugin({
        //     logo: "src/img/favicon.png",
        //     inject: false,
        //     outputPath: 'favicons',
        // }),
        ViteRestart({
            reload: [
                path.resolve(__dirname, 'templates/**/*'),
            ],
        }),
        vue({
            customElement: true
        }),
        viteCompression({
            filter: /\.(js|mjs|json|css|map)$/i
        }),
        manifestSRI(),
        visualizer({
            filename: 'web/dist/assets/stats.html',
            template: 'treemap',
            sourcemap: true,
        }),
    ],
    publicDir: 'src/public',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-bundler'
        },
        preserveSymlinks: true,
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
    },
}));
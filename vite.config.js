import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
    server: {
        host : "16.171.64.154",
        // https : true,
    },
    plugins: [
        // mkcert(),
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(), 
    ],
});

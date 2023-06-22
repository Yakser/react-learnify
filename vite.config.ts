import {defineConfig} from 'vite';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({}),
	],
	css: {
		modules: {
			generateScopedName: '[local]_[hash:base64:5]',
		}
	}

});

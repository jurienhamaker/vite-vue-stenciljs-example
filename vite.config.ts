import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag: string) => /^p-/.test(tag),
				},
			},
		}),
	],
	server: {
		host: true,
		port: 4000,
		origin: 'http://0.0.0.0:4000',
	},
});

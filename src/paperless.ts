import '@paperless/core/dist/paperless/paperless.css';
import { applyPolyfills, defineCustomElements } from '@paperless/core/loader';
import { Plugin } from 'vue';

export const Paperless: Plugin = {
	async install() {
		await applyPolyfills();
		await defineCustomElements(window);
		return;
	},
};

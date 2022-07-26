import '@paperless/core/dist/paperless/paperless.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import { Paperless } from './paperless';

createApp(App).use(Paperless).mount('#app');

import 'normalize.css';
import { createApp } from 'vue';

import Button from '@/components/Button/Button.vue';

import App from '@/App.vue';
import '@/registerServiceWorker';

import i18n from '@/i18n';
import router from '@/router';
import store from '@/store';

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(store);

app.component('r-button', Button);

app.mount('#root');

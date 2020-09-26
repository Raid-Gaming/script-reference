import 'normalize.css';
import { createApp } from 'vue';

import Button from '@/components/Button/Button.vue';
import Section from '@/components/Section/Section.vue';

import App from '@/App.vue';
import '@/registerServiceWorker';

import i18n from '@/i18n';
import router from '@/router';

const app = createApp(App);

app.use(i18n);
app.use(router);

app.component('r-button', Button);
app.component('r-section', Section);

app.mount('#root');

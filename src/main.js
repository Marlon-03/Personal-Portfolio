import { createApp } from 'vue';
import './style.css';
import './assets/styles/tailwind.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

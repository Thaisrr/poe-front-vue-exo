import { createApp } from 'vue'
import App from './App.vue'
import router from "@/Router";

const application = createApp(App);
application.use(router);
application.mount('#app');

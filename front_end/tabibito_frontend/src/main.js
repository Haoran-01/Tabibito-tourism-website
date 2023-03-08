import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import {createPinia} from "pinia";
import naive from 'naive-ui'


const app = createApp(App);
const pinia = createPinia();


app.use(router);
app.use(pinia);
app.use(naive);
app.mount('#app')

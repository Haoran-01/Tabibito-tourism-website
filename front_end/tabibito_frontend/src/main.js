import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import {createPinia} from "pinia";
import naive from 'naive-ui'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App);
const pinia = createPinia();


app.use(router);
app.use(pinia);
app.use(Toast);

app.use(naive);
app.mount('#app')



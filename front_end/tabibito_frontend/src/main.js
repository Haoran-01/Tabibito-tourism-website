import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import {createPinia} from "pinia";
import naive from 'naive-ui'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createI18n } from 'vue-i18n'
import enLocale from './i18n/en.js'
import zhLocale from './i18n/zh.js'

const app = createApp(App);
const pinia = createPinia();

const i18n = createI18n({
    locale: 'zh',
    messages: {
        en: enLocale,
        zh: zhLocale
    }
})

app.use(router);
app.use(pinia);
app.use(Toast);
app.use(i18n);
app.use(naive);
app.mount('#app')



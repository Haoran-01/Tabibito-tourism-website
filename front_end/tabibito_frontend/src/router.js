import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";
import registerView from "./components/RegisterView/registerView.vue";
import aboutUsView from "./components/AboutUsView/aboutUsView.vue";


const routes = [
    { path: '/', component: loginView },
    { path: '/register', component: registerView },
    { path: '/about', component: aboutUsView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
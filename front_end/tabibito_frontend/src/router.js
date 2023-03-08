import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";


const routes = [
    { path: '/', component: loginView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";
import registerView from "./components/RegisterView/registerView.vue";


const routes = [
    { path: '/', component: loginView },
    { path: '/register', component: registerView },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
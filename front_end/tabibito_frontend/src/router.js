import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";
import registerView from "./components/RegisterView/registerView.vue";
import aboutUsView from "./components/AboutUsView/aboutUsView.vue";
import test from "./components/ForgetPasswordView/test.vue";


const routes = [
    { path: '/', component: aboutUsView },
    { path: '/login', component: loginView },
    { path: '/', component: loginView },
    { path: '/register', component: registerView },
    { path: '/forget', component: forgetPasswordView},
    { path: '/test', component: test},


    // { path: '/', component: footerView},
    // { path: '/', component: overheardFromTravelersView},
    { path: '/about', component: aboutUsView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
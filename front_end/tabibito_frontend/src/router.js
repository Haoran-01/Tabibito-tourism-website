import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";
import registerView from "./components/RegisterView/registerView.vue";
import aboutUsView from "./components/AboutUsView/aboutUsView.vue";
import forgetPasswordView from "./components/ForgetPasswordView/forgetPasswordView.vue";
import resetView from "./components/ForgetPasswordView/resetView.vue";
import homepageView from "./components/HomepageView/HomepageView.vue";
import backListView from "./components/BackListView/BackListView.vue";


const routes = [
    { path: '/', component: mostPopularTours },
    { path: '/login', component: loginView },
    { path: '/register', component: registerView },
    { path: '/forget', component: forgetPasswordView},
    { path: '/about', component: aboutUsView},
    { path: '/reset', component: resetView},
    { path: '/homepage', component: homepageView},
    { path: '/backList', component: backListView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;

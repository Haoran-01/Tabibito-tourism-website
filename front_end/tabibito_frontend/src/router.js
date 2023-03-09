import {createRouter, createWebHashHistory} from 'vue-router'
// import loginView from "./components/LoginView/loginView.vue";
import ourTeamView from "./components/AboutUsView/ourTeamView.vue";


const routes = [
    { path: '/', component: ourTeamView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
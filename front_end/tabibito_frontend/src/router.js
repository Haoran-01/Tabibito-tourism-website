// import {createRouter, createWebHashHistory} from 'vue-router'
// import loginView from "./components/LoginView/loginView.vue";
// import registerView from "./components/RegisterView/registerView.vue";
// import loginView from "./components/LoginView/loginView.vue";
import aboutUsView from "./components/AboutUsView/aboutUsView.vue";
// import navigationBar from "./components/GeneralComponents/navigationBar.vue";
// import aboutUsView from "./components/AboutUsView/aboutUsView.vue";
// import loginView from "./components/LoginView/loginView.vue";
// import ourTeamView from "./components/AboutUsView/ourTeamView.vue";
// import overheardFromTravelersView from "./components/AboutUsView/overheardFromTravelersView.vue";
// import footerView from "./components/GeneralComponents/footerView.vue";


const routes = [
    { path: '/', component: aboutUsView },
    { path: '/register', component: registerView },

    { path: '/', component: footerView},
    { path: '/', component: overheardFromTravelersView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;
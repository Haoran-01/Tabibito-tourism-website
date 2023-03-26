import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "./components/LoginView/loginView.vue";
import registerView from "./components/RegisterView/registerView.vue";
import aboutUsView from "./components/AboutUsView/aboutUsView.vue";
import forgetPasswordView from "./components/ForgetPasswordView/forgetPasswordView.vue";
import resetView from "./components/ForgetPasswordView/resetView.vue";
import homepageView from "./components/HomepageView/HomepageView.vue";
import chooseTourTypes from "./components/HomePageView/chooseTourTypes.vue";
import mostPopularTours from "./components/HomePageView/mostPopularTours.vue";
import footerView from "./components/GeneralComponents/footerView.vue";
import sideBarView from "./components/StaffPortalView/sideBarView.vue";
import staffPortalView from "./components/StaffPortalView/staffPortalView.vue";
import rightContentView from "./components/StaffPortalView/rightContentView.vue";
import backListView from "./components/BackListView/BackListView.vue";
import projectManagementDetailView from "./components/PMDetailView/projectManagementDetailView.vue";


const routes = [
    { path: '/', component: rightContentView },
    { path: '/login', component: loginView },
    { path: '/register', component: registerView },
    { path: '/forget', component: forgetPasswordView},
    { path: '/about', component: aboutUsView},
    { path: '/reset', component: resetView},
    { path: '/homepage', component: homepageView},
    { path: '/backList', component: backListView},
    { path: '/management/project_detail', component: projectManagementDetailView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;

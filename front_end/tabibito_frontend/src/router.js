import {createRouter, createWebHashHistory} from 'vue-router'
const loginView = () =>  import("./components/LoginView/loginView.vue");
const registerView = () => import("./components/RegisterView/registerView.vue");
const aboutUsView = () => import("./components/AboutUsView/aboutUsView.vue");
const forgetPasswordView = () => import("./components/ForgetPasswordView/forgetPasswordView.vue");
const resetView = () => import("./components/ForgetPasswordView/resetView.vue");
const homepageView = () => import("./components/HomepageView/HomepageView.vue");
const backListView = () => import("./components/BackListView/BackListView.vue");
const reservationView = () => import("./components/ReservationView/reservationView.vue");
const projectManagementDetailView = () => import("./components/PMDetailView/projectManagementDetailView.vue");
const TravelDetailsView = () => import("./components/TravelDetailsView/TravelDetailsView.vue");
const leftListView = () => import("./components/SearchPageView/leftListView.vue");
const StaffPortalView = () => import("./components/StaffPortalView/staffPortalView.vue");
const notFoundView = () => import("./components/ErrorViews/notFoundView.vue");
const forbiddenView = () => import("./components/ErrorViews/forbiddenView.vue");

const routes = [
    { path: '/', component: homepageView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFoundView },
    { path: '/forbidden', name: 'Forbidden', component: forbiddenView },
    { path: '/login', component: loginView },
    { path: '/register', component: registerView },
    { path: '/forget', component: forgetPasswordView},
    { path: '/about', component: aboutUsView},
    { path: '/reset', component: resetView,
        beforeEnter: (to, from) => {
        if (from.path !== '/forget'){
            return {name: 'Forbidden'};
        }else
            return true;
        }
    },
    { path: '/management', component: StaffPortalView},
    { path: '/management/project_list', component: backListView},
    { path: '/management/reservation_list', component: reservationView},
    { path: '/management/project_detail/:id', component: projectManagementDetailView},
    { path: '/management/project_detail/add', component: projectManagementDetailView},
    { path: '/trip/:trip_id', component: TravelDetailsView},
    { path: '/search_result', name: 'search', component: leftListView},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router;

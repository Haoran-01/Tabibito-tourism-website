import {defineStore} from "pinia";

export const useStore = defineStore('store', {
    state: () => {
        return{
            user_login_status: false
        }
    }
})
import {defineStore} from "pinia";

export const useStore = defineStore('store', {
    state: () => {
        return{
            user_login_status: false,
        }
    }
})

export const useLangStore = defineStore('langStore', {
    state: () => {
        return{
            language: 'en'
        }
    }
})
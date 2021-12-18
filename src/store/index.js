import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainActive: false
    },
    getters: {},
    mutations: {
        toggleMenu: (state) => {
            state.mainActive = !state.mainActive
        }
    },
    actions: {},
});

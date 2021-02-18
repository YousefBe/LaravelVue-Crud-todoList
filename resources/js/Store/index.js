import Vue from "vue";
import Vuex from "vuex";

import module from "./Modules/module";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        module
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});

export default store;

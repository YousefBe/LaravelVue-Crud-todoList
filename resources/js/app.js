require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";

import router from "./Router/index";
import store from "./Store/index";
import App from "./App.vue";

Vue.use(VueRouter);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusSquare, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);
const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});

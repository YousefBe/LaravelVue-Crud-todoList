import moduleName from "../Pages/about.vue";

const routes = [
    {
        path: "/about",
        component: () => import("../Pages/about.vue"),
        name: "about"
    }
];

export default routes;

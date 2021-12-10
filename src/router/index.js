import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "/",
                name: "Routes",
                meta: {
                    logout: true,
                    public: true,
                },
                component: () => import("../views/Routes.vue"),
            },
        ],
    },

    {
        path: "/login",
        component: () => import("../layouts/LoginLayout.vue"),
        children: [
            {
                path: "/",
                name: "login",
                meta: {
                    logout: true,
                    public: true,
                },
                component: () => import("../views/Login.vue"),
            },
        ],
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;
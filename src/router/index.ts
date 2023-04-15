import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import('../pages/HomePage.vue')
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;
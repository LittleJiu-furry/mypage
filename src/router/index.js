import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomePage from '../components/home.vue'

const router = [
    {
        path: "/:pathMatch(.*)*", // 404
        name: "NotFound",
        component: () => import('../components/notfount.vue')
    },
    {
        path: "/",
        component: HomePage,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("../views/tabsview.vue"),
            },
            {
                path: "friendlink",
                component: () => import("../views/tabsview.vue"),
                props: {
                    show: "friendlink"
                }
            },
            {
                path: "timeline",
                component: () => import("../views/tabsview.vue"),
                props: {
                    show: "timeline"
                }
            },
            {
                path: "article/:show",
                name: "Article",
                component: () => import("../views/pageArticle.vue"),
                props: true,
            }
            
        ]
    }
]

export default createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: router
})
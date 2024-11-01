import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect:'/icon'
    },
    {
        path: '/icon',
        component: ()=>import('@/pages/Icon/index.vue')
    },
    {
        path: '/button',
        component: () => import('@/pages/Button/index.vue')
    },
    {
        path: '/card',
        component: () => import('@/pages/Card/index.vue')
    },
    {
        path: '/dialog',
        component: () => import('@/pages/Dialog/index.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass:'active'
})
export default router
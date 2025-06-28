import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import('./views/HomeView.vue')
        },
        {
            path: "/cursos",
            component: () => import('./views/CursoView.vue')
        }
    ]

});
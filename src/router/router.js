// router.js
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '../components/HomeComponent.vue';
import UserProfile from '../components/UserProfile.vue';


const routes = [
    { path: '/', component: HomeComponent },
    { path: '/user/:username', component: UserProfile, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
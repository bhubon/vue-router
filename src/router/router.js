import { createRouter, createWebHistory, useRoute } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Post from '../components/Post.vue';
import Posts from '../components/Posts.vue';
import User from '../components/User.vue';
import UserProfile from '../components/UserProfile.vue';
import NotFound from '../components/NotFound.vue';


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/post', component: Posts },
    { path: '/post/:id', component: Post, name: 'post' },
    {
        path: '/user/:id?',
        component: User,
        name: 'user',
        children: [
            { path: "profile", component: UserProfile }
        ]
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
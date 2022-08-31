import {createRouter, createWebHistory} from "vue-router";
import Counter from "@/components/Counter";
import Home from "@/components/Home";


const router = createRouter({
    routes : [
        {path: '/', name: 'home', component: Home},
        {path: '/counter-url', name: 'counter-name', component: Counter }
    ],
    history: createWebHistory()
})

export default router;
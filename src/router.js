
import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
// lazy-loaded
// const Profile = () => import("./components/Profile.vue")


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
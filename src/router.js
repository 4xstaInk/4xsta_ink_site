
import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
// lazy-loaded
const News = () => import("./pages/News.vue");
const Covid19 = () => import("./pages/CovidPage.vue");
const tester = () => import("./pages/testerpage.vue");
const PageNotFound = () => import("./pages/404.vue");

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
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path:"/covid19",
    name: "covid19",
    component:Covid19
  },
  {
    path:"/tester",
    name:"tester",
    component:tester,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition){
    return { x: 0, y: 0 };
  }
});
// window.scrollTo(0, 0)

export default router;
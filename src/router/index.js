import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import PomeloView from "../views/Pomelo2023.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/pomelo2022",
    name: "pomelo2022",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About2View.vue");
    },
  },
  {
    path: "/pomelo2023",
    name: "pomelo",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Pomelo2023.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

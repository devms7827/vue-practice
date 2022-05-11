import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/basic",
    name: "basic",
    component: () => import("../views/BasicPractice.vue"),
  },
  {
    path: "/socks-cart",
    name: "socks-cart",
    component: () => import("../views/SocksCart.vue"),
  },
  {
    path: "/task-tracker",
    name: "task-tracker",
    component: () => import("../views/TaskTracker.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/users/:userId",
    name: "user",
    component: () => import("../components/SingleUserDetails.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

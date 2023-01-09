import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Auth from "../pages/Auth.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home ,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth ,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;

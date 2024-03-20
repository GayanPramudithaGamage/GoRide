import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import RideView from "../views/RideView.vue";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/ride",
    name: "ride",
    component: RideView,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

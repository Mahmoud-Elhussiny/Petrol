import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainPage from "../views/MainPage.vue";
import ExercisesView from "../views/ExercisesView.vue";
import ExercisesView2 from "../views/ExercisesView2.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/MainPage",
      name: "MainPage",
      component: MainPage,
      children: [
        {
          path: "/exercises",
          name: "exercise",
          component: ExercisesView,
        },
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/exercises2",
          name: "exercises2",
          component: ExercisesView2,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

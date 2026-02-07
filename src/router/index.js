import { createRouter, createWebHistory } from "vue-router";
import UserRegister from "@/UserRegister.vue";
import UserLogin from "@/UserLogin.vue";
import Calculator from "@/Calculator.vue"; 

const routes = [
  { path: "/", redirect: "/register" },
  { path: "/register", name: "UserRegister", component: UserRegister },
  { path: "/login", name: "UserLogin", component: UserLogin },
  { path: "/calculator", name: "Calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

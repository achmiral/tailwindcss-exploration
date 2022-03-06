import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Dashboard from "../components/Dashboard.vue"
import BottomNavigation from "../components/BottomNavigation.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/bottom-navigation",
    name: "BottomNavigation",
    component: BottomNavigation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from "vue-router";
import Profile from '../views/empty-view'
import Dashboard from '../views/dashboard-view'

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/empty",
    name: "Empty",
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
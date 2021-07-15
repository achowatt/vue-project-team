import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EditUsers from "../views/EditUsers.vue";
import Project from "../views/Project.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editUsers/:id",
    name: "EditEmployee",
    component: EditUsers,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

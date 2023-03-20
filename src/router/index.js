import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ConditionsView from "../views/ConditionsView";
import TestimonialsView from "../views/TestimonialsView";
import ProgramView from "../views/ProgramView";
import ContactView from "../views/ContactView";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/conditions",
    component: ConditionsView,
  },
  {
    path: "/testimonials",
    component: TestimonialsView,
  },
  {
    path: "/program",
    component: ProgramView,
  },
  {
    path: "/contact",
    component: ContactView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

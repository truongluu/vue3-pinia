import { createRouter, createWebHashHistory } from "vue-router";
const HomePage = () => import("./pages/home.vue");
const AboutPage = () => import("./pages/about.vue");
export const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

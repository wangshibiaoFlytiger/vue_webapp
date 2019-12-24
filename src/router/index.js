import Vue from "vue";
import VueRouter from "vue-router";
import FilmList from "@/views/Film/FilmList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/film/filmList"
  },
  {
    path: "/film/filmList",
    name: "filmList",
    component: FilmList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

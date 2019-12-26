import Vue from "vue";
import VueRouter from "vue-router";
import FilmList from "@/views/Film/FilmList";
import FilmDetail from "@/views/Film/FilmDetail";
import Player from "@/views/Video/Player";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/film/filmList"
  },

  // film相关
  {
    path: "/film/filmList",
    name: "filmList",
    component: FilmList
  },
  {
    path: "/film/filmDetail",
    name: "filmDetail",
    component: FilmDetail
  },

  // video相关
  {
    path: "/video/player",
    name: "player",
    component: Player
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

<template>
  <div class="container">
    <van-row class="playUrlInfo">
      <film-play-url-info :playUrlInfo="film.playUrlInfo"></film-play-url-info>
    </van-row>
    <van-row>
      <van-col class="title" span="5">标题</van-col>
      <van-col class="content">{{ film.title }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">类别</van-col>
      <van-col class="content">{{ film.category }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">导演</van-col>
      <van-col class="content">{{ film.director }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">演员</van-col>
      <van-col class="content">{{ film.actor }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">语种</van-col>
      <van-col class="content">{{ film.language }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">区域</van-col>
      <van-col class="content">{{ film.location }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">上映日期</van-col>
      <van-col class="content">{{ film.publishYear }}</van-col>
    </van-row>
    <van-row>
      <van-col class="title" span="5">简介</van-col>
      <van-col class="content">{{ film.desc }}</van-col>
    </van-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FilmPlayUrlInfo from "@/components/Film/FilmPlayUrlInfo";

export default {
  name: "FilmDetail",
  components: { FilmPlayUrlInfo },
  props: {},

  data() {
    return {
      film: {},
      sourceTitleList: [],
      playUrlInfo: {}
    };
  },
  async mounted() {
    // vuex的action方法返回的是Promise对象
    let film = await this.getFilm({
      filmId: this.$route.query.filmId
    });

    this.film = film;
    console.log("FilmDetail", film);
  },
  methods: {
    ...mapActions(["getFilm"])
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 20%;
}

.playUrlInfo {
  margin-bottom: 40px;
  color: darkgreen;
}

.title {
  font-family: 永中楷体;
  color: lightcoral;
}

.content {
  font-family: 永中楷体;
  /*color: olivedrab;*/
}
</style>

<template>
  <div>
    <van-list
      v-model="isBottomFreshLoading"
      :finished="isBottomFreshFinished"
      finished-text="没有更多了"
      @load="onBottomFresh"
    >
      <van-pull-refresh v-model="isTopFreshLoading" @refresh="onTopFresh">
        <van-cell v-for="item in filmList" :key="item.id">
          <FilmListItem :item="item"></FilmListItem>
        </van-cell>
      </van-pull-refresh>
    </van-list>
  </div>
</template>

<script>
import FilmListItem from "@/components/Film/FilmListItem";
import { findMovieList } from "@/api/movie/movieApi";
export default {
  name: "FilmList",
  components: { FilmListItem },
  data() {
    return {
      // 列表页数据
      filmList: [],

      // 底部刷新相关
      isBottomFreshLoading: false,
      isBottomFreshFinished: false,

      // 顶部刷新相关
      isTopFreshLoading: false,

      // 分页参数
      pageNo: 1,
      pageSize: 10
    };
  },

  async mounted() {
    await this.findFilmList();
    console.log(this.filmList);
  },

  methods: {
    /**
     * 列表页底部刷新事件
     */
    async onBottomFresh() {
      console.log(
        "onBottomFresh",
        this.filmList.length,
        this.isBottomFreshLoading
      );

      // 补充新数据
      let filmList = await this.findFilmList();
      this.filmList = this.filmList.concat(filmList);

      // 加载状态结束
      this.isBottomFreshLoading = false;

      // 数据全部加载完成
      if (this.filmList.length >= 200) {
        this.isBottomFreshFinished = true;
      }
    },

    /**
     * 列表页顶部刷新事件
     */
    async onTopFresh() {
      console.log("onTopFresh", this.filmList.length, this.isTopFreshLoading);

      // 补充新数据
      let filmList = await this.findFilmList();
      this.filmList = filmList.concat(this.filmList);

      this.isTopFreshLoading = false;
    },

    /**
     * 查询影片列表
     */
    async findFilmList() {
      console.log("findFilmLista", this.pageNo, this.pageSize, this.filmList);
      let resp = await findMovieList({
        page: this.pageNo++,
        rows: this.pageSize
      });

      return resp.data.data.list;
    }
  }
};
</script>

<style scoped></style>

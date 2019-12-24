<template>
  <div>
    <pull-refresh v-model="isTopFreshLoading" @refresh="onTopFresh">
      <list
        :model="isBottomFreshLoading"
        :finished="isBottomFreshFinished"
        finished-text="没有更多了"
        @load="onBottomFresh"
      >
        <cell v-for="item in this.list" :key="item">
          <div>hello</div>
          <div>world</div>
        </cell>
      </list>
    </pull-refresh>
  </div>
</template>

<script>
import { List, Cell, PullRefresh } from "vant";

export default {
  name: "FilmList",

  components: {
    List,
    Cell,
    PullRefresh
  },

  data() {
    return {
      // 列表页数据
      list: [],

      // 底部刷新相关
      isBottomFreshLoading: false,
      isBottomFreshFinished: false,

      // 顶部刷新相关
      isTopFreshLoading: false
    };
  },

  mounted() {
    for (let i = 0; i < 2; i++) {
      this.list.push(i);
    }
  },

  methods: {
    /**
     * 列表页底部刷新事件
     */
    onBottomFresh() {
      console.log("onBottomFresh", this.list.length);
      this.list.push(this.list.length + 1);

      // 加载状态结束
      this.isBottomFreshLoading = false;

      // 数据全部加载完成
      if (this.list.length >= 200) {
        this.isBottomFreshFinished = true;
      }
    },

    /**
     * 列表页顶部刷新事件
     */
    onTopFresh() {
      console.log("onTopFresh", this.list.length);

      this.list = [this.list.length + 1].concat(this.list);
      this.isTopFreshLoading = false;
    }
  }
};
</script>

<style scoped></style>

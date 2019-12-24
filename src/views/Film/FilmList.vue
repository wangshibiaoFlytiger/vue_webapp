<template>
  <list
    :model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <cell v-for="item in this.list" :key="item">
      <div>hello</div>
      <div>world</div>
    </cell>
  </list>
</template>

<script>
import { List, Cell } from "vant";

export default {
  name: "FilmList",

  components: {
    List,
    Cell
  },

  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  mounted() {
    for (let i = 0; i < 20; i++) {
      this.list.push(i);
    }
  },

  methods: {
    /**
     * 列表页组件滚动到底部
     */
    onLoad() {
      console.log("onload", this.list.length);
      this.list.push(this.list.length + 1);

      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 200) {
        this.finished = true;
      }
    }
  }
};
</script>

<style scoped></style>

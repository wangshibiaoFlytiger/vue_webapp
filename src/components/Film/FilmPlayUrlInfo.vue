<template>
  <div>
    <!--      数据源导航-->
    <van-tabs v-model="activeSourceTitle">
      <van-tab
        :key="sourceTitle"
        v-for="sourceTitle in sourceTitleList"
        :title="sourceTitle"
        :name="sourceTitle"
      >
        <!--          播放地址列表-->
        <button
          :key="playUrl.videoUrl"
          v-for="playUrl in playUrlInfo[sourceTitle]"
          @click="gotoPlayerPage(playUrl.videoUrl)"
          class="playBtn"
        >
          {{ playUrl.title }}
        </button>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "FilmPlayUrlInfo",

  props: {
    playUrlInfo: Object
  },

  watch: {
    /**
     * 监听props属性playUrlInfo
     * @param newObj
     */
    playUrlInfo: function(newObj) {
      this.sourceTitleList = Object.keys(newObj);
    }
  },

  data() {
    return {
      activeSourceTitle: "",
      sourceTitleList: []
    };
  },

  mounted() {},

  methods: {
    /**
     * 跳转到播放器页面
     * @param videoUrl
     */
    gotoPlayerPage(videoUrl) {
      this.$router.push({
        name: "player",
        query: {
          videoUrl
        }
      });
    }
  }
};
</script>

<style scoped>
.playBtn {
  margin-right: 5px;
}
</style>

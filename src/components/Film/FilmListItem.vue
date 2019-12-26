<template>
  <div @click="onListItemClick">
    <div>
      <van-row>
        <van-col span="12">{{ item.title }}</van-col>
        <van-col span="12">{{ item.category }}</van-col>
      </van-row>

      <van-row>
        <img :src="item.coverUrl" />
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmListItem",

  props: {
    item: Object
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    /**
     * ListItem组件的单击事件
     */
    onListItemClick() {
      // 跳转到详情页
      this.$router.push({
        name: "filmDetail",
        query: {
          filmId: this.item.id
        }
      });
    }
  }
};
</script>

<style scoped></style>

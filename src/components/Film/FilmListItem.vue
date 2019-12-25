<template>
  <div>
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

  methods: {}
};
</script>

<style scoped></style>

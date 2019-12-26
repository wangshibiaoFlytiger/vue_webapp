<template>
  <video
    :src="this.$route.query.videoUrl"
    controls
    width="100%"
    height="100%"
  ></video>
</template>

<script>
export default {
  name: "Player"
};
</script>

<style scoped></style>

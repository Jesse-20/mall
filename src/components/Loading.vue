<template>
  <div class="container">
    <div class="img">
      <img src="/images/loading-svg/loading-spinning-bubbles.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
};
</script>
<style lang="scss" scoped>
.container {
  width: 1226px;
  margin-right: 0;
  margin-left: 0;
  margin: auto;
  text-align: center;
  .img {
    img {
      margin: 200px auto;
      height: 80px;
    }
  }
}
</style>

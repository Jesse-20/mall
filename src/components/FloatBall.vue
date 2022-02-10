<template>
  <div class="floatball">
    <a href="#">
      <!-- <img class="img1" src="/images/icon-upTo.png" alt="" /> -->
      <!-- to-do动画的交互 -->
      <img class="img2" src="/images/backToTop2.png" alt="" />
    </a>
  </div>
</template>
<script>
export default {
  name: "floatball",
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.floatball {
  position: fixed;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: #fff;
  text-align: center;
  img {
    margin-top: 12px;
    height: 60px;
    transition: all 1s;
    &:hover {
      cursor: pointer;
      margin-top: 2px;
    }
  }
}
</style>
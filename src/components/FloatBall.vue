<template>
  <div class="floatball">
    <a href="#">
      <div class="cart" title="购物车"></div>
      <div class="num">(0)</div>
    </a>
    <div class="backToTop" title="回到顶部">
      <a href="#">
        <!-- 希望将回到顶部和购物车的图标添加到一起 -->
        <!-- <img class="img1" src="/images/icon-upTo.png" alt="" /> -->
        <!-- to-do动画的交互 -->
        <img src="/images/backToTop2.png" alt="" />
      </a>
    </div>
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
  z-index: 10;
  position: fixed;
  top: 45%;
  right: 55px;
  height: 106px;
  width: 60px;
  border: 1px solid $colorB;
  border-radius: 60px;
  background-color: $Wcolor;
  text-align: center;
  .cart {
    margin-top: 9px;
    @include bgImg(30px, 30px, "/images/icon-cart2.png");
  }
  .num {
    border-bottom: 1px solid $colorB;
  }
  .backToTop {
    img {
      margin-top: 7px;
      height: 30px;
      width: 30px;
    }
  }
}
</style>
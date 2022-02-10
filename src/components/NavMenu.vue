<template>
  <div class="menu">
    <div class="icon"><h1>最新商城</h1></div>
    <!-- 搜索框也需要进行优化使其变得更加美观 -->
    <div class="search">
      找不到商品搜索一下吧？<input type="text" placeholder="搜索" />
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-menu",
};
</script>
<style  lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.menu {
  position: relative;
  width: $min-width;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  .icon {
    text-align: center;
    float: left;
    margin-top: 5px;
    margin-left: -120px;
    &:before {
      content: "";
      @include bgImg(40px, 40px, "/images/newStore.png");
      display: block;
      position: absolute;
      top: 5px;
      left: 20px;
    }
    h1 {
      margin-left: 20px;
    }
  }
  .search {
    float: right;
    line-height: 50px;
    font-size: $fontH;
    margin-right: -250px;
    input {
      height: 20px;
    }
    &:after {
      content: "";
      @include bgImg(20px, 20px, "/images/icon-search.png");
      display: block;
      position: absolute;
      right: 8px;
      top: 16px;
      cursor: pointer;
    }
  }
}
</style>
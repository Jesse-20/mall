<template>
  <div class="menu">
    <div class="icon">
      <!-- to-do商城logo照片 -->
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- 搜索框也需要进行优化使其变得更加美观 -->
    <div class="search">
      找不到商品搜索一下吧？<input type="text" placeholder="搜索" />
    </div>
  </div>
</template>
<script>
export default {
  name: "menu",
};
</script>
<style  lang="scss" scoped>
.menu {
  width: 1226px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  .icon {
    float: left;
    background-color: #111;
  }
  .search {
    float: right;
  }
}
</style>
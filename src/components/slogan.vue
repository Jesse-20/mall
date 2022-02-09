<template>
  <div class="service">
    <div class="part1">
      <div class="icon-setting"></div>
      <span>预约维修服务</span>
    </div>
    <div class="part1">
      <div class="icon-7days"></div>
      <span>7天无理由退货</span>
    </div>
    <div class="part1">
      <div class="icon-15days"></div>
      <span>15天免费换货</span>
    </div>
    <div class="part1">
      <div class="icon-email"></div>
      <span>满150元包邮</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "slogan",
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.service {
  padding: 30px 0;
  color: #666666;
  font-size: 16px;
  border-bottom: 1px solid #ffffff;
  .part1 {
    position: relative;
    display: inline-block;
    width: 24.9%;
    border-right: 1px solid #e5e5e5;
    .icon-setting {
      @include bgImg(20px, 20px, "/images/icon-setting.png");
      margin-left: 100px;
    }
    .icon-7days {
      @include bgImg(20px, 20px, "/images/icon-7day.png");
      margin-left: 100px;
    }
    .icon-15days {
      @include bgImg(20px, 20px, "/images/icon-15day.png");
      margin-left: 100px;
    }
    .icon-email {
      @include bgImg(20px, 20px, "/images/icon-post.png");
      margin-left: 100px;
    }
    span {
      display: inline-block;
      position: absolute;
      margin-left: 4px;
      top: -1px;
    }
  }
  :last-child {
    border: 0;
  }
}
</style>
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
  color: #666666;
  font-size: 16px;
  .part1 {
    position: relative;
    display: inline-block;
    width: 24.9%;
    border-right: 1px solid #e5e5e5;
    text-align: center;
    .icon-setting {
      @include bgImg(20px, 20px, "/images/icon-setting.png");
    }
    .icon-7days {
      @include bgImg(20px, 20px, "/images/icon-7day.png");
    }
    .icon-15days {
      @include bgImg(20px, 20px, "/images/icon-15day.png");
    }
    .icon-email {
      @include bgImg(20px, 20px, "/images/icon-post.png");
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
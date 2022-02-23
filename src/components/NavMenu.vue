<template>
  <div class="menu">
    <slot v-if="routeName == 'index'">
      <div class="icon"><h1>最新商城</h1></div>
      <!-- 搜索框也需要进行优化使其变得更加美观 -->
      <div class="search">
        找不到商品搜索一下吧？<input type="text" placeholder="搜索" />
      </div>
    </slot>
    <slot v-if="routeName == 'login'">
      <div class="loginContainer">
        <div class="icon2">
          <img src="/images/login.png" alt="" />
          欢迎登录
        </div>
        <div class="information">
          <a href="/#/product/2">~查看最新产品动向~</a>
        </div>
      </div>
    </slot>
    <slot v-if="routeName == 'regist'">
      <div class="registContainer">
        <div class="icon2">
          <img src="/images/registicon.png" alt="" />
          加入最新商城
        </div>
      </div>
    </slot>
    <slot v-if="routeName == 'orderList'">
      <div class="orderListContainer">
        <div class="icon2">
          <img src="/images/icon-order.png" alt="" />
          我的订单
        </div>
        <div class="info">这是订单页面哦</div>
      </div>
    </slot>
    <slot v-if="routeName == 'cart'">
      <div class="cartContainer">cart</div>
    </slot>
    <slot v-if="routeName == 'product'">
      <div class="productContainer">product</div>
    </slot>
    <slot v-if="routeName == 'hotproduct'">
      <div class="hotproductContainer">hotproduct</div>
    </slot>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "nav-menu",
  data() {
    return {};
  },
  //计算属性
  computed: mapState(["routeName"]),
  //监听属性
  watch: {
    $route: {
      handler: function (route) {
        this.judgeType(route);
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["getRouteName"]),
    judgeType(route) {
      let currentroute = route.name;
      this.getRouteName(currentroute);
    },
  },
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
    float: left;
    margin-left: 140px;
    line-height: 50px;
    font-size: $fontJ;
    input {
      height: 20px;
      width: 410px;
    }
    &:after {
      content: "";
      @include bgImg(20px, 20px, "/images/icon-search.png");
      border-left: 1px solid $Gcolor;
      display: block;
      position: absolute;
      right: 344px;
      top: 16px;
      cursor: pointer;
    }
  }
  .loginContainer {
    .information {
      margin-right: 100px;
      position: relative;
      line-height: 50px;
      float: right;
      font-size: $fontI;
      a {
        color: $colorD;
        &:hover {
          color: $colorB;
        }
      }
      &:before {
        position: absolute;
        top: 10px;
        left: -20px;
        content: "";
        @include bgImg(25px, 25px, "/images/pointright.png");
      }
      &:after {
        position: absolute;
        top: 10px;
        right: -20px;
        content: "";
        @include bgImg(25px, 25px, "/images/pointleft.png");
      }
    }
    .icon2 {
      margin-left: -150px;
      line-height: 50px;
      text-align: center;
      float: left;
      img {
        width: 20px;
        height: 20px;
      }
    }
    height: 50px;
    color: $colorB;
    font-size: $fontG;
  }
  .registContainer {
    .icon2 {
      margin-left: -150px;
      line-height: 50px;
      text-align: center;
      float: left;
      img {
        width: 20px;
        height: 20px;
      }
    }
    height: 50px;
    color: $colorB;
    font-size: $fontG;
  }
  .orderListContainer {
    height: 50px;
    .icon2 {
      margin-left: -150px;
      line-height: 50px;
      text-align: center;
      float: left;
      img {
        width: 20px;
        height: 20px;
      }
    }
    color: $colorB;
    font-size: $fontG;
  }
  .cartContainer {
    height: 50px;
    text-align: center;
    background-color: $colorD;
    color: $colorB;
    font-size: $fontG;
  }
  .productContainer {
    height: 50px;
    text-align: center;
    background-color: $colorD;
    color: $colorB;
    font-size: $fontG;
  }
  .hotproductContainer {
    height: 50px;
    text-align: center;
    background-color: $colorD;
    color: $colorB;
    font-size: $fontG;
  }
}
</style>
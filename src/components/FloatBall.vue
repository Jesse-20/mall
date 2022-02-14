<template>
  <div class="floatball">
    <a href="#">
      <div class="cart0" title="购物车" v-if="cartListNum === 0"></div>
      <div class="cart" title="购物车" v-else></div>
      <div class="num">({{ cartListNum }})</div>
    </a>
    <div class="backToTop" title="回到顶部">
      <a href="#" @click="backToTop">
        <img src="/images/backToTop2.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "floatball",
  data() {
    return {};
  },
  computed: mapState(["username", "cartListNum"]),
  mounted() {
    this.getCartNum();
  },
  methods: {
    ...mapActions(["changeCartNum"]),
    backToTop() {
      //实现方式一回到顶部,scrollTop属性表示被隐藏在内容区域上方的像素数，元素未滚动时，即为顶部
      //document.body.scrollTop = document.documentElement.scrollTop = 0;
      //实现方式二,scrollTo(x,y)设置值为0，0即可回到左上角
      scrollTo(0, 0);
    },
    getCartNum() {
      if (this.username == "") {
        console.log("请您先登录");
      } else {
        this.axios.get("/getCartNum").then((res) => {
          const cartNum = res.data.data.cartInfo.totalNum;
          this.changeCartNum(cartNum);
        });
      }
    },
  },
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
  .cart0 {
    margin-top: 9px;
    @include bgImg(30px, 30px, "/images/icon-cart2.png");
  }
  .cart {
    margin-top: 9px;
    @include bgImg(30px, 30px, "/images/icon-cart-fill.png");
  }
  .num {
    border-bottom: 1px solid $colorB;
    font-size: $fontK;
    color: $colorA;
    font-weight: bold;
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
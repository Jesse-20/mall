<template>
  <div class="floatball">
    <a href="#" @click="decideGo">
      <div class="cart0" title="购物车" v-if="!cartNum"></div>
      <div class="cart" title="购物车" v-else></div>
      <div class="num">({{ cartNum }})</div>
    </a>
    <div class="backToTop" title="回到顶部">
      <a href="#" @click="backToTop">
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
  data() {
    return {
      cartNum: 0,
    };
  },
  mounted() {
    this.getCartNum();
  },
  methods: {
    backToTop() {
      //实现方式一回到顶部,scrollTop属性表示被隐藏在内容区域上方的像素数，元素未滚动时，即为顶部
      //document.body.scrollTop = document.documentElement.scrollTop = 0;
      //实现方式二,scrollTo(x,y)设置值为0，0即可回到左上角
      scrollTo(0, 0);
    },
    getCartNum() {
      this.axios.get("/getCartNum").then((res) => {
        this.cartNum = res.data.data.cartInfo.totalNum;
      });
    },
    decideGo() {
      if (this.cartNum == 0) {
        alert("请您先挑选商品");
      } else {
        this.$router.push("/cart");
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
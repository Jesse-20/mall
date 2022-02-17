<template>
  <div class="container">
    <div class="header">
      <div class="left-info">
        <a href="/#/index" class="goToIndex">首页</a>
        <span>最新商城欢迎您！</span>
      </div>
      <div class="right-info">
        <a href="/#/login" v-if="!username">请登录</a
        ><span v-else
          >{{ username }}&nbsp;&nbsp;&nbsp;&nbsp;<a
            @click="logout"
            href="javascript:;"
            >退出</a
          ></span
        ><a href="/#/regist" v-if="!username">注册</a
        ><a href="/#/orderList">我的订单</a><a href="javascript:;">客服服务</a>
        <div class="lead">
          网站导航
          <div class="hidden">
            <a href="/#/cart"><div>购物车</div></a>
            <a href="/#/hot-product"><div>热门商品</div></a>
            <a href="/#/product/2"><div>最新产品</div></a>
            <a href="https://gitee.com/jesse20/TestDemo" target="_blank"
              ><div>关于我们</div></a
            >
          </div>
        </div>
        <!-- 网页导航栏的动态表示方法需要进行实现 -->
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {};
  },
  computed: mapState(["username"]),
  created() {},
  mounted() {
    //this.getUserfromSessionStorage();
  },
  methods: {
    ...mapActions(["initializeData"]),
    logout() {
      this.initializeData();
      //window.sessionStorage.removeItem("User");
    },
    // getUserfromSessionStorage() {
    //   const Un = window.sessionStorage.getItem("User");
    //   this.changeUserdata(Un);
    // },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  background-color: #333;
  .header {
    width: $min-width;
    margin-right: auto;
    margin-left: auto;
    height: 36px;
    a {
      color: #a4a4a4;
      font-size: $fontJ;
    }
    .left-info {
      .goToIndex {
        color: $colorA;
      }
      float: left;
      line-height: 36px;
      a {
        font-size: $fontG;
        margin-left: 20px;
      }
      span {
        margin-left: 20px;
        color: #a4a4a4;
      }
    }
    .right-info {
      float: right;
      line-height: 36px;
      span {
        font-size: 14px;
        color: #a4a4a4;
      }
      a {
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          color: $colorA;
        }
      }
      .lead {
        position: relative;
        cursor: pointer;
        float: right;
        font-size: 14px;
        color: #a4a4a4;
        &:hover {
          background-color: $Wcolor;
          color: $colorD;
          .hidden {
            display: block;
          }
        }
        .hidden {
          text-align: center;
          display: none;
          z-index: 10;
          position: absolute;
          width: 100px;
          height: 144px;
          background-color: $colorD;
          top: 36px;
          right: 0;
          div {
            height: 0px;
            &:hover {
              background-color: $Wcolor;
            }
          }
        }
      }
    }
  }
}
</style>
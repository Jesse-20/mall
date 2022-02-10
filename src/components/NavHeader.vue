<template>
  <div class="container">
    <div class="header">
      <div class="left-info">
        <a href="/#/index">首页</a>
        <span>最新商城欢迎您！</span>
      </div>
      <div class="right-info">
        <a href="" v-if="!userName">请登录</a><a v-else>{{ userName }}</a
        ><a href="" v-if="!userName">注册</a><a href="">我的订单</a
        ><a href="">客服服务</a>
        <a href="">网站导航</a>
        <!-- 网页导航栏的动态表示方法需要进行实现 -->
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      userName: "",
    };
  },
  mounted() {
    this.getUsername();
  },
  methods: {
    getUsername() {
      this.axios.post("/login").then((res) => {
        this.userName = res.data.data[0].username;
      });
    },
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
      a {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
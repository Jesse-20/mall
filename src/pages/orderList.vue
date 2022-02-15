<template>
  <div class="container">
    <div v-if="username == ''" class="zero-message">
      <div class="img"></div>
      <div class="info">未登录空空如也~</div>
      <el-button type="info" class="jump-button" @click="jumpToLogin"
        >点击我快速登录</el-button
      >
    </div>
    <loading v-else-if="loading"> </loading>
    <div v-else>{{ message }}</div>
  </div>
</template>
<script>
import loading from "./../components/Loading";
import { mapState } from "vuex";
export default {
  name: "orderList",
  components: {
    loading,
  },
  data() {
    return {
      message: "",
      loading: true,
    };
  },
  computed: mapState(["username", "cartListNum", "cartList"]),
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList: function () {
      this.axios.get("/getOrderList").then((res) => {
        this.message = res.data.info;
        this.loading = false;
      });
    },
    jumpToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.container {
  width: $min-width;
  margin-right: auto;
  margin-left: auto;
  background-color: $colorC;
  .zero-message {
    height: 800px;
    text-align: center;
    .img {
      @include bgImg(200px, 200px, "/images/order-zero.png");
      margin-top: 200px;
    }
    .info {
      font-size: $fontC;
      font-weight: bold;
      color: $colorB;
    }
    .jump-button {
      margin-top: 20px;
      &:hover {
        background-color: $colorD;
      }
    }
  }
}
</style>

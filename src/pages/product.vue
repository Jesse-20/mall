<template>
  <div class="container">
    <nav-header></nav-header>
    <loading v-if="loading"></loading>
    <!-- to-do从接口处获得商品的信息并且进行渲染 -->
    <div v-else class="product">
      商品所属id：{{ $route.params.id }} {{ message }}
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "./../components/NavHeader";
import loading from "./../components/Loading";
import NavFooter from "./../components/NavFooter";
export default {
  name: "product",
  components: {
    loading,
    NavHeader,
    NavFooter,
  },
  data() {
    return {
      message: "",
      loading: true,
    };
  },
  mounted() {
    this.getProductById();
  },
  methods: {
    getProductById() {
      this.axios.get("/getProductById").then((res) => {
        this.loading = false;
        this.message = res.data.info;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  width: 1226px;
  margin-right: 0;
  margin-left: 0;
  margin: auto;
  text-align: center;
  .product {
    font-size: $fontJ;
    font-weight: bold;
  }
}
</style>

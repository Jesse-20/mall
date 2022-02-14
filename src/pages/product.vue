<template>
  <div class="container">
    <loading v-if="loading"></loading>
    <!-- to-do从接口处获得商品的信息并且进行渲染 -->
    <div v-else class="product">
      商品所属id：{{ $route.params.id }} {{ message }}
    </div>
  </div>
</template>
<script>
import loading from "./../components/Loading";
export default {
  name: "product",
  components: {
    loading,
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

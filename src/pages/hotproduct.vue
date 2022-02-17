<template>
  <div class="container">
    <loading v-if="loading"></loading>
    <div class="hotputbody" v-else>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import loading from "./../components/Loading";
export default {
  name: "hot-product",
  components: {
    loading,
  },
  data() {
    return {
      loading: true,
      hotProductList: [],
    };
  },
  mounted() {
    this.getHotProduct();
  },
  methods: {
    getHotProduct() {
      this.axios.get("/getHotProduct").then((res) => {
        this.loading = false;
        this.hotProductList = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1226px;
  margin-right: 0;
  margin-left: 0;
  margin: auto;
  text-align: center;
  .hotputbody {
    height: 745px;
    div {
      float: left;
      margin: 10px auto;
      height: 200px;
      width: 20%;
      margin-left: 47.448px;
      border: 1px solid black;
      &:hover {
        cursor: pointer;
        box-shadow: 0 15px 30px rgb(0, 0, 0, 0.1);
        transform: translate(0, -2px, 0);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

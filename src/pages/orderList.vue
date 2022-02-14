<template>
  <div>
    <loading v-if="loading"> </loading>
    <div v-else>{{ message }}</div>
  </div>
</template>
<script>
import loading from "./../components/Loading";
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
  },
};
</script>
<style>
</style>

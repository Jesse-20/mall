<template>
  <div class="index">
    <div class="main">
      <div></div>
      <div></div>
      <div></div>
      <slogan></slogan>
    </div>
  </div>
</template>
<script>
import slogan from "./../components/slogan.vue";
export default {
  name: "index",
  components: {
    slogan,
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  background-color: #111111;
  div {
    height: 200px;
    border: 1px solid #ffffff;
  }
}
</style>
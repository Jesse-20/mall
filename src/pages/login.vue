<template>
  <div class="container">
    <div class="loginHeader">loginHeader</div>
    <div class="login"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "./../components/NavFooter";
export default {
  name: "login",
  components: {
    NavFooter,
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.loginHeader {
  height: 80px;
  background-color: #333333;
  margin-bottom: 20px;
}
.login {
  height: 540px;
  width: 1226px;
  border: 1px solid black;
  margin-right: 0;
  margin-left: 0;
  margin: auto;
  margin-bottom: 20px;
}
</style>
<template>
  <div>
    <nav-header></nav-header>
    <nav-menu></nav-menu>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
import NavMenu from "./../components/NavMenu";
export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter,
    NavMenu,
  },
};
</script>
<style>
</style>
<template>
  <div class="container">
    <div class="login">
      <button @click="getUserName">click me to login</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(["changeUserdata"]),
    getUserName() {
      this.axios.post("/login").then((res) => {
        const username = res.data.data[0].username;
        this.changeUserdata(username);
        this.$router.push("/#/index");
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
}
.login {
  text-align: center;
  height: 540px;
  margin-bottom: 20px;
  button {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }
}
</style>
<template>
  <div class="container">
    <div class="regist">
      <form>
        <div class="lable">
          <label class="error"></label>
          <input
            name="username"
            type="text"
            v-model.trim="username"
            placeholder="请输入用户名"
          />
          <input
            name="password"
            type="password"
            v-model.trim="password"
            placeholder="请输入密码"
          />
          <input
            name="password"
            type="password"
            v-model.trim="password2"
            placeholder="请输入密码"
          />
          <input
            name="telephone"
            type="tel"
            v-model.trim="mobile"
            placeholder="请输入手机号码"
          />
        </div>
        <div class="submit">
          <input type="submit" value="注册" @click="regist" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "regist",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      mobile: "",
    };
  },
  methods: {
    regist() {
      this.axios
        .post()
        .then(() => {})
        .catch();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  width: $min-width;
  margin-right: 0;
  margin-left: 0;
  margin: auto;
  .regist {
    display: flex;
    align-items: flex-start;
    height: 800px;
    text-align: center;
    font-size: $fontE;
    .lable {
      input {
        display: block;
        margin-top: 100px;
        width: 200px;
        height: 50px;
        margin-left: 540px;
      }
    }
  }
}
</style>

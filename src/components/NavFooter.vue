<template>
  <!-- <div class="container">
    <div class="footer">
      <div class="img"><img src="" alt="logo" /></div>
      <div class="info"><p>如果您有任何疑问，请及时通过电话与我们联系</p></div>
      <div class="tel"><p>电话：+8613313341334</p></div>
      <div class="location"><span>中国广东省广州市</span></div>
      <div class="email"><span>Jesse@email.com</span></div>
    </div>
    <div class="copyright">
      Copyright ©2020<span class="domain">jesse.com</span> All Rights Reserved.
    </div>
  </div> -->
  <div></div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  background-color: $Wcolor;
  .footer {
    margin-left: auto;
    margin-right: auto;
    width: $min-width;
    height: 520px;
    .img {
      //to-do
      padding-top: 30px;
      margin-left: 80px;
    }
    .info {
      padding-top: 30px;
      margin-left: 80px;
      font-size: $fontJ;
    }
    .tel {
      padding-top: 30px;
      margin-left: 80px;
      font-size: $fontC;
    }
    .location {
      padding-top: 30px;
      margin-left: 80px;
      font-size: $fontJ;
    }
    .email {
      padding-top: 30px;
      margin-left: 80px;
      font-size: $fontI;
      color: $Bcolor;
    }
  }
  .copyright {
    text-align: center;
    font-size: 20px;
    color: $Gcolor;
    padding-top: 30px;
    margin-left: 80px;
  }
}
</style>
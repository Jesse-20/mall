<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="/images/storeFooter.png" alt="" />
        <p>最新商城</p>
      </div>
      <div class="footer-link">
        <a href="https://gitee.com/jesse20/TestDemo" target="_blank"
          >jesse主页</a
        ><span>|</span> <a href="javascript:;" target="_blank">售后服务</a
        ><span>|</span>
        <a href="https://gitee.com/jesse20/TestDemo" target="_blank">关于我们</a
        ><span>|</span>
        <a href="javascript:;" target="_blank">Vue+SpringBoot</a>
      </div>
      <div class="copyright">
        Copyright ©2022<span class="domain">jesse.design.com</span> All Rights
        Reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 2px solid #ff66008e;
  background-color: #333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    p {
      color: $colorA;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ffffff;
    }
  }
}
</style>
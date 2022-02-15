<template>
  <div class="container">
    <div class="cartBody">
      <div class="title">
        <div class="left-info">
          <img src="/images/icon-cart3.png" alt="" />
          看人家这么久时间不等人哦~
        </div>
        <div class="right-info">
          <div class="checkbox">
            <input type="checkbox" name="" id="" />
          </div>
          <div class="info">全选</div>
        </div>
      </div>
      <div class="listBody"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {};
  },
  computed: mapState(["username", "cartListNum", "cartList"]),
  components: {},
  mounted() {
    this.getCartListDetails();
  },
  methods: {
    ...mapActions(["changeCartNum", "changeCartList"]),
    getCartListDetails() {
      if (this.username == "") {
        this.$message.error("您还没有登录请登录再查看");
      } else {
        this.axios.get("/getCartList").then((res) => {
          const cartInfor = res.data.data;
          this.changeCartList(cartInfor);
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  width: $min-width;
  margin-right: auto;
  margin-left: auto;
  background-color: $colorC;
  .cartBody {
    height: 800px;
    border: 1px solid $colorD;
    .title {
      height: 60px;
      background-color: $colorD;
      .left-info {
        float: left;
        color: $colorB;
        font-size: $fontG;
        img {
          height: 50px;
          width: 50px;
          margin-left: 10px;
        }
      }
      .right-info {
        position: relative;
        float: right;
        color: $colorB;
        line-height: 60px;
        margin-right: 100px;
        font-size: $fontH;
        .checkbox {
          top: 4px;
          right: 30px;
          position: absolute;
          display: inline;
          margin-right: 20px;
          input {
            background-color: $colorA;
            width: 20px;
            height: 20px;
            &:checked {
              background-color: $colorA;
            }
          }
        }
        .info {
          display: inline-block;
        }
      }
    }
  }
}
</style>

<template>
  <div class="index">
    <!-- 主网页主题题部分 -->
    <div class="main">
      <!-- 轮播图部分开始 -->
      <!-- to-do寻找轮播的图片 -->
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
            <a :href="'/#/product/' + item.id"
              ><img :src="item.img" alt=""
            /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 轮播图部分结束 -->
      <!-- 轮播图左侧导航栏开始 -->
      <div class="nav">
        <ul v-for="(item, index) in ProductList" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
      <!-- 轮播图左侧导航栏结束 -->
      <!-- 热卖推荐产品开始 -->
      <div class="hot">
        <h1 class="hot-title">hot-put</h1>
        <!-- to-do获取商品的图片和路由 -->
        <div class="imgshow">
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
        </div>
      </div>
      <!-- 热卖推荐产品结束 -->
      <div>phone</div>
      <div>pad</div>
      <slogan></slogan>
      <float-ball></float-ball>
    </div>
  </div>
</template>
<script>
// Import Swiper styles
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import slogan from "./../components/Slogan";
import FloatBall from "./../components/FloatBall";
export default {
  name: "index",
  components: {
    slogan,
    Swiper,
    SwiperSlide,
    FloatBall,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false, //自动轮播的开关
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: false,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperSlides: [
        {
          id: "42",
          img: "/images/slide.png",
        },
        {
          id: "45",
          img: "/images/slide.png",
        },
        {
          id: "46",
          img: "/images/slide.png",
        },
        {
          id: "42",
          img: "/images/slide.png",
        },
        {
          id: "42",
          img: "/images/slide.png",
        },
      ],
      ProductList: ["phone", "pad", "book", "details", "model"],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.main {
  width: $min-width;
  margin-right: auto;
  margin-left: auto;
  background-color: $colorC;
  .swiper {
    position: relative;
    height: 394.61px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev {
      margin-left: 179px;
    }
  }
  .nav {
    z-index: 10;
    position: absolute;
    height: 394.61px;
    width: 179px;
    top: 86px;
    background-color: #333;
    ul {
      li {
        cursor: pointer;
        height: 20%;
        font-size: $fontI;
        color: $colorB;
        text-align: center;
        line-height: 79px;
        &:after {
          content: "";
          @include bgImg(12px, 12px, "/images/icon-arrow.png");
          margin-left: 15px;
        }
        &:hover {
          background-color: $Wcolor;
        }
      }
    }
  }
  .hot {
    margin-top: 2px;
    .hot-title {
      color: $colorA;
      &:after {
        content: "";
        @include bgImg(20px, 20px, "/images/hot.png");
      }
    }
    .imgshow {
      display: flex;
      align-items: center;
      div {
        margin-top: 2px;
        height: 180px;
        width: 20%;
        border: 1px solid $colorB;
        margin-left: 47.448px;
      }
    }
  }
}
</style>
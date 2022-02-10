<template>
  <div class="index">
    <div class="main">
      <!-- to-do寻找轮播的图片 -->
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
            <!-- to-do产品的路由 -->
            <a href="#"><img :src="item.img" alt="" /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="nav">
        <ul v-for="(item, index) in ProductList" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
      <div>details</div>
      <div>phone</div>
      <div>pad</div>
      <slogan></slogan>
    </div>
  </div>
</template>
<script>
// Import Swiper styles
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import slogan from "./../components/Slogan";
export default {
  name: "index",
  components: {
    slogan,
    Swiper,
    SwiperSlide,
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
      ProductList: [],
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios.get("/productList").then((res) => {
        this.ProductList = res.data.data;
      });
    },
  },
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
    height: 451px;
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
    height: 451px;
    width: 179px;
    top: 86px;
    background-color: #333;
    ul {
      li {
        height: 90px;
        font-size: $fontI;
        color: $colorB;
        text-align: center;
        line-height: 79px;
        &:after {
          content: "";
          @include bgImg(12px, 12px, "/images/icon-arrow.png");
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
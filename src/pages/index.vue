<template>
  <div class="index">
    <div class="main">
      <div class="temp">
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
        <div>details</div>
        <div>phone</div>
        <div>pad</div>
      </div>
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
        autoplay: true,
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
          img: "/images/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/images/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/images/slider/slide-3.jpg",
        },
        {
          id: "42",
          img: "/images/slider/slide-1.jpg",
        },
        {
          id: "42",
          img: "/images/slider/slide-1.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  background-color: #ffffff;
  .swiper {
    height: 451px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
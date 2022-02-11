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
      <div class="hot clearfix">
        <h1 class="hot-title">hot-put</h1>
        <a href="javascript:;"><h1 class="forMore">查看更多</h1></a>
        <!-- to-do获取商品的图片和路由 -->
        <div class="imgshow">
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
        </div>
        <div class="imgshow2">
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
          <div><a href=""></a></div>
        </div>
      </div>
      <!-- 热卖推荐产品结束 -->
      <!-- banner部分开始 -->
      <div class="banner">
        <img src=" " alt="" />
      </div>
      <!-- banner部分结束 -->
      <!--最新产品部分开始-->
      <div class="newProduct">
        <h1 class="new-title">new-put</h1>
        <div class="item-swiper">
          <swiper :options="swiperOption">
            <swiper-slide><img src="/images/slide.png" alt="" /></swiper-slide>
            <swiper-slide
              ><img src="/images/product/gallery-3.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/images/product/gallery-4.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/images/product/gallery-5.jpg" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/images/product/gallery-6.jpg" alt=""
            /></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <!--最新产品部分结束-->
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
//清除浮动
.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
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
      float: left;
      color: $colorA;
      &:after {
        content: "";
        @include bgImg(20px, 20px, "/images/hot.png");
      }
    }
    .forMore {
      margin-top: 5px;
      margin-right: 20px;
      position: relative;
      float: right;
      color: $colorB;
      font-size: $fontG;
      &:after {
        position: absolute;
        content: "";
        @include bgImg(20px, 20px, "/images/seeMore.png");
        top: 4px;
      }
      &:hover {
        color: $colorA;
      }
    }
    .imgshow {
      margin-top: 31px;
      display: flex;
      align-items: center;
      transition: all 0.2s linear;
      div {
        margin-top: 8px;
        height: 180px;
        width: 20%;
        border: 1px solid $colorB;
        margin-left: 47.448px;
        &:hover {
          cursor: pointer;
          box-shadow: 0 15px 30px rgb(0, 0, 0, 0.1);
          transform: translate(0, -2px, 0);
        }
      }
    }
    .imgshow2 {
      display: flex;
      align-items: center;
      margin-top: 8px;
      transition: all 0.2s linear;
      div {
        margin-top: 8px;
        height: 180px;
        width: 20%;
        border: 1px solid $colorB;
        margin-left: 47.448px;
        &:hover {
          cursor: pointer;
          box-shadow: 0 15px 30px rgb(0, 0, 0, 0.1);
          transform: translate(0, -2px, 0);
        }
      }
    }
  }
  .banner {
    margin-top: 16px;
    height: 100px;
    border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .newProduct {
    .new-title {
      color: $colorA;
      margin-top: 4px;
      &:after {
        content: "";
        @include bgImg(20px, 20px, "/images/new-product.png");
      }
    }
    .item-swiper {
      margin: 10px auto 52px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
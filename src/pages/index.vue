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
        <div class="navpos">
          <ul v-for="(item, index) in ProductList" :key="index">
            <div class="controlbox">
              <li>{{ item }}</li>
              <div class="navhidden">to-do</div>
            </div>
          </ul>
        </div>
      </div>
      <!-- 轮播图左侧导航栏结束 -->
      <!-- 热卖推荐产品开始 -->
      <div class="hot clearfix">
        <h1 class="hot-title">hot-put</h1>
        <a href="/#/hot-product"><h1 class="forMore">查看更多</h1></a>
        <div class="imgshow">
          <div
            class="inimgshow"
            v-for="(item, index) in productHot1"
            :key="index"
          >
            <div>
              <a :href="'/#/product/' + item.id"
                ><img :src="item.img" alt="" />
                <span class="proudct-info">{{ item.desc }}</span>
                <span class="price">{{ item.price }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="imgshow2">
          <div
            class="inimgshow2"
            v-for="(item, index) in productHot2"
            :key="index"
          >
            <div>
              <a :href="'/#/product/' + item.id"
                ><img :src="item.img" alt="" /><span class="proudct-info">{{
                  item.desc
                }}</span>
                <span class="price">{{ item.price }}</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 热卖推荐产品结束 -->
      <!-- banner部分开始 -->
      <div class="banner">
        <a :href="'/#/product/' + bannerImg[0].id"
          ><img :src="bannerImg[0].img" alt=""
        /></a>
      </div>
      <!-- banner部分结束 -->
      <!--最新产品部分开始-->
      <div class="newProduct">
        <h1 class="new-title">new-put</h1>
        <div class="item-swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperSlides2" :key="index"
              ><a :href="'/#/product/' + item.id"
                ><img :src="item.img" alt="" /></a
            ></swiper-slide>
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
      swiperSlides2: [
        {
          id: "0",
          img: "/images/slide.png",
        },
        {
          id: "1",
          img: "/images/slide.png",
        },
        {
          id: "2",
          img: "/images/slide.png",
        },
        {
          id: "3",
          img: "/images/slide.png",
        },
        {
          id: "4",
          img: "/images/slide.png",
        },
      ],
      ProductList: ["phone", "pad", "book", "details", "model"],
      productHot1: [
        {
          id: "5",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 1000,
        },
        {
          id: "6",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 2000,
        },
        {
          id: "7",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 3000,
        },
        {
          id: "8",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 4000,
        },
      ],
      productHot2: [
        {
          id: "9",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 5000,
        },
        {
          id: "10",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 3000,
        },
        {
          id: "11",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 5000,
        },
        {
          id: "12",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 6000,
        },
      ],
      bannerImg: [
        {
          id: "15",
          img: "/images/slide.png",
          desc: "Compiled successfully in 847ms",
          price: 7000,
        },
      ],
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
    .navpos {
      position: relative;
      .controlbox {
        &:hover {
          .navhidden {
            display: block;
          }
        }
      }
    }
    .navhidden {
      left: 179px;
      top: 0px;
      z-index: 10;
      position: absolute;
      display: none;
      width: 390px;
      height: 395px;
      background-color: $colorB;
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
      height: 200px;
      margin-top: 32px;
      // display: flex;
      // align-items: center;
      transition: all 0.2s linear;
      .inimgshow {
        text-align: center;
        div {
          position: relative;
          float: left;
          margin-top: 8px;
          height: 180px;
          width: 20%;
          margin-left: 47.448px;
          &:hover {
            cursor: pointer;
            box-shadow: 0 15px 30px rgb(0, 0, 0, 0.1);
            transform: translate(0, -2px, 0);
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .imgshow2 {
      // display: flex;
      // align-items: center;
      height: 200px;
      margin-top: 8px;
      transition: all 0.2s linear;
      .inimgshow2 {
        text-align: center;
        div {
          float: left;
          margin-top: 8px;
          height: 180px;
          width: 20%;
          margin-left: 47.448px;
          &:hover {
            cursor: pointer;
            box-shadow: 0 15px 30px rgb(0, 0, 0, 0.1);
            transform: translate(0, -2px, 0);
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .banner {
    margin-top: 16px;
    height: 100px;
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
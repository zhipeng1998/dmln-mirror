<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="modules1"
      :slides-per-view="1"
      :space-between="0"
      navigation
      indicator-color="#fff"
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>

    <!-- 关于我们 -->
    <div id="bigData" class="container-fuild">
      <div class="aboutus-title">
        <div class="title-main">
          <span style="font-weight: 200"> ------------ </span>
          <span class="title-container"> 关于我们 </span>
          <span style="font-weight: 200"> ------------ </span>
        </div>
        <span class="title-pub">About US</span>
      </div>
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-3 wow zoomIn">
          <img
            class="img-responsive"
            src="@/assets/img/Aboutus-L.png"
            alt="东铭绿能"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 aboutus-info">
          <p>
            东铭绿能（上海）科技有限公司隶属于东铭实业集团，专注于新能源、新材料、新技术的研发与推广，以及碳资产管理等高新技术应用领域。针对行业高质量发展的需求，东铭绿能整合优势资源，为钢铁冶金及相关行业提供全方位的提质增效与节能降本解决方案，助力企业绿色转型。公司已与多家钢铁、煤焦企业及领先技术服务提供商建立了战略合作关系。
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 wow zoomIn aboutus-r">
          <img
            class="img-responsive"
            src="@/assets/img/aboutus-R.png"
            alt="东铭绿能"
          />
        </div>
      </div>
    </div>

    <!-- 产品解决方案 -->
    <div class="solve-part container-fuild">
      <div class="aboutus-title">
        <div class="title-main">
          <span style="font-weight: 200"> ------------ </span>
          <span class="title-container"> 产品与解决方案 </span>
          <span style="font-weight: 200"> ------------ </span>
        </div>
        <span class="title-pub">Product & Solution</span>
      </div>
      <swiper
        id="swiper2"
        :centered-slides="true"
        :initial-slide="1"
        :modules="modules2"
        :effect="'coverflow'"
        :grab-cursor="true"
        :slides-per-view="1.8"
        :coverflow-effect="{
          rotate: 0,
          stretch: -50,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }"
        :pagination="true"
        class="mySwiper"
      >
        <swiper-slide
          class="banner-swiper"
          v-for="(item, index) in swiperList2"
          :key="index"
        >
          <img :src="item.img" alt="轮播图" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from "wow.js";
import { getCurrentInstance, onMounted } from "vue";
// import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import banner1 from "@/assets/img/banner1.jpeg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";

import product1 from "@/assets/img/product-sample.png";

import logo_hp from "@/assets/img/logo_hp.png";
import logo_kk from "@/assets/img/logo_kk.png";
import logo_toyota from "@/assets/img/logo_toyota.png";

import img_tel from "@/assets/img/tel.png";
import img_computer from "@/assets/img/computer.png";
import img_qq from "@/assets/img/qq.png";
import img_skill from "@/assets/img/skill.png";

const swiperList = [
  {
    img: banner1,
    title: "绿能",
    content: "共建美好未来",
  },
  {
    img: banner2,
    title: "绿能",
    content: "共建美好未来",
  },
  {
    img: banner3,
    title: "绿能",
    content: "共建美好未来",
  },
];

const swiperList2 = [
  {
    img: product1,
    title: "",
    content: "",
  },
  {
    img: product1,
    title: "",
    content: "",
  },
  {
    img: product1,
    title: "",
    content: "",
  },
];

const modules1 = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay];
const modules2 = [EffectCoverflow, Pagination];

const customerList = [
  {
    logo: logo_hp,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_kk,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_toyota,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_kk,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_hp,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_toyota,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_kk,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_hp,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_toyota,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_hp,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_kk,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
  {
    logo: logo_hp,
    title:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
    content:
      "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
  },
];

const serverList = [
  {
    logo: img_tel,
    title: "核心优势1",
    content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理",
  },
  {
    logo: img_computer,
    title: "核心优势2",
    content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障",
  },
  {
    logo: img_qq,
    title: "核心优势3",
    content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障",
  },
  {
    logo: img_skill,
    title: "核心优势4",
    content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理",
  },
];

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs动画 */
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  }).init();
});
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 670px;
}

/* 产品轮播图 */
#swiper2 {
  width: 70%;
  height: 300px;
}

#swiper2 .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
#swiper2 .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper2 img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 26px;
  margin-top: 12%;
  width: 50%;
  position: relative;
  left: 23.8%;
  top: -14px;
  color: #5dd28d;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-weight: 700;
  font-size: 25px;
  color: #2a82e4;
  width: 50%;
  position: relative;
  left: 32%;
  top: -36px;
}

/* 大数据管理系统 */
#bigData {
  padding: 10px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .aboutus-r {
  text-align: center;
}
#bigData .aboutus-r img {
  width: 60%;
  height: 60%;
  margin-left: 25%;
  margin-top: 33px;
}

.aboutus-title {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.aboutus-info {
  padding-top: 28px;
  padding-left: 40px;
  padding-right: 0;
  font-size: 14px;
  font-weight: 20;
  color: #808080;
  line-height: 40px;
}

.title-container {
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  color: #505050;
}

.title-pub {
  font-size: 12px;
  color: #505050;
  font-weight: 200;
  display: inline-block;
  padding-top: 16px;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

.solve-part {
  padding: 50px 0;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
}
.swiper {
  --swiper-theme-color: #2a82e4;
  --swiper-pagination-color: #ffffff; /* 两种都可以 */
}
.swiper-pagination {
  --swiper-pagination-bullet-width: 40px;
  --swiper-pagination-bullet-height: 4px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  border-radius: 1px;
}
</style>

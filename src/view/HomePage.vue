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
        <img class="swiper-lazy" :data-src="item.img" alt="东铭绿能" />
        <div class="swiper-lazy-preloader"></div>
        <div
          :class="
            index == 2
              ? 'swiper-slide-title special-title'
              : 'swiper-slide-title'
          "
        >
          <h1 className="font-style">{{ item.title }}</h1>
          <p className="font-style">{{ item.content }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>

    <!-- 关于我们 -->
    <div id="bigData" class="container-fuild">
      <div class="aboutus-title">
        <div class="title-main">
          <span style="font-weight: 200"> --------- </span>
          <span class="title-container"> 关于我们 </span>
          <span style="font-weight: 200"> --------- </span>
        </div>
        <span class="title-pub">About US</span>
      </div>
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-3 wow zoomIn">
          <img
            class="img-responsive"
            src="@/assets/img/Aboutus-L2.png"
            alt="东铭绿能"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 aboutus-info">
          <p>
            东铭绿能（上海）科技有限公司隶属于东铭实业集团，致力于新能源、新材料、新技术的研发与推广，以及碳资产管理等高新技术应用领域。为钢铁冶金及相关行业提供全面的提质增效与节能降本解决方案，助力企业实现绿色转型。
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
          <span style="font-weight: 200"> --------- </span>
          <span class="title-container"> 产品与解决方案 </span>
          <span style="font-weight: 200"> --------- </span>
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
        autoplay
        loop
        :coverflow-effect="{
          rotate: 0,
          stretch: -50,
          depth: 400,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        class="mySwiper"
      >
        <swiper-slide
          class="banner-swiper"
          v-for="(item, index) in swiperList2"
          :key="index"
        >
          <div class="banner-swiper-box">
            <img
              :src="item.img"
              alt="东铭绿能"
              :style="{ width: index === 0 ? curMiddleWidth : curCommonWidth }"
              @click="gotoPage(item)"
            />
          </div>
        </swiper-slide>
      </swiper>
      <!-- 新闻与动态 -->
      <!-- <div id="news" class="container-fuild">
        <div class="aboutus-title">
          <div class="title-main">
            <span style="font-weight: 200"> --------- </span>
            <span class="title-container"> 新闻与动态 </span>
            <span style="font-weight: 200"> --------- </span>
          </div>
          <span class="title-pub">News</span>
        </div>
      </div>
      <swiper
        id="swiper3"
        :modules="modules1"
        :slides-per-view="1"
        :space-between="0"
        navigation
        indicator-color="#fff"
        lazy
        loop
        :pagination="{
          clickable: true,
          el: '.swiper-pagination3',
        }"
      >
        <swiper-slide
          class="banner-swiper"
          v-for="(item, index) in swiperList3"
          :key="index"
        >
          <div class="swiper-slide-content">
            <div class="swiper-slide-left">
              <p>{{ item.title }}</p>
              <p>{{ item.date }}</p>
              <p>
                {{ item.content }}
              </p>
              <a href="">了解详情 > </a>
            </div>
            <div class="swiper-slide-right">
              <img class="swiper-lazy" :data-src="item.img" alt="东铭绿能" />
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination3"></div>
      </swiper> -->
      <!-- 选择我们的理由 -->
      <div id="reason" class="container-fuild">
        <div class="aboutus-title">
          <div class="title-main">
            <span style="font-weight: 200"> --------- </span>
            <span class="title-container"> 选择我们的理由 </span>
            <span style="font-weight: 200"> --------- </span>
          </div>
          <span class="title-pub">OUR STRENGTHS</span>
        </div>
      </div>
      <div class="reason-content">
        <el-row gutter="2">
          <el-col
            v-for="(item, index) in reasonList"
            :key="index"
            :span="windowWidth > 767 ? 12 : 24"
            class="wow fadeInUp"
          >
            <el-row gutter="2" class="reason-content-first">
              <el-col :span="windowWidth > 767 ? 12 : 24" style="display: flex">
                <img :src="item[0].url" alt="" />
              </el-col>
              <el-col
                :span="windowWidth > 767 ? 12 : 24"
                class="reason-content-right"
              >
                <h3>{{ item[0].title }}</h3>
                <div></div>
                <p>{{ item[0].content }}</p>
              </el-col>
            </el-row>
            <el-row
              gutter="2"
              class="reason-content-first hidden-sm hidden-md hidden-lg"
            >
              <el-col :span="windowWidth > 767 ? 12 : 24">
                <img :src="item[1].url" alt="" />
              </el-col>
              <el-col
                :span="windowWidth > 767 ? 12 : 24"
                class="reason-content-right"
              >
                <h3>{{ item[1].title }}</h3>
                <div></div>
                <p>{{ item[1].content }}</p>
              </el-col>
            </el-row>
            <el-row gutter="2" class="reason-content-first hidden-xs">
              <el-col
                :span="windowWidth > 767 ? 12 : 24"
                class="reason-content-right"
              >
                <h3>{{ item[1].title }}</h3>
                <div></div>
                <p>{{ item[1].content }}</p>
              </el-col>
              <el-col :span="windowWidth > 767 ? 12 : 24" style="display: flex">
                <img :src="item[1].url" alt="" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <div id="news" class="container-fuild">
      <div class="aboutus-title">
        <div class="title-main">
          <span style="font-weight: 200"> --------- </span>
          <span class="title-container"> 合作伙伴 </span>
          <span style="font-weight: 200"> --------- </span>
        </div>
        <span class="title-pub">OUR PARTNERS</span>
      </div>
    </div>
    <Scroll />
  </div>
</template>

<script setup name="HomePage">
import WOW from "wow.js";
import { getCurrentInstance, onMounted } from "vue";
import { useRouter } from "vue-router";
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
import { reactive, ref, computed } from "vue";

import Scroll from "./Scroll.vue";

import banner1 from "@/assets/img/new-banner5.jpg";
import banner2 from "@/assets/img/new-banner2.jpg";
import banner3 from "@/assets/img/new-banner3.jpg";

import reason1 from "@/assets/img/reason1.jpg";
import reason2 from "@/assets/img/reason2.jpg";
import reason3 from "@/assets/img/reason3.jpg";
import reason4 from "@/assets/img/reason4.jpg";

import product1 from "@/assets/img/zhihuijiance.png";
import product2 from "@/assets/img/gaoyabeng.png";
import product3 from "@/assets/img/ceshuiyi.png";
import news1 from "@/assets/img/news-sample.jpeg";
import news2 from "@/assets/img/news2.png";
import news3 from "@/assets/img/news3.png";

import logo_hp from "@/assets/img/logo_hp.png";
import logo_kk from "@/assets/img/logo_kk.png";
import logo_toyota from "@/assets/img/logo_toyota.png";

import img_tel from "@/assets/img/tel.png";
import img_computer from "@/assets/img/computer.png";
import img_qq from "@/assets/img/qq.png";
import img_skill from "@/assets/img/skill.png";

const windowWidth = ref(window.innerWidth);

const curCommonWidth = computed(() => {
  return windowWidth.value > 768 ? "80%" : "100%";
});
const curMiddleWidth = computed(() => {
  return windowWidth.value > 768 ? "50%" : "80%";
});

const swiperList = [
  {
    img: banner1,
    title: "东铭绿能",
    content: "无限可能",
  },
  {
    img: banner2,
    title: "东铭绿能",
    content: "无限可能",
  },
  {
    img: banner3,
    title: "东铭绿能",
    content: "无限可能",
  },
];

const swiperList2 = [
  {
    img: product2,
    title: "",
    content: "3",
  },
  {
    img: product1,
    title: "",
    content: "0",
  },
  {
    img: product3,
    title: "",
    content: "6",
  },
];

const swiperList3 = [
  {
    img: news1,
    title: "东铭绿能与戴密谱签订战略合作协议",
    date: "2025年02月24日",
    content:
      "双方将发挥各自优势，助力钢铁企业实现检化验的实时精确无人化采集，减少认为干涉，提升监测效率与准确性，为企业生产决策提供科学依据，实现降本增效...",
  },
  {
    img: news2,
    title: "三棵树工业涂料战略牵手东铭绿能，这次战略合作有点不一样",
    date: "2024年10月25日",
    content:
      "近日，三棵树工业涂料与东铭绿能签署了战略合作协议。东铭实业集团有限公司董事长、东铭绿能（上海）科技有限公司董事长张仕平，东铭绿能（上海）科技有限公司总经理游君贤，三棵树集团高级副总裁林德殿、工业涂料事业部总经理缪宁代表双方签约。此次签约，标志着双方将在黑色金属冶炼和压延加工行业建立长期稳定的合作关系，携手推动产业的持续发展...",
  },
  {
    img: news3,
    title: "山西立恒焦化与上海东铭蓝天环保科技战略合作签约",
    date: "2024年05月20日",
    content:
      "山西晋南钢铁集团旗下立恒焦化有限公司与上海东铭蓝天环保科技就技术赋能、设备运维签署战略合作协议，上海东铭蓝天环保科技董事长张仕平、晋南钢铁集团总裁张天福等出席仪式并签约。张天福简要介绍了集团绿色低碳、产业链协同发展及未来发展规划，希望双方共同发挥优势，持续深化合作，围绕产业协同、科技创新、绿色低碳，推动集团环保能力提升，推广环保创A优秀经验...",
  },
];

const reasonList = [
  [
    {
      title: "实力强大 工艺先进",
      content:
        "拥有强大的研发设计制造能力，专业从事先进的水液压的轴向柱塞泵、阀、能量回收等高效节能产品，确保可以及时提供高品质的产品给客户",
      url: reason1,
    },
    {
      title: "精密检测，品质优秀",
      content:
        "产品****全检设备，具备业内一流水准。我们的密封件皆需****的全检，每一件产品都经过检修人员检查批锋及其它不良缺陷，产品品质严格把控。",
      url: reason3,
    },
  ],
  [
    {
      title: "进口原料，国际认证",
      content:
        "材料均来自国际知名品牌，如美国杜邦，道康宁，信越化学等，产品都依照国标、AS568、JIS等标准生产,材质均通过ROHS、UL等第三方认证。",
      url: reason2,
    },
    {
      title: "完善售后，贴心服务",
      content:
        "完善的客户服务体系，认真做好售前，售中，售后的服务，专人24小时内处理和提交解决方案，为客户提供安心售后保障。",
      url: reason4,
    },
  ],
];

const modules1 = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay];
const modules2 = [EffectCoverflow, Pagination, Autoplay];

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

const router = useRouter();

function gotoPage(item) {
  // navIndex.value = index;
  // sessionStorage.setItem("navIndex", index);
  // menuName.value = name;
  const { content } = item;

  router.push({ path: "/software", query: { type: Number(content) } });
}

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
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
@font-face {
  font-family: "Wanshi";
  src: url("src/assets/fonts/wanshi.ttf") format("truetype");
}
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  /* height: 120px; */
  margin-top: 120px;
}

/* 产品轮播图 */
#swiper2 {
  width: 70%;
  height: 450px;
}

.banner-swiper-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#swiper3 {
  width: 70%;
  height: 400px;
  margin-bottom: 50px;
}

#swiper3 .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
#swiper3 .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper2 .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
#swiper2 .banner-swiper img {
  width: 100%;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper2 img {
  width: 100%;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

.font-style {
  font-family: "Wanshi", "STHeiti", "华文彩云" !important;
  letter-spacing: 10px;
  font-size: 50px;
  font-weight: bolder;
  font-style: italic;
  color: #fff;
  -webkit-text-stroke: 0.1px #7cb772;
  -webkit-text-fill-color: #fff;
  text-shadow: 1px 0px #7cb772, 1px 2px #7cb772, 3px 1px #7cb772;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 24%;
  left: 20px;
  z-index: 999999999;
  width: 70%;
  height: 50%;
  text-align: left;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  margin-top: 12%;
  width: 50%;
  position: relative;
  left: 13%;
  top: -14px;
}

#swiper .banner-swiper .swiper-slide-title > p {
  width: 50%;
  position: relative;
  left: 19%;
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
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 0;
  font-size: 18px;

  color: #000000;
  line-height: 40px;
}

.aboutus-info p {
  font-weight: 200;
  line-height: 34px;
}

#news {
  margin-top: 30px;
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

#reason {
  padding: 20px 0;
  margin-top: 50px;
}

.reason-content {
  padding: 10px 60px;
}
.reason-content-first {
  margin-bottom: 2px;
}
.reason-content-first img {
  width: 100%;
  /* max-height: 194px; */
}

.reason-content-right {
  padding: 0px 10px 10px 2.4% !important;
  border: 1px solid #ccc;
  min-height: 194px;
}

.reason-content-right div {
  width: 20%;
  height: 1px;
  margin-bottom: 10px;
  background-color: #ccc;
}

.reason-content-right h3 {
  letter-spacing: 1px;
  font-size: 18px;
}
.reason-content-right p {
  font-weight: 380;
  font-size: 14px;
  letter-spacing: 1px;
}

.solve-part {
  padding: 30px 0;
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
.swiper-slide-content {
  display: flex;
  justify-content: space-around;
}
.swiper-slide-left {
  width: 50%;
  padding: 20px 60px 0 80px;
}
.swiper-slide-left p {
  max-height: 205px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-slide-left * {
  margin-bottom: 10px;
}
.swiper-slide-left p:nth-child(1) {
  font-size: 24px;
  font-weight: 310;
  height: 80px;
}
.swiper-slide-left p:nth-child(2) {
  font-size: 16px;
  font-weight: 280;
  height: 40px;
}
.swiper-slide-left p:nth-child(3) {
  font-size: 18px;
  font-weight: 280;
}
.swiper-slide-left a {
  font-size: 18px;
  font-weight: 280;
  color: #2a82e4;
  position: relative;
}
.swiper-slide-right {
  width: 50%;
  padding: 20px 60px 0 60px;
}
.swiper-pagination {
  --swiper-pagination-bullet-width: 40px;
  --swiper-pagination-bullet-height: 4px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  border-radius: 1px;
}
@media screen and (max-width: 768px) {
  #HomePage {
    margin-top: 80px;
  }
  .swiper-slide-title {
    width: 90% !important;
    top: -10% !important;
    left: -6% !important;
  }
  /* .special-title {
    top: -1% !important;
    left: -10% !important;
  } */
  .swiper-slide-title h1 {
    font-size: 18px !important;
  }
  .swiper-slide-title p {
    font-size: 18px !important;
    top: -54% !important;
    left: 23% !important;
  }
  .swiper {
    --swiper-theme-color: #2a82e4;
    --swiper-pagination-color: #ffffff; /* 两种都可以 */
    --swiper-navigation-size: 24px;
  }
  .aboutus-info {
    font-size: 14px;
    padding-left: 14px;
  }
  .aboutus-info p {
    font-weight: 200;
    color: #000000;
  }
  .aboutus-r img {
    width: 100% !important;
    height: 100% !important;
    margin-left: 0 !important;
    margin-top: 20px !important;
  }
  #swiper2 {
    width: 70%;
    height: 160px;
  }
  #swiper3 {
    width: 90%;
    height: 500px;
  }
  .swiper-slide-content {
    flex-direction: column !important;
    padding: 0 !important;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-left {
    width: 80%;
    padding: 0 !important;
  }
  .swiper-slide-left p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .swiper-slide-left * {
    margin-bottom: 10px;
  }
  .swiper-slide-left p:nth-child(1) {
    font-size: 14px;
    font-weight: 310;
    height: 40px;
  }
  .swiper-slide-left p:nth-child(2) {
    font-size: 12px;
    font-weight: 280;
    height: 20px;
  }
  .swiper-slide-left p:nth-child(3) {
    font-size: 14px;
    font-weight: 280;
  }
  .swiper-slide-left a {
    font-size: 14px;
    font-weight: 280;
    color: #2a82e4;
    position: relative;
  }
  .swiper-slide-right {
    width: 80%;
    margin-top: 20px;
    padding: 0 !important;
  }

  .reason-content {
    padding: 0 30px !important;
  }
  .reason-content-first {
    margin-bottom: 30px !important;
  }
  #swiper {
    width: 100%;
    margin-top: 100px;
  }
}
</style>

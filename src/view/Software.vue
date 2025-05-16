<template>
  <div class="product">
    <div class="banner-container">
      <div class="container-fuild">
        <div class="container wow slideInUp">
          <h1 class="banner-title">绿能节能产品</h1>
        </div>
      </div>
      <img class="img-responsive center-block" :src="banner1" width="100%" />
    </div>

    <div id="proInfo" class="conatiner-fuild">
      <div
        class="back"
        v-if="nowType !== 0"
        @click="nowType = 0"
        style="text-align: right"
      >
        返回
      </div>
      <div class="container">
        <div class="proInfo-title text-center">
          <div v-if="nowType === 0">产品与解决方案</div>
          <div v-else>{{ productList[nowType - 1]?.name }}</div>
        </div>
      </div>
    </div>

    <div v-if="nowType === 0" class="parent">
      <div
        v-for="(item, index) in productList"
        :key="index"
        @click="nowType = item.type"
      >
        <div class="border">
          <img
            class="img-responsive center-block"
            :src="item.pic"
            width="80%"
          />
        </div>
        <div class="name">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="container-fuild">
      <div class="pContent">
        <p v-for="(itemP, indexP) in nowProduct?.pContent" :key="indexP">
          {{ itemP }}
        </p>
        <div
          class="infoC"
          v-for="(itemI, indexI) in nowProduct?.info"
          :key="indexI"
        >
          <div class="titleIP">{{ itemI.title }}</div>

          <div
            v-if="itemI.characteristicsBefore?.length > 0"
            class="characteristicsIP"
          >
            <div class="titleIP">｜产品特性</div>
            <div
              class="cIPItem"
              v-for="(itemIC, indexIC) in itemI.characteristicsBefore"
              :key="indexIC"
            >
              <img height="30px" :src="itemICP" />
              <div>{{ itemIC }}</div>
            </div>
          </div>

          <div v-if="itemI.picgl === 1" class="imgIP1">
            <img
              class="img-responsive center-block"
              v-for="(itemIP, indexIP) in itemI.pic"
              :key="indexIP"
              :src="itemIP"
              :width="itemI?.picWid?.[indexIP] || ' 60%'"
            />
          </div>
          <div v-if="itemI.picgl === 3" class="imgIP3">
            <img
              class="img-responsive center-block"
              v-for="(itemIP, indexIP) in itemI.pic"
              :key="indexIP"
              :src="itemIP"
              width="80%"
            />
          </div>
          <div v-if="itemI.picgl === 6" class="imgIP6">
            <img
              class="img-responsive center-block"
              v-for="(itemIP, indexIP) in itemI.pic"
              :key="indexIP"
              :src="itemIP"
              width="60%"
            />
          </div>
          <div
            v-if="itemI.characteristics?.length > 0"
            class="characteristicsIP"
          >
            <div class="titleIP">｜产品特性</div>
            <div
              class="cIPItem"
              v-for="(itemIC, indexIC) in itemI.characteristics"
              :key="indexIC"
            >
              <img height="30px" :src="itemICP" />
              <div>{{ itemIC }}</div>
            </div>
          </div>
          <div
            v-if="itemI.characteristicsIP?.length > 0"
            class="characteristicsIP"
          >
            <div class="titleIP">｜业绩表现</div>
            <div
              class="cIPItem"
              v-for="(itemIC, indexIC) in itemI.characteristics2"
              :key="indexIC"
            >
              <img height="30px" :src="itemICP" />
              <div>{{ itemIC }}</div>
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="titleIP">国内外标杆客户</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup name="Software">
import { ref, watch } from "vue";
import WOW from "wow.js";
import { onMounted } from "vue";
import banner1 from "@/assets/img/lnjncp.jpg";
import { useRouter, useRoute } from "vue-router";

import itemICP from "@/assets/img/itemICP.png";

import product1 from "@/assets/img/product1.png";
import product2 from "@/assets/img/product2.png";
import product3 from "@/assets/img/product3.png";
import product4 from "@/assets/img/product4.png";
import product5 from "@/assets/img/product5.png";
import product6 from "@/assets/img/product6.png";
import product7 from "@/assets/img/product7.png";
import product8 from "@/assets/img/product8.png";

import product11 from "@/assets/img/product11.png";
import product12 from "@/assets/img/product12.png";
import product13 from "@/assets/img/product13.png";

import product21 from "@/assets/img/product21.png";
import product22 from "@/assets/img/zhihuijiance.png";
import product23 from "@/assets/img/product23.png";
import product24 from "@/assets/img/product24.png";

import product31 from "@/assets/img/product31.png";
import product32 from "@/assets/img/product32.png";
import product33 from "@/assets/img/product33.png";
import product34 from "@/assets/img/product34.png";
import product35 from "@/assets/img/product35.png";
import product36 from "@/assets/img/product36.png";

import b1 from "@/assets/img/b1.png";
import b2 from "@/assets/img/b2.png";
import b3 from "@/assets/img/b3.png";
import b4 from "@/assets/img/b4.png";
import b5 from "@/assets/img/b5.png";
import b6 from "@/assets/img/b6.png";
import b7 from "@/assets/img/b7.png";
import b8 from "@/assets/img/b8.png";
import b9 from "@/assets/img/b9.png";
import b10 from "@/assets/img/b10.png";
import b11 from "@/assets/img/b11.png";
import b12 from "@/assets/img/b12.png";
import b13 from "@/assets/img/b13.png";
import b14 from "@/assets/img/b14.png";
import b15 from "@/assets/img/b15.png";
import b16 from "@/assets/img/b16.png";
import b17 from "@/assets/img/b17.png";
import b18 from "@/assets/img/b18.png";
import b19 from "@/assets/img/b19.png";
import b20 from "@/assets/img/b20.png";
import b21 from "@/assets/img/b21.png";
import b22 from "@/assets/img/b22.png";
import b23 from "@/assets/img/b23.png";
import b24 from "@/assets/img/b24.png";
import b25 from "@/assets/img/b25.png";
import b26 from "@/assets/img/b26.png";
import b27 from "@/assets/img/b27.png";
import b28 from "@/assets/img/b28.png";

import product41 from "@/assets/img/product41.png";
import product42 from "@/assets/img/product42.png";

import product51 from "@/assets/img/product51.png";
import product52 from "@/assets/img/product52.png";
import product53 from "@/assets/img/product53.png";
import product54 from "@/assets/img/product54.png";
import product55 from "@/assets/img/product55.png";
import product56 from "@/assets/img/product56.png";

import product61 from "@/assets/img/product61.png";

import product71 from "@/assets/img/product71.png";
import product72 from "@/assets/img/product72.png";
import product73 from "@/assets/img/product73.png";

import product81 from "@/assets/img/product81.png";

const nowType = ref(0);
const nowProduct = ref({});
const stopWatch = watch(nowType, (newValue, oldValue) => {
  console.log(
    "nowType变化了",
    newValue,
    oldValue,
    customerList.find((item) => item.type === newValue)
  );
  nowProduct.value = customerList.find((item) => item.type === newValue);
});

const router = useRouter();
const route = useRoute();

const productList = [
  { name: "低温脱硝催化剂", pic: product1, type: 1 },
  { name: "原辅料智能制样", pic: product2, type: 2 },
  { name: "高压泵节能系统", pic: product3, type: 3 },
  { name: "工业油漆", pic: product4, type: 4 },
  { name: "铁水钢包智慧调度", pic: product5, type: 5 },
  { name: "全自动快速测水仪", pic: product6, type: 6 },
  { name: "皮带机及智慧运维", pic: product7, type: 7 },
  { name: "油品净化服务", pic: product8, type: 8 },
];

const customerList = [
  {
    type: 1,
    pContent: [
      "东铭绿能作为欧美第一家蜂窝催化剂生产商，在全球拥有超过4000个业绩，是最富盛名/市场占有率最高的专业SCR脱硝催化剂生产厂家。自 2005 年进入中国市场，累计供货超 400 个项目，享有性能优异、使用寿命最长、长期运行经济性最佳的口碑，至今保持 0 质量纠纷或索赔官司的优良传统，成就了公司在业内的领先地位。",
      "在钢铁行业(包括烧结、焦化和酸洗应用)，我司拥有无与伦比的全球最多业绩，共有 100 多个。在低温应用领域，仅中国就有 200 多个垃圾焚烧脱硝业绩，运行温度为 180-230℃之间。",
      "在宁钢焦化，设计应用温度为 170℃，已持续良好运行超 8 年。在南钢，我司作为南钢第一烧结厂 2*180m2 烧结机供货商，至今，该批催化剂已运行 7 年，远超性能保证值 3 年，也获得了业主的高度好评和一致认可。期间，我司也一直和工厂保持联系，进行催化剂的抽样检测，确保了良好的售后服务。",
      "因此我司在低温和/或钢铁行业，拥有全球最丰富的经验和最优质的产品质量。",
    ],
    info: [
      {
        title: "",
        pic: [product11, product12, product13],
        picgl: 3,
        characteristics: [
          "免维护时间：4-5年",
          "容积效率95%，且三年容积效率下降低于1%，五年容积效率下降不超2%",
          "资回收期短至1.5年",
          "结构简单可靠，通过流体介质自润滑，通过模块自由组合达到任何需要的流量",
        ],
        characteristics2: [
          "自2005年进入中国市场，享有性能优异、使用寿命最长、长期运行经济性最佳的口碑，至今保持0质量纠纷或索赔官司的优良传统，成就了本公司业内的世界领先地位。",
          "在钢铁行业低温脱硝应用领域，有200多个业绩，运行温度在180-230℃之间。",
          "2018年，在南钢第一烧结厂2*180m2烧结机脱硝系统上，至今已运行6年半，远超性能保证值3年，也获得了业主的高度好评和一致认可。期间，也一直和工厂保持联系，进行了催化剂的抽样检测，确保良好的售后服务。",
          "全球长期合作伙伴：Andriz，BASF，TKC，BRCC，Huaneng，Baosteel，etc.,",
        ],
      },
    ],
  },
  {
    type: 2,
    pContent: [
      "该系统深度融合了检测实验室的各类国家标准和行业标准，并与智能控制系统相结合，通过全流程无人化作业实现物料水分检测、破碎、缩分、研磨、打包、打码等全闭环检测工艺链，可有效消除人为干扰因素，在减少60%人工的情况下，提升制样效率30%以上。为冶金原料检测等领域构建全流程质量追溯体系助力企业实现降本增效与风险管控双重突破。",
    ],
    info: [
      {
        title: "",
        pic: [product21, product22, product23, product24],
        picgl: 1,
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 3,
    pContent: [
      "我司水液压流体装备源于水泵技术的研发与产品创新领先的丹麦。专业从事研发设计制造最具有挑战性的水液压领域的轴向柱塞泵，阀，能量回收技术等高效节能减排产品。",
      "目前参与了多项国家院校及科研院所的攻坚克难项目，不断拓展水液压行业的新应用，我司研发、设计和生产的可用于反渗透系统的高压泵与能量回收装置，广泛应用于海水淡化、废水处理、清洗、加湿、军工、核电，半导体、液晶面板、化工、木材加工、海洋、深海，能源、食品、医药、液压传动、智能机器人等领域。"
    ],
    info: [
      {
        title: "主要产品一：高效节能降碳全陶瓷柱塞泵（组）",
        pic: [product31, product32, product33],
        picgl: 3,
        characteristics: [
          "免维护时间：4-5年",
          "容积效率95%，且三年容积效率下降低于1%，五年容积效率下降不超2%",
          "资回收期短至1.5年",
          "结构简单可靠，通过流体介质自润滑，通过模块自由组合达到任何需要的流量",
        ],
        characteristics2: [],
      },
      {
        title: "主要产品二：高效节能降碳自动补偿式陶瓷能量回收（组）",
        pic: [product34, product35, product36],
        picgl: 3,
        characteristics: [
          "免维护时间：10-15年",
          "投资回收期短至1.5年",
          "能量转换效率高：压力交换器可回收带压流体达98%以上的液压能量，同时可使高压泵容量减少20～60%",
          "超低压能回压力可达4barg，为全球最优秀的等压式交换器",
          "单位容量140m3/h，为所有压力交换器中最高的单位容量",
          "流体自润滑，无油污染",
          "结构简单，维护方便",
          "占地面积小（50%）",
        ],
        characteristics2: [],
      },
      {
        title: "国内外标杆客户",
        pic: [
          b1,
          b2,
          b3,
          b4,
          b5,
          b6,
          b7,
          b8,
          b9,
          b10,
          b11,
          b12,
          b13,
          b14,
          b15,
          b16,
          b17,
          b18,
          b19,
          b20,
          b21,
          b22,
          b23,
          b24,
          b25,
          b26,
          b27,
          b28,
        ],
        picgl: 6,
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 4,
    pContent: [
      "我司与三棵树油漆于2024年10月签署战略协议，以期双方在黑色金属冶炼和压延加工行业建立长期稳定的合作关系，携手推动产业的持续发展。",
      "三棵树涂料股份有限公司创立于 2002 年，于2016年在上交所主板上市（股票代码603737）。为胡润中国民营企业 500 强企业，为北京 2022 年冬奥会和冬残奥会官方涂料独家供应商。",
      "三棵树始终关注人类美好生活和家居健康，致力于打造内外墙涂料、防水、保温、地坪、辅材、施工“六位一体”的绿色建材一站式集成系统，打造以高品质涂料为主和家居新材料为辅、基辅材全配套、健康、色彩、品位、服务一体的美好生活解决方案。为国产涂料第一品牌。",
      "东铭绿能作为三棵树油漆在黑色金属冶炼和压延加工及上下游唯一指定代理，已与亚新钢铁、东海钢铁及宝武（西芒杜铁矿项目）建立合作。",
    ],
    info: [
      {
        title: "",
        pic: [product41, product42],
        picWid: ["70%", "50%"],

        picgl: 1,
        characteristicsBefore: ["品质保证", "价格更优", "多样化合作"],
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 5,
    pContent: [
      "我司铁水包、钢包智慧调度系统采用了电磁微声（EMMA）识别技术，该技术是通过雷达发射电磁波，识别微声芯片的ID号，来实现铁水包及机车、钢水包天车的定位、包号识别、数据展示平台及流程调度模型等功能的一种新型识别技术。%人工的情况下，提升制样效率30%以上。为冶金原料检测等领域构建全流程质量追溯体系助力企业实现降本增效与风险管控双重突破。",
      "该技术的研发团队核心成员主要来自于上海交通大学、德国KIT和弗莱堡大学、日本国立千叶大学等诸多知名大学，包括多位博士、教授、IEEE超声年会程序技术委员、IEEE Fellow等国际著名学者。该团队从事相关领域研究已超过20年，是国内少数具有器件仿真设计、工艺加工、阅读系统制造、天线设计等完整系统研发能力的团队，已主持完成国家级、省部级课题10多项，总经费超过2000万元。",
      "宝钢湛江钢铁首席专家认为：包号识别的准确率要追求100%，否则，对于炼钢智能物流系统，99%=0%。包号识别错误，将导致软件平台的整体错乱，人工排查错误，失去了智能化的意义。",
    ],
    info: [
      {
        title: "",
        pic: [product51, product52, product53],
        picWid: ["50%"],

        characteristicsBefore: [
          "天然无线、无源（无需电源供电）",
          "传感器材料为压电材料，耐受-200℃至 1100℃高低温；",
          "寿命超过40年；",
          "无源传感器中阅读距离远、信号穿透能力强。",
          "平台检测技术：射频识别与传感一体化，可以提供多功能传感，即在发送ID信号时，也能同时发送温度、压力、定位等信号。",
        ],
        picgl: 1,
        characteristics: [
          "减少铁水温降（3 0 - 6 0 ℃）。",
          "提高铁包周转率，减少铁包运行个数。",
          "铁包全生命周期管理。",
          "降低人力成本减少现场人工操作，降低风险系数。",
          "铁包进行实时跟踪定位，方便调度人员掌握铁包信息，使调度更加便捷。",
          "实时全天候进行铁包安全监测，降低铁包烧穿漏铁的事故发生，减少安全事故的发生。",
          "改变作业模式，提升作业效率，打通高炉、铁水运输、炼钢之间的信息壁垒，生产数据在线透明管理，基于强化学习的智能排产和铁水运输调度，辅助生产、决策，实现生产效率效益双升。",
        ],
        characteristics2: [],
      },
      {
        title: "产品案例",
        pic: [product54, product55, product56],
        picgl: 3,
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 6,
    pContent: [
      "该测水仪主要用于煤、焦、铁矿石、溶剂矿等原料中水份含量的分析检测，具有精度高、测量准、全自动运行、实时在线监测、稳定性强的特点；监测过程全自动在线记录，可有效排除人为干扰， 每份分析样品都自动生成水份曲线图，可用于原料水份含量的结算参考和依据。",
    ],
    info: [
      {
        title: "",
        pic: [product61],
        picgl: 1,
        characteristicsBefore: [],
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 7,
    pContent: [
      "四川省自贡运输机械集团为中国散料输送机械设计、制造和安装领军企业，从事通用带式输送机、管状带式输送机、曲线带式输送机、斗式提升机、螺旋输送机、驱动装置和逆止装置等的设计制造和系统EPC及智慧化运营服务。自贡运机为深交所上市企业（股票代码001288），在《2024-2029年全球与中国带式输送机行业市场现状调研分析与发展前景报告》中，居品牌排行版首位。 每份分析样品都自动生成水份曲线图，可用于原料水份含量的结算参考和依据。",
      "2025年3月10日，自贡运机承建的西非几内亚西芒杜矿山输送项目启动胶结穿带工序，团队克服现场地形险峻等困难，稳步推进项目进展。",
    ],
    info: [
      {
        title: "",
        pic: [product71, product72, product73],
        picWid: ["50%"],
        picgl: 1,
        characteristicsBefore: [],
        characteristics: [],
        characteristics2: [],
      },
    ],
  },
  {
    type: 8,
    pContent: [
      "自主研发的多用途纳米筛分膜及净化设备，采用独特的错流净化工作原理，精度达到纳米级，能够一次实现除水、除杂，得油率提升10%以上，优于国内同类主流产品。-2029年全球与中国带式输送机行业市场现状调研分析与发展前景报告》中，居品牌排行版首位。 每份分析样品都自动生成水份曲线图，可用于原料水份含量的结算参考和依据。",
      "产品与服务助力打造清洁度领先的钢铁行业企业。设备综合效率（OEE）可比同行高5%~10%，成为低成本、高可靠性的核心优势。",
    ],
    info: [
      {
        title: "",
        pic: [product81],
        picWid: ["50%"],
        picgl: 1,
        characteristicsBefore: [],
        characteristics: [
          "每个齿轮站配高粘度设备",
          "每个伺服系统配高级别设备，长期不用换伺服阀",
          "每个油膜轴承油配去水去乳化高精度设备，轴承更换少，停产少",
          "废油再生回用。每年节约千万。",
          "每个油站的油不再产生废油",
          "重要的油加抗磨剂，减少新油使用量。",
          "管道清洗干净，润滑畅通无阻，设备持久最好状态",
          "设备供给，设备租赁，油品在线提级，旧油康复，模式灵活",
        ],
        characteristics2: [],
      },
    ],
  },
];

onMounted(() => {
  console.log(
    "router",
    route.query,
    customerList.find((item) => item.type === route.query.type)
  );
  nowType.value = +route.query.type || 0;
});
</script>

<style scoped>
.product {
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-container {
  position: relative;
  text-align: center;
  transition: all ease 0.6s;
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 根据需要调整颜色 */
  z-index: 1;
}

.parent {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 100px;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
}
.parent .border {
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  width: 100%;
}
/* height: 0;
  padding-top: 100%; 
  position: relative;  */

.parent .name {
  color: #38846c;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

#proInfo {
  width: 100%;
  padding: 20px;
  background: #38846c;
}

#proInfo .proInfo-title div {
  font-size: 32px;
  font-weight: 500;
  color: #fff;
}

.pContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pContent p {
  width: 70%;
  padding-top: 20px;
  font-size: 16px;
}
.infoC {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleIP {
  width: 70%;
  font-size: 16px;
  color: #2a82e4;
  font-weight: bold;
  padding: 20px 0;
}
.infoC .imgIP3 {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.infoC .imgIP1 {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.infoC .imgIP6 {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.infoC .characteristicsIP {
  width: 50%;
}
.infoC .characteristicsIP .cIPItem {
  display: flex;
  padding: 10px 0;
}
.infoC .characteristicsIP .cIPItem div {
  font-weight: lighter;
  margin: 6px 0 0 10px;
}

.back {
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  right: 20px;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .product {
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner-container {
    position: relative;
    text-align: center;
    transition: all ease 0.6s;
  }

  .banner-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* 根据需要调整颜色 */
    z-index: 1;
    font-size: 14px;
  }

  .parent {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
  }
  .parent .border {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    width: 100%;
  }
  /* height: 0;
  padding-top: 100%; 
  position: relative;  */

  .parent .name {
    color: #38846c;
    font-size: 18px;
    font-weight: bold;
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }

  #proInfo {
    width: 100%;
    padding: 20px;
    background: #38846c;
  }

  #proInfo .proInfo-title div {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }

  .pContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pContent p {
    width: 80%;
    padding-top: 20px;
    font-size: 16px;
  }
  .infoC {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .titleIP {
    width: 70%;
    font-size: 16px;
    color: #2a82e4;
    font-weight: bold;
    padding: 20px 0;
  }
  .infoC .imgIP3 {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
  .infoC .imgIP1 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
  .infoC .imgIP6 {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .infoC .characteristicsIP {
    width: 70%;
  }
  .infoC .characteristicsIP .cIPItem {
    display: flex;
    padding: 10px 0;
  }
  .infoC .characteristicsIP .cIPItem div {
    font-weight: lighter;
    margin: 6px 0 0 10px;
  }

  .back {
    cursor: pointer;
    position: absolute;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    right: 20px;
    margin-top: 10px;
  }
}
</style>

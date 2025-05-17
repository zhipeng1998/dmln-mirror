<template>
  <div id="ConcatUs">
    <div class="concat-top">
      <p>联系我们</p>
      <img src="@/assets/img/contactus.png" alt="联系我们" />
    </div>
    <div class="concat-text">
      <span>联系我们</span>
    </div>
    <el-row :gutter="80" class="concat-pub">
      <el-col
        :span="windowWidth > 767 ? 16 : 24"
        style="padding-left: 20, padding-right: 20"
      >
        <div class="concat-map">
          <img src="@/assets/img/map.png" alt="联系我们" />
        </div>
      </el-col>
      <el-col
        :span="windowWidth > 767 ? 8 : 24"
        style="padding-left: 20, padding-right: 20"
      >
        <div class="concat-right" style="margin-top: 3px">
          <div>
            <el-row>
              <el-col :span="8" class="map-right map-right-left">
                <img
                  src="@/assets/img/beijing.png"
                  alt="联系我们"
                  class="wow zoomIn"
                />
                <span style="font-size: 20px">北京</span>
              </el-col>
              <el-col :span="16" class="map-right map-right-right">
                <p>联系人：某某</p>
                <p>电话：00000000</p>
                <p>传真：00000000</p>
                <p>地址：北京市</p>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-row>
              <el-col :span="8" class="map-right map-right-left">
                <img
                  src="@/assets/img/shanghai.png"
                  alt="联系我们"
                  class="wow zoomIn"
                />
                <span style="font-size: 20px">上海</span>
              </el-col>
              <el-col :span="16" class="map-right map-right-right">
                <p>联系人：游先生</p>
                <p>电话：（086）136-2185-3968</p>
                <p>邮箱：greenbrcc@techbrc.com</p>
                <p>地址：浦东新区金桥镇华虹创新园16号楼7层</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from "wow.js";
import { onMounted } from "vue";
import { reactive, ref } from "vue";

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  var wow = new WOW();
  wow.init();
});
</script>

<style scoped>
#ConcatUs {
  width: 100%;
  height: auto;
}
.concat-top {
  width: 100%;
  height: 366px;
  margin-top: 120px;
}
.concat-pub {
  margin-top: 0px;
  padding: 50px 40px;
}
.concat-top p {
  width: 100%;
  position: absolute;
  font-size: 32px;
  text-align: center;
  top: 260px;
}
.concat-top img {
  width: 100%;
  height: 100%;
}
.concat-text {
  width: 100%;
  height: 67px;
  font-size: 28px;
  line-height: 67px;
  background: #38846c;
}
.concat-text span {
  color: #fff;
  font-weight: 300;
  margin-left: 40px;
}
.concat-map img {
  width: 100%;
  height: 100%;
}
.concat-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  font-weight: 300;
}
.map-right {
  display: flex;
  min-height: 200px;
  flex-direction: column;
}

.map-right p {
  margin-bottom: 5px;
}

.map-right-left {
  justify-content: center;
  align-items: center;
}
.map-right-left span {
  position: relative;
  left: -4px;
}
.map-right-right {
  justify-content: center;
}
.map-right-left img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.map-right img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.concat-right * {
  font-weight: 300;
}
.concat-right div {
  width: 100%;
  height: 13.338vw;
}
.concat-right > div:nth-child(1) {
  background: #38846c;
}
.concat-right > div:nth-child(2) {
  background: #2a82e4;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
@media screen and (max-width: 768px) {
  .concat-top {
    width: 100%;
    height: 116px;
    margin-top: 100px;
  }
  .concat-top p {
    font-size: 16px;
    top: 140px;
  }
  .concat-text {
    display: none;
  }
  .concat-right {
    padding: 5px;
    margin-top: 20px !important;
  }
  .concat-right div {
    width: 100%;
    height: 200px;
  }
}
</style>

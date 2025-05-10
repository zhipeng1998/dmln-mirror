<template>
  <div id="ConcatUs">
    <div class="concat-top">
      <p>联系我们</p>
      <img src="@/assets/img/contactus.png" alt="联系我们" />
    </div>
    <div class="concat-text">
      <span>联系我们</span>
    </div>
    <el-row>
      <el-col :span="12">
        <div>
          <img src="@/assets/img/contactus.png" alt="联系我们" />
        </div>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from "wow.js";
import { onMounted } from "vue";
onMounted(() => {
  var wow = new WOW();
  wow.init();
});
</script>

<style scoped>
#ConcatUs {
  width: 100%;
  height: 1000px;
}
.concat-top {
  width: 100%;
  height: 366px;
  margin-top: 120px;
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
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

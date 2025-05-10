<template>
  <div id="footer">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div>
          <span class="image-container">
            <img src="@/assets/img/brcc-logo.png" alt="logo" />
          </span>
          <span class="text-container">东铭绿能</span>
        </div>
        <div class="company-info">
          <span><img src="@/assets/img/youxiang.png" alt="logo" /></span>
          <span class="company-info-text">邮箱：green-energy@brcc.com</span>
        </div>
        <div class="company-info">
          <span><img src="@/assets/img/dianhua.png" alt="logo" /></span>
          <span class="company-info-text">联系电话：（086）135-6666-8888</span>
        </div>
        <div class="company-info">
          <span><img src="@/assets/img/dizhi.png" alt="logo" /></span>
          <span class="company-info-text"
            >公司地址：浦东新区金桥镇华虹创新园16号楼7层</span
          >
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="footer-right">
          <img src="@/assets/img/gongzhonghao.jpg" alt="logo" />
          <span>微信公众号</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom col-xs-12 col-sm-12 col-md-12">
      <span>@2025 上海东铭绿能环保科技有限公司</span>
      <span>苏ICP备2020055843号</span>
      <span>隐私策略</span>
    </div>
  </div>
</template>

<script setup name="Footer"></script>

<style scoped>
#footer {
  width: 100%;
  height: 240px;
  color: #fff;
  background: #474747;
  overflow: hidden;
  padding: 20px;
}

.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}

.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}

.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}

@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax {
    font-size: 12px;
  }

  .email_wx {
    font-size: 12px;
  }

  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
.image-container {
  display: inline-block;
  width: 70px;
  height: 22px;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.text-container {
  font-size: 20px;
  position: relative;
  top: -4px;
  left: 10px;
}
.company-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.company-info img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: #fff;
}
.company-info-text {
  margin-left: 20px;
}
.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  gap: 5%;
}
.footer-right {
  width: 100%;
  margin-top: 10px;
}
.footer-right img {
  width: 116px;
  height: 116px;
  position: relative;
  left: 80%;
}
.footer-right span {
  display: inline-block;
  width: 116px;
  position: relative;
  left: 80%;
  top: 10px;
  text-align: center;
}
</style>

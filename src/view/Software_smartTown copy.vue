<template>
  <div class="cont">
    <div class="scroll-container">
      <div class="scroll-content">
        <p>第一条内容</p>
        <p>第二条内容</p>
        <p>第三条内容</p>
        <!-- 更多内容 -->
      </div>
    </div>

    <div
      class="botton-scroll wp_optype_2 wp_direction_left"
      style="width: 100%; height: 84px"
    >
      <ul class="featureUL" style="width: 2700px">
        <li class="featureBox" v-for="item in 12" :key="item.id">
          <div class="box">
            <div
              style="
                height: 81px;
                width: 200px;
                text-align: center;
                vertical-align: middle;
                display: table-cell;
              "
            >
              <a href="javascript:;" style="cursor: default">
                <img
                  src="https://tpl-c74a97b-pic48.websiteonline.cn/upload/kf_05.jpg"
                  alt=""
                  style="
                    max-width: 200px;
                    max-height: 81px;
                    height: 81px;
                    width: 200px;
                  "
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup name="smartTown"></script>
<style scoped>
.cont {
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.scroll-container {
  height: 100px; /* 设置容器高度 */
  overflow: hidden;
  position: relative;
}

.scroll-content {
  position: absolute;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.featureUL {
  width: 1000px;
  overflow: hidden;
  position: relative;
}
.featureBox {
  float: left;
}
.wp-lantern_content .botton-scroll {
  z-index: 0;
  border-bottom: #999 0px dotted;
  border-left: #999 0px dotted;
  overflow: hidden;
  margin: 0px 0px;
  float: left;
  border-top: #999 0px dotted;
  border-right: #999 0px dotted;
}
</style>

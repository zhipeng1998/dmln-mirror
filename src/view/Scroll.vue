<template>
  <div>
    <ScrollBanner
      :items="bannerItems"
      :speed="scrollSpeed"
      ref="scrollBannerRef"
    />

    <!-- <div class="controls">
      <button @click="increaseSpeed">加速</button>
      <button @click="decreaseSpeed">减速</button>
      <button @click="pauseScroll">暂停</button>
      <button @click="resumeScroll">继续</button>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ScrollBanner from "./ScrollBanner.vue";

import partner1 from "@/assets/img/partner1.png";
import partner2 from "@/assets/img/partner2.png";
import partner3 from "@/assets/img/partner3.png";
import partner4 from "@/assets/img/partner4.png";
import partner5 from "@/assets/img/partner5.png";
import partner6 from "@/assets/img/partner6.png";
import partner7 from "@/assets/img/partner7.png";
import partner8 from "@/assets/img/partner8.png";
import partner9 from "@/assets/img/partner9.png";
import partner10 from "@/assets/img/partner10.png";
import partner11 from "@/assets/img/partner11.png";
import partner12 from "@/assets/img/partner12.png";
const bannerItems = ref([
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
]);

const scrollSpeed = ref(1);
const scrollBannerRef = ref(null);

const increaseSpeed = () => {
  scrollSpeed.value += 0.5;
  scrollBannerRef.value?.setSpeed(scrollSpeed.value);
};

const decreaseSpeed = () => {
  scrollSpeed.value = Math.max(0.5, scrollSpeed.value - 0.5);
  scrollBannerRef.value?.setSpeed(scrollSpeed.value);
};

const pauseScroll = () => {
  scrollBannerRef.value?.pauseAnimation();
};

const resumeScroll = () => {
  scrollBannerRef.value?.startAnimation();
};
</script>

<style scoped>
.controls {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>

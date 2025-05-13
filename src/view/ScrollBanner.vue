<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-container">
      <div
        class="scroll-content"
        :style="{ transform: `translateX(${position}px)` }"
      >
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item" width="90%" class="img-responsive center-block"  />
        </div>
        <!-- 克隆内容实现无缝滚动 -->
        <div
          class="item"
          v-for="(item, index) in items"
          :key="'clone-' + index"
        >
          <img :src="item" width="90%" class="img-responsive center-block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => ["内容项1", "内容项2", "内容项3", "内容项4", "内容项5"],
  },
  speed: {
    type: Number,
    default: 2,
  },
  itemWidth: {
    type: Number,
    default: 200,
  },
  itemGap: {
    type: Number,
    default: 20,
  },
});

const wrapper = ref(null);
const position = ref(0);
let animationId = null;
let currentSpeed = ref(props.speed);

// 滚动动画
const animate = () => {
  position.value -= currentSpeed.value;

  // 当滚动到一半内容时，重置位置
  if (position.value <= -wrapper.value.scrollWidth) {
    position.value = 0;
  }

  animationId = requestAnimationFrame(animate);
};

// 开始动画
const startAnimation = () => {
  if (!animationId) {
    animate();
  }
};

// 暂停动画
const pauseAnimation = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
};

// 鼠标悬停暂停
const handleMouseEnter = () => {
  pauseAnimation();
};

// 鼠标离开继续
const handleMouseLeave = () => {
  startAnimation();
};

onMounted(() => {
  // 设置初始样式
  if (wrapper.value) {
    wrapper.value.style.width = "60%";
    wrapper.value.style.height = "200px";
  }

  // 开始动画
  startAnimation();

  // 添加事件监听
  wrapper.value?.addEventListener("mouseenter", handleMouseEnter);
  wrapper.value?.addEventListener("mouseleave", handleMouseLeave);
});

onUnmounted(() => {
  // 清除动画和事件监听
  pauseAnimation();
  wrapper.value?.removeEventListener("mouseenter", handleMouseEnter);
  wrapper.value?.removeEventListener("mouseleave", handleMouseLeave);
});

// 暴露方法供父组件调用
defineExpose({
  pauseAnimation,
  startAnimation,
  setSpeed: (speed) => {
    currentSpeed.value = speed;
  },
});
</script>

<style scoped>
.scroll-wrapper {
  width: 70%;
  margin: 0 auto;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  /* border: 1px solid #ddd; */
}

.scroll-container {
  width: 100%;
  height: 100%;
}

.scroll-content {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  will-change: transform; /* 优化性能 */
}

.scroll-content .item {
  flex-shrink: 0;
  width: v-bind('props.itemWidth + "px"');
  height: 100%;
  margin-right: v-bind('props.itemGap + "px"');
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
}
</style>

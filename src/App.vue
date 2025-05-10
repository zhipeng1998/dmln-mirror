<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import GoTop from "@/components/GoTop.vue";
</script>

<template>
  <div style="width: 100%; height: 100%; overflow: hidden">
    <Header></Header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<style scoped></style>

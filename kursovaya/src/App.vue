<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a4331;
  color: white;
}
main {
  flex: 1;
}
</style>
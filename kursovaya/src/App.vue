<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header />
    <main class="flex-fill">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
@font-face {
  font-family: 'Gotham Light';
  src: url('@/assets/Gotham_Light.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins Semibold';
  src: url('@/assets/fonts/Poppins_SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

/* Глобальные стили */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Gotham Light', sans-serif;
  background-color: #1a4331;
  color: white;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-fill {
  flex: 1;
}
</style>

<template>
  <header :class="['main-header w-100', { 'scrolled': scrolled }]">
    <div v-if="!scrolled" class="container d-flex justify-content-between align-items-center py-3">
      <router-link to="/" class="text-decoration-none">
        <div class="brand-logo d-flex flex-column">
          <span class="brand-name">Солярский Николай</span>
          <span class="brand-subtitle">photographer</span>
        </div>
      </router-link>

      <nav class="nav-links d-none d-md-flex justify-content-end" style="width: 33%;">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
        <router-link to="/reviews" class="nav-link">Отзывы</router-link>
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
      </nav>
    </div>

    <div v-else class="container d-flex justify-content-center align-items-center py-2 fade-in">
      <nav class="nav-links d-flex justify-content-center gap-4">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
        <router-link to="/reviews" class="nav-link">Отзывы</router-link>
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 100  // изменено с window.innerHeight * 0.5 на 100px
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-image: url('@/assets/header_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.4s ease;
}

.main-header.scrolled {
  background-image: none;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.nav-link {
  font-family: 'Poppins Semibold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  margin: 0 20px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.router-link-exact-active {
  color: #a3b18a;
  text-decoration: underline;
}

.brand-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.2;
}

.brand-name {
  font-family: 'Gotham Light', sans-serif;
  font-size: 36px;
  font-weight: 200;
  color: white;
  margin-bottom: 0.2rem;
}

.brand-subtitle {
  font-family: 'Poppins Semibold', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-top: 0;
}

.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

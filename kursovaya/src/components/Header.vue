<template>
  <div>
    <header v-if="!scrolled" class="main-header w-100">
      <div class="container d-flex justify-content-between align-items-center py-3">
        <router-link to="/" class="brand-text m-0 text-decoration-none">
          Николай Солярский<br /><small>Photographer</small>
        </router-link>
        <nav class="nav-links d-none d-md-flex justify-content-end" style="width: 33%;">
          <router-link to="/" class="nav-link">Главная</router-link>
          <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
          <router-link to="/reviews" class="nav-link">Отзывы</router-link>
          <router-link to="/contacts" class="nav-link">Контакты</router-link>
        </nav>
      </div>
    </header>

    <header v-else class="scrolled-header w-100 fixed-top fade-in">
      <div class="container d-flex justify-content-center align-items-center py-2">
        <nav class="nav-links d-flex justify-content-center gap-4">
           <router-link to="/" class="nav-link">Главная</router-link>
           <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
           <router-link to="/reviews" class="nav-link">Отзывы</router-link>
           <router-link to="/contacts" class="nav-link">Контакты</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router'; // Явный импорт для ясности

const scrolled = ref(false);

const handleScroll = () => {
  // Хедер будет меняться, когда пользователь прокрутит страницу
  // на половину высоты окна браузера. Можете изменить 0.5 на другое значение.
  scrolled.value = window.scrollY > window.innerHeight * 0.5;
};

// Добавляем слушателя события прокрутки при загрузке компонента
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Убираем слушателя при уничтожении компонента, чтобы избежать утечек памяти
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

.main-header {
  position: absolute;
  top: 0;
  background: transparent;
  color: white;
  z-index: 1000;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  line-height: 1.2;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.nav-link:hover, .router-link-exact-active {
  color: #a3b18a;
  text-decoration: underline;
}

.scrolled-header {
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  transition: all 0.4s ease;
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

/* Этот стиль для подсветки активной секции при скролле больше не нужен, 
   так как vue-router сам добавляет класс .router-link-exact-active */
/*
.nav-link.active {
  border-bottom: 2px dotted white;
  font-size: 1.1rem;
  font-weight: bold;
}
*/

@media (max-width: 768px) {
  .brand-text {
    font-size: 1.2rem;
  }
  .nav-link {
    margin: 0 5px;
    font-size: 0.9rem;
  }
  .d-none.d-md-flex {
      display: none !important;
  }
}
</style>
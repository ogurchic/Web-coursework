<template>
  <footer class="bg-dark text-white py-4">
    <div class="container text-center">
      <!-- Icons -->
      <div class="d-flex justify-content-center gap-4 mb-3">
        <a href="#" aria-label="Instagram">
          <img :src="instagram" alt="Instagram" width="24" height="24" />
        </a>
        <a href="#" aria-label="Telegram">
          <img :src="telegram" alt="Telegram" width="24" height="24" />
        </a>
        <a href="#" aria-label="VK">
          <img :src="vk" alt="VK" width="24" height="24" />
        </a>
      </div>

      <!-- Text -->
      <div class="small">
        <p class="mb-1">© Николай Солярский (Соля), 2025</p>
        <p class="mb-1">Профессиональная фотосъёмка</p>
        <p class="mb-1">+7 (925) 590-XX-XX</p>
        <p class="mb-0">hello@solyaphoto.ru</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="js">
import instagram from './icons/instagram.svg'
import telegram from './icons/telegram.svg'
import vk from './icons/vk.svg'
</script>
ы
<style scoped>

</style>

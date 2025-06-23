<template>
  <div class="contact-page d-flex flex-column align-items-center text-center py-5 px-3">
    <img
      src="@/assets/placeholder-avatar.png"
      alt="Фото"
      class="avatar mb-4"
    />

    <h6 class="text-uppercase text-white fw-semibold mb-1">Николай Солярский</h6>
    <h2 class="text-white fw-bold mb-3">НАЧИНАЮЩИЙ ФОТОГРАФ В ТОМСКЕ</h2>

    <p class="text-white-50 mb-3">
      Для связи со мной напишите мне в соцсетях или позвоните по телефону.
    </p>

    <p class="text-white fs-4 fw-semibold mb-4">+7 123 456 78 90</p>

    <div class="d-flex flex-column gap-3 w-100" style="max-width: 300px;">
      <a
        href="https://www.instagram.com"
        target="_blank"
        class="btn btn-outline-light w-100 text-uppercase"
      >
        Написать в Инстаграмме
      </a>

      <a
        href="https://t.me"
        target="_blank"
        class="btn btn-outline-light w-100 text-uppercase"
      >
        Написать в Telegram
      </a>

      <a
        href="https://vk.com"
        target="_blank"
        class="btn btn-outline-light w-100 text-uppercase"
      >
        Написать в ВКонтакте
      </a>
    </div>
  </div>
</template>
ы
<script setup>
// Никаких скриптов не требуется
</script>

<style scoped>
.contact-page {
  background-color: #1f3a30; /* Тёмно-зелёный как на макете */
  min-height: 100vh;
}

.avatar {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  background-color: #ccc;
}
</style>

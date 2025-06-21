<template>
  <div class="about-me-page">
    <section class="container text-center py-5">
      <h2 class="text-uppercase mb-4">Начинающий фотограф в Томске</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="portfolio-category">
            <img src="@/assets/1.png" alt="Индивидуальная съемка" class="img-fluid">
            <div class="overlay">
              <router-link to="/portfolio" class="stretched-link">Индивидуальная</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-category">
            <img src="@/assets/2.png" alt="Семейная съемка" class="img-fluid">
            <div class="overlay">
              <router-link to="/portfolio" class="stretched-link">Семейная</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-category">
            <img src="@/assets/3.png" alt="Документальная съемка" class="img-fluid">
            <div class="overlay">
              <router-link to="/portfolio" class="stretched-link">Документальная</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="eye-divider my-5">
        <img src="@/assets/4.png" alt="Close-up of eyes" class="img-fluid">
    </div>

    <section class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-2">
          <h2 class="text-uppercase about-me-title">Обо мне</h2>
        </div>
        <div class="col-md-5">
          <p>
            Меня зовут Николай (Соля) Солярский. Будущий химик-ядерщик.  Занимаюсь фотографией уже вот 7 лет на всеразличных мероприятиях и индивидуальных фотосессиях. 
          </p>
        </div>
        <div class="col-md-5">
          <p>
            В своих работах уделяю много внимания человеку и естесвенному фону.  Мои сильные стороны это обработка фотографий и красивый человеческий взгляд в кадре. 
          </p>
        </div>
      </div>
    </section>

    <section class="order-shoot-section text-white text-center d-flex align-items-center">
      <div class="container">
        <h2 class="display-4">ЗАКАЗАТЬ СЪЕМКУ</h2>
        <p>Свяжитесь со мной, чтобы обсудить детали вашей фотосессии</p>
        <button class="btn btn-outline-light btn-lg">ЗАКАЗАТЬ</button>
      </div>
    </section>

    <section class="container py-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-5 text-center text-md-start mb-4 mb-md-0">
                <h3 class="text-uppercase">Николай<br>Солярский</h3>
                <img src="@/assets/1.png" alt="Примеры фотографий" class="img-fluid w-75 mt-3">
            </div>
            <div class="col-md-5 text-center text-md-start">
                <h3 class="text-uppercase">Подарочный<br>сертификат</h3>
                <p class="my-4">Сделайте подарок вашим близким</p>
                <button class="btn btn-dark">ЗАКАЗАТЬ</button>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
// Для этой страницы дополнительная логика не требуется,
// если только не добавлять обработку кликов на кнопки "Заказать".
</script>

<style scoped>
/* Здесь выполняем требование о стилях внутри компонента */
.about-me-page {
  background-color: #f8f9fa; /* Светлый фон для контраста с темными блоками */
  color: #333; /* Основной цвет текста */
}

.portfolio-category {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.portfolio-category .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.portfolio-category:hover .overlay {
  transform: translateY(0);
}

.portfolio-category .overlay a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

.eye-divider img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.about-me-title {
  /* Пример использования inline-стиля, как требует методичка */
  /* Его можно было бы вынести в тег: style="writing-mode: vertical-rl;" */
  font-weight: bold;
  /* Для вертикального текста, если потребуется */
  /* writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); */
}

.order-shoot-section {
    background: url('@/assets/3.png') no-repeat center center;
    background-size: cover;
    min-height: 50vh;
    /* Инлайновый стиль из методички можно применить тут */
    /* Например, для фильтра: filter: grayscale(50%); */
}
.order-shoot-section .container {
    background-color: rgba(0,0,0,0.4);
    padding: 2rem;
    border-radius: 5px;
}

section:not(.order-shoot-section) h3 {
    font-weight: 300;
}
</style>
<template>
  <div>


<!-- Фрейм 1-->
   <section class="frame hero-frame text-white text-center">
    <div class="hero-text">
      <h1 class="hero-title">
        Фотограф<br />
        Николай Солярский
      </h1>
    </div>
    <div class="arrow-down">
      <img src="@/components/icons/arrow-down-svgrepo-com.svg" alt="Стрелка вниз" />
    </div>
  </section>
<!-- Фрейм 2 -->
<section class="second-frame d-flex flex-column align-items-center text-white py-5">
  <h2 class="title">НАЧИНАЮЩИЙ ФОТОГРАФ В ТОМСКЕ</h2>

  <div class="d-flex justify-content-center gap-5 mt-4 flex-wrap">
    <!-- Индивидуальная -->
    <div class="text-center">
      <img
        src="@/assets/individual.jpg"
        alt="Индивидуальная"
        class="photo"
      />
      <p class="category">ИНДИВИДУАЛЬНАЯ</p>
      <router-link
        :to="{ path: '/portfolio', query: { category: 'Индивидуальные' } }"
        class="btn btn-outline-light"
      >
        Перейти
      </router-link>
    </div>

    <!-- Семейная -->
    <div class="text-center">
      <img
        src="@/assets/family.jpg"
        alt="Семейная"
        class="photo"
      />
      <p class="category">СЕМЕЙНАЯ</p>
      <router-link
        :to="{ path: '/portfolio', query: { category: 'Семейные' } }"
        class="btn btn-outline-light"
      >
        Перейти
      </router-link>
    </div>

    <!-- Документальная -->
    <div class="text-center">
      <img
        src="@/assets/documentary.jpg"
        alt="Документальная"
        class="photo"
      />
      <p class="category">ДОКУМЕНТАЛЬНАЯ</p>
      <router-link
        :to="{ path: '/portfolio', query: { category: 'Документальные' } }"
        class="btn btn-outline-light"
      >
        Перейти
      </router-link>
    </div>
  </div>
</section>




<!-- Фрейм 3 -->
  <section class="about-section text-white d-flex flex-column align-items-center py-1">
  <div class="about-container">
    <div class="image-wrapper">
      <img src="@/assets/tnya.png" alt="about photo" class="img-fluid w-100" />
    </div>

    <div class="about-text d-flex justify-content-between mt-4">
      <div class="about-title text-start">
        <h2 class="section-label">ОБО<br>МНЕ</h2>
      </div>
      <div class="about-description d-flex flex-column flex-md-row gap-md-5">
        <p class="about-paragraph mb-3 mb-md-0">
          Меня зовут Николай (Соля) Солярский. Будущий химик-ядерщик. Занимаюсь фотографией уже вот 7 лет на всевозможных мероприятиях и индивидуальных фотосессиях.
        </p>
        <p class="about-paragraph">
          В своих работах уделяю много внимания человеку и естественному фону. Мои сильные стороны — это обработка фотографий и красивый человеческий взгляд в кадре.
        </p>
      </div>
    </div>
  </div>
</section>


<section class="gift-section">
  <div class="gift-content container py-5">
    <div class="row align-items-center">
      <div class="container text-center text-white">
        <h1 style="font-size: 48px; font-weight: 300; letter-spacing: 2px; margin-bottom: 20px;">
          ЗАКАЗАТЬ СЪЕМКУ
        </h1>
        <p style="font-size: 16px; margin-bottom: 30px;">
          Свяжитесь со мной удобным способом по кнопке ниже.<br />
          Буду рад стать вашим фотографом!
        </p>

        <router-link
          to="/contacts"
          class="btn btn-outline-light px-5 py-2"
          style="font-size: 18px;"
        >
          ЗАКАЗАТЬ
        </router-link>

      </div>
    </div>
  </div>
</section>



  <!-- Фрейм 5 -->
  <section class="d-flex justify-content-center align-items-center vh-100 bg-white">
    <div class="container">
      <div class="row align-items-center">
        <!-- Сертификат (картинка) -->
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img :src="hrenbImg" alt="Подарочный сертификат" class="img-fluid border" />
        </div>

        <!-- Текст и кнопка -->
        <div class="col-md-6 text-center text-md-start">
          <h2 class="gift-title mb-4">ПОДАРОЧНЫЙ<br />СЕРТИФИКАТ</h2>
          <p class="gift-subtitle mb-4">СДЕЛАЙТЕ ПОДАРОК<br />ВАШИМ БЛИЗКИМ</p>
          <a :href="orderLink" class="btn btn-outline-dark gift-btn px-5 py-2">
            ЗАКАЗАТЬ
          </a>
        </div>
      </div>
    </div>
  </section>



  </div>
</template>

<script setup >

const hrenbImg = new URL('@/assets/hrenb.jpg', import.meta.url).href
const orderLink = '/contacts'
</script>

<style scoped>
@font-face {
  font-family: 'Gotham Light';
  src: url('@/assets/Gotham_Light.ttf') format('ttf');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins Semibold';
  src: url('@/assets/Poppins_SemiBold.ttf') format('ttf');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Gotham Book';
  src: url('@/assets//Gotham_Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Gotham_Narrow';
  src: url('@/assets/Gotham_Narrow.ttf') format('truetype');
}

@font-face {
  font-family: 'Gotham_Narrow_Light';
  src: url('@/assets/Gotham_Narrow_Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins Semibold';
  src: url('@/assets/Poppins_SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('@/assets/Roboto_Regular.ttf') format('truetype');
}
.gift-title {
  font-family: 'Gotham Extra Light', sans-serif;
  font-size: 52px;
  line-height: 1.2;
  color: #000;
}

.gift-subtitle {
  font-family: 'Roboto Extra Light', sans-serif;
  font-size: 28px;
  line-height: 1.4;
  color: #000;
}

.gift-btn {
  font-family: 'Gotham Narrow Light', sans-serif;
  font-size: 36px;
  border-width: 2px;
}

.about-section {
  background-color: #1f3a30;
  min-height: 100vh;
}

.about-photo {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .about-title {
    font-size: 48px;
  }

  .about-text {
    font-size: 20px;
  }
}

.hero-frame {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('@/assets/bg_main.jpg');
}

.hero-title {
  font-family: 'Gotham Black', sans-serif;
  font-size: 48px;
  line-height: 1.2;
}

.arrow-down {
  position: absolute;
  bottom: 30px;
}

.arrow-down img {
  width: 32px;
  height: auto;
}

.second-frame {
  background-color: #1f3a30;
  min-height: 1080px;
}

.title {
  font-family: 'Gotham Light', sans-serif;
  font-size: 40px;
  text-align: center;
}
.about-title {
  font-family: 'Gotham Light', sans-serif;
  font-size: 80px;
  line-height: 1.1;
  white-space: pre-line;
}

.category {
  font-family: 'Gotham Light', sans-serif;
  font-size: 26px;
  margin-top: 10px;
}

.link {
  font-family: 'Poppins Semibold', sans-serif;
  font-size: 16px;
  margin-top: 4px;
}


.about-text {
  font-family: 'Gotham Book', sans-serif;
  font-size: 28px;
  line-height: 1.5;
}

.photo {
  width: 260px;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
}


.order-frame {
  height: 100vh;
  background-image: url('/icons/miniДевушка.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.order-title {
  font-family: 'Gotham Narrow', sans-serif;
  font-size: 72px;
  letter-spacing: 0.5px;
}

.order-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.order-button {
  font-family: 'Gotham Narrow Light', sans-serif;
  font-size: 36px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 0.5rem 2rem;
  transition: background-color 0.3s ease;
}



.order-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.about-section {
  background-color: #1f3a30;
  font-family: 'Gotham Light', sans-serif;
}

.about-container {
  width: 70%;
  max-width: 1000px;
}

.section-label {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 2px;
  white-space: nowrap;
}

.about-text {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.about-description {
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  line-height: 1.6;
  gap: 2rem;
}
.gift-section {
  background-color: #1f3a30;
  background-image: url('@/assets/miniДевушка.jpg'); /* путь к вашему изображению */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.gift-content {
  background-color: rgba(31, 58, 48, 0.85); /* полупрозрачный фильтр, опционально */
  border-radius: 12px;
  padding: 3rem;
  max-width: 1200px;
  width: 100%;
}
.about-paragraph {
  flex: 1;
  min-width: 250px;
}

@media (max-width: 768px) {
  .about-text {
    flex-direction: column;
  }

  .about-description {
    flex-direction: column;
  }
}
.btn-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 8px 20px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: rgb(14, 12, 12);
  font-family: 'Poppins Semibold', sans-serif;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-link:hover {
  background-color: white;
  color: black;
  text-decoration: none;
}

</style>

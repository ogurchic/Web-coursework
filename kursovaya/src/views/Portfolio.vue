<template>
  <section class="portfolio-page container-fluid text-white py-5">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-md-3 mb-4 mb-md-0">
        <div class="list-group">
          <button
            v-for="(cat, index) in categories"
            :key="index"
            class="list-group-item list-group-item-action"
            :class="{ active: activeCategory === cat }"
            @click="selectCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Gallery -->
      <div class="col-md-9">
        <div class="row">
          <div
            v-for="(photo, index) in filteredPhotos"
            :key="index"
            class="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
          >
            <img :src="photo.src" :alt="photo.alt" class="gallery-image img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const categories = ['Семейные', 'Индивидуальные', 'Документальные']
const activeCategory = ref('Семейные')

// ✅ Считываем параметр из URL при загрузке
onMounted(() => {
  const categoryFromQuery = route.query.category
  if (categories.includes(categoryFromQuery)) {
    activeCategory.value = categoryFromQuery
  }
})

// 🔁 Слежение за URL — если пользователь вручную меняет параметр
watch(() => route.query.category, (newVal) => {
  if (categories.includes(newVal)) {
    activeCategory.value = newVal
  }
})

// 🔁 При клике на категорию обновляем состояние и URL
const selectCategory = (cat) => {
  activeCategory.value = cat
  router.push({ path: '/portfolio', query: { category: cat } })
}

// 📸 Импорт фото

// Семейные
import photo1f from '@/assets/photo1f.jpg'
import photo2f from '@/assets/photo2f.jpg'
import photo3f from '@/assets/photo3f.jpg'
import photo4f from '@/assets/photo4f.jpg'
import photo5f from '@/assets/photo5f.jpg'
import photo6f from '@/assets/photo6f.jpg'

// Индивидуальные
import photo1i from '@/assets/photo1i.jpg'
import photo2i from '@/assets/photo2i.jpg'
import photo3i from '@/assets/photo3i.jpg'
import photo4i from '@/assets/photo4i.jpg'
import photo5i from '@/assets/photo5i.jpg'
import photo6i from '@/assets/photo6i.jpg'

// Документальные
import photo1d from '@/assets/photo1d.jpg'
import photo2d from '@/assets/photo2d.jpg'
import photo3d from '@/assets/photo3d.jpg'
import photo4d from '@/assets/photo4d.jpg'
import photo5d from '@/assets/photo5d.jpg'
import photo6d from '@/assets/photo6d.jpg'

const photos = [
  { src: photo1f, alt: 'Семейные', category: 'Семейные' },
  { src: photo2f, alt: 'Семейные', category: 'Семейные' },
  { src: photo3f, alt: 'Семейные', category: 'Семейные' },
  { src: photo4f, alt: 'Семейные', category: 'Семейные' },
  { src: photo5f, alt: 'Семейные', category: 'Семейные' },
  { src: photo6f, alt: 'Семейные', category: 'Семейные' },

  { src: photo1i, alt: 'Индивидуальные', category: 'Индивидуальные' },
  { src: photo2i, alt: 'Индивидуальные', category: 'Индивидуальные' },
  { src: photo3i, alt: 'Индивидуальные', category: 'Индивидуальные' },
  { src: photo4i, alt: 'Индивидуальные', category: 'Индивидуальные' },
  { src: photo5i, alt: 'Индивидуальные', category: 'Индивидуальные' },
  { src: photo6i, alt: 'Индивидуальные', category: 'Индивидуальные' },

  { src: photo1d, alt: 'Документальные', category: 'Документальные' },
  { src: photo2d, alt: 'Документальные', category: 'Документальные' },
  { src: photo3d, alt: 'Документальные', category: 'Документальные' },
  { src: photo4d, alt: 'Документальные', category: 'Документальные' },
  { src: photo5d, alt: 'Документальные', category: 'Документальные' },
  { src: photo6d, alt: 'Документальные', category: 'Документальные' },
]

const filteredPhotos = computed(() =>
  photos.filter((photo) => photo.category === activeCategory.value)
)
</script>


<style scoped>
.portfolio-page {
  background-color: #10332a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px; 
}

.row {
  flex: 1;
  display: flex;
}

/* Sidebar: фиксированная и по центру по вертикали */
.col-md-3 {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: auto;
  width: 250px;
  padding-right: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

/* Контент отодвигается правее фиксированной боковой */
.col-md-9 {
  margin-left: 250px;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

/* Картинки */
.gallery-image {
  width: 100%;
  max-width: 300px;
  height: 400px;
  object-fit: cover;
  border: 1px solid #ccc;
}

/* Кнопки */
.list-group-item {
  background-color: transparent;
  color: white;
  font-size: 1.3rem;
  font-stretch: condensed;
  border: none;
  transition: all 0.3s;
  font-family: 'Roboto Condensed', sans-serif;
}

.list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.list-group-item.active {
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  font-size: 1.5rem;
}

</style>

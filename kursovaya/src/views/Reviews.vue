<template>
  <div class="page-wrapper">
    <div class="container py-5">
      <h1 class="text-center fw-bold mb-5">ОТЗЫВЫ</h1>

      <div class="row justify-content-center mb-5">
        <div class="col-md-8">
          <div class="card bg-dark border-secondary">
            <div class="card-body">
              <h5 class="card-title mb-3">Оставить отзыв</h5>
              <form @submit.prevent="submitReview">
                <div class="mb-3">
                  <label for="nameInput" class="form-label">Ваше имя</label>
                  <input type="text" class="form-control" id="nameInput" v-model="newReview.name" required />
                </div>
                <div class="mb-3">
                  <label for="reviewText" class="form-label">Текст отзыва</label>
                  <textarea
                    class="form-control"
                    id="reviewText"
                    rows="3"
                    v-model="newReview.text"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-light">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div v-for="review in reviews" :key="review.id" class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 review-card">
            <div class="card-body text-center">
              <img src="@/assets/placeholder-avatar.png" alt="avatar" class="review-avatar mb-3" />
              <h5 class="card-title">{{ review.name }}</h5>
              <p class="card-text">«{{ review.text }}»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReviewsStore } from "@/stores/reviews";
import { storeToRefs } from "pinia";

const reviewsStore = useReviewsStore();
const { reviews, loading } = storeToRefs(reviewsStore);

const newReview = ref({
  name: "",
  text: "",
});

onMounted(() => {
  reviewsStore.fetchReviews();
});

const submitReview = () => {
  if (newReview.value.name.trim() && newReview.value.text.trim()) {
    reviewsStore.addReview(newReview.value);
    newReview.value.name = "";
    newReview.value.text = "";
  }
};
</script>


import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [],
    loading: false
  }),
    actions: {
      //читаем отзыв с json
      async fetchReviews(){
        this.loading = true;
        const response = await fetch('http://localhost:3000/reviews');
        const data = await response.json();
        this.reviews = data.sort((a, b) => a.id - b.id);
        this.loading = false;
      },

      async addReview(reviewData) {
        const newReview = {
          name: reviewData.name,
          text: reviewData.text,
          id: Date.now()
        };

        const response = await fetch('http://localhost:3000/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newReview)
        });
        this.reviews.unshift(newReview);
      }
  }
})
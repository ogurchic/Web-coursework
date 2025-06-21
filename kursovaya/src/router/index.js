import { createRouter, createWebHistory } from 'vue-router'
import ContactsPage from '../views/Contacts.vue'
import ReviewsPage from '@/views/Reviews.vue'
import HomePage from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: ReviewsPage,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsPage,
    },
    
  ],
})

export default router

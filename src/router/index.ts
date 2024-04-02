import ProfileList from '@/views/Profile/ProfileList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profileList',
      component: ProfileList
    }
  ]
})

export default router

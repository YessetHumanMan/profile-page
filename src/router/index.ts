import ProfileInfo from '@/views/ProfileInfo.vue'
import ProfileList from '@/views/ProfileList.vue'
import PasswordInfo from '@/views/PasswordInfo.vue'
import CertificateEmpty from '@/views/CertificateEmpty.vue'
import CertificateFull from '@/views/CertificateFull.vue'
import ProgressInfo from '@/views/ProgressInfo.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profileList',
      component: ProfileList
    },
    {
      path: '/profileInfo',
      name: 'profileInfo',
      component: ProfileInfo
    },
    {
      path: '/passwordInfo',
      name: 'passwordInfo',
      component: PasswordInfo
    },
    {
      path: '/certificateEmpty',
      name: 'certificateEmpty',
      component: CertificateEmpty
    },
    {
      path: '/certificateFull',
      name: 'certificateFull',
      component: CertificateFull
    },
    {
      path: '/progressInfo',
      name: 'progressInfo',
      component: ProgressInfo
    }
  ]
})

export const plByMonth = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
  { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
  { name: 'Apr', pl: 400, avg: 400, inc: 500 },
  { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
  { name: 'May', pl: 200, avg: 100, inc: 200 },
  { name: 'Jun', pl: 600, avg: 400, inc: 300 },
  { name: 'Jul', pl: 500, avg: 90, inc: 100 }
]

export default router

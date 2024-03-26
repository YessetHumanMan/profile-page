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

export default router

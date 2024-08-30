import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Carbon from '@/views/Carbon.vue'
import News from '@/views/News.vue'
import Tech from '@/views/Tech.vue'
import TechView from '@/views/tech/Tech-View.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/carbon',
      name: 'carbon',
      component: Carbon
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech,
    },
    {
      path: '/tech',
      component: TechView,
      children: [
        {
          path: 'ai-city',
          name: 'ai-city',
          component: () => import('@/views/tech/Ai.vue')
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router

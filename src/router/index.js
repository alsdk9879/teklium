import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Carbon from '@/views/Carbon.vue';
import News from '@/views/News.vue';
import NewsView from '@/views/News-View.vue';
import Tech from '@/views/Tech.vue';
import TechView from '@/views/tech/Tech-View.vue';
import Contact from '@/views/Contact.vue';
import Battery from '@/views/Battery.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/carbon',
      name: 'carbon',
      component: Carbon,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/news/:id',
      name: 'news-view',
      component: NewsView,
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
          component: () => import('@/views/tech/ai-city.vue'),
        },
        {
          path: 'chip-subscription-business',
          name: 'chip-subscription-business',
          component: () => import('@/views/tech/chip-subscription-business.vue'),
        },
        {
          path: 'content-aware-memory',
          name: 'content-aware-memory',
          component: () => import('@/views/tech/content-aware-memory.vue'),
        },
        {
          path: 'memory-mapped-cpu',
          name: 'memory-mapped-cpu',
          component: () => import('@/views/tech/memory-mapped-cpu.vue'),
        },
        {
          path: 'quantum-communication',
          name: 'quantum-communication',
          component: () => import('@/views/tech/quantum-communication.vue'),
        },
        {
          path: 'reusable-carbon-semiconductors',
          name: 'reusable-carbon-semiconductors',
          component: () => import('@/views/tech/reusable-carbon-semiconductors.vue'),
        },
        {
          path: 'the-super-internet',
          name: 'the-super-internet',
          component: () => import('@/views/tech/the-super-internet.vue'),
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/battery',
      name: 'battery',
      component: Battery,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'

// Page components
import TaskPage from '@/pages/TaskPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import AssistantPage from '@/pages/AssistantPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: TaskPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/assistant',
    name: 'Assistant',
    component: AssistantPage,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

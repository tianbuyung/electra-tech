import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreateOrderView from '../views/CreateOrderView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      component: () => import('../views/OrdersView.vue')
    },
    {
      path: '/orders',
      name: 'createOrders',
      component: CreateOrderView
    },
    {
      path: '/orders/:id',
      name: 'orderDetail',
      component: () => import('../views/orderDetailView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const isAuthenticated = authStore.userIsLoggedIn

  const noAuthPages = ['login', 'register']

  if (!noAuthPages.includes(to.name) && !isAuthenticated) {
    next({ name: 'login' })
  } else if ((to.name === 'login' || to.name === 'register') && isAuthenticated) {
    next({ name: 'orders' })
  } else {
    next()
  }
})

export default router

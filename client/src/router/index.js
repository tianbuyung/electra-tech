import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreateOrderView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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

export default router

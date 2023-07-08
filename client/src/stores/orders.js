import { defineStore } from 'pinia'
import { callApi } from '../services/callApi'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    orderDetail: {}
  }),
  getters: {},
  actions: {
    async fetchCreateOrder(payload) {
      try {
        const config = {
          method: 'POST',
          path: '/api/orders',
          isTokenNeeded: true
        }

        const result = await callApi(config, payload)

        if (result.statusCode !== 201) {
          throw result.error.message || result.error.messages
        }

        this.router.push({ name: 'orders' })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchReadOrders() {
      try {
        const config = {
          method: 'GET',
          path: '/api/orders',
          isTokenNeeded: true
        }

        const result = await callApi(config)

        if (result.statusCode !== 200) {
          throw result.error.message || result.error.messages
        }

        this.orders = result.data.orders
      } catch (error) {
        console.log(error)
      }
    },

    async fetchReadOrderDetail(orderId) {
      try {
        const config = {
          method: 'GET',
          path: `/api/orders/${orderId}`,
          isTokenNeeded: true
        }

        const result = await callApi(config)

        if (result.statusCode !== 200) {
          throw result.error.message || result.error.messages
        }

        this.orderDetail = result.data.order
      } catch (error) {
        console.log(error)
      }
    }
  }
})

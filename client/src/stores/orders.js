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
    }
  }
})

import { defineStore } from 'pinia'
import { callApi } from '../services/callApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userIsLoggedIn: false
  }),
  getters: {},
  actions: {
    changeUserIsLoggedInHandler() {
      this.userIsLoggedIn = !this.userIsLoggedIn
    },

    async fetchUserRegister(payload) {
      try {
        const config = {
          method: 'POST',
          path: '/api/register',
          isTokenNeeded: false
        }

        const result = await callApi(config, payload)

        if (result.statusCode !== 201) {
          throw result.error.message || result.error.messages
        }

        this.router.push({ name: 'login' })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchUserLogin(payload) {
      try {
        const config = {
          method: 'POST',
          path: '/api/login',
          isTokenNeeded: false
        }

        const result = await callApi(config, payload)

        if (result.statusCode !== 200) {
          throw result.error.message || result.error.messages
        }

        this.router.push({ name: 'orders' })
      } catch (error) {
        console.log(error)
      }
    }
  }
})

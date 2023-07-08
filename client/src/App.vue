<script>
import { mapActions } from 'pinia'
import { useAuthStore } from './stores/auth'

export default {
  name: 'App',
  methods: {
    ...mapActions(useAuthStore, ['changeUserIsLoggedInHandler'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.changeUserIsLoggedInHandler()
    }
  }
}
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>

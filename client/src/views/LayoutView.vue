<script>
import NavbarItem from '../components/NavbarItem.vue'

export default {
  name: 'LayoutView',
  components: { NavbarItem }
}
</script>

<template>
  <NavbarItem />
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mt-10">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>

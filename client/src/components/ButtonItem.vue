<script>
export default {
  name: 'ButtonItem',
  props: ['btnName', 'btnType', 'classStyles', 'type'],
  data() {
    return {
      primaryBtn:
        'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
      secondaryBtn: 'text-sm font-semibold leading-6 text-gray-900'
    }
  }
}
</script>

<template>
  <button
    :type="type"
    :class="
      btnType === 'primary' ? `${primaryBtn} ${classStyles}` : `${secondaryBtn} ${classStyles}`
    "
  >
    {{ btnName }}
  </button>
</template>

<style scoped></style>

<script>
import { mapActions } from 'pinia'

import { useOrdersStore } from '../stores/orders'
import ButtonItem from '../components/ButtonItem.vue'

export default {
  name: 'CreateOrderView',
  components: { ButtonItem },
  data() {
    return {
      form: {
        productName: '',
        productQuantity: 0,
        productPrice: 0
      }
    }
  },
  methods: {
    ...mapActions(useOrdersStore, ['fetchCreateOrder']),
    onSubmitHandler() {
      this.fetchCreateOrder(this.form)
    },
    onCancelHandler() {
      this.$router.push(`/`)
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmitHandler">
    <div class="border-b border-gray-900/10 pb-8">
      <h2 class="border-b border-gray-900/10 pb-6 text-base font-semibold leading-7 text-gray-900">
        Create New Order
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="productName" class="block text-sm font-medium leading-6 text-gray-900">
            Product Name
          </label>

          <div class="mt-2">
            <input
              v-model="form.productName"
              type="text"
              name="productName"
              id="productName"
              autocomplete="product-name"
              placeholder="Please enter product name"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="productQuantity" class="block text-sm font-medium leading-6 text-gray-900">
            Quantity
          </label>

          <div class="mt-2">
            <input
              v-model="form.productQuantity"
              type="number"
              name="productQuantity"
              id="productQuantity"
              autocomplete="product-quantity"
              placeholder="Please enter product quantity"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="productPrice" class="block text-sm font-medium leading-6 text-gray-900">
            Price
          </label>

          <div class="mt-2">
            <input
              v-model="form.productPrice"
              type="number"
              name="productPrice"
              id="productPrice"
              autocomplete="product-price"
              placeholder="Please enter product price"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-start gap-x-6">
      <ButtonItem
        :btnName="'Cancel'"
        :btnType="'secondary'"
        :type="'button'"
        @click="onCancelHandler"
      />
      <ButtonItem :btnName="'Save'" :btnType="'primary'" :type="'submit'" />
    </div>
  </form>
</template>

<style scoped></style>

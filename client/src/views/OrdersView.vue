<script>
import { mapActions, mapState } from 'pinia'
import { EyeIcon } from '@heroicons/vue/24/outline'

import { useOrdersStore } from '../stores/orders'
import toRupiah from '../helpers/currencyConverter'

import { RouterLink } from 'vue-router'
export default {
  name: 'OrderView',
  components: {
    EyeIcon,
    RouterLink
  },
  computed: {
    ...mapState(useOrdersStore, ['orders'])
  },
  methods: {
    ...mapActions(useOrdersStore, ['fetchReadOrders']),
    toRupiahHandler(value) {
      return toRupiah.format(value)
    }
  },
  created() {
    this.fetchReadOrders()
  }
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Orders</h1>
        <p v-if="orders.length > 0" class="mt-2 text-sm text-gray-700">
          A list of all the orders in your account.
        </p>
        <p v-if="orders.length === 0" class="mt-2 text-sm text-gray-700">
          Let's create your first order in
          <RouterLink to="/orders" class="text-indigo-600 font-semibold">here</RouterLink>.
        </p>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div v-if="orders.length > 0" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="text-center">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Order Id
                </th>

                <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900">
                  Product Name
                </th>

                <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900">
                  Product Quantity
                </th>

                <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900">
                  Product Price
                </th>

                <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900">
                  Total Price
                </th>

                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">See Detail</span>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 text-center">
              <tr v-for="order in orders" :key="order.id">
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {{ order.id }}
                </td>

                <td class="px-3 py-4 text-left text-sm w-2/5 text-gray-500">
                  <p class="line-clamp-1 hover:line-clamp-none">{{ order.productName }}</p>
                </td>

                <td class="px-3 py-4 text-sm text-gray-500">
                  {{ order.productQuantity }}
                </td>

                <td class="px-3 py-4 text-sm text-gray-500">
                  {{ toRupiahHandler(order.productPrice) }}
                </td>

                <td class="px-3 py-4 text-sm text-gray-500">
                  {{ toRupiahHandler(order.productQuantity * order.productPrice) }}
                </td>

                <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <RouterLink
                    :to="`/orders/${order.id}`"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    <EyeIcon class="block h-4 w-4" aria-hidden="true" />
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

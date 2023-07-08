<script>
import { mapActions, mapState } from 'pinia'

import { useOrdersStore } from '../stores/orders'
import toRupiah from '../helpers/currencyConverter'

export default {
  name: 'OrderDetailView',
  computed: {
    ...mapState(useOrdersStore, ['orderDetail'])
  },
  methods: {
    ...mapActions(useOrdersStore, ['fetchReadOrderDetail']),
    toRupiahHandler(value) {
      return toRupiah.format(value)
    }
  },
  created() {
    this.fetchReadOrderDetail(this.$route.params.orderId)
  }
}
</script>

<template>
  <h1 class="text-3xl font-bold">Order Detail - ID {{ $route.params.orderId }}</h1>
  <div class="mt-10 pb-10 border-b border-gray-200">
    <div class="flex flex-auto flex-col">
      <div>
        <h4 class="font-medium text-gray-900">
          {{ orderDetail.productName }}
        </h4>

        <p class="mt-2 text-sm text-gray-600">
          Total Price =
          {{ toRupiahHandler(orderDetail.productQuantity * orderDetail.productPrice) }}
        </p>
      </div>

      <div class="mt-6 flex flex-1 items-end">
        <dl class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
          <div class="flex">
            <dt class="font-medium text-gray-900">Quantity</dt>
            <dd class="ml-2 text-gray-700">{{ toRupiahHandler(orderDetail.productQuantity) }}</dd>
          </div>

          <div class="flex pl-4 sm:pl-6">
            <dt class="font-medium text-gray-900">Price</dt>
            <dd class="ml-2 text-gray-700">{{ toRupiahHandler(orderDetail.productPrice) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

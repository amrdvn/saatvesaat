<template>
    
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getCartProducts: 'getCartProducts',
    }),
  },
  methods: {
    ...mapActions({
      removeFromCart: 'removeFromCart',
      changeCountCart: 'changeCountCart',
      deleteBasket: 'deleteBasket',
    }),
    gettotal() {
      let total = 0
      this.getCartProducts().forEach((element) => {
        total += element.product.cost * element.count
      })
      return total
    },
    fnc(x) {
      return Number.parseFloat(x).toFixed(2)
    },
  },
}
</script>
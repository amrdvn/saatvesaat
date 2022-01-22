<template>
    <div class="header-minicart">
                    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<a href="/sepetim" data-target-element="#header-cart" class="skip-link skip-cart  no-count">
    <span class="icon"></span>
    <!--span class="label"></span-->
    <span class="count">0</span>
</a>

<div id="header-cart" class="block block-cart skip-content">
    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<div class="minicart-wrapper">

    <p class="block-subtitle">
    Sepet    <a class="close skip-link-close" href="#" title="Kapat">×</a>
    </p>

    <div id="minicart-error-message" class="minicart-message"></div>
    <div id="minicart-success-message" class="minicart-message"></div>

                    <p class="empty">Sepetiniz boş</p>

    </div>
 
<!-- ESI END DUMMY COMMENT [] -->
</div>

<div v-for="item in getCartProducts()"
                      :key="item.id" class="mnm-sm-guest" hidden=""><input type="hidden" id="mnm-minicart-qty" value="0"></div>

 
<!-- ESI END DUMMY COMMENT [] -->
                </div>
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
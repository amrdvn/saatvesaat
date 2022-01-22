<template>
  <div class="header-minicart">
    <!-- ESI START DUMMY COMMENT [] -->
    <!-- ESI URL DUMMY COMMENT -->

    <a
      href="/sepet"
      data-target-element="#header-cart"
      class="skip-link skip-cart has-item"
      style="animation: 2s ease 0s infinite normal none running animationsz"
    >
      <span class="icon"></span>
      <!--span class="label"></span-->
      <span class="count">1</span>
    </a>

    <div id="header-cart" class="block block-cart skip-content">
      <!-- ESI START DUMMY COMMENT [] -->
      <!-- ESI URL DUMMY COMMENT -->

      <div class="minicart-wrapper">
        <p class="block-subtitle">
          Sepet <a class="close skip-link-close" href="#" title="Kapat">×</a>
        </p>

        <div id="minicart-error-message" class="minicart-message"></div>
        <div id="minicart-success-message" class="minicart-message"></div>

        <div>
          <ul id="cart-sidebar" class="mini-products-list">
            <li v-for="item in getCartProducts()" :key="item.id" class="item">
              <a
                href="https://www.saatvesaat.com.tr/saat/bayan/guess/GUW1059L1/PD/"
                title="GUW1059L1 Bayan Kol Saati"
                class="product-image"
                ><img
                  :src="item.product.image_url"
                  width="80"
                  height="80"
                  alt="GUW1059L1 Bayan Kol Saati"
              /></a>
              <div class="product-details">
                <p class="product-name">
                  <a
                    href="https://www.saatvesaat.com.tr/saat/bayan/guess/GUW1059L1/PD/"
                    >{{ item.product.ad }}</a
                  >
                </p>

                <table class="info-wrapper">
                  <tbody>
                    <tr>
                      <th>Fiyat</th>
                      <td>
                        <span class="price">{{item.product.fiyat}}&nbsp;TL</span>
                      </td>
                    </tr>
                    <tr class="qty-wrapper">
                      <th>Adet</th>
                      <td>
                        <input
                          id="qinput-4306484"
                          data-link="https://www.saatvesaat.com.tr/checkout/cart/ajaxUpdate/id/4306484/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY2hlY2tvdXQvY2FydC8,/"
                          data-item-id="4306484"
                          data-cart-item-id="GUW1059L1"
                          class="qty cart-item-quantity input-text"
                          name=""
                          :value="item.count"
                        />

                        <button 
                          id="qbutton-4306484"
                          data-item-id="4306484"
                          disabled="disabled"
                          data-update=""
                          data-cart-item-update=""
                          class="button quantity-button"
                        >
                          ok
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <a 
                  href="https://www.saatvesaat.com.tr/checkout/cart/ajaxDelete/id/4306484/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY2hlY2tvdXQvY2FydC8,/"
                  title="Bu kaydı sil"
                  data-confirm="Bu ürünü sepetinizden silmek istediğinizden emin misiniz ?"
                  class="remove pull-right"
                @click.prevent="
                              changeCountCart({ id: item.product.code, count: 0 })
                            ">
                  Ürün sil
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div id="minicart-widgets"></div>
        <div class="block-content">
          <div class="decoration"></div>
          <p class="subtotal">
            <span class="label">Toplam</span>
            <span class="price">1.674,00&nbsp;TL</span>
          </p>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>

        <div class="minicart-actions">
          <ul class="checkout-types minicart">
            <li>
              <a
                title="Alışverişi Tamamla"
                class="button checkout-button"
                href="https://www.saatvesaat.com.tr/checkout/cart/"
              >
                Satın Al
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- ESI END DUMMY COMMENT [] -->
    </div>

    <div class="mnm-sm-guest" hidden="">
      <input type="hidden" id="mnm-minicart-qty" value="1" />
    </div>

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
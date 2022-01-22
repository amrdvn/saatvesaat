<template>
    <div class="header-minicart">
                    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<a href="/sepetim" data-target-element="#header-cart" class="skip-link skip-cart  has-item" style="animation: 2s ease 0s infinite normal none running animationsz;">
    <span class="icon"></span>
    <!--span class="label"></span-->
    <span class="count">2</span>
</a>

<div id="header-cart" class="block block-cart skip-content skip-active">

<div class="minicart-wrapper">

    <p class="block-subtitle">
    Sepet    <a class="close skip-link-close" href="#" title="Kapat">×</a>
    </p>

    <div id="minicart-error-message" class="minicart-message"></div>
    <div id="minicart-success-message" class="minicart-message" style="display: block;">Ürün sepetinizden çıkarıldı.</div>

                    <div>
            <ul id="cart-sidebar" class="mini-products-list">
                                    <li @click="addToCart({pid:prd_code, count: 1})" class="item">
            <a href="https://www.saatvesaat.com.tr/saat/unisex/diesel/DZ1819/PD/" title="DZ1819 Kol Saati" class="product-image"><img src="https://cdn.saatvesaat.com.tr/mnresize/80/80/media/catalog/product/d/z/dz1819_1.jpg" width="80" height="80" alt="DZ1819 Kol Saati"></a>
        <div class="product-details">
        <p class="product-name"><a href="https://www.saatvesaat.com.tr/saat/unisex/diesel/DZ1819/PD/">DZ1819 Kol Saati</a></p>

        <table class="info-wrapper">
            <tbody>
                <tr>
                    <th>Fiyat</th>
                    <td>
                        
                            


                                                                                                                                                                <span class="price">1.290,00&nbsp;TL</span>                                                                                            
                                            </td>
                </tr>
                <tr class="qty-wrapper">
                    <th>Adet</th>
                    <td>
                        <input id="qinput-4303694" data-link="https://www.saatvesaat.com.tr/checkout/cart/ajaxUpdate/id/4303694/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY2hlY2tvdXQvY2FydC9hamF4RGVsZXRlL2lkLzQzMDM3MDAvdWVuYy9hSFIwY0hNNkx5OTNkM2N1YzJGaGRIWmxjMkZoZEM1amIyMHVkSEl2Lw,,/" data-item-id="4303694" data-cart-item-id="DZ1819" class="qty cart-item-quantity input-text" name="" value="2">

                        <button id="qbutton-4303694" data-item-id="4303694" disabled="disabled" data-update="" data-cart-item-update="" class="button quantity-button">
                            ok                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

                                                <a href="https://www.saatvesaat.com.tr/checkout/cart/ajaxDelete/id/4303694/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY2hlY2tvdXQvY2FydC9hamF4RGVsZXRlL2lkLzQzMDM3MDAvdWVuYy9hSFIwY0hNNkx5OTNkM2N1YzJGaGRIWmxjMkZoZEM1amIyMHVkSEl2Lw,,/" title="Bu kaydı sil" data-confirm="Bu ürünü sepetinizden silmek istediğinizden emin misiniz ?" class="remove pull-right">
                    Ürün sil                </a>
                    


        
    </div>
</li>
                            </ul>
        </div>

        <div id="minicart-widgets">
                    </div>
        <div class="block-content">
            <div class="decoration"></div>
            <p class="subtotal">
                                    <span class="label">Toplam</span> <span class="price">2.064,00&nbsp;TL</span>                                                </p>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>

        <div class="minicart-actions">
                            <ul class="checkout-types minicart">
                                        <li>
                        <a title="Alışverişi Tamamla" class="button checkout-button" href="https://www.saatvesaat.com.tr/checkout/cart/">
                            Satın Al                        </a>
                    </li>
                </ul>
                                </div>

    </div>
</div>

<div class="mnm-sm-guest" hidden=""><input type="hidden" id="mnm-minicart-qty" value="3"></div>

 
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
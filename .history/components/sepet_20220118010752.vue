<template>
  <div class="header-minicart">
    <!-- ESI START DUMMY COMMENT [] -->
    <!-- ESI URL DUMMY COMMENT -->

    <a
      href="/"
      data-target-element="#header-cart"
      class="skip-link skip-cart has-item"
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
          <ul  id="cart-sidebar" class="mini-products-list" >
            <li v-for="cart in inCart" :key="cart.id" :cart="cart" class="item">
              <a
                href="https://www.saatvesaat.com.tr/saat/bayan/guess/GUW1059L1/PD/"
                title="GUW1059L1 Bayan Kol Saati"
                class="product-image"
                ><img
                  :src="cart.image"
                  width="80"
                  height="80"
                  alt="GUW1059L1 Bayan Kol Saati"
              /></a>
              <div class="product-details">
                <p class="product-name">
                  <a
                    href="https://www.saatvesaat.com.tr/saat/bayan/guess/GUW1059L1/PD/"
                    >{{cart.urunadi}}</a
                  >
                </p>

                <table class="info-wrapper">
                  <tbody>
                    <tr>
                      <th>Fiyat</th>
                      <td>
                        <span class="price">{{cart.urunFiyat}}&nbsp;TL</span>
                      </td>
                    </tr>
                    <tr class="qty-wrapper">
                      <th>Adet</th>
                      <td>
                        <input
                          id="qinput-4306484"
                          data-link="https://www.saatvesaat.com.tr/checkout/cart/ajaxUpdate/id/4306484/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIv/"
                          data-item-id="4306484"
                          data-cart-item-id="GUW1059L1"
                          class="qty cart-item-quantity input-text"
                          name=""
                          value="1"
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
                  href="https://www.saatvesaat.com.tr/checkout/cart/ajaxDelete/id/4306484/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIv/"
                  title="Bu kaydı sil"
                  data-confirm="Bu ürünü sepetinizden silmek istediğinizden emin misiniz ?"
                  class="remove pull-right"
                >
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
            <span class="price">{{}}&nbsp;TL</span>
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
import fbDb from '~/plugins/firebase.js';

export default {
  data(){
    let total=0
    return{products:[],inCart:[]}
  },
  mounted(){
    fbDb.ref('inCart').get().then((snapshot)=>{
      if(snapshot.exists()){
        this.inCart=snapshot.val()
        
      }
    });
  },
 
  
};
</script>

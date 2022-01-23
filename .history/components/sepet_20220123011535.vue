<template>
  <div class="header-minicart">
      <my v-for="product in products"
      :key="product.code"
      :product="product"></my>
    <a "
      href="/sepetim"
      data-target-element="#header-cart"
      class="skip-link skip-cart has-item"
    >
    <a v-if="sepettekiUrunSayisi===0" href="/sepetim"
      data-target-element="#header-cart"
      class="skip-link skip-cart  no-count"

    >
      <span class="icon"></span>
      <!--span class="label"></span-->
      <span class="count">{{sepettekiUrunSayisi}}</span>
    </a>

    <div id="header-cart" class="block block-cart skip-content">
      <div class="minicart-wrapper">
        <p class="block-subtitle">
          Sepet <a class="close skip-link-close" href="#" title="Kapat">×</a>
        </p>

        <div id="minicart-error-message" class="minicart-message"></div>
        <div id="minicart-success-message" class="minicart-message"></div>

        <div>
          <ul v-for="sepet in Seppet"
      :key="sepet.code"
      :sepet="sepet" id="cart-sidebar" class="mini-products-list">
            <li class="item">
              <a
                href="https://www.saatvesaat.com.tr/akilli-saat/prgc505-01-akilli-saat"
                title="PRGC505-01 Akıllı Saat"
                class="product-image"
                ><img
                  :src="sepet.image_url"
                  width="80"
                  height="80"
                  alt="PRGC505-01 Akıllı Saat"
              /></a>
              <div class="product-details">
                <p class="product-name">
                  <a
                    href="https://www.saatvesaat.com.tr/akilli-saat/prgc505-01-akilli-saat"
                    >{{sepet.ad}}</a
                  >
                </p>

                <table class="info-wrapper">
                  <tbody>
                    <tr>
                      <th>Fiyat</th>
                      <td>
                        <span class="price">{{sepet.fiyat}}&nbsp;TL</span>
                      </td>
                    </tr>
                    <tr class="qty-wrapper">
                      <th>Adet</th>
                      <td>
                        <input
                          id="qinput-4318820"
                          data-link="https://www.saatvesaat.com.tr/checkout/cart/ajaxUpdate/id/4318820/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY3VzdG9tZXIvYWNjb3VudC8,/"
                          data-item-id="4318820"
                          data-cart-item-id="PRGC505-01"
                          class="qty cart-item-quantity input-text"
                          name=""
                          :value="sepet.adet"
                        />

                        <button
                          id="qbutton-4318820"
                          data-item-id="4318820"
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

                <a @click="sepettenCikar(sepet)"
                  href=""
                  title="Bu kaydı sil"
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
            <span class="price">{{toplamFiyat}}&nbsp;TL</span>
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
    </div>

    <div hidden=""><input type="hidden" id="mnm-minicart-qty" value="1" /></div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'

import fbDb from '~/plugins/firebase.js'
import 'firebase/compat/auth'


export default{

data() {
    return { Seppet : [],user:'',products: [],editadet:''
     }
  },
mounted() {
 
  firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.user = user
    })

    
      fbDb
      .ref('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.products = snapshot.val()
          
        }
      })
      fbDb
      .ref('Sepet/8Mt43rDDxdZHhN0ufZbxM8Z1rrb2')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.Seppet = snapshot.val()
          
        }
      })
},

methods:{
  sepettenCikar(sepet){
   const spt=this.Seppet
   const productIndex=spt.findIndex(item =>item.code===sepet.code)
    spt.splice(productIndex,1);
    fbDb.ref('Sepet/'+ this.user.uid).set(spt)
  },
  urunartibir(sepet){
   const spt=this.Seppet
   const productIndex=spt.findIndex(item =>item.code===sepet.code)
    spt[productIndex].adet+=1
    
    fbDb.ref('Sepet/'+ this.user.uid).set(spt)
  },
  
},
// eslint-disable-next-line vue/order-in-components
computed:{
toplamFiyat(){
  let toplam=0;
  for(const product of this.Seppet){
    toplam+=product.fiyat*product.adet
  }
  return toplam;
},
sepettekiUrunSayisi(){
  let sepetUrunAdet=0;
  for(const product of this.Seppet){
    sepetUrunAdet+=product.adet
  }
  return sepetUrunAdet;
}
}

}
</script>

<template>
<ul class="products-grid products-grid--max-4-col first last odd">
  <li v-for="product in products" :key="product.code" :product="product"
    itemscope=""
    itemtype="http://schema.org/Product"
    class="item last amlabel-div mnm-product-id-56675"
  >
    <table 
      class="amlabel-table bottom-right label2"
      style="height: 24px; width: 55px; display: table"
    >
      <tbody>
        <tr>
          <td
            style="
              background: url()
                no-repeat 0 0;
            "
          >
            <span class="amlabel-txt"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <a 
      itemprop="url"
      data-engraving=""
      :href="product.id"
      :title="product.ad"
      class="product-image"
    > 
      <span  data-pid="56675" class="link-wishlist addToWishlist"></span>
      <img 
        class="lazy-loaded"
        id="product-collection-image-56675"
        :src="product.image_url"
        :data-src="product.image_url"
        :alt="product.ad"
      />
    </a>
    <div class="product-info" style="min-height: 99px">
      <input 
        type="hidden"
        class="mnm-product-name"
        :value="product.ad"
      />
      <span itemprop="brand" class="brand">{{product.marka}}</span>
      <span itemprop="name" class="product-name center-block"
        ><span :title="product.ad">
          {{product.ad}}</span
        >
      </span>

      <div
        itemprop="offers"
        itemscope=""
        itemtype="http://schema.org/AggregateOffer"
        class="price-box x"
      >
        <span itemprop="priceCurrency" class="no-display" style="display: none"
          >TRY</span
        >
        <span class="regular-price ln189" id="product-price-56675">
          <span class="price">{{product.fiyat}} TL&nbsp;</span>
        </span>
      </div>

      <div class="actions" style="display: block">
        <button
          type="submit"
          title="HEMEN AL"
          class="button btn-cart"
       @click="sepeteEkle"
        >
          <span><span>HEMEN AL</span></span>
        </button>
      </div>
    </div>
  </li>
</ul>
</template>
<script>
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import realDb from '~/plugins/firebase.js';
import auth from '~/plugins/firebase.js';
import fbDb from '~/plugins/firebase.js';

export const state = () => ({
  users: {},
  products: [],
  inCart: [],  // veritabanında tutulacak veritabanı modeli
  cartProducts: [  // sepetimde görünecek arayüz verileri
    {
      product: {},
      count: 0,
      cid: 0
    }
  ]
})
export const getters = {
  get_products: (state) => () => {
    return state.products
  },
  getCartProducts: (state) => () => { // cartProducts 'ı çeken fonksiyon
    return state.cartProducts
  },

  get_productwithcode: (state) => (code) => {
    return state.products.find(item => item.code === code)
  },
}
export const actions = {
  fetchproducts({ commit, dispatch }) {
    const realDBRef = ref(realDb, 'products');
    onValue(realDBRef, (snapshot) => {
      const data = snapshot.val();
      commit('setproducts', data)
    });
  },
  fetchCart({ commit, dispatch }) { // sepetime eklenen ürünlerin verilerini sepetimde görüntülenmesini sağlıyor.
    onAuthStateChanged(auth, (user) => {
      let arr = []
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        onValue(cartref, (snapshot) => {
          if (snapshot.val() != null) { // dictionary tipinde gelen bir veriyi arraya dönüştürür ve key'de dictionary key'lerinde array'in elemanlarına ekler.
            arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
          }
          commit('setInCart', arr)
        });
      }
      else {
        // commit('addToCart', payload)
      }
    });
  },
  addToCart({ commit, dispatch, state }, payload) {  // ürünü sepete ekler
    onAuthStateChanged(auth, (user) => {
      const finditem = state.inCart.find(item => item.pid === payload.pid)
      if (user) {
        if (finditem) {
          const reference = ref(realDb, "users/" * user.uid + "/inCart/" + finditem.key + "/count")
          set(reference, finditem.count + 1)
        }
        else {
          const cartref = ref(realDb, "users/" + user.uid + "/inCart") // yolu(link)
          push(cartref, payload) // payload = sepet ürünü 
        }
      }
      else {
        commit('addToCart', payload)
      }
    });
    dispatch('fetchCart')
  },
  removeFromCart({ commit, state, dispatch }, id) { // ürünü sepetten çıkarır
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        const key = state.inCart.find(inCart => inCart.id === id).key // dictionary içerisindeki bulunan bu key'e
        remove(child(cartref, key)) // sahip veriyi bulup siliyoruz
      }
      else {
        commit('removeFromCart', id)
      }
    });
    dispatch('fetchCart')
  },
  changeCountCart({ dispatch, commit, state }, idCount) { // sepetimdeki ürünün adedini günceller
    const item = state.inCart.find(item => item.pid === idCount.id)
    const nextCount = idCount.count + item.count
    const nCount = nextCount >= 1 ? nextCount : 1

    const key = item.key
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        update(child(cartref, key), { count: nCount })

      }
      else {
        commit('changeCartCount', idCount)
      }
    });
    dispatch('fetchCart')
  },
  deleteBasket({ dispatch, commit, state }) { // sepetime eklenen tüm ürünleri kaldırır
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        set(cartref, null);
      }
      else {
        commit('deleteBasket')
      }
    });
    dispatch('fetchCart')
  },
  register({ commit }, payload) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        alert("Hesap" + payload.email + "başarılı bir şekilde oluşturuldu!")
        const newUser = userCredential.user
        alert("oluşturulan kullanıcı idsi: " + newUser.uid)
        const userref = ref(realDb, "users/" + newUser.uid)
        const userData = {
          adresses: null,
          birthDay: "01-01-1998",
          couponsId: null,
          favoriteProducts: null,
          gender: 0,
          getSpecialOfferMessage: true,
          id: newUser.uid,
          inCart: null,
          messages: null,
          ordersId: null
        }
        alert("Kullanıcı verisi Realtime'a kaydedildi")
        set(userref, userData);
        location.reload();
      })
      .catch((error) => {
        alert(error.message)
      });
  },
  logout({ commit }) {
    signOut(auth)
      .then(() => {
        location.reload();
      })
  },
  login({ commit }, payload) {
    alert("login çalıştı.")
    alert(payload.email)
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(
        user => {
          alert(payload.email + " ile giriş yaptınız");
          location.reload();
        },
      ).catch((error) => {
        alert(error.message)
      });

  },
}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },
  setInCart(state, array) {
    state.inCart = array
    state.cartProducts = []
    state.inCart.forEach(element => { // inCart'ın içersindeki ürünler yardımıyla yani pid'si(ürün id'isi) ile ürünü buluyoruz
      const product = state.products.find(item => item.code === element.pid) // sonra cartProducts'ın içini dolduruyoruz
      const cartProduct = {  // bu cartProducts'ı daha sonra arayüzde kullanıyoruz 
        product,
        count: element.count,
        id: element.id
      }
      state.cartProducts.push(cartProduct)
    });
  },
  removeFromCart(state, id) {
    const item = state.inCart.find(item => item.id === id)
    const index = state.inCart.indexOf(item)
    state.inCart.splice(index, 1);
  },
  deleteBasket(state) {
    state.inCart = []
  },
  addToCart(state, product) {
    state.inCart.push(product)
  },
  changeCartCount(state, idCount) { // inCart'taki belirtiğimiz id'ye sahip ürünün sayısını günceller.
    state.inCart.find(item => item.id === idCount.id).count += idCount.count
  }
}
</script>















































<style>
.products-list .action .button, .products-grid .actions .button {
    white-space: normal;
    float: right;
    margin-right: 8px;
    font-size: 16px;
    font-weight: 500;
    min-height: 36px;
    line-height: 20px;
}
.button, .cart-table .product-cart-actions .button, #co-shipping-method-form .buttons-set .button, .footer .button {
    background: #000000;
    display: inline-block;
    padding: 7px 15px;
    border: 2px solid transparent;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: normal;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    white-space: nowrap;
}
body, button, input, select, table, textarea {
    font-family: "Roboto", Arial, sans-serif;
    color: #353535;
    font-size: 13px;
    line-height: 1.5;
}
a, button {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, input {
    line-height: normal;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
user agent stylesheet
button {
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.products-grid > li {
    position: relative;
    margin-bottom: 20px;
    text-align: left;
}
@media (min-width: 1200px)
.amlabel-div {
    width: 100%;
    display: inline-block;
    position: relative;
    text-decoration: none;
}
user agent stylesheet
li {
    text-align: -webkit-match-parent;
}
ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
ol, ul {
    list-style: none;
}
user agent stylesheet
ul {
    list-style-type: disc;
}
body {
    background: #FFFFFF;
    color: #353535;
    line-height: 1;
}
html {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.item.has-basket-price #mnm-product-personalize-cover {
    bottom: 41px;
}
.products-grid .mnm-basket-discount-wrapper {
position: absolute;
    width: 100%;
    max-width: 308px;
    font-weight: normal;
    font-size: 18px;
    top: -42px;
    left: 0;
    background-color: rgb(255, 255, 255,0.8) !important;
}

@media screen and (max-width: 400px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 140px;
    }
}

@media screen and (min-width: 401px) and (max-width: 720px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 180px;
    }
}

@media screen and (min-width: 721px) and (max-width: 794px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 220px;
    }
}

@media screen and (min-width: 795px) and (max-width: 960px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 210px;
        top: -90px;
    }
}

@media screen and (min-width: 961px) and (max-width: 1200px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 214px;
        top: -70px;
    }
    .item.has-basket-price #mnm-product-personalize-cover {
        bottom: 65px;
    }
}

@media screen and (min-width: 1201px) {
    .products-grid .mnm-basket-discount-wrapper {
        width: 308px;
        max-width: 100%;
    }
    .products-grid .product-info {
        width: 308px;
        max-width: 100%;
    }
}


.product-view .mnm-basket-discount-wrapper {
position: relative;width:270px;height:23px;font-weight: normal;font-size: 18px;margin-left: 196px;top:-43px;
}

.product-view .mnm-basket-discount-wrapper > p {
    padding: 3.5px 0!important;
}

.product-view .rapid-delivery span { font-size:15px!important; }

.label4 td {
    background-repeat:repeat!important;
}

body.cms-test .showcase-container .banner-container-left {
    padding-left: 0;
    padding-right: 10px;
}
body.customer-account .col-left, body.customer-account .col2-left-layout .col-main { 
    padding-top: 20px;
}
body.cms-test .showcase-container .banner-container-left img {
    width: 100%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}

</style>
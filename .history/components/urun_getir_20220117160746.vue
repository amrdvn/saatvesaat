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
      <span data-pid="56675" class="link-wishlist addToWishlist"></span>
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
          <span class="price">{{product.fiyat}}&nbsp;</span>
        </span>
      </div>

      <div class="actions" style="display: none">
        <button
          type="button"
          title="HEMEN AL"
          class="button btn-cart"
          onclick="setLocation('https://www.saatvesaat.com.tr/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvc2FhdC9iYXlhbg,,/product/56675/form_key/vUFvZaoIS49mIP0D/')"
        >
          <span><span>HEMEN AL</span></span>
        </button>
      </div>
    </div>
  </li>
</ul>
</template>
<script>
import fbDb from '~/plugins/firebase.js';

export default {
  data(){
    
    return{products:[]}
  },
  mounted(){
    fbDb.ref('products').get().then((snapshot)=>{
      if(snapshot.exists()){
        this.products=snapshot.val()
      }
    });
  }
 
};
</script>
<style>
.products-grid .product-image img {
    width: 100%;
    height: auto;
}
img {
    display: block;
}
html, body, img, fieldset, abbr, acronym {
    border: 0;
}
img {
    border: 0;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
@media (min-width: 1200px)
.amlabel-div .product-image {
    width: 300px;
    vertical-align: middle;
    cursor: pointer;
    display: table-cell;
    text-align: center;
}
.amlabel-div a {
    text-decoration: none;
    position: relative;
}
a {
    color: #BD1818;
    text-decoration: none;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
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
body, button, input, select, table, textarea {
    font-family: "Roboto", Arial, sans-serif;
    color: #353535;
    font-size: 13px;
    line-height: 1.5;
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
</style>
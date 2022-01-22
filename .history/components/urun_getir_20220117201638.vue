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
          <span class="price">{{product.fiyat}} TL&nbsp;</span>
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
@media only screen and (min-width: 960px)
.products-grid--max-4-col > li:nth-child(4n) {
    margin-right: 0;
}
@media only screen and (min-width: 960px)
.products-grid--max-4-col > li:nth-child(even), .products-grid--max-4-col > li:nth-child(3n) {
    margin-right: 2.22222222%;
    margin-bottom: 2.22222222%;
}
@media only screen and (min-width: 960px)
.products-grid--max-4-col > li:nth-child(3n+1) {
    clear: none;
}
@media only screen and (min-width: 480px)
.products-grid > li:nth-child(3n+1) {
    clear: left;
}
@media only screen and (min-width: 480px)
.products-grid > li:nth-child(even) {
    margin-right: 3.7037037%;
}
.products-grid > li:nth-child(even) {
    margin-right: 0;
}
.products-grid > li.item {
    border: 1px solid transparent;
    border-bottom: 1px solid #d1d1d1;
}
@media only screen and (min-width: 960px)
.products-grid--max-4-col > li {
    width: 23.33333333%;
    margin-right: 2.22222222%;
}
@media only screen and (min-width: 960px)
.products-grid--max-4-col > li {
    margin-right: 2.22222222%;
}
@media only screen and (min-width: 480px)
.products-grid > li {
    width: 30.86419753%;
    margin-right: 3.7037037%;
}
.products-grid > li {
    float: left;
    width: 47.72727273%;
    margin-right: 4.54545455%;
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
.amlabel-div {
    position: relative;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
user agent stylesheet
li {
    display: list-item;
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
  
}
html {
    font-family: sans-serif;
  
}
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.products-grid > li:after {
    content: '';
    display: table;
    clear: both;
}
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
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
    touch-action: manipulation;
}
button, html input[type="button"], input[type="reset"], input[type="submit"] {
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
user agent stylesheet
button {
    appearance: auto;
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
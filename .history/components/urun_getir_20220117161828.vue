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
<template>
 <html lang="tr" id="top" class="mnm-layout-col-1 no-js"> <!--<![endif]-->


<body class=" cms-index-index cms-home">
  
<div class="wrapper">
  
        <div class="page">
      
            <topSiyahBar/>

            <Menuler/>
                  <div v-if="$route.name !== 'Basket' class="main-container col1-layout">
                         <div  class="main">
                              <div class="col-main">
					                <div class="std">
				                		<v-main>
					            		<v-container>
					        			<Nuxt />
					            		</v-container>
					                	</v-main>

					                </div>
				                </div>
                          </div>
                     </div>
                    <div v-else>
                      </div>
		    <footerContainer/>
        
        </div>
</div>
</body>
</html>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import topSiyahBar from '~/components/topSiyahBar.vue'
import Menuler from '~/components/Menuler.vue'

import footerContainer from '~/components/footerContainer.vue'

export default {
  components: {
    topSiyahBar,
    Menuler,

    footerContainer,
  },
  data() {
    return {
      prd_code: this.$route.params.productCode,
    }
  },
  computed: {
    ...mapGetters({
      get_productwithcode: 'get_productwithcode',
    }),
  },
  methods: {
    get_product() {
      return this.get_productwithcode(this.prd_code)
    },
    ...mapActions({
      addToCart: 'addToCart',
    }),
  },
  
   
  

}
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
<template>
 <html lang="tr" id="top" class="mnm-layout-col-1 no-js"> <!--<![endif]-->


<body class=" cms-index-index cms-home">
  
<div class="wrapper">
  
        <div class="page">
      
            <topSiyahBar/>

            <Menuler/>
                  <div class="main-container col1-layout">
                         <div class="main">
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
		    <footerContainer/>
        
        </div>
</div>
</body>
</html>
</template>
<script>
import topSiyahBar from '~/components/topSiyahBar.vue'
import Menuler from '~/components/Menuler.vue'

import footerContainer from '~/components/footerContainer.vue'

export default {
  components: {
    topSiyahBar,
    Menuler,

    footerContainer,
  },
  head: {
    script: [
      {
        src: 'https://v2.zopim.com/?2lfBHWtw8du39O6Wjsf9DgU7vsdDRtjM',
      },
      {
        src: 'https://mc.yandex.ru/metrika/watch.js',
      },
      {
        src: 'https://bam.nr-data.net/1/d3b06aad88?a=32215970&v=1212.e95d35c&to=ZVJbNhNQXRZYAUBRXlwYeAEVWFwLFgFZSx5bWV0HGR5aC10HTA%3D%3D&rst=10811&ck=1&ref=https://www.saatvesaat.com.tr/&ap=1645&be=1797&fe=10684&dc=4697&af=err,xhr,stn,ins&perf=%7B%22timing%22:%7B%22of%22:1639341594726,%22n%22:0,%22f%22:45,%22dn%22:45,%22dne%22:45,%22c%22:45,%22ce%22:45,%22rq%22:968,%22rp%22:1059,%22rpe%22:1476,%22dl%22:1370,%22di%22:4691,%22ds%22:4696,%22de%22:4998,%22dc%22:10683,%22l%22:10683,%22le%22:10701%7D,%22navigation%22:%7B%7D%7D&fp=2921&fcp=2921&at=SRVYQFtKThg%3D&jsonp=NREUM.setToken',
      },
      {
        src: 'https://js-agent.newrelic.com/nr-1212.min.js',
      },
      {
        src: 'https://cdn.preciso.net/aud/clientjs/1378.js?',
      },
      {
        src: 'https://cdn.preciso.net/aud/clientjs/ptag.js?1378',
      },
      {
        src: '//cdn.scarabresearch.com/js/1693B688DB4E2EB2/scarab-v2.js',
      },
      {
        src: '//cdn.8digits.com/automation.js',
      },

      {
        src: 'https://analytics.tiktok.com/i18n/pixel/config.js?sdkid=C6NM9EHLO06KN77TBO80&hostname=www.saatvesaat.com.tr',
      },
      {
        src: 'https://maps.googleapis.com/maps-api-v3/api/js/46/11/intl/tr_ALL/common.js',
      },
      {
        src: 'https://connect.facebook.net/signals/config/2118758654805922?v=2.9.48&r=stable',
      },
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
      },
      {
        src: '//www.googleadservices.com/pagead/conversion_async.js',
      },
      {
        src: 'https://js.go2sdk.com/v2/tune.js',
      },
      {
        src: '//www.glami.com.tr/js/compiled/pt.js',
      },
      {
        src: 'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=C6NM9EHLO06KN77TBO80&lib=ttq',
      },
      {
        src: '//www.googleadservices.com/pagead/conversion_async.js',
      },
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
      },
      {
        src: 'www.googleadservices.com/pagead/conversion_async.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/media/js/b048b18f7e08e1bb8a38a63d2873435a_20190194.js?v=20190194',
      },
      {
        src: 'cdn.segmentify.com/075b343b-5380-41c5-9bf4-e4e1b3d6ea7d/segmentify.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/skin/frontend/base/default/js/simplecheckout/bootstrap-modal.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/media/js/efcf1908259f5fbda56988c18f01270e_20190194.js?v=20190194',
      },
      {
        src: 'cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js',
      },
      {
        src: './assets/styles/5118dcf0b8a086d0301cc09c8382994f_20190194.css',
      },
      {
        src: './assets/styles/bootstrap-modal.css',
      },
      {
        src: './assets/styles/cookieconsent.min.css',
      },
      {
        src: './assets/styles/d27032717bad2142040a9bc82fadae25_20190194.css',
      },
      {
        src: './assets/styles/ff7ba76d3ff7ea1c84e4f3e3c5aca4dc_20190194.css',
      },
    ],
  }

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
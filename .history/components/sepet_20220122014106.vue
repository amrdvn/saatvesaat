<template>
    <div class="header-minicart">
                    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<a href="/sepet" data-target-element="#header-cart" class="skip-link skip-cart  no-count">
    <span class="icon"></span>
    <!--span class="label"></span-->
    <span class="count">0</span>
</a>

<div id="header-cart" class="block block-cart skip-content">
    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<div class="minicart-wrapper">

    <p class="block-subtitle">
    Sepet    <a class="close skip-link-close" href="#" title="Kapat">×</a>
    </p>

    <div id="minicart-error-message" class="minicart-message"></div>
    <div id="minicart-success-message" class="minicart-message"></div>

                    <p class="empty">Sepetiniz boş</p>

    </div>
 
<!-- ESI END DUMMY COMMENT [] -->
</div>

<div class="mnm-sm-guest" hidden=""><input type="hidden" id="mnm-minicart-qty" value="0"></div>

 
<!-- ESI END DUMMY COMMENT [] -->
                </div>
</template>


<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'
 
export default {
  data() {
    return { products: [], user: '', sepet : []
     }
  },
  mounted() {
    fbDb
      .ref('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.products = snapshot.val()
          
        }
      })
      
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.user = user
    })

    
  },

  methods: {
    sepeteEkle(product) {
    
      let exists=false;
      for(const item of this.sepet)
      {
        if(item.id===product.id){
          item.adet=item.adet+1;
          exists=true;
          break;
        }
      }
      if(!exists){
        this.sepet.push({
          ...product,
          adet:1,
        })
      }
      fbDb.ref('Musteri/'+ this.user.uid).set(this.sepet)
    },
  },
}
</script>
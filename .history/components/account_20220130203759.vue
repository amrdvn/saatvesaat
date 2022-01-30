<template>
    <div  id="header-account" class="skip-content" >
          <div class="links">
            <ul>
              <li class="first">
                 <a v-if="user"
                  
                  ><strong>HOŞ GELDİNİZ.</strong></a
                >
                
               
              </li>
               <li>
                <a v-if="user"
                  href="/hesabim"
                  title="Hesabım"
                  >Hesabım</a
                >
              </li>
              <li>
                <a
                  href="/wishlist/"
                  title="Favori Listem"
                  >Favori Listem</a
                >
              </li>
              <li>
                <a
                  href="/sepetim"
                  title="Alışverişi Tamamla"
                  class="top-link-checkout"
                  >Alışverişi Tamamla</a
                >
              </li>
              
              <li>
                <a v-if="user"></a>
                <a v-else
                  href="/login"
                  title="GİRİŞ"
                  >GİRİŞ</a
                >
              </li>
              <li class="last">
                 <a v-if="user"></a>
                <a v-else
                  href="/signup"
                  title="Üye Ol"
                  >Üye Ol</a
                >
              </li>
               <li class="last">
                <a v-if="user" @click="signout"
                  href="/"
                  title="Çıkış"
                  >Çıkış</a
                >
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  components: {
    },
    data(){
        return{
           user: ''
        }
    },
    methods:{
      
     
        oturum(){
          firebase.auth().onAuthStateChanged(user=>{
        // eslint-disable-next-line no-console
        console.log(user)
        this.user=user;
      }) }, 
        signout(){
            firebase.auth().signOut().then(result=>{
                // eslint-disable-next-line no-console
                console.log(result)
                this.user=''
                this.$router.push('/')
            })
        }
    }
}
</script>
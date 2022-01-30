<template>
    <div >
        <div @click="oturum" class="skip-links">
          <div class="account-cart-wrapper">
            <div
              id="header-search"
              class="skip-content"
              style="
                position: absolute;
                display: block;
                right: 100px;
                width: 240px;
                margin-top: 6px;
                box-shadow: none;
                background: transparent;
              "
            >
              <form
                id="search_mini_form"
                action="/catalogsearch/result/"
                method="get"
              >
                <input type="hidden" name="order" value="relevance" />
                <input type="hidden" name="dir" value="DESC" />
                <div class="input-box">
                  <label for="search">Search:</label>
                  <input
                    id="search"
                    type="search"
                    name="q"
                    value=""
                    class="input-text required-entry"
                    maxlength="64"
                    placeholder="Kelime / Kod"
                    autocomplete="off"
                  />
                  <button
                    type="submit"
                    title="Ara"
                    class="button search-button"
                  >
                    <span><span>Ara</span></span>
                  </button>
                </div>

                <div
                  id="search_autocomplete"
                  class="search-autocomplete"
                  style="display: none"
                ></div>
              </form>
            </div>

            <!-- Search -->
            <a
              href="/customer/account/"
              data-target-element="#header-search"
              class="skip-link skip-search"
              style="display: none"
            >
              <span class="icon"></span>
              <!--span class="label"></span-->
            </a>

            <a 
              href="/hesabim"
              data-target-element="#header-account"
              class="skip-link skip-account"
            >
              <span class="icon"></span>
              <!--span class="label"></span-->
            </a>

            <!-- Cart -->
            <sepet/>
          </div>
        </div>

        <!-- Account -->
        <account/>
    </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import sepet from '~/components/sepet.vue'
import account from '~/components/account.vue'
export default {
  components: { sepet,account },
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
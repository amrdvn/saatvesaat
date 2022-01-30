import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'

export const state = () => ({
    user: '',
    products: [],
    Sepet: [], 
  })

  export const getters = {
    get_products: (state) => () => {
      return state.products
    },
    getCartProducts: (state) => () => { // cartProducts 'ı çeken fonksiyon
      return state.Sepet
    },
  
    get_productwithcode: (state) => (id) => {
      return state.products.find(item => item.id === id)
    },
  }

  export const actions = {
    urunleriGetir({ commit, dispatch }) {
        fbDb
      .ref('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.products = snapshot.val()
          
        }
      })
      },
    sepetiGetir({ commit, dispatch }) {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            this.user = user
             fbDb
            .ref("Sepet/"+user.uid)
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                this.Seppet = snapshot.val()
                
              }
            })
          })
    },
    sepeteEkle(products) {  // ürünü sepete ekler
        firebase.auth().onAuthStateChanged((user) => {
            let exists=false;
            for(const item of this.sepet)
            {
              if(item.id===products.id){
                item.adet=item.adet+1;
                exists=true;
                break;
              }
              
            }
               
      
            if(!exists){
              this.sepet.push({
                ...products,
                adet:1
                
              })
              fbDb.ref('Sepet/'+ this.user.uid).update(this.sepet)
            }
      });
    },
    sepettenCikar(Sepet) { // ürünü sepetten çıkarır
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const spt=this.Sepet
            const productIndex=spt.findIndex(item =>item.code===Sepet.code)
             spt.splice(productIndex,1);
             fbDb.ref('Sepet/'+ this.user.uid).set(spt)
        }
      });
    },
    changeCountCart({ dispatch, commit, state }, idCount) { // sepetimdeki ürünün adedini günceller
      const item = state.inCart.find(item => item.pid === idCount.id)
      const nextCount = idCount.count + item.count
      const nCount = nextCount >= 1 ? nextCount : 1
  
      const key = item.key
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const cartref = ref(fbDb, "users/" + user.uid + "/inCart")
          update(child(cartref, key), { count: nCount })
  
        }
        else {
          commit('changeCartCount', idCount)
        }
      });
      dispatch('sepetiGetir')
    },
    deleteBasket({ dispatch, commit, state }) { // sepetime eklenen tüm ürünleri kaldırır
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const cartref = ref(fbDb, "users/" + user.uid + "/inCart")
          set(cartref, null);
        }
        else {
          commit('deleteBasket')
        }
      });
      dispatch('sepetiGetir')
    },
    register({ commit }, payload) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          alert("Hesap" + payload.email + "başarılı bir şekilde oluşturuldu!")
          const newUser = userCredential.user
          alert("oluşturulan kullanıcı idsi: " + newUser.uid)
          const userref = ref(fbDb, "users/" + newUser.uid)
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
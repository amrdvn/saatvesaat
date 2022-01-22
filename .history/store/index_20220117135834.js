import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import { realDb, auth } from '../plugins/firebase.js';


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
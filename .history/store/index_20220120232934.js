import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import realDb from '../plugins/firebase'
import auth from '../plugins/firebase'

export const state = () => ({
  
  products: [],
})
export const getters = {
  get_products: (state) => () => {
    return state.products
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
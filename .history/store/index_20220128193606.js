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
    products: (state) => () => {
      return state.products
    },
    getCartProducts: (state) => () => { // cartProducts 'ı çeken fonksiyon
      return state.cartProducts
    },
  
    get_productwithcode: (state) => (code) => {
      return state.products.find(item => item.code === code)
    },
  }
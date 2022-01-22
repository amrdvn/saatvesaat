import createStore from 'vuex'
import cart from './store/cart'

import products from '../store/products'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

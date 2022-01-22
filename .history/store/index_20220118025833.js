import { createStore } from 'vuex'
import products from '..store/products'

import cart from '../s/cart'

export default createStore({
  
  modules: {
    products,
    cart
  }
})

import { createStore } from 'vuex'
import products from '..store//products'

import cart from './cart'

export default createStore({
  
  modules: {
    products,
    cart
  }
})

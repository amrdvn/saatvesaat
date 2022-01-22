import { createStore } from 'vuex'
import products from './products'

import cart from './card'

export default createStore({
  
  modules: {
    products,
    cart
  }
})

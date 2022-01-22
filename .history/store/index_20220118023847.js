// eslint-disable-next-line import/named
import { createStore } from 'vuex'
import products from './products'

import cart from './cart'

export default createStore({
  
  modules: {
    products,
    cart
  }
})

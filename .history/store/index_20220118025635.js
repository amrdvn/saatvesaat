import crea from 'vuex'
import products from './products'

import cart from './cart'

export default createStore({
  
  modules: {
    products,
    cart
  }
})

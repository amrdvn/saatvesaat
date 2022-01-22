import createStore from 'vuex'
import cart from '../scart'

import products from '../store/products'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

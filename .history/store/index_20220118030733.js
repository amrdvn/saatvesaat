import createStore from 'vuex'
import cart from '..cart/store/cart'

import products from './store/products'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

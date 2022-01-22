import createStore from 'vuex'
import cart from '../stcart'

import products from '../store/products'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

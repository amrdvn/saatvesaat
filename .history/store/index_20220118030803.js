import createStore from 'vuex'
import cart from '..cart'

import products from '../storeproducts'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

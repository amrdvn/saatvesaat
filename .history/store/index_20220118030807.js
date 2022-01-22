import createStore from 'vuex'
import cart from '..cart'

import products from '../store/productsproducts'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

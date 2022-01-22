import createStore from 'vuex'
import products from '..store/products'


export default createStore({
  
  modules: {
    products,
    cart
  }
})

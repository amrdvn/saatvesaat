
import { ref, onValue } from "firebase/database";
import realDb from '../plugins/firebase'

export const state = () => ({
  
  products: [],
})
export const getters = {
  get_products: (state) => () => {
    return state.products
  },
  
  
}
export const actions = {
  fetchproducts({ commit, dispatch }) {
    const realDBRef = ref(realDb, 'products');
    onValue(realDBRef, (snapshot) => {
      const data = snapshot.val();
      commit('setproducts', data)
    });
  },
  
 
  
}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },
  
}
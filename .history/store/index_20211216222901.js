export const state = () => ({
    product:[]
})

export const mutations = {
    SET_PRODUCTS(state,product){
        state.product=product
    }
}

export const actions = {
    nuxtServerInit({ commit }) {
        return this.$axios.$get('http://localhost:3001/products')
        .then(())
    }
}
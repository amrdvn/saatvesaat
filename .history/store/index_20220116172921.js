ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      // Don't do this:
      state.user = authUser
  
      // Do this:
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  }
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
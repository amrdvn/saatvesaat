ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
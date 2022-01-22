import data from '~/static/storedata.json'

export const state = () => ({
 cartUIStatus: 'idle',
 storedata: data,
 cart: []
})
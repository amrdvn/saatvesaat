import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'

export const state = () => ({
    user: '',
    products: [],
    inCart: [],  // veritabanında tutulacak veritabanı modeli
    cartProducts: [  // sepetimde görünecek arayüz verileri
      {
        product: {},
        count: 0,
        cid: 0
      }
    ]
  })
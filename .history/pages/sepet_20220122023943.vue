<template>
  
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'
 
export default {
  data() {
    return {user: '', Sepet : []
     }
  },
  mounted() {
       firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.user = user
    })
    fbDb
      .ref('Sepet').child(this.user.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.Sepet = snapshot.val()
          
        }
      })
      
   

    
  },
toplamTutar() {
      let tutar = 0
      this.Sepet().forEach((element) => {
        tutar += element.Sepet.fiyat * element.adet
      })
      return tutar
    },
}
</script>
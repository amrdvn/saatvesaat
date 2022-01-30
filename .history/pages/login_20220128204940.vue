<template>
    <div v-if="user">HATA ÜYE GİRİŞİ YAPILDI...</div>
    <login v-else/>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import login from '~/components/login.vue'
export default {
  components: { login },
  data(){
        return{
           user: ''
        }
    },
    mounted(){
      this.oturum()
     
    }, 
    methods:{
        oturum(){
          firebase.auth().onAuthStateChanged(user=>{
        // eslint-disable-next-line no-console
        console.log(user)
        this.user=user;
      }) },
        signout(){
            firebase.auth().signOut().then(result=>{
                // eslint-disable-next-line no-console
                console.log(result)
                this.user=''
                this.$router.push('/')
            })
        }
    }
}
</script>
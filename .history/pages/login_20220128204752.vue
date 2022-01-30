<template>
    <login/>
</template>
<script>
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
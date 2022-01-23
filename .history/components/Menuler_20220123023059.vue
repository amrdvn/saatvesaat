<template>
    
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data(){
        return{
           user: ''
        }
    },
    mounted(){
      firebase.auth().onAuthStateChanged(user=>{
        console.log(user)
        this.user=user;
      })
    },
    methods:{
        signout(){
            firebase.auth().signOut().then(result=>{
                console.log(result)
                this.user=''
                this.$router.push('/')
            })
        }
    }
}
</script>

<style>
.activeSubMenu:after {
              left: 60px !important;
            }
            .activeSubMenu:before {
              left: 59px !important;
            }
</style>
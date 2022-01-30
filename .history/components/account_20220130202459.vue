<te>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import sepet from '~/components/sepet.vue'

export default {
  components: {
    sepet},
    data(){
        return{
           user: ''
        }
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
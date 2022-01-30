
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'

export const state = () => ({
    user: '',
    products: [],
    Sepet: [], 
  })

  export const getters = {
    get_products: (state) => () => {
      return state.products
    },
    getCartProducts: (state) => () => { // cartProducts 'ı çeken fonksiyon
      return state.Sepet
    },
  
    get_productwithcode: (state) => (id) => {
      return state.products.find(item => item.id === id)
    },
  }
//
  export const actions = {
    urunleriGetir() {
        fbDb
      .ref('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.products = snapshot.val()
          
        }
      })
      },
    sepetiGetir() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            this.user = user
             fbDb
            .ref("Sepet/"+user.uid)
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                this.Seppet = snapshot.val()
                
              }
            })
          })
    },
    sepeteEkle(products) {  // ürünü sepete ekler
        firebase.auth().onAuthStateChanged((user) => {
            let exists=false;
            for(const item of this.sepet)
            {
              if(item.id===products.id){
                item.adet=item.adet+1;
                exists=true;
                break;
              }
              
            }
               
      
            if(!exists){
              this.sepet.push({
                ...products,
                adet:1
                
              })
              fbDb.ref('Sepet/'+ this.user.uid).update(this.Sepet)
            }
      });
    },
    sepettenCikar(Sepet) { // ürünü sepetten çıkarır
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const spt=this.Sepet
            const productIndex=spt.findIndex(item =>item.code===Sepet.code)
             spt.splice(productIndex,1);
             fbDb.ref('Sepet/'+ this.user.uid).set(spt)
        }
      });
    },
    signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user=>{
            // eslint-disable-next-line no-console
            console.log(user);
            alert("Kayıt başarılı..") 
            this.$router.push('/hesabim')
            
        }).catch(error=>{
            alert("Hata :"+error) 
            this.errors=error;
            this.$router.push('/signup')
        })
    },
    signOut() {
        firebase.auth().signOut().then(result=>{
            console.log(result)
            this.user=''
            this.$router.push('/')
        })
    },
    signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user=>{
            console.log(user);
            this.$router.push('/hesabim')
            
        }).catch(error=>{
            alert("Hata hata") 
            this.errors=error;
            this.$router.push('/login')
        })
  
    },
    toplamFiyat(){
        let toplam=0;
        for(const product of this.Seppet){
          toplam+=product.fiyat*product.adet
        }
        return toplam;
      },
      ...se
  }
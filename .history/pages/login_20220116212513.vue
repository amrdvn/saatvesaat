<template>
    <div class="main-container col1-layout">
            <div class="main">
                <div class="col-main">
                    
                                        <div class="account-login login-only">

    
        <div class="col2-set">
             <!-- üye formu kaldırılmak istendiği için -->
                                    <div class="col-1 registered-users" style="position: relative; margin: auto; float: unset; width: 30%;">
                <div class="page-title"><h1>Üye Girişi</h1></div>
                <form @submit.prevent="pressed" action="https://www.saatvesaat.com.tr/customer/account/loginPost/" method="post" id="login-form" class="scaffold-form">
                    <input name="form_key" type="hidden" value="D9Mz6DOhsVewwMCZ">
                    <div class="content fieldset">
                        <ul class="form-list">
                            <li>
                                <label for="email" class="required"><em>*</em>Email Adresiniz</label>
                                <div class="input-box">
                                    <input v-model="email" type="email"  placeholder="Email" autocapitalize="off" autocorrect="off" spellcheck="false" name="login[username]" value="" id="email" class="input-text required-entry validate-email" title="Email Adresiniz">
                                </div>
                            </li>
                            <li>
                                <label for="pass" class="required"><em>*</em>Şifre</label>
                                <div class="input-box">
                                    <input type="password" name="login[password]" class="input-text required-entry validate-password" id="pass" title="Şifre">
                                </div>
                            </li>
                                                        <li style="text-align: right">
                                <a href="https://www.saatvesaat.com.tr/customer/account/forgotpassword/" class="f-left">Şifrenizi mi unuttunuz?</a>
                            </li>
                                                    </ul>
                        <div class="remember-me-popup">
    <div class="remember-me-popup-head">
        <h3>What's this?</h3>
        <a href="#" class="remember-me-popup-close" title="Kapat">Kapat</a>
    </div>
    <div class="remember-me-popup-body">
        <p>Checking "Remember Me" will let you access your shopping cart on this computer when you are logged out</p>
        <div class="remember-me-popup-close-button a-right">
            <a href="#" class="remember-me-popup-close button" title="Kapat"><span>Kapat</span></a>
        </div>
    </div>
</div>                    </div>
                    <div class="buttons-set">
                        <button style="width: 100%" type="submit" class="button ss-button" title="ÜYE GİRİŞİ" name="send" id="send2"><span><span>ÜYE GİRİŞİ</span></span></button>
                    </div>
                    <div class="facebook-login mt20">
                        <a style="text-align: center !important; width: 100% !important;" href="https://graph.facebook.com/oauth/authorize?client_id=469693484198441&amp;redirect_uri=https%3A%2F%2Fwww.saatvesaat.com.tr%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=baf105e20f4d394bc1a5dc4ac026a614&amp;scope=email%2Cuser_birthday" rel="facebook-connect" class="button mnm-button connect-facebook inline">
                            <span><i class="ion-social-facebook"></i> Facebook ile Giriş Yap</span>
                        </a>
                    </div>
                                    </form>
            </div>
            <div class="clearfix"></div>
            <p style="text-align: center; margin: unset" class="required text-right">* Doldurulması Zorunlu Alanlar</p>
        </div>
</div>
<div class="inchoo-socialconnect-login hide">
    <div class="account-login">
        <div class="col1-set inchoo-socialconnect-login-upper">
                                    <div class="col-1 new-users inchoo-socialconnect-login-upper-facebook">
                <div class="content">
                    <h2>Facebook Hesabım</h2>
                    <p>Facebook hesabınızla giriş yapabilirsiniz.</p>
                </div>
            </div>
                                                
        </div>
        <div class="col1-set inchoo-socialconnect-login-lower">
                                    <div class="col-1 inchoo-socialconnect-login-lower-facebook">
                <div class="buttons-set">
                    <a style="display: inline-block; padding: 0 32px; background-color: #3b5998; color: #FFF;" class="mnm-fb-connect" href="https://graph.facebook.com/oauth/authorize?client_id=469693484198441&amp;redirect_uri=https%3A%2F%2Fwww.saatvesaat.com.tr%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=baf105e20f4d394bc1a5dc4ac026a614&amp;scope=email%2Cuser_birthday"><i style="font-size: 38px;padding: 0 12px;display: inline-block;vertical-align: middle;" class="ion-social-facebook"></i>Facebook ile giriş yap</a>                </div>
            </div>
                                                
        </div>
    </div>
</div>


                </div>
            </div>
        </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        pressed(){
           firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user=>{
               console.log(user);
               
           })
        }
    },
}
</script>
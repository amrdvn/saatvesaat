<template>
  <div>
    
<div class="account-login login-only">

    
        <div class="col2-set">
             <!-- üye formu kaldırılmak istendiği için -->
                                    <div class="col-1 registered-users" style="position: relative; margin: auto; float: unset; width: 30%;">
                <div class="page-title"><h1>Üye Girişi</h1></div>
                <form action="https://www.saatvesaat.com.tr/customer/account/loginPost/" method="post" id="login-form" class="scaffold-form">
                    <input name="form_key" type="hidden" value="GPvF6BHplNJ9vm0Q">
                    <div class="content fieldset">
                        <ul class="form-list">
                            <li>
                                <label for="email" class="required"><em>*</em>Email Adresiniz</label>
                                <div class="input-box">
                                    <input type="email" autocapitalize="off" autocorrect="off" spellcheck="false" name="login[username]" value="" id="email" class="input-text required-entry validate-email" title="Email Adresiniz">
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
                        <a style="text-align: center !important; width: 100% !important;" href="https://graph.facebook.com/oauth/authorize?client_id=469693484198441&amp;redirect_uri=https%3A%2F%2Fwww.saatvesaat.com.tr%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=b2eb748f38b3f9e0141d3fe2e58e2a9c&amp;scope=email%2Cuser_birthday" rel="facebook-connect" class="button mnm-button connect-facebook inline">
                            <span><i class="ion-social-facebook"></i> Facebook ile Giriş Yap</span>
                        </a>
                    </div>
                                    </form>
            </div>
            <div class="clearfix"></div>
            <p style="text-align: center; margin: unset" class="required text-right">* Doldurulması Zorunlu Alanlar</p>
        </div>
</div>
  </div>
</template>


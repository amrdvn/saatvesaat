<template>
    <div class="main-container col2-left-layout">
            <div class="main">
                
                                                <div class="col-left sidebar col-left-first"><div class="block block-account">
    <div class="block-title">
        <strong><span>Hesabım</span></strong>
    </div>
    <div class="block-content">
        <ul>
                                                                                                    <li><a href="https://www.saatvesaat.com.tr/customer/account/logout/">Çıkış</a></li>
                                                                                <li class="current"><a href="https://www.saatvesaat.com.tr/customer/account/"><strong>Hesabım</strong></a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/customer/account/edit/">Hesap Bilgisi</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/customer/address/">Adres Defteri</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/sales/order/history/">Siparişlerim</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/review/customer/">Ürün Yorumlarım</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/wishlist/">Favori Listem</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/newsletter/manage/">Haber Bülteni Üyelikleri</a></li>
                                                                                <li><a href="https://www.saatvesaat.com.tr/helpdeskultimate/customer/">Müşteri Hizmetleri</a></li>
                                                                                <li class="last"><a href="https://www.saatvesaat.com.tr/socialconnect/account/facebook/">Facebook Hesabım</a></li>
                                    </ul>
    </div>
</div>
</div>
                                <div class="col-main">
                                        <div class="my-account"><div class="dashboard">
    <div class="page-title">
        <h1>Hesabım</h1>
    </div>
                <div class="box-account box-info">
        <div class="box-head">
            <h2>Hesap Bilgisi</h2>
        </div>
                        <div class="col2-set">
    <div class="col-1">
        <div class="box">
            <div class="box-title">
                <h3>İletişim Bilgisi</h3>
                <a href="https://www.saatvesaat.com.tr/customer/account/edit/">Düzenle</a>
            </div>
            <div class="box-content">
                <p>
                    Aykut Merdivan<br>
                    aykutmerdivan@gmail.com<br>
                    <a href="https://www.saatvesaat.com.tr/customer/account/edit/changepass/1/">Şifre Değiştir</a>
                </p>
            </div>
        </div>
    </div>
        <div class="col-2">
        <div class="box">
            <div class="box-title">
                <h3>Haber Bültenleri</h3>
                <a href="https://www.saatvesaat.com.tr/newsletter/manage/">Düzenle</a>
            </div>
            <div class="box-content">
                <p>
                                            Haber Bültenimize üye oldunuz                                    </p>
            </div>
        </div>
                    </div>
    </div>
    </div>
    <div class="box-account box-info">
    <div class="box-head">
        <h2>Adres Defteri</h2>
        <a href="https://www.saatvesaat.com.tr/customer/address/">Adresleri Yönet</a>
    </div>
    <div class="col2-set">
        <div class="col-1">
            <div class="box">
                <div class="box-title">
                    <h3>Varsayılan Fatura Adresi</h3>
                    <a href="https://www.saatvesaat.com.tr/customer/address/edit/">Adresi Düzenle</a>
                </div>
                <div class="box-content">
                    <address>Varsayılan bir Fatura adresi belirlemediniz</address>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="box">
                <div class="box-title">
                    <h3>Varsayılan Teslimat Adresi</h3>
                    <a href="https://www.saatvesaat.com.tr/customer/address/edit/">Adresi Düzenle</a>
                </div>
                <div class="box-content">
                    <address>Varsayılan bir Teslimat adresi belirlemediniz</address>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>

<div class="modal fade" id="changePassword" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="changePassword" aria-hidden="true" style="display:none; top: 120px;">
    <div class="modal-dialog" style="width: 450px">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Şifre Değiştirme</h4>
            </div>
            <div class="modal-body">
                <form action="" id="mnm-order-tracking">
                    <div class="field">
                        <span> Güvenliğiniz için şifrenizi değiştirmenizi öneririz. </span>
                    </div>
                    <br>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id="changePasswordBtn">Değiştir</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
            </div>
        </div>
    </div>
</div></div>

<a v-if="user" @click="" id="mnm-anonymizer-link" target="_blank" href="/" class="button"><span>Hesabı Kapat</span></a>

                </div>
                <div class="col-left sidebar"></div>
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
           user: ''
        }
    },
    mounted(){
      firebase.auth().onAuthStateChanged(user=>{
        console.log(user)
        this.user=user;
      })
    }
}
</script>
<style>
@media (min-width: 1200px)
.main-container {
    max-width: 1366px;
}
@media (min-width: 992px)
.main-container {
    max-width: 960px;
}
@media (min-width: 768px)
.main-container {
    max-width: 720px;
}
@media (min-width: 576px)
.main-container {
    max-width: 540px;
}
.main-container {
    position: relative;
    width: 100%;
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
user agent stylesheet
div {
    display: block;
}
body, button, input, select, table, textarea {
    font-family: "Roboto", Arial, sans-serif;
    color: #353535;
    font-size: 13px;
    line-height: 1.5;
}
body {
    background: #FFFFFF;
    color: #353535;
    line-height: 1;
}
html {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.main-container:after {
    content: '';
    display: table;
    clear: both;
}

*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>


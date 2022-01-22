<template>
    <div>
        <div class="register-img" style="width: 630px; display: inline-flex; padding-top: 77px; margin-left: 60px;"><img style="width: 100%;" src="https://cdn.saatvesaat.com.tr/skin/frontend/saat/default/images/register_img.jpg"></div>
        <div class="account-create">
    <div class="page-title">
        <h1>ÜYE OLUN</h1>
    </div>
                    <form action="https://www.saatvesaat.com.tr/customer/account/createpost/" method="post" class="mnm-customer-register" id="form-validate">
        <input type="hidden" name="success_url" value="">
        <input type="hidden" name="error_url" value="">
        <input type="hidden" name="form_key" value="3dZ6w5AG4qxI1btR">
        <div class="fieldset">
            <input type="hidden" name="success_url" value="">
            <input type="hidden" name="error_url" value="">
            <ul class="form-list">
                <li class="fields">
                    <div class="customer-name">
    <div class="field name-firstname">
        <label for="firstname" class="required"><em>*</em>Adınız</label>
        <div class="input-box">
            <input type="text" id="firstname" name="firstname" value="" title="Adınız" maxlength="255" class="input-text required-entry">
        </div>
    </div>
    <div class="field name-lastname">
        <label for="lastname" class="required"><em>*</em>Soyadınız</label>
        <div class="input-box">
            <input type="text" id="lastname" name="lastname" value="" title="Soyadınız" maxlength="255" class="input-text required-entry">
        </div>
    </div>
</div>
                </li>
                <li>
                    <label for="email_address" class="required"><em>*</em>Email Adresiniz</label>
                    <div class="input-box">
                        <input type="text" name="email" id="email_address" value="" title="Email Adresiniz" class="input-text validate-email required-entry">
                    </div>
                </li>
               <!--                 <li class="control">
                    <div class="input-box">
                        <input type="checkbox" name="is_subscribed" title="" value="1" id="is_subscribed" class="checkbox" />
                    </div>
                    <label for="is_subscribed"></label>
                                    </li>
                -->

                                        <li>
                    <label for="dob">Doğum Tarihi</label>
                    <div class="input-box customer-dob-row">
        <label class="col-3 col-xs-4 col-sm-4 pl0"><select class="validate-select-day" validation="true" validation_func_ids="emptyvalid" id="validate-select-day"><option value="">Gün</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></label><label class="col-3 col-xs-4 col-sm-4"><select class="validate-select-mounth" validation="true" validation_func_ids="emptyvalid" id="validate-select-month"><option value="">Ay</option><option value="01">Ocak</option><option value="02">Şubat</option><option value="03">Mart</option><option value="04">Nisan</option><option value="05">Mayıs</option><option value="06">Haziran</option><option value="07">Temmuz</option><option value="08">Ağustos</option><option value="09">Eylül</option><option value="10">Ekim</option><option value="11">Kasım</option><option value="12">Aralık</option></select></label><label class="col-3 col-xs-4 col-sm-4 pr0"><select id="validate-select-year" class="validate-select-year" validation="true" validation_func_ids="emptyvalid"><option value="">Yıl</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option></select></label>    <span class="dob-full" style="display:none;">
        <input type="hidden" id="full" name="dob">
    </span>

    <div class="validation-advice" id="validate-select-date-advice" style="opacity:0.999999; display:none;"></div>
</div></li>
                            <li>
                    <label for="mobile_number" class="required"><em>*</em>Telefon Numaranız</label>
                    <div style="display: flex;">
                        <div class="input-box" style="width: 70%; padding-right: 5px; padding-top: unset;">
                            <input required="" type="tel" name="telephone" id="mobile_number" value="" title="Telefon" placeholder="555 ___ __ __" class="input-text required-entry" maxlength="13">
                        </div>
                        <button style="height: 30px; width: 30%; padding: unset;" id="otp_code_send" type="button" title="Kod Gönder" class="button"><span><span>Kod Gönder</span></span></button>
                    </div>
                </li>
                <li style="display: none;" id="otp_code_label">
                    <label for="otp_code">Doğrulama Kodu</label>
                    <div style="display: flex;">
                        <div class="input-box" style="width: 70%; padding-right: 5px; padding-top: unset;">
                            <input type="text" name="otp_code" id="otp_code" value="" title="Doğrulama Kodu" class="input-text">
                        </div>
                        <button style="height: 30px; width: 30%; padding: unset;" id="otp_code_verify" type="button" title="Doğrula" class="button"><span><span>Doğrula</span></span></button>
                    </div>
                </li>
                                                                <li><label for="gender">Cinsiyet</label>
<div class="input-box">
    <select id="gender" name="gender" title="Cinsiyet">
                                    <option value="" selected="selected"></option>
                    <option value="1">Erkek</option>
                    <option value="2">Kadın</option>
            </select>
</div>
</li>
                        </ul>
        </div>
            <div class="fieldset">
            <!--<h2 class="legend">Giriş Bilgisi</h2>-->
            <ul class="form-list">
                <li class="fields">
                    <div class="field">
                        <label for="password" class="required"><em>*</em>Şifre</label>
                        <div class="input-box">
                            <input type="password" name="password" id="password" title="Şifre" class="input-text required-entry validate-password">
                        </div>
                    </div>
                    <div class="field">
                        <label for="confirmation" class="required"><em>*</em>Şifre (Tekrar)</label>
                        <div class="input-box">
                            <input type="password" name="confirmation" title="Şifre (Tekrar)" id="confirmation" class="input-text required-entry validate-cpassword">
                        </div>
                    </div>
                </li>
                				<li class="control pr_agreement">
						<div class="input-box">
							<input type="checkbox" name="privacy_agreement" value="1" id="is_agreement" class="checkbox">
						</div>
                    <label for="is_agreement"><a href="#" data-toggle="modal" id="myModalBtn" data-target="#myModal" class="u-soz">Üyelik koşullarını </a>ve <a href="#" data-toggle="modal" data-target="#myModal2" id="myModal2Btn" class="u-soz">Kişisel verilerin korunması </a>  hakkında bilgilendirmeyi okudum ve kabul ediyorum.</label>
				</li>
									<li class="control">
						<div class="input-box">
							<input type="checkbox" name="is_subscribed" title="Haber Bülteni ve Kampanya E-Maillerinizi Almak İstiyorum" value="1" id="is_subscribed" class="checkbox">
						</div>
						<label for="is_subscribed">Bilgilendirme ve tanıtım e-postası almak istiyorum. <a href="#" data-toggle="modal" id="commercialMessageConfirmationBtn" data-target="#commercialMessageConfirmation" class="u-soz"></a></label>
											</li>
				                <li class="control">
                    <p for="aydinlatmaMetni" style="margin-top: 20px;margin-bottom: 20px">Kişisel verileriniz, <a href="#" id="aydinlatmaMetniBtn" class="u-soz">Aydınlatma Metni</a> kapsamında işlenmektedir.</p>
                </li>
                            </ul>
        </div>

        <button type="button" title="KAYIT OL" class="mnm-btn-register button"><span><span>KAYIT OL</span></span></button>

        <!--div class="featured-sep" style="margin: 25px 0 15px 0; text-align: center;"><span style="background-color: #f6f6f6; padding: 0 24px;">veya</span></div -->

            </form>
    <script type="text/javascript">
            </script>
</div>
    </div>
</template>
<style>

    .page {
        background-color: #f5f5f5;
    }
    .main-container {
        padding-top: 0;
    }
    .main {
        background-image: url(/skin/frontend/saat/saat/images/ss-account-create.jpg);
        background-position: top left;
        background-size: auto 100%;
        background-repeat: no-repeat;
    }
    .customer-account-create .account-create {
        width: 630px;
        float: right;
        padding: 45px 10% 0;
        background-color: #f5f5f5;
    }

    .featured-sep:after {
        content: ' ';
        display: block;
        border-bottom: 1px solid #d6d6d6;
        margin-top: -10px;
    }
    .mnm-btn-register {
        background-color: #bd1818;
        padding: 18px 36px;
        color: #FFF;
        font-size: 24px;
        margin: 0 auto;
        display: block;
    }

</style>
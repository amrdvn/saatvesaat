<template>
  <div class="main-container col1-layout">
    <div class="main">
      <div class="col-main">
        <div></div>

        <div class="cart display-single-price">
          <div class="page-title title-buttons">
            <h1>Alışveriş Sepeti</h1>
            <ul class="checkout-types top">
              <li>
                <button
                  type="button"
                  title="ALIŞVERİŞİ TAMAMLA"
                  class="button btn-proceed-checkout btn-checkout"
                  onclick="window.location='https://www.saatvesaat.com.tr/checkout/onepage/';"
                >
                  <span><span>ALIŞVERİŞİ TAMAMLA</span></span>
                </button>
              </li>
            </ul>
          </div>
          <form
            action="https://www.saatvesaat.com.tr/checkout/cart/updatePost/"
            method="post"
          >
            <input name="form_key" type="hidden" value="mcfk20DjntxOZL8N" />
            <table id="shopping-cart-table" class="cart-table data-table">
              <colgroup>
                <col width="1" />
                <col width="1" />
                <col width="1" />
                <col width="1" />
                <col width="1" />
                <col width="1" />
              </colgroup>
              <thead>
                <tr>
                  <th rowspan="1"><span class="nobr">Ürün</span></th>

                  <th rowspan="1">&nbsp;</th>

                  <th rowspan="1" class="a-center">Adet</th>

                  <th class="a-center cart-total-head" colspan="1">
                    <!--                            <div class="cart-total-placeholder">-->
                    Fiyat<!--                            </div>-->
                  </th>

                  <th class="a-center" rowspan="1">Sil</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colspan="50" class="text=left cart-footer-actions">
                    <div class="col-xs-6 pl0">
                      <!-- Make this button the first responder rather than empty cart -->
                      <button
                        type="submit"
                        style="visibility: hidden; width: 1px"
                        data-cart-item-update=""
                        name="update_cart_action"
                        value="update_qty"
                        title="Sepeti Güncelle"
                        class="button2 btn-update"
                      >
                        <span><span>Sepeti Güncelle</span></span>
                      </button>

                      <button
                        type="button"
                        title="Alışverişe Devam"
                        class="button2 btn-continue"
                        onclick="setLocation('https://www.saatvesaat.com.tr/')"
                      >
                        <span><span>Alışverişe Devam</span></span>
                      </button>

                      <span class="or">-veya-</span>

                      <button
                        type="submit"
                        name="update_cart_action"
                        data-cart-item-update=""
                        value="update_qty"
                        title="Sepeti Güncelle"
                        class="button2 btn-update"
                      >
                        <span><span>Sepeti Güncelle</span></span>
                      </button>
                    </div>
                    <div class="col-xs-6 pr0 text-right">
                      <button
                        type="submit"
                        style="visibility: hidden; width: 1px"
                        data-cart-item-update=""
                        name="update_cart_action"
                        value="update_qty"
                        title="Sepeti Güncelle"
                        class="button2 btn-update"
                      >
                        <span><span>Sepeti Güncelle</span></span>
                      </button>
                      <button
                        type="submit"
                        name="update_cart_action"
                        data-cart-empty=""
                        value="empty_cart"
                        title="Sepeti Boşalt"
                        class="button2 btn-empty"
                        id="empty_cart_button"
                      >
                        <span><span>Sepeti Boşalt</span></span>
                      </button>
                    </div>

                    <!--[if lt IE 8]>
                      <input
                        type="hidden"
                        id="update_cart_action_container"
                        data-cart-item-update
                      />
                      <script type="text/javascript">
                        //<![CDATA[
                        Event.observe(window, 'load', function () {
                          // Internet Explorer (lt 8) does not support value attribute in button elements
                          $emptyCartButton = $('empty_cart_button')
                          $cartActionContainer = $(
                            'update_cart_action_container'
                          )
                          if ($emptyCartButton && $cartActionContainer) {
                            Event.observe(
                              $emptyCartButton,
                              'click',
                              function () {
                                $emptyCartButton.setAttribute(
                                  'name',
                                  'update_cart_action_temp'
                                )
                                $cartActionContainer.setAttribute(
                                  'name',
                                  'update_cart_action'
                                )
                                $cartActionContainer.setValue('empty_cart')
                              }
                            )
                          }
                        })
                        //]]>
                      </script>
                    <![endif]-->
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td class="product-cart-image">
                    <a
                      href="https://www.saatvesaat.com.tr/akilli-saat/prgc505-01-akilli-saat"
                      title="PRGC505-01 Akıllı Saat"
                      class="product-image"
                    >
                      <img
                        src="https://cdn.saatvesaat.com.tr/mnresize/180/180/media/catalog/product/p/r/prgc505-01_1.jpg"
                        alt="PRGC505-01 Akıllı Saat"
                      />
                    </a>

                    <ul class="cart-links">
                      <li>
                        <a
                          href="https://www.saatvesaat.com.tr/checkout/cart/configure/id/4316434/"
                          title="Edit item parameters"
                          >Düzenle</a
                        >
                      </li>
                    </ul>
                  </td>

                  <td class="product-cart-info">
                    <a
                      href="https://www.saatvesaat.com.tr/checkout/cart/delete/id/4316434/form_key/mcfk20DjntxOZL8N/uenc/aHR0cHM6Ly93d3cuc2FhdHZlc2FhdC5jb20udHIvY2hlY2tvdXQvY2FydC8,/"
                      title="Ürün sil"
                      class="btn-remove btn-remove2"
                      >Ürün sil</a
                    >

                    <h2 class="product-name">
                      <a
                        href="https://www.saatvesaat.com.tr/akilli-saat/prgc505-01-akilli-saat"
                        >PRGC505-01 Akıllı Saat</a
                      >
                    </h2>

                    <div class="product-cart-sku">
                      <span class="label">Ürün Kodu:</span> PRGC505-01
                    </div>
                  </td>

                  <td class="product-cart-actions" data-saat-label="Adet">
                    <input
                      type="text"
                      pattern="\d*"
                      name="cart[4316434][qty]"
                      value="1"
                      size="4"
                      data-cart-item-id="PRGC505-01"
                      title="Adet"
                      class="input-text qty"
                      maxlength="12"
                    />

                    <button
                      type="submit"
                      name="update_cart_action"
                      data-cart-item-update=""
                      value="update_qty"
                      title="Güncelle"
                      class="button btn-update"
                    >
                      <span><span>Güncelle</span></span>
                    </button>

                    <ul class="cart-links">
                      <li>
                        <a
                          href="https://www.saatvesaat.com.tr/checkout/cart/configure/id/4316434/"
                          title="Edit item parameters"
                          >Düzenle</a
                        >
                      </li>
                    </ul>
                  </td>

                  <!--Sub total starts here -->
                  <td class="product-cart-total" data-saat-label="Ara Toplam">
                    <span class="cart-price">
                      <span class="price">270,00&nbsp;TL</span>
                    </span>
                  </td>
                  <td class="a-center product-cart-remove">
                    <a
                      href="https://www.saatvesaat.com.tr/checkout/cart/delete/id/4316434/"
                      title="Ürün sil"
                      class="btn-remove btn-remove-inline"
                      ><i class="ion-android-cancel"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <div class="cart-forms"></div>
          <div class="cart-totals-wrapper">
            <div class="cart-totals">
              <table id="shopping-cart-totals-table">
                <colgroup>
                  <col />
                  <col width="1" />
                </colgroup>
                <tfoot>
                  <tr class="mnm-grand-total">
                    <td style="" class="text-left" colspan="1">
                      <strong>Genel Toplam</strong>
                    </td>
                    <td style="" class="a-right">
                      <strong><span class="price">270,00&nbsp;TL</span></strong>
                    </td>
                  </tr>
                </tfoot>
                <tbody>
                  <tr class="mnm-sub-total">
                    <td style="" class="text-left" colspan="1">Ara Toplam</td>
                    <td style="" class="a-right">
                      <span class="price">270,00&nbsp;TL</span>
                    </td>
                  </tr>
                  <tr class="mnm-tax-shipping">
                    <td style="" class="text-left" colspan="1">
                      Kargo (MNG Kargo)
                    </td>
                    <td style="" class="a-right">
                      <span class="price">0,00&nbsp;TL</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul class="checkout-types bottom">
                <li class="method-checkout-cart-methods-onepage-bottom">
                  <button
                    type="button"
                    title="ALIŞVERİŞİ TAMAMLA"
                    class="button btn-proceed-checkout btn-checkout"
                    onclick="window.location='https://www.saatvesaat.com.tr/checkout/onepage/';"
                  >
                    <span><span>ALIŞVERİŞİ TAMAMLA</span></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mnm-discount-block mt15">
          <form
            id="discount-coupon-form"
            action="https://www.saatvesaat.com.tr/checkout/cart/couponPost/"
            method="post"
          >
            <div class="discount">
              <h2>Kupon Kodu</h2>
              <div class="discount-form">
                <label for="coupon_code">Kupon Kodu</label>
                <input
                  type="hidden"
                  name="remove"
                  id="remove-coupone"
                  value="0"
                />
                <div class="field-wrapper">
                  <input
                    class="input-text"
                    type="text"
                    id="coupon_code"
                    name="coupon_code"
                    value=""
                  />
                  <div class="button-wrapper">
                    <button
                      type="button"
                      title="Uygula"
                      class="button2"
                      onclick="discountForm.submit(false)"
                      value="Uygula"
                    >
                      <span><span>Uygula</span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript">
          var RvstData = {}
          RvstData.count = 1
          RvstData.email = ''
          RvstData.oAmt = ''
          RvstData.oID = ''
          RvstData.product = [
            {
              pId: '75400',
              pQty: 1,
              pPrice: 270.0,
              pName: 'PRGC505-01 Ak\u0131ll\u0131 Saat',
              pLink:
                'https:\/\/www.saatvesaat.com.tr\/akilli-saat\/prgc505-01-akilli-saat',
              pImage:
                'https:\/\/cdn.saatvesaat.com.tr\/media\/catalog\/product\/p\/r\/prgc505-01_1.jpg',
            },
          ]
          RvstData.status = 'cart'
        </script>
        <script>
          dataLayer.push({
            event: 'checkout_cart',
            page: {
              site_type: GtmMobileDetect.site_type,
              page_type: 'cart',
              url: 'https://www.saatvesaat.com.tr/checkout/cart/',
              breadcrumb: {
                path: 'Anasayfa > Alışveriş Sepeti',
                last_crumb: 'Alışveriş Sepeti',
              },
            },
            checkout_cart: [],
          })
        </script>

        <script>
          jQuery(document).ready(function () {
            //jQuery('').on('click',function() {
            dataLayer.push({
              event: 'checkout',
              noninteraction: true,
              ecommerce: {
                checkout: {
                  actionField: { step: 1 },
                  products: [
                    {
                      id: 'PRGC505-01',
                      name: 'PRGC505-01 Ak\u0131ll\u0131 Saat',
                    },
                  ],
                },
              },
              eventCallback: function () {},
            })
            //})
          })
        </script>
      </div>
    </div>
    <div class="seg-reco-wrapper seg-clear"><!-- test --></div>
  </div>
</template>

<script>
import fbDb from '~/plugins/firebase.js'
import 'firebase/compat/auth'


export default{

data() {
    return { sepet : []
     }
  },
mounted() {
    fbDb
      .ref('Sepet').child(this.user.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.products = snapshot.val()
          
        }
      })
},

}
</script>
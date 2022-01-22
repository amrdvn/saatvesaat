<template>
    <div class="header-minicart">
                    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<a href="/sepetim" data-target-element="#header-cart" class="skip-link skip-cart  no-count">
    <span class="icon"></span>
    <!--span class="label"></span-->
    <span class="count">0</span>
</a>

<div id="header-cart" class="block block-cart skip-content">
    <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 

<div class="minicart-wrapper">

    <p class="block-subtitle">
    Sepet    <a class="close skip-link-close" href="#" title="Kapat">×</a>
    </p>

    <div id="minicart-error-message" class="minicart-message"></div>
    <div id="minicart-success-message" class="minicart-message"></div>

                    <p class="empty">Sepetiniz boş</p>

    </div>
 
<!-- ESI END DUMMY COMMENT [] -->
</div>

<div class="mnm-sm-guest" hidden=""><input type="hidden" id="mnm-minicart-qty" value="0"></div>
<script type="text/javascript">
    var customerWishlist = [];
</script>

<script type="text/javascript">
    var customerProductAlert = [];
</script>

<script type="text/javascript">
    jQuery(document).ready(function (){
        if(MnmSaatSaat.customer.isLoggedIn() && isCustomerProductAlertActive()) {
            customerProductAlert.each(function(v, k) {
                $j('.btn-mnm-product-alert[data-pid="'+v.product_id+'"]').removeClass("hidden");
                $j('.btn-mnm-product-alert[data-pid="'+v.product_id+'"]').attr("data-alert-stock-id", v.alert_stock_id);
                $j('.btn-mnm-product-alert[data-pid="'+v.product_id+'"]:eq(1)').remove();
            });
        }

        function isCustomerProductAlertActive () {
            return (typeof customerProductAlert == "object" || typeof customerProductAlert == "array");
        }
    });
</script>
 
<!-- ESI END DUMMY COMMENT [] -->
                </div>
</template>

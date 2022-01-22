
        jQuery(document).on('mnm:ajax_remove_quote_item', function () {
            jQuery.ajax({
                type: "POST",
                url: "/gtm/ajax/removeQuoteItem/",
                cache: false,
                beforeSend: function (xhr) {
                }
            }).done(function (result) {
                dataLayer.push({
                    "event"					     : "remove_from_cart",
                    "products_removed_from_cart" : result
                });
            });
        });
    
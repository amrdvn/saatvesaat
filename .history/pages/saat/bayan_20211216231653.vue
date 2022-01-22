<template>
  <div>
    <style media="print" class="jx_ui_StyleSheet" __jx__id="___$_2" type="text/css">.zopim { display: none !important }</style>
<urun/>
  </div>
</template>
<script>
import urun from '~/components/urun.vue'
export default {
  components: {
    urun,
  },
}
</script>
<style>

@charset "UTF-8";body.fancybox-active{overflow:hidden}body.fancybox-iosfix{position:fixed;left:0;right:0}.fancybox-is-hidden{position:absolute;top:-9999px;left:-9999px;visibility:hidden}.fancybox-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99992;-webkit-tap-highlight-color:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-stage{position:absolute;top:0;right:0;bottom:0;left:0}.fancybox-outer{overflow-y:auto;-webkit-overflow-scrolling:touch}.fancybox-bg{background:#1e1e1e;opacity:0;transition-duration:inherit;transition-property:opacity;transition-timing-function:cubic-bezier(.47,0,.74,.71)}.fancybox-is-open .fancybox-bg{opacity:.87;transition-timing-function:cubic-bezier(.22,.61,.36,1)}.fancybox-caption-wrap,.fancybox-infobar,.fancybox-toolbar{position:absolute;direction:ltr;z-index:99997;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s;box-sizing:border-box}.fancybox-show-caption .fancybox-caption-wrap,.fancybox-show-infobar .fancybox-infobar,.fancybox-show-toolbar .fancybox-toolbar{opacity:1;visibility:visible;transition:opacity .25s,visibility 0s}.fancybox-infobar{top:0;left:0;font-size:13px;padding:0 10px;height:44px;min-width:44px;line-height:44px;color:#ccc;text-align:center;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:subpixel-antialiased;mix-blend-mode:exclusion}.fancybox-toolbar{top:0;right:0;margin:0;padding:0}.fancybox-stage{overflow:hidden;direction:ltr;z-index:99994;-webkit-transform:translateZ(0)}.fancybox-is-closing .fancybox-stage{overflow:visible}.fancybox-slide{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;overflow:auto;outline:none;white-space:normal;box-sizing:border-box;text-align:center;z-index:99994;-webkit-overflow-scrolling:touch;display:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fancybox-slide:before{content:"";display:inline-block;vertical-align:middle;height:100%;width:0}.fancybox-is-sliding .fancybox-slide,.fancybox-slide--current,.fancybox-slide--next,.fancybox-slide--previous{display:block}.fancybox-slide--image{overflow:visible}.fancybox-slide--image:before{display:none}.fancybox-slide--video .fancybox-content,.fancybox-slide--video iframe{background:#000}.fancybox-slide--map .fancybox-content,.fancybox-slide--map iframe{background:#e5e3df}.fancybox-slide--next{z-index:99995}.fancybox-slide>*{display:inline-block;position:relative;padding:24px;margin:44px 0;border-width:0;vertical-align:middle;text-align:left;background-color:#fff;overflow:auto;box-sizing:border-box}.fancybox-slide>base,.fancybox-slide>link,.fancybox-slide>meta,.fancybox-slide>script,.fancybox-slide>style,.fancybox-slide>title{display:none}.fancybox-slide .fancybox-image-wrap{position:absolute;top:0;left:0;margin:0;padding:0;border:0;z-index:99995;background:transparent;cursor:default;overflow:visible;-webkit-transform-origin:top left;transform-origin:top left;background-size:100% 100%;background-repeat:no-repeat;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fancybox-can-zoomOut .fancybox-image-wrap{cursor:zoom-out}.fancybox-can-zoomIn .fancybox-image-wrap{cursor:zoom-in}.fancybox-can-drag .fancybox-image-wrap{cursor:-webkit-grab;cursor:grab}.fancybox-is-dragging .fancybox-image-wrap{cursor:-webkit-grabbing;cursor:grabbing}.fancybox-image,.fancybox-spaceball{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;max-width:none;max-height:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fancybox-spaceball{z-index:1}.fancybox-slide--iframe .fancybox-content{padding:0;width:80%;height:80%;max-width:calc(100% - 100px);max-height:calc(100% - 88px);overflow:visible;background:#fff}.fancybox-iframe{display:block;padding:0;border:0;height:100%}.fancybox-error,.fancybox-iframe{margin:0;width:100%;background:#fff}.fancybox-error{padding:40px;max-width:380px;cursor:default}.fancybox-error p{margin:0;padding:0;color:#444;font-size:16px;line-height:20px}.fancybox-button{box-sizing:border-box;display:inline-block;vertical-align:top;width:44px;height:44px;margin:0;padding:10px;border:0;border-radius:0;background:rgba(30,30,30,.6);transition:color .3s ease;cursor:pointer;outline:none}.fancybox-button,.fancybox-button:link,.fancybox-button:visited{color:#ccc}.fancybox-button:focus,.fancybox-button:hover{color:#fff}.fancybox-button[disabled]{color:#ccc;cursor:default;opacity:.6}.fancybox-button svg{display:block;position:relative;overflow:visible;shape-rendering:geometricPrecision}.fancybox-button svg path{fill:currentColor;stroke:currentColor;stroke-linejoin:round;stroke-width:3}.fancybox-button--share svg path{stroke-width:1}.fancybox-button--pause svg path:nth-child(1),.fancybox-button--play svg path:nth-child(2){display:none}.fancybox-button--zoom svg path{fill:transparent}.fancybox-navigation{display:none}.fancybox-show-nav .fancybox-navigation{display:block}.fancybox-navigation button{position:absolute;top:50%;margin:-50px 0 0;z-index:99997;background:transparent;width:60px;height:100px;padding:17px}.fancybox-navigation button:before{content:"";position:absolute;top:30px;right:10px;width:40px;height:40px;background:rgba(30,30,30,.6)}.fancybox-navigation .fancybox-button--arrow_left{left:0}.fancybox-navigation .fancybox-button--arrow_right{right:0}.fancybox-close-small{position:absolute;top:0;right:0;width:40px;height:40px;padding:0;margin:0;border:0;border-radius:0;background:transparent;z-index:10;cursor:pointer}.fancybox-close-small:after{content:"×";position:absolute;top:5px;right:5px;width:30px;height:30px;font:22px/30px Arial,Helvetica Neue,Helvetica,sans-serif;color:#888;font-weight:300;text-align:center;border-radius:50%;border-width:0;background-color:transparent;transition:background-color .25s;box-sizing:border-box;z-index:2}.fancybox-close-small:focus{outline:none}.fancybox-close-small:focus:after{outline:1px dotted #888}.fancybox-close-small:hover:after{color:#555;background:#eee}.fancybox-slide--iframe .fancybox-close-small,.fancybox-slide--image .fancybox-close-small{top:0;right:-40px}.fancybox-slide--iframe .fancybox-close-small:after,.fancybox-slide--image .fancybox-close-small:after{font-size:35px;color:#aaa}.fancybox-slide--iframe .fancybox-close-small:hover:after,.fancybox-slide--image .fancybox-close-small:hover:after{color:#fff;background:transparent}.fancybox-is-scaling .fancybox-close-small,.fancybox-is-zoomable.fancybox-can-drag .fancybox-close-small{display:none}.fancybox-caption-wrap{bottom:0;left:0;right:0;padding:60px 2vw 0;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 40%,rgba(0,0,0,.6) 80%,rgba(0,0,0,.8));pointer-events:none}.fancybox-caption{padding:30px 0;border-top:1px solid hsla(0,0%,100%,.4);font-size:14px;color:#fff;line-height:20px;-webkit-text-size-adjust:none}.fancybox-caption a,.fancybox-caption button,.fancybox-caption select{pointer-events:all;position:relative}.fancybox-caption a{color:#fff;text-decoration:underline}.fancybox-slide>.fancybox-loading{border:6px solid hsla(0,0%,39%,.4);border-top:6px solid hsla(0,0%,100%,.6);border-radius:100%;height:50px;width:50px;-webkit-animation:a .8s infinite linear;animation:a .8s infinite linear;background:transparent;position:absolute;top:50%;left:50%;margin-top:-30px;margin-left:-30px;z-index:99999}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fancybox-animated{transition-timing-function:cubic-bezier(0,0,.25,1)}.fancybox-fx-slide.fancybox-slide--previous{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.fancybox-fx-slide.fancybox-slide--next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.fancybox-fx-slide.fancybox-slide--current{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.fancybox-fx-fade.fancybox-slide--next,.fancybox-fx-fade.fancybox-slide--previous{opacity:0;transition-timing-function:cubic-bezier(.19,1,.22,1)}.fancybox-fx-fade.fancybox-slide--current{opacity:1}.fancybox-fx-zoom-in-out.fancybox-slide--previous{-webkit-transform:scale3d(1.5,1.5,1.5);transform:scale3d(1.5,1.5,1.5);opacity:0}.fancybox-fx-zoom-in-out.fancybox-slide--next{-webkit-transform:scale3d(.5,.5,.5);transform:scale3d(.5,.5,.5);opacity:0}.fancybox-fx-zoom-in-out.fancybox-slide--current{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}.fancybox-fx-rotate.fancybox-slide--previous{-webkit-transform:rotate(-1turn);transform:rotate(-1turn);opacity:0}.fancybox-fx-rotate.fancybox-slide--next{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:0}.fancybox-fx-rotate.fancybox-slide--current{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}.fancybox-fx-circular.fancybox-slide--previous{-webkit-transform:scale3d(0,0,0) translate3d(-100%,0,0);transform:scale3d(0,0,0) translate3d(-100%,0,0);opacity:0}.fancybox-fx-circular.fancybox-slide--next{-webkit-transform:scale3d(0,0,0) translate3d(100%,0,0);transform:scale3d(0,0,0) translate3d(100%,0,0);opacity:0}.fancybox-fx-circular.fancybox-slide--current{-webkit-transform:scaleX(1) translateZ(0);transform:scaleX(1) translateZ(0);opacity:1}.fancybox-fx-tube.fancybox-slide--previous{-webkit-transform:translate3d(-100%,0,0) scale(.1) skew(-10deg);transform:translate3d(-100%,0,0) scale(.1) skew(-10deg)}.fancybox-fx-tube.fancybox-slide--next{-webkit-transform:translate3d(100%,0,0) scale(.1) skew(10deg);transform:translate3d(100%,0,0) scale(.1) skew(10deg)}.fancybox-fx-tube.fancybox-slide--current{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.fancybox-share{padding:30px;border-radius:3px;background:#f4f4f4;max-width:90%;text-align:center}.fancybox-share h1{color:#222;margin:0 0 20px;font-size:35px;font-weight:700}.fancybox-share p{margin:0;padding:0}p.fancybox-share__links{margin-right:-10px}.fancybox-share__button{display:inline-block;text-decoration:none;margin:0 10px 10px 0;padding:0 15px;min-width:130px;border:0;border-radius:3px;background:#fff;white-space:nowrap;font-size:14px;font-weight:700;line-height:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;transition:all .2s}.fancybox-share__button:hover{text-decoration:none}.fancybox-share__button--fb{background:#3b5998}.fancybox-share__button--fb:hover{background:#344e86}.fancybox-share__button--pt{background:#bd081d}.fancybox-share__button--pt:hover{background:#aa0719}.fancybox-share__button--tw{background:#1da1f2}.fancybox-share__button--tw:hover{background:#0d95e8}.fancybox-share__button svg{position:relative;top:-1px;width:25px;height:25px;margin-right:7px;vertical-align:middle}.fancybox-share__button svg path{fill:#fff}.fancybox-share__input{box-sizing:border-box;width:100%;margin:10px 0 0;padding:10px 15px;background:transparent;color:#5d5b5b;font-size:14px;outline:none;border:0;border-bottom:2px solid #d7d7d7}.fancybox-thumbs{display:none;position:absolute;top:0;bottom:0;right:0;width:212px;margin:0;padding:2px 2px 4px;background:#fff;-webkit-tap-highlight-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box;z-index:99995}.fancybox-thumbs-x{overflow-y:hidden;overflow-x:auto}.fancybox-show-thumbs .fancybox-thumbs{display:block}.fancybox-show-thumbs .fancybox-inner{right:212px}.fancybox-thumbs>ul{list-style:none;position:absolute;position:relative;width:100%;height:100%;margin:0;padding:0;overflow-x:hidden;overflow-y:auto;font-size:0;white-space:nowrap}.fancybox-thumbs-x>ul{overflow:hidden}.fancybox-thumbs-y>ul::-webkit-scrollbar{width:7px}.fancybox-thumbs-y>ul::-webkit-scrollbar-track{background:#fff;border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.fancybox-thumbs-y>ul::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:10px}.fancybox-thumbs>ul>li{float:left;overflow:hidden;padding:0;margin:2px;width:100px;height:75px;max-width:calc(50% - 4px);max-height:calc(100% - 8px);position:relative;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box}li.fancybox-thumbs-loading{background:rgba(0,0,0,.1)}.fancybox-thumbs>ul>li>img{position:absolute;top:0;left:0;max-width:none;max-height:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fancybox-thumbs>ul>li:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border:4px solid #4ea7f9;z-index:99991;opacity:0;transition:all .2s cubic-bezier(.25,.46,.45,.94)}.fancybox-thumbs>ul>li.fancybox-thumbs-active:before{opacity:1}@media (max-width:800px){.fancybox-thumbs{width:110px}.fancybox-show-thumbs .fancybox-inner{right:110px}.fancybox-thumbs>ul>li{max-width:calc(100% - 10px)}}
.amlabel-div {
    position: relative;
}

@media (min-width: 1200px) {
    .amlabel-div {
        width: 100%;
        display: inline-block;
        position: relative;
        text-decoration: none;
    }

    .col-lg-4.over .amlabel-div {
        width: 300px;
        height: auto;
        float: left;
    }

    .amlabel-div .product-image {
        width: 300px;
        vertical-align: middle;
        cursor: pointer;
        display: table-cell;
        text-align: center;
    }

    .amlabel-div .zoomable-img {
        vertical-align: middle;
        width: 100%;

    }

    .products-grid h2.product-name {
        width: 300px;

    }

    .products-grid .product-info{
        width: 300px;


    }
}

.amlabel-div .label21 .amlabel-txt {
    line-height: 1;
    font-size: 12px;
}

.amlabel-div .amlabel-txt {
    line-height: 19px;
    font-size: 16px;
    font-weight: normal;
    display: block;
    letter-spacing: 0.01px;
    text-decoration: none;
    color: #fff;
    padding: 2px 5px 0 5px;
    text-align: center;
}

.amlabel-div .amlabel-txt-product{
    line-height: 11px;
    font-size: 0.9em;
    font-weight: bold;
    display: block;
    letter-spacing:0.01px;
    text-decoration: none;
    color: #fff;
    text-align:left;
    padding: 0 22px;
    margin-top: 12px;
}
.amlabel-div a {
    text-decoration: none;
    position: relative;
}
/*  z-index: 10;*/
.amlabel-table {
    position: absolute;
    z-index: 4;
    cursor: pointer;
}
.amlabel-table td {
    vertical-align: middle;
    text-align: center;
}
.top-center {
    top: 0;
    left: 50%;
}
.middle-left {
    left: 0;
    top: 50%;
}
.middle-right {
    right: 0;
    top: 50%;
}
.bottom-center {
    bottom: 0;
    right: 50%;
}
.middle-center {
    top: 50%;
    right: 50%;
}
.top-left {
    top: 0;
    left: 0;
}
.top-right {
    top: 0;
    right: 0;
}
.bottom-left {
    bottom: 5px;
    left: 0;
}
.bottom-right {
    bottom: 0;
    right: 0;
}

.top-left.label22 {
    top: 5px!important;
    left: 5px!important;
}

.top-left.label24 {
    top: 5px!important;
    left: 5px!important;
}

.bottom-right.label24 {
    bottom: 110px!important;
    right: 5px!important;
}

.bottom-left.label24 {
    bottom: 60%!important;
}

.bottom-left.label25{
    width: 60px!important;
}

.bottom-left.label28{
    width: 60px!important;
}

.bottom-left.label26{
    width: 60px!important;
}

.bottom-left.label25 td{
    background: unset!important;
}

.bottom-left.label26 td{
    background: unset!important;
}

.bottom-left.label28 td{
    background: unset!important;
}

.bottom-left.label29 td{
    background: unset!important;
}

.products-grid .bottom-left.label25{
    bottom: 110px;
}

.products-grid .bottom-left.label22{
    bottom: 120px;
}

.products-grid .bottom-left.label26{
    bottom: 110px;
}

.products-grid .bottom-left.label28{
    bottom: 110px;
}

.products-grid .bottom-left.label29{
    bottom: 110px;
}

.swiper-wrapper .bottom-left.label25{
    bottom: 100px!important;
}

.swiper-wrapper .bottom-left.label26{
    bottom: 100px!important;
}

.swiper-wrapper .bottom-left.label22{
    bottom: 110px!important;
}

.swiper-wrapper .bottom-left.label28{
    bottom: 100px!important;
}

.swiper-wrapper .bottom-left.label29{
    bottom: 100px!important;
}

.bottom-left.label25 .amlabel-txt{
    color: #000!important;
    font-size: 13px!important;
    font-weight: bold!important;
}

.bottom-left.label26 .amlabel-txt{
    color: #000!important;
    font-size: 13px!important;
    font-weight: bold!important;
}

.bottom-left.label28 .amlabel-txt{
    color: #000!important;
    font-size: 13px!important;
    font-weight: bold!important;
}

.bottom-left.label29 .amlabel-txt{
    color: #000!important;
    font-size: 14px!important;
    font-weight: bold!important;
}

.products-list .amlabel-div {
    float:left;
}
* html .amlabel-div { float: left; }
* html .amlabel-div a { position: relative; }


/* Customization For Theme */

.amlabel-div > table.amlabel-table.label2 span {
    font-size: 13px;
}

.amlabel-div .amlabel-table.top-left.label2{
    display: none!important;
}

.amlabel-div .amlabel-table.bottom-right.label3{
    bottom: 0;
    right: 0;
}

.amlabel-table.bottom-right.label3{
    bottom: 0;
    right: 0;
}

.amlabel-table.bottom-right.label2{
    display: none!important;
}
/**
* Inchoo
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@magentocommerce.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Please do not edit or add to this file if you wish to upgrade
* Magento or this extension to newer versions in the future.
** Inchoo *give their best to conform to
* "non-obtrusive, best Magento practices" style of coding.
* However,* Inchoo *guarantee functional accuracy of
* specific extension behavior. Additionally we take no responsibility
* for any possible issue(s) resulting from extension usage.
* We reserve the full right not to provide any kind of support for our free extensions.
* Thank you for your understanding.
*
* @category Inchoo
* @package SocialConnect
* @author Marko Martinović <marko.martinovic@inchoo.net>
* @copyright Copyright (c) Inchoo (http://inchoo.net/)
* @license http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
*/

div.inchoo-socialconnect-facebook{
    float: right;
    height: 30px !important;
    background: transparent url('https://cdn.saatvesaat.com.tr/skin/frontend/base/default/inchoo_socialconnect/facebook/images/login-button-left.png') no-repeat top left !important;
}

div.inchoo-socialconnect-facebook-inner{
    height: 30px !important;
    float: left !important;
    margin-left: 30px !important;
    background: transparent url('https://cdn.saatvesaat.com.tr/skin/frontend/base/default/inchoo_socialconnect/facebook/images/login-button-inner.png') repeat-x top left !important;
    padding: 0 5px !important;
    text-shadow: 1px 1px #1c376d;
}

div.inchoo-socialconnect-facebook-right{
    float: left !important;
    height: 30px !important;
    width: 3px !important;
    background: transparent url('https://cdn.saatvesaat.com.tr/skin/frontend/base/default/inchoo_socialconnect/facebook/images/login-button-right.png') no-repeat top left !important;
}

div.inchoo-socialconnect-facebook-inner a{
    color: #FFFFFF !important;
    padding: 0 !important;
    margin: 0 !important;
    text-decoration: none !important;
    line-height: 30px !important;
}      



</style>
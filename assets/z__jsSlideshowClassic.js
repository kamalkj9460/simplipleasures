"use strict";Shopify.theme.jsSlideshowClassic={init:function(i){Shopify.theme.jsSlideshowClassic=$.extend(this,Shopify.theme.getSectionData(i));var e=i.find("[data-slideshow-classic]").removeClass("is-hidden");e.flickity({wrapAround:!0,adaptiveHeight:!0,prevNextButtons:1<this.number_of_slides&&this.show_arrows,pageDots:1<this.number_of_slides&&this.show_nav_buttons,draggable:">1",imagesLoaded:!0,fade:"fade"==this.image_transition,autoPlay:1e3*this.image_slideshow_speed,arrowShape:arrowShape});e.on("settle.flickity",function(){e.flickity("resize")})},blockSelect:function(i,e){i=i.find("[data-image-slideshow]"),e=$("#shopify-section-"+e).data("slide-index");i.flickity("select",e,!0,!0)},unload:function(i){}};
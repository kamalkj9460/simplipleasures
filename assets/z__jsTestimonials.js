"use strict";Shopify.theme.jsTestimonials={init:function(i){this.createSlider()},createSlider:function(){var i=$("[data-testimonial-slider]").flickity({wrapAround:!0,initialIndex:1,prevNextButtons:!1,pageDots:!1,watchCSS:!0});i.on("settle.flickity",function(){i.flickity("resize")}),$("body").on("click",".testimonial__nav--prev",function(){i.flickity("previous")}),$("body").on("click",".testimonial__nav--next",function(){i.flickity("next")})},blockSelect:function(i,t){i=i.find("[data-testimonial-slider]"),t=$("#shopify-section-"+t).data("testimonial-index");i.flickity("select",t,!0,!0)},unload:function(i){i.find(".flickity-enabled").flickity("destroy"),$(".testimonial__nav--prev").off(),$(".testimonial__nav--next").off()}};
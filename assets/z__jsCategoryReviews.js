"use strict";Shopify.theme.jsCategoryReviews={init:function(i){this.createSlider()},createSlider:function(){var i=$("[data-category-reviews]").flickity({wrapAround:!0,initialIndex:1,prevNextButtons:!1,pageDots:!0,watchCSS:!0});i.on("settle.flickity",function(){i.flickity("resize")})},unload:function(i){i.find(".flickity-enabled").flickity("destroy")}};
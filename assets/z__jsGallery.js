"use strict";Shopify.theme.jsGallery={init:function(t){Shopify.theme.jsGallery=$.extend(this,Shopify.theme.getSectionData(t));t=0;1==this.show_gutter&&(t=20),"masonry"==this.gallery_type?Shopify.theme.applyMasonry(".gallery__item",t):"horizontal-masonry"==this.gallery_type&&Shopify.theme.applyHorizontalMasonry()},unload:function(t){}};
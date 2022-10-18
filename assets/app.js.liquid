// Section Shopify Shopify.theme editor events

$(document)
.on('shopify:section:reorder', function(e){

  var $target = $(e.target);
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);

  if (Shopify.theme.jsHeader.enable_overlay == true) {
    Shopify.theme.jsHeader.unload();
    Shopify.theme.jsHeader.updateOverlayStyle(Shopify.theme.jsHeader.sectionUnderlayIsImage());
  }

});

$(document)
.on('shopify:section:load', function(e){

  // Shopify section as jQuery object
  var $section = $(e.target);

  // Vanilla js selection of Shopify section
  var section = document.getElementById('shopify-section-' + e.detail.sectionId);

  // Blocks within section
  var $jsSectionBlocks = $section.find('.shopify-section[class*=js]');

  var sectionObjectUrl = $section.find('[data-theme-editor-load-script]').attr('src');

  // Check classes on schema and look for js (eg. jsMap)
  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js"){
      var triggerClass = section.classList[i];

      // Check to see if section script exists
      if (typeof Shopify.theme[triggerClass] == 'undefined') {
        // make AJAX call to load script
        Shopify.theme.loadScript(triggerClass, sectionObjectUrl, function () {
          Shopify.theme[triggerClass].init($(section));
        });
      } else {
        if (Shopify.theme[triggerClass]) {
          // console.log('Section: ' + triggerClass + ' has been loaded.')
          Shopify.theme[triggerClass].init($(section));
        } else {
          // console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.init() function exists.');
        }
      }
    }
  }

  // Check classes on block element and look for js (eg. jsMap)
  if ($jsSectionBlocks.length > 0) {
    var $jsSectionBlockNames = $jsSectionBlocks.each(function () {
      for (var i = 0; i < this.classList.length; i++) {
        if (this.classList[i].substring(0, 2) === "js") {
          var triggerClass = this.classList[i];
          var $block = $('.'+ triggerClass)
          var blockUrl = $block.find('[data-theme-editor-load-script]').attr('src');

          // Check to see if section script exists
          if (typeof Shopify.theme[triggerClass] == 'undefined') {
            // make AJAX call to load script
            Shopify.theme.loadScript(triggerClass, blockUrl, function () {
              Shopify.theme[triggerClass].init($block);
            });
          } else {
            if (Shopify.theme[triggerClass]) {
              // console.log('Block: ' + triggerClass + ' has been loaded.')
              Shopify.theme[triggerClass].init($(this));
            } else {
              // console.warn('Uh oh, ' + triggerClass + ' is referenced in block class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.init() function exists.');
            }
          }

        }
      }
    });
  }

  // Load video feature
  Shopify.theme.video.init();

  //Enable plyr
  Shopify.theme.product__metafield_video.init();

  // Scrolling animations
  Shopify.theme.animation.init();

  // Object Fit Images
  Shopify.theme.objectFitImages.init();

  // Infinite scrolling
  Shopify.theme.infiniteScroll.init();

  // Disclosure menus
  Shopify.theme.disclosure.enable();

  // Search
  $(document).on('click',  '[data-show-search-trigger]', function(){
    Shopify.theme.jsHeader.showSearch();
  });

  $('.search-overlay__close').on('click', function(){
    Shopify.theme.jsHeader.hideSearch();
  });

  if (Shopify.theme_settings.enable_autocomplete == true) {
    Shopify.theme.predictiveSearch.init();
  }

});


$(document)
.on('shopify:section:unload', function(e){

  // Shopify section as jQuery object
  var $section = $(e.target);

  // Vanilla js selection of Shopify section
  var section = document.getElementById('shopify-section-' + e.detail.sectionId);

  // Blocks within section
  var $jsSectionBlocks = $section.find('.shopify-section[class*=js]');

  // Check classes on schema and look for js (eg. jsMap)
  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js"){
      var triggerClass = section.classList[i];
      if (Shopify.theme[triggerClass]) {
        // console.log('Section: ' + triggerClass + ' is unloaded.')
        Shopify.theme[triggerClass].unload($(section));
      } else {
        // console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.unload() function exists.');
      }
    }
  }

  // Check classes on block element and look for js (eg. jsMap)
  if ($jsSectionBlocks.length > 0) {
    var $jsSectionBlockNames = $jsSectionBlocks.each(function () {
      for (var i = 0; i < this.classList.length; i++) {
        if (this.classList[i].substring(0, 2) === "js") {
          var triggerClass = this.classList[i];
          if (Shopify.theme[triggerClass]) {
            // console.log('Block: ' + triggerClass + ' is unloaded.')
            Shopify.theme[triggerClass].unload($(this));
          } else {
            // console.warn('Uh oh, ' + triggerClass + ' is referenced in block class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.unload() function exists.');
          }

        }
      }
    });
  }

  // Scrolling animations
  Shopify.theme.animation.unload($section);

  // QuantityBox
  Shopify.theme.quantityBox.unload($section);

  // Infinite scrolling
  Shopify.theme.infiniteScroll.unload($section);

  // Disclosure menus
  Shopify.theme.disclosure.enable();

});

$(document)
.on('shopify:section:select', function(e){

  // Shopify section as jQuery object
  var $section = $(e.target);

  // Vanilla js selection of Shopify section
  var section = document.getElementById('shopify-section-' + e.detail.sectionId);

  // Force show state when section is selected in theme editor
  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js") {
      var triggerClass = section.classList[i];
      if (Shopify.theme[triggerClass].showThemeEditorState) {
        Shopify.theme[triggerClass].showThemeEditorState(e.detail.sectionId, $section);
      }
    }
  }

  // Predictive search
  if (Shopify.theme_settings.enable_autocomplete == true) {
    Shopify.theme.predictiveSearch.init();
  }

  if($('.tabs').length > 0) {
    Shopify.theme.tabs.enableTabs();
  }
  
  if($('.tabs-flickity').length > 0) {
    Shopify.theme.tabs_flickity.enableTabs();
  }

  if(isScreenSizeLarge() && Shopify.theme.jsHeader.enable_overlay === true) {
    Shopify.theme.jsHeader.updateOverlayStyle(Shopify.theme.jsHeader.sectionUnderlayIsImage());
  }

  if ($('.block__recommended-products').length > 0) {
    var $productPage = $('.block__recommended-products').parents('.product-page');
    Shopify.theme.jsRecommendedProducts.init($productPage);
  }

});

$(document)
.on('shopify:section:deselect', function(e){

  // Shopify section as jQuery object
  var $section = $(e.target);

  // Vanilla js selection of Shopify section
  var section = document.getElementById('shopify-section-' + e.detail.sectionId);

  // Force hide state when section is selected in theme editor
  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js") {
      var triggerClass = section.classList[i];
      if (Shopify.theme[triggerClass].showThemeEditorState) {
        Shopify.theme[triggerClass].hideThemeEditorState(e.detail.sectionId, $(section));
      }
    }
  }

});

// Block Shopify Shopify.theme editor events

$(document)
.on('shopify:block:select', function(e){

  var blockId = e.detail.blockId;
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  var $block = $('#shopify-section-' + blockId);

  if($('.jsFeaturedPromos').length > 0) {
    Shopify.theme.jsFeaturedPromos.blockSelect($parentSection, blockId);
  }

  if($('.jsSlideshowWithText').length > 0) {
    Shopify.theme.jsSlideshowWithText.blockSelect($parentSection, blockId);
  }

  if ($('.jsSlideshowClassic').length > 0) {
    Shopify.theme.jsSlideshowClassic.blockSelect($parentSection, blockId);
  }

  if($('.jsTestimonials').length > 0) {
    Shopify.theme.jsTestimonials.blockSelect($parentSection, blockId);
  }
  
  if($('.jsIconWithTextColumn').length > 0) {
    Shopify.theme.jsIconWithTextColumn.blockSelect($parentSection, blockId);
  }

  // Sidebar collection multi-tag filter
  if ($block.hasClass('sidebar__block')) {
    var $toggleBtn = $block.find('[data-sidebar-block__toggle="closed"]');
    if ($toggleBtn) {
      Shopify.theme.jsSidebar.openSidebarBlock($toggleBtn);
    }
  }

  // Predictive search
  if (Shopify.theme_settings.enable_autocomplete == true) {
    Shopify.theme.predictiveSearch.init();
  }

  // Scrolling animations
  Shopify.theme.animation.init();

  // Object Fit Images
  Shopify.theme.objectFitImages.init();

});

$(document)
.on('shopify:block:deselect', function(e){

  var $block = $('#shopify-section-' + e.detail.blockId);

  if ($block.hasClass('sidebar__block')) {
    var $toggleBtn = $block.find('[data-sidebar-block__toggle="open"]');
    if ($toggleBtn) {
      Shopify.theme.jsSidebar.closeSidebarBlock($toggleBtn);
    }
  }

});

$(document)
.on('shopify:block:load', function(e){



});

// Document ready
$(function() {

  var $jsSections = $('.shopify-section[class*=js]');

  // Loop through sections with js classes and load them in
  var $jsSectionNames = $jsSections.each(function () {
    for (var i = 0; i < this.classList.length; i++) {
      if (this.classList[i].substring(0, 2) === "js"){
        var triggerClass = this.classList[i];
        if (Shopify.theme[triggerClass]) {
          // console.log('Section: ' + triggerClass + ' has been loaded.')
          Shopify.theme[triggerClass].init($(this));
        } else {
          // console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.init() function exists.');
        }

      }
    }
  });

  var resizeTimer;

  // Store window width in variable
  var width = $(window).width(), height = $(window).height();

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      Shopify.theme.objectFitImages.calculateAspectRatio();

      if (Shopify.theme.jsHeader.header_layout === 'vertical') {
        Shopify.theme.predictiveSearch.alignVerticalSearch()
      }

      if (!isScreenSizeLarge()){
        // When 798 or less
        Shopify.theme.mobileMenu.init();

      } else {

        // When larger than 798
        Shopify.theme.mobileMenu.unload();

        // Swatches
        if(Shopify.theme_settings.product_form_style == 'swatches') {
          Shopify.theme.thumbnail.enableSwatches();
        }
      }

    }, 250);

  });

  //Enable plyr
  Shopify.theme.video.init();
  
  //Enable plyr
  Shopify.theme.product__metafield_video.init();

  // Predictive search
  if (Shopify.theme_settings.enable_autocomplete == true) {
    Shopify.theme.predictiveSearch.init();
  }

  Shopify.theme.dropdownMenu();

  Shopify.theme.disclosure.enable();

  // Scrolling animations
  Shopify.theme.animation.init();

  // QuantityBox
  Shopify.theme.quantityBox.init();

  /* Show secondary image on hover */
  if (Shopify.theme_settings.show_secondary_image == true) {
    Shopify.theme.thumbnail.showVariantImage();
  }

  // Collection swatches
  if (Shopify.theme_settings.show_collection_swatches) {
    Shopify.theme.thumbnail.enableSwatches();
  }

  // Quick shop
  if (Shopify.theme_settings.enable_quickshop) {
    Shopify.theme.thumbnail.showQuickShop();
  }

  // Currency converter
  if (Currency.show_multiple_currencies || Currency.native_multi_currency) {
    Shopify.theme.currencyConverter.init();
  }

  //Infinite scrolling
  if ($('[data-custom-pagination]').length) {
    Shopify.theme.infiniteScroll.init();
  }

  //Select event for native multi currency checkout
  $('.shopify-currency-form select').on('change', function () {
    $(this)
      .parents('form')
      .submit();
  });

  // Tabs
  if($('.tabs').length > 0) {
    Shopify.theme.tabs.enableTabs();
  }
  if($('.tabs-flickity').length > 0) {
    Shopify.theme.tabs_flickity.enableTabs();
  }

  // Additional checkout buttons
  if (!isScreenSizeLarge()) {
    $('.additional-checkout-buttons').addClass('additional-checkout-buttons--vertical');
  }

  // Accordion
  if($('.accordion, [data-cc-accordion]').length > 0) {
    Shopify.contentCreator.accordion.init();
  }

  // Backwards compatiblity for Flexslider
  if($('.slider, .flexslider').length > 0) {
    Shopify.contentCreator.slideshow.init();
  }

  // Object Fit Images
  Shopify.theme.objectFitImages.init();

  // Responsive Video
  Shopify.theme.responsiveVideo.init();

  // Flickity IOS Fix
  Shopify.theme.flickityIosFix();

  // Drag to scroll
  if($('.mini_category-nav')[0]) {
    const mini_categoryNav = new DragToScroll($('.mini_category-nav ul')[0]);
    mini_categoryNav.init();
  }


});

/*============================================================================
Slideshow arrows
==============================================================================*/


if(Shopify.theme_settings.icon_style == 'icon_solid') {
  var arrowShape = 'M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z';
} else {
  var arrowShape = 'M95,48H9.83L41,16.86A2,2,0,0,0,38.14,14L3.59,48.58a1.79,1.79,0,0,0-.25.31,1.19,1.19,0,0,0-.09.15l-.1.2-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31L38.14,86A2,2,0,0,0,41,86a2,2,0,0,0,0-2.83L9.83,52H95a2,2,0,0,0,0-4Z';
}

$(document).ready(function() {
  $(".stamped-summary-actions-newquestion").insertBefore($(".stamped-container"));
  $(".new-question-form").insertBefore($(".stamped-container"));
  $("#tab-questions").remove();
  var currentdate = new Date(); 
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                      ];
    var day = currentdate.getDay(), condition, display_message;
    if(day >= 0 && day <= 3){
      condition = 1;
    }else if(day == 4) {
      var hours = currentdate.getHours();
      if(hours < 12){
       	 condition = 1;
      }else{
        condition = 2;
      }
    }else {
      condition = 2;
    }

    
    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }

    var start_date = new Date();
    var end_date = new Date();
    if(condition == 1){
      start_date = start_date.addDays(2);
      end_date = end_date.addDays(4);
    } else {
      start_date = start_date.addDays(3);
      end_date = end_date.addDays(5);
    }
    display_message = "<strong>" + weekday[start_date.getDay()] + ", " + monthNames[start_date.getMonth()] + " " + start_date.getDate() + "</strong> and <strong>" + weekday[end_date.getDay()] + ", " + monthNames[end_date.getMonth()] + " " + end_date.getDate() + "</strong>";
  $(".shipping-approx").each(function(){
    $(this).html(display_message);
  });
});
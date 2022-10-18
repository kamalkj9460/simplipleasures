if ((typeof Shopify) === 'undefined') { window.Shopify = {}; }
  // Get from cart.js returns the cart in JSON
  if ((typeof Shopify.getCart) === 'undefined') {
  Shopify.getCart = function(callback, cart) {
    if(!cart){
    return jQuery.getJSON('/cart.js', function (cart, textStatus, xhr) {
        if ((typeof callback) === 'function') {
        callback(cart,textStatus, xhr);
      }
      else {
        Shopify.onCartUpdate(cart);
          }
      });
    }else{
      if ((typeof callback) === 'function') {
      callback(cart);
    }else if(typeof Shopify.onCartUpdate ==='function') {
      Shopify.onCartUpdate(cart);
        }
    }
  };
}

"use strict";
function _slicedToArray(a, t) {
    return _arrayWithHoles(a) || _iterableToArrayLimit(a, t) || _unsupportedIterableToArray(a, t) || _nonIterableRest()
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(a, t) {
    if (a) {
        if ("string" == typeof a)
            return _arrayLikeToArray(a, t);
        var e = Object.prototype.toString.call(a).slice(8, -1);
        return "Map" === (e = "Object" === e && a.constructor ? a.constructor.name : e) || "Set" === e ? Array.from(a) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? _arrayLikeToArray(a, t) : void 0
    }
}
function _arrayLikeToArray(a, t) {
    (null == t || t > a.length) && (t = a.length);
    for (var e = 0, r = new Array(t); e < t; e++)
        r[e] = a[e];
    return r
}
function _iterableToArrayLimit(a, t) {
    var e = a && ("undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"]);
    if (null != e) {
        var r, n, i = [], o = !0, s = !1;
        try {
            for (e = e.call(a); !(o = (r = e.next()).done) && (i.push(r.value),
            !t || i.length !== t); o = !0)
                ;
        } catch (a) {
            s = !0,
            n = a
        } finally {
            try {
                o || null == e.return || e.return()
            } finally {
                if (s)
                    throw n
            }
        }
        return i
    }
}
function _arrayWithHoles(a) {
    if (Array.isArray(a))
        return a
}
function _defineProperty(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e,
    a
}
Shopify.theme.jsAjaxCart = {
    init: function(a) {
        Shopify.theme.jsAjaxCart = $.extend(this, Shopify.theme.getSectionData(a)),
        isScreenSizeLarge() || "drawer" == this.cart_action ? this.initializeAjaxCart() : this.initializeAjaxCartOnMobile(),
        "drawer" == this.cart_action ? (this.ajaxCartDrawer = $("[data-ajax-cart-drawer]"),
        $(document).on("click", "[data-ajax-cart-trigger]", function(a) {
            return a.preventDefault(),
            Shopify.theme.jsAjaxCart.showDrawer(),
            !1
        })) : "mini_cart" == this.cart_action && this.showMiniCartOnHover(),
        $(document).on("click", ".ajax-submit", function(a) {
            a.preventDefault();
          	$(".fancybox-container").css("display", "none");
            a = $(this).closest("form");
            return Shopify.theme.jsAjaxCart.addToCart(a),
            !1
        }),
        $(".quick_shop").click(function(x){
          x.preventDefault();
          $(".fancybox-container").css("display", "block");
        }),
        $(document).on("click", "[data-ajax-cart-delete]", function(a) {
            a.preventDefault();
            a = $(this).parents("[data-line-item]").data("line-item");
            return Shopify.theme.jsAjaxCart.removeFromCart(a),
            Shopify.theme.jsCart && Shopify.theme.jsCart.removeFromCart(a),
            !1
        }),
        $(document).on("click", "[data-ajax-cart-close]", function(a) {
            return a.preventDefault(),
            Shopify.theme.jsAjaxCart.hideDrawer(),
            Shopify.theme.jsAjaxCart.hideMiniCart(),
            !1
        })
    },
    showMiniCartOnHover: function() {
        var a = $("[data-ajax-cart-trigger]");
        a.hover(function() {
            ("centered" == Shopify.theme_settings.header_layout && $(".header-sticky-wrapper").hasClass("is-sticky") ? $(".header-sticky-wrapper [data-ajax-cart-trigger]") : a).addClass("show-mini-cart")
        }, function() {
            a.removeClass("show-mini-cart")
        })
    },
    hideMiniCart: function() {
        if ("mini_cart" != this.cart_action)
            return !1;
        $("[data-ajax-cart-close]").parents("[data-ajax-cart-trigger]").removeClass("show-mini-cart")
    },
    toggleMiniCart: function() {
        var e = $(".mobile-header [data-ajax-cart-trigger]");
        e.attr("href", "#"),
        e.off("click").on("click", function(a) {
            var t;
            a.target.closest("[data-ajax-cart-mini_cart]") || (Shopify.theme.jsAjaxCart.initializeAjaxCartOnMobile(),
            e.toggleClass("show-mini-cart"),
            t = 0,
            a = parseInt($(".mobile-header").height()),
            void 0 !== Shopify.theme.jsAnnouncementBar && Shopify.theme.jsAnnouncementBar.enable_sticky && (t = Shopify.theme.jsAnnouncementBar.getAnnouncementHeight()),
            $(".mobile-header .theme-ajax-cart").css({
                height: "calc(100vh)"
            }))
        })
    },
    showDrawer: function() {
        if ("drawer" != this.cart_action)
            return !1;
        this.ajaxCartDrawer.addClass("is-visible"),
        $(".ajax-cart__overlay").addClass("is-visible")
    },
    hideDrawer: function() {
        if ("drawer" != this.cart_action)
            return !1;
        this.ajaxCartDrawer.removeClass("is-visible"),
        $(".ajax-cart__overlay").removeClass("is-visible")
    },
    removeFromCart: function removeFromCart(lineID, callback) {
        $.ajax({
            type: "POST",
            url: "/cart/change.js",
            data: "quantity=0&line=" + lineID,
            dataType: "json",
            success: function(a) {
              Shopify.getCart(function(cart) {
                Shopify.theme.jsAjaxCart.updateView()
              });
              // Remove bonus product if products from specific collection are no longer in the cart
              // $.post('/cart/update.js', {
              //   updates: {
              //     The bonus product - "Fifty Shades of Grey No Peeking Blindfold Twin Pack"
              //     34330660929672: 0
              //   }
              // });
            },
            error: function error(XMLHttpRequest, textStatus) {
                var response = eval("(" + XMLHttpRequest.responseText + ")")
                  , response = response.description
            }
        })
    },
    initializeAjaxCart: function() {
        var r = this;
        Shopify.theme.asyncView.load(Shopify.routes.cart_url, "ajax").done(function(a) {
            var t, e = a.html;
            a.options;
            $("[data-ajax-cart-content]").html(e.content),
            document.querySelector(".ajax-cart__form .ajax-cart__button-wrapper") && (a = (t = document.querySelector(".ajax-cart__form")).querySelector(".ajax-cart__button-wrapper"),
            e = t.querySelector(".ajax-cart__cart-count"),
            r.observeSticky(t, a),
            r.observeSticky(t, e)),
            Currency.show_multiple_currencies && Shopify.theme.currencyConverter.convertCurrencies()
        }).fail(function() {})
    },
    initializeAjaxCartOnMobile: function() {
        this.toggleMiniCart(),
        Shopify.theme.asyncView.load(Shopify.routes.cart_url, "ajax").done(function(a) {
            var t = a.html;
            a.options;
            $(".mobile-header [data-ajax-cart-content]").html(t.content)
        }).fail(function() {})
    },
    addToCart: function addToCart($addToCartForm) {
        var $addToCartBtn = $addToCartForm.find(".button--add-to-cart");
        $.ajax({
            url: "/cart/add.js",
            dataType: "json",
            cache: !1,
            type: "post",
            data: $addToCartForm.serialize(),
            beforeSend: function() {
                $addToCartBtn.attr("disabled", "disabled").addClass("disabled"),
                $addToCartBtn.find("span").removeClass("fadeInDown").addClass("animated zoomOut")
            },
            success: function(a) {
              Shopify.getCart(function(a) {
                var t, e = $("[data-ajax-cart-trigger]");
                function r() {
                    isScreenSizeLarge() ? e = $("[data-ajax-cart-trigger]") : (e = $(".mobile-header [data-ajax-cart-trigger]"),
                    Shopify.theme.scrollToTop(e)),
                    Shopify.theme_settings.open_cart_after_adding && e.addClass("show-mini-cart"),
                    $addToCartBtn.find("span").removeClass("fadeInDown")
                }
                $addToCartBtn.find(".checkmark").addClass("checkmark-active"),
                window.setTimeout(function() {
                    $addToCartBtn.removeAttr("disabled").removeClass("disabled"),
                    $addToCartBtn.find(".checkmark").removeClass("checkmark-active"),
                    $addToCartBtn.find(".text, .icon").removeClass("zoomOut").addClass("fadeInDown"),
                    $addToCartBtn.on("webkitAnimationEnd oanimationend msAnimationEnd animationend", r)
                }, 1e3),
                Shopify.theme_settings.open_cart_after_adding && Shopify.theme.jsAjaxCart.showDrawer(),
                Shopify.theme.jsAjaxCart.updateView(),
                Shopify.theme.jsCart && $.ajax((_defineProperty(t = {
                    dataType: "json",
                    async: !1,
                    cache: !1
                }, "dataType", "html"),
                _defineProperty(t, "url", "/cart"),
                _defineProperty(t, "success", function(a) {
                    a = $(a).find(".cart__form");
                    $(".cart__form").replaceWith(a)
                }),
                t))
              });
              // For all products on the website
              if (window.location.href.indexOf("/doc-johnson-brand/") > -1) {
                // Check for mystery item
                var mysteryItemCount = $(".ajax-cart__product-title:contains('Mystery')").length;

                if (mysteryItemCount == 0) {
                  // Add a bonus product (hardcoded/specific one)
                  var bonusProduct = {
                    // The bonus product - "Mystery Item"
                    'id':39951080325256,
                    'quantity':1
                  };
                }

                fetch('/cart/add.js', {
                  body: JSON.stringify(bonusProduct),
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With':'xmlhttprequest'
                  },
                  method: 'POST'
                  }).then(function(response) {
                    return response.json();
                  }).catch(function(err) {
                    console.error('Error:', err);
                  });
              }
            },
            error: function error(XMLHttpRequest) {
                var response = eval("(" + XMLHttpRequest.responseText + ")")
                  , response = response.description
                  , cartWarning = '<p class="product_form-cart-warning__message animated bounceIn">'.concat(response.replace("All 1 ", "All "), "</p>");
                $(".warning").remove(),
                $addToCartForm.find(".product_form-cart-warning").html(cartWarning),
                $addToCartBtn.removeAttr("disabled").removeClass("disabled"),
                $addToCartBtn.find(".icon").removeClass("zoomOut").addClass("zoomIn"),
                $addToCartBtn.find(".text").text(Shopify.translation.addToCart).removeClass("zoomOut").addClass("zoomIn")
            }
        })
    },
    observeSticky: function(a, t) {
        new IntersectionObserver(function(a) {
            a = _slicedToArray(a, 1)[0];
            a.target.classList.toggle("is-sticky", !a.isIntersecting)
        }
        ,{
            root: a,
            rootMargin: "0px 10px",
            threshold: [1]
        }).observe(t)
    },
    updateView: function() {
        var o = this;
        Shopify.theme.asyncView.load(Shopify.routes.cart_url, "ajax").done(function(a) {
            var t, e, r, n = a.html, i = a.options;
            0 < i.item_count ? (t = $(n.content).find(".ajax-cart__list"),
            e = $(n.content).find(".ajax-cart__details-wrapper"),
            r = $(n.content).find(".ajax-cart__form"),
            a = $(n.content).find(".ajax-cart__button-wrapper"),
            n = $(n.content).find(".ajax-cart__count"),
            $(".ajax-cart__list").replaceWith(t),
            $(".ajax-cart__details-wrapper").replaceWith(e),
            $(".ajax-cart__empty-cart-message").addClass("is-hidden"),
            $(".ajax-cart__form").removeClass("is-hidden"),
            $("[data-ajax-cart-trigger]").addClass("has-cart-count"),
            $('[data-bind="itemCount"]').text(i.item_count),
            o.observeSticky(r, a),
            o.observeSticky(r, n)) : ($(".ajax-cart__empty-cart-message").removeClass("is-hidden"),
            $(".ajax-cart__form").addClass("is-hidden"),
            $("[data-ajax-cart-trigger]").removeClass("has-cart-count"),
            $('[data-bind="itemCount"]').text("0")),
            Currency.show_multiple_currencies && Shopify.theme.currencyConverter.convertCurrencies()
        }).fail(function() {})
    },
    unload: function(a) {
        $(".ajax-submit").off(),
        $("[data-ajax-cart-delete]").off()
    }
};

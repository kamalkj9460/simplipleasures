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
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var o = 0; o < t.length; o++) {
        var i = t[o];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, o) {
    return t && _defineProperties(e.prototype, t),
    o && _defineProperties(e, o),
    e
}
function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o,
    e
}
Shopify.contentCreator.accordion = {
    init: function() {
        var t = $(".accordion > dt > a, [data-cc-accordion] > dt > a");
        $(".accordion > dd, [data-cc-accordion] > dd").attr("aria-hidden", !0),
        t.attr("aria-expanded", !1),
        t.on("click", function() {
            var e = "false" === $(this).attr("aria-expanded");
            return $(this).attr("aria-expanded", e),
            $(this).parent().next().attr("aria-hidden", !e),
            !1
        }),
        t.on("keydown", function(t) {
            13 === (t.keyCode || e.which) && $(this).trigger("activate")
        })
    },
    unload: function() {
        $(".accordion > dt > a, [data-cc-accordion] > dt > a").off("click activate"),
        $(".accordion > dt > a, [data-cc-accordion] > dt > a").off("keydown")
    }
},
Shopify.contentCreator.slideshow = {
    init: function() {
        $(".slider, .flexslider").find("li").unwrap(),
        $(".slider, .flexslider").flickity({
            pageDots: !0,
            lazyLoad: 2
        })
    }
},
Shopify.theme.animation = {
    init: function() {
        $("[data-scroll-class]").waypoint(function() {
            var e = $(this.element).data("scroll-class");
            $(this.element).addClass("animated").addClass(e)
        }, {
            offset: "70%"
        })
    },
    slideTransition: function(e, t, o) {
        e.parents(".flickity-enabled").find(".animated").removeClass("animated " + t),
        e.addClass("animated").addClass(t)
    },
    unload: function(e) {
        e.data("scroll-class", "")
    }
};
var deferred = {}, Shopify;
function floatToString(e, t) {
    t = e.toFixed(t).toString();
    return t.match(/^\.\d+/) ? "0" + t : t
}
if (Shopify.theme.asyncView = {
    load: function(n, e) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (n in deferred)
            return deferred[n];
        var s = $.Deferred();
        if (deferred[n] = s,
        r.hash && (t = sessionStorage.getItem(n))) {
            var t = JSON.parse(t);
            if (r.hash === t.options.hash)
                return delete deferred[n],
                s.resolve(t).promise()
        }
        return $.ajax({
            url: n,
            cache: !1,
            data: "view=".concat(e),
            dataType: "html",
            headers: {
                "cache-control": "no-cache"
            },
            success: function(e) {
                var t = document.createElement("div");
                t.innerHTML = e;
                var e = JSON.parse(t.querySelector("[data-options]").innerHTML)
                  , o = t.querySelectorAll("[data-html]")
                  , i = {};
                if (1 === o.length && "" === o[0].getAttribute("data-html"))
                    i = o[0].innerHTML;
                else
                    for (var a = 0; a < o.length; a++)
                        i[o[a].getAttribute("data-html")] = o[a].innerHTML;
                if (r.hash)
                    try {
                        sessionStorage.setItem(n, JSON.stringify({
                            options: e,
                            html: i
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                return delete deferred[n],
                s.resolve({
                    options: e,
                    html: i
                })
            },
            error: function() {
                return delete deferred[n],
                s.reject()
            }
        }),
        s.promise()
    }
},
Shopify.theme.addImageDimension = function(e, t) {
    var o = e.lastIndexOf(".");
    return e.substring(0, o) + t + e.substring(o)
}
,
$(function() {
    $(window).scroll(function() {
        $(this).scrollTop() ? $(".js-back_to_top").fadeIn() : $(".js-back_to_top").fadeOut()
    }),
    $(".js-back_to_top").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"),
        !1
    })
}),
Shopify.theme.breadcrumbs = {
    init: function(e) {
        var t, o;
        1 < e && (t = document.querySelector("[data-breadcrumb-text]"),
        o = document.querySelector(".paginate").dataset.currentPage ? document.querySelector(".paginate").dataset.currentPage : 1,
        e = document.querySelector(".paginate").dataset.paginatePages,
        document.querySelector(".js-breadcrumb-text").classList.remove("is-hidden"),
        t.innerHTML = "".concat(Shopify.translation.page_text, " ").concat(o, " ").concat(Shopify.translation.of_text, " ").concat(e))
    },
    unload: function(e) {
        document.querySelector(".js-breadcrumb-text").classList.add("is-hidden")
    }
},
Shopify.theme.disclosure = {
    enable: function() {
        var e = $("[data-disclosure]")
          , o = $("[data-disclosure-toggle]")
          , i = $(".disclosure__list-wrap")
          , t = $("[data-disclosure-list]");
        function a(e) {
            e.siblings(".disclosure__list-wrap").is(":off-right") && e.siblings(".disclosure__list-wrap").addClass("disclosure--left")
        }
        function n(e, t) {
            !0 === e ? (o.not(t).removeClass("is-clicked"),
            o.not(t).attr("aria-expanded", "false")) : (o.removeClass("is-clicked"),
            o.attr("aria-expanded", "false")),
            i.removeClass("disclosure--left")
        }
        $("body").on("keyup", function(e) {
            "27" == e.which && n()
        }),
        e.on("mouseleave", function(e) {
            n()
        }),
        e.find(".disclosure-list__item:last-child").on("focusout", function(e) {
            n()
        }),
        o.on("mouseenter focus", function(e) {
            n(!0, this);
            e = $(e.currentTarget);
            e.attr("aria-expanded", "true").addClass("is-clicked"),
            a(e)
        }),
        t.on("touchstart", function(e) {
            e = $(e.currentTarget);
            e.parents(".disclosure").addClass("is-clicked"),
            n(!0, this),
            0 == e.hasClass("is-clicked") ? (e.attr("aria-expanded", "true").addClass("is-clicked"),
            a(e)) : (e.attr("aria-expanded", "false").removeClass("is-clicked"),
            i.removeClass("disclosure--left"))
        }),
        t.on("focusout", function(e) {
            n(!0, this)
        }),
        t.on("change", function(e) {
            var t, o, i;
            !Shopify.media_queries.medium.matches && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (t = $(e.currentTarget),
            o = e.currentTarget.value,
            i = t.parents(".selectors-form__item").find("[data-disclosure-input]"),
            e = t.parents(".selectors-form"),
            t.hasClass("custom-currency") ? t.trigger("click") : (i.val(o),
            e.submit()))
        })
    },
    unload: function() {
        $("[data-disclosure]").off(),
        $("[data-disclosure-toggle]").off(),
        $(".disclosure__list-wrap").off()
    }
},
Shopify.theme.dropdownMenu = function() {
    var e = $(".navbar-link")
      , t = $(".navbar-dropdown")
      , o = $(".has-mega-menu");
    e.each(function(e, t) {
        var o = !1;
        $(t).on("keydown", function(e) {
            13 === e.which && (!1 === o && e.preventDefault(),
            $(this).closest(".navbar-item").addClass("show-dropdown"),
            o = !0)
        }),
        $(t).closest(".navbar-item").on("focusout", function(e) {
            0 === $(this).find(e.relatedTarget).length && $(t).closest(".navbar-item").removeClass("show-dropdown")
        })
    }),
    t.each(function(e, t) {
        var o = !1;
        $(t).on("keydown", function(e) {
            13 === e.which && (!1 === o && e.preventDefault(),
            0 < $(this).find(".has-submenu").length && $(this).addClass("show-nested-dropdown"),
            o = !0)
        })
    }),
    o.each(function(e, t) {
        var o = !1;
        $(t).on("keydown", function(e) {
            13 === e.which && (!1 === o && e.preventDefault(),
            $(this).find(".mega-menu").addClass("mega-menu--show"),
            o = !0)
        }),
        $(t).on("focusout", function(e) {
            0 === $(t).find(e.relatedTarget).length && $(t).find(".mega-menu").removeClass("mega-menu--show")
        })
    })
}
,
Shopify.theme.newsletterAjaxForm = {
    init: function() {
        $(".newsletter-form__wrapper .contact-form").each(function() {
            var t = $(this);
            t.on("submit", function(e) {
                "true" !== $('input[name="challenge"]', t).val() && ($.ajax({
                    type: t.attr("method"),
                    url: t.attr("action"),
                    data: t.serialize(),
                    success: function(e) {
                        t.fadeOut("slow", function() {
                            t.prev(".form__success-message").html(Shopify.translation.newsletter_form_success)
                        })
                    },
                    error: function(e) {
                        $('input[name="challenge"]', t).val("true"),
                        t.submit()
                    }
                }),
                e.preventDefault())
            })
        })
    },
    unload: function() {
        $(".newsletter-form__wrapper .contact-form").find(":submit").off()
    }
},
Shopify.theme.getSectionData = function(e) {
    var t = e.attr("id").replace("shopify-section-", "")
      , t = e.find("[data-section-data][data-section-id=" + t + "]").first();
    if (!t)
        return {};
    t = t.data("section-data") || t.html();
    try {
        return JSON.parse(t)
    } catch (e) {
        return console.warn("Sections: invalid section data found. ".concat(e.message)),
        {}
    }
}
,
Shopify.theme.infiniteScroll = {
    init: function() {
        this.defaults = {
            grid: "[data-load-more--grid]",
            gridItems: "[data-load-more--grid-item]",
            currentRange: "[data-current-range]"
        },
        $("body").on("click", "[data-load-more]", function(e) {
            e.preventDefault();
            var t = $(this)
              , e = t.attr("href");
            Shopify.theme.infiniteScroll.loadNextPage(e, t)
        }),
        $("body").on("click", "[data-load-more-infinite]", function(e) {
            return Shopify.theme.infiniteScroll.enableInfinite(),
            $(this).remove(),
            e.stopPropagation(),
            !1
        }),
        $("[data-load-infinite-scroll]").length && Shopify.theme.infiniteScroll.enableInfinite()
    },
    loadNextPage: function(e, i) {
        var a = this;
        $.ajax({
            type: "GET",
            dataType: "html",
            url: e,
            beforeSend: function() {
                i.addClass("is-loading")
            },
            success: function(e) {
                i.removeClass("is-loading");
                var t = $(e).find(a.defaults.gridItems)
                  , o = $(e).find("[data-load-more]").attr("href")
                  , e = $(e).find(a.defaults.currentRange).text();
                console.log(t.length),
                $("[data-load-more]").attr("href", o),
                $(a.defaults.currentRange).text(e),
                $(a.defaults.grid).first().append(t),
                void 0 === o && $("[data-load-more]").addClass("is-hidden")
            },
            error: function(e, t, o) {
                console.log(e),
                console.log(t),
                console.log(o),
                location.replace(location.protocol + "//" + location.host + filterURL)
            }
        })
    },
    enableInfinite: function() {
        new Waypoint.Infinite({
            element: $(this.defaults.grid)[0],
            items: "[data-load-more--grid-item]",
            more: "[data-load-infinite]",
            loadingClass: "loading-in-progress",
            onBeforePageLoad: function() {
                $("[data-load-infinite]").removeClass("is-hidden")
            },
            onAfterPageLoad: function(e) {}
        })
    },
    unload: function() {
        $("[data-load-more]").off(),
        $("[data-load-infinite]").off()
    }
},
Shopify.theme.flickityIosFix = function() {
    var o, i = !1;
    document.body.addEventListener("touchstart", function(e) {
        e.target.closest(".flickity-slider") ? (i = !0,
        o = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        }) : i = !1
    }),
    document.body.addEventListener("touchmove", function(e) {
        var t;
        i && e.cancelable && (t = {
            x: e.touches[0].pageX - o.x,
            y: e.touches[0].pageY - o.y
        },
        7 < Math.abs(t.x) && e.preventDefault())
    }, {
        passive: !1
    })
}
,
Shopify.theme.loadScript = function(e, t, o) {
    Shopify.theme[e] || $.ajax({
        url: t,
        dataType: "script",
        success: o,
        async: !1
    })
}
,
Shopify.theme.updateOptionsInSelector = function(e, t) {
    switch (e) {
    case 0:
        var o = "root";
        $(t + " .single-option-selector:eq(0)");
        break;
    case 1:
        o = $(t + " .single-option-selector:eq(0)").val(),
        $(t + " .single-option-selector:eq(1)");
        break;
    case 2:
        o = $(t + " .single-option-selector:eq(0)").val();
        o += " / " + $(t + " .single-option-selector:eq(1)").val();
        $(t + " .single-option-selector:eq(2)")
    }
    var i = Shopify.optionsMap[o];
    $(t + ' .swatch[data-option-index="' + e + '"] .swatch-element').each(function() {
        -1 !== $.inArray($(this).attr("data-value"), i) ? $(this).removeClass("soldout").find(":radio").removeAttr("disabled", "disabled").removeAttr("checked") : $(this).addClass("soldout").find(":radio").removeAttr("checked").attr("disabled", "disabled")
    })
}
,
Shopify.linkOptionSelectors = function(e, t) {
    Shopify.optionsMap = {};
    for (var o = 0; o < e.variants.length; o++) {
        var i, a = e.variants[o];
        a.available && (Shopify.optionsMap.root = Shopify.optionsMap.root || [],
        Shopify.optionsMap.root.push(a.option1),
        Shopify.optionsMap.root = Shopify.uniq(Shopify.optionsMap.root),
        1 < e.options.length && (i = a.option1,
        Shopify.optionsMap[i] = Shopify.optionsMap[i] || [],
        Shopify.optionsMap[i].push(a.option2),
        Shopify.optionsMap[i] = Shopify.uniq(Shopify.optionsMap[i])),
        3 === e.options.length && (i = a.option1 + " / " + a.option2,
        Shopify.optionsMap[i] = Shopify.optionsMap[i] || [],
        Shopify.optionsMap[i].push(a.option3),
        Shopify.optionsMap[i] = Shopify.uniq(Shopify.optionsMap[i])))
    }
    Shopify.theme.updateOptionsInSelector(0, t),
    1 < e.options.length && Shopify.theme.updateOptionsInSelector(1, t),
    3 === e.options.length && Shopify.theme.updateOptionsInSelector(2, t),
    $(t + " .single-option-selector:eq(0)").change(function() {
        return Shopify.theme.updateOptionsInSelector(1, t),
        3 === e.options.length && Shopify.theme.updateOptionsInSelector(2, t),
        !0
    }),
    $(t + " .single-option-selector:eq(1)").change(function() {
        return 3 === e.options.length && Shopify.theme.updateOptionsInSelector(2, t),
        !0
    })
}
,
Shopify.theme.applyMasonry = function(e, t) {
    var o = $(".gallery-type--masonry");
    0 < o.length && o.imagesLoaded().progress(function() {
        o.isotope({
            layoutMode: "masonry",
            itemSelector: e,
            percentPosition: !0,
            masonry: {
                columnWidth: e,
                gutter: t
            }
        })
    })
}
,
Shopify.theme.applyHorizontalMasonry = function() {
    $(".gallery-type--horizontal-masonry").find(".gallery__item").each(function(e) {
        var t, o, i = $(this);
        setTimeout(function() {
            t = i.find("img").width(),
            o = i.find("img").height(),
            i.css("flex-basis", 200 * t / o),
            i.css("flex-grow", 200 * t / o),
            i.find("i").css("padding-bottom", o / t * 100 + "%")
        }, 100)
    })
}
,
Shopify.theme.mobileMenu = {
    init: function() {
        this.$mobileMenuToggle = $("[data-show-mobile-menu]"),
        this.$mobileMenuIcon = $(".mobile-menu__toggle-icon"),
        this.$mobileDropDownToggle = $(".mobile-menu .close-dropdown"),
        $("body").on("click", '[data-show-mobile-menu="false"]', function() {
            Shopify.theme.mobileMenu.open()
        }),
        $("body").on("click", '[data-show-mobile-menu="true"]', function() {
            Shopify.theme.mobileMenu.close()
        }),
        !0 === Shopify.theme.jsHeader.enable_sticky && this.enableSticky()
    },
    open: function() {
        var e = window.scrollY;
        $("body").attr("data-current-position", e);
        var t = 0
          , e = parseInt($(".mobile-header").height());
        void 0 !== Shopify.theme.jsAnnouncementBar && Shopify.theme.jsAnnouncementBar.enable_sticky && (t = Shopify.theme.jsAnnouncementBar.getAnnouncementHeight()),
        $(".mobile-menu").css({
            height: "calc(100vh)"
        }),
        this.$mobileMenuIcon.addClass("is-active"),
        $(".mobile-menu-overlay").addClass("is-visible"),
        $("[data-show-mobile-menu]").attr("data-show-mobile-menu", !0),
        void 0 !== Shopify.theme.jsAjaxCart && (Shopify.theme.jsAjaxCart.hideMiniCart(),
        Shopify.theme.jsAjaxCart.hideDrawer()),
        setTimeout(function() {
            $("body").addClass("mobile-menu--opened")
        }, 10)
    },
    close: function() {
        $("body").removeClass("mobile-menu--opened");
        var e = $("body").data("current-position");
        window.scrollTo(0, e),
        this.$mobileMenuIcon.removeClass("is-active"),
        $(".mobile-menu-overlay").removeClass("is-visible"),
        $("[data-show-mobile-menu]").attr("data-show-mobile-menu", !1)
    },
    enableSticky: function() {
        Shopify.theme.jsHeader.disableSticky();
        var t = $("#mobile-header")
          , e = 0;
        void 0 !== Shopify.theme.jsAnnouncementBar && Shopify.theme.jsAnnouncementBar.enable_sticky && (e = Shopify.theme.jsAnnouncementBar.getAnnouncementHeight()),
        t.addClass("sticky--enabled"),
        t.sticky({
            wrapperClassName: "header-sticky-wrapper",
            zIndex: 40,
            topSpacing: e
        }).on("sticky-start", function() {
            var e = $("#mobile-header").height() + $(".announcement-sticky-wrapper").height();
            t.parent().parent().find(".search-overlay").addClass("sticky-search").css("top", e + "px")
        }).on("sticky-end", function() {
            t.parent().parent().find(".search-overlay").removeClass("sticky-search").css("top", "100%"),
            setTimeout(function() {
                t.sticky("update")
            }, 250),
            t.find(".sticky-menu-wrapper").removeClass("is-visible")
        })
    },
    disableSticky: function() {
        var e = $("#mobile-header");
        e.unstick(),
        e.removeClass("sticky--enabled"),
        setTimeout(function() {
            $(".header-sticky-wrapper").css("height", "auto")
        }, 250)
    },
    unload: function(e) {
        $("[data-mobilemenu-toggle]").off(),
        $(".mobile-menu__toggle-icon").off(),
        $(".mobile-menu .close-dropdown").off(),
        this.disableSticky()
    }
},
Shopify.theme.objectFitImages = {
    init: function() {
        objectFitImages(),
        "color" == Shopify.theme_settings.image_loading_style && this.calculateAspectRatio()
    },
    calculateAspectRatio: function() {
        for (var e = document.querySelectorAll("[data-calculate-aspect-ratio]"), t = 0; t < e.length; t++) {
            var o = e[t].firstElementChild
              , i = o.getAttribute("width") / o.getAttribute("height")
              , i = o.height * i;
            e[t].style.maxWidth = "".concat(Math.floor(i), "px")
        }
        document.addEventListener("lazyloaded", function(e) {
            e.srcElement.parentNode.style.background = "none"
        })
    },
    unload: function() {}
},
void 0 === Shopify && (Shopify = {}),
Shopify.each = function(e, t) {
    for (var o = 0; o < e.length; o++)
        t(e[o], o)
}
,
Shopify.map = function(e, t) {
    for (var o = [], i = 0; i < e.length; i++)
        o.push(t(e[i], i));
    return o
}
,
Shopify.arrayIncludes = function(e, t) {
    for (var o = 0; o < e.length; o++)
        if (e[o] == t)
            return !0;
    return !1
}
,
Shopify.uniq = function(e) {
    for (var t = [], o = 0; o < e.length; o++)
        Shopify.arrayIncludes(t, e[o]) || t.push(e[o]);
    return t
}
,
Shopify.isDefined = function(e) {
    return void 0 !== e
}
,
Shopify.getClass = function(e) {
    return Object.prototype.toString.call(e).slice(8, -1)
}
,
Shopify.extend = function(e, t) {
    function o() {}
    o.prototype = t.prototype,
    e.prototype = new o,
    (e.prototype.constructor = e).baseConstructor = t,
    e.superClass = t.prototype
}
,
Shopify.locationSearch = function() {
    return window.location.search
}
,
Shopify.locationHash = function() {
    return window.location.hash
}
,
Shopify.replaceState = function(e) {
    window.history.replaceState({}, document.title, e)
}
,
Shopify.urlParam = function(e) {
    e = RegExp("[?&]" + e + "=([^&#]*)").exec(Shopify.locationSearch());
    return e && decodeURIComponent(e[1].replace(/\+/g, " "))
}
,
Shopify.newState = function(e, t) {
    return (Shopify.urlParam(e) ? Shopify.locationSearch().replace(RegExp("(" + e + "=)[^&#]+"), "$1" + t) : "" === Shopify.locationSearch() ? "?" + e + "=" + t : Shopify.locationSearch() + "&" + e + "=" + t) + Shopify.locationHash()
}
,
Shopify.setParam = function(e, t) {
    Shopify.replaceState(Shopify.newState(e, t))
}
,
Shopify.Product = function(e) {
    Shopify.isDefined(e) && this.update(e)
}
,
Shopify.Product.prototype.update = function(e) {
    for (var t in e)
        this[t] = e[t]
}
,
Shopify.Product.prototype.optionNames = function() {
    return "Array" == Shopify.getClass(this.options) ? this.options : []
}
,
Shopify.Product.prototype.optionValues = function(o) {
    if (!Shopify.isDefined(this.variants))
        return null;
    var e = Shopify.map(this.variants, function(e) {
        var t = "option" + (o + 1);
        return null == e[t] ? null : e[t]
    });
    return null == e[0] ? null : Shopify.uniq(e)
}
,
Shopify.Product.prototype.getVariant = function(i) {
    var a = null;
    return i.length != this.options.length || Shopify.each(this.variants, function(e) {
        for (var t = !0, o = 0; o < i.length; o++)
            e["option" + (o + 1)] != i[o] && (t = !1);
        return 1 == t ? void (a = e) : void 0
    }),
    a
}
,
Shopify.Product.prototype.getVariantById = function(e) {
    for (var t = 0; t < this.variants.length; t++) {
        var o = this.variants[t];
        if (e == o.id)
            return o
    }
    return null
}
,
Shopify.money_format = "${{amount}}",
Shopify.formatMoney = function(e, t) {
    function a(e, t) {
        return void 0 === e ? t : e
    }
    function o(e, t, o, i) {
        if (t = a(t, 2),
        o = a(o, ","),
        i = a(i, "."),
        isNaN(e) || null == e)
            return 0;
        e = (e = (e / 100).toFixed(t)).split(".");
        return e[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + o) + (e[1] ? i + e[1] : "")
    }
    "string" == typeof e && (e = e.replace(".", ""));
    var i = ""
      , n = /\{\{\s*(\w+)\s*\}\}/
      , t = t || this.money_format;
    switch (t.match(n)[1]) {
    case "amount":
        i = o(e, 2);
        break;
    case "amount_no_decimals":
        i = o(e, 0);
        break;
    case "amount_with_comma_separator":
        i = o(e, 2, ".", ",");
        break;
    case "amount_with_apostrophe_separator":
        i = o(e, 2);
        break;
    case "amount_no_decimals_with_comma_separator":
        i = o(e, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        i = o(e, 0, ".", " ")
    }
    return t.replace(n, i)
}
,
Shopify.OptionSelectors = function(e, t) {
    return this.selectorDivClass = "selector-wrapper",
    this.selectorClass = "single-option-selector",
    this.variantIdFieldIdSuffix = "-variant-id",
    this.variantIdField = null,
    this.historyState = null,
    this.selectors = [],
    this.domIdPrefix = e,
    this.product = new Shopify.Product(t.product),
    this.onVariantSelected = Shopify.isDefined(t.onVariantSelected) ? t.onVariantSelected : function() {}
    ,
    this.replaceSelector(e),
    this.initDropdown(),
    t.enableHistoryState && (this.historyState = new Shopify.OptionSelectors.HistoryState(this)),
    !0
}
,
Shopify.OptionSelectors.prototype.initDropdown = function() {
    var e, t = {
        initialLoad: !0
    };
    this.selectVariantFromDropdown(t) || (e = this,
    setTimeout(function() {
        e.selectVariantFromParams(t) || e.fireOnChangeForFirstDropdown.call(e, t)
    }))
}
,
Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function(e) {
    this.selectors[0].element.onchange(e)
}
,
Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function(e) {
    this.selectVariantFromParams(e) || this.selectVariantFromDropdown(e)
}
,
Shopify.OptionSelectors.prototype.replaceSelector = function(e) {
    var t = document.getElementById(e)
      , o = t.parentNode;
    Shopify.each(this.buildSelectors(), function(e) {
        o.insertBefore(e, t)
    }),
    t.style.display = "none",
    this.variantIdField = t
}
,
Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function(e) {
    var t = document.getElementById(this.domIdPrefix).querySelector("[selected]");
    if (!(t = t || document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')))
        return !1;
    t = t.value;
    return this.selectVariant(t, e)
}
,
Shopify.OptionSelectors.prototype.selectVariantFromParams = function(e) {
    var t = Shopify.urlParam("variant");
    return this.selectVariant(t, e)
}
,
Shopify.OptionSelectors.prototype.selectVariant = function(e, t) {
    var o = this.product.getVariantById(e);
    if (null == o)
        return !1;
    for (var i = 0; i < this.selectors.length; i++) {
        var a = this.selectors[i].element
          , n = o[a.getAttribute("data-option")];
        null != n && this.optionExistInSelect(a, n) && (a.value = n)
    }
    return "undefined" != typeof jQuery ? jQuery(this.selectors[0].element).trigger("change", t) : this.selectors[0].element.onchange(t),
    !0
}
,
Shopify.OptionSelectors.prototype.optionExistInSelect = function(e, t) {
    for (var o = 0; o < e.options.length; o++)
        if (e.options[o].value == t)
            return !0
}
,
Shopify.OptionSelectors.prototype.insertSelectors = function(e, t) {
    Shopify.isDefined(t) && this.setMessageElement(t),
    this.domIdPrefix = "product-" + this.product.id + "-variant-selector";
    var o = document.getElementById(e);
    Shopify.each(this.buildSelectors(), function(e) {
        o.appendChild(e)
    })
}
,
Shopify.OptionSelectors.prototype.buildSelectors = function() {
    for (var e = 0; e < this.product.optionNames().length; e++) {
        var t = new Shopify.SingleOptionSelector(this,e,this.product.optionNames()[e],this.product.optionValues(e));
        t.element.disabled = !1,
        this.selectors.push(t)
    }
    var i = this.selectorDivClass
      , a = this.product.optionNames();
    return Shopify.map(this.selectors, function(e) {
        var t, o = document.createElement("div");
        return o.setAttribute("class", i),
        1 < a.length && ((t = document.createElement("label")).htmlFor = e.element.id,
        t.innerHTML = e.name,
        o.appendChild(t)),
        o.appendChild(e.element),
        o
    })
}
,
Shopify.OptionSelectors.prototype.selectedValues = function() {
    for (var e = [], t = 0; t < this.selectors.length; t++) {
        var o = this.selectors[t].element.value;
        e.push(o)
    }
    return e
}
,
Shopify.OptionSelectors.prototype.updateSelectors = function(e, t) {
    var o = this.selectedValues()
      , o = this.product.getVariant(o);
    o ? (this.variantIdField.disabled = !1,
    this.variantIdField.value = o.id) : this.variantIdField.disabled = !0,
    this.onVariantSelected(o, this, t),
    null != this.historyState && this.historyState.onVariantChange(o, this, t)
}
,
Shopify.OptionSelectorsFromDOM = function(e, t) {
    var o = t.optionNames || []
      , i = t.priceFieldExists || !0
      , a = t.delimiter || "/"
      , a = this.createProductFromSelector(e, o, i, a);
    t.product = a,
    Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, e, t)
}
,
Shopify.extend(Shopify.OptionSelectorsFromDOM, Shopify.OptionSelectors),
Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(e, a, n, r) {
    Shopify.isDefined(n) || (n = !0),
    Shopify.isDefined(r) || (r = "/");
    var t = document.getElementById(e)
      , e = t.childNodes
      , s = (t.parentNode,
    a.length)
      , l = [];
    Shopify.each(e, function(e, t) {
        var o, i;
        1 == e.nodeType && "option" == e.tagName.toLowerCase() && (o = e.innerHTML.split(new RegExp("\\s*\\" + r + "\\s*")),
        0 == a.length && (s = o.length - (n ? 1 : 0)),
        i = o.slice(0, s),
        o = n ? o[s] : "",
        e.getAttribute("value"),
        i = {
            available: !e.disabled,
            id: parseFloat(e.value),
            price: o,
            option1: i[0],
            option2: i[1],
            option3: i[2]
        },
        l.push(i))
    });
    var o = {
        variants: l
    };
    if (0 == a.length) {
        o.options = [];
        for (var i = 0; i < s; i++)
            o.options[i] = "option " + (i + 1)
    } else
        o.options = a;
    return o
}
,
Shopify.SingleOptionSelector = function(o, i, e, t) {
    this.multiSelector = o,
    this.values = t,
    this.index = i,
    this.name = e,
    this.element = document.createElement("select");
    for (var a = 0; a < t.length; a++) {
        var n = document.createElement("option");
        n.value = t[a],
        n.innerHTML = t[a],
        this.element.appendChild(n)
    }
    return this.element.setAttribute("class", this.multiSelector.selectorClass),
    this.element.setAttribute("data-option", "option" + (i + 1)),
    this.element.id = o.domIdPrefix + "-option-" + i,
    this.element.onchange = function(e, t) {
        o.updateSelectors(i, t = t || {})
    }
    ,
    !0
}
,
Shopify.Image = {
    preload: function(e, t) {
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            this.loadImage(this.getSizedImageUrl(i, t))
        }
    },
    loadImage: function(e) {
        (new Image).src = e
    },
    switchImage: function(e, t, o) {
        var i;
        e && t && (i = this.imageSize(t.src),
        i = this.getSizedImageUrl(e.src, i),
        o ? o(i, e, t) : t.src = i)
    },
    imageSize: function(e) {
        e = e.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);
        return null != e ? e[1] : null
    },
    getSizedImageUrl: function(e, t) {
        if (null == t)
            return e;
        if ("master" == t)
            return this.removeProtocol(e);
        var o = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (null == o)
            return null;
        e = e.split(o[0]),
        o = o[0];
        return this.removeProtocol(e[0] + "_" + t + o)
    },
    removeProtocol: function(e) {
        return e.replace(/http(s)?:/, "")
    }
},
Shopify.OptionSelectors.HistoryState = function(e) {
    this.browserSupports() && this.register(e)
}
,
Shopify.OptionSelectors.HistoryState.prototype.register = function(t) {
    window.addEventListener("popstate", function(e) {
        t.selectVariantFromParamsOrDropdown({
            popStateCall: !0
        })
    })
}
,
Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function(e, t, o) {
    this.browserSupports() && (!e || o.initialLoad || o.popStateCall || Shopify.setParam("variant", e.id))
}
,
Shopify.OptionSelectors.HistoryState.prototype.browserSupports = function() {
    return window.history && window.history.replaceState
}
,
Shopify.theme.productMedia = {
    models: [],
    setupMedia: function() {
        var o = {
            controls: ["zoom-in", "zoom-out", "fullscreen"],
            focusOnPlay: !1
        };
        $("model-viewer").each(function(e, t) {
            t = new Shopify.ModelViewerUI(t,o),
            Shopify.theme.productMedia.models.push(t)
        }),
        $(".product-gallery__model model-viewer").on("mousedown", function() {
            Shopify.theme.productMedia.hideModelIcon(this)
        })
    },
    showModelIcon: function(e) {
        $(e).find(".button--poster, .model-icon-button-control").show()
    },
    hideModelIcon: function(e) {
        $(e).find(".button--poster, .model-icon-button-control").hide()
    }
},
Shopify.theme.quantityBox = {
    init: function() {
        $("body").on("click", "[data-update-quantity]:not([disabled])", function() {
            Shopify.theme.quantityBox.updateQuantity($(this))
        }),
        $("body").on("keyup keydown change", ".quantity-input", function() {
            Shopify.theme.quantityBox.updateQuantity($(this))
        })
    },
    updateQuantityControls: function(e) {
        var t = e.parents(".product-quantity-box")
          , o = $(".quantity-input", t)
          , i = parseInt(o.val())
          , e = 1e17;
        null != o.attr("max") && (e = o.attr("max")),
        1 === i || 0 === i ? ($(".quantity-minus", t).attr("disabled", !0),
        $(".quantity-plus", t).attr("disabled", !1)) : e <= i ? ($(".quantity-plus", t).attr("disabled", !0),
        $(".quantity-minus", t).attr("disabled", !1),
        o.val(e)) : ($(".quantity-minus", t).attr("disabled", !1),
        $(".quantity-plus", t).attr("disabled", !1))
    },
    updateQuantity: function(e) {
        var t = e.parents(".product-quantity-box")
          , o = $(".quantity-input", t)
          , i = (t.parents("[data-line-item]").data("line-item"),
        parseInt(o.val()))
          , a = 1e17
          , n = o.attr("min") || 0;
        return null != o.attr("max") && (a = o.attr("max")),
        isNaN(i) || i < n ? (o.val(n),
        !1) : a < i ? (o.val(a),
        !1) : ("plus" === e.data("update-quantity") ? i < a && o.val(++i) : "minus" === e.data("update-quantity") && n < i && o.val(--i),
        e.parents("[data-line-item]").length && (t = t.data("line-item-key"),
        Shopify.theme.quantityBox.updateCart(t, i)),
        void Shopify.theme.quantityBox.updateQuantityControls(e))
    },
    updateCart: function updateCart(lineID, quantity) {
        $(".quantity-warning").removeClass("animated bounceIn"),
        $.ajax({
            type: "POST",
            url: "/cart/change.js",
            data: "quantity=".concat(quantity, "&line=").concat(lineID),
            dataType: "json",
            success: function(e) {
              Shopify.getCart(function(cart) {
                var t = 0
                  , o = ""
                  , i = $('[data-line-item="'.concat(lineID, '"]')).find(".quantity-warning")
                  , a = $('[data-line-item="'.concat(lineID, '"]')).find(".product-quantity-box")
                  , n = $(".cart__form").data("currentDiscount")
                  , r = lineID - 1;
                void 0 !== e.items[r] && (t = e.items[r].quantity);
                for (var s = 0; s < e.items.length; s++)
                    s != r && e.items[s].id == e.items[r].id && (t += e.items[s].quantity);
                0 < quantity && quantity != t && e.total_discount <= n && (1 == t ? (o = Shopify.translation.product_count_one,
                i.text("".concat(t, " ").concat(o)),
                $(".quantity-minus", a).attr("disabled", !0)) : (o = Shopify.translation.product_count_other,
                i.text("".concat(t, " ").concat(o)))),
                $(".cart__form").data("currentDiscount", e.total_discount),
                i.addClass("animated bounceIn"),
                void 0 !== Shopify.theme.jsAjaxCart && Shopify.theme.jsAjaxCart.updateView(),
                Shopify.theme.jsCart && Shopify.theme.jsCart.updateView(e, lineID)
               }); 
            },
            error: function error(XMLHttpRequest, textStatus) {
                var response = eval("(" + XMLHttpRequest.responseText + ")")
                  , response = response.description
            }
        })
    },
    unload: function(e) {
        $(".quantity-input").off(),
        $("[data-update-quantity]").off()
    }
},
Shopify.theme.queryParameters = {},
location.search.length)
    for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split("&"); i < aCouples.length; i++)
        aKeyValue = aCouples[i].split("="),
        1 < aKeyValue.length && (Shopify.theme.queryParameters[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]));
Shopify.theme.responsiveVideo = {
    init: function() {
        $('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function(e, t) {
            t = $(t);
            t.parents(".plyr__video-wrapper").length || t.parents(".lazyframe").length || t.wrap('<div class="lazyframe" data-ratio="16:9"></div>')
        })
    }
};
var selectCallback = function(i, e) {
    var t, o = $(".product-" + e.product.id), a = $(".notify-form-" + e.product.id), n = $(".product_form, .shopify-product-form", o), r = n.data("variant-inventory"), s = n.find(".quantity-input"), l = $(".notify_form__inputs"), c = Shopify.translation.notify_form_email, d = Shopify.translation.contact_email, p = Shopify.translation.notify_form_send, e = l.data("url");
    i ? null != i.title && (t = i.title.replace(/"/g, "&quot;"),
    t = Shopify.translation.email_content + t + " | " + e + "?variant=" + i.id) : t = Shopify.translation.email_content + " | " + e,
    d = l.hasClass("customer--true") ? (e = Shopify.translation.customer_email,
    '\n      <input type="hidden" class="notify_email input" name="contact[email]" id="contact[email]" value="'.concat(e, '" />')) : '\n      <input required type="email" class="notify_email input" name="contact[email]" id="contact[email]" placeholder="'.concat(c, '" value="').concat(d, '" />');
    d = '\n    <input type="hidden" name="challenge" value="false" />\n    <input type="hidden" name="contact[body]" class="notify_form_message" data-body="'.concat(t, '" value="').concat(t, '" />\n    <div class="field has-addons">\n      <div class="control">\n        ').concat(d, '\n      </div>\n      <div class="control">\n        <input class="action_button button" type="submit" value="').concat(p, '" />\n      </div>\n    </div>');
    if (i && i.featured_image && o.is(":visible") && $(".product-gallery__main, .js-gallery-modal", o).each(function() {
        var e = $(this)
          , t = Flickity.data(this)
          , o = $("img[data-image-id=".concat(i.featured_media.id, "]")).data("index");
        e.is(":visible") && null != t && t.select(o, !1, !0)
    }),
    n.find("[data-variant-selector]").trigger("selectedVariantChanged"),
    i)
        if (r && r.forEach(function(e) {
            e.id === i.id && (i.inventory_quantity = e.inventory_quantity,
            i.inventory_management = e.inventory_management,
            i.inventory_policy = e.inventory_policy)
        }),
        $(".sku", o).text(i.sku),
        Shopify.theme_settings.product_form_style)
            for (var u = 0, h = i.options.length; u < h; u++) {
                var f = n.find('.swatch[data-option-index="' + escape(u) + '"] :radio[value="' + i.options[u].replace(/\"/g, '\\"') + '"]');
                f.length && (f.get(0).checked = !0)
            }
        else
            $(".notify_form_message", o).attr("value", $(".notify_form_message", o).data("body") + " - " + i.title);
    i && 1 == i.available ? (i.price < i.compare_at_price ? ($(".was-price", o).html('<span class="money">' + Shopify.formatMoney(i.compare_at_price, "") + "</span>"),
    $(".current_price", o).parent().addClass("sale")) : ($(".was-price", o).html(""),
    $(".savings", o).html(""),
    $(".current_price", o).parent().removeClass("sale")),
    i.inventory_management && 0 < i.inventory_quantity ? (Shopify.theme_settings.display_inventory_left && (p = Shopify.translation.product_count_other,
    1 == i.inventory_quantity && (p = Shopify.translation.product_count_one),
    r = Shopify.theme_settings.inventory_threshold,
    i.inventory_quantity <= r ? $(".items_left", o).html(i.inventory_quantity + " " + p) : $(".items_left", o).html("")),
    "deny" == i.inventory_policy && ($("[data-max-inventory-management]", o).attr("max", i.inventory_quantity),
    Shopify.theme.quantityBox.updateQuantityControls(s))) : ($(".items_left", o).text(""),
    $("[data-max-inventory-management]", o).removeAttr("max")),
    $(".sold_out", o).text(""),
    $(".product_form-cart-warning", o).text(""),
    0 < i.price ? $(".current_price", o).html('<span class="money">' + Shopify.formatMoney(i.price, $("body").data("money-format")) + "</span>") : $(".current_price", o).html(Shopify.translation.free_price_text),
    $("[data-add-to-cart-trigger]", o).removeClass("disabled").removeAttr("disabled").find("span:not(.icon)").text($("[data-add-to-cart-trigger]", o).data("label")),
    $(".shopify-payment-button", o).show(),
    $(".purchase-details__quantity", o).show(),
    a.hide(),
    l.empty(),
    l.append(d),
    Currency.show_multiple_currencies && Shopify.theme.currencyConverter.convertCurrencies()) : (s = i ? Shopify.translation.soldOut : Shopify.translation.unavailable,
    $(".was-price", o).text(""),
    $(".savings", o).text(""),
    $(".current_price", o).text(""),
    $(".items_left", o).text(""),
    $("[data-max-inventory-management]", o).removeAttr("max"),
    $(".sold_out", o).text(s),
    $("[data-add-to-cart-trigger]", o).addClass("disabled").attr("disabled", "disabled").find("span:not(.icon)").text(s),
    $(".shopify-payment-button", o).hide(),
    $(".purchase-details__quantity", o).hide(),
    a.hide(),
    l.empty(),
    i && !i.available && (a.fadeIn(),
    l.empty(),
    l.append(d)))
}, globalQuickShopProduct;
function isScreenSizeLarge() {
    if (Shopify.media_queries.large.matches)
        return !0
}
Shopify.theme.predictiveSearch = {
    vars: {
        term: "",
        searchPath: Shopify.routes.search_url,
        displayTimer: ""
    },
    init: function() {
        this.unload(),
        $("[data-show-search-trigger], [data-autocomplete-true] input").on("click touchstart", function(e) {
            var t;
            isScreenSizeLarge() || (e.stopPropagation(),
            t = $(this).closest("form").find('[name="type"]').val(),
            e = $(document).scrollTop(),
            Shopify.theme.predictiveSearch.showMobileSearch(t, e))
        }),
        $("[data-autocomplete-true]").on("focus", function() {
            $(this).parents("[data-autocomplete-true]").find(".search__results-wrapper").show()
        }),
        $(document).on("click focusout", function(e) {
            Shopify.media_queries.large.matches && 0 === $(e.target).parents(".search-form").length && $("[data-autocomplete-true] .search__results-wrapper").hide().removeClass("results-found")
        }),
        $("[data-autocomplete-true] form").on("submit", function(e) {
            e.preventDefault();
            var t = $(this).find('input[name="q"]').val()
              , e = encodeURI(t)
              , t = Shopify.theme_settings.search_option;
            0 < $(this).find('[name="type"]').length && (t = $(this).find('[name="type"]').val()),
            window.location.href = null == e ? Shopify.routes.search_url + "?type=" + t : Shopify.theme.predictiveSearch.vars.searchPath + "?type=" + t + "&q=" + e + "*"
        }),
        $("[data-autocomplete-true] form").each(function() {
            var e = $(this)
              , t = e.find('input[name="q"]')
              , o = '\n        <div class="search__results-wrapper">\n          <h2 class="vertical-search__title">\n            '.concat(Shopify.translation.top_suggestions, '\n          </h2>\n          <ul class="search__results"></ul>\n        </div>\n      ');
            $(o).appendTo(e),
            t.attr("autocomplete", "off").on("input", function() {
                clearTimeout(Shopify.theme.predictiveSearch.vars.displayTimer),
                3 < $(this).val().length ? (Shopify.theme.predictiveSearch.vars.term = $(this).val(),
                Shopify.theme.predictiveSearch.getResults(Shopify.theme.predictiveSearch.vars.term, e)) : $("[data-autocomplete-true] .search__results-wrapper").hide().removeClass("results-found")
            })
        })
    },
    getResults: function(e, t) {
        var o = Shopify.theme_settings.search_option;
        0 < t.find('[name="type"]').length && (o = t.find('[name="type"]').val()),
        jQuery.getJSON("/search/suggest.json", {
            q: e,
            resources: {
                type: o,
                limit: Shopify.theme_settings.search_to_display,
                options: {
                    unavailable_products: "last",
                    fields: "title,body,variants.title,vendor,product_type,tag,variants.sku"
                }
            }
        }).done(function(e) {
            var e = [e.resources.results.products, e.resources.results.pages, e.resources.results.articles]
              , o = [];
            $.each(e, function(e, t) {
                void 0 !== t && 0 < t.length && o.push(t)
            }),
            Shopify.theme.predictiveSearch.vars.displayTimer = setTimeout(function() {
                Shopify.theme.predictiveSearch.displayResults(o[0], t)
            }, 500)
        })
    },
    displayResults: function(e, t) {
        var o = t.find(".search__results-wrapper")
          , n = t.find(".search__results")
          , i = Shopify.theme_settings.search_option;
        o.show(),
        n.empty(),
        0 < t.find('[name="type"]').length && (i = t.find('[name="type"]').val()),
        e && 0 < e.length ? ($.each(e, function(e, t) {
            var o, i = $('<a tabindex="0"></a>').attr("href", t.url);
            function a(e) {
                return "money_with_currency_format" === Currency.display_format ? '<span class="money"> '.concat(Currency.symbol + e, " ").concat(Currency.iso_code, " </span>") : '<span class="money"> '.concat(Currency.symbol + e, " </span>")
            }
            "/" !== Shopify.routes.root_url && (i = $('<a tabindex="0"></a>').attr("href", Shopify.routes.root_url + t.url)),
            t.price ? (o = !0 === t.available ? t.compare_at_price_max > t.price_max || t.compare_at_price_min > t.price_min ? "".concat(a(t.price), ' <span class="was-price">').concat(a(t.compare_at_price_max), "</span>") : 0 < t.price ? (t.price_min != t.price_max ? "".concat(Shopify.translation.from, " ") : "").concat(a(t.price)) : Shopify.theme_settings.free : Shopify.translation.soldOut,
            t.image && i.append('<div class="thumbnail"><img class="lazyload transition--'.concat(Shopify.theme_settings.image_loading_style, '" src="').concat(Shopify.theme.addImageDimension(t.image, "_300x"), '" /></div>')),
            i.append('<div class="description"><strong>'.concat(t.title, '</strong><br><span class="item-pricing price">').concat(o, "</span></div>"))) : t.summary_html ? ("NULL" != t.image && i.append('<div class="thumbnail"><img class="lazyload transition--'.concat(Shopify.theme_settings.image_loading_style, '" src="').concat(Shopify.theme.addImageDimension(t.image, "_300x"), '" /></div>')),
            i.append('<div class="description"><strong>'.concat(t.title, '</strong><br><span class="item-description">\'').concat(t.summary_html.replace(/(<([^>]+)>)/gi, "").slice(0, 25), "</span></div>"))) : t.published_at && i.append('<div class="description"><strong>'.concat(t.title, '</strong><br><span class="item-description">').concat(t.body.replace(/(<([^>]+)>)/gi, "").slice(0, 25), "</span></div>")),
            i.wrap('<li class="item-result"></li>'),
            n.append(i.parent()),
            (Currency.show_multiple_currencies || Currency.native_multi_currency) && Shopify.theme.currencyConverter.init()
        }),
        n.prepend('<li class="all-results"><span class="see-all"><a href="'.concat(this.vars.searchPath, "?type=").concat(i, "&q=").concat(this.vars.term, '*"> ').concat(Shopify.translation.all_results, " ").concat(Shopify.icons.right_caret, "</a></span></li>")),
        n.parents(".search__results-wrapper").addClass("results-found")) : (i = '<li class="item-result"><span class="no-results">'.concat(Shopify.translation.no_results, "</span></li>"),
        n.append(i),
        n.parents(".search__results-wrapper").removeClass("results-found")),
        t.parents(".vertical-header__content").length && "vertical" === Shopify.theme.jsHeader.header_layout && Shopify.theme.predictiveSearch.alignVerticalSearch(),
        n.show()
    },
    showMobileSearch: function(e, t) {
        $("body").css("max-height", window.innerHeight),
        $(".mobile-search").fadeIn(200),
        /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints ? $(".mobile-search input#q").focus() : setTimeout(function() {
            $(".mobile-search input#q").focus()
        }, 205),
        document.body.style.position = "fixed",
        document.body.style.top = "-" + t + "px",
        $(".mobile-search").css("top", t);
        var o = window.innerHeight - 46;
        $(".mobile-search .search__results-wrapper").css("max-height", o),
        e ? $('.mobile-search [name="type"]').val(e) : $('.mobile-search [name="type"]').val(Shopify.theme_settings.search_option),
        $(".search-form .close-search").on("click touchstart", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            Shopify.theme.predictiveSearch.hideMobileSearch(t),
            $("[data-autocomplete-true] .search__results-wrapper").hide().removeClass("results-found")
        }),
        $(".search-form .submit-search").on("click touchstart", function(e) {
            $(this).parents("form").submit()
        })
    },
    hideMobileSearch: function(e) {
        $("body").css("max-height", "none"),
        document.body.style.position = "",
        document.body.style.top = "",
        window.scrollTo(0, e),
        $(".mobile-search").fadeOut(200),
        $('.mobile-search [name="q"]').val(""),
        $("body").off("focus", ".search-form .close-search"),
        $("body").off("focus", ".search-form .submit-search")
    },
    alignVerticalSearch: function() {
        var e = $(".header--vertical .search__results")
          , t = $(".header--vertical").innerWidth();
        e.parents(".search__results-wrapper").css({
            position: "fixed",
            left: t,
            top: "0"
        })
    },
    unload: function() {
        $("body").off("focus", "[data-autocomplete-true] input"),
        $('input[name="q"]').off(),
        $('[data-dropdown-rel="search"], [data-autocomplete-true] input').off(),
        $(".search__results-wrapper").remove()
    }
},
Shopify.theme.scrollToTop = function(e, t) {
    null != t ? $("html, body").animate({
        scrollTop: $(e).offset().top - t
    }, 1e3) : $("html, body").animate({
        scrollTop: $(e).offset().top
    }, 1e3)
}
,
Shopify.theme.tabs = {
    enableTabs: function() {
        var o = $(".tabs li, .tabs li a");
        o.on("click", function(e) {
            e.preventDefault(),
            o.removeClass("is-active active"),
            $(this).addClass("is-active");
            var t = $(this).index()
              , e = $(this).parents(".tabs").next(".tabs-content");
            e.children("li, li a").removeClass("is-active active"),
            e.children("li, li a").eq(t).addClass("is-active").show().css({
                display: "block"
            }).siblings().hide().removeClass("is-active")
        })
    },
    unload: function() {
        $(".tabs li, .tabs li a").off()
    }
},
Shopify.theme.tabs_flickity = {
    enableTabs: function() {
        var a = $(".tabs-flickity-content").flickity({
            prevNextButtons: !1,
            adaptiveHeight: !0,
            cellAlign: "left"
        })
          , o = $(".tabs-flickity").flickity({
            prevNextButtons: !1,
            pageDots: !1,
            cellAlign: "left",
            groupCells: "100%"
        });
        o.on("staticClick.flickity", function(e, t, o, i) {
            o && (a.flickity("select", i),
            $(".tab-label.is-active").removeClass("is-active"),
            $(o).addClass("is-active"))
        }),
        a.on("select.flickity", function(e, t) {
            o.flickity("select", t),
            $(".tab-label.is-active").removeClass("is-active"),
            $($(".tab-label")[t]).addClass("is-active")
        })
    }
},
Shopify.theme.thumbnail = {
    enableSwatches: function() {
        isScreenSizeLarge() && $("body").on("mouseenter", ".swatch span", function() {
            -1 == $(this).data("image").indexOf("no-image") && ($(this).parents(".thumbnail").find(".product__imageContainer img:not(.secondary)").attr("src", $(this).data("image")),
            $(this).parents(".thumbnail").find(".product__imageContainer img:not(.secondary)").attr("srcset", $(this).data("image")))
        })
    },
    showVariantImage: function() {
        isScreenSizeLarge() && ($("body").on("mouseenter", ".has-secondary-image-swap", function() {
            var e = $(this).find(".product-thumbnail-image__wrapper img")
              , t = $(this).find(".product-thumbnail-image__wrapper .video-on-hover");
            e && e.toggleClass("swap--visible"),
            t && (t.toggleClass("swap--visible"),
            Shopify.theme.video.enableVideoOnHover($(this)))
        }),
        $("body").on("mouseleave", ".has-secondary-image-swap", function() {
            var e = $(this).find(".product-thumbnail-image__wrapper img")
              , t = $(this).find(".product-thumbnail-image__wrapper .video-on-hover");
            e && e.toggleClass("swap--visible"),
            t && (t.toggleClass("swap--visible"),
            Shopify.theme.video.disableVideoOnHover($(this)))
        }))
    },
    showQuickShop: function() {
        $("body").on("click", ".js-quick-shop-link", function(e) {
            e.preventDefault();
            var o = {
                handle: $(this).data("handle"),
                product_id: $(this).data("id"),
                single_variant: $(this).attr("data-single-variant"),
                product_in_collection_url: $(this).data("url"),
                escaped_title: $(this).data("title"),
                details_text: $(this).data("details-text"),
                full_description: $(this).data("full-description"),
                regular_description: $(this).data("regular-description"),
                featured_image: $(this).data("featured-image"),
                image_array: Shopify.theme.thumbnail.createImageObjects($(this).data("images")),
                thumbnail_array: Shopify.theme.thumbnail.createImageObjects($(this).data("thumbnail-images")),
                collection_handles: $(this).data("collection-handles").trim(",").split(","),
                money_format: $("body").data("money-format")
            }
              , i = $(this).next(".js-quickshop-forms__container").find(".notify_form")
              , a = $(this).next(".js-quickshop-forms__container").find(".product_form");
            $(".fancybox-active").length || $.fancybox.open($(".js-quick-shop"), {
                baseClass: "quick-shop__lightbox product-" + o.product_id,
                hash: !1,
                infobar: !1,
                toolbar: !1,
                loop: !0,
                smallBtn: !0,
                touch: !1,
                video: {
                    autoStart: !1
                },
                mobile: {
                    preventCaptionOverlap: !1,
                    toolbar: !0
                },
                beforeLoad: function(e, t) {
                    t = t.src,
                    t = $(t).find(".quick-shop");
                    t.hasClass("content-loaded") || Shopify.theme.thumbnail.beforeOpen(o, t)
                },
                afterLoad: function(e, t) {
                    Shopify.theme.thumbnail.afterContent(a, i, o, t),
                    Shopify.theme.jsProduct.enableProductSwatches(),
                    Shopify.theme.productMedia.setupMedia(),
                    Currency.show_multiple_currencies && Shopify.theme.currencyConverter.convertCurrencies()
                },
                afterShow: function(e, t) {
                    0 < $(".tabs").length && Shopify.theme.tabs.enableTabs();
                    t = t.src;
                    $(t).find(".quick-shop").addClass("quick-shop--loaded")
                },
                beforeClose: function(e, t) {
                    t = t.src,
                    t = $(t).find(".quick-shop");
                    Shopify.theme.thumbnail.beforeClose(o, t),
                    t.removeClass("quick-shop--loaded"),
                    $("body").removeClass("model-loaded")
                }
            })
        })
    },
    beforeClose: function(e, t) {
        t.closest(".js-quick-shop").removeClass("content-loaded");
        var o = $(".quick-shop__lightbox .notify_form")
          , i = $(".quick-shop__lightbox .product_form");
        $(".js-quickshop-forms--".concat(e.product_id)).append(i),
        $(".js-quickshop-forms--".concat(e.product_id)).append(o),
        $(".js-quickshop-forms--".concat(e.product_id, " .product_form")).addClass("viewed"),
        $(".js-quickshop-forms--".concat(e.product_id, " .notify_form")).addClass("viewed"),
        $(".quick-shop .thumbnail-sticker span").empty().parent().addClass("is-hidden");
        o = t.find(".js-gallery-modal"),
        t = t.find(".js-gallery-carousel");
        t.find(".gallery-cell").off("click"),
        o.flickity("remove", $(".gallery-cell", o)),
        t.empty(),
        o.flickity("destroy");
        t = $(".js-current-price .money").text();
        $(".js-quick-shop-link[data-id=".concat(e.product_id, "]")).attr("data-initial-modal-price", t),
        $(".js-current-price, .js-was-price, .js-savings").empty(),
        !0 === o.data("enable-zoom") && o.trigger("zoom.destroy")
    },
    afterContent: function(e, t, o, i) {
      console.log(e);
        var a = i.src
          , i = $(a).find(".js-gallery-modal");
        i.closest(".js-quick-shop").addClass("content-loaded"),
        Shopify.theme.thumbnail.retrieveProductInfo(o);
        a = {
            thumbnailsEnabled: i.data("thumbnails-enabled"),
            thumbnailsSliderEnabled: i.data("thumbnails-slider-enabled"),
            thumbnailsPosition: i.data("thumbnails-position"),
            arrowsEnabled: i.data("gallery-arrows-enabled"),
            slideshowAnimation: i.data("slideshow-animation"),
            slideshowSpeed: i.data("slideshow-speed")
        };
        Shopify.theme.jsProduct.enableSlideshow(i, a),
        Shopify.theme.video.init(),
        $(".quick-shop__lightbox .js-notify-form").append(t),
        $(".quick-shop__lightbox .js-product-form").append(e),
        $(".quick-shop__lightbox .modal_price, .quick-shop__lightbox .js-notify-form").show(),
        e.hasClass("product_form_options") && !e.hasClass("viewed") && $(".select-container").length && new Shopify.OptionSelectors(e.data("select-id"),{
            product: e.data("product"),
            onVariantSelected: selectCallback,
            enableHistoryState: e.data("enable-state")
        }),
        "swatches" == Shopify.theme_settings.product_form_style && (a = e.data("product"),
        t = ".product-" + o.section_id + " .js-product_section",
        1 < e.find(".swatch_options .swatch").length && Shopify.linkOptionSelectors(a, t)),
        0 < $(".single-option-selector").length && ($(".selector-wrapper").wrap('<div class="select"></div>'),
        $("#product-form-" + o.product_id + " .select-container").children().first().removeClass("select").addClass("select-container")),
        $('.js-quick-shop select[name="id"]').trigger("change")
    },
    createImageObjects: function(e) {
        return e.split("~").map(function(e) {
            e = e.split("^");
            return {
                path: e[0],
                alt: e[1],
                id: e[2],
                width: e[3],
                mediaType: e[4]
            }
        })
    },
    beforeOpen: function(e, t) {
        Shopify.theme.thumbnail.populateGallery(e, t),
        $(".js-sale-sticker, .js-sold-out, .js-current-price, .js-was-price, .js-savings, .js-new-sticker, .js-pre-order-sticker").empty()
    },
    retrieveProductInfo: function(t) {
        $.ajax({
            dataType: "json",
            async: !1,
            cache: !1,
            url: "/products/" + t.handle + ".js",
            success: function(e) {
                e = $.extend({}, e, t),
                globalQuickShopProduct = e,
                Shopify.theme.thumbnail.updateVariant(e.variants[0].id.toString(), e)
            }
        })
    },
    populateGallery: function(a, e) {
        var n = e.find(".js-gallery-modal")
          , r = e.find(".js-gallery-carousel");
        $.each(a.image_array, function(e, t) {
            var o;
            o = "" == t.path || null == t.id ? (i = a.featured_image,
            "") : (i = t.path,
            t.alt);
            i.replace(/(\.[^.]*)$/, "_2048x2048$1").replace("http:", "");
            var i = 0 <= t.mediaType.indexOf("image") ? '\n            <div class="image__container" style="max-width: '.concat(t.width, 'px">\n              <img src="').concat(i, '" alt="').concat(o, '" data-image-id="').concat(t.id, '" data-index="').concat(e, '" />\n            </div>\n          ') : unescape(i)
              , i = $('<div class="gallery-cell">' + i + "</div>");
            n.append(i)
        }),
        0 == r.find(".gallery-cell").length && 1 < n.find(".gallery-cell").length && $.each(a.thumbnail_array, function(e, t) {
            var o, i;
            "" != t.path && (o = t.path.replace(/(\.[^.]*)$/, "_grande$1").replace("http:", ""),
            i = "",
            0 <= t.alt.indexOf("model") ? i = '<span class="icon media-badge"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 25H25V1H1V25Z" fill=""/><path class="media-badge__outline" d="M0.5 25V25.5H1H25H25.5V25V1V0.5H25H1H0.5V1V25Z" stroke="" stroke-opacity="0.05"/><g opacity="0.6"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6L19.0622 9.5V16.5L13 20L6.93782 16.5V9.5L13 6Z" stroke="" stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 20V12.6024C13.6225 12.2002 13.6225 12.2002 13.6225 12.2002L19 9V16.4082L13 20Z" fill=""/></g></svg></span>' : (0 <= t.alt.indexOf("external_video") || 0 <= t.alt.indexOf("video")) && (i = '<span class="icon media-badge"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 25H25V1H1V25Z" fill=""/><path class="media-badge__outline" d="M0.5 25V25.5H1H25H25.5V25V1V0.5H25H1H0.5V1V25Z" stroke="" stroke-opacity="0.05"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.19995 5.8V20.2L19.3999 12.5858L8.19995 5.8Z" fill="" fill-opacity="0.6"/></svg></span>'),
            t = '<img src="' + o + '" alt="' + escape(t.alt) + '" />',
            i = $('<div class="gallery-cell" tabindex="0">' + t + i + "</div>"),
            r.append(i))
        }),
        !0 === n.data("enable-zoom") && n.find("img").each(function(e, t) {
            $(t).wrap('<span class="zoom-container"></span>').css("display", "block").parent().zoom({
                touch: !1,
                magnify: 1
            })
        })
    },
    updateVariant: function(e) {
        if ("undefined" != globalQuickShopProduct) {
            var t = globalQuickShopProduct;
            $(".js-current-price").html(""),
            $(".js-was-price").html(""),
            $(".js-savings").html(""),
            $(".js-product-title").html('<a href="' + t.product_in_collection_url + '" title="' + t.escaped_title + '">' + t.title + "</a>"),
            $(".js-product-vendor").html('<a href="/collections/vendors?q=' + t.vendor + '">' + t.vendor + "</a>"),
            $(".js-full-description").html(t.full_description),
            $(".js-regular-description").html(t.regular_description);
            var o = '<a href="' + t.product_in_collection_url + '" class="secondary_button" title="' + t.escaped_title + ' Details">' + t.details_text + "</a>";
            function i(e) {
                e.id == e.id.toString() && (Shopify.theme_settings.stickers_enabled && e.compare_at_price > e.price && $(".sale-sticker span").html(Shopify.translation.sale).parent().removeClass("is-hidden"),
                e.compare_at_price > e.price ? $(".js-current-price").addClass("sale") : $(".js-current-price").removeClass("sale"),
                0 == e.available ? -1 != t.collection_handles.indexOf("coming-soon") ? Shopify.theme_settings.stickers_enabled || $(".js-sold-out").html(Shopify.translation.coming_soon) : $(".js-sold-out").html(Shopify.translation.sold_out) : $(".js-sold-out").html(""),
                1 == e.available ? ($(".js-notify-form").hide(),
                e.compare_at_price > e.price && ($(".js-was-price").html('<span class="money">' + Shopify.formatMoney(e.compare_at_price, t.money_format) + "</span>"),
                $(".js-savings").html(Shopify.translation.savings + " " + parseInt(100 * (e.compare_at_price - e.price) / e.compare_at_price) + '% (<span class="money">' + Shopify.formatMoney(e.compare_at_price - e.price, t.money_format) + "</span>)")),
                t.price == Shopify.translation.coming_soon ? $(".js-current-price").html(Shopify.translation.coming_soon) : e.price ? $(".js-current-price").html('<span class="money">' + Shopify.formatMoney(e.price, t.money_format) + "</span>") : $(".js-current-price").html(Shopify.translation.free_price_text)) : $(".js-notify-form").show())
            }
            if ($(".js-product-details").html(o),
            Shopify.theme_settings.stickers_enabled && $.each(t.collection_handles, function(e, t) {
                switch (this.toString()) {
                case "best-seller":
                    $(".best-seller-sticker span").html(Shopify.translation.best_seller).parent().removeClass("is-hidden");
                    break;
                case "coming-soon":
                    $(".coming-soon-sticker span").html(Shopify.translation.coming_soon).parent().removeClass("is-hidden");
                    break;
                case "new":
                    $(".new-sticker span").html(Shopify.translation.new_sticker).parent().removeClass("is-hidden");
                    break;
                case "pre-order":
                    $(".pre-order-sticker span").html(Shopify.translation.pre_order).parent().removeClass("is-hidden");
                    break;
                case "staff-pick":
                    $(".staff-pick-sticker span").html(Shopify.translation.staff_pick).parent().removeClass("is-hidden")
                }
            }),
            "true" == t.single_variant)
                i(t);
            else
                for (var a = 0; a < t.variants.length; a++)
                    i(t.variants[a])
        }
    }
};
var videoEl = {
    playButtonIcon: '<button type="button" class="plyr__control plyr__control--overlaid" aria-label="Play, {title}" data-plyr="play"><svg class="play-icon-button-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 20V40L39 29.4248L23 20Z" fill="#323232"/></svg><span class="plyr__sr-only">Play</span></button>',
    playButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
    muteButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
    progressInput: '<div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div></div>',
    volume: '<div class="plyr__controls__item plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
    fullscreen: '<button type="button" class="plyr__controls__item plyr__control" data-plyr="fullscreen"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span></button>'
}, videoControls = "".concat(videoEl.playButtonIcon, '<div class="plyr__controls"> ').concat(videoEl.playButton, " ").concat(videoEl.progressInput, " ").concat(videoEl.muteButton, " ").concat(videoEl.volume, " ").concat(videoEl.fullscreen, "</div>"), videoPlayers = [], videosInRecommendedProductsPlayer;
Shopify.theme.video = {
    init: function() {
        this.setupVideoPlayer()
    },
    setupVideoPlayer: function() {
        var e = document.querySelectorAll("[data-html5-video] video, [data-youtube-video]")
          , e = Plyr.setup(e, {
            controls: videoControls,
            ratio: this.aspect_ratio,
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !0
            },
            storage: {
                enabled: !1
            }
        })
          , o = $("[data-video-loop]").data("video-loop") || !1;
        $.each(e, function(e, t) {
            t.loop = o,
            videoPlayers.push(t)
        }),
        this.setupListeners()
    },
    setupListeners: function() {
        $.each(videoPlayers, function(e, t) {
            var o = t.id;
            t.isHTML5 && $(t.elements.wrapper).find("video").attr("data-plyr-video-id", o),
            t.on("play", function(e) {
                var i = e.detail.plyr;
                $.each(videoPlayers, function(e, t) {
                    var o = t.id || t.media.dataset.plyrVideoId;
                    i.id != o && t.pause()
                })
            })
        })
    },
    enableVideoOnHover: function(e) {
        var o, t = e.find("[data-html5-video]"), e = e.find("[data-youtube-video]");
        0 < t.length ? o = t.find("[data-plyr-video-id]").data("plyr-video-id") : 0 < e.length && (o = e.find("iframe").attr("id")),
        o && $.each(videoPlayers, function(e, t) {
            t.id != o && t.media.id != o || (t.toggleControls(!1),
            t.muted = !0,
            t.play())
        })
    },
    disableVideoOnHover: function(e) {
        var o, t = e.find("[data-html5-video]"), e = e.find("[data-youtube-video]");
        0 < t.length ? o = t.find("[data-plyr-video-id]").data("plyr-video-id") : 0 < e.length && (o = e.find("iframe").attr("id")),
        o && $.each(videoPlayers, function(e, t) {
            t.id != o && t.media.id != o || t.playing && t.pause()
        })
    }
},
Shopify.theme.product__metafield_video = {
    init: function() {
        this.setupVideoPlayer()
    },
    setupVideoPlayer: function() {
        $(".product__video-frame").each(function() {
            var o = $(this)
              , e = o.data("src")
              , t = o.width();
            $.getJSON("https://vimeo.com/api/oembed.json", {
                url: e,
                width: t
            }).done(function(e) {
                var t = e.height / e.width;
                o.html('<span\n          class="product__video-height"\n          style="padding-top: '.concat(t *= 100, '%;">\n        </span>')),
                o.append(e.html)
            })
        })
    }
};
var DragToScroll = function() {
    function t(e) {
        _classCallCheck(this, t),
        _defineProperty(this, "isDown", !1),
        _defineProperty(this, "startX", void 0),
        _defineProperty(this, "scrollLeft", void 0),
        this.el = e
    }
    return _createClass(t, [{
        key: "_addEventListeners",
        value: function() {
            var t = this;
            this.el.addEventListener("mousedown", function(e) {
                t.isDown = !0,
                t.startX = e.pageX - t.el.offsetLeft,
                t.scrollLeft = t.el.scrollLeft
            }),
            this.el.addEventListener("mouseleave", function() {
                t.isDown = !1
            }),
            this.el.addEventListener("mouseup", function() {
                t.isDown = !1
            }),
            this.el.addEventListener("mousemove", function(e) {
                t.isDown && (e.preventDefault(),
                e = e.pageX - t.el.offsetLeft - t.startX,
                t.el.scrollLeft = t.scrollLeft - e)
            })
        }
    }, {
        key: "init",
        value: function() {
            this._addEventListeners()
        }
    }]),
    t
}();

/*! Frontend - v0.1.0 - built on 05-07-2016 */
var Site = function (a, b, c) {
    function d() {
        return b.Modernizr.mq("(max-width: 991px)")
    }

    function e(a) {
        a = a || 0, n.animate({
            scrollTop: a
        }, s)
    }

    function f(b) {
        var c = p.find("." + b);
        return c.length || (c = a('<div class="' + b + '"></div>'), p.append(c)), c
    }

    function g() {
        var b = null;
        m.on("touchstart.setTouchedSlide", ".slick-initialized", function () {
            b = a(this)
        }).on("touchend.correctSliderPos", function (c) {
            var d = a(c.target),
                e = d.hasClass("slick-next") || d.hasClass("slick-prev"),
                f = d.closest(".slick-dots").length;
            if (b && !e && !f) {
                var g = b[0];
                b = null, g.slick.goTo(g.slick.slickCurrentSlide())
            }
        })
    }

    function h() {
        m[0].addEventListener && (p[0].addEventListener("touchmove", function (b) {
            o.is(".pinBody") && !a(b.target).closest(".scrollAble").length && b.preventDefault()
        }), q.each(function () {
            var b = a(this).get(0);
            b.addEventListener("touchstart", function (b) {
                var c = a(b.currentTarget),
                    d = c[0].scrollHeight - c.outerHeight();
                0 === c.scrollTop() && c.scrollTop(1) || c.scrollTop() === d && c.scrollTop(d - 1)
            }), b.addEventListener("touchmove", function (b) {
                var c = a(b.currentTarget),
                    d = c[0].scrollHeight - c.outerHeight();
                0 !== c.scrollTop() && c.scrollTop() !== d || b.preventDefault()
            })
        }))
    }

    function i() {
        m.on("contextmenu", function (a) {
            "IMG" === a.target.nodeName && a.preventDefault()
        })
    }

    function j() {
        o.is(".ie") && a("[placeholder]").placeholder()
    }

    function k(b, c) {
        if (!a("#" + c).length) {
            var d = document.createElement("script");
            d.id = c, d.src = b;
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(d, e)
        }
    }

    function l(a, b, c) {
        for (var d = 0; d < r.length; d++) r[d] || (b = b.toLowerCase()), a.addEventListener(r[d] + b, c, !1)
    }
    var m = a(document),
        n = a("html,body"),
        o = n.filter("html"),
        p = n.filter("body"),
        q = p.find(".scrollAble"),
        r = ["webkit", "moz", "MS", "o", ""],
        s = 800;
    return {
        fixPlaceHolder: j,
        scrollTop: e,
        protectImg: i,
        correctSliderPos: g,
        freezenBody: h,
        isMobile: d,
        initOverlay: f,
        prefixedEvent: l,
        loadApi: k
    }
}(jQuery, window);
jQuery(function () {
        var a = ($("body").is(".ar"), $(".main-menu")),
            b = ($(window), $(document));
        !Site.isMobile();
        Site.freezenBody(), Site.fixPlaceHolder(), Site.fixPlaceHolder(), Site.protectImg(), a.find("li.active").data("old-active", !0), a.find("li").on("click.expandmenu touch.expandmenu", function (b) {
            var c = $("html"),
                d = $(this),
                e = (d.find("a"), d.find(".sub-menu"));
            c.hasClass("no-touch") || !d.hasClass("has-child") || e.is(":visible") || (b.preventDefault(), b.stopPropagation(), d.siblings().each(function () {
                $(this).data("old-active") || $(this).removeClass("active")
            }), a.find(".sub-menu").hide(), d.addClass("active"), e.show())
        }), b.on("click touch", function (a) {
            var b = $("html");
            b.hasClass("no-touch") || $(a.target).is(".menu-col") || ($(".main-menu").find("li").each(function () {
                $(this).data("old-active") || $(this).removeClass("active")
            }), $(".sub-menu").hide())
        }), $("#back-to-top").on("click", function (a) {
            a.preventDefault(), $(this).blur(), Site.scrollTop(0)
        }), $(".menu-mobile .search-block .input-2").on("focus", function () {
            var a = $(this);
            a.data("can-focus") || a.blur(), a.data("can-focus", !0), a.focus()
        })
    }),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "accordion";
        d.prototype = {
            init: function () {
                var b = this,
                    c = b.element,
                    d = b.options,
                    f = c.find(d.controlSel);
                f.on("click." + e, function () {
                    var b = a(this),
                        c = b.parents(d.itemSel),
                        e = c.find(d.contentSel);
                    e.stop()[c.is("." + d.active) ? "slideUp" : "slideDown"](function () {
                        c.toggleClass(d.active)
                    })
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            active: "active",
            itemSel: ".accordion-item",
            controlSel: ".accordion-header",
            contentSel: ".accordion-container"
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "google-map",
            f = (a("body"), function (a, c) {
                if (b.google) {
                    var d = this,
                        e = new b.google.maps.LatLngBounds,
                        f = new b.google.maps.InfoWindow({
                            content: ""
                        });
                    this.vars.map = new b.google.maps.Map(a, {
                        center: c.center || c.arrLatlng[0],
                        scrollwheel: c.scrollwheel,
                        zoom: c.zoomLevel
                    });
                    for (var g = 0; g < c.arrLatlng.length; g++) {
                        var h = new b.google.maps.LatLng(c.arrLatlng[g].latlng.lat, c.arrLatlng[g].latlng.lng);
                        new b.google.maps.Marker({
                            position: h,
                            map: this.vars.map,
                            title: c.arrLatlng[g].title
                        }).addListener("click", function () {
                            f.setContent("<b>" + this.title + "</b>"), f.open(d.vars.map, this)
                        }), e.extend(h)
                    }
                    return this.vars.map.fitBounds(e), !0
                }
                return !1
            });
        d.prototype = {
            init: function () {
                var a = this,
                    b = a.options;
                b.arrLatlgn = a.element.data("arrLatlng") || [], this.vars = {
                    map: null,
                    timer: null,
                    markers: []
                }, this.vars.timer = setInterval(function () {
                    f.call(a, a.element[0], b) && clearInterval(a.vars.timer)
                }, 100)
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (b, c) {
            return this.each(function () {
                var f = a.data(this, e);
                f ? f[b] && f[b](c) : a.data(this, e, new d(this, b))
            })
        }, a.fn[e].defaults = {
            zoomLevel: 4,
            zoomControl: !1,
            scaleControl: !1,
            scrollwheel: !1,
            center: {
                lat: 25.280282,
                lng: 51.522476
            }
        }, a(function () {
            var b = a("[data-" + e + "]");
            b.length && b[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "menu";
        d.prototype = {
            init: function () {
                var b = this.options,
                    c = this.element,
                    d = c.find(b.menuLevel1),
                    f = d.find(" > li"),
                    g = f.filter("." + b.active),
                    h = f.index(g);
                f.on("mouseover." + e, function () {
                    if (!Site.isMobile()) {
                        var c = a(this);
                        c.is("." + b.active) || h === -1 || (g.removeClass(b.active), c.addClass(b.active), g = c)
                    }
                }), f.on("mouseout." + e, function () {
                    Site.isMobile() || g.is(f.filter("li:eq(" + h + ")")) || h === -1 || (f.find("." + b.active).removeClass(b.active), g = f.filter("li:eq(" + h + ")").addClass(b.active), a(this).removeClass(b.active))
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            menuLevel1: ".menu-level-1",
            active: "active"
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "navigation",
            f = a("html"),
            g = a(b);
        d.prototype = {
            init: function () {
                var b = this,
                    c = this.element,
                    d = this.options,
                    h = c.find(d.openSel),
                    i = c.find(d.elShow);
                h.on("click." + e, function () {
                    c.is("." + d.showCls) ? (c.removeClass(d.showCls), i.slideUp(function () {
                        i.removeAttr("style")
                    }), f.removeClass("pinBody")) : (f.addClass("pinBody"), c.addClass(d.showCls), i.css({
                        paddingTop: c.outerHeight() - 1
                    }).slideDown())
                }), g.on("resize." + e, function () {
                    Site.isMobile() ? (c.is(".openedSearch") && (c.removeClass("openedSearch"), a(".language-wrapper").removeAttr("style"), h.focus()), c.is(".showMenu") && i.css({
                        paddingTop: c.outerHeight() - 1
                    })) : b.closeMenu()
                }), g.on("orientationchange." + e, function () {
                    b.closeMenu()
                })
            },
            closeMenu: function () {
                var b = this.element,
                    c = b.find(this.options.elShow);
                b.is(".showMenu") && (g.scrollTop(0), c.removeAttr("style"), a("#btn-open").focus(), b.removeClass("showMenu"), f.removeClass("pinBody"))
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            openSel: ".btn-hamburger",
            elShow: ".menu-wrapper .outer",
            showCls: "showMenu"
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "popup",
            f = (a(document), "modal-backdrop fade custom"),
            g = ".modal-backdrop",
            h = "in",
            i = "pinBody",
            j = a("html"),
            k = a("body"),
            l = ".close",
            m = ".old-ie",
            n = {
                CLICK: "click." + e
            };
        d.prototype = {
            init: function () {
                var a = (this.options, this.element);
                this.vars = {
                    closeBtn: a.find(l)
                }, j.is(m) && this.show(), this.vars.closeBtn.off(n.CLICK).on(n.CLICK, function (b) {
                    a.trigger(n.CLICK)
                })
            },
            show: function () {
                Site.initOverlay(f), k.addClass(i), this.element.addClass(h).show(), a(g).addClass(h)
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            closeSel: ""
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "rd-section",
            f = a("body");
        d.prototype = {
            init: function () {
                var a = {
                        en: [{
                            title: "Doha Corniche",
                            href: "doha-corniche.html",
                            src: "images/upload/doha-corniche-02.jpg"
                        }, {
                            title: "Souq Waqif",
                            href: "souq-waqif.html",
                            src: "images/upload/soug-01.jpg"
                        }, {
                            title: "Museum of Islamic Art",
                            href: "museum-of-islamic-art.html",
                            src: "images/upload/museum-01.jpg"
                        }, {
                            title: "Katara Cultural Village",
                            href: "katara-cultural-village.html",
                            src: "images/upload/katara-01.jpg"
                        }, {
                            title: "The Pearl-Qatar",
                            href: "the-pearl-qatar.html",
                            src: "images/upload/peral-01.jpg"
                        }, {
                            title: "Al Zubarah",
                            href: "al-zubarah.html",
                            src: "images/upload/al-zubarah-01.jpg"
                        }, {
                            title: "Khor Al Adaid",
                            href: "khor-al-adaid.html",
                            src: "images/upload/khor-01.jpg"
                        }],
                        ar: [{
                            title: "كورنيش الدوحة",
                            href: "doha-corniche.html",
                            src: "images/upload/doha-corniche-02.jpg"
                        }, {
                            title: "سوق واقف",
                            href: "souq-waqif.html",
                            src: "images/upload/soug-01.jpg"
                        }, {
                            title: "متحف الفن الإسلامي",
                            href: "museum-of-islamic-art.html",
                            src: "images/upload/museum-01.jpg"
                        }, {
                            title: "الحي الثقافي كتارا",
                            href: "katara-cultural-village.html",
                            src: "images/upload/katara-01.jpg"
                        }, {
                            title: "اللؤلؤة – قطر",
                            href: "the-pearl-qatar.html",
                            src: "images/upload/peral-01.jpg"
                        }, {
                            title: "الزبارة",
                            href: "al-zubarah.html",
                            src: "images/upload/al-zubarah-01.jpg"
                        }, {
                            title: "خور العديد",
                            href: "khor-al-adaid.html",
                            src: "images/upload/khor-01.jpg"
                        }],
                        it: [{
                            title: "La Corniche di Doha",
                            href: "doha-corniche.html",
                            src: "images/upload/doha-corniche-02.jpg"
                        }, {
                            title: "Souq Waqif",
                            href: "souq-waqif.html",
                            src: "images/upload/soug-01.jpg"
                        }, {
                            title: "Museo di Arte Islamica",
                            href: "museum-of-islamic-art.html",
                            src: "images/upload/museum-01.jpg"
                        }, {
                            title: "Villaggio Culturale Katara",
                            href: "katara-cultural-village.html",
                            src: "images/upload/katara-01.jpg"
                        }, {
                            title: "The Pearl-Qatar",
                            href: "the-pearl-qatar.html",
                            src: "images/upload/peral-01.jpg"
                        }, {
                            title: "Al Zubarah",
                            href: "al-zubarah.html",
                            src: "images/upload/al-zubarah-01.jpg"
                        }, {
                            title: "Khor Al Adaid",
                            href: "khor-al-adaid.html",
                            src: "images/upload/khor-01.jpg"
                        }]
                    },
                    b = this,
                    c = {};
                f.is(".ar") ? c = a.ar : f.is(".en") ? c = a.en : f.is(".it") && (c = a.it), this.vars = {
                    lang: c
                }, b.randomSection()
            },
            randomSection: function () {
                var b = this.element,
                    c = this.options,
                    d = b.find(c.secEl),
                    e = this.vars.lang,
                    f = [];
                f[0] = Math.floor(6 * Math.random()), f[1] = f[0] + 1, a.each(d, function (b, c) {
                    var d = a(c),
                        g = d.find(".img-wrapper"),
                        h = d.find(".qa-link-1");
                    g.find("img").attr("src", e[f[b]].src), h.add(g).attr({
                        href: e[f[b]].href,
                        title: e[f[b]].title
                    }), h.find("span:first-child").text(e[f[b]].title)
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            secEl: ".col-md-6"
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "search",
            f = a("html");
        d.prototype = {
            init: function () {
                var b = this.options,
                    c = this.element,
                    d = c.find(b.openSel),
                    g = c.find(b.closeSel),
                    h = a(".language-wrapper");
                d.on("click." + e, function () {
                    c.is(".openSearch") || c.is(".openedSearch") || (c.addClass("openSearch"), f.find(".ar").length && Site.prefixedEvent(c.find(".language")[0], "AnimationEnd", function () {
                        h.animate({
                            width: 0
                        }, function () {
                            h.css({
                                overflow: "hidden"
                            })
                        })
                    }), setTimeout(function () {
                        c.addClass("openedSearch"), c.removeClass("openSearch")
                    }, b.duration))
                }), g.on("click." + e, function () {
                    !c.is(".closeSearch") && c.is(".openedSearch") && (c.addClass("closeSearch"), setTimeout(function () {
                        f.find(".ar").length && h.removeAttr("style"), c.removeClass("openedSearch closeSearch")
                    }, b.duration))
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            openSel: "#btn-open",
            closeSel: "#btn-close",
            duration: 840
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "share-page";
        a(document);
        d.prototype = {
            init: function () {
                var c = this.options,
                    d = this.element,
                    e = d.find(c.shareEl);
                a.each(e, function () {
                    var c = a(this);
                    c.attr("href", c.attr("href") + b.location.href)
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            shareEl: "[data-to-share]"
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d() {
            return b.Modernizr.mq("(max-width: 991px)")
        }

        function e(a, b, c, e, f) {
            a ? (a.rtl || (a.rtl = e), f.slick(a)) : (f.is(".slick-initialized") && f.slick("unslick"), d() ? b && (b.rtl || (b.rtl = e), f.slick(b)) : c && (c.rtl || (c.rtl = e), f.slick(c)))
        }

        function f(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[g].defaults, this.element.data(), c), this.init()
        }
        var g = "slider",
            h = a(b);
        f.prototype = {
            init: function () {
                var c = this.element,
                    f = c.data("optionsDesktop"),
                    i = c.data("optionsMobile"),
                    j = c.data("options"),
                    k = a("body").is(".ar");
                k && c.attr("dir", "rtl"), j ? (j.rtl || (j.rtl = k), c.slick(j)) : f && !d() ? (f.rtl || (f.rtl = k), c.slick(f)) : i && d() && (i.rtl || (i.rtl = k), c.slick(i)), h.on("resize." + g, function () {
                    b.Modernizr.touch || e(j, i, f, k, c)
                }).on("orientationchange." + g, function () {
                    e(j, i, f, k, c)
                })
            },
            destroy: function () {
                a.removeData(this.element[0], g)
            }
        }, a.fn[g] = function (c, d) {
            return this.each(function () {
                var e = a.data(this, g);
                e ? e[c] ? e[c](d) : b.console && console.log(c ? c + " method is not exists in " + g : g + " plugin has been initialized") : a.data(this, g, new f(this, c))
            })
        }, a.fn[g].defaults = {}, a(function () {
            a("[data-" + g + "]")[g]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "stick-input";
        a("html");
        d.prototype = {
            init: function () {
                var b = (this.options, this.element),
                    c = b.closest("aside"),
                    d = b.closest(".scrollAble");
                b.on("focus." + e, function () {
                    var b = a(document).height(),
                        e = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                    e ? setTimeout(function () {
                        a("body").animate({
                            scrollTop: b
                        }, 100)
                    }, 300) : setTimeout(function () {
                        d.animate({
                            scrollTop: b + c.height()
                        }, 100)
                    }, 300)
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            duration: 50
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "toggle-show",
            f = a(document);
        d.prototype = {
            init: function () {
                var b = this.options,
                    c = this.element,
                    d = (a(b.closeSel), a(c.data("toggleShow")));
                c.on("click." + e, function () {
                    d.stop().fadeToggle()
                }), f.on("click." + e, function (b) {
                    var e = a(b.target);
                    !d.is(":visible") || d.is(e.parents(c.data("toggleShow"))) || c.is(e) || d.stop().fadeOut()
                })
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            closeSel: ""
        }, a(function () {
            a("[data-" + e + "]")[e]()
        })
    }(jQuery, window),
    function (a, b, c) {
        "use strict";

        function d(b, c) {
            this.element = a(b), this.options = a.extend({}, a.fn[e].defaults, this.element.data(), c), this.init()
        }
        var e = "qavimeo";
        d.prototype = {
            init: function () {
                var c = this,
                    d = c.element,
                    e = c.options;
                this.player = $f(d[0]), this.player.addEvent("ready", function () {
                    b.Modernizr.touch || (a("[" + e.playBtn + "]").on("click.play", function (a) {
                        a.preventDefault(), c.play()
                    }), c.player.addEvent("pause", function () {
                        c.pause()
                    }))
                })
            },
            play: function () {
                this.player.api("play"), this.element.trigger("onPlay")
            },
            pause: function () {
                this.element.trigger("onPause")
            },
            destroy: function () {
                a.removeData(this.element[0], e)
            }
        }, a.fn[e] = function (c, f) {
            return this.each(function () {
                var g = a.data(this, e);
                g ? g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized") : a.data(this, e, new d(this, c))
            })
        }, a.fn[e].defaults = {
            autoplay: !1,
            width: "100%",
            enablejsapi: !0,
            pauseHandler: null,
            playHandler: null,
            bufferHandler: null,
            endHandler: null,
            onAfterInit: null,
            playBtn: "data-vimeo-play",
            pauseBtn: "data-vimeo-pause"
        }, a(function () {
            var c = a(".mask-video"),
                d = a("[data-" + e + "]");
            b.Modernizr.touch && c.css("display", "none"), d.on("onPlay", function (b) {
                if (!c.is(":animated") && !d.is(":animated")) return c.fadeOut(600, function () {
                    a(this).addClass("hidden")
                }), d.fadeIn(600, function () {
                    a(this).removeClass("hidden")
                }), !1
            }), d.on("onPause", function (b) {
                return d.fadeOut(600, function () {
                    a(this).addClass("hidden")
                }), c.fadeIn(600, function () {
                    a(this).removeClass("hidden")
                }), !1
            }), d[e]()
        })
    }(jQuery, window);
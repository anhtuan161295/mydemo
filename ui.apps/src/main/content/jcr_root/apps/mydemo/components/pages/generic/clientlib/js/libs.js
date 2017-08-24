/*! Frontend - v0.1.0 - built on 05-07-2016 */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }

    function d(a, b, c) {
        if (ea.isFunction(b)) return ea.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ea.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ma.test(b)) return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function (a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }

    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
                } catch (e) {}
                ea.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando,
                h = a.nodeType,
                i = h ? ea.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
                toJSON: ea.noop
            }), "object" != typeof b && "function" != typeof b || (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? ea.cache : a,
                h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d)) return
                }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    function m() {
        return !0
    }

    function n() {
        return !1
    }

    function o() {
        try {
            return oa.activeElement
        } catch (a) {}
    }

    function p(a) {
        var b = Ka.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function q(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }

    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked)
    }

    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
    }

    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }

    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a),
                g = ea._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }

    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events) ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(), f
    }

    function z(a) {
        var b = oa,
            c = _a[a];
        return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
    }

    function A(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
            if (b = mb[e] + c, b in a) return b;
        return d
    }

    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = ab(a),
            g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = bb(a, b, f), (e < 0 || null == e) && (e = a.style[b]), db.test(e)) return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e)
    }

    function H() {
        return setTimeout(function () {
            nb = void 0
        }), nb = ea.now()
    }

    function I(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ca(a),
            p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], pb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || ea.style(a, d)
            } else j = void 0;
        if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function () {
                ea(a).hide()
            }), l.done(function () {
                var b;
                ea._removeData(a, "fxshow");
                for (b in m) ea.style(a, b, m[b])
            });
            for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function M(a, b, c) {
        var d, e, f = 0,
            g = sb.length,
            h = ea.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ea.extend({}, b),
                opts: ea.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: nb || H(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (L(k, j.opts.specialEasing); f < g; f++)
            if (d = sb[f].call(j, a, k, j.opts)) return d;
        return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function N(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ea.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c), a
    }

    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function R(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b)) ea.each(b, function (b, e) {
            c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ea.type(b)) d(a, b);
        else
            for (e in b) S(a + "[" + e + "]", b[e], c, d)
    }

    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var W = [],
        X = W.slice,
        Y = W.concat,
        Z = W.push,
        $ = W.indexOf,
        _ = {},
        aa = _.toString,
        ba = _.hasOwnProperty,
        ca = {},
        da = "1.11.3",
        ea = function (a, b) {
            return new ea.fn.init(a, b)
        },
        fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ga = /^-ms-/,
        ha = /-([\da-z])/gi,
        ia = function (a, b) {
            return b.toUpperCase()
        };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function () {
            return X.call(this)
        },
        get: function (a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function (a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return ea.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(ea.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    }, ea.extend = ea.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === ea.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === ea.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (ca.ownLast)
                for (b in a) return ba.call(a, b);
            for (b in a);
            return void 0 === b || ba.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && ea.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(ga, "ms-").replace(ha, ia)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; f < g && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; f < g && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(fa, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if ($) return $.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; f < g; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a)) return c = X.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }, d.guid = a.guid = a.guid || ea.guid++, d
        },
        now: function () {
            return +new Date
        },
        support: ca
    }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ja = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; h < e; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; d < e && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                if (I) return b.getElementsByClassName(a)
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function (a) {
                    return a = a.replace(va, wa),
                        function (b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === H
                },
                focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !w.pseudos.empty(a)
                },
                header: function (a) {
                    return qa.test(a.nodeName)
                },
                input: function (a) {
                    return pa.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function () {
                    return [0]
                }),
                last: j(function (a, b) {
                    return [b - 1]
                }),
                eq: j(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: j(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: j(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: j(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ja.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext,
        la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ma = /^.[^:#\[\.,]*$/;
    ea.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, ea.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(ea(a).filter(function () {
                for (b = 0; b < e; b++)
                    if (ea.contains(d[b], this)) return !0
            }));
            for (b = 0; b < e; b++) ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function (a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
        }
    });
    var na, oa = a.document,
        pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        qa = ea.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                        for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = oa.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return na.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = oa, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
        };
    qa.prototype = ea.fn, na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/,
        sa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ea.extend({
        dir: function (a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), ea.fn.extend({
        has: function (a) {
            var b, c = ea(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++)
                    if (ea.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ea.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ea.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return ea.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return ea.dir(a, "parentNode", c)
        },
        next: function (a) {
            return e(a, "nextSibling")
        },
        prev: function (a) {
            return e(a, "previousSibling")
        },
        nextAll: function (a) {
            return ea.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return ea.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return ea.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return ea.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ea.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ea.sibling(a.firstChild)
        },
        contents: function (a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
        }
    }, function (a, b) {
        ea.fn[a] = function (c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var ta = /\S+/g,
        ua = {};
    ea.Callbacks = function (a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function (f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && g < e; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function () {
                    if (i) {
                        var d = i.length;
                        ! function f(b) {
                            ea.each(b, function (b, c) {
                                var d = ea.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = i.length : c && (h = d, k(c))
                    }
                    return this
                },
                remove: function () {
                    return i && ea.each(arguments, function (a, c) {
                        for (var d;
                            (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (d <= e && e--, d <= g && g--)
                    }), this
                },
                has: function (a) {
                    return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function () {
                    return i = [], e = 0, this
                },
                disable: function () {
                    return i = j = c = void 0, this
                },
                disabled: function () {
                    return !i
                },
                lock: function () {
                    return j = void 0, c || l.disable(), this
                },
                locked: function () {
                    return !j
                },
                fireWith: function (a, c) {
                    return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return l
    }, ea.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ea.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return ea.Deferred(function (c) {
                            ea.each(b, function (b, f) {
                                var g = ea.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? ea.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ea.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = X.call(arguments),
                g = f.length,
                h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ea.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var va;
    ea.fn.ready = function (a) {
        return ea.ready.promise().done(a), this
    }, ea.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? ea.readyWait++ : ea.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body) return setTimeout(ea.ready);
                ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
            }
        }
    }), ea.ready.promise = function (b) {
        if (!va)
            if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
            else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
        else {
            oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && oa.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!ea.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    g(), ea.ready()
                }
            }()
        }
        return va.promise(b)
    };
    var wa, xa = "undefined";
    for (wa in ea(ca)) break;
    ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function () {
            var a, b, c, d;
            c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function () {
            var a = oa.createElement("div");
            if (null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    ca.deleteExpando = !1
                }
            }
            a = null
        }(), ea.acceptData = function (a) {
            var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
        };
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
        },
        data: function (a, b, c) {
            return k(a, b, c)
        },
        removeData: function (a, b) {
            return l(a, b)
        },
        _data: function (a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return l(a, b, !0)
        }
    }), ea.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                ea.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                ea.data(this, a, b)
            }) : f ? i(f, a, ea.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                ea.removeData(this, a)
            })
        }
    }), ea.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = ea.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ea._queueHooks(a, b),
                g = function () {
                    ea.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function () {
                    ea._removeData(a, b + "queue"), ea._removeData(a, c)
                })
            })
        }
    }), ea.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                ea.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = ea.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ba = ["Top", "Right", "Bottom", "Left"],
        Ca = function (a, b) {
            return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
        },
        Da = ea.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === ea.type(c)) {
                e = !0;
                for (h in c) ea.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(ea(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Ea = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = oa.createElement("input"),
            b = oa.createElement("div"),
            c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                ca.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                ca.deleteExpando = !1
            }
        }
    }(),
    function () {
        var b, c, d = oa.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Fa = /^(?:input|select|textarea)$/i,
        Ga = /^key/,
        Ha = /^(?:mouse|pointer|contextmenu)|click/,
        Ia = /^(?:focusinfocus|focusoutblur)$/,
        Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                        return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ea.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                    if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa],
                n = ba.call(b, "type") ? b.type : b,
                o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                    (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g], k && (d[g] = null), ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    ea.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [],
                h = X.call(arguments),
                i = (ea._data(this, "events") || {})[a.type] || [],
                j = ea.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, f = 0;
                        (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(d.namespace) || (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; f < h; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[ea.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== o() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === o() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (ea.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (a) {
                    return ea.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ea.removeEvent = oa.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
    }, ea.Event = function (a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
    }, ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        ea.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || ea.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ca.submitBubbles || (ea.event.special.submit = {
        setup: function () {
            return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), ea._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
        }
    }), ca.changeBubbles || (ea.event.special.change = {
        setup: function () {
            return Fa.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ea.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ea.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
            })), !1) : void ea.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }), ea._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
        }
    }), ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = ea._data(d, b);
                e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
            }
        }
    }), ea.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return ea().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function () {
                ea.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
                ea.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                ea.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return ea.event.trigger(a, b, c, !0)
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        La = / jQuery\d+="(?:null|\d+)"/g,
        Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
        Na = /^\s+/,
        Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pa = /<([\w:]+)/,
        Qa = /<tbody/i,
        Ra = /<|&#?\w+;/,
        Sa = /<(?:script|style|link)/i,
        Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ua = /^$|\/(?:java|ecma)script/i,
        Va = /^true\/(.*)/,
        Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ya = p(oa),
        Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                else w(a, f);
            return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; o < l; o++)
                if (f = a[o], f || 0 === f)
                    if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                    else if (Ra.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                    for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else n.push(b.createTextNode(f));
            for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                if ((!d || ea.inArray(f, d) === -1) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                    for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                }
        }
    }), ea.fn.extend({
        text: function (a) {
            return Da(this, function (a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return ea.clone(this, a, b)
            })
        },
        html: function (a) {
            return Da(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                if ("string" == typeof a && !Sa.test(a) && (ca.htmlSerialize || !Ma.test(a)) && (ca.leadingWhitespace || !Na.test(a)) && !Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Oa, "<$1></$2>");
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function (c) {
                var d = k.eq(c);
                n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                for (f = ea.map(q(h, "script"), t), e = f.length; i < j; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; i < e; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                h = c = null
            }
            return this
        }
    }), ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        ea.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; d <= g; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var $a, _a = {};
    ! function () {
        var a;
        ca.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var ab, bb, cb = /^margin/,
        db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
        eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }, bb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g,
                g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : oa.documentElement.currentStyle && (ab = function (a) {
            return a.currentStyle
        }, bb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        }),
        function () {
            function b() {
                var b, c, d, e;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
            }
            var c, d, e, f, g, h, i;
            c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], d = e && e.style, d && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
                reliableHiddenOffsets: function () {
                    return null == h && b(), h
                },
                boxSizingReliable: function () {
                    return null == g && b(), g
                },
                pixelPosition: function () {
                    return null == f && b(), f
                },
                reliableMarginRight: function () {
                    return null == i && b(), i
                }
            }))
        }(), ea.swap = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
    var fb = /alpha\([^)]*\)/i,
        gb = /opacity\s*=\s*([^)]*)/,
        hb = /^(none|table(?!-c[ea]).+)/,
        ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
        jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
        kb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b),
                    i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }), ea.each(["height", "width"], function (a, b) {
        ea.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function () {
                    return F(a, b, d)
                }) : F(a, b, d)
            },
            set: function (a, c, d) {
                var e = d && ab(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ca.opacity || (ea.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
        if (b) return ea.swap(a, {
            display: "inline-block"
        }, bb, [a, "marginRight"])
    }), ea.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        ea.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, cb.test(a) || (ea.cssHooks[a + b].set = D)
    }), ea.fn.extend({
        css: function (a, b) {
            return Da(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (ea.isArray(b)) {
                    for (d = ab(a), e = b.length; g < e; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return C(this, !0)
        },
        hide: function () {
            return C(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Ca(this) ? ea(this).show() : ea(this).hide()
            })
        }
    }), ea.Tween = G, G.prototype = {
        constructor: G,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = G.propHooks[this.prop];
            return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
        }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ea.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ea.fx = G.prototype.init, ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/,
        qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
        rb = /queueHooks$/,
        sb = [K],
        tb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = qb.exec(b),
                    f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                    g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ea.Animation = ea.extend(M, {
            tweener: function (a, b) {
                ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? sb.unshift(a) : sb.push(a)
            }
        }), ea.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? ea.extend({}, a) : {
                complete: c || !c && b || ea.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ea.isFunction(b) && b
            };
            return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
            }, d
        }, ea.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = ea.isEmptyObject(a),
                    f = ea.speed(b, c, d),
                    g = function () {
                        var b = M(this, ea.extend({}, a), f);
                        (e || ea._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = ea.timers,
                        g = ea._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || ea.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = ea._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ea.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ea.each(["toggle", "show", "hide"], function (a, b) {
            var c = ea.fn[b];
            ea.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }), ea.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            ea.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ea.timers = [], ea.fx.tick = function () {
            var a, b = ea.timers,
                c = 0;
            for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || ea.fx.stop(), nb = void 0
        }, ea.fx.timer = function (a) {
            ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
        }, ea.fx.interval = 13, ea.fx.start = function () {
            ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
        }, ea.fx.stop = function () {
            clearInterval(ob), ob = null
        }, ea.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ea.fn.delay = function (a, b) {
            return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e;
            b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
        }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = ea.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
            }
        }
    }), ea.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (ca.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ea.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ea(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                        if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), ea.each(["radio", "checkbox"], function () {
        ea.valHooks[this] = {
            set: function (a, b) {
                if (ea.isArray(b)) return a.checked = ea.inArray(ea(a).val(), b) >= 0
            }
        }, ca.checkOn || (ea.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var vb, wb, xb = ea.expr.attrHandle,
        yb = /^(?:checked|selected)$/i,
        zb = ca.getSetAttribute,
        Ab = ca.input;
    ea.fn.extend({
        attr: function (a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                ea.removeAttr(this, a)
            })
        }
    }), ea.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(ta);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), wb = {
        set: function (a, b, c) {
            return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = xb[b] || ea.find.attr;
        xb[b] = Ab && zb || !yb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
        } : function (a, b, c) {
            if (!c) return a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Ab && zb || (ea.attrHooks.value = {
        set: function (a, b, c) {
            return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
        }
    }), zb || (vb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b
        }
    }, xb.id = xb.name = xb.coords = function (a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, ea.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: vb.set
    }, ea.attrHooks.contenteditable = {
        set: function (a, b, c) {
            vb.set(a, "" !== b && b, c)
        }
    }, ea.each(["width", "height"], function (a, b) {
        ea.attrHooks[b] = {
            set: function (a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    })), ca.style || (ea.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i,
        Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function (a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = ea.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), ea.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), ca.hrefNormalized || ea.each(["href", "src"], function (a, b) {
        ea.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), ca.optSelected || (ea.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ea.propFix[this.toLowerCase()] = this
    }), ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; h < i; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; h < i; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ea.isFunction(a) ? this.each(function (c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else c !== xa && "boolean" !== c || (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        ea.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ea.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb = ea.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }, ea.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
    };
    var Hb, Ib, Jb = /#.*$/,
        Kb = /([?&])_=[^&]*/,
        Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nb = /^(?:GET|HEAD)$/,
        Ob = /^\/\//,
        Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (Tb) {
        Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function (a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && a < 300 || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, !a && w || (w = "error", a < 0 && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                o = ea.Deferred(),
                p = ea.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (t < 2)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
            i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, j.send(r, c)
                } catch (w) {
                    if (!(t < 2)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }), ea.each(["get", "post"], function (a, b) {
        ea[b] = function (a, c, d, e) {
            return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), ea._evalUrl = function (a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ea.fn.extend({
        wrapAll: function (a) {
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return ea.isFunction(a) ? this.each(function (b) {
                ea(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = ea(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = ea.isFunction(a);
            return this.each(function (c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ea.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }, ea.expr.filters.visible = function (a) {
        return !ea.expr.filters.hidden(a)
    };
    var Ub = /%20/g,
        Vb = /\[\]$/,
        Wb = /\r?\n/g,
        Xb = /^(?:submit|button|image|reset|file)$/i,
        Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+")
    }, ea.fn.extend({
        serialize: function () {
            return ea.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
            }).map(function (a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Wb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Wb, "\r\n")
                }
            }).get()
        }
    }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var Zb = 0,
        $b = {},
        _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in $b) $b[a](void 0, !0)
    }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function (a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    }), ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return ea.globalEval(a), a
            }
        }
    }), ea.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ea.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function (d, e) {
                    b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ac = [],
        bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), ea.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || ea.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), ea.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || oa;
        var d = la.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
    };
    var cc = ea.fn.load;
    ea.fn.load = function (a, b, c) {
        if ("string" != typeof a && cc) return cc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        ea.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), ea.expr.filters.animated = function (a) {
        return ea.grep(ea.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                l = ea(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ea.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                ea.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                return a || dc
            })
        }
    }), ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function (d) {
            return Da(this, function (a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), ea.each(["top", "left"], function (a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
            if (c) return c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c
        })
    }), ea.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            ea.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function (b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                        Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ea.fn.size = function () {
        return this.length
    }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ea
    });
    var ec = a.jQuery,
        fc = a.$;
    return ea.noConflict = function (b) {
        return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
    }, typeof b === xa && (a.jQuery = a.$ = ea), ea
}), window.Detectizr = function (a, b, c, d) {
        function e(a, b) {
            var c, d, f;
            if (arguments.length > 2)
                for (c = 1, d = arguments.length; c < d; c += 1) e(a, arguments[c]);
            else
                for (f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
            return a
        }

        function f(a) {
            return u.browser.userAgent.indexOf(a) > -1
        }

        function g(a) {
            return a.test(u.browser.userAgent)
        }

        function h(a) {
            return a.exec(u.browser.userAgent)
        }

        function i(a) {
            return a.replace(/^\s+|\s+$/g, "")
        }

        function j(a) {
            return null === a || a === d ? "" : String(a).replace(/((\s|\-|\.)+[a-z0-9])/g, function (a) {
                return a.toUpperCase().replace(/(\s|\-|\.)/g, "")
            })
        }

        function k(a, b) {
            var c = b || "",
                d = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(z, " ") : "");
            if (d) {
                for (; d.indexOf(" " + c + " ") >= 0;) d = d.replace(" " + c + " ", " ");
                a.className = b ? i(d) : ""
            }
        }

        function l(a, b, c) {
            a && (a = j(a), b && (b = j(b), m(a + b, !0), c && m(a + b + "_" + c, !0)))
        }

        function m(a, b) {
            a && v && (x.addAllFeaturesAsClass ? v.addTest(a, b) : (b = "function" == typeof b ? b() : b, b ? v.addTest(a, !0) : (delete v[a], k(A, a))))
        }

        function n(a, b) {
            a.version = b;
            var c = b.split(".");
            c.length > 0 ? (c = c.reverse(), a.major = c.pop(), c.length > 0 ? (a.minor = c.pop(), c.length > 0 ? (c = c.reverse(), a.patch = c.join(".")) : a.patch = "0") : a.minor = "0") : a.major = "0"
        }

        function o() {
            a.clearTimeout(s), s = a.setTimeout(function () {
                t = u.device.orientation, a.innerHeight > a.innerWidth ? u.device.orientation = "portrait" : u.device.orientation = "landscape", m(u.device.orientation, !0), t !== u.device.orientation && m(t, !1)
            }, 10)
        }

        function p(a) {
            var c, d, e, f, g, h = b.plugins;
            for (f = h.length - 1; f >= 0; f--) {
                for (c = h[f], d = c.name + c.description, e = 0, g = a.length; g >= 0; g--) d.indexOf(a[g]) !== -1 && (e += 1);
                if (e === a.length) return !0
            }
            return !1
        }

        function q(a) {
            var b;
            for (b = a.length - 1; b >= 0; b--) try {
                new ActiveXObject(a[b])
            } catch (c) {}
            return !1
        }

        function r(d) {
            var i, k, r, s, t, z, A;
            if (x = e({}, x, d || {}), x.detectDevice) {
                for (u.device = {
                        type: "",
                        model: "",
                        orientation: ""
                    }, r = u.device, g(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (r.type = w[0], r.model = "smartTv") : g(/xbox|playstation.3|wii/) ? (r.type = w[0], r.model = "gameConsole") : g(/ip(a|ro)d/) ? (r.type = w[1], r.model = "ipad") : g(/tablet/) && !g(/rx-34/) || g(/folio/) ? (r.type = w[1], r.model = String(h(/playbook/) || "")) : g(/linux/) && g(/android/) && !g(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (r.type = w[1], r.model = "android") : g(/kindle/) || g(/mac.os/) && g(/silk/) ? (r.type = w[1], r.model = "kindle") : g(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || g(/mb511/) && g(/rutem/) ? (r.type = w[1], r.model = "android") : g(/bb10/) ? (r.type = w[1], r.model = "blackberry") : (r.model = h(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== r.model ? (r.type = w[2], r.model = String(r.model)) : (r.model = "", g(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? r.type = w[2] : g(/opera/) && g(/windows.nt.5/) && g(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? r.type = w[2] : g(/windows.(nt|xp|me|9)/) && !g(/phone/) || g(/win(9|.9|nt)/) || g(/\(windows 8\)/) ? r.type = w[3] : g(/macintosh|powerpc/) && !g(/silk/) ? (r.type = w[3], r.model = "mac") : g(/linux/) && g(/x11/) ? r.type = w[3] : g(/solaris|sunos|bsd/) ? r.type = w[3] : g(/cros/) ? r.type = w[3] : g(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !g(/mobile/) ? (r.type = w[3], r.model = "crawler") : r.type = w[2])), i = 0, k = w.length; i < k; i += 1) m(w[i], r.type === w[i]);
                x.detectDeviceModel && m(j(r.model), !0)
            }
            if (x.detectScreen && (r.screen = {}, v && v.mq && (v.mq("only screen and (max-width: 240px)") ? (r.screen.size = "veryVerySmall", m("veryVerySmallScreen", !0)) : v.mq("only screen and (max-width: 320px)") ? (r.screen.size = "verySmall", m("verySmallScreen", !0)) : v.mq("only screen and (max-width: 480px)") && (r.screen.size = "small", m("smallScreen", !0)), r.type !== w[1] && r.type !== w[2] || v.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (r.screen.resolution = "high", m("highresolution", !0))), r.type === w[1] || r.type === w[2] ? (a.onresize = function (a) {
                    o(a)
                }, o()) : (r.orientation = "landscape", m(r.orientation, !0))), x.detectOS && (u.os = {}, s = u.os, "" !== r.model && ("ipad" === r.model || "iphone" === r.model || "ipod" === r.model ? (s.name = "ios", n(s, (g(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === r.model ? (s.name = "android", n(s, g(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === r.model ? (s.name = "blackberry", n(s, g(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === r.model && (s.name = "blackberry", n(s, g(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), s.name || (f("win") || f("16bit") ? (s.name = "windows", f("windows nt 6.3") ? n(s, "8.1") : f("windows nt 6.2") || g(/\(windows 8\)/) ? n(s, "8") : f("windows nt 6.1") ? n(s, "7") : f("windows nt 6.0") ? n(s, "vista") : f("windows nt 5.2") || f("windows nt 5.1") || f("windows xp") ? n(s, "xp") : f("windows nt 5.0") || f("windows 2000") ? n(s, "2k") : f("winnt") || f("windows nt") ? n(s, "nt") : f("win98") || f("windows 98") ? n(s, "98") : (f("win95") || f("windows 95")) && n(s, "95")) : f("mac") || f("darwin") ? (s.name = "mac os", f("68k") || f("68000") ? n(s, "68k") : f("ppc") || f("powerpc") ? n(s, "ppc") : f("os x") && n(s, (g(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : f("webtv") ? s.name = "webtv" : f("x11") || f("inux") ? s.name = "linux" : f("sunos") ? s.name = "sun" : f("irix") ? s.name = "irix" : f("freebsd") ? s.name = "freebsd" : f("bsd") && (s.name = "bsd")), s.name && (m(s.name, !0), s.major && (l(s.name, s.major), s.minor && l(s.name, s.major, s.minor))), g(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? s.addressRegisterSize = "64bit" : s.addressRegisterSize = "32bit", m(s.addressRegisterSize, !0)), x.detectBrowser && (t = u.browser, g(/opera|webtv/) || !g(/msie\s([\d\w\.]+)/) && !f("trident") ? f("firefox") ? (t.engine = "gecko", t.name = "firefox", n(t, g(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : f("gecko/") ? t.engine = "gecko" : f("opera") ? (t.name = "opera", t.engine = "presto", n(t, g(/version\/([\d\.]+)/) ? RegExp.$1 : g(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : f("konqueror") ? t.name = "konqueror" : f("chrome") ? (t.engine = "webkit", t.name = "chrome", n(t, g(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : f("iron") ? (t.engine = "webkit", t.name = "iron") : f("crios") ? (t.name = "chrome", t.engine = "webkit", n(t, g(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : f("applewebkit/") ? (t.name = "safari", t.engine = "webkit", n(t, g(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : f("mozilla/") && (t.engine = "gecko") : (t.engine = "trident", t.name = "ie", !a.addEventListener && c.documentMode && 7 === c.documentMode ? n(t, "8.compat") : g(/trident.*rv[ :](\d+)\./) ? n(t, RegExp.$1) : n(t, g(/trident\/4\.0/) ? "8" : RegExp.$1)), t.name && (m(t.name, !0), t.major && (l(t.name, t.major), t.minor && l(t.name, t.major, t.minor))), m(t.engine, !0), t.language = b.userLanguage || b.language, m(t.language, !0)), x.detectPlugins) {
                for (t.plugins = [], i = y.length - 1; i >= 0; i--) z = y[i], A = !1, a.ActiveXObject ? A = q(z.progIds) : b.plugins && (A = p(z.substrs)), A && (t.plugins.push(z.name), m(z.name, !0));
                b.javaEnabled() && (t.plugins.push("java"), m("java", !0))
            }
        }
        var s, t, u = {},
            v = a.Modernizr,
            w = ["tv", "tablet", "mobile", "desktop"],
            x = {
                addAllFeaturesAsClass: !1,
                detectDevice: !0,
                detectDeviceModel: !0,
                detectScreen: !0,
                detectOS: !0,
                detectBrowser: !0,
                detectPlugins: !0
            },
            y = [{
                name: "adobereader",
                substrs: ["Adobe", "Acrobat"],
                progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
            }, {
                name: "flash",
                substrs: ["Shockwave Flash"],
                progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
            }, {
                name: "wmplayer",
                substrs: ["Windows Media"],
                progIds: ["wmplayer.ocx"]
            }, {
                name: "silverlight",
                substrs: ["Silverlight"],
                progIds: ["AgControl.AgControl"]
            }, {
                name: "quicktime",
                substrs: ["QuickTime"],
                progIds: ["QuickTime.QuickTime"]
            }],
            z = /[\t\r\n]/g,
            A = c.documentElement;
        return u.detect = function (a) {
            return r(a)
        }, u.init = function () {
            u !== d && (u.browser = {
                userAgent: (b.userAgent || b.vendor || a.opera).toLowerCase()
            }, u.detect())
        }, u.init(), u
    }(this, this.navigator, this.document),
    function (a) {
        if (a.document) {
            var b = a.document;
            b.querySelectorAll || (b.querySelectorAll = function (c) {
                    var d, e = b.createElement("style"),
                        f = [];
                    for (b.documentElement.firstChild.appendChild(e), b._qsa = [], e.styleSheet.cssText = c + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", a.scrollBy(0, 0), e.parentNode.removeChild(e); b._qsa.length;) d = b._qsa.shift(), d.style.removeAttribute("x-qsa"), f.push(d);
                    return b._qsa = null, f
                }), b.querySelector || (b.querySelector = function (a) {
                    var c = b.querySelectorAll(a);
                    return c.length ? c[0] : null
                }), b.getElementsByClassName || (b.getElementsByClassName = function (a) {
                    return a = String(a).replace(/^|\s+/g, "."), b.querySelectorAll(a)
                }), Object.keys || (Object.keys = function (a) {
                    if (a !== Object(a)) throw TypeError("Object.keys called on non-object");
                    var b, c = [];
                    for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
                    return c
                }), Array.prototype.forEach || (Array.prototype.forEach = function (a) {
                    if (void 0 === this || null === this) throw TypeError();
                    var b = Object(this),
                        c = b.length >>> 0;
                    if ("function" != typeof a) throw TypeError();
                    var d, e = arguments[1];
                    for (d = 0; d < c; d++) d in b && a.call(e, b[d], d, b)
                }),
                function (a) {
                    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    a.atob = a.atob || function (a) {
                        a = String(a);
                        var c, d = 0,
                            e = [],
                            f = 0,
                            g = 0;
                        if (a = a.replace(/\s/g, ""), a.length % 4 === 0 && (a = a.replace(/=+$/, "")), a.length % 4 === 1) throw Error("InvalidCharacterError");
                        if (/[^+\/0-9A-Za-z]/.test(a)) throw Error("InvalidCharacterError");
                        for (; d < a.length;) c = b.indexOf(a.charAt(d)), f = f << 6 | c, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), d += 1;
                        return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
                    }, a.btoa = a.btoa || function (a) {
                        a = String(a);
                        var c, d, e, f, g, h, i, j = 0,
                            k = [];
                        if (/[^\x00-\xFF]/.test(a)) throw Error("InvalidCharacterError");
                        for (; j < a.length;) c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(b.charAt(f), b.charAt(g), b.charAt(h), b.charAt(i));
                        return k.join("")
                    }
                }(a), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (a) {
                    var b = this.__proto__ || this.constructor.prototype;
                    return a in this && (!(a in b) || b[a] !== this[a])
                }),
                function () {
                    if ("performance" in a == !1 && (a.performance = {}), Date.now = Date.now || function () {
                            return (new Date).getTime()
                        }, "now" in a.performance == !1) {
                        var b = Date.now();
                        performance.timing && performance.timing.navigationStart && (b = performance.timing.navigationStart), a.performance.now = function () {
                            return Date.now() - b
                        }
                    }
                }(), a.requestAnimationFrame || (a.webkitRequestAnimationFrame ? ! function (a) {
                    a.requestAnimationFrame = function (b) {
                        return webkitRequestAnimationFrame(function () {
                            b(a.performance.now())
                        })
                    }, a.cancelAnimationFrame = webkitCancelAnimationFrame
                }(a) : a.mozRequestAnimationFrame ? ! function (a) {
                    a.requestAnimationFrame = function (b) {
                        return mozRequestAnimationFrame(function () {
                            b(a.performance.now())
                        })
                    }, a.cancelAnimationFrame = mozCancelAnimationFrame
                }(a) : ! function (a) {
                    a.requestAnimationFrame = function (b) {
                        return a.setTimeout(b, 1e3 / 60)
                    }, a.cancelAnimationFrame = a.clearTimeout
                }(a))
        }
    }(this),
    function (a, b) {
        "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? exports.Holder = b() : a.Holder = b()
    }(this, function () {
        return function (a) {
            function b(d) {
                if (c[d]) return c[d].exports;
                var e = c[d] = {
                    exports: {},
                    id: d,
                    loaded: !1
                };
                return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
            }
            var c = {};
            return b.m = a, b.c = c, b.p = "", b(0)
        }([function (a, b, c) {
            a.exports = c(1)
        }, function (a, b, c) {
            (function (b) {
                function d(a, b, c, d) {
                    var g = e(c.substr(c.lastIndexOf(a.domain)), a);
                    g && f({
                        mode: null,
                        el: d,
                        flags: g,
                        engineSettings: b
                    })
                }

                function e(a, b) {
                    var c = {
                            theme: z(D.settings.themes.gray, null),
                            stylesheets: b.stylesheets,
                            instanceOptions: b
                        },
                        d = a.split("?"),
                        e = d[0].split("/");
                    c.holderURL = a;
                    var f = e[1],
                        g = f.match(/([\d]+p?)x([\d]+p?)/);
                    if (!g) return !1;
                    if (c.fluid = f.indexOf("p") !== -1, c.dimensions = {
                            width: g[1].replace("p", "%"),
                            height: g[2].replace("p", "%")
                        }, 2 === d.length) {
                        var h = r.parse(d[1]);
                        if (h.bg && (c.theme.background = t.parseColor(h.bg)), h.fg && (c.theme.foreground = t.parseColor(h.fg)), h.bg && !h.fg && (c.autoFg = !0), h.theme && c.instanceOptions.themes.hasOwnProperty(h.theme) && (c.theme = z(c.instanceOptions.themes[h.theme], null)), h.text && (c.text = h.text), h.textmode && (c.textmode = h.textmode), h.size && (c.size = h.size), h.font && (c.font = h.font), h.align && (c.align = h.align), c.nowrap = t.truthy(h.nowrap), c.auto = t.truthy(h.auto), c.outline = t.truthy(h.outline), t.truthy(h.random)) {
                            D.vars.cache.themeKeys = D.vars.cache.themeKeys || Object.keys(c.instanceOptions.themes);
                            var i = D.vars.cache.themeKeys[0 | Math.random() * D.vars.cache.themeKeys.length];
                            c.theme = z(c.instanceOptions.themes[i], null)
                        }
                    }
                    return c
                }

                function f(a) {
                    var b = a.mode,
                        c = a.el,
                        d = a.flags,
                        e = a.engineSettings,
                        f = d.dimensions,
                        h = d.theme,
                        i = f.width + "x" + f.height;
                    if (b = null == b ? d.fluid ? "fluid" : "image" : b, null != d.text && (h.text = d.text, "object" === c.nodeName.toLowerCase())) {
                        for (var l = h.text.split("\\n"), m = 0; m < l.length; m++) l[m] = t.encodeHtmlEntity(l[m]);
                        h.text = l.join("\\n")
                    }
                    var n = d.holderURL,
                        o = z(e, null);
                    if (d.font && (h.font = d.font, !o.noFontFallback && "img" === c.nodeName.toLowerCase() && D.setup.supportsCanvas && "svg" === o.renderer && (o = z(o, {
                            renderer: "canvas"
                        }))), d.font && "canvas" == o.renderer && (o.reRender = !0), "background" == b) null == c.getAttribute("data-background-src") && v.setAttr(c, {
                        "data-background-src": n
                    });
                    else {
                        var p = {};
                        p[D.vars.dataAttr] = n, v.setAttr(c, p)
                    }
                    d.theme = h, c.holderData = {
                        flags: d,
                        engineSettings: o
                    }, "image" != b && "fluid" != b || v.setAttr(c, {
                        alt: h.text ? h.text + " [" + i + "]" : i
                    });
                    var q = {
                        mode: b,
                        el: c,
                        holderSettings: {
                            dimensions: f,
                            theme: h,
                            flags: d
                        },
                        engineSettings: o
                    };
                    "image" == b ? (d.auto || (c.style.width = f.width + "px", c.style.height = f.height + "px"), "html" == o.renderer ? c.style.backgroundColor = h.background : (g(q), "exact" == d.textmode && (c.holderData.resizeUpdate = !0, D.vars.resizableImages.push(c), j(c)))) : "background" == b && "html" != o.renderer ? g(q) : "fluid" == b && (c.holderData.resizeUpdate = !0, "%" == f.height.slice(-1) ? c.style.height = f.height : null != d.auto && d.auto || (c.style.height = f.height + "px"), "%" == f.width.slice(-1) ? c.style.width = f.width : null != d.auto && d.auto || (c.style.width = f.width + "px"), "inline" != c.style.display && "" !== c.style.display && "none" != c.style.display || (c.style.display = "block"), k(c), "html" == o.renderer ? c.style.backgroundColor = h.background : (D.vars.resizableImages.push(c), j(c)))
                }

                function g(a) {
                    function c() {
                        var b = null;
                        switch (i.renderer) {
                            case "canvas":
                                b = F(k, a);
                                break;
                            case "svg":
                                b = y(k, a);
                                break;
                            default:
                                throw "Holder: invalid renderer: " + i.renderer
                        }
                        return b
                    }
                    var d = null,
                        e = a.mode,
                        f = a.el,
                        g = a.holderSettings,
                        i = a.engineSettings;
                    switch (i.renderer) {
                        case "svg":
                            if (!D.setup.supportsSVG) return;
                            break;
                        case "canvas":
                            if (!D.setup.supportsCanvas) return;
                            break;
                        default:
                            return
                    }
                    var j = {
                            width: g.dimensions.width,
                            height: g.dimensions.height,
                            theme: g.theme,
                            flags: g.flags
                        },
                        k = h(j);
                    if (d = c(), null == d) throw "Holder: couldn't render placeholder";
                    "background" == e ? (f.style.backgroundImage = "url(" + d + ")", f.style.backgroundSize = j.width + "px " + j.height + "px") : ("img" === f.nodeName.toLowerCase() ? v.setAttr(f, {
                        src: d
                    }) : "object" === f.nodeName.toLowerCase() && (v.setAttr(f, {
                        data: d
                    }), v.setAttr(f, {
                        type: "image/svg+xml"
                    })), i.reRender && b.setTimeout(function () {
                        var a = c();
                        if (null == a) throw "Holder: couldn't render placeholder";
                        "img" === f.nodeName.toLowerCase() ? v.setAttr(f, {
                            src: a
                        }) : "object" === f.nodeName.toLowerCase() && (v.setAttr(f, {
                            data: a
                        }), v.setAttr(f, {
                            type: "image/svg+xml"
                        }))
                    }, 150)), v.setAttr(f, {
                        "data-holder-rendered": !0
                    })
                }

                function h(a) {
                    function b(a, b, c, d) {
                        b.width = c, b.height = d, a.width = Math.max(a.width, b.width), a.height += b.height
                    }
                    var c = D.defaults.size;
                    switch (parseFloat(a.theme.size) ? c = a.theme.size : parseFloat(a.flags.size) && (c = a.flags.size), a.font = {
                        family: a.theme.font ? a.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                        size: i(a.width, a.height, c, D.defaults.scale),
                        units: a.theme.units ? a.theme.units : D.defaults.units,
                        weight: a.theme.fontweight ? a.theme.fontweight : "bold"
                    }, a.text = a.theme.text || Math.floor(a.width) + "x" + Math.floor(a.height), a.noWrap = a.theme.nowrap || a.flags.nowrap, a.align = a.theme.align || a.flags.align || "center", a.flags.textmode) {
                        case "literal":
                            a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
                            break;
                        case "exact":
                            if (!a.flags.exactDimensions) break;
                            a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
                    }
                    var d = new s({
                            width: a.width,
                            height: a.height
                        }),
                        e = d.Shape,
                        f = new e.Rect("holderBg", {
                            fill: a.theme.background
                        });
                    if (f.resize(a.width, a.height), d.root.add(f), a.flags.outline) {
                        var g = new w(f.properties.fill);
                        g = g.lighten(g.lighterThan("7f7f7f") ? -.1 : .1), f.properties.outline = {
                            fill: g.toHex(!0),
                            width: 2
                        }
                    }
                    var h = a.theme.foreground;
                    if (a.flags.autoFg) {
                        var j = new w(f.properties.fill),
                            k = new w("fff"),
                            l = new w("000", {
                                alpha: .285714
                            });
                        h = j.blendAlpha(j.lighterThan("7f7f7f") ? l : k).toHex(!0)
                    }
                    var m = new e.Group("holderTextGroup", {
                        text: a.text,
                        align: a.align,
                        font: a.font,
                        fill: h
                    });
                    m.moveTo(null, null, 1), d.root.add(m);
                    var n = m.textPositionData = E(d);
                    if (!n) throw "Holder: staging fallback not supported yet.";
                    m.properties.leading = n.boundingBox.height;
                    var o = null,
                        p = null,
                        q = a.width * D.vars.lineWrapRatio,
                        r = q;
                    if (n.lineCount > 1) {
                        var t, u = 0,
                            v = 0,
                            x = 0;
                        p = new e.Group("line" + x), "left" !== a.align && "right" !== a.align || (r = a.width * (1 - 2 * (1 - D.vars.lineWrapRatio)));
                        for (var y = 0; y < n.words.length; y++) {
                            var z = n.words[y];
                            o = new e.Text(z.text);
                            var A = "\\n" == z.text;
                            !a.noWrap && (u + z.width >= r || A === !0) && (b(m, p, u, m.properties.leading), m.add(p), u = 0, v += m.properties.leading, x += 1, p = new e.Group("line" + x), p.y = v), A !== !0 && (o.moveTo(u, 0), u += n.spaceWidth + z.width, p.add(o))
                        }
                        if (b(m, p, u, m.properties.leading), m.add(p), "left" === a.align) m.moveTo(a.width - q, null, null);
                        else if ("right" === a.align) {
                            for (t in m.children) p = m.children[t], p.moveTo(a.width - p.width, null, null);
                            m.moveTo(0 - (a.width - q), null, null)
                        } else {
                            for (t in m.children) p = m.children[t], p.moveTo((m.width - p.width) / 2, null, null);
                            m.moveTo((a.width - m.width) / 2, null, null)
                        }
                        m.moveTo(null, (a.height - m.height) / 2, null), (a.height - m.height) / 2 < 0 && m.moveTo(null, 0, null)
                    } else o = new e.Text(a.text), p = new e.Group("line0"), p.add(o), m.add(p), "left" === a.align ? m.moveTo(a.width - q, null, null) : "right" === a.align ? m.moveTo(0 - (a.width - q), null, null) : m.moveTo((a.width - n.boundingBox.width) / 2, null, null), m.moveTo(null, (a.height - n.boundingBox.height) / 2, null);
                    return d
                }

                function i(a, b, c, d) {
                    var e = parseInt(a, 10),
                        f = parseInt(b, 10),
                        g = Math.max(e, f),
                        h = Math.min(e, f),
                        i = .8 * Math.min(h, g * d);
                    return Math.round(Math.max(c, i))
                }

                function j(a) {
                    var b;
                    b = null == a || null == a.nodeType ? D.vars.resizableImages : [a];
                    for (var c = 0, d = b.length; c < d; c++) {
                        var e = b[c];
                        if (e.holderData) {
                            var f = e.holderData.flags,
                                h = A(e);
                            if (h) {
                                if (!e.holderData.resizeUpdate) continue;
                                if (f.fluid && f.auto) {
                                    var i = e.holderData.fluidConfig;
                                    switch (i.mode) {
                                        case "width":
                                            h.height = h.width / i.ratio;
                                            break;
                                        case "height":
                                            h.width = h.height * i.ratio
                                    }
                                }
                                var j = {
                                    mode: "image",
                                    holderSettings: {
                                        dimensions: h,
                                        theme: f.theme,
                                        flags: f
                                    },
                                    el: e,
                                    engineSettings: e.holderData.engineSettings
                                };
                                "exact" == f.textmode && (f.exactDimensions = h, j.holderSettings.dimensions = f.dimensions), g(j)
                            } else n(e)
                        }
                    }
                }

                function k(a) {
                    if (a.holderData) {
                        var b = A(a);
                        if (b) {
                            var c = a.holderData.flags,
                                d = {
                                    fluidHeight: "%" == c.dimensions.height.slice(-1),
                                    fluidWidth: "%" == c.dimensions.width.slice(-1),
                                    mode: null,
                                    initialDimensions: b
                                };
                            d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height), a.holderData.fluidConfig = d
                        } else n(a)
                    }
                }

                function l() {
                    var a, c = [],
                        d = Object.keys(D.vars.invisibleImages);
                    d.forEach(function (b) {
                        a = D.vars.invisibleImages[b], A(a) && "img" == a.nodeName.toLowerCase() && (c.push(a), delete D.vars.invisibleImages[b])
                    }), c.length && C.run({
                        images: c
                    }), setTimeout(function () {
                        b.requestAnimationFrame(l)
                    }, 10)
                }

                function m() {
                    D.vars.visibilityCheckStarted || (b.requestAnimationFrame(l), D.vars.visibilityCheckStarted = !0)
                }

                function n(a) {
                    a.holderData.invisibleId || (D.vars.invisibleId += 1, D.vars.invisibleImages["i" + D.vars.invisibleId] = a, a.holderData.invisibleId = D.vars.invisibleId)
                }

                function o(a) {
                    D.vars.debounceTimer || a.call(this), D.vars.debounceTimer && b.clearTimeout(D.vars.debounceTimer), D.vars.debounceTimer = b.setTimeout(function () {
                        D.vars.debounceTimer = null, a.call(this)
                    }, D.setup.debounce)
                }

                function p() {
                    o(function () {
                        j(null)
                    })
                }
                var q = c(2),
                    r = c(3),
                    s = c(4),
                    t = c(5),
                    u = c(6),
                    v = c(7),
                    w = c(8),
                    x = c(9),
                    y = c(10),
                    z = t.extend,
                    A = t.dimensionCheck,
                    B = x.svg_ns,
                    C = {
                        version: x.version,
                        addTheme: function (a, b) {
                            return null != a && null != b && (D.settings.themes[a] = b), delete D.vars.cache.themeKeys, this
                        },
                        addImage: function (a, b) {
                            var c = v.getNodeArray(b);
                            return c.forEach(function (b) {
                                var c = v.newEl("img"),
                                    d = {};
                                d[D.setup.dataAttr] = a, v.setAttr(c, d), b.appendChild(c)
                            }), this
                        },
                        setResizeUpdate: function (a, b) {
                            a.holderData && (a.holderData.resizeUpdate = !!b, a.holderData.resizeUpdate && j(a))
                        },
                        run: function (a) {
                            a = a || {};
                            var c = {},
                                g = z(D.settings, a);
                            D.vars.preempted = !0, D.vars.dataAttr = g.dataAttr || D.setup.dataAttr, D.vars.lineWrapRatio = g.lineWrapRatio || D.setup.lineWrapRatio, c.renderer = g.renderer ? g.renderer : D.setup.renderer, D.setup.renderers.join(",").indexOf(c.renderer) === -1 && (c.renderer = D.setup.supportsSVG ? "svg" : D.setup.supportsCanvas ? "canvas" : "html");
                            var h = v.getNodeArray(g.images),
                                i = v.getNodeArray(g.bgnodes),
                                j = v.getNodeArray(g.stylenodes),
                                k = v.getNodeArray(g.objects);
                            return c.stylesheets = [], c.svgXMLStylesheet = !0, c.noFontFallback = !!g.noFontFallback && g.noFontFallback, j.forEach(function (a) {
                                if (a.attributes.rel && a.attributes.href && "stylesheet" == a.attributes.rel.value) {
                                    var b = a.attributes.href.value,
                                        d = v.newEl("a");
                                    d.href = b;
                                    var e = d.protocol + "//" + d.host + d.pathname + d.search;
                                    c.stylesheets.push(e)
                                }
                            }), i.forEach(function (a) {
                                if (b.getComputedStyle) {
                                    var d = b.getComputedStyle(a, null).getPropertyValue("background-image"),
                                        h = a.getAttribute("data-background-src"),
                                        i = h || d,
                                        j = null,
                                        k = g.domain + "/",
                                        l = i.indexOf(k);
                                    if (0 === l) j = i;
                                    else if (1 === l && "?" === i[0]) j = i.slice(1);
                                    else {
                                        var m = i.substr(l).match(/([^\"]*)"?\)/);
                                        if (null !== m) j = m[1];
                                        else if (0 === i.indexOf("url(")) throw "Holder: unable to parse background URL: " + i
                                    }
                                    if (null != j) {
                                        var n = e(j, g);
                                        n && f({
                                            mode: "background",
                                            el: a,
                                            flags: n,
                                            engineSettings: c
                                        })
                                    }
                                }
                            }), k.forEach(function (a) {
                                var b = {};
                                try {
                                    b.data = a.getAttribute("data"), b.dataSrc = a.getAttribute(D.vars.dataAttr)
                                } catch (e) {}
                                var f = null != b.data && 0 === b.data.indexOf(g.domain),
                                    h = null != b.dataSrc && 0 === b.dataSrc.indexOf(g.domain);
                                f ? d(g, c, b.data, a) : h && d(g, c, b.dataSrc, a)
                            }), h.forEach(function (a) {
                                var b = {};
                                try {
                                    b.src = a.getAttribute("src"), b.dataSrc = a.getAttribute(D.vars.dataAttr), b.rendered = a.getAttribute("data-holder-rendered")
                                } catch (e) {}
                                var f = null != b.src,
                                    h = null != b.dataSrc && 0 === b.dataSrc.indexOf(g.domain),
                                    i = null != b.rendered && "true" == b.rendered;
                                f ? 0 === b.src.indexOf(g.domain) ? d(g, c, b.src, a) : h && (i ? d(g, c, b.dataSrc, a) : ! function (a, b, c, e, f) {
                                    t.imageExists(a, function (a) {
                                        a || d(b, c, e, f)
                                    })
                                }(b.src, g, c, b.dataSrc, a)) : h && d(g, c, b.dataSrc, a)
                            }), this
                        }
                    },
                    D = {
                        settings: {
                            domain: "holder.js",
                            images: "img",
                            objects: "object",
                            bgnodes: "body .holderjs",
                            stylenodes: "head link.holderjs",
                            themes: {
                                gray: {
                                    background: "#EEEEEE",
                                    foreground: "#AAAAAA"
                                },
                                social: {
                                    background: "#3a5a97",
                                    foreground: "#FFFFFF"
                                },
                                industrial: {
                                    background: "#434A52",
                                    foreground: "#C2F200"
                                },
                                sky: {
                                    background: "#0D8FDB",
                                    foreground: "#FFFFFF"
                                },
                                vine: {
                                    background: "#39DBAC",
                                    foreground: "#1E292C"
                                },
                                lava: {
                                    background: "#F8591A",
                                    foreground: "#1C2846"
                                }
                            }
                        },
                        defaults: {
                            size: 10,
                            units: "pt",
                            scale: 1 / 16
                        }
                    },
                    E = function () {
                        var a = null,
                            b = null,
                            c = null;
                        return function (d) {
                            var e = d.root;
                            if (D.setup.supportsSVG) {
                                var f = !1,
                                    g = function (a) {
                                        return document.createTextNode(a)
                                    };
                                null != a && a.parentNode === document.body || (f = !0), a = u.initSVG(a, e.properties.width, e.properties.height), a.style.display = "block", f && (b = v.newEl("text", B), c = g(null), v.setAttr(b, {
                                    x: 0
                                }), b.appendChild(c), a.appendChild(b), document.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
                                var h = e.children.holderTextGroup,
                                    i = h.properties;
                                v.setAttr(b, {
                                    y: i.font.size,
                                    style: t.cssProps({
                                        "font-weight": i.font.weight,
                                        "font-size": i.font.size + i.font.units,
                                        "font-family": i.font.family
                                    })
                                }), c.nodeValue = i.text;
                                var j = b.getBBox(),
                                    k = Math.ceil(j.width / (e.properties.width * D.vars.lineWrapRatio)),
                                    l = i.text.split(" "),
                                    m = i.text.match(/\\n/g);
                                k += null == m ? 0 : m.length, c.nodeValue = i.text.replace(/[ ]+/g, "");
                                var n = b.getComputedTextLength(),
                                    o = j.width - n,
                                    p = Math.round(o / Math.max(1, l.length - 1)),
                                    q = [];
                                if (k > 1) {
                                    c.nodeValue = "";
                                    for (var r = 0; r < l.length; r++)
                                        if (0 !== l[r].length) {
                                            c.nodeValue = t.decodeHtmlEntity(l[r]);
                                            var s = b.getBBox();
                                            q.push({
                                                text: l[r],
                                                width: s.width
                                            })
                                        }
                                }
                                return a.style.display = "none", {
                                    spaceWidth: p,
                                    lineCount: k,
                                    boundingBox: j,
                                    words: q
                                }
                            }
                            return !1
                        }
                    }(),
                    F = function () {
                        var a = v.newEl("canvas"),
                            b = null;
                        return function (c) {
                            null == b && (b = a.getContext("2d"));
                            var d = c.root;
                            a.width = D.dpr(d.properties.width), a.height = D.dpr(d.properties.height), b.textBaseline = "middle";
                            var e = d.children.holderBg,
                                f = D.dpr(e.width),
                                g = D.dpr(e.height),
                                h = 2,
                                i = h / 2;
                            b.fillStyle = e.properties.fill, b.fillRect(0, 0, f, g), e.properties.outline && (b.strokeStyle = e.properties.outline.fill, b.lineWidth = e.properties.outline.width, b.moveTo(i, i), b.lineTo(f - i, i), b.lineTo(f - i, g - i), b.lineTo(i, g - i), b.lineTo(i, i), b.moveTo(0, i), b.lineTo(f, g - i), b.moveTo(0, g - i), b.lineTo(f, i), b.stroke());
                            var j = d.children.holderTextGroup;
                            b.font = j.properties.font.weight + " " + D.dpr(j.properties.font.size) + j.properties.font.units + " " + j.properties.font.family + ", monospace", b.fillStyle = j.properties.fill;
                            for (var k in j.children) {
                                var l = j.children[k];
                                for (var m in l.children) {
                                    var n = l.children[m],
                                        o = D.dpr(j.x + l.x + n.x),
                                        p = D.dpr(j.y + l.y + n.y + j.properties.leading / 2);
                                    b.fillText(n.properties.text, o, p)
                                }
                            }
                            return a.toDataURL("image/png")
                        }
                    }();
                for (var G in D.flags) D.flags.hasOwnProperty(G) && (D.flags[G].match = function (a) {
                    return a.match(this.regex)
                });
                D.setup = {
                        renderer: "html",
                        debounce: 100,
                        ratio: 1,
                        supportsCanvas: !1,
                        supportsSVG: !1,
                        lineWrapRatio: .9,
                        dataAttr: "data-src",
                        renderers: ["html", "canvas", "svg"]
                    }, D.dpr = function (a) {
                        return a * D.setup.ratio
                    }, D.vars = {
                        preempted: !1,
                        resizableImages: [],
                        invisibleImages: {},
                        invisibleId: 0,
                        visibilityCheckStarted: !1,
                        debounceTimer: null,
                        cache: {}
                    },
                    function () {
                        var a = 1,
                            c = 1,
                            d = v.newEl("canvas"),
                            e = null;
                        d.getContext && d.toDataURL("image/png").indexOf("data:image/png") != -1 && (D.setup.renderer = "canvas", e = d.getContext("2d"), D.setup.supportsCanvas = !0), D.setup.supportsCanvas && (a = b.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), D.setup.ratio = a / c, document.createElementNS && document.createElementNS(B, "svg").createSVGRect && (D.setup.renderer = "svg", D.setup.supportsSVG = !0)
                    }(), m(), q && q(function () {
                        D.vars.preempted || C.run(), b.addEventListener ? (b.addEventListener("resize", p, !1), b.addEventListener("orientationchange", p, !1)) : b.attachEvent("onresize", p), "object" == typeof b.Turbolinks && b.document.addEventListener("page:change", function () {
                            C.run()
                        })
                    }), a.exports = C
            }).call(b, function () {
                return this
            }())
        }, function (a, b, c) {
            function d(a) {
                function b(a) {
                    if (!v) {
                        if (!g.body) return e(b);
                        for (v = !0; a = w.shift();) e(a)
                    }
                }

                function c(a) {
                    (t || a.type === i || g[m] === l) && (d(), b())
                }

                function d() {
                    t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
                }

                function e(a, b) {
                    setTimeout(a, +b >= 0 ? b : 1)
                }

                function f(a) {
                    v ? e(a) : w.push(a)
                }
                null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function y() {
                    document.removeEventListener("DOMContentLoaded", y, !1), document.readyState = "complete"
                }, !1), document.readyState = "loading");
                var g = a.document,
                    h = g.documentElement,
                    i = "load",
                    j = !1,
                    k = "on" + i,
                    l = "complete",
                    m = "readyState",
                    n = "attachEvent",
                    o = "detachEvent",
                    p = "addEventListener",
                    q = "DOMContentLoaded",
                    r = "onreadystatechange",
                    s = "removeEventListener",
                    t = p in g,
                    u = j,
                    v = j,
                    w = [];
                if (g[m] === l) e(b);
                else if (t) g[p](q, c, j), a[p](i, c, j);
                else {
                    g[n](r, c), a[n](k, c);
                    try {
                        u = null == a.frameElement && h
                    } catch (x) {}
                    u && u.doScroll && ! function z() {
                        if (!v) {
                            try {
                                u.doScroll("left")
                            } catch (a) {
                                return e(z, 50)
                            }
                            d(), b()
                        }
                    }()
                }
                return f.version = "1.4.0", f.isReady = function () {
                    return v
                }, f
            }
            a.exports = "undefined" != typeof window && d(window)
        }, function (a, b, c) {
            var d = encodeURIComponent,
                e = decodeURIComponent,
                f = c(11),
                g = c(12),
                h = /(\w+)\[(\d+)\]/,
                i = /\w+\.\w+/;
            b.parse = function (a) {
                if ("string" != typeof a) return {};
                if (a = f(a), "" === a) return {};
                "?" === a.charAt(0) && (a = a.slice(1));
                for (var b = {}, c = a.split("&"), d = 0; d < c.length; d++) {
                    var g, j, k, l = c[d].split("="),
                        m = e(l[0]);
                    if (g = h.exec(m)) b[g[1]] = b[g[1]] || [], b[g[1]][g[2]] = e(l[1]);
                    else if (g = i.test(m)) {
                        for (g = m.split("."), j = b; g.length;)
                            if (k = g.shift(), k.length) {
                                if (j[k]) {
                                    if (j[k] && "object" != typeof j[k]) break
                                } else j[k] = {};
                                g.length || (j[k] = e(l[1])), j = j[k]
                            }
                    } else b[l[0]] = null == l[1] ? "" : e(l[1])
                }
                return b
            }, b.stringify = function (a) {
                if (!a) return "";
                var b = [];
                for (var c in a) {
                    var e = a[c];
                    if ("array" != g(e)) b.push(d(c) + "=" + d(a[c]));
                    else
                        for (var f = 0; f < e.length; ++f) b.push(d(c + "[" + f + "]") + "=" + d(e[f]))
                }
                return b.join("&")
            }
        }, function (a, b, c) {
            var d = function (a) {
                function b(a, b) {
                    for (var c in b) a[c] = b[c];
                    return a
                }
                var c = 1,
                    d = function (a) {
                        c++, this.parent = null, this.children = {}, this.id = c, this.name = "n" + c, "undefined" != typeof a && (this.name = a), this.x = this.y = this.z = 0, this.width = this.height = 0
                    };
                d.prototype.resize = function (a, b) {
                    null != a && (this.width = a), null != b && (this.height = b)
                }, d.prototype.moveTo = function (a, b, c) {
                    this.x = null != a ? a : this.x, this.y = null != b ? b : this.y, this.z = null != c ? c : this.z
                }, d.prototype.add = function (a) {
                    var b = a.name;
                    if ("undefined" != typeof this.children[b]) throw "SceneGraph: child already exists: " + b;
                    this.children[b] = a, a.parent = this
                };
                var e = function () {
                    d.call(this, "root"), this.properties = a
                };
                e.prototype = new d;
                var f = function (a, c) {
                    if (d.call(this, a), this.properties = {
                            fill: "#000000"
                        }, "undefined" != typeof c) b(this.properties, c);
                    else if ("undefined" != typeof a && "string" != typeof a) throw "SceneGraph: invalid node name"
                };
                f.prototype = new d;
                var g = function () {
                    f.apply(this, arguments), this.type = "group"
                };
                g.prototype = new f;
                var h = function () {
                    f.apply(this, arguments), this.type = "rect"
                };
                h.prototype = new f;
                var i = function (a) {
                    f.call(this), this.type = "text", this.properties.text = a
                };
                i.prototype = new f;
                var j = new e;
                return this.Shape = {
                    Rect: h,
                    Text: i,
                    Group: g
                }, this.root = j, this
            };
            a.exports = d
        }, function (a, b, c) {
            b.extend = function (a, b) {
                var c = {};
                for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                if (null != b)
                    for (var e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }, b.cssProps = function (a) {
                var b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                return b.join(";")
            }, b.encodeHtmlEntity = function (a) {
                for (var b = [], c = 0, d = a.length - 1; d >= 0; d--) c = a.charCodeAt(d), c > 128 ? b.unshift(["&#", c, ";"].join("")) : b.unshift(a[d]);
                return b.join("")
            }, b.imageExists = function (a, b) {
                var c = new Image;
                c.onerror = function () {
                    b.call(this, !1)
                }, c.onload = function () {
                    b.call(this, !0)
                }, c.src = a
            }, b.decodeHtmlEntity = function (a) {
                return a.replace(/&#(\d+);/g, function (a, b) {
                    return String.fromCharCode(b)
                })
            }, b.dimensionCheck = function (a) {
                var b = {
                    height: a.clientHeight,
                    width: a.clientWidth
                };
                return !(!b.height || !b.width) && b
            }, b.truthy = function (a) {
                return "string" == typeof a ? "true" === a || "yes" === a || "1" === a || "on" === a || "✓" === a : !!a
            }, b.parseColor = function (a) {
                var b, c = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,
                    d = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
                    e = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,
                    f = a.match(c);
                return null !== f ? (b = f[1] || f[2], "#" !== b[0] ? "#" + b : b) : (f = a.match(d), null !== f ? b = "rgb(" + f.slice(1).join(",") + ")" : (f = a.match(e), null !== f ? b = "rgba(" + f.slice(1).join(",") + ")" : null))
            }
        }, function (a, b, c) {
            (function (a) {
                var d = c(7),
                    e = "http://www.w3.org/2000/svg",
                    f = 8;
                b.initSVG = function (a, b, c) {
                    var g, h, i = !1;
                    a && a.querySelector ? (h = a.querySelector("style"), null === h && (i = !0)) : (a = d.newEl("svg", e), i = !0), i && (g = d.newEl("defs", e), h = d.newEl("style", e), d.setAttr(h, {
                        type: "text/css"
                    }), g.appendChild(h), a.appendChild(g)), a.webkitMatchesSelector && a.setAttribute("xmlns", e);
                    for (var j = 0; j < a.childNodes.length; j++) a.childNodes[j].nodeType === f && a.removeChild(a.childNodes[j]);
                    for (; h.childNodes.length;) h.removeChild(h.childNodes[0]);
                    return d.setAttr(a, {
                        width: b,
                        height: c,
                        viewBox: "0 0 " + b + " " + c,
                        preserveAspectRatio: "none"
                    }), a
                }, b.svgStringToDataURI = function () {
                    var b = "data:image/svg+xml;charset=UTF-8,",
                        c = "data:image/svg+xml;charset=UTF-8;base64,";
                    return function (d, e) {
                        return e ? c + btoa(a.unescape(encodeURIComponent(d))) : b + encodeURIComponent(d)
                    }
                }(), b.serializeSVG = function (b, c) {
                    if (a.XMLSerializer) {
                        var e = new XMLSerializer,
                            f = "",
                            g = c.stylesheets;
                        if (c.svgXMLStylesheet) {
                            for (var h = d.createXML(), i = g.length - 1; i >= 0; i--) {
                                var j = h.createProcessingInstruction("xml-stylesheet", 'href="' + g[i] + '" rel="stylesheet"');
                                h.insertBefore(j, h.firstChild)
                            }
                            h.removeChild(h.documentElement), f = e.serializeToString(h)
                        }
                        var k = e.serializeToString(b);
                        return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), f + k
                    }
                }
            }).call(b, function () {
                return this
            }())
        }, function (a, b, c) {
            (function (a) {
                b.newEl = function (b, c) {
                    if (a.document) return null == c ? a.document.createElement(b) : a.document.createElementNS(c, b)
                }, b.setAttr = function (a, b) {
                    for (var c in b) a.setAttribute(c, b[c])
                }, b.createXML = function () {
                    if (a.DOMParser) return (new DOMParser).parseFromString("<xml />", "application/xml")
                }, b.getNodeArray = function (b) {
                    var c = null;
                    return "string" == typeof b ? c = document.querySelectorAll(b) : a.NodeList && b instanceof a.NodeList ? c = b : a.Node && b instanceof a.Node ? c = [b] : a.HTMLCollection && b instanceof a.HTMLCollection ? c = b : b instanceof Array ? c = b : null === b && (c = []), c = Array.prototype.slice.call(c)
                }
            }).call(b, function () {
                return this
            }())
        }, function (a, b, c) {
            var d = function (a, b) {
                "string" == typeof a && (this.original = a, "#" === a.charAt(0) && (a = a.slice(1)), /[^a-f0-9]+/i.test(a) || (3 === a.length && (a = a.replace(/./g, "$&$&")), 6 === a.length && (this.alpha = 1, b && b.alpha && (this.alpha = b.alpha), this.set(parseInt(a, 16)))))
            };
            d.rgb2hex = function (a, b, c) {
                function d(a) {
                    var b = (0 | a).toString(16);
                    return a < 16 && (b = "0" + b), b
                }
                return [a, b, c].map(d).join("")
            }, d.hsl2rgb = function (a, b, c) {
                var d = a / 60,
                    e = (1 - Math.abs(2 * c - 1)) * b,
                    f = e * (1 - Math.abs(parseInt(d) % 2 - 1)),
                    g = c - e / 2,
                    h = 0,
                    i = 0,
                    j = 0;
                return d >= 0 && d < 1 ? (h = e, i = f) : d >= 1 && d < 2 ? (h = f, i = e) : d >= 2 && d < 3 ? (i = e, j = f) : d >= 3 && d < 4 ? (i = f, j = e) : d >= 4 && d < 5 ? (h = f, j = e) : d >= 5 && d < 6 && (h = e, j = f), h += g, i += g, j += g, h = parseInt(255 * h), i = parseInt(255 * i), j = parseInt(255 * j), [h, i, j]
            }, d.prototype.set = function (a) {
                this.raw = a;
                var b = (16711680 & this.raw) >> 16,
                    c = (65280 & this.raw) >> 8,
                    d = 255 & this.raw,
                    e = .2126 * b + .7152 * c + .0722 * d,
                    f = -.09991 * b - .33609 * c + .436 * d,
                    g = .615 * b - .55861 * c - .05639 * d;
                return this.rgb = {
                    r: b,
                    g: c,
                    b: d
                }, this.yuv = {
                    y: e,
                    u: f,
                    v: g
                }, this
            }, d.prototype.lighten = function (a) {
                var b = Math.min(1, Math.max(0, Math.abs(a))) * (a < 0 ? -1 : 1),
                    c = 255 * b | 0,
                    e = Math.min(255, Math.max(0, this.rgb.r + c)),
                    f = Math.min(255, Math.max(0, this.rgb.g + c)),
                    g = Math.min(255, Math.max(0, this.rgb.b + c)),
                    h = d.rgb2hex(e, f, g);
                return new d(h)
            }, d.prototype.toHex = function (a) {
                return (a ? "#" : "") + this.raw.toString(16)
            }, d.prototype.lighterThan = function (a) {
                return a instanceof d || (a = new d(a)), this.yuv.y > a.yuv.y
            }, d.prototype.blendAlpha = function (a) {
                a instanceof d || (a = new d(a));
                var b = a,
                    c = this,
                    e = b.alpha * b.rgb.r + (1 - b.alpha) * c.rgb.r,
                    f = b.alpha * b.rgb.g + (1 - b.alpha) * c.rgb.g,
                    g = b.alpha * b.rgb.b + (1 - b.alpha) * c.rgb.b;
                return new d(d.rgb2hex(e, f, g))
            }, a.exports = d
        }, function (a, b, c) {
            a.exports = {
                version: "2.8.2",
                svg_ns: "http://www.w3.org/2000/svg"
            }
        }, function (a, b, c) {
            (function (b) {
                var d = c(6),
                    e = c(7),
                    f = c(5),
                    g = c(9),
                    h = g.svg_ns,
                    i = "\nCreated with Holder.js " + g.version + ".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n";
                a.exports = function () {
                    if (b.XMLSerializer) {
                        var a = e.createXML(),
                            c = d.initSVG(null, 0, 0),
                            g = e.newEl("rect", h);
                        return c.appendChild(g),
                            function (b, j) {
                                var k = b.root;
                                d.initSVG(c, k.properties.width, k.properties.height);
                                for (var l = c.querySelectorAll("g"), m = 0; m < l.length; m++) l[m].parentNode.removeChild(l[m]);
                                var n = j.holderSettings.flags.holderURL,
                                    o = "holder_" + (Number(new Date) + 32768 + (0 | 32768 * Math.random())).toString(16),
                                    p = e.newEl("g", h),
                                    q = k.children.holderTextGroup,
                                    r = q.properties,
                                    s = e.newEl("g", h),
                                    t = q.textPositionData,
                                    u = "#" + o + " text { " + f.cssProps({
                                        fill: r.fill,
                                        "font-weight": r.font.weight,
                                        "font-family": r.font.family + ", monospace",
                                        "font-size": r.font.size + r.font.units
                                    }) + " } ",
                                    v = a.createComment("\nSource URL: " + n + i),
                                    w = a.createCDATASection(u),
                                    x = c.querySelector("style"),
                                    y = k.children.holderBg;
                                if (e.setAttr(p, {
                                        id: o
                                    }), c.insertBefore(v, c.firstChild), x.appendChild(w), p.appendChild(g), y.properties.outline) {
                                    var z = e.newEl("path", h),
                                        A = y.properties.outline.width,
                                        B = A / 2;
                                    e.setAttr(z, {
                                        d: ["M", B, B, "H", y.width - B, "V", y.height - B, "H", B, "V", 0, "M", 0, B, "L", y.width, y.height - B, "M", 0, y.height - B, "L", y.width, B].join(" "),
                                        "stroke-width": y.properties.outline.width,
                                        stroke: y.properties.outline.fill,
                                        fill: "none"
                                    }), p.appendChild(z)
                                }
                                p.appendChild(s), c.appendChild(p), e.setAttr(g, {
                                    width: y.width,
                                    height: y.height,
                                    fill: y.properties.fill
                                }), q.y += .8 * t.boundingBox.height;
                                for (var C in q.children) {
                                    var D = q.children[C];
                                    for (var E in D.children) {
                                        var F = D.children[E],
                                            G = q.x + D.x + F.x,
                                            H = q.y + D.y + F.y,
                                            I = e.newEl("text", h),
                                            J = document.createTextNode(null);
                                        e.setAttr(I, {
                                            x: G,
                                            y: H
                                        }), J.nodeValue = F.properties.text, I.appendChild(J), s.appendChild(I)
                                    }
                                }
                                var K = d.svgStringToDataURI(d.serializeSVG(c, j.engineSettings), "background" === j.mode);
                                return K
                            }
                    }
                }()
            }).call(b, function () {
                return this
            }())
        }, function (a, b, c) {
            function d(a) {
                return a.replace(/^\s*|\s*$/g, "")
            }
            b = a.exports = d, b.left = function (a) {
                return a.replace(/^\s*/, "")
            }, b.right = function (a) {
                return a.replace(/\s*$/, "")
            }
        }, function (a, b, c) {
            var d = Object.prototype.toString;
            a.exports = function (a) {
                switch (d.call(a)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                return null === a ? "null" : void 0 === a ? "undefined" : a !== a ? "nan" : a && 1 === a.nodeType ? "element" : (a = a.valueOf ? a.valueOf() : Object.prototype.valueOf.apply(a), typeof a)
            }
        }])
    }),
    function (a, b) {
        b && (Holder = a.Holder)
    }(this, "undefined" != typeof Meteor && "undefined" != typeof Package),
    function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function (a) {
        function b(b) {
            var c = {},
                d = /^jQuery\d+$/;
            return a.each(b.attributes, function (a, b) {
                b.specified && !d.test(b.name) && (c[b.name] = b.value)
            }), c
        }

        function c(b, c) {
            var d = this,
                f = a(d);
            if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
                if (f.data("placeholder-password")) {
                    if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
                    f.focus()
                } else d.value = "", f.removeClass(m.customClass), d == e() && d.select()
        }

        function d() {
            var d, e = this,
                f = a(e),
                g = this.id;
            if ("" === e.value) {
                if ("password" === e.type) {
                    if (!f.data("placeholder-textinput")) {
                        try {
                            d = f.clone().prop({
                                type: "text"
                            })
                        } catch (h) {
                            d = a("<input>").attr(a.extend(b(this), {
                                type: "text"
                            }))
                        }
                        d.removeAttr("name").data({
                            "placeholder-password": f,
                            "placeholder-id": g
                        }).bind("focus.placeholder", c), f.data({
                            "placeholder-textinput": d,
                            "placeholder-id": g
                        }).before(d)
                    }
                    f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
                }
                f.addClass(m.customClass), f[0].value = f.attr("placeholder")
            } else f.removeClass(m.customClass)
        }

        function e() {
            try {
                return document.activeElement
            } catch (a) {}
        }
        var f, g, h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
            i = "placeholder" in document.createElement("input") && !h,
            j = "placeholder" in document.createElement("textarea") && !h,
            k = a.valHooks,
            l = a.propHooks;
        if (i && j) g = a.fn.placeholder = function () {
            return this
        }, g.input = g.textarea = !0;
        else {
            var m = {};
            g = a.fn.placeholder = function (b) {
                var e = {
                    customClass: "placeholder"
                };
                m = a.extend({}, e, b);
                var f = this;
                return f.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
                    "focus.placeholder": c,
                    "blur.placeholder": d
                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), f
            }, g.input = i, g.textarea = j, f = {
                get: function (b) {
                    var c = a(b),
                        d = c.data("placeholder-password");
                    return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
                },
                set: function (b, f) {
                    var g = a(b),
                        h = g.data("placeholder-password");
                    return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass(m.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f
                }
            }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function () {
                a(document).delegate("form", "submit.placeholder", function () {
                    var b = a("." + m.customClass, this).each(c);
                    setTimeout(function () {
                        b.each(d)
                    }, 10)
                })
            }), a(window).bind("beforeunload.placeholder", function () {
                a("." + m.customClass).each(function () {
                    this.value = ""
                })
            })
        }
    }),
    function (a) {
        "use strict";

        function b() {
            v(!0)
        }
        var c = {};
        a.respond = c, c.update = function () {};
        var d = [],
            e = function () {
                var b = !1;
                try {
                    b = new a.XMLHttpRequest
                } catch (c) {
                    b = new a.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function () {
                    return b
                }
            }(),
            f = function (a, b) {
                var c = e();
                c && (c.open("GET", a, !0), c.onreadystatechange = function () {
                    4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
                }, 4 !== c.readyState && c.send(null))
            },
            g = function (a) {
                return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
            };
        if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g
            }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
            var h, i, j, k = a.document,
                l = k.documentElement,
                m = [],
                n = [],
                o = [],
                p = {},
                q = 30,
                r = k.getElementsByTagName("head")[0] || l,
                s = k.getElementsByTagName("base")[0],
                t = r.getElementsByTagName("link"),
                u = function () {
                    var a, b = k.createElement("div"),
                        c = k.body,
                        d = l.style.fontSize,
                        e = c && c.style.fontSize,
                        f = !1;
                    return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a)
                },
                v = function (b) {
                    var c = "clientWidth",
                        d = l[c],
                        e = "CSS1Compat" === k.compatMode && d || k.body[c] || d,
                        f = {},
                        g = t[t.length - 1],
                        p = (new Date).getTime();
                    if (b && h && p - h < q) return a.clearTimeout(i), void(i = a.setTimeout(v, q));
                    h = p;
                    for (var s in m)
                        if (m.hasOwnProperty(s)) {
                            var w = m[s],
                                x = w.minw,
                                y = w.maxw,
                                z = null === x,
                                A = null === y,
                                B = "em";
                            x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || e <= y)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
                        }
                    for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
                    o.length = 0;
                    for (var D in f)
                        if (f.hasOwnProperty(D)) {
                            var E = k.createElement("style"),
                                F = f[D].join("\n");
                            E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E)
                        }
                },
                w = function (a, b, d) {
                    var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media),
                        f = e && e.length || 0;
                    b = b.substring(0, b.lastIndexOf("/"));
                    var h = function (a) {
                            return a.replace(c.regex.urls, "$1" + b + "$2$3")
                        },
                        i = !f && d;
                    b.length && (b += "/"), i && (f = 1);
                    for (var j = 0; j < f; j++) {
                        var k, l, o, p;
                        i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length;
                        for (var q = 0; q < p; q++) l = o[q], g(l) || m.push({
                            media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
                            rules: n.length - 1,
                            hasquery: l.indexOf("(") > -1,
                            minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    v()
                },
                x = function () {
                    if (d.length) {
                        var b = d.shift();
                        f(b.href, function (c) {
                            w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function () {
                                x()
                            }, 0)
                        })
                    }
                },
                y = function () {
                    for (var b = 0; b < t.length; b++) {
                        var c = t[b],
                            e = c.href,
                            f = c.media,
                            g = c.rel && "stylesheet" === c.rel.toLowerCase();
                        e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (/^([a-zA-Z:]*\/\/)/.test(e) || s) && e.replace(RegExp.$1, "").split("/")[0] !== a.location.host || ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({
                            href: e,
                            media: f
                        })))
                    }
                    x()
                };
            bindEvent = function () {
                Function.prototype.bind || (Function.prototype.bind = function (a) {
                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var b = Array.prototype.slice.call(arguments, 1),
                        c = this,
                        d = function () {},
                        e = function () {
                            return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                        };
                    return d.prototype = this.prototype, e.prototype = new d, e
                })
            }, y(), bindEvent(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
        }
    }(this),
    function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function (a) {
        "use strict";
        var b = window.Slick || {};
        b = function () {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (a, b) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, f.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.hidden = "hidden", f.paused = !1, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, e, d), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0), f.checkResponsive(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (c < 0 || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function (b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function () {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.asNavFor = function (b) {
            var c = this,
                d = c.options.asNavFor;
            d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function (a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function () {
            var a = this;
            a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
        }, b.prototype.buildArrows = function () {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function () {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function () {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode !== !0 && b.options.swipeToSlide !== !0 || (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function () {
            var a, b, c, d, e, f, g, h = this;
            if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
                for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; a < e; a++) {
                    var i = document.createElement("div");
                    for (b = 0; b < h.options.rows; b++) {
                        var j = document.createElement("div");
                        for (c = 0; c < h.options.slidesPerRow; c++) {
                            var k = a * g + (b * h.options.slidesPerRow + c);
                            f.get(k) && j.appendChild(f.get(k))
                        }
                        i.appendChild(j)
                    }
                    d.appendChild(i)
                }
                h.$slider.html(d), h.$slider.children().children().children().css({
                    width: 100 / h.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function (b, c) {
            var d, e, f, g = this,
                h = !1,
                i = g.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                e = null;
                for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
            }
        }, b.prototype.changeSlide = function (b, c) {
            var d, e, f, g = this,
                h = a(b.target);
            switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                    g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function (a) {
            var b, c, d = this;
            if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (var e in b) {
                    if (a < b[e]) {
                        a = c;
                        break
                    }
                    c = b[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function () {
            var b = this;
            b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpRows = function () {
            var a, b = this;
            b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.html(a))
        }, b.prototype.clickHandler = function (a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function (b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function (a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function (a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function () {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function (a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
            var b = this;
            null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function () {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d - 1
        }, b.prototype.getLeft = function (a) {
            var b, c, d, e = this,
                f = 0;
            return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = d[0] ? d[0].offsetLeft * -1 : 0, e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = d[0] ? d[0].offsetLeft * -1 : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function () {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (b.options.infinite === !1 ? a = b.slideCount : (c = b.options.slidesToScroll * -1, d = b.options.slidesToScroll * -1, a = 2 * b.slideCount); c < a;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function () {
            return this
        }, b.prototype.getSlideCount = function () {
            var b, c, d, e = this;
            return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
                if (f.offsetLeft - d + a(f).outerWidth() / 2 > e.swipeLeft * -1) return c = f, !1
            }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function (b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
        }, b.prototype.initArrowEvents = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function () {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
        }, b.prototype.initializeEvents = function () {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
        }, b.prototype.keyHandler = function (a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, b.prototype.lazyLoad = function () {
            function b(b) {
                a("img[data-lazy]", b).each(function () {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = document.createElement("img");
                    d.onload = function () {
                        b.animate({
                            opacity: 0
                        }, 100, function () {
                            b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function () {
                                b.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, d.src = c
                })
            }
            var c, d, e, f, g = this;
            g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(g.options.slidesToShow * -1), b(d))
        }, b.prototype.loadSlider = function () {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function () {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function () {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function () {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function () {
            var a = this;
            a.paused = !1, a.autoPlay()
        }, b.prototype.postSlide = function (a) {
            var b = this;
            b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
        }, b.prototype.prev = b.prototype.slickPrev = function () {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function (a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function () {
            var b, c, d = this;
            b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function () {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
            }).error(function () {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function (b) {
            var c = this,
                d = c.currentSlide;
            c.destroy(!0), a.extend(c, c.initials, {
                currentSlide: d
            }), c.init(), b || c.changeSlide({
                data: {
                    message: "index",
                    index: d
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function () {
            var b, c, d, e = this,
                f = e.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                e.respondTo = e.options.respondTo || "window";
                for (b in f)
                    if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                        for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                        e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                    }
                e.breakpoints.sort(function (a, b) {
                    return e.options.mobileFirst ? a - b : b - a
                })
            }
        }, b.prototype.reinit = function () {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
        }, b.prototype.resize = function () {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || a < 0 || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function (a) {
            var b, c, d = this,
                e = {};
            d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function () {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function () {
            var b, c = this;
            c.$slides.each(function (d, e) {
                b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: c.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
            var e, f, g = this;
            if ("responsive" === b && "array" === a.type(c))
                for (f in c)
                    if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                    else {
                        for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                        g.options.responsive.push(c[f])
                    }
            else g.options[b] = c;
            d === !0 && (g.unload(), g.reinit())
        }, b.prototype.setPosition = function () {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function () {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function (a) {
            var b, c, d, e, f = this;
            c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
        }, b.prototype.setupInfinite = function () {
            var b, c, d, e = this;
            if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; b < d; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.setPaused = function (a) {
            var b = this;
            b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
        }, b.prototype.selectHandler = function (b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function (a, b, c) {
            var d, e, f, g, h = null,
                i = this;
            if (b = b || !1, (i.animating !== !0 || i.options.waitForAnimate !== !0) && !(i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow)) return b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (a < 0 || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                i.postSlide(d)
            }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (a < 0 || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                i.postSlide(d)
            }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = d < 0 ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
                i.postSlide(e)
            })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
                i.postSlide(e)
            }) : i.postSlide(e)))
        }, b.prototype.startLoad = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function () {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), d < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : d <= 360 && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && d <= 225 ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && d <= 135 ? "left" : "right" : "vertical"
        }, b.prototype.swipeEnd = function (a) {
            var b, c = this;
            if (c.dragging = !1, c.shouldClick = !(c.touchObject.swipeLength > 10), void 0 === c.touchObject.curX) return !1;
            if (c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (c.swipeDirection()) {
                case "left":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), c.slideHandler(b), c.currentDirection = 0, c.touchObject = {}, c.$slider.trigger("swipe", [c, "left"]);
                    break;
                case "right":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), c.slideHandler(b), c.currentDirection = 1, c.touchObject = {}, c.$slider.trigger("swipe", [c, "right"])
            } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
        }, b.prototype.swipeHandler = function (a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && a.type.indexOf("mouse") !== -1)) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function (a) {
            var b, c, d, e, f, g = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade !== !0 && g.options.touchMove !== !1 && (g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
        }, b.prototype.swipeStart = function (a) {
            var b, c = this;
            return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function () {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function (a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function () {
            var a, b = this;
            a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function () {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function () {
            var a = this;
            document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
        }, b.prototype.initADA = function () {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.activateADA = function () {
            var a = this,
                b = a.$slider.find("*").is(":focus");
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false",
                tabindex: "0"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            }), b && a.$slideTrack.find(".slick-active").focus()
        }, b.prototype.focusHandler = function () {
            var b = this;
            b.$slider.on("focus.slick blur.slick", "*", function (c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function () {
                    b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
                }, 0)
            })
        }, a.fn.slick = function () {
            var a, c = this,
                d = arguments[0],
                e = Array.prototype.slice.call(arguments, 1),
                f = c.length,
                g = 0;
            for (g; g < f; g++)
                if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g], d) : a = c[g].slick[d].apply(c[g].slick, e), "undefined" != typeof a) return a;
            return c
        }
    });
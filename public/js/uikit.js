! function() {
    "use strict";
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function t(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var e = t((function(t, e) {
            /*! UIkit 3.2.4 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */
            t.exports = function() {
                var t = Object.prototype,
                    e = t.hasOwnProperty;

                function i(t, i) {
                    return e.call(t, i)
                }
                var n = {},
                    o = /([a-z\d])([A-Z])/g;

                function r(t) {
                    return t in n || (n[t] = t.replace(o, "$1-$2").toLowerCase()), n[t]
                }
                var s = /-(\w)/g;

                function h(t) {
                    return t.replace(s, a)
                }

                function a(t, e) {
                    return e ? e.toUpperCase() : ""
                }

                function l(t) {
                    return t.length ? a(0, t.charAt(0)) + t.slice(1) : ""
                }
                var c = String.prototype,
                    u = c.startsWith || function(t) {
                        return 0 === this.lastIndexOf(t, 0)
                    };

                function d(t, e) {
                    return u.call(t, e)
                }
                var f = c.endsWith || function(t) {
                    return this.substr(-t.length) === t
                };

                function g(t, e) {
                    return f.call(t, e)
                }
                var p = Array.prototype,
                    v = function(t, e) {
                        return ~this.indexOf(t, e)
                    },
                    w = c.includes || v,
                    m = p.includes || v;

                function x(t, e) {
                    return t && (A(t) ? w : m).call(t, e)
                }
                var y = p.findIndex || function(t) {
                    for (var e = arguments, i = 0; i < this.length; i++)
                        if (t.call(e[1], this[i], i, this)) return i;
                    return -1
                };

                function k(t, e) {
                    return y.call(t, e)
                }
                var b = Array.isArray;

                function C(t) {
                    return "function" == typeof t
                }

                function L(t) {
                    return null !== t && "object" == typeof t
                }
                var $ = t.toString;

                function M(t) {
                    return "[object Object]" === $.call(t)
                }

                function B(t) {
                    return L(t) && t === t.window
                }

                function I(t) {
                    return L(t) && 9 === t.nodeType
                }

                function S(t) {
                    return L(t) && !!t.jquery
                }

                function T(t) {
                    return t instanceof Node || L(t) && t.nodeType >= 1
                }

                function E(t) {
                    return $.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
                }

                function z(t) {
                    return "boolean" == typeof t
                }

                function A(t) {
                    return "string" == typeof t
                }

                function _(t) {
                    return "number" == typeof t
                }

                function N(t) {
                    return _(t) || A(t) && !isNaN(t - parseFloat(t))
                }

                function H(t) {
                    return !(b(t) ? t.length : L(t) && Object.keys(t).length)
                }

                function D(t) {
                    return void 0 === t
                }

                function P(t) {
                    return z(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
                }

                function O(t) {
                    var e = Number(t);
                    return !isNaN(e) && e
                }

                function Z(t) {
                    return parseFloat(t) || 0
                }

                function F(t) {
                    return T(t) || B(t) || I(t) ? t : E(t) || S(t) ? t[0] : b(t) ? F(t[0]) : null
                }

                function j(t) {
                    return T(t) ? [t] : E(t) ? p.slice.call(t) : b(t) ? t.map(F).filter(Boolean) : S(t) ? t.toArray() : []
                }

                function V(t) {
                    return B(t = F(t)) ? t : (I(t) ? t : t.ownerDocument).defaultView
                }

                function W(t) {
                    return b(t) ? t : A(t) ? t.split(/,(?![^(]*\))/).map((function(t) {
                        return N(t) ? O(t) : P(t.trim())
                    })) : [t]
                }

                function q(t) {
                    return t ? g(t, "ms") ? Z(t) : 1e3 * Z(t) : 0
                }

                function R(t, e) {
                    return t === e || L(t) && L(e) && Object.keys(t).length === Object.keys(e).length && K(t, (function(t, i) {
                        return t === e[i]
                    }))
                }

                function Y(t, e, i) {
                    return t.replace(new RegExp(e + "|" + i, "mg"), (function(t) {
                        return t === e ? i : e
                    }))
                }
                var U = Object.assign || function(t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                    t = Object(t);
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        if (null !== r)
                            for (var s in r) i(r, s) && (t[s] = r[s])
                    }
                    return t
                };

                function X(t) {
                    return t[t.length - 1]
                }

                function K(t, e) {
                    for (var i in t)
                        if (!1 === e(t[i], i)) return !1;
                    return !0
                }

                function G(t, e) {
                    return t.sort((function(t, i) {
                        var n = t[e];
                        void 0 === n && (n = 0);
                        var o = i[e];
                        return void 0 === o && (o = 0), n > o ? 1 : o > n ? -1 : 0
                    }))
                }

                function J(t, e) {
                    var i = new Set;
                    return t.filter((function(t) {
                        var n = t[e];
                        return !i.has(n) && (i.add(n) || !0)
                    }))
                }

                function Q(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(O(t) || 0, e), i)
                }

                function tt() {}

                function et(t, e) {
                    return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
                }

                function it(t, e) {
                    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
                }
                var nt = {
                    ratio: function(t, e, i) {
                        var n, o = "width" === e ? "height" : "width";
                        return (n = {})[o] = t[e] ? Math.round(i * t[o] / t[e]) : t[o], n[e] = i, n
                    },
                    contain: function(t, e) {
                        var i = this;
                        return K(t = U({}, t), (function(n, o) {
                            return t = t[o] > e[o] ? i.ratio(t, o, e[o]) : t
                        })), t
                    },
                    cover: function(t, e) {
                        var i = this;
                        return K(t = this.contain(t, e), (function(n, o) {
                            return t = t[o] < e[o] ? i.ratio(t, o, e[o]) : t
                        })), t
                    }
                };

                function ot(t, e, i) {
                    if (L(e))
                        for (var n in e) ot(t, n, e[n]);
                    else {
                        if (D(i)) return (t = F(t)) && t.getAttribute(e);
                        j(t).forEach((function(t) {
                            C(i) && (i = i.call(t, ot(t, e))), null === i ? st(t, e) : t.setAttribute(e, i)
                        }))
                    }
                }

                function rt(t, e) {
                    return j(t).some((function(t) {
                        return t.hasAttribute(e)
                    }))
                }

                function st(t, e) {
                    t = j(t), e.split(" ").forEach((function(e) {
                        return t.forEach((function(t) {
                            return t.hasAttribute(e) && t.removeAttribute(e)
                        }))
                    }))
                }

                function ht(t, e) {
                    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
                        if (rt(t, n[i])) return ot(t, n[i])
                }
                var at = /msie|trident/i.test(window.navigator.userAgent),
                    lt = "rtl" === ot(document.documentElement, "dir"),
                    ct = "ontouchstart" in window,
                    ut = window.PointerEvent,
                    dt = ct || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
                    ft = ut ? "pointerdown" : ct ? "touchstart" : "mousedown",
                    gt = ut ? "pointermove" : ct ? "touchmove" : "mousemove",
                    pt = ut ? "pointerup" : ct ? "touchend" : "mouseup",
                    vt = ut ? "pointerenter" : ct ? "" : "mouseenter",
                    wt = ut ? "pointerleave" : ct ? "" : "mouseleave",
                    mt = ut ? "pointercancel" : "touchcancel";

                function xt(t, e) {
                    return F(t) || bt(t, kt(t, e))
                }

                function yt(t, e) {
                    var i = j(t);
                    return i.length && i || Ct(t, kt(t, e))
                }

                function kt(t, e) {
                    return void 0 === e && (e = document), Bt(t) || I(e) ? e : e.ownerDocument
                }

                function bt(t, e) {
                    return F(Lt(t, e, "querySelector"))
                }

                function Ct(t, e) {
                    return j(Lt(t, e, "querySelectorAll"))
                }

                function Lt(t, e, i) {
                    if (void 0 === e && (e = document), !t || !A(t)) return null;
                    var n;
                    Bt(t = t.replace(Mt, "$1 *")) && (n = [], t = function(t) {
                        return t.match(It).map((function(t) {
                            return t.replace(/,$/, "").trim()
                        }))
                    }(t).map((function(t, i) {
                        var o = e;
                        if ("!" === t[0]) {
                            var r = t.substr(1).trim().split(" ");
                            o = At(e.parentNode, r[0]), t = r.slice(1).join(" ").trim()
                        }
                        if ("-" === t[0]) {
                            var s = t.substr(1).trim().split(" "),
                                h = (o || e).previousElementSibling;
                            o = Et(h, t.substr(1)) ? h : null, t = s.slice(1).join(" ")
                        }
                        return o ? (o.id || (o.id = "uk-" + Date.now() + i, n.push((function() {
                            return st(o, "id")
                        }))), "#" + Ht(o.id) + " " + t) : null
                    })).filter(Boolean).join(","), e = document);
                    try {
                        return e[i](t)
                    } catch (t) {
                        return null
                    } finally {
                        n && n.forEach((function(t) {
                            return t()
                        }))
                    }
                }
                var $t = /(^|[^\\],)\s*[!>+~-]/,
                    Mt = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

                function Bt(t) {
                    return A(t) && t.match($t)
                }
                var It = /.*?[^\\](?:,|$)/g,
                    St = Element.prototype,
                    Tt = St.matches || St.webkitMatchesSelector || St.msMatchesSelector;

                function Et(t, e) {
                    return j(t).some((function(t) {
                        return Tt.call(t, e)
                    }))
                }
                var zt = St.closest || function(t) {
                    var e = this;
                    do {
                        if (Et(e, t)) return e;
                        e = e.parentNode
                    } while (e && 1 === e.nodeType)
                };

                function At(t, e) {
                    return d(e, ">") && (e = e.slice(1)), T(t) ? zt.call(t, e) : j(t).map((function(t) {
                        return At(t, e)
                    })).filter(Boolean)
                }

                function _t(t, e) {
                    var i = [];
                    for (t = F(t);
                        (t = t.parentNode) && 1 === t.nodeType;) Et(t, e) && i.push(t);
                    return i
                }
                var Nt = window.CSS && CSS.escape || function(t) {
                    return t.replace(/([^\x7f-\uFFFF\w-])/g, (function(t) {
                        return "\\" + t
                    }))
                };

                function Ht(t) {
                    return A(t) ? Nt.call(null, t) : ""
                }
                var Dt = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    menuitem: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                };

                function Pt(t) {
                    return j(t).some((function(t) {
                        return Dt[t.tagName.toLowerCase()]
                    }))
                }

                function Ot(t) {
                    return j(t).some((function(t) {
                        return t.offsetWidth || t.offsetHeight || t.getClientRects().length
                    }))
                }
                var Zt = "input,select,textarea,button";

                function Ft(t) {
                    return j(t).some((function(t) {
                        return Et(t, Zt)
                    }))
                }

                function jt(t, e) {
                    return j(t).filter((function(t) {
                        return Et(t, e)
                    }))
                }

                function Vt(t, e) {
                    return A(e) ? Et(t, e) || At(t, e) : t === e || (I(e) ? e.documentElement : F(e)).contains(F(t))
                }

                function Wt() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var i = Xt(t),
                        n = i[0],
                        o = i[1],
                        r = i[2],
                        s = i[3],
                        h = i[4];
                    return n = Qt(n), s.length > 1 && (s = function(t) {
                            return function(e) {
                                return b(e.detail) ? t.apply(void 0, [e].concat(e.detail)) : t(e)
                            }
                        }(s)), h && h.self && (s = function(t) {
                            return function(e) {
                                if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
                            }
                        }(s)), r && (s = function(t, e, i) {
                            var n = this;
                            return function(o) {
                                t.forEach((function(t) {
                                    var r = ">" === e[0] ? Ct(e, t).reverse().filter((function(t) {
                                        return Vt(o.target, t)
                                    }))[0] : At(o.target, e);
                                    r && (o.delegate = t, o.current = r, i.call(n, o))
                                }))
                            }
                        }(n, r, s)), h = Kt(h), o.split(" ").forEach((function(t) {
                            return n.forEach((function(e) {
                                return e.addEventListener(t, s, h)
                            }))
                        })),
                        function() {
                            return qt(n, o, s, h)
                        }
                }

                function qt(t, e, i, n) {
                    void 0 === n && (n = !1), n = Kt(n), t = Qt(t), e.split(" ").forEach((function(e) {
                        return t.forEach((function(t) {
                            return t.removeEventListener(e, i, n)
                        }))
                    }))
                }

                function Rt() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var i = Xt(t),
                        n = i[0],
                        o = i[1],
                        r = i[2],
                        s = i[3],
                        h = i[4],
                        a = i[5],
                        l = Wt(n, o, r, (function(t) {
                            var e = !a || a(t);
                            e && (l(), s(t, e))
                        }), h);
                    return l
                }

                function Yt(t, e, i) {
                    return Qt(t).reduce((function(t, n) {
                        return t && n.dispatchEvent(Ut(e, !0, !0, i))
                    }), !0)
                }

                function Ut(t, e, i, n) {
                    if (void 0 === e && (e = !0), void 0 === i && (i = !1), A(t)) {
                        var o = document.createEvent("CustomEvent");
                        o.initCustomEvent(t, e, i, n), t = o
                    }
                    return t
                }

                function Xt(t) {
                    return C(t[2]) && t.splice(2, 0, !1), t
                }

                function Kt(t) {
                    return t && at && !z(t) ? !!t.capture : t
                }

                function Gt(t) {
                    return t && "addEventListener" in t
                }

                function Jt(t) {
                    return Gt(t) ? t : F(t)
                }

                function Qt(t) {
                    return b(t) ? t.map(Jt).filter(Boolean) : A(t) ? Ct(t) : Gt(t) ? [t] : j(t)
                }

                function te(t) {
                    return "touch" === t.pointerType || !!t.touches
                }

                function ee(t, e) {
                    void 0 === e && (e = "client");
                    var i = t.touches,
                        n = t.changedTouches,
                        o = i && i[0] || n && n[0] || t;
                    return {
                        x: o[e + "X"],
                        y: o[e + "Y"]
                    }
                }
                var ie = "Promise" in window ? window.Promise : se,
                    ne = function() {
                        var t = this;
                        this.promise = new ie((function(e, i) {
                            t.reject = i, t.resolve = e
                        }))
                    },
                    oe = 2,
                    re = "setImmediate" in window ? setImmediate : setTimeout;

                function se(t) {
                    this.state = oe, this.value = void 0, this.deferred = [];
                    var e = this;
                    try {
                        t((function(t) {
                            e.resolve(t)
                        }), (function(t) {
                            e.reject(t)
                        }))
                    } catch (t) {
                        e.reject(t)
                    }
                }
                se.reject = function(t) {
                    return new se((function(e, i) {
                        i(t)
                    }))
                }, se.resolve = function(t) {
                    return new se((function(e, i) {
                        e(t)
                    }))
                }, se.all = function(t) {
                    return new se((function(e, i) {
                        var n = [],
                            o = 0;

                        function r(i) {
                            return function(r) {
                                n[i] = r, (o += 1) === t.length && e(n)
                            }
                        }
                        0 === t.length && e(n);
                        for (var s = 0; s < t.length; s += 1) se.resolve(t[s]).then(r(s), i)
                    }))
                }, se.race = function(t) {
                    return new se((function(e, i) {
                        for (var n = 0; n < t.length; n += 1) se.resolve(t[n]).then(e, i)
                    }))
                };
                var he = se.prototype;

                function ae(t, e) {
                    return new ie((function(i, n) {
                        var o = U({
                            data: null,
                            method: "GET",
                            headers: {},
                            xhr: new XMLHttpRequest,
                            beforeSend: tt,
                            responseType: ""
                        }, e);
                        o.beforeSend(o);
                        var r = o.xhr;
                        for (var s in o)
                            if (s in r) try {
                                r[s] = o[s]
                            } catch (t) {}
                        for (var h in r.open(o.method.toUpperCase(), t), o.headers) r.setRequestHeader(h, o.headers[h]);
                        Wt(r, "load", (function() {
                            0 === r.status || r.status >= 200 && r.status < 300 || 304 === r.status ? i(r) : n(U(Error(r.statusText), {
                                xhr: r,
                                status: r.status
                            }))
                        })), Wt(r, "error", (function() {
                            return n(U(Error("Network Error"), {
                                xhr: r
                            }))
                        })), Wt(r, "timeout", (function() {
                            return n(U(Error("Network Timeout"), {
                                xhr: r
                            }))
                        })), r.send(o.data)
                    }))
                }

                function le(t, e, i) {
                    return new ie((function(n, o) {
                        var r = new Image;
                        r.onerror = o, r.onload = function() {
                            return n(r)
                        }, i && (r.sizes = i), e && (r.srcset = e), r.src = t
                    }))
                }

                function ce(t) {
                    if ("loading" === document.readyState) var e = Wt(document, "DOMContentLoaded", (function() {
                        e(), t()
                    }));
                    else t()
                }

                function ue(t, e) {
                    return e ? j(t).indexOf(F(e)) : j((t = F(t)) && t.parentNode.children).indexOf(t)
                }

                function de(t, e, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = !1);
                    var o = (e = j(e)).length;
                    return t = N(t) ? O(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : ue(e, t), n ? Q(t, 0, o - 1) : (t %= o) < 0 ? t + o : t
                }

                function fe(t) {
                    return (t = Be(t)).innerHTML = "", t
                }

                function ge(t, e) {
                    return t = Be(t), D(e) ? t.innerHTML : pe(t.hasChildNodes() ? fe(t) : t, e)
                }

                function pe(t, e) {
                    return t = Be(t), me(e, (function(e) {
                        return t.appendChild(e)
                    }))
                }

                function ve(t, e) {
                    return t = Be(t), me(e, (function(e) {
                        return t.parentNode.insertBefore(e, t)
                    }))
                }

                function we(t, e) {
                    return t = Be(t), me(e, (function(e) {
                        return t.nextSibling ? ve(t.nextSibling, e) : pe(t.parentNode, e)
                    }))
                }

                function me(t, e) {
                    return (t = A(t) ? $e(t) : t) ? "length" in t ? j(t).map(e) : e(t) : null
                }

                function xe(t) {
                    j(t).map((function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    }))
                }

                function ye(t, e) {
                    for (e = F(ve(t, e)); e.firstChild;) e = e.firstChild;
                    return pe(e, t), e
                }

                function ke(t, e) {
                    return j(j(t).map((function(t) {
                        return t.hasChildNodes ? ye(j(t.childNodes), e) : pe(t, e)
                    })))
                }

                function be(t) {
                    j(t).map((function(t) {
                        return t.parentNode
                    })).filter((function(t, e, i) {
                        return i.indexOf(t) === e
                    })).forEach((function(t) {
                        ve(t, t.childNodes), xe(t)
                    }))
                }
                he.resolve = function(t) {
                    var e = this;
                    if (e.state === oe) {
                        if (t === e) throw new TypeError("Promise settled with itself.");
                        var i = !1;
                        try {
                            var n = t && t.then;
                            if (null !== t && L(t) && C(n)) return void n.call(t, (function(t) {
                                i || e.resolve(t), i = !0
                            }), (function(t) {
                                i || e.reject(t), i = !0
                            }))
                        } catch (t) {
                            return void(i || e.reject(t))
                        }
                        e.state = 0, e.value = t, e.notify()
                    }
                }, he.reject = function(t) {
                    if (this.state === oe) {
                        if (t === this) throw new TypeError("Promise settled with itself.");
                        this.state = 1, this.value = t, this.notify()
                    }
                }, he.notify = function() {
                    var t = this;
                    re((function() {
                        if (t.state !== oe)
                            for (; t.deferred.length;) {
                                var e = t.deferred.shift(),
                                    i = e[0],
                                    n = e[1],
                                    o = e[2],
                                    r = e[3];
                                try {
                                    0 === t.state ? C(i) ? o(i.call(void 0, t.value)) : o(t.value) : 1 === t.state && (C(n) ? o(n.call(void 0, t.value)) : r(t.value))
                                } catch (t) {
                                    r(t)
                                }
                            }
                    }))
                }, he.then = function(t, e) {
                    var i = this;
                    return new se((function(n, o) {
                        i.deferred.push([t, e, n, o]), i.notify()
                    }))
                }, he.catch = function(t) {
                    return this.then(void 0, t)
                };
                var Ce = /^\s*<(\w+|!)[^>]*>/,
                    Le = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

                function $e(t) {
                    var e = Le.exec(t);
                    if (e) return document.createElement(e[1]);
                    var i = document.createElement("div");
                    return Ce.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, i.childNodes.length > 1 ? j(i.childNodes) : i.firstChild
                }

                function Me(t, e) {
                    if (t && 1 === t.nodeType)
                        for (e(t), t = t.firstElementChild; t;) Me(t, e), t = t.nextElementSibling
                }

                function Be(t, e) {
                    return A(t) ? Se(t) ? F($e(t)) : bt(t, e) : F(t)
                }

                function Ie(t, e) {
                    return A(t) ? Se(t) ? j($e(t)) : Ct(t, e) : j(t)
                }

                function Se(t) {
                    return "<" === t[0] || t.match(/^\s*</)
                }

                function Te(t) {
                    for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                    He(t, e, "add")
                }

                function Ee(t) {
                    for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                    He(t, e, "remove")
                }

                function ze(t, e) {
                    ot(t, "class", (function(t) {
                        return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
                    }))
                }

                function Ae(t) {
                    for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                    e[0] && Ee(t, e[0]), e[1] && Te(t, e[1])
                }

                function _e(t, e) {
                    return e && j(t).some((function(t) {
                        return t.classList.contains(e.split(" ")[0])
                    }))
                }

                function Ne(t) {
                    for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                    if (e.length) {
                        var n = A(X(e = De(e))) ? [] : e.pop();
                        e = e.filter(Boolean), j(t).forEach((function(t) {
                            for (var i = t.classList, o = 0; o < e.length; o++) Pe.Force ? i.toggle.apply(i, [e[o]].concat(n)) : i[(D(n) ? !i.contains(e[o]) : n) ? "add" : "remove"](e[o])
                        }))
                    }
                }

                function He(t, e, i) {
                    (e = De(e).filter(Boolean)).length && j(t).forEach((function(t) {
                        var n = t.classList;
                        Pe.Multiple ? n[i].apply(n, e) : e.forEach((function(t) {
                            return n[i](t)
                        }))
                    }))
                }

                function De(t) {
                    return t.reduce((function(t, e) {
                        return t.concat.call(t, A(e) && x(e, " ") ? e.trim().split(" ") : e)
                    }), [])
                }
                var Pe = {
                        get Multiple() {
                            return this.get("_multiple")
                        },
                        get Force() {
                            return this.get("_force")
                        },
                        get: function(t) {
                            if (!i(this, t)) {
                                var e = document.createElement("_").classList;
                                e.add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c")
                            }
                            return this[t]
                        }
                    },
                    Oe = {
                        "animation-iteration-count": !0,
                        "column-count": !0,
                        "fill-opacity": !0,
                        "flex-grow": !0,
                        "flex-shrink": !0,
                        "font-weight": !0,
                        "line-height": !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        "stroke-dasharray": !0,
                        "stroke-dashoffset": !0,
                        widows: !0,
                        "z-index": !0,
                        zoom: !0
                    };

                function Ze(t, e, i) {
                    return j(t).map((function(t) {
                        if (A(e)) {
                            if (e = Re(e), D(i)) return je(t, e);
                            i || _(i) ? t.style[e] = N(i) && !Oe[e] ? i + "px" : i : t.style.removeProperty(e)
                        } else {
                            if (b(e)) {
                                var n = Fe(t);
                                return e.reduce((function(t, e) {
                                    return t[e] = n[Re(e)], t
                                }), {})
                            }
                            L(e) && K(e, (function(e, i) {
                                return Ze(t, i, e)
                            }))
                        }
                        return t
                    }))[0]
                }

                function Fe(t, e) {
                    return (t = F(t)).ownerDocument.defaultView.getComputedStyle(t, e)
                }

                function je(t, e, i) {
                    return Fe(t, i)[e]
                }
                var Ve = {};

                function We(t) {
                    var e = document.documentElement;
                    if (!at) return Fe(e).getPropertyValue("--uk-" + t);
                    if (!(t in Ve)) {
                        var i = pe(e, document.createElement("div"));
                        Te(i, "uk-" + t), Ve[t] = je(i, "content", ":before").replace(/^["'](.*)["']$/, "$1"), xe(i)
                    }
                    return Ve[t]
                }
                var qe = {};

                function Re(t) {
                    var e = qe[t];
                    return e || (e = qe[t] = function(t) {
                        t = r(t);
                        var e = document.documentElement.style;
                        if (t in e) return t;
                        for (var i, n = Ye.length; n--;)
                            if ((i = "-" + Ye[n] + "-" + t) in e) return i
                    }(t) || t), e
                }
                var Ye = ["webkit", "moz", "ms"];

                function Ue(t, e, i, n) {
                    return void 0 === i && (i = 400), void 0 === n && (n = "linear"), ie.all(j(t).map((function(t) {
                        return new ie((function(o, r) {
                            for (var s in e) {
                                var h = Ze(t, s);
                                "" === h && Ze(t, s, h)
                            }
                            var a = setTimeout((function() {
                                return Yt(t, "transitionend")
                            }), i);
                            Rt(t, "transitionend transitioncanceled", (function(e) {
                                var i = e.type;
                                clearTimeout(a), Ee(t, "uk-transition"), Ze(t, {
                                    transitionProperty: "",
                                    transitionDuration: "",
                                    transitionTimingFunction: ""
                                }), "transitioncanceled" === i ? r() : o()
                            }), {
                                self: !0
                            }), Te(t, "uk-transition"), Ze(t, U({
                                transitionProperty: Object.keys(e).map(Re).join(","),
                                transitionDuration: i + "ms",
                                transitionTimingFunction: n
                            }, e))
                        }))
                    })))
                }
                var Xe = {
                        start: Ue,
                        stop: function(t) {
                            return Yt(t, "transitionend"), ie.resolve()
                        },
                        cancel: function(t) {
                            Yt(t, "transitioncanceled")
                        },
                        inProgress: function(t) {
                            return _e(t, "uk-transition")
                        }
                    },
                    Ke = "uk-animation-",
                    Ge = "uk-cancel-animation";

                function Je(t, e, i, n, o) {
                    var r = arguments;
                    return void 0 === i && (i = 200), ie.all(j(t).map((function(t) {
                        return new ie((function(s, h) {
                            if (_e(t, Ge)) requestAnimationFrame((function() {
                                return ie.resolve().then((function() {
                                    return Je.apply(void 0, r).then(s, h)
                                }))
                            }));
                            else {
                                var a = e + " " + Ke + (o ? "leave" : "enter");
                                d(e, Ke) && (n && (a += " uk-transform-origin-" + n), o && (a += " " + Ke + "reverse")), l(), Rt(t, "animationend animationcancel", (function(e) {
                                    var i = e.type,
                                        n = !1;
                                    "animationcancel" === i ? (h(), l()) : (s(), ie.resolve().then((function() {
                                        n = !0, l()
                                    }))), requestAnimationFrame((function() {
                                        n || (Te(t, Ge), requestAnimationFrame((function() {
                                            return Ee(t, Ge)
                                        })))
                                    }))
                                }), {
                                    self: !0
                                }), Ze(t, "animationDuration", i + "ms"), Te(t, a)
                            }

                            function l() {
                                Ze(t, "animationDuration", ""), ze(t, Ke + "\\S*")
                            }
                        }))
                    })))
                }
                var Qe = new RegExp(Ke + "(enter|leave)"),
                    ti = {
                        in: function(t, e, i, n) {
                            return Je(t, e, i, n, !1)
                        },
                        out: function(t, e, i, n) {
                            return Je(t, e, i, n, !0)
                        },
                        inProgress: function(t) {
                            return Qe.test(ot(t, "class"))
                        },
                        cancel: function(t) {
                            Yt(t, "animationcancel")
                        }
                    },
                    ei = {
                        width: ["x", "left", "right"],
                        height: ["y", "top", "bottom"]
                    };

                function ii(t, e, i, n, o, r, s, h) {
                    i = di(i), n = di(n);
                    var a = {
                        element: i,
                        target: n
                    };
                    if (!t || !e) return a;
                    var l = oi(t),
                        c = oi(e),
                        u = c;
                    if (ui(u, i, l, -1), ui(u, n, c, 1), o = fi(o, l.width, l.height), r = fi(r, c.width, c.height), o.x += r.x, o.y += r.y, u.left += o.x, u.top += o.y, s) {
                        var d = [oi(V(t))];
                        h && d.unshift(oi(h)), K(ei, (function(t, e) {
                            var r = t[0],
                                h = t[1],
                                f = t[2];
                            (!0 === s || x(s, r)) && d.some((function(t) {
                                var s = i[r] === h ? -l[e] : i[r] === f ? l[e] : 0,
                                    d = n[r] === h ? c[e] : n[r] === f ? -c[e] : 0;
                                if (u[h] < t[h] || u[h] + l[e] > t[f]) {
                                    var g = l[e] / 2,
                                        p = "center" === n[r] ? -c[e] / 2 : 0;
                                    return "center" === i[r] && (v(g, p) || v(-g, -p)) || v(s, d)
                                }

                                function v(i, n) {
                                    var s = u[h] + i + n - 2 * o[r];
                                    if (s >= t[h] && s + l[e] <= t[f]) return u[h] = s, ["element", "target"].forEach((function(t) {
                                        a[t][r] = i ? a[t][r] === ei[e][1] ? ei[e][2] : ei[e][1] : a[t][r]
                                    })), !0
                                }
                            }))
                        }))
                    }
                    return ni(t, u), a
                }

                function ni(t, e) {
                    if (t = F(t), !e) return oi(t);
                    var i = ni(t),
                        n = Ze(t, "position");
                    ["left", "top"].forEach((function(o) {
                        if (o in e) {
                            var r = Ze(t, o);
                            Ze(t, o, e[o] - i[o] + Z("absolute" === n && "auto" === r ? ri(t)[o] : r))
                        }
                    }))
                }

                function oi(t) {
                    if (!(t = F(t))) return {};
                    var e, i, n = V(t),
                        o = n.pageYOffset,
                        r = n.pageXOffset;
                    if (B(t)) {
                        var s = t.innerHeight,
                            h = t.innerWidth;
                        return {
                            top: o,
                            left: r,
                            height: s,
                            width: h,
                            bottom: o + s,
                            right: r + h
                        }
                    }
                    Ot(t) || "none" !== Ze(t, "display") || (e = ot(t, "style"), i = ot(t, "hidden"), ot(t, {
                        style: (e || "") + ";display:block !important;",
                        hidden: null
                    }));
                    var a = t.getBoundingClientRect();
                    return D(e) || ot(t, {
                        style: e,
                        hidden: i
                    }), {
                        height: a.height,
                        width: a.width,
                        top: a.top + o,
                        left: a.left + r,
                        bottom: a.bottom + o,
                        right: a.right + r
                    }
                }

                function ri(t, e) {
                    var i = ni(t),
                        n = ni(e || F(t).offsetParent || V(t).document.documentElement);
                    return {
                        top: i.top - n.top,
                        left: i.left - n.left
                    }
                }

                function si(t) {
                    var e = [0, 0];
                    t = F(t);
                    do {
                        if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Ze(t, "position")) {
                            var i = V(t);
                            return e[0] += i.pageYOffset, e[1] += i.pageXOffset, e
                        }
                    } while (t = t.offsetParent);
                    return e
                }
                var hi = li("height"),
                    ai = li("width");

                function li(t) {
                    var e = l(t);
                    return function(i, n) {
                        if (i = F(i), D(n)) {
                            if (B(i)) return i["inner" + e];
                            if (I(i)) {
                                var o = i.documentElement;
                                return Math.max(o["offset" + e], o["scroll" + e])
                            }
                            return (n = "auto" === (n = Ze(i, t)) ? i["offset" + e] : Z(n) || 0) - ci(i, t)
                        }
                        Ze(i, t, n || 0 === n ? +n + ci(i, t) + "px" : "")
                    }
                }

                function ci(t, e, i) {
                    return void 0 === i && (i = "border-box"), Ze(t, "boxSizing") === i ? ei[e].slice(1).map(l).reduce((function(e, i) {
                        return e + Z(Ze(t, "padding" + i)) + Z(Ze(t, "border" + i + "Width"))
                    }), 0) : 0
                }

                function ui(t, e, i, n) {
                    K(ei, (function(o, r) {
                        var s = o[0],
                            h = o[1],
                            a = o[2];
                        e[s] === a ? t[h] += i[r] * n : "center" === e[s] && (t[h] += i[r] * n / 2)
                    }))
                }

                function di(t) {
                    var e = /left|center|right/,
                        i = /top|center|bottom/;
                    return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
                        x: e.test(t[0]) ? t[0] : "center",
                        y: i.test(t[1]) ? t[1] : "center"
                    }
                }

                function fi(t, e, i) {
                    var n = (t || "").split(" "),
                        o = n[0],
                        r = n[1];
                    return {
                        x: o ? Z(o) * (g(o, "%") ? e / 100 : 1) : 0,
                        y: r ? Z(r) * (g(r, "%") ? i / 100 : 1) : 0
                    }
                }

                function gi(t) {
                    switch (t) {
                        case "left":
                            return "right";
                        case "right":
                            return "left";
                        case "top":
                            return "bottom";
                        case "bottom":
                            return "top";
                        default:
                            return t
                    }
                }

                function pi(t, e, i) {
                    return void 0 === e && (e = "width"), void 0 === i && (i = window), N(t) ? +t : g(t, "vh") ? vi(hi(V(i)), t) : g(t, "vw") ? vi(ai(V(i)), t) : g(t, "%") ? vi(oi(i)[e], t) : Z(t)
                }

                function vi(t, e) {
                    return t * Z(e) / 100
                }
                var wi = {
                    reads: [],
                    writes: [],
                    read: function(t) {
                        return this.reads.push(t), yi(), t
                    },
                    write: function(t) {
                        return this.writes.push(t), yi(), t
                    },
                    clear: function(t) {
                        return bi(this.reads, t) || bi(this.writes, t)
                    },
                    flush: mi
                };

                function mi(t) {
                    void 0 === t && (t = 1), ki(wi.reads), ki(wi.writes.splice(0, wi.writes.length)), wi.scheduled = !1, (wi.reads.length || wi.writes.length) && yi(t + 1)
                }
                var xi = 5;

                function yi(t) {
                    if (!wi.scheduled) {
                        if (wi.scheduled = !0, t > xi) throw new Error("Maximum recursion limit reached.");
                        t ? ie.resolve().then((function() {
                            return mi(t)
                        })) : requestAnimationFrame((function() {
                            return mi()
                        }))
                    }
                }

                function ki(t) {
                    for (var e; e = t.shift();) e()
                }

                function bi(t, e) {
                    var i = t.indexOf(e);
                    return !!~i && !!t.splice(i, 1)
                }

                function Ci() {}
                Ci.prototype = {
                    positions: [],
                    init: function() {
                        var t, e = this;
                        this.positions = [], this.unbind = Wt(document, "mousemove", (function(e) {
                            return t = ee(e, "page")
                        })), this.interval = setInterval((function() {
                            t && (e.positions.push(t), e.positions.length > 5 && e.positions.shift())
                        }), 50)
                    },
                    cancel: function() {
                        this.unbind && this.unbind(), this.interval && clearInterval(this.interval)
                    },
                    movesTo: function(t) {
                        if (this.positions.length < 2) return !1;
                        var e = ni(t),
                            i = e.left,
                            n = e.right,
                            o = e.top,
                            r = e.bottom,
                            s = this.positions[0],
                            h = X(this.positions),
                            a = [s, h];
                        return !it(h, e) && [
                            [{
                                x: i,
                                y: o
                            }, {
                                x: n,
                                y: r
                            }],
                            [{
                                x: i,
                                y: r
                            }, {
                                x: n,
                                y: o
                            }]
                        ].some((function(t) {
                            var i = function(t, e) {
                                var i = t[0],
                                    n = i.x,
                                    o = i.y,
                                    r = t[1],
                                    s = r.x,
                                    h = r.y,
                                    a = e[0],
                                    l = a.x,
                                    c = a.y,
                                    u = e[1],
                                    d = u.x,
                                    f = u.y,
                                    g = (f - c) * (s - n) - (d - l) * (h - o);
                                if (0 === g) return !1;
                                var p = ((d - l) * (o - c) - (f - c) * (n - l)) / g;
                                return !(p < 0) && {
                                    x: n + p * (s - n),
                                    y: o + p * (h - o)
                                }
                            }(a, t);
                            return i && it(i, e)
                        }))
                    }
                };
                var Li = {};

                function $i(t, e, i) {
                    return Li.computed(C(t) ? t.call(i, i) : t, C(e) ? e.call(i, i) : e)
                }

                function Mi(t, e) {
                    return t = t && !b(t) ? [t] : t, e ? t ? t.concat(e) : b(e) ? e : [e] : t
                }

                function Bi(t, e) {
                    return D(e) ? t : e
                }

                function Ii(t, e, n) {
                    var o = {};
                    if (C(e) && (e = e.options), e.extends && (t = Ii(t, e.extends, n)), e.mixins)
                        for (var r = 0, s = e.mixins.length; r < s; r++) t = Ii(t, e.mixins[r], n);
                    for (var h in t) l(h);
                    for (var a in e) i(t, a) || l(a);

                    function l(i) {
                        o[i] = (Li[i] || Bi)(t[i], e[i], n)
                    }
                    return o
                }

                function Si(t, e) {
                    var i;
                    void 0 === e && (e = []);
                    try {
                        return t ? d(t, "{") ? JSON.parse(t) : e.length && !x(t, ":") ? ((i = {})[e[0]] = t, i) : t.split(";").reduce((function(t, e) {
                            var i = e.split(/:(.*)/),
                                n = i[0],
                                o = i[1];
                            return n && !D(o) && (t[n.trim()] = o.trim()), t
                        }), {}) : {}
                    } catch (t) {
                        return {}
                    }
                }
                Li.events = Li.created = Li.beforeConnect = Li.connected = Li.beforeDisconnect = Li.disconnected = Li.destroy = Mi, Li.args = function(t, e) {
                    return !1 !== e && Mi(e || t)
                }, Li.update = function(t, e) {
                    return G(Mi(t, C(e) ? {
                        read: e
                    } : e), "order")
                }, Li.props = function(t, e) {
                    return b(e) && (e = e.reduce((function(t, e) {
                        return t[e] = String, t
                    }), {})), Li.methods(t, e)
                }, Li.computed = Li.methods = function(t, e) {
                    return e ? t ? U({}, t, e) : e : t
                }, Li.data = function(t, e, i) {
                    return i ? $i(t, e, i) : e ? t ? function(i) {
                        return $i(t, e, i)
                    } : e : t
                };
                var Ti = 0,
                    Ei = function(t) {
                        this.id = ++Ti, this.el = F(t)
                    };

                function zi(t, e) {
                    try {
                        t.contentWindow.postMessage(JSON.stringify(U({
                            event: "command"
                        }, e)), "*")
                    } catch (t) {}
                }

                function Ai(t, e, i) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 0), !Ot(t)) return !1;
                    for (var n = Oi(t).concat(t), o = 0; o < n.length - 1; o++) {
                        var r = ni(Pi(n[o])),
                            s = {
                                top: r.top - e,
                                left: r.left - i,
                                bottom: r.bottom + e,
                                right: r.right + i
                            },
                            h = ni(n[o + 1]);
                        if (!et(h, s) && !it({
                                x: h.left,
                                y: h.top
                            }, s)) return !1
                    }
                    return !0
                }

                function _i(t, e) {
                    (B(t = F(t)) || I(t)) && (t = Zi(t)), t.scrollTo(0, e)
                }

                function Ni(t, e) {
                    void 0 === e && (e = {});
                    var i = e.duration;
                    void 0 === i && (i = 1e3);
                    var n = e.offset;
                    if (void 0 === n && (n = 0), Ot(t)) {
                        var o = Oi(t).concat(t);
                        i /= o.length - 1;
                        for (var r = ie.resolve(), s = function(t) {
                                r = r.then((function() {
                                    return new ie((function(e) {
                                        var r = o[t],
                                            s = o[t + 1],
                                            h = r.scrollTop,
                                            a = ri(s, Pi(r)).top - n,
                                            l = Date.now(),
                                            c = function() {
                                                var t, n = (t = Q((Date.now() - l) / i), .5 * (1 - Math.cos(Math.PI * t)));
                                                r.scrollTo(0, h + a * n), 1 !== n ? requestAnimationFrame(c) : e()
                                            };
                                        c()
                                    }))
                                }))
                            }, h = 0; h < o.length - 1; h++) s(h);
                        return r
                    }
                }

                function Hi(t, e) {
                    if (void 0 === e && (e = 0), !Ot(t)) return 0;
                    var i = X(Di(t)),
                        n = i.scrollHeight,
                        o = i.scrollTop,
                        r = ni(Pi(i)).height,
                        s = si(t)[0] - o - si(i)[0],
                        h = Math.min(r, s + o);
                    return Q(-1 * (s - h) / Math.min(ni(t).height + e + h, n - (s + o), n - r))
                }

                function Di(t, e) {
                    void 0 === e && (e = /auto|scroll/);
                    var i = Zi(t);
                    return t ? _t(t, "*").filter((function(t) {
                        return t === i || e.test(Ze(t, "overflow")) && t.scrollHeight > ni(t).height
                    })).reverse() : [i]
                }

                function Pi(t) {
                    return t === Zi(t) ? window : t
                }

                function Oi(t) {
                    return Di(t, /auto|scroll|hidden/)
                }

                function Zi(t) {
                    var e = V(t).document;
                    return e.scrollingElement || e.documentElement
                }
                Ei.prototype.isVideo = function() {
                    return this.isYoutube() || this.isVimeo() || this.isHTML5()
                }, Ei.prototype.isHTML5 = function() {
                    return "VIDEO" === this.el.tagName
                }, Ei.prototype.isIFrame = function() {
                    return "IFRAME" === this.el.tagName
                }, Ei.prototype.isYoutube = function() {
                    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
                }, Ei.prototype.isVimeo = function() {
                    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
                }, Ei.prototype.enableApi = function() {
                    var t = this;
                    if (this.ready) return this.ready;
                    var e, i = this.isYoutube(),
                        n = this.isVimeo();
                    return i || n ? this.ready = new ie((function(o) {
                        var r;
                        Rt(t.el, "load", (function() {
                            if (i) {
                                var n = function() {
                                    return zi(t.el, {
                                        event: "listening",
                                        id: t.id
                                    })
                                };
                                e = setInterval(n, 100), n()
                            }
                        })), (r = function(e) {
                            return i && e.id === t.id && "onReady" === e.event || n && Number(e.player_id) === t.id
                        }, new ie((function(t) {
                            Rt(window, "message", (function(e, i) {
                                return t(i)
                            }), !1, (function(t) {
                                var e = t.data;
                                if (e && A(e)) {
                                    try {
                                        e = JSON.parse(e)
                                    } catch (t) {
                                        return
                                    }
                                    return e && r(e)
                                }
                            }))
                        }))).then((function() {
                            o(), e && clearInterval(e)
                        })), ot(t.el, "src", t.el.src + (x(t.el.src, "?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + t.id))
                    })) : ie.resolve()
                }, Ei.prototype.play = function() {
                    var t = this;
                    if (this.isVideo())
                        if (this.isIFrame()) this.enableApi().then((function() {
                            return zi(t.el, {
                                func: "playVideo",
                                method: "play"
                            })
                        }));
                        else if (this.isHTML5()) try {
                        var e = this.el.play();
                        e && e.catch(tt)
                    } catch (t) {}
                }, Ei.prototype.pause = function() {
                    var t = this;
                    this.isVideo() && (this.isIFrame() ? this.enableApi().then((function() {
                        return zi(t.el, {
                            func: "pauseVideo",
                            method: "pause"
                        })
                    })) : this.isHTML5() && this.el.pause())
                }, Ei.prototype.mute = function() {
                    var t = this;
                    this.isVideo() && (this.isIFrame() ? this.enableApi().then((function() {
                        return zi(t.el, {
                            func: "mute",
                            method: "setVolume",
                            value: 0
                        })
                    })) : this.isHTML5() && (this.el.muted = !0, ot(this.el, "muted", "")))
                };
                var Fi = "IntersectionObserver" in window ? window.IntersectionObserver : function() {
                        function t(t, e) {
                            var i = this;
                            void 0 === e && (e = {});
                            var n = e.rootMargin;
                            void 0 === n && (n = "0 0"), this.targets = [];
                            var o, r = (n || "0 0").split(" ").map(Z),
                                s = r[0],
                                h = r[1];
                            this.offsetTop = s, this.offsetLeft = h, this.apply = function() {
                                o || (o = requestAnimationFrame((function() {
                                    return setTimeout((function() {
                                        var e = i.takeRecords();
                                        e.length && t(e, i), o = !1
                                    }))
                                })))
                            }, this.off = Wt(window, "scroll resize load", this.apply, {
                                passive: !0,
                                capture: !0
                            })
                        }
                        return t.prototype.takeRecords = function() {
                            var t = this;
                            return this.targets.filter((function(e) {
                                var i = Ai(e.target, t.offsetTop, t.offsetLeft);
                                if (null === e.isIntersecting || i ^ e.isIntersecting) return e.isIntersecting = i, !0
                            }))
                        }, t.prototype.observe = function(t) {
                            this.targets.push({
                                target: t,
                                isIntersecting: null
                            }), this.apply()
                        }, t.prototype.disconnect = function() {
                            this.targets = [], this.off()
                        }, t
                    }(),
                    ji = Object.freeze({
                        __proto__: null,
                        ajax: ae,
                        getImage: le,
                        transition: Ue,
                        Transition: Xe,
                        animate: Je,
                        Animation: ti,
                        attr: ot,
                        hasAttr: rt,
                        removeAttr: st,
                        data: ht,
                        addClass: Te,
                        removeClass: Ee,
                        removeClasses: ze,
                        replaceClass: Ae,
                        hasClass: _e,
                        toggleClass: Ne,
                        positionAt: ii,
                        offset: ni,
                        position: ri,
                        offsetPosition: si,
                        height: hi,
                        width: ai,
                        boxModelAdjust: ci,
                        flipPosition: gi,
                        toPx: pi,
                        ready: ce,
                        index: ue,
                        getIndex: de,
                        empty: fe,
                        html: ge,
                        prepend: function(t, e) {
                            return (t = Be(t)).hasChildNodes() ? me(e, (function(e) {
                                return t.insertBefore(e, t.firstChild)
                            })) : pe(t, e)
                        },
                        append: pe,
                        before: ve,
                        after: we,
                        remove: xe,
                        wrapAll: ye,
                        wrapInner: ke,
                        unwrap: be,
                        fragment: $e,
                        apply: Me,
                        $: Be,
                        $$: Ie,
                        isIE: at,
                        isRtl: lt,
                        hasTouch: dt,
                        pointerDown: ft,
                        pointerMove: gt,
                        pointerUp: pt,
                        pointerEnter: vt,
                        pointerLeave: wt,
                        pointerCancel: mt,
                        on: Wt,
                        off: qt,
                        once: Rt,
                        trigger: Yt,
                        createEvent: Ut,
                        toEventTargets: Qt,
                        isTouch: te,
                        getEventPos: ee,
                        fastdom: wi,
                        isVoidElement: Pt,
                        isVisible: Ot,
                        selInput: Zt,
                        isInput: Ft,
                        filter: jt,
                        within: Vt,
                        hasOwn: i,
                        hyphenate: r,
                        camelize: h,
                        ucfirst: l,
                        startsWith: d,
                        endsWith: g,
                        includes: x,
                        findIndex: k,
                        isArray: b,
                        isFunction: C,
                        isObject: L,
                        isPlainObject: M,
                        isWindow: B,
                        isDocument: I,
                        isJQuery: S,
                        isNode: T,
                        isNodeCollection: E,
                        isBoolean: z,
                        isString: A,
                        isNumber: _,
                        isNumeric: N,
                        isEmpty: H,
                        isUndefined: D,
                        toBoolean: P,
                        toNumber: O,
                        toFloat: Z,
                        toNode: F,
                        toNodes: j,
                        toWindow: V,
                        toList: W,
                        toMs: q,
                        isEqual: R,
                        swap: Y,
                        assign: U,
                        last: X,
                        each: K,
                        sortBy: G,
                        uniqueBy: J,
                        clamp: Q,
                        noop: tt,
                        intersectRect: et,
                        pointInRect: it,
                        Dimensions: nt,
                        MouseTracker: Ci,
                        mergeOptions: Ii,
                        parseOptions: Si,
                        Player: Ei,
                        Promise: ie,
                        Deferred: ne,
                        IntersectionObserver: Fi,
                        query: xt,
                        queryAll: yt,
                        find: bt,
                        findAll: Ct,
                        matches: Et,
                        closest: At,
                        parents: _t,
                        escape: Ht,
                        css: Ze,
                        getStyles: Fe,
                        getStyle: je,
                        getCssVar: We,
                        propName: Re,
                        isInView: Ai,
                        scrollTop: _i,
                        scrollIntoView: Ni,
                        scrolledOver: Hi,
                        scrollParents: Di,
                        getViewport: Pi
                    });

                function Vi(t) {
                    return !(!d(t, "uk-") && !d(t, "data-uk-")) && h(t.replace("data-uk-", "").replace("uk-", ""))
                }
                var Wi = function(t) {
                    this._init(t)
                };
                Wi.util = ji, Wi.data = "__uikit__", Wi.prefix = "uk-", Wi.options = {},
                    function(t) {
                        var e, i = t.data;

                        function n(t, e) {
                            if (t)
                                for (var i in t) t[i]._connected && t[i]._callUpdate(e)
                        }
                        t.use = function(t) {
                            if (!t.installed) return t.call(null, this), t.installed = !0, this
                        }, t.mixin = function(e, i) {
                            (i = (A(i) ? t.component(i) : i) || this).options = Ii(i.options, e)
                        }, t.extend = function(t) {
                            t = t || {};
                            var e = function(t) {
                                this._init(t)
                            };
                            return e.prototype = Object.create(this.prototype), e.prototype.constructor = e, e.options = Ii(this.options, t), e.super = this, e.extend = this.extend, e
                        }, t.update = function(t, e) {
                            (function t(e, i) {
                                e && e !== document.body && e.parentNode && (t(e.parentNode, i), i(e.parentNode))
                            })(t = t ? F(t) : document.body, (function(t) {
                                return n(t[i], e)
                            })), Me(t, (function(t) {
                                return n(t[i], e)
                            }))
                        }, Object.defineProperty(t, "container", {
                            get: function() {
                                return e || document.body
                            },
                            set: function(t) {
                                e = Be(t)
                            }
                        })
                    }(Wi),
                    function(t) {
                        t.prototype._callHook = function(t) {
                            var e = this,
                                i = this.$options[t];
                            i && i.forEach((function(t) {
                                return t.call(e)
                            }))
                        }, t.prototype._callConnected = function() {
                            this._connected || (this._data = {}, this._computeds = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
                        }, t.prototype._callDisconnected = function() {
                            this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
                        }, t.prototype._callUpdate = function(t) {
                            var e = this;
                            void 0 === t && (t = "update");
                            var i = t.type || t;
                            x(["update", "resize"], i) && this._callWatches();
                            var n = this.$options.update,
                                o = this._frames,
                                r = o.reads,
                                s = o.writes;
                            n && n.forEach((function(t, n) {
                                var o = t.read,
                                    h = t.write,
                                    a = t.events;
                                ("update" === i || x(a, i)) && (o && !x(wi.reads, r[n]) && (r[n] = wi.read((function() {
                                    var t = e._connected && o.call(e, e._data, i);
                                    !1 === t && h ? wi.clear(s[n]) : M(t) && U(e._data, t)
                                }))), h && !x(wi.writes, s[n]) && (s[n] = wi.write((function() {
                                    return e._connected && h.call(e, e._data, i)
                                }))))
                            }))
                        }
                    }(Wi),
                    function(t) {
                        var e = 0;

                        function n(t, e) {
                            var i = {},
                                n = t.args;
                            void 0 === n && (n = []);
                            var o = t.props;
                            void 0 === o && (o = {});
                            var s = t.el;
                            if (!o) return i;
                            for (var a in o) {
                                var c = r(a),
                                    u = ht(s, c);
                                if (!D(u)) {
                                    if (u = o[a] === Boolean && "" === u || l(o[a], u), "target" === c && (!u || d(u, "_"))) continue;
                                    i[a] = u
                                }
                            }
                            var f = Si(ht(s, e), n);
                            for (var g in f) {
                                var p = h(g);
                                void 0 !== o[p] && (i[p] = l(o[p], f[g]))
                            }
                            return i
                        }

                        function o(t, e, n) {
                            Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: function() {
                                    var o = t._computeds,
                                        r = t.$props,
                                        s = t.$el;
                                    return i(o, e) || (o[e] = (n.get || n).call(t, r, s)), o[e]
                                },
                                set: function(i) {
                                    var o = t._computeds;
                                    o[e] = n.set ? n.set.call(t, i) : i, D(o[e]) && delete o[e]
                                }
                            })
                        }

                        function s(t, e, i) {
                            M(e) || (e = {
                                name: i,
                                handler: e
                            });
                            var n = e.name,
                                o = e.el,
                                r = e.handler,
                                h = e.capture,
                                a = e.passive,
                                l = e.delegate,
                                c = e.filter,
                                u = e.self;
                            o = C(o) ? o.call(t) : o || t.$el, b(o) ? o.forEach((function(n) {
                                return s(t, U({}, e, {
                                    el: n
                                }), i)
                            })) : !o || c && !c.call(t) || t._events.push(Wt(o, n, l ? A(l) ? l : l.call(t) : null, A(r) ? t[r] : r.bind(t), {
                                passive: a,
                                capture: h,
                                self: u
                            }))
                        }

                        function a(t, e) {
                            return t.every((function(t) {
                                return !t || !i(t, e)
                            }))
                        }

                        function l(t, e) {
                            return t === Boolean ? P(e) : t === Number ? O(e) : "list" === t ? W(e) : t ? t(e) : e
                        }
                        t.prototype._init = function(t) {
                            (t = t || {}).data = function(t, e) {
                                var i = t.data,
                                    n = (t.el, e.args),
                                    o = e.props;
                                if (void 0 === o && (o = {}), i = b(i) ? H(n) ? void 0 : i.slice(0, n.length).reduce((function(t, e, i) {
                                        return M(e) ? U(t, e) : t[n[i]] = e, t
                                    }), {}) : i)
                                    for (var r in i) D(i[r]) ? delete i[r] : i[r] = o[r] ? l(o[r], i[r]) : i[r];
                                return i
                            }(t, this.constructor.options), this.$options = Ii(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = {
                                reads: {},
                                writes: {}
                            }, this._events = [], this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
                        }, t.prototype._initData = function() {
                            var t = this.$options.data;
                            for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
                        }, t.prototype._initMethods = function() {
                            var t = this.$options.methods;
                            if (t)
                                for (var e in t) this[e] = t[e].bind(this)
                        }, t.prototype._initComputeds = function() {
                            var t = this.$options.computed;
                            if (this._computeds = {}, t)
                                for (var e in t) o(this, e, t[e])
                        }, t.prototype._callWatches = function() {
                            var t = this.$options.computed,
                                e = this._computeds;
                            for (var i in e) {
                                var n = e[i];
                                delete e[i], t[i].watch && !R(n, this[i]) && t[i].watch.call(this, this[i], n)
                            }
                        }, t.prototype._initProps = function(t) {
                            var e;
                            for (e in t = t || n(this.$options, this.$name)) D(t[e]) || (this.$props[e] = t[e]);
                            var i = [this.$options.computed, this.$options.methods];
                            for (e in this.$props) e in t && a(i, e) && (this[e] = this.$props[e])
                        }, t.prototype._initEvents = function() {
                            var t = this,
                                e = this.$options.events;
                            e && e.forEach((function(e) {
                                if (i(e, "handler")) s(t, e);
                                else
                                    for (var n in e) s(t, e[n], n)
                            }))
                        }, t.prototype._unbindEvents = function() {
                            this._events.forEach((function(t) {
                                return t()
                            })), this._events = []
                        }, t.prototype._initObserver = function() {
                            var t = this,
                                e = this.$options,
                                i = e.attrs,
                                o = e.props,
                                s = e.el;
                            if (!this._observer && o && !1 !== i) {
                                i = b(i) ? i : Object.keys(o), this._observer = new MutationObserver((function() {
                                    var e = n(t.$options, t.$name);
                                    i.some((function(i) {
                                        return !D(e[i]) && e[i] !== t.$props[i]
                                    })) && t.$reset()
                                }));
                                var h = i.map((function(t) {
                                    return r(t)
                                })).concat(this.$name);
                                this._observer.observe(s, {
                                    attributes: !0,
                                    attributeFilter: h.concat(h.map((function(t) {
                                        return "data-" + t
                                    })))
                                })
                            }
                        }
                    }(Wi),
                    function(t) {
                        var e = t.data,
                            i = {};
                        t.component = function(e, n) {
                            if (!n) return M(i[e]) && (i[e] = t.extend(i[e])), i[e];
                            t[e] = function(i, n) {
                                for (var o = arguments.length, r = Array(o); o--;) r[o] = arguments[o];
                                var s = t.component(e);
                                return s.options.functional ? new s({
                                    data: M(i) ? i : [].concat(r)
                                }) : i ? Ie(i).map(h)[0] : h(i);

                                function h(i) {
                                    var o = t.getComponent(i, e);
                                    if (o) {
                                        if (!n) return o;
                                        o.$destroy()
                                    }
                                    return new s({
                                        el: i,
                                        data: n
                                    })
                                }
                            };
                            var o = M(n) ? U({}, n) : n.options;
                            if (o.name = e, o.install && o.install(t, o, e), t._initialized && !o.functional) {
                                var s = r(e);
                                wi.read((function() {
                                    return t[e]("[uk-" + s + "],[data-uk-" + s + "]")
                                }))
                            }
                            return i[e] = M(n) ? o : n
                        }, t.getComponents = function(t) {
                            return t && t[e] || {}
                        }, t.getComponent = function(e, i) {
                            return t.getComponents(e)[i]
                        }, t.connect = function(n) {
                            if (n[e])
                                for (var o in n[e]) n[e][o]._callConnected();
                            for (var r = 0; r < n.attributes.length; r++) {
                                var s = Vi(n.attributes[r].name);
                                s && s in i && t[s](n)
                            }
                        }, t.disconnect = function(t) {
                            for (var i in t[e]) t[e][i]._callDisconnected()
                        }
                    }(Wi),
                    function(t) {
                        var e = t.data;
                        t.prototype.$mount = function(t) {
                            var i = this.$options.name;
                            t[e] || (t[e] = {}), t[e][i] || (t[e][i] = this, this.$el = this.$options.el = this.$options.el || t, Vt(t, document) && this._callConnected())
                        }, t.prototype.$emit = function(t) {
                            this._callUpdate(t)
                        }, t.prototype.$reset = function() {
                            this._callDisconnected(), this._callConnected()
                        }, t.prototype.$destroy = function(t) {
                            void 0 === t && (t = !1);
                            var i = this.$options,
                                n = i.el,
                                o = i.name;
                            n && this._callDisconnected(), this._callHook("destroy"), n && n[e] && (delete n[e][o], H(n[e]) || delete n[e], t && xe(this.$el))
                        }, t.prototype.$create = function(e, i, n) {
                            return t[e](i, n)
                        }, t.prototype.$update = t.update, t.prototype.$getComponent = t.getComponent;
                        var i = {};
                        Object.defineProperties(t.prototype, {
                            $container: Object.getOwnPropertyDescriptor(t, "container"),
                            $name: {
                                get: function() {
                                    var e = this.$options.name;
                                    return i[e] || (i[e] = t.prefix + r(e)), i[e]
                                }
                            }
                        })
                    }(Wi);
                var qi = {
                        connected: function() {
                            !_e(this.$el, this.$name) && Te(this.$el, this.$name)
                        }
                    },
                    Ri = {
                        props: {
                            cls: Boolean,
                            animation: "list",
                            duration: Number,
                            origin: String,
                            transition: String,
                            queued: Boolean
                        },
                        data: {
                            cls: !1,
                            animation: [!1],
                            duration: 200,
                            origin: !1,
                            transition: "linear",
                            queued: !1,
                            initProps: {
                                overflow: "",
                                height: "",
                                paddingTop: "",
                                paddingBottom: "",
                                marginTop: "",
                                marginBottom: ""
                            },
                            hideProps: {
                                overflow: "hidden",
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                marginTop: 0,
                                marginBottom: 0
                            }
                        },
                        computed: {
                            hasAnimation: function(t) {
                                return !!t.animation[0]
                            },
                            hasTransition: function(t) {
                                var e = t.animation;
                                return this.hasAnimation && !0 === e[0]
                            }
                        },
                        methods: {
                            toggleElement: function(t, e, i) {
                                var n = this;
                                return new ie((function(o) {
                                    t = j(t);
                                    var r, s = function(t) {
                                            return ie.all(t.map((function(t) {
                                                return n._toggleElement(t, e, i)
                                            })))
                                        },
                                        h = t.filter((function(t) {
                                            return n.isToggled(t)
                                        })),
                                        a = t.filter((function(t) {
                                            return !x(h, t)
                                        }));
                                    if (n.queued && D(i) && D(e) && n.hasAnimation && !(t.length < 2)) {
                                        var l = document.body,
                                            c = l.scrollTop,
                                            u = h[0],
                                            d = ti.inProgress(u) && _e(u, "uk-animation-leave") || Xe.inProgress(u) && "0px" === u.style.height;
                                        r = s(h), d || (r = r.then((function() {
                                            var t = s(a);
                                            return l.scrollTop = c, t
                                        })))
                                    } else r = s(a.concat(h));
                                    r.then(o, tt)
                                }))
                            },
                            toggleNow: function(t, e) {
                                var i = this;
                                return new ie((function(n) {
                                    return ie.all(j(t).map((function(t) {
                                        return i._toggleElement(t, e, !1)
                                    }))).then(n, tt)
                                }))
                            },
                            isToggled: function(t) {
                                var e = j(t || this.$el);
                                return this.cls ? _e(e, this.cls.split(" ")[0]) : !rt(e, "hidden")
                            },
                            updateAria: function(t) {
                                !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t))
                            },
                            _toggleElement: function(t, e, i) {
                                var n = this;
                                if (e = z(e) ? e : ti.inProgress(t) ? _e(t, "uk-animation-leave") : Xe.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Yt(t, "before" + (e ? "show" : "hide"), [this])) return ie.reject();
                                var o, r, s, h, a, l = (C(i) ? i : !1 !== i && this.hasAnimation ? this.hasTransition ? function(t) {
                                    var e = t.isToggled,
                                        i = t.duration,
                                        n = t.initProps,
                                        o = t.hideProps,
                                        r = t.transition,
                                        s = t._toggle;
                                    return function(t, h) {
                                        var a = Xe.inProgress(t),
                                            l = t.hasChildNodes ? Z(Ze(t.firstElementChild, "marginTop")) + Z(Ze(t.lastElementChild, "marginBottom")) : 0,
                                            c = Ot(t) ? hi(t) + (a ? 0 : l) : 0;
                                        Xe.cancel(t), e(t) || s(t, !0), hi(t, ""), wi.flush();
                                        var u = hi(t) + (a ? 0 : l);
                                        return hi(t, c), (h ? Xe.start(t, U({}, n, {
                                            overflow: "hidden",
                                            height: u
                                        }), Math.round(i * (1 - c / u)), r) : Xe.start(t, o, Math.round(i * (c / u)), r).then((function() {
                                            return s(t, !1)
                                        }))).then((function() {
                                            return Ze(t, n)
                                        }))
                                    }
                                }(this) : (r = (o = this).animation, s = o.duration, h = o.origin, a = o._toggle, function(t, e) {
                                    return ti.cancel(t), e ? (a(t, !0), ti.in(t, r[0], s, h)) : ti.out(t, r[1] || r[0], s, h).then((function() {
                                        return a(t, !1)
                                    }))
                                }) : this._toggle)(t, e);
                                Yt(t, e ? "show" : "hide", [this]);
                                var c = function() {
                                    Yt(t, e ? "shown" : "hidden", [n]), n.$update(t)
                                };
                                return l ? l.then(c) : ie.resolve(c())
                            },
                            _toggle: function(t, e) {
                                var i;
                                t && (e = Boolean(e), this.cls ? (i = x(this.cls, " ") || e !== _e(t, this.cls)) && Ne(t, this.cls, x(this.cls, " ") ? void 0 : e) : (i = e === rt(t, "hidden")) && ot(t, "hidden", e ? null : ""), Ie("[autofocus]", t).some((function(t) {
                                    return Ot(t) ? t.focus() || !0 : t.blur()
                                })), this.updateAria(t), i && this.$update(t))
                            }
                        }
                    },
                    Yi = {
                        mixins: [qi, Ri],
                        props: {
                            targets: String,
                            active: null,
                            collapsible: Boolean,
                            multiple: Boolean,
                            toggle: String,
                            content: String,
                            transition: String
                        },
                        data: {
                            targets: "> *",
                            active: !1,
                            animation: [!0],
                            collapsible: !0,
                            multiple: !1,
                            clsOpen: "uk-open",
                            toggle: "> .uk-accordion-title",
                            content: "> .uk-accordion-content",
                            transition: "ease"
                        },
                        computed: {
                            items: function(t, e) {
                                return Ie(t.targets, e)
                            }
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return this.targets + " " + this.$props.toggle
                            },
                            handler: function(t) {
                                t.preventDefault(), this.toggle(ue(Ie(this.targets + " " + this.$props.toggle, this.$el), t.current))
                            }
                        }],
                        connected: function() {
                            if (!1 !== this.active) {
                                var t = this.items[Number(this.active)];
                                t && !_e(t, this.clsOpen) && this.toggle(t, !1)
                            }
                        },
                        update: function() {
                            var t = this;
                            this.items.forEach((function(e) {
                                return t._toggle(Be(t.content, e), _e(e, t.clsOpen))
                            }));
                            var e = !this.collapsible && !_e(this.items, this.clsOpen) && this.items[0];
                            e && this.toggle(e, !1)
                        },
                        methods: {
                            toggle: function(t, e) {
                                var i = this,
                                    n = de(t, this.items),
                                    o = jt(this.items, "." + this.clsOpen);
                                (t = this.items[n]) && [t].concat(!this.multiple && !x(o, t) && o || []).forEach((function(n) {
                                    var r = n === t,
                                        s = r && !_e(n, i.clsOpen);
                                    if (s || !r || i.collapsible || !(o.length < 2)) {
                                        Ne(n, i.clsOpen, s);
                                        var h = n._wrapper ? n._wrapper.firstElementChild : Be(i.content, n);
                                        n._wrapper || (n._wrapper = ye(h, "<div>"), ot(n._wrapper, "hidden", s ? "" : null)), i._toggle(h, !0), i.toggleElement(n._wrapper, s, e).then((function() {
                                            if (_e(n, i.clsOpen) === s) {
                                                if (s) {
                                                    var t = Be(i.$props.toggle, n);
                                                    Ai(t) || Ni(t)
                                                } else i._toggle(h, !1);
                                                n._wrapper = null, be(h)
                                            }
                                        }))
                                    }
                                }))
                            }
                        }
                    },
                    Ui = {
                        mixins: [qi, Ri],
                        args: "animation",
                        props: {
                            close: String
                        },
                        data: {
                            animation: [!0],
                            selClose: ".uk-alert-close",
                            duration: 150,
                            hideProps: U({
                                opacity: 0
                            }, Ri.data.hideProps)
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return this.selClose
                            },
                            handler: function(t) {
                                t.preventDefault(), this.close()
                            }
                        }],
                        methods: {
                            close: function() {
                                var t = this;
                                this.toggleElement(this.$el).then((function() {
                                    return t.$destroy(!0)
                                }))
                            }
                        }
                    };

                function Xi(t) {
                    ce((function() {
                        var e;
                        t.update(), Wt(window, "load resize", (function() {
                            return t.update(null, "resize")
                        })), Wt(document, "loadedmetadata load", (function(e) {
                            var i = e.target;
                            return t.update(i, "resize")
                        }), !0), Wt(window, "scroll", (function(i) {
                            e || (e = !0, wi.write((function() {
                                return e = !1
                            })), t.update(null, i.type))
                        }), {
                            passive: !0,
                            capture: !0
                        });
                        var i, n = 0;
                        Wt(document, "animationstart", (function(t) {
                            var e = t.target;
                            (Ze(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++, Ze(document.body, "overflowX", "hidden"), setTimeout((function() {
                                --n || Ze(document.body, "overflowX", "")
                            }), q(Ze(e, "animationDuration")) + 100))
                        }), !0), Wt(document, ft, (function(t) {
                            if (i && i(), te(t)) {
                                var e = ee(t),
                                    n = "tagName" in t.target ? t.target : t.target.parentNode;
                                i = Rt(document, pt + " " + mt, (function(t) {
                                    var i = ee(t),
                                        o = i.x,
                                        r = i.y;
                                    (n && o && Math.abs(e.x - o) > 100 || r && Math.abs(e.y - r) > 100) && setTimeout((function() {
                                        var t, i, s, h;
                                        Yt(n, "swipe"), Yt(n, "swipe" + (t = e.x, i = e.y, s = o, h = r, Math.abs(t - s) >= Math.abs(i - h) ? t - s > 0 ? "Left" : "Right" : i - h > 0 ? "Up" : "Down"))
                                    }))
                                })), "touchstart" === ft && (Ze(document.body, "cursor", "pointer"), Rt(document, pt + " " + mt, (function() {
                                    return setTimeout((function() {
                                        return Ze(document.body, "cursor", "")
                                    }), 50)
                                })))
                            }
                        }), {
                            passive: !0
                        })
                    }))
                }
                var Ki, Gi = {
                        args: "autoplay",
                        props: {
                            automute: Boolean,
                            autoplay: Boolean
                        },
                        data: {
                            automute: !1,
                            autoplay: !0
                        },
                        computed: {
                            inView: function(t) {
                                return "inview" === t.autoplay
                            }
                        },
                        connected: function() {
                            this.inView && !rt(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Ei(this.$el), this.automute && this.player.mute()
                        },
                        update: {
                            read: function() {
                                return !!this.player && {
                                    visible: Ot(this.$el) && "hidden" !== Ze(this.$el, "visibility"),
                                    inView: this.inView && Ai(this.$el)
                                }
                            },
                            write: function(t) {
                                var e = t.visible,
                                    i = t.inView;
                                !e || this.inView && !i ? this.player.pause() : (!0 === this.autoplay || this.inView && i) && this.player.play()
                            },
                            events: ["resize", "scroll"]
                        }
                    },
                    Ji = {
                        mixins: [qi, Gi],
                        props: {
                            width: Number,
                            height: Number
                        },
                        data: {
                            automute: !0
                        },
                        update: {
                            read: function() {
                                var t = this.$el,
                                    e = t.parentNode,
                                    i = e.offsetHeight,
                                    n = e.offsetWidth,
                                    o = nt.cover({
                                        width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                                        height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
                                    }, {
                                        width: n + (n % 2 ? 1 : 0),
                                        height: i + (i % 2 ? 1 : 0)
                                    });
                                return !(!o.width || !o.height) && o
                            },
                            write: function(t) {
                                var e = t.height,
                                    i = t.width;
                                Ze(this.$el, {
                                    height: e,
                                    width: i
                                })
                            },
                            events: ["resize"]
                        }
                    },
                    Qi = {
                        props: {
                            pos: String,
                            offset: null,
                            flip: Boolean,
                            clsPos: String
                        },
                        data: {
                            pos: "bottom-" + (lt ? "right" : "left"),
                            flip: !0,
                            offset: !1,
                            clsPos: ""
                        },
                        computed: {
                            pos: function(t) {
                                var e = t.pos;
                                return (e + (x(e, "-") ? "" : "-center")).split("-")
                            },
                            dir: function() {
                                return this.pos[0]
                            },
                            align: function() {
                                return this.pos[1]
                            }
                        },
                        methods: {
                            positionAt: function(t, e, i) {
                                var n;
                                ze(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Ze(t, {
                                    top: "",
                                    left: ""
                                });
                                var o = this.offset,
                                    r = this.getAxis();
                                N(o) || (o = (n = Be(o)) ? ni(n)["x" === r ? "left" : "top"] - ni(e)["x" === r ? "right" : "bottom"] : 0);
                                var s = ii(t, e, "x" === r ? gi(this.dir) + " " + this.align : this.align + " " + gi(this.dir), "x" === r ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === r ? "" + ("left" === this.dir ? -o : o) : " " + ("top" === this.dir ? -o : o), null, this.flip, i).target,
                                    h = s.x,
                                    a = s.y;
                                this.dir = "x" === r ? h : a, this.align = "x" === r ? a : h, Ne(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                            },
                            getAxis: function() {
                                return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                            }
                        }
                    },
                    tn = {
                        mixins: [Qi, Ri],
                        args: "pos",
                        props: {
                            mode: "list",
                            toggle: Boolean,
                            boundary: Boolean,
                            boundaryAlign: Boolean,
                            delayShow: Number,
                            delayHide: Number,
                            clsDrop: String
                        },
                        data: {
                            mode: ["click", "hover"],
                            toggle: "- *",
                            boundary: window,
                            boundaryAlign: !1,
                            delayShow: 0,
                            delayHide: 800,
                            clsDrop: !1,
                            animation: ["uk-animation-fade"],
                            cls: "uk-open"
                        },
                        computed: {
                            boundary: function(t, e) {
                                return xt(t.boundary, e)
                            },
                            clsDrop: function(t) {
                                return t.clsDrop || "uk-" + this.$options.name
                            },
                            clsPos: function() {
                                return this.clsDrop
                            }
                        },
                        created: function() {
                            this.tracker = new Ci
                        },
                        connected: function() {
                            Te(this.$el, this.clsDrop);
                            var t = this.$props.toggle;
                            this.toggle = t && this.$create("toggle", xt(t, this.$el), {
                                target: this.$el,
                                mode: this.mode
                            }), !this.toggle && Yt(this.$el, "updatearia")
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return "." + this.clsDrop + "-close"
                            },
                            handler: function(t) {
                                t.preventDefault(), this.hide(!1)
                            }
                        }, {
                            name: "click",
                            delegate: function() {
                                return 'a[href^="#"]'
                            },
                            handler: function(t) {
                                var e = t.defaultPrevented,
                                    i = t.current.hash;
                                e || !i || Vt(i, this.$el) || this.hide(!1)
                            }
                        }, {
                            name: "beforescroll",
                            handler: function() {
                                this.hide(!1)
                            }
                        }, {
                            name: "toggle",
                            self: !0,
                            handler: function(t, e) {
                                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
                            }
                        }, {
                            name: "toggleshow",
                            self: !0,
                            handler: function(t, e) {
                                t.preventDefault(), this.show(e)
                            }
                        }, {
                            name: "togglehide",
                            self: !0,
                            handler: function(t) {
                                t.preventDefault(), this.hide()
                            }
                        }, {
                            name: vt,
                            filter: function() {
                                return x(this.mode, "hover")
                            },
                            handler: function(t) {
                                te(t) || this.clearTimers()
                            }
                        }, {
                            name: wt,
                            filter: function() {
                                return x(this.mode, "hover")
                            },
                            handler: function(t) {
                                te(t) || Et(this.$el, ":hover") || this.hide()
                            }
                        }, {
                            name: "beforeshow",
                            self: !0,
                            handler: function() {
                                this.clearTimers(), ti.cancel(this.$el), this.position()
                            }
                        }, {
                            name: "show",
                            self: !0,
                            handler: function() {
                                var t = this;
                                Ki = this, this.tracker.init(), Yt(this.$el, "updatearia");
                                var e = nn(document, "click", (function(e) {
                                    var i = e.defaultPrevented,
                                        n = e.target;
                                    i || Vt(n, t.$el) || t.toggle && Vt(n, t.toggle.$el) || t.hide(!1)
                                }));
                                Rt(this.$el, "hide", e, {
                                    self: !0
                                })
                            }
                        }, {
                            name: "beforehide",
                            self: !0,
                            handler: function() {
                                this.clearTimers()
                            }
                        }, {
                            name: "hide",
                            handler: function(t) {
                                var e = t.target;
                                this.$el === e ? (Ki = this.isActive() ? null : Ki, Yt(this.$el, "updatearia"), this.tracker.cancel()) : Ki = null === Ki && Vt(e, this.$el) && this.isToggled() ? this : Ki
                            }
                        }, {
                            name: "updatearia",
                            self: !0,
                            handler: function(t, e) {
                                t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()), Ne(this.toggle.$el, this.cls, this.isToggled()))
                            }
                        }],
                        update: {
                            write: function() {
                                this.isToggled() && !ti.inProgress(this.$el) && this.position()
                            },
                            events: ["resize"]
                        },
                        methods: {
                            show: function(t, e) {
                                var i = this;
                                if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
                                    if (Ki) {
                                        if (e && Ki.isDelaying) return void(this.showTimer = setTimeout(this.show, 10));
                                        for (; Ki && !Vt(this.$el, Ki.$el);) Ki.hide(!1)
                                    }
                                    this.showTimer = setTimeout((function() {
                                        return !i.isToggled() && i.toggleElement(i.$el, !0)
                                    }), e && this.delayShow || 0)
                                }
                            },
                            hide: function(t) {
                                var e = this;
                                void 0 === t && (t = !0);
                                var i = function() {
                                    return e.toggleNow(e.$el, !1)
                                };
                                this.clearTimers(), this.isDelaying = en(this.$el).some((function(t) {
                                    return e.tracker.movesTo(t)
                                })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
                            },
                            clearTimers: function() {
                                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                            },
                            isActive: function() {
                                return Ki === this
                            },
                            position: function() {
                                ze(this.$el, this.clsDrop + "-(stack|boundary)"), Ze(this.$el, {
                                    top: "",
                                    left: "",
                                    display: "block"
                                }), Ne(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                                var t = ni(this.boundary),
                                    e = this.boundaryAlign ? t : ni(this.toggle.$el);
                                if ("justify" === this.align) {
                                    var i = "y" === this.getAxis() ? "width" : "height";
                                    Ze(this.$el, i, e[i])
                                } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && Te(this.$el, this.clsDrop + "-stack");
                                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), Ze(this.$el, "display", "")
                            }
                        }
                    };

                function en(t) {
                    var e = "static" !== Ze(t, "position") ? [t] : [];
                    return e.concat(e.map.call(t.children, en))
                }

                function nn(t, e, i) {
                    var n = Rt(t, e, (function() {
                        return n = Wt(t, e, i)
                    }), !0);
                    return function() {
                        return n()
                    }
                }
                var on = {
                        extends: tn
                    },
                    rn = {
                        mixins: [qi],
                        args: "target",
                        props: {
                            target: Boolean
                        },
                        data: {
                            target: !1
                        },
                        computed: {
                            input: function(t, e) {
                                return Be(Zt, e)
                            },
                            state: function() {
                                return this.input.nextElementSibling
                            },
                            target: function(t, e) {
                                var i = t.target;
                                return i && (!0 === i && this.input.parentNode === e && this.input.nextElementSibling || xt(i, e))
                            }
                        },
                        update: function() {
                            var t = this.target,
                                e = this.input;
                            if (t) {
                                var i, n = Ft(t) ? "value" : "textContent",
                                    o = t[n],
                                    r = e.files && e.files[0] ? e.files[0].name : Et(e, "select") && (i = Ie("option", e).filter((function(t) {
                                        return t.selected
                                    }))[0]) ? i.textContent : e.value;
                                o !== r && (t[n] = r)
                            }
                        },
                        events: [{
                            name: "change",
                            handler: function() {
                                this.$emit()
                            }
                        }, {
                            name: "reset",
                            el: function() {
                                return At(this.$el, "form")
                            },
                            handler: function() {
                                this.$emit()
                            }
                        }]
                    },
                    sn = {
                        update: {
                            read: function(t) {
                                var e = Ai(this.$el);
                                if (!e || t.isInView === e) return !1;
                                t.isInView = e
                            },
                            write: function() {
                                this.$el.src = this.$el.src
                            },
                            events: ["scroll", "resize"]
                        }
                    },
                    hn = {
                        props: {
                            margin: String,
                            firstColumn: Boolean
                        },
                        data: {
                            margin: "uk-margin-small-top",
                            firstColumn: "uk-first-column"
                        },
                        update: {
                            read: function(t) {
                                var e = this.$el.children;
                                if (!e.length || !Ot(this.$el)) return t.rows = [
                                    []
                                ];
                                t.rows = an(e), t.stacks = !t.rows.some((function(t) {
                                    return t.length > 1
                                }))
                            },
                            write: function(t) {
                                var e = this;
                                t.rows.forEach((function(t, i) {
                                    return t.forEach((function(t, n) {
                                        Ne(t, e.margin, 0 !== i), Ne(t, e.firstColumn, 0 === n)
                                    }))
                                }))
                            },
                            events: ["resize"]
                        }
                    };

                function an(t) {
                    for (var e = [
                            []
                        ], i = 0; i < t.length; i++) {
                        var n = t[i],
                            o = ln(n);
                        if (o.height)
                            for (var r = e.length - 1; r >= 0; r--) {
                                var s = e[r];
                                if (!s[0]) {
                                    s.push(n);
                                    break
                                }
                                var h = void 0;
                                if (s[0].offsetParent === n.offsetParent ? h = ln(s[0]) : (o = ln(n, !0), h = ln(s[0], !0)), o.top >= h.bottom - 1 && o.top !== h.top) {
                                    e.push([n]);
                                    break
                                }
                                if (o.bottom > h.top) {
                                    if (o.left < h.left && !lt) {
                                        s.unshift(n);
                                        break
                                    }
                                    s.push(n);
                                    break
                                }
                                if (0 === r) {
                                    e.unshift([n]);
                                    break
                                }
                            }
                    }
                    return e
                }

                function ln(t, e) {
                    var i;
                    void 0 === e && (e = !1);
                    var n = t.offsetTop,
                        o = t.offsetLeft,
                        r = t.offsetHeight;
                    return e && (n = (i = si(t))[0], o = i[1]), {
                        top: n,
                        left: o,
                        height: r,
                        bottom: n + r
                    }
                }
                var cn = {
                    extends: hn,
                    mixins: [qi],
                    name: "grid",
                    props: {
                        masonry: Boolean,
                        parallax: Number
                    },
                    data: {
                        margin: "uk-grid-margin",
                        clsStack: "uk-grid-stack",
                        masonry: !1,
                        parallax: 0
                    },
                    computed: {
                        length: function(t, e) {
                            return e.children.length
                        },
                        parallax: function(t) {
                            var e = t.parallax;
                            return e && this.length ? Math.abs(e) : ""
                        }
                    },
                    connected: function() {
                        this.masonry && Te(this.$el, "uk-flex-top uk-flex-wrap-top")
                    },
                    update: [{
                        write: function(t) {
                            var e = t.stacks;
                            Ne(this.$el, this.clsStack, e)
                        },
                        events: ["resize"]
                    }, {
                        read: function(t) {
                            var e = t.rows;
                            if (!this.masonry && !this.parallax) return !1;
                            e = e.map((function(t) {
                                return G(t, "offsetLeft")
                            })), lt && e.map((function(t) {
                                return t.reverse()
                            }));
                            var i, n, o, r, s = e.some((function(t) {
                                    return t.some(Xe.inProgress)
                                })),
                                h = !1,
                                a = "";
                            if (this.masonry && this.length) {
                                var l = 0;
                                h = e.reduce((function(t, i, n) {
                                    return t[n] = i.map((function(i, o) {
                                        return 0 === n ? 0 : Z(t[n - 1][o]) + (l - Z(e[n - 1][o] && e[n - 1][o].offsetHeight))
                                    })), l = i.reduce((function(t, e) {
                                        return Math.max(t, e.offsetHeight)
                                    }), 0), t
                                }), []), a = function(t) {
                                    return Math.max.apply(Math, t.reduce((function(t, e) {
                                        return e.forEach((function(e, i) {
                                            return t[i] = (t[i] || 0) + e.offsetHeight
                                        })), t
                                    }), []))
                                }(e) + (i = this.$el, n = this.margin, o = j(i.children), Z((r = o.filter((function(t) {
                                    return _e(t, n)
                                }))[0]) ? Ze(r, "marginTop") : Ze(o[0], "paddingLeft")) * (e.length - 1))
                            }
                            return {
                                padding: this.parallax && un(this.parallax, e, h),
                                rows: e,
                                translates: h,
                                height: !s && a
                            }
                        },
                        write: function(t) {
                            var e = t.stacks,
                                i = t.height,
                                n = t.padding;
                            Ne(this.$el, this.clsStack, e), Ze(this.$el, "paddingBottom", n), !1 !== i && Ze(this.$el, "height", i)
                        },
                        events: ["resize"]
                    }, {
                        read: function(t) {
                            var e = t.height;
                            return {
                                scrolled: !!this.parallax && Hi(this.$el, e ? e - hi(this.$el) : 0) * this.parallax
                            }
                        },
                        write: function(t) {
                            var e = t.rows,
                                i = t.scrolled,
                                n = t.translates;
                            (!1 !== i || n) && e.forEach((function(t, e) {
                                return t.forEach((function(t, o) {
                                    return Ze(t, "transform", i || n ? "translateY(" + ((n && -n[e][o]) + (i ? o % 2 ? i : i / 8 : 0)) + "px)" : "")
                                }))
                            }))
                        },
                        events: ["scroll", "resize"]
                    }]
                };

                function un(t, e, i) {
                    for (var n = 0, o = 0, r = 0, s = e.length - 1; s >= 0; s--)
                        for (var h = n; h < e[s].length; h++) {
                            var a = e[s][h],
                                l = a.offsetTop + hi(a) + (i && -i[s][h]);
                            o = Math.max(o, l), r = Math.max(r, l + (h % 2 ? t : t / 8)), n++
                        }
                    return r - o
                }
                var dn = at ? {
                        props: {
                            selMinHeight: String
                        },
                        data: {
                            selMinHeight: !1,
                            forceHeight: !1
                        },
                        computed: {
                            elements: function(t, e) {
                                var i = t.selMinHeight;
                                return i ? Ie(i, e) : [e]
                            }
                        },
                        update: [{
                            read: function() {
                                Ze(this.elements, "height", "")
                            },
                            order: -5,
                            events: ["resize"]
                        }, {
                            write: function() {
                                var t = this;
                                this.elements.forEach((function(e) {
                                    var i = Z(Ze(e, "minHeight"));
                                    i && (t.forceHeight || Math.round(i + ci(e, "height", "content-box")) >= e.offsetHeight) && Ze(e, "height", i)
                                }))
                            },
                            order: 5,
                            events: ["resize"]
                        }]
                    } : {},
                    fn = {
                        mixins: [dn],
                        args: "target",
                        props: {
                            target: String,
                            row: Boolean
                        },
                        data: {
                            target: "> *",
                            row: !0,
                            forceHeight: !0
                        },
                        computed: {
                            elements: function(t, e) {
                                return Ie(t.target, e)
                            }
                        },
                        update: {
                            read: function() {
                                return {
                                    rows: (this.row ? an(this.elements) : [this.elements]).map(gn)
                                }
                            },
                            write: function(t) {
                                t.rows.forEach((function(t) {
                                    var e = t.heights;
                                    return t.elements.forEach((function(t, i) {
                                        return Ze(t, "minHeight", e[i])
                                    }))
                                }))
                            },
                            events: ["resize"]
                        }
                    };

                function gn(t) {
                    var e;
                    if (t.length < 2) return {
                        heights: [""],
                        elements: t
                    };
                    var i = pn(t),
                        n = i.heights,
                        o = i.max,
                        r = t.some((function(t) {
                            return t.style.minHeight
                        })),
                        s = t.some((function(t, e) {
                            return !t.style.minHeight && n[e] < o
                        }));
                    return r && s && (Ze(t, "minHeight", ""), e = pn(t), n = e.heights, o = e.max), {
                        heights: n = t.map((function(t, e) {
                            return n[e] === o && Z(t.style.minHeight).toFixed(2) !== o.toFixed(2) ? "" : o
                        })),
                        elements: t
                    }
                }

                function pn(t) {
                    var e = t.map((function(t) {
                        return ni(t).height - ci(t, "height", "content-box")
                    }));
                    return {
                        heights: e,
                        max: Math.max.apply(null, e)
                    }
                }
                var vn = {
                    mixins: [dn],
                    props: {
                        expand: Boolean,
                        offsetTop: Boolean,
                        offsetBottom: Boolean,
                        minHeight: Number
                    },
                    data: {
                        expand: !1,
                        offsetTop: !1,
                        offsetBottom: !1,
                        minHeight: 0
                    },
                    update: {
                        read: function(t) {
                            var e = t.minHeight;
                            if (!Ot(this.$el)) return !1;
                            var i = "",
                                n = ci(this.$el, "height", "content-box");
                            if (this.expand) {
                                if (this.$el.dataset.heightExpand = "", Be("[data-height-expand]") !== this.$el) return !1;
                                i = hi(window) - (wn(document.documentElement) - wn(this.$el)) - n || ""
                            } else {
                                if (i = "calc(100vh", this.offsetTop) {
                                    var o = ni(this.$el).top;
                                    i += o > 0 && o < hi(window) / 2 ? " - " + o + "px" : ""
                                }!0 === this.offsetBottom ? i += " - " + wn(this.$el.nextElementSibling) + "px" : N(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && g(this.offsetBottom, "px") ? i += " - " + Z(this.offsetBottom) + "px" : A(this.offsetBottom) && (i += " - " + wn(xt(this.offsetBottom, this.$el)) + "px"), i += (n ? " - " + n + "px" : "") + ")"
                            }
                            return {
                                minHeight: i,
                                prev: e
                            }
                        },
                        write: function(t) {
                            var e = t.minHeight,
                                i = t.prev;
                            Ze(this.$el, {
                                minHeight: e
                            }), e !== i && this.$update(this.$el, "resize"), this.minHeight && Z(Ze(this.$el, "minHeight")) < this.minHeight && Ze(this.$el, "minHeight", this.minHeight)
                        },
                        events: ["resize"]
                    }
                };

                function wn(t) {
                    return t && ni(t).height || 0
                }
                var mn = {
                        args: "src",
                        props: {
                            id: Boolean,
                            icon: String,
                            src: String,
                            style: String,
                            width: Number,
                            height: Number,
                            ratio: Number,
                            class: String,
                            strokeAnimation: Boolean,
                            focusable: Boolean,
                            attributes: "list"
                        },
                        data: {
                            ratio: 1,
                            include: ["style", "class", "focusable"],
                            class: "",
                            strokeAnimation: !1
                        },
                        beforeConnect: function() {
                            var t, e = this;
                            if (this.class += " uk-svg", !this.icon && x(this.src, "#")) {
                                var i = this.src.split("#");
                                i.length > 1 && (t = i, this.src = t[0], this.icon = t[1])
                            }
                            this.svg = this.getSvg().then((function(t) {
                                return e.applyAttributes(t), e.svgEl = function(t, e) {
                                    if (Pt(e) || "CANVAS" === e.tagName) {
                                        ot(e, "hidden", !0);
                                        var i = e.nextElementSibling;
                                        return Cn(t, i) ? i : we(e, t)
                                    }
                                    var n = e.lastElementChild;
                                    return Cn(t, n) ? n : pe(e, t)
                                }(t, e.$el)
                            }), tt)
                        },
                        disconnected: function() {
                            var t = this;
                            Pt(this.$el) && ot(this.$el, "hidden", null), this.svg && this.svg.then((function(e) {
                                return (!t._connected || e !== t.svgEl) && xe(e)
                            }), tt), this.svg = this.svgEl = null
                        },
                        update: {
                            read: function() {
                                return !!(this.strokeAnimation && this.svgEl && Ot(this.svgEl))
                            },
                            write: function() {
                                var t, e;
                                t = this.svgEl, (e = bn(t)) && t.style.setProperty("--uk-animation-stroke", e)
                            },
                            type: ["resize"]
                        },
                        methods: {
                            getSvg: function() {
                                var t, e = this;
                                return (t = this.src, xn[t] ? xn[t] : xn[t] = new ie((function(e, i) {
                                    t ? d(t, "data:") ? e(decodeURIComponent(t.split(",")[1])) : ae(t).then((function(t) {
                                        return e(t.response)
                                    }), (function() {
                                        return i("SVG not found.")
                                    })) : i()
                                }))).then((function(t) {
                                    return function(t, e) {
                                        return e && x(t, "<symbol") && (t = function(t, e) {
                                            if (!kn[t]) {
                                                var i;
                                                for (kn[t] = {}; i = yn.exec(t);) kn[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
                                                yn.lastIndex = 0
                                            }
                                            return kn[t][e]
                                        }(t, e) || t), (t = Be(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t
                                    }(t, e.icon) || ie.reject("SVG not found.")
                                }))
                            },
                            applyAttributes: function(t) {
                                var e = this;
                                for (var i in this.$options.props) this[i] && x(this.include, i) && ot(t, i, this[i]);
                                for (var n in this.attributes) {
                                    var o = this.attributes[n].split(":", 2),
                                        r = o[0],
                                        s = o[1];
                                    ot(t, r, s)
                                }
                                this.id || st(t, "id");
                                var h = ["width", "height"],
                                    a = [this.width, this.height];
                                a.some((function(t) {
                                    return t
                                })) || (a = h.map((function(e) {
                                    return ot(t, e)
                                })));
                                var l = ot(t, "viewBox");
                                l && !a.some((function(t) {
                                    return t
                                })) && (a = l.split(" ").slice(2)), a.forEach((function(i, n) {
                                    (i = (0 | i) * e.ratio) && ot(t, h[n], i), i && !a[1 ^ n] && st(t, h[1 ^ n])
                                })), ot(t, "data-svg", this.icon || this.src)
                            }
                        }
                    },
                    xn = {},
                    yn = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
                    kn = {};

                function bn(t) {
                    return Math.ceil(Math.max.apply(Math, Ie("[stroke]", t).map((function(t) {
                        return t.getTotalLength && t.getTotalLength() || 0
                    })).concat([0])))
                }

                function Cn(t, e) {
                    return ot(t, "data-svg") === ot(e, "data-svg")
                }
                var Ln = {},
                    $n = {
                        spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
                        totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
                        marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
                        "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
                        "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
                        "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
                        "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
                        "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
                        "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
                        "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                        "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
                        "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                        "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
                        "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
                        "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
                        "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
                    },
                    Mn = {
                        install: function(t) {
                            t.icon.add = function(e, i) {
                                var n, o = A(e) ? ((n = {})[e] = i, n) : e;
                                K(o, (function(t, e) {
                                    $n[e] = t, delete Ln[e]
                                })), t._initialized && Me(document.body, (function(e) {
                                    return K(t.getComponents(e), (function(t) {
                                        t.$options.isIcon && t.icon in o && t.$reset()
                                    }))
                                }))
                            }
                        },
                        extends: mn,
                        args: "icon",
                        props: ["icon"],
                        data: {
                            include: ["focusable"]
                        },
                        isIcon: !0,
                        beforeConnect: function() {
                            Te(this.$el, "uk-icon")
                        },
                        methods: {
                            getSvg: function() {
                                var t = function(t) {
                                    return $n[t] ? (Ln[t] || (Ln[t] = Be($n[t].trim())), Ln[t].cloneNode(!0)) : null
                                }(function(t) {
                                    return lt ? Y(Y(t, "left", "right"), "previous", "next") : t
                                }(this.icon));
                                return t ? ie.resolve(t) : ie.reject("Icon not found.")
                            }
                        }
                    },
                    Bn = {
                        args: !1,
                        extends: Mn,
                        data: function(t) {
                            return {
                                icon: r(t.constructor.options.name)
                            }
                        },
                        beforeConnect: function() {
                            Te(this.$el, this.$name)
                        }
                    },
                    In = {
                        extends: Bn,
                        beforeConnect: function() {
                            Te(this.$el, "uk-slidenav")
                        },
                        computed: {
                            icon: function(t, e) {
                                var i = t.icon;
                                return _e(e, "uk-slidenav-large") ? i + "-large" : i
                            }
                        }
                    },
                    Sn = {
                        extends: Bn,
                        computed: {
                            icon: function(t, e) {
                                var i = t.icon;
                                return _e(e, "uk-search-icon") && _t(e, ".uk-search-large").length ? "search-large" : _t(e, ".uk-search-navbar").length ? "search-navbar" : i
                            }
                        }
                    },
                    Tn = {
                        extends: Bn,
                        computed: {
                            icon: function() {
                                return "close-" + (_e(this.$el, "uk-close-large") ? "large" : "icon")
                            }
                        }
                    },
                    En = {
                        extends: Bn,
                        connected: function() {
                            var t = this;
                            this.svg.then((function(e) {
                                return 1 !== t.ratio && Ze(Be("circle", e), "strokeWidth", 1 / t.ratio)
                            }), tt)
                        }
                    },
                    zn = {
                        args: "dataSrc",
                        props: {
                            dataSrc: String,
                            dataSrcset: Boolean,
                            sizes: String,
                            width: Number,
                            height: Number,
                            offsetTop: String,
                            offsetLeft: String,
                            target: String
                        },
                        data: {
                            dataSrc: "",
                            dataSrcset: !1,
                            sizes: !1,
                            width: !1,
                            height: !1,
                            offsetTop: "50vh",
                            offsetLeft: 0,
                            target: !1
                        },
                        computed: {
                            cacheKey: function(t) {
                                var e = t.dataSrc;
                                return this.$name + "." + e
                            },
                            width: function(t) {
                                var e = t.width,
                                    i = t.dataWidth;
                                return e || i
                            },
                            height: function(t) {
                                var e = t.height,
                                    i = t.dataHeight;
                                return e || i
                            },
                            sizes: function(t) {
                                var e = t.sizes,
                                    i = t.dataSizes;
                                return e || i
                            },
                            isImg: function(t, e) {
                                return Zn(e)
                            },
                            target: {
                                get: function(t) {
                                    var e = t.target;
                                    return [this.$el].concat(yt(e, this.$el))
                                },
                                watch: function() {
                                    this.observe()
                                }
                            },
                            offsetTop: function(t) {
                                return pi(t.offsetTop, "height")
                            },
                            offsetLeft: function(t) {
                                return pi(t.offsetLeft, "width")
                            }
                        },
                        connected: function() {
                            Hn[this.cacheKey] ? An(this.$el, Hn[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && An(this.$el, function(t, e, i) {
                                var n;
                                return i && (n = nt.ratio({
                                    width: t,
                                    height: e
                                }, "width", pi(Nn(i))), t = n.width, e = n.height), 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
                            }(this.width, this.height, this.sizes)), this.observer = new Fi(this.load, {
                                rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
                            }), requestAnimationFrame(this.observe)
                        },
                        disconnected: function() {
                            this.observer.disconnect()
                        },
                        update: {
                            read: function(t) {
                                var e = this,
                                    i = t.image;
                                if (i || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
                                i && i.then((function(t) {
                                    return t && "" !== t.currentSrc && An(e.$el, Fn(t))
                                }))
                            },
                            write: function(t) {
                                if (this.dataSrcset && 1 !== window.devicePixelRatio) {
                                    var e = Ze(this.$el, "backgroundSize");
                                    (e.match(/^(auto\s?)+$/) || Z(e) === t.bgSize) && (t.bgSize = (i = this.dataSrcset, n = this.sizes, o = pi(Nn(n)), (r = (i.match(On) || []).map(Z).sort((function(t, e) {
                                        return t - e
                                    }))).filter((function(t) {
                                        return t >= o
                                    }))[0] || r.pop() || ""), Ze(this.$el, "backgroundSize", t.bgSize + "px"))
                                }
                                var i, n, o, r
                            },
                            events: ["resize"]
                        },
                        methods: {
                            load: function(t) {
                                var e = this;
                                t.some((function(t) {
                                    return D(t.isIntersecting) || t.isIntersecting
                                })) && (this._data.image = le(this.dataSrc, this.dataSrcset, this.sizes).then((function(t) {
                                    return An(e.$el, Fn(t), t.srcset, t.sizes), Hn[e.cacheKey] = Fn(t), t
                                }), tt), this.observer.disconnect())
                            },
                            observe: function() {
                                var t = this;
                                !this._data.image && this._connected && this.target.forEach((function(e) {
                                    return t.observer.observe(e)
                                }))
                            }
                        }
                    };

                function An(t, e, i, n) {
                    Zn(t) ? (n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e)) : e && !x(t.style.backgroundImage, e) && (Ze(t, "backgroundImage", "url(" + Ht(e) + ")"), Yt(t, Ut("load", !1)))
                }
                var _n = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

                function Nn(t) {
                    var e, i;
                    for (_n.lastIndex = 0; e = _n.exec(t);)
                        if (!e[1] || window.matchMedia(e[1]).matches) {
                            e = d(i = e[2], "calc") ? i.substring(5, i.length - 1).replace(Dn, (function(t) {
                                return pi(t)
                            })).replace(/ /g, "").match(Pn).reduce((function(t, e) {
                                return t + +e
                            }), 0) : i;
                            break
                        } return e || "100vw"
                }
                var Hn, Dn = /\d+(?:\w+|%)/g,
                    Pn = /[+-]?(\d+)/g,
                    On = /\s+\d+w\s*(?:,|$)/g;

                function Zn(t) {
                    return "IMG" === t.tagName
                }

                function Fn(t) {
                    return t.currentSrc || t.src
                }
                try {
                    (Hn = window.sessionStorage || {}).__test__ = 1, delete Hn.__test__
                } catch (t) {
                    Hn = {}
                }
                var jn = {
                        props: {
                            media: Boolean
                        },
                        data: {
                            media: !1
                        },
                        computed: {
                            matchMedia: function() {
                                var t = function(t) {
                                    if (A(t))
                                        if ("@" === t[0]) {
                                            var e = "breakpoint-" + t.substr(1);
                                            t = Z(We(e))
                                        } else if (isNaN(t)) return t;
                                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                                }(this.media);
                                return !t || window.matchMedia(t).matches
                            }
                        }
                    },
                    Vn = {
                        mixins: [qi, jn],
                        props: {
                            fill: String
                        },
                        data: {
                            fill: "",
                            clsWrapper: "uk-leader-fill",
                            clsHide: "uk-leader-hide",
                            attrFill: "data-fill"
                        },
                        computed: {
                            fill: function(t) {
                                return t.fill || We("leader-fill-content")
                            }
                        },
                        connected: function() {
                            var t;
                            t = ke(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
                        },
                        disconnected: function() {
                            be(this.wrapper.childNodes)
                        },
                        update: {
                            read: function(t) {
                                var e = t.changed,
                                    i = t.width,
                                    n = i;
                                return {
                                    width: i = Math.floor(this.$el.offsetWidth / 2),
                                    fill: this.fill,
                                    changed: e || n !== i,
                                    hide: !this.matchMedia
                                }
                            },
                            write: function(t) {
                                Ne(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)))
                            },
                            events: ["resize"]
                        }
                    },
                    Wn = {
                        props: {
                            container: Boolean
                        },
                        data: {
                            container: !0
                        },
                        computed: {
                            container: function(t) {
                                var e = t.container;
                                return !0 === e && this.$container || e && Be(e)
                            }
                        }
                    },
                    qn = [],
                    Rn = {
                        mixins: [qi, Wn, Ri],
                        props: {
                            selPanel: String,
                            selClose: String,
                            escClose: Boolean,
                            bgClose: Boolean,
                            stack: Boolean
                        },
                        data: {
                            cls: "uk-open",
                            escClose: !0,
                            bgClose: !0,
                            overlay: !0,
                            stack: !1
                        },
                        computed: {
                            panel: function(t, e) {
                                return Be(t.selPanel, e)
                            },
                            transitionElement: function() {
                                return this.panel
                            },
                            bgClose: function(t) {
                                return t.bgClose && this.panel
                            }
                        },
                        beforeDisconnect: function() {
                            this.isToggled() && this.toggleNow(this.$el, !1)
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return this.selClose
                            },
                            handler: function(t) {
                                t.preventDefault(), this.hide()
                            }
                        }, {
                            name: "toggle",
                            self: !0,
                            handler: function(t) {
                                t.defaultPrevented || (t.preventDefault(), this.toggle())
                            }
                        }, {
                            name: "beforeshow",
                            self: !0,
                            handler: function(t) {
                                if (x(qn, this)) return !1;
                                !this.stack && qn.length ? (ie.all(qn.map((function(t) {
                                    return t.hide()
                                }))).then(this.show), t.preventDefault()) : qn.push(this)
                            }
                        }, {
                            name: "show",
                            self: !0,
                            handler: function() {
                                var t = this;
                                ai(window) - ai(document) && this.overlay && Ze(document.body, "overflowY", "scroll"), Te(document.documentElement, this.clsPage), this.bgClose && Rt(this.$el, "hide", nn(document, "click", (function(e) {
                                    var i = e.defaultPrevented,
                                        n = e.target,
                                        o = X(qn);
                                    i || o !== t || o.overlay && !Vt(n, o.$el) || Vt(n, o.panel) || o.hide()
                                })), {
                                    self: !0
                                }), this.escClose && Rt(this.$el, "hide", Wt(document, "keydown", (function(e) {
                                    var i = X(qn);
                                    27 === e.keyCode && i === t && (e.preventDefault(), i.hide())
                                })), {
                                    self: !0
                                })
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler: function() {
                                var t = this;
                                qn.splice(qn.indexOf(this), 1), qn.length || Ze(document.body, "overflowY", ""), qn.some((function(e) {
                                    return e.clsPage === t.clsPage
                                })) || Ee(document.documentElement, this.clsPage)
                            }
                        }],
                        methods: {
                            toggle: function() {
                                return this.isToggled() ? this.hide() : this.show()
                            },
                            show: function() {
                                var t = this;
                                return this.container && this.$el.parentNode !== this.container ? (pe(this.container, this.$el), new ie((function(e) {
                                    return requestAnimationFrame((function() {
                                        return t.show().then(e)
                                    }))
                                }))) : this.toggleElement(this.$el, !0, Yn(this))
                            },
                            hide: function() {
                                return this.toggleElement(this.$el, !1, Yn(this))
                            }
                        }
                    };

                function Yn(t) {
                    var e = t.transitionElement,
                        i = t._toggle;
                    return function(t, n) {
                        return new ie((function(o, r) {
                            return Rt(t, "show hide", (function() {
                                t._reject && t._reject(), t._reject = r, i(t, n);
                                var s = Rt(e, "transitionstart", (function() {
                                        Rt(e, "transitionend transitioncancel", o, {
                                            self: !0
                                        }), clearTimeout(h)
                                    }), {
                                        self: !0
                                    }),
                                    h = setTimeout((function() {
                                        s(), o()
                                    }), q(Ze(e, "transitionDuration")))
                            }))
                        }))
                    }
                }
                var Un = {
                        install: function(t) {
                            t.modal.dialog = function(e, i) {
                                var n = t.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + e + "</div> </div> ", i);
                                return n.show(), Wt(n.$el, "hidden", (function() {
                                    return ie.resolve((function() {
                                        return n.$destroy(!0)
                                    }))
                                }), {
                                    self: !0
                                }), n
                            }, t.modal.alert = function(e, i) {
                                return i = U({
                                    bgClose: !1,
                                    escClose: !1,
                                    labels: t.modal.labels
                                }, i), new ie((function(n) {
                                    return Wt(t.modal.dialog(' <div class="uk-modal-body">' + (A(e) ? e : ge(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el, "hide", n)
                                }))
                            }, t.modal.confirm = function(e, i) {
                                return i = U({
                                    bgClose: !1,
                                    escClose: !0,
                                    labels: t.modal.labels
                                }, i), new ie((function(n, o) {
                                    var r = t.modal.dialog(' <form> <div class="uk-modal-body">' + (A(e) ? e : ge(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + i.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + i.labels.ok + "</button> </div> </form> ", i),
                                        s = !1;
                                    Wt(r.$el, "submit", "form", (function(t) {
                                        t.preventDefault(), n(), s = !0, r.hide()
                                    })), Wt(r.$el, "hide", (function() {
                                        s || o()
                                    }))
                                }))
                            }, t.modal.prompt = function(e, i, n) {
                                return n = U({
                                    bgClose: !1,
                                    escClose: !0,
                                    labels: t.modal.labels
                                }, n), new ie((function(o) {
                                    var r = t.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (A(e) ? e : ge(e)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + n.labels.ok + "</button> </div> </form> ", n),
                                        s = Be("input", r.$el);
                                    s.value = i;
                                    var h = !1;
                                    Wt(r.$el, "submit", "form", (function(t) {
                                        t.preventDefault(), o(s.value), h = !0, r.hide()
                                    })), Wt(r.$el, "hide", (function() {
                                        h || o(null)
                                    }))
                                }))
                            }, t.modal.labels = {
                                ok: "Ok",
                                cancel: "Cancel"
                            }
                        },
                        mixins: [Rn],
                        data: {
                            clsPage: "uk-modal-page",
                            selPanel: ".uk-modal-dialog",
                            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
                        },
                        events: [{
                            name: "show",
                            self: !0,
                            handler: function() {
                                _e(this.panel, "uk-margin-auto-vertical") ? Te(this.$el, "uk-flex") : Ze(this.$el, "display", "block"), hi(this.$el)
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler: function() {
                                Ze(this.$el, "display", ""), Ee(this.$el, "uk-flex")
                            }
                        }]
                    },
                    Xn = {
                        extends: Yi,
                        data: {
                            targets: "> .uk-parent",
                            toggle: "> a",
                            content: "> ul"
                        }
                    },
                    Kn = {
                        mixins: [qi, dn],
                        props: {
                            dropdown: String,
                            mode: "list",
                            align: String,
                            offset: Number,
                            boundary: Boolean,
                            boundaryAlign: Boolean,
                            clsDrop: String,
                            delayShow: Number,
                            delayHide: Number,
                            dropbar: Boolean,
                            dropbarMode: String,
                            dropbarAnchor: Boolean,
                            duration: Number
                        },
                        data: {
                            dropdown: ".uk-navbar-nav > li",
                            align: lt ? "right" : "left",
                            clsDrop: "uk-navbar-dropdown",
                            mode: void 0,
                            offset: void 0,
                            delayShow: void 0,
                            delayHide: void 0,
                            boundaryAlign: void 0,
                            flip: "x",
                            boundary: !0,
                            dropbar: !1,
                            dropbarMode: "slide",
                            dropbarAnchor: !1,
                            duration: 200,
                            forceHeight: !0,
                            selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
                        },
                        computed: {
                            boundary: function(t, e) {
                                var i = t.boundary,
                                    n = t.boundaryAlign;
                                return !0 === i || n ? e : i
                            },
                            dropbarAnchor: function(t, e) {
                                return xt(t.dropbarAnchor, e)
                            },
                            pos: function(t) {
                                return "bottom-" + t.align
                            },
                            dropdowns: function(t, e) {
                                return Ie(t.dropdown + " ." + t.clsDrop, e)
                            }
                        },
                        beforeConnect: function() {
                            var t = this.$props.dropbar;
                            this.dropbar = t && (xt(t, this.$el) || Be("+ .uk-navbar-dropbar", this.$el) || Be("<div></div>")), this.dropbar && (Te(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && Te(this.dropbar, "uk-navbar-dropbar-slide"))
                        },
                        disconnected: function() {
                            this.dropbar && xe(this.dropbar)
                        },
                        update: function() {
                            var t = this;
                            this.$create("drop", this.dropdowns.filter((function(e) {
                                return !t.getDropdown(e)
                            })), U({}, this.$props, {
                                boundary: this.boundary,
                                pos: this.pos,
                                offset: this.dropbar || this.offset
                            }))
                        },
                        events: [{
                            name: "mouseover",
                            delegate: function() {
                                return this.dropdown
                            },
                            handler: function(t) {
                                var e = t.current,
                                    i = this.getActive();
                                i && i.toggle && !Vt(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1)
                            }
                        }, {
                            name: "mouseleave",
                            el: function() {
                                return this.dropbar
                            },
                            handler: function() {
                                var t = this.getActive();
                                t && !this.dropdowns.some((function(t) {
                                    return Et(t, ":hover")
                                })) && t.hide()
                            }
                        }, {
                            name: "beforeshow",
                            capture: !0,
                            filter: function() {
                                return this.dropbar
                            },
                            handler: function() {
                                this.dropbar.parentNode || we(this.dropbarAnchor || this.$el, this.dropbar)
                            }
                        }, {
                            name: "show",
                            capture: !0,
                            filter: function() {
                                return this.dropbar
                            },
                            handler: function(t, e) {
                                var i = e.$el,
                                    n = e.dir;
                                this.clsDrop && Te(i, this.clsDrop + "-dropbar"), "bottom" === n && this.transitionTo(i.offsetHeight + Z(Ze(i, "marginTop")) + Z(Ze(i, "marginBottom")), i)
                            }
                        }, {
                            name: "beforehide",
                            filter: function() {
                                return this.dropbar
                            },
                            handler: function(t, e) {
                                var i = e.$el,
                                    n = this.getActive();
                                Et(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault()
                            }
                        }, {
                            name: "hide",
                            filter: function() {
                                return this.dropbar
                            },
                            handler: function(t, e) {
                                var i = e.$el,
                                    n = this.getActive();
                                (!n || n && n.$el === i) && this.transitionTo(0)
                            }
                        }],
                        methods: {
                            getActive: function() {
                                var t = this.dropdowns.map(this.getDropdown).filter((function(t) {
                                    return t && t.isActive()
                                }))[0];
                                return t && x(t.mode, "hover") && Vt(t.toggle.$el, this.$el) && t
                            },
                            transitionTo: function(t, e) {
                                var i = this,
                                    n = this.dropbar,
                                    o = Ot(n) ? hi(n) : 0;
                                return Ze(e = o < t && e, "clip", "rect(0," + e.offsetWidth + "px," + o + "px,0)"), hi(n, o), Xe.cancel([e, n]), ie.all([Xe.start(n, {
                                    height: t
                                }, this.duration), Xe.start(e, {
                                    clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                                }, this.duration)]).catch(tt).then((function() {
                                    Ze(e, {
                                        clip: ""
                                    }), i.$update(n)
                                }))
                            },
                            getDropdown: function(t) {
                                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                            }
                        }
                    },
                    Gn = {
                        mixins: [Rn],
                        args: "mode",
                        props: {
                            mode: String,
                            flip: Boolean,
                            overlay: Boolean
                        },
                        data: {
                            mode: "slide",
                            flip: !1,
                            overlay: !1,
                            clsPage: "uk-offcanvas-page",
                            clsContainer: "uk-offcanvas-container",
                            selPanel: ".uk-offcanvas-bar",
                            clsFlip: "uk-offcanvas-flip",
                            clsContainerAnimation: "uk-offcanvas-container-animation",
                            clsSidebarAnimation: "uk-offcanvas-bar-animation",
                            clsMode: "uk-offcanvas",
                            clsOverlay: "uk-offcanvas-overlay",
                            selClose: ".uk-offcanvas-close",
                            container: !1
                        },
                        computed: {
                            clsFlip: function(t) {
                                var e = t.flip,
                                    i = t.clsFlip;
                                return e ? i : ""
                            },
                            clsOverlay: function(t) {
                                var e = t.overlay,
                                    i = t.clsOverlay;
                                return e ? i : ""
                            },
                            clsMode: function(t) {
                                var e = t.mode;
                                return t.clsMode + "-" + e
                            },
                            clsSidebarAnimation: function(t) {
                                var e = t.mode,
                                    i = t.clsSidebarAnimation;
                                return "none" === e || "reveal" === e ? "" : i
                            },
                            clsContainerAnimation: function(t) {
                                var e = t.mode,
                                    i = t.clsContainerAnimation;
                                return "push" !== e && "reveal" !== e ? "" : i
                            },
                            transitionElement: function(t) {
                                return "reveal" === t.mode ? this.panel.parentNode : this.panel
                            }
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return 'a[href^="#"]'
                            },
                            handler: function(t) {
                                var e = t.current.hash;
                                !t.defaultPrevented && e && Be(e, document.body) && this.hide()
                            }
                        }, {
                            name: "touchstart",
                            passive: !0,
                            el: function() {
                                return this.panel
                            },
                            handler: function(t) {
                                var e = t.targetTouches;
                                1 === e.length && (this.clientY = e[0].clientY)
                            }
                        }, {
                            name: "touchmove",
                            self: !0,
                            passive: !1,
                            filter: function() {
                                return this.overlay
                            },
                            handler: function(t) {
                                t.cancelable && t.preventDefault()
                            }
                        }, {
                            name: "touchmove",
                            passive: !1,
                            el: function() {
                                return this.panel
                            },
                            handler: function(t) {
                                if (1 === t.targetTouches.length) {
                                    var e = event.targetTouches[0].clientY - this.clientY,
                                        i = this.panel,
                                        n = i.scrollTop,
                                        o = i.scrollHeight,
                                        r = i.clientHeight;
                                    (r >= o || 0 === n && e > 0 || o - n <= r && e < 0) && t.cancelable && t.preventDefault()
                                }
                            }
                        }, {
                            name: "show",
                            self: !0,
                            handler: function() {
                                "reveal" !== this.mode || _e(this.panel.parentNode, this.clsMode) || (ye(this.panel, "<div>"), Te(this.panel.parentNode, this.clsMode)), Ze(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), Te(document.body, this.clsContainer, this.clsFlip), Ze(document.body, "touch-action", "pan-y pinch-zoom"), Ze(this.$el, "display", "block"), Te(this.$el, this.clsOverlay), Te(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), hi(document.body), Te(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (Jn().content += ",user-scalable=0")
                            }
                        }, {
                            name: "hide",
                            self: !0,
                            handler: function() {
                                Ee(document.body, this.clsContainerAnimation), Ze(document.body, "touch-action", "")
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler: function() {
                                var t;
                                this.clsContainerAnimation && ((t = Jn()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && be(this.panel), Ee(this.panel, this.clsSidebarAnimation, this.clsMode), Ee(this.$el, this.clsOverlay), Ze(this.$el, "display", ""), Ee(document.body, this.clsContainer, this.clsFlip), Ze(document.documentElement, "overflowY", "")
                            }
                        }, {
                            name: "swipeLeft swipeRight",
                            handler: function(t) {
                                this.isToggled() && g(t.type, "Left") ^ this.flip && this.hide()
                            }
                        }]
                    };

                function Jn() {
                    return Be('meta[name="viewport"]', document.head) || pe(document.head, '<meta name="viewport">')
                }
                var Qn = {
                        mixins: [qi],
                        props: {
                            selContainer: String,
                            selContent: String
                        },
                        data: {
                            selContainer: ".uk-modal",
                            selContent: ".uk-modal-dialog"
                        },
                        computed: {
                            container: function(t, e) {
                                return At(e, t.selContainer)
                            },
                            content: function(t, e) {
                                return At(e, t.selContent)
                            }
                        },
                        connected: function() {
                            Ze(this.$el, "minHeight", 150)
                        },
                        update: {
                            read: function() {
                                return !(!this.content || !this.container) && {
                                    current: Z(Ze(this.$el, "maxHeight")),
                                    max: Math.max(150, hi(this.container) - (ni(this.content).height - hi(this.$el)))
                                }
                            },
                            write: function(t) {
                                var e = t.current,
                                    i = t.max;
                                Ze(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && Yt(this.$el, "resize")
                            },
                            events: ["resize"]
                        }
                    },
                    to = {
                        props: ["width", "height"],
                        connected: function() {
                            Te(this.$el, "uk-responsive-width")
                        },
                        update: {
                            read: function() {
                                return !!(Ot(this.$el) && this.width && this.height) && {
                                    width: ai(this.$el.parentNode),
                                    height: this.height
                                }
                            },
                            write: function(t) {
                                hi(this.$el, nt.contain({
                                    height: this.height,
                                    width: this.width
                                }, t).height)
                            },
                            events: ["resize"]
                        }
                    },
                    eo = {
                        props: {
                            duration: Number,
                            offset: Number
                        },
                        data: {
                            duration: 1e3,
                            offset: 0
                        },
                        methods: {
                            scrollTo: function(t) {
                                var e = this;
                                t = t && Be(t) || document.body, Yt(this.$el, "beforescroll", [this, t]) && Ni(t, this.$props).then((function() {
                                    return Yt(e.$el, "scrolled", [e, t])
                                }))
                            }
                        },
                        events: {
                            click: function(t) {
                                t.defaultPrevented || (t.preventDefault(), this.scrollTo(Ht(decodeURIComponent(this.$el.hash)).substr(1)))
                            }
                        }
                    },
                    io = {
                        args: "cls",
                        props: {
                            cls: String,
                            target: String,
                            hidden: Boolean,
                            offsetTop: Number,
                            offsetLeft: Number,
                            repeat: Boolean,
                            delay: Number
                        },
                        data: function() {
                            return {
                                cls: !1,
                                target: !1,
                                hidden: !0,
                                offsetTop: 0,
                                offsetLeft: 0,
                                repeat: !1,
                                delay: 0,
                                inViewClass: "uk-scrollspy-inview"
                            }
                        },
                        computed: {
                            elements: function(t, e) {
                                var i = t.target;
                                return i ? Ie(i, e) : [e]
                            }
                        },
                        update: [{
                            write: function() {
                                this.hidden && Ze(jt(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                            }
                        }, {
                            read: function(t) {
                                var e = this;
                                t.update && this.elements.forEach((function(t) {
                                    var i = t._ukScrollspyState;
                                    i || (i = {
                                        cls: ht(t, "uk-scrollspy-class") || e.cls
                                    }), i.show = Ai(t, e.offsetTop, e.offsetLeft), t._ukScrollspyState = i
                                }))
                            },
                            write: function(t) {
                                var e = this;
                                if (!t.update) return this.$emit(), t.update = !0;
                                this.elements.forEach((function(i) {
                                    var n = i._ukScrollspyState,
                                        o = function(t) {
                                            Ze(i, "visibility", !t && e.hidden ? "hidden" : ""), Ne(i, e.inViewClass, t), Ne(i, n.cls), Yt(i, t ? "inview" : "outview"), n.inview = t, e.$update(i)
                                        };
                                    !n.show || n.inview || n.queued ? !n.show && n.inview && !n.queued && e.repeat && o(!1) : (n.queued = !0, t.promise = (t.promise || ie.resolve()).then((function() {
                                        return new ie((function(t) {
                                            return setTimeout(t, e.delay)
                                        }))
                                    })).then((function() {
                                        o(!0), setTimeout((function() {
                                            return n.queued = !1
                                        }), 300)
                                    })))
                                }))
                            },
                            events: ["scroll", "resize"]
                        }]
                    },
                    no = {
                        props: {
                            cls: String,
                            closest: String,
                            scroll: Boolean,
                            overflow: Boolean,
                            offset: Number
                        },
                        data: {
                            cls: "uk-active",
                            closest: !1,
                            scroll: !1,
                            overflow: !0,
                            offset: 0
                        },
                        computed: {
                            links: function(t, e) {
                                return Ie('a[href^="#"]', e).filter((function(t) {
                                    return t.hash
                                }))
                            },
                            targets: function() {
                                return Ie(this.links.map((function(t) {
                                    return Ht(t.hash).substr(1)
                                })).join(","))
                            },
                            elements: function(t) {
                                var e = t.closest;
                                return At(Ie(this.targets.map((function(t) {
                                    return '[href="#' + t.id + '"]'
                                })).join(",")), e || "*")
                            }
                        },
                        update: [{
                            read: function() {
                                this.scroll && this.$create("scroll", this.links, {
                                    offset: this.offset || 0
                                })
                            }
                        }, {
                            read: function() {
                                var t = this,
                                    e = this.targets.length;
                                if (!e || !Ot(this.$el)) return !1;
                                var i = X(Di(this.targets[0])),
                                    n = i.scrollTop,
                                    o = i.scrollHeight,
                                    r = Pi(i),
                                    s = n,
                                    h = o - ni(r).height,
                                    a = !1;
                                return s === h ? a = e - 1 : (this.targets.every((function(e, i) {
                                    if (ri(e, r).top - t.offset <= 0) return a = i, !0
                                })), !1 === a && this.overflow && (a = 0)), {
                                    active: a
                                }
                            },
                            write: function(t) {
                                var e = t.active;
                                this.links.forEach((function(t) {
                                    return t.blur()
                                })), Ee(this.elements, this.cls), !1 !== e && Yt(this.$el, "active", [e, Te(this.elements[e], this.cls)])
                            },
                            events: ["scroll", "resize"]
                        }]
                    },
                    oo = {
                        mixins: [qi, jn],
                        props: {
                            top: null,
                            bottom: Boolean,
                            offset: String,
                            animation: String,
                            clsActive: String,
                            clsInactive: String,
                            clsFixed: String,
                            clsBelow: String,
                            selTarget: String,
                            widthElement: Boolean,
                            showOnUp: Boolean,
                            targetOffset: Number
                        },
                        data: {
                            top: 0,
                            bottom: !1,
                            offset: 0,
                            animation: "",
                            clsActive: "uk-active",
                            clsInactive: "",
                            clsFixed: "uk-sticky-fixed",
                            clsBelow: "uk-sticky-below",
                            selTarget: "",
                            widthElement: !1,
                            showOnUp: !1,
                            targetOffset: !1
                        },
                        computed: {
                            offset: function(t) {
                                return pi(t.offset)
                            },
                            selTarget: function(t, e) {
                                var i = t.selTarget;
                                return i && Be(i, e) || e
                            },
                            widthElement: function(t, e) {
                                return xt(t.widthElement, e) || this.placeholder
                            },
                            isActive: {
                                get: function() {
                                    return _e(this.selTarget, this.clsActive)
                                },
                                set: function(t) {
                                    t && !this.isActive ? (Ae(this.selTarget, this.clsInactive, this.clsActive), Yt(this.$el, "active")) : t || _e(this.selTarget, this.clsInactive) || (Ae(this.selTarget, this.clsActive, this.clsInactive), Yt(this.$el, "inactive"))
                                }
                            }
                        },
                        connected: function() {
                            this.placeholder = Be("+ .uk-sticky-placeholder", this.$el) || Be('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1
                        },
                        disconnected: function() {
                            this.isFixed && (this.hide(), Ee(this.selTarget, this.clsInactive)), xe(this.placeholder), this.placeholder = null, this.widthElement = null
                        },
                        events: [{
                            name: "load hashchange popstate",
                            el: window,
                            handler: function() {
                                var t = this;
                                if (!1 !== this.targetOffset && location.hash && window.pageYOffset > 0) {
                                    var e = Be(location.hash);
                                    e && wi.read((function() {
                                        var i = ni(e).top,
                                            n = ni(t.$el).top,
                                            o = t.$el.offsetHeight;
                                        t.isFixed && n + o >= i && n <= i + e.offsetHeight && _i(window, i - o - (N(t.targetOffset) ? t.targetOffset : 0) - t.offset)
                                    }))
                                }
                            }
                        }],
                        update: [{
                            read: function(t, e) {
                                var i = t.height;
                                this.isActive && "update" !== e && (this.hide(), i = this.$el.offsetHeight, this.show()), i = this.isActive ? i : this.$el.offsetHeight, this.topOffset = ni(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + i;
                                var n = ro("bottom", this);
                                return this.top = Math.max(Z(ro("top", this)), this.topOffset) - this.offset, this.bottom = n && n - i, this.inactive = !this.matchMedia, {
                                    lastScroll: !1,
                                    height: i,
                                    margins: Ze(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                                }
                            },
                            write: function(t) {
                                var e = t.height,
                                    i = t.margins,
                                    n = this.placeholder;
                                Ze(n, U({
                                    height: e
                                }, i)), Vt(n, document) || (we(this.$el, n), ot(n, "hidden", "")), this.isActive = this.isActive
                            },
                            events: ["resize"]
                        }, {
                            read: function(t) {
                                var e = t.scroll;
                                return void 0 === e && (e = 0), this.width = (Ot(this.widthElement) ? this.widthElement : this.$el).offsetWidth, this.scroll = window.pageYOffset, {
                                    dir: e <= this.scroll ? "down" : "up",
                                    scroll: this.scroll,
                                    visible: Ot(this.$el),
                                    top: si(this.placeholder)[0]
                                }
                            },
                            write: function(t, e) {
                                var i = this,
                                    n = t.initTimestamp;
                                void 0 === n && (n = 0);
                                var o = t.dir,
                                    r = t.lastDir,
                                    s = t.lastScroll,
                                    h = t.scroll,
                                    a = t.top,
                                    l = t.visible,
                                    c = performance.now();
                                if (t.lastScroll = h, !(h < 0 || h === s || !l || this.disabled || this.showOnUp && "scroll" !== e || ((c - n > 300 || o !== r) && (t.initScroll = h, t.initTimestamp = c), t.lastDir = o, this.showOnUp && Math.abs(t.initScroll - h) <= 30 && Math.abs(s - h) <= 10)))
                                    if (this.inactive || h < this.top || this.showOnUp && (h <= this.top || "down" === o || "up" === o && !this.isFixed && h <= this.bottomOffset)) {
                                        if (!this.isFixed) return void(ti.inProgress(this.$el) && a > h && (ti.cancel(this.$el), this.hide()));
                                        this.isFixed = !1, this.animation && h > this.topOffset ? (ti.cancel(this.$el), ti.out(this.$el, this.animation).then((function() {
                                            return i.hide()
                                        }), tt)) : this.hide()
                                    } else this.isFixed ? this.update() : this.animation ? (ti.cancel(this.$el), this.show(), ti.in(this.$el, this.animation).catch(tt)) : this.show()
                            },
                            events: ["resize", "scroll"]
                        }],
                        methods: {
                            show: function() {
                                this.isFixed = !0, this.update(), ot(this.placeholder, "hidden", null)
                            },
                            hide: function() {
                                this.isActive = !1, Ee(this.$el, this.clsFixed, this.clsBelow), Ze(this.$el, {
                                    position: "",
                                    top: "",
                                    width: ""
                                }), ot(this.placeholder, "hidden", "")
                            },
                            update: function() {
                                var t = 0 !== this.top || this.scroll > this.top,
                                    e = Math.max(0, this.offset);
                                this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Ze(this.$el, {
                                    position: "fixed",
                                    top: e + "px",
                                    width: this.width
                                }), this.isActive = t, Ne(this.$el, this.clsBelow, this.scroll > this.bottomOffset), Te(this.$el, this.clsFixed)
                            }
                        }
                    };

                function ro(t, e) {
                    var i = e.$props,
                        n = e.$el,
                        o = e[t + "Offset"],
                        r = i[t];
                    if (r) return N(r) && A(r) && r.match(/^-?\d/) ? o + pi(r) : ni(!0 === r ? n.parentNode : xt(r, n)).bottom
                }
                var so = {
                        mixins: [Ri],
                        args: "connect",
                        props: {
                            connect: String,
                            toggle: String,
                            active: Number,
                            swiping: Boolean
                        },
                        data: {
                            connect: "~.uk-switcher",
                            toggle: "> * > :first-child",
                            active: 0,
                            swiping: !0,
                            cls: "uk-active",
                            clsContainer: "uk-switcher",
                            attrItem: "uk-switcher-item",
                            queued: !0
                        },
                        computed: {
                            connects: function(t, e) {
                                return yt(t.connect, e)
                            },
                            toggles: function(t, e) {
                                return Ie(t.toggle, e)
                            }
                        },
                        events: [{
                            name: "click",
                            delegate: function() {
                                return this.toggle + ":not(.uk-disabled)"
                            },
                            handler: function(t) {
                                t.preventDefault(), this.show(j(this.$el.children).filter((function(e) {
                                    return Vt(t.current, e)
                                }))[0])
                            }
                        }, {
                            name: "click",
                            el: function() {
                                return this.connects
                            },
                            delegate: function() {
                                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                            },
                            handler: function(t) {
                                t.preventDefault(), this.show(ht(t.current, this.attrItem))
                            }
                        }, {
                            name: "swipeRight swipeLeft",
                            filter: function() {
                                return this.swiping
                            },
                            el: function() {
                                return this.connects
                            },
                            handler: function(t) {
                                var e = t.type;
                                this.show(g(e, "Left") ? "next" : "previous")
                            }
                        }],
                        update: function() {
                            var t = this;
                            this.connects.forEach((function(e) {
                                return t.updateAria(e.children)
                            }));
                            var e = this.$el.children;
                            this.show(jt(e, "." + this.cls)[0] || e[this.active] || e[0]), this.swiping && Ze(this.connects, "touch-action", "pan-y pinch-zoom")
                        },
                        methods: {
                            index: function() {
                                return H(this.connects) ? -1 : ue(jt(this.connects[0].children, "." + this.cls)[0])
                            },
                            show: function(t) {
                                for (var e, i, n = this, o = this.$el.children, r = o.length, s = this.index(), h = s >= 0, a = "previous" === t ? -1 : 1, l = de(t, o, s), c = 0; c < r; c++, l = (l + a + r) % r)
                                    if (!Et(this.toggles[l], ".uk-disabled *, .uk-disabled, [disabled]")) {
                                        e = this.toggles[l], i = o[l];
                                        break
                                    } i && s !== l && (Ee(o, this.cls), Te(i, this.cls), ot(this.toggles, "aria-expanded", !1), ot(e, "aria-expanded", !0), this.connects.forEach((function(t) {
                                    h ? n.toggleElement([t.children[s], t.children[l]]) : n.toggleNow(t.children[l])
                                })))
                            }
                        }
                    },
                    ho = {
                        mixins: [qi],
                        extends: so,
                        props: {
                            media: Boolean
                        },
                        data: {
                            media: 960,
                            attrItem: "uk-tab-item"
                        },
                        connected: function() {
                            var t = _e(this.$el, "uk-tab-left") ? "uk-tab-left" : !!_e(this.$el, "uk-tab-right") && "uk-tab-right";
                            t && this.$create("toggle", this.$el, {
                                cls: t,
                                mode: "media",
                                media: this.media
                            })
                        }
                    },
                    ao = {
                        mixins: [jn, Ri],
                        args: "target",
                        props: {
                            href: String,
                            target: null,
                            mode: "list"
                        },
                        data: {
                            href: !1,
                            target: !1,
                            mode: "click",
                            queued: !0
                        },
                        computed: {
                            target: function(t, e) {
                                var i = t.href,
                                    n = t.target;
                                return (n = yt(n || i, e)).length && n || [e]
                            }
                        },
                        connected: function() {
                            Yt(this.target, "updatearia", [this])
                        },
                        events: [{
                            name: vt + " " + wt,
                            filter: function() {
                                return x(this.mode, "hover")
                            },
                            handler: function(t) {
                                te(t) || this.toggle("toggle" + (t.type === vt ? "show" : "hide"))
                            }
                        }, {
                            name: "click",
                            filter: function() {
                                return x(this.mode, "click") || dt && x(this.mode, "hover")
                            },
                            handler: function(t) {
                                var e;
                                (At(t.target, 'a[href="#"], a[href=""]') || (e = At(t.target, "a[href]")) && (this.cls && !_e(this.target, this.cls.split(" ")[0]) || !Ot(this.target) || e.hash && Et(this.target, e.hash))) && t.preventDefault(), this.toggle()
                            }
                        }],
                        update: {
                            read: function() {
                                return !(!x(this.mode, "media") || !this.media) && {
                                    match: this.matchMedia
                                }
                            },
                            write: function(t) {
                                var e = t.match,
                                    i = this.isToggled(this.target);
                                (e ? !i : i) && this.toggle()
                            },
                            events: ["resize"]
                        },
                        methods: {
                            toggle: function(t) {
                                Yt(this.target, t || "toggle", [this]) && this.toggleElement(this.target)
                            }
                        }
                    };
                Wi.version = "3.2.4",
                    function(t) {
                        t.component("accordion", Yi), t.component("alert", Ui), t.component("cover", Ji), t.component("drop", tn), t.component("dropdown", on), t.component("formCustom", rn), t.component("gif", sn), t.component("grid", cn), t.component("heightMatch", fn), t.component("heightViewport", vn), t.component("icon", Mn), t.component("img", zn), t.component("leader", Vn), t.component("margin", hn), t.component("modal", Un), t.component("nav", Xn), t.component("navbar", Kn), t.component("offcanvas", Gn), t.component("overflowAuto", Qn), t.component("responsive", to), t.component("scroll", eo), t.component("scrollspy", io), t.component("scrollspyNav", no), t.component("sticky", oo), t.component("svg", mn), t.component("switcher", so), t.component("tab", ho), t.component("toggle", ao), t.component("video", Gi), t.component("close", Tn), t.component("marker", Bn), t.component("navbarToggleIcon", Bn), t.component("overlayIcon", Bn), t.component("paginationNext", Bn), t.component("paginationPrevious", Bn), t.component("searchIcon", Sn), t.component("slidenavNext", In), t.component("slidenavPrevious", In), t.component("spinner", En), t.component("totop", Bn), t.use(Xi)
                    }(Wi);
                var lo, co = {
                        mixins: [qi],
                        props: {
                            date: String,
                            clsWrapper: String
                        },
                        data: {
                            date: "",
                            clsWrapper: ".uk-countdown-%unit%"
                        },
                        computed: {
                            date: function(t) {
                                var e = t.date;
                                return Date.parse(e)
                            },
                            days: function(t, e) {
                                return Be(t.clsWrapper.replace("%unit%", "days"), e)
                            },
                            hours: function(t, e) {
                                return Be(t.clsWrapper.replace("%unit%", "hours"), e)
                            },
                            minutes: function(t, e) {
                                return Be(t.clsWrapper.replace("%unit%", "minutes"), e)
                            },
                            seconds: function(t, e) {
                                return Be(t.clsWrapper.replace("%unit%", "seconds"), e)
                            },
                            units: function() {
                                var t = this;
                                return ["days", "hours", "minutes", "seconds"].filter((function(e) {
                                    return t[e]
                                }))
                            }
                        },
                        connected: function() {
                            this.start()
                        },
                        disconnected: function() {
                            var t = this;
                            this.stop(), this.units.forEach((function(e) {
                                return fe(t[e])
                            }))
                        },
                        events: [{
                            name: "visibilitychange",
                            el: document,
                            handler: function() {
                                document.hidden ? this.stop() : this.start()
                            }
                        }],
                        update: {
                            write: function() {
                                var t, e, i = this,
                                    n = (t = this.date, {
                                        total: e = t - Date.now(),
                                        seconds: e / 1e3 % 60,
                                        minutes: e / 1e3 / 60 % 60,
                                        hours: e / 1e3 / 60 / 60 % 24,
                                        days: e / 1e3 / 60 / 60 / 24
                                    });
                                n.total <= 0 && (this.stop(), n.days = n.hours = n.minutes = n.seconds = 0), this.units.forEach((function(t) {
                                    var e = String(Math.floor(n[t]));
                                    e = e.length < 2 ? "0" + e : e;
                                    var o = i[t];
                                    o.textContent !== e && ((e = e.split("")).length !== o.children.length && ge(o, e.map((function() {
                                        return "<span></span>"
                                    })).join("")), e.forEach((function(t, e) {
                                        return o.children[e].textContent = t
                                    })))
                                }))
                            }
                        },
                        methods: {
                            start: function() {
                                var t = this;
                                this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval((function() {
                                    return t.$emit()
                                }), 1e3))
                            },
                            stop: function() {
                                this.timer && (clearInterval(this.timer), this.timer = null)
                            }
                        }
                    },
                    uo = "uk-animation-target",
                    fo = {
                        props: {
                            animation: Number
                        },
                        data: {
                            animation: 150
                        },
                        computed: {
                            target: function() {
                                return this.$el
                            }
                        },
                        methods: {
                            animate: function(t) {
                                var e = this;
                                lo || (lo = pe(document.head, "<style>").sheet).insertRule("." + uo + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
                                var i = j(this.target.children),
                                    n = i.map((function(t) {
                                        return go(t, !0)
                                    })),
                                    o = hi(this.target),
                                    r = window.pageYOffset;
                                t(), Xe.cancel(this.target), i.forEach(Xe.cancel), po(this.target), this.$update(this.target), wi.flush();
                                var s = hi(this.target),
                                    h = (i = i.concat(j(this.target.children).filter((function(t) {
                                        return !x(i, t)
                                    })))).map((function(t, e) {
                                        return !!(t.parentNode && e in n) && (n[e] ? Ot(t) ? vo(t) : {
                                            opacity: 0
                                        } : {
                                            opacity: Ot(t) ? 1 : 0
                                        })
                                    }));
                                return n = h.map((function(t, o) {
                                    var r = i[o].parentNode === e.target && (n[o] || go(i[o]));
                                    return r && (t ? "opacity" in t || (r.opacity % 1 ? t.opacity = 1 : delete r.opacity) : delete r.opacity), r
                                })), Te(this.target, uo), i.forEach((function(t, e) {
                                    return n[e] && Ze(t, n[e])
                                })), Ze(this.target, "height", o), _i(window, r), ie.all(i.map((function(t, i) {
                                    return n[i] && h[i] ? Xe.start(t, h[i], e.animation, "ease") : ie.resolve()
                                })).concat(Xe.start(this.target, {
                                    height: s
                                }, this.animation, "ease"))).then((function() {
                                    i.forEach((function(t, e) {
                                        return Ze(t, {
                                            display: 0 === h[e].opacity ? "none" : "",
                                            zIndex: ""
                                        })
                                    })), po(e.target), e.$update(e.target), wi.flush()
                                }), tt)
                            }
                        }
                    };

                function go(t, e) {
                    var i = Ze(t, "zIndex");
                    return !!Ot(t) && U({
                        display: "",
                        opacity: e ? Ze(t, "opacity") : "0",
                        pointerEvents: "none",
                        position: "absolute",
                        zIndex: "auto" === i ? ue(t) : i
                    }, vo(t))
                }

                function po(t) {
                    Ze(t.children, {
                        height: "",
                        left: "",
                        opacity: "",
                        pointerEvents: "",
                        position: "",
                        top: "",
                        width: ""
                    }), Ee(t, uo), Ze(t, "height", "")
                }

                function vo(t) {
                    var e = ni(t),
                        i = e.height,
                        n = e.width,
                        o = ri(t);
                    return {
                        top: o.top,
                        left: o.left,
                        height: i,
                        width: n
                    }
                }
                var wo = {
                    mixins: [fo],
                    args: "target",
                    props: {
                        target: Boolean,
                        selActive: Boolean
                    },
                    data: {
                        target: null,
                        selActive: !1,
                        attrItem: "uk-filter-control",
                        cls: "uk-active",
                        animation: 250
                    },
                    computed: {
                        toggles: {
                            get: function(t, e) {
                                return t.attrItem, Ie("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                            },
                            watch: function() {
                                this.updateState()
                            }
                        },
                        target: function(t, e) {
                            return Be(t.target, e)
                        },
                        children: {
                            get: function() {
                                return j(this.target && this.target.children)
                            },
                            watch: function(t, e) {
                                var i, n;
                                n = e, (i = t).length === n.length && i.every((function(t) {
                                    return ~n.indexOf(t)
                                })) || this.updateState()
                            }
                        }
                    },
                    events: [{
                        name: "click",
                        delegate: function() {
                            return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                        },
                        handler: function(t) {
                            t.preventDefault(), this.apply(t.current)
                        }
                    }],
                    connected: function() {
                        var t = this;
                        if (this.updateState(), !1 !== this.selActive) {
                            var e = Ie(this.selActive, this.$el);
                            this.toggles.forEach((function(i) {
                                return Ne(i, t.cls, x(e, i))
                            }))
                        }
                    },
                    methods: {
                        apply: function(t) {
                            this.setState(xo(t, this.attrItem, this.getState()))
                        },
                        getState: function() {
                            var t = this;
                            return this.toggles.filter((function(e) {
                                return _e(e, t.cls)
                            })).reduce((function(e, i) {
                                return xo(i, t.attrItem, e)
                            }), {
                                filter: {
                                    "": ""
                                },
                                sort: []
                            })
                        },
                        setState: function(t, e) {
                            var i = this;
                            void 0 === e && (e = !0), t = U({
                                filter: {
                                    "": ""
                                },
                                sort: []
                            }, t), Yt(this.$el, "beforeFilter", [this, t]);
                            var n = this.children;
                            this.toggles.forEach((function(e) {
                                return Ne(e, i.cls, !! function(t, e, i) {
                                    var n = i.filter;
                                    void 0 === n && (n = {
                                        "": ""
                                    });
                                    var o = i.sort,
                                        r = o[0],
                                        s = o[1],
                                        h = mo(t, e),
                                        a = h.filter;
                                    void 0 === a && (a = "");
                                    var l = h.group;
                                    void 0 === l && (l = "");
                                    var c = h.sort,
                                        u = h.order;
                                    return void 0 === u && (u = "asc"), D(c) ? l in n && a === n[l] || !a && l && !(l in n) && !n[""] : r === c && s === u
                                }(e, i.attrItem, t))
                            }));
                            var o = function() {
                                var e = function(t) {
                                    var e = t.filter,
                                        i = "";
                                    return K(e, (function(t) {
                                        return i += t || ""
                                    })), i
                                }(t);
                                n.forEach((function(t) {
                                    return Ze(t, "display", e && !Et(t, e) ? "none" : "")
                                }));
                                var o = t.sort,
                                    r = o[0],
                                    s = o[1];
                                if (r) {
                                    var h = function(t, e, i) {
                                        return U([], t).sort((function(t, n) {
                                            return ht(t, e).localeCompare(ht(n, e), void 0, {
                                                numeric: !0
                                            }) * ("asc" === i || -1)
                                        }))
                                    }(n, r, s);
                                    R(h, n) || h.forEach((function(t) {
                                        return pe(i.target, t)
                                    }))
                                }
                            };
                            e ? this.animate(o).then((function() {
                                return Yt(i.$el, "afterFilter", [i])
                            })) : (o(), Yt(this.$el, "afterFilter", [this]))
                        },
                        updateState: function() {
                            var t = this;
                            wi.write((function() {
                                return t.setState(t.getState(), !1)
                            }))
                        }
                    }
                };

                function mo(t, e) {
                    return Si(ht(t, e), ["filter"])
                }

                function xo(t, e, i) {
                    var n = mo(t, e),
                        o = n.filter,
                        r = n.group,
                        s = n.sort,
                        h = n.order;
                    return void 0 === h && (h = "asc"), (o || D(s)) && (r ? o ? (delete i.filter[""], i.filter[r] = o) : (delete i.filter[r], (H(i.filter) || "" in i.filter) && (i.filter = {
                        "": o || ""
                    })) : i.filter = {
                        "": o || ""
                    }), D(s) || (i.sort = [s, h]), i
                }
                var yo = {
                    slide: {
                        show: function(t) {
                            return [{
                                transform: bo(-100 * t)
                            }, {
                                transform: bo()
                            }]
                        },
                        percent: function(t) {
                            return ko(t)
                        },
                        translate: function(t, e) {
                            return [{
                                transform: bo(-100 * e * t)
                            }, {
                                transform: bo(100 * e * (1 - t))
                            }]
                        }
                    }
                };

                function ko(t) {
                    return Math.abs(Ze(t, "transform").split(",")[4] / t.offsetWidth) || 0
                }

                function bo(t, e) {
                    return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", at ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
                }

                function Co(t) {
                    return "scale3d(" + t + ", " + t + ", 1)"
                }
                var Lo = U({}, yo, {
                    fade: {
                        show: function() {
                            return [{
                                opacity: 0
                            }, {
                                opacity: 1
                            }]
                        },
                        percent: function(t) {
                            return 1 - Ze(t, "opacity")
                        },
                        translate: function(t) {
                            return [{
                                opacity: 1 - t
                            }, {
                                opacity: t
                            }]
                        }
                    },
                    scale: {
                        show: function() {
                            return [{
                                opacity: 0,
                                transform: Co(.8)
                            }, {
                                opacity: 1,
                                transform: Co(1)
                            }]
                        },
                        percent: function(t) {
                            return 1 - Ze(t, "opacity")
                        },
                        translate: function(t) {
                            return [{
                                opacity: 1 - t,
                                transform: Co(1 - .2 * t)
                            }, {
                                opacity: t,
                                transform: Co(.8 + .2 * t)
                            }]
                        }
                    }
                });

                function $o(t, e, i) {
                    Yt(t, Ut(e, !1, !1, i))
                }
                var Mo = {
                        props: {
                            autoplay: Boolean,
                            autoplayInterval: Number,
                            pauseOnHover: Boolean
                        },
                        data: {
                            autoplay: !1,
                            autoplayInterval: 7e3,
                            pauseOnHover: !0
                        },
                        connected: function() {
                            this.autoplay && this.startAutoplay()
                        },
                        disconnected: function() {
                            this.stopAutoplay()
                        },
                        update: function() {
                            ot(this.slides, "tabindex", "-1")
                        },
                        events: [{
                            name: "visibilitychange",
                            el: document,
                            filter: function() {
                                return this.autoplay
                            },
                            handler: function() {
                                document.hidden ? this.stopAutoplay() : this.startAutoplay()
                            }
                        }],
                        methods: {
                            startAutoplay: function() {
                                var t = this;
                                this.stopAutoplay(), this.interval = setInterval((function() {
                                    return (!t.draggable || !Be(":focus", t.$el)) && (!t.pauseOnHover || !Et(t.$el, ":hover")) && !t.stack.length && t.show("next")
                                }), this.autoplayInterval)
                            },
                            stopAutoplay: function() {
                                this.interval && clearInterval(this.interval)
                            }
                        }
                    },
                    Bo = {
                        props: {
                            draggable: Boolean
                        },
                        data: {
                            draggable: !0,
                            threshold: 10
                        },
                        created: function() {
                            var t = this;
                            ["start", "move", "end"].forEach((function(e) {
                                var i = t[e];
                                t[e] = function(e) {
                                    var n = ee(e).x * (lt ? -1 : 1);
                                    t.prevPos = n !== t.pos ? t.pos : t.prevPos, t.pos = n, i(e)
                                }
                            }))
                        },
                        events: [{
                            name: ft,
                            delegate: function() {
                                return this.selSlides
                            },
                            handler: function(t) {
                                var e;
                                !this.draggable || !te(t) && (!(e = t.target).children.length && e.childNodes.length) || At(t.target, Zt) || t.button > 0 || this.length < 2 || this.start(t)
                            }
                        }, {
                            name: "touchmove",
                            passive: !1,
                            handler: "move",
                            delegate: function() {
                                return this.selSlides
                            }
                        }, {
                            name: "dragstart",
                            handler: function(t) {
                                t.preventDefault()
                            }
                        }],
                        methods: {
                            start: function() {
                                var t = this;
                                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                                var e = "touchmove" !== gt ? Wt(document, gt, this.move, {
                                    passive: !1
                                }) : tt;
                                this.unbindMove = function() {
                                    e(), t.unbindMove = null
                                }, Wt(window, "scroll", this.unbindMove), Wt(document, pt, this.end, !0), Ze(this.list, "userSelect", "none")
                            },
                            move: function(t) {
                                var e = this;
                                if (this.unbindMove) {
                                    var i = this.pos - this.drag;
                                    if (!(0 === i || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) {
                                        Ze(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1;
                                        for (var n = this.slides, o = this.prevIndex, r = Math.abs(i), s = this.getIndex(o + this.dir, o), h = this._getDistance(o, s) || n[o].offsetWidth; s !== o && r > h;) this.drag -= h * this.dir, o = s, r -= h, s = this.getIndex(o + this.dir, o), h = this._getDistance(o, s) || n[o].offsetWidth;
                                        this.percent = r / h;
                                        var a, l = n[o],
                                            c = n[s],
                                            u = this.index !== s,
                                            d = o === s;
                                        [this.index, this.prevIndex].filter((function(t) {
                                            return !x([s, o], t)
                                        })).forEach((function(t) {
                                            Yt(n[t], "itemhidden", [e]), d && (a = !0, e.prevIndex = o)
                                        })), (this.index === o && this.prevIndex !== o || a) && Yt(n[this.index], "itemshown", [this]), u && (this.prevIndex = o, this.index = s, !d && Yt(l, "beforeitemhide", [this]), Yt(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), l, !d && c), u && (!d && Yt(l, "itemhide", [this]), Yt(c, "itemshow", [this]))
                                    }
                                }
                            },
                            end: function() {
                                if (qt(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), qt(document, pt, this.end, !0), this.dragging)
                                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                                    else {
                                        var t = (lt ? this.dir * (lt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                                    } Ze(this.list, {
                                    userSelect: "",
                                    pointerEvents: ""
                                }), this.drag = this.percent = null
                            }
                        }
                    },
                    Io = {
                        mixins: [Mo, Bo, {
                            data: {
                                selNav: !1
                            },
                            computed: {
                                nav: function(t, e) {
                                    return Be(t.selNav, e)
                                },
                                selNavItem: function(t) {
                                    var e = t.attrItem;
                                    return "[" + e + "],[data-" + e + "]"
                                },
                                navItems: function(t, e) {
                                    return Ie(this.selNavItem, e)
                                }
                            },
                            update: {
                                write: function() {
                                    var t = this;
                                    this.nav && this.length !== this.nav.children.length && ge(this.nav, this.slides.map((function(e, i) {
                                        return "<li " + t.attrItem + '="' + i + '"><a href="#"></a></li>'
                                    })).join("")), Ne(Ie(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                                },
                                events: ["resize"]
                            },
                            events: [{
                                name: "click",
                                delegate: function() {
                                    return this.selNavItem
                                },
                                handler: function(t) {
                                    t.preventDefault(), this.show(ht(t.current, this.attrItem))
                                }
                            }, {
                                name: "itemshow",
                                handler: "updateNav"
                            }],
                            methods: {
                                updateNav: function() {
                                    var t = this,
                                        e = this.getValidIndex();
                                    this.navItems.forEach((function(i) {
                                        var n = ht(i, t.attrItem);
                                        Ne(i, t.clsActive, O(n) === e), Ne(i, "uk-invisible", t.finite && ("previous" === n && 0 === e || "next" === n && e >= t.maxIndex))
                                    }))
                                }
                            }
                        }],
                        props: {
                            clsActivated: Boolean,
                            easing: String,
                            index: Number,
                            finite: Boolean,
                            velocity: Number,
                            selSlides: String
                        },
                        data: function() {
                            return {
                                easing: "ease",
                                finite: !1,
                                velocity: 1,
                                index: 0,
                                prevIndex: -1,
                                stack: [],
                                percent: 0,
                                clsActive: "uk-active",
                                clsActivated: !1,
                                Transitioner: !1,
                                transitionOptions: {}
                            }
                        },
                        connected: function() {
                            this.prevIndex = -1, this.index = this.getValidIndex(this.index), this.stack = []
                        },
                        disconnected: function() {
                            Ee(this.slides, this.clsActive)
                        },
                        computed: {
                            duration: function(t, e) {
                                var i = t.velocity;
                                return So(e.offsetWidth / i)
                            },
                            list: function(t, e) {
                                return Be(t.selList, e)
                            },
                            maxIndex: function() {
                                return this.length - 1
                            },
                            selSlides: function(t) {
                                return t.selList + " " + (t.selSlides || "> *")
                            },
                            slides: {
                                get: function() {
                                    return Ie(this.selSlides, this.$el)
                                },
                                watch: function() {
                                    this.$reset()
                                }
                            },
                            length: function() {
                                return this.slides.length
                            }
                        },
                        events: {
                            itemshown: function() {
                                this.$update(this.list)
                            }
                        },
                        methods: {
                            show: function(t, e) {
                                var i = this;
                                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                                    var n = this.stack,
                                        o = e ? 0 : n.length,
                                        r = function() {
                                            n.splice(o, 1), n.length && i.show(n.shift(), !0)
                                        };
                                    if (n[e ? "unshift" : "push"](t), !e && n.length > 1) 2 === n.length && this._transitioner.forward(Math.min(this.duration, 200));
                                    else {
                                        var s = this.index,
                                            h = _e(this.slides, this.clsActive) && this.slides[s],
                                            a = this.getIndex(t, this.index),
                                            l = this.slides[a];
                                        if (h !== l) {
                                            if (this.dir = function(t, e) {
                                                    return "next" === t ? 1 : "previous" === t ? -1 : t < e ? -1 : 1
                                                }(t, s), this.prevIndex = s, this.index = a, h && Yt(h, "beforeitemhide", [this]), !Yt(l, "beforeitemshow", [this, h])) return this.index = this.prevIndex, void r();
                                            var c = this._show(h, l, e).then((function() {
                                                return h && Yt(h, "itemhidden", [i]), Yt(l, "itemshown", [i]), new ie((function(t) {
                                                    wi.write((function() {
                                                        n.shift(), n.length ? i.show(n.shift(), !0) : i._transitioner = null, t()
                                                    }))
                                                }))
                                            }));
                                            return h && Yt(h, "itemhide", [this]), Yt(l, "itemshow", [this]), c
                                        }
                                        r()
                                    }
                                }
                            },
                            getIndex: function(t, e) {
                                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), Q(de(t, this.slides, e, this.finite), 0, this.maxIndex)
                            },
                            getValidIndex: function(t, e) {
                                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
                            },
                            _show: function(t, e, i) {
                                if (this._transitioner = this._getTransitioner(t, e, this.dir, U({
                                        easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                                    }, this.transitionOptions)), !i && !t) return this._translate(1), ie.resolve();
                                var n = this.stack.length;
                                return this._transitioner[n > 1 ? "forward" : "show"](n > 1 ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent)
                            },
                            _getDistance: function(t, e) {
                                return this._getTransitioner(t, t !== e && e).getDistance()
                            },
                            _translate: function(t, e, i) {
                                void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);
                                var n = this._getTransitioner(e !== i && e, i);
                                return n.translate(t), n
                            },
                            _getTransitioner: function(t, e, i, n) {
                                return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(_(t) ? this.slides[t] : t, _(e) ? this.slides[e] : e, i * (lt ? -1 : 1), n)
                            }
                        }
                    };

                function So(t) {
                    return .5 * t + 300
                }
                var To = {
                        mixins: [Io],
                        props: {
                            animation: String
                        },
                        data: {
                            animation: "slide",
                            clsActivated: "uk-transition-active",
                            Animations: yo,
                            Transitioner: function(t, e, i, n) {
                                var o = n.animation,
                                    r = n.easing,
                                    s = o.percent,
                                    h = o.translate,
                                    a = o.show;
                                void 0 === a && (a = tt);
                                var l = a(i),
                                    c = new ne;
                                return {
                                    dir: i,
                                    show: function(n, o, s) {
                                        var h = this;
                                        void 0 === o && (o = 0);
                                        var a = s ? "linear" : r;
                                        return n -= Math.round(n * Q(o, -1, 1)), this.translate(o), $o(e, "itemin", {
                                            percent: o,
                                            duration: n,
                                            timing: a,
                                            dir: i
                                        }), $o(t, "itemout", {
                                            percent: 1 - o,
                                            duration: n,
                                            timing: a,
                                            dir: i
                                        }), ie.all([Xe.start(e, l[1], n, a), Xe.start(t, l[0], n, a)]).then((function() {
                                            h.reset(), c.resolve()
                                        }), tt), c.promise
                                    },
                                    stop: function() {
                                        return Xe.stop([e, t])
                                    },
                                    cancel: function() {
                                        Xe.cancel([e, t])
                                    },
                                    reset: function() {
                                        for (var i in l[0]) Ze([e, t], i, "")
                                    },
                                    forward: function(i, n) {
                                        return void 0 === n && (n = this.percent()), Xe.cancel([e, t]), this.show(i, n, !0)
                                    },
                                    translate: function(n) {
                                        this.reset();
                                        var o = h(n, i);
                                        Ze(e, o[1]), Ze(t, o[0]), $o(e, "itemtranslatein", {
                                            percent: n,
                                            dir: i
                                        }), $o(t, "itemtranslateout", {
                                            percent: 1 - n,
                                            dir: i
                                        })
                                    },
                                    percent: function() {
                                        return s(t || e, e, i)
                                    },
                                    getDistance: function() {
                                        return t && t.offsetWidth
                                    }
                                }
                            }
                        },
                        computed: {
                            animation: function(t) {
                                var e = t.animation,
                                    i = t.Animations;
                                return U(e in i ? i[e] : i.slide, {
                                    name: e
                                })
                            },
                            transitionOptions: function() {
                                return {
                                    animation: this.animation
                                }
                            }
                        },
                        events: {
                            "itemshow itemhide itemshown itemhidden": function(t) {
                                var e = t.target;
                                this.$update(e)
                            },
                            beforeitemshow: function(t) {
                                Te(t.target, this.clsActive)
                            },
                            itemshown: function(t) {
                                Te(t.target, this.clsActivated)
                            },
                            itemhidden: function(t) {
                                Ee(t.target, this.clsActive, this.clsActivated)
                            }
                        }
                    },
                    Eo = {
                        mixins: [Wn, Rn, Ri, To],
                        functional: !0,
                        props: {
                            delayControls: Number,
                            preload: Number,
                            videoAutoplay: Boolean,
                            template: String
                        },
                        data: function() {
                            return {
                                preload: 1,
                                videoAutoplay: !1,
                                delayControls: 3e3,
                                items: [],
                                cls: "uk-open",
                                clsPage: "uk-lightbox-page",
                                selList: ".uk-lightbox-items",
                                attrItem: "uk-lightbox-item",
                                selClose: ".uk-close-large",
                                selCaption: ".uk-lightbox-caption",
                                pauseOnHover: !1,
                                velocity: 2,
                                Animations: Lo,
                                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                            }
                        },
                        created: function() {
                            var t = Be(this.template),
                                e = Be(this.selList, t);
                            this.items.forEach((function() {
                                return pe(e, "<li></li>")
                            })), this.$mount(pe(this.container, t))
                        },
                        computed: {
                            caption: function(t, e) {
                                return t.selCaption, Be(".uk-lightbox-caption", e)
                            }
                        },
                        events: [{
                            name: gt + " " + ft + " keydown",
                            handler: "showControls"
                        }, {
                            name: "click",
                            self: !0,
                            delegate: function() {
                                return this.selSlides
                            },
                            handler: function(t) {
                                t.defaultPrevented || this.hide()
                            }
                        }, {
                            name: "shown",
                            self: !0,
                            handler: function() {
                                this.showControls()
                            }
                        }, {
                            name: "hide",
                            self: !0,
                            handler: function() {
                                this.hideControls(), Ee(this.slides, this.clsActive), Xe.stop(this.slides)
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler: function() {
                                this.$destroy(!0)
                            }
                        }, {
                            name: "keyup",
                            el: document,
                            handler: function(t) {
                                if (this.isToggled(this.$el)) switch (t.keyCode) {
                                    case 37:
                                        this.show("previous");
                                        break;
                                    case 39:
                                        this.show("next")
                                }
                            }
                        }, {
                            name: "beforeitemshow",
                            handler: function(t) {
                                this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = Lo.scale, Ee(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                            }
                        }, {
                            name: "itemshow",
                            handler: function(t) {
                                var e = ue(t.target),
                                    i = this.getItem(e).caption;
                                Ze(this.caption, "display", i ? "" : "none"), ge(this.caption, i);
                                for (var n = 0; n <= this.preload; n++) this.loadItem(this.getIndex(e + n)), this.loadItem(this.getIndex(e - n))
                            }
                        }, {
                            name: "itemshown",
                            handler: function() {
                                this.draggable = this.$props.draggable
                            }
                        }, {
                            name: "itemload",
                            handler: function(t, e) {
                                var i, n = this,
                                    o = e.source,
                                    r = e.type,
                                    s = e.alt;
                                if (this.setItem(e, "<span uk-spinner></span>"), o)
                                    if ("image" === r || o.match(/\.(jp(e)?g|png|gif|svg|webp)($|\?)/i)) le(o).then((function(t) {
                                        return n.setItem(e, '<img width="' + t.width + '" height="' + t.height + '" src="' + o + '" alt="' + (s || "") + '">')
                                    }), (function() {
                                        return n.setError(e)
                                    }));
                                    else if ("video" === r || o.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                                    var h = Be("<video controls playsinline" + (e.poster ? ' poster="' + e.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
                                    ot(h, "src", o), Rt(h, "error loadedmetadata", (function(t) {
                                        "error" === t ? n.setError(e) : (ot(h, {
                                            width: h.videoWidth,
                                            height: h.videoHeight
                                        }), n.setItem(e, h))
                                    }))
                                } else if ("iframe" === r || o.match(/\.(html|php)($|\?)/i)) this.setItem(e, '<iframe class="uk-lightbox-iframe" src="' + o + '" frameborder="0" allowfullscreen></iframe>');
                                else if (i = o.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || o.match(/()youtu\.be\/(.*)/)) {
                                    var a = i[2],
                                        l = function(t, o) {
                                            return void 0 === t && (t = 640), void 0 === o && (o = 450), n.setItem(e, zo("https://www.youtube" + (i[1] || "") + ".com/embed/" + a, t, o, n.videoAutoplay))
                                        };
                                    le("https://img.youtube.com/vi/" + a + "/maxresdefault.jpg").then((function(t) {
                                        var e = t.width,
                                            i = t.height;
                                        120 === e && 90 === i ? le("https://img.youtube.com/vi/" + a + "/0.jpg").then((function(t) {
                                            var e = t.width,
                                                i = t.height;
                                            return l(e, i)
                                        }), l) : l(e, i)
                                    }), l)
                                } else(i = o.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && ae("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(o), {
                                    responseType: "json",
                                    withCredentials: !1
                                }).then((function(t) {
                                    var o = t.response,
                                        r = o.height,
                                        s = o.width;
                                    return n.setItem(e, zo("https://player.vimeo.com/video/" + i[2], s, r, n.videoAutoplay))
                                }), (function() {
                                    return n.setError(e)
                                }))
                            }
                        }],
                        methods: {
                            loadItem: function(t) {
                                void 0 === t && (t = this.index);
                                var e = this.getItem(t);
                                e.content || Yt(this.$el, "itemload", [e])
                            },
                            getItem: function(t) {
                                return void 0 === t && (t = this.index), this.items[t] || {}
                            },
                            setItem: function(t, e) {
                                U(t, {
                                    content: e
                                });
                                var i = ge(this.slides[this.items.indexOf(t)], e);
                                Yt(this.$el, "itemloaded", [this, i]), this.$update(i)
                            },
                            setError: function(t) {
                                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                            },
                            showControls: function() {
                                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Te(this.$el, "uk-active", "uk-transition-active")
                            },
                            hideControls: function() {
                                Ee(this.$el, "uk-active", "uk-transition-active")
                            }
                        }
                    };

                function zo(t, e, i, n) {
                    return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + n + '" uk-responsive></iframe>'
                }
                var Ao, _o = {
                    install: function(t, e) {
                        t.lightboxPanel || t.component("lightboxPanel", Eo), U(e.props, t.component("lightboxPanel").options.props)
                    },
                    props: {
                        toggle: String
                    },
                    data: {
                        toggle: "a"
                    },
                    computed: {
                        toggles: {
                            get: function(t, e) {
                                return Ie(t.toggle, e)
                            },
                            watch: function() {
                                this.hide()
                            }
                        },
                        items: function() {
                            return J(this.toggles.map(No), "source")
                        }
                    },
                    disconnected: function() {
                        this.hide()
                    },
                    events: [{
                        name: "click",
                        delegate: function() {
                            return this.toggle + ":not(.uk-disabled)"
                        },
                        handler: function(t) {
                            t.preventDefault();
                            var e = ht(t.current, "href");
                            this.show(k(this.items, (function(t) {
                                return t.source === e
                            })))
                        }
                    }],
                    methods: {
                        show: function(t) {
                            var e = this;
                            return this.panel = this.panel || this.$create("lightboxPanel", U({}, this.$props, {
                                items: this.items
                            })), Wt(this.panel.$el, "hidden", (function() {
                                return e.panel = !1
                            })), this.panel.show(t)
                        },
                        hide: function() {
                            return this.panel && this.panel.hide()
                        }
                    }
                };

                function No(t) {
                    return ["href", "caption", "type", "poster", "alt"].reduce((function(e, i) {
                        return e["href" === i ? "source" : i] = ht(t, i), e
                    }), {})
                }
                var Ho = {},
                    Do = {
                        functional: !0,
                        args: ["message", "status"],
                        data: {
                            message: "",
                            status: "",
                            timeout: 5e3,
                            group: null,
                            pos: "top-center",
                            clsClose: "uk-notification-close",
                            clsMsg: "uk-notification-message"
                        },
                        install: function(t) {
                            t.notification.closeAll = function(e, i) {
                                Me(document.body, (function(n) {
                                    var o = t.getComponent(n, "notification");
                                    !o || e && e !== o.group || o.close(i)
                                }))
                            }
                        },
                        computed: {
                            marginProp: function(t) {
                                return "margin" + (d(t.pos, "top") ? "Top" : "Bottom")
                            },
                            startProps: function() {
                                var t;
                                return (t = {
                                    opacity: 0
                                })[this.marginProp] = -this.$el.offsetHeight, t
                            }
                        },
                        created: function() {
                            Ho[this.pos] || (Ho[this.pos] = pe(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
                            var t = Ze(Ho[this.pos], "display", "block");
                            this.$mount(pe(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
                        },
                        connected: function() {
                            var t, e = this,
                                i = Z(Ze(this.$el, this.marginProp));
                            Xe.start(Ze(this.$el, this.startProps), (t = {
                                opacity: 1
                            }, t[this.marginProp] = i, t)).then((function() {
                                e.timeout && (e.timer = setTimeout(e.close, e.timeout))
                            }))
                        },
                        events: (Ao = {
                            click: function(t) {
                                At(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
                            }
                        }, Ao[vt] = function() {
                            this.timer && clearTimeout(this.timer)
                        }, Ao[wt] = function() {
                            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                        }, Ao),
                        methods: {
                            close: function(t) {
                                var e = this,
                                    i = function() {
                                        Yt(e.$el, "close", [e]), xe(e.$el), Ho[e.pos].children.length || Ze(Ho[e.pos], "display", "none")
                                    };
                                this.timer && clearTimeout(this.timer), t ? i() : Xe.start(this.$el, this.startProps).then(i)
                            }
                        }
                    },
                    Po = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
                    Oo = {
                        mixins: [jn],
                        props: Po.reduce((function(t, e) {
                            return t[e] = "list", t
                        }), {}),
                        data: Po.reduce((function(t, e) {
                            return t[e] = void 0, t
                        }), {}),
                        computed: {
                            props: function(t, e) {
                                var i = this;
                                return Po.reduce((function(n, o) {
                                    if (D(t[o])) return n;
                                    var r, s, h, a = o.match(/color/i),
                                        l = a || "opacity" === o,
                                        c = t[o].slice(0);
                                    l && Ze(e, o, ""), c.length < 2 && c.unshift(("scale" === o ? 1 : l ? Ze(e, o) : 0) || 0);
                                    var u = function(t) {
                                        return t.reduce((function(t, e) {
                                            return A(e) && e.replace(/-|\d/g, "").trim() || t
                                        }), "")
                                    }(c);
                                    if (a) {
                                        var f = e.style.color;
                                        c = c.map((function(t) {
                                            return function(t, e) {
                                                return Ze(Ze(t, "color", e), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(Z)
                                            }(e, t)
                                        })), e.style.color = f
                                    } else if (d(o, "bg")) {
                                        var g = "bgy" === o ? "height" : "width";
                                        if (c = c.map((function(t) {
                                                return pi(t, g, i.$el)
                                            })), Ze(e, "background-position-" + o[2], ""), s = Ze(e, "backgroundPosition").split(" ")["x" === o[2] ? 0 : 1], i.covers) {
                                            var p = Math.min.apply(Math, c),
                                                v = Math.max.apply(Math, c),
                                                w = c.indexOf(p) < c.indexOf(v);
                                            h = v - p, c = c.map((function(t) {
                                                return t - (w ? p : v)
                                            })), r = (w ? -h : 0) + "px"
                                        } else r = s
                                    } else c = c.map(Z);
                                    if ("stroke" === o) {
                                        if (!c.some((function(t) {
                                                return t
                                            }))) return n;
                                        var m = bn(i.$el);
                                        Ze(e, "strokeDasharray", m), "%" === u && (c = c.map((function(t) {
                                            return t * m / 100
                                        }))), c = c.reverse(), o = "strokeDashoffset"
                                    }
                                    return n[o] = {
                                        steps: c,
                                        unit: u,
                                        pos: r,
                                        bgPos: s,
                                        diff: h
                                    }, n
                                }), {})
                            },
                            bgProps: function() {
                                var t = this;
                                return ["bgx", "bgy"].filter((function(e) {
                                    return e in t.props
                                }))
                            },
                            covers: function(t, e) {
                                return function(t) {
                                    var e = t.style.backgroundSize,
                                        i = "cover" === Ze(Ze(t, "backgroundSize", ""), "backgroundSize");
                                    return t.style.backgroundSize = e, i
                                }(e)
                            }
                        },
                        disconnected: function() {
                            delete this._image
                        },
                        update: {
                            read: function(t) {
                                var e = this;
                                if (t.active = this.matchMedia, t.active) {
                                    if (!t.image && this.covers && this.bgProps.length) {
                                        var i = Ze(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                                        if (i) {
                                            var n = new Image;
                                            n.src = i, t.image = n, n.naturalWidth || (n.onload = function() {
                                                return e.$emit()
                                            })
                                        }
                                    }
                                    var o = t.image;
                                    if (o && o.naturalWidth) {
                                        var r = {
                                                width: this.$el.offsetWidth,
                                                height: this.$el.offsetHeight
                                            },
                                            s = {
                                                width: o.naturalWidth,
                                                height: o.naturalHeight
                                            },
                                            h = nt.cover(s, r);
                                        this.bgProps.forEach((function(t) {
                                            var i = e.props[t],
                                                n = i.diff,
                                                o = i.bgPos,
                                                a = i.steps,
                                                l = "bgy" === t ? "height" : "width",
                                                c = h[l] - r[l];
                                            if (c < n) r[l] = h[l] + n - c;
                                            else if (c > n) {
                                                var u = r[l] / pi(o, l, e.$el);
                                                u && (e.props[t].steps = a.map((function(t) {
                                                    return t - (c - n) / u
                                                })))
                                            }
                                            h = nt.cover(s, r)
                                        })), t.dim = h
                                    }
                                }
                            },
                            write: function(t) {
                                var e = t.dim;
                                t.active ? e && Ze(this.$el, {
                                    backgroundSize: e.width + "px " + e.height + "px",
                                    backgroundRepeat: "no-repeat"
                                }) : Ze(this.$el, {
                                    backgroundSize: "",
                                    backgroundRepeat: ""
                                })
                            },
                            events: ["resize"]
                        },
                        methods: {
                            reset: function() {
                                var t = this;
                                K(this.getCss(0), (function(e, i) {
                                    return Ze(t.$el, i, "")
                                }))
                            },
                            getCss: function(t) {
                                var e = this.props;
                                return Object.keys(e).reduce((function(i, n) {
                                    var o = e[n],
                                        r = o.steps,
                                        s = o.unit,
                                        h = o.pos,
                                        a = function(t, e, i) {
                                            void 0 === i && (i = 2);
                                            var n = Zo(t, e),
                                                o = n[0],
                                                r = n[1],
                                                s = n[2];
                                            return (_(o) ? o + Math.abs(o - r) * s * (o < r ? 1 : -1) : +r).toFixed(i)
                                        }(r, t);
                                    switch (n) {
                                        case "x":
                                        case "y":
                                            s = s || "px", i.transform += " translate" + l(n) + "(" + Z(a).toFixed("px" === s ? 0 : 2) + s + ")";
                                            break;
                                        case "rotate":
                                            s = s || "deg", i.transform += " rotate(" + (a + s) + ")";
                                            break;
                                        case "scale":
                                            i.transform += " scale(" + a + ")";
                                            break;
                                        case "bgy":
                                        case "bgx":
                                            i["background-position-" + n[2]] = "calc(" + h + " + " + a + "px)";
                                            break;
                                        case "color":
                                        case "backgroundColor":
                                        case "borderColor":
                                            var c = Zo(r, t),
                                                u = c[0],
                                                d = c[1],
                                                f = c[2];
                                            i[n] = "rgba(" + u.map((function(t, e) {
                                                return t += f * (d[e] - t), 3 === e ? Z(t) : parseInt(t, 10)
                                            })).join(",") + ")";
                                            break;
                                        case "blur":
                                            s = s || "px", i.filter += " blur(" + (a + s) + ")";
                                            break;
                                        case "hue":
                                            s = s || "deg", i.filter += " hue-rotate(" + (a + s) + ")";
                                            break;
                                        case "fopacity":
                                            s = s || "%", i.filter += " opacity(" + (a + s) + ")";
                                            break;
                                        case "grayscale":
                                        case "invert":
                                        case "saturate":
                                        case "sepia":
                                            s = s || "%", i.filter += " " + n + "(" + (a + s) + ")";
                                            break;
                                        default:
                                            i[n] = a
                                    }
                                    return i
                                }), {
                                    transform: "",
                                    filter: ""
                                })
                            }
                        }
                    };

                function Zo(t, e) {
                    var i = t.length - 1,
                        n = Math.min(Math.floor(i * e), i - 1),
                        o = t.slice(n, n + 2);
                    return o.push(1 === e ? 1 : e % (1 / i) * i), o
                }
                var Fo = {
                        mixins: [Oo],
                        props: {
                            target: String,
                            viewport: Number,
                            easing: Number
                        },
                        data: {
                            target: !1,
                            viewport: 1,
                            easing: 1
                        },
                        computed: {
                            target: function(t, e) {
                                var i = t.target;
                                return function t(e) {
                                    return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body
                                }(i && xt(i, e) || e)
                            }
                        },
                        update: {
                            read: function(t, e) {
                                var i = t.percent;
                                if ("scroll" !== e && (i = !1), t.active) {
                                    var n = i;
                                    return {
                                        percent: i = function(t, e) {
                                            return Q(t * (1 - (e - e * t)))
                                        }(Hi(this.target) / (this.viewport || 1), this.easing),
                                        style: n !== i && this.getCss(i)
                                    }
                                }
                            },
                            write: function(t) {
                                var e = t.style;
                                t.active ? e && Ze(this.$el, e) : this.reset()
                            },
                            events: ["scroll", "resize"]
                        }
                    },
                    jo = {
                        update: {
                            write: function() {
                                if (!this.stack.length && !this.dragging) {
                                    var t = this.getValidIndex(this.index);
                                    ~this.prevIndex && this.index === t || this.show(t)
                                }
                            },
                            events: ["resize"]
                        }
                    };

                function Vo(t, e, i) {
                    var n = Ro(t, e);
                    return i ? n - function(t, e) {
                        return ni(e).width / 2 - ni(t).width / 2
                    }(t, e) : Math.min(n, Wo(e))
                }

                function Wo(t) {
                    return Math.max(0, qo(t) - ni(t).width)
                }

                function qo(t) {
                    return Uo(t).reduce((function(t, e) {
                        return ni(e).width + t
                    }), 0)
                }

                function Ro(t, e) {
                    return (ri(t).left + (lt ? ni(t).width - ni(e).width : 0)) * (lt ? -1 : 1)
                }

                function Yo(t, e, i) {
                    Yt(t, Ut(e, !1, !1, i))
                }

                function Uo(t) {
                    return j(t.children)
                }
                var Xo = {
                        mixins: [qi, Io, jo],
                        props: {
                            center: Boolean,
                            sets: Boolean
                        },
                        data: {
                            center: !1,
                            sets: !1,
                            attrItem: "uk-slider-item",
                            selList: ".uk-slider-items",
                            selNav: ".uk-slider-nav",
                            clsContainer: "uk-slider-container",
                            Transitioner: function(t, e, i, n) {
                                var o = n.center,
                                    r = n.easing,
                                    s = n.list,
                                    h = new ne,
                                    a = t ? Vo(t, s, o) : Vo(e, s, o) + ni(e).width * i,
                                    l = e ? Vo(e, s, o) : a + ni(t).width * i * (lt ? -1 : 1);
                                return {
                                    dir: i,
                                    show: function(e, n, o) {
                                        void 0 === n && (n = 0);
                                        var a = o ? "linear" : r;
                                        return e -= Math.round(e * Q(n, -1, 1)), this.translate(n), t && this.updateTranslates(), n = t ? n : Q(n, 0, 1), Yo(this.getItemIn(), "itemin", {
                                            percent: n,
                                            duration: e,
                                            timing: a,
                                            dir: i
                                        }), t && Yo(this.getItemIn(!0), "itemout", {
                                            percent: 1 - n,
                                            duration: e,
                                            timing: a,
                                            dir: i
                                        }), Xe.start(s, {
                                            transform: bo(-l * (lt ? -1 : 1), "px")
                                        }, e, a).then(h.resolve, tt), h.promise
                                    },
                                    stop: function() {
                                        return Xe.stop(s)
                                    },
                                    cancel: function() {
                                        Xe.cancel(s)
                                    },
                                    reset: function() {
                                        Ze(s, "transform", "")
                                    },
                                    forward: function(t, e) {
                                        return void 0 === e && (e = this.percent()), Xe.cancel(s), this.show(t, e, !0)
                                    },
                                    translate: function(e) {
                                        var n = this.getDistance() * i * (lt ? -1 : 1);
                                        Ze(s, "transform", bo(Q(n - n * e - l, -qo(s), ni(s).width) * (lt ? -1 : 1), "px")), this.updateTranslates(), t && (e = Q(e, -1, 1), Yo(this.getItemIn(), "itemtranslatein", {
                                            percent: e,
                                            dir: i
                                        }), Yo(this.getItemIn(!0), "itemtranslateout", {
                                            percent: 1 - e,
                                            dir: i
                                        }))
                                    },
                                    percent: function() {
                                        return Math.abs((Ze(s, "transform").split(",")[4] * (lt ? -1 : 1) + a) / (l - a))
                                    },
                                    getDistance: function() {
                                        return Math.abs(l - a)
                                    },
                                    getItemIn: function(e) {
                                        void 0 === e && (e = !1);
                                        var n = this.getActives(),
                                            o = G(Uo(s), "offsetLeft"),
                                            r = ue(o, n[i * (e ? -1 : 1) > 0 ? n.length - 1 : 0]);
                                        return ~r && o[r + (t && !e ? i : 0)]
                                    },
                                    getActives: function() {
                                        var i = Vo(t || e, s, o);
                                        return G(Uo(s).filter((function(t) {
                                            var e = Ro(t, s);
                                            return e >= i && e + ni(t).width <= ni(s).width + i
                                        })), "offsetLeft")
                                    },
                                    updateTranslates: function() {
                                        var t = this.getActives();
                                        Uo(s).forEach((function(i) {
                                            var n = x(t, i);
                                            Yo(i, "itemtranslate" + (n ? "in" : "out"), {
                                                percent: n ? 1 : 0,
                                                dir: i.offsetLeft <= e.offsetLeft ? 1 : -1
                                            })
                                        }))
                                    }
                                }
                            }
                        },
                        computed: {
                            avgWidth: function() {
                                return qo(this.list) / this.length
                            },
                            finite: function(t) {
                                return t.finite || Math.ceil(qo(this.list)) < ni(this.list).width + Uo(this.list).reduce((function(t, e) {
                                    return Math.max(t, ni(e).width)
                                }), 0) + this.center
                            },
                            maxIndex: function() {
                                if (!this.finite || this.center && !this.sets) return this.length - 1;
                                if (this.center) return X(this.sets);
                                Ze(this.slides, "order", "");
                                for (var t = Wo(this.list), e = this.length; e--;)
                                    if (Ro(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                                return 0
                            },
                            sets: function(t) {
                                var e = this,
                                    i = t.sets,
                                    n = ni(this.list).width / (this.center ? 2 : 1),
                                    o = 0,
                                    r = n,
                                    s = 0;
                                return !H(i = i && this.slides.reduce((function(t, i, h) {
                                    var a = ni(i).width;
                                    if (s + a > o && (!e.center && h > e.maxIndex && (h = e.maxIndex), !x(t, h))) {
                                        var l = e.slides[h + 1];
                                        e.center && l && a < r - ni(l).width / 2 ? r -= a : (r = n, t.push(h), o = s + n + (e.center ? a / 2 : 0))
                                    }
                                    return s += a, t
                                }), [])) && i
                            },
                            transitionOptions: function() {
                                return {
                                    center: this.center,
                                    list: this.list
                                }
                            }
                        },
                        connected: function() {
                            Ne(this.$el, this.clsContainer, !Be("." + this.clsContainer, this.$el))
                        },
                        update: {
                            write: function() {
                                var t = this;
                                Ie("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach((function(e) {
                                    var i = ht(e, t.attrItem);
                                    t.maxIndex && Ne(e, "uk-hidden", N(i) && (t.sets && !x(t.sets, Z(i)) || i > t.maxIndex))
                                })), !this.length || this.dragging || this.stack.length || this._translate(1)
                            },
                            events: ["resize"]
                        },
                        events: {
                            beforeitemshow: function(t) {
                                !this.dragging && this.sets && this.stack.length < 2 && !x(this.sets, this.index) && (this.index = this.getValidIndex());
                                var e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                                if (!this.dragging && e > 1) {
                                    for (var i = 0; i < e; i++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                                    t.preventDefault()
                                } else this.duration = So(this.avgWidth / this.velocity) * (ni(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                            },
                            itemshow: function() {
                                !D(this.prevIndex) && Te(this._getTransitioner().getItemIn(), this.clsActive)
                            },
                            itemshown: function() {
                                var t = this,
                                    e = this._getTransitioner(this.index).getActives();
                                this.slides.forEach((function(i) {
                                    return Ne(i, t.clsActive, x(e, i))
                                })), (!this.sets || x(this.sets, Z(this.index))) && this.slides.forEach((function(i) {
                                    return Ne(i, t.clsActivated, x(e, i))
                                }))
                            }
                        },
                        methods: {
                            reorder: function() {
                                var t = this;
                                if (Ze(this.slides, "order", ""), !this.finite) {
                                    var e = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                                    if (this.slides.forEach((function(i, n) {
                                            return Ze(i, "order", t.dir > 0 && n < e ? 1 : t.dir < 0 && n >= t.index ? -1 : "")
                                        })), this.center)
                                        for (var i = this.slides[e], n = ni(this.list).width / 2 - ni(i).width / 2, o = 0; n > 0;) {
                                            var r = this.getIndex(--o + e, e),
                                                s = this.slides[r];
                                            Ze(s, "order", r > e ? -2 : -1), n -= ni(s).width
                                        }
                                }
                            },
                            getValidIndex: function(t, e) {
                                if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                                var i;
                                do {
                                    if (x(this.sets, t)) return t;
                                    i = t, t = this.getIndex(t + this.dir, e)
                                } while (t !== i);
                                return t
                            }
                        }
                    },
                    Ko = {
                        mixins: [Oo],
                        data: {
                            selItem: "!li"
                        },
                        computed: {
                            item: function(t, e) {
                                return xt(t.selItem, e)
                            }
                        },
                        events: [{
                            name: "itemshown",
                            self: !0,
                            el: function() {
                                return this.item
                            },
                            handler: function() {
                                Ze(this.$el, this.getCss(.5))
                            }
                        }, {
                            name: "itemin itemout",
                            self: !0,
                            el: function() {
                                return this.item
                            },
                            handler: function(t) {
                                var e = t.type,
                                    i = t.detail,
                                    n = i.percent,
                                    o = i.duration,
                                    r = i.timing,
                                    s = i.dir;
                                Xe.cancel(this.$el), Ze(this.$el, this.getCss(Jo(e, s, n))), Xe.start(this.$el, this.getCss(Go(e) ? .5 : s > 0 ? 1 : 0), o, r).catch(tt)
                            }
                        }, {
                            name: "transitioncanceled transitionend",
                            self: !0,
                            el: function() {
                                return this.item
                            },
                            handler: function() {
                                Xe.cancel(this.$el)
                            }
                        }, {
                            name: "itemtranslatein itemtranslateout",
                            self: !0,
                            el: function() {
                                return this.item
                            },
                            handler: function(t) {
                                var e = t.type,
                                    i = t.detail,
                                    n = i.percent,
                                    o = i.dir;
                                Xe.cancel(this.$el), Ze(this.$el, this.getCss(Jo(e, o, n)))
                            }
                        }]
                    };

                function Go(t) {
                    return g(t, "in")
                }

                function Jo(t, e, i) {
                    return i /= 2, Go(t) ? e < 0 ? 1 - i : i : e < 0 ? i : 1 - i
                }
                var Qo, tr, er = U({}, yo, {
                        fade: {
                            show: function() {
                                return [{
                                    opacity: 0,
                                    zIndex: 0
                                }, {
                                    zIndex: -1
                                }]
                            },
                            percent: function(t) {
                                return 1 - Ze(t, "opacity")
                            },
                            translate: function(t) {
                                return [{
                                    opacity: 1 - t,
                                    zIndex: 0
                                }, {
                                    zIndex: -1
                                }]
                            }
                        },
                        scale: {
                            show: function() {
                                return [{
                                    opacity: 0,
                                    transform: Co(1.5),
                                    zIndex: 0
                                }, {
                                    zIndex: -1
                                }]
                            },
                            percent: function(t) {
                                return 1 - Ze(t, "opacity")
                            },
                            translate: function(t) {
                                return [{
                                    opacity: 1 - t,
                                    transform: Co(1 + .5 * t),
                                    zIndex: 0
                                }, {
                                    zIndex: -1
                                }]
                            }
                        },
                        pull: {
                            show: function(t) {
                                return t < 0 ? [{
                                    transform: bo(30),
                                    zIndex: -1
                                }, {
                                    transform: bo(),
                                    zIndex: 0
                                }] : [{
                                    transform: bo(-100),
                                    zIndex: 0
                                }, {
                                    transform: bo(),
                                    zIndex: -1
                                }]
                            },
                            percent: function(t, e, i) {
                                return i < 0 ? 1 - ko(e) : ko(t)
                            },
                            translate: function(t, e) {
                                return e < 0 ? [{
                                    transform: bo(30 * t),
                                    zIndex: -1
                                }, {
                                    transform: bo(-100 * (1 - t)),
                                    zIndex: 0
                                }] : [{
                                    transform: bo(100 * -t),
                                    zIndex: 0
                                }, {
                                    transform: bo(30 * (1 - t)),
                                    zIndex: -1
                                }]
                            }
                        },
                        push: {
                            show: function(t) {
                                return t < 0 ? [{
                                    transform: bo(100),
                                    zIndex: 0
                                }, {
                                    transform: bo(),
                                    zIndex: -1
                                }] : [{
                                    transform: bo(-30),
                                    zIndex: -1
                                }, {
                                    transform: bo(),
                                    zIndex: 0
                                }]
                            },
                            percent: function(t, e, i) {
                                return i > 0 ? 1 - ko(e) : ko(t)
                            },
                            translate: function(t, e) {
                                return e < 0 ? [{
                                    transform: bo(100 * t),
                                    zIndex: 0
                                }, {
                                    transform: bo(-30 * (1 - t)),
                                    zIndex: -1
                                }] : [{
                                    transform: bo(-30 * t),
                                    zIndex: -1
                                }, {
                                    transform: bo(100 * (1 - t)),
                                    zIndex: 0
                                }]
                            }
                        }
                    }),
                    ir = {
                        mixins: [qi, To, jo],
                        props: {
                            ratio: String,
                            minHeight: Number,
                            maxHeight: Number
                        },
                        data: {
                            ratio: "16:9",
                            minHeight: !1,
                            maxHeight: !1,
                            selList: ".uk-slideshow-items",
                            attrItem: "uk-slideshow-item",
                            selNav: ".uk-slideshow-nav",
                            Animations: er
                        },
                        update: {
                            read: function() {
                                var t = this.ratio.split(":").map(Number),
                                    e = t[0],
                                    i = t[1];
                                return i = i * this.list.offsetWidth / e || 0, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), {
                                    height: i - ci(this.list, "height", "content-box")
                                }
                            },
                            write: function(t) {
                                var e = t.height;
                                e > 0 && Ze(this.list, "minHeight", e)
                            },
                            events: ["resize"]
                        }
                    },
                    nr = {
                        mixins: [qi, fo],
                        props: {
                            group: String,
                            threshold: Number,
                            clsItem: String,
                            clsPlaceholder: String,
                            clsDrag: String,
                            clsDragState: String,
                            clsBase: String,
                            clsNoDrag: String,
                            clsEmpty: String,
                            clsCustom: String,
                            handle: String
                        },
                        data: {
                            group: !1,
                            threshold: 5,
                            clsItem: "uk-sortable-item",
                            clsPlaceholder: "uk-sortable-placeholder",
                            clsDrag: "uk-sortable-drag",
                            clsDragState: "uk-drag",
                            clsBase: "uk-sortable",
                            clsNoDrag: "uk-sortable-nodrag",
                            clsEmpty: "uk-sortable-empty",
                            clsCustom: "",
                            handle: !1,
                            pos: {}
                        },
                        created: function() {
                            var t = this;
                            ["init", "start", "move", "end"].forEach((function(e) {
                                var i = t[e];
                                t[e] = function(e) {
                                    t.scrollY = window.pageYOffset, U(t.pos, ee(e, "page")), i(e)
                                }
                            }))
                        },
                        events: {
                            name: ft,
                            passive: !1,
                            handler: "init"
                        },
                        update: {
                            write: function() {
                                if (this.clsEmpty && Ne(this.$el, this.clsEmpty, H(this.$el.children)), Ze(this.handle ? Ie(this.handle, this.$el) : this.$el.children, {
                                        touchAction: "none",
                                        userSelect: "none"
                                    }), this.drag) {
                                    var t = ni(window),
                                        e = t.right,
                                        i = t.bottom;
                                    ni(this.drag, {
                                        top: Q(this.pos.y + this.origin.top, 0, i - this.drag.offsetHeight),
                                        left: Q(this.pos.x + this.origin.left, 0, e - this.drag.offsetWidth)
                                    })
                                }
                            }
                        },
                        methods: {
                            init: function(t) {
                                var e = t.target,
                                    i = t.button,
                                    n = t.defaultPrevented,
                                    o = j(this.$el.children).filter((function(t) {
                                        return Vt(e, t)
                                    }))[0];
                                !o || n || i > 0 || Ft(e) || Vt(e, "." + this.clsNoDrag) || this.handle && !Vt(e, this.handle) || (t.preventDefault(), this.touched = [this], this.placeholder = o, this.origin = U({
                                    target: e,
                                    index: ue(o)
                                }, this.pos), Wt(document, gt, this.move), Wt(document, pt, this.end), Wt(window, "scroll", this.scroll), this.threshold || this.start(t))
                            },
                            start: function(t) {
                                this.drag = pe(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), Ze(this.drag, U({
                                    boxSizing: "border-box",
                                    width: this.placeholder.offsetWidth,
                                    height: this.placeholder.offsetHeight,
                                    overflow: "hidden"
                                }, Ze(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), ot(this.drag, "uk-no-boot", ""), Te(this.drag, this.clsDrag, this.clsCustom), hi(this.drag.firstElementChild, hi(this.placeholder.firstElementChild));
                                var e, i = ni(this.placeholder),
                                    n = i.left,
                                    o = i.top;
                                U(this.origin, {
                                    left: n - this.pos.x,
                                    top: o - this.pos.y
                                }), Te(this.placeholder, this.clsPlaceholder), Te(this.$el.children, this.clsItem), Te(document.documentElement, this.clsDragState), Yt(this.$el, "start", [this, this.placeholder]), e = this.pos, Qo = setInterval((function() {
                                    var t = e.x,
                                        i = e.y;
                                    Di(document.elementFromPoint(t - window.pageXOffset, i - window.pageYOffset)).some((function(t) {
                                        var e = t.scrollTop,
                                            n = t.scrollHeight,
                                            o = ni(Pi(t)),
                                            r = o.top,
                                            s = o.bottom,
                                            h = o.height;
                                        if (r < i && r + 30 > i) e -= 5;
                                        else {
                                            if (!(s > i && s - 30 < i)) return;
                                            e += 5
                                        }
                                        if (e > 0 && e < n - h) return _i(t, e), !0
                                    }))
                                }), 15), this.move(t)
                            },
                            move: function(t) {
                                if (this.drag) {
                                    this.$emit();
                                    var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset),
                                        i = this.getSortable(e),
                                        n = this.getSortable(this.placeholder),
                                        o = i !== n;
                                    if (i && !Vt(e, this.placeholder) && (!o || i.group && i.group === n.group)) {
                                        if (e = i.$el === e.parentNode && e || j(i.$el.children).filter((function(t) {
                                                return Vt(e, t)
                                            }))[0], o) n.remove(this.placeholder);
                                        else if (!e) return;
                                        i.insert(this.placeholder, e), x(this.touched, i) || this.touched.push(i)
                                    }
                                } else(Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                            },
                            end: function(t) {
                                if (qt(document, gt, this.move), qt(document, pt, this.end), qt(window, "scroll", this.scroll), this.drag) {
                                    clearInterval(Qo);
                                    var e = this.getSortable(this.placeholder);
                                    this === e ? this.origin.index !== ue(this.placeholder) && Yt(this.$el, "moved", [this, this.placeholder]) : (Yt(e.$el, "added", [e, this.placeholder]), Yt(this.$el, "removed", [this, this.placeholder])), Yt(this.$el, "stop", [this, this.placeholder]), xe(this.drag), this.drag = null;
                                    var i = this.touched.map((function(t) {
                                        return t.clsPlaceholder + " " + t.clsItem
                                    })).join(" ");
                                    this.touched.forEach((function(t) {
                                        return Ee(t.$el.children, i)
                                    })), Ee(document.documentElement, this.clsDragState)
                                } else "touchend" === t.type && t.target.click()
                            },
                            scroll: function() {
                                var t = window.pageYOffset;
                                t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                            },
                            insert: function(t, e) {
                                var i = this;
                                Te(this.$el.children, this.clsItem);
                                var n = function() {
                                    e ? !Vt(t, i.$el) || function(t, e) {
                                        return t.parentNode === e.parentNode && ue(t) > ue(e)
                                    }(t, e) ? ve(e, t) : we(e, t) : pe(i.$el, t)
                                };
                                this.animation ? this.animate(n) : n()
                            },
                            remove: function(t) {
                                Vt(t, this.$el) && (Ze(this.handle ? Ie(this.handle, t) : t, {
                                    touchAction: "",
                                    userSelect: ""
                                }), this.animation ? this.animate((function() {
                                    return xe(t)
                                })) : xe(t))
                            },
                            getSortable: function(t) {
                                return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
                            }
                        }
                    },
                    or = [],
                    rr = {
                        mixins: [Wn, Ri, Qi],
                        args: "title",
                        props: {
                            delay: Number,
                            title: String
                        },
                        data: {
                            pos: "top",
                            title: "",
                            delay: 0,
                            animation: ["uk-animation-scale-up"],
                            duration: 100,
                            cls: "uk-active",
                            clsPos: "uk-tooltip"
                        },
                        beforeConnect: function() {
                            this._hasTitle = rt(this.$el, "title"), ot(this.$el, {
                                title: "",
                                "aria-expanded": !1
                            })
                        },
                        disconnected: function() {
                            this.hide(), ot(this.$el, {
                                title: this._hasTitle ? this.title : null,
                                "aria-expanded": null
                            })
                        },
                        methods: {
                            show: function() {
                                var t = this;
                                !this.isActive() && this.title && (or.forEach((function(t) {
                                    return t.hide()
                                })), or.push(this), this._unbind = Wt(document, pt, (function(e) {
                                    return !Vt(e.target, t.$el) && t.hide()
                                })), clearTimeout(this.showTimer), this.showTimer = setTimeout((function() {
                                    t._show(), t.hideTimer = setInterval((function() {
                                        Ot(t.$el) || t.hide()
                                    }), 150)
                                }), this.delay))
                            },
                            hide: function() {
                                this.isActive() && !Et(this.$el, "input:focus") && (or.splice(or.indexOf(this), 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), ot(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && xe(this.tooltip), this.tooltip = !1, this._unbind())
                            },
                            _show: function() {
                                this.tooltip = pe(this.container, '<div class="' + this.clsPos + '" aria-expanded="true" aria-hidden> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? gi(this.dir) + "-" + this.align : this.align + "-" + gi(this.dir), this.toggleElement(this.tooltip, !0)
                            },
                            isActive: function() {
                                return x(or, this)
                            }
                        },
                        events: (tr = {
                            focus: "show",
                            blur: "hide"
                        }, tr[vt + " " + wt] = function(t) {
                            te(t) || (t.type === vt ? this.show() : this.hide())
                        }, tr[ft] = function(t) {
                            te(t) && (this.isActive() ? this.hide() : this.show())
                        }, tr)
                    },
                    sr = {
                        props: {
                            allow: String,
                            clsDragover: String,
                            concurrent: Number,
                            maxSize: Number,
                            method: String,
                            mime: String,
                            msgInvalidMime: String,
                            msgInvalidName: String,
                            msgInvalidSize: String,
                            multiple: Boolean,
                            name: String,
                            params: Object,
                            type: String,
                            url: String
                        },
                        data: {
                            allow: !1,
                            clsDragover: "uk-dragover",
                            concurrent: 1,
                            maxSize: 0,
                            method: "POST",
                            mime: !1,
                            msgInvalidMime: "Invalid File Type: %s",
                            msgInvalidName: "Invalid File Name: %s",
                            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                            multiple: !1,
                            name: "files[]",
                            params: {},
                            type: "",
                            url: "",
                            abort: tt,
                            beforeAll: tt,
                            beforeSend: tt,
                            complete: tt,
                            completeAll: tt,
                            error: tt,
                            fail: tt,
                            load: tt,
                            loadEnd: tt,
                            loadStart: tt,
                            progress: tt
                        },
                        events: {
                            change: function(t) {
                                Et(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                            },
                            drop: function(t) {
                                ar(t);
                                var e = t.dataTransfer;
                                e && e.files && (Ee(this.$el, this.clsDragover), this.upload(e.files))
                            },
                            dragenter: function(t) {
                                ar(t)
                            },
                            dragover: function(t) {
                                ar(t), Te(this.$el, this.clsDragover)
                            },
                            dragleave: function(t) {
                                ar(t), Ee(this.$el, this.clsDragover)
                            }
                        },
                        methods: {
                            upload: function(t) {
                                var e = this;
                                if (t.length) {
                                    Yt(this.$el, "upload", [t]);
                                    for (var i = 0; i < t.length; i++) {
                                        if (this.maxSize && 1e3 * this.maxSize < t[i].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                                        if (this.allow && !hr(this.allow, t[i].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                                        if (this.mime && !hr(this.mime, t[i].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                                    }
                                    this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                                    var n = function(t, e) {
                                            for (var i = [], n = 0; n < t.length; n += e) {
                                                for (var o = [], r = 0; r < e; r++) o.push(t[n + r]);
                                                i.push(o)
                                            }
                                            return i
                                        }(t, this.concurrent),
                                        o = function(t) {
                                            var i = new FormData;
                                            for (var r in t.forEach((function(t) {
                                                    return i.append(e.name, t)
                                                })), e.params) i.append(r, e.params[r]);
                                            ae(e.url, {
                                                data: i,
                                                method: e.method,
                                                responseType: e.type,
                                                beforeSend: function(t) {
                                                    var i = t.xhr;
                                                    i.upload && Wt(i.upload, "progress", e.progress), ["loadStart", "load", "loadEnd", "abort"].forEach((function(t) {
                                                        return Wt(i, t.toLowerCase(), e[t])
                                                    })), e.beforeSend(t)
                                                }
                                            }).then((function(t) {
                                                e.complete(t), n.length ? o(n.shift()) : e.completeAll(t)
                                            }), (function(t) {
                                                return e.error(t)
                                            }))
                                        };
                                    o(n.shift())
                                }
                            }
                        }
                    };

                function hr(t, e) {
                    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
                }

                function ar(t) {
                    t.preventDefault(), t.stopPropagation()
                }
                return Wi.component("countdown", co), Wi.component("filter", wo), Wi.component("lightbox", _o), Wi.component("lightboxPanel", Eo), Wi.component("notification", Do), Wi.component("parallax", Fo), Wi.component("slider", Xo), Wi.component("sliderParallax", Ko), Wi.component("slideshow", ir), Wi.component("slideshowParallax", Ko), Wi.component("sortable", nr), Wi.component("tooltip", rr), Wi.component("upload", sr),
                    function(t) {
                        var e = t.connect,
                            i = t.disconnect;

                        function n(n) {
                            var r = n.target;
                            ("attributes" !== n.type ? function(t) {
                                for (var n = t.addedNodes, r = t.removedNodes, s = 0; s < n.length; s++) o(n[s], e);
                                for (var h = 0; h < r.length; h++) o(r[h], i);
                                return !0
                            }(n) : function(e) {
                                var i = e.target,
                                    n = e.attributeName;
                                if ("href" === n) return !0;
                                var o = Vi(n);
                                if (o && o in t) {
                                    if (rt(i, n)) return t[o](i), !0;
                                    var r = t.getComponent(i, o);
                                    return r ? (r.$destroy(), !0) : void 0
                                }
                            }(n)) && t.update(r)
                        }

                        function o(t, e) {
                            if (1 === t.nodeType && !rt(t, "uk-no-boot"))
                                for (e(t), t = t.firstElementChild; t;) {
                                    var i = t.nextElementSibling;
                                    o(t, e), t = i
                                }
                        }
                        "MutationObserver" in window && wi.read((function() {
                            document.body && o(document.body, e), new MutationObserver((function(t) {
                                return t.forEach(n)
                            })).observe(document, {
                                childList: !0,
                                subtree: !0,
                                characterData: !0,
                                attributes: !0
                            }), t._initialized = !0
                        }))
                    }(Wi), Wi
            }()
        })),
        i = t((function(t, e) {
            /*! UIkit 3.2.4 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */
            t.exports = function() {
                function t(e) {
                    t.installed || e.icon.add({
                        "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
                        album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
                        "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
                        "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
                        "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
                        "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
                        ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
                        behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
                        bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
                        bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
                        bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
                        bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
                        calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
                        camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
                        cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
                        check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
                        "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
                        "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
                        "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
                        "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
                        "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
                        "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
                        clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
                        close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
                        "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
                        "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
                        code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
                        cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
                        comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
                        commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
                        comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
                        copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
                        "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
                        database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
                        desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
                        download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
                        dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
                        etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
                        expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
                        facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
                        "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
                        "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
                        "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
                        file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
                        flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
                        folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
                        forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
                        foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
                        future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
                        "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
                        "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
                        "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
                        github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
                        gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
                        "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
                        google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
                        grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
                        happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
                        hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
                        heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
                        history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
                        home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
                        image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
                        info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
                        instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
                        italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
                        joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
                        laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
                        lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
                        link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
                        linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
                        list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
                        location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
                        lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
                        mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
                        menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
                        microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
                        "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
                        minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
                        "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
                        more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
                        move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
                        nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
                        pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
                        "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
                        pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
                        "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
                        phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
                        pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
                        "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
                        play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
                        "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
                        plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
                        print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
                        pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
                        push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
                        question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
                        "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
                        receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
                        reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
                        refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
                        reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
                        rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
                        search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                        server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
                        settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
                        shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
                        "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
                        "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
                        social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
                        soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
                        star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
                        strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
                        table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
                        "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
                        tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
                        tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
                        thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
                        trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
                        "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
                        "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
                        "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
                        "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
                        tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
                        tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
                        tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
                        twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
                        uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
                        unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
                        upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
                        user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
                        users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
                        "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
                        vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
                        warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
                        whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
                        wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
                        world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
                        xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
                        yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
                        youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
                    })
                }
                return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
            }()
        }));
    e.use(i)
}();
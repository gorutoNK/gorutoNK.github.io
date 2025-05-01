
    "use strict";
(() => {
    var Ge = Object.defineProperty,
        Ue = Object.defineProperties,
        Ke = Object.getOwnPropertyDescriptors,
        H = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        oe = Object.prototype.propertyIsEnumerable,
        ne = (r, n, o) => n in r ? Ge(r, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : r[n] = o,
        M = (r, n) => {
            for (var o in n || (n = {})) re.call(n, o) && ne(r, o, n[o]);
            if (H)
                for (var o of H(n)) oe.call(n, o) && ne(r, o, n[o]);
            return r
        },
        S = (r, n) => Ue(r, Ke(n)),
        ie = (r, n) => {
            var o = {};
            for (var i in r) re.call(r, i) && n.indexOf(i) < 0 && (o[i] = r[i]);
            if (r != null && H)
                for (var i of H(r)) n.indexOf(i) < 0 && oe.call(r, i) && (o[i] = r[i]);
            return o
        },
        se = (r, n, o) => new Promise((i, l) => {
            var a = p => {
                    try {
                        c(o.next(p))
                    } catch (f) {
                        l(f)
                    }
                },
                d = p => {
                    try {
                        c(o.throw(p))
                    } catch (f) {
                        l(f)
                    }
                },
                c = p => p.done ? i(p.value) : Promise.resolve(p.value).then(a, d);
            c((o = o.apply(r, n)).next())
        });

    function V(r, n) {
        return Math.round(r * n) / n
    }

    function q(r, n, o, i) {
        let l = (r + (i || "")).toString().includes("%");
        if (typeof r == "string" ? [r, n, o, i] = r.match(/(0?\.?\d+)%?\b/g).map(a => Number(a)) : i !== void 0 && (i = Number.parseFloat(i)), typeof r != "number" || typeof n != "number" || typeof o != "number" || r > 255 || n > 255 || o > 255) throw new TypeError("Expected three numbers below 256");
        if (typeof i == "number") {
            if (!l && i >= 0 && i <= 1) i = Math.round(255 * i);
            else if (l && i >= 0 && i <= 100) i = Math.round(255 * i / 100);
            else throw new TypeError(`Expected alpha value (${i}) as a fraction or percentage`);
            i = (i | 256).toString(16).slice(1)
        } else i = "";
        return (o | n << 8 | r << 16 | 1 << 24).toString(16).slice(1) + i
    }

    function k(r) {
        return r.filter(ae)
    }

    function ae(r) {
        return r != null
    }

    function $(r) {
        console.warn(r)
    }

    function z(r) {
        return typeof r == "object" && r.type === "VARIABLE_ALIAS"
    }

    function Xe(r) {
        if ("a" in r) {
            let o = V(r.a, 100);
            if (o !== 1) return `rgba(${r.r},${r.g},${r.b},${o})`
        }
        let n = q(r.r, r.g, r.b);
        return n[0] === n[1] && n[2] === n[3] && n[4] === n[5] ? `#${n[0]}${n[2]}${n[4]}` : `#${n}`
    }

    function qe(r) {
        let {
            r: n,
            g: o,
            b: i,
            a: l = 1
        } = r;
        return {
            r: V(n * 255, 1),
            g: V(o * 255, 1),
            b: V(i * 255, 1),
            a: l
        }
    }

    function R(r) {
        return `${V(r,10)}px`
    }

    function Z(r) {
        return `${V(r,10)}%`
    }

    function ue(r) {
        switch (typeof r) {
            case "object":
                if (z(r)) return `var(${r.id})`;
                if ("r" in r) return Xe(qe(r));
            case "string":
            case "number":
            case "boolean":
            default:
                return String(r)
        }
    }

    function W(r) {
        return "T" + r
    }
    var le = ["appear", "mousedown", "mouseenter", "mouseleave", "mouseup", "timeout", "click", "press", "drag", "keydown", "hover"];

    function G(r) {
        if (r) return (...n) => {
            if (!r) return;
            let o = r;
            return r = void 0, o(...n)
        }
    }
    var Ze = r => r instanceof HTMLElement || r instanceof SVGElement;

    function Qe(r, n) {
        if (!r.parentElement) return;
        let o = new MutationObserver(i => {
            for (let l of i.filter(a => a.type === "childList"))
                for (let a of l.removedNodes) a === r && (n?.(), o.disconnect())
        });
        o.observe(r.parentElement, {
            childList: !0
        })
    }

    function _(r, n) {
        let o = new MutationObserver(i => {
            for (let l of i.filter(a => a.type === "childList"))
                for (let a of l.addedNodes) Ze(a) && a.matches(r) && Qe(a, n(a))
        });
        return o.observe(document, {
            childList: !0,
            subtree: !0
        }), () => o.disconnect()
    }
    var ce = new Set(["youtube-video", "vimeo-video", "spotify-audio", "jwplayer-video", "videojs-video", "wistia-video", "cloudflare-video", "hls-video", "shaka-video", "dash-video"]);

    function et(r) {
        return ce.has(r.tagName.toLowerCase()) || r.tagName === "VIDEO"
    }

    function tt(r) {
        if (r.tagName !== "IFRAME") return !1;
        let n = r.src;
        return (n.includes("youtube.com") || n.includes("youtube-nocookie.com")) && n.includes("enablejsapi=1")
    }
    var D = class {
        constructor(r) {
            this.iframe = r, this.info = {}, this.messageListener = null, this.loaded = new Promise(n => {
                let o = () => {
                    this.iframe.removeEventListener("load", o), setTimeout(() => {
                        this.requestYoutubeListening()
                    })
                };
                this.iframe.addEventListener("load", o), this.messageListener = i => {
                    if (i.source === this.iframe.contentWindow && i.data) {
                        let l;
                        try {
                            l = JSON.parse(i.data)
                        } catch (a) {
                            console.error("YoutubeController messageListener", a);
                            return
                        }
                        l.event === "onReady" && this.iframe.removeEventListener("load", o), l.info && (Object.assign(this.info, l.info), n(!0))
                    }
                }, window.addEventListener("message", this.messageListener), this.requestYoutubeListening()
            })
        }
        sendYoutubeMessage(r) {
            return se(this, arguments, function*(n, o = []) {
                var i;
                yield this.loaded, (i = this.iframe.contentWindow) == null || i.postMessage(JSON.stringify({
                    event: "command",
                    func: n,
                    args: o
                }), "*")
            })
        }
        requestYoutubeListening() {
            var r;
            (r = this.iframe.contentWindow) == null || r.postMessage(JSON.stringify({
                event: "listening"
            }), "*")
        }
        get muted() {
            return this.info.muted
        }
        get volume() {
            return this.info.volume
        }
        set muted(r) {
            r ? this.sendYoutubeMessage("mute") : this.sendYoutubeMessage("unMute")
        }
        get currentTime() {
            return this.info.currentTime
        }
        set currentTime(r) {
            this.sendYoutubeMessage("seekTo", [r, !0])
        }
        get paused() {
            return this.info.playerState === 2
        }
        play() {
            this.sendYoutubeMessage("playVideo")
        }
        pause() {
            this.sendYoutubeMessage("pauseVideo")
        }
        static from(r) {
            return r.f2w_yt_controller || (r.f2w_yt_controller = new D(r))
        }
    };

    function L(r) {
        if (et(r)) return r;
        if (tt(r)) return D.from(r)
    }

    function de(r) {
        let n = L(r);
        return n ? () => (n.muted = !n.muted, () => {
            n.muted = !n.muted
        }) : () => console.warn("Video element not recognized", r)
    }

    function pe(r) {
        let n = L(r);
        return n ? () => (n.muted = !0, () => {
            n.muted = !1
        }) : () => console.warn("Video element not recognized", r)
    }

    function fe(r) {
        let n = L(r);
        return n ? () => (n.muted = !1, () => {
            n.muted = !0
        }) : () => console.warn("Video element not recognized", r)
    }

    function me(r) {
        let n = L(r);
        return n ? () => (n.play(), () => n.pause()) : () => console.warn("Video element not recognized", r)
    }

    function ge(r) {
        let n = L(r);
        return n ? () => (n.pause(), () => n.play()) : () => console.warn("Video element not recognized", r)
    }

    function ye(r) {
        let n = L(r);
        return n ? () => (n.paused ? n.play() : n.pause(), () => {
            n.paused ? n.play() : n.pause()
        }) : () => console.warn("Video element not recognized", r)
    }

    function Ee(r, n) {
        let o = L(r);
        return o ? () => {
            o.currentTime = n
        } : () => console.warn("Video element not recognized", r)
    }

    function xe(r, n) {
        let o = L(r);
        return o ? () => (o.currentTime += n, () => {
            o.currentTime -= n
        }) : () => console.warn("Video element not recognized", r)
    }

    function be(r, n) {
        let o = L(r);
        return o ? () => (o.currentTime -= n, () => {
            o.currentTime += n
        }) : () => console.warn("Video element not recognized", r)
    }

    function Te() {
        let r = navigator.userAgent;
        return r.includes("Safari") && !r.includes("Chrome")
    }

    function he(r) {
        return r === "absolute" || r === "fixed"
    }
    var nt = Te();

    function U(r, n, o) {
        r.animate(M({}, n), {
            pseudoElement: o,
            iterations: 1,
            duration: 0,
            fill: "forwards"
        })
    }

    function Q(r) {
        return Object.fromEntries(r.map(n => [n.camelKey, [n.from, n.to]]))
    }

    function K(r, n, o, i, l) {
        let a = r.parentElement,
            d = getComputedStyle(r),
            c = getComputedStyle(a).display,
            p = c.endsWith("flex") || c.endsWith("grid"),
            f = he(d.position),
            h = n.map(s => S(M({}, s), {
                camelKey: s.key.startsWith("--") ? s.key : s.key.replace(/-([a-z])/g, (b, T) => T.toUpperCase())
            })),
            A = {},
            E = h.filter(s => s.pseudo ? !1 : s.key.startsWith("--f2w-attr-") ? (A[s.key.slice(11)] = s.to, !1) : !0),
            u = Q(E),
            x = Q(h.filter(s => s.pseudo === "::before")),
            C = Q(h.filter(s => s.pseudo === "::after")),
            m;
        u.display && (u.display[0] === "none" ? r.style.display = String(u.display[1]) : u.display[1] === "none" && p && !f && (r.style.display = "none"), m = String(u.display[1]), delete u.display), nt && (Ne(r, u, "overflow"), Ne(r, u, "rowGap", "gridRowGap"));
        let v = +getComputedStyle(r).getPropertyValue("--f2w-order");
        if (u["--f2w-order"]) {
            let s = u["--f2w-order"][1];
            v = s === void 0 ? NaN : +s, isNaN(v) || r.style.setProperty("--f2w-order", String(v)), delete u["--f2w-order"]
        }
        if (isNaN(v) || l.add(a), u["--f2w-img-src"]) {
            let s = r.f2w_image_lazy_loader,
                b = u["--f2w-img-src"][1];
            s || (r.f2w_image_lazy_loader = s = new Image, s.decoding = "sync", s.onload = () => {
                r.decoding = "sync", r.setAttribute("src", b), delete r.f2w_image_lazy_loader
            }), s.src = b, delete u["--f2w-img-src"]
        }
        u.$innerHTML && (r.innerHTML = String(u.$innerHTML[1]), delete u.$innerHTML);
        for (let [s, b] of Object.entries(A)) r.setAttribute(s, String(b));
        if (u.left && u.right) {
            if (u.left[1] === "revert" && u.right[0] === "revert") {
                let {
                    right: s
                } = a.getBoundingClientRect(), {
                    right: b
                } = r.getBoundingClientRect(), T = R(s - b);
                U(r, {
                    left: "revert",
                    right: T
                }), delete u.left, u.right[0] = T
            } else if (u.left[0] === "revert" && u.right[1] === "revert") {
                let {
                    left: s
                } = a.getBoundingClientRect(), {
                    left: b
                } = r.getBoundingClientRect(), T = R(b - s);
                U(r, {
                    right: "revert",
                    left: T
                }), delete u.right, u.left[0] = T
            }
        }
        if (u.top && u.bottom) {
            if (u.top[1] === "revert" && u.bottom[0] === "revert") {
                let {
                    bottom: s
                } = a.getBoundingClientRect(), {
                    bottom: b
                } = r.getBoundingClientRect(), T = R(s - b);
                U(r, {
                    top: "revert",
                    bottom: T
                }), delete u.top, u.bottom[0] = T
            } else if (u.top[0] === "revert" && u.bottom[1] === "revert") {
                let {
                    top: s
                } = a.getBoundingClientRect(), {
                    top: b
                } = r.getBoundingClientRect(), T = R(b - s);
                U(r, {
                    bottom: "revert",
                    top: T
                }), delete u.bottom, u.top[0] = T
            }
        }
        u.backgroundImage && E.filter(s => s.key.startsWith("background-")).forEach(s => {
            r.style.setProperty(s.key, String(s.to)), delete u[s.camelKey]
        });
        for (let [s, b] of [
                ["before", x],
                ["after", C]
            ]) b.display && (b.display[1] === "none" ? (r.classList.remove(s + "-visible"), r.classList.add(s + "-hidden")) : (r.classList.remove(s + "-hidden"), r.classList.add(s + "-visible")));
        let g = (s, b, T = !1) => {
                if (!(!T && !Object.keys(s).length)) return r.animate(M({
                    easing: o
                }, s), {
                    pseudoElement: b,
                    iterations: 1,
                    duration: i,
                    fill: "both"
                })
            },
            y = g(u, void 0, !!m);
        m && y.finished.then(() => {
            r.style.display = m
        }), g(x, "::before"), g(C, "::after")
    }
    var Ne = (r, n, ...o) => {
        let i = o.find(l => l in n);
        !i || (r.style[o[0]] = String(n[i][1]), delete n[i])
    };

    function Ce(r, n, o) {
        if (o.direction === "LEFT") {
            if (n === "BOTTOM_LEFT" || n === "TOP_LEFT") return [{
                eltId: r,
                props: [{
                    key: "left",
                    from: "100%",
                    to: "0%"
                }]
            }];
            if (n === "BOTTOM_RIGHT" || n === "TOP_RIGHT") return [{
                eltId: r,
                props: [{
                    key: "translate",
                    from: "100% 0px",
                    to: "0px 0px"
                }]
            }];
            {
                let i = n === "CENTER" ? "-50%" : "0px";
                return [{
                    eltId: r,
                    props: [{
                        key: "left",
                        from: "100%",
                        to: "50%"
                    }, {
                        key: "translate",
                        from: `0px ${i}`,
                        to: `-50% ${i}`
                    }]
                }]
            }
        } else if (o.direction === "RIGHT") {
            if (n === "BOTTOM_LEFT" || n === "TOP_LEFT") return [{
                eltId: r,
                props: [{
                    key: "translate",
                    from: "-100% 0px",
                    to: "0px 0px"
                }]
            }];
            if (n === "BOTTOM_RIGHT" || n === "TOP_RIGHT") return [{
                eltId: r,
                props: [{
                    key: "right",
                    from: "100%",
                    to: "0px"
                }]
            }];
            {
                let i = n === "CENTER" ? "-50%" : "0px";
                return [{
                    eltId: r,
                    props: [{
                        key: "left",
                        from: "0px",
                        to: "50%"
                    }, {
                        key: "translate",
                        from: `-100% ${i}`,
                        to: `-50% ${i}`
                    }]
                }]
            }
        } else if (o.direction === "TOP")
            if (n === "BOTTOM_LEFT" || n === "BOTTOM_RIGHT" || n === "BOTTOM_CENTER") {
                let i = n === "BOTTOM_CENTER" ? "-50%" : "0px";
                return [{
                    eltId: r,
                    props: [{
                        key: "translate",
                        from: `${i} 100%`,
                        to: `${i} 0px`
                    }]
                }]
            } else return n === "TOP_LEFT" || n === "TOP_RIGHT" || n === "TOP_CENTER" ? [{
                eltId: r,
                props: [{
                    key: "top",
                    from: "100%",
                    to: "0px"
                }]
            }] : [{
                eltId: r,
                props: [{
                    key: "top",
                    from: "100%",
                    to: "50%"
                }, {
                    key: "translate",
                    from: "-50% 0%",
                    to: "-50% -50%"
                }]
            }];
        else if (o.direction === "BOTTOM") {
            if (n === "BOTTOM_LEFT" || n === "BOTTOM_RIGHT" || n === "BOTTOM_CENTER") return [{
                eltId: r,
                props: [{
                    key: "bottom",
                    from: "100%",
                    to: "0px"
                }]
            }];
            if (n === "TOP_LEFT" || n === "TOP_RIGHT" || n === "TOP_CENTER") {
                let i = n === "TOP_CENTER" ? "-50%" : "0px";
                return [{
                    eltId: r,
                    props: [{
                        key: "translate",
                        from: `${i} -100%`,
                        to: `${i} 0px`
                    }]
                }]
            } else return [{
                eltId: r,
                props: [{
                    key: "top",
                    from: "0px",
                    to: "50%"
                }, {
                    key: "translate",
                    from: "-50% -100%",
                    to: "-50% -50%"
                }]
            }]
        } else console.warn("Unsupported transition:", o);
        return []
    }
    var Ie = () => window.F2W_REACTIONS,
        Y = () => window.F2W_VARIABLES,
        rt = () => window.F2W_COLLECTION_MODE_BPS,
        Oe = r => {
            var n, o;
            return (o = (n = window.F2W_COLLECTION_VARS) == null ? void 0 : n[r]) != null ? o : {}
        },
        ot = (r, n) => Oe(r)[n];

    function Pe(r, n) {
        Y()[r] = n;
        let o = ue(n);
        document.body.style.setProperty(r, o);
        let i = `data${r.slice(1)}`;
        document.body.hasAttribute(i) && document.body.setAttribute(i, o), document.dispatchEvent(new CustomEvent("f2w-set-variable", {
            detail: {
                id: r,
                value: n,
                str: o
            }
        }))
    }

    function X(r, n) {
        var o;
        document.body.setAttribute(`data-${r}`, n);
        let i = (o = ot(r, n)) != null ? o : {};
        for (let [l, a] of Object.entries(i)) Pe(l, a)
    }

    function it(r, n) {
        X(r, n), _e(r, n)
    }

    function _e(r, n) {
        var o, i;
        if ((o = window.F2W_COLOR_SCHEMES) != null && o.includes(r)) localStorage?.setItem($e, n);
        else if ((i = window.F2W_LANGUAGES) != null && i.includes(r)) {
            localStorage?.setItem(ze, n);
            let l = Array.from(document.head.querySelectorAll('link[rel="alternate"]')).find(a => a.hreflang === n);
            l && history.replaceState(null, "", new URL(l.href).pathname)
        }
    }

    function N(r) {
        return typeof r == "number" ? r : typeof r == "boolean" ? r ? 1 : 0 : typeof r == "string" ? parseFloat(r) : 0
    }

    function P(r) {
        return String(r)
    }

    function w(r) {
        return typeof r == "string" ? r === "true" : !!r
    }

    function B(r, n) {
        var o, i;
        if (r === void 0) return !1;
        if (z(r)) return B(Y()[r.id]);
        if (typeof r == "object" && "expressionArguments" in r) {
            let l = r.expressionArguments.map(d => d.value).filter(d => d !== void 0).map(d => B(d, n)),
                a = (i = (o = r.expressionArguments[0]) == null ? void 0 : o.resolvedType) != null ? i : "STRING";
            switch (r.expressionFunction) {
                case "ADDITION":
                    return a === "FLOAT" ? l.map(N).reduce((d, c) => d + c) : l.map(P).reduce((d, c) => d + c);
                case "SUBTRACTION":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) - N(l[1]);
                case "DIVISION":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) / N(l[1]);
                case "MULTIPLICATION":
                    return l.map(N).reduce((d, c) => d * c);
                case "NEGATE":
                    if (l.length !== 1) throw new Error("Invalid expression");
                    return -N(l[0]);
                case "GREATER_THAN":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) > N(l[1]);
                case "GREATER_THAN_OR_EQUAL":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) >= N(l[1]);
                case "LESS_THAN":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) < N(l[1]);
                case "LESS_THAN_OR_EQUAL":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return N(l[0]) <= N(l[1]);
                case "EQUALS":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return a === "FLOAT" ? N(l[0]) === N(l[1]) : a === "BOOLEAN" ? w(l[0]) === w(l[1]) : P(l[0]) === P(l[1]);
                case "NOT_EQUAL":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return a === "FLOAT" ? N(l[0]) !== N(l[1]) : a === "BOOLEAN" ? w(l[0]) !== w(l[1]) : P(l[0]) !== P(l[1]);
                case "AND":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return w(l[0]) && w(l[1]);
                case "OR":
                    if (l.length !== 2) throw new Error("Invalid expression");
                    return w(l[0]) || w(l[1]);
                case "NOT":
                    if (l.length !== 1) throw new Error("Invalid expression");
                    return !w(l[0]);
                case "VAR_MODE_LOOKUP":
                default:
                    return console.warn(`Expression not implemented yet: ${r.expressionFunction}`), !1
            }
        } else return r
    }

    function ee(r, n, o) {
        let i = r.map(l => st(l, n, o));
        return (l, a) => {
            let d = i.map(c => c(l, a)).filter(c => !!c);
            if (d.length) return (c, p) => d.forEach(f => f(c, p))
        }
    }

    function st(r, n, o) {
        for (; r.type === "ALIAS";) r = Ie()[r.alias];
        let i = at(r, n, o);
        return l => {
            if (r.type !== "ANIMATE" && o === "drag") {
                let a = l.detail;
                if (!a.handled) return a.handled = !0, i(l)
            }
            if (!I) {
                if (r.type === "ANIMATE" && r.rootId) {
                    let a = document.getElementById(r.rootId);
                    if (a != null && a.parentElement) {
                        let d = G(i(l));
                        if (d) {
                            let c = a?.parentElement;
                            for (; c && ((c.f2w_reset || (c.f2w_reset = [])).push(d), c = c.parentElement, c?.tagName !== "BODY"););
                        }
                        return d
                    }
                }
                return i(l)
            }
        }
    }

    function at(action, bound, trigger) {
        var e, t;
        switch (action.type) {
            case "BACK":
                return () => {
                    var r;
                    return ((r = window.F2W_PREVIEW_BACK) != null ? r : history.back)()
                };
            case "JS":
                return () => eval(action.code);
            case "URL":
                return () => {
                    action.openInNewTab ? window.open(action.url, "_blank") : window.F2W_PREVIEW_NAVIGATE ? window.F2W_PREVIEW_NAVIGATE(action.url) : location.assign(action.url)
                };
            case "SET_VARIABLE":
                let {
                    variableId, variableValue
                } = action;
                if (variableId && variableValue?.value !== void 0) return () => Pe(variableId, B(variableValue.value, variableId));
                break;
            case "SET_VARIABLE_MODE":
                let {
                    variableCollectionName, variableModeName
                } = action;
                if (variableCollectionName && variableModeName) return () => it(variableCollectionName, variableModeName);
                break;
            case "CONDITIONAL":
                let blocks = action.conditionalBlocks.map(r => {
                    let n = ee(r.actions, bound, trigger),
                        {
                            condition: o
                        } = r;
                    return {
                        test: o ? () => w(B(o.value)) : () => !0,
                        run: n
                    }
                });
                return () => {
                    let r = [];
                    for (let n of blocks)
                        if (n.test()) {
                            let o = n.run();
                            o && r.push(o);
                            break
                        } if (r.length) return n => r.forEach(o => o(n))
                };
            case "KEY_CONDITION":
                let run = ee(action.actions, bound, trigger),
                    keyCode = action.keyCodes[0],
                    shiftKey = action.keyCodes.slice(1).includes(16),
                    ctrlKey = action.keyCodes.slice(1).includes(17),
                    altKey = action.keyCodes.slice(1).includes(18),
                    metaKey = action.keyCodes.slice(1).includes(91);
                return r => {
                    if (r instanceof KeyboardEvent) {
                        if (r.keyCode !== keyCode || r.ctrlKey !== ctrlKey || r.altKey !== altKey || r.metaKey !== metaKey || r.shiftKey !== shiftKey) return;
                        r.preventDefault(), r.stopPropagation(), run(r)
                    }
                };
            case "CLOSE_OVERLAY": {
                if (action.self) return r => {
                    var n, o;
                    return (o = (n = r?.target) == null ? void 0 : n.f2w_close) == null ? void 0 : o.call(n)
                };
                if (action.overlayId) {
                    let r = document.getElementById(action.overlayId);
                    if (!r) break;
                    return () => {
                        var n;
                        return (n = r.f2w_close) == null ? void 0 : n.call(r)
                    }
                }
                break
            }
            case "SCROLL_TO":
                if (!action.destinationId) break;
                let elt = document.getElementById(action.destinationId);
                if (!elt) break;
                return r => {
                    var n;
                    r?.currentTarget instanceof HTMLAnchorElement && r?.preventDefault(), elt.scrollIntoView({
                        behavior: (n = action.transition) != null && n.type ? "smooth" : "instant"
                    })
                };
            case "OVERLAY":
                if (!action.destinationId) break;
                let overlay = document.getElementById(action.destinationId);
                if (!overlay) break;
                let modal = Array(...overlay.children).find(r => r.tagName !== "TEMPLATE");
                if (!modal) break;
                let {
                    transition, overlayPositionType, overlayRelativePosition
                } = action, duration = Math.round(1e3 * ((e = transition?.duration) != null ? e : 0)), animations = [{
                    eltId: action.destinationId,
                    props: [{
                        key: "visibility",
                        from: "hidden",
                        to: "visible"
                    }, {
                        key: "opacity",
                        from: "0",
                        to: "1"
                    }]
                }];
                return overlayPositionType === "MANUAL" ? () => {
                    var r, n, o;
                    if (trigger === "hover") {
                        let d = (r = bound.f2w_mouseleave_remove) == null ? void 0 : r.call(bound);
                        if (d) {
                            let c = p => {
                                Re(p, bound) && Re(p, modal) && (d(), document.removeEventListener("mousemove", c))
                            };
                            document.addEventListener("mousemove", c)
                        }
                    }
                    let i = animations.slice(0),
                        l = R(bound.getBoundingClientRect().left + ((n = overlayRelativePosition?.x) != null ? n : 0)),
                        a = R(bound.getBoundingClientRect().top + ((o = overlayRelativePosition?.y) != null ? o : 0));
                    return modal.style.setProperty("left", l), modal.style.setProperty("top", a), transition?.type === "MOVE_IN" && (transition.direction === "LEFT" ? i.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "100%",
                            to: l
                        }]
                    }) : transition.direction === "RIGHT" ? i.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "0px",
                            to: l
                        }, {
                            key: "translate",
                            from: "-100% 0px",
                            to: "0px 0px"
                        }]
                    }) : transition.direction === "TOP" ? i.push({
                        eltId: modal.id,
                        props: [{
                            key: "top",
                            from: "100%",
                            to: a
                        }]
                    }) : transition.direction === "BOTTOM" && i.push({
                        eltId: modal.id,
                        props: [{
                            key: "top",
                            from: "0px",
                            to: a
                        }, {
                            key: "translate",
                            from: "0px -100%",
                            to: "0px 0px"
                        }]
                    })), J(i, transition?.easing, duration, bound, trigger, `${trigger}(manual_overlay)`, overlay)()
                } : (transition?.type === "MOVE_IN" ? animations.push(...Ce(modal.id, overlayPositionType, transition)) : transition != null && transition.type && console.warn("Unsupported transition:", transition), J(animations, transition?.easing, duration, bound, trigger, `${trigger}(overlay)`, overlay));
            case "ANIMATE": {
                let {
                    animations: r,
                    transition: n,
                    rootId: o,
                    reset: i
                } = action, l = Math.round(1e3 * ((t = n?.duration) != null ? t : 0)), a = J(r, n?.easing, l, bound, trigger, i ? `${trigger}(+reset)` : trigger);
                return i && o ? (d, c) => {
                    let p = document.getElementById(o);
                    if (p) {
                        let {
                            f2w_reset: f
                        } = p;
                        f != null && f.length && (delete p.f2w_reset, f.reverse().forEach(h => h(void 0, !0)))
                    }
                    return a(d, c)
                } : a
            }
            case "UPDATE_MEDIA_RUNTIME": {
                if (!action.destinationId) break;
                let r = document.getElementById(action.destinationId);
                if (!r) break;
                switch (action.mediaAction) {
                    case "MUTE":
                        return pe(r);
                    case "UNMUTE":
                        return fe(r);
                    case "TOGGLE_MUTE_UNMUTE":
                        return de(r);
                    case "PLAY":
                        return me(r);
                    case "PAUSE":
                        return ge(r);
                    case "TOGGLE_PLAY_PAUSE":
                        return ye(r);
                    case "SKIP_BACKWARD":
                        return be(r, action.amountToSkip);
                    case "SKIP_FORWARD":
                        return xe(r, action.amountToSkip);
                    case "SKIP_TO":
                        return Ee(r, action.newTimestamp)
                }
            }
            default:
                return () => console.warn("Action not implemented yet: " + action.type)
        }
        return () => {}
    }
    var ve = 9999;

    function J(r, n = "linear", o, i, l, a, d) {
        return c => {
            let p = r;
            d && (document.body.parentElement.style.overflow = "hidden", p = [{
                eltId: d.id,
                props: [{
                    key: "z-index",
                    from: 0,
                    to: ve++
                }]
            }, ...p]);
            let f = F(p, n, o, i, l, a, c),
                h = G((A, E) => {
                    d && (ve--, document.body.parentElement.style.overflow = ""), F(f, n, E ? 0 : o, i, l, `${a}(revert)`)
                });
            return d && (d.f2w_close = h), h
        }
    }
    var Ae = new Map;

    function F(r, n, o, i, l, a, d) {
        var c, p, f;
        let h = [],
            A = new Set;
        if (l === "drag") return ut(r, n, o, i, d.detail), [];
        for (let {
                eltId: E,
                altId: u,
                props: x,
                reactions: C
            }
            of r) {
            let m = document.getElementById(E);
            if (!m) {
                let v = Ae.get(E);
                v && (m = document.getElementById(v))
            }
            if (!m) {
                $(`Can't find element for id: ${E}`);
                continue
            }
            if (u) {
                let v = document.getElementById(u);
                if (!v) {
                    let s = document.getElementById(W(u));
                    if (!s) {
                        $(`Can't find template for id: ${u}`);
                        continue
                    }
                    v = ((c = s.content) == null ? void 0 : c.cloneNode(!0)).querySelector("*")
                }
                let {
                    f2w_mouseup: g
                } = m, y = (p = m.f2w_mouseleave_remove) == null ? void 0 : p.call(m);
                if (y && De(v, y), g && v.addEventListener("mouseup", g), (y || g) && Fe(v), Be(v, !0, o), o) m.insertAdjacentElement("afterend", v), K(m, [{
                    key: "display",
                    from: getComputedStyle(m).display,
                    to: "none"
                }], n, o, A), K(v, [{
                    key: "opacity",
                    from: 0,
                    to: "revert-layer"
                }, {
                    key: "display",
                    from: "none",
                    to: "revert-layer"
                }], n, o, A);
                else {
                    m.parentElement.replaceChild(v, m);
                    let s = document.getElementById(W(E));
                    s || (s = document.createElement("template"), s.id = W(E), s.innerHTML = m.outerHTML, v.insertAdjacentElement("afterend", s)), Ae.set(E, v.id)
                }
                h.push({
                    eltId: v.id,
                    altId: m.id
                }), isNaN(+getComputedStyle(v).getPropertyValue("--f2w-order")) || A.add(v.parentElement)
            } else {
                let v = (x || []).map(y => {
                    let s = Me(m, y.key, y.from),
                        b = Me(m, y.key, y.to);
                    return {
                        key: y.key,
                        pseudo: y.pseudo,
                        from: s,
                        to: b
                    }
                }).filter(y => y.from !== y.to);
                K(m, v, n, o, A), C && (l !== "hover" && ((f = m.f2w_mouseleave_remove) == null || f.call(m)), C.forEach(y => ke(m, y.type, y.to, o)));
                let g = {
                    eltId: E,
                    props: v.map(y => {
                        let s = {
                            key: y.key,
                            from: y.to,
                            to: y.from
                        };
                        return y.pseudo && (s.pseudo = y.pseudo), s
                    })
                };
                C && (g.reactions = C.map(y => ({
                    type: y.type,
                    from: y.to,
                    to: y.from
                }))), h.push(g)
            }
        }
        for (let E of A) {
            let u = Array.from(E.children).map((C, m) => ({
                    it: C,
                    i: m
                })),
                x = !1;
            u.sort((C, m) => {
                let v = +(getComputedStyle(C.it).getPropertyValue("--f2w-order") || "99999"),
                    g = +(getComputedStyle(m.it).getPropertyValue("--f2w-order") || "99999");
                return v - g
            }).forEach((C, m) => {
                x ? E.appendChild(C.it) : x = m !== C.i
            })
        }
        return h
    }

    function Fe(r) {
        let n = r;
        for (; n;) n.classList.remove("pointer-events-none"), n = n.parentElement
    }

    function ut(r, n, o, i, l) {
        if (l.handled) return;
        let a = i.getBoundingClientRect(),
            d = F(r.filter(u => u.props).map(({
                eltId: u,
                props: x
            }) => ({
                eltId: u,
                props: x
            })), "linear", 0, i, "click", "drag_start(tmp)"),
            c = i.getBoundingClientRect(),
            p = c.left - a.left,
            f = c.top - a.top,
            h = Math.sqrt(p * p + f * f);
        F(d, "linear", 0, i, "click", "drag_start(tmp undo)");
        let {
            x: A,
            y: E
        } = te(l.start, l.end);
        if (A > 0 && p > 0 || A < 0 && p < 0 || p === 0 && (E > 0 && f > 0 || E < 0 && f < 0)) {
            l.handled = !0;
            let u = r.map(m => {
                    var v;
                    return S(M({}, m), {
                        swapped: !1,
                        props: (v = m.props) == null ? void 0 : v.map(g => S(M({}, g), {
                            curr: g.from
                        }))
                    })
                }),
                x = m => {
                    let {
                        x: v,
                        y: g
                    } = te(m.start, m.end), y = (v * p + g * f) / h;
                    return Math.max(0, Math.min(100, 100 * y / h))
                },
                C = m => {
                    m.end.preventDefault(), m.end.stopPropagation();
                    let v = x(m);
                    F(k(u.map(g => {
                        let y = g,
                            {
                                reactions: s
                            } = y,
                            b = ie(y, ["reactions"]);
                        if (g.props) return S(M({}, b), {
                            props: g.props.map(T => {
                                let We = ft(T, v),
                                    je = T.curr;
                                return T.curr = We, S(M({}, T), {
                                    from: je,
                                    to: We
                                })
                            })
                        });
                        if (g.altId) {
                            if (v < 50 && g.swapped) return g.swapped = !1, {
                                altId: g.eltId,
                                eltId: g.altId
                            };
                            if (v >= 50 && !g.swapped) return g.swapped = !0, b
                        }
                    })), "linear", 0, i, "click", "dragging")
                };
            C(l), i.f2w_drag_listener = m => {
                if (C(m), m.finished) {
                    let v = x(m);
                    F(k(u.map(g => {
                        if (g.props) {
                            let y = v < 50 ? void 0 : g.reactions;
                            return {
                                eltId: g.eltId,
                                props: g.props.map(s => S(M({}, s), {
                                    from: s.curr,
                                    to: v < 50 ? s.from : s.to
                                })),
                                reactions: y
                            }
                        }
                        if (g.altId) {
                            if (v < 50 && g.swapped) return g.swapped = !1, {
                                altId: g.eltId,
                                eltId: g.altId
                            };
                            if (v >= 50 && !g.swapped) return g.swapped = !0, g
                        }
                    })), n, o, i, "click", "drag_end")
                }
            }
        }
    }

    function Me(r, n, o) {
        return o !== "$current" ? o : getComputedStyle(r).getPropertyValue(n)
    }

    function Be(r, n = !1, o = 0) {
        for (let i of le)
            for (let l of lt(r, `[data-reaction-${i}]`, n)) ke(l, i, l.getAttribute(`data-reaction-${i}`), o)
    }

    function lt(r, n, o = !1) {
        let i = [...r.querySelectorAll(n)];
        return o && r.matches(n) && i.unshift(r), i
    }

    function ke(r, n, o = "", i = 0) {
        var l;
        if (!o && n !== "hover") {
            dt(r, n);
            return
        }
        let a = 0;
        if (o[0] === "T") {
            let f = o.indexOf("ms");
            a = parseFloat(o.slice(1, f)) || 0, o = o.slice(f + 3)
        }
        let d = Ie(),
            c = k(o.split(",").map(f => d[f])),
            p = ee(c, r, n);
        if (n === "timeout") {
            ct(r, () => p(), a + i);
            return
        }
        if (Fe(r), n === "press") {
            let f, h = () => {
                f?.(), f = void 0
            };
            r.f2w_mouseup = h, j(r, "mousedown", A => {
                f?.(), f = p(A)
            }, n, O(r, "mouseup", h))
        } else if (n === "drag") j(r, "dragging", f => {
            p(f)
        }, n);
        else if (n === "hover") {
            let f, h = C => {
                    f || (f = G(p(C)))
                },
                A = (l = r.f2w_mouseleave_remove) == null ? void 0 : l.call(r),
                E = () => {
                    f?.(), f = void 0, A?.()
                },
                u = setTimeout(() => {
                    r.matches(":hover") && h()
                }, i),
                x = De(r, E, u);
            j(r, "mouseenter", h, n, x)
        } else n === "keydown" && !r.getAttribute("tabindex") && r.setAttribute("tabindex", "-1"), n === "appear" && mt.observe(r), j(r, n, f => {
            n !== "keydown" && f.stopPropagation(), a ? setTimeout(() => p(f), a) : p(f)
        }, n)
    }

    function De(r, n, o = 0) {
        let i = O(r, "mouseleave", n),
            l = () => (i(), clearTimeout(o), r.f2w_mouseleave === n && delete r.f2w_mouseleave, r.f2w_mouseleave_remove === l && delete r.f2w_mouseleave_remove, n);
        return r.f2w_mouseleave = n, r.f2w_mouseleave_remove = l
    }

    function Re({
        clientX: r,
        clientY: n
    }, o) {
        let {
            top: i,
            left: l,
            right: a,
            bottom: d
        } = o.getBoundingClientRect();
        return r > a + 2 || r < l - 2 || n > d + 2 || n < i - 2
    }

    function He(r) {
        return `f2w_cleanup_${r}`
    }

    function ct(r, n, o) {
        var i;
        let l = setTimeout(n, o);
        (i = r.f2w_cleanup_timeout) == null || i.call(r), r.f2w_cleanup_timeout = () => {
            delete r.f2w_cleanup_timeout, clearTimeout(l)
        }
    }

    function dt(r, n) {
        var o;
        let i = He(n);
        (o = r[i]) == null || o.call(r)
    }

    function j(r, n, o, i, ...l) {
        var a;
        let d = [...l, O(r, n, o)],
            c = He(i);
        (a = r[c]) == null || a.call(r), r[c] = () => {
            delete r[c], d.forEach(p => p())
        }
    }

    function O(r, n, o, i) {
        let l = a => {
            !r.isConnected || o(a)
        };
        return r.addEventListener(n, l, i), () => {
            r.removeEventListener(n, l, i)
        }
    }
    var $e = "f2w-color-scheme",
        ze = "f2w-lang";
    if (window.F2W_THEME_SWITCH = r => {
            var n;
            return (n = window.F2W_COLOR_SCHEMES) == null ? void 0 : n.forEach(o => X(o, r))
        }, window.F2W_COLOR_SCHEMES) {
        let r = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            n = localStorage == null ? void 0 : localStorage.getItem($e);
        _("body", () => {
            var o, i;
            let l = document.body.getAttribute("data-preview-theme"),
                a = (o = l ?? n) != null ? o : r;
            (i = window.F2W_THEME_SWITCH) == null || i.call(window, a)
        })
    }
    if (window.F2W_LANGUAGES) {
        let r = localStorage == null ? void 0 : localStorage.getItem(ze);
        _("body", () => {
            var n, o, i;
            let l = Array.from(document.head.querySelectorAll('link[rel="alternate"]'));
            l.length === 0 || l.some(d => d.getAttribute("hreflang") === "x-default" && d.getAttribute("href") === window.location.href) || (r = document.documentElement.lang);
            let a = (o = (n = document.head.querySelector('link[rel="canonical"]')) == null ? void 0 : n.href) == null ? void 0 : o.endsWith("/404/");
            (i = window.F2W_LANGUAGES) == null || i.forEach(d => {
                var c;
                let p = Object.fromEntries(Object.entries(Oe(d)).map(([h]) => [h.toLowerCase(), h])),
                    f = [...navigator.languages];
                r && f.unshift(r);
                for (let h of f) {
                    h = h.toLowerCase();
                    let A = h.split("-")[0],
                        E = (c = p[h]) != null ? c : p[A];
                    if (E) {
                        X(d, E), a || _e(d, E);
                        break
                    }
                }
            })
        })
    }
    var we = {},
        pt = Object.fromEntries(Object.entries(rt()).map(([r, n]) => [r, Object.entries(n).map(([o, {
            minWidth: i
        }]) => ({
            name: o,
            minWidth: i
        }))]));

    function Le() {
        var r;
        let n = ((r = window.visualViewport) == null ? void 0 : r.width) || window.innerWidth;
        for (let [o, i] of Object.entries(pt)) {
            let l = [...i],
                a = l.splice(0, 1)[0].name;
            for (let {
                    name: d,
                    minWidth: c
                }
                of l) n >= c && (a = d);
            a !== we[o] && (X(o, a), we[o] = a)
        }
    }
    var I = !1;
    _("body", () => {
        let r, n = !1;
        O(document, "mousedown", o => {
            r = o, I = !1
        }), O(document, "mousemove", o => {
            var i, l, a;
            if (r && te(r, o).dist > 2) {
                let d = {
                    start: r,
                    end: o
                };
                I ? (a = (l = r.target) == null ? void 0 : l.f2w_drag_listener) == null || a.call(l, d) : ((i = r.target) == null || i.dispatchEvent(new CustomEvent("dragging", {
                    detail: d
                })), I = !0, n = !0)
            }
        }), O(document, "mouseup", o => {
            var i, l;
            r && I && ((l = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || l.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, I = !1
        }), O(document, "mouseup", o => {
            var i, l;
            r && I && ((l = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || l.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, I = !1
        }), O(document, "click", o => {
            n && (n = !1, o.preventDefault(), o.stopPropagation())
        }, {
            capture: !0
        }), Le(), window.addEventListener("resize", Le)
    }), addEventListener("DOMContentLoaded", () => Be(document)), addEventListener("DOMContentLoaded", () => {
        if ("mediumZoom" in window) {
            let r = mediumZoom("[data-zoomable]");
            r.on("open", n => {
                let o = getComputedStyle(n.target).objectFit,
                    i = n.detail.zoom.getZoomedImage();
                o && i && (i.style.objectFit = o)
            }), r.on("closed", n => {
                let o = n.detail.zoom.getZoomedImage();
                o.style.objectFit = ""
            })
        }
    });

    function Se(r) {
        return r.endsWith("px") || r.endsWith("%") || r.startsWith("calc")
    }

    function Ve(r) {
        return r.startsWith("calc") ? r.slice(4) : r
    }

    function ft({
        from: r,
        to: n
    }, o) {
        if (r === n) return n;
        if (typeof r == "number" && typeof n == "number") return r + (n - r) * (o / 100);
        if (typeof r == "string" && typeof n == "string") {
            if (r === "none" || n === "none" || r === "auto" || n === "auto") return o < 50 ? r : n;
            if (r.endsWith("px") && n.endsWith("px")) {
                let i = parseFloat(r),
                    l = parseFloat(n);
                return R(i + (l - i) * (o / 100))
            }
            if (r.endsWith("%") && n.endsWith("%")) {
                let i = parseFloat(r),
                    l = parseFloat(n);
                return Z(i + (l - i) * (o / 100))
            }
            if (Se(r) && Se(n)) {
                let i = Ve(r),
                    l = Ve(n);
                return `calc(${i} + (${l} - ${i}) * ${o/100})`
            }
            if (r.startsWith("rgb") && n.startsWith("rgb")) {
                let i = r.match(/\d+/g).map(Number),
                    l = n.match(/\d+/g).map(Number);
                return `rgb(${i.map((a,d)=>a+(l[d]-a)*(o/100)).join(",")})`
            }
        }
        return o < 50 ? r : n
    }

    function te(r, n) {
        let o = n.clientX - r.clientX,
            i = n.clientY - r.clientY;
        return {
            x: o,
            y: i,
            dist: Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
        }
    }
    _("[data-bound-characters]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-characters"),
                i = P(B(Y()[o]));
            i !== r.textContent && (r.textContent = i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    }), _("[data-bound-visible]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-visible"),
                i = P(B(Y()[o]));
            i !== void 0 && r.setAttribute("data-visible", i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    });
    var mt = new IntersectionObserver((r, n) => {
        r.forEach(o => {
            o.isIntersecting && (n.unobserve(o.target), o.target.dispatchEvent(new CustomEvent("appear")))
        })
    }, {
        threshold: .1
    });
    addEventListener("load", () => {
        let r = window.location.hash.slice(1),
            n = new RegExp(r + "(_\\d+)?$");
        for (let o of document.querySelectorAll(`[id^="${r}"]`))
            if (n.test(o.id) && o.getBoundingClientRect().height > 0) return o.scrollIntoView()
    })
})();


    "use strict";
(() => {
    var ot = Object.defineProperty,
        it = Object.defineProperties,
        st = Object.getOwnPropertyDescriptors,
        z = Object.getOwnPropertySymbols,
        pe = Object.prototype.hasOwnProperty,
        fe = Object.prototype.propertyIsEnumerable,
        de = (r, n, o) => n in r ? ot(r, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : r[n] = o,
        w = (r, n) => {
            for (var o in n || (n = {})) pe.call(n, o) && de(r, o, n[o]);
            if (z)
                for (var o of z(n)) fe.call(n, o) && de(r, o, n[o]);
            return r
        },
        V = (r, n) => it(r, st(n)),
        me = (r, n) => {
            var o = {};
            for (var i in r) pe.call(r, i) && n.indexOf(i) < 0 && (o[i] = r[i]);
            if (r != null && z)
                for (var i of z(r)) n.indexOf(i) < 0 && fe.call(r, i) && (o[i] = r[i]);
            return o
        },
        J = (r, n, o) => new Promise((i, a) => {
            var l = p => {
                    try {
                        d(o.next(p))
                    } catch (f) {
                        a(f)
                    }
                },
                s = p => {
                    try {
                        d(o.throw(p))
                    } catch (f) {
                        a(f)
                    }
                },
                d = p => p.done ? i(p.value) : Promise.resolve(p.value).then(l, s);
            d((o = o.apply(r, n)).next())
        });

    function P(r, n) {
        return Math.round(r * n) / n
    }

    function ee(r, n, o, i) {
        let a = (r + (i || "")).toString().includes("%");
        if (typeof r == "string" ? [r, n, o, i] = r.match(/(0?\.?\d+)%?\b/g).map(l => Number(l)) : i !== void 0 && (i = Number.parseFloat(i)), typeof r != "number" || typeof n != "number" || typeof o != "number" || r > 255 || n > 255 || o > 255) throw new TypeError("Expected three numbers below 256");
        if (typeof i == "number") {
            if (!a && i >= 0 && i <= 1) i = Math.round(255 * i);
            else if (a && i >= 0 && i <= 100) i = Math.round(255 * i / 100);
            else throw new TypeError(`Expected alpha value (${i}) as a fraction or percentage`);
            i = (i | 256).toString(16).slice(1)
        } else i = "";
        return (o | n << 8 | r << 16 | 1 << 24).toString(16).slice(1) + i
    }

    function F(r) {
        return r.filter(ge)
    }

    function ge(r) {
        return r != null
    }

    function W(r) {
        console.warn(r)
    }

    function G(r) {
        return typeof r == "object" && r.type === "VARIABLE_ALIAS"
    }
    var S = class {
            constructor(r) {
                this.def = r
            }
            addDefault(r) {
                if (this.def) {
                    if (this.def.properties) {
                        let {
                            properties: n,
                            ...o
                        } = r;
                        Object.assign(this.def.properties, n), r = o
                    }
                    Object.assign(this.def, r)
                } else this.def = {
                    ...r
                }
            }
            resetDefault() {
                this.def = void 0
            }
            transformOptions(r) {
                if (!r) return;
                let {
                    country: n,
                    userAgent: o
                } = r, i = {};
                return n && (i.co = n), o && (i.ua = o), i
            }
            async feature_test(r, n) {
                if ("feature" in n) {
                    console.error("`feature` is a reserved property for feature_test tracking.");
                    return
                }
                return this.track("feature-test", {
                    properties: {
                        feature: r,
                        ...n
                    }
                })
            }
            async exception(r, n, o) {
                process.env.FIREBASE_CONFIG && console.error(`Analytics.exception(): ${r}`, n, o);
                let i = {
                    name: r
                };
                return o && (i.details = typeof o == "string" ? o : JSON.stringify(o)), this.track("exception", {
                    error: n,
                    properties: i
                })
            }
            catcher(r, n) {
                return o => {
                    this.exception(r, o, n)
                }
            }
            unhandled(r, n) {
                try {
                    let o = n();
                    return o && typeof o == "object" && "catch" in o ? o.catch(this.catcher(r)) : o
                } catch (o) {
                    this.exception(r, o)
                }
            }
            async track(r, n = {}, o) {
                let i = this.def?.properties ? Object.assign(n.properties || {}, this.def.properties) : n.properties || {};
                if (n.error) {
                    let s = n.error;
                    i.error_message = s.message || String(s), i.error_stack = ye(s), delete n.error
                }
                let a = {
                    event: r,
                    ...this.def,
                    ...n,
                    version: "2ce54193e8e48923f850",
                    properties: i,
                    options: this.transformOptions(o)
                };
                if (!a.product) {
                    console.error("Analytics.track(): `product` property is missing.");
                    return
                }
                let l = async (s, d) => {
                    try {
                        return await fetch(`${s}/pa`, {
                            method: "POST",
                            body: JSON.stringify(a)
                        }), !0
                    } catch (p) {
                        d && console.error(`Analytics.track(): Unexpected error on event ${r}.`, p)
                    }
                    return !1
                };
                if (S.serviceUrl) await l(S.serviceUrl, !0);
                else {
                    let s = [...S.SHARED_SERVICE_URLS];
                    for (; s.length;) {
                        let d = s.shift();
                        if (await l(d, !s.length)) {
                            S.serviceUrl = d;
                            return
                        }
                    }
                    S.serviceUrl || (S.serviceUrl = S.SHARED_SERVICE_URLS[0])
                }
            }
        },
        U = S;
    U.SHARED_SERVICE_URLS = ["https://api.divriots.com", "https://api-eu.divriots.com"];
    var te = class extends U {
            constructor() {
                super({}), this.isInitialized = !1
            }
            initialize(r) {
                this.addDefault(r), this.isInitialized = !0
            }
        },
        ne = new te,
        ye = r => {
            if (r.stack) {
                let n = r.stack;
                return r.cause && (n += `
Caused by ${ye(r.cause)}`), n
            }
            return ""
        },
        H = {},
        Ee = 0;

    function re(r, n) {
        let o = `${Ee}`;
        return Ee += 1, H[o] = {
                handler: n,
                name: r
            },
            function() {
                delete H[o]
            }
    }

    function oe(r, n) {
        let o = !1,
            i = re(r, function(...a) {
                o !== !0 && (o = !0, i(), n(...a))
            });
        return i
    }

    function xe(r, n) {
        for (let o in H) H[o].name === r && H[o].handler.apply(null, n)
    }
    typeof window > "u" ? figma.ui.onmessage = function([r, ...n]) {
        xe(r, n)
    } : window.addEventListener("message", function(r) {
        if (typeof r.data.pluginMessage > "u") return;
        let [n, ...o] = r.data.pluginMessage;
        xe(n, o)
    });
    var Te, ut = typeof window > "u" ? function(r, ...n) {
        figma.ui.postMessage([r, ...n])
    } : function(r, ...n) {
        Te ? window.parent.postMessage({
            pluginMessage: [r, ...n],
            pluginId: Te
        }, "https://www.figma.com") : window.parent.postMessage({
            pluginMessage: [r, ...n]
        }, "*")
    };

    function he(r, ...n) {
        ut(r, ...n)
    }
    var ct = 0;

    function lt(r, ...n) {
        let o = ct++;
        return new Promise((i, a) => {
            oe(`${String(r)}-response-${o}`, l => {
                if ("error" in l) {
                    let {
                        message: s,
                        stack: d,
                        name: p
                    } = l.error, f = new Error(s);
                    p && (f.name = p), f.cause = new ie(s, d), a(f)
                } else i(l.result)
            }), he(String(r), [o, ...n])
        })
    }

    function be() {
        return (r, ...n) => lt(r, ...n)
    }
    var ie = class extends Error {
            constructor(r, n) {
                super(r), this.stack = n
            }
        },
        vn = be();

    function pt(r) {
        if ("a" in r) {
            let o = P(r.a, 100);
            if (o !== 1) return `rgba(${r.r},${r.g},${r.b},${o})`
        }
        let n = ee(r.r, r.g, r.b);
        return n[0] === n[1] && n[2] === n[3] && n[4] === n[5] ? `#${n[0]}${n[2]}${n[4]}` : `#${n}`
    }

    function ft(r) {
        let {
            r: n,
            g: o,
            b: i,
            a = 1
        } = r;
        return {
            r: P(n * 255, 1),
            g: P(o * 255, 1),
            b: P(i * 255, 1),
            a
        }
    }

    function R(r) {
        return `${P(r,10)}px`
    }

    function se(r) {
        return `${P(r,10)}%`
    }

    function ve(r) {
        switch (typeof r) {
            case "object":
                if (G(r)) return `var(${r.id})`;
                if ("r" in r) return pt(ft(r));
            case "string":
            case "number":
            case "boolean":
            default:
                return String(r)
        }
    }

    function K(r) {
        return "T" + r
    }
    var Ne = ["appear", "mousedown", "mouseenter", "mouseleave", "mouseup", "timeout", "click", "press", "drag", "keydown", "hover"];

    function j(r) {
        if (r) return (...n) => {
            if (!r) return;
            let o = r;
            return r = void 0, o(...n)
        }
    }
    var mt = r => r instanceof HTMLElement || r instanceof SVGElement;

    function gt(r, n) {
        if (!r.parentElement) return;
        let o = new MutationObserver(i => {
            for (let a of i.filter(l => l.type === "childList"))
                for (let l of a.removedNodes) l === r && (n?.(), o.disconnect())
        });
        o.observe(r.parentElement, {
            childList: !0
        })
    }

    function B(r, n) {
        let o = new MutationObserver(i => {
            for (let a of i.filter(l => l.type === "childList"))
                for (let l of a.addedNodes) mt(l) && l.matches(r) && gt(l, n(l))
        });
        return o.observe(document, {
            childList: !0,
            subtree: !0
        }), () => o.disconnect()
    }
    var Ce = new Set(["youtube-video", "vimeo-video", "spotify-audio", "jwplayer-video", "videojs-video", "wistia-video", "cloudflare-video", "hls-video", "shaka-video", "dash-video"]);

    function Et(r) {
        return Ce.has(r.tagName.toLowerCase()) || r.tagName === "VIDEO"
    }

    function xt(r) {
        if (r.tagName !== "IFRAME") return !1;
        let n = r.src;
        return (n.includes("youtube.com") || n.includes("youtube-nocookie.com")) && n.includes("enablejsapi=1")
    }
    var $ = class {
        constructor(r) {
            this.iframe = r, this.info = {}, this.messageListener = null, this.loaded = new Promise(n => {
                let o = () => {
                    this.iframe.removeEventListener("load", o), setTimeout(() => {
                        this.requestYoutubeListening()
                    })
                };
                this.iframe.addEventListener("load", o), this.messageListener = i => {
                    if (i.source === this.iframe.contentWindow && i.data) {
                        let a;
                        try {
                            a = JSON.parse(i.data)
                        } catch (l) {
                            console.error("YoutubeController messageListener", l);
                            return
                        }
                        a.event === "onReady" && this.iframe.removeEventListener("load", o), a.info && (Object.assign(this.info, a.info), n(!0))
                    }
                }, window.addEventListener("message", this.messageListener), this.requestYoutubeListening()
            })
        }
        sendYoutubeMessage(r) {
            return J(this, arguments, function*(n, o = []) {
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
            return r.f2w_yt_controller || (r.f2w_yt_controller = new $(r))
        }
    };

    function L(r) {
        if (Et(r)) return r;
        if (xt(r)) return $.from(r)
    }

    function Ae(r) {
        let n = L(r);
        return n ? () => (n.muted = !n.muted, () => {
            n.muted = !n.muted
        }) : () => console.warn("Video element not recognized", r)
    }

    function we(r) {
        let n = L(r);
        return n ? () => (n.muted = !0, () => {
            n.muted = !1
        }) : () => console.warn("Video element not recognized", r)
    }

    function Re(r) {
        let n = L(r);
        return n ? () => (n.muted = !1, () => {
            n.muted = !0
        }) : () => console.warn("Video element not recognized", r)
    }

    function Me(r) {
        let n = L(r);
        return n ? () => (n.play(), () => n.pause()) : () => console.warn("Video element not recognized", r)
    }

    function Se(r) {
        let n = L(r);
        return n ? () => (n.pause(), () => n.play()) : () => console.warn("Video element not recognized", r)
    }

    function Le(r) {
        let n = L(r);
        return n ? () => (n.paused ? n.play() : n.pause(), () => {
            n.paused ? n.play() : n.pause()
        }) : () => console.warn("Video element not recognized", r)
    }

    function Ve(r, n) {
        let o = L(r);
        return o ? () => {
            o.currentTime = n
        } : () => console.warn("Video element not recognized", r)
    }

    function Pe(r, n) {
        let o = L(r);
        return o ? () => (o.currentTime += n, () => {
            o.currentTime -= n
        }) : () => console.warn("Video element not recognized", r)
    }

    function Ie(r, n) {
        let o = L(r);
        return o ? () => (o.currentTime -= n, () => {
            o.currentTime += n
        }) : () => console.warn("Video element not recognized", r)
    }

    function Oe() {
        let r = navigator.userAgent;
        return r.includes("Safari") && !r.includes("Chrome")
    }

    function _e(r) {
        return r === "absolute" || r === "fixed"
    }
    var ht = Oe();

    function Y(r, n, o) {
        r.animate(w({}, n), {
            pseudoElement: o,
            iterations: 1,
            duration: 0,
            fill: "forwards"
        })
    }

    function ae(r) {
        return Object.fromEntries(r.map(n => [n.camelKey, [n.from, n.to]]))
    }

    function X(r, n, o, i, a) {
        let l = r.parentElement,
            s = getComputedStyle(r),
            d = getComputedStyle(l).display,
            p = d.endsWith("flex") || d.endsWith("grid"),
            f = _e(s.position),
            E = n.map(u => V(w({}, u), {
                camelKey: u.key.startsWith("--") ? u.key : u.key.replace(/-([a-z])/g, (T, A) => A.toUpperCase())
            })),
            C = {},
            b = E.filter(u => u.pseudo ? !1 : u.key.startsWith("--f2w-attr-") ? (C[u.key.slice(11)] = u.to, !1) : !0),
            c = ae(b),
            N = ae(E.filter(u => u.pseudo === "::before")),
            x = ae(E.filter(u => u.pseudo === "::after")),
            m;
        c.display && (c.display[0] === "none" ? r.style.display = String(c.display[1]) : c.display[1] === "none" && p && !f && (r.style.display = "none"), m = String(c.display[1]), delete c.display), ht && (Be(r, c, "overflow"), Be(r, c, "rowGap", "gridRowGap"));
        let g = +getComputedStyle(r).getPropertyValue("--f2w-order");
        if (c["--f2w-order"]) {
            let u = c["--f2w-order"][1];
            g = u === void 0 ? NaN : +u, isNaN(g) || r.style.setProperty("--f2w-order", String(g)), delete c["--f2w-order"]
        }
        if (isNaN(g) || a.add(l), c["--f2w-img-src"]) {
            let u = r.f2w_image_lazy_loader,
                T = c["--f2w-img-src"][1];
            u || (r.f2w_image_lazy_loader = u = new Image, u.decoding = "sync", u.onload = () => {
                r.decoding = "sync", r.setAttribute("src", T), delete r.f2w_image_lazy_loader
            }), u.src = T, delete c["--f2w-img-src"]
        }
        c.$innerHTML && (r.innerHTML = String(c.$innerHTML[1]), delete c.$innerHTML);
        for (let [u, T] of Object.entries(C)) r.setAttribute(u, String(T));
        if (c.left && c.right) {
            if (c.left[1] === "revert" && c.right[0] === "revert") {
                let {
                    right: u
                } = l.getBoundingClientRect(), {
                    right: T
                } = r.getBoundingClientRect(), A = R(u - T);
                Y(r, {
                    left: "revert",
                    right: A
                }), delete c.left, c.right[0] = A
            } else if (c.left[0] === "revert" && c.right[1] === "revert") {
                let {
                    left: u
                } = l.getBoundingClientRect(), {
                    left: T
                } = r.getBoundingClientRect(), A = R(T - u);
                Y(r, {
                    right: "revert",
                    left: A
                }), delete c.right, c.left[0] = A
            }
        }
        if (c.top && c.bottom) {
            if (c.top[1] === "revert" && c.bottom[0] === "revert") {
                let {
                    bottom: u
                } = l.getBoundingClientRect(), {
                    bottom: T
                } = r.getBoundingClientRect(), A = R(u - T);
                Y(r, {
                    top: "revert",
                    bottom: A
                }), delete c.top, c.bottom[0] = A
            } else if (c.top[0] === "revert" && c.bottom[1] === "revert") {
                let {
                    top: u
                } = l.getBoundingClientRect(), {
                    top: T
                } = r.getBoundingClientRect(), A = R(T - u);
                Y(r, {
                    bottom: "revert",
                    top: A
                }), delete c.bottom, c.top[0] = A
            }
        }
        c.backgroundImage && b.filter(u => u.key.startsWith("background-")).forEach(u => {
            r.style.setProperty(u.key, String(u.to)), delete c[u.camelKey]
        });
        for (let [u, T] of [
                ["before", N],
                ["after", x]
            ]) T.display && (T.display[1] === "none" ? (r.classList.remove(u + "-visible"), r.classList.add(u + "-hidden")) : (r.classList.remove(u + "-hidden"), r.classList.add(u + "-visible")));
        let y = (u, T, A = !1) => {
                if (!(!A && !Object.keys(u).length)) return r.animate(w({
                    easing: o
                }, u), {
                    pseudoElement: T,
                    iterations: 1,
                    duration: i,
                    fill: "both"
                })
            },
            h = y(c, void 0, !!m);
        m && h.finished.then(() => {
            r.style.display = m
        }), y(N, "::before"), y(x, "::after")
    }
    var Be = (r, n, ...o) => {
        let i = o.find(a => a in n);
        !i || (r.style[o[0]] = String(n[i][1]), delete n[i])
    };

    function De(r, n, o) {
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
    var Ke = () => window.F2W_REACTIONS,
        Z = () => window.F2W_VARIABLES,
        Tt = () => window.F2W_COLLECTION_MODE_BPS,
        je = r => {
            var n, o;
            return (o = (n = window.F2W_COLLECTION_VARS) == null ? void 0 : n[r]) != null ? o : {}
        },
        bt = (r, n) => je(r)[n];

    function Ye(r, n) {
        Z()[r] = n;
        let o = ve(n);
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

    function Q(r, n) {
        var o;
        document.body.setAttribute(`data-${r}`, n);
        let i = (o = bt(r, n)) != null ? o : {};
        for (let [a, l] of Object.entries(i)) Ye(a, l)
    }

    function vt(r, n) {
        Q(r, n), Xe(r, n)
    }

    function Xe(r, n) {
        var o, i;
        if ((o = window.F2W_COLOR_SCHEMES) != null && o.includes(r)) localStorage?.setItem(tt, n);
        else if ((i = window.F2W_LANGUAGES) != null && i.includes(r)) {
            localStorage?.setItem(nt, n);
            let a = Array.from(document.head.querySelectorAll('link[rel="alternate"]')).find(l => l.hreflang === n);
            a && history.replaceState(null, "", new URL(a.href).pathname)
        }
    }

    function v(r) {
        return typeof r == "number" ? r : typeof r == "boolean" ? r ? 1 : 0 : typeof r == "string" ? parseFloat(r) : 0
    }

    function _(r) {
        return String(r)
    }

    function M(r) {
        return typeof r == "string" ? r === "true" : !!r
    }

    function k(r, n) {
        var o, i;
        if (r === void 0) return !1;
        if (G(r)) return k(Z()[r.id]);
        if (typeof r == "object" && "expressionArguments" in r) {
            let a = r.expressionArguments.map(s => s.value).filter(s => s !== void 0).map(s => k(s, n)),
                l = (i = (o = r.expressionArguments[0]) == null ? void 0 : o.resolvedType) != null ? i : "STRING";
            switch (r.expressionFunction) {
                case "ADDITION":
                    return l === "FLOAT" ? a.map(v).reduce((s, d) => s + d) : a.map(_).reduce((s, d) => s + d);
                case "SUBTRACTION":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) - v(a[1]);
                case "DIVISION":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) / v(a[1]);
                case "MULTIPLICATION":
                    return a.map(v).reduce((s, d) => s * d);
                case "NEGATE":
                    if (a.length !== 1) throw new Error("Invalid expression");
                    return -v(a[0]);
                case "GREATER_THAN":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) > v(a[1]);
                case "GREATER_THAN_OR_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) >= v(a[1]);
                case "LESS_THAN":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) < v(a[1]);
                case "LESS_THAN_OR_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return v(a[0]) <= v(a[1]);
                case "EQUALS":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return l === "FLOAT" ? v(a[0]) === v(a[1]) : l === "BOOLEAN" ? M(a[0]) === M(a[1]) : _(a[0]) === _(a[1]);
                case "NOT_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return l === "FLOAT" ? v(a[0]) !== v(a[1]) : l === "BOOLEAN" ? M(a[0]) !== M(a[1]) : _(a[0]) !== _(a[1]);
                case "AND":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return M(a[0]) && M(a[1]);
                case "OR":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return M(a[0]) || M(a[1]);
                case "NOT":
                    if (a.length !== 1) throw new Error("Invalid expression");
                    return !M(a[0]);
                case "VAR_MODE_LOOKUP":
                default:
                    return console.warn(`Expression not implemented yet: ${r.expressionFunction}`), !1
            }
        } else return r
    }

    function ce(r, n, o) {
        let i = r.map(a => Nt(a, n, o));
        return (a, l) => {
            let s = i.map(d => d(a, l)).filter(d => !!d);
            if (s.length) return (d, p) => s.forEach(f => f(d, p))
        }
    }

    function Nt(r, n, o) {
        for (; r.type === "ALIAS";) r = Ke()[r.alias];
        let i = Ct(r, n, o);
        return a => {
            if (r.type !== "ANIMATE" && o === "drag") {
                let l = a.detail;
                if (!l.handled) return l.handled = !0, i(a)
            }
            if (!I) {
                if (r.type === "ANIMATE" && r.rootId) {
                    let l = document.getElementById(r.rootId);
                    if (l != null && l.parentElement) {
                        let s = j(i(a));
                        if (s) {
                            let d = l?.parentElement;
                            for (; d && ((d.f2w_reset || (d.f2w_reset = [])).push(s), d = d.parentElement, d?.tagName !== "BODY"););
                        }
                        return s
                    }
                }
                return i(a)
            }
        }
    }

    function Ct(action, bound, trigger) {
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
                if (variableId && variableValue?.value !== void 0) return () => Ye(variableId, k(variableValue.value, variableId));
                break;
            case "SET_VARIABLE_MODE":
                let {
                    variableCollectionName, variableModeName
                } = action;
                if (variableCollectionName && variableModeName) return () => vt(variableCollectionName, variableModeName);
                break;
            case "CONDITIONAL":
                let blocks = action.conditionalBlocks.map(r => {
                    let n = ce(r.actions, bound, trigger),
                        {
                            condition: o
                        } = r;
                    return {
                        test: o ? () => M(k(o.value)) : () => !0,
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
                let run = ce(action.actions, bound, trigger),
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
                        let s = (r = bound.f2w_mouseleave_remove) == null ? void 0 : r.call(bound);
                        if (s) {
                            let d = p => {
                                $e(p, bound) && $e(p, modal) && (s(), document.removeEventListener("mousemove", d))
                            };
                            document.addEventListener("mousemove", d)
                        }
                    }
                    let i = animations.slice(0),
                        a = R(bound.getBoundingClientRect().left + ((n = overlayRelativePosition?.x) != null ? n : 0)),
                        l = R(bound.getBoundingClientRect().top + ((o = overlayRelativePosition?.y) != null ? o : 0));
                    return modal.style.setProperty("left", a), modal.style.setProperty("top", l), transition?.type === "MOVE_IN" && (transition.direction === "LEFT" ? i.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "100%",
                            to: a
                        }]
                    }) : transition.direction === "RIGHT" ? i.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "0px",
                            to: a
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
                            to: l
                        }]
                    }) : transition.direction === "BOTTOM" && i.push({
                        eltId: modal.id,
                        props: [{
                            key: "top",
                            from: "0px",
                            to: l
                        }, {
                            key: "translate",
                            from: "0px -100%",
                            to: "0px 0px"
                        }]
                    })), ue(i, transition?.easing, duration, bound, trigger, `${trigger}(manual_overlay)`, overlay)()
                } : (transition?.type === "MOVE_IN" ? animations.push(...De(modal.id, overlayPositionType, transition)) : transition != null && transition.type && console.warn("Unsupported transition:", transition), ue(animations, transition?.easing, duration, bound, trigger, `${trigger}(overlay)`, overlay));
            case "ANIMATE": {
                let {
                    animations: r,
                    transition: n,
                    rootId: o,
                    reset: i
                } = action, a = Math.round(1e3 * ((t = n?.duration) != null ? t : 0)), l = ue(r, n?.easing, a, bound, trigger, i ? `${trigger}(+reset)` : trigger);
                return i && o ? (s, d) => {
                    let p = document.getElementById(o);
                    if (p) {
                        let {
                            f2w_reset: f
                        } = p;
                        f != null && f.length && (delete p.f2w_reset, f.reverse().forEach(E => E(void 0, !0)))
                    }
                    return l(s, d)
                } : l
            }
            case "UPDATE_MEDIA_RUNTIME": {
                if (!action.destinationId) break;
                let r = document.getElementById(action.destinationId);
                if (!r) break;
                switch (action.mediaAction) {
                    case "MUTE":
                        return we(r);
                    case "UNMUTE":
                        return Re(r);
                    case "TOGGLE_MUTE_UNMUTE":
                        return Ae(r);
                    case "PLAY":
                        return Me(r);
                    case "PAUSE":
                        return Se(r);
                    case "TOGGLE_PLAY_PAUSE":
                        return Le(r);
                    case "SKIP_BACKWARD":
                        return Ie(r, action.amountToSkip);
                    case "SKIP_FORWARD":
                        return Pe(r, action.amountToSkip);
                    case "SKIP_TO":
                        return Ve(r, action.newTimestamp)
                }
            }
            default:
                return () => console.warn("Action not implemented yet: " + action.type)
        }
        return () => {}
    }
    var ke = 9999;

    function ue(r, n = "linear", o, i, a, l, s) {
        return d => {
            let p = r;
            s && (document.body.parentElement.style.overflow = "hidden", p = [{
                eltId: s.id,
                props: [{
                    key: "z-index",
                    from: 0,
                    to: ke++
                }]
            }, ...p]);
            let f = D(p, n, o, i, a, l, d),
                E = j((C, b) => {
                    s && (ke--, document.body.parentElement.style.overflow = ""), D(f, n, b ? 0 : o, i, a, `${l}(revert)`)
                });
            return s && (s.f2w_close = E), E
        }
    }
    var Fe = new Map;

    function D(r, n, o, i, a, l, s) {
        var d, p, f;
        let E = [],
            C = new Set;
        if (a === "drag") return At(r, n, o, i, s.detail), [];
        for (let {
                eltId: b,
                altId: c,
                props: N,
                reactions: x
            }
            of r) {
            let m = document.getElementById(b);
            if (!m) {
                let g = Fe.get(b);
                g && (m = document.getElementById(g))
            }
            if (!m) {
                W(`Can't find element for id: ${b}`);
                continue
            }
            if (c) {
                let g = document.getElementById(c);
                if (!g) {
                    let u = document.getElementById(K(c));
                    if (!u) {
                        W(`Can't find template for id: ${c}`);
                        continue
                    }
                    g = ((d = u.content) == null ? void 0 : d.cloneNode(!0)).querySelector("*")
                }
                let {
                    f2w_mouseup: y
                } = m, h = (p = m.f2w_mouseleave_remove) == null ? void 0 : p.call(m);
                if (h && Je(g, h), y && g.addEventListener("mouseup", y), (h || y) && qe(g), Ze(g, !0, o), o) m.insertAdjacentElement("afterend", g), X(m, [{
                    key: "display",
                    from: getComputedStyle(m).display,
                    to: "none"
                }], n, o, C), X(g, [{
                    key: "opacity",
                    from: 0,
                    to: "revert-layer"
                }, {
                    key: "display",
                    from: "none",
                    to: "revert-layer"
                }], n, o, C);
                else {
                    m.parentElement.replaceChild(g, m);
                    let u = document.getElementById(K(b));
                    u || (u = document.createElement("template"), u.id = K(b), u.innerHTML = m.outerHTML, g.insertAdjacentElement("afterend", u)), Fe.set(b, g.id)
                }
                E.push({
                    eltId: g.id,
                    altId: m.id
                }), isNaN(+getComputedStyle(g).getPropertyValue("--f2w-order")) || C.add(g.parentElement)
            } else {
                let g = (N || []).map(h => {
                    let u = He(m, h.key, h.from),
                        T = He(m, h.key, h.to);
                    return {
                        key: h.key,
                        pseudo: h.pseudo,
                        from: u,
                        to: T
                    }
                }).filter(h => h.from !== h.to);
                X(m, g, n, o, C), x && (a !== "hover" && ((f = m.f2w_mouseleave_remove) == null || f.call(m)), x.forEach(h => Qe(m, h.type, h.to, o)));
                let y = {
                    eltId: b,
                    props: g.map(h => {
                        let u = {
                            key: h.key,
                            from: h.to,
                            to: h.from
                        };
                        return h.pseudo && (u.pseudo = h.pseudo), u
                    })
                };
                x && (y.reactions = x.map(h => ({
                    type: h.type,
                    from: h.to,
                    to: h.from
                }))), E.push(y)
            }
        }
        for (let b of C) {
            let c = Array.from(b.children).map((x, m) => ({
                    it: x,
                    i: m
                })),
                N = !1;
            c.sort((x, m) => {
                let g = +(getComputedStyle(x.it).getPropertyValue("--f2w-order") || "99999"),
                    y = +(getComputedStyle(m.it).getPropertyValue("--f2w-order") || "99999");
                return g - y
            }).forEach((x, m) => {
                N ? b.appendChild(x.it) : N = m !== x.i
            })
        }
        return E
    }

    function qe(r) {
        let n = r;
        for (; n;) n.classList.remove("pointer-events-none"), n = n.parentElement
    }

    function At(r, n, o, i, a) {
        if (a.handled) return;
        let l = i.getBoundingClientRect(),
            s = D(r.filter(c => c.props).map(({
                eltId: c,
                props: N
            }) => ({
                eltId: c,
                props: N
            })), "linear", 0, i, "click", "drag_start(tmp)"),
            d = i.getBoundingClientRect(),
            p = d.left - l.left,
            f = d.top - l.top,
            E = Math.sqrt(p * p + f * f);
        D(s, "linear", 0, i, "click", "drag_start(tmp undo)");
        let {
            x: C,
            y: b
        } = le(a.start, a.end);
        if (C > 0 && p > 0 || C < 0 && p < 0 || p === 0 && (b > 0 && f > 0 || b < 0 && f < 0)) {
            a.handled = !0;
            let c = r.map(m => {
                    var g;
                    return V(w({}, m), {
                        swapped: !1,
                        props: (g = m.props) == null ? void 0 : g.map(y => V(w({}, y), {
                            curr: y.from
                        }))
                    })
                }),
                N = m => {
                    let {
                        x: g,
                        y
                    } = le(m.start, m.end), h = (g * p + y * f) / E;
                    return Math.max(0, Math.min(100, 100 * h / E))
                },
                x = m => {
                    m.end.preventDefault(), m.end.stopPropagation();
                    let g = N(m);
                    D(F(c.map(y => {
                        let h = y,
                            {
                                reactions: u
                            } = h,
                            T = me(h, ["reactions"]);
                        if (y.props) return V(w({}, T), {
                            props: y.props.map(A => {
                                let rt = Lt(A, g),
                                    at = A.curr;
                                return A.curr = rt, V(w({}, A), {
                                    from: at,
                                    to: rt
                                })
                            })
                        });
                        if (y.altId) {
                            if (g < 50 && y.swapped) return y.swapped = !1, {
                                altId: y.eltId,
                                eltId: y.altId
                            };
                            if (g >= 50 && !y.swapped) return y.swapped = !0, T
                        }
                    })), "linear", 0, i, "click", "dragging")
                };
            x(a), i.f2w_drag_listener = m => {
                if (x(m), m.finished) {
                    let g = N(m);
                    D(F(c.map(y => {
                        if (y.props) {
                            let h = g < 50 ? void 0 : y.reactions;
                            return {
                                eltId: y.eltId,
                                props: y.props.map(u => V(w({}, u), {
                                    from: u.curr,
                                    to: g < 50 ? u.from : u.to
                                })),
                                reactions: h
                            }
                        }
                        if (y.altId) {
                            if (g < 50 && y.swapped) return y.swapped = !1, {
                                altId: y.eltId,
                                eltId: y.altId
                            };
                            if (g >= 50 && !y.swapped) return y.swapped = !0, y
                        }
                    })), n, o, i, "click", "drag_end")
                }
            }
        }
    }

    function He(r, n, o) {
        return o !== "$current" ? o : getComputedStyle(r).getPropertyValue(n)
    }

    function Ze(r, n = !1, o = 0) {
        for (let i of Ne)
            for (let a of wt(r, `[data-reaction-${i}]`, n)) Qe(a, i, a.getAttribute(`data-reaction-${i}`), o)
    }

    function wt(r, n, o = !1) {
        let i = [...r.querySelectorAll(n)];
        return o && r.matches(n) && i.unshift(r), i
    }

    function Qe(r, n, o = "", i = 0) {
        var a;
        if (!o && n !== "hover") {
            Mt(r, n);
            return
        }
        let l = 0;
        if (o[0] === "T") {
            let f = o.indexOf("ms");
            l = parseFloat(o.slice(1, f)) || 0, o = o.slice(f + 3)
        }
        let s = Ke(),
            d = F(o.split(",").map(f => s[f])),
            p = ce(d, r, n);
        if (n === "timeout") {
            Rt(r, () => p(), l + i);
            return
        }
        if (qe(r), n === "press") {
            let f, E = () => {
                f?.(), f = void 0
            };
            r.f2w_mouseup = E, q(r, "mousedown", C => {
                f?.(), f = p(C)
            }, n, O(r, "mouseup", E))
        } else if (n === "drag") q(r, "dragging", f => {
            p(f)
        }, n);
        else if (n === "hover") {
            let f, E = x => {
                    f || (f = j(p(x)))
                },
                C = (a = r.f2w_mouseleave_remove) == null ? void 0 : a.call(r),
                b = () => {
                    f?.(), f = void 0, C?.()
                },
                c = setTimeout(() => {
                    r.matches(":hover") && E()
                }, i),
                N = Je(r, b, c);
            q(r, "mouseenter", E, n, N)
        } else n === "keydown" && !r.getAttribute("tabindex") && r.setAttribute("tabindex", "-1"), n === "appear" && Vt.observe(r), q(r, n, f => {
            n !== "keydown" && f.stopPropagation(), l ? setTimeout(() => p(f), l) : p(f)
        }, n)
    }

    function Je(r, n, o = 0) {
        let i = O(r, "mouseleave", n),
            a = () => (i(), clearTimeout(o), r.f2w_mouseleave === n && delete r.f2w_mouseleave, r.f2w_mouseleave_remove === a && delete r.f2w_mouseleave_remove, n);
        return r.f2w_mouseleave = n, r.f2w_mouseleave_remove = a
    }

    function $e({
        clientX: r,
        clientY: n
    }, o) {
        let {
            top: i,
            left: a,
            right: l,
            bottom: s
        } = o.getBoundingClientRect();
        return r > l + 2 || r < a - 2 || n > s + 2 || n < i - 2
    }

    function et(r) {
        return `f2w_cleanup_${r}`
    }

    function Rt(r, n, o) {
        var i;
        let a = setTimeout(n, o);
        (i = r.f2w_cleanup_timeout) == null || i.call(r), r.f2w_cleanup_timeout = () => {
            delete r.f2w_cleanup_timeout, clearTimeout(a)
        }
    }

    function Mt(r, n) {
        var o;
        let i = et(n);
        (o = r[i]) == null || o.call(r)
    }

    function q(r, n, o, i, ...a) {
        var l;
        let s = [...a, O(r, n, o)],
            d = et(i);
        (l = r[d]) == null || l.call(r), r[d] = () => {
            delete r[d], s.forEach(p => p())
        }
    }

    function O(r, n, o, i) {
        let a = l => {
            !r.isConnected || o(l)
        };
        return r.addEventListener(n, a, i), () => {
            r.removeEventListener(n, a, i)
        }
    }
    var tt = "f2w-color-scheme",
        nt = "f2w-lang";
    if (window.F2W_THEME_SWITCH = r => {
            var n;
            return (n = window.F2W_COLOR_SCHEMES) == null ? void 0 : n.forEach(o => Q(o, r))
        }, window.F2W_COLOR_SCHEMES) {
        let r = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            n = localStorage == null ? void 0 : localStorage.getItem(tt);
        B("body", () => {
            var o, i;
            let a = document.body.getAttribute("data-preview-theme"),
                l = (o = a ?? n) != null ? o : r;
            (i = window.F2W_THEME_SWITCH) == null || i.call(window, l)
        })
    }
    if (window.F2W_LANGUAGES) {
        let r = localStorage == null ? void 0 : localStorage.getItem(nt);
        B("body", () => {
            var n, o, i;
            let a = Array.from(document.head.querySelectorAll('link[rel="alternate"]'));
            a.length === 0 || a.some(s => s.getAttribute("hreflang") === "x-default" && s.getAttribute("href") === window.location.href) || (r = document.documentElement.lang);
            let l = (o = (n = document.head.querySelector('link[rel="canonical"]')) == null ? void 0 : n.href) == null ? void 0 : o.endsWith("/404/");
            (i = window.F2W_LANGUAGES) == null || i.forEach(s => {
                var d;
                let p = Object.fromEntries(Object.entries(je(s)).map(([E]) => [E.toLowerCase(), E])),
                    f = [...navigator.languages];
                r && f.unshift(r);
                for (let E of f) {
                    E = E.toLowerCase();
                    let C = E.split("-")[0],
                        b = (d = p[E]) != null ? d : p[C];
                    if (b) {
                        Q(s, b), l || Xe(s, b);
                        break
                    }
                }
            })
        })
    }
    var ze = {},
        St = Object.entries(Tt()).map(([r, n]) => ({
            collectionName: r,
            breakpoints: Object.entries(n).map(([o, {
                minWidth: i
            }]) => ({
                name: o,
                minWidth: i
            })).sort(({
                minWidth: o
            }, {
                minWidth: i
            }) => o - i)
        }));

    function We() {
        var r;
        let n = ((r = window.visualViewport) == null ? void 0 : r.width) || window.innerWidth;
        for (let {
                collectionName: o,
                breakpoints: i
            }
            of St) {
            let a = [...i],
                l = a.splice(0, 1)[0].name;
            for (let {
                    name: s,
                    minWidth: d
                }
                of a) n >= d && (l = s);
            l !== ze[o] && (Q(o, l), ze[o] = l)
        }
    }
    var I = !1;
    B("body", () => {
        let r, n = !1;
        O(document, "mousedown", o => {
            r = o, I = !1
        }), O(document, "mousemove", o => {
            var i, a, l;
            if (r && le(r, o).dist > 2) {
                let s = {
                    start: r,
                    end: o
                };
                I ? (l = (a = r.target) == null ? void 0 : a.f2w_drag_listener) == null || l.call(a, s) : ((i = r.target) == null || i.dispatchEvent(new CustomEvent("dragging", {
                    detail: s
                })), I = !0, n = !0)
            }
        }), O(document, "mouseup", o => {
            var i, a;
            r && I && ((a = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || a.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, I = !1
        }), O(document, "mouseup", o => {
            var i, a;
            r && I && ((a = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || a.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, I = !1
        }), O(document, "click", o => {
            n && (n = !1, o.preventDefault(), o.stopPropagation())
        }, {
            capture: !0
        }), We(), window.addEventListener("resize", We)
    }), addEventListener("DOMContentLoaded", () => Ze(document)), addEventListener("DOMContentLoaded", () => {
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

    function Ge(r) {
        return r.endsWith("px") || r.endsWith("%") || r.startsWith("calc")
    }

    function Ue(r) {
        return r.startsWith("calc") ? r.slice(4) : r
    }

    function Lt({
        from: r,
        to: n
    }, o) {
        if (r === n) return n;
        if (typeof r == "number" && typeof n == "number") return r + (n - r) * (o / 100);
        if (typeof r == "string" && typeof n == "string") {
            if (r === "none" || n === "none" || r === "auto" || n === "auto") return o < 50 ? r : n;
            if (r.endsWith("px") && n.endsWith("px")) {
                let i = parseFloat(r),
                    a = parseFloat(n);
                return R(i + (a - i) * (o / 100))
            }
            if (r.endsWith("%") && n.endsWith("%")) {
                let i = parseFloat(r),
                    a = parseFloat(n);
                return se(i + (a - i) * (o / 100))
            }
            if (Ge(r) && Ge(n)) {
                let i = Ue(r),
                    a = Ue(n);
                return `calc(${i} + (${a} - ${i}) * ${o/100})`
            }
            if (r.startsWith("rgb") && n.startsWith("rgb")) {
                let i = r.match(/\d+/g).map(Number),
                    a = n.match(/\d+/g).map(Number);
                return `rgb(${i.map((l,s)=>l+(a[s]-l)*(o/100)).join(",")})`
            }
        }
        return o < 50 ? r : n
    }

    function le(r, n) {
        let o = n.clientX - r.clientX,
            i = n.clientY - r.clientY;
        return {
            x: o,
            y: i,
            dist: Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
        }
    }
    B("[data-bound-characters]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-characters"),
                i = _(k(Z()[o]));
            i !== r.textContent && (r.textContent = i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    }), B("[data-bound-visible]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-visible"),
                i = _(k(Z()[o]));
            i !== void 0 && r.setAttribute("data-visible", i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    });
    var Vt = new IntersectionObserver((r, n) => {
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

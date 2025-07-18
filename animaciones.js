"use strict";
(() => {
    var ct = Object.defineProperty,
        lt = Object.defineProperties,
        dt = Object.getOwnPropertyDescriptors,
        z = Object.getOwnPropertySymbols,
        ge = Object.prototype.hasOwnProperty,
        ye = Object.prototype.propertyIsEnumerable,
        me = (r, n, o) => n in r ? ct(r, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : r[n] = o,
        w = (r, n) => {
            for (var o in n || (n = {})) ge.call(n, o) && me(r, o, n[o]);
            if (z)
                for (var o of z(n)) ye.call(n, o) && me(r, o, n[o]);
            return r
        },
        M = (r, n) => lt(r, dt(n)),
        Ee = (r, n) => {
            var o = {};
            for (var i in r) ge.call(r, i) && n.indexOf(i) < 0 && (o[i] = r[i]);
            if (r != null && z)
                for (var i of z(r)) n.indexOf(i) < 0 && ye.call(r, i) && (o[i] = r[i]);
            return o
        },
        Q = (r, n, o) => new Promise((i, a) => {
            var l = f => {
                    try {
                        d(o.next(f))
                    } catch (c) {
                        a(c)
                    }
                },
                s = f => {
                    try {
                        d(o.throw(f))
                    } catch (c) {
                        a(c)
                    }
                },
                d = f => f.done ? i(f.value) : Promise.resolve(f.value).then(l, s);
            d((o = o.apply(r, n)).next())
        });

    function I(r, n) {
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

    function H(r) {
        return r.filter(xe)
    }

    function xe(r) {
        return r != null
    }

    function K(r) {
        console.warn(r)
    }

    function j(r) {
        return typeof r == "object" && r.type === "VARIABLE_ALIAS"
    }
    var L = class {
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
                    i.error_message = s.message || String(s), i.error_stack = he(s), delete n.error
                }
                let a = {
                    event: r,
                    version: "4020eed097b55cd9d6e2",
                    ...this.def,
                    ...n,
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
                    } catch (f) {
                        d && console.error(`Analytics.track(): Unexpected error on event ${r}.`, f)
                    }
                    return !1
                };
                if (L.serviceUrl) await l(L.serviceUrl, !0);
                else {
                    let s = [...L.SHARED_SERVICE_URLS];
                    for (; s.length;) {
                        let d = s.shift();
                        if (await l(d, !s.length)) {
                            L.serviceUrl = d;
                            return
                        }
                    }
                    L.serviceUrl || (L.serviceUrl = L.SHARED_SERVICE_URLS[0])
                }
            }
        },
        Y = L;
    Y.SHARED_SERVICE_URLS = ["https://api.divriots.com", "https://api-eu.divriots.com"];
    var te = class extends Y {
            constructor() {
                super({}), this.isInitialized = !1
            }
            initialize(r) {
                this.addDefault(r), this.isInitialized = !0
            }
        },
        ne = new te,
        he = r => {
            if (r.stack) {
                let n = r.stack;
                return r.cause && (n += `
Caused by ${he(r.cause)}`), n
            }
            return ""
        },
        $ = {},
        be = 0;

    function re(r, n) {
        let o = `${be}`;
        return be += 1, $[o] = {
                handler: n,
                name: r
            },
            function() {
                delete $[o]
            }
    }

    function oe(r, n) {
        let o = !1,
            i = re(r, function(...a) {
                o !== !0 && (o = !0, i(), n(...a))
            });
        return i
    }

    function Te(r, n) {
        for (let o in $) $[o].name === r && $[o].handler.apply(null, n)
    }
    typeof window > "u" ? figma.ui.onmessage = function([r, ...n]) {
        Te(r, n)
    } : window.addEventListener("message", function(r) {
        if (typeof r.data.pluginMessage > "u") return;
        let [n, ...o] = r.data.pluginMessage;
        Te(n, o)
    });
    var Ae, ft = typeof window > "u" ? function(r, ...n) {
        figma.ui.postMessage([r, ...n])
    } : function(r, ...n) {
        Ae ? window.parent.postMessage({
            pluginMessage: [r, ...n],
            pluginId: Ae
        }, "https://www.figma.com") : window.parent.postMessage({
            pluginMessage: [r, ...n]
        }, "*")
    };

    function ve(r, ...n) {
        ft(r, ...n)
    }
    var mt = 0;

    function gt(r, ...n) {
        let o = mt++;
        return new Promise((i, a) => {
            oe(`${String(r)}-response-${o}`, l => {
                if ("error" in l) {
                    let {
                        message: s,
                        stack: d,
                        name: f
                    } = l.error, c = new Error(s);
                    f && (c.name = f), c.cause = new ie(s, d), a(c)
                } else i(l.result)
            }), ve(String(r), [o, ...n])
        })
    }

    function Ne() {
        return (r, ...n) => gt(r, ...n)
    }
    var ie = class extends Error {
            constructor(r, n) {
                super(r), this.stack = n
            }
        },
        Rn = Ne();

    function Et(r) {
        if ("a" in r) {
            let o = I(r.a, 100);
            if (o !== 1) return `rgba(${r.r},${r.g},${r.b},${o})`
        }
        let n = ee(r.r, r.g, r.b);
        return n[0] === n[1] && n[2] === n[3] && n[4] === n[5] ? `#${n[0]}${n[2]}${n[4]}` : `#${n}`
    }

    function xt(r) {
        let {
            r: n,
            g: o,
            b: i,
            a = 1
        } = r;
        return {
            r: I(n * 255, 1),
            g: I(o * 255, 1),
            b: I(i * 255, 1),
            a
        }
    }

    function W(r) {
        return `${I(r,10)}px`
    }

    function se(r) {
        return `${I(r,10)}%`
    }

    function Ce(r) {
        switch (typeof r) {
            case "object":
                if (j(r)) return `var(${r.id})`;
                if ("r" in r) return Et(xt(r));
            case "string":
            case "number":
            case "boolean":
            default:
                return String(r)
        }
    }

    function we(r) {
        return "T" + r
    }
    var Me = ["submit", "appear", "mousedown", "mouseenter", "mouseleave", "mouseup", "timeout", "click", "press", "drag", "keydown", "hover"];

    function X(r) {
        if (r) return (...n) => {
            if (!r) return;
            let o = r;
            return r = void 0, o(...n)
        }
    }
    var ht = r => r instanceof HTMLElement || r instanceof SVGElement;

    function bt(r, n) {
        if (!r.parentElement) return;
        let o = new MutationObserver(i => {
            for (let a of i.filter(l => l.type === "childList"))
                for (let l of a.removedNodes) l === r && (n?.(), o.disconnect())
        });
        o.observe(r.parentElement, {
            childList: !0
        })
    }

    function P(r, n) {
        let o = new MutationObserver(i => {
            for (let a of i.filter(l => l.type === "childList"))
                for (let l of a.addedNodes) ht(l) && l.matches(r) && bt(l, n(l))
        });
        return o.observe(document, {
            childList: !0,
            subtree: !0
        }), () => o.disconnect()
    }
    var Re = new Set(["youtube-video", "vimeo-video", "spotify-audio", "jwplayer-video", "videojs-video", "wistia-video", "cloudflare-video", "hls-video", "shaka-video", "dash-video"]);

    function vt(r) {
        return Re.has(r.tagName.toLowerCase()) || r.tagName === "VIDEO"
    }

    function At(r) {
        if (r.tagName !== "IFRAME") return !1;
        let n = r.src;
        return (n.includes("youtube.com") || n.includes("youtube-nocookie.com")) && n.includes("enablejsapi=1")
    }
    var U = class {
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
            return Q(this, arguments, function*(n, o = []) {
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
            return r.f2w_yt_controller || (r.f2w_yt_controller = new U(r))
        }
    };

    function V(r) {
        if (vt(r)) return r;
        if (At(r)) return U.from(r)
    }

    function Le(r) {
        let n = V(r);
        return n ? () => (n.muted = !n.muted, () => {
            n.muted = !n.muted
        }) : () => console.warn("Video element not recognized", r)
    }

    function Ve(r) {
        let n = V(r);
        return n ? () => (n.muted = !0, () => {
            n.muted = !1
        }) : () => console.warn("Video element not recognized", r)
    }

    function Se(r) {
        let n = V(r);
        return n ? () => (n.muted = !1, () => {
            n.muted = !0
        }) : () => console.warn("Video element not recognized", r)
    }

    function Ie(r) {
        let n = V(r);
        return n ? () => (n.play(), () => n.pause()) : () => console.warn("Video element not recognized", r)
    }

    function Pe(r) {
        let n = V(r);
        return n ? () => (n.pause(), () => n.play()) : () => console.warn("Video element not recognized", r)
    }

    function Oe(r) {
        let n = V(r);
        return n ? () => (n.paused ? n.play() : n.pause(), () => {
            n.paused ? n.play() : n.pause()
        }) : () => console.warn("Video element not recognized", r)
    }

    function _e(r, n) {
        let o = V(r);
        return o ? () => {
            o.currentTime = n
        } : () => console.warn("Video element not recognized", r)
    }

    function ke(r, n) {
        let o = V(r);
        return o ? () => (o.currentTime += n, () => {
            o.currentTime -= n
        }) : () => console.warn("Video element not recognized", r)
    }

    function De(r, n) {
        let o = V(r);
        return o ? () => (o.currentTime -= n, () => {
            o.currentTime += n
        }) : () => console.warn("Video element not recognized", r)
    }

    function Be() {
        let r = navigator.userAgent;
        return r.includes("Safari") && !r.includes("Chrome")
    }

    function Fe(r) {
        return r === "absolute" || r === "fixed"
    }
    var Nt = Be();

    function Ct(r, n) {
        if (!n.length) return;
        let [o, i, a] = He(n).map($e);
        S(r, o), S(r, i, "::before"), S(r, a, "::after")
    }

    function He(r) {
        return [r.filter(n => !n.pseudo), r.filter(n => n.pseudo === "::before"), r.filter(n => n.pseudo === "::after")]
    }

    function ae(r) {
        switch (r) {
            case "width":
            case "height":
            case "top":
            case "left":
            case "right":
            case "bottom":
                return !0;
            default:
                return !1
        }
    }

    function S(r, n, o) {
        !Object.keys(n).length || r.animate(w({
            easing: "linear"
        }, n), {
            pseudoElement: o,
            iterations: 1,
            duration: 0,
            fill: "forwards"
        })
    }

    function ue(r) {
        return M(w({}, r), {
            camelKey: r.key.startsWith("--") ? r.key : r.key.replace(/-([a-z])/g, (n, o) => o.toUpperCase())
        })
    }

    function $e(r) {
        return Object.fromEntries(r.map(n => [n.camelKey, [n.from, n.to]]))
    }

    function We(r, n, o) {
        let i = !1;
        for (let a = 0; a < n.length; a++) {
            let l = n[a];
            switch (l.key) {
                case "--f2w-img-src":
                    let s = r.f2w_image_lazy_loader,
                        d = String(l.to);
                    s || (r.f2w_image_lazy_loader = s = new Image, s.decoding = "sync", s.onload = () => {
                        r.decoding = "sync", r.setAttribute("src", d), delete r.f2w_image_lazy_loader
                    }), s.src = d, n.splice(a--, 1);
                    break;
                case "$innerHTML":
                    r.innerHTML = String(l.to), n.splice(a--, 1);
                    break;
                case "background-image":
                    i = !0;
                    break;
                case "overflow":
                    Nt && (r.style.setProperty(l.key, String(l.to)), n.splice(a--, 1));
                    break
            }
            l.key.startsWith("--f2w-attr-") && (r.setAttribute(l.key.slice(11), String(l.to)), n.splice(a--, 1))
        }
        if (i) {
            let a = Object.fromEntries(n.map((l, s) => ({
                it: l,
                idx: s
            })).filter(({
                it: l
            }) => l.key.startsWith("background-")).map(({
                it: l,
                idx: s
            }) => (n.splice(s, 1), [l.camelKey, String(l.to)])));
            S(r, a)
        }
        o && Ct(r, n)
    }

    function q(r, n, o, i, a) {
        let l = r.parentElement,
            s = getComputedStyle(r),
            d = getComputedStyle(l).display,
            f = d.endsWith("flex") || d.endsWith("grid"),
            c = Fe(s.position),
            m = n.map(ue),
            [y, b, C] = He(m).map($e),
            h;
        y.display && (y.display[0] === "none" ? S(r, {
            display: String(y.display[1])
        }) : y.display[1] === "none" && f && !c && S(r, {
            display: "none"
        }), h = String(y.display[1]), delete y.display);
        let T = +getComputedStyle(r).getPropertyValue("--f2w-order");
        if (y["--f2w-order"]) {
            let u = y["--f2w-order"][1];
            T = u === void 0 ? NaN : +u, isNaN(T) || r.style.setProperty("--f2w-order", String(T)), delete y["--f2w-order"]
        }
        isNaN(T) || a.add(l);
        for (let [u, v] of [
                ["before", b],
                ["after", C]
            ]) v.display && (v.display[1] === "none" ? (r.classList.remove(u + "-visible"), r.classList.add(u + "-hidden")) : (r.classList.remove(u + "-hidden"), r.classList.add(u + "-visible")));
        let E = (u, v, A = !1) => {
                if (!(!A && !Object.keys(u).length)) return r.animate(w({
                    easing: o
                }, u), {
                    pseudoElement: v,
                    iterations: 1,
                    duration: i,
                    fill: "both"
                })
            },
            g = E(y, void 0, !!h);
        h && g.finished.then(() => {
            r.style.display = h
        }), E(b, "::before"), E(C, "::after")
    }

    function Ue(r, n, o) {
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
    var G = null,
        ce, le;
    P(".dragScroll", r => {
        let n = o => {
            document.elementFromPoint(o.clientX, o.clientY) === r && (G = r, {
                clientX: ce,
                clientY: le
            } = o, o.preventDefault())
        };
        return r.addEventListener("mousedown", n), () => r.removeEventListener("mousedown", n)
    }), window.addEventListener("mousemove", r => {
        if (!G) return;
        let n = G === document.body ? document.documentElement : G,
            [o, i] = [ce - r.clientX, le - r.clientY];
        n.scrollLeft += o, n.scrollTop += i, [ce, le] = [r.clientX, r.clientY]
    }), window.addEventListener("mouseup", () => G = null);
    var Ze = () => window.F2W_REACTIONS,
        Z = () => window.F2W_VARIABLES,
        wt = () => window.F2W_COLLECTION_MODE_BPS,
        Je = r => {
            var n, o;
            return (o = (n = window.F2W_COLLECTION_VARS) == null ? void 0 : n[r]) != null ? o : {}
        },
        Mt = (r, n) => Je(r)[n];

    function Qe(r, n) {
        Z()[r] = n;
        let o = Ce(n);
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

    function J(r, n) {
        var o;
        document.body.setAttribute(`data-${r}`, n);
        let i = (o = Mt(r, n)) != null ? o : {};
        for (let [a, l] of Object.entries(i)) Qe(a, l)
    }

    function Rt(r, n) {
        J(r, n), et(r, n)
    }

    function et(r, n) {
        var o, i;
        if ((o = window.F2W_COLOR_SCHEMES) != null && o.includes(r)) localStorage?.setItem(st, n);
        else if ((i = window.F2W_LANGUAGES) != null && i.includes(r)) {
            localStorage?.setItem(at, n);
            let a = Array.from(document.head.querySelectorAll('link[rel="alternate"]')).find(l => l.hreflang === n);
            a && history.replaceState(null, "", new URL(a.href).pathname)
        }
    }

    function x(r) {
        return typeof r == "number" ? r : typeof r == "boolean" ? r ? 1 : 0 : typeof r == "string" ? parseFloat(r) : 0
    }

    function k(r) {
        return String(r)
    }

    function R(r) {
        return typeof r == "string" ? r === "true" : !!r
    }

    function F(r, n) {
        var o, i;
        if (r === void 0) return !1;
        if (j(r)) return F(Z()[r.id]);
        if (typeof r == "object" && "expressionArguments" in r) {
            let a = r.expressionArguments.map(s => s.value).filter(s => s !== void 0).map(s => F(s, n)),
                l = (i = (o = r.expressionArguments[0]) == null ? void 0 : o.resolvedType) != null ? i : "STRING";
            switch (r.expressionFunction) {
                case "ADDITION":
                    return l === "FLOAT" ? a.map(x).reduce((s, d) => s + d) : a.map(k).reduce((s, d) => s + d);
                case "SUBTRACTION":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) - x(a[1]);
                case "DIVISION":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) / x(a[1]);
                case "MULTIPLICATION":
                    return a.map(x).reduce((s, d) => s * d);
                case "NEGATE":
                    if (a.length !== 1) throw new Error("Invalid expression");
                    return -x(a[0]);
                case "GREATER_THAN":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) > x(a[1]);
                case "GREATER_THAN_OR_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) >= x(a[1]);
                case "LESS_THAN":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) < x(a[1]);
                case "LESS_THAN_OR_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return x(a[0]) <= x(a[1]);
                case "EQUALS":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return l === "FLOAT" ? x(a[0]) === x(a[1]) : l === "BOOLEAN" ? R(a[0]) === R(a[1]) : k(a[0]) === k(a[1]);
                case "NOT_EQUAL":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return l === "FLOAT" ? x(a[0]) !== x(a[1]) : l === "BOOLEAN" ? R(a[0]) !== R(a[1]) : k(a[0]) !== k(a[1]);
                case "AND":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return R(a[0]) && R(a[1]);
                case "OR":
                    if (a.length !== 2) throw new Error("Invalid expression");
                    return R(a[0]) || R(a[1]);
                case "NOT":
                    if (a.length !== 1) throw new Error("Invalid expression");
                    return !R(a[0]);
                case "VAR_MODE_LOOKUP":
                default:
                    return console.warn(`Expression not implemented yet: ${r.expressionFunction}`), !1
            }
        } else return r
    }

    function pe(r, n, o) {
        let i = r.map(a => Lt(a, n, o));
        return (a, l) => {
            let s = i.map(d => d(a, l)).filter(d => !!d);
            if (s.length) return (d, f) => s.forEach(c => c(d, f))
        }
    }

    function Lt(r, n, o) {
        for (; r.type === "ALIAS";) r = Ze()[r.alias];
        let i = Vt(r, n, o);
        return a => {
            if (r.type !== "ANIMATE" && o === "drag") {
                let l = a.detail;
                if (!l.handled) return l.handled = !0, i(a)
            }
            if (!O) {
                if (r.type === "ANIMATE" && r.rootId) {
                    let l = document.getElementById(r.rootId);
                    if (l != null && l.parentElement) {
                        let s = X(i(a));
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

    function Vt(action, bound, trigger) {
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
                if (variableId && variableValue?.value !== void 0) return () => Qe(variableId, F(variableValue.value, variableId));
                break;
            case "SET_VARIABLE_MODE":
                let {
                    variableCollectionName, variableModeName
                } = action;
                if (variableCollectionName && variableModeName) return () => Rt(variableCollectionName, variableModeName);
                break;
            case "CONDITIONAL":
                let blocks = action.conditionalBlocks.map(r => {
                    let n = pe(r.actions, bound, trigger),
                        {
                            condition: o
                        } = r;
                    return {
                        test: o ? () => R(F(o.value)) : () => !0,
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
                let run = pe(action.actions, bound, trigger),
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
                            let d = f => {
                                Ke(f, bound) && Ke(f, modal) && (s(), document.removeEventListener("mousemove", d))
                            };
                            document.addEventListener("mousemove", d)
                        }
                    }
                    let i = animations.slice(0),
                        a = W(bound.getBoundingClientRect().left + ((n = overlayRelativePosition?.x) != null ? n : 0)),
                        l = W(bound.getBoundingClientRect().top + ((o = overlayRelativePosition?.y) != null ? o : 0));
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
                    })), de(i, transition?.easing, duration, bound, trigger, `${trigger}(manual_overlay)`, overlay)()
                } : (transition?.type === "MOVE_IN" ? animations.push(...Ue(modal.id, overlayPositionType, transition)) : transition != null && transition.type && console.warn("Unsupported transition:", transition), de(animations, transition?.easing, duration, bound, trigger, `${trigger}(overlay)`, overlay));
            case "ANIMATE": {
                let {
                    animations: r,
                    transition: n,
                    rootId: o,
                    reset: i
                } = action, a = Math.round(1e3 * ((t = n?.duration) != null ? t : 0)), l = de(r, n?.easing, a, bound, trigger, i ? `${trigger}(+reset)` : trigger);
                return i && o ? (s, d) => {
                    let f = document.getElementById(o);
                    if (f) {
                        let {
                            f2w_reset: c
                        } = f;
                        c != null && c.length && (delete f.f2w_reset, c.reverse().forEach(m => m(void 0, !0)))
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
                        return Ve(r);
                    case "UNMUTE":
                        return Se(r);
                    case "TOGGLE_MUTE_UNMUTE":
                        return Le(r);
                    case "PLAY":
                        return Ie(r);
                    case "PAUSE":
                        return Pe(r);
                    case "TOGGLE_PLAY_PAUSE":
                        return Oe(r);
                    case "SKIP_BACKWARD":
                        return De(r, action.amountToSkip);
                    case "SKIP_FORWARD":
                        return ke(r, action.amountToSkip);
                    case "SKIP_TO":
                        return _e(r, action.newTimestamp)
                }
            }
            default:
                return () => console.warn("Action not implemented yet: " + action.type)
        }
        return () => {}
    }
    var Ge = 9999;

    function de(r, n = "linear", o, i, a, l, s) {
        return d => {
            let f = r;
            s && (document.body.parentElement.style.overflow = "hidden", f = [{
                eltId: s.id,
                props: [{
                    key: "z-index",
                    from: 0,
                    to: Ge++
                }]
            }, ...f]);
            let c = B(f, n, o, i, a, l, d),
                m = X((y, b) => {
                    s && (Ge--, document.body.parentElement.style.overflow = ""), B(c, n, b ? 0 : o, i, a, `${l}(revert)`)
                });
            return s && (s.f2w_close = m), m
        }
    }

    function B(r, n, o, i, a, l, s) {
        var d, f;
        let c = [],
            m = new Set;
        if (a === "drag") return St(r, n, o, i, s.detail), [];
        let y = [],
            b = [],
            C = !1;
        for (let {
                eltId: h,
                altId: T,
                props: E,
                reactions: g
            }
            of r) {
            let u = document.getElementById(h);
            if (!u) {
                K(`Can't find element for id: ${h}`);
                continue
            }
            if (u.f2w_replaced && (u = u.f2w_replaced), T) {
                let v = document.getElementById(T);
                if (!v) {
                    let N = document.getElementById(we(T));
                    if (!N) {
                        K(`Can't find template for id: ${T}`);
                        continue
                    }
                    v = ((d = N.content) == null ? void 0 : d.cloneNode(!0)).querySelector("*")
                }
                let {
                    f2w_mouseup: A
                } = u, pt = (f = u.f2w_mouseleave_remove) == null ? void 0 : f.call(u);
                pt && ot(v, pt), A && v.addEventListener("mouseup", A), (pt || A) && tt(v), nt(v, !0, o), u.insertAdjacentElement("afterend", v), u.f2w_replaced = v, delete v.f2w_replaced;
                let p = getComputedStyle(u).display;
                y.push(() => {
                    S(u, {
                        display: "none"
                    }), S(v, {
                        display: p
                    })
                }), b.push(() => {
                    q(u, [{
                        key: "display",
                        from: p,
                        to: "none"
                    }], n, o, m), q(v, [{
                        key: "opacity",
                        from: 0,
                        to: "revert-layer"
                    }, {
                        key: "display",
                        from: "none",
                        to: "revert-layer"
                    }], n, o, m)
                }), c.push({
                    eltId: v.id,
                    altId: u.id
                }), isNaN(+getComputedStyle(v).getPropertyValue("--f2w-order")) || m.add(u.parentElement)
            } else {
                let v = (E || []).map(p => {
                        let N = ze(u, p.key, p.from),
                            ut = ze(u, p.key, p.to);
                        return {
                            key: p.key,
                            pseudo: p.pseudo,
                            from: N,
                            to: ut
                        }
                    }).filter(p => p.from !== p.to).map(ue),
                    A = v.map(p => {
                        if (ae(p.key)) {
                            if (p.to === "auto") C = !0;
                            else if (p.from === "auto") return M(w({}, p), {
                                from: getComputedStyle(u).getPropertyValue(p.key)
                            })
                        }
                        return p
                    });
                y.push(p => {
                    We(u, A, p)
                }), b.push(() => {
                    var p;
                    let N = A.map(ut => ut.to === "auto" && ae(ut.key) ? M(w({}, ut), {
                        to: getComputedStyle(u).getPropertyValue(ut.key)
                    }) : ut);
                    q(u, N, n, o, m), g && (a !== "hover" && ((p = u.f2w_mouseleave_remove) == null || p.call(u)), g.forEach(ut => rt(u, ut.type, ut.to, o)))
                });
                let pt = {
                    eltId: h,
                    props: v.map(p => {
                        let N = {
                            key: p.key,
                            from: p.to,
                            to: p.from
                        };
                        return p.pseudo && (N.pseudo = p.pseudo), N
                    })
                };
                g && (pt.reactions = g.map(p => ({
                    type: p.type,
                    from: p.to,
                    to: p.from
                }))), c.push(pt)
            }
        }
        y.forEach(h => h(C)), b.forEach(h => h());
        for (let h of m) {
            let T = Array.from(h.children).map((g, u) => ({
                    it: g,
                    i: u
                })),
                E = !1;
            T.sort((g, u) => {
                let v = +(getComputedStyle(g.it).getPropertyValue("--f2w-order") || "99999"),
                    A = +(getComputedStyle(u.it).getPropertyValue("--f2w-order") || "99999");
                return v - A
            }).forEach((g, u) => {
                E ? h.appendChild(g.it) : E = u !== g.i
            })
        }
        return c
    }

    function tt(r) {
        let n = r;
        for (; n;) n.classList.remove("pointer-events-none"), n = n.parentElement
    }

    function St(r, n, o, i, a) {
        if (a.handled) return;
        let l = i.getBoundingClientRect(),
            s = B(r.filter(C => C.props).map(({
                eltId: C,
                props: h
            }) => ({
                eltId: C,
                props: h
            })), "linear", 0, i, "click", "drag_start(tmp)"),
            d = i.getBoundingClientRect(),
            f = d.left - l.left,
            c = d.top - l.top,
            m = Math.sqrt(f * f + c * c);
        B(s, "linear", 0, i, "click", "drag_start(tmp undo)");
        let {
            x: y,
            y: b
        } = fe(a.start, a.end);
        if (y > 0 && f > 0 || y < 0 && f < 0 || f === 0 && (b > 0 && c > 0 || b < 0 && c < 0)) {
            a.handled = !0;
            let C = r.map(E => {
                    var g;
                    return M(w({}, E), {
                        swapped: !1,
                        props: (g = E.props) == null ? void 0 : g.map(u => M(w({}, u), {
                            curr: u.from
                        }))
                    })
                }),
                h = E => {
                    let {
                        x: g,
                        y: u
                    } = fe(E.start, E.end), v = (g * f + u * c) / m;
                    return Math.max(0, Math.min(100, 100 * v / m))
                },
                T = E => {
                    E.end.preventDefault(), E.end.stopPropagation();
                    let g = h(E);
                    B(H(C.map(u => {
                        let v = u,
                            {
                                reactions: A
                            } = v,
                            pt = Ee(v, ["reactions"]);
                        if (u.props) return M(w({}, pt), {
                            props: u.props.map(p => {
                                let N = kt(p, g),
                                    ut = p.curr;
                                return p.curr = N, M(w({}, p), {
                                    from: ut,
                                    to: N
                                })
                            })
                        });
                        if (u.altId) {
                            if (g < 50 && u.swapped) return u.swapped = !1, {
                                altId: u.eltId,
                                eltId: u.altId
                            };
                            if (g >= 50 && !u.swapped) return u.swapped = !0, pt
                        }
                    })), "linear", 0, i, "click", "dragging")
                };
            T(a), i.f2w_drag_listener = E => {
                if (T(E), E.finished) {
                    let g = h(E);
                    B(H(C.map(u => {
                        if (u.props) {
                            let v = g < 50 ? void 0 : u.reactions;
                            return {
                                eltId: u.eltId,
                                props: u.props.map(A => M(w({}, A), {
                                    from: A.curr,
                                    to: g < 50 ? A.from : A.to
                                })),
                                reactions: v
                            }
                        }
                        if (u.altId) {
                            if (g < 50 && u.swapped) return u.swapped = !1, {
                                altId: u.eltId,
                                eltId: u.altId
                            };
                            if (g >= 50 && !u.swapped) return u.swapped = !0, u
                        }
                    })), n, o, i, "click", "drag_end")
                }
            }
        }
    }

    function ze(r, n, o) {
        return o !== "$current" ? o : getComputedStyle(r).getPropertyValue(n)
    }

    function nt(r, n = !1, o = 0) {
        for (let i of Me)
            for (let a of It(r, `[data-reaction-${i}]`, n)) rt(a, i, a.getAttribute(`data-reaction-${i}`), o)
    }

    function It(r, n, o = !1) {
        let i = [...r.querySelectorAll(n)];
        return o && r.matches(n) && i.unshift(r), i
    }

    function rt(r, n, o = "", i = 0) {
        var a;
        if (!o && n !== "hover") {
            Ot(r, n);
            return
        }
        let l = 0;
        if (o[0] === "T") {
            let c = o.indexOf("ms");
            l = parseFloat(o.slice(1, c)) || 0, o = o.slice(c + 3)
        }
        let s = Ze(),
            d = H(o.split(",").map(c => s[c])),
            f = pe(d, r, n);
        if (n === "timeout") {
            Pt(r, () => f(), l + i);
            return
        }
        if (tt(r), n === "press") {
            let c, m = () => {
                c?.(), c = void 0
            };
            r.f2w_mouseup = m, D(r, "mousedown", y => {
                c?.(), c = f(y)
            }, n, _(r, "mouseup", m))
        } else if (n === "drag") D(r, "dragging", c => {
            f(c)
        }, n);
        else if (n === "hover") {
            let c, m = T => {
                    c || (c = X(f(T)))
                },
                y = (a = r.f2w_mouseleave_remove) == null ? void 0 : a.call(r),
                b = () => {
                    c?.(), c = void 0, y?.()
                },
                C = setTimeout(() => {
                    r.matches(":hover") && m()
                }, i),
                h = ot(r, b, C);
            D(r, "mouseenter", m, n, h)
        } else if (n === "submit") {
            let c = r.closest("form");
            c && (D(r, n, f, n), D(c, n, m => {
                m.preventDefault(), r.toggleAttribute("disabled", !0), fetch(c.action, {
                    method: c.method,
                    body: new FormData(c)
                }).then(y => y.ok && r.dispatchEvent(m)).finally(() => r.toggleAttribute("disabled", !1))
            }, n))
        } else n === "keydown" && !r.getAttribute("tabindex") && r.setAttribute("tabindex", "-1"), n === "appear" && Dt.observe(r), D(r, n, c => {
            n !== "keydown" && c.stopPropagation(), l ? setTimeout(() => f(c), l) : f(c)
        }, n)
    }

    function ot(r, n, o = 0) {
        let i = _(r, "mouseleave", n),
            a = () => (i(), clearTimeout(o), r.f2w_mouseleave === n && delete r.f2w_mouseleave, r.f2w_mouseleave_remove === a && delete r.f2w_mouseleave_remove, n);
        return r.f2w_mouseleave = n, r.f2w_mouseleave_remove = a
    }

    function Ke({
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

    function it(r) {
        return `f2w_cleanup_${r}`
    }

    function Pt(r, n, o) {
        var i;
        let a = setTimeout(n, o);
        (i = r.f2w_cleanup_timeout) == null || i.call(r), r.f2w_cleanup_timeout = () => {
            delete r.f2w_cleanup_timeout, clearTimeout(a)
        }
    }

    function Ot(r, n) {
        var o;
        let i = it(n);
        (o = r[i]) == null || o.call(r)
    }

    function D(r, n, o, i, ...a) {
        var l;
        let s = [...a, _(r, n, o)],
            d = it(i);
        (l = r[d]) == null || l.call(r), r[d] = () => {
            delete r[d], s.forEach(f => f())
        }
    }

    function _(r, n, o, i) {
        let a = l => {
            !r.isConnected || o(l)
        };
        return r.addEventListener(n, a, i), () => {
            r.removeEventListener(n, a, i)
        }
    }
    var st = "f2w-color-scheme",
        at = "f2w-lang";
    if (window.F2W_THEME_SWITCH = r => {
            var n;
            return (n = window.F2W_COLOR_SCHEMES) == null ? void 0 : n.forEach(o => J(o, r))
        }, window.F2W_COLOR_SCHEMES) {
        let r = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            n = localStorage == null ? void 0 : localStorage.getItem(st);
        P("body", () => {
            var o, i;
            let a = document.body.getAttribute("data-preview-theme"),
                l = (o = a ?? n) != null ? o : r;
            (i = window.F2W_THEME_SWITCH) == null || i.call(window, l)
        })
    }
    if (window.F2W_LANGUAGES) {
        let r = localStorage == null ? void 0 : localStorage.getItem(at);
        P("body", () => {
            var n, o, i;
            let a = Array.from(document.head.querySelectorAll('link[rel="alternate"]'));
            a.length === 0 || a.some(s => s.getAttribute("hreflang") === "x-default" && s.getAttribute("href") === window.location.href) || (r = document.documentElement.lang);
            let l = (o = (n = document.head.querySelector('link[rel="canonical"]')) == null ? void 0 : n.href) == null ? void 0 : o.endsWith("/404/");
            (i = window.F2W_LANGUAGES) == null || i.forEach(s => {
                var d;
                let f = Object.fromEntries(Object.entries(Je(s)).map(([m]) => [m.toLowerCase(), m])),
                    c = [...navigator.languages];
                r && c.unshift(r);
                for (let m of c) {
                    m = m.toLowerCase();
                    let y = m.split("-")[0],
                        b = (d = f[m]) != null ? d : f[y];
                    if (b) {
                        J(s, b), l || et(s, b);
                        break
                    }
                }
            })
        })
    }
    var je = {},
        _t = Object.entries(wt()).map(([r, n]) => ({
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

    function Ye() {
        var r;
        let n = ((r = window.visualViewport) == null ? void 0 : r.width) || window.innerWidth;
        for (let {
                collectionName: o,
                breakpoints: i
            }
            of _t) {
            let a = [...i],
                l = a.splice(0, 1)[0].name;
            for (let {
                    name: s,
                    minWidth: d
                }
                of a) n >= d && (l = s);
            l !== je[o] && (J(o, l), je[o] = l)
        }
    }
    var O = !1;
    P("body", () => {
        let r, n = !1;
        _(document, "mousedown", o => {
            r = o, O = !1
        }), _(document, "mousemove", o => {
            var i, a, l;
            if (r && fe(r, o).dist > 2) {
                let s = {
                    start: r,
                    end: o
                };
                O ? (l = (a = r.target) == null ? void 0 : a.f2w_drag_listener) == null || l.call(a, s) : ((i = r.target) == null || i.dispatchEvent(new CustomEvent("dragging", {
                    detail: s
                })), O = !0, n = !0)
            }
        }), _(document, "mouseup", o => {
            var i, a;
            r && O && ((a = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || a.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, O = !1
        }), _(document, "mouseup", o => {
            var i, a;
            r && O && ((a = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || a.call(i, {
                start: r,
                end: o,
                finished: !0
            })), r = void 0, O = !1
        }), _(document, "click", o => {
            n && (n = !1, o.preventDefault(), o.stopPropagation())
        }, {
            capture: !0
        }), Ye(), window.addEventListener("resize", Ye)
    }), addEventListener("DOMContentLoaded", () => nt(document)), addEventListener("DOMContentLoaded", () => {
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

    function Xe(r) {
        return r.endsWith("px") || r.endsWith("%") || r.startsWith("calc")
    }

    function qe(r) {
        return r.startsWith("calc") ? r.slice(4) : r
    }

    function kt({
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
                return W(i + (a - i) * (o / 100))
            }
            if (r.endsWith("%") && n.endsWith("%")) {
                let i = parseFloat(r),
                    a = parseFloat(n);
                return se(i + (a - i) * (o / 100))
            }
            if (Xe(r) && Xe(n)) {
                let i = qe(r),
                    a = qe(n);
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

    function fe(r, n) {
        let o = n.clientX - r.clientX,
            i = n.clientY - r.clientY;
        return {
            x: o,
            y: i,
            dist: Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
        }
    }
    P("[data-bound-characters]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-characters"),
                i = k(F(Z()[o]));
            i !== r.textContent && (r.textContent = i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    }), P("[data-bound-visible]", r => {
        let n = () => {
            let o = r.getAttribute("data-bound-visible"),
                i = k(F(Z()[o]));
            i !== void 0 && r.setAttribute("data-visible", i)
        };
        return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
    });
    var Dt = new IntersectionObserver((r, n) => {
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


  const container = document.querySelector('.lluvia-corazones');

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `caer ${3 + Math.random() * 5}s linear infinite`;
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    heart.style.top = '-50px';
    container.appendChild(heart);
  }


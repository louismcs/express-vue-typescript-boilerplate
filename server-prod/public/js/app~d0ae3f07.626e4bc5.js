(function (t) {
  function e(e) {
    for (var a, s, i = e[0], u = e[1], c = e[2], l = 0, p = []; l < i.length; l++) s = i[l], r[s] && p.push(r[s][0]), r[s] = 0;for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (t[a] = u[a]);f && f(e);while (p.length) p.shift()();return o.push.apply(o, c || []), n();
  }function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, s = 1; s < n.length; s++) {
        var u = n[s];0 !== r[u] && (a = !1);
      }a && (o.splice(e--, 1), t = i(i.s = n[0]));
    }return t;
  }var a = {},
      r = { "app~d0ae3f07": 0 },
      o = [];function s(t) {
    return i.p + "js/" + ({ "about~6a3582c1": "about~6a3582c1" }[t] || t) + "." + { "about~6a3582c1": "28603f61" }[t] + ".js";
  }function i(e) {
    if (a[e]) return a[e].exports;var n = a[e] = { i: e, l: !1, exports: {} };return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }i.e = function (t) {
    var e = [],
        n = r[t];if (0 !== n) if (n) e.push(n[2]);else {
      var a = new Promise(function (e, a) {
        n = r[t] = [e, a];
      });e.push(n[2] = a);var o,
          u = document.createElement("script");u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = s(t), o = function (e) {
        u.onerror = u.onload = null, clearTimeout(c);var n = r[t];if (0 !== n) {
          if (n) {
            var a = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src,
                s = new Error("Loading chunk " + t + " failed.\n(" + a + ": " + o + ")");s.type = a, s.request = o, n[1](s);
          }r[t] = void 0;
        }
      };var c = setTimeout(function () {
        o({ type: "timeout", target: u });
      }, 12e4);u.onerror = u.onload = o, document.head.appendChild(u);
    }return Promise.all(e);
  }, i.m = t, i.c = a, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
  }, i.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;if (4 & e && "object" === typeof t && t && t.__esModule) return t;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) i.d(n, a, function (e) {
      return t[e];
    }.bind(null, a));return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "/", i.oe = function (t) {
    throw console.error(t), t;
  };var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
      c = u.push.bind(u);u.push = e, u = u.slice();for (var l = 0; l < u.length; l++) e(u[l]);var f = c;o.push([0, "chunk-vendors~253ae210", "chunk-vendors~d939e436", "chunk-vendors~fdc6512a", "chunk-vendors~205977d4"]), n();
})({ 0: function (t, e, n) {
    t.exports = n("cd49");
  }, "9b19": function (t, e, n) {
    t.exports = n.p + "img/logo.63a7d78d.svg";
  }, cd49: function (t, e, n) {
    "use strict";
    n.r(e);n("cadf"), n("551c"), n("f751"), n("097d");var a = n("2b0e"),
        r = n("bb71");n("da64");a["a"].use(r["a"], { iconfont: "md" });var o = function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("v-app", [n("v-toolbar", { attrs: { app: "" } }, [n("v-toolbar-title", { staticClass: "headline text-uppercase" }, [n("span", [t._v("Vuetify")]), n("span", { staticClass: "font-weight-light" }, [t._v(t._s(t.apiData) + " DESIGN")])]), n("v-spacer"), n("v-btn", { attrs: { flat: "", href: "https://github.com/vuetifyjs/vuetify/releases/latest", target: "_blank" } }, [n("span", { staticClass: "mr-2" }, [t._v("Latest Release")])])], 1), n("v-content", [n("HelloWorld")], 1)], 1);
    },
        s = [],
        i = function () {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;return a("v-container", [a("v-layout", { attrs: { "text-xs-center": "", wrap: "" } }, [a("v-flex", { attrs: { xs12: "" } }, [a("v-img", { staticClass: "my-3", attrs: { src: n("9b19"), contain: "", height: "200" } })], 1), a("v-flex", { attrs: { "mb-4": "" } }, [a("h1", { staticClass: "display-2 font-weight-bold mb-3" }, [t._v("\n        Welcome to Vuetify\n      ")]), a("p", { staticClass: "subheading font-weight-regular" }, [t._v("\n        For help and collaboration with other Vuetify developers,\n        "), a("br"), t._v("please join our online\n        "), a("a", { attrs: { href: "https://community.vuetifyjs.com", target: "_blank" } }, [t._v("Discord Community")])])]), a("v-flex", { attrs: { "mb-5": "", xs12: "" } }, [a("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("What's next?")]), a("v-layout", { attrs: { "justify-center": "" } }, t._l(t.whatsNext, function (e, n) {
        return a("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1), a("v-flex", { attrs: { xs12: "", "mb-5": "" } }, [a("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("Important Links")]), a("v-layout", { attrs: { "justify-center": "" } }, t._l(t.importantLinks, function (e, n) {
        return a("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1), a("v-flex", { attrs: { xs12: "", "mb-5": "" } }, [a("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("Ecosystem")]), a("v-layout", { attrs: { "justify-center": "" } }, t._l(t.ecosystem, function (e, n) {
        return a("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1)], 1)], 1);
    },
        u = [],
        c = { data: function () {
        return { ecosystem: [{ text: "vuetify-loader", href: "https://github.com/vuetifyjs/vuetify-loader" }, { text: "github", href: "https://github.com/vuetifyjs/vuetify" }, { text: "awesome-vuetify", href: "https://github.com/vuetifyjs/awesome-vuetify" }], importantLinks: [{ text: "Documentation", href: "https://vuetifyjs.com" }, { text: "Chat", href: "https://community.vuetifyjs.com" }, { text: "Made with Vuetify", href: "https://madewithvuetifyjs.com" }, { text: "Twitter", href: "https://twitter.com/vuetifyjs" }, { text: "Articles", href: "https://medium.com/vuetify" }], whatsNext: [{ text: "Explore components", href: "https://vuetifyjs.com/components/api-explorer" }, { text: "Select a layout", href: "https://vuetifyjs.com/layout/pre-defined" }, { text: "Frequently Asked Questions", href: "https://vuetifyjs.com/getting-started/frequently-asked-questions" }] };
      } },
        l = c,
        f = n("2877"),
        p = n("6544"),
        h = n.n(p),
        d = n("a523"),
        v = n("0e8f"),
        m = n("adda"),
        b = n("a722"),
        y = Object(f["a"])(l, i, u, !1, null, null, null),
        g = y.exports;h()(y, { VContainer: d["a"], VFlex: v["a"], VImg: m["a"], VLayout: b["a"] });var x = n("bc3a"),
        _ = n.n(x),
        j = { name: "App", components: { HelloWorld: g }, data: function () {
        return { apiData: "" };
      }, mounted: function () {
        var t = this,
            e = "http://api.boiler.local:3000/test";_.a.get(e).then(function (e) {
          t.apiData = e.data;
        }).catch(function (t) {
          console.error(t);
        });
      } },
        w = j,
        k = n("7496"),
        C = n("8336"),
        O = n("549c"),
        V = n("9910"),
        T = n("71d9"),
        S = n("2a7f"),
        E = Object(f["a"])(w, o, s, !1, null, null, null),
        P = E.exports;h()(E, { VApp: k["a"], VBtn: C["a"], VContent: O["a"], VSpacer: V["a"], VToolbar: T["a"], VToolbarTitle: S["a"] });var W = n("8c4f"),
        A = function () {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;return a("div", { staticClass: "home" }, [a("img", { attrs: { alt: "Vue logo", src: n("cf05") } }), a("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js + TypeScript App" } })], 1);
    },
        D = [],
        L = n("d225"),
        M = n("308d"),
        q = n("6bb5"),
        H = n("4e2b"),
        $ = n("9ab4"),
        F = n("60a3"),
        I = function (t) {
      function e() {
        return Object(L["a"])(this, e), Object(M["a"])(this, Object(q["a"])(e).apply(this, arguments));
      }return Object(H["a"])(e, t), e;
    }(F["b"]);I = $["a"]([Object(F["a"])({ components: { HelloWorld: g } })], I);var N = I,
        J = N,
        B = Object(f["a"])(J, A, D, !1, null, null, null),
        G = B.exports;a["a"].use(W["a"]);var Q = new W["a"]({ mode: "history", base: "/", routes: [{ path: "/", name: "home", component: G }, { path: "/about", name: "about", component: function () {
          return n.e("about~6a3582c1").then(n.bind(null, "f820"));
        } }] });a["a"].config.productionTip = !1, new a["a"]({ router: Q, render: function (t) {
        return t(P);
      } }).$mount("#app");
  }, cf05: function (t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  } });
//# sourceMappingURL=app~d0ae3f07.626e4bc5.js.map
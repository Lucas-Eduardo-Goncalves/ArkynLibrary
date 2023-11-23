import Ke, { useState as li } from "react";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function _t(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var l = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(n, o, l.get ? l : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), n;
}
var Ye = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function si() {
  if (ut)
    return Pe;
  ut = 1;
  var e = Ke, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, i, _) {
    var r, b = {}, x = null, S = null;
    _ !== void 0 && (x = "" + _), i.key !== void 0 && (x = "" + i.key), i.ref !== void 0 && (S = i.ref);
    for (r in i)
      o.call(i, r) && !c.hasOwnProperty(r) && (b[r] = i[r]);
    if (f && f.defaultProps)
      for (r in i = f.defaultProps, i)
        b[r] === void 0 && (b[r] = i[r]);
    return { $$typeof: t, type: f, key: x, ref: S, props: b, _owner: l.current };
  }
  return Pe.Fragment = n, Pe.jsx = d, Pe.jsxs = d, Pe;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function oi() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), r = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), B = Symbol.iterator, F = "@@iterator";
    function s(N) {
      if (N === null || typeof N != "object")
        return null;
      var W = B && N[B] || N[F];
      return typeof W == "function" ? W : null;
    }
    var a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(N) {
      {
        for (var W = arguments.length, X = new Array(W > 1 ? W - 1 : 0), J = 1; J < W; J++)
          X[J - 1] = arguments[J];
        h("error", N, X);
      }
    }
    function h(N, W, X) {
      {
        var J = a.ReactDebugCurrentFrame, ae = J.getStackAddendum();
        ae !== "" && (W += "%s", X = X.concat([ae]));
        var re = X.map(function(le) {
          return String(le);
        });
        re.unshift("Warning: " + W), Function.prototype.apply.call(console[N], console, re);
      }
    }
    var g = !1, m = !1, p = !1, y = !1, C = !1, v;
    v = Symbol.for("react.module.reference");
    function w(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === o || N === c || C || N === l || N === _ || N === r || y || N === S || g || m || p || typeof N == "object" && N !== null && (N.$$typeof === x || N.$$typeof === b || N.$$typeof === d || N.$$typeof === f || N.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === v || N.getModuleId !== void 0));
    }
    function E(N, W, X) {
      var J = N.displayName;
      if (J)
        return J;
      var ae = W.displayName || W.name || "";
      return ae !== "" ? X + "(" + ae + ")" : X;
    }
    function k(N) {
      return N.displayName || "Context";
    }
    function z(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case _:
          return "Suspense";
        case r:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case f:
            var W = N;
            return k(W) + ".Consumer";
          case d:
            var X = N;
            return k(X._context) + ".Provider";
          case i:
            return E(N, N.render, "ForwardRef");
          case b:
            var J = N.displayName || null;
            return J !== null ? J : z(N.type) || "Memo";
          case x: {
            var ae = N, re = ae._payload, le = ae._init;
            try {
              return z(le(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, O = 0, P, V, T, H, I, L, D;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function M() {
      {
        if (O === 0) {
          P = console.log, V = console.info, T = console.warn, H = console.error, I = console.group, L = console.groupCollapsed, D = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: R,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        O++;
      }
    }
    function U() {
      {
        if (O--, O === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, N, {
              value: P
            }),
            info: A({}, N, {
              value: V
            }),
            warn: A({}, N, {
              value: T
            }),
            error: A({}, N, {
              value: H
            }),
            group: A({}, N, {
              value: I
            }),
            groupCollapsed: A({}, N, {
              value: L
            }),
            groupEnd: A({}, N, {
              value: D
            })
          });
        }
        O < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = a.ReactCurrentDispatcher, $;
    function Y(N, W, X) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (ae) {
            var J = ae.stack.trim().match(/\n( *(at )?)/);
            $ = J && J[1] || "";
          }
        return `
` + $ + N;
      }
    }
    var q = !1, Z;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new G();
    }
    function K(N, W) {
      if (!N || q)
        return "";
      {
        var X = Z.get(N);
        if (X !== void 0)
          return X;
      }
      var J;
      q = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = j.current, j.current = null, M();
      try {
        if (W) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Ne) {
              J = Ne;
            }
            Reflect.construct(N, [], le);
          } else {
            try {
              le.call();
            } catch (Ne) {
              J = Ne;
            }
            N.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            J = Ne;
          }
          N();
        }
      } catch (Ne) {
        if (Ne && J && typeof Ne.stack == "string") {
          for (var ie = Ne.stack.split(`
`), ye = J.stack.split(`
`), ge = ie.length - 1, pe = ye.length - 1; ge >= 1 && pe >= 0 && ie[ge] !== ye[pe]; )
            pe--;
          for (; ge >= 1 && pe >= 0; ge--, pe--)
            if (ie[ge] !== ye[pe]) {
              if (ge !== 1 || pe !== 1)
                do
                  if (ge--, pe--, pe < 0 || ie[ge] !== ye[pe]) {
                    var Ee = `
` + ie[ge].replace(" at new ", " at ");
                    return N.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", N.displayName)), typeof N == "function" && Z.set(N, Ee), Ee;
                  }
                while (ge >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        q = !1, j.current = re, U(), Error.prepareStackTrace = ae;
      }
      var Re = N ? N.displayName || N.name : "", ct = Re ? Y(Re) : "";
      return typeof N == "function" && Z.set(N, ct), ct;
    }
    function ne(N, W, X) {
      return K(N, !1);
    }
    function ee(N) {
      var W = N.prototype;
      return !!(W && W.isReactComponent);
    }
    function te(N, W, X) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return K(N, ee(N));
      if (typeof N == "string")
        return Y(N);
      switch (N) {
        case _:
          return Y("Suspense");
        case r:
          return Y("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case i:
            return ne(N.render);
          case b:
            return te(N.type, W, X);
          case x: {
            var J = N, ae = J._payload, re = J._init;
            try {
              return te(re(ae), W, X);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ce = {}, se = a.ReactDebugCurrentFrame;
    function he(N) {
      if (N) {
        var W = N._owner, X = te(N.type, N._source, W ? W.type : null);
        se.setExtraStackFrame(X);
      } else
        se.setExtraStackFrame(null);
    }
    function ce(N, W, X, J, ae) {
      {
        var re = Function.call.bind(de);
        for (var le in N)
          if (re(N, le)) {
            var ie = void 0;
            try {
              if (typeof N[le] != "function") {
                var ye = Error((J || "React class") + ": " + X + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              ie = N[le](W, le, J, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ie = ge;
            }
            ie && !(ie instanceof Error) && (he(ae), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", X, le, typeof ie), he(null)), ie instanceof Error && !(ie.message in Ce) && (Ce[ie.message] = !0, he(ae), u("Failed %s type: %s", X, ie.message), he(null));
          }
      }
    }
    var Le = Array.isArray;
    function _e(N) {
      return Le(N);
    }
    function Te(N) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, X = W && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return X;
      }
    }
    function ve(N) {
      try {
        return oe(N), !1;
      } catch {
        return !0;
      }
    }
    function oe(N) {
      return "" + N;
    }
    function Oe(N) {
      if (ve(N))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(N)), oe(N);
    }
    var xe = a.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, be, me;
    me = {};
    function ze(N) {
      if (de.call(N, "ref")) {
        var W = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Ae(N) {
      if (de.call(N, "key")) {
        var W = Object.getOwnPropertyDescriptor(N, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function ke(N, W) {
      if (typeof N.ref == "string" && xe.current && W && xe.current.stateNode !== W) {
        var X = z(xe.current.type);
        me[X] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(xe.current.type), N.ref), me[X] = !0);
      }
    }
    function Fe(N, W) {
      {
        var X = function() {
          fe || (fe = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        X.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function jt(N, W) {
      {
        var X = function() {
          be || (be = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        X.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var Yt = function(N, W, X, J, ae, re, le) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: W,
        ref: X,
        props: le,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function Xt(N, W, X, J, ae) {
      {
        var re, le = {}, ie = null, ye = null;
        X !== void 0 && (Oe(X), ie = "" + X), Ae(W) && (Oe(W.key), ie = "" + W.key), ze(W) && (ye = W.ref, ke(W, ae));
        for (re in W)
          de.call(W, re) && !we.hasOwnProperty(re) && (le[re] = W[re]);
        if (N && N.defaultProps) {
          var ge = N.defaultProps;
          for (re in ge)
            le[re] === void 0 && (le[re] = ge[re]);
        }
        if (ie || ye) {
          var pe = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          ie && Fe(le, pe), ye && jt(le, pe);
        }
        return Yt(N, ie, ye, ae, J, xe.current, le);
      }
    }
    var qe = a.ReactCurrentOwner, nt = a.ReactDebugCurrentFrame;
    function Me(N) {
      if (N) {
        var W = N._owner, X = te(N.type, N._source, W ? W.type : null);
        nt.setExtraStackFrame(X);
      } else
        nt.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function je(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function lt() {
      {
        if (qe.current) {
          var N = z(qe.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Gt(N) {
      {
        if (N !== void 0) {
          var W = N.fileName.replace(/^.*[\\\/]/, ""), X = N.lineNumber;
          return `

Check your code at ` + W + ":" + X + ".";
        }
        return "";
      }
    }
    var st = {};
    function Kt(N) {
      {
        var W = lt();
        if (!W) {
          var X = typeof N == "string" ? N : N.displayName || N.name;
          X && (W = `

Check the top-level render call using <` + X + ">.");
        }
        return W;
      }
    }
    function ot(N, W) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var X = Kt(W);
        if (st[X])
          return;
        st[X] = !0;
        var J = "";
        N && N._owner && N._owner !== qe.current && (J = " It was passed a child from " + z(N._owner.type) + "."), Me(N), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, J), Me(null);
      }
    }
    function at(N, W) {
      {
        if (typeof N != "object")
          return;
        if (_e(N))
          for (var X = 0; X < N.length; X++) {
            var J = N[X];
            je(J) && ot(J, W);
          }
        else if (je(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ae = s(N);
          if (typeof ae == "function" && ae !== N.entries)
            for (var re = ae.call(N), le; !(le = re.next()).done; )
              je(le.value) && ot(le.value, W);
        }
      }
    }
    function Jt(N) {
      {
        var W = N.type;
        if (W == null || typeof W == "string")
          return;
        var X;
        if (typeof W == "function")
          X = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === b))
          X = W.propTypes;
        else
          return;
        if (X) {
          var J = z(W);
          ce(X, N.props, "prop", J, N);
        } else if (W.PropTypes !== void 0 && !$e) {
          $e = !0;
          var ae = z(W);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(N) {
      {
        for (var W = Object.keys(N.props), X = 0; X < W.length; X++) {
          var J = W[X];
          if (J !== "children" && J !== "key") {
            Me(N), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Me(null);
            break;
          }
        }
        N.ref !== null && (Me(N), u("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function rt(N, W, X, J, ae, re) {
      {
        var le = w(N);
        if (!le) {
          var ie = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = Gt(ae);
          ye ? ie += ye : ie += lt();
          var ge;
          N === null ? ge = "null" : _e(N) ? ge = "array" : N !== void 0 && N.$$typeof === t ? (ge = "<" + (z(N.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof N, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ie);
        }
        var pe = Xt(N, W, X, ae, re);
        if (pe == null)
          return pe;
        if (le) {
          var Ee = W.children;
          if (Ee !== void 0)
            if (J)
              if (_e(Ee)) {
                for (var Re = 0; Re < Ee.length; Re++)
                  at(Ee[Re], N);
                Object.freeze && Object.freeze(Ee);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              at(Ee, N);
        }
        return N === o ? Qt(pe) : Jt(pe), pe;
      }
    }
    function ei(N, W, X) {
      return rt(N, W, X, !0);
    }
    function ti(N, W, X) {
      return rt(N, W, X, !1);
    }
    var ii = ti, ni = ei;
    Ve.Fragment = o, Ve.jsx = ii, Ve.jsxs = ni;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? Ye.exports = si() : Ye.exports = oi();
var ai = Ye.exports, Ze = {}, Je = {};
const bt = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const n = e.context;
    n.blockquote = {
      targetButton: t,
      tag: e.util.createElement("BLOCKQUOTE")
    };
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.util.removeClass(this.context.blockquote.targetButton, "active");
    else if (/blockquote/i.test(e.nodeName))
      return this.util.addClass(this.context.blockquote.targetButton, "active"), !0;
    return !1;
  },
  /**
   * @Override core
   */
  action: function() {
    const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
    e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1));
  }
}, vt = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const n = e.icons, o = e.context;
    o.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: n.align_justify,
        left: n.align_left,
        right: n.align_right,
        center: n.align_center
      }
    };
    let l = this.setSubmenu(e), c = o.align._itemMenu = l.querySelector("ul");
    c.addEventListener("click", this.pickup.bind(e)), o.align._alignList = c.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, c = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.icons, o = e.util.createElement("DIV"), l = e.options.alignItems;
    let c = "";
    for (let d = 0, f, i; d < l.length; d++)
      f = l[d], i = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], c += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + i + '" aria-label="' + i + '"><span class="se-list-icon">' + n["align_" + f] + "</span>" + i + "</button></li>";
    return o.className = "se-submenu se-list-layer se-list-align", o.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + c + "</ul></div>", o;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, n = t.targetButton, o = n.firstElementChild;
    if (!e)
      this.util.changeElement(o, t.icons[t.defaultDir]), n.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(o, t.icons[l] || t.icons[t.defaultDir]), n.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, n = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (n !== e.currentAlign) {
      for (let o = 0, l = t.length; o < l; o++)
        n === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentAlign = n;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e)
      return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, n = t.querySelector('[data-value="left"]'), o = t.querySelector('[data-value="right"]');
    if (n && o) {
      const l = n.parentElement, c = o.parentElement;
      l.appendChild(o), c.appendChild(n);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null;
    for (; !n && !/UL/i.test(t.tagName); )
      n = t.getAttribute("data-value"), t = t.parentNode;
    if (!n)
      return;
    const o = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let c = 0, d = l.length; c < d; c++)
      this.util.setStyle(l[c], "textAlign", n === o ? "" : n);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, yt = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let o = this.setSubmenu(e);
    o.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), n.font._fontList = o.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-font-family";
    let o, l, c, d, f = e.options.font, i = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (c = 0, d = f.length; c < d; c++)
      o = f[c], l = o.split(",")[0], i += '<li><button type="button" class="se-btn-list" data-value="' + o + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + o + ';">' + l + "</button></li>";
    return i += "</ul></div>", n.innerHTML = i, n;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, n = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const o = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, o), this.util.changeTxt(n, this.lang.toolbar.font + " (" + o + ")"), !0;
      }
    } else {
      const o = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, o), this.util.changeTxt(n, this.hasFocus ? this.lang.toolbar.font + (o ? " (" + o + ")" : "") : o);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, n = e.targetText.textContent;
    if (n !== e.currentFont) {
      for (let o = 0, l = t.length; o < l; o++)
        n === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentFont = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const n = this.util.createElement("SPAN");
      n.style.fontFamily = t, this.nodeChange(n, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, Ct = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), n.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let c = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + n.toolbar.default + '" aria-label="' + n.toolbar.default + '">(' + n.toolbar.default + ")</button></li>";
    for (let d = 0, f = t.fontSizeUnit, i = l.length, _; d < i; d++)
      _ = l[d], c += '<li><button type="button" class="se-btn-list" data-value="' + _ + f + '" title="' + _ + f + '" aria-label="' + _ + f + '" style="font-size:' + _ + f + ';">' + _ + "</button></li>";
    return c += "</ul></div>", o.innerHTML = c, o;
  },
  /**
  * @Override core
  */
  active: function(e) {
    if (!e)
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
    else if (e.style && e.style.fontSize.length > 0)
      return this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, e.style.fontSize)), !0;
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.fontSize, t = e._sizeList, n = e.targetText.textContent;
    if (n !== e.currentSize) {
      for (let o = 0, l = t.length; o < l; o++)
        n === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentSize = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const n = this.util.createElement("SPAN");
      n.style.fontSize = t, this.nodeChange(n, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, wt = {
  name: "colorPicker",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.colorPicker = {
      colorListHTML: "",
      _colorInput: "",
      _defaultColor: "#000",
      _styleProperty: "color",
      _currentColor: "",
      _colorList: []
    }, t.colorPicker.colorListHTML = this.createColorList(e, this._makeColorList);
  },
  /**
   * @description Create color list
   * @param {Object} core Core object 
   * @param {Function} makeColor this._makeColorList
   * @returns {String} HTML string
   */
  createColorList: function(e, t) {
    const n = e.options, o = e.lang, l = !n.colorList || n.colorList.length === 0 ? [
      "#ff0000",
      "#ff5e00",
      "#ffe400",
      "#abf200",
      "#00d8ff",
      "#0055ff",
      "#6600ff",
      "#ff00dd",
      "#000000",
      "#ffd8d8",
      "#fae0d4",
      "#faf4c0",
      "#e4f7ba",
      "#d4f4fa",
      "#d9e5ff",
      "#e8d9ff",
      "#ffd9fa",
      "#f1f1f1",
      "#ffa7a7",
      "#ffc19e",
      "#faed7d",
      "#cef279",
      "#b2ebf4",
      "#b2ccff",
      "#d1b2ff",
      "#ffb2f5",
      "#bdbdbd",
      "#f15f5f",
      "#f29661",
      "#e5d85c",
      "#bce55c",
      "#5cd1e5",
      "#6699ff",
      "#a366ff",
      "#f261df",
      "#8c8c8c",
      "#980000",
      "#993800",
      "#998a00",
      "#6b9900",
      "#008299",
      "#003399",
      "#3d0099",
      "#990085",
      "#353535",
      "#670000",
      "#662500",
      "#665c00",
      "#476600",
      "#005766",
      "#002266",
      "#290066",
      "#660058",
      "#222222"
    ] : n.colorList;
    let c = [], d = '<div class="se-list-inner">';
    for (let f = 0, i = l.length, _; f < i; f++)
      _ = l[f], _ && (typeof _ == "string" && (c.push(_), f < i - 1) || (c.length > 0 && (d += '<div class="se-selector-color">' + t(c) + "</div>", c = []), typeof _ == "object" && (d += '<div class="se-selector-color">' + t(_) + "</div>")));
    return d += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + o.dialogBox.submitButton + '" aria-label="' + o.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + o.toolbar.removeFormat + '" aria-label="' + o.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", d;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let n = 0, o = e.length, l; n < o; n++)
      l = e[n], typeof l == "string" && (t += '<li><button type="button" data-value="' + l + '" title="' + l + '" aria-label="' + l + '" style="background-color:' + l + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const n = this.plugins.colorPicker;
    let o = t || n.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    o = n.isHexColor(o) ? o : n.rgb2hex(o) || o;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let c = 0, d = l.length; c < d; c++)
        o.toLowerCase() === l[c].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[c], "active") : this.util.removeClass(l[c], "active");
    n.setInputText.call(this, n.colorName2hex.call(this, o));
  },
  /**
   * @description Store color values
   * @param {String} hexColorStr Hax color value
   */
  setCurrentColor: function(e) {
    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e;
  },
  /**
   * @description Set color at input element
   * @param {String} hexColorStr Hax color value
   */
  setInputText: function(e) {
    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e);
  },
  /**
   * @description Gets color value at color property of node
   * @param {Node} node Selected node 
   * @returns {String}
   */
  getColorInNode: function(e) {
    let t = "";
    const n = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[n] && (t = e.style[n]), e = e.parentNode;
    return t;
  },
  /**
   * @description Function to check hex format color
   * @param {String} str Color value
   */
  isHexColor: function(e) {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e);
  },
  /**
   * @description Function to convert hex format to a rgb color
   * @param {String} rgb RGB color format
   * @returns {String}
   */
  rgb2hex: function(e) {
    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return t && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
  },
  /**
   * @description Converts color values of other formats to hex color values and returns.
   * @param {String} colorName Color value
   * @returns {String}
   */
  colorName2hex: function(e) {
    if (/^#/.test(e))
      return e;
    var t = this.util.createElement("div");
    t.style.display = "none", t.style.color = e;
    var n = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(o) {
      return parseInt(o, 10);
    });
    return this.util.removeItem(t), n.length >= 3 ? "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).substr(1) : !1;
  }
}, xt = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([wt]);
    const n = e.context;
    n.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    n.fontColor.colorInput = o.querySelector("._se_color_picker_input"), n.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), n.fontColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = t, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const n = this.wwComputedStyle.color;
    e._defaultColor = n ? this.plugins.colorPicker.isHexColor(n) ? n : this.plugins.colorPicker.rgb2hex(n) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff();
  }
}, Et = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([wt]);
    const n = e.context;
    n.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    n.hiliteColor.colorInput = o.querySelector("._se_color_picker_input"), n.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), n.hiliteColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = t, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const n = this.wwComputedStyle.backgroundColor;
    e._defaultColor = n ? this.plugins.colorPicker.isHexColor(n) ? n : this.plugins.colorPicker.rgb2hex(n) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff();
  }
}, St = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), o = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let l = "";
    for (let c = 0, d = o.length; c < d; c++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + o[c].class + '" title="' + o[c].name + '" aria-label="' + o[c].name + '"><hr' + (o[c].class ? ' class="' + o[c].class + '"' : "") + (o[c].style ? ' style="' + o[c].style + '"' : "") + "/></button></li>";
    return n.className = "se-submenu se-list-layer se-list-line", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + l + "</ul></div>", n;
  },
  active: function(e) {
    if (!e)
      this.util.hasClass(this.context.horizontalRule.currentHR, "on") && this.controllersOff();
    else if (/HR/i.test(e.nodeName))
      return this.context.horizontalRule.currentHR = e, this.util.hasClass(e, "on") || (this.util.addClass(e, "on"), this.controllersOn("hr", this.util.removeClass.bind(this.util, e, "on"))), !0;
    return !1;
  },
  appendHr: function(e) {
    return this.focus(), this.insertComponent(e.cloneNode(!1), !1, !0, !1);
  },
  horizontalRulePick: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = t.getAttribute("data-command");
    for (; !n && !/UL/i.test(t.tagName); )
      t = t.parentNode, n = t.getAttribute("data-command");
    if (!n)
      return;
    const o = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    o && (this.setRange(o, 0, o, 0), this.submenuOff());
  }
}, Tt = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), n.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", n;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, n = t.firstElementChild, o = this.util;
    if (o.isList(e)) {
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), o.addClass(t, "active"), /UL/i.test(l) ? o.changeElement(n, this.context.list.icons.bullets) : o.changeElement(n, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), o.changeElement(n, this.context.list.icons.number), o.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, n = e.targetButton.getAttribute("data-focus") || "";
    if (n !== e.currentList) {
      for (let o = 0, l = t.length; o < l; o++)
        n === t[o].getAttribute("data-command") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentList = n;
    }
  },
  editList: function(e, t, n) {
    let o = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (o = this.getRange_addLine(o, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const c = this.util;
    c.sortByDepth(l, !0);
    let d = l[0], f = l[l.length - 1], i = (c.isListCell(d) || c.isComponent(d)) && !d.previousElementSibling ? d.parentNode.previousElementSibling : d.previousElementSibling, _ = (c.isListCell(f) || c.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const r = o.collapsed, b = {
      sc: o.startContainer,
      so: o.startContainer === o.endContainer && c.onlyZeroWidthSpace(o.startContainer) && o.startOffset === 0 && o.endOffset === 1 ? o.endOffset : o.startOffset,
      ec: o.endContainer,
      eo: o.endOffset
    };
    let x = null, S = !0;
    for (let B = 0, F = l.length; B < F; B++)
      if (!c.isList(c.getRangeFormatElement(l[B], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[B];
      }).bind(c)))) {
        S = !1;
        break;
      }
    if (S && (!i || d.tagName !== i.tagName || e !== i.tagName.toUpperCase()) && (!_ || f.tagName !== _.tagName || e !== _.tagName.toUpperCase())) {
      if (n) {
        for (let h = 0, g = l.length; h < g; h++)
          for (let m = h - 1; m >= 0; m--)
            if (l[m].contains(l[h])) {
              l.splice(h, 1), h--, g--;
              break;
            }
      }
      const B = c.getRangeFormatElement(d), F = B && B.tagName === e;
      let s, a;
      const u = (function(h) {
        return !this.isComponent(h);
      }).bind(c);
      F || (a = c.createElement(e));
      for (let h = 0, g = l.length, m, p; h < g; h++)
        p = c.getRangeFormatElement(l[h], u), !(!p || !c.isList(p)) && (m ? m !== p ? (n && c.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, a, !1, !0), p = l[h].parentNode, F || (a = c.createElement(e)), m = p, s = { r: m, f: [c.getParentElement(l[h], "LI")] }) : s.f.push(c.getParentElement(l[h], "LI")) : (m = p, s = { r: m, f: [c.getParentElement(l[h], "LI")] }), h === g - 1 && (n && c.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, a, !1, !0)));
    } else {
      const B = i && i.parentNode, F = _ && _.parentNode;
      i = B && !c.isWysiwygDiv(B) && B.nodeName === e ? B : i, _ = F && !c.isWysiwygDiv(F) && F.nodeName === e ? F : _;
      const s = i && i.tagName === e, a = _ && _.tagName === e;
      let u = s ? i : c.createElement(e), h = null, g = null, m = null;
      const p = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(c);
      for (let y = 0, C = l.length, v, w, E, k, z, A, O, P, V; y < C; y++) {
        if (w = l[y], w.childNodes.length === 0 && !c._isIgnoreNodeChange(w)) {
          c.removeItem(w);
          continue;
        }
        if (k = l[y + 1], z = w.parentNode, A = k ? k.parentNode : null, E = c.isListCell(w), V = c.isRangeFormatElement(z) ? z : null, O = E && !c.isWysiwygDiv(z) ? z.parentNode : z, P = E && !c.isWysiwygDiv(z) ? !k || c.isListCell(O) ? z : z.nextSibling : w.nextSibling, v = c.createElement("LI"), c.copyFormatAttributes(v, w), y === 0 && b.sc === w && (b.sc = v), y === C - 1 && b.ec === w && (b.ec = v), c.isComponent(w)) {
          const T = /^HR$/i.test(w.nodeName);
          T || (v.innerHTML = "<br>"), v.innerHTML += w.outerHTML, T && (v.innerHTML += "<br>");
        } else {
          const T = w.childNodes;
          for (; T[0]; )
            v.appendChild(T[0]);
        }
        u.appendChild(v), (!k || O !== A || c.isRangeFormatElement(P)) && (h || (h = u), (!s || !k || O !== A) && !(k && c.isList(A) && A === z) && u.parentNode !== O && O.insertBefore(u, P)), c.removeItem(w), s && g === null && (g = u.children.length - 1), k && (c.getRangeFormatElement(A, p) !== c.getRangeFormatElement(z, p) || c.isList(A) && c.isList(z) && c.getElementDepth(A) !== c.getElementDepth(z)) && (u = c.createElement(e)), V && V.children.length === 0 && c.removeItem(V);
      }
      g && (h = h.children[g]), a && (m = u.children.length - 1, u.innerHTML += _.innerHTML, u.children[m], c.removeItem(_));
    }
    return this.effectNode = null, r ? x : b;
  },
  _detachNested: function(e) {
    const t = e[0], n = e[e.length - 1], o = n.nextElementSibling, l = t.parentNode, c = l.parentNode.nextElementSibling, d = l.parentNode.parentNode;
    for (let i = 0, _ = e.length; i < _; i++)
      d.insertBefore(e[i], c);
    if (o && l.children.length > 0) {
      const i = l.cloneNode(!1), _ = l.childNodes, r = this.util.getPositionIndex(o);
      for (; _[r]; )
        i.appendChild(_[r]);
      n.appendChild(i);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(d);
    const f = this.util.getEdgeChildNodes(t, n);
    return {
      cc: t.parentNode,
      sc: f.sc,
      ec: f.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(d) {
      return this.isListCell(d);
    }).bind(this.util));
    const n = t.length;
    if (n === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[n - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[n - 1],
        eo: 1
      };
    let o = t[0].parentNode, l = t[n - 1], c = null;
    if (e) {
      if (o !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      c = this.plugins.list.editList.call(this, o.nodeName.toUpperCase(), t, !0);
    } else {
      let d = this.util.createElement(o.nodeName), f = t[0].previousElementSibling, i = l.nextElementSibling;
      const _ = { s: null, e: null, sl: o, el: o };
      for (let x = 0, S = n, B; x < S; x++)
        B = t[x], B.parentNode !== o && (this.plugins.list._insiedList.call(this, o, d, f, i, _), o = B.parentNode, d = this.util.createElement(o.nodeName)), f = B.previousElementSibling, i = B.nextElementSibling, d.appendChild(B);
      this.plugins.list._insiedList.call(this, o, d, f, i, _);
      const r = this.util.getNodeFromPath(_.s, _.sl), b = this.util.getNodeFromPath(_.e, _.el);
      c = {
        sc: r,
        so: 0,
        ec: b,
        eo: b.textContent.length
      };
    }
    return c;
  },
  _insiedList: function(e, t, n, o, l) {
    let c = !1;
    if (n && t.tagName === n.tagName) {
      const d = t.children;
      for (; d[0]; )
        n.appendChild(d[0]);
      t = n, c = !0;
    }
    if (o && t.tagName === o.tagName) {
      const d = o.children;
      for (; d[0]; )
        t.appendChild(d[0]);
      const f = o.nextElementSibling;
      o.parentNode.removeChild(o), o = f;
    }
    if (!c) {
      this.util.isListCell(n) && (e = n, o = null), e.insertBefore(t, o), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const d = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, d], !1), this.util.mergeNestedTags(e), d && (l.sl = this.util.getNodeFromPath(d, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = "";
    for (; !n && !/^UL$/i.test(t.tagName); )
      n = t.getAttribute("data-command"), t = t.parentNode;
    if (!n)
      return;
    const o = this.plugins.list.editList.call(this, n, null, !1);
    o && this.setRange(o.sc, o.so, o.ec, o.eo), this.submenuOff(), this.history.push(!1);
  }
}, kt = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    let o = n.table = {
      _element: null,
      _tdElement: null,
      _trElement: null,
      _trElements: null,
      _tableXY: [],
      _maxWidth: !0,
      _fixedColumn: !1,
      _rtl: e.options.rtl,
      cellControllerTop: e.options.tableCellControllerPosition === "top",
      resizeText: null,
      headerButton: null,
      mergeButton: null,
      splitButton: null,
      splitMenu: null,
      maxText: e.lang.controller.maxSize,
      minText: e.lang.controller.minSize,
      _physical_cellCnt: 0,
      _logical_cellCnt: 0,
      _rowCnt: 0,
      _rowIndex: 0,
      _physical_cellIndex: 0,
      _logical_cellIndex: 0,
      _current_colSpan: 0,
      _current_rowSpan: 0,
      icons: {
        expansion: e.icons.expansion,
        reduction: e.icons.reduction
      }
    }, l = this.setSubmenu(e), c = l.querySelector(".se-controller-table-picker");
    o.tableHighlight = l.querySelector(".se-table-size-highlighted"), o.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), o.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (o.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let d = this.setController_table(e);
    o.tableController = d, o.resizeButton = d.querySelector("._se_table_resize"), o.resizeText = d.querySelector("._se_table_resize > span > span"), o.columnFixedButton = d.querySelector("._se_table_fixed_column"), o.headerButton = d.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, o.cellControllerTop);
    o.resizeDiv = f, o.splitMenu = f.querySelector(".se-btn-group-sub"), o.mergeButton = f.querySelector("._se_table_merge_button"), o.splitButton = f.querySelector("._se_table_split_button"), o.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), o.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), c.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, o)), c.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), n.element.relative.appendChild(f), n.element.relative.appendChild(d), l = null, c = null, f = null, d = null, o = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, n = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-table", o.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + n.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + n.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + n.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  setController_tableEditor: function(e, t) {
    const n = e.lang, o = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + o.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + o.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + o.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + o.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + o.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + o.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + o.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + o.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + n.controller.VerticalSplit + '" aria-label="' + n.controller.VerticalSplit + '">' + n.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + n.controller.HorizontalSplit + '" aria-label="' + n.controller.HorizontalSplit + '">' + n.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, n = this.context.table._tableXY[0];
    let o = this.context.table._tableXY[1], l = "<tbody>";
    for (; o > 0; )
      l += "<tr>" + t.call(this, "td", n) + "</tr>", --o;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
      const d = e.querySelector("td div");
      this.setRange(d, 0, d, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, n) {
    if (e = e.toLowerCase(), n) {
      const o = this.util.createElement(e);
      return o.innerHTML = "<div><br></div>", o;
    } else {
      let o = "";
      for (; t > 0; )
        o += "<" + e + "><div><br></div></" + e + ">", t--;
      return o;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let n = this._w.Math.ceil(t.offsetX / 18), o = this._w.Math.ceil(t.offsetY / 18);
    n = n < 1 ? 1 : n, o = o < 1 ? 1 : o, e._rtl && (e.tableHighlight.style.left = n * 18 - 13 + "px", n = 11 - n), e.tableHighlight.style.width = n + "em", e.tableHighlight.style.height = o + "em", this.util.changeTxt(e.tableDisplay, n + " x " + o), e._tableXY = [n, o];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight)
      return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const n = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let o = 0, l = n.length; o < l; o++)
        this.util.removeClass(n[o], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  /** table edit controller */
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, n = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const o = n._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    n._maxWidth = this.util.hasClass(o, "se-table-size-100") || o.style.width === "100%" || !o.style.width && !this.util.hasClass(o, "se-table-size-auto"), n._fixedColumn = this.util.hasClass(o, "se-table-layout-fixed") || o.style.tableLayout === "fixed", t.setTableStyle.call(this, n._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, o), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(n.resizeDiv, n.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const n = this.context.table, o = n.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), n.cellControllerTop ? this.setControllerPosition(o, n._element, "top", { left: n.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(o, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const n = this.context.table, o = n._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(o.firstElementChild.nodeName) ? this.util.addClass(n.headerButton, "active") : this.util.removeClass(n.headerButton, "active"), t || n._physical_cellCnt === 0) {
      n._tdElement !== e && (n._tdElement = e, n._trElement = e.parentNode);
      const l = n._trElements = o.rows, c = e.cellIndex;
      let d = 0;
      for (let r = 0, b = l[0].cells, x = l[0].cells.length; r < x; r++)
        d += b[r].colSpan;
      const f = n._rowIndex = n._trElement.rowIndex;
      n._rowCnt = l.length, n._physical_cellCnt = n._trElement.cells.length, n._logical_cellCnt = d, n._physical_cellIndex = c, n._current_colSpan = n._tdElement.colSpan - 1, n._current_rowSpan - n._trElement.cells[c].rowSpan - 1;
      let i = [], _ = [];
      for (let r = 0, b, x; r <= f; r++) {
        b = l[r].cells, x = 0;
        for (let S = 0, B = b.length, F, s, a, u; S < B; S++) {
          if (F = b[S], s = F.colSpan - 1, a = F.rowSpan - 1, u = S + x, _.length > 0)
            for (let h = 0, g; h < _.length; h++)
              g = _[h], !(g.row > r) && (u >= g.index ? (x += g.cs, u += g.cs, g.rs -= 1, g.row = r + 1, g.rs < 1 && (_.splice(h, 1), h--)) : S === B - 1 && (g.rs -= 1, g.row = r + 1, g.rs < 1 && (_.splice(h, 1), h--)));
          if (r === f && S === c) {
            n._logical_cellIndex = u;
            break;
          }
          a > 0 && i.push({
            index: u,
            cs: s + 1,
            rs: a,
            row: -1
          }), x += s;
        }
        _ = _.concat(i).sort(function(S, B) {
          return S.index - B.index;
        }), i = [];
      }
      i = null, _ = null;
    }
  },
  editTable: function(e, t) {
    const n = this.plugins.table, o = this.context.table, l = o._element, c = e === "row";
    if (c) {
      const d = o._trElement.parentNode;
      if (/^THEAD$/i.test(d.nodeName)) {
        if (t === "up")
          return;
        if (!d.nextElementSibling || !/^TBODY$/i.test(d.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + n.createCells.call(this, "td", o._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (n._ref) {
      const d = o._tdElement, f = n._selectedCells;
      if (c)
        if (t)
          n.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), n.editRow.call(this, t, d);
        else {
          let i = f[0].parentNode;
          const _ = [f[0]];
          for (let r = 1, b = f.length, x; r < b; r++)
            x = f[r], i !== x.parentNode && (_.push(x), i = x.parentNode);
          for (let r = 0, b = _.length; r < b; r++)
            n.setCellInfo.call(this, _[r], !0), n.editRow.call(this, t);
        }
      else {
        const i = f[0].parentNode;
        if (t) {
          let _ = null;
          for (let r = 0, b = f.length - 1; r < b; r++)
            if (i !== f[r + 1].parentNode) {
              _ = f[r];
              break;
            }
          n.setCellInfo.call(this, t === "left" ? f[0] : _ || f[0], !0), n.editCell.call(this, t, d);
        } else {
          const _ = [f[0]];
          for (let r = 1, b = f.length, x; r < b && (x = f[r], i === x.parentNode); r++)
            _.push(x);
          for (let r = 0, b = _.length; r < b; r++)
            n.setCellInfo.call(this, _[r], !0), n.editCell.call(this, t);
        }
      }
      t || n.init.call(this);
    } else
      n[c ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const d = l.children;
      for (let f = 0; f < d.length; f++)
        d[f].children.length === 0 && (this.util.removeItem(d[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const n = this.context.table, o = !e, l = e === "up", c = n._rowIndex, d = o || l ? c : c + n._current_rowSpan + 1, f = o ? -1 : 1, i = n._trElements;
    let _ = n._logical_cellCnt;
    for (let r = 0, b = c + (o ? -1 : 0), x; r <= b; r++) {
      if (x = i[r].cells, x.length === 0)
        return;
      for (let S = 0, B = x.length, F, s; S < B; S++)
        F = x[S].rowSpan, s = x[S].colSpan, !(F < 2 && s < 2) && F + r > d && d > r && (x[S].rowSpan = F + f, _ -= s);
    }
    if (o) {
      const r = i[c + 1];
      if (r) {
        const b = [];
        let x = i[c].cells, S = 0;
        for (let B = 0, F = x.length, s, a; B < F; B++)
          s = x[B], a = B + S, S += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, b.push({ cell: s.cloneNode(!1), index: a }));
        if (b.length > 0) {
          let B = b.shift();
          x = r.cells, S = 0;
          for (let F = 0, s = x.length, a, u; F < s && (a = x[F], u = F + S, S += a.colSpan - 1, !(u >= B.index && (F--, S--, S += B.cell.colSpan - 1, r.insertBefore(B.cell, a), B = b.shift(), !B))); F++)
            ;
          if (B) {
            r.appendChild(B.cell);
            for (let F = 0, s = b.length; F < s; F++)
              r.appendChild(b[F].cell);
          }
        }
      }
      n._element.deleteRow(d);
    } else {
      const r = n._element.insertRow(d);
      r.innerHTML = this.plugins.table.createCells.call(this, "td", _, !1);
    }
    o ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0);
  },
  editCell: function(e, t) {
    const n = this.context.table, o = this.util, l = !e, c = e === "left", d = n._current_colSpan, f = l || c ? n._logical_cellIndex : n._logical_cellIndex + d + 1, i = n._trElements;
    let _ = [], r = [], b = 0;
    const x = [], S = [];
    for (let B = 0, F = n._rowCnt, s, a, u, h, g, m; B < F; B++) {
      s = i[B], a = f, g = !1, u = s.cells, m = 0;
      for (let p = 0, y, C = u.length, v, w, E; p < C && (y = u[p], !!y); p++)
        if (v = y.rowSpan - 1, w = y.colSpan - 1, l) {
          if (E = p + m, r.length > 0) {
            const k = !u[p + 1];
            for (let z = 0, A; z < r.length; z++)
              A = r[z], !(A.row > B) && (E >= A.index ? (m += A.cs, E = p + m, A.rs -= 1, A.row = B + 1, A.rs < 1 && (r.splice(z, 1), z--)) : k && (A.rs -= 1, A.row = B + 1, A.rs < 1 && (r.splice(z, 1), z--)));
          }
          v > 0 && _.push({
            rs: v,
            cs: w + 1,
            index: E,
            row: -1
          }), E >= a && E + w <= a + d ? x.push(y) : E <= a + d && E + w >= a ? y.colSpan -= o.getOverlapRangeAtIndex(f, f + d, E, E + w) : v > 0 && (E < a || E + w > a + d) && S.push({
            cell: y,
            i: B,
            rs: B + v
          }), m += w;
        } else {
          if (p >= a)
            break;
          if (w > 0) {
            if (b < 1 && w + p >= a) {
              y.colSpan += 1, a = null, b = v + 1;
              break;
            }
            a -= w;
          }
          if (!g) {
            for (let k = 0, z; k < r.length; k++)
              z = r[k], a -= z.cs, z.rs -= 1, z.rs < 1 && (r.splice(k, 1), k--);
            g = !0;
          }
        }
      if (r = r.concat(_).sort(function(p, y) {
        return p.index - y.index;
      }), _ = [], !l) {
        if (b > 0) {
          b -= 1;
          continue;
        }
        a !== null && u.length > 0 && (h = this.plugins.table.createCells.call(this, u[0].nodeName, 0, !0), h = s.insertBefore(h, u[a]));
      }
    }
    if (l) {
      let B, F;
      for (let s = 0, a = x.length, u; s < a; s++)
        u = x[s].parentNode, o.removeItem(x[s]), u.cells.length === 0 && (B || (B = o.getArrayIndex(i, u)), F = o.getArrayIndex(i, u), o.removeItem(u));
      for (let s = 0, a = S.length, u; s < a; s++)
        u = S[s], u.cell.rowSpan = o.getOverlapRangeAtIndex(B, F, u.i, u.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = (function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }).bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, n = e === "vertical", o = this.context.table, l = o._tdElement, c = o._trElements, d = o._trElement, f = o._logical_cellIndex, i = o._rowIndex, _ = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (n) {
      const r = l.colSpan;
      if (_.rowSpan = l.rowSpan, r > 1)
        _.colSpan = this._w.Math.floor(r / 2), l.colSpan = r - _.colSpan, d.insertBefore(_, l.nextElementSibling);
      else {
        let b = [], x = [];
        for (let S = 0, B = o._rowCnt, F, s; S < B; S++) {
          F = c[S].cells, s = 0;
          for (let a = 0, u = F.length, h, g, m, p; a < u; a++) {
            if (h = F[a], g = h.colSpan - 1, m = h.rowSpan - 1, p = a + s, x.length > 0)
              for (let y = 0, C; y < x.length; y++)
                C = x[y], !(C.row > S) && (p >= C.index ? (s += C.cs, p += C.cs, C.rs -= 1, C.row = S + 1, C.rs < 1 && (x.splice(y, 1), y--)) : a === u - 1 && (C.rs -= 1, C.row = S + 1, C.rs < 1 && (x.splice(y, 1), y--)));
            if (p <= f && m > 0 && b.push({
              index: p,
              cs: g + 1,
              rs: m,
              row: -1
            }), h !== l && p <= f && p + g >= f + r - 1) {
              h.colSpan += 1;
              break;
            }
            if (p > f)
              break;
            s += g;
          }
          x = x.concat(b).sort(function(a, u) {
            return a.index - u.index;
          }), b = [];
        }
        d.insertBefore(_, l.nextElementSibling);
      }
    } else {
      const r = l.rowSpan;
      if (_.colSpan = l.colSpan, r > 1) {
        _.rowSpan = this._w.Math.floor(r / 2);
        const b = r - _.rowSpan, x = [], S = t.getArrayIndex(c, d) + b;
        for (let a = 0, u, h; a < S; a++) {
          u = c[a].cells, h = 0;
          for (let g = 0, m = u.length, p, y, C; g < m && (C = g + h, !(C >= f)); g++)
            p = u[g], y = p.rowSpan - 1, y > 0 && y + a >= S && C < f && x.push({
              index: C,
              cs: p.colSpan
            }), h += p.colSpan - 1;
        }
        const B = c[S], F = B.cells;
        let s = x.shift();
        for (let a = 0, u = F.length, h = 0, g, m, p, y; a < u; a++) {
          if (p = a + h, g = F[a], m = g.colSpan - 1, y = p + m + 1, s && y >= s.index && (h += s.cs, y += s.cs, s = x.shift()), y >= f || a === u - 1) {
            B.insertBefore(_, g.nextElementSibling);
            break;
          }
          h += m;
        }
        l.rowSpan = b;
      } else {
        _.rowSpan = l.rowSpan;
        const b = t.createElement("TR");
        b.appendChild(_);
        for (let B = 0, F; B < i; B++) {
          if (F = c[B].cells, F.length === 0)
            return;
          for (let s = 0, a = F.length; s < a; s++)
            B + F[s].rowSpan - 1 >= i && (F[s].rowSpan += 1);
        }
        const x = o._physical_cellIndex, S = d.cells;
        for (let B = 0, F = S.length; B < F; B++)
          B !== x && (S[B].rowSpan += 1);
        d.parentNode.insertBefore(b, d.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, n = this.util, o = e._ref, l = e._selectedCells, c = l[0];
    let d = null, f = null, i = o.ce - o.cs + 1, _ = o.re - o.rs + 1, r = "", b = null;
    for (let x = 1, S = l.length, B, F; x < S; x++) {
      B = l[x], b !== B.parentNode && (b = B.parentNode), F = B.children;
      for (let s = 0, a = F.length; s < a; s++)
        n.isFormatElement(F[s]) && n.onlyZeroWidthSpace(F[s].textContent) && n.removeItem(F[s]);
      r += B.innerHTML, n.removeItem(B), b.cells.length === 0 && (d ? f = b : d = b, _ -= 1);
    }
    if (d) {
      const x = t._trElements, S = n.getArrayIndex(x, d), B = n.getArrayIndex(x, f || d), F = [];
      for (let s = 0, a; s <= B; s++) {
        if (a = x[s].cells, a.length === 0) {
          F.push(x[s]);
          continue;
        }
        for (let u = 0, h = a.length, g, m; u < h; u++)
          g = a[u], m = g.rowSpan - 1, m > 0 && s + m >= S && (g.rowSpan -= n.getOverlapRangeAtIndex(S, B, s, s + m));
      }
      for (let s = 0, a = F.length; s < a; s++)
        n.removeItem(F[s]);
    }
    c.innerHTML += r, c.colSpan = i, c.rowSpan = _, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, c), n.addClass(c, "se-table-selected-cell"), this.focusEdge(c);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, n = e.hasClass(t, "active"), o = this.context.table._element;
    if (n)
      e.removeItem(o.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", o.insertBefore(l, o.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, n = t._element;
    let o, l, c, d;
    e.indexOf("width") > -1 && (o = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (c = t.icons.reduction, d = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(n, "se-table-size-auto"), this.util.addClass(n, "se-table-size-100")) : (c = t.icons.expansion, d = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(n, "se-table-size-100"), this.util.addClass(n, "se-table-size-auto")), this.util.changeElement(o, c), this.util.changeTxt(l, d)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(n, "se-table-layout-auto"), this.util.addClass(n, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(n, "se-table-layout-fixed"), this.util.addClass(n, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const n = this.context.table;
    /^TH$/i.test(e.nodeName) ? (n.insertRowAboveButton.setAttribute("disabled", !0), n.insertRowBelowButton.setAttribute("disabled", !0)) : (n.insertRowAboveButton.removeAttribute("disabled"), n.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (n.splitButton.removeAttribute("disabled"), n.mergeButton.setAttribute("disabled", !0)) : (n.splitButton.setAttribute("disabled", !0), n.mergeButton.removeAttribute("disabled"));
  },
  // multi selecte
  _bindOnSelect: null,
  _bindOffSelect: null,
  _bindOffShift: null,
  _selectedCells: null,
  _shift: !1,
  _fixedCell: null,
  _fixedCellName: null,
  _selectedCell: null,
  _selectedTable: null,
  _ref: null,
  _toggleEditor: function(e) {
    this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled");
  },
  _offCellMultiSelect: function(e) {
    e.stopPropagation();
    const t = this.plugins.table;
    t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), !(!t._fixedCell || !t._selectedTable) && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null));
  },
  _onCellMultiSelect: function(e) {
    this._antiBlur = !0;
    const t = this.plugins.table, n = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      n === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (n === t._fixedCell)
        return;
      t._toggleEditor.call(this, !1);
    }
    !n || n === t._selectedCell || t._fixedCellName !== n.nodeName || t._selectedTable !== this.util.getParentElement(n, "TABLE") || (t._selectedCell = n, t._setMultiCells.call(this, t._fixedCell, n));
  },
  _setMultiCells: function(e, t) {
    const n = this.plugins.table, o = n._selectedTable.rows, l = this.util, c = n._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let r = 0, b = c.length; r < b; r++)
      l.removeClass(c[r], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !n._shift))
      return;
    let d = !0, f = [], i = [];
    const _ = n._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let r = 0, b = o.length, x, S; r < b; r++) {
      x = o[r].cells, S = 0;
      for (let B = 0, F = x.length, s, a, u, h; B < F; B++) {
        if (s = x[B], u = s.colSpan - 1, h = s.rowSpan - 1, a = B + S, f.length > 0)
          for (let g = 0, m; g < f.length; g++)
            m = f[g], !(m.row > r) && (a >= m.index ? (S += m.cs, a += m.cs, m.rs -= 1, m.row = r + 1, m.rs < 1 && (f.splice(g, 1), g--)) : B === F - 1 && (m.rs -= 1, m.row = r + 1, m.rs < 1 && (f.splice(g, 1), g--)));
        if (d) {
          if ((s === e || s === t) && (_.cs = _.cs !== null && _.cs < a ? _.cs : a, _.ce = _.ce !== null && _.ce > a + u ? _.ce : a + u, _.rs = _.rs !== null && _.rs < r ? _.rs : r, _.re = _.re !== null && _.re > r + h ? _.re : r + h, _._i += 1), _._i === 2) {
            d = !1, f = [], i = [], r = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(_.cs, _.ce, a, a + u) && l.getOverlapRangeAtIndex(_.rs, _.re, r, r + h)) {
          const g = _.cs < a ? _.cs : a, m = _.ce > a + u ? _.ce : a + u, p = _.rs < r ? _.rs : r, y = _.re > r + h ? _.re : r + h;
          if (_.cs !== g || _.ce !== m || _.rs !== p || _.re !== y) {
            _.cs = g, _.ce = m, _.rs = p, _.re = y, r = -1, f = [], i = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        h > 0 && i.push({
          index: a,
          cs: u + 1,
          rs: h,
          row: -1
        }), S += s.colSpan - 1;
      }
      f = f.concat(i).sort(function(B, F) {
        return B.index - F.index;
      }), i = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const n = this.plugins.table;
    n._removeEvents.call(this), this.controllersOff(), n._shift = t, n._fixedCell = e, n._fixedCellName = e.nodeName, n._selectedTable = this.util.getParentElement(e, "TABLE");
    const o = n._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, c = o.length; l < c; l++)
      this.util.removeClass(o[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), n._bindOnSelect = n._onCellMultiSelect.bind(this), n._bindOffSelect = n._offCellMultiSelect.bind(this), t ? (n._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), n._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", n._bindOffShift, !1), this._wd.addEventListener("mousedown", n._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", n._bindOnSelect, !1), this._wd.addEventListener("mouseup", n._bindOffSelect, !1), n._initBind = n.init.bind(this), this._wd.addEventListener("touchmove", n._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled"))
      return;
    const n = t.getAttribute("data-command"), o = t.getAttribute("data-value"), l = t.getAttribute("data-option"), c = this.plugins.table;
    if (typeof c._closeSplitMenu == "function" && (c._closeSplitMenu(), n === "onsplit") || !n)
      return;
    e.preventDefault();
    const d = this.context.table;
    switch (n) {
      case "insert":
      case "delete":
        c.editTable.call(this, o, l);
        break;
      case "header":
        c.toggleHeader.call(this);
        break;
      case "onsplit":
        c.openSplitMenu.call(this);
        break;
      case "split":
        c.splitCells.call(this, o);
        break;
      case "merge":
        c.mergeCells.call(this);
        break;
      case "resize":
        d._maxWidth = !d._maxWidth, c.setTableStyle.call(this, "width"), c.setPositionControllerTop.call(this, d._element), c.setPositionControllerDiv.call(this, d._tdElement, c._shift);
        break;
      case "layout":
        d._fixedColumn = !d._fixedColumn, c.setTableStyle.call(this, "column"), c.setPositionControllerTop.call(this, d._element), c.setPositionControllerDiv.call(this, d._tdElement, c._shift);
        break;
      case "remove":
        const f = d._element.parentNode;
        this.util.removeItem(d._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(i) {
          return i.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Lt = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.formatBlock._formatList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang.toolbar, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-format";
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], c = !t.formats || t.formats.length === 0 ? l : t.formats;
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, i = c.length, _, r, b, x, S, B, F; f < i; f++)
      _ = c[f], typeof _ == "string" && l.indexOf(_) > -1 ? (r = _.toLowerCase(), b = r === "blockquote" ? "range" : r === "pre" ? "free" : "replace", S = /^h/.test(r) ? r.match(/\d+/)[0] : "", x = n["tag_" + (S ? "h" : r)] + S, F = "", B = "") : (r = _.tag.toLowerCase(), b = _.command, x = _.name || r, F = _.class, B = F ? ' class="' + F + '"' : ""), d += '<li><button type="button" class="se-btn-list" data-command="' + b + '" data-value="' + r + '" data-class="' + F + '" title="' + x + '" aria-label="' + x + '"><' + r + B + ">" + x + "</" + r + "></button></li>";
    return d += "</ul></div>", o.innerHTML = d, o;
  },
  /**
  * @Override core
  */
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const n = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(n, t);
    else if (this.util.isFormatElement(e)) {
      const l = this.context.formatBlock._formatList, c = e.nodeName.toLowerCase(), d = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, i = l.length, _; f < i; f++)
        if (_ = l[f], c === _.getAttribute("data-value") && d === _.getAttribute("data-class")) {
          t = _.title;
          break;
        }
      return this.util.changeTxt(n, t), n.setAttribute("data-value", c), n.setAttribute("data-class", d), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, n = e.targetText, o = (n.getAttribute("data-value") || "") + (n.getAttribute("data-class") || "");
    if (o !== e.currentFormat) {
      for (let l = 0, c = t.length, d; l < c; l++)
        d = t[l], o === d.getAttribute("data-value") + d.getAttribute("data-class") ? this.util.addClass(d, "active") : this.util.removeClass(d, "active");
      e.currentFormat = o;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null, o = null, l = null, c = "";
    for (; !n && !/UL/i.test(t.tagName); ) {
      if (n = t.getAttribute("data-command"), o = t.getAttribute("data-value"), c = t.getAttribute("data-class"), n) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (n) {
      if (n === "range") {
        const d = l.cloneNode(!1);
        this.applyRangeFormatElement(d);
      } else {
        let d = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (d = this.getRange_addLine(d, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const i = d.startOffset, _ = d.endOffset, r = this.util;
        let b = f[0], x = f[f.length - 1];
        const S = r.getNodePath(d.startContainer, b, null, null), B = r.getNodePath(d.endContainer, x, null, null), F = this.detachList(f, !1);
        F.sc && (b = F.sc), F.ec && (x = F.ec), this.setRange(r.getNodeFromPath(S, b), i, r.getNodeFromPath(B, x), _);
        const s = this.getSelectedElementsAndComponents(!1);
        if (n === "free") {
          const a = s.length - 1;
          let u = s[a].parentNode, h = l.cloneNode(!1);
          const g = h;
          for (let m = a, p, y, C, v, w, E, k = !0; m >= 0; m--)
            if (p = s[m], p !== (s[m + 1] ? s[m + 1].parentNode : null)) {
              if (E = r.isComponent(p), y = E ? "" : p.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = r.getParentElement(p, function(z) {
                return z.parentNode === u;
              }), (u !== p.parentNode || E) && (r.isFormatElement(u) ? (u.parentNode.insertBefore(h, u.nextSibling), u = u.parentNode) : (u.insertBefore(h, C ? C.nextSibling : null), u = p.parentNode), v = h.nextSibling, v && h.nodeName === v.nodeName && r.isSameAttributes(h, v) && (h.innerHTML += "<BR>" + v.innerHTML, r.removeItem(v)), h = l.cloneNode(!1), k = !0), w = h.innerHTML, h.innerHTML = (k || !y || !w || /<br>$/i.test(y) ? y : y + "<BR>") + w, m === 0) {
                u.insertBefore(h, p), v = p.nextSibling, v && h.nodeName === v.nodeName && r.isSameAttributes(h, v) && (h.innerHTML += "<BR>" + v.innerHTML, r.removeItem(v));
                const z = h.previousSibling;
                z && h.nodeName === z.nodeName && r.isSameAttributes(h, z) && (z.innerHTML += "<BR>" + h.innerHTML, r.removeItem(h));
              }
              E || r.removeItem(p), y && (k = !1);
            }
          this.setRange(g, 0, g, 0);
        } else {
          for (let a = 0, u = s.length, h, g; a < u; a++)
            h = s[a], (h.nodeName.toLowerCase() !== o.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== c) && !r.isComponent(h) && (g = l.cloneNode(!1), r.copyFormatAttributes(g, h), g.innerHTML = h.innerHTML, h.parentNode.replaceChild(g, h)), a === 0 && (b = g || h), a === u - 1 && (x = g || h), g = null;
          this.setRange(r.getNodeFromPath(S, b), i, r.getNodeFromPath(B, x), _);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Nt = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), n.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let c = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + n.toolbar.default + '" aria-label="' + n.toolbar.default + '">(' + n.toolbar.default + ")</button></li>";
    for (let d = 0, f = l.length, i; d < f; d++)
      i = l[d], c += '<li><button type="button" class="se-btn-list" data-value="' + i.value + '" title="' + i.text + '" aria-label="' + i.text + '">' + i.text + "</button></li>";
    return c += "</ul></div>", o.innerHTML = c, o;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, n = this.util.getFormatElement(this.getSelectionNode()), o = n ? n.style.lineHeight + "" : "";
    if (o !== e.currentSize) {
      for (let l = 0, c = t.length; l < c; l++)
        o === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = o;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", n = this.getSelectedElements();
    for (let o = 0, l = n.length; o < l; o++)
      n[o].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Bt = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.template = {
      selectedIndex: -1
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const n = e.util.createElement("DIV");
    n.className = "se-list-layer";
    let o = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let l = 0, c = t.length, d; l < c; l++)
      d = t[l], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + d.name + '" aria-label="' + d.name + '">' + d.name + "</button></li>";
    return o += "</ul></div>", n.innerHTML = o, n;
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation(), this.context.template.selectedIndex = e.target.getAttribute("data-value") * 1;
    const t = this.options.templates[this.context.template.selectedIndex];
    if (t.html)
      this.setContents(t.html);
    else
      throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
    this.submenuOff();
  }
}, zt = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.paragraphStyle = {
      _classList: null
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.paragraphStyle._classList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const o = e.lang.menu, l = {
      spaced: {
        name: o.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: o.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: o.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, c = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, i = c.length, _, r, b, x; f < i; f++) {
      if (_ = c[f], typeof _ == "string") {
        const S = l[_.toLowerCase()];
        if (!S)
          continue;
        _ = S;
      }
      r = _.name, b = _.class ? ' class="' + _.class + '"' : "", x = _._class, d += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-value="' + _.class + '" title="' + r + '" aria-label="' + r + '"><div' + b + ">" + r + "</div></button></li>";
    }
    return d += "</ul></div>", n.innerHTML = d, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, n = this.util.getFormatElement(this.getSelectionNode());
    for (let o = 0, l = t.length; o < l; o++)
      this.util.hasClass(n, t[o].getAttribute("data-value")) ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null;
    for (; !/^UL$/i.test(t.tagName) && (n = t.getAttribute("data-value"), !n); )
      t = t.parentNode;
    if (!n)
      return;
    let o = this.getSelectedElements();
    if (o.length === 0 && (this.getRange_addLine(this.getRange(), null), o = this.getSelectedElements(), o.length === 0))
      return;
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let c = 0, d = o.length; c < d; c++)
      l(o[c], n);
    this.submenuOff(), this.history.push(!1);
  }
}, At = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.textStyle = {
      _styleList: null
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), n.textStyle._styleList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const o = {
      code: {
        name: e.lang.menu.code,
        class: "__se__t-code",
        tag: "code"
      },
      translucent: {
        name: e.lang.menu.translucent,
        style: "opacity: 0.5;",
        tag: "span"
      },
      shadow: {
        name: e.lang.menu.shadow,
        class: "__se__t-shadow",
        tag: "span"
      }
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(o);
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, f = l.length, i, _, r, b, x, S, B; d < f; d++) {
      if (i = l[d], b = "", S = "", x = [], typeof i == "string") {
        const F = o[i.toLowerCase()];
        if (!F)
          continue;
        i = F;
      }
      r = i.name, _ = i.tag || "span", B = i._class, i.style && (b += ' style="' + i.style + '"', S += i.style.replace(/:[^;]+(;|$)\s*/g, ","), x.push("style")), i.class && (b += ' class="' + i.class + '"', S += "." + i.class.trim().replace(/\s+/g, ",."), x.push("class")), S = S.replace(/,$/, ""), c += '<li><button type="button" class="se-btn-list' + (B ? " " + B : "") + '" data-command="' + _ + '" data-value="' + S + '" title="' + r + '" aria-label="' + r + '"><' + _ + b + ">" + r + "</" + _ + "></button></li>";
    }
    return c += "</ul></div>", n.innerHTML = c, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, n = this.context.textStyle._styleList, o = this.getSelectionNode();
    for (let l = 0, c = n.length, d, f, i; l < c; l++) {
      d = n[l], f = d.getAttribute("data-value").split(",");
      for (let _ = 0, r, b; _ < f.length; _++) {
        for (r = o, i = !1; r && !e.isFormatElement(r) && !e.isComponent(r); ) {
          if (r.nodeName.toLowerCase() === d.getAttribute("data-command").toLowerCase() && (b = f[_], /^\./.test(b) ? e.hasClass(r, b.replace(/^\./, "")) : r.style[b])) {
            i = !0;
            break;
          }
          r = r.parentNode;
        }
        if (!i)
          break;
      }
      i ? e.addClass(d, "active") : e.removeClass(d, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null, o = null;
    for (; !n && !/UL/i.test(t.tagName); ) {
      if (n = t.getAttribute("data-command"), n) {
        o = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!n)
      return;
    const l = o.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const c = o.classList;
    for (let i = 0, _ = c.length; i < _; i++)
      l.push("." + c[i]);
    const d = this.util.hasClass(t, "active") ? null : o.cloneNode(!1), f = d ? null : [o.nodeName];
    this.nodeChange(d, l, f, !0), this.submenuOff();
  }
};
var Mt = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      name: "dialog",
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(l) {
        const c = l.context;
        c.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let d = l.util.createElement("DIV");
        d.className = "se-dialog sun-editor-common";
        let f = l.util.createElement("DIV");
        f.className = "se-dialog-back", f.style.display = "none";
        let i = l.util.createElement("DIV");
        i.className = "se-dialog-inner", i.style.display = "none", d.appendChild(f), d.appendChild(i), c.dialog.modalArea = d, c.dialog.back = f, c.dialog.modal = i, c.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), c.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), c.element.relative.appendChild(d), d = null, f = null, i = null;
      },
      /**
       * @description Event to control the behavior of closing the dialog
       * @param {MouseEvent} e Event object
       * @private
       */
      _onMouseDown_dialog: function(l) {
        /se-dialog-inner/.test(l.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
      },
      /**
       * @description Event to close the window when the outside area of the dialog or close button is click
       * @param {MouseEvent} e Event object
       * @private
       */
      _onClick_dialog: function(l) {
        (/close/.test(l.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
      },
      /**
       * @description Open a Dialog plugin
       * @param {String} kind Dialog plugin name
       * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
       */
      open: function(l, c) {
        if (this.modalForm)
          return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
          /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = c, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = l, this.modalForm = this.context[l].modal;
        const d = this.context[l].focusElement;
        typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, c), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", d && d.focus();
      },
      _bindClose: null,
      /**
       * @description Close a Dialog plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
        const l = this.context.dialog.kind;
        this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[l].init == "function" && this.plugins[l].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: o
    })), o;
  });
})(Mt);
var ri = Mt.exports;
const We = /* @__PURE__ */ De(ri), ci = {
  name: "selectMenu",
  add: function(e) {
    e.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(e, t, n) {
    e.form.innerHTML = "<ul>" + n + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const n = t.querySelector(".se-select-list"), o = this.context.selectMenu.caller[e] = {
      form: n,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    n.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), n.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, o)), n.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, o));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const n = t.target.getAttribute("data-index");
    n && (e.index = n * 1);
  },
  onClick_list: function(e, t) {
    const n = t.target.getAttribute("data-index");
    n && e.clickMethod.call(this, e.items[n]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const n = e.menus, o = n.length, l = e.index = t >= o ? 0 : t < 0 ? o - 1 : t;
    for (let c = 0; c < o; c++)
      c === l ? this.util.addClass(n[c], "active") : this.util.removeClass(n[c], "active");
    e.item = e.items[l];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const n = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = n, n.clickMethod = t, n.callerName = e;
  },
  open: function(e, t) {
    const n = e.form;
    n.style.visibility = "hidden", n.style.display = "block", t(n), n.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    e && (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, Rt = {
  name: "anchor",
  add: function(e) {
    e.addModule([ci]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, n = e.options.linkRel, o = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, c = e.util.createElement("DIV");
    let d = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (n.length > 0) {
      d += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, i = n.length, _; f < i; f++)
        _ = n[f], d += '<li><button type="button" class="se-btn-list' + (o.indexOf(_) > -1 ? " se-checked" : "") + '" data-command="' + _ + '" title="' + _ + '" aria-label="' + _ + '"><span class="se-svg">' + l.checked + "</span>" + _ + "</button></li>";
      d += "</ul></div></div></div>";
    }
    return d += "</div></div>", c.innerHTML = d, c;
  },
  initEvent: function(e, t) {
    const n = this.plugins.anchor, o = this.context.anchor.caller[e] = {
      modal: t,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: !1,
      callerName: e
    };
    typeof o.linkDefaultRel.default == "string" && (o.linkDefaultRel.default = o.linkDefaultRel.default.trim()), typeof o.linkDefaultRel.check_new_window == "string" && (o.linkDefaultRel.check_new_window = o.linkDefaultRel.check_new_window.trim()), typeof o.linkDefaultRel.check_bookmark == "string" && (o.linkDefaultRel.check_bookmark = o.linkDefaultRel.check_bookmark.trim()), o.urlInput = t.querySelector(".se-input-url"), o.anchorText = t.querySelector("._se_anchor_text"), o.newWindowCheck = t.querySelector("._se_anchor_check"), o.downloadCheck = t.querySelector("._se_anchor_download"), o.download = t.querySelector("._se_anchor_download_icon"), o.preview = t.querySelector(".se-link-preview"), o.bookmark = t.querySelector("._se_anchor_bookmark_icon"), o.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (o.relButton = t.querySelector(".se-anchor-rel-btn"), o.relList = t.querySelector(".se-list-layer"), o.relPreview = t.querySelector(".se-anchor-rel-preview"), o.relButton.addEventListener("click", n.onClick_relButton.bind(this, o)), o.relList.addEventListener("click", n.onClick_relList.bind(this, o))), o.newWindowCheck.addEventListener("change", n.onChange_newWindowCheck.bind(this, o)), o.downloadCheck.addEventListener("change", n.onChange_downloadCheck.bind(this, o)), o.anchorText.addEventListener("input", n.onChangeAnchorText.bind(this, o)), o.urlInput.addEventListener("input", n.onChangeUrlInput.bind(this, o)), o.urlInput.addEventListener("keydown", n.onKeyDownUrlInput.bind(this, l)), o.urlInput.addEventListener("focus", n.onFocusUrlInput.bind(this, o, l)), o.urlInput.addEventListener("blur", n.onBlurUrlInput.bind(this, l)), o.bookmarkButton.addEventListener("click", n.onClick_bookmarkButton.bind(this, o));
  },
  on: function(e, t) {
    const n = this.plugins.anchor;
    if (!t)
      n.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const o = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = n.selfPathBookmark.call(this, o) ? o.substr(o.lastIndexOf("#")) : o, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, n.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), n.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(e) {
    const t = this._w.location.href.replace(/\/$/, "");
    return e.indexOf("#") === 0 || e.indexOf(t) === 0 && e.indexOf("#") === (t.indexOf("#") === -1 ? t.length : t.substr(0, t.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(e, t) {
    if (!t)
      this.plugins.anchor._closeRelMenu && this.plugins.anchor._closeRelMenu();
    else {
      const n = e.relButton, o = e.relList;
      this.util.addClass(n, "active"), o.style.visibility = "hidden", o.style.display = "block", this.options.rtl ? o.style.left = n.offsetLeft - o.offsetWidth - 1 + "px" : o.style.left = n.offsetLeft + n.offsetWidth + 1 + "px", o.style.top = n.offsetTop + n.offsetHeight / 2 - o.offsetHeight / 2 + "px", o.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(l, c, d) {
        d && (l.relButton.contains(d.target) || l.relList.contains(d.target)) || (this.util.removeClass(c, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, n), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const n = t.target, o = n.getAttribute("data-command");
    if (!o)
      return;
    const l = e.currentRel, c = this.util.toggleClass(n, "se-checked"), d = l.indexOf(o);
    c ? d === -1 && l.push(o) : d > -1 && l.splice(d, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const n = e.relList, o = e.currentRel = t ? t.split(" ") : [];
    if (!n)
      return;
    const l = n.querySelectorAll("button");
    for (let c = 0, d = l.length, f; c < d; c++)
      f = l[c].getAttribute("data-command"), o.indexOf(f) > -1 ? this.util.addClass(l[c], "se-checked") : this.util.removeClass(l[c], "se-checked");
    e.relPreview.title = e.relPreview.textContent = o.join(" ");
  },
  createHeaderList: function(e, t, n) {
    const o = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (o.length === 0)
      return;
    const l = new this._w.RegExp("^" + n.replace(/^#/, ""), "i"), c = [];
    let d = "";
    for (let f = 0, i = o.length, _; f < i; f++)
      _ = o[f], l.test(_.textContent) && (c.push(_), d += '<li class="se-select-item" data-index="' + f + '">' + _.textContent + "</li>");
    c.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, c, d), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
  },
  _setMenuListPosition: function(e, t) {
    t.style.top = e.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(e, t) {
    switch (t.keyCode) {
      case 38:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, -1);
        break;
      case 40:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, 1);
        break;
      case 13:
        e.index > -1 && (t.preventDefault(), t.stopPropagation(), this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(e, null)));
        break;
    }
  },
  setHeaderBookmark: function(e) {
    const t = this.context.anchor.callerContext, n = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = n, t.urlInput.value = "#" + n, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const n = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, n), this.plugins.anchor.selfPathBookmark.call(this, n) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, n) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const n = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, n) && this.plugins.anchor.createHeaderList.call(this, e, t, n);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const n = e.preview, o = this.options.linkProtocol, l = this.options.linkNoPrefix, c = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(o) === 0, d = o ? this._w.RegExp("^" + t.substr(0, o.length)).test(o) : !1;
    t = e.linkValue = n.textContent = t ? l ? t : o && !c && !d ? o + t : c ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, n, o, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && o.downloadCheck.checked ? e.setAttribute("download", n || t) : e.removeAttribute("download"), o.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const c = o.currentRel.join(" ");
    c ? e.rel = c : e.removeAttribute("rel"), e.href = t, l ? e.children.length === 0 && (e.textContent = "") : e.textContent = n;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0)
      return null;
    const n = e.linkValue, o = e.anchorText, l = o.value.length === 0 ? n : o.value, c = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, c, n, l, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", c;
  },
  onClick_bookmarkButton: function(e) {
    let t = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, t) ? (t = t.substr(1), e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext)) : (t = "#" + t, e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active"), e.downloadCheck.checked = !1, e.download.style.display = "none", this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, t)), e.urlInput.value = t, this.plugins.anchor.setLinkPreview.call(this, e, t), e.urlInput.focus();
  },
  onChange_newWindowCheck: function(e, t) {
    typeof e.linkDefaultRel.check_new_window == "string" && (t.target.checked ? this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_new_window)) : this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_new_window)));
  },
  onChange_downloadCheck: function(e, t) {
    t.target.checked ? (e.download.style.display = "block", e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), e.linkValue = e.preview.textContent = e.urlInput.value = e.urlInput.value.replace(/^\#+/, ""), typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_bookmark))) : (e.download.style.display = "none", typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_bookmark)));
  },
  _relMerge: function(e, t) {
    const n = e.currentRel;
    if (!t)
      return n.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const o = t.split(" ");
    for (let l = 0, c = o.length, d; l < c; l++)
      d = n.indexOf(o[l]), d === -1 && n.push(o[l]);
    return n.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t)
      return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const n = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = n.split(" "), n;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, Ht = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([We, Rt]);
    const t = e.context, n = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let o = this.setDialog(e);
    n.modal = o;
    let l = this.setController_LinkButton(e);
    n.linkController = l, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", o), n.focusElement = t.anchor.caller.link.urlInput, o = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), o = e.icons;
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + o.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return n.innerHTML = l, n;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, n = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + n.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + n.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  /**
   * @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "link", this.currentControllerName === "link");
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    try {
      const t = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, !1);
      if (t === null)
        return;
      if (this.context.dialog.updateModal) {
        const n = this.context.link._linkAnchor.childNodes[0];
        this.setRange(n, 0, n, n.textContent.length);
      } else {
        const n = this.getSelectedElements();
        if (n.length > 1) {
          const o = this.util.createElement(n[0].nodeName);
          if (o.appendChild(t), !this.insertNode(o, null, !0))
            return;
        } else if (!this.insertNode(t, null, !0))
          return;
        this.setRange(t.childNodes[0], 0, t.childNodes[0], t.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1);
    }
    return !1;
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
    else if (this.util.isAnchor(e) && e.getAttribute("data-image-link") === null)
      return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0;
    return !1;
  },
  /**
   * @Override dialog
   */
  on: function(e) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, e);
  },
  call_controller: function(e) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = e;
    const t = this.context.link.linkController, n = t.querySelector("a");
    n.href = e.href, n.title = e.textContent, n.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const n = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !1), o = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !0);
        this.setRange(n, 0, o, o.textContent.length), this.nodeChange(null, null, ["A"], !1);
      } else
        this.util.removeItem(this.context.link._linkAnchor), this.context.anchor.caller.link.linkAnchor = null, this.focus(), this.history.push(!1);
      this.controllersOff();
    }
  },
  /**
   * @Override dialog
   */
  init: function() {
    this.context.link.linkController.style.display = "none", this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};
var It = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      name: "component",
      /**
       * @description Create a container for the resizing component and insert the element.
       * @param {Element} cover Cover element (FIGURE)
       * @param {String} className Class name of container (fixed: se-component)
       * @returns {Element} Created container element
       */
      set_container: function(l, c) {
        const d = this.util.createElement("DIV");
        return d.className = "se-component " + c, d.appendChild(l), d;
      },
      /**
       * @description Cover the target element with a FIGURE element.
       * @param {Element} element Target element
       */
      set_cover: function(l) {
        const c = this.util.createElement("FIGURE");
        return c.appendChild(l), c;
      },
      /**
       * @description Return HTML string of caption(FIGCAPTION) element
       * @returns {String}
       */
      create_caption: function() {
        const l = this.util.createElement("FIGCAPTION");
        return l.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", l;
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: o
    })), o;
  });
})(It);
var ui = It.exports;
const Qe = /* @__PURE__ */ De(ui);
var Dt = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      name: "resizing",
      /**
       * @description Constructor
       * Require context properties when resizing module
          inputX: Element,
          inputY: Element,
          _container: null,
          _cover: null,
          _element: null,
          _element_w: 1,
          _element_h: 1,
          _element_l: 0,
          _element_t: 0,
          _defaultSizeX: 'auto',
          _defaultSizeY: 'auto',
          _origin_w: core.options.imageWidth === 'auto' ? '' : core.options.imageWidth,
          _origin_h: core.options.imageHeight === 'auto' ? '' : core.options.imageHeight,
          _proportionChecked: true,
          // -- select function --
          _resizing: core.options.imageResizing,
          _resizeDotHide: !core.options.imageHeightShow,
          _rotation: core.options.imageRotation,
          _onlyPercentage: core.options.imageSizeOnlyPercentage,
          _ratio: false,
          _ratioX: 1,
          _ratioY: 1
          _captionShow: true,
          // -- when used caption (_captionShow: true) --
          _caption: null,
          _captionChecked: false,
          captionCheckEl: null,
       * @param {Object} core Core object 
       */
      add: function(l) {
        const c = l.icons, d = l.context;
        d.resizing = {
          _resizeClientX: 0,
          _resizeClientY: 0,
          _resize_plugin: "",
          _resize_w: 0,
          _resize_h: 0,
          _origin_w: 0,
          _origin_h: 0,
          _rotateVertical: !1,
          _resize_direction: "",
          _move_path: null,
          _isChange: !1,
          alignIcons: {
            basic: c.align_justify,
            left: c.align_left,
            right: c.align_right,
            center: c.align_center
          }
        };
        let f = this.setController_resize(l);
        d.resizing.resizeContainer = f, d.resizing.resizeDiv = f.querySelector(".se-modal-resize"), d.resizing.resizeDot = f.querySelector(".se-resize-dot"), d.resizing.resizeDisplay = f.querySelector(".se-resize-display");
        let i = this.setController_button(l);
        d.resizing.resizeButton = i;
        let _ = d.resizing.resizeHandles = d.resizing.resizeDot.querySelectorAll("span");
        d.resizing.resizeButtonGroup = i.querySelector("._se_resizing_btn_group"), d.resizing.rotationButtons = i.querySelectorAll("._se_resizing_btn_group ._se_rotation"), d.resizing.percentageButtons = i.querySelectorAll("._se_resizing_btn_group ._se_percentage"), d.resizing.alignMenu = i.querySelector(".se-resizing-align-list"), d.resizing.alignMenuList = d.resizing.alignMenu.querySelectorAll("button"), d.resizing.alignButton = i.querySelector("._se_resizing_align_button"), d.resizing.autoSizeButton = i.querySelector("._se_resizing_btn_group ._se_auto_size"), d.resizing.captionButton = i.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(r) {
          r.preventDefault();
        }), _[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), _[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), i.addEventListener("click", this.onClick_resizeButton.bind(l)), d.element.relative.appendChild(f), d.element.relative.appendChild(i), f = null, i = null, _ = null;
      },
      /** resize controller, button (image, iframe, video) */
      setController_resize: function(l) {
        const c = l.util.createElement("DIV");
        return c.className = "se-controller se-resizing-container", c.style.display = "none", c.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', c;
      },
      setController_button: function(l) {
        const c = l.lang, d = l.icons, f = l.util.createElement("DIV");
        return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + d.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + d.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + d.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + d.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + d.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + d.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + d.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + d.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + d.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + d.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + d.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + d.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + d.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + d.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + c.controller.remove + "</span></span></button></div>", f;
      },
      /**
       * @description Gets the width size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeX: function(l, c, d, f) {
        return c || (c = l._element), d || (d = l._cover), f || (f = l._container), c ? /%$/.test(c.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : c.style.width : "";
      },
      /**
       * @description Gets the height size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeY: function(l, c, d, f) {
        return c || (c = l._element), d || (d = l._cover), f || (f = l._container), !f || !d ? c && c.style.height || "" : this.util.getNumber(d.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? d.style.height : !/%$/.test(c.style.height) || !/%$/.test(c.style.width) ? c.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
      },
      /**
       * @description Called at the "openModify" to put the size of the current target into the size input element.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Object} pluginObj Plugin object
       */
      _module_setModifyInputSize: function(l, c) {
        const d = l._onlyPercentage && this.context.resizing._rotateVertical;
        l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
        let f = d ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
        if (f === l._defaultSizeX && (f = ""), l._onlyPercentage && (f = this.util.getNumber(f, 2)), l.inputX.value = f, c.setInputSize.call(this, "x"), !l._onlyPercentage) {
          let i = d ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
          i === l._defaultSizeY && (i = ""), l._onlyPercentage && (i = this.util.getNumber(i, 2)), l.inputY.value = i;
        }
        l.inputX.disabled = !!d, l.inputY.disabled = !!d, l.proportion.disabled = !!d, c.setRatio.call(this);
      },
      /**
       * @description It is called in "setInputSize" (input tag keyupEvent), 
       * checks the value entered in the input tag, 
       * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {String} xy 'x': width, 'y': height
       */
      _module_setInputSize: function(l, c) {
        if (l._onlyPercentage) {
          c === "x" && l.inputX.value > 100 && (l.inputX.value = 100);
          return;
        }
        if (l.proportion.checked && l._ratio && /\d/.test(l.inputX.value) && /\d/.test(l.inputY.value)) {
          const d = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, f = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
          if (d !== f)
            return;
          const i = d === "%" ? 2 : 0;
          c === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, i), i) + f : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, i), i) + d;
        }
      },
      /**
       * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
       * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_setRatio: function(l) {
        const c = l.inputX.value, d = l.inputY.value;
        if (l.proportion.checked && /\d+/.test(c) && /\d+/.test(d)) {
          const f = c.replace(/\d+|\./g, "") || l.sizeUnit, i = d.replace(/\d+|\./g, "") || l.sizeUnit;
          if (f !== i)
            l._ratio = !1;
          else if (!l._ratio) {
            const _ = this.util.getNumber(c, 0), r = this.util.getNumber(d, 0);
            l._ratio = !0, l._ratioX = _ / r, l._ratioY = r / _;
          }
        } else
          l._ratio = !1;
      },
      /**
       * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_sizeRevert: function(l) {
        l._onlyPercentage ? l.inputX.value = l._origin_w > 100 ? 100 : l._origin_w : (l.inputX.value = l._origin_w, l.inputY.value = l._origin_h);
      },
      /**
       * @description Save the size data (element.setAttribute("data-size"))
       * Used at the "setSize" method
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_saveCurrentSize: function(l) {
        const c = this.plugins.resizing._module_getSizeX.call(this, l), d = this.plugins.resizing._module_getSizeY.call(this, l);
        l._element.setAttribute("data-size", c + "," + d), l._videoRatio && (l._videoRatio = d);
      },
      /**
       * @description Call the resizing module
       * @param {Element} targetElement Resizing target element
       * @param {string} plugin Plugin name
       * @returns {Object} Size of resizing div {w, h, t, l}
       */
      call_controller_resize: function(l, c) {
        const d = this.context.resizing, f = this.context[c];
        d._resize_plugin = c;
        const i = d.resizeContainer, _ = d.resizeDiv, r = this.util.getOffset(l, this.context.element.wysiwygFrame), b = d._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), x = b ? l.offsetHeight : l.offsetWidth, S = b ? l.offsetWidth : l.offsetHeight, B = r.top, F = r.left - this.context.element.wysiwygFrame.scrollLeft;
        i.style.top = B + "px", i.style.left = F + "px", i.style.width = x + "px", i.style.height = S + "px", _.style.top = "0px", _.style.left = "0px", _.style.width = x + "px", _.style.height = S + "px";
        let s = l.getAttribute("data-align") || "basic";
        s = s === "none" ? "basic" : s;
        const a = this.util.getParentElement(l, this.util.isComponent), u = this.util.getParentElement(l, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, l, u, a) || "auto", g = f._onlyPercentage && c === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, u, a) || "auto");
        this.util.changeTxt(d.resizeDisplay, this.lang.dialogBox[s] + " (" + h + g + ")"), d.resizeButtonGroup.style.display = f._resizing ? "" : "none";
        const m = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", p = d.resizeHandles;
        for (let E = 0, k = p.length; E < k; E++)
          p[E].style.display = m;
        if (f._resizing) {
          const E = d.rotationButtons;
          E[0].style.display = E[1].style.display = f._rotation ? "" : "none";
        }
        if (f._alignHide)
          d.alignButton.style.display = "none";
        else {
          d.alignButton.style.display = "";
          const E = d.alignMenuList;
          this.util.changeElement(d.alignButton.firstElementChild, d.alignIcons[s]);
          for (let k = 0, z = E.length; k < z; k++)
            E[k].getAttribute("data-value") === s ? this.util.addClass(E[k], "on") : this.util.removeClass(E[k], "on");
        }
        const y = d.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(a.style.width) ? this.util.getNumber(a.style.width, 0) / 100 + "" : "";
        for (let E = 0, k = y.length; E < k; E++)
          y[E].getAttribute("data-value") === C ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
        f._captionShow ? (d.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(d.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(d.captionButton, "active"), f._captionChecked = !1)) : d.captionButton.style.display = "none", i.style.display = "block";
        const v = { left: 0, top: 50 };
        this.options.iframe && (v.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, v.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(d.resizeButton, i, "bottom", v), this.controllersOn(i, d.resizeButton, this.util.setDisabledButtons.bind(this.util, !1, this.resizingDisabledButtons), l, c), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), d._resize_w = x, d._resize_h = S;
        const w = (l.getAttribute("origin-size") || "").split(",");
        return d._origin_w = w[0] || l.naturalWidth, d._origin_h = w[1] || l.naturalHeight, {
          w: x,
          h: S,
          t: B,
          l: F
        };
      },
      _closeAlignMenu: null,
      /**
       * @description Open align submenu of module
       */
      openAlignMenu: function() {
        const l = this.context.resizing.alignButton;
        this.util.addClass(l, "on"), this.context.resizing.alignMenu.style.top = l.offsetTop + l.offsetHeight + "px", this.context.resizing.alignMenu.style.left = l.offsetLeft - l.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = (function() {
          this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
        }).bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
      },
      /**
       * @description Click event of resizing toolbar
       * Performs the action of the clicked toolbar button.
       * @param {MouseEvent} e Event object
       */
      onClick_resizeButton: function(l) {
        l.stopPropagation();
        const c = l.target, d = c.getAttribute("data-command") || c.parentNode.getAttribute("data-command");
        if (!d)
          return;
        const f = c.getAttribute("data-value") || c.parentNode.getAttribute("data-value"), i = this.context.resizing._resize_plugin, _ = this.context[i], r = _._element, b = this.plugins[i];
        if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), d === "onalign"))) {
          switch (d) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, r), b.setAutoSize.call(this), this.selectComponent(r, i);
              break;
            case "percent":
              let x = this.plugins.resizing._module_getSizeY.call(this, _);
              if (this.context.resizing._rotateVertical) {
                const m = r.getAttribute("data-percentage");
                m && (x = m.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, r), b.setPercentSize.call(this, f * 100, this.util.getNumber(x, 0) === null || !/%$/.test(x) ? "" : x), this.selectComponent(r, i);
              break;
            case "mirror":
              const S = r.getAttribute("data-rotate") || "0";
              let B = r.getAttribute("data-rotateX") || "", F = r.getAttribute("data-rotateY") || "";
              f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? F = F ? "" : "180" : B = B ? "" : "180", r.setAttribute("data-rotateX", B), r.setAttribute("data-rotateY", F), this.plugins.resizing._setTransForm(r, S, B, F);
              break;
            case "rotate":
              const s = this.context.resizing, a = r.getAttribute("data-rotate") * 1 + f * 1, u = this._w.Math.abs(a) >= 360 ? 0 : a;
              r.setAttribute("data-rotate", u), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(u).toString()), this.plugins.resizing.setTransformSize.call(this, r, null, null), this.selectComponent(r, i);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const h = f === "basic" ? "none" : f;
              b.setAlign.call(this, h, null, null, null), this.selectComponent(r, i);
              break;
            case "caption":
              const g = !_._captionChecked;
              if (b.openModify.call(this, !0), _._captionChecked = _.captionCheckEl.checked = g, b.update_image.call(this, !1, !1, !1), g) {
                const m = this.util.getChildElement(_._caption, function(p) {
                  return p.nodeType === 3;
                });
                m ? this.setRange(m, 0, m, m.textContent.length) : _._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(r, i), b.openModify.call(this, !0);
              break;
            case "revert":
              b.setOriginSize.call(this), this.selectComponent(r, i);
              break;
            case "update":
              b.openModify.call(this), this.controllersOff();
              break;
            case "delete":
              b.destroy.call(this);
              break;
          }
          this.history.push(!1);
        }
      },
      /**
       * @description Initialize the transform style (rotation) of the element.
       * @param {Element} element Target element
       */
      resetTransform: function(l) {
        const c = (l.getAttribute("data-size") || l.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, l.style.maxWidth = "", l.style.transform = "", l.style.transformOrigin = "", l.setAttribute("data-rotate", ""), l.setAttribute("data-rotateX", ""), l.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, c[0] ? c[0] : "auto", c[1] ? c[1] : "", !0);
      },
      /**
       * @description Set the transform style (rotation) of the element.
       * @param {Element} element Target element
       * @param {Number|null} width Element's width size
       * @param {Number|null} height Element's height size
       */
      setTransformSize: function(l, c, d) {
        let f = l.getAttribute("data-percentage");
        const i = this.context.resizing._rotateVertical, _ = l.getAttribute("data-rotate") * 1;
        let r = "";
        if (f && !i)
          f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
        else {
          const b = this.util.getParentElement(l, "FIGURE"), x = c || l.offsetWidth, S = d || l.offsetHeight, B = (i ? S : x) + "px", F = (i ? x : S) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, x + "px", S + "px", !0), b.style.width = B, b.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : F, i) {
            let s = x / 2 + "px " + x / 2 + "px 0", a = S / 2 + "px " + S / 2 + "px 0";
            r = _ === 90 || _ === -270 ? a : s;
          }
        }
        l.style.transformOrigin = r, this.plugins.resizing._setTransForm(l, _.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), i ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
      },
      _setTransForm: function(l, c, d, f) {
        let i = (l.offsetWidth - l.offsetHeight) * (/-/.test(c) ? 1 : -1), _ = "";
        if (/[1-9]/.test(c) && (d || f))
          switch (_ = d ? "Y" : "X", c) {
            case "90":
              _ = d && f ? "X" : f ? _ : "";
              break;
            case "270":
              i *= -1, _ = d && f ? "Y" : d ? _ : "";
              break;
            case "-90":
              _ = d && f ? "Y" : d ? _ : "";
              break;
            case "-270":
              i *= -1, _ = d && f ? "X" : f ? _ : "";
              break;
            default:
              _ = "";
          }
        c % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + c + "deg)" + (d ? " rotateX(" + d + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (_ ? " translate" + _ + "(" + i + "px)" : "");
      },
      /**
       * @description The position of the caption is set automatically.
       * @param {Element} element Target element (not caption element)
       */
      setCaptionPosition: function(l) {
        const c = this.util.getChildElement(this.util.getParentElement(l, "FIGURE"), "FIGCAPTION");
        c && (c.style.marginTop = (this.context.resizing._rotateVertical ? l.offsetWidth - l.offsetHeight : 0) + "px");
      },
      /**
       * @description Mouse down event of resize handles
       * @param {MouseEvent} e Event object 
       */
      onMouseDown_resize_handle: function(l) {
        l.stopPropagation(), l.preventDefault();
        const c = this.context.resizing, d = c._resize_direction = l.target.classList[0];
        c._resizeClientX = l.clientX, c._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", c.resizeButton.style.display = "none", c.resizeDiv.style.float = /l/.test(d) ? "right" : /r/.test(d) ? "left" : "none";
        const f = (function(r) {
          if (r.type === "keydown" && r.keyCode !== 27)
            return;
          const b = c._isChange;
          c._isChange = !1, this.removeDocEvent("mousemove", i), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), r.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, d), b && this.history.push(!1));
        }).bind(this), i = this.plugins.resizing.resizing_element.bind(this, c, d, this.context[c._resize_plugin]);
        this.addDocEvent("mousemove", i), this.addDocEvent("mouseup", f), this.addDocEvent("keydown", f);
      },
      /**
       * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
       * The size of the module's "div" is adjusted according to the mouse move event.
       * @param {Object} contextResizing "core.context.resizing" object (binding argument)
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
       * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
       * @param {MouseEvent} e Event object
       */
      resizing_element: function(l, c, d, f) {
        const i = f.clientX, _ = f.clientY;
        let r = d._element_w, b = d._element_h;
        const x = d._element_w + (/r/.test(c) ? i - l._resizeClientX : l._resizeClientX - i), S = d._element_h + (/b/.test(c) ? _ - l._resizeClientY : l._resizeClientY - _), B = d._element_h / d._element_w * x;
        /t/.test(c) && (l.resizeDiv.style.top = d._element_h - (/h/.test(c) ? S : B) + "px"), /l/.test(c) && (l.resizeDiv.style.left = d._element_w - x + "px"), /r|l/.test(c) && (l.resizeDiv.style.width = x + "px", r = x), /^(t|b)[^h]$/.test(c) ? (l.resizeDiv.style.height = B + "px", b = B) : /^(t|b)h$/.test(c) && (l.resizeDiv.style.height = S + "px", b = S), l._resize_w = r, l._resize_h = b, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(r) + " x " + this._w.Math.round(b)), l._isChange = !0;
      },
      /**
       * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
       * Called at the mouse-up event registered in "onMouseDown_resize_handle".
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
       */
      cancel_controller_resize: function(l) {
        const c = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let d = this._w.Math.round(c ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(c ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!c && !/%$/.test(d)) {
          const r = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(d, 0) > r && (f = this._w.Math.round(f / d * r), d = r);
        }
        const i = this.context.resizing._resize_plugin;
        this.plugins[i].setSize.call(this, d, f, !1, l), c && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, d, f), this.selectComponent(this.context[i]._element, i);
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: o
    })), o;
  });
})(Dt);
var di = Dt.exports;
const Ot = /* @__PURE__ */ De(di);
var Ft = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      name: "fileManager",
      _xmlHttp: null,
      _checkMediaComponent: function(l) {
        return /IMG/i.test(l) ? !/FIGURE/i.test(l.parentElement.nodeName) || !/FIGURE/i.test(l.parentElement.parentElement.nodeName) : !0;
      },
      /**
       * @description Upload the file to the server.
       * @param {String} uploadUrl Upload server url
       * @param {Object|null} uploadHeader Request header
       * @param {FormData} formData FormData in body
       * @param {Function|null} callBack Success call back function
       * @param {Function|null} errorCallBack Error call back function
       * @example this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
       */
      upload: function(l, c, d, f, i) {
        this.showLoading();
        const _ = this.plugins.fileManager, r = _._xmlHttp = this.util.getXMLHttpRequest();
        if (r.onreadystatechange = _._callBackUpload.bind(this, r, f, i), r.open("post", l, !0), c !== null && typeof c == "object" && this._w.Object.keys(c).length > 0)
          for (let b in c)
            r.setRequestHeader(b, c[b]);
        r.send(d);
      },
      _callBackUpload: function(l, c, d) {
        if (l.readyState === 4)
          if (l.status === 200)
            try {
              c(l);
            } catch (f) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const f = l.responseText ? JSON.parse(l.responseText) : l;
            if (typeof d != "function" || d("", f, this)) {
              const i = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (f.errorMessage || l.responseText);
              throw this.functions.noticeOpen(i), Error(i);
            }
          }
      },
      /**
       * @description Checke the file's information and modify the tag that does not fit the format.
       * @param {String} pluginName Plugin name
       * @param {Array} tagNames Tag array to check
       * @param {Function|null} uploadEventHandler Event handler to process updated file info after checking (used in "setInfo")
       * @param {Function} modifyHandler A function to modify a tag that does not fit the format (Argument value: Tag element)
       * @param {Boolean} resizing True if the plugin is using a resizing module
       * @example 
       * const modifyHandler = function (tag) {
       *      imagePlugin.onModifyMode.call(this, tag, null);
       *      imagePlugin.openModify.call(this, true);
       *      imagePlugin.update_image.call(this, true, false, true);
       *  }.bind(this);
       *  this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
       */
      checkInfo: function(l, c, d, f, i) {
        let _ = [];
        for (let a = 0, u = c.length; a < u; a++)
          _ = _.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(c[a] + ':not([data-se-embed="true"])')));
        const r = this.plugins.fileManager, b = this.context[l], x = b._infoList, S = r.setInfo.bind(this);
        if (_.length === x.length)
          if (this._componentsInfoReset) {
            for (let a = 0, u = _.length; a < u; a++)
              S(l, _[a], d, null, i);
            return;
          } else {
            let a = !1;
            for (let u = 0, h = x.length, g; u < h; u++)
              if (g = x[u], _.filter(function(m) {
                return g.src === m.src && g.index.toString() === m.getAttribute("data-index");
              }).length === 0) {
                a = !0;
                break;
              }
            if (!a)
              return;
          }
        const B = i ? this.context.resizing._resize_plugin : "";
        i && (this.context.resizing._resize_plugin = l);
        const F = [], s = [];
        for (let a = 0, u = x.length; a < u; a++)
          s[a] = x[a].index;
        for (b.__updateTags = _; _.length > 0; ) {
          const a = _.shift();
          !this.util.getParentElement(a, this.util.isMediaComponent) || !r._checkMediaComponent(a) ? (F.push(b._infoIndex), f(a)) : !a.getAttribute("data-index") || s.indexOf(a.getAttribute("data-index") * 1) < 0 ? (F.push(b._infoIndex), a.removeAttribute("data-index"), S(l, a, d, null, i)) : F.push(a.getAttribute("data-index") * 1);
        }
        for (let a = 0, u; a < x.length; a++)
          u = x[a].index, !(F.indexOf(u) > -1) && (x.splice(a, 1), typeof d == "function" && d(null, u, "delete", null, 0, this), a--);
        i && (this.context.resizing._resize_plugin = B);
      },
      /**
       * @description Create info object of file and add it to "_infoList" (this.context[pluginName]._infoList[])
       * @param {String} pluginName Plugin name 
       * @param {Element} element 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       * @param {Object|null} file 
       * @param {Boolean} resizing True if the plugin is using a resizing module
       * @example 
       * uploadCallBack {.. file = { name: fileList[i].name, size: fileList[i].size };
       * this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
       */
      setInfo: function(l, c, d, f, i) {
        const _ = i ? this.context.resizing._resize_plugin : "";
        i && (this.context.resizing._resize_plugin = l);
        const r = this.plugins[l], b = this.context[l], x = b._infoList;
        let S = c.getAttribute("data-index"), B = null, F = "";
        if (f || (f = {
          name: c.getAttribute("data-file-name") || (typeof c.src == "string" ? c.src.split("/").pop() : ""),
          size: c.getAttribute("data-file-size") || 0
        }), !S || this._componentsInfoInit)
          F = "create", S = b._infoIndex++, c.setAttribute("data-index", S), c.setAttribute("data-file-name", f.name), c.setAttribute("data-file-size", f.size), B = {
            src: c.src,
            index: S * 1,
            name: f.name,
            size: f.size
          }, x.push(B);
        else {
          F = "update", S *= 1;
          for (let s = 0, a = x.length; s < a; s++)
            if (S === x[s].index) {
              B = x[s];
              break;
            }
          B || (S = b._infoIndex++, B = { index: S }, x.push(B)), B.src = c.src, B.name = c.getAttribute("data-file-name"), B.size = c.getAttribute("data-file-size") * 1;
        }
        if (B.element = c, B.delete = r.destroy.bind(this, c), B.select = (function(s) {
          s.scrollIntoView(!0), this._w.setTimeout(r.select.bind(this, s));
        }).bind(this, c), i) {
          if (!c.getAttribute("origin-size") && c.naturalWidth && c.setAttribute("origin-size", c.naturalWidth + "," + c.naturalHeight), !c.getAttribute("data-origin")) {
            const s = this.util.getParentElement(c, this.util.isMediaComponent), a = this.util.getParentElement(c, "FIGURE"), u = this.plugins.resizing._module_getSizeX.call(this, b, c, a, s), h = this.plugins.resizing._module_getSizeY.call(this, b, c, a, s);
            c.setAttribute("data-origin", u + "," + h), c.setAttribute("data-size", u + "," + h);
          }
          if (!c.style.width) {
            const s = (c.getAttribute("data-size") || c.getAttribute("data-origin") || "").split(",");
            r.onModifyMode.call(this, c, null), r.applySize.call(this, s[0], s[1]);
          }
          this.context.resizing._resize_plugin = _;
        }
        typeof d == "function" && d(c, S, F, B, --b._uploadFileLength < 0 ? 0 : b._uploadFileLength, this);
      },
      /**
       * @description Delete info object at "_infoList"
       * @param {String} pluginName Plugin name 
       * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      deleteInfo: function(l, c, d) {
        if (c >= 0) {
          const f = this.context[l]._infoList;
          for (let i = 0, _ = f.length; i < _; i++)
            if (c === f[i].index) {
              f.splice(i, 1), typeof d == "function" && d(null, c, "delete", null, 0, this);
              return;
            }
        }
      },
      /**
       * @description Reset info object and "_infoList = []", "_infoIndex = 0"
       * @param {String} pluginName Plugin name 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      resetInfo: function(l, c) {
        const d = this.context[l];
        if (typeof c == "function") {
          const f = d._infoList;
          for (let i = 0, _ = f.length; i < _; i++)
            c(null, f[i].index, "delete", null, 0, this);
        }
        d._infoList = [], d._infoIndex = 0;
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: o
    })), o;
  });
})(Ft);
var fi = Ft.exports;
const et = /* @__PURE__ */ De(fi), Pt = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([We, Rt, Qe, Ot, et]);
    const t = e.options, n = e.context, o = n.image = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._imageSizeUnit,
      _linkElement: "",
      _altText: "",
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _v_src: { _linkValue: "" },
      svgDefaultSize: "30%",
      base64RenderIndex: 0,
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "auto",
      _defaultSizeY: "auto",
      _origin_w: t.imageWidth === "auto" ? "" : t.imageWidth,
      _origin_h: t.imageHeight === "auto" ? "" : t.imageHeight,
      _proportionChecked: !0,
      _resizing: t.imageResizing,
      _resizeDotHide: !t.imageHeightShow,
      _rotation: t.imageRotation,
      _alignHide: !t.imageAlignShow,
      _onlyPercentage: t.imageSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !0,
      _captionChecked: !1,
      _caption: null,
      captionCheckEl: null
    };
    let l = this.setDialog(e);
    o.modal = l, o.imgInputFile = l.querySelector("._se_image_file"), o.imgUrlFile = l.querySelector("._se_image_url"), o.focusElement = o.imgInputFile || o.imgUrlFile, o.altText = l.querySelector("._se_image_alt"), o.captionCheckEl = l.querySelector("._se_image_check_caption"), o.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(o.imgInputFile, o.imgUrlFile, o.previewSrc)), o.imgUrlFile && o.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(o.previewSrc, o._v_src, t.linkProtocol)), o.imgInputFile && o.imgUrlFile && o.imgInputFile.addEventListener("change", this._fileInputChange.bind(o));
    const c = l.querySelector(".__se__gallery");
    c && c.addEventListener("click", this._openGallery.bind(e)), o.proportion = {}, o.inputX = {}, o.inputY = {}, t.imageResizing && (o.proportion = l.querySelector("._se_image_check_proportion"), o.inputX = l.querySelector("._se_image_size_x"), o.inputY = l.querySelector("._se_image_size_y"), o.inputX.value = t.imageWidth, o.inputY.value = t.imageHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), n.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), o.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content se-dialog-image", o.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + n.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + n.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + n.toolbar.imageGallery + '" aria-label="' + n.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + n.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const c = t.imageSizeOnlyPercentage, d = c ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', c || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + n.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (c ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + d + (c ? ' max="100"' : "") + f + "/><label" + d + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + n.dialogBox.proportion + '</label><button type="button" title="' + n.dialogBox.revertButton + '" aria-label="' + n.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + n.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + n.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + n.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + n.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + n.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
  },
  _fileInputChange: function() {
    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _openGallery: function() {
    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
  },
  _setUrlInput: function(e) {
    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.src, this.imgUrlFile.focus();
  },
  _onLinkPreview: function(e, t, n) {
    const o = n.target.value.trim();
    e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["img"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.image._element, n = this.util.getParentElement(t, this.util.isMediaComponent) || t, o = t.getAttribute("data-index") * 1;
    let l = n.previousElementSibling || n.nextElementSibling;
    const c = n.parentNode;
    this.util.removeItem(n), this.plugins.image.init.call(this), this.controllersOff(), c !== this.context.element.wysiwyg && this.util.removeItemAllParents(c, function(d) {
      return d.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", o, this.functions.onImageUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.image;
    e ? t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.imageWidth === t._defaultSizeX ? "" : this.options.imageWidth, t.inputY.value = t._origin_h = this.options.imageHeight === t._defaultSizeY ? "" : this.options.imageHeight, t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple")), this.plugins.anchor.on.call(this, t.anchorCtx, e);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "image", this.currentControllerName === "image");
  },
  openTab: function(e) {
    const t = this.context.image.modal, n = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(n.tagName))
      return !1;
    const o = n.getAttribute("data-tab-link"), l = "_se_tab_content";
    let c, d, f;
    for (d = t.getElementsByClassName(l), c = 0; c < d.length; c++)
      d[c].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), c = 0; c < f.length; c++)
      this.util.removeClass(f[c], "active");
    return t.querySelector("." + l + "_" + o).style.display = "block", this.util.addClass(n, "active"), o === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : o === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, n = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && n.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), n.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, n = [];
    for (let f = 0, i = e.length; f < i; f++)
      /image/i.test(e[f].type) && (n.push(e[f]), t += e[f].size);
    const o = this.options.imageUploadSizeLimit;
    if (o > 0) {
      let f = 0;
      const i = this.context.image._infoList;
      for (let _ = 0, r = i.length; _ < r; _++)
        f += i[_].size * 1;
      if (t + f > o) {
        this.closeLoading();
        const _ = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + o / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(_, { limitSize: o, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(_);
        return;
      }
    }
    const l = this.context.image;
    l._uploadFileLength = n.length;
    const d = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(n, d, this, (function(i) {
        i && this._w.Array.isArray(i.result) ? this.plugins.image.register.call(this, d, i) : this.plugins.image.upload.call(this, d, i);
      }).bind(this));
      if (typeof f > "u")
        return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (n = f);
    }
    this.plugins.image.upload.call(this, d, n);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.image.error.call(this, t, null);
      return;
    }
    const n = this.options.imageUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof n == "string" && n.length > 0) {
      const l = new FormData();
      for (let c = 0; c < o; c++)
        l.append("file-" + c, t[c]);
      this.plugins.fileManager.upload.call(this, n, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, o, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.image.error.call(this, n.errorMessage, n) : this.plugins.image.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result;
    for (let o = 0, l = n.length, c; o < l; o++)
      if (c = { name: n[o].name, size: n[o].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, n[o].url, e.element, c);
        break;
      } else
        this.plugins.image.create_image.call(this, n[o].url, e.anchor, e.inputWidth, e.inputHeight, e.align, c, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, n, o, l, c, d, f) {
    try {
      this.context.image.base64RenderIndex = d;
      const i = this._w.FileReader, _ = [d];
      this.context.image.inputX.value = n, this.context.image.inputY.value = o;
      for (let r = 0, b, x; r < d; r++)
        b = new i(), x = e[r], b.onload = (function(S, B, F, s, a) {
          _[a] = { result: S.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, B, _, F, t, n, o, l, c), this.closeLoading());
        }).bind(this, b, f, this.context.image._element, x, r), b.readAsDataURL(x);
    } catch (i) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + i.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, n, o, l, c, d, f) {
    const i = this.plugins.image.update_src, _ = this.plugins.image.create_image;
    for (let r = 0, b = t.length; r < b; r++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[r].file.name), this.context.image._element.setAttribute("data-file-size", t[r].file.size), i.call(this, t[r].result, n, t[r].file)) : _.call(this, t[r].result, o, l, c, d, t[r].file, f);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e)
      return !1;
    const t = this.context.image;
    try {
      const n = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, n) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, n, t._altText);
    } catch (n) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + n.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  onRender_link: function(e, t) {
    return t ? (t.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t.href), t.appendChild(e), t) : e;
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    this.plugins.resizing._module_setInputSize.call(this, this.context.image, e);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.image);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    const e = this.plugins.image, t = this.context.image, n = (function(o) {
      e.onModifyMode.call(this, o, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const l = this.util.getFormatElement(o);
      l && (t._align = l.style.textAlign || l.style.float), this.util.isAnchor(o.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, n, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, n, o, l, c, d) {
    const f = this.plugins.image, i = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let _ = this.util.createElement("IMG");
    _.src = e, _.alt = d, _.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, _, t ? t.cloneNode(!1) : null), i._resizing && _.setAttribute("data-proportion", i._proportionChecked);
    const r = this.plugins.component.set_cover.call(this, t), b = this.plugins.component.set_container.call(this, r, "se-image-container");
    i._captionChecked && (i._caption = this.plugins.component.create_caption.call(this), r.appendChild(i._caption)), i._element = _, i._cover = r, i._container = b, f.applySize.call(this, n, o), f.setAlign.call(this, l, _, r, b), _.onload = f._image_create_onload.bind(this, _, i.svgDefaultSize, b), this.insertComponent(b, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", _, this.functions.onImageUpload, c, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, n) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const o = this.appendFormatTag(n, null);
      o && this.setRange(o, 0, o, 0);
    }
  },
  update_image: function(e, t, n) {
    const o = this.context.image;
    let l = o._element, c = o._cover, d = o._container, f = !1;
    c === null && (f = !0, l = o._element.cloneNode(!0), c = this.plugins.component.set_cover.call(this, l)), d === null ? (c = c.cloneNode(!0), l = c.querySelector("img"), f = !0, d = this.plugins.component.set_container.call(this, c, "se-image-container")) : f && (d.innerHTML = "", d.appendChild(c), o._cover = c, o._element = l, f = !1);
    let i;
    const _ = this.util.isNumber(o.inputX.value) ? o.inputX.value + o.sizeUnit : o.inputX.value, r = this.util.isNumber(o.inputY.value) ? o.inputY.value + o.sizeUnit : o.inputY.value;
    /%$/.test(l.style.width) ? i = _ !== d.style.width || r !== d.style.height : i = _ !== l.style.width || r !== l.style.height, l.alt = o._altText;
    let b = !1;
    o._captionChecked ? o._caption || (o._caption = this.plugins.component.create_caption.call(this), c.appendChild(o._caption), b = !0) : o._caption && (this.util.removeItem(o._caption), o._caption = null, b = !0);
    let x = null;
    const S = this.plugins.anchor.createAnchor.call(this, o.anchorCtx, !0);
    if (S)
      o._linkElement !== S || f && !d.contains(S) ? (o._linkElement = S.cloneNode(!1), c.insertBefore(this.plugins.image.onRender_link.call(this, l, o._linkElement), o._caption), x = o._element) : o._linkElement.setAttribute("data-image-link", "image");
    else if (o._linkElement !== null) {
      const F = l;
      if (F.setAttribute("data-image-link", ""), c.contains(o._linkElement)) {
        const s = F.cloneNode(!0);
        c.removeChild(o._linkElement), c.insertBefore(s, o._caption), o._element = l = s;
      }
    }
    let B = null;
    if (f) {
      if (B = this.util.isRangeFormatElement(o._element.parentNode) || this.util.isWysiwygDiv(o._element.parentNode) ? o._element : this.util.isAnchor(o._element.parentNode) ? o._element.parentNode : this.util.getFormatElement(o._element) || o._element, this.util.getParentElement(o._element, this.util.isNotCheckingNode))
        B = x ? S : o._element, B.parentNode.replaceChild(d, B);
      else if (this.util.isListCell(B)) {
        const F = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === B;
        });
        B.insertBefore(d, F), this.util.removeItem(o._element), this.util.removeEmptyNode(F, null, !0);
      } else if (this.util.isFormatElement(B)) {
        const F = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === B;
        });
        B = this.util.splitElement(B, F), B.parentNode.insertBefore(d, B), this.util.removeItem(o._element), this.util.removeEmptyNode(B, null, !0), B.children.length === 0 && (B.innerHTML = this.util.htmlRemoveWhiteSpace(B.innerHTML));
      } else if (this.util.isFormatElement(B.parentNode)) {
        const F = B.parentNode;
        F.parentNode.insertBefore(d, B.previousSibling ? F.nextElementSibling : F), o.__updateTags.map(function(s) {
          return B.contains(s);
        }).length === 0 && this.util.removeItem(B);
      } else
        B.parentNode.replaceChild(d, B);
      l = d.querySelector("img"), o._element = l, o._cover = c, o._container = d;
    }
    x && (f ? (this.util.removeItem(x), this.util.getListChildren(S, function(F) {
      return /IMG/i.test(F.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (b || !o._onlyPercentage && i) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && o._captionChecked) && (/%$/.test(o.inputX.value) || /%$/.test(o.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(o.inputX.value, 0), this.util.getNumber(o.inputY.value, 0))), o._resizing && (l.setAttribute("data-proportion", o._proportionChecked), i && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), n || this.history.push(!1);
  },
  update_src: function(e, t, n) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, n, !0)), this.selectComponent(t, "image");
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    if (!e)
      return;
    const n = this.context.image;
    n._linkElement = n.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._caption = this.util.getChildElement(n._cover, "FIGCAPTION"), n._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(n._linkElement, n.anchorCtx), t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
    let o = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin"), l, c;
    o ? (o = o.split(","), l = o[0], c = o[1]) : t && (l = t.w, c = t.h), n._origin_w = l || e.style.width || e.width || "", n._origin_h = c || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.image;
    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, (t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const n = this.context.image;
    return e || (e = n.inputX.value || this.options.imageWidth), t || (t = n.inputY.value || this.options.imageHeight), n._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, n, o) {
    const l = this.context.image, c = /^(rw|lw)$/.test(o) && /\d+/.test(l._element.style.height);
    /^(th|bh)$/.test(o) && /\d+/.test(l._element.style.width) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), c || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), n || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    const e = this.context.image;
    e._caption && (e._caption.style.marginTop = ""), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function() {
    const e = this.context.image;
    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
    const t = (e._element.getAttribute("data-origin") || "").split(","), n = t[0], o = t[1];
    t && (e._onlyPercentage || /%$/.test(n) && (/%$/.test(o) || !/\d/.test(o)) ? this.plugins.image.setPercentSize.call(this, n, o) : this.plugins.image.setSize.call(this, n, o), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const n = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + n.sizeUnit : t || "";
    const o = /%$/.test(t);
    n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = o ? t : "", n._element.style.width = "100%", n._element.style.height = o ? "" : t, n._element.style.maxWidth = "", n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, n._element), this.plugins.resizing._module_saveCurrentSize.call(this, n);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.image;
    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, n, o) {
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), n || (n = l._cover), o || (o = l._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", n.style.width = o.style.width) : (o.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, l._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, Vt = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([We, Qe, Ot, et]);
    const t = e.options, n = e.context, o = n.video = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._videoSizeUnit,
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _youtubeQuery: t.youtubeQuery,
      _videoRatio: t.videoRatio * 100 + "%",
      _defaultRatio: t.videoRatio * 100 + "%",
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "100%",
      _defaultSizeY: t.videoRatio * 100 + "%",
      _origin_w: t.videoWidth === "100%" ? "" : t.videoWidth,
      _origin_h: t.videoHeight === "56.25%" ? "" : t.videoHeight,
      _proportionChecked: !0,
      _resizing: t.videoResizing,
      _resizeDotHide: !t.videoHeightShow,
      _rotation: t.videoRotation,
      _alignHide: !t.videoAlignShow,
      _onlyPercentage: t.videoSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !1
    };
    let l = this.setDialog(e);
    o.modal = l, o.videoInputFile = l.querySelector("._se_video_file"), o.videoUrlFile = l.querySelector(".se-input-url"), o.focusElement = o.videoUrlFile || o.videoInputFile, o.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(o.videoInputFile, o.videoUrlFile, o.preview)), o.videoInputFile && o.videoUrlFile && o.videoInputFile.addEventListener("change", this._fileInputChange.bind(o)), o.videoUrlFile && o.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(o.preview, o, t.linkProtocol)), o.proportion = {}, o.videoRatioOption = {}, o.inputX = {}, o.inputY = {}, t.videoResizing && (o.proportion = l.querySelector("._se_video_check_proportion"), o.videoRatioOption = l.querySelector(".se-video-ratio"), o.inputX = l.querySelector("._se_video_size_x"), o.inputY = l.querySelector("._se_video_size_y"), o.inputX.value = t.videoWidth, o.inputY.value = t.videoHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), o.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), n.dialog.modal.appendChild(l), l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const c = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], d = t.videoRatio, f = t.videoSizeOnlyPercentage, i = f ? ' style="display: none !important;"' : "", _ = t.videoHeightShow ? "" : ' style="display: none !important;"', r = t.videoRatioShow ? "" : ' style="display: none !important;"', b = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + _ + ">" + n.dialogBox.height + '</label><label class="size-h"' + r + ">(" + n.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + b + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + _ + '/><select class="se-input-select se-video-ratio" title="' + n.dialogBox.ratio + '" aria-label="' + n.dialogBox.ratio + '"' + r + ">", _ || (l += '<option value=""> - </option>');
      for (let x = 0, S = c.length; x < S; x++)
        l += '<option value="' + c[x].value + '"' + (d.toString() === c[x].value.toString() ? " selected" : "") + ">" + c[x].name + "</option>";
      l += '</select><button type="button" title="' + n.dialogBox.revertButton + '" aria-label="' + n.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + i + b + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + n.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + n.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + n.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + n.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + n.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, n) {
    const o = n.target.value.trim();
    /^<iframe.*\/iframe>$/.test(o) ? (e._linkValue = o, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
  },
  createIframeTag: function() {
    const e = this.util.createElement("IFRAME");
    return this.plugins.video._setIframeAttrs.call(this, e), e;
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["iframe", "video"],
  /**
   * @Override core, resizing, fileManager
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.video._element, n = this.context.video._container, o = t.getAttribute("data-index") * 1;
    let l = n.previousElementSibling || n.nextElementSibling;
    const c = n.parentNode;
    this.util.removeItem(n), this.plugins.video.init.call(this), this.controllersOff(), c !== this.context.element.wysiwyg && this.util.removeItemAllParents(c, function(d) {
      return d.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", o, this.functions.onVideoUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.video;
    e ? t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.videoWidth === t._defaultSizeX ? "" : this.options.videoWidth, t.inputY.value = t._origin_h = this.options.videoHeight === t._defaultSizeY ? "" : this.options.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "video", this.currentControllerName === "video");
  },
  setVideoRatio: function(e) {
    const t = this.context.video, n = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = n ? n * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = n ? n * 100 + "%" : "", t.inputY.value = "";
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    const n = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, n, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || n._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, n = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), n.setup_url.call(this, t._linkValue));
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, n = [];
    for (let d = 0, f = e.length; d < f; d++)
      /video/i.test(e[d].type) && (n.push(e[d]), t += e[d].size);
    const o = this.options.videoUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.video._infoList;
      for (let i = 0, _ = f.length; i < _; i++)
        d += f[i].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const i = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + o / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(i, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(i);
        return;
      }
    }
    const l = this.context.video;
    l._uploadFileLength = n.length;
    const c = {
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const d = this.functions.onVideoUploadBefore(n, c, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, c, f) : this.plugins.video.upload.call(this, c, f);
      }).bind(this));
      if (typeof d > "u")
        return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (n = d);
    }
    this.plugins.video.upload.call(this, c, n);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.video.error.call(this, t, null);
      return;
    }
    const n = this.options.videoUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof n == "string" && n.length > 0) {
      const l = new FormData();
      for (let c = 0; c < o; c++)
        l.append("file-" + c, t[c]);
      this.plugins.fileManager.upload.call(this, n, this.options.videoUploadHeader, l, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.video.error.call(this, n.errorMessage, n) : this.plugins.video.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result, o = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, c = n.length, d; l < c; l++)
      d = { name: n[l].name, size: n[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : o.cloneNode(!1), n[l].url, e.inputWidth, e.inputHeight, e.align, d, e.isUpdate);
    this.closeLoading();
  },
  setup_url: function(e) {
    try {
      const t = this.context.video;
      if (e || (e = t._linkValue), !e || /^<iframe.*\/iframe>$/.test(e) && (e = new this._w.DOMParser().parseFromString(e, "text/html").querySelector("iframe").src, e.length === 0))
        return !1;
      if (/youtu\.?be/.test(e)) {
        if (/^http/.test(e) || (e = "https://" + e), e = e.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(e) || (e = e.replace(e.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), t._youtubeQuery.length > 0)
          if (/\?/.test(e)) {
            const n = e.split("?");
            e = n[0] + "?" + t._youtubeQuery + "&" + n[1];
          } else
            e += "?" + t._youtubeQuery;
      } else
        /vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1));
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, n, o, l, c, d) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let i = null, _ = null, r = !1;
    if (d) {
      if (e = f._element, e.src !== t) {
        r = !0;
        const F = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((F || s) && !/^iframe$/i.test(e.nodeName)) {
          const a = this.plugins.video.createIframeTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else if (!F && !s && !/^videoo$/i.test(e.nodeName)) {
          const a = this.plugins.video.createVideoTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else
          e.src = t;
      }
      _ = f._container, i = this.util.getParentElement(e, "FIGURE");
    } else
      r = !0, e.src = t, f._element = e, i = this.plugins.component.set_cover.call(this, e), _ = this.plugins.component.set_container.call(this, i, "se-video-container");
    f._cover = i, f._container = _;
    const b = this.plugins.resizing._module_getSizeX.call(this, f) !== (n || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (o || f._videoRatio), x = !d || b;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let S = !1;
    x && (S = this.plugins.video.applySize.call(this)), S && l === "center" || this.plugins.video.setAlign.call(this, null, e, i, _);
    let B = !0;
    if (d)
      f._resizing && this.context.resizing._rotateVertical && x && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (B = this.insertComponent(_, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const F = this.appendFormatTag(_, null);
      F && this.setRange(F, 0, F, 0);
    }
    B && (r && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, c, !0), d && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e)
      return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let n = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), c = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const d = n.querySelector("figcaption");
      let f = null;
      d && (f = this.util.createElement("DIV"), f.innerHTML = d.innerHTML, this.util.removeItem(d));
      const i = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, i[0] || o.style.width || o.width || "", i[1] || o.style.height || o.height || "");
      const _ = this.util.getFormatElement(o);
      if (_ && (t._align = _.style.textAlign || _.style.float), this.plugins.video.setAlign.call(this, null, e, l, c), this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(c, o);
      else if (this.util.isListCell(n)) {
        const r = this.util.getParentElement(o, function(b) {
          return b.parentNode === n;
        });
        n.insertBefore(c, r), this.util.removeItem(o), this.util.removeEmptyNode(r, null, !0);
      } else if (this.util.isFormatElement(n)) {
        const r = this.util.getParentElement(o, function(b) {
          return b.parentNode === n;
        });
        n = this.util.splitElement(n, r), n.parentNode.insertBefore(c, n), this.util.removeItem(o), this.util.removeEmptyNode(n, null, !0), n.children.length === 0 && (n.innerHTML = this.util.htmlRemoveWhiteSpace(n.innerHTML));
      } else
        n.parentNode.replaceChild(c, n);
      f && n.parentNode.insertBefore(f, c.nextElementSibling);
    } catch (d) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", d);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const n = this.context.video;
    n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
    let o = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin"), l, c;
    o ? (o = o.split(","), l = o[0], c = o[1]) : t && (l = t.w, c = t.h), n._origin_w = l || e.style.width || e.width || "", n._origin_h = c || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const n = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, n) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(n, 2) : n);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const n = this.context.video, o = n.videoRatioOption.options;
    /%$/.test(e) || n._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), n.inputY.placeholder = "";
    for (let l = 0, c = o.length; l < c; l++)
      o[l].value === e ? (t = o[l].selected = !0, n.inputY.placeholder = e ? e * 100 + "%" : "") : o[l].selected = !1;
    return t;
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const n = this.context.video;
    return e || (e = n.inputX.value || this.options.videoWidth), t || (t = n.inputY.value || this.options.videoHeight), n._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(n._videoRatio) ? n._videoRatio : n._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || n._videoRatio || n._defaultRatio, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, n, o) {
    const l = this.context.video, c = /^(rw|lw)$/.test(o), d = /^(th|bh)$/.test(o);
    d || (e = this.util.getNumber(e, 0)), c || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", d || (l._element.style.width = e), c || (l._cover.style.paddingBottom = l._cover.style.height = t), !d && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !c && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", n || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function(e) {
    const t = this.context.video;
    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
    const n = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (n) {
      const o = n[0], l = n[1];
      t._onlyPercentage || /%$/.test(o) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, o, l) : this.plugins.video.setSize.call(this, o, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const n = this.context.video;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + n.sizeUnit : t || n._defaultRatio, n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = t, n._cover.style.paddingBottom = t, n._element.style.width = "100%", n._element.style.height = "100%", n._element.style.maxWidth = "", n._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, n);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.video;
    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, n, o) {
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), n || (n = l._cover), o || (o = l._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", n.style.width = o.style.width, n.style.height = n.style.height, n.style.paddingBottom = /%$/.test(n.style.height) ? this.util.getNumber(this.util.getNumber(n.style.height, 2) / 100 * this.util.getNumber(n.style.width, 2), 2) + "%" : n.style.height) : (o.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", n.style.paddingBottom = n.style.height), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, l._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Ut = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([We, Qe, et]);
    const t = e.context, n = t.audio = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      targetSelect: null,
      _origin_w: e.options.audioWidth,
      _origin_h: e.options.audioHeight,
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null
    };
    let o = this.setDialog(e);
    n.modal = o, n.audioInputFile = o.querySelector("._se_audio_files"), n.audioUrlFile = o.querySelector(".se-input-url"), n.focusElement = n.audioInputFile || n.audioUrlFile, n.preview = o.querySelector(".se-link-preview");
    let l = this.setController(e);
    n.controller = l, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.audioInputFile && o.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.audioInputFile, n.audioUrlFile, n.preview)), n.audioInputFile && n.audioUrlFile && n.audioInputFile.addEventListener("change", this._fileInputChange.bind(n)), l.addEventListener("click", this.onClick_controller.bind(e)), n.audioUrlFile && n.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, e.options.linkProtocol)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(l), o = null, l = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + n.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, n = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + n.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  // Disable url input when uploading files
  _fileInputChange: function() {
    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  // Disable url input when uploading files
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  // create new audio tag
  _createAudioTag: function() {
    const e = this.util.createElement("AUDIO");
    this.plugins.audio._setTagAttrs.call(this, e);
    const t = this.context.audio._origin_w, n = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + n), e.style.cssText = (t ? "width:" + t + "; " : "") + (n ? "height:" + n + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
  },
  _onLinkPreview: function(e, t, n) {
    const o = n.target.value.trim();
    e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  /**
   * @Required @Override fileManager
   */
  fileTags: ["audio"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.audio.onModifyMode.call(this, e);
  },
  /**
   * @Override fileManager, resizing 
   */
  destroy: function(e) {
    e = e || this.context.audio._element;
    const t = this.util.getParentElement(e, this.util.isComponent) || e, n = e.getAttribute("data-index") * 1, o = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(o), this.plugins.fileManager.deleteInfo.call(this, "audio", n, this.functions.onAudioUpload), this.history.push(!1);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.audio;
    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"));
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "audio", this.currentControllerName === "audio");
  },
  submit: function(e) {
    const t = this.context.audio;
    e.preventDefault(), e.stopPropagation();
    try {
      t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, n = [];
    for (let d = 0, f = e.length; d < f; d++)
      /audio/i.test(e[d].type) && (n.push(e[d]), t += e[d].size);
    const o = this.options.audioUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.audio._infoList;
      for (let i = 0, _ = f.length; i < _; i++)
        d += f[i].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const i = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + o / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(i, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(i);
        return;
      }
    }
    const l = this.context.audio;
    l._uploadFileLength = n.length;
    const c = {
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const d = this.functions.onAudioUploadBefore(n, c, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, c, f) : this.plugins.audio.upload.call(this, c, f);
      }).bind(this));
      if (typeof d > "u")
        return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (n = d);
    }
    this.plugins.audio.upload.call(this, c, n);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.audio.error.call(this, t, null);
      return;
    }
    const n = this.options.audioUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let c = 0; c < o; c++)
      l.append("file-" + c, t[c]);
    this.plugins.fileManager.upload.call(this, n, this.options.audioUploadHeader, l, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.audio.error.call(this, n.errorMessage, n) : this.plugins.audio.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result;
    for (let o = 0, l = n.length, c, d; o < l; o++)
      e.isUpdate ? d = e.element : d = this.plugins.audio._createAudioTag.call(this), c = { name: n[o].name, size: n[o].size }, this.plugins.audio.create_audio.call(this, d, n[o].url, c, e.isUpdate);
    this.closeLoading();
  },
  setupUrl: function(e) {
    try {
      if (e.length === 0)
        return !1;
      this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_audio: function(e, t, n, o) {
    const l = this.context.audio;
    if (o)
      if (l._element && (e = l._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const c = this.plugins.component.set_cover.call(this, e), d = this.plugins.component.set_container.call(this, c, "");
      if (!this.insertComponent(d, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const f = this.appendFormatTag(d, null);
        f && this.setRange(f, 0, f, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, n, !1), o && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let n = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!1);
    const l = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(c, o);
      else if (this.util.isListCell(n)) {
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === n;
        });
        n.insertBefore(c, d), this.util.removeItem(o), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(n)) {
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === n;
        });
        n = this.util.splitElement(n, d), n.parentNode.insertBefore(c, n), this.util.removeItem(o), this.util.removeEmptyNode(n, null, !0), n.children.length === 0 && (n.innerHTML = this.util.htmlRemoveWhiteSpace(n.innerHTML));
      } else
        n.parentNode.replaceChild(c, n);
    } catch (d) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", d);
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1), this.plugins.audio.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e) {
    const t = this.context.audio;
    this.setControllerPosition(t.controller, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t.controller, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    if (this.context.audio.audioUrlFile) {
      const t = this.context.audio;
      t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src;
    }
    e || this.plugins.dialog.open.call(this, "audio", !0);
  },
  onClick_controller: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff());
  },
  onControllerOff: function(e) {
    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none";
  },
  /**
   * @Required @Override dialog
   */
  init: function() {
    if (this.context.dialog.updateModal)
      return;
    const e = this.context.audio;
    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null;
  }
}, ft = "https://katex.org/docs/supported.html", Wt = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([We]);
    const t = e.context;
    t.math = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let n = this.setDialog(e);
    t.math.modal = n, t.math.focusElement = n.querySelector(".se-math-exp"), t.math.previewElement = n.querySelector(".se-math-preview"), t.math.fontSizeElement = n.querySelector(".se-math-size"), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(l) {
      this.fontSize = l.target.value;
    }).bind(t.math.previewElement.style), !1);
    let o = this.setController_MathButton(e);
    t.math.mathController = o, t.math._mathExp = null, n.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), o.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(n), t.element.relative.appendChild(o), n = null, o = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), o = e.options.mathFontSize;
    let l = o[0].value;
    n.className = "se-dialog-content", n.style.display = "none";
    let c = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + ft + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let d = 0, f = o.length, i; d < f; d++)
      i = o[d], i.default && (l = i.value), c += '<option value="' + i.value + '"' + (i.default ? " selected" : "") + ">" + i.text + "</option>";
    return c += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = l, n.innerHTML = c, n;
  },
  /** modify controller button */
  setController_MathButton: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "math", this.currentControllerName === "math");
  },
  /**
   * @Override core - managedTagsInfo
   */
  managedTags: function() {
    return {
      className: "katex",
      method: function(e) {
        if (!e.getAttribute("data-exp") || !this.options.katex)
          return;
        const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
        e.innerHTML = t.querySelector(".katex").innerHTML, e.setAttribute("contenteditable", !1);
      }
    };
  },
  _renderer: function(e) {
    let t = "";
    try {
      this.util.removeClass(this.context.math.focusElement, "se-error"), t = this.options.katex.src.renderToString(e, { throwOnError: !0, displayMode: !0 });
    } catch (n) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + ft + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", n);
    }
    return t;
  },
  _renderMathExp: function(e, t) {
    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value);
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    const t = (function() {
      if (this.context.math.focusElement.value.trim().length === 0)
        return !1;
      const n = this.context.math, o = n.focusElement.value, l = n.previewElement.querySelector(".katex");
      if (!l)
        return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(o)), l.setAttribute("data-font-size", n.fontSizeElement.value), l.style.fontSize = n.fontSizeElement.value, this.context.dialog.updateModal) {
        const c = this.util.getParentElement(n._mathExp, ".katex");
        c.parentNode.replaceChild(l, c), this.setRange(l, 0, l, 1);
      } else {
        const c = this.getSelectedElements();
        if (c.length > 1) {
          const f = this.util.createElement(c[0].nodeName);
          if (f.appendChild(l), !this.insertNode(f, null, !0))
            return !1;
        } else if (!this.insertNode(l, null, !0))
          return !1;
        const d = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(d, l.nextSibling), this.setRange(l, 0, l, 1);
      }
      return n.focusElement.value = "", n.fontSizeElement.value = "1em", n.previewElement.style.fontSize = "1em", n.previewElement.innerHTML = "", !0;
    }).bind(this);
    try {
      t() && (this.plugins.dialog.close.call(this), this.history.push(!1));
    } catch {
      this.plugins.dialog.close.call(this);
    } finally {
      this.closeLoading();
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
    else if (e.getAttribute("data-exp"))
      return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0;
    return !1;
  },
  on: function(e) {
    if (!e)
      this.plugins.math.init.call(this);
    else {
      const t = this.context.math;
      if (t._mathExp) {
        const n = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), o = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = n, t.fontSizeElement.value = o, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, n), t.previewElement.style.fontSize = o;
      }
    }
  },
  call_controller: function(e) {
    this.context.math._mathExp = e;
    const t = this.context.math.mathController;
    this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "math");
  },
  onClick_mathController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff());
  },
  init: function() {
    const e = this.context.math;
    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = "";
  }
};
var Zt = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(l) {
        const c = l.context;
        c.fileBrowser = {
          _closeSignal: !1,
          area: null,
          header: null,
          tagArea: null,
          body: null,
          list: null,
          tagElements: null,
          items: [],
          selectedTags: [],
          selectorHandler: null,
          contextPlugin: "",
          columnSize: 4
        };
        let d = l.util.createElement("DIV");
        d.className = "se-file-browser sun-editor-common";
        let f = l.util.createElement("DIV");
        f.className = "se-file-browser-back";
        let i = l.util.createElement("DIV");
        i.className = "se-file-browser-inner", i.innerHTML = this.set_browser(l), d.appendChild(f), d.appendChild(i), this._loading = d.querySelector(".se-loading-box"), c.fileBrowser.area = d, c.fileBrowser.header = i.querySelector(".se-file-browser-header"), c.fileBrowser.titleArea = i.querySelector(".se-file-browser-title"), c.fileBrowser.tagArea = i.querySelector(".se-file-browser-tags"), c.fileBrowser.body = i.querySelector(".se-file-browser-body"), c.fileBrowser.list = i.querySelector(".se-file-browser-list"), c.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), c.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), i.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), i.addEventListener("click", this._onClick_browser.bind(l)), c.element.relative.appendChild(d), d = null, f = null, i = null;
      },
      set_browser: function(l) {
        const c = l.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + c.dialogBox.close + '" aria-label="' + c.dialogBox.close + '">' + l.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
      },
      /**
       * @description Event to control the behavior of closing the browser
       * @param {MouseEvent} e Event object
       * @private
       */
      _onMouseDown_browser: function(l) {
        /se-file-browser-inner/.test(l.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
      },
      /**
       * @description Event to close the window when the outside area of the browser or close button is click
       * @param {MouseEvent} e Event object
       * @private
       */
      _onClick_browser: function(l) {
        l.stopPropagation(), (/close/.test(l.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
      },
      /**
       * @description Open a file browser plugin
       * @param {String} pluginName Plugin name using the file browser
       * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
       */
      open: function(l, c) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(_) {
          /27/.test(_.keyCode) && this.plugins.fileBrowser.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const d = this.context.fileBrowser;
        d.contextPlugin = l, d.selectorHandler = c;
        const f = this.context[l], i = f.listClass;
        this.util.hasClass(d.list, i) || (d.list.className = "se-file-browser-list " + i), this.options.popupDisplay === "full" ? d.area.style.position = "fixed" : d.area.style.position = "absolute", d.titleArea.textContent = f.title, d.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
      },
      _bindClose: null,
      /**
       * @description Close a fileBrowser plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        const l = this.plugins.fileBrowser;
        l._xmlHttp && l._xmlHttp.abort(), l._bindClose && (this._d.removeEventListener("keydown", l._bindClose), l._bindClose = null);
        const c = this.context.fileBrowser;
        c.area.style.display = "none", c.selectorHandler = null, c.selectedTags = [], c.items = [], c.list.innerHTML = c.tagArea.innerHTML = c.titleArea.textContent = "", typeof this.plugins[c.contextPlugin].init == "function" && this.plugins[c.contextPlugin].init.call(this), c.contextPlugin = "";
      },
      /**
       * @description Show file browser loading box
       */
      showBrowserLoading: function() {
        this._loading.style.display = "block";
      },
      /**
       * @description Close file browser loading box
       */
      closeBrowserLoading: function() {
        this._loading.style.display = "none";
      },
      _drawFileList: function(l, c) {
        const d = this.plugins.fileBrowser, f = d._xmlHttp = this.util.getXMLHttpRequest();
        if (f.onreadystatechange = d._callBackGet.bind(this, f), f.open("get", l, !0), c !== null && typeof c == "object" && this._w.Object.keys(c).length > 0)
          for (let i in c)
            f.setRequestHeader(i, c[i]);
        f.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(l) {
        if (l.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, l.status === 200)
            try {
              const c = JSON.parse(l.responseText);
              c.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, c.result, !0) : c.nullMessage && (this.context.fileBrowser.list.innerHTML = c.nullMessage);
            } catch (c) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + c.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), l.status !== 0) {
            const c = l.responseText ? JSON.parse(l.responseText) : l, d = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (c.errorMessage || l.responseText);
            throw Error(d);
          }
        }
      },
      _drawListItem: function(l, c) {
        const d = this.context.fileBrowser, f = this.context[d.contextPlugin], i = [], _ = l.length, r = f.columnSize || d.columnSize, b = r <= 1 ? 1 : Math.round(_ / r) || 1, x = f.itemTemplateHandler;
        let S = "", B = '<div class="se-file-item-column">', F = 1;
        for (let s = 0, a, u; s < _; s++)
          if (a = l[s], u = a.tag ? typeof a.tag == "string" ? a.tag.split(",") : a.tag : [], u = a.tag = u.map(function(h) {
            return h.trim();
          }), B += x(a), (s + 1) % b === 0 && F < r && s + 1 < _ && (F++, B += '</div><div class="se-file-item-column">'), c && u.length > 0)
            for (let h = 0, g = u.length, m; h < g; h++)
              m = u[h], m && i.indexOf(m) === -1 && (i.push(m), S += '<a title="' + m + '" aria-label="' + m + '">' + m + "</a>");
        B += "</div>", d.list.innerHTML = B, c && (d.items = l, d.tagArea.innerHTML = S, d.tagElements = d.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(l) {
        const c = l.target;
        if (!this.util.isAnchor(c))
          return;
        const d = c.textContent, f = this.plugins.fileBrowser, i = this.context.fileBrowser, _ = i.tagArea.querySelector('a[title="' + d + '"]'), r = i.selectedTags, b = r.indexOf(d);
        b > -1 ? (r.splice(b, 1), this.util.removeClass(_, "on")) : (r.push(d), this.util.addClass(_, "on")), f._drawListItem.call(
          this,
          r.length === 0 ? i.items : i.items.filter(function(x) {
            return x.tag.some(function(S) {
              return r.indexOf(S) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(l) {
        l.preventDefault(), l.stopPropagation();
        const c = this.context.fileBrowser, d = c.list;
        let f = l.target, i = null;
        if (f === d)
          return;
        for (; d !== f.parentNode && (i = f.getAttribute("data-command"), !i); )
          f = f.parentNode;
        if (!i)
          return;
        (c.selectorHandler || this.context[c.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: o
    })), o;
  });
})(Zt);
var hi = Zt.exports;
const gi = /* @__PURE__ */ De(hi), qt = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([gi]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      // @Required @Override fileBrowser - File browser window title.
      url: e.options.imageGalleryUrl,
      // @Required @Override fileBrowser - File server url.
      header: e.options.imageGalleryHeader,
      // @Required @Override fileBrowser - File server http header.
      listClass: "se-image-list",
      // @Required @Override fileBrowser - Class name of list div.
      itemTemplateHandler: this.drawItems,
      // @Required @Override fileBrowser - Function that defines the HTML of an file item.
      selectorHandler: this.setImage.bind(e),
      // @Required @Override fileBrowser - Function that action when item click.
      columnSize: 4
      // @Option @Override fileBrowser - Number of "div.se-file-item-column" to be created (default: 4)
    };
  },
  /**
   * @Required @Override fileBrowser
   * @description Open a file browser.
   * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
   */
  open: function(e) {
    this.plugins.fileBrowser.open.call(this, "imageGallery", e);
  },
  /**
   * @Required @Override fileBrowser
   * @description Define the HTML of the item to be put in "div.se-file-item-column".
   * Format: [
   *      { src: "image src", name: "name(@option)", alt: "image alt(@option)", tag: "tag name(@option)" }
   * ]
   * @param {Object} item Item of the response data's array
   */
  drawItems: function(e) {
    const t = e.src.split("/").pop();
    return '<div class="se-file-item-img"><img src="' + (e.thumbnail || e.src) + '" alt="' + (e.alt || t) + '" data-command="pick" data-value="' + (e.src || e.thumbnail) + '"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>";
  },
  setImage: function(e, t) {
    this.callPlugin("image", (function() {
      const n = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", n, e.alt);
    }).bind(this), null);
  }
}, pi = { blockquote: bt, align: vt, font: yt, fontSize: Ct, fontColor: xt, hiliteColor: Et, horizontalRule: St, list: Tt, table: kt, formatBlock: Lt, lineHeight: Nt, template: Bt, paragraphStyle: zt, textStyle: At, link: Ht, image: Pt, video: Vt, audio: Ut, math: Wt, imageGallery: qt }, mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  align: vt,
  audio: Ut,
  blockquote: bt,
  default: pi,
  font: yt,
  fontColor: xt,
  fontSize: Ct,
  formatBlock: Lt,
  hiliteColor: Et,
  horizontalRule: St,
  image: Pt,
  imageGallery: qt,
  lineHeight: Nt,
  link: Ht,
  list: Tt,
  math: Wt,
  paragraphStyle: zt,
  table: kt,
  template: Bt,
  textStyle: At,
  video: Vt
}, Symbol.toStringTag, { value: "Module" })), _i = /* @__PURE__ */ _t(mi), ht = {
  // rtl icon
  rtl: {
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 15.8" xml:space="preserve"><g><path d="M0.3,0.1c0.3,0,0.5,0,0.7,0c1,0.1,1.7,0.1,2.2,0.1H4L7.2,0l0.2,1.1H7c-0.5,0-1,0.1-1.5,0.3v0.4l0.3,1.9L6,4.4L6.3,6 l0.1,0.4l0.1,0.5c0.1,0.2,0.1,0.4,0.2,0.7s0.1,0.6,0.2,0.9L7,9.1l0.6,2.8l0.3,1.4c0.1,0.4,0.2,0.7,0.4,1c0.4,0.2,0.8,0.3,1.2,0.4 l0.8,0.2l0.2,0.9l-1.1,0c-0.9-0.1-1.5-0.1-1.8-0.1h-2c-0.9,0.1-1.4,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0H3.4c-0.1,0-0.2,0-0.2,0 l-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6l0.7-0.1c0.4,0,0.8-0.1,1.2-0.2c0-0.1,0-0.2,0-0.3l-0.1-0.5l-0.4-2.4L4,9.6L3.4,6.4 C3.2,5.7,3,4.7,2.7,3.3c0-0.3-0.1-0.5-0.1-0.8C2.5,2.1,2.4,1.9,2.3,1.6C2,1.4,1.6,1.3,1.3,1.2C0.9,1.2,0.5,1.1,0.2,0.9L0,0.4L0,0 L0.3,0.1L0.3,0.1z"/></g></svg>',
    indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M13.1,3.5L15.7,6c0.1,0.1,0.1,0.3,0,0.4l-2.5,2.5C13.1,9,13,9,12.9,9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V3.7 c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C13,3.4,13.1,3.4,13.1,3.5z"/></g></svg>',
    outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M15.5,3.4c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2v5.1c0,0.1,0,0.1-0.1,0.2C15.6,9,15.5,9,15.5,9 c-0.1,0-0.1,0-0.2-0.1l-2.5-2.5c-0.1-0.1-0.1-0.3,0-0.4l2.5-2.5C15.3,3.4,15.4,3.4,15.5,3.4z"/></g></svg>',
    list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><path d="M12.4,10.7c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C15.7,9.8,15,9,14.1,9c-0.4,0-0.9,0.2-1.2,0.5 C12.5,9.8,12.4,10.2,12.4,10.7C12.4,10.7,12.4,10.7,12.4,10.7z M12.4,6.2c0,0.9,0.8,1.7,1.7,1.7c0.4,0,0.9-0.2,1.2-0.5 c0.3-0.3,0.4-0.7,0.4-1.1c0-0.9-0.7-1.7-1.6-1.7C13.1,4.6,12.4,5.3,12.4,6.2C12.4,6.2,12.4,6.2,12.4,6.2z M0,9.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1l10.7,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3V9.8c0-0.1,0-0.1-0.1-0.2 C11.1,9.6,11,9.6,11,9.6l-10.7,0c-0.1,0-0.1,0-0.2,0.1C0,9.7,0,9.8,0,9.8L0,9.8z M12.9,2.9c0.3,0.3,0.7,0.5,1.2,0.5 c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.7,0-2.4C14.9,0.2,14.5,0,14.1,0c-0.4,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2 C12.4,2.1,12.5,2.6,12.9,2.9z M0,5.3V7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.1,0,0.2-0.1 c0.1-0.1,0.1-0.1,0.1-0.2V5.3c0,0,0,0,0,0c0-0.1-0.1-0.3-0.3-0.3H0.3c-0.1,0-0.1,0-0.2,0.1C0,5.2,0,5.3,0,5.3L0,5.3z M0,0.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1h10.7c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2V0.8c0-0.1,0-0.1-0.1-0.2 c0-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.1,0-0.2,0.1C0,0.7,0,0.8,0,0.8L0,0.8z"/></g></svg>',
    list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M0,11.5l0,1.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2v-1.7 c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.2,0-0.2,0.1C0,11.4,0,11.4,0,11.5L0,11.5z M0,8.7c0,0.1,0,0.1,0.1,0.2 C0.1,8.9,0.2,9,0.3,9H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V7c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-10.7,0 c-0.1,0-0.2,0-0.2,0.1C0,6.8,0,6.9,0,7C0,7,0,8.7,0,8.7z M0,2.5v1.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l10.7,0 c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V2.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0H0.3c-0.1,0-0.1,0-0.2,0 C0,2.3,0,2.4,0,2.5L0,2.5z"/></g><path d="M15.6,14.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l0.9-1v-0.8h-2.9v1.3h0.9v-0.5h0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3 s-0.2,0.3-0.4,0.5l-0.3,0.3l0.2,0.5c0.6,0,0.9,0.1,0.9,0.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.7-0.1-0.9-0.3 l-0.5,0.8c0.4,0.4,0.9,0.6,1.5,0.6c0.4,0,0.9-0.1,1.2-0.4C15.5,15.1,15.6,14.7,15.6,14.2z"/><path d="M15.6,8.7h-0.9v0.5h-1.1c0-0.2,0.2-0.4,0.4-0.5c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.2,0.5-0.3,0.7-0.6c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.4-0.2-0.8-0.5-1c-0.6-0.4-1.4-0.5-2-0.1c-0.3,0.2-0.5,0.4-0.6,0.7L13.3,7c0.1-0.3,0.4-0.5,0.7-0.5c0.1,0,0.3,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.2,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.3,0,0.5h3.2L15.6,8.7L15.6,8.7z"/><path d="M15.6,3.6h-1V0h-0.9l-1.2,1.1l0.6,0.7c0.2-0.1,0.3-0.3,0.4-0.5l0,0v2.2h-0.9v0.9h3L15.6,3.6L15.6,3.6z"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M7.4,9.9l3.1,3.1c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0,0,0,0,0,0c0.7-0.7,0.7-1.9,0-2.6L9.9,7.3 c0-0.1,0-0.2,0-0.3C9.9,7,10,7,10.1,7l2.2-0.2c0.1,0,0.1,0,0.2,0.1l2.1,2.1c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1-0.3,1.5c-0.8,2-3.2,3-5.2,2.2c-0.5-0.2-0.9-0.5-1.3-0.9l-2.1-2.1c-0.1,0-0.1-0.1-0.1-0.2L7,10.1C7,10,7,9.9,7.1,9.9 C7.2,9.8,7.3,9.9,7.4,9.9z M1.2,1.1C1.6,0.7,2,0.4,2.5,0.3c1-0.4,2.1-0.4,3.1,0C6,0.4,6.5,0.7,6.8,1.1L9,3.2C9,3.3,9.1,3.3,9,3.4 L8.8,5.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0L5.3,2.7C5,2.3,4.5,2.1,4,2.1c-0.5,0-0.9,0.2-1.3,0.5c0,0,0,0,0,0 C2,3.4,2,4.5,2.7,5.2l3.1,3.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.1-0.2,0.1L3.5,9C3.4,9,3.4,9,3.3,8.9L1.2,6.8c0,0,0,0,0,0 C-0.4,5.2-0.4,2.7,1.2,1.1L1.2,1.1z M14.3,6h-2.6c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0.1-0.3l2.5-0.7 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2l0.1,0.8c0,0.1,0,0.1-0.1,0.2C14.5,6,14.4,6,14.3,6L14.3,6z M10.2,4.1 c0,0.1-0.1,0.2-0.2,0.2l0,0c0,0,0,0,0,0C9.8,4.2,9.7,4.1,9.8,4L9.7,1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0h0.8 c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1,0,0.2L10.2,4.1L10.2,4.1z M1.5,9.7h1.3h1.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2-0.1,0.3l-2.5,0.6 H1.6c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2L1.2,9.9c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1L1.5,9.7z M5.6,11.6 C5.6,11.6,5.6,11.6,5.6,11.6c0-0.1,0.1-0.2,0.3-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.2v2.6c0,0.1,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L5,14.5c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L5.6,11.6L5.6,11.6z"/></g></svg>',
    unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M14.6,14.6c1.6-1.6,1.6-4.1,0-5.7l0,0l-3.1-3.1l-1.2,1.6l2.9,2.9c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.9,2.1-2.1,2.1l0,0 c-0.6,0-1.1-0.2-1.5-0.6l-0.4-0.4l-1.7,1l0.8,0.8C10.4,16.2,13,16.2,14.6,14.6L14.6,14.6L14.6,14.6z M3.6,6C3,5.9,2.6,5.5,2.3,5 S1.9,4,2.1,3.4C2.3,2.9,2.6,2.5,3,2.2C3.5,2,4.1,1.9,4.6,2l3.3,1.4l0.5-2L5.1,0.1C4-0.1,2.9,0,2,0.5C1.1,1.1,0.4,1.9,0.2,3 C-0.1,4,0,5.1,0.6,6C1.1,6.9,1.9,7.6,3,7.8l5.4,2l0.5-2L6.2,6.9L3.6,6z"/></g></svg>'
  },
  // common, ltr icon
  redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
  undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
  bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
  underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
  italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
  strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
  subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
  superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
  erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
  indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
  preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
  print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
  template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
  line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
  paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
  text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
  save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
  arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
  align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
  highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
  table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
  show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
  cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
  unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
  auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
  insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
  insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
  insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
  delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
  delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
  fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
  rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
  rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
  mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
  mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
  checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
  line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
  audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
  image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
  bookmark: '<svg viewBox="0 0 24 24"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" /></svg>',
  dir_ltr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"/></svg>',
  dir_rtl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z"/></svg>',
  // Error
  alert_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>',
  // More icons
  more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
  more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
  // Not currently used
  attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
  magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
  empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
};
var $t = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(o) {
      if (!o.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return n(o);
    };
  })(typeof window < "u" ? window : ue, function(t, n) {
    const o = {
      code: "en",
      toolbar: {
        default: "Default",
        save: "Save",
        font: "Font",
        formats: "Formats",
        fontSize: "Size",
        bold: "Bold",
        underline: "Underline",
        italic: "Italic",
        strike: "Strike",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Remove Format",
        fontColor: "Font Color",
        hiliteColor: "Highlight Color",
        indent: "Indent",
        outdent: "Outdent",
        align: "Align",
        alignLeft: "Align left",
        alignRight: "Align right",
        alignCenter: "Align center",
        alignJustify: "Align justify",
        list: "List",
        orderList: "Ordered list",
        unorderList: "Unordered list",
        horizontalRule: "Horizontal line",
        hr_solid: "Solid",
        hr_dotted: "Dotted",
        hr_dashed: "Dashed",
        table: "Table",
        link: "Link",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Full screen",
        showBlocks: "Show blocks",
        codeView: "Code view",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Quote",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Line height",
        paragraphStyle: "Paragraph style",
        textStyle: "Text style",
        imageGallery: "Image gallery",
        dir_ltr: "Left to right",
        dir_rtl: "Right to left",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Insert Link",
          url: "URL to link",
          text: "Text to display",
          newWindowCheck: "Open in new window",
          downloadLinkCheck: "Download link",
          bookmark: "Bookmark"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Mathematical Notation",
          fontSizeLabel: "Font Size",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Insert image",
          file: "Select from files",
          url: "Image URL",
          altText: "Alternative text"
        },
        videoBox: {
          title: "Insert Video",
          file: "Select from files",
          url: "Media embed URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Insert Audio",
          file: "Select from files",
          url: "Audio URL"
        },
        browser: {
          tags: "Tags",
          search: "Search"
        },
        caption: "Insert description",
        close: "Close",
        submitButton: "Submit",
        revertButton: "Revert",
        proportion: "Constrain proportions",
        basic: "Basic",
        left: "Left",
        right: "Right",
        center: "Center",
        width: "Width",
        height: "Height",
        size: "Size",
        ratio: "Ratio"
      },
      controller: {
        edit: "Edit",
        unlink: "Unlink",
        remove: "Remove",
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row",
        insertColumnBefore: "Insert column before",
        insertColumnAfter: "Insert column after",
        deleteColumn: "Delete column",
        fixedColumnWidth: "Fixed column width",
        resize100: "Resize 100%",
        resize75: "Resize 75%",
        resize50: "Resize 50%",
        resize25: "Resize 25%",
        autoSize: "Auto size",
        mirrorHorizontal: "Mirror, Horizontal",
        mirrorVertical: "Mirror, Vertical",
        rotateLeft: "Rotate left",
        rotateRight: "Rotate right",
        maxSize: "Max size",
        minSize: "Min size",
        tableHeader: "Table header",
        mergeCells: "Merge cells",
        splitCells: "Split Cells",
        HorizontalSplit: "Horizontal split",
        VerticalSplit: "Vertical split"
      },
      menu: {
        spaced: "Spaced",
        bordered: "Bordered",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Shadow",
        code: "Code"
      }
    };
    return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: o
    })), o;
  });
})($t);
var bi = $t.exports;
const vi = /* @__PURE__ */ De(bi), He = {
  _d: null,
  _w: null,
  isIE: null,
  isIE_Edge: null,
  isOSX_IOS: null,
  isChromium: null,
  isResizeObserverSupported: null,
  _propertiesInit: function() {
    this._d || (this._d = document, this._w = window, this.isIE = navigator.userAgent.indexOf("Trident") > -1, this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1, this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform), this.isChromium = !!window.chrome, this.isResizeObserverSupported = typeof ResizeObserver == "function");
  },
  _allowedEmptyNodeList: ".se-component, pre, blockquote, hr, li, table, img, iframe, video, audio, canvas",
  /**
   * @description HTML Reserved Word Converter.
   * @param {String} contents 
   * @returns {String} HTML string
   * @private
   */
  _HTMLConvertor: function(e) {
    const t = { "&": "&amp;", " ": "&nbsp;", "'": "&apos;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
    return e.replace(/&|\u00A0|'|"|<|>/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
    });
  },
  /**
   * @description Unicode Character 'ZERO WIDTH SPACE' (\u200B)
   */
  zeroWidthSpace: String.fromCharCode(8203),
  /**
   * @description Regular expression to find 'zero width space' (/\u200B/g)
   */
  zeroWidthRegExp: new RegExp(String.fromCharCode(8203), "g"),
  /**
   * @description Regular expression to find only 'zero width space' (/^\u200B+$/)
   */
  onlyZeroWidthRegExp: new RegExp("^" + String.fromCharCode(8203) + "+$"),
  fontValueMap: {
    "xx-small": 1,
    "x-small": 2,
    small: 3,
    medium: 4,
    large: 5,
    "x-large": 6,
    "xx-large": 7
  },
  /**
   * @description A method that checks If the text is blank or to see if it contains 'ZERO WIDTH SPACE' or empty (util.zeroWidthSpace)
   * @param {String|Node} text String value or Node
   * @returns {Boolean}
   */
  onlyZeroWidthSpace: function(e) {
    return e == null ? !1 : (typeof e != "string" && (e = e.textContent), e === "" || this.onlyZeroWidthRegExp.test(e));
  },
  /**
   * @description Gets XMLHttpRequest object
   * @returns {XMLHttpRequest|ActiveXObject}
   */
  getXMLHttpRequest: function() {
    if (this._w.ActiveXObject)
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch {
          return null;
        }
      }
    else
      return this._w.XMLHttpRequest ? new XMLHttpRequest() : null;
  },
  /**
   * @description Object.values
   * @param {Object|null} obj Object parameter.
   * @returns {Array}
   */
  getValues: function(e) {
    return e ? this._w.Object.keys(e).map(function(t) {
      return e[t];
    }) : [];
  },
  /**
   * @description Convert the CamelCase To the KebabCase.
   * @param {String|Array} param [Camel string]
   * @returns {String|Array}
   */
  camelToKebabCase: function(e) {
    return typeof e == "string" ? e.replace(/[A-Z]/g, function(t) {
      return "-" + t.toLowerCase();
    }) : e.map(function(t) {
      return He.camelToKebabCase(t);
    });
  },
  /**
   * @description Convert the KebabCase To the CamelCase.
   * @param {String|Array} param [KebabCase string]
   * @returns {String|Array}
   */
  kebabToCamelCase: function(e) {
    return typeof e == "string" ? e.replace(/-[a-zA-Z]/g, function(t) {
      return t.replace("-", "").toUpperCase();
    }) : e.map(function(t) {
      return He.camelToKebabCase(t);
    });
  },
  /**
   * @description Create Element node
   * @param {String} elementName Element name
   * @returns {Element}
   */
  createElement: function(e) {
    return this._d.createElement(e);
  },
  /**
   * @description Create text node
   * @param {String} text text contents
   * @returns {Node}
   */
  createTextNode: function(e) {
    return this._d.createTextNode(e || "");
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * When using an attribute with "<" or ">", use "HTMLEncoder" to save. (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLEncoder: function(e) {
    const t = { "<": "$lt;", ">": "$gt;" };
    return e.replace(/<|>/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
    });
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * Decoder of data stored as "HTMLEncoder" (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLDecoder: function(e) {
    const t = { "$lt;": "<", "$gt;": ">" };
    return e.replace(/\$lt;|\$gt;/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
    });
  },
  /**
   * @description This method run Object.prototype.hasOwnProperty.call(obj, key)
   * @param {Object} obj Object
   * @param {String} key obj.key
   * @returns {Boolean}
   */
  hasOwn: function(e, t) {
    return this._hasOwn.call(e, t);
  },
  _hasOwn: Object.prototype.hasOwnProperty,
  /**
   * @deprecated
   * @description Get the the tag path of the arguments value
   * If not found, return the first found value
   * @param {Array} nameArray File name array
   * @param {String} extension js, css
   * @returns {String}
   */
  getIncludePath: function(e, t) {
    let n = "";
    const o = [], l = t === "js" ? "script" : "link", c = t === "js" ? "src" : "href";
    let d = "(?:";
    for (let _ = 0, r = e.length; _ < r; _++)
      d += e[_] + (_ < r - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + d + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), i = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let _ = this._d.getElementsByTagName(l), r = 0; r < _.length; r++)
      i.test(_[r][c]) && o.push(_[r]);
    for (let _ = 0; _ < o.length; _++) {
      let r = o[_][c].match(f);
      if (r) {
        n = r[0];
        break;
      }
    }
    if (n === "" && (n = o.length > 0 ? o[0][c] : ""), n.indexOf(":/") === -1 && n.slice(0, 2) !== "//" && (n = n.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + n : location.href.match(/^[^\?]*\/(?:)/)[0] + n), !n)
      throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
    return n;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(e) {
    let t = "";
    const n = (e || this._d).styleSheets;
    for (let o = 0, l = n.length, c; o < l; o++) {
      try {
        c = n[o].cssRules;
      } catch {
        continue;
      }
      if (c)
        for (let d = 0, f = c.length; d < f; d++)
          t += c[d].cssText;
    }
    return t;
  },
  /**
   * @description Get the argument iframe's document object
   * @param {Element} iframe Iframe element (context.element.wysiwygFrame)
   * @returns {Document}
   */
  getIframeDocument: function(e) {
    let t = e.contentWindow || e.contentDocument;
    return t.document && (t = t.document), t;
  },
  /**
   * @description Get attributes of argument element to string ('class="---" name="---" ')
   * @param {Element} element Element object
   * @param {Array|null} exceptAttrs Array of attribute names to exclude from the result
   * @returns {String}
   */
  getAttributesToString: function(e, t) {
    if (!e.attributes)
      return "";
    const n = e.attributes;
    let o = "";
    for (let l = 0, c = n.length; l < c; l++)
      t && t.indexOf(n[l].name) > -1 || (o += n[l].name + '="' + n[l].value + '" ');
    return o;
  },
  /**
   * @descriptionGets Get the length in bytes of a string.
   * referencing code: "https://github.com/shaan1974/myrdin/blob/master/expressions/string.js#L11"
   * @param {String} text String text
   * @returns {Number}
   */
  getByteLength: function(e) {
    if (!e || !e.toString)
      return 0;
    e = e.toString();
    const t = this._w.encodeURIComponent;
    let n, o;
    return this.isIE_Edge ? (o = this._w.unescape(t(e)).length, n = 0, t(e).match(/(%0A|%0D)/gi) !== null && (n = t(e).match(/(%0A|%0D)/gi).length), o + n) : (o = new this._w.TextEncoder("utf-8").encode(e).length, n = 0, t(e).match(/(%0A|%0D)/gi) !== null && (n = t(e).match(/(%0A|%0D)/gi).length), o + n);
  },
  /**
   * @description It is judged whether it is the edit region top div element or iframe's body tag.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isWysiwygDiv: function(e) {
    return e && e.nodeType === 1 && (this.hasClass(e, "se-wrapper-wysiwyg") || /^BODY$/i.test(e.nodeName));
  },
  /**
   * @description It is judged whether it is the contenteditable property is false.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNonEditable: function(e) {
    return e && e.nodeType === 1 && e.getAttribute("contenteditable") === "false";
  },
  /**
   * @description It is judged whether it is a node related to the text style.
   * (strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isTextStyleElement: function(e) {
    return e && e.nodeType !== 3 && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the input element (INPUT, TEXTAREA)
   * @param {Node} element The node to check
   * @returns 
   */
  isInputElement: function(e) {
    return e && e.nodeType === 1 && /^(INPUT|TEXTAREA)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the format element (P, DIV, H[1-6], PRE, LI | class="__se__format__replace_xxx")
   * Format element also contain "free format Element"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the range format element. (BLOCKQUOTE, OL, UL, FIGCAPTION, TABLE, THEAD, TBODY, TR, TH, TD | class="__se__format__range_xxx")
   * Range format element is wrap the "format element" and "component"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the closure range format element. (TH, TD | class="__se__format__range__closure_xxx")
   * Closure range format elements is included in the range format element.
   *  - Closure range format element is wrap the "format element" and "component"
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range__closure_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the free format element. (PRE | class="__se__format__free_xxx")
   * Free format elements is included in the format element.
   * Free format elements's line break is "BR" tag.
   * ※ Entering the Enter key in the space on the last line ends "Free Format" and appends "Format".
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^PRE$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the closure free format element. (class="__se__format__free__closure_xxx")
   * Closure free format elements is included in the free format element.
   *  - Closure free format elements's line break is "BR" tag.
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && this.hasClass(e, "(\\s|^)__se__format__free__closure_.+(\\s|$)");
  },
  /**
   * @description It is judged whether it is the component[img, iframe, video, audio, table] cover(class="se-component") and table, hr
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isComponent: function(e) {
    return e && (/se-component/.test(e.className) || /^(TABLE|HR)$/.test(e.nodeName));
  },
  /**
   * @description Checks for "__se__uneditable" in the class list.
   * Components with class "__se__uneditable" cannot be modified.
   * @param {Element} element The element to check
   * @returns {Boolean}
   */
  isUneditableComponent: function(e) {
    return e && this.hasClass(e, "__se__uneditable");
  },
  /**
   * @description It is judged whether it is the component [img, iframe] cover(class="se-component")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isMediaComponent: function(e) {
    return e && /se-component/.test(e.className);
  },
  /**
   * @description It is judged whether it is the not checking node. (class="katex", "__se__tag")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNotCheckingNode: function(e) {
    return e && /katex|__se__tag/.test(e.className);
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFormatElement: function(e, t) {
    if (!e)
      return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e))
        return null;
      if (this.isRangeFormatElement(e) && e.firstElementChild, this.isFormatElement(e) && t(e))
        return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isRangeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getRangeFormatElement: function(e, t) {
    if (!e)
      return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e))
        return null;
      if (this.isRangeFormatElement(e) && !/^(THEAD|TBODY|TR)$/i.test(e.nodeName) && t(e))
        return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a free format node (util.isFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFreeFormatElement: function(e, t) {
    if (!e)
      return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e))
        return null;
      if (this.isFreeFormatElement(e) && t(e))
        return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a closure free format node (util.isClosureFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getClosureFreeFormatElement: function(e, t) {
    if (!e)
      return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e))
        return null;
      if (this.isClosureFreeFormatElement(e) && t(e))
        return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description Add style and className of copyEl to originEl
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   * @param {Array|null} blacklist Blacklist array(LowerCase)
   */
  copyTagAttributes: function(e, t, n) {
    if (t.style.cssText) {
      const l = t.style;
      for (let c = 0, d = l.length; c < d; c++)
        e.style[l[c]] = l[l[c]];
    }
    const o = t.attributes;
    for (let l = 0, c = o.length, d; l < c; l++)
      d = o[l].name.toLowerCase(), n && n.indexOf(d) > -1 || !o[l].value ? e.removeAttribute(d) : d !== "style" && e.setAttribute(o[l].name, o[l].value);
  },
  /**
   * @description Copy and apply attributes of format tag that should be maintained. (style, class) Ignore "__se__format__" class
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   */
  copyFormatAttributes: function(e, t) {
    t = t.cloneNode(!1), t.className = t.className.replace(/(\s|^)__se__format__[^\s]+/g, ""), this.copyTagAttributes(e, t);
  },
  /**
   * @description Get the item from the array that matches the condition.
   * @param {Array|HTMLCollection|NodeList} array Array to get item
   * @param {Function|null} validation Conditional function
   * @param {Boolean} multi If true, returns all items that meet the criteria otherwise, returns an empty array.
   * If false, returns only one item that meet the criteria otherwise return null.
   * @returns {Array|Node|null}
   */
  getArrayItem: function(e, t, n) {
    if (!e || e.length === 0)
      return null;
    t = t || function() {
      return !0;
    };
    const o = [];
    for (let l = 0, c = e.length, d; l < c; l++)
      if (d = e[l], t(d))
        if (n)
          o.push(d);
        else
          return d;
    return n ? o : null;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(e, t) {
    for (let n = 0; n < e.length; n++)
      if (e[n] === t)
        return !0;
    return !1;
  },
  /**
   * @description Get the index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to find index
   * @returns {Number}
   */
  getArrayIndex: function(e, t) {
    let n = -1;
    for (let o = 0, l = e.length; o < l; o++)
      if (e[o] === t) {
        n = o;
        break;
      }
    return n;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(e, t) {
    let n = this.getArrayIndex(e, t);
    return n === -1 ? -1 : n + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(e, t) {
    let n = this.getArrayIndex(e, t);
    return n === -1 ? -1 : n - 1;
  },
  /**
   * @description Returns the index compared to other sibling nodes.
   * @param {Node} node The Node to find index
   * @returns {Number}
   */
  getPositionIndex: function(e) {
    let t = 0;
    for (; e = e.previousSibling; )
      t += 1;
    return t;
  },
  /**
   * @description Returns the position of the "node" in the "parentNode" in a numerical array.
   * ex) <p><span>aa</span><span>bb</span></p> : getNodePath(node: "bb", parentNode: "<P>") -> [1, 0]
   * @param {Node} node The Node to find position path
   * @param {Node|null} parentNode Parent node. If null, wysiwyg div area
   * @param {Object|null} _newOffsets If you send an object of the form "{s: 0, e: 0}", the text nodes that are attached together are merged into one, centered on the "node" argument.
   * "_newOffsets.s" stores the length of the combined characters after "node" and "_newOffsets.e" stores the length of the combined characters before "node".
   * Do not use unless absolutely necessary.
   * @returns {Array}
   */
  getNodePath: function(e, t, n) {
    const o = [];
    let l = !0;
    return this.getParentElement(e, (function(c) {
      if (c === t && (l = !1), l && !this.isWysiwygDiv(c)) {
        if (n && c.nodeType === 3) {
          let d = null, f = null;
          n.s = n.e = 0;
          let i = c.previousSibling;
          for (; i && i.nodeType === 3; )
            f = i.textContent.replace(this.zeroWidthRegExp, ""), n.s += f.length, c.textContent = f + c.textContent, d = i, i = i.previousSibling, this.removeItem(d);
          let _ = c.nextSibling;
          for (; _ && _.nodeType === 3; )
            f = _.textContent.replace(this.zeroWidthRegExp, ""), n.e += f.length, c.textContent += f, d = _, _ = _.nextSibling, this.removeItem(d);
        }
        o.push(c);
      }
      return !1;
    }).bind(this)), o.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let n = t, o;
    for (let l = 0, c = e.length; l < c && (o = n.childNodes, o.length !== 0); l++)
      o.length <= e[l] ? n = o[o.length - 1] : n = o[e[l]];
    return n;
  },
  /**
   * @description Compares the style and class for equal values.
   * Returns true if both are text nodes.
   * @param {Node} a Node to compare
   * @param {Node} b Node to compare
   * @returns {Boolean}
   */
  isSameAttributes: function(e, t) {
    if (e.nodeType === 3 && t.nodeType === 3)
      return !0;
    if (e.nodeType === 3 || t.nodeType === 3)
      return !1;
    const n = e.style, o = t.style;
    let l = 0;
    for (let _ = 0, r = n.length; _ < r; _++)
      n[n[_]] === o[n[_]] && l++;
    const c = e.classList, d = t.classList, f = this._w.RegExp;
    let i = 0;
    for (let _ = 0, r = c.length; _ < r; _++)
      f("(s|^)" + c[_] + "(s|$)").test(d.value) && i++;
    return l === o.length && l === n.length && i === d.length && i === c.length;
  },
  /**
   * @description Check the line element(util.isFormatElement) is empty.
   * @param {Element} element Format element node
   * @returns {Boolean}
   */
  isEmptyLine: function(e) {
    return !e || !e.parentNode || !e.querySelector("IMG, IFRAME, AUDIO, VIDEO, CANVAS, TABLE") && e.children.length === 0 && this.onlyZeroWidthSpace(e.textContent);
  },
  /**
   * @description Check the span's attributes are empty.
   * @param {Element|null} element Element node
   * @returns {Boolean}
   */
  isSpanWithoutAttr: function(e) {
    return !!e && e.nodeType === 1 && /^SPAN$/i.test(e.nodeName) && !e.className && !e.style.cssText;
  },
  /**
   * @description Check the node is a list (ol, ul)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isList: function(e) {
    return e && /^(OL|UL)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a list cell (li)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isListCell: function(e) {
    return e && /^LI$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table (table, thead, tbody, tr, th, td)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isTable: function(e) {
    return e && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table cell (td, th)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isCell: function(e) {
    return e && /^(TD|TH)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a break node (BR)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isBreak: function(e) {
    return e && /^BR$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a anchor node (A)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isAnchor: function(e) {
    return e && /^A$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a media node (img, iframe, audio, video, canvas)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isMedia: function(e) {
    return e && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a figure tag or util.isMedia()
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isFigures: function(e) {
    return e && (this.isMedia(e) || /^(FIGURE)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @description Checks for numeric (with decimal point).
   * @param {String|Number} text Text string or number
   * @returns {Boolean}
   */
  isNumber: function(e) {
    return !!e && /^-?\d+(\.\d+)?$/.test(e + "");
  },
  /**
   * @description Get a number.
   * @param {String|Number} text Text string or number
   * @param {Number} maxDec Maximum number of decimal places (-1 : Infinity)
   * @returns {Number}
   */
  getNumber: function(e, t) {
    if (!e)
      return 0;
    let n = (e + "").match(/-?\d+(\.\d+)?/);
    return !n || !n[0] ? 0 : (n = n[0], t < 0 ? n * 1 : t === 0 ? this._w.Math.round(n * 1) : (n * 1).toFixed(t) * 1);
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(e, t) {
    const n = [];
    return !e || !e.children || e.children.length === 0 || (t = t || function() {
      return !0;
    }, function o(l) {
      if (e !== l && t(l) && n.push(l), l.children)
        for (let c = 0, d = l.children.length; c < d; c++)
          o(l.children[c]);
    }(e)), n;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(e, t) {
    const n = [];
    return !e || e.childNodes.length === 0 || (t = t || function() {
      return !0;
    }, function o(l) {
      e !== l && t(l) && n.push(l);
      for (let c = 0, d = l.childNodes.length; c < d; c++)
        o(l.childNodes[c]);
    }(e)), n;
  },
  /**
   * @description Returns the number of parents nodes.
   * "0" when the parent node is the WYSIWYG area.
   * "-1" when the element argument is the WYSIWYG area.
   * @param {Node} element The element to check
   * @returns {Number}
   */
  getElementDepth: function(e) {
    if (!e || this.isWysiwygDiv(e))
      return -1;
    let t = 0;
    for (e = e.parentNode; e && !this.isWysiwygDiv(e); )
      t += 1, e = e.parentNode;
    return t;
  },
  /**
   * @description Compares two elements to find a common ancestor, and returns the order of the two elements.
   * @param {Node} a Node to compare.
   * @param {Node} b Node to compare.
   * @returns {Object} { ancesstor, a, b, result: (a > b ? 1 : a < b ? -1 : 0) };
   */
  compareElements: function(e, t) {
    let n = e, o = t;
    for (; n && o && n.parentNode !== o.parentNode; )
      n = n.parentNode, o = o.parentNode;
    if (!n || !o)
      return { ancestor: null, a: e, b: t, result: 0 };
    const l = n.parentNode.childNodes, c = this.getArrayIndex(l, n), d = this.getArrayIndex(l, o);
    return {
      ancestor: n.parentNode,
      a: n,
      b: o,
      result: c > d ? 1 : c < d ? -1 : 0
    };
  },
  /**
   * @description Get the parent element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getParentElement: function(e, t) {
    let n;
    if (typeof t == "function")
      n = t;
    else {
      let o;
      /^\./.test(t) ? (o = "className", t = t.split(".")[1]) : /^#/.test(t) ? (o = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (o = "name", t = "^" + t.split(":")[1] + "$") : (o = "nodeName", t = "^" + t + "$");
      const l = new this._w.RegExp(t, "i");
      n = function(c) {
        return l.test(c[o]);
      };
    }
    for (; e && !n(e); ) {
      if (this.isWysiwygDiv(e))
        return null;
      e = e.parentNode;
    }
    return e;
  },
  /**
   * @description Get the child element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * @param {Boolean} last If true returns the last node among the found child nodes. (default: first node)
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getChildElement: function(e, t, n) {
    let o;
    if (typeof t == "function")
      o = t;
    else {
      let c;
      /^\./.test(t) ? (c = "className", t = t.split(".")[1]) : /^#/.test(t) ? (c = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (c = "name", t = "^" + t.split(":")[1] + "$") : (c = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const d = new this._w.RegExp(t, "i");
      o = function(f) {
        return d.test(f[c]);
      };
    }
    const l = this.getListChildNodes(e, function(c) {
      return o(c);
    });
    return l[n ? l.length - 1 : 0];
  },
  /**
   * @description 1. The first node of all the child nodes of the "first" element is returned.
   * 2. The last node of all the child nodes of the "last" element is returned.
   * 3. When there is no "last" element, the first and last nodes of all the children of the "first" element are returned.
   * { sc: "first", ec: "last" }
   * @param {Node} first First element
   * @param {Node|null} last Last element
   * @returns {Object}
   */
  getEdgeChildNodes: function(e, t) {
    if (e) {
      for (t || (t = e); e && e.nodeType === 1 && e.childNodes.length > 0 && !this.isBreak(e); )
        e = e.firstChild;
      for (; t && t.nodeType === 1 && t.childNodes.length > 0 && !this.isBreak(t); )
        t = t.lastChild;
      return {
        sc: e,
        ec: t || e
      };
    }
  },
  /**
   * @description Returns the position of the left and top of argument. {left:0, top:0}
   * @param {Node} element Target node
   * @param {Element|null} wysiwygFrame When use iframe option, iframe object should be sent (context.element.wysiwygFrame)
   * @returns {Object}
   */
  getOffset: function(e, t) {
    let n = 0, o = 0, l = e.nodeType === 3 ? e.parentElement : e;
    const c = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; l && !this.hasClass(l, "se-container") && l !== c; )
      n += l.offsetLeft, o += l.offsetTop, l = l.offsetParent;
    const d = t && /iframe/i.test(t.nodeName);
    return {
      left: n + (d ? t.parentElement.offsetLeft : 0),
      top: o - (c ? c.scrollTop : 0) + (d ? t.parentElement.offsetTop : 0)
    };
  },
  /**
   * @description It compares the start and end indexes of "a" and "b" and returns the number of overlapping indexes in the range.
   * ex) 1, 5, 4, 6 => "2" (4 ~ 5)
   * @param {Number} aStart Start index of "a"
   * @param {Number} aEnd End index of "a"
   * @param {Number} bStart Start index of "b"
   * @param {Number} bEnd Start index of "b"
   * @returns {Number}
   */
  getOverlapRangeAtIndex: function(e, t, n, o) {
    if (e <= o ? t < n : t > n)
      return 0;
    const l = (e > n ? e : n) - (t < o ? t : o);
    return (l < 0 ? l * -1 : l) + 1;
  },
  /**
   * @description Set the text content value of the argument value element
   * @param {Node} element Element to replace text content
   * @param {String} txt Text to be applied
   */
  changeTxt: function(e, t) {
    !e || !t || (e.textContent = t);
  },
  /**
   * @description Replace element
   * @param {Element} element Target element
   * @param {String|Element} newElement String or element of the new element to apply
   */
  changeElement: function(e, t) {
    if (typeof t == "string")
      if (e.outerHTML)
        e.outerHTML = t;
      else {
        const n = this.createElement("DIV");
        n.innerHTML = t, t = n.firstChild, e.parentNode.replaceChild(t, e);
      }
    else
      t.nodeType === 1 && e.parentNode.replaceChild(t, e);
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(e, t, n) {
    e.style[t] = n, !n && !e.style.cssText && e.removeAttribute("style");
  },
  /**
   * @description Determine whether any of the matched elements are assigned the given class
   * @param {Element} element Elements to search class name
   * @param {String} className Class name to search for
   * @returns {Boolean}
   */
  hasClass: function(e, t) {
    if (e)
      return new this._w.RegExp(t).test(e.className);
  },
  /**
   * @description Append the className value of the argument value element
   * @param {Element} element Elements to add class name
   * @param {String} className Class name to be add
   */
  addClass: function(e, t) {
    !e || new this._w.RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) || (e.className += (e.className.length > 0 ? " " : "") + t);
  },
  /**
   * @description Delete the className value of the argument value element
   * @param {Element} element Elements to remove class name
   * @param {String} className Class name to be remove
   */
  removeClass: function(e, t) {
    if (!e)
      return;
    const n = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(n, " ").trim(), e.className.trim() || e.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(e, t) {
    if (!e)
      return;
    let n = !1;
    const o = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return o.test(e.className) ? e.className = e.className.replace(o, " ").trim() : (e.className += " " + t, n = !0), e.className.trim() || e.removeAttribute("class"), n;
  },
  /**
   * @description Checks if element can't be easily enabled
   * @param {Element} element Element to check for
   */
  isImportantDisabled: function(e) {
    return e.hasAttribute("data-important-disabled");
  },
  /**
   * @description In the predefined code view mode, the buttons except the executable button are changed to the 'disabled' state.
   * core.codeViewDisabledButtons (An array of buttons whose class name is not "se-code-view-enabled")
   * core.resizingDisabledButtons (An array of buttons whose class name is not "se-resizing-enabled")
   * @param {Boolean} disabled Disabled value
   * @param {Array|HTMLCollection|NodeList} buttonList Button array
   * @param {Boolean} important If priveleged mode should be used (Necessary to switch importantDisabled buttons)
   */
  setDisabledButtons: function(e, t, n) {
    for (let o = 0, l = t.length; o < l; o++) {
      let c = t[o];
      (n || !this.isImportantDisabled(c)) && (c.disabled = e), n && (e ? c.setAttribute("data-important-disabled", "") : c.removeAttribute("data-important-disabled"));
    }
  },
  /**
   * @description Delete argumenu value element
   * @param {Node} item Node to be remove
   */
  removeItem: function(e) {
    e && (typeof e.remove == "function" ? e.remove() : e.parentNode && e.parentNode.removeChild(e));
  },
  /**
   * @description Delete all parent nodes that match the condition.
   * Returns an {sc: previousSibling, ec: nextSibling}(the deleted node reference) or null.
   * @param {Node} item Node to be remove
   * @param {Function|null} validation Validation function. default(Deleted if it only have breakLine and blanks)
   * @param {Element|null} stopParent Stop when the parent node reaches stopParent
   * @returns {Object|null} {sc: previousSibling, ec: nextSibling}
   */
  removeItemAllParents: function(e, t, n) {
    if (!e)
      return null;
    let o = null;
    return t || (t = (function(l) {
      if (l === n || this.isComponent(l))
        return !1;
      const c = l.textContent.trim();
      return c.length === 0 || /^(\n|\u200B)+$/.test(c);
    }).bind(this)), function l(c) {
      if (!He.isWysiwygDiv(c)) {
        const d = c.parentNode;
        d && t(c) && (o = {
          sc: c.previousElementSibling,
          ec: c.nextElementSibling
        }, He.removeItem(c), l(d));
      }
    }(e), o;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(e, t) {
    const n = this._deleteNestedList(e);
    let o, l;
    if (n) {
      o = n.cloneNode(!1), l = n.childNodes;
      const d = this.getPositionIndex(e);
      for (; l[d]; )
        o.appendChild(l[d]);
    } else
      o = e;
    let c;
    if (t)
      c = this.getListChildren(o, (function(d) {
        return this.isListCell(d) && !d.previousElementSibling;
      }).bind(this));
    else {
      const d = this.getElementDepth(e) + 2;
      c = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === d;
      }).bind(this));
    }
    for (let d = 0, f = c.length; d < f; d++)
      this._deleteNestedList(c[d]);
    return n && (n.parentNode.insertBefore(o, n.nextSibling), l && l.length === 0 && this.removeItem(n)), o === e ? o.parentNode : o;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let n = t, o = n.parentNode, l, c, d, f, i;
    for (; this.isListCell(o); ) {
      for (f = this.getPositionIndex(e), l = o.nextElementSibling, c = o.parentNode, d = n; d; ) {
        if (n = n.nextSibling, this.isList(d)) {
          for (i = d.childNodes; i[f]; )
            c.insertBefore(i[f], l);
          i.length === 0 && this.removeItem(d);
        } else
          c.appendChild(d);
        d = n;
      }
      n = c, o = c.parentNode;
    }
    return t.children.length === 0 && this.removeItem(t), c;
  },
  /**
   * @description Split all tags based on "baseNode"
   * Returns the last element of the splited tag.
   * @param {Node} baseNode Element or text node on which to base
   * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
   * @param {Number} depth The nesting depth of the element being split. (default: 0)
   * @returns {Element}
   */
  splitElement: function(e, t, n) {
    if (this.isWysiwygDiv(e))
      return e;
    if (t && !this.isNumber(t)) {
      const x = e.childNodes;
      let S = this.getPositionIndex(t);
      const B = e.cloneNode(!1), F = e.cloneNode(!1);
      for (let s = 0, a = x.length; s < a; s++) {
        if (s < S)
          B.appendChild(x[s]);
        else if (s > S)
          F.appendChild(x[s]);
        else
          continue;
        s--, a--, S--;
      }
      return B.childNodes.length > 0 && e.parentNode.insertBefore(B, e), F.childNodes.length > 0 && e.parentNode.insertBefore(F, e.nextElementSibling), e;
    }
    const o = e.parentNode;
    let l = 0, c = 1, d = !0, f, i, _;
    if ((!n || n < 0) && (n = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const x = this.getNodeFromPath([l + 1], o);
        this.onlyZeroWidthSpace(x) && (x.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const x = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(x, e), e = x;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === n && (d = !1);
    }
    e.nodeType === 1 && (c = 0);
    let r = e;
    for (; this.getElementDepth(r) > n; )
      for (l = this.getPositionIndex(r) + c, r = r.parentNode, _ = f, f = r.cloneNode(!1), i = r.childNodes, _ && (this.isListCell(f) && this.isList(_) && _.firstElementChild ? (f.innerHTML = _.firstElementChild.innerHTML, He.removeItem(_.firstElementChild), _.children.length > 0 && f.appendChild(_)) : f.appendChild(_)); i[l]; )
        f.appendChild(i[l]);
    r.childNodes.length <= 1 && (!r.firstChild || r.firstChild.textContent.length === 0) && (r.innerHTML = "<br>");
    const b = r.parentNode;
    return d && (r = r.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(x) {
      return this.isList(x);
    }).bind(this)), f.childNodes.length > 0 ? b.insertBefore(f, r) : f = r, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), o.childNodes.length === 0 && this.removeItem(o), f) : r;
  },
  /**
   * @description Use with "npdePath (util.getNodePath)" to merge the same attributes and tags if they are present and modify the nodepath.
   * If "offset" has been changed, it will return as much "offset" as it has been modified.
   * An array containing change offsets is returned in the order of the "nodePathArray" array.
   * @param {Element} element Element
   * @param {Array|null} nodePathArray Array of NodePath object ([util.getNodePath(), ..])
   * @param {Boolean} onlyText If true, non-text nodes(!util._isIgnoreNodeChange) like 'span', 'strong'.. are ignored.
   * @returns {Array} [offset, ..]
   */
  mergeSameTags: function(e, t, n) {
    const o = this, l = t ? t.length : 0;
    let c = null;
    return l && (c = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function d(f, i, _) {
      const r = f.childNodes;
      for (let b = 0, x = r.length, S, B; b < x && (S = r[b], B = r[b + 1], !!S); b++) {
        if (n && o._isIgnoreNodeChange(S) || !n && (o.isTable(S) || o.isListCell(S) || o.isFormatElement(S) && !o.isFreeFormatElement(S))) {
          (o.isTable(S) || o.isListCell(S)) && d(S, i + 1, b);
          continue;
        }
        if (x === 1 && f.nodeName === S.nodeName && f.parentNode) {
          if (l) {
            let F, s, a, u, h;
            for (let g = 0; g < l; g++)
              if (F = t[g], F && F[i] === b) {
                for (s = S, a = f, u = i, h = !0; u >= 0; ) {
                  if (o.getArrayIndex(a.childNodes, s) !== F[u]) {
                    h = !1;
                    break;
                  }
                  s = S.parentNode, a = s.parentNode, u--;
                }
                h && (F.splice(i, 1), F[i] = b);
              }
          }
          o.copyTagAttributes(S, f), f.parentNode.insertBefore(S, f), o.removeItem(f);
        }
        if (!B) {
          S.nodeType === 1 && d(S, i + 1, b);
          break;
        }
        if (S.nodeName === B.nodeName && o.isSameAttributes(S, B) && S.href === B.href) {
          const F = S.childNodes;
          let s = 0;
          for (let g = 0, m = F.length; g < m; g++)
            F[g].textContent.length > 0 && s++;
          const a = S.lastChild, u = B.firstChild;
          let h = 0;
          if (a && u) {
            const g = a.nodeType === 3 && u.nodeType === 3;
            h = a.textContent.length;
            let m = a.previousSibling;
            for (; m && m.nodeType === 3; )
              h += m.textContent.length, m = m.previousSibling;
            if (s > 0 && a.nodeType === 3 && u.nodeType === 3 && (a.textContent.length > 0 || u.textContent.length > 0) && s--, l) {
              let p = null;
              for (let y = 0; y < l; y++)
                if (p = t[y], p && p[i] > b) {
                  if (i > 0 && p[i - 1] !== _)
                    continue;
                  p[i] -= 1, p[i + 1] >= 0 && p[i] === b && (p[i + 1] += s, g && a && a.nodeType === 3 && u && u.nodeType === 3 && (c[y] += h));
                }
            }
          }
          if (S.nodeType === 3) {
            if (h = S.textContent.length, S.textContent += B.textContent, l) {
              let g = null;
              for (let m = 0; m < l; m++)
                if (g = t[m], g && g[i] > b) {
                  if (i > 0 && g[i - 1] !== _)
                    continue;
                  g[i] -= 1, g[i + 1] >= 0 && g[i] === b && (g[i + 1] += s, c[m] += h);
                }
            }
          } else
            S.innerHTML += B.innerHTML;
          o.removeItem(B), b--;
        } else
          S.nodeType === 1 && d(S, i + 1, b);
      }
    }(e, 0, 0), c;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(e, t) {
    typeof t == "string" ? t = (function(n) {
      return this.test(n.tagName);
    }).bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : typeof t != "function" && (t = function() {
      return !0;
    }), function n(o) {
      let l = o.children;
      if (l.length === 1 && l[0].nodeName === o.nodeName && t(o)) {
        const c = l[0];
        for (l = c.children; l[0]; )
          o.appendChild(l[0]);
        o.removeChild(c);
      }
      for (let c = 0, d = o.children.length; c < d; c++)
        n(o.children[c]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, n) {
    const o = this;
    t && (t = o.getParentElement(t, function(l) {
      return e === l.parentElement;
    })), function l(c) {
      if (o._notTextNode(c) || c === t || o.isNonEditable(c))
        return 0;
      if (c !== e && o.onlyZeroWidthSpace(c.textContent) && (!c.firstChild || !o.isBreak(c.firstChild)) && !c.querySelector(o._allowedEmptyNodeList)) {
        if (c.parentNode)
          return c.parentNode.removeChild(c), -1;
      } else {
        const d = c.children;
        for (let f = 0, i = d.length, _ = 0; f < i; f++)
          !d[f + _] || o.isComponent(d[f + _]) || (_ += l(d[f + _]));
      }
      return 0;
    }(e), e.childNodes.length === 0 && (n ? this.removeItem(e) : e.innerHTML = "<br>");
  },
  /**
   * @description Remove whitespace between tags in HTML string.
   * @param {String} html HTML string
   * @returns {String}
   */
  htmlRemoveWhiteSpace: function(e) {
    return e ? e.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)[^>^<]+>\s+(?=<)/ig, function(t) {
      return t.replace(/\n/g, "").replace(/\s+/, " ");
    }) : "";
  },
  /**
  * @description HTML code compression
  * @param {string} html HTML string
  * @returns {string} HTML string
  */
  htmlCompress: function(e) {
    return e.replace(/\n/g, "").replace(/(>)(?:\s+)(<)/g, "$1$2");
  },
  /**
   * @description Sort a element array by depth of element.
   * @param {Array} array Array object
   * @param {Boolean} des true: descending order / false: ascending order
   */
  sortByDepth: function(e, t) {
    const n = t ? 1 : -1, o = n * -1;
    e.sort((function(l, c) {
      return !this.isListCell(l) || !this.isListCell(c) ? 0 : (l = this.getElementDepth(l), c = this.getElementDepth(c), l > c ? n : l < c ? o : 0);
    }).bind(this));
  },
  _isExcludeSelectionElement: function(e) {
    return !/FIGCAPTION/i.test(e.nodeName) && (this.isComponent(e) || /FIGURE/i.test(e.nodeName));
  },
  /**
   * @description Nodes that need to be added without modification when changing text nodes
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isIgnoreNodeChange: function(e) {
    return e && e.nodeType !== 3 && (this.isNonEditable(e) || !this.isTextStyleElement(e));
  },
  /**
   * @description Nodes that must remain undetached when changing text nodes (A, Label, Code, Span:font-size)
   * @param {Node|String} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isMaintainedNode: function(e) {
    return e && e.nodeType !== 3 && /^(a|label|code|summary)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Node with font-size style
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isSizeNode: function(e) {
    return e && e.nodeType !== 3 && this.isTextStyleElement(e) && !!e.style.fontSize;
  },
  /**
   * @description Nodes without text
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _notTextNode: function(e) {
    return e && e.nodeType !== 3 && (this.isComponent(e) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @deprecated
   * @description Check disallowed tags
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _disallowedTags: function(e) {
    return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(e.nodeName);
  },
  /**
   * @description Create whitelist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?!" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsWhitelist: function(e) {
    return new RegExp("<\\/?\\b(?!\\b" + (e || "").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Create blacklist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?:" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsBlacklist: function(e) {
    return new RegExp("<\\/?\\b(?:\\b" + (e || "^").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Fix tags that do not fit the editor format.
   * @param {Element} documentFragment Document fragment "DOCUMENT_FRAGMENT_NODE" (nodeType === 11)
   * @param {RegExp} htmlCheckWhitelistRegExp Editor tags whitelist (core._htmlCheckWhitelistRegExp)
   * @param {RegExp} htmlCheckBlacklistRegExp Editor tags blacklist (core._htmlCheckBlacklistRegExp)
   * @param {Function} classNameFilter Class name filter function
   * @private
   */
  _consistencyCheckOfHTML: function(e, t, n, o) {
    const l = [], c = [], d = [], f = [], i = this.getListChildNodes(e, (function(r) {
      if (r.nodeType !== 1)
        return this.isList(r.parentElement) && l.push(r), !1;
      if (n.test(r.nodeName) || !t.test(r.nodeName) && r.childNodes.length === 0 && this.isNotCheckingNode(r))
        return l.push(r), !1;
      const b = !this.getParentElement(r, this.isNotCheckingNode);
      if (!this.isTable(r) && !this.isListCell(r) && !this.isAnchor(r) && (this.isFormatElement(r) || this.isRangeFormatElement(r) || this.isTextStyleElement(r)) && r.childNodes.length === 0 && b)
        return c.push(r), !1;
      if (this.isList(r.parentNode) && !this.isList(r) && !this.isListCell(r))
        return d.push(r), !1;
      if (this.isCell(r)) {
        const S = r.firstElementChild;
        if (!this.isFormatElement(S) && !this.isRangeFormatElement(S) && !this.isComponent(S))
          return f.push(r), !1;
      }
      if (b && r.className) {
        const S = new this._w.Array(r.classList).map(o).join(" ").trim();
        S ? r.className = S : r.removeAttribute("class");
      }
      return r.parentNode !== e && b && (this.isListCell(r) && !this.isList(r.parentNode) || (this.isFormatElement(r) || this.isComponent(r)) && !this.isRangeFormatElement(r.parentNode) && !this.getParentElement(r, this.isComponent));
    }).bind(this));
    for (let r = 0, b = l.length; r < b; r++)
      this.removeItem(l[r]);
    const _ = [];
    for (let r = 0, b = i.length, x, S; r < b; r++)
      if (x = i[r], S = x.parentNode, !(!S || !S.parentNode))
        if (this.getParentElement(x, this.isListCell)) {
          const B = x.childNodes;
          for (let F = B.length - 1; b >= 0; F--)
            S.insertBefore(x, B[F]);
          _.push(x);
        } else
          S.parentNode.insertBefore(x, S), _.push(S);
    for (let r = 0, b = _.length, x; r < b; r++)
      x = _[r], this.onlyZeroWidthSpace(x.textContent.trim()) && this.removeItem(x);
    for (let r = 0, b = c.length; r < b; r++)
      this.removeItem(c[r]);
    for (let r = 0, b = d.length, x, S, B, F; r < b; r++)
      if (x = d[r], F = x.parentNode, !!F)
        if (S = this.createElement("LI"), this.isFormatElement(x)) {
          for (B = x.childNodes; B[0]; )
            S.appendChild(B[0]);
          F.insertBefore(S, x), this.removeItem(x);
        } else
          x = x.nextSibling, S.appendChild(d[r]), F.insertBefore(S, x);
    for (let r = 0, b = f.length, x, S; r < b; r++)
      x = f[r], S = this.createElement("DIV"), S.innerHTML = x.textContent.trim().length === 0 && x.children.length === 0 ? "<br>" : x.innerHTML, x.innerHTML = S.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let n = "";
    e.height && (n += "height:" + e.height + ";"), e.minHeight && (n += "min-height:" + e.minHeight + ";"), e.maxHeight && (n += "max-height:" + e.maxHeight + ";"), e.position && (n += "position:" + e.position + ";"), e.width && (n += "width:" + e.width + ";"), e.minWidth && (n += "min-width:" + e.minWidth + ";"), e.maxWidth && (n += "max-width:" + e.maxWidth + ";");
    let o = "", l = "", c = "";
    t = n + t;
    const d = t.split(";");
    for (let f = 0, i = d.length, _; f < i; f++)
      if (_ = d[f].trim(), !!_) {
        if (/^(min-|max-)?width\s*:/.test(_) || /^(z-index|position)\s*:/.test(_)) {
          o += _ + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(_)) {
          /^height/.test(_) && _.split(":")[1].trim() === "auto" && (e.height = "auto"), l += _ + ";";
          continue;
        }
        c += _ + ";";
      }
    return {
      top: o,
      frame: l,
      editor: c
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0);
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, n = this._w.RegExp;
    let o = "";
    for (let l = 0, c = t.length, d; l < c; l++) {
      if (d = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        d.push(t[l]);
      else {
        const f = new n("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let i = document.getElementsByTagName("link"), _ = 0, r = i.length, b; _ < r; _++)
          b = i[_].href.match(f), b && d.push(b[0]);
      }
      if (!d || d.length === 0)
        throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, i = d.length; f < i; f++)
        o += '<link href="' + d[f] + '" rel="stylesheet">';
    }
    return o + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Q = He, Xe = {
  /**
   * @description document create
   * @param {Element} element Textarea
   * @param {Object} options Options
   * @returns {Object}
   */
  init: function(e, t) {
    typeof t != "object" && (t = {});
    const n = document;
    this._initOptions(e, t);
    const o = n.createElement("DIV");
    o.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (o.id = "suneditor_" + e.id);
    const l = n.createElement("DIV");
    l.className = "se-container";
    const c = this._createToolBar(n, t.buttonList, t.plugins, t), d = c.element.cloneNode(!1);
    d.className += " se-toolbar-shadow", c.element.style.visibility = "hidden", c.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = n.createElement("DIV");
    f.className = "se-arrow";
    const i = n.createElement("DIV");
    i.className = "se-toolbar-sticky-dummy";
    const _ = n.createElement("DIV");
    _.className = "se-wrapper";
    const r = this._initElements(t, o, c.element, f), b = r.bottomBar, x = r.wysiwygFrame, S = r.placeholder;
    let B = r.codeView;
    const F = b.resizingBar, s = b.navigation, a = b.charWrapper, u = b.charCounter, h = n.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const g = n.createElement("DIV");
    g.className = "se-line-breaker", g.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const m = n.createElement("DIV");
    m.className += "se-line-breaker-component";
    const p = m.cloneNode(!0);
    m.innerHTML = p.innerHTML = t.icons.line_break;
    const y = n.createElement("DIV");
    y.className = "se-resizing-back";
    const C = t.toolbarContainer;
    C && (C.appendChild(c.element), C.appendChild(d));
    const v = t.resizingBarContainer;
    return F && v && v.appendChild(F), _.appendChild(B), S && _.appendChild(S), C || (l.appendChild(c.element), l.appendChild(d)), l.appendChild(i), l.appendChild(_), l.appendChild(y), l.appendChild(h), l.appendChild(g), l.appendChild(m), l.appendChild(p), F && !v && l.appendChild(F), o.appendChild(l), B = this._checkCodeMirror(t, B), {
      constructed: {
        _top: o,
        _relative: l,
        _toolBar: c.element,
        _toolbarShadow: d,
        _menuTray: c._menuTray,
        _editorArea: _,
        _wysiwygArea: x,
        _codeArea: B,
        _placeholder: S,
        _resizingBar: F,
        _navigation: s,
        _charWrapper: a,
        _charCounter: u,
        _loading: h,
        _lineBreaker: g,
        _lineBreaker_t: m,
        _lineBreaker_b: p,
        _resizeBack: y,
        _stickyDummy: i,
        _arrow: f
      },
      options: t,
      plugins: c.plugins,
      pluginCallButtons: c.pluginCallButtons,
      _responsiveButtons: c.responsiveButtons
    };
  },
  /**
   * @description Check the CodeMirror option to apply the CodeMirror and return the CodeMirror element.
   * @param {Object} options options
   * @param {Element} textarea textarea element
   * @private
   */
  _checkCodeMirror: function(e, t) {
    if (e.codeMirror) {
      const n = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(l, c) {
        for (let d in c)
          Q.hasOwn(c, d) && (l[d] = c[d]);
        return l;
      }, {});
      e.height === "auto" && (n.viewportMargin = 1 / 0, n.height = "auto");
      const o = e.codeMirror.src.fromTextArea(t, n);
      o.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = o, t = o.display.wrapper, t.className += " se-wrapper-code-mirror";
    }
    return t;
  },
  /**
   * @description Check for a katex object.
   * @param {Object} katex katex object
   * @private
   */
  _checkKatexMath: function(e) {
    if (!e)
      throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
    const t = [{
      throwOnError: !1
    }, e.options || {}].reduce(function(n, o) {
      for (let l in o)
        Q.hasOwn(o, l) && (n[l] = o[l]);
      return n;
    }, {});
    e.options = t;
  },
  /**
   * @description Add or reset options
   * @param {Object} mergeOptions New options property
   * @param {Object} context Context object of core
   * @param {Object} originOptions Origin options
   * @returns {Object} pluginCallButtons
   * @private
   */
  _setOptions: function(e, t, n) {
    this._initOptions(t.element.originElement, e);
    const o = t.element, l = o.relative, c = o.editorArea, d = e.toolbarContainer && e.toolbarContainer !== n.toolbarContainer, f = e.lang !== n.lang || e.buttonList !== n.buttonList || e.mode !== n.mode || d, i = this._createToolBar(document, f ? e.buttonList : n.buttonList, e.plugins, e);
    i.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const _ = document.createElement("DIV");
    _.className = "se-arrow", f && (i.element.style.visibility = "hidden", d ? (e.toolbarContainer.appendChild(i.element), o.toolbar.parentElement.removeChild(o.toolbar)) : o.toolbar.parentElement.replaceChild(i.element, o.toolbar), o.toolbar = i.element, o._menuTray = i._menuTray, o._arrow = _);
    const r = this._initElements(e, o.topArea, f ? i.element : o.toolbar, _), b = r.bottomBar, x = r.wysiwygFrame, S = r.placeholder;
    let B = r.codeView;
    return o.resizingBar && Q.removeItem(o.resizingBar), b.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== n.resizingBarContainer ? e.resizingBarContainer.appendChild(b.resizingBar) : l.appendChild(b.resizingBar)), c.innerHTML = "", c.appendChild(B), S && c.appendChild(S), B = this._checkCodeMirror(e, B), o.resizingBar = b.resizingBar, o.navigation = b.navigation, o.charWrapper = b.charWrapper, o.charCounter = b.charCounter, o.wysiwygFrame = x, o.code = B, o.placeholder = S, e.rtl ? Q.addClass(o.topArea, "se-rtl") : Q.removeClass(o.topArea, "se-rtl"), {
      callButtons: i.pluginCallButtons,
      plugins: i.plugins,
      toolbar: i
    };
  },
  /**
   * @description Initialize property of suneditor elements
   * @param {Object} options Options
   * @param {Element} topDiv Suneditor top div
   * @param {Element} toolBar Tool bar
   * @param {Element} toolBarArrow Tool bar arrow (balloon editor)
   * @returns {Object} Bottom bar elements (resizingBar, navigation, charWrapper, charCounter)
   * @private
   */
  _initElements: function(e, t, n, o) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (n.className += " se-toolbar-inline", n.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (n.className += " se-toolbar-balloon", n.style.width = e.toolbarWidth, n.appendChild(o));
    const l = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (l.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      l.allowFullscreen = !0, l.frameBorder = 0, l.style.cssText = e._editorStyles.frame, l.className += e.className;
    else {
      l.setAttribute("contenteditable", !0), l.setAttribute("scrolling", "auto");
      for (let b in e.iframeAttributes)
        l.setAttribute(b, e.iframeAttributes[b]);
      l.className += " " + e._editableClass, l.style.cssText = e._editorStyles.frame + e._editorStyles.editor, l.className += e.className;
    }
    const c = document.createElement("TEXTAREA");
    c.className = "se-wrapper-inner se-wrapper-code" + e.className, c.style.cssText = e._editorStyles.frame, c.style.display = "none", e.height === "auto" && (c.style.overflow = "hidden");
    let d = null, f = null, i = null, _ = null;
    if (e.resizingBar && (d = document.createElement("DIV"), d.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", d.appendChild(f), e.charCounter)) {
      if (i = document.createElement("DIV"), i.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const b = document.createElement("SPAN");
        b.className = "se-char-label", b.textContent = e.charCounterLabel, i.appendChild(b);
      }
      if (_ = document.createElement("SPAN"), _.className = "se-char-counter", _.textContent = "0", i.appendChild(_), e.maxCharCount > 0) {
        const b = document.createElement("SPAN");
        b.textContent = " / " + e.maxCharCount, i.appendChild(b);
      }
      d.appendChild(i);
    }
    let r = null;
    return e.placeholder && (r = document.createElement("SPAN"), r.className = "se-placeholder", r.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: d,
        navigation: f,
        charWrapper: i,
        charCounter: _
      },
      wysiwygFrame: l,
      codeView: c,
      placeholder: r
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(e, t) {
    const n = {};
    if (t.plugins) {
      const c = t.plugins, d = c.length ? c : Object.keys(c).map(function(f) {
        return c[f];
      });
      for (let f = 0, i = d.length, _; f < i; f++)
        _ = d[f].default || d[f], n[_.name] = _;
    }
    t.plugins = n, t.lang = t.lang || vi, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new Q._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const o = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(c, d) {
      for (let f in d)
        c[f] = d[f];
      return c;
    }, {});
    t._textTagsMap = {
      strong: o.bold.toLowerCase(),
      b: o.bold.toLowerCase(),
      u: o.underline.toLowerCase(),
      ins: o.underline.toLowerCase(),
      em: o.italic.toLowerCase(),
      i: o.italic.toLowerCase(),
      del: o.strike.toLowerCase(),
      strike: o.strike.toLowerCase(),
      s: o.strike.toLowerCase(),
      sub: o.sub.toLowerCase(),
      sup: o.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const l = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? Q.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? Q.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? Q.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = Q.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? Q.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (Q.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (Q.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? Q.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (Q.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (Q.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? Q.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? Q.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? Q.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !Q.getNumber(t.videoWidth, 0) ? "" : Q.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !Q.getNumber(t.videoHeight, 0) ? "" : Q.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = Q.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? Q.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? Q.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? Q.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? Q.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? ht : [ht, t.icons].reduce(function(c, d) {
      for (let f in d)
        Q.hasOwn(d, f) && (c[f] = d[f]);
      return c;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(c, d) {
      for (let f in d)
        Q.hasOwn(d, f) && (c[f] = d[f]);
      return c;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = Q._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string")
      return e;
    t = t.split("|"), e = e.split("|");
    for (let n = 0, o = t.length, l; n < o; n++)
      l = e.indexOf(t[n]), l > -1 && e.splice(l, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, n = e.lang, o = Q.isOSX_IOS ? "⌘" : "CTRL", l = Q.isOSX_IOS ? "⇧" : "+SHIFT", c = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], d = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", n.toolbar.bold + '<span class="se-shortcut">' + (c.indexOf("bold") > -1 ? "" : o + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", n.toolbar.underline + '<span class="se-shortcut">' + (c.indexOf("underline") > -1 ? "" : o + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", n.toolbar.italic + '<span class="se-shortcut">' + (c.indexOf("italic") > -1 ? "" : o + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", n.toolbar.strike + '<span class="se-shortcut">' + (c.indexOf("strike") > -1 ? "" : o + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", n.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", n.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", n.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", n.toolbar.indent + '<span class="se-shortcut">' + (c.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", n.toolbar.outdent + '<span class="se-shortcut">' + (c.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", n.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", n.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", n.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", n.toolbar.undo + '<span class="se-shortcut">' + (c.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", n.toolbar.redo + '<span class="se-shortcut">' + (c.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Y</span> / ' + o + l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", n.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", n.toolbar.print, "print", "", t.print],
      dir: ["", n.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", n.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", n.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", n.toolbar.save + '<span class="se-shortcut">' + (c.indexOf("save") > -1 ? "" : o + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
      /** plugins - command */
      blockquote: ["", n.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", n.toolbar.font, "font", "submenu", '<span class="txt">' + n.toolbar.font + "</span>" + t.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", n.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + n.toolbar.formats + "</span>" + t.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", n.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + n.toolbar.fontSize + "</span>" + t.arrow_down],
      fontColor: ["", n.toolbar.fontColor, "fontColor", "submenu", t.font_color],
      hiliteColor: ["", n.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
      align: ["se-btn-align", n.toolbar.align, "align", "submenu", e.rtl ? t.align_right : t.align_left],
      list: ["", n.toolbar.list, "list", "submenu", t.list_number],
      horizontalRule: ["btn_line", n.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
      table: ["", n.toolbar.table, "table", "submenu", t.table],
      lineHeight: ["", n.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
      template: ["", n.toolbar.template, "template", "submenu", t.template],
      paragraphStyle: ["", n.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
      textStyle: ["", n.toolbar.textStyle, "textStyle", "submenu", t.text_style],
      /** plugins - dialog */
      link: ["", n.toolbar.link, "link", "dialog", t.link],
      image: ["", n.toolbar.image, "image", "dialog", t.image],
      video: ["", n.toolbar.video, "video", "dialog", t.video],
      audio: ["", n.toolbar.audio, "audio", "dialog", t.audio],
      math: ["", n.toolbar.math, "math", "dialog", t.math],
      /** plugins - fileBrowser */
      imageGallery: ["", n.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
    };
  },
  /**
   * @description Create a group div containing each module
   * @returns {Object}
   * @private
   */
  _createModuleGroup: function() {
    const e = Q.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = Q.createElement("UL");
    return t.className = "se-menu-list", e.appendChild(t), {
      div: e,
      ul: t
    };
  },
  /**
   * @description Create a button element
   * @param {string} buttonClass className in button
   * @param {string} title Title in button
   * @param {string} dataCommand The data-command property of the button
   * @param {string} dataDisplay The data-display property of the button ('dialog', 'submenu', 'command')
   * @param {string} innerHTML Html in button
   * @param {string} _disabled Button disabled
   * @param {Object} _icons Icons
   * @returns {Object}
   * @private
   */
  _createButton: function(e, t, n, o, l, c, d) {
    const f = Q.createElement("LI"), i = Q.createElement("BUTTON"), _ = t || n;
    return i.setAttribute("type", "button"), i.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), i.setAttribute("data-command", n), i.setAttribute("data-display", o), i.setAttribute("aria-label", _.replace(/<span .+<\/span>/, "")), i.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = d[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), i.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + _ + "</span></span>", c && i.setAttribute("disabled", !0), i.innerHTML = l, f.appendChild(i), {
      li: f,
      button: i
    };
  },
  /**
   * @description Create editor HTML
   * @param {Array} doc document object
   * @param {Array} buttonList option.buttonList
   * @param {Object|null} plugins Plugins
   * @param {Array} options options
   * @returns {Object} { element: (Element) Toolbar element, plugins: (Array|null) Plugins Array, pluginCallButtons: (Object), responsiveButtons: (Array) }
   * @private
   */
  _createToolBar: function(e, t, n, o) {
    const l = e.createElement("DIV");
    l.className = "se-toolbar-separator-vertical";
    const c = e.createElement("DIV");
    c.className = "se-toolbar sun-editor-common";
    const d = e.createElement("DIV");
    d.className = "se-btn-tray", c.appendChild(d), t = JSON.parse(JSON.stringify(t));
    const f = o.icons, i = this._defaultButtons(o), _ = {}, r = [];
    let b = null, x = null, S = null, B = null, F = "", s = !1;
    const a = Q.createElement("DIV");
    a.className = "se-toolbar-more-layer";
    e:
      for (let g = 0, m, p, y, C, v; g < t.length; g++)
        if (m = !1, v = "", C = t[g], S = this._createModuleGroup(), typeof C == "object") {
          for (let w = 0, E; w < C.length; w++) {
            if (x = C[w], E = !1, /^\%\d+/.test(x) && w === 0) {
              C[0] = x.replace(/[^\d]/g, ""), r.push(C), t.splice(g--, 1);
              continue e;
            }
            if (typeof x == "object")
              typeof x.add == "function" ? (F = x.name, b = i[F], n[F] = x) : (F = x.name, b = [x.buttonClass, x.title, x.name, x.dataDisplay, x.innerHTML, x._disabled]);
            else {
              if (/^\-/.test(x)) {
                v = x.substr(1), S.div.className += " module-float-" + v;
                continue;
              }
              if (/^\#/.test(x)) {
                x.substr(1) === "fix" && (S.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(x)) {
                E = !0;
                const k = x.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + k[1].trim();
                const z = k[2].trim(), A = k[3].trim();
                b = ["se-btn-more", z, y, "MORE", A];
              } else
                b = i[x];
              if (F = x, !b) {
                const k = n[F];
                if (!k)
                  throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + F + "]");
                b = [k.buttonClass, k.title, k.name, k.display, k.innerHTML, k._disabled];
              }
            }
            B = this._createButton(b[0], b[1], b[2], b[3], b[4], b[5], f), (m ? p : S.ul).appendChild(B.li), n[F] && (_[F] = B.button), E && (m = !0, p = Q.createElement("DIV"), p.className = "se-more-layer " + y, p.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (v ? ' style="float: ' + v + ';"' : "") + "></ul></div>", a.appendChild(p), p = p.firstElementChild.firstElementChild);
          }
          if (s) {
            const w = l.cloneNode(!1);
            d.appendChild(w);
          }
          d.appendChild(S.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const w = e.createElement("DIV");
          w.className = "se-btn-module-enter", d.appendChild(w), s = !1;
        }
    switch (d.children.length) {
      case 0:
        d.style.display = "none";
        break;
      case 1:
        Q.removeClass(d.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (o.rtl) {
          const g = l.cloneNode(!1);
          g.style.float = d.lastElementChild.style.float, d.appendChild(g);
        }
    }
    r.length > 0 && r.unshift(t), a.children.length > 0 && d.appendChild(a);
    const u = e.createElement("DIV");
    u.className = "se-menu-tray", c.appendChild(u);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", c.appendChild(h), o.hideToolbar && (c.style.display = "none"), {
      element: c,
      plugins: n,
      pluginCallButtons: _,
      responsiveButtons: r,
      _menuTray: u,
      _buttonTray: d
    };
  }
}, yi = function(e, t, n) {
  return {
    element: {
      originElement: e,
      topArea: t._top,
      relative: t._relative,
      toolbar: t._toolBar,
      _toolbarShadow: t._toolbarShadow,
      _buttonTray: t._toolBar.querySelector(".se-btn-tray"),
      _menuTray: t._menuTray,
      resizingBar: t._resizingBar,
      navigation: t._navigation,
      charWrapper: t._charWrapper,
      charCounter: t._charCounter,
      editorArea: t._editorArea,
      wysiwygFrame: t._wysiwygArea,
      wysiwyg: t._wysiwygArea,
      // if (options.iframe) cons._wysiwygArea.contentDocument.body
      code: t._codeArea,
      placeholder: t._placeholder,
      loading: t._loading,
      lineBreaker: t._lineBreaker,
      lineBreaker_t: t._lineBreaker_t,
      lineBreaker_b: t._lineBreaker_b,
      resizeBackground: t._resizeBack,
      _stickyDummy: t._stickyDummy,
      _arrow: t._arrow
    },
    tool: {
      cover: t._toolBar.querySelector(".se-toolbar-cover"),
      bold: t._toolBar.querySelector('[data-command="bold"]'),
      underline: t._toolBar.querySelector('[data-command="underline"]'),
      italic: t._toolBar.querySelector('[data-command="italic"]'),
      strike: t._toolBar.querySelector('[data-command="strike"]'),
      sub: t._toolBar.querySelector('[data-command="SUB"]'),
      sup: t._toolBar.querySelector('[data-command="SUP"]'),
      undo: t._toolBar.querySelector('[data-command="undo"]'),
      redo: t._toolBar.querySelector('[data-command="redo"]'),
      save: t._toolBar.querySelector('[data-command="save"]'),
      outdent: t._toolBar.querySelector('[data-command="outdent"]'),
      indent: t._toolBar.querySelector('[data-command="indent"]'),
      fullScreen: t._toolBar.querySelector('[data-command="fullScreen"]'),
      showBlocks: t._toolBar.querySelector('[data-command="showBlocks"]'),
      codeView: t._toolBar.querySelector('[data-command="codeView"]'),
      dir: t._toolBar.querySelector('[data-command="dir"]'),
      dir_ltr: t._toolBar.querySelector('[data-command="dir_ltr"]'),
      dir_rtl: t._toolBar.querySelector('[data-command="dir_rtl"]')
    },
    options: n,
    option: n
  };
}, Ge = yi;
function Ci(e, t) {
  const n = e._w, o = e.util, l = e.options.historyStackDelayTime;
  let c = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, i = null, _ = 0, r = [];
  function b() {
    const S = r[_];
    c.wysiwyg.innerHTML = S.contents, e.setRange(o.getNodeFromPath(S.s.path, c.wysiwyg), S.s.offset, o.getNodeFromPath(S.e.path, c.wysiwyg), S.e.offset), e.focus(), r.length <= 1 ? (d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : _ === 0 ? (d && d.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : _ === r.length - 1 ? (d && d.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (d && d.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function x() {
    e._checkComponents();
    const S = c.wysiwyg.innerHTML;
    if (!S || r[_] && S === r[_].contents)
      return;
    _++;
    const B = e._variable._range;
    r.length > _ && (r = r.slice(0, _), f && f.setAttribute("disabled", !0)), B ? r[_] = {
      contents: S,
      s: {
        path: o.getNodePath(B.startContainer, null, null),
        offset: B.startOffset
      },
      e: {
        path: o.getNodePath(B.endContainer, null, null),
        offset: B.endOffset
      }
    } : r[_] = {
      contents: S,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, _ === 1 && d && d.removeAttribute("disabled"), e._setCharCount(), t();
  }
  return {
    /**
     * @description History stack
     */
    stack: r,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(S) {
      n.setTimeout(e._resourcesStateChange.bind(e));
      const B = typeof S == "number" ? S > 0 ? S : 0 : S ? l : 0;
      if ((!B || i) && (n.clearTimeout(i), !B)) {
        x();
        return;
      }
      i = n.setTimeout(function() {
        n.clearTimeout(i), i = null, x();
      }, B);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      _ > 0 && (_--, b());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      r.length - 1 > _ && (_++, b());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(S) {
      _ = S < 0 ? r.length - 1 : S, b();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return _;
    },
    /**
     * @description Reset the history object
     */
    reset: function(S) {
      d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), r.splice(0), _ = 0, r[_] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, S || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      c = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, _ === 0 ? (d && d.setAttribute("disabled", !0), f && _ === r.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : _ === r.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      i && n.clearTimeout(i), r = null;
    }
  };
}
const gt = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let n = e.util.createElement("DIV"), o = e.util.createElement("SPAN"), l = e.util.createElement("BUTTON");
    n.className = "se-notice", l.className = "close", l.setAttribute("aria-label", "Close"), l.setAttribute("title", e.lang.dialogBox.close), l.innerHTML = e.icons.cancel, n.appendChild(o), n.appendChild(l), t.notice.modal = n, t.notice.message = o, l.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(n), n = null;
  },
  /**
   * @description Event when clicking the cancel button
   * @param {MouseEvent} e Event object
   */
  onClick_cancel: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.notice.close.call(this);
  },
  /**
   * @description  Open the notice panel
   * @param {String} text Notice message
   */
  open: function(e) {
    this.context.notice.message.textContent = e, this.context.notice.modal.style.display = "block";
  },
  /**
   * @description  Open the notice panel
   */
  close: function() {
    this.context.notice.modal.style.display = "none";
  }
};
function wi(e, t, n, o, l, c) {
  const d = e.element.originElement.ownerDocument || document, f = d.defaultView || window, i = Q, _ = l.icons, r = {
    _d: d,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: l.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: l.__listCommonStyle,
    _listKebab: i.camelToKebabCase(l.__listCommonStyle),
    /**
     * @description Document object of the iframe if created as an iframe || _d
     * @private
     */
    _wd: null,
    /**
     * @description Window object of the iframe if created as an iframe || _w
     * @private
     */
    _ww: null,
    /**
     * @description Closest ShadowRoot to editor if found
     * @private
     */
    _shadowRoot: null,
    /**
     * @description Block controller mousedown events in "shadowRoot" environment
     * @private
     */
    _shadowRootControllerEventTarget: null,
    /**
     * @description Util object
     */
    util: i,
    /**
     * @description Functions object
     */
    functions: null,
    /**
     * @description Editor options
     */
    options: null,
    /**
     * @description Computed style of the wysiwyg area (window.getComputedStyle(context.element.wysiwyg))
     */
    wwComputedStyle: null,
    /**
     * @description Notice object
     */
    notice: gt,
    /**
     * @description Default icons object
     */
    icons: _,
    /**
     * @description History object for undo, redo
     */
    history: null,
    /**
     * @description Elements and user options parameters of the suneditor
     */
    context: e,
    /**
     * @description Plugin buttons
     */
    pluginCallButtons: t,
    /**
     * @description Loaded plugins
     */
    plugins: n || {},
    /**
     * @description Whether the plugin is initialized
     */
    initPlugins: {},
    /**
     * @description Object for managing submenu elements
     * @private
     */
    _targetPlugins: {},
    /**
     * @description Save rendered submenus and containers
     * @private
     */
    _menuTray: {},
    /**
     * @description loaded language
     */
    lang: o,
    /**
     * @description The selection node (core.getSelectionNode()) to which the effect was last applied
     */
    effectNode: null,
    /**
     * @description submenu element
     */
    submenu: null,
    /**
     * @description container element
     */
    container: null,
    /**
     * @description current subment name
     * @private
     */
    _submenuName: "",
    /**
     * @description binded submenuOff method
     * @private
     */
    _bindedSubmenuOff: null,
    /**
     * @description binded containerOff method
     * @private
     */
    _bindedContainerOff: null,
    /**
     * @description active button element in submenu
     */
    submenuActiveButton: null,
    /**
     * @description active button element in container
     */
    containerActiveButton: null,
    /**
     * @description The elements array to be processed unvisible when the controllersOff function is executed (resizing, link modified button, table controller)
     */
    controllerArray: [],
    /**
     * @description The name of the plugin that called the currently active controller
     */
    currentControllerName: "",
    /**
     * @description The target element of current controller
     */
    currentControllerTarget: null,
    /**
     * @description The file component object of current selected file tag (getFileComponent)
     */
    currentFileComponentInfo: null,
    /**
     * @description An array of buttons whose class name is not "se-code-view-enabled"
     */
    codeViewDisabledButtons: [],
    /**
     * @description An array of buttons whose class name is not "se-resizing-enabled"
     */
    resizingDisabledButtons: [],
    /**
     * @description active more layer element in submenu
     * @private
     */
    _moreLayerActiveButton: null,
    /**
     * @description Tag whitelist RegExp object used in "_consistencyCheckOfHTML" method
     * ^(options._editorTagsWhitelist)$
     * @private
     */
    _htmlCheckWhitelistRegExp: null,
    /**
     * @description Tag blacklist RegExp object used in "_consistencyCheckOfHTML" method
     * @private
     */
    _htmlCheckBlacklistRegExp: null,
    /**
     * @description RegExp when using check disallowd tags. (b, i, ins, strike, s)
     * @private
     */
    _disallowedTextTagsRegExp: null,
    /**
     * @description Editor tags whitelist (RegExp object)
     * util.createTagsWhitelist(options._editorTagsWhitelist)
     */
    editorTagsWhitelistRegExp: null,
    /**
     * @description Editor tags blacklist (RegExp object)
     * util.createTagsBlacklist(options.tagsBlacklist)
     */
    editorTagsBlacklistRegExp: null,
    /**
     * @description Tag whitelist when pasting (RegExp object)
     * util.createTagsWhitelist(options.pasteTagsWhitelist)
     */
    pasteTagsWhitelistRegExp: null,
    /**
     * @description Tag blacklist when pasting (RegExp object)
     * util.createTagsBlacklist(options.pasteTagsBlacklist)
     */
    pasteTagsBlacklistRegExp: null,
    /**
     * @description Boolean value of whether the editor has focus
     */
    hasFocus: !1,
    /**
     * @description Boolean value of whether the editor is disabled
     */
    isDisabled: !1,
    /**
     * @description Boolean value of whether the editor is readOnly
     */
    isReadOnly: !1,
    /**
     * @description Attributes whitelist used by the cleanHTML method
     * @private
     */
    _attributesWhitelistRegExp: null,
    _attributesWhitelistRegExp_all_data: null,
    /**
     * @description Attributes blacklist used by the cleanHTML method
     * @private
     */
    _attributesBlacklistRegExp: null,
    /**
     * @description Attributes of tags whitelist used by the cleanHTML method
     * @private
     */
    _attributesTagsWhitelist: null,
    /**
     * @description Attributes of tags blacklist used by the cleanHTML method
     * @private
     */
    _attributesTagsBlacklist: null,
    /**
     * @description binded controllersOff method
     * @private
     */
    _bindControllersOff: null,
    /**
     * @description Is inline mode?
     * @private
     */
    _isInline: null,
    /**
     * @description Is balloon|balloon-always mode?
     * @private
     */
    _isBalloon: null,
    /**
     * @description Is balloon-always mode?
     * @private
     */
    _isBalloonAlways: null,
    /**
     * @description Required value when using inline mode to sticky toolbar
     * @private
     */
    _inlineToolbarAttr: { top: "", width: "", isShow: !1 },
    /**
     * @description Variable that controls the "blur" event in the editor of inline or balloon mode when the focus is moved to submenu
     * @private
     */
    _notHideToolbar: !1,
    /**
     * @description Variable value that sticky toolbar mode
     * @private
     */
    _sticky: !1,
    /**
     * @description Variables for controlling focus and blur events
     * @private
     */
    _antiBlur: !1,
    /**
     * @description Component line breaker element
     * @private
     */
    _lineBreaker: null,
    _lineBreakerButton: null,
    /**
     * @description If true, (initialize, reset) all indexes of image, video information
     * @private
     */
    _componentsInfoInit: !0,
    _componentsInfoReset: !1,
    /**
     * @description Plugins array with "active" method.
     * "activePlugins" runs the "add" method when creating the editor.
     */
    activePlugins: null,
    /**
     * @description Information of tags that should maintain HTML structure, style, class name, etc. (In use by "math" plugin)
     * When inserting "html" such as paste, it is executed on the "html" to be inserted. (core.cleanHTML)
     * Basic Editor Actions:
     * 1. All classes not starting with "__se__" or "se-" in the editor are removed.
     * 2. The style of all tags except the "span" tag is removed from the editor.
     * "managedTagsInfo" structure ex:
     * managedTagsInfo: {
     *   query: '.__se__xxx, se-xxx'
     *   map: {
     *     '__se__xxx': method.bind(core),
     *     'se-xxx': method.bind(core),
     *   }
     * }
     * @example
     * Define in the following return format in the "managedTagInfo" function of the plugin.
     * managedTagInfo() => {
     *  return {
     *    className: 'string', // Class name to identify the tag. ("__se__xxx", "se-xxx")
     *    // Change the html of the "element". ("element" is the element found with "className".)
     *    // "method" is executed by binding "core".
     *    method: function (element) {
     *      // this === core
     *      element.innerHTML = // (rendered html);
     *    }
     *  }
     * }
     */
    managedTagsInfo: null,
    /**
     * @description cashing: options.charCounterType === 'byte-html'
     * @private
     */
    _charTypeHTML: !1,
    /**
     * @description Array of "checkFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "fileInfoPlugins" runs the "add" method when creating the editor.
     * "checkFileInfo" method is always call just before the "change" event.
     * @private
     */
    _fileInfoPluginsCheck: null,
    /**
     * @description Array of "resetFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "checkFileInfo" method is always call just before the "functions.setOptions" method.
     * @private
     */
    _fileInfoPluginsReset: null,
    /**
     * @description Variables for file component management
     * @private
     */
    _fileManager: {
      tags: null,
      regExp: null,
      queryString: null,
      pluginRegExp: null,
      pluginMap: null
    },
    /**
     * @description Elements that need to change text or className for each selection change
     * After creating the editor, "activePlugins" are added.
     * @property {Element} STRONG bold button
     * @property {Element} U underline button
     * @property {Element} EM italic button
     * @property {Element} DEL strike button
     * @property {Element} SUB subscript button
     * @property {Element} SUP superscript button
     * @property {Element} OUTDENT outdent button
     * @property {Element} INDENT indent button
     */
    commandMap: {},
    /**
     * @description CSS properties related to style tags 
     * @private
     */
    _commandMapStyles: {
      STRONG: ["font-weight"],
      U: ["text-decoration"],
      EM: ["font-style"],
      DEL: ["text-decoration"]
    },
    /**
     * @description Style button related to edit area
     * @property {Element} fullScreen fullScreen button element
     * @property {Element} showBlocks showBlocks button element
     * @property {Element} codeView codeView button element
     * @private
     */
    _styleCommandMap: null,
    /**
     * @private
     */
    _cleanStyleRegExp: {
      span: new f.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new f.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new f.RegExp("\\d+" + l.fontSizeUnit + "$", "i")
    },
    /**
     * @description Variables used internally in editor operation
     * @property {Boolean} isCodeView State of code view
     * @property {Boolean} isFullScreen State of full screen
     * @property {Number} innerHeight_fullScreen InnerHeight in editor when in full screen
     * @property {Number} resizeClientY Remember the vertical size of the editor before resizing the editor (Used when calculating during resize operation)
     * @property {Number} tabSize Indent size of tab (4)
     * @property {Number} codeIndent Indent size of Code view mode (2)
     * @property {Number} minResizingSize Minimum size of editing area when resized {Number} (.se-wrapper-inner {min-height: 65px;} || 65)
     * @property {Array} currentNodes  An array of the current cursor's node structure
     * @private
     */
    _variable: {
      isChanged: !1,
      isCodeView: !1,
      isFullScreen: !1,
      innerHeight_fullScreen: 0,
      resizeClientY: 0,
      tabSize: 4,
      codeIndent: 2,
      minResizingSize: i.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
      currentNodes: [],
      currentNodesMap: [],
      _range: null,
      _selectionNode: null,
      _originCssText: e.element.topArea.style.cssText,
      _bodyOverflow: "",
      _editorAreaOriginCssText: "",
      _wysiwygOriginCssText: "",
      _codeOriginCssText: "",
      _fullScreenAttrs: { sticky: !1, balloon: !1, inline: !1 },
      _lineBreakComp: null,
      _lineBreakDir: ""
    },
    /**
     * @description Temp variable for set line attrs
     * @private
     */
    _formatAttrsTemp: null,
    /**
     * @description Save the current buttons states to "allCommandButtons" object
     * @private
     */
    _saveButtonStates: function() {
      this.allCommandButtons || (this.allCommandButtons = {});
      const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let a = 0, u, h; a < s.length; a++)
        u = s[a], h = u.getAttribute("data-command"), this.allCommandButtons[h] = u;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let a = 0, u, h, g; a < s.length; a++)
          u = s[a], h = u.getAttribute("data-command"), g = this.allCommandButtons[h], g && (u.parentElement.replaceChild(g, u), this.context.tool[h] && (this.context.tool[h] = g));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(s, a, u) {
      if (u = u || t[s], this.plugins[s])
        this.initPlugins[s] ? typeof this._targetPlugins[s] == "object" && u && this.initMenuTarget(s, u, this._targetPlugins[s]) : (this.plugins[s].add(this, u), this.initPlugins[s] = !0);
      else
        throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + s + '")');
      this.plugins[s].active && !this.commandMap[s] && u && (this.commandMap[s] = u, this.activePlugins.push(s)), typeof a == "function" && a();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(s) {
      for (let a = 0, u = s.length, h; a < u; a++)
        h = s[a].name, this.plugins[h] || (this.plugins[h] = s[a]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let s = 0, a = 0, u = e.element.topArea;
      for (; u; )
        s += u.scrollTop, a += u.scrollLeft, u = u.parentElement;
      for (u = this._shadowRoot ? this._shadowRoot.host : null; u; )
        s += u.scrollTop, a += u.scrollLeft, u = u.parentElement;
      return {
        top: s,
        left: a
      };
    },
    /**
     * @description Method for managing submenu element.
     * You must add the "submenu" element using the this method at custom plugin.
     * @param {String} pluginName Plugin name
     * @param {Element|null} target Target button
     * @param {Element} menu Submenu element
     */
    initMenuTarget: function(s, a, u) {
      a ? (e.element._menuTray.appendChild(u), this._targetPlugins[s] = !0, this._menuTray[a.getAttribute("data-command")] = u) : this._targetPlugins[s] = u;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(s) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const a = this._submenuName = s.getAttribute("data-command"), u = this.submenu = this._menuTray[a];
      this.submenuActiveButton = s, this._setMenuPosition(s, u), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, i.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const s = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        s.style.display = "none", i.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(s) {
      this._bindedContainerOff && this._bindedContainerOff();
      const a = this._containerName = s.getAttribute("data-command"), u = this.container = this._menuTray[a];
      this.containerActiveButton = s, this._setMenuPosition(s, u), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, i.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(s, a) {
      a.style.visibility = "hidden", a.style.display = "block", a.style.height = "", i.addClass(s, "on");
      const u = this.context.element.toolbar, h = u.offsetWidth, g = b._getEditorOffsets(e.element.toolbar), m = a.offsetWidth, p = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const A = s.offsetWidth, O = m > A ? m - A : 0, P = O > 0 ? 0 : A - m;
        a.style.left = p - O + P + "px", g.left > b._getEditorOffsets(a).left && (a.style.left = "0px");
      } else {
        const A = h <= m ? 0 : h - (p + m);
        A < 0 ? a.style.left = p + A + "px" : a.style.left = p + "px";
      }
      let y = 0, C = s;
      for (; C && C !== u; )
        y += C.offsetTop, C = C.offsetParent;
      const v = y;
      this._isBalloon ? y += u.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const w = g.top, E = a.offsetHeight, k = this.getGlobalScrollOffset().top, z = f.innerHeight - (w - k + v + s.parentElement.offsetHeight);
      if (z < E) {
        let A = -1 * (E - v + 3);
        const O = w - k + A, P = E + (O < 0 ? O : 0);
        P > z ? (a.style.height = P + "px", A = -1 * (P - v + 3)) : (a.style.height = z + "px", A = v + s.parentElement.offsetHeight), a.style.top = A + "px";
      } else
        a.style.top = v + s.parentElement.offsetHeight + "px";
      a.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
      for (let s = 0, a; s < arguments.length; s++)
        if (a = arguments[s], !!a) {
          if (typeof a == "string") {
            this.currentControllerName = a;
            continue;
          }
          if (typeof a == "function") {
            this.controllerArray.push(a);
            continue;
          }
          if (!i.hasClass(a, "se-controller")) {
            this.currentControllerTarget = a, this.currentFileComponentInfo = this.getFileComponent(a);
            continue;
          }
          a.style && (a.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(a) === -1 && (a.addEventListener("mousedown", function(u) {
            u.preventDefault(), u.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(a))), this.controllerArray.push(a);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof x.showController == "function" && x.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(s) {
      this._lineBreaker.style.display = "none";
      const a = this.controllerArray.length;
      if (s && s.target && a > 0) {
        for (let u = 0; u < a; u++)
          if (typeof this.controllerArray[u].contains == "function" && this.controllerArray[u].contains(s.target))
            return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && s && s.type === "keydown" && s.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, a > 0) {
          for (let u = 0; u < a; u++)
            typeof this.controllerArray[u] == "function" ? this.controllerArray[u]() : this.controllerArray[u].style.display = "none";
          this.controllerArray = [];
        }
        this._antiBlur = !1;
      }
    },
    /**
     * @description Specify the position of the controller.
     * @param {Element} controller Controller element.
     * @param {Element} referEl Element that is the basis of the controller's position.
     * @param {String} position Type of position ("top" | "bottom")
     * When using the "top" position, there should not be an arrow on the controller.
     * When using the "bottom" position there should be an arrow on the controller.
     * @param {Object} addOffset These are the left and top values that need to be added specially. 
     * This argument is required. - {left: 0, top: 0}
     * Please enter the value based on ltr mode.
     * Calculated automatically in rtl mode.
     */
    setControllerPosition: function(s, a, u, h) {
      l.rtl && (h.left *= -1);
      const g = i.getOffset(a, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const m = u === "top" ? -(s.offsetHeight + 2) : a.offsetHeight + 12;
      s.style.top = g.top + m + h.top + "px";
      const p = g.left - e.element.wysiwygFrame.scrollLeft + h.left, y = s.offsetWidth, C = a.offsetWidth, v = i.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const w = y > C ? y - C : 0, E = w > 0 ? 0 : C - y;
        s.style.left = p - w + E + "px", w > 0 && v && (v.style.left = (y - 14 < 10 + w ? y - 14 : 10 + w) + "px");
        const k = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        k > 0 && (s.style.left = "0px", v && (v.style.left = k + "px"));
      } else {
        s.style.left = p + "px";
        const w = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + y);
        w < 0 ? (s.style.left = s.offsetLeft + w + "px", v && (v.style.left = 20 - w + "px")) : v && (v.style.left = "20px");
      }
      s.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(s, a, u) {
      this._wd.execCommand(s, a, s === "formatBlock" ? "<" + u + ">" : u), this.history.push(!0);
    },
    /**
     * @description Focus to wysiwyg area using "native focus function"
     */
    nativeFocus: function() {
      this.__focus(), this._editorRange();
    },
    /**
     * @description Focus method
     * @private
     */
    __focus: function() {
      const s = i.getParentElement(this.getSelectionNode(), "figcaption");
      s ? s.focus() : e.element.wysiwyg.focus();
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (e.element.wysiwygFrame.style.display !== "none") {
        if (l.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && i.isWysiwygDiv(s.startContainer)) {
              const a = s.commonAncestorContainer.children[s.startOffset];
              if (!i.isFormatElement(a) && !i.isComponent(a)) {
                const u = i.createElement(l.defaultTag), h = i.createElement("BR");
                u.appendChild(h), e.element.wysiwyg.insertBefore(u, a), this.setRange(h, 0, h, 0);
                return;
              }
            }
            this.setRange(s.startContainer, s.startOffset, s.endContainer, s.endOffset);
          } catch {
            this.nativeFocus();
          }
        b._applyTagEffects(), this._isBalloon && b._toggleToolbarBalloon();
      }
    },
    /**
     * @description If "focusEl" is a component, then that component is selected; if it is a format element, the last text is selected
     * If "focusEdge" is null, then selected last element
     * @param {Element|null} focusEl Focus element
     */
    focusEdge: function(s) {
      s || (s = e.element.wysiwyg.lastElementChild);
      const a = this.getFileComponent(s);
      a ? this.selectComponent(a.target, a.pluginName) : s ? (s = i.getChildElement(s, function(u) {
        return u.childNodes.length === 0 || u.nodeType === 3;
      }, !0), s ? this.setRange(s, s.textContent.length, s, s.textContent.length) : this.nativeFocus()) : this.focus();
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      l.iframe ? e.element.wysiwygFrame.blur() : e.element.wysiwyg.blur();
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(s, a, u, h) {
      if (!s || !u)
        return;
      a > s.textContent.length && (a = s.textContent.length), h > u.textContent.length && (h = u.textContent.length), i.isFormatElement(s) && (s = s.childNodes[a] || s.childNodes[a - 1] || s, a = a > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), i.isFormatElement(u) && (u = u.childNodes[h] || u.childNodes[h - 1] || u, h = h > 0 ? u.nodeType === 1 ? 1 : u.textContent ? u.textContent.length : 0 : 0);
      const g = this._wd.createRange();
      try {
        g.setStart(s, a), g.setEnd(u, h);
      } catch (p) {
        console.warn("[SUNEDITOR.core.focus.error] " + p), this.nativeFocus();
        return;
      }
      const m = this.getSelection();
      return m.removeAllRanges && m.removeAllRanges(), m.addRange(g), this._rangeInfo(g, this.getSelection()), l.iframe && this.__focus(), g;
    },
    /**
     * @description Remove range object and button effect
     */
    removeRange: function() {
      this._variable._range = null, this._variable._selectionNode = null, this.hasFocus && this.getSelection().removeAllRanges(), this._setKeyEffect([]);
    },
    /**
     * @description Get current editor's range object
     * @returns {Object}
     */
    getRange: function() {
      const s = this._variable._range || this._createDefaultRange(), a = this.getSelection();
      if (s.collapsed === a.isCollapsed || !e.element.wysiwyg.contains(a.focusNode))
        return s;
      if (a.rangeCount > 0)
        return this._variable._range = a.getRangeAt(0), this._variable._range;
      {
        const u = a.anchorNode, h = a.focusNode, g = a.anchorOffset, m = a.focusOffset, p = i.compareElements(u, h), y = p.ancestor && (p.result === 0 ? g <= m : p.result > 1);
        return this.setRange(
          y ? u : h,
          y ? g : m,
          y ? h : u,
          y ? m : g
        );
      }
    },
    /**
     * @description If the "range" object is a non-editable area, add a line at the top of the editor and update the "range" object.
     * Returns a new "range" or argument "range".
     * @param {Object} range core.getRange()
     * @param {Element|null} container If there is "container" argument, it creates a line in front of the container.
     * @returns {Object} range
     */
    getRange_addLine: function(s, a) {
      if (this._selectionVoid(s)) {
        const u = e.element.wysiwyg, h = i.createElement(l.defaultTag);
        h.innerHTML = "<br>", u.insertBefore(h, a && a !== u ? a.nextElementSibling : u.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), s = this._variable._range;
      }
      return s;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const s = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      return !this._variable._range && !e.element.wysiwyg.contains(s.focusNode) && (s.removeAllRanges(), s.addRange(this._createDefaultRange())), s;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (e.element.wysiwyg.contains(this._variable._selectionNode) || this._editorRange(), !this._variable._selectionNode) {
        const s = i.getChildElement(e.element.wysiwyg.firstChild, function(a) {
          return a.childNodes.length === 0 || a.nodeType === 3;
        }, !1);
        if (!s)
          this._editorRange();
        else
          return this._variable._selectionNode = s, s;
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const s = this._wd.activeElement;
      if (i.isInputElement(s))
        return this._variable._selectionNode = s, s;
      const a = this.getSelection();
      if (!a)
        return null;
      let u = null;
      a.rangeCount > 0 ? u = a.getRangeAt(0) : u = this._createDefaultRange(), this._rangeInfo(u, a);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(s, a) {
      let u = null;
      this._variable._range = s, s.collapsed ? i.isWysiwygDiv(s.commonAncestorContainer) ? u = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : u = s.commonAncestorContainer : u = a.extentNode || a.anchorNode, this._variable._selectionNode = u;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, a = this._wd.createRange();
      let u = s.firstElementChild, h = null;
      return u ? (h = u.firstChild, h || (h = i.createElement("BR"), u.appendChild(h))) : (u = i.createElement(l.defaultTag), h = i.createElement("BR"), u.appendChild(h), s.appendChild(u)), a.setStart(h, 0), a.setEnd(h, 0), a;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(s) {
      const a = s.commonAncestorContainer;
      return i.isWysiwygDiv(s.startContainer) && i.isWysiwygDiv(s.endContainer) || /FIGURE/i.test(a.nodeName) || this._fileManager.regExp.test(a.nodeName) || i.isMediaComponent(a);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const s = this.getRange();
      if (this._selectionVoid(s))
        return !1;
      let a = s.startContainer, u = s.startOffset, h = s.endContainer, g = s.endOffset, m, p, y;
      if (i.isFormatElement(a))
        for (a.childNodes[u] ? (a = a.childNodes[u] || a, u = 0) : (a = a.lastChild || a, u = a.textContent.length); a && a.nodeType === 1 && a.firstChild; )
          a = a.firstChild || a, u = 0;
      if (i.isFormatElement(h)) {
        for (h = h.childNodes[g] || h.lastChild || h; h && h.nodeType === 1 && h.lastChild; )
          h = h.lastChild;
        g = h.textContent.length;
      }
      if (m = i.isWysiwygDiv(a) ? e.element.wysiwyg.firstChild : a, p = u, i.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const C = i.isBreak(m);
        if (!C) {
          for (; m && !i.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[p] || m.nextElementSibling || m.nextSibling, p = 0;
          let v = i.getFormatElement(m, null);
          v === i.getRangeFormatElement(v, null) && (v = i.createElement(i.getParentElement(m, i.isCell) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(v, m), v.appendChild(m));
        }
        if (i.isBreak(m)) {
          const v = i.createTextNode(i.zeroWidthSpace);
          m.parentNode.insertBefore(v, m), m = v, C && a === h && (h = m, g = 1);
        }
      }
      if (a = m, u = p, m = i.isWysiwygDiv(h) ? e.element.wysiwyg.lastChild : h, p = g, i.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const C = i.isBreak(m);
        if (!C) {
          for (; m && !i.isBreak(m) && m.nodeType === 1 && (y = m.childNodes, y.length !== 0); )
            m = y[p > 0 ? p - 1 : p] || !/FIGURE/i.test(y[0].nodeName) ? y[0] : m.previousElementSibling || m.previousSibling || a, p = p > 0 ? m.textContent.length : p;
          let v = i.getFormatElement(m, null);
          v === i.getRangeFormatElement(v, null) && (v = i.createElement(i.isCell(v) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(v, m), v.appendChild(m));
        }
        if (i.isBreak(m)) {
          const v = i.createTextNode(i.zeroWidthSpace);
          m.parentNode.insertBefore(v, m), m = v, p = 1, C && !m.previousSibling && i.removeItem(h);
        }
      }
      return h = m, g = p, this.setRange(a, u, h, g), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(s) {
      if (!this._resetRangeToTextNode())
        return [];
      let a = this.getRange();
      if (i.isWysiwygDiv(a.startContainer)) {
        const A = e.element.wysiwyg.children;
        if (A.length === 0)
          return [];
        this.setRange(A[0], 0, A[A.length - 1], A[A.length - 1].textContent.trim().length), a = this.getRange();
      }
      const u = a.startContainer, h = a.endContainer, g = a.commonAncestorContainer, m = i.getListChildren(g, function(A) {
        return s ? s(A) : i.isFormatElement(A);
      });
      if (!i.isWysiwygDiv(g) && !i.isRangeFormatElement(g) && m.unshift(i.getFormatElement(g, null)), u === h || m.length === 1)
        return m;
      let p = i.getFormatElement(u, null), y = i.getFormatElement(h, null), C = null, v = null;
      const w = function(A) {
        return i.isTable(A) ? /^TABLE$/i.test(A.nodeName) : !0;
      };
      let E = i.getRangeFormatElement(p, w), k = i.getRangeFormatElement(y, w);
      i.isTable(E) && i.isListCell(E.parentNode) && (E = E.parentNode), i.isTable(k) && i.isListCell(k.parentNode) && (k = k.parentNode);
      const z = E === k;
      for (let A = 0, O = m.length, P; A < O; A++) {
        if (P = m[A], p === P || !z && P === E) {
          C = A;
          continue;
        }
        if (y === P || !z && P === k) {
          v = A;
          break;
        }
      }
      return C === null && (C = 0), v === null && (v = m.length - 1), m.slice(C, v + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const a = this.getRange().commonAncestorContainer, u = i.getParentElement(a, i.isComponent), h = i.isTable(a) ? this.getSelectedElements(null) : this.getSelectedElements((function(g) {
        const m = this.getParentElement(g, this.isComponent);
        return this.isFormatElement(g) && (!m || m === u) || this.isComponent(g) && !this.getFormatElement(g);
      }).bind(i));
      if (s) {
        for (let g = 0, m = h.length; g < m; g++)
          for (let p = g - 1; p >= 0; p--)
            if (h[p].contains(h[g])) {
              h.splice(g, 1), g--, m--;
              break;
            }
      }
      return h;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("front": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(s, a, u) {
      return u !== "end" && a === 0 || (!u || u !== "front") && !s.nodeValue && a === 1 || (!u || u === "end") && !!s.nodeValue && a === s.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "front": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(s, a, u) {
      if (!this.isEdgePoint(s, a, u))
        return !1;
      const h = [];
      for (u = u === "front" ? "previousSibling" : "nextSibling"; s && !i.isFormatElement(s) && !i.isWysiwygDiv(s); )
        if (!s[u] || i.isBreak(s[u]) && !s[u][u])
          s.nodeType === 1 && h.push(s.cloneNode(!1)), s = s.parentNode;
        else
          return null;
      return h;
    },
    /**
     * @description Show loading box
     */
    showLoading: function() {
      e.element.loading.style.display = "block";
    },
    /**
     * @description Close loading box
     */
    closeLoading: function() {
      e.element.loading.style.display = "none";
    },
    /**
     * @description Append format element to sibling node of argument element.
     * If the "formatNodeName" argument value is present, the tag of that argument value is inserted,
     * If not, the currently selected format tag is inserted.
     * @param {Element} element Insert as siblings of that element
     * @param {String|Element|null} formatNode Node name or node obejct to be inserted
     * @returns {Element}
     */
    appendFormatTag: function(s, a) {
      if (!s || !s.parentNode)
        return null;
      const u = i.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!i.isFormatElement(s) && i.isFreeFormatElement(u || s.parentNode))
        h = i.createElement("BR");
      else {
        const g = a ? typeof a == "string" ? a : a.nodeName : i.isFormatElement(u) && !i.isRangeFormatElement(u) && !i.isFreeFormatElement(u) ? u.nodeName : l.defaultTag;
        h = i.createElement(g), h.innerHTML = "<br>", (a && typeof a != "string" || !a && i.isFormatElement(u)) && i.copyTagAttributes(h, a || u, ["id"]);
      }
      return i.isCell(s) ? s.insertBefore(h, s.nextElementSibling) : s.parentNode.insertBefore(h, s.nextElementSibling), h;
    },
    /**
     * @description The method to insert a element and return. (used elements : table, hr, image, video)
     * If "element" is "HR", insert and return the new line.
     * @param {Element} element Element to be inserted
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} notSelect If true, Do not automatically select the inserted component.
     * @returns {Element}
     */
    insertComponent: function(s, a, u, h) {
      if (this.isReadOnly || u && !this.checkCharCount(s, null))
        return null;
      const g = this.removeNode();
      this.getRange_addLine(this.getRange(), g.container);
      let m = null, p = this.getSelectionNode(), y = i.getFormatElement(p, null);
      if (i.isListCell(y))
        this.insertNode(s, p === y ? null : g.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(i.createElement("BR"));
      else {
        if (this.getRange().collapsed && (g.container.nodeType === 3 || i.isBreak(g.container))) {
          const C = i.getParentElement(g.container, (function(v) {
            return this.isRangeFormatElement(v);
          }).bind(i));
          m = i.splitElement(g.container, g.offset, C ? i.getElementDepth(C) + 1 : 0), m && (y = m.previousSibling);
        }
        this.insertNode(s, i.isRangeFormatElement(y) ? null : y, !1), y && i.onlyZeroWidthSpace(y) && i.removeItem(y);
      }
      if (!h) {
        this.setRange(s, 0, s, 0);
        const C = this.getFileComponent(s);
        C ? this.selectComponent(C.target, C.pluginName) : m && (m = i.getEdgeChildNodes(m, null).sc || m, this.setRange(m, 0, m, 0));
      }
      return a || this.history.push(1), m || s;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(s) {
      if (!this._fileManager.queryString || !s)
        return null;
      let a, u;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (a = s.querySelector(this._fileManager.queryString)), !a && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (a = s), a && (u = this._fileManager.pluginMap[a.nodeName.toLowerCase()], u) ? {
        target: a,
        component: i.getParentElement(a, i.isComponent),
        pluginName: u
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(s, a) {
      if (i.isUneditableComponent(i.getParentElement(s, i.isComponent)) || i.isUneditableComponent(s))
        return !1;
      this.hasFocus || this.focus();
      const u = this.plugins[a];
      u && f.setTimeout((function() {
        typeof u.select == "function" && this.callPlugin(a, u.select.bind(this, s), null), this._setComponentLineBreaker(s);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(s) {
      this._lineBreaker.style.display = "none";
      const a = i.getParentElement(s, i.isComponent), u = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, g = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, m = i.isListCell(a.parentNode);
      let p, y, C;
      (m ? !a.previousSibling : !i.isFormatElement(a.previousElementSibling)) ? (this._variable._lineBreakComp = a, y = e.element.wysiwyg.scrollTop, p = i.getOffset(s, e.element.wysiwygFrame).top + y, C = g.offsetWidth / 2 / 2, u.top = p - y - 12 + "px", u.left = i.getOffset(g).left + C + "px", u.display = "block") : u.display = "none", (m ? !a.nextSibling : !i.isFormatElement(a.nextElementSibling)) ? (p || (this._variable._lineBreakComp = a, y = e.element.wysiwyg.scrollTop, p = i.getOffset(s, e.element.wysiwygFrame).top + y, C = g.offsetWidth / 2 / 2), h.top = p + g.offsetHeight - y - 12 + "px", h.left = i.getOffset(g).left + g.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(s, a) {
      (function u(h) {
        r._dupleCheck(h, a);
        const g = h.childNodes;
        for (let m = 0, p = g.length; m < p; m++)
          u(g[m]);
      })(s);
    },
    _dupleCheck: function(s, a) {
      if (!i.isTextStyleElement(s))
        return;
      const u = (s.style.cssText.match(/[^;]+;/g) || []).map(function(m) {
        return m.trim();
      }), h = s.nodeName;
      if (/^span$/i.test(h) && u.length === 0)
        return s;
      let g = !1;
      return function m(p) {
        if (!(i.isWysiwygDiv(p) || !i.isTextStyleElement(p))) {
          if (p.nodeName === h) {
            g = !0;
            const y = p.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, v = y.length, w; C < v; C++)
              (w = u.indexOf(y[C].trim())) > -1 && u.splice(w, 1);
            for (let C = 0, v = p.classList.length; C < v; C++)
              s.classList.remove(p.classList[C]);
          }
          m(p.parentElement);
        }
      }(a), g && ((s.style.cssText = u.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
    },
    /**
     * @description Delete selected node and insert argument value node and return.
     * If the "afterNode" exists, it is inserted after the "afterNode"
     * Inserting a text node merges with both text nodes on both sides and returns a new "{ container, startOffset, endOffset }".
     * @param {Node} oNode Element to be inserted
     * @param {Node|null} afterNode If the node exists, it is inserted after the node
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @returns {Object|Node|null}
     */
    insertNode: function(s, a, u) {
      if (this.isReadOnly || u && !this.checkCharCount(s, null))
        return null;
      let h = this.getRange(), g = i.isListCell(h.commonAncestorContainer) ? h.commonAncestorContainer : i.getFormatElement(this.getSelectionNode(), null), m = i.isListCell(g) && (i.isListCell(s) || i.isList(s)), p, y, C, v = null;
      const w = i.isFreeFormatElement(g), E = !w && (i.isFormatElement(s) || i.isRangeFormatElement(s)) || i.isComponent(s);
      if (m && (C = a || i.isList(s) ? g.lastChild : g.nextElementSibling, v = i.isList(s) ? g : (C || g).parentNode), !a && (E || i.isComponent(s) || i.isMedia(s))) {
        const T = this.isEdgePoint(h.endContainer, h.endOffset, "end"), H = this.removeNode(), I = H.container, L = I === H.prevContainer && h.collapsed ? null : H.prevContainer;
        if (m && L)
          if (v = L.nodeType === 3 ? L.parentNode : L, v.contains(I)) {
            let D = !0;
            for (C = I; C.parentNode && C.parentNode !== v; )
              C = C.parentNode, D = !1;
            D && I === L && (C = C.nextSibling);
          } else
            C = null;
        else if (m && i.isListCell(I) && !g.parentElement)
          g = i.createElement("LI"), v.appendChild(g), I.appendChild(v), C = null;
        else if (I.nodeType === 3 || i.isBreak(I) || m) {
          const D = i.getParentElement(I, (function(R) {
            return this.isRangeFormatElement(R) || this.isListCell(R);
          }).bind(i));
          if (a = i.splitElement(I, H.offset, D ? i.getElementDepth(D) + 1 : 0), !a)
            C = a = g;
          else if (m) {
            if (g.contains(I)) {
              const R = i.isList(g.lastElementChild);
              let M = null;
              T || (M = g.cloneNode(!1), M.appendChild(a.textContent.trim() ? a : i.createTextNode(i.zeroWidthSpace))), R && (M || (M = g.cloneNode(!1), M.appendChild(i.createTextNode(i.zeroWidthSpace))), M.appendChild(g.lastElementChild)), M && (g.parentNode.insertBefore(M, g.nextElementSibling), C = a = M);
            }
          } else
            a = a.previousSibling;
        }
      }
      h = !a && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const k = h.commonAncestorContainer, z = h.startOffset, A = h.endOffset, O = h.startContainer === k && i.isFormatElement(k), P = O && (k.childNodes[z] || k.childNodes[0]) || h.startContainer, V = O && (k.childNodes[A] || k.childNodes[k.childNodes.length - 1]) || h.endContainer;
      if (!m)
        if (a)
          p = a.parentNode, a = a.nextSibling, y = !0;
        else if (p = P, P.nodeType === 3 && (p = P.parentNode), h.collapsed)
          if (k.nodeType === 3)
            k.textContent.length > A ? a = k.splitText(A) : a = k.nextSibling;
          else if (i.isBreak(p))
            a = p, p = p.parentNode;
          else {
            let T = p.childNodes[z];
            const H = T && T.nodeType === 3 && i.onlyZeroWidthSpace(T) && i.isBreak(T.nextSibling) ? T.nextSibling : T;
            H ? !H.nextSibling && i.isBreak(H) ? (p.removeChild(H), a = null) : a = i.isBreak(H) && !i.isBreak(s) ? H : H.nextSibling : a = null;
          }
        else if (P === V) {
          this.isEdgePoint(V, A) ? a = V.nextSibling : a = V.splitText(A);
          let H = P;
          this.isEdgePoint(P, z) || (H = P.splitText(z)), p.removeChild(H), p.childNodes.length === 0 && E && (p.innerHTML = "<br>");
        } else {
          const H = this.removeNode(), I = H.container, L = H.prevContainer;
          if (I && I.childNodes.length === 0 && E && (i.isFormatElement(I) ? I.innerHTML = "<br>" : i.isRangeFormatElement(I) && (I.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), i.isListCell(I) && s.nodeType === 3)
            p = I, a = null;
          else if (!E && L)
            if (p = L.nodeType === 3 ? L.parentNode : L, p.contains(I)) {
              let D = !0;
              for (a = I; a.parentNode && a.parentNode !== p; )
                a = a.parentNode, D = !1;
              D && I === L && (a = a.nextSibling);
            } else
              a = null;
          else
            i.isWysiwygDiv(I) && !i.isFormatElement(s) ? (p = I.appendChild(i.createElement(l.defaultTag)), a = null) : (a = E ? V : I === L ? I.nextSibling : I, p = !a || !a.parentNode ? k : a.parentNode);
          for (; a && !i.isFormatElement(a) && a.parentNode !== k; )
            a = a.parentNode;
        }
      try {
        if (!m) {
          if ((i.isWysiwygDiv(a) || p === e.element.wysiwyg.parentNode) && (p = e.element.wysiwyg, a = null), i.isFormatElement(s) || i.isRangeFormatElement(s) || !i.isListCell(p) && i.isComponent(s)) {
            const T = p;
            if (i.isList(a))
              p = a, a = null;
            else if (i.isListCell(a))
              p = a.previousElementSibling || a;
            else if (!y && !a) {
              const H = this.removeNode(), I = H.container.nodeType === 3 ? i.isListCell(i.getFormatElement(H.container, null)) ? H.container : i.getFormatElement(H.container, null) || H.container.parentNode : H.container, L = i.isWysiwygDiv(I) || i.isRangeFormatElement(I);
              p = L ? I : I.parentNode, a = L ? null : I.nextSibling;
            }
            T.childNodes.length === 0 && p !== T && i.removeItem(T);
          }
          if (E && !w && !i.isRangeFormatElement(p) && !i.isListCell(p) && !i.isWysiwygDiv(p) && (a = p.nextElementSibling, p = p.parentNode), i.isWysiwygDiv(p) && (s.nodeType === 3 || i.isBreak(s))) {
            const T = i.createElement(l.defaultTag);
            T.appendChild(s), s = T;
          }
        }
        if (m ? v.parentNode ? (p = v, a = C) : (p = e.element.wysiwyg, a = null) : a = p === a ? p.lastChild : a, i.isListCell(s) && !i.isList(p)) {
          if (i.isListCell(p))
            a = p.nextElementSibling, p = p.parentNode;
          else {
            const T = i.createElement("ol");
            p.insertBefore(T, a), p = T, a = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(s, p), p.insertBefore(s, a), m)
          if (i.onlyZeroWidthSpace(g.textContent.trim()))
            i.removeItem(g), s = s.lastChild;
          else {
            const T = i.getArrayItem(g.children, i.isList);
            T && (s !== T ? (s.appendChild(T), s = T.previousSibling) : (p.appendChild(s), s = p), i.onlyZeroWidthSpace(g.textContent.trim()) && i.removeItem(g));
          }
      } catch (T) {
        p.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + T);
      } finally {
        const T = p.querySelectorAll("[data-se-duple]");
        if (T.length > 0)
          for (let H = 0, I = T.length, L, D, R, M; H < I; H++) {
            for (L = T[H], R = L.childNodes, M = L.parentNode; R[0]; )
              D = R[0], M.insertBefore(D, L);
            L === s && (s = D), i.removeItem(L);
          }
        if ((i.isFormatElement(s) || i.isComponent(s)) && P === V) {
          const H = i.getFormatElement(k, null);
          H && H.nodeType === 1 && i.isEmptyLine(H) && i.removeItem(H);
        }
        if (w && (i.isFormatElement(s) || i.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !i.isComponent(s)) {
          let H = 1;
          if (s.nodeType === 3) {
            const I = s.previousSibling, L = s.nextSibling, D = !I || I.nodeType === 1 || i.onlyZeroWidthSpace(I) ? "" : I.textContent, R = !L || L.nodeType === 1 || i.onlyZeroWidthSpace(L) ? "" : L.textContent;
            I && D.length > 0 && (s.textContent = D + s.textContent, i.removeItem(I)), L && L.length > 0 && (s.textContent += R, i.removeItem(L));
            const M = {
              container: s,
              startOffset: D.length,
              endOffset: s.textContent.length - R.length
            };
            return this.setRange(s, M.startOffset, s, M.endOffset), M;
          } else if (!i.isBreak(s) && !i.isListCell(s) && i.isFormatElement(p)) {
            let I = null;
            (!s.previousSibling || i.isBreak(s.previousSibling)) && (I = i.createTextNode(i.zeroWidthSpace), s.parentNode.insertBefore(I, s)), (!s.nextSibling || i.isBreak(s.nextSibling)) && (I = i.createTextNode(i.zeroWidthSpace), s.parentNode.insertBefore(I, s.nextSibling)), i._isIgnoreNodeChange(s) && (s = s.nextSibling, H = 0);
          }
          this.setRange(s, H, s, H);
        }
        return this.history.push(!0), s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const a = s.parentNode;
      let u, h;
      for (; i.isFormatElement(s) || i.isRangeFormatElement(s); ) {
        for (u = s.childNodes, h = null; u[0]; ) {
          if (h = u[0], i.isFormatElement(h) || i.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !s.parentNode)
              break;
            u = s.childNodes;
            continue;
          }
          a.insertBefore(h, s);
        }
        s.childNodes.length === 0 && i.removeItem(s), s = i.createElement("BR"), a.insertBefore(s, h.nextSibling);
      }
      return s;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const s = this.getRange(), a = s.startOffset === 0, u = r.isEdgePoint(s.endContainer, s.endOffset, "end");
      let h = null, g = null, m = null;
      a && (g = i.getFormatElement(s.startContainer), h = g.previousElementSibling, g = g && h), u && (m = i.getFormatElement(s.endContainer), m = m && m.nextElementSibling);
      let p, y = 0, C = s.startContainer, v = s.endContainer, w = s.startOffset, E = s.endOffset;
      const k = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (k === C && k === v && (C = k.children[w], v = k.children[E], w = E = 0), !C || !v)
        return {
          container: k,
          offset: 0
        };
      if (C === v && s.collapsed && C.textContent && i.onlyZeroWidthSpace(C.textContent.substr(w)))
        return {
          container: C,
          offset: w,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, A = null;
      const O = i.getListChildNodes(k, null);
      let P = i.getArrayIndex(O, C), V = i.getArrayIndex(O, v);
      if (O.length > 0 && P > -1 && V > -1) {
        for (let I = P + 1, L = C; I >= 0; I--)
          O[I] === L.parentNode && O[I].firstChild === L && w === 0 && (P = I, L = L.parentNode);
        for (let I = V - 1, L = v; I > P; I--)
          O[I] === L.parentNode && O[I].nodeType === 1 && (O.splice(I, 1), L = L.parentNode, --V);
      } else {
        if (O.length === 0) {
          if (i.isFormatElement(k) || i.isRangeFormatElement(k) || i.isWysiwygDiv(k) || i.isBreak(k) || i.isMedia(k))
            return {
              container: k,
              offset: 0
            };
          if (k.nodeType === 3)
            return {
              container: k,
              offset: E
            };
          O.push(k), C = v = k;
        } else if (C = v = O[0], i.isBreak(C) || i.onlyZeroWidthSpace(C))
          return {
            container: i.isMedia(k) ? k : C,
            offset: 0
          };
        P = V = 0;
      }
      for (let I = P; I <= V; I++) {
        const L = O[I];
        if (L.length === 0 || L.nodeType === 3 && L.data === void 0) {
          this._nodeRemoveListItem(L);
          continue;
        }
        if (L === C) {
          if (C.nodeType === 1) {
            if (i.isComponent(C))
              continue;
            z = i.createTextNode(C.textContent);
          } else
            L === v ? (z = i.createTextNode(C.substringData(0, w) + v.substringData(E, v.length - E)), y = w) : z = i.createTextNode(C.substringData(0, w));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), L === v)
            break;
          continue;
        }
        if (L === v) {
          if (v.nodeType === 1) {
            if (i.isComponent(v))
              continue;
            A = i.createTextNode(v.textContent);
          } else
            A = i.createTextNode(v.substringData(E, v.length - E));
          A.length > 0 ? v.data = A.data : this._nodeRemoveListItem(v);
          continue;
        }
        this._nodeRemoveListItem(L);
      }
      const T = i.getParentElement(v, "ul"), H = i.getParentElement(C, "li");
      if (T && H && H.contains(T) ? (p = T.previousSibling, y = p.textContent.length) : (p = v && v.parentNode ? v : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !a && !u ? y : u ? p.textContent.length : 0), !i.isWysiwygDiv(p) && p.childNodes.length === 0) {
        const I = i.removeItemAllParents(p, null, null);
        I && (p = I.sc || I.ec || e.element.wysiwyg);
      }
      return !i.getFormatElement(p) && !(C && C.parentNode) && (m ? (p = m, y = 0) : g && (p = g, y = 1)), this.setRange(p, y, p, y), this.history.push(!0), {
        container: p,
        offset: y,
        prevContainer: h
      };
    },
    _nodeRemoveListItem: function(s) {
      const a = i.getFormatElement(s, null);
      i.removeItem(s), i.isListCell(a) && (i.removeItemAllParents(a, null, null), a && i.isList(a.firstChild) && a.insertBefore(i.createTextNode(i.zeroWidthSpace), a.firstChild));
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(s) {
      this.getRange_addLine(this.getRange(), null);
      const a = this.getSelectedElementsAndComponents(!1);
      if (!a || a.length === 0)
        return;
      e:
        for (let E = 0, k = a.length, z, A, O, P, V, T; E < k; E++)
          if (z = a[E], !!i.isListCell(z) && (A = z.lastElementChild, A && i.isListCell(z.nextElementSibling) && a.indexOf(z.nextElementSibling) > -1 && (P = A.lastElementChild, a.indexOf(P) > -1))) {
            let H = null;
            for (; H = P.lastElementChild; )
              if (i.isList(H))
                if (a.indexOf(H.lastElementChild) > -1)
                  P = H.lastElementChild;
                else
                  continue e;
            O = A.firstElementChild, V = a.indexOf(O), T = a.indexOf(P), a.splice(V, T - V + 1), k = a.length;
            continue;
          }
      let u = a[a.length - 1], h, g, m;
      i.isRangeFormatElement(u) || i.isFormatElement(u) ? h = u : h = i.getRangeFormatElement(u, null) || i.getFormatElement(u, null), i.isCell(h) ? (g = null, m = h) : (g = h.nextSibling, m = h.parentNode);
      let p = i.getElementDepth(h), y = null;
      const C = [], v = function(E, k, z) {
        let A = null;
        if (E !== k && !i.isTable(k)) {
          if (k && i.getElementDepth(E) === i.getElementDepth(k))
            return z;
          A = i.removeItemAllParents(k, null, E);
        }
        return A ? A.ec : z;
      };
      for (let E = 0, k = a.length, z, A, O, P, V, T, H; E < k; E++)
        if (z = a[E], A = z.parentNode, !(!A || s.contains(A)))
          if (O = i.getElementDepth(z), i.isList(A)) {
            if (y === null && (T ? (y = T, H = !0, T = null) : y = A.cloneNode(!1)), C.push(z), V = a[E + 1], E === k - 1 || V && V.parentNode !== A) {
              V && z.contains(V.parentNode) && (T = V.parentNode.cloneNode(!1));
              let I = A.parentNode, L;
              for (; i.isList(I); )
                L = i.createElement(I.nodeName), L.appendChild(y), y = L, I = I.parentNode;
              const D = this.detachRangeFormatElement(A, C, null, !0, !0);
              p >= O ? (p = O, m = D.cc, g = v(m, A, D.ec), g && (m = g.parentNode)) : m === D.cc && (g = D.ec), m !== D.cc && (P = v(m, D.cc, P), P !== void 0 ? g = P : g = D.cc);
              for (let R = 0, M = D.removeArray.length; R < M; R++)
                y.appendChild(D.removeArray[R]);
              H || s.appendChild(y), T && D.removeArray[D.removeArray.length - 1].appendChild(T), y = null, H = !1;
            }
          } else
            p >= O && (p = O, m = A, g = z.nextSibling), s.appendChild(z), m !== A && (P = v(m, A), P !== void 0 && (g = P));
      if (this.effectNode = null, i.mergeSameTags(s, null, !1), i.mergeNestedTags(s, (function(E) {
        return this.isList(E);
      }).bind(i)), g && i.getElementDepth(g) > 0 && (i.isList(g.parentNode) || i.isList(g.parentNode.parentNode))) {
        const E = i.getParentElement(g, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(i)), k = i.splitElement(g, null, E ? i.getElementDepth(E) + 1 : 0);
        k.parentNode.insertBefore(s, k);
      } else
        m.insertBefore(s, g), v(s, g);
      const w = i.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
      a.length > 1 ? this.setRange(w.sc, 0, w.ec, w.ec.textContent.length) : this.setRange(w.ec, w.ec.textContent.length, w.ec, w.ec.textContent.length), this.history.push(!1);
    },
    /**
     * @description The elements of the "selectedFormats" array are detached from the "rangeElement" element. ("LI" tags are converted to "P" tags)
     * When "selectedFormats" is null, all elements are detached and return {cc: parentNode, sc: nextSibling, ec: previousSibling, removeArray: [Array of removed elements]}.
     * @param {Element} rangeElement Range format element (PRE, BLOCKQUOTE, OL, UL...)
     * @param {Array|null} selectedFormats Array of format elements (P, DIV, LI...) to remove.
     * If null, Applies to all elements and return {cc: parentNode, sc: nextSibling, ec: previousSibling}
     * @param {Element|null} newRangeElement The node(rangeElement) to replace the currently wrapped node.
     * @param {Boolean} remove If true, deleted without detached.
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @returns {Object}
     */
    detachRangeFormatElement: function(s, a, u, h, g) {
      const m = this.getRange();
      let p = m.startOffset, y = m.endOffset, C = i.getListChildNodes(s, function(D) {
        return D.parentNode === s;
      }), v = s.parentNode, w = null, E = null, k = s.cloneNode(!1);
      const z = [], A = i.isList(u);
      let O = !1, P = !1, V = !1;
      function T(D, R, M, U) {
        if (i.onlyZeroWidthSpace(R) && (R.innerHTML = i.zeroWidthSpace, p = y = 1), R.nodeType === 3)
          return D.insertBefore(R, M), R;
        const j = (V ? R : U).childNodes;
        let $ = R.cloneNode(!1), Y = null, q = null;
        for (; j[0]; )
          q = j[0], i._notTextNode(q) && !i.isBreak(q) && !i.isListCell($) ? ($.childNodes.length > 0 && (Y || (Y = $), D.insertBefore($, M), $ = R.cloneNode(!1)), D.insertBefore(q, M), Y || (Y = q)) : $.appendChild(q);
        if ($.childNodes.length > 0) {
          if (i.isListCell(D) && i.isListCell($) && i.isList(M))
            if (A) {
              for (Y = M; M; )
                $.appendChild(M), M = M.nextSibling;
              D.parentNode.insertBefore($, D.nextElementSibling);
            } else {
              const Z = U.nextElementSibling, G = i.detachNestedList(U, !1);
              if (s !== G || Z !== U.nextElementSibling) {
                const K = $.childNodes;
                for (; K[0]; )
                  U.appendChild(K[0]);
                s = G, P = !0;
              }
            }
          else
            D.insertBefore($, M);
          Y || (Y = $);
        }
        return Y;
      }
      for (let D = 0, R = C.length, M, U, j; D < R; D++)
        if (M = C[D], !(M.nodeType === 3 && i.isList(k)))
          if (V = !1, h && D === 0 && (!a || a.length === R || a[0] === M ? w = s.previousSibling : w = k), a && (U = a.indexOf(M)), a && U === -1)
            k || (k = s.cloneNode(!1)), k.appendChild(M);
          else {
            if (a && (j = a[U + 1]), k && k.children.length > 0 && (v.insertBefore(k, s), k = null), !A && i.isListCell(M))
              if (j && i.getElementDepth(M) !== i.getElementDepth(j) && (i.isListCell(v) || i.getArrayItem(M.children, i.isList, !1))) {
                const $ = M.nextElementSibling, Y = i.detachNestedList(M, !1);
                (s !== Y || $ !== M.nextElementSibling) && (s = Y, P = !0);
              } else {
                const $ = M;
                M = i.createElement(h ? $.nodeName : i.isList(s.parentNode) || i.isListCell(s.parentNode) ? "LI" : i.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const Y = i.isListCell(M), q = $.childNodes;
                for (; q[0] && !(i.isList(q[0]) && !Y); )
                  M.appendChild(q[0]);
                i.copyFormatAttributes(M, $), V = !0;
              }
            else
              M = M.cloneNode(!1);
            if (!P && (h ? (z.push(M), i.removeItem(C[D])) : (u ? (O || (v.insertBefore(u, s), O = !0), M = T(u, M, null, C[D])) : M = T(v, M, s, C[D]), P || (a ? (E = M, w || (w = M)) : w || (w = E = M))), P)) {
              P = V = !1, C = i.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), k = s.cloneNode(!1), v = s.parentNode, D = -1, R = C.length;
              continue;
            }
          }
      const H = s.parentNode;
      let I = s.nextSibling;
      k && k.children.length > 0 && H.insertBefore(k, I), u ? w = u.previousSibling : w || (w = s.previousSibling), I = s.nextSibling !== k ? s.nextSibling : k ? k.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? i.removeItem(s) : i.removeEmptyNode(s, null, !1);
      let L = null;
      if (h)
        L = {
          cc: H,
          sc: w,
          so: p,
          ec: I,
          eo: y,
          removeArray: z
        };
      else {
        w || (w = E), E || (E = w);
        const D = i.getEdgeChildNodes(w, E.parentNode ? w : E);
        L = {
          cc: (D.sc || D.ec).parentNode,
          sc: D.sc,
          so: p,
          ec: D.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, g)
        return L;
      !h && L && (a ? this.setRange(L.sc, p, L.ec, y) : this.setRange(L.sc, 0, L.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, a) {
      let u = {}, h = !1, g = !1, m = null, p = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(i);
      for (let C = 0, v = s.length, w, E, k, z; C < v; C++) {
        if (k = C === v - 1, E = i.getRangeFormatElement(s[C], y), z = i.isList(E), !w && z)
          w = E, u = { r: w, f: [i.getParentElement(s[C], "LI")] }, C === 0 && (h = !0);
        else if (w && z)
          if (w !== E) {
            const A = this.detachRangeFormatElement(u.f[0].parentNode, u.f, null, a, !0);
            E = s[C].parentNode, h && (m = A.sc, h = !1), k && (p = A.ec), z ? (w = E, u = { r: w, f: [i.getParentElement(s[C], "LI")] }, k && (g = !0)) : w = null;
          } else
            u.f.push(i.getParentElement(s[C], "LI")), k && (g = !0);
        if (k && i.isList(w)) {
          const A = this.detachRangeFormatElement(u.f[0].parentNode, u.f, null, a, !0);
          (g || v === 1) && (p = A.ec), h && (m = A.sc || p);
        }
      }
      return {
        sc: m,
        ec: p
      };
    },
    /**
     * @description Add, update, and delete nodes from selected text.
     * 1. If there is a node in the "appendNode" argument, a node with the same tags and attributes as "appendNode" is added to the selection text.
     * 2. If it is in the same tag, only the tag's attributes are changed without adding a tag.
     * 3. If the "appendNode" argument is null, the node of the selection is update or remove without adding a new node.
     * 4. The same style as the style attribute of the "styleArray" argument is deleted.
     *    (Styles should be put with attribute names from css. ["background-color"])
     * 5. The same class name as the class attribute of the "styleArray" argument is deleted.
     *    (The class name is preceded by "." [".className"])
     * 6. Use a list of styles and classes of "appendNode" in "styleArray" to avoid duplicate property values.
     * 7. If a node with all styles and classes removed has the same tag name as "appendNode" or "removeNodeArray", or "appendNode" is null, that node is deleted.
     * 8. Regardless of the style and class of the node, the tag with the same name as the "removeNodeArray" argument value is deleted.
     * 9. If the "strictRemove" argument is true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     *10. It won't work if the parent node has the same class and same value style.
     *    However, if there is a value in "removeNodeArray", it works and the text node is separated even if there is no node to replace.
     * @param {Element|null} appendNode The element to be added to the selection. If it is null, only delete the node.
     * @param {Array|null} styleArray The style or className attribute name Array to check (['font-size'], ['.className'], ['font-family', 'color', '.className']...])
     * @param {Array|null} removeNodeArray An array of node names to remove types from, remove all formats when "appendNode" is null and there is an empty array or null value. (['span'], ['strong', 'em'] ...])
     * @param {Boolean|null} strictRemove If true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     */
    nodeChange: function(s, a, u, h) {
      this._resetRangeToTextNode();
      let g = this.getRange_addLine(this.getRange(), null);
      a = a && a.length > 0 ? a : !1, u = u && u.length > 0 ? u : !1;
      const m = !s, p = m && !u && !a;
      let y = g.startContainer, C = g.startOffset, v = g.endContainer, w = g.endOffset;
      if (p && g.collapsed && i.isFormatElement(y.parentNode) || y === v && y.nodeType === 1 && i.isNonEditable(y)) {
        const q = y.parentNode;
        if (!i.isListCell(q) || !i.getValues(q.style).some((function(Z) {
          return this._listKebab.indexOf(Z) > -1;
        }).bind(this)))
          return;
      }
      if (g.collapsed && !p && y.nodeType === 1 && !i.isBreak(y) && !i.isComponent(y)) {
        let q = null;
        const Z = y.childNodes[C];
        Z && (Z.nextSibling ? q = i.isBreak(Z) ? Z : Z.nextSibling : q = null);
        const G = i.createTextNode(i.zeroWidthSpace);
        y.insertBefore(G, q), this.setRange(G, 1, G, 1), g = this.getRange(), y = g.startContainer, C = g.startOffset, v = g.endContainer, w = g.endOffset;
      }
      i.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), i.isFormatElement(v) && (v = v.childNodes[w] || v.lastChild, w = v.textContent.length), m && (s = i.createElement("DIV"));
      const E = f.RegExp, k = s.nodeName;
      if (!p && y === v && !u && s) {
        let q = y, Z = 0;
        const G = [], K = s.style;
        for (let ee = 0, te = K.length; ee < te; ee++)
          G.push(K[ee]);
        const ne = s.classList;
        for (let ee = 0, te = ne.length; ee < te; ee++)
          G.push("." + ne[ee]);
        if (G.length > 0) {
          for (; !i.isFormatElement(q) && !i.isWysiwygDiv(q); ) {
            for (let ee = 0; ee < G.length; ee++)
              if (q.nodeType === 1) {
                const te = G[ee], de = /^\./.test(te) ? new E("\\s*" + te.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Ce = m ? !!q.style[te] : !!q.style[te] && !!s.style[te] && q.style[te] === s.style[te], se = de === !1 ? !1 : m ? !!q.className.match(de) : !!q.className.match(de) && !!s.className.match(de);
                (Ce || se) && Z++;
              }
            q = q.parentNode;
          }
          if (Z >= G.length)
            return;
        }
      }
      let z = {}, A = {}, O, P = "", V = "", T = "";
      if (a) {
        for (let q = 0, Z = a.length, G; q < Z; q++)
          G = a[q], /^\./.test(G) ? V += (V ? "|" : "\\s*(?:") + G.replace(/^\./, "") : P += (P ? "|" : "(?:;|^|\\s)(?:") + G;
        P && (P += ")\\s*:[^;]*\\s*(?:;|$)", P = new E(P, "ig")), V && (V += ")(?=\\s+|$)", V = new E(V, "ig"));
      }
      if (u) {
        T = "^(?:" + u[0];
        for (let q = 1; q < u.length; q++)
          T += "|" + u[q];
        T += ")$", T = new E(T, "i");
      }
      const H = f.Boolean, I = { v: !1 }, L = function(q) {
        const Z = q.cloneNode(!1);
        if (Z.nodeType === 3 || i.isBreak(Z))
          return Z;
        if (p)
          return null;
        const G = !T && m || T && T.test(Z.nodeName);
        if (G && !h)
          return I.v = !0, null;
        const K = Z.style.cssText;
        let ne = "";
        P && K.length > 0 && (ne = K.replace(P, "").trim(), ne !== K && (I.v = !0));
        const ee = Z.className;
        let te = "";
        return V && ee.length > 0 && (te = ee.replace(V, "").trim(), te !== ee && (I.v = !0)), m && (V || !ee) && (P || !K) && !ne && !te && G ? (I.v = !0, null) : ne || te || Z.nodeName !== k || H(P) !== H(K) || H(V) !== H(ee) ? (P && K.length > 0 && (Z.style.cssText = ne), Z.style.cssText || Z.removeAttribute("style"), V && ee.length > 0 && (Z.className = te.trim()), Z.className.trim() || Z.removeAttribute("class"), !Z.style.cssText && !Z.className && (Z.nodeName === k || G) ? (I.v = !0, null) : Z) : (I.v = !0, null);
      }, D = this.getSelectedElements(null);
      g = this.getRange(), y = g.startContainer, C = g.startOffset, v = g.endContainer, w = g.endOffset, i.getFormatElement(y, null) || (y = i.getChildElement(D[0], function(q) {
        return q.nodeType === 3;
      }, !1), C = 0), i.getFormatElement(v, null) || (v = i.getChildElement(D[D.length - 1], function(q) {
        return q.nodeType === 3;
      }, !1), w = v.textContent.length);
      const R = i.getFormatElement(y, null) === i.getFormatElement(v, null), M = D.length - (R ? 0 : 1);
      O = s.cloneNode(!1);
      const U = p || m && function(q) {
        for (let Z = 0, G = q.length; Z < G; Z++)
          if (i._isMaintainedNode(q[Z]) || i._isSizeNode(q[Z]))
            return !0;
        return !1;
      }(u), j = m || i._isSizeNode(O), $ = this._util_getMaintainedNode.bind(i, U, j), Y = this._util_isMaintainedNode.bind(i, U, j);
      if (R) {
        this._resetCommonListCell(D[0], a) && (g = this.setRange(y, C, v, w));
        const q = this._nodeChange_oneLine(D[0], O, L, y, C, v, w, p, m, g.collapsed, I, $, Y);
        z.container = q.startContainer, z.offset = q.startOffset, A.container = q.endContainer, A.offset = q.endOffset, z.container === A.container && i.onlyZeroWidthSpace(z.container) && (z.offset = A.offset = 1), this._setCommonListStyle(q.ancestor, null);
      } else {
        let q = !1;
        M > 0 && this._resetCommonListCell(D[M], a) && (q = !0), this._resetCommonListCell(D[0], a) && (q = !0), q && this.setRange(y, C, v, w), M > 0 && (O = s.cloneNode(!1), A = this._nodeChange_endLine(D[M], O, L, v, w, p, m, I, $, Y));
        for (let Z = M - 1, G; Z > 0; Z--)
          this._resetCommonListCell(D[Z], a), O = s.cloneNode(!1), G = this._nodeChange_middleLine(D[Z], O, L, p, m, I, A.container), G.endContainer && G.ancestor.contains(G.endContainer) && (A.ancestor = null, A.container = G.endContainer), this._setCommonListStyle(G.ancestor, null);
        O = s.cloneNode(!1), z = this._nodeChange_startLine(D[0], O, L, y, C, p, m, I, $, Y, A.container), z.endContainer && (A.ancestor = null, A.container = z.endContainer), M <= 0 ? A = z : A.container || (A.ancestor = null, A.container = z.container, A.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(A.ancestor || i.getFormatElement(A.container), null);
      }
      this.controllersOff(), this.setRange(z.container, z.offset, A.container, A.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(s, a) {
      if (!i.isListCell(s))
        return;
      a || (a = this._listKebab);
      const u = i.getArrayItem(s.childNodes, function(E) {
        return !i.isBreak(E);
      }, !0), h = s.style, g = [], m = [], p = i.getValues(h);
      for (let E = 0, k = this._listKebab.length; E < k; E++)
        p.indexOf(this._listKebab[E]) > -1 && a.indexOf(this._listKebab[E]) > -1 && (g.push(this._listCamel[E]), m.push(this._listKebab[E]));
      if (!g.length)
        return;
      const y = i.createElement("SPAN");
      for (let E = 0, k = g.length; E < k; E++)
        y.style[g[E]] = h[m[E]], h.removeProperty(m[E]);
      let C = y.cloneNode(!1), v = null, w = !1;
      for (let E = 0, k = u.length, z, A; E < k; E++)
        z = u[E], !l._textTagsMap[z.nodeName.toLowerCase()] && (A = i.getValues(z.style), A.length === 0 || g.some(function(O) {
          return A.indexOf(O) === -1;
        }) && A.some(function(O) {
        }) ? (v = z.nextSibling, C.appendChild(z)) : C.childNodes.length > 0 && (s.insertBefore(C, v), C = y.cloneNode(!1), v = null, w = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, v), w = !0), h.length || s.removeAttribute("style"), w;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(s, a) {
      if (!i.isListCell(s))
        return;
      const u = i.getArrayItem((a || s).childNodes, function(C) {
        return !i.isBreak(C);
      }, !0);
      if (a = u[0], !a || u.length > 1 || a.nodeType !== 1)
        return;
      const h = a.style, g = s.style, m = a.nodeName.toLowerCase();
      let p = !1;
      l._textTagsMap[m] === l._defaultCommand.bold.toLowerCase() && (g.fontWeight = "bold"), l._textTagsMap[m] === l._defaultCommand.italic.toLowerCase() && (g.fontStyle = "italic");
      const y = i.getValues(h);
      if (y.length > 0)
        for (let C = 0, v = this._listCamel.length; C < v; C++)
          y.indexOf(this._listKebab[C]) > -1 && (g[this._listCamel[C]] = h[this._listCamel[C]], h.removeProperty(this._listKebab[C]), p = !0);
      if (this._setCommonListStyle(s, a), !!p && !h.length) {
        const C = a.childNodes, v = a.parentNode, w = a.nextSibling;
        for (; C.length > 0; )
          v.insertBefore(C[0], w);
        i.removeItem(a);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(s) {
      const a = s.parentNode;
      if (!s || s.nodeType === 3 || !a)
        return;
      const u = s.childNodes;
      for (; u[0]; )
        a.insertBefore(u[0], s);
      a.removeChild(s);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(s, a, u) {
      return !u || s ? null : this.getParentElement(u, this._isMaintainedNode.bind(this)) || (a ? null : this.getParentElement(u, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(s, a, u) {
      if (!u || s || u.nodeType !== 1)
        return !1;
      const h = this._isMaintainedNode(u);
      return this.getParentElement(u, this._isMaintainedNode.bind(this)) ? h : h || (a ? !1 : this._isSizeNode(u));
    },
    /**
     * @description wraps text nodes of line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Boolean} collapsed range.collapsed
     * @returns {{ancestor: *, startContainer: *, startOffset: *, endContainer: *, endOffset: *}}
     * @private
     */
    _nodeChange_oneLine: function(s, a, u, h, g, m, p, y, C, v, w, E, k) {
      let z = h.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !i.isFormatElement(z.parentNode) && !i.isWysiwygDiv(z.parentNode) && z.nodeName !== a.nodeName; )
        z = z.parentNode;
      if (!C && z === m.parentNode && z.nodeName === a.nodeName && i.onlyZeroWidthSpace(h.textContent.slice(0, g)) && i.onlyZeroWidthSpace(m.textContent.slice(p))) {
        const se = z.childNodes;
        let he = !0;
        for (let ce = 0, Le = se.length, _e, Te, ve, oe; ce < Le; ce++) {
          if (_e = se[ce], oe = !i.onlyZeroWidthSpace(_e), _e === h) {
            Te = !0;
            continue;
          }
          if (_e === m) {
            ve = !0;
            continue;
          }
          if (!Te && oe || Te && ve && oe) {
            he = !1;
            break;
          }
        }
        if (he)
          return i.copyTagAttributes(z, a), {
            ancestor: s,
            startContainer: h,
            startOffset: g,
            endContainer: m,
            endOffset: p
          };
      }
      w.v = !1;
      const A = s, O = [a], P = s.cloneNode(!1), V = h === m;
      let T = h, H = g, I = m, L = p, D = !1, R = !1, M, U, j, $, Y;
      const q = f.RegExp;
      function Z(se) {
        const he = new q("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let ce = "";
        return he && se.style.cssText.length > 0 && (ce = he.test(se.style.cssText)), !ce;
      }
      if (function se(he, ce) {
        const Le = he.childNodes;
        for (let _e = 0, Te = Le.length, ve; _e < Te; _e++) {
          let oe = Le[_e];
          if (!oe)
            continue;
          let Oe = ce, xe;
          if (!D && oe === T) {
            let we = P;
            Y = E(oe);
            const fe = i.createTextNode(T.nodeType === 1 ? "" : T.substringData(0, H)), be = i.createTextNode(
              T.nodeType === 1 ? "" : T.substringData(
                H,
                V && L >= H ? L - H : T.data.length - H
              )
            );
            if (Y) {
              const Ae = E(ce);
              if (Ae && Ae.parentNode !== we) {
                let ke = Ae, Fe = null;
                for (; ke.parentNode !== we; ) {
                  for (ce = Fe = ke.parentNode.cloneNode(!1); ke.childNodes[0]; )
                    Fe.appendChild(ke.childNodes[0]);
                  ke.appendChild(Fe), ke = ke.parentNode;
                }
                ke.parentNode.appendChild(Ae);
              }
              Y = Y.cloneNode(!1);
            }
            i.onlyZeroWidthSpace(fe) || ce.appendChild(fe);
            const me = E(ce);
            for (me && (Y = me), Y && (we = Y), U = oe, M = [], $ = ""; U !== we && U !== A && U !== null; )
              ve = k(U) ? null : u(U), ve && U.nodeType === 1 && Z(U) && (M.push(ve), $ += U.style.cssText.substr(0, U.style.cssText.indexOf(":")) + "|"), U = U.parentNode;
            const ze = M.pop() || be;
            for (j = U = ze; M.length > 0; )
              U = M.pop(), j.appendChild(U), j = U;
            if (a.appendChild(ze), we.appendChild(a), Y && !E(I) && (a = a.cloneNode(!1), P.appendChild(a), O.push(a)), T = be, H = 0, D = !0, U !== be && U.appendChild(T), !V)
              continue;
          }
          if (!R && oe === I) {
            Y = E(oe);
            const we = i.createTextNode(I.nodeType === 1 ? "" : I.substringData(L, I.length - L)), fe = i.createTextNode(V || I.nodeType === 1 ? "" : I.substringData(0, L));
            if (Y ? Y = Y.cloneNode(!1) : k(a.parentNode) && !Y && (a = a.cloneNode(!1), P.appendChild(a), O.push(a)), !i.onlyZeroWidthSpace(we)) {
              U = oe, $ = "", M = [];
              const me = [];
              for (; U !== P && U !== A && U !== null; )
                U.nodeType === 1 && Z(U) && (k(U) ? me.push(U.cloneNode(!1)) : M.push(U.cloneNode(!1)), $ += U.style.cssText.substr(0, U.style.cssText.indexOf(":")) + "|"), U = U.parentNode;
              for (M = M.concat(me), xe = j = U = M.pop() || we; M.length > 0; )
                U = M.pop(), j.appendChild(U), j = U;
              P.appendChild(xe), U.textContent = we.data;
            }
            if (Y && xe) {
              const me = E(xe);
              me && (Y = me);
            }
            for (U = oe, M = [], $ = ""; U !== P && U !== A && U !== null; )
              ve = k(U) ? null : u(U), ve && U.nodeType === 1 && Z(U) && (M.push(ve), $ += U.style.cssText.substr(0, U.style.cssText.indexOf(":")) + "|"), U = U.parentNode;
            const be = M.pop() || fe;
            for (j = U = be; M.length > 0; )
              U = M.pop(), j.appendChild(U), j = U;
            Y ? (a = a.cloneNode(!1), a.appendChild(be), Y.insertBefore(a, Y.firstChild), P.appendChild(Y), O.push(a), Y = null) : a.appendChild(be), I = fe, L = fe.data.length, R = !0, !y && v && (a = fe, fe.textContent = i.zeroWidthSpace), U !== fe && U.appendChild(I);
            continue;
          }
          if (D) {
            if (oe.nodeType === 1 && !i.isBreak(oe)) {
              i._isIgnoreNodeChange(oe) ? (P.appendChild(oe.cloneNode(!0)), v || (a = a.cloneNode(!1), P.appendChild(a), O.push(a))) : se(oe, oe);
              continue;
            }
            U = oe, M = [], $ = "";
            const we = [];
            for (; U.parentNode !== null && U !== A && U !== a; )
              ve = R ? U.cloneNode(!1) : u(U), U.nodeType === 1 && !i.isBreak(oe) && ve && Z(U) && (k(U) ? Y || we.push(ve) : M.push(ve), $ += U.style.cssText.substr(0, U.style.cssText.indexOf(":")) + "|"), U = U.parentNode;
            M = M.concat(we);
            const fe = M.pop() || oe;
            for (j = U = fe; M.length > 0; )
              U = M.pop(), j.appendChild(U), j = U;
            if (k(a.parentNode) && !k(fe) && !i.onlyZeroWidthSpace(a) && (a = a.cloneNode(!1), P.appendChild(a), O.push(a)), !R && !Y && k(fe)) {
              a = a.cloneNode(!1);
              const be = fe.childNodes;
              for (let me = 0, ze = be.length; me < ze; me++)
                a.appendChild(be[me]);
              fe.appendChild(a), P.appendChild(fe), O.push(a), a.children.length > 0 ? ce = U : ce = a;
            } else
              fe === oe ? R ? ce = P : ce = a : R ? (P.appendChild(fe), ce = U) : (a.appendChild(fe), ce = U);
            if (Y && oe.nodeType === 3)
              if (E(oe)) {
                const be = i.getParentElement(ce, (function(me) {
                  return this._isMaintainedNode(me.parentNode) || me.parentNode === P;
                }).bind(i));
                Y.appendChild(be), a = be.cloneNode(!1), O.push(a), P.appendChild(a);
              } else
                Y = null;
          }
          xe = oe.cloneNode(!1), ce.appendChild(xe), oe.nodeType === 1 && !i.isBreak(oe) && (Oe = xe), se(oe, Oe);
        }
      }(s, P), C && !y && !w.v)
        return {
          ancestor: s,
          startContainer: h,
          startOffset: g,
          endContainer: m,
          endOffset: p
        };
      if (y = y && C, y)
        for (let se = 0; se < O.length; se++) {
          let he = O[se], ce, Le, _e;
          if (v)
            ce = i.createTextNode(i.zeroWidthSpace), P.replaceChild(ce, he);
          else {
            const Te = he.childNodes;
            for (Le = Te[0]; Te[0]; )
              _e = Te[0], P.insertBefore(_e, he);
            i.removeItem(he);
          }
          se === 0 && (v ? T = I = ce : (T = Le, I = _e));
        }
      else {
        if (C)
          for (let se = 0; se < O.length; se++)
            this._stripRemoveNode(O[se]);
        v && (T = I = a);
      }
      i.removeEmptyNode(P, a, !1), v && (H = T.textContent.length, L = I.textContent.length);
      const G = y || I.textContent.length === 0;
      !i.isBreak(I) && I.textContent.length === 0 && (i.removeItem(I), I = T), L = G ? I.textContent.length : L;
      const K = { s: 0, e: 0 }, ne = i.getNodePath(T, P, K), ee = !I.parentNode;
      ee && (I = T);
      const te = { s: 0, e: 0 }, de = i.getNodePath(I, P, !ee && !G ? te : null);
      H += K.s, L = v ? H : ee ? T.textContent.length : G ? L + K.s : L + te.s;
      const Ce = i.mergeSameTags(P, [ne, de], !0);
      return s.parentNode.replaceChild(P, s), T = i.getNodeFromPath(ne, P), I = i.getNodeFromPath(de, P), {
        ancestor: P,
        startContainer: T,
        startOffset: H + Ce[0],
        endContainer: I,
        endOffset: L + Ce[1]
      };
    },
    /**
     * @description wraps first line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {null|Node} If end container is renewed, returned renewed node
     * @returns {Object} { ancestor, container, offset, endContainer }
     * @private
     */
    _nodeChange_startLine: function(s, a, u, h, g, m, p, y, C, v, w) {
      let E = h.parentNode;
      for (; !E.nextSibling && !E.previousSibling && !i.isFormatElement(E.parentNode) && !i.isWysiwygDiv(E.parentNode) && E.nodeName !== a.nodeName; )
        E = E.parentNode;
      if (!p && E.nodeName === a.nodeName && !i.isFormatElement(E) && !E.nextSibling && i.onlyZeroWidthSpace(h.textContent.slice(0, g))) {
        let D = !0, R = h.previousSibling;
        for (; R; ) {
          if (!i.onlyZeroWidthSpace(R)) {
            D = !1;
            break;
          }
          R = R.previousSibling;
        }
        if (D)
          return i.copyTagAttributes(E, a), {
            ancestor: s,
            container: h,
            offset: g
          };
      }
      y.v = !1;
      const k = s, z = [a], A = s.cloneNode(!1);
      let O = h, P = g, V = !1, T, H, I, L;
      if (function D(R, M) {
        const U = R.childNodes;
        for (let j = 0, $ = U.length, Y, q; j < $; j++) {
          const Z = U[j];
          if (!Z)
            continue;
          let G = M;
          if (V && !i.isBreak(Z)) {
            if (Z.nodeType === 1) {
              if (i._isIgnoreNodeChange(Z)) {
                if (a = a.cloneNode(!1), q = Z.cloneNode(!0), A.appendChild(q), A.appendChild(a), z.push(a), w && Z.contains(w)) {
                  const te = i.getNodePath(w, Z);
                  w = i.getNodeFromPath(te, q);
                }
              } else
                D(Z, Z);
              continue;
            }
            H = Z, T = [];
            const K = [];
            for (; H.parentNode !== null && H !== k && H !== a; )
              Y = u(H), H.nodeType === 1 && Y && (v(H) ? L || K.push(Y) : T.push(Y)), H = H.parentNode;
            T = T.concat(K);
            const ne = T.length > 0, ee = T.pop() || Z;
            for (I = H = ee; T.length > 0; )
              H = T.pop(), I.appendChild(H), I = H;
            if (v(a.parentNode) && !v(ee) && (a = a.cloneNode(!1), A.appendChild(a), z.push(a)), !L && v(ee)) {
              a = a.cloneNode(!1);
              const te = ee.childNodes;
              for (let de = 0, Ce = te.length; de < Ce; de++)
                a.appendChild(te[de]);
              ee.appendChild(a), A.appendChild(ee), M = v(H) ? a : H, z.push(a);
            } else
              ne ? (a.appendChild(ee), M = H) : M = a;
            if (L && Z.nodeType === 3)
              if (C(Z)) {
                const te = i.getParentElement(M, (function(de) {
                  return this._isMaintainedNode(de.parentNode) || de.parentNode === A;
                }).bind(i));
                L.appendChild(te), a = te.cloneNode(!1), z.push(a), A.appendChild(a);
              } else
                L = null;
          }
          if (!V && Z === O) {
            let K = A;
            L = C(Z);
            const ne = i.createTextNode(O.nodeType === 1 ? "" : O.substringData(0, P)), ee = i.createTextNode(O.nodeType === 1 ? "" : O.substringData(P, O.length - P));
            if (L) {
              const Ce = C(M);
              if (Ce && Ce.parentNode !== K) {
                let se = Ce, he = null;
                for (; se.parentNode !== K; ) {
                  for (M = he = se.parentNode.cloneNode(!1); se.childNodes[0]; )
                    he.appendChild(se.childNodes[0]);
                  se.appendChild(he), se = se.parentNode;
                }
                se.parentNode.appendChild(Ce);
              }
              L = L.cloneNode(!1);
            }
            i.onlyZeroWidthSpace(ne) || M.appendChild(ne);
            const te = C(M);
            for (te && (L = te), L && (K = L), H = M, T = []; H !== K && H !== null; )
              Y = u(H), H.nodeType === 1 && Y && T.push(Y), H = H.parentNode;
            const de = T.pop() || M;
            for (I = H = de; T.length > 0; )
              H = T.pop(), I.appendChild(H), I = H;
            de !== M ? (a.appendChild(de), M = H) : M = a, i.isBreak(Z) && a.appendChild(Z.cloneNode(!1)), K.appendChild(a), O = ee, P = 0, V = !0, M.appendChild(O);
            continue;
          }
          Y = V ? u(Z) : Z.cloneNode(!1), Y && (M.appendChild(Y), Z.nodeType === 1 && !i.isBreak(Z) && (G = Y)), D(Z, G);
        }
      }(s, A), p && !m && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: g,
          endContainer: w
        };
      if (m = m && p, m)
        for (let D = 0; D < z.length; D++) {
          let R = z[D];
          const M = R.childNodes, U = M[0];
          for (; M[0]; )
            A.insertBefore(M[0], R);
          i.removeItem(R), D === 0 && (O = U);
        }
      else if (p) {
        a = a.firstChild;
        for (let D = 0; D < z.length; D++)
          this._stripRemoveNode(z[D]);
      }
      if (!m && A.childNodes.length === 0)
        s.childNodes ? O = s.childNodes[0] : (O = i.createTextNode(i.zeroWidthSpace), s.appendChild(O));
      else {
        i.removeEmptyNode(A, a, !1), i.onlyZeroWidthSpace(A.textContent) && (O = A.firstChild, P = 0);
        const D = { s: 0, e: 0 }, R = i.getNodePath(O, A, D);
        P += D.s;
        const M = i.mergeSameTags(A, [R], !0);
        s.parentNode.replaceChild(A, s), O = i.getNodeFromPath(R, A), P += M[0];
      }
      return {
        ancestor: A,
        container: O,
        offset: P,
        endContainer: w
      };
    },
    /**
     * @description wraps mid lines selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Node} _endContainer Offset node of last line already modified (end.container)
     * @returns {Object} { ancestor, endContainer: "If end container is renewed, returned renewed node" }
     * @private
     */
    _nodeChange_middleLine: function(s, a, u, h, g, m, p) {
      if (!g) {
        let w = null;
        p && s.contains(p) && (w = i.getNodePath(p, s));
        const E = s.cloneNode(!0), k = a.nodeName, z = a.style.cssText, A = a.className;
        let O = E.childNodes, P = 0, V = O.length;
        for (let T; P < V && (T = O[P], T.nodeType !== 3); P++)
          if (T.nodeName === k)
            T.style.cssText += z, i.addClass(T, A);
          else {
            if (!i.isBreak(T) && i._isIgnoreNodeChange(T))
              continue;
            if (V === 1) {
              O = T.childNodes, V = O.length, P = -1;
              continue;
            } else
              break;
          }
        if (V > 0 && P === V)
          return s.innerHTML = E.innerHTML, {
            ancestor: s,
            endContainer: w ? i.getNodeFromPath(w, s) : null
          };
      }
      m.v = !1;
      const y = s.cloneNode(!1), C = [a];
      let v = !0;
      if (function w(E, k) {
        const z = E.childNodes;
        for (let A = 0, O = z.length, P, V; A < O; A++) {
          let T = z[A];
          if (!T)
            continue;
          let H = k;
          if (!i.isBreak(T) && i._isIgnoreNodeChange(T)) {
            if (a.childNodes.length > 0 && (y.appendChild(a), a = a.cloneNode(!1)), V = T.cloneNode(!0), y.appendChild(V), y.appendChild(a), C.push(a), k = a, p && T.contains(p)) {
              const I = i.getNodePath(p, T);
              p = i.getNodeFromPath(I, V);
            }
            continue;
          } else
            P = u(T), P && (v = !1, k.appendChild(P), T.nodeType === 1 && (H = P));
          i.isBreak(T) || w(T, H);
        }
      }(s, a), v || g && !h && !m.v)
        return { ancestor: s, endContainer: p };
      if (y.appendChild(a), h && g)
        for (let w = 0; w < C.length; w++) {
          let E = C[w];
          const k = E.childNodes;
          for (; k[0]; )
            y.insertBefore(k[0], E);
          i.removeItem(E);
        }
      else if (g) {
        a = a.firstChild;
        for (let w = 0; w < C.length; w++)
          this._stripRemoveNode(C[w]);
      }
      return i.removeEmptyNode(y, a, !1), i.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: p };
    },
    /**
     * @description wraps last line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {Object} { ancestor, container, offset }
     * @private
     */
    _nodeChange_endLine: function(s, a, u, h, g, m, p, y, C, v) {
      let w = h.parentNode;
      for (; !w.nextSibling && !w.previousSibling && !i.isFormatElement(w.parentNode) && !i.isWysiwygDiv(w.parentNode) && w.nodeName !== a.nodeName; )
        w = w.parentNode;
      if (!p && w.nodeName === a.nodeName && !i.isFormatElement(w) && !w.previousSibling && i.onlyZeroWidthSpace(h.textContent.slice(g))) {
        let L = !0, D = h.nextSibling;
        for (; D; ) {
          if (!i.onlyZeroWidthSpace(D)) {
            L = !1;
            break;
          }
          D = D.nextSibling;
        }
        if (L)
          return i.copyTagAttributes(w, a), {
            ancestor: s,
            container: h,
            offset: g
          };
      }
      y.v = !1;
      const E = s, k = [a], z = s.cloneNode(!1);
      let A = h, O = g, P = !1, V, T, H, I;
      if (function L(D, R) {
        const M = D.childNodes;
        for (let U = M.length - 1, j; 0 <= U; U--) {
          const $ = M[U];
          if (!$)
            continue;
          let Y = R;
          if (P && !i.isBreak($)) {
            if ($.nodeType === 1) {
              if (i._isIgnoreNodeChange($)) {
                a = a.cloneNode(!1);
                const K = $.cloneNode(!0);
                z.insertBefore(K, R), z.insertBefore(a, K), k.push(a);
              } else
                L($, $);
              continue;
            }
            T = $, V = [];
            const q = [];
            for (; T.parentNode !== null && T !== E && T !== a; )
              j = u(T), j && T.nodeType === 1 && (v(T) ? I || q.push(j) : V.push(j)), T = T.parentNode;
            V = V.concat(q);
            const Z = V.length > 0, G = V.pop() || $;
            for (H = T = G; V.length > 0; )
              T = V.pop(), H.appendChild(T), H = T;
            if (v(a.parentNode) && !v(G) && (a = a.cloneNode(!1), z.insertBefore(a, z.firstChild), k.push(a)), !I && v(G)) {
              a = a.cloneNode(!1);
              const K = G.childNodes;
              for (let ne = 0, ee = K.length; ne < ee; ne++)
                a.appendChild(K[ne]);
              G.appendChild(a), z.insertBefore(G, z.firstChild), k.push(a), a.children.length > 0 ? R = T : R = a;
            } else
              Z ? (a.insertBefore(G, a.firstChild), R = T) : R = a;
            if (I && $.nodeType === 3)
              if (C($)) {
                const K = i.getParentElement(R, (function(ne) {
                  return this._isMaintainedNode(ne.parentNode) || ne.parentNode === z;
                }).bind(i));
                I.appendChild(K), a = K.cloneNode(!1), k.push(a), z.insertBefore(a, z.firstChild);
              } else
                I = null;
          }
          if (!P && $ === A) {
            I = C($);
            const q = i.createTextNode(A.nodeType === 1 ? "" : A.substringData(O, A.length - O)), Z = i.createTextNode(A.nodeType === 1 ? "" : A.substringData(0, O));
            if (I) {
              I = I.cloneNode(!1);
              const K = C(R);
              if (K && K.parentNode !== z) {
                let ne = K, ee = null;
                for (; ne.parentNode !== z; ) {
                  for (R = ee = ne.parentNode.cloneNode(!1); ne.childNodes[0]; )
                    ee.appendChild(ne.childNodes[0]);
                  ne.appendChild(ee), ne = ne.parentNode;
                }
                ne.parentNode.insertBefore(K, ne.parentNode.firstChild);
              }
              I = I.cloneNode(!1);
            } else
              v(a.parentNode) && !I && (a = a.cloneNode(!1), z.appendChild(a), k.push(a));
            for (i.onlyZeroWidthSpace(q) || R.insertBefore(q, R.firstChild), T = R, V = []; T !== z && T !== null; )
              j = v(T) ? null : u(T), j && T.nodeType === 1 && V.push(j), T = T.parentNode;
            const G = V.pop() || R;
            for (H = T = G; V.length > 0; )
              T = V.pop(), H.appendChild(T), H = T;
            G !== R ? (a.insertBefore(G, a.firstChild), R = T) : R = a, i.isBreak($) && a.appendChild($.cloneNode(!1)), I ? (I.insertBefore(a, I.firstChild), z.insertBefore(I, z.firstChild), I = null) : z.insertBefore(a, z.firstChild), A = Z, O = Z.data.length, P = !0, R.insertBefore(A, R.firstChild);
            continue;
          }
          j = P ? u($) : $.cloneNode(!1), j && (R.insertBefore(j, R.firstChild), $.nodeType === 1 && !i.isBreak($) && (Y = j)), L($, Y);
        }
      }(s, z), p && !m && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: g
        };
      if (m = m && p, m)
        for (let L = 0; L < k.length; L++) {
          let D = k[L];
          const R = D.childNodes;
          let M = null;
          for (; R[0]; )
            M = R[0], z.insertBefore(M, D);
          i.removeItem(D), L === k.length - 1 && (A = M, O = M.textContent.length);
        }
      else if (p) {
        a = a.firstChild;
        for (let L = 0; L < k.length; L++)
          this._stripRemoveNode(k[L]);
      }
      if (!m && z.childNodes.length === 0)
        s.childNodes ? A = s.childNodes[0] : (A = i.createTextNode(i.zeroWidthSpace), s.appendChild(A));
      else {
        if (!p && a.textContent.length === 0)
          return i.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        i.removeEmptyNode(z, a, !1), i.onlyZeroWidthSpace(z.textContent) ? (A = z.firstChild, O = A.textContent.length) : i.onlyZeroWidthSpace(A) && (A = a, O = 1);
        const L = { s: 0, e: 0 }, D = i.getNodePath(A, z, L);
        O += L.s;
        const R = i.mergeSameTags(z, [D], !0);
        s.parentNode.replaceChild(z, s), A = i.getNodeFromPath(D, z), O += R[0];
      }
      return {
        ancestor: z,
        container: A,
        offset: A.nodeType === 1 && O === 1 ? A.childNodes.length : O
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(s, a, u) {
      if (a) {
        if (/more/i.test(a)) {
          if (u !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + s);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = u, h.style.display = "block", b._showToolbarBalloon(), b._showToolbarInline()), i.addClass(u, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), b._showToolbarBalloon(), b._showToolbarInline());
          return;
        }
        if (/container/.test(a) && (this._menuTray[s] === null || u !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, u), u);
          return;
        }
        if (this.isReadOnly && i.arrayIncludes(this.resizingDisabledButtons, u))
          return;
        if (/submenu/.test(a) && (this._menuTray[s] === null || u !== this.submenuActiveButton)) {
          this.callPlugin(s, this.submenuOn.bind(this, u), u);
          return;
        } else if (/dialog/.test(a)) {
          this.callPlugin(s, this.plugins[s].open.bind(this), u);
          return;
        } else
          /command/.test(a) ? this.callPlugin(s, this.plugins[s].action.bind(this), u) : /fileBrowser/.test(a) && this.callPlugin(s, this.plugins[s].open.bind(this, null), u);
      } else
        s && this.commandHandler(u, s);
      /submenu/.test(a) ? this.submenuOff() : /command/.test(a) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(s, a) {
      if (!(r.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(a)))
        switch (a) {
          case "copy":
          case "cut":
            this.execCommand(a);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const u = e.element.wysiwyg;
            let h = i.getChildElement(u.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || u.firstChild, g = i.getChildElement(u.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || u.lastChild;
            if (!h || !g)
              return;
            if (i.isMedia(h)) {
              const C = this.getFileComponent(h), v = i.createElement("BR"), w = i.createElement(l.defaultTag);
              w.appendChild(v), h = C ? C.component : h, h.parentNode.insertBefore(w, h), h = v;
            }
            if (i.isMedia(g)) {
              const C = i.createElement("BR"), v = i.createElement(l.defaultTag);
              v.appendChild(C), u.appendChild(v), g = C;
            }
            b._showToolbarBalloon(this.setRange(h, 0, g, g.textContent.length));
            break;
          case "codeView":
            this.toggleCodeView();
            break;
          case "fullScreen":
            this.toggleFullScreen(s);
            break;
          case "indent":
          case "outdent":
            this.indent(a);
            break;
          case "undo":
            this.history.undo();
            break;
          case "redo":
            this.history.redo();
            break;
          case "removeFormat":
            this.removeFormat(), this.focus();
            break;
          case "print":
            this.print();
            break;
          case "preview":
            this.preview();
            break;
          case "showBlocks":
            this.toggleDisplayBlocks();
            break;
          case "dir":
            this.setDir(l.rtl ? "ltr" : "rtl");
            break;
          case "dir_ltr":
            this.setDir("ltr");
            break;
          case "dir_rtl":
            this.setDir("rtl");
            break;
          case "save":
            if (typeof l.callBackSave == "function")
              l.callBackSave(this.getContents(!1), this._variable.isChanged);
            else if (this._variable.isChanged && typeof x.save == "function")
              x.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            a = l._defaultCommand[a.toLowerCase()] || a, this.commandMap[a] || (this.commandMap[a] = s);
            const m = this._variable.currentNodesMap, p = m.indexOf(a) > -1 ? null : i.createElement(a);
            let y = a;
            /^SUB$/i.test(a) && m.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(a) && m.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(p, this._commandMapStyles[a] || null, [y], !1), this.focus();
        }
    },
    /**
     * @description Remove format of the currently selected range
     */
    removeFormat: function() {
      this.nodeChange(null, null, null, null);
    },
    /**
     * @description This method implements indentation to selected range.
     * Setted "margin-left" to "25px" in the top "P" tag of the parameter node.
     * @param {String} command Separator ("indent" or "outdent")
     */
    indent: function(s) {
      const a = this.getRange(), u = this.getSelectedElements(null), h = [], g = s !== "indent", m = l.rtl ? "marginRight" : "marginLeft";
      let p = a.startContainer, y = a.endContainer, C = a.startOffset, v = a.endOffset;
      for (let w = 0, E = u.length, k, z; w < E; w++)
        k = u[w], !i.isListCell(k) || !this.plugins.list ? (z = /\d+/.test(k.style[m]) ? i.getNumber(k.style[m], 0) : 0, g ? z -= 25 : z += 25, i.setStyle(k, m, z <= 0 ? "" : z + "px")) : (g || k.previousElementSibling) && h.push(k);
      h.length > 0 && this.plugins.list.editInsideList.call(this, g, h), this.effectNode = null, this.setRange(p, C, y, v), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const s = e.element.wysiwyg;
      i.toggleClass(s, "se-show-block"), i.hasClass(s, "se-show-block") ? i.addClass(this._styleCommandMap.showBlocks, "active") : i.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const s = this._variable.isCodeView;
      this.controllersOff(), i.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (i.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, b._hideToolbar())), this.nativeFocus(), i.removeClass(this._styleCommandMap.codeView, "active"), i.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, b._showToolbarInline())), this._variable._range = null, e.element.code.focus(), i.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && i.setDisabledButtons(!0, this.resizingDisabledButtons), typeof x.toggleCodeView == "function" && x.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const s = this._getCodeView();
      if (l.fullPage) {
        const a = this._parser.parseFromString(s, "text/html");
        if (!this.options.__allowedScriptTag) {
          const g = a.head.children;
          for (let m = 0, p = g.length; m < p; m++)
            /^script$/i.test(g[m].tagName) && (a.head.removeChild(g[m]), m--, p--);
        }
        let u = a.head.innerHTML;
        (!a.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !a.head.querySelector("style")) && (u += i._setIframeCssTags(this.options)), this._wd.head.innerHTML = u, this._wd.body.innerHTML = this.convertContentsForEditor(a.body.innerHTML);
        const h = a.body.attributes;
        for (let g = 0, m = h.length; g < m; g++)
          h[g].name !== "contenteditable" && this._wd.body.setAttribute(h[g].name, h[g].value);
        if (!i.hasClass(this._wd.body, "sun-editor-editable")) {
          const g = l._editableClass.split(" ");
          for (let m = 0; m < g.length; m++)
            i.addClass(this._wd.body, l._editableClass[m]);
        }
      } else
        e.element.wysiwyg.innerHTML = s.length > 0 ? this.convertContentsForEditor(s) : "<" + l.defaultTag + "><br></" + l.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const s = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let a = "";
      if (l.fullPage) {
        const u = i.getAttributesToString(this._wd.body, null);
        a = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + u + `>
` + s + `</body>
</html>`;
      } else
        a = s;
      e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(a);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(s) {
      const a = e.element.topArea, u = e.element.toolbar, h = e.element.editorArea, g = e.element.wysiwygFrame, m = e.element.code, p = this._variable;
      this.controllersOff();
      const y = u.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      p.isFullScreen ? (p.isFullScreen = !1, g.style.cssText = p._wysiwygOriginCssText, m.style.cssText = p._codeOriginCssText, u.style.cssText = "", h.style.cssText = p._editorAreaOriginCssText, a.style.cssText = p._originCssText, d.body.style.overflow = p._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && b._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(u), l.stickyToolbar > -1 && i.removeClass(u, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !l.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", i.addClass(u, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && b._showToolbarInline(), l.toolbarContainer && i.removeClass(u, "se-toolbar-balloon"), b.onScroll_window(), s && i.changeElement(s.firstElementChild, _.expansion), e.element.topArea.style.marginTop = "", i.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(u, h), a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.maxWidth = "100%", a.style.height = "100%", a.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", i.removeClass(u, "se-toolbar-sticky")), p._bodyOverflow = d.body.style.overflow, d.body.style.overflow = "hidden", p._editorAreaOriginCssText = h.style.cssText, p._wysiwygOriginCssText = g.style.cssText, p._codeOriginCssText = m.style.cssText, h.style.cssText = u.style.cssText = "", g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], u.style.width = g.style.height = m.style.height = "100%", u.style.position = "relative", u.style.display = "block", p.innerHeight_fullScreen = f.innerHeight - u.offsetHeight, h.style.height = p.innerHeight_fullScreen - l.fullScreenOffset + "px", s && i.changeElement(s.firstElementChild, _.reduction), l.iframe && l.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", i.addClass(this._styleCommandMap.fullScreen, "active")), y && x.toolbar.hide(), typeof x.toggleFullScreen == "function" && x.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = i.createElement("IFRAME");
      s.style.display = "none", d.body.appendChild(s);
      const a = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), u = i.getIframeDocument(s), h = this._wd;
      if (l.iframe) {
        const g = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? i.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        u.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + g + ">" + a + "</body></html>"
        );
      } else {
        const g = d.head.getElementsByTagName("link"), m = d.head.getElementsByTagName("style");
        let p = "";
        for (let y = 0, C = g.length; y < C; y++)
          p += g[y].outerHTML;
        for (let y = 0, C = m.length; y < C; y++)
          p += m[y].outerHTML;
        u.write(
          "<!DOCTYPE html><html><head>" + p + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + a + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (s.focus(), i.isIE_Edge || i.isChromium || d.documentMode || f.StyleMedia)
            try {
              s.contentWindow.document.execCommand("print", !1, null);
            } catch {
              s.contentWindow.print();
            }
          else
            s.contentWindow.print();
        } catch (g) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + g);
        } finally {
          r.closeLoading(), i.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      r.submenuOff(), r.containerOff(), r.controllersOff();
      const s = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), a = f.open("", "_blank");
      a.mimeType = "text/html";
      const u = this._wd;
      if (l.iframe) {
        const h = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? i.getAttributesToString(u.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        a.document.write(
          "<!DOCTYPE html><html><head>" + u.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + s + "</body></html>"
        );
      } else {
        const h = d.head.getElementsByTagName("link"), g = d.head.getElementsByTagName("style");
        let m = "";
        for (let p = 0, y = h.length; p < y; p++)
          m += h[p].outerHTML;
        for (let p = 0, y = g.length; p < y; p++)
          m += g[p].outerHTML;
        a.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + o.toolbar.preview + "</title>" + m + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const a = s === "rtl", u = this._prevRtl !== a;
      this._prevRtl = l.rtl = a, u && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && i.changeElement(e.tool.indent.firstElementChild, _.indent), e.tool.outdent && i.changeElement(e.tool.outdent.firstElementChild, _.outdent));
      const h = e.element;
      a ? (i.addClass(h.topArea, "se-rtl"), i.addClass(h.wysiwygFrame, "se-rtl")) : (i.removeClass(h.topArea, "se-rtl"), i.removeClass(h.wysiwygFrame, "se-rtl"));
      const g = i.getListChildren(h.wysiwyg, function(p) {
        return i.isFormatElement(p) && (p.style.marginRight || p.style.marginLeft || p.style.textAlign);
      });
      for (let p = 0, y = g.length, C, v, w; p < y; p++)
        C = g[p], w = C.style.marginRight, v = C.style.marginLeft, (w || v) && (C.style.marginRight = v, C.style.marginLeft = w), w = C.style.textAlign, w === "left" ? C.style.textAlign = "right" : w === "right" && (C.style.textAlign = "left");
      const m = e.tool;
      m.dir && (i.changeTxt(m.dir.querySelector(".se-tooltip-text"), o.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), i.changeElement(m.dir.firstElementChild, _[l.rtl ? "dir_ltr" : "dir_rtl"])), m.dir_ltr && (a ? i.removeClass(m.dir_ltr, "active") : i.addClass(m.dir_ltr, "active")), m.dir_rtl && (a ? i.addClass(m.dir_rtl, "active") : i.removeClass(m.dir_rtl, "active"));
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(s) {
      this.removeRange();
      const a = s == null ? "" : this.convertContentsForEditor(s, null, null);
      if (!this._variable.isCodeView)
        e.element.wysiwyg.innerHTML = a, this._resetComponents(), this.history.push(!1);
      else {
        const u = this.convertHTMLForCodeView(a, !1);
        this._setCodeView(u);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(s) {
      if (!l.iframe)
        return !1;
      s.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? s.head : s.head.replace(this.__scriptTagRegExp, "")), s.body && (this._wd.body.innerHTML = this.convertContentsForEditor(s.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(s) {
      const a = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), u = i.createElement("DIV");
      u.innerHTML = a;
      const h = i.getListChildren(u, function(g) {
        return g.hasAttribute("contenteditable");
      });
      for (let g = 0, m = h.length; g < m; g++)
        h[g].removeAttribute("contenteditable");
      if (l.fullPage && !s) {
        const g = i.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + g + ">" + u.innerHTML + "</body></html>";
      } else
        return u.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(s) {
      return '<div class="sun-editor-editable' + (l.rtl ? " se-rtl" : "") + '">' + this.getContents(s) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(s, a) {
      const u = l.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName))
          return "";
        if (/__se__tag/.test(s.className))
          return s.outerHTML;
        const h = i.getListChildNodes(s, function(g) {
          return i.isSpanWithoutAttr(g) && !i.getParentElement(g, i.isNotCheckingNode);
        }) || [];
        for (let g = h.length - 1; g >= 0; g--)
          h[g].outerHTML = h[g].innerHTML;
        return !a || i.isFormatElement(s) || i.isRangeFormatElement(s) || i.isComponent(s) || i.isMedia(s) || i.isAnchor(s) && i.isMedia(s.firstElementChild) ? i.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + u + ">" + (i.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + u + ">";
      }
      if (s.nodeType === 3) {
        if (!a)
          return i._HTMLConvertor(s.textContent);
        const h = s.textContent.split(/\n/g);
        let g = "";
        for (let m = 0, p = h.length, y; m < p; m++)
          y = h[m].trim(), y.length > 0 && (g += "<" + u + ">" + i._HTMLConvertor(y) + "</" + u + ">");
        return g;
      }
      return s.nodeType === 8 && this._allowHTMLComments ? "<!--" + s.textContent.trim() + "-->" : "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(s) {
      if (!this._disallowedTextTagsRegExp)
        return s;
      const a = l._textTagsMap;
      return s.replace(this._disallowedTextTagsRegExp, function(u, h, g, m) {
        return h + (typeof a[g] == "string" ? a[g] : g) + (m ? " " + m : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(s) {
      return s = s.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, ""), /\bfont\b/i.test(this.options._editorTagsWhitelist) || (s = s.replace(/(<\/?)font(\s?)/gi, "$1span$2")), s.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(s, a) {
      const u = this._w.Math, h = a.match(/(\d+(?:\.\d+)?)(.+)/), g = h ? h[1] * 1 : i.fontValueMap[a], m = h ? h[2] : "rem";
      let p = g;
      switch (/em/.test(m) ? p = u.round(g / 0.0625) : m === "pt" ? p = u.round(g * 1.333) : m === "%" && (p = g / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (p * 0.0625).toFixed(2) + s;
        case "pt":
          return u.floor(p / 1.333) + s;
        default:
          return p + s;
      }
    },
    _cleanStyle: function(s, a, u) {
      let h = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(u) && !h && (s.match(/<span\s(.+)/) || [])[1]) {
        const g = (s.match(/\ssize="([^"]+)"/i) || [])[1], m = (s.match(/\sface="([^"]+)"/i) || [])[1], p = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (g || m || p) && (h = 'style="' + (g ? "font-size:" + this.util.getNumber(g / 3.333, 1) + "rem;" : "") + (m ? "font-family:" + m + ";" : "") + (p ? "color:" + p + ";" : "") + '"');
      }
      if (h) {
        a || (a = []);
        const g = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[u]);
        if (g) {
          const m = [];
          for (let p = 0, y = g.length, C; p < y; p++)
            if (C = g[p].match(/([a-zA-Z0-9-]+)(:)([^"]+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const v = i.kebabToCamelCase(C[1].trim()), w = this.wwComputedStyle[v].replace(/"/g, ""), E = C[3].trim();
              switch (v) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(E) === -1)
                    continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize)
                    continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(E))
                    continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(E))
                    continue;
                  break;
              }
              w !== E && m.push(C[0]);
            }
          m.length > 0 && a.push('style="' + m.join(";") + '"');
        }
      }
      return a;
    },
    /**
     * @description Tag and tag attribute check RegExp function. (used by "cleanHTML" and "convertContentsForEditor")
     * @param {Boolean} lowLevelCheck Row level check
     * @param {String} m RegExp value
     * @param {String} t RegExp value
     * @returns {String}
     * @private
     */
    _cleanTags: function(s, a, u) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(a))
        return a;
      let h = null;
      const g = u.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), m = this._attributesTagsBlacklist[g];
      a = a.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), m ? a = a.replace(m, "") : a = a.replace(this._attributesBlacklistRegExp, "");
      const p = this._attributesTagsWhitelist[g];
      if (p ? h = a.match(p) : h = a.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || g === "span")
        if (g === "a") {
          const y = a.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (h || (h = []), h.push(y[0]));
        } else
          (!h || !/style=/i.test(h.toString())) && (g === "span" ? h = this._cleanStyle(a, h, "span") : /^(P|DIV|H[1-6]|PRE)$/i.test(g) && (h = this._cleanStyle(a, h, "format")));
      else {
        const y = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !h ? h = [y[0]] : y && !h.some(function(C) {
          return /^style/.test(C.trim());
        }) && h.push(y[0]);
      }
      if (i.isFigures(g)) {
        const y = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), y && h.push(y[0]);
      }
      if (h)
        for (let y = 0, C = h.length, v; y < C; y++)
          v = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[y].trim()) ? "" : h[y], u += (/^\s/.test(v) ? "" : " ") + v;
      return u;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(s) {
      let a = "", u;
      const h = s.childNodes;
      for (let g = 0, m = h.length, p; g < m; g++)
        p = h[g], p.nodeType === 8 ? a += "<!-- " + p.textContent + " -->" : !i.isFormatElement(p) && !i.isRangeFormatElement(p) && !i.isComponent(p) && !/meta/i.test(p.nodeName) ? (u || (u = i.createElement(l.defaultTag)), u.appendChild(p), g--, m--) : (u && (a += u.outerHTML, u = null), a += p.outerHTML);
      return u && (a += u.outerHTML), d.createRange().createContextualFragment(a);
    },
    _convertListCell: function(s) {
      let a = "";
      for (let u = 0, h = s.length, g; u < h; u++)
        g = s[u], g.nodeType === 1 ? i.isList(g) ? a += g.innerHTML : i.isListCell(g) ? a += g.outerHTML : i.isFormatElement(g) ? a += "<li>" + (g.innerHTML.trim() || "<br>") + "</li>" : i.isRangeFormatElement(g) && !i.isTable(g) ? a += this._convertListCell(g) : a += "<li>" + g.outerHTML + "</li>" : a += "<li>" + (g.textContent || "<br>") + "</li>";
      return a;
    },
    _isFormatData: function(s) {
      let a = !1;
      for (let u = 0, h = s.length, g; u < h; u++)
        if (g = s[u], g.nodeType === 1 && !i.isTextStyleElement(g) && !i.isBreak(g) && !this.__disallowedTagNameRegExp.test(g.nodeName)) {
          a = !0;
          break;
        }
      return a;
    },
    /**
     * @description Gets the clean HTML code for editor
     * @param {String} html HTML string
     * @param {String|RegExp|null} whitelist Regular expression of allowed tags.
     * RegExp object is create by util.createTagsWhitelist method. (core.pasteTagsWhitelistRegExp)
     * @param {String|RegExp|null} blacklist Regular expression of disallowed tags.
     * RegExp object is create by util.createTagsBlacklist method. (core.pasteTagsBlacklistRegExp)
     * @returns {String}
     */
    cleanHTML: function(s, a, u) {
      s = this._deleteDisallowedTags(this._parser.parseFromString(i.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = d.createRange().createContextualFragment(s);
      try {
        i._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = h.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, v = y.length, w, E; C < v; C++) {
          E = [].slice.call(y[C].classList);
          for (let k = 0, z = E.length; k < z; k++)
            if (w = this.managedTagsInfo.map[E[k]], w) {
              w(y[C]);
              break;
            }
        }
      }
      let g = h.childNodes, m = "";
      const p = this._isFormatData(g);
      p && (g = this._editFormat(h).childNodes);
      for (let y = 0, C = g.length, v; y < C; y++) {
        if (v = g[y], this.__allowedScriptRegExp.test(v.nodeName)) {
          m += v.outerHTML;
          continue;
        }
        m += this._makeLine(v, p);
      }
      return m = i.htmlRemoveWhiteSpace(m), m ? (a && (m = m.replace(typeof a == "string" ? i.createTagsWhitelist(a) : a, "")), u && (m = m.replace(typeof u == "string" ? i.createTagsBlacklist(u) : u, ""))) : m = s, this._tagConvertor(m);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      s = this._deleteDisallowedTags(this._parser.parseFromString(i.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const a = d.createRange().createContextualFragment(s);
      try {
        i._consistencyCheckOfHTML(a, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (m) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + m);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const m = a.querySelectorAll(this.managedTagsInfo.query);
        for (let p = 0, y = m.length, C, v; p < y; p++) {
          v = [].slice.call(m[p].classList);
          for (let w = 0, E = v.length; w < E; w++)
            if (C = this.managedTagsInfo.map[v[w]], C) {
              C(m[p]);
              break;
            }
        }
      }
      const u = a.childNodes;
      let h = "", g = null;
      for (let m = 0, p; m < u.length; m++) {
        if (p = u[m], this.__allowedScriptRegExp.test(p.nodeName)) {
          h += p.outerHTML;
          continue;
        }
        if (!i.isFormatElement(p) && !i.isRangeFormatElement(p) && !i.isComponent(p) && !i.isMedia(p) && p.nodeType !== 8 && !/__se__tag/.test(p.className)) {
          if (g || (g = i.createElement(l.defaultTag)), g.appendChild(p), m--, u[m + 1] && !i.isFormatElement(u[m + 1]))
            continue;
          p = g, g = null;
        }
        g && (h += this._makeLine(g, !0), g = null), h += this._makeLine(p, !0);
      }
      return g && (h += this._makeLine(g, !0)), h.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (h = i.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, a) {
      let u = "";
      const h = f.RegExp, g = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), m = typeof s == "string" ? d.createRange().createContextualFragment(s) : s, p = (function(v) {
        return this.isFormatElement(v) || this.isComponent(v);
      }).bind(i), y = a ? "" : `
`;
      let C = a ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function v(w, E) {
        const k = w.childNodes, z = g.test(w.nodeName), A = z ? E : "";
        for (let O = 0, P = k.length, V, T, H, I, L, D; O < P; O++) {
          if (V = k[O], I = g.test(V.nodeName), T = I ? y : "", H = p(V) && !z && !/^(TH|TD)$/i.test(w.nodeName) ? y : "", V.nodeType === 8) {
            u += `
<!-- ` + V.textContent.trim() + " -->" + T;
            continue;
          }
          if (V.nodeType === 3) {
            i.isList(V.parentElement) || (u += i._HTMLConvertor(/^\n+$/.test(V.data) ? "" : V.data));
            continue;
          }
          if (V.childNodes.length === 0) {
            u += (/^HR$/i.test(V.nodeName) ? y : "") + (/^PRE$/i.test(V.parentElement.nodeName) && /^BR$/i.test(V.nodeName) ? "" : A) + V.outerHTML + T;
            continue;
          }
          V.outerHTML ? (L = V.nodeName.toLowerCase(), D = A || I ? E : "", u += (H || (z ? "" : T)) + D + V.outerHTML.match(h("<" + L + "[^>]*>", "i"))[0] + T, v(V, E + C), u += (/\n$/.test(u) ? D : "") + "</" + L + ">" + (H || T || z || /^(TH|TD)$/i.test(V.nodeName) ? y : "")) : u += new f.XMLSerializer().serializeToString(V);
        }
      }(m, ""), u.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, a, u) {
      d.addEventListener(s, a, u), l.iframe && this._wd.addEventListener(s, a);
    },
    /**
             * @description Remove events from document.
             * When created as an Iframe, the event of the document inside the Iframe is also removed.
             * @param {String} type Event type
             * @param {Function} listener Event listener
             */
    removeDocEvent: function(s, a) {
      d.removeEventListener(s, a), l.iframe && this._wd.removeEventListener(s, a);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const a = l.maxCharCount, u = l.charCounterType;
      let h = 0;
      if (s && (h = this.getCharLength(s, u)), this._setCharCount(), a > 0) {
        let g = !1;
        const m = x.getCharCount(u);
        if (m > a) {
          if (g = !0, h > 0) {
            this._editorRange();
            const p = this.getRange(), y = p.endOffset - 1, C = this.getSelectionNode().textContent, v = p.endOffset - (m - a);
            this.getSelectionNode().textContent = C.slice(0, v < 0 ? 0 : v) + C.slice(p.endOffset, C.length), this.setRange(p.endContainer, y, p.endContainer, y);
          }
        } else
          m + h > a && (g = !0);
        if (g && (this._callCounterBlink(), h > 0))
          return !1;
      }
      return !0;
    },
    /**
     * @description When "element" is added, if it is greater than "options.maxCharCount", false is returned.
     * @param {Node|String} element Element node or String.
     * @param {String|null} charCounterType charCounterType. If it is null, the options.charCounterType
     * @returns {Boolean}
     */
    checkCharCount: function(s, a) {
      if (l.maxCharCount) {
        const u = a || l.charCounterType, h = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, u);
        if (h > 0 && h + x.getCharCount(u) > l.maxCharCount)
          return this._callCounterBlink(), !1;
      }
      return !0;
    },
    /**
     * @description Get the length of the content.
     * Depending on the option, the length of the character is taken. (charCounterType)
     * @param {String} content Content to count
     * @param {String} charCounterType options.charCounterType
     * @returns {Number}
     */
    getCharLength: function(s, a) {
      return /byte/.test(a) ? i.getByteLength(s) : s.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      r.controllersOff();
      const s = b._responsiveButtonSize;
      if (s) {
        let a = 0;
        (r._isBalloon || r._isInline) && l.toolbarWidth === "auto" ? a = e.element.topArea.offsetWidth : a = e.element.toolbar.offsetWidth;
        let u = "default";
        for (let h = 1, g = s.length; h < g; h++)
          if (a < s[h]) {
            u = s[h] + "";
            break;
          }
        b._responsiveCurrentSize !== u && (b._responsiveCurrentSize = u, x.setToolbarButtons(b._responsiveButtons[u]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout(function() {
        e.element.charCounter.textContent = x.getCharCount(l.charCounterType);
      });
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const s = e.element.charWrapper;
      s && !i.hasClass(s, "se-blink") && (i.addClass(s, "se-blink"), f.setTimeout(function() {
        i.removeClass(s, "se-blink");
      }, 600));
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let s = 0, a = this._fileInfoPluginsCheck.length; s < a; s++)
        this._fileInfoPluginsCheck[s]();
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let s = 0, a = this._fileInfoPluginsReset.length; s < a; s++)
        this._fileInfoPluginsReset[s]();
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(s) {
      l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().setValue(s) : e.element.code.value = s;
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().getValue() : e.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(s) {
      const a = this.commandMap, u = this.activePlugins;
      for (let h in a)
        s.indexOf(h) > -1 || !i.hasOwn(a, h) || (u.indexOf(h) > -1 ? n[h].active.call(this, null) : a.OUTDENT && /^OUTDENT$/i.test(h) ? i.isImportantDisabled(a.OUTDENT) || a.OUTDENT.setAttribute("disabled", !0) : a.INDENT && /^INDENT$/i.test(h) ? i.isImportantDisabled(a.INDENT) || a.INDENT.removeAttribute("disabled") : i.removeClass(a[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, a) {
      const u = f.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = d, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = i.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + i.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(T) {
        return this.test(T) ? T : "";
      }).bind(l.allowedClassNames);
      const h = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new u("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new u("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new u("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new u("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
        let T = e.element.wysiwygFrame;
        for (; T; ) {
          if (T.shadowRoot) {
            this._shadowRoot = T.shadowRoot;
            break;
          } else if (T instanceof f.ShadowRoot) {
            this._shadowRoot = T;
            break;
          }
          T = T.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const g = f.Object.keys(l._textTagsMap), m = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(T) {
        return /b|i|ins|s|strike/i.test(T);
      }) : [];
      for (let T = 0; T < m.length; T++)
        g.splice(g.indexOf(m[T].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = g.length === 0 ? null : new u("(<\\/?)(" + g.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const p = function(T, H) {
        return T ? T === "*" ? "[a-z-]+" : H ? T + "|" + H : T : "^";
      }, y = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|controls|origin-size", C = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new u("^(" + p(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new u("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = i.createTagsWhitelist(p(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = i.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = i.createTagsWhitelist(p(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = i.createTagsBlacklist(l.pasteTagsBlacklist);
      const v = '\\s*=\\s*(")[^"]*\\1', w = l.attributesWhitelist;
      let E = {}, k = "";
      if (w)
        for (let T in w)
          !i.hasOwn(w, T) || /^on[a-z]+$/i.test(w[T]) || (T === "all" ? k = p(w[T], y) : E[T] = new u("\\s(?:" + p(w[T], "") + ")" + v, "ig"));
      this._attributesWhitelistRegExp = new u("\\s(?:" + (k || y + "|" + C) + ")" + v, "ig"), this._attributesWhitelistRegExp_all_data = new u("\\s(?:" + ((k || y) + "|data-[a-z0-9\\-]+") + ")" + v, "ig"), this._attributesTagsWhitelist = E;
      const z = l.attributesBlacklist;
      if (E = {}, k = "", z)
        for (let T in z)
          i.hasOwn(z, T) && (T === "all" ? k = p(z[T], "") : E[T] = new u("\\s(?:" + p(z[T], "") + ")" + v, "ig"));
      this._attributesBlacklistRegExp = new u("\\s(?:" + (k || "^") + ")" + v, "ig"), this._attributesTagsBlacklist = E, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const A = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let O = [], P, V;
      for (let T in n)
        if (i.hasOwn(n, T)) {
          if (P = n[T], V = t[T], (P.active || P.action) && V && this.callPlugin(T, null, V), typeof P.checkFileInfo == "function" && typeof P.resetFileInfo == "function" && (this.callPlugin(T, null, V), this._fileInfoPluginsCheck.push(P.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(P.resetFileInfo.bind(this))), f.Array.isArray(P.fileTags)) {
            const H = P.fileTags;
            this.callPlugin(T, null, V), this._fileManager.tags = this._fileManager.tags.concat(H), O.push(T);
            for (let I = 0, L = H.length; I < L; I++)
              this._fileManager.pluginMap[H[I].toLowerCase()] = T;
          }
          if (P.managedTags) {
            const H = P.managedTags();
            A.push("." + H.className), this.managedTagsInfo.map[H.className] = H.method.bind(this);
          }
        }
      this.managedTagsInfo.query = A.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new u("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new u("^(" + (O.length === 0 ? "^" : O.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Ci(this, this._onChange_historyStack.bind(this)), this.addModule([gt]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, a);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const s = e.tool, a = this.commandMap;
      a.INDENT = s.indent, a.OUTDENT = s.outdent, a[l.textTags.bold.toUpperCase()] = s.bold, a[l.textTags.underline.toUpperCase()] = s.underline, a[l.textTags.italic.toUpperCase()] = s.italic, a[l.textTags.strike.toUpperCase()] = s.strike, a[l.textTags.sub.toUpperCase()] = s.subscript, a[l.textTags.sup.toUpperCase()] = s.superscript, this._styleCommandMap = {
        fullScreen: s.fullScreen,
        showBlocks: s.showBlocks,
        codeView: s.codeView
      }, this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(s, a) {
      e.element.wysiwyg.innerHTML = s ? a : this.convertContentsForEditor((typeof a == "string" ? a : /^TEXTAREA$/i.test(e.element.originElement.nodeName) ? e.element.originElement.value : e.element.originElement.innerHTML) || "");
    },
    /**
     * @description Called when there are changes to tags in the wysiwyg region.
     * @private
     */
    _resourcesStateChange: function() {
      this._iframeAutoHeight(), this._checkPlaceholder();
    },
    /**
     * @description Called when after execute "history.push"
     * @private
     */
    _onChange_historyStack: function() {
      this.hasFocus && b._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), x.onChange && x.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && b._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const s = r._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", i.isResizeObserverSupported || r.__callResizeFunction(s, null);
      }) : i.isResizeObserverSupported || r.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, a) {
      s = s === -1 ? a.borderBoxSize && a.borderBoxSize[0] ? a.borderBoxSize[0].blockSize : a.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof x.onResizeEditor == "function" && x.onResizeEditor(s, this._editorHeight, r, a), this._editorHeight = s);
    },
    /**
     * @description Set display property when there is placeholder.
     * @private
     */
    _checkPlaceholder: function() {
      if (this._placeholder) {
        if (this._variable.isCodeView) {
          this._placeholder.style.display = "none";
          return;
        }
        const s = e.element.wysiwyg;
        !i.onlyZeroWidthSpace(s.textContent) || s.querySelector(i._allowedEmptyNodeList) || (s.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(s) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName))
        return;
      const a = this.getRange(), u = a.commonAncestorContainer, h = a.startContainer, g = i.getRangeFormatElement(u, null);
      let m, p, y;
      const C = i.getParentElement(u, i.isComponent);
      if (!(C && !i.isTable(C))) {
        if (u.nodeType === 1 && u.getAttribute("data-se-embed") === "true") {
          let v = u.nextElementSibling;
          i.isFormatElement(v) || (v = this.appendFormatTag(u, l.defaultTag)), this.setRange(v.firstChild, 0, v.firstChild, 0);
          return;
        }
        if (!((i.isRangeFormatElement(h) || i.isWysiwygDiv(h)) && (i.isComponent(h.children[a.startOffset]) || i.isComponent(h.children[a.startOffset - 1])))) {
          if (i.getParentElement(u, i.isNotCheckingNode))
            return null;
          if (g) {
            y = i.createElement(s || l.defaultTag), y.innerHTML = g.innerHTML, y.childNodes.length === 0 && (y.innerHTML = i.zeroWidthSpace), g.innerHTML = y.outerHTML, y = g.firstChild, m = i.getEdgeChildNodes(y, null).sc, m || (m = i.createTextNode(i.zeroWidthSpace), y.insertBefore(m, y.firstChild)), p = m.textContent.length, this.setRange(m, p, m, p);
            return;
          }
          if (i.isRangeFormatElement(u) && u.childNodes.length <= 1) {
            let v = null;
            u.childNodes.length === 1 && i.isBreak(u.firstChild) ? v = u.firstChild : (v = i.createTextNode(i.zeroWidthSpace), u.appendChild(v)), this.setRange(v, 1, v, 1);
            return;
          }
          if (this.execCommand("formatBlock", !1, s || l.defaultTag), m = i.getEdgeChildNodes(u, u), m = m ? m.ec : u, y = i.getFormatElement(m, null), !y) {
            this.removeRange(), this._editorRange();
            return;
          }
          if (i.isBreak(y.nextSibling) && i.removeItem(y.nextSibling), i.isBreak(y.previousSibling) && i.removeItem(y.previousSibling), i.isBreak(m)) {
            const v = i.createTextNode(i.zeroWidthSpace);
            m.parentNode.insertBefore(v, m), m = v;
          }
          this.effectNode = null, this.nativeFocus();
        }
      }
    },
    /**
     * @description Initialization after "setOptions"
     * @param {Object} el context.element
     * @param {String} _initHTML Initial html string
     * @private
     */
    _setOptionsInit: function(s, a) {
      this.context = e = Ge(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, a);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, a) {
      this._init(s, a), b._addEvent(), this._setCharCount(), b._offStickyToolbar(), b.onResize_window(), e.element.toolbar.style.visibility = "";
      const u = l.frameAttrbutes;
      for (let h in u)
        e.element.wysiwyg.setAttribute(h, u[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof r._resourcesStateChange == "function" && (b._resizeObserver && b._resizeObserver.observe(e.element.wysiwygFrame), b._toolbarObserver && b._toolbarObserver.observe(e.element._toolbarShadow), r._resourcesStateChange(), typeof x.onload == "function" && x.onload(r, s));
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(s) {
      return {
        _top: s.topArea,
        _relative: s.relative,
        _toolBar: s.toolbar,
        _toolbarShadow: s._toolbarShadow,
        _menuTray: s._menuTray,
        _editorArea: s.editorArea,
        _wysiwygArea: s.wysiwygFrame,
        _codeArea: s.code,
        _placeholder: s.placeholder,
        _resizingBar: s.resizingBar,
        _navigation: s.navigation,
        _charCounter: s.charCounter,
        _charWrapper: s.charWrapper,
        _loading: s.loading,
        _lineBreaker: s.lineBreaker,
        _lineBreaker_t: s.lineBreaker_t,
        _lineBreaker_b: s.lineBreaker_b,
        _resizeBack: s.resizeBackground,
        _stickyDummy: s._stickyDummy,
        _arrow: s._arrow
      };
    }
  }, b = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _cursorMoveKeyCode: new f.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new f.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new f.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new f.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(l._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new f.RegExp(i.zeroWidthSpace + "+", ""),
    _keyCodeShortcut: {
      65: "A",
      66: "B",
      83: "S",
      85: "U",
      73: "I",
      89: "Y",
      90: "Z",
      219: "[",
      221: "]"
    },
    _shortcutCommand: function(s, a) {
      let u = null;
      const h = b._keyCodeShortcut[s];
      switch (h) {
        case "A":
          u = "selectAll";
          break;
        case "B":
          l.shortcutsDisable.indexOf("bold") === -1 && (u = "bold");
          break;
        case "S":
          a && l.shortcutsDisable.indexOf("strike") === -1 ? u = "strike" : !a && l.shortcutsDisable.indexOf("save") === -1 && (u = "save");
          break;
        case "U":
          l.shortcutsDisable.indexOf("underline") === -1 && (u = "underline");
          break;
        case "I":
          l.shortcutsDisable.indexOf("italic") === -1 && (u = "italic");
          break;
        case "Z":
          l.shortcutsDisable.indexOf("undo") === -1 && (a ? u = "redo" : u = "undo");
          break;
        case "Y":
          l.shortcutsDisable.indexOf("undo") === -1 && (u = "redo");
          break;
        case "[":
          l.shortcutsDisable.indexOf("indent") === -1 && (u = l.rtl ? "indent" : "outdent");
          break;
        case "]":
          l.shortcutsDisable.indexOf("indent") === -1 && (u = l.rtl ? "outdent" : "indent");
          break;
      }
      return u ? (r.commandHandler(r.commandMap[u], u), !0) : !!h;
    },
    _applyTagEffects: function() {
      let s = r.getSelectionNode();
      if (s === r.effectNode)
        return;
      r.effectNode = s;
      const a = l.rtl ? "marginRight" : "marginLeft", u = r.commandMap, h = b._onButtonsCheck, g = [], m = [], p = r.activePlugins, y = p.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let v = s; !i.isWysiwygDiv(v) && v; v = v.parentNode)
        if (!(v.nodeType !== 1 || i.isBreak(v))) {
          if (C = v.nodeName.toUpperCase(), m.push(C), !r.isReadOnly)
            for (let w = 0, E; w < y; w++)
              E = p[w], g.indexOf(E) === -1 && n[E].active.call(r, v) && g.push(E);
          if (i.isFormatElement(v)) {
            g.indexOf("OUTDENT") === -1 && u.OUTDENT && !i.isImportantDisabled(u.OUTDENT) && (i.isListCell(v) || v.style[a] && i.getNumber(v.style[a], 0) > 0) && (g.push("OUTDENT"), u.OUTDENT.removeAttribute("disabled")), g.indexOf("INDENT") === -1 && u.INDENT && !i.isImportantDisabled(u.INDENT) && (g.push("INDENT"), i.isListCell(v) && !v.previousElementSibling ? u.INDENT.setAttribute("disabled", !0) : u.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (g.push(C), i.addClass(u[C], "active"));
        }
      r._setKeyEffect(g), r._variable.currentNodes = m.reverse(), r._variable.currentNodesMap = g, l.showPathLabel && (e.element.navigation.textContent = r._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let a = s.target;
      if (r._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(a.nodeName) ? r._antiBlur = !1 : s.preventDefault(), i.getParentElement(a, ".se-submenu"))
        s.stopPropagation(), r._notHideToolbar = !0;
      else {
        let u = a.getAttribute("data-command"), h = a.className;
        for (; !u && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          a = a.parentNode, u = a.getAttribute("data-command"), h = a.className;
        (u === r._submenuName || u === r._containerName) && s.stopPropagation();
      }
    },
    onClick_toolbar: function(s) {
      let a = s.target, u = a.getAttribute("data-display"), h = a.getAttribute("data-command"), g = a.className;
      for (r.controllersOff(); a.parentNode && !h && !/se-menu-list/.test(g) && !/se-toolbar/.test(g); )
        a = a.parentNode, h = a.getAttribute("data-command"), u = a.getAttribute("data-display"), g = a.className;
      !h && !u || a.disabled || r.actionCall(h, u, a);
    },
    onMouseDown_wysiwyg: function(s) {
      if (r.isReadOnly || i.isNonEditable(e.element.wysiwyg))
        return;
      if (i._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (f.setTimeout(r._editorRange.bind(r)), typeof x.onMouseDown == "function" && x.onMouseDown(s, r) === !1)
        return;
      const a = i.getParentElement(s.target, i.isCell);
      if (a) {
        const u = r.plugins.table;
        u && a !== u._fixedCell && !u._shift && r.callPlugin("table", function() {
          u.onTableCellMultiSelect.call(r, a, !1);
        }, null);
      }
      r._isBalloon && b._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const a = s.target;
      if (r.isReadOnly)
        return s.preventDefault(), i.isAnchor(a) && f.open(a.href, a.target), !1;
      if (i.isNonEditable(e.element.wysiwyg) || typeof x.onClick == "function" && x.onClick(s, r) === !1)
        return;
      const u = r.getFileComponent(a);
      if (u) {
        s.preventDefault(), r.selectComponent(u.target, u.pluginName);
        return;
      }
      const h = i.getParentElement(a, "FIGCAPTION");
      if (h && i.isNonEditable(h) && (s.preventDefault(), h.focus(), r._isInline && !r._inlineToolbarAttr.isShow)) {
        b._showToolbarInline();
        const y = function() {
          b._hideToolbar(), h.removeEventListener("blur", y);
        };
        h.addEventListener("blur", y);
      }
      if (r._editorRange(), s.detail === 3) {
        let y = r.getRange();
        i.isFormatElement(y.endContainer) && y.endOffset === 0 && (y = r.setRange(y.startContainer, y.startOffset, y.startContainer, y.startContainer.length), r._rangeInfo(y, r.getSelection()));
      }
      const g = r.getSelectionNode(), m = i.getFormatElement(g, null), p = i.getRangeFormatElement(g, null);
      if (!m && !i.isNonEditable(a) && !i.isList(p)) {
        const y = r.getRange();
        if (i.getFormatElement(y.startContainer) === i.getFormatElement(y.endContainer))
          if (i.isList(p)) {
            s.preventDefault();
            const C = i.createElement("LI"), v = g.nextElementSibling;
            C.appendChild(g), p.insertBefore(C, v), r.focus();
          } else
            !i.isWysiwygDiv(g) && !i.isComponent(g) && (!i.isTable(g) || i.isCell(g)) && r._setDefaultFormat(i.isRangeFormatElement(p) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), r.focus()) : b._applyTagEffects();
      } else
        b._applyTagEffects();
      r._isBalloon && f.setTimeout(b._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      b._balloonDelay && f.clearTimeout(b._balloonDelay), b._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(b), 350);
    },
    _toggleToolbarBalloon: function() {
      r._editorRange();
      const s = r.getRange();
      r._bindControllersOff || !r._isBalloonAlways && s.collapsed ? b._hideToolbar() : b._showToolbarBalloon(s);
    },
    _showToolbarBalloon: function(s) {
      if (!r._isBalloon)
        return;
      const a = s || r.getRange(), u = e.element.toolbar, h = e.element.topArea, g = r.getSelection();
      let m;
      if (r._isBalloonAlways && a.collapsed)
        m = !0;
      else if (g.focusNode === g.anchorNode)
        m = g.focusOffset < g.anchorOffset;
      else {
        const T = i.getListChildNodes(a.commonAncestorContainer, null);
        m = i.getArrayIndex(T, g.focusNode) < i.getArrayIndex(T, g.anchorNode);
      }
      let p = a.getClientRects();
      p = p[m ? 0 : p.length - 1];
      const y = r.getGlobalScrollOffset();
      let C = y.left, v = y.top;
      const w = h.offsetWidth, E = b._getEditorOffsets(null), k = E.top, z = E.left;
      if (u.style.top = "-10000px", u.style.visibility = "hidden", u.style.display = "block", !p) {
        const T = r.getSelectionNode();
        if (i.isFormatElement(T)) {
          const H = i.createTextNode(i.zeroWidthSpace);
          r.insertNode(H, null, !1), r.setRange(H, 1, H, 1), r._editorRange(), p = r.getRange().getClientRects(), p = p[m ? 0 : p.length - 1];
        }
        if (!p) {
          const H = i.getOffset(T, e.element.wysiwygFrame);
          p = {
            left: H.left,
            top: H.top,
            right: H.left,
            bottom: H.top + T.offsetHeight,
            noText: !0
          }, C = 0, v = 0;
        }
        m = !0;
      }
      const A = f.Math.round(e.element._arrow.offsetWidth / 2), O = u.offsetWidth, P = u.offsetHeight, V = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (V && (p = {
        left: p.left + V.left,
        top: p.top + V.top,
        right: p.right + V.right - V.width,
        bottom: p.bottom + V.bottom - V.height
      }), b._setToolbarOffset(m, p, u, z, w, C, v, k, A), (O !== u.offsetWidth || P !== u.offsetHeight) && b._setToolbarOffset(m, p, u, z, w, C, v, k, A), l.toolbarContainer) {
        const T = h.parentElement;
        let H = l.toolbarContainer, I = H.offsetLeft, L = H.offsetTop;
        for (; !H.parentElement.contains(T) || !/^(BODY|HTML)$/i.test(H.parentElement.nodeName); )
          H = H.offsetParent, I += H.offsetLeft, L += H.offsetTop;
        u.style.left = u.offsetLeft - I + h.offsetLeft + "px", u.style.top = u.offsetTop - L + h.offsetTop + "px";
      }
      u.style.visibility = "";
    },
    _setToolbarOffset: function(s, a, u, h, g, m, p, y, C) {
      const w = u.offsetWidth, E = a.noText && !s ? 0 : u.offsetHeight, k = (s ? a.left : a.right) - h - w / 2 + m, z = k + w - g;
      let A = (s ? a.top - E - C : a.bottom + C) - (a.noText ? 0 : y) + p, O = k < 0 ? 1 : z < 0 ? k : k - z - 1 - 1, P = !1;
      const V = A + (s ? b._getEditorOffsets(null).top : u.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && V > 0 && b._getPageBottomSpace() < V ? (s = !0, P = !0) : s && d.documentElement.offsetTop > V && (s = !1, P = !0), P && (A = (s ? a.top - E - C : a.bottom + C) - (a.noText ? 0 : y) + p), u.style.left = f.Math.floor(O) + "px", u.style.top = f.Math.floor(A) + "px", s ? (i.removeClass(e.element._arrow, "se-arrow-up"), i.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = E + "px") : (i.removeClass(e.element._arrow, "se-arrow-down"), i.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const T = f.Math.floor(w / 2 + (k - O));
      e.element._arrow.style.left = (T + C > u.offsetWidth ? u.offsetWidth - C : T < C ? C : T) + "px";
    },
    _showToolbarInline: function() {
      if (!r._isInline)
        return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", r._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, r._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof x.showInline == "function" && x.showInline(s, e, r), b.onScroll_window(), r._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !r._notHideToolbar && !r._variable.isFullScreen && (e.element.toolbar.style.display = "none", r._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (r.isReadOnly || r.isDisabled)
        return s.preventDefault(), s.stopPropagation(), r.history.go(r.history.getCurrentIndex()), !1;
      r._editorRange();
      const a = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!r._charCount(a))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof x.onInput == "function" && x.onInput(s, r) === !1 || r.history.push(!0);
    },
    _isUneditableNode: function(s, a) {
      const u = a ? s.startContainer : s.endContainer, h = a ? s.startOffset : s.endOffset, g = a ? "previousSibling" : "nextSibling", m = u.nodeType === 1;
      let p;
      return m ? (p = b._isUneditableNode_getSibling(u.childNodes[h], g, u), p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false") : (p = b._isUneditableNode_getSibling(u, g, u), r.isEdgePoint(u, h, a ? "front" : "end") && p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, a, u) {
      if (!s)
        return null;
      let h = s[a];
      if (!h)
        if (h = i.getFormatElement(u), h = h ? h[a] : null, h && !i.isComponent(h))
          h = a === "previousSibling" ? h.firstChild : h.lastChild;
        else
          return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let a = r.getSelectionNode();
      if (i.isInputElement(a))
        return;
      const u = s.keyCode, h = s.shiftKey, g = s.ctrlKey || s.metaKey || u === 91 || u === 92 || u === 224, m = s.altKey;
      if (b._IEisComposing = u === 229, !g && r.isReadOnly && !b._cursorMoveKeyCode.test(u))
        return s.preventDefault(), !1;
      if (r.submenuOff(), r._isBalloon && b._hideToolbar(), typeof x.onKeyDown == "function" && x.onKeyDown(s, r) === !1)
        return;
      if (g && b._shortcutCommand(u, h))
        return b._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      b._onShortcutKey && (b._onShortcutKey = !1);
      const p = r.getRange(), y = !p.collapsed || p.startContainer !== p.endContainer, C = r._fileManager.pluginRegExp.test(r.currentControllerName) ? r.currentControllerName : "";
      let v = i.getFormatElement(a, null) || a, w = i.getRangeFormatElement(v, null);
      switch (u) {
        case 8:
          if (!y && C) {
            s.preventDefault(), s.stopPropagation(), r.plugins[C].destroy.call(r);
            break;
          }
          if (y && b._hardDelete()) {
            s.preventDefault(), s.stopPropagation();
            break;
          }
          if (!i.isFormatElement(v) && !e.element.wysiwyg.firstElementChild && !i.isComponent(a) && r._setDefaultFormat(l.defaultTag) !== null)
            return s.preventDefault(), s.stopPropagation(), !1;
          if (!y && !v.previousElementSibling && p.startOffset === 0 && !a.previousSibling && !i.isListCell(v) && i.isFormatElement(v) && (!i.isFreeFormatElement(v) || i.isClosureFreeFormatElement(v))) {
            if (i.isClosureRangeFormatElement(v.parentNode))
              return s.preventDefault(), s.stopPropagation(), !1;
            if (i.isWysiwygDiv(v.parentNode) && v.childNodes.length <= 1 && (!v.firstChild || i.onlyZeroWidthSpace(v.textContent))) {
              if (s.preventDefault(), s.stopPropagation(), v.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                v.innerHTML = "<br>";
                const L = v.attributes;
                for (; L[0]; )
                  v.removeAttribute(L[0].name);
              } else {
                const L = i.createElement(l.defaultTag);
                L.innerHTML = "<br>", v.parentElement.replaceChild(L, v);
              }
              return r.nativeFocus(), !1;
            }
          }
          const E = p.startContainer;
          if (v && !v.previousElementSibling && p.startOffset === 0 && E.nodeType === 3 && !i.isFormatElement(E.parentNode)) {
            let L = E.parentNode.previousSibling;
            const D = E.parentNode.nextSibling;
            L || (D ? L = D : (L = i.createElement("BR"), v.appendChild(L)));
            let R = E;
            for (; v.contains(R) && !R.previousSibling; )
              R = R.parentNode;
            if (!v.contains(R)) {
              E.textContent = "", i.removeItemAllParents(E, null, v);
              break;
            }
          }
          if (b._isUneditableNode(p, !0)) {
            s.preventDefault(), s.stopPropagation();
            break;
          }
          !y && r._isEdgeFormat(p.startContainer, p.startOffset, "start") && i.isFormatElement(v.previousElementSibling) && (r._formatAttrsTemp = v.previousElementSibling.attributes);
          const k = p.commonAncestorContainer;
          if (v = i.getFormatElement(p.startContainer, null), w = i.getRangeFormatElement(v, null), w && v && !i.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
            if (i.isListCell(v) && i.isList(w) && (i.isListCell(w.parentNode) || v.previousElementSibling) && (a === v || a.nodeType === 3 && (!a.previousSibling || i.isList(a.previousSibling))) && (i.getFormatElement(p.startContainer, null) !== i.getFormatElement(p.endContainer, null) ? w.contains(p.startContainer) : p.startOffset === 0 && p.collapsed)) {
              if (p.startContainer !== p.endContainer)
                s.preventDefault(), r.removeNode(), p.startContainer.nodeType === 3 && r.setRange(p.startContainer, p.startContainer.textContent.length, p.startContainer, p.startContainer.textContent.length), r.history.push(!0);
              else {
                let L = v.previousElementSibling || w.parentNode;
                if (i.isListCell(L)) {
                  s.preventDefault();
                  let D = L;
                  if (!L.contains(v) && i.isListCell(D) && i.isList(D.lastElementChild)) {
                    for (D = D.lastElementChild.lastElementChild; i.isListCell(D) && i.isList(D.lastElementChild); )
                      D = D.lastElementChild && D.lastElementChild.lastElementChild;
                    L = D;
                  }
                  let R = L === w.parentNode ? w.previousSibling : L.lastChild;
                  R || (R = i.createTextNode(i.zeroWidthSpace), w.parentNode.insertBefore(R, w.parentNode.firstChild));
                  const M = R.nodeType === 3 ? R.textContent.length : 1, U = v.childNodes;
                  let j = R, $ = U[0];
                  for (; $ = U[0]; )
                    L.insertBefore($, j.nextSibling), j = $;
                  i.removeItem(v), w.children.length === 0 && i.removeItem(w), r.setRange(R, M, R, M), r.history.push(!0);
                }
              }
              break;
            }
            if (!y && p.startOffset === 0) {
              let L = !0, D = k;
              for (; D && D !== w && !i.isWysiwygDiv(D); ) {
                if (D.previousSibling && (D.previousSibling.nodeType === 1 || !i.onlyZeroWidthSpace(D.previousSibling.textContent.trim()))) {
                  L = !1;
                  break;
                }
                D = D.parentNode;
              }
              if (L && w.parentNode) {
                s.preventDefault(), r.detachRangeFormatElement(w, i.isListCell(v) ? [v] : null, null, !1, !1), r.history.push(!0);
                break;
              }
            }
          }
          if (!y && v && (p.startOffset === 0 || a === v && v.childNodes[p.startOffset])) {
            const L = a === v ? v.childNodes[p.startOffset] : a, D = v.previousSibling, R = (k.nodeType === 3 || i.isBreak(k)) && !k.previousSibling && p.startOffset === 0;
            if (L && !L.previousSibling && (k && i.isComponent(k.previousSibling) || R && i.isComponent(D))) {
              const M = r.getFileComponent(D);
              M ? (s.preventDefault(), s.stopPropagation(), v.textContent.length === 0 && i.removeItem(v), r.selectComponent(M.target, M.pluginName) === !1 && r.blur()) : i.isComponent(D) && (s.preventDefault(), s.stopPropagation(), i.removeItem(D));
              break;
            }
            if (L && i.isNonEditable(L.previousSibling)) {
              s.preventDefault(), s.stopPropagation(), i.removeItem(L.previousSibling);
              break;
            }
          }
          break;
        case 46:
          if (C) {
            s.preventDefault(), s.stopPropagation(), r.plugins[C].destroy.call(r);
            break;
          }
          if (y && b._hardDelete()) {
            s.preventDefault(), s.stopPropagation();
            break;
          }
          if (b._isUneditableNode(p, !1)) {
            s.preventDefault(), s.stopPropagation();
            break;
          }
          if ((i.isFormatElement(a) || a.nextSibling === null || i.onlyZeroWidthSpace(a.nextSibling) && a.nextSibling.nextSibling === null) && p.startOffset === a.textContent.length) {
            const L = v.nextElementSibling;
            if (!L)
              break;
            if (i.isComponent(L)) {
              if (s.preventDefault(), i.onlyZeroWidthSpace(v) && (i.removeItem(v), i.isTable(L))) {
                let R = i.getChildElement(L, i.isCell, !1);
                R = R.firstElementChild || R, r.setRange(R, 0, R, 0);
                break;
              }
              const D = r.getFileComponent(L);
              D ? (s.stopPropagation(), r.selectComponent(D.target, D.pluginName) === !1 && r.blur()) : i.isComponent(L) && (s.stopPropagation(), i.removeItem(L));
              break;
            }
          }
          if (!y && (r.isEdgePoint(p.endContainer, p.endOffset) || a === v && v.childNodes[p.startOffset])) {
            const L = a === v && v.childNodes[p.startOffset] || a;
            if (L && i.isNonEditable(L.nextSibling)) {
              s.preventDefault(), s.stopPropagation(), i.removeItem(L.nextSibling);
              break;
            } else if (i.isComponent(L)) {
              s.preventDefault(), s.stopPropagation(), i.removeItem(L);
              break;
            }
          }
          if (!y && r._isEdgeFormat(p.endContainer, p.endOffset, "end") && i.isFormatElement(v.nextElementSibling) && (r._formatAttrsTemp = v.attributes), v = i.getFormatElement(p.startContainer, null), w = i.getRangeFormatElement(v, null), i.isListCell(v) && i.isList(w) && (a === v || a.nodeType === 3 && (!a.nextSibling || i.isList(a.nextSibling)) && (i.getFormatElement(p.startContainer, null) !== i.getFormatElement(p.endContainer, null) ? w.contains(p.endContainer) : p.endOffset === a.textContent.length && p.collapsed))) {
            p.startContainer !== p.endContainer && r.removeNode();
            let L = i.getArrayItem(v.children, i.isList, !1);
            if (L = L || v.nextElementSibling || w.parentNode.nextElementSibling, L && (i.isList(L) || i.getArrayItem(L.children, i.isList, !1))) {
              s.preventDefault();
              let D, R;
              if (i.isList(L)) {
                const M = L.firstElementChild;
                for (R = M.childNodes, D = R[0]; R[0]; )
                  v.insertBefore(R[0], L);
                i.removeItem(M);
              } else {
                for (D = L.firstChild, R = L.childNodes; R[0]; )
                  v.appendChild(R[0]);
                i.removeItem(L);
              }
              r.setRange(D, 0, D, 0), r.history.push(!0);
            }
            break;
          }
          break;
        case 9:
          if (C || l.tabDisable || (s.preventDefault(), g || m || i.isWysiwygDiv(a)))
            break;
          const z = !p.collapsed || r.isEdgePoint(p.startContainer, p.startOffset), A = r.getSelectedElements(null);
          a = r.getSelectionNode();
          const O = [];
          let P = [], V = i.isListCell(A[0]), T = i.isListCell(A[A.length - 1]), H = { sc: p.startContainer, so: p.startOffset, ec: p.endContainer, eo: p.endOffset };
          for (let L = 0, D = A.length, R; L < D; L++)
            if (R = A[L], i.isListCell(R)) {
              if (!R.previousElementSibling && !h)
                continue;
              O.push(R);
            } else
              P.push(R);
          if (O.length > 0 && z && r.plugins.list)
            H = r.plugins.list.editInsideList.call(r, h, O);
          else {
            const L = i.getParentElement(a, i.isCell);
            if (L && z) {
              const D = i.getParentElement(L, "table"), R = i.getListChildren(D, i.isCell);
              let M = h ? i.prevIdx(R, L) : i.nextIdx(R, L);
              M === R.length && !h && (M = 0), M === -1 && h && (M = R.length - 1);
              let U = R[M];
              if (!U)
                break;
              U = U.firstElementChild || U, r.setRange(U, 0, U, 0);
              break;
            }
            P = P.concat(O), V = T = null;
          }
          if (P.length > 0)
            if (h) {
              const L = P.length - 1;
              for (let M = 0, U; M <= L; M++) {
                U = P[M].childNodes;
                for (let j = 0, $ = U.length, Y; j < $ && (Y = U[j], !!Y); j++)
                  if (!i.onlyZeroWidthSpace(Y)) {
                    /^\s{1,4}$/.test(Y.textContent) ? i.removeItem(Y) : /^\s{1,4}/.test(Y.textContent) && (Y.textContent = Y.textContent.replace(/^\s{1,4}/, ""));
                    break;
                  }
              }
              const D = i.getChildElement(P[0], "text", !1), R = i.getChildElement(P[L], "text", !0);
              !V && D && (H.sc = D, H.so = 0), !T && R && (H.ec = R, H.eo = R.textContent.length);
            } else {
              const L = i.createTextNode(new f.Array(r._variable.tabSize + 1).join(" "));
              if (P.length === 1) {
                const D = r.insertNode(L, null, !0);
                if (!D)
                  return !1;
                V || (H.sc = L, H.so = D.endOffset), T || (H.ec = L, H.eo = D.endOffset);
              } else {
                const D = P.length - 1;
                for (let U = 0, j; U <= D; U++)
                  j = P[U].firstChild, j && (i.isBreak(j) ? P[U].insertBefore(L.cloneNode(!1), j) : j.textContent = L.textContent + j.textContent);
                const R = i.getChildElement(P[0], "text", !1), M = i.getChildElement(P[D], "text", !0);
                !V && R && (H.sc = R, H.so = 0), !T && M && (H.ec = M, H.eo = M.textContent.length);
              }
            }
          r.setRange(H.sc, H.so, H.ec, H.eo), r.history.push(!1);
          break;
        case 13:
          const I = i.getFreeFormatElement(a, null);
          if (r._charTypeHTML) {
            let L = "";
            if (!h && I || h ? L = "<br>" : L = "<" + v.nodeName + "><br></" + v.nodeName + ">", !r.checkCharCount(L, "byte-html"))
              return s.preventDefault(), !1;
          }
          if (!h) {
            const L = r._isEdgeFormat(p.endContainer, p.endOffset, "end"), D = r._isEdgeFormat(p.startContainer, p.startOffset, "start");
            if (L && (/^H[1-6]$/i.test(v.nodeName) || /^HR$/i.test(v.nodeName))) {
              s.preventDefault();
              let R = null;
              const M = r.appendFormatTag(v, l.defaultTag);
              if (L && L.length > 0) {
                R = L.pop();
                const U = R;
                for (; L.length > 0; )
                  R = R.appendChild(L.pop());
                M.appendChild(U);
              }
              R = R ? R.appendChild(M.firstChild) : M.firstChild, r.setRange(R, 0, R, 0);
              break;
            } else if (w && v && !i.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
              const R = r.getRange();
              if (r.isEdgePoint(R.endContainer, R.endOffset) && i.isList(a.nextSibling)) {
                s.preventDefault();
                const M = i.createElement("LI"), U = i.createElement("BR");
                M.appendChild(U), v.parentNode.insertBefore(M, v.nextElementSibling), M.appendChild(a.nextSibling), r.setRange(U, 1, U, 1);
                break;
              }
              if ((R.commonAncestorContainer.nodeType !== 3 || !R.commonAncestorContainer.nextElementSibling) && i.onlyZeroWidthSpace(v.innerText.trim()) && !i.isListCell(v.nextElementSibling)) {
                s.preventDefault();
                let M = null;
                if (i.isListCell(w.parentNode)) {
                  if (w = v.parentNode.parentNode.parentNode, M = i.splitElement(v, null, i.getElementDepth(v) - 2), !M) {
                    const U = i.createElement("LI");
                    U.innerHTML = "<br>", i.copyTagAttributes(U, v, l.lineAttrReset), w.insertBefore(U, M), M = U;
                  }
                } else {
                  const U = i.isCell(w.parentNode) ? "DIV" : i.isList(w.parentNode) ? "LI" : i.isFormatElement(w.nextElementSibling) && !i.isRangeFormatElement(w.nextElementSibling) ? w.nextElementSibling.nodeName : i.isFormatElement(w.previousElementSibling) && !i.isRangeFormatElement(w.previousElementSibling) ? w.previousElementSibling.nodeName : l.defaultTag;
                  M = i.createElement(U), i.copyTagAttributes(M, v, l.lineAttrReset);
                  const j = r.detachRangeFormatElement(w, [v], null, !0, !0);
                  j.cc.insertBefore(M, j.ec);
                }
                M.innerHTML = "<br>", i.removeItemAllParents(v, null, null), r.setRange(M, 1, M, 1);
                break;
              }
            }
            if (I) {
              s.preventDefault();
              const R = a === I, M = r.getSelection(), U = a.childNodes, j = M.focusOffset, $ = a.previousElementSibling, Y = a.nextSibling;
              if (!i.isClosureFreeFormatElement(I) && U && (R && p.collapsed && U.length - 1 <= j + 1 && i.isBreak(U[j]) && (!U[j + 1] || (!U[j + 2] || i.onlyZeroWidthSpace(U[j + 2].textContent)) && U[j + 1].nodeType === 3 && i.onlyZeroWidthSpace(U[j + 1].textContent)) && j > 0 && i.isBreak(U[j - 1]) || !R && i.onlyZeroWidthSpace(a.textContent) && i.isBreak($) && (i.isBreak($.previousSibling) || !i.onlyZeroWidthSpace($.previousSibling.textContent)) && (!Y || !i.isBreak(Y) && i.onlyZeroWidthSpace(Y.textContent)))) {
                R ? i.removeItem(U[j - 1]) : i.removeItem(a);
                const q = r.appendFormatTag(I, i.isFormatElement(I.nextElementSibling) && !i.isRangeFormatElement(I.nextElementSibling) ? I.nextElementSibling : null);
                i.copyFormatAttributes(q, I), r.setRange(q, 1, q, 1);
                break;
              }
              if (R) {
                x.insertHTML(p.collapsed && i.isBreak(p.startContainer.childNodes[p.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                let q = M.focusNode;
                const Z = M.focusOffset;
                I === q && (q = q.childNodes[Z - j > 1 ? Z - 1 : Z]), r.setRange(q, 1, q, 1);
              } else {
                const q = M.focusNode.nextSibling, Z = i.createElement("BR");
                r.insertNode(Z, null, !1);
                const G = Z.previousSibling, K = Z.nextSibling;
                !i.isBreak(q) && !i.isBreak(G) && (!K || i.onlyZeroWidthSpace(K)) ? (Z.parentNode.insertBefore(Z.cloneNode(!1), Z), r.setRange(Z, 1, Z, 1)) : r.setRange(K, 0, K, 0);
              }
              b._onShortcutKey = !0;
              break;
            }
            if (p.collapsed && (D || L)) {
              s.preventDefault();
              const R = i.createElement("BR"), M = i.createElement(v.nodeName);
              i.copyTagAttributes(M, v, l.lineAttrReset);
              let U = R;
              do {
                if (!i.isBreak(a) && a.nodeType === 1) {
                  const j = a.cloneNode(!1);
                  j.appendChild(U), U = j;
                }
                a = a.parentNode;
              } while (v !== a && v.contains(a));
              M.appendChild(U), v.parentNode.insertBefore(M, D && !L ? v : v.nextElementSibling), L && r.setRange(R, 1, R, 1);
              break;
            }
            if (v) {
              s.stopPropagation();
              let R, M = 0;
              if (p.collapsed)
                i.onlyZeroWidthSpace(v) ? R = r.appendFormatTag(v, v.cloneNode(!1)) : R = i.splitElement(p.endContainer, p.endOffset, i.getElementDepth(v));
              else {
                const U = i.getFormatElement(p.startContainer, null) !== i.getFormatElement(p.endContainer, null), j = v.cloneNode(!1);
                j.innerHTML = "<br>";
                const $ = r.removeNode();
                if (R = i.getFormatElement($.container, null), !R) {
                  i.isWysiwygDiv($.container) && (s.preventDefault(), e.element.wysiwyg.appendChild(j), R = j, i.copyTagAttributes(R, v, l.lineAttrReset), r.setRange(R, M, R, M));
                  break;
                }
                const Y = i.getRangeFormatElement($.container);
                if (R = R.contains(Y) ? i.getChildElement(Y, i.getFormatElement.bind(i)) : R, U) {
                  if (L && !D)
                    R.parentNode.insertBefore(j, !$.prevContainer || $.container === $.prevContainer ? R.nextElementSibling : R), R = j, M = 0;
                  else if (M = $.offset, D) {
                    const q = R.parentNode.insertBefore(j, R);
                    L && (R = q, M = 0);
                  }
                } else
                  L && D ? (R.parentNode.insertBefore(j, $.prevContainer && $.container === $.prevContainer ? R.nextElementSibling : R), R = j, M = 0) : R = i.splitElement($.container, $.offset, i.getElementDepth(v));
              }
              s.preventDefault(), i.copyTagAttributes(R, v, l.lineAttrReset), r.setRange(R, M, R, M);
              break;
            }
          }
          if (y)
            break;
          if (w && i.getParentElement(w, "FIGCAPTION") && i.getParentElement(w, i.isList) && (s.preventDefault(), v = r.appendFormatTag(v, null), r.setRange(v, 0, v, 0)), C) {
            s.preventDefault(), s.stopPropagation();
            const L = e[C], D = L._container, R = D.previousElementSibling || D.nextElementSibling;
            let M = null;
            i.isListCell(D.parentNode) ? M = i.createElement("BR") : (M = i.createElement(i.isFormatElement(R) && !i.isRangeFormatElement(R) ? R.nodeName : l.defaultTag), M.innerHTML = "<br>"), D.parentNode.insertBefore(M, D), r.callPlugin(C, function() {
              r.selectComponent(L._element, C) === !1 && r.blur();
            }, null);
          }
          break;
        case 27:
          if (C)
            return s.preventDefault(), s.stopPropagation(), r.controllersOff(), !1;
          break;
      }
      if (h && u === 16) {
        s.preventDefault(), s.stopPropagation();
        const E = r.plugins.table;
        if (E && !E._shift && !E._ref) {
          const k = i.getParentElement(v, i.isCell);
          if (k) {
            E.onTableCellMultiSelect.call(r, k, !0);
            return;
          }
        }
      } else if (h && (i.isOSX_IOS ? m : g) && u === 32) {
        s.preventDefault(), s.stopPropagation();
        const E = r.insertNode(i.createTextNode(" "));
        if (E && E.container) {
          r.setRange(E.container, E.endOffset, E.container, E.endOffset);
          return;
        }
      }
      if (i.isIE && !g && !m && !y && !b._nonTextKeyCode.test(u) && i.isBreak(p.commonAncestorContainer)) {
        const E = i.createTextNode(i.zeroWidthSpace);
        r.insertNode(E, null, !1), r.setRange(E, 1, E, 1);
      }
      b._directionKeyCode.test(u) && (r._editorRange(), b._applyTagEffects());
    },
    onKeyUp_wysiwyg: function(s) {
      if (b._onShortcutKey)
        return;
      r._editorRange();
      const a = s.keyCode, u = s.ctrlKey || s.metaKey || a === 91 || a === 92 || a === 224, h = s.altKey;
      if (r.isReadOnly) {
        !u && b._cursorMoveKeyCode.test(a) && b._applyTagEffects();
        return;
      }
      const g = r.getRange();
      let m = r.getSelectionNode();
      if (r._isBalloon && (r._isBalloonAlways && a !== 27 || !g.collapsed))
        if (r._isBalloonAlways)
          a !== 27 && b._showToolbarBalloonDelay();
        else {
          b._showToolbarBalloon();
          return;
        }
      if (a === 8 && i.isWysiwygDiv(m) && m.textContent === "" && m.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), m.innerHTML = "";
        const w = i.createElement(i.isFormatElement(r._variable.currentNodes[0]) ? r._variable.currentNodes[0] : l.defaultTag);
        w.innerHTML = "<br>", m.appendChild(w), r.setRange(w, 0, w, 0), b._applyTagEffects(), r.history.push(!1);
        return;
      }
      const p = i.getFormatElement(m, null), y = i.getRangeFormatElement(m, null), C = r._formatAttrsTemp;
      if (C) {
        for (let w = 0, E = C.length; w < E; w++) {
          if (a === 13 && /^id$/i.test(C[w].name)) {
            p.removeAttribute("id");
            continue;
          }
          p.setAttribute(C[w].name, C[w].value);
        }
        r._formatAttrsTemp = null;
      }
      if (!p && g.collapsed && !i.isComponent(m) && !i.isList(m) && r._setDefaultFormat(i.isRangeFormatElement(y) ? "DIV" : l.defaultTag) !== null && (m = r.getSelectionNode()), !u && !h && !b._nonTextKeyCode.test(a) && m.nodeType === 3 && i.zeroWidthRegExp.test(m.textContent) && !(s.isComposing !== void 0 ? s.isComposing : b._IEisComposing)) {
        let w = g.startOffset, E = g.endOffset;
        const k = (m.textContent.substring(0, E).match(b._frontZeroWidthReg) || "").length;
        w = g.startOffset - k, E = g.endOffset - k, m.textContent = m.textContent.replace(i.zeroWidthRegExp, ""), r.setRange(m, w < 0 ? 0 : w, m, E < 0 ? 0 : E);
      }
      r._charCount(""), !(typeof x.onKeyUp == "function" && x.onKeyUp(s, r) === !1) && !u && !h && !b._historyIgnoreKeyCode.test(a) && r.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      r.controllersOff(), r._isBalloon && b._hideToolbar(), typeof x.onScroll == "function" && x.onScroll(s, r);
    },
    onFocus_wysiwyg: function(s) {
      r._antiBlur || (r.hasFocus = !0, f.setTimeout(b._applyTagEffects), r._isInline && b._showToolbarInline(), typeof x.onFocus == "function" && x.onFocus(s, r));
    },
    onBlur_wysiwyg: function(s) {
      r._antiBlur || r._variable.isCodeView || (r.hasFocus = !1, r.effectNode = null, r.controllersOff(), (r._isInline || r._isBalloon) && b._hideToolbar(), r._setKeyEffect([]), r._variable.currentNodes = [], r._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof x.onBlur == "function" && x.onBlur(s, r, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), r.submenuOff(), r.controllersOff(), r._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function a() {
        e.element.resizeBackground.style.display = "none", d.removeEventListener("mousemove", b._resize_editor), d.removeEventListener("mouseup", a);
      }
      d.addEventListener("mousemove", b._resize_editor), d.addEventListener("mouseup", a);
    },
    _resize_editor: function(s) {
      const a = e.element.editorArea.offsetHeight + (s.clientY - r._variable.resizeClientY), u = a < r._variable.minResizingSize ? r._variable.minResizingSize : a;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = u + "px", r._variable.resizeClientY = s.clientY, i.isResizeObserverSupported || r.__callResizeFunction(u, null);
    },
    onResize_window: function() {
      i.isResizeObserverSupported || r.resetResponsiveToolbar();
      const s = e.element.toolbar, a = s.style.display === "none" || r._isInline && !r._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !a)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), r.submenuActiveButton && r.submenu && r._setMenuPosition(r.submenuActiveButton, r.submenu), r._variable.isFullScreen) {
          r._variable.innerHeight_fullScreen += f.innerHeight - s.offsetHeight - r._variable.innerHeight_fullScreen, e.element.editorArea.style.height = r._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (r._variable.isCodeView && r._isInline) {
          b._showToolbarInline();
          return;
        }
        r._iframeAutoHeight(), r._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", b.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (r._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0)
        return;
      const s = e.element, a = s.editorArea.offsetHeight, u = (this.scrollY || d.documentElement.scrollTop) + l.stickyToolbar, h = b._getEditorOffsets(l.toolbarContainer).top - (r._isInline ? s.toolbar.offsetHeight : 0), g = r._isInline && u - h > 0 ? u - h - e.element.toolbar.offsetHeight : 0;
      u < h ? b._offStickyToolbar() : u + r._variable.minResizingSize >= a + h ? (r._sticky || b._onStickyToolbar(g), s.toolbar.style.top = g + a + h + l.stickyToolbar - u - r._variable.minResizingSize + "px") : u >= h && b._onStickyToolbar(g);
    },
    _getEditorOffsets: function(s) {
      let a = s || e.element.topArea, u = 0, h = 0, g = 0;
      for (; a; )
        u += a.offsetTop, h += a.offsetLeft, g += a.scrollTop, a = a.offsetParent;
      return {
        top: u,
        left: h,
        scroll: g
      };
    },
    _getPageBottomSpace: function() {
      return d.documentElement.scrollHeight - (b._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const a = e.element;
      !r._isInline && !l.toolbarContainer && (a._stickyDummy.style.height = a.toolbar.offsetHeight + "px", a._stickyDummy.style.display = "block"), a.toolbar.style.top = l.stickyToolbar + s + "px", a.toolbar.style.width = r._isInline ? r._inlineToolbarAttr.width : a.toolbar.offsetWidth + "px", i.addClass(a.toolbar, "se-toolbar-sticky"), r._sticky = !0;
    },
    _offStickyToolbar: function() {
      const s = e.element;
      s._stickyDummy.style.display = "none", s.toolbar.style.top = r._isInline ? r._inlineToolbarAttr.top : "", s.toolbar.style.width = r._isInline ? r._inlineToolbarAttr.width : "", s.editorArea.style.marginTop = "", i.removeClass(s.toolbar, "se-toolbar-sticky"), r._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      r._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const s = r.getRange(), a = s.startContainer, u = s.endContainer, h = i.getRangeFormatElement(a), g = i.getRangeFormatElement(u), m = i.isCell(h), p = i.isCell(g), y = s.commonAncestorContainer;
      if ((m && !h.previousElementSibling && !h.parentElement.previousElementSibling || p && !g.nextElementSibling && !g.parentElement.nextElementSibling) && h !== g)
        if (!m)
          i.removeItem(i.getParentElement(g, function(w) {
            return y === w.parentNode;
          }));
        else if (!p)
          i.removeItem(i.getParentElement(h, function(w) {
            return y === w.parentNode;
          }));
        else
          return i.removeItem(i.getParentElement(h, function(w) {
            return y === w.parentNode;
          })), r.nativeFocus(), !0;
      const C = a.nodeType === 1 ? i.getParentElement(a, ".se-component") : null, v = u.nodeType === 1 ? i.getParentElement(u, ".se-component") : null;
      return C && i.removeItem(C), v && i.removeItem(v), !1;
    },
    onPaste_wysiwyg: function(s) {
      const a = i.isIE ? f.clipboardData : s.clipboardData;
      return a ? b._dataTransferAction("paste", s, a) : !0;
    },
    _setClipboardComponent: function(s, a, u) {
      s.preventDefault(), s.stopPropagation(), u.setData("text/html", a.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const a = i.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCopy == "function" && x.onCopy(s, a, r) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const u = r.currentFileComponentInfo;
      u && !i.isIE && (b._setClipboardComponent(s, u, a), i.addClass(u.component, "se-component-copy"), f.setTimeout(function() {
        i.removeClass(u.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof x.onSave == "function") {
        x.onSave(s, r);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const a = i.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCut == "function" && x.onCut(s, a, r) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const u = r.currentFileComponentInfo;
      u && !i.isIE && (b._setClipboardComponent(s, u, a), i.removeItem(u.component), r.controllersOff()), f.setTimeout(function() {
        r.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (r.isReadOnly || i.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const a = s.dataTransfer;
      return a ? (r.removeNode(), b._setDropLocationSelection(s), b._dataTransferAction("drop", s, a)) : !0;
    },
    _setDropLocationSelection: function(s) {
      if (s.rangeParent)
        r.setRange(s.rangeParent, s.rangeOffset, s.rangeParent, s.rangeOffset);
      else if (r._wd.caretRangeFromPoint) {
        const a = r._wd.caretRangeFromPoint(s.clientX, s.clientY);
        r.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
      } else {
        const a = r.getRange();
        r.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
      }
    },
    _dataTransferAction: function(s, a, u) {
      let h, g;
      if (i.isIE) {
        h = u.getData("Text");
        const m = r.getRange(), p = i.createElement("DIV"), y = {
          sc: m.startContainer,
          so: m.startOffset,
          ec: m.endContainer,
          eo: m.endOffset
        };
        return p.setAttribute("contenteditable", !0), p.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(p), p.focus(), f.setTimeout(function() {
          g = p.innerHTML, i.removeItem(p), r.setRange(y.sc, y.so, y.ec, y.eo), b._setClipboardData(s, a, h, g, u);
        }), !0;
      } else if (h = u.getData("text/plain"), g = u.getData("text/html"), b._setClipboardData(s, a, h, g, u) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
    },
    _setClipboardData: function(s, a, u, h, g) {
      const m = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = i._HTMLConvertor(u).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), m && (h = h.replace(/\n/g, " "), u = u.replace(/\n/g, " ")), h = r.cleanHTML(h, r.pasteTagsWhitelistRegExp, r.pasteTagsBlacklistRegExp));
      const y = r._charCount(r._charTypeHTML ? h : u);
      if (s === "paste" && typeof x.onPaste == "function") {
        const v = x.onPaste(a, h, y, r);
        if (v === !1)
          return !1;
        if (typeof v == "string") {
          if (!v)
            return !1;
          h = v;
        }
      }
      if (s === "drop" && typeof x.onDrop == "function") {
        const v = x.onDrop(a, h, y, r);
        if (v === !1)
          return !1;
        if (typeof v == "string") {
          if (!v)
            return !1;
          h = v;
        }
      }
      const C = g.files;
      if (C.length > 0 && !m)
        return /^image/.test(C[0].type) && r.plugins.image && x.insertImage(C), !1;
      if (!y)
        return !1;
      if (h)
        return x.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (r.isDisabled || r.isReadOnly)
        return !1;
      const a = i.getParentElement(s.target, i.isComponent), u = r._lineBreaker.style;
      if (a && !r.currentControllerName) {
        const h = e.element;
        let g = 0, m = h.wysiwyg;
        do
          g += m.scrollTop, m = m.parentElement;
        while (m && !/^(BODY|HTML)$/i.test(m.nodeName));
        const p = h.wysiwyg.scrollTop, y = b._getEditorOffsets(null), C = i.getOffset(a, h.wysiwygFrame).top + p, v = s.pageY + g + (l.iframe && !l.toolbarContainer ? h.toolbar.offsetHeight : 0), w = C + (l.iframe ? g : y.top), E = i.isListCell(a.parentNode);
        let k = "", z = "";
        if ((E ? !a.previousSibling : !i.isFormatElement(a.previousElementSibling)) && v < w + 20)
          z = C, k = "t";
        else if ((E ? !a.nextSibling : !i.isFormatElement(a.nextElementSibling)) && v > w + a.offsetHeight - 20)
          z = C + a.offsetHeight, k = "b";
        else {
          u.display = "none";
          return;
        }
        r._variable._lineBreakComp = a, r._variable._lineBreakDir = k, u.top = z - p + "px", r._lineBreakerButton.style.left = i.getOffset(a).left + a.offsetWidth / 2 - 15 + "px", u.display = "block";
      } else
        u.display !== "none" && (u.display = "none");
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const a = r._variable._lineBreakComp, u = this ? this : r._variable._lineBreakDir, h = i.isListCell(a.parentNode), g = i.createElement(h ? "BR" : i.isCell(a.parentNode) ? "DIV" : l.defaultTag);
      if (h || (g.innerHTML = "<br>"), r._charTypeHTML && !r.checkCharCount(g.outerHTML, "byte-html"))
        return;
      a.parentNode.insertBefore(g, u === "t" ? a : a.nextSibling), r._lineBreaker.style.display = "none", r._variable._lineBreakComp = null;
      const m = h ? g : g.firstChild;
      r.setRange(m, 1, m, 1), r.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = l.iframe ? r._ww : e.element.wysiwyg;
      i.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(a) {
        r.__callResizeFunction(-1, a[0]);
      })), e.element.toolbar.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", b.onClick_toolbar, !1), s.addEventListener("mousedown", b.onMouseDown_wysiwyg, !1), s.addEventListener("click", b.onClick_wysiwyg, !1), s.addEventListener(i.isIE ? "textinput" : "input", b.onInput_wysiwyg, !1), s.addEventListener("keydown", b.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", b.onKeyUp_wysiwyg, !1), s.addEventListener("paste", b.onPaste_wysiwyg, !1), s.addEventListener("copy", b.onCopy_wysiwyg, !1), s.addEventListener("cut", b.onCut_wysiwyg, !1), s.addEventListener("drop", b.onDrop_wysiwyg, !1), s.addEventListener("scroll", b.onScroll_wysiwyg, !1), s.addEventListener("focus", b.onFocus_wysiwyg, !1), s.addEventListener("blur", b.onBlur_wysiwyg, !1), b._lineBreakerBind = { a: b._onLineBreak.bind(""), t: b._onLineBreak.bind("t"), b: b._onLineBreak.bind("b") }, s.addEventListener("mousemove", b.onMouseMove_wysiwyg, !1), r._lineBreakerButton.addEventListener("mousedown", b._onMouseDown_lineBreak, !1), r._lineBreakerButton.addEventListener("click", b._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", b._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", b._lineBreakerBind.b, !1), s.addEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", b._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", b._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", b._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", b.onMouseDown_resizingBar, !1) : i.addClass(e.element.resizingBar, "se-resizing-none")), b._setResponsiveToolbar(), i.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(r.resetResponsiveToolbar)), f.addEventListener("resize", b.onResize_window, !1), l.stickyToolbar > -1 && f.addEventListener("scroll", b.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = l.iframe ? r._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", b._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", b._buttonsEventHandler), e.element.toolbar.removeEventListener("click", b.onClick_toolbar), s.removeEventListener("mousedown", b.onMouseDown_wysiwyg), s.removeEventListener("click", b.onClick_wysiwyg), s.removeEventListener(i.isIE ? "textinput" : "input", b.onInput_wysiwyg), s.removeEventListener("keydown", b.onKeyDown_wysiwyg), s.removeEventListener("keyup", b.onKeyUp_wysiwyg), s.removeEventListener("paste", b.onPaste_wysiwyg), s.removeEventListener("copy", b.onCopy_wysiwyg), s.removeEventListener("cut", b.onCut_wysiwyg), s.removeEventListener("drop", b.onDrop_wysiwyg), s.removeEventListener("scroll", b.onScroll_wysiwyg), s.removeEventListener("mousemove", b.onMouseMove_wysiwyg), r._lineBreakerButton.removeEventListener("mousedown", b._onMouseDown_lineBreak), r._lineBreakerButton.removeEventListener("click", b._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", b._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", b._lineBreakerBind.b), b._lineBreakerBind = null, s.removeEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", b.onFocus_wysiwyg), s.removeEventListener("blur", b.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", b._codeViewAutoHeight), e.element.code.removeEventListener("keyup", b._codeViewAutoHeight), e.element.code.removeEventListener("paste", b._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", b.onMouseDown_resizingBar), b._resizeObserver && (b._resizeObserver.unobserve(e.element.wysiwygFrame), b._resizeObserver = null), b._toolbarObserver && (b._toolbarObserver.unobserve(e.element._toolbarShadow), b._toolbarObserver = null), f.removeEventListener("resize", b.onResize_window), f.removeEventListener("scroll", b.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (c.length === 0) {
        c = null;
        return;
      }
      b._responsiveCurrentSize = "default";
      const s = b._responsiveButtonSize = [], a = b._responsiveButtons = { default: c[0] };
      for (let u = 1, h = c.length, g, m; u < h; u++)
        m = c[u], g = m[0] * 1, s.push(g), a[g] = m[1];
      s.sort(function(u, h) {
        return u - h;
      }).unshift("default");
    }
  }, x = {
    /**
     * @description Core, Util object
     */
    core: r,
    util: i,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     */
    onload: null,
    onScroll: null,
    onMouseDown: null,
    onClick: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onCopy: null,
    onCut: null,
    onFocus: null,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     * @param {String} contents Current contents
     */
    onBlur: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onChange: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onSave: null,
    /**
     * @description Event functions (drop, paste)
     * When false is returned, the default behavior is stopped.
     * If the string is returned, the cleanData value is modified to the return value.
     * @param {Object} e Event object.
     * @param {String} cleanData HTML string modified for editor format.
     * @param {Boolean} maxChartCount option (true if max character is exceeded)
     * @param {Object} core Core object
     * @returns {Boolean|String}
     */
    onDrop: null,
    onPaste: null,
    /**
     * @description Called just before the inline toolbar is positioned and displayed on the screen.
     * @param {Element} toolbar Toolbar Element
     * @param {Object} context The editor's context object (editor.getContext())
     * @param {Object} core Core object
     */
    showInline: null,
    /**
     * @description Called just after the controller is positioned and displayed on the screen.
     * controller - editing elements displayed on the screen [image resizing, table editor, link editor..]]
     * @param {String} name The name of the plugin that called the controller
     * @param {Array} controllers Array of Controller elements
     * @param {Object} core Core object
     */
    showController: null,
    /**
     * @description An event when toggling between code view and wysiwyg view.
     * @param {Boolean} isCodeView Whether the current code view mode
     * @param {Object} core Core object
     */
    toggleCodeView: null,
    /**
     * @description An event when toggling full screen.
     * @param {Boolean} isFullScreen Whether the current full screen mode
     * @param {Object} core Core object
     */
    toggleFullScreen: null,
    /**
     * @description It replaces the default callback function of the image upload
     * @param {Object} response Response object
     * @param {Object} info Input information
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * @param {Object} core Core object
     */
    imageUploadHandler: null,
    /**
     * @description It replaces the default callback function of the video upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * @param core Core object
     */
    videoUploadHandler: null,
    /**
     * @description It replaces the default callback function of the audio upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * @param core Core object
     */
    audioUploadHandler: null,
    /**
     * @description Called before the image is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no image upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "imageUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onImageUploadBefore: null,
    /**
     * @description Called before the video is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no video(iframe, video) upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "videoUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onVideoUploadBefore: null,
    /**
     * @description Called before the audio is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no audio upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "audioUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onAudioUploadBefore: null,
    /**
     * @description Called when the image is uploaded, updated, deleted
     * @param {Element} targetElement Target element
     * @param {Number} index Uploaded index
     * @param {String} state Upload status ('create', 'update', 'delete')
     * @param {Object} info Image info object
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {Number} remainingFilesCount Count of remaining files to upload (0 when added as a url)
     * @param {Object} core Core object
     */
    onImageUpload: null,
    /**
    * @description Called when the video(iframe, video) is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onVideoUpload: null,
    /**
    * @description Called when the audio is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onAudioUpload: null,
    /**
     * @description Called when the image is upload failed
     * @param {String} errorMessage Error message
     * @param {Object} result Response Object
     * @param {Object} core Core object
     * @returns {Boolean}
     */
    onImageUploadError: null,
    /**
     * @description Called when the video(iframe, video) upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onVideoUploadError: null,
    /**
     * @description Called when the audio upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onAudioUploadError: null,
    /**
     * @description Called when the editor is resized using the bottom bar
     */
    onResizeEditor: null,
    /**
     * @description Called after the "setToolbarButtons" invocation.
     * Can be used to tweak buttons properties (useful for custom buttons)
     * @param {Array} buttonList Button list 
     * @param {Object} core Core object
     */
    onSetToolbarButtons: null,
    /**
     * @description Reset the buttons on the toolbar. (Editor is not reloaded)
     * You cannot set a new plugin for the button.
     * @param {Array} buttonList Button list 
     */
    setToolbarButtons: function(s) {
      r.submenuOff(), r.containerOff(), r.moreLayerOff();
      const a = Xe._createToolBar(d, s, r.plugins, l);
      c = a.responsiveButtons, b._setResponsiveToolbar(), e.element.toolbar.replaceChild(a._buttonTray, e.element._buttonTray);
      const u = Ge(e.element.originElement, r._getConstructed(e.element), l);
      e.element = u.element, e.tool = u.tool, l.iframe && (e.element.wysiwyg = r._wd.body), r._recoverButtonStates(), r._cachingButtons(), r.history._resetCachingButton(), r.effectNode = null, r.hasFocus && b._applyTagEffects(), r.isReadOnly && i.setDisabledButtons(!0, r.resizingDisabledButtons), typeof x.onSetToolbarButtons == "function" && x.onSetToolbarButtons(a._buttonTray.querySelectorAll("button"), r);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      b._removeEvent(), r._resetComponents(), i.removeClass(r._styleCommandMap.showBlocks, "active"), i.removeClass(r._styleCommandMap.codeView, "active"), r._variable.isCodeView = !1, r._iframeAuto = null, r.plugins = s.plugins || r.plugins;
      const a = [l, s].reduce(function(m, p) {
        for (let y in p)
          if (i.hasOwn(p, y))
            if (y === "plugins" && p[y] && m[y]) {
              let C = m[y], v = p[y];
              C = C.length ? C : f.Object.keys(C).map(function(w) {
                return C[w];
              }), v = v.length ? v : f.Object.keys(v).map(function(w) {
                return v[w];
              }), m[y] = v.filter(function(w) {
                return C.indexOf(w) === -1;
              }).concat(C);
            } else
              m[y] = p[y];
        return m;
      }, {}), u = e.element, h = u.wysiwyg.innerHTML, g = Xe._setOptions(a, e, l);
      g.callButtons && (t = g.callButtons, r.initPlugins = {}), g.plugins && (r.plugins = n = g.plugins), u._menuTray.children.length === 0 && (this._menuTray = {}), c = g.toolbar.responsiveButtons, r.options = l = a, r.lang = o = l.lang, l.iframe && u.wysiwygFrame.addEventListener("load", function() {
        i._setIframeDocument(this, l), r._setOptionsInit(u, h);
      }), u.editorArea.appendChild(u.wysiwygFrame), l.iframe || r._setOptionsInit(u, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const a = l._editorStyles = i._setDefaultOptionStyle(l, s), u = e.element;
      u.topArea.style.cssText = a.top, u.code.style.cssText = l._editorStyles.frame, u.code.style.display = "none", l.height === "auto" ? u.code.style.overflow = "hidden" : u.code.style.overflow = "", l.iframe ? (u.wysiwygFrame.style.cssText = a.frame, u.wysiwyg.style.cssText = a.editor) : u.wysiwygFrame.style.cssText = a.frame + a.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(s) {
      r.notice.open.call(r, s);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      r.notice.close.call(r);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const s = r.getContents(!1);
      e.element.originElement.value = s, b.onSave_wysiwyg(s, r);
    },
    /**
     * @description Gets the suneditor's context object. Contains settings, plugins, and cached element objects
     * @returns {Object}
     */
    getContext: function() {
      return e;
    },
    /**
     * @description Gets the contents of the suneditor
     * * not working during enabled codeView mode
     * @param {Boolean} onlyContents - Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getContents: function(s) {
      return r.getContents(s);
    },
    /**
     * @description Gets only the text of the suneditor contents
     * * not working during enabled codeView mode
     * @returns {String}
     */
    getText: function() {
      return e.element.wysiwyg.textContent;
    },
    /**
     * @description Get the editor's number of characters or binary data size.
     * You can use the "charCounterType" option format.
     * @param {String|null} charCounterType options - charCounterType ('char', 'byte', 'byte-html')
     * If argument is no value, the currently set "charCounterType" option is used.
     * @returns {Number}
     */
    getCharCount: function(s) {
      return s = typeof s == "string" ? s : l.charCounterType, r.getCharLength(r._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
    },
    /**
     * @description Gets uploaded images informations
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @returns {Array}
     */
    getImagesInfo: function() {
      return e.image ? e.image._infoList : [];
    },
    /**
     * @description Gets uploaded files(plugin using fileManager) information list.
     * image: [img], video: [video, iframe], audio: [audio]
     * When the argument value is 'image', it is the same function as "getImagesInfo".
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {String} pluginName Plugin name (image, video, audio)
     * @returns {Array}
     */
    getFilesInfo: function(s) {
      return e[s] ? e[s]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(s) {
      !r.plugins.image || !s || (r.initPlugins.image ? r.plugins.image.submitAction.call(r, s) : r.callPlugin("image", r.plugins.image.submitAction.bind(r, s), null), r.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(s, a, u, h) {
      if (e.element.wysiwygFrame.contains(r.getSelection().focusNode) || r.focus(), typeof s == "string") {
        a || (s = r.cleanHTML(s, null, null));
        try {
          if (i.isListCell(i.getFormatElement(r.getSelectionNode(), null))) {
            const z = d.createRange().createContextualFragment(s).childNodes;
            r._isFormatData(z) && (s = r._convertListCell(z));
          }
          const m = d.createRange().createContextualFragment(s).childNodes;
          if (u) {
            const k = r._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let A = 0, O = m.length; A < O; A++)
              z += m[A][k];
            if (!r.checkCharCount(z, null))
              return;
          }
          let p, y, C, v, w;
          for (; p = m[0]; ) {
            if (v && v.nodeType === 3 && y && y.nodeType === 1 && i.isBreak(p)) {
              v = p, i.removeItem(p);
              continue;
            }
            C = r.insertNode(p, y, !1), y = C.container || C, w || (w = C), v = p;
          }
          v.nodeType === 3 && y.nodeType === 1 && (y = v);
          const E = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          h ? r.setRange(w.container || w, w.startOffset || 0, y, E) : r.setRange(y, E, y, E);
        } catch (g) {
          if (r.isDisabled || r.isReadOnly)
            return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + g), r.execCommand("insertHTML", !1, s);
        }
      } else if (i.isComponent(s))
        r.insertComponent(s, !1, u, !1);
      else {
        let g = null;
        (i.isFormatElement(s) || i.isMedia(s)) && (g = i.getFormatElement(r.getSelectionNode(), null)), r.insertNode(s, g, u);
      }
      r.effectNode = null, r.focus(), r.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(s) {
      r.setContents(s);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(s) {
      const a = r.convertContentsForEditor(s);
      if (r._variable.isCodeView)
        r._setCodeView(r._getCodeView() + `
` + r.convertHTMLForCodeView(a, !1));
      else {
        const u = i.createElement("DIV");
        u.innerHTML = a;
        const h = e.element.wysiwyg, g = u.children;
        for (let m = 0, p = g.length; m < p; m++)
          g[m] && h.appendChild(g[m]);
      }
      r.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(s) {
      r.isReadOnly = s, i.setDisabledButtons(!!s, r.resizingDisabledButtons), s ? (r.controllersOff(), r.submenuActiveButton && r.submenuActiveButton.disabled && r.submenuOff(), r._moreLayerActiveButton && r._moreLayerActiveButton.disabled && r.moreLayerOff(), r.containerActiveButton && r.containerActiveButton.disabled && r.containerOff(), r.modalForm && r.plugins.dialog.close.call(r), e.element.code.setAttribute("readOnly", "true"), i.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), i.removeClass(e.element.wysiwygFrame, "se-read-only")), l.codeMirrorEditor && l.codeMirrorEditor.setOption("readOnly", !!s);
    },
    /**
     * @description Disable the suneditor
     */
    disable: function() {
      this.toolbar.disable(), this.wysiwyg.disable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    disabled: function() {
      this.disable();
    },
    /**
     * @description Enable the suneditor
     */
    enable: function() {
      this.toolbar.enable(), this.wysiwyg.enable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    enabled: function() {
      this.enable();
    },
    /**
     * @description Show the suneditor
     */
    show: function() {
      const s = e.element.topArea.style;
      s.display === "none" && (s.display = l.display);
    },
    /**
     * @description Hide the suneditor
     */
    hide: function() {
      e.element.topArea.style.display = "none";
    },
    /**
     * @description Destroy the suneditor
     */
    destroy: function() {
      r.submenuOff(), r.containerOff(), r.controllersOff(), r.notice && r.notice.close.call(r), r.modalForm && r.plugins.dialog.close.call(r), r.history._destroy(), b._removeEvent(), i.removeItem(e.element.toolbar), i.removeItem(e.element.topArea);
      for (let s in r.functions)
        i.hasOwn(r, s) && delete r.functions[s];
      for (let s in r)
        i.hasOwn(r, s) && delete r[s];
      for (let s in b)
        i.hasOwn(b, s) && delete b[s];
      for (let s in e)
        i.hasOwn(e, s) && delete e[s];
      for (let s in t)
        i.hasOwn(t, s) && delete t[s];
      for (let s in this)
        i.hasOwn(this, s) && delete this[s];
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        r.submenuOff(), r.moreLayerOff(), r.containerOff(), e.tool.cover.style.display = "block";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      disabled: function() {
        this.disable();
      },
      /**
       * @description Enable the toolbar
       */
      enable: function() {
        e.tool.cover.style.display = "none";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      enabled: function() {
        this.enable();
      },
      /**
       * @description Show the toolbar
       */
      show: function() {
        r._isInline ? b._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), b.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        r._isInline ? b._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), b.onResize_window();
      }
    },
    /**
     * @description Wysiwyg methods
     */
    wysiwyg: {
      /**
       * @description Disable the wysiwyg area
       */
      disable: function() {
        r.controllersOff(), r.modalForm && r.plugins.dialog.close.call(r), e.element.wysiwyg.setAttribute("contenteditable", !1), r.isDisabled = !0, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), r.isDisabled = !1, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  r.functions = x, r.options = l;
  let S = e.element, B = S.originElement, F = S.topArea;
  return B.style.display = "none", F.style.display = "block", l.iframe && S.wysiwygFrame.addEventListener("load", function() {
    i._setIframeDocument(this, l), r._editorInit(!1, l.value), l.value = null;
  }), typeof B.nextElementSibling == "object" ? B.parentNode.insertBefore(F, B.nextElementSibling) : B.parentNode.appendChild(F), S.editorArea.appendChild(S.wysiwygFrame), S = B = F = null, l.iframe || (r._editorInit(!1, l.value), l.value = null), x;
}
const xi = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(e) {
    return {
      create: (function(t, n) {
        return this.create(t, n, e);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(e, t, n) {
    Q._propertiesInit(), typeof t != "object" && (t = {}), n && (t = [n, t].reduce(function(c, d) {
      for (let f in d)
        if (Q.hasOwn(d, f))
          if (f === "plugins" && d[f] && c[f]) {
            let i = c[f], _ = d[f];
            i = i.length ? i : Object.keys(i).map(function(r) {
              return i[r];
            }), _ = _.length ? _ : Object.keys(_).map(function(r) {
              return _[r];
            }), c[f] = _.filter(function(r) {
              return i.indexOf(r) === -1;
            }).concat(i);
          } else
            c[f] = d[f];
      return c;
    }, {}));
    const o = typeof e == "string" ? document.getElementById(e) : e;
    if (!o)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Xe.init(o, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return wi(Ge(o, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, Ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xi
}, Symbol.toStringTag, { value: "Module" })), Si = /* @__PURE__ */ _t(Ei);
function Ti(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
var ki = function(e) {
  switch (typeof e) {
    case "object":
      return e;
    case "string":
      return Ti("suneditor/src/lang/".concat(e, ".js"));
    default:
      return;
  }
};
tt.default = ki;
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.uploadBeforeEvents = Ie.events = void 0;
Ie.events = [
  "onMouseDown",
  "onScroll",
  "onInput",
  "onClick",
  "onKeyUp",
  "onKeyDown",
  "onFocus",
  "onImageUpload",
  "onAudioUpload",
  "onVideoUpload",
  "onImageUploadError",
  "onVideoUploadError",
  "onAudioUploadError",
  "onSave",
  "onSetToolbarButtons",
  "imageUploadHandler",
  "toggleCodeView",
  "toggleFullScreen",
  "showInline",
  "showController",
  "onCopy",
  "onCut",
  "onDrop",
  "onPaste"
];
Ie.uploadBeforeEvents = [
  "onImageUploadBefore",
  "onVideoUploadBefore",
  "onAudioUploadBefore"
];
var Ue = ue && ue.__assign || function() {
  return Ue = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, Ue.apply(this, arguments);
}, Li = ue && ue.__createBinding || (Object.create ? function(e, t, n, o) {
  o === void 0 && (o = n);
  var l = Object.getOwnPropertyDescriptor(t, n);
  (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, o, l);
} : function(e, t, n, o) {
  o === void 0 && (o = n), e[o] = t[n];
}), Ni = ue && ue.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Bi = ue && ue.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Li(t, e, n);
  return Ni(t, e), t;
}, it = ue && ue.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Je, "__esModule", { value: !0 });
var Se = Bi(Ke), zi = it(_i), Ai = it(Si), pt = it(tt), mt = Ie, Mi = function(e) {
  var t = e.name, n = e.lang, o = e.setOptions, l = o === void 0 ? {} : o, c = e.placeholder, d = e.width, f = d === void 0 ? "100%" : d, i = e.height, _ = e.defaultValue, r = e.setContents, b = e.setDefaultStyle, x = e.getSunEditorInstance, S = e.appendContents, B = e.setAllPlugins, F = B === void 0 ? !0 : B, s = e.disable, a = s === void 0 ? !1 : s, u = e.readOnly, h = u === void 0 ? !1 : u, g = e.hide, m = g === void 0 ? !1 : g, p = e.hideToolbar, y = p === void 0 ? !1 : p, C = e.disableToolbar, v = C === void 0 ? !1 : C, w = e.onChange, E = e.autoFocus, k = e.onBlur, z = e.onLoad, A = (0, Se.useRef)(null), O = (0, Se.useRef)(null), P = (0, Se.useRef)(!0);
  return (0, Se.useEffect)(function() {
    var V, T = Ue(Ue({}, l), { lang: n ? (0, pt.default)(n) : l.lang, width: f ?? l.width, placeholder: c ?? l.placeholder, plugins: (V = l.plugins) !== null && V !== void 0 ? V : F ? zi.default : void 0, height: i ?? l.height, value: _ ?? l.value, defaultStyle: b ?? l.defaultStyle });
    return t && T.value && (A.current.value = T.value), O.current = Ai.default.create(A.current, T), x && x(O.current), O.current.onload = function(H, I) {
      return I || (r && (O.current.setContents(r), O.current.core.focusEdge(null)), S && O.current.appendContents(S), O.current.util.isIE && O.current.core._createDefaultRange(), a && O.current.disable(), h && O.current.readOnly(!0), m && O.current.hide(), y && O.current.toolbar.hide(), v && O.current.toolbar.disable(), E === !1 ? O.current.core.context.element.wysiwyg.blur() : E && O.current.core.context.element.wysiwyg.focus()), z == null ? void 0 : z(I);
    }, O.current.onChange = function(H) {
      t && A.current && (A.current.value = H), w && w(H);
    }, k && (O.current.onBlur = function(H) {
      return k(H, O.current.getContents(!0));
    }), mt.uploadBeforeEvents.forEach(function(H) {
      var I = e[H];
      O.current && I && (O.current[H] = function(L, D, R, M) {
        return I(L, D, M);
      });
    }), mt.events.forEach(function(H) {
      var I = e[H];
      I && O.current && (O.current[H] = I);
    }), function() {
      O.current && O.current.destroy(), O.current = null;
    };
  }, []), (0, Se.useEffect)(function() {
    var V;
    P.current || (V = O.current) === null || V === void 0 || V.setOptions({
      lang: (0, pt.default)(n)
    });
  }, [n]), (0, Se.useEffect)(function() {
    var V;
    P.current || (V = O.current) === null || V === void 0 || V.setOptions({
      placeholder: c,
      height: i,
      width: f
    });
  }, [c, i, f]), (0, Se.useEffect)(function() {
    var V;
    b && !P.current && ((V = O.current) === null || V === void 0 || V.setDefaultStyle(b));
  }, [b]), (0, Se.useEffect)(function() {
    var V, T;
    !P.current && r !== void 0 && !(!((V = O.current) === null || V === void 0) && V.core.hasFocus) && ((T = O.current) === null || T === void 0 || T.setContents(r));
  }, [r]), (0, Se.useEffect)(function() {
    var V, T, H;
    !P.current && S !== void 0 && !(!((V = O.current) === null || V === void 0) && V.core.hasFocus) && ((T = O.current) === null || T === void 0 || T.appendContents(S), (H = O.current) === null || H === void 0 || H.core.focusEdge(null));
  }, [S]), (0, Se.useEffect)(function() {
    var V, T, H, I, L, D, R, M, U;
    P.current || ((V = O.current) === null || V === void 0 || V.readOnly(h), y ? (T = O.current) === null || T === void 0 || T.toolbar.hide() : (H = O.current) === null || H === void 0 || H.toolbar.show(), v ? (I = O.current) === null || I === void 0 || I.toolbar.disable() : (L = O.current) === null || L === void 0 || L.toolbar.enable(), a ? (D = O.current) === null || D === void 0 || D.disable() : (R = O.current) === null || R === void 0 || R.enable(), m ? (M = O.current) === null || M === void 0 || M.hide() : (U = O.current) === null || U === void 0 || U.show());
  }, [a, y, v, m, h]), (0, Se.useEffect)(function() {
    P.current = !1;
  }, []), Se.default.createElement("textarea", Ue({ style: { visibility: "hidden" }, ref: A }, { name: t }));
};
Je.default = Mi;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.formatting = Be.complex = Be.basic = void 0;
Be.basic = [
  ["font", "fontSize"],
  ["fontColor"],
  ["horizontalRule"],
  ["link", "image"]
];
Be.complex = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["removeFormat"],
  "/",
  ["fontColor", "hiliteColor"],
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "table"],
  ["link", "image", "video"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["save", "template"]
];
Be.formatting = [
  ["undo", "redo"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["removeFormat"],
  ["outdent", "indent"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"]
];
var Ri = ue && ue.__createBinding || (Object.create ? function(e, t, n, o) {
  o === void 0 && (o = n);
  var l = Object.getOwnPropertyDescriptor(t, n);
  (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, o, l);
} : function(e, t, n, o) {
  o === void 0 && (o = n), e[o] = t[n];
}), Hi = ue && ue.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Ii = ue && ue.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Ri(t, e, n);
  return Hi(t, e), t;
}, Di = ue && ue.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.buttonList = void 0;
var Oi = Di(Je);
Ze.buttonList = Ii(Be);
var Fi = Ze.default = Oi.default;
function Vi(e) {
  const [t, n] = li("");
  return /* @__PURE__ */ ai.jsx(
    Fi,
    {
      setContents: t,
      onChange: n,
      setOptions: {
        buttonList: [
          ["undo", "redo"],
          [],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor"],
          ["align", "list", "lineHeight"],
          ["outdent", "indent"],
          ["table", "horizontalRule", "link", "image", "video"],
          ["preview", "print"],
          ["removeFormat"]
        ],
        defaultTag: "div",
        minHeight: "300px",
        showPathLabel: !1
      },
      ...e
    }
  );
}
export {
  Vi as RichText
};

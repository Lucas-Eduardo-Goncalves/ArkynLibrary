import Z, { forwardRef as ru, createElement as Rn, useCallback as De, useState as Dr, useRef as He, useReducer as ti, useMemo as vt, useEffect as sr, createContext as yr, useLayoutEffect as ni, useContext as At, Component as ai, memo as ui } from "react";
import ii from "react-dom";
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function on(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ut = { exports: {} }, $r = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function si() {
  if (jn)
    return $r;
  jn = 1;
  var r = Z, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, c, f) {
    var v, h = {}, m = null, p = null;
    f !== void 0 && (m = "" + f), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (v in c)
      n.call(c, v) && !u.hasOwnProperty(v) && (h[v] = c[v]);
    if (l && l.defaultProps)
      for (v in c = l.defaultProps, c)
        h[v] === void 0 && (h[v] = c[v]);
    return { $$typeof: e, type: l, key: m, ref: p, props: h, _owner: a.current };
  }
  return $r.Fragment = t, $r.jsx = i, $r.jsxs = i, $r;
}
var zr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function oi() {
  return Nn || (Nn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Z, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, o = "@@iterator";
    function B(d) {
      if (d === null || typeof d != "object")
        return null;
      var O = g && d[g] || d[o];
      return typeof O == "function" ? O : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(d) {
      {
        for (var O = arguments.length, W = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
          W[J - 1] = arguments[J];
        x("error", d, W);
      }
    }
    function x(d, O, W) {
      {
        var J = A.ReactDebugCurrentFrame, fe = J.getStackAddendum();
        fe !== "" && (O += "%s", W = W.concat([fe]));
        var he = W.map(function(oe) {
          return String(oe);
        });
        he.unshift("Warning: " + O), Function.prototype.apply.call(console[d], console, he);
      }
    }
    var k = !1, I = !1, $ = !1, j = !1, U = !1, N;
    N = Symbol.for("react.module.reference");
    function H(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === u || U || d === a || d === f || d === v || j || d === p || k || I || $ || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === h || d.$$typeof === i || d.$$typeof === l || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === N || d.getModuleId !== void 0));
    }
    function G(d, O, W) {
      var J = d.displayName;
      if (J)
        return J;
      var fe = O.displayName || O.name || "";
      return fe !== "" ? W + "(" + fe + ")" : W;
    }
    function R(d) {
      return d.displayName || "Context";
    }
    function z(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var O = d;
            return R(O) + ".Consumer";
          case i:
            var W = d;
            return R(W._context) + ".Provider";
          case c:
            return G(d, d.render, "ForwardRef");
          case h:
            var J = d.displayName || null;
            return J !== null ? J : z(d.type) || "Memo";
          case m: {
            var fe = d, he = fe._payload, oe = fe._init;
            try {
              return z(oe(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, L = 0, re, Y, ce, _, ne, me, ve;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function C() {
      {
        if (L === 0) {
          re = console.log, Y = console.info, ce = console.warn, _ = console.error, ne = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        L++;
      }
    }
    function T() {
      {
        if (L--, L === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, d, {
              value: re
            }),
            info: P({}, d, {
              value: Y
            }),
            warn: P({}, d, {
              value: ce
            }),
            error: P({}, d, {
              value: _
            }),
            group: P({}, d, {
              value: ne
            }),
            groupCollapsed: P({}, d, {
              value: me
            }),
            groupEnd: P({}, d, {
              value: ve
            })
          });
        }
        L < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = A.ReactCurrentDispatcher, M;
    function Q(d, O, W) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (fe) {
            var J = fe.stack.trim().match(/\n( *(at )?)/);
            M = J && J[1] || "";
          }
        return `
` + M + d;
      }
    }
    var K = !1, X;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      X = new le();
    }
    function se(d, O) {
      if (!d || K)
        return "";
      {
        var W = X.get(d);
        if (W !== void 0)
          return W;
      }
      var J;
      K = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = w.current, w.current = null, C();
      try {
        if (O) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (nr) {
              J = nr;
            }
            Reflect.construct(d, [], oe);
          } else {
            try {
              oe.call();
            } catch (nr) {
              J = nr;
            }
            d.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nr) {
            J = nr;
          }
          d();
        }
      } catch (nr) {
        if (nr && J && typeof nr.stack == "string") {
          for (var ue = nr.stack.split(`
`), Ne = J.stack.split(`
`), we = ue.length - 1, Oe = Ne.length - 1; we >= 1 && Oe >= 0 && ue[we] !== Ne[Oe]; )
            Oe--;
          for (; we >= 1 && Oe >= 0; we--, Oe--)
            if (ue[we] !== Ne[Oe]) {
              if (we !== 1 || Oe !== 1)
                do
                  if (we--, Oe--, Oe < 0 || ue[we] !== Ne[Oe]) {
                    var _e = `
` + ue[we].replace(" at new ", " at ");
                    return d.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", d.displayName)), typeof d == "function" && X.set(d, _e), _e;
                  }
                while (we >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        K = !1, w.current = he, T(), Error.prepareStackTrace = fe;
      }
      var xr = d ? d.displayName || d.name : "", Tn = xr ? Q(xr) : "";
      return typeof d == "function" && X.set(d, Tn), Tn;
    }
    function ge(d, O, W) {
      return se(d, !1);
    }
    function ae(d) {
      var O = d.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ee(d, O, W) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return se(d, ae(d));
      if (typeof d == "string")
        return Q(d);
      switch (d) {
        case f:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return ge(d.render);
          case h:
            return Ee(d.type, O, W);
          case m: {
            var J = d, fe = J._payload, he = J._init;
            try {
              return Ee(he(fe), O, W);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, Ce = {}, Ie = A.ReactDebugCurrentFrame;
    function je(d) {
      if (d) {
        var O = d._owner, W = Ee(d.type, d._source, O ? O.type : null);
        Ie.setExtraStackFrame(W);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Te(d, O, W, J, fe) {
      {
        var he = Function.call.bind(Ae);
        for (var oe in d)
          if (he(d, oe)) {
            var ue = void 0;
            try {
              if (typeof d[oe] != "function") {
                var Ne = Error((J || "React class") + ": " + W + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              ue = d[oe](O, oe, J, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              ue = we;
            }
            ue && !(ue instanceof Error) && (je(fe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", W, oe, typeof ue), je(null)), ue instanceof Error && !(ue.message in Ce) && (Ce[ue.message] = !0, je(fe), b("Failed %s type: %s", W, ue.message), je(null));
          }
      }
    }
    var Ve = Array.isArray;
    function de(d) {
      return Ve(d);
    }
    function xe(d) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, W = O && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return W;
      }
    }
    function ye(d) {
      try {
        return Fe(d), !1;
      } catch {
        return !0;
      }
    }
    function Fe(d) {
      return "" + d;
    }
    function Le(d) {
      if (ye(d))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(d)), Fe(d);
    }
    var Qe = A.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, mr, Je;
    Je = {};
    function Pt(d) {
      if (Ae.call(d, "ref")) {
        var O = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function St(d) {
      if (Ae.call(d, "key")) {
        var O = Object.getOwnPropertyDescriptor(d, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Ir(d, O) {
      if (typeof d.ref == "string" && Qe.current && O && Qe.current.stateNode !== O) {
        var W = z(Qe.current.type);
        Je[W] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Qe.current.type), d.ref), Je[W] = !0);
      }
    }
    function Tt(d, O) {
      {
        var W = function() {
          er || (er = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        W.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function Rt(d, O) {
      {
        var W = function() {
          mr || (mr = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        W.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var jt = function(d, O, W, J, fe, he, oe) {
      var ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: O,
        ref: W,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return ue._store = {}, Object.defineProperty(ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(ue.props), Object.freeze(ue)), ue;
    };
    function Nt(d, O, W, J, fe) {
      {
        var he, oe = {}, ue = null, Ne = null;
        W !== void 0 && (Le(W), ue = "" + W), St(O) && (Le(O.key), ue = "" + O.key), Pt(O) && (Ne = O.ref, Ir(O, fe));
        for (he in O)
          Ae.call(O, he) && !qe.hasOwnProperty(he) && (oe[he] = O[he]);
        if (d && d.defaultProps) {
          var we = d.defaultProps;
          for (he in we)
            oe[he] === void 0 && (oe[he] = we[he]);
        }
        if (ue || Ne) {
          var Oe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ue && Tt(oe, Oe), Ne && Rt(oe, Oe);
        }
        return jt(d, ue, Ne, fe, J, Qe.current, oe);
      }
    }
    var Lr = A.ReactCurrentOwner, tt = A.ReactDebugCurrentFrame;
    function Or(d) {
      if (d) {
        var O = d._owner, W = Ee(d.type, d._source, O ? O.type : null);
        tt.setExtraStackFrame(W);
      } else
        tt.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function kt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function yn() {
      {
        if (Lr.current) {
          var d = z(Lr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function _u(d) {
      {
        if (d !== void 0) {
          var O = d.fileName.replace(/^.*[\\\/]/, ""), W = d.lineNumber;
          return `

Check your code at ` + O + ":" + W + ".";
        }
        return "";
      }
    }
    var On = {};
    function Gu(d) {
      {
        var O = yn();
        if (!O) {
          var W = typeof d == "string" ? d : d.displayName || d.name;
          W && (O = `

Check the top-level render call using <` + W + ">.");
        }
        return O;
      }
    }
    function xn(d, O) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var W = Gu(O);
        if (On[W])
          return;
        On[W] = !0;
        var J = "";
        d && d._owner && d._owner !== Lr.current && (J = " It was passed a child from " + z(d._owner.type) + "."), Or(d), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, J), Or(null);
      }
    }
    function Pn(d, O) {
      {
        if (typeof d != "object")
          return;
        if (de(d))
          for (var W = 0; W < d.length; W++) {
            var J = d[W];
            kt(J) && xn(J, O);
          }
        else if (kt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var fe = B(d);
          if (typeof fe == "function" && fe !== d.entries)
            for (var he = fe.call(d), oe; !(oe = he.next()).done; )
              kt(oe.value) && xn(oe.value, O);
        }
      }
    }
    function Xu(d) {
      {
        var O = d.type;
        if (O == null || typeof O == "string")
          return;
        var W;
        if (typeof O == "function")
          W = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === h))
          W = O.propTypes;
        else
          return;
        if (W) {
          var J = z(O);
          Te(W, d.props, "prop", J, d);
        } else if (O.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var fe = z(O);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ju(d) {
      {
        for (var O = Object.keys(d.props), W = 0; W < O.length; W++) {
          var J = O[W];
          if (J !== "children" && J !== "key") {
            Or(d), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Or(null);
            break;
          }
        }
        d.ref !== null && (Or(d), b("Invalid attribute `ref` supplied to `React.Fragment`."), Or(null));
      }
    }
    function Sn(d, O, W, J, fe, he) {
      {
        var oe = H(d);
        if (!oe) {
          var ue = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = _u(fe);
          Ne ? ue += Ne : ue += yn();
          var we;
          d === null ? we = "null" : de(d) ? we = "array" : d !== void 0 && d.$$typeof === e ? (we = "<" + (z(d.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : we = typeof d, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ue);
        }
        var Oe = Nt(d, O, W, fe, he);
        if (Oe == null)
          return Oe;
        if (oe) {
          var _e = O.children;
          if (_e !== void 0)
            if (J)
              if (de(_e)) {
                for (var xr = 0; xr < _e.length; xr++)
                  Pn(_e[xr], d);
                Object.freeze && Object.freeze(_e);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pn(_e, d);
        }
        return d === n ? Ju(Oe) : Xu(Oe), Oe;
      }
    }
    function Zu(d, O, W) {
      return Sn(d, O, W, !0);
    }
    function Qu(d, O, W) {
      return Sn(d, O, W, !1);
    }
    var ei = Qu, ri = Zu;
    zr.Fragment = n, zr.jsx = ei, zr.jsxs = ri;
  }()), zr;
}
process.env.NODE_ENV === "production" ? Ut.exports = si() : Ut.exports = oi();
var ie = Ut.exports, li = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const fi = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ye = (r, e) => {
  const t = ru(
    ({ color: n = "currentColor", size: a = 24, strokeWidth: u = 2, absoluteStrokeWidth: i, children: l, ...c }, f) => Rn(
      "svg",
      {
        ref: f,
        ...li,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: i ? Number(u) * 24 / Number(a) : u,
        className: `lucide lucide-${fi(r)}`,
        ...c
      },
      [
        ...e.map(([v, h]) => Rn(v, h)),
        ...(Array.isArray(l) ? l : [l]) || []
      ]
    )
  );
  return t.displayName = `${r}`, t;
}, ci = Ye("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]), vi = Ye("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]), di = Ye("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]), Di = Ye("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]), hi = Ye("Bold", [
  ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
  ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }]
]), gi = Ye("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]), mi = Ye("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]), Ci = Ye("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]), pi = Ye("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]), Bi = Ye("ListOrdered", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]), Ei = Ye("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]), Ai = Ye("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]), bi = Ye("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Mn(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Re(r) {
  var e, t;
  return Mn(r) === !1 ? !1 : (e = r.constructor, e === void 0 ? !0 : (t = e.prototype, !(Mn(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
var tu = Symbol.for("immer-nothing"), kn = Symbol.for("immer-draftable"), Ke = Symbol.for("immer-state"), Fi = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(r) {
    return `The plugin for '${r}' has not been loaded into Immer. To enable the plugin, import and call \`enable${r}()\` when initializing your application.`;
  },
  function(r) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${r}'`;
  },
  "This object has been frozen and should not be mutated",
  function(r) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + r;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(r) {
    return `'current' expects a draft, got: ${r}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(r) {
    return `'original' expects a draft, got: ${r}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ze(r, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const t = Fi[r], n = typeof t == "function" ? t.apply(null, e) : t;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var jr = Object.getPrototypeOf;
function br(r) {
  return !!r && !!r[Ke];
}
function Fr(r) {
  var e;
  return r ? nu(r) || Array.isArray(r) || !!r[kn] || !!((e = r.constructor) != null && e[kn]) || Ft(r) || wt(r) : !1;
}
var wi = Object.prototype.constructor.toString();
function nu(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = jr(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === wi;
}
function _r(r, e) {
  bt(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function bt(r) {
  const e = r[Ke];
  return e ? e.type_ : Array.isArray(r) ? 1 : Ft(r) ? 2 : wt(r) ? 3 : 0;
}
function Yt(r, e) {
  return bt(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function au(r, e, t) {
  const n = bt(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function yi(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function Ft(r) {
  return r instanceof Map;
}
function wt(r) {
  return r instanceof Set;
}
function Cr(r) {
  return r.copy_ || r.base_;
}
function _t(r, e) {
  if (Ft(r))
    return new Map(r);
  if (wt(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && nu(r))
    return jr(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
  const t = Object.getOwnPropertyDescriptors(r);
  delete t[Ke];
  let n = Reflect.ownKeys(t);
  for (let a = 0; a < n.length; a++) {
    const u = n[a], i = t[u];
    i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: i.enumerable,
      value: r[u]
    });
  }
  return Object.create(jr(r), t);
}
function ln(r, e = !1) {
  return yt(r) || br(r) || !Fr(r) || (bt(r) > 1 && (r.set = r.add = r.clear = r.delete = Oi), Object.freeze(r), e && _r(r, (t, n) => ln(n, !0))), r;
}
function Oi() {
  ze(2);
}
function yt(r) {
  return Object.isFrozen(r);
}
var xi = {};
function wr(r) {
  const e = xi[r];
  return e || ze(0, r), e;
}
var Gr;
function uu() {
  return Gr;
}
function Pi(r, e) {
  return {
    drafts_: [],
    parent_: r,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function In(r, e) {
  e && (wr("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function Gt(r) {
  Xt(r), r.drafts_.forEach(Si), r.drafts_ = null;
}
function Xt(r) {
  r === Gr && (Gr = r.parent_);
}
function Ln(r) {
  return Gr = Pi(Gr, r);
}
function Si(r) {
  const e = r[Ke];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function $n(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[Ke].modified_ && (Gt(e), ze(4)), Fr(r) && (r = mt(e, r), e.parent_ || Ct(e, r)), e.patches_ && wr("Patches").generateReplacementPatches_(
    t[Ke].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = mt(e, t, []), Gt(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== tu ? r : void 0;
}
function mt(r, e, t) {
  if (yt(e))
    return e;
  const n = e[Ke];
  if (!n)
    return _r(
      e,
      (a, u) => zn(r, n, e, a, u, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Ct(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let u = a, i = !1;
    n.type_ === 3 && (u = new Set(a), a.clear(), i = !0), _r(
      u,
      (l, c) => zn(r, n, a, l, c, t, i)
    ), Ct(r, a, !1), t && r.patches_ && wr("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function zn(r, e, t, n, a, u, i) {
  if (process.env.NODE_ENV !== "production" && a === t && ze(5), br(a)) {
    const l = u && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Yt(e.assigned_, n) ? u.concat(n) : void 0, c = mt(r, a, l);
    if (au(t, n, c), br(c))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && t.add(a);
  if (Fr(a) && !yt(a)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    mt(r, a), (!e || !e.scope_.parent_) && Ct(r, a);
  }
}
function Ct(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && ln(e, t);
}
function Ti(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : uu(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: r,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = n, u = fn;
  t && (a = [n], u = Xr);
  const { revoke: i, proxy: l } = Proxy.revocable(a, u);
  return n.draft_ = l, n.revoke_ = i, l;
}
var fn = {
  get(r, e) {
    if (e === Ke)
      return r;
    const t = Cr(r);
    if (!Yt(t, e))
      return Ri(r, t, e);
    const n = t[e];
    return r.finalized_ || !Fr(n) ? n : n === It(r.base_, e) ? (Lt(r), r.copy_[e] = Zt(n, r)) : n;
  },
  has(r, e) {
    return e in Cr(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(Cr(r));
  },
  set(r, e, t) {
    const n = iu(Cr(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const a = It(Cr(r), e), u = a == null ? void 0 : a[Ke];
      if (u && u.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (yi(t, a) && (t !== void 0 || Yt(r.base_, e)))
        return !0;
      Lt(r), Jt(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return It(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Lt(r), Jt(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = Cr(r), n = Reflect.getOwnPropertyDescriptor(t, e);
    return n && {
      writable: !0,
      configurable: r.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    ze(11);
  },
  getPrototypeOf(r) {
    return jr(r.base_);
  },
  setPrototypeOf() {
    ze(12);
  }
}, Xr = {};
_r(fn, (r, e) => {
  Xr[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Xr.deleteProperty = function(r, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ze(13), Xr.set.call(this, r, e, void 0);
};
Xr.set = function(r, e, t) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ze(14), fn.set.call(this, r[0], e, t, r[0]);
};
function It(r, e) {
  const t = r[Ke];
  return (t ? Cr(t) : r)[e];
}
function Ri(r, e, t) {
  var a;
  const n = iu(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(r.draft_)
  ) : void 0;
}
function iu(r, e) {
  if (!(e in r))
    return;
  let t = jr(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = jr(t);
  }
}
function Jt(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && Jt(r.parent_));
}
function Lt(r) {
  r.copy_ || (r.copy_ = _t(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var ji = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
      if (typeof e == "function" && typeof t != "function") {
        const u = t;
        t = e;
        const i = this;
        return function(c = u, ...f) {
          return i.produce(c, (v) => t.call(this, v, ...f));
        };
      }
      typeof t != "function" && ze(6), n !== void 0 && typeof n != "function" && ze(7);
      let a;
      if (Fr(e)) {
        const u = Ln(this), i = Zt(e, void 0);
        let l = !0;
        try {
          a = t(i), l = !1;
        } finally {
          l ? Gt(u) : Xt(u);
        }
        return In(u, n), $n(a, u);
      } else if (!e || typeof e != "object") {
        if (a = t(e), a === void 0 && (a = e), a === tu && (a = void 0), this.autoFreeze_ && ln(a, !0), n) {
          const u = [], i = [];
          wr("Patches").generateReplacementPatches_(e, a, u, i), n(u, i);
        }
        return a;
      } else
        ze(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (i, ...l) => this.produceWithPatches(i, (c) => e(c, ...l));
      let n, a;
      return [this.produce(e, t, (i, l) => {
        n = i, a = l;
      }), n, a];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    Fr(r) || ze(8), br(r) && (r = Ni(r));
    const e = Ln(this), t = Zt(r, void 0);
    return t[Ke].isManual_ = !0, Xt(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[Ke];
    (!t || !t.isManual_) && ze(9);
    const { scope_: n } = t;
    return In(n, e), $n(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(r) {
    this.autoFreeze_ = r;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(r) {
    this.useStrictShallowCopy_ = r;
  }
  applyPatches(r, e) {
    let t;
    for (t = e.length - 1; t >= 0; t--) {
      const a = e[t];
      if (a.path.length === 0 && a.op === "replace") {
        r = a.value;
        break;
      }
    }
    t > -1 && (e = e.slice(t + 1));
    const n = wr("Patches").applyPatches_;
    return br(r) ? n(r, e) : this.produce(
      r,
      (a) => n(a, e)
    );
  }
};
function Zt(r, e) {
  const t = Ft(r) ? wr("MapSet").proxyMap_(r, e) : wt(r) ? wr("MapSet").proxySet_(r, e) : Ti(r, e);
  return (e ? e.scope_ : uu()).drafts_.push(t), t;
}
function Ni(r) {
  return br(r) || ze(10, r), su(r);
}
function su(r) {
  if (!Fr(r) || yt(r))
    return r;
  const e = r[Ke];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = _t(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = _t(r, !0);
  return _r(t, (n, a) => {
    au(t, n, su(a));
  }), e && (e.finalized_ = !1), t;
}
var Ue = new ji(), cn = Ue.produce;
Ue.produceWithPatches.bind(
  Ue
);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
var Wn = Ue.createDraft.bind(Ue), Vn = Ue.finishDraft.bind(Ue), Mi = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = D.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, ki = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = te.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, Ii = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = E.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, pt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), D = {
  ancestors(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, n = D.levels(r, e);
    return t ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(r, e) {
    for (var t = [], n = 0; n < r.length && n < e.length; n++) {
      var a = r[n], u = e[n];
      if (a !== u)
        break;
      t.push(a);
    }
    return t;
  },
  compare(r, e) {
    for (var t = Math.min(r.length, e.length), n = 0; n < t; n++) {
      if (r[n] < e[n])
        return -1;
      if (r[n] > e[n])
        return 1;
    }
    return 0;
  },
  endsAfter(r, e) {
    var t = r.length - 1, n = r.slice(0, t), a = e.slice(0, t), u = r[t], i = e[t];
    return D.equals(n, a) && u > i;
  },
  endsAt(r, e) {
    var t = r.length, n = r.slice(0, t), a = e.slice(0, t);
    return D.equals(n, a);
  },
  endsBefore(r, e) {
    var t = r.length - 1, n = r.slice(0, t), a = e.slice(0, t), u = r[t], i = e[t];
    return D.equals(n, a) && u < i;
  },
  equals(r, e) {
    return r.length === e.length && r.every((t, n) => t === e[n]);
  },
  hasPrevious(r) {
    return r[r.length - 1] > 0;
  },
  isAfter(r, e) {
    return D.compare(r, e) === 1;
  },
  isAncestor(r, e) {
    return r.length < e.length && D.compare(r, e) === 0;
  },
  isBefore(r, e) {
    return D.compare(r, e) === -1;
  },
  isChild(r, e) {
    return r.length === e.length + 1 && D.compare(r, e) === 0;
  },
  isCommon(r, e) {
    return r.length <= e.length && D.compare(r, e) === 0;
  },
  isDescendant(r, e) {
    return r.length > e.length && D.compare(r, e) === 0;
  },
  isParent(r, e) {
    return r.length + 1 === e.length && D.compare(r, e) === 0;
  },
  isPath(r) {
    return Array.isArray(r) && (r.length === 0 || typeof r[0] == "number");
  },
  isSibling(r, e) {
    if (r.length !== e.length)
      return !1;
    var t = r.slice(0, -1), n = e.slice(0, -1), a = r[r.length - 1], u = e[e.length - 1];
    return a !== u && D.equals(t, n);
  },
  levels(r) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, n = [], a = 0; a <= r.length; a++)
      n.push(r.slice(0, a));
    return t && n.reverse(), n;
  },
  next(r) {
    if (r.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(r, "], because it has no next index."));
    var e = r[r.length - 1];
    return r.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(r) {
    switch (r.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(r) {
    if (r.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(r, "]."));
    return r.slice(0, -1);
  },
  previous(r) {
    if (r.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(r, "], because it has no previous index."));
    var e = r[r.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(r, "] because it would result in a negative index."));
    return r.slice(0, -1).concat(e - 1);
  },
  relative(r, e) {
    if (!D.isAncestor(e, r) && !D.equals(r, e))
      throw new Error("Cannot get the relative path of [".concat(r, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return r.slice(e.length);
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!r)
      return null;
    var n = [...r], {
      affinity: a = "forward"
    } = t;
    if (r.length === 0)
      return n;
    switch (e.type) {
      case "insert_node": {
        var {
          path: u
        } = e;
        (D.equals(u, n) || D.endsBefore(u, n) || D.isAncestor(u, n)) && (n[u.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: i
        } = e;
        if (D.equals(i, n) || D.isAncestor(i, n))
          return null;
        D.endsBefore(i, n) && (n[i.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: l,
          position: c
        } = e;
        D.equals(l, n) || D.endsBefore(l, n) ? n[l.length - 1] -= 1 : D.isAncestor(l, n) && (n[l.length - 1] -= 1, n[l.length] += c);
        break;
      }
      case "split_node": {
        var {
          path: f,
          position: v
        } = e;
        if (D.equals(f, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          D.endsBefore(f, n) ? n[f.length - 1] += 1 : D.isAncestor(f, n) && r[f.length] >= v && (n[f.length - 1] += 1, n[f.length] -= v);
        break;
      }
      case "move_node": {
        var {
          path: h,
          newPath: m
        } = e;
        if (D.equals(h, m))
          return n;
        if (D.isAncestor(h, n) || D.equals(h, n)) {
          var p = m.slice();
          return D.endsBefore(h, m) && h.length < m.length && (p[h.length - 1] -= 1), p.concat(n.slice(h.length));
        } else
          D.isSibling(h, m) && (D.isAncestor(m, n) || D.equals(m, n)) ? D.endsBefore(h, n) ? n[h.length - 1] -= 1 : n[h.length - 1] += 1 : D.endsBefore(m, n) || D.equals(m, n) || D.isAncestor(m, n) ? (D.endsBefore(h, n) && (n[h.length - 1] -= 1), n[m.length - 1] += 1) : D.endsBefore(h, n) && (D.equals(m, n) && (n[m.length - 1] += 1), n[h.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function Jr(r) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jr(r);
}
function Li(r, e) {
  if (Jr(r) !== "object" || r === null)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (Jr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function $i(r) {
  var e = Li(r, "string");
  return Jr(e) === "symbol" ? e : String(e);
}
function ke(r, e, t) {
  return e = $i(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Un(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Wr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Un(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Un(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var zi = (r, e, t) => {
  switch (t.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = t, u = S.parent(r, n), i = n[n.length - 1];
      if (i > u.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (u.children.splice(i, 0, a), e)
        for (var [l, c] of E.points(e))
          e[c] = te.transform(l, t);
      break;
    }
    case "insert_text": {
      var {
        path: f,
        offset: v,
        text: h
      } = t;
      if (h.length === 0)
        break;
      var m = S.leaf(r, f), p = m.text.slice(0, v), g = m.text.slice(v);
      if (m.text = p + h + g, e)
        for (var [o, B] of E.points(e))
          e[B] = te.transform(o, t);
      break;
    }
    case "merge_node": {
      var {
        path: A
      } = t, b = S.get(r, A), x = D.previous(A), k = S.get(r, x), I = S.parent(r, A), $ = A[A.length - 1];
      if (q.isText(b) && q.isText(k))
        k.text += b.text;
      else if (!q.isText(b) && !q.isText(k))
        k.children.push(...b.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(A, "] to nodes of different interfaces: ").concat(Pe.stringify(b), " ").concat(Pe.stringify(k)));
      if (I.children.splice($, 1), e)
        for (var [j, U] of E.points(e))
          e[U] = te.transform(j, t);
      break;
    }
    case "move_node": {
      var {
        path: N,
        newPath: H
      } = t;
      if (D.isAncestor(N, H))
        throw new Error("Cannot move a path [".concat(N, "] to new path [").concat(H, "] because the destination is inside itself."));
      var G = S.get(r, N), R = S.parent(r, N), z = N[N.length - 1];
      R.children.splice(z, 1);
      var P = D.transform(N, t), L = S.get(r, D.parent(P)), re = P[P.length - 1];
      if (L.children.splice(re, 0, G), e)
        for (var [Y, ce] of E.points(e))
          e[ce] = te.transform(Y, t);
      break;
    }
    case "remove_node": {
      var {
        path: _
      } = t, ne = _[_.length - 1], me = S.parent(r, _);
      if (me.children.splice(ne, 1), e)
        for (var [ve, Se] of E.points(e)) {
          var C = te.transform(ve, t);
          if (e != null && C != null)
            e[Se] = C;
          else {
            var T = void 0, w = void 0;
            for (var [M, Q] of S.texts(r))
              if (D.compare(Q, _) === -1)
                T = [M, Q];
              else {
                w = [M, Q];
                break;
              }
            var K = !1;
            T && w && (D.equals(w[1], _) ? K = !D.hasPrevious(w[1]) : K = D.common(T[1], _).length < D.common(w[1], _).length), T && !K ? (ve.path = T[1], ve.offset = T[0].text.length) : w ? (ve.path = w[1], ve.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: X,
        offset: le,
        text: se
      } = t;
      if (se.length === 0)
        break;
      var ge = S.leaf(r, X), ae = ge.text.slice(0, le), Ee = ge.text.slice(le + se.length);
      if (ge.text = ae + Ee, e)
        for (var [Ae, Ce] of E.points(e))
          e[Ce] = te.transform(Ae, t);
      break;
    }
    case "set_node": {
      var {
        path: Ie,
        properties: je,
        newProperties: Te
      } = t;
      if (Ie.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var Ve = S.get(r, Ie);
      for (var de in Te) {
        if (de === "children" || de === "text")
          throw new Error('Cannot set the "'.concat(de, '" property of nodes!'));
        var xe = Te[de];
        xe == null ? delete Ve[de] : Ve[de] = xe;
      }
      for (var ye in je)
        Te.hasOwnProperty(ye) || delete Ve[ye];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Fe
      } = t;
      if (Fe == null)
        e = Fe;
      else {
        if (e == null) {
          if (!E.isRange(Fe))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Pe.stringify(Fe), " when there is no current selection."));
          e = Wr({}, Fe);
        }
        for (var Le in Fe) {
          var Qe = Fe[Le];
          if (Qe == null) {
            if (Le === "anchor" || Le === "focus")
              throw new Error('Cannot remove the "'.concat(Le, '" selection property'));
            delete e[Le];
          } else
            e[Le] = Qe;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: qe,
        position: er,
        properties: mr
      } = t;
      if (qe.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(qe, "] because the root node cannot be split."));
      var Je = S.get(r, qe), Pt = S.parent(r, qe), St = qe[qe.length - 1], Ir;
      if (q.isText(Je)) {
        var Tt = Je.text.slice(0, er), Rt = Je.text.slice(er);
        Je.text = Tt, Ir = Wr(Wr({}, mr), {}, {
          text: Rt
        });
      } else {
        var jt = Je.children.slice(0, er), Nt = Je.children.slice(er);
        Je.children = jt, Ir = Wr(Wr({}, mr), {}, {
          children: Nt
        });
      }
      if (Pt.children.splice(St + 1, 0, Ir), e)
        for (var [Lr, tt] of E.points(e))
          e[tt] = te.transform(Lr, t);
      break;
    }
  }
  return e;
}, Wi = {
  transform(r, e) {
    r.children = Wn(r.children);
    var t = r.selection && Wn(r.selection);
    try {
      t = zi(r, t, e);
    } finally {
      r.children = Vn(r.children), t ? r.selection = br(t) ? Vn(t) : t : r.selection = null;
    }
  }
}, Vi = {
  insertNodes(r, e, t) {
    r.insertNodes(e, t);
  },
  liftNodes(r, e) {
    r.liftNodes(e);
  },
  mergeNodes(r, e) {
    r.mergeNodes(e);
  },
  moveNodes(r, e) {
    r.moveNodes(e);
  },
  removeNodes(r, e) {
    r.removeNodes(e);
  },
  setNodes(r, e, t) {
    r.setNodes(e, t);
  },
  splitNodes(r, e) {
    r.splitNodes(e);
  },
  unsetNodes(r, e, t) {
    r.unsetNodes(e, t);
  },
  unwrapNodes(r, e) {
    r.unwrapNodes(e);
  },
  wrapNodes(r, e, t) {
    r.wrapNodes(e, t);
  }
}, qi = {
  collapse(r, e) {
    r.collapse(e);
  },
  deselect(r) {
    r.deselect();
  },
  move(r, e) {
    r.move(e);
  },
  select(r, e) {
    r.select(e);
  },
  setPoint(r, e, t) {
    r.setPoint(e, t);
  },
  setSelection(r, e) {
    r.setSelection(e);
  }
}, lu = (r, e) => {
  for (var t in r) {
    var n = r[t], a = e[t];
    if (Re(n) && Re(a)) {
      if (!lu(n, a))
        return !1;
    } else if (Array.isArray(n) && Array.isArray(a)) {
      if (n.length !== a.length)
        return !1;
      for (var u = 0; u < n.length; u++)
        if (n[u] !== a[u])
          return !1;
    } else if (n !== a)
      return !1;
  }
  for (var i in e)
    if (r[i] === void 0 && e[i] !== void 0)
      return !1;
  return !0;
};
function Hi(r, e) {
  if (r == null)
    return {};
  var t = {}, n = Object.keys(r), a, u;
  for (u = 0; u < n.length; u++)
    a = n[u], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function or(r, e) {
  if (r == null)
    return {};
  var t = Hi(r, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (a = 0; a < u.length; a++)
      n = u[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
var Ki = ["anchor", "focus"];
function Yn(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ui(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yn(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Yn(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var E = {
  edges(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, {
      anchor: n,
      focus: a
    } = r;
    return E.isBackward(r) === t ? [n, a] : [a, n];
  },
  end(r) {
    var [, e] = E.edges(r);
    return e;
  },
  equals(r, e) {
    return te.equals(r.anchor, e.anchor) && te.equals(r.focus, e.focus);
  },
  includes(r, e) {
    if (E.isRange(e)) {
      if (E.includes(r, e.anchor) || E.includes(r, e.focus))
        return !0;
      var [t, n] = E.edges(r), [a, u] = E.edges(e);
      return te.isBefore(t, a) && te.isAfter(n, u);
    }
    var [i, l] = E.edges(r), c = !1, f = !1;
    return te.isPoint(e) ? (c = te.compare(e, i) >= 0, f = te.compare(e, l) <= 0) : (c = D.compare(e, i.path) >= 0, f = D.compare(e, l.path) <= 0), c && f;
  },
  intersection(r, e) {
    var t = or(r, Ki), [n, a] = E.edges(r), [u, i] = E.edges(e), l = te.isBefore(n, u) ? u : n, c = te.isBefore(a, i) ? a : i;
    return te.isBefore(c, l) ? null : Ui({
      anchor: l,
      focus: c
    }, t);
  },
  isBackward(r) {
    var {
      anchor: e,
      focus: t
    } = r;
    return te.isAfter(e, t);
  },
  isCollapsed(r) {
    var {
      anchor: e,
      focus: t
    } = r;
    return te.equals(e, t);
  },
  isExpanded(r) {
    return !E.isCollapsed(r);
  },
  isForward(r) {
    return !E.isBackward(r);
  },
  isRange(r) {
    return Re(r) && te.isPoint(r.anchor) && te.isPoint(r.focus);
  },
  *points(r) {
    yield [r.anchor, "anchor"], yield [r.focus, "focus"];
  },
  start(r) {
    var [e] = E.edges(r);
    return e;
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return cn(r, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = t, u, i;
      if (a === "inward") {
        var l = E.isCollapsed(n);
        E.isForward(n) ? (u = "forward", i = l ? u : "backward") : (u = "backward", i = l ? u : "forward");
      } else
        a === "outward" ? E.isForward(n) ? (u = "backward", i = "forward") : (u = "forward", i = "backward") : (u = a, i = a);
      var c = te.transform(n.anchor, e, {
        affinity: u
      }), f = te.transform(n.focus, e, {
        affinity: i
      });
      if (!c || !f)
        return null;
      n.anchor = c, n.focus = f;
    });
  }
}, _n = (r) => Re(r) && S.isNodeList(r.children) && !s.isEditor(r), V = {
  isAncestor(r) {
    return Re(r) && S.isNodeList(r.children);
  },
  isElement: _n,
  isElementList(r) {
    return Array.isArray(r) && r.every((e) => V.isElement(e));
  },
  isElementProps(r) {
    return r.children !== void 0;
  },
  isElementType: function(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return _n(e) && e[n] === t;
  },
  matches(r, e) {
    for (var t in e)
      if (t !== "children" && r[t] !== e[t])
        return !1;
    return !0;
  }
}, Yi = ["children"], _i = ["text"], Gn = /* @__PURE__ */ new WeakMap(), S = {
  ancestor(r, e) {
    var t = S.get(r, e);
    if (q.isText(t))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(Pe.stringify(t)));
    return t;
  },
  ancestors(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of D.ancestors(e, t)) {
        var a = S.ancestor(r, n), u = [a, n];
        yield u;
      }
    }();
  },
  child(r, e) {
    if (q.isText(r))
      throw new Error("Cannot get the child of a text node: ".concat(Pe.stringify(r)));
    var t = r.children[e];
    if (t == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(Pe.stringify(r)));
    return t;
  },
  children(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = t, a = S.ancestor(r, e), {
        children: u
      } = a, i = n ? u.length - 1 : 0; n ? i >= 0 : i < u.length; ) {
        var l = S.child(a, i), c = e.concat(i);
        yield [l, c], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(r, e, t) {
    var n = D.common(e, t), a = S.get(r, n);
    return [a, n];
  },
  descendant(r, e) {
    var t = S.get(r, e);
    if (s.isEditor(t))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(Pe.stringify(t)));
    return t;
  },
  descendants(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of S.nodes(r, e))
        n.length !== 0 && (yield [t, n]);
    }();
  },
  elements(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of S.nodes(r, e))
        V.isElement(t) && (yield [t, n]);
    }();
  },
  extractProps(r) {
    if (V.isAncestor(r)) {
      var e = or(r, Yi);
      return e;
    } else {
      var e = or(r, _i);
      return e;
    }
  },
  first(r, e) {
    for (var t = e.slice(), n = S.get(r, t); n && !(q.isText(n) || n.children.length === 0); )
      n = n.children[0], t.push(0);
    return [n, t];
  },
  fragment(r, e) {
    if (q.isText(r))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Pe.stringify(r)));
    var t = cn({
      children: r.children
    }, (n) => {
      var [a, u] = E.edges(e), i = S.nodes(n, {
        reverse: !0,
        pass: (m) => {
          var [, p] = m;
          return !E.includes(e, p);
        }
      });
      for (var [, l] of i) {
        if (!E.includes(e, l)) {
          var c = S.parent(n, l), f = l[l.length - 1];
          c.children.splice(f, 1);
        }
        if (D.equals(l, u.path)) {
          var v = S.leaf(n, l);
          v.text = v.text.slice(0, u.offset);
        }
        if (D.equals(l, a.path)) {
          var h = S.leaf(n, l);
          h.text = h.text.slice(a.offset);
        }
      }
      s.isEditor(n) && (n.selection = null);
    });
    return t.children;
  },
  get(r, e) {
    for (var t = r, n = 0; n < e.length; n++) {
      var a = e[n];
      if (q.isText(t) || !t.children[a])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(Pe.stringify(r)));
      t = t.children[a];
    }
    return t;
  },
  has(r, e) {
    for (var t = r, n = 0; n < e.length; n++) {
      var a = e[n];
      if (q.isText(t) || !t.children[a])
        return !1;
      t = t.children[a];
    }
    return !0;
  },
  isNode(r) {
    return q.isText(r) || V.isElement(r) || s.isEditor(r);
  },
  isNodeList(r) {
    if (!Array.isArray(r))
      return !1;
    var e = Gn.get(r);
    if (e !== void 0)
      return e;
    var t = r.every((n) => S.isNode(n));
    return Gn.set(r, t), t;
  },
  last(r, e) {
    for (var t = e.slice(), n = S.get(r, t); n && !(q.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], t.push(a);
    }
    return [n, t];
  },
  leaf(r, e) {
    var t = S.get(r, e);
    if (!q.isText(t))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(Pe.stringify(t)));
    return t;
  },
  levels(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of D.levels(e, t)) {
        var a = S.get(r, n);
        yield [a, n];
      }
    }();
  },
  matches(r, e) {
    return V.isElement(r) && V.isElementProps(e) && V.matches(r, e) || q.isText(r) && q.isTextProps(e) && q.matches(r, e);
  },
  nodes(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: t,
        reverse: n = !1
      } = e, {
        from: a = [],
        to: u
      } = e, i = /* @__PURE__ */ new Set(), l = [], c = r; !(u && (n ? D.isBefore(l, u) : D.isAfter(l, u))); ) {
        if (i.has(c) || (yield [c, l]), !i.has(c) && !q.isText(c) && c.children.length !== 0 && (t == null || t([c, l]) === !1)) {
          i.add(c);
          var f = n ? c.children.length - 1 : 0;
          D.isAncestor(l, a) && (f = a[l.length]), l = l.concat(f), c = S.get(r, l);
          continue;
        }
        if (l.length === 0)
          break;
        if (!n) {
          var v = D.next(l);
          if (S.has(r, v)) {
            l = v, c = S.get(r, l);
            continue;
          }
        }
        if (n && l[l.length - 1] !== 0) {
          var h = D.previous(l);
          l = h, c = S.get(r, l);
          continue;
        }
        l = D.parent(l), c = S.get(r, l), i.add(c);
      }
    }();
  },
  parent(r, e) {
    var t = D.parent(e), n = S.get(r, t);
    if (q.isText(n))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return n;
  },
  string(r) {
    return q.isText(r) ? r.text : r.children.map(S.string).join("");
  },
  texts(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of S.nodes(r, e))
        q.isText(t) && (yield [t, n]);
    }();
  }
};
function Xn(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function pe(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xn(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Xn(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var qr = {
  isNodeOperation(r) {
    return qr.isOperation(r) && r.type.endsWith("_node");
  },
  isOperation(r) {
    if (!Re(r))
      return !1;
    switch (r.type) {
      case "insert_node":
        return D.isPath(r.path) && S.isNode(r.node);
      case "insert_text":
        return typeof r.offset == "number" && typeof r.text == "string" && D.isPath(r.path);
      case "merge_node":
        return typeof r.position == "number" && D.isPath(r.path) && Re(r.properties);
      case "move_node":
        return D.isPath(r.path) && D.isPath(r.newPath);
      case "remove_node":
        return D.isPath(r.path) && S.isNode(r.node);
      case "remove_text":
        return typeof r.offset == "number" && typeof r.text == "string" && D.isPath(r.path);
      case "set_node":
        return D.isPath(r.path) && Re(r.properties) && Re(r.newProperties);
      case "set_selection":
        return r.properties === null && E.isRange(r.newProperties) || r.newProperties === null && E.isRange(r.properties) || Re(r.properties) && Re(r.newProperties);
      case "split_node":
        return D.isPath(r.path) && typeof r.position == "number" && Re(r.properties);
      default:
        return !1;
    }
  },
  isOperationList(r) {
    return Array.isArray(r) && r.every((e) => qr.isOperation(e));
  },
  isSelectionOperation(r) {
    return qr.isOperation(r) && r.type.endsWith("_selection");
  },
  isTextOperation(r) {
    return qr.isOperation(r) && r.type.endsWith("_text");
  },
  inverse(r) {
    switch (r.type) {
      case "insert_node":
        return pe(pe({}, r), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return pe(pe({}, r), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return pe(pe({}, r), {}, {
          type: "split_node",
          path: D.previous(r.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: t
        } = r;
        if (D.equals(e, t))
          return r;
        if (D.isSibling(t, e))
          return pe(pe({}, r), {}, {
            path: e,
            newPath: t
          });
        var n = D.transform(t, r), a = D.transform(D.next(t), r);
        return pe(pe({}, r), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return pe(pe({}, r), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return pe(pe({}, r), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: u,
          newProperties: i
        } = r;
        return pe(pe({}, r), {}, {
          properties: i,
          newProperties: u
        });
      }
      case "set_selection": {
        var {
          properties: l,
          newProperties: c
        } = r;
        return l == null ? pe(pe({}, r), {}, {
          properties: c,
          newProperties: null
        }) : c == null ? pe(pe({}, r), {}, {
          properties: null,
          newProperties: l
        }) : pe(pe({}, r), {}, {
          properties: c,
          newProperties: l
        });
      }
      case "split_node":
        return pe(pe({}, r), {}, {
          type: "merge_node",
          path: D.next(r.path)
        });
    }
  }
}, Jn = /* @__PURE__ */ new WeakMap(), Gi = (r) => {
  var e = Jn.get(r);
  if (e !== void 0)
    return e;
  if (!Re(r))
    return !1;
  var t = typeof r.addMark == "function" && typeof r.apply == "function" && typeof r.deleteFragment == "function" && typeof r.insertBreak == "function" && typeof r.insertSoftBreak == "function" && typeof r.insertFragment == "function" && typeof r.insertNode == "function" && typeof r.insertText == "function" && typeof r.isElementReadOnly == "function" && typeof r.isInline == "function" && typeof r.isSelectable == "function" && typeof r.isVoid == "function" && typeof r.normalizeNode == "function" && typeof r.onChange == "function" && typeof r.removeMark == "function" && typeof r.getDirtyPaths == "function" && (r.marks === null || Re(r.marks)) && (r.selection === null || E.isRange(r.selection)) && S.isNodeList(r.children) && qr.isOperationList(r.operations);
  return Jn.set(r, t), t;
}, s = {
  above(r, e) {
    return r.above(e);
  },
  addMark(r, e, t) {
    r.addMark(e, t);
  },
  after(r, e, t) {
    return r.after(e, t);
  },
  before(r, e, t) {
    return r.before(e, t);
  },
  deleteBackward(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: t = "character"
    } = e;
    r.deleteBackward(t);
  },
  deleteForward(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: t = "character"
    } = e;
    r.deleteForward(t);
  },
  deleteFragment(r, e) {
    r.deleteFragment(e);
  },
  edges(r, e) {
    return r.edges(e);
  },
  elementReadOnly(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return r.elementReadOnly(e);
  },
  end(r, e) {
    return r.end(e);
  },
  first(r, e) {
    return r.first(e);
  },
  fragment(r, e) {
    return r.fragment(e);
  },
  hasBlocks(r, e) {
    return r.hasBlocks(e);
  },
  hasInlines(r, e) {
    return r.hasInlines(e);
  },
  hasPath(r, e) {
    return r.hasPath(e);
  },
  hasTexts(r, e) {
    return r.hasTexts(e);
  },
  insertBreak(r) {
    r.insertBreak();
  },
  insertFragment(r, e, t) {
    r.insertFragment(e, t);
  },
  insertNode(r, e) {
    r.insertNode(e);
  },
  insertSoftBreak(r) {
    r.insertSoftBreak();
  },
  insertText(r, e) {
    r.insertText(e);
  },
  isBlock(r, e) {
    return r.isBlock(e);
  },
  isEdge(r, e, t) {
    return r.isEdge(e, t);
  },
  isEditor(r) {
    return Gi(r);
  },
  isElementReadOnly(r, e) {
    return r.isElementReadOnly(e);
  },
  isEmpty(r, e) {
    return r.isEmpty(e);
  },
  isEnd(r, e, t) {
    return r.isEnd(e, t);
  },
  isInline(r, e) {
    return r.isInline(e);
  },
  isNormalizing(r) {
    return r.isNormalizing();
  },
  isSelectable(r, e) {
    return r.isSelectable(e);
  },
  isStart(r, e, t) {
    return r.isStart(e, t);
  },
  isVoid(r, e) {
    return r.isVoid(e);
  },
  last(r, e) {
    return r.last(e);
  },
  leaf(r, e, t) {
    return r.leaf(e, t);
  },
  levels(r, e) {
    return r.levels(e);
  },
  marks(r) {
    return r.getMarks();
  },
  next(r, e) {
    return r.next(e);
  },
  node(r, e, t) {
    return r.node(e, t);
  },
  nodes(r, e) {
    return r.nodes(e);
  },
  normalize(r, e) {
    r.normalize(e);
  },
  parent(r, e, t) {
    return r.parent(e, t);
  },
  path(r, e, t) {
    return r.path(e, t);
  },
  pathRef(r, e, t) {
    return r.pathRef(e, t);
  },
  pathRefs(r) {
    return r.pathRefs();
  },
  point(r, e, t) {
    return r.point(e, t);
  },
  pointRef(r, e, t) {
    return r.pointRef(e, t);
  },
  pointRefs(r) {
    return r.pointRefs();
  },
  positions(r, e) {
    return r.positions(e);
  },
  previous(r, e) {
    return r.previous(e);
  },
  range(r, e, t) {
    return r.range(e, t);
  },
  rangeRef(r, e, t) {
    return r.rangeRef(e, t);
  },
  rangeRefs(r) {
    return r.rangeRefs();
  },
  removeMark(r, e) {
    r.removeMark(e);
  },
  setNormalizing(r, e) {
    r.setNormalizing(e);
  },
  start(r, e) {
    return r.start(e);
  },
  string(r, e, t) {
    return r.string(e, t);
  },
  unhangRange(r, e, t) {
    return r.unhangRange(e, t);
  },
  void(r, e) {
    return r.void(e);
  },
  withoutNormalizing(r, e) {
    r.withoutNormalizing(e);
  }
}, Xi = {
  isSpan(r) {
    return Array.isArray(r) && r.length === 2 && r.every(D.isPath);
  }
};
function Zn(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Qn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zn(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Zn(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var te = {
  compare(r, e) {
    var t = D.compare(r.path, e.path);
    return t === 0 ? r.offset < e.offset ? -1 : r.offset > e.offset ? 1 : 0 : t;
  },
  isAfter(r, e) {
    return te.compare(r, e) === 1;
  },
  isBefore(r, e) {
    return te.compare(r, e) === -1;
  },
  equals(r, e) {
    return r.offset === e.offset && D.equals(r.path, e.path);
  },
  isPoint(r) {
    return Re(r) && typeof r.offset == "number" && D.isPath(r.path);
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return cn(r, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = t, {
        path: u,
        offset: i
      } = n;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          n.path = D.transform(u, e, t);
          break;
        }
        case "insert_text": {
          D.equals(e.path, u) && (e.offset < i || e.offset === i && a === "forward") && (n.offset += e.text.length);
          break;
        }
        case "merge_node": {
          D.equals(e.path, u) && (n.offset += e.position), n.path = D.transform(u, e, t);
          break;
        }
        case "remove_text": {
          D.equals(e.path, u) && e.offset <= i && (n.offset -= Math.min(i - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (D.equals(e.path, u) || D.isAncestor(e.path, u))
            return null;
          n.path = D.transform(u, e, t);
          break;
        }
        case "split_node": {
          if (D.equals(e.path, u)) {
            if (e.position === i && a == null)
              return null;
            (e.position < i || e.position === i && a === "forward") && (n.offset -= e.position, n.path = D.transform(u, e, Qn(Qn({}, t), {}, {
              affinity: "forward"
            })));
          } else
            n.path = D.transform(u, e, t);
          break;
        }
      }
    });
  }
}, ea = void 0, Pe = {
  setScrubber(r) {
    ea = r;
  },
  stringify(r) {
    return JSON.stringify(r, ea);
  }
}, Ji = ["text"], Zi = ["anchor", "focus"];
function ra(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ar(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ra(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ra(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var q = {
  equals(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = t;
    function a(u) {
      var i = or(u, Ji);
      return i;
    }
    return lu(n ? a(r) : r, n ? a(e) : e);
  },
  isText(r) {
    return Re(r) && typeof r.text == "string";
  },
  isTextList(r) {
    return Array.isArray(r) && r.every((e) => q.isText(e));
  },
  isTextProps(r) {
    return r.text !== void 0;
  },
  matches(r, e) {
    for (var t in e)
      if (t !== "text" && (!r.hasOwnProperty(t) || r[t] !== e[t]))
        return !1;
    return !0;
  },
  decorations(r, e) {
    var t = [ar({}, r)];
    for (var n of e) {
      var a = or(n, Zi), [u, i] = E.edges(n), l = [], c = 0, f = u.offset, v = i.offset;
      for (var h of t) {
        var {
          length: m
        } = h.text, p = c;
        if (c += m, f <= p && c <= v) {
          Object.assign(h, a), l.push(h);
          continue;
        }
        if (f !== v && (f === c || v === p) || f > c || v < p || v === p && p !== 0) {
          l.push(h);
          continue;
        }
        var g = h, o = void 0, B = void 0;
        if (v < c) {
          var A = v - p;
          B = ar(ar({}, g), {}, {
            text: g.text.slice(A)
          }), g = ar(ar({}, g), {}, {
            text: g.text.slice(0, A)
          });
        }
        if (f > p) {
          var b = f - p;
          o = ar(ar({}, g), {}, {
            text: g.text.slice(0, b)
          }), g = ar(ar({}, g), {}, {
            text: g.text.slice(b)
          });
        }
        Object.assign(g, a), o && l.push(o), l.push(g), B && l.push(B);
      }
      t = l;
    }
    return t;
  }
}, vn = (r) => r.selection ? r.selection : r.children.length > 0 ? s.end(r, []) : [0], kr = (r, e) => {
  var [t] = s.node(r, e);
  return (n) => n === t;
}, dn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !t, a = t ? as(e) : e, u = ee.None, i = ee.None, l = 0, c = null, f = null;
  for (var v of a) {
    var h = v.codePointAt(0);
    if (!h)
      break;
    var m = gs(v, h);
    if ([u, i] = n ? [i, m] : [m, u], Sr(u, ee.ZWJ) && Sr(i, ee.ExtPict) && (n ? c = ta(e.substring(0, l)) : c = ta(e.substring(0, e.length - l)), !c) || Sr(u, ee.RI) && Sr(i, ee.RI) && (f !== null ? f = !f : n ? f = !0 : f = Es(e.substring(0, e.length - l)), !f) || u !== ee.None && i !== ee.None && Cs(u, i))
      break;
    l += v.length;
  }
  return l || 1;
}, Qi = /\s/, es = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, rs = /['\u2018\u2019]/, ts = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; e.length > 0; ) {
    var u = dn(e, t), [i, l] = Dn(e, u, t);
    if (ns(i, l, t))
      a = !0, n += u;
    else if (!a)
      n += u;
    else
      break;
    e = l;
  }
  return n;
}, Dn = (r, e, t) => {
  if (t) {
    var n = r.length - e;
    return [r.slice(n, r.length), r.slice(0, n)];
  }
  return [r.slice(0, e), r.slice(e)];
}, ns = function r(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (Qi.test(e))
    return !1;
  if (rs.test(e)) {
    var a = dn(t, n), [u, i] = Dn(t, a, n);
    if (r(u, i, n))
      return !0;
  }
  return !es.test(e);
}, as = function* (e) {
  for (var t = e.length - 1, n = 0; n < e.length; n++) {
    var a = e.charAt(t - n);
    if (is(a.charCodeAt(0))) {
      var u = e.charAt(t - n - 1);
      if (us(u.charCodeAt(0))) {
        yield u + a, n++;
        continue;
      }
    }
    yield a;
  }
}, us = (r) => r >= 55296 && r <= 56319, is = (r) => r >= 56320 && r <= 57343, ee;
(function(r) {
  r[r.None = 0] = "None", r[r.Extend = 1] = "Extend", r[r.ZWJ = 2] = "ZWJ", r[r.RI = 4] = "RI", r[r.Prepend = 8] = "Prepend", r[r.SpacingMark = 16] = "SpacingMark", r[r.L = 32] = "L", r[r.V = 64] = "V", r[r.T = 128] = "T", r[r.LV = 256] = "LV", r[r.LVT = 512] = "LVT", r[r.ExtPict = 1024] = "ExtPict", r[r.Any = 2048] = "Any";
})(ee || (ee = {}));
var ss = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, os = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, ls = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, fs = /^[\u1100-\u115F\uA960-\uA97C]$/, cs = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, vs = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, ds = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Ds = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, hs = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, gs = (r, e) => {
  var t = ee.Any;
  return r.search(ss) !== -1 && (t |= ee.Extend), e === 8205 && (t |= ee.ZWJ), e >= 127462 && e <= 127487 && (t |= ee.RI), r.search(os) !== -1 && (t |= ee.Prepend), r.search(ls) !== -1 && (t |= ee.SpacingMark), r.search(fs) !== -1 && (t |= ee.L), r.search(cs) !== -1 && (t |= ee.V), r.search(vs) !== -1 && (t |= ee.T), r.search(ds) !== -1 && (t |= ee.LV), r.search(Ds) !== -1 && (t |= ee.LVT), r.search(hs) !== -1 && (t |= ee.ExtPict), t;
};
function Sr(r, e) {
  return (r & e) !== 0;
}
var ms = [
  // GB6
  [ee.L, ee.L | ee.V | ee.LV | ee.LVT],
  // GB7
  [ee.LV | ee.V, ee.V | ee.T],
  // GB8
  [ee.LVT | ee.T, ee.T],
  // GB9
  [ee.Any, ee.Extend | ee.ZWJ],
  // GB9a
  [ee.Any, ee.SpacingMark],
  // GB9b
  [ee.Prepend, ee.Any],
  // GB11
  [ee.ZWJ, ee.ExtPict],
  // GB12 and GB13
  [ee.RI, ee.RI]
];
function Cs(r, e) {
  return ms.findIndex((t) => Sr(r, t[0]) && Sr(e, t[1])) === -1;
}
var ps = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, ta = (r) => r.search(ps) !== -1, Bs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Es = (r) => {
  var e = r.match(Bs);
  if (e === null)
    return !1;
  var t = e[0].length / 2;
  return t % 2 === 1;
}, As = {
  delete(r, e) {
    r.delete(e);
  },
  insertFragment(r, e, t) {
    r.insertFragment(e, t);
  },
  insertText(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    s.withoutNormalizing(r, () => {
      var {
        voids: n = !1
      } = t, {
        at: a = vn(r)
      } = t;
      if (D.isPath(a) && (a = s.range(r, a)), E.isRange(a))
        if (E.isCollapsed(a))
          a = a.anchor;
        else {
          var u = E.end(a);
          if (!n && s.void(r, {
            at: u
          }))
            return;
          var i = E.start(a), l = s.pointRef(r, i), c = s.pointRef(r, u);
          y.delete(r, {
            at: a,
            voids: n
          });
          var f = l.unref(), v = c.unref();
          a = f || v, y.setSelection(r, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && s.void(r, {
        at: a
      }) || s.elementReadOnly(r, {
        at: a
      }))) {
        var {
          path: h,
          offset: m
        } = a;
        e.length > 0 && r.apply({
          type: "insert_text",
          path: h,
          offset: m,
          text: e
        });
      }
    });
  }
};
function na(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function at(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? na(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : na(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var y = at(at(at(at({}, Wi), Vi), qi), As), bs = (r, e) => {
  for (var t of s.pathRefs(r))
    Mi.transform(t, e);
  for (var n of s.pointRefs(r))
    ki.transform(n, e);
  for (var a of s.rangeRefs(r))
    Ii.transform(a, e);
  var u = pt.get(r) || [], i = Bt.get(r) || /* @__PURE__ */ new Set(), l, c, f = (g) => {
    if (g) {
      var o = g.join(",");
      c.has(o) || (c.add(o), l.push(g));
    }
  };
  if (D.operationCanTransformPath(e)) {
    l = [], c = /* @__PURE__ */ new Set();
    for (var v of u) {
      var h = D.transform(v, e);
      f(h);
    }
  } else
    l = u, c = i;
  var m = r.getDirtyPaths(e);
  for (var p of m)
    f(p);
  pt.set(r, l), Bt.set(r, c), y.transform(r, e), r.operations.push(e), s.normalize(r, {
    operation: e
  }), e.type === "set_selection" && (r.marks = null), Kr.get(r) || (Kr.set(r, !0), Promise.resolve().then(() => {
    Kr.set(r, !1), r.onChange({
      operation: e
    }), r.operations = [];
  }));
}, Fs = (r, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: t
      } = e;
      return D.levels(t);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = e, u = D.levels(a), i = q.isText(n) ? [] : Array.from(S.nodes(n), (H) => {
        var [, G] = H;
        return a.concat(G);
      });
      return [...u, ...i];
    }
    case "merge_node": {
      var {
        path: l
      } = e, c = D.ancestors(l), f = D.previous(l);
      return [...c, f];
    }
    case "move_node": {
      var {
        path: v,
        newPath: h
      } = e;
      if (D.equals(v, h))
        return [];
      var m = [], p = [];
      for (var g of D.ancestors(v)) {
        var o = D.transform(g, e);
        m.push(o);
      }
      for (var B of D.ancestors(h)) {
        var A = D.transform(B, e);
        p.push(A);
      }
      var b = p[p.length - 1], x = h[h.length - 1], k = b.concat(x);
      return [...m, ...p, k];
    }
    case "remove_node": {
      var {
        path: I
      } = e, $ = D.ancestors(I);
      return [...$];
    }
    case "split_node": {
      var {
        path: j
      } = e, U = D.levels(j), N = D.next(j);
      return [...U, N];
    }
    default:
      return [];
  }
}, ws = (r) => {
  var {
    selection: e
  } = r;
  return e ? S.fragment(r, e) : [];
}, ys = (r, e) => {
  var [t, n] = e;
  if (!q.isText(t)) {
    if (V.isElement(t) && t.children.length === 0) {
      var a = {
        text: ""
      };
      y.insertNodes(r, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var u = s.isEditor(t) ? !1 : V.isElement(t) && (r.isInline(t) || t.children.length === 0 || q.isText(t.children[0]) || r.isInline(t.children[0])), i = 0, l = 0; l < t.children.length; l++, i++) {
      var c = S.get(r, n);
      if (!q.isText(c)) {
        var f = c.children[i], v = c.children[i - 1], h = l === t.children.length - 1, m = q.isText(f) || V.isElement(f) && r.isInline(f);
        if (m !== u)
          y.removeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (V.isElement(f)) {
          if (r.isInline(f)) {
            if (v == null || !q.isText(v)) {
              var p = {
                text: ""
              };
              y.insertNodes(r, p, {
                at: n.concat(i),
                voids: !0
              }), i++;
            } else if (h) {
              var g = {
                text: ""
              };
              y.insertNodes(r, g, {
                at: n.concat(i + 1),
                voids: !0
              }), i++;
            }
          }
        } else
          v != null && q.isText(v) && (q.equals(f, v, {
            loose: !0
          }) ? (y.mergeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--) : v.text === "" ? (y.removeNodes(r, {
            at: n.concat(i - 1),
            voids: !0
          }), i--) : f.text === "" && (y.removeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--));
      }
    }
  }
}, Os = (r, e) => {
  var {
    iteration: t,
    initialDirtyPathsLength: n
  } = e, a = n * 42;
  if (t > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, xs = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: u = e.selection,
    match: i
  } = t;
  if (u) {
    var l = s.path(e, u), c = a === "lowest";
    for (var [f, v] of s.levels(e, {
      at: l,
      voids: n,
      match: i,
      reverse: c
    }))
      if (!q.isText(f)) {
        if (E.isRange(u)) {
          if (D.isAncestor(v, u.anchor.path) && D.isAncestor(v, u.focus.path))
            return [f, v];
        } else if (!D.equals(l, v))
          return [f, v];
      }
  }
};
function aa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ua(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? aa(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : aa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Ps = (r, e, t) => {
  var {
    selection: n
  } = r;
  if (n) {
    var a = (h, m) => {
      if (!q.isText(h))
        return !1;
      var [p, g] = s.parent(r, m);
      return !r.isVoid(p) || r.markableVoid(p);
    }, u = E.isExpanded(n), i = !1;
    if (!u) {
      var [l, c] = s.node(r, n);
      if (l && a(l, c)) {
        var [f] = s.parent(r, c);
        i = f && r.markableVoid(f);
      }
    }
    if (u || i)
      y.setNodes(r, {
        [e]: t
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var v = ua(ua({}, s.marks(r) || {}), {}, {
        [e]: t
      });
      r.marks = v, Kr.get(r) || r.onChange();
    }
  }
};
function ia(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function sa(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ia(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ia(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Ss = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.point(e, t, {
    edge: "end"
  }), u = s.end(e, []), i = {
    anchor: a,
    focus: u
  }, {
    distance: l = 1
  } = n, c = 0, f;
  for (var v of s.positions(e, sa(sa({}, n), {}, {
    at: i
  }))) {
    if (c > l)
      break;
    c !== 0 && (f = v), c++;
  }
  return f;
};
function oa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function la(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? oa(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Ts = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.start(e, []), u = s.point(e, t, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: u
  }, {
    distance: l = 1
  } = n, c = 0, f;
  for (var v of s.positions(e, la(la({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (c > l)
      break;
    c !== 0 && (f = v), c++;
  }
  return f;
}, Rs = (r, e) => {
  var {
    selection: t
  } = r;
  t && E.isCollapsed(t) && y.delete(r, {
    unit: e,
    reverse: !0
  });
}, js = (r, e) => {
  var {
    selection: t
  } = r;
  t && E.isCollapsed(t) && y.delete(r, {
    unit: e
  });
}, Ns = function(e) {
  var {
    direction: t = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e;
  n && E.isExpanded(n) && y.delete(e, {
    reverse: t === "backward"
  });
}, Ms = (r, e) => [s.start(r, e), s.end(r, e)];
function fa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ca(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fa(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : fa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var ks = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return s.above(e, ca(ca({}, t), {}, {
    match: (n) => V.isElement(n) && s.isElementReadOnly(e, n)
  }));
}, Is = (r, e) => s.point(r, e, {
  edge: "end"
}), Ls = (r, e) => {
  var t = s.path(r, e, {
    edge: "start"
  });
  return s.node(r, t);
}, $s = (r, e) => {
  var t = s.range(r, e);
  return S.fragment(r, t);
};
function va(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function da(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? va(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : va(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var zs = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return s.above(e, da(da({}, t), {}, {
    match: (n) => V.isElement(n) && s.isVoid(e, n)
  }));
}, Ws = (r, e) => e.children.some((t) => V.isElement(t) && s.isBlock(r, t)), Vs = (r, e) => e.children.some((t) => q.isText(t) || s.isInline(r, t)), qs = (r, e) => S.has(r, e), Hs = (r, e) => e.children.every((t) => q.isText(t)), Ks = (r) => {
  y.splitNodes(r, {
    always: !0
  });
}, Us = (r, e, t) => {
  y.insertNodes(r, e, t);
}, Ys = (r) => {
  y.splitNodes(r, {
    always: !0
  });
};
function Da(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function _s(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Da(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Da(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Gs = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: u
  } = e;
  if (a) {
    if (u) {
      var i = _s({
        text: t
      }, u);
      y.insertNodes(e, i, {
        at: n.at,
        voids: n.voids
      });
    } else
      y.insertText(e, t, n);
    e.marks = null;
  }
}, Xs = (r, e) => !r.isInline(e), Js = (r, e, t) => s.isStart(r, e, t) || s.isEnd(r, e, t), Zs = (r, e) => {
  var {
    children: t
  } = e, [n] = t;
  return t.length === 0 || t.length === 1 && q.isText(n) && n.text === "" && !r.isVoid(e);
}, Qs = (r, e, t) => {
  var n = s.end(r, t);
  return te.equals(e, n);
}, eo = (r) => {
  var e = ou.get(r);
  return e === void 0 ? !0 : e;
}, ro = (r, e, t) => {
  if (e.offset !== 0)
    return !1;
  var n = s.start(r, t);
  return te.equals(e, n);
}, to = (r, e) => {
  var t = s.path(r, e, {
    edge: "end"
  });
  return s.node(r, t);
}, no = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = S.leaf(e, a);
  return [u, a];
};
function ao(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      reverse: n = !1,
      voids: a = !1
    } = e, {
      match: u
    } = e;
    if (u == null && (u = () => !0), !!t) {
      var i = [], l = s.path(r, t);
      for (var [c, f] of S.levels(r, l))
        if (u(c, f) && (i.push([c, f]), !a && V.isElement(c) && s.isVoid(r, c)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var uo = ["text"], io = ["text"], so = function(e) {
  var {
    marks: t,
    selection: n
  } = e;
  if (!n)
    return null;
  if (t)
    return t;
  if (E.isExpanded(n)) {
    var [a] = s.nodes(e, {
      match: q.isText
    });
    if (a) {
      var [u] = a, i = or(u, uo);
      return i;
    } else
      return {};
  }
  var {
    anchor: l
  } = n, {
    path: c
  } = l, [f] = s.leaf(e, c);
  if (l.offset === 0) {
    var v = s.previous(e, {
      at: c,
      match: q.isText
    }), h = s.above(e, {
      match: (A) => V.isElement(A) && s.isVoid(e, A) && e.markableVoid(A)
    });
    if (!h) {
      var m = s.above(e, {
        match: (A) => V.isElement(A) && s.isBlock(e, A)
      });
      if (v && m) {
        var [p, g] = v, [, o] = m;
        D.isAncestor(o, g) && (f = p);
      }
    }
  }
  var B = or(f, io);
  return B;
}, oo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = t, {
    match: u,
    at: i = e.selection
  } = t;
  if (i) {
    var l = s.after(e, i, {
      voids: a
    });
    if (l) {
      var [, c] = s.last(e, []), f = [l.path, c];
      if (D.isPath(i) && i.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (u == null)
        if (D.isPath(i)) {
          var [v] = s.parent(e, i);
          u = (m) => v.children.includes(m);
        } else
          u = () => !0;
      var [h] = s.nodes(e, {
        at: f,
        match: u,
        mode: n,
        voids: a
      });
      return h;
    }
  }
}, lo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = S.get(e, a);
  return [u, a];
};
function fo(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: u = !1,
      voids: i = !1,
      ignoreNonSelectable: l = !1
    } = e, {
      match: c
    } = e;
    if (c || (c = () => !0), !!t) {
      var f, v;
      if (Xi.isSpan(t))
        f = t[0], v = t[1];
      else {
        var h = s.path(r, t, {
          edge: "start"
        }), m = s.path(r, t, {
          edge: "end"
        });
        f = u ? m : h, v = u ? h : m;
      }
      var p = S.nodes(r, {
        reverse: u,
        from: f,
        to: v,
        pass: (k) => {
          var [I] = k;
          return V.isElement(I) ? !!(!i && (s.isVoid(r, I) || s.isElementReadOnly(r, I)) || l && !s.isSelectable(r, I)) : !1;
        }
      }), g = [], o;
      for (var [B, A] of p)
        if (!(l && V.isElement(B) && !s.isSelectable(r, B))) {
          var b = o && D.compare(A, o[1]) === 0;
          if (!(n === "highest" && b)) {
            if (!c(B, A)) {
              if (a && !b && q.isText(B))
                return;
              continue;
            }
            if (n === "lowest" && b) {
              o = [B, A];
              continue;
            }
            var x = n === "lowest" ? o : [B, A];
            x && (a ? g.push(x) : yield x), o = [B, A];
          }
        }
      n === "lowest" && o && (a ? g.push(o) : yield o), a && (yield* g);
    }
  }();
}
var co = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = t, u = (v) => pt.get(v) || [], i = (v) => Bt.get(v) || /* @__PURE__ */ new Set(), l = (v) => {
    var h = u(v).pop(), m = h.join(",");
    return i(v).delete(m), h;
  };
  if (s.isNormalizing(e)) {
    if (n) {
      var c = Array.from(S.nodes(e), (v) => {
        var [, h] = v;
        return h;
      }), f = new Set(c.map((v) => v.join(",")));
      pt.set(e, c), Bt.set(e, f);
    }
    u(e).length !== 0 && s.withoutNormalizing(e, () => {
      for (var v of u(e))
        if (S.has(e, v)) {
          var h = s.node(e, v), [m, p] = h;
          V.isElement(m) && m.children.length === 0 && e.normalizeNode(h, {
            operation: a
          });
        }
      for (var g = u(e), o = g.length, B = 0; g.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: g,
          iteration: B,
          initialDirtyPathsLength: o,
          operation: a
        }))
          return;
        var A = l(e);
        if (S.has(e, A)) {
          var b = s.node(e, A);
          e.normalizeNode(b, {
            operation: a
          });
        }
        B++, g = u(e);
      }
    });
  }
}, vo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = D.parent(a), i = s.node(e, u);
  return i;
}, Do = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, c = s.pathRefs(e);
      return c.delete(u), u.current = null, l;
    }
  }, i = s.pathRefs(e);
  return i.add(u), u;
}, ho = (r) => {
  var e = qn.get(r);
  return e || (e = /* @__PURE__ */ new Set(), qn.set(r, e)), e;
}, go = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: u
  } = n;
  if (D.isPath(t)) {
    if (u === "start") {
      var [, i] = S.first(e, t);
      t = i;
    } else if (u === "end") {
      var [, l] = S.last(e, t);
      t = l;
    }
  }
  return E.isRange(t) && (u === "start" ? t = E.start(t) : u === "end" ? t = E.end(t) : t = D.common(t.anchor.path, t.focus.path)), te.isPoint(t) && (t = t.path), a != null && (t = t.slice(0, a)), t;
}, mo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, c = s.pointRefs(e);
      return c.delete(u), u.current = null, l;
    }
  }, i = s.pointRefs(e);
  return i.add(u), u;
}, Co = (r) => {
  var e = Hn.get(r);
  return e || (e = /* @__PURE__ */ new Set(), Hn.set(r, e)), e;
}, po = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (D.isPath(t)) {
    var u;
    if (a === "end") {
      var [, i] = S.last(e, t);
      u = i;
    } else {
      var [, l] = S.first(e, t);
      u = l;
    }
    var c = S.get(e, u);
    if (!q.isText(c))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(t, "] because it has no ").concat(a, " text node."));
    return {
      path: u,
      offset: a === "end" ? c.text.length : 0
    };
  }
  if (E.isRange(t)) {
    var [f, v] = E.edges(t);
    return a === "start" ? f : v;
  }
  return t;
};
function Bo(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: u = !1,
      ignoreNonSelectable: i = !1
    } = e;
    if (!t)
      return;
    var l = s.range(r, t), [c, f] = E.edges(l), v = a ? f : c, h = !1, m = "", p = 0, g = 0, o = 0;
    for (var [B, A] of s.nodes(r, {
      at: t,
      reverse: a,
      voids: u,
      ignoreNonSelectable: i
    })) {
      if (V.isElement(B)) {
        if (!u && (r.isVoid(B) || r.isElementReadOnly(B))) {
          yield s.start(r, A);
          continue;
        }
        if (r.isInline(B))
          continue;
        if (s.hasInlines(r, B)) {
          var b = D.isAncestor(A, f.path) ? f : s.end(r, A), x = D.isAncestor(A, c.path) ? c : s.start(r, A);
          m = s.string(r, {
            anchor: x,
            focus: b
          }, {
            voids: u
          }), h = !0;
        }
      }
      if (q.isText(B)) {
        var k = D.equals(A, v.path);
        for (k ? (g = a ? v.offset : B.text.length - v.offset, o = v.offset) : (g = B.text.length, o = a ? g : 0), (k || h || n === "offset") && (yield {
          path: A,
          offset: o
        }, h = !1); ; ) {
          if (p === 0) {
            if (m === "")
              break;
            p = I(m, n, a), m = Dn(m, p, a)[1];
          }
          if (o = a ? o - p : o + p, g = g - p, g < 0) {
            p = -g;
            break;
          }
          p = 0, yield {
            path: A,
            offset: o
          };
        }
      }
    }
    function I($, j, U) {
      return j === "character" ? dn($, U) : j === "word" ? ts($, U) : j === "line" || j === "block" ? $.length : 1;
    }
  }();
}
var Eo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = t, {
    match: u,
    at: i = e.selection
  } = t;
  if (i) {
    var l = s.before(e, i, {
      voids: a
    });
    if (l) {
      var [, c] = s.first(e, []), f = [l.path, c];
      if (D.isPath(i) && i.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (u == null)
        if (D.isPath(i)) {
          var [v] = s.parent(e, i);
          u = (m) => v.children.includes(m);
        } else
          u = () => !0;
      var [h] = s.nodes(e, {
        reverse: !0,
        at: f,
        match: u,
        mode: n,
        voids: a
      });
      return h;
    }
  }
}, Ao = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, c = s.rangeRefs(e);
      return c.delete(u), u.current = null, l;
    }
  }, i = s.rangeRefs(e);
  return i.add(u), u;
}, bo = (r) => {
  var e = Kn.get(r);
  return e || (e = /* @__PURE__ */ new Set(), Kn.set(r, e)), e;
}, Fo = (r, e, t) => {
  if (E.isRange(e) && !t)
    return e;
  var n = s.start(r, e), a = s.end(r, t || e);
  return {
    anchor: n,
    focus: a
  };
};
function ha(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function wo(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ha(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ha(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var yo = (r, e) => {
  var {
    selection: t
  } = r;
  if (t) {
    var n = (v, h) => {
      if (!q.isText(v))
        return !1;
      var [m, p] = s.parent(r, h);
      return !r.isVoid(m) || r.markableVoid(m);
    }, a = E.isExpanded(t), u = !1;
    if (!a) {
      var [i, l] = s.node(r, t);
      if (i && n(i, l)) {
        var [c] = s.parent(r, l);
        u = c && r.markableVoid(c);
      }
    }
    if (a || u)
      y.unsetNodes(r, e, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var f = wo({}, s.marks(r) || {});
      delete f[e], r.marks = f, Kr.get(r) || r.onChange();
    }
  }
}, Oo = (r, e) => {
  ou.set(r, e);
}, xo = (r, e) => s.point(r, e, {
  edge: "start"
}), Po = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, u = s.range(e, t), [i, l] = E.edges(u), c = "";
  for (var [f, v] of s.nodes(e, {
    at: u,
    match: q.isText,
    voids: a
  })) {
    var h = f.text;
    D.equals(v, l.path) && (h = h.slice(0, l.offset)), D.equals(v, i.path) && (h = h.slice(i.offset)), c += h;
  }
  return c;
}, So = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [u, i] = E.edges(t);
  if (u.offset !== 0 || i.offset !== 0 || E.isCollapsed(t) || D.hasPrevious(i.path))
    return t;
  var l = s.above(e, {
    at: i,
    match: (g) => V.isElement(g) && s.isBlock(e, g),
    voids: a
  }), c = l ? l[1] : [], f = s.start(e, u), v = {
    anchor: f,
    focus: i
  }, h = !0;
  for (var [m, p] of s.nodes(e, {
    at: v,
    match: q.isText,
    reverse: !0,
    voids: a
  })) {
    if (h) {
      h = !1;
      continue;
    }
    if (m.text !== "" || D.isBefore(p, c)) {
      i = {
        path: p,
        offset: m.text.length
      };
      break;
    }
  }
  return {
    anchor: u,
    focus: i
  };
}, To = (r, e) => {
  var t = s.isNormalizing(r);
  s.setNormalizing(r, !1);
  try {
    e();
  } finally {
    s.setNormalizing(r, t);
  }
  s.normalize(r);
}, Ro = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var n, a, {
      reverse: u = !1,
      unit: i = "character",
      distance: l = 1,
      voids: c = !1
    } = t, {
      at: f = e.selection,
      hanging: v = !1
    } = t;
    if (f) {
      var h = !1;
      if (E.isRange(f) && E.isCollapsed(f) && (h = !0, f = f.anchor), te.isPoint(f)) {
        var m = s.void(e, {
          at: f,
          mode: "highest"
        });
        if (!c && m) {
          var [, p] = m;
          f = p;
        } else {
          var g = {
            unit: i,
            distance: l
          }, o = u ? s.before(e, f, g) || s.start(e, []) : s.after(e, f, g) || s.end(e, []);
          f = {
            anchor: f,
            focus: o
          }, v = !0;
        }
      }
      if (D.isPath(f)) {
        y.removeNodes(e, {
          at: f,
          voids: c
        });
        return;
      }
      if (!E.isCollapsed(f)) {
        if (!v) {
          var [, B] = E.edges(f), A = s.end(e, []);
          te.equals(B, A) || (f = s.unhangRange(e, f, {
            voids: c
          }));
        }
        var [b, x] = E.edges(f), k = s.above(e, {
          match: (ae) => V.isElement(ae) && s.isBlock(e, ae),
          at: b,
          voids: c
        }), I = s.above(e, {
          match: (ae) => V.isElement(ae) && s.isBlock(e, ae),
          at: x,
          voids: c
        }), $ = k && I && !D.equals(k[1], I[1]), j = D.equals(b.path, x.path), U = c ? null : (n = s.void(e, {
          at: b,
          mode: "highest"
        })) !== null && n !== void 0 ? n : s.elementReadOnly(e, {
          at: b,
          mode: "highest"
        }), N = c ? null : (a = s.void(e, {
          at: x,
          mode: "highest"
        })) !== null && a !== void 0 ? a : s.elementReadOnly(e, {
          at: x,
          mode: "highest"
        });
        if (U) {
          var H = s.before(e, b);
          H && k && D.isAncestor(k[1], H.path) && (b = H);
        }
        if (N) {
          var G = s.after(e, x);
          G && I && D.isAncestor(I[1], G.path) && (x = G);
        }
        var R = [], z;
        for (var P of s.nodes(e, {
          at: f,
          voids: c
        })) {
          var [L, re] = P;
          z && D.compare(re, z) === 0 || (!c && V.isElement(L) && (s.isVoid(e, L) || s.isElementReadOnly(e, L)) || !D.isCommon(re, b.path) && !D.isCommon(re, x.path)) && (R.push(P), z = re);
        }
        var Y = Array.from(R, (ae) => {
          var [, Ee] = ae;
          return s.pathRef(e, Ee);
        }), ce = s.pointRef(e, b), _ = s.pointRef(e, x), ne = "";
        if (!j && !U) {
          var me = ce.current, [ve] = s.leaf(e, me), {
            path: Se
          } = me, {
            offset: C
          } = b, T = ve.text.slice(C);
          T.length > 0 && (e.apply({
            type: "remove_text",
            path: Se,
            offset: C,
            text: T
          }), ne = T);
        }
        if (Y.reverse().map((ae) => ae.unref()).filter((ae) => ae !== null).forEach((ae) => y.removeNodes(e, {
          at: ae,
          voids: c
        })), !N) {
          var w = _.current, [M] = s.leaf(e, w), {
            path: Q
          } = w, K = j ? b.offset : 0, X = M.text.slice(K, x.offset);
          X.length > 0 && (e.apply({
            type: "remove_text",
            path: Q,
            offset: K,
            text: X
          }), ne = X);
        }
        !j && $ && _.current && ce.current && y.mergeNodes(e, {
          at: _.current,
          hanging: !0,
          voids: c
        }), h && u && i === "character" && ne.length > 1 && ne.match(/[\u0E00-\u0E7F]+/) && y.insertText(e, ne.slice(0, ne.length - l));
        var le = ce.unref(), se = _.unref(), ge = u ? le || se : se || le;
        t.at == null && ge && y.select(e, ge);
      }
    }
  });
}, jo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: u = !1
    } = n, {
      at: i = vn(e)
    } = n;
    if (t.length) {
      if (E.isRange(i))
        if (a || (i = s.unhangRange(e, i, {
          voids: u
        })), E.isCollapsed(i))
          i = i.anchor;
        else {
          var [, l] = E.edges(i);
          if (!u && s.void(e, {
            at: l
          }))
            return;
          var c = s.pointRef(e, l);
          y.delete(e, {
            at: i
          }), i = c.unref();
        }
      else
        D.isPath(i) && (i = s.start(e, i));
      if (!(!u && s.void(e, {
        at: i
      }))) {
        var f = s.above(e, {
          at: i,
          match: (C) => V.isElement(C) && s.isInline(e, C),
          mode: "highest",
          voids: u
        });
        if (f) {
          var [, v] = f;
          if (s.isEnd(e, i, v)) {
            var h = s.after(e, v);
            i = h;
          } else if (s.isStart(e, i, v)) {
            var m = s.before(e, v);
            i = m;
          }
        }
        var p = s.above(e, {
          match: (C) => V.isElement(C) && s.isBlock(e, C),
          at: i,
          voids: u
        }), [, g] = p, o = s.isStart(e, i, g), B = s.isEnd(e, i, g), A = o && B, b = !o || o && B, x = !B, [, k] = S.first({
          children: t
        }, []), [, I] = S.last({
          children: t
        }, []), $ = [], j = (C) => {
          var [T, w] = C, M = w.length === 0;
          return M ? !1 : A ? !0 : !(b && D.isAncestor(w, k) && V.isElement(T) && !e.isVoid(T) && !e.isInline(T) || x && D.isAncestor(w, I) && V.isElement(T) && !e.isVoid(T) && !e.isInline(T));
        };
        for (var U of S.nodes({
          children: t
        }, {
          pass: j
        }))
          j(U) && $.push(U);
        var N = [], H = [], G = [], R = !0, z = !1;
        for (var [P] of $)
          V.isElement(P) && !e.isInline(P) ? (R = !1, z = !0, H.push(P)) : R ? N.push(P) : G.push(P);
        var [L] = s.nodes(e, {
          at: i,
          match: (C) => q.isText(C) || s.isInline(e, C),
          mode: "highest",
          voids: u
        }), [, re] = L, Y = s.isStart(e, i, re), ce = s.isEnd(e, i, re), _ = s.pathRef(e, B && !G.length ? D.next(g) : g), ne = s.pathRef(e, ce ? D.next(re) : re);
        y.splitNodes(e, {
          at: i,
          match: (C) => z ? V.isElement(C) && s.isBlock(e, C) : q.isText(C) || s.isInline(e, C),
          mode: z ? "lowest" : "highest",
          always: z && (!o || N.length > 0) && (!B || G.length > 0),
          voids: u
        });
        var me = s.pathRef(e, !Y || Y && ce ? D.next(re) : re);
        if (y.insertNodes(e, N, {
          at: me.current,
          match: (C) => q.isText(C) || s.isInline(e, C),
          mode: "highest",
          voids: u
        }), A && !N.length && H.length && !G.length && y.delete(e, {
          at: g,
          voids: u
        }), y.insertNodes(e, H, {
          at: _.current,
          match: (C) => V.isElement(C) && s.isBlock(e, C),
          mode: "lowest",
          voids: u
        }), y.insertNodes(e, G, {
          at: ne.current,
          match: (C) => q.isText(C) || s.isInline(e, C),
          mode: "highest",
          voids: u
        }), !n.at) {
          var ve;
          if (G.length > 0 && ne.current ? ve = D.previous(ne.current) : H.length > 0 && _.current ? ve = D.previous(_.current) : me.current && (ve = D.previous(me.current)), ve) {
            var Se = s.end(e, ve);
            y.select(e, Se);
          }
        }
        me.unref(), _.unref(), ne.unref();
      }
    }
  });
}, No = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = t, {
    selection: a
  } = e;
  if (a) {
    if (n === "anchor")
      y.select(e, a.anchor);
    else if (n === "focus")
      y.select(e, a.focus);
    else if (n === "start") {
      var [u] = E.edges(a);
      y.select(e, u);
    } else if (n === "end") {
      var [, i] = E.edges(a);
      y.select(e, i);
    }
  } else
    return;
}, Mo = (r) => {
  var {
    selection: e
  } = r;
  e && r.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, ko = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e, {
    distance: a = 1,
    unit: u = "character",
    reverse: i = !1
  } = t, {
    edge: l = null
  } = t;
  if (n) {
    l === "start" && (l = E.isBackward(n) ? "focus" : "anchor"), l === "end" && (l = E.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: c,
      focus: f
    } = n, v = {
      distance: a,
      unit: u,
      ignoreNonSelectable: !0
    }, h = {};
    if (l == null || l === "anchor") {
      var m = i ? s.before(e, c, v) : s.after(e, c, v);
      m && (h.anchor = m);
    }
    if (l == null || l === "focus") {
      var p = i ? s.before(e, f, v) : s.after(e, f, v);
      p && (h.focus = p);
    }
    y.setSelection(e, h);
  }
}, Io = (r, e) => {
  var {
    selection: t
  } = r;
  if (e = s.range(r, e), t) {
    y.setSelection(r, e);
    return;
  }
  if (!E.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Pe.stringify(e)));
  r.apply({
    type: "set_selection",
    properties: t,
    newProperties: e
  });
};
function ga(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ma(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ga(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ga(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Lo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = e, {
    edge: u = "both"
  } = n;
  if (a) {
    u === "start" && (u = E.isBackward(a) ? "focus" : "anchor"), u === "end" && (u = E.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: i,
      focus: l
    } = a, c = u === "anchor" ? i : l;
    y.setSelection(e, {
      [u === "anchor" ? "anchor" : "focus"]: ma(ma({}, c), t)
    });
  }
}, $o = (r, e) => {
  var {
    selection: t
  } = r, n = {}, a = {};
  if (t) {
    for (var u in e)
      (u === "anchor" && e.anchor != null && !te.equals(e.anchor, t.anchor) || u === "focus" && e.focus != null && !te.equals(e.focus, t.focus) || u !== "anchor" && u !== "focus" && e[u] !== t[u]) && (n[u] = t[u], a[u] = e[u]);
    Object.keys(n).length > 0 && r.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, zo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: u = !1,
      mode: i = "lowest"
    } = n, {
      at: l,
      match: c,
      select: f
    } = n;
    if (S.isNode(t) && (t = [t]), t.length !== 0) {
      var [v] = t;
      if (l || (l = vn(e), f = !0), f == null && (f = !1), E.isRange(l))
        if (a || (l = s.unhangRange(e, l, {
          voids: u
        })), E.isCollapsed(l))
          l = l.anchor;
        else {
          var [, h] = E.edges(l), m = s.pointRef(e, h);
          y.delete(e, {
            at: l
          }), l = m.unref();
        }
      if (te.isPoint(l)) {
        c == null && (q.isText(v) ? c = (j) => q.isText(j) : e.isInline(v) ? c = (j) => q.isText(j) || s.isInline(e, j) : c = (j) => V.isElement(j) && s.isBlock(e, j));
        var [p] = s.nodes(e, {
          at: l.path,
          match: c,
          mode: i,
          voids: u
        });
        if (p) {
          var [, g] = p, o = s.pathRef(e, g), B = s.isEnd(e, l, g);
          y.splitNodes(e, {
            at: l,
            match: c,
            mode: i,
            voids: u
          });
          var A = o.unref();
          l = B ? D.next(A) : A;
        } else
          return;
      }
      var b = D.parent(l), x = l[l.length - 1];
      if (!(!u && s.void(e, {
        at: b
      }))) {
        for (var k of t) {
          var I = b.concat(x);
          x++, e.apply({
            type: "insert_node",
            path: I,
            node: k
          }), l = D.next(l);
        }
        if (l = D.previous(l), f) {
          var $ = s.end(e, l);
          $ && y.select(e, $);
        }
      }
    }
  });
}, Wo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      at: n = e.selection,
      mode: a = "lowest",
      voids: u = !1
    } = t, {
      match: i
    } = t;
    if (i == null && (i = D.isPath(n) ? kr(e, n) : (k) => V.isElement(k) && s.isBlock(e, k)), !!n) {
      var l = s.nodes(e, {
        at: n,
        match: i,
        mode: a,
        voids: u
      }), c = Array.from(l, (k) => {
        var [, I] = k;
        return s.pathRef(e, I);
      });
      for (var f of c) {
        var v = f.unref();
        if (v.length < 2)
          throw new Error("Cannot lift node at a path [".concat(v, "] because it has a depth of less than `2`."));
        var h = s.node(e, D.parent(v)), [m, p] = h, g = v[v.length - 1], {
          length: o
        } = m.children;
        if (o === 1) {
          var B = D.next(p);
          y.moveNodes(e, {
            at: v,
            to: B,
            voids: u
          }), y.removeNodes(e, {
            at: p,
            voids: u
          });
        } else if (g === 0)
          y.moveNodes(e, {
            at: v,
            to: p,
            voids: u
          });
        else if (g === o - 1) {
          var A = D.next(p);
          y.moveNodes(e, {
            at: v,
            to: A,
            voids: u
          });
        } else {
          var b = D.next(v), x = D.next(p);
          y.splitNodes(e, {
            at: b,
            voids: u
          }), y.moveNodes(e, {
            at: v,
            to: x,
            voids: u
          });
        }
      }
    }
  });
}, Vo = ["text"], qo = ["children"], fu = (r, e) => {
  if (V.isElement(e)) {
    var t = e;
    return s.isVoid(r, e) ? !0 : t.children.length === 1 ? fu(r, t.children[0]) : !1;
  } else
    return !s.isEditor(e);
}, Ho = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      match: n,
      at: a = e.selection
    } = t, {
      hanging: u = !1,
      voids: i = !1,
      mode: l = "lowest"
    } = t;
    if (a) {
      if (n == null)
        if (D.isPath(a)) {
          var [c] = s.parent(e, a);
          n = (H) => c.children.includes(H);
        } else
          n = (H) => V.isElement(H) && s.isBlock(e, H);
      if (!u && E.isRange(a) && (a = s.unhangRange(e, a, {
        voids: i
      })), E.isRange(a))
        if (E.isCollapsed(a))
          a = a.anchor;
        else {
          var [, f] = E.edges(a), v = s.pointRef(e, f);
          y.delete(e, {
            at: a
          }), a = v.unref(), t.at == null && y.select(e, a);
        }
      var [h] = s.nodes(e, {
        at: a,
        match: n,
        voids: i,
        mode: l
      }), m = s.previous(e, {
        at: a,
        match: n,
        voids: i,
        mode: l
      });
      if (!(!h || !m)) {
        var [p, g] = h, [o, B] = m;
        if (!(g.length === 0 || B.length === 0)) {
          var A = D.next(B), b = D.common(g, B), x = D.isSibling(g, B), k = Array.from(s.levels(e, {
            at: g
          }), (H) => {
            var [G] = H;
            return G;
          }).slice(b.length).slice(0, -1), I = s.above(e, {
            at: g,
            mode: "highest",
            match: (H) => k.includes(H) && fu(e, H)
          }), $ = I && s.pathRef(e, I[1]), j, U;
          if (q.isText(p) && q.isText(o)) {
            var N = or(p, Vo);
            U = o.text.length, j = N;
          } else if (V.isElement(p) && V.isElement(o)) {
            var N = or(p, qo);
            U = o.children.length, j = N;
          } else
            throw new Error("Cannot merge the node at path [".concat(g, "] with the previous sibling because it is not the same kind: ").concat(Pe.stringify(p), " ").concat(Pe.stringify(o)));
          x || y.moveNodes(e, {
            at: g,
            to: A,
            voids: i
          }), $ && y.removeNodes(e, {
            at: $.current,
            voids: i
          }), V.isElement(o) && s.isEmpty(e, o) || q.isText(o) && o.text === "" && B[B.length - 1] !== 0 ? y.removeNodes(e, {
            at: B,
            voids: i
          }) : e.apply({
            type: "merge_node",
            path: A,
            position: U,
            properties: j
          }), $ && $.unref();
        }
      }
    }
  });
}, Ko = (r, e) => {
  s.withoutNormalizing(r, () => {
    var {
      to: t,
      at: n = r.selection,
      mode: a = "lowest",
      voids: u = !1
    } = e, {
      match: i
    } = e;
    if (n) {
      i == null && (i = D.isPath(n) ? kr(r, n) : (p) => V.isElement(p) && s.isBlock(r, p));
      var l = s.pathRef(r, t), c = s.nodes(r, {
        at: n,
        match: i,
        mode: a,
        voids: u
      }), f = Array.from(c, (p) => {
        var [, g] = p;
        return s.pathRef(r, g);
      });
      for (var v of f) {
        var h = v.unref(), m = l.current;
        h.length !== 0 && r.apply({
          type: "move_node",
          path: h,
          newPath: m
        }), l.current && D.isSibling(m, h) && D.isAfter(m, h) && (l.current = D.next(l.current));
      }
      l.unref();
    }
  });
}, Uo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: u = "lowest"
    } = t, {
      at: i = e.selection,
      match: l
    } = t;
    if (i) {
      l == null && (l = D.isPath(i) ? kr(e, i) : (p) => V.isElement(p) && s.isBlock(e, p)), !n && E.isRange(i) && (i = s.unhangRange(e, i, {
        voids: a
      }));
      var c = s.nodes(e, {
        at: i,
        match: l,
        mode: u,
        voids: a
      }), f = Array.from(c, (p) => {
        var [, g] = p;
        return s.pathRef(e, g);
      });
      for (var v of f) {
        var h = v.unref();
        if (h) {
          var [m] = s.node(e, h);
          e.apply({
            type: "remove_node",
            path: h,
            node: m
          });
        }
      }
    }
  });
}, Yo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      match: a,
      at: u = e.selection,
      compare: i,
      merge: l
    } = n, {
      hanging: c = !1,
      mode: f = "lowest",
      split: v = !1,
      voids: h = !1
    } = n;
    if (u) {
      if (a == null && (a = D.isPath(u) ? kr(e, u) : (U) => V.isElement(U) && s.isBlock(e, U)), !c && E.isRange(u) && (u = s.unhangRange(e, u, {
        voids: h
      })), v && E.isRange(u)) {
        if (E.isCollapsed(u) && s.leaf(e, u.anchor)[0].text.length > 0)
          return;
        var m = s.rangeRef(e, u, {
          affinity: "inward"
        }), [p, g] = E.edges(u), o = f === "lowest" ? "lowest" : "highest", B = s.isEnd(e, g, g.path);
        y.splitNodes(e, {
          at: g,
          match: a,
          mode: o,
          voids: h,
          always: !B
        });
        var A = s.isStart(e, p, p.path);
        y.splitNodes(e, {
          at: p,
          match: a,
          mode: o,
          voids: h,
          always: !A
        }), u = m.unref(), n.at == null && y.select(e, u);
      }
      i || (i = (U, N) => U !== N);
      for (var [b, x] of s.nodes(e, {
        at: u,
        match: a,
        mode: f,
        voids: h
      })) {
        var k = {}, I = {};
        if (x.length !== 0) {
          var $ = !1;
          for (var j in t)
            j === "children" || j === "text" || i(t[j], b[j]) && ($ = !0, b.hasOwnProperty(j) && (k[j] = b[j]), l ? t[j] != null && (I[j] = l(b[j], t[j])) : t[j] != null && (I[j] = t[j]));
          $ && e.apply({
            type: "set_node",
            path: x,
            properties: k,
            newProperties: I
          });
        }
      }
    }
  });
}, _o = (r, e) => {
  if (E.isCollapsed(e))
    return e.anchor;
  var [, t] = E.edges(e), n = s.pointRef(r, t);
  return y.delete(r, {
    at: e
  }), n.unref();
}, Go = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = t, {
      match: u,
      at: i = e.selection,
      height: l = 0,
      always: c = !1
    } = t;
    if (u == null && (u = (_) => V.isElement(_) && s.isBlock(e, _)), E.isRange(i) && (i = _o(e, i)), D.isPath(i)) {
      var f = i, v = s.point(e, f), [h] = s.parent(e, f);
      u = (_) => _ === h, l = v.path.length - f.length + 1, i = v, c = !0;
    }
    if (i) {
      var m = s.pointRef(e, i, {
        affinity: "backward"
      }), p;
      try {
        var [g] = s.nodes(e, {
          at: i,
          match: u,
          mode: n,
          voids: a
        });
        if (!g)
          return;
        var o = s.void(e, {
          at: i,
          mode: "highest"
        }), B = 0;
        if (!a && o) {
          var [A, b] = o;
          if (V.isElement(A) && e.isInline(A)) {
            var x = s.after(e, b);
            if (!x) {
              var k = {
                text: ""
              }, I = D.next(b);
              y.insertNodes(e, k, {
                at: I,
                voids: a
              }), x = s.point(e, I);
            }
            i = x, c = !0;
          }
          var $ = i.path.length - b.length;
          l = $ + 1, c = !0;
        }
        p = s.pointRef(e, i);
        var j = i.path.length - l, [, U] = g, N = i.path.slice(0, j), H = l === 0 ? i.offset : i.path[j] + B;
        for (var [G, R] of s.levels(e, {
          at: N,
          reverse: !0,
          voids: a
        })) {
          var z = !1;
          if (R.length < U.length || R.length === 0 || !a && V.isElement(G) && s.isVoid(e, G))
            break;
          var P = m.current, L = s.isEnd(e, P, R);
          if (c || !m || !s.isEdge(e, P, R)) {
            z = !0;
            var re = S.extractProps(G);
            e.apply({
              type: "split_node",
              path: R,
              position: H,
              properties: re
            });
          }
          H = R[R.length - 1] + (z || L ? 1 : 0);
        }
        if (t.at == null) {
          var Y = p.current || s.end(e, []);
          y.select(e, Y);
        }
      } finally {
        var ce;
        m.unref(), (ce = p) === null || ce === void 0 || ce.unref();
      }
    }
  });
}, Xo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(t) || (t = [t]);
  var a = {};
  for (var u of t)
    a[u] = null;
  y.setNodes(e, a, n);
}, Jo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: u = !1
    } = t, {
      at: i = e.selection,
      match: l
    } = t;
    if (i) {
      l == null && (l = D.isPath(i) ? kr(e, i) : (p) => V.isElement(p) && s.isBlock(e, p)), D.isPath(i) && (i = s.range(e, i));
      var c = E.isRange(i) ? s.rangeRef(e, i) : null, f = s.nodes(e, {
        at: i,
        match: l,
        mode: n,
        voids: u
      }), v = Array.from(
        f,
        (p) => {
          var [, g] = p;
          return s.pathRef(e, g);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), h = function() {
        var g = m.unref(), [o] = s.node(e, g), B = s.range(e, g);
        a && c && (B = E.intersection(c.current, B)), y.liftNodes(e, {
          at: B,
          match: (A) => V.isAncestor(o) && o.children.includes(A),
          voids: u
        });
      };
      for (var m of v)
        h();
      c && c.unref();
    }
  });
};
function Ca(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function pa(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ca(Object(t), !0).forEach(function(n) {
      ke(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ca(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Zo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: a = "lowest",
      split: u = !1,
      voids: i = !1
    } = n, {
      match: l,
      at: c = e.selection
    } = n;
    if (c) {
      if (l == null && (D.isPath(c) ? l = kr(e, c) : e.isInline(t) ? l = (B) => V.isElement(B) && s.isInline(e, B) || q.isText(B) : l = (B) => V.isElement(B) && s.isBlock(e, B)), u && E.isRange(c)) {
        var [f, v] = E.edges(c), h = s.rangeRef(e, c, {
          affinity: "inward"
        });
        y.splitNodes(e, {
          at: v,
          match: l,
          voids: i
        }), y.splitNodes(e, {
          at: f,
          match: l,
          voids: i
        }), c = h.unref(), n.at == null && y.select(e, c);
      }
      var m = Array.from(s.nodes(e, {
        at: c,
        match: e.isInline(t) ? (B) => V.isElement(B) && s.isBlock(e, B) : (B) => s.isEditor(B),
        mode: "lowest",
        voids: i
      })), p = function() {
        var A = E.isRange(c) ? E.intersection(c, s.range(e, o)) : c;
        if (!A)
          return 0;
        var b = Array.from(s.nodes(e, {
          at: A,
          match: l,
          mode: a,
          voids: i
        }));
        if (b.length > 0) {
          var [x] = b, k = b[b.length - 1], [, I] = x, [, $] = k;
          if (I.length === 0 && $.length === 0)
            return 0;
          var j = D.equals(I, $) ? D.parent(I) : D.common(I, $), U = s.range(e, I, $), N = s.node(e, j), [H] = N, G = j.length + 1, R = D.next($.slice(0, G)), z = pa(pa({}, t), {}, {
            children: []
          });
          y.insertNodes(e, z, {
            at: R,
            voids: i
          }), y.moveNodes(e, {
            at: U,
            match: (P) => V.isAncestor(H) && H.children.includes(P),
            to: R.concat(0),
            voids: i
          });
        }
      }, g;
      for (var [, o] of m)
        g = p();
    }
  });
}, Qo = () => {
  var r = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return bs(r, ...n);
    },
    // Editor
    addMark: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ps(r, ...n);
    },
    deleteBackward: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Rs(r, ...n);
    },
    deleteForward: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return js(r, ...n);
    },
    deleteFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ns(r, ...n);
    },
    getFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ws(r, ...n);
    },
    insertBreak: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ks(r, ...n);
    },
    insertSoftBreak: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ys(r, ...n);
    },
    insertFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return jo(r, ...n);
    },
    insertNode: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Us(r, ...n);
    },
    insertText: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Gs(r, ...n);
    },
    normalizeNode: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ys(r, ...n);
    },
    removeMark: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return yo(r, ...n);
    },
    getDirtyPaths: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Fs(r, ...n);
    },
    shouldNormalize: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Os(r, ...n);
    },
    // Editor interface
    above: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return xs(r, ...n);
    },
    after: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ss(r, ...n);
    },
    before: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ts(r, ...n);
    },
    collapse: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return No(r, ...n);
    },
    delete: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ro(r, ...n);
    },
    deselect: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Mo(r, ...n);
    },
    edges: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ms(r, ...n);
    },
    elementReadOnly: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ks(r, ...n);
    },
    end: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Is(r, ...n);
    },
    first: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ls(r, ...n);
    },
    fragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return $s(r, ...n);
    },
    getMarks: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return so(r, ...n);
    },
    hasBlocks: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ws(r, ...n);
    },
    hasInlines: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Vs(r, ...n);
    },
    hasPath: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return qs(r, ...n);
    },
    hasTexts: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Hs(r, ...n);
    },
    insertNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return zo(r, ...n);
    },
    isBlock: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Xs(r, ...n);
    },
    isEdge: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Js(r, ...n);
    },
    isEmpty: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Zs(r, ...n);
    },
    isEnd: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Qs(r, ...n);
    },
    isNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return eo(r, ...n);
    },
    isStart: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ro(r, ...n);
    },
    last: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return to(r, ...n);
    },
    leaf: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return no(r, ...n);
    },
    levels: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ao(r, ...n);
    },
    liftNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Wo(r, ...n);
    },
    mergeNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ho(r, ...n);
    },
    move: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ko(r, ...n);
    },
    moveNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ko(r, ...n);
    },
    next: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return oo(r, ...n);
    },
    node: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return lo(r, ...n);
    },
    nodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return fo(r, ...n);
    },
    normalize: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return co(r, ...n);
    },
    parent: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return vo(r, ...n);
    },
    path: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return go(r, ...n);
    },
    pathRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Do(r, ...n);
    },
    pathRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ho(r, ...n);
    },
    point: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return po(r, ...n);
    },
    pointRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return mo(r, ...n);
    },
    pointRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Co(r, ...n);
    },
    positions: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Bo(r, ...n);
    },
    previous: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Eo(r, ...n);
    },
    range: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Fo(r, ...n);
    },
    rangeRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ao(r, ...n);
    },
    rangeRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return bo(r, ...n);
    },
    removeNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Uo(r, ...n);
    },
    select: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Io(r, ...n);
    },
    setNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Yo(r, ...n);
    },
    setNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Oo(r, ...n);
    },
    setPoint: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Lo(r, ...n);
    },
    setSelection: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return $o(r, ...n);
    },
    splitNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Go(r, ...n);
    },
    start: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return xo(r, ...n);
    },
    string: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Po(r, ...n);
    },
    unhangRange: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return So(r, ...n);
    },
    unsetNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Xo(r, ...n);
    },
    unwrapNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Jo(r, ...n);
    },
    void: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return zs(r, ...n);
    },
    withoutNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return To(r, ...n);
    },
    wrapNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Zo(r, ...n);
    }
  };
  return r;
}, el = nl, cu = "֑-߿יִ-﷽ﹰ-ﻼ", vu = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", rl = new RegExp("^[^" + vu + "]*[" + cu + "]"), tl = new RegExp("^[^" + cu + "]*[" + vu + "]");
function nl(r) {
  return r = String(r || ""), rl.test(r) ? "rtl" : tl.test(r) ? "ltr" : "neutral";
}
const du = /* @__PURE__ */ on(el);
function al(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var hn = al, ul = typeof nt == "object" && nt && nt.Object === Object && nt, il = ul, sl = il, ol = typeof self == "object" && self && self.Object === Object && self, ll = sl || ol || Function("return this")(), Du = ll, fl = Du, cl = function() {
  return fl.Date.now();
}, vl = cl, dl = /\s/;
function Dl(r) {
  for (var e = r.length; e-- && dl.test(r.charAt(e)); )
    ;
  return e;
}
var hl = Dl, gl = hl, ml = /^\s+/;
function Cl(r) {
  return r && r.slice(0, gl(r) + 1).replace(ml, "");
}
var pl = Cl, Bl = Du, El = Bl.Symbol, hu = El, Ba = hu, gu = Object.prototype, Al = gu.hasOwnProperty, bl = gu.toString, Vr = Ba ? Ba.toStringTag : void 0;
function Fl(r) {
  var e = Al.call(r, Vr), t = r[Vr];
  try {
    r[Vr] = void 0;
    var n = !0;
  } catch {
  }
  var a = bl.call(r);
  return n && (e ? r[Vr] = t : delete r[Vr]), a;
}
var wl = Fl, yl = Object.prototype, Ol = yl.toString;
function xl(r) {
  return Ol.call(r);
}
var Pl = xl, Ea = hu, Sl = wl, Tl = Pl, Rl = "[object Null]", jl = "[object Undefined]", Aa = Ea ? Ea.toStringTag : void 0;
function Nl(r) {
  return r == null ? r === void 0 ? jl : Rl : Aa && Aa in Object(r) ? Sl(r) : Tl(r);
}
var Ml = Nl;
function kl(r) {
  return r != null && typeof r == "object";
}
var Il = kl, Ll = Ml, $l = Il, zl = "[object Symbol]";
function Wl(r) {
  return typeof r == "symbol" || $l(r) && Ll(r) == zl;
}
var Vl = Wl, ql = pl, ba = hn, Hl = Vl, Fa = 0 / 0, Kl = /^[-+]0x[0-9a-f]+$/i, Ul = /^0b[01]+$/i, Yl = /^0o[0-7]+$/i, _l = parseInt;
function Gl(r) {
  if (typeof r == "number")
    return r;
  if (Hl(r))
    return Fa;
  if (ba(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = ba(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = ql(r);
  var t = Ul.test(r);
  return t || Yl.test(r) ? _l(r.slice(2), t ? 2 : 8) : Kl.test(r) ? Fa : +r;
}
var Xl = Gl, Jl = hn, $t = vl, wa = Xl, Zl = "Expected a function", Ql = Math.max, ef = Math.min;
function rf(r, e, t) {
  var n, a, u, i, l, c, f = 0, v = !1, h = !1, m = !0;
  if (typeof r != "function")
    throw new TypeError(Zl);
  e = wa(e) || 0, Jl(t) && (v = !!t.leading, h = "maxWait" in t, u = h ? Ql(wa(t.maxWait) || 0, e) : u, m = "trailing" in t ? !!t.trailing : m);
  function p($) {
    var j = n, U = a;
    return n = a = void 0, f = $, i = r.apply(U, j), i;
  }
  function g($) {
    return f = $, l = setTimeout(A, e), v ? p($) : i;
  }
  function o($) {
    var j = $ - c, U = $ - f, N = e - j;
    return h ? ef(N, u - U) : N;
  }
  function B($) {
    var j = $ - c, U = $ - f;
    return c === void 0 || j >= e || j < 0 || h && U >= u;
  }
  function A() {
    var $ = $t();
    if (B($))
      return b($);
    l = setTimeout(A, o($));
  }
  function b($) {
    return l = void 0, m && n ? p($) : (n = a = void 0, i);
  }
  function x() {
    l !== void 0 && clearTimeout(l), f = 0, n = c = a = l = void 0;
  }
  function k() {
    return l === void 0 ? i : b($t());
  }
  function I() {
    var $ = $t(), j = B($);
    if (n = arguments, a = this, c = $, j) {
      if (l === void 0)
        return g(c);
      if (h)
        return clearTimeout(l), l = setTimeout(A, e), p(c);
    }
    return l === void 0 && (l = setTimeout(A, e)), i;
  }
  return I.cancel = x, I.flush = k, I;
}
var mu = rf;
const tf = /* @__PURE__ */ on(mu);
var nf = mu, af = hn, uf = "Expected a function";
function sf(r, e, t) {
  var n = !0, a = !0;
  if (typeof r != "function")
    throw new TypeError(uf);
  return af(t) && (n = "leading" in t ? !!t.leading : n, a = "trailing" in t ? !!t.trailing : a), nf(r, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var of = sf;
const lf = /* @__PURE__ */ on(of), ya = (r) => typeof r == "object" && r != null && r.nodeType === 1, Oa = (r, e) => (!e || r !== "hidden") && r !== "visible" && r !== "clip", zt = (r, e) => {
  if (r.clientHeight < r.scrollHeight || r.clientWidth < r.scrollWidth) {
    const t = getComputedStyle(r, null);
    return Oa(t.overflowY, e) || Oa(t.overflowX, e) || ((n) => {
      const a = ((u) => {
        if (!u.ownerDocument || !u.ownerDocument.defaultView)
          return null;
        try {
          return u.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    })(r);
  }
  return !1;
}, ut = (r, e, t, n, a, u, i, l) => u < r && i > e || u > r && i < e ? 0 : u <= r && l <= t || i >= e && l >= t ? u - r - n : i > e && l < t || u < r && l > t ? i - e + a : 0, ff = (r) => {
  const e = r.parentElement;
  return e ?? (r.getRootNode().host || null);
}, xa = (r, e) => {
  var t, n, a, u;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: l, inline: c, boundary: f, skipOverflowHiddenElements: v } = e, h = typeof f == "function" ? f : (re) => re !== f;
  if (!ya(r))
    throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, p = [];
  let g = r;
  for (; ya(g) && h(g); ) {
    if (g = ff(g), g === m) {
      p.push(g);
      break;
    }
    g != null && g === document.body && zt(g) && !zt(document.documentElement) || g != null && zt(g, v) && p.push(g);
  }
  const o = (n = (t = window.visualViewport) == null ? void 0 : t.width) != null ? n : innerWidth, B = (u = (a = window.visualViewport) == null ? void 0 : a.height) != null ? u : innerHeight, { scrollX: A, scrollY: b } = window, { height: x, width: k, top: I, right: $, bottom: j, left: U } = r.getBoundingClientRect(), { top: N, right: H, bottom: G, left: R } = ((re) => {
    const Y = window.getComputedStyle(re);
    return { top: parseFloat(Y.scrollMarginTop) || 0, right: parseFloat(Y.scrollMarginRight) || 0, bottom: parseFloat(Y.scrollMarginBottom) || 0, left: parseFloat(Y.scrollMarginLeft) || 0 };
  })(r);
  let z = l === "start" || l === "nearest" ? I - N : l === "end" ? j + G : I + x / 2 - N + G, P = c === "center" ? U + k / 2 - R + H : c === "end" ? $ + H : U - R;
  const L = [];
  for (let re = 0; re < p.length; re++) {
    const Y = p[re], { height: ce, width: _, top: ne, right: me, bottom: ve, left: Se } = Y.getBoundingClientRect();
    if (i === "if-needed" && I >= 0 && U >= 0 && j <= B && $ <= o && I >= ne && j <= ve && U >= Se && $ <= me)
      return L;
    const C = getComputedStyle(Y), T = parseInt(C.borderLeftWidth, 10), w = parseInt(C.borderTopWidth, 10), M = parseInt(C.borderRightWidth, 10), Q = parseInt(C.borderBottomWidth, 10);
    let K = 0, X = 0;
    const le = "offsetWidth" in Y ? Y.offsetWidth - Y.clientWidth - T - M : 0, se = "offsetHeight" in Y ? Y.offsetHeight - Y.clientHeight - w - Q : 0, ge = "offsetWidth" in Y ? Y.offsetWidth === 0 ? 0 : _ / Y.offsetWidth : 0, ae = "offsetHeight" in Y ? Y.offsetHeight === 0 ? 0 : ce / Y.offsetHeight : 0;
    if (m === Y)
      K = l === "start" ? z : l === "end" ? z - B : l === "nearest" ? ut(b, b + B, B, w, Q, b + z, b + z + x, x) : z - B / 2, X = c === "start" ? P : c === "center" ? P - o / 2 : c === "end" ? P - o : ut(A, A + o, o, T, M, A + P, A + P + k, k), K = Math.max(0, K + b), X = Math.max(0, X + A);
    else {
      K = l === "start" ? z - ne - w : l === "end" ? z - ve + Q + se : l === "nearest" ? ut(ne, ve, ce, w, Q + se, z, z + x, x) : z - (ne + ce / 2) + se / 2, X = c === "start" ? P - Se - T : c === "center" ? P - (Se + _ / 2) + le / 2 : c === "end" ? P - me + M + le : ut(Se, me, _, T, M + le, P, P + k, k);
      const { scrollLeft: Ee, scrollTop: Ae } = Y;
      K = ae === 0 ? 0 : Math.max(0, Math.min(Ae + K / ae, Y.scrollHeight - ce / ae + se)), X = ge === 0 ? 0 : Math.max(0, Math.min(Ee + X / ge, Y.scrollWidth - _ / ge + le)), z += Ae - K, P += Ee - X;
    }
    L.push({ el: Y, top: K, left: X });
  }
  return L;
}, cf = (r) => r === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(r) ? r : { block: "start", inline: "nearest" };
function vf(r, e) {
  if (!r.isConnected || !((a) => {
    let u = a;
    for (; u && u.parentNode; ) {
      if (u.parentNode === document)
        return !0;
      u = u.parentNode instanceof ShadowRoot ? u.parentNode.host : u.parentNode;
    }
    return !1;
  })(r))
    return;
  const t = ((a) => {
    const u = window.getComputedStyle(a);
    return { top: parseFloat(u.scrollMarginTop) || 0, right: parseFloat(u.scrollMarginRight) || 0, bottom: parseFloat(u.scrollMarginBottom) || 0, left: parseFloat(u.scrollMarginLeft) || 0 };
  })(r);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(e))
    return e.behavior(xa(r, e));
  const n = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: a, top: u, left: i } of xa(r, cf(e))) {
    const l = u - t.top + t.bottom, c = i - t.left + t.right;
    a.scroll({ top: l, left: c, behavior: n });
  }
}
var Br = [], df = function() {
  return Br.some(function(r) {
    return r.activeTargets.length > 0;
  });
}, Df = function() {
  return Br.some(function(r) {
    return r.skippedTargets.length > 0;
  });
}, Pa = "ResizeObserver loop completed with undelivered notifications.", hf = function() {
  var r;
  typeof ErrorEvent == "function" ? r = new ErrorEvent("error", {
    message: Pa
  }) : (r = document.createEvent("Event"), r.initEvent("error", !1, !1), r.message = Pa), window.dispatchEvent(r);
}, Zr;
(function(r) {
  r.BORDER_BOX = "border-box", r.CONTENT_BOX = "content-box", r.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Zr || (Zr = {}));
var Er = function(r) {
  return Object.freeze(r);
}, gf = function() {
  function r(e, t) {
    this.inlineSize = e, this.blockSize = t, Er(this);
  }
  return r;
}(), Cu = function() {
  function r(e, t, n, a) {
    return this.x = e, this.y = t, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Er(this);
  }
  return r.prototype.toJSON = function() {
    var e = this, t = e.x, n = e.y, a = e.top, u = e.right, i = e.bottom, l = e.left, c = e.width, f = e.height;
    return { x: t, y: n, top: a, right: u, bottom: i, left: l, width: c, height: f };
  }, r.fromRect = function(e) {
    return new r(e.x, e.y, e.width, e.height);
  }, r;
}(), gn = function(r) {
  return r instanceof SVGElement && "getBBox" in r;
}, pu = function(r) {
  if (gn(r)) {
    var e = r.getBBox(), t = e.width, n = e.height;
    return !t && !n;
  }
  var a = r, u = a.offsetWidth, i = a.offsetHeight;
  return !(u || i || r.getClientRects().length);
}, Sa = function(r) {
  var e;
  if (r instanceof Element)
    return !0;
  var t = (e = r == null ? void 0 : r.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(t && r instanceof t.Element);
}, mf = function(r) {
  switch (r.tagName) {
    case "INPUT":
      if (r.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Ur = typeof window < "u" ? window : {}, it = /* @__PURE__ */ new WeakMap(), Ta = /auto|scroll/, Cf = /^tb|vertical/, pf = /msie|trident/i.test(Ur.navigator && Ur.navigator.userAgent), rr = function(r) {
  return parseFloat(r || "0");
}, Rr = function(r, e, t) {
  return r === void 0 && (r = 0), e === void 0 && (e = 0), t === void 0 && (t = !1), new gf((t ? e : r) || 0, (t ? r : e) || 0);
}, Ra = Er({
  devicePixelContentBoxSize: Rr(),
  borderBoxSize: Rr(),
  contentBoxSize: Rr(),
  contentRect: new Cu(0, 0, 0, 0)
}), Bu = function(r, e) {
  if (e === void 0 && (e = !1), it.has(r) && !e)
    return it.get(r);
  if (pu(r))
    return it.set(r, Ra), Ra;
  var t = getComputedStyle(r), n = gn(r) && r.ownerSVGElement && r.getBBox(), a = !pf && t.boxSizing === "border-box", u = Cf.test(t.writingMode || ""), i = !n && Ta.test(t.overflowY || ""), l = !n && Ta.test(t.overflowX || ""), c = n ? 0 : rr(t.paddingTop), f = n ? 0 : rr(t.paddingRight), v = n ? 0 : rr(t.paddingBottom), h = n ? 0 : rr(t.paddingLeft), m = n ? 0 : rr(t.borderTopWidth), p = n ? 0 : rr(t.borderRightWidth), g = n ? 0 : rr(t.borderBottomWidth), o = n ? 0 : rr(t.borderLeftWidth), B = h + f, A = c + v, b = o + p, x = m + g, k = l ? r.offsetHeight - x - r.clientHeight : 0, I = i ? r.offsetWidth - b - r.clientWidth : 0, $ = a ? B + b : 0, j = a ? A + x : 0, U = n ? n.width : rr(t.width) - $ - I, N = n ? n.height : rr(t.height) - j - k, H = U + B + I + b, G = N + A + k + x, R = Er({
    devicePixelContentBoxSize: Rr(Math.round(U * devicePixelRatio), Math.round(N * devicePixelRatio), u),
    borderBoxSize: Rr(H, G, u),
    contentBoxSize: Rr(U, N, u),
    contentRect: new Cu(h, c, U, N)
  });
  return it.set(r, R), R;
}, Eu = function(r, e, t) {
  var n = Bu(r, t), a = n.borderBoxSize, u = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (e) {
    case Zr.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case Zr.BORDER_BOX:
      return a;
    default:
      return u;
  }
}, Bf = function() {
  function r(e) {
    var t = Bu(e);
    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = Er([t.borderBoxSize]), this.contentBoxSize = Er([t.contentBoxSize]), this.devicePixelContentBoxSize = Er([t.devicePixelContentBoxSize]);
  }
  return r;
}(), Au = function(r) {
  if (pu(r))
    return 1 / 0;
  for (var e = 0, t = r.parentNode; t; )
    e += 1, t = t.parentNode;
  return e;
}, Ef = function() {
  var r = 1 / 0, e = [];
  Br.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var l = [];
      i.activeTargets.forEach(function(f) {
        var v = new Bf(f.target), h = Au(f.target);
        l.push(v), f.lastReportedSize = Eu(f.target, f.observedBox), h < r && (r = h);
      }), e.push(function() {
        i.callback.call(i.observer, l, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var t = 0, n = e; t < n.length; t++) {
    var a = n[t];
    a();
  }
  return r;
}, ja = function(r) {
  Br.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(a) {
      a.isActive() && (Au(a.target) > r ? t.activeTargets.push(a) : t.skippedTargets.push(a));
    });
  });
}, Af = function() {
  var r = 0;
  for (ja(r); df(); )
    r = Ef(), ja(r);
  return Df() && hf(), r > 0;
}, Wt, bu = [], bf = function() {
  return bu.splice(0).forEach(function(r) {
    return r();
  });
}, Ff = function(r) {
  if (!Wt) {
    var e = 0, t = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return bf();
    }).observe(t, n), Wt = function() {
      t.textContent = "".concat(e ? e-- : e++);
    };
  }
  bu.push(r), Wt();
}, wf = function(r) {
  Ff(function() {
    requestAnimationFrame(r);
  });
}, dt = 0, yf = function() {
  return !!dt;
}, Of = 250, xf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Na = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Ma = function(r) {
  return r === void 0 && (r = 0), Date.now() + r;
}, Vt = !1, Pf = function() {
  function r() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return r.prototype.run = function(e) {
    var t = this;
    if (e === void 0 && (e = Of), !Vt) {
      Vt = !0;
      var n = Ma(e);
      wf(function() {
        var a = !1;
        try {
          a = Af();
        } finally {
          if (Vt = !1, e = n - Ma(), !yf())
            return;
          a ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
        }
      });
    }
  }, r.prototype.schedule = function() {
    this.stop(), this.run();
  }, r.prototype.observe = function() {
    var e = this, t = function() {
      return e.observer && e.observer.observe(document.body, xf);
    };
    document.body ? t() : Ur.addEventListener("DOMContentLoaded", t);
  }, r.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Na.forEach(function(t) {
      return Ur.addEventListener(t, e.listener, !0);
    }));
  }, r.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), Na.forEach(function(t) {
      return Ur.removeEventListener(t, e.listener, !0);
    }), this.stopped = !0);
  }, r;
}(), Qt = new Pf(), ka = function(r) {
  !dt && r > 0 && Qt.start(), dt += r, !dt && Qt.stop();
}, Sf = function(r) {
  return !gn(r) && !mf(r) && getComputedStyle(r).display === "inline";
}, Tf = function() {
  function r(e, t) {
    this.target = e, this.observedBox = t || Zr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return r.prototype.isActive = function() {
    var e = Eu(this.target, this.observedBox, !0);
    return Sf(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, r;
}(), Rf = function() {
  function r(e, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
  }
  return r;
}(), st = /* @__PURE__ */ new WeakMap(), Ia = function(r, e) {
  for (var t = 0; t < r.length; t += 1)
    if (r[t].target === e)
      return t;
  return -1;
}, ot = function() {
  function r() {
  }
  return r.connect = function(e, t) {
    var n = new Rf(e, t);
    st.set(e, n);
  }, r.observe = function(e, t, n) {
    var a = st.get(e), u = a.observationTargets.length === 0;
    Ia(a.observationTargets, t) < 0 && (u && Br.push(a), a.observationTargets.push(new Tf(t, n && n.box)), ka(1), Qt.schedule());
  }, r.unobserve = function(e, t) {
    var n = st.get(e), a = Ia(n.observationTargets, t), u = n.observationTargets.length === 1;
    a >= 0 && (u && Br.splice(Br.indexOf(n), 1), n.observationTargets.splice(a, 1), ka(-1));
  }, r.disconnect = function(e) {
    var t = this, n = st.get(e);
    n.observationTargets.slice().forEach(function(a) {
      return t.unobserve(e, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, r;
}(), jf = function() {
  function r(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ot.connect(this, e);
  }
  return r.prototype.observe = function(e, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Sa(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ot.observe(this, e, t);
  }, r.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Sa(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ot.unobserve(this, e);
  }, r.prototype.disconnect = function() {
    ot.disconnect(this);
  }, r.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, r;
}(), lr = {};
Object.defineProperty(lr, "__esModule", {
  value: !0
});
var Nf = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), qt = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, Fu = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: Nf ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, mn = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  " ": 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ";": 186,
  "=": 187,
  ",": 188,
  "-": 189,
  ".": 190,
  "/": 191,
  "`": 192,
  "[": 219,
  "\\": 220,
  "]": 221,
  "'": 222
};
for (var lt = 1; lt < 20; lt++)
  mn["f" + lt] = 111 + lt;
function Ot(r, e, t) {
  e && !("byKey" in e) && (t = e, e = null), Array.isArray(r) || (r = [r]);
  var n = r.map(function(i) {
    return wu(i, e);
  }), a = function(l) {
    return n.some(function(c) {
      return yu(c, l);
    });
  }, u = t == null ? a : a(t);
  return u;
}
function Mf(r, e) {
  return Ot(r, e);
}
function kf(r, e) {
  return Ot(r, { byKey: !0 }, e);
}
function wu(r, e) {
  var t = e && e.byKey, n = {};
  r = r.replace("++", "+add");
  var a = r.split("+"), u = a.length;
  for (var i in qt)
    n[qt[i]] = !1;
  var l = !0, c = !1, f = void 0;
  try {
    for (var v = a[Symbol.iterator](), h; !(l = (h = v.next()).done); l = !0) {
      var m = h.value, p = m.endsWith("?") && m.length > 1;
      p && (m = m.slice(0, -1));
      var g = Cn(m), o = qt[g];
      if (m.length > 1 && !o && !Fu[m] && !mn[g])
        throw new TypeError('Unknown modifier: "' + m + '"');
      (u === 1 || !o) && (t ? n.key = g : n.which = Ou(m)), o && (n[o] = p ? null : !0);
    }
  } catch (B) {
    c = !0, f = B;
  } finally {
    try {
      !l && v.return && v.return();
    } finally {
      if (c)
        throw f;
    }
  }
  return n;
}
function yu(r, e) {
  for (var t in r) {
    var n = r[t], a = void 0;
    if (n != null && (t === "key" && e.key != null ? a = e.key.toLowerCase() : t === "which" ? a = n === 91 && e.which === 93 ? 91 : e.which : a = e[t], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function Ou(r) {
  r = Cn(r);
  var e = mn[r] || r.toUpperCase().charCodeAt(0);
  return e;
}
function Cn(r) {
  return r = r.toLowerCase(), r = Fu[r] || r, r;
}
lr.default = Ot;
var Ht = lr.isHotkey = Ot;
lr.isCodeHotkey = Mf;
lr.isKeyHotkey = kf;
lr.parseHotkey = wu;
lr.compareHotkey = yu;
lr.toKeyCode = Ou;
lr.toKeyName = Cn;
function If(r, e) {
  if (r == null)
    return {};
  var t = {}, n = Object.keys(r), a, u;
  for (u = 0; u < n.length; u++)
    a = n[u], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function Nr(r, e) {
  if (r == null)
    return {};
  var t = If(r, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (a = 0; a < u.length; a++)
      n = u[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Qr(r) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qr(r);
}
function Lf(r, e) {
  if (Qr(r) !== "object" || r === null)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (Qr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function $f(r) {
  var e = Lf(r, "string");
  return Qr(e) === "symbol" ? e : String(e);
}
function Xe(r, e, t) {
  return e = $f(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
var pn = /* @__PURE__ */ yr(null), gr = () => {
  var r = At(pn);
  if (!r)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return r;
}, xu = parseInt(Z.version.split(".")[0], 10), zf = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, La = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), We = typeof navigator < "u" && /Android/.test(navigator.userAgent), Tr = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Hr = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), Wf = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), Pu = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), Vf = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), qf = We && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), Hf = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), Kf = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), Uf = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), Dt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fr = (!Vf || !qf) && !Wf && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Bn = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Tu = /* @__PURE__ */ new WeakMap(), Mr = Symbol("placeholder"), Ru = Symbol("mark-placeholder"), Yf = globalThis.Text, bn = (r) => r && r.ownerDocument && r.ownerDocument.defaultView || null, _f = (r) => hr(r) && r.nodeType === 8, Ge = (r) => hr(r) && r.nodeType === 1, hr = (r) => {
  var e = bn(r);
  return !!e && r instanceof e.Node;
}, nn = (r) => {
  var e = r && r.anchorNode && bn(r.anchorNode);
  return !!e && r instanceof e.Selection;
}, ju = (r) => hr(r) && r.nodeType === 3, Gf = (r) => r.clipboardData && r.clipboardData.getData("text/plain") !== "" && r.clipboardData.types.length === 1, Xf = (r) => {
  var [e, t] = r;
  if (Ge(e) && e.childNodes.length) {
    var n = t === e.childNodes.length, a = n ? t - 1 : t;
    for ([e, a] = Nu(e, a, n ? "backward" : "forward"), n = a < t; Ge(e) && e.childNodes.length; ) {
      var u = n ? e.childNodes.length - 1 : 0;
      e = Zf(e, u, n ? "backward" : "forward");
    }
    t = n && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, t];
}, Jf = (r) => {
  for (var e = r && r.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, Nu = (r, e, t) => {
  for (var {
    childNodes: n
  } = r, a = n[e], u = e, i = !1, l = !1; (_f(a) || Ge(a) && a.childNodes.length === 0 || Ge(a) && a.getAttribute("contenteditable") === "false") && !(i && l); ) {
    if (u >= n.length) {
      i = !0, u = e - 1, t = "backward";
      continue;
    }
    if (u < 0) {
      l = !0, u = e + 1, t = "forward";
      continue;
    }
    a = n[u], e = u, u += t === "forward" ? 1 : -1;
  }
  return [a, e];
}, Zf = (r, e, t) => {
  var [n] = Nu(r, e, t);
  return n;
}, Mu = (r) => {
  var e = "";
  if (ju(r) && r.nodeValue)
    return r.nodeValue;
  if (Ge(r)) {
    for (var t of Array.from(r.childNodes))
      e += Mu(t);
    var n = getComputedStyle(r).getPropertyValue("display");
    (n === "block" || n === "list" || r.tagName === "BR") && (e += `
`);
  }
  return e;
}, Qf = /data-slate-fragment="(.+?)"/m, ec = (r) => {
  var e = r.getData("text/html"), [, t] = e.match(Qf) || [];
  return t;
}, Fn = (r, e, t) => {
  var {
    target: n
  } = e;
  if (Ge(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = F.getWindow(r);
  if (a.contains(n))
    return F.hasDOMNode(r, n, {
      editable: !0
    });
  var u = t.find((i) => {
    var {
      addedNodes: l,
      removedNodes: c
    } = i;
    for (var f of l)
      if (f === n || f.contains(n))
        return !0;
    for (var v of c)
      if (v === n || v.contains(n))
        return !0;
  });
  return !u || u === e ? !1 : Fn(r, u, t);
}, rc = 0;
class tc {
  constructor() {
    Xe(this, "id", void 0), this.id = "".concat(rc++);
  }
}
var F = {
  androidPendingDiffs: (r) => $e.get(r),
  androidScheduleFlush: (r) => {
    var e;
    (e = An.get(r)) === null || e === void 0 || e();
  },
  blur: (r) => {
    var e = F.toDOMNode(r, r), t = F.findDocumentOrShadowRoot(r);
    dr.set(r, !1), t.activeElement === e && e.blur();
  },
  deselect: (r) => {
    var {
      selection: e
    } = r, t = F.findDocumentOrShadowRoot(r), n = t.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), e && y.deselect(r);
  },
  findDocumentOrShadowRoot: (r) => {
    var e = F.toDOMNode(r, r), t = e.getRootNode();
    return (t instanceof Document || t instanceof ShadowRoot) && t.getSelection != null ? t : e.ownerDocument;
  },
  findEventRange: (r, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: t,
      clientY: n,
      target: a
    } = e;
    if (t == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var u = F.toSlateNode(r, e.target), i = F.findPath(r, u);
    if (V.isElement(u) && s.isVoid(r, u)) {
      var l = a.getBoundingClientRect(), c = r.isInline(u) ? t - l.left < l.left + l.width - t : n - l.top < l.top + l.height - n, f = s.point(r, i, {
        edge: c ? "start" : "end"
      }), v = c ? s.before(r, f) : s.after(r, f);
      if (v) {
        var h = s.range(r, v);
        return h;
      }
    }
    var m, {
      document: p
    } = F.getWindow(r);
    if (p.caretRangeFromPoint)
      m = p.caretRangeFromPoint(t, n);
    else {
      var g = p.caretPositionFromPoint(t, n);
      g && (m = p.createRange(), m.setStart(g.offsetNode, g.offset), m.setEnd(g.offsetNode, g.offset));
    }
    if (!m)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var o = F.toSlateRange(r, m, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return o;
  },
  findKey: (r, e) => {
    var t = Et.get(e);
    return t || (t = new tc(), Et.set(e, t)), t;
  },
  findPath: (r, e) => {
    for (var t = [], n = e; ; ) {
      var a = En.get(n);
      if (a == null) {
        if (s.isEditor(n))
          return t;
        break;
      }
      var u = Bn.get(n);
      if (u == null)
        break;
      t.unshift(u), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Pe.stringify(e)));
  },
  focus: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!dr.get(e)) {
      if (t.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          F.focus(e, {
            retries: t.retries - 1
          });
        }, 10);
        return;
      }
      var n = F.toDOMNode(e, e), a = F.findDocumentOrShadowRoot(e);
      if (a.activeElement !== n) {
        if (e.selection && a instanceof Document) {
          var u = a.getSelection(), i = F.toDOMRange(e, e.selection);
          u == null || u.removeAllRanges(), u == null || u.addRange(i);
        }
        e.selection || (y.select(e, s.start(e, [])), e.onChange()), n.focus({
          preventScroll: !0
        }), dr.set(e, !0);
      }
    }
  },
  getWindow: (r) => {
    var e = Su.get(r);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, u = F.toDOMNode(e, e), i;
    try {
      i = Ge(t) ? t : t.parentElement;
    } catch (l) {
      if (l instanceof Error && !l.message.includes('Permission denied to access property "nodeType"'))
        throw l;
    }
    return i ? i.closest("[data-slate-editor]") === u && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === u || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (r, e) => hr(e) && F.hasDOMNode(r, e, {
    editable: !0
  }),
  hasRange: (r, e) => {
    var {
      anchor: t,
      focus: n
    } = e;
    return s.hasPath(r, t.path) && s.hasPath(r, n.path);
  },
  hasSelectableTarget: (r, e) => F.hasEditableTarget(r, e) || F.isTargetInsideNonReadonlyVoid(r, e),
  hasTarget: (r, e) => hr(e) && F.hasDOMNode(r, e),
  insertData: (r, e) => {
    r.insertData(e);
  },
  insertFragmentData: (r, e) => r.insertFragmentData(e),
  insertTextData: (r, e) => r.insertTextData(e),
  isComposing: (r) => !!pr.get(r),
  isFocused: (r) => !!dr.get(r),
  isReadOnly: (r) => !!rn.get(r),
  isTargetInsideNonReadonlyVoid: (r, e) => {
    if (rn.get(r))
      return !1;
    var t = F.hasTarget(r, e) && F.toSlateNode(r, e);
    return V.isElement(t) && s.isVoid(r, t);
  },
  setFragmentData: (r, e, t) => r.setFragmentData(e, t),
  toDOMNode: (r, e) => {
    var t = xt.get(r), n = s.isEditor(e) ? ht.get(r) : t == null ? void 0 : t.get(F.findKey(r, e));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Pe.stringify(e)));
    return n;
  },
  toDOMPoint: (r, e) => {
    var [t] = s.node(r, e.path), n = F.toDOMNode(r, t), a;
    s.void(r, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var u = "[data-slate-string], [data-slate-zero-width]", i = Array.from(n.querySelectorAll(u)), l = 0, c = 0; c < i.length; c++) {
      var f = i[c], v = f.childNodes[0];
      if (!(v == null || v.textContent == null)) {
        var {
          length: h
        } = v.textContent, m = f.getAttribute("data-slate-length"), p = m == null ? h : parseInt(m, 10), g = l + p, o = i[c + 1];
        if (e.offset === g && o !== null && o !== void 0 && o.hasAttribute("data-slate-mark-placeholder")) {
          var B, A = o.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            A instanceof Yf ? A : o,
            (B = o.textContent) !== null && B !== void 0 && B.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= g) {
          var b = Math.min(h, Math.max(0, e.offset - l));
          a = [v, b];
          break;
        }
        l = g;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Pe.stringify(e)));
    return a;
  },
  toDOMRange: (r, e) => {
    var {
      anchor: t,
      focus: n
    } = e, a = E.isBackward(e), u = F.toDOMPoint(r, t), i = E.isCollapsed(e) ? u : F.toDOMPoint(r, n), l = F.getWindow(r), c = l.document.createRange(), [f, v] = a ? i : u, [h, m] = a ? u : i, p = Ge(f) ? f : f.parentElement, g = !!p.getAttribute("data-slate-zero-width"), o = Ge(h) ? h : h.parentElement, B = !!o.getAttribute("data-slate-zero-width");
    return c.setStart(f, g ? 1 : v), c.setEnd(h, B ? 1 : m), c;
  },
  toSlateNode: (r, e) => {
    var t = Ge(e) ? e : e.parentElement;
    t && !t.hasAttribute("data-slate-node") && (t = t.closest("[data-slate-node]"));
    var n = t ? et.get(t) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(t));
    return n;
  },
  toSlatePoint: (r, e, t) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = t, [u, i] = n ? e : Xf(e), l = u.parentNode, c = null, f = 0;
    if (l) {
      var v, h, m = F.toDOMNode(r, r), p = l.closest('[data-slate-void="true"]'), g = p && m.contains(p) ? p : null, o = l.closest("[data-slate-leaf]"), B = null;
      if (o) {
        if (c = o.closest('[data-slate-node="text"]'), c) {
          var A = F.getWindow(r), b = A.document.createRange();
          b.setStart(c, 0), b.setEnd(u, i);
          var x = b.cloneContents(), k = [...Array.prototype.slice.call(x.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(x.querySelectorAll("[contenteditable=false]"))];
          k.forEach((P) => {
            if (We && !n && P.hasAttribute("data-slate-zero-width") && P.textContent.length > 0 && P.textContext !== "\uFEFF") {
              P.textContent.startsWith("\uFEFF") && (P.textContent = P.textContent.slice(1));
              return;
            }
            P.parentNode.removeChild(P);
          }), f = x.textContent.length, B = c;
        }
      } else if (g) {
        for (var I = g.querySelectorAll("[data-slate-leaf]"), $ = 0; $ < I.length; $++) {
          var j = I[$];
          if (F.hasDOMNode(r, j)) {
            o = j;
            break;
          }
        }
        o ? (c = o.closest('[data-slate-node="text"]'), B = o, f = B.textContent.length, B.querySelectorAll("[data-slate-zero-width]").forEach((P) => {
          f -= P.textContent.length;
        })) : f = 1;
      }
      B && f === B.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      We && B.getAttribute("data-slate-zero-width") === "z" && (v = B.textContent) !== null && v !== void 0 && v.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (l.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Tr && (h = B.textContent) !== null && h !== void 0 && h.endsWith(`

`)) && f--;
    }
    if (We && !c && !n) {
      var U = l.hasAttribute("data-slate-node") ? l : l.closest("[data-slate-node]");
      if (U && F.hasDOMNode(r, U, {
        editable: !0
      })) {
        var N = F.toSlateNode(r, U), {
          path: H,
          offset: G
        } = s.start(r, F.findPath(r, N));
        return U.querySelector("[data-slate-leaf]") || (G = i), {
          path: H,
          offset: G
        };
      }
    }
    if (!c) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var R = F.toSlateNode(r, c), z = F.findPath(r, R);
    return {
      path: z,
      offset: f
    };
  },
  toSlateRange: (r, e, t) => {
    var n, {
      exactMatch: a,
      suppressThrow: u
    } = t, i = nn(e) ? e.anchorNode : e.startContainer, l, c, f, v, h;
    if (i)
      if (nn(e)) {
        if (Tr && e.rangeCount > 1) {
          f = e.focusNode;
          var m = e.getRangeAt(0), p = e.getRangeAt(e.rangeCount - 1);
          if (f instanceof HTMLTableRowElement && m.startContainer instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement) {
            let $ = function(j) {
              return j.childElementCount > 0 ? $(j.children[0]) : j;
            };
            var g = m.startContainer, o = p.startContainer, B = $(g.children[m.startOffset]), A = $(o.children[p.startOffset]);
            v = 0, A.childNodes.length > 0 ? l = A.childNodes[0] : l = A, B.childNodes.length > 0 ? f = B.childNodes[0] : f = B, A instanceof HTMLElement ? c = A.innerHTML.length : c = 0;
          } else
            m.startContainer === f ? (l = p.endContainer, c = p.endOffset, v = m.startOffset) : (l = m.startContainer, c = m.endOffset, v = p.startOffset);
        } else
          l = e.anchorNode, c = e.anchorOffset, f = e.focusNode, v = e.focusOffset;
        Pu && Jf(l) || Tr ? h = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : h = e.isCollapsed;
      } else
        l = e.startContainer, c = e.startOffset, f = e.endContainer, v = e.endOffset, h = e.collapsed;
    if (l == null || f == null || c == null || v == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    if (Tr && (n = f.textContent) !== null && n !== void 0 && n.endsWith(`

`) && v === f.textContent.length && v--, "getAttribute" in f && f.getAttribute("contenteditable") === "false" && f.getAttribute("data-slate-void") !== "true") {
      var b;
      f = l, v = ((b = l.textContent) === null || b === void 0 ? void 0 : b.length) || 0;
    }
    var x = F.toSlatePoint(r, [l, c], {
      exactMatch: a,
      suppressThrow: u
    });
    if (!x)
      return null;
    var k = h ? x : F.toSlatePoint(r, [f, v], {
      exactMatch: a,
      suppressThrow: u
    });
    if (!k)
      return null;
    var I = {
      anchor: x,
      focus: k
    };
    return E.isExpanded(I) && E.isForward(I) && Ge(f) && s.void(r, {
      at: I.focus,
      mode: "highest"
    }) && (I = s.unhangRange(r, I, {
      voids: !0
    })), I;
  }
};
function nc(r, e) {
  var {
    path: t,
    diff: n
  } = e;
  if (!s.hasPath(r, t))
    return !1;
  var a = S.get(r, t);
  if (!q.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var u = D.next(t);
  if (!s.hasPath(r, u))
    return !1;
  var i = S.get(r, u);
  return q.isText(i) && i.text.startsWith(n.text);
}
function ku(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return t.reduce((a, u) => a.slice(0, u.start) + u.text + a.slice(u.end), r);
}
function ac(r, e) {
  for (var t = Math.min(r.length, e.length), n = 0; n < t; n++)
    if (r.charAt(n) !== e.charAt(n))
      return n;
  return t;
}
function uc(r, e, t) {
  for (var n = Math.min(r.length, e.length, t), a = 0; a < n; a++)
    if (r.charAt(r.length - a - 1) !== e.charAt(e.length - a - 1))
      return a;
  return n;
}
function Iu(r, e) {
  var {
    start: t,
    end: n,
    text: a
  } = e, u = r.slice(t, n), i = ac(u, a), l = Math.min(u.length - i, a.length - i), c = uc(u, a, l), f = {
    start: t + i,
    end: n - c,
    text: a.slice(i, a.length - c)
  };
  return f.start === f.end && f.text.length === 0 ? null : f;
}
function ic(r, e, t) {
  var n = Math.min(e.start, t.start), a = Math.max(0, Math.min(e.start + e.text.length, t.end) - t.start), u = ku(r, e, t), i = Math.max(t.start + t.text.length, e.start + e.text.length + (e.start + e.text.length > t.start ? t.text.length : 0) - a), l = u.slice(n, i), c = Math.max(e.end, t.end - e.text.length + (e.end - e.start));
  return Iu(r, {
    start: n,
    end: c,
    text: l
  });
}
function sc(r) {
  var {
    path: e,
    diff: t
  } = r;
  return {
    anchor: {
      path: e,
      offset: t.start
    },
    focus: {
      path: e,
      offset: t.end
    }
  };
}
function an(r, e) {
  var {
    path: t,
    offset: n
  } = e;
  if (!s.hasPath(r, t))
    return null;
  var a = S.get(r, t);
  if (!q.isText(a))
    return null;
  var u = s.above(r, {
    match: (l) => V.isElement(l) && s.isBlock(r, l),
    at: t
  });
  if (!u)
    return null;
  for (; n > a.text.length; ) {
    var i = s.next(r, {
      at: t,
      match: q.isText
    });
    if (!i || !D.isDescendant(i[1], u[1]))
      return null;
    n -= a.text.length, a = i[0], t = i[1];
  }
  return {
    path: t,
    offset: n
  };
}
function $a(r, e) {
  var t = an(r, e.anchor);
  if (!t)
    return null;
  if (E.isCollapsed(e))
    return {
      anchor: t,
      focus: t
    };
  var n = an(r, e.focus);
  return n ? {
    anchor: t,
    focus: n
  } : null;
}
function un(r, e, t) {
  var n = $e.get(r), a = n == null ? void 0 : n.find((v) => {
    var {
      path: h
    } = v;
    return D.equals(h, e.path);
  });
  if (!a || e.offset <= a.diff.start)
    return te.transform(e, t, {
      affinity: "backward"
    });
  var {
    diff: u
  } = a;
  if (e.offset <= u.start + u.text.length) {
    var i = {
      path: e.path,
      offset: u.start
    }, l = te.transform(i, t, {
      affinity: "backward"
    });
    return l ? {
      path: l.path,
      offset: l.offset + e.offset - u.start
    } : null;
  }
  var c = {
    path: e.path,
    offset: e.offset - u.text.length + u.end - u.start
  }, f = te.transform(c, t, {
    affinity: "backward"
  });
  return f ? t.type === "split_node" && D.equals(t.path, e.path) && c.offset < t.position && u.start < t.position ? f : {
    path: f.path,
    offset: f.offset + u.text.length - u.end + u.start
  } : null;
}
function za(r, e, t) {
  var n = un(r, e.anchor, t);
  if (!n)
    return null;
  if (E.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var a = un(r, e.focus, t);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function oc(r, e) {
  var {
    path: t,
    diff: n,
    id: a
  } = r;
  switch (e.type) {
    case "insert_text":
      return !D.equals(e.path, t) || e.offset >= n.end ? r : e.offset <= n.start ? {
        diff: {
          start: e.text.length + n.start,
          end: e.text.length + n.end,
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start,
          end: n.end + e.text.length,
          text: n.text
        },
        id: a,
        path: t
      };
    case "remove_text":
      return !D.equals(e.path, t) || e.offset >= n.end ? r : e.offset + e.text.length <= n.start ? {
        diff: {
          start: n.start - e.text.length,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: t
      };
    case "split_node":
      return !D.equals(e.path, t) || e.position >= n.end ? {
        diff: n,
        id: a,
        path: D.transform(t, e, {
          affinity: "backward"
        })
      } : e.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(e.position, n.end),
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start - e.position,
          end: n.end - e.position,
          text: n.text
        },
        id: a,
        path: D.transform(t, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return D.equals(e.path, t) ? {
        diff: {
          start: n.start + e.position,
          end: n.end + e.position,
          text: n.text
        },
        id: a,
        path: D.transform(t, e)
      } : {
        diff: n,
        id: a,
        path: D.transform(t, e)
      };
  }
  var u = D.transform(t, e);
  return u ? {
    diff: n,
    path: u,
    id: a
  } : null;
}
function Wa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ft(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wa(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Wa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var lc = 25, fc = 200, cc = function() {
}, vc = (r) => (r == null ? void 0 : r.constructor.name) === "DataTransfer";
function dc(r) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: t,
    onDOMSelectionChange: n
  } = r, a = !1, u = null, i = null, l = null, c = 0, f = !1, v = () => {
    var R = vr.get(e);
    if (vr.delete(e), R) {
      var {
        selection: z
      } = e, P = $a(e, R);
      P && (!z || !E.equals(P, z)) && y.select(e, P);
    }
  }, h = () => {
    var R = cr.get(e);
    if (cr.delete(e), !!R) {
      if (R.at) {
        var z = te.isPoint(R.at) ? an(e, R.at) : $a(e, R.at);
        if (!z)
          return;
        var P = s.range(e, z);
        (!e.selection || !E.equals(e.selection, P)) && y.select(e, z);
      }
      R.run();
    }
  }, m = () => {
    if (i && (clearTimeout(i), i = null), l && (clearTimeout(l), l = null), !k() && !x()) {
      v();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), x() && (a = "action");
    var R = e.selection && s.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    ir.set(e, e.marks), cc("flush", cr.get(e), $e.get(e));
    for (var z = k(), P; P = (L = $e.get(e)) === null || L === void 0 ? void 0 : L[0]; ) {
      var L, re, Y = Ze.get(e);
      Y !== void 0 && (Ze.delete(e), e.marks = Y), Y && f === !1 && (f = null);
      var ce = sc(P);
      (!e.selection || !E.equals(e.selection, ce)) && y.select(e, ce), P.diff.text ? s.insertText(e, P.diff.text) : s.deleteFragment(e), $e.set(e, (re = $e.get(e)) === null || re === void 0 ? void 0 : re.filter((me) => {
        var {
          id: ve
        } = me;
        return ve !== P.id;
      })), nc(e, P) || (z = !1, cr.delete(e), ir.delete(e), a = "action", vr.delete(e), t.cancel(), n.cancel(), R == null || R.unref());
    }
    var _ = R == null ? void 0 : R.unref();
    if (_ && !vr.get(e) && (!e.selection || !E.equals(_, e.selection)) && y.select(e, _), x()) {
      h();
      return;
    }
    z && t(), t.flush(), n.flush(), v();
    var ne = ir.get(e);
    ir.delete(e), ne !== void 0 && (e.marks = ne, e.onChange());
  }, p = (R) => {
    u && clearTimeout(u), u = setTimeout(() => {
      pr.set(e, !1), m();
    }, lc);
  }, g = (R) => {
    pr.set(e, !0), u && (clearTimeout(u), u = null);
  }, o = function() {
    var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, P = en.get(e);
    if (P) {
      if (k() || z) {
        P.style.display = "none";
        return;
      }
      P.style.removeProperty("display");
    }
  }, B = (R, z) => {
    var P, L = (P = $e.get(e)) !== null && P !== void 0 ? P : [];
    $e.set(e, L);
    var re = S.leaf(e, R), Y = L.findIndex((ne) => D.equals(ne.path, R));
    if (Y < 0) {
      var ce = Iu(re.text, z);
      ce && L.push({
        path: R,
        diff: z,
        id: c++
      }), o();
      return;
    }
    var _ = ic(re.text, L[Y].diff, z);
    if (!_) {
      L.splice(Y, 1), o();
      return;
    }
    L[Y] = ft(ft({}, L[Y]), {}, {
      diff: _
    });
  }, A = function(z) {
    var {
      at: P
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    f = !1, vr.delete(e), t.cancel(), n.cancel(), x() && m(), cr.set(e, {
      at: P,
      run: z
    }), l = setTimeout(m);
  }, b = (R) => {
    var z;
    i && (clearTimeout(i), i = null);
    var {
      inputType: P
    } = R, L = null, re = R.dataTransfer || R.data || void 0;
    f !== !1 && P !== "insertText" && P !== "insertCompositionText" && (f = !1);
    var [Y] = R.getTargetRanges();
    Y && (L = F.toSlateRange(e, Y, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var ce = F.getWindow(e), _ = ce.getSelection();
    if (!L && _ && (Y = _, L = F.toSlateRange(e, _, {
      exactMatch: !1,
      suppressThrow: !0
    })), L = (z = L) !== null && z !== void 0 ? z : e.selection, !!L) {
      var ne = !0;
      if (P.startsWith("delete")) {
        if (E.isExpanded(L)) {
          var [me, ve] = E.edges(L), Se = S.leaf(e, me.path);
          if (Se.text.length === me.offset && ve.offset === 0) {
            var C = s.next(e, {
              at: me.path,
              match: q.isText
            });
            C && D.equals(C[1], ve.path) && (L = {
              anchor: ve,
              focus: ve
            });
          }
        }
        var T = P.endsWith("Backward") ? "backward" : "forward", [w, M] = E.edges(L), [Q, K] = s.leaf(e, w.path), X = {
          text: "",
          start: w.offset,
          end: M.offset
        }, le = $e.get(e), se = le == null ? void 0 : le.find((qe) => D.equals(qe.path, K)), ge = se ? [se.diff, X] : [X], ae = ku(Q.text, ...ge);
        if (ae.length === 0 && (ne = !1), E.isExpanded(L)) {
          if (ne && D.equals(L.anchor.path, L.focus.path)) {
            var Ee = {
              path: L.anchor.path,
              offset: w.offset
            }, Ae = s.range(e, Ee, Ee);
            return j(Ae), B(L.anchor.path, {
              text: "",
              end: M.offset,
              start: w.offset
            });
          }
          return A(() => s.deleteFragment(e, {
            direction: T
          }), {
            at: L
          });
        }
      }
      switch (P) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return A(() => s.deleteFragment(e), {
            at: L
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: Ce
          } = L;
          if (ne && E.isCollapsed(L)) {
            var Ie = S.leaf(e, Ce.path);
            if (Ce.offset < Ie.text.length)
              return B(Ce.path, {
                text: "",
                start: Ce.offset,
                end: Ce.offset + 1
              });
          }
          return A(() => s.deleteForward(e), {
            at: L
          });
        }
        case "deleteContentBackward": {
          var je, {
            anchor: Te
          } = L, Ve = nn(Y) ? Y.isCollapsed : !!((je = Y) !== null && je !== void 0 && je.collapsed);
          return ne && Ve && E.isCollapsed(L) && Te.offset > 0 ? B(Te.path, {
            text: "",
            start: Te.offset - 1,
            end: Te.offset
          }) : A(() => s.deleteBackward(e), {
            at: L
          });
        }
        case "deleteEntireSoftLine":
          return A(() => {
            s.deleteBackward(e, {
              unit: "line"
            }), s.deleteForward(e, {
              unit: "line"
            });
          }, {
            at: L
          });
        case "deleteHardLineBackward":
          return A(() => s.deleteBackward(e, {
            unit: "block"
          }), {
            at: L
          });
        case "deleteSoftLineBackward":
          return A(() => s.deleteBackward(e, {
            unit: "line"
          }), {
            at: L
          });
        case "deleteHardLineForward":
          return A(() => s.deleteForward(e, {
            unit: "block"
          }), {
            at: L
          });
        case "deleteSoftLineForward":
          return A(() => s.deleteForward(e, {
            unit: "line"
          }), {
            at: L
          });
        case "deleteWordBackward":
          return A(() => s.deleteBackward(e, {
            unit: "word"
          }), {
            at: L
          });
        case "deleteWordForward":
          return A(() => s.deleteForward(e, {
            unit: "word"
          }), {
            at: L
          });
        case "insertLineBreak":
          return A(() => s.insertSoftBreak(e), {
            at: L
          });
        case "insertParagraph":
          return A(() => s.insertBreak(e), {
            at: L
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (vc(re))
            return A(() => F.insertData(e, re), {
              at: L
            });
          var de = re ?? "";
          if (Ze.get(e) && (de = de.replace("\uFEFF", "")), P === "insertText" && /.*\n.*\n$/.test(de) && (de = de.slice(0, -1)), de.includes(`
`))
            return A(() => {
              var qe = de.split(`
`);
              qe.forEach((er, mr) => {
                er && s.insertText(e, er), mr !== qe.length - 1 && s.insertSoftBreak(e);
              });
            }, {
              at: L
            });
          if (D.equals(L.anchor.path, L.focus.path)) {
            var [xe, ye] = E.edges(L), Fe = {
              start: xe.offset,
              end: ye.offset,
              text: de
            };
            if (de && f && P === "insertCompositionText") {
              var Le = f.start + f.text.search(/\S|$/), Qe = Fe.start + Fe.text.search(/\S|$/);
              Qe === Le + 1 && Fe.end === f.start + f.text.length ? (Fe.start -= 1, f = null, H()) : f = !1;
            } else
              P === "insertText" ? f === null ? f = Fe : f && E.isCollapsed(L) && f.end + f.text.length === xe.offset ? f = ft(ft({}, f), {}, {
                text: f.text + de
              }) : f = !1 : f = !1;
            if (ne) {
              B(xe.path, Fe);
              return;
            }
          }
          return A(() => s.insertText(e, de), {
            at: L
          });
        }
      }
    }
  }, x = () => !!cr.get(e), k = () => {
    var R;
    return !!((R = $e.get(e)) !== null && R !== void 0 && R.length);
  }, I = () => x() || k(), $ = () => a, j = (R) => {
    vr.set(e, R), i && (clearTimeout(i), i = null);
    var {
      selection: z
    } = e;
    if (R) {
      var P = !z || !D.equals(z.anchor.path, R.anchor.path), L = !z || !D.equals(z.anchor.path.slice(0, -1), R.anchor.path.slice(0, -1));
      (P && f || L) && (f = !1), (P || k()) && (i = setTimeout(m, fc));
    }
  }, U = () => {
    (x() || !k()) && m();
  }, N = (R) => {
    k() || (o(!0), setTimeout(o));
  }, H = () => {
    x() || (l = setTimeout(m));
  }, G = (R) => {
    if (!(k() || x()) && R.some((P) => Fn(e, P, R))) {
      var z;
      (z = Tu.get(e)) === null || z === void 0 || z();
    }
  };
  return {
    flush: m,
    scheduleFlush: H,
    hasPendingDiffs: k,
    hasPendingAction: x,
    hasPendingChanges: I,
    isFlushing: $,
    handleUserSelect: j,
    handleCompositionEnd: p,
    handleCompositionStart: g,
    handleDOMBeforeInput: b,
    handleKeyDown: N,
    handleDomMutations: G,
    handleInput: U
  };
}
function Dc() {
  var r = He(!1);
  return sr(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r.current;
}
var rt = Dt ? ni : sr;
function hc(r, e, t) {
  var [n] = Dr(() => new MutationObserver(e));
  rt(() => {
    n.takeRecords();
  }), sr(() => {
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(r.current, t), () => n.disconnect();
  }, [n, r, t]);
}
var gc = ["node"];
function Va(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function mc(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Va(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Va(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Cc = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, pc = We ? (r) => {
  var {
    node: e
  } = r, t = Nr(r, gc);
  if (!We)
    return null;
  var n = gr(), a = Dc(), [u] = Dr(() => dc(mc({
    editor: n
  }, t)));
  return hc(e, u.handleDomMutations, Cc), An.set(n, u.scheduleFlush), a && u.flush(), u;
} : () => null, Bc = ["anchor", "focus"], Ec = ["anchor", "focus"], Ac = (r, e) => Object.keys(r).length === Object.keys(e).length && Object.keys(r).every((t) => e.hasOwnProperty(t) && r[t] === e[t]), Lu = (r, e) => {
  var t = Nr(r, Bc), n = Nr(e, Ec);
  return r[Mr] === e[Mr] && Ac(t, n);
}, bc = (r, e) => {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++) {
    var n = r[t], a = e[t];
    if (!E.equals(n, a) || !Lu(n, a))
      return !1;
  }
  return !0;
}, Fc = (r, e) => {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++) {
    var n = r[t], a = e[t];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Lu(n, a))
      return !1;
  }
  return !0;
};
function qa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function wc(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qa(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : qa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var yc = (r) => {
  var {
    isLast: e,
    leaf: t,
    parent: n,
    text: a
  } = r, u = gr(), i = F.findPath(u, a), l = D.parent(i), c = !!t[Ru];
  return u.isVoid(n) ? /* @__PURE__ */ Z.createElement(Kt, {
    length: S.string(n).length
  }) : t.text === "" && n.children[n.children.length - 1] === a && !u.isInline(n) && s.string(u, l) === "" ? /* @__PURE__ */ Z.createElement(Kt, {
    isLineBreak: !0,
    isMarkPlaceholder: c
  }) : t.text === "" ? /* @__PURE__ */ Z.createElement(Kt, {
    isMarkPlaceholder: c
  }) : e && t.text.slice(-1) === `
` ? /* @__PURE__ */ Z.createElement(Ha, {
    isTrailing: !0,
    text: t.text
  }) : /* @__PURE__ */ Z.createElement(Ha, {
    text: t.text
  });
}, Ha = (r) => {
  var {
    text: e,
    isTrailing: t = !1
  } = r, n = He(null), a = () => "".concat(e ?? "").concat(t ? `
` : ""), [u] = Dr(a);
  return rt(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ Z.createElement(Oc, {
    ref: n
  }, u);
}, Oc = /* @__PURE__ */ ui(/* @__PURE__ */ ru((r, e) => /* @__PURE__ */ Z.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, r.children))), Kt = (r) => {
  var {
    length: e = 0,
    isLineBreak: t = !1,
    isMarkPlaceholder: n = !1
  } = r, a = {
    "data-slate-zero-width": t ? "n" : "z",
    "data-slate-length": e
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ Z.createElement("span", wc({}, a), !We || !t ? "\uFEFF" : null, t ? /* @__PURE__ */ Z.createElement("br", null) : null);
};
function Ka(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function $u(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ka(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ka(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function xc(r, e) {
  r.current && (r.current.disconnect(), e && (r.current = null));
}
function Ua(r) {
  r.current && (clearTimeout(r.current), r.current = null);
}
var Pc = (r) => {
  var {
    leaf: e,
    isLast: t,
    text: n,
    parent: a,
    renderPlaceholder: u,
    renderLeaf: i = (b) => /* @__PURE__ */ Z.createElement(Tc, $u({}, b))
  } = r, l = gr(), c = He(null), f = He(null), [v, h] = Dr(!1), m = He(null), p = De((b) => {
    if (xc(c, b == null), b == null) {
      var x;
      en.delete(l), (x = e.onPlaceholderResize) === null || x === void 0 || x.call(e, null);
    } else {
      if (en.set(l, b), !c.current) {
        var k = window.ResizeObserver || jf;
        c.current = new k(() => {
          var I;
          (I = e.onPlaceholderResize) === null || I === void 0 || I.call(e, b);
        });
      }
      c.current.observe(b), f.current = b;
    }
  }, [f, e, l]), g = /* @__PURE__ */ Z.createElement(yc, {
    isLast: t,
    leaf: e,
    parent: a,
    text: n
  }), o = !!e[Mr];
  if (sr(() => (o ? m.current || (m.current = setTimeout(() => {
    h(!0), m.current = null;
  }, 300)) : (Ua(m), h(!1)), () => Ua(m)), [o, h]), o && v) {
    var B = {
      children: e.placeholder,
      attributes: {
        "data-slate-placeholder": !0,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: Hr ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: p
      }
    };
    g = /* @__PURE__ */ Z.createElement(Z.Fragment, null, u(B), g);
  }
  var A = {
    "data-slate-leaf": !0
  };
  return i({
    attributes: A,
    children: g,
    leaf: e,
    text: n
  });
}, Sc = /* @__PURE__ */ Z.memo(Pc, (r, e) => e.parent === r.parent && e.isLast === r.isLast && e.renderLeaf === r.renderLeaf && e.renderPlaceholder === r.renderPlaceholder && e.text === r.text && q.equals(e.leaf, r.leaf) && e.leaf[Mr] === r.leaf[Mr]), Tc = (r) => {
  var {
    attributes: e,
    children: t
  } = r;
  return /* @__PURE__ */ Z.createElement("span", $u({}, e), t);
}, Rc = (r) => {
  for (var {
    decorations: e,
    isLast: t,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: u,
    text: i
  } = r, l = gr(), c = He(null), f = q.decorations(i, e), v = F.findKey(l, i), h = [], m = 0; m < f.length; m++) {
    var p = f[m];
    h.push(/* @__PURE__ */ Z.createElement(Sc, {
      isLast: t && m === f.length - 1,
      key: "".concat(v.id, "-").concat(m),
      renderPlaceholder: a,
      leaf: p,
      text: i,
      parent: n,
      renderLeaf: u
    }));
  }
  var g = De((o) => {
    var B = xt.get(l);
    o ? (B == null || B.set(v, o), Ar.set(i, o), et.set(o, i)) : (B == null || B.delete(v), Ar.delete(i), c.current && et.delete(c.current)), c.current = o;
  }, [c, l, v, i]);
  return /* @__PURE__ */ Z.createElement("span", {
    "data-slate-node": "text",
    ref: g
  }, h);
}, zu = /* @__PURE__ */ Z.memo(Rc, (r, e) => e.parent === r.parent && e.isLast === r.isLast && e.renderLeaf === r.renderLeaf && e.renderPlaceholder === r.renderPlaceholder && e.text === r.text && Fc(e.decorations, r.decorations));
function Ya(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function sn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ya(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ya(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var jc = (r) => {
  var {
    decorations: e,
    element: t,
    renderElement: n = (b) => /* @__PURE__ */ Z.createElement(Mc, sn({}, b)),
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  } = r, l = gr(), c = Lc(), f = l.isInline(t), v = F.findKey(l, t), h = De((b) => {
    var x = xt.get(l);
    b ? (x == null || x.set(v, b), Ar.set(t, b), et.set(b, t)) : (x == null || x.delete(v), Ar.delete(t));
  }, [l, v, t]), m = Vu({
    decorations: e,
    node: t,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  }), p = {
    "data-slate-node": "element",
    ref: h
  };
  if (f && (p["data-slate-inline"] = !0), !f && s.hasInlines(l, t)) {
    var g = S.string(t), o = du(g);
    o === "rtl" && (p.dir = o);
  }
  if (s.isVoid(l, t)) {
    p["data-slate-void"] = !0, !c && f && (p.contentEditable = !1);
    var B = f ? "span" : "div", [[A]] = S.texts(t);
    m = /* @__PURE__ */ Z.createElement(B, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ Z.createElement(zu, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: t,
      text: A
    })), Bn.set(A, 0), En.set(A, t);
  }
  return n({
    attributes: p,
    children: m,
    element: t
  });
}, Nc = /* @__PURE__ */ Z.memo(jc, (r, e) => r.element === e.element && r.renderElement === e.renderElement && r.renderLeaf === e.renderLeaf && r.renderPlaceholder === e.renderPlaceholder && bc(r.decorations, e.decorations) && (r.selection === e.selection || !!r.selection && !!e.selection && E.equals(r.selection, e.selection))), Mc = (r) => {
  var {
    attributes: e,
    children: t,
    element: n
  } = r, a = gr(), u = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ Z.createElement(u, sn(sn({}, e), {}, {
    style: {
      position: "relative"
    }
  }), t);
}, Wu = /* @__PURE__ */ yr(() => []), kc = () => At(Wu), Ic = /* @__PURE__ */ yr(!1), Vu = (r) => {
  for (var {
    decorations: e,
    node: t,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  } = r, l = kc(), c = gr(), f = F.findPath(c, t), v = [], h = V.isElement(t) && !c.isInline(t) && s.hasInlines(c, t), m = 0; m < t.children.length; m++) {
    var p = f.concat(m), g = t.children[m], o = F.findKey(c, g), B = s.range(c, p), A = i && E.intersection(B, i), b = l([g, p]);
    for (var x of e) {
      var k = E.intersection(x, B);
      k && b.push(k);
    }
    V.isElement(g) ? v.push(/* @__PURE__ */ Z.createElement(Ic.Provider, {
      key: "provider-".concat(o.id),
      value: !!A
    }, /* @__PURE__ */ Z.createElement(Nc, {
      decorations: b,
      element: g,
      key: o.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: u,
      selection: A
    }))) : v.push(/* @__PURE__ */ Z.createElement(zu, {
      decorations: b,
      key: o.id,
      isLast: h && m === t.children.length - 1,
      parent: t,
      renderPlaceholder: a,
      renderLeaf: u,
      text: g
    })), Bn.set(g, m), En.set(g, t);
  }
  return v;
}, qu = /* @__PURE__ */ yr(!1), Lc = () => At(qu), Hu = /* @__PURE__ */ yr(null), wn = () => {
  var r = At(Hu);
  if (!r)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = r;
  return e;
};
function $c() {
  var r = gr(), e = He(!1), t = He(0), n = De(() => {
    if (!e.current) {
      e.current = !0;
      var a = F.getWindow(r);
      a.cancelAnimationFrame(t.current), t.current = a.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [r]);
  return sr(() => () => cancelAnimationFrame(t.current), []), {
    receivedUserInput: e,
    onUserInput: n
  };
}
var zc = 3, Wc = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, Vc = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, qc = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Be = (r) => {
  var e = Wc[r], t = Vc[r], n = qc[r], a = e && Ht(e), u = t && Ht(t), i = n && Ht(n);
  return (l) => !!(a && a(l) || La && u && u(l) || !La && i && i(l));
}, be = {
  isBold: Be("bold"),
  isCompose: Be("compose"),
  isMoveBackward: Be("moveBackward"),
  isMoveForward: Be("moveForward"),
  isDeleteBackward: Be("deleteBackward"),
  isDeleteForward: Be("deleteForward"),
  isDeleteLineBackward: Be("deleteLineBackward"),
  isDeleteLineForward: Be("deleteLineForward"),
  isDeleteWordBackward: Be("deleteWordBackward"),
  isDeleteWordForward: Be("deleteWordForward"),
  isExtendBackward: Be("extendBackward"),
  isExtendForward: Be("extendForward"),
  isExtendLineBackward: Be("extendLineBackward"),
  isExtendLineForward: Be("extendLineForward"),
  isItalic: Be("italic"),
  isMoveLineBackward: Be("moveLineBackward"),
  isMoveLineForward: Be("moveLineForward"),
  isMoveWordBackward: Be("moveWordBackward"),
  isMoveWordForward: Be("moveWordForward"),
  isRedo: Be("redo"),
  isSoftBreak: Be("insertSoftBreak"),
  isSplitBlock: Be("splitBlock"),
  isTransposeCharacter: Be("transposeCharacter"),
  isUndo: Be("undo")
}, Hc = (r, e) => {
  var t = [], n = () => {
    t = [];
  }, a = (i) => {
    if (e.current) {
      var l = i.filter((c) => Fn(r, c, i));
      t.push(...l);
    }
  };
  function u() {
    t.length > 0 && (t.reverse().forEach((i) => {
      i.type !== "characterData" && (i.removedNodes.forEach((l) => {
        i.target.insertBefore(l, i.nextSibling);
      }), i.addedNodes.forEach((l) => {
        i.target.removeChild(l);
      }));
    }), n());
  }
  return {
    registerMutations: a,
    restoreDOM: u,
    clear: n
  };
}, Kc = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Ku extends ai {
  constructor() {
    super(...arguments), Xe(this, "context", null), Xe(this, "manager", null), Xe(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: t
    } = this.props;
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(t.current, Kc);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, t = this.context;
    this.manager = Hc(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, t, n, a = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (a != null && a.length) {
      var u;
      (u = this.manager) === null || u === void 0 || u.registerMutations(a);
    }
    return (t = this.mutationObserver) === null || t === void 0 || t.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
  }
  componentDidUpdate() {
    var e;
    (e = this.manager) === null || e === void 0 || e.clear(), this.observe();
  }
  componentWillUnmount() {
    var e;
    (e = this.mutationObserver) === null || e === void 0 || e.disconnect();
  }
  render() {
    return this.props.children;
  }
}
Xe(Ku, "contextType", pn);
var Uc = We ? Ku : (r) => {
  var {
    children: e
  } = r;
  return /* @__PURE__ */ Z.createElement(Z.Fragment, null, e);
}, Yc = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], _c = ["text"];
function _a(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function tr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _a(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : _a(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Gc = (r) => /* @__PURE__ */ Z.createElement(Z.Fragment, null, Vu(r)), Xc = (r) => {
  var e = De((C) => /* @__PURE__ */ Z.createElement(Jc, tr({}, C)), []), {
    autoFocus: t,
    decorate: n = Zc,
    onDOMBeforeInput: a,
    placeholder: u,
    readOnly: i = !1,
    renderElement: l,
    renderLeaf: c,
    renderPlaceholder: f = e,
    scrollSelectionIntoView: v = Qc,
    style: h = {},
    as: m = "div",
    disableDefaultStyles: p = !1
  } = r, g = Nr(r, Yc), o = wn(), [B, A] = Dr(!1), b = He(null), x = He([]), [k, I] = Dr(), {
    onUserInput: $,
    receivedUserInput: j
  } = $c(), [, U] = ti((C) => C + 1, 0);
  Tu.set(o, U), rn.set(o, i);
  var N = vt(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  sr(() => {
    b.current && t && b.current.focus();
  }, [t]);
  var H = He(), G = vt(() => lf(() => {
    var C = H.current;
    if ((We || !F.isComposing(o)) && (!N.isUpdatingSelection || C != null && C.isFlushing()) && !N.isDraggingInternally) {
      var T = F.findDocumentOrShadowRoot(o), {
        activeElement: w
      } = T, M = F.toDOMNode(o, o), Q = T.getSelection();
      if (w === M ? (N.latestElement = w, dr.set(o, !0)) : dr.delete(o), !Q)
        return y.deselect(o);
      var {
        anchorNode: K,
        focusNode: X
      } = Q, le = F.hasEditableTarget(o, K) || F.isTargetInsideNonReadonlyVoid(o, K), se = F.hasEditableTarget(o, X) || F.isTargetInsideNonReadonlyVoid(o, X);
      if (le && se) {
        var ge = F.toSlateRange(o, Q, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ge && (!F.isComposing(o) && !(C != null && C.hasPendingChanges()) && !(C != null && C.isFlushing()) ? y.select(o, ge) : C == null || C.handleUserSelect(ge));
      }
      i && (!le || !se) && y.deselect(o);
    }
  }, 100), [o, i, N]), R = vt(() => tf(G, 0), [G]);
  H.current = pc({
    node: b,
    onDOMSelectionChange: G,
    scheduleOnDOMSelectionChange: R
  }), rt(() => {
    var C, T, w;
    b.current && (w = bn(b.current)) ? (Su.set(o, w), ht.set(o, b.current), Ar.set(o, b.current), et.set(b.current, o)) : Ar.delete(o);
    var {
      selection: M
    } = o, Q = F.findDocumentOrShadowRoot(o), K = Q.getSelection();
    if (!(!K || !F.isFocused(o) || (C = H.current) !== null && C !== void 0 && C.hasPendingAction())) {
      var X = (ae) => {
        var Ee = K.type !== "None";
        if (!(!M && !Ee)) {
          var Ae = K.focusNode, Ce;
          if (Tr && K.rangeCount > 1) {
            var Ie = K.getRangeAt(0), je = K.getRangeAt(K.rangeCount - 1);
            Ie.startContainer === Ae ? Ce = je.endContainer : Ce = Ie.startContainer;
          } else
            Ce = K.anchorNode;
          var Te = ht.get(o), Ve = !1;
          if (Te.contains(Ce) && Te.contains(Ae) && (Ve = !0), Ee && Ve && M && !ae) {
            var de = F.toSlateRange(o, K, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (de && E.equals(de, M)) {
              var xe;
              if (!N.hasMarkPlaceholder || (xe = Ce) !== null && xe !== void 0 && (xe = xe.parentElement) !== null && xe !== void 0 && xe.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (M && !F.hasRange(o, M)) {
            o.selection = F.toSlateRange(o, K, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          N.isUpdatingSelection = !0;
          var ye = M && F.toDOMRange(o, M);
          return ye ? (F.isComposing(o) && !We ? K.collapseToEnd() : E.isBackward(M) ? K.setBaseAndExtent(ye.endContainer, ye.endOffset, ye.startContainer, ye.startOffset) : K.setBaseAndExtent(ye.startContainer, ye.startOffset, ye.endContainer, ye.endOffset), v(o, ye)) : K.removeAllRanges(), ye;
        }
      };
      K.rangeCount <= 1 && X();
      var le = ((T = H.current) === null || T === void 0 ? void 0 : T.isFlushing()) === "action";
      if (!We || !le) {
        setTimeout(() => {
          N.isUpdatingSelection = !1;
        });
        return;
      }
      var se = null, ge = requestAnimationFrame(() => {
        if (le) {
          var ae = (Ee) => {
            try {
              var Ae = F.toDOMNode(o, o);
              Ae.focus(), X(Ee);
            } catch {
            }
          };
          ae(), se = setTimeout(() => {
            ae(!0), N.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ge), se && clearTimeout(se);
      };
    }
  });
  var z = De((C) => {
    if ($(), !i && F.hasEditableTarget(o, C.target) && !ev(C, a)) {
      var T;
      if (H.current)
        return H.current.handleDOMBeforeInput(C);
      R.flush(), G.flush();
      var {
        selection: w
      } = o, {
        inputType: M
      } = C, Q = C.dataTransfer || C.data || void 0, K = M === "insertCompositionText" || M === "deleteCompositionText";
      if (K && F.isComposing(o))
        return;
      var X = !1;
      if (M === "insertText" && w && E.isCollapsed(w) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      C.data && C.data.length === 1 && /[a-z ]/i.test(C.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      w.anchor.offset !== 0) {
        var le, se;
        X = !0, o.marks && (X = !1);
        var {
          anchor: ge
        } = w, [ae, Ee] = F.toDOMPoint(o, ge), Ae = (le = ae.parentElement) === null || le === void 0 ? void 0 : le.closest("a"), Ce = F.getWindow(o);
        if (X && Ae && F.hasDOMNode(o, Ae)) {
          var Ie, je = Ce == null ? void 0 : Ce.document.createTreeWalker(Ae, NodeFilter.SHOW_TEXT).lastChild();
          je === ae && ((Ie = je.textContent) === null || Ie === void 0 ? void 0 : Ie.length) === Ee && (X = !1);
        }
        if (X && ae.parentElement && (Ce == null || (se = Ce.getComputedStyle(ae.parentElement)) === null || se === void 0 ? void 0 : se.whiteSpace) === "pre") {
          var Te = s.above(o, {
            at: ge.path,
            match: (Le) => V.isElement(Le) && s.isBlock(o, Le)
          });
          Te && S.string(Te[0]).includes("	") && (X = !1);
        }
      }
      if (!M.startsWith("delete") || M.startsWith("deleteBy")) {
        var [Ve] = C.getTargetRanges();
        if (Ve) {
          var de = F.toSlateRange(o, Ve, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!w || !E.equals(w, de)) {
            X = !1;
            var xe = !K && o.selection && s.rangeRef(o, o.selection);
            y.select(o, de), xe && Yr.set(o, xe);
          }
        }
      }
      if (K)
        return;
      if (X || C.preventDefault(), w && E.isExpanded(w) && M.startsWith("delete")) {
        var ye = M.endsWith("Backward") ? "backward" : "forward";
        s.deleteFragment(o, {
          direction: ye
        });
        return;
      }
      switch (M) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          s.deleteFragment(o);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          s.deleteForward(o);
          break;
        }
        case "deleteContentBackward": {
          s.deleteBackward(o);
          break;
        }
        case "deleteEntireSoftLine": {
          s.deleteBackward(o, {
            unit: "line"
          }), s.deleteForward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          s.deleteBackward(o, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          s.deleteBackward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          s.deleteForward(o, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          s.deleteForward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          s.deleteBackward(o, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          s.deleteForward(o, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          s.insertSoftBreak(o);
          break;
        case "insertParagraph": {
          s.insertBreak(o);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          M === "insertFromComposition" && F.isComposing(o) && (A(!1), pr.set(o, !1)), (Q == null ? void 0 : Q.constructor.name) === "DataTransfer" ? F.insertData(o, Q) : typeof Q == "string" && (X ? x.current.push(() => s.insertText(o, Q)) : s.insertText(o, Q));
          break;
        }
      }
      var Fe = (T = Yr.get(o)) === null || T === void 0 ? void 0 : T.unref();
      Yr.delete(o), Fe && (!o.selection || !E.equals(o.selection, Fe)) && y.select(o, Fe);
    }
  }, [o, G, $, a, i, R]), P = De((C) => {
    C == null ? (G.cancel(), R.cancel(), ht.delete(o), Ar.delete(o), b.current && fr && b.current.removeEventListener("beforeinput", z)) : fr && C.addEventListener("beforeinput", z), b.current = C;
  }, [G, R, o, z]);
  rt(() => {
    var C = F.getWindow(o);
    return C.document.addEventListener("selectionchange", R), () => {
      C.document.removeEventListener("selectionchange", R);
    };
  }, [R]);
  var L = n([o, []]), re = u && o.children.length === 1 && Array.from(S.texts(o)).length === 1 && S.string(o) === "" && !B, Y = De((C) => {
    if (C && re) {
      var T;
      I((T = C.getBoundingClientRect()) === null || T === void 0 ? void 0 : T.height);
    } else
      I(void 0);
  }, [re]);
  if (re) {
    var ce = s.start(o, []);
    L.push({
      [Mr]: !0,
      placeholder: u,
      onPlaceholderResize: Y,
      anchor: ce,
      focus: ce
    });
  }
  var {
    marks: _
  } = o;
  if (N.hasMarkPlaceholder = !1, o.selection && E.isCollapsed(o.selection) && _) {
    var {
      anchor: ne
    } = o.selection, me = S.leaf(o, ne.path), ve = Nr(me, _c);
    if (!q.equals(me, _, {
      loose: !0
    })) {
      N.hasMarkPlaceholder = !0;
      var Se = Object.fromEntries(Object.keys(ve).map((C) => [C, null]));
      L.push(tr(tr(tr({
        [Ru]: !0
      }, Se), _), {}, {
        anchor: ne,
        focus: ne
      }));
    }
  }
  return sr(() => {
    setTimeout(() => {
      var {
        selection: C
      } = o;
      if (C) {
        var {
          anchor: T
        } = C, w = S.leaf(o, T.path);
        if (_ && !q.equals(w, _, {
          loose: !0
        })) {
          Ze.set(o, _);
          return;
        }
      }
      Ze.delete(o);
    });
  }), /* @__PURE__ */ Z.createElement(qu.Provider, {
    value: i
  }, /* @__PURE__ */ Z.createElement(Wu.Provider, {
    value: n
  }, /* @__PURE__ */ Z.createElement(Uc, {
    node: b,
    receivedUserInput: j
  }, /* @__PURE__ */ Z.createElement(m, tr(tr({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, g), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: fr || !Dt ? g.spellCheck : !1,
    autoCorrect: fr || !Dt ? g.autoCorrect : "false",
    autoCapitalize: fr || !Dt ? g.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !i,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: P,
    style: tr(tr({}, p ? {} : tr({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, k ? {
      minHeight: k
    } : {})), h),
    onBeforeInput: De((C) => {
      if (!fr && !i && !Me(C, g.onBeforeInput) && F.hasSelectableTarget(o, C.target) && (C.preventDefault(), !F.isComposing(o))) {
        var T = C.data;
        s.insertText(o, T);
      }
    }, [g.onBeforeInput, o, i]),
    onInput: De((C) => {
      if (!Me(C, g.onInput)) {
        if (H.current) {
          H.current.handleInput();
          return;
        }
        for (var T of x.current)
          T();
        x.current = [];
      }
    }, [g.onInput]),
    onBlur: De((C) => {
      if (!(i || N.isUpdatingSelection || !F.hasSelectableTarget(o, C.target) || Me(C, g.onBlur))) {
        var T = F.findDocumentOrShadowRoot(o);
        if (N.latestElement !== T.activeElement) {
          var {
            relatedTarget: w
          } = C, M = F.toDOMNode(o, o);
          if (w !== M && !(Ge(w) && w.hasAttribute("data-slate-spacer"))) {
            if (w != null && hr(w) && F.hasDOMNode(o, w)) {
              var Q = F.toSlateNode(o, w);
              if (V.isElement(Q) && !o.isVoid(Q))
                return;
            }
            if (Hr) {
              var K = T.getSelection();
              K == null || K.removeAllRanges();
            }
            dr.delete(o);
          }
        }
      }
    }, [i, N.isUpdatingSelection, N.latestElement, o, g.onBlur]),
    onClick: De((C) => {
      if (F.hasTarget(o, C.target) && !Me(C, g.onClick) && hr(C.target)) {
        var T = F.toSlateNode(o, C.target), w = F.findPath(o, T);
        if (!s.hasPath(o, w) || S.get(o, w) !== T)
          return;
        if (C.detail === zc && w.length >= 1) {
          var M = w;
          if (!(V.isElement(T) && s.isBlock(o, T))) {
            var Q, K = s.above(o, {
              match: (Ae) => V.isElement(Ae) && s.isBlock(o, Ae),
              at: w
            });
            M = (Q = K == null ? void 0 : K[1]) !== null && Q !== void 0 ? Q : w.slice(0, 1);
          }
          var X = s.range(o, M);
          y.select(o, X);
          return;
        }
        if (i)
          return;
        var le = s.start(o, w), se = s.end(o, w), ge = s.void(o, {
          at: le
        }), ae = s.void(o, {
          at: se
        });
        if (ge && ae && D.equals(ge[1], ae[1])) {
          var Ee = s.range(o, le);
          y.select(o, Ee);
        }
      }
    }, [o, g.onClick, i]),
    onCompositionEnd: De((C) => {
      if (F.hasSelectableTarget(o, C.target)) {
        var T;
        if (F.isComposing(o) && (A(!1), pr.set(o, !1)), (T = H.current) === null || T === void 0 || T.handleCompositionEnd(C), Me(C, g.onCompositionEnd) || We)
          return;
        if (!Hr && !Hf && !zf && !Uf && !Kf && C.data) {
          var w = Ze.get(o);
          Ze.delete(o), w !== void 0 && (ir.set(o, o.marks), o.marks = w), s.insertText(o, C.data);
          var M = ir.get(o);
          ir.delete(o), M !== void 0 && (o.marks = M);
        }
      }
    }, [g.onCompositionEnd, o]),
    onCompositionUpdate: De((C) => {
      F.hasSelectableTarget(o, C.target) && !Me(C, g.onCompositionUpdate) && (F.isComposing(o) || (A(!0), pr.set(o, !0)));
    }, [g.onCompositionUpdate, o]),
    onCompositionStart: De((C) => {
      if (F.hasSelectableTarget(o, C.target)) {
        var T;
        if ((T = H.current) === null || T === void 0 || T.handleCompositionStart(C), Me(C, g.onCompositionStart) || We)
          return;
        A(!0);
        var {
          selection: w
        } = o;
        if (w) {
          if (E.isExpanded(w)) {
            s.deleteFragment(o);
            return;
          }
          var M = s.above(o, {
            match: (X) => V.isElement(X) && s.isInline(o, X),
            mode: "highest"
          });
          if (M) {
            var [, Q] = M;
            if (s.isEnd(o, w.anchor, Q)) {
              var K = s.after(o, Q);
              y.setSelection(o, {
                anchor: K,
                focus: K
              });
            }
          }
        }
      }
    }, [g.onCompositionStart, o]),
    onCopy: De((C) => {
      F.hasSelectableTarget(o, C.target) && !Me(C, g.onCopy) && !Ga(C) && (C.preventDefault(), F.setFragmentData(o, C.clipboardData, "copy"));
    }, [g.onCopy, o]),
    onCut: De((C) => {
      if (!i && F.hasSelectableTarget(o, C.target) && !Me(C, g.onCut) && !Ga(C)) {
        C.preventDefault(), F.setFragmentData(o, C.clipboardData, "cut");
        var {
          selection: T
        } = o;
        if (T)
          if (E.isExpanded(T))
            s.deleteFragment(o);
          else {
            var w = S.parent(o, T.anchor.path);
            s.isVoid(o, w) && y.delete(o);
          }
      }
    }, [i, o, g.onCut]),
    onDragOver: De((C) => {
      if (F.hasTarget(o, C.target) && !Me(C, g.onDragOver)) {
        var T = F.toSlateNode(o, C.target);
        V.isElement(T) && s.isVoid(o, T) && C.preventDefault();
      }
    }, [g.onDragOver, o]),
    onDragStart: De((C) => {
      if (!i && F.hasTarget(o, C.target) && !Me(C, g.onDragStart)) {
        var T = F.toSlateNode(o, C.target), w = F.findPath(o, T), M = V.isElement(T) && s.isVoid(o, T) || s.void(o, {
          at: w,
          voids: !0
        });
        if (M) {
          var Q = s.range(o, w);
          y.select(o, Q);
        }
        N.isDraggingInternally = !0, F.setFragmentData(o, C.dataTransfer, "drag");
      }
    }, [i, o, g.onDragStart, N]),
    onDrop: De((C) => {
      if (!i && F.hasTarget(o, C.target) && !Me(C, g.onDrop)) {
        C.preventDefault();
        var T = o.selection, w = F.findEventRange(o, C), M = C.dataTransfer;
        y.select(o, w), N.isDraggingInternally && T && !E.equals(T, w) && !s.void(o, {
          at: w,
          voids: !0
        }) && y.delete(o, {
          at: T
        }), F.insertData(o, M), F.isFocused(o) || F.focus(o);
      }
      N.isDraggingInternally = !1;
    }, [i, o, g.onDrop, N]),
    onDragEnd: De((C) => {
      !i && N.isDraggingInternally && g.onDragEnd && F.hasTarget(o, C.target) && g.onDragEnd(C), N.isDraggingInternally = !1;
    }, [i, N, g, o]),
    onFocus: De((C) => {
      if (!i && !N.isUpdatingSelection && F.hasEditableTarget(o, C.target) && !Me(C, g.onFocus)) {
        var T = F.toDOMNode(o, o), w = F.findDocumentOrShadowRoot(o);
        if (N.latestElement = w.activeElement, Tr && C.target !== T) {
          T.focus();
          return;
        }
        dr.set(o, !0);
      }
    }, [i, N, o, g.onFocus]),
    onKeyDown: De((C) => {
      if (!i && F.hasEditableTarget(o, C.target)) {
        var T;
        (T = H.current) === null || T === void 0 || T.handleKeyDown(C);
        var {
          nativeEvent: w
        } = C;
        if (F.isComposing(o) && w.isComposing === !1 && (pr.set(o, !1), A(!1)), Me(C, g.onKeyDown) || F.isComposing(o))
          return;
        var {
          selection: M
        } = o, Q = o.children[M !== null ? M.focus.path[0] : 0], K = du(S.string(Q)) === "rtl";
        if (be.isRedo(w)) {
          C.preventDefault();
          var X = o;
          typeof X.redo == "function" && X.redo();
          return;
        }
        if (be.isUndo(w)) {
          C.preventDefault();
          var le = o;
          typeof le.undo == "function" && le.undo();
          return;
        }
        if (be.isMoveLineBackward(w)) {
          C.preventDefault(), y.move(o, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (be.isMoveLineForward(w)) {
          C.preventDefault(), y.move(o, {
            unit: "line"
          });
          return;
        }
        if (be.isExtendLineBackward(w)) {
          C.preventDefault(), y.move(o, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (be.isExtendLineForward(w)) {
          C.preventDefault(), y.move(o, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (be.isMoveBackward(w)) {
          C.preventDefault(), M && E.isCollapsed(M) ? y.move(o, {
            reverse: !K
          }) : y.collapse(o, {
            edge: "start"
          });
          return;
        }
        if (be.isMoveForward(w)) {
          C.preventDefault(), M && E.isCollapsed(M) ? y.move(o, {
            reverse: K
          }) : y.collapse(o, {
            edge: "end"
          });
          return;
        }
        if (be.isMoveWordBackward(w)) {
          C.preventDefault(), M && E.isExpanded(M) && y.collapse(o, {
            edge: "focus"
          }), y.move(o, {
            unit: "word",
            reverse: !K
          });
          return;
        }
        if (be.isMoveWordForward(w)) {
          C.preventDefault(), M && E.isExpanded(M) && y.collapse(o, {
            edge: "focus"
          }), y.move(o, {
            unit: "word",
            reverse: K
          });
          return;
        }
        if (fr) {
          if ((Pu || Hr) && M && (be.isDeleteBackward(w) || be.isDeleteForward(w)) && E.isCollapsed(M)) {
            var se = S.parent(o, M.anchor.path);
            if (V.isElement(se) && s.isVoid(o, se) && (s.isInline(o, se) || s.isBlock(o, se))) {
              C.preventDefault(), s.deleteBackward(o, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (be.isBold(w) || be.isItalic(w) || be.isTransposeCharacter(w)) {
            C.preventDefault();
            return;
          }
          if (be.isSoftBreak(w)) {
            C.preventDefault(), s.insertSoftBreak(o);
            return;
          }
          if (be.isSplitBlock(w)) {
            C.preventDefault(), s.insertBreak(o);
            return;
          }
          if (be.isDeleteBackward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o);
            return;
          }
          if (be.isDeleteForward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o);
            return;
          }
          if (be.isDeleteLineBackward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o, {
              unit: "line"
            });
            return;
          }
          if (be.isDeleteLineForward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o, {
              unit: "line"
            });
            return;
          }
          if (be.isDeleteWordBackward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o, {
              unit: "word"
            });
            return;
          }
          if (be.isDeleteWordForward(w)) {
            C.preventDefault(), M && E.isExpanded(M) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, o, g.onKeyDown]),
    onPaste: De((C) => {
      !i && F.hasEditableTarget(o, C.target) && !Me(C, g.onPaste) && (!fr || Gf(C.nativeEvent) || Hr) && (C.preventDefault(), F.insertData(o, C.clipboardData));
    }, [i, o, g.onPaste])
  }), /* @__PURE__ */ Z.createElement(Gc, {
    decorations: L,
    node: o,
    renderElement: l,
    renderPlaceholder: f,
    renderLeaf: c,
    selection: o.selection
  })))));
}, Jc = (r) => {
  var {
    attributes: e,
    children: t
  } = r;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ Z.createElement("span", tr({}, e), t, We && /* @__PURE__ */ Z.createElement("br", null))
  );
}, Zc = () => [], Qc = (r, e) => {
  if (e.getBoundingClientRect && (!r.selection || r.selection && E.isCollapsed(r.selection))) {
    var t = e.startContainer.parentElement;
    t.getBoundingClientRect = e.getBoundingClientRect.bind(e), vf(t, {
      scrollMode: "if-needed"
    }), delete t.getBoundingClientRect;
  }
}, Me = (r, e) => {
  if (!e)
    return !1;
  var t = e(r);
  return t ?? (r.isDefaultPrevented() || r.isPropagationStopped());
}, Ga = (r) => hr(r.target) && (r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement), ev = (r, e) => {
  if (!e)
    return !1;
  var t = e(r);
  return t ?? r.defaultPrevented;
}, rv = /* @__PURE__ */ yr(!1), tv = /* @__PURE__ */ yr({});
function nv(r) {
  var e = He([]).current, t = He({
    editor: r
  }).current, n = De((u) => {
    t.editor = u, e.forEach((i) => i(u));
  }, [e, t]), a = vt(() => ({
    getSlate: () => t.editor,
    addEventListener: (u) => (e.push(u), () => {
      e.splice(e.indexOf(u), 1);
    })
  }), [e, t]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var av = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], uv = (r) => {
  var {
    editor: e,
    children: t,
    onChange: n,
    onSelectionChange: a,
    onValueChange: u,
    initialValue: i
  } = r, l = Nr(r, av), [c, f] = Z.useState(() => {
    if (!S.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Pe.stringify(i)));
    if (!s.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Pe.stringify(e)));
    return e.children = i, Object.assign(e, l), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: v,
    onChange: h
  } = nv(e), m = De((o) => {
    var B;
    switch (n && n(e.children), o == null || (B = o.operation) === null || B === void 0 ? void 0 : B.type) {
      case "set_selection":
        a == null || a(e.selection);
        break;
      default:
        u == null || u(e.children);
    }
    f((A) => ({
      v: A.v + 1,
      editor: e
    })), h(e);
  }, [e, h, n, a, u]);
  sr(() => (tn.set(e, m), () => {
    tn.set(e, () => {
    });
  }), [e, m]);
  var [p, g] = Dr(F.isFocused(e));
  return sr(() => {
    g(F.isFocused(e));
  }, [e]), rt(() => {
    var o = () => g(F.isFocused(e));
    return xu >= 17 ? (document.addEventListener("focusin", o), document.addEventListener("focusout", o), () => {
      document.removeEventListener("focusin", o), document.removeEventListener("focusout", o);
    }) : (document.addEventListener("focus", o, !0), document.addEventListener("blur", o, !0), () => {
      document.removeEventListener("focus", o, !0), document.removeEventListener("blur", o, !0);
    });
  }, []), /* @__PURE__ */ Z.createElement(tv.Provider, {
    value: v
  }, /* @__PURE__ */ Z.createElement(Hu.Provider, {
    value: c
  }, /* @__PURE__ */ Z.createElement(pn.Provider, {
    value: c.editor
  }, /* @__PURE__ */ Z.createElement(rv.Provider, {
    value: p
  }, t))));
}, Xa = (r, e) => {
  var t = (e.top + e.bottom) / 2;
  return r.top <= t && r.bottom >= t;
}, Ja = (r, e, t) => {
  var n = F.toDOMRange(r, e).getBoundingClientRect(), a = F.toDOMRange(r, t).getBoundingClientRect();
  return Xa(n, a) && Xa(a, n);
}, iv = (r, e) => {
  var t = s.range(r, E.end(e)), n = Array.from(s.positions(r, {
    at: e
  })), a = 0, u = n.length, i = Math.floor(u / 2);
  if (Ja(r, s.range(r, n[a]), t))
    return s.range(r, n[a], t);
  if (n.length < 2)
    return s.range(r, n[n.length - 1], t);
  for (; i !== n.length && i !== a; )
    Ja(r, s.range(r, n[i]), t) ? u = i : a = i, i = Math.floor((a + u) / 2);
  return s.range(r, n[u], t);
};
function Za(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Qa(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Za(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Za(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var sv = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = e, {
    apply: a,
    onChange: u,
    deleteBackward: i,
    addMark: l,
    removeMark: c
  } = n;
  return xt.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (f, v) => {
    var h, m;
    (h = An.get(n)) === null || h === void 0 || h(), !Ze.get(n) && (m = $e.get(n)) !== null && m !== void 0 && m.length && Ze.set(n, null), ir.delete(n), l(f, v);
  }, n.removeMark = (f) => {
    var v;
    !Ze.get(n) && (v = $e.get(n)) !== null && v !== void 0 && v.length && Ze.set(n, null), ir.delete(n), c(f);
  }, n.deleteBackward = (f) => {
    if (f !== "line")
      return i(f);
    if (n.selection && E.isCollapsed(n.selection)) {
      var v = s.above(n, {
        match: (g) => V.isElement(g) && s.isBlock(n, g),
        at: n.selection
      });
      if (v) {
        var [, h] = v, m = s.range(n, h, n.selection.anchor), p = iv(n, m);
        E.isCollapsed(p) || y.delete(n, {
          at: p
        });
      }
    }
  }, n.apply = (f) => {
    var v = [], h = [], m = $e.get(n);
    if (m != null && m.length) {
      var p = m.map((P) => oc(P, f)).filter(Boolean);
      $e.set(n, p);
    }
    var g = vr.get(n);
    g && vr.set(n, za(n, g, f));
    var o = cr.get(n);
    if (o != null && o.at) {
      var B = te.isPoint(o == null ? void 0 : o.at) ? un(n, o.at, f) : za(n, o.at, f);
      cr.set(n, B ? Qa(Qa({}, o), {}, {
        at: B
      }) : null);
    }
    switch (f.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        v.push(...Pr(n, f.path));
        break;
      }
      case "set_selection": {
        var A;
        (A = Yr.get(n)) === null || A === void 0 || A.unref(), Yr.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        v.push(...Pr(n, D.parent(f.path)));
        break;
      }
      case "merge_node": {
        var b = D.previous(f.path);
        v.push(...Pr(n, b));
        break;
      }
      case "move_node": {
        var x = D.common(D.parent(f.path), D.parent(f.newPath));
        v.push(...Pr(n, x));
        var k;
        D.isBefore(f.path, f.newPath) ? (v.push(...Pr(n, D.parent(f.path))), k = f.newPath) : (v.push(...Pr(n, D.parent(f.newPath))), k = f.path);
        var I = S.get(e, D.parent(k)), $ = F.findKey(n, I), j = s.pathRef(n, D.parent(k));
        h.push([j, $]);
        break;
      }
    }
    a(f);
    for (var [U, N] of v) {
      var [H] = s.node(n, U);
      Et.set(H, N);
    }
    for (var [G, R] of h)
      if (G.current) {
        var [z] = s.node(n, G.current);
        Et.set(z, R);
      }
  }, n.setFragmentData = (f) => {
    var {
      selection: v
    } = n;
    if (v) {
      var [h, m] = E.edges(v), p = s.void(n, {
        at: h.path
      }), g = s.void(n, {
        at: m.path
      });
      if (!(E.isCollapsed(v) && !p)) {
        var o = F.toDOMRange(n, v), B = o.cloneContents(), A = B.childNodes[0];
        if (B.childNodes.forEach((H) => {
          H.textContent && H.textContent.trim() !== "" && (A = H);
        }), g) {
          var [b] = g, x = o.cloneRange(), k = F.toDOMNode(n, b);
          x.setEndAfter(k), B = x.cloneContents();
        }
        if (p && (A = B.querySelector("[data-slate-spacer]")), Array.from(B.querySelectorAll("[data-slate-zero-width]")).forEach((H) => {
          var G = H.getAttribute("data-slate-zero-width") === "n";
          H.textContent = G ? `
` : "";
        }), ju(A)) {
          var I = A.ownerDocument.createElement("span");
          I.style.whiteSpace = "pre", I.appendChild(A), B.appendChild(I), A = I;
        }
        var $ = n.getFragment(), j = JSON.stringify($), U = window.btoa(encodeURIComponent(j));
        A.setAttribute("data-slate-fragment", U), f.setData("application/".concat(t), U);
        var N = B.ownerDocument.createElement("div");
        return N.appendChild(B), N.setAttribute("hidden", "true"), B.ownerDocument.body.appendChild(N), f.setData("text/html", N.innerHTML), f.setData("text/plain", Mu(N)), B.ownerDocument.body.removeChild(N), f;
      }
    }
  }, n.insertData = (f) => {
    n.insertFragmentData(f) || n.insertTextData(f);
  }, n.insertFragmentData = (f) => {
    var v = f.getData("application/".concat(t)) || ec(f);
    if (v) {
      var h = decodeURIComponent(window.atob(v)), m = JSON.parse(h);
      return n.insertFragment(m), !0;
    }
    return !1;
  }, n.insertTextData = (f) => {
    var v = f.getData("text/plain");
    if (v) {
      var h = v.split(/\r\n|\r|\n/), m = !1;
      for (var p of h)
        m && y.splitNodes(n, {
          always: !0
        }), n.insertText(p), m = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (f) => {
    var v = xu < 18 ? ii.unstable_batchedUpdates : (h) => h();
    v(() => {
      var h = tn.get(n);
      h && h(f), u(f);
    });
  }, n;
}, Pr = (r, e) => {
  var t = [];
  for (var [n, a] of s.levels(r, {
    at: e
  })) {
    var u = F.findKey(r, n);
    t.push([a, u]);
  }
  return t;
};
function Uu(r) {
  const { editor: e, format: t, blockType: n = "type" } = r, { selection: a } = e;
  if (!a)
    return !1;
  const [u] = Array.from(
    s.nodes(e, {
      at: s.unhangRange(e, a),
      match: (i) => !s.isEditor(i) && V.isElement(i) && i[n] === t
    })
  );
  return !!u;
}
function Yu(r, e) {
  const t = s.marks(r);
  return t ? t[e] === !0 : !1;
}
function ov(r, e) {
  switch (Yu(r, e)) {
    case !0:
      s.removeMark(r, e);
      return;
    case !1:
      s.addMark(r, e, !0);
      return;
  }
}
const lv = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }]
  }
], eu = ["numbered-list", "bulleted-list"], gt = ["left", "center", "right", "justify"];
function fv(r, e) {
  const t = eu.includes(e), n = Uu({
    editor: r,
    format: e,
    blockType: gt.includes(e) ? "align" : "type"
  });
  y.unwrapNodes(r, {
    split: !0,
    match: (u) => !s.isEditor(u) && V.isElement(u) && eu.includes(u.type) && !gt.includes(e)
  });
  let a;
  switch (gt.includes(e)) {
    case !0:
      a = { align: n ? void 0 : e };
      break;
    case !1:
      a = {
        type: n ? "paragraph" : t ? "list-item" : e
      };
      break;
  }
  if (y.setNodes(r, a), !n && t) {
    const u = { type: e, children: [] };
    y.wrapNodes(r, u);
  }
}
function ct(r) {
  const { format: e, icon: t } = r, n = wn(), u = Yu(n, e) ? "is_active" : "not_active";
  function i(l) {
    l.preventDefault(), ov(n, e);
  }
  return /* @__PURE__ */ ie.jsx(
    "button",
    {
      className: `rich_text_header_button ${u}`,
      onClick: i,
      children: /* @__PURE__ */ ie.jsx(t, { size: 16 })
    }
  );
}
function ur(r) {
  const { format: e, icon: t } = r, n = wn(), u = Uu({
    editor: n,
    format: e,
    blockType: gt.includes(e) ? "align" : "type"
  }) ? "is_active" : "not_active";
  function i(l) {
    l.preventDefault(), fv(n, e);
  }
  return /* @__PURE__ */ ie.jsx(
    "button",
    {
      className: `rich_text_header_button ${u}`,
      onClick: i,
      children: /* @__PURE__ */ ie.jsx(t, { size: 16 })
    }
  );
}
function cv(r) {
  const { attributes: e, children: t, element: n } = r;
  switch (n.type) {
    case "block-quote":
      return /* @__PURE__ */ ie.jsx("blockquote", { ...e, children: t });
    case "bulleted-list":
      return /* @__PURE__ */ ie.jsx("ul", { ...e, children: t });
    case "heading-one":
      return /* @__PURE__ */ ie.jsx("h1", { ...e, children: t });
    case "heading-two":
      return /* @__PURE__ */ ie.jsx("h2", { ...e, children: t });
    case "list-item":
      return /* @__PURE__ */ ie.jsx("li", { ...e, children: t });
    case "numbered-list":
      return /* @__PURE__ */ ie.jsx("ol", { ...e, children: t });
    default:
      return /* @__PURE__ */ ie.jsx("p", { ...e, children: t });
  }
}
function vv(r) {
  const { attributes: e, children: t, leaf: n } = r;
  let a = t;
  return n.bold && (a = /* @__PURE__ */ ie.jsx("strong", { children: a })), n.code && (a = /* @__PURE__ */ ie.jsx("code", { children: a })), n.italic && (a = /* @__PURE__ */ ie.jsx("em", { children: a })), n.underline && (a = /* @__PURE__ */ ie.jsx("u", { children: a })), /* @__PURE__ */ ie.jsx("span", { ...e, children: a });
}
function hv() {
  const r = De(
    (n) => /* @__PURE__ */ ie.jsx(cv, { ...n }),
    []
  ), e = De(
    (n) => /* @__PURE__ */ ie.jsx(vv, { ...n }),
    []
  ), [t] = Dr(() => sv(Qo()));
  return /* @__PURE__ */ ie.jsx("div", { className: "rich_text_container", children: /* @__PURE__ */ ie.jsxs(uv, { editor: t, initialValue: lv, children: [
    /* @__PURE__ */ ie.jsxs("header", { className: "rich_text_header", children: [
      /* @__PURE__ */ ie.jsx(ct, { format: "bold", icon: hi }),
      /* @__PURE__ */ ie.jsx(ct, { format: "italic", icon: pi }),
      /* @__PURE__ */ ie.jsx(ct, { format: "underline", icon: bi }),
      /* @__PURE__ */ ie.jsx(ct, { format: "code", icon: gi }),
      /* @__PURE__ */ ie.jsx(ur, { format: "heading-one", icon: mi }),
      /* @__PURE__ */ ie.jsx(ur, { format: "heading-two", icon: Ci }),
      /* @__PURE__ */ ie.jsx(ur, { format: "block-quote", icon: Ai }),
      /* @__PURE__ */ ie.jsx(ur, { format: "numbered-list", icon: Bi }),
      /* @__PURE__ */ ie.jsx(ur, { format: "bulleted-list", icon: Ei }),
      /* @__PURE__ */ ie.jsx(ur, { format: "left", icon: di }),
      /* @__PURE__ */ ie.jsx(ur, { format: "center", icon: ci }),
      /* @__PURE__ */ ie.jsx(ur, { format: "right", icon: Di }),
      /* @__PURE__ */ ie.jsx(ur, { format: "justify", icon: vi })
    ] }),
    /* @__PURE__ */ ie.jsx(
      Xc,
      {
        className: "rich_text_textarea",
        renderElement: r,
        renderLeaf: e,
        placeholder: "Enter some rich text…"
      }
    )
  ] }) });
}
export {
  hv as RichText
};

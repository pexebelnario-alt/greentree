"use strict";
(self.webpackChunkpwb_website_base =
  self.webpackChunkpwb_website_base || []).push([
  [389],
  {
    2546: (e, t, n) => {
      n.d(t, { D: () => r, x: () => i });
      var o = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      function i(e) {
        return o(this, void 0, void 0, function* () {
          if (!window._pwLoadFileFromCache)
            throw new Error("Load file from cache function missing.");
          return yield window._pwLoadFileFromCache(e);
        });
      }
      function r(e, t) {
        window._pwSetFileCache && window._pwSetFileCache(e, t);
      }
    },
    8949: (e, t, n) => {
      n.d(t, { W: () => i, b: () => r });
      const o = { disposePageCallbacks: [] };
      function i(e) {
        o.disposePageCallbacks.push(e);
      }
      function r() {
        const e = o.disposePageCallbacks;
        for (o.disposePageCallbacks = []; e.length > 0; ) {
          const t = e.pop();
          if (t)
            try {
              t();
            } catch (e) {
              console.error("Router page dispose callback error:", e);
            }
        }
      }
    },
    3389: (e, t, n) => {
      var o, i, r;
      n.r(t),
        n.d(t, {
          currentPath: () => vr,
          currentSectionHash: () => wr,
          default: () => Mr,
          navigateTo: () => Or,
        }),
        (function (e) {
          (e.Position = "position"),
            (e.Spacing = "spacing"),
            (e.Size = "size"),
            (e.Layout = "layout"),
            (e.Style = "style"),
            (e.Transform = "transform"),
            (e.Font = "font"),
            (e.Image = "image"),
            (e.Video = "video"),
            (e.Link = "link"),
            (e.Scene = "scene"),
            (e.ScrollSection = "scrollSection"),
            (e.Effects = "effects"),
            (e.Audio = "audio"),
            (e.AudioStyle = "audioStyle"),
            (e.Interactions = "interactions"),
            (e.RelativeOverlay = "relativeOverlay"),
            (e.LoadingBar = "loadingBar"),
            (e.States = "states"),
            (e.Anchor = "anchor"),
            (e.Embed = "embed"),
            (e.Accessibility = "accessibility"),
            (e.PinBlock = "pinBlock");
        })(o || (o = {})),
        (function (e) {
          (e.Wrapper = "wrapper"),
            (e.TextNode = "textnode"),
            (e.Text = "text"),
            (e.Link = "link"),
            (e.Image = "image"),
            (e.Video = "video"),
            (e.Div = "div"),
            (e.PwText = "pw-text"),
            (e.PwLink = "pw-link"),
            (e.PwImage = "pw-image"),
            (e.PwVideo = "pw-video"),
            (e.PwBlock = "pw-block"),
            (e.PwRows = "pw-rows"),
            (e.PwColumns = "pw-columns"),
            (e.PwGrid = "pw-grid"),
            (e.PwScene = "pw-scene"),
            (e.PwAudio = "pw-audio"),
            (e.PwRelativeOverlay = "pw-relative-overlay"),
            (e.PwLoadingBar = "pw-loading-bar"),
            (e.PwAnchor = "pw-anchor"),
            (e.PwEmbed = "pw-embed"),
            (e.PwPinBlock = "pw-pin-block");
        })(i || (i = {})),
        (function (e) {
          (e.Auto = ""), (e.Eager = "eager"), (e.Lazy = "lazy");
        })(r || (r = {}));
      const s = "pwb-anchor",
        a = "pwb-audio",
        c = "pwb-scene",
        l = "pwb-loading-wrap",
        u = "pwb-body-wrap",
        d = "pwb-error-page-wrap";
      var f = n(6615),
        p = n(7615),
        h = n(3664),
        m = n(5454),
        g = n(2546),
        y = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function s(e) {
              try {
                c(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      const v = (e, t, n = "/") =>
          y(void 0, void 0, void 0, function* () {
            const o = `${(0, h.gZ)(n)}${e}`,
              i = yield (0, g.x)(o);
            if (!i) throw new Error(`Failed to fetch "${o}".`);
            const r = yield fetch(i),
              s = r.headers.get("content-type") || "";
            if (!s.includes(t))
              throw new Error(
                `Unexpected content type "${s}" for file "${o}".`
              );
            return r;
          }),
        w = (e, t) =>
          y(void 0, void 0, void 0, function* () {
            const n = (t) => {
              var n, o;
              const i =
                null === (n = e.devices[t]) || void 0 === n
                  ? void 0
                  : n.canvases;
              if (i)
                return null === (o = Object.values(i)[0]) || void 0 === o
                  ? void 0
                  : o.sceneId;
            };
            let o = n(t);
            for (; t !== p.SN.Desktop && void 0 === o; )
              t === p.SN.Mobile
                ? (t = p.SN.Tablet)
                : t === p.SN.Tablet && (t = p.SN.Desktop),
                (o = n(t));
            if (!o || "None" === o) return null;
            const i = yield v(
              `${m.lx.SceneState}/${o}.json`,
              "application/json"
            );
            return yield i.json();
          }),
        b = (e) =>
          y(void 0, void 0, void 0, function* () {
            const t = yield v(`${m.lx.UIState}`, "application/json", e);
            return yield t.json();
          }),
        _ = (e) =>
          y(void 0, void 0, void 0, function* () {
            try {
              const t = yield v(m.lx.PageVisualScript, "application/json", e);
              return yield t.json();
            } catch (e) {
              return;
            }
          }),
        S = (e) =>
          y(void 0, void 0, void 0, function* () {
            const t = yield v(m.lx.Index, "text/html", e);
            return yield t.text();
          }),
        E = (e) =>
          y(void 0, void 0, void 0, function* () {
            const t = yield v(m.lx.Styles, "text/css", e);
            return yield t.text();
          }),
        P = () =>
          y(void 0, void 0, void 0, function* () {
            const e = yield v(m.lx.ErrorPage, "text/html");
            return yield e.text();
          }),
        O = () =>
          y(void 0, void 0, void 0, function* () {
            const e = yield v(m.lx.ErrorPageStyles, "text/css");
            return yield e.text();
          });
      var T = n(5062),
        M = n(385),
        x = n(8938),
        R = n(4441);
      const A = new WeakMap(),
        C = new WeakMap(),
        I = Symbol("pointerMeta"),
        k = {
          get(e, t) {
            if (t === I) return A.get(e);
            let n = C.get(e);
            n || ((n = new Map()), C.set(e, n));
            const o = n.get(t);
            if (void 0 !== o) return o;
            const i = A.get(e),
              r = N({ root: i.root, path: [...i.path, t] });
            return n.set(t, r), r;
          },
        },
        D = (e) => e[I],
        j = (e) => {
          const { root: t, path: n } = D(e);
          return { root: t, path: n };
        };
      function N(e) {
        var t;
        const n = {
            root: e.root,
            path: null !== (t = e.path) && void 0 !== t ? t : [],
          },
          o = {};
        return A.set(o, n), new Proxy(o, k);
      }
      const L = N,
        B = (e) => e && !!D(e);
      const F = (e, t, n) => {
        if (0 === t.length) return n(e);
        if (Array.isArray(e)) {
          let [o, ...i] = t;
          (o = parseInt(String(o), 10)), isNaN(o) && (o = 0);
          const r = e[o],
            s = F(r, i, n);
          if (r === s) return e;
          const a = [...e];
          return a.splice(o, 1, s), a;
        }
        if ("object" == typeof e && null !== e) {
          const [o, ...i] = t,
            r = e[o],
            s = F(r, i, n);
          if (r === s) return e;
          return Object.assign(Object.assign({}, e), { [o]: s });
        }
        {
          const [e, ...o] = t;
          return { [e]: F(void 0, o, n) };
        }
      };
      class U {
        constructor() {
          this._head = void 0;
        }
        peek() {
          return this._head && this._head.data;
        }
        pop() {
          const e = this._head;
          if (e) return (this._head = e.next), e.data;
        }
        push(e) {
          const t = { next: this._head, data: e };
          this._head = t;
        }
      }
      function V() {
        const e = new U(),
          t = () => {};
        return {
          type: "Dataverse_discoveryMechanism",
          startIgnoringDependencies: () => {
            e.push(t);
          },
          stopIgnoringDependencies: () => {
            e.peek() !== t || e.pop();
          },
          reportResolutionStart: (n) => {
            const o = e.peek();
            o && o(n), e.push(t);
          },
          reportResolutionEnd: (t) => {
            e.pop();
          },
          pushCollector: (t) => {
            e.push(t);
          },
          popCollector: (t) => {
            if (e.peek() !== t)
              throw new Error("Popped collector is not on top of the stack");
            e.pop();
          },
        };
      }
      const {
          startIgnoringDependencies: H,
          stopIgnoringDependencies: W,
          reportResolutionEnd: $,
          reportResolutionStart: z,
          pushCollector: G,
          popCollector: q,
        } = (function () {
          const e = "__dataverse_discoveryMechanism_sharedStack",
            t =
              "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {};
          if (t) {
            const n = t[e];
            if (
              n &&
              "object" == typeof n &&
              "Dataverse_discoveryMechanism" === n.type
            )
              return n;
            {
              const n = V();
              return (t[e] = n), n;
            }
          }
          return V();
        })(),
        X = () => {};
      class J {
        constructor(e, t) {
          (this._fn = e),
            (this._prismInstance = t),
            (this._didMarkDependentsAsStale = !1),
            (this._isFresh = !1),
            (this._cacheOfDendencyValues = new Map()),
            (this._dependents = new Set()),
            (this._dependencies = new Set()),
            (this._possiblyStaleDeps = new Set()),
            (this._scope = new Z(this)),
            (this._lastValue = void 0),
            (this._forciblySetToStale = !1),
            (this._reactToDependencyGoingStale = (e) => {
              this._possiblyStaleDeps.add(e), this._markAsStale();
            });
          for (const e of this._dependencies)
            e._addDependent(this._reactToDependencyGoingStale);
          H(), this.getValue(), W();
        }
        get hasDependents() {
          return this._dependents.size > 0;
        }
        removeDependent(e) {
          this._dependents.delete(e);
        }
        addDependent(e) {
          this._dependents.add(e);
        }
        destroy() {
          for (const e of this._dependencies)
            e._removeDependent(this._reactToDependencyGoingStale);
          Q(this._scope);
        }
        getValue() {
          if (!this._isFresh) {
            const e = this._recalculate();
            (this._lastValue = e),
              (this._isFresh = !0),
              (this._didMarkDependentsAsStale = !1),
              (this._forciblySetToStale = !1);
          }
          return this._lastValue;
        }
        _recalculate() {
          let e;
          if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
            let e = !1;
            H();
            for (const t of this._possiblyStaleDeps)
              if (this._cacheOfDendencyValues.get(t) !== t.getValue()) {
                e = !0;
                break;
              }
            if ((W(), this._possiblyStaleDeps.clear(), !e))
              return this._lastValue;
          }
          const t = new Set();
          this._cacheOfDendencyValues.clear();
          const n = (e) => {
            t.add(e), this._addDependency(e);
          };
          G(n), te.push(this._scope);
          try {
            e = this._fn();
          } catch (e) {
            console.error(e);
          } finally {
            te.pop() !== this._scope &&
              console.warn("The Prism hook stack has slipped. This is a bug.");
          }
          q(n);
          for (const e of this._dependencies)
            t.has(e) || this._removeDependency(e);
          (this._dependencies = t), H();
          for (const e of t) this._cacheOfDendencyValues.set(e, e.getValue());
          return W(), e;
        }
        forceStale() {
          (this._forciblySetToStale = !0), this._markAsStale();
        }
        _markAsStale() {
          if (!this._didMarkDependentsAsStale) {
            (this._didMarkDependentsAsStale = !0), (this._isFresh = !1);
            for (const e of this._dependents) e(this._prismInstance);
          }
        }
        _addDependency(e) {
          this._dependencies.has(e) ||
            (this._dependencies.add(e),
            e._addDependent(this._reactToDependencyGoingStale));
        }
        _removeDependency(e) {
          this._dependencies.has(e) &&
            (this._dependencies.delete(e),
            e._removeDependent(this._reactToDependencyGoingStale));
        }
      }
      const Y = {};
      class K {
        constructor(e) {
          (this._fn = e),
            (this.isPrism = !0),
            (this._state = { hot: !1, handle: void 0 });
        }
        get isHot() {
          return this._state.hot;
        }
        onChange(e, t, n = !1) {
          const o = () => {
            e.onThisOrNextTick(r);
          };
          let i = Y;
          const r = () => {
            const e = this.getValue();
            e !== i && ((i = e), t(e));
          };
          this._addDependent(o), n && ((i = this.getValue()), t(i));
          return () => {
            this._removeDependent(o), e.offThisOrNextTick(r), e.offNextTick(r);
          };
        }
        onStale(e) {
          const t = () => e();
          return (
            this._addDependent(t),
            () => {
              this._removeDependent(t);
            }
          );
        }
        keepHot() {
          return this.onStale(() => {});
        }
        _addDependent(e) {
          this._state.hot || this._goHot(), this._state.handle.addDependent(e);
        }
        _goHot() {
          const e = new J(this._fn, this);
          this._state = { hot: !0, handle: e };
        }
        _removeDependent(e) {
          const t = this._state;
          if (!t.hot) return;
          const n = t.handle;
          n.removeDependent(e),
            n.hasDependents ||
              ((this._state = { hot: !1, handle: void 0 }), n.destroy());
        }
        getValue() {
          z(this);
          const e = this._state;
          let t;
          return (
            (t = e.hot
              ? e.handle.getValue()
              : (function (e) {
                  const t = new re();
                  let n;
                  te.push(t);
                  try {
                    n = e();
                  } catch (e) {
                    console.error(e);
                  } finally {
                    te.pop() !== t &&
                      console.warn(
                        "The Prism hook stack has slipped. This is a bug."
                      );
                  }
                  return n;
                })(this._fn)),
            $(this),
            t
          );
        }
      }
      class Z {
        constructor(e) {
          (this._hotHandle = e),
            (this._refs = new Map()),
            (this.isPrismScope = !0),
            (this.subs = {}),
            (this.effects = new Map()),
            (this.memos = new Map());
        }
        ref(e, t) {
          const n = this._refs.get(e);
          if (void 0 !== n) return n;
          {
            const n = { current: t };
            return this._refs.set(e, n), n;
          }
        }
        effect(e, t, n) {
          let o = this.effects.get(e);
          void 0 === o &&
            ((o = { cleanup: X, deps: void 0 }), this.effects.set(e, o)),
            ne(o.deps, n) &&
              (o.cleanup(),
              H(),
              (o.cleanup = ee(t, X).value),
              W(),
              (o.deps = n));
        }
        memo(e, t, n) {
          let o = this.memos.get(e);
          return (
            void 0 === o &&
              ((o = { cachedValue: null, deps: void 0 }), this.memos.set(e, o)),
            ne(o.deps, n) &&
              (H(), (o.cachedValue = ee(t, void 0).value), W(), (o.deps = n)),
            o.cachedValue
          );
        }
        state(e, t) {
          const { value: n, setValue: o } = this.memo(
            "state/" + e,
            () => {
              const e = { current: t };
              return {
                value: e,
                setValue: (t) => {
                  (e.current = t), this._hotHandle.forceStale();
                },
              };
            },
            []
          );
          return [n.current, o];
        }
        sub(e) {
          return (
            this.subs[e] || (this.subs[e] = new Z(this._hotHandle)),
            this.subs[e]
          );
        }
        cleanupEffects() {
          for (const e of this.effects.values()) ee(e.cleanup, void 0);
          this.effects.clear();
        }
        source(e, t) {
          return (
            this.effect(
              "$$source/blah",
              () =>
                e(() => {
                  this._hotHandle.forceStale();
                }),
              [e]
            ),
            t()
          );
        }
      }
      function Q(e) {
        for (const t of Object.values(e.subs)) Q(t);
        e.cleanupEffects();
      }
      function ee(e, t) {
        try {
          return { value: e(), ok: !0 };
        } catch (e) {
          return (
            setTimeout(function () {
              throw e;
            }),
            { value: t, ok: !1 }
          );
        }
      }
      const te = new U();
      function ne(e, t) {
        if (void 0 === e || void 0 === t) return !0;
        const n = e.length;
        if (n !== t.length) return !0;
        for (let o = 0; o < n; o++) if (e[o] !== t[o]) return !0;
        return !1;
      }
      function oe(e, t, n) {
        const o = te.peek();
        if (!o)
          throw new Error("prism.memo() is called outside of a prism() call.");
        return o.memo(e, t, n);
      }
      const ie = (e) => new K(e);
      class re {
        effect(e, t, n) {
          console.warn("prism.effect() does not run in cold prisms");
        }
        memo(e, t, n) {
          return t();
        }
        state(e, t) {
          return [t, () => {}];
        }
        ref(e, t) {
          return { current: t };
        }
        sub(e) {
          return new re();
        }
        source(e, t) {
          return t();
        }
      }
      (ie.ref = function (e, t) {
        const n = te.peek();
        if (!n)
          throw new Error("prism.ref() is called outside of a prism() call.");
        return n.ref(e, t);
      }),
        (ie.effect = function (e, t, n) {
          const o = te.peek();
          if (!o)
            throw new Error(
              "prism.effect() is called outside of a prism() call."
            );
          return o.effect(e, t, n);
        }),
        (ie.memo = oe),
        (ie.ensurePrism = function () {
          if (!te.peek())
            throw new Error(
              "The parent function is called outside of a prism() call."
            );
        }),
        (ie.state = function (e, t) {
          const n = te.peek();
          if (!n)
            throw new Error(
              "prism.state() is called outside of a prism() call."
            );
          return n.state(e, t);
        }),
        (ie.scope = function (e, t) {
          const n = te.peek();
          if (!n)
            throw new Error(
              "prism.scope() is called outside of a prism() call."
            );
          const o = n.sub(e);
          te.push(o);
          const i = ee(t, void 0).value;
          return te.pop(), i;
        }),
        (ie.sub = function (e, t, n) {
          return oe(e, () => ie(t), n).getValue();
        }),
        (ie.inPrism = function () {
          return !!te.peek();
        }),
        (ie.source = function (e, t) {
          const n = te.peek();
          if (!n)
            throw new Error(
              "prism.source() is called outside of a prism() call."
            );
          return n.source(e, t);
        });
      const se = ie;
      var ae;
      !(function (e) {
        (e[(e.Dict = 0)] = "Dict"),
          (e[(e.Array = 1)] = "Array"),
          (e[(e.Other = 2)] = "Other");
      })(ae || (ae = {}));
      const ce = (e) =>
          Array.isArray(e) ? ae.Array : (0, x.A)(e) ? ae.Dict : ae.Other,
        le = (e, t, n = ce(e)) =>
          (n === ae.Dict && "string" == typeof t) || (n === ae.Array && ue(t))
            ? e[t]
            : void 0,
        ue = (e) => {
          const t = "number" == typeof e ? e : parseInt(e, 10);
          return !isNaN(t) && t >= 0 && t < 1 / 0 && (0 | t) === t;
        };
      class de {
        constructor(e, t) {
          (this._parent = e),
            (this._path = t),
            (this.children = new Map()),
            (this.identityChangeListeners = new Set());
        }
        addIdentityChangeListener(e) {
          this.identityChangeListeners.add(e);
        }
        removeIdentityChangeListener(e) {
          this.identityChangeListeners.delete(e), this._checkForGC();
        }
        removeChild(e) {
          this.children.delete(e), this._checkForGC();
        }
        getChild(e) {
          return this.children.get(e);
        }
        getOrCreateChild(e) {
          let t = this.children.get(e);
          return (
            t ||
              ((t = t = new de(this, this._path.concat([e]))),
              this.children.set(e, t)),
            t
          );
        }
        _checkForGC() {
          this.identityChangeListeners.size > 0 ||
            this.children.size > 0 ||
            (this._parent && this._parent.removeChild((0, R.A)(this._path)));
        }
      }
      class fe {
        constructor(e) {
          (this.$$isPointerToPrismProvider = !0),
            (this.pointer = L({ root: this, path: [] })),
            (this.prism = this.pointerToPrism(this.pointer)),
            (this.onChangeByPointer = (e, t) => {
              const n = B(e) ? e : e(this.pointer),
                { path: o } = j(n),
                i = this._getOrCreateScopeForPath(o);
              i.identityChangeListeners.add(t);
              return () => {
                i.identityChangeListeners.delete(t);
              };
            }),
            (this._currentState = e),
            (this._rootScope = new de(void 0, []));
        }
        set(e) {
          const t = this._currentState;
          (this._currentState = e), this._checkUpdates(this._rootScope, t, e);
        }
        get() {
          return this._currentState;
        }
        getByPointer(e) {
          const t = B(e) ? e : e(this.pointer),
            n = j(t).path;
          return this._getIn(n);
        }
        _getIn(e) {
          return 0 === e.length ? this.get() : (0, M.A)(this.get(), e);
        }
        reduce(e) {
          this.set(e(this.get()));
        }
        reduceByPointer(e, t) {
          const n = B(e) ? e : e(this.pointer),
            o = j(n).path,
            i = (function (e, t, n) {
              return 0 === t.length ? n(e) : F(e, t, n);
            })(this.get(), o, t);
          this.set(i);
        }
        setByPointer(e, t) {
          this.reduceByPointer(e, () => t);
        }
        _checkUpdates(e, t, n) {
          if (t === n) return;
          for (const t of e.identityChangeListeners) t(n);
          if (0 === e.children.size) return;
          const o = ce(t),
            i = ce(n);
          if (o !== ae.Other || o !== i)
            for (const [r, s] of e.children) {
              const e = le(t, r, o),
                a = le(n, r, i);
              this._checkUpdates(s, e, a);
            }
        }
        _getOrCreateScopeForPath(e) {
          let t = this._rootScope;
          for (const n of e) t = t.getOrCreateChild(n);
          return t;
        }
        onChange(e) {
          return this.onChangeByPointer(this.pointer, e);
        }
        pointerToPrism(e) {
          const { path: t } = j(e),
            n = (t) => this.onChangeByPointer(e, t),
            o = () => this._getIn(t);
          return se(() => se.source(n, o));
        }
      }
      function pe(e) {
        return !(!e || !e.isPrism || !0 !== e.isPrism);
      }
      const he = new WeakMap();
      const me = (e) => {
          const t = D(e);
          let n = he.get(t);
          if (!n) {
            const o = t.root;
            if (
              !(function (e) {
                return (
                  "object" == typeof e &&
                  null !== e &&
                  !0 === e.$$isPointerToPrismProvider
                );
              })(o)
            )
              throw new Error(
                "Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider"
              );
            (n = o.pointerToPrism(e)), he.set(t, n);
          }
          return n;
        },
        ge = (e) => (B(e) ? me(e).getValue() : pe(e) ? e.getValue() : e);
      class ye {
        get dormant() {
          return this._dormant;
        }
        constructor(e) {
          (this._conf = e),
            (this._ticking = !1),
            (this._dormant = !0),
            (this._numberOfDormantTicks = 0),
            (this.__ticks = 0),
            (this._scheduledForThisOrNextTick = new Set()),
            (this._scheduledForNextTick = new Set()),
            (this._timeAtCurrentTick = 0);
        }
        onThisOrNextTick(e) {
          this._scheduledForThisOrNextTick.add(e),
            this._dormant && this._goActive();
        }
        onNextTick(e) {
          this._scheduledForNextTick.add(e), this._dormant && this._goActive();
        }
        offThisOrNextTick(e) {
          this._scheduledForThisOrNextTick.delete(e);
        }
        offNextTick(e) {
          this._scheduledForNextTick.delete(e);
        }
        get time() {
          return this._ticking ? this._timeAtCurrentTick : performance.now();
        }
        _goActive() {
          var e, t;
          this._dormant &&
            ((this._dormant = !1),
            null ===
              (t =
                null === (e = this._conf) || void 0 === e
                  ? void 0
                  : e.onActive) ||
              void 0 === t ||
              t.call(e));
        }
        _goDormant() {
          var e, t;
          this._dormant ||
            ((this._dormant = !0),
            (this._numberOfDormantTicks = 0),
            null ===
              (t =
                null === (e = this._conf) || void 0 === e
                  ? void 0
                  : e.onDormant) ||
              void 0 === t ||
              t.call(e));
        }
        tick(e = performance.now()) {
          if (
            (this.__ticks++,
            !this._dormant &&
              0 === this._scheduledForNextTick.size &&
              0 === this._scheduledForThisOrNextTick.size &&
              (this._numberOfDormantTicks++, this._numberOfDormantTicks >= 180))
          )
            this._goDormant();
          else {
            (this._ticking = !0), (this._timeAtCurrentTick = e);
            for (const e of this._scheduledForNextTick)
              this._scheduledForThisOrNextTick.add(e);
            this._scheduledForNextTick.clear(),
              this._tick(0),
              (this._ticking = !1);
          }
        }
        _tick(e) {
          const t = this.time;
          if (
            (e > 10 && console.warn("_tick() recursing for 10 times"), e > 100)
          )
            throw new Error("Maximum recursion limit for _tick()");
          const n = this._scheduledForThisOrNextTick;
          this._scheduledForThisOrNextTick = new Set();
          for (const e of n) e(t);
          if (this._scheduledForThisOrNextTick.size > 0)
            return this._tick(e + 1);
        }
      }
      class ve {
        constructor(e) {
          (this.$$isPointerToPrismProvider = !0),
            (this._currentPointerBox = new fe(e)),
            (this.pointer = L({ root: this, path: [] }));
        }
        setPointer(e) {
          this._currentPointerBox.set(e);
        }
        pointerToPrism(e) {
          const { path: t } = D(e);
          return se(() => {
            const e = this._currentPointerBox.prism.getValue(),
              n = t.reduce((e, t) => e[t], e);
            return ge(n);
          });
        }
      }
      const we = new (class {
          constructor() {
            this.atom = new fe({ projects: {} });
          }
          add(e, t) {
            this.atom.setByPointer((t) => t.projects[e], t);
          }
          get(e) {
            return this.atom.get().projects[e];
          }
          has(e) {
            return !!this.get(e);
          }
        })(),
        be = new WeakMap();
      function _e(e) {
        return be.get(e);
      }
      function Se(e, t) {
        be.set(e, t);
      }
      const Ee = [];
      function Pe(e, t) {
        return 0 === t.length ? e : (0, M.A)(e, t);
      }
      class Oe {
        constructor() {
          this._values = {};
        }
        get(e, t) {
          if (this.has(e)) return this._values[e];
          {
            const n = t();
            return (this._values[e] = n), n;
          }
        }
        has(e) {
          return this._values.hasOwnProperty(e);
        }
      }
      var Te = n(6822);
      const Me = new WeakMap();
      function xe(e) {
        if (Me.has(e)) return Me.get(e);
        const t =
          "compound" === e.type
            ? (function (e) {
                const t = {};
                for (const [n, o] of Object.entries(e.props)) t[n] = xe(o);
                return t;
              })(e)
            : "enum" === e.type
            ? (function (e) {
                const t = { $case: e.defaultCase };
                for (const [n, o] of Object.entries(e.cases)) t[n] = xe(o);
                return t;
              })(e)
            : e.default;
        return Me.set(e, t), t;
      }
      var Re = n(5314),
        Ae = n.n(Re),
        Ce = n(7853);
      function Ie(e) {
        const t = new Map();
        return (n) => (t.has(n) || t.set(n, e(n)), t.get(n));
      }
      var ke;
      function De(e, t, n) {
        return se(() => {
          const o = ge(t),
            i = se.memo(
              "driver",
              () =>
                o
                  ? "BasicKeyframedTrack" === o.type
                    ? (function (e, t, n) {
                        return se(() => {
                          const e = se.ref("state", { started: !1 });
                          let o = e.current;
                          const i = n.getValue();
                          return (
                            (!o.started || i < o.validFrom || o.validTo <= i) &&
                              (e.current = o =
                                (function (e, t, n) {
                                  const o = ke.getSortedKeyframesCached(
                                      n.keyframes
                                    ),
                                    i = t.getValue();
                                  if (0 === o.length)
                                    return {
                                      started: !0,
                                      validFrom: -1 / 0,
                                      validTo: 1 / 0,
                                      der: je,
                                    };
                                  let r = 0;
                                  for (;;) {
                                    const e = o[r];
                                    if (!e) return Ne.error;
                                    const n = r === o.length - 1;
                                    if (i < e.position)
                                      return 0 === r
                                        ? Ne.beforeFirstKeyframe(e)
                                        : Ne.error;
                                    if (e.position === i)
                                      return n
                                        ? Ne.lastKeyframe(e)
                                        : Ne.between(e, o[r + 1], t);
                                    if (r === o.length - 1)
                                      return Ne.lastKeyframe(e);
                                    {
                                      const n = r + 1;
                                      if (o[n].position <= i) {
                                        r = n;
                                        continue;
                                      }
                                      return Ne.between(e, o[r + 1], t);
                                    }
                                  }
                                })(0, n, t)),
                            o.der.getValue()
                          );
                        });
                      })(0, o, n)
                    : (e.logger.error("Track type not yet supported."),
                      se(() => {}))
                  : se(() => {}),
              [o]
            );
          return i.getValue();
        });
      }
      !(function (e) {
        (e.getSortedKeyframes = (e) => {
          const t = Object.values(e.byId);
          return t.sort((e, t) => e.position - t.position), (0, Ce.A)(t);
        }),
          (e.getSortedKeyframesCached = Ie(e.getSortedKeyframes)),
          (e.fromArray = (e) => {
            const t = {},
              n = {};
            for (const o of e) (t[o.id] = o), (n[o.id] = !0);
            return (0, Ce.A)({ byId: t, allIds: n });
          }),
          (e.fromSortedKeyframesCached = Ie(e.fromArray));
      })(ke || (ke = {}));
      const je = se(() => {});
      const Ne = {
        beforeFirstKeyframe: (e) => ({
          started: !0,
          validFrom: -1 / 0,
          validTo: e.position,
          der: se(() => ({ left: e.value, progression: 0 })),
        }),
        lastKeyframe: (e) => ({
          started: !0,
          validFrom: e.position,
          validTo: 1 / 0,
          der: se(() => ({ left: e.value, progression: 0 })),
        }),
        between(e, t, n) {
          if (!e.connectedRight)
            return {
              started: !0,
              validFrom: e.position,
              validTo: t.position,
              der: se(() => ({ left: e.value, progression: 0 })),
            };
          const o = (n) => (n - e.position) / (t.position - e.position);
          if (!e.type || "bezier" === e.type) {
            const i = new (Ae())(
                e.handles[2],
                e.handles[3],
                t.handles[0],
                t.handles[1]
              ),
              r = se(() => {
                const r = o(n.getValue()),
                  s = i.solveSimple(r);
                return { left: e.value, right: t.value, progression: s };
              });
            return {
              started: !0,
              validFrom: e.position,
              validTo: t.position,
              der: r,
            };
          }
          const i = se(() => {
            const i = o(n.getValue()),
              r = Math.floor(i);
            return { left: e.value, right: t.value, progression: r };
          });
          return {
            started: !0,
            validFrom: e.position,
            validTo: t.position,
            der: i,
          };
        },
        error: { started: !0, validFrom: -1 / 0, validTo: 1 / 0, der: je },
      };
      function Le(e, t, n) {
        const o = n.get(e);
        if (o && o.override === t) return o.merged;
        const i = Object.assign({}, e);
        for (const o of Object.keys(t)) {
          const r = t[o],
            s = e[o];
          i[o] =
            "object" == typeof r && "object" == typeof s
              ? Le(s, r, n)
              : void 0 === r
              ? s
              : r;
        }
        return n.set(e, { override: t, merged: i }), i;
      }
      function Be(e, t) {
        let n = e;
        for (const e of t) n = n[e];
        return n;
      }
      var Fe = n(7028);
      class Ue {
        get type() {
          return "Theatre_SheetObject_PublicAPI";
        }
        constructor(e) {
          (this._cache = new Oe()),
            (this._keepHotUntapDebounce = void 0),
            Se(this, e);
        }
        get props() {
          return _e(this).propsP;
        }
        get sheet() {
          return _e(this).sheet.publicApi;
        }
        get project() {
          return _e(this).sheet.project.publicApi;
        }
        get address() {
          return Object.assign({}, _e(this).address);
        }
        _valuesPrism() {
          return this._cache.get("_valuesPrism", () => {
            const e = _e(this);
            return se(() => ge(e.getValues().getValue()));
          });
        }
        onValuesChange(e, t) {
          return (function (e, t, n) {
            const o = n ? _e(n).ticker : Ct();
            if (B(e)) {
              return me(e).onChange(o, t, !0);
            }
            if (pe(e)) return e.onChange(o, t, !0);
            throw new Error(
              "Called onChange(p) where p is neither a pointer nor a prism."
            );
          })(this._valuesPrism(), e, t);
        }
        get value() {
          const e = this._valuesPrism();
          if (!e.isHot) {
            null != this._keepHotUntapDebounce &&
              this._keepHotUntapDebounce.flush();
            const t = e.keepHot();
            this._keepHotUntapDebounce = (0, Fe.A)(() => {
              t(), (this._keepHotUntapDebounce = void 0);
            }, 5e3);
          }
          return (
            this._keepHotUntapDebounce && this._keepHotUntapDebounce(),
            e.getValue()
          );
        }
        set initialValue(e) {
          _e(this).setInitialValue(e);
        }
      }
      function Ve(e) {
        return "compound" === e.type || "enum" === e.type;
      }
      function He(e, t) {
        if (!e) return;
        const [n, ...o] = t;
        if (void 0 === n) return e;
        if (!Ve(e)) return;
        return He("enum" === e.type ? e.cases[n] : e.props[n], o);
      }
      const We = Ie((e) => {
        if ("enum" === e.type) throw new Error("Not implemented yet for enums");
        for (const t in e.props) {
          const n = e.props[t];
          if (!Ve(n)) return !0;
          if (We(n)) return !0;
        }
        return !1;
      });
      class $e {
        get type() {
          return "Theatre_SheetObject";
        }
        constructor(e, t, n) {
          (this.sheet = e),
            (this.template = t),
            (this.nativeObject = n),
            (this.$$isPointerToPrismProvider = !0),
            (this._initialValue = new fe({})),
            (this._cache = new Oe()),
            (this._logger = e._logger.named(
              "SheetObject",
              t.address.objectKey
            )),
            this._logger._trace("creating object"),
            (this._internalUtilCtx = {
              logger: this._logger.utilFor.internal(),
            }),
            (this.address = Object.assign(Object.assign({}, t.address), {
              sheetInstanceId: e.address.sheetInstanceId,
            })),
            (this.publicApi = new Ue(this));
        }
        getValues() {
          return this._cache.get("getValues()", () =>
            se(() => {
              const e = Le(
                ge(this.template.getDefaultValues()),
                ge(this._initialValue.pointer),
                se.memo("withInitialCache", () => new WeakMap(), [])
              );
              let t,
                n = Le(
                  e,
                  ge(this.template.getStaticValues()),
                  se.memo("withStatics", () => new WeakMap(), [])
                );
              {
                const e = se.memo("seq", () => this.getSequencedValues(), []),
                  o = se.memo("withSeqsCache", () => new WeakMap(), []);
                t = ge(ge(e));
                n = Le(n, t, o);
              }
              return ((e, t) => {
                const n = se.memo(e, () => new fe(t), []);
                return n.set(t), n;
              })("finalAtom", n).pointer;
            })
          );
        }
        getValueByPointer(e) {
          const t = ge(this.getValues()),
            { path: n } = j(e);
          return ge(Be(t, n));
        }
        pointerToPrism(e) {
          const { path: t } = j(e);
          return se(() => {
            const e = ge(this.getValues());
            return ge(Be(e, t));
          });
        }
        getSequencedValues() {
          return se(() => {
            const e = se.memo(
                "tracksToProcess",
                () => this.template.getArrayOfValidSequenceTracks(),
                []
              ),
              t = ge(e),
              n = new fe({}),
              o = ge(this.template.configPointer);
            return (
              se.effect(
                "processTracks",
                () => {
                  const e = [];
                  for (const { trackId: i, pathToProp: r } of t) {
                    const t = this._trackIdToPrism(i),
                      s = He(o, r),
                      a = s.deserializeAndSanitize,
                      c = s.interpolate,
                      l = () => {
                        const e = t.getValue();
                        if (!e) return n.setByPointer((e) => Be(e, r), void 0);
                        const o = a(e.left),
                          i = void 0 === o ? s.default : o;
                        if (void 0 === e.right)
                          return n.setByPointer((e) => Be(e, r), i);
                        const l = a(e.right),
                          u = void 0 === l ? s.default : l;
                        return n.setByPointer(
                          (e) => Be(e, r),
                          c(i, u, e.progression)
                        );
                      },
                      u = t.onStale(l);
                    l(), e.push(u);
                  }
                  return () => {
                    for (const t of e) t();
                  };
                },
                [o, ...t]
              ),
              n.pointer
            );
          });
        }
        _trackIdToPrism(e) {
          const t =
              this.template.project.pointers.historic.sheetsById[
                this.address.sheetId
              ].sequence.tracksByObject[this.address.objectKey].trackData[e],
            n = this.sheet.getSequence().positionPrism;
          return De(this._internalUtilCtx, t, n);
        }
        get propsP() {
          return this._cache.get("propsP", () => L({ root: this, path: [] }));
        }
        validateValue(e, t) {}
        setInitialValue(e) {
          this.validateValue(this.propsP, e), this._initialValue.set(e);
        }
      }
      function ze(e) {
        return function (t, n) {
          return e(t, n());
        };
      }
      var Ge, qe, Xe, Je;
      !(function (e) {
        (e[(e.GENERAL = 1)] = "GENERAL"),
          (e[(e.TODO = 2)] = "TODO"),
          (e[(e.TROUBLESHOOTING = 4)] = "TROUBLESHOOTING");
      })(Ge || (Ge = {})),
        (function (e) {
          (e[(e.INTERNAL = 8)] = "INTERNAL"),
            (e[(e.DEV = 16)] = "DEV"),
            (e[(e.PUBLIC = 32)] = "PUBLIC");
        })(qe || (qe = {})),
        (function (e) {
          (e[(e.TRACE = 64)] = "TRACE"),
            (e[(e.DEBUG = 128)] = "DEBUG"),
            (e[(e.WARN = 256)] = "WARN"),
            (e[(e.ERROR = 512)] = "ERROR");
        })(Xe || (Xe = {})),
        (function (e) {
          (e[(e.ERROR_PUBLIC = 545)] = "ERROR_PUBLIC"),
            (e[(e.ERROR_DEV = 529)] = "ERROR_DEV"),
            (e[(e._HMM = 524)] = "_HMM"),
            (e[(e._TODO = 522)] = "_TODO"),
            (e[(e._ERROR = 521)] = "_ERROR"),
            (e[(e.WARN_PUBLIC = 289)] = "WARN_PUBLIC"),
            (e[(e.WARN_DEV = 273)] = "WARN_DEV"),
            (e[(e._KAPOW = 268)] = "_KAPOW"),
            (e[(e._WARN = 265)] = "_WARN"),
            (e[(e.DEBUG_DEV = 145)] = "DEBUG_DEV"),
            (e[(e._DEBUG = 137)] = "_DEBUG"),
            (e[(e.TRACE_DEV = 81)] = "TRACE_DEV"),
            (e[(e._TRACE = 73)] = "_TRACE");
        })(Je || (Je = {}));
      const Ye = {
        _hmm: Ke(Je._HMM),
        _todo: Ke(Je._TODO),
        _error: Ke(Je._ERROR),
        errorDev: Ke(Je.ERROR_DEV),
        errorPublic: Ke(Je.ERROR_PUBLIC),
        _kapow: Ke(Je._KAPOW),
        _warn: Ke(Je._WARN),
        warnDev: Ke(Je.WARN_DEV),
        warnPublic: Ke(Je.WARN_PUBLIC),
        _debug: Ke(Je._DEBUG),
        debugDev: Ke(Je.DEBUG_DEV),
        _trace: Ke(Je._TRACE),
        traceDev: Ke(Je.TRACE_DEV),
      };
      function Ke(e) {
        return Object.freeze({
          audience: Ze(e, qe.INTERNAL)
            ? "internal"
            : Ze(e, qe.DEV)
            ? "dev"
            : "public",
          category: Ze(e, Ge.TROUBLESHOOTING)
            ? "troubleshooting"
            : Ze(e, Ge.TODO)
            ? "todo"
            : "general",
          level: Ze(e, Xe.ERROR)
            ? Xe.ERROR
            : Ze(e, Xe.WARN)
            ? Xe.WARN
            : Ze(e, Xe.DEBUG)
            ? Xe.DEBUG
            : Xe.TRACE,
        });
      }
      function Ze(e, t) {
        return (e & t) === t;
      }
      function Qe(e, t) {
        return (
          ((t & qe.PUBLIC) === qe.PUBLIC ||
            ((t & qe.DEV) === qe.DEV
              ? e.dev
              : (t & qe.INTERNAL) === qe.INTERNAL && e.internal)) &&
          e.min <= t
        );
      }
      const et = {
        loggingConsoleStyle: !0,
        loggerConsoleStyle: !0,
        includes: Object.freeze({ internal: !1, dev: !1, min: Xe.WARN }),
        filtered: function () {},
        include: function () {
          return {};
        },
        create: null,
        creatExt: null,
        named(e, t, n) {
          return this.create({ names: [...e.names, { name: t, key: n }] });
        },
        style: {
          bold: void 0,
          italic: void 0,
          cssMemo: new Map([["", ""]]),
          collapseOnRE: /[a-z- ]+/g,
          color: void 0,
          collapsed(e) {
            if (e.length < 5) return e;
            const t = e.replace(this.collapseOnRE, "");
            return this.cssMemo.has(t) || this.cssMemo.set(t, this.css(e)), t;
          },
          css(e) {
            var t, n, o, i;
            const r = this.cssMemo.get(e);
            if (r) return r;
            let s = `color:${
              null !==
                (n =
                  null === (t = this.color) || void 0 === t
                    ? void 0
                    : t.call(this, e)) && void 0 !== n
                ? n
                : `hsl(${
                    (e.charCodeAt(0) + e.charCodeAt(e.length - 1)) % 360
                  }, 100%, 60%)`
            }`;
            return (
              (null === (o = this.bold) || void 0 === o ? void 0 : o.test(e)) &&
                (s += ";font-weight:600"),
              (null === (i = this.italic) || void 0 === i
                ? void 0
                : i.test(e)) && (s += ";font-style:italic"),
              this.cssMemo.set(e, s),
              s
            );
          },
        },
      };
      function tt(e = console, t = {}) {
        const n = Object.assign(Object.assign({}, et), {
            includes: Object.assign({}, et.includes),
          }),
          o = { styled: it.bind(n, e), noStyle: rt.bind(n, e) },
          i = ot.bind(n);
        function r() {
          return n.loggingConsoleStyle && n.loggerConsoleStyle
            ? o.styled
            : o.noStyle;
        }
        return (
          (n.create = r()),
          {
            configureLogger(e) {
              var t;
              "console" === e
                ? ((n.loggerConsoleStyle = et.loggerConsoleStyle),
                  (n.create = r()))
                : "console" === e.type
                ? ((n.loggerConsoleStyle =
                    null !== (t = e.style) && void 0 !== t
                      ? t
                      : et.loggerConsoleStyle),
                  (n.create = r()))
                : "keyed" === e.type
                ? ((n.creatExt = (t) => e.keyed(t.names)), (n.create = i))
                : "named" === e.type &&
                  ((n.creatExt = nt.bind(null, e.named)), (n.create = i));
            },
            configureLogging(e) {
              var t, o, i, s, a;
              (n.includes.dev =
                null !== (t = e.dev) && void 0 !== t ? t : et.includes.dev),
                (n.includes.internal =
                  null !== (o = e.internal) && void 0 !== o
                    ? o
                    : et.includes.internal),
                (n.includes.min =
                  null !== (i = e.min) && void 0 !== i ? i : et.includes.min),
                (n.include =
                  null !== (s = e.include) && void 0 !== s ? s : et.include),
                (n.loggingConsoleStyle =
                  null !== (a = e.consoleStyle) && void 0 !== a
                    ? a
                    : et.loggingConsoleStyle),
                (n.create = r());
            },
            getLogger: () => n.create({ names: [] }),
          }
        );
      }
      function nt(e, t) {
        const n = [];
        for (let { name: e, key: o } of t.names)
          n.push(null == o ? e : `${e} (${o})`);
        return e(n);
      }
      function ot(e) {
        const t = Object.assign(
            Object.assign({}, this.includes),
            this.include(e)
          ),
          n = this.filtered,
          o = this.named.bind(this, e),
          i = this.creatExt(e),
          r = Qe(t, Je._HMM),
          s = Qe(t, Je._TODO),
          a = Qe(t, Je._ERROR),
          c = Qe(t, Je.ERROR_DEV),
          l = Qe(t, Je.ERROR_PUBLIC),
          u = Qe(t, Je._WARN),
          d = Qe(t, Je._KAPOW),
          f = Qe(t, Je.WARN_DEV),
          p = Qe(t, Je.WARN_PUBLIC),
          h = Qe(t, Je._DEBUG),
          m = Qe(t, Je.DEBUG_DEV),
          g = Qe(t, Je._TRACE),
          y = Qe(t, Je.TRACE_DEV),
          v = r ? i.error.bind(i, Ye._hmm) : n.bind(e, Je._HMM),
          w = s ? i.error.bind(i, Ye._todo) : n.bind(e, Je._TODO),
          b = a ? i.error.bind(i, Ye._error) : n.bind(e, Je._ERROR),
          _ = c ? i.error.bind(i, Ye.errorDev) : n.bind(e, Je.ERROR_DEV),
          S = l ? i.error.bind(i, Ye.errorPublic) : n.bind(e, Je.ERROR_PUBLIC),
          E = d ? i.warn.bind(i, Ye._kapow) : n.bind(e, Je._KAPOW),
          P = u ? i.warn.bind(i, Ye._warn) : n.bind(e, Je._WARN),
          O = f ? i.warn.bind(i, Ye.warnDev) : n.bind(e, Je.WARN_DEV),
          T = p ? i.warn.bind(i, Ye.warnPublic) : n.bind(e, Je.WARN_DEV),
          M = h ? i.debug.bind(i, Ye._debug) : n.bind(e, Je._DEBUG),
          x = m ? i.debug.bind(i, Ye.debugDev) : n.bind(e, Je.DEBUG_DEV),
          R = g ? i.trace.bind(i, Ye._trace) : n.bind(e, Je._TRACE),
          A = y ? i.trace.bind(i, Ye.traceDev) : n.bind(e, Je.TRACE_DEV),
          C = {
            _hmm: v,
            _todo: w,
            _error: b,
            errorDev: _,
            errorPublic: S,
            _kapow: E,
            _warn: P,
            warnDev: O,
            warnPublic: T,
            _debug: M,
            debugDev: x,
            _trace: R,
            traceDev: A,
            lazy: {
              _hmm: r ? ze(v) : v,
              _todo: s ? ze(w) : w,
              _error: a ? ze(b) : b,
              errorDev: c ? ze(_) : _,
              errorPublic: l ? ze(S) : S,
              _kapow: d ? ze(E) : E,
              _warn: u ? ze(P) : P,
              warnDev: f ? ze(O) : O,
              warnPublic: p ? ze(T) : T,
              _debug: h ? ze(M) : M,
              debugDev: m ? ze(x) : x,
              _trace: g ? ze(R) : R,
              traceDev: y ? ze(A) : A,
            },
            named: o,
            utilFor: {
              internal: () => ({
                debug: C._debug,
                error: C._error,
                warn: C._warn,
                trace: C._trace,
                named: (e, t) => C.named(e, t).utilFor.internal(),
              }),
              dev: () => ({
                debug: C.debugDev,
                error: C.errorDev,
                warn: C.warnDev,
                trace: C.traceDev,
                named: (e, t) => C.named(e, t).utilFor.dev(),
              }),
              public: () => ({
                error: C.errorPublic,
                warn: C.warnPublic,
                debug(e, t) {
                  C._warn(`(public "debug" filtered out) ${e}`, t);
                },
                trace(e, t) {
                  C._warn(`(public "trace" filtered out) ${e}`, t);
                },
                named: (e, t) => C.named(e, t).utilFor.public(),
              }),
            },
          };
        return C;
      }
      function it(e, t) {
        const n = Object.assign(
            Object.assign({}, this.includes),
            this.include(t)
          ),
          o = [];
        let i = "";
        for (let e = 0; e < t.names.length; e++) {
          const { name: n, key: r } = t.names[e];
          if (((i += ` %c${n}`), o.push(this.style.css(n)), null != r)) {
            const e = `%c#${r}`;
            (i += e), o.push(this.style.css(e));
          }
        }
        const r = this.filtered,
          s = this.named.bind(this, t),
          a = [i, ...o];
        return st(
          r,
          t,
          n,
          e,
          a,
          (function (e) {
            const t = e.slice(0);
            for (let e = 1; e < t.length; e++)
              t[e] += ";background-color:#e0005a;padding:2px;color:white";
            return t;
          })(a),
          s
        );
      }
      function rt(e, t) {
        const n = Object.assign(
          Object.assign({}, this.includes),
          this.include(t)
        );
        let o = "";
        for (let e = 0; e < t.names.length; e++) {
          const { name: n, key: i } = t.names[e];
          (o += ` ${n}`), null != i && (o += `#${i}`);
        }
        const i = [o];
        return st(this.filtered, t, n, e, i, i, this.named.bind(this, t));
      }
      function st(e, t, n, o, i, r, s) {
        const a = Qe(n, Je._HMM),
          c = Qe(n, Je._TODO),
          l = Qe(n, Je._ERROR),
          u = Qe(n, Je.ERROR_DEV),
          d = Qe(n, Je.ERROR_PUBLIC),
          f = Qe(n, Je._WARN),
          p = Qe(n, Je._KAPOW),
          h = Qe(n, Je.WARN_DEV),
          m = Qe(n, Je.WARN_PUBLIC),
          g = Qe(n, Je._DEBUG),
          y = Qe(n, Je.DEBUG_DEV),
          v = Qe(n, Je._TRACE),
          w = Qe(n, Je.TRACE_DEV),
          b = a ? o.error.bind(o, ...i) : e.bind(t, Je._HMM),
          _ = c ? o.error.bind(o, ...i) : e.bind(t, Je._TODO),
          S = l ? o.error.bind(o, ...i) : e.bind(t, Je._ERROR),
          E = u ? o.error.bind(o, ...i) : e.bind(t, Je.ERROR_DEV),
          P = d ? o.error.bind(o, ...i) : e.bind(t, Je.ERROR_PUBLIC),
          O = p ? o.warn.bind(o, ...r) : e.bind(t, Je._KAPOW),
          T = f ? o.warn.bind(o, ...i) : e.bind(t, Je._WARN),
          M = h ? o.warn.bind(o, ...i) : e.bind(t, Je.WARN_DEV),
          x = m ? o.warn.bind(o, ...i) : e.bind(t, Je.WARN_DEV),
          R = g ? o.info.bind(o, ...i) : e.bind(t, Je._DEBUG),
          A = y ? o.info.bind(o, ...i) : e.bind(t, Je.DEBUG_DEV),
          C = v ? o.debug.bind(o, ...i) : e.bind(t, Je._TRACE),
          I = w ? o.debug.bind(o, ...i) : e.bind(t, Je.TRACE_DEV),
          k = {
            _hmm: b,
            _todo: _,
            _error: S,
            errorDev: E,
            errorPublic: P,
            _kapow: O,
            _warn: T,
            warnDev: M,
            warnPublic: x,
            _debug: R,
            debugDev: A,
            _trace: C,
            traceDev: I,
            lazy: {
              _hmm: a ? ze(b) : b,
              _todo: c ? ze(_) : _,
              _error: l ? ze(S) : S,
              errorDev: u ? ze(E) : E,
              errorPublic: d ? ze(P) : P,
              _kapow: p ? ze(O) : O,
              _warn: f ? ze(T) : T,
              warnDev: h ? ze(M) : M,
              warnPublic: m ? ze(x) : x,
              _debug: g ? ze(R) : R,
              debugDev: y ? ze(A) : A,
              _trace: v ? ze(C) : C,
              traceDev: w ? ze(I) : I,
            },
            named: s,
            utilFor: {
              internal: () => ({
                debug: k._debug,
                error: k._error,
                warn: k._warn,
                trace: k._trace,
                named: (e, t) => k.named(e, t).utilFor.internal(),
              }),
              dev: () => ({
                debug: k.debugDev,
                error: k.errorDev,
                warn: k.warnDev,
                trace: k.traceDev,
                named: (e, t) => k.named(e, t).utilFor.dev(),
              }),
              public: () => ({
                error: k.errorPublic,
                warn: k.warnPublic,
                debug(e, t) {
                  k._warn(`(public "debug" filtered out) ${e}`, t);
                },
                trace(e, t) {
                  k._warn(`(public "trace" filtered out) ${e}`, t);
                },
                named: (e, t) => k.named(e, t).utilFor.public(),
              }),
            },
          };
        return k;
      }
      const at = tt(console, {
        _debug: function () {},
        _error: function () {},
      });
      at.configureLogging({ dev: !0, min: Xe.TRACE });
      const ct = at
          .getLogger()
          .named("Theatre.js (default logger)")
          .utilFor.dev(),
        lt = new WeakMap();
      function ut(e, t, n) {
        for (const [o, i] of Object.entries(t.props))
          if (!Ve(i)) {
            const t = [...e, o];
            n.set(JSON.stringify(t), n.size), dt(t, i, n);
          }
        for (const [o, i] of Object.entries(t.props))
          if (Ve(i)) {
            const t = [...e, o];
            n.set(JSON.stringify(t), n.size), dt(t, i, n);
          }
      }
      function dt(e, t, n) {
        if ("compound" === t.type) ut(e, t, n);
        else {
          if ("enum" === t.type) throw new Error("Enums aren't supported yet");
          n.set(JSON.stringify(e), n.size);
        }
      }
      var ft = n(2190);
      function pt(e) {
        return (
          "object" == typeof e && null !== e && 0 === Object.keys(e).length
        );
      }
      class ht {
        get staticConfig() {
          return this._config.get();
        }
        get configPointer() {
          return this._config.pointer;
        }
        get _temp_actions() {
          return this._temp_actions_atom.get();
        }
        get _temp_actionsPointer() {
          return this._temp_actions_atom.pointer;
        }
        constructor(e, t, n, o, i) {
          (this.sheetTemplate = e),
            (this.type = "Theatre_SheetObjectTemplate"),
            (this._cache = new Oe()),
            (this.address = Object.assign(Object.assign({}, e.address), {
              objectKey: t,
            })),
            (this._config = new fe(o)),
            (this._temp_actions_atom = new fe(i)),
            (this.project = e.project),
            (this.pointerToSheetState =
              this.sheetTemplate.project.pointers.historic.sheetsById[
                this.address.sheetId
              ]),
            (this.pointerToStaticOverrides =
              this.pointerToSheetState.staticOverrides.byObject[
                this.address.objectKey
              ]);
        }
        createInstance(e, t, n) {
          return this._config.set(n), new $e(e, this, t);
        }
        reconfigure(e) {
          this._config.set(e);
        }
        _temp_setActions(e) {
          this._temp_actions_atom.set(e);
        }
        getDefaultValues() {
          return this._cache.get("getDefaultValues()", () =>
            se(() =>
              (function (e) {
                return xe(e);
              })(ge(this.configPointer))
            )
          );
        }
        getStaticValues() {
          return this._cache.get("getStaticValues", () =>
            se(() => {
              var e;
              const t =
                null !== (e = ge(this.pointerToStaticOverrides)) && void 0 !== e
                  ? e
                  : {};
              return ge(this.configPointer).deserializeAndSanitize(t) || {};
            })
          );
        }
        getArrayOfValidSequenceTracks() {
          return this._cache.get("getArrayOfValidSequenceTracks", () =>
            se(() => {
              const e =
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ],
                t = ge(
                  e.sequence.tracksByObject[this.address.objectKey]
                    .trackIdByPropPath
                );
              if (!t) return Ee;
              const n = [];
              if (!t) return Ee;
              const o = ge(this.configPointer),
                i = Object.entries(t);
              for (const [e, t] of i) {
                const i = mt(e);
                if (!i) continue;
                const r = He(o, i);
                r && !Ve(r) && n.push({ pathToProp: i, trackId: t });
              }
              const r = (function (e) {
                const t = lt.get(e);
                if (t) return t;
                const n = new Map();
                return lt.set(e, n), ut([], e, n), n;
              })(o);
              return (
                n.sort((e, t) => {
                  const n = e.pathToProp,
                    o = t.pathToProp;
                  return r.get(JSON.stringify(n)) > r.get(JSON.stringify(o))
                    ? 1
                    : -1;
                }),
                0 === n.length ? Ee : n
              );
            })
          );
        }
        getMapOfValidSequenceTracks_forStudio() {
          return this._cache.get("getMapOfValidSequenceTracks_forStudio", () =>
            se(() => {
              const e = ge(this.getArrayOfValidSequenceTracks()),
                t = {};
              for (const { pathToProp: n, trackId: o } of e) (0, Te.A)(t, n, o);
              return t;
            })
          );
        }
        getStaticButNotSequencedOverrides() {
          return this._cache.get("getStaticButNotSequencedOverrides", () =>
            se(() => {
              const e = ge(this.getStaticValues()),
                t = ge(this.getArrayOfValidSequenceTracks()),
                n = (0, Ce.A)(e);
              for (const { pathToProp: e } of t) {
                (0, ft.A)(n, e);
                let t = e.slice(0, -1);
                for (; t.length > 0; ) {
                  if (!pt(Pe(n, t))) break;
                  (0, ft.A)(n, t), (t = t.slice(0, -1));
                }
              }
              return pt(n) ? void 0 : n;
            })
          );
        }
        getDefaultsAtPointer(e) {
          const { path: t } = j(e);
          return Pe(this.getDefaultValues().getValue(), t);
        }
      }
      function mt(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return void ct.warn(
            `property ${JSON.stringify(e)} cannot be parsed. Skipping.`
          );
        }
      }
      const gt = Ie((e) => JSON.stringify(e));
      Ie((e) => JSON.parse(e));
      n(2722);
      class yt extends Error {}
      class vt extends yt {}
      var wt = n(4225);
      function bt() {
        let e, t;
        const n = new Promise((n, i) => {
            (e = (e) => {
              n(e), (o.status = "resolved");
            }),
              (t = (e) => {
                i(e), (o.status = "rejected");
              });
          }),
          o = { resolve: e, reject: t, promise: n, status: "pending" };
        return o;
      }
      const _t = () => {};
      class St {
        constructor() {
          (this._stopPlayCallback = _t),
            (this._state = new fe({ position: 0, playing: !1 })),
            (this.statePointer = this._state.pointer);
        }
        destroy() {}
        pause() {
          this._stopPlayCallback(),
            (this.playing = !1),
            (this._stopPlayCallback = _t);
        }
        gotoPosition(e) {
          this._updatePositionInState(e);
        }
        _updatePositionInState(e) {
          this._state.setByPointer((e) => e.position, e);
        }
        getCurrentPosition() {
          return this._state.get().position;
        }
        get playing() {
          return this._state.get().playing;
        }
        set playing(e) {
          this._state.setByPointer((e) => e.playing, e);
        }
        play(e, t, n, o, i) {
          this.playing && this.pause(), (this.playing = !0);
          const r = t[1] - t[0];
          {
            const e = this.getCurrentPosition();
            e < t[0] || e > t[1]
              ? "normal" === o || "alternate" === o
                ? this._updatePositionInState(t[0])
                : ("reverse" !== o && "alternateReverse" !== o) ||
                  this._updatePositionInState(t[1])
              : "normal" === o || "alternate" === o
              ? e === t[1] && this._updatePositionInState(t[0])
              : e === t[0] && this._updatePositionInState(t[1]);
          }
          const s = bt(),
            a = i.time,
            c = r * e;
          let l = this.getCurrentPosition() - t[0];
          ("reverse" !== o && "alternateReverse" !== o) ||
            (l = t[1] - this.getCurrentPosition());
          const u = (i) => {
            const u = Math.max(i - a, 0) / 1e3,
              f = Math.min(u * n + l, c);
            if (f !== c) {
              const e = Math.floor(f / r);
              let n = ((f / r) % 1) * r;
              if ("normal" !== o)
                if ("reverse" === o) n = r - n;
                else {
                  const t = e % 2 == 0;
                  "alternate" === o ? t || (n = r - n) : t && (n = r - n);
                }
              this._updatePositionInState(n + t[0]), d();
            } else {
              if ("normal" === o) this._updatePositionInState(t[1]);
              else if ("reverse" === o) this._updatePositionInState(t[0]);
              else {
                const n = (e - 1) % 2 == 0;
                "alternate" === o
                  ? n
                    ? this._updatePositionInState(t[1])
                    : this._updatePositionInState(t[0])
                  : n
                  ? this._updatePositionInState(t[0])
                  : this._updatePositionInState(t[1]);
              }
              (this.playing = !1), s.resolve(!0);
            }
          };
          this._stopPlayCallback = () => {
            i.offThisOrNextTick(u),
              i.offNextTick(u),
              this.playing && s.resolve(!1);
          };
          const d = () => i.onNextTick(u);
          return i.onThisOrNextTick(u), s.promise;
        }
        playDynamicRange(e, t) {
          this.playing && this.pause(), (this.playing = !0);
          const n = bt(),
            o = e.keepHot();
          n.promise.then(o, o);
          let i = t.time;
          const r = (t) => {
            const n = Math.max(t - i, 0);
            i = t;
            const o = n / 1e3,
              r = this.getCurrentPosition(),
              a = e.getValue();
            if (r < a[0] || r > a[1]) this.gotoPosition(a[0]);
            else {
              let e = r + o;
              e > a[1] && (e = a[0] + (e - a[1])), this.gotoPosition(e);
            }
            s();
          };
          this._stopPlayCallback = () => {
            t.offThisOrNextTick(r), t.offNextTick(r), n.resolve(!1);
          };
          const s = () => t.onNextTick(r);
          return t.onThisOrNextTick(r), n.promise;
        }
      }
      const Et = "__TheatreJS_CoreBundle",
        Pt =
          (e) =>
          (...t) => {
            var n;
            switch (e) {
              case "success":
              case "info":
                ct.debug(t.slice(0, 2).join("\n"));
                break;
              case "warning":
                ct.warn(t.slice(0, 2).join("\n"));
            }
            return "undefined" != typeof window
              ? null === (n = window.__TheatreJS_Notifications) || void 0 === n
                ? void 0
                : n.notify[e](...t)
              : void 0;
          },
        Ot = {
          warning: Pt("warning"),
          success: Pt("success"),
          info: Pt("info"),
          error: Pt("error"),
        };
      "undefined" != typeof window &&
        (window.addEventListener("error", (e) => {
          Ot.error(
            "An error occurred",
            `<pre>${e.message}</pre>\n\nSee **console** for details.`
          );
        }),
        window.addEventListener("unhandledrejection", (e) => {
          Ot.error(
            "An error occurred",
            `<pre>${e.reason}</pre>\n\nSee **console** for details.`
          );
        }));
      class Tt {
        constructor(e, t, n) {
          (this._decodedBuffer = e),
            (this._audioContext = t),
            (this._nodeDestination = n),
            (this._state = new fe({ position: 0, playing: !1 })),
            (this._stopPlayCallback = _t),
            (this.statePointer = this._state.pointer),
            (this._mainGain = this._audioContext.createGain()),
            this._mainGain.connect(this._nodeDestination);
        }
        playDynamicRange(e, t) {
          const n = bt();
          let o;
          this._playing && this.pause(), (this._playing = !0);
          const i = () => {
              null == o || o(), (o = this._loopInRange(e.getValue(), t).stop);
            },
            r = e.onStale(i);
          return (
            i(),
            (this._stopPlayCallback = () => {
              null == o || o(), r(), n.resolve(!1);
            }),
            n.promise
          );
        }
        _loopInRange(e, t) {
          let n = this.getCurrentPosition();
          const o = e[1] - e[0];
          (n < e[0] || n > e[1] || n === e[1]) &&
            this._updatePositionInState(e[0]),
            (n = this.getCurrentPosition());
          const i = this._audioContext.createBufferSource();
          (i.buffer = this._decodedBuffer),
            i.connect(this._mainGain),
            (i.playbackRate.value = 1),
            (i.loop = !0),
            (i.loopStart = e[0]),
            (i.loopEnd = e[1]);
          const r = t.time;
          let s = n - e[0];
          i.start(0, n);
          const a = (t) => {
              let n = (((1 * (Math.max(t - r, 0) / 1e3) + s) / o) % 1) * o;
              this._updatePositionInState(n + e[0]), c();
            },
            c = () => t.onNextTick(a);
          t.onThisOrNextTick(a);
          return {
            stop: () => {
              i.stop(),
                i.disconnect(),
                t.offThisOrNextTick(a),
                t.offNextTick(a);
            },
          };
        }
        get _playing() {
          return this._state.get().playing;
        }
        set _playing(e) {
          this._state.setByPointer((e) => e.playing, e);
        }
        destroy() {}
        pause() {
          this._stopPlayCallback(),
            (this._playing = !1),
            (this._stopPlayCallback = _t);
        }
        gotoPosition(e) {
          this._updatePositionInState(e);
        }
        _updatePositionInState(e) {
          this._state.reduce((t) =>
            Object.assign(Object.assign({}, t), { position: e })
          );
        }
        getCurrentPosition() {
          return this._state.get().position;
        }
        play(e, t, n, o, i) {
          this._playing && this.pause(), (this._playing = !0);
          let r = this.getCurrentPosition();
          const s = t[1] - t[0];
          if ("normal" !== o)
            throw new vt(
              `Audio-controlled sequences can only be played in the "normal" direction. '${o}' given.`
            );
          (r < t[0] || r > t[1] || r === t[1]) &&
            this._updatePositionInState(t[0]),
            (r = this.getCurrentPosition());
          const a = bt(),
            c = this._audioContext.createBufferSource();
          (c.buffer = this._decodedBuffer),
            c.connect(this._mainGain),
            (c.playbackRate.value = n),
            e > 1e3 &&
              (Ot.warning(
                "Can't play sequences with audio more than 1000 times",
                `The sequence will still play, but only 1000 times. The \`iterationCount: ${e}\` provided to \`sequence.play()\`\nis too high for a sequence with audio.\n\nTo fix this, either set \`iterationCount\` to a lower value, or remove the audio from the sequence.`,
                [
                  {
                    url: "https://www.theatrejs.com/docs/latest/manual/audio",
                    title: "Using Audio",
                  },
                  {
                    url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                    title: "Audio API",
                  },
                ]
              ),
              (e = 1e3)),
            e > 1 && ((c.loop = !0), (c.loopStart = t[0]), (c.loopEnd = t[1]));
          const l = i.time;
          let u = r - t[0];
          const d = s * e;
          c.start(0, r, d - u);
          const f = (e) => {
              const o = Math.max(e - l, 0) / 1e3,
                i = Math.min(o * n + u, d);
              if (i !== d) {
                let e = ((i / s) % 1) * s;
                this._updatePositionInState(e + t[0]), h();
              } else
                this._updatePositionInState(t[1]),
                  (this._playing = !1),
                  p(),
                  a.resolve(!0);
            },
            p = () => {
              c.stop(), c.disconnect();
            };
          this._stopPlayCallback = () => {
            p(),
              i.offThisOrNextTick(f),
              i.offNextTick(f),
              this._playing && a.resolve(!1);
          };
          const h = () => i.onNextTick(f);
          return i.onThisOrNextTick(f), a.promise;
        }
      }
      let Mt,
        xt = 0;
      function Rt() {
        let e = null;
        const t = (function (e) {
          var t;
          const n = new ye({
              onActive() {
                var t;
                null === (t = null == e ? void 0 : e.start) ||
                  void 0 === t ||
                  t.call(e);
              },
              onDormant() {
                var t;
                null === (t = null == e ? void 0 : e.stop) ||
                  void 0 === t ||
                  t.call(e);
              },
            }),
            o = {
              tick: (e) => {
                n.tick(e);
              },
              id: xt++,
              name:
                null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                  ? t
                  : `CustomRafDriver-${xt}`,
              type: "Theatre_RafDriver_PublicAPI",
            };
          return (
            Se(o, {
              type: "Theatre_RafDriver_PrivateAPI",
              publicApi: o,
              ticker: n,
              start: null == e ? void 0 : e.start,
              stop: null == e ? void 0 : e.stop,
            }),
            o
          );
        })({
          name: "DefaultCoreRafDriver",
          start: () => {
            if ("undefined" != typeof window) {
              const n = (o) => {
                t.tick(o), (e = window.requestAnimationFrame(n));
              };
              e = window.requestAnimationFrame(n);
            } else t.tick(0), setTimeout(() => t.tick(1), 0);
          },
          stop: () => {
            "undefined" != typeof window &&
              null !== e &&
              window.cancelAnimationFrame(e);
          },
        });
        return t;
      }
      function At() {
        return (
          Mt ||
            (function (e) {
              if (Mt)
                throw new Error("`setCoreRafDriver()` is already called.");
              const t = _e(e);
              Mt = t;
            })(Rt()),
          Mt
        );
      }
      function Ct() {
        return At().ticker;
      }
      var It = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class kt {
        get type() {
          return "Theatre_Sequence_PublicAPI";
        }
        constructor(e) {
          Se(this, e);
        }
        play(e) {
          const t = _e(this);
          if (t._project.isReady()) {
            const n = (null == e ? void 0 : e.rafDriver)
              ? _e(e.rafDriver).ticker
              : Ct();
            return t.play(null != e ? e : {}, n);
          }
          {
            0;
            const e = bt();
            return e.resolve(!0), e.promise;
          }
        }
        pause() {
          _e(this).pause();
        }
        get position() {
          return _e(this).position;
        }
        set position(e) {
          _e(this).position = e;
        }
        __experimental_getKeyframes(e) {
          return _e(this).getKeyframesOfSimpleProp(e);
        }
        attachAudio(e) {
          return It(this, void 0, void 0, function* () {
            const {
                audioContext: t,
                destinationNode: n,
                decodedBuffer: o,
                gainNode: i,
              } = yield (function (e) {
                return It(this, void 0, void 0, function* () {
                  function t() {
                    if (e.audioContext) return Promise.resolve(e.audioContext);
                    const t = new AudioContext();
                    return "running" === t.state || "undefined" == typeof window
                      ? Promise.resolve(t)
                      : new Promise((e) => {
                          const n = () => {
                              t.resume().catch((e) => {
                                console.error(e);
                              });
                            },
                            o = ["mousedown", "keydown", "touchstart"],
                            i = { capture: !0, passive: !1 };
                          o.forEach((e) => {
                            window.addEventListener(e, n, i);
                          }),
                            t.addEventListener("statechange", () => {
                              "running" === t.state &&
                                (o.forEach((e) => {
                                  window.removeEventListener(e, n, i);
                                }),
                                e(t));
                            });
                        });
                  }
                  function n() {
                    return It(this, void 0, void 0, function* () {
                      if (e.source instanceof AudioBuffer) return e.source;
                      const t = bt();
                      if ("string" != typeof e.source)
                        throw new Error(
                          "Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer."
                        );
                      let n, i;
                      try {
                        n = yield fetch(e.source);
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not fetch '${e.source}'. Network error logged above.`
                          ))
                        );
                      }
                      try {
                        i = yield n.arrayBuffer();
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not read '${e.source}' as an arrayBuffer.`
                          ))
                        );
                      }
                      let r;
                      (yield o).decodeAudioData(i, t.resolve, t.reject);
                      try {
                        r = yield t.promise;
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not decode ${e.source} as an audio file.`
                          ))
                        );
                      }
                      return r;
                    });
                  }
                  const o = t(),
                    i = n(),
                    [r, s] = yield Promise.all([o, i]),
                    a = e.destinationNode || r.destination,
                    c = r.createGain();
                  return (
                    c.connect(a),
                    {
                      audioContext: r,
                      decodedBuffer: s,
                      gainNode: c,
                      destinationNode: a,
                    }
                  );
                });
              })(e),
              r = new Tt(o, t, i);
            return (
              _e(this).replacePlaybackController(r),
              {
                audioContext: t,
                destinationNode: n,
                decodedBuffer: o,
                gainNode: i,
              }
            );
          });
        }
        get pointer() {
          return _e(this).pointer;
        }
      }
      jt("Theatre_Project"), jt("Theatre_Sheet"), jt("Theatre_SheetTemplate");
      const Dt = jt("Theatre_SheetObject");
      jt("Theatre_SheetObjectTemplate"),
        jt("Theatre_Project_PublicAPI"),
        jt("Theatre_Sheet_PublicAPI"),
        jt("Theatre_SheetObject_PublicAPI");
      function jt(e) {
        return (t) => "object" == typeof t && !!t && t.type === e;
      }
      var Nt = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class Lt {
        constructor(e, t, n, o, i) {
          (this._project = e),
            (this._sheet = t),
            (this._lengthD = n),
            (this._subUnitsPerUnitD = o),
            (this.pointer = L({ root: this, path: [] })),
            (this.$$isPointerToPrismProvider = !0),
            (this.closestGridPosition = (e) => {
              const t = 1 / this.subUnitsPerUnit;
              return parseFloat((Math.round(e / t) * t).toFixed(3));
            }),
            (this._logger = e._logger
              .named("Sheet", t.address.sheetId)
              .named("Instance", t.address.sheetInstanceId)),
            (this.address = Object.assign(
              Object.assign({}, this._sheet.address),
              { sequenceName: "default" }
            )),
            (this.publicApi = new kt(this)),
            (this._playbackControllerBox = new fe(null != i ? i : new St())),
            (this._prismOfStatePointer = se(
              () => this._playbackControllerBox.prism.getValue().statePointer
            )),
            (this._positionD = se(() => {
              const e = this._prismOfStatePointer.getValue();
              return ge(e.position);
            })),
            (this._positionFormatterD = se(() => {
              const e = ge(this._subUnitsPerUnitD);
              return new Bt(e);
            }));
        }
        pointerToPrism(e) {
          const { path: t } = j(e);
          if (0 === t.length)
            return se(() => ({
              length: ge(this.pointer.length),
              playing: ge(this.pointer.playing),
              position: ge(this.pointer.position),
            }));
          if (t.length > 1) return se(() => {});
          const [n] = t;
          return "length" === n
            ? this._lengthD
            : "position" === n
            ? this._positionD
            : se(
                "playing" === n
                  ? () => ge(this._prismOfStatePointer.getValue().playing)
                  : () => {}
              );
        }
        getKeyframesOfSimpleProp(e) {
          const { path: t, root: n } = j(e);
          if (!Dt(n))
            throw new vt(
              "Argument prop must be a pointer to a SheetObject property"
            );
          const o = ge(
            this._project.pointers.historic.sheetsById[
              this._sheet.address.sheetId
            ].sequence.tracksByObject[n.address.objectKey]
          );
          if (!o) return [];
          const { trackData: i, trackIdByPropPath: r } = o,
            s = r[gt(t)];
          if (!s) return [];
          const a = i[s];
          return a ? ke.getSortedKeyframesCached(a.keyframes) : [];
        }
        get positionFormatter() {
          return this._positionFormatterD.getValue();
        }
        get prismOfStatePointer() {
          return this._prismOfStatePointer;
        }
        get length() {
          return this._lengthD.getValue();
        }
        get positionPrism() {
          return this._positionD;
        }
        get position() {
          return this._playbackControllerBox.get().getCurrentPosition();
        }
        get subUnitsPerUnit() {
          return this._subUnitsPerUnitD.getValue();
        }
        get positionSnappedToGrid() {
          return this.closestGridPosition(this.position);
        }
        set position(e) {
          let t = e;
          this.pause(), t > this.length && (t = this.length);
          const n = this.length;
          this._playbackControllerBox.get().gotoPosition(t > n ? n : t);
        }
        getDurationCold() {
          return this._lengthD.getValue();
        }
        get playing() {
          return ge(this._playbackControllerBox.get().statePointer.playing);
        }
        _makeRangeFromSequenceTemplate() {
          return se(() => [0, ge(this._lengthD)]);
        }
        playDynamicRange(e, t) {
          return this._playbackControllerBox.get().playDynamicRange(e, t);
        }
        play(e, t) {
          return Nt(this, void 0, void 0, function* () {
            const n = this.length,
              o = e && e.range ? e.range : [0, n];
            const i =
              e && "number" == typeof e.iterationCount ? e.iterationCount : 1;
            const r = e && void 0 !== e.rate ? e.rate : 1;
            const s = e && e.direction ? e.direction : "normal";
            return yield this._play(i, [o[0], o[1]], r, s, t);
          });
        }
        _play(e, t, n, o, i) {
          return this._playbackControllerBox.get().play(e, t, n, o, i);
        }
        pause() {
          this._playbackControllerBox.get().pause();
        }
        replacePlaybackController(e) {
          this.pause();
          const t = this._playbackControllerBox.get();
          this._playbackControllerBox.set(e);
          const n = t.getCurrentPosition();
          t.destroy(), e.gotoPosition(n);
        }
      }
      class Bt {
        constructor(e) {
          this._fps = e;
        }
        formatSubUnitForGrid(e) {
          const t = e % 1,
            n = 1 / this._fps;
          return Math.round(t / n) + "f";
        }
        formatFullUnitForGrid(e) {
          let t = e,
            n = "";
          if (t >= Vt) {
            (n += Math.floor(t / Vt) + "h"), (t %= Vt);
          }
          if (t >= Ut) {
            (n += Math.floor(t / Ut) + "m"), (t %= Ut);
          }
          if (t >= Ft) {
            (n += Math.floor(t / Ft) + "s"), (t %= Ft);
          }
          const o = 1 / this._fps;
          if (t >= o) {
            (n += Math.floor(t / o) + "f"), (t %= o);
          }
          return 0 === n.length ? "0s" : n;
        }
        formatForPlayhead(e) {
          let t = e,
            n = "";
          if (t >= Vt) {
            const e = Math.floor(t / Vt);
            (n += (0, wt.A)(e.toString(), 2, "0") + "h"), (t %= Vt);
          }
          if (t >= Ut) {
            const e = Math.floor(t / Ut);
            (n += (0, wt.A)(e.toString(), 2, "0") + "m"), (t %= Ut);
          } else n.length > 0 && (n += "00m");
          if (t >= Ft) {
            const e = Math.floor(t / Ft);
            (n += (0, wt.A)(e.toString(), 2, "0") + "s"), (t %= Ft);
          } else n += "00s";
          const o = 1 / this._fps;
          if (t >= o) {
            const e = Math.round(t / o);
            (n += (0, wt.A)(e.toString(), 2, "0") + "f"), (t %= o);
          } else if (t / o > 0.98) {
            const e = 1;
            (n += (0, wt.A)(e.toString(), 2, "0") + "f"), (t %= o);
          } else n += "00f";
          return 0 === n.length ? "00s00f" : n;
        }
        formatBasic(e) {
          return e.toFixed(2) + "s";
        }
      }
      const Ft = 1,
        Ut = 60 * Ft,
        Vt = 60 * Ut;
      var Ht = n(5434);
      function Wt(e, { removeAlphaIfOpaque: t = !1 } = {}) {
        const n = ((255 * e.a) | 256).toString(16).slice(1);
        return `#${
          ((255 * e.r) | 256).toString(16).slice(1) +
          ((255 * e.g) | 256).toString(16).slice(1) +
          ((255 * e.b) | 256).toString(16).slice(1) +
          (t && "ff" === n ? "" : n)
        }`;
      }
      const $t = Ie((e) => {
        const t = Object.assign({}, e);
        return (
          Object.defineProperty(t, "toString", {
            value: () => Wt(e),
            enumerable: !1,
            writable: !1,
            configurable: !1,
          }),
          t
        );
      });
      function zt(e) {
        function t(e) {
          return e >= 0.0031308
            ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
            : 12.92 * e;
        }
        return (function (e) {
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => [e, (0, Ht.A)(t, 0, 1)])
          );
        })({ r: t(e.r), g: t(e.g), b: t(e.b), a: e.a });
      }
      function Gt(e) {
        function t(e) {
          return e >= 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
        }
        return { r: t(e.r), g: t(e.g), b: t(e.b), a: e.a };
      }
      function qt(e) {
        let t = 0.4122214708 * e.r + 0.5363325363 * e.g + 0.0514459929 * e.b,
          n = 0.2119034982 * e.r + 0.6806995451 * e.g + 0.1073969566 * e.b,
          o = 0.0883024619 * e.r + 0.2817188376 * e.g + 0.6299787005 * e.b,
          i = Math.cbrt(t),
          r = Math.cbrt(n),
          s = Math.cbrt(o);
        return {
          L: 0.2104542553 * i + 0.793617785 * r - 0.0040720468 * s,
          a: 1.9779984951 * i - 2.428592205 * r + 0.4505937099 * s,
          b: 0.0259040371 * i + 0.7827717662 * r - 0.808675766 * s,
          alpha: e.a,
        };
      }
      var Xt = n(2854);
      function Jt(e, t) {
        return e.length <= t ? e : e.substr(0, t - 3) + "...";
      }
      const Yt = (e) =>
          "string" == typeof e
            ? `string("${Jt(e, 10)}")`
            : "number" == typeof e
            ? `number(${Jt(String(e), 10)})`
            : null === e
            ? "null"
            : void 0 === e
            ? "undefined"
            : "boolean" == typeof e
            ? String(e)
            : Array.isArray(e)
            ? "array"
            : "object" == typeof e
            ? "object"
            : "unknown",
        Kt = Symbol("TheatrePropType_Basic");
      function Zt(e) {
        return "object" == typeof e && !!e && "TheatrePropType" === e[Kt];
      }
      function Qt(e) {
        if ("number" == typeof e) return tn(e);
        if ("boolean" == typeof e) return ln(e);
        if ("string" == typeof e) return fn(e);
        if ("object" == typeof e && e) {
          if (Zt(e)) return e;
          if ((0, x.A)(e)) return en(e);
          throw new vt(`This value is not a valid prop type: ${Yt(e)}`);
        }
        throw new vt(`This value is not a valid prop type: ${Yt(e)}`);
      }
      const en = (e, t = {}) => {
          const n = (function (e) {
              const t = {};
              for (const n of Object.keys(e)) {
                const o = e[n];
                Zt(o) ? (t[n] = o) : (t[n] = Qt(o));
              }
              return t;
            })(e),
            o = new WeakMap();
          return {
            type: "compound",
            props: n,
            valueType: null,
            [Kt]: "TheatrePropType",
            label: t.label,
            default: (0, Xt.A)(n, (e) => e.default),
            deserializeAndSanitize: (e) => {
              if ("object" != typeof e || !e) return;
              if (o.has(e)) return o.get(e);
              const t = {};
              let i = !1;
              for (const [o, r] of Object.entries(n))
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  const n = r.deserializeAndSanitize(e[o]);
                  null != n && ((i = !0), (t[o] = n));
                }
              return o.set(e, t), i ? t : void 0;
            },
          };
        },
        tn = (e, t = {}) => {
          var n;
          return Object.assign(
            Object.assign(
              {
                type: "number",
                valueType: 0,
                default: e,
                [Kt]: "TheatrePropType",
              },
              t || {}
            ),
            {
              label: t.label,
              nudgeFn: null !== (n = t.nudgeFn) && void 0 !== n ? n : hn,
              nudgeMultiplier:
                "number" == typeof t.nudgeMultiplier
                  ? t.nudgeMultiplier
                  : void 0,
              interpolate: rn,
              deserializeAndSanitize: nn(t.range),
            }
          );
        },
        nn = (e) =>
          e
            ? (t) => {
                if ("number" == typeof t && isFinite(t))
                  return (0, Ht.A)(t, e[0], e[1]);
              }
            : on,
        on = (e) => ("number" == typeof e && isFinite(e) ? e : void 0),
        rn = (e, t, n) => e + n * (t - e),
        sn = (e = { r: 0, g: 0, b: 0, a: 1 }, t = {}) => {
          const n = {};
          for (const t of ["r", "g", "b", "a"])
            n[t] = Math.min(Math.max(e[t], 0), 1);
          return {
            type: "rgba",
            valueType: null,
            default: $t(n),
            [Kt]: "TheatrePropType",
            label: t.label,
            interpolate: cn,
            deserializeAndSanitize: an,
          };
        },
        an = (e) => {
          if (!e) return;
          let t = !0;
          for (const n of ["r", "g", "b", "a"])
            (Object.prototype.hasOwnProperty.call(e, n) &&
              "number" == typeof e[n]) ||
              (t = !1);
          if (!t) return;
          const n = {};
          for (const t of ["r", "g", "b", "a"])
            n[t] = Math.min(Math.max(e[t], 0), 1);
          return $t(n);
        },
        cn = (e, t, n) => {
          const o = qt(Gt(e)),
            i = qt(Gt(t)),
            r = zt(
              (function (e) {
                let t = e.L + 0.3963377774 * e.a + 0.2158037573 * e.b,
                  n = e.L - 0.1055613458 * e.a - 0.0638541728 * e.b,
                  o = e.L - 0.0894841775 * e.a - 1.291485548 * e.b,
                  i = t * t * t,
                  r = n * n * n,
                  s = o * o * o;
                return {
                  r: 4.0767416621 * i - 3.3077115913 * r + 0.2309699292 * s,
                  g: -1.2684380046 * i + 2.6097574011 * r - 0.3413193965 * s,
                  b: -0.0041960863 * i - 0.7034186147 * r + 1.707614701 * s,
                  a: e.alpha,
                };
              })({
                L: (1 - n) * o.L + n * i.L,
                a: (1 - n) * o.a + n * i.a,
                b: (1 - n) * o.b + n * i.b,
                alpha: (1 - n) * o.alpha + n * i.alpha,
              })
            );
          return $t(r);
        },
        ln = (e, t = {}) => {
          var n;
          return {
            type: "boolean",
            default: e,
            valueType: null,
            [Kt]: "TheatrePropType",
            label: t.label,
            interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : dn,
            deserializeAndSanitize: un,
          };
        },
        un = (e) => ("boolean" == typeof e ? e : void 0);
      function dn(e) {
        return e;
      }
      const fn = (e, t = {}) => {
        var n;
        return {
          type: "string",
          default: e,
          valueType: null,
          [Kt]: "TheatrePropType",
          label: t.label,
          interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : dn,
          deserializeAndSanitize: pn,
        };
      };
      function pn(e) {
        return "string" == typeof e ? e : void 0;
      }
      const hn = ({ config: e, deltaX: t, deltaFraction: n, magnitude: o }) => {
        var i;
        const { range: r } = e;
        return e.nudgeMultiplier ||
          !r ||
          r.includes(1 / 0) ||
          r.includes(-1 / 0)
          ? t * o * (null !== (i = e.nudgeMultiplier) && void 0 !== i ? i : 1)
          : n * (r[1] - r[0]) * o;
      };
      function mn(e, t, n) {
        const o = e
          .replace(/^[\s\/]*/, "")
          .replace(/[\s\/]*$/, "")
          .replace(/\s*\/\s*/g, " / ");
        return o;
      }
      new WeakMap();
      class gn {
        get type() {
          return "Theatre_Sheet_PublicAPI";
        }
        constructor(e) {
          Se(this, e);
        }
        object(e, t, n) {
          const o = _e(this),
            i = mn(e, 0, Ot.warning),
            r = o.getObject(i),
            s =
              null == n
                ? void 0
                : n.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
          if (r) return s && r.template._temp_setActions(s), r.publicApi;
          {
            const e = en(t);
            return o.createObject(i, null, e, s).publicApi;
          }
        }
        get sequence() {
          return _e(this).getSequence().publicApi;
        }
        get project() {
          return _e(this).project.publicApi;
        }
        get address() {
          return Object.assign({}, _e(this).address);
        }
        detachObject(e) {
          const t = _e(this),
            n = mn(e, 0, Ot.warning);
          if (!t.getObject(n))
            return (
              Ot.warning(
                `Couldn't delete object "${n}"`,
                `There is no object with key "${n}".\n\nTo fix this, make sure you are calling \`sheet.deleteObject("${n}")\` with the correct key.`
              ),
              void console.warn(`Object key "${n}" does not exist.`)
            );
          t.deleteObject(n);
        }
      }
      var yn = n(2727);
      class vn {
        constructor(e, t) {
          (this.template = e),
            (this.instanceId = t),
            (this._objects = new fe({})),
            (this.objectsP = this._objects.pointer),
            (this.type = "Theatre_Sheet"),
            (this._logger = e.project._logger.named("Sheet", t)),
            this._logger._trace("creating sheet"),
            (this.project = e.project),
            (this.address = Object.assign(Object.assign({}, e.address), {
              sheetInstanceId: this.instanceId,
            })),
            (this.publicApi = new gn(this));
        }
        createObject(e, t, n, o = {}) {
          const i = this.template
            .getObjectTemplate(e, t, n, o)
            .createInstance(this, t, n);
          return this._objects.setByPointer((t) => t[e], i), i;
        }
        getObject(e) {
          return this._objects.get()[e];
        }
        deleteObject(e) {
          this._objects.reduce((t) => {
            const n = Object.assign({}, t);
            return delete n[e], n;
          });
        }
        getSequence() {
          if (!this._sequence) {
            const e = se(() => {
                const e = ge(
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ].sequence.length
                );
                return wn(e);
              }),
              t = se(() => {
                const e = ge(
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ].sequence.subUnitsPerUnit
                );
                return bn(e);
              });
            this._sequence = new Lt(this.template.project, this, e, t);
          }
          return this._sequence;
        }
      }
      const wn = (e) => ("number" == typeof e && isFinite(e) && e > 0 ? e : 10),
        bn = (e) =>
          "number" == typeof e && (0, yn.A)(e) && e >= 1 && e <= 1e3 ? e : 30;
      class _n {
        constructor(e, t) {
          (this.project = e),
            (this.type = "Theatre_SheetTemplate"),
            (this._instances = new fe({})),
            (this.instancesP = this._instances.pointer),
            (this._objectTemplates = new fe({})),
            (this.objectTemplatesP = this._objectTemplates.pointer),
            (this.address = Object.assign(Object.assign({}, e.address), {
              sheetId: t,
            }));
        }
        getInstance(e) {
          let t = this._instances.get()[e];
          return (
            t ||
              ((t = new vn(this, e)),
              this._instances.setByPointer((t) => t[e], t)),
            t
          );
        }
        getObjectTemplate(e, t, n, o) {
          let i = this._objectTemplates.get()[e];
          return (
            i ||
              ((i = new ht(this, e, t, n, o)),
              this._objectTemplates.setByPointer((t) => t[e], i)),
            i
          );
        }
      }
      const Sn = { currentProjectStateDefinitionVersion: "0.4.0" };
      function En() {}
      function Pn(e) {
        var t, n;
        const o = (
            null === (t = null == e ? void 0 : e.logging) || void 0 === t
              ? void 0
              : t.internal
          )
            ? null !== (n = e.logging.min) && void 0 !== n
              ? n
              : Xe.WARN
            : 1 / 0,
          i = o <= Xe.DEBUG,
          r = o <= Xe.ERROR,
          s = tt(void 0, {
            _debug: i
              ? console.debug.bind(
                  console,
                  "_coreLogger(TheatreInternalLogger) debug"
                )
              : En,
            _error: r
              ? console.error.bind(
                  console,
                  "_coreLogger(TheatreInternalLogger) error"
                )
              : En,
          });
        if (e) {
          const { logger: t, logging: n } = e;
          t && s.configureLogger(t),
            n ? s.configureLogging(n) : s.configureLogging({ dev: !1 });
        }
        return s.getLogger().named("Theatre");
      }
      class On {
        constructor(e, t = {}, n) {
          var o;
          (this.config = t),
            (this.publicApi = n),
            (this._sheetTemplates = new fe({})),
            (this.sheetTemplatesP = this._sheetTemplates.pointer),
            (this.type = "Theatre_Project"),
            (this._logger = Pn({ logging: { dev: !0 } }).named("Project", e)),
            this._logger.traceDev("creating project"),
            (this.address = { projectId: e });
          const i = new fe({
            loadingState: { type: "loaded" },
            lastExportedObject: null,
          });
          t.state &&
            Object.values(t.state.sheetsById).forEach((e) =>
              Object.values(e.sequence.tracksByObject).forEach((e) =>
                Object.values(e.trackData).forEach((e) => {
                  e.keyframes = ke.fromArray(e.keyframes);
                })
              )
            );
          const r = new fe({
            historic:
              null !== (o = t.state) && void 0 !== o
                ? o
                : {
                    sheetsById: {},
                    definitionVersion: Sn.currentProjectStateDefinitionVersion,
                    revisionHistory: [],
                  },
          });
          (this.diskStateAtom = r),
            (this._assetStorageReadyDeferred = bt()),
            (this.assetStorage = {
              getAssetUrl: (e) => {
                var n;
                return `${
                  null === (n = t.assets) || void 0 === n ? void 0 : n.baseUrl
                }/${e}`;
              },
              createAsset: () => {
                throw new Error("Please wait for Project.ready to use assets.");
              },
            }),
            (this._pointerProxies = {
              historic: new ve(r.pointer.historic),
              ephemeral: new ve(i.pointer),
            }),
            (this.pointers = {
              historic: this._pointerProxies.historic.pointer,
              ephemeral: this._pointerProxies.ephemeral.pointer,
            }),
            we.add(e, this),
            (this._studioReadyDeferred = bt()),
            this._studioReadyDeferred.resolve(void 0),
            this._assetStorageReadyDeferred.resolve(void 0),
            (this._readyPromise = Promise.all([
              this._studioReadyDeferred.promise,
              this._assetStorageReadyDeferred.promise,
            ]).then(() => {})),
            t.state ||
              ("undefined" == typeof window &&
                console.error(
                  `Argument config.state in Theatre.getProject("${e}", config) is empty. You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state`
                ));
        }
        attachToStudio() {
          throw new Error(
            "Studio has been removed! This function should not be called anymore"
          );
        }
        get isAttachedToStudio() {
          return (
            console.error(
              "Studio has been removed! This function shouldn't be called anymore"
            ),
            !1
          );
        }
        get ready() {
          return this._readyPromise;
        }
        isReady() {
          return (
            "resolved" === this._studioReadyDeferred.status &&
            "resolved" === this._assetStorageReadyDeferred.status
          );
        }
        getOrCreateSheet(e, t = "default") {
          let n = this._sheetTemplates.get()[e];
          return (
            n ||
              ((n = new _n(this, e)),
              this._sheetTemplates.reduce((t) =>
                Object.assign(Object.assign({}, t), { [e]: n })
              )),
            n.getInstance(t)
          );
        }
      }
      class Tn {
        get type() {
          return "Theatre_Project_PublicAPI";
        }
        constructor(e, t = {}) {
          Se(this, new On(e, t, this));
        }
        get ready() {
          return _e(this).ready;
        }
        get isReady() {
          return _e(this).isReady();
        }
        get address() {
          return Object.assign({}, _e(this).address);
        }
        getAssetUrl(e) {
          if (this.isReady)
            return e.id ? _e(this).assetStorage.getAssetUrl(e.id) : void 0;
          console.error(
            "Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`."
          );
        }
        sheet(e, t = "default") {
          const n = mn(e, 0, Ot.warning);
          return _e(this).getOrCreateSheet(n, t).publicApi;
        }
        setState(e) {
          _e(this).diskStateAtom.setByPointer(
            _e(this).diskStateAtom.pointer.historic.sheetsById,
            e
          );
        }
      }
      n(8792);
      const Mn = (e, t) => {
        ((e, t) => {
          if (
            Array.isArray(t) ||
            null == t ||
            t.definitionVersion !== Sn.currentProjectStateDefinitionVersion
          )
            throw new vt(
              `Error validating conf.state in Theatre.getProject(${JSON.stringify(
                e
              )}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state`
            );
        })(e, t);
      };
      class xn {
        constructor() {}
        get type() {
          return "Theatre_CoreBundle";
        }
        get version() {
          return process.env.THEATRE_VERSION;
        }
        getBitsForStudio(e, t) {
          throw new Error(
            "Studio has been removed! This function shouldn't be called anymore"
          );
        }
      }
      !(function () {
        if (
          "undefined" == typeof window &&
          !0 !== n.g.__THEATREJS__FORCE_CONNECT_CORE_AND_STUDIO
        )
          return;
        const e = "undefined" != typeof window ? window : n.g,
          t = e[Et];
        if (void 0 !== t) {
          if ("object" == typeof t && t && "string" == typeof t.version)
            throw new Error(
              "It seems that the module '@theatre-local/core' is loaded more than once. This could have two possible causes:\n1. You might have two separate versions of Theatre.js in node_modules.\n2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.\n\nNote that it **is okay** to import '@theatre-local/core' multiple times. But those imports should point to the same module."
            );
          console.warn(
            `The variable window.${Et} seems to be already set by a module other than @theatre-local/core.`
          );
        }
        const o = new xn();
        e[Et] = o;
      })();
      var Rn = n(8067);
      function An(e) {
        return `${e.uuid}`;
      }
      const Cn = 10,
        In = [
          "color",
          "emissive",
          "specular",
          "specularColor",
          "attenuationColor",
          "sheenColor",
        ],
        kn = -911231231231232,
        Dn = { r: 0, g: 0, b: 0, a: 123456789 * Number.EPSILON };
      function jn(e, t) {
        let n = !0;
        const o = (function (e, t = {}) {
            const n = we.get(e);
            if (n) return n.publicApi;
            const o = Pn().named("Project", e);
            return (
              t.state
                ? (Mn(e, t.state),
                  o._debug("deep validated config.state on disk"))
                : o._debug("no config.state"),
              new Tn(e, t)
            );
          })(e, { state: t }),
          i = new Map();
        return {
          getAnimation: function (e) {
            const t = o.sheet(e);
            return {
              play: function () {
                t.sequence.play({ rate: 1 / Cn });
              },
              pause: function () {
                t.sequence.pause();
              },
              setPosition: function (e) {
                t.sequence.position = e;
              },
              animateObject3D: function (e) {
                if (i.has(e.uuid)) return;
                const o = (() => {
                  if ((0, Rn.T4)(e)) {
                    const t = { intensity: tn(kn), color: sn(Dn) };
                    return (0, Rn.$s)(e)
                      ? Object.assign(Object.assign({}, t), {
                          distance: tn(kn),
                          decay: tn(kn),
                        })
                      : (0, Rn.pr)(e)
                      ? Object.assign(Object.assign({}, t), {
                          distance: tn(kn),
                          angle: tn(kn),
                          penumbra: tn(kn),
                          decay: tn(kn),
                        })
                      : t;
                  }
                })();
                function r(e, t) {
                  t.x !== kn && (e.x = t.x),
                    t.y !== kn && (e.y = t.y),
                    t.z !== kn && (e.z = t.z);
                }
                const s = t
                  .object(
                    An(e),
                    Object.assign(
                      {
                        position: en({ x: tn(kn), y: tn(kn), z: tn(kn) }),
                        rotation: en({ x: tn(kn), y: tn(kn), z: tn(kn) }),
                        scale: en({ x: tn(kn), y: tn(kn), z: tn(kn) }),
                      },
                      o
                    )
                  )
                  .onValuesChange((t) => {
                    n &&
                      (r(e.position, t.position),
                      r(e.rotation, t.rotation),
                      r(e.scale, t.scale),
                      o &&
                        Object.entries(o).forEach(([n, o]) => {
                          const i = t[n];
                          if ("rgba" === o.type) {
                            if (i.a === Dn.a) return;
                            const t = new T.Q1f(String(Wt(i)).slice(0, -2));
                            e[n] = t;
                          } else if ("number" === o.type) {
                            if (i === kn) return;
                            e[n] = i;
                          }
                        }));
                  });
                i.set(e.uuid, s);
              },
              animateMaterial: function (e) {
                if (i.has(e.uuid)) return;
                const o = f.RL[e.type],
                  r = f.LX[o],
                  s = {};
                r.forEach((e) => {
                  In.includes(e) ? (s[e] = sn(Dn)) : (s[e] = tn(kn));
                });
                const a = t
                  .object(An(e), s, { reconfigure: !0 })
                  .onValuesChange((t) => {
                    if (n) for (const e in t) In.includes(e) ? i(e) : o(e);
                    function o(n, o) {
                      t[n] !== kn &&
                        void 0 !== e[n] &&
                        ((e[n] = o || t[n]),
                        "attenuationDistance" === n &&
                          0 === e[n] &&
                          (e[n] = 1 / 0));
                    }
                    function i(e) {
                      t[e].a !== Dn.a &&
                        o(e, new T.Q1f(String(Wt(t[e])).slice(0, -2)));
                    }
                  });
                i.set(e.uuid, a);
              },
              removeObjectAnimation: function (e) {
                const n = i.get(e.uuid);
                n && (n(), t.detachObject(An(e)), i.delete(e.uuid));
              },
              animationSheet: t,
            };
          },
          setState: function (e) {
            o.setState(e);
          },
          setActive: function (e) {
            if (((n = e), e)) {
              const e = o.sheet(f.H0).sequence.position;
              (o.sheet(f.H0).sequence.position += e > 1e-5 ? -1e-5 : 1e-5),
                setTimeout(() => {
                  o.sheet(f.H0).sequence.position = e;
                });
            }
          },
        };
      }
      var Nn = n(592),
        Ln = n(4277),
        Bn = n(8949),
        Fn = n(5803);
      const Un = Math.pow,
        Vn = Math.sqrt,
        Hn = Math.sin,
        Wn = Math.cos,
        $n = Math.PI,
        zn = 1.70158,
        Gn = 1.525 * zn,
        qn = zn + 1,
        Xn = (2 * $n) / 3,
        Jn = (2 * $n) / 4.5,
        Yn = function (e) {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
            ? t * (e -= 1.5 / n) * e + 0.75
            : e < 2.5 / n
            ? t * (e -= 2.25 / n) * e + 0.9375
            : t * (e -= 2.625 / n) * e + 0.984375;
        },
        Kn = {
          lenisDefault: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          linear: (e) => e,
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return 1 - (1 - e) * (1 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : 1 - Un(-2 * e + 2, 2) / 2;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return 1 - Un(1 - e, 3);
          },
          easeInOutCubic: function (e) {
            return e < 0.5 ? 4 * e * e * e : 1 - Un(-2 * e + 2, 3) / 2;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - Un(1 - e, 4);
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - Un(-2 * e + 2, 4) / 2;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 - Un(1 - e, 5);
          },
          easeInOutQuint: function (e) {
            return e < 0.5 ? 16 * e * e * e * e * e : 1 - Un(-2 * e + 2, 5) / 2;
          },
          easeInSine: function (e) {
            return 1 - Wn((e * $n) / 2);
          },
          easeOutSine: function (e) {
            return Hn((e * $n) / 2);
          },
          easeInOutSine: function (e) {
            return -(Wn($n * e) - 1) / 2;
          },
          easeInExpo: function (e) {
            return 0 === e ? 0 : Un(2, 10 * e - 10);
          },
          easeOutExpo: function (e) {
            return 1 === e ? 1 : 1 - Un(2, -10 * e);
          },
          easeInOutExpo: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? Un(2, 20 * e - 10) / 2
              : (2 - Un(2, -20 * e + 10)) / 2;
          },
          easeInCirc: function (e) {
            return 1 - Vn(1 - Un(e, 2));
          },
          easeOutCirc: function (e) {
            return Vn(1 - Un(e - 1, 2));
          },
          easeInOutCirc: function (e) {
            return e < 0.5
              ? (1 - Vn(1 - Un(2 * e, 2))) / 2
              : (Vn(1 - Un(-2 * e + 2, 2)) + 1) / 2;
          },
          easeInBack: function (e) {
            return qn * e * e * e - zn * e * e;
          },
          easeOutBack: function (e) {
            return 1 + qn * Un(e - 1, 3) + zn * Un(e - 1, 2);
          },
          easeInOutBack: function (e) {
            return e < 0.5
              ? (Un(2 * e, 2) * (7.189819 * e - Gn)) / 2
              : (Un(2 * e - 2, 2) * ((Gn + 1) * (2 * e - 2) + Gn) + 2) / 2;
          },
          easeInElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : -Un(2, 10 * e - 10) * Hn((10 * e - 10.75) * Xn);
          },
          easeOutElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : Un(2, -10 * e) * Hn((10 * e - 0.75) * Xn) + 1;
          },
          easeInOutElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? (-Un(2, 20 * e - 10) * Hn((20 * e - 11.125) * Jn)) / 2
              : (Un(2, -20 * e + 10) * Hn((20 * e - 11.125) * Jn)) / 2 + 1;
          },
          easeInBounce: function (e) {
            return 1 - Yn(1 - e);
          },
          easeOutBounce: Yn,
          easeInOutBounce: function (e) {
            return e < 0.5 ? (1 - Yn(1 - 2 * e)) / 2 : (1 + Yn(2 * e - 1)) / 2;
          },
        };
      var Zn = n(3631);
      const Qn = new (class {
        constructor() {
          (this.lenis = null),
            (this.rafId = null),
            (this.attachScrollListener = (e) => {
              this.listeners.add(e);
            }),
            (this.detachScrollListener = (e) => {
              this.listeners.delete(e);
            }),
            (this.onScroll = () => {
              const e = this.listeners;
              for (const t of e)
                try {
                  t();
                } catch (e) {
                  console.error("Scroll listener callback error:", e);
                }
            }),
            (this.overrideLenisSetScrollFunction = (e) => {
              e.setScroll = (t) => {
                const n = e.velocity,
                  o = e.rootElement,
                  i =
                    n > 0
                      ? Math.ceil(t)
                      : n < 0
                      ? Math.floor(t)
                      : Math.round(t);
                e.isHorizontal
                  ? (o.scrollLeft = Math.round(i))
                  : (o.scrollTop = Math.round(i));
              };
            }),
            (this.prepareLenisConfig = (e) => {
              const t = {
                  syncTouch: !Ln.PG,
                  duration: 1.2,
                  easing: Kn.lenisDefault,
                },
                n = null == e ? void 0 : e.easing;
              n in Kn && (t.easing = Kn[n]);
              const o = (0, Zn.eB)((null == e ? void 0 : e.duration) / 1e3, 3);
              o >= 0 && (t.duration = o);
              const i = (0, Zn.eB)(+e.speed / 100, 2);
              i > 0 && ((t.wheelMultiplier = i), (t.touchMultiplier = i)),
                (t.infinite = !!(null == e ? void 0 : e.isInfinite)),
                (this.lenisConfig = t);
            }),
            (this.prepareLenisRaf = () => {
              const e = (t) => {
                this.lenis.raf(t), (this.rafId = requestAnimationFrame(e));
              };
              this.rafId = requestAnimationFrame(e);
            }),
            (this.reinitialize = (e) => {
              var t, n;
              const o = this.getDeviceSize(),
                i =
                  null ===
                    (n =
                      null === (t = null == e ? void 0 : e.devices) ||
                      void 0 === t
                        ? void 0
                        : t[o]) || void 0 === n
                    ? void 0
                    : n.scrollSettings;
              window.scrollTo(0, 0),
                (null == i ? void 0 : i.type) === p.J.Smooth
                  ? ((this.type = p.J.Smooth),
                    this.prepareLenisConfig(i),
                    (this.lenis = new Fn.A(this.lenisConfig)),
                    this.overrideLenisSetScrollFunction(this.lenis),
                    this.lenis.on("scroll", this.onScroll),
                    this.prepareLenisRaf())
                  : ((this.type = p.J.Native),
                    window.addEventListener("scroll", this.onScroll)),
                (0, Bn.W)(() => {
                  this.lenis && (this.lenis.destroy(), (this.lenis = null)),
                    this.rafId && cancelAnimationFrame(this.rafId),
                    window.removeEventListener("scroll", this.onScroll);
                });
            }),
            (this.getDeviceSize = () => {
              const e =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
              return e < f.mq
                ? p.SN.Mobile
                : e < f.g4
                ? p.SN.Tablet
                : p.SN.Desktop;
            }),
            (this.getScrollParameters = () => {
              let e, t, n;
              if (this.type === p.J.Smooth && this.lenis)
                ({ height: e, scrollHeight: t } = this.lenis.dimensions),
                  (n = this.lenis.scroll);
              else {
                (e = window.innerHeight),
                  (t = document.documentElement.scrollHeight);
                const o = document.body.getBoundingClientRect();
                n = Math.max(0, 0 - o.y);
              }
              return { height: e, scrollHeight: t, scrolled: n };
            }),
            (this.scrollToElement = (e, t, n) => {
              if (e)
                if (this.type === p.J.Smooth) {
                  if (!this.lenis) return;
                  this.lenis.scrollTo(e, { offset: t, immediate: n });
                } else {
                  const o = e.getBoundingClientRect().top + t + window.scrollY;
                  window.scrollTo({ top: o, behavior: n ? "auto" : "smooth" });
                }
            }),
            (this.type = p.J.Native),
            (this.listeners = new Set());
        }
      })();
      var eo = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      const to = {};
      function no(e, t, n) {
        return eo(this, void 0, void 0, function* () {
          if (!e) return;
          const o = document.getElementsByClassName(c)[0];
          if (!o) return;
          const i = document.createElement("canvas");
          o.appendChild(i);
          const r = (0, Nn.Vy)(i, e.autoResolutionSettings);
          to.builder = r;
          const {
              pwObjects: s,
              pwMaterials: a,
              parents: l,
              children: u,
              effects: d,
              pwObjectsUsingPwMaterial: f,
              sharedMaterials: p,
            } = e,
            h = Object.assign(Object.assign({}, e), {
              pwObjects: new Map(Object.entries(s)),
              pwMaterials: new Map(Object.entries(a)),
              parents: new Map(Object.entries(l)),
              children: new Map(Object.entries(u)),
              effects: new Map(Object.entries(d || {})),
              pwObjectsUsingPwMaterial: new Map(Object.entries(f || {})),
              sharedMaterials: new Set(p),
            });
          let m;
          const g = new Promise((e) => {
            m = e;
          });
          return (
            r.listenTo(Nn.bd.SceneReady, () => {
              null == m || m(void 0);
            }),
            r.initializeClient(h, t, n),
            yield g,
            Ln.MR && r.showStatsPanel(document.body),
            (0, Bn.W)(() => {
              var e;
              null === (e = to.builder) || void 0 === e || e.dispose(),
                (to.builder = void 0);
            }),
            r
          );
        });
      }
      function oo(e, t) {
        return eo(this, void 0, void 0, function* () {
          if (!e) return;
          const { builder: n } = to;
          if (!n) return;
          window.scrollTo(0, 0), (to.anchors = t[p.BX.Anchors] || {});
          const o = jn("default project");
          o.setState(e.sheetsById);
          const i = o.getAnimation(f.H0),
            r = e.sheetsById[f.H0].sequence;
          if (!r) return void console.error("No animation sheet state found!");
          const { tracksByObject: a = {}, unitType: c, lengthInUnits: l } = r;
          Object.keys(a).forEach((e) => {
            const t = n.getMaterial(e);
            if (t) return void i.animateMaterial(t);
            const o = n.getObject(e);
            o && i.animateObject3D(o);
          });
          const u = Array.from(document.getElementsByClassName(s));
          function d() {
            const {
              height: e,
              scrollHeight: t,
              scrolled: n,
            } = Qn.getScrollParameters();
            if ("percentage" === c) {
              return (function (e, t, n, o) {
                const i = t + n,
                  r = o
                    .filter((e) => e.position > t)
                    .sort((e, t) => e.position - t.position);
                let s, a;
                for (const e of r) {
                  if (!(e.position <= i)) {
                    s = e;
                    break;
                  }
                  a = e;
                }
                let c = a ? a.position : t;
                c = Math.max(c, t);
                const l = a ? (null == a ? void 0 : a.percentage) : 0,
                  u = s ? s.position : e,
                  d = s ? (null == s ? void 0 : s.percentage) : 1;
                return c === u ? l : T.cj9.mapLinear(i, c, u, l, d);
              })(
                t,
                e,
                n,
                u.map((e) => {
                  var t, n;
                  return {
                    position: e.offsetTop,
                    percentage:
                      (null ===
                        (n =
                          null === (t = to.anchors) || void 0 === t
                            ? void 0
                            : t[e.id]) || void 0 === n
                        ? void 0
                        : n.percentage) || 0,
                  };
                })
              );
            }
            return "dynamicViewPort" === c
              ? ((n / e) * 100) / l
              : (console.error(`Animation unit type: <${c}> not supported.`),
                0);
          }
          const h = () => {
            const e = d();
            i.setPosition(e);
          };
          Qn.attachScrollListener(h),
            (0, Bn.W)(() => {
              Qn.detachScrollListener(h);
            });
        });
      }
      var io, ro, so, ao;
      function co(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function lo(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      !(function (e) {
        (e.UIOverlay = "uiOverlay"), (e.UIAudio = "uiAudio");
      })(io || (io = {})),
        (function (e) {
          (e.Play = "play"),
            (e.Pause = "pause"),
            (e.Stop = "stop"),
            (e.TogglePlayPause = "toggle_play_pause"),
            (e.TogglePlayStop = "toggle_play_stop");
        })(ro || (ro = {})),
        (function (e) {
          (e.Open = "open"),
            (e.Close = "close"),
            (e.ToggleOpenClose = "toggle_open_close");
        })(so || (so = {})),
        (function (e) {
          (e.MouseClick = "mouseClick"),
            (e.MouseEnter = "mouseEnter"),
            (e.MouseLeave = "mouseLeave");
        })(ao || (ao = {}));
      const uo = {
        listeners: { [io.UIOverlay]: new Set(), [io.UIAudio]: new Set() },
      };
      function fo(e, t) {
        uo.listeners[e].add(t);
      }
      function po(e, t) {
        uo.listeners[e].delete(t);
      }
      function ho(e, t) {
        !(function (e, t, n) {
          const o = uo.listeners[e];
          for (const e of o)
            try {
              e(((i = t), JSON.parse(JSON.stringify(i))), n);
            } catch (e) {
              console.error("Interaction error:", e);
            }
          var i;
        })(e.type, e, t);
      }
      function mo(e) {
        return [io.UIAudio, io.UIOverlay].includes(e.type) && !!e.id;
      }
      function go(e) {
        return `pwb-ignore-click-ui-overlay-interaction-${e}`;
      }
      const yo = {
        [ao.MouseClick]: function (e) {
          const { el: t } = e,
            { actions: n, mouseCursor: o } = e.interaction;
          !(function (e) {
            const { el: t } = e,
              { actions: n } = e.interaction,
              o = new Set();
            for (const e of n) {
              if (e.type !== io.UIOverlay) return;
              if (!e.id) return;
              o.add(go(e.id));
            }
            for (const e of o) t.classList.add(e);
          })(e),
            o === m.si.Pointer && (t.style.cursor = "pointer"),
            t.addEventListener("click", (e) => {
              co(e), lo(e);
              for (const e of n) ho(e, ao.MouseClick);
            });
        },
        [ao.MouseEnter]: function (e) {
          const { el: t } = e,
            { actions: n } = e.interaction;
          t.addEventListener("mouseenter", () => {
            for (const e of n) ho(e, ao.MouseEnter);
          });
        },
        [ao.MouseLeave]: function (e) {
          const { el: t } = e,
            { actions: n } = e.interaction;
          t.addEventListener("mouseleave", () => {
            for (const e of n) ho(e, ao.MouseLeave);
          });
        },
      };
      function vo(e) {
        const t = (function (e) {
          const t = [];
          if (!e) return t;
          const n = e[p.BX.Interactions] || {};
          return (
            Object.entries(n).forEach(([e, n]) => {
              if (!n) return;
              const o = document.getElementById(e);
              if (o)
                for (const e of n) {
                  const n = e.actions.filter((e) => mo(e));
                  n.length <= 0 ||
                    t.push({
                      el: o,
                      interaction: {
                        triggerType: e.triggerType,
                        mouseCursor: e.mouseCursor,
                        actions: n,
                      },
                    });
                }
            }),
            t
          );
        })(e);
        for (const e of t) yo[e.interaction.triggerType](e);
      }
      const wo = {};
      function bo() {
        if (wo.scrollSections) return wo.scrollSections;
        throw new Error(
          "ScrollSectionsModule needs to be initialized before the findAllScrollSections function can be called."
        );
      }
      function _o(e) {
        wo.scrollSections = (function (e) {
          const t = new Map();
          if (!e) return t;
          const n = e.sections || {};
          return (
            Object.entries(n).forEach(([e, n]) => {
              if (!(null == n ? void 0 : n.hash)) return;
              const o = document.getElementById(e);
              if (!o) return;
              const { hash: i, offsetY: r } = n;
              t.set(e, { id: e, hash: i, offsetY: r || 0, el: o });
            }),
            t
          );
        })(e);
      }
      function So(e, t) {
        const n = new Map();
        if (!e) return n;
        const o = e.links || {};
        return (
          Object.entries(o).forEach(([e, o]) => {
            if (!o) return;
            const i = (function (e, t) {
              if (e.type === p.Pc.External) {
                if ("string" != typeof e.url) return;
                const t = e.url.trim();
                if (!t) return;
                return {
                  type: p.Pc.External,
                  url: (0, h.Pc)(t),
                  newTab: !!e.newTab,
                };
              }
              if (e.type === p.Pc.Internal) {
                if (!e.pageId) return;
                if (!e.pagePath) return;
                const n = !!e.newTab,
                  o = e.sectionId ? t.get(e.sectionId) : void 0;
                return {
                  type: p.Pc.Internal,
                  pageId: e.pageId,
                  pagePath: e.pagePath,
                  sectionId: e.sectionId,
                  sectionHash: e.sectionHash,
                  sectionEl: null == o ? void 0 : o.el,
                  sectionOffsetY: (null == o ? void 0 : o.offsetY) || 0,
                  newTab: n,
                  smoothScroll: !n && !!e.smoothScroll,
                };
              }
            })(o, t);
            i && n.set(e, i);
          }),
          n
        );
      }
      function Eo(e) {
        const t = window;
        return (n) => {
          co(n), lo(n);
          const o = e.url;
          n.ctrlKey || n.metaKey || e.newTab || Ln.kr
            ? t.open(o, "_blank")
            : n.shiftKey
            ? t.open(o)
            : (t.location.href = o);
        };
      }
      function Po(e) {
        const t = window;
        return (n) => {
          co(n), lo(n);
          const o = e.newTab && Ln.kr;
          if (e.newTab && !o) {
            const n = window.location.href,
              o = (0, h.sh)(n, e.pagePath, e.sectionHash);
            return void t.open(o, "_blank");
          }
          if (vr() !== e.pagePath) return void Or(e.pagePath, e.sectionHash);
          const i = !e.smoothScroll && !o;
          Qn.scrollToElement(e.sectionEl, e.sectionOffsetY, i);
        };
      }
      function Oo(e) {
        const t = bo(),
          n = So(e, t);
        for (const [e, t] of n) {
          const n = document.getElementById(e);
          if (!n) continue;
          const o = t.type === p.Pc.External ? Eo(t) : Po(t);
          (n.style.cursor = "pointer"), n.addEventListener("click", o);
        }
        !(function (e) {
          const t = wr();
          if (!t) return;
          const n = Array.from(e.values()).find((e) => e.hash === t);
          n && Qn.scrollToElement(n.el, n.offsetY, !0);
        })(t);
      }
      var To,
        Mo,
        xo,
        Ro,
        Ao,
        Co,
        Io,
        ko,
        Do = n(6798),
        jo = n(2407),
        No = n(3616);
      function Lo(e, t) {
        const n = t === To.ScrollTransform;
        return {
          type: e,
          delay: 0,
          duration: 300,
          stiffness: n ? 500 : 400,
          damping: n ? 60 : 30,
          mass: 1,
        };
      }
      function Bo(e) {
        const t = {
          opacity: 1,
          scale: 1,
          rotateType: Mo.Rotate2D,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          offsetX: 0,
          offsetY: 0,
        };
        switch (e) {
          case ko.Fade:
            return Object.assign(Object.assign({}, t), { opacity: 0 });
          case ko.Scale:
            return Object.assign(Object.assign({}, t), { scale: 0.5 });
          case ko.ScaleBottom:
            return Object.assign(Object.assign({}, t), {
              scale: 0.5,
              offsetY: 50,
            });
          case ko.FlipHorizontal:
            return Object.assign(Object.assign({}, t), {
              rotateType: Mo.Rotate3D,
              rotateY: -180,
            });
          case ko.FlipVertical:
            return Object.assign(Object.assign({}, t), {
              rotateType: Mo.Rotate3D,
              rotateX: -180,
            });
          case ko.SlideTop:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetY: -150,
            });
          case ko.SlideLeft:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetX: -150,
            });
          case ko.SlideRight:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetX: 150,
            });
          case ko.SlideBottom:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetY: 150,
            });
          default:
            return t;
        }
      }
      !(function (e) {
        (e.ScrollAnimation = "ScrollAnimation"),
          (e.ScrollTransform = "ScrollTransform");
      })(To || (To = {})),
        (function (e) {
          (e.Rotate2D = "2d"), (e.Rotate3D = "3d");
        })(Mo || (Mo = {})),
        (function (e) {
          (e.Linear = "linear"),
            (e.EaseIn = "easeIn"),
            (e.EaseOut = "easeOut"),
            (e.EaseInOut = "easeInOut"),
            (e.CircIn = "circIn"),
            (e.CircOut = "circOut"),
            (e.CircInOut = "circInOut"),
            (e.BackIn = "backIn"),
            (e.BackOut = "backOut"),
            (e.BackInOut = "backInOut"),
            (e.Anticipate = "anticipate");
        })(xo || (xo = {})),
        (function (e) {
          e.Spring = "spring";
        })(Ro || (Ro = {})),
        (function (e) {
          (e.OnAppear = "appear"),
            (e.OnScroll = "scroll"),
            (e.ElementInView = "element"),
            (e.SectionInView = "section");
        })(Ao || (Ao = {})),
        (function (e) {
          (e.Down = "down"), (e.Up = "up");
        })(Co || (Co = {})),
        (function (e) {
          (e.Top = "top"), (e.Center = "center"), (e.Bottom = "bottom");
        })(Io || (Io = {})),
        (function (e) {
          (e.Fade = "fade"),
            (e.Scale = "scale"),
            (e.ScaleBottom = "scale_bottom"),
            (e.FlipHorizontal = "flip_horizontal"),
            (e.FlipVertical = "flip_vertical"),
            (e.SlideTop = "slide_top"),
            (e.SlideLeft = "slide_left"),
            (e.SlideRight = "slide_right"),
            (e.SlideBottom = "slide_bottom"),
            (e.Custom = "custom");
        })(ko || (ko = {}));
      Ao.ElementInView, ko.Scale;
      const Fo = (e) => {
        if (!e) return;
        const t = e.match(/^([-.\d]+(?:\.\d+)?)(.*)$/);
        return t ? { value: t[1].trim(), unit: t[2].trim() } : void 0;
      };
      var Uo;
      !(function (e) {
        (e.Linear = "linear"),
          (e.Ease = "ease"),
          (e.EaseIn = "ease-in"),
          (e.EaseOut = "ease-out"),
          (e.EaseInOut = "ease-in-out");
      })(Uo || (Uo = {}));
      const Vo = (e, t) => {
        var n;
        switch (t) {
          case "vh":
            return (e / 100) * window.innerHeight;
          case "%":
            return (e / 100) * document.documentElement.scrollHeight;
          case "px":
            return e;
          case "dvh":
            return (
              (e / 100) *
              ((null === (n = window.visualViewport) || void 0 === n
                ? void 0
                : n.height) || window.innerHeight)
            );
          default:
            throw new Error(`Unsupported unit: ${t}`);
        }
      };
      var Ho,
        Wo = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function s(e) {
              try {
                c(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e.Initial = "initial"), (e.Entered = "entered"), (e.Exited = "exited");
      })(Ho || (Ho = {}));
      const $o = Object.values(ko),
        zo = { lastScrollDirection: void 0 };
      function Go(e) {
        const t = e.rotateType === Mo.Rotate3D;
        return {
          opacity: e.opacity,
          scale: e.scale,
          rotateX: t ? e.rotateX : 0,
          rotateY: t ? e.rotateY : 0,
          rotateZ: e.rotateZ,
          x: e.offsetX,
          y: e.offsetY,
        };
      }
      function qo(e) {
        return parseFloat((e / 1e3).toFixed(3));
      }
      function Xo(e) {
        if (!e) return;
        const t = (function (e) {
            return {
              keyframe: Bo(e),
              transition: Lo(Ro.Spring, To.ScrollAnimation),
            };
          })($o.find((t) => t === e) || ko.Custom),
          n =
            "object" == typeof e
              ? {
                  keyframe: Object.assign(
                    Object.assign({}, t.keyframe),
                    e.keyframe
                  ),
                  transition: Object.assign(
                    Object.assign({}, t.transition),
                    e.transition
                  ),
                }
              : t;
        return {
          keyframe: Go(n.keyframe),
          transition:
            ((o = n.transition),
            o.type === Ro.Spring
              ? {
                  type: "spring",
                  delay: qo(o.delay),
                  stiffness: o.stiffness,
                  damping: o.damping,
                  mass: o.mass,
                }
              : {
                  type: "tween",
                  ease: o.type,
                  delay: qo(o.delay),
                  duration: qo(o.duration),
                }),
        };
        var o;
      }
      function Jo(e) {
        if (!e.type) return;
        const t = (function (e) {
            return {
              type: e,
              direction: Co.Down,
              start: Io.Top,
              replay: !0,
              clickThrough: !0,
            };
          })(e.type),
          n = Object.assign(Object.assign({}, t), e),
          o = n.type;
        if (o === Ao.OnAppear) {
          const e = Xo(n.effectA);
          if (!e) return;
          return {
            type: Ao.OnAppear,
            effectA: e,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Ao.OnScroll) {
          const e = Xo(n.effectA);
          if (!e) return;
          return {
            type: Ao.OnScroll,
            direction: n.direction,
            replay: n.replay,
            effectA: e,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Ao.ElementInView) {
          const e = Xo(n.effectA),
            t = Xo(n.effectB);
          if (!e && !t) return;
          return {
            type: Ao.ElementInView,
            start: n.start,
            replay: n.replay,
            effectA: e,
            effectB: t,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Ao.SectionInView) {
          const e = bo(),
            t = n.sectionId ? e.get(n.sectionId) : void 0;
          if (!t) return;
          const o = Xo(n.effectA),
            i = Xo(n.effectB);
          if (!o && !i) return;
          return {
            type: Ao.SectionInView,
            section: t,
            start: n.start,
            replay: n.replay,
            effectA: o,
            effectB: i,
            clickThrough: n.clickThrough,
          };
        }
      }
      function Yo(e) {
        const t = parseFloat(
            window.getComputedStyle(e).getPropertyValue("opacity")
          ),
          n = window.getComputedStyle(e).getPropertyValue("transform");
        let o = 1;
        isNaN(t) || (o *= t);
        const i = (function (e) {
          if (!e || "none" === e)
            return { x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 };
          if (e.startsWith("matrix3d")) {
            const t = e
                .match(/matrix3d\(([^)]+)\)/)[1]
                .split(",")
                .map(parseFloat),
              [n, o, i, , r, s, a, , c, l, u, , d, f] = t,
              p = Math.sqrt(n * n + o * o + i * i),
              h = Math.asin(-i),
              m = Math.atan2(a, u),
              g = Math.atan2(o, n);
            return {
              x: t[12],
              y: t[13],
              scale: p,
              rotateX: m * (180 / Math.PI),
              rotateY: h * (180 / Math.PI),
              rotateZ: g * (180 / Math.PI),
            };
          }
          if (e.startsWith("matrix")) {
            const t = e
                .match(/matrix\(([^)]+)\)/)[1]
                .split(",")
                .map(parseFloat),
              [n, o, i, r, s, a] = t;
            return {
              x: s,
              y: a,
              scale: Math.sqrt(n * n + o * o),
              rotateX: 0,
              rotateY: 0,
              rotateZ: Math.atan2(o, n) * (180 / Math.PI),
            };
          }
          return null;
        })(n) || { x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 };
        return Object.assign({ opacity: o }, i);
      }
      function Ko(e, t) {
        const { animation: n, state: o } = e,
          { currentState: i } = o;
        switch (n.type) {
          case Ao.OnAppear:
            if (t === Ho.Entered)
              return {
                keyframe: o.defaultKeyframe,
                transition: n.effectA.transition,
              };
            break;
          case Ao.OnScroll:
            if (t === Ho.Entered)
              return {
                keyframe: n.effectA.keyframe,
                transition: n.effectA.transition,
              };
            if (t === Ho.Initial)
              return {
                keyframe: o.defaultKeyframe,
                transition: n.effectA.transition,
              };
            break;
          case Ao.ElementInView:
          case Ao.SectionInView: {
            const e =
              t === Ho.Exited || i === Ho.Exited ? n.effectB : n.effectA;
            if (e) {
              return {
                keyframe: t === Ho.Entered ? o.defaultKeyframe : e.keyframe,
                transition: e.transition,
              };
            }
            break;
          }
        }
      }
      function Zo(e) {
        const { state: t } = e,
          { currentState: n, desiredState: o } = t;
        if (n === o) return;
        const i = (function (e, t) {
          const n = [Ho.Initial, Ho.Entered, Ho.Exited],
            o = n.indexOf(e),
            i = n.indexOf(t);
          return i < o ? n[o - 1] : i > o ? n[o + 1] : e;
        })(n, o);
        return n !== i ? { nextState: i, effect: Ko(e, i) } : void 0;
      }
      const Qo = (e) => (t, n, o) => {
        e && n.opacity >= Number.EPSILON && (t.style.pointerEvents = "auto");
        const i = (0, Do.i)(t, n, o);
        return (
          i.then(() => {
            e && n.opacity < Number.EPSILON && (t.style.pointerEvents = "none");
          }),
          i
        );
      };
      function ei(e) {
        return Wo(this, void 0, void 0, function* () {
          const { state: t } = e,
            n = Zo(e);
          if (!n) return;
          const { nextState: o, effect: i } = n;
          if (!i)
            return (t.currentState = o), (t.animationInProgress = !1), ei(e);
          t.animationInProgress = !0;
          const r = t.isFirstAnimation
            ? Object.assign(Object.assign({}, i.transition), { velocity: 0 })
            : i.transition;
          t.isFirstAnimation = !1;
          const { el: s } = t,
            { keyframe: a } = i;
          yield Qo(e.animation.clickThrough)(s, a, r),
            (t.currentState = o),
            (t.animationInProgress = !1),
            ei(e);
        });
      }
      function ti(e) {
        return Wo(this, void 0, void 0, function* () {
          const { state: t } = e;
          if (!t.animationInProgress) return ei(e);
        });
      }
      function ni(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        (o.style.opacity = `${t.effectA.keyframe.opacity}`),
          Qo(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }),
          (0, jo.l)(o, () => {
            (n.desiredState = Ho.Entered), ti(e);
          });
      }
      function oi(e) {
        switch (e) {
          case Io.Top:
            return 0;
          case Io.Center:
            return 0.5;
          case Io.Bottom:
            return 1;
          default:
            return 0.5;
        }
      }
      function ii(e) {
        return (e.top + e.bottom) / 2;
      }
      function ri(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        t.effectA &&
          ((o.style.opacity = `${t.effectA.keyframe.opacity}`),
          Qo(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }));
        const i = (0, jo.l)(
          o,
          (o) => {
            const r = ii(o.boundingClientRect);
            return (
              t.effectA && !t.replay && i(),
              (n.desiredState = Ho.Entered),
              ti(e),
              (o) => {
                t.replay || i();
                const s = ii(o.boundingClientRect) <= r;
                (n.desiredState = s ? Ho.Exited : Ho.Initial), ti(e);
              }
            );
          },
          { amount: oi(t.start) }
        );
      }
      function si(e) {
        switch (e) {
          case Io.Top:
            return "0px 0px -100% 0px";
          case Io.Center:
            return "-50% 0px -50% 0px";
          case Io.Bottom:
            return "-100% 0px 0px 0px";
          default:
            return "-50% 0px -50% 0px";
        }
      }
      function ai(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        t.effectA &&
          ((o.style.opacity = `${t.effectA.keyframe.opacity}`),
          Qo(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }));
        const i = t.section.el,
          r = (0, jo.l)(
            i,
            (o) => {
              const i = ii(o.boundingClientRect);
              return (
                t.effectA && !t.replay && r(),
                (n.desiredState = Ho.Entered),
                ti(e),
                (o) => {
                  t.replay || r();
                  const s = ii(o.boundingClientRect) <= i;
                  (n.desiredState = s ? Ho.Exited : Ho.Initial), ti(e);
                }
              );
            },
            { amount: "some", root: document, margin: si(t.start) }
          );
      }
      function ci(e) {
        const t = new Map();
        for (const n of e) {
          const e = document.getElementById(n);
          if (!e) continue;
          const o = Yo(e),
            i = {
              isFirstAnimation: !0,
              animationInProgress: !1,
              desiredState: Ho.Initial,
              currentState: Ho.Initial,
              el: e,
              defaultKeyframe: o,
            };
          t.set(n, i);
        }
        return t;
      }
      function li(e, t) {
        e.effectA && (e.effectA.keyframe.opacity *= t.defaultKeyframe.opacity),
          (e.type !== Ao.ElementInView && e.type !== Ao.SectionInView) ||
            (e.effectB &&
              (e.effectB.keyframe.opacity *= t.defaultKeyframe.opacity));
      }
      function ui(e) {
        const t = (function (e) {
            const t = new Map();
            if (!e) return t;
            const n = e.scrollAnimations || {};
            return (
              Object.entries(n).forEach(([e, n]) => {
                if (!n) return;
                const o = Jo(n);
                o && t.set(e, o);
              }),
              t
            );
          })(e),
          n = ci(Array.from(t.keys())),
          o = new Map();
        for (const [e, i] of t) {
          const t = n.get(e);
          if (t)
            switch ((li(i, t), i.type)) {
              case Ao.OnAppear:
                ni({ animation: i, state: t });
                break;
              case Ao.OnScroll:
                o.set(e, { animation: i, state: t });
                break;
              case Ao.ElementInView:
                ri({ animation: i, state: t });
                break;
              case Ao.SectionInView:
                ai({ animation: i, state: t });
            }
        }
        let i;
        const r = (0, No.I)((e) => {
          const t = e.y.progress,
            n = i;
          if (((i = t), void 0 === n)) return;
          const r = zo.lastScrollDirection;
          t > n
            ? (zo.lastScrollDirection = Co.Down)
            : t < n && (zo.lastScrollDirection = Co.Up),
            zo.lastScrollDirection &&
              zo.lastScrollDirection !== r &&
              (function (e, t) {
                const n = [];
                for (const [o, i] of t) {
                  const { animation: t, state: r } = i,
                    s = t.direction === e,
                    a = r.desiredState === Ho.Initial;
                  s && a
                    ? ((r.desiredState = Ho.Entered),
                      ti(i),
                      t.replay || n.push(o))
                    : s || a || ((r.desiredState = Ho.Initial), ti(i));
                }
                for (const e of n) t.delete(e);
              })(zo.lastScrollDirection, o);
        });
        (0, Bn.W)(() => {
          r(), (zo.lastScrollDirection = void 0);
        });
      }
      var di,
        fi,
        pi,
        hi = n(8683);
      !(function (e) {
        (e.Upload = "upload"), (e.URL = "url");
      })(di || (di = {})),
        (function (e) {
          (e.Pause = "pause"), (e.Continue = "continue");
        })(fi || (fi = {})),
        (function (e) {
          (e.None = "none"),
            (e.PlayPause = "play_pause"),
            (e.Waveform = "waveform"),
            (e.Speaker = "speaker"),
            (e.Custom = "custom");
        })(pi || (pi = {}));
      const mi = di.Upload,
        gi = pi.Waveform,
        yi = m.si.Pointer,
        vi = "#252627";
      pi.PlayPause,
        pi.Waveform,
        pi.Speaker,
        pi.PlayPause,
        pi.Waveform,
        pi.Speaker;
      function wi(e) {
        return e.playIconType || gi;
      }
      function bi(e) {
        if (wi(e) !== pi.None) return e.iconPlayUrl;
      }
      function _i(e) {
        if (wi(e) !== pi.None) return e.iconPauseUrl;
      }
      function Si(e, t) {
        const n = document.createElement("div");
        (n.style.width = "100%"), (n.style.height = "100%");
        return (
          wi(t) === pi.Custom
            ? ((n.style.backgroundImage = `url("${encodeURI(e)}")`),
              (n.style.backgroundSize = "contain"),
              (n.style.backgroundPosition = "center"),
              (n.style.backgroundRepeat = "no-repeat"))
            : ((n.style.backgroundColor = (function (e) {
                return e.playIconColor || vi;
              })(t)),
              (n.style.maskImage = `url("${encodeURI(e)}")`),
              (n.style.maskSize = "contain"),
              (n.style.maskPosition = "center"),
              (n.style.maskRepeat = "no-repeat")),
          n
        );
      }
      var Ei = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      let Pi = {
        loadPromise: void 0,
        loadingDone: !1,
        audios: void 0,
        onLeavePauseAudios: [],
        tabFocus: !0,
        documentVisibility: !0,
        audioFadeOut: !1,
      };
      function Oi(e, t) {
        var n;
        const o =
            (null === (n = null == e ? void 0 : e.audio) || void 0 === n
              ? void 0
              : n[t]) || {},
          i = (function (e) {
            return {
              sourceType: e,
              src: "",
              autoplay: !1,
              loop: !1,
              progress: 0,
              volume: 0.25,
              onLeave: fi.Pause,
            };
          })((null == o ? void 0 : o.sourceType) || mi);
        return Object.assign(Object.assign({}, i), o);
      }
      function Ti(e, t) {
        var n;
        const o =
            (null === (n = null == e ? void 0 : e.audioStyle) || void 0 === n
              ? void 0
              : n[t]) || {},
          i = {
            playCursor: yi,
            playIconType: gi,
            playIconColor: vi,
            iconPlayUrl: "",
            iconPauseUrl: "",
          };
        return Object.assign(Object.assign({}, i), o);
      }
      function Mi(e) {
        var t, n;
        null === (t = e.iconDivEl) || void 0 === t || t.remove(),
          (e.iconDivEl = void 0);
        const o = !!(null === (n = e.howl) || void 0 === n
          ? void 0
          : n.playing());
        o && (e.playedOnce = !0);
        const i = o ? e.iconPauseBlobUrl : e.iconPlayBlobUrl;
        if (!i) return;
        const r = Si(i, e.style);
        e.el.prepend(r), (e.iconDivEl = r);
      }
      function xi(e) {
        var t, n;
        !!(null === (t = e.howl) || void 0 === t ? void 0 : t.playing()) ||
          null === (n = e.howl) ||
          void 0 === n ||
          n.play();
      }
      function Ri(e) {
        return Ei(this, void 0, void 0, function* () {
          e.iconPlayBlobUrl = yield (0, g.x)(bi(e.style));
        });
      }
      function Ai(e) {
        return Ei(this, void 0, void 0, function* () {
          e.iconPauseBlobUrl = yield (0, g.x)(_i(e.style));
        });
      }
      function Ci(e) {
        return Ei(this, void 0, void 0, function* () {
          const t = (function (e) {
            const t = new Map(),
              n = document.getElementsByClassName(a);
            for (let o = 0; o < n.length; o++) {
              const i = n[o].id;
              if (!i) continue;
              const r = document.getElementById(i);
              r &&
                t.set(i, {
                  el: r,
                  attrs: Oi(e, i),
                  style: Ti(e, i),
                  playedOnce: !1,
                  isUnlocked: !1,
                  wasFadedOut: !1,
                  wasPausedByFadeOut: !1,
                });
            }
            return t;
          })(e);
          Pi.audios = t;
          const n = [];
          Array.from(t.values()).forEach((e) => {
            n.push(
              (function (e) {
                return Ei(this, void 0, void 0, function* () {
                  yield Promise.all([Ri(e), Ai(e)]);
                });
              })(e)
            );
          }),
            yield Promise.all(n),
            (Pi.loadingDone = !0);
        });
      }
      function Ii(e) {
        return Ei(this, void 0, void 0, function* () {
          Pi.loadPromise || (Pi.loadPromise = Ci(e)), yield Pi.loadPromise;
        });
      }
      function ki(e) {
        if (!e) return;
        const t = (0, h.wj)(e).toLowerCase();
        return [
          "mp3",
          "opus",
          "ogg",
          "wav",
          "aac",
          "m4a",
          "m4b",
          "mp4",
          "webm",
        ].includes(t)
          ? [t]
          : void 0;
      }
      function Di(e) {
        var t, n;
        if ((Mi(e), !e.playedOnce)) {
          if (e.attrs.progress > 0) {
            const o =
              ((null === (t = e.howl) || void 0 === t
                ? void 0
                : t.duration()) || 0) * e.attrs.progress;
            null === (n = e.howl) || void 0 === n || n.seek(o);
          }
          e.attrs.autoplay && xi(e);
        }
      }
      function ji(e) {
        if ((Mi(e), e.attrs.src)) {
          const t = new hi.Howl({
            src: [e.attrs.src],
            format: ki(e.attrs.src),
            html5: !0,
            loop: e.attrs.loop,
            volume: e.attrs.volume,
            onplay: () => Mi(e),
            onplayerror: () => Mi(e),
            onend: () => Mi(e),
            onpause: () => Mi(e),
            onstop: () => Mi(e),
            onload: () => {
              Di(e);
            },
            onunlock: () => {
              Di(e), (e.isUnlocked = !0);
            },
            onfade: () => {
              var t, n, o;
              const i =
                  (null === (t = e.howl) || void 0 === t
                    ? void 0
                    : t.volume()) || 0,
                r = !!(null === (n = e.howl) || void 0 === n
                  ? void 0
                  : n.playing());
              i <= 0 &&
                r &&
                e.wasFadedOut &&
                ((e.wasPausedByFadeOut = !0),
                null === (o = e.howl) || void 0 === o || o.pause());
            },
          });
          (e.howl = t),
            e.attrs.onLeave === fi.Pause && Pi.onLeavePauseAudios.push(e);
        }
        const t = (function (e) {
            return (t) => {
              var n, o;
              co(t),
                lo(t),
                (!e.attrs.autoplay || e.playedOnce) &&
                  ((
                    null === (n = e.howl) || void 0 === n ? void 0 : n.playing()
                  )
                    ? null === (o = e.howl) || void 0 === o || o.pause()
                    : xi(e));
            };
          })(e),
          { el: n } = e;
        e.style.playCursor === m.si.Pointer && (n.style.cursor = "pointer"),
          n.addEventListener("click", t);
      }
      function Ni() {
        const e = !Pi.documentVisibility;
        if (Pi.audioFadeOut !== e)
          if (((Pi.audioFadeOut = e), Pi.audioFadeOut))
            for (const e of Pi.onLeavePauseAudios) {
              (e.wasFadedOut = !1), (e.wasPausedByFadeOut = !1);
              const t = e.howl;
              if (!t) continue;
              t.playing() && ((e.wasFadedOut = !0), t.fade(t.volume(), 0, 1e3));
            }
          else
            for (const e of Pi.onLeavePauseAudios) {
              if (!e.wasFadedOut) continue;
              e.wasFadedOut = !1;
              const t = e.howl;
              t &&
                (t.fade(t.volume(), e.attrs.volume, 1e3),
                e.wasPausedByFadeOut && xi(e));
            }
      }
      function Li(e) {
        (Pi.tabFocus = e), Ni();
      }
      function Bi(e, t) {
        if (!e.id) return;
        const { audios: n } = Pi;
        if (!n) return;
        const o = n.get(e.id);
        if (!o) return;
        if (!o.howl) return;
        if (!o.isUnlocked && t !== ao.MouseClick) return;
        if (
          ((e.event !== ro.Pause && e.event !== ro.Stop) ||
            (o.attrs.autoplay = !1),
          o.attrs.autoplay && !o.playedOnce)
        )
          return;
        const i = !!o.howl.playing(),
          r = (function (e, t) {
            return e === ro.TogglePlayPause
              ? t
                ? ro.Pause
                : ro.Play
              : e === ro.TogglePlayStop
              ? t
                ? ro.Stop
                : ro.Play
              : e;
          })(e.event, i);
        i
          ? r === ro.Pause
            ? o.howl.pause()
            : r === ro.Stop && o.howl.stop()
          : r === ro.Play
          ? o.howl.play()
          : r === ro.Stop && o.howl.stop();
      }
      function Fi() {
        const { loadingDone: e, audios: t } = Pi;
        if (!e || !t)
          throw new Error(
            "UIAudioModule needs to be loaded before it can be initialized."
          );
        Array.from(t.values()).forEach((e) => {
          ji(e);
        });
        const n = () => Li(!0),
          o = () => Li(!1);
        window.addEventListener("focus", n),
          window.addEventListener("blur", o),
          Li(!!document.hasFocus());
        const i = () => {
          return (e = !document.hidden), (Pi.documentVisibility = e), void Ni();
          var e;
        };
        document.addEventListener("visibilitychange", i),
          i(),
          fo(io.UIAudio, Bi);
        (0, Bn.W)(() => {
          var e;
          po(io.UIAudio, Bi),
            document.removeEventListener("visibilitychange", i),
            window.removeEventListener("blur", o),
            window.removeEventListener("focus", n);
          const t = Array.from(Pi.audios ? Pi.audios.values() : []);
          for (const n of t)
            null === (e = n.howl) || void 0 === e || e.unload();
          Pi = {
            loadPromise: void 0,
            loadingDone: !1,
            audios: void 0,
            onLeavePauseAudios: [],
            tabFocus: !0,
            documentVisibility: !0,
            audioFadeOut: !1,
          };
        });
      }
      var Ui,
        Vi,
        Hi,
        Wi = n(2777);
      !(function (e) {
        (e.Top = "top"),
          (e.Right = "right"),
          (e.Bottom = "bottom"),
          (e.Left = "left");
      })(Ui || (Ui = {})),
        (function (e) {
          (e.Start = "start"), (e.Center = "center"), (e.End = "end");
        })(Vi || (Vi = {})),
        (function (e) {
          (e.Auto = "auto"), (e.Click = "click"), (e.None = "none");
        })(Hi || (Hi = {}));
      const $i = {
        [Ui.Top]: Ui.Bottom,
        [Ui.Bottom]: Ui.Top,
        [Ui.Left]: Ui.Right,
        [Ui.Right]: Ui.Left,
      };
      function zi(e) {
        const { position: t, align: n } = e,
          o = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            transform: "none",
          };
        o[$i[t]] = "100%";
        const i = [Ui.Left, Ui.Right].includes(t);
        let r = i ? Ui.Top : Ui.Left;
        n === Vi.End && (r = $i[r]);
        const s = n === Vi.Center ? "50%" : "0px";
        o[r] = s;
        const a = [];
        n === Vi.Center && a.push(i ? "translateY(-50%)" : "translateX(-50%)");
        const c = (function (e) {
          const { position: t, offsetOrthogonal: n, offsetParallel: o } = e,
            i = [Ui.Top, Ui.Left].includes(t) ? -1 : 1,
            r = [Ui.Top, Ui.Bottom].includes(t),
            s = [n * i, o];
          r && s.reverse();
          return { x: s[0], y: s[1] };
        })(e);
        return (
          c.x && a.push(`translateX(${c.x}px)`),
          c.y && a.push(`translateY(${c.y}px)`),
          a.length > 0 && (o.transform = a.join(" ")),
          o
        );
      }
      function Gi(e, t, n) {
        const o = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
        return 0 === o ? 0 : o > 0 ? 1 : 2;
      }
      function qi(e, t) {
        const n = t.x - e.x,
          o = t.y - e.y;
        return Math.sqrt(n * n + o * o);
      }
      function Xi(e, t, n) {
        return (t.x - e.x) * (n.y - e.y) - (n.x - e.x) * (t.y - e.y);
      }
      function Ji(e, t) {
        return (
          0 !==
          (function (e, t) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
              const i = t[o],
                r = t[(o + 1) % t.length];
              i.y <= e.y
                ? r.y > e.y && Xi(i, r, e) > 0 && n++
                : r.y <= e.y && Xi(i, r, e) < 0 && n--;
            }
            return n;
          })(e, t)
        );
      }
      var Yi,
        Ki,
        Zi = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function s(e) {
              try {
                c(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e.Relative = "relative"), (e.Fixed = "fixed");
      })(Yi || (Yi = {})),
        (function (e) {
          (e.Closed = "closed"), (e.Open = "open");
        })(Ki || (Ki = {}));
      const Qi = { [Ki.Closed]: Ki.Open, [Ki.Open]: Ki.Closed },
        er = { overlays: new Map() };
      function tr(e) {
        const t = [];
        if (!e) return t;
        const n = e[p.BX.RelativeOverlays] || {};
        return (
          Object.entries(n).forEach(([e, n]) => {
            if (!n) return;
            const o = document.getElementById(e);
            if (!o) return;
            const i = {
                position: Ui.Bottom,
                align: Vi.Center,
                offsetOrthogonal: 8,
                offsetParallel: 0,
                dismissType: Hi.Auto,
              },
              r = Object.assign(Object.assign({}, i), n);
            t.push({
              id: e,
              el: o,
              type: Yi.Relative,
              desiredState: Ki.Closed,
              currentState: Ki.Closed,
              isAnimating: !1,
              isDisposed: !1,
              overlay: r,
            });
          }),
          t
        );
      }
      function nr(e) {
        return [
          { x: e.left, y: e.top },
          { x: e.right, y: e.top },
          { x: e.right, y: e.bottom },
          { x: e.left, y: e.bottom },
        ];
      }
      function or(e) {
        const { el: t } = e,
          n = t.parentElement;
        if (!n) return;
        const o = (0, Wi.A)(
            (o) => {
              const r = (function (e) {
                if (e.length < 3) return;
                const t = [];
                let n = 0;
                for (let t = 1; t < e.length; t++)
                  (e[t].x < e[n].x || (e[t].x === e[n].x && e[t].y < e[n].y)) &&
                    (n = t);
                let o,
                  i = n;
                do {
                  t.push(e[i]), (o = (i + 1) % e.length);
                  for (let t = 0; t < e.length; t++) {
                    const n = Gi(e[i], e[t], e[o]);
                    (2 == n || (0 == n && qi(e[i], e[t]) > qi(e[i], e[o]))) &&
                      (o = t);
                  }
                  i = o;
                } while (i != n);
                return t;
              })([
                ...nr(t.getBoundingClientRect()),
                ...nr(n.getBoundingClientRect()),
              ]);
              if (!r) return;
              Ji({ x: o.clientX, y: o.clientY }, r) ||
                ((e.desiredState = Ki.Closed), cr(e), i());
            },
            200,
            { leading: !0, trailing: !0 }
          ),
          i = () => {
            document.removeEventListener("mousemove", o),
              (e.disposeMouseMoveListenerCb = void 0);
          };
        return document.addEventListener("mousemove", o), i;
      }
      function ir(e, t) {
        return !!t && (!!t.classList.contains(e) || ir(e, t.parentElement));
      }
      function rr(e) {
        const { el: t } = e,
          n = t.parentElement;
        if (!n) return;
        const o = go(e.id),
          i = () => {
            (e.desiredState = Ki.Closed), cr(e), a();
          },
          r = (e) => {
            const t = e.target;
            n.contains(t) || ir(o, t) || i();
          },
          s = (e) => {
            ("Escape" !== e.key && "Esc" !== e.key) || i();
          },
          a = () => {
            document.removeEventListener("mousedown", r),
              document.removeEventListener("touchstart", r),
              document.removeEventListener("keydown", s),
              (e.disposeClickAwayListenerCb = void 0);
          };
        return (
          document.addEventListener("mousedown", r),
          document.addEventListener("touchstart", r),
          document.addEventListener("keydown", s),
          a
        );
      }
      function sr(e) {
        var t, n;
        null === (t = e.disposeMouseMoveListenerCb) ||
          void 0 === t ||
          t.call(e),
          null === (n = e.disposeClickAwayListenerCb) ||
            void 0 === n ||
            n.call(e);
      }
      function ar(e) {
        return Zi(this, void 0, void 0, function* () {
          e.isAnimating = !0;
          const { el: t, desiredState: n } = e;
          n === Ki.Open
            ? ((t.style.display = "block"),
              e.type === Yi.Relative &&
                (function (e) {
                  var t, n;
                  e.overlay.dismissType === Hi.Auto &&
                    (null === (t = e.disposeMouseMoveListenerCb) ||
                      void 0 === t ||
                      t.call(e),
                    (e.disposeMouseMoveListenerCb = or(e))),
                    [Hi.Auto, Hi.Click].includes(e.overlay.dismissType) &&
                      (null === (n = e.disposeClickAwayListenerCb) ||
                        void 0 === n ||
                        n.call(e),
                      (e.disposeClickAwayListenerCb = rr(e)));
                })(e),
              yield (0, Do.i)(
                t,
                { opacity: 1 },
                { type: "tween", ease: xo.EaseInOut, delay: 0, duration: 0.3 }
              ),
              (e.currentState = Ki.Open))
            : (e.type === Yi.Relative && sr(e),
              yield (0, Do.i)(
                t,
                { opacity: 0 },
                { type: "tween", ease: xo.EaseInOut, delay: 0, duration: 0.3 }
              ),
              (t.style.display = "none"),
              (e.currentState = Ki.Closed)),
            (e.isAnimating = !1),
            cr(e);
        });
      }
      function cr(e) {
        e.isAnimating ||
          e.isDisposed ||
          (e.desiredState !== e.currentState && ar(e));
      }
      function lr(e) {
        const { el: t, overlay: n } = e;
        (t.style.display = "none"),
          (t.style.opacity = "0"),
          (function (e, t) {
            const n = zi(t);
            for (const [t, o] of Object.entries(n)) e.style[t] = o;
          })(t, n);
        const o = t.parentElement;
        o &&
          ((o.style.cursor = "pointer"),
          t.style.cursor || (t.style.cursor = "auto"),
          o.addEventListener("click", (t) => {
            co(t), lo(t), (e.desiredState = Ki.Open), cr(e);
          }),
          er.overlays.set(e.id, e));
      }
      function ur(e) {
        const { overlays: t } = er,
          n = t.get(e.id);
        if (n) {
          switch (e.event) {
            case so.Open:
              n.desiredState = Ki.Open;
              break;
            case so.Close:
              n.desiredState = Ki.Closed;
              break;
            case so.ToggleOpenClose:
              n.desiredState = Qi[n.desiredState];
          }
          cr(n);
        }
      }
      function dr(e) {
        const t = tr(e);
        for (const e of t) lr(e);
        fo(io.UIOverlay, ur);
        (0, Bn.W)(() => {
          po(io.UIOverlay, ur);
          const e = Array.from(er.overlays.values());
          for (const t of e)
            (t.isDisposed = !0), t.type === Yi.Relative && sr(t);
          er.overlays = new Map();
        });
      }
      var fr = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      function pr(e) {
        const t = (null == e ? void 0 : e.pinBlocks) || {},
          n = ci(Object.keys(t)),
          o =
            ((i = t),
            Object.entries(i).map(([e, t]) => {
              var n;
              const o = document.getElementById(e);
              if (!o || !t) return;
              const i = o.getBoundingClientRect().top + window.pageYOffset,
                r = o.offsetHeight,
                s = document.createElement("div");
              (s.style.height = `${r}px`),
                null === (n = o.parentNode) ||
                  void 0 === n ||
                  n.insertBefore(s, o);
              const { enter: a, exit: c, duration: l, offset: u, start: d } = t,
                f = Jo({
                  type: Ao.ElementInView,
                  effectA: a,
                  effectB: c,
                  clickThrough: !1,
                }),
                p = window.getComputedStyle(o).getPropertyValue("display");
              (null == f ? void 0 : f.effectA) &&
                "none" !== p &&
                ((o.style.opacity = `${f.effectA.keyframe.opacity}`),
                Qo(!1)(o, f.effectA.keyframe, { duration: 0 }));
              let h = 0;
              d === Io.Center && (h = r / 2), d === Io.Bottom && (h = r);
              const { value: m = 0, unit: g = "px" } = Fo(u) || {},
                { value: y = 0, unit: v = "px" } = Fo(l) || {},
                w = Vo(Number(y), v),
                b = Vo(Number(m), g) + h;
              return (
                (o.style.display = "none"),
                {
                  element: o,
                  offsetTop: i,
                  height: r,
                  id: e,
                  placeholder: s,
                  animationEffect: f,
                  offsetInPx: b,
                  durationInPx: w,
                  initialDisplay: p,
                }
              );
            }));
        var i;
        const r = (0, No.I)((e) => {
          const t = e.y.current;
          o.forEach((e) => {
            e &&
              (function (e, t, n) {
                var o;
                fr(this, void 0, void 0, function* () {
                  if (!e) return;
                  const {
                      element: i,
                      offsetTop: r,
                      height: s,
                      animationEffect: a,
                      durationInPx: c,
                      offsetInPx: l,
                      initialDisplay: u,
                    } = e,
                    d = r + l,
                    f = d + (c || s),
                    p =
                      "fixed" ===
                      window.getComputedStyle(i).getPropertyValue("position"),
                    h = n >= d && n < f,
                    m = n < d;
                  if (h && !p)
                    (i.style.position = "fixed"),
                      (i.style.display = u),
                      a &&
                        ((t.desiredState = Ho.Entered),
                        ti({ animation: a, state: t }));
                  else if (!h && p) {
                    const e = () => {
                      (i.style.position = "static"), (i.style.display = "none");
                    };
                    if (a) {
                      const n = m ? Ho.Initial : Ho.Exited;
                      if (t.desiredState === n) return;
                      (t.desiredState = n),
                        null === (o = ti({ animation: a, state: t })) ||
                          void 0 === o ||
                          o.finally(e);
                    } else e();
                  }
                });
              })(e, n.get(e.id), t);
          });
        });
        (0, Bn.W)(r);
      }
      function hr(e) {
        const t = document.getElementById(u);
        t.replaceWith(...t.childNodes);
        document.querySelector(`div#${l}`).remove(),
          (function (e) {
            [Qn.reinitialize, _o, vo, dr, Oo, ui, pr, Fi].forEach((t) => {
              try {
                t(e);
              } catch (e) {
                console.error("Error initializing UI module:", e);
              }
            });
          })(e);
      }
      var mr = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      function gr() {
        return Promise.all([n.e(707), n.e(606)]).then(n.bind(n, 6606));
      }
      const yr = {
        isInitialized: !1,
        isNavigating: !1,
        styleLoadedPaths: new Set(),
      };
      function vr() {
        const { isInitialized: e, isNavigating: t } = yr;
        if (e && !t) return yr.currentPath;
      }
      function wr() {
        return yr.currentSectionHash;
      }
      function br(e, t, n = !1) {
        (yr.currentPath = e),
          (yr.currentSectionHash = t || void 0),
          n || Ln.kr || history.pushState({}, "", `${e}${t ? `#${t}` : ""}`);
      }
      function _r() {
        return mr(this, void 0, void 0, function* () {
          try {
            const [e, t] = yield Promise.all([P(), O()]),
              n = new DOMParser().parseFromString(e, "text/html"),
              o = n.getElementById(d);
            if (!o) throw new Error("Error page wrap not found.");
            (0, Bn.b)(),
              document.body.replaceChildren(o),
              (document.title = n.title),
              Array.from(document.body.attributes).forEach((e) => {
                document.body.removeAttribute(e.name);
              });
            const i = document.createElement("style");
            (i.textContent = t), document.head.append(i);
          } catch (e) {
            console.error("Load error page error:", e);
          }
        });
      }
      const Sr = () =>
        window.innerWidth < f.mq
          ? p.SN.Mobile
          : window.innerWidth < f.g4
          ? p.SN.Tablet
          : p.SN.Desktop;
      function Er(e) {
        return mr(this, void 0, void 0, function* () {
          const t = yield S(e);
          return new DOMParser().parseFromString(t, "text/html");
        });
      }
      function Pr(e, t) {
        return mr(this, void 0, void 0, function* () {
          const n = t.querySelector('meta[name="pw:has-visual-script"]');
          if (!(!!n && n instanceof HTMLMetaElement && "true" === n.content))
            return;
          const o = yield _(e);
          return o && gr(), o;
        });
      }
      function Or(e, t, n) {
        const { isInitialized: o, isNavigating: i } = yr;
        o && !i
          ? ((yr.isNavigating = !0),
            br(e, t, n),
            (function () {
              return mr(this, void 0, void 0, function* () {
                const e = yr.currentPath;
                if (!e) return;
                const [t, n, o] = yield Promise.all([Er(e), E(e), b(e)]),
                  i = Sr(),
                  [r, s] = yield Promise.all([w(o, i), Pr(e, t)]);
                (0, Bn.b)();
                const a = t.getElementById(u);
                if (!a)
                  throw new Error(
                    "Failed loading a new page: page body wrap not found."
                  );
                const c = t.getElementById(l);
                if (!c)
                  throw new Error(
                    "Failed loading a new page: page loading wrap not found."
                  );
                if (
                  (document.body.replaceChildren(a, c),
                  (document.title = t.title),
                  window._pwExecLoadingPageJavascript(),
                  Array.from(document.body.attributes).forEach((e) => {
                    document.body.removeAttribute(e.name);
                  }),
                  Array.from(t.body.attributes).forEach((e) => {
                    document.body.setAttribute(e.name, e.value);
                  }),
                  !yr.styleLoadedPaths.has(e))
                ) {
                  yr.styleLoadedPaths.add(e);
                  const t = document.createElement("style");
                  (t.textContent = n), document.head.append(t);
                }
                const d = Ii(o);
                if (r) {
                  const { engineState: e, animations: t } = r,
                    n = no(e, o, i),
                    a = xr(n, s);
                  yield Promise.all([d, n, a]), oo(t, o);
                } else yield d;
                hr(o);
              });
            })()
              .then(() => {
                (yr.isNavigating = !1), Tr();
              })
              .catch((e) => {
                console.error("Router navigation error:", e),
                  _r().finally(() => {
                    (yr.isNavigating = !1), Tr();
                  });
              }))
          : (yr.nextNavigateTo = {
              path: e,
              sectionHash: t,
              omitHistoryPush: n,
            });
      }
      function Tr() {
        if (!yr.nextNavigateTo) return;
        const { path: e, sectionHash: t } = yr.nextNavigateTo;
        (yr.nextNavigateTo = void 0), Or(e, t);
      }
      function Mr() {
        const e = Ln.xB,
          t = (0, h.f9)(window.location.hash, "#"),
          n = document.location.search || "";
        Ln.kr || history.replaceState({}, "", `${e}${t ? `#${t}` : ""}${n}`),
          br(e, t, !0),
          (function () {
            return mr(this, void 0, void 0, function* () {
              const e = yr.currentPath;
              if (!e) return;
              yr.styleLoadedPaths.add(e);
              const t = yield b(e),
                n = Ii(t),
                o = Sr(),
                [i, r] = yield Promise.all([w(t, o), Pr(e, document)]);
              if (i) {
                const { engineState: e, animations: s } = i,
                  a = no(e, t, o),
                  c = xr(a, r);
                yield Promise.all([n, a, c]), oo(s, t);
              } else yield n;
              hr(t);
            });
          })()
            .then(() => {
              (yr.isInitialized = !0), Tr();
            })
            .catch((e) => {
              console.error("Router initialization error:", e),
                _r().finally(() => {
                  (yr.isInitialized = !0), Tr();
                });
            }),
          window.addEventListener("popstate", () => {
            Or(
              window.location.pathname,
              (0, h.f9)(window.location.hash, "#"),
              !0
            );
          });
      }
      function xr(e, t) {
        return mr(this, void 0, void 0, function* () {
          if (t) {
            (0, (yield gr()).default)(t, yield e);
          }
        });
      }
    },
    6615: (e, t, n) => {
      n.d(t, {
        DS: () => r,
        EZ: () => u,
        H0: () => p,
        LX: () => c,
        RL: () => l,
        g4: () => f,
        j4: () => s,
        mq: () => d,
      });
      var o = n(5062),
        i = n(4151);
      const r = !1,
        s = "imported_texture",
        a =
          (i.lV.Group,
          i.lV.Water,
          i.lV.Scene,
          i.lV.Mesh,
          i.OS.Box,
          i.OS.Plane,
          i.OS.Sphere,
          i.OS.Cylinder,
          i.OS.Cone,
          i.OS.Torus,
          i.lV.Camera,
          i.Fn.Perspective,
          i.Fn.Orthographic,
          i.lV.Light,
          i.g5.Ambient,
          i.g5.Directional,
          i.g5.Point,
          i.g5.Spot,
          ["opacity", "color", "aoMapIntensity"]),
        c =
          (new Set([
            "intensity",
            "color",
            "distance",
            "decay",
            "angle",
            "penumbra",
          ]),
          {
            [i.J8.Unlit]: [...a, "reflectivity"],
            [i.J8.Lit]: [
              ...a,
              "emissive",
              "roughness",
              "metalness",
              "displacementScale",
              "emissiveIntensity",
            ],
            [i.J8.Physical]: [
              ...a,
              "emissive",
              "roughness",
              "metalness",
              "displacementScale",
              "emissiveIntensity",
              "attenuationDistance",
              "attenuationColor",
              "clearcoat",
              "clearcoatRoughness",
              "dispersion",
              "thickness",
              "transmission",
              "ior",
              "iridescence",
              "iridescenceIOR",
              "reflectivity",
              "specularIntensity",
              "specularColor",
              "sheen",
              "sheenColor",
              "sheenRoughness",
            ],
            [i.J8.Phong]: [
              ...a,
              "emissive",
              "reflectivity",
              "displacementScale",
              "bumpScale",
              "emissive",
              "refractionRatio",
              "shininess",
              "specular",
              "emissiveIntensity",
            ],
          }),
        l =
          (i.J8.Unlit,
          new Set(c[i.J8.Unlit]),
          i.J8.Phong,
          new Set(c[i.J8.Phong]),
          i.J8.Lit,
          new Set(c[i.J8.Lit]),
          i.J8.Physical,
          new Set(c[i.J8.Physical]),
          {
            MeshStandardMaterial: i.J8.Lit,
            MeshPhysicalMaterial: i.J8.Physical,
            MeshBasicMaterial: i.J8.Unlit,
            MeshPhongMaterial: i.J8.Phong,
          }),
        u = {
          [i.Ps.Clamp]: o.ghU,
          [i.Ps.Repeat]: o.GJx,
          [i.Ps.MirroredRepeat]: o.kTW,
        },
        d = 768,
        f = 992,
        p = "DEFAULT_ANIMATION_SHEET_NAME";
    },
    5454: (e, t, n) => {
      var o, i;
      n.d(t, { lx: () => i, si: () => o }),
        (function (e) {
          (e.Default = "default"), (e.Pointer = "pointer");
        })(o || (o = {})),
        (function (e) {
          (e.SceneState = "scene-state"),
            (e.UIState = "ui-state.json"),
            (e.PageVisualScript = "pageVs.json"),
            (e.Index = "index.html"),
            (e.Styles = "styles.css"),
            (e.Favicon = "favicon.ico"),
            (e.MetaImage = "meta-image.jpg"),
            (e.ErrorPage = "error-page.html"),
            (e.ErrorPageStyles = "error-page-styles.css"),
            (e.Sitemap = "sitemap.xml"),
            (e.Robots = "robots.txt");
        })(i || (i = {}));
      i.Index, i.Styles, i.UIState, i.Favicon, i.MetaImage;
      var r;
      !(function (e) {
        (e.CUSTOM_DOMAIN_IS_MISSING = "CUSTOM_DOMAIN_IS_MISSING"),
          (e.DNS_RECORD_A_IS_MISSING = "DNS_RECORD_A_IS_MISSING"),
          (e.DNS_RECORD_CNAME_IS_MISSING = "DNS_RECORD_CNAME_IS_MISSING"),
          (e.DNS_RECORD_TXT_IS_MISSING = "DNS_RECORD_TXT_IS_MISSING"),
          (e.EXTRA_DNS_RECORD_IS_FOUND = "EXTRA_DNS_RECORD_IS_FOUND");
      })(r || (r = {}));
    },
    4151: (e, t, n) => {
      var o, i, r, s, a, c, l, u, d, f, p, h, m, g;
      n.d(t, {
        Fn: () => c,
        GI: () => m,
        J8: () => u,
        OS: () => a,
        Ps: () => h,
        X6: () => o,
        ap: () => f,
        bN: () => g,
        g5: () => l,
        lV: () => s,
        sc: () => d,
      }),
        (function (e) {
          (e[(e.Raycast = 1)] = "Raycast"),
            (e[(e.Helpers = 2)] = "Helpers"),
            (e[(e.HelpersRaycast = 3)] = "HelpersRaycast");
        })(o || (o = {})),
        (function (e) {
          (e[(e.Low = 512)] = "Low"),
            (e[(e.Normal = 1024)] = "Normal"),
            (e[(e.High = 2048)] = "High");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Low = 256)] = "Low"),
            (e[(e.Normal = 512)] = "Normal"),
            (e[(e.High = 1024)] = "High");
        })(r || (r = {})),
        (function (e) {
          (e.Imported = "IMPORTED"),
            (e.Scene = "SCENE"),
            (e.Mesh = "MESH"),
            (e.Group = " GROUP"),
            (e.Light = "LIGHT"),
            (e.Camera = "CAMERA"),
            (e.Water = "Water"),
            (e.Html = "HTML");
        })(s || (s = {})),
        (function (e) {
          (e.Plane = "PLANE"),
            (e.Box = "BOX"),
            (e.Sphere = "SPHERE"),
            (e.Cylinder = "CYLINDER"),
            (e.Cone = "CONE"),
            (e.Torus = "TORUS");
        })(a || (a = {})),
        (function (e) {
          (e.Perspective = "PERSPECTIVE"), (e.Orthographic = "ORTHOGRAPHIC");
        })(c || (c = {})),
        (function (e) {
          (e.Directional = "DIRECTIONAL"),
            (e.Ambient = "AMBIENT"),
            (e.Spot = "SPOT"),
            (e.Point = "POINT");
        })(l || (l = {})),
        (function (e) {
          (e.Unlit = "UNLIT"),
            (e.Lit = "LIT"),
            (e.Physical = "PHYSICAL"),
            (e.Phong = "PHONG");
        })(u || (u = {})),
        (function (e) {
          (e.Front = "FRONT"), (e.Back = "BACK"), (e.Double = "DOUBLE");
        })(d || (d = {})),
        (function (e) {
          (e.Gltf = "GLTF"),
            (e.FBX = "FBX"),
            (e.Obj = "OBJ"),
            (e.Texture = "TEXTURE"),
            (e.VideoTexture = "VIDEO_TEXTURE"),
            (e.EXRTexture = "EXR_TEXTURE"),
            (e.HDRTexture = "HDR_TEXTURE"),
            (e.Environment = "ENVIRONMENT");
        })(f || (f = {})),
        (function (e) {
          (e[(e.Low = 256)] = "Low"),
            (e[(e.Normal = 512)] = "Normal"),
            (e[(e.High = 1024)] = "High");
        })(p || (p = {})),
        (function (e) {
          (e.Clamp = "Clamp"),
            (e.Repeat = "Repeat"),
            (e.MirroredRepeat = "MirroredRepeat");
        })(h || (h = {})),
        (function (e) {
          (e.Absolute = "ABSOLUTE"), (e.Relative = "RELATIVE");
        })(m || (m = {})),
        (function (e) {
          (e.Tilt = "TILT"), (e.Pan = "PAN");
        })(g || (g = {}));
    },
    7615: (e, t, n) => {
      var o, i, r, s, a;
      n.d(t, { BX: () => r, J: () => a, Pc: () => o, SN: () => s }),
        (function (e) {
          (e.External = "external"), (e.Internal = "internal");
        })(o || (o = {})),
        (function (e) {
          (e.Canvases = "canvases"),
            (e.Sections = "sections"),
            (e.Links = "links"),
            (e.ScrollAnimations = "scrollAnimations"),
            (e.Audio = "audio"),
            (e.AudioStyle = "audioStyle"),
            (e.PinBlocks = "pinBlocks");
        })(i || (i = {})),
        (function (e) {
          (e.Interactions = "interactions"),
            (e.RelativeOverlays = "relativeOverlays"),
            (e.Anchors = "anchors");
        })(r || (r = {})),
        (function (e) {
          (e.Mobile = "mobile"), (e.Tablet = "tablet"), (e.Desktop = "desktop");
        })(s || (s = {})),
        (function (e) {
          (e.Native = "native"), (e.Smooth = "smooth");
        })(a || (a = {}));
    },
    3631: (e, t, n) => {
      function o(e, t) {
        const n = Math.pow(10, t),
          o = Math.round(e * n) / n;
        return parseFloat(o.toFixed(Math.max(0, t)));
      }
      function i(e, t) {
        return Array.isArray(e) ? e : [e, ...t];
      }
      function r(e, ...t) {
        const n = i(e, t);
        if (0 === n.length)
          throw new Error("Cannot calculate the mean of an empty array");
        return (
          (function (e, ...t) {
            return i(e, t).reduce((e, t) => e + t, 0);
          })(n) / n.length
        );
      }
      n.d(t, { eB: () => o, i2: () => r });
    },
    4074: (e, t, n) => {
      n.d(t, { lk: () => r });
      var o = n(5062),
        i = n(4151);
      function r() {
        return o.cj9.generateUUID();
      }
      i.g5.Ambient, i.g5.Directional, i.g5.Point, i.g5.Spot;
      o.hB5,
        i.sc.Front,
        o.hsX,
        i.sc.Back,
        o.$EB,
        i.sc.Double,
        o.ghU,
        i.Ps.Clamp,
        o.GJx,
        i.Ps.Repeat,
        o.kTW,
        i.Ps.MirroredRepeat;
      i.J8.Lit, i.J8.Physical, i.J8.Unlit, i.J8.Phong;
    },
    8067: (e, t, n) => {
      n.d(t, {
        $N: () => y,
        $s: () => D,
        GZ: () => R,
        G_: () => i,
        HA: () => p,
        HM: () => u,
        HP: () => E,
        I$: () => _,
        IE: () => L,
        Jv: () => a,
        K2: () => h,
        ME: () => S,
        N7: () => I,
        O1: () => B,
        Pd: () => d,
        SR: () => O,
        T4: () => N,
        TK: () => m,
        V0: () => r,
        VZ: () => c,
        ZF: () => C,
        _i: () => b,
        dj: () => M,
        gL: () => f,
        hA: () => g,
        hU: () => P,
        is: () => A,
        jA: () => l,
        pU: () => T,
        pr: () => j,
        s9: () => w,
        s_: () => v,
        uK: () => k,
        uQ: () => s,
        uW: () => x,
      });
      var o = n(4151);
      function i(e) {
        return e.type === o.lV.Light;
      }
      function r(e) {
        return e.type === o.lV.Mesh;
      }
      function s(e) {
        return e.type === o.lV.Scene;
      }
      function a(e) {
        return e.type === o.lV.Imported;
      }
      function c(e) {
        return e.type === o.lV.Group;
      }
      function l(e) {
        return e.type === o.lV.Water;
      }
      function u(e) {
        return (null == e ? void 0 : e.assetType) === o.ap.VideoTexture;
      }
      function d(e) {
        return e.type === o.J8.Unlit;
      }
      function f(e) {
        return e.type === o.J8.Lit;
      }
      function p(e) {
        return e.type === o.J8.Phong;
      }
      function h(e) {
        return e.type === o.J8.Physical;
      }
      function m(e) {
        return e.type === o.lV.Camera;
      }
      function g(e) {
        return e.cameraType === o.Fn.Perspective;
      }
      function y(e) {
        return e.cameraType === o.Fn.Orthographic;
      }
      function v(e) {
        return e.lightType === o.g5.Point;
      }
      function w(e) {
        return e.lightType === o.g5.Directional;
      }
      function b(e) {
        return e.lightType === o.g5.Ambient;
      }
      function _(e) {
        return e.lightType === o.g5.Spot;
      }
      function S(e) {
        return e.type === o.OS.Plane;
      }
      function E(e) {
        return e.type === o.OS.Box;
      }
      function P(e) {
        return e.type === o.OS.Sphere;
      }
      function O(e) {
        return e.type === o.OS.Cylinder;
      }
      function T(e) {
        return e.type === o.OS.Torus;
      }
      function M(e) {
        return e.type === o.OS.Cone;
      }
      function x(e) {
        return "Mesh" === e.type;
      }
      function R(e) {
        return "SkinnedMesh" === e.type;
      }
      function A(e) {
        return "MeshStandardMaterial" === e.type;
      }
      function C(e) {
        return "MeshBasicMaterial" === e.type;
      }
      function I(e) {
        return "MeshPhongMaterial" === e.type;
      }
      function k(e) {
        return "MeshPhysicalMaterial" === e.type;
      }
      function D(e) {
        return "PointLight" === e.type;
      }
      function j(e) {
        return "SpotLight" === e.type;
      }
      function N(e) {
        return e.isLight;
      }
      function L(e) {
        return e.type === o.bN.Tilt;
      }
      function B(e) {
        return e.type === o.bN.Pan;
      }
    },
    592: (e, t, n) => {
      var o, i, r;
      function s(e, t) {
        return {
          set: (n, o, i) => {
            const r = n[o] !== i,
              s = Reflect.set(n, o, i);
            return e.includes(o) && r && t(o), s;
          },
        };
      }
      n.d(t, { bd: () => o, Vy: () => ze }),
        (function (e) {
          (e.MouseDown = "MOUSE_DOWN"),
            (e.MouseUp = "MOUSE_UP"),
            (e.MouseMove = "MOUSE_MOVE"),
            (e.Loaded = "LOADED"),
            (e.ResourcesLoaded = "RESOURCES_LOADED"),
            (e.SceneReady = "SCENE_READY");
        })(o || (o = {})),
        (function (e) {
          (e.UpdatePosition = "UPDATE_POSITION"),
            (e.UpdateRotation = "UPDATE_ROTATION"),
            (e.UpdateScale = "UPDATE_SCALE"),
            (e.UpdateLight = "UPDATE_LIGHT");
        })(i || (i = {})),
        (function (e) {
          e.Update = "UPDATE";
        })(r || (r = {}));
      var a = n(8067);
      function c(e) {
        const t = e;
        function n(e, n) {
          const o = t[e],
            i = new Proxy(
              o,
              s(["x", "y", "z", "_x", "_y", "_z"], (e) => {
                t.dispatchEvent({ type: n, target: t, property: e });
              })
            );
          !(function (e, t, n) {
            Reflect.deleteProperty(e, t),
              Reflect.defineProperty(e, t, {
                value: n,
                configurable: !1,
                enumerable: !0,
                writable: !1,
              });
          })(t, e, i);
        }
        if (
          (n("position", i.UpdatePosition),
          n("rotation", i.UpdateRotation),
          n("scale", i.UpdateScale),
          (0, a.T4)(e))
        ) {
          const n = ["intensity", "color"];
          return (
            (0, a.$s)(e) && n.push("distance", "decay"),
            (0, a.pr)(e) && n.push("distance", "angle", "penumbra", "decay"),
            new Proxy(
              t,
              s(n, (e) =>
                t.dispatchEvent({ type: i.UpdateLight, target: t, property: e })
              )
            )
          );
        }
        return t;
      }
      var l = n(4151),
        u = n(5062),
        d = n(6615);
      function f(e) {
        Array.isArray(e)
          ? e.forEach((e) => f(e))
          : (Object.keys(e).forEach((t) => {
              const n = e[t];
              !!n &&
                "object" == typeof n &&
                "dispose" in n &&
                "function" == typeof n.dispose &&
                n.dispose();
            }),
            e.dispose());
      }
      function p(e) {
        return e ? (e.userData.isPwObject ? e : p(e.parent)) : null;
      }
      function h(e, t) {
        return t ? e.set(t.x, t.y, t.z) : e.set(0, 0, 0);
      }
      function m(e, t, n) {
        (e.wrapS = d.EZ[t.wrapS]),
          (e.wrapT = d.EZ[t.wrapT]),
          e.repeat.set(t.repeat.x, t.repeat.y),
          e.offset.set(t.offset.x, t.offset.y),
          e.center.set(t.center.x, t.center.y),
          e.image && (e.needsUpdate = !0),
          (0, a.HM)(t) &&
            ((n && (0, a.HM)(n) && n.loop === t.loop) || e.source.data.play(),
            (e.source.data.loop = t.loop));
      }
      const g = new u.Pq0();
      function y(e) {
        const t = new Map();
        return (
          e.traverse((e) => {
            (e instanceof u.eaF || e instanceof u.I46 || e instanceof u.ZLX) &&
              (Array.isArray(e.material)
                ? e.material.forEach((e) => {
                    t.set(e.uuid, e);
                  })
                : t.set(e.material.uuid, e.material));
          }),
          Array.from(t.values())
        );
      }
      new u.NRn();
      var v = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class w {
        constructor(e, t) {
          this.usedBy = new Set();
          const { assetType: n, assetUrl: o } = e;
          (this.loaded = !1),
            (this.assetUrl = o),
            (this.assetType =
              n === l.ap.Environment ? e.environmentAssetType : n),
            (this.loader = t);
        }
        getData() {
          return v(this, void 0, void 0, function* () {
            if (this.loaded && this.data) return this.data;
            const e = yield this.loadAssetData(this.assetType, this.assetUrl);
            return (this.data = e), (this.loaded = !0), this.data;
          });
        }
        loadAssetData(e, t) {
          return v(this, void 0, void 0, function* () {
            return yield this.loader.loadAsync(e, t);
          });
        }
        dispose() {
          if (this.data)
            switch (this.assetType) {
              case l.ap.Texture:
              case l.ap.HDRTexture:
              case l.ap.EXRTexture:
                this.data.dispose();
                break;
              case l.ap.Gltf:
                this.data.scenes.forEach((e) => {
                  e.traverse(function (e) {
                    e instanceof u.eaF && (e.geometry.dispose(), f(e.material));
                  });
                });
                break;
              case l.ap.FBX:
              case l.ap.Obj:
                this.data.traverse(function (e) {
                  e instanceof u.eaF && (e.geometry.dispose(), f(e.material));
                });
            }
        }
      }
      var b = n(1358);
      const _ = {
          [l.Ps.Clamp]: u.ghU,
          [l.Ps.Repeat]: u.GJx,
          [l.Ps.MirroredRepeat]: u.kTW,
        },
        S = [
          l.ap.Environment,
          l.ap.Texture,
          l.ap.HDRTexture,
          l.ap.EXRTexture,
          l.ap.Gltf,
          l.ap.Obj,
          l.ap.FBX,
          l.ap.VideoTexture,
        ];
      class E {
        constructor(e, t) {
          const { uuid: n, assetUrl: o } = e;
          if (
            ((this.uuid = n),
            (this.assetUrl = o),
            t.usedBy.add(n),
            !S.includes(e.assetType))
          )
            throw new Error(`Asset type ${e.assetType} is not supported!`);
          this.assetInstance = t.getData().then((t) => {
            switch (e.assetType) {
              case l.ap.HDRTexture:
              case l.ap.EXRTexture:
              case l.ap.Texture: {
                const {
                    center: n,
                    offset: o,
                    repeat: i,
                    wrapS: r = l.Ps.Clamp,
                    wrapT: s = l.Ps.Clamp,
                  } = e,
                  a = t.clone();
                return (
                  (a.center = new u.I9Y(n.x, n.y)),
                  (a.offset = new u.I9Y(o.x, o.y)),
                  (a.repeat = new u.I9Y(i.x, i.y)),
                  (a.wrapS = _[r]),
                  (a.wrapT = _[s]),
                  (a.colorSpace = u.er$),
                  (a.needsUpdate = !0),
                  a
                );
              }
              case l.ap.VideoTexture: {
                const {
                    center: t,
                    offset: n,
                    repeat: i,
                    wrapS: r = l.Ps.Clamp,
                    wrapT: s = l.Ps.Clamp,
                    loop: a,
                  } = e,
                  c = document.createElement("video");
                c.setAttribute("id", "video"),
                  (c.crossOrigin = "anonymous"),
                  (c.style.display = "none"),
                  (c.playsInline = !0),
                  (c.autoplay = !0),
                  (c.muted = !0),
                  (c.loop = a),
                  (c.src = o),
                  document.body.append(c),
                  c.load(),
                  (c.preload = "auto"),
                  c.play();
                const d = new u.Nv2(c);
                return (
                  (d.center = new u.I9Y(t.x, t.y)),
                  (d.offset = new u.I9Y(n.x, n.y)),
                  (d.repeat = new u.I9Y(i.x, i.y)),
                  (d.wrapS = _[r]),
                  (d.wrapT = _[s]),
                  (d.colorSpace = u.er$),
                  (d.needsUpdate = !0),
                  new Promise((e) => {
                    c.oncanplay = () => {
                      e(d);
                    };
                  })
                );
              }
              case l.ap.Environment: {
                const e = t.clone();
                e.mapping = u.wfO;
                const n = t.clone();
                return (
                  (n.mapping = u.uV5),
                  (e.needsUpdate = !0),
                  { reflection: e, refraction: n }
                );
              }
              case l.ap.Gltf: {
                const e = new u.YJl(),
                  n = t;
                return (
                  n.scenes.forEach((t) => {
                    e.add(b.o8(t));
                  }),
                  (e.userData = { isGLTF: !0 }),
                  {
                    model: e,
                    animations: n.animations.map((e) => e.clone()),
                    materials: y(e),
                  }
                );
              }
              case l.ap.Obj: {
                const e = t.clone();
                return { model: e, materials: y(e) };
              }
              case l.ap.FBX: {
                const e = b.o8(t);
                return { model: e, materials: y(e) };
              }
              default:
                throw new Error(
                  "Resource type should be checked before the async code, otherwise error can't be caught!"
                );
            }
          });
        }
        dispose() {
          this.assetInstance.then((e) => {
            if (
              (e instanceof u.Nv2 &&
                (document.body.removeChild(e.source.data), e.dispose()),
              e instanceof u.gPd && e.dispose(),
              e instanceof u.YJl)
            ) {
              e.traverse(function (e) {
                e instanceof u.eaF && (e.geometry.dispose(), f(e.material));
              });
            }
          });
        }
      }
      function P(e, t) {
        const n = new Map(),
          i = new Map(),
          r = new Set();
        let s = !1;
        function a() {
          r.size > 0 ||
            s ||
            ((s = !0), t.dispatchEvent({ type: o.ResourcesLoaded }));
        }
        function c(t) {
          const o = new w(t, e);
          return n.set(t.assetUrl, o), o;
        }
        return {
          createResource: function (e) {
            const t = new E(e, n.get(e.assetUrl) || c(e));
            return (
              r.add(t),
              i.set(e.uuid, t),
              t.assetInstance.finally(() => {
                r.delete(t), a();
              }),
              t
            );
          },
          createAsset: c,
          getAsset: n.get.bind(n),
          deleteResource: function (e) {
            const t = i.get(e);
            if (!t) return;
            t.dispose(), i.delete(e);
            const o = n.get(t.assetUrl);
            o &&
              (o.usedBy.delete(t.uuid),
              0 === o.usedBy.size && (n.delete(t.assetUrl), o.dispose()));
          },
          dispose: function () {
            n.forEach((e) => {
              e.dispose();
            }),
              i.forEach((e) => {
                e.dispose();
              }),
              i.clear(),
              n.clear();
          },
          getResource: i.get.bind(i),
          checkIfResourceLoadingFinished: a,
        };
      }
      var O = n(8087),
        T = n(9511),
        M = n(3206),
        x = n(2701),
        R = n(5837),
        A = n(8003),
        C = n(9174),
        I = n(9167);
      class k extends u.aHM {
        loadAsync() {
          return Promise.resolve();
        }
        load() {}
      }
      var D,
        j = n(7469);
      !(function (e) {
        (e.DepthOfField = "DOF"),
          (e.Bloom = "BLOOM"),
          (e.Vignette = "VIGNETTE"),
          (e.Pixelation = "PIXELATION"),
          (e.BrightnessContrast = "BRIGHTNESS_CONTRAST"),
          (e.HueSaturation = "HUE_SATURATION"),
          (e.Noise = "NOISE"),
          (e.ColorDepth = "COLOR_DEPTH"),
          (e.ToneMapping = "TONE_MAPPING"),
          (e.SMAA = "SMAA"),
          (e.SSAO = "SSAO");
      })(D || (D = {}));
      const N = [
        D.SMAA,
        D.SSAO,
        D.DepthOfField,
        D.Bloom,
        D.Vignette,
        D.ToneMapping,
        D.BrightnessContrast,
        D.HueSaturation,
        D.ColorDepth,
        D.Noise,
        D.Pixelation,
      ];
      const L = (function () {
        const e = new Map();
        return (
          N.forEach((t, n) => {
            e.set(t, n);
          }),
          e
        );
      })();
      function B(e) {
        return e.type === D.Bloom;
      }
      function F(e) {
        return e.type === D.Vignette;
      }
      function U(e) {
        return e.type === D.Noise;
      }
      function V(e) {
        return e.type === D.SMAA;
      }
      function H(e) {
        return e.type === D.SSAO;
      }
      function W(e) {
        return e.type === D.DepthOfField;
      }
      function $(e) {
        return e.type === D.Pixelation;
      }
      function z(e) {
        return e.type === D.HueSaturation;
      }
      function G(e) {
        return e.type === D.ColorDepth;
      }
      function q(e) {
        return e.type === D.BrightnessContrast;
      }
      function X(e) {
        return e.type === D.ToneMapping;
      }
      function J(e, t) {
        function n(e, t) {
          const { blendFunction: n, opacity: o, bits: i } = t;
          (e.bitDepth = i),
            (e.blendMode.blendFunction = n),
            e.blendMode.setOpacity(o);
        }
        return {
          updateEffect: function (o) {
            var i;
            const { type: r } = o,
              s = null === (i = e.get(r)) || void 0 === i ? void 0 : i.effect;
            if (!s)
              throw new Error(
                "Effect that you are trying to update doesn't exist!"
              );
            B(o) &&
              (function (e, t) {
                const {
                  blendFunction: n,
                  filter: o,
                  intensity: i,
                  luminanceSmoothing: r,
                  luminanceThreshold: s,
                  opacity: a,
                  radius: c,
                } = t;
                (e.luminanceMaterial.threshold = s),
                  (e.luminanceMaterial.smoothing = r),
                  (e.blendMode.blendFunction = n),
                  e.blendMode.setOpacity(a),
                  (e.mipmapBlurPass.radius = c),
                  (e.intensity = i),
                  (e.luminancePass.enabled = o),
                  (e.luminanceMaterial.needsUpdate = !0);
              })(s, o),
              F(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    technique: o,
                    offset: i,
                    opacity: r,
                    darkness: s,
                  } = t;
                  (e.darkness = s),
                    (e.offset = i),
                    (e.technique = o),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(r);
                })(s, o),
              W(o) &&
                (function (e, t) {
                  const {
                    bokehScale: n,
                    focusRange: o,
                    focusDistance: i,
                    resolutionScale: r,
                    blendFunction: s,
                    opacity: a,
                  } = t;
                  (e.bokehScale = n),
                    (e.resolution.scale = r),
                    (e.cocMaterial.focusDistance = i),
                    (e.cocMaterial.focusRange = o),
                    (e.cocMaterial.needsUpdate = !0),
                    (e.blendMode.blendFunction = s),
                    e.blendMode.setOpacity(a);
                })(s, o),
              $(o) &&
                (function (e, t) {
                  const { granularity: n } = t;
                  e.granularity = n;
                })(s, o),
              z(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    opacity: o,
                    hue: i,
                    saturation: r,
                  } = t;
                  (e.hue = i),
                    (e.saturation = r),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(o);
                })(s, o),
              G(o) && n(s, o),
              q(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    opacity: o,
                    contrast: i,
                    brightness: r,
                  } = t;
                  (e.contrast = i),
                    (e.brightness = r),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(o);
                })(s, o),
              U(o) &&
                (function (e, t) {
                  const { blendFunction: n, opacity: o } = t;
                  (e.blendMode.blendFunction = n), e.blendMode.setOpacity(o);
                })(s, o),
              G(o) && n(s, o),
              V(o) &&
                (function (e, t) {
                  const {
                    edgeContrastFactor: n,
                    edgeMode: o,
                    edgeThreshold: i,
                    predicationMode: r,
                    predicationScale: s,
                    predicationStrength: a,
                    predicationThreshold: c,
                    preset: l,
                  } = t;
                  e.applyPreset(l);
                  const u = e.edgeDetectionMaterial;
                  (u.edgeDetectionMode = Number(o)),
                    (u.predicationMode = Number(r)),
                    (u.predicationScale = s),
                    (u.predicationStrength = a),
                    (u.predicationThreshold = c),
                    (u.edgeDetectionThreshold = i),
                    (u.localContrastAdaptationFactor = n),
                    (u.needsUpdate = !0);
                })(s, o),
              H(o) &&
                (function (e, t) {
                  var n;
                  const {
                    bias: o,
                    blendFunction: i,
                    depthAwareUpsampling: r,
                    distanceFalloff: s,
                    distanceThreshold: a,
                    intensity: c,
                    fade: l,
                    luminanceInfluence: d,
                    minRadiusScale: f,
                    opacity: p,
                    radius: h,
                    proximityFalloff: m,
                    proximityThreshold: g,
                    resolutionScale: y,
                    rings: v,
                    samples: w,
                    color: b,
                  } = t;
                  (e.radius = h),
                    (e.resolution.scale = y),
                    (e.samples = w),
                    (e.rings = v),
                    (e.color = new u.Q1f(b)),
                    (e.depthAwareUpsampling = r),
                    (e.intensity = c),
                    (e.luminanceInfluence = d),
                    (e.blendMode.blendFunction = i),
                    e.blendMode.setOpacity(p);
                  const _ = e.ssaoMaterial;
                  _.minRadiusScale = f;
                  const S =
                    (null === (n = _.uniforms.cameraFar) || void 0 === n
                      ? void 0
                      : n.value) || 2e3;
                  (_.distanceFalloff = s / S),
                    (_.distanceThreshold = a / S),
                    (_.proximityFalloff = m / S),
                    (_.proximityThreshold = g / S),
                    (_.bias = o),
                    (_.fade = l),
                    (_.needsUpdate = !0);
                })(s, o),
              X(o) &&
                (function (e, n) {
                  const {
                    adaptationRate: o,
                    averageLuminance: i,
                    exposure: r,
                    middleGrey: s,
                    minLuminance: a,
                    mode: c,
                    whitePoint: l,
                    resolution: u,
                    blendFunction: d,
                    opacity: f,
                  } = n;
                  (e.resolution = u),
                    (e.mode = Number(c)),
                    (e.adaptationRate = o),
                    e.uniforms.get("averageLuminance") &&
                      (e.uniforms.get("averageLuminance").value = i),
                    e.uniforms.get("middleGrey") &&
                      (e.uniforms.get("middleGrey").value = s),
                    e.uniforms.get("whitePoint") &&
                      (e.uniforms.get("whitePoint").value = l),
                    (e.adaptiveLuminanceMaterial.minLuminance = a),
                    (t.getRenderer().toneMappingExposure = r),
                    (e.blendMode.blendFunction = d),
                    e.blendMode.setOpacity(f);
                })(s, o);
          },
        };
      }
      function Y(e, t, n) {
        const { updateEffect: o } = J(e, t);
        return {
          updateEffect: o,
          createEffect: function (i) {
            var r;
            const { type: s, opacity: a } = i;
            if (null === (r = e.get(s)) || void 0 === r ? void 0 : r.effect)
              throw Error(
                `Trying to create an effect that's already added ${s}`
              );
            let c;
            if (
              (B(i) &&
                (c = (function (e) {
                  const {
                      filter: t,
                      intensity: n,
                      luminanceSmoothing: o,
                      luminanceThreshold: i,
                      radius: r,
                      blendFunction: s,
                    } = e,
                    a = new j.bv({
                      luminanceSmoothing: o,
                      luminanceThreshold: i,
                      intensity: n,
                      blendFunction: s,
                      mipmapBlur: !0,
                      radius: r,
                    });
                  return (a.luminancePass.enabled = !!t), a;
                })(i)),
              F(i) &&
                (c = (function (e) {
                  const {
                    offset: t,
                    darkness: n,
                    technique: o,
                    blendFunction: i,
                  } = e;
                  return new j.K1({
                    offset: t,
                    darkness: n,
                    technique: o,
                    blendFunction: i,
                  });
                })(i)),
              U(i) &&
                (c = (function (e) {
                  const { blendFunction: t } = e;
                  return new j.i({ blendFunction: t });
                })(i)),
              W(i) &&
                (c = (function (e) {
                  const {
                    bokehScale: t,
                    focusRange: n,
                    focusDistance: o,
                    resolutionScale: i,
                    blendFunction: r,
                  } = e;
                  return new j.kt(void 0, {
                    bokehScale: t,
                    focusRange: n,
                    focusDistance: o,
                    resolutionScale: i,
                    blendFunction: r,
                  });
                })(i)),
              $(i) &&
                (c = (function (e) {
                  const { granularity: t } = e;
                  return new j.jz(t);
                })(i)),
              z(i) &&
                (c = (function (e) {
                  const { hue: t, saturation: n, blendFunction: o } = e;
                  return new j.Ql({ blendFunction: o, hue: t, saturation: n });
                })(i)),
              G(i) &&
                (c = (function (e) {
                  const { bits: t, blendFunction: n } = e;
                  return new j.ei({ blendFunction: n, bits: t });
                })(i)),
              q(i) &&
                (c = (function (e) {
                  const { brightness: t, contrast: n, blendFunction: o } = e;
                  return new j.lq({
                    blendFunction: o,
                    brightness: t,
                    contrast: n,
                  });
                })(i)),
              V(i) &&
                (c = (function (e) {
                  const { edgeMode: t, predicationMode: n, preset: o } = e;
                  return new j.eF({
                    edgeDetectionMode: Number(t),
                    predicationMode: Number(n),
                    preset: o,
                  });
                })(i)),
              H(i) &&
                (c = (function (e) {
                  const {
                    bias: t,
                    blendFunction: n,
                    color: o,
                    depthAwareUpsampling: i,
                    distanceFalloff: r,
                    distanceThreshold: s,
                    fade: a,
                    luminanceInfluence: c,
                    intensity: l,
                    minRadiusScale: d,
                    radius: f,
                    resolutionScale: p,
                    rings: h,
                    samples: m,
                  } = e;
                  return new j.w2(void 0, void 0, {
                    bias: t,
                    blendFunction: n,
                    color: new u.Q1f(o),
                    depthAwareUpsampling: i,
                    distanceFalloff: r,
                    distanceThreshold: s,
                    fade: a,
                    luminanceInfluence: c,
                    intensity: l,
                    minRadiusScale: d,
                    radius: f,
                    resolutionScale: p,
                    rings: h,
                    samples: m,
                  });
                })(i)),
              X(i) &&
                (c = (function (e) {
                  const {
                      mode: n,
                      adaptationRate: o,
                      averageLuminance: i,
                      middleGrey: r,
                      minLuminance: s,
                      resolution: a,
                      whitePoint: c,
                      exposure: l,
                    } = e,
                    u = new j.i4({
                      mode: Number(n),
                      adaptationRate: o,
                      averageLuminance: i,
                      middleGrey: r,
                      minLuminance: s,
                      resolution: a,
                      whitePoint: c,
                    });
                  return (t.getRenderer().toneMappingExposure = l), u;
                })(i)),
              !c)
            )
              throw new Error(`Object type <${s}> is not supported!`);
            c.blendMode.setOpacity(a),
              c.initialize(t.getRenderer(), !0, u.ix0),
              e.set(s, { order: L.get(s), effect: c }),
              o(i),
              n();
          },
          deleteEffect: function (o) {
            var i;
            const r =
              null === (i = e.get(o)) || void 0 === i ? void 0 : i.effect;
            if (!r)
              throw Error(`Trying to delete an effect that doesn't exist ${o}`);
            o === D.ToneMapping && (t.getRenderer().toneMappingExposure = 1),
              e.delete(o),
              r.dispose(),
              n();
          },
        };
      }
      class K extends j.Vu {
        disposeWithoutDisposingEffects() {
          for (const e of Object.keys(this)) {
            const t = this[e];
            (t instanceof u.nWS ||
              t instanceof u.imn ||
              t instanceof u.gPd ||
              t instanceof j.oF) &&
              this[e].dispose();
          }
          this.setEffects([]);
        }
      }
      var Z;
      !(function (e) {
        (e[(e.PWObjects = 0)] = "PWObjects"),
          (e[(e.Normal = 1)] = "Normal"),
          (e[(e.Effects = 2)] = "Effects"),
          (e[(e.Copy = 3)] = "Copy"),
          (e[(e.Helpers = 4)] = "Helpers");
      })(Z || (Z = {}));
      const Q = (function () {
          const e = [Z.PWObjects, Z.Normal, Z.Effects, Z.Copy, Z.Helpers],
            t = new Map();
          return (
            e.forEach((e, n) => {
              t.set(e, n);
            }),
            t
          );
        })(),
        ee = [D.SMAA];
      function te(e, t, n, o, i) {
        let r = $e,
          s = 1,
          a = !1;
        const c = new j.s0(e, {
            alpha: !0,
            depthBuffer: !0,
            stencilBuffer: !0,
            frameBufferType: u.ix0,
          }),
          d = new j.AH();
        d.renderToScreen = !0;
        const f = new j.Xe();
        f.enabled = !1;
        const p = [],
          h = (e) =>
            Q.get(e) > Q.get(Z.Effects) ? Q.get(e) + p.length - 1 : Q.get(e),
          m = (e, t) => {
            c.addPass(e, h(t));
          };
        if ((m(d, Z.PWObjects), m(f, Z.Normal), $e)) {
          const e = new j.AH();
          (e.selection = new j.LN(void 0, l.X6.Helpers)),
            (e.clearPass.enabled = !1),
            (e.ignoreBackground = !0),
            (e.skipShadowMapUpdate = !0);
          const t = new j.nV();
          (d.renderToScreen = !1),
            (t.renderToScreen = !0),
            (e.renderToScreen = !0),
            m(e, Z.Helpers),
            m(t, Z.Copy);
        }
        const g = new Map(),
          { createEffect: y, updateEffect: v, deleteEffect: w } = Y(g, c, b);
        function b() {
          p.forEach((e) => {
            c.removePass(e), e.disposeWithoutDisposingEffects();
          }),
            (p.length = 0);
          const [t, i] = [...g.entries()]
              .sort((e, t) => e[1].order - t[1].order)
              .reduce(
                (e, t) => (e[ee.includes(t[0]) ? 0 : 1].push(t[1].effect), e),
                [[], []]
              ),
            s = t.length > 0;
          if (
            (s && (c.multisampling = 0),
            (0 === i.length && 0 === t.length) ||
              !e.getContext().getContextAttributes())
          )
            return;
          const l = [[]];
          if ((s && t.forEach((e) => l[0].push(e)), a && i.length > 0)) {
            let e = !1,
              t = !1;
            s && l.push([]);
            const n = c.passes[h(Z.Normal)];
            (n.enabled = !1),
              i.forEach((o) => {
                const i = o.getFragmentShader(),
                  r = void 0 !== i && /mainUv/.test(i),
                  s = !!(o.getAttributes() & j.IF.CONVOLUTION),
                  a = () => {
                    l.push([o]), (t = !1), (e = !1);
                  };
                ((t || e) && s) || (t && r) ? a() : l[l.length - 1].push(o),
                  o instanceof j.w2 &&
                    ((n.enabled = !0),
                    (o.normalBuffer = c.passes[h(Z.Normal)].texture),
                    (o.ssaoMaterial.needsUpdate = !0)),
                  (e = e || r),
                  (t = t || s);
              });
          }
          l.forEach((e) => {
            const t = new K(void 0, ...e);
            (t.mainCamera = n()),
              (t.mainScene = o()),
              m(t, Z.Effects),
              p.push(t);
          }),
            _(r);
        }
        function _(e) {
          (r = e),
            $e &&
              ((c.passes[h(Z.Helpers)].enabled = r),
              (c.passes[h(Z.Copy)].enabled = r)),
            p.length > 0
              ? ((c.passes[h(Z.PWObjects)].renderToScreen = !1),
                (c.passes[h(Z.Effects) + p.length - 1].renderToScreen = !r))
              : (c.passes[h(Z.PWObjects)].renderToScreen = !r);
        }
        function S() {
          const e = i(),
            o = n();
          if ((null == e ? void 0 : e.camera) && e.camera !== o) {
            const t = e.htmlElement.clientWidth / e.htmlElement.clientHeight;
            e.camera instanceof u.ubm &&
              ((e.camera.aspect = t), e.camera.updateProjectionMatrix()),
              e.camera instanceof u.qUd &&
                ((e.camera.left = -t),
                (e.camera.right = t),
                e.camera.updateProjectionMatrix());
          }
          if (o) {
            const e = t.x / t.y;
            o instanceof u.ubm && ((o.aspect = e), o.updateProjectionMatrix()),
              o instanceof u.qUd &&
                ((o.left = -e), (o.right = e), o.updateProjectionMatrix());
          }
        }
        return {
          createEffect: y,
          deleteEffect: w,
          updateEffect: v,
          setMainCamera: function (e) {
            c.setMainCamera(e);
          },
          setMainScene: function (e) {
            c.setMainScene(e);
          },
          setUsePostProcessing: function (e) {
            (a = e),
              a || ee.find((e) => g.has(e))
                ? b()
                : (p.forEach((e) => {
                    c.removePass(e), e.disposeWithoutDisposingEffects();
                  }),
                  (p.length = 0));
          },
          render: function (o) {
            const a = i(),
              l = n(),
              u = e.domElement;
            if (!u)
              throw new Error(
                "Canvas parent element is not found! Cannot update canvas size"
              );
            var d, f, p;
            if (
              ((d = u.clientWidth),
              (f = u.clientHeight),
              (p = e.getPixelRatio()),
              (d === t.x && f === t.y && s === p) ||
                (t.set(d, f), (s = p), c.setSize(d, f, !1), S()),
              a && a.camera !== l)
            ) {
              const t = a.htmlElement.getBoundingClientRect(),
                n = u.getBoundingClientRect();
              c.render(o);
              const { width: i, height: s } = t,
                d = t.x - n.x,
                f = n.height - (t.y - n.y) - s;
              e.setViewport(d, f, i, s),
                e.setScissorTest(!0),
                e.setScissor(d, f, i, s);
              const p = r;
              _(!1),
                c.setMainCamera(a.camera),
                c.render(o),
                e.setViewport(0, 0, n.width, n.height),
                e.setScissorTest(!1),
                _(p),
                c.setMainCamera(l);
            } else c.render(o);
          },
          effects: g,
          dispose: function () {
            g.clear(),
              c.dispose(),
              p.forEach((e) => e.dispose()),
              (p.length = 0);
          },
          updateCameraProjectionMatrix: S,
          setMultiSampling: function (t) {
            c.multisampling = Math.min(t, e.capabilities.maxSamples);
          },
          setRenderHelpers: _,
        };
      }
      var ne = n(2052),
        oe = n.n(ne),
        ie = n(7629),
        re = n(20);
      class se extends u.Qev {
        hasTypeListener(e) {
          var t;
          const n = this._listeners;
          return (
            !!n && !!(null === (t = n[e]) || void 0 === t ? void 0 : t.length)
          );
        }
      }
      function ae(e) {
        let t,
          n = !1;
        const i = (function (e) {
            const t = new u.JeP({
              canvas: e,
              powerPreference: "high-performance",
              antialias: !0,
              depth: !0,
              alpha: !0,
            });
            return (
              (t.debug.checkShaderErrors = d.DS),
              t.setSize(e.clientWidth, e.clientHeight, !1),
              (t.shadowMap.enabled = !0),
              (t.shadowMap.type = u.Wk7),
              t
            );
          })(e),
          r = (function (e) {
            const t = new u.BdL(e);
            t.compileCubemapShader();
            const n = new u.Z58(),
              o = new u.$p8(),
              i = new u.eaF(
                new u.Gu$(1).scale(1, 1, -1),
                new u.G_z({ transparent: !0, depthTest: !1 })
              ),
              r = new u.eaF(
                new u.Gu$(1).scale(1, 1, -1),
                new u.G_z({ depthTest: !1 })
              );
            return (
              n.add(r),
              n.add(i),
              n.add(o),
              {
                generateEnvironment: function (e, s, a, c, l, u) {
                  return (
                    r.material.color.set(a),
                    (o.intensity = l),
                    (i.material.map = e),
                    (i.material.opacity = c),
                    (i.rotation.y = s),
                    t.fromScene(n, u).texture
                  );
                },
              }
            );
          })(i),
          s = new u.I9Y();
        i.getSize(s);
        const c = new Map(),
          f = new Map();
        let p,
          h,
          m = !1;
        const g = new se();
        let y, v;
        const {
          effects: w,
          render: b,
          setMainCamera: _,
          setMainScene: S,
          createEffect: E,
          updateEffect: D,
          deleteEffect: j,
          setUsePostProcessing: N,
          setMultiSampling: L,
          updateCameraProjectionMatrix: B,
          setRenderHelpers: F,
        } = te(i, s, K, Y, function () {
          return y;
        });
        const U = (function (e) {
            const t = new u.Tap(),
              n = new M.Y(),
              o = new x.H(),
              i = new k(),
              r =
                $e || "srcdoc" === window.location.pathname
                  ? "/_next/static/"
                  : "",
              s = new O.Z().setDecoderPath(`${r}/draco/`),
              a = new C.p().setTranscoderPath(`${r}/basis/`);
            a.detectSupport(e);
            const c = new T.B()
                .setCrossOrigin("anonymous")
                .setDRACOLoader(s)
                .setKTX2Loader(a)
                .setMeshoptDecoder(I.f),
              d = new R.L(),
              f = new A.w(),
              p = {
                [l.ap.Gltf]: c,
                [l.ap.Texture]: t,
                [l.ap.HDRTexture]: n,
                [l.ap.EXRTexture]: o,
                [l.ap.Obj]: d,
                [l.ap.FBX]: f,
                [l.ap.VideoTexture]: i,
                [l.ap.Environment]: i,
              };
            return {
              load: function (e, t, n = () => {}) {
                const o = p[e];
                if (!o) throw new Error(`No loader for this asset type ${e}`);
                return o.load(t, n);
              },
              loadAsync: (e, t) => {
                const n = p[e];
                if (!n) throw new Error(`No loader for this asset type ${e}`);
                return n.loadAsync(t);
              },
              dispose: function () {
                s.dispose(), a.dispose();
              },
            };
          })(i),
          { load: V, loadAsync: H } = U,
          W = P(U, g),
          $ = new Set(),
          z = new Set(),
          G = new u.zD7();
        function q() {
          if (!p || !h || !i)
            return void console.error(
              "Trying to render with uninitalized objects",
              { activeScene: p, activeCamera: h, renderer: i }
            );
          n && (null == t || t.update());
          const e = G.getDelta(),
            o = G.getElapsedTime();
          $.forEach((t) => t(p, h, e, o)),
            b(e),
            z.forEach((t) => t(p, h, e, o));
        }
        function X() {
          if (!i) throw Error("Renderer is undefined");
          i.setAnimationLoop(null);
        }
        function J(e) {
          $.delete(e);
        }
        function Y() {
          return p;
        }
        function K() {
          return h;
        }
        const Z = [
          "SpotLightHelper",
          "PointLightHelper",
          "DirectionalLightHelper",
          "CameraHelper",
        ];
        function Q(e) {
          e.traverse((e) => {
            if (!Z.includes(e.type) && e instanceof u.eaF) {
              const t = e,
                n = (e) => {
                  (e.wireframe = m),
                    (e.transparent = !m && e.userData.isTransparent);
                };
              Array.isArray(t.material)
                ? t.material.forEach((e) => {
                    n(e);
                  })
                : n(t.material);
            }
          });
        }
        return {
          objects: c,
          materials: f,
          renderer: i,
          canvas: e,
          canvasSize: s,
          effects: w,
          eventDispatcher: g,
          environmentGenerator: r,
          load: V,
          loadAsync: H,
          getActiveScene: Y,
          setActiveScene: function (e) {
            (p = e), S(e);
          },
          getActiveCamera: K,
          setActiveCamera: function (t) {
            if (((h = t), _(t), h && h instanceof u.ubm && B(), !$e)) {
              null == v || v.dispose();
              const n = t.userData.controls;
              n &&
                (v = (function (e, t, n) {
                  const o = new u.I9Y(),
                    { easingDuration: i } = n,
                    r = ie.Ay.quickTo(o, "x", {
                      ease: "power2.out",
                      duration: i,
                    });
                  window.addEventListener("mousemove", c);
                  const s = ie.Ay.quickTo(o, "y", {
                    ease: "power2.out",
                    duration: i,
                    onUpdate: () => {
                      if ((0, a.O1)(n)) {
                        const { maxDistance: e } = n;
                        t.position.set(o.x * e.x, o.y * e.y, 0);
                      }
                      if ((0, a.IE)(n)) {
                        const { maxRotation: e } = n;
                        (t.rotation.order = "YXZ"),
                          t.rotation.set(o.y * e.x, -o.x * e.y, 0);
                      }
                    },
                  });
                  function c(t) {
                    const n = e.getBoundingClientRect(),
                      o = (0, re.qE)((t.clientX - n.x) / n.width, 0, 1),
                      i = (0, re.qE)((t.clientY - n.y) / n.height, 0, 1);
                    r(2 * o - 1), s(2 * -i + 1);
                  }
                  return {
                    dispose: function () {
                      r.tween.kill(),
                        s.tween.kill(),
                        (t.rotation.order = "XYZ"),
                        window.removeEventListener("mousemove", c);
                    },
                  };
                })(e, t, n));
            }
          },
          setCameraPreview: function (e) {
            (y = e), y && y.camera instanceof u.ubm && B();
          },
          resourceManager: W,
          getResource: W.getResource,
          addOnRenderCallback: function (e) {
            return $.add(e), () => J(e);
          },
          removeOnRenderCallback: J,
          addAfterRenderCallback: function (e) {
            return (
              z.add(e),
              () =>
                (function (e) {
                  z.delete(e);
                })(e)
            );
          },
          createEffect: E,
          deleteEffect: j,
          updateEffect: D,
          start: function (e = !0) {
            if (!i) throw Error("Renderer is undefined");
            e && g.dispatchEvent({ type: o.Loaded }), i.setAnimationLoop(q);
          },
          stop: X,
          render: q,
          dispose: function () {
            X(),
              U.dispose(),
              W.dispose(),
              c.forEach((e) => {
                e.isMesh && e.geometry.dispose();
              }),
              i.dispose();
          },
          setWireframe: function (e) {
            (m = e),
              c.forEach((e) => {
                Q(e);
              });
          },
          setUsePostProcessing: N,
          setWireframeOnObject: Q,
          setRenderHelpers: F,
          showStatsPanel: function (e) {
            (n = !0),
              t || ((t = new (oe())()), (t.dom.style.position = "fixed")),
              t.begin(),
              t.showPanel(0),
              e.appendChild(t.dom);
          },
          hideStatsPanel: function () {
            var e;
            (n = !1),
              t &&
                (t.end(),
                null === (e = t.dom.parentElement) ||
                  void 0 === e ||
                  e.removeChild(t.dom));
          },
          setMultiSampling: L,
          attachToDOM: function (e) {
            e.appendChild(i.domElement), s.set(0, 0);
          },
        };
      }
      var ce = n(7028),
        le = n(387);
      const ue = 30;
      (u.eaF.prototype.raycast = le.zQ),
        (u.I46.prototype.raycast = le.zQ),
        (u.ZLX.prototype.raycast = le.zQ),
        (u.LoY.prototype.computeBoundsTree = le.LO),
        (u.LoY.prototype.disposeBoundsTree = le.je);
      const de = {
        [o.MouseDown]: "mousedown",
        [o.MouseUp]: "mouseup",
        [o.MouseMove]: "mousemove",
      };
      function fe(e) {
        const {
            canvas: t,
            eventDispatcher: n,
            getActiveCamera: i,
            getActiveScene: r,
          } = e,
          s = t.parentElement,
          a = new u.tBo();
        a.layers.set(l.X6.Raycast), (a.firstHitOnly = !0);
        const c = (0, ce.A)(
          function (e) {
            const t = { type: o.MouseMove, data: f(e), mouseEvent: e };
            n.dispatchEvent(t);
          },
          ue,
          { maxWait: ue, leading: !0 }
        );
        const d = new u.I9Y();
        function f(e) {
          const n = i(),
            o = r();
          if (!o || !n)
            return {
              distance: 0,
              object: null,
              x: 0,
              y: 0,
              point: null,
              ray: a.ray,
            };
          const c = s.getBoundingClientRect();
          (d.x = ((e.clientX - c.left) / t.clientWidth) * 2 - 1),
            (d.y = (-(e.clientY - c.top) / t.clientHeight) * 2 + 1),
            a.setFromCamera(d, n);
          let u = [];
          if (
            ($e
              ? (a.layers.set(l.X6.HelpersRaycast),
                (u = a.intersectObject(o)),
                u.length ||
                  (a.layers.set(l.X6.Raycast), (u = a.intersectObject(o))))
              : (a.layers.set(l.X6.Raycast), (u = a.intersectObject(o))),
            !u.length)
          )
            return {
              distance: 0,
              object: null,
              x: d.x,
              y: d.y,
              point: null,
              ray: a.ray,
            };
          const f = u[0];
          return {
            distance: f.distance,
            object: f.object,
            point: f.point,
            ray: a.ray,
            x: d.x,
            y: d.y,
          };
        }
        const h = new u.kn4(),
          m = new u.PPD(),
          g = new Set(),
          y = new u.NRn();
        const v = {
          [o.MouseDown]: function (e) {
            if (4 === (void 0 !== e.buttons ? e.buttons : e.which)) return;
            const t = { type: o.MouseDown, data: f(e), mouseEvent: e };
            n.dispatchEvent(t);
          },
          [o.MouseUp]: function (e) {
            const t = { type: o.MouseUp, data: f(e), mouseEvent: e };
            n.dispatchEvent(t);
          },
          [o.MouseMove]: c,
        };
        return {
          dispose: function () {
            Object.keys(v).forEach((e) => t.removeEventListener(de[e], v[e]));
          },
          addEventListener: function (e) {
            t.addEventListener(de[e], v[e]);
          },
          removeEventListener: function (e) {
            t.removeEventListener(de[e], v[e]);
          },
          getObjectPositionOnScreen: function (e) {
            const t = i(),
              n = new u.Pq0();
            return e.getWorldPosition(n), n.project(t);
          },
          getObjectIntersectionAtPointer: function (e, t, n, o) {
            o ? a.layers.set(o) : a.layers.enableAll();
            const r = i();
            if ((a.setFromCamera(t, r), a.intersectObject(e, n).length > 0))
              return a.intersectObject(e)[0];
          },
          getObjectsInScreenView: function (e, t) {
            const n = i(),
              o = r();
            return (
              n instanceof u.ubm &&
                (function (n) {
                  const { near: o, far: i, fov: r, aspect: s, zoom: a } = n;
                  let c = (o * Math.tan(0.5 * u.cj9.DEG2RAD * r)) / a,
                    l = 2 * c,
                    d = s * l,
                    f = -0.5 * d;
                  (c = -(e.y - 0.5) * l),
                    (l *= t.y - e.y),
                    (f = (e.x - 0.5) * d),
                    (d *= t.x - e.x),
                    h.makePerspective(f, f + d, c, c - l, o, i);
                })(n),
              n instanceof u.qUd &&
                (function (n) {
                  const {
                      near: o,
                      far: i,
                      left: r,
                      right: s,
                      top: a,
                      bottom: c,
                      zoom: l,
                    } = n,
                    u = (s - r) / (2 * l),
                    d = (a - c) / (2 * l),
                    f = (s + r) / 2,
                    p = (a + c) / 2;
                  let m = f - u,
                    g = f + u,
                    y = p + d,
                    v = p - d;
                  const w = y - v,
                    b = g - m;
                  (y -= e.y * w),
                    (v += (1 - t.y) * w),
                    (m += e.x * b),
                    (g -= (1 - t.x) * b),
                    h.makeOrthographic(m, g, y, v, o, i);
                })(n),
              h.multiply(n.matrixWorldInverse),
              m.setFromProjectionMatrix(h),
              g.clear(),
              o.traverseVisible((e) => {
                if (!e.userData.isCollider) return;
                if (!e.layers.isEnabled(l.X6.Raycast)) return;
                const t = e;
                if (
                  (null === t.geometry.boundingBox &&
                    t.geometry.computeBoundingBox(),
                  y.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),
                  m.intersectsBox(y))
                ) {
                  const t = p(e);
                  if (!t) return;
                  g.has(t.uuid) || g.add(t.uuid);
                }
              }),
              [...g]
            );
          },
        };
      }
      var pe = n(4074),
        he = n(2853);
      function me(e, t, n) {
        if (!t) return;
        const o = e.userData.lastSync;
        return t
          .then((t) => {
            e.userData.lastSync === o && n(t);
          })
          .catch((e) => {
            console.error("Error in safeAsyncUpdate:", e);
          });
      }
      const ge = {
          [l.sc.Front]: u.hB5,
          [l.sc.Back]: u.hsX,
          [l.sc.Double]: u.$EB,
        },
        ye = {
          [l.J8.Lit]: u._4j,
          [l.J8.Unlit]: u.V9B,
          [l.J8.Phong]: u.tXL,
          [l.J8.Physical]: u.uSd,
        };
      function ve(e) {
        const {
          resourceManager: t,
          materials: n,
          objects: o,
          getActiveScene: i,
          environmentGenerator: c,
        } = e;
        function l(e) {
          return n.get(e);
        }
        function p(e) {
          const t = ye[e.type];
          if (!t) throw Error("Material type not supported");
          const o = (function (e, t) {
            const n = e;
            return new Proxy(
              e,
              s(Array.from(d.LX[t]), (e) =>
                n.dispatchEvent({ type: r.Update, property: e, target: n })
              )
            );
          })(new t(), e.type);
          return (o.uuid = e.uuid), n.set(e.uuid, o), h(e);
        }
        function h(t, o, r = !1) {
          var s, l, d, f, p, h, m, y, v;
          const {
              name: w,
              side: b,
              color: _,
              opacity: S,
              transparent: E,
              alphaTest: P,
              envMap: O,
              aoMapIntensity: T,
            } = t,
            M = n.get(t.uuid);
          if (!M) throw Error(`Material with ${t.uuid} does not exist`);
          (M.userData.lastSync = Date.now()),
            r || (M.color.set(_), (M.opacity = S), (M.aoMapIntensity = T)),
            (M.name = w || ""),
            (M.side = ge[b]),
            (M.transparent = E),
            (M.userData.isTransparent = E),
            (M.alphaTest = P);
          const x = [
            g(t, "map", null == o ? void 0 : o.map),
            g(t, "alphaMap", null == o ? void 0 : o.alphaMap),
            g(t, "aoMap", null == o ? void 0 : o.aoMap),
          ];
          if (
            ((null == o ? void 0 : o.envMap) &&
              o.envMap.uuid !== (null == O ? void 0 : O.uuid) &&
              e.resourceManager.deleteResource(o.envMap.uuid),
            O
              ? me(
                  M,
                  (
                    e.resourceManager.getResource(O.uuid) ||
                    e.resourceManager.createResource(O)
                  ).assetInstance,
                  (e) => {
                    var t;
                    const n = e;
                    if (((M.userData.hasEnvMap = !0), (0, a.ZF)(M)))
                      M.envMap = n.reflection;
                    else if ((0, a.N7)(M))
                      M.envMap = M.userData.useRefraction
                        ? n.refraction
                        : n.reflection;
                    else {
                      const {
                        intensity: e,
                        rotation: o,
                        opacity: i,
                        blurriness: r,
                      } = O;
                      null === (t = M.envMap) || void 0 === t || t.dispose();
                      const s = c.generateEnvironment(
                        n.reflection,
                        o,
                        "white",
                        i,
                        e,
                        r
                      );
                      M.envMap = s;
                    }
                  }
                )
              : (null === (s = M.envMap) || void 0 === s || s.dispose(),
                (M.envMap = null),
                (M.userData.hasEnvMap = !1)),
            (0, a.Pd)(t))
          ) {
            if (!(M instanceof u.V9B)) throw Error("Material type mismatch");
            if (
              (r || (M.reflectivity = t.reflectivity),
              x.push(g(t, "specularMap", null == o ? void 0 : o.specularMap)),
              !O)
            ) {
              const t =
                null ===
                  (f =
                    null ===
                      (d =
                        null === (l = i()) || void 0 === l
                          ? void 0
                          : l.environment) || void 0 === d
                      ? void 0
                      : d.userData) || void 0 === f
                  ? void 0
                  : f.originalTextureUuid;
              t &&
                me(
                  M,
                  null === (p = e.resourceManager.getResource(t)) ||
                    void 0 === p
                    ? void 0
                    : p.assetInstance,
                  (e) => {
                    const t = e.reflection;
                    M.envMap = t;
                  }
                );
            }
          }
          if ((0, a.gL)(t) || (0, a.K2)(t)) {
            if (!(0, a.is)(M) && !(0, a.uK)(M))
              throw Error("Material type mismatch");
            const {
              flatShading: e,
              roughness: n,
              displacementScale: i,
              emissive: s,
              emissiveIntensity: c,
              metalness: l,
            } = t;
            if (
              (r ||
                ((M.metalness = l),
                (M.roughness = n),
                (M.emissiveIntensity = c),
                (M.displacementScale = i),
                M.emissive.set(s)),
              (M.flatShading = e),
              x.push(
                g(t, "metalnessMap", null == o ? void 0 : o.metalnessMap),
                g(t, "emissiveMap", null == o ? void 0 : o.emissiveMap),
                g(t, "normalMap", null == o ? void 0 : o.normalMap),
                g(t, "roughnessMap", null == o ? void 0 : o.roughnessMap),
                g(t, "displacementMap", null == o ? void 0 : o.displacementMap)
              ),
              (0, a.K2)(t) && (0, a.uK)(M))
            ) {
              const {
                ior: e,
                reflectivity: n,
                iridescence: i,
                iridescenceIOR: s,
                sheen: a,
                sheenColor: c,
                sheenRoughness: l,
                clearcoat: u,
                clearcoatRoughness: d,
                transmission: f,
                dispersion: p,
                thickness: h,
                attenuationColor: m,
                attenuationDistance: y,
                specularIntensity: v,
                specularColor: w,
              } = t;
              r ||
                ((M.ior = e),
                (M.reflectivity = n),
                (M.iridescence = i),
                (M.iridescenceIOR = s),
                (M.sheen = a),
                (M.sheenRoughness = l),
                M.sheenColor.set(c),
                (M.clearcoat = u),
                (M.clearcoatRoughness = d),
                (M.transmission = f),
                (M.dispersion = p),
                (M.thickness = h),
                M.attenuationColor.set(m),
                (M.attenuationDistance = 0 === y ? 1 / 0 : y),
                M.specularColor.set(w),
                (M.specularIntensity = v)),
                x.push(
                  g(t, "iridescenceMap", null == o ? void 0 : o.iridescenceMap)
                );
            }
          }
          if ((0, a.HA)(t)) {
            if (!(M instanceof u.tXL)) throw Error("Material type mismatch");
            const {
              flatShading: n,
              bumpScale: s,
              displacementScale: a,
              emissive: c,
              emissiveIntensity: l,
              refractionRatio: d,
              useRefraction: f,
              shininess: p,
              reflectivity: w,
              specular: b,
            } = t;
            if (
              (r ||
                ((M.bumpScale = s),
                (M.reflectivity = w),
                (M.emissiveIntensity = l),
                (M.displacementScale = a),
                M.emissive.set(c),
                M.specular.set(b),
                (M.refractionRatio = d),
                (M.shininess = p)),
              (M.userData.useRefraction = f),
              (M.flatShading = n),
              x.push(
                g(t, "specularMap", null == o ? void 0 : o.specularMap),
                g(t, "emissiveMap", null == o ? void 0 : o.emissiveMap),
                g(t, "normalMap", null == o ? void 0 : o.normalMap),
                g(t, "bumpMap", null == o ? void 0 : o.bumpMap),
                g(t, "displacementMap", null == o ? void 0 : o.displacementMap)
              ),
              !O)
            ) {
              const t =
                null ===
                  (y =
                    null ===
                      (m =
                        null === (h = i()) || void 0 === h
                          ? void 0
                          : h.environment) || void 0 === m
                      ? void 0
                      : m.userData) || void 0 === y
                  ? void 0
                  : y.originalTextureUuid;
              t &&
                me(
                  M,
                  null === (v = e.resourceManager.getResource(t)) ||
                    void 0 === v
                    ? void 0
                    : v.assetInstance,
                  (e) => {
                    const t = e;
                    M.envMap = f ? t.refraction : t.reflection;
                  }
                );
            }
          }
          return (M.needsUpdate = !0), Promise.all(x);
        }
        const g = (e, i, r) => {
          var s, a;
          const c = e[i],
            l = n.get(e.uuid);
          if (!l) throw new Error(`Material with ${e.uuid} does not exist`);
          if (
            (r &&
              r.uuid !== (null == c ? void 0 : c.uuid) &&
              t.deleteResource(r.uuid),
            (0, he.A)(c, r))
          )
            return;
          if (!c) return void (l[i] = null);
          const u = (e) => {
            e ? (m(e, c, r), (l[i] = e), (l.needsUpdate = !0)) : (l[i] = null);
          };
          if (c) {
            if (c.assetUrl !== d.j4)
              return me(
                l,
                null === (a = t.getResource(c.uuid) || t.createResource(c)) ||
                  void 0 === a
                  ? void 0
                  : a.assetInstance,
                (e) => {
                  u(e);
                }
              );
            {
              const t =
                null === (s = o.get(e.overrideObjectId)) || void 0 === s
                  ? void 0
                  : s.userData;
              if (!t) return;
              u(t.originalMaps[e.overrideMaterialIndex][i]);
            }
          }
        };
        return {
          dispose: function () {
            n.forEach((e) => f(e));
          },
          createMaterial: p,
          updateMaterial: h,
          getMaterial: l,
          deleteMaterial: function (e) {
            const t = n.get(e);
            if (!t)
              throw new Error(
                `Cannot delete material that does not exist! ${e}`
              );
            t.dispose(), n.delete(e);
          },
          replaceMaterial: function (e, t) {
            const o = n.get(t.uuid);
            if (!o) return;
            o.uuid = (0, pe.lk)();
            const r = i();
            p(e);
            const s = l(e.uuid);
            r.traverse((e) => {
              ((0, a.uW)(e) || (0, a.GZ)(e)) &&
                (Array.isArray(e.material)
                  ? e.material.forEach((t, n) => {
                      t.uuid === o.uuid && (e.material[n] = s);
                    })
                  : e.material.uuid === o.uuid && (e.material = s));
            }),
              o.dispose();
          },
        };
      }
      function we(e) {
        return e === o.MouseDown || e === o.MouseUp || e === o.MouseMove;
      }
      function be(e) {
        let t = null;
        if ((0, a.ME)(e)) {
          const {
            width: n,
            height: o,
            widthSegments: i,
            heightSegments: r,
          } = e;
          t = new u.bdM(n, o, i, r);
        }
        if ((0, a.HP)(e)) {
          const {
            width: n,
            height: o,
            depth: i,
            widthSegments: r,
            heightSegments: s,
            depthSegments: a,
          } = e;
          t = new u.iNn(n, o, i, r, s, a);
        }
        if ((0, a.hU)(e)) {
          const {
            radius: n,
            widthSegments: o,
            heightSegments: i,
            phiStart: r,
            phiLength: s,
            thetaStart: a,
            thetaLength: c,
          } = e;
          t = new u.Gu$(n, o, i, r, s, a, c);
        }
        if ((0, a.SR)(e)) {
          const {
            radiusTop: n,
            radiusBottom: o,
            height: i,
            radialSegments: r,
            heightSegments: s,
            openEnded: a,
            thetaStart: c,
            thetaLength: l,
          } = e;
          t = new u.Ho_(n, o, i, r, s, a, c, l);
        }
        if ((0, a.pU)(e)) {
          const {
            radius: n,
            tube: o,
            radialSegments: i,
            tubularSegments: r,
            arc: s,
          } = e;
          t = new u.O3Y(n, o, i, r, s);
        }
        if ((0, a.dj)(e)) {
          const {
            radius: n,
            height: o,
            radialSegments: i,
            heightSegments: r,
            openEnded: s,
            thetaStart: a,
            thetaLength: c,
          } = e;
          t = new u.qFE(n, o, i, r, s, a, c);
        }
        if (!t) throw new Error("Unknown geometry type!");
        return (t.uuid = e.uuid), t;
      }
      const _e = { maxLeafTris: 5, strategy: n(4428).Q7, maxDepth: 18 },
        Se = 10;
      function Ee(e, t) {
        const { environmentGenerator: n } = e;
        function o(t, n, o, i) {
          var r;
          const { intensity: s, color: c, castShadow: l, shadowQuality: u } = n;
          if (
            (o || ((t.intensity = s), t.color.set(c)),
            l &&
              (t.shadow &&
                ((t.shadow.mapSize.width = Number(u)),
                (t.shadow.mapSize.height = Number(u)),
                null === (r = t.shadow.map) || void 0 === r || r.dispose(),
                (t.shadow.map = null),
                (t.shadow.normalBias = 0.03),
                t.shadow.isDirectionalLightShadow &&
                  ((t.shadow.camera.top = Se),
                  (t.shadow.camera.right = Se),
                  (t.shadow.camera.left = -Se),
                  (t.shadow.camera.bottom = -Se)),
                (t.shadow.needsUpdate = !0)),
              (0, a._i)(n) && (t.castShadow = !1)),
            (0, a.s_)(n))
          ) {
            const e = t;
            if (!o) {
              const { decay: t, distance: o } = n;
              void 0 !== t && (e.decay = t), void 0 !== o && (e.distance = o);
            }
          }
          if ((0, a.I$)(n)) {
            const r = t,
              { map: s } = n;
            if (!o) {
              const { decay: e, distance: t, penumbra: o, angle: i } = n;
              void 0 !== e && (r.decay = e),
                void 0 !== t && (r.distance = t),
                void 0 !== o && (r.penumbra = o),
                void 0 !== i && (r.angle = i);
            }
            i &&
              (0, a.I$)(i) &&
              i.map &&
              i.map.uuid !== (null == s ? void 0 : s.uuid) &&
              e.resourceManager.deleteResource(i.map.uuid),
              s
                ? me(
                    r,
                    (
                      e.resourceManager.getResource(s.uuid) ||
                      e.resourceManager.createResource(s)
                    ).assetInstance,
                    (e) => {
                      const t = e;
                      m(t, s, null == i ? void 0 : i.map), (r.map = t);
                    }
                  )
                : (r.map = null);
          }
          if ((0, a.s9)(n)) {
            const e = t,
              { target: o } = n;
            o && h(e.target.position, o);
          }
        }
        function i(e, t) {
          var n, o;
          h(e.position, t.position),
            h(e.scale, t.scale),
            (n = e.rotation),
            (o = t.rotation),
            n.setFromVector3(h(g, o));
        }
        return {
          updateObject: function (r, s, c = !1) {
            const d = e.objects.get(r.uuid);
            if (!d)
              throw new Error(
                "Objects that you are trying to update doesn't exist!"
              );
            (d.userData.lastSync = Date.now()),
              (d.name = r.name),
              (d.visible = r.visible),
              (d.castShadow = r.castShadow),
              (d.receiveShadow = r.receiveShadow),
              c || i(d, r),
              (0, a.Jv)(r) &&
                (function (n, o, i) {
                  var r;
                  const {
                    uuid: s,
                    object: a,
                    animation: c,
                    castShadow: u,
                    receiveShadow: d,
                  } = o;
                  if (
                    ((i && i.castShadow === u && i.receiveShadow === d) ||
                      n.traverse((e) => {
                        (e.castShadow = o.castShadow),
                          (e.receiveShadow = o.receiveShadow);
                      }),
                    (0, he.A)(null == i ? void 0 : i.animation, c))
                  )
                    return;
                  const { clipName: f } = c;
                  f
                    ? me(
                        n,
                        null === (r = e.getResource(a.uuid)) || void 0 === r
                          ? void 0
                          : r.assetInstance,
                        (e) => {
                          var o;
                          if (a.assetType !== l.ap.Gltf) return;
                          const r = e.animations;
                          (null == i ? void 0 : i.animation.clipName) &&
                            i.animation.clipName !== f &&
                            t.removeAnimation(i.uuid, i.animation.clipName);
                          const u = t.getAnimation(s, f);
                          if (u) t.updateAnimation(s, c), u.play();
                          else {
                            const e = r.find((e) => e.name === f),
                              i =
                                null ===
                                  (o = n.children.find(
                                    (e) => !!e.userData.isGLTF
                                  )) || void 0 === o
                                  ? void 0
                                  : o.children[0];
                            if (!e || !i)
                              throw Error(
                                `No animation clip with this name ${f} or root ${n}`
                              );
                            t.createAnimation(i, s, e, c).play();
                          }
                        }
                      )
                    : (null == i ? void 0 : i.animation.clipName) &&
                      t.removeAnimation(i.uuid, i.animation.clipName);
                })(d, r, s),
              (0, a.G_)(r) && o(d, r, c, s),
              (0, a.jA)(r) &&
                (function (e, t, n) {
                  const {
                    flowDirectionX: o,
                    flowDirectionY: i,
                    flowSpeed: r,
                    color: s,
                    quality: a,
                    useRefraction: c,
                    waveScale: l,
                    reflectivity: u,
                  } = t;
                  n && c !== n.useRefraction && e.setUseRefraction(c),
                    n && a !== n.quality && e.setResolution(t.quality),
                    n &&
                      s !== n.color &&
                      e.material.uniforms.color.value.set(s),
                    (e.material.uniforms.flowDirection.value.x = o),
                    (e.material.uniforms.flowDirection.value.y = i),
                    e.material.uniforms.flowDirection.value.normalize(),
                    (e.material.uniforms.reflectivity.value = u),
                    (e.material.uniforms.config.value.w = l),
                    (e.flowSpeed = r),
                    (e.material.needsUpdate = !0);
                })(d, r, s),
              (0, a.uQ)(r) &&
                (function (t, i, r) {
                  var s;
                  const {
                    background: c,
                    environment: l,
                    ambientLight: d,
                    fog: f,
                    useEnvironmentAsBackground: p,
                    backgroundBlurriness: h,
                    backgroundTransparent: m,
                    multisampling: g,
                  } = i;
                  if (
                    ((t.backgroundBlurriness = h),
                    (null == r ? void 0 : r.environment) &&
                      r.environment.uuid !== (null == l ? void 0 : l.uuid) &&
                      e.resourceManager.deleteResource(r.environment.uuid),
                    l
                      ? me(
                          t,
                          (
                            e.resourceManager.getResource(l.uuid) ||
                            e.resourceManager.createResource(l)
                          ).assetInstance,
                          (o) => {
                            var i;
                            const r = o,
                              {
                                intensity: s,
                                rotation: u,
                                opacity: d,
                                blurriness: f,
                              } = l;
                            null === (i = t.environment) ||
                              void 0 === i ||
                              i.dispose();
                            const h = n.generateEnvironment(
                              r.reflection,
                              u,
                              "string" == typeof c ? c : "white",
                              d,
                              s,
                              f
                            );
                            (t.environment = h),
                              (h.userData.originalTextureUuid = l.uuid),
                              p && !m && (t.background = r.reflection),
                              e.materials.forEach((e) => {
                                (0, a.ZF)(e) &&
                                  !e.userData.hasEnvMap &&
                                  (e.envMap = r.reflection),
                                  (0, a.N7)(e) &&
                                    !e.userData.hasEnvMap &&
                                    (e.envMap = e.userData.useRefraction
                                      ? r.refraction
                                      : r.reflection);
                              });
                          }
                        )
                      : ((t.environment = null),
                        e.materials.forEach((e) => {
                          (!(0, a.ZF)(e) && !(0, a.N7)(e)) ||
                            e.userData.hasEnvMap ||
                            (e.envMap = null);
                        })),
                    (null == r ? void 0 : r.background) &&
                      "string" != typeof r.background &&
                      r.background.uuid !== c.uuid &&
                      e.resourceManager.deleteResource(r.background.uuid),
                    m || !c)
                  )
                    t.background = null;
                  else if (!p || !l)
                    if ("string" == typeof c) {
                      const e = t.background;
                      (null == e ? void 0 : e.isColor)
                        ? e.set(c)
                        : (t.background = new u.Q1f(c));
                    } else
                      me(
                        t,
                        null ===
                          (s =
                            e.resourceManager.getResource(c.uuid) ||
                            e.resourceManager.createResource(c)) || void 0 === s
                          ? void 0
                          : s.assetInstance,
                        (e) => {
                          t.background = e;
                        }
                      );
                  const y = e.objects.get(d.uuid);
                  y && ((y.visible = d.visible), o(y, d, !1)),
                    (null == g ? void 0 : g.enabled)
                      ? e.setMultiSampling(g.samples)
                      : e.setMultiSampling(0),
                    (null == f ? void 0 : f.enabled)
                      ? (t.fog = new u.jUj(
                          f.useBackgroundColor
                            ? "string" == typeof i.background
                              ? i.background
                              : "#FFFFFF"
                            : f.color,
                          f.near,
                          f.far
                        ))
                      : (null == f ? void 0 : f.enabled) || (t.fog = null);
                })(d, r, s),
              (0, a.V0)(r) &&
                (function (t, n, o) {
                  var i;
                  const { geometry: r } = n;
                  if (
                    (null == o ? void 0 : o.geometry) &&
                    r !== (null == o ? void 0 : o.geometry)
                  ) {
                    const e = !!(null === (i = n.raycastConfig) || void 0 === i
                      ? void 0
                      : i.enabled);
                    (t.geometry = be(r)), e && t.geometry.computeBoundsTree(_e);
                  }
                  if (n.materialId !== (null == o ? void 0 : o.materialId)) {
                    const o = e.materials.get(n.materialId);
                    if (!o)
                      throw Error(
                        `Material with ${n.materialId} does not exist!`
                      );
                    t.material = o;
                  }
                })(d, r, s),
              (0, a.TK)(r) &&
                (function (t, n) {
                  if ((0, a.hA)(n)) {
                    const { zoom: e, near: o, far: i, fov: r } = n,
                      s = t;
                    (s.zoom = e),
                      (s.near = o),
                      (s.far = i),
                      (s.fov = r),
                      s.updateProjectionMatrix();
                  }
                  if ((0, a.$N)(n)) {
                    const { zoom: o, near: i, far: r } = n,
                      s = t;
                    (s.zoom = o), (s.near = i), (s.far = r);
                    const a = e.canvasSize.x / e.canvasSize.y;
                    (s.left = -a), (s.right = a), s.updateProjectionMatrix();
                  }
                })(d.camera, r);
          },
        };
      }
      var Pe = n(2445),
        Oe = n(739);
      const Te = 0.15,
        Me = 0.075;
      class xe extends u.eaF {
        constructor(e, t) {
          var n;
          super(e),
            (this.isWater = !0),
            (this.textureMatrix = new u.kn4()),
            (this.clock = new u.zD7()),
            (this.useRefraction = !1),
            (this.clipBias = 0),
            (this.textureHeight = 512),
            (this.textureWidth = 512),
            (this.isWater = !0);
          const {
            flowSpeed: o = 0.03,
            textureHeight: i = 512,
            textureWidth: r = 512,
            clipBias: s = 0,
            flowDirection: a = new u.I9Y(1, 0),
            reflectivity: c = 0.02,
            scale: l = 1,
            flowMap: d,
            normalMap0: f,
            normalMap1: p,
            useRefraction: h = !1,
          } = t;
          (this.flowSpeed = o), (this.useRefraction = h);
          const m = new u.Q1f(t.color),
            g = Re;
          (this.clipBias = s),
            (this.textureWidth = r),
            (this.textureHeight = i),
            (this.reflector = new Oe.J(e, {
              textureWidth: r,
              textureHeight: i,
              clipBias: s,
            })),
            (this.reflector.matrixAutoUpdate = !1),
            this.useRefraction &&
              ((this.refractor = new Pe.N(e, {
                textureWidth: r,
                textureHeight: i,
                clipBias: s,
              })),
              (this.refractor.matrixAutoUpdate = !1)),
            (this.material = new u.BKk({
              uniforms: u.LlO.merge([u.fCn.fog, g.uniforms]),
              vertexShader: g.vertexShader,
              fragmentShader: g.fragmentShader,
              transparent: !0,
              fog: !0,
            })),
            void 0 !== d
              ? ((this.material.defines.USE_FLOWMAP = ""),
                (this.material.uniforms.tFlowMap = new u.nc$(d)))
              : (this.material.uniforms.flowDirection = new u.nc$(a)),
            this.useRefraction &&
              ((this.material.defines.USE_REFRACTION = ""),
              (this.material.uniforms.tRefractionMap.value =
                null === (n = this.refractor) || void 0 === n
                  ? void 0
                  : n.getRenderTarget().texture)),
            (f.wrapS = f.wrapT = u.GJx),
            (p.wrapS = p.wrapT = u.GJx),
            (this.material.uniforms.tReflectionMap.value =
              this.reflector.getRenderTarget().texture),
            (this.material.uniforms.tNormalMap0.value = f),
            (this.material.uniforms.tNormalMap1.value = p),
            (this.material.uniforms.color.value = m),
            (this.material.uniforms.reflectivity.value = c),
            (this.material.uniforms.textureMatrix.value = this.textureMatrix),
            (this.material.uniforms.config.value.x = 0),
            (this.material.uniforms.config.value.y = Me),
            (this.material.uniforms.config.value.z = Me),
            (this.material.uniforms.config.value.w = l),
            (this.onBeforeRender = function (e, t, n, o, i, r) {
              var s, a;
              this.updateTextureMatrix(n),
                this.updateFlow(),
                (this.visible = !1),
                this.reflector.matrixWorld.copy(this.matrixWorld),
                this.reflector.onBeforeRender(e, t, n, o, i, r),
                this.useRefraction &&
                  (null === (s = this.refractor) ||
                    void 0 === s ||
                    s.onBeforeRender(e, t, n, o, i, r),
                  null === (a = this.refractor) ||
                    void 0 === a ||
                    a.matrixWorld.copy(this.matrixWorld)),
                (this.visible = !0);
            });
        }
        updateTextureMatrix(e) {
          this.textureMatrix.set(
            0.5,
            0,
            0,
            0.5,
            0,
            0.5,
            0,
            0.5,
            0,
            0,
            0.5,
            0.5,
            0,
            0,
            0,
            1
          ),
            this.textureMatrix.multiply(e.projectionMatrix),
            this.textureMatrix.multiply(e.matrixWorldInverse),
            this.textureMatrix.multiply(this.matrixWorld);
        }
        setUseRefraction(e) {
          var t, n;
          this.useRefraction !== e &&
            (this.useRefraction
              ? ((this.material.defines.USE_REFRACTION = !1),
                null === (t = this.refractor) || void 0 === t || t.dispose())
              : ((this.refractor = new Pe.N(this.geometry, {
                  textureWidth: this.textureWidth,
                  textureHeight: this.textureHeight,
                  clipBias: this.clipBias,
                })),
                (this.refractor.matrixAutoUpdate = !1),
                (this.material.defines.USE_REFRACTION = ""),
                (this.material.uniforms.tRefractionMap.value =
                  null === (n = this.refractor) || void 0 === n
                    ? void 0
                    : n.getRenderTarget().texture)),
            (this.useRefraction = e));
        }
        updateFlow() {
          const e = this.clock.getDelta(),
            t = this.material.uniforms.config;
          (t.value.x += this.flowSpeed * e),
            (t.value.y = t.value.x + Me),
            t.value.x >= Te
              ? ((t.value.x = 0), (t.value.y = Me))
              : t.value.y >= Te && (t.value.y = t.value.y - Te);
        }
        setResolution(e) {
          var t;
          this.reflector.getRenderTarget().setSize(e, e),
            null === (t = this.refractor) ||
              void 0 === t ||
              t.getRenderTarget().setSize(e, e);
        }
        dispose() {
          var e, t, n, o, i, r, s;
          this.reflector.dispose(),
            null === (e = this.refractor) || void 0 === e || e.dispose(),
            null ===
              (n =
                null === (t = this.material.uniforms.tNormalMap0) ||
                void 0 === t
                  ? void 0
                  : t.value) ||
              void 0 === n ||
              n.dispose(),
            null ===
              (i =
                null === (o = this.material.uniforms.tNormalMap1) ||
                void 0 === o
                  ? void 0
                  : o.value) ||
              void 0 === i ||
              i.dispose(),
            this.material.dispose(),
            null === (s = (r = this.geometry).disposeBoundsTree) ||
              void 0 === s ||
              s.call(r),
            this.geometry.dispose();
        }
      }
      const Re = {
        uniforms: {
          color: { type: "c", value: null },
          reflectivity: { type: "f", value: 0 },
          tReflectionMap: { type: "t", value: null },
          tRefractionMap: { type: "t", value: null },
          tNormalMap0: { type: "t", value: null },
          tNormalMap1: { type: "t", value: null },
          textureMatrix: { type: "m4", value: null },
          config: { type: "v4", value: new u.IUQ() },
        },
        vertexShader:
          "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nuniform mat4 textureMatrix;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n    vUv = uv;\n    vCoord = textureMatrix * vec4(position, 1.0);\n\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vToEye = cameraPosition - worldPosition.xyz;\n\n    vec4 mvPosition = viewMatrix * worldPosition; // used in fog_vertex\n    gl_Position = projectionMatrix * mvPosition;\n\n    #include <logdepthbuf_vertex>\n    #include <fog_vertex>\n\n}",
        fragmentShader:
          "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nuniform sampler2D tReflectionMap;\n    #ifdef USE_REFRACTION\nuniform sampler2D tRefractionMap;\n    #endif\nuniform sampler2D tNormalMap0;\nuniform sampler2D tNormalMap1;\n\n\t\t#ifdef USE_FLOWMAP\nuniform sampler2D tFlowMap;\n\t\t#else\nuniform vec2 flowDirection;\n\t\t#endif\n\nuniform vec3 color;\nuniform float reflectivity;\nuniform vec4 config;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n\n  #include <logdepthbuf_fragment>\n\n  float flowMapOffset0 = config.x;\n  float flowMapOffset1 = config.y;\n  float halfCycle = config.z;\n  float scale = config.w;\n\n  vec3 toEye = normalize(vToEye);\n\n\t\t\t// determine flow direction\n  vec2 flow;\n\t\t\t#ifdef USE_FLOWMAP\n  flow = texture2D(tFlowMap, vUv).rg * 2.0 - 1.0;\n\t\t\t#else\n  flow = flowDirection;\n\t\t\t#endif\n  flow.x *= -1.0;\n\n\t\t\t// sample normal maps (distort uvs with flowdata)\n  vec4 normalColor0 = texture2D(tNormalMap0, (vUv * scale) + flow * flowMapOffset0);\n  vec4 normalColor1 = texture2D(tNormalMap1, (vUv * scale) + flow * flowMapOffset1);\n\n\t\t\t// linear interpolate to get the final normal color\n  float flowLerp = abs(halfCycle - flowMapOffset0) / halfCycle;\n  vec4 normalColor = mix(normalColor0, normalColor1, flowLerp);\n\n\t\t\t// calculate normal vector\n  vec3 normal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));\n\n\t\t\t// calculate the fresnel term to blend reflection and refraction maps\n  float theta = max(dot(toEye, normal), 0.0);\n  float reflectance = reflectivity + (1.0 - reflectivity) * pow((1.0 - theta), 5.0);     \n\n\t\t\t// calculate final uv coords\n  vec3 coord = vCoord.xyz / vCoord.w;\n  vec2 uv = coord.xy + coord.z * normal.xz * 0.05;\n\n  vec4 reflectColor = texture2D(tReflectionMap, vec2(1.0 - uv.x, uv.y));\n      #ifdef USE_REFRACTION\n  vec4 refractColor = texture2D(tRefractionMap, uv);\n      #endif\n\n\t\t\t// multiply water color with the mix of both textures\n      #ifdef USE_REFRACTION\n  gl_FragColor = vec4(color, 1.0) * mix(refractColor, reflectColor, reflectance);\n      #else\n  gl_FragColor = vec4(color, reflectance) * reflectColor;\n      #endif\n\n  #include <tonemapping_fragment>\n  #include <tonemapping_fragment>\n  #include <fog_fragment>\n}\n",
      };
      class Ae extends u.YJl {
        constructor(e) {
          return (
            super(),
            (this.isCameraWrapper = !0),
            (this.camera = e),
            this.add(this.camera),
            this
          );
        }
      }
      const Ce = "https://files.peachworlds.com",
        Ie = `${Ce}/static/textures/water_normal_data_1_v_0_23_1.webp`,
        ke = `${Ce}/static/textures/water_normal_data_2_v_0_23_1.webp`;
      function De(e, t) {
        const { updateObject: n } = Ee(e, t),
          { materials: o, objects: i } = e;
        function r(e, t) {
          var n;
          const o = i.get(e),
            r = i.get(t);
          if (!o) throw new Error("Cannot set parent relationship!");
          r ? r.add(o) : null === (n = o.parent) || void 0 === n || n.remove(o);
        }
        return {
          updateObject: n,
          createObject: function t(s, d) {
            var f;
            let p = null;
            if (!s.uuid) throw new Error("Object must have a uuid!");
            if (i.has(s.uuid)) throw new Error("Object already exists!");
            if (
              ((0, a.VZ)(s) && (p = new u.YJl()),
              (0, a.jA)(s) &&
                (p = (function (t) {
                  const {
                      flowDirectionX: n,
                      flowDirectionY: o,
                      flowSpeed: i,
                      color: r,
                      waveScale: s,
                      quality: a,
                    } = t,
                    c = new u.bdM(1, 1);
                  return new xe(c, {
                    normalMap0: e.load(l.ap.Texture, Ie),
                    normalMap1: e.load(l.ap.Texture, ke),
                    scale: s,
                    flowDirection: new u.I9Y(n, o),
                    flowSpeed: i,
                    textureHeight: a,
                    textureWidth: a,
                    color: r,
                  });
                })(s)),
              (0, a.G_)(s) &&
                (p = (function (e) {
                  if ((0, a.s_)(e)) return new u.HiM();
                  if ((0, a.s9)(e)) return new u.ZyN();
                  if ((0, a._i)(e)) return new u.$p8();
                  if ((0, a.I$)(e)) {
                    const e = new u.B69(),
                      t = new u.nCl();
                    return (
                      t.add(e), e.position.set(0, -1, 0), (t.target = e), t
                    );
                  }
                  throw new Error("Light type is not supported!");
                })(s)),
              (0, a.V0)(s) &&
                (p = (function (e) {
                  const { geometry: t, materialId: n } = e;
                  if (!o.has(n))
                    throw new Error(`Material with uuid ${n} doesn't exist`);
                  const i = be(t),
                    r = new u.eaF();
                  return (r.geometry = i), (r.material = o.get(n)), r;
                })(s)),
              (0, a.Jv)(s) &&
                (p = (function (t) {
                  const { object: o } = t,
                    i = e.resourceManager.createResource(o);
                  switch (o.assetType) {
                    case l.ap.Gltf:
                    case l.ap.Obj:
                    case l.ap.FBX: {
                      const e = new u.YJl();
                      return (
                        i.assetInstance.then((o) => {
                          var i;
                          const { model: r, materials: s } = o;
                          (e.userData.originalMaps = s.map((e) => {
                            const t = e;
                            return {
                              alphaMap: t.alphaMap,
                              aoMap: t.aoMap,
                              envMap: t.envMap,
                              metalnessMap: t.metalnessMap,
                              map: t.map,
                              emissiveMap: t.emissiveMap,
                              normalMap: t.normalMap,
                              roughnessMap: t.roughnessMap,
                              displacementMap: t.displacementMap,
                            };
                          })),
                            e.add(r),
                            (null === (i = t.raycastConfig) || void 0 === i
                              ? void 0
                              : i.enabled) && je(e),
                            r
                              .getObjectsByProperty("isLight", !0)
                              .forEach((e) => {
                                e.removeFromParent();
                              }),
                            n(t);
                        }),
                        e
                      );
                    }
                    default:
                      throw Error(
                        `No imported object of this type ${o.assetType}`
                      );
                  }
                })(s)),
              (0, a.uQ)(s) && (p = new u.Z58()),
              (0, a.TK)(s) &&
                (p = (function (t) {
                  let n;
                  if (
                    ((0, a.hA)(t) &&
                      ((n = new u.ubm()),
                      (n.aspect = e.canvasSize.x / e.canvasSize.y)),
                    (0, a.$N)(t) && (n = new u.qUd()),
                    !n)
                  )
                    throw new Error("Camera type is not supported!");
                  const o = new Ae(n);
                  return (
                    n.updateProjectionMatrix(),
                    (n.userData.controls = t.controls),
                    o
                  );
                })(s)),
              !p)
            )
              throw new Error(`Object type <${s.type}> is not supported!`);
            const { name: h, uuid: m, visible: g = !0 } = s;
            (p.uuid = m),
              (p.visible = g),
              (p.userData = Object.assign(Object.assign({}, p.userData), {
                name: h,
                isPwObject: !0,
              })),
              (null === (f = s.raycastConfig) || void 0 === f
                ? void 0
                : f.enabled) && je(p);
            const y = c(p);
            i.set(s.uuid, y),
              n(s),
              d && r(s.uuid, d),
              (0, a.uQ)(s) && t(s.ambientLight, s.uuid),
              e.setWireframeOnObject(p);
          },
          setParentRelationship: r,
          deleteObject: function (e) {
            var n, o;
            const r = i.get(e);
            if (!r)
              throw new Error(`Cannot delete object that does not exist! ${e}`);
            null === (n = r.parent) || void 0 === n || n.remove(r),
              r.dispose && r.dispose(),
              r instanceof u.Z58 &&
                (null === (o = r.environment) || void 0 === o || o.dispose()),
              t.removeObjectAnimations(r.uuid),
              i.delete(e);
          },
          getObject: function (e) {
            return i.get(e);
          },
          getAllObjects: () => i,
        };
      }
      function je(e) {
        e.traverse((e) => {
          if (!(e instanceof u.eaF || e instanceof u.I46)) return;
          e.updateMatrixWorld(!0),
            e.geometry.computeBoundsTree(_e),
            e.layers.enable(l.X6.Raycast);
          e.userData = Object.assign(Object.assign({}, e.userData), {
            isCollider: !0,
          });
        });
      }
      var Ne = n(7615);
      function Le(e, t, n, o) {
        var i;
        const r = (function (e, t) {
            var n, o;
            const i = {};
            if (!e || !t) return i;
            const r = Object.values(Ne.SN);
            for (const s of r) {
              const r =
                null ===
                  (o =
                    null === (n = e.devices[s]) || void 0 === n
                      ? void 0
                      : n.canvases) || void 0 === o
                  ? void 0
                  : o[t];
              r && (i[s] = r.cameraId);
            }
            return i;
          })(e, null === (i = t.parentElement) || void 0 === i ? void 0 : i.id),
          s = n.find((e) => e === r.desktop) || o,
          a = n.find((e) => e === r.tablet) || s;
        return {
          [Ne.SN.Desktop]: s,
          [Ne.SN.Tablet]: a,
          [Ne.SN.Mobile]: n.find((e) => e === r.mobile) || a,
        };
      }
      function Be() {
        const e =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        return e < d.mq
          ? Ne.SN.Mobile
          : e < d.g4
          ? Ne.SN.Tablet
          : Ne.SN.Desktop;
      }
      function Fe(e, t, n, o, i, r) {
        var s, c, u;
        const { pwObjects: d, defaultCameraId: f } = t,
          p = Le(
            n,
            e,
            (function (e) {
              return e.filter((e) => (0, a.TK)(e)).map((e) => e.uuid);
            })(Array.from(d.values())),
            f
          );
        let h,
          m = o(f);
        m ||
          d.forEach((e) => {
            m || e.type !== l.lV.Camera || (m = o(e.uuid));
          });
        const g = {
            desktop:
              null === (s = o(p[Ne.SN.Desktop]) || o(p[r]) || m) || void 0 === s
                ? void 0
                : s.camera,
            tablet:
              null === (c = o(p[Ne.SN.Tablet]) || o(p[r]) || m) || void 0 === c
                ? void 0
                : c.camera,
            mobile:
              null === (u = o(p[Ne.SN.Mobile]) || o(p[r]) || m) || void 0 === u
                ? void 0
                : u.camera,
          },
          y = () => {
            const e = Be();
            if (h === e) return;
            h = e;
            const t = g[e];
            i.getActiveCamera() !== t && i.setActiveCamera(t);
          };
        y(), window.addEventListener("resize", y);
        return {
          dispose: () => {
            window.removeEventListener("resize", y);
          },
          updateResponsiveCanvasCamera: y,
        };
      }
      var Ue = n(3631);
      const Ve = "RESOLUTION_FACTOR",
        He = [60, 75, 90, 120, 144, 165, 240];
      function We(
        e,
        {
          iterations: t = 15,
          ms: n = 1e3,
          threshold: o = 0.75,
          flipflops: i = 1 / 0,
          bounds: r = (e) => (e > 100 ? [60, 100] : [40, 60]),
          minResolutionFactor: s = 0.2,
          memoizeResolutionFactor: a = !0,
        }
      ) {
        const c = {
          fps: 0,
          index: 0,
          flipped: 0,
          refreshrate: He[0],
          fallback: !1,
          frames: [],
          averages: [],
          subscriptions: new Map(),
          subscribe: (e) => {
            const t = Symbol();
            return (
              c.subscriptions.set(t, e.current),
              () => {
                c.subscriptions.delete(t);
              }
            );
          },
        };
        if ((e.addOnRenderCallback(l), a)) {
          const t = Number(window.localStorage.getItem(Ve));
          !Number.isNaN(t) && t > s && e.renderer.setPixelRatio(t);
        }
        function l() {
          const { frames: a, averages: l } = c;
          if (c.fallback) return;
          if (l.length >= t)
            return void (
              d.DS &&
              console.error(
                "PerformanceMonitorModule: averages.length >= iterations"
              )
            );
          a.push(performance.now());
          const p = a[a.length - 1] - a[0];
          if (p < n) return;
          if (
            ((c.fps = Math.round(1e3 / (p / a.length))),
            (c.frames = []),
            (l[c.index++ % t] = c.fps),
            l.length < t)
          )
            return;
          const [h, m] = r(c.refreshrate),
            g = l.filter((e) => e >= m),
            y = l.filter((e) => e < h),
            v = (0, Ue.i2)(h, m),
            w = (0, Ue.i2)(l);
          w > c.refreshrate &&
            (c.refreshrate = (function (e) {
              const t = He.findIndex((t) => t >= e);
              if (-1 === t) return He[He.length - 1];
              if (0 === t) return He[0];
              const n = He[t],
                o = He[t - 1];
              return Math.abs(o - e) >= Math.abs(n - e) || 1.1 * o <= e ? n : o;
            })(w));
          const b = Math.sqrt(w / v);
          g.length > t * o &&
            w > v &&
            (c.flipped++,
            (function (t) {
              if (t < 1)
                throw new Error(
                  "fpsDeltaFromTargetNorm should be greater than 1 when onIncline is called"
                );
              if (f() >= window.devicePixelRatio) return;
              const n = Math.min(
                window.devicePixelRatio,
                e.renderer.getPixelRatio() * t
              );
              u(n);
            })(b),
            c.subscriptions.forEach((e) => e.onIncline && e.onIncline(c))),
            y.length > t * o &&
              (c.flipped++,
              (function (t) {
                if (Math.sign(t) < 1)
                  throw new Error(
                    "fpsDeltaFromTargetNorm should less than 1 when onDecline is called"
                  );
                if (f() <= s) return;
                const n = Math.max(s, e.renderer.getPixelRatio() * t);
                u(n);
              })(b),
              c.subscriptions.forEach((e) => e.onDecline && e.onDecline(c))),
            c.flipped > i &&
              !c.fallback &&
              ((c.fallback = !0),
              c.subscriptions.forEach((e) => e.onFallback && e.onFallback(c)),
              d.DS &&
                console.warn(
                  "Auto-resolution system disabled: max flipflops reached"
                )),
            (c.averages = []);
        }
        function u(t) {
          e.renderer.setPixelRatio(t),
            a && window.localStorage.setItem(Ve, t.toString());
        }
        function f() {
          return e.renderer.getPixelRatio();
        }
        return {
          api: c,
          dispose: function () {
            e.removeOnRenderCallback(l);
          },
        };
      }
      let $e = !1;
      function ze(e, t, n = !1) {
        $e = n;
        const i = ae(e),
          r = fe(i),
          s = (function (e) {
            const { getActiveScene: t } = e,
              n = new u.Iw4(t()),
              o = new Map();
            function i(e, t) {
              var n;
              const { clipName: i, loop: r, speed: s } = t;
              if (!i) return;
              const a =
                null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(i);
              if (!a)
                throw Error(
                  `Animation with name ${i} and object id ${e} does not exist`
                );
              a.setLoop(r ? u.aMy : u.G3T, 1 / 0), a.reset(), (a.timeScale = s);
            }
            function r(e, t) {
              var i, r;
              const s =
                null === (i = o.get(e)) || void 0 === i ? void 0 : i.get(t);
              s &&
                ((s.enabled = !1),
                s.stop(),
                s.reset(),
                n.uncacheRoot(s.getRoot()),
                n.uncacheClip(s.getClip()),
                null === (r = o.get(e)) || void 0 === r || r.delete(t));
            }
            return {
              createAnimation: function (e, t, r, s) {
                const a = n.clipAction(r, e);
                return (
                  (a.clampWhenFinished = !0),
                  (a.blendMode = u.Ke9),
                  o.has(t) || o.set(t, new Map()),
                  o.get(t).set(r.name, a),
                  i(t, s),
                  a
                );
              },
              removeAnimation: r,
              removeObjectAnimations: function (e) {
                var t;
                null === (t = o.get(e)) ||
                  void 0 === t ||
                  t.forEach((t, n) => r(e, n));
              },
              updateAnimation: i,
              getAnimation: function (e, t) {
                var n;
                return null === (n = o.get(e)) || void 0 === n
                  ? void 0
                  : n.get(t);
              },
              update: function (e) {
                n.update(e);
              },
              dispose: function () {
                n.stopAllAction(), n.getRoot() && n.uncacheRoot(n.getRoot());
              },
            };
          })(i),
          c = ve(i);
        let d;
        if (!n && (null == t ? void 0 : t.isReductionEnabled)) {
          const {
              fpsThresholdAbsolute: e = 60,
              minResolution: n = 0.1,
              fpsThresholdMode: o,
            } = t || {},
            r = window.location !== window.parent.location,
            s = o === l.GI.Absolute ? e : 60;
          d = We(i, {
            memoizeResolutionFactor: !r,
            minResolutionFactor: 0.01 * (n || 100),
            flipflops: 8,
            threshold: 0.85,
            iterations: 5,
            ms: 1e3,
            bounds: (e) => {
              const t = Math.min(s, e);
              return [0.9 * t, 1.2 * t];
            },
          });
        }
        const {
            start: f,
            stop: p,
            eventDispatcher: h,
            addOnRenderCallback: m,
            removeOnRenderCallback: g,
            renderer: y,
            effects: v,
            setActiveCamera: w,
            setActiveScene: b,
            getActiveCamera: _,
            getActiveScene: S,
            setCameraPreview: E,
            setWireframe: P,
            setUsePostProcessing: O,
            createEffect: T,
            updateEffect: M,
            deleteEffect: x,
            getResource: R,
            resourceManager: A,
            showStatsPanel: C,
            hideStatsPanel: I,
            addAfterRenderCallback: k,
            attachToDOM: D,
            setRenderHelpers: j,
          } = i,
          {
            getMaterial: N,
            updateMaterial: L,
            createMaterial: B,
            deleteMaterial: F,
            replaceMaterial: U,
          } = c;
        m((e, t, n) => s.update(n));
        const {
            updateObject: V,
            createObject: H,
            getObject: W,
            getAllObjects: $,
            deleteObject: z,
            setParentRelationship: G,
          } = De(i, s),
          {
            getObjectIntersectionAtPointer: q,
            getObjectPositionOnScreen: X,
            getObjectsInScreenView: J,
          } = r,
          { getAnimation: Y } = s;
        function K(e, t, n) {
          const o = W(e);
          n.forEach((e) => L(e, void 0, !0));
          const i = (o) => {
            if (!o.userData.isPwObject || o.uuid === e) {
              if (o instanceof u.eaF || o instanceof u.ZLX)
                if (Array.isArray(o.material))
                  o.material.forEach((e, i) => {
                    const r = t.findIndex((t) => e.uuid === t);
                    -1 !== i && (o.material[i] = N(n[r].uuid));
                  });
                else {
                  const e = t.findIndex((e) => o.material.uuid === e);
                  -1 !== e && (o.material = N(n[e].uuid));
                }
              o.children.forEach(i);
            }
          };
          o && i(o);
        }
        const Z = (e, t) => (
          we(e) && !h.hasTypeListener(e) && r.addEventListener(e),
          h.addEventListener(e, t),
          () => {
            h.removeEventListener(e, t),
              we(e) && !h.hasTypeListener(e) && r.removeEventListener(e);
          }
        );
        return {
          renderer: y,
          effects: v,
          core: i,
          setActiveCamera: w,
          setActiveScene: b,
          getActiveCamera: _,
          getActiveScene: S,
          setCameraPreview: E,
          initializeClient: function (t, n, r) {
            const {
              pwObjects: s,
              pwMaterials: c,
              parents: u,
              usePostProcessing: d,
              effects: f,
            } = t;
            c.forEach((e) => B(e)),
              s.forEach((e) => H(e)),
              Array.from(u.entries()).forEach(([e, t]) => {
                G(e, t);
              }),
              Fe(e, t, n, W, i, r),
              s.forEach((e) => {
                i.getActiveScene() ||
                  e.type !== l.lV.Scene ||
                  i.setActiveScene(W(e.uuid));
              }),
              s.forEach((e) => {
                (0, a.Jv)(e) &&
                  e.materials &&
                  R(e.object.uuid).assetInstance.then((t) => {
                    var n;
                    e.materials &&
                      K(
                        e.uuid,
                        t.materials.map((e) => e.uuid),
                        null === (n = e.materials) || void 0 === n
                          ? void 0
                          : n.map((e) => c.get(e))
                      );
                  });
              });
            let p = !1;
            (d
              ? f
              : [...f.values()].filter((e) => ee.includes(e.type))
            ).forEach((e) => {
              e.enabled && ((p = p || e.enabled), T(e));
            }),
              O(p && d),
              Z(o.ResourcesLoaded, () => {
                i.getActiveScene().traverse((e) => {
                  e.frustumCulled = !1;
                });
                const e = i.canvasSize.x,
                  t = i.canvasSize.y;
                i.renderer.setSize(1, 1, !1),
                  i.render(),
                  i.getActiveScene().traverse((e) => {
                    e.frustumCulled = !0;
                  }),
                  i.renderer.setSize(e, t, !1),
                  i.start(),
                  h.dispatchEvent({ type: o.SceneReady }),
                  document.location.search.includes("debug") &&
                    C(document.body);
              }),
              A.checkIfResourceLoadingFinished();
          },
          listenTo: Z,
          start: f,
          stop: p,
          dispose: function () {
            i.dispose(),
              r.dispose(),
              s.dispose(),
              c.dispose(),
              null == d || d.dispose();
          },
          updateObject: V,
          getObject: W,
          getAllObjects: $,
          getResource: R,
          createEffect: T,
          updateEffect: M,
          deleteEffect: x,
          createObject: H,
          deleteObject: z,
          createMaterial: B,
          updateMaterial: L,
          deleteMaterial: F,
          replaceMaterial: U,
          replaceImportedMaterials: K,
          getImportedAnimation: Y,
          setParentRelationship: G,
          addOnRenderCallback: m,
          removeOnRenderCallback: g,
          getObjectIntersectionAtPointer: q,
          getObjectPositionOnScreen: X,
          setWireframe: P,
          setUsePostProcessing: O,
          getMaterial: N,
          showStatsPanel: C,
          hideStatsPanel: I,
          addAfterRenderCallback: k,
          getObjectsInScreenView: J,
          attachToDOM: D,
          setRenderHelpers: j,
        };
      }
    },
  },
]);

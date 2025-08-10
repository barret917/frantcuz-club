function $g(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Eu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ag(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Gf={exports:{}},Ns={},Xf={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),Lg=Symbol.for("react.portal"),Fg=Symbol.for("react.fragment"),Bg=Symbol.for("react.strict_mode"),Ug=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Vg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Gg=Symbol.for("react.memo"),Xg=Symbol.for("react.lazy"),Oc=Symbol.iterator;function Yg(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var Yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,Kf={};function $r(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Yf}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jf(){}Jf.prototype=$r.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Yf}var Pu=zu.prototype=new Jf;Pu.constructor=zu;Qf(Pu,$r.prototype);Pu.isPureReactComponent=!0;var Mc=Array.isArray,qf=Object.prototype.hasOwnProperty,Ru={current:null},ep={key:!0,ref:!0,__self:!0,__source:!0};function tp(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)qf.call(t,r)&&!ep.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Wo,type:e,key:i,ref:s,props:o,_owner:Ru.current}}function Qg(e,t){return{$$typeof:Wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wo}function Kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $c=/\/+/g;function ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kg(""+e.key):t.toString(36)}function Mi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Wo:case Lg:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ha(s,0):r,Mc(o)?(n="",e!=null&&(n=e.replace($c,"$&/")+"/"),Mi(o,t,n,"",function(c){return c})):o!=null&&(_u(o)&&(o=Qg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace($c,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Mc(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ha(i,a);s+=Mi(i,t,n,u,o)}else if(u=Yg(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ha(i,a++),s+=Mi(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ri(e,t,n){if(e==null)return e;var r=[],o=0;return Mi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Jg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},$i={transition:null},qg={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:$i,ReactCurrentOwner:Ru};function np(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=$r;F.Fragment=Fg;F.Profiler=Ug;F.PureComponent=zu;F.StrictMode=Bg;F.Suspense=Zg;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qg;F.act=np;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ru.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)qf.call(t,u)&&!ep.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Wo,type:e.type,key:o,ref:i,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:Hg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wg,_context:e},e.Consumer=e};F.createElement=tp;F.createFactory=function(e){var t=tp.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Vg,render:e}};F.isValidElement=_u;F.lazy=function(e){return{$$typeof:Xg,_payload:{_status:-1,_result:e},_init:Jg}};F.memo=function(e,t){return{$$typeof:Gg,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};F.unstable_act=np;F.useCallback=function(e,t){return De.current.useCallback(e,t)};F.useContext=function(e){return De.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return De.current.useDeferredValue(e)};F.useEffect=function(e,t){return De.current.useEffect(e,t)};F.useId=function(){return De.current.useId()};F.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return De.current.useMemo(e,t)};F.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};F.useRef=function(e){return De.current.useRef(e)};F.useState=function(e){return De.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return De.current.useTransition()};F.version="18.3.1";Xf.exports=F;var z=Xf.exports;const ze=Eu(z),e0=$g({__proto__:null,default:ze},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=z,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,i0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function rp(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)o0.call(t,r)&&!s0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:n0,type:e,key:i,ref:s,props:o,_owner:i0.current}}Ns.Fragment=r0;Ns.jsx=rp;Ns.jsxs=rp;Gf.exports=Ns;var l=Gf.exports,hl={},op={exports:{}},qe={},ip={exports:{}},sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var O=T.length;T.push(D);e:for(;0<O;){var V=O-1>>>1,Z=T[V];if(0<o(Z,D))T[V]=D,T[O]=Z,O=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],O=T.pop();if(O!==D){T[0]=O;e:for(var V=0,Z=T.length,wn=Z>>>1;V<wn;){var ut=2*(V+1)-1,Vt=T[ut],Ve=ut+1,Nt=T[Ve];if(0>o(Vt,O))Ve<Z&&0>o(Nt,Vt)?(T[V]=Nt,T[Ve]=O,V=Ve):(T[V]=Vt,T[ut]=O,V=ut);else if(Ve<Z&&0>o(Nt,O))T[V]=Nt,T[Ve]=O,V=Ve;else break e}}return D}function o(T,D){var O=T.sortIndex-D.sortIndex;return O!==0?O:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,m=3,x=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function S(T){if(w=!1,h(T),!y)if(n(u)!==null)y=!0,ve(j);else{var D=n(c);D!==null&&_e(S,D.startTime-T)}}function j(T,D){y=!1,w&&(w=!1,g(R),R=-1),x=!0;var O=m;try{for(h(D),p=n(u);p!==null&&(!(p.expirationTime>D)||T&&!M());){var V=p.callback;if(typeof V=="function"){p.callback=null,m=p.priorityLevel;var Z=V(p.expirationTime<=D);D=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),h(D)}else r(u);p=n(u)}if(p!==null)var wn=!0;else{var ut=n(c);ut!==null&&_e(S,ut.startTime-D),wn=!1}return wn}finally{p=null,m=O,x=!1}}var E=!1,C=null,R=-1,k=5,_=-1;function M(){return!(e.unstable_now()-_<k)}function $(){if(C!==null){var T=e.unstable_now();_=T;var D=!0;try{D=C(!0,T)}finally{D?B():(E=!1,C=null)}}else E=!1}var B;if(typeof f=="function")B=function(){f($)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,tt=Me.port2;Me.port1.onmessage=$,B=function(){tt.postMessage(null)}}else B=function(){b($,0)};function ve(T){C=T,E||(E=!0,B())}function _e(T,D){R=b(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,ve(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var O=m;m=D;try{return T()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return D()}finally{m=O}},e.unstable_scheduleCallback=function(T,D,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,T={id:d++,callback:D,priorityLevel:T,startTime:O,expirationTime:Z,sortIndex:-1},O>V?(T.sortIndex=O,t(c,T),n(u)===null&&T===n(c)&&(w?(g(R),R=-1):w=!0,_e(S,O-V))):(T.sortIndex=Z,t(u,T),y||x||(y=!0,ve(j))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var D=m;return function(){var O=m;m=D;try{return T.apply(this,arguments)}finally{m=O}}}})(sp);ip.exports=sp;var a0=ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=z,Je=a0;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ap=new Set,So={};function Hn(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(So[e]=t,e=0;e<t.length;e++)ap.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Lc={};function c0(e){return ml.call(Lc,e)?!0:ml.call(Ac,e)?!1:u0.test(e)?Lc[e]=!0:(Ac[e]=!0,!1)}function d0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,n,r){if(t===null||typeof t>"u"||d0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Iu,Tu);we[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Iu,Tu);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Iu,Tu);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nu(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,n,o,r)&&(n=null),r||o===null?c0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),or=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),up=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),cp=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ma;function io(e){if(ma===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ma=t&&t[1]||""}return`
`+ma+e}var ga=!1;function va(e,t){if(!e||ga)return"";ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?io(e):""}function p0(e){switch(e.tag){case 5:return io(e.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return e=va(e.type,!1),e;case 11:return e=va(e.type.render,!1),e;case 1:return e=va(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case or:return"Portal";case gl:return"Profiler";case Du:return"StrictMode";case vl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case up:return(e.displayName||"Context")+".Consumer";case lp:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mu:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function h0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m0(e){var t=dp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=m0(e))}function fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pp(e,t){t=t.checked,t!=null&&Nu(e,"checked",t,!1)}function Sl(e,t){pp(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var so=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(so(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function hp(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){g0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function vp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var v0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(v0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,xr=null,wr=null;function Vc(e){if(e=Zo(e)){if(typeof Pl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=As(t),Pl(e.stateNode,e.type,t))}}function xp(e){xr?wr?wr.push(e):wr=[e]:xr=e}function wp(){if(xr){var e=xr,t=wr;if(wr=xr=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function Sp(e,t){return e(t)}function bp(){}var ya=!1;function Cp(e,t,n){if(ya)return e(t,n);ya=!0;try{return Sp(e,t,n)}finally{ya=!1,(xr!==null||wr!==null)&&(bp(),wp())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Rl=!1;if(Ft)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Rl=!1}function y0(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var fo=!1,rs=null,os=!1,_l=null,x0={onError:function(e){fo=!0,rs=e}};function w0(e,t,n,r,o,i,s,a,u){fo=!1,rs=null,y0.apply(x0,arguments)}function S0(e,t,n,r,o,i,s,a,u){if(w0.apply(this,arguments),fo){if(fo){var c=rs;fo=!1,rs=null}else throw Error(I(198));os||(os=!0,_l=c)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(Vn(e)!==e)throw Error(I(188))}function b0(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zc(o),e;if(i===r)return Zc(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function kp(e){return e=b0(e),e!==null?Ep(e):null}function Ep(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ep(e);if(t!==null)return t;e=e.sibling}return null}var zp=Je.unstable_scheduleCallback,Gc=Je.unstable_cancelCallback,C0=Je.unstable_shouldYield,j0=Je.unstable_requestPaint,re=Je.unstable_now,k0=Je.unstable_getCurrentPriorityLevel,Au=Je.unstable_ImmediatePriority,Pp=Je.unstable_UserBlockingPriority,is=Je.unstable_NormalPriority,E0=Je.unstable_LowPriority,Rp=Je.unstable_IdlePriority,Ds=null,Rt=null;function z0(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:_0,P0=Math.log,R0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(P0(e)/R0|0)|0}var ai=64,li=4194304;function ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=ao(a):(i&=s,i!==0&&(r=ao(i)))}else s=n&~o,s!==0?r=ao(s):i!==0&&(r=ao(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function I0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-vt(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=I0(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _p(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function N0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tp,Fu,Np,Dp,Op,Tl=!1,ui=[],on=null,sn=null,an=null,jo=new Map,ko=new Map,qt=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function Gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zo(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function O0(e,t,n,r,o){switch(t){case"focusin":return on=Gr(on,e,t,n,r,o),!0;case"dragenter":return sn=Gr(sn,e,t,n,r,o),!0;case"mouseover":return an=Gr(an,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return jo.set(i,Gr(jo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ko.set(i,Gr(ko.get(i)||null,e,t,n,r,o)),!0}return!1}function Mp(e){var t=Rn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=jp(n),t!==null){e.blockedOn=t,Op(e.priority,function(){Np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=Zo(n),t!==null&&Fu(t),e.blockedOn=n,!1;t.shift()}return!0}function Yc(e,t,n){Ai(e)&&n.delete(t)}function M0(){Tl=!1,on!==null&&Ai(on)&&(on=null),sn!==null&&Ai(sn)&&(sn=null),an!==null&&Ai(an)&&(an=null),jo.forEach(Yc),ko.forEach(Yc)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,M0)))}function Eo(e){function t(o){return Xr(o,e)}if(0<ui.length){Xr(ui[0],e);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Xr(on,e),sn!==null&&Xr(sn,e),an!==null&&Xr(an,e),jo.forEach(t),ko.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Mp(n),n.blockedOn===null&&qt.shift()}var Sr=Ht.ReactCurrentBatchConfig,as=!0;function $0(e,t,n,r){var o=H,i=Sr.transition;Sr.transition=null;try{H=1,Bu(e,t,n,r)}finally{H=o,Sr.transition=i}}function A0(e,t,n,r){var o=H,i=Sr.transition;Sr.transition=null;try{H=4,Bu(e,t,n,r)}finally{H=o,Sr.transition=i}}function Bu(e,t,n,r){if(as){var o=Nl(e,t,n,r);if(o===null)Ra(e,t,r,ls,n),Xc(e,r);else if(O0(o,e,t,n,r))r.stopPropagation();else if(Xc(e,r),t&4&&-1<D0.indexOf(e)){for(;o!==null;){var i=Zo(o);if(i!==null&&Tp(i),i=Nl(e,t,n,r),i===null&&Ra(e,t,r,ls,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ra(e,t,r,null,n)}}var ls=null;function Nl(e,t,n,r){if(ls=null,e=$u(r),e=Rn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function $p(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case Au:return 1;case Pp:return 4;case is:case E0:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var tn=null,Uu=null,Li=null;function Ap(){if(Li)return Li;var e,t=Uu,n=t.length,r,o="value"in tn?tn.value:tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Li=o.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Qc(){return!1}function et(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ci:Qc,this.isPropagationStopped=Qc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=et(Ar),Vo=ee({},Ar,{view:0,detail:0}),L0=et(Vo),wa,Sa,Yr,Os=ee({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(wa=e.screenX-Yr.screenX,Sa=e.screenY-Yr.screenY):Sa=wa=0,Yr=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Kc=et(Os),F0=ee({},Os,{dataTransfer:0}),B0=et(F0),U0=ee({},Vo,{relatedTarget:0}),ba=et(U0),W0=ee({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=et(W0),V0=ee({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=et(V0),G0=ee({},Ar,{data:0}),Jc=et(G0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q0[e])?!!t[e]:!1}function Hu(){return K0}var J0=ee({},Vo,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q0=et(J0),ev=ee({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=et(ev),tv=ee({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),nv=et(tv),rv=ee({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=et(rv),iv=ee({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=et(iv),av=[9,13,27,32],Vu=Ft&&"CompositionEvent"in window,po=null;Ft&&"documentMode"in document&&(po=document.documentMode);var lv=Ft&&"TextEvent"in window&&!po,Lp=Ft&&(!Vu||po&&8<po&&11>=po),ed=" ",td=!1;function Fp(e,t){switch(e){case"keyup":return av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function uv(e,t){switch(e){case"compositionend":return Bp(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function cv(e,t){if(sr)return e==="compositionend"||!Vu&&Fp(e,t)?(e=Ap(),Li=Uu=tn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lp&&t.locale!=="ko"?null:t.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dv[e.type]:t==="textarea"}function Up(e,t,n,r){xp(r),t=us(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,zo=null;function fv(e){qp(e,0)}function Ms(e){var t=ur(e);if(fp(t))return e}function pv(e,t){if(e==="change")return t}var Wp=!1;if(Ft){var Ca;if(Ft){var ja="oninput"in document;if(!ja){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),ja=typeof rd.oninput=="function"}Ca=ja}else Ca=!1;Wp=Ca&&(!document.documentMode||9<document.documentMode)}function od(){ho&&(ho.detachEvent("onpropertychange",Hp),zo=ho=null)}function Hp(e){if(e.propertyName==="value"&&Ms(zo)){var t=[];Up(t,zo,e,$u(e)),Cp(fv,t)}}function hv(e,t,n){e==="focusin"?(od(),ho=t,zo=n,ho.attachEvent("onpropertychange",Hp)):e==="focusout"&&od()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ms(zo)}function gv(e,t){if(e==="click")return Ms(t)}function vv(e,t){if(e==="input"||e==="change")return Ms(t)}function yv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:yv;function Po(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ml.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zp(){for(var e=window,t=ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ns(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xv(e){var t=Zp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vp(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=sd(n,i);var s=sd(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wv=Ft&&"documentMode"in document&&11>=document.documentMode,ar=null,Dl=null,mo=null,Ol=!1;function ad(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||ar==null||ar!==ns(r)||(r=ar,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Po(mo,r)||(mo=r,r=us(Dl,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},ka={},Gp={};Ft&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function $s(e){if(ka[e])return ka[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gp)return ka[e]=t[n];return e}var Xp=$s("animationend"),Yp=$s("animationiteration"),Qp=$s("animationstart"),Kp=$s("transitionend"),Jp=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Jp.set(e,t),Hn(t,[e])}for(var Ea=0;Ea<ld.length;Ea++){var za=ld[Ea],Sv=za.toLowerCase(),bv=za[0].toUpperCase()+za.slice(1);vn(Sv,"on"+bv)}vn(Xp,"onAnimationEnd");vn(Yp,"onAnimationIteration");vn(Qp,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Kp,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S0(r,t,void 0,e),e.currentTarget=null}function qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;ud(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;ud(o,a,c),i=u}}}if(os)throw e=_l,os=!1,_l=null,e}function X(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(eh(t,e,2,!1),n.add(r))}function Pa(e,t,n){var r=0;t&&(r|=4),eh(n,e,r,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[fi]){e[fi]=!0,ap.forEach(function(n){n!=="selectionchange"&&(Cv.has(n)||Pa(n,!1,e),Pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,Pa("selectionchange",!1,t))}}function eh(e,t,n,r){switch($p(t)){case 1:var o=$0;break;case 4:o=A0;break;default:o=Bu}n=o.bind(null,t,n,e),o=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ra(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Cp(function(){var c=i,d=$u(n),p=[];e:{var m=Jp.get(e);if(m!==void 0){var x=Wu,y=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":x=q0;break;case"focusin":y="focus",x=ba;break;case"focusout":y="blur",x=ba;break;case"beforeblur":case"afterblur":x=ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=nv;break;case Xp:case Yp:case Qp:x=H0;break;case Kp:x=ov;break;case"scroll":x=L0;break;case"wheel":x=sv;break;case"copy":case"cut":case"paste":x=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=qc}var w=(t&4)!==0,b=!w&&e==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Co(f,g),S!=null&&w.push(_o(f,S,h)))),b)break;f=f.return}0<w.length&&(m=new x(m,y,null,n,d),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==zl&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Bt]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?Rn(y):null,y!==null&&(b=Vn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Kc,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=qc,S="onPointerLeave",g="onPointerEnter",f="pointer"),b=x==null?m:ur(x),h=y==null?m:ur(y),m=new w(S,f+"leave",x,n,d),m.target=b,m.relatedTarget=h,S=null,Rn(d)===c&&(w=new w(g,f+"enter",y,n,d),w.target=h,w.relatedTarget=b,S=w),b=S,x&&y)t:{for(w=x,g=y,f=0,h=w;h;h=Yn(h))f++;for(h=0,S=g;S;S=Yn(S))h++;for(;0<f-h;)w=Yn(w),f--;for(;0<h-f;)g=Yn(g),h--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=Yn(w),g=Yn(g)}w=null}else w=null;x!==null&&cd(p,m,x,w,!1),y!==null&&b!==null&&cd(p,b,y,w,!0)}}e:{if(m=c?ur(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=pv;else if(nd(m))if(Wp)j=vv;else{j=mv;var E=hv}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=gv);if(j&&(j=j(e,c))){Up(p,j,n,d);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(E=c?ur(c):window,e){case"focusin":(nd(E)||E.contentEditable==="true")&&(ar=E,Dl=c,mo=null);break;case"focusout":mo=Dl=ar=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,ad(p,n,d);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":ad(p,n,d)}var C;if(Vu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else sr?Fp(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Lp&&n.locale!=="ko"&&(sr||R!=="onCompositionStart"?R==="onCompositionEnd"&&sr&&(C=Ap()):(tn=d,Uu="value"in tn?tn.value:tn.textContent,sr=!0)),E=us(c,R),0<E.length&&(R=new Jc(R,e,null,n,d),p.push({event:R,listeners:E}),C?R.data=C:(C=Bp(n),C!==null&&(R.data=C)))),(C=lv?uv(e,n):cv(e,n))&&(c=us(c,"onBeforeInput"),0<c.length&&(d=new Jc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=C))}qp(p,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Co(e,n),i!=null&&r.unshift(_o(e,i,o)),i=Co(e,t),i!=null&&r.push(_o(e,i,o))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Co(n,i),u!=null&&s.unshift(_o(n,u,a))):o||(u=Co(n,i),u!=null&&s.push(_o(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(jv,`
`).replace(kv,"")}function pi(e,t,n){if(t=dd(t),dd(e)!==t&&n)throw Error(I(425))}function cs(){}var Ml=null,$l=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,zv=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(Pv)}:Ll;function Pv(e){setTimeout(function(){throw e})}function _a(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Eo(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Lr,Io="__reactProps$"+Lr,Bt="__reactContainer$"+Lr,Fl="__reactEvents$"+Lr,Rv="__reactListeners$"+Lr,_v="__reactHandles$"+Lr;function Rn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pd(e);e!==null;){if(n=e[Pt])return n;e=pd(e)}return t}e=n,n=e.parentNode}return null}function Zo(e){return e=e[Pt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function As(e){return e[Io]||null}var Bl=[],cr=-1;function yn(e){return{current:e}}function Q(e){0>cr||(e.current=Bl[cr],Bl[cr]=null,cr--)}function G(e,t){cr++,Bl[cr]=e.current,e.current=t}var gn={},Re=yn(gn),Fe=yn(!1),An=gn;function kr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function ds(){Q(Fe),Q(Re)}function hd(e,t,n){if(Re.current!==gn)throw Error(I(168));G(Re,t),G(Fe,n)}function th(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,h0(e)||"Unknown",o));return ee({},n,r)}function fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,An=Re.current,G(Re,e),G(Fe,Fe.current),!0}function md(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=th(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,Q(Fe),Q(Re),G(Re,e)):Q(Fe),G(Fe,n)}var Mt=null,Ls=!1,Ia=!1;function nh(e){Mt===null?Mt=[e]:Mt.push(e)}function Iv(e){Ls=!0,nh(e)}function xn(){if(!Ia&&Mt!==null){Ia=!0;var e=0,t=H;try{var n=Mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Ls=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),zp(Au,xn),o}finally{H=t,Ia=!1}}return null}var dr=[],fr=0,ps=null,hs=0,nt=[],rt=0,Ln=null,$t=1,At="";function zn(e,t){dr[fr++]=hs,dr[fr++]=ps,ps=e,hs=t}function rh(e,t,n){nt[rt++]=$t,nt[rt++]=At,nt[rt++]=Ln,Ln=e;var r=$t;e=At;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,$t=1<<32-vt(t)+o|n<<o|r,At=i+e}else $t=1<<i|n<<o|r,At=e}function Gu(e){e.return!==null&&(zn(e,1),rh(e,1,0))}function Xu(e){for(;e===ps;)ps=dr[--fr],dr[fr]=null,hs=dr[--fr],dr[fr]=null;for(;e===Ln;)Ln=nt[--rt],nt[rt]=null,At=nt[--rt],nt[rt]=null,$t=nt[--rt],nt[rt]=null}var Qe=null,Ye=null,K=!1,gt=null;function oh(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:$t,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ye=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(K){var t=Ye;if(t){var n=t;if(!gd(e,t)){if(Ul(e))throw Error(I(418));t=ln(n.nextSibling);var r=Qe;t&&gd(e,t)?oh(r,n):(e.flags=e.flags&-4097|2,K=!1,Qe=e)}}else{if(Ul(e))throw Error(I(418));e.flags=e.flags&-4097|2,K=!1,Qe=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function hi(e){if(e!==Qe)return!1;if(!K)return vd(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ul(e))throw ih(),Error(I(418));for(;t;)oh(e,t),t=ln(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Qe?ln(e.stateNode.nextSibling):null;return!0}function ih(){for(var e=Ye;e;)e=ln(e.nextSibling)}function Er(){Ye=Qe=null,K=!1}function Yu(e){gt===null?gt=[e]:gt.push(e)}var Tv=Ht.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function sh(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=fn(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,f,h,S){return f===null||f.tag!==6?(f=Aa(h,g.mode,S),f.return=g,f):(f=o(f,h),f.return=g,f)}function u(g,f,h,S){var j=h.type;return j===ir?d(g,f,h.props.children,S,h.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kt&&yd(j)===f.type)?(S=o(f,h.props),S.ref=Qr(g,f,h),S.return=g,S):(S=Gi(h.type,h.key,h.props,null,g.mode,S),S.ref=Qr(g,f,h),S.return=g,S)}function c(g,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=La(h,g.mode,S),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function d(g,f,h,S,j){return f===null||f.tag!==7?(f=On(h,g.mode,S,j),f.return=g,f):(f=o(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Aa(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:return h=Gi(f.type,f.key,f.props,null,g.mode,h),h.ref=Qr(g,null,f),h.return=g,h;case or:return f=La(f,g.mode,h),f.return=g,f;case Kt:var S=f._init;return p(g,S(f._payload),h)}if(so(f)||Vr(f))return f=On(f,g.mode,h,null),f.return=g,f;mi(g,f)}return null}function m(g,f,h,S){var j=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:a(g,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:return h.key===j?u(g,f,h,S):null;case or:return h.key===j?c(g,f,h,S):null;case Kt:return j=h._init,m(g,f,j(h._payload),S)}if(so(h)||Vr(h))return j!==null?null:d(g,f,h,S,null);mi(g,h)}return null}function x(g,f,h,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,a(f,g,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oi:return g=g.get(S.key===null?h:S.key)||null,u(f,g,S,j);case or:return g=g.get(S.key===null?h:S.key)||null,c(f,g,S,j);case Kt:var E=S._init;return x(g,f,h,E(S._payload),j)}if(so(S)||Vr(S))return g=g.get(h)||null,d(f,g,S,j,null);mi(f,S)}return null}function y(g,f,h,S){for(var j=null,E=null,C=f,R=f=0,k=null;C!==null&&R<h.length;R++){C.index>R?(k=C,C=null):k=C.sibling;var _=m(g,C,h[R],S);if(_===null){C===null&&(C=k);break}e&&C&&_.alternate===null&&t(g,C),f=i(_,f,R),E===null?j=_:E.sibling=_,E=_,C=k}if(R===h.length)return n(g,C),K&&zn(g,R),j;if(C===null){for(;R<h.length;R++)C=p(g,h[R],S),C!==null&&(f=i(C,f,R),E===null?j=C:E.sibling=C,E=C);return K&&zn(g,R),j}for(C=r(g,C);R<h.length;R++)k=x(C,g,R,h[R],S),k!==null&&(e&&k.alternate!==null&&C.delete(k.key===null?R:k.key),f=i(k,f,R),E===null?j=k:E.sibling=k,E=k);return e&&C.forEach(function(M){return t(g,M)}),K&&zn(g,R),j}function w(g,f,h,S){var j=Vr(h);if(typeof j!="function")throw Error(I(150));if(h=j.call(h),h==null)throw Error(I(151));for(var E=j=null,C=f,R=f=0,k=null,_=h.next();C!==null&&!_.done;R++,_=h.next()){C.index>R?(k=C,C=null):k=C.sibling;var M=m(g,C,_.value,S);if(M===null){C===null&&(C=k);break}e&&C&&M.alternate===null&&t(g,C),f=i(M,f,R),E===null?j=M:E.sibling=M,E=M,C=k}if(_.done)return n(g,C),K&&zn(g,R),j;if(C===null){for(;!_.done;R++,_=h.next())_=p(g,_.value,S),_!==null&&(f=i(_,f,R),E===null?j=_:E.sibling=_,E=_);return K&&zn(g,R),j}for(C=r(g,C);!_.done;R++,_=h.next())_=x(C,g,R,_.value,S),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?R:_.key),f=i(_,f,R),E===null?j=_:E.sibling=_,E=_);return e&&C.forEach(function($){return t(g,$)}),K&&zn(g,R),j}function b(g,f,h,S){if(typeof h=="object"&&h!==null&&h.type===ir&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:e:{for(var j=h.key,E=f;E!==null;){if(E.key===j){if(j=h.type,j===ir){if(E.tag===7){n(g,E.sibling),f=o(E,h.props.children),f.return=g,g=f;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kt&&yd(j)===E.type){n(g,E.sibling),f=o(E,h.props),f.ref=Qr(g,E,h),f.return=g,g=f;break e}n(g,E);break}else t(g,E);E=E.sibling}h.type===ir?(f=On(h.props.children,g.mode,S,h.key),f.return=g,g=f):(S=Gi(h.type,h.key,h.props,null,g.mode,S),S.ref=Qr(g,f,h),S.return=g,g=S)}return s(g);case or:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=La(h,g.mode,S),f.return=g,g=f}return s(g);case Kt:return E=h._init,b(g,f,E(h._payload),S)}if(so(h))return y(g,f,h,S);if(Vr(h))return w(g,f,h,S);mi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=o(f,h),f.return=g,g=f):(n(g,f),f=Aa(h,g.mode,S),f.return=g,g=f),s(g)):n(g,f)}return b}var zr=sh(!0),ah=sh(!1),ms=yn(null),gs=null,pr=null,Qu=null;function Ku(){Qu=pr=gs=null}function Ju(e){var t=ms.current;Q(ms),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function br(e,t){gs=e,Qu=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Qu!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(gs===null)throw Error(I(308));pr=e,gs.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var _n=null;function qu(e){_n===null?_n=[e]:_n.push(e)}function lh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,qu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,qu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}function xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var o=e.updateQueue;Jt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;s=0,d=c=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(m=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(x,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(x,p,m):y,m==null)break e;p=ee({},p,m);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,u=p):d=d.next=x,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=p}}function wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var Go={},_t=yn(Go),To=yn(Go),No=yn(Go);function In(e){if(e===Go)throw Error(I(174));return e}function tc(e,t){switch(G(No,t),G(To,e),G(_t,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}Q(_t),G(_t,t)}function Pr(){Q(_t),Q(To),Q(No)}function ch(e){In(No.current);var t=In(_t.current),n=jl(t,e.type);t!==n&&(G(To,e),G(_t,n))}function nc(e){To.current===e&&(Q(_t),Q(To))}var J=yn(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function rc(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var Ui=Ht.ReactCurrentDispatcher,Na=Ht.ReactCurrentBatchConfig,Fn=0,q=null,de=null,he=null,xs=!1,go=!1,Do=0,Nv=0;function Se(){throw Error(I(321))}function oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function ic(e,t,n,r,o,i){if(Fn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?$v:Av,e=n(r,o),go){i=0;do{if(go=!1,Do=0,25<=i)throw Error(I(301));i+=1,he=de=null,t.updateQueue=null,Ui.current=Lv,e=n(r,o)}while(go)}if(Ui.current=ws,t=de!==null&&de.next!==null,Fn=0,he=de=q=null,xs=!1,t)throw Error(I(300));return e}function sc(){var e=Do!==0;return Do=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?q.memoizedState=he=e:he=he.next=e,he}function at(){if(de===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?q.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(I(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?q.memoizedState=he=e:he=he.next=e}return he}function Oo(e,t){return typeof t=="function"?t(e):t}function Da(e){var t=at(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var d=c.lane;if((Fn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,q.lanes|=d,Bn|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,wt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,Bn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oa(e){var t=at(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);wt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function dh(){}function fh(e,t){var n=q,r=at(),o=t(),i=!wt(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,ac(mh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Mo(9,hh.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(I(349));Fn&30||ph(n,t,o)}return o}function ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hh(e,t,n,r){t.value=n,t.getSnapshot=r,gh(t)&&vh(e)}function mh(e,t,n){return n(function(){gh(t)&&vh(e)})}function gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function vh(e){var t=Ut(e,1);t!==null&&yt(t,e,1,-1)}function Sd(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=Mv.bind(null,q,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yh(){return at().memoizedState}function Wi(e,t,n,r){var o=kt();q.flags|=e,o.memoizedState=Mo(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(de!==null){var s=de.memoizedState;if(i=s.destroy,r!==null&&oc(r,s.deps)){o.memoizedState=Mo(t,n,i,r);return}}q.flags|=e,o.memoizedState=Mo(1|t,n,i,r)}function bd(e,t){return Wi(8390656,8,e,t)}function ac(e,t){return Fs(2048,8,e,t)}function xh(e,t){return Fs(4,2,e,t)}function wh(e,t){return Fs(4,4,e,t)}function Sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bh(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,4,Sh.bind(null,t,e),n)}function lc(){}function Ch(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kh(e,t,n){return Fn&21?(wt(n,t)||(n=_p(),q.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function Dv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Na.transition;Na.transition={};try{e(!1),t()}finally{H=n,Na.transition=r}}function Eh(){return at().memoizedState}function Ov(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e))Ph(t,n);else if(n=lh(e,t,n,r),n!==null){var o=Ne();yt(n,e,r,o),Rh(n,t,r)}}function Mv(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))Ph(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,wt(a,s)){var u=t.interleaved;u===null?(o.next=o,qu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=lh(e,t,o,r),n!==null&&(o=Ne(),yt(n,e,r,o),Rh(n,t,r))}}function zh(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ph(e,t){go=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}var ws={readContext:st,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},$v={readContext:st,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,Sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ov.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Sd,useDebugValue:lc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Sd(!1),t=e[0];return e=Dv.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=kt();if(K){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ge===null)throw Error(I(349));Fn&30||ph(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,bd(mh.bind(null,r,i,e),[e]),r.flags|=2048,Mo(9,hh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=ge.identifierPrefix;if(K){var n=At,r=$t;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Av={readContext:st,useCallback:Ch,useContext:st,useEffect:ac,useImperativeHandle:bh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:jh,useReducer:Da,useRef:yh,useState:function(){return Da(Oo)},useDebugValue:lc,useDeferredValue:function(e){var t=at();return kh(t,de.memoizedState,e)},useTransition:function(){var e=Da(Oo)[0],t=at().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Eh,unstable_isNewReconciler:!1},Lv={readContext:st,useCallback:Ch,useContext:st,useEffect:ac,useImperativeHandle:bh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:jh,useReducer:Oa,useRef:yh,useState:function(){return Oa(Oo)},useDebugValue:lc,useDeferredValue:function(e){var t=at();return de===null?t.memoizedState=e:kh(t,de.memoizedState,e)},useTransition:function(){var e=Oa(Oo)[0],t=at().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Eh,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=dn(e),i=Lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(yt(t,e,o,r),Bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=dn(e),i=Lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(yt(t,e,o,r),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=dn(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(yt(t,e,r,n),Bi(t,e,r))}};function Cd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Po(n,r)||!Po(o,i):!0}function _h(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=Be(t)?An:Re.current,r=t.contextTypes,i=(r=r!=null)?kr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ec(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=Be(t)?An:Re.current,o.context=kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Bs.enqueueReplaceState(o,o.state,null),vs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=p0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fv=typeof WeakMap=="function"?WeakMap:Map;function Ih(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bs||(bs=!0,ru=r),Gl(e,t)},n}function Th(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ey.bind(null,e,t,n),t.then(e,e))}function Ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var Bv=Ht.ReactCurrentOwner,Le=!1;function Te(e,t,n,r){t.child=e===null?ah(t,null,n,r):zr(t,e.child,n,r)}function Pd(e,t,n,r,o){n=n.render;var i=t.ref;return br(t,o),r=ic(e,t,n,r,i,o),n=sc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(K&&n&&Gu(t),t.flags|=1,Te(e,t,r,o),t.child)}function Rd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nh(e,t,i,r,o)):(e=Gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(s,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Po(i,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Xl(e,t,n,r,o)}function Dh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(mr,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(mr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(mr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(mr,Xe),Xe|=r;return Te(e,t,o,n),t.child}function Oh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,r,o){var i=Be(n)?An:Re.current;return i=kr(t,i),br(t,o),n=ic(e,t,n,r,i,o),r=sc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(K&&r&&Gu(t),t.flags|=1,Te(e,t,n,o),t.child)}function _d(e,t,n,r,o){if(Be(n)){var i=!0;fs(t)}else i=!1;if(br(t,o),t.stateNode===null)Hi(e,t),_h(t,n,r),Zl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=Be(n)?An:Re.current,c=kr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&jd(t,s,r,c),Jt=!1;var m=t.memoizedState;s.state=m,vs(t,r,s,o),u=t.memoizedState,a!==r||m!==u||Fe.current||Jt?(typeof d=="function"&&(Vl(t,n,d,r),u=t.memoizedState),(a=Jt||Cd(t,n,a,r,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,uh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ht(t.type,a),s.props=c,p=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=st(u):(u=Be(n)?An:Re.current,u=kr(t,u));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==u)&&jd(t,s,r,u),Jt=!1,m=t.memoizedState,s.state=m,vs(t,r,s,o);var y=t.memoizedState;a!==p||m!==y||Fe.current||Jt?(typeof x=="function"&&(Vl(t,n,x,r),y=t.memoizedState),(c=Jt||Cd(t,n,c,r,m,y,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,i,o)}function Yl(e,t,n,r,o,i){Oh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&md(t,n,!1),Wt(e,t,i);r=t.stateNode,Bv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=zr(t,e.child,null,i),t.child=zr(t,null,a,i)):Te(e,t,a,i),t.memoizedState=r.state,o&&md(t,n,!0),t.child}function Mh(e){var t=e.stateNode;t.pendingContext?hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hd(e,t.context,!1),tc(e,t.containerInfo)}function Id(e,t,n,r,o){return Er(),Yu(o),t.flags|=256,Te(e,t,n,r),t.child}var Ql={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function $h(e,t,n){var r=t.pendingProps,o=J.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(J,o&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Hs(s,r,0,null),e=On(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Kl(n),t.memoizedState=Ql,e):uc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Uv(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=fn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=fn(a,i):(i=On(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Kl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ql,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uc(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&Yu(r),zr(t,e.child,null,n),e=uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ma(Error(I(422))),gi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Hs({mode:"visible",children:r.children},o,0,null),i=On(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&zr(t,e.child,null,s),t.child.memoizedState=Kl(s),t.memoizedState=Ql,i);if(!(t.mode&1))return gi(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(I(419)),r=Ma(i,r,void 0),gi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Le||a){if(r=ge,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),yt(r,e,o,-1))}return mc(),r=Ma(Error(I(421))),gi(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ty.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ye=ln(o.nextSibling),Qe=t,K=!0,gt=null,e!==null&&(nt[rt++]=$t,nt[rt++]=At,nt[rt++]=Ln,$t=e.id,At=e.overflow,Ln=t),t=uc(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function $a(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ah(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$a(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ys(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$a(t,!0,n,null,i);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wv(e,t,n){switch(t.tag){case 3:Mh(t),Er();break;case 5:ch(t);break;case 1:Be(t.type)&&fs(t);break;case 4:tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(ms,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?$h(e,t,n):(G(J,J.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ah(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Dh(e,t,n)}return Wt(e,t,n)}var Lh,Jl,Fh,Bh;Lh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jl=function(){};Fh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(_t.current);var i=null;switch(n){case"input":o=wl(e,o),r=wl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=Cl(e,o),r=Cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cs)}kl(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hv(e,t,n){var r=t.pendingProps;switch(Xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Be(t.type)&&ds(),be(t),null;case 3:return r=t.stateNode,Pr(),Q(Fe),Q(Re),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(su(gt),gt=null))),Jl(e,t),be(t),null;case 5:nc(t);var o=In(No.current);if(n=t.type,e!==null&&t.stateNode!=null)Fh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return be(t),null}if(e=In(_t.current),hi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[Io]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<lo.length;o++)X(lo[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Bc(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":Wc(r,i),X("invalid",r)}kl(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&pi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&pi(r.textContent,a,e),o=["children",""+a]):So.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":ii(r),Uc(r,i,!0);break;case"textarea":ii(r),Hc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[Io]=r,Lh(e,t,!1,!1),t.stateNode=e;e:{switch(s=El(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<lo.length;o++)X(lo[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":Bc(e,r),o=wl(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),X("invalid",e);break;case"textarea":Wc(e,r),o=Cl(e,r),X("invalid",e);break;default:o=r}kl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?yp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gp(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(e,u):typeof u=="number"&&bo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(So.hasOwnProperty(i)?u!=null&&i==="onScroll"&&X("scroll",e):u!=null&&Nu(e,i,u,s))}switch(n){case"input":ii(e),Uc(e,r,!1);break;case"textarea":ii(e),Hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yr(e,!!r.multiple,i,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=In(No.current),In(_t.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return be(t),null;case 13:if(Q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ye!==null&&t.mode&1&&!(t.flags&128))ih(),Er(),t.flags|=98560,i=!1;else if(i=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Pt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else gt!==null&&(su(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?pe===0&&(pe=3):mc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Pr(),Jl(e,t),e===null&&Ro(t.stateNode.containerInfo),be(t),null;case 10:return Ju(t.type._context),be(t),null;case 17:return Be(t.type)&&ds(),be(t),null;case 19:if(Q(J),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Kr(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,Kr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>_r&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ys(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!K)return be(t),null}else 2*re()-i.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Vv(e,t){switch(Xu(t),t.tag){case 1:return Be(t.type)&&ds(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),Q(Fe),Q(Re),rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if(Q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(J),null;case 4:return Pr(),null;case 10:return Ju(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var vi=!1,ke=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,N=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){te(e,t,r)}}var Nd=!1;function Gv(e,t){if(Ml=as,e=Zp(),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(a=s+o),p!==i||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++c===o&&(a=s),m===i&&++d===r&&(u=s),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},as=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),b);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=Nd,Nd=!1,y}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ql(t,n,i)}o=o.next}while(o!==r)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uh(e){var t=e.alternate;t!==null&&(e.alternate=null,Uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Io],delete t[Fl],delete t[Rv],delete t[_v])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wh(e){return e.tag===5||e.tag===3||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cs));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var ye=null,mt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Hh(e,t,n),n=n.sibling}function Hh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ds,n)}catch{}switch(n.tag){case 5:ke||hr(n,t);case 6:var r=ye,o=mt;ye=null,Gt(e,t,n),ye=r,mt=o,ye!==null&&(mt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(mt?(e=ye,n=n.stateNode,e.nodeType===8?_a(e.parentNode,n):e.nodeType===1&&_a(e,n),Eo(e)):_a(ye,n.stateNode));break;case 4:r=ye,o=mt,ye=n.stateNode.containerInfo,mt=!0,Gt(e,t,n),ye=r,mt=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ql(n,t,s),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!ke&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Gt(e,t,n),ke=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zv),t.forEach(function(r){var o=ny.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,mt=!1;break e;case 3:ye=a.stateNode.containerInfo,mt=!0;break e;case 4:ye=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(ye===null)throw Error(I(160));Hh(i,s,o),ye=null,mt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vh(t,e),t=t.sibling}function Vh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),Ct(e),r&4){try{vo(3,e,e.return),Us(3,e)}catch(w){te(e,e.return,w)}try{vo(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:ct(t,e),Ct(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(ct(t,e),Ct(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var o=e.stateNode;try{bo(o,"")}catch(w){te(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&pp(o,i),El(a,s);var c=El(a,i);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?yp(o,p):d==="dangerouslySetInnerHTML"?gp(o,p):d==="children"?bo(o,p):Nu(o,d,p,c)}switch(a){case"input":Sl(o,i);break;case"textarea":hp(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?yr(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?yr(o,!!i.multiple,i.defaultValue,!0):yr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Io]=i}catch(w){te(e,e.return,w)}}break;case 6:if(ct(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){te(e,e.return,w)}}break;case 3:if(ct(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:ct(t,e),Ct(e);break;case 13:ct(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fc=re())),r&4&&Od(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||d,ct(t,e),ke=c):ct(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(p=N=d;N!==null;){switch(m=N,x=m.child,m.tag){case 0:case 11:case 14:case 15:vo(4,m,m.return);break;case 1:hr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:hr(m,m.return);break;case 22:if(m.memoizedState!==null){$d(p);continue}}x!==null?(x.return=m,N=x):$d(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=vp("display",s))}catch(w){te(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){te(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),Ct(e),r&4&&Od(e);break;case 21:break;default:ct(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(bo(o,""),r.flags&=-33);var i=Dd(e);nu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Dd(e);tu(e,a,s);break;default:throw Error(I(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xv(e,t,n){N=e,Zh(e)}function Zh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||vi;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ke;a=vi;var c=ke;if(vi=s,(ke=u)&&!c)for(N=o;N!==null;)s=N,u=s.child,s.tag===22&&s.memoizedState!==null?Ad(o):u!==null?(u.return=s,N=u):Ad(o);for(;i!==null;)N=i,Zh(i),i=i.sibling;N=o,vi=a,ke=c}Md(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Md(e)}}function Md(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wd(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Eo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ke||t.flags&512&&eu(t)}catch(m){te(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function $d(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ad(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Us(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){te(t,o,u)}}var i=t.return;try{eu(t)}catch(u){te(t,i,u)}break;case 5:var s=t.return;try{eu(t)}catch(u){te(t,s,u)}}}catch(u){te(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Yv=Math.ceil,Ss=Ht.ReactCurrentDispatcher,cc=Ht.ReactCurrentOwner,it=Ht.ReactCurrentBatchConfig,U=0,ge=null,le=null,xe=0,Xe=0,mr=yn(0),pe=0,$o=null,Bn=0,Ws=0,dc=0,yo=null,Ae=null,fc=0,_r=1/0,Dt=null,bs=!1,ru=null,cn=null,yi=!1,nn=null,Cs=0,xo=0,ou=null,Vi=-1,Zi=0;function Ne(){return U&6?re():Vi!==-1?Vi:Vi=re()}function dn(e){return e.mode&1?U&2&&xe!==0?xe&-xe:Tv.transition!==null?(Zi===0&&(Zi=_p()),Zi):(e=H,e!==0||(e=window.event,e=e===void 0?16:$p(e.type)),e):1}function yt(e,t,n,r){if(50<xo)throw xo=0,ou=null,Error(I(185));Ho(e,n,r),(!(U&2)||e!==ge)&&(e===ge&&(!(U&2)&&(Ws|=n),pe===4&&en(e,xe)),Ue(e,r),n===1&&U===0&&!(t.mode&1)&&(_r=re()+500,Ls&&xn()))}function Ue(e,t){var n=e.callbackNode;T0(e,t);var r=ss(e,e===ge?xe:0);if(r===0)n!==null&&Gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gc(n),t===1)e.tag===0?Iv(Ld.bind(null,e)):nh(Ld.bind(null,e)),zv(function(){!(U&6)&&xn()}),n=null;else{switch(Ip(r)){case 1:n=Au;break;case 4:n=Pp;break;case 16:n=is;break;case 536870912:n=Rp;break;default:n=is}n=em(n,Gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gh(e,t){if(Vi=-1,Zi=0,U&6)throw Error(I(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=ss(e,e===ge?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=js(e,r);else{t=r;var o=U;U|=2;var i=Yh();(ge!==e||xe!==t)&&(Dt=null,_r=re()+500,Dn(e,t));do try{Jv();break}catch(a){Xh(e,a)}while(!0);Ku(),Ss.current=i,U=o,le!==null?t=0:(ge=null,xe=0,t=pe)}if(t!==0){if(t===2&&(o=Il(e),o!==0&&(r=o,t=iu(e,o))),t===1)throw n=$o,Dn(e,0),en(e,r),Ue(e,re()),n;if(t===6)en(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qv(o)&&(t=js(e,r),t===2&&(i=Il(e),i!==0&&(r=i,t=iu(e,i))),t===1))throw n=$o,Dn(e,0),en(e,r),Ue(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Pn(e,Ae,Dt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=fc+500-re(),10<t)){if(ss(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ll(Pn.bind(null,e,Ae,Dt),t);break}Pn(e,Ae,Dt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-vt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yv(r/1960))-r,10<r){e.timeoutHandle=Ll(Pn.bind(null,e,Ae,Dt),r);break}Pn(e,Ae,Dt);break;case 5:Pn(e,Ae,Dt);break;default:throw Error(I(329))}}}return Ue(e,re()),e.callbackNode===n?Gh.bind(null,e):null}function iu(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=js(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&su(t)),e}function su(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Qv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!wt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~dc,t&=~Ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(U&6)throw Error(I(327));Cr();var t=ss(e,0);if(!(t&1))return Ue(e,re()),null;var n=js(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=$o,Dn(e,0),en(e,t),Ue(e,re()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ae,Dt),Ue(e,re()),null}function pc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(_r=re()+500,Ls&&xn())}}function Un(e){nn!==null&&nn.tag===0&&!(U&6)&&Cr();var t=U;U|=1;var n=it.transition,r=H;try{if(it.transition=null,H=1,e)return e()}finally{H=r,it.transition=n,U=t,!(U&6)&&xn()}}function hc(){Xe=mr.current,Q(mr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ev(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ds();break;case 3:Pr(),Q(Fe),Q(Re),rc();break;case 5:nc(r);break;case 4:Pr();break;case 13:Q(J);break;case 19:Q(J);break;case 10:Ju(r.type._context);break;case 22:case 23:hc()}n=n.return}if(ge=e,le=e=fn(e.current,null),xe=Xe=t,pe=0,$o=null,dc=Ws=Bn=0,Ae=yo=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}_n=null}return e}function Xh(e,t){do{var n=le;try{if(Ku(),Ui.current=ws,xs){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xs=!1}if(Fn=0,he=de=q=null,go=!1,Do=0,cc.current=null,n===null||n.return===null){pe=1,$o=t,le=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=xe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Ed(s);if(x!==null){x.flags&=-257,zd(x,s,a,i,t),x.mode&1&&kd(i,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){kd(i,c,t),mc();break e}u=Error(I(426))}}else if(K&&a.mode&1){var b=Ed(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),zd(b,s,a,i,t),Yu(Rr(u,a));break e}}i=u=Rr(u,a),pe!==4&&(pe=2),yo===null?yo=[i]:yo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ih(i,u,t);xd(i,g);break e;case 1:a=u;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cn===null||!cn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Th(i,a,t);xd(i,S);break e}}i=i.return}while(i!==null)}Kh(n)}catch(j){t=j,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Yh(){var e=Ss.current;return Ss.current=ws,e===null?ws:e}function mc(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(Bn&268435455)&&!(Ws&268435455)||en(ge,xe)}function js(e,t){var n=U;U|=2;var r=Yh();(ge!==e||xe!==t)&&(Dt=null,Dn(e,t));do try{Kv();break}catch(o){Xh(e,o)}while(!0);if(Ku(),U=n,Ss.current=r,le!==null)throw Error(I(261));return ge=null,xe=0,pe}function Kv(){for(;le!==null;)Qh(le)}function Jv(){for(;le!==null&&!C0();)Qh(le)}function Qh(e){var t=qh(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Kh(e):le=t,cc.current=null}function Kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vv(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,le=null;return}}else if(n=Hv(n,t,Xe),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);pe===0&&(pe=5)}function Pn(e,t,n){var r=H,o=it.transition;try{it.transition=null,H=1,qv(e,t,n,r)}finally{it.transition=o,H=r}return null}function qv(e,t,n,r){do Cr();while(nn!==null);if(U&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(N0(e,i),e===ge&&(le=ge=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,em(is,function(){return Cr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var s=H;H=1;var a=U;U|=4,cc.current=null,Gv(e,n),Vh(n,e),xv($l),as=!!Ml,$l=Ml=null,e.current=n,Xv(n),j0(),U=a,H=s,it.transition=i}else e.current=n;if(yi&&(yi=!1,nn=e,Cs=o),i=e.pendingLanes,i===0&&(cn=null),z0(n.stateNode),Ue(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bs)throw bs=!1,e=ru,ru=null,e;return Cs&1&&e.tag!==0&&Cr(),i=e.pendingLanes,i&1?e===ou?xo++:(xo=0,ou=e):xo=0,xn(),null}function Cr(){if(nn!==null){var e=Ip(Cs),t=it.transition,n=H;try{if(it.transition=null,H=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Cs=0,U&6)throw Error(I(331));var o=U;for(U|=4,N=e.current;N!==null;){var i=N,s=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:vo(8,d,i)}var p=d.child;if(p!==null)p.return=d,N=p;else for(;N!==null;){d=N;var m=d.sibling,x=d.return;if(Uh(d),d===c){N=null;break}if(m!==null){m.return=x,N=m;break}N=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,N=s;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){s=N;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,N=h;else e:for(s=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Us(9,a)}}catch(j){te(a,a.return,j)}if(a===s){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(U=o,xn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ds,e)}catch{}r=!0}return r}finally{H=n,it.transition=t}}return!1}function Fd(e,t,n){t=Rr(n,t),t=Ih(e,t,1),e=un(e,t,1),t=Ne(),e!==null&&(Ho(e,1,t),Ue(e,t))}function te(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Rr(n,e),e=Th(t,e,1),t=un(t,e,1),e=Ne(),t!==null&&(Ho(t,1,e),Ue(t,e));break}}t=t.return}}function ey(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(pe===4||pe===3&&(xe&130023424)===xe&&500>re()-fc?Dn(e,0):dc|=n),Ue(e,t)}function Jh(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=Ne();e=Ut(e,t),e!==null&&(Ho(e,t,n),Ue(e,n))}function ty(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jh(e,n)}function ny(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Jh(e,n)}var qh;qh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Wv(e,t,n);Le=!!(e.flags&131072)}else Le=!1,K&&t.flags&1048576&&rh(t,hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var o=kr(t,Re.current);br(t,n),o=ic(null,t,r,e,o,n);var i=sc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,fs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ec(t),o.updater=Bs,t.stateNode=o,o._reactInternals=t,Zl(t,r,e,n),t=Yl(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Gu(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=oy(r),e=ht(r,e),o){case 0:t=Xl(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=Pd(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,ht(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Xl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),_d(e,t,r,o,n);case 3:e:{if(Mh(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,uh(e,t),vs(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rr(Error(I(423)),t),t=Id(e,t,r,n,o);break e}else if(r!==o){o=Rr(Error(I(424)),t),t=Id(e,t,r,n,o);break e}else for(Ye=ln(t.stateNode.containerInfo.firstChild),Qe=t,K=!0,gt=null,n=ah(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===o){t=Wt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return ch(t),e===null&&Wl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Al(r,o)?s=null:i!==null&&Al(r,i)&&(t.flags|=32),Oh(e,t),Te(e,t,s,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return $h(e,t,n);case 4:return tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Pd(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,G(ms,r._currentValue),r._currentValue=s,i!==null)if(wt(i.value,s)){if(i.children===o.children&&!Fe.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Lt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Hl(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,br(t,n),o=st(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),Rd(e,t,r,o,n);case 15:return Nh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Hi(e,t),t.tag=1,Be(r)?(e=!0,fs(t)):e=!1,br(t,n),_h(t,r,o),Zl(t,r,o,n),Yl(null,t,r,!0,e,n);case 19:return Ah(e,t,n);case 22:return Dh(e,t,n)}throw Error(I(156,t.tag))};function em(e,t){return zp(e,t)}function ry(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new ry(e,t,n,r)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oy(e){if(typeof e=="function")return gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Mu)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")gc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ir:return On(n.children,o,i,t);case Du:s=8,o|=8;break;case gl:return e=ot(12,n,t,o|2),e.elementType=gl,e.lanes=i,e;case vl:return e=ot(13,n,t,o),e.elementType=vl,e.lanes=i,e;case yl:return e=ot(19,n,t,o),e.elementType=yl,e.lanes=i,e;case cp:return Hs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lp:s=10;break e;case up:s=9;break e;case Ou:s=11;break e;case Mu:s=14;break e;case Kt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=ot(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function On(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Hs(e,t,n,r){return e=ot(22,e,r,t),e.elementType=cp,e.lanes=n,e.stateNode={isHidden:!1},e}function Aa(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,o,i,s,a,u){return e=new iy(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(i),e}function sy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tm(e){if(!e)return gn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Be(n))return th(e,n,t)}return t}function nm(e,t,n,r,o,i,s,a,u){return e=vc(n,r,!0,e,o,i,s,a,u),e.context=tm(null),n=e.current,r=Ne(),o=dn(n),i=Lt(r,o),i.callback=t??null,un(n,i,o),e.current.lanes=o,Ho(e,o,r),Ue(e,r),e}function Vs(e,t,n,r){var o=t.current,i=Ne(),s=dn(o);return n=tm(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,s),e!==null&&(yt(e,o,s,i),Bi(e,o,s)),s}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function ay(){return null}var rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}Zs.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Vs(e,t,null,null)};Zs.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Vs(null,e,null,null)}),t[Bt]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Mp(e)}};function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function ly(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ks(s);i.call(c)}}var s=nm(t,r,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=s,e[Bt]=s.current,Ro(e.nodeType===8?e.parentNode:e),Un(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ks(u);a.call(c)}}var u=vc(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=u,e[Bt]=u.current,Ro(e.nodeType===8?e.parentNode:e),Un(function(){Vs(t,u,n,r)}),u}function Xs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=ks(s);a.call(u)}}Vs(t,s,e,o)}else s=ly(n,t,e,o,r);return ks(s)}Tp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ao(t.pendingLanes);n!==0&&(Lu(t,n|1),Ue(t,re()),!(U&6)&&(_r=re()+500,xn()))}break;case 13:Un(function(){var r=Ut(e,1);if(r!==null){var o=Ne();yt(r,e,1,o)}}),yc(e,1)}};Fu=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ne();yt(t,e,134217728,n)}yc(e,134217728)}};Np=function(e){if(e.tag===13){var t=dn(e),n=Ut(e,t);if(n!==null){var r=Ne();yt(n,e,t,r)}yc(e,t)}};Dp=function(){return H};Op=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Pl=function(e,t,n){switch(t){case"input":if(Sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=As(r);if(!o)throw Error(I(90));fp(r),Sl(r,o)}}}break;case"textarea":hp(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};Sp=pc;bp=Un;var uy={usingClientEntryPoint:!1,Events:[Zo,ur,As,xp,wp,pc]},Jr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kp(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{Ds=xi.inject(cy),Rt=xi}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(t))throw Error(I(200));return sy(e,t,null,n)};qe.createRoot=function(e,t){if(!wc(e))throw Error(I(299));var n=!1,r="",o=rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,Ro(e.nodeType===8?e.parentNode:e),new xc(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=kp(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Un(e)};qe.hydrate=function(e,t,n){if(!Gs(t))throw Error(I(200));return Xs(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!wc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=rm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nm(t,null,e,1,n??null,o,!1,i,s),e[Bt]=t.current,Ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zs(t)};qe.render=function(e,t,n){if(!Gs(t))throw Error(I(200));return Xs(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(I(40));return e._reactRootContainer?(Un(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};qe.unstable_batchedUpdates=pc;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gs(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Xs(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om)}catch(e){console.error(e)}}om(),op.exports=qe;var Xo=op.exports,Wd=Xo;hl.createRoot=Wd.createRoot,hl.hydrateRoot=Wd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Hd="popstate";function dy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return au("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Es(o)}return py(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function im(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fy(){return Math.random().toString(36).substr(2,8)}function Vd(e,t){return{usr:e.state,key:e.key,idx:t}}function au(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fr(t):t,{state:n,key:t&&t.key||r||fy()})}function Es(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function py(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=rn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Ao({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=rn.Pop;let b=d(),g=b==null?null:b-c;c=b,u&&u({action:a,location:w.location,delta:g})}function m(b,g){a=rn.Push;let f=au(w.location,b,g);c=d()+1;let h=Vd(f,c),S=w.createHref(f);try{s.pushState(h,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}i&&u&&u({action:a,location:w.location,delta:1})}function x(b,g){a=rn.Replace;let f=au(w.location,b,g);c=d();let h=Vd(f,c),S=w.createHref(f);s.replaceState(h,"",S),i&&u&&u({action:a,location:w.location,delta:0})}function y(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof b=="string"?b:Es(b);return f=f.replace(/ $/,"%20"),ue(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let w={get action(){return a},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Hd,p),u=b,()=>{o.removeEventListener(Hd,p),u=null}},createHref(b){return t(o,b)},createURL:y,encodeLocation(b){let g=y(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:x,go(b){return s.go(b)}};return w}var Zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zd||(Zd={}));function hy(e,t,n){return n===void 0&&(n="/"),my(e,t,n)}function my(e,t,n,r){let o=typeof t=="string"?Fr(t):t,i=Sc(o.pathname||"/",n);if(i==null)return null;let s=sm(e);gy(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Py(i);a=ky(s[u],c)}return a}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sm(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Cy(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of am(i.path))o(i,s,u)}),t}function am(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=am(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function gy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vy=/^:[\w-]+$/,yy=3,xy=2,wy=1,Sy=10,by=-2,Gd=e=>e==="*";function Cy(e,t){let n=e.split("/"),r=n.length;return n.some(Gd)&&(r+=by),t&&(r+=xy),n.filter(o=>!Gd(o)).reduce((o,i)=>o+(vy.test(i)?yy:i===""?wy:Sy),r)}function jy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ky(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=Ey({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:pn([i,p.pathname]),pathnameBase:Ty(pn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=pn([i,p.pathnameBase]))}return s}function Ey(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zy(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let w=a[p]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[p];return x&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function zy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),im(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Py(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return im(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ry(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fr(e):e;return{pathname:n?n.startsWith("/")?n:_y(n,t):t,search:Ny(r),hash:Dy(o)}}function _y(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Fa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lm(e,t){let n=Iy(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function um(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fr(e):(o=Ao({},e),ue(!o.pathname||!o.pathname.includes("?"),Fa("?","pathname","search",o)),ue(!o.pathname||!o.pathname.includes("#"),Fa("#","pathname","hash",o)),ue(!o.search||!o.search.includes("#"),Fa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=Ry(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),Ty=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Oy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const My=["get",...cm];new Set(My);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lo.apply(this,arguments)}const bc=z.createContext(null),$y=z.createContext(null),Zn=z.createContext(null),Ys=z.createContext(null),Gn=z.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=z.createContext(null);function Ay(e,t){let{relative:n}=t===void 0?{}:t;Yo()||ue(!1);let{basename:r,navigator:o}=z.useContext(Zn),{hash:i,pathname:s,search:a}=pm(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:pn([r,s])),o.createHref({pathname:u,search:a,hash:i})}function Yo(){return z.useContext(Ys)!=null}function Qo(){return Yo()||ue(!1),z.useContext(Ys).location}function fm(e){z.useContext(Zn).static||z.useLayoutEffect(e)}function Ly(){let{isDataRoute:e}=z.useContext(Gn);return e?Jy():Fy()}function Fy(){Yo()||ue(!1);let e=z.useContext(bc),{basename:t,future:n,navigator:r}=z.useContext(Zn),{matches:o}=z.useContext(Gn),{pathname:i}=Qo(),s=JSON.stringify(lm(o,n.v7_relativeSplatPath)),a=z.useRef(!1);return fm(()=>{a.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=um(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:pn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,i,e])}function pm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=z.useContext(Zn),{matches:o}=z.useContext(Gn),{pathname:i}=Qo(),s=JSON.stringify(lm(o,r.v7_relativeSplatPath));return z.useMemo(()=>um(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function By(e,t){return Uy(e,t)}function Uy(e,t,n,r){Yo()||ue(!1);let{navigator:o}=z.useContext(Zn),{matches:i}=z.useContext(Gn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Qo(),d;if(t){var p;let b=typeof t=="string"?Fr(t):t;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||ue(!1),d=b}else d=c;let m=d.pathname||"/",x=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=hy(e,{pathname:x}),w=Gy(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:pn([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:pn([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&w?z.createElement(Ys.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rn.Pop}},w):w}function Wy(){let e=Ky(),t=Oy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:o},n):null,null)}const Hy=z.createElement(Wy,null);class Vy extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(Gn.Provider,{value:this.props.routeContext},z.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zy(e){let{routeContext:t,match:n,children:r}=e,o=z.useContext(bc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Gn.Provider,{value:t},r)}function Gy(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||ue(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:x}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,m)=>{let x,y=!1,w=null,b=null;n&&(x=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||Hy,u&&(c<0&&m===0?(qy("route-fallback"),y=!0,b=null):c===m&&(y=!0,b=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),f=()=>{let h;return x?h=w:y?h=b:p.route.Component?h=z.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,z.createElement(Zy,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement(Vy,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hm||{}),mm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mm||{});function Xy(e){let t=z.useContext(bc);return t||ue(!1),t}function Yy(e){let t=z.useContext($y);return t||ue(!1),t}function Qy(e){let t=z.useContext(Gn);return t||ue(!1),t}function gm(e){let t=Qy(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function Ky(){var e;let t=z.useContext(dm),n=Yy(mm.UseRouteError),r=gm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Jy(){let{router:e}=Xy(hm.UseNavigateStable),t=gm(),n=z.useRef(!1);return fm(()=>{n.current=!0}),z.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Lo({fromRouteId:t},i)))},[e,t])}const Xd={};function qy(e,t,n){Xd[e]||(Xd[e]=!0)}function ex(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){ue(!1)}function tx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=rn.Pop,navigator:i,static:s=!1,future:a}=e;Yo()&&ue(!1);let u=t.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:i,static:s,future:Lo({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=Fr(r));let{pathname:d="/",search:p="",hash:m="",state:x=null,key:y="default"}=r,w=z.useMemo(()=>{let b=Sc(d,u);return b==null?null:{location:{pathname:b,search:p,hash:m,state:x,key:y},navigationType:o}},[u,d,p,m,x,y,o]);return w==null?null:z.createElement(Zn.Provider,{value:c},z.createElement(Ys.Provider,{children:n,value:w}))}function nx(e){let{children:t,location:n}=e;return By(lu(t),n)}new Promise(()=>{});function lu(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(r,o)=>{if(!z.isValidElement(r))return;let i=[...t,o];if(r.type===z.Fragment){n.push.apply(n,lu(r.props.children,i));return}r.type!==je&&ue(!1),!r.props.index||!r.props.children||ue(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=lu(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uu.apply(this,arguments)}function rx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ox(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ix(e,t){return e.button===0&&(!t||t==="_self")&&!ox(e)}const sx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ax="6";try{window.__reactRouterVersion=ax}catch{}const lx="startTransition",Yd=e0[lx];function ux(e){let{basename:t,children:n,future:r,window:o}=e,i=z.useRef();i.current==null&&(i.current=dy({window:o,v5Compat:!0}));let s=i.current,[a,u]=z.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=z.useCallback(p=>{c&&Yd?Yd(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>s.listen(d),[s,d]),z.useEffect(()=>ex(r),[r]),z.createElement(tx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fx=z.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,m=rx(t,sx),{basename:x}=z.useContext(Zn),y,w=!1;if(typeof c=="string"&&dx.test(c)&&(y=c,cx))try{let h=new URL(window.location.href),S=c.startsWith("//")?new URL(h.protocol+c):new URL(c),j=Sc(S.pathname,x);S.origin===h.origin&&j!=null?c=j+S.search+S.hash:w=!0}catch{}let b=Ay(c,{relative:o}),g=px(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:o,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||g(h)}return z.createElement("a",uu({},m,{href:y||b,onClick:w||i?r:f,ref:n,target:u}))});var Qd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Kd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function px(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=Ly(),c=Qo(),d=pm(e,{relative:s});return z.useCallback(p=>{if(ix(p,n)){p.preventDefault();let m=r!==void 0?r:Es(c)===Es(d);u(e,{replace:m,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,d,r,o,n,e,i,s,a])}var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pe.apply(this,arguments)};function Fo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",wo="-moz-",W="-webkit-",vm="comm",Qs="rule",Cc="decl",hx="@import",ym="@keyframes",mx="@layer",xm=Math.abs,jc=String.fromCharCode,cu=Object.assign;function gx(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function wm(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Xi(e,t,n){return e.indexOf(t,n)}function me(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function zt(e){return e.length}function Sm(e){return e.length}function uo(e,t){return t.push(e),e}function vx(e,t){return e.map(t).join("")}function Jd(e,t){return e.filter(function(n){return!Ot(n,t)})}var Ks=1,Tr=1,bm=0,lt=0,ae=0,Br="";function Js(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ks,column:Tr,length:s,return:"",siblings:a}}function Qt(e,t){return cu(Js("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=Qt(e.root,{children:[e]});uo(e,e.siblings)}function yx(){return ae}function xx(){return ae=lt>0?me(Br,--lt):0,Tr--,ae===10&&(Tr=1,Ks--),ae}function xt(){return ae=lt<bm?me(Br,lt++):0,Tr++,ae===10&&(Tr=1,Ks++),ae}function Mn(){return me(Br,lt)}function Yi(){return lt}function qs(e,t){return Ir(Br,e,t)}function du(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wx(e){return Ks=Tr=1,bm=zt(Br=e),lt=0,[]}function Sx(e){return Br="",e}function Ba(e){return wm(qs(lt-1,fu(e===91?e+2:e===40?e+1:e)))}function bx(e){for(;(ae=Mn())&&ae<33;)xt();return du(e)>2||du(ae)>3?"":" "}function Cx(e,t){for(;--t&&xt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return qs(e,Yi()+(t<6&&Mn()==32&&xt()==32))}function fu(e){for(;xt();)switch(ae){case e:return lt;case 34:case 39:e!==34&&e!==39&&fu(ae);break;case 40:e===41&&fu(e);break;case 92:xt();break}return lt}function jx(e,t){for(;xt()&&e+ae!==57;)if(e+ae===84&&Mn()===47)break;return"/*"+qs(t,lt-1)+"*"+jc(e===47?e:xt())}function kx(e){for(;!du(Mn());)xt();return qs(e,lt)}function Ex(e){return Sx(Qi("",null,null,null,[""],e=wx(e),0,[0],e))}function Qi(e,t,n,r,o,i,s,a,u){for(var c=0,d=0,p=s,m=0,x=0,y=0,w=1,b=1,g=1,f=0,h="",S=o,j=i,E=r,C=h;b;)switch(y=f,f=xt()){case 40:if(y!=108&&me(C,p-1)==58){Xi(C+=L(Ba(f),"&","&\f"),"&\f",xm(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Ba(f);break;case 9:case 10:case 13:case 32:C+=bx(y);break;case 92:C+=Cx(Yi()-1,7);continue;case 47:switch(Mn()){case 42:case 47:uo(zx(jx(xt(),Yi()),t,n,u),u);break;default:C+="/"}break;case 123*w:a[c++]=zt(C)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:g==-1&&(C=L(C,/\f/g,"")),x>0&&zt(C)-p&&uo(x>32?ef(C+";",r,n,p-1,u):ef(L(C," ","")+";",r,n,p-2,u),u);break;case 59:C+=";";default:if(uo(E=qd(C,t,n,c,d,o,a,h,S=[],j=[],p,i),i),f===123)if(d===0)Qi(C,t,E,E,S,i,p,a,j);else switch(m===99&&me(C,3)===110?100:m){case 100:case 108:case 109:case 115:Qi(e,E,E,r&&uo(qd(e,E,E,0,0,o,a,h,o,S=[],p,j),j),o,j,p,a,r?S:j);break;default:Qi(C,E,E,E,[""],j,0,a,j)}}c=d=x=0,w=g=1,h=C="",p=s;break;case 58:p=1+zt(C),x=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&xx()==125)continue}switch(C+=jc(f),f*w){case 38:g=d>0?1:(C+="\f",-1);break;case 44:a[c++]=(zt(C)-1)*g,g=1;break;case 64:Mn()===45&&(C+=Ba(xt())),m=Mn(),d=p=zt(h=C+=kx(Yi())),f++;break;case 45:y===45&&zt(C)==2&&(w=0)}}return i}function qd(e,t,n,r,o,i,s,a,u,c,d,p){for(var m=o-1,x=o===0?i:[""],y=Sm(x),w=0,b=0,g=0;w<r;++w)for(var f=0,h=Ir(e,m+1,m=xm(b=s[w])),S=e;f<y;++f)(S=wm(b>0?x[f]+" "+h:L(h,/&\f/g,x[f])))&&(u[g++]=S);return Js(e,t,n,o===0?Qs:a,u,c,d,p)}function zx(e,t,n,r){return Js(e,t,n,vm,jc(yx()),Ir(e,2,-2),0,r)}function ef(e,t,n,r,o){return Js(e,t,n,Cc,Ir(e,0,r),Ir(e,r+1,-1),r,o)}function Cm(e,t,n){switch(gx(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+wo+e+Y+e+e;case 5936:switch(me(e,t+11)){case 114:return W+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Y+e+e;case 6165:return W+e+Y+"flex-"+e+e;case 5187:return W+e+L(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return W+e+Y+"flex-item-"+L(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":Y+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return W+e+Y+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Y+L(e,"shrink","negative")+e;case 5292:return W+e+Y+L(e,"basis","preferred-size")+e;case 6060:return W+"box-"+L(e,"-grow","")+W+e+Y+L(e,"grow","positive")+e;case 4554:return W+L(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return Y+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return Y+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Ot(r.props,/grid-\w+-end/)})?~Xi(e+(n=n[t].value),"span",0)?e:Y+L(e,"-start","")+e+Y+"grid-row-span:"+(~Xi(n,"span",0)?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":Y+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:Y+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+wo+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xi(e,"stretch",0)?Cm(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return Y+o+":"+i+c+(s?Y+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(me(e,t+6)===121)return L(e,":",":"+W)+e;break;case 6444:switch(me(e,me(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(me(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Y+"$2box$3")+e;case 100:return L(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function zs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Px(e,t,n,r){switch(e.type){case mx:if(e.children.length)break;case hx:case Cc:return e.return=e.return||e.value;case vm:return"";case ym:return e.return=e.value+"{"+zs(e.children,r)+"}";case Qs:if(!zt(e.value=e.props.join(",")))return""}return zt(n=zs(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rx(e){var t=Sm(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function _x(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ix(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cc:e.return=Cm(e.value,e.length,n);return;case ym:return zs([Qt(e,{value:L(e.value,"@","@"+W)})],r);case Qs:if(e.length)return vx(n=e.props,function(o){switch(Ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(Qt(e,{props:[L(o,/:(read-\w+)/,":"+wo+"$1")]})),Qn(Qt(e,{props:[o]})),cu(e,{props:Jd(n,r)});break;case"::placeholder":Qn(Qt(e,{props:[L(o,/:(plac\w+)/,":"+W+"input-$1")]})),Qn(Qt(e,{props:[L(o,/:(plac\w+)/,":"+wo+"$1")]})),Qn(Qt(e,{props:[L(o,/:(plac\w+)/,Y+"input-$1")]})),Qn(Qt(e,{props:[o]})),cu(e,{props:Jd(n,r)});break}return""})}}var Tx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},Nr=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",jm="active",km="data-styled-version",ea="6.1.19",kc=`/*!sc*/
`,Ps=typeof window<"u"&&typeof document<"u",Nx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),Dx={},ta=Object.freeze([]),Dr=Object.freeze({});function Em(e,t,n){return n===void 0&&(n=Dr),e.theme!==n.theme&&e.theme||t||n.theme}var zm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ox=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mx=/(^-|-$)/g;function tf(e){return e.replace(Ox,"-").replace(Mx,"")}var $x=/(a)(d)/gi,wi=52,nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function pu(e){var t,n="";for(t=Math.abs(e);t>wi;t=t/wi|0)n=nf(t%wi)+n;return(nf(t%wi)+n).replace($x,"$1-$2")}var Ua,Pm=5381,gr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rm=function(e){return gr(Pm,e)};function _m(e){return pu(Rm(e)>>>0)}function Ax(e){return e.displayName||e.name||"Component"}function Wa(e){return typeof e=="string"&&!0}var Im=typeof Symbol=="function"&&Symbol.for,Tm=Im?Symbol.for("react.memo"):60115,Lx=Im?Symbol.for("react.forward_ref"):60112,Fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ux=((Ua={})[Lx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ua[Tm]=Nm,Ua);function rf(e){return("type"in(t=e)&&t.type.$$typeof)===Tm?Nm:"$$typeof"in e?Ux[e.$$typeof]:Fx;var t}var Wx=Object.defineProperty,Hx=Object.getOwnPropertyNames,of=Object.getOwnPropertySymbols,Vx=Object.getOwnPropertyDescriptor,Zx=Object.getPrototypeOf,sf=Object.prototype;function Dm(e,t,n){if(typeof t!="string"){if(sf){var r=Zx(t);r&&r!==sf&&Dm(e,r,n)}var o=Hx(t);of&&(o=o.concat(of(t)));for(var i=rf(e),s=rf(t),a=0;a<o.length;++a){var u=o[a];if(!(u in Bx||n&&n[u]||s&&u in s||i&&u in i)){var c=Vx(t,u);try{Wx(e,u,c)}catch{}}}}return e}function Or(e){return typeof e=="function"}function Ec(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Bo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mu(e,t,n){if(n===void 0&&(n=!1),!n&&!Bo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=mu(e[r],t[r]);else if(Bo(t))for(var r in t)e[r]=mu(e[r],t[r]);return e}function zc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ko(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Gx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ko(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(kc);return n},e}(),Ki=new Map,Rs=new Map,Ji=1,Si=function(e){if(Ki.has(e))return Ki.get(e);for(;Rs.has(Ji);)Ji++;var t=Ji++;return Ki.set(e,t),Rs.set(t,e),t},Xx=function(e,t){Ji=t+1,Ki.set(e,t),Rs.set(t,e)},Yx="style[".concat(Nr,"][").concat(km,'="').concat(ea,'"]'),Qx=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Kx=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Jx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(kc),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var u=a.match(Qx);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Xx(d,c),Kx(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},af=function(e){for(var t=document.querySelectorAll(Yx),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Nr)!==jm&&(Jx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function qx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Om=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Nr,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Nr,jm),r.setAttribute(km,ea);var s=qx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},e1=function(){function e(t){this.element=Om(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ko(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),t1=function(){function e(t){this.element=Om(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),n1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),lf=Ps,r1={isServer:!Ps,useCSSOMInjection:!Nx},_s=function(){function e(t,n,r){t===void 0&&(t=Dr),n===void 0&&(n={});var o=this;this.options=Pe(Pe({},r1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ps&&lf&&(lf=!1,af(this)),zc(this,function(){return function(i){for(var s=i.getTag(),a=s.length,u="",c=function(p){var m=function(g){return Rs.get(g)}(p);if(m===void 0)return"continue";var x=i.names.get(m),y=s.getGroup(p);if(x===void 0||!x.size||y.length===0)return"continue";var w="".concat(Nr,".g").concat(p,'[id="').concat(m,'"]'),b="";x!==void 0&&x.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),u+="".concat(y).concat(w,'{content:"').concat(b,'"}').concat(kc)},d=0;d<a;d++)c(d);return u}(o)})}return e.registerId=function(t){return Si(t)},e.prototype.rehydrate=function(){!this.server&&Ps&&af(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new n1(o):r?new e1(o):new t1(o)}(this.options),new Gx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Si(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),o1=/&/g,i1=/^\s*\/\/.*$/gm;function Mm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Mm(n.children,t)),n})}function s1(e){var t,n,r,o=Dr,i=o.options,s=i===void 0?Dr:i,a=o.plugins,u=a===void 0?ta:a,c=function(m,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=u.slice();d.push(function(m){m.type===Qs&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(o1,n).replace(r,c))}),s.prefix&&d.push(Ix),d.push(Px);var p=function(m,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(i1,""),g=Ex(y||x?"".concat(y," ").concat(x," { ").concat(b," }"):b);s.namespace&&(g=Mm(g,s.namespace));var f=[];return zs(g,Rx(d.concat(_x(function(h){return f.push(h)})))),f};return p.hash=u.length?u.reduce(function(m,x){return x.name||Ko(15),gr(m,x.name)},Pm).toString():"",p}var a1=new _s,gu=s1(),$m=ze.createContext({shouldForwardProp:void 0,styleSheet:a1,stylis:gu});$m.Consumer;ze.createContext(void 0);function vu(){return z.useContext($m)}var l1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=gu);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,zc(this,function(){throw Ko(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gu),this.name+t.hash},e}(),u1=function(e){return e>="A"&&e<="Z"};function uf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;u1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Am=function(e){return e==null||e===!1||e===""},Lm=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Am(i)&&(Array.isArray(i)&&i.isCss||Or(i)?r.push("".concat(uf(o),":"),i,";"):Bo(i)?r.push.apply(r,Fo(Fo(["".concat(o," {")],Lm(i),!1),["}"],!1)):r.push("".concat(uf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Tx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function hn(e,t,n,r){if(Am(e))return[];if(Ec(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return hn(o,t,n,r)}var i;return e instanceof l1?n?(e.inject(n,r),[e.getName(r)]):[e]:Bo(e)?Lm(e):Array.isArray(e)?Array.prototype.concat.apply(ta,e.map(function(s){return hn(s,t,n,r)})):[e.toString()]}function Fm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Ec(n))return!1}return!0}var c1=Rm(ea),d1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fm(t),this.componentId=n,this.baseHash=gr(c1,n),this.baseStyle=r,_s.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Tn(o,this.staticRulesId);else{var i=hu(hn(this.rules,t,n,r)),s=pu(gr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Tn(o,s),this.staticRulesId=s}else{for(var u=gr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=hu(hn(p,t,n,r));u=gr(u,m+d),c+=m}}if(c){var x=pu(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=Tn(o,x)}}return o},e}(),Pc=ze.createContext(void 0);Pc.Consumer;var Ha={};function f1(e,t,n){var r=Ec(e),o=e,i=!Wa(e),s=t.attrs,a=s===void 0?ta:s,u=t.componentId,c=u===void 0?function(S,j){var E=typeof S!="string"?"sc":tf(S);Ha[E]=(Ha[E]||0)+1;var C="".concat(E,"-").concat(_m(ea+E+Ha[E]));return j?"".concat(j,"-").concat(C):C}(t.displayName,t.parentComponentId):u,d=t.displayName,p=d===void 0?function(S){return Wa(S)?"styled.".concat(S):"Styled(".concat(Ax(S),")")}(e):d,m=t.displayName&&t.componentId?"".concat(tf(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(S,j){return w(S,j)&&b(S,j)}}else y=w}var g=new d1(n,m,r?o.componentStyle:void 0);function f(S,j){return function(E,C,R){var k=E.attrs,_=E.componentStyle,M=E.defaultProps,$=E.foldedComponentIds,B=E.styledComponentId,Me=E.target,tt=ze.useContext(Pc),ve=vu(),_e=E.shouldForwardProp||ve.shouldForwardProp,T=Em(C,tt,M)||Dr,D=function(Vt,Ve,Nt){for(var Hr,Sn=Pe(Pe({},Ve),{className:void 0,theme:Nt}),pa=0;pa<Vt.length;pa+=1){var ni=Or(Hr=Vt[pa])?Hr(Sn):Hr;for(var Zt in ni)Sn[Zt]=Zt==="className"?Tn(Sn[Zt],ni[Zt]):Zt==="style"?Pe(Pe({},Sn[Zt]),ni[Zt]):ni[Zt]}return Ve.className&&(Sn.className=Tn(Sn.className,Ve.className)),Sn}(k,C,T),O=D.as||Me,V={};for(var Z in D)D[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&D.theme===T||(Z==="forwardedAs"?V.as=D.forwardedAs:_e&&!_e(Z,O)||(V[Z]=D[Z]));var wn=function(Vt,Ve){var Nt=vu(),Hr=Vt.generateAndInjectStyles(Ve,Nt.styleSheet,Nt.stylis);return Hr}(_,D),ut=Tn($,B);return wn&&(ut+=" "+wn),D.className&&(ut+=" "+D.className),V[Wa(O)&&!zm.has(O)?"class":"className"]=ut,R&&(V.ref=R),z.createElement(O,V)}(h,S,j)}f.displayName=p;var h=ze.forwardRef(f);return h.attrs=x,h.componentStyle=g,h.displayName=p,h.shouldForwardProp=y,h.foldedComponentIds=r?Tn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=m,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(j){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var R=0,k=E;R<k.length;R++)mu(j,k[R],!0);return j}({},o.defaultProps,S):S}}),zc(h,function(){return".".concat(h.styledComponentId)}),i&&Dm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function cf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var df=function(e){return Object.assign(e,{isCss:!0})};function Bm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Or(e)||Bo(e))return df(hn(cf(ta,Fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hn(r):df(hn(cf(r,t)))}function yu(e,t,n){if(n===void 0&&(n=Dr),!t)throw Ko(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Bm.apply(void 0,Fo([o],i,!1)))};return r.attrs=function(o){return yu(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return yu(e,t,Pe(Pe({},n),o))},r}var Um=function(e){return yu(f1,e)},v=Um;zm.forEach(function(e){v[e]=Um(e)});var p1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Fm(t),_s.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(hu(hn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&_s.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function h1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Bm.apply(void 0,Fo([e],t,!1)),o="sc-global-".concat(_m(JSON.stringify(r))),i=new p1(r,o),s=function(u){var c=vu(),d=ze.useContext(Pc),p=ze.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(p,u,c.styleSheet,d,c.stylis),ze.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,u,c.styleSheet,d,c.stylis]),null};function a(u,c,d,p,m){if(i.isStatic)i.renderStyles(u,Dx,d,m);else{var x=Pe(Pe({},c),{theme:Em(c,p,s.defaultProps)});i.renderStyles(u,x,d,m)}}return ze.memo(s)}const m1=v.header`
  background: #222;
  position: sticky;
  top: 0;
  z-index: 100;
`,g1=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.2rem 0;
`,v1=v.div`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.15em;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,y1=v.nav`
  max-width: 1450px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }
`,x1=v.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
    position: fixed;
    left: 0; 
    right: 0; 
    top: 80px;
    background: #222;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 1rem 0;
    transform: ${({open:e})=>e?"translateY(0)":"translateY(-100%)"};
    transition: transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    
    ${({open:e})=>e&&`
      display: flex;
    `}
  }
`,w1=v.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #333;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,S1=v(fx)`
  color: ${({$active:e})=>e?"#7b61ff":"#fff"};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
  display: block;
  font-size: 0.9rem;
  
  &:hover { 
    color: #7b61ff; 
    background: #333; 
  }
  
  ${({$active:e})=>e&&"font-weight: bold;"}
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    border-radius: 0;
    font-size: 1rem;
    
    &:hover {
      background: #333;
    }
  }
`,b1=v.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #7b61ff;
  }
  
  @media (max-width: 768px) { 
    display: block; 
  }
`,C1=[{path:"/",label:"Главная"},{path:"/3d-tour",label:"3D тур"},{path:"/billiards",label:"Бильярд"},{path:"/karaoke",label:"Караоке"},{path:"/disco",label:"Диско-бар"},{path:"/playstation",label:"Playstation"},{path:"/lounge",label:"Кальян"},{path:"/games",label:"Настольные игры"},{path:"/booking",label:"Бронирование"},{path:"/menu",label:"Меню"},{path:"/events",label:"Мероприятия"},{path:"/contact",label:"Контакты"}],j1=()=>{const e=Qo(),[t,n]=z.useState(!1);return l.jsxs(m1,{children:[l.jsx(g1,{children:l.jsx(v1,{children:"FRANTSUZ"})}),l.jsxs(y1,{children:[l.jsx(x1,{open:t,children:C1.map(r=>l.jsx(w1,{children:l.jsx(S1,{to:r.path,$active:e.pathname===r.path,onClick:()=>n(!1),children:r.label})},r.path))}),l.jsx(b1,{onClick:()=>n(r=>!r),children:t?"✕":"☰"})]})]})},St=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,k1=v.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0 1rem;
  }
`,E1=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`,Va=v.div`
  text-align: left;
  
  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.4;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
    }
    
    &:hover {
      color: #ffd700;
    }
  }
`,qr=v.div`
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
  }
`,z1=v.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
  
  a {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.7rem 1.1rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    /* VK стили */
    &[href*="vk.com"] {
      background: linear-gradient(135deg, #4C75A3 0%, #5B7BB3 100%);
      border: 2px solid #4C75A3;
      
      &:hover {
        background: linear-gradient(135deg, #5B7BB3 0%, #6B8BC3 100%);
        border-color: #6B8BC3;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(76, 117, 163, 0.4);
      }
      
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(76, 117, 163, 0.3);
      }
    }
    
    /* Telegram стили */
    &[href*="t.me"] {
      background: linear-gradient(135deg, #0088CC 0%, #0099DD 100%);
      border: 2px solid #0088CC;
      
      &:hover {
        background: linear-gradient(135deg, #0099DD 0%, #00AADD 100%);
        border-color: #00AADD;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 136, 204, 0.4);
      }
      
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(0, 136, 204, 0.3);
      }
    }
    
    /* Общие hover эффекты */
    &:hover {
      color: #ffffff;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.6rem 1rem;
      min-width: 60px;
      border-radius: 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.5rem 0.9rem;
      min-width: 55px;
      border-radius: 8px;
    }
  }
`,P1=v.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #ffffff;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 1rem;
    font-size: 0.8rem;
  }
`,R1=()=>l.jsx(k1,{children:l.jsxs(St,{children:[l.jsxs(E1,{children:[l.jsxs(Va,{children:[l.jsx("h3",{children:"Контакты"}),l.jsx(qr,{children:l.jsx("a",{href:"tel:+79680905550",children:"+7(968) 090-55-50"})}),l.jsx(qr,{children:l.jsx("a",{href:"tel:+79680915550",children:"+7(968) 091-55-50"})}),l.jsx(qr,{children:l.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})}),l.jsx(qr,{children:l.jsxs("a",{href:"#",children:["город Москва,",l.jsx("br",{}),"ул. Салтыковская, 49А,",l.jsx("br",{}),"ТЦ Волна, Цокольный этаж"]})}),l.jsx(qr,{children:l.jsxs("a",{href:"tel:+79680915550",children:["Банкетный менеджер:",l.jsx("br",{}),"+7 (968)091-55-50"]})}),l.jsx("h3",{children:"Мы в соцсети"}),l.jsxs(z1,{children:[l.jsx("a",{href:"https://vk.com/frant_rk",title:"ВКонтакте",children:"VK"}),l.jsx("a",{href:"https://t.me/francuz_klub",title:"Telegram",children:"TG"})]})]}),l.jsxs(Va,{children:[l.jsx("h3",{children:"Услуги"}),l.jsx("a",{href:"https://reiting.moscow/",target:"_blank",rel:"noopener noreferrer",children:"Работа"}),l.jsx("a",{href:"https://tyteda.ru/",target:"_blank",rel:"noopener noreferrer",children:"Доставка"}),l.jsx("a",{href:"https://frantsuz.ru/",target:"_blank",rel:"noopener noreferrer",children:"Обучение"})]}),l.jsxs(Va,{children:[l.jsx("h3",{children:"Гостям"}),l.jsx("a",{href:"/contact",children:"Правила клуба"}),l.jsx("a",{href:"/privacy",children:"Политика конфиденциальности"}),l.jsx("a",{href:"/payment",children:"Правила оплаты"}),l.jsx("a",{href:"/refund",children:"Возврат и отказ от услуги"}),l.jsx("a",{href:"/requisites",children:"Реквизиты"}),l.jsx("a",{href:"/security",children:"Безопасность"})]})]}),l.jsxs(P1,{children:[l.jsx("div",{children:"© 2018 Frantsuz-club.ru все права защищены."}),l.jsx("div",{children:"Сделано WeTop digital agency."})]})]})}),_1=v.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,I1=v.main`
  flex: 1;
`,T1=({children:e})=>l.jsxs(_1,{children:[l.jsx(j1,{}),l.jsx(I1,{children:e}),l.jsx(R1,{})]}),N1=v.div`
  display: flex;
  flex-direction: column;
`,D1=v.main`
  flex: 1;
`,O1=v.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 1rem;
  }
`;v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://frantsuz-club.ru/wp-content/uploads/2025/05/pereezd.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
  @media (max-width: 768px) {
    background-position: center center;
  }
`;const M1=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`,$1=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 60px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,A1=v.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`,L1=v.div`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`,F1=v.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`,Za=v.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
`,B1=v.div`
  position: absolute;
  right: 10%;
  bottom: 10%;
  z-index: 3;
  
  @media (max-width: 1024px) {
    right: 5%;
    bottom: 5%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,U1=v.div`
  position: relative;
  width: 300px;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`,W1=v.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`,H1=v.img`
  position: absolute;
  top: -20px;
  right: -30px;
  width: 80px;
  height: auto;
  z-index: 3;
  
  @media (max-width: 1024px) {
    width: 60px;
    top: -15px;
    right: -25px;
  }
`,V1=v.img`
  position: absolute;
  bottom: 50px;
  left: -40px;
  width: 60px;
  height: auto;
  z-index: 1;
  
  @media (max-width: 1024px) {
    width: 50px;
    bottom: 40px;
    left: -30px;
  }
`,Z1=v.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`,G1=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,Ga=v.div`
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 16/9;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 4/3;
  }
  
  @media (max-width: 480px) {
    aspect-ratio: 1/1;
  }
`,Xa=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Ya=v.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem;
  }
`,Qa=v.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,Ka=v.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,X1=()=>l.jsx(N1,{children:l.jsxs(D1,{children:[l.jsxs(O1,{children:[l.jsx(M1,{}),l.jsx($1,{children:l.jsxs(St,{children:[l.jsxs(A1,{children:["Развлекательный комплекс",l.jsx("br",{}),'"Француз"']}),l.jsxs(L1,{children:["Уникальное место, идеальное для ярких вечеринок",l.jsx("br",{}),"и уютных посиделок с друзьями"]}),l.jsxs(F1,{children:[l.jsx(Za,{children:"Караоке"}),l.jsx(Za,{children:"Бильярд"}),l.jsx(Za,{children:"Диско Бар"})]})]})}),l.jsx(B1,{children:l.jsxs(U1,{children:[l.jsx(W1,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2.png",alt:"Девушка с коктейлем"}),l.jsx(H1,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-flower.png",alt:"Цветок"}),l.jsx(V1,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-microphone.png",alt:"Микрофон"})]})})]}),l.jsx(Z1,{children:l.jsx(St,{children:l.jsxs(G1,{children:[l.jsxs(Ga,{children:[l.jsx(Xa,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=",alt:"Караоке"}),l.jsxs(Ya,{children:[l.jsx(Qa,{children:"Караоке"}),l.jsx(Ka,{children:"Современное оборудование и огромная база песен для незабываемого вечера"})]})]}),l.jsxs(Ga,{children:[l.jsx(Xa,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=",alt:"Бильярд"}),l.jsxs(Ya,{children:[l.jsx(Qa,{children:"Бильярд"}),l.jsx(Ka,{children:"Профессиональные столы для любителей и мастеров игры"})]})]}),l.jsxs(Ga,{children:[l.jsx(Xa,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=",alt:"Кальян"}),l.jsxs(Ya,{children:[l.jsx(Qa,{children:"Кальян"}),l.jsx(Ka,{children:"Уютная атмосфера и разнообразные вкусы для расслабления"})]})]})]})})})]})}),Y1=v.div`
  display: flex;
  flex-direction: column;
`,Q1=v.main`
  flex: 1;
  padding: 2rem 0;
`,K1=v.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`,J1=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 0.5rem;
    color: #333;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
    text-align: center;
  }
`,q1=()=>l.jsx(Y1,{children:l.jsx(Q1,{children:l.jsx(K1,{children:l.jsxs(J1,{children:[l.jsx("h1",{children:"Contact Us"}),l.jsx("p",{children:"Get in touch with us for any questions or feedback."})]})})})}),ew=v.div`
  display: flex;
  flex-direction: column;
`,tw=v.main`
  flex: 1;
  padding: 2rem 0;
`,nw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,rw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,ow=()=>l.jsx(ew,{children:l.jsx(tw,{children:l.jsx(nw,{children:l.jsxs(rw,{children:[l.jsx("h1",{children:"Бильярд"}),l.jsx("p",{children:"Профессиональные бильярдные столы для любителей и профессионалов."})]})})})}),iw=v.div`
  display: flex;
  flex-direction: column;
`,sw=v.main`
  flex: 1;
  padding: 2rem 0;
`,aw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,lw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,uw=()=>l.jsx(iw,{children:l.jsx(sw,{children:l.jsx(aw,{children:l.jsxs(lw,{children:[l.jsx("h1",{children:"Караоке"}),l.jsx("p",{children:"Спойте свои любимые песни в уютной атмосфере."})]})})})}),cw=v.div`
  display: flex;
  flex-direction: column;
`,dw=v.main`
  flex: 1;
  padding: 2rem 0;
`,fw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,pw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,hw=()=>l.jsx(cw,{children:l.jsx(dw,{children:l.jsx(fw,{children:l.jsxs(pw,{children:[l.jsx("h1",{children:"Диско-бар"}),l.jsx("p",{children:"Танцуйте под лучшую музыку и наслаждайтесь напитками."})]})})})}),mw=v.div`
  display: flex;
  flex-direction: column;
`,gw=v.main`
  flex: 1;
  padding: 2rem 0;
`,vw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,yw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,xw=()=>l.jsx(mw,{children:l.jsx(gw,{children:l.jsx(vw,{children:l.jsxs(yw,{children:[l.jsx("h1",{children:"Playstation"}),l.jsx("p",{children:"Играйте в лучшие игры на PlayStation."})]})})})}),ww=v.div`
  display: flex;
  flex-direction: column;
`,Sw=v.main`
  flex: 1;
  padding: 2rem 0;
`,bw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Cw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,jw=()=>l.jsx(ww,{children:l.jsx(Sw,{children:l.jsx(bw,{children:l.jsxs(Cw,{children:[l.jsx("h1",{children:"Лаунж зона"}),l.jsx("p",{children:"Уютная зона отдыха с комфортными диванами и расслабляющей атмосферой."})]})})})}),kw=v.div`
  display: flex;
  flex-direction: column;
`,Ew=v.main`
  flex: 1;
  padding: 2rem 0;
`,zw=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Pw=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,Rw=()=>l.jsx(kw,{children:l.jsx(Ew,{children:l.jsx(zw,{children:l.jsxs(Pw,{children:[l.jsx("h1",{children:"Настольные игры"}),l.jsx("p",{children:"Большая коллекция настольных игр для компании друзей."})]})})})}),_w=v.div`
  border: none;
  overflow: hidden;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  aspect-ratio: 16/9;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4/3;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1/1;
  }
`,Iw=v.div`
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`,Tw=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Nw=v.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`,Dw=v.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
`,Ow=({zone:e,$isFullWidth:t})=>l.jsx(_w,{$isFullWidth:t,children:l.jsxs(Iw,{children:[l.jsx(Tw,{src:e.imageUrl,alt:e.name}),l.jsx(Nw,{children:l.jsx(Dw,{children:e.name})})]})}),Mw={},ff=e=>{let t;const n=new Set,r=(d,p)=>{const m=typeof d=="function"?d(t):d;if(!Object.is(m,t)){const x=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,x))}},o=()=>t,u={setState:r,getState:o,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Mw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,o,u);return u},$w=e=>e?ff(e):ff;var Wm={exports:{}},Hm={},Vm={exports:{}},Zm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=z;function Aw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lw=typeof Object.is=="function"?Object.is:Aw,Fw=Mr.useState,Bw=Mr.useEffect,Uw=Mr.useLayoutEffect,Ww=Mr.useDebugValue;function Hw(e,t){var n=t(),r=Fw({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Uw(function(){o.value=n,o.getSnapshot=t,Ja(o)&&i({inst:o})},[e,n,t]),Bw(function(){return Ja(o)&&i({inst:o}),e(function(){Ja(o)&&i({inst:o})})},[e]),Ww(n),n}function Ja(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lw(e,n)}catch{return!0}}function Vw(e,t){return t()}var Zw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Vw:Hw;Zm.useSyncExternalStore=Mr.useSyncExternalStore!==void 0?Mr.useSyncExternalStore:Zw;Vm.exports=Zm;var Gw=Vm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=z,Xw=Gw;function Yw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qw=typeof Object.is=="function"?Object.is:Yw,Kw=Xw.useSyncExternalStore,Jw=na.useRef,qw=na.useEffect,eS=na.useMemo,tS=na.useDebugValue;Hm.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Jw(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=eS(function(){function u(x){if(!c){if(c=!0,d=x,x=r(x),o!==void 0&&s.hasValue){var y=s.value;if(o(y,x))return p=y}return p=x}if(y=p,Qw(d,x))return y;var w=r(x);return o!==void 0&&o(y,w)?(d=x,y):(d=x,p=w)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,o]);var a=Kw(e,i[0],i[1]);return qw(function(){s.hasValue=!0,s.value=a},[a]),tS(a),a};Wm.exports=Hm;var nS=Wm.exports;const rS=Eu(nS),Gm={},{useDebugValue:oS}=ze,{useSyncExternalStoreWithSelector:iS}=rS;let pf=!1;const sS=e=>e;function aS(e,t=sS,n){(Gm?"production":void 0)!=="production"&&n&&!pf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),pf=!0);const r=iS(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return oS(r),r}const hf=e=>{(Gm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?$w(e):e,n=(r,o)=>aS(t,r,o);return Object.assign(n,t),n},lS=e=>e?hf(e):hf,uS=lS(e=>({date:null,zoneId:null,tableId:null,time:null,setDate:t=>e({date:t}),setZoneId:t=>e({zoneId:t}),setTableId:t=>e({tableId:t}),setTime:t=>e({time:t})})),cS=v.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`,dS=v.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,bi=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ci=v.label`
  color: #fff;
  font-weight: 500;
`,mf=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`;v.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`;const fS=v.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,pS=v.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,hS=v.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,mS=({selectedZone:e,selectedTable:t})=>{const{date:n,time:r,setDate:o,setTime:i}=uS(),[s,a]=ze.useState([]),[u,c]=ze.useState(!1),d=p=>{p.preventDefault(),a([]),c(!1);const m=[];if(n||m.push("Выберите дату"),r||m.push("Выберите время"),e||m.push("Зона не выбрана"),m.length>0){a(m);return}const x={date:n,time:r,zoneId:e==null?void 0:e.id,tableId:t==null?void 0:t.id};console.log("Отправляем на сервер:",x),c(!0),o(null),i(null)};return l.jsx(St,{children:l.jsxs(cS,{children:[l.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",color:"#ffd700"},children:"Бронирование"}),l.jsxs(dS,{onSubmit:d,children:[e&&l.jsxs(bi,{children:[l.jsx(Ci,{children:"Выбранная зона"}),l.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:e.name})]}),t&&l.jsxs(bi,{children:[l.jsx(Ci,{children:"Выбранный стол"}),l.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:t.label})]}),l.jsxs(bi,{children:[l.jsx(Ci,{children:"Дата"}),l.jsx(mf,{type:"date",value:n||"",onChange:p=>o(p.target.value),min:new Date().toISOString().split("T")[0]})]}),l.jsxs(bi,{children:[l.jsx(Ci,{children:"Время"}),l.jsx(mf,{type:"time",value:r||"",onChange:p=>i(p.target.value)})]}),s.length>0&&l.jsx("div",{children:s.map((p,m)=>l.jsx(pS,{children:p},m))}),u&&l.jsx(hS,{children:"Бронирование отправлено!"}),l.jsx(fS,{type:"submit",disabled:!n||!r||!e,children:"Подтвердить бронирование"})]})]})})};var ra={exports:{}},Xm={},Ym={exports:{}},gS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vS=gS,yS=vS;function Qm(){}function Km(){}Km.resetWarningCache=Qm;var xS=function(){function e(r,o,i,s,a,u){if(u!==yS){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Km,resetWarningCache:Qm};return n.PropTypes=n,n};Ym.exports=xS();var Jm=Ym.exports;function qm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=qm(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function gf(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=qm(e))&&(r&&(r+=" "),r+=t);return r}const wS=Object.freeze(Object.defineProperty({__proto__:null,clsx:gf,default:gf},Symbol.toStringTag,{value:"Module"})),SS=Ag(wS);var ne={},It={};Object.defineProperty(It,"__esModule",{value:!0});It.dontSetMe=ES;It.findInArray=bS;It.int=kS;It.isFunction=CS;It.isNum=jS;function bS(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function CS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function jS(e){return typeof e=="number"&&!isNaN(e)}function kS(e){return parseInt(e,10)}function ES(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.browserPrefixToKey=tg;Xn.browserPrefixToStyle=zS;Xn.default=void 0;Xn.getPrefix=eg;const qa=["Moz","Webkit","O","ms"];function eg(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<qa.length;r++)if(tg(t,qa[r])in n)return qa[r];return""}function tg(e,t){return t?"".concat(t).concat(PS(e)):e}function zS(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function PS(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}Xn.default=eg();Object.defineProperty(ne,"__esModule",{value:!0});ne.addClassName=og;ne.addEvent=IS;ne.addUserSelectStyles=US;ne.createCSSTransform=AS;ne.createSVGTransform=LS;ne.getTouch=FS;ne.getTouchIdentifier=BS;ne.getTranslation=Rc;ne.innerHeight=OS;ne.innerWidth=MS;ne.matchesSelector=rg;ne.matchesSelectorAndParentsTo=_S;ne.offsetXYFromParent=$S;ne.outerHeight=NS;ne.outerWidth=DS;ne.removeClassName=ig;ne.removeEvent=TS;ne.removeUserSelectStyles=WS;var Ke=It,vf=RS(Xn);function ng(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ng=function(r){return r?n:t})(e)}function RS(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ng(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}let ji="";function rg(e,t){return ji||(ji=(0,Ke.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,Ke.isFunction)(e[n])})),(0,Ke.isFunction)(e[ji])?e[ji](t):!1}function _S(e,t,n){let r=e;do{if(rg(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function IS(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function TS(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function NS(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,Ke.int)(n.borderTopWidth),t+=(0,Ke.int)(n.borderBottomWidth),t}function DS(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,Ke.int)(n.borderLeftWidth),t+=(0,Ke.int)(n.borderRightWidth),t}function OS(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,Ke.int)(n.paddingTop),t-=(0,Ke.int)(n.paddingBottom),t}function MS(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,Ke.int)(n.paddingLeft),t-=(0,Ke.int)(n.paddingRight),t}function $S(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-o.left)/n,s=(e.clientY+t.scrollTop-o.top)/n;return{x:i,y:s}}function AS(e,t){const n=Rc(e,t,"px");return{[(0,vf.browserPrefixToKey)("transform",vf.default)]:n}}function LS(e,t){return Rc(e,t,"")}function Rc(e,t,n){let{x:r,y:o}=e,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(s,", ").concat(a,")")+i}return i}function FS(e,t){return e.targetTouches&&(0,Ke.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,Ke.findInArray)(e.changedTouches,n=>t===n.identifier)}function BS(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function US(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&og(e.body,"react-draggable-transparent-selection")}function WS(e){if(e)try{if(e.body&&ig(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function og(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function ig(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canDragX=ZS;Tt.canDragY=GS;Tt.createCoreData=YS;Tt.createDraggableData=QS;Tt.getBoundPosition=HS;Tt.getControlPosition=XS;Tt.snapToGrid=VS;var Ze=It,vr=ne;function HS(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:KS(r);const o=_c(e);if(typeof r=="string"){const{ownerDocument:i}=o,s=i.defaultView;let a;if(r==="parent"?a=o.parentNode:a=i.querySelector(r),!(a instanceof s.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const u=a,c=s.getComputedStyle(o),d=s.getComputedStyle(u);r={left:-o.offsetLeft+(0,Ze.int)(d.paddingLeft)+(0,Ze.int)(c.marginLeft),top:-o.offsetTop+(0,Ze.int)(d.paddingTop)+(0,Ze.int)(c.marginTop),right:(0,vr.innerWidth)(u)-(0,vr.outerWidth)(o)-o.offsetLeft+(0,Ze.int)(d.paddingRight)-(0,Ze.int)(c.marginRight),bottom:(0,vr.innerHeight)(u)-(0,vr.outerHeight)(o)-o.offsetTop+(0,Ze.int)(d.paddingBottom)-(0,Ze.int)(c.marginBottom)}}return(0,Ze.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,Ze.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Ze.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,Ze.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function VS(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function ZS(e){return e.props.axis==="both"||e.props.axis==="x"}function GS(e){return e.props.axis==="both"||e.props.axis==="y"}function XS(e,t,n){const r=typeof t=="number"?(0,vr.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=_c(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,vr.offsetXYFromParent)(r||e,i,n.props.scale)}function YS(e,t,n){const r=!(0,Ze.isNum)(e.lastX),o=_c(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function QS(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function KS(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function _c(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var oa={},ia={};Object.defineProperty(ia,"__esModule",{value:!0});ia.default=JS;function JS(){}Object.defineProperty(oa,"__esModule",{value:!0});oa.default=void 0;var el=eb(z),$e=Ic(Jm),qS=Ic(Xo),Ce=ne,Xt=Tt,tl=It,eo=Ic(ia);function Ic(e){return e&&e.__esModule?e:{default:e}}function sg(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(sg=function(r){return r?n:t})(e)}function eb(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=sg(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function Ie(e,t,n){return t=tb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tb(e){var t=nb(e,"string");return typeof t=="symbol"?t:String(t)}function nb(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const pt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Yt=pt.mouse,sa=class extends el.Component{constructor(){super(...arguments),Ie(this,"dragging",!1),Ie(this,"lastX",NaN),Ie(this,"lastY",NaN),Ie(this,"touchIdentifier",null),Ie(this,"mounted",!1),Ie(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,Ce.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,Ce.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,Ce.getTouchIdentifier)(t);this.touchIdentifier=o;const i=(0,Xt.getControlPosition)(t,o,this);if(i==null)return;const{x:s,y:a}=i,u=(0,Xt.createCoreData)(this,s,a);(0,eo.default)("DraggableCore: handleDragStart: %j",u),(0,eo.default)("calling",this.props.onStart),!(this.props.onStart(t,u)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,Ce.addUserSelectStyles)(r),this.dragging=!0,this.lastX=s,this.lastY=a,(0,Ce.addEvent)(r,Yt.move,this.handleDrag),(0,Ce.addEvent)(r,Yt.stop,this.handleDragStop))}),Ie(this,"handleDrag",t=>{const n=(0,Xt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let a=r-this.lastX,u=o-this.lastY;if([a,u]=(0,Xt.snapToGrid)(this.props.grid,a,u),!a&&!u)return;r=this.lastX+a,o=this.lastY+u}const i=(0,Xt.createCoreData)(this,r,o);if((0,eo.default)("DraggableCore: handleDrag: %j",i),this.props.onDrag(t,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const u=document.createEvent("MouseEvents");u.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(u)}return}this.lastX=r,this.lastY=o}),Ie(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Xt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let u=r-this.lastX||0,c=o-this.lastY||0;[u,c]=(0,Xt.snapToGrid)(this.props.grid,u,c),r=this.lastX+u,o=this.lastY+c}const i=(0,Xt.createCoreData)(this,r,o);if(this.props.onStop(t,i)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,Ce.removeUserSelectStyles)(a.ownerDocument),(0,eo.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,eo.default)("DraggableCore: Removing handlers"),(0,Ce.removeEvent)(a.ownerDocument,Yt.move,this.handleDrag),(0,Ce.removeEvent)(a.ownerDocument,Yt.stop,this.handleDragStop))}),Ie(this,"onMouseDown",t=>(Yt=pt.mouse,this.handleDragStart(t))),Ie(this,"onMouseUp",t=>(Yt=pt.mouse,this.handleDragStop(t))),Ie(this,"onTouchStart",t=>(Yt=pt.touch,this.handleDragStart(t))),Ie(this,"onTouchEnd",t=>(Yt=pt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,Ce.addEvent)(t,pt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,Ce.removeEvent)(n,pt.mouse.move,this.handleDrag),(0,Ce.removeEvent)(n,pt.touch.move,this.handleDrag),(0,Ce.removeEvent)(n,pt.mouse.stop,this.handleDragStop),(0,Ce.removeEvent)(n,pt.touch.stop,this.handleDragStop),(0,Ce.removeEvent)(t,pt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Ce.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:qS.default.findDOMNode(this)}render(){return el.cloneElement(el.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};oa.default=sa;Ie(sa,"displayName","DraggableCore");Ie(sa,"propTypes",{allowAnyClick:$e.default.bool,children:$e.default.node.isRequired,disabled:$e.default.bool,enableUserSelectHack:$e.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:$e.default.arrayOf($e.default.number),handle:$e.default.string,cancel:$e.default.string,nodeRef:$e.default.object,onStart:$e.default.func,onDrag:$e.default.func,onStop:$e.default.func,onMouseDown:$e.default.func,scale:$e.default.number,className:tl.dontSetMe,style:tl.dontSetMe,transform:tl.dontSetMe});Ie(sa,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var t=m(z),n=d(Jm),r=d(Xo),o=d(SS),i=ne,s=Tt,a=It,u=d(oa),c=d(ia);function d(f){return f&&f.__esModule?f:{default:f}}function p(f){if(typeof WeakMap!="function")return null;var h=new WeakMap,S=new WeakMap;return(p=function(j){return j?S:h})(f)}function m(f,h){if(f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var S=p(h);if(S&&S.has(f))return S.get(f);var j={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in f)if(C!=="default"&&Object.prototype.hasOwnProperty.call(f,C)){var R=E?Object.getOwnPropertyDescriptor(f,C):null;R&&(R.get||R.set)?Object.defineProperty(j,C,R):j[C]=f[C]}return j.default=f,S&&S.set(f,j),j}function x(){return x=Object.assign?Object.assign.bind():function(f){for(var h=1;h<arguments.length;h++){var S=arguments[h];for(var j in S)Object.prototype.hasOwnProperty.call(S,j)&&(f[j]=S[j])}return f},x.apply(this,arguments)}function y(f,h,S){return h=w(h),h in f?Object.defineProperty(f,h,{value:S,enumerable:!0,configurable:!0,writable:!0}):f[h]=S,f}function w(f){var h=b(f,"string");return typeof h=="symbol"?h:String(h)}function b(f,h){if(typeof f!="object"||f===null)return f;var S=f[Symbol.toPrimitive];if(S!==void 0){var j=S.call(f,h);if(typeof j!="object")return j;throw new TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(f)}class g extends t.Component{static getDerivedStateFromProps(h,S){let{position:j}=h,{prevPropsPosition:E}=S;return j&&(!E||j.x!==E.x||j.y!==E.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:j,prevPropsPosition:E}),{x:j.x,y:j.y,prevPropsPosition:{...j}}):null}constructor(h){super(h),y(this,"onDragStart",(S,j)=>{if((0,c.default)("Draggable: onDragStart: %j",j),this.props.onStart(S,(0,s.createDraggableData)(this,j))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),y(this,"onDrag",(S,j)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",j);const E=(0,s.createDraggableData)(this,j),C={x:E.x,y:E.y,slackX:0,slackY:0};if(this.props.bounds){const{x:k,y:_}=C;C.x+=this.state.slackX,C.y+=this.state.slackY;const[M,$]=(0,s.getBoundPosition)(this,C.x,C.y);C.x=M,C.y=$,C.slackX=this.state.slackX+(k-C.x),C.slackY=this.state.slackY+(_-C.y),E.x=C.x,E.y=C.y,E.deltaX=C.x-this.state.x,E.deltaY=C.y-this.state.y}if(this.props.onDrag(S,E)===!1)return!1;this.setState(C)}),y(this,"onDragStop",(S,j)=>{if(!this.state.dragging||this.props.onStop(S,(0,s.createDraggableData)(this,j))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",j);const C={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:k,y:_}=this.props.position;C.x=k,C.y=_}this.setState(C)}),this.state={dragging:!1,dragged:!1,x:h.position?h.position.x:h.defaultPosition.x,y:h.position?h.position.y:h.defaultPosition.y,prevPropsPosition:{...h.position},slackX:0,slackY:0,isElementSVG:!1},h.position&&!(h.onDrag||h.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var h,S;return(h=(S=this.props)===null||S===void 0||(S=S.nodeRef)===null||S===void 0?void 0:S.current)!==null&&h!==void 0?h:r.default.findDOMNode(this)}render(){const{axis:h,bounds:S,children:j,defaultPosition:E,defaultClassName:C,defaultClassNameDragging:R,defaultClassNameDragged:k,position:_,positionOffset:M,scale:$,...B}=this.props;let Me={},tt=null;const _e=!!!_||this.state.dragging,T=_||E,D={x:(0,s.canDragX)(this)&&_e?this.state.x:T.x,y:(0,s.canDragY)(this)&&_e?this.state.y:T.y};this.state.isElementSVG?tt=(0,i.createSVGTransform)(D,M):Me=(0,i.createCSSTransform)(D,M);const O=(0,o.default)(j.props.className||"",C,{[R]:this.state.dragging,[k]:this.state.dragged});return t.createElement(u.default,x({},B,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(j),{className:O,style:{...j.props.style,...Me},transform:tt}))}}e.default=g,y(g,"displayName","Draggable"),y(g,"propTypes",{...u.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:a.dontSetMe,style:a.dontSetMe,transform:a.dontSetMe}),y(g,"defaultProps",{...u.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Xm);const{default:ag,DraggableCore:rb}=Xm;ra.exports=ag;ra.exports.default=ag;ra.exports.DraggableCore=rb;var ob=ra.exports;const ib=Eu(ob);var ie=function(){return ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ie.apply(this,arguments)},yf={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},xf={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},ki={width:"20px",height:"20px",position:"absolute",zIndex:1},sb={top:ie(ie({},yf),{top:"-5px"}),right:ie(ie({},xf),{left:void 0,right:"-5px"}),bottom:ie(ie({},yf),{top:void 0,bottom:"-5px"}),left:ie(ie({},xf),{left:"-5px"}),topRight:ie(ie({},ki),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:ie(ie({},ki),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:ie(ie({},ki),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:ie(ie({},ki),{left:"-10px",top:"-10px",cursor:"nw-resize"})},ab=z.memo(function(e){var t=e.onResizeStart,n=e.direction,r=e.children,o=e.replaceStyles,i=e.className,s=z.useCallback(function(c){t(c,n)},[t,n]),a=z.useCallback(function(c){t(c,n)},[t,n]),u=z.useMemo(function(){return ie(ie({position:"absolute",userSelect:"none"},sb[n]),o??{})},[o,n]);return l.jsx("div",{className:i||void 0,style:u,onMouseDown:s,onTouchStart:a,children:r})}),lb=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Et=function(){return Et=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Et.apply(this,arguments)},ub={width:"auto",height:"auto"},Ei=function(e,t,n){return Math.max(Math.min(e,n),t)},wf=function(e,t,n){var r=Math.round(e/t);return r*t+n*(r-1)},Kn=function(e,t){return new RegExp(e,"i").test(t)},zi=function(e){return!!(e.touches&&e.touches.length)},cb=function(e){return!!((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},Sf=function(e,t,n){n===void 0&&(n=0);var r=t.reduce(function(i,s,a){return Math.abs(s-e)<Math.abs(t[i]-e)?a:i},0),o=Math.abs(t[r]-e);return n===0||o<n?t[r]:e},nl=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:"".concat(e,"px")},Pi=function(e,t,n,r){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var o=Number(e.replace("%",""))/100;return t*o}if(e.endsWith("vw")){var o=Number(e.replace("vw",""))/100;return n*o}if(e.endsWith("vh")){var o=Number(e.replace("vh",""))/100;return r*o}}return e},db=function(e,t,n,r,o,i,s){return r=Pi(r,e.width,t,n),o=Pi(o,e.height,t,n),i=Pi(i,e.width,t,n),s=Pi(s,e.height,t,n),{maxWidth:typeof r>"u"?void 0:Number(r),maxHeight:typeof o>"u"?void 0:Number(o),minWidth:typeof i>"u"?void 0:Number(i),minHeight:typeof s>"u"?void 0:Number(s)}},fb=function(e){return Array.isArray(e)?e:[e,e]},pb=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],bf="__resizable_base__",hb=function(e){lb(t,e);function t(n){var r,o,i,s,a=e.call(this,n)||this;return a.ratio=1,a.resizable=null,a.parentLeft=0,a.parentTop=0,a.resizableLeft=0,a.resizableRight=0,a.resizableTop=0,a.resizableBottom=0,a.targetLeft=0,a.targetTop=0,a.delta={width:0,height:0},a.appendBase=function(){if(!a.resizable||!a.window)return null;var u=a.parentNode;if(!u)return null;var c=a.window.document.createElement("div");return c.style.width="100%",c.style.height="100%",c.style.position="absolute",c.style.transform="scale(0, 0)",c.style.left="0",c.style.flex="0 0 100%",c.classList?c.classList.add(bf):c.className+=bf,u.appendChild(c),c},a.removeBase=function(u){var c=a.parentNode;c&&c.removeChild(u)},a.state={isResizing:!1,width:(o=(r=a.propsSize)===null||r===void 0?void 0:r.width)!==null&&o!==void 0?o:"auto",height:(s=(i=a.propsSize)===null||i===void 0?void 0:i.height)!==null&&s!==void 0?s:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},a.onResizeStart=a.onResizeStart.bind(a),a.onMouseMove=a.onMouseMove.bind(a),a.onMouseUp=a.onMouseUp.bind(a),a}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||ub},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var n=0,r=0;if(this.resizable&&this.window){var o=this.resizable.offsetWidth,i=this.resizable.offsetHeight,s=this.resizable.style.position;s!=="relative"&&(this.resizable.style.position="relative"),n=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:o,r=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:i,this.resizable.style.position=s}return{width:n,height:r}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var n=this,r=this.props.size,o=function(a){var u;if(typeof n.state[a]>"u"||n.state[a]==="auto")return"auto";if(n.propsSize&&n.propsSize[a]&&(!((u=n.propsSize[a])===null||u===void 0)&&u.toString().endsWith("%"))){if(n.state[a].toString().endsWith("%"))return n.state[a].toString();var c=n.getParentSize(),d=Number(n.state[a].toString().replace("px","")),p=d/c[a]*100;return"".concat(p,"%")}return nl(n.state[a])},i=r&&typeof r.width<"u"&&!this.state.isResizing?nl(r.width):o("width"),s=r&&typeof r.height<"u"&&!this.state.isResizing?nl(r.height):o("height");return{width:i,height:s}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var n=this.appendBase();if(!n)return{width:0,height:0};var r=!1,o=this.parentNode.style.flexWrap;o!=="wrap"&&(r=!0,this.parentNode.style.flexWrap="wrap"),n.style.position="relative",n.style.minWidth="100%",n.style.minHeight="100%";var i={width:n.offsetWidth,height:n.offsetHeight};return r&&(this.parentNode.style.flexWrap=o),this.removeBase(n),i},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var n=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:n.flexBasis!=="auto"?n.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(n,r){var o=this.propsSize&&this.propsSize[r];return this.state[r]==="auto"&&this.state.original[r]===n&&(typeof o>"u"||o==="auto")?"auto":n},t.prototype.calculateNewMaxFromBoundary=function(n,r){var o=this.props.boundsByDirection,i=this.state.direction,s=o&&Kn("left",i),a=o&&Kn("top",i),u,c;if(this.props.bounds==="parent"){var d=this.parentNode;d&&(u=s?this.resizableRight-this.parentLeft:d.offsetWidth+(this.parentLeft-this.resizableLeft),c=a?this.resizableBottom-this.parentTop:d.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(u=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,c=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(u=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),c=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return u&&Number.isFinite(u)&&(n=n&&n<u?n:u),c&&Number.isFinite(c)&&(r=r&&r<c?r:c),{maxWidth:n,maxHeight:r}},t.prototype.calculateNewSizeFromDirection=function(n,r){var o=this.props.scale||1,i=fb(this.props.resizeRatio||1),s=i[0],a=i[1],u=this.state,c=u.direction,d=u.original,p=this.props,m=p.lockAspectRatio,x=p.lockAspectRatioExtraHeight,y=p.lockAspectRatioExtraWidth,w=d.width,b=d.height,g=x||0,f=y||0;return Kn("right",c)&&(w=d.width+(n-d.x)*s/o,m&&(b=(w-f)/this.ratio+g)),Kn("left",c)&&(w=d.width-(n-d.x)*s/o,m&&(b=(w-f)/this.ratio+g)),Kn("bottom",c)&&(b=d.height+(r-d.y)*a/o,m&&(w=(b-g)*this.ratio+f)),Kn("top",c)&&(b=d.height-(r-d.y)*a/o,m&&(w=(b-g)*this.ratio+f)),{newWidth:w,newHeight:b}},t.prototype.calculateNewSizeFromAspectRatio=function(n,r,o,i){var s=this.props,a=s.lockAspectRatio,u=s.lockAspectRatioExtraHeight,c=s.lockAspectRatioExtraWidth,d=typeof i.width>"u"?10:i.width,p=typeof o.width>"u"||o.width<0?n:o.width,m=typeof i.height>"u"?10:i.height,x=typeof o.height>"u"||o.height<0?r:o.height,y=u||0,w=c||0;if(a){var b=(m-y)*this.ratio+w,g=(x-y)*this.ratio+w,f=(d-w)/this.ratio+y,h=(p-w)/this.ratio+y,S=Math.max(d,b),j=Math.min(p,g),E=Math.max(m,f),C=Math.min(x,h);n=Ei(n,S,j),r=Ei(r,E,C)}else n=Ei(n,d,p),r=Ei(r,m,x);return{newWidth:n,newHeight:r}},t.prototype.setBoundingClientRect=function(){var n=1/(this.props.scale||1);if(this.props.bounds==="parent"){var r=this.parentNode;if(r){var o=r.getBoundingClientRect();this.parentLeft=o.left*n,this.parentTop=o.top*n}}if(this.props.bounds&&typeof this.props.bounds!="string"){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left*n,this.targetTop=i.top*n}if(this.resizable){var s=this.resizable.getBoundingClientRect(),a=s.left,u=s.top,c=s.right,d=s.bottom;this.resizableLeft=a*n,this.resizableRight=c*n,this.resizableTop=u*n,this.resizableBottom=d*n}},t.prototype.onResizeStart=function(n,r){if(!(!this.resizable||!this.window)){var o=0,i=0;if(n.nativeEvent&&cb(n.nativeEvent)?(o=n.nativeEvent.clientX,i=n.nativeEvent.clientY):n.nativeEvent&&zi(n.nativeEvent)&&(o=n.nativeEvent.touches[0].clientX,i=n.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var s=this.props.onResizeStart(n,r,this.resizable);if(s===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var a,u=this.window.getComputedStyle(this.resizable);if(u.flexBasis!=="auto"){var c=this.parentNode;if(c){var d=this.window.getComputedStyle(c).flexDirection;this.flexDir=d.startsWith("row")?"row":"column",a=u.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var p={original:{x:o,y:i,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:Et(Et({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(n.target).cursor||"auto"}),direction:r,flexBasis:a};this.setState(p)}},t.prototype.onMouseMove=function(n){var r=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&zi(n))try{n.preventDefault(),n.stopPropagation()}catch{}var o=this.props,i=o.maxWidth,s=o.maxHeight,a=o.minWidth,u=o.minHeight,c=zi(n)?n.touches[0].clientX:n.clientX,d=zi(n)?n.touches[0].clientY:n.clientY,p=this.state,m=p.direction,x=p.original,y=p.width,w=p.height,b=this.getParentSize(),g=db(b,this.window.innerWidth,this.window.innerHeight,i,s,a,u);i=g.maxWidth,s=g.maxHeight,a=g.minWidth,u=g.minHeight;var f=this.calculateNewSizeFromDirection(c,d),h=f.newHeight,S=f.newWidth,j=this.calculateNewMaxFromBoundary(i,s);this.props.snap&&this.props.snap.x&&(S=Sf(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(h=Sf(h,this.props.snap.y,this.props.snapGap));var E=this.calculateNewSizeFromAspectRatio(S,h,{width:j.maxWidth,height:j.maxHeight},{width:a,height:u});if(S=E.newWidth,h=E.newHeight,this.props.grid){var C=wf(S,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),R=wf(h,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),k=this.props.snapGap||0,_=k===0||Math.abs(C-S)<=k?C:S,M=k===0||Math.abs(R-h)<=k?R:h;S=_,h=M}var $={width:S-x.width,height:h-x.height};if(this.delta=$,y&&typeof y=="string"){if(y.endsWith("%")){var B=S/b.width*100;S="".concat(B,"%")}else if(y.endsWith("vw")){var Me=S/this.window.innerWidth*100;S="".concat(Me,"vw")}else if(y.endsWith("vh")){var tt=S/this.window.innerHeight*100;S="".concat(tt,"vh")}}if(w&&typeof w=="string"){if(w.endsWith("%")){var B=h/b.height*100;h="".concat(B,"%")}else if(w.endsWith("vw")){var Me=h/this.window.innerWidth*100;h="".concat(Me,"vw")}else if(w.endsWith("vh")){var tt=h/this.window.innerHeight*100;h="".concat(tt,"vh")}}var ve={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(h,"height")};this.flexDir==="row"?ve.flexBasis=ve.width:this.flexDir==="column"&&(ve.flexBasis=ve.height);var _e=this.state.width!==ve.width,T=this.state.height!==ve.height,D=this.state.flexBasis!==ve.flexBasis,O=_e||T||D;O&&Xo.flushSync(function(){r.setState(ve)}),this.props.onResize&&O&&this.props.onResize(n,m,this.resizable,$)}},t.prototype.onMouseUp=function(n){var r,o,i=this.state,s=i.isResizing,a=i.direction;i.original,!(!s||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(n,a,this.resizable,this.delta),this.props.size&&this.setState({width:(r=this.props.size.width)!==null&&r!==void 0?r:"auto",height:(o=this.props.size.height)!==null&&o!==void 0?o:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:Et(Et({},this.state.backgroundStyle),{cursor:"auto"})}))},t.prototype.updateSize=function(n){var r,o;this.setState({width:(r=n.width)!==null&&r!==void 0?r:"auto",height:(o=n.height)!==null&&o!==void 0?o:"auto"})},t.prototype.renderResizer=function(){var n=this,r=this.props,o=r.enable,i=r.handleStyles,s=r.handleClasses,a=r.handleWrapperStyle,u=r.handleWrapperClass,c=r.handleComponent;if(!o)return null;var d=Object.keys(o).map(function(p){return o[p]!==!1?l.jsx(ab,{direction:p,onResizeStart:n.onResizeStart,replaceStyles:i&&i[p],className:s&&s[p],children:c&&c[p]?c[p]:null},p):null});return l.jsx("div",{className:u,style:a,children:d})},t.prototype.render=function(){var n=this,r=Object.keys(this.props).reduce(function(s,a){return pb.indexOf(a)!==-1||(s[a]=n.props[a]),s},{}),o=Et(Et(Et({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var i=this.props.as||"div";return l.jsxs(i,Et({style:o,className:this.props.className},r,{ref:function(s){s&&(n.resizable=s)},children:[this.state.isResizing&&l.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(z.PureComponent);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var xu=function(e,t){return xu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},xu(e,t)};function mb(e,t){xu(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ce=function(){return ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ce.apply(this,arguments)};function gb(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var vb={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},yb=function(e){return{bottom:e,bottomLeft:e,bottomRight:e,left:e,right:e,top:e,topLeft:e,topRight:e}},xb=function(e){mb(t,e);function t(n){var r=e.call(this,n)||this;return r.resizingPosition={x:0,y:0},r.offsetFromParent={left:0,top:0},r.resizableElement={current:null},r.originalPosition={x:0,y:0},r.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:n.maxWidth,maxHeight:n.maxHeight},r.onResizeStart=r.onResizeStart.bind(r),r.onResize=r.onResize.bind(r),r.onResizeStop=r.onResizeStop.bind(r),r.onDragStart=r.onDragStart.bind(r),r.onDrag=r.onDrag.bind(r),r.onDragStop=r.onDragStop.bind(r),r.getMaxSizesFromProps=r.getMaxSizesFromProps.bind(r),r}return t.prototype.componentDidMount=function(){this.updateOffsetFromParent();var n=this.offsetFromParent,r=n.left,o=n.top,i=this.getDraggablePosition(),s=i.x,a=i.y;this.draggable.setState({x:s-r,y:a-o}),this.forceUpdate()},t.prototype.getDraggablePosition=function(){var n=this.draggable.state,r=n.x,o=n.y;return{x:r,y:o}},t.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},t.prototype.getParentSize=function(){return this.resizable.getParentSize()},t.prototype.getMaxSizesFromProps=function(){var n=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,r=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:n,maxHeight:r}},t.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},t.prototype.getOffsetHeight=function(n){var r=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/r;case"body":return document.body.offsetHeight/r;default:return n.offsetHeight}},t.prototype.getOffsetWidth=function(n){var r=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/r;case"body":return document.body.offsetWidth/r;default:return n.offsetWidth}},t.prototype.onDragStart=function(n,r){this.props.onDragStart&&this.props.onDragStart(n,r);var o=this.getDraggablePosition();if(this.originalPosition=o,!!this.props.bounds){var i=this.getParent(),s=this.props.scale,a;if(this.props.bounds==="parent")a=i;else if(this.props.bounds==="body"){var u=i.getBoundingClientRect(),c=u.left,d=u.top,p=document.body.getBoundingClientRect(),m=-(c-i.offsetLeft*s-p.left)/s,x=-(d-i.offsetTop*s-p.top)/s,y=(document.body.offsetWidth-this.resizable.size.width*s)/s+m,w=(document.body.offsetHeight-this.resizable.size.height*s)/s+x;return this.setState({bounds:{top:x,right:y,bottom:w,left:m}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var b=i.getBoundingClientRect(),g=b.left,f=b.top,h=-(g-i.offsetLeft*s)/s,S=-(f-i.offsetTop*s)/s,y=(window.innerWidth-this.resizable.size.width*s)/s+h,w=(window.innerHeight-this.resizable.size.height*s)/s+S;return this.setState({bounds:{top:S,right:y,bottom:w,left:h}})}else typeof this.props.bounds=="string"?a=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(a=this.props.bounds);if(!(!(a instanceof HTMLElement)||!(i instanceof HTMLElement))){var j=a.getBoundingClientRect(),E=j.left,C=j.top,R=i.getBoundingClientRect(),k=R.left,_=R.top,M=(E-k)/s,$=C-_;if(this.resizable){this.updateOffsetFromParent();var B=this.offsetFromParent;this.setState({bounds:{top:$-B.top,right:M+(a.offsetWidth-this.resizable.size.width)-B.left/s,bottom:$+(a.offsetHeight-this.resizable.size.height)-B.top,left:M-B.left/s}})}}}},t.prototype.onDrag=function(n,r){if(this.props.onDrag){var o=this.offsetFromParent,i=o.left,s=o.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(n,ce(ce({},r),{x:r.x+i,y:r.y+s}));if(this.props.dragAxis==="x")return this.props.onDrag(n,ce(ce({},r),{x:r.x+i,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(n,ce(ce({},r),{x:this.originalPosition.x+i,y:r.y+s,deltaX:0}))}},t.prototype.onDragStop=function(n,r){if(this.props.onDragStop){var o=this.offsetFromParent,i=o.left,s=o.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(n,ce(ce({},r),{x:r.x+i,y:r.y+s}));if(this.props.dragAxis==="x")return this.props.onDragStop(n,ce(ce({},r),{x:r.x+i,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(n,ce(ce({},r),{x:this.originalPosition.x+i,y:r.y+s,deltaX:0}))}},t.prototype.onResizeStart=function(n,r,o){n.stopPropagation(),this.setState({resizing:!0});var i=this.props.scale,s=this.offsetFromParent,a=this.getDraggablePosition();if(this.resizingPosition={x:a.x+s.left,y:a.y+s.top},this.originalPosition=a,this.props.bounds){var u=this.getParent(),c=void 0;this.props.bounds==="parent"?c=u:this.props.bounds==="body"?c=document.body:this.props.bounds==="window"?c=window:typeof this.props.bounds=="string"?c=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(c=this.props.bounds);var d=this.getSelfElement();if(d instanceof Element&&(c instanceof HTMLElement||c===window)&&u instanceof HTMLElement){var p=this.getMaxSizesFromProps(),m=p.maxWidth,x=p.maxHeight,y=this.getParentSize();if(m&&typeof m=="string")if(m.endsWith("%")){var w=Number(m.replace("%",""))/100;m=y.width*w}else m.endsWith("px")&&(m=Number(m.replace("px","")));if(x&&typeof x=="string")if(x.endsWith("%")){var w=Number(x.replace("%",""))/100;x=y.height*w}else x.endsWith("px")&&(x=Number(x.replace("px","")));var b=d.getBoundingClientRect(),g=b.left,f=b.top,h=this.props.bounds==="window"?{left:0,top:0}:c.getBoundingClientRect(),S=h.left,j=h.top,E=this.getOffsetWidth(c),C=this.getOffsetHeight(c),R=r.toLowerCase().endsWith("left"),k=r.toLowerCase().endsWith("right"),_=r.startsWith("top"),M=r.startsWith("bottom");if((R||_)&&this.resizable){var $=(g-S)/i+this.resizable.size.width;this.setState({maxWidth:$>Number(m)?m:$})}if(k||this.props.lockAspectRatio&&!R&&!_){var $=E+(S-g)/i;this.setState({maxWidth:$>Number(m)?m:$})}if((_||R)&&this.resizable){var $=(f-j)/i+this.resizable.size.height;this.setState({maxHeight:$>Number(x)?x:$})}if(M||this.props.lockAspectRatio&&!_&&!R){var $=C+(j-f)/i;this.setState({maxHeight:$>Number(x)?x:$})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(n,r,o)},t.prototype.onResize=function(n,r,o,i){var s=this,a={x:this.originalPosition.x,y:this.originalPosition.y},u=-i.width,c=-i.height,d=["top","left","topLeft","bottomLeft","topRight"];d.includes(r)&&(r==="bottomLeft"?a.x+=u:(r==="topRight"||(a.x+=u),a.y+=c));var p=this.draggable.state;(a.x!==p.x||a.y!==p.y)&&Xo.flushSync(function(){s.draggable.setState(a)}),this.updateOffsetFromParent();var m=this.offsetFromParent,x=this.getDraggablePosition().x+m.left,y=this.getDraggablePosition().y+m.top;this.resizingPosition={x,y},this.props.onResize&&this.props.onResize(n,r,o,i,{x,y})},t.prototype.onResizeStop=function(n,r,o,i){this.setState({resizing:!1});var s=this.getMaxSizesFromProps(),a=s.maxWidth,u=s.maxHeight;this.setState({maxWidth:a,maxHeight:u}),this.props.onResizeStop&&this.props.onResizeStop(n,r,o,i,this.resizingPosition)},t.prototype.updateSize=function(n){this.resizable&&this.resizable.updateSize({width:n.width,height:n.height})},t.prototype.updatePosition=function(n){this.draggable.setState(n)},t.prototype.updateOffsetFromParent=function(){var n=this.props.scale,r=this.getParent(),o=this.getSelfElement();if(!r||o===null)return{top:0,left:0};var i=r.getBoundingClientRect(),s=i.left,a=i.top,u=o.getBoundingClientRect(),c=this.getDraggablePosition(),d=r.scrollLeft,p=r.scrollTop;this.offsetFromParent={left:u.left-s+d-c.x*n,top:u.top-a+p-c.y*n}},t.prototype.render=function(){var n=this,r=this.props,o=r.disableDragging,i=r.style,s=r.dragHandleClassName,a=r.position,u=r.onMouseDown,c=r.onMouseUp,d=r.dragAxis,p=r.dragGrid,m=r.bounds,x=r.enableUserSelectHack,y=r.cancel,w=r.children;r.onResizeStart,r.onResize,r.onResizeStop,r.onDragStart,r.onDrag,r.onDragStop;var b=r.resizeHandleStyles,g=r.resizeHandleClasses,f=r.resizeHandleComponent,h=r.enableResizing,S=r.resizeGrid,j=r.resizeHandleWrapperClass,E=r.resizeHandleWrapperStyle,C=r.scale,R=r.allowAnyClick,k=r.dragPositionOffset,_=gb(r,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),M=this.props.default?ce({},this.props.default):void 0;delete _.default;var $=o||s?{cursor:"auto"}:{cursor:"move"},B=ce(ce(ce({},vb),$),i),Me=this.offsetFromParent,tt=Me.left,ve=Me.top,_e;a&&(_e={x:a.x-tt,y:a.y-ve});var T=this.state.resizing?void 0:_e,D=this.state.resizing?"both":d;return z.createElement(ib,{ref:function(O){O&&(n.draggable=O)},handle:s?".".concat(s):void 0,defaultPosition:M,onMouseDown:u,onMouseUp:c,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:D,disabled:o,grid:p,bounds:m?this.state.bounds:void 0,position:T,enableUserSelectHack:x,cancel:y,scale:C,allowAnyClick:R,nodeRef:this.resizableElement,positionOffset:k},z.createElement(hb,ce({},_,{ref:function(O){O&&(n.resizable=O,n.resizableElement.current=O.resizable)},defaultSize:M,size:this.props.size,enable:typeof h=="boolean"?yb(h):h,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:B,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:S,handleWrapperClass:j,handleWrapperStyle:E,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:b,handleClasses:g,handleComponent:f,scale:this.props.scale}),w))},t.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},t}(z.PureComponent);const wb=v.div`
  background: ${e=>e.$isSelected?"#ffd700":"white"};
  height: 100%;
  width: 100%;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${e=>e.$isSelectable?"pointer":"default"};
  transition: all 0.3s ease;
  border: ${e=>e.$isSelected?"2px solid #000":"1px solid #ddd"};

  &:hover {
    transform: ${e=>e.$isSelectable?"scale(1.05)":"none"};
    box-shadow: ${e=>e.$isSelectable?"0 4px 8px rgba(0,0,0,0.2)":"none"};
  }
`,Sb=v.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
`,bb=v.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`,Cb=v.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`,lg=({item:e,updatePosition:t,updateSize:n,onSelect:r,isSelectable:o=!1})=>{const i=()=>{o&&r&&r(e)};return l.jsx(xb,{bounds:"parent",position:{x:e.x,y:e.y},size:{width:e.width,height:e.height},enableResizing:!o,enableDragging:!o,onDragStop:(s,a)=>{o||t(e.id,a.x,a.y)},onResizeStop:(s,a,u,c,d)=>{if(!o){const p=parseFloat(u.style.width),m=parseFloat(u.style.height);n(e.id,p,m),t(e.id,d.x,d.y)}},children:l.jsxs(wb,{$isSelectable:o,$isSelected:!1,onClick:i,children:[l.jsx(Sb,{children:e.label}),e.seats&&l.jsxs(Cb,{children:[e.seats," мест"]}),l.jsx(bb,{children:e.type})]})})},jb=v.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`,kb=v.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,Eb=v.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`,zb=v.div`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #fff;
`,Pb=v.h3`
  color: #ffd700;
  margin: 0 0 0.5rem 0;
`,Rb=v.p`
  margin: 0;
  color: #ccc;
`,_b=v.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Ib=({zoneItems:e,onTableSelect:t,selectedTable:n,onContinue:r})=>{const o=e.filter(s=>s.type==="table"),i=s=>{t(s)};return l.jsxs(St,{children:[l.jsx(kb,{children:"Выберите стол для бронирования"}),l.jsx(Eb,{children:"Кликните на стол, который хотите забронировать"}),n&&l.jsxs(zb,{children:[l.jsxs(Pb,{children:["Выбранный стол: ",n.label]}),l.jsxs(Rb,{children:["Количество мест: ",n.seats||"Не указано"]}),l.jsx(_b,{onClick:r,children:"Продолжить бронирование"})]}),l.jsx(jb,{children:o.map(s=>l.jsx(lg,{item:s,updatePosition:()=>{},updateSize:()=>{},onSelect:i,isSelectable:!0},s.id))})]})};function ug(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tb}=Object.prototype,{getPrototypeOf:Tc}=Object,{iterator:aa,toStringTag:cg}=Symbol,la=(e=>t=>{const n=Tb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),bt=e=>(e=e.toLowerCase(),t=>la(t)===e),ua=e=>t=>typeof t===e,{isArray:Ur}=Array,Uo=ua("undefined");function Jo(e){return e!==null&&!Uo(e)&&e.constructor!==null&&!Uo(e.constructor)&&We(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dg=bt("ArrayBuffer");function Nb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dg(e.buffer),t}const Db=ua("string"),We=ua("function"),fg=ua("number"),qo=e=>e!==null&&typeof e=="object",Ob=e=>e===!0||e===!1,qi=e=>{if(la(e)!=="object")return!1;const t=Tc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(cg in e)&&!(aa in e)},Mb=e=>{if(!qo(e)||Jo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},$b=bt("Date"),Ab=bt("File"),Lb=bt("Blob"),Fb=bt("FileList"),Bb=e=>qo(e)&&We(e.pipe),Ub=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||We(e.append)&&((t=la(e))==="formdata"||t==="object"&&We(e.toString)&&e.toString()==="[object FormData]"))},Wb=bt("URLSearchParams"),[Hb,Vb,Zb,Gb]=["ReadableStream","Request","Response","Headers"].map(bt),Xb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ei(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ur(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Jo(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function pg(e,t){if(Jo(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hg=e=>!Uo(e)&&e!==Nn;function wu(){const{caseless:e}=hg(this)&&this||{},t={},n=(r,o)=>{const i=e&&pg(t,o)||o;qi(t[i])&&qi(r)?t[i]=wu(t[i],r):qi(r)?t[i]=wu({},r):Ur(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ei(arguments[r],n);return t}const Yb=(e,t,n,{allOwnKeys:r}={})=>(ei(t,(o,i)=>{n&&We(o)?e[i]=ug(o,n):e[i]=o},{allOwnKeys:r}),e),Qb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Jb=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Tc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},eC=e=>{if(!e)return null;if(Ur(e))return e;let t=e.length;if(!fg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Tc(Uint8Array)),nC=(e,t)=>{const r=(e&&e[aa]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},rC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},oC=bt("HTMLFormElement"),iC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Cf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sC=bt("RegExp"),mg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ei(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},aC=e=>{mg(e,(t,n)=>{if(We(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(We(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lC=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Ur(e)?r(e):r(String(e).split(t)),n},uC=()=>{},cC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function dC(e){return!!(e&&We(e.append)&&e[cg]==="FormData"&&e[aa])}const fC=e=>{const t=new Array(10),n=(r,o)=>{if(qo(r)){if(t.indexOf(r)>=0)return;if(Jo(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Ur(r)?[]:{};return ei(r,(s,a)=>{const u=n(s,o+1);!Uo(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},pC=bt("AsyncFunction"),hC=e=>e&&(qo(e)||We(e))&&We(e.then)&&We(e.catch),gg=((e,t)=>e?setImmediate:t?((n,r)=>(Nn.addEventListener("message",({source:o,data:i})=>{o===Nn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Nn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",We(Nn.postMessage)),mC=typeof queueMicrotask<"u"?queueMicrotask.bind(Nn):typeof process<"u"&&process.nextTick||gg,gC=e=>e!=null&&We(e[aa]),P={isArray:Ur,isArrayBuffer:dg,isBuffer:Jo,isFormData:Ub,isArrayBufferView:Nb,isString:Db,isNumber:fg,isBoolean:Ob,isObject:qo,isPlainObject:qi,isEmptyObject:Mb,isReadableStream:Hb,isRequest:Vb,isResponse:Zb,isHeaders:Gb,isUndefined:Uo,isDate:$b,isFile:Ab,isBlob:Lb,isRegExp:sC,isFunction:We,isStream:Bb,isURLSearchParams:Wb,isTypedArray:tC,isFileList:Fb,forEach:ei,merge:wu,extend:Yb,trim:Xb,stripBOM:Qb,inherits:Kb,toFlatObject:Jb,kindOf:la,kindOfTest:bt,endsWith:qb,toArray:eC,forEachEntry:nC,matchAll:rC,isHTMLForm:oC,hasOwnProperty:Cf,hasOwnProp:Cf,reduceDescriptors:mg,freezeMethods:aC,toObjectSet:lC,toCamelCase:iC,noop:uC,toFiniteNumber:cC,findKey:pg,global:Nn,isContextDefined:hg,isSpecCompliantForm:dC,toJSONObject:fC,isAsyncFn:pC,isThenable:hC,setImmediate:gg,asap:mC,isIterable:gC};function A(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}P.inherits(A,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const vg=A.prototype,yg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{yg[e]={value:e}});Object.defineProperties(A,yg);Object.defineProperty(vg,"isAxiosError",{value:!0});A.from=(e,t,n,r,o,i)=>{const s=Object.create(vg);return P.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),A.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const vC=null;function Su(e){return P.isPlainObject(e)||P.isArray(e)}function xg(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function jf(e,t,n){return e?e.concat(t).map(function(o,i){return o=xg(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function yC(e){return P.isArray(e)&&!e.some(Su)}const xC=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function ca(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,b){return!P.isUndefined(b[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(P.isDate(y))return y.toISOString();if(P.isBoolean(y))return y.toString();if(!u&&P.isBlob(y))throw new A("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(y)||P.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,b){let g=y;if(y&&!b&&typeof y=="object"){if(P.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(P.isArray(y)&&yC(y)||(P.isFileList(y)||P.endsWith(w,"[]"))&&(g=P.toArray(y)))return w=xg(w),g.forEach(function(h,S){!(P.isUndefined(h)||h===null)&&t.append(s===!0?jf([w],S,i):s===null?w:w+"[]",c(h))}),!1}return Su(y)?!0:(t.append(jf(b,w,i),c(y)),!1)}const p=[],m=Object.assign(xC,{defaultVisitor:d,convertValue:c,isVisitable:Su});function x(y,w){if(!P.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));p.push(y),P.forEach(y,function(g,f){(!(P.isUndefined(g)||g===null)&&o.call(t,g,P.isString(f)?f.trim():f,w,m))===!0&&x(g,w?w.concat(f):[f])}),p.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function kf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nc(e,t){this._pairs=[],e&&ca(e,this,t)}const wg=Nc.prototype;wg.append=function(t,n){this._pairs.push([t,n])};wg.toString=function(t){const n=t?function(r){return t.call(this,r,kf)}:kf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function wC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sg(e,t,n){if(!t)return e;const r=n&&n.encode||wC;P.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=P.isURLSearchParams(t)?t.toString():new Nc(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ef{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const bg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SC=typeof URLSearchParams<"u"?URLSearchParams:Nc,bC=typeof FormData<"u"?FormData:null,CC=typeof Blob<"u"?Blob:null,jC={isBrowser:!0,classes:{URLSearchParams:SC,FormData:bC,Blob:CC},protocols:["http","https","file","blob","url","data"]},Dc=typeof window<"u"&&typeof document<"u",bu=typeof navigator=="object"&&navigator||void 0,kC=Dc&&(!bu||["ReactNative","NativeScript","NS"].indexOf(bu.product)<0),EC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zC=Dc&&window.location.href||"http://localhost",PC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Dc,hasStandardBrowserEnv:kC,hasStandardBrowserWebWorkerEnv:EC,navigator:bu,origin:zC},Symbol.toStringTag,{value:"Module"})),Ee={...PC,...jC};function RC(e,t){return ca(e,new Ee.classes.URLSearchParams,{visitor:function(n,r,o,i){return Ee.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function _C(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function IC(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Cg(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=i>=n.length;return s=!s&&P.isArray(o)?o.length:s,u?(P.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!P.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&P.isArray(o[s])&&(o[s]=IC(o[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(_C(r),o,n,0)}),n}return null}function TC(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ti={transitional:bg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o?JSON.stringify(Cg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return RC(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ca(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),TC(t)):t}],transformResponse:[function(t){const n=this.transitional||ti.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?A.from(a,A.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{ti.headers[e]={}});const NC=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),DC=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&NC[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},zf=Symbol("internals");function to(e){return e&&String(e).trim().toLowerCase()}function es(e){return e===!1||e==null?e:P.isArray(e)?e.map(es):String(e)}function OC(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const MC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function rl(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function $C(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function AC(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let He=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const d=to(u);if(!d)throw new Error("header name must be a non-empty string");const p=P.findKey(o,d);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||u]=es(a))}const s=(a,u)=>P.forEach(a,(c,d)=>i(c,d,u));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(P.isString(t)&&(t=t.trim())&&!MC(t))s(DC(t),n);else if(P.isObject(t)&&P.isIterable(t)){let a={},u,c;for(const d of t){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(u=a[c])?P.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=to(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return OC(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=to(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||rl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=to(s),s){const a=P.findKey(r,s);a&&(!n||rl(r,r[a],a,n))&&(delete r[a],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||rl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const s=P.findKey(r,i);if(s){n[s]=es(o),delete n[i];return}const a=t?$C(i):String(i).trim();a!==i&&delete n[i],n[a]=es(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[zf]=this[zf]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=to(s);r[a]||(AC(o,s),r[a]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}};He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(He.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(He);function ol(e,t){const n=this||ti,r=t||n,o=He.from(r.headers);let i=r.data;return P.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function jg(e){return!!(e&&e.__CANCEL__)}function Wr(e,t,n){A.call(this,e??"canceled",A.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Wr,A,{__CANCEL__:!0});function kg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new A("Request failed with status code "+n.status,[A.ERR_BAD_REQUEST,A.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function LC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function FC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let p=i,m=0;for(;p!==o;)m+=n[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const x=d&&c-d;return x?Math.round(m*1e3/x):void 0}}function BC(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-p)))},()=>o&&s(o)]}const Is=(e,t,n=3)=>{let r=0;const o=FC(50,250);return BC(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=a;r=s;const p={loaded:s,total:a,progress:a?s/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(p)},n)},Pf=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Rf=e=>(...t)=>P.asap(()=>e(...t)),UC=Ee.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ee.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ee.origin),Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent)):()=>!0,WC=Ee.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(r)&&s.push("path="+r),P.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function HC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function VC(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Eg(e,t,n){let r=!HC(t);return e&&(r||n==!1)?VC(e,t):t}const _f=e=>e instanceof He?{...e}:e;function Wn(e,t){t=t||{};const n={};function r(c,d,p,m){return P.isPlainObject(c)&&P.isPlainObject(d)?P.merge.call({caseless:m},c,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function o(c,d,p,m){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c,p,m)}else return r(c,d,p,m)}function i(c,d){if(!P.isUndefined(d))return r(void 0,d)}function s(c,d){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,p)=>o(_f(c),_f(d),p,!0)};return P.forEach(Object.keys({...e,...t}),function(d){const p=u[d]||o,m=p(e[d],t[d],d);P.isUndefined(m)&&p!==a||(n[d]=m)}),n}const zg=e=>{const t=Wn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=He.from(s),t.url=Sg(Eg(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(P.isFormData(n)){if(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(Ee.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&UC(t.url))){const c=o&&i&&WC.read(i);c&&s.set(o,c)}return t},ZC=typeof XMLHttpRequest<"u",GC=ZC&&function(e){return new Promise(function(n,r){const o=zg(e);let i=o.data;const s=He.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,d,p,m,x,y;function w(){x&&x(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function g(){if(!b)return;const h=He.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};kg(function(C){n(C),w()},function(C){r(C),w()},j),b=null}"onloadend"in b?b.onloadend=g:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(g)},b.onabort=function(){b&&(r(new A("Request aborted",A.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new A("Network Error",A.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||bg;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new A(S,j.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&P.forEach(s.toJSON(),function(S,j){b.setRequestHeader(j,S)}),P.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),a&&a!=="json"&&(b.responseType=o.responseType),c&&([m,y]=Is(c,!0),b.addEventListener("progress",m)),u&&b.upload&&([p,x]=Is(u),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=h=>{b&&(r(!h||h.type?new Wr(null,e,b):h),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=LC(o.url);if(f&&Ee.protocols.indexOf(f)===-1){r(new A("Unsupported protocol "+f+":",A.ERR_BAD_REQUEST,e));return}b.send(i||null)})},XC=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof A?d:new Wr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new A(`timeout ${t} of ms exceeded`,A.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>P.asap(a),u}},YC=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},QC=async function*(e,t){for await(const n of KC(e))yield*YC(n,t)},KC=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},If=(e,t,n,r)=>{const o=QC(e,t);let i=0,s,a=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){a(),u.close();return}let p=d.byteLength;if(n){let m=i+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},da=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Pg=da&&typeof ReadableStream=="function",JC=da&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Rg=(e,...t)=>{try{return!!e(...t)}catch{return!1}},qC=Pg&&Rg(()=>{let e=!1;const t=new Request(Ee.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Tf=64*1024,Cu=Pg&&Rg(()=>P.isReadableStream(new Response("").body)),Ts={stream:Cu&&(e=>e.body)};da&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ts[t]&&(Ts[t]=P.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new A(`Response type '${t}' is not supported`,A.ERR_NOT_SUPPORT,r)})})})(new Response);const ej=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(Ee.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await JC(e)).byteLength},tj=async(e,t)=>{const n=P.toFiniteNumber(e.getContentLength());return n??ej(t)},nj=da&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:d,withCredentials:p="same-origin",fetchOptions:m}=zg(e);c=c?(c+"").toLowerCase():"text";let x=XC([o,i&&i.toAbortSignal()],s),y;const w=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let b;try{if(u&&qC&&n!=="get"&&n!=="head"&&(b=await tj(d,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),E;if(P.isFormData(r)&&(E=j.headers.get("content-type"))&&d.setContentType(E),j.body){const[C,R]=Pf(b,Is(Rf(u)));r=If(j.body,Tf,C,R)}}P.isString(p)||(p=p?"include":"omit");const g="credentials"in Request.prototype;y=new Request(t,{...m,signal:x,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:g?p:void 0});let f=await fetch(y,m);const h=Cu&&(c==="stream"||c==="response");if(Cu&&(a||h&&w)){const j={};["status","statusText","headers"].forEach(k=>{j[k]=f[k]});const E=P.toFiniteNumber(f.headers.get("content-length")),[C,R]=a&&Pf(E,Is(Rf(a),!0))||[];f=new Response(If(f.body,Tf,C,()=>{R&&R(),w&&w()}),j)}c=c||"text";let S=await Ts[P.findKey(Ts,c)||"text"](f,e);return!h&&w&&w(),await new Promise((j,E)=>{kg(j,E,{data:S,headers:He.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:y})})}catch(g){throw w&&w(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new A("Network Error",A.ERR_NETWORK,e,y),{cause:g.cause||g}):A.from(g,g&&g.code,e,y)}}),ju={http:vC,xhr:GC,fetch:nj};P.forEach(ju,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Nf=e=>`- ${e}`,rj=e=>P.isFunction(e)||e===null||e===!1,_g={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!rj(n)&&(r=ju[(s=String(n)).toLowerCase()],r===void 0))throw new A(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Nf).join(`
`):" "+Nf(i[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ju};function il(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wr(null,e)}function Df(e){return il(e),e.headers=He.from(e.headers),e.data=ol.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_g.getAdapter(e.adapter||ti.adapter)(e).then(function(r){return il(e),r.data=ol.call(e,e.transformResponse,r),r.headers=He.from(r.headers),r},function(r){return jg(r)||(il(e),r&&r.response&&(r.response.data=ol.call(e,e.transformResponse,r.response),r.response.headers=He.from(r.response.headers))),Promise.reject(r)})}const Ig="1.11.0",fa={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fa[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Of={};fa.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Ig+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new A(o(s," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!Of[s]&&(Of[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};fa.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function oj(e,t,n){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],u=a===void 0||s(a,i,e);if(u!==!0)throw new A("option "+i+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+i,A.ERR_BAD_OPTION)}}const ts={assertOptions:oj,validators:fa},jt=ts.validators;let $n=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ef,response:new Ef}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Wn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ts.assertOptions(r,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:ts.assertOptions(o,{encode:jt.function,serialize:jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ts.assertOptions(n,{baseUrl:jt.spelling("baseURL"),withXsrfToken:jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=He.concat(s,i);const a=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(u=u&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let d,p=0,m;if(!u){const y=[Df.bind(this),void 0];for(y.unshift(...a),y.push(...c),m=y.length,d=Promise.resolve(n);p<m;)d=d.then(y[p++],y[p++]);return d}m=a.length;let x=n;for(p=0;p<m;){const y=a[p++],w=a[p++];try{x=y(x)}catch(b){w.call(this,b);break}}try{d=Df.call(this,x)}catch(y){return Promise.reject(y)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=Wn(this.defaults,t);const n=Eg(t.baseURL,t.url,t.allowAbsoluteUrls);return Sg(n,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){$n.prototype[t]=function(n,r){return this.request(Wn(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Wn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}$n.prototype[t]=n(),$n.prototype[t+"Form"]=n(!0)});let ij=class Tg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Wr(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Tg(function(o){t=o}),cancel:t}}};function sj(e){return function(n){return e.apply(null,n)}}function aj(e){return P.isObject(e)&&e.isAxiosError===!0}const ku={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ku).forEach(([e,t])=>{ku[t]=e});function Ng(e){const t=new $n(e),n=ug($n.prototype.request,t);return P.extend(n,$n.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ng(Wn(e,o))},n}const oe=Ng(ti);oe.Axios=$n;oe.CanceledError=Wr;oe.CancelToken=ij;oe.isCancel=jg;oe.VERSION=Ig;oe.toFormData=ca;oe.AxiosError=A;oe.Cancel=oe.CanceledError;oe.all=function(t){return Promise.all(t)};oe.spread=sj;oe.isAxiosError=aj;oe.mergeConfig=Wn;oe.AxiosHeaders=He;oe.formToJSON=e=>Cg(P.isHTMLForm(e)?new FormData(e):e);oe.getAdapter=_g.getAdapter;oe.HttpStatusCode=ku;oe.default=oe;const{Axios:DE,AxiosError:OE,CanceledError:ME,isCancel:$E,CancelToken:AE,VERSION:LE,all:FE,Cancel:BE,isAxiosError:UE,spread:WE,toFormData:HE,AxiosHeaders:VE,HttpStatusCode:ZE,formToJSON:GE,getAdapter:XE,mergeConfig:YE}=oe,lj="http://localhost:3002/api",se=oe.create({baseURL:lj,timeout:1e4,headers:{"Content-Type":"application/json"}});se.interceptors.response.use(e=>e,e=>{var t;return console.error("API Error:",((t=e.response)==null?void 0:t.data)||e.message),Promise.reject(e)});const Dg=async()=>{try{return(await se.get("/zones")).data}catch(e){return console.error("Ошибка загрузки зон:",e),[]}},uj=async e=>(await se.post("/zones",e)).data,Og=async e=>{try{return(await se.get(`/zones/${e}/items`)).data}catch(t){return console.error("Ошибка загрузки элементов зоны:",t),[]}},cj=async(e,t)=>{try{await se.post("/zones/items",t)}catch(n){throw console.error("Ошибка сохранения элементов зоны:",n),n}},dj=v.div`
  display: flex;
  flex-direction: column;
`;v.main`
  flex: 1;
`;const fj=v.div`
  padding: 2rem 0;
`,pj=v.h1`
  text-align: center;
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,hj=v.p`
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,sl=v.div`
  margin-bottom: 3rem;
`,al=v.h2`
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,mj=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 10px;
  }
`,gj=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`,vj=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ff6b6b;
  font-size: 1.2rem;
`,yj=v.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,ll=v.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-weight: bold;
  background: ${e=>e.$completed?"#51cf66":e.$active?"#ffd700":"#333"};
  color: ${e=>e.$completed||e.$active?"#000":"#fff"};
  transition: all 0.3s ease;
`,xj=()=>{const[e,t]=z.useState([]),[n,r]=z.useState(!0),[o,i]=z.useState(null),[s,a]=z.useState(1),[u,c]=z.useState(null),[d,p]=z.useState(null),[m,x]=z.useState([]),[y,w]=z.useState(!1);ze.useEffect(()=>{(async()=>{try{r(!0);const E=await Dg();t(E)}catch{i("Ошибка загрузки зон")}finally{r(!1)}})()},[]);const b=async j=>{c(j),a(2),w(!0);try{const E=await Og(j.id);x(E)}catch(E){console.error("Ошибка загрузки столов зоны:",E),x([])}finally{w(!1)}},g=()=>{c(null),p(null),a(1)},f=j=>{p(j)},h=()=>{a(3)},S=()=>{p(null),a(2)};return l.jsx(dj,{children:l.jsx(St,{children:l.jsxs(fj,{children:[l.jsx(pj,{children:"Бронирование"}),l.jsx(hj,{children:"Выберите зал и заполните форму для бронирования"}),l.jsxs(yj,{children:[l.jsx(ll,{$active:s===1,$completed:s>1,children:"1"}),l.jsx(ll,{$active:s===2,$completed:s>2,children:"2"}),l.jsx(ll,{$active:s===3,$completed:!1,children:"3"})]}),s===1?l.jsxs(sl,{children:[l.jsx(al,{children:"Шаг 1: Выберите зал"}),n?l.jsx(gj,{children:"Загрузка зон..."}):o?l.jsx(vj,{children:o}):l.jsx(mj,{children:e.map((j,E)=>l.jsx("div",{onClick:()=>b(j),children:l.jsx(Ow,{zone:j,$isFullWidth:E%3===2})},j.id))})]}):s===2?l.jsxs(sl,{children:[l.jsx(al,{children:"Шаг 2: Выберите стол"}),u&&l.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[l.jsxs("p",{style:{color:"#ffd700",fontSize:"1.2rem"},children:["Зал: ",u.name]}),l.jsx("button",{onClick:g,style:{background:"transparent",border:"1px solid #ffd700",color:"#ffd700",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginTop:"1rem"},children:"← Выбрать другой зал"})]}),y?l.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Загрузка столов..."}):l.jsx(Ib,{zoneItems:m,onTableSelect:f,selectedTable:d,onContinue:h})]}):l.jsxs(sl,{children:[l.jsx(al,{children:"Шаг 3: Заполните форму бронирования"}),u&&d&&l.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[l.jsxs("p",{style:{color:"#ffd700",fontSize:"1.2rem"},children:["Зал: ",u.name," | Стол: ",d.label]}),l.jsx("button",{onClick:S,style:{background:"transparent",border:"1px solid #ffd700",color:"#ffd700",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginTop:"1rem"},children:"← Выбрать другой стол"})]}),u&&d&&l.jsx(mS,{selectedZone:u,selectedTable:d})]})]})})})},fe={getMenuTypes:async()=>{console.log("🔍 Запрашиваем типы меню...");try{const e=await se.get("/menu-types");return console.log("✅ Типы меню получены:",e.data.length,"шт."),e.data}catch(e){throw console.error("❌ Ошибка получения типов меню:",e),e}},getMenuType:async e=>(await se.get(`/menu-types/${e}`)).data,createMenuType:async e=>(await se.post("/menu-types",e)).data,updateMenuType:async(e,t)=>(await se.put(`/menu-types/${e}`,t)).data,deleteMenuType:async e=>{await se.delete(`/menu-types/${e}`)},getMenuCategories:async e=>{console.log("🔍 Запрашиваем категории меню...",e?`для типа ${e}`:"все");try{const t=e?{menuTypeId:e}:{},n=await se.get("/menu-categories",{params:t});return console.log("✅ Категории меню получены:",n.data.length,"шт."),n.data}catch(t){throw console.error("❌ Ошибка получения категорий меню:",t),t}},getMenuCategory:async e=>(await se.get(`/menu-categories/${e}`)).data,createMenuCategory:async e=>(await se.post("/menu-categories",e)).data,updateMenuCategory:async(e,t)=>(await se.put(`/menu-categories/${e}`,t)).data,deleteMenuCategory:async e=>{await se.delete(`/menu-categories/${e}`)},getMenuItems:async e=>{console.log("🔍 Запрашиваем блюда меню...",e?`для категории ${e}`:"все");try{const t=e?{categoryId:e}:{},n=await se.get("/menu-items",{params:t});return console.log("✅ Блюда меню получены:",n.data.length,"шт."),n.data}catch(t){throw console.error("❌ Ошибка получения блюд меню:",t),t}},getMenuItem:async e=>(await se.get(`/menu-items/${e}`)).data,createMenuItem:async e=>{console.log("🚀 Создаем блюдо:",e);try{const t=await se.post("/menu-items",e);return console.log("✅ Блюдо создано:",t.data),t.data}catch(t){throw console.error("❌ Ошибка создания блюда:",t),t}},updateMenuItem:async(e,t)=>(await se.put(`/menu-items/${e}`,t)).data,deleteMenuItem:async e=>{await se.delete(`/menu-items/${e}`)},getFullMenu:async()=>{console.log("🚀 Запрашиваем полное меню...");try{const[e,t,n]=await Promise.all([fe.getMenuTypes(),fe.getMenuCategories(),fe.getMenuItems()]);return console.log("✅ Полное меню получено:",{types:e.length,categories:t.length,items:n.length}),{types:e,categories:t,items:n}}catch(e){throw console.error("❌ Ошибка получения полного меню:",e),e}}},Ri=v.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,Mf=v.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
`;v.main`
  flex: 1;
`;const wj=v.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin: 0;
  padding: 2rem 0 0 0;
  min-height: 0; /* Важно для flex-контейнера */
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Sj=v.div`
  width: 250px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`,bj=v.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${e=>e.$active?"#ffd700":"transparent"};
  color: ${e=>e.$active?"#000":"#fff"};
  border: 1px solid ${e=>e.$active?"#ffd700":"#333"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: left;
  
  &:hover {
    background: ${e=>e.$active?"#ffd700":"#333"};
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`,Cj=v.div`
  flex: 1;
  min-width: 0; /* Важно для предотвращения переполнения */
  overflow: hidden; /* Предотвращает вылетание контента */
`,jj=v.div`
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
`,kj=v.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Скрываем скроллбар для WebKit браузеров */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Для Firefox */
  scrollbar-width: none;
  
  /* Для IE и Edge */
  -ms-overflow-style: none;
`,$f=v.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.$active?"#ffd700":"transparent"};
  color: ${e=>e.$active?"#000":"#fff"};
  border: 1px solid ${e=>e.$active?"#ffd700":"#555"};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${e=>e.$active?"#ffd700":"#555"};
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`,Ej=v.div`
  padding: 2rem 0;
`,zj=v.div`
  h2 {
    color: #ffd700;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`,Pj=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Rj=v.div`
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
  }
`,_j=v.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #333;
`,Ij=v.div`
  padding: 1.5rem;
`,Tj=v.h3`
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,Nj=v.p`
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  min-height: 2.7rem;
`,Dj=v.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: right;
`,Oj=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`,Af=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #dc3545;
  font-size: 1.2rem;
  text-align: center;
`,Mj=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[o,i]=z.useState([]),[s,a]=z.useState(null),[u,c]=z.useState(null),[d,p]=z.useState(!0),[m,x]=z.useState(null);z.useEffect(()=>{y()},[]);const y=async()=>{try{p(!0),x(null);const C=await fe.getFullMenu();t(C.types.filter(R=>R.isActive)),r(C.categories.filter(R=>R.isActive)),i(C.items.filter(R=>R.isActive)),C.types.filter(R=>R.isActive).length>0&&a(C.types.filter(R=>R.isActive)[0])}catch(C){console.error("Ошибка загрузки меню:",C),x("Не удалось загрузить меню. Пожалуйста, попробуйте позже.")}finally{p(!1)}},w=C=>{a(C),c(null)},b=C=>{c(C)},g=C=>n.filter(R=>R.menuTypeId===C),f=C=>o.filter(R=>R.categoryId===C),h=C=>{const R=g(C).map(k=>k.id);return o.filter(k=>R.includes(k.categoryId))},S=C=>`${C} ₽`;if(d)return l.jsx(Ri,{children:l.jsx(St,{children:l.jsx(Oj,{children:"Загрузка меню..."})})});if(m)return l.jsx(Ri,{children:l.jsx(St,{children:l.jsx(Af,{children:m})})});if(e.length===0)return l.jsx(Ri,{children:l.jsx(Mf,{children:l.jsx(Af,{children:"Меню пока не доступно"})})});const j=s?g(s.id):[],E=u?f(u.id):s?h(s.id):[];return l.jsx(Ri,{children:l.jsx(Mf,{children:l.jsxs(wj,{children:[l.jsx(Sj,{children:e.map(C=>l.jsx(bj,{$active:(s==null?void 0:s.id)===C.id,onClick:()=>w(C),children:C.name},C.id))}),l.jsxs(Cj,{children:[j.length>0&&l.jsx(jj,{children:l.jsxs(kj,{children:[l.jsx($f,{$active:u===null,onClick:()=>c(null),children:"Все блюда"}),j.map(C=>l.jsx($f,{$active:(u==null?void 0:u.id)===C.id,onClick:()=>b(C),children:C.name},C.id))]})}),l.jsx(Ej,{children:l.jsxs(zj,{children:[l.jsx("h2",{children:u?u.name:s?`${s.name} - Все блюда`:"Меню"}),l.jsx(Pj,{children:E.map(C=>l.jsxs(Rj,{children:[l.jsx(_j,{src:C.imageUrl||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=",alt:C.name}),l.jsxs(Ij,{children:[l.jsx(Tj,{children:C.name}),l.jsx(Nj,{children:C.description||"Описание блюда"}),l.jsx(Dj,{children:S(C.price)})]})]},C.id))}),E.length===0&&l.jsx("div",{style:{textAlign:"center",color:"#ccc",padding:"2rem"},children:"В этой категории пока нет блюд"})]})})]})]})})})},$j=v.div`
  display: flex;
  flex-direction: column;
`,Aj=v.main`
  flex: 1;
  padding: 2rem 0;
`,Lj=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Fj=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,Bj=()=>l.jsx($j,{children:l.jsx(Aj,{children:l.jsx(Lj,{children:l.jsxs(Fj,{children:[l.jsx("h1",{children:"Афиша"}),l.jsx("p",{children:"Актуальные события и мероприятия в нашем клубе."})]})})})}),Uj=v.div`
  display: flex;
  flex-direction: column;
`,Wj=v.main`
  flex: 1;
  padding: 2rem 0;
`,Hj=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Vj=v.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,Zj=()=>l.jsx(Uj,{children:l.jsx(Wj,{children:l.jsx(Hj,{children:l.jsxs(Vj,{children:[l.jsx("h1",{children:"Клубные карты"}),l.jsx("p",{children:"Специальные предложения и программы лояльности для наших гостей."})]})})})}),Gj=v.div`
  display: flex;
  flex-direction: column;
`,Xj=v.main`
  flex: 1;
  padding: 2rem 0;
`,Yj=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Qj=v.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    color: #ffd700;
    font-size: 2.5rem;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`,Kj=v.div`
  background: #333;
  border: 2px dashed #ffd700;
  border-radius: 8px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  color: #ffd700;
  font-size: 1.2rem;
  text-align: center;
`,Jj=()=>l.jsx(Gj,{children:l.jsx(Xj,{children:l.jsx(Yj,{children:l.jsxs(Qj,{children:[l.jsx("h1",{children:"3D Тур по клубу"}),l.jsx("p",{children:"Совершите виртуальную экскурсию по нашему развлекательному комплексу. Исследуйте все зоны и помещения, не выходя из дома."}),l.jsxs(Kj,{children:["🏠 3D Тур будет доступен в ближайшее время",l.jsx("br",{}),l.jsx("small",{style:{color:"#888",fontSize:"1rem"},children:"Мы работаем над созданием интерактивного 3D тура"})]}),l.jsx("p",{children:"В 3D туре вы сможете:"}),l.jsxs("ul",{style:{textAlign:"left",maxWidth:"600px",margin:"0 auto",color:"#ccc",lineHeight:"1.8"},children:[l.jsx("li",{children:"Пройтись по всем зонам клуба"}),l.jsx("li",{children:"Рассмотреть детали интерьера"}),l.jsx("li",{children:"Увидеть расположение столов и оборудования"}),l.jsx("li",{children:"Оценить атмосферу каждого помещения"}),l.jsx("li",{children:"Познакомиться с планировкой клуба"})]})]})})})}),qj=v.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`,ek=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,tk=v.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,nk=v.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #ccc;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,rk=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Jn=v.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,qn=v.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,er=v.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,tr=v.p`
  color: #ccc;
  line-height: 1.6;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,ok=v.div`
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,ik=v.h2`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,sk=v.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,ul=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  
  a {
    color: #ffd700;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,ak=()=>l.jsx(qj,{children:l.jsxs(ek,{children:[l.jsx(tk,{children:"Безопасность гостей"}),l.jsx(nk,{children:"Мы обеспечиваем максимальную безопасность для всех посетителей клуба. Ваша безопасность - наш приоритет."}),l.jsxs(rk,{children:[l.jsxs(Jn,{children:[l.jsx(qn,{children:"📹"}),l.jsx(er,{children:"Видеонаблюдение"}),l.jsx(tr,{children:"По всему клубу установлены современные камеры видеонаблюдения с высоким разрешением. Все зоны находятся под постоянным контролем службы безопасности."})]}),l.jsxs(Jn,{children:[l.jsx(qn,{children:"👮‍♂️"}),l.jsx(er,{children:"Служба безопасности"}),l.jsx(tr,{children:"Круглосуточная служба безопасности с быстрым реагированием. Опытные сотрудники всегда готовы помочь и обеспечить порядок в клубе."})]}),l.jsxs(Jn,{children:[l.jsx(qn,{children:"🚨"}),l.jsx(er,{children:"Система оповещения"}),l.jsx(tr,{children:"Современная система оповещения и связи с экстренными службами. В случае необходимости помощь прибудет в кратчайшие сроки."})]}),l.jsxs(Jn,{children:[l.jsx(qn,{children:"🔒"}),l.jsx(er,{children:"Контроль доступа"}),l.jsx(tr,{children:"Система контроля доступа на входе и в VIP-зонах. Все посетители проходят проверку для обеспечения безопасности."})]}),l.jsxs(Jn,{children:[l.jsx(qn,{children:"💡"}),l.jsx(er,{children:"Освещение"}),l.jsx(tr,{children:"Полное освещение всех зон клуба, включая парковку и прилегающую территорию. Хорошая видимость обеспечивает дополнительную безопасность."})]}),l.jsxs(Jn,{children:[l.jsx(qn,{children:"🚪"}),l.jsx(er,{children:"Пожарная безопасность"}),l.jsx(tr,{children:"Четко обозначенные аварийные выходы и пути эвакуации. Регулярно проводятся профилактические работы по обеспечению пожарной безопасности."})]})]}),l.jsxs(ok,{children:[l.jsx(ik,{children:"Нужна помощь?"}),l.jsx("p",{style:{color:"#ccc",marginBottom:"1rem"},children:"Если у вас возникли вопросы по безопасности или нужна помощь, свяжитесь с нами:"}),l.jsxs(sk,{children:[l.jsxs(ul,{children:[l.jsx("span",{children:"📞"}),l.jsx("a",{href:"tel:+79680905550",children:"+7(968) 090-55-50"})]}),l.jsxs(ul,{children:[l.jsx("span",{children:"📞"}),l.jsx("a",{href:"tel:+79680915550",children:"+7(968) 091-55-50"})]}),l.jsxs(ul,{children:[l.jsx("span",{children:"📧"}),l.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})]})]})]})]})}),Mg=async e=>new Promise((t,n)=>{const r="dgclbjhp0",o="frantsuz-club";if(console.log("🚀 Начинаем загрузку в Cloudinary:",{cloudName:r,uploadPreset:o,fileName:e.name,fileSize:e.size,fileType:e.type}),!e||e.size===0){const a="Файл пустой или поврежден";console.error("❌",a),n(new Error(a));return}const i=new FormData;i.append("file",e),i.append("upload_preset",o),i.append("folder","menu-items");const s=`https://api.cloudinary.com/v1_1/${r}/image/upload`;console.log("📤 Отправляем запрос на:",s),fetch(s,{method:"POST",body:i}).then(a=>(console.log("📥 Получен ответ от Cloudinary:",a.status,a.statusText),a.ok?a.json():a.text().then(u=>{console.error("❌ Ответ Cloudinary:",u),console.log("🔄 Возвращаем placeholder из-за ошибки Cloudinary"),t("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=")}))).then(a=>{console.log("✅ Успешная загрузка:",a),a.secure_url?t(a.secure_url):(console.error("❌","Не получен URL изображения от Cloudinary",a),console.log("🔄 Возвращаем placeholder из-за отсутствия URL"),t("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4="))}).catch(a=>{console.error("❌ Ошибка загрузки в Cloudinary:",a),console.log("🔄 Возвращаем placeholder из-за ошибки сети"),t("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=")})}),lk=v.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`,uk=v.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`,ck=v.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,_i=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ii=v.label`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
`,cl=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`;v.textarea`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`;const dk=v.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,fk=v.div`
  border: 2px dashed #333;
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffd700;
  }
`,pk=v.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
  margin-top: 1rem;
`,hk=v.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,mk=v.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Lf=()=>{const[e,t]=z.useState({name:"",openTime:"",closeTime:"",imageUrl:""}),[n,r]=z.useState([]),[o,i]=z.useState(!1),[s,a]=z.useState(!1),[u,c]=z.useState(!1),d=(x,y)=>{t(w=>({...w,[x]:y}))},p=async x=>{var w;const y=(w=x.target.files)==null?void 0:w[0];if(y){c(!0);try{const b=await Mg(y);d("imageUrl",b)}catch{r(["Ошибка загрузки изображения"])}finally{c(!1)}}},m=async x=>{x.preventDefault(),r([]),i(!1),a(!0);const y=[];if(e.name||y.push("Введите название зала"),e.openTime||y.push("Укажите время открытия"),e.closeTime||y.push("Укажите время закрытия"),e.imageUrl||y.push("Загрузите изображение"),y.length>0){r(y),a(!1);return}try{console.log("Создание зоны:",e),await uj(e),i(!0),t({name:"",openTime:"",closeTime:"",imageUrl:""})}catch{r(["Ошибка создания зала"])}finally{a(!1)}};return l.jsx(St,{children:l.jsxs(lk,{children:[l.jsx(uk,{children:"Создание зала"}),l.jsxs(ck,{onSubmit:m,children:[l.jsxs(_i,{children:[l.jsx(Ii,{children:"Название зала"}),l.jsx(cl,{type:"text",placeholder:"Например: Караоке, Бильярд",value:e.name,onChange:x=>d("name",x.target.value)})]}),l.jsxs(_i,{children:[l.jsx(Ii,{children:"Время открытия"}),l.jsx(cl,{type:"time",value:e.openTime,onChange:x=>d("openTime",x.target.value)})]}),l.jsxs(_i,{children:[l.jsx(Ii,{children:"Время закрытия"}),l.jsx(cl,{type:"time",value:e.closeTime,onChange:x=>d("closeTime",x.target.value)})]}),l.jsxs(_i,{children:[l.jsx(Ii,{children:"Изображение зала"}),l.jsxs(fk,{children:[l.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"},id:"image-upload",disabled:u}),l.jsx("label",{htmlFor:"image-upload",style:{cursor:u?"not-allowed":"pointer"},children:u?"Загрузка...":e.imageUrl?"Изменить изображение":"Нажмите для загрузки изображения"}),e.imageUrl&&l.jsx(pk,{src:e.imageUrl,alt:"Preview"})]})]}),n.length>0&&l.jsx("div",{children:n.map((x,y)=>l.jsx(hk,{children:x},y))}),o&&l.jsx(mk,{children:"Зал успешно создан!"}),l.jsx(dk,{type:"submit",disabled:s,children:s?"Создается...":"Создать зал"})]})]})})},gk=v.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: #f5f5f5;
  border: 2px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;
`,vk=v.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,Ff=v.button`
  padding: 0.5rem 1rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Bf=v.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.$active?"#ffd700":"#333"};
  color: ${e=>e.$active?"#000":"#fff"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${e=>e.$active?"#ffed4e":"#444"};
  }
`,yk=v.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>e.$isOpen?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,xk=v.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  color: #fff;
  min-width: 300px;
`,wk=v.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ti=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ni=v.label`
  color: #fff;
  font-weight: 500;
`,Uf=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Wf=v.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Sk=v.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ffed4e;
  }
`,bk=v.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #fff;
  border: 1px solid #666;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background: #333;
  }
`,Ck=v.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,jk=({zoneId:e,zoneName:t,onSave:n})=>{const[r,o]=z.useState([]),[i,s]=z.useState(1),[a,u]=z.useState(!1),[c,d]=z.useState(!0),[p,m]=z.useState(null),[x,y]=z.useState({type:"success",title:"",message:"",isVisible:!1}),[w,b]=z.useState({label:"",type:"table",floor:1,seats:0}),g=z.useRef(null);z.useEffect(()=>{(async()=>{try{d(!0),m(null);const _=await Og(e);o(_)}catch(_){m("Ошибка загрузки элементов зоны"),console.error("Ошибка загрузки элементов зоны:",_)}finally{d(!1)}})()},[e]);const f=(k,_,M)=>{o($=>$.map(B=>B.id===k?{...B,x:_,y:M}:B))},h=(k,_,M)=>{o($=>$.map(B=>B.id===k?{...B,width:_,height:M}:B))},S=k=>{const _={id:Date.now(),label:k.label,type:k.type,floor:k.floor,seats:k.seats,x:50,y:50,width:200,height:100,zoneId:e,isBooking:!1,isActive:!0};o(M=>[...M,_]),u(!1),b({label:"",type:"table",floor:1,seats:0}),E("success","Элемент добавлен!",`"${k.label}" добавлен в зону`)},j=k=>{k.preventDefault(),S(w)},E=(k,_,M)=>{y({type:k,title:_,message:M,isVisible:!0}),setTimeout(()=>{y($=>({...$,isVisible:!1}))},3e3)},C=async()=>{try{await cj(e,r),n&&n(r),E("success","Успешно сохранено!",`Элементы зоны "${t||"Зона"}" сохранены`),console.log("Сохранено:",r)}catch(k){E("error","Ошибка сохранения","Не удалось сохранить элементы зоны. Попробуйте еще раз."),console.error("Ошибка сохранения:",k)}},R=r.filter(k=>k.floor===i);return l.jsxs(St,{children:[t&&l.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",color:"#ffd700",fontSize:"1.5rem",fontWeight:"bold"},children:["Конструктор зоны: ",t]}),l.jsxs(vk,{children:[l.jsx(Ff,{onClick:()=>u(!0),children:"Добавить элемент"}),l.jsx(Ff,{onClick:C,children:"Сохранить зону"}),l.jsx(Bf,{$active:i===1,onClick:()=>s(1),children:"1 этаж"}),l.jsx(Bf,{$active:i===2,onClick:()=>s(2),children:"2 этаж"})]}),c?l.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Загрузка элементов зоны..."}):p?l.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ff6b6b",fontSize:"1.2rem"},children:p}):l.jsx(gk,{ref:g,children:R.map(k=>l.jsx(lg,{item:k,updatePosition:f,updateSize:h},k.id))}),l.jsx(yk,{$isOpen:a,children:l.jsxs(xk,{children:[l.jsx("h3",{children:"Добавить элемент"}),l.jsxs(wk,{onSubmit:j,children:[l.jsxs(Ti,{children:[l.jsx(Ni,{children:"Название"}),l.jsx(Uf,{type:"text",value:w.label,onChange:k=>b(_=>({..._,label:k.target.value})),placeholder:"Например: Стол 1",required:!0})]}),l.jsxs(Ti,{children:[l.jsx(Ni,{children:"Тип"}),l.jsxs(Wf,{value:w.type,onChange:k=>b(_=>({..._,type:k.target.value})),children:[l.jsx("option",{value:"table",children:"Стол"}),l.jsx("option",{value:"stage",children:"Сцена"}),l.jsx("option",{value:"bar",children:"Бар"}),l.jsx("option",{value:"entrance",children:"Вход"})]})]}),l.jsxs(Ti,{children:[l.jsx(Ni,{children:"Этаж"}),l.jsxs(Wf,{value:w.floor,onChange:k=>b(_=>({..._,floor:parseInt(k.target.value)})),children:[l.jsx("option",{value:1,children:"1 этаж"}),l.jsx("option",{value:2,children:"2 этаж"})]})]}),l.jsxs(Ti,{children:[l.jsx(Ni,{children:"Количество мест"}),l.jsx(Uf,{type:"number",value:w.seats,onChange:k=>b(_=>({..._,seats:parseInt(k.target.value)||0})),placeholder:"0"})]}),l.jsxs(Ck,{children:[l.jsx(Sk,{type:"submit",children:"Добавить"}),l.jsx(bk,{type:"button",onClick:()=>u(!1),children:"Отмена"})]})]})]})}),x.isVisible&&l.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"1rem",background:x.type==="success"?"#51cf66":"#ff6b6b",color:"white",borderRadius:"8px",zIndex:1e4},children:[l.jsx("div",{style:{fontWeight:"bold"},children:x.title}),l.jsx("div",{children:x.message})]})]})},kk=v.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,Ek=v.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`,zk=v.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`,Pk=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,Rk=v.div`
  background: ${e=>e.$selected?"#ffd700":"#1a1a1a"};
  color: ${e=>e.$selected?"#000":"#fff"};
  padding: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.$selected?"#ffd700":"transparent"};

  &:hover {
    background: ${e=>e.$selected?"#ffed4e":"#333"};
  }
`,_k=v.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`,Ik=v.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`,Tk=v.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`,Nk=v.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Dk=({zones:e,onZoneSelect:t,selectedZone:n,onContinue:r})=>l.jsx(St,{children:l.jsxs(kk,{children:[l.jsx(Ek,{children:"Выберите зал для конструктора"}),l.jsx(zk,{children:"Выберите зал, для которого хотите создать столы и элементы"}),l.jsx(Pk,{children:e.map(o=>l.jsxs(Rk,{$selected:(n==null?void 0:n.id)===o.id,onClick:()=>t(o),children:[l.jsx(_k,{children:o.name}),l.jsxs(Ik,{children:["Время работы: ",o.openTime," - ",o.closeTime]}),l.jsx(Tk,{children:l.jsxs("div",{children:["Зал: ",o.name]})})]},o.id))}),n&&l.jsxs(Nk,{onClick:r,children:['Открыть конструктор для зоны "',n.name,'"']})]})}),Ok=v.div`
  color: #fff;
`,Mk=v.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,nr=v.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,rr=v.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,no=v.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: #dc3545;
          color: white;
          &:hover { background: #c82333; }
        `;case"secondary":return`
          background: #6c757d;
          color: white;
          &:hover { background: #5a6268; }
        `;default:return`
          background: #ffd700;
          color: #000;
          &:hover { background: #ffed4e; }
        `}}}
`,$k=v.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`,Ak=v.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  color: #fff;
`,Lk=v.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,dl=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,fl=v.label`
  color: #fff;
  font-weight: 500;
`,Hf=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Fk=v.textarea`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Bk=v.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Uk=v.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${e=>e.$isActive?"#28a745":"#dc3545"};
  color: white;
`,Wk=()=>{const[e,t]=z.useState([]),[n,r]=z.useState(!0),[o,i]=z.useState(!1),[s,a]=z.useState(null),[u,c]=z.useState({name:"",description:"",sortOrder:0});z.useEffect(()=>{d()},[]);const d=async()=>{try{r(!0);const b=await fe.getMenuTypes();t(b)}catch(b){console.error("Ошибка загрузки типов меню:",b)}finally{r(!1)}},p=()=>{a(null),c({name:"",description:"",sortOrder:0}),i(!0)},m=b=>{a(b),c({name:b.name,description:b.description||"",sortOrder:b.sortOrder}),i(!0)},x=async b=>{var g,f;if(window.confirm("Вы уверены, что хотите удалить этот тип меню?"))try{await fe.deleteMenuType(b),await d()}catch(h){console.error("Ошибка удаления типа меню:",h);const S=((f=(g=h.response)==null?void 0:g.data)==null?void 0:f.error)||h.message||"Ошибка удаления типа меню";alert(`Ошибка: ${S}`)}},y=async b=>{b.preventDefault();try{const g=u.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),f={...u,slug:g};s?await fe.updateMenuType(s.id,f):await fe.createMenuType(f),i(!1),await d()}catch(g){console.error("Ошибка сохранения типа меню:",g)}},w=(b,g)=>{c(f=>({...f,[b]:g}))};return n?l.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):l.jsxs(Ok,{children:[l.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Типы меню"}),l.jsx(no,{onClick:p,children:"+ Добавить тип меню"}),l.jsxs(Mk,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(nr,{children:"Название"}),l.jsx(nr,{children:"Slug"}),l.jsx(nr,{children:"Описание"}),l.jsx(nr,{children:"Статус"}),l.jsx(nr,{children:"Порядок"}),l.jsx(nr,{children:"Действия"})]})}),l.jsx("tbody",{children:e.map(b=>l.jsxs("tr",{children:[l.jsx(rr,{children:b.name}),l.jsx(rr,{children:b.slug}),l.jsx(rr,{children:b.description||"-"}),l.jsx(rr,{children:l.jsx(Uk,{$isActive:b.isActive,children:b.isActive?"Активен":"Неактивен"})}),l.jsx(rr,{children:b.sortOrder}),l.jsxs(rr,{children:[l.jsx(no,{$variant:"secondary",onClick:()=>m(b),children:"Редактировать"}),l.jsx(no,{$variant:"danger",onClick:()=>x(b.id),children:"Удалить"})]})]},b.id))})]}),l.jsx($k,{$isOpen:o,children:l.jsxs(Ak,{children:[l.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:s?"Редактировать тип меню":"Добавить тип меню"}),l.jsxs(Lk,{onSubmit:y,children:[l.jsxs(dl,{children:[l.jsx(fl,{children:"Название"}),l.jsx(Hf,{type:"text",value:u.name,onChange:b=>w("name",b.target.value),placeholder:"Например: Основное меню",required:!0})]}),l.jsxs(dl,{children:[l.jsx(fl,{children:"Описание"}),l.jsx(Fk,{value:u.description,onChange:b=>w("description",b.target.value),placeholder:"Описание типа меню"})]}),l.jsxs(dl,{children:[l.jsx(fl,{children:"Порядок сортировки"}),l.jsx(Hf,{type:"number",value:u.sortOrder,onChange:b=>w("sortOrder",parseInt(b.target.value)),min:"0"})]}),l.jsxs(Bk,{children:[l.jsx(no,{type:"submit",children:s?"Сохранить":"Создать"}),l.jsx(no,{type:"button",$variant:"secondary",onClick:()=>i(!1),children:"Отмена"})]})]})]})})]})},Hk=v.div`
  color: #fff;
`,Vk=v.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,bn=v.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,Cn=v.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,ro=v.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: #dc3545;
          color: white;
          &:hover { background: #c82333; }
        `;case"secondary":return`
          background: #6c757d;
          color: white;
          &:hover { background: #5a6268; }
        `;default:return`
          background: #ffd700;
          color: #000;
          &:hover { background: #ffed4e; }
        `}}}
`,Zk=v.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`,Gk=v.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
`,Xk=v.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Di=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Oi=v.label`
  color: #fff;
  font-weight: 500;
`,Vf=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Yk=v.textarea`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Qk=v.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #333;
    color: #fff;
    padding: 0.5rem;
  }
`,Kk=v.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Jk=v.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${e=>e.$isActive?"#28a745":"#dc3545"};
  color: white;
`,qk=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[o,i]=z.useState(!0),[s,a]=z.useState(!1),[u,c]=z.useState(null),[d,p]=z.useState({name:"",description:"",menuTypeId:0,sortOrder:0});z.useEffect(()=>{m()},[]);const m=async()=>{try{i(!0);const[f,h]=await Promise.all([fe.getMenuCategories(),fe.getMenuTypes()]);t(f),r(h)}catch(f){console.error("Ошибка загрузки данных:",f)}finally{i(!1)}},x=()=>{c(null),p({name:"",description:"",menuTypeId:0,sortOrder:0}),a(!0)},y=f=>{c(f),p({name:f.name,description:f.description||"",menuTypeId:f.menuTypeId,sortOrder:f.sortOrder}),a(!0)},w=async f=>{var h,S;if(window.confirm("Вы уверены, что хотите удалить эту категорию?"))try{await fe.deleteMenuCategory(f),await m()}catch(j){console.error("Ошибка удаления категории:",j);const E=((S=(h=j.response)==null?void 0:h.data)==null?void 0:S.error)||j.message||"Ошибка удаления категории";alert(`Ошибка: ${E}`)}},b=async f=>{f.preventDefault();try{const h=d.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),S={...d,slug:h};u?await fe.updateMenuCategory(u.id,S):await fe.createMenuCategory(S),a(!1),await m()}catch(h){console.error("Ошибка сохранения категории:",h)}},g=(f,h)=>{p(S=>({...S,[f]:h}))};return o?l.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):l.jsxs(Hk,{children:[l.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Категории меню"}),l.jsx(ro,{onClick:x,children:"+ Добавить категорию"}),l.jsxs(Vk,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(bn,{children:"Название"}),l.jsx(bn,{children:"Slug"}),l.jsx(bn,{children:"Тип меню"}),l.jsx(bn,{children:"Описание"}),l.jsx(bn,{children:"Статус"}),l.jsx(bn,{children:"Порядок"}),l.jsx(bn,{children:"Действия"})]})}),l.jsx("tbody",{children:e.map(f=>{const h=n.find(S=>S.id===f.menuTypeId);return l.jsxs("tr",{children:[l.jsx(Cn,{children:f.name}),l.jsx(Cn,{children:f.slug}),l.jsx(Cn,{children:(h==null?void 0:h.name)||"Неизвестно"}),l.jsx(Cn,{children:f.description||"-"}),l.jsx(Cn,{children:l.jsx(Jk,{$isActive:f.isActive,children:f.isActive?"Активна":"Неактивна"})}),l.jsx(Cn,{children:f.sortOrder}),l.jsxs(Cn,{children:[l.jsx(ro,{$variant:"secondary",onClick:()=>y(f),children:"Редактировать"}),l.jsx(ro,{$variant:"danger",onClick:()=>w(f.id),children:"Удалить"})]})]},f.id)})})]}),l.jsx(Zk,{$isOpen:s,children:l.jsxs(Gk,{children:[l.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:u?"Редактировать категорию":"Добавить категорию"}),l.jsxs(Xk,{onSubmit:b,children:[l.jsxs(Di,{children:[l.jsx(Oi,{children:"Тип меню"}),l.jsxs(Qk,{value:d.menuTypeId,onChange:f=>g("menuTypeId",parseInt(f.target.value)),required:!0,children:[l.jsx("option",{value:0,children:"Выберите тип меню"}),n.map(f=>l.jsx("option",{value:f.id,children:f.name},f.id))]})]}),l.jsxs(Di,{children:[l.jsx(Oi,{children:"Название"}),l.jsx(Vf,{type:"text",value:d.name,onChange:f=>g("name",f.target.value),placeholder:"Название категории",required:!0})]}),l.jsxs(Di,{children:[l.jsx(Oi,{children:"Описание"}),l.jsx(Yk,{value:d.description,onChange:f=>g("description",f.target.value),placeholder:"Описание категории"})]}),l.jsxs(Di,{children:[l.jsx(Oi,{children:"Порядок сортировки"}),l.jsx(Vf,{type:"number",value:d.sortOrder,onChange:f=>g("sortOrder",parseInt(f.target.value)),min:"0"})]}),l.jsxs(Kk,{children:[l.jsx(ro,{type:"submit",children:u?"Сохранить":"Создать"}),l.jsx(ro,{type:"button",$variant:"secondary",onClick:()=>a(!1),children:"Отмена"})]})]})]})})]})},eE=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,tE=v.div`
  border: 2px dashed ${e=>e.$isDragOver?"#ffd700":"#333"};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.$hasImage?"#1a1a1a":"transparent"};
  
  &:hover {
    border-color: #ffd700;
    background: #1a1a1a;
  }
`,nE=v.div`
  font-size: 3rem;
  color: #666;
  margin-bottom: 1rem;
`,pl=v.p`
  color: #ccc;
  margin: 0;
  font-size: 1rem;
`,rE=v.input`
  display: none;
`,oE=v.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-top: 1rem;
`,iE=v.div`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`,sE=v.div`
  height: 100%;
  background: #ffd700;
  width: ${e=>e.$progress}%;
  transition: width 0.3s ease;
`,aE=v.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,lE=v.div`
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,uE=v.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  
  &:hover {
    background: #c82333;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,cE=({onImageUpload:e,onImageRemove:t,currentImageUrl:n,disabled:r=!1})=>{const[o,i]=z.useState(!1),[s,a]=z.useState(!1),[u,c]=z.useState(0),[d,p]=z.useState(null),[m,x]=z.useState(!1),[y,w]=z.useState(n||null),b=z.useRef(null),g=async R=>{if(!R.type.startsWith("image/")){p("Пожалуйста, выберите изображение");return}if(R.size>5*1024*1024){p("Размер файла не должен превышать 5MB");return}p(null),a(!0),c(0);try{const k=new FileReader;k.onload=$=>{var B;w((B=$.target)==null?void 0:B.result)},k.readAsDataURL(R);const _=setInterval(()=>{c($=>$>=90?(clearInterval(_),90):$+10)},100),M=await Mg(R);clearInterval(_),c(100),e(M),x(!0),b.current&&(b.current.value=""),setTimeout(()=>{x(!1)},3e3)}catch(k){console.error("❌ Ошибка в ImageUpload:",k);const _=k.message||"Ошибка загрузки изображения";p(_),w(null),b.current&&(b.current.value="")}finally{a(!1),c(0)}},f=R=>{R.preventDefault(),r||i(!0)},h=R=>{R.preventDefault(),i(!1)},S=R=>{if(R.preventDefault(),i(!1),r)return;const k=R.dataTransfer.files;k.length>0&&g(k[0])},j=()=>{!r&&b.current&&b.current.click()},E=R=>{var _;const k=(_=R.target.files)==null?void 0:_[0];k&&g(k)},C=()=>{w(null),p(null),x(!1),b.current&&(b.current.value=""),t&&t()};return l.jsxs(eE,{children:[l.jsx(tE,{$isDragOver:o,$hasImage:!!y,onDragOver:f,onDragLeave:h,onDrop:S,onClick:j,children:y?l.jsxs(l.Fragment,{children:[l.jsx(oE,{src:y,alt:"Предварительный просмотр"}),l.jsx(pl,{style:{marginTop:"1rem"},children:"Нажмите для замены изображения"})]}):l.jsxs(l.Fragment,{children:[l.jsx(nE,{children:"📷"}),l.jsx(pl,{children:s?"Загрузка...":"Перетащите изображение сюда или нажмите для выбора"}),l.jsx(pl,{style:{fontSize:"0.8rem",color:"#666"},children:"Поддерживаются: JPG, PNG, GIF (до 5MB)"})]})}),l.jsx(rE,{ref:b,type:"file",accept:"image/*",onChange:E,disabled:r}),s&&l.jsx(iE,{$progress:u,children:l.jsx(sE,{$progress:u})}),d&&l.jsx(aE,{children:d}),m&&l.jsx(lE,{children:"Изображение успешно загружено!"}),y&&t&&l.jsx(uE,{type:"button",onClick:C,disabled:s,children:"Удалить изображение"})]})},dE=v.div`
  color: #fff;
`,fE=v.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,jn=v.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,kn=v.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,oo=v.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: #dc3545;
          color: white;
          &:hover { background: #c82333; }
        `;case"secondary":return`
          background: #6c757d;
          color: white;
          &:hover { background: #5a6268; }
        `;default:return`
          background: #ffd700;
          color: #000;
          &:hover { background: #ffed4e; }
        `}}}
`,pE=v.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`,hE=v.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
`,mE=v.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,dt=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ft=v.label`
  color: #fff;
  font-weight: 500;
`,En=v.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`,Zf=v.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #333;
    color: #fff;
    padding: 0.5rem;
  }
`,gE=v.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,vE=v.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`,yE=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[o,i]=z.useState([]),[s,a]=z.useState(!0),[u,c]=z.useState(!1),[d,p]=z.useState(null),[m,x]=z.useState({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0});z.useEffect(()=>{y()},[]);const y=async()=>{try{a(!0);const[k,_,M]=await Promise.all([fe.getMenuItems(),fe.getMenuTypes(),fe.getMenuCategories()]);t(k),r(_),i(M)}catch(k){console.error("Ошибка загрузки данных:",k)}finally{a(!1)}},w=()=>{p(null),x({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0}),c(!0)},b=async k=>{var _,M;if(k.preventDefault(),console.log("🚀 Отправляем форму:",m),!m.name.trim()){alert("Пожалуйста, введите название блюда");return}if(m.menuTypeId===0){alert("Пожалуйста, выберите тип меню");return}if(m.categoryId===0){alert("Пожалуйста, выберите категорию");return}if(m.price<=0){alert("Пожалуйста, введите корректную цену");return}try{d?(console.log("📝 Обновляем блюдо:",d.id),await fe.updateMenuItem(d.id,m)):(console.log("➕ Создаем новое блюдо"),await fe.createMenuItem(m)),console.log("✅ Блюдо сохранено успешно"),R(),await y()}catch($){console.error("❌ Ошибка сохранения блюда:",$);const B=((M=(_=$.response)==null?void 0:_.data)==null?void 0:M.error)||$.message||"Ошибка сохранения блюда";alert(`Ошибка: ${B}`)}},g=(k,_)=>{x(M=>({...M,[k]:_}))},f=k=>{x(_=>({..._,imageUrl:k}))},h=()=>{x(k=>({...k,imageUrl:""}))},S=async k=>{var _,M;if(window.confirm("Вы уверены, что хотите удалить это блюдо?"))try{await fe.deleteMenuItem(k),await y(),console.log("✅ Блюдо удалено успешно")}catch($){console.error("❌ Ошибка удаления блюда:",$);const B=((M=(_=$.response)==null?void 0:_.data)==null?void 0:M.error)||$.message||"Ошибка удаления блюда";alert(`Ошибка: ${B}`)}},j=k=>{p(k);const _=o.find(M=>M.id===k.categoryId);x({name:k.name,description:k.description||"",price:k.price,currency:k.currency||"₽",imageUrl:k.imageUrl||"",menuTypeId:(_==null?void 0:_.menuTypeId)||0,categoryId:k.categoryId,allergens:k.allergens||[],weight:k.weight||"",calories:k.calories||0,preparation:k.preparation||"",isPopular:k.isPopular,isActive:k.isActive,sortOrder:k.sortOrder}),c(!0)},E=k=>o.filter(_=>_.menuTypeId===k),C=k=>{x(_=>({..._,menuTypeId:k,categoryId:0}))},R=()=>{c(!1),p(null),x({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0})};return s?l.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):l.jsxs(dE,{children:[l.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Блюда"}),l.jsx(oo,{onClick:w,children:"+ Добавить блюдо"}),l.jsxs(fE,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(jn,{children:"Изображение"}),l.jsx(jn,{children:"Название"}),l.jsx(jn,{children:"Тип меню"}),l.jsx(jn,{children:"Категория"}),l.jsx(jn,{children:"Цена"}),l.jsx(jn,{children:"Статус"}),l.jsx(jn,{children:"Действия"})]})}),l.jsx("tbody",{children:e.map(k=>{const _=o.find($=>$.id===k.categoryId),M=n.find($=>$.id===(_==null?void 0:_.menuTypeId));return l.jsxs("tr",{children:[l.jsx(kn,{children:k.imageUrl?l.jsx(vE,{src:k.imageUrl,alt:k.name}):l.jsx("div",{style:{width:60,height:60,background:"#333",borderRadius:4}})}),l.jsx(kn,{children:k.name}),l.jsx(kn,{children:(M==null?void 0:M.name)||"Неизвестно"}),l.jsx(kn,{children:(_==null?void 0:_.name)||"Неизвестно"}),l.jsxs(kn,{children:[k.price," ₽"]}),l.jsx(kn,{children:l.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.8rem",background:k.isActive?"#28a745":"#dc3545",color:"white"},children:k.isActive?"Активно":"Неактивно"})}),l.jsxs(kn,{children:[l.jsx(oo,{$variant:"secondary",onClick:()=>j(k),children:"Редактировать"}),l.jsx(oo,{$variant:"danger",onClick:()=>S(k.id),children:"Удалить"})]})]},k.id)})})]}),l.jsx(pE,{$isOpen:u,children:l.jsxs(hE,{children:[l.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:d?"Редактировать блюдо":"Добавить блюдо"}),l.jsxs(mE,{onSubmit:b,children:[l.jsxs(dt,{children:[l.jsx(ft,{children:"Тип меню"}),l.jsxs(Zf,{value:m.menuTypeId,onChange:k=>C(parseInt(k.target.value)),required:!0,children:[l.jsx("option",{value:0,children:"Выберите тип меню"}),n.map(k=>l.jsx("option",{value:k.id,children:k.name},k.id))]})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Категория"}),l.jsxs(Zf,{value:m.categoryId,onChange:k=>g("categoryId",parseInt(k.target.value)),required:!0,disabled:m.menuTypeId===0,children:[l.jsx("option",{value:0,children:m.menuTypeId===0?"Сначала выберите тип меню":"Выберите категорию"}),E(m.menuTypeId).map(k=>l.jsx("option",{value:k.id,children:k.name},k.id))]})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Название"}),l.jsx(En,{type:"text",value:m.name,onChange:k=>g("name",k.target.value),placeholder:"Название блюда",required:!0})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Описание"}),l.jsx(En,{type:"text",value:m.description,onChange:k=>g("description",k.target.value),placeholder:"Описание блюда"})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Цена (₽)"}),l.jsx(En,{type:"number",value:m.price,onChange:k=>g("price",parseFloat(k.target.value)),min:"0",step:"0.01",required:!0})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Вес/Объем"}),l.jsx(En,{type:"text",value:m.weight,onChange:k=>g("weight",k.target.value),placeholder:"Например: 300г, 0.5л"})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Калории"}),l.jsx(En,{type:"number",value:m.calories,onChange:k=>g("calories",parseInt(k.target.value)),min:"0"})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Время приготовления"}),l.jsx(En,{type:"text",value:m.preparation,onChange:k=>g("preparation",k.target.value),placeholder:"Например: 15 мин"})]}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Изображение"}),l.jsx(cE,{onImageUpload:f,onImageRemove:h,currentImageUrl:m.imageUrl})]}),l.jsx(dt,{children:l.jsxs(ft,{children:[l.jsx("input",{type:"checkbox",checked:m.isPopular,onChange:k=>g("isPopular",k.target.checked)}),"Популярное блюдо"]})}),l.jsxs(dt,{children:[l.jsx(ft,{children:"Порядок сортировки"}),l.jsx(En,{type:"number",value:m.sortOrder,onChange:k=>g("sortOrder",parseInt(k.target.value)),min:"0"})]}),l.jsxs(gE,{children:[l.jsx(oo,{type:"submit",children:d?"Сохранить":"Создать"}),l.jsx(oo,{type:"button",$variant:"secondary",onClick:R,children:"Отмена"})]})]})]})})]})},xE=v.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #262935;
`,wE=v.main`
  flex: 1;
  padding: 2rem 0;
`,SE=v.div`
  width: 250px;
  background: #1a1a1a;
  padding: 2rem 0;
  border-right: 1px solid #333;
`,bE=v.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${e=>e.$active?"#ffd700":"#fff"};
  background: ${e=>e.$active?"#333":"transparent"};
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    color: #ffd700;
  }
`,CE=v.div`
  flex: 1;
  padding: 2rem;
`,jE=v.div`
  display: flex;
  min-height: calc(100vh - 80px);
`,kE=v.h1`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,EE=[{key:"create-zone",label:"Создать зону"},{key:"zone-constructor",label:"Конструктор зоны"},{key:"manage-zones",label:"Управление зонами"},{key:"menu",label:"Меню"},{key:"bookings",label:"Бронирования"},{key:"settings",label:"Настройки"}],zE=()=>{const[e,t]=z.useState("create-zone"),[n,r]=z.useState([]),[o,i]=z.useState(null),[s,a]=z.useState(!1);ze.useEffect(()=>{(async()=>{try{const m=await Dg();r(m)}catch(m){console.error("Ошибка загрузки зон:",m)}})()},[]);const u=p=>{i(p)},c=()=>{a(!0)},d=()=>{switch(e){case"create-zone":return l.jsx(Lf,{});case"zone-constructor":return s?l.jsx(jk,{zoneId:(o==null?void 0:o.id)||0,zoneName:o==null?void 0:o.name}):l.jsx(Dk,{zones:n,onZoneSelect:u,selectedZone:o,onContinue:c});case"manage-zones":return l.jsx("div",{children:"Управление зонами (в разработке)"});case"menu":return l.jsx(PE,{});case"bookings":return l.jsx("div",{children:"Бронирования (в разработке)"});case"settings":return l.jsx("div",{children:"Настройки (в разработке)"});default:return l.jsx(Lf,{})}};return l.jsx(xE,{children:l.jsx(wE,{children:l.jsxs(jE,{children:[l.jsx(SE,{children:EE.map(p=>l.jsx(bE,{$active:e===p.key,onClick:()=>t(p.key),children:p.label},p.key))}),l.jsxs(CE,{children:[l.jsx(kE,{children:"Панель администратора"}),d()]})]})})})},PE=()=>{const[e,t]=z.useState("types");return l.jsxs("div",{children:[l.jsx("h2",{style:{color:"#ffd700",marginBottom:"1rem"},children:"Управление меню"}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem"},children:[l.jsx("button",{onClick:()=>t("types"),style:{padding:"0.5rem 1rem",background:e==="types"?"#ffd700":"#333",color:e==="types"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Типы меню"}),l.jsx("button",{onClick:()=>t("categories"),style:{padding:"0.5rem 1rem",background:e==="categories"?"#ffd700":"#333",color:e==="categories"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Категории"}),l.jsx("button",{onClick:()=>t("items"),style:{padding:"0.5rem 1rem",background:e==="items"?"#ffd700":"#333",color:e==="items"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Блюда"})]}),e==="types"&&l.jsx(Wk,{}),e==="categories"&&l.jsx(qk,{}),e==="items"&&l.jsx(yE,{})]})};function RE(){return l.jsx(ux,{children:l.jsx(T1,{children:l.jsxs(nx,{children:[l.jsx(je,{path:"/",element:l.jsx(X1,{})}),l.jsx(je,{path:"/3d-tour",element:l.jsx(Jj,{})}),l.jsx(je,{path:"/billiards",element:l.jsx(ow,{})}),l.jsx(je,{path:"/karaoke",element:l.jsx(uw,{})}),l.jsx(je,{path:"/disco",element:l.jsx(hw,{})}),l.jsx(je,{path:"/playstation",element:l.jsx(xw,{})}),l.jsx(je,{path:"/lounge",element:l.jsx(jw,{})}),l.jsx(je,{path:"/games",element:l.jsx(Rw,{})}),l.jsx(je,{path:"/booking",element:l.jsx(xj,{})}),l.jsx(je,{path:"/menu",element:l.jsx(Mj,{})}),l.jsx(je,{path:"/events",element:l.jsx(Bj,{})}),l.jsx(je,{path:"/cards",element:l.jsx(Zj,{})}),l.jsx(je,{path:"/contact",element:l.jsx(q1,{})}),l.jsx(je,{path:"/security",element:l.jsx(ak,{})}),l.jsx(je,{path:"/admin",element:l.jsx(zE,{})})]})})})}const _E=h1`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #222222;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;hl.createRoot(document.getElementById("root")).render(l.jsxs(ze.StrictMode,{children:[l.jsx(_E,{}),l.jsx(RE,{})]}));

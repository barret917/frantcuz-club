function Hx(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Yx(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var Jh={exports:{}},Is={},Zh={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),e1=Symbol.for("react.memo"),t1=Symbol.for("react.lazy"),tf=Symbol.iterator;function r1(e){return e===null||typeof e!="object"?null:(e=tf&&e[tf]||e["@@iterator"],typeof e=="function"?e:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,rm={};function fi(e,t,r){this.props=e,this.context=t,this.refs=rm,this.updater=r||em}fi.prototype.isReactComponent={};fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nm(){}nm.prototype=fi.prototype;function Yd(e,t,r){this.props=e,this.context=t,this.refs=rm,this.updater=r||em}var Vd=Yd.prototype=new nm;Vd.constructor=Yd;tm(Vd,fi.prototype);Vd.isPureReactComponent=!0;var rf=Array.isArray,im=Object.prototype.hasOwnProperty,Gd={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function am(e,t,r){var n,o={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)im.call(t,n)&&!om.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];o.children=d}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:So,type:e,key:a,ref:s,props:o,_owner:Gd.current}}function n1(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xd(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function i1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var nf=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i1(""+e.key):t.toString(36)}function Na(e,t,r,n,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case So:case Vx:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+pl(s,0):n,rf(o)?(r="",e!=null&&(r=e.replace(nf,"$&/")+"/"),Na(o,t,r,"",function(u){return u})):o!=null&&(Xd(o)&&(o=n1(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(nf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",rf(e))for(var l=0;l<e.length;l++){a=e[l];var d=n+pl(a,l);s+=Na(a,t,r,d,o)}else if(d=r1(e),typeof d=="function")for(e=d.call(e),l=0;!(a=e.next()).done;)a=a.value,d=n+pl(a,l++),s+=Na(a,t,r,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fo(e,t,r){if(e==null)return e;var n=[],o=0;return Na(e,n,"","",function(a){return t.call(r,a,o++)}),n}function o1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},_a={transition:null},a1={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Gd};function sm(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Fo,forEach:function(e,t,r){Fo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Fo(e,function(){t++}),t},toArray:function(e){return Fo(e,function(t){return t})||[]},only:function(e){if(!Xd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=fi;W.Fragment=Gx;W.Profiler=qx;W.PureComponent=Yd;W.StrictMode=Xx;W.Suspense=Zx;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;W.act=sm;W.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=tm({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Gd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)im.call(t,d)&&!om.hasOwnProperty(d)&&(n[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)n.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:So,type:e.type,key:o,ref:a,props:n,_owner:s}};W.createContext=function(e){return e={$$typeof:Qx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kx,_context:e},e.Consumer=e};W.createElement=am;W.createFactory=function(e){var t=am.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Jx,render:e}};W.isValidElement=Xd;W.lazy=function(e){return{$$typeof:t1,_payload:{_status:-1,_result:e},_init:o1}};W.memo=function(e,t){return{$$typeof:e1,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=_a.transition;_a.transition={};try{e()}finally{_a.transition=t}};W.unstable_act=sm;W.useCallback=function(e,t){return Ae.current.useCallback(e,t)};W.useContext=function(e){return Ae.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ae.current.useEffect(e,t)};W.useId=function(){return Ae.current.useId()};W.useImperativeHandle=function(e,t,r){return Ae.current.useImperativeHandle(e,t,r)};W.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ae.current.useMemo(e,t)};W.useReducer=function(e,t,r){return Ae.current.useReducer(e,t,r)};W.useRef=function(e){return Ae.current.useRef(e)};W.useState=function(e){return Ae.current.useState(e)};W.useSyncExternalStore=function(e,t,r){return Ae.current.useSyncExternalStore(e,t,r)};W.useTransition=function(){return Ae.current.useTransition()};W.version="18.3.1";Zh.exports=W;var C=Zh.exports;const Ne=Hd(C),s1=Hx({__proto__:null,default:Ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=C,c1=Symbol.for("react.element"),d1=Symbol.for("react.fragment"),u1=Object.prototype.hasOwnProperty,f1=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p1={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,r){var n,o={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)u1.call(t,n)&&!p1.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:c1,type:e,key:a,ref:s,props:o,_owner:f1.current}}Is.Fragment=d1;Is.jsx=lm;Is.jsxs=lm;Jh.exports=Is;var i=Jh.exports,Nc={},cm={exports:{}},at={},dm={exports:{}},um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var O=T.length;T.push(M);e:for(;0<O;){var q=O-1>>>1,K=T[q];if(0<o(K,M))T[q]=M,T[O]=K,O=q;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var M=T[0],O=T.pop();if(O!==M){T[0]=O;e:for(var q=0,K=T.length,_r=K>>>1;q<_r;){var mt=2*(q+1)-1,rr=T[mt],Je=mt+1,Ut=T[Je];if(0>o(rr,O))Je<K&&0>o(Ut,rr)?(T[q]=Ut,T[Je]=O,q=Je):(T[q]=rr,T[mt]=O,q=mt);else if(Je<K&&0>o(Ut,O))T[q]=Ut,T[Je]=O,q=Je;else break e}}return M}function o(T,M){var O=T.sortIndex-M.sortIndex;return O!==0?O:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],u=[],p=1,h=null,m=3,b=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=T)n(u),M.sortIndex=M.expirationTime,t(d,M);else break;M=r(u)}}function S(T){if(v=!1,g(T),!y)if(r(d)!==null)y=!0,ne(j);else{var M=r(u);M!==null&&ve(S,M.startTime-T)}}function j(T,M){y=!1,v&&(v=!1,x(R),R=-1),b=!0;var O=m;try{for(g(M),h=r(d);h!==null&&(!(h.expirationTime>M)||T&&!N());){var q=h.callback;if(typeof q=="function"){h.callback=null,m=h.priorityLevel;var K=q(h.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?h.callback=K:h===r(d)&&n(d),g(M)}else n(d);h=r(d)}if(h!==null)var _r=!0;else{var mt=r(u);mt!==null&&ve(S,mt.startTime-M),_r=!1}return _r}finally{h=null,m=O,b=!1}}var k=!1,z=null,R=-1,E=5,P=-1;function N(){return!(e.unstable_now()-P<E)}function D(){if(z!==null){var T=e.unstable_now();P=T;var M=!0;try{M=z(!0,T)}finally{M?A():(k=!1,z=null)}}else k=!1}var A;if(typeof f=="function")A=function(){f(D)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,Be=J.port2;J.port1.onmessage=D,A=function(){Be.postMessage(null)}}else A=function(){w(D,0)};function ne(T){z=T,k||(k=!0,A())}function ve(T,M){R=w(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,ne(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var O=m;m=M;try{return T()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return M()}finally{m=O}},e.unstable_scheduleCallback=function(T,M,O){var q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?q+O:q):O=q,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,T={id:p++,callback:M,priorityLevel:T,startTime:O,expirationTime:K,sortIndex:-1},O>q?(T.sortIndex=O,t(u,T),r(d)===null&&T===r(u)&&(v?(x(R),R=-1):v=!0,ve(S,O-q))):(T.sortIndex=K,t(d,T),y||b||(y=!0,ne(j))),T},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(T){var M=m;return function(){var O=m;m=M;try{return T.apply(this,arguments)}finally{m=O}}}})(um);dm.exports=um;var h1=dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=C,ot=h1;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,to={};function sn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(to[e]=t,e=0;e<t.length;e++)fm.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,g1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},af={};function x1(e){return _c.call(af,e)?!0:_c.call(of,e)?!1:g1.test(e)?af[e]=!0:(of[e]=!0,!1)}function b1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y1(e,t,r,n){if(t===null||typeof t>"u"||b1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,r,n,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qd,Kd);Ee[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qd,Kd);Ee[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qd,Kd);Ee[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qd(e,t,r,n){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y1(t,r,o,n)&&(r=null),n||o===null?x1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var tr=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),sf=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,hl;function Li(e){if(hl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var ml=!1;function gl(e,t){if(!e||ml)return"";ml=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=n.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ml=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Li(e):""}function v1(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Tn:return"Portal";case Mc:return"Profiler";case Jd:return"StrictMode";case Dc:return"Suspense";case Oc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hm:return(e.displayName||"Context")+".Consumer";case pm:return(e._context.displayName||"Context")+".Provider";case Zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function w1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j1(e){var t=gm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=j1(e))}function xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=gm(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ac(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Pr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bm(e,t){t=t.checked,t!=null&&Qd(e,"checked",t,!1)}function Lc(e,t){bm(e,t);var r=Pr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bc(e,t.type,r):t.hasOwnProperty("defaultValue")&&Bc(e,t.type,Pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Bc(e,t,r){(t!=="number"||Za(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Bi=Array.isArray;function Vn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Pr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function df(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(I(92));if(Bi(r)){if(1<r.length)throw Error(I(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Pr(r)}}function ym(e,t){var r=Pr(t.value),n=Pr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function uf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,wm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S1=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){S1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function jm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function Sm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=jm(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var k1=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(e,t){if(t){if(k1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Yc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gc=null,Gn=null,Xn=null;function ff(e){if(e=zo(e)){if(typeof Gc!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ds(t),Gc(e.stateNode,e.type,t))}}function km(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function Cm(){if(Gn){var e=Gn,t=Xn;if(Xn=Gn=null,ff(e),t)for(e=0;e<t.length;e++)ff(t[e])}}function zm(e,t){return e(t)}function Em(){}var xl=!1;function $m(e,t,r){if(xl)return e(t,r);xl=!0;try{return zm(e,t,r)}finally{xl=!1,(Gn!==null||Xn!==null)&&(Em(),Cm())}}function no(e,t){var r=e.stateNode;if(r===null)return null;var n=Ds(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(I(231,t,typeof r));return r}var Xc=!1;if(Qt)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Xc=!1}function C1(e,t,r,n,o,a,s,l,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(p){this.onError(p)}}var Vi=!1,es=null,ts=!1,qc=null,z1={onError:function(e){Vi=!0,es=e}};function E1(e,t,r,n,o,a,s,l,d){Vi=!1,es=null,C1.apply(z1,arguments)}function $1(e,t,r,n,o,a,s,l,d){if(E1.apply(this,arguments),Vi){if(Vi){var u=es;Vi=!1,es=null}else throw Error(I(198));ts||(ts=!0,qc=u)}}function ln(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Pm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pf(e){if(ln(e)!==e)throw Error(I(188))}function P1(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(I(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return pf(o),e;if(a===n)return pf(o),t;a=a.sibling}throw Error(I(188))}if(r.return!==n.return)r=o,n=a;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=a;break}if(l===n){s=!0,n=o,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=o;break}if(l===n){s=!0,n=a,r=o;break}l=l.sibling}if(!s)throw Error(I(189))}}if(r.alternate!==n)throw Error(I(190))}if(r.tag!==3)throw Error(I(188));return r.stateNode.current===r?e:t}function Rm(e){return e=P1(e),e!==null?Im(e):null}function Im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Im(e);if(t!==null)return t;e=e.sibling}return null}var Tm=ot.unstable_scheduleCallback,hf=ot.unstable_cancelCallback,R1=ot.unstable_shouldYield,I1=ot.unstable_requestPaint,de=ot.unstable_now,T1=ot.unstable_getCurrentPriorityLevel,ru=ot.unstable_ImmediatePriority,Nm=ot.unstable_UserBlockingPriority,rs=ot.unstable_NormalPriority,N1=ot.unstable_LowPriority,_m=ot.unstable_IdlePriority,Ts=null,Ft=null;function _1(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:O1,M1=Math.log,D1=Math.LN2;function O1(e){return e>>>=0,e===0?32:31-(M1(e)/D1|0)|0}var Uo=64,Wo=4194304;function Ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~o;l!==0?n=Ui(l):(a&=s,a!==0&&(n=Ui(a)))}else s=r&~o,s!==0?n=Ui(s):a!==0&&(n=Ui(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-kt(t),o=1<<r,n|=e[r],t&=~o;return n}function F1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-kt(a),l=1<<s,d=o[s];d===-1?(!(l&r)||l&n)&&(o[s]=F1(l,t)):d<=t&&(e.expiredLanes|=l),a&=~l}}function Kc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mm(){var e=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),e}function bl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ko(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function L1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-kt(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}function nu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-kt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var X=0;function Dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Om,iu,Fm,Am,Lm,Qc=!1,Ho=[],yr=null,vr=null,wr=null,io=new Map,oo=new Map,hr=[],B1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function ji(e,t,r,n,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function U1(e,t,r,n,o){switch(t){case"focusin":return yr=ji(yr,e,t,r,n,o),!0;case"dragenter":return vr=ji(vr,e,t,r,n,o),!0;case"mouseover":return wr=ji(wr,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return io.set(a,ji(io.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,oo.set(a,ji(oo.get(a)||null,e,t,r,n,o)),!0}return!1}function Bm(e){var t=Hr(e.target);if(t!==null){var r=ln(t);if(r!==null){if(t=r.tag,t===13){if(t=Pm(r),t!==null){e.blockedOn=t,Lm(e.priority,function(){Fm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Jc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Vc=n,r.target.dispatchEvent(n),Vc=null}else return t=zo(r),t!==null&&iu(t),e.blockedOn=r,!1;t.shift()}return!0}function gf(e,t,r){Ma(e)&&r.delete(t)}function W1(){Qc=!1,yr!==null&&Ma(yr)&&(yr=null),vr!==null&&Ma(vr)&&(vr=null),wr!==null&&Ma(wr)&&(wr=null),io.forEach(gf),oo.forEach(gf)}function Si(e,t){e.blockedOn===t&&(e.blockedOn=null,Qc||(Qc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,W1)))}function ao(e){function t(o){return Si(o,e)}if(0<Ho.length){Si(Ho[0],e);for(var r=1;r<Ho.length;r++){var n=Ho[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yr!==null&&Si(yr,e),vr!==null&&Si(vr,e),wr!==null&&Si(wr,e),io.forEach(t),oo.forEach(t),r=0;r<hr.length;r++)n=hr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<hr.length&&(r=hr[0],r.blockedOn===null);)Bm(r),r.blockedOn===null&&hr.shift()}var qn=tr.ReactCurrentBatchConfig,is=!0;function H1(e,t,r,n){var o=X,a=qn.transition;qn.transition=null;try{X=1,ou(e,t,r,n)}finally{X=o,qn.transition=a}}function Y1(e,t,r,n){var o=X,a=qn.transition;qn.transition=null;try{X=4,ou(e,t,r,n)}finally{X=o,qn.transition=a}}function ou(e,t,r,n){if(is){var o=Jc(e,t,r,n);if(o===null)$l(e,t,n,os,r),mf(e,n);else if(U1(o,e,t,r,n))n.stopPropagation();else if(mf(e,n),t&4&&-1<B1.indexOf(e)){for(;o!==null;){var a=zo(o);if(a!==null&&Om(a),a=Jc(e,t,r,n),a===null&&$l(e,t,n,os,r),a===o)break;o=a}o!==null&&n.stopPropagation()}else $l(e,t,n,null,r)}}var os=null;function Jc(e,t,r,n){if(os=null,e=tu(n),e=Hr(e),e!==null)if(t=ln(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Pm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function Um(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T1()){case ru:return 1;case Nm:return 4;case rs:case N1:return 16;case _m:return 536870912;default:return 16}default:return 16}}var gr=null,au=null,Da=null;function Wm(){if(Da)return Da;var e,t=au,r=t.length,n,o="value"in gr?gr.value:gr.textContent,a=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[a-n];n++);return Da=o.slice(e,1<n?1-n:void 0)}function Oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function xf(){return!1}function st(e){function t(r,n,o,a,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yo:xf,this.isPropagationStopped=xf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=st(pi),Co=se({},pi,{view:0,detail:0}),V1=st(Co),yl,vl,ki,Ns=se({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(yl=e.screenX-ki.screenX,vl=e.screenY-ki.screenY):vl=yl=0,ki=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),bf=st(Ns),G1=se({},Ns,{dataTransfer:0}),X1=st(G1),q1=se({},Co,{relatedTarget:0}),wl=st(q1),K1=se({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=st(K1),J1=se({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z1=st(J1),e5=se({},pi,{data:0}),yf=st(e5),t5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n5[e])?!!t[e]:!1}function lu(){return i5}var o5=se({},Co,{key:function(e){if(e.key){var t=t5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a5=st(o5),s5=se({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=st(s5),l5=se({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),c5=st(l5),d5=se({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),u5=st(d5),f5=se({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p5=st(f5),h5=[9,13,27,32],cu=Qt&&"CompositionEvent"in window,Gi=null;Qt&&"documentMode"in document&&(Gi=document.documentMode);var m5=Qt&&"TextEvent"in window&&!Gi,Hm=Qt&&(!cu||Gi&&8<Gi&&11>=Gi),wf=" ",jf=!1;function Ym(e,t){switch(e){case"keyup":return h5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function g5(e,t){switch(e){case"compositionend":return Vm(t);case"keypress":return t.which!==32?null:(jf=!0,wf);case"textInput":return e=t.data,e===wf&&jf?null:e;default:return null}}function x5(e,t){if(_n)return e==="compositionend"||!cu&&Ym(e,t)?(e=Wm(),Da=au=gr=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hm&&t.locale!=="ko"?null:t.data;default:return null}}var b5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b5[e.type]:t==="textarea"}function Gm(e,t,r,n){km(n),t=as(t,"onChange"),0<t.length&&(r=new su("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Xi=null,so=null;function y5(e){ig(e,0)}function _s(e){var t=On(e);if(xm(t))return e}function v5(e,t){if(e==="change")return t}var Xm=!1;if(Qt){var jl;if(Qt){var Sl="oninput"in document;if(!Sl){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Sl=typeof kf.oninput=="function"}jl=Sl}else jl=!1;Xm=jl&&(!document.documentMode||9<document.documentMode)}function Cf(){Xi&&(Xi.detachEvent("onpropertychange",qm),so=Xi=null)}function qm(e){if(e.propertyName==="value"&&_s(so)){var t=[];Gm(t,so,e,tu(e)),$m(y5,t)}}function w5(e,t,r){e==="focusin"?(Cf(),Xi=t,so=r,Xi.attachEvent("onpropertychange",qm)):e==="focusout"&&Cf()}function j5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _s(so)}function S5(e,t){if(e==="click")return _s(t)}function k5(e,t){if(e==="input"||e==="change")return _s(t)}function C5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:C5;function lo(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!_c.call(t,o)||!Et(e[o],t[o]))return!1}return!0}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var r=zf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zf(r)}}function Km(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Km(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qm(){for(var e=window,t=Za();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Za(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function z5(e){var t=Qm(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Km(r.ownerDocument.documentElement,r)){if(n!==null&&du(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=n.end===void 0?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=Ef(r,a);var s=Ef(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E5=Qt&&"documentMode"in document&&11>=document.documentMode,Mn=null,Zc=null,qi=null,ed=!1;function $f(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ed||Mn==null||Mn!==Za(n)||(n=Mn,"selectionStart"in n&&du(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qi&&lo(qi,n)||(qi=n,n=as(Zc,"onSelect"),0<n.length&&(t=new su("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Mn)))}function Vo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Dn={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},kl={},Jm={};Qt&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Ms(e){if(kl[e])return kl[e];if(!Dn[e])return e;var t=Dn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jm)return kl[e]=t[r];return e}var Zm=Ms("animationend"),eg=Ms("animationiteration"),tg=Ms("animationstart"),rg=Ms("transitionend"),ng=new Map,Pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){ng.set(e,t),sn(t,[e])}for(var Cl=0;Cl<Pf.length;Cl++){var zl=Pf[Cl],$5=zl.toLowerCase(),P5=zl[0].toUpperCase()+zl.slice(1);Ir($5,"on"+P5)}Ir(Zm,"onAnimationEnd");Ir(eg,"onAnimationIteration");Ir(tg,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(rg,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Rf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,$1(n,t,void 0,e),e.currentTarget=null}function ig(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==a&&o.isPropagationStopped())break e;Rf(o,l,u),a=d}else for(s=0;s<n.length;s++){if(l=n[s],d=l.instance,u=l.currentTarget,l=l.listener,d!==a&&o.isPropagationStopped())break e;Rf(o,l,u),a=d}}}if(ts)throw e=qc,ts=!1,qc=null,e}function Z(e,t){var r=t[od];r===void 0&&(r=t[od]=new Set);var n=e+"__bubble";r.has(n)||(og(t,e,2,!1),r.add(n))}function El(e,t,r){var n=0;t&&(n|=4),og(r,e,n,t)}var Go="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Go]){e[Go]=!0,fm.forEach(function(r){r!=="selectionchange"&&(R5.has(r)||El(r,!1,e),El(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Go]||(t[Go]=!0,El("selectionchange",!1,t))}}function og(e,t,r,n){switch(Um(t)){case 1:var o=H1;break;case 4:o=Y1;break;default:o=ou}r=o.bind(null,t,r,e),o=void 0,!Xc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function $l(e,t,r,n,o){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Hr(l),s===null)return;if(d=s.tag,d===5||d===6){n=a=s;continue e}l=l.parentNode}}n=n.return}$m(function(){var u=a,p=tu(r),h=[];e:{var m=ng.get(e);if(m!==void 0){var b=su,y=e;switch(e){case"keypress":if(Oa(r)===0)break e;case"keydown":case"keyup":b=a5;break;case"focusin":y="focus",b=wl;break;case"focusout":y="blur",b=wl;break;case"beforeblur":case"afterblur":b=wl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=c5;break;case Zm:case eg:case tg:b=Q1;break;case rg:b=u5;break;case"scroll":b=V1;break;case"wheel":b=p5;break;case"copy":case"cut":case"paste":b=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=vf}var v=(t&4)!==0,w=!v&&e==="scroll",x=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,x!==null&&(S=no(f,x),S!=null&&v.push(uo(f,S,g)))),w)break;f=f.return}0<v.length&&(m=new b(m,y,null,r,p),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==Vc&&(y=r.relatedTarget||r.fromElement)&&(Hr(y)||y[Jt]))break e;if((b||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,b?(y=r.relatedTarget||r.toElement,b=u,y=y?Hr(y):null,y!==null&&(w=ln(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=u),b!==y)){if(v=bf,S="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=vf,S="onPointerLeave",x="onPointerEnter",f="pointer"),w=b==null?m:On(b),g=y==null?m:On(y),m=new v(S,f+"leave",b,r,p),m.target=w,m.relatedTarget=g,S=null,Hr(p)===u&&(v=new v(x,f+"enter",y,r,p),v.target=g,v.relatedTarget=w,S=v),w=S,b&&y)t:{for(v=b,x=y,f=0,g=v;g;g=pn(g))f++;for(g=0,S=x;S;S=pn(S))g++;for(;0<f-g;)v=pn(v),f--;for(;0<g-f;)x=pn(x),g--;for(;f--;){if(v===x||x!==null&&v===x.alternate)break t;v=pn(v),x=pn(x)}v=null}else v=null;b!==null&&If(h,m,b,v,!1),y!==null&&w!==null&&If(h,w,y,v,!0)}}e:{if(m=u?On(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var j=v5;else if(Sf(m))if(Xm)j=k5;else{j=j5;var k=w5}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=S5);if(j&&(j=j(e,u))){Gm(h,j,r,p);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Bc(m,"number",m.value)}switch(k=u?On(u):window,e){case"focusin":(Sf(k)||k.contentEditable==="true")&&(Mn=k,Zc=u,qi=null);break;case"focusout":qi=Zc=Mn=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,$f(h,r,p);break;case"selectionchange":if(E5)break;case"keydown":case"keyup":$f(h,r,p)}var z;if(cu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _n?Ym(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(Hm&&r.locale!=="ko"&&(_n||R!=="onCompositionStart"?R==="onCompositionEnd"&&_n&&(z=Wm()):(gr=p,au="value"in gr?gr.value:gr.textContent,_n=!0)),k=as(u,R),0<k.length&&(R=new yf(R,e,null,r,p),h.push({event:R,listeners:k}),z?R.data=z:(z=Vm(r),z!==null&&(R.data=z)))),(z=m5?g5(e,r):x5(e,r))&&(u=as(u,"onBeforeInput"),0<u.length&&(p=new yf("onBeforeInput","beforeinput",null,r,p),h.push({event:p,listeners:u}),p.data=z))}ig(h,t)})}function uo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function as(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=no(e,r),a!=null&&n.unshift(uo(e,a,o)),a=no(e,t),a!=null&&n.push(uo(e,a,o))),e=e.return}return n}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function If(e,t,r,n,o){for(var a=t._reactName,s=[];r!==null&&r!==n;){var l=r,d=l.alternate,u=l.stateNode;if(d!==null&&d===n)break;l.tag===5&&u!==null&&(l=u,o?(d=no(r,a),d!=null&&s.unshift(uo(r,d,l))):o||(d=no(r,a),d!=null&&s.push(uo(r,d,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var I5=/\r\n?/g,T5=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(I5,`
`).replace(T5,"")}function Xo(e,t,r){if(t=Tf(t),Tf(e)!==t&&r)throw Error(I(425))}function ss(){}var td=null,rd=null;function nd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,N5=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,_5=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(M5)}:id;function M5(e){setTimeout(function(){throw e})}function Pl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),ao(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);ao(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+hi,fo="__reactProps$"+hi,Jt="__reactContainer$"+hi,od="__reactEvents$"+hi,D5="__reactListeners$"+hi,O5="__reactHandles$"+hi;function Hr(e){var t=e[Ot];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Jt]||r[Ot]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_f(e);e!==null;){if(r=e[Ot])return r;e=_f(e)}return t}e=r,r=e.parentNode}return null}function zo(e){return e=e[Ot]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ds(e){return e[fo]||null}var ad=[],Fn=-1;function Tr(e){return{current:e}}function re(e){0>Fn||(e.current=ad[Fn],ad[Fn]=null,Fn--)}function Q(e,t){Fn++,ad[Fn]=e.current,e.current=t}var Rr={},Me=Tr(Rr),Ge=Tr(!1),en=Rr;function Zn(e,t){var r=e.type.contextTypes;if(!r)return Rr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Xe(e){return e=e.childContextTypes,e!=null}function ls(){re(Ge),re(Me)}function Mf(e,t,r){if(Me.current!==Rr)throw Error(I(168));Q(Me,t),Q(Ge,r)}function ag(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(I(108,w1(e)||"Unknown",o));return se({},r,n)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rr,en=Me.current,Q(Me,e),Q(Ge,Ge.current),!0}function Df(e,t,r){var n=e.stateNode;if(!n)throw Error(I(169));r?(e=ag(e,t,en),n.__reactInternalMemoizedMergedChildContext=e,re(Ge),re(Me),Q(Me,e)):re(Ge),Q(Ge,r)}var Gt=null,Os=!1,Rl=!1;function sg(e){Gt===null?Gt=[e]:Gt.push(e)}function F5(e){Os=!0,sg(e)}function Nr(){if(!Rl&&Gt!==null){Rl=!0;var e=0,t=X;try{var r=Gt;for(X=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Gt=null,Os=!1}catch(o){throw Gt!==null&&(Gt=Gt.slice(e+1)),Tm(ru,Nr),o}finally{X=t,Rl=!1}}return null}var An=[],Ln=0,ds=null,us=0,lt=[],ct=0,tn=null,Xt=1,qt="";function Ur(e,t){An[Ln++]=us,An[Ln++]=ds,ds=e,us=t}function lg(e,t,r){lt[ct++]=Xt,lt[ct++]=qt,lt[ct++]=tn,tn=e;var n=Xt;e=qt;var o=32-kt(n)-1;n&=~(1<<o),r+=1;var a=32-kt(t)+o;if(30<a){var s=o-o%5;a=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Xt=1<<32-kt(t)+o|r<<o|n,qt=a+e}else Xt=1<<a|r<<o|n,qt=e}function uu(e){e.return!==null&&(Ur(e,1),lg(e,1,0))}function fu(e){for(;e===ds;)ds=An[--Ln],An[Ln]=null,us=An[--Ln],An[Ln]=null;for(;e===tn;)tn=lt[--ct],lt[ct]=null,qt=lt[--ct],lt[ct]=null,Xt=lt[--ct],lt[ct]=null}var nt=null,rt=null,ie=!1,St=null;function cg(e,t){var r=dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Of(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=tn!==null?{id:Xt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,nt=e,rt=null,!0):!1;default:return!1}}function sd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ld(e){if(ie){var t=rt;if(t){var r=t;if(!Of(e,t)){if(sd(e))throw Error(I(418));t=jr(r.nextSibling);var n=nt;t&&Of(e,t)?cg(n,r):(e.flags=e.flags&-4097|2,ie=!1,nt=e)}}else{if(sd(e))throw Error(I(418));e.flags=e.flags&-4097|2,ie=!1,nt=e}}}function Ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function qo(e){if(e!==nt)return!1;if(!ie)return Ff(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nd(e.type,e.memoizedProps)),t&&(t=rt)){if(sd(e))throw dg(),Error(I(418));for(;t;)cg(e,t),t=jr(t.nextSibling)}if(Ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){rt=jr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?jr(e.stateNode.nextSibling):null;return!0}function dg(){for(var e=rt;e;)e=jr(e.nextSibling)}function ei(){rt=nt=null,ie=!1}function pu(e){St===null?St=[e]:St.push(e)}var A5=tr.ReactCurrentBatchConfig;function Ci(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(I(309));var n=r.stateNode}if(!n)throw Error(I(147,e));var o=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=o.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(I(284));if(!r._owner)throw Error(I(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Af(e){var t=e._init;return t(e._payload)}function ug(e){function t(x,f){if(e){var g=x.deletions;g===null?(x.deletions=[f],x.flags|=16):g.push(f)}}function r(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function n(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function o(x,f){return x=zr(x,f),x.index=0,x.sibling=null,x}function a(x,f,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<f?(x.flags|=2,f):g):(x.flags|=2,f)):(x.flags|=1048576,f)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,f,g,S){return f===null||f.tag!==6?(f=Ol(g,x.mode,S),f.return=x,f):(f=o(f,g),f.return=x,f)}function d(x,f,g,S){var j=g.type;return j===Nn?p(x,f,g.props.children,S,g.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fr&&Af(j)===f.type)?(S=o(f,g.props),S.ref=Ci(x,f,g),S.return=x,S):(S=Ha(g.type,g.key,g.props,null,x.mode,S),S.ref=Ci(x,f,g),S.return=x,S)}function u(x,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Fl(g,x.mode,S),f.return=x,f):(f=o(f,g.children||[]),f.return=x,f)}function p(x,f,g,S,j){return f===null||f.tag!==7?(f=Qr(g,x.mode,S,j),f.return=x,f):(f=o(f,g),f.return=x,f)}function h(x,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ol(""+f,x.mode,g),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ao:return g=Ha(f.type,f.key,f.props,null,x.mode,g),g.ref=Ci(x,null,f),g.return=x,g;case Tn:return f=Fl(f,x.mode,g),f.return=x,f;case fr:var S=f._init;return h(x,S(f._payload),g)}if(Bi(f)||vi(f))return f=Qr(f,x.mode,g,null),f.return=x,f;Ko(x,f)}return null}function m(x,f,g,S){var j=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:l(x,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ao:return g.key===j?d(x,f,g,S):null;case Tn:return g.key===j?u(x,f,g,S):null;case fr:return j=g._init,m(x,f,j(g._payload),S)}if(Bi(g)||vi(g))return j!==null?null:p(x,f,g,S,null);Ko(x,g)}return null}function b(x,f,g,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(g)||null,l(f,x,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ao:return x=x.get(S.key===null?g:S.key)||null,d(f,x,S,j);case Tn:return x=x.get(S.key===null?g:S.key)||null,u(f,x,S,j);case fr:var k=S._init;return b(x,f,g,k(S._payload),j)}if(Bi(S)||vi(S))return x=x.get(g)||null,p(f,x,S,j,null);Ko(f,S)}return null}function y(x,f,g,S){for(var j=null,k=null,z=f,R=f=0,E=null;z!==null&&R<g.length;R++){z.index>R?(E=z,z=null):E=z.sibling;var P=m(x,z,g[R],S);if(P===null){z===null&&(z=E);break}e&&z&&P.alternate===null&&t(x,z),f=a(P,f,R),k===null?j=P:k.sibling=P,k=P,z=E}if(R===g.length)return r(x,z),ie&&Ur(x,R),j;if(z===null){for(;R<g.length;R++)z=h(x,g[R],S),z!==null&&(f=a(z,f,R),k===null?j=z:k.sibling=z,k=z);return ie&&Ur(x,R),j}for(z=n(x,z);R<g.length;R++)E=b(z,x,R,g[R],S),E!==null&&(e&&E.alternate!==null&&z.delete(E.key===null?R:E.key),f=a(E,f,R),k===null?j=E:k.sibling=E,k=E);return e&&z.forEach(function(N){return t(x,N)}),ie&&Ur(x,R),j}function v(x,f,g,S){var j=vi(g);if(typeof j!="function")throw Error(I(150));if(g=j.call(g),g==null)throw Error(I(151));for(var k=j=null,z=f,R=f=0,E=null,P=g.next();z!==null&&!P.done;R++,P=g.next()){z.index>R?(E=z,z=null):E=z.sibling;var N=m(x,z,P.value,S);if(N===null){z===null&&(z=E);break}e&&z&&N.alternate===null&&t(x,z),f=a(N,f,R),k===null?j=N:k.sibling=N,k=N,z=E}if(P.done)return r(x,z),ie&&Ur(x,R),j;if(z===null){for(;!P.done;R++,P=g.next())P=h(x,P.value,S),P!==null&&(f=a(P,f,R),k===null?j=P:k.sibling=P,k=P);return ie&&Ur(x,R),j}for(z=n(x,z);!P.done;R++,P=g.next())P=b(z,x,R,P.value,S),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?R:P.key),f=a(P,f,R),k===null?j=P:k.sibling=P,k=P);return e&&z.forEach(function(D){return t(x,D)}),ie&&Ur(x,R),j}function w(x,f,g,S){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ao:e:{for(var j=g.key,k=f;k!==null;){if(k.key===j){if(j=g.type,j===Nn){if(k.tag===7){r(x,k.sibling),f=o(k,g.props.children),f.return=x,x=f;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fr&&Af(j)===k.type){r(x,k.sibling),f=o(k,g.props),f.ref=Ci(x,k,g),f.return=x,x=f;break e}r(x,k);break}else t(x,k);k=k.sibling}g.type===Nn?(f=Qr(g.props.children,x.mode,S,g.key),f.return=x,x=f):(S=Ha(g.type,g.key,g.props,null,x.mode,S),S.ref=Ci(x,f,g),S.return=x,x=S)}return s(x);case Tn:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(x,f.sibling),f=o(f,g.children||[]),f.return=x,x=f;break e}else{r(x,f);break}else t(x,f);f=f.sibling}f=Fl(g,x.mode,S),f.return=x,x=f}return s(x);case fr:return k=g._init,w(x,f,k(g._payload),S)}if(Bi(g))return y(x,f,g,S);if(vi(g))return v(x,f,g,S);Ko(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(x,f.sibling),f=o(f,g),f.return=x,x=f):(r(x,f),f=Ol(g,x.mode,S),f.return=x,x=f),s(x)):r(x,f)}return w}var ti=ug(!0),fg=ug(!1),fs=Tr(null),ps=null,Bn=null,hu=null;function mu(){hu=Bn=ps=null}function gu(e){var t=fs.current;re(fs),e._currentValue=t}function cd(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Kn(e,t){ps=e,hu=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(hu!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(ps===null)throw Error(I(308));Bn=e,ps.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var Yr=null;function xu(e){Yr===null?Yr=[e]:Yr.push(e)}function pg(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,xu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Zt(e,n)}function Zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pr=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Zt(e,r)}return o=n.interleaved,o===null?(t.next=t,xu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Zt(e,r)}function Fa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,nu(e,r)}}function Lf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?o=a=t:a=a.next=t}else o=a=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function hs(e,t,r,n){var o=e.updateQueue;pr=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var d=l,u=d.next;d.next=null,s===null?a=u:s.next=u,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=d))}if(a!==null){var h=o.baseState;s=0,p=u=d=null,l=a;do{var m=l.lane,b=l.eventTime;if((n&m)===m){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(m=t,b=r,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(b,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(b,h,m):y,m==null)break e;h=se({},h,m);break e;case 2:pr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=b,d=h):p=p.next=b,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(d=h),o.baseState=d,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);nn|=s,e.lanes=s,e.memoizedState=h}}function Bf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(I(191,o));o.call(n)}}}var Eo={},At=Tr(Eo),po=Tr(Eo),ho=Tr(Eo);function Vr(e){if(e===Eo)throw Error(I(174));return e}function yu(e,t){switch(Q(ho,t),Q(po,e),Q(At,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wc(t,e)}re(At),Q(At,t)}function ri(){re(At),re(po),re(ho)}function mg(e){Vr(ho.current);var t=Vr(At.current),r=Wc(t,e.type);t!==r&&(Q(po,e),Q(At,r))}function vu(e){po.current===e&&(re(At),re(po))}var oe=Tr(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function wu(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Aa=tr.ReactCurrentDispatcher,Tl=tr.ReactCurrentBatchConfig,rn=0,ae=null,be=null,we=null,gs=!1,Ki=!1,mo=0,L5=0;function $e(){throw Error(I(321))}function ju(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Et(e[r],t[r]))return!1;return!0}function Su(e,t,r,n,o,a){if(rn=a,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Aa.current=e===null||e.memoizedState===null?H5:Y5,e=r(n,o),Ki){a=0;do{if(Ki=!1,mo=0,25<=a)throw Error(I(301));a+=1,we=be=null,t.updateQueue=null,Aa.current=V5,e=r(n,o)}while(Ki)}if(Aa.current=xs,t=be!==null&&be.next!==null,rn=0,we=be=ae=null,gs=!1,t)throw Error(I(300));return e}function ku(){var e=mo!==0;return mo=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ae.memoizedState=we=e:we=we.next=e,we}function pt(){if(be===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=we===null?ae.memoizedState:we.next;if(t!==null)we=t,be=e;else{if(e===null)throw Error(I(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},we===null?ae.memoizedState=we=e:we=we.next=e}return we}function go(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=pt(),r=t.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=e;var n=be,o=n.baseQueue,a=r.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}n.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,n=n.baseState;var l=s=null,d=null,u=a;do{var p=u.lane;if((rn&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=h,s=n):d=d.next=h,ae.lanes|=p,nn|=p}u=u.next}while(u!==null&&u!==a);d===null?s=n:d.next=l,Et(n,t.memoizedState)||(Ve=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=d,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do a=o.lane,ae.lanes|=a,nn|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _l(e){var t=pt(),r=t.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);Et(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function gg(){}function xg(e,t){var r=ae,n=pt(),o=t(),a=!Et(n.memoizedState,o);if(a&&(n.memoizedState=o,Ve=!0),n=n.queue,Cu(vg.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,xo(9,yg.bind(null,r,n,o,t),void 0,null),ke===null)throw Error(I(349));rn&30||bg(r,t,o)}return o}function bg(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yg(e,t,r,n){t.value=r,t.getSnapshot=n,wg(t)&&jg(e)}function vg(e,t,r){return r(function(){wg(t)&&jg(e)})}function wg(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Et(e,r)}catch{return!0}}function jg(e){var t=Zt(e,1);t!==null&&Ct(t,e,1,-1)}function Uf(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=W5.bind(null,ae,e),[t.memoizedState,e]}function xo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Sg(){return pt().memoizedState}function La(e,t,r,n){var o=Nt();ae.flags|=e,o.memoizedState=xo(1|t,r,void 0,n===void 0?null:n)}function Fs(e,t,r,n){var o=pt();n=n===void 0?null:n;var a=void 0;if(be!==null){var s=be.memoizedState;if(a=s.destroy,n!==null&&ju(n,s.deps)){o.memoizedState=xo(t,r,a,n);return}}ae.flags|=e,o.memoizedState=xo(1|t,r,a,n)}function Wf(e,t){return La(8390656,8,e,t)}function Cu(e,t){return Fs(2048,8,e,t)}function kg(e,t){return Fs(4,2,e,t)}function Cg(e,t){return Fs(4,4,e,t)}function zg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eg(e,t,r){return r=r!=null?r.concat([e]):null,Fs(4,4,zg.bind(null,t,e),r)}function zu(){}function $g(e,t){var r=pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ju(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Pg(e,t){var r=pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ju(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Rg(e,t,r){return rn&21?(Et(r,t)||(r=Mm(),ae.lanes|=r,nn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=r)}function B5(e,t){var r=X;X=r!==0&&4>r?r:4,e(!0);var n=Tl.transition;Tl.transition={};try{e(!1),t()}finally{X=r,Tl.transition=n}}function Ig(){return pt().memoizedState}function U5(e,t,r){var n=Cr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Tg(e))Ng(t,r);else if(r=pg(e,t,r,n),r!==null){var o=Fe();Ct(r,e,n,o),_g(r,t,n)}}function W5(e,t,r){var n=Cr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Tg(e))Ng(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,r);if(o.hasEagerState=!0,o.eagerState=l,Et(l,s)){var d=t.interleaved;d===null?(o.next=o,xu(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}r=pg(e,t,o,n),r!==null&&(o=Fe(),Ct(r,e,n,o),_g(r,t,n))}}function Tg(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ng(e,t){Ki=gs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _g(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,nu(e,r)}}var xs={readContext:ft,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},H5={readContext:ft,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Wf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,La(4194308,4,zg.bind(null,t,e),r)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var r=Nt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Nt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=U5.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Uf,useDebugValue:zu,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Uf(!1),t=e[0];return e=B5.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ae,o=Nt();if(ie){if(r===void 0)throw Error(I(407));r=r()}else{if(r=t(),ke===null)throw Error(I(349));rn&30||bg(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,Wf(vg.bind(null,n,a,e),[e]),n.flags|=2048,xo(9,yg.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Nt(),t=ke.identifierPrefix;if(ie){var r=qt,n=Xt;r=(n&~(1<<32-kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=mo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=L5++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y5={readContext:ft,useCallback:$g,useContext:ft,useEffect:Cu,useImperativeHandle:Eg,useInsertionEffect:kg,useLayoutEffect:Cg,useMemo:Pg,useReducer:Nl,useRef:Sg,useState:function(){return Nl(go)},useDebugValue:zu,useDeferredValue:function(e){var t=pt();return Rg(t,be.memoizedState,e)},useTransition:function(){var e=Nl(go)[0],t=pt().memoizedState;return[e,t]},useMutableSource:gg,useSyncExternalStore:xg,useId:Ig,unstable_isNewReconciler:!1},V5={readContext:ft,useCallback:$g,useContext:ft,useEffect:Cu,useImperativeHandle:Eg,useInsertionEffect:kg,useLayoutEffect:Cg,useMemo:Pg,useReducer:_l,useRef:Sg,useState:function(){return _l(go)},useDebugValue:zu,useDeferredValue:function(e){var t=pt();return be===null?t.memoizedState=e:Rg(t,be.memoizedState,e)},useTransition:function(){var e=_l(go)[0],t=pt().memoizedState;return[e,t]},useMutableSource:gg,useSyncExternalStore:xg,useId:Ig,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function dd(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var As={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Fe(),o=Cr(e),a=Kt(n,o);a.payload=t,r!=null&&(a.callback=r),t=Sr(e,a,o),t!==null&&(Ct(t,e,o,n),Fa(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Fe(),o=Cr(e),a=Kt(n,o);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Sr(e,a,o),t!==null&&(Ct(t,e,o,n),Fa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Fe(),n=Cr(e),o=Kt(r,n);o.tag=2,t!=null&&(o.callback=t),t=Sr(e,o,n),t!==null&&(Ct(t,e,n,r),Fa(t,e,n))}};function Hf(e,t,r,n,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!lo(r,n)||!lo(o,a):!0}function Mg(e,t,r){var n=!1,o=Rr,a=t.contextType;return typeof a=="object"&&a!==null?a=ft(a):(o=Xe(t)?en:Me.current,n=t.contextTypes,a=(n=n!=null)?Zn(e,o):Rr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=As,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Yf(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&As.enqueueReplaceState(t,t.state,null)}function ud(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},bu(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=ft(a):(a=Xe(t)?en:Me.current,o.context=Zn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(dd(e,t,a,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&As.enqueueReplaceState(o,o.state,null),hs(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t){try{var r="",n=t;do r+=v1(n),n=n.return;while(n);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function fd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var G5=typeof WeakMap=="function"?WeakMap:Map;function Dg(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ys||(ys=!0,jd=n),fd(e,t)},r}function Og(e,t,r){r=Kt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){fd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){fd(e,t),typeof n!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Vf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new G5;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=sb.bind(null,e,t,r),t.then(e,e))}function Gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xf(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,Sr(r,t,1))),r.lanes|=1),e)}var X5=tr.ReactCurrentOwner,Ve=!1;function Oe(e,t,r,n){t.child=e===null?fg(t,null,r,n):ti(t,e.child,r,n)}function qf(e,t,r,n,o){r=r.render;var a=t.ref;return Kn(t,o),n=Su(e,t,r,n,a,o),r=ku(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,er(e,t,o)):(ie&&r&&uu(t),t.flags|=1,Oe(e,t,n,o),t.child)}function Kf(e,t,r,n,o){if(e===null){var a=r.type;return typeof a=="function"&&!_u(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Fg(e,t,a,n,o)):(e=Ha(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:lo,r(s,n)&&e.ref===t.ref)return er(e,t,o)}return t.flags|=1,e=zr(a,n),e.ref=t.ref,e.return=t,t.child=e}function Fg(e,t,r,n,o){if(e!==null){var a=e.memoizedProps;if(lo(a,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=a,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,er(e,t,o)}return pd(e,t,r,n,o)}function Ag(e,t,r){var n=t.pendingProps,o=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Wn,tt),tt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Wn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Q(Wn,tt),tt|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Q(Wn,tt),tt|=n;return Oe(e,t,o,r),t.child}function Lg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function pd(e,t,r,n,o){var a=Xe(r)?en:Me.current;return a=Zn(t,a),Kn(t,o),r=Su(e,t,r,n,a,o),n=ku(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,er(e,t,o)):(ie&&n&&uu(t),t.flags|=1,Oe(e,t,r,o),t.child)}function Qf(e,t,r,n,o){if(Xe(r)){var a=!0;cs(t)}else a=!1;if(Kn(t,o),t.stateNode===null)Ba(e,t),Mg(t,r,n),ud(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Xe(r)?en:Me.current,u=Zn(t,u));var p=r.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||d!==u)&&Yf(t,s,n,u),pr=!1;var m=t.memoizedState;s.state=m,hs(t,n,s,o),d=t.memoizedState,l!==n||m!==d||Ge.current||pr?(typeof p=="function"&&(dd(t,r,p,n),d=t.memoizedState),(l=pr||Hf(t,r,l,n,m,d,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),s.props=n,s.state=d,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,hg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:wt(t.type,l),s.props=u,h=t.pendingProps,m=s.context,d=r.contextType,typeof d=="object"&&d!==null?d=ft(d):(d=Xe(r)?en:Me.current,d=Zn(t,d));var b=r.getDerivedStateFromProps;(p=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||m!==d)&&Yf(t,s,n,d),pr=!1,m=t.memoizedState,s.state=m,hs(t,n,s,o);var y=t.memoizedState;l!==h||m!==y||Ge.current||pr?(typeof b=="function"&&(dd(t,r,b,n),y=t.memoizedState),(u=pr||Hf(t,r,u,n,m,y,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=d,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return hd(e,t,r,n,a,o)}function hd(e,t,r,n,o,a){Lg(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&Df(t,r,!1),er(e,t,a);n=t.stateNode,X5.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=ti(t,e.child,null,a),t.child=ti(t,null,l,a)):Oe(e,t,l,a),t.memoizedState=n.state,o&&Df(t,r,!0),t.child}function Bg(e){var t=e.stateNode;t.pendingContext?Mf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mf(e,t.context,!1),yu(e,t.containerInfo)}function Jf(e,t,r,n,o){return ei(),pu(o),t.flags|=256,Oe(e,t,r,n),t.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ug(e,t,r){var n=t.pendingProps,o=oe.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(oe,o&1),e===null)return ld(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Us(s,n,0,null),e=Qr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=gd(r),t.memoizedState=md,e):Eu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return q5(e,t,s,n,l,o,r);if(a){a=n.fallback,s=t.mode,o=e.child,l=o.sibling;var d={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=d,t.deletions=null):(n=zr(o,d),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=zr(l,a):(a=Qr(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?gd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=md,n}return a=e.child,e=a.sibling,n=zr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Eu(e,t){return t=Us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qo(e,t,r,n){return n!==null&&pu(n),ti(t,e.child,null,r),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q5(e,t,r,n,o,a,s){if(r)return t.flags&256?(t.flags&=-257,n=Ml(Error(I(422))),Qo(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=Us({mode:"visible",children:n.children},o,0,null),a=Qr(a,o,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&ti(t,e.child,null,s),t.child.memoizedState=gd(s),t.memoizedState=md,a);if(!(t.mode&1))return Qo(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(I(419)),n=Ml(a,n,void 0),Qo(e,t,s,n)}if(l=(s&e.childLanes)!==0,Ve||l){if(n=ke,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Zt(e,o),Ct(n,e,o,-1))}return Nu(),n=Ml(Error(I(421))),Qo(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lb.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,rt=jr(o.nextSibling),nt=t,ie=!0,St=null,e!==null&&(lt[ct++]=Xt,lt[ct++]=qt,lt[ct++]=tn,Xt=e.id,qt=e.overflow,tn=t),t=Eu(t,n.children),t.flags|=4096,t)}function Zf(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cd(e.return,t,r)}function Dl(e,t,r,n,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function Wg(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Oe(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zf(e,r,t);else if(e.tag===19)Zf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Q(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ms(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Dl(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ms(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Dl(t,!0,r,null,a);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function er(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,r=zr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function K5(e,t,r){switch(t.tag){case 3:Bg(t),ei();break;case 5:mg(t);break;case 1:Xe(t.type)&&cs(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Q(fs,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Q(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Ug(e,t,r):(Q(oe,oe.current&1),e=er(e,t,r),e!==null?e.sibling:null);Q(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Wg(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Ag(e,t,r)}return er(e,t,r)}var Hg,xd,Yg,Vg;Hg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xd=function(){};Yg=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Vr(At.current);var a=null;switch(r){case"input":o=Ac(e,o),n=Ac(e,n),a=[];break;case"select":o=se({},o,{value:void 0}),n=se({},n,{value:void 0}),a=[];break;case"textarea":o=Uc(e,o),n=Uc(e,n),a=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ss)}Hc(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var d=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(r||(r={}),r[s]=d[s])}else r||(a||(a=[]),a.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(a=a||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&Z("scroll",e),a||l===d||(a=[])):(a=a||[]).push(u,d))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Vg=function(e,t,r,n){r!==n&&(t.flags|=4)};function zi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Q5(e,t,r){var n=t.pendingProps;switch(fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Xe(t.type)&&ls(),Pe(t),null;case 3:return n=t.stateNode,ri(),re(Ge),re(Me),wu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Cd(St),St=null))),xd(e,t),Pe(t),null;case 5:vu(t);var o=Vr(ho.current);if(r=t.type,e!==null&&t.stateNode!=null)Yg(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(I(166));return Pe(t),null}if(e=Vr(At.current),qo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Ot]=t,n[fo]=a,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<Wi.length;o++)Z(Wi[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":lf(n,a),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Z("invalid",n);break;case"textarea":df(n,a),Z("invalid",n)}Hc(r,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&Xo(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Xo(n.textContent,l,e),o=["children",""+l]):to.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Z("scroll",n)}switch(r){case"input":Lo(n),cf(n,a,!0);break;case"textarea":Lo(n),uf(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=ss)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Ot]=t,e[fo]=n,Hg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yc(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<Wi.length;o++)Z(Wi[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":lf(e,n),o=Ac(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":df(e,n),o=Uc(e,n),Z("invalid",e);break;default:o=n}Hc(r,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="style"?Sm(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wm(e,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&ro(e,d):typeof d=="number"&&ro(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(to.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Z("scroll",e):d!=null&&Qd(e,a,d,s))}switch(r){case"input":Lo(e),cf(e,n,!1);break;case"textarea":Lo(e),uf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Pr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Vn(e,!!n.multiple,a,!1):n.defaultValue!=null&&Vn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ss)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Vg(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(I(166));if(r=Vr(ho.current),Vr(At.current),qo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ot]=t,(a=n.nodeValue!==r)&&(e=nt,e!==null))switch(e.tag){case 3:Xo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ot]=t,t.stateNode=n}return Pe(t),null;case 13:if(re(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&rt!==null&&t.mode&1&&!(t.flags&128))dg(),ei(),t.flags|=98560,a=!1;else if(a=qo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(I(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(I(317));a[Ot]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else St!==null&&(Cd(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):Nu())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return ri(),xd(e,t),e===null&&co(t.stateNode.containerInfo),Pe(t),null;case 10:return gu(t.type._context),Pe(t),null;case 17:return Xe(t.type)&&ls(),Pe(t),null;case 19:if(re(oe),a=t.memoizedState,a===null)return Pe(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)zi(a,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ms(e),s!==null){for(t.flags|=128,zi(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Q(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>ii&&(t.flags|=128,n=!0,zi(a,!1),t.lanes=4194304)}else{if(!n)if(e=ms(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ie)return Pe(t),null}else 2*de()-a.renderingStartTime>ii&&r!==1073741824&&(t.flags|=128,n=!0,zi(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,r=oe.current,Q(oe,n?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return Tu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?tt&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function J5(e,t){switch(fu(t),t.tag){case 1:return Xe(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),re(Ge),re(Me),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return ri(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Jo=!1,Ie=!1,Z5=typeof WeakSet=="function"?WeakSet:Set,_=null;function Un(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function bd(e,t,r){try{r()}catch(n){le(e,t,n)}}var ep=!1;function eb(e,t){if(td=is,e=Qm(),du(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,d=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var b;h!==r||o!==0&&h.nodeType!==3||(l=s+o),h!==a||n!==0&&h.nodeType!==3||(d=s+n),h.nodeType===3&&(s+=h.nodeValue.length),(b=h.firstChild)!==null;)m=h,h=b;for(;;){if(h===e)break t;if(m===r&&++u===o&&(l=s),m===a&&++p===n&&(d=s),(b=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=b}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(rd={focusedElem:e,selectionRange:r},is=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:wt(t.type,v),w);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=ep,ep=!1,y}function Qi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&bd(t,r,a)}o=o.next}while(o!==n)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function yd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Gg(e){var t=e.alternate;t!==null&&(e.alternate=null,Gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[fo],delete t[od],delete t[D5],delete t[O5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xg(e){return e.tag===5||e.tag===3||e.tag===4}function tp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ss));else if(n!==4&&(e=e.child,e!==null))for(vd(e,t,r),e=e.sibling;e!==null;)vd(e,t,r),e=e.sibling}function wd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(wd(e,t,r),e=e.sibling;e!==null;)wd(e,t,r),e=e.sibling}var Ce=null,jt=!1;function ir(e,t,r){for(r=r.child;r!==null;)qg(e,t,r),r=r.sibling}function qg(e,t,r){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ts,r)}catch{}switch(r.tag){case 5:Ie||Un(r,t);case 6:var n=Ce,o=jt;Ce=null,ir(e,t,r),Ce=n,jt=o,Ce!==null&&(jt?(e=Ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(jt?(e=Ce,r=r.stateNode,e.nodeType===8?Pl(e.parentNode,r):e.nodeType===1&&Pl(e,r),ao(e)):Pl(Ce,r.stateNode));break;case 4:n=Ce,o=jt,Ce=r.stateNode.containerInfo,jt=!0,ir(e,t,r),Ce=n,jt=o;break;case 0:case 11:case 14:case 15:if(!Ie&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&bd(r,t,s),o=o.next}while(o!==n)}ir(e,t,r);break;case 1:if(!Ie&&(Un(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){le(r,t,l)}ir(e,t,r);break;case 21:ir(e,t,r);break;case 22:r.mode&1?(Ie=(n=Ie)||r.memoizedState!==null,ir(e,t,r),Ie=n):ir(e,t,r);break;default:ir(e,t,r)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Z5),t.forEach(function(n){var o=cb.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function gt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,jt=!1;break e;case 3:Ce=l.stateNode.containerInfo,jt=!0;break e;case 4:Ce=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(Ce===null)throw Error(I(160));qg(a,s,o),Ce=null,jt=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(u){le(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kg(t,e),t=t.sibling}function Kg(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Pt(e),n&4){try{Qi(3,e,e.return),Ls(3,e)}catch(v){le(e,e.return,v)}try{Qi(5,e,e.return)}catch(v){le(e,e.return,v)}}break;case 1:gt(t,e),Pt(e),n&512&&r!==null&&Un(r,r.return);break;case 5:if(gt(t,e),Pt(e),n&512&&r!==null&&Un(r,r.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(v){le(e,e.return,v)}}if(n&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&bm(o,a),Yc(l,s);var u=Yc(l,a);for(s=0;s<d.length;s+=2){var p=d[s],h=d[s+1];p==="style"?Sm(o,h):p==="dangerouslySetInnerHTML"?wm(o,h):p==="children"?ro(o,h):Qd(o,p,h,u)}switch(l){case"input":Lc(o,a);break;case"textarea":ym(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Vn(o,!!a.multiple,b,!1):m!==!!a.multiple&&(a.defaultValue!=null?Vn(o,!!a.multiple,a.defaultValue,!0):Vn(o,!!a.multiple,a.multiple?[]:"",!1))}o[fo]=a}catch(v){le(e,e.return,v)}}break;case 6:if(gt(t,e),Pt(e),n&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){le(e,e.return,v)}}break;case 3:if(gt(t,e),Pt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(v){le(e,e.return,v)}break;case 4:gt(t,e),Pt(e);break;case 13:gt(t,e),Pt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ru=de())),n&4&&rp(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||p,gt(t,e),Ie=u):gt(t,e),Pt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(h=_=p;_!==null;){switch(m=_,b=m.child,m.tag){case 0:case 11:case 14:case 15:Qi(4,m,m.return);break;case 1:Un(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){le(n,r,v)}}break;case 5:Un(m,m.return);break;case 22:if(m.memoizedState!==null){ip(h);continue}}b!==null?(b.return=m,_=b):ip(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,d=h.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=jm("display",s))}catch(v){le(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(t,e),Pt(e),n&4&&rp(e);break;case 21:break;default:gt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xg(r)){var n=r;break e}r=r.return}throw Error(I(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ro(o,""),n.flags&=-33);var a=tp(e);wd(e,a,o);break;case 3:case 4:var s=n.stateNode.containerInfo,l=tp(e);vd(e,l,s);break;default:throw Error(I(161))}}catch(d){le(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tb(e,t,r){_=e,Qg(e)}function Qg(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var o=_,a=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||Jo;if(!s){var l=o.alternate,d=l!==null&&l.memoizedState!==null||Ie;l=Jo;var u=Ie;if(Jo=s,(Ie=d)&&!u)for(_=o;_!==null;)s=_,d=s.child,s.tag===22&&s.memoizedState!==null?op(o):d!==null?(d.return=s,_=d):op(o);for(;a!==null;)_=a,Qg(a),a=a.sibling;_=o,Jo=l,Ie=u}np(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,_=a):np(e)}}function np(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ls(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ie)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:wt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bf(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bf(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ie||t.flags&512&&yd(t)}catch(m){le(t,t.return,m)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function ip(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function op(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ls(4,t)}catch(d){le(t,r,d)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(d){le(t,o,d)}}var a=t.return;try{yd(t)}catch(d){le(t,a,d)}break;case 5:var s=t.return;try{yd(t)}catch(d){le(t,s,d)}}}catch(d){le(t,t.return,d)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var rb=Math.ceil,bs=tr.ReactCurrentDispatcher,$u=tr.ReactCurrentOwner,ut=tr.ReactCurrentBatchConfig,V=0,ke=null,me=null,ze=0,tt=0,Wn=Tr(0),ye=0,bo=null,nn=0,Bs=0,Pu=0,Ji=null,Ye=null,Ru=0,ii=1/0,Yt=null,ys=!1,jd=null,kr=null,Zo=!1,xr=null,vs=0,Zi=0,Sd=null,Ua=-1,Wa=0;function Fe(){return V&6?de():Ua!==-1?Ua:Ua=de()}function Cr(e){return e.mode&1?V&2&&ze!==0?ze&-ze:A5.transition!==null?(Wa===0&&(Wa=Mm()),Wa):(e=X,e!==0||(e=window.event,e=e===void 0?16:Um(e.type)),e):1}function Ct(e,t,r,n){if(50<Zi)throw Zi=0,Sd=null,Error(I(185));ko(e,r,n),(!(V&2)||e!==ke)&&(e===ke&&(!(V&2)&&(Bs|=r),ye===4&&mr(e,ze)),qe(e,n),r===1&&V===0&&!(t.mode&1)&&(ii=de()+500,Os&&Nr()))}function qe(e,t){var r=e.callbackNode;A1(e,t);var n=ns(e,e===ke?ze:0);if(n===0)r!==null&&hf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&hf(r),t===1)e.tag===0?F5(ap.bind(null,e)):sg(ap.bind(null,e)),_5(function(){!(V&6)&&Nr()}),r=null;else{switch(Dm(n)){case 1:r=ru;break;case 4:r=Nm;break;case 16:r=rs;break;case 536870912:r=_m;break;default:r=rs}r=o0(r,Jg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jg(e,t){if(Ua=-1,Wa=0,V&6)throw Error(I(327));var r=e.callbackNode;if(Qn()&&e.callbackNode!==r)return null;var n=ns(e,e===ke?ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ws(e,n);else{t=n;var o=V;V|=2;var a=e0();(ke!==e||ze!==t)&&(Yt=null,ii=de()+500,Kr(e,t));do try{ob();break}catch(l){Zg(e,l)}while(!0);mu(),bs.current=a,V=o,me!==null?t=0:(ke=null,ze=0,t=ye)}if(t!==0){if(t===2&&(o=Kc(e),o!==0&&(n=o,t=kd(e,o))),t===1)throw r=bo,Kr(e,0),mr(e,n),qe(e,de()),r;if(t===6)mr(e,n);else{if(o=e.current.alternate,!(n&30)&&!nb(o)&&(t=ws(e,n),t===2&&(a=Kc(e),a!==0&&(n=a,t=kd(e,a))),t===1))throw r=bo,Kr(e,0),mr(e,n),qe(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(I(345));case 2:Wr(e,Ye,Yt);break;case 3:if(mr(e,n),(n&130023424)===n&&(t=Ru+500-de(),10<t)){if(ns(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=id(Wr.bind(null,e,Ye,Yt),t);break}Wr(e,Ye,Yt);break;case 4:if(mr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-kt(n);a=1<<s,s=t[s],s>o&&(o=s),n&=~a}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rb(n/1960))-n,10<n){e.timeoutHandle=id(Wr.bind(null,e,Ye,Yt),n);break}Wr(e,Ye,Yt);break;case 5:Wr(e,Ye,Yt);break;default:throw Error(I(329))}}}return qe(e,de()),e.callbackNode===r?Jg.bind(null,e):null}function kd(e,t){var r=Ji;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=ws(e,t),e!==2&&(t=Ye,Ye=r,t!==null&&Cd(t)),e}function Cd(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function nb(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!Et(a(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~Pu,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),n=1<<r;e[r]=-1,t&=~n}}function ap(e){if(V&6)throw Error(I(327));Qn();var t=ns(e,0);if(!(t&1))return qe(e,de()),null;var r=ws(e,t);if(e.tag!==0&&r===2){var n=Kc(e);n!==0&&(t=n,r=kd(e,n))}if(r===1)throw r=bo,Kr(e,0),mr(e,t),qe(e,de()),r;if(r===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wr(e,Ye,Yt),qe(e,de()),null}function Iu(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(ii=de()+500,Os&&Nr())}}function on(e){xr!==null&&xr.tag===0&&!(V&6)&&Qn();var t=V;V|=1;var r=ut.transition,n=X;try{if(ut.transition=null,X=1,e)return e()}finally{X=n,ut.transition=r,V=t,!(V&6)&&Nr()}}function Tu(){tt=Wn.current,re(Wn)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,N5(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(fu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ls();break;case 3:ri(),re(Ge),re(Me),wu();break;case 5:vu(n);break;case 4:ri();break;case 13:re(oe);break;case 19:re(oe);break;case 10:gu(n.type._context);break;case 22:case 23:Tu()}r=r.return}if(ke=e,me=e=zr(e.current,null),ze=tt=t,ye=0,bo=null,Pu=Bs=nn=0,Ye=Ji=null,Yr!==null){for(t=0;t<Yr.length;t++)if(r=Yr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=o,n.next=s}r.pending=n}Yr=null}return e}function Zg(e,t){do{var r=me;try{if(mu(),Aa.current=xs,gs){for(var n=ae.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}gs=!1}if(rn=0,we=be=ae=null,Ki=!1,mo=0,$u.current=null,r===null||r.return===null){ye=1,bo=t,me=null;break}e:{var a=e,s=r.return,l=r,d=t;if(t=ze,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Gf(s);if(b!==null){b.flags&=-257,Xf(b,s,l,a,t),b.mode&1&&Vf(a,u,t),t=b,d=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(d),t.updateQueue=v}else y.add(d);break e}else{if(!(t&1)){Vf(a,u,t),Nu();break e}d=Error(I(426))}}else if(ie&&l.mode&1){var w=Gf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xf(w,s,l,a,t),pu(ni(d,l));break e}}a=d=ni(d,l),ye!==4&&(ye=2),Ji===null?Ji=[a]:Ji.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Dg(a,d,t);Lf(a,x);break e;case 1:l=d;var f=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kr===null||!kr.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Og(a,l,t);Lf(a,S);break e}}a=a.return}while(a!==null)}r0(r)}catch(j){t=j,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function e0(){var e=bs.current;return bs.current=xs,e===null?xs:e}function Nu(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(nn&268435455)&&!(Bs&268435455)||mr(ke,ze)}function ws(e,t){var r=V;V|=2;var n=e0();(ke!==e||ze!==t)&&(Yt=null,Kr(e,t));do try{ib();break}catch(o){Zg(e,o)}while(!0);if(mu(),V=r,bs.current=n,me!==null)throw Error(I(261));return ke=null,ze=0,ye}function ib(){for(;me!==null;)t0(me)}function ob(){for(;me!==null&&!R1();)t0(me)}function t0(e){var t=i0(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?r0(e):me=t,$u.current=null}function r0(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=J5(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(r=Q5(r,t,tt),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Wr(e,t,r){var n=X,o=ut.transition;try{ut.transition=null,X=1,ab(e,t,r,n)}finally{ut.transition=o,X=n}return null}function ab(e,t,r,n){do Qn();while(xr!==null);if(V&6)throw Error(I(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(L1(e,a),e===ke&&(me=ke=null,ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Zo||(Zo=!0,o0(rs,function(){return Qn(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=ut.transition,ut.transition=null;var s=X;X=1;var l=V;V|=4,$u.current=null,eb(e,r),Kg(r,e),z5(rd),is=!!td,rd=td=null,e.current=r,tb(r),I1(),V=l,X=s,ut.transition=a}else e.current=r;if(Zo&&(Zo=!1,xr=e,vs=o),a=e.pendingLanes,a===0&&(kr=null),_1(r.stateNode),qe(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ys)throw ys=!1,e=jd,jd=null,e;return vs&1&&e.tag!==0&&Qn(),a=e.pendingLanes,a&1?e===Sd?Zi++:(Zi=0,Sd=e):Zi=0,Nr(),null}function Qn(){if(xr!==null){var e=Dm(vs),t=ut.transition,r=X;try{if(ut.transition=null,X=16>e?16:e,xr===null)var n=!1;else{if(e=xr,xr=null,vs=0,V&6)throw Error(I(331));var o=V;for(V|=4,_=e.current;_!==null;){var a=_,s=a.child;if(_.flags&16){var l=a.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(_=u;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:Qi(8,p,a)}var h=p.child;if(h!==null)h.return=p,_=h;else for(;_!==null;){p=_;var m=p.sibling,b=p.return;if(Gg(p),p===u){_=null;break}if(m!==null){m.return=b,_=m;break}_=b}}}var y=a.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}_=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,_=s;else e:for(;_!==null;){if(a=_,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qi(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}var f=e.current;for(_=f;_!==null;){s=_;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,_=g;else e:for(s=f;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ls(9,l)}}catch(j){le(l,l.return,j)}if(l===s){_=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,_=S;break e}_=l.return}}if(V=o,Nr(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ts,e)}catch{}n=!0}return n}finally{X=r,ut.transition=t}}return!1}function sp(e,t,r){t=ni(r,t),t=Dg(e,t,1),e=Sr(e,t,1),t=Fe(),e!==null&&(ko(e,1,t),qe(e,t))}function le(e,t,r){if(e.tag===3)sp(e,e,r);else for(;t!==null;){if(t.tag===3){sp(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kr===null||!kr.has(n))){e=ni(r,e),e=Og(t,e,1),t=Sr(t,e,1),e=Fe(),t!==null&&(ko(t,1,e),qe(t,e));break}}t=t.return}}function sb(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(ze&r)===r&&(ye===4||ye===3&&(ze&130023424)===ze&&500>de()-Ru?Kr(e,0):Pu|=r),qe(e,t)}function n0(e,t){t===0&&(e.mode&1?(t=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):t=1);var r=Fe();e=Zt(e,t),e!==null&&(ko(e,t,r),qe(e,r))}function lb(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),n0(e,r)}function cb(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(I(314))}n!==null&&n.delete(t),n0(e,r)}var i0;i0=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ve=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ve=!1,K5(e,t,r);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&lg(t,us,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ba(e,t),e=t.pendingProps;var o=Zn(t,Me.current);Kn(t,r),o=Su(null,t,n,e,o,r);var a=ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(n)?(a=!0,cs(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bu(t),o.updater=As,t.stateNode=o,o._reactInternals=t,ud(t,n,e,r),t=hd(null,t,n,!0,a,r)):(t.tag=0,ie&&a&&uu(t),Oe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=ub(n),e=wt(n,e),o){case 0:t=pd(null,t,n,e,r);break e;case 1:t=Qf(null,t,n,e,r);break e;case 11:t=qf(null,t,n,e,r);break e;case 14:t=Kf(null,t,n,wt(n.type,e),r);break e}throw Error(I(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:wt(n,o),pd(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:wt(n,o),Qf(e,t,n,o,r);case 3:e:{if(Bg(t),e===null)throw Error(I(387));n=t.pendingProps,a=t.memoizedState,o=a.element,hg(e,t),hs(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=ni(Error(I(423)),t),t=Jf(e,t,n,r,o);break e}else if(n!==o){o=ni(Error(I(424)),t),t=Jf(e,t,n,r,o);break e}else for(rt=jr(t.stateNode.containerInfo.firstChild),nt=t,ie=!0,St=null,r=fg(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ei(),n===o){t=er(e,t,r);break e}Oe(e,t,n,r)}t=t.child}return t;case 5:return mg(t),e===null&&ld(t),n=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,nd(n,o)?s=null:a!==null&&nd(n,a)&&(t.flags|=32),Lg(e,t),Oe(e,t,s,r),t.child;case 6:return e===null&&ld(t),null;case 13:return Ug(e,t,r);case 4:return yu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ti(t,null,n,r):Oe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:wt(n,o),qf(e,t,n,o,r);case 7:return Oe(e,t,t.pendingProps,r),t.child;case 8:return Oe(e,t,t.pendingProps.children,r),t.child;case 12:return Oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,Q(fs,n._currentValue),n._currentValue=s,a!==null)if(Et(a.value,s)){if(a.children===o.children&&!Ge.current){t=er(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var d=l.firstContext;d!==null;){if(d.context===n){if(a.tag===1){d=Kt(-1,r&-r),d.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),cd(a.return,r,t),l.lanes|=r;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(I(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),cd(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Oe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Kn(t,r),o=ft(o),n=n(o),t.flags|=1,Oe(e,t,n,r),t.child;case 14:return n=t.type,o=wt(n,t.pendingProps),o=wt(n.type,o),Kf(e,t,n,o,r);case 15:return Fg(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:wt(n,o),Ba(e,t),t.tag=1,Xe(n)?(e=!0,cs(t)):e=!1,Kn(t,r),Mg(t,n,o),ud(t,n,o,r),hd(null,t,n,!0,e,r);case 19:return Wg(e,t,r);case 22:return Ag(e,t,r)}throw Error(I(156,t.tag))};function o0(e,t){return Tm(e,t)}function db(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,n){return new db(e,t,r,n)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ub(e){if(typeof e=="function")return _u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zd)return 11;if(e===eu)return 14}return 2}function zr(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ha(e,t,r,n,o,a){var s=2;if(n=e,typeof e=="function")_u(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nn:return Qr(r.children,o,a,t);case Jd:s=8,o|=8;break;case Mc:return e=dt(12,r,t,o|2),e.elementType=Mc,e.lanes=a,e;case Dc:return e=dt(13,r,t,o),e.elementType=Dc,e.lanes=a,e;case Oc:return e=dt(19,r,t,o),e.elementType=Oc,e.lanes=a,e;case mm:return Us(r,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pm:s=10;break e;case hm:s=9;break e;case Zd:s=11;break e;case eu:s=14;break e;case fr:s=16,n=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=dt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=a,t}function Qr(e,t,r,n){return e=dt(7,e,n,t),e.lanes=r,e}function Us(e,t,r,n){return e=dt(22,e,n,t),e.elementType=mm,e.lanes=r,e.stateNode={isHidden:!1},e}function Ol(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function Fl(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fb(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mu(e,t,r,n,o,a,s,l,d){return e=new fb(e,t,r,l,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=dt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(a),e}function pb(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function a0(e){if(!e)return Rr;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var r=e.type;if(Xe(r))return ag(e,r,t)}return t}function s0(e,t,r,n,o,a,s,l,d){return e=Mu(r,n,!0,e,o,a,s,l,d),e.context=a0(null),r=e.current,n=Fe(),o=Cr(r),a=Kt(n,o),a.callback=t??null,Sr(r,a,o),e.current.lanes=o,ko(e,o,n),qe(e,n),e}function Ws(e,t,r,n){var o=t.current,a=Fe(),s=Cr(o);return r=a0(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Sr(o,t,s),e!==null&&(Ct(e,o,s,a),Fa(e,o,s)),s}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Du(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function hb(){return null}var l0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}Hs.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Ws(e,t,null,null)};Hs.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ws(null,e,null,null)}),t[Jt]=null}};function Hs(e){this._internalRoot=e}Hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Am();e={blockedOn:null,target:e,priority:t};for(var r=0;r<hr.length&&t!==0&&t<hr[r].priority;r++);hr.splice(r,0,e),r===0&&Bm(e)}};function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cp(){}function mb(e,t,r,n,o){if(o){if(typeof n=="function"){var a=n;n=function(){var u=js(s);a.call(u)}}var s=s0(t,n,e,0,null,!1,!1,"",cp);return e._reactRootContainer=s,e[Jt]=s.current,co(e.nodeType===8?e.parentNode:e),on(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=js(d);l.call(u)}}var d=Mu(e,0,!1,null,null,!1,!1,"",cp);return e._reactRootContainer=d,e[Jt]=d.current,co(e.nodeType===8?e.parentNode:e),on(function(){Ws(t,d,r,n)}),d}function Vs(e,t,r,n,o){var a=r._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var d=js(s);l.call(d)}}Ws(t,s,e,o)}else s=mb(r,t,e,o,n);return js(s)}Om=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ui(t.pendingLanes);r!==0&&(nu(t,r|1),qe(t,de()),!(V&6)&&(ii=de()+500,Nr()))}break;case 13:on(function(){var n=Zt(e,1);if(n!==null){var o=Fe();Ct(n,e,1,o)}}),Du(e,1)}};iu=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var r=Fe();Ct(t,e,134217728,r)}Du(e,134217728)}};Fm=function(e){if(e.tag===13){var t=Cr(e),r=Zt(e,t);if(r!==null){var n=Fe();Ct(r,e,t,n)}Du(e,t)}};Am=function(){return X};Lm=function(e,t){var r=X;try{return X=e,t()}finally{X=r}};Gc=function(e,t,r){switch(t){case"input":if(Lc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ds(n);if(!o)throw Error(I(90));xm(n),Lc(n,o)}}}break;case"textarea":ym(e,r);break;case"select":t=r.value,t!=null&&Vn(e,!!r.multiple,t,!1)}};zm=Iu;Em=on;var gb={usingClientEntryPoint:!1,Events:[zo,On,Ds,km,Cm,Iu]},Ei={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xb={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||hb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Ts=ea.inject(xb),Ft=ea}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gb;at.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(t))throw Error(I(200));return pb(e,t,null,r)};at.createRoot=function(e,t){if(!Fu(e))throw Error(I(299));var r=!1,n="",o=l0;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Mu(e,1,!1,null,null,r,!1,n,o),e[Jt]=t.current,co(e.nodeType===8?e.parentNode:e),new Ou(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Rm(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return on(e)};at.hydrate=function(e,t,r){if(!Ys(t))throw Error(I(200));return Vs(null,e,t,!0,r)};at.hydrateRoot=function(e,t,r){if(!Fu(e))throw Error(I(405));var n=r!=null&&r.hydratedSources||null,o=!1,a="",s=l0;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=s0(t,null,e,1,r??null,o,!1,a,s),e[Jt]=t.current,co(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Hs(t)};at.render=function(e,t,r){if(!Ys(t))throw Error(I(200));return Vs(null,e,t,!1,r)};at.unmountComponentAtNode=function(e){if(!Ys(e))throw Error(I(40));return e._reactRootContainer?(on(function(){Vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};at.unstable_batchedUpdates=Iu;at.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ys(r))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Vs(e,t,r,!1,n)};at.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(e){console.error(e)}}c0(),cm.exports=at;var $o=cm.exports,dp=$o;Nc.createRoot=dp.createRoot,Nc.hydrateRoot=dp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yo.apply(this,arguments)}var br;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(br||(br={}));const up="popstate";function bb(e){e===void 0&&(e={});function t(n,o){let{pathname:a,search:s,hash:l}=n.location;return zd("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ss(o)}return vb(t,r,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function d0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yb(){return Math.random().toString(36).substr(2,8)}function fp(e,t){return{usr:e.state,key:e.key,idx:t}}function zd(e,t,r,n){return r===void 0&&(r=null),yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mi(t):t,{state:r,key:t&&t.key||n||yb()})}function Ss(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function mi(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function vb(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,s=o.history,l=br.Pop,d=null,u=p();u==null&&(u=0,s.replaceState(yo({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function h(){l=br.Pop;let w=p(),x=w==null?null:w-u;u=w,d&&d({action:l,location:v.location,delta:x})}function m(w,x){l=br.Push;let f=zd(v.location,w,x);u=p()+1;let g=fp(f,u),S=v.createHref(f);try{s.pushState(g,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}a&&d&&d({action:l,location:v.location,delta:1})}function b(w,x){l=br.Replace;let f=zd(v.location,w,x);u=p();let g=fp(f,u),S=v.createHref(f);s.replaceState(g,"",S),a&&d&&d({action:l,location:v.location,delta:0})}function y(w){let x=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof w=="string"?w:Ss(w);return f=f.replace(/ $/,"%20"),ge(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let v={get action(){return l},get location(){return e(o,s)},listen(w){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(up,h),d=w,()=>{o.removeEventListener(up,h),d=null}},createHref(w){return t(o,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:b,go(w){return s.go(w)}};return v}var pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pp||(pp={}));function wb(e,t,r){return r===void 0&&(r="/"),jb(e,t,r)}function jb(e,t,r,n){let o=typeof t=="string"?mi(t):t,a=Au(o.pathname||"/",r);if(a==null)return null;let s=u0(e);Sb(s);let l=null;for(let d=0;l==null&&d<s.length;++d){let u=Mb(a);l=Tb(s[d],u)}return l}function u0(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(a,s,l)=>{let d={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(ge(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let u=Er([n,d.relativePath]),p=r.concat(d);a.children&&a.children.length>0&&(ge(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u0(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Rb(u,a.index),routesMeta:p})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,s);else for(let d of f0(a.path))o(a,s,d)}),t}function f0(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let s=f0(n.join("/")),l=[];return l.push(...s.map(d=>d===""?a:[a,d].join("/"))),o&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function Sb(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ib(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const kb=/^:[\w-]+$/,Cb=3,zb=2,Eb=1,$b=10,Pb=-2,hp=e=>e==="*";function Rb(e,t){let r=e.split("/"),n=r.length;return r.some(hp)&&(n+=Pb),t&&(n+=zb),r.filter(o=>!hp(o)).reduce((o,a)=>o+(kb.test(a)?Cb:a===""?Eb:$b),n)}function Ib(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Tb(e,t,r){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let d=n[l],u=l===n.length-1,p=a==="/"?t:t.slice(a.length)||"/",h=Nb({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},p),m=d.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Er([a,h.pathname]),pathnameBase:Ab(Er([a,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(a=Er([a,h.pathnameBase]))}return s}function Nb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=_b(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((u,p,h)=>{let{paramName:m,isOptional:b}=p;if(m==="*"){let v=l[h]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const y=l[h];return b&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function _b(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),d0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Mb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return d0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Au(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Db(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?mi(e):e;return{pathname:r?r.startsWith("/")?r:Ob(r,t):t,search:Lb(n),hash:Bb(o)}}function Ob(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Al(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fb(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function p0(e,t){let r=Fb(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function h0(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=mi(e):(o=yo({},e),ge(!o.pathname||!o.pathname.includes("?"),Al("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),Al("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),Al("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,l;if(s==null)l=r;else{let h=t.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;o.pathname=m.join("/")}l=h>=0?t[h]:"/"}let d=Db(o,l),u=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||p)&&(d.pathname+="/"),d}const Er=e=>e.join("/").replace(/\/\/+/g,"/"),Ab=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ub(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const m0=["post","put","patch","delete"];new Set(m0);const Wb=["get",...m0];new Set(Wb);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vo.apply(this,arguments)}const Lu=C.createContext(null),Hb=C.createContext(null),cn=C.createContext(null),Gs=C.createContext(null),dn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),g0=C.createContext(null);function Yb(e,t){let{relative:r}=t===void 0?{}:t;Po()||ge(!1);let{basename:n,navigator:o}=C.useContext(cn),{hash:a,pathname:s,search:l}=b0(e,{relative:r}),d=s;return n!=="/"&&(d=s==="/"?n:Er([n,s])),o.createHref({pathname:d,search:l,hash:a})}function Po(){return C.useContext(Gs)!=null}function Ro(){return Po()||ge(!1),C.useContext(Gs).location}function x0(e){C.useContext(cn).static||C.useLayoutEffect(e)}function Vb(){let{isDataRoute:e}=C.useContext(dn);return e?o2():Gb()}function Gb(){Po()||ge(!1);let e=C.useContext(Lu),{basename:t,future:r,navigator:n}=C.useContext(cn),{matches:o}=C.useContext(dn),{pathname:a}=Ro(),s=JSON.stringify(p0(o,r.v7_relativeSplatPath)),l=C.useRef(!1);return x0(()=>{l.current=!0}),C.useCallback(function(u,p){if(p===void 0&&(p={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let h=h0(u,JSON.parse(s),a,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Er([t,h.pathname])),(p.replace?n.replace:n.push)(h,p.state,p)},[t,n,s,a,e])}function b0(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=C.useContext(cn),{matches:o}=C.useContext(dn),{pathname:a}=Ro(),s=JSON.stringify(p0(o,n.v7_relativeSplatPath));return C.useMemo(()=>h0(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function Xb(e,t){return qb(e,t)}function qb(e,t,r,n){Po()||ge(!1);let{navigator:o}=C.useContext(cn),{matches:a}=C.useContext(dn),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let u=Ro(),p;if(t){var h;let w=typeof t=="string"?mi(t):t;d==="/"||(h=w.pathname)!=null&&h.startsWith(d)||ge(!1),p=w}else p=u;let m=p.pathname||"/",b=m;if(d!=="/"){let w=d.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=wb(e,{pathname:b}),v=e2(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Er([d,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:Er([d,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,r,n);return t&&v?C.createElement(Gs.Provider,{value:{location:vo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:br.Pop}},v):v}function Kb(){let e=i2(),t=Ub(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),r?C.createElement("pre",{style:o},r):null,null)}const Qb=C.createElement(Kb,null);class Jb extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?C.createElement(dn.Provider,{value:this.props.routeContext},C.createElement(g0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zb(e){let{routeContext:t,match:r,children:n}=e,o=C.useContext(Lu);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),C.createElement(dn.Provider,{value:t},n)}function e2(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(o=r)==null?void 0:o.errors;if(l!=null){let p=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);p>=0||ge(!1),s=s.slice(0,Math.min(s.length,p+1))}let d=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=p),h.route.id){let{loaderData:m,errors:b}=r,y=h.route.loader&&m[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||y){d=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,h,m)=>{let b,y=!1,v=null,w=null;r&&(b=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||Qb,d&&(u<0&&m===0?(a2("route-fallback"),y=!0,w=null):u===m&&(y=!0,w=h.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,m+1)),f=()=>{let g;return b?g=v:y?g=w:h.route.Component?g=C.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=p,C.createElement(Zb,{match:h,routeContext:{outlet:p,matches:x,isDataRoute:r!=null},children:g})};return r&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?C.createElement(Jb,{location:r.location,revalidation:r.revalidation,component:v,error:b,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var y0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(y0||{}),v0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(v0||{});function t2(e){let t=C.useContext(Lu);return t||ge(!1),t}function r2(e){let t=C.useContext(Hb);return t||ge(!1),t}function n2(e){let t=C.useContext(dn);return t||ge(!1),t}function w0(e){let t=n2(),r=t.matches[t.matches.length-1];return r.route.id||ge(!1),r.route.id}function i2(){var e;let t=C.useContext(g0),r=r2(v0.UseRouteError),n=w0();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function o2(){let{router:e}=t2(y0.UseNavigateStable),t=w0(),r=C.useRef(!1);return x0(()=>{r.current=!0}),C.useCallback(function(o,a){a===void 0&&(a={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,vo({fromRouteId:t},a)))},[e,t])}const mp={};function a2(e,t,r){mp[e]||(mp[e]=!0)}function s2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ee(e){ge(!1)}function l2(e){let{basename:t="/",children:r=null,location:n,navigationType:o=br.Pop,navigator:a,static:s=!1,future:l}=e;Po()&&ge(!1);let d=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:d,navigator:a,static:s,future:vo({v7_relativeSplatPath:!1},l)}),[d,l,a,s]);typeof n=="string"&&(n=mi(n));let{pathname:p="/",search:h="",hash:m="",state:b=null,key:y="default"}=n,v=C.useMemo(()=>{let w=Au(p,d);return w==null?null:{location:{pathname:w,search:h,hash:m,state:b,key:y},navigationType:o}},[d,p,h,m,b,y,o]);return v==null?null:C.createElement(cn.Provider,{value:u},C.createElement(Gs.Provider,{children:r,value:v}))}function c2(e){let{children:t,location:r}=e;return Xb(Ed(t),r)}new Promise(()=>{});function Ed(e,t){t===void 0&&(t=[]);let r=[];return C.Children.forEach(e,(n,o)=>{if(!C.isValidElement(n))return;let a=[...t,o];if(n.type===C.Fragment){r.push.apply(r,Ed(n.props.children,a));return}n.type!==ee&&ge(!1),!n.props.index||!n.props.children||ge(!1);let s={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Ed(n.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$d.apply(this,arguments)}function d2(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function u2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function f2(e,t){return e.button===0&&(!t||t==="_self")&&!u2(e)}const p2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h2="6";try{window.__reactRouterVersion=h2}catch{}const m2="startTransition",gp=s1[m2];function g2(e){let{basename:t,children:r,future:n,window:o}=e,a=C.useRef();a.current==null&&(a.current=bb({window:o,v5Compat:!0}));let s=a.current,[l,d]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},p=C.useCallback(h=>{u&&gp?gp(()=>d(h)):d(h)},[d,u]);return C.useLayoutEffect(()=>s.listen(p),[s,p]),C.useEffect(()=>s2(n),[n]),C.createElement(l2,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}const x2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xs=C.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:a,replace:s,state:l,target:d,to:u,preventScrollReset:p,viewTransition:h}=t,m=d2(t,p2),{basename:b}=C.useContext(cn),y,v=!1;if(typeof u=="string"&&b2.test(u)&&(y=u,x2))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),j=Au(S.pathname,b);S.origin===g.origin&&j!=null?u=j+S.search+S.hash:v=!0}catch{}let w=Yb(u,{relative:o}),x=y2(u,{replace:s,state:l,target:d,preventScrollReset:p,relative:o,viewTransition:h});function f(g){n&&n(g),g.defaultPrevented||x(g)}return C.createElement("a",$d({},m,{href:y||w,onClick:v||a?n:f,ref:r,target:d}))});var xp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xp||(xp={}));var bp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bp||(bp={}));function y2(e,t){let{target:r,replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,d=Vb(),u=Ro(),p=b0(e,{relative:s});return C.useCallback(h=>{if(f2(h,r)){h.preventDefault();let m=n!==void 0?n:Ss(u)===Ss(p);d(e,{replace:m,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[u,d,p,n,o,r,e,a,s,l])}var _e=function(){return _e=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},_e.apply(this,arguments)};function oi(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var te="-ms-",eo="-moz-",G="-webkit-",j0="comm",qs="rule",Bu="decl",v2="@import",S0="@keyframes",w2="@layer",k0=Math.abs,Uu=String.fromCharCode,Pd=Object.assign;function j2(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function C0(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Ya(e,t,r){return e.indexOf(t,r)}function je(e,t){return e.charCodeAt(t)|0}function ai(e,t,r){return e.slice(t,r)}function Dt(e){return e.length}function z0(e){return e.length}function Hi(e,t){return t.push(e),e}function S2(e,t){return e.map(t).join("")}function yp(e,t){return e.filter(function(r){return!Vt(r,t)})}var Ks=1,si=1,E0=0,ht=0,pe=0,gi="";function Qs(e,t,r,n,o,a,s,l){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:Ks,column:si,length:s,return:"",siblings:l}}function ur(e,t){return Pd(Qs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hn(e){for(;e.root;)e=ur(e.root,{children:[e]});Hi(e,e.siblings)}function k2(){return pe}function C2(){return pe=ht>0?je(gi,--ht):0,si--,pe===10&&(si=1,Ks--),pe}function zt(){return pe=ht<E0?je(gi,ht++):0,si++,pe===10&&(si=1,Ks++),pe}function Jr(){return je(gi,ht)}function Va(){return ht}function Js(e,t){return ai(gi,e,t)}function Rd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z2(e){return Ks=si=1,E0=Dt(gi=e),ht=0,[]}function E2(e){return gi="",e}function Ll(e){return C0(Js(ht-1,Id(e===91?e+2:e===40?e+1:e)))}function $2(e){for(;(pe=Jr())&&pe<33;)zt();return Rd(e)>2||Rd(pe)>3?"":" "}function P2(e,t){for(;--t&&zt()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return Js(e,Va()+(t<6&&Jr()==32&&zt()==32))}function Id(e){for(;zt();)switch(pe){case e:return ht;case 34:case 39:e!==34&&e!==39&&Id(pe);break;case 40:e===41&&Id(e);break;case 92:zt();break}return ht}function R2(e,t){for(;zt()&&e+pe!==57;)if(e+pe===84&&Jr()===47)break;return"/*"+Js(t,ht-1)+"*"+Uu(e===47?e:zt())}function I2(e){for(;!Rd(Jr());)zt();return Js(e,ht)}function T2(e){return E2(Ga("",null,null,null,[""],e=z2(e),0,[0],e))}function Ga(e,t,r,n,o,a,s,l,d){for(var u=0,p=0,h=s,m=0,b=0,y=0,v=1,w=1,x=1,f=0,g="",S=o,j=a,k=n,z=g;w;)switch(y=f,f=zt()){case 40:if(y!=108&&je(z,h-1)==58){Ya(z+=B(Ll(f),"&","&\f"),"&\f",k0(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:z+=Ll(f);break;case 9:case 10:case 13:case 32:z+=$2(y);break;case 92:z+=P2(Va()-1,7);continue;case 47:switch(Jr()){case 42:case 47:Hi(N2(R2(zt(),Va()),t,r,d),d);break;default:z+="/"}break;case 123*v:l[u++]=Dt(z)*x;case 125*v:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+p:x==-1&&(z=B(z,/\f/g,"")),b>0&&Dt(z)-h&&Hi(b>32?wp(z+";",n,r,h-1,d):wp(B(z," ","")+";",n,r,h-2,d),d);break;case 59:z+=";";default:if(Hi(k=vp(z,t,r,u,p,o,l,g,S=[],j=[],h,a),a),f===123)if(p===0)Ga(z,t,k,k,S,a,h,l,j);else switch(m===99&&je(z,3)===110?100:m){case 100:case 108:case 109:case 115:Ga(e,k,k,n&&Hi(vp(e,k,k,0,0,o,l,g,o,S=[],h,j),j),o,j,h,l,n?S:j);break;default:Ga(z,k,k,k,[""],j,0,l,j)}}u=p=b=0,v=x=1,g=z="",h=s;break;case 58:h=1+Dt(z),b=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&C2()==125)continue}switch(z+=Uu(f),f*v){case 38:x=p>0?1:(z+="\f",-1);break;case 44:l[u++]=(Dt(z)-1)*x,x=1;break;case 64:Jr()===45&&(z+=Ll(zt())),m=Jr(),p=h=Dt(g=z+=I2(Va())),f++;break;case 45:y===45&&Dt(z)==2&&(v=0)}}return a}function vp(e,t,r,n,o,a,s,l,d,u,p,h){for(var m=o-1,b=o===0?a:[""],y=z0(b),v=0,w=0,x=0;v<n;++v)for(var f=0,g=ai(e,m+1,m=k0(w=s[v])),S=e;f<y;++f)(S=C0(w>0?b[f]+" "+g:B(g,/&\f/g,b[f])))&&(d[x++]=S);return Qs(e,t,r,o===0?qs:l,d,u,p,h)}function N2(e,t,r,n){return Qs(e,t,r,j0,Uu(k2()),ai(e,2,-2),0,n)}function wp(e,t,r,n,o){return Qs(e,t,r,Bu,ai(e,0,n),ai(e,n+1,-1),n,o)}function $0(e,t,r){switch(j2(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return eo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+eo+e+te+e+e;case 5936:switch(je(e,t+11)){case 114:return G+e+te+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+te+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+te+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+te+e+e;case 6165:return G+e+te+"flex-"+e+e;case 5187:return G+e+B(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return G+e+te+"flex-item-"+B(e,/flex-|-self/g,"")+(Vt(e,/flex-|baseline/)?"":te+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return G+e+te+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+te+B(e,"shrink","negative")+e;case 5292:return G+e+te+B(e,"basis","preferred-size")+e;case 6060:return G+"box-"+B(e,"-grow","")+G+e+te+B(e,"grow","positive")+e;case 4554:return G+B(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return te+"grid-column-align"+ai(e,t)+e;break;case 2592:case 3360:return te+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Vt(n.props,/grid-\w+-end/)})?~Ya(e+(r=r[t].value),"span",0)?e:te+B(e,"-start","")+e+te+"grid-row-span:"+(~Ya(r,"span",0)?Vt(r,/\d+/):+Vt(r,/\d+/)-+Vt(e,/\d+/))+";":te+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Vt(n.props,/grid-\w+-start/)})?e:te+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+eo+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ya(e,"stretch",0)?$0(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,a,s,l,d,u){return te+o+":"+a+u+(s?te+o+"-span:"+(l?d:+d-+a)+u:"")+e});case 4949:if(je(e,t+6)===121)return B(e,":",":"+G)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(je(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+te+"$2box$3")+e;case 100:return B(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function ks(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function _2(e,t,r,n){switch(e.type){case w2:if(e.children.length)break;case v2:case Bu:return e.return=e.return||e.value;case j0:return"";case S0:return e.return=e.value+"{"+ks(e.children,n)+"}";case qs:if(!Dt(e.value=e.props.join(",")))return""}return Dt(r=ks(e.children,n))?e.return=e.value+"{"+r+"}":""}function M2(e){var t=z0(e);return function(r,n,o,a){for(var s="",l=0;l<t;l++)s+=e[l](r,n,o,a)||"";return s}}function D2(e){return function(t){t.root||(t=t.return)&&e(t)}}function O2(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Bu:e.return=$0(e.value,e.length,r);return;case S0:return ks([ur(e,{value:B(e.value,"@","@"+G)})],n);case qs:if(e.length)return S2(r=e.props,function(o){switch(Vt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hn(ur(e,{props:[B(o,/:(read-\w+)/,":"+eo+"$1")]})),hn(ur(e,{props:[o]})),Pd(e,{props:yp(r,n)});break;case"::placeholder":hn(ur(e,{props:[B(o,/:(plac\w+)/,":"+G+"input-$1")]})),hn(ur(e,{props:[B(o,/:(plac\w+)/,":"+eo+"$1")]})),hn(ur(e,{props:[B(o,/:(plac\w+)/,te+"input-$1")]})),hn(ur(e,{props:[o]})),Pd(e,{props:yp(r,n)});break}return""})}}var F2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},et={},li=typeof process<"u"&&et!==void 0&&(et.REACT_APP_SC_ATTR||et.SC_ATTR)||"data-styled",P0="active",R0="data-styled-version",Zs="6.1.19",Wu=`/*!sc*/
`,Cs=typeof window<"u"&&typeof document<"u",A2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&et!==void 0&&et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&et.REACT_APP_SC_DISABLE_SPEEDY!==""?et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&et!==void 0&&et.SC_DISABLE_SPEEDY!==void 0&&et.SC_DISABLE_SPEEDY!==""&&et.SC_DISABLE_SPEEDY!=="false"&&et.SC_DISABLE_SPEEDY),L2={},el=Object.freeze([]),ci=Object.freeze({});function I0(e,t,r){return r===void 0&&(r=ci),e.theme!==r.theme&&e.theme||t||r.theme}var T0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),B2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,U2=/(^-|-$)/g;function jp(e){return e.replace(B2,"-").replace(U2,"")}var W2=/(a)(d)/gi,ta=52,Sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Td(e){var t,r="";for(t=Math.abs(e);t>ta;t=t/ta|0)r=Sp(t%ta)+r;return(Sp(t%ta)+r).replace(W2,"$1-$2")}var Bl,N0=5381,Hn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_0=function(e){return Hn(N0,e)};function Hu(e){return Td(_0(e)>>>0)}function H2(e){return e.displayName||e.name||"Component"}function Ul(e){return typeof e=="string"&&!0}var M0=typeof Symbol=="function"&&Symbol.for,D0=M0?Symbol.for("react.memo"):60115,Y2=M0?Symbol.for("react.forward_ref"):60112,V2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X2=((Bl={})[Y2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bl[D0]=O0,Bl);function kp(e){return("type"in(t=e)&&t.type.$$typeof)===D0?O0:"$$typeof"in e?X2[e.$$typeof]:V2;var t}var q2=Object.defineProperty,K2=Object.getOwnPropertyNames,Cp=Object.getOwnPropertySymbols,Q2=Object.getOwnPropertyDescriptor,J2=Object.getPrototypeOf,zp=Object.prototype;function F0(e,t,r){if(typeof t!="string"){if(zp){var n=J2(t);n&&n!==zp&&F0(e,n,r)}var o=K2(t);Cp&&(o=o.concat(Cp(t)));for(var a=kp(e),s=kp(t),l=0;l<o.length;++l){var d=o[l];if(!(d in G2||r&&r[d]||s&&d in s||a&&d in a)){var u=Q2(t,d);try{q2(e,d,u)}catch{}}}}return e}function di(e){return typeof e=="function"}function Yu(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zs(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nd(e,t,r){if(r===void 0&&(r=!1),!r&&!wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Nd(e[n],t[n]);else if(wo(t))for(var n in t)e[n]=Nd(e[n],t[n]);return e}function Vu(e,t){Object.defineProperty(e,"toString",{value:t})}function Io(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Z2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,a=o;t>=a;)if((a<<=1)<0)throw Io(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),d=(s=0,r.length);s<d;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var a=n;a<o;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),a=o+n,s=o;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(Wu);return r},e}(),Xa=new Map,Es=new Map,qa=1,ra=function(e){if(Xa.has(e))return Xa.get(e);for(;Es.has(qa);)qa++;var t=qa++;return Xa.set(e,t),Es.set(t,e),t},ey=function(e,t){qa=t+1,Xa.set(e,t),Es.set(t,e)},ty="style[".concat(li,"][").concat(R0,'="').concat(Zs,'"]'),ry=new RegExp("^".concat(li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ny=function(e,t,r){for(var n,o=r.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&e.registerName(t,n)},iy=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Wu),o=[],a=0,s=n.length;a<s;a++){var l=n[a].trim();if(l){var d=l.match(ry);if(d){var u=0|parseInt(d[1],10),p=d[2];u!==0&&(ey(p,u),ny(e,p,d[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},Ep=function(e){for(var t=document.querySelectorAll(ty),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(li)!==P0&&(iy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A0=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(l){var d=Array.from(l.querySelectorAll("style[".concat(li,"]")));return d[d.length-1]}(r),a=o!==void 0?o.nextSibling:null;n.setAttribute(li,P0),n.setAttribute(R0,Zs);var s=oy();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},ay=function(){function e(t){this.element=A0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,a=n.length;o<a;o++){var s=n[o];if(s.ownerNode===r)return s}throw Io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),sy=function(){function e(t){this.element=A0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ly=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$p=Cs,cy={isServer:!Cs,useCSSOMInjection:!A2},$s=function(){function e(t,r,n){t===void 0&&(t=ci),r===void 0&&(r={});var o=this;this.options=_e(_e({},cy),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Cs&&$p&&($p=!1,Ep(this)),Vu(this,function(){return function(a){for(var s=a.getTag(),l=s.length,d="",u=function(h){var m=function(x){return Es.get(x)}(h);if(m===void 0)return"continue";var b=a.names.get(m),y=s.getGroup(h);if(b===void 0||!b.size||y.length===0)return"continue";var v="".concat(li,".g").concat(h,'[id="').concat(m,'"]'),w="";b!==void 0&&b.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),d+="".concat(y).concat(v,'{content:"').concat(w,'"}').concat(Wu)},p=0;p<l;p++)u(p);return d}(o)})}return e.registerId=function(t){return ra(t)},e.prototype.rehydrate=function(){!this.server&&Cs&&Ep(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(_e(_e({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new ly(o):n?new ay(o):new sy(o)}(this.options),new Z2(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ra(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ra(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ra(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dy=/&/g,uy=/^\s*\/\/.*$/gm;function L0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=L0(r.children,t)),r})}function fy(e){var t,r,n,o=ci,a=o.options,s=a===void 0?ci:a,l=o.plugins,d=l===void 0?el:l,u=function(m,b,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):m},p=d.slice();p.push(function(m){m.type===qs&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(dy,r).replace(n,u))}),s.prefix&&p.push(O2),p.push(_2);var h=function(m,b,y,v){b===void 0&&(b=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,r=b,n=new RegExp("\\".concat(r,"\\b"),"g");var w=m.replace(uy,""),x=T2(y||b?"".concat(y," ").concat(b," { ").concat(w," }"):w);s.namespace&&(x=L0(x,s.namespace));var f=[];return ks(x,M2(p.concat(D2(function(g){return f.push(g)})))),f};return h.hash=d.length?d.reduce(function(m,b){return b.name||Io(15),Hn(m,b.name)},N0).toString():"",h}var py=new $s,_d=fy(),B0=Ne.createContext({shouldForwardProp:void 0,styleSheet:py,stylis:_d});B0.Consumer;Ne.createContext(void 0);function Md(){return C.useContext(B0)}var U0=function(){function e(t,r){var n=this;this.inject=function(o,a){a===void 0&&(a=_d);var s=n.name+a.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Vu(this,function(){throw Io(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=_d),this.name+t.hash},e}(),hy=function(e){return e>="A"&&e<="Z"};function Pp(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;hy(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var W0=function(e){return e==null||e===!1||e===""},H0=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!W0(a)&&(Array.isArray(a)&&a.isCss||di(a)?n.push("".concat(Pp(o),":"),a,";"):wo(a)?n.push.apply(n,oi(oi(["".concat(o," {")],H0(a),!1),["}"],!1)):n.push("".concat(Pp(o),": ").concat((t=o,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in F2||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function $r(e,t,r,n){if(W0(e))return[];if(Yu(e))return[".".concat(e.styledComponentId)];if(di(e)){if(!di(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return $r(o,t,r,n)}var a;return e instanceof U0?r?(e.inject(r,n),[e.getName(n)]):[e]:wo(e)?H0(e):Array.isArray(e)?Array.prototype.concat.apply(el,e.map(function(s){return $r(s,t,r,n)})):[e.toString()]}function Y0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(di(r)&&!Yu(r))return!1}return!0}var my=_0(Zs),gy=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Y0(t),this.componentId=r,this.baseHash=Hn(my,r),this.baseStyle=n,$s.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Gr(o,this.staticRulesId);else{var a=zs($r(this.rules,t,r,n)),s=Td(Hn(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}o=Gr(o,s),this.staticRulesId=s}else{for(var d=Hn(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var m=zs($r(h,t,r,n));d=Hn(d,m+p),u+=m}}if(u){var b=Td(d>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,n(u,".".concat(b),void 0,this.componentId)),o=Gr(o,b)}}return o},e}(),Gu=Ne.createContext(void 0);Gu.Consumer;var Wl={};function xy(e,t,r){var n=Yu(e),o=e,a=!Ul(e),s=t.attrs,l=s===void 0?el:s,d=t.componentId,u=d===void 0?function(S,j){var k=typeof S!="string"?"sc":jp(S);Wl[k]=(Wl[k]||0)+1;var z="".concat(k,"-").concat(Hu(Zs+k+Wl[k]));return j?"".concat(j,"-").concat(z):z}(t.displayName,t.parentComponentId):d,p=t.displayName,h=p===void 0?function(S){return Ul(S)?"styled.".concat(S):"Styled(".concat(H2(S),")")}(e):p,m=t.displayName&&t.componentId?"".concat(jp(t.displayName),"-").concat(t.componentId):t.componentId||u,b=n&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(n&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(S,j){return v(S,j)&&w(S,j)}}else y=v}var x=new gy(r,m,n?o.componentStyle:void 0);function f(S,j){return function(k,z,R){var E=k.attrs,P=k.componentStyle,N=k.defaultProps,D=k.foldedComponentIds,A=k.styledComponentId,J=k.target,Be=Ne.useContext(Gu),ne=Md(),ve=k.shouldForwardProp||ne.shouldForwardProp,T=I0(z,Be,N)||ci,M=function(rr,Je,Ut){for(var yi,Mr=_e(_e({},Je),{className:void 0,theme:Ut}),fl=0;fl<rr.length;fl+=1){var Oo=di(yi=rr[fl])?yi(Mr):yi;for(var nr in Oo)Mr[nr]=nr==="className"?Gr(Mr[nr],Oo[nr]):nr==="style"?_e(_e({},Mr[nr]),Oo[nr]):Oo[nr]}return Je.className&&(Mr.className=Gr(Mr.className,Je.className)),Mr}(E,z,T),O=M.as||J,q={};for(var K in M)M[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&M.theme===T||(K==="forwardedAs"?q.as=M.forwardedAs:ve&&!ve(K,O)||(q[K]=M[K]));var _r=function(rr,Je){var Ut=Md(),yi=rr.generateAndInjectStyles(Je,Ut.styleSheet,Ut.stylis);return yi}(P,M),mt=Gr(D,A);return _r&&(mt+=" "+_r),M.className&&(mt+=" "+M.className),q[Ul(O)&&!T0.has(O)?"class":"className"]=mt,R&&(q.ref=R),C.createElement(O,q)}(g,S,j)}f.displayName=h;var g=Ne.forwardRef(f);return g.attrs=b,g.componentStyle=x,g.displayName=h,g.shouldForwardProp=y,g.foldedComponentIds=n?Gr(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=m,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(j){for(var k=[],z=1;z<arguments.length;z++)k[z-1]=arguments[z];for(var R=0,E=k;R<E.length;R++)Nd(j,E[R],!0);return j}({},o.defaultProps,S):S}}),Vu(g,function(){return".".concat(g.styledComponentId)}),a&&F0(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Rp(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Ip=function(e){return Object.assign(e,{isCss:!0})};function F(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(di(e)||wo(e))return Ip($r(Rp(el,oi([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?$r(n):Ip($r(Rp(n,t)))}function Dd(e,t,r){if(r===void 0&&(r=ci),!t)throw Io(1,t);var n=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,F.apply(void 0,oi([o],a,!1)))};return n.attrs=function(o){return Dd(e,t,_e(_e({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Dd(e,t,_e(_e({},r),o))},n}var V0=function(e){return Dd(xy,e)},c=V0;T0.forEach(function(e){c[e]=V0(e)});var by=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Y0(t),$s.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var a=o(zs($r(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,a)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&$s.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function yy(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=F.apply(void 0,oi([e],t,!1)),o="sc-global-".concat(Hu(JSON.stringify(n))),a=new by(n,o),s=function(d){var u=Md(),p=Ne.useContext(Gu),h=Ne.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(h,d,u.styleSheet,p,u.stylis),Ne.useLayoutEffect(function(){if(!u.styleSheet.server)return l(h,d,u.styleSheet,p,u.stylis),function(){return a.removeStyles(h,u.styleSheet)}},[h,d,u.styleSheet,p,u.stylis]),null};function l(d,u,p,h,m){if(a.isStatic)a.renderStyles(d,L2,p,m);else{var b=_e(_e({},u),{theme:I0(u,h,s.defaultProps)});a.renderStyles(d,b,p,m)}}return Ne.memo(s)}function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=zs(F.apply(void 0,oi([e],t,!1))),o=Hu(n);return new U0(o,n)}const vy=c.header`
  background: #222;
  position: sticky;
  top: 0;
  z-index: 100;
`,wy=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.2rem 0;
`,jy=c.div`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.15em;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Sy=c.nav`
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
`,ky=c.ul`
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
`,Cy=c.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #333;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,zy=c(Xs)`
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
`,Ey=c.button`
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
`,$y=[{path:"/",label:"Главная"},{path:"/3d-tour",label:"3D тур"},{path:"/billiards",label:"Бильярд"},{path:"/karaoke",label:"Караоке"},{path:"/disco",label:"Диско-бар"},{path:"/playstation",label:"Playstation"},{path:"/lounge",label:"Кальян"},{path:"/games",label:"Настольные игры"},{path:"/banquets",label:"Банкеты"},{path:"/booking",label:"Бронирование"},{path:"/menu",label:"Меню"},{path:"/events",label:"Мероприятия"},{path:"/contact",label:"Контакты"}],Py=()=>{const e=Ro(),[t,r]=C.useState(!1);return i.jsxs(vy,{children:[i.jsx(wy,{children:i.jsx(jy,{children:"FRANTSUZ"})}),i.jsxs(Sy,{children:[i.jsx(ky,{open:t,children:$y.map(n=>i.jsx(Cy,{children:i.jsx(zy,{to:n.path,$active:e.pathname===n.path,onClick:()=>r(!1),children:n.label})},n.path))}),i.jsx(Ey,{onClick:()=>r(n=>!n),children:t?"✕":"☰"})]})]})},un=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,Se=c.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
`,Ry=c.footer`
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
`,Iy=c.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
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
`,na=c.div`
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
`,$i=c.div`
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
  }
`,Ty=c.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.7rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    
                    &:hover {
                  /* background: rgba(255, 255, 255, 0.2); */
                  /* border: 1px solid rgba(255, 255, 255, 0.4); */
                  /* transform: translateY(-3px); */
                  /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); */
                }
    
    &:active {
      transform: translateY(-1px);
    }
    
    img {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    
                    &:hover img {
                  /* transform: scale(1.1); */
                }
    
    @media (max-width: 768px) {
      padding: 0.6rem;
      
      img {
        width: 28px;
        height: 28px;
      }
    }
    
    @media (max-width: 480px) {
      padding: 0.5rem;
      
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`,Ny=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Wt=c.img`
  width: 140px;
  height: 80px;
  object-fit: contain;
  object-position: center;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
  }
  
  @media (max-width: 1200px) {
    width: 120px;
    height: 70px;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 65px;
  }
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`,_y=c.div`
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
`,My=()=>i.jsx(Ry,{children:i.jsxs(un,{children:[i.jsxs(Iy,{children:[i.jsxs(na,{children:[i.jsx("h3",{children:"Контакты"}),i.jsx($i,{children:i.jsx("a",{href:"tel:+79680905550",children:"+7 968 090-55-50"})}),i.jsx($i,{children:i.jsx("a",{href:"tel:+79680915550",children:"+7 968 091-55-50"})}),i.jsx($i,{children:i.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})}),i.jsx($i,{children:i.jsxs("a",{href:"#",children:["г. Москва,",i.jsx("br",{}),"ул. Салтыковская, 49А,",i.jsx("br",{}),"ТЦ Волна, -1 этаж"]})}),i.jsx($i,{children:i.jsxs("a",{href:"tel:+79680915550",children:["Банкетный менеджер:",i.jsx("br",{}),"+7 968 091-55-50"]})}),i.jsx("h3",{children:"Мы в соц сетях"}),i.jsxs(Ty,{children:[i.jsx("a",{href:"https://vk.com/dali_hinkali/",target:"_blank",rel:"noreferrer",title:"VK",children:i.jsx("img",{src:"/images/vk-logo.svg",alt:"VK"})}),i.jsx("a",{href:"https://rutube.ru/channel/60860525/",target:"_blank",rel:"noreferrer",title:"Rutube",children:i.jsx("img",{src:"/images/rutube-logo.svg",alt:"Rutube"})}),i.jsx("a",{href:"https://t.me/dali_hinkali/",target:"_blank",rel:"noreferrer",title:"Telegram",children:i.jsx("img",{src:"/images/telegram-logo.svg",alt:"Telegram"})})]})]}),i.jsxs(na,{children:[i.jsx("h3",{children:"Услуги"}),i.jsx("a",{href:"https://reiting.moscow/",target:"_blank",rel:"noopener noreferrer",children:"Работа"}),i.jsx("a",{href:"https://tyteda.ru/",target:"_blank",rel:"noopener noreferrer",children:"Доставка"}),i.jsx("a",{href:"https://frantsuz.ru/",target:"_blank",rel:"noopener noreferrer",children:"Обучение"}),i.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:"Продажа киев и аксессуаров"})]}),i.jsxs(na,{children:[i.jsx("h3",{children:"Гостям"}),i.jsx("a",{href:"/club-rules",children:"Правила клуба"}),i.jsx("a",{href:"/privacy",children:"Политика конфиденциальности"}),i.jsx("a",{href:"/payment-rules",children:"Правила оплаты"}),i.jsx("a",{href:"/refund",children:"Возврат и отказ от услуги"}),i.jsx("a",{href:"/requisites",children:"Реквизиты"}),i.jsx("a",{href:"/security",children:"Безопасность"})]}),i.jsxs(na,{children:[i.jsx("h3",{children:"Наши проекты"}),i.jsxs(Ny,{children:[i.jsx("a",{href:"https://shashlandia.ru/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-шашландиа.png",alt:"Шашландия"})}),i.jsx("a",{href:"http://dostavka-pominki.ru/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-доставка-поминки.png",alt:"Доставка поминок"})}),i.jsx("a",{href:"https://tyteda.ru/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-тут-еда.png",alt:"ТутЕда"})}),i.jsx("a",{href:"https://wetop.ru/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-ветоп.png",alt:"WeTop"})}),i.jsx("a",{href:"https://reiting.moscow/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-рейтинг.png",alt:"Рейтинг"})}),i.jsx("a",{href:"https://frantsuz.ru/",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-франтуз-академия.png",alt:"Франтуз Академия"})}),i.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-дали-хинкали.png",alt:"Дали Хинкали"})}),i.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-комикадзе.png",alt:"Комикадзе"})}),i.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Wt,{src:"/logo-footer/лого-пою-всегда.png",alt:"Пою Всегда"})})]})]})]}),i.jsxs(_y,{children:[i.jsx("div",{children:"© 2018 Frantsuz-club.ru все права защищены."}),i.jsx("div",{children:"Сделано WeTop digital agency."})]})]})}),Dy=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Oy=c.main`
  flex: 1;
`,Fy=({children:e})=>i.jsxs(Dy,{children:[i.jsx(Py,{}),i.jsx(Oy,{children:e}),i.jsx(My,{})]}),Ay=c.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`,Ly=c.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,By=c.div`
  color: white;
`,Uy=c.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`,Tp=c.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }
`,Wy=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,Hy=c.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 250px;
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
  }
  
  @media (max-width: 480px) {
    max-width: 180px;
  }
`,Yy=()=>i.jsx(Ay,{children:i.jsx(Se,{children:i.jsxs(Ly,{children:[i.jsxs(By,{children:[i.jsxs(Uy,{children:["Куда сходить на выходные",i.jsx("br",{}),"в Москве"]}),i.jsx(Tp,{children:'Ищете место для ярких вечеринок и атмосферных посиделок в районе Новогиреево, Реутов? Развлекательный комплекс "Француз" - это место, где можно реализовать свои мечты и получить оригинальные и креативные развлечения для создания праздничной атмосферы.'}),i.jsx(Tp,{children:"Мы - идеальное решение для компании или романтического вечера вдвоем в Перово, Новогиреево и Реутове. Наш комплекс предлагает уникальные развлечения, включая бильярд и караоке, приглашая вас окунуться в атмосферу незабываемого отдыха и развлечений."})]}),i.jsx(Wy,{children:i.jsx(Hy,{src:"/images/девушка с задумчивым взглядом.png",alt:"Девушка с задумчивым взглядом",onError:e=>{const t=e.target;t.style.display="none"}})})]})})}),Vy=c.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,Gy=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,Xy=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,qy=c.img`
  width: 100%;
  max-width: 288px;
  max-height: 556px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 250px;
    max-height: 500px;
  }
  
  @media (max-width: 768px) {
    max-width: 220px;
    max-height: 450px;
  }
`,Ky=c.div`
  color: white;
`,Qy=c.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`,Np=c.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`,Jy=c.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,Zy=c.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`,ev=c.button`
  background: transparent;
  color: white;
  border: 2px solid #4b5563;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #6b7280;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`,tv=()=>i.jsx(Vy,{children:i.jsx(Se,{children:i.jsxs(Gy,{children:[i.jsx(Xy,{children:i.jsx(qy,{src:"/images/мужикБильярд.png",alt:"Бильярдный стол с аксессуарами"})}),i.jsxs(Ky,{children:[i.jsx(Qy,{children:"Бильярд"}),i.jsx(Np,{children:"В нашем развлекательном комплексе вы найдете 12 классических бильярдных столов с роскошным зеленым сукном и профессиональными аксессуарами. У нас вы сможете насладиться игрой в различные виды бильярда, включая американский пул, русский бильярд и снукер."}),i.jsx(Np,{children:"Если вы новичок в этой игре, мы предлагаем вам пройти интересный и информативный курс молодого бойца в нашей школе бильярда."}),i.jsxs(Jy,{children:[i.jsx(Zy,{children:"Забронировать стол"}),i.jsx(ev,{children:"Подробнее"})]})]})]})})}),rv=c.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,nv=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,iv=c.div`
  color: white;
`,ov=c.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`,_p=c.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`,av=c.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,sv=c.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`,lv=c.button`
  background: transparent;
  color: white;
  border: 2px solid #4b5563;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #6b7280;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`,cv=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,dv=c.img`
  width: 100%;
  max-width: 227px;
  max-height: 538px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 200px;
    max-height: 480px;
  }
  
  @media (max-width: 768px) {
    max-width: 180px;
    max-height: 430px;
  }
`,uv=()=>i.jsx(rv,{children:i.jsx(Se,{children:i.jsxs(nv,{children:[i.jsxs(iv,{children:[i.jsx(ov,{children:"Караоке"}),i.jsx(_p,{children:"В нашем развлекательном комплексе есть двухуровневый караоке клуб, который привлечет меломанов. Наши залы оборудованы сценами и прожекторами направленного света, чтобы вы могли почувствовать себя настоящей звездой, создать камерную атмосферу и запечатлеть уникальные моменты на фотографиях."}),i.jsx(_p,{children:"Если вам хочется раскрыть себя как певец или певица, у нас функционирует Школа вокала для всех желающих."}),i.jsxs(av,{children:[i.jsx(sv,{children:"Забронировать стол"}),i.jsx(lv,{children:"Подробнее"})]})]}),i.jsx(cv,{children:i.jsx(dv,{src:"/images/караокеЖенщина.png",alt:"Девушка поет в караоке"})})]})})}),fv=c.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`,pv=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,hv=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,mv=c.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 350px;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`,gv=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xv=c.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Mp=c.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,bv=c.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,yv=c.button`
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`,vv=c.button`
  background: transparent;
  color: white;
  border: 2px solid #4b5563;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6b7280;
    background: rgba(255, 255, 255, 0.1);
  }
`,wv=()=>i.jsx(fv,{children:i.jsx(Se,{children:i.jsxs(pv,{children:[i.jsx(hv,{children:i.jsx(mv,{src:"/images/месси.png",alt:"Футболист Месси в действии"})}),i.jsxs(gv,{children:[i.jsx(xv,{children:"Playstation"}),i.jsx(Mp,{children:"В нашем развлекательном комплексе есть отдельная зона PlayStation и широкий выбор настольных игр, которые обязательно понравятся азартным гостям всех возрастов. Приходите к нам в выходные в большой компании спортивных болельщиков или вдвоем с другом или подругой."}),i.jsx(Mp,{children:"Вы сможете насладиться захватывающими победами ваших любимых команд, следя за прямыми трансляциями матчей на большом экране, сопровождая их холодным пивом и вкусными снеками. А в случае поражения, вы сможете развеять горечь стаканом виски и насладиться вкусным ужином."}),i.jsxs(bv,{children:[i.jsx(yv,{children:"Забронировать стол"}),i.jsx(vv,{children:"Подробнее"})]})]})]})})}),jv=c.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`,Sv=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,kv=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Cv=c.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Dp=c.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,zv=c.div`
  margin-top: 1rem;
`,Ev=c.button`
  background: #4b5563;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6b7280;
    transform: translateY(-2px);
  }
`,$v=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Pv=c.img`
  width: 100%;
  max-width: 224px;
  max-height: 474px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 200px;
    max-height: 430px;
  }
  
  @media (max-width: 768px) {
    max-width: 180px;
    max-height: 380px;
  }
`,Rv=()=>i.jsx(jv,{children:i.jsx(Se,{children:i.jsxs(Sv,{children:[i.jsxs(kv,{children:[i.jsx(Cv,{children:"Диско Бар"}),i.jsx(Dp,{children:"В нашем развлекательном комплексе вы сможете насладиться уютной аурой лаунджа, идеальной для приятного времяпровождения в компании или вдвоем. Здесь вы сможете расслабиться, устроившись на роскошных бархатных и шелковых подушках и комфортабельных мягких диванах. Мы предлагаем вам попробовать необычные паровые коктейли, приготовленные по особым рецептам."}),i.jsx(Dp,{children:"В нашем VIP-зале вы найдете уютное местечко и сможете оценить богатый выбор благородных вин, как истинный сомелье. Фирменные блюда и десерты от наших шеф-поваров, а также элитный алкоголь из нашего бара порадуют гурманов. Мы постараемся обслужить вас деликатно и ненавязчиво, чтобы вы могли насладиться своим свободным временем весело и приятно."}),i.jsx(zv,{children:i.jsx(Ev,{children:"Подробнее"})})]}),i.jsx($v,{children:i.jsx(Pv,{src:"/images/диско.png",alt:"Диско бар - уютная атмосфера лаунджа"})})]})})});H`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;H`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;H`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;H`
  0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.2); }
  50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.4); }
`;H`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;H`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const Iv=c.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,Tv=c.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`,Nv=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,_t=c.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.2);
  }
  
  ${e=>e.$isHovered&&F`
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.2);
  `}
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }
`,or=c.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border-radius: 20px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #667eea, #8b5cf6, #a855f7, #667eea);
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  ${e=>e.$isHovered&&F`
    transform: scale(1.1) rotate(5deg);
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    
    &::after {
      opacity: 1;
      animation: ${F`rotate`} 3s linear infinite;
    }
  `}
  
  svg {
    width: 40px;
    height: 40px;
    fill: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: all 0.4s ease;
    
    ${e=>e.$isHovered&&F`
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7));
    `}
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    
    svg {
      width: 35px;
      height: 35px;
    }
  }
`,ar=c.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  color: white;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${_t}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,sr=c.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 1rem 0 0 0;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  
  ${_t}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`,_v=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`,Mv=c.div`
  position: absolute;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  border-radius: 50%;
  animation: ${F`float`} ${e=>e.$duration}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  opacity: 0.6;
`,Dv=()=>{const[e,t]=C.useState(null);return i.jsxs(Iv,{children:[i.jsx(_v,{children:[...Array(20)].map((r,n)=>i.jsx(Mv,{$delay:Math.random()*5,$duration:3+Math.random()*4,$size:2+Math.random()*4,style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},n))}),i.jsxs(Se,{children:[i.jsx(Tv,{children:"✨ А еще у нас Вы можете ✨"}),i.jsxs(Nv,{children:[i.jsxs(_t,{$isHovered:e===0,onMouseEnter:()=>t(0),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===0,children:i.jsxs("svg",{viewBox:"0 0 24 24",children:[i.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",fill:"white"}),i.jsx("rect",{x:"15",y:"3",width:"6",height:"6",rx:"1",fill:"white"}),i.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",fill:"white"}),i.jsx("circle",{cx:"6",cy:"6",r:"1",fill:"#667eea"}),i.jsx("circle",{cx:"18",cy:"6",r:"1",fill:"#8b5cf6"}),i.jsx("circle",{cx:"12",cy:"12",r:"1",fill:"#a855f7"})]})}),i.jsx(ar,{children:"🎲 Поиграть в настольные игры"}),i.jsx(sr,{children:"Увлекательные стратегии, логические головоломки и веселые игры для компании"})]}),i.jsxs(_t,{$isHovered:e===1,onMouseEnter:()=>t(1),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===1,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",fill:"white"})})}),i.jsx(ar,{children:"🍕 Заказать доставку еды"}),i.jsx(sr,{children:"Быстрая доставка вкусных блюд прямо к вашему столику или на дом"})]}),i.jsxs(_t,{$isHovered:e===2,onMouseEnter:()=>t(2),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===2,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"white"})})}),i.jsx(ar,{children:"💨 Насладиться паровым коктейлем"}),i.jsx(sr,{children:"Эксклюзивные кальянные композиции с премиальными табаками"})]}),i.jsxs(_t,{$isHovered:e===3,onMouseEnter:()=>t(3),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===3,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",fill:"white"})})}),i.jsx(ar,{children:"🛍️ Француз шоп"}),i.jsx(sr,{children:"Продажа профессиональных киев для бильярда и аксессуаров высокого качества"})]}),i.jsxs(_t,{$isHovered:e===4,onMouseEnter:()=>t(4),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===4,children:i.jsxs("svg",{viewBox:"0 0 24 24",children:[i.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"4",fill:"none",stroke:"white",strokeWidth:"2"}),i.jsx("circle",{cx:"8",cy:"10",r:"1",fill:"white"}),i.jsx("circle",{cx:"16",cy:"14",r:"1",fill:"white"}),i.jsx("line",{x1:"6",y1:"8",x2:"18",y2:"16",stroke:"white",strokeWidth:"1"})]})}),i.jsx(ar,{children:"🎯 Учиться в школе бильярда"}),i.jsx(sr,{children:"Профессиональные тренеры научат вас всем секретам игры"})]}),i.jsxs(_t,{$isHovered:e===5,onMouseEnter:()=>t(5),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===5,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",fill:"white"})})}),i.jsx(ar,{children:"🎤 Учиться в школе вокала"}),i.jsx(sr,{children:"Развивайте свой голос под руководством опытных педагогов"})]}),i.jsxs(_t,{$isHovered:e===6,onMouseEnter:()=>t(6),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===6,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",fill:"white"})})}),i.jsx(ar,{children:"🎭 Посетить концерты"}),i.jsx(sr,{children:"Живые выступления артистов, музыкальные вечера и развлекательные шоу"})]}),i.jsxs(_t,{$isHovered:e===7,onMouseEnter:()=>t(7),onMouseLeave:()=>t(null),children:[i.jsx(or,{$isHovered:e===7,children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.24 3.74c-.31.36-.61.69-.92 1.01.76.28 1.47.64 2.18 1.09.71-.45 1.42-.81 2.18-1.09.31-.32.61-.65.92-1.01L19 12.28V22h1zM12.5 11.5c.72-.41 1.33-.88 1.85-1.35.52.47 1.13.94 1.85 1.35V22h-3.7v-10.5zM5 22v-6H2.5l2.54-7.63A1.5 1.5 0 0 1 6.54 8H7c.8 0 1.54.37 2.01 1l3.24 3.74c.31.36.61.69.92 1.01-.76.28-1.47.64-2.18 1.09-.71-.45-1.42-.81-2.18-1.09-.31-.32-.61-.65-.92-1.01L5 12.28V22H5z",fill:"white"})})}),i.jsx(ar,{children:"⭐ Рейтинг. Кадровое агентство"}),i.jsx(sr,{children:"Профессиональный подбор персонала и кадровое консультирование для вашего бизнеса"})]})]})]})]})},Ov=c.div`
  display: flex;
  flex-direction: column;
`,Fv=c.main`
  flex: 1;
`,Av=c.section`
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
`;c.div`
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
`;const Lv=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`,Bv=c.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
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
`,Uv=c.h1`
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
`,Wv=c.div`
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
`,Hv=c.div`
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
`,Hl=c.div`
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
`,Yv=c.div`
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
`,Vv=c.div`
  position: relative;
  width: 300px;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`,Gv=c.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`,Xv=c.img`
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
`,qv=c.img`
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
`,Kv=()=>i.jsx(Ov,{children:i.jsxs(Fv,{children:[i.jsxs(Av,{children:[i.jsx(Lv,{}),i.jsx(Bv,{children:i.jsxs(Se,{children:[i.jsxs(Uv,{children:["Развлекательный комплекс",i.jsx("br",{}),'"Француз"']}),i.jsxs(Wv,{children:["Уникальное место, идеальное для ярких вечеринок",i.jsx("br",{}),"и уютных посиделок с друзьями"]}),i.jsxs(Hv,{children:[i.jsx(Hl,{children:"Караоке"}),i.jsx(Hl,{children:"Бильярд"}),i.jsx(Hl,{children:"Диско Бар"})]})]})}),i.jsx(Yv,{children:i.jsxs(Vv,{children:[i.jsx(Gv,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2.png",alt:"Девушка с коктейлем"}),i.jsx(Xv,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-flower.png",alt:"Цветок"}),i.jsx(qv,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-microphone.png",alt:"Микрофон"})]})})]}),i.jsx(Yy,{}),i.jsx(tv,{}),i.jsx(uv,{}),i.jsx(wv,{}),i.jsx(Rv,{}),i.jsx(Dv,{})]})}),Qv=c.div`
  display: flex;
  flex-direction: column;
`,Jv=c.main`
  flex: 1;
  padding: 2rem 0;
`,Zv=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,ew=c.div`
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
`,tw=()=>i.jsx(Qv,{children:i.jsx(Jv,{children:i.jsx(Zv,{children:i.jsxs(ew,{children:[i.jsx("h1",{children:"About Our Club"}),i.jsx("p",{children:"We are a community of passionate individuals who share common interests and goals. Our club provides a platform for networking, learning, and growing together."})]})})})}),rw=c.div`
  display: flex;
  flex-direction: column;
`,nw=c.main`
  flex: 1;
  padding: 2rem 0;
`,iw=c.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`,ow=c.div`
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
`,aw=()=>i.jsx(rw,{children:i.jsx(nw,{children:i.jsx(iw,{children:i.jsxs(ow,{children:[i.jsx("h1",{children:"Contact Us"}),i.jsx("p",{children:"Get in touch with us for any questions or feedback."})]})})})});function G0(e,t){return function(){return e.apply(t,arguments)}}const{toString:sw}=Object.prototype,{getPrototypeOf:Xu}=Object,{iterator:tl,toStringTag:X0}=Symbol,rl=(e=>t=>{const r=sw.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),$t=e=>(e=e.toLowerCase(),t=>rl(t)===e),nl=e=>t=>typeof t===e,{isArray:xi}=Array,jo=nl("undefined");function To(e){return e!==null&&!jo(e)&&e.constructor!==null&&!jo(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const q0=$t("ArrayBuffer");function lw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&q0(e.buffer),t}const cw=nl("string"),Ke=nl("function"),K0=nl("number"),No=e=>e!==null&&typeof e=="object",dw=e=>e===!0||e===!1,Ka=e=>{if(rl(e)!=="object")return!1;const t=Xu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(X0 in e)&&!(tl in e)},uw=e=>{if(!No(e)||To(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},fw=$t("Date"),pw=$t("File"),hw=$t("Blob"),mw=$t("FileList"),gw=e=>No(e)&&Ke(e.pipe),xw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ke(e.append)&&((t=rl(e))==="formdata"||t==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"))},bw=$t("URLSearchParams"),[yw,vw,ww,jw]=["ReadableStream","Request","Response","Headers"].map($t),Sw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _o(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),xi(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(To(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let l;for(n=0;n<s;n++)l=a[n],t.call(null,e[l],l,e)}}function Q0(e,t){if(To(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,J0=e=>!jo(e)&&e!==Xr;function Od(){const{caseless:e}=J0(this)&&this||{},t={},r=(n,o)=>{const a=e&&Q0(t,o)||o;Ka(t[a])&&Ka(n)?t[a]=Od(t[a],n):Ka(n)?t[a]=Od({},n):xi(n)?t[a]=n.slice():t[a]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&_o(arguments[n],r);return t}const kw=(e,t,r,{allOwnKeys:n}={})=>(_o(t,(o,a)=>{r&&Ke(o)?e[a]=G0(o,r):e[a]=o},{allOwnKeys:n}),e),Cw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zw=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Ew=(e,t,r,n)=>{let o,a,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&Xu(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},$w=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Pw=e=>{if(!e)return null;if(xi(e))return e;let t=e.length;if(!K0(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Rw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Xu(Uint8Array)),Iw=(e,t)=>{const n=(e&&e[tl]).call(e);let o;for(;(o=n.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},Tw=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Nw=$t("HTMLFormElement"),_w=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Op=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Mw=$t("RegExp"),Z0=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};_o(r,(o,a)=>{let s;(s=t(o,a,e))!==!1&&(n[a]=s||o)}),Object.defineProperties(e,n)},Dw=e=>{Z0(e,(t,r)=>{if(Ke(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Ke(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ow=(e,t)=>{const r={},n=o=>{o.forEach(a=>{r[a]=!0})};return xi(e)?n(e):n(String(e).split(t)),r},Fw=()=>{},Aw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Lw(e){return!!(e&&Ke(e.append)&&e[X0]==="FormData"&&e[tl])}const Bw=e=>{const t=new Array(10),r=(n,o)=>{if(No(n)){if(t.indexOf(n)>=0)return;if(To(n))return n;if(!("toJSON"in n)){t[o]=n;const a=xi(n)?[]:{};return _o(n,(s,l)=>{const d=r(s,o+1);!jo(d)&&(a[l]=d)}),t[o]=void 0,a}}return n};return r(e,0)},Uw=$t("AsyncFunction"),Ww=e=>e&&(No(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),ex=((e,t)=>e?setImmediate:t?((r,n)=>(Xr.addEventListener("message",({source:o,data:a})=>{o===Xr&&a===r&&n.length&&n.shift()()},!1),o=>{n.push(o),Xr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ke(Xr.postMessage)),Hw=typeof queueMicrotask<"u"?queueMicrotask.bind(Xr):typeof process<"u"&&process.nextTick||ex,Yw=e=>e!=null&&Ke(e[tl]),$={isArray:xi,isArrayBuffer:q0,isBuffer:To,isFormData:xw,isArrayBufferView:lw,isString:cw,isNumber:K0,isBoolean:dw,isObject:No,isPlainObject:Ka,isEmptyObject:uw,isReadableStream:yw,isRequest:vw,isResponse:ww,isHeaders:jw,isUndefined:jo,isDate:fw,isFile:pw,isBlob:hw,isRegExp:Mw,isFunction:Ke,isStream:gw,isURLSearchParams:bw,isTypedArray:Rw,isFileList:mw,forEach:_o,merge:Od,extend:kw,trim:Sw,stripBOM:Cw,inherits:zw,toFlatObject:Ew,kindOf:rl,kindOfTest:$t,endsWith:$w,toArray:Pw,forEachEntry:Iw,matchAll:Tw,isHTMLForm:Nw,hasOwnProperty:Op,hasOwnProp:Op,reduceDescriptors:Z0,freezeMethods:Dw,toObjectSet:Ow,toCamelCase:_w,noop:Fw,toFiniteNumber:Aw,findKey:Q0,global:Xr,isContextDefined:J0,isSpecCompliantForm:Lw,toJSONObject:Bw,isAsyncFn:Uw,isThenable:Ww,setImmediate:ex,asap:Hw,isIterable:Yw};function L(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const tx=L.prototype,rx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rx[e]={value:e}});Object.defineProperties(L,rx);Object.defineProperty(tx,"isAxiosError",{value:!0});L.from=(e,t,r,n,o,a)=>{const s=Object.create(tx);return $.toFlatObject(e,s,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),L.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,a&&Object.assign(s,a),s};const Vw=null;function Fd(e){return $.isPlainObject(e)||$.isArray(e)}function nx(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function Fp(e,t,r){return e?e.concat(t).map(function(o,a){return o=nx(o),!r&&a?"["+o+"]":o}).join(r?".":""):t}function Gw(e){return $.isArray(e)&&!e.some(Fd)}const Xw=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function il(e,t,r){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=$.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!$.isUndefined(w[v])});const n=r.metaTokens,o=r.visitor||p,a=r.dots,s=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if($.isDate(y))return y.toISOString();if($.isBoolean(y))return y.toString();if(!d&&$.isBlob(y))throw new L("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(y)||$.isTypedArray(y)?d&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,v,w){let x=y;if(y&&!w&&typeof y=="object"){if($.endsWith(v,"{}"))v=n?v:v.slice(0,-2),y=JSON.stringify(y);else if($.isArray(y)&&Gw(y)||($.isFileList(y)||$.endsWith(v,"[]"))&&(x=$.toArray(y)))return v=nx(v),x.forEach(function(g,S){!($.isUndefined(g)||g===null)&&t.append(s===!0?Fp([v],S,a):s===null?v:v+"[]",u(g))}),!1}return Fd(y)?!0:(t.append(Fp(w,v,a),u(y)),!1)}const h=[],m=Object.assign(Xw,{defaultVisitor:p,convertValue:u,isVisitable:Fd});function b(y,v){if(!$.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(y),$.forEach(y,function(x,f){(!($.isUndefined(x)||x===null)&&o.call(t,x,$.isString(f)?f.trim():f,v,m))===!0&&b(x,v?v.concat(f):[f])}),h.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Ap(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function qu(e,t){this._pairs=[],e&&il(e,this,t)}const ix=qu.prototype;ix.append=function(t,r){this._pairs.push([t,r])};ix.toString=function(t){const r=t?function(n){return t.call(this,n,Ap)}:Ap;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function qw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ox(e,t,r){if(!t)return e;const n=r&&r.encode||qw;$.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let a;if(o?a=o(t,r):a=$.isURLSearchParams(t)?t.toString():new qu(t,r).toString(n),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Lp{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ax={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kw=typeof URLSearchParams<"u"?URLSearchParams:qu,Qw=typeof FormData<"u"?FormData:null,Jw=typeof Blob<"u"?Blob:null,Zw={isBrowser:!0,classes:{URLSearchParams:Kw,FormData:Qw,Blob:Jw},protocols:["http","https","file","blob","url","data"]},Ku=typeof window<"u"&&typeof document<"u",Ad=typeof navigator=="object"&&navigator||void 0,ej=Ku&&(!Ad||["ReactNative","NativeScript","NS"].indexOf(Ad.product)<0),tj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rj=Ku&&window.location.href||"http://localhost",nj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ku,hasStandardBrowserEnv:ej,hasStandardBrowserWebWorkerEnv:tj,navigator:Ad,origin:rj},Symbol.toStringTag,{value:"Module"})),Te={...nj,...Zw};function ij(e,t){return il(e,new Te.classes.URLSearchParams,{visitor:function(r,n,o,a){return Te.isNode&&$.isBuffer(r)?(this.append(n,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function oj(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function aj(e){const t={},r=Object.keys(e);let n;const o=r.length;let a;for(n=0;n<o;n++)a=r[n],t[a]=e[a];return t}function sx(e){function t(r,n,o,a){let s=r[a++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),d=a>=r.length;return s=!s&&$.isArray(o)?o.length:s,d?($.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!l):((!o[s]||!$.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],a)&&$.isArray(o[s])&&(o[s]=aj(o[s])),!l)}if($.isFormData(e)&&$.isFunction(e.entries)){const r={};return $.forEachEntry(e,(n,o)=>{t(oj(n),o,r,0)}),r}return null}function sj(e,t,r){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Mo={transitional:ax,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,a=$.isObject(t);if(a&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(sx(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ij(t,this.formSerializer).toString();if((l=$.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return il(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||o?(r.setContentType("application/json",!1),sj(t)):t}],transformResponse:[function(t){const r=this.transitional||Mo.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(n&&!this.responseType||o)){const s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?L.from(l,L.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{Mo.headers[e]={}});const lj=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cj=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&lj[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Bp=Symbol("internals");function Pi(e){return e&&String(e).trim().toLowerCase()}function Qa(e){return e===!1||e==null?e:$.isArray(e)?e.map(Qa):String(e)}function dj(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const uj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Yl(e,t,r,n,o){if($.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!$.isString(t)){if($.isString(n))return t.indexOf(n)!==-1;if($.isRegExp(n))return n.test(t)}}function fj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function pj(e,t){const r=$.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,a,s){return this[n].call(this,t,o,a,s)},configurable:!0})})}let Qe=class{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function a(l,d,u){const p=Pi(d);if(!p)throw new Error("header name must be a non-empty string");const h=$.findKey(o,p);(!h||o[h]===void 0||u===!0||u===void 0&&o[h]!==!1)&&(o[h||d]=Qa(l))}const s=(l,d)=>$.forEach(l,(u,p)=>a(u,p,d));if($.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if($.isString(t)&&(t=t.trim())&&!uj(t))s(cj(t),r);else if($.isObject(t)&&$.isIterable(t)){let l={},d,u;for(const p of t){if(!$.isArray(p))throw TypeError("Object iterator must return a key-value pair");l[u=p[0]]=(d=l[u])?$.isArray(d)?[...d,p[1]]:[d,p[1]]:p[1]}s(l,r)}else t!=null&&a(r,t,n);return this}get(t,r){if(t=Pi(t),t){const n=$.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return dj(o);if($.isFunction(r))return r.call(this,o,n);if($.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Pi(t),t){const n=$.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Yl(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function a(s){if(s=Pi(s),s){const l=$.findKey(n,s);l&&(!r||Yl(n,n[l],l,r))&&(delete n[l],o=!0)}}return $.isArray(t)?t.forEach(a):a(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const a=r[n];(!t||Yl(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const r=this,n={};return $.forEach(this,(o,a)=>{const s=$.findKey(n,a);if(s){r[s]=Qa(o),delete r[a];return}const l=t?fj(a):String(a).trim();l!==a&&delete r[a],r[l]=Qa(o),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return $.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&$.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Bp]=this[Bp]={accessors:{}}).accessors,o=this.prototype;function a(s){const l=Pi(s);n[l]||(pj(o,s),n[l]=!0)}return $.isArray(t)?t.forEach(a):a(t),this}};Qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Qe.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});$.freezeMethods(Qe);function Vl(e,t){const r=this||Mo,n=t||r,o=Qe.from(n.headers);let a=n.data;return $.forEach(e,function(l){a=l.call(r,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function lx(e){return!!(e&&e.__CANCEL__)}function bi(e,t,r){L.call(this,e??"canceled",L.ERR_CANCELED,t,r),this.name="CanceledError"}$.inherits(bi,L,{__CANCEL__:!0});function cx(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new L("Request failed with status code "+r.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function hj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mj(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),p=n[a];s||(s=u),r[o]=d,n[o]=u;let h=a,m=0;for(;h!==o;)m+=r[h++],h=h%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),u-s<t)return;const b=p&&u-p;return b?Math.round(m*1e3/b):void 0}}function gj(e,t){let r=0,n=1e3/t,o,a;const s=(u,p=Date.now())=>{r=p,o=null,a&&(clearTimeout(a),a=null),e(...u)};return[(...u)=>{const p=Date.now(),h=p-r;h>=n?s(u,p):(o=u,a||(a=setTimeout(()=>{a=null,s(o)},n-h)))},()=>o&&s(o)]}const Ps=(e,t,r=3)=>{let n=0;const o=mj(50,250);return gj(a=>{const s=a.loaded,l=a.lengthComputable?a.total:void 0,d=s-n,u=o(d),p=s<=l;n=s;const h={loaded:s,total:l,progress:l?s/l:void 0,bytes:d,rate:u||void 0,estimated:u&&l&&p?(l-s)/u:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(h)},r)},Up=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Wp=e=>(...t)=>$.asap(()=>e(...t)),xj=Te.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Te.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Te.origin),Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent)):()=>!0,bj=Te.hasStandardBrowserEnv?{write(e,t,r,n,o,a){const s=[e+"="+encodeURIComponent(t)];$.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),$.isString(n)&&s.push("path="+n),$.isString(o)&&s.push("domain="+o),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function dx(e,t,r){let n=!yj(t);return e&&(n||r==!1)?vj(e,t):t}const Hp=e=>e instanceof Qe?{...e}:e;function an(e,t){t=t||{};const r={};function n(u,p,h,m){return $.isPlainObject(u)&&$.isPlainObject(p)?$.merge.call({caseless:m},u,p):$.isPlainObject(p)?$.merge({},p):$.isArray(p)?p.slice():p}function o(u,p,h,m){if($.isUndefined(p)){if(!$.isUndefined(u))return n(void 0,u,h,m)}else return n(u,p,h,m)}function a(u,p){if(!$.isUndefined(p))return n(void 0,p)}function s(u,p){if($.isUndefined(p)){if(!$.isUndefined(u))return n(void 0,u)}else return n(void 0,p)}function l(u,p,h){if(h in t)return n(u,p);if(h in e)return n(void 0,u)}const d={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,p,h)=>o(Hp(u),Hp(p),h,!0)};return $.forEach(Object.keys({...e,...t}),function(p){const h=d[p]||o,m=h(e[p],t[p],p);$.isUndefined(m)&&h!==l||(r[p]=m)}),r}const ux=e=>{const t=an({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:a,headers:s,auth:l}=t;t.headers=s=Qe.from(s),t.url=ox(dx(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let d;if($.isFormData(r)){if(Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((d=s.getContentType())!==!1){const[u,...p]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...p].join("; "))}}if(Te.hasStandardBrowserEnv&&(n&&$.isFunction(n)&&(n=n(t)),n||n!==!1&&xj(t.url))){const u=o&&a&&bj.read(a);u&&s.set(o,u)}return t},wj=typeof XMLHttpRequest<"u",jj=wj&&function(e){return new Promise(function(r,n){const o=ux(e);let a=o.data;const s=Qe.from(o.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:u}=o,p,h,m,b,y;function v(){b&&b(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function x(){if(!w)return;const g=Qe.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:g,config:e,request:w};cx(function(z){r(z),v()},function(z){n(z),v()},j),w=null}"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(x)},w.onabort=function(){w&&(n(new L("Request aborted",L.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new L("Network Error",L.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||ax;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),n(new L(S,j.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,w)),w=null},a===void 0&&s.setContentType(null),"setRequestHeader"in w&&$.forEach(s.toJSON(),function(S,j){w.setRequestHeader(j,S)}),$.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),l&&l!=="json"&&(w.responseType=o.responseType),u&&([m,y]=Ps(u,!0),w.addEventListener("progress",m)),d&&w.upload&&([h,b]=Ps(d),w.upload.addEventListener("progress",h),w.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(p=g=>{w&&(n(!g||g.type?new bi(null,e,w):g),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(p),o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p)));const f=hj(o.url);if(f&&Te.protocols.indexOf(f)===-1){n(new L("Unsupported protocol "+f+":",L.ERR_BAD_REQUEST,e));return}w.send(a||null)})},Sj=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const a=function(u){if(!o){o=!0,l();const p=u instanceof Error?u:this.reason;n.abort(p instanceof L?p:new bi(p instanceof Error?p.message:p))}};let s=t&&setTimeout(()=>{s=null,a(new L(`timeout ${t} of ms exceeded`,L.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(a):u.removeEventListener("abort",a)}),e=null)};e.forEach(u=>u.addEventListener("abort",a));const{signal:d}=n;return d.unsubscribe=()=>$.asap(l),d}},kj=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},Cj=async function*(e,t){for await(const r of zj(e))yield*kj(r,t)},zj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Yp=(e,t,r,n)=>{const o=Cj(e,t);let a=0,s,l=d=>{s||(s=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:u,value:p}=await o.next();if(u){l(),d.close();return}let h=p.byteLength;if(r){let m=a+=h;r(m)}d.enqueue(new Uint8Array(p))}catch(u){throw l(u),u}},cancel(d){return l(d),o.return()}},{highWaterMark:2})},ol=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",fx=ol&&typeof ReadableStream=="function",Ej=ol&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),px=(e,...t)=>{try{return!!e(...t)}catch{return!1}},$j=fx&&px(()=>{let e=!1;const t=new Request(Te.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Vp=64*1024,Ld=fx&&px(()=>$.isReadableStream(new Response("").body)),Rs={stream:Ld&&(e=>e.body)};ol&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Rs[t]&&(Rs[t]=$.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new L(`Response type '${t}' is not supported`,L.ERR_NOT_SUPPORT,n)})})})(new Response);const Pj=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(Te.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await Ej(e)).byteLength},Rj=async(e,t)=>{const r=$.toFiniteNumber(e.getContentLength());return r??Pj(t)},Ij=ol&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:a,timeout:s,onDownloadProgress:l,onUploadProgress:d,responseType:u,headers:p,withCredentials:h="same-origin",fetchOptions:m}=ux(e);u=u?(u+"").toLowerCase():"text";let b=Sj([o,a&&a.toAbortSignal()],s),y;const v=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let w;try{if(d&&$j&&r!=="get"&&r!=="head"&&(w=await Rj(p,n))!==0){let j=new Request(t,{method:"POST",body:n,duplex:"half"}),k;if($.isFormData(n)&&(k=j.headers.get("content-type"))&&p.setContentType(k),j.body){const[z,R]=Up(w,Ps(Wp(d)));n=Yp(j.body,Vp,z,R)}}$.isString(h)||(h=h?"include":"omit");const x="credentials"in Request.prototype;y=new Request(t,{...m,signal:b,method:r.toUpperCase(),headers:p.normalize().toJSON(),body:n,duplex:"half",credentials:x?h:void 0});let f=await fetch(y,m);const g=Ld&&(u==="stream"||u==="response");if(Ld&&(l||g&&v)){const j={};["status","statusText","headers"].forEach(E=>{j[E]=f[E]});const k=$.toFiniteNumber(f.headers.get("content-length")),[z,R]=l&&Up(k,Ps(Wp(l),!0))||[];f=new Response(Yp(f.body,Vp,z,()=>{R&&R(),v&&v()}),j)}u=u||"text";let S=await Rs[$.findKey(Rs,u)||"text"](f,e);return!g&&v&&v(),await new Promise((j,k)=>{cx(j,k,{data:S,headers:Qe.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:y})})}catch(x){throw v&&v(),x&&x.name==="TypeError"&&/Load failed|fetch/i.test(x.message)?Object.assign(new L("Network Error",L.ERR_NETWORK,e,y),{cause:x.cause||x}):L.from(x,x&&x.code,e,y)}}),Bd={http:Vw,xhr:jj,fetch:Ij};$.forEach(Bd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Gp=e=>`- ${e}`,Tj=e=>$.isFunction(e)||e===null||e===!1,hx={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let a=0;a<t;a++){r=e[a];let s;if(n=r,!Tj(r)&&(n=Bd[(s=String(r)).toLowerCase()],n===void 0))throw new L(`Unknown adapter '${s}'`);if(n)break;o[s||"#"+a]=n}if(!n){const a=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let s=t?a.length>1?`since :
`+a.map(Gp).join(`
`):" "+Gp(a[0]):"as no adapter specified";throw new L("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:Bd};function Gl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new bi(null,e)}function Xp(e){return Gl(e),e.headers=Qe.from(e.headers),e.data=Vl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),hx.getAdapter(e.adapter||Mo.adapter)(e).then(function(n){return Gl(e),n.data=Vl.call(e,e.transformResponse,n),n.headers=Qe.from(n.headers),n},function(n){return lx(n)||(Gl(e),n&&n.response&&(n.response.data=Vl.call(e,e.transformResponse,n.response),n.response.headers=Qe.from(n.response.headers))),Promise.reject(n)})}const mx="1.11.0",al={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{al[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const qp={};al.transitional=function(t,r,n){function o(a,s){return"[Axios v"+mx+"] Transitional option '"+a+"'"+s+(n?". "+n:"")}return(a,s,l)=>{if(t===!1)throw new L(o(s," has been removed"+(r?" in "+r:"")),L.ERR_DEPRECATED);return r&&!qp[s]&&(qp[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,s,l):!0}};al.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Nj(e,t,r){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const a=n[o],s=t[a];if(s){const l=e[a],d=l===void 0||s(l,a,e);if(d!==!0)throw new L("option "+a+" must be "+d,L.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new L("Unknown option "+a,L.ERR_BAD_OPTION)}}const Ja={assertOptions:Nj,validators:al},Rt=Ja.validators;let Zr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Lp,response:new Lp}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?a&&!String(n.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+a):n.stack=a}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=an(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:a}=r;n!==void 0&&Ja.assertOptions(n,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean)},!1),o!=null&&($.isFunction(o)?r.paramsSerializer={serialize:o}:Ja.assertOptions(o,{encode:Rt.function,serialize:Rt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ja.assertOptions(r,{baseUrl:Rt.spelling("baseURL"),withXsrfToken:Rt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=a&&$.merge(a.common,a[r.method]);a&&$.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),r.headers=Qe.concat(s,a);const l=[];let d=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(d=d&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let p,h=0,m;if(!d){const y=[Xp.bind(this),void 0];for(y.unshift(...l),y.push(...u),m=y.length,p=Promise.resolve(r);h<m;)p=p.then(y[h++],y[h++]);return p}m=l.length;let b=r;for(h=0;h<m;){const y=l[h++],v=l[h++];try{b=y(b)}catch(w){v.call(this,w);break}}try{p=Xp.call(this,b)}catch(y){return Promise.reject(y)}for(h=0,m=u.length;h<m;)p=p.then(u[h++],u[h++]);return p}getUri(t){t=an(this.defaults,t);const r=dx(t.baseURL,t.url,t.allowAbsoluteUrls);return ox(r,t.params,t.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(t){Zr.prototype[t]=function(r,n){return this.request(an(n||{},{method:t,url:r,data:(n||{}).data}))}});$.forEach(["post","put","patch"],function(t){function r(n){return function(a,s,l){return this.request(an(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}Zr.prototype[t]=r(),Zr.prototype[t+"Form"]=r(!0)});let _j=class gx{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const n=this;this.promise.then(o=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](o);n._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(l=>{n.subscribe(l),a=l}).then(o);return s.cancel=function(){n.unsubscribe(a)},s},t(function(a,s,l){n.reason||(n.reason=new bi(a,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new gx(function(o){t=o}),cancel:t}}};function Mj(e){return function(r){return e.apply(null,r)}}function Dj(e){return $.isObject(e)&&e.isAxiosError===!0}const Ud={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ud).forEach(([e,t])=>{Ud[t]=e});function xx(e){const t=new Zr(e),r=G0(Zr.prototype.request,t);return $.extend(r,Zr.prototype,t,{allOwnKeys:!0}),$.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return xx(an(e,o))},r}const ue=xx(Mo);ue.Axios=Zr;ue.CanceledError=bi;ue.CancelToken=_j;ue.isCancel=lx;ue.VERSION=mx;ue.toFormData=il;ue.AxiosError=L;ue.Cancel=ue.CanceledError;ue.all=function(t){return Promise.all(t)};ue.spread=Mj;ue.isAxiosError=Dj;ue.mergeConfig=an;ue.AxiosHeaders=Qe;ue.formToJSON=e=>sx($.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=hx.getAdapter;ue.HttpStatusCode=Ud;ue.default=ue;const{Axios:CE,AxiosError:zE,CanceledError:EE,isCancel:$E,CancelToken:PE,VERSION:RE,all:IE,Cancel:TE,isAxiosError:NE,spread:_E,toFormData:ME,AxiosHeaders:DE,HttpStatusCode:OE,formToJSON:FE,getAdapter:AE,mergeConfig:LE}=ue,Oj="http://localhost:3002/api",Y=ue.create({baseURL:Oj,timeout:1e4,headers:{"Content-Type":"application/json"}});Y.interceptors.response.use(e=>e,e=>{var t;return console.error("API Error:",((t=e.response)==null?void 0:t.data)||e.message),Promise.reject(e)});const bx=async()=>(await Y.get("/billiards/services")).data,Kp=async e=>(await Y.post("/billiards/services",e)).data,Fj=async(e,t)=>(await Y.put(`/billiards/services/${e}`,t)).data,Aj=async e=>(await Y.delete(`/billiards/services/${e}`)).data,Xl=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1A1A1A;
`,ql=c.main`
  flex: 1;
`,Lj=c.section`
  background: #222222;
  color: white;
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) {
    padding: 3rem 0;
    min-height: 70vh;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
    min-height: 60vh;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: 50vh;
  }
`,Bj=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`,Uj=c.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,Wj=c.h1`
  font-size: 5rem;
  font-weight: 800;
  line-height: 0.9;
  margin: 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`,Hj=c.div`
  font-size: 1.6rem;
  line-height: 1.5;
  color: #f3f4f6;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`,Yj=c.a`
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 1.4rem 3rem;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-start;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    color: white;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding: 1.3rem 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 2.5rem;
    align-self: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 1.1rem 2.2rem;
  }
`,Vj=c.div`
  background: #1f2937;
  border-radius: 20px;
  height: 600px;
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.2rem;
  border: 2px solid #374151;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 1024px) {
    height: 500px;
    width: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
    justify-self: center;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    width: 300px;
  }
`,Kl=c.section`
  background: #1A1A1A;
  color: white;
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,Gj=c.h2`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 4rem 0;
  font-family: 'Arial', sans-serif;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
`,Xj=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin: 0 auto 3rem auto;
  }
`,Qp=c.div`
  background: #282828;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`,Jp=c.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #FFFFFF;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,qj=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`,Zp=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,eh=c.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,th=c.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFFFFF;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`,Kj=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  text-align: left;
`,rh=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,nh=c.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ia=c.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ih=c.a`
  background: #404040;
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  display: inline-block;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #505050;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.1rem 1.8rem;
  }
`,Qj=c.div`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`,Jj=c.div`
  color: #FFFFFF;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Arial', sans-serif;
`,Zj=c.div`
  color: #ef4444;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Arial', sans-serif;
`,eS=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,a]=C.useState(null);C.useEffect(()=>{s()},[]);const s=async()=>{try{n(!0),a(null);const d=await bx();t(d)}catch(d){a("Ошибка при загрузке данных о бильярде"),console.error("Ошибка загрузки:",d)}finally{n(!1)}},l=d=>d.type==="vip"?i.jsxs(Qp,{children:[i.jsx(Jp,{children:d.name}),i.jsxs(Kj,{children:[i.jsxs(rh,{children:[i.jsx(nh,{children:"VIP зал русского бильярда:"}),i.jsxs(ia,{children:["Понедельник - четверг - ",d.weekdayPrice,"₽"]}),i.jsxs(ia,{children:["Пятница, суббота, воскресенье и праздничные дни - ",d.weekendPrice,"₽"]})]}),i.jsxs(rh,{children:[i.jsx(nh,{children:"VIP зал пула:"}),i.jsxs(ia,{children:["Понедельник - четверг - ",d.weekdayPrice,"₽"]}),i.jsxs(ia,{children:["Пятница, суббота, воскресенье и праздничные дни - ",d.weekendPrice,"₽"]})]})]}),i.jsx(ih,{href:"https://frantsuz-club.ru/booking-new/",target:"_self",children:"Забронировать стол"})]},d.id):i.jsxs(Qp,{children:[i.jsx(Jp,{children:d.name}),i.jsxs(qj,{children:[i.jsxs(Zp,{children:[i.jsx(eh,{children:"Понедельник - четверг:"}),i.jsxs(th,{children:[d.weekdayPrice,"₽"]})]}),i.jsxs(Zp,{children:[i.jsx(eh,{children:"Пятница, суббота, воскресенье и праздничные дни:"}),i.jsxs(th,{children:[d.weekendPrice,"₽"]})]})]}),i.jsx(ih,{href:"https://frantsuz-club.ru/booking-new/",target:"_self",children:"Забронировать стол"})]},d.id);return r?i.jsx(Xl,{children:i.jsx(ql,{children:i.jsx(Kl,{children:i.jsx(Se,{children:i.jsx(Jj,{children:"Загрузка данных о бильярде..."})})})})}):o?i.jsx(Xl,{children:i.jsx(ql,{children:i.jsx(Kl,{children:i.jsx(Se,{children:i.jsx(Zj,{children:o})})})})}):i.jsx(Xl,{children:i.jsxs(ql,{children:[i.jsx(Lj,{children:i.jsx(Se,{children:i.jsxs(Bj,{children:[i.jsxs(Uj,{children:[i.jsx(Wj,{children:"Бильярдный клуб Француз"}),i.jsx(Hj,{children:"Проведите приятное время в компании друзей, наслаждаясь игрой в бильярд"}),i.jsx(Yj,{href:"https://frantsuz-club.ru/booking-new/",target:"_self",children:"Забронировать стол"})]}),i.jsx(Vj,{children:"Видео"})]})})}),i.jsx(Kl,{children:i.jsxs(Se,{children:[i.jsx(Gj,{children:"Цены на бильярд"}),i.jsx(Xj,{children:e.map(l)}),i.jsxs(Qj,{children:[i.jsx("div",{children:"Цены указаны за час игры, с поминутной тарификацией!"}),i.jsx("div",{children:"Бронирование стола - 100₽."}),i.jsx("div",{children:"Если в течении 20 мин после времени бронирования, заказчик не является, то стол может быть передан другому гостю."})]})]})})]})})},yx=async()=>(await Y.get("/karaoke/services")).data,tS=async(e,t)=>(await Y.put(`/karaoke/services/${e}`,t)).data,rS=async()=>(await Y.get("/karaoke/settings")).data,Ql=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1A1A1A;
`,Jl=c.main`
  flex: 1;
`,nS=c.section`
  background: #222222;
  color: white;
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) {
    padding: 3rem 0;
    min-height: 70vh;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
    min-height: 60vh;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: 50vh;
  }
`,iS=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`,oS=c.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,aS=c.h1`
  font-size: 5rem;
  font-weight: 800;
  line-height: 0.9;
  margin: 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`,sS=c.div`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #CCCCCC;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,lS=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,cS=c.div`
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #333333 0%, #555555 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  
  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
    font-size: 2.5rem;
  }
`,oa=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;c.div`
  text-align: center;
  margin-bottom: 3rem;
`;c.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin: 0;
`;const dS=c.section`
  margin-bottom: 4rem;
`,uS=c.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
`,fS=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,pS=c.section`
  margin-bottom: 4rem;
`,hS=c.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
`,mS=c.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,gS=c.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`,xS=c.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,oh=c.div`
  margin-bottom: 1rem;
`,ah=c.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
`,sh=c.div`
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
`,bS=c.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,yS=c.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-align: center;
`,vS=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Zl=c.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,ec=c.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
`,tc=c.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`,wS=c.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,jS=c.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
`,SS=c.p`
  color: #a0a0a0;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,kS=c.div`
  text-align: center;
  padding: 3rem;
  color: #a0a0a0;
  font-size: 1.1rem;
`,CS=c.div`
  text-align: center;
  padding: 3rem;
  color: #ff6b6b;
  font-size: 1.1rem;
`,zS=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(null),[o,a]=C.useState(!0),[s,l]=C.useState(null);C.useEffect(()=>{(async()=>{try{a(!0);const[h,m]=await Promise.all([yx(),rS()]);t(h),n(m)}catch(h){l("Ошибка при загрузке данных о караоке"),console.error("Error loading karaoke data:",h)}finally{a(!1)}})()},[]);const d=p=>{switch(p){case"deposit":return"💰";case"vip":return"👑";default:return"🎤"}},u=p=>{switch(p){case"deposit":return"Депозит";case"vip":return"VIP зал";default:return"Караоке"}};return o?i.jsx(Ql,{children:i.jsx(Jl,{children:i.jsx(oa,{children:i.jsx(kS,{children:"Загрузка информации о караоке..."})})})}):s?i.jsx(Ql,{children:i.jsx(Jl,{children:i.jsx(oa,{children:i.jsx(CS,{children:s})})})}):i.jsx(Ql,{children:i.jsxs(Jl,{children:[i.jsx(nS,{children:i.jsx(oa,{children:i.jsxs(iS,{children:[i.jsxs(oS,{children:[i.jsx(aS,{children:"Караоке"}),i.jsx(sS,{children:"Спойте свои любимые песни в уютной атмосфере. У нас есть все необходимое для незабываемого вечера: современное оборудование, огромная база песен и VIP залы для особых случаев."})]}),i.jsx(lS,{children:i.jsx(cS,{children:"🎤"})})]})})}),i.jsxs(oa,{children:[i.jsxs(dS,{children:[i.jsx(uS,{children:"Цены на услуги"}),i.jsx(fS,{children:e.map(p=>i.jsxs(hS,{children:[i.jsx(mS,{children:d(p.type)}),i.jsx(gS,{children:u(p.type)}),i.jsx(xS,{children:p.description}),i.jsxs(oh,{children:[i.jsx(ah,{children:"Воскресенье - четверг"}),i.jsxs(sh,{children:[p.weekdayPrice," ₽"]})]}),i.jsxs(oh,{children:[i.jsx(ah,{children:"Пятница, суббота, воскресенье и праздничные дни"}),i.jsxs(sh,{children:[p.weekendPrice," ₽"]})]})]},p.id))})]}),r&&i.jsxs(pS,{children:[i.jsx(yS,{children:"Настройки VIP зала"}),i.jsxs(bS,{children:[i.jsxs(vS,{children:[i.jsxs(Zl,{children:[i.jsx(ec,{children:"Максимальное количество гостей"}),i.jsxs(tc,{children:[r.maxVipGuests," человек"]})]}),i.jsxs(Zl,{children:[i.jsx(ec,{children:"Базовая цена VIP зала"}),i.jsxs(tc,{children:[r.baseVipPrice," ₽"]})]}),i.jsxs(Zl,{children:[i.jsx(ec,{children:"Доплата за гостя"}),i.jsxs(tc,{children:[r.additionalGuestPrice," ₽"]})]})]}),i.jsxs(wS,{children:[i.jsx(jS,{children:"Политика депозита"}),i.jsx(SS,{children:r.depositPolicy})]})]})]})]})]})})},ES=c.div`
  display: flex;
  flex-direction: column;
`,$S=c.main`
  flex: 1;
  padding: 2rem 0;
`,PS=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,RS=c.div`
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
`,IS=()=>i.jsx(ES,{children:i.jsx($S,{children:i.jsx(PS,{children:i.jsxs(RS,{children:[i.jsx("h1",{children:"Диско-бар"}),i.jsx("p",{children:"Танцуйте под лучшую музыку и наслаждайтесь напитками."})]})})})}),TS=c.div`
  display: flex;
  flex-direction: column;
`,NS=c.main`
  flex: 1;
  padding: 2rem 0;
`,_S=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,MS=c.div`
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
`,DS=()=>i.jsx(TS,{children:i.jsx(NS,{children:i.jsx(_S,{children:i.jsxs(MS,{children:[i.jsx("h1",{children:"Playstation"}),i.jsx("p",{children:"Играйте в лучшие игры на PlayStation."})]})})})}),OS=c.div`
  display: flex;
  flex-direction: column;
`,FS=c.main`
  flex: 1;
  padding: 2rem 0;
`,AS=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,LS=c.div`
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
`,BS=()=>i.jsx(OS,{children:i.jsx(FS,{children:i.jsx(AS,{children:i.jsxs(LS,{children:[i.jsx("h1",{children:"Лаунж зона"}),i.jsx("p",{children:"Уютная зона отдыха с комфортными диванами и расслабляющей атмосферой."})]})})})}),US=c.div`
  display: flex;
  flex-direction: column;
`,WS=c.main`
  flex: 1;
  padding: 2rem 0;
`,HS=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,YS=c.div`
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
`,VS=()=>i.jsx(US,{children:i.jsx(WS,{children:i.jsx(HS,{children:i.jsxs(YS,{children:[i.jsx("h1",{children:"Настольные игры"}),i.jsx("p",{children:"Большая коллекция настольных игр для компании друзей."})]})})})}),GS=c.div`
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
`,XS=c.div`
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`,qS=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,KS=c.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`,QS=c.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
`,JS=({zone:e,$isFullWidth:t})=>i.jsx(GS,{$isFullWidth:t,children:i.jsxs(XS,{children:[i.jsx(qS,{src:e.imageUrl,alt:e.name}),i.jsx(KS,{children:i.jsx(QS,{children:e.name})})]})}),ZS={},lh=e=>{let t;const r=new Set,n=(p,h)=>{const m=typeof p=="function"?p(t):p;if(!Object.is(m,t)){const b=t;t=h??(typeof m!="object"||m===null)?m:Object.assign({},t,m),r.forEach(y=>y(t,b))}},o=()=>t,d={setState:n,getState:o,getInitialState:()=>u,subscribe:p=>(r.add(p),()=>r.delete(p)),destroy:()=>{(ZS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},u=t=e(n,o,d);return d},ek=e=>e?lh(e):lh;var vx={exports:{}},wx={},jx={exports:{}},Sx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=C;function tk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rk=typeof Object.is=="function"?Object.is:tk,nk=ui.useState,ik=ui.useEffect,ok=ui.useLayoutEffect,ak=ui.useDebugValue;function sk(e,t){var r=t(),n=nk({inst:{value:r,getSnapshot:t}}),o=n[0].inst,a=n[1];return ok(function(){o.value=r,o.getSnapshot=t,rc(o)&&a({inst:o})},[e,r,t]),ik(function(){return rc(o)&&a({inst:o}),e(function(){rc(o)&&a({inst:o})})},[e]),ak(r),r}function rc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rk(e,r)}catch{return!0}}function lk(e,t){return t()}var ck=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?lk:sk;Sx.useSyncExternalStore=ui.useSyncExternalStore!==void 0?ui.useSyncExternalStore:ck;jx.exports=Sx;var dk=jx.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=C,uk=dk;function fk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pk=typeof Object.is=="function"?Object.is:fk,hk=uk.useSyncExternalStore,mk=sl.useRef,gk=sl.useEffect,xk=sl.useMemo,bk=sl.useDebugValue;wx.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var a=mk(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=xk(function(){function d(b){if(!u){if(u=!0,p=b,b=n(b),o!==void 0&&s.hasValue){var y=s.value;if(o(y,b))return h=y}return h=b}if(y=h,pk(p,b))return y;var v=n(b);return o!==void 0&&o(y,v)?(p=b,y):(p=b,h=v)}var u=!1,p,h,m=r===void 0?null:r;return[function(){return d(t())},m===null?void 0:function(){return d(m())}]},[t,r,n,o]);var l=hk(e,a[0],a[1]);return gk(function(){s.hasValue=!0,s.value=l},[l]),bk(l),l};vx.exports=wx;var yk=vx.exports;const vk=Hd(yk),kx={},{useDebugValue:wk}=Ne,{useSyncExternalStoreWithSelector:jk}=vk;let ch=!1;const Sk=e=>e;function kk(e,t=Sk,r){(kx?"production":void 0)!=="production"&&r&&!ch&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ch=!0);const n=jk(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return wk(n),n}const dh=e=>{(kx?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?ek(e):e,r=(n,o)=>kk(t,n,o);return Object.assign(r,t),r},Ck=e=>e?dh(e):dh,zk=Ck(e=>({date:null,zoneId:null,tableId:null,time:null,setDate:t=>e({date:t}),setZoneId:t=>e({zoneId:t}),setTableId:t=>e({tableId:t}),setTime:t=>e({time:t})})),Ek=c.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`,$k=c.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,aa=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sa=c.label`
  color: #fff;
  font-weight: 500;
`,uh=c.input`
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
`;c.select`
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
`;const Pk=c.button`
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
`,Rk=c.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Ik=c.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Tk=({selectedZone:e,selectedTable:t})=>{const{date:r,time:n,setDate:o,setTime:a}=zk(),[s,l]=Ne.useState([]),[d,u]=Ne.useState(!1),p=h=>{h.preventDefault(),l([]),u(!1);const m=[];if(r||m.push("Выберите дату"),n||m.push("Выберите время"),e||m.push("Зона не выбрана"),m.length>0){l(m);return}const b={date:r,time:n,zoneId:e==null?void 0:e.id,tableId:t==null?void 0:t.id};console.log("Отправляем на сервер:",b),u(!0),o(null),a(null)};return i.jsx(un,{children:i.jsxs(Ek,{children:[i.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",color:"#ffd700"},children:"Бронирование"}),i.jsxs($k,{onSubmit:p,children:[e&&i.jsxs(aa,{children:[i.jsx(sa,{children:"Выбранная зона"}),i.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:e.name})]}),t&&i.jsxs(aa,{children:[i.jsx(sa,{children:"Выбранный стол"}),i.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:t.label})]}),i.jsxs(aa,{children:[i.jsx(sa,{children:"Дата"}),i.jsx(uh,{type:"date",value:r||"",onChange:h=>o(h.target.value),min:new Date().toISOString().split("T")[0]})]}),i.jsxs(aa,{children:[i.jsx(sa,{children:"Время"}),i.jsx(uh,{type:"time",value:n||"",onChange:h=>a(h.target.value)})]}),s.length>0&&i.jsx("div",{children:s.map((h,m)=>i.jsx(Rk,{children:h},m))}),d&&i.jsx(Ik,{children:"Бронирование отправлено!"}),i.jsx(Pk,{type:"submit",disabled:!r||!n||!e,children:"Подтвердить бронирование"})]})]})})};c.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 16px;
  color: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
`;c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;c.h3`
  color: #8b5cf6;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #8b5cf6;
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;c.label`
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
`;c.input`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`;c.select`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }
`;c.textarea`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`;c.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;c.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`;c.div`
  color: #10b981;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.3);
`;c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;c.div`
  padding: 1rem;
  background: ${e=>e.isSelected?"linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)":e.isAvailable?"linear-gradient(135deg, #2a2a2a 0%, #333 100%)":"linear-gradient(135deg, #444 0%, #555 100%)"};
  border: 2px solid ${e=>e.isSelected?"#8b5cf6":e.isAvailable?"#333":"#666"};
  border-radius: 8px;
  text-align: center;
  cursor: ${e=>e.isAvailable?"pointer":"not-allowed"};
  transition: all 0.3s ease;
  opacity: ${e=>e.isAvailable?1:.6};

  &:hover {
    transform: ${e=>e.isAvailable?"translateY(-2px)":"none"};
    box-shadow: ${e=>e.isAvailable?"0 5px 15px rgba(0, 0, 0, 0.3)":"none"};
  }
`;c.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;c.div`
  font-size: 0.85rem;
  opacity: 0.8;
`;c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #8b5cf6;
  font-size: 1.1rem;
`;c.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
  }
`;var ll={exports:{}},Cx={},zx={exports:{}},Nk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_k=Nk,Mk=_k;function Ex(){}function $x(){}$x.resetWarningCache=Ex;var Dk=function(){function e(n,o,a,s,l,d){if(d!==Mk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$x,resetWarningCache:Ex};return r.PropTypes=r,r};zx.exports=Dk();var Px=zx.exports;function Rx(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Rx(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function fh(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Rx(e))&&(n&&(n+=" "),n+=t);return n}const Ok=Object.freeze(Object.defineProperty({__proto__:null,clsx:fh,default:fh},Symbol.toStringTag,{value:"Module"})),Fk=Yx(Ok);var ce={},Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.dontSetMe=Wk;Lt.findInArray=Ak;Lt.int=Uk;Lt.isFunction=Lk;Lt.isNum=Bk;function Ak(e,t){for(let r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]}function Lk(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Bk(e){return typeof e=="number"&&!isNaN(e)}function Uk(e){return parseInt(e,10)}function Wk(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))}var fn={};Object.defineProperty(fn,"__esModule",{value:!0});fn.browserPrefixToKey=Tx;fn.browserPrefixToStyle=Hk;fn.default=void 0;fn.getPrefix=Ix;const nc=["Moz","Webkit","O","ms"];function Ix(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const r=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!r||t in r)return"";for(let n=0;n<nc.length;n++)if(Tx(t,nc[n])in r)return nc[n];return""}function Tx(e,t){return t?"".concat(t).concat(Yk(e)):e}function Hk(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Yk(e){let t="",r=!0;for(let n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):e[n]==="-"?r=!0:t+=e[n];return t}fn.default=Ix();Object.defineProperty(ce,"__esModule",{value:!0});ce.addClassName=Mx;ce.addEvent=Xk;ce.addUserSelectStyles=o6;ce.createCSSTransform=t6;ce.createSVGTransform=r6;ce.getTouch=n6;ce.getTouchIdentifier=i6;ce.getTranslation=Qu;ce.innerHeight=Jk;ce.innerWidth=Zk;ce.matchesSelector=_x;ce.matchesSelectorAndParentsTo=Gk;ce.offsetXYFromParent=e6;ce.outerHeight=Kk;ce.outerWidth=Qk;ce.removeClassName=Dx;ce.removeEvent=qk;ce.removeUserSelectStyles=a6;var it=Lt,ph=Vk(fn);function Nx(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(Nx=function(n){return n?r:t})(e)}function Vk(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=Nx(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}let la="";function _x(e,t){return la||(la=(0,it.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(r){return(0,it.isFunction)(e[r])})),(0,it.isFunction)(e[la])?e[la](t):!1}function Gk(e,t,r){let n=e;do{if(_x(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1}function Xk(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r}function qk(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null}function Kk(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,it.int)(r.borderTopWidth),t+=(0,it.int)(r.borderBottomWidth),t}function Qk(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,it.int)(r.borderLeftWidth),t+=(0,it.int)(r.borderRightWidth),t}function Jk(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,it.int)(r.paddingTop),t-=(0,it.int)(r.paddingBottom),t}function Zk(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,it.int)(r.paddingLeft),t-=(0,it.int)(r.paddingRight),t}function e6(e,t,r){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),a=(e.clientX+t.scrollLeft-o.left)/r,s=(e.clientY+t.scrollTop-o.top)/r;return{x:a,y:s}}function t6(e,t){const r=Qu(e,t,"px");return{[(0,ph.browserPrefixToKey)("transform",ph.default)]:r}}function r6(e,t){return Qu(e,t,"")}function Qu(e,t,r){let{x:n,y:o}=e,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+r),l="".concat(typeof t.y=="string"?t.y:t.y+r);a="translate(".concat(s,", ").concat(l,")")+a}return a}function n6(e,t){return e.targetTouches&&(0,it.findInArray)(e.targetTouches,r=>t===r.identifier)||e.changedTouches&&(0,it.findInArray)(e.changedTouches,r=>t===r.identifier)}function i6(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function o6(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Mx(e.body,"react-draggable-transparent-selection")}function a6(e){if(e)try{if(e.body&&Dx(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Mx(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Dx(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.canDragX=c6;Bt.canDragY=d6;Bt.createCoreData=f6;Bt.createDraggableData=p6;Bt.getBoundPosition=s6;Bt.getControlPosition=u6;Bt.snapToGrid=l6;var Ze=Lt,Yn=ce;function s6(e,t,r){if(!e.props.bounds)return[t,r];let{bounds:n}=e.props;n=typeof n=="string"?n:h6(n);const o=Ju(e);if(typeof n=="string"){const{ownerDocument:a}=o,s=a.defaultView;let l;if(n==="parent"?l=o.parentNode:l=a.querySelector(n),!(l instanceof s.HTMLElement))throw new Error('Bounds selector "'+n+'" could not find an element.');const d=l,u=s.getComputedStyle(o),p=s.getComputedStyle(d);n={left:-o.offsetLeft+(0,Ze.int)(p.paddingLeft)+(0,Ze.int)(u.marginLeft),top:-o.offsetTop+(0,Ze.int)(p.paddingTop)+(0,Ze.int)(u.marginTop),right:(0,Yn.innerWidth)(d)-(0,Yn.outerWidth)(o)-o.offsetLeft+(0,Ze.int)(p.paddingRight)-(0,Ze.int)(u.marginRight),bottom:(0,Yn.innerHeight)(d)-(0,Yn.outerHeight)(o)-o.offsetTop+(0,Ze.int)(p.paddingBottom)-(0,Ze.int)(u.marginBottom)}}return(0,Ze.isNum)(n.right)&&(t=Math.min(t,n.right)),(0,Ze.isNum)(n.bottom)&&(r=Math.min(r,n.bottom)),(0,Ze.isNum)(n.left)&&(t=Math.max(t,n.left)),(0,Ze.isNum)(n.top)&&(r=Math.max(r,n.top)),[t,r]}function l6(e,t,r){const n=Math.round(t/e[0])*e[0],o=Math.round(r/e[1])*e[1];return[n,o]}function c6(e){return e.props.axis==="both"||e.props.axis==="x"}function d6(e){return e.props.axis==="both"||e.props.axis==="y"}function u6(e,t,r){const n=typeof t=="number"?(0,Yn.getTouch)(e,t):null;if(typeof t=="number"&&!n)return null;const o=Ju(r),a=r.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,Yn.offsetXYFromParent)(n||e,a,r.props.scale)}function f6(e,t,r){const n=!(0,Ze.isNum)(e.lastX),o=Ju(e);return n?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:o,deltaX:t-e.lastX,deltaY:r-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:r}}function p6(e,t){const r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}}function h6(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Ju(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var cl={},dl={};Object.defineProperty(dl,"__esModule",{value:!0});dl.default=m6;function m6(){}Object.defineProperty(cl,"__esModule",{value:!0});cl.default=void 0;var ic=x6(C),Ue=Zu(Px),g6=Zu($o),Re=ce,lr=Bt,oc=Lt,Ri=Zu(dl);function Zu(e){return e&&e.__esModule?e:{default:e}}function Ox(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(Ox=function(n){return n?r:t})(e)}function x6(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=Ox(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function De(e,t,r){return t=b6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b6(e){var t=y6(e,"string");return typeof t=="symbol"?t:String(t)}function y6(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const vt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let cr=vt.mouse,ul=class extends ic.Component{constructor(){super(...arguments),De(this,"dragging",!1),De(this,"lastX",NaN),De(this,"lastY",NaN),De(this,"touchIdentifier",null),De(this,"mounted",!1),De(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const r=this.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=r;if(this.props.disabled||!(t.target instanceof n.defaultView.Node)||this.props.handle&&!(0,Re.matchesSelectorAndParentsTo)(t.target,this.props.handle,r)||this.props.cancel&&(0,Re.matchesSelectorAndParentsTo)(t.target,this.props.cancel,r))return;t.type==="touchstart"&&t.preventDefault();const o=(0,Re.getTouchIdentifier)(t);this.touchIdentifier=o;const a=(0,lr.getControlPosition)(t,o,this);if(a==null)return;const{x:s,y:l}=a,d=(0,lr.createCoreData)(this,s,l);(0,Ri.default)("DraggableCore: handleDragStart: %j",d),(0,Ri.default)("calling",this.props.onStart),!(this.props.onStart(t,d)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,Re.addUserSelectStyles)(n),this.dragging=!0,this.lastX=s,this.lastY=l,(0,Re.addEvent)(n,cr.move,this.handleDrag),(0,Re.addEvent)(n,cr.stop,this.handleDragStop))}),De(this,"handleDrag",t=>{const r=(0,lr.getControlPosition)(t,this.touchIdentifier,this);if(r==null)return;let{x:n,y:o}=r;if(Array.isArray(this.props.grid)){let l=n-this.lastX,d=o-this.lastY;if([l,d]=(0,lr.snapToGrid)(this.props.grid,l,d),!l&&!d)return;n=this.lastX+l,o=this.lastY+d}const a=(0,lr.createCoreData)(this,n,o);if((0,Ri.default)("DraggableCore: handleDrag: %j",a),this.props.onDrag(t,a)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(d)}return}this.lastX=n,this.lastY=o}),De(this,"handleDragStop",t=>{if(!this.dragging)return;const r=(0,lr.getControlPosition)(t,this.touchIdentifier,this);if(r==null)return;let{x:n,y:o}=r;if(Array.isArray(this.props.grid)){let d=n-this.lastX||0,u=o-this.lastY||0;[d,u]=(0,lr.snapToGrid)(this.props.grid,d,u),n=this.lastX+d,o=this.lastY+u}const a=(0,lr.createCoreData)(this,n,o);if(this.props.onStop(t,a)===!1||this.mounted===!1)return!1;const l=this.findDOMNode();l&&this.props.enableUserSelectHack&&(0,Re.removeUserSelectStyles)(l.ownerDocument),(0,Ri.default)("DraggableCore: handleDragStop: %j",a),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,l&&((0,Ri.default)("DraggableCore: Removing handlers"),(0,Re.removeEvent)(l.ownerDocument,cr.move,this.handleDrag),(0,Re.removeEvent)(l.ownerDocument,cr.stop,this.handleDragStop))}),De(this,"onMouseDown",t=>(cr=vt.mouse,this.handleDragStart(t))),De(this,"onMouseUp",t=>(cr=vt.mouse,this.handleDragStop(t))),De(this,"onTouchStart",t=>(cr=vt.touch,this.handleDragStart(t))),De(this,"onTouchEnd",t=>(cr=vt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,Re.addEvent)(t,vt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:r}=t;(0,Re.removeEvent)(r,vt.mouse.move,this.handleDrag),(0,Re.removeEvent)(r,vt.touch.move,this.handleDrag),(0,Re.removeEvent)(r,vt.mouse.stop,this.handleDragStop),(0,Re.removeEvent)(r,vt.touch.stop,this.handleDragStop),(0,Re.removeEvent)(t,vt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Re.removeUserSelectStyles)(r)}}findDOMNode(){var t,r;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(r=this.props)===null||r===void 0||(r=r.nodeRef)===null||r===void 0?void 0:r.current:g6.default.findDOMNode(this)}render(){return ic.cloneElement(ic.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};cl.default=ul;De(ul,"displayName","DraggableCore");De(ul,"propTypes",{allowAnyClick:Ue.default.bool,children:Ue.default.node.isRequired,disabled:Ue.default.bool,enableUserSelectHack:Ue.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Ue.default.arrayOf(Ue.default.number),handle:Ue.default.string,cancel:Ue.default.string,nodeRef:Ue.default.object,onStart:Ue.default.func,onDrag:Ue.default.func,onStop:Ue.default.func,onMouseDown:Ue.default.func,scale:Ue.default.number,className:oc.dontSetMe,style:oc.dontSetMe,transform:oc.dontSetMe});De(ul,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),e.default=void 0;var t=m(C),r=p(Px),n=p($o),o=p(Fk),a=ce,s=Bt,l=Lt,d=p(cl),u=p(dl);function p(f){return f&&f.__esModule?f:{default:f}}function h(f){if(typeof WeakMap!="function")return null;var g=new WeakMap,S=new WeakMap;return(h=function(j){return j?S:g})(f)}function m(f,g){if(f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var S=h(g);if(S&&S.has(f))return S.get(f);var j={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var z in f)if(z!=="default"&&Object.prototype.hasOwnProperty.call(f,z)){var R=k?Object.getOwnPropertyDescriptor(f,z):null;R&&(R.get||R.set)?Object.defineProperty(j,z,R):j[z]=f[z]}return j.default=f,S&&S.set(f,j),j}function b(){return b=Object.assign?Object.assign.bind():function(f){for(var g=1;g<arguments.length;g++){var S=arguments[g];for(var j in S)Object.prototype.hasOwnProperty.call(S,j)&&(f[j]=S[j])}return f},b.apply(this,arguments)}function y(f,g,S){return g=v(g),g in f?Object.defineProperty(f,g,{value:S,enumerable:!0,configurable:!0,writable:!0}):f[g]=S,f}function v(f){var g=w(f,"string");return typeof g=="symbol"?g:String(g)}function w(f,g){if(typeof f!="object"||f===null)return f;var S=f[Symbol.toPrimitive];if(S!==void 0){var j=S.call(f,g);if(typeof j!="object")return j;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(f)}class x extends t.Component{static getDerivedStateFromProps(g,S){let{position:j}=g,{prevPropsPosition:k}=S;return j&&(!k||j.x!==k.x||j.y!==k.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:j,prevPropsPosition:k}),{x:j.x,y:j.y,prevPropsPosition:{...j}}):null}constructor(g){super(g),y(this,"onDragStart",(S,j)=>{if((0,u.default)("Draggable: onDragStart: %j",j),this.props.onStart(S,(0,s.createDraggableData)(this,j))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),y(this,"onDrag",(S,j)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",j);const k=(0,s.createDraggableData)(this,j),z={x:k.x,y:k.y,slackX:0,slackY:0};if(this.props.bounds){const{x:E,y:P}=z;z.x+=this.state.slackX,z.y+=this.state.slackY;const[N,D]=(0,s.getBoundPosition)(this,z.x,z.y);z.x=N,z.y=D,z.slackX=this.state.slackX+(E-z.x),z.slackY=this.state.slackY+(P-z.y),k.x=z.x,k.y=z.y,k.deltaX=z.x-this.state.x,k.deltaY=z.y-this.state.y}if(this.props.onDrag(S,k)===!1)return!1;this.setState(z)}),y(this,"onDragStop",(S,j)=>{if(!this.state.dragging||this.props.onStop(S,(0,s.createDraggableData)(this,j))===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",j);const z={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:E,y:P}=this.props.position;z.x=E,z.y=P}this.setState(z)}),this.state={dragging:!1,dragged:!1,x:g.position?g.position.x:g.defaultPosition.x,y:g.position?g.position.y:g.defaultPosition.y,prevPropsPosition:{...g.position},slackX:0,slackY:0,isElementSVG:!1},g.position&&!(g.onDrag||g.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var g,S;return(g=(S=this.props)===null||S===void 0||(S=S.nodeRef)===null||S===void 0?void 0:S.current)!==null&&g!==void 0?g:n.default.findDOMNode(this)}render(){const{axis:g,bounds:S,children:j,defaultPosition:k,defaultClassName:z,defaultClassNameDragging:R,defaultClassNameDragged:E,position:P,positionOffset:N,scale:D,...A}=this.props;let J={},Be=null;const ve=!!!P||this.state.dragging,T=P||k,M={x:(0,s.canDragX)(this)&&ve?this.state.x:T.x,y:(0,s.canDragY)(this)&&ve?this.state.y:T.y};this.state.isElementSVG?Be=(0,a.createSVGTransform)(M,N):J=(0,a.createCSSTransform)(M,N);const O=(0,o.default)(j.props.className||"",z,{[R]:this.state.dragging,[E]:this.state.dragged});return t.createElement(d.default,b({},A,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(j),{className:O,style:{...j.props.style,...J},transform:Be}))}}e.default=x,y(x,"displayName","Draggable"),y(x,"propTypes",{...d.default.propTypes,axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),y(x,"defaultProps",{...d.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Cx);const{default:Fx,DraggableCore:v6}=Cx;ll.exports=Fx;ll.exports.default=Fx;ll.exports.DraggableCore=v6;var w6=ll.exports;const j6=Hd(w6);var fe=function(){return fe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},fe.apply(this,arguments)},hh={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},mh={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},ca={width:"20px",height:"20px",position:"absolute",zIndex:1},S6={top:fe(fe({},hh),{top:"-5px"}),right:fe(fe({},mh),{left:void 0,right:"-5px"}),bottom:fe(fe({},hh),{top:void 0,bottom:"-5px"}),left:fe(fe({},mh),{left:"-5px"}),topRight:fe(fe({},ca),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:fe(fe({},ca),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:fe(fe({},ca),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:fe(fe({},ca),{left:"-10px",top:"-10px",cursor:"nw-resize"})},k6=C.memo(function(e){var t=e.onResizeStart,r=e.direction,n=e.children,o=e.replaceStyles,a=e.className,s=C.useCallback(function(u){t(u,r)},[t,r]),l=C.useCallback(function(u){t(u,r)},[t,r]),d=C.useMemo(function(){return fe(fe({position:"absolute",userSelect:"none"},S6[r]),o??{})},[o,r]);return i.jsx("div",{className:a||void 0,style:d,onMouseDown:s,onTouchStart:l,children:n})}),C6=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Mt=function(){return Mt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mt.apply(this,arguments)},z6={width:"auto",height:"auto"},da=function(e,t,r){return Math.max(Math.min(e,r),t)},gh=function(e,t,r){var n=Math.round(e/t);return n*t+r*(n-1)},mn=function(e,t){return new RegExp(e,"i").test(t)},ua=function(e){return!!(e.touches&&e.touches.length)},E6=function(e){return!!((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},xh=function(e,t,r){r===void 0&&(r=0);var n=t.reduce(function(a,s,l){return Math.abs(s-e)<Math.abs(t[a]-e)?l:a},0),o=Math.abs(t[n]-e);return r===0||o<r?t[n]:e},ac=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:"".concat(e,"px")},fa=function(e,t,r,n){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var o=Number(e.replace("%",""))/100;return t*o}if(e.endsWith("vw")){var o=Number(e.replace("vw",""))/100;return r*o}if(e.endsWith("vh")){var o=Number(e.replace("vh",""))/100;return n*o}}return e},$6=function(e,t,r,n,o,a,s){return n=fa(n,e.width,t,r),o=fa(o,e.height,t,r),a=fa(a,e.width,t,r),s=fa(s,e.height,t,r),{maxWidth:typeof n>"u"?void 0:Number(n),maxHeight:typeof o>"u"?void 0:Number(o),minWidth:typeof a>"u"?void 0:Number(a),minHeight:typeof s>"u"?void 0:Number(s)}},P6=function(e){return Array.isArray(e)?e:[e,e]},R6=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],bh="__resizable_base__",I6=function(e){C6(t,e);function t(r){var n,o,a,s,l=e.call(this,r)||this;return l.ratio=1,l.resizable=null,l.parentLeft=0,l.parentTop=0,l.resizableLeft=0,l.resizableRight=0,l.resizableTop=0,l.resizableBottom=0,l.targetLeft=0,l.targetTop=0,l.delta={width:0,height:0},l.appendBase=function(){if(!l.resizable||!l.window)return null;var d=l.parentNode;if(!d)return null;var u=l.window.document.createElement("div");return u.style.width="100%",u.style.height="100%",u.style.position="absolute",u.style.transform="scale(0, 0)",u.style.left="0",u.style.flex="0 0 100%",u.classList?u.classList.add(bh):u.className+=bh,d.appendChild(u),u},l.removeBase=function(d){var u=l.parentNode;u&&u.removeChild(d)},l.state={isResizing:!1,width:(o=(n=l.propsSize)===null||n===void 0?void 0:n.width)!==null&&o!==void 0?o:"auto",height:(s=(a=l.propsSize)===null||a===void 0?void 0:a.height)!==null&&s!==void 0?s:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},l.onResizeStart=l.onResizeStart.bind(l),l.onMouseMove=l.onMouseMove.bind(l),l.onMouseUp=l.onMouseUp.bind(l),l}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||z6},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var r=0,n=0;if(this.resizable&&this.window){var o=this.resizable.offsetWidth,a=this.resizable.offsetHeight,s=this.resizable.style.position;s!=="relative"&&(this.resizable.style.position="relative"),r=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:o,n=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:a,this.resizable.style.position=s}return{width:r,height:n}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var r=this,n=this.props.size,o=function(l){var d;if(typeof r.state[l]>"u"||r.state[l]==="auto")return"auto";if(r.propsSize&&r.propsSize[l]&&(!((d=r.propsSize[l])===null||d===void 0)&&d.toString().endsWith("%"))){if(r.state[l].toString().endsWith("%"))return r.state[l].toString();var u=r.getParentSize(),p=Number(r.state[l].toString().replace("px","")),h=p/u[l]*100;return"".concat(h,"%")}return ac(r.state[l])},a=n&&typeof n.width<"u"&&!this.state.isResizing?ac(n.width):o("width"),s=n&&typeof n.height<"u"&&!this.state.isResizing?ac(n.height):o("height");return{width:a,height:s}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var r=this.appendBase();if(!r)return{width:0,height:0};var n=!1,o=this.parentNode.style.flexWrap;o!=="wrap"&&(n=!0,this.parentNode.style.flexWrap="wrap"),r.style.position="relative",r.style.minWidth="100%",r.style.minHeight="100%";var a={width:r.offsetWidth,height:r.offsetHeight};return n&&(this.parentNode.style.flexWrap=o),this.removeBase(r),a},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var r=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:r.flexBasis!=="auto"?r.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(r,n){var o=this.propsSize&&this.propsSize[n];return this.state[n]==="auto"&&this.state.original[n]===r&&(typeof o>"u"||o==="auto")?"auto":r},t.prototype.calculateNewMaxFromBoundary=function(r,n){var o=this.props.boundsByDirection,a=this.state.direction,s=o&&mn("left",a),l=o&&mn("top",a),d,u;if(this.props.bounds==="parent"){var p=this.parentNode;p&&(d=s?this.resizableRight-this.parentLeft:p.offsetWidth+(this.parentLeft-this.resizableLeft),u=l?this.resizableBottom-this.parentTop:p.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(d=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,u=l?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(d=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),u=l?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return d&&Number.isFinite(d)&&(r=r&&r<d?r:d),u&&Number.isFinite(u)&&(n=n&&n<u?n:u),{maxWidth:r,maxHeight:n}},t.prototype.calculateNewSizeFromDirection=function(r,n){var o=this.props.scale||1,a=P6(this.props.resizeRatio||1),s=a[0],l=a[1],d=this.state,u=d.direction,p=d.original,h=this.props,m=h.lockAspectRatio,b=h.lockAspectRatioExtraHeight,y=h.lockAspectRatioExtraWidth,v=p.width,w=p.height,x=b||0,f=y||0;return mn("right",u)&&(v=p.width+(r-p.x)*s/o,m&&(w=(v-f)/this.ratio+x)),mn("left",u)&&(v=p.width-(r-p.x)*s/o,m&&(w=(v-f)/this.ratio+x)),mn("bottom",u)&&(w=p.height+(n-p.y)*l/o,m&&(v=(w-x)*this.ratio+f)),mn("top",u)&&(w=p.height-(n-p.y)*l/o,m&&(v=(w-x)*this.ratio+f)),{newWidth:v,newHeight:w}},t.prototype.calculateNewSizeFromAspectRatio=function(r,n,o,a){var s=this.props,l=s.lockAspectRatio,d=s.lockAspectRatioExtraHeight,u=s.lockAspectRatioExtraWidth,p=typeof a.width>"u"?10:a.width,h=typeof o.width>"u"||o.width<0?r:o.width,m=typeof a.height>"u"?10:a.height,b=typeof o.height>"u"||o.height<0?n:o.height,y=d||0,v=u||0;if(l){var w=(m-y)*this.ratio+v,x=(b-y)*this.ratio+v,f=(p-v)/this.ratio+y,g=(h-v)/this.ratio+y,S=Math.max(p,w),j=Math.min(h,x),k=Math.max(m,f),z=Math.min(b,g);r=da(r,S,j),n=da(n,k,z)}else r=da(r,p,h),n=da(n,m,b);return{newWidth:r,newHeight:n}},t.prototype.setBoundingClientRect=function(){var r=1/(this.props.scale||1);if(this.props.bounds==="parent"){var n=this.parentNode;if(n){var o=n.getBoundingClientRect();this.parentLeft=o.left*r,this.parentTop=o.top*r}}if(this.props.bounds&&typeof this.props.bounds!="string"){var a=this.props.bounds.getBoundingClientRect();this.targetLeft=a.left*r,this.targetTop=a.top*r}if(this.resizable){var s=this.resizable.getBoundingClientRect(),l=s.left,d=s.top,u=s.right,p=s.bottom;this.resizableLeft=l*r,this.resizableRight=u*r,this.resizableTop=d*r,this.resizableBottom=p*r}},t.prototype.onResizeStart=function(r,n){if(!(!this.resizable||!this.window)){var o=0,a=0;if(r.nativeEvent&&E6(r.nativeEvent)?(o=r.nativeEvent.clientX,a=r.nativeEvent.clientY):r.nativeEvent&&ua(r.nativeEvent)&&(o=r.nativeEvent.touches[0].clientX,a=r.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var s=this.props.onResizeStart(r,n,this.resizable);if(s===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var l,d=this.window.getComputedStyle(this.resizable);if(d.flexBasis!=="auto"){var u=this.parentNode;if(u){var p=this.window.getComputedStyle(u).flexDirection;this.flexDir=p.startsWith("row")?"row":"column",l=d.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:o,y:a,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:Mt(Mt({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(r.target).cursor||"auto"}),direction:n,flexBasis:l};this.setState(h)}},t.prototype.onMouseMove=function(r){var n=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&ua(r))try{r.preventDefault(),r.stopPropagation()}catch{}var o=this.props,a=o.maxWidth,s=o.maxHeight,l=o.minWidth,d=o.minHeight,u=ua(r)?r.touches[0].clientX:r.clientX,p=ua(r)?r.touches[0].clientY:r.clientY,h=this.state,m=h.direction,b=h.original,y=h.width,v=h.height,w=this.getParentSize(),x=$6(w,this.window.innerWidth,this.window.innerHeight,a,s,l,d);a=x.maxWidth,s=x.maxHeight,l=x.minWidth,d=x.minHeight;var f=this.calculateNewSizeFromDirection(u,p),g=f.newHeight,S=f.newWidth,j=this.calculateNewMaxFromBoundary(a,s);this.props.snap&&this.props.snap.x&&(S=xh(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=xh(g,this.props.snap.y,this.props.snapGap));var k=this.calculateNewSizeFromAspectRatio(S,g,{width:j.maxWidth,height:j.maxHeight},{width:l,height:d});if(S=k.newWidth,g=k.newHeight,this.props.grid){var z=gh(S,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),R=gh(g,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),E=this.props.snapGap||0,P=E===0||Math.abs(z-S)<=E?z:S,N=E===0||Math.abs(R-g)<=E?R:g;S=P,g=N}var D={width:S-b.width,height:g-b.height};if(this.delta=D,y&&typeof y=="string"){if(y.endsWith("%")){var A=S/w.width*100;S="".concat(A,"%")}else if(y.endsWith("vw")){var J=S/this.window.innerWidth*100;S="".concat(J,"vw")}else if(y.endsWith("vh")){var Be=S/this.window.innerHeight*100;S="".concat(Be,"vh")}}if(v&&typeof v=="string"){if(v.endsWith("%")){var A=g/w.height*100;g="".concat(A,"%")}else if(v.endsWith("vw")){var J=g/this.window.innerWidth*100;g="".concat(J,"vw")}else if(v.endsWith("vh")){var Be=g/this.window.innerHeight*100;g="".concat(Be,"vh")}}var ne={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(g,"height")};this.flexDir==="row"?ne.flexBasis=ne.width:this.flexDir==="column"&&(ne.flexBasis=ne.height);var ve=this.state.width!==ne.width,T=this.state.height!==ne.height,M=this.state.flexBasis!==ne.flexBasis,O=ve||T||M;O&&$o.flushSync(function(){n.setState(ne)}),this.props.onResize&&O&&this.props.onResize(r,m,this.resizable,D)}},t.prototype.onMouseUp=function(r){var n,o,a=this.state,s=a.isResizing,l=a.direction;a.original,!(!s||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(r,l,this.resizable,this.delta),this.props.size&&this.setState({width:(n=this.props.size.width)!==null&&n!==void 0?n:"auto",height:(o=this.props.size.height)!==null&&o!==void 0?o:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:Mt(Mt({},this.state.backgroundStyle),{cursor:"auto"})}))},t.prototype.updateSize=function(r){var n,o;this.setState({width:(n=r.width)!==null&&n!==void 0?n:"auto",height:(o=r.height)!==null&&o!==void 0?o:"auto"})},t.prototype.renderResizer=function(){var r=this,n=this.props,o=n.enable,a=n.handleStyles,s=n.handleClasses,l=n.handleWrapperStyle,d=n.handleWrapperClass,u=n.handleComponent;if(!o)return null;var p=Object.keys(o).map(function(h){return o[h]!==!1?i.jsx(k6,{direction:h,onResizeStart:r.onResizeStart,replaceStyles:a&&a[h],className:s&&s[h],children:u&&u[h]?u[h]:null},h):null});return i.jsx("div",{className:d,style:l,children:p})},t.prototype.render=function(){var r=this,n=Object.keys(this.props).reduce(function(s,l){return R6.indexOf(l)!==-1||(s[l]=r.props[l]),s},{}),o=Mt(Mt(Mt({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var a=this.props.as||"div";return i.jsxs(a,Mt({style:o,className:this.props.className},n,{ref:function(s){s&&(r.resizable=s)},children:[this.state.isResizing&&i.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(C.PureComponent);/*! *****************************************************************************
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
***************************************************************************** */var Wd=function(e,t){return Wd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},Wd(e,t)};function T6(e,t){Wd(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var xe=function(){return xe=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},xe.apply(this,arguments)};function N6(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}var _6={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},M6=function(e){return{bottom:e,bottomLeft:e,bottomRight:e,left:e,right:e,top:e,topLeft:e,topRight:e}},D6=function(e){T6(t,e);function t(r){var n=e.call(this,r)||this;return n.resizingPosition={x:0,y:0},n.offsetFromParent={left:0,top:0},n.resizableElement={current:null},n.originalPosition={x:0,y:0},n.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:r.maxWidth,maxHeight:r.maxHeight},n.onResizeStart=n.onResizeStart.bind(n),n.onResize=n.onResize.bind(n),n.onResizeStop=n.onResizeStop.bind(n),n.onDragStart=n.onDragStart.bind(n),n.onDrag=n.onDrag.bind(n),n.onDragStop=n.onDragStop.bind(n),n.getMaxSizesFromProps=n.getMaxSizesFromProps.bind(n),n}return t.prototype.componentDidMount=function(){this.updateOffsetFromParent();var r=this.offsetFromParent,n=r.left,o=r.top,a=this.getDraggablePosition(),s=a.x,l=a.y;this.draggable.setState({x:s-n,y:l-o}),this.forceUpdate()},t.prototype.getDraggablePosition=function(){var r=this.draggable.state,n=r.x,o=r.y;return{x:n,y:o}},t.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},t.prototype.getParentSize=function(){return this.resizable.getParentSize()},t.prototype.getMaxSizesFromProps=function(){var r=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,n=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:r,maxHeight:n}},t.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},t.prototype.getOffsetHeight=function(r){var n=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/n;case"body":return document.body.offsetHeight/n;default:return r.offsetHeight}},t.prototype.getOffsetWidth=function(r){var n=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/n;case"body":return document.body.offsetWidth/n;default:return r.offsetWidth}},t.prototype.onDragStart=function(r,n){this.props.onDragStart&&this.props.onDragStart(r,n);var o=this.getDraggablePosition();if(this.originalPosition=o,!!this.props.bounds){var a=this.getParent(),s=this.props.scale,l;if(this.props.bounds==="parent")l=a;else if(this.props.bounds==="body"){var d=a.getBoundingClientRect(),u=d.left,p=d.top,h=document.body.getBoundingClientRect(),m=-(u-a.offsetLeft*s-h.left)/s,b=-(p-a.offsetTop*s-h.top)/s,y=(document.body.offsetWidth-this.resizable.size.width*s)/s+m,v=(document.body.offsetHeight-this.resizable.size.height*s)/s+b;return this.setState({bounds:{top:b,right:y,bottom:v,left:m}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var w=a.getBoundingClientRect(),x=w.left,f=w.top,g=-(x-a.offsetLeft*s)/s,S=-(f-a.offsetTop*s)/s,y=(window.innerWidth-this.resizable.size.width*s)/s+g,v=(window.innerHeight-this.resizable.size.height*s)/s+S;return this.setState({bounds:{top:S,right:y,bottom:v,left:g}})}else typeof this.props.bounds=="string"?l=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(l=this.props.bounds);if(!(!(l instanceof HTMLElement)||!(a instanceof HTMLElement))){var j=l.getBoundingClientRect(),k=j.left,z=j.top,R=a.getBoundingClientRect(),E=R.left,P=R.top,N=(k-E)/s,D=z-P;if(this.resizable){this.updateOffsetFromParent();var A=this.offsetFromParent;this.setState({bounds:{top:D-A.top,right:N+(l.offsetWidth-this.resizable.size.width)-A.left/s,bottom:D+(l.offsetHeight-this.resizable.size.height)-A.top,left:N-A.left/s}})}}}},t.prototype.onDrag=function(r,n){if(this.props.onDrag){var o=this.offsetFromParent,a=o.left,s=o.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(r,xe(xe({},n),{x:n.x+a,y:n.y+s}));if(this.props.dragAxis==="x")return this.props.onDrag(r,xe(xe({},n),{x:n.x+a,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(r,xe(xe({},n),{x:this.originalPosition.x+a,y:n.y+s,deltaX:0}))}},t.prototype.onDragStop=function(r,n){if(this.props.onDragStop){var o=this.offsetFromParent,a=o.left,s=o.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(r,xe(xe({},n),{x:n.x+a,y:n.y+s}));if(this.props.dragAxis==="x")return this.props.onDragStop(r,xe(xe({},n),{x:n.x+a,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(r,xe(xe({},n),{x:this.originalPosition.x+a,y:n.y+s,deltaX:0}))}},t.prototype.onResizeStart=function(r,n,o){r.stopPropagation(),this.setState({resizing:!0});var a=this.props.scale,s=this.offsetFromParent,l=this.getDraggablePosition();if(this.resizingPosition={x:l.x+s.left,y:l.y+s.top},this.originalPosition=l,this.props.bounds){var d=this.getParent(),u=void 0;this.props.bounds==="parent"?u=d:this.props.bounds==="body"?u=document.body:this.props.bounds==="window"?u=window:typeof this.props.bounds=="string"?u=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(u=this.props.bounds);var p=this.getSelfElement();if(p instanceof Element&&(u instanceof HTMLElement||u===window)&&d instanceof HTMLElement){var h=this.getMaxSizesFromProps(),m=h.maxWidth,b=h.maxHeight,y=this.getParentSize();if(m&&typeof m=="string")if(m.endsWith("%")){var v=Number(m.replace("%",""))/100;m=y.width*v}else m.endsWith("px")&&(m=Number(m.replace("px","")));if(b&&typeof b=="string")if(b.endsWith("%")){var v=Number(b.replace("%",""))/100;b=y.height*v}else b.endsWith("px")&&(b=Number(b.replace("px","")));var w=p.getBoundingClientRect(),x=w.left,f=w.top,g=this.props.bounds==="window"?{left:0,top:0}:u.getBoundingClientRect(),S=g.left,j=g.top,k=this.getOffsetWidth(u),z=this.getOffsetHeight(u),R=n.toLowerCase().endsWith("left"),E=n.toLowerCase().endsWith("right"),P=n.startsWith("top"),N=n.startsWith("bottom");if((R||P)&&this.resizable){var D=(x-S)/a+this.resizable.size.width;this.setState({maxWidth:D>Number(m)?m:D})}if(E||this.props.lockAspectRatio&&!R&&!P){var D=k+(S-x)/a;this.setState({maxWidth:D>Number(m)?m:D})}if((P||R)&&this.resizable){var D=(f-j)/a+this.resizable.size.height;this.setState({maxHeight:D>Number(b)?b:D})}if(N||this.props.lockAspectRatio&&!P&&!R){var D=z+(j-f)/a;this.setState({maxHeight:D>Number(b)?b:D})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(r,n,o)},t.prototype.onResize=function(r,n,o,a){var s=this,l={x:this.originalPosition.x,y:this.originalPosition.y},d=-a.width,u=-a.height,p=["top","left","topLeft","bottomLeft","topRight"];p.includes(n)&&(n==="bottomLeft"?l.x+=d:(n==="topRight"||(l.x+=d),l.y+=u));var h=this.draggable.state;(l.x!==h.x||l.y!==h.y)&&$o.flushSync(function(){s.draggable.setState(l)}),this.updateOffsetFromParent();var m=this.offsetFromParent,b=this.getDraggablePosition().x+m.left,y=this.getDraggablePosition().y+m.top;this.resizingPosition={x:b,y},this.props.onResize&&this.props.onResize(r,n,o,a,{x:b,y})},t.prototype.onResizeStop=function(r,n,o,a){this.setState({resizing:!1});var s=this.getMaxSizesFromProps(),l=s.maxWidth,d=s.maxHeight;this.setState({maxWidth:l,maxHeight:d}),this.props.onResizeStop&&this.props.onResizeStop(r,n,o,a,this.resizingPosition)},t.prototype.updateSize=function(r){this.resizable&&this.resizable.updateSize({width:r.width,height:r.height})},t.prototype.updatePosition=function(r){this.draggable.setState(r)},t.prototype.updateOffsetFromParent=function(){var r=this.props.scale,n=this.getParent(),o=this.getSelfElement();if(!n||o===null)return{top:0,left:0};var a=n.getBoundingClientRect(),s=a.left,l=a.top,d=o.getBoundingClientRect(),u=this.getDraggablePosition(),p=n.scrollLeft,h=n.scrollTop;this.offsetFromParent={left:d.left-s+p-u.x*r,top:d.top-l+h-u.y*r}},t.prototype.render=function(){var r=this,n=this.props,o=n.disableDragging,a=n.style,s=n.dragHandleClassName,l=n.position,d=n.onMouseDown,u=n.onMouseUp,p=n.dragAxis,h=n.dragGrid,m=n.bounds,b=n.enableUserSelectHack,y=n.cancel,v=n.children;n.onResizeStart,n.onResize,n.onResizeStop,n.onDragStart,n.onDrag,n.onDragStop;var w=n.resizeHandleStyles,x=n.resizeHandleClasses,f=n.resizeHandleComponent,g=n.enableResizing,S=n.resizeGrid,j=n.resizeHandleWrapperClass,k=n.resizeHandleWrapperStyle,z=n.scale,R=n.allowAnyClick,E=n.dragPositionOffset,P=N6(n,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),N=this.props.default?xe({},this.props.default):void 0;delete P.default;var D=o||s?{cursor:"auto"}:{cursor:"move"},A=xe(xe(xe({},_6),D),a),J=this.offsetFromParent,Be=J.left,ne=J.top,ve;l&&(ve={x:l.x-Be,y:l.y-ne});var T=this.state.resizing?void 0:ve,M=this.state.resizing?"both":p;return C.createElement(j6,{ref:function(O){O&&(r.draggable=O)},handle:s?".".concat(s):void 0,defaultPosition:N,onMouseDown:d,onMouseUp:u,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:M,disabled:o,grid:h,bounds:m?this.state.bounds:void 0,position:T,enableUserSelectHack:b,cancel:y,scale:z,allowAnyClick:R,nodeRef:this.resizableElement,positionOffset:E},C.createElement(I6,xe({},P,{ref:function(O){O&&(r.resizable=O,r.resizableElement.current=O.resizable)},defaultSize:N,size:this.props.size,enable:typeof g=="boolean"?M6(g):g,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:A,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:S,handleWrapperClass:j,handleWrapperStyle:k,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:w,handleClasses:x,handleComponent:f,scale:this.props.scale}),v))},t.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},t}(C.PureComponent);const O6=c.div`
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
`,F6=c.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
`,A6=c.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`,L6=c.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`,Ax=({item:e,updatePosition:t,updateSize:r,onSelect:n,isSelectable:o=!1})=>{const a=()=>{o&&n&&n(e)};return i.jsx(D6,{bounds:"parent",position:{x:e.x,y:e.y},size:{width:e.width,height:e.height},enableResizing:!o,disableDragging:o,onDragStop:(s,l)=>{o||t(e.id,l.x,l.y)},onResizeStop:(s,l,d,u,p)=>{if(!o){const h=parseFloat(d.style.width),m=parseFloat(d.style.height);r(e.id,h,m),t(e.id,p.x,p.y)}},children:i.jsxs(O6,{$isSelectable:o,$isSelected:!1,onClick:a,children:[i.jsx(F6,{children:e.label}),e.seats&&i.jsxs(L6,{children:[e.seats," мест"]}),i.jsx(A6,{children:e.type})]})})},B6=c.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`,U6=c.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,W6=c.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`,H6=c.div`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #fff;
`,Y6=c.h3`
  color: #ffd700;
  margin: 0 0 0.5rem 0;
`,V6=c.p`
  margin: 0;
  color: #ccc;
`,G6=c.button`
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
`,X6=({zoneItems:e,onTableSelect:t,selectedTable:r,onContinue:n})=>{const o=e.filter(s=>s.type==="table"),a=s=>{t(s)};return i.jsxs(un,{children:[i.jsx(U6,{children:"Выберите стол для бронирования"}),i.jsx(W6,{children:"Кликните на стол, который хотите забронировать"}),r&&i.jsxs(H6,{children:[i.jsxs(Y6,{children:["Выбранный стол: ",r.label]}),i.jsxs(V6,{children:["Количество мест: ",r.seats||"Не указано"]}),i.jsx(G6,{onClick:n,children:"Продолжить бронирование"})]}),i.jsx(B6,{children:o.map(s=>i.jsx(Ax,{item:s,updatePosition:()=>{},updateSize:()=>{},onSelect:a,isSelectable:!0},s.id))})]})},Lx=async()=>{try{const e=await Y.get("/zones");return console.log("API Response:",e.data),e.data&&e.data.success&&Array.isArray(e.data.data)?e.data.data:Array.isArray(e.data)?e.data:(console.warn("Неожиданная структура ответа:",e.data),[])}catch(e){return console.error("Ошибка загрузки зон:",e),[]}},q6=async e=>(await Y.post("/zones",e)).data,Bx=async e=>{try{console.log("🌐 API: Загружаем элементы зоны",e);const t=await Y.get(`/zones/${e}/items`);return console.log("🌐 API: Ответ:",t.data),t.data&&t.data.success&&t.data.data?(console.log("🌐 API: Элементы зоны:",t.data.data),t.data.data):(console.warn("🌐 API: Неожиданный формат ответа:",t.data),[])}catch(t){return console.error("❌ API: Ошибка загрузки элементов зоны:",t),[]}},K6=async(e,t)=>{var r;try{console.log("🌐 API: Сохраняем элементы зоны",e,t);const n=t.map(a=>({zoneId:e,floor:a.floor||1,label:a.label||"Стол",type:a.type||"table",x:a.x||0,y:a.y||0,width:a.width||100,height:a.height||100,seats:a.seats||4,capacity:a.capacity||4,pricePerHour:a.pricePerHour||0,pricePerSeat:a.pricePerSeat||0,pricePerSlot:a.pricePerSlot||0,minDuration:a.minDuration||1,maxDuration:a.maxDuration||24,timeSlots:a.timeSlots||[],description:a.description||"",features:a.features||[]}));console.log("🌐 API: Данные для сохранения:",n);const o=await Y.post("/zones/items",n);if(console.log("🌐 API: Ответ сохранения:",o.data),o.data&&o.data.success)console.log("✅ API: Элементы зоны успешно сохранены");else throw new Error(((r=o.data)==null?void 0:r.message)||"Неизвестная ошибка сохранения")}catch(n){throw console.error("❌ API: Ошибка сохранения элементов зоны:",n),n}},Do=H`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Q6=H`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,J6=H`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,Z6=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;c.main`
  flex: 1;
  padding: 0;
`;const e3=c.div`
  padding: 3rem 0;
  animation: ${F`${Do} 0.8s ease-out`};
`,t3=c.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`${Do} 1s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,r3=c.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`${Do} 1.2s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,sc=c.div`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`${Do} 0.8s ease-out`};
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`,lc=c.h2`
  color: #667eea;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${F`${Q6} 0.8s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
  }
`,n3=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,i3=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #667eea;
  font-size: 1.3rem;
  font-weight: 500;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 2rem;
  animation: ${F`${J6} 2s ease-in-out infinite`};
`,o3=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ef4444;
  font-size: 1.3rem;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  padding: 2rem;
`,yh=c.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  animation: ${F`${Do} 0.6s ease-out`};
`,vh=c.p`
  color: #667eea;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,wh=c.button`
  background: ${e=>e.$variant==="primary"?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"transparent"};
  border: ${e=>e.$variant==="primary"?"none":"2px solid #667eea"};
  color: ${e=>e.$variant==="primary"?"#ffffff":"#667eea"};
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.$variant==="primary"?"0 10px 25px rgba(102, 126, 234, 0.4)":"0 8px 20px rgba(102, 126, 234, 0.3)"};
    background: ${e=>e.$variant==="primary"?"linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%)":"rgba(102, 126, 234, 0.1)"};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`,a3=c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,cc=c.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  background: ${e=>e.$completed?"linear-gradient(135deg, #51cf66 0%, #40c057 100%)":e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$completed||e.$active?"#ffffff":"rgba(255, 255, 255, 0.6)"};
  border: ${e=>e.$completed||e.$active?"none":"2px solid rgba(255, 255, 255, 0.2)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${e=>e.$active?"0 0 20px rgba(102, 126, 234, 0.4)":"none"};
  
  &:hover {
    transform: ${e=>e.$active||e.$completed?"scale(1.1)":"scale(1.05)"};
    box-shadow: ${e=>e.$active?"0 0 25px rgba(102, 126, 234, 0.6)":e.$completed?"0 0 25px rgba(81, 207, 102, 0.6)":"0 0 15px rgba(255, 255, 255, 0.2)"};
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    margin: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`,s3=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,a]=C.useState(null),[s,l]=C.useState(1),[d,u]=C.useState(null),[p,h]=C.useState(null),[m,b]=C.useState([]),[y,v]=C.useState(!1);Ne.useEffect(()=>{(async()=>{try{n(!0);const k=await Lx();t(k)}catch{a("Ошибка загрузки зон")}finally{n(!1)}})()},[]);const w=async j=>{u(j),l(2),v(!0);try{const k=await Bx(j.id);b(k)}catch(k){console.error("Ошибка загрузки столов зоны:",k),b([])}finally{v(!1)}},x=()=>{u(null),h(null),l(1)},f=j=>{h(j)},g=()=>{l(3)},S=()=>{h(null),l(2)};return i.jsx(Z6,{children:i.jsx(un,{children:i.jsxs(e3,{children:[i.jsx(t3,{children:"Бронирование"}),i.jsx(r3,{children:"Выберите зал и заполните форму для бронирования"}),i.jsxs(a3,{children:[i.jsx(cc,{$active:s===1,$completed:s>1,children:"1"}),i.jsx(cc,{$active:s===2,$completed:s>2,children:"2"}),i.jsx(cc,{$active:s===3,$completed:!1,children:"3"})]}),s===1?i.jsxs(sc,{children:[i.jsx(lc,{children:"Шаг 1: Выберите зал"}),r?i.jsx(i3,{children:"Загрузка зон..."}):o?i.jsx(o3,{children:o}):i.jsx(n3,{children:Array.isArray(e)&&e.length>0?e.map((j,k)=>i.jsx("div",{onClick:()=>w(j),children:i.jsx(JS,{zone:j,$isFullWidth:k%3===2})},j.id)):i.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Зоны не найдены"})})]}):s===2?i.jsxs(sc,{children:[i.jsx(lc,{children:"Шаг 2: Выберите стол"}),d&&i.jsxs(yh,{children:[i.jsxs(vh,{children:["Зал: ",d.name]}),i.jsx(wh,{onClick:x,$variant:"secondary",children:"← Выбрать другой зал"})]}),y?i.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Загрузка столов..."}):i.jsx(X6,{zoneItems:m,onTableSelect:f,selectedTable:p,onContinue:g})]}):i.jsxs(sc,{children:[i.jsx(lc,{children:"Шаг 3: Заполните форму бронирования"}),d&&p&&i.jsxs(yh,{children:[i.jsxs(vh,{children:["Зал: ",d.name," | Стол: ",p.label]}),i.jsx(wh,{onClick:S,$variant:"secondary",children:"← Выбрать другой стол"})]}),d&&p&&i.jsx(Tk,{selectedZone:d,selectedTable:p})]})]})})})},he={getMenuTypes:async()=>{console.log("🔍 Запрашиваем типы меню...");try{const e=await Y.get("/menu-types");return console.log("✅ Типы меню получены:",e.data.length,"шт."),e.data}catch(e){throw console.error("❌ Ошибка получения типов меню:",e),e}},getMenuType:async e=>(await Y.get(`/menu-types/${e}`)).data,createMenuType:async e=>(await Y.post("/menu-types",e)).data,updateMenuType:async(e,t)=>(await Y.put(`/menu-types/${e}`,t)).data,deleteMenuType:async e=>{await Y.delete(`/menu-types/${e}`)},getMenuCategories:async e=>{console.log("🔍 Запрашиваем категории меню...",e?`для типа ${e}`:"все");try{const t=e?{menuTypeId:e}:{},r=await Y.get("/menu-categories",{params:t});return console.log("✅ Категории меню получены:",r.data.length,"шт."),r.data}catch(t){throw console.error("❌ Ошибка получения категорий меню:",t),t}},getMenuCategory:async e=>(await Y.get(`/menu-categories/${e}`)).data,createMenuCategory:async e=>(await Y.post("/menu-categories",e)).data,updateMenuCategory:async(e,t)=>(await Y.put(`/menu-categories/${e}`,t)).data,deleteMenuCategory:async e=>{await Y.delete(`/menu-categories/${e}`)},getMenuItems:async e=>{console.log("🔍 Запрашиваем блюда меню...",e?`для категории ${e}`:"все");try{const t=e?{categoryId:e}:{},r=await Y.get("/menu-items",{params:t});return console.log("✅ Блюда меню получены:",r.data.length,"шт."),r.data}catch(t){throw console.error("❌ Ошибка получения блюд меню:",t),t}},getMenuItem:async e=>(await Y.get(`/menu-items/${e}`)).data,createMenuItem:async e=>{console.log("🚀 Создаем блюдо:",e);try{const t=await Y.post("/menu-items",e);return console.log("✅ Блюдо создано:",t.data),t.data}catch(t){throw console.error("❌ Ошибка создания блюда:",t),t}},updateMenuItem:async(e,t)=>(await Y.put(`/menu-items/${e}`,t)).data,deleteMenuItem:async e=>{await Y.delete(`/menu-items/${e}`)},getFullMenu:async()=>{console.log("🚀 Запрашиваем полное меню...");try{const[e,t,r]=await Promise.all([he.getMenuTypes(),he.getMenuCategories(),he.getMenuItems()]);return console.log("✅ Полное меню получено:",{types:e.length,categories:t.length,items:r.length}),{types:e,categories:t,items:r}}catch(e){throw console.error("❌ Ошибка получения полного меню:",e),e}},getFilteredMenu:async e=>{console.log("🔍 Запрашиваем отфильтрованное меню...",e);try{const t=await he.getFullMenu();let r=t.items;if(e!=null&&e.searchQuery){const n=e.searchQuery.toLowerCase();r=r.filter(o=>o.name.toLowerCase().includes(n)||o.description&&o.description.toLowerCase().includes(n))}if(e!=null&&e.priceRange&&(r=r.filter(n=>n.price>=e.priceRange.min&&n.price<=e.priceRange.max)),e!=null&&e.categoryId&&(r=r.filter(n=>n.categoryId===e.categoryId)),e!=null&&e.menuTypeId){const n=t.categories.filter(o=>o.menuTypeId===e.menuTypeId).map(o=>o.id);r=r.filter(o=>n.includes(o.categoryId))}return e!=null&&e.allergens&&e.allergens.length>0&&(r=r.filter(n=>!e.allergens.some(o=>n.allergens.includes(o)))),(e==null?void 0:e.isPopular)!==void 0&&(r=r.filter(n=>n.isPopular===e.isPopular)),console.log("✅ Отфильтрованное меню получено:",{total:t.items.length,filtered:r.length}),{...t,filteredItems:r}}catch(t){throw console.error("❌ Ошибка получения отфильтрованного меню:",t),t}}};H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;H`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;H`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;H`
  0%, 100% { box-shadow: 0 0 20px rgba(123, 97, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(123, 97, 255, 0.6); }
`;H`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const jh=c.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(123, 97, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`,Sh=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,l3=c.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,c3=c.p`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,d3=c.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin: 0;
  padding: 2rem 0 0 0;
  min-height: 0;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,u3=c.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`,f3=c.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`,p3=c.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.$active?"#ffffff":"#e2e8f0"};
  border: 1px solid ${e=>e.$active?"rgba(123, 97, 255, 0.5)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: left;
  backdrop-filter: blur(20px);
  
  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
    border-color: rgba(123, 97, 255, 0.3);
    /* transform: translateY(-2px); */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`,h3=c.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,m3=c.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  
  &::after {
    content: '→';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(123, 97, 255, 0.8);
    font-size: 1.5rem;
    font-weight: bold;
    pointer-events: none;
    animation: ${F`pulse`} 2s ease-in-out infinite;
    
    @media (max-width: 768px) {
      right: 1rem;
      font-size: 1.2rem;
    }
  }
`,g3=c.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none;
  -ms-overflow-style: none;
`,x3=c.button`
  padding: 0.8rem 1.5rem;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.$active?"#ffffff":"#e2e8f0"};
  border: 1px solid ${e=>e.$active?"rgba(123, 97, 255, 0.5)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  white-space: nowrap;
  flex-shrink: 0;
  backdrop-filter: blur(20px);
  font-weight: 500;
  
  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
    border-color: rgba(123, 97, 255, 0.3);
    /* transform: translateY(-2px); */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
`,b3=c.div`
  padding: 1rem 0;
`,y3=c.div`
  h2 {
    color: #ffffff;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`,v3=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Ux=c.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${F`slideIn`} 0.8s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  
  &:hover {
    /* transform: translateY(-8px); */
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(123, 97, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,w3=c.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s ease;
  border-radius: 20px 20px 0 0;
  
  ${Ux}:hover & {
    transform: scale(1.05);
  }
  
  /* Fallback для изображений без src */
  &:not([src]), &[src=""], &[src*="undefined"], &[src*="null"] {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    content: "🍽️";
  }
`,j3=c.div`
  padding: 1.5rem;
`,S3=c.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  line-height: 1.3;
`,k3=c.p`
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`,C3=c.div`
  color: #10b981;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: right;
  margin-top: 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,z3=c.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #e2e8f0;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`,kh=c.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(123, 97, 255, 0.3);
    border-top: 3px solid #667eea;
    border-radius: 50%;
    animation: ${F`pulse`} 1s linear infinite;
    margin: 0 auto 1rem;
  }
`,E3=c.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  
  p {
    color: #ef4444;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  button {
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
      background: #dc2626;
      transform: translateY(-2px);
    }
  }
`,$3=()=>{var v;const[e,t]=C.useState([]),[r,n]=C.useState([]),[o,a]=C.useState([]),[s,l]=C.useState(null),[d,u]=C.useState(null),[p,h]=C.useState(!0),[m,b]=C.useState(null);C.useEffect(()=>{(async()=>{h(!0),b(null);try{const x=await he.getFullMenu();if(t(x.types),n(x.categories),a(x.items),x.types.length>0){l(x.types[0].id);const f=x.categories.filter(g=>g.menuTypeId===x.types[0].id);f.length>0&&u(f[0].id)}}catch(x){console.error("Error fetching menu:",x),b("Не удалось загрузить меню. Попробуйте обновить страницу.")}finally{h(!1)}})()},[]);const y=C.useMemo(()=>o.filter(w=>d?w.categoryId===d:!0).sort((w,x)=>w.sortOrder-x.sortOrder),[o,d]);return e.length===0?i.jsx(jh,{children:i.jsx(Sh,{children:i.jsxs(kh,{children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"Загрузка меню..."})]})})}):i.jsx(jh,{children:i.jsxs(Sh,{children:[i.jsx(l3,{children:"Меню клуба"}),i.jsx(c3,{children:"Откройте для себя изысканные блюда и напитки в атмосфере клуба Frantsuz"}),m&&i.jsxs(E3,{children:[i.jsx("p",{children:m}),i.jsx("button",{onClick:()=>window.location.reload(),children:"Обновить страницу"})]}),i.jsxs(d3,{children:[i.jsxs(u3,{children:[i.jsx(f3,{children:"Типы меню"}),e.map(w=>i.jsx(p3,{$active:s===w.id,onClick:()=>{l(w.id);const x=r.filter(f=>f.menuTypeId===w.id);x.length>0&&u(x[0].id)},children:w.name},w.id))]}),i.jsxs(h3,{children:[i.jsx(m3,{children:i.jsx(g3,{children:r.map(w=>i.jsx(x3,{$active:d===w.id,onClick:()=>u(w.id),children:w.name},w.id))})}),i.jsx(b3,{children:p?i.jsxs(kh,{children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"Загрузка блюд..."})]}):y.length>0?i.jsxs(y3,{children:[i.jsxs("h2",{children:[(v=r.find(w=>w.id===d))==null?void 0:v.name,i.jsxs("span",{style:{fontSize:"0.9em",color:"#94a3b8",marginLeft:"1rem"},children:["(",y.length," блюд)"]})]}),i.jsx(v3,{children:y.map((w,x)=>i.jsxs(Ux,{style:{animationDelay:`${x*.1}s`},children:[i.jsx(w3,{src:w.imageUrl||"/images/default-food.svg",alt:w.name,onError:f=>{const g=f.target;g.src="/images/default-food.svg"}}),i.jsxs(j3,{children:[i.jsx(S3,{children:w.name}),w.description&&i.jsx(k3,{children:w.description}),i.jsxs(C3,{children:[w.price," ₽"]})]})]},w.id))})]}):i.jsxs(z3,{children:[i.jsx("h3",{children:"Блюда не найдены"}),i.jsx("p",{children:"В выбранной категории пока нет блюд"})]})})]})]})]})})},P3=c.div`
  display: flex;
  flex-direction: column;
`,R3=c.main`
  flex: 1;
  padding: 2rem 0;
`,I3=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,T3=c.div`
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
`,N3=()=>i.jsx(P3,{children:i.jsx(R3,{children:i.jsx(I3,{children:i.jsxs(T3,{children:[i.jsx("h1",{children:"Афиша"}),i.jsx("p",{children:"Актуальные события и мероприятия в нашем клубе."})]})})})}),_3=c.div`
  display: flex;
  flex-direction: column;
`,M3=c.main`
  flex: 1;
  padding: 2rem 0;
`,D3=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,O3=c.div`
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
`,F3=()=>i.jsx(_3,{children:i.jsx(M3,{children:i.jsx(D3,{children:i.jsxs(O3,{children:[i.jsx("h1",{children:"Клубные карты"}),i.jsx("p",{children:"Специальные предложения и программы лояльности для наших гостей."})]})})})}),A3=c.div`
  display: flex;
  flex-direction: column;
`,L3=c.main`
  flex: 1;
  padding: 2rem 0;
`,B3=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,U3=c.div`
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
`,W3=c.div`
  background: #333;
  border: 2px dashed #ffd700;
  border-radius: 8px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  color: #ffd700;
  font-size: 1.2rem;
  text-align: center;
`,H3=()=>i.jsx(A3,{children:i.jsx(L3,{children:i.jsx(B3,{children:i.jsxs(U3,{children:[i.jsx("h1",{children:"3D Тур по клубу"}),i.jsx("p",{children:"Совершите виртуальную экскурсию по нашему развлекательному комплексу. Исследуйте все зоны и помещения, не выходя из дома."}),i.jsxs(W3,{children:["🏠 3D Тур будет доступен в ближайшее время",i.jsx("br",{}),i.jsx("small",{style:{color:"#888",fontSize:"1rem"},children:"Мы работаем над созданием интерактивного 3D тура"})]}),i.jsx("p",{children:"В 3D туре вы сможете:"}),i.jsxs("ul",{style:{textAlign:"left",maxWidth:"600px",margin:"0 auto",color:"#ccc",lineHeight:"1.8"},children:[i.jsx("li",{children:"Пройтись по всем зонам клуба"}),i.jsx("li",{children:"Рассмотреть детали интерьера"}),i.jsx("li",{children:"Увидеть расположение столов и оборудования"}),i.jsx("li",{children:"Оценить атмосферу каждого помещения"}),i.jsx("li",{children:"Познакомиться с планировкой клуба"})]})]})})})});H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;const Y3=c.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,V3=c.div`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,G3=c.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,X3=c.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`,q3=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`,gn=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${F`fadeIn`} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,xn=c.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`,bn=c.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #667eea;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`,yn=c.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,K3=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`,Q3=c.h2`
  color: #667eea;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`,J3=c.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,Z3=c.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,dc=c.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #667eea;
    transform: translateY(-2px);
  }
  
  span {
    font-size: 1.2rem;
  }
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    
    &:hover {
      color: #764ba2;
    }
  }
`,e4=()=>i.jsx(Y3,{children:i.jsx(V3,{children:i.jsxs(Se,{children:[i.jsx(G3,{children:"Безопасность гостей"}),i.jsx(X3,{children:"Мы обеспечиваем максимальную безопасность для всех посетителей клуба. Ваша безопасность - наш приоритет."}),i.jsxs(q3,{children:[i.jsxs(gn,{children:[i.jsx(xn,{children:"📹"}),i.jsx(bn,{children:"Видеонаблюдение"}),i.jsx(yn,{children:"По всему клубу установлены современные камеры видеонаблюдения с высоким разрешением. Все зоны находятся под постоянным контролем службы безопасности."})]}),i.jsxs(gn,{children:[i.jsx(xn,{children:"👮‍♂️"}),i.jsx(bn,{children:"Служба безопасности"}),i.jsx(yn,{children:"Круглосуточная служба безопасности с быстрым реагированием. Опытные сотрудники всегда готовы помочь и обеспечить порядок в клубе."})]}),i.jsxs(gn,{children:[i.jsx(xn,{children:"🚨"}),i.jsx(bn,{children:"Система оповещения"}),i.jsx(yn,{children:"Современная система оповещения и связи с экстренными службами. В случае необходимости помощь прибудет в кратчайшие сроки."})]}),i.jsxs(gn,{children:[i.jsx(xn,{children:"🔒"}),i.jsx(bn,{children:"Контроль доступа"}),i.jsx(yn,{children:"Система контроля доступа на входе и в VIP-зонах. Все посетители проходят проверку для обеспечения безопасности."})]}),i.jsxs(gn,{children:[i.jsx(xn,{children:"💡"}),i.jsx(bn,{children:"Освещение"}),i.jsx(yn,{children:"Полное освещение всех зон клуба, включая парковку и прилегающую территорию. Хорошая видимость обеспечивает дополнительную безопасность."})]}),i.jsxs(gn,{children:[i.jsx(xn,{children:"🚪"}),i.jsx(bn,{children:"Пожарная безопасность"}),i.jsx(yn,{children:"Четко обозначенные аварийные выходы и пути эвакуации. Регулярно проводятся профилактические работы по обеспечению пожарной безопасности."})]})]}),i.jsxs(K3,{children:[i.jsx(Q3,{children:"Нужна помощь?"}),i.jsx(J3,{children:"Если у вас возникли вопросы по безопасности или нужна помощь, свяжитесь с нами:"}),i.jsxs(Z3,{children:[i.jsxs(dc,{children:[i.jsx("span",{children:"📞"}),i.jsx("a",{href:"tel:+79680905550",children:"+7 968 090-55-50"})]}),i.jsxs(dc,{children:[i.jsx("span",{children:"📞"}),i.jsx("a",{href:"tel:+79680915550",children:"+7 968 091-55-50"})]}),i.jsxs(dc,{children:[i.jsx("span",{children:"📧"}),i.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})]})]})]})]})})});H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;H`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;const t4=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,r4=c.main`
  flex: 1;
`,n4=c.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 4rem 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    pointer-events: none;
  }
  
  @media (max-width: 1024px) {
    padding: 3rem 0;
    min-height: 50vh;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
    min-height: 40vh;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: 35vh;
  }
`,i4=c.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${F`fadeIn`} 0.8s ease-out;
`,o4=c.h1`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 0.9;
  margin: 0 0 2rem 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`,a4=c.p`
  font-size: 1.4rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,s4=c.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`,uc=c.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`,l4=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`,pa=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${F`fadeIn`} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,ha=c.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`,vn=c.div`
  color: #a0a0a0;
  line-height: 1.6;
  
  p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`,Ch=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${F`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`,zh=c.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`,c4=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`,d4=c.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: block;
`,wn=c.span`
  font-size: 1.5rem;
  
  &.lock {
    color: #4CAF50;
  }
  
  &.heart {
    color: #ff6b6b;
  }
  
  &.card {
    color: #667eea;
  }
`,u4=()=>i.jsx(t4,{children:i.jsxs(r4,{children:[i.jsx(n4,{children:i.jsx(Se,{children:i.jsxs(i4,{children:[i.jsx(o4,{children:"Правила оплаты"}),i.jsx(a4,{children:"Безопасные и удобные способы оплаты для вашего комфорта"})]})})}),i.jsx(s4,{children:i.jsxs(Se,{children:[i.jsx(uc,{children:"Способы оплаты"}),i.jsxs(l4,{children:[i.jsxs(pa,{children:[i.jsxs(ha,{children:[i.jsx(wn,{className:"card",children:"💳"}),"Банковские карты"]}),i.jsxs(vn,{children:[i.jsx("p",{children:"К оплате принимаются банковские карты платёжных систем:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Visa"}),i.jsx("li",{children:"MasterCard"}),i.jsx("li",{children:"МИР"})]}),i.jsx("p",{children:"После ввода данных вы будете перенаправлены на платёжный шлюз ПАО «Сбербанк России» / ПАО «Банк ВТБ» / платёжной системы PayKeeper для подтверждения операции."}),i.jsx("p",{children:"Соединение с платёжным шлюзом и передача информации осуществляются в защищённом режиме с использованием технологии шифрования SSL."})]})]}),i.jsxs(pa,{children:[i.jsxs(ha,{children:[i.jsx(wn,{className:"lock",children:"🔒"}),"Процесс оплаты"]}),i.jsxs(vn,{children:[i.jsx("p",{children:"Для оплаты товара банковской картой при оформлении заказа выберите способ оплаты: «Банковской картой»."}),i.jsx("p",{children:"Обработка платежа производится на авторизационной странице банка, где необходимо ввести следующие данные:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Номер карты"}),i.jsx("li",{children:"Срок действия карты (указан на лицевой стороне)"}),i.jsx("li",{children:"Имя держателя карты (латинскими буквами, как указано на карте)"}),i.jsx("li",{children:"CVC2 / CVV2 код (три цифры на обороте карты)"})]})]})]})]}),i.jsxs(Ch,{children:[i.jsxs(zh,{children:[i.jsx(wn,{className:"heart",children:"🛡"}),"Безопасность обработки платежей"]}),i.jsxs(vn,{children:[i.jsx("p",{children:"Безопасность интернет-платежей гарантируется соответствием международному стандарту PCI DSS."}),i.jsx("p",{children:"Передача данных осуществляется с использованием технологии шифрования SSL, что полностью исключает возможность их перехвата или использования третьими лицами."})]})]}),i.jsxs(Ch,{children:[i.jsxs(zh,{children:[i.jsx(wn,{className:"heart",children:"❤️"}),"Рекомендации по безопасности"]}),i.jsx(vn,{children:i.jsxs("ul",{children:[i.jsx("li",{children:"Берегите пластиковые карты так же, как наличные"}),i.jsx("li",{children:"Не передавайте номер карты по телефону посторонним лицам"}),i.jsx("li",{children:"Всегда держите под рукой номер телефона банка для экстренной блокировки карты"}),i.jsx("li",{children:"Вводите реквизиты карты только при оплате покупок на проверенных сайтах"})]})})]}),i.jsxs(c4,{children:[i.jsx(uc,{style:{color:"#ffffff",marginBottom:"2rem"},children:"Как найти данные карты"}),i.jsx(d4,{src:"/pay-rules/payCard.png",alt:"Схема банковской карты с указанием расположения данных"})]}),i.jsxs("div",{style:{textAlign:"center",margin:"3rem 0",padding:"0 2rem"},children:[i.jsx(uc,{style:{marginBottom:"2rem"},children:"Поддерживаемые платежные системы"}),i.jsx("img",{src:"/pay-rules/cards.png",alt:"Логотипы платежных систем: Visa, MasterCard, МИР, СБП, PayKeeper",style:{maxWidth:"300px",height:"auto"}})]}),i.jsxs(pa,{children:[i.jsxs(ha,{children:[i.jsx(wn,{className:"lock",children:"🔐"}),"3D-Secure защита"]}),i.jsxs(vn,{children:[i.jsx("p",{children:"Если ваш банк поддерживает технологию безопасной оплаты в интернете 3D-Secure (Verified by Visa, MasterCard Secure Code или MirAccept), для подтверждения платежа потребуется ввести одноразовый пароль, отправленный вашим банком."}),i.jsx("p",{children:"Информацию о способах получения этого пароля уточняйте в банке, выпустившем карту."})]})]}),i.jsx("div",{style:{margin:"3rem 0"}}),i.jsxs(pa,{children:[i.jsxs(ha,{children:[i.jsx(wn,{className:"card",children:"🏢"}),"Реквизиты"]}),i.jsx(vn,{children:i.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Название компании:"}),' ООО "ЭкоСтар"']}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"ИНН:"})," 5041214554"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"ОГРН:"})," 1235000052330"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Юридический адрес:"})," г. Москва, ул. Салтыковская, д. 49А"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Фактический адрес:"})," г. Москва, ул. Салтыковская, д. 49А"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Почтовый адрес:"})," г. Москва, ул. Салтыковская, д. 49А"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Режим работы:"})," 11:00 - 23:00"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"Телефон:"})," +7 (968) 091-55-53"]}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"#667eea"},children:"E-mail:"})," info@tyteda.ru"]})]})})]})]})})]})});H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;const f4=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,p4=c.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,h4=c.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`,m4=c.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 3rem;
  }
`,g4=c.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`fadeIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,x4=c.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,b4=c.form`
  display: flex;
  flex-direction: column;
`,ma=c.label`
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`,Eh=c.input`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,y4=c.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,v4=c.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  input[type="file"] {
    display: none;
  }
  
  label {
    display: block;
    padding: 1rem;
    border-radius: 12px;
    border: 2px dashed rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #667eea;
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
    }
  }
`,w4=c.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,j4=c.div`
  color: #4CAF50;
  margin-top: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  animation: ${F`fadeIn`} 0.5s ease-out;
`,$h=c.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
`,Ph=c.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
`,Rh=c.ul`
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  
  li {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.5;
    font-size: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }
  }
`,S4=c.hr`
  margin: 2rem 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
`,k4=()=>{const[e,t]=C.useState(!1),r=n=>{n.preventDefault(),t(!0),n.target.reset(),setTimeout(()=>{t(!1)},5e3)};return i.jsx(f4,{children:i.jsx(p4,{children:i.jsxs(Se,{children:[i.jsx(h4,{children:"Отказ от товаров и возврат средств"}),i.jsxs(m4,{children:[i.jsxs(g4,{children:[i.jsxs(b4,{onSubmit:r,children:[i.jsx(ma,{children:i.jsx("strong",{children:"Дата заказа"})}),i.jsx(Eh,{type:"date",name:"date",required:!0}),i.jsx(ma,{children:i.jsx("strong",{children:"Причина возврата"})}),i.jsx(y4,{name:"reason",rows:4,required:!0,placeholder:"Опишите, с чем связан возврат или отмена заказа"}),i.jsx(ma,{children:i.jsx("strong",{children:"Номер карты для возврата"})}),i.jsx(Eh,{type:"text",name:"card",required:!0,placeholder:"4276••••••••5678",pattern:"[0-9\\s]{13,19}",inputMode:"numeric"}),i.jsx(ma,{children:i.jsx("strong",{children:"Прикрепите документ (чек или фото)"})}),i.jsxs(v4,{children:[i.jsx("input",{type:"file",name:"file",id:"fileInput"}),i.jsx("label",{htmlFor:"fileInput",children:"📎 Выберите файл"})]}),i.jsx(w4,{type:"submit",children:"Отправить"})]}),e&&i.jsx(j4,{children:"Форма успешно отправлена!"})]}),i.jsxs(x4,{children:[i.jsx($h,{children:"Возврат товара"}),i.jsx(Ph,{children:"Осуществляется в соответствии со статьёй 26.1 Федерального закона «О защите прав потребителей»:"}),i.jsxs(Rh,{children:[i.jsx("li",{children:"Потребитель вправе отказаться от товара до его получения, либо в течение 7 дней после передачи."}),i.jsx("li",{children:"Возврат возможен при сохранении товарного вида, упаковки и документа, подтверждающего покупку."}),i.jsx("li",{children:"Продавец обязан вернуть оплату за вычетом доставки в течение 10 календарных дней с момента получения запроса."}),i.jsx("li",{children:"Возврат индивидуальных товаров надлежащего качества не допускается."})]}),i.jsx(S4,{}),i.jsx($h,{children:"Отказ от услуги"}),i.jsx(Ph,{children:"Согласно статье 32 ФЗ «О защите прав потребителей»:"}),i.jsxs(Rh,{children:[i.jsx("li",{children:"Клиент вправе отказаться от услуги в любое время с компенсацией расходов, понесённых до отказа."}),i.jsx("li",{children:"При наличии недостатков услуги потребитель может потребовать:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"безвозмездного устранения;"}),i.jsx("li",{children:"уменьшения стоимости;"}),i.jsx("li",{children:"возмещения расходов на устранение своими силами или через третьих лиц."})]}),i.jsx("li",{children:"Чек будет автоматически направлен на электронную почту после оплаты."})]})]})]})]})})})};H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;const C4=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,z4=c.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,E4=c.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`,$4=c.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`,P4=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`,ga=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${F`fadeIn`} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,xa=c.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`,ba=c.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  
  p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`,R4=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,Ih=c.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h4 {
    color: #667eea;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 1rem;
  }
`,I4=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Th=c.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  h4 {
    color: #667eea;
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
  }
  
  .price {
    font-size: 1.3rem;
    font-weight: 600;
    color: #4CAF50;
    margin-bottom: 0.5rem;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`,T4=c.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,U=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .item {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    flex: 1;
  }
  
  .price {
    color: #ff6b6b;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: right;
    min-width: 120px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    
    .price {
      text-align: left;
      min-width: auto;
    }
  }
`,ya=c.span`
  font-size: 1.5rem;
  
  &.schedule {
    color: #4CAF50;
  }
  
  &.deposit {
    color: #ff9800;
  }
  
  &.rules {
    color: #ff6b6b;
  }
  
  &.damage {
    color: #9c27b0;
  }
`,N4=()=>i.jsx(C4,{children:i.jsx(z4,{children:i.jsxs(Se,{children:[i.jsx(E4,{children:"Правила посещения РК «Frantsuz»"}),i.jsx($4,{children:"Ознакомьтесь с правилами посещения клуба для комфортного отдыха всех гостей"}),i.jsxs(P4,{children:[i.jsxs(ga,{children:[i.jsxs(xa,{children:[i.jsx(ya,{className:"schedule",children:"🕒"}),"График работы"]}),i.jsx(ba,{children:i.jsxs(R4,{children:[i.jsxs(Ih,{children:[i.jsx("h4",{children:"Караоке"}),i.jsx("p",{children:"Вс-Чт: с 20:00 до 05:00"}),i.jsx("p",{children:"Пт и Сб: с 18:00 до 06:00"})]}),i.jsxs(Ih,{children:[i.jsx("h4",{children:"Бильярд"}),i.jsx("p",{children:"Вс-Чт: с 14:00 до 05:00"}),i.jsx("p",{children:"Пт и Сб: с 14:00 до 06:00"})]})]})})]}),i.jsxs(ga,{children:[i.jsxs(xa,{children:[i.jsx(ya,{className:"deposit",children:"💰"}),"Входные депозиты"]}),i.jsxs(ba,{children:[i.jsxs(I4,{children:[i.jsxs(Th,{children:[i.jsx("h4",{children:"Обычные дни"}),i.jsx("div",{className:"price",children:"1500 ₽"}),i.jsx("div",{className:"description",children:"Пн-Чт, Вс"})]}),i.jsxs(Th,{children:[i.jsx("h4",{children:"Выходные и праздники"}),i.jsx("div",{className:"price",children:"2000 ₽"}),i.jsx("div",{className:"description",children:"Пт, Сб, праздники"})]})]}),i.jsx("p",{children:i.jsx("strong",{children:"⚠️ В случае неиспользования суммы депозита, денежные средства не возвращаются!"})})]})]}),i.jsxs(ga,{children:[i.jsxs(xa,{children:[i.jsx(ya,{className:"rules",children:"📋"}),"Правила поведения"]}),i.jsxs(ba,{children:[i.jsx("p",{children:i.jsx("strong",{children:"На территории караоке-клуба запрещается:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"Приносить и распивать напитки, продукты питания, приобретённые за пределами клуба"}),i.jsx("li",{children:"Приносить огнестрельное, холодное, травматическое, газовое оружие, а также колющие и режущие предметы"}),i.jsx("li",{children:"Приносить наркотические и сильнодействующие вещества, а также приспособления для их употребления"}),i.jsx("li",{children:"Посещать клуб с домашними животными"}),i.jsx("li",{children:"Курить табачные изделия (разрешается только в строго отведённых местах)"}),i.jsx("li",{children:"Спать (строго запрещается)"}),i.jsx("li",{children:"Находиться в клубе в верхней одежде"}),i.jsx("li",{children:"Нарушать общественный порядок, вести себя некорректно"}),i.jsx("li",{children:"Самостоятельно производить настройку аппаратуры"}),i.jsx("li",{children:"Провоцировать конфликты, хамить персоналу и гостям клуба"}),i.jsx("li",{children:"Приходить в клуб в спортивной и грязной одежде, и совсем без неё"})]}),i.jsx("p",{children:i.jsx("strong",{children:"Сотрудники администрации имеют право отказать в посещении клуба без объяснения причин."})})]})]}),i.jsxs(ga,{children:[i.jsxs(xa,{children:[i.jsx(ya,{className:"damage",children:"🔧"}),"Возмещение убытков"]}),i.jsx(ba,{children:i.jsxs(T4,{children:[i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Падение микрофона"}),i.jsx("div",{className:"price",children:"1500 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Падение микрофона с нарушением работоспособности"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча телевизора 86 дюймов"}),i.jsx("div",{className:"price",children:"300000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча телевизора 32/40 дюймов"}),i.jsx("div",{className:"price",children:"20000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча, утеря пульта телевизора"}),i.jsx("div",{className:"price",children:"3000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча кондиционера"}),i.jsx("div",{className:"price",children:"50000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча пульта от кондиционера"}),i.jsx("div",{className:"price",children:"3000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча дверного полотна"}),i.jsx("div",{className:"price",children:"10000 ₽/м²"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча дверной коробки"}),i.jsx("div",{className:"price",children:"30000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча дверной ручки"}),i.jsx("div",{className:"price",children:"2000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча светильника"}),i.jsx("div",{className:"price",children:"5000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча деревянного стола"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча стеклянного стола"}),i.jsx("div",{className:"price",children:"40000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча мягкой мебели (кресло)"}),i.jsx("div",{className:"price",children:"15000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча мягкой мебели (диван)"}),i.jsx("div",{className:"price",children:"35000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча покрытия дивана (1 место)"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений оклеенной стены"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений окрашенной стены"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений зеркального полотна большого"}),i.jsx("div",{className:"price",children:"25000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений зеркального полотна малого"}),i.jsx("div",{className:"price",children:"7000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений раковин"}),i.jsx("div",{className:"price",children:"12000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Нанесение повреждений унитаза"}),i.jsx("div",{className:"price",children:"11000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Чрезмерное загрязнение (1 место)"}),i.jsx("div",{className:"price",children:"1000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча вешалки для одежды"}),i.jsx("div",{className:"price",children:"4000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча отопительной батареи"}),i.jsx("div",{className:"price",children:"8000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча скатерти"}),i.jsx("div",{className:"price",children:"2000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча шкафчиков"}),i.jsx("div",{className:"price",children:"18000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча проекторов"}),i.jsx("div",{className:"price",children:"50000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча пульта управления караоке-системы"}),i.jsx("div",{className:"price",children:"20000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча караоке системы АСТ-100"}),i.jsx("div",{className:"price",children:"200000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча светового оборудования"}),i.jsx("div",{className:"price",children:"30000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча звуковых колонок"}),i.jsx("div",{className:"price",children:"45000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча гитары"}),i.jsx("div",{className:"price",children:"10000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча рояля"}),i.jsx("div",{className:"price",children:"70000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча стойки для микрофона"}),i.jsx("div",{className:"price",children:"5000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча мягких подушек"}),i.jsx("div",{className:"price",children:"2000 ₽"})]}),i.jsxs(U,{children:[i.jsx("div",{className:"item",children:"Порча микшерного пульта"}),i.jsx("div",{className:"price",children:"50000 ₽"})]})]})})]})]})]})})});H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;const _4=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,M4=c.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,D4=c.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`,O4=c.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`,jn=c.section`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Sn=c.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${F`fadeIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,kn=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,Cn=c.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1.1rem;
  
  p {
    margin: 0 0 1.5rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
  
  strong {
    color: #ffffff;
    font-weight: 600;
  }
  
  ul {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.8);
      
      &:last-child {
        margin-bottom: 0;
      }
      
      @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 0.8rem;
      }
    }
  }
`,F4=c.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`,A4=c.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`,L4=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 1rem;
  }
`,Dr=c.span`
  font-size: 1.5rem;
  
  &.general {
    color: #667eea;
  }
  
  &.operator {
    color: #4CAF50;
  }
  
  &.processing {
    color: #ff9800;
  }
  
  &.clients {
    color: #9c27b0;
  }
  
  &.security {
    color: #f44336;
  }
  
  &.rights {
    color: #2196f3;
  }
  
  &.contact {
    color: #4CAF50;
  }
`,B4=()=>i.jsx(_4,{children:i.jsx(M4,{children:i.jsxs(Se,{children:[i.jsx(D4,{children:"Политика конфиденциальности"}),i.jsx(O4,{children:"Информация об обработке и защите персональных данных"}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"general",children:"📋"}),"Общие положения"]}),i.jsx(kn,{children:i.jsx(Cn,{children:i.jsx("p",{children:"Политика в отношении обработки персональных данных (далее — «Политика») направлена на защиту прав и свобод физических лиц, персональные данные которых обрабатывает развлекательный комплекс «ФРАНЦУЗ» (далее — «Оператор»). Политика разработана в соответствии с п. 2 ч. 1 ст. 18.1 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных» (далее — ФЗ «О персональных данных»). Политика содержит сведения, подлежащие раскрытию в соответствии с ч. 1 ст. 14 ФЗ «О персональных данных», и является общедоступным документом."})})})]}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"operator",children:"🏢"}),"Сведения об операторе"]}),i.jsx(kn,{children:i.jsx(Cn,{children:i.jsxs("p",{children:[i.jsx("strong",{children:"Оператор:"})," ООО «ЭкоСтар», адрес: г. Москва, ул. Салтыковская, д. 49А. Оператор осуществляет деятельность в сфере общественного питания и развлечений."]})})})]}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"processing",children:"⚙️"}),"Сведения об обработке персональных данных"]}),i.jsx(kn,{children:i.jsxs(Cn,{children:[i.jsx("p",{children:"Оператор обрабатывает персональные данные на законной и справедливой основе для выполнения требований законодательства РФ, исполнения договоров, оказания услуг, а также в иных законных целях. Персональные данные получаются непосредственно от субъектов персональных данных (далее – «ПДн») и обрабатываются автоматизированным и неавтоматизированным способами."}),i.jsx("p",{children:"В состав обработки входят: сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача (в том числе предоставление доступа), обезличивание, блокирование, удаление и уничтожение."})]})})]}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"clients",children:"👥"}),"Обработка персональных данных клиентов"]}),i.jsx(kn,{children:i.jsxs(Cn,{children:[i.jsx("p",{children:"Оператор обрабатывает персональные данные клиентов в рамках правоотношений, возникающих в процессе использования услуг, оформления заказов, бронирований и взаимодействия с сайтом. Обработка осуществляется в целях:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"приёма обращений и заявок;"}),i.jsx("li",{children:"оформления заказов;"}),i.jsx("li",{children:"направления уведомлений и сообщений;"}),i.jsx("li",{children:"исполнения условий договоров."})]}),i.jsx("p",{children:"Персональные данные обрабатываются с согласия клиента, выраженного путём оформления заказа, заявки или подписки на сайте."}),i.jsx("p",{children:"Оператор может обрабатывать следующие данные: фамилия, имя, отчество; адрес; контактный телефон; адрес электронной почты."}),i.jsxs("p",{children:[i.jsx("strong",{children:"Специальные категории персональных данных"})," (о здоровье, политических взглядах и т.п.) не обрабатываются."]})]})})]}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"security",children:"🔒"}),"Сведения об обеспечении безопасности персональных данных"]}),i.jsx(kn,{children:i.jsx(Cn,{children:i.jsx("p",{children:"Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий. Обеспечение безопасности осуществляется в соответствии со ст. 19 ФЗ «О персональных данных»."})})})]}),i.jsxs(jn,{children:[i.jsxs(Sn,{children:[i.jsx(Dr,{className:"rights",children:"⚖️"}),"Права субъектов персональных данных"]}),i.jsx(kn,{children:i.jsxs(Cn,{children:[i.jsx("p",{children:i.jsx("strong",{children:"Субъект персональных данных имеет право:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"получать сведения об обработке его персональных данных;"}),i.jsx("li",{children:"требовать уточнения, блокировки или уничтожения некорректных или незаконно полученных данных;"}),i.jsx("li",{children:"отозвать согласие на обработку персональных данных;"}),i.jsx("li",{children:"обжаловать действия Оператора в уполномоченный орган или в суд;"}),i.jsx("li",{children:"требовать возмещения убытков и компенсации морального вреда в случае нарушения прав."})]}),i.jsx("p",{children:"Для реализации своих прав субъект персональных данных может обратиться к Оператору лично либо направить письменный запрос по электронной почте."})]})})]}),i.jsxs(F4,{children:[i.jsxs(A4,{children:[i.jsx(Dr,{className:"contact",children:"📧"}),"Контактная информация"]}),i.jsxs(L4,{children:[i.jsx("span",{children:"📧"}),i.jsxs("span",{children:["Для реализации своих прав субъект персональных данных может обратиться к Оператору лично либо направить письменный запрос по электронной почте: ",i.jsx("a",{href:"mailto:info@tyteda.ru",children:"info@tyteda.ru"})]})]})]})]})})});H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;H`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;const U4=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,W4=c.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,H4=c.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`,Y4=c.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`,V4=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: ${F`fadeIn`} 0.8s ease-out;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`,G4=c.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`,X4=c.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,q4=c.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,K4=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`,va=c.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`,wa=c.div`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  width: 40px;
  text-align: center;
  animation: ${F`pulse`} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    margin-right: 1rem;
    width: 30px;
  }
`,ja=c.div`
  flex: 1;
`,Sa=c.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,ka=c.div`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
  
  a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,Q4=c.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${F`slideIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`,J4=c.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 2rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`,Z4=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,fc=c.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }
`,pc=c.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #667eea;
`,hc=c.h4`
  color: #667eea;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
`,mc=c.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  
  a {
    color: #667eea;
    text-decoration: none;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
`,eC=()=>i.jsx(U4,{children:i.jsx(W4,{children:i.jsxs(Se,{children:[i.jsx(H4,{children:"Реквизиты организации"}),i.jsx(Y4,{children:'Полная информация о компании ООО "ЭкоСтар"'}),i.jsxs(V4,{children:[i.jsxs(G4,{children:[i.jsx(X4,{children:'ООО "ЭкоСтар"'}),i.jsx(q4,{children:"Развлекательный комплекс «ФРАНЦУЗ»"})]}),i.jsxs(K4,{children:[i.jsxs(va,{children:[i.jsx(wa,{children:"🏢"}),i.jsxs(ja,{children:[i.jsx(Sa,{children:"ОГРН / ИНН"}),i.jsx(ka,{children:"1235000052330 / 5041214554"})]})]}),i.jsxs(va,{children:[i.jsx(wa,{children:"📞"}),i.jsxs(ja,{children:[i.jsx(Sa,{children:"Телефон"}),i.jsx(ka,{children:i.jsx("a",{href:"tel:+79680915553",children:"+7 968 091-55-53"})})]})]}),i.jsxs(va,{children:[i.jsx(wa,{children:"🕒"}),i.jsxs(ja,{children:[i.jsx(Sa,{children:"Режим работы"}),i.jsx(ka,{children:"11:00 – 23:00"})]})]}),i.jsxs(va,{children:[i.jsx(wa,{children:"📧"}),i.jsxs(ja,{children:[i.jsx(Sa,{children:"E-mail"}),i.jsx(ka,{children:i.jsx("a",{href:"mailto:info@tyteda.ru",children:"info@tyteda.ru"})})]})]})]})]}),i.jsxs(Q4,{children:[i.jsx(J4,{children:"📍 Адреса"}),i.jsxs(Z4,{children:[i.jsxs(fc,{children:[i.jsx(pc,{children:"📮"}),i.jsx(hc,{children:"Почтовый адрес"}),i.jsx(mc,{children:"г. Москва, ул. Салтыковская, д. 49А"})]}),i.jsxs(fc,{children:[i.jsx(pc,{children:"🏠"}),i.jsx(hc,{children:"Физический адрес"}),i.jsx(mc,{children:"г. Москва, ул. Салтыковская, д. 49А"})]}),i.jsxs(fc,{children:[i.jsx(pc,{children:"⚖️"}),i.jsx(hc,{children:"Юридический адрес"}),i.jsx(mc,{children:"г. Москва, ул. Салтыковская, д. 49А"})]})]})]})]})})}),qr={create:async e=>{var t,r;try{return(await Y.post("/banquet-requests",e)).data}catch(n){throw console.error("❌ Ошибка создания заявки на банкет:",n),new Error(((r=(t=n.response)==null?void 0:t.data)==null?void 0:r.message)||"Ошибка отправки заявки")}},getAll:async e=>{var t,r;try{return(await Y.get("/banquet-requests",{params:e})).data}catch(n){throw console.error("❌ Ошибка получения заявок на банкеты:",n),new Error(((r=(t=n.response)==null?void 0:t.data)==null?void 0:r.message)||"Ошибка получения заявок")}},getById:async e=>{var t,r;try{return(await Y.get(`/banquet-requests/${e}`)).data}catch(n){throw console.error("❌ Ошибка получения заявки:",n),new Error(((r=(t=n.response)==null?void 0:t.data)==null?void 0:r.message)||"Ошибка получения заявки")}},updateStatus:async(e,t)=>{var r,n;try{return(await Y.patch(`/banquet-requests/${e}/status`,{status:t})).data}catch(o){throw console.error("❌ Ошибка обновления статуса заявки:",o),new Error(((n=(r=o.response)==null?void 0:r.data)==null?void 0:n.message)||"Ошибка обновления статуса")}},delete:async e=>{var t,r;try{return(await Y.delete(`/banquet-requests/${e}`)).data}catch(n){throw console.error("❌ Ошибка удаления заявки:",n),new Error(((r=(t=n.response)==null?void 0:t.data)==null?void 0:r.message)||"Ошибка удаления заявки")}},getStats:async()=>{var e,t;try{return(await Y.get("/banquet-requests/stats/overview")).data}catch(r){throw console.error("❌ Ошибка получения статистики:",r),new Error(((t=(e=r.response)==null?void 0:e.data)==null?void 0:t.message)||"Ошибка получения статистики")}}},tC=H`
  from { opacity: 0; }
  to { opacity: 1; }
`,rC=H`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,nC=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${F`${tC} 0.3s ease-out`};
  padding: 1rem;
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,iC=c.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${F`${rC} 0.3s ease-out`};
  
  /* Стилизация скроллбара для Webkit браузеров (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 10px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95vh;
    border-radius: 16px;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    max-width: 98%;
    max-height: 98vh;
    border-radius: 12px;
  }
`,oC=c.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 1rem 1rem 0.5rem;
  }
`,aC=c.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`,sC=c.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`,lC=c.div`
  padding: 2rem;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,cC=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,zn=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  /* Адаптивность для планшетов и мобильных */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,We=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,He=c.label`
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,dr=c.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`,Ii=c.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`,dC=c.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`,uC=c.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`,fC=c.div`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #10b981;
  text-align: center;
  margin-top: 1rem;
`,pC=c.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ef4444;
  text-align: center;
  margin-top: 1rem;
`,hC=({isOpen:e,onClose:t})=>{const[r,n]=C.useState({eventDate:"",eventTime:"",endTime:"",guestCount:0,eventType:"",budget:"",banquetType:"",specialMenu:"",music:"",decor:"",name:"",phone:"",email:"",additionalWishes:""}),[o,a]=C.useState(!1),[s,l]=C.useState("idle"),[d,u]=C.useState(""),p=(m,b)=>{n(y=>({...y,[m]:b}))},h=async m=>{m.preventDefault(),a(!0),l("idle"),u("");try{await qr.create(r),l("success"),n({eventDate:"",eventTime:"",endTime:"",guestCount:0,eventType:"",budget:"",banquetType:"",specialMenu:"",music:"",decor:"",name:"",phone:"",email:"",additionalWishes:""}),setTimeout(()=>{t(),l("idle")},3e3)}catch(b){l("error"),u(b.message||"Произошла ошибка при отправке заявки")}finally{a(!1)}};return e?i.jsx(nC,{$isOpen:e,onClick:t,children:i.jsxs(iC,{onClick:m=>m.stopPropagation(),children:[i.jsxs(oC,{children:[i.jsx(aC,{children:"Заявка на банкет"}),i.jsx(sC,{onClick:t,children:"×"})]}),i.jsx(lC,{children:i.jsxs(cC,{onSubmit:h,children:[i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Дата мероприятия *"}),i.jsx(dr,{type:"date",value:r.eventDate,onChange:m=>p("eventDate",m.target.value),required:!0})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Время начала *"}),i.jsx(dr,{type:"time",value:r.eventTime,onChange:m=>p("eventTime",m.target.value),required:!0})]})]}),i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Время окончания"}),i.jsx(dr,{type:"time",value:r.endTime,onChange:m=>p("endTime",m.target.value)})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Количество гостей *"}),i.jsx(dr,{type:"number",min:"1",value:r.guestCount||"",onChange:m=>p("guestCount",parseInt(m.target.value)||0),required:!0})]})]}),i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Тип мероприятия *"}),i.jsxs(Ii,{value:r.eventType,onChange:m=>p("eventType",m.target.value),required:!0,children:[i.jsx("option",{value:"",children:"Выберите тип"}),i.jsx("option",{value:"corporate",children:"Корпоратив"}),i.jsx("option",{value:"birthday",children:"День рождения"}),i.jsx("option",{value:"wedding",children:"Свадьба"}),i.jsx("option",{value:"anniversary",children:"Юбилей"}),i.jsx("option",{value:"other",children:"Другое"})]})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Бюджет *"}),i.jsxs(Ii,{value:r.budget,onChange:m=>p("budget",m.target.value),required:!0,children:[i.jsx("option",{value:"",children:"Выберите бюджет"}),i.jsx("option",{value:"low",children:"До 50,000 ₽"}),i.jsx("option",{value:"medium",children:"50,000 - 100,000 ₽"}),i.jsx("option",{value:"high",children:"100,000 - 200,000 ₽"}),i.jsx("option",{value:"premium",children:"Более 200,000 ₽"})]})]})]}),i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Тип банкета"}),i.jsxs(Ii,{value:r.banquetType,onChange:m=>p("banquetType",m.target.value),children:[i.jsx("option",{value:"",children:"Выберите тип"}),i.jsx("option",{value:"buffet",children:"Фуршет"}),i.jsx("option",{value:"seated",children:"Сидячий"}),i.jsx("option",{value:"cocktail",children:"Коктейль"}),i.jsx("option",{value:"banquet",children:"Банкет"})]})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Особые пожелания по меню"}),i.jsx(dr,{type:"text",value:r.specialMenu,onChange:m=>p("specialMenu",m.target.value),placeholder:"Например: вегетарианское, без глютена"})]})]}),i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Музыка"}),i.jsxs(Ii,{value:r.music,onChange:m=>p("music",m.target.value),children:[i.jsx("option",{value:"",children:"Выберите музыку"}),i.jsx("option",{value:"dj",children:"DJ"}),i.jsx("option",{value:"live",children:"Живая музыка"}),i.jsx("option",{value:"karaoke",children:"Караоке"}),i.jsx("option",{value:"none",children:"Без музыки"})]})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Декор"}),i.jsxs(Ii,{value:r.decor,onChange:m=>p("decor",m.target.value),children:[i.jsx("option",{value:"",children:"Выберите декор"}),i.jsx("option",{value:"simple",children:"Простой"}),i.jsx("option",{value:"elegant",children:"Элегантный"}),i.jsx("option",{value:"festive",children:"Праздничный"}),i.jsx("option",{value:"thematic",children:"Тематический"}),i.jsx("option",{value:"none",children:"Без декора"})]})]})]}),i.jsxs(zn,{children:[i.jsxs(We,{children:[i.jsx(He,{children:"Имя *"}),i.jsx(dr,{type:"text",value:r.name,onChange:m=>p("name",m.target.value),required:!0})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Телефон *"}),i.jsx(dr,{type:"tel",value:r.phone,onChange:m=>p("phone",m.target.value),required:!0})]})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Email"}),i.jsx(dr,{type:"email",value:r.email,onChange:m=>p("email",m.target.value),placeholder:"example@email.com"})]}),i.jsxs(We,{children:[i.jsx(He,{children:"Дополнительные пожелания"}),i.jsx(dC,{value:r.additionalWishes,onChange:m=>p("additionalWishes",m.target.value),placeholder:"Расскажите о ваших особых пожеланиях...",rows:4})]}),i.jsx(uC,{type:"submit",disabled:o,children:o?"Отправка...":"Отправить заявку"}),s==="success"&&i.jsx(fC,{children:"✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время."}),s==="error"&&i.jsxs(pC,{children:["❌ ",d]})]})})]})}):null};H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;const mC=H`
  0%, 100% { box-shadow: 0 0 20px rgba(123, 97, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(123, 97, 255, 0.6); }
`,gC=c.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(123, 97, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 15px rgba(123, 97, 255, 0.6);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
`,xC=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 10px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.03);
`,bC=c.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${F`fadeIn`} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,yC=c.p`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${F`fadeIn`} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,vC=c.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  animation: ${F`fadeIn`} 1s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,wC=c.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,jC=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,gc=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    animation: ${F`pulse`} 2s ease-in-out infinite;
  }
  
  .label {
    font-size: 0.9rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .value {
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 600;
  }
`,SC=c.button`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  animation: ${F`${mC} 2s ease-in-out infinite`};
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`,kC=()=>{const[e,t]=C.useState(!1),r=()=>t(!0),n=()=>t(!1);return i.jsxs(gC,{children:[i.jsxs(xC,{children:[i.jsx(bC,{children:"Банкеты и мероприятия"}),i.jsx(yC,{children:"Организуем незабываемые банкеты, корпоративы и торжества в стильной атмосфере клуба Frantsuz"}),i.jsxs(vC,{children:[i.jsx(wC,{children:"Забронировать банкет"}),i.jsxs(jC,{children:[i.jsxs(gc,{children:[i.jsx("div",{className:"icon",children:"📞"}),i.jsx("div",{className:"label",children:"Телефон"}),i.jsx("div",{className:"value",children:"+7 968 091-55-50"})]}),i.jsxs(gc,{children:[i.jsx("div",{className:"icon",children:"📧"}),i.jsx("div",{className:"label",children:"Email"}),i.jsx("div",{className:"value",children:"order@wetop.ru"})]}),i.jsxs(gc,{children:[i.jsx("div",{className:"icon",children:"⏰"}),i.jsx("div",{className:"label",children:"Время работы"}),i.jsx("div",{className:"value",children:"11:00 - 23:00"})]})]}),i.jsx(SC,{onClick:r,children:"Оставить заявку на банкет"})]})]}),i.jsx(hC,{isOpen:e,onClose:n})]})},Wx=async(e,t=3,r)=>{let n=null;for(let o=1;o<=t;o++){r&&r(o);try{return await new Promise((a,s)=>{const l="dgclbjhp0",d="frantsuz-club";if(console.log(`🚀 Попытка ${o}/${t} загрузки в Cloudinary:`,{cloudName:l,uploadPreset:d,fileName:e.name,fileSize:e.size,fileType:e.type}),!e||e.size===0){const b="Файл пустой или поврежден";console.error("❌",b),s(new Error(b));return}const u=new FormData;u.append("file",e),u.append("upload_preset",d),u.append("folder","menu-items");const p=`https://api.cloudinary.com/v1_1/${l}/image/upload`;console.log("📤 Отправляем запрос на:",p);const h=new AbortController,m=setTimeout(()=>h.abort(),3e4);fetch(p,{method:"POST",body:u,signal:h.signal}).then(b=>(clearTimeout(m),console.log("📥 Получен ответ от Cloudinary:",b.status,b.statusText),b.ok?b.json():b.text().then(y=>{console.error("❌ Ответ Cloudinary:",y),s(new Error(`Ошибка Cloudinary: ${b.status} ${b.statusText}`))}))).then(b=>{if(console.log("✅ Успешная загрузка:",b),b.secure_url)a(b.secure_url);else{const y="Не получен URL изображения от Cloudinary";console.error("❌",y,b),s(new Error(y))}}).catch(b=>{if(clearTimeout(m),console.error(`❌ Ошибка загрузки в Cloudinary (попытка ${o}):`,b),b.name==="AbortError")s(new Error("Превышено время ожидания загрузки"));else{if(b.message&&(b.message.includes("Failed to fetch")||b.message.includes("ERR_PROXY_CONNECTION_FAILED")||b.message.includes("ERR_NETWORK")||b.message.includes("ERR_INTERNET_DISCONNECTED")))throw n=b,b;s(b)}})})}catch(a){if(n=a,o===t)throw console.error(`❌ Все ${t} попытки загрузки не удались. Последняя ошибка:`,a),a instanceof Error?a.message.includes("Failed to fetch")||a.message.includes("ERR_PROXY_CONNECTION_FAILED")?new Error("Проблема с сетевым подключением. Проверьте интернет-соединение и попробуйте снова."):a.message.includes("Превышено время ожидания")?new Error("Загрузка занимает слишком много времени. Попробуйте еще раз."):a:new Error("Неизвестная ошибка при загрузке изображения");const s=Math.min(1e3*Math.pow(2,o-1),5e3);console.log(`⏳ Ожидание ${s}ms перед повторной попыткой...`),await new Promise(l=>setTimeout(l,s))}}throw n||new Error("Неизвестная ошибка при загрузке изображения")},CC=c.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`,zC=c.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,EC=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ca=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,za=c.label`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,xc=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;c.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;const $C=c.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,PC=c.div`
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.02);

  &:hover {
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`,RC=c.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`,IC=c.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.2);
`,TC=c.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(81, 207, 102, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(81, 207, 102, 0.2);
`,Nh=({onZoneCreated:e})=>{const[t,r]=C.useState({name:"",openTime:"",closeTime:"",imageUrl:""}),[n,o]=C.useState([]),[a,s]=C.useState(!1),[l,d]=C.useState(!1),[u,p]=C.useState(!1),h=(y,v)=>{r(w=>({...w,[y]:v}))},m=async y=>{var w;const v=(w=y.target.files)==null?void 0:w[0];if(v){p(!0);try{const x=await Wx(v);h("imageUrl",x)}catch{o(["Ошибка загрузки изображения"])}finally{p(!1)}}},b=async y=>{y.preventDefault(),o([]),s(!1),d(!0);const v=[];if(t.name||v.push("Введите название зала"),t.openTime||v.push("Укажите время открытия"),t.closeTime||v.push("Укажите время закрытия"),t.imageUrl||v.push("Загрузите изображение"),v.length>0){o(v),d(!1);return}try{console.log("Создание зоны:",t),await q6(t),s(!0),r({name:"",openTime:"",closeTime:"",imageUrl:""}),e&&e()}catch{o(["Ошибка создания зала"])}finally{d(!1)}};return i.jsx(un,{children:i.jsxs(CC,{children:[i.jsx(zC,{children:"Создание зала"}),i.jsxs(EC,{onSubmit:b,children:[i.jsxs(Ca,{children:[i.jsx(za,{children:"Название зала"}),i.jsx(xc,{type:"text",placeholder:"Например: Караоке, Бильярд",value:t.name,onChange:y=>h("name",y.target.value)})]}),i.jsxs(Ca,{children:[i.jsx(za,{children:"Время открытия"}),i.jsx(xc,{type:"time",value:t.openTime,onChange:y=>h("openTime",y.target.value)})]}),i.jsxs(Ca,{children:[i.jsx(za,{children:"Время закрытия"}),i.jsx(xc,{type:"time",value:t.closeTime,onChange:y=>h("closeTime",y.target.value)})]}),i.jsxs(Ca,{children:[i.jsx(za,{children:"Изображение зала"}),i.jsxs(PC,{children:[i.jsx("input",{type:"file",accept:"image/*",onChange:m,style:{display:"none"},id:"image-upload",disabled:u}),i.jsx("label",{htmlFor:"image-upload",style:{cursor:u?"not-allowed":"pointer"},children:u?"Загрузка...":t.imageUrl?"Изменить изображение":"Нажмите для загрузки изображения"}),t.imageUrl&&i.jsx(RC,{src:t.imageUrl,alt:"Preview"})]})]}),n.length>0&&i.jsx("div",{children:n.map((y,v)=>i.jsx(IC,{children:y},v))}),a&&i.jsx(TC,{children:"Зал успешно создан!"}),i.jsx($C,{type:"submit",disabled:l,children:l?"Создается...":"Создать зал"})]})]})})},NC=c.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: rgba(255, 255, 255, 0.02);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(20px);
`,_C=c.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`,_h=c.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Mh=c.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$active?"#ffffff":"#a0a0a0"};
  border: ${e=>e.$active?"none":"1px solid rgba(255, 255, 255, 0.2)"};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.15)"};
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,MC=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${e=>e.$isOpen?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`,DC=c.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  color: #fff;
  min-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,OC=c.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,FC=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ea=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,$a=c.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Dh=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Oh=c.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`,AC=c.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,LC=c.button`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  margin-left: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,BC=c.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,UC=c.div`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,WC=c.div`
  text-align: center;
  padding: 2rem;
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,HC=c.div`
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,YC=c.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  background: ${e=>e.$type==="success"?"linear-gradient(135deg, #51cf66 0%, #40c057 100%)":"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"};
  color: white;
  border-radius: 12px;
  z-index: 10000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,VC=c.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`,GC=c.div`
  font-size: 0.9rem;
  opacity: 0.9;
`,XC=({zoneId:e,zoneName:t,onSave:r})=>{const[n,o]=C.useState([]),[a,s]=C.useState(1),[l,d]=C.useState(!1),[u,p]=C.useState(!0),[h,m]=C.useState(null),[b,y]=C.useState({type:"success",title:"",message:"",isVisible:!1}),[v,w]=C.useState({label:"",type:"table",floor:1,seats:0}),x=C.useRef(null);C.useEffect(()=>{(async()=>{try{p(!0),m(null);const P=await Bx(e);o(P)}catch(P){m("Ошибка загрузки элементов зоны"),console.error("Ошибка загрузки элементов зоны:",P)}finally{p(!1)}})()},[e]);const f=(E,P,N)=>{o(D=>D.map(A=>A.id===E?{...A,x:P,y:N}:A))},g=(E,P,N)=>{o(D=>D.map(A=>A.id===E?{...A,width:P,height:N}:A))},S=E=>{const P={id:Date.now(),label:E.label,type:E.type,floor:E.floor,seats:E.seats,x:50,y:50,width:200,height:100,zoneId:e,isBooking:!1,isActive:!0};o(N=>[...N,P]),d(!1),w({label:"",type:"table",floor:1,seats:0}),k("success","Элемент добавлен!",`"${E.label}" добавлен в зону`)},j=E=>{E.preventDefault(),S(v)},k=(E,P,N)=>{y({type:E,title:P,message:N,isVisible:!0}),setTimeout(()=>{y(D=>({...D,isVisible:!1}))},3e3)},z=async()=>{try{await K6(e,n),r&&r(n),k("success","Успешно сохранено!",`Элементы зоны "${t||"Зона"}" сохранены`),console.log("Сохранено:",n)}catch(E){k("error","Ошибка сохранения","Не удалось сохранить элементы зоны. Попробуйте еще раз."),console.error("Ошибка сохранения:",E)}},R=n.filter(E=>E.floor===a);return i.jsxs(un,{children:[t&&i.jsxs(UC,{children:["Конструктор зоны: ",t]}),i.jsxs(_C,{children:[i.jsx(_h,{onClick:()=>d(!0),children:"Добавить элемент"}),i.jsx(_h,{onClick:z,children:"Сохранить зону"}),i.jsx(Mh,{$active:a===1,onClick:()=>s(1),children:"1 этаж"}),i.jsx(Mh,{$active:a===2,onClick:()=>s(2),children:"2 этаж"})]}),u?i.jsx(WC,{children:"Загрузка элементов зоны..."}):h?i.jsx(HC,{children:h}):i.jsx(NC,{ref:x,children:R.map(E=>i.jsx(Ax,{item:E,updatePosition:f,updateSize:g},E.id))}),i.jsx(MC,{$isOpen:l,children:i.jsxs(DC,{children:[i.jsx(OC,{children:"Добавить элемент"}),i.jsxs(FC,{onSubmit:j,children:[i.jsxs(Ea,{children:[i.jsx($a,{children:"Название"}),i.jsx(Dh,{type:"text",value:v.label,onChange:E=>w(P=>({...P,label:E.target.value})),placeholder:"Например: Стол 1",required:!0})]}),i.jsxs(Ea,{children:[i.jsx($a,{children:"Тип"}),i.jsxs(Oh,{value:v.type,onChange:E=>w(P=>({...P,type:E.target.value})),children:[i.jsx("option",{value:"table",children:"Стол"}),i.jsx("option",{value:"stage",children:"Сцена"}),i.jsx("option",{value:"bar",children:"Бар"}),i.jsx("option",{value:"entrance",children:"Вход"})]})]}),i.jsxs(Ea,{children:[i.jsx($a,{children:"Этаж"}),i.jsxs(Oh,{value:v.floor,onChange:E=>w(P=>({...P,floor:parseInt(E.target.value)})),children:[i.jsx("option",{value:1,children:"1 этаж"}),i.jsx("option",{value:2,children:"2 этаж"})]})]}),i.jsxs(Ea,{children:[i.jsx($a,{children:"Количество мест"}),i.jsx(Dh,{type:"number",value:v.seats,onChange:E=>w(P=>({...P,seats:parseInt(E.target.value)||0})),placeholder:"0"})]}),i.jsxs(BC,{children:[i.jsx(AC,{type:"submit",children:"Добавить"}),i.jsx(LC,{type:"button",onClick:()=>d(!1),children:"Отмена"})]})]})]})}),b.isVisible&&i.jsxs(YC,{$type:b.type,children:[i.jsx(VC,{children:b.title}),i.jsx(GC,{children:b.message})]})]})},qC=c.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,KC=c.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,QC=c.p`
  color: #a0a0a0;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
`,JC=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,ZC=c.div`
  background: ${e=>e.$selected?"linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)":"rgba(255, 255, 255, 0.03)"};
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid ${e=>e.$selected?"rgba(102, 126, 234, 0.5)":"rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(20px);
  box-shadow: ${e=>e.$selected?"0 8px 32px rgba(102, 126, 234, 0.3)":"0 4px 16px rgba(0, 0, 0, 0.2)"};

  &:hover {
    background: ${e=>e.$selected?"linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)":"rgba(255, 255, 255, 0.08)"};
    transform: translateY(-4px);
    box-shadow: ${e=>e.$selected?"0 12px 40px rgba(102, 126, 234, 0.4)":"0 8px 24px rgba(0, 0, 0, 0.3)"};
  }

  &:active {
    transform: translateY(-2px);
  }
`,e8=c.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
`,t8=c.p`
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
`,r8=c.div`
  margin-top: 1rem;
  font-size: 0.85rem;
  opacity: 0.7;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,n8=c.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,i8=({zones:e=[],onZoneSelect:t,selectedZone:r,onContinue:n,onRefresh:o})=>(console.log("🔍 ZoneSelector получил zones:",e),console.log("🔍 Тип zones:",typeof e),console.log("🔍 Array.isArray(zones):",Array.isArray(e)),console.log("🔍 zones.length:",e==null?void 0:e.length),i.jsx(un,{children:i.jsxs(qC,{children:[i.jsx(KC,{children:"Выберите зал для конструктора"}),i.jsx(QC,{children:"Выберите зал, для которого хотите создать столы и элементы"}),o&&i.jsx("div",{style:{textAlign:"center",marginBottom:"1rem"},children:i.jsx("button",{onClick:o,style:{padding:"0.5rem 1rem",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",color:"#fff",cursor:"pointer",fontSize:"0.9rem"},children:"🔄 Обновить список зон"})}),i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.9rem",color:"#ccc"},children:[i.jsx("strong",{children:"Отладка:"})," Получено зон: ",(e==null?void 0:e.length)||0," | Тип: ",typeof e," | Массив: ",Array.isArray(e)?"Да":"Нет"]}),i.jsx(JC,{children:e&&e.length>0?e.map(a=>i.jsxs(ZC,{$selected:(r==null?void 0:r.id)===a.id,onClick:()=>t(a),children:[i.jsx(e8,{children:a.name}),i.jsxs(t8,{children:["Время работы: ",a.openTime," - ",a.closeTime]}),i.jsx(r8,{children:i.jsxs("div",{children:["Зал: ",a.name]})})]},a.id)):i.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ccc",fontSize:"1.1rem",gridColumn:"1 / -1"},children:"Зоны не найдены. Создайте зоны через админ-панель."})}),r&&i.jsxs(n8,{onClick:n,children:['Открыть конструктор для зоны "',r.name,'"']})]})})),o8=c.div`
  color: #fff;
`,a8=c.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`,En=c.th`
  padding: 1.5rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,$n=c.td`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Ti=c.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          }
        `;case"secondary":return`
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover { 
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }
        `;default:return`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          }
        `}}}

  &:active {
    transform: translateY(0);
  }
`,s8=c.div`
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
  backdrop-filter: blur(10px);
`,l8=c.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,c8=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,bc=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,yc=c.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Fh=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,d8=c.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,u8=c.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,f8=c.span`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: ${e=>e.$isActive?"linear-gradient(135deg, #51cf66 0%, #40c057 100%)":"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;c.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;c.h3`
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;const p8=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,a]=C.useState(!1),[s,l]=C.useState(null),[d,u]=C.useState({name:"",description:"",sortOrder:0});C.useEffect(()=>{p()},[]);const p=async()=>{try{n(!0);const w=await he.getMenuTypes();t(w)}catch(w){console.error("Ошибка загрузки типов меню:",w)}finally{n(!1)}},h=()=>{l(null),u({name:"",description:"",sortOrder:0}),a(!0)},m=w=>{l(w),u({name:w.name,description:w.description||"",sortOrder:w.sortOrder}),a(!0)},b=async w=>{var x,f;if(window.confirm("Вы уверены, что хотите удалить этот тип меню?"))try{await he.deleteMenuType(w),await p()}catch(g){console.error("Ошибка удаления типа меню:",g);const S=((f=(x=g.response)==null?void 0:x.data)==null?void 0:f.error)||g.message||"Ошибка удаления типа меню";alert(`Ошибка: ${S}`)}},y=async w=>{w.preventDefault();try{const x=d.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),f={...d,slug:x};s?await he.updateMenuType(s.id,f):await he.createMenuType(f),a(!1),await p()}catch(x){console.error("Ошибка сохранения типа меню:",x)}},v=(w,x)=>{u(f=>({...f,[w]:x}))};return r?i.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):i.jsxs(o8,{children:[i.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Типы меню"}),i.jsx(Ti,{onClick:h,children:"+ Добавить тип меню"}),i.jsxs(a8,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(En,{children:"Название"}),i.jsx(En,{children:"Slug"}),i.jsx(En,{children:"Описание"}),i.jsx(En,{children:"Статус"}),i.jsx(En,{children:"Порядок"}),i.jsx(En,{children:"Действия"})]})}),i.jsx("tbody",{children:e.map(w=>i.jsxs("tr",{children:[i.jsx($n,{children:w.name}),i.jsx($n,{children:w.slug}),i.jsx($n,{children:w.description||"-"}),i.jsx($n,{children:i.jsx(f8,{$isActive:w.isActive,children:w.isActive?"Активен":"Неактивен"})}),i.jsx($n,{children:w.sortOrder}),i.jsxs($n,{children:[i.jsx(Ti,{$variant:"secondary",onClick:()=>m(w),children:"Редактировать"}),i.jsx(Ti,{$variant:"danger",onClick:()=>b(w.id),children:"Удалить"})]})]},w.id))})]}),i.jsx(s8,{$isOpen:o,children:i.jsxs(l8,{children:[i.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:s?"Редактировать тип меню":"Добавить тип меню"}),i.jsxs(c8,{onSubmit:y,children:[i.jsxs(bc,{children:[i.jsx(yc,{children:"Название"}),i.jsx(Fh,{type:"text",value:d.name,onChange:w=>v("name",w.target.value),placeholder:"Например: Основное меню",required:!0})]}),i.jsxs(bc,{children:[i.jsx(yc,{children:"Описание"}),i.jsx(d8,{value:d.description,onChange:w=>v("description",w.target.value),placeholder:"Описание типа меню"})]}),i.jsxs(bc,{children:[i.jsx(yc,{children:"Порядок сортировки"}),i.jsx(Fh,{type:"number",value:d.sortOrder,onChange:w=>v("sortOrder",parseInt(w.target.value)),min:"0"})]}),i.jsxs(u8,{children:[i.jsx(Ti,{type:"submit",children:s?"Сохранить":"Создать"}),i.jsx(Ti,{type:"button",$variant:"secondary",onClick:()=>a(!1),children:"Отмена"})]})]})]})})]})},h8=c.div`
  color: #fff;
`,m8=c.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`,Or=c.th`
  padding: 1.5rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Fr=c.td`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Ni=c.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          }
        `;case"secondary":return`
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover { 
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }
        `;default:return`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          }
        `}}}

  &:active {
    transform: translateY(0);
  }
`,g8=c.div`
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
  backdrop-filter: blur(10px);
`,x8=c.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,b8=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Pa=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ra=c.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Ah=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,y8=c.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,v8=c.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #1a1a2e;
    color: #fff;
    padding: 0.5rem;
  }
`,w8=c.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,j8=c.span`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: ${e=>e.$isActive?"linear-gradient(135deg, #51cf66 0%, #40c057 100%)":"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;c.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;c.h3`
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;const S8=()=>{const[e,t]=C.useState([]),[r,n]=C.useState([]),[o,a]=C.useState(!0),[s,l]=C.useState(!1),[d,u]=C.useState(null),[p,h]=C.useState({name:"",description:"",menuTypeId:0,sortOrder:0});C.useEffect(()=>{m()},[]);const m=async()=>{try{a(!0);const[f,g]=await Promise.all([he.getMenuCategories(),he.getMenuTypes()]);t(f),n(g)}catch(f){console.error("Ошибка загрузки данных:",f)}finally{a(!1)}},b=()=>{u(null),h({name:"",description:"",menuTypeId:0,sortOrder:0}),l(!0)},y=f=>{u(f),h({name:f.name,description:f.description||"",menuTypeId:f.menuTypeId,sortOrder:f.sortOrder}),l(!0)},v=async f=>{var g,S;if(window.confirm("Вы уверены, что хотите удалить эту категорию?"))try{await he.deleteMenuCategory(f),await m()}catch(j){console.error("Ошибка удаления категории:",j);const k=((S=(g=j.response)==null?void 0:g.data)==null?void 0:S.error)||j.message||"Ошибка удаления категории";alert(`Ошибка: ${k}`)}},w=async f=>{f.preventDefault();try{const g=p.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),S={...p,slug:g};d?await he.updateMenuCategory(d.id,S):await he.createMenuCategory(S),l(!1),await m()}catch(g){console.error("Ошибка сохранения категории:",g)}},x=(f,g)=>{h(S=>({...S,[f]:g}))};return o?i.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):i.jsxs(h8,{children:[i.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Категории меню"}),i.jsx(Ni,{onClick:b,children:"+ Добавить категорию"}),i.jsxs(m8,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(Or,{children:"Название"}),i.jsx(Or,{children:"Slug"}),i.jsx(Or,{children:"Тип меню"}),i.jsx(Or,{children:"Описание"}),i.jsx(Or,{children:"Статус"}),i.jsx(Or,{children:"Порядок"}),i.jsx(Or,{children:"Действия"})]})}),i.jsx("tbody",{children:e.map(f=>{const g=r.find(S=>S.id===f.menuTypeId);return i.jsxs("tr",{children:[i.jsx(Fr,{children:f.name}),i.jsx(Fr,{children:f.slug}),i.jsx(Fr,{children:(g==null?void 0:g.name)||"Неизвестно"}),i.jsx(Fr,{children:f.description||"-"}),i.jsx(Fr,{children:i.jsx(j8,{$isActive:f.isActive,children:f.isActive?"Активна":"Неактивна"})}),i.jsx(Fr,{children:f.sortOrder}),i.jsxs(Fr,{children:[i.jsx(Ni,{$variant:"secondary",onClick:()=>y(f),children:"Редактировать"}),i.jsx(Ni,{$variant:"danger",onClick:()=>v(f.id),children:"Удалить"})]})]},f.id)})})]}),i.jsx(g8,{$isOpen:s,children:i.jsxs(x8,{children:[i.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:d?"Редактировать категорию":"Добавить категорию"}),i.jsxs(b8,{onSubmit:w,children:[i.jsxs(Pa,{children:[i.jsx(Ra,{children:"Тип меню"}),i.jsxs(v8,{value:p.menuTypeId,onChange:f=>x("menuTypeId",parseInt(f.target.value)),required:!0,children:[i.jsx("option",{value:0,children:"Выберите тип меню"}),r.map(f=>i.jsx("option",{value:f.id,children:f.name},f.id))]})]}),i.jsxs(Pa,{children:[i.jsx(Ra,{children:"Название"}),i.jsx(Ah,{type:"text",value:p.name,onChange:f=>x("name",f.target.value),placeholder:"Название категории",required:!0})]}),i.jsxs(Pa,{children:[i.jsx(Ra,{children:"Описание"}),i.jsx(y8,{value:p.description,onChange:f=>x("description",f.target.value),placeholder:"Описание категории"})]}),i.jsxs(Pa,{children:[i.jsx(Ra,{children:"Порядок сортировки"}),i.jsx(Ah,{type:"number",value:p.sortOrder,onChange:f=>x("sortOrder",parseInt(f.target.value)),min:"0"})]}),i.jsxs(w8,{children:[i.jsx(Ni,{type:"submit",children:d?"Сохранить":"Создать"}),i.jsx(Ni,{type:"button",$variant:"secondary",onClick:()=>l(!1),children:"Отмена"})]})]})]})})]})},k8=c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,C8=c.div`
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
`,z8=c.div`
  font-size: 3rem;
  color: #666;
  margin-bottom: 1rem;
`,vc=c.p`
  color: #ccc;
  margin: 0;
  font-size: 1rem;
`,E8=c.input`
  display: none;
`,$8=c.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-top: 1rem;
`,P8=c.div`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`,R8=c.div`
  height: 100%;
  background: #ffd700;
  width: ${e=>e.$progress}%;
  transition: width 0.3s ease;
`,I8=c.div`
  position: absolute;
  top: -20px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 1;
`,T8=c.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,N8=c.div`
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,_8=c.button`
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
`,ef=({onImageUpload:e,onImageRemove:t,currentImageUrl:r,disabled:n=!1})=>{const[o,a]=C.useState(!1),[s,l]=C.useState(!1),[d,u]=C.useState(0),[p,h]=C.useState(null),[m,b]=C.useState(!1),[y,v]=C.useState(r||null),[w,x]=C.useState(0),[f]=C.useState(3),g=C.useRef(null);C.useEffect(()=>{},[]);const S=async N=>{if(!N.type.startsWith("image/")){h("Пожалуйста, выберите изображение");return}if(N.size>10*1024*1024){h("Размер файла не должен превышать 10MB");return}if(!["image/jpeg","image/jpg","image/png","image/webp"].includes(N.type)){h("Поддерживаются только JPG, PNG и WebP форматы");return}h(null),l(!0),u(0),x(0);try{const A=new FileReader;A.onload=ne=>{var ve;v((ve=ne.target)==null?void 0:ve.result)},A.readAsDataURL(N);const J=setInterval(()=>{u(ne=>ne>=90?(clearInterval(J),90):ne+10)},200),Be=await Wx(N,f,ne=>{x(ne)});clearInterval(J),u(100),b(!0),e(Be),setTimeout(()=>{b(!1),u(0),l(!1)},2e3)}catch(A){console.error("❌ Ошибка в ImageUpload:",A);let J="Ошибка загрузки изображения";A.message&&(A.message.includes("Не настроены переменные окружения")?J="Ошибка конфигурации Cloudinary. Обратитесь к администратору.":A.message.includes("Ошибка Cloudinary")?J="Ошибка сервера Cloudinary. Попробуйте позже.":A.message.includes("Не получен URL")?J="Ошибка получения URL изображения. Попробуйте еще раз.":A.message.includes("Проблема с сетевым подключением")?J="Проблема с интернет-соединением. Проверьте подключение и попробуйте снова.":A.message.includes("Превышено время ожидания")?J="Загрузка занимает слишком много времени. Попробуйте еще раз.":J=A.message),h(J),v(null),g.current&&(g.current.value="")}finally{l(!1),u(0),x(0)}},j=N=>{N.preventDefault(),n||a(!0)},k=N=>{N.preventDefault(),a(!1)},z=N=>{if(N.preventDefault(),a(!1),n)return;const D=N.dataTransfer.files;D.length>0&&S(D[0])},R=()=>{!n&&g.current&&g.current.click()},E=N=>{var A;const D=(A=N.target.files)==null?void 0:A[0];D&&S(D)},P=()=>{v(null),h(null),b(!1),g.current&&(g.current.value=""),t&&t()};return i.jsxs(k8,{children:[i.jsx(C8,{$isDragOver:o,$hasImage:!!y,onDragOver:j,onDragLeave:k,onDrop:z,onClick:R,children:y?i.jsxs(i.Fragment,{children:[i.jsx($8,{src:y,alt:"Предварительный просмотр"}),i.jsx(vc,{style:{marginTop:"1rem"},children:"Нажмите для замены изображения"})]}):i.jsxs(i.Fragment,{children:[i.jsx(z8,{children:"📷"}),i.jsx(vc,{children:s?"Загрузка...":"Перетащите изображение сюда или нажмите для выбора"}),i.jsx(vc,{style:{fontSize:"0.8rem",color:"#666"},children:"Поддерживаются: JPG, PNG, WebP (до 10MB)"})]})}),i.jsx(E8,{ref:g,type:"file",accept:"image/*",onChange:E,disabled:n}),s&&i.jsxs(P8,{$progress:d,children:[i.jsx(R8,{$progress:d}),w>0&&i.jsxs(I8,{children:["Попытка ",w,"/",f]})]}),p&&i.jsx(T8,{children:p}),m&&i.jsx(N8,{children:"Изображение успешно загружено!"}),y&&t&&i.jsx(_8,{type:"button",onClick:P,disabled:s,children:"Удалить изображение"})]})},M8=c.div`
  color: #fff;
`,D8=c.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`,Ar=c.th`
  padding: 1.5rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Lr=c.td`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,_i=c.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({$variant:e})=>{switch(e){case"danger":return`
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          }
        `;case"secondary":return`
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover { 
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }
        `;default:return`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          }
        `}}}

  &:active {
    transform: translateY(0);
  }
`,O8=c.div`
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
  backdrop-filter: blur(10px);
`,F8=c.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,A8=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xt=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,bt=c.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Br=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Lh=c.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #1a1a2e;
    color: #fff;
    padding: 0.5rem;
  }
`,L8=c.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,B8=c.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,U8=c.span`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: ${e=>e.$isActive?"linear-gradient(135deg, #51cf66 0%, #40c057 100%)":"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;c.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;const W8=c.h3`
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,H8=c.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Y8=()=>{const[e,t]=C.useState([]),[r,n]=C.useState([]),[o,a]=C.useState([]),[s,l]=C.useState(!0),[d,u]=C.useState(!1),[p,h]=C.useState(null),[m,b]=C.useState({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0});C.useEffect(()=>{y()},[]);const y=async()=>{try{l(!0);const[E,P,N]=await Promise.all([he.getMenuItems(),he.getMenuTypes(),he.getMenuCategories()]);t(E),n(P),a(N)}catch(E){console.error("Ошибка загрузки данных:",E)}finally{l(!1)}},v=()=>{h(null),b({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0}),u(!0)},w=async E=>{var P,N;if(E.preventDefault(),console.log("🚀 Отправляем форму:",m),!m.name.trim()){alert("Пожалуйста, введите название блюда");return}if(m.menuTypeId===0){alert("Пожалуйста, выберите тип меню");return}if(m.categoryId===0){alert("Пожалуйста, выберите категорию");return}if(m.price<=0){alert("Пожалуйста, введите корректную цену");return}try{p?(console.log("📝 Обновляем блюдо:",p.id),await he.updateMenuItem(p.id,m)):(console.log("➕ Создаем новое блюдо"),await he.createMenuItem(m)),console.log("✅ Блюдо сохранено успешно"),R(),await y()}catch(D){console.error("❌ Ошибка сохранения блюда:",D);const A=((N=(P=D.response)==null?void 0:P.data)==null?void 0:N.error)||D.message||"Ошибка сохранения блюда";alert(`Ошибка: ${A}`)}},x=(E,P)=>{b(N=>({...N,[E]:P}))},f=E=>{b(P=>({...P,imageUrl:E}))},g=()=>{b(E=>({...E,imageUrl:""}))},S=async E=>{var P,N;if(window.confirm("Вы уверены, что хотите удалить это блюдо?"))try{await he.deleteMenuItem(E),await y(),console.log("✅ Блюдо удалено успешно")}catch(D){console.error("❌ Ошибка удаления блюда:",D);const A=((N=(P=D.response)==null?void 0:P.data)==null?void 0:N.error)||D.message||"Ошибка удаления блюда";alert(`Ошибка: ${A}`)}},j=E=>{h(E);const P=o.find(N=>N.id===E.categoryId);b({name:E.name,description:E.description||"",price:E.price,currency:E.currency||"₽",imageUrl:E.imageUrl||"",menuTypeId:(P==null?void 0:P.menuTypeId)||0,categoryId:E.categoryId,allergens:E.allergens||[],weight:E.weight||"",calories:E.calories||0,preparation:E.preparation||"",isPopular:E.isPopular,isActive:E.isActive,sortOrder:E.sortOrder}),u(!0)},k=E=>o.filter(P=>P.menuTypeId===E),z=E=>{b(P=>({...P,menuTypeId:E,categoryId:0}))},R=()=>{u(!1),h(null),b({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0})};return s?i.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):i.jsxs(M8,{children:[i.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Блюда"}),i.jsx(_i,{onClick:v,children:"+ Добавить блюдо"}),i.jsxs(D8,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(Ar,{children:"Изображение"}),i.jsx(Ar,{children:"Название"}),i.jsx(Ar,{children:"Тип меню"}),i.jsx(Ar,{children:"Категория"}),i.jsx(Ar,{children:"Цена"}),i.jsx(Ar,{children:"Статус"}),i.jsx(Ar,{children:"Действия"})]})}),i.jsx("tbody",{children:e.map(E=>{const P=o.find(D=>D.id===E.categoryId),N=r.find(D=>D.id===(P==null?void 0:P.menuTypeId));return i.jsxs("tr",{children:[i.jsx(Lr,{children:E.imageUrl?i.jsx(B8,{src:E.imageUrl,alt:E.name}):i.jsx(H8,{})}),i.jsx(Lr,{children:E.name}),i.jsx(Lr,{children:(N==null?void 0:N.name)||"Неизвестно"}),i.jsx(Lr,{children:(P==null?void 0:P.name)||"Неизвестно"}),i.jsxs(Lr,{children:[E.price," ₽"]}),i.jsx(Lr,{children:i.jsx(U8,{$isActive:E.isActive,children:E.isActive?"Активно":"Неактивно"})}),i.jsxs(Lr,{children:[i.jsx(_i,{$variant:"secondary",onClick:()=>j(E),children:"Редактировать"}),i.jsx(_i,{$variant:"danger",onClick:()=>S(E.id),children:"Удалить"})]})]},E.id)})})]}),i.jsx(O8,{$isOpen:d,children:i.jsxs(F8,{children:[i.jsx(W8,{children:p?"Редактировать блюдо":"Добавить блюдо"}),i.jsxs(A8,{onSubmit:w,children:[i.jsxs(xt,{children:[i.jsx(bt,{children:"Тип меню"}),i.jsxs(Lh,{value:m.menuTypeId,onChange:E=>z(parseInt(E.target.value)),required:!0,children:[i.jsx("option",{value:0,children:"Выберите тип меню"}),r.map(E=>i.jsx("option",{value:E.id,children:E.name},E.id))]})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Категория"}),i.jsxs(Lh,{value:m.categoryId,onChange:E=>x("categoryId",parseInt(E.target.value)),required:!0,disabled:m.menuTypeId===0,children:[i.jsx("option",{value:0,children:m.menuTypeId===0?"Сначала выберите тип меню":"Выберите категорию"}),k(m.menuTypeId).map(E=>i.jsx("option",{value:E.id,children:E.name},E.id))]})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Название"}),i.jsx(Br,{type:"text",value:m.name,onChange:E=>x("name",E.target.value),placeholder:"Название блюда",required:!0})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Описание"}),i.jsx(Br,{type:"text",value:m.description,onChange:E=>x("description",E.target.value),placeholder:"Описание блюда"})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Цена (₽)"}),i.jsx(Br,{type:"number",value:m.price,onChange:E=>x("price",parseFloat(E.target.value)),min:"0",step:"0.01",required:!0})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Вес/Объем"}),i.jsx(Br,{type:"text",value:m.weight,onChange:E=>x("weight",E.target.value),placeholder:"Например: 300г, 0.5л"})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Калории"}),i.jsx(Br,{type:"number",value:m.calories,onChange:E=>x("calories",parseInt(E.target.value)),min:"0"})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Время приготовления"}),i.jsx(Br,{type:"text",value:m.preparation,onChange:E=>x("preparation",E.target.value),placeholder:"Например: 15 мин"})]}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Изображение"}),i.jsx(ef,{onImageUpload:f,onImageRemove:g,currentImageUrl:m.imageUrl})]}),i.jsx(xt,{children:i.jsxs(bt,{children:[i.jsx("input",{type:"checkbox",checked:m.isPopular,onChange:E=>x("isPopular",E.target.checked)}),"Популярное блюдо"]})}),i.jsxs(xt,{children:[i.jsx(bt,{children:"Порядок сортировки"}),i.jsx(Br,{type:"number",value:m.sortOrder,onChange:E=>x("sortOrder",parseInt(E.target.value)),min:"0"})]}),i.jsxs(L8,{children:[i.jsx(_i,{type:"submit",children:p?"Сохранить":"Создать"}),i.jsx(_i,{type:"button",$variant:"secondary",onClick:R,children:"Отмена"})]})]})]})})]})},wc=c.div`
  color: #fff;
  padding: 2rem;
`,V8=c.h3`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,G8=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`,Bh=c.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`,Uh=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Wh=c.div`
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,Hh=c.h4`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Yh=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,yt=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ht=c.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Mi=c.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Vh=c.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,X8=c.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    background: #1a1a1a;
    color: #fff;
  }
`,In=c.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,q8=c.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: pointer;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #667eea;
  }
`,K8=c.div`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Q8=c(In)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  align-self: center;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);

  &:hover {
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }
`,J8=c.div`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
`,Z8=c.div`
  color: #ef4444;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,ez=c.div`
  color: #10b981;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.3);
`,tz=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,a]=C.useState(null),[s,l]=C.useState(null),[d,u]=C.useState(!1),[p,h]=C.useState({name:"",type:"russian",weekdayPrice:0,weekendPrice:0,description:"",imageUrl:"",sortOrder:0});C.useEffect(()=>{m()},[]);const m=async()=>{try{n(!0),a(null);const j=await bx();t(j)}catch(j){a("Ошибка при загрузке данных о бильярде"),console.error("Ошибка загрузки:",j)}finally{n(!1)}},b=(j,k,z)=>{t(R=>R.map(E=>E.id===j?{...E,[k]:z}:E))},y=(j,k)=>{b(j,"imageUrl",k)},v=j=>{b(j,"imageUrl","")},w=async()=>{try{a(null),l(null);const j=await Kp(p);t(k=>[...k,j]),u(!1),h({name:"",type:"russian",weekdayPrice:0,weekendPrice:0,description:"",imageUrl:"",sortOrder:0}),l("Новая услуга успешно создана!"),setTimeout(()=>l(null),3e3)}catch(j){a("Ошибка при создании услуги"),console.error("Ошибка создания:",j)}},x=async j=>{if(confirm("Вы уверены, что хотите удалить эту услугу?"))try{a(null),l(null),await Aj(j),t(k=>k.filter(z=>z.id!==j)),l("Услуга успешно удалена!"),setTimeout(()=>l(null),3e3)}catch(k){a("Ошибка при удалении услуги"),console.error("Ошибка удаления:",k)}},f=async()=>{try{a(null),l(null),n(!0);const j=[{name:"Русский бильярд",type:"russian",weekdayPrice:800,weekendPrice:1e3,description:"Классический русский бильярд с профессиональными столами",imageUrl:"",sortOrder:1},{name:"Американский пул",type:"american",weekdayPrice:600,weekendPrice:800,description:"Американский пул для любителей быстрой игры",imageUrl:"",sortOrder:2},{name:"VIP зал",type:"vip",weekdayPrice:1200,weekendPrice:1500,description:"Премиум VIP залы с эксклюзивным обслуживанием",imageUrl:"",sortOrder:3}],k=[];for(const z of j)try{const R=await Kp(z);k.push(R)}catch(R){console.error("Ошибка создания услуги:",z.name,R)}k.length>0?(t(k),l(`Создано ${k.length} тестовых услуг!`),setTimeout(()=>l(null),3e3)):a("Не удалось создать тестовые данные")}catch(j){a("Ошибка при создании тестовых данных"),console.error("Ошибка создания тестовых данных:",j)}finally{n(!1)}},g=async j=>{j.preventDefault();try{a(null),l(null);const k=e.map(z=>Fj(z.id,{name:z.name,type:z.type,weekdayPrice:z.weekdayPrice,weekendPrice:z.weekendPrice,description:z.description,imageUrl:z.imageUrl,isActive:z.isActive,sortOrder:z.sortOrder}));await Promise.all(k),l("Цены на бильярд успешно обновлены!"),await m(),setTimeout(()=>l(null),3e3)}catch(k){a("Ошибка при сохранении данных"),console.error("Ошибка сохранения:",k)}},S=j=>{switch(j){case"russian":return"🎱";case"american":return"🎯";case"vip":return"👑";default:return"🎱"}};return r?i.jsx(wc,{children:i.jsx(J8,{children:"Загрузка данных о бильярде..."})}):o?i.jsxs(wc,{children:[i.jsx(Z8,{children:o}),i.jsx(In,{onClick:m,style:{margin:"0 auto",display:"block"},children:"Попробовать снова"})]}):i.jsxs(wc,{children:[i.jsx(V8,{children:"🎱 Управление ценами на бильярд"}),s&&i.jsx(ez,{children:s}),i.jsxs("div",{style:{marginBottom:"2rem",textAlign:"center",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[i.jsx(In,{onClick:()=>u(!d),style:{background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",fontSize:"1.1rem",padding:"1rem 2rem"},children:d?"❌ Отменить":"➕ Добавить новую услугу"}),e.length===0&&i.jsx(In,{onClick:f,style:{background:"linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",fontSize:"1.1rem",padding:"1rem 2rem"},children:"🎯 Создать тестовые данные"})]}),d&&i.jsxs(Bh,{style:{marginBottom:"2rem",border:"2px solid #10b981"},children:[i.jsxs(Uh,{children:[i.jsx(Wh,{children:"🆕"}),i.jsx(Hh,{children:"Новая услуга"})]}),i.jsxs(Yh,{children:[i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[i.jsxs(yt,{children:[i.jsx(Ht,{children:"Название услуги"}),i.jsx(Mi,{type:"text",value:p.name,onChange:j=>h(k=>({...k,name:j.target.value})),placeholder:"Например: Русский бильярд",required:!0})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Тип услуги"}),i.jsxs(X8,{value:p.type,onChange:j=>h(k=>({...k,type:j.target.value})),required:!0,children:[i.jsx("option",{value:"russian",children:"Русский бильярд"}),i.jsx("option",{value:"american",children:"Американский пул"}),i.jsx("option",{value:"vip",children:"VIP зал"})]})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[i.jsxs(yt,{children:[i.jsx(Ht,{children:"Цена в будни (₽/час)"}),i.jsx(Mi,{type:"number",value:p.weekdayPrice,onChange:j=>h(k=>({...k,weekdayPrice:parseFloat(j.target.value)})),min:"0",step:"0.01",required:!0})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Цена в выходные (₽/час)"}),i.jsx(Mi,{type:"number",value:p.weekendPrice,onChange:j=>h(k=>({...k,weekendPrice:parseFloat(j.target.value)})),min:"0",step:"0.01",required:!0})]})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Описание"}),i.jsx(Vh,{value:p.description,onChange:j=>h(k=>({...k,description:j.target.value})),placeholder:"Краткое описание услуги..."})]}),i.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:i.jsx(In,{type:"button",onClick:w,style:{background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",fontSize:"1.1rem",padding:"0.75rem 1.5rem"},disabled:!p.name||p.weekdayPrice<=0||p.weekendPrice<=0,children:"✅ Создать услугу"})})]})]}),e.length>0?i.jsxs("form",{onSubmit:g,children:[i.jsx(G8,{children:e.map(j=>i.jsxs(Bh,{children:[i.jsxs(Uh,{children:[i.jsx(Wh,{children:S(j.type)}),i.jsx(Hh,{children:j.name})]}),i.jsxs(Yh,{children:[i.jsxs(yt,{children:[i.jsx(Ht,{children:"Цена в будни (₽/час)"}),i.jsx(Mi,{type:"number",value:j.weekdayPrice,onChange:k=>b(j.id,"weekdayPrice",parseFloat(k.target.value)),min:"0",step:"0.01",required:!0})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Цена в выходные (₽/час)"}),i.jsx(Mi,{type:"number",value:j.weekendPrice,onChange:k=>b(j.id,"weekendPrice",parseFloat(k.target.value)),min:"0",step:"0.01",required:!0})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Описание"}),i.jsx(Vh,{value:j.description||"",onChange:k=>b(j.id,"description",k.target.value),placeholder:"Краткое описание услуги..."})]}),i.jsxs(yt,{children:[i.jsx(Ht,{children:"Изображение"}),i.jsx(ef,{onImageUpload:k=>y(j.id,k),onImageRemove:()=>v(j.id),currentImageUrl:j.imageUrl||""}),j.imageUrl&&i.jsx(K8,{children:i.jsx("img",{src:j.imageUrl,alt:j.name})})]}),i.jsx(yt,{children:i.jsxs(q8,{children:[i.jsx("input",{type:"checkbox",checked:j.isActive,onChange:k=>b(j.id,"isActive",k.target.checked)}),j.name," активен"]})}),i.jsx(yt,{children:i.jsx(In,{type:"button",onClick:()=>x(j.id),style:{background:"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",width:"100%",marginTop:"1rem"},children:"🗑️ Удалить услугу"})})]})]},j.id))}),i.jsx(Q8,{type:"submit",children:"💾 Сохранить все изменения"})]}):i.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:"#94a3b8"},children:[i.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🎱"}),i.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"Услуги бильярда не найдены"}),i.jsx("div",{style:{fontSize:"1rem"},children:"Создайте первую услугу, используя форму выше"})]})]})},jc=c.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,rz=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,nz=c.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`,iz=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,oz=c.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`,az=c.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
`,sz=c.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Pn=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Di=c.label`
  font-weight: 500;
  color: #4a5568;
  font-size: 0.9rem;
`,Sc=c.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,lz=c.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;c.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({variant:e})=>{switch(e){case"danger":return`
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #ff5252 0%, #d32f2f 100%);
            transform: translateY(-2px);
          }
        `;case"secondary":return`
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
            transform: translateY(-2px);
          }
        `;default:return`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
            transform: translateY(-2px);
          }
        `}}}
`;const cz=c.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: #4a5568;
`,dz=c.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  margin-top: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,uz=c.button`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
  }
`,fz=c.div`
  text-align: center;
  padding: 2rem;
  color: #4a5568;
  font-size: 1.1rem;
`,pz=c.div`
  text-align: center;
  padding: 2rem;
  color: #e53e3e;
  font-size: 1.1rem;
  background: rgba(229, 62, 62, 0.1);
  border-radius: 12px;
  margin: 1rem 0;
`,hz=c.div`
  text-align: center;
  padding: 2rem;
  color: #38a169;
  font-size: 1.1rem;
  background: rgba(56, 161, 105, 0.1);
  border-radius: 12px;
  margin: 1rem 0;
`,mz=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[o,a]=C.useState(null),[s,l]=C.useState(null);C.useEffect(()=>{d()},[]);const d=async()=>{try{n(!0),a(null);const b=await yx();t(b)}catch(b){a("Ошибка при загрузке данных о караоке"),console.error("Ошибка загрузки:",b)}finally{n(!1)}},u=async b=>{b.preventDefault();try{a(null),l(null);for(const y of e)await tS(y.id,{name:y.name,type:y.type,weekdayPrice:y.weekdayPrice,weekendPrice:y.weekendPrice,description:y.description,imageUrl:y.imageUrl,isActive:y.isActive,sortOrder:y.sortOrder});l("Цены на караоке успешно обновлены!"),await d()}catch(y){a("Ошибка при сохранении данных"),console.error("Ошибка сохранения:",y)}},p=(b,y)=>{const v=[...e];v[y].imageUrl=b,t(v)},h=b=>{const y=[...e];y[b].imageUrl="",t(y)},m=b=>{switch(b){case"deposit":return"💰";case"vip":return"👑";default:return"🎤"}};return r?i.jsx(jc,{children:i.jsx(fz,{children:"Загрузка данных о караоке..."})}):o?i.jsx(jc,{children:i.jsx(pz,{children:o})}):i.jsxs(jc,{children:[i.jsx("h2",{children:"Управление ценами на караоке"}),s&&i.jsx(hz,{children:s}),i.jsxs(sz,{onSubmit:u,children:[i.jsx(rz,{children:e.map((b,y)=>i.jsxs(nz,{children:[i.jsxs(iz,{children:[i.jsx(oz,{children:m(b.type)}),i.jsx(az,{children:b.name})]}),i.jsxs(Pn,{children:[i.jsx(Di,{children:"Название:"}),i.jsx(Sc,{type:"text",value:b.name,onChange:v=>{const w=[...e];w[y].name=v.target.value,t(w)}})]}),i.jsxs(Pn,{children:[i.jsx(Di,{children:"Цена в будни (₽):"}),i.jsx(Sc,{type:"number",value:b.weekdayPrice,onChange:v=>{const w=[...e];w[y].weekdayPrice=parseFloat(v.target.value)||0,t(w)}})]}),i.jsxs(Pn,{children:[i.jsx(Di,{children:"Цена в выходные (₽):"}),i.jsx(Sc,{type:"number",value:b.weekendPrice,onChange:v=>{const w=[...e];w[y].weekendPrice=parseFloat(v.target.value)||0,t(w)}})]}),i.jsxs(Pn,{children:[i.jsx(Di,{children:"Описание:"}),i.jsx(lz,{value:b.description||"",onChange:v=>{const w=[...e];w[y].description=v.target.value,t(w)}})]}),i.jsxs(Pn,{children:[i.jsx(Di,{children:"Изображение:"}),i.jsx(ef,{onImageUpload:v=>p(v,y),onImageRemove:()=>h(y),currentImageUrl:b.imageUrl||void 0}),b.imageUrl&&i.jsx(dz,{children:i.jsx("img",{src:b.imageUrl,alt:b.name})})]}),i.jsx(Pn,{children:i.jsxs(cz,{children:[i.jsx("input",{type:"checkbox",checked:b.isActive,onChange:v=>{const w=[...e];w[y].isActive=v.target.checked,t(w)}}),"Активна"]})})]},b.id))}),i.jsx(uz,{type:"submit",children:"Сохранить все изменения"})]})]})},Gh=c.div`
  min-height: 100vh;
  background: #0f0f23;
  color: #ffffff;
  padding: 2rem 0;
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
  }
`,Xh=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
  }
`,gz=c.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,xz=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,Oi=c.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  ${({$status:e})=>{switch(e){case"pending":return"border-color: #fbbf24; box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);";case"approved":return"border-color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);";case"rejected":return"border-color: #ef4444; box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);";case"completed":return"border-color: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);";default:return""}}}
`,Fi=c.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ai=c.div`
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,bz=c.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,yz=c.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 1rem;
`,vz=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qh=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Kh=c.label`
  font-size: 0.9rem;
  color: #e2e8f0;
  font-weight: 500;
`,wz=c.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,jz=c.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`,Sz=c.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`,kz=c.table`
  width: 100%;
  border-collapse: collapse;
`,Cz=c.thead`
  background: rgba(255, 255, 255, 0.05);
`,It=c.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #fbbf24;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`,zz=c.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`,Tt=c.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`,Ez=c.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  
  ${({$status:e})=>{switch(e){case"pending":return"background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3);";case"approved":return"background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);";case"rejected":return"background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.3);";case"completed":return"background: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3);";default:return"background: rgba(255, 255, 255, 0.1); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.2);"}}}
`,Ia=c.button`
  background: ${({$variant:e})=>e==="danger"?"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,$z=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,kc=c.button`
  background: ${({$active:e})=>e?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${({$active:e})=>e?"#ffffff":"#e2e8f0"};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({$active:e})=>e?"linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%)":"rgba(255, 255, 255, 0.15)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Pz=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #94a3b8;
`,Rz=c.div`
  text-align: center;
  padding: 3rem;
  color: #94a3b8;
`,Iz=({onStatusUpdate:e})=>{const[t,r]=C.useState([]),[n,o]=C.useState(null),[a,s]=C.useState(!0),[l,d]=C.useState(1),[u,p]=C.useState(1),[h,m]=C.useState({status:"all",search:""});C.useEffect(()=>{b()},[l,h]);const b=async()=>{try{s(!0);const[f,g]=await Promise.all([qr.getAll({page:l,limit:20,status:h.status==="all"?void 0:h.status,search:h.search||void 0}),qr.getStats()]);f.success&&(r(f.data.requests),p(f.data.pagination.totalPages)),g.success&&o(g.data)}catch(f){console.error("❌ Ошибка загрузки данных:",f)}finally{s(!1)}},y=async(f,g)=>{try{(await qr.updateStatus(f,g)).success&&(r(j=>j.map(k=>k.id===f?{...k,status:g}:k)),b(),e==null||e())}catch(S){console.error("❌ Ошибка обновления статуса:",S),alert("Ошибка обновления статуса")}},v=async f=>{if(confirm("Вы уверены, что хотите удалить эту заявку?"))try{(await qr.delete(f)).success&&(r(S=>S.filter(j=>j.id!==f)),b(),e==null||e())}catch(g){console.error("❌ Ошибка удаления заявки:",g),alert("Ошибка удаления заявки")}},w=f=>new Date(f).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),x=f=>({pending:"Ожидает",approved:"Одобрена",rejected:"Отклонена",completed:"Завершена"})[f]||f;return a&&!t.length?i.jsx(Gh,{children:i.jsx(Xh,{children:i.jsx(Pz,{children:"Загрузка заявок..."})})}):i.jsx(Gh,{children:i.jsxs(Xh,{children:[i.jsx(gz,{children:"🎉 Заявки на банкеты"}),n&&i.jsxs(xz,{children:[i.jsxs(Oi,{children:[i.jsx(Fi,{children:n.total}),i.jsx(Ai,{children:"Всего заявок"})]}),i.jsxs(Oi,{$status:"pending",children:[i.jsx(Fi,{children:n.pending}),i.jsx(Ai,{children:"Ожидают"})]}),i.jsxs(Oi,{$status:"approved",children:[i.jsx(Fi,{children:n.approved}),i.jsx(Ai,{children:"Одобрены"})]}),i.jsxs(Oi,{$status:"rejected",children:[i.jsx(Fi,{children:n.rejected}),i.jsx(Ai,{children:"Отклонены"})]}),i.jsxs(Oi,{$status:"completed",children:[i.jsx(Fi,{children:n.completed}),i.jsx(Ai,{children:"Завершены"})]})]}),i.jsxs(bz,{children:[i.jsx(yz,{children:"🔍 Фильтры"}),i.jsxs(vz,{children:[i.jsxs(qh,{children:[i.jsx(Kh,{children:"Статус"}),i.jsxs(jz,{value:h.status,onChange:f=>m(g=>({...g,status:f.target.value})),children:[i.jsx("option",{value:"all",children:"Все статусы"}),i.jsx("option",{value:"pending",children:"Ожидают"}),i.jsx("option",{value:"approved",children:"Одобрены"}),i.jsx("option",{value:"rejected",children:"Отклонены"}),i.jsx("option",{value:"completed",children:"Завершены"}),i.jsx("option",{value:"cancelled",children:"Отменены"})]})]}),i.jsxs(qh,{children:[i.jsx(Kh,{children:"Поиск"}),i.jsx(wz,{type:"text",placeholder:"Имя, телефон, email, тип мероприятия...",value:h.search,onChange:f=>m(g=>({...g,search:f.target.value}))})]})]})]}),i.jsx(Sz,{children:t.length===0?i.jsxs(Rz,{children:[i.jsx("h3",{children:"📭 Заявок не найдено"}),i.jsx("p",{children:"Попробуйте изменить фильтры или создать новую заявку"})]}):i.jsxs(kz,{children:[i.jsx(Cz,{children:i.jsxs("tr",{children:[i.jsx(It,{children:"ID"}),i.jsx(It,{children:"Дата создания"}),i.jsx(It,{children:"Клиент"}),i.jsx(It,{children:"Мероприятие"}),i.jsx(It,{children:"Дата и время"}),i.jsx(It,{children:"Гости"}),i.jsx(It,{children:"Бюджет"}),i.jsx(It,{children:"Детали"}),i.jsx(It,{children:"Статус"}),i.jsx(It,{children:"Действия"})]})}),i.jsx("tbody",{children:t.map(f=>i.jsxs(zz,{children:[i.jsxs(Tt,{children:["#",f.id]}),i.jsx(Tt,{children:w(f.createdAt)}),i.jsxs(Tt,{children:[i.jsx("div",{children:i.jsx("strong",{children:f.name})}),i.jsx("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:f.phone}),f.email&&i.jsx("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:f.email})]}),i.jsxs(Tt,{children:[i.jsx("div",{children:i.jsx("strong",{children:f.eventType})}),f.banquetType&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["🍽️ ",f.banquetType]}),f.specialMenu&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["🥗 ",f.specialMenu]})]}),i.jsxs(Tt,{children:[i.jsx("div",{children:new Date(f.eventDate).toLocaleDateString("ru-RU")}),i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["🕐 ",f.eventTime]}),f.endTime&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["🕘 До ",f.endTime]})]}),i.jsxs(Tt,{children:[f.guestCount," чел."]}),i.jsx(Tt,{children:f.budget}),i.jsxs(Tt,{children:[f.music&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8",marginBottom:"0.25rem"},children:["🎵 ",f.music]}),f.decor&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8",marginBottom:"0.25rem"},children:["🎨 ",f.decor]}),f.additionalWishes&&i.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["💬 ",f.additionalWishes.length>50?f.additionalWishes.substring(0,50)+"...":f.additionalWishes]})]}),i.jsx(Tt,{children:i.jsx(Ez,{$status:f.status,children:x(f.status)})}),i.jsxs(Tt,{children:[i.jsx(Ia,{onClick:()=>y(f.id,"approved"),disabled:f.status==="approved",children:"✅"}),i.jsx(Ia,{onClick:()=>y(f.id,"rejected"),disabled:f.status==="rejected",children:"❌"}),i.jsx(Ia,{onClick:()=>y(f.id,"completed"),disabled:f.status==="completed",children:"🎯"}),i.jsx(Ia,{$variant:"danger",onClick:()=>v(f.id),children:"🗑️"})]})]},f.id))})]})}),u>1&&i.jsxs($z,{children:[i.jsx(kc,{onClick:()=>d(f=>Math.max(1,f-1)),disabled:l===1,children:"← Назад"}),Array.from({length:u},(f,g)=>g+1).map(f=>i.jsx(kc,{$active:f===l,onClick:()=>d(f),children:f},f)),i.jsx(kc,{onClick:()=>d(f=>Math.min(u,f+1)),disabled:l===u,children:"Вперед →"})]})]})})};H`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;H`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;H`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;const Tz=c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Nz=c.main`
  flex: 1;
  padding: 0;
`,_z=c.header`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`,Mz=c.h1`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Dz=c.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Oz=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,Fz=c.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 0.9rem;
`,Az=c.span`
  font-weight: 500;
  color: #ffffff;
`,Lz=c.div`
  display: flex;
  min-height: calc(100vh - 80px);
`,Bz=c.div`
  width: 280px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  animation: ${F`slideIn`} 0.6s ease-out;
`,Uz=c.div`
  padding: 0 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`,Wz=c.h3`
  color: #a0a0a0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.5rem 0;
`,Hz=c.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${e=>e.$active?"#ffffff":"#a0a0a0"};
  background: ${e=>e.$active?"linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)":"transparent"};
  border-left: 3px solid ${e=>e.$active?"#667eea":"transparent"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0.25rem 1rem;
  border-radius: 0 12px 12px 0;
  font-weight: 500;
  position: relative;
  overflow: visible;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)":"rgba(255, 255, 255, 0.05)"};
    color: #ffffff;
    transform: translateX(4px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,Yz=c.span`
  margin-right: 0.75rem;
  font-size: 1.1rem;
  opacity: 0.8;
`,Vz=c.span`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  animation: ${F`pulse`} 2s infinite;
  
  @media (max-width: 768px) {
    min-width: 18px;
    height: 18px;
    font-size: 0.7rem;
    top: 0.25rem;
    right: 0.75rem;
  }
`,Gz=c.div`
  flex: 1;
  padding: 2rem;
  animation: ${F`fadeIn`} 0.6s ease-out;
  overflow-y: auto;
`,Xz=c.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,qz=c.h2`
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Kz=c.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
`,Qz=c.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`,Jz=c.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Cc=c.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"transparent"};
  color: ${e=>e.$active?"#ffffff":"#a0a0a0"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.1)"};
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,Zz=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,zc=c.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`,Ec=c.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,$c=c.div`
  color: #a0a0a0;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Pc=c.div`
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  animation: ${F`pulse`} 2s infinite;
`,Rc=c.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Ic=c.h3`
  color: #a0a0a0;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`,Tc=c.p`
  color: #808080;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
`,Qh=[{key:"create-zone",label:"Создать зону",icon:"🏗️"},{key:"zone-constructor",label:"Конструктор зоны",icon:"🎨"},{key:"manage-zones",label:"Управление зонами",icon:"🗺️"},{key:"menu",label:"Меню",icon:"🍽️"},{key:"bookings",label:"Бронирования",icon:"📅"},{key:"billiards",label:"Бильярд",icon:"🎱"},{key:"karaoke",label:"Караоке",icon:"🎤"},{key:"banquet-requests",label:"Заявки на банкеты",icon:"🎉"},{key:"settings",label:"Настройки",icon:"⚙️"}],eE=()=>{var y;const[e,t]=C.useState("create-zone"),[r,n]=C.useState([]),[o,a]=C.useState(null),[s,l]=C.useState(!1),[d,u]=C.useState(0);Ne.useEffect(()=>{(async()=>{try{const w=await Lx();n(w)}catch(w){console.error("Ошибка загрузки зон:",w)}})()},[]),C.useEffect(()=>{const v=async()=>{try{const x=await qr.getStats();x.success&&u(x.data.pending)}catch(x){console.error("Ошибка загрузки статистики заявок:",x)}};v();const w=setInterval(v,3e4);return()=>clearInterval(w)},[]);const p=v=>{a(v)},h=()=>{l(!0)},m=()=>{switch(e){case"create-zone":return i.jsx(Nh,{});case"zone-constructor":return s?i.jsx(XC,{zoneId:(o==null?void 0:o.id)||0,zoneName:o==null?void 0:o.name}):i.jsx(i8,{zones:r,onZoneSelect:p,selectedZone:o,onContinue:h});case"manage-zones":return i.jsxs("div",{children:[i.jsxs(Zz,{children:[i.jsxs(zc,{children:[i.jsx(Ec,{children:r.length}),i.jsx($c,{children:"Всего зон"})]}),i.jsxs(zc,{children:[i.jsx(Ec,{children:r.filter(v=>v.isActive).length}),i.jsx($c,{children:"Активных зон"})]}),i.jsxs(zc,{children:[i.jsx(Ec,{children:"0"}),i.jsx($c,{children:"Забронировано"})]})]}),i.jsxs(Pc,{children:[i.jsx(Rc,{children:"🚧"}),i.jsx(Ic,{children:"Управление зонами"}),i.jsx(Tc,{children:"Функция находится в разработке. Скоро вы сможете редактировать, удалять и настраивать все зоны ресторана."})]})]});case"menu":return i.jsx(tE,{});case"billiards":return i.jsx(tz,{});case"karaoke":return i.jsx(mz,{});case"banquet-requests":return i.jsx(Iz,{onStatusUpdate:()=>{qr.getStats().then(v=>{v.success&&u(v.data.pending)}).catch(console.error)}});case"bookings":return i.jsxs(Pc,{children:[i.jsx(Rc,{children:"📊"}),i.jsx(Ic,{children:"Управление бронированиями"}),i.jsx(Tc,{children:"Скоро здесь появится полная система управления бронированиями с календарем, уведомлениями и статистикой."})]});case"settings":return i.jsxs(Pc,{children:[i.jsx(Rc,{children:"🔧"}),i.jsx(Ic,{children:"Настройки системы"}),i.jsx(Tc,{children:"Настройки профиля, уведомлений, безопасности и другие параметры системы будут доступны в ближайшее время."})]});default:return i.jsx(Nh,{})}},b=()=>({"create-zone":"Создайте новую зону для вашего ресторана","zone-constructor":"Настройте расположение столов и элементов зоны","manage-zones":"Управляйте всеми зонами ресторана",menu:"Редактируйте меню, категории и блюда",billiards:"Управляйте ценами и изображениями бильярда",karaoke:"Управляйте ценами и настройками караоке","banquet-requests":"Управляйте заявками на банкеты и мероприятия",bookings:"Управляйте бронированиями и резервациями",settings:"Настройки системы и профиля"})[e]||"";return i.jsx(Tz,{children:i.jsxs(Nz,{children:[i.jsxs(_z,{children:[i.jsx(Mz,{children:"Панель администратора"}),i.jsx(Dz,{children:i.jsxs(Oz,{children:[i.jsx(Fz,{children:"A"}),i.jsx(Az,{children:"Администратор"})]})})]}),i.jsxs(Lz,{children:[i.jsxs(Bz,{children:[i.jsx(Uz,{children:i.jsx(Wz,{children:"Навигация"})}),Qh.map(v=>i.jsxs(Hz,{$active:e===v.key,onClick:()=>t(v.key),children:[i.jsx(Yz,{children:v.icon}),v.label,v.key==="banquet-requests"&&d>0&&i.jsx(Vz,{children:d>99?"99+":d})]},v.key))]}),i.jsxs(Gz,{children:[i.jsxs(Xz,{children:[i.jsx(qz,{children:(y=Qh.find(v=>v.key===e))==null?void 0:y.label}),i.jsx(Kz,{children:b()})]}),m()]})]})]})})},tE=()=>{const[e,t]=C.useState("types");return i.jsxs(Qz,{children:[i.jsxs(Jz,{children:[i.jsx(Cc,{$active:e==="types",onClick:()=>t("types"),children:"Типы меню"}),i.jsx(Cc,{$active:e==="categories",onClick:()=>t("categories"),children:"Категории"}),i.jsx(Cc,{$active:e==="items",onClick:()=>t("items"),children:"Блюда"})]}),e==="types"&&i.jsx(p8,{}),e==="categories"&&i.jsx(S8,{}),e==="items"&&i.jsx(Y8,{})]})},rE=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,nE=c.div`
  max-width: 600px;
  padding: 2rem;
  text-align: center;
`,iE=c.div`
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,oE=c.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,aE=c.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,sE=c(Xs)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }
`,lE=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rn=c(Xs)`
  display: block;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,cE=()=>i.jsx(rE,{children:i.jsxs(nE,{children:[i.jsx(iE,{children:"404"}),i.jsx(oE,{children:"Страница не найдена"}),i.jsx(aE,{children:"К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или перемещена."}),i.jsx(sE,{to:"/",children:"🏠 Вернуться на главную"}),i.jsxs("div",{children:[i.jsx("p",{style:{marginBottom:"1rem",opacity:.7},children:"Популярные разделы:"}),i.jsxs(lE,{children:[i.jsx(Rn,{to:"/billiards",children:"🎱 Бильярд"}),i.jsx(Rn,{to:"/karaoke",children:"🎤 Караоке"}),i.jsx(Rn,{to:"/disco",children:"💃 Диско-бар"}),i.jsx(Rn,{to:"/playstation",children:"🎮 Игровая зона"}),i.jsx(Rn,{to:"/menu",children:"🍽️ Меню"}),i.jsx(Rn,{to:"/booking",children:"📅 Бронирование"})]})]})]})}),dE=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,uE=c.div`
  max-width: 600px;
  padding: 2rem;
  text-align: center;
`,fE=c.div`
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,pE=c.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,hE=c.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,mE=c.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,gE=c.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }
`,xE=c(Xs)`
  background: transparent;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`,bE=c.div`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,yE=c.h3`
  margin-bottom: 1rem;
  color: #667eea;
`,Ta=c.p`
  margin-bottom: 0.5rem;
  opacity: 0.8;
`,vE=()=>{const e=()=>{window.location.reload()};return i.jsx(dE,{children:i.jsxs(uE,{children:[i.jsx(fE,{children:"500"}),i.jsx(pE,{children:"Ошибка сервера"}),i.jsx(hE,{children:"К сожалению, произошла внутренняя ошибка сервера. Наша команда уже работает над её устранением."}),i.jsxs(mE,{children:[i.jsx(gE,{onClick:e,children:"🔄 Обновить страницу"}),i.jsx(xE,{to:"/",children:"🏠 На главную"})]}),i.jsxs(bE,{children:[i.jsx(yE,{children:"Нужна помощь?"}),i.jsx(Ta,{children:"Если проблема повторяется, свяжитесь с нами:"}),i.jsx(Ta,{children:"📞 Телефон: +7-XXX-XXX-XXXX"}),i.jsx(Ta,{children:"📧 Email: info@frantsuz-club.ru"}),i.jsx(Ta,{children:"💬 Telegram: @frantsuz_club"})]})]})})};function wE(){return i.jsx(g2,{children:i.jsx(Fy,{children:i.jsxs(c2,{children:[i.jsx(ee,{path:"/",element:i.jsx(Kv,{})}),i.jsx(ee,{path:"/3d-tour",element:i.jsx(H3,{})}),i.jsx(ee,{path:"/billiards",element:i.jsx(eS,{})}),i.jsx(ee,{path:"/karaoke",element:i.jsx(zS,{})}),i.jsx(ee,{path:"/disco",element:i.jsx(IS,{})}),i.jsx(ee,{path:"/playstation",element:i.jsx(DS,{})}),i.jsx(ee,{path:"/lounge",element:i.jsx(BS,{})}),i.jsx(ee,{path:"/games",element:i.jsx(VS,{})}),i.jsx(ee,{path:"/banquets",element:i.jsx(kC,{})}),i.jsx(ee,{path:"/booking",element:i.jsx(s3,{})}),i.jsx(ee,{path:"/menu",element:i.jsx($3,{})}),i.jsx(ee,{path:"/events",element:i.jsx(N3,{})}),i.jsx(ee,{path:"/cards",element:i.jsx(F3,{})}),i.jsx(ee,{path:"/contact",element:i.jsx(aw,{})}),i.jsx(ee,{path:"/security",element:i.jsx(e4,{})}),i.jsx(ee,{path:"/payment-rules",element:i.jsx(u4,{})}),i.jsx(ee,{path:"/refund",element:i.jsx(k4,{})}),i.jsx(ee,{path:"/club-rules",element:i.jsx(N4,{})}),i.jsx(ee,{path:"/privacy",element:i.jsx(B4,{})}),i.jsx(ee,{path:"/requisites",element:i.jsx(eC,{})}),i.jsx(ee,{path:"/admin",element:i.jsx(eE,{})}),i.jsx(ee,{path:"/about",element:i.jsx(tw,{})}),i.jsx(ee,{path:"/error",element:i.jsx(vE,{})}),i.jsx(ee,{path:"*",element:i.jsx(cE,{})})]})})})}const jE=yy`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #0f0f23;
    color: #ffffff;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Глобальные стили для скроллбара */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 20px rgba(123, 97, 255, 0.7);
    transform: scale(1.05);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.05);
  }

  /* Стилизация скроллбара для Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  }

  /* Стили для выделения текста */
  ::selection {
    background: rgba(123, 97, 255, 0.3);
    color: #ffffff;
  }

  ::-moz-selection {
    background: rgba(123, 97, 255, 0.3);
    color: #ffffff;
  }

  /* Убираем стандартные стили для кнопок и ссылок */
  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Стили для фокуса */
  *:focus {
    outline: 2px solid #7b61ff;
    outline-offset: 2px;
  }

  /* Анимации для плавного появления элементов */
  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Стили для мобильных устройств */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-thumb {
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
`;Nc.createRoot(document.getElementById("root")).render(i.jsxs(Ne.StrictMode,{children:[i.jsx(jE,{}),i.jsx(wE,{})]}));

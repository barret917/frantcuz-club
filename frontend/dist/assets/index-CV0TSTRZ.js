function Bg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ug(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var qf={exports:{}},Ms={},Zf={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Hg=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),Gg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),Zg=Symbol.for("react.lazy"),Nc=Symbol.iterator;function Jg(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var Jf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function Br(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Jf}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Br.prototype;function Eu(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Jf}var zu=Eu.prototype=new np;zu.constructor=Eu;ep(zu,Br.prototype);zu.isPureReactComponent=!0;var Dc=Array.isArray,rp=Object.prototype.hasOwnProperty,Pu={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rp.call(t,r)&&!ip.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:o,ref:s,props:i,_owner:Pu.current}}function e0(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ic=/\/+/g;function xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function Fo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Gi:case Wg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+xa(s,0):r,Dc(i)?(n="",e!=null&&(n=e.replace(Ic,"$&/")+"/"),Fo(i,t,n,"",function(c){return c})):i!=null&&(Ru(i)&&(i=e0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ic,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dc(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+xa(o,l);s+=Fo(o,t,n,u,i)}else if(u=Jg(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+xa(o,l++),s+=Fo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function so(e,t,n){if(e==null)return e;var r=[],i=0;return Fo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Bo={transition:null},r0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:Pu};function sp(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:so,forEach:function(e,t,n){so(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Br;B.Fragment=Hg;B.Profiler=Gg;B.PureComponent=Eu;B.StrictMode=Vg;B.Suspense=Qg;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;B.act=sp;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)rp.call(t,u)&&!ip.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yg,_context:e},e.Consumer=e};B.createElement=op;B.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Kg,render:e}};B.isValidElement=Ru;B.lazy=function(e){return{$$typeof:Zg,_payload:{_status:-1,_result:e},_init:n0}};B.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Bo.transition;Bo.transition={};try{e()}finally{Bo.transition=t}};B.unstable_act=sp;B.useCallback=function(e,t){return De.current.useCallback(e,t)};B.useContext=function(e){return De.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return De.current.useDeferredValue(e)};B.useEffect=function(e,t){return De.current.useEffect(e,t)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return De.current.useMemo(e,t)};B.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};B.useRef=function(e){return De.current.useRef(e)};B.useState=function(e){return De.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.3.1";Zf.exports=B;var z=Zf.exports;const Re=ku(z),i0=Bg({__proto__:null,default:Re},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=z,s0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),l0=Object.prototype.hasOwnProperty,u0=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)l0.call(t,r)&&!c0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:s0,type:e,key:o,ref:s,props:i,_owner:u0.current}}Ms.Fragment=a0;Ms.jsx=ap;Ms.jsxs=ap;qf.exports=Ms;var a=qf.exports,pl={},lp={exports:{}},et={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,D){var M=$.length;$.push(D);e:for(;0<M;){var V=M-1>>>1,G=$[V];if(0<i(G,D))$[V]=D,$[M]=G,M=V;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var D=$[0],M=$.pop();if(M!==D){$[0]=M;e:for(var V=0,G=$.length,wn=G>>>1;V<wn;){var ut=2*(V+1)-1,Vt=$[ut],Ge=ut+1,$t=$[Ge];if(0>i(Vt,M))Ge<G&&0>i($t,Vt)?($[V]=$t,$[Ge]=M,V=Ge):($[V]=Vt,$[ut]=M,V=ut);else if(Ge<G&&0>i($t,M))$[V]=$t,$[Ge]=M,V=Ge;else break e}}return D}function i($,D){var M=$.sortIndex-D.sortIndex;return M!==0?M:$.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,m=3,x=!1,y=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h($){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=$)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function w($){if(S=!1,h($),!y)if(n(u)!==null)y=!0,Z(C);else{var D=n(c);D!==null&&ge(w,D.startTime-$)}}function C($,D){y=!1,S&&(S=!1,v(R),R=-1),x=!0;var M=m;try{for(h(D),p=n(u);p!==null&&(!(p.expirationTime>D)||$&&!O());){var V=p.callback;if(typeof V=="function"){p.callback=null,m=p.priorityLevel;var G=V(p.expirationTime<=D);D=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(u)&&r(u),h(D)}else r(u);p=n(u)}if(p!==null)var wn=!0;else{var ut=n(c);ut!==null&&ge(w,ut.startTime-D),wn=!1}return wn}finally{p=null,m=M,x=!1}}var E=!1,j=null,R=-1,k=5,_=-1;function O(){return!(e.unstable_now()-_<k)}function I(){if(j!==null){var $=e.unstable_now();_=$;var D=!0;try{D=j(!0,$)}finally{D?L():(E=!1,j=null)}}else E=!1}var L;if(typeof f=="function")L=function(){f(I)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Me=X.port2;X.port1.onmessage=I,L=function(){Me.postMessage(null)}}else L=function(){b(I,0)};function Z($){j=$,E||(E=!0,L())}function ge($,D){R=b(function(){$(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Z(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var M=m;m=D;try{return $()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,D){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var M=m;m=$;try{return D()}finally{m=M}},e.unstable_scheduleCallback=function($,D,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,$){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=M+G,$={id:d++,callback:D,priorityLevel:$,startTime:M,expirationTime:G,sortIndex:-1},M>V?($.sortIndex=M,t(c,$),n(u)===null&&$===n(c)&&(S?(v(R),R=-1):S=!0,ge(w,M-V))):($.sortIndex=G,t(u,$),y||x||(y=!0,Z(C))),$},e.unstable_shouldYield=O,e.unstable_wrapCallback=function($){var D=m;return function(){var M=m;m=D;try{return $.apply(this,arguments)}finally{m=M}}}})(cp);up.exports=cp;var d0=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=z,Je=d0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,Ci={};function Hn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)dp.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},Lc={};function h0(e){return hl.call(Lc,e)?!0:hl.call(Mc,e)?!1:p0.test(e)?Lc[e]=!0:(Mc[e]=!0,!1)}function m0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||m0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function Tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_u,Tu);be[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_u,Tu);be[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_u,Tu);be[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,i,r)&&(n=null),r||i===null?h0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),hp=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ya;function ui(e){if(ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ya=t&&t[1]||""}return`
`+ya+e}var wa=!1;function Sa(e,t){if(!e||wa)return"";wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{wa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function v0(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case lr:return"Portal";case ml:return"Profiler";case Ou:return"StrictMode";case gl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pp:return(e.displayName||"Context")+".Consumer";case fp:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function y0(e){var t=mp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=y0(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vp(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function wl(e,t){vp(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ci(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function xp(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function Sp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function bp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,jr=null,Cr=null;function Hc(e){if(e=Ki(e)){if(typeof zl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Us(t),zl(e.stateNode,e.type,t))}}function jp(e){jr?Cr?Cr.push(e):Cr=[e]:jr=e}function Cp(){if(jr){var e=jr,t=Cr;if(Cr=jr=null,Hc(e),t)for(e=0;e<t.length;e++)Hc(t[e])}}function kp(e,t){return e(t)}function Ep(){}var ba=!1;function zp(e,t,n){if(ba)return e(t,n);ba=!0;try{return kp(e,t,n)}finally{ba=!1,(jr!==null||Cr!==null)&&(Ep(),Cp())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Us(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Pl=!1;if(At)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Pl=!1}function b0(e,t,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var mi=!1,as=null,ls=!1,Rl=null,j0={onError:function(e){mi=!0,as=e}};function C0(e,t,n,r,i,o,s,l,u){mi=!1,as=null,b0.apply(j0,arguments)}function k0(e,t,n,r,i,o,s,l,u){if(C0.apply(this,arguments),mi){if(mi){var c=as;mi=!1,as=null}else throw Error(T(198));ls||(ls=!0,Rl=c)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Vn(e)!==e)throw Error(T(188))}function E0(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vc(i),e;if(o===r)return Vc(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Rp(e){return e=E0(e),e!==null?_p(e):null}function _p(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_p(e);if(t!==null)return t;e=e.sibling}return null}var Tp=Je.unstable_scheduleCallback,Gc=Je.unstable_cancelCallback,z0=Je.unstable_shouldYield,P0=Je.unstable_requestPaint,oe=Je.unstable_now,R0=Je.unstable_getCurrentPriorityLevel,Mu=Je.unstable_ImmediatePriority,$p=Je.unstable_UserBlockingPriority,us=Je.unstable_NormalPriority,_0=Je.unstable_LowPriority,Op=Je.unstable_IdlePriority,Ls=null,Pt=null;function T0(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:N0,$0=Math.log,O0=Math.LN2;function N0(e){return e>>>=0,e===0?32:31-($0(e)/O0|0)|0}var co=64,fo=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=di(l):(o&=s,o!==0&&(r=di(o)))}else s=n&~i,s!==0?r=di(s):o!==0&&(r=di(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-vt(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=D0(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Np(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function M0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ip,Au,Mp,Lp,Ap,Tl=!1,po=[],on=null,sn=null,an=null,zi=new Map,Pi=new Map,Jt=[],L0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function A0(e,t,n,r,i){switch(t){case"focusin":return on=qr(on,e,t,n,r,i),!0;case"dragenter":return sn=qr(sn,e,t,n,r,i),!0;case"mouseover":return an=qr(an,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,qr(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pi.set(o,qr(Pi.get(o)||null,e,t,n,r,i)),!0}return!1}function Fp(e){var t=Rn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pp(n),t!==null){e.blockedOn=t,Ap(e.priority,function(){Mp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Ki(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function Xc(e,t,n){Uo(e)&&n.delete(t)}function F0(){Tl=!1,on!==null&&Uo(on)&&(on=null),sn!==null&&Uo(sn)&&(sn=null),an!==null&&Uo(an)&&(an=null),zi.forEach(Xc),Pi.forEach(Xc)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,F0)))}function Ri(e){function t(i){return Zr(i,e)}if(0<po.length){Zr(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Zr(on,e),sn!==null&&Zr(sn,e),an!==null&&Zr(an,e),zi.forEach(t),Pi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Fp(n),n.blockedOn===null&&Jt.shift()}var kr=Ht.ReactCurrentBatchConfig,ds=!0;function B0(e,t,n,r){var i=H,o=kr.transition;kr.transition=null;try{H=1,Fu(e,t,n,r)}finally{H=i,kr.transition=o}}function U0(e,t,n,r){var i=H,o=kr.transition;kr.transition=null;try{H=4,Fu(e,t,n,r)}finally{H=i,kr.transition=o}}function Fu(e,t,n,r){if(ds){var i=$l(e,t,n,r);if(i===null)Oa(e,t,r,fs,n),Yc(e,r);else if(A0(i,e,t,n,r))r.stopPropagation();else if(Yc(e,r),t&4&&-1<L0.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&Ip(o),o=$l(e,t,n,r),o===null&&Oa(e,t,r,fs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Oa(e,t,r,null,n)}}var fs=null;function $l(e,t,n,r){if(fs=null,e=Iu(r),e=Rn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function Bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case Mu:return 1;case $p:return 4;case us:case _0:return 16;case Op:return 536870912;default:return 16}default:return 16}}var tn=null,Bu=null,Wo=null;function Up(){if(Wo)return Wo;var e,t=Bu,n=t.length,r,i="value"in tn?tn.value:tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wo=i.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function Kc(){return!1}function tt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:Kc,this.isPropagationStopped=Kc,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=tt(Ur),Xi=ne({},Ur,{view:0,detail:0}),W0=tt(Xi),Ca,ka,Jr,As=ne({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ca=e.screenX-Jr.screenX,ka=e.screenY-Jr.screenY):ka=Ca=0,Jr=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Qc=tt(As),H0=ne({},As,{dataTransfer:0}),V0=tt(H0),G0=ne({},Xi,{relatedTarget:0}),Ea=tt(G0),Y0=ne({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=tt(Y0),K0=ne({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=tt(K0),q0=ne({},Ur,{data:0}),qc=tt(q0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ev[e])?!!t[e]:!1}function Wu(){return tv}var nv=ne({},Xi,{key:function(e){if(e.key){var t=Z0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rv=tt(nv),iv=ne({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=tt(iv),ov=ne({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),sv=tt(ov),av=ne({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=tt(av),uv=ne({},As,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=tt(uv),dv=[9,13,27,32],Hu=At&&"CompositionEvent"in window,gi=null;At&&"documentMode"in document&&(gi=document.documentMode);var fv=At&&"TextEvent"in window&&!gi,Wp=At&&(!Hu||gi&&8<gi&&11>=gi),Jc=" ",ed=!1;function Hp(e,t){switch(e){case"keyup":return dv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function pv(e,t){switch(e){case"compositionend":return Vp(t);case"keypress":return t.which!==32?null:(ed=!0,Jc);case"textInput":return e=t.data,e===Jc&&ed?null:e;default:return null}}function hv(e,t){if(cr)return e==="compositionend"||!Hu&&Hp(e,t)?(e=Up(),Wo=Bu=tn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wp&&t.locale!=="ko"?null:t.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mv[e.type]:t==="textarea"}function Gp(e,t,n,r){jp(r),t=ps(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,_i=null;function gv(e){rh(e,0)}function Fs(e){var t=pr(e);if(gp(t))return e}function vv(e,t){if(e==="change")return t}var Yp=!1;if(At){var za;if(At){var Pa="oninput"in document;if(!Pa){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Pa=typeof nd.oninput=="function"}za=Pa}else za=!1;Yp=za&&(!document.documentMode||9<document.documentMode)}function rd(){vi&&(vi.detachEvent("onpropertychange",Xp),_i=vi=null)}function Xp(e){if(e.propertyName==="value"&&Fs(_i)){var t=[];Gp(t,_i,e,Iu(e)),zp(gv,t)}}function xv(e,t,n){e==="focusin"?(rd(),vi=t,_i=n,vi.attachEvent("onpropertychange",Xp)):e==="focusout"&&rd()}function yv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs(_i)}function wv(e,t){if(e==="click")return Fs(t)}function Sv(e,t){if(e==="input"||e==="change")return Fs(t)}function bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:bv;function Ti(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qp(){for(var e=window,t=ss();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ss(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jv(e){var t=Qp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kp(n.ownerDocument.documentElement,n)){if(r!==null&&Vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=od(n,o);var s=od(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cv=At&&"documentMode"in document&&11>=document.documentMode,dr=null,Ol=null,xi=null,Nl=!1;function sd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||dr==null||dr!==ss(r)||(r=dr,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Ti(xi,r)||(xi=r,r=ps(Ol,"onSelect"),0<r.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Ra={},qp={};At&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Bs(e){if(Ra[e])return Ra[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qp)return Ra[e]=t[n];return e}var Zp=Bs("animationend"),Jp=Bs("animationiteration"),eh=Bs("animationstart"),th=Bs("transitionend"),nh=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){nh.set(e,t),Hn(t,[e])}for(var _a=0;_a<ad.length;_a++){var Ta=ad[_a],kv=Ta.toLowerCase(),Ev=Ta[0].toUpperCase()+Ta.slice(1);vn(kv,"on"+Ev)}vn(Zp,"onAnimationEnd");vn(Jp,"onAnimationIteration");vn(eh,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(th,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,k0(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;ld(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;ld(i,l,c),o=u}}}if(ls)throw e=Rl,ls=!1,Rl=null,e}function K(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(ih(t,e,2,!1),n.add(r))}function $a(e,t,n){var r=0;t&&(r|=4),ih(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[go]){e[go]=!0,dp.forEach(function(n){n!=="selectionchange"&&(zv.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,$a("selectionchange",!1,t))}}function ih(e,t,n,r){switch(Bp(t)){case 1:var i=B0;break;case 4:i=U0;break;default:i=Fu}n=i.bind(null,t,n,e),i=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Oa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Rn(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}zp(function(){var c=o,d=Iu(n),p=[];e:{var m=nh.get(e);if(m!==void 0){var x=Uu,y=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=rv;break;case"focusin":y="focus",x=Ea;break;case"focusout":y="blur",x=Ea;break;case"beforeblur":case"afterblur":x=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=sv;break;case Zp:case Jp:case eh:x=X0;break;case th:x=lv;break;case"scroll":x=W0;break;case"wheel":x=cv;break;case"copy":case"cut":case"paste":x=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Zc}var S=(t&4)!==0,b=!S&&e==="scroll",v=S?m!==null?m+"Capture":null:m;S=[];for(var f=c,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,v!==null&&(w=Ei(f,v),w!=null&&S.push(Oi(f,w,h)))),b)break;f=f.return}0<S.length&&(m=new x(m,y,null,n,d),p.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==El&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Ft]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?Rn(y):null,y!==null&&(b=Vn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(S=Qc,w="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Zc,w="onPointerLeave",v="onPointerEnter",f="pointer"),b=x==null?m:pr(x),h=y==null?m:pr(y),m=new S(w,f+"leave",x,n,d),m.target=b,m.relatedTarget=h,w=null,Rn(d)===c&&(S=new S(v,f+"enter",y,n,d),S.target=h,S.relatedTarget=b,w=S),b=w,x&&y)t:{for(S=x,v=y,f=0,h=S;h;h=Qn(h))f++;for(h=0,w=v;w;w=Qn(w))h++;for(;0<f-h;)S=Qn(S),f--;for(;0<h-f;)v=Qn(v),h--;for(;f--;){if(S===v||v!==null&&S===v.alternate)break t;S=Qn(S),v=Qn(v)}S=null}else S=null;x!==null&&ud(p,m,x,S,!1),y!==null&&b!==null&&ud(p,b,y,S,!0)}}e:{if(m=c?pr(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=vv;else if(td(m))if(Yp)C=Sv;else{C=yv;var E=xv}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=wv);if(C&&(C=C(e,c))){Gp(p,C,n,d);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Sl(m,"number",m.value)}switch(E=c?pr(c):window,e){case"focusin":(td(E)||E.contentEditable==="true")&&(dr=E,Ol=c,xi=null);break;case"focusout":xi=Ol=dr=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,sd(p,n,d);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":sd(p,n,d)}var j;if(Hu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else cr?Hp(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Wp&&n.locale!=="ko"&&(cr||R!=="onCompositionStart"?R==="onCompositionEnd"&&cr&&(j=Up()):(tn=d,Bu="value"in tn?tn.value:tn.textContent,cr=!0)),E=ps(c,R),0<E.length&&(R=new qc(R,e,null,n,d),p.push({event:R,listeners:E}),j?R.data=j:(j=Vp(n),j!==null&&(R.data=j)))),(j=fv?pv(e,n):hv(e,n))&&(c=ps(c,"onBeforeInput"),0<c.length&&(d=new qc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=j))}rh(p,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(Oi(e,o,i)),o=Ei(e,t),o!=null&&r.push(Oi(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ud(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ei(n,o),u!=null&&s.unshift(Oi(n,u,l))):i||(u=Ei(n,o),u!=null&&s.push(Oi(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Pv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(Pv,`
`).replace(Rv,"")}function vo(e,t,n){if(t=cd(t),cd(e)!==t&&n)throw Error(T(425))}function hs(){}var Dl=null,Il=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Tv=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch($v)}:Ll;function $v(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Wr,Ni="__reactProps$"+Wr,Ft="__reactContainer$"+Wr,Al="__reactEvents$"+Wr,Ov="__reactListeners$"+Wr,Nv="__reactHandles$"+Wr;function Rn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fd(e);e!==null;){if(n=e[zt])return n;e=fd(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Us(e){return e[Ni]||null}var Fl=[],hr=-1;function xn(e){return{current:e}}function q(e){0>hr||(e.current=Fl[hr],Fl[hr]=null,hr--)}function Y(e,t){hr++,Fl[hr]=e.current,e.current=t}var gn={},Te=xn(gn),Be=xn(!1),Ln=gn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function ms(){q(Be),q(Te)}function pd(e,t,n){if(Te.current!==gn)throw Error(T(168));Y(Te,t),Y(Be,n)}function oh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,x0(e)||"Unknown",i));return ne({},n,r)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Ln=Te.current,Y(Te,e),Y(Be,Be.current),!0}function hd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=oh(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,q(Be),q(Te),Y(Te,e)):q(Be),Y(Be,n)}var Dt=null,Ws=!1,Da=!1;function sh(e){Dt===null?Dt=[e]:Dt.push(e)}function Dv(e){Ws=!0,sh(e)}function yn(){if(!Da&&Dt!==null){Da=!0;var e=0,t=H;try{var n=Dt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Ws=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Tp(Mu,yn),i}finally{H=t,Da=!1}}return null}var mr=[],gr=0,vs=null,xs=0,nt=[],rt=0,An=null,It=1,Mt="";function zn(e,t){mr[gr++]=xs,mr[gr++]=vs,vs=e,xs=t}function ah(e,t,n){nt[rt++]=It,nt[rt++]=Mt,nt[rt++]=An,An=e;var r=It;e=Mt;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var o=32-vt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,It=1<<32-vt(t)+i|n<<i|r,Mt=o+e}else It=1<<o|n<<i|r,Mt=e}function Gu(e){e.return!==null&&(zn(e,1),ah(e,1,0))}function Yu(e){for(;e===vs;)vs=mr[--gr],mr[gr]=null,xs=mr[--gr],mr[gr]=null;for(;e===An;)An=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null,It=nt[--rt],nt[rt]=null}var qe=null,Qe=null,J=!1,gt=null;function lh(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:It,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Qe=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(J){var t=Qe;if(t){var n=t;if(!md(e,t)){if(Bl(e))throw Error(T(418));t=ln(n.nextSibling);var r=qe;t&&md(e,t)?lh(r,n):(e.flags=e.flags&-4097|2,J=!1,qe=e)}}else{if(Bl(e))throw Error(T(418));e.flags=e.flags&-4097|2,J=!1,qe=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function xo(e){if(e!==qe)return!1;if(!J)return gd(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Qe)){if(Bl(e))throw uh(),Error(T(418));for(;t;)lh(e,t),t=ln(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?ln(e.stateNode.nextSibling):null;return!0}function uh(){for(var e=Qe;e;)e=ln(e.nextSibling)}function _r(){Qe=qe=null,J=!1}function Xu(e){gt===null?gt=[e]:gt.push(e)}var Iv=Ht.ReactCurrentBatchConfig;function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function ch(e){function t(v,f){if(e){var h=v.deletions;h===null?(v.deletions=[f],v.flags|=16):h.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=fn(v,f),v.index=0,v.sibling=null,v}function o(v,f,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<f?(v.flags|=2,f):h):(v.flags|=2,f)):(v.flags|=1048576,f)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,h,w){return f===null||f.tag!==6?(f=Ua(h,v.mode,w),f.return=v,f):(f=i(f,h),f.return=v,f)}function u(v,f,h,w){var C=h.type;return C===ur?d(v,f,h.props.children,w,h.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qt&&vd(C)===f.type)?(w=i(f,h.props),w.ref=ei(v,f,h),w.return=v,w):(w=qo(h.type,h.key,h.props,null,v.mode,w),w.ref=ei(v,f,h),w.return=v,w)}function c(v,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Wa(h,v.mode,w),f.return=v,f):(f=i(f,h.children||[]),f.return=v,f)}function d(v,f,h,w,C){return f===null||f.tag!==7?(f=Dn(h,v.mode,w,C),f.return=v,f):(f=i(f,h),f.return=v,f)}function p(v,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ua(""+f,v.mode,h),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ao:return h=qo(f.type,f.key,f.props,null,v.mode,h),h.ref=ei(v,null,f),h.return=v,h;case lr:return f=Wa(f,v.mode,h),f.return=v,f;case qt:var w=f._init;return p(v,w(f._payload),h)}if(ci(f)||Kr(f))return f=Dn(f,v.mode,h,null),f.return=v,f;yo(v,f)}return null}function m(v,f,h,w){var C=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(v,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:return h.key===C?u(v,f,h,w):null;case lr:return h.key===C?c(v,f,h,w):null;case qt:return C=h._init,m(v,f,C(h._payload),w)}if(ci(h)||Kr(h))return C!==null?null:d(v,f,h,w,null);yo(v,h)}return null}function x(v,f,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(h)||null,l(f,v,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return v=v.get(w.key===null?h:w.key)||null,u(f,v,w,C);case lr:return v=v.get(w.key===null?h:w.key)||null,c(f,v,w,C);case qt:var E=w._init;return x(v,f,h,E(w._payload),C)}if(ci(w)||Kr(w))return v=v.get(h)||null,d(f,v,w,C,null);yo(f,w)}return null}function y(v,f,h,w){for(var C=null,E=null,j=f,R=f=0,k=null;j!==null&&R<h.length;R++){j.index>R?(k=j,j=null):k=j.sibling;var _=m(v,j,h[R],w);if(_===null){j===null&&(j=k);break}e&&j&&_.alternate===null&&t(v,j),f=o(_,f,R),E===null?C=_:E.sibling=_,E=_,j=k}if(R===h.length)return n(v,j),J&&zn(v,R),C;if(j===null){for(;R<h.length;R++)j=p(v,h[R],w),j!==null&&(f=o(j,f,R),E===null?C=j:E.sibling=j,E=j);return J&&zn(v,R),C}for(j=r(v,j);R<h.length;R++)k=x(j,v,R,h[R],w),k!==null&&(e&&k.alternate!==null&&j.delete(k.key===null?R:k.key),f=o(k,f,R),E===null?C=k:E.sibling=k,E=k);return e&&j.forEach(function(O){return t(v,O)}),J&&zn(v,R),C}function S(v,f,h,w){var C=Kr(h);if(typeof C!="function")throw Error(T(150));if(h=C.call(h),h==null)throw Error(T(151));for(var E=C=null,j=f,R=f=0,k=null,_=h.next();j!==null&&!_.done;R++,_=h.next()){j.index>R?(k=j,j=null):k=j.sibling;var O=m(v,j,_.value,w);if(O===null){j===null&&(j=k);break}e&&j&&O.alternate===null&&t(v,j),f=o(O,f,R),E===null?C=O:E.sibling=O,E=O,j=k}if(_.done)return n(v,j),J&&zn(v,R),C;if(j===null){for(;!_.done;R++,_=h.next())_=p(v,_.value,w),_!==null&&(f=o(_,f,R),E===null?C=_:E.sibling=_,E=_);return J&&zn(v,R),C}for(j=r(v,j);!_.done;R++,_=h.next())_=x(j,v,R,_.value,w),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?R:_.key),f=o(_,f,R),E===null?C=_:E.sibling=_,E=_);return e&&j.forEach(function(I){return t(v,I)}),J&&zn(v,R),C}function b(v,f,h,w){if(typeof h=="object"&&h!==null&&h.type===ur&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:e:{for(var C=h.key,E=f;E!==null;){if(E.key===C){if(C=h.type,C===ur){if(E.tag===7){n(v,E.sibling),f=i(E,h.props.children),f.return=v,v=f;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qt&&vd(C)===E.type){n(v,E.sibling),f=i(E,h.props),f.ref=ei(v,E,h),f.return=v,v=f;break e}n(v,E);break}else t(v,E);E=E.sibling}h.type===ur?(f=Dn(h.props.children,v.mode,w,h.key),f.return=v,v=f):(w=qo(h.type,h.key,h.props,null,v.mode,w),w.ref=ei(v,f,h),w.return=v,v=w)}return s(v);case lr:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(v,f.sibling),f=i(f,h.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=Wa(h,v.mode,w),f.return=v,v=f}return s(v);case qt:return E=h._init,b(v,f,E(h._payload),w)}if(ci(h))return y(v,f,h,w);if(Kr(h))return S(v,f,h,w);yo(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,h),f.return=v,v=f):(n(v,f),f=Ua(h,v.mode,w),f.return=v,v=f),s(v)):n(v,f)}return b}var Tr=ch(!0),dh=ch(!1),ys=xn(null),ws=null,vr=null,Ku=null;function Qu(){Ku=vr=ws=null}function qu(e){var t=ys.current;q(ys),e._currentValue=t}function Wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){ws=e,Ku=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Ku!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(ws===null)throw Error(T(308));vr=e,ws.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var _n=null;function Zu(e){_n===null?_n=[e]:_n.push(e)}function fh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}function xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ss(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,d=c=u=null,l=o;do{var m=l.lane,x=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,S=l;switch(m=t,x=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){p=y.call(x,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,m=typeof y=="function"?y.call(x,p,m):y,m==null)break e;p=ne({},p,m);break e;case 2:Zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,u=p):d=d.next=x,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=p}}function yd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Qi={},Rt=xn(Qi),Di=xn(Qi),Ii=xn(Qi);function Tn(e){if(e===Qi)throw Error(T(174));return e}function ec(e,t){switch(Y(Ii,t),Y(Di,e),Y(Rt,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}q(Rt),Y(Rt,t)}function $r(){q(Rt),q(Di),q(Ii)}function hh(e){Tn(Ii.current);var t=Tn(Rt.current),n=jl(t,e.type);t!==n&&(Y(Di,e),Y(Rt,n))}function tc(e){Di.current===e&&(q(Rt),q(Di))}var ee=xn(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function nc(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var Go=Ht.ReactCurrentDispatcher,Ma=Ht.ReactCurrentBatchConfig,Fn=0,te=null,pe=null,ve=null,js=!1,yi=!1,Mi=0,Mv=0;function je(){throw Error(T(321))}function rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function ic(e,t,n,r,i,o){if(Fn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Go.current=e===null||e.memoizedState===null?Bv:Uv,e=n(r,i),yi){o=0;do{if(yi=!1,Mi=0,25<=o)throw Error(T(301));o+=1,ve=pe=null,t.updateQueue=null,Go.current=Wv,e=n(r,i)}while(yi)}if(Go.current=Cs,t=pe!==null&&pe.next!==null,Fn=0,ve=pe=te=null,js=!1,t)throw Error(T(300));return e}function oc(){var e=Mi!==0;return Mi=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?te.memoizedState=ve=e:ve=ve.next=e,ve}function at(){if(pe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ve===null?te.memoizedState:ve.next;if(t!==null)ve=t,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ve===null?te.memoizedState=ve=e:ve=ve.next=e}return ve}function Li(e,t){return typeof t=="function"?t(e):t}function La(e){var t=at(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((Fn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,te.lanes|=d,Bn|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,wt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Aa(e){var t=at(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);wt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mh(){}function gh(e,t){var n=te,r=at(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,sc(yh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ai(9,xh.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(T(349));Fn&30||vh(n,t,i)}return i}function vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,r){t.value=n,t.getSnapshot=r,wh(t)&&Sh(e)}function yh(e,t,n){return n(function(){wh(t)&&Sh(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Sh(e){var t=Bt(e,1);t!==null&&xt(t,e,1,-1)}function wd(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=Fv.bind(null,te,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bh(){return at().memoizedState}function Yo(e,t,n,r){var i=Ct();te.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function Hs(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(pe!==null){var s=pe.memoizedState;if(o=s.destroy,r!==null&&rc(r,s.deps)){i.memoizedState=Ai(t,n,o,r);return}}te.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function Sd(e,t){return Yo(8390656,8,e,t)}function sc(e,t){return Hs(2048,8,e,t)}function jh(e,t){return Hs(4,2,e,t)}function Ch(e,t){return Hs(4,4,e,t)}function kh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){return n=n!=null?n.concat([e]):null,Hs(4,4,kh.bind(null,t,e),n)}function ac(){}function zh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ph(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rh(e,t,n){return Fn&21?(wt(n,t)||(n=Np(),te.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function Lv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ma.transition;Ma.transition={};try{e(!1),t()}finally{H=n,Ma.transition=r}}function _h(){return at().memoizedState}function Av(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Th(e))$h(t,n);else if(n=fh(e,t,n,r),n!==null){var i=Ne();xt(n,e,r,i),Oh(n,t,r)}}function Fv(e,t,n){var r=dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Th(e))$h(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,wt(l,s)){var u=t.interleaved;u===null?(i.next=i,Zu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=fh(e,t,i,r),n!==null&&(i=Ne(),xt(n,e,r,i),Oh(n,t,r))}}function Th(e){var t=e.alternate;return e===te||t!==null&&t===te}function $h(e,t){yi=js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}var Cs={readContext:st,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Bv={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Av.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:ac,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=Lv.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=Ct();if(J){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ye===null)throw Error(T(349));Fn&30||vh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sd(yh.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,xh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ye.identifierPrefix;if(J){var n=Mt,r=It;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uv={readContext:st,useCallback:zh,useContext:st,useEffect:sc,useImperativeHandle:Eh,useInsertionEffect:jh,useLayoutEffect:Ch,useMemo:Ph,useReducer:La,useRef:bh,useState:function(){return La(Li)},useDebugValue:ac,useDeferredValue:function(e){var t=at();return Rh(t,pe.memoizedState,e)},useTransition:function(){var e=La(Li)[0],t=at().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:gh,useId:_h,unstable_isNewReconciler:!1},Wv={readContext:st,useCallback:zh,useContext:st,useEffect:sc,useImperativeHandle:Eh,useInsertionEffect:jh,useLayoutEffect:Ch,useMemo:Ph,useReducer:Aa,useRef:bh,useState:function(){return Aa(Li)},useDebugValue:ac,useDeferredValue:function(e){var t=at();return pe===null?t.memoizedState=e:Rh(t,pe.memoizedState,e)},useTransition:function(){var e=Aa(Li)[0],t=at().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:gh,useId:_h,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=dn(e),o=Lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(xt(t,e,i,r),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=dn(e),o=Lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(xt(t,e,i,r),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=dn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(xt(t,e,r,n),Vo(t,e,r))}};function bd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,o):!0}function Nh(e,t,n){var r=!1,i=gn,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=Ue(t)?Ln:Te.current,r=t.contextTypes,o=(r=r!=null)?Rr(e,i):gn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ju(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=Ue(t)?Ln:Te.current,i.context=Rr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vs.enqueueReplaceState(i,i.state,null),Ss(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var n="",r=t;do n+=v0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hv=typeof WeakMap=="function"?WeakMap:Map;function Dh(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,nu=r),Gl(e,t)},n}function Ih(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ix.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var Vv=Ht.ReactCurrentOwner,Fe=!1;function Oe(e,t,n,r){t.child=e===null?dh(t,null,n,r):Tr(t,e.child,n,r)}function zd(e,t,n,r,i){n=n.render;var o=t.ref;return Er(t,i),r=ic(e,t,n,r,o,i),n=oc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(J&&n&&Gu(t),t.flags|=1,Oe(e,t,r,i),t.child)}function Pd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mh(e,t,o,r,i)):(e=qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(s,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ti(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return Yl(e,t,n,r,i)}function Lh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(yr,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(yr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(yr,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(yr,Ke),Ke|=r;return Oe(e,t,i,n),t.child}function Ah(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var o=Ue(n)?Ln:Te.current;return o=Rr(t,o),Er(t,i),n=ic(e,t,n,r,o,i),r=oc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(J&&r&&Gu(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Rd(e,t,n,r,i){if(Ue(n)){var o=!0;gs(t)}else o=!1;if(Er(t,i),t.stateNode===null)Xo(e,t),Nh(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=Ue(n)?Ln:Te.current,c=Rr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&jd(t,s,r,c),Zt=!1;var m=t.memoizedState;s.state=m,Ss(t,r,s,i),u=t.memoizedState,l!==r||m!==u||Be.current||Zt?(typeof d=="function"&&(Hl(t,n,d,r),u=t.memoizedState),(l=Zt||bd(t,n,l,r,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ph(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ht(t.type,l),s.props=c,p=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=st(u):(u=Ue(n)?Ln:Te.current,u=Rr(t,u));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==u)&&jd(t,s,r,u),Zt=!1,m=t.memoizedState,s.state=m,Ss(t,r,s,i);var y=t.memoizedState;l!==p||m!==y||Be.current||Zt?(typeof x=="function"&&(Hl(t,n,x,r),y=t.memoizedState),(c=Zt||bd(t,n,c,r,m,y,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){Ah(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&hd(t,n,!1),Ut(e,t,o);r=t.stateNode,Vv.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,l,o)):Oe(e,t,l,o),t.memoizedState=r.state,i&&hd(t,n,!0),t.child}function Fh(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),ec(e,t.containerInfo)}function _d(e,t,n,r,i){return _r(),Xu(i),t.flags|=256,Oe(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bh(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ee,i&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xs(s,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ql(n),t.memoizedState=Kl,e):lc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Gv(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=fn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=fn(l,o):(o=Dn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lc(e,t){return t=Xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&Xu(r),Tr(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(T(422))),wo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xs({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tr(t,e.child,null,s),t.child.memoizedState=Ql(s),t.memoizedState=Kl,o);if(!(t.mode&1))return wo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(T(419)),r=Fa(o,r,void 0),wo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Fe||l){if(r=ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),xt(r,e,i,-1))}return hc(),r=Fa(Error(T(421))),wo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ox.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=ln(i.nextSibling),qe=t,J=!0,gt=null,e!==null&&(nt[rt++]=It,nt[rt++]=Mt,nt[rt++]=An,It=e.id,Mt=e.overflow,An=t),t=lc(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wl(e.return,t,n)}function Ba(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,o);break;case"together":Ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yv(e,t,n){switch(t.tag){case 3:Fh(t),_r();break;case 5:hh(t);break;case 1:Ue(t.type)&&gs(t);break;case 4:ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(ys,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Bh(e,t,n):(Y(ee,ee.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Lh(e,t,n)}return Ut(e,t,n)}var Wh,ql,Hh,Vh;Wh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};Hh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(Rt.current);var o=null;switch(n){case"input":i=yl(e,i),r=yl(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=bl(e,i),r=bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hs)}Cl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ci.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&K("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xv(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ue(t.type)&&ms(),Ce(t),null;case 3:return r=t.stateNode,$r(),q(Be),q(Te),nc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(ou(gt),gt=null))),ql(e,t),Ce(t),null;case 5:tc(t);var i=Tn(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)Hh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ce(t),null}if(e=Tn(Rt.current),xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Ni]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Fc(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Uc(r,o),K("invalid",r)}Cl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),i=["children",""+l]):Ci.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":lo(r),Bc(r,o,!0);break;case"textarea":lo(r),Wc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[zt]=t,e[Ni]=r,Wh(e,t,!1,!1),t.stateNode=e;e:{switch(s=kl(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Fc(e,r),i=yl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),K("invalid",e);break;case"textarea":Uc(e,r),i=bl(e,r),K("invalid",e);break;default:i=r}Cl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?bp(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wp(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ki(e,u):typeof u=="number"&&ki(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?u!=null&&o==="onScroll"&&K("scroll",e):u!=null&&$u(e,o,u,s))}switch(n){case"input":lo(e),Bc(e,r,!1);break;case"textarea":lo(e),Wc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?br(e,!!r.multiple,o,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Vh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Tn(Ii.current),Tn(Rt.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ce(t),null;case 13:if(q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Qe!==null&&t.mode&1&&!(t.flags&128))uh(),_r(),t.flags|=98560,o=!1;else if(o=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[zt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else gt!==null&&(ou(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?me===0&&(me=3):hc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return $r(),ql(e,t),e===null&&$i(t.stateNode.containerInfo),Ce(t),null;case 10:return qu(t.type._context),Ce(t),null;case 17:return Ue(t.type)&&ms(),Ce(t),null;case 19:if(q(ee),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ti(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=bs(e),s!==null){for(t.flags|=128,ti(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Nr&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=bs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return Ce(t),null}else 2*oe()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Kv(e,t){switch(Yu(t),t.tag){case 1:return Ue(t.type)&&ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),q(Be),q(Te),nc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tc(t),null;case 13:if(q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ee),null;case 4:return $r(),null;case 10:return qu(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var So=!1,ze=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,N=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){re(e,t,r)}}var $d=!1;function qv(e,t){if(Dl=ds,e=Qp(),Vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++d===r&&(u=s),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Il={focusedElem:e,selectionRange:n},ds=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,b=y.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?S:ht(t.type,S),b);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=$d,$d=!1,y}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zl(t,n,o)}i=i.next}while(i!==r)}}function Gs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gh(e){var t=e.alternate;t!==null&&(e.alternate=null,Gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Ni],delete t[Al],delete t[Ov],delete t[Nv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yh(e){return e.tag===5||e.tag===3||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}var we=null,mt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ls,n)}catch{}switch(n.tag){case 5:ze||xr(n,t);case 6:var r=we,i=mt;we=null,Yt(e,t,n),we=r,mt=i,we!==null&&(mt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(mt?(e=we,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),Ri(e)):Na(we,n.stateNode));break;case 4:r=we,i=mt,we=n.stateNode.containerInfo,mt=!0,Yt(e,t,n),we=r,mt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zl(n,t,s),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!ze&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Yt(e,t,n),ze=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qv),t.forEach(function(r){var i=sx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,mt=!1;break e;case 3:we=l.stateNode.containerInfo,mt=!0;break e;case 4:we=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(we===null)throw Error(T(160));Xh(o,s,i),we=null,mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){re(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}function Kh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),bt(e),r&4){try{wi(3,e,e.return),Gs(3,e)}catch(S){re(e,e.return,S)}try{wi(5,e,e.return)}catch(S){re(e,e.return,S)}}break;case 1:ct(t,e),bt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(ct(t,e),bt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{ki(i,"")}catch(S){re(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&vp(i,o),kl(l,s);var c=kl(l,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?bp(i,p):d==="dangerouslySetInnerHTML"?wp(i,p):d==="children"?ki(i,p):$u(i,d,p,c)}switch(l){case"input":wl(i,o);break;case"textarea":xp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?br(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ni]=o}catch(S){re(e,e.return,S)}}break;case 6:if(ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){re(e,e.return,S)}}break;case 3:if(ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(S){re(e,e.return,S)}break;case 4:ct(t,e),bt(e);break;case 13:ct(t,e),bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dc=oe())),r&4&&Nd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(c=ze)||d,ct(t,e),ze=c):ct(t,e),bt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(p=N=d;N!==null;){switch(m=N,x=m.child,m.tag){case 0:case 11:case 14:case 15:wi(4,m,m.return);break;case 1:xr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){re(r,n,S)}}break;case 5:xr(m,m.return);break;case 22:if(m.memoizedState!==null){Id(p);continue}}x!==null?(x.return=m,N=x):Id(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sp("display",s))}catch(S){re(e,e.return,S)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){re(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),bt(e),r&4&&Nd(e);break;case 21:break;default:ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yh(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var o=Od(e);tu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Od(e);eu(e,l,s);break;default:throw Error(T(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zv(e,t,n){N=e,Qh(e)}function Qh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||So;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ze;l=So;var c=ze;if(So=s,(ze=u)&&!c)for(N=i;N!==null;)s=N,u=s.child,s.tag===22&&s.memoizedState!==null?Md(i):u!==null?(u.return=s,N=u):Md(i);for(;o!==null;)N=o,Qh(o),o=o.sibling;N=i,So=l,ze=c}Dd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Dd(e)}}function Dd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Gs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ri(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ze||t.flags&512&&Jl(t)}catch(m){re(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Id(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Md(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gs(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){re(t,i,u)}}var o=t.return;try{Jl(t)}catch(u){re(t,o,u)}break;case 5:var s=t.return;try{Jl(t)}catch(u){re(t,s,u)}}}catch(u){re(t,t.return,u)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var Jv=Math.ceil,ks=Ht.ReactCurrentDispatcher,uc=Ht.ReactCurrentOwner,ot=Ht.ReactCurrentBatchConfig,U=0,ye=null,ce=null,Se=0,Ke=0,yr=xn(0),me=0,Fi=null,Bn=0,Ys=0,cc=0,Si=null,Ae=null,dc=0,Nr=1/0,Ot=null,Es=!1,nu=null,cn=null,bo=!1,nn=null,zs=0,bi=0,ru=null,Ko=-1,Qo=0;function Ne(){return U&6?oe():Ko!==-1?Ko:Ko=oe()}function dn(e){return e.mode&1?U&2&&Se!==0?Se&-Se:Iv.transition!==null?(Qo===0&&(Qo=Np()),Qo):(e=H,e!==0||(e=window.event,e=e===void 0?16:Bp(e.type)),e):1}function xt(e,t,n,r){if(50<bi)throw bi=0,ru=null,Error(T(185));Yi(e,n,r),(!(U&2)||e!==ye)&&(e===ye&&(!(U&2)&&(Ys|=n),me===4&&en(e,Se)),We(e,r),n===1&&U===0&&!(t.mode&1)&&(Nr=oe()+500,Ws&&yn()))}function We(e,t){var n=e.callbackNode;I0(e,t);var r=cs(e,e===ye?Se:0);if(r===0)n!==null&&Gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gc(n),t===1)e.tag===0?Dv(Ld.bind(null,e)):sh(Ld.bind(null,e)),Tv(function(){!(U&6)&&yn()}),n=null;else{switch(Dp(r)){case 1:n=Mu;break;case 4:n=$p;break;case 16:n=us;break;case 536870912:n=Op;break;default:n=us}n=im(n,qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qh(e,t){if(Ko=-1,Qo=0,U&6)throw Error(T(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=cs(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ps(e,r);else{t=r;var i=U;U|=2;var o=Jh();(ye!==e||Se!==t)&&(Ot=null,Nr=oe()+500,Nn(e,t));do try{nx();break}catch(l){Zh(e,l)}while(!0);Qu(),ks.current=o,U=i,ce!==null?t=0:(ye=null,Se=0,t=me)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=iu(e,i))),t===1)throw n=Fi,Nn(e,0),en(e,r),We(e,oe()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!ex(i)&&(t=Ps(e,r),t===2&&(o=_l(e),o!==0&&(r=o,t=iu(e,o))),t===1))throw n=Fi,Nn(e,0),en(e,r),We(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Pn(e,Ae,Ot);break;case 3:if(en(e,r),(r&130023424)===r&&(t=dc+500-oe(),10<t)){if(cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ll(Pn.bind(null,e,Ae,Ot),t);break}Pn(e,Ae,Ot);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-vt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jv(r/1960))-r,10<r){e.timeoutHandle=Ll(Pn.bind(null,e,Ae,Ot),r);break}Pn(e,Ae,Ot);break;case 5:Pn(e,Ae,Ot);break;default:throw Error(T(329))}}}return We(e,oe()),e.callbackNode===n?qh.bind(null,e):null}function iu(e,t){var n=Si;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ps(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&ou(t)),e}function ou(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function ex(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~cc,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(U&6)throw Error(T(327));zr();var t=cs(e,0);if(!(t&1))return We(e,oe()),null;var n=Ps(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=Fi,Nn(e,0),en(e,t),We(e,oe()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ae,Ot),We(e,oe()),null}function fc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Nr=oe()+500,Ws&&yn())}}function Un(e){nn!==null&&nn.tag===0&&!(U&6)&&zr();var t=U;U|=1;var n=ot.transition,r=H;try{if(ot.transition=null,H=1,e)return e()}finally{H=r,ot.transition=n,U=t,!(U&6)&&yn()}}function pc(){Ke=yr.current,q(yr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_v(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ms();break;case 3:$r(),q(Be),q(Te),nc();break;case 5:tc(r);break;case 4:$r();break;case 13:q(ee);break;case 19:q(ee);break;case 10:qu(r.type._context);break;case 22:case 23:pc()}n=n.return}if(ye=e,ce=e=fn(e.current,null),Se=Ke=t,me=0,Fi=null,cc=Ys=Bn=0,Ae=Si=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return e}function Zh(e,t){do{var n=ce;try{if(Qu(),Go.current=Cs,js){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}js=!1}if(Fn=0,ve=pe=te=null,yi=!1,Mi=0,uc.current=null,n===null||n.return===null){me=1,Fi=t,ce=null;break}e:{var o=e,s=n.return,l=n,u=t;if(t=Se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=kd(s);if(x!==null){x.flags&=-257,Ed(x,s,l,o,t),x.mode&1&&Cd(o,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var S=new Set;S.add(u),t.updateQueue=S}else y.add(u);break e}else{if(!(t&1)){Cd(o,c,t),hc();break e}u=Error(T(426))}}else if(J&&l.mode&1){var b=kd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ed(b,s,l,o,t),Xu(Or(u,l));break e}}o=u=Or(u,l),me!==4&&(me=2),Si===null?Si=[o]:Si.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Dh(o,u,t);xd(o,v);break e;case 1:l=u;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cn===null||!cn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ih(o,l,t);xd(o,w);break e}}o=o.return}while(o!==null)}tm(n)}catch(C){t=C,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Jh(){var e=ks.current;return ks.current=Cs,e===null?Cs:e}function hc(){(me===0||me===3||me===2)&&(me=4),ye===null||!(Bn&268435455)&&!(Ys&268435455)||en(ye,Se)}function Ps(e,t){var n=U;U|=2;var r=Jh();(ye!==e||Se!==t)&&(Ot=null,Nn(e,t));do try{tx();break}catch(i){Zh(e,i)}while(!0);if(Qu(),U=n,ks.current=r,ce!==null)throw Error(T(261));return ye=null,Se=0,me}function tx(){for(;ce!==null;)em(ce)}function nx(){for(;ce!==null&&!z0();)em(ce)}function em(e){var t=rm(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?tm(e):ce=t,uc.current=null}function tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}else if(n=Xv(n,t,Ke),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function Pn(e,t,n){var r=H,i=ot.transition;try{ot.transition=null,H=1,rx(e,t,n,r)}finally{ot.transition=i,H=r}return null}function rx(e,t,n,r){do zr();while(nn!==null);if(U&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(M0(e,o),e===ye&&(ce=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,im(us,function(){return zr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var s=H;H=1;var l=U;U|=4,uc.current=null,qv(e,n),Kh(n,e),jv(Il),ds=!!Dl,Il=Dl=null,e.current=n,Zv(n),P0(),U=l,H=s,ot.transition=o}else e.current=n;if(bo&&(bo=!1,nn=e,zs=i),o=e.pendingLanes,o===0&&(cn=null),T0(n.stateNode),We(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Es)throw Es=!1,e=nu,nu=null,e;return zs&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===ru?bi++:(bi=0,ru=e):bi=0,yn(),null}function zr(){if(nn!==null){var e=Dp(zs),t=ot.transition,n=H;try{if(ot.transition=null,H=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,zs=0,U&6)throw Error(T(331));var i=U;for(U|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:wi(8,d,o)}var p=d.child;if(p!==null)p.return=d,N=p;else for(;N!==null;){d=N;var m=d.sibling,x=d.return;if(Gh(d),d===c){N=null;break}if(m!==null){m.return=x,N=m;break}N=x}}}var y=o.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,N=v;break e}N=o.return}}var f=e.current;for(N=f;N!==null;){s=N;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,N=h;else e:for(s=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gs(9,l)}}catch(C){re(l,l.return,C)}if(l===s){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(U=i,yn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Ls,e)}catch{}r=!0}return r}finally{H=n,ot.transition=t}}return!1}function Ad(e,t,n){t=Or(n,t),t=Dh(e,t,1),e=un(e,t,1),t=Ne(),e!==null&&(Yi(e,1,t),We(e,t))}function re(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Or(n,e),e=Ih(t,e,1),t=un(t,e,1),e=Ne(),t!==null&&(Yi(t,1,e),We(t,e));break}}t=t.return}}function ix(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>oe()-dc?Nn(e,0):cc|=n),We(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=Ne();e=Bt(e,t),e!==null&&(Yi(e,t,n),We(e,n))}function ox(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nm(e,n)}function sx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),nm(e,n)}var rm;rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,Yv(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,J&&t.flags&1048576&&ah(t,xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var i=Rr(t,Te.current);Er(t,n),i=ic(null,t,r,e,i,n);var o=oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,gs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ju(t),i.updater=Vs,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,J&&o&&Gu(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lx(r),e=ht(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=Rd(null,t,r,e,n);break e;case 11:t=zd(null,t,r,e,n);break e;case 14:t=Pd(null,t,r,ht(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Rd(e,t,r,i,n);case 3:e:{if(Fh(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ph(e,t),Ss(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(T(423)),t),t=_d(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(T(424)),t),t=_d(e,t,r,n,i);break e}else for(Qe=ln(t.stateNode.containerInfo.firstChild),qe=t,J=!0,gt=null,n=dh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Ut(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return hh(t),e===null&&Ul(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ml(r,i)?s=null:o!==null&&Ml(r,o)&&(t.flags|=32),Ah(e,t),Oe(e,t,s,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return Bh(e,t,n);case 4:return ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),zd(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(ys,r._currentValue),r._currentValue=s,o!==null)if(wt(o.value,s)){if(o.children===i.children&&!Be.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Lt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Wl(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=st(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Pd(e,t,r,i,n);case 15:return Mh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Xo(e,t),t.tag=1,Ue(r)?(e=!0,gs(t)):e=!1,Er(t,n),Nh(t,r,i),Vl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return Uh(e,t,n);case 22:return Lh(e,t,n)}throw Error(T(156,t.tag))};function im(e,t){return Tp(e,t)}function ax(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new ax(e,t,n,r)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lx(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Du)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")mc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return Dn(n.children,i,o,t);case Ou:s=8,i|=8;break;case ml:return e=it(12,n,t,i|2),e.elementType=ml,e.lanes=o,e;case gl:return e=it(13,n,t,i),e.elementType=gl,e.lanes=o,e;case vl:return e=it(19,n,t,i),e.elementType=vl,e.lanes=o,e;case hp:return Xs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fp:s=10;break e;case pp:s=9;break e;case Nu:s=11;break e;case Du:s=14;break e;case qt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=it(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Xs(e,t,n,r){return e=it(22,e,r,t),e.elementType=hp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ua(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Wa(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ux(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gc(e,t,n,r,i,o,s,l,u){return e=new ux(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(o),e}function cx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function om(e){if(!e)return gn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ue(n))return oh(e,n,t)}return t}function sm(e,t,n,r,i,o,s,l,u){return e=gc(n,r,!0,e,i,o,s,l,u),e.context=om(null),n=e.current,r=Ne(),i=dn(n),o=Lt(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,Yi(e,i,r),We(e,r),e}function Ks(e,t,n,r){var i=t.current,o=Ne(),s=dn(i);return n=om(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,s),e!==null&&(xt(e,i,s,o),Vo(e,i,s)),s}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vc(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function dx(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}Qs.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ks(e,t,null,null)};Qs.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Ks(null,e,null,null)}),t[Ft]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Fp(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function fx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Rs(s);o.call(c)}}var s=sm(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=s,e[Ft]=s.current,$i(e.nodeType===8?e.parentNode:e),Un(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Rs(u);l.call(c)}}var u=gc(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=u,e[Ft]=u.current,$i(e.nodeType===8?e.parentNode:e),Un(function(){Ks(t,u,n,r)}),u}function Zs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Rs(s);l.call(u)}}Ks(t,s,e,i)}else s=fx(n,t,e,i,r);return Rs(s)}Ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=di(t.pendingLanes);n!==0&&(Lu(t,n|1),We(t,oe()),!(U&6)&&(Nr=oe()+500,yn()))}break;case 13:Un(function(){var r=Bt(e,1);if(r!==null){var i=Ne();xt(r,e,1,i)}}),vc(e,1)}};Au=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ne();xt(t,e,134217728,n)}vc(e,134217728)}};Mp=function(e){if(e.tag===13){var t=dn(e),n=Bt(e,t);if(n!==null){var r=Ne();xt(n,e,t,r)}vc(e,t)}};Lp=function(){return H};Ap=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};zl=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Us(r);if(!i)throw Error(T(90));gp(r),wl(r,i)}}}break;case"textarea":xp(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};kp=fc;Ep=Un;var px={usingClientEntryPoint:!1,Events:[Ki,pr,Us,jp,Cp,fc]},ni={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hx={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rp(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Ls=jo.inject(hx),Pt=jo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(T(200));return cx(e,t,null,n)};et.createRoot=function(e,t){if(!yc(e))throw Error(T(299));var n=!1,r="",i=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gc(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,$i(e.nodeType===8?e.parentNode:e),new xc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Rp(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Un(e)};et.hydrate=function(e,t,n){if(!qs(t))throw Error(T(200));return Zs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sm(t,null,e,1,n??null,i,!1,o,s),e[Ft]=t.current,$i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qs(t)};et.render=function(e,t,n){if(!qs(t))throw Error(T(200));return Zs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!qs(e))throw Error(T(40));return e._reactRootContainer?(Un(function(){Zs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};et.unstable_batchedUpdates=fc;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qs(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Zs(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),lp.exports=et;var qi=lp.exports,Ud=qi;pl.createRoot=Ud.createRoot,pl.hydrateRoot=Ud.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Wd="popstate";function mx(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return su("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_s(i)}return vx(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function um(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gx(){return Math.random().toString(36).substr(2,8)}function Hd(e,t){return{usr:e.state,key:e.key,idx:t}}function su(e,t,n,r){return n===void 0&&(n=null),Bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||gx()})}function _s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=rn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Bi({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){l=rn.Pop;let b=d(),v=b==null?null:b-c;c=b,u&&u({action:l,location:S.location,delta:v})}function m(b,v){l=rn.Push;let f=su(S.location,b,v);c=d()+1;let h=Hd(f,c),w=S.createHref(f);try{s.pushState(h,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&u&&u({action:l,location:S.location,delta:1})}function x(b,v){l=rn.Replace;let f=su(S.location,b,v);c=d();let h=Hd(f,c),w=S.createHref(f);s.replaceState(h,"",w),o&&u&&u({action:l,location:S.location,delta:0})}function y(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof b=="string"?b:_s(b);return f=f.replace(/ $/,"%20"),de(v,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,v)}let S={get action(){return l},get location(){return e(i,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Wd,p),u=b,()=>{i.removeEventListener(Wd,p),u=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let v=y(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:x,go(b){return s.go(b)}};return S}var Vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vd||(Vd={}));function xx(e,t,n){return n===void 0&&(n="/"),yx(e,t,n)}function yx(e,t,n,r){let i=typeof t=="string"?Hr(t):t,o=wc(i.pathname||"/",n);if(o==null)return null;let s=cm(e);wx(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=$x(o);l=Rx(s[u],c)}return l}function cm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(de(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),cm(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:zx(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of dm(o.path))i(o,s,u)}),t}function dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=dm(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function wx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Px(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sx=/^:[\w-]+$/,bx=3,jx=2,Cx=1,kx=10,Ex=-2,Gd=e=>e==="*";function zx(e,t){let n=e.split("/"),r=n.length;return n.some(Gd)&&(r+=Ex),t&&(r+=jx),n.filter(i=>!Gd(i)).reduce((i,o)=>i+(Sx.test(o)?bx:o===""?Cx:kx),r)}function Px(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=_x({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:pn([o,p.pathname]),pathnameBase:Ix(pn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=pn([o,p.pathnameBase]))}return s}function _x(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let S=l[p]||"";s=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const y=l[p];return x&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function Tx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),um(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $x(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return um(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ox(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e;return{pathname:n?n.startsWith("/")?n:Nx(n,t):t,search:Mx(r),hash:Lx(i)}}function Nx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ha(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fm(e,t){let n=Dx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=Bi({},e),de(!i.pathname||!i.pathname.includes("?"),Ha("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Ha("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Ha("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?t[p]:"/"}let u=Ox(i,l),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),Ix=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ax(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hm=["post","put","patch","delete"];new Set(hm);const Fx=["get",...hm];new Set(Fx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}const Sc=z.createContext(null),Bx=z.createContext(null),Gn=z.createContext(null),Js=z.createContext(null),Yn=z.createContext({outlet:null,matches:[],isDataRoute:!1}),mm=z.createContext(null);function Ux(e,t){let{relative:n}=t===void 0?{}:t;Zi()||de(!1);let{basename:r,navigator:i}=z.useContext(Gn),{hash:o,pathname:s,search:l}=vm(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:pn([r,s])),i.createHref({pathname:u,search:l,hash:o})}function Zi(){return z.useContext(Js)!=null}function Ji(){return Zi()||de(!1),z.useContext(Js).location}function gm(e){z.useContext(Gn).static||z.useLayoutEffect(e)}function Wx(){let{isDataRoute:e}=z.useContext(Yn);return e?ny():Hx()}function Hx(){Zi()||de(!1);let e=z.useContext(Sc),{basename:t,future:n,navigator:r}=z.useContext(Gn),{matches:i}=z.useContext(Yn),{pathname:o}=Ji(),s=JSON.stringify(fm(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return gm(()=>{l.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=pm(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:pn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,o,e])}function vm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=z.useContext(Gn),{matches:i}=z.useContext(Yn),{pathname:o}=Ji(),s=JSON.stringify(fm(i,r.v7_relativeSplatPath));return z.useMemo(()=>pm(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Vx(e,t){return Gx(e,t)}function Gx(e,t,n,r){Zi()||de(!1);let{navigator:i}=z.useContext(Gn),{matches:o}=z.useContext(Yn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Ji(),d;if(t){var p;let b=typeof t=="string"?Hr(t):t;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||de(!1),d=b}else d=c;let m=d.pathname||"/",x=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=xx(e,{pathname:x}),S=qx(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:pn([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:pn([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&S?z.createElement(Js.Provider,{value:{location:Ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rn.Pop}},S):S}function Yx(){let e=ty(),t=Ax(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:i},n):null,null)}const Xx=z.createElement(Yx,null);class Kx extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(Yn.Provider,{value:this.props.routeContext},z.createElement(mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qx(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Yn.Provider,{value:t},r)}function qx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:x}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,m)=>{let x,y=!1,S=null,b=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||Xx,u&&(c<0&&m===0?(ry("route-fallback"),y=!0,b=null):c===m&&(y=!0,b=p.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,m+1)),f=()=>{let h;return x?h=S:y?h=b:p.route.Component?h=z.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,z.createElement(Qx,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement(Kx,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:f(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):f()},null)}var xm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xm||{}),ym=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ym||{});function Zx(e){let t=z.useContext(Sc);return t||de(!1),t}function Jx(e){let t=z.useContext(Bx);return t||de(!1),t}function ey(e){let t=z.useContext(Yn);return t||de(!1),t}function wm(e){let t=ey(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function ty(){var e;let t=z.useContext(mm),n=Jx(ym.UseRouteError),r=wm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ny(){let{router:e}=Zx(xm.UseNavigateStable),t=wm(),n=z.useRef(!1);return gm(()=>{n.current=!0}),z.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ui({fromRouteId:t},o)))},[e,t])}const Yd={};function ry(e,t,n){Yd[e]||(Yd[e]=!0)}function iy(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ee(e){de(!1)}function oy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:o,static:s=!1,future:l}=e;Zi()&&de(!1);let u=t.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:o,static:s,future:Ui({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof r=="string"&&(r=Hr(r));let{pathname:d="/",search:p="",hash:m="",state:x=null,key:y="default"}=r,S=z.useMemo(()=>{let b=wc(d,u);return b==null?null:{location:{pathname:b,search:p,hash:m,state:x,key:y},navigationType:i}},[u,d,p,m,x,y,i]);return S==null?null:z.createElement(Gn.Provider,{value:c},z.createElement(Js.Provider,{children:n,value:S}))}function sy(e){let{children:t,location:n}=e;return Vx(au(t),n)}new Promise(()=>{});function au(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(r,i)=>{if(!z.isValidElement(r))return;let o=[...t,i];if(r.type===z.Fragment){n.push.apply(n,au(r.props.children,o));return}r.type!==Ee&&de(!1),!r.props.index||!r.props.children||de(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=au(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lu.apply(this,arguments)}function ay(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ly(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uy(e,t){return e.button===0&&(!t||t==="_self")&&!ly(e)}const cy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dy="6";try{window.__reactRouterVersion=dy}catch{}const fy="startTransition",Xd=i0[fy];function py(e){let{basename:t,children:n,future:r,window:i}=e,o=z.useRef();o.current==null&&(o.current=mx({window:i,v5Compat:!0}));let s=o.current,[l,u]=z.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=z.useCallback(p=>{c&&Xd?Xd(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>s.listen(d),[s,d]),z.useEffect(()=>iy(r),[r]),z.createElement(oy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",my=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gy=z.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,m=ay(t,cy),{basename:x}=z.useContext(Gn),y,S=!1;if(typeof c=="string"&&my.test(c)&&(y=c,hy))try{let h=new URL(window.location.href),w=c.startsWith("//")?new URL(h.protocol+c):new URL(c),C=wc(w.pathname,x);w.origin===h.origin&&C!=null?c=C+w.search+w.hash:S=!0}catch{}let b=Ux(c,{relative:i}),v=vy(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||v(h)}return z.createElement("a",lu({},m,{href:y||b,onClick:S||o?r:f,ref:n,target:u}))});var Kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kd||(Kd={}));var Qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qd||(Qd={}));function vy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,u=Wx(),c=Ji(),d=vm(e,{relative:s});return z.useCallback(p=>{if(uy(p,n)){p.preventDefault();let m=r!==void 0?r:_s(c)===_s(d);u(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[c,u,d,r,i,n,e,o,s,l])}var _e=function(){return _e=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_e.apply(this,arguments)};function Wi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Q="-ms-",ji="-moz-",W="-webkit-",Sm="comm",ea="rule",bc="decl",xy="@import",bm="@keyframes",yy="@layer",jm=Math.abs,jc=String.fromCharCode,uu=Object.assign;function wy(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Cm(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Zo(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function km(e){return e.length}function pi(e,t){return t.push(e),e}function Sy(e,t){return e.map(t).join("")}function qd(e,t){return e.filter(function(n){return!Nt(n,t)})}var ta=1,Ir=1,Em=0,lt=0,ue=0,Vr="";function na(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ta,column:Ir,length:s,return:"",siblings:l}}function Qt(e,t){return uu(na("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Qt(e.root,{children:[e]});pi(e,e.siblings)}function by(){return ue}function jy(){return ue=lt>0?xe(Vr,--lt):0,Ir--,ue===10&&(Ir=1,ta--),ue}function yt(){return ue=lt<Em?xe(Vr,lt++):0,Ir++,ue===10&&(Ir=1,ta++),ue}function In(){return xe(Vr,lt)}function Jo(){return lt}function ra(e,t){return Dr(Vr,e,t)}function cu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cy(e){return ta=Ir=1,Em=Et(Vr=e),lt=0,[]}function ky(e){return Vr="",e}function Va(e){return Cm(ra(lt-1,du(e===91?e+2:e===40?e+1:e)))}function Ey(e){for(;(ue=In())&&ue<33;)yt();return cu(e)>2||cu(ue)>3?"":" "}function zy(e,t){for(;--t&&yt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return ra(e,Jo()+(t<6&&In()==32&&yt()==32))}function du(e){for(;yt();)switch(ue){case e:return lt;case 34:case 39:e!==34&&e!==39&&du(ue);break;case 40:e===41&&du(e);break;case 92:yt();break}return lt}function Py(e,t){for(;yt()&&e+ue!==57;)if(e+ue===84&&In()===47)break;return"/*"+ra(t,lt-1)+"*"+jc(e===47?e:yt())}function Ry(e){for(;!cu(In());)yt();return ra(e,lt)}function _y(e){return ky(es("",null,null,null,[""],e=Cy(e),0,[0],e))}function es(e,t,n,r,i,o,s,l,u){for(var c=0,d=0,p=s,m=0,x=0,y=0,S=1,b=1,v=1,f=0,h="",w=i,C=o,E=r,j=h;b;)switch(y=f,f=yt()){case 40:if(y!=108&&xe(j,p-1)==58){Zo(j+=F(Va(f),"&","&\f"),"&\f",jm(c?l[c-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:j+=Va(f);break;case 9:case 10:case 13:case 32:j+=Ey(y);break;case 92:j+=zy(Jo()-1,7);continue;case 47:switch(In()){case 42:case 47:pi(Ty(Py(yt(),Jo()),t,n,u),u);break;default:j+="/"}break;case 123*S:l[c++]=Et(j)*v;case 125*S:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:v==-1&&(j=F(j,/\f/g,"")),x>0&&Et(j)-p&&pi(x>32?Jd(j+";",r,n,p-1,u):Jd(F(j," ","")+";",r,n,p-2,u),u);break;case 59:j+=";";default:if(pi(E=Zd(j,t,n,c,d,i,l,h,w=[],C=[],p,o),o),f===123)if(d===0)es(j,t,E,E,w,o,p,l,C);else switch(m===99&&xe(j,3)===110?100:m){case 100:case 108:case 109:case 115:es(e,E,E,r&&pi(Zd(e,E,E,0,0,i,l,h,i,w=[],p,C),C),i,C,p,l,r?w:C);break;default:es(j,E,E,E,[""],C,0,l,C)}}c=d=x=0,S=v=1,h=j="",p=s;break;case 58:p=1+Et(j),x=y;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&jy()==125)continue}switch(j+=jc(f),f*S){case 38:v=d>0?1:(j+="\f",-1);break;case 44:l[c++]=(Et(j)-1)*v,v=1;break;case 64:In()===45&&(j+=Va(yt())),m=In(),d=p=Et(h=j+=Ry(Jo())),f++;break;case 45:y===45&&Et(j)==2&&(S=0)}}return o}function Zd(e,t,n,r,i,o,s,l,u,c,d,p){for(var m=i-1,x=i===0?o:[""],y=km(x),S=0,b=0,v=0;S<r;++S)for(var f=0,h=Dr(e,m+1,m=jm(b=s[S])),w=e;f<y;++f)(w=Cm(b>0?x[f]+" "+h:F(h,/&\f/g,x[f])))&&(u[v++]=w);return na(e,t,n,i===0?ea:l,u,c,d,p)}function Ty(e,t,n,r){return na(e,t,n,Sm,jc(by()),Dr(e,2,-2),0,r)}function Jd(e,t,n,r,i){return na(e,t,n,bc,Dr(e,0,r),Dr(e,r+1,-1),r,i)}function zm(e,t,n){switch(wy(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return ji+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+ji+e+Q+e+e;case 5936:switch(xe(e,t+11)){case 114:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Q+e+e;case 6165:return W+e+Q+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return W+e+Q+"flex-item-"+F(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":Q+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+Q+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Q+F(e,"shrink","negative")+e;case 5292:return W+e+Q+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+Q+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return Q+"grid-column-align"+Dr(e,t)+e;break;case 2592:case 3360:return Q+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nt(r.props,/grid-\w+-end/)})?~Zo(e+(n=n[t].value),"span",0)?e:Q+F(e,"-start","")+e+Q+"grid-row-span:"+(~Zo(n,"span",0)?Nt(n,/\d+/):+Nt(n,/\d+/)-+Nt(e,/\d+/))+";":Q+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nt(r.props,/grid-\w+-start/)})?e:Q+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+ji+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zo(e,"stretch",0)?zm(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,u,c){return Q+i+":"+o+c+(s?Q+i+"-span:"+(l?u:+u-+o)+c:"")+e});case 4949:if(xe(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(xe(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Q+"$2box$3")+e;case 100:return F(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Ts(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function $y(e,t,n,r){switch(e.type){case yy:if(e.children.length)break;case xy:case bc:return e.return=e.return||e.value;case Sm:return"";case bm:return e.return=e.value+"{"+Ts(e.children,r)+"}";case ea:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Ts(e.children,r))?e.return=e.value+"{"+n+"}":""}function Oy(e){var t=km(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function Ny(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bc:e.return=zm(e.value,e.length,n);return;case bm:return Ts([Qt(e,{value:F(e.value,"@","@"+W)})],r);case ea:if(e.length)return Sy(n=e.props,function(i){switch(Nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Qt(e,{props:[F(i,/:(read-\w+)/,":"+ji+"$1")]})),qn(Qt(e,{props:[i]})),uu(e,{props:qd(n,r)});break;case"::placeholder":qn(Qt(e,{props:[F(i,/:(plac\w+)/,":"+W+"input-$1")]})),qn(Qt(e,{props:[F(i,/:(plac\w+)/,":"+ji+"$1")]})),qn(Qt(e,{props:[F(i,/:(plac\w+)/,Q+"input-$1")]})),qn(Qt(e,{props:[i]})),uu(e,{props:qd(n,r)});break}return""})}}var Iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xe={},Mr=typeof process<"u"&&Xe!==void 0&&(Xe.REACT_APP_SC_ATTR||Xe.SC_ATTR)||"data-styled",Pm="active",Rm="data-styled-version",ia="6.1.19",Cc=`/*!sc*/
`,$s=typeof window<"u"&&typeof document<"u",My=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==""?Xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.SC_DISABLE_SPEEDY!==void 0&&Xe.SC_DISABLE_SPEEDY!==""&&Xe.SC_DISABLE_SPEEDY!=="false"&&Xe.SC_DISABLE_SPEEDY),Ly={},oa=Object.freeze([]),Lr=Object.freeze({});function _m(e,t,n){return n===void 0&&(n=Lr),e.theme!==n.theme&&e.theme||t||n.theme}var Tm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fy=/(^-|-$)/g;function ef(e){return e.replace(Ay,"-").replace(Fy,"")}var By=/(a)(d)/gi,Co=52,tf=function(e){return String.fromCharCode(e+(e>25?39:97))};function fu(e){var t,n="";for(t=Math.abs(e);t>Co;t=t/Co|0)n=tf(t%Co)+n;return(tf(t%Co)+n).replace(By,"$1-$2")}var Ga,$m=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Om=function(e){return wr($m,e)};function Nm(e){return fu(Om(e)>>>0)}function Uy(e){return e.displayName||e.name||"Component"}function Ya(e){return typeof e=="string"&&!0}var Dm=typeof Symbol=="function"&&Symbol.for,Im=Dm?Symbol.for("react.memo"):60115,Wy=Dm?Symbol.for("react.forward_ref"):60112,Hy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gy=((Ga={})[Wy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ga[Im]=Mm,Ga);function nf(e){return("type"in(t=e)&&t.type.$$typeof)===Im?Mm:"$$typeof"in e?Gy[e.$$typeof]:Hy;var t}var Yy=Object.defineProperty,Xy=Object.getOwnPropertyNames,rf=Object.getOwnPropertySymbols,Ky=Object.getOwnPropertyDescriptor,Qy=Object.getPrototypeOf,of=Object.prototype;function Lm(e,t,n){if(typeof t!="string"){if(of){var r=Qy(t);r&&r!==of&&Lm(e,r,n)}var i=Xy(t);rf&&(i=i.concat(rf(t)));for(var o=nf(e),s=nf(t),l=0;l<i.length;++l){var u=i[l];if(!(u in Vy||n&&n[u]||s&&u in s||o&&u in o)){var c=Ky(t,u);try{Yy(e,u,c)}catch{}}}}return e}function Ar(e){return typeof e=="function"}function kc(e){return typeof e=="object"&&"styledComponentId"in e}function $n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Hi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hu(e,t,n){if(n===void 0&&(n=!1),!n&&!Hi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=hu(e[r],t[r]);else if(Hi(t))for(var r in t)e[r]=hu(e[r],t[r]);return e}function Ec(e,t){Object.defineProperty(e,"toString",{value:t})}function eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw eo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Cc);return n},e}(),ts=new Map,Os=new Map,ns=1,ko=function(e){if(ts.has(e))return ts.get(e);for(;Os.has(ns);)ns++;var t=ns++;return ts.set(e,t),Os.set(t,e),t},Zy=function(e,t){ns=t+1,ts.set(e,t),Os.set(t,e)},Jy="style[".concat(Mr,"][").concat(Rm,'="').concat(ia,'"]'),e1=new RegExp("^".concat(Mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t1=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},n1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Cc),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var u=l.match(e1);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Zy(d,c),t1(e,d,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},sf=function(e){for(var t=document.querySelectorAll(Jy),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Mr)!==Pm&&(n1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function r1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Am=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Mr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Mr,Pm),r.setAttribute(Rm,ia);var s=r1();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},i1=function(){function e(t){this.element=Am(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw eo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),o1=function(){function e(t){this.element=Am(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),s1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),af=$s,a1={isServer:!$s,useCSSOMInjection:!My},Ns=function(){function e(t,n,r){t===void 0&&(t=Lr),n===void 0&&(n={});var i=this;this.options=_e(_e({},a1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$s&&af&&(af=!1,sf(this)),Ec(this,function(){return function(o){for(var s=o.getTag(),l=s.length,u="",c=function(p){var m=function(v){return Os.get(v)}(p);if(m===void 0)return"continue";var x=o.names.get(m),y=s.getGroup(p);if(x===void 0||!x.size||y.length===0)return"continue";var S="".concat(Mr,".g").concat(p,'[id="').concat(m,'"]'),b="";x!==void 0&&x.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),u+="".concat(y).concat(S,'{content:"').concat(b,'"}').concat(Cc)},d=0;d<l;d++)c(d);return u}(i)})}return e.registerId=function(t){return ko(t)},e.prototype.rehydrate=function(){!this.server&&$s&&sf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new s1(i):r?new i1(i):new o1(i)}(this.options),new qy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l1=/&/g,u1=/^\s*\/\/.*$/gm;function Fm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Fm(n.children,t)),n})}function c1(e){var t,n,r,i=Lr,o=i.options,s=o===void 0?Lr:o,l=i.plugins,u=l===void 0?oa:l,c=function(m,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=u.slice();d.push(function(m){m.type===ea&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(l1,n).replace(r,c))}),s.prefix&&d.push(Dy),d.push($y);var p=function(m,x,y,S){x===void 0&&(x=""),y===void 0&&(y=""),S===void 0&&(S="&"),t=S,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(u1,""),v=_y(y||x?"".concat(y," ").concat(x," { ").concat(b," }"):b);s.namespace&&(v=Fm(v,s.namespace));var f=[];return Ts(v,Oy(d.concat(Ny(function(h){return f.push(h)})))),f};return p.hash=u.length?u.reduce(function(m,x){return x.name||eo(15),wr(m,x.name)},$m).toString():"",p}var d1=new Ns,mu=c1(),Bm=Re.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:mu});Bm.Consumer;Re.createContext(void 0);function gu(){return z.useContext(Bm)}var f1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=mu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ec(this,function(){throw eo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mu),this.name+t.hash},e}(),p1=function(e){return e>="A"&&e<="Z"};function lf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;p1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Um=function(e){return e==null||e===!1||e===""},Wm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Um(o)&&(Array.isArray(o)&&o.isCss||Ar(o)?r.push("".concat(lf(i),":"),o,";"):Hi(o)?r.push.apply(r,Wi(Wi(["".concat(i," {")],Wm(o),!1),["}"],!1)):r.push("".concat(lf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Iy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function hn(e,t,n,r){if(Um(e))return[];if(kc(e))return[".".concat(e.styledComponentId)];if(Ar(e)){if(!Ar(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return hn(i,t,n,r)}var o;return e instanceof f1?n?(e.inject(n,r),[e.getName(r)]):[e]:Hi(e)?Wm(e):Array.isArray(e)?Array.prototype.concat.apply(oa,e.map(function(s){return hn(s,t,n,r)})):[e.toString()]}function Hm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!kc(n))return!1}return!0}var h1=Om(ia),m1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hm(t),this.componentId=n,this.baseHash=wr(h1,n),this.baseStyle=r,Ns.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=$n(i,this.staticRulesId);else{var o=pu(hn(this.rules,t,n,r)),s=fu(wr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=$n(i,s),this.staticRulesId=s}else{for(var u=wr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=pu(hn(p,t,n,r));u=wr(u,m+d),c+=m}}if(c){var x=fu(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=$n(i,x)}}return i},e}(),zc=Re.createContext(void 0);zc.Consumer;var Xa={};function g1(e,t,n){var r=kc(e),i=e,o=!Ya(e),s=t.attrs,l=s===void 0?oa:s,u=t.componentId,c=u===void 0?function(w,C){var E=typeof w!="string"?"sc":ef(w);Xa[E]=(Xa[E]||0)+1;var j="".concat(E,"-").concat(Nm(ia+E+Xa[E]));return C?"".concat(C,"-").concat(j):j}(t.displayName,t.parentComponentId):u,d=t.displayName,p=d===void 0?function(w){return Ya(w)?"styled.".concat(w):"Styled(".concat(Uy(w),")")}(e):d,m=t.displayName&&t.componentId?"".concat(ef(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(w,C){return S(w,C)&&b(w,C)}}else y=S}var v=new m1(n,m,r?i.componentStyle:void 0);function f(w,C){return function(E,j,R){var k=E.attrs,_=E.componentStyle,O=E.defaultProps,I=E.foldedComponentIds,L=E.styledComponentId,X=E.target,Me=Re.useContext(zc),Z=gu(),ge=E.shouldForwardProp||Z.shouldForwardProp,$=_m(j,Me,O)||Lr,D=function(Vt,Ge,$t){for(var Xr,Sn=_e(_e({},Ge),{className:void 0,theme:$t}),va=0;va<Vt.length;va+=1){var oo=Ar(Xr=Vt[va])?Xr(Sn):Xr;for(var Gt in oo)Sn[Gt]=Gt==="className"?$n(Sn[Gt],oo[Gt]):Gt==="style"?_e(_e({},Sn[Gt]),oo[Gt]):oo[Gt]}return Ge.className&&(Sn.className=$n(Sn.className,Ge.className)),Sn}(k,j,$),M=D.as||X,V={};for(var G in D)D[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&D.theme===$||(G==="forwardedAs"?V.as=D.forwardedAs:ge&&!ge(G,M)||(V[G]=D[G]));var wn=function(Vt,Ge){var $t=gu(),Xr=Vt.generateAndInjectStyles(Ge,$t.styleSheet,$t.stylis);return Xr}(_,D),ut=$n(I,L);return wn&&(ut+=" "+wn),D.className&&(ut+=" "+D.className),V[Ya(M)&&!Tm.has(M)?"class":"className"]=ut,R&&(V.ref=R),z.createElement(M,V)}(h,w,C)}f.displayName=p;var h=Re.forwardRef(f);return h.attrs=x,h.componentStyle=v,h.displayName=p,h.shouldForwardProp=y,h.foldedComponentIds=r?$n(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var R=0,k=E;R<k.length;R++)hu(C,k[R],!0);return C}({},i.defaultProps,w):w}}),Ec(h,function(){return".".concat(h.styledComponentId)}),o&&Lm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function uf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var cf=function(e){return Object.assign(e,{isCss:!0})};function Vm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ar(e)||Hi(e))return cf(hn(uf(oa,Wi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hn(r):cf(hn(uf(r,t)))}function vu(e,t,n){if(n===void 0&&(n=Lr),!t)throw eo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Vm.apply(void 0,Wi([i],o,!1)))};return r.attrs=function(i){return vu(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return vu(e,t,_e(_e({},n),i))},r}var Gm=function(e){return vu(g1,e)},g=Gm;Tm.forEach(function(e){g[e]=Gm(e)});var v1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Hm(t),Ns.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(pu(hn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ns.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function x1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vm.apply(void 0,Wi([e],t,!1)),i="sc-global-".concat(Nm(JSON.stringify(r))),o=new v1(r,i),s=function(u){var c=gu(),d=Re.useContext(zc),p=Re.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(p,u,c.styleSheet,d,c.stylis),Re.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,u,c.styleSheet,d,c.stylis),function(){return o.removeStyles(p,c.styleSheet)}},[p,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,p,m){if(o.isStatic)o.renderStyles(u,Ly,d,m);else{var x=_e(_e({},c),{theme:_m(c,p,s.defaultProps)});o.renderStyles(u,x,d,m)}}return Re.memo(s)}const y1=g.header`
  background: #222;
  position: sticky;
  top: 0;
  z-index: 100;
`,w1=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.2rem 0;
`,S1=g.div`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.15em;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,b1=g.nav`
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
`,j1=g.ul`
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
`,C1=g.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #333;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,k1=g(gy)`
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
`,E1=g.button`
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
`,z1=[{path:"/",label:"Главная"},{path:"/3d-tour",label:"3D тур"},{path:"/billiards",label:"Бильярд"},{path:"/karaoke",label:"Караоке"},{path:"/disco",label:"Диско-бар"},{path:"/playstation",label:"Playstation"},{path:"/lounge",label:"Кальян"},{path:"/games",label:"Настольные игры"},{path:"/booking",label:"Бронирование"},{path:"/menu",label:"Меню"},{path:"/events",label:"Мероприятия"},{path:"/contact",label:"Контакты"}],P1=()=>{const e=Ji(),[t,n]=z.useState(!1);return a.jsxs(y1,{children:[a.jsx(w1,{children:a.jsx(S1,{children:"FRANTSUZ"})}),a.jsxs(b1,{children:[a.jsx(j1,{open:t,children:z1.map(r=>a.jsx(C1,{children:a.jsx(k1,{to:r.path,$active:e.pathname===r.path,onClick:()=>n(!1),children:r.label})},r.path))}),a.jsx(E1,{onClick:()=>n(r=>!r),children:t?"✕":"☰"})]})]})},Wt=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,Xn=g.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
`,R1=g.footer`
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
`,_1=g.div`
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
`,Ka=g.div`
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
`,ri=g.div`
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
  }
`,T1=g.div`
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
`,$1=g.div`
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
`,O1=()=>a.jsx(R1,{children:a.jsxs(Wt,{children:[a.jsxs(_1,{children:[a.jsxs(Ka,{children:[a.jsx("h3",{children:"Контакты"}),a.jsx(ri,{children:a.jsx("a",{href:"tel:+79680905550",children:"+7(968) 090-55-50"})}),a.jsx(ri,{children:a.jsx("a",{href:"tel:+79680915550",children:"+7(968) 091-55-50"})}),a.jsx(ri,{children:a.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})}),a.jsx(ri,{children:a.jsxs("a",{href:"#",children:["город Москва,",a.jsx("br",{}),"ул. Салтыковская, 49А,",a.jsx("br",{}),"ТЦ Волна, Цокольный этаж"]})}),a.jsx(ri,{children:a.jsxs("a",{href:"tel:+79680915550",children:["Банкетный менеджер:",a.jsx("br",{}),"+7 (968)091-55-50"]})}),a.jsx("h3",{children:"Мы в соцсети"}),a.jsxs(T1,{children:[a.jsx("a",{href:"https://vk.com/frant_rk",title:"ВКонтакте",children:"VK"}),a.jsx("a",{href:"https://t.me/francuz_klub",title:"Telegram",children:"TG"})]})]}),a.jsxs(Ka,{children:[a.jsx("h3",{children:"Услуги"}),a.jsx("a",{href:"https://reiting.moscow/",target:"_blank",rel:"noopener noreferrer",children:"Работа"}),a.jsx("a",{href:"https://tyteda.ru/",target:"_blank",rel:"noopener noreferrer",children:"Доставка"}),a.jsx("a",{href:"https://frantsuz.ru/",target:"_blank",rel:"noopener noreferrer",children:"Обучение"})]}),a.jsxs(Ka,{children:[a.jsx("h3",{children:"Гостям"}),a.jsx("a",{href:"/contact",children:"Правила клуба"}),a.jsx("a",{href:"/privacy",children:"Политика конфиденциальности"}),a.jsx("a",{href:"/payment",children:"Правила оплаты"}),a.jsx("a",{href:"/refund",children:"Возврат и отказ от услуги"}),a.jsx("a",{href:"/requisites",children:"Реквизиты"}),a.jsx("a",{href:"/security",children:"Безопасность"})]})]}),a.jsxs($1,{children:[a.jsx("div",{children:"© 2018 Frantsuz-club.ru все права защищены."}),a.jsx("div",{children:"Сделано WeTop digital agency."})]})]})}),N1=g.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,D1=g.main`
  flex: 1;
`,I1=({children:e})=>a.jsxs(N1,{children:[a.jsx(P1,{}),a.jsx(D1,{children:e}),a.jsx(O1,{})]}),M1=g.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`,L1=g.div`
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
`,A1=g.div`
  color: white;
`,F1=g.h2`
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
`,df=g.p`
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
`,B1=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,U1=g.img`
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
`,W1=()=>a.jsx(M1,{children:a.jsx(Xn,{children:a.jsxs(L1,{children:[a.jsxs(A1,{children:[a.jsxs(F1,{children:["Куда сходить на выходные",a.jsx("br",{}),"в Москве"]}),a.jsx(df,{children:'Ищете место для ярких вечеринок и атмосферных посиделок в районе Новогиреево, Реутов? Развлекательный комплекс "Француз" - это место, где можно реализовать свои мечты и получить оригинальные и креативные развлечения для создания праздничной атмосферы.'}),a.jsx(df,{children:"Мы - идеальное решение для компании или романтического вечера вдвоем в Перово, Новогиреево и Реутове. Наш комплекс предлагает уникальные развлечения, включая бильярд и караоке, приглашая вас окунуться в атмосферу незабываемого отдыха и развлечений."})]}),a.jsx(B1,{children:a.jsx(U1,{src:"/images/девушка с задумчивым взглядом.png",alt:"Девушка с задумчивым взглядом",onError:e=>{const t=e.target;t.style.display="none"}})})]})})}),H1=g.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,V1=g.div`
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
`,G1=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,Y1=g.img`
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
`,X1=g.div`
  color: white;
`,K1=g.h2`
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
`,ff=g.p`
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
`,Q1=g.div`
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
`,q1=g.button`
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
`,Z1=g.button`
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
`,J1=()=>a.jsx(H1,{children:a.jsx(Xn,{children:a.jsxs(V1,{children:[a.jsx(G1,{children:a.jsx(Y1,{src:"/images/мужикБильярд.png",alt:"Бильярдный стол с аксессуарами"})}),a.jsxs(X1,{children:[a.jsx(K1,{children:"Бильярд"}),a.jsx(ff,{children:"В нашем развлекательном комплексе вы найдете 12 классических бильярдных столов с роскошным зеленым сукном и профессиональными аксессуарами. У нас вы сможете насладиться игрой в различные виды бильярда, включая американский пул, русский бильярд и снукер."}),a.jsx(ff,{children:"Если вы новичок в этой игре, мы предлагаем вам пройти интересный и информативный курс молодого бойца в нашей школе бильярда."}),a.jsxs(Q1,{children:[a.jsx(q1,{children:"Забронировать стол"}),a.jsx(Z1,{children:"Подробнее"})]})]})]})})}),ew=g.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,tw=g.div`
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
`,nw=g.div`
  color: white;
`,rw=g.h2`
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
`,pf=g.p`
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
`,iw=g.div`
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
`,ow=g.button`
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
`,sw=g.button`
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
`,aw=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`,lw=g.img`
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
`,uw=()=>a.jsx(ew,{children:a.jsx(Xn,{children:a.jsxs(tw,{children:[a.jsxs(nw,{children:[a.jsx(rw,{children:"Караоке"}),a.jsx(pf,{children:"В нашем развлекательном комплексе есть двухуровневый караоке клуб, который привлечет меломанов. Наши залы оборудованы сценами и прожекторами направленного света, чтобы вы могли почувствовать себя настоящей звездой, создать камерную атмосферу и запечатлеть уникальные моменты на фотографиях."}),a.jsx(pf,{children:"Если вам хочется раскрыть себя как певец или певица, у нас функционирует Школа вокала для всех желающих."}),a.jsxs(iw,{children:[a.jsx(ow,{children:"Забронировать стол"}),a.jsx(sw,{children:"Подробнее"})]})]}),a.jsx(aw,{children:a.jsx(lw,{src:"/images/караокеЖенщина.png",alt:"Девушка поет в караоке"})})]})})}),cw=g.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`,dw=g.div`
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
`,fw=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,pw=g.img`
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
`,hw=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,mw=g.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,hf=g.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,gw=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,vw=g.button`
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
`,xw=g.button`
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
`,yw=()=>a.jsx(cw,{children:a.jsx(Xn,{children:a.jsxs(dw,{children:[a.jsx(fw,{children:a.jsx(pw,{src:"/images/месси.png",alt:"Футболист Месси в действии"})}),a.jsxs(hw,{children:[a.jsx(mw,{children:"Playstation"}),a.jsx(hf,{children:"В нашем развлекательном комплексе есть отдельная зона PlayStation и широкий выбор настольных игр, которые обязательно понравятся азартным гостям всех возрастов. Приходите к нам в выходные в большой компании спортивных болельщиков или вдвоем с другом или подругой."}),a.jsx(hf,{children:"Вы сможете насладиться захватывающими победами ваших любимых команд, следя за прямыми трансляциями матчей на большом экране, сопровождая их холодным пивом и вкусными снеками. А в случае поражения, вы сможете развеять горечь стаканом виски и насладиться вкусным ужином."}),a.jsxs(gw,{children:[a.jsx(vw,{children:"Забронировать стол"}),a.jsx(xw,{children:"Подробнее"})]})]})]})})}),ww=g.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`,Sw=g.div`
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
`,bw=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,jw=g.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,mf=g.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Cw=g.div`
  margin-top: 1rem;
`,kw=g.button`
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
`,Ew=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,zw=g.img`
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
`,Pw=()=>a.jsx(ww,{children:a.jsx(Xn,{children:a.jsxs(Sw,{children:[a.jsxs(bw,{children:[a.jsx(jw,{children:"Диско Бар"}),a.jsx(mf,{children:"В нашем развлекательном комплексе вы сможете насладиться уютной аурой лаунджа, идеальной для приятного времяпровождения в компании или вдвоем. Здесь вы сможете расслабиться, устроившись на роскошных бархатных и шелковых подушках и комфортабельных мягких диванах. Мы предлагаем вам попробовать необычные паровые коктейли, приготовленные по особым рецептам."}),a.jsx(mf,{children:"В нашем VIP-зале вы найдете уютное местечко и сможете оценить богатый выбор благородных вин, как истинный сомелье. Фирменные блюда и десерты от наших шеф-поваров, а также элитный алкоголь из нашего бара порадуют гурманов. Мы постараемся обслужить вас деликатно и ненавязчиво, чтобы вы могли насладиться своим свободным временем весело и приятно."}),a.jsx(Cw,{children:a.jsx(kw,{children:"Подробнее"})})]}),a.jsx(Ew,{children:a.jsx(zw,{src:"/images/диско.png",alt:"Диско бар - уютная атмосфера лаунджа"})})]})})}),Rw=g.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
`,_w=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Zn=g.div`
  background: rgba(55, 65, 81, 0.8);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(75, 85, 99, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(75, 85, 99, 0.9);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
  }
`,Jn=g.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 50%;
  font-size: 2rem;
  
  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`,er=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  color: white;
`,Tw=g.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,$w=()=>a.jsx(Rw,{children:a.jsxs(Xn,{children:[a.jsx(Tw,{children:"А еще у нас Вы можете"}),a.jsxs(_w,{children:[a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"})})}),a.jsxs(er,{children:["Поиграть в",a.jsx("br",{}),"настольные игры"]})]}),a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 3 3-3h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 8H9v2h6v-2zm0-4H9v2h6V7z"})})}),a.jsxs(er,{children:["Смотреть",a.jsx("br",{}),"спортивные трансляции"]})]}),a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),a.jsx(er,{children:"Насладиться паровым коктейлем"})]}),a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),a.jsx(er,{children:"Отдохнуть в лаунж зоне"})]}),a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),a.jsx(er,{children:"Учиться в школе бильярда"})]}),a.jsxs(Zn,{children:[a.jsx(Jn,{children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})})}),a.jsx(er,{children:"Учиться в школе вокала"})]})]})]})}),Ow=g.div`
  display: flex;
  flex-direction: column;
`,Nw=g.main`
  flex: 1;
`,Dw=g.section`
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
`;g.div`
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
`;const Iw=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`,Mw=g.div`
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
`,Lw=g.h1`
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
`,Aw=g.div`
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
`,Fw=g.div`
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
`,Qa=g.div`
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
`,Bw=g.div`
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
`,Uw=g.div`
  position: relative;
  width: 300px;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`,Ww=g.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`,Hw=g.img`
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
`,Vw=g.img`
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
`,Gw=()=>a.jsx(Ow,{children:a.jsxs(Nw,{children:[a.jsxs(Dw,{children:[a.jsx(Iw,{}),a.jsx(Mw,{children:a.jsxs(Xn,{children:[a.jsxs(Lw,{children:["Развлекательный комплекс",a.jsx("br",{}),'"Француз"']}),a.jsxs(Aw,{children:["Уникальное место, идеальное для ярких вечеринок",a.jsx("br",{}),"и уютных посиделок с друзьями"]}),a.jsxs(Fw,{children:[a.jsx(Qa,{children:"Караоке"}),a.jsx(Qa,{children:"Бильярд"}),a.jsx(Qa,{children:"Диско Бар"})]})]})}),a.jsx(Bw,{children:a.jsxs(Uw,{children:[a.jsx(Ww,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2.png",alt:"Девушка с коктейлем"}),a.jsx(Hw,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-flower.png",alt:"Цветок"}),a.jsx(Vw,{src:"https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-microphone.png",alt:"Микрофон"})]})})]}),a.jsx(W1,{}),a.jsx(J1,{}),a.jsx(uw,{}),a.jsx(yw,{}),a.jsx(Pw,{}),a.jsx($w,{})]})}),Yw=g.div`
  display: flex;
  flex-direction: column;
`,Xw=g.main`
  flex: 1;
  padding: 2rem 0;
`,Kw=g.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`,Qw=g.div`
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
`,qw=()=>a.jsx(Yw,{children:a.jsx(Xw,{children:a.jsx(Kw,{children:a.jsxs(Qw,{children:[a.jsx("h1",{children:"Contact Us"}),a.jsx("p",{children:"Get in touch with us for any questions or feedback."})]})})})}),Zw=g.div`
  display: flex;
  flex-direction: column;
`,Jw=g.main`
  flex: 1;
  padding: 2rem 0;
`,eS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,tS=g.div`
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
`,nS=()=>a.jsx(Zw,{children:a.jsx(Jw,{children:a.jsx(eS,{children:a.jsxs(tS,{children:[a.jsx("h1",{children:"Бильярд"}),a.jsx("p",{children:"Профессиональные бильярдные столы для любителей и профессионалов."})]})})})}),rS=g.div`
  display: flex;
  flex-direction: column;
`,iS=g.main`
  flex: 1;
  padding: 2rem 0;
`,oS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,sS=g.div`
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
`,aS=()=>a.jsx(rS,{children:a.jsx(iS,{children:a.jsx(oS,{children:a.jsxs(sS,{children:[a.jsx("h1",{children:"Караоке"}),a.jsx("p",{children:"Спойте свои любимые песни в уютной атмосфере."})]})})})}),lS=g.div`
  display: flex;
  flex-direction: column;
`,uS=g.main`
  flex: 1;
  padding: 2rem 0;
`,cS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,dS=g.div`
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
`,fS=()=>a.jsx(lS,{children:a.jsx(uS,{children:a.jsx(cS,{children:a.jsxs(dS,{children:[a.jsx("h1",{children:"Диско-бар"}),a.jsx("p",{children:"Танцуйте под лучшую музыку и наслаждайтесь напитками."})]})})})}),pS=g.div`
  display: flex;
  flex-direction: column;
`,hS=g.main`
  flex: 1;
  padding: 2rem 0;
`,mS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,gS=g.div`
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
`,vS=()=>a.jsx(pS,{children:a.jsx(hS,{children:a.jsx(mS,{children:a.jsxs(gS,{children:[a.jsx("h1",{children:"Playstation"}),a.jsx("p",{children:"Играйте в лучшие игры на PlayStation."})]})})})}),xS=g.div`
  display: flex;
  flex-direction: column;
`,yS=g.main`
  flex: 1;
  padding: 2rem 0;
`,wS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,SS=g.div`
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
`,bS=()=>a.jsx(xS,{children:a.jsx(yS,{children:a.jsx(wS,{children:a.jsxs(SS,{children:[a.jsx("h1",{children:"Лаунж зона"}),a.jsx("p",{children:"Уютная зона отдыха с комфортными диванами и расслабляющей атмосферой."})]})})})}),jS=g.div`
  display: flex;
  flex-direction: column;
`,CS=g.main`
  flex: 1;
  padding: 2rem 0;
`,kS=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,ES=g.div`
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
`,zS=()=>a.jsx(jS,{children:a.jsx(CS,{children:a.jsx(kS,{children:a.jsxs(ES,{children:[a.jsx("h1",{children:"Настольные игры"}),a.jsx("p",{children:"Большая коллекция настольных игр для компании друзей."})]})})})}),PS=g.div`
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
`,RS=g.div`
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`,_S=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,TS=g.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`,$S=g.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
`,OS=({zone:e,$isFullWidth:t})=>a.jsx(PS,{$isFullWidth:t,children:a.jsxs(RS,{children:[a.jsx(_S,{src:e.imageUrl,alt:e.name}),a.jsx(TS,{children:a.jsx($S,{children:e.name})})]})}),NS={},gf=e=>{let t;const n=new Set,r=(d,p)=>{const m=typeof d=="function"?d(t):d;if(!Object.is(m,t)){const x=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,x))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(NS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},DS=e=>e?gf(e):gf;var Ym={exports:{}},Xm={},Km={exports:{}},Qm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=z;function IS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var MS=typeof Object.is=="function"?Object.is:IS,LS=Fr.useState,AS=Fr.useEffect,FS=Fr.useLayoutEffect,BS=Fr.useDebugValue;function US(e,t){var n=t(),r=LS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return FS(function(){i.value=n,i.getSnapshot=t,qa(i)&&o({inst:i})},[e,n,t]),AS(function(){return qa(i)&&o({inst:i}),e(function(){qa(i)&&o({inst:i})})},[e]),BS(n),n}function qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!MS(e,n)}catch{return!0}}function WS(e,t){return t()}var HS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?WS:US;Qm.useSyncExternalStore=Fr.useSyncExternalStore!==void 0?Fr.useSyncExternalStore:HS;Km.exports=Qm;var VS=Km.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=z,GS=VS;function YS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var XS=typeof Object.is=="function"?Object.is:YS,KS=GS.useSyncExternalStore,QS=sa.useRef,qS=sa.useEffect,ZS=sa.useMemo,JS=sa.useDebugValue;Xm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=QS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=ZS(function(){function u(x){if(!c){if(c=!0,d=x,x=r(x),i!==void 0&&s.hasValue){var y=s.value;if(i(y,x))return p=y}return p=x}if(y=p,XS(d,x))return y;var S=r(x);return i!==void 0&&i(y,S)?(d=x,y):(d=x,p=S)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var l=KS(e,o[0],o[1]);return qS(function(){s.hasValue=!0,s.value=l},[l]),JS(l),l};Ym.exports=Xm;var eb=Ym.exports;const tb=ku(eb),qm={},{useDebugValue:nb}=Re,{useSyncExternalStoreWithSelector:rb}=tb;let vf=!1;const ib=e=>e;function ob(e,t=ib,n){(qm?"production":void 0)!=="production"&&n&&!vf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),vf=!0);const r=rb(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return nb(r),r}const xf=e=>{(qm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?DS(e):e,n=(r,i)=>ob(t,r,i);return Object.assign(n,t),n},sb=e=>e?xf(e):xf,ab=sb(e=>({date:null,zoneId:null,tableId:null,time:null,setDate:t=>e({date:t}),setZoneId:t=>e({zoneId:t}),setTableId:t=>e({tableId:t}),setTime:t=>e({time:t})})),lb=g.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`,ub=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Eo=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,zo=g.label`
  color: #fff;
  font-weight: 500;
`,yf=g.input`
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
`;g.select`
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
`;const cb=g.button`
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
`,db=g.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,fb=g.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,pb=({selectedZone:e,selectedTable:t})=>{const{date:n,time:r,setDate:i,setTime:o}=ab(),[s,l]=Re.useState([]),[u,c]=Re.useState(!1),d=p=>{p.preventDefault(),l([]),c(!1);const m=[];if(n||m.push("Выберите дату"),r||m.push("Выберите время"),e||m.push("Зона не выбрана"),m.length>0){l(m);return}const x={date:n,time:r,zoneId:e==null?void 0:e.id,tableId:t==null?void 0:t.id};console.log("Отправляем на сервер:",x),c(!0),i(null),o(null)};return a.jsx(Wt,{children:a.jsxs(lb,{children:[a.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",color:"#ffd700"},children:"Бронирование"}),a.jsxs(ub,{onSubmit:d,children:[e&&a.jsxs(Eo,{children:[a.jsx(zo,{children:"Выбранная зона"}),a.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:e.name})]}),t&&a.jsxs(Eo,{children:[a.jsx(zo,{children:"Выбранный стол"}),a.jsx("div",{style:{padding:"0.75rem",background:"#333",borderRadius:"6px",color:"#ffd700",fontWeight:"bold"},children:t.label})]}),a.jsxs(Eo,{children:[a.jsx(zo,{children:"Дата"}),a.jsx(yf,{type:"date",value:n||"",onChange:p=>i(p.target.value),min:new Date().toISOString().split("T")[0]})]}),a.jsxs(Eo,{children:[a.jsx(zo,{children:"Время"}),a.jsx(yf,{type:"time",value:r||"",onChange:p=>o(p.target.value)})]}),s.length>0&&a.jsx("div",{children:s.map((p,m)=>a.jsx(db,{children:p},m))}),u&&a.jsx(fb,{children:"Бронирование отправлено!"}),a.jsx(cb,{type:"submit",disabled:!n||!r||!e,children:"Подтвердить бронирование"})]})]})})};var aa={exports:{}},Zm={},Jm={exports:{}},hb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mb=hb,gb=mb;function eg(){}function tg(){}tg.resetWarningCache=eg;var vb=function(){function e(r,i,o,s,l,u){if(u!==gb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tg,resetWarningCache:eg};return n.PropTypes=n,n};Jm.exports=vb();var ng=Jm.exports;function rg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=rg(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function wf(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=rg(e))&&(r&&(r+=" "),r+=t);return r}const xb=Object.freeze(Object.defineProperty({__proto__:null,clsx:wf,default:wf},Symbol.toStringTag,{value:"Module"})),yb=Ug(xb);var ie={},_t={};Object.defineProperty(_t,"__esModule",{value:!0});_t.dontSetMe=Cb;_t.findInArray=wb;_t.int=jb;_t.isFunction=Sb;_t.isNum=bb;function wb(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Sb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function bb(e){return typeof e=="number"&&!isNaN(e)}function jb(e){return parseInt(e,10)}function Cb(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.browserPrefixToKey=og;Kn.browserPrefixToStyle=kb;Kn.default=void 0;Kn.getPrefix=ig;const Za=["Moz","Webkit","O","ms"];function ig(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<Za.length;r++)if(og(t,Za[r])in n)return Za[r];return""}function og(e,t){return t?"".concat(t).concat(Eb(e)):e}function kb(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Eb(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}Kn.default=ig();Object.defineProperty(ie,"__esModule",{value:!0});ie.addClassName=lg;ie.addEvent=Rb;ie.addUserSelectStyles=Fb;ie.createCSSTransform=Ib;ie.createSVGTransform=Mb;ie.getTouch=Lb;ie.getTouchIdentifier=Ab;ie.getTranslation=Pc;ie.innerHeight=Ob;ie.innerWidth=Nb;ie.matchesSelector=ag;ie.matchesSelectorAndParentsTo=Pb;ie.offsetXYFromParent=Db;ie.outerHeight=Tb;ie.outerWidth=$b;ie.removeClassName=ug;ie.removeEvent=_b;ie.removeUserSelectStyles=Bb;var Ze=_t,Sf=zb(Kn);function sg(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(sg=function(r){return r?n:t})(e)}function zb(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=sg(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}let Po="";function ag(e,t){return Po||(Po=(0,Ze.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,Ze.isFunction)(e[n])})),(0,Ze.isFunction)(e[Po])?e[Po](t):!1}function Pb(e,t,n){let r=e;do{if(ag(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function Rb(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function _b(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Tb(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,Ze.int)(n.borderTopWidth),t+=(0,Ze.int)(n.borderBottomWidth),t}function $b(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,Ze.int)(n.borderLeftWidth),t+=(0,Ze.int)(n.borderRightWidth),t}function Ob(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,Ze.int)(n.paddingTop),t-=(0,Ze.int)(n.paddingBottom),t}function Nb(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,Ze.int)(n.paddingLeft),t-=(0,Ze.int)(n.paddingRight),t}function Db(e,t,n){const i=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-i.left)/n,s=(e.clientY+t.scrollTop-i.top)/n;return{x:o,y:s}}function Ib(e,t){const n=Pc(e,t,"px");return{[(0,Sf.browserPrefixToKey)("transform",Sf.default)]:n}}function Mb(e,t){return Pc(e,t,"")}function Pc(e,t,n){let{x:r,y:i}=e,o="translate(".concat(r).concat(n,",").concat(i).concat(n,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+n),l="".concat(typeof t.y=="string"?t.y:t.y+n);o="translate(".concat(s,", ").concat(l,")")+o}return o}function Lb(e,t){return e.targetTouches&&(0,Ze.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,Ze.findInArray)(e.changedTouches,n=>t===n.identifier)}function Ab(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Fb(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&lg(e.body,"react-draggable-transparent-selection")}function Bb(e){if(e)try{if(e.body&&ug(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function lg(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function ug(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canDragX=Hb;Tt.canDragY=Vb;Tt.createCoreData=Yb;Tt.createDraggableData=Xb;Tt.getBoundPosition=Ub;Tt.getControlPosition=Gb;Tt.snapToGrid=Wb;var Ye=_t,Sr=ie;function Ub(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:Kb(r);const i=Rc(e);if(typeof r=="string"){const{ownerDocument:o}=i,s=o.defaultView;let l;if(r==="parent"?l=i.parentNode:l=o.querySelector(r),!(l instanceof s.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const u=l,c=s.getComputedStyle(i),d=s.getComputedStyle(u);r={left:-i.offsetLeft+(0,Ye.int)(d.paddingLeft)+(0,Ye.int)(c.marginLeft),top:-i.offsetTop+(0,Ye.int)(d.paddingTop)+(0,Ye.int)(c.marginTop),right:(0,Sr.innerWidth)(u)-(0,Sr.outerWidth)(i)-i.offsetLeft+(0,Ye.int)(d.paddingRight)-(0,Ye.int)(c.marginRight),bottom:(0,Sr.innerHeight)(u)-(0,Sr.outerHeight)(i)-i.offsetTop+(0,Ye.int)(d.paddingBottom)-(0,Ye.int)(c.marginBottom)}}return(0,Ye.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,Ye.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Ye.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,Ye.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Wb(e,t,n){const r=Math.round(t/e[0])*e[0],i=Math.round(n/e[1])*e[1];return[r,i]}function Hb(e){return e.props.axis==="both"||e.props.axis==="x"}function Vb(e){return e.props.axis==="both"||e.props.axis==="y"}function Gb(e,t,n){const r=typeof t=="number"?(0,Sr.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const i=Rc(n),o=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,Sr.offsetXYFromParent)(r||e,o,n.props.scale)}function Yb(e,t,n){const r=!(0,Ye.isNum)(e.lastX),i=Rc(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Xb(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Kb(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Rc(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var la={},ua={};Object.defineProperty(ua,"__esModule",{value:!0});ua.default=Qb;function Qb(){}Object.defineProperty(la,"__esModule",{value:!0});la.default=void 0;var Ja=Zb(z),Le=_c(ng),qb=_c(qi),ke=ie,Xt=Tt,el=_t,ii=_c(ua);function _c(e){return e&&e.__esModule?e:{default:e}}function cg(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(cg=function(r){return r?n:t})(e)}function Zb(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=cg(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function $e(e,t,n){return t=Jb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jb(e){var t=ej(e,"string");return typeof t=="symbol"?t:String(t)}function ej(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const pt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Kt=pt.mouse,ca=class extends Ja.Component{constructor(){super(...arguments),$e(this,"dragging",!1),$e(this,"lastX",NaN),$e(this,"lastY",NaN),$e(this,"touchIdentifier",null),$e(this,"mounted",!1),$e(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,ke.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,ke.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const i=(0,ke.getTouchIdentifier)(t);this.touchIdentifier=i;const o=(0,Xt.getControlPosition)(t,i,this);if(o==null)return;const{x:s,y:l}=o,u=(0,Xt.createCoreData)(this,s,l);(0,ii.default)("DraggableCore: handleDragStart: %j",u),(0,ii.default)("calling",this.props.onStart),!(this.props.onStart(t,u)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,ke.addUserSelectStyles)(r),this.dragging=!0,this.lastX=s,this.lastY=l,(0,ke.addEvent)(r,Kt.move,this.handleDrag),(0,ke.addEvent)(r,Kt.stop,this.handleDragStop))}),$e(this,"handleDrag",t=>{const n=(0,Xt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:i}=n;if(Array.isArray(this.props.grid)){let l=r-this.lastX,u=i-this.lastY;if([l,u]=(0,Xt.snapToGrid)(this.props.grid,l,u),!l&&!u)return;r=this.lastX+l,i=this.lastY+u}const o=(0,Xt.createCoreData)(this,r,i);if((0,ii.default)("DraggableCore: handleDrag: %j",o),this.props.onDrag(t,o)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const u=document.createEvent("MouseEvents");u.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(u)}return}this.lastX=r,this.lastY=i}),$e(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Xt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:i}=n;if(Array.isArray(this.props.grid)){let u=r-this.lastX||0,c=i-this.lastY||0;[u,c]=(0,Xt.snapToGrid)(this.props.grid,u,c),r=this.lastX+u,i=this.lastY+c}const o=(0,Xt.createCoreData)(this,r,i);if(this.props.onStop(t,o)===!1||this.mounted===!1)return!1;const l=this.findDOMNode();l&&this.props.enableUserSelectHack&&(0,ke.removeUserSelectStyles)(l.ownerDocument),(0,ii.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,l&&((0,ii.default)("DraggableCore: Removing handlers"),(0,ke.removeEvent)(l.ownerDocument,Kt.move,this.handleDrag),(0,ke.removeEvent)(l.ownerDocument,Kt.stop,this.handleDragStop))}),$e(this,"onMouseDown",t=>(Kt=pt.mouse,this.handleDragStart(t))),$e(this,"onMouseUp",t=>(Kt=pt.mouse,this.handleDragStop(t))),$e(this,"onTouchStart",t=>(Kt=pt.touch,this.handleDragStart(t))),$e(this,"onTouchEnd",t=>(Kt=pt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,ke.addEvent)(t,pt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,ke.removeEvent)(n,pt.mouse.move,this.handleDrag),(0,ke.removeEvent)(n,pt.touch.move,this.handleDrag),(0,ke.removeEvent)(n,pt.mouse.stop,this.handleDragStop),(0,ke.removeEvent)(n,pt.touch.stop,this.handleDragStop),(0,ke.removeEvent)(t,pt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,ke.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:qb.default.findDOMNode(this)}render(){return Ja.cloneElement(Ja.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};la.default=ca;$e(ca,"displayName","DraggableCore");$e(ca,"propTypes",{allowAnyClick:Le.default.bool,children:Le.default.node.isRequired,disabled:Le.default.bool,enableUserSelectHack:Le.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Le.default.arrayOf(Le.default.number),handle:Le.default.string,cancel:Le.default.string,nodeRef:Le.default.object,onStart:Le.default.func,onDrag:Le.default.func,onStop:Le.default.func,onMouseDown:Le.default.func,scale:Le.default.number,className:el.dontSetMe,style:el.dontSetMe,transform:el.dontSetMe});$e(ca,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var t=m(z),n=d(ng),r=d(qi),i=d(yb),o=ie,s=Tt,l=_t,u=d(la),c=d(ua);function d(f){return f&&f.__esModule?f:{default:f}}function p(f){if(typeof WeakMap!="function")return null;var h=new WeakMap,w=new WeakMap;return(p=function(C){return C?w:h})(f)}function m(f,h){if(f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var w=p(h);if(w&&w.has(f))return w.get(f);var C={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in f)if(j!=="default"&&Object.prototype.hasOwnProperty.call(f,j)){var R=E?Object.getOwnPropertyDescriptor(f,j):null;R&&(R.get||R.set)?Object.defineProperty(C,j,R):C[j]=f[j]}return C.default=f,w&&w.set(f,C),C}function x(){return x=Object.assign?Object.assign.bind():function(f){for(var h=1;h<arguments.length;h++){var w=arguments[h];for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&(f[C]=w[C])}return f},x.apply(this,arguments)}function y(f,h,w){return h=S(h),h in f?Object.defineProperty(f,h,{value:w,enumerable:!0,configurable:!0,writable:!0}):f[h]=w,f}function S(f){var h=b(f,"string");return typeof h=="symbol"?h:String(h)}function b(f,h){if(typeof f!="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var C=w.call(f,h);if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(f)}class v extends t.Component{static getDerivedStateFromProps(h,w){let{position:C}=h,{prevPropsPosition:E}=w;return C&&(!E||C.x!==E.x||C.y!==E.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:C,prevPropsPosition:E}),{x:C.x,y:C.y,prevPropsPosition:{...C}}):null}constructor(h){super(h),y(this,"onDragStart",(w,C)=>{if((0,c.default)("Draggable: onDragStart: %j",C),this.props.onStart(w,(0,s.createDraggableData)(this,C))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),y(this,"onDrag",(w,C)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",C);const E=(0,s.createDraggableData)(this,C),j={x:E.x,y:E.y,slackX:0,slackY:0};if(this.props.bounds){const{x:k,y:_}=j;j.x+=this.state.slackX,j.y+=this.state.slackY;const[O,I]=(0,s.getBoundPosition)(this,j.x,j.y);j.x=O,j.y=I,j.slackX=this.state.slackX+(k-j.x),j.slackY=this.state.slackY+(_-j.y),E.x=j.x,E.y=j.y,E.deltaX=j.x-this.state.x,E.deltaY=j.y-this.state.y}if(this.props.onDrag(w,E)===!1)return!1;this.setState(j)}),y(this,"onDragStop",(w,C)=>{if(!this.state.dragging||this.props.onStop(w,(0,s.createDraggableData)(this,C))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",C);const j={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:k,y:_}=this.props.position;j.x=k,j.y=_}this.setState(j)}),this.state={dragging:!1,dragged:!1,x:h.position?h.position.x:h.defaultPosition.x,y:h.position?h.position.y:h.defaultPosition.y,prevPropsPosition:{...h.position},slackX:0,slackY:0,isElementSVG:!1},h.position&&!(h.onDrag||h.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var h,w;return(h=(w=this.props)===null||w===void 0||(w=w.nodeRef)===null||w===void 0?void 0:w.current)!==null&&h!==void 0?h:r.default.findDOMNode(this)}render(){const{axis:h,bounds:w,children:C,defaultPosition:E,defaultClassName:j,defaultClassNameDragging:R,defaultClassNameDragged:k,position:_,positionOffset:O,scale:I,...L}=this.props;let X={},Me=null;const ge=!!!_||this.state.dragging,$=_||E,D={x:(0,s.canDragX)(this)&&ge?this.state.x:$.x,y:(0,s.canDragY)(this)&&ge?this.state.y:$.y};this.state.isElementSVG?Me=(0,o.createSVGTransform)(D,O):X=(0,o.createCSSTransform)(D,O);const M=(0,i.default)(C.props.className||"",j,{[R]:this.state.dragging,[k]:this.state.dragged});return t.createElement(u.default,x({},L,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(C),{className:M,style:{...C.props.style,...X},transform:Me}))}}e.default=v,y(v,"displayName","Draggable"),y(v,"propTypes",{...u.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),y(v,"defaultProps",{...u.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Zm);const{default:dg,DraggableCore:tj}=Zm;aa.exports=dg;aa.exports.default=dg;aa.exports.DraggableCore=tj;var nj=aa.exports;const rj=ku(nj);var ae=function(){return ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ae.apply(this,arguments)},bf={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},jf={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},Ro={width:"20px",height:"20px",position:"absolute",zIndex:1},ij={top:ae(ae({},bf),{top:"-5px"}),right:ae(ae({},jf),{left:void 0,right:"-5px"}),bottom:ae(ae({},bf),{top:void 0,bottom:"-5px"}),left:ae(ae({},jf),{left:"-5px"}),topRight:ae(ae({},Ro),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:ae(ae({},Ro),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:ae(ae({},Ro),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:ae(ae({},Ro),{left:"-10px",top:"-10px",cursor:"nw-resize"})},oj=z.memo(function(e){var t=e.onResizeStart,n=e.direction,r=e.children,i=e.replaceStyles,o=e.className,s=z.useCallback(function(c){t(c,n)},[t,n]),l=z.useCallback(function(c){t(c,n)},[t,n]),u=z.useMemo(function(){return ae(ae({position:"absolute",userSelect:"none"},ij[n]),i??{})},[i,n]);return a.jsx("div",{className:o||void 0,style:u,onMouseDown:s,onTouchStart:l,children:r})}),sj=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kt=function(){return kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kt.apply(this,arguments)},aj={width:"auto",height:"auto"},_o=function(e,t,n){return Math.max(Math.min(e,n),t)},Cf=function(e,t,n){var r=Math.round(e/t);return r*t+n*(r-1)},tr=function(e,t){return new RegExp(e,"i").test(t)},To=function(e){return!!(e.touches&&e.touches.length)},lj=function(e){return!!((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},kf=function(e,t,n){n===void 0&&(n=0);var r=t.reduce(function(o,s,l){return Math.abs(s-e)<Math.abs(t[o]-e)?l:o},0),i=Math.abs(t[r]-e);return n===0||i<n?t[r]:e},tl=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:"".concat(e,"px")},$o=function(e,t,n,r){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var i=Number(e.replace("%",""))/100;return t*i}if(e.endsWith("vw")){var i=Number(e.replace("vw",""))/100;return n*i}if(e.endsWith("vh")){var i=Number(e.replace("vh",""))/100;return r*i}}return e},uj=function(e,t,n,r,i,o,s){return r=$o(r,e.width,t,n),i=$o(i,e.height,t,n),o=$o(o,e.width,t,n),s=$o(s,e.height,t,n),{maxWidth:typeof r>"u"?void 0:Number(r),maxHeight:typeof i>"u"?void 0:Number(i),minWidth:typeof o>"u"?void 0:Number(o),minHeight:typeof s>"u"?void 0:Number(s)}},cj=function(e){return Array.isArray(e)?e:[e,e]},dj=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Ef="__resizable_base__",fj=function(e){sj(t,e);function t(n){var r,i,o,s,l=e.call(this,n)||this;return l.ratio=1,l.resizable=null,l.parentLeft=0,l.parentTop=0,l.resizableLeft=0,l.resizableRight=0,l.resizableTop=0,l.resizableBottom=0,l.targetLeft=0,l.targetTop=0,l.delta={width:0,height:0},l.appendBase=function(){if(!l.resizable||!l.window)return null;var u=l.parentNode;if(!u)return null;var c=l.window.document.createElement("div");return c.style.width="100%",c.style.height="100%",c.style.position="absolute",c.style.transform="scale(0, 0)",c.style.left="0",c.style.flex="0 0 100%",c.classList?c.classList.add(Ef):c.className+=Ef,u.appendChild(c),c},l.removeBase=function(u){var c=l.parentNode;c&&c.removeChild(u)},l.state={isResizing:!1,width:(i=(r=l.propsSize)===null||r===void 0?void 0:r.width)!==null&&i!==void 0?i:"auto",height:(s=(o=l.propsSize)===null||o===void 0?void 0:o.height)!==null&&s!==void 0?s:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},l.onResizeStart=l.onResizeStart.bind(l),l.onMouseMove=l.onMouseMove.bind(l),l.onMouseUp=l.onMouseUp.bind(l),l}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||aj},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var n=0,r=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,o=this.resizable.offsetHeight,s=this.resizable.style.position;s!=="relative"&&(this.resizable.style.position="relative"),n=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:i,r=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:o,this.resizable.style.position=s}return{width:n,height:r}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var n=this,r=this.props.size,i=function(l){var u;if(typeof n.state[l]>"u"||n.state[l]==="auto")return"auto";if(n.propsSize&&n.propsSize[l]&&(!((u=n.propsSize[l])===null||u===void 0)&&u.toString().endsWith("%"))){if(n.state[l].toString().endsWith("%"))return n.state[l].toString();var c=n.getParentSize(),d=Number(n.state[l].toString().replace("px","")),p=d/c[l]*100;return"".concat(p,"%")}return tl(n.state[l])},o=r&&typeof r.width<"u"&&!this.state.isResizing?tl(r.width):i("width"),s=r&&typeof r.height<"u"&&!this.state.isResizing?tl(r.height):i("height");return{width:o,height:s}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var n=this.appendBase();if(!n)return{width:0,height:0};var r=!1,i=this.parentNode.style.flexWrap;i!=="wrap"&&(r=!0,this.parentNode.style.flexWrap="wrap"),n.style.position="relative",n.style.minWidth="100%",n.style.minHeight="100%";var o={width:n.offsetWidth,height:n.offsetHeight};return r&&(this.parentNode.style.flexWrap=i),this.removeBase(n),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var n=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:n.flexBasis!=="auto"?n.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(n,r){var i=this.propsSize&&this.propsSize[r];return this.state[r]==="auto"&&this.state.original[r]===n&&(typeof i>"u"||i==="auto")?"auto":n},t.prototype.calculateNewMaxFromBoundary=function(n,r){var i=this.props.boundsByDirection,o=this.state.direction,s=i&&tr("left",o),l=i&&tr("top",o),u,c;if(this.props.bounds==="parent"){var d=this.parentNode;d&&(u=s?this.resizableRight-this.parentLeft:d.offsetWidth+(this.parentLeft-this.resizableLeft),c=l?this.resizableBottom-this.parentTop:d.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(u=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,c=l?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(u=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),c=l?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return u&&Number.isFinite(u)&&(n=n&&n<u?n:u),c&&Number.isFinite(c)&&(r=r&&r<c?r:c),{maxWidth:n,maxHeight:r}},t.prototype.calculateNewSizeFromDirection=function(n,r){var i=this.props.scale||1,o=cj(this.props.resizeRatio||1),s=o[0],l=o[1],u=this.state,c=u.direction,d=u.original,p=this.props,m=p.lockAspectRatio,x=p.lockAspectRatioExtraHeight,y=p.lockAspectRatioExtraWidth,S=d.width,b=d.height,v=x||0,f=y||0;return tr("right",c)&&(S=d.width+(n-d.x)*s/i,m&&(b=(S-f)/this.ratio+v)),tr("left",c)&&(S=d.width-(n-d.x)*s/i,m&&(b=(S-f)/this.ratio+v)),tr("bottom",c)&&(b=d.height+(r-d.y)*l/i,m&&(S=(b-v)*this.ratio+f)),tr("top",c)&&(b=d.height-(r-d.y)*l/i,m&&(S=(b-v)*this.ratio+f)),{newWidth:S,newHeight:b}},t.prototype.calculateNewSizeFromAspectRatio=function(n,r,i,o){var s=this.props,l=s.lockAspectRatio,u=s.lockAspectRatioExtraHeight,c=s.lockAspectRatioExtraWidth,d=typeof o.width>"u"?10:o.width,p=typeof i.width>"u"||i.width<0?n:i.width,m=typeof o.height>"u"?10:o.height,x=typeof i.height>"u"||i.height<0?r:i.height,y=u||0,S=c||0;if(l){var b=(m-y)*this.ratio+S,v=(x-y)*this.ratio+S,f=(d-S)/this.ratio+y,h=(p-S)/this.ratio+y,w=Math.max(d,b),C=Math.min(p,v),E=Math.max(m,f),j=Math.min(x,h);n=_o(n,w,C),r=_o(r,E,j)}else n=_o(n,d,p),r=_o(r,m,x);return{newWidth:n,newHeight:r}},t.prototype.setBoundingClientRect=function(){var n=1/(this.props.scale||1);if(this.props.bounds==="parent"){var r=this.parentNode;if(r){var i=r.getBoundingClientRect();this.parentLeft=i.left*n,this.parentTop=i.top*n}}if(this.props.bounds&&typeof this.props.bounds!="string"){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left*n,this.targetTop=o.top*n}if(this.resizable){var s=this.resizable.getBoundingClientRect(),l=s.left,u=s.top,c=s.right,d=s.bottom;this.resizableLeft=l*n,this.resizableRight=c*n,this.resizableTop=u*n,this.resizableBottom=d*n}},t.prototype.onResizeStart=function(n,r){if(!(!this.resizable||!this.window)){var i=0,o=0;if(n.nativeEvent&&lj(n.nativeEvent)?(i=n.nativeEvent.clientX,o=n.nativeEvent.clientY):n.nativeEvent&&To(n.nativeEvent)&&(i=n.nativeEvent.touches[0].clientX,o=n.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var s=this.props.onResizeStart(n,r,this.resizable);if(s===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var l,u=this.window.getComputedStyle(this.resizable);if(u.flexBasis!=="auto"){var c=this.parentNode;if(c){var d=this.window.getComputedStyle(c).flexDirection;this.flexDir=d.startsWith("row")?"row":"column",l=u.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var p={original:{x:i,y:o,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:kt(kt({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(n.target).cursor||"auto"}),direction:r,flexBasis:l};this.setState(p)}},t.prototype.onMouseMove=function(n){var r=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&To(n))try{n.preventDefault(),n.stopPropagation()}catch{}var i=this.props,o=i.maxWidth,s=i.maxHeight,l=i.minWidth,u=i.minHeight,c=To(n)?n.touches[0].clientX:n.clientX,d=To(n)?n.touches[0].clientY:n.clientY,p=this.state,m=p.direction,x=p.original,y=p.width,S=p.height,b=this.getParentSize(),v=uj(b,this.window.innerWidth,this.window.innerHeight,o,s,l,u);o=v.maxWidth,s=v.maxHeight,l=v.minWidth,u=v.minHeight;var f=this.calculateNewSizeFromDirection(c,d),h=f.newHeight,w=f.newWidth,C=this.calculateNewMaxFromBoundary(o,s);this.props.snap&&this.props.snap.x&&(w=kf(w,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(h=kf(h,this.props.snap.y,this.props.snapGap));var E=this.calculateNewSizeFromAspectRatio(w,h,{width:C.maxWidth,height:C.maxHeight},{width:l,height:u});if(w=E.newWidth,h=E.newHeight,this.props.grid){var j=Cf(w,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),R=Cf(h,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),k=this.props.snapGap||0,_=k===0||Math.abs(j-w)<=k?j:w,O=k===0||Math.abs(R-h)<=k?R:h;w=_,h=O}var I={width:w-x.width,height:h-x.height};if(this.delta=I,y&&typeof y=="string"){if(y.endsWith("%")){var L=w/b.width*100;w="".concat(L,"%")}else if(y.endsWith("vw")){var X=w/this.window.innerWidth*100;w="".concat(X,"vw")}else if(y.endsWith("vh")){var Me=w/this.window.innerHeight*100;w="".concat(Me,"vh")}}if(S&&typeof S=="string"){if(S.endsWith("%")){var L=h/b.height*100;h="".concat(L,"%")}else if(S.endsWith("vw")){var X=h/this.window.innerWidth*100;h="".concat(X,"vw")}else if(S.endsWith("vh")){var Me=h/this.window.innerHeight*100;h="".concat(Me,"vh")}}var Z={width:this.createSizeForCssProperty(w,"width"),height:this.createSizeForCssProperty(h,"height")};this.flexDir==="row"?Z.flexBasis=Z.width:this.flexDir==="column"&&(Z.flexBasis=Z.height);var ge=this.state.width!==Z.width,$=this.state.height!==Z.height,D=this.state.flexBasis!==Z.flexBasis,M=ge||$||D;M&&qi.flushSync(function(){r.setState(Z)}),this.props.onResize&&M&&this.props.onResize(n,m,this.resizable,I)}},t.prototype.onMouseUp=function(n){var r,i,o=this.state,s=o.isResizing,l=o.direction;o.original,!(!s||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(n,l,this.resizable,this.delta),this.props.size&&this.setState({width:(r=this.props.size.width)!==null&&r!==void 0?r:"auto",height:(i=this.props.size.height)!==null&&i!==void 0?i:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:kt(kt({},this.state.backgroundStyle),{cursor:"auto"})}))},t.prototype.updateSize=function(n){var r,i;this.setState({width:(r=n.width)!==null&&r!==void 0?r:"auto",height:(i=n.height)!==null&&i!==void 0?i:"auto"})},t.prototype.renderResizer=function(){var n=this,r=this.props,i=r.enable,o=r.handleStyles,s=r.handleClasses,l=r.handleWrapperStyle,u=r.handleWrapperClass,c=r.handleComponent;if(!i)return null;var d=Object.keys(i).map(function(p){return i[p]!==!1?a.jsx(oj,{direction:p,onResizeStart:n.onResizeStart,replaceStyles:o&&o[p],className:s&&s[p],children:c&&c[p]?c[p]:null},p):null});return a.jsx("div",{className:u,style:l,children:d})},t.prototype.render=function(){var n=this,r=Object.keys(this.props).reduce(function(s,l){return dj.indexOf(l)!==-1||(s[l]=n.props[l]),s},{}),i=kt(kt(kt({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return a.jsxs(o,kt({style:i,className:this.props.className},r,{ref:function(s){s&&(n.resizable=s)},children:[this.state.isResizing&&a.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(z.PureComponent);/*! *****************************************************************************
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
***************************************************************************** */var xu=function(e,t){return xu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},xu(e,t)};function pj(e,t){xu(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},fe.apply(this,arguments)};function hj(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var mj={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},gj=function(e){return{bottom:e,bottomLeft:e,bottomRight:e,left:e,right:e,top:e,topLeft:e,topRight:e}},vj=function(e){pj(t,e);function t(n){var r=e.call(this,n)||this;return r.resizingPosition={x:0,y:0},r.offsetFromParent={left:0,top:0},r.resizableElement={current:null},r.originalPosition={x:0,y:0},r.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:n.maxWidth,maxHeight:n.maxHeight},r.onResizeStart=r.onResizeStart.bind(r),r.onResize=r.onResize.bind(r),r.onResizeStop=r.onResizeStop.bind(r),r.onDragStart=r.onDragStart.bind(r),r.onDrag=r.onDrag.bind(r),r.onDragStop=r.onDragStop.bind(r),r.getMaxSizesFromProps=r.getMaxSizesFromProps.bind(r),r}return t.prototype.componentDidMount=function(){this.updateOffsetFromParent();var n=this.offsetFromParent,r=n.left,i=n.top,o=this.getDraggablePosition(),s=o.x,l=o.y;this.draggable.setState({x:s-r,y:l-i}),this.forceUpdate()},t.prototype.getDraggablePosition=function(){var n=this.draggable.state,r=n.x,i=n.y;return{x:r,y:i}},t.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},t.prototype.getParentSize=function(){return this.resizable.getParentSize()},t.prototype.getMaxSizesFromProps=function(){var n=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,r=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:n,maxHeight:r}},t.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},t.prototype.getOffsetHeight=function(n){var r=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/r;case"body":return document.body.offsetHeight/r;default:return n.offsetHeight}},t.prototype.getOffsetWidth=function(n){var r=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/r;case"body":return document.body.offsetWidth/r;default:return n.offsetWidth}},t.prototype.onDragStart=function(n,r){this.props.onDragStart&&this.props.onDragStart(n,r);var i=this.getDraggablePosition();if(this.originalPosition=i,!!this.props.bounds){var o=this.getParent(),s=this.props.scale,l;if(this.props.bounds==="parent")l=o;else if(this.props.bounds==="body"){var u=o.getBoundingClientRect(),c=u.left,d=u.top,p=document.body.getBoundingClientRect(),m=-(c-o.offsetLeft*s-p.left)/s,x=-(d-o.offsetTop*s-p.top)/s,y=(document.body.offsetWidth-this.resizable.size.width*s)/s+m,S=(document.body.offsetHeight-this.resizable.size.height*s)/s+x;return this.setState({bounds:{top:x,right:y,bottom:S,left:m}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var b=o.getBoundingClientRect(),v=b.left,f=b.top,h=-(v-o.offsetLeft*s)/s,w=-(f-o.offsetTop*s)/s,y=(window.innerWidth-this.resizable.size.width*s)/s+h,S=(window.innerHeight-this.resizable.size.height*s)/s+w;return this.setState({bounds:{top:w,right:y,bottom:S,left:h}})}else typeof this.props.bounds=="string"?l=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(l=this.props.bounds);if(!(!(l instanceof HTMLElement)||!(o instanceof HTMLElement))){var C=l.getBoundingClientRect(),E=C.left,j=C.top,R=o.getBoundingClientRect(),k=R.left,_=R.top,O=(E-k)/s,I=j-_;if(this.resizable){this.updateOffsetFromParent();var L=this.offsetFromParent;this.setState({bounds:{top:I-L.top,right:O+(l.offsetWidth-this.resizable.size.width)-L.left/s,bottom:I+(l.offsetHeight-this.resizable.size.height)-L.top,left:O-L.left/s}})}}}},t.prototype.onDrag=function(n,r){if(this.props.onDrag){var i=this.offsetFromParent,o=i.left,s=i.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(n,fe(fe({},r),{x:r.x+o,y:r.y+s}));if(this.props.dragAxis==="x")return this.props.onDrag(n,fe(fe({},r),{x:r.x+o,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(n,fe(fe({},r),{x:this.originalPosition.x+o,y:r.y+s,deltaX:0}))}},t.prototype.onDragStop=function(n,r){if(this.props.onDragStop){var i=this.offsetFromParent,o=i.left,s=i.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(n,fe(fe({},r),{x:r.x+o,y:r.y+s}));if(this.props.dragAxis==="x")return this.props.onDragStop(n,fe(fe({},r),{x:r.x+o,y:this.originalPosition.y+s,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(n,fe(fe({},r),{x:this.originalPosition.x+o,y:r.y+s,deltaX:0}))}},t.prototype.onResizeStart=function(n,r,i){n.stopPropagation(),this.setState({resizing:!0});var o=this.props.scale,s=this.offsetFromParent,l=this.getDraggablePosition();if(this.resizingPosition={x:l.x+s.left,y:l.y+s.top},this.originalPosition=l,this.props.bounds){var u=this.getParent(),c=void 0;this.props.bounds==="parent"?c=u:this.props.bounds==="body"?c=document.body:this.props.bounds==="window"?c=window:typeof this.props.bounds=="string"?c=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(c=this.props.bounds);var d=this.getSelfElement();if(d instanceof Element&&(c instanceof HTMLElement||c===window)&&u instanceof HTMLElement){var p=this.getMaxSizesFromProps(),m=p.maxWidth,x=p.maxHeight,y=this.getParentSize();if(m&&typeof m=="string")if(m.endsWith("%")){var S=Number(m.replace("%",""))/100;m=y.width*S}else m.endsWith("px")&&(m=Number(m.replace("px","")));if(x&&typeof x=="string")if(x.endsWith("%")){var S=Number(x.replace("%",""))/100;x=y.height*S}else x.endsWith("px")&&(x=Number(x.replace("px","")));var b=d.getBoundingClientRect(),v=b.left,f=b.top,h=this.props.bounds==="window"?{left:0,top:0}:c.getBoundingClientRect(),w=h.left,C=h.top,E=this.getOffsetWidth(c),j=this.getOffsetHeight(c),R=r.toLowerCase().endsWith("left"),k=r.toLowerCase().endsWith("right"),_=r.startsWith("top"),O=r.startsWith("bottom");if((R||_)&&this.resizable){var I=(v-w)/o+this.resizable.size.width;this.setState({maxWidth:I>Number(m)?m:I})}if(k||this.props.lockAspectRatio&&!R&&!_){var I=E+(w-v)/o;this.setState({maxWidth:I>Number(m)?m:I})}if((_||R)&&this.resizable){var I=(f-C)/o+this.resizable.size.height;this.setState({maxHeight:I>Number(x)?x:I})}if(O||this.props.lockAspectRatio&&!_&&!R){var I=j+(C-f)/o;this.setState({maxHeight:I>Number(x)?x:I})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(n,r,i)},t.prototype.onResize=function(n,r,i,o){var s=this,l={x:this.originalPosition.x,y:this.originalPosition.y},u=-o.width,c=-o.height,d=["top","left","topLeft","bottomLeft","topRight"];d.includes(r)&&(r==="bottomLeft"?l.x+=u:(r==="topRight"||(l.x+=u),l.y+=c));var p=this.draggable.state;(l.x!==p.x||l.y!==p.y)&&qi.flushSync(function(){s.draggable.setState(l)}),this.updateOffsetFromParent();var m=this.offsetFromParent,x=this.getDraggablePosition().x+m.left,y=this.getDraggablePosition().y+m.top;this.resizingPosition={x,y},this.props.onResize&&this.props.onResize(n,r,i,o,{x,y})},t.prototype.onResizeStop=function(n,r,i,o){this.setState({resizing:!1});var s=this.getMaxSizesFromProps(),l=s.maxWidth,u=s.maxHeight;this.setState({maxWidth:l,maxHeight:u}),this.props.onResizeStop&&this.props.onResizeStop(n,r,i,o,this.resizingPosition)},t.prototype.updateSize=function(n){this.resizable&&this.resizable.updateSize({width:n.width,height:n.height})},t.prototype.updatePosition=function(n){this.draggable.setState(n)},t.prototype.updateOffsetFromParent=function(){var n=this.props.scale,r=this.getParent(),i=this.getSelfElement();if(!r||i===null)return{top:0,left:0};var o=r.getBoundingClientRect(),s=o.left,l=o.top,u=i.getBoundingClientRect(),c=this.getDraggablePosition(),d=r.scrollLeft,p=r.scrollTop;this.offsetFromParent={left:u.left-s+d-c.x*n,top:u.top-l+p-c.y*n}},t.prototype.render=function(){var n=this,r=this.props,i=r.disableDragging,o=r.style,s=r.dragHandleClassName,l=r.position,u=r.onMouseDown,c=r.onMouseUp,d=r.dragAxis,p=r.dragGrid,m=r.bounds,x=r.enableUserSelectHack,y=r.cancel,S=r.children;r.onResizeStart,r.onResize,r.onResizeStop,r.onDragStart,r.onDrag,r.onDragStop;var b=r.resizeHandleStyles,v=r.resizeHandleClasses,f=r.resizeHandleComponent,h=r.enableResizing,w=r.resizeGrid,C=r.resizeHandleWrapperClass,E=r.resizeHandleWrapperStyle,j=r.scale,R=r.allowAnyClick,k=r.dragPositionOffset,_=hj(r,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),O=this.props.default?fe({},this.props.default):void 0;delete _.default;var I=i||s?{cursor:"auto"}:{cursor:"move"},L=fe(fe(fe({},mj),I),o),X=this.offsetFromParent,Me=X.left,Z=X.top,ge;l&&(ge={x:l.x-Me,y:l.y-Z});var $=this.state.resizing?void 0:ge,D=this.state.resizing?"both":d;return z.createElement(rj,{ref:function(M){M&&(n.draggable=M)},handle:s?".".concat(s):void 0,defaultPosition:O,onMouseDown:u,onMouseUp:c,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:D,disabled:i,grid:p,bounds:m?this.state.bounds:void 0,position:$,enableUserSelectHack:x,cancel:y,scale:j,allowAnyClick:R,nodeRef:this.resizableElement,positionOffset:k},z.createElement(fj,fe({},_,{ref:function(M){M&&(n.resizable=M,n.resizableElement.current=M.resizable)},defaultSize:O,size:this.props.size,enable:typeof h=="boolean"?gj(h):h,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:L,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:w,handleWrapperClass:C,handleWrapperStyle:E,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:b,handleClasses:v,handleComponent:f,scale:this.props.scale}),S))},t.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},t}(z.PureComponent);const xj=g.div`
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
`,yj=g.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
`,wj=g.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`,Sj=g.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`,fg=({item:e,updatePosition:t,updateSize:n,onSelect:r,isSelectable:i=!1})=>{const o=()=>{i&&r&&r(e)};return a.jsx(vj,{bounds:"parent",position:{x:e.x,y:e.y},size:{width:e.width,height:e.height},enableResizing:!i,enableDragging:!i,onDragStop:(s,l)=>{i||t(e.id,l.x,l.y)},onResizeStop:(s,l,u,c,d)=>{if(!i){const p=parseFloat(u.style.width),m=parseFloat(u.style.height);n(e.id,p,m),t(e.id,d.x,d.y)}},children:a.jsxs(xj,{$isSelectable:i,$isSelected:!1,onClick:o,children:[a.jsx(yj,{children:e.label}),e.seats&&a.jsxs(Sj,{children:[e.seats," мест"]}),a.jsx(wj,{children:e.type})]})})},bj=g.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`,jj=g.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,Cj=g.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`,kj=g.div`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #fff;
`,Ej=g.h3`
  color: #ffd700;
  margin: 0 0 0.5rem 0;
`,zj=g.p`
  margin: 0;
  color: #ccc;
`,Pj=g.button`
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
`,Rj=({zoneItems:e,onTableSelect:t,selectedTable:n,onContinue:r})=>{const i=e.filter(s=>s.type==="table"),o=s=>{t(s)};return a.jsxs(Wt,{children:[a.jsx(jj,{children:"Выберите стол для бронирования"}),a.jsx(Cj,{children:"Кликните на стол, который хотите забронировать"}),n&&a.jsxs(kj,{children:[a.jsxs(Ej,{children:["Выбранный стол: ",n.label]}),a.jsxs(zj,{children:["Количество мест: ",n.seats||"Не указано"]}),a.jsx(Pj,{onClick:r,children:"Продолжить бронирование"})]}),a.jsx(bj,{children:i.map(s=>a.jsx(fg,{item:s,updatePosition:()=>{},updateSize:()=>{},onSelect:o,isSelectable:!0},s.id))})]})};function pg(e,t){return function(){return e.apply(t,arguments)}}const{toString:_j}=Object.prototype,{getPrototypeOf:Tc}=Object,{iterator:da,toStringTag:hg}=Symbol,fa=(e=>t=>{const n=_j.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=e=>(e=e.toLowerCase(),t=>fa(t)===e),pa=e=>t=>typeof t===e,{isArray:Gr}=Array,Vi=pa("undefined");function to(e){return e!==null&&!Vi(e)&&e.constructor!==null&&!Vi(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const mg=St("ArrayBuffer");function Tj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&mg(e.buffer),t}const $j=pa("string"),He=pa("function"),gg=pa("number"),no=e=>e!==null&&typeof e=="object",Oj=e=>e===!0||e===!1,rs=e=>{if(fa(e)!=="object")return!1;const t=Tc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(hg in e)&&!(da in e)},Nj=e=>{if(!no(e)||to(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Dj=St("Date"),Ij=St("File"),Mj=St("Blob"),Lj=St("FileList"),Aj=e=>no(e)&&He(e.pipe),Fj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=fa(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},Bj=St("URLSearchParams"),[Uj,Wj,Hj,Vj]=["ReadableStream","Request","Response","Headers"].map(St),Gj=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ro(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Gr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(to(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function vg(e,t){if(to(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const On=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xg=e=>!Vi(e)&&e!==On;function yu(){const{caseless:e}=xg(this)&&this||{},t={},n=(r,i)=>{const o=e&&vg(t,i)||i;rs(t[o])&&rs(r)?t[o]=yu(t[o],r):rs(r)?t[o]=yu({},r):Gr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ro(arguments[r],n);return t}const Yj=(e,t,n,{allOwnKeys:r}={})=>(ro(t,(i,o)=>{n&&He(i)?e[o]=pg(i,n):e[o]=i},{allOwnKeys:r}),e),Xj=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kj=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qj=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Tc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qj=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zj=e=>{if(!e)return null;if(Gr(e))return e;let t=e.length;if(!gg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Jj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Tc(Uint8Array)),eC=(e,t)=>{const r=(e&&e[da]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},tC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nC=St("HTMLFormElement"),rC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),zf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),iC=St("RegExp"),yg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ro(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},oC=e=>{yg(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sC=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Gr(e)?r(e):r(String(e).split(t)),n},aC=()=>{},lC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function uC(e){return!!(e&&He(e.append)&&e[hg]==="FormData"&&e[da])}const cC=e=>{const t=new Array(10),n=(r,i)=>{if(no(r)){if(t.indexOf(r)>=0)return;if(to(r))return r;if(!("toJSON"in r)){t[i]=r;const o=Gr(r)?[]:{};return ro(r,(s,l)=>{const u=n(s,i+1);!Vi(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},dC=St("AsyncFunction"),fC=e=>e&&(no(e)||He(e))&&He(e.then)&&He(e.catch),wg=((e,t)=>e?setImmediate:t?((n,r)=>(On.addEventListener("message",({source:i,data:o})=>{i===On&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),On.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",He(On.postMessage)),pC=typeof queueMicrotask<"u"?queueMicrotask.bind(On):typeof process<"u"&&process.nextTick||wg,hC=e=>e!=null&&He(e[da]),P={isArray:Gr,isArrayBuffer:mg,isBuffer:to,isFormData:Fj,isArrayBufferView:Tj,isString:$j,isNumber:gg,isBoolean:Oj,isObject:no,isPlainObject:rs,isEmptyObject:Nj,isReadableStream:Uj,isRequest:Wj,isResponse:Hj,isHeaders:Vj,isUndefined:Vi,isDate:Dj,isFile:Ij,isBlob:Mj,isRegExp:iC,isFunction:He,isStream:Aj,isURLSearchParams:Bj,isTypedArray:Jj,isFileList:Lj,forEach:ro,merge:yu,extend:Yj,trim:Gj,stripBOM:Xj,inherits:Kj,toFlatObject:Qj,kindOf:fa,kindOfTest:St,endsWith:qj,toArray:Zj,forEachEntry:eC,matchAll:tC,isHTMLForm:nC,hasOwnProperty:zf,hasOwnProp:zf,reduceDescriptors:yg,freezeMethods:oC,toObjectSet:sC,toCamelCase:rC,noop:aC,toFiniteNumber:lC,findKey:vg,global:On,isContextDefined:xg,isSpecCompliantForm:uC,toJSONObject:cC,isAsyncFn:dC,isThenable:fC,setImmediate:wg,asap:pC,isIterable:hC};function A(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}P.inherits(A,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const Sg=A.prototype,bg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{bg[e]={value:e}});Object.defineProperties(A,bg);Object.defineProperty(Sg,"isAxiosError",{value:!0});A.from=(e,t,n,r,i,o)=>{const s=Object.create(Sg);return P.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),A.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const mC=null;function wu(e){return P.isPlainObject(e)||P.isArray(e)}function jg(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Pf(e,t,n){return e?e.concat(t).map(function(i,o){return i=jg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function gC(e){return P.isArray(e)&&!e.some(wu)}const vC=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function ha(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!P.isUndefined(b[S])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(P.isDate(y))return y.toISOString();if(P.isBoolean(y))return y.toString();if(!u&&P.isBlob(y))throw new A("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(y)||P.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,S,b){let v=y;if(y&&!b&&typeof y=="object"){if(P.endsWith(S,"{}"))S=r?S:S.slice(0,-2),y=JSON.stringify(y);else if(P.isArray(y)&&gC(y)||(P.isFileList(y)||P.endsWith(S,"[]"))&&(v=P.toArray(y)))return S=jg(S),v.forEach(function(h,w){!(P.isUndefined(h)||h===null)&&t.append(s===!0?Pf([S],w,o):s===null?S:S+"[]",c(h))}),!1}return wu(y)?!0:(t.append(Pf(b,S,o),c(y)),!1)}const p=[],m=Object.assign(vC,{defaultVisitor:d,convertValue:c,isVisitable:wu});function x(y,S){if(!P.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+S.join("."));p.push(y),P.forEach(y,function(v,f){(!(P.isUndefined(v)||v===null)&&i.call(t,v,P.isString(f)?f.trim():f,S,m))===!0&&x(v,S?S.concat(f):[f])}),p.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Rf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $c(e,t){this._pairs=[],e&&ha(e,this,t)}const Cg=$c.prototype;Cg.append=function(t,n){this._pairs.push([t,n])};Cg.toString=function(t){const n=t?function(r){return t.call(this,r,Rf)}:Rf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function xC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kg(e,t,n){if(!t)return e;const r=n&&n.encode||xC;P.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new $c(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class _f{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Eg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yC=typeof URLSearchParams<"u"?URLSearchParams:$c,wC=typeof FormData<"u"?FormData:null,SC=typeof Blob<"u"?Blob:null,bC={isBrowser:!0,classes:{URLSearchParams:yC,FormData:wC,Blob:SC},protocols:["http","https","file","blob","url","data"]},Oc=typeof window<"u"&&typeof document<"u",Su=typeof navigator=="object"&&navigator||void 0,jC=Oc&&(!Su||["ReactNative","NativeScript","NS"].indexOf(Su.product)<0),CC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kC=Oc&&window.location.href||"http://localhost",EC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oc,hasStandardBrowserEnv:jC,hasStandardBrowserWebWorkerEnv:CC,navigator:Su,origin:kC},Symbol.toStringTag,{value:"Module"})),Pe={...EC,...bC};function zC(e,t){return ha(e,new Pe.classes.URLSearchParams,{visitor:function(n,r,i,o){return Pe.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function PC(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function RC(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function zg(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=o>=n.length;return s=!s&&P.isArray(i)?i.length:s,u?(P.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&P.isArray(i[s])&&(i[s]=RC(i[s])),!l)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(PC(r),i,n,0)}),n}return null}function _C(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const io={transitional:Eg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i?JSON.stringify(zg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zC(t,this.formSerializer).toString();if((l=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ha(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),_C(t)):t}],transformResponse:[function(t){const n=this.transitional||io.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?A.from(l,A.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{io.headers[e]={}});const TC=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$C=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&TC[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Tf=Symbol("internals");function oi(e){return e&&String(e).trim().toLowerCase()}function is(e){return e===!1||e==null?e:P.isArray(e)?e.map(is):String(e)}function OC(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const NC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function nl(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function DC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function IC(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}let Ve=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,c){const d=oi(u);if(!d)throw new Error("header name must be a non-empty string");const p=P.findKey(i,d);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=is(l))}const s=(l,u)=>P.forEach(l,(c,d)=>o(c,d,u));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(P.isString(t)&&(t=t.trim())&&!NC(t))s($C(t),n);else if(P.isObject(t)&&P.isIterable(t)){let l={},u,c;for(const d of t){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(u=l[c])?P.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(l,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=oi(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return OC(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=oi(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||nl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=oi(s),s){const l=P.findKey(r,s);l&&(!n||nl(r,r[l],l,n))&&(delete r[l],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||nl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const s=P.findKey(r,o);if(s){n[s]=is(i),delete n[o];return}const l=t?DC(o):String(o).trim();l!==o&&delete n[o],n[l]=is(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Tf]=this[Tf]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=oi(s);r[l]||(IC(i,s),r[l]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}};Ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ve.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Ve);function rl(e,t){const n=this||io,r=t||n,i=Ve.from(r.headers);let o=r.data;return P.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Pg(e){return!!(e&&e.__CANCEL__)}function Yr(e,t,n){A.call(this,e??"canceled",A.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Yr,A,{__CANCEL__:!0});function Rg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new A("Request failed with status code "+n.status,[A.ERR_BAD_REQUEST,A.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function MC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function LC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[o];s||(s=c),n[i]=u,r[i]=c;let p=o,m=0;for(;p!==i;)m+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const x=d&&c-d;return x?Math.round(m*1e3/x):void 0}}function AC(e,t){let n=0,r=1e3/t,i,o;const s=(c,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e(...c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?s(c,d):(i=c,o||(o=setTimeout(()=>{o=null,s(i)},r-p)))},()=>i&&s(i)]}const Ds=(e,t,n=3)=>{let r=0;const i=LC(50,250);return AC(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,u=s-r,c=i(u),d=s<=l;r=s;const p={loaded:s,total:l,progress:l?s/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-s)/c:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},n)},$f=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Of=e=>(...t)=>P.asap(()=>e(...t)),FC=Pe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Pe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Pe.origin),Pe.navigator&&/(msie|trident)/i.test(Pe.navigator.userAgent)):()=>!0,BC=Pe.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(r)&&s.push("path="+r),P.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function UC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function WC(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _g(e,t,n){let r=!UC(t);return e&&(r||n==!1)?WC(e,t):t}const Nf=e=>e instanceof Ve?{...e}:e;function Wn(e,t){t=t||{};const n={};function r(c,d,p,m){return P.isPlainObject(c)&&P.isPlainObject(d)?P.merge.call({caseless:m},c,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function i(c,d,p,m){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c,p,m)}else return r(c,d,p,m)}function o(c,d){if(!P.isUndefined(d))return r(void 0,d)}function s(c,d){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d,p)=>i(Nf(c),Nf(d),p,!0)};return P.forEach(Object.keys({...e,...t}),function(d){const p=u[d]||i,m=p(e[d],t[d],d);P.isUndefined(m)&&p!==l||(n[d]=m)}),n}const Tg=e=>{const t=Wn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=Ve.from(s),t.url=kg(_g(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(P.isFormData(n)){if(Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(Pe.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&FC(t.url))){const c=i&&o&&BC.read(o);c&&s.set(i,c)}return t},HC=typeof XMLHttpRequest<"u",VC=HC&&function(e){return new Promise(function(n,r){const i=Tg(e);let o=i.data;const s=Ve.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=i,d,p,m,x,y;function S(){x&&x(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(i.method.toUpperCase(),i.url,!0),b.timeout=i.timeout;function v(){if(!b)return;const h=Ve.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};Rg(function(j){n(j),S()},function(j){r(j),S()},C),b=null}"onloadend"in b?b.onloadend=v:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(v)},b.onabort=function(){b&&(r(new A("Request aborted",A.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new A("Network Error",A.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||Eg;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),r(new A(w,C.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,b)),b=null},o===void 0&&s.setContentType(null),"setRequestHeader"in b&&P.forEach(s.toJSON(),function(w,C){b.setRequestHeader(C,w)}),P.isUndefined(i.withCredentials)||(b.withCredentials=!!i.withCredentials),l&&l!=="json"&&(b.responseType=i.responseType),c&&([m,y]=Ds(c,!0),b.addEventListener("progress",m)),u&&b.upload&&([p,x]=Ds(u),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",x)),(i.cancelToken||i.signal)&&(d=h=>{b&&(r(!h||h.type?new Yr(null,e,b):h),b.abort(),b=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const f=MC(i.url);if(f&&Pe.protocols.indexOf(f)===-1){r(new A("Unsupported protocol "+f+":",A.ERR_BAD_REQUEST,e));return}b.send(o||null)})},GC=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof A?d:new Yr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new A(`timeout ${t} of ms exceeded`,A.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:u}=r;return u.unsubscribe=()=>P.asap(l),u}},YC=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},XC=async function*(e,t){for await(const n of KC(e))yield*YC(n,t)},KC=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Df=(e,t,n,r)=>{const i=XC(e,t);let o=0,s,l=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){l(),u.close();return}let p=d.byteLength;if(n){let m=o+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},ma=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",$g=ma&&typeof ReadableStream=="function",QC=ma&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Og=(e,...t)=>{try{return!!e(...t)}catch{return!1}},qC=$g&&Og(()=>{let e=!1;const t=new Request(Pe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),If=64*1024,bu=$g&&Og(()=>P.isReadableStream(new Response("").body)),Is={stream:bu&&(e=>e.body)};ma&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Is[t]&&(Is[t]=P.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new A(`Response type '${t}' is not supported`,A.ERR_NOT_SUPPORT,r)})})})(new Response);const ZC=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(Pe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await QC(e)).byteLength},JC=async(e,t)=>{const n=P.toFiniteNumber(e.getContentLength());return n??ZC(t)},ek=ma&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:p="same-origin",fetchOptions:m}=Tg(e);c=c?(c+"").toLowerCase():"text";let x=GC([i,o&&o.toAbortSignal()],s),y;const S=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let b;try{if(u&&qC&&n!=="get"&&n!=="head"&&(b=await JC(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),E;if(P.isFormData(r)&&(E=C.headers.get("content-type"))&&d.setContentType(E),C.body){const[j,R]=$f(b,Ds(Of(u)));r=Df(C.body,If,j,R)}}P.isString(p)||(p=p?"include":"omit");const v="credentials"in Request.prototype;y=new Request(t,{...m,signal:x,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:v?p:void 0});let f=await fetch(y,m);const h=bu&&(c==="stream"||c==="response");if(bu&&(l||h&&S)){const C={};["status","statusText","headers"].forEach(k=>{C[k]=f[k]});const E=P.toFiniteNumber(f.headers.get("content-length")),[j,R]=l&&$f(E,Ds(Of(l),!0))||[];f=new Response(Df(f.body,If,j,()=>{R&&R(),S&&S()}),C)}c=c||"text";let w=await Is[P.findKey(Is,c)||"text"](f,e);return!h&&S&&S(),await new Promise((C,E)=>{Rg(C,E,{data:w,headers:Ve.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:y})})}catch(v){throw S&&S(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new A("Network Error",A.ERR_NETWORK,e,y),{cause:v.cause||v}):A.from(v,v&&v.code,e,y)}}),ju={http:mC,xhr:VC,fetch:ek};P.forEach(ju,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Mf=e=>`- ${e}`,tk=e=>P.isFunction(e)||e===null||e===!1,Ng={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!tk(n)&&(r=ju[(s=String(n)).toLowerCase()],r===void 0))throw new A(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Mf).join(`
`):" "+Mf(o[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ju};function il(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yr(null,e)}function Lf(e){return il(e),e.headers=Ve.from(e.headers),e.data=rl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ng.getAdapter(e.adapter||io.adapter)(e).then(function(r){return il(e),r.data=rl.call(e,e.transformResponse,r),r.headers=Ve.from(r.headers),r},function(r){return Pg(r)||(il(e),r&&r.response&&(r.response.data=rl.call(e,e.transformResponse,r.response),r.response.headers=Ve.from(r.response.headers))),Promise.reject(r)})}const Dg="1.11.0",ga={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ga[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Af={};ga.transitional=function(t,n,r){function i(o,s){return"[Axios v"+Dg+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new A(i(s," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!Af[s]&&(Af[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};ga.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function nk(e,t,n){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],u=l===void 0||s(l,o,e);if(u!==!0)throw new A("option "+o+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+o,A.ERR_BAD_OPTION)}}const os={assertOptions:nk,validators:ga},jt=os.validators;let Mn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new _f,response:new _f}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Wn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&os.assertOptions(r,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:os.assertOptions(i,{encode:jt.function,serialize:jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),os.assertOptions(n,{baseUrl:jt.spelling("baseURL"),withXsrfToken:jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Ve.concat(s,o);const l=[];let u=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(u=u&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,p=0,m;if(!u){const y=[Lf.bind(this),void 0];for(y.unshift(...l),y.push(...c),m=y.length,d=Promise.resolve(n);p<m;)d=d.then(y[p++],y[p++]);return d}m=l.length;let x=n;for(p=0;p<m;){const y=l[p++],S=l[p++];try{x=y(x)}catch(b){S.call(this,b);break}}try{d=Lf.call(this,x)}catch(y){return Promise.reject(y)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=Wn(this.defaults,t);const n=_g(t.baseURL,t.url,t.allowAbsoluteUrls);return kg(n,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){Mn.prototype[t]=function(n,r){return this.request(Wn(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Wn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Mn.prototype[t]=n(),Mn.prototype[t+"Form"]=n(!0)});let rk=class Ig{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new Yr(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ig(function(i){t=i}),cancel:t}}};function ik(e){return function(n){return e.apply(null,n)}}function ok(e){return P.isObject(e)&&e.isAxiosError===!0}const Cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cu).forEach(([e,t])=>{Cu[t]=e});function Mg(e){const t=new Mn(e),n=pg(Mn.prototype.request,t);return P.extend(n,Mn.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Mg(Wn(e,i))},n}const se=Mg(io);se.Axios=Mn;se.CanceledError=Yr;se.CancelToken=rk;se.isCancel=Pg;se.VERSION=Dg;se.toFormData=ha;se.AxiosError=A;se.Cancel=se.CanceledError;se.all=function(t){return Promise.all(t)};se.spread=ik;se.isAxiosError=ok;se.mergeConfig=Wn;se.AxiosHeaders=Ve;se.formToJSON=e=>zg(P.isHTMLForm(e)?new FormData(e):e);se.getAdapter=Ng.getAdapter;se.HttpStatusCode=Cu;se.default=se;const{Axios:O2,AxiosError:N2,CanceledError:D2,isCancel:I2,CancelToken:M2,VERSION:L2,all:A2,Cancel:F2,isAxiosError:B2,spread:U2,toFormData:W2,AxiosHeaders:H2,HttpStatusCode:V2,formToJSON:G2,getAdapter:Y2,mergeConfig:X2}=se,sk="http://localhost:3002/api",le=se.create({baseURL:sk,timeout:1e4,headers:{"Content-Type":"application/json"}});le.interceptors.response.use(e=>e,e=>{var t;return console.error("API Error:",((t=e.response)==null?void 0:t.data)||e.message),Promise.reject(e)});const Lg=async()=>{try{return(await le.get("/zones")).data}catch(e){return console.error("Ошибка загрузки зон:",e),[]}},ak=async e=>(await le.post("/zones",e)).data,Ag=async e=>{try{return(await le.get(`/zones/${e}/items`)).data}catch(t){return console.error("Ошибка загрузки элементов зоны:",t),[]}},lk=async(e,t)=>{try{await le.post("/zones/items",t)}catch(n){throw console.error("Ошибка сохранения элементов зоны:",n),n}},uk=g.div`
  display: flex;
  flex-direction: column;
`;g.main`
  flex: 1;
`;const ck=g.div`
  padding: 2rem 0;
`,dk=g.h1`
  text-align: center;
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,fk=g.p`
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ol=g.div`
  margin-bottom: 3rem;
`,sl=g.h2`
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,pk=g.div`
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
`,hk=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`,mk=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ff6b6b;
  font-size: 1.2rem;
`,gk=g.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,al=g.div`
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
`,vk=()=>{const[e,t]=z.useState([]),[n,r]=z.useState(!0),[i,o]=z.useState(null),[s,l]=z.useState(1),[u,c]=z.useState(null),[d,p]=z.useState(null),[m,x]=z.useState([]),[y,S]=z.useState(!1);Re.useEffect(()=>{(async()=>{try{r(!0);const E=await Lg();t(E)}catch{o("Ошибка загрузки зон")}finally{r(!1)}})()},[]);const b=async C=>{c(C),l(2),S(!0);try{const E=await Ag(C.id);x(E)}catch(E){console.error("Ошибка загрузки столов зоны:",E),x([])}finally{S(!1)}},v=()=>{c(null),p(null),l(1)},f=C=>{p(C)},h=()=>{l(3)},w=()=>{p(null),l(2)};return a.jsx(uk,{children:a.jsx(Wt,{children:a.jsxs(ck,{children:[a.jsx(dk,{children:"Бронирование"}),a.jsx(fk,{children:"Выберите зал и заполните форму для бронирования"}),a.jsxs(gk,{children:[a.jsx(al,{$active:s===1,$completed:s>1,children:"1"}),a.jsx(al,{$active:s===2,$completed:s>2,children:"2"}),a.jsx(al,{$active:s===3,$completed:!1,children:"3"})]}),s===1?a.jsxs(ol,{children:[a.jsx(sl,{children:"Шаг 1: Выберите зал"}),n?a.jsx(hk,{children:"Загрузка зон..."}):i?a.jsx(mk,{children:i}):a.jsx(pk,{children:e.map((C,E)=>a.jsx("div",{onClick:()=>b(C),children:a.jsx(OS,{zone:C,$isFullWidth:E%3===2})},C.id))})]}):s===2?a.jsxs(ol,{children:[a.jsx(sl,{children:"Шаг 2: Выберите стол"}),u&&a.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[a.jsxs("p",{style:{color:"#ffd700",fontSize:"1.2rem"},children:["Зал: ",u.name]}),a.jsx("button",{onClick:v,style:{background:"transparent",border:"1px solid #ffd700",color:"#ffd700",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginTop:"1rem"},children:"← Выбрать другой зал"})]}),y?a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Загрузка столов..."}):a.jsx(Rj,{zoneItems:m,onTableSelect:f,selectedTable:d,onContinue:h})]}):a.jsxs(ol,{children:[a.jsx(sl,{children:"Шаг 3: Заполните форму бронирования"}),u&&d&&a.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[a.jsxs("p",{style:{color:"#ffd700",fontSize:"1.2rem"},children:["Зал: ",u.name," | Стол: ",d.label]}),a.jsx("button",{onClick:w,style:{background:"transparent",border:"1px solid #ffd700",color:"#ffd700",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginTop:"1rem"},children:"← Выбрать другой стол"})]}),u&&d&&a.jsx(pb,{selectedZone:u,selectedTable:d})]})]})})})},he={getMenuTypes:async()=>{console.log("🔍 Запрашиваем типы меню...");try{const e=await le.get("/menu-types");return console.log("✅ Типы меню получены:",e.data.length,"шт."),e.data}catch(e){throw console.error("❌ Ошибка получения типов меню:",e),e}},getMenuType:async e=>(await le.get(`/menu-types/${e}`)).data,createMenuType:async e=>(await le.post("/menu-types",e)).data,updateMenuType:async(e,t)=>(await le.put(`/menu-types/${e}`,t)).data,deleteMenuType:async e=>{await le.delete(`/menu-types/${e}`)},getMenuCategories:async e=>{console.log("🔍 Запрашиваем категории меню...",e?`для типа ${e}`:"все");try{const t=e?{menuTypeId:e}:{},n=await le.get("/menu-categories",{params:t});return console.log("✅ Категории меню получены:",n.data.length,"шт."),n.data}catch(t){throw console.error("❌ Ошибка получения категорий меню:",t),t}},getMenuCategory:async e=>(await le.get(`/menu-categories/${e}`)).data,createMenuCategory:async e=>(await le.post("/menu-categories",e)).data,updateMenuCategory:async(e,t)=>(await le.put(`/menu-categories/${e}`,t)).data,deleteMenuCategory:async e=>{await le.delete(`/menu-categories/${e}`)},getMenuItems:async e=>{console.log("🔍 Запрашиваем блюда меню...",e?`для категории ${e}`:"все");try{const t=e?{categoryId:e}:{},n=await le.get("/menu-items",{params:t});return console.log("✅ Блюда меню получены:",n.data.length,"шт."),n.data}catch(t){throw console.error("❌ Ошибка получения блюд меню:",t),t}},getMenuItem:async e=>(await le.get(`/menu-items/${e}`)).data,createMenuItem:async e=>{console.log("🚀 Создаем блюдо:",e);try{const t=await le.post("/menu-items",e);return console.log("✅ Блюдо создано:",t.data),t.data}catch(t){throw console.error("❌ Ошибка создания блюда:",t),t}},updateMenuItem:async(e,t)=>(await le.put(`/menu-items/${e}`,t)).data,deleteMenuItem:async e=>{await le.delete(`/menu-items/${e}`)},getFullMenu:async()=>{console.log("🚀 Запрашиваем полное меню...");try{const[e,t,n]=await Promise.all([he.getMenuTypes(),he.getMenuCategories(),he.getMenuItems()]);return console.log("✅ Полное меню получено:",{types:e.length,categories:t.length,items:n.length}),{types:e,categories:t,items:n}}catch(e){throw console.error("❌ Ошибка получения полного меню:",e),e}}},Oo=g.div`
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
`,Ff=g.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
`;g.main`
  flex: 1;
`;const xk=g.div`
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
`,yk=g.div`
  width: 250px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`,wk=g.button`
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
`,Sk=g.div`
  flex: 1;
  min-width: 0; /* Важно для предотвращения переполнения */
  overflow: hidden; /* Предотвращает вылетание контента */
`,bk=g.div`
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
`,jk=g.div`
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
`,Bf=g.button`
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
`,Ck=g.div`
  padding: 2rem 0;
`,kk=g.div`
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
`,Ek=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,zk=g.div`
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
  }
`,Pk=g.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #333;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);
`,Rk=g.div`
  padding: 1.5rem;
`,_k=g.h3`
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,Tk=g.p`
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  min-height: 2.7rem;
`,$k=g.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: right;
`,Ok=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`,Uf=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #dc3545;
  font-size: 1.2rem;
  text-align: center;
`,Nk=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[i,o]=z.useState([]),[s,l]=z.useState(null),[u,c]=z.useState(null),[d,p]=z.useState(!0),[m,x]=z.useState(null);z.useEffect(()=>{y()},[]);const y=async()=>{try{p(!0),x(null);const j=await he.getFullMenu();t(j.types.filter(R=>R.isActive)),r(j.categories.filter(R=>R.isActive)),o(j.items.filter(R=>R.isActive)),j.types.filter(R=>R.isActive).length>0&&l(j.types.filter(R=>R.isActive)[0])}catch(j){console.error("Ошибка загрузки меню:",j),x("Не удалось загрузить меню. Пожалуйста, попробуйте позже.")}finally{p(!1)}},S=j=>{l(j),c(null)},b=j=>{c(j)},v=j=>n.filter(R=>R.menuTypeId===j),f=j=>i.filter(R=>R.categoryId===j),h=j=>{const R=v(j).map(k=>k.id);return i.filter(k=>R.includes(k.categoryId))},w=j=>`${j} ₽`;if(d)return a.jsx(Oo,{children:a.jsx(Wt,{children:a.jsx(Ok,{children:"Загрузка меню..."})})});if(m)return a.jsx(Oo,{children:a.jsx(Wt,{children:a.jsx(Uf,{children:m})})});if(e.length===0)return a.jsx(Oo,{children:a.jsx(Ff,{children:a.jsx(Uf,{children:"Меню пока не доступно"})})});const C=s?v(s.id):[],E=u?f(u.id):s?h(s.id):[];return a.jsx(Oo,{children:a.jsx(Ff,{children:a.jsxs(xk,{children:[a.jsx(yk,{children:e.map(j=>a.jsx(wk,{$active:(s==null?void 0:s.id)===j.id,onClick:()=>S(j),children:j.name},j.id))}),a.jsxs(Sk,{children:[C.length>0&&a.jsx(bk,{children:a.jsxs(jk,{children:[a.jsx(Bf,{$active:u===null,onClick:()=>c(null),children:"Все блюда"}),C.map(j=>a.jsx(Bf,{$active:(u==null?void 0:u.id)===j.id,onClick:()=>b(j),children:j.name},j.id))]})}),a.jsx(Ck,{children:a.jsxs(kk,{children:[a.jsx("h2",{children:u?u.name:s?`${s.name} - Все блюда`:"Меню"}),a.jsx(Ek,{children:E.map(j=>a.jsxs(zk,{children:[a.jsx(Pk,{src:j.imageUrl||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=",alt:j.name,onError:R=>{const k=R.target;k.style.display="none"}}),a.jsxs(Rk,{children:[a.jsx(_k,{children:j.name}),a.jsx(Tk,{children:j.description||"Описание блюда"}),a.jsx($k,{children:w(j.price)})]})]},j.id))}),E.length===0&&a.jsx("div",{style:{textAlign:"center",color:"#ccc",padding:"2rem"},children:"В этой категории пока нет блюд"})]})})]})]})})})},Dk=g.div`
  display: flex;
  flex-direction: column;
`,Ik=g.main`
  flex: 1;
  padding: 2rem 0;
`,Mk=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Lk=g.div`
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
`,Ak=()=>a.jsx(Dk,{children:a.jsx(Ik,{children:a.jsx(Mk,{children:a.jsxs(Lk,{children:[a.jsx("h1",{children:"Афиша"}),a.jsx("p",{children:"Актуальные события и мероприятия в нашем клубе."})]})})})}),Fk=g.div`
  display: flex;
  flex-direction: column;
`,Bk=g.main`
  flex: 1;
  padding: 2rem 0;
`,Uk=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Wk=g.div`
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
`,Hk=()=>a.jsx(Fk,{children:a.jsx(Bk,{children:a.jsx(Uk,{children:a.jsxs(Wk,{children:[a.jsx("h1",{children:"Клубные карты"}),a.jsx("p",{children:"Специальные предложения и программы лояльности для наших гостей."})]})})})}),Vk=g.div`
  display: flex;
  flex-direction: column;
`,Gk=g.main`
  flex: 1;
  padding: 2rem 0;
`,Yk=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Xk=g.div`
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
`,Kk=g.div`
  background: #333;
  border: 2px dashed #ffd700;
  border-radius: 8px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  color: #ffd700;
  font-size: 1.2rem;
  text-align: center;
`,Qk=()=>a.jsx(Vk,{children:a.jsx(Gk,{children:a.jsx(Yk,{children:a.jsxs(Xk,{children:[a.jsx("h1",{children:"3D Тур по клубу"}),a.jsx("p",{children:"Совершите виртуальную экскурсию по нашему развлекательному комплексу. Исследуйте все зоны и помещения, не выходя из дома."}),a.jsxs(Kk,{children:["🏠 3D Тур будет доступен в ближайшее время",a.jsx("br",{}),a.jsx("small",{style:{color:"#888",fontSize:"1rem"},children:"Мы работаем над созданием интерактивного 3D тура"})]}),a.jsx("p",{children:"В 3D туре вы сможете:"}),a.jsxs("ul",{style:{textAlign:"left",maxWidth:"600px",margin:"0 auto",color:"#ccc",lineHeight:"1.8"},children:[a.jsx("li",{children:"Пройтись по всем зонам клуба"}),a.jsx("li",{children:"Рассмотреть детали интерьера"}),a.jsx("li",{children:"Увидеть расположение столов и оборудования"}),a.jsx("li",{children:"Оценить атмосферу каждого помещения"}),a.jsx("li",{children:"Познакомиться с планировкой клуба"})]})]})})})}),qk=g.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`,Zk=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Jk=g.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,eE=g.p`
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
`,tE=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,nr=g.div`
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
`,rr=g.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ir=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,or=g.p`
  color: #ccc;
  line-height: 1.6;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,nE=g.div`
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,rE=g.h2`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,iE=g.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,ll=g.div`
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
`,oE=()=>a.jsx(qk,{children:a.jsxs(Zk,{children:[a.jsx(Jk,{children:"Безопасность гостей"}),a.jsx(eE,{children:"Мы обеспечиваем максимальную безопасность для всех посетителей клуба. Ваша безопасность - наш приоритет."}),a.jsxs(tE,{children:[a.jsxs(nr,{children:[a.jsx(rr,{children:"📹"}),a.jsx(ir,{children:"Видеонаблюдение"}),a.jsx(or,{children:"По всему клубу установлены современные камеры видеонаблюдения с высоким разрешением. Все зоны находятся под постоянным контролем службы безопасности."})]}),a.jsxs(nr,{children:[a.jsx(rr,{children:"👮‍♂️"}),a.jsx(ir,{children:"Служба безопасности"}),a.jsx(or,{children:"Круглосуточная служба безопасности с быстрым реагированием. Опытные сотрудники всегда готовы помочь и обеспечить порядок в клубе."})]}),a.jsxs(nr,{children:[a.jsx(rr,{children:"🚨"}),a.jsx(ir,{children:"Система оповещения"}),a.jsx(or,{children:"Современная система оповещения и связи с экстренными службами. В случае необходимости помощь прибудет в кратчайшие сроки."})]}),a.jsxs(nr,{children:[a.jsx(rr,{children:"🔒"}),a.jsx(ir,{children:"Контроль доступа"}),a.jsx(or,{children:"Система контроля доступа на входе и в VIP-зонах. Все посетители проходят проверку для обеспечения безопасности."})]}),a.jsxs(nr,{children:[a.jsx(rr,{children:"💡"}),a.jsx(ir,{children:"Освещение"}),a.jsx(or,{children:"Полное освещение всех зон клуба, включая парковку и прилегающую территорию. Хорошая видимость обеспечивает дополнительную безопасность."})]}),a.jsxs(nr,{children:[a.jsx(rr,{children:"🚪"}),a.jsx(ir,{children:"Пожарная безопасность"}),a.jsx(or,{children:"Четко обозначенные аварийные выходы и пути эвакуации. Регулярно проводятся профилактические работы по обеспечению пожарной безопасности."})]})]}),a.jsxs(nE,{children:[a.jsx(rE,{children:"Нужна помощь?"}),a.jsx("p",{style:{color:"#ccc",marginBottom:"1rem"},children:"Если у вас возникли вопросы по безопасности или нужна помощь, свяжитесь с нами:"}),a.jsxs(iE,{children:[a.jsxs(ll,{children:[a.jsx("span",{children:"📞"}),a.jsx("a",{href:"tel:+79680905550",children:"+7(968) 090-55-50"})]}),a.jsxs(ll,{children:[a.jsx("span",{children:"📞"}),a.jsx("a",{href:"tel:+79680915550",children:"+7(968) 091-55-50"})]}),a.jsxs(ll,{children:[a.jsx("span",{children:"📧"}),a.jsx("a",{href:"mailto:order@wetop.ru",children:"order@wetop.ru"})]})]})]})]})}),Fg=async(e,t=3,n)=>{let r=null;for(let i=1;i<=t;i++){n&&n(i);try{return await new Promise((o,s)=>{const l="dgclbjhp0",u="frantsuz-club";if(console.log(`🚀 Попытка ${i}/${t} загрузки в Cloudinary:`,{cloudName:l,uploadPreset:u,fileName:e.name,fileSize:e.size,fileType:e.type}),!e||e.size===0){const x="Файл пустой или поврежден";console.error("❌",x),s(new Error(x));return}const c=new FormData;c.append("file",e),c.append("upload_preset",u),c.append("folder","menu-items");const d=`https://api.cloudinary.com/v1_1/${l}/image/upload`;console.log("📤 Отправляем запрос на:",d);const p=new AbortController,m=setTimeout(()=>p.abort(),3e4);fetch(d,{method:"POST",body:c,signal:p.signal}).then(x=>(clearTimeout(m),console.log("📥 Получен ответ от Cloudinary:",x.status,x.statusText),x.ok?x.json():x.text().then(y=>{console.error("❌ Ответ Cloudinary:",y),s(new Error(`Ошибка Cloudinary: ${x.status} ${x.statusText}`))}))).then(x=>{if(console.log("✅ Успешная загрузка:",x),x.secure_url)o(x.secure_url);else{const y="Не получен URL изображения от Cloudinary";console.error("❌",y,x),s(new Error(y))}}).catch(x=>{if(clearTimeout(m),console.error(`❌ Ошибка загрузки в Cloudinary (попытка ${i}):`,x),x.name==="AbortError")s(new Error("Превышено время ожидания загрузки"));else{if(x.message&&(x.message.includes("Failed to fetch")||x.message.includes("ERR_PROXY_CONNECTION_FAILED")||x.message.includes("ERR_NETWORK")||x.message.includes("ERR_INTERNET_DISCONNECTED")))throw r=x,x;s(x)}})})}catch(o){if(r=o,i===t)throw console.error(`❌ Все ${t} попытки загрузки не удались. Последняя ошибка:`,o),o instanceof Error?o.message.includes("Failed to fetch")||o.message.includes("ERR_PROXY_CONNECTION_FAILED")?new Error("Проблема с сетевым подключением. Проверьте интернет-соединение и попробуйте снова."):o.message.includes("Превышено время ожидания")?new Error("Загрузка занимает слишком много времени. Попробуйте еще раз."):o:new Error("Неизвестная ошибка при загрузке изображения");const s=Math.min(1e3*Math.pow(2,i-1),5e3);console.log(`⏳ Ожидание ${s}ms перед повторной попыткой...`),await new Promise(l=>setTimeout(l,s))}}throw r||new Error("Неизвестная ошибка при загрузке изображения")},sE=g.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`,aE=g.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`,lE=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,No=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Do=g.label`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
`,ul=g.input`
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
`;g.textarea`
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
`;const uE=g.button`
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
`,cE=g.div`
  border: 2px dashed #333;
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffd700;
  }
`,dE=g.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
  margin-top: 1rem;
`,fE=g.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,pE=g.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Wf=()=>{const[e,t]=z.useState({name:"",openTime:"",closeTime:"",imageUrl:""}),[n,r]=z.useState([]),[i,o]=z.useState(!1),[s,l]=z.useState(!1),[u,c]=z.useState(!1),d=(x,y)=>{t(S=>({...S,[x]:y}))},p=async x=>{var S;const y=(S=x.target.files)==null?void 0:S[0];if(y){c(!0);try{const b=await Fg(y);d("imageUrl",b)}catch{r(["Ошибка загрузки изображения"])}finally{c(!1)}}},m=async x=>{x.preventDefault(),r([]),o(!1),l(!0);const y=[];if(e.name||y.push("Введите название зала"),e.openTime||y.push("Укажите время открытия"),e.closeTime||y.push("Укажите время закрытия"),e.imageUrl||y.push("Загрузите изображение"),y.length>0){r(y),l(!1);return}try{console.log("Создание зоны:",e),await ak(e),o(!0),t({name:"",openTime:"",closeTime:"",imageUrl:""})}catch{r(["Ошибка создания зала"])}finally{l(!1)}};return a.jsx(Wt,{children:a.jsxs(sE,{children:[a.jsx(aE,{children:"Создание зала"}),a.jsxs(lE,{onSubmit:m,children:[a.jsxs(No,{children:[a.jsx(Do,{children:"Название зала"}),a.jsx(ul,{type:"text",placeholder:"Например: Караоке, Бильярд",value:e.name,onChange:x=>d("name",x.target.value)})]}),a.jsxs(No,{children:[a.jsx(Do,{children:"Время открытия"}),a.jsx(ul,{type:"time",value:e.openTime,onChange:x=>d("openTime",x.target.value)})]}),a.jsxs(No,{children:[a.jsx(Do,{children:"Время закрытия"}),a.jsx(ul,{type:"time",value:e.closeTime,onChange:x=>d("closeTime",x.target.value)})]}),a.jsxs(No,{children:[a.jsx(Do,{children:"Изображение зала"}),a.jsxs(cE,{children:[a.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"},id:"image-upload",disabled:u}),a.jsx("label",{htmlFor:"image-upload",style:{cursor:u?"not-allowed":"pointer"},children:u?"Загрузка...":e.imageUrl?"Изменить изображение":"Нажмите для загрузки изображения"}),e.imageUrl&&a.jsx(dE,{src:e.imageUrl,alt:"Preview"})]})]}),n.length>0&&a.jsx("div",{children:n.map((x,y)=>a.jsx(fE,{children:x},y))}),i&&a.jsx(pE,{children:"Зал успешно создан!"}),a.jsx(uE,{type:"submit",disabled:s,children:s?"Создается...":"Создать зал"})]})]})})},hE=g.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: #f5f5f5;
  border: 2px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;
`,mE=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,Hf=g.button`
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
`,Vf=g.button`
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
`,gE=g.div`
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
`,vE=g.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  color: #fff;
  min-width: 300px;
`,xE=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Io=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Mo=g.label`
  color: #fff;
  font-weight: 500;
`,Gf=g.input`
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
`,Yf=g.select`
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
`,yE=g.button`
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
`,wE=g.button`
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
`,SE=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,bE=({zoneId:e,zoneName:t,onSave:n})=>{const[r,i]=z.useState([]),[o,s]=z.useState(1),[l,u]=z.useState(!1),[c,d]=z.useState(!0),[p,m]=z.useState(null),[x,y]=z.useState({type:"success",title:"",message:"",isVisible:!1}),[S,b]=z.useState({label:"",type:"table",floor:1,seats:0}),v=z.useRef(null);z.useEffect(()=>{(async()=>{try{d(!0),m(null);const _=await Ag(e);i(_)}catch(_){m("Ошибка загрузки элементов зоны"),console.error("Ошибка загрузки элементов зоны:",_)}finally{d(!1)}})()},[e]);const f=(k,_,O)=>{i(I=>I.map(L=>L.id===k?{...L,x:_,y:O}:L))},h=(k,_,O)=>{i(I=>I.map(L=>L.id===k?{...L,width:_,height:O}:L))},w=k=>{const _={id:Date.now(),label:k.label,type:k.type,floor:k.floor,seats:k.seats,x:50,y:50,width:200,height:100,zoneId:e,isBooking:!1,isActive:!0};i(O=>[...O,_]),u(!1),b({label:"",type:"table",floor:1,seats:0}),E("success","Элемент добавлен!",`"${k.label}" добавлен в зону`)},C=k=>{k.preventDefault(),w(S)},E=(k,_,O)=>{y({type:k,title:_,message:O,isVisible:!0}),setTimeout(()=>{y(I=>({...I,isVisible:!1}))},3e3)},j=async()=>{try{await lk(e,r),n&&n(r),E("success","Успешно сохранено!",`Элементы зоны "${t||"Зона"}" сохранены`),console.log("Сохранено:",r)}catch(k){E("error","Ошибка сохранения","Не удалось сохранить элементы зоны. Попробуйте еще раз."),console.error("Ошибка сохранения:",k)}},R=r.filter(k=>k.floor===o);return a.jsxs(Wt,{children:[t&&a.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",color:"#ffd700",fontSize:"1.5rem",fontWeight:"bold"},children:["Конструктор зоны: ",t]}),a.jsxs(mE,{children:[a.jsx(Hf,{onClick:()=>u(!0),children:"Добавить элемент"}),a.jsx(Hf,{onClick:j,children:"Сохранить зону"}),a.jsx(Vf,{$active:o===1,onClick:()=>s(1),children:"1 этаж"}),a.jsx(Vf,{$active:o===2,onClick:()=>s(2),children:"2 этаж"})]}),c?a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ffd700",fontSize:"1.2rem"},children:"Загрузка элементов зоны..."}):p?a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#ff6b6b",fontSize:"1.2rem"},children:p}):a.jsx(hE,{ref:v,children:R.map(k=>a.jsx(fg,{item:k,updatePosition:f,updateSize:h},k.id))}),a.jsx(gE,{$isOpen:l,children:a.jsxs(vE,{children:[a.jsx("h3",{children:"Добавить элемент"}),a.jsxs(xE,{onSubmit:C,children:[a.jsxs(Io,{children:[a.jsx(Mo,{children:"Название"}),a.jsx(Gf,{type:"text",value:S.label,onChange:k=>b(_=>({..._,label:k.target.value})),placeholder:"Например: Стол 1",required:!0})]}),a.jsxs(Io,{children:[a.jsx(Mo,{children:"Тип"}),a.jsxs(Yf,{value:S.type,onChange:k=>b(_=>({..._,type:k.target.value})),children:[a.jsx("option",{value:"table",children:"Стол"}),a.jsx("option",{value:"stage",children:"Сцена"}),a.jsx("option",{value:"bar",children:"Бар"}),a.jsx("option",{value:"entrance",children:"Вход"})]})]}),a.jsxs(Io,{children:[a.jsx(Mo,{children:"Этаж"}),a.jsxs(Yf,{value:S.floor,onChange:k=>b(_=>({..._,floor:parseInt(k.target.value)})),children:[a.jsx("option",{value:1,children:"1 этаж"}),a.jsx("option",{value:2,children:"2 этаж"})]})]}),a.jsxs(Io,{children:[a.jsx(Mo,{children:"Количество мест"}),a.jsx(Gf,{type:"number",value:S.seats,onChange:k=>b(_=>({..._,seats:parseInt(k.target.value)||0})),placeholder:"0"})]}),a.jsxs(SE,{children:[a.jsx(yE,{type:"submit",children:"Добавить"}),a.jsx(wE,{type:"button",onClick:()=>u(!1),children:"Отмена"})]})]})]})}),x.isVisible&&a.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"1rem",background:x.type==="success"?"#51cf66":"#ff6b6b",color:"white",borderRadius:"8px",zIndex:1e4},children:[a.jsx("div",{style:{fontWeight:"bold"},children:x.title}),a.jsx("div",{children:x.message})]})]})},jE=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,CE=g.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`,kE=g.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`,EE=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,zE=g.div`
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
`,PE=g.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`,RE=g.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`,_E=g.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`,TE=g.button`
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
`,$E=({zones:e,onZoneSelect:t,selectedZone:n,onContinue:r})=>a.jsx(Wt,{children:a.jsxs(jE,{children:[a.jsx(CE,{children:"Выберите зал для конструктора"}),a.jsx(kE,{children:"Выберите зал, для которого хотите создать столы и элементы"}),a.jsx(EE,{children:e.map(i=>a.jsxs(zE,{$selected:(n==null?void 0:n.id)===i.id,onClick:()=>t(i),children:[a.jsx(PE,{children:i.name}),a.jsxs(RE,{children:["Время работы: ",i.openTime," - ",i.closeTime]}),a.jsx(_E,{children:a.jsxs("div",{children:["Зал: ",i.name]})})]},i.id))}),n&&a.jsxs(TE,{onClick:r,children:['Открыть конструктор для зоны "',n.name,'"']})]})}),OE=g.div`
  color: #fff;
`,NE=g.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,sr=g.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,ar=g.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,si=g.button`
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
`,DE=g.div`
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
`,IE=g.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  color: #fff;
`,ME=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,cl=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,dl=g.label`
  color: #fff;
  font-weight: 500;
`,Xf=g.input`
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
`,LE=g.textarea`
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
`,AE=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,FE=g.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${e=>e.$isActive?"#28a745":"#dc3545"};
  color: white;
`,BE=()=>{const[e,t]=z.useState([]),[n,r]=z.useState(!0),[i,o]=z.useState(!1),[s,l]=z.useState(null),[u,c]=z.useState({name:"",description:"",sortOrder:0});z.useEffect(()=>{d()},[]);const d=async()=>{try{r(!0);const b=await he.getMenuTypes();t(b)}catch(b){console.error("Ошибка загрузки типов меню:",b)}finally{r(!1)}},p=()=>{l(null),c({name:"",description:"",sortOrder:0}),o(!0)},m=b=>{l(b),c({name:b.name,description:b.description||"",sortOrder:b.sortOrder}),o(!0)},x=async b=>{var v,f;if(window.confirm("Вы уверены, что хотите удалить этот тип меню?"))try{await he.deleteMenuType(b),await d()}catch(h){console.error("Ошибка удаления типа меню:",h);const w=((f=(v=h.response)==null?void 0:v.data)==null?void 0:f.error)||h.message||"Ошибка удаления типа меню";alert(`Ошибка: ${w}`)}},y=async b=>{b.preventDefault();try{const v=u.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),f={...u,slug:v};s?await he.updateMenuType(s.id,f):await he.createMenuType(f),o(!1),await d()}catch(v){console.error("Ошибка сохранения типа меню:",v)}},S=(b,v)=>{c(f=>({...f,[b]:v}))};return n?a.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):a.jsxs(OE,{children:[a.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Типы меню"}),a.jsx(si,{onClick:p,children:"+ Добавить тип меню"}),a.jsxs(NE,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(sr,{children:"Название"}),a.jsx(sr,{children:"Slug"}),a.jsx(sr,{children:"Описание"}),a.jsx(sr,{children:"Статус"}),a.jsx(sr,{children:"Порядок"}),a.jsx(sr,{children:"Действия"})]})}),a.jsx("tbody",{children:e.map(b=>a.jsxs("tr",{children:[a.jsx(ar,{children:b.name}),a.jsx(ar,{children:b.slug}),a.jsx(ar,{children:b.description||"-"}),a.jsx(ar,{children:a.jsx(FE,{$isActive:b.isActive,children:b.isActive?"Активен":"Неактивен"})}),a.jsx(ar,{children:b.sortOrder}),a.jsxs(ar,{children:[a.jsx(si,{$variant:"secondary",onClick:()=>m(b),children:"Редактировать"}),a.jsx(si,{$variant:"danger",onClick:()=>x(b.id),children:"Удалить"})]})]},b.id))})]}),a.jsx(DE,{$isOpen:i,children:a.jsxs(IE,{children:[a.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:s?"Редактировать тип меню":"Добавить тип меню"}),a.jsxs(ME,{onSubmit:y,children:[a.jsxs(cl,{children:[a.jsx(dl,{children:"Название"}),a.jsx(Xf,{type:"text",value:u.name,onChange:b=>S("name",b.target.value),placeholder:"Например: Основное меню",required:!0})]}),a.jsxs(cl,{children:[a.jsx(dl,{children:"Описание"}),a.jsx(LE,{value:u.description,onChange:b=>S("description",b.target.value),placeholder:"Описание типа меню"})]}),a.jsxs(cl,{children:[a.jsx(dl,{children:"Порядок сортировки"}),a.jsx(Xf,{type:"number",value:u.sortOrder,onChange:b=>S("sortOrder",parseInt(b.target.value)),min:"0"})]}),a.jsxs(AE,{children:[a.jsx(si,{type:"submit",children:s?"Сохранить":"Создать"}),a.jsx(si,{type:"button",$variant:"secondary",onClick:()=>o(!1),children:"Отмена"})]})]})]})})]})},UE=g.div`
  color: #fff;
`,WE=g.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,bn=g.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,jn=g.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,ai=g.button`
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
`,HE=g.div`
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
`,VE=g.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
`,GE=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Lo=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ao=g.label`
  color: #fff;
  font-weight: 500;
`,Kf=g.input`
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
`,YE=g.textarea`
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
`,XE=g.select`
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
`,KE=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,QE=g.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${e=>e.$isActive?"#28a745":"#dc3545"};
  color: white;
`,qE=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[i,o]=z.useState(!0),[s,l]=z.useState(!1),[u,c]=z.useState(null),[d,p]=z.useState({name:"",description:"",menuTypeId:0,sortOrder:0});z.useEffect(()=>{m()},[]);const m=async()=>{try{o(!0);const[f,h]=await Promise.all([he.getMenuCategories(),he.getMenuTypes()]);t(f),r(h)}catch(f){console.error("Ошибка загрузки данных:",f)}finally{o(!1)}},x=()=>{c(null),p({name:"",description:"",menuTypeId:0,sortOrder:0}),l(!0)},y=f=>{c(f),p({name:f.name,description:f.description||"",menuTypeId:f.menuTypeId,sortOrder:f.sortOrder}),l(!0)},S=async f=>{var h,w;if(window.confirm("Вы уверены, что хотите удалить эту категорию?"))try{await he.deleteMenuCategory(f),await m()}catch(C){console.error("Ошибка удаления категории:",C);const E=((w=(h=C.response)==null?void 0:h.data)==null?void 0:w.error)||C.message||"Ошибка удаления категории";alert(`Ошибка: ${E}`)}},b=async f=>{f.preventDefault();try{const h=d.name.toLowerCase().replace(/[^а-яёa-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),w={...d,slug:h};u?await he.updateMenuCategory(u.id,w):await he.createMenuCategory(w),l(!1),await m()}catch(h){console.error("Ошибка сохранения категории:",h)}},v=(f,h)=>{p(w=>({...w,[f]:h}))};return i?a.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):a.jsxs(UE,{children:[a.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Категории меню"}),a.jsx(ai,{onClick:x,children:"+ Добавить категорию"}),a.jsxs(WE,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(bn,{children:"Название"}),a.jsx(bn,{children:"Slug"}),a.jsx(bn,{children:"Тип меню"}),a.jsx(bn,{children:"Описание"}),a.jsx(bn,{children:"Статус"}),a.jsx(bn,{children:"Порядок"}),a.jsx(bn,{children:"Действия"})]})}),a.jsx("tbody",{children:e.map(f=>{const h=n.find(w=>w.id===f.menuTypeId);return a.jsxs("tr",{children:[a.jsx(jn,{children:f.name}),a.jsx(jn,{children:f.slug}),a.jsx(jn,{children:(h==null?void 0:h.name)||"Неизвестно"}),a.jsx(jn,{children:f.description||"-"}),a.jsx(jn,{children:a.jsx(QE,{$isActive:f.isActive,children:f.isActive?"Активна":"Неактивна"})}),a.jsx(jn,{children:f.sortOrder}),a.jsxs(jn,{children:[a.jsx(ai,{$variant:"secondary",onClick:()=>y(f),children:"Редактировать"}),a.jsx(ai,{$variant:"danger",onClick:()=>S(f.id),children:"Удалить"})]})]},f.id)})})]}),a.jsx(HE,{$isOpen:s,children:a.jsxs(VE,{children:[a.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:u?"Редактировать категорию":"Добавить категорию"}),a.jsxs(GE,{onSubmit:b,children:[a.jsxs(Lo,{children:[a.jsx(Ao,{children:"Тип меню"}),a.jsxs(XE,{value:d.menuTypeId,onChange:f=>v("menuTypeId",parseInt(f.target.value)),required:!0,children:[a.jsx("option",{value:0,children:"Выберите тип меню"}),n.map(f=>a.jsx("option",{value:f.id,children:f.name},f.id))]})]}),a.jsxs(Lo,{children:[a.jsx(Ao,{children:"Название"}),a.jsx(Kf,{type:"text",value:d.name,onChange:f=>v("name",f.target.value),placeholder:"Название категории",required:!0})]}),a.jsxs(Lo,{children:[a.jsx(Ao,{children:"Описание"}),a.jsx(YE,{value:d.description,onChange:f=>v("description",f.target.value),placeholder:"Описание категории"})]}),a.jsxs(Lo,{children:[a.jsx(Ao,{children:"Порядок сортировки"}),a.jsx(Kf,{type:"number",value:d.sortOrder,onChange:f=>v("sortOrder",parseInt(f.target.value)),min:"0"})]}),a.jsxs(KE,{children:[a.jsx(ai,{type:"submit",children:u?"Сохранить":"Создать"}),a.jsx(ai,{type:"button",$variant:"secondary",onClick:()=>l(!1),children:"Отмена"})]})]})]})})]})},ZE=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,JE=g.div`
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
`,e2=g.div`
  font-size: 3rem;
  color: #666;
  margin-bottom: 1rem;
`,fl=g.p`
  color: #ccc;
  margin: 0;
  font-size: 1rem;
`,t2=g.input`
  display: none;
`,n2=g.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-top: 1rem;
`,r2=g.div`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`,i2=g.div`
  height: 100%;
  background: #ffd700;
  width: ${e=>e.$progress}%;
  transition: width 0.3s ease;
`,o2=g.div`
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
`,s2=g.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,a2=g.div`
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,l2=g.button`
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
`,u2=({onImageUpload:e,onImageRemove:t,currentImageUrl:n,disabled:r=!1})=>{const[i,o]=z.useState(!1),[s,l]=z.useState(!1),[u,c]=z.useState(0),[d,p]=z.useState(null),[m,x]=z.useState(!1),[y,S]=z.useState(n||null),[b,v]=z.useState(0),[f]=z.useState(3),h=z.useRef(null);z.useEffect(()=>{},[]);const w=async O=>{if(!O.type.startsWith("image/")){p("Пожалуйста, выберите изображение");return}if(O.size>10*1024*1024){p("Размер файла не должен превышать 10MB");return}if(!["image/jpeg","image/jpg","image/png","image/webp"].includes(O.type)){p("Поддерживаются только JPG, PNG и WebP форматы");return}p(null),l(!0),c(0),v(0);try{const L=new FileReader;L.onload=Z=>{var ge;S((ge=Z.target)==null?void 0:ge.result)},L.readAsDataURL(O);const X=setInterval(()=>{c(Z=>Z>=90?(clearInterval(X),90):Z+10)},200),Me=await Fg(O,f,Z=>{v(Z)});clearInterval(X),c(100),x(!0),e(Me),setTimeout(()=>{x(!1),c(0),l(!1)},2e3)}catch(L){console.error("❌ Ошибка в ImageUpload:",L);let X="Ошибка загрузки изображения";L.message&&(L.message.includes("Не настроены переменные окружения")?X="Ошибка конфигурации Cloudinary. Обратитесь к администратору.":L.message.includes("Ошибка Cloudinary")?X="Ошибка сервера Cloudinary. Попробуйте позже.":L.message.includes("Не получен URL")?X="Ошибка получения URL изображения. Попробуйте еще раз.":L.message.includes("Проблема с сетевым подключением")?X="Проблема с интернет-соединением. Проверьте подключение и попробуйте снова.":L.message.includes("Превышено время ожидания")?X="Загрузка занимает слишком много времени. Попробуйте еще раз.":X=L.message),p(X),S(null),h.current&&(h.current.value="")}finally{l(!1),c(0),v(0)}},C=O=>{O.preventDefault(),r||o(!0)},E=O=>{O.preventDefault(),o(!1)},j=O=>{if(O.preventDefault(),o(!1),r)return;const I=O.dataTransfer.files;I.length>0&&w(I[0])},R=()=>{!r&&h.current&&h.current.click()},k=O=>{var L;const I=(L=O.target.files)==null?void 0:L[0];I&&w(I)},_=()=>{S(null),p(null),x(!1),h.current&&(h.current.value=""),t&&t()};return a.jsxs(ZE,{children:[a.jsx(JE,{$isDragOver:i,$hasImage:!!y,onDragOver:C,onDragLeave:E,onDrop:j,onClick:R,children:y?a.jsxs(a.Fragment,{children:[a.jsx(n2,{src:y,alt:"Предварительный просмотр"}),a.jsx(fl,{style:{marginTop:"1rem"},children:"Нажмите для замены изображения"})]}):a.jsxs(a.Fragment,{children:[a.jsx(e2,{children:"📷"}),a.jsx(fl,{children:s?"Загрузка...":"Перетащите изображение сюда или нажмите для выбора"}),a.jsx(fl,{style:{fontSize:"0.8rem",color:"#666"},children:"Поддерживаются: JPG, PNG, WebP (до 10MB)"})]})}),a.jsx(t2,{ref:h,type:"file",accept:"image/*",onChange:k,disabled:r}),s&&a.jsxs(r2,{$progress:u,children:[a.jsx(i2,{$progress:u}),b>0&&a.jsxs(o2,{children:["Попытка ",b,"/",f]})]}),d&&a.jsx(s2,{children:d}),m&&a.jsx(a2,{children:"Изображение успешно загружено!"}),y&&t&&a.jsx(l2,{type:"button",onClick:_,disabled:s,children:"Удалить изображение"})]})},c2=g.div`
  color: #fff;
`,d2=g.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`,Cn=g.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`,kn=g.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`,li=g.button`
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
`,f2=g.div`
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
`,p2=g.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
`,h2=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,dt=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ft=g.label`
  color: #fff;
  font-weight: 500;
`,En=g.input`
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
`,Qf=g.select`
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
`,m2=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,g2=g.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`,v2=()=>{const[e,t]=z.useState([]),[n,r]=z.useState([]),[i,o]=z.useState([]),[s,l]=z.useState(!0),[u,c]=z.useState(!1),[d,p]=z.useState(null),[m,x]=z.useState({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0});z.useEffect(()=>{y()},[]);const y=async()=>{try{l(!0);const[k,_,O]=await Promise.all([he.getMenuItems(),he.getMenuTypes(),he.getMenuCategories()]);t(k),r(_),o(O)}catch(k){console.error("Ошибка загрузки данных:",k)}finally{l(!1)}},S=()=>{p(null),x({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0}),c(!0)},b=async k=>{var _,O;if(k.preventDefault(),console.log("🚀 Отправляем форму:",m),!m.name.trim()){alert("Пожалуйста, введите название блюда");return}if(m.menuTypeId===0){alert("Пожалуйста, выберите тип меню");return}if(m.categoryId===0){alert("Пожалуйста, выберите категорию");return}if(m.price<=0){alert("Пожалуйста, введите корректную цену");return}try{d?(console.log("📝 Обновляем блюдо:",d.id),await he.updateMenuItem(d.id,m)):(console.log("➕ Создаем новое блюдо"),await he.createMenuItem(m)),console.log("✅ Блюдо сохранено успешно"),R(),await y()}catch(I){console.error("❌ Ошибка сохранения блюда:",I);const L=((O=(_=I.response)==null?void 0:_.data)==null?void 0:O.error)||I.message||"Ошибка сохранения блюда";alert(`Ошибка: ${L}`)}},v=(k,_)=>{x(O=>({...O,[k]:_}))},f=k=>{x(_=>({..._,imageUrl:k}))},h=()=>{x(k=>({...k,imageUrl:""}))},w=async k=>{var _,O;if(window.confirm("Вы уверены, что хотите удалить это блюдо?"))try{await he.deleteMenuItem(k),await y(),console.log("✅ Блюдо удалено успешно")}catch(I){console.error("❌ Ошибка удаления блюда:",I);const L=((O=(_=I.response)==null?void 0:_.data)==null?void 0:O.error)||I.message||"Ошибка удаления блюда";alert(`Ошибка: ${L}`)}},C=k=>{p(k);const _=i.find(O=>O.id===k.categoryId);x({name:k.name,description:k.description||"",price:k.price,currency:k.currency||"₽",imageUrl:k.imageUrl||"",menuTypeId:(_==null?void 0:_.menuTypeId)||0,categoryId:k.categoryId,allergens:k.allergens||[],weight:k.weight||"",calories:k.calories||0,preparation:k.preparation||"",isPopular:k.isPopular,isActive:k.isActive,sortOrder:k.sortOrder}),c(!0)},E=k=>i.filter(_=>_.menuTypeId===k),j=k=>{x(_=>({..._,menuTypeId:k,categoryId:0}))},R=()=>{c(!1),p(null),x({name:"",description:"",price:0,currency:"₽",imageUrl:"",menuTypeId:0,categoryId:0,allergens:[],weight:"",calories:0,preparation:"",isPopular:!1,isActive:!0,sortOrder:0})};return s?a.jsx("div",{style:{color:"#ccc"},children:"Загрузка..."}):a.jsxs(c2,{children:[a.jsx("h3",{style:{color:"#fff",marginBottom:"1rem"},children:"Блюда"}),a.jsx(li,{onClick:S,children:"+ Добавить блюдо"}),a.jsxs(d2,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(Cn,{children:"Изображение"}),a.jsx(Cn,{children:"Название"}),a.jsx(Cn,{children:"Тип меню"}),a.jsx(Cn,{children:"Категория"}),a.jsx(Cn,{children:"Цена"}),a.jsx(Cn,{children:"Статус"}),a.jsx(Cn,{children:"Действия"})]})}),a.jsx("tbody",{children:e.map(k=>{const _=i.find(I=>I.id===k.categoryId),O=n.find(I=>I.id===(_==null?void 0:_.menuTypeId));return a.jsxs("tr",{children:[a.jsx(kn,{children:k.imageUrl?a.jsx(g2,{src:k.imageUrl,alt:k.name}):a.jsx("div",{style:{width:60,height:60,background:"#333",borderRadius:4}})}),a.jsx(kn,{children:k.name}),a.jsx(kn,{children:(O==null?void 0:O.name)||"Неизвестно"}),a.jsx(kn,{children:(_==null?void 0:_.name)||"Неизвестно"}),a.jsxs(kn,{children:[k.price," ₽"]}),a.jsx(kn,{children:a.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.8rem",background:k.isActive?"#28a745":"#dc3545",color:"white"},children:k.isActive?"Активно":"Неактивно"})}),a.jsxs(kn,{children:[a.jsx(li,{$variant:"secondary",onClick:()=>C(k),children:"Редактировать"}),a.jsx(li,{$variant:"danger",onClick:()=>w(k.id),children:"Удалить"})]})]},k.id)})})]}),a.jsx(f2,{$isOpen:u,children:a.jsxs(p2,{children:[a.jsx("h3",{style:{marginBottom:"1rem",color:"#ffd700"},children:d?"Редактировать блюдо":"Добавить блюдо"}),a.jsxs(h2,{onSubmit:b,children:[a.jsxs(dt,{children:[a.jsx(ft,{children:"Тип меню"}),a.jsxs(Qf,{value:m.menuTypeId,onChange:k=>j(parseInt(k.target.value)),required:!0,children:[a.jsx("option",{value:0,children:"Выберите тип меню"}),n.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Категория"}),a.jsxs(Qf,{value:m.categoryId,onChange:k=>v("categoryId",parseInt(k.target.value)),required:!0,disabled:m.menuTypeId===0,children:[a.jsx("option",{value:0,children:m.menuTypeId===0?"Сначала выберите тип меню":"Выберите категорию"}),E(m.menuTypeId).map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Название"}),a.jsx(En,{type:"text",value:m.name,onChange:k=>v("name",k.target.value),placeholder:"Название блюда",required:!0})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Описание"}),a.jsx(En,{type:"text",value:m.description,onChange:k=>v("description",k.target.value),placeholder:"Описание блюда"})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Цена (₽)"}),a.jsx(En,{type:"number",value:m.price,onChange:k=>v("price",parseFloat(k.target.value)),min:"0",step:"0.01",required:!0})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Вес/Объем"}),a.jsx(En,{type:"text",value:m.weight,onChange:k=>v("weight",k.target.value),placeholder:"Например: 300г, 0.5л"})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Калории"}),a.jsx(En,{type:"number",value:m.calories,onChange:k=>v("calories",parseInt(k.target.value)),min:"0"})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Время приготовления"}),a.jsx(En,{type:"text",value:m.preparation,onChange:k=>v("preparation",k.target.value),placeholder:"Например: 15 мин"})]}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Изображение"}),a.jsx(u2,{onImageUpload:f,onImageRemove:h,currentImageUrl:m.imageUrl})]}),a.jsx(dt,{children:a.jsxs(ft,{children:[a.jsx("input",{type:"checkbox",checked:m.isPopular,onChange:k=>v("isPopular",k.target.checked)}),"Популярное блюдо"]})}),a.jsxs(dt,{children:[a.jsx(ft,{children:"Порядок сортировки"}),a.jsx(En,{type:"number",value:m.sortOrder,onChange:k=>v("sortOrder",parseInt(k.target.value)),min:"0"})]}),a.jsxs(m2,{children:[a.jsx(li,{type:"submit",children:d?"Сохранить":"Создать"}),a.jsx(li,{type:"button",$variant:"secondary",onClick:R,children:"Отмена"})]})]})]})})]})},x2=g.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #262935;
`,y2=g.main`
  flex: 1;
  padding: 2rem 0;
`,w2=g.div`
  width: 250px;
  background: #1a1a1a;
  padding: 2rem 0;
  border-right: 1px solid #333;
`,S2=g.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${e=>e.$active?"#ffd700":"#fff"};
  background: ${e=>e.$active?"#333":"transparent"};
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    color: #ffd700;
  }
`,b2=g.div`
  flex: 1;
  padding: 2rem;
`,j2=g.div`
  display: flex;
  min-height: calc(100vh - 80px);
`,C2=g.h1`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,k2=[{key:"create-zone",label:"Создать зону"},{key:"zone-constructor",label:"Конструктор зоны"},{key:"manage-zones",label:"Управление зонами"},{key:"menu",label:"Меню"},{key:"bookings",label:"Бронирования"},{key:"settings",label:"Настройки"}],E2=()=>{const[e,t]=z.useState("create-zone"),[n,r]=z.useState([]),[i,o]=z.useState(null),[s,l]=z.useState(!1);Re.useEffect(()=>{(async()=>{try{const m=await Lg();r(m)}catch(m){console.error("Ошибка загрузки зон:",m)}})()},[]);const u=p=>{o(p)},c=()=>{l(!0)},d=()=>{switch(e){case"create-zone":return a.jsx(Wf,{});case"zone-constructor":return s?a.jsx(bE,{zoneId:(i==null?void 0:i.id)||0,zoneName:i==null?void 0:i.name}):a.jsx($E,{zones:n,onZoneSelect:u,selectedZone:i,onContinue:c});case"manage-zones":return a.jsx("div",{children:"Управление зонами (в разработке)"});case"menu":return a.jsx(z2,{});case"bookings":return a.jsx("div",{children:"Бронирования (в разработке)"});case"settings":return a.jsx("div",{children:"Настройки (в разработке)"});default:return a.jsx(Wf,{})}};return a.jsx(x2,{children:a.jsx(y2,{children:a.jsxs(j2,{children:[a.jsx(w2,{children:k2.map(p=>a.jsx(S2,{$active:e===p.key,onClick:()=>t(p.key),children:p.label},p.key))}),a.jsxs(b2,{children:[a.jsx(C2,{children:"Панель администратора"}),d()]})]})})})},z2=()=>{const[e,t]=z.useState("types");return a.jsxs("div",{children:[a.jsx("h2",{style:{color:"#ffd700",marginBottom:"1rem"},children:"Управление меню"}),a.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem"},children:[a.jsx("button",{onClick:()=>t("types"),style:{padding:"0.5rem 1rem",background:e==="types"?"#ffd700":"#333",color:e==="types"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Типы меню"}),a.jsx("button",{onClick:()=>t("categories"),style:{padding:"0.5rem 1rem",background:e==="categories"?"#ffd700":"#333",color:e==="categories"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Категории"}),a.jsx("button",{onClick:()=>t("items"),style:{padding:"0.5rem 1rem",background:e==="items"?"#ffd700":"#333",color:e==="items"?"#000":"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Блюда"})]}),e==="types"&&a.jsx(BE,{}),e==="categories"&&a.jsx(qE,{}),e==="items"&&a.jsx(v2,{})]})};function P2(){return a.jsx(py,{children:a.jsx(I1,{children:a.jsxs(sy,{children:[a.jsx(Ee,{path:"/",element:a.jsx(Gw,{})}),a.jsx(Ee,{path:"/3d-tour",element:a.jsx(Qk,{})}),a.jsx(Ee,{path:"/billiards",element:a.jsx(nS,{})}),a.jsx(Ee,{path:"/karaoke",element:a.jsx(aS,{})}),a.jsx(Ee,{path:"/disco",element:a.jsx(fS,{})}),a.jsx(Ee,{path:"/playstation",element:a.jsx(vS,{})}),a.jsx(Ee,{path:"/lounge",element:a.jsx(bS,{})}),a.jsx(Ee,{path:"/games",element:a.jsx(zS,{})}),a.jsx(Ee,{path:"/booking",element:a.jsx(vk,{})}),a.jsx(Ee,{path:"/menu",element:a.jsx(Nk,{})}),a.jsx(Ee,{path:"/events",element:a.jsx(Ak,{})}),a.jsx(Ee,{path:"/cards",element:a.jsx(Hk,{})}),a.jsx(Ee,{path:"/contact",element:a.jsx(qw,{})}),a.jsx(Ee,{path:"/security",element:a.jsx(oE,{})}),a.jsx(Ee,{path:"/admin",element:a.jsx(E2,{})})]})})})}const R2=x1`
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
`;pl.createRoot(document.getElementById("root")).render(a.jsxs(Re.StrictMode,{children:[a.jsx(R2,{}),a.jsx(P2,{})]}));

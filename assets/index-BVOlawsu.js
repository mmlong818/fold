(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zy={exports:{}},Ef={},Qy={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Symbol.for("react.element"),m2=Symbol.for("react.portal"),g2=Symbol.for("react.fragment"),_2=Symbol.for("react.strict_mode"),v2=Symbol.for("react.profiler"),x2=Symbol.for("react.provider"),y2=Symbol.for("react.context"),S2=Symbol.for("react.forward_ref"),M2=Symbol.for("react.suspense"),w2=Symbol.for("react.memo"),E2=Symbol.for("react.lazy"),S_=Symbol.iterator;function T2(t){return t===null||typeof t!="object"?null:(t=S_&&t[S_]||t["@@iterator"],typeof t=="function"?t:null)}var Jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eS=Object.assign,tS={};function ol(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||Jy}ol.prototype.isReactComponent={};ol.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ol.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nS(){}nS.prototype=ol.prototype;function z0(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||Jy}var F0=z0.prototype=new nS;F0.constructor=z0;eS(F0,ol.prototype);F0.isPureReactComponent=!0;var M_=Array.isArray,iS=Object.prototype.hasOwnProperty,k0={current:null},rS={key:!0,ref:!0,__self:!0,__source:!0};function sS(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iS.call(e,i)&&!rS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lc,type:t,key:s,ref:o,props:r,_owner:k0.current}}function b2(t,e){return{$$typeof:Lc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function B0(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lc}function A2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var w_=/\/+/g;function Zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A2(""+t.key):e.toString(36)}function fh(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lc:case m2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Zf(o,0):i,M_(r)?(n="",t!=null&&(n=t.replace(w_,"$&/")+"/"),fh(r,e,n,"",function(c){return c})):r!=null&&(B0(r)&&(r=b2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(w_,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",M_(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Zf(s,a);o+=fh(s,e,n,l,r)}else if(l=T2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Zf(s,a++),o+=fh(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jc(t,e,n){if(t==null)return t;var i=[],r=0;return fh(t,i,"","",function(s){return e.call(n,s,r++)}),i}function C2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fn={current:null},dh={transition:null},R2={ReactCurrentDispatcher:Fn,ReactCurrentBatchConfig:dh,ReactCurrentOwner:k0};function oS(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:jc,forEach:function(t,e,n){jc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jc(t,function(){e++}),e},toArray:function(t){return jc(t,function(e){return e})||[]},only:function(t){if(!B0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=ol;tt.Fragment=g2;tt.Profiler=v2;tt.PureComponent=z0;tt.StrictMode=_2;tt.Suspense=M2;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;tt.act=oS;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=eS({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=k0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iS.call(e,l)&&!rS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Lc,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:y2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x2,_context:t},t.Consumer=t};tt.createElement=sS;tt.createFactory=function(t){var e=sS.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:S2,render:t}};tt.isValidElement=B0;tt.lazy=function(t){return{$$typeof:E2,_payload:{_status:-1,_result:t},_init:C2}};tt.memo=function(t,e){return{$$typeof:w2,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=dh.transition;dh.transition={};try{t()}finally{dh.transition=e}};tt.unstable_act=oS;tt.useCallback=function(t,e){return Fn.current.useCallback(t,e)};tt.useContext=function(t){return Fn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return Fn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return Fn.current.useEffect(t,e)};tt.useId=function(){return Fn.current.useId()};tt.useImperativeHandle=function(t,e,n){return Fn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return Fn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return Fn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return Fn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return Fn.current.useReducer(t,e,n)};tt.useRef=function(t){return Fn.current.useRef(t)};tt.useState=function(t){return Fn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return Fn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return Fn.current.useTransition()};tt.version="18.3.1";Qy.exports=tt;var Ce=Qy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P2=Ce,D2=Symbol.for("react.element"),L2=Symbol.for("react.fragment"),N2=Object.prototype.hasOwnProperty,I2=P2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U2={key:!0,ref:!0,__self:!0,__source:!0};function aS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)N2.call(e,i)&&!U2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:D2,type:t,key:s,ref:o,props:r,_owner:I2.current}}Ef.Fragment=L2;Ef.jsx=aS;Ef.jsxs=aS;Zy.exports=Ef;var U=Zy.exports,lS={exports:{}},ai={},cS={exports:{}},uS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var J=O.length;O.push($);e:for(;0<J;){var ce=J-1>>>1,pe=O[ce];if(0<r(pe,$))O[ce]=$,O[J]=pe,J=ce;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var $=O[0],J=O.pop();if(J!==$){O[0]=J;e:for(var ce=0,pe=O.length,We=pe>>>1;ce<We;){var ee=2*(ce+1)-1,re=O[ee],se=ee+1,le=O[se];if(0>r(re,J))se<pe&&0>r(le,re)?(O[ce]=le,O[se]=J,ce=se):(O[ce]=re,O[ee]=J,ce=ee);else if(se<pe&&0>r(le,J))O[ce]=le,O[se]=J,ce=se;else break e}}return $}function r(O,$){var J=O.sortIndex-$.sortIndex;return J!==0?J:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,u=null,d=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=O)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function y(O){if(v=!1,_(O),!m)if(n(l)!==null)m=!0,k(P);else{var $=n(c);$!==null&&X(y,$.startTime-O)}}function P(O,$){m=!1,v&&(v=!1,f(R),R=-1),p=!0;var J=d;try{for(_($),u=n(l);u!==null&&(!(u.expirationTime>$)||O&&!C());){var ce=u.callback;if(typeof ce=="function"){u.callback=null,d=u.priorityLevel;var pe=ce(u.expirationTime<=$);$=t.unstable_now(),typeof pe=="function"?u.callback=pe:u===n(l)&&i(l),_($)}else i(l);u=n(l)}if(u!==null)var We=!0;else{var ee=n(c);ee!==null&&X(y,ee.startTime-$),We=!1}return We}finally{u=null,d=J,p=!1}}var D=!1,A=null,R=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function z(){if(A!==null){var O=t.unstable_now();S=O;var $=!0;try{$=A(!0,O)}finally{$?F():(D=!1,A=null)}}else D=!1}var F;if(typeof x=="function")F=function(){x(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Q=j.port2;j.port1.onmessage=z,F=function(){Q.postMessage(null)}}else F=function(){g(z,0)};function k(O){A=O,D||(D=!0,F())}function X(O,$){R=g(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,k(P))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var J=d;d=$;try{return O()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=d;d=O;try{return $()}finally{d=J}},t.unstable_scheduleCallback=function(O,$,J){var ce=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,O){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,O={id:h++,callback:$,priorityLevel:O,startTime:J,expirationTime:pe,sortIndex:-1},J>ce?(O.sortIndex=J,e(c,O),n(l)===null&&O===n(c)&&(v?(f(R),R=-1):v=!0,X(y,J-ce))):(O.sortIndex=pe,e(l,O),m||p||(m=!0,k(P))),O},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(O){var $=d;return function(){var J=d;d=$;try{return O.apply(this,arguments)}finally{d=J}}}})(uS);cS.exports=uS;var O2=cS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z2=Ce,si=O2;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hS=new Set,cc={};function Fo(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(cc[t]=e,t=0;t<e.length;t++)hS.add(e[t])}var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ip=Object.prototype.hasOwnProperty,F2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E_={},T_={};function k2(t){return Ip.call(T_,t)?!0:Ip.call(E_,t)?!1:F2.test(t)?T_[t]=!0:(E_[t]=!0,!1)}function B2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V2(t,e,n,i){if(e===null||typeof e>"u"||B2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new kn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new kn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new kn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new kn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new kn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new kn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new kn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new kn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new kn(t,5,!1,t.toLowerCase(),null,!1,!1)});var V0=/[\-:]([a-z])/g;function H0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(V0,H0);gn[e]=new kn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(V0,H0);gn[e]=new kn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(V0,H0);gn[e]=new kn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new kn(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new kn(t,1,!1,t.toLowerCase(),null,!0,!0)});function G0(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V2(e,n,r,i)&&(n=null),i||r===null?k2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hr=z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xc=Symbol.for("react.element"),_a=Symbol.for("react.portal"),va=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),dS=Symbol.for("react.context"),j0=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),zp=Symbol.for("react.suspense_list"),X0=Symbol.for("react.memo"),hs=Symbol.for("react.lazy"),pS=Symbol.for("react.offscreen"),b_=Symbol.iterator;function ml(t){return t===null||typeof t!="object"?null:(t=b_&&t[b_]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,Qf;function Ol(t){if(Qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qf=e&&e[1]||""}return`
`+Qf+t}var Jf=!1;function ed(t,e){if(!t||Jf)return"";Jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ol(t):""}function H2(t){switch(t.tag){case 5:return Ol(t.type);case 16:return Ol("Lazy");case 13:return Ol("Suspense");case 19:return Ol("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function Fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case va:return"Fragment";case _a:return"Portal";case Up:return"Profiler";case W0:return"StrictMode";case Op:return"Suspense";case zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dS:return(t.displayName||"Context")+".Consumer";case fS:return(t._context.displayName||"Context")+".Provider";case j0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X0:return e=t.displayName||null,e!==null?e:Fp(t.type)||"Memo";case hs:e=t._payload,t=t._init;try{return Fp(t(e))}catch{}}return null}function G2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fp(e);case 8:return e===W0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W2(t){var e=mS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $c(t){t._valueTracker||(t._valueTracker=W2(t))}function gS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kp(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function A_(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Is(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _S(t,e){e=e.checked,e!=null&&G0(t,"checked",e,!1)}function Bp(t,e){_S(t,e);var n=Is(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vp(t,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function C_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vp(t,e,n){(e!=="number"||Lh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zl=Array.isArray;function Na(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Is(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(zl(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Is(n)}}function vS(t,e){var n=Is(e.value),i=Is(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function P_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yc,yS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yc=Yc||document.createElement("div"),Yc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uc(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $l={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j2=["Webkit","ms","Moz","O"];Object.keys($l).forEach(function(t){j2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$l[e]=$l[t]})});function SS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$l.hasOwnProperty(t)&&$l[t]?(""+e).trim():e+"px"}function MS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=SS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var X2=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wp(t,e){if(e){if(X2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function $0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $p=null,Ia=null,Ua=null;function D_(t){if(t=Uc(t)){if(typeof $p!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Rf(e),$p(t.stateNode,t.type,e))}}function wS(t){Ia?Ua?Ua.push(t):Ua=[t]:Ia=t}function ES(){if(Ia){var t=Ia,e=Ua;if(Ua=Ia=null,D_(t),e)for(t=0;t<e.length;t++)D_(e[t])}}function TS(t,e){return t(e)}function bS(){}var td=!1;function AS(t,e,n){if(td)return t(e,n);td=!0;try{return TS(t,e,n)}finally{td=!1,(Ia!==null||Ua!==null)&&(bS(),ES())}}function hc(t,e){var n=t.stateNode;if(n===null)return null;var i=Rf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Yp=!1;if(Ur)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){Yp=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{Yp=!1}function $2(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Yl=!1,Nh=null,Ih=!1,qp=null,Y2={onError:function(t){Yl=!0,Nh=t}};function q2(t,e,n,i,r,s,o,a,l){Yl=!1,Nh=null,$2.apply(Y2,arguments)}function K2(t,e,n,i,r,s,o,a,l){if(q2.apply(this,arguments),Yl){if(Yl){var c=Nh;Yl=!1,Nh=null}else throw Error(ae(198));Ih||(Ih=!0,qp=c)}}function ko(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L_(t){if(ko(t)!==t)throw Error(ae(188))}function Z2(t){var e=t.alternate;if(!e){if(e=ko(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return L_(r),t;if(s===i)return L_(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function RS(t){return t=Z2(t),t!==null?PS(t):null}function PS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=PS(t);if(e!==null)return e;t=t.sibling}return null}var DS=si.unstable_scheduleCallback,N_=si.unstable_cancelCallback,Q2=si.unstable_shouldYield,J2=si.unstable_requestPaint,Ht=si.unstable_now,eT=si.unstable_getCurrentPriorityLevel,Y0=si.unstable_ImmediatePriority,LS=si.unstable_UserBlockingPriority,Uh=si.unstable_NormalPriority,tT=si.unstable_LowPriority,NS=si.unstable_IdlePriority,Tf=null,sr=null;function nT(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Tf,t,void 0,(t.current.flags&128)===128)}catch{}}var Bi=Math.clz32?Math.clz32:sT,iT=Math.log,rT=Math.LN2;function sT(t){return t>>>=0,t===0?32:31-(iT(t)/rT|0)|0}var qc=64,Kc=4194304;function Fl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oh(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fl(a):(s&=o,s!==0&&(i=Fl(s)))}else o=n&~r,o!==0?i=Fl(o):s!==0&&(i=Fl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bi(e),r=1<<n,i|=t[n],e&=~r;return i}function oT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=oT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function IS(){var t=qc;return qc<<=1,!(qc&4194240)&&(qc=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bi(e),t[e]=n}function lT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function q0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function US(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var OS,K0,zS,FS,kS,Zp=!1,Zc=[],Ts=null,bs=null,As=null,fc=new Map,dc=new Map,gs=[],cT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function I_(t,e){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":fc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(e.pointerId)}}function _l(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uc(e),e!==null&&K0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uT(t,e,n,i,r){switch(e){case"focusin":return Ts=_l(Ts,t,e,n,i,r),!0;case"dragenter":return bs=_l(bs,t,e,n,i,r),!0;case"mouseover":return As=_l(As,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fc.set(s,_l(fc.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,dc.set(s,_l(dc.get(s)||null,t,e,n,i,r)),!0}return!1}function BS(t){var e=co(t.target);if(e!==null){var n=ko(e);if(n!==null){if(e=n.tag,e===13){if(e=CS(n),e!==null){t.blockedOn=e,kS(t.priority,function(){zS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ph(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xp=i,n.target.dispatchEvent(i),Xp=null}else return e=Uc(n),e!==null&&K0(e),t.blockedOn=n,!1;e.shift()}return!0}function U_(t,e,n){ph(t)&&n.delete(e)}function hT(){Zp=!1,Ts!==null&&ph(Ts)&&(Ts=null),bs!==null&&ph(bs)&&(bs=null),As!==null&&ph(As)&&(As=null),fc.forEach(U_),dc.forEach(U_)}function vl(t,e){t.blockedOn===e&&(t.blockedOn=null,Zp||(Zp=!0,si.unstable_scheduleCallback(si.unstable_NormalPriority,hT)))}function pc(t){function e(r){return vl(r,t)}if(0<Zc.length){vl(Zc[0],t);for(var n=1;n<Zc.length;n++){var i=Zc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ts!==null&&vl(Ts,t),bs!==null&&vl(bs,t),As!==null&&vl(As,t),fc.forEach(e),dc.forEach(e),n=0;n<gs.length;n++)i=gs[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<gs.length&&(n=gs[0],n.blockedOn===null);)BS(n),n.blockedOn===null&&gs.shift()}var Oa=Hr.ReactCurrentBatchConfig,zh=!0;function fT(t,e,n,i){var r=xt,s=Oa.transition;Oa.transition=null;try{xt=1,Z0(t,e,n,i)}finally{xt=r,Oa.transition=s}}function dT(t,e,n,i){var r=xt,s=Oa.transition;Oa.transition=null;try{xt=4,Z0(t,e,n,i)}finally{xt=r,Oa.transition=s}}function Z0(t,e,n,i){if(zh){var r=Qp(t,e,n,i);if(r===null)fd(t,e,i,Fh,n),I_(t,i);else if(uT(r,t,e,n,i))i.stopPropagation();else if(I_(t,i),e&4&&-1<cT.indexOf(t)){for(;r!==null;){var s=Uc(r);if(s!==null&&OS(s),s=Qp(t,e,n,i),s===null&&fd(t,e,i,Fh,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fd(t,e,i,null,n)}}var Fh=null;function Qp(t,e,n,i){if(Fh=null,t=$0(i),t=co(t),t!==null)if(e=ko(t),e===null)t=null;else if(n=e.tag,n===13){if(t=CS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fh=t,null}function VS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eT()){case Y0:return 1;case LS:return 4;case Uh:case tT:return 16;case NS:return 536870912;default:return 16}default:return 16}}var xs=null,Q0=null,mh=null;function HS(){if(mh)return mh;var t,e=Q0,n=e.length,i,r="value"in xs?xs.value:xs.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return mh=r.slice(t,1<i?1-i:void 0)}function gh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qc(){return!0}function O_(){return!1}function li(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qc:O_,this.isPropagationStopped=O_,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qc)},persist:function(){},isPersistent:Qc}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},J0=li(al),Ic=Ft({},al,{view:0,detail:0}),pT=li(Ic),id,rd,xl,bf=Ft({},Ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xl&&(xl&&t.type==="mousemove"?(id=t.screenX-xl.screenX,rd=t.screenY-xl.screenY):rd=id=0,xl=t),id)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),z_=li(bf),mT=Ft({},bf,{dataTransfer:0}),gT=li(mT),_T=Ft({},Ic,{relatedTarget:0}),sd=li(_T),vT=Ft({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),xT=li(vT),yT=Ft({},al,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ST=li(yT),MT=Ft({},al,{data:0}),F_=li(MT),wT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ET={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TT[t])?!!e[t]:!1}function eg(){return bT}var AT=Ft({},Ic,{key:function(t){if(t.key){var e=wT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ET[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eg,charCode:function(t){return t.type==="keypress"?gh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CT=li(AT),RT=Ft({},bf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k_=li(RT),PT=Ft({},Ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eg}),DT=li(PT),LT=Ft({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),NT=li(LT),IT=Ft({},bf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UT=li(IT),OT=[9,13,27,32],tg=Ur&&"CompositionEvent"in window,ql=null;Ur&&"documentMode"in document&&(ql=document.documentMode);var zT=Ur&&"TextEvent"in window&&!ql,GS=Ur&&(!tg||ql&&8<ql&&11>=ql),B_=" ",V_=!1;function WS(t,e){switch(t){case"keyup":return OT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xa=!1;function FT(t,e){switch(t){case"compositionend":return jS(e);case"keypress":return e.which!==32?null:(V_=!0,B_);case"textInput":return t=e.data,t===B_&&V_?null:t;default:return null}}function kT(t,e){if(xa)return t==="compositionend"||!tg&&WS(t,e)?(t=HS(),mh=Q0=xs=null,xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GS&&e.locale!=="ko"?null:e.data;default:return null}}var BT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BT[t.type]:e==="textarea"}function XS(t,e,n,i){wS(i),e=kh(e,"onChange"),0<e.length&&(n=new J0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Kl=null,mc=null;function VT(t){iM(t,0)}function Af(t){var e=Ma(t);if(gS(e))return t}function HT(t,e){if(t==="change")return e}var $S=!1;if(Ur){var od;if(Ur){var ad="oninput"in document;if(!ad){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),ad=typeof G_.oninput=="function"}od=ad}else od=!1;$S=od&&(!document.documentMode||9<document.documentMode)}function W_(){Kl&&(Kl.detachEvent("onpropertychange",YS),mc=Kl=null)}function YS(t){if(t.propertyName==="value"&&Af(mc)){var e=[];XS(e,mc,t,$0(t)),AS(VT,e)}}function GT(t,e,n){t==="focusin"?(W_(),Kl=e,mc=n,Kl.attachEvent("onpropertychange",YS)):t==="focusout"&&W_()}function WT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Af(mc)}function jT(t,e){if(t==="click")return Af(e)}function XT(t,e){if(t==="input"||t==="change")return Af(e)}function $T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gi=typeof Object.is=="function"?Object.is:$T;function gc(t,e){if(Gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ip.call(e,r)||!Gi(t[r],e[r]))return!1}return!0}function j_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function X_(t,e){var n=j_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=j_(n)}}function qS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function KS(){for(var t=window,e=Lh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lh(t.document)}return e}function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YT(t){var e=KS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qS(n.ownerDocument.documentElement,n)){if(i!==null&&ng(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=X_(n,s);var o=X_(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qT=Ur&&"documentMode"in document&&11>=document.documentMode,ya=null,Jp=null,Zl=null,em=!1;function $_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||ya==null||ya!==Lh(i)||(i=ya,"selectionStart"in i&&ng(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zl&&gc(Zl,i)||(Zl=i,i=kh(Jp,"onSelect"),0<i.length&&(e=new J0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ya)))}function Jc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sa={animationend:Jc("Animation","AnimationEnd"),animationiteration:Jc("Animation","AnimationIteration"),animationstart:Jc("Animation","AnimationStart"),transitionend:Jc("Transition","TransitionEnd")},ld={},ZS={};Ur&&(ZS=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Cf(t){if(ld[t])return ld[t];if(!Sa[t])return t;var e=Sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ZS)return ld[t]=e[n];return t}var QS=Cf("animationend"),JS=Cf("animationiteration"),eM=Cf("animationstart"),tM=Cf("transitionend"),nM=new Map,Y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(t,e){nM.set(t,e),Fo(e,[t])}for(var cd=0;cd<Y_.length;cd++){var ud=Y_[cd],KT=ud.toLowerCase(),ZT=ud[0].toUpperCase()+ud.slice(1);Vs(KT,"on"+ZT)}Vs(QS,"onAnimationEnd");Vs(JS,"onAnimationIteration");Vs(eM,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(tM,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QT=new Set("cancel close invalid load scroll toggle".split(" ").concat(kl));function q_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K2(i,e,void 0,t),t.currentTarget=null}function iM(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,c),s=l}}}if(Ih)throw t=qp,Ih=!1,qp=null,t}function Pt(t,e){var n=e[sm];n===void 0&&(n=e[sm]=new Set);var i=t+"__bubble";n.has(i)||(rM(e,t,2,!1),n.add(i))}function hd(t,e,n){var i=0;e&&(i|=4),rM(n,t,i,e)}var eu="_reactListening"+Math.random().toString(36).slice(2);function _c(t){if(!t[eu]){t[eu]=!0,hS.forEach(function(n){n!=="selectionchange"&&(QT.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eu]||(e[eu]=!0,hd("selectionchange",!1,e))}}function rM(t,e,n,i){switch(VS(e)){case 1:var r=fT;break;case 4:r=dT;break;default:r=Z0}n=r.bind(null,e,n,t),r=void 0,!Yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=co(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}AS(function(){var c=s,h=$0(n),u=[];e:{var d=nM.get(t);if(d!==void 0){var p=J0,m=t;switch(t){case"keypress":if(gh(n)===0)break e;case"keydown":case"keyup":p=CT;break;case"focusin":m="focus",p=sd;break;case"focusout":m="blur",p=sd;break;case"beforeblur":case"afterblur":p=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=DT;break;case QS:case JS:case eM:p=xT;break;case tM:p=NT;break;case"scroll":p=pT;break;case"wheel":p=UT;break;case"copy":case"cut":case"paste":p=ST;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=k_}var v=(e&4)!==0,g=!v&&t==="scroll",f=v?d!==null?d+"Capture":null:d;v=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=hc(x,f),y!=null&&v.push(vc(x,y,_)))),g)break;x=x.return}0<v.length&&(d=new p(d,m,null,n,h),u.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Xp&&(m=n.relatedTarget||n.fromElement)&&(co(m)||m[Or]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?co(m):null,m!==null&&(g=ko(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=z_,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=k_,y="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?d:Ma(p),_=m==null?d:Ma(m),d=new v(y,x+"leave",p,n,h),d.target=g,d.relatedTarget=_,y=null,co(h)===c&&(v=new v(f,x+"enter",m,n,h),v.target=_,v.relatedTarget=g,y=v),g=y,p&&m)t:{for(v=p,f=m,x=0,_=v;_;_=Go(_))x++;for(_=0,y=f;y;y=Go(y))_++;for(;0<x-_;)v=Go(v),x--;for(;0<_-x;)f=Go(f),_--;for(;x--;){if(v===f||f!==null&&v===f.alternate)break t;v=Go(v),f=Go(f)}v=null}else v=null;p!==null&&K_(u,d,p,v,!1),m!==null&&g!==null&&K_(u,g,m,v,!0)}}e:{if(d=c?Ma(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=HT;else if(H_(d))if($S)P=XT;else{P=WT;var D=GT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=jT);if(P&&(P=P(t,c))){XS(u,P,n,h);break e}D&&D(t,d,c),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Vp(d,"number",d.value)}switch(D=c?Ma(c):window,t){case"focusin":(H_(D)||D.contentEditable==="true")&&(ya=D,Jp=c,Zl=null);break;case"focusout":Zl=Jp=ya=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,$_(u,n,h);break;case"selectionchange":if(qT)break;case"keydown":case"keyup":$_(u,n,h)}var A;if(tg)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else xa?WS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(GS&&n.locale!=="ko"&&(xa||R!=="onCompositionStart"?R==="onCompositionEnd"&&xa&&(A=HS()):(xs=h,Q0="value"in xs?xs.value:xs.textContent,xa=!0)),D=kh(c,R),0<D.length&&(R=new F_(R,t,null,n,h),u.push({event:R,listeners:D}),A?R.data=A:(A=jS(n),A!==null&&(R.data=A)))),(A=zT?FT(t,n):kT(t,n))&&(c=kh(c,"onBeforeInput"),0<c.length&&(h=new F_("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=A))}iM(u,e)})}function vc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kh(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=hc(t,n),s!=null&&i.unshift(vc(t,s,r)),s=hc(t,e),s!=null&&i.push(vc(t,s,r))),t=t.return}return i}function Go(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function K_(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=hc(n,s),l!=null&&o.unshift(vc(n,l,a))):r||(l=hc(n,s),l!=null&&o.push(vc(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var JT=/\r\n?/g,eb=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(JT,`
`).replace(eb,"")}function tu(t,e,n){if(e=Z_(e),Z_(t)!==e&&n)throw Error(ae(425))}function Bh(){}var tm=null,nm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rm=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(ib)}:rm;function ib(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pc(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pc(e)}function Cs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function J_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ll=Math.random().toString(36).slice(2),tr="__reactFiber$"+ll,xc="__reactProps$"+ll,Or="__reactContainer$"+ll,sm="__reactEvents$"+ll,rb="__reactListeners$"+ll,sb="__reactHandles$"+ll;function co(t){var e=t[tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=J_(t);t!==null;){if(n=t[tr])return n;t=J_(t)}return e}t=n,n=t.parentNode}return null}function Uc(t){return t=t[tr]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ma(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Rf(t){return t[xc]||null}var om=[],wa=-1;function Hs(t){return{current:t}}function Lt(t){0>wa||(t.current=om[wa],om[wa]=null,wa--)}function At(t,e){wa++,om[wa]=t.current,t.current=e}var Us={},An=Hs(Us),qn=Hs(!1),Ro=Us;function ja(t,e){var n=t.type.contextTypes;if(!n)return Us;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Kn(t){return t=t.childContextTypes,t!=null}function Vh(){Lt(qn),Lt(An)}function ev(t,e,n){if(An.current!==Us)throw Error(ae(168));At(An,e),At(qn,n)}function sM(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,G2(t)||"Unknown",r));return Ft({},n,i)}function Hh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Us,Ro=An.current,At(An,t),At(qn,qn.current),!0}function tv(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=sM(t,e,Ro),i.__reactInternalMemoizedMergedChildContext=t,Lt(qn),Lt(An),At(An,t)):Lt(qn),At(qn,n)}var Tr=null,Pf=!1,pd=!1;function oM(t){Tr===null?Tr=[t]:Tr.push(t)}function ob(t){Pf=!0,oM(t)}function Gs(){if(!pd&&Tr!==null){pd=!0;var t=0,e=xt;try{var n=Tr;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Tr=null,Pf=!1}catch(r){throw Tr!==null&&(Tr=Tr.slice(t+1)),DS(Y0,Gs),r}finally{xt=e,pd=!1}}return null}var Ea=[],Ta=0,Gh=null,Wh=0,di=[],pi=0,Po=null,Ar=1,Cr="";function to(t,e){Ea[Ta++]=Wh,Ea[Ta++]=Gh,Gh=t,Wh=e}function aM(t,e,n){di[pi++]=Ar,di[pi++]=Cr,di[pi++]=Po,Po=t;var i=Ar;t=Cr;var r=32-Bi(i)-1;i&=~(1<<r),n+=1;var s=32-Bi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ar=1<<32-Bi(e)+r|n<<r|i,Cr=s+t}else Ar=1<<s|n<<r|i,Cr=t}function ig(t){t.return!==null&&(to(t,1),aM(t,1,0))}function rg(t){for(;t===Gh;)Gh=Ea[--Ta],Ea[Ta]=null,Wh=Ea[--Ta],Ea[Ta]=null;for(;t===Po;)Po=di[--pi],di[pi]=null,Cr=di[--pi],di[pi]=null,Ar=di[--pi],di[pi]=null}var ri=null,ni=null,Ut=!1,Ni=null;function lM(t,e){var n=_i(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ri=t,ni=Cs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ri=t,ni=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Po!==null?{id:Ar,overflow:Cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_i(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ri=t,ni=null,!0):!1;default:return!1}}function am(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lm(t){if(Ut){var e=ni;if(e){var n=e;if(!nv(t,e)){if(am(t))throw Error(ae(418));e=Cs(n.nextSibling);var i=ri;e&&nv(t,e)?lM(i,n):(t.flags=t.flags&-4097|2,Ut=!1,ri=t)}}else{if(am(t))throw Error(ae(418));t.flags=t.flags&-4097|2,Ut=!1,ri=t}}}function iv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ri=t}function nu(t){if(t!==ri)return!1;if(!Ut)return iv(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=ni)){if(am(t))throw cM(),Error(ae(418));for(;e;)lM(t,e),e=Cs(e.nextSibling)}if(iv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ni=Cs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ni=null}}else ni=ri?Cs(t.stateNode.nextSibling):null;return!0}function cM(){for(var t=ni;t;)t=Cs(t.nextSibling)}function Xa(){ni=ri=null,Ut=!1}function sg(t){Ni===null?Ni=[t]:Ni.push(t)}var ab=Hr.ReactCurrentBatchConfig;function yl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function iu(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rv(t){var e=t._init;return e(t._payload)}function uM(t){function e(f,x){if(t){var _=f.deletions;_===null?(f.deletions=[x],f.flags|=16):_.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Ls(f,x),f.index=0,f.sibling=null,f}function s(f,x,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<x?(f.flags|=2,x):_):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,_,y){return x===null||x.tag!==6?(x=Sd(_,f.mode,y),x.return=f,x):(x=r(x,_),x.return=f,x)}function l(f,x,_,y){var P=_.type;return P===va?h(f,x,_.props.children,y,_.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===hs&&rv(P)===x.type)?(y=r(x,_.props),y.ref=yl(f,x,_),y.return=f,y):(y=wh(_.type,_.key,_.props,null,f.mode,y),y.ref=yl(f,x,_),y.return=f,y)}function c(f,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Md(_,f.mode,y),x.return=f,x):(x=r(x,_.children||[]),x.return=f,x)}function h(f,x,_,y,P){return x===null||x.tag!==7?(x=yo(_,f.mode,y,P),x.return=f,x):(x=r(x,_),x.return=f,x)}function u(f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Sd(""+x,f.mode,_),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xc:return _=wh(x.type,x.key,x.props,null,f.mode,_),_.ref=yl(f,null,x),_.return=f,_;case _a:return x=Md(x,f.mode,_),x.return=f,x;case hs:var y=x._init;return u(f,y(x._payload),_)}if(zl(x)||ml(x))return x=yo(x,f.mode,_,null),x.return=f,x;iu(f,x)}return null}function d(f,x,_,y){var P=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(f,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xc:return _.key===P?l(f,x,_,y):null;case _a:return _.key===P?c(f,x,_,y):null;case hs:return P=_._init,d(f,x,P(_._payload),y)}if(zl(_)||ml(_))return P!==null?null:h(f,x,_,y,null);iu(f,_)}return null}function p(f,x,_,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(x,f,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xc:return f=f.get(y.key===null?_:y.key)||null,l(x,f,y,P);case _a:return f=f.get(y.key===null?_:y.key)||null,c(x,f,y,P);case hs:var D=y._init;return p(f,x,_,D(y._payload),P)}if(zl(y)||ml(y))return f=f.get(_)||null,h(x,f,y,P,null);iu(x,y)}return null}function m(f,x,_,y){for(var P=null,D=null,A=x,R=x=0,T=null;A!==null&&R<_.length;R++){A.index>R?(T=A,A=null):T=A.sibling;var S=d(f,A,_[R],y);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(f,A),x=s(S,x,R),D===null?P=S:D.sibling=S,D=S,A=T}if(R===_.length)return n(f,A),Ut&&to(f,R),P;if(A===null){for(;R<_.length;R++)A=u(f,_[R],y),A!==null&&(x=s(A,x,R),D===null?P=A:D.sibling=A,D=A);return Ut&&to(f,R),P}for(A=i(f,A);R<_.length;R++)T=p(A,f,R,_[R],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?R:T.key),x=s(T,x,R),D===null?P=T:D.sibling=T,D=T);return t&&A.forEach(function(C){return e(f,C)}),Ut&&to(f,R),P}function v(f,x,_,y){var P=ml(_);if(typeof P!="function")throw Error(ae(150));if(_=P.call(_),_==null)throw Error(ae(151));for(var D=P=null,A=x,R=x=0,T=null,S=_.next();A!==null&&!S.done;R++,S=_.next()){A.index>R?(T=A,A=null):T=A.sibling;var C=d(f,A,S.value,y);if(C===null){A===null&&(A=T);break}t&&A&&C.alternate===null&&e(f,A),x=s(C,x,R),D===null?P=C:D.sibling=C,D=C,A=T}if(S.done)return n(f,A),Ut&&to(f,R),P;if(A===null){for(;!S.done;R++,S=_.next())S=u(f,S.value,y),S!==null&&(x=s(S,x,R),D===null?P=S:D.sibling=S,D=S);return Ut&&to(f,R),P}for(A=i(f,A);!S.done;R++,S=_.next())S=p(A,f,R,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),x=s(S,x,R),D===null?P=S:D.sibling=S,D=S);return t&&A.forEach(function(z){return e(f,z)}),Ut&&to(f,R),P}function g(f,x,_,y){if(typeof _=="object"&&_!==null&&_.type===va&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Xc:e:{for(var P=_.key,D=x;D!==null;){if(D.key===P){if(P=_.type,P===va){if(D.tag===7){n(f,D.sibling),x=r(D,_.props.children),x.return=f,f=x;break e}}else if(D.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===hs&&rv(P)===D.type){n(f,D.sibling),x=r(D,_.props),x.ref=yl(f,D,_),x.return=f,f=x;break e}n(f,D);break}else e(f,D);D=D.sibling}_.type===va?(x=yo(_.props.children,f.mode,y,_.key),x.return=f,f=x):(y=wh(_.type,_.key,_.props,null,f.mode,y),y.ref=yl(f,x,_),y.return=f,f=y)}return o(f);case _a:e:{for(D=_.key;x!==null;){if(x.key===D)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(f,x.sibling),x=r(x,_.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Md(_,f.mode,y),x.return=f,f=x}return o(f);case hs:return D=_._init,g(f,x,D(_._payload),y)}if(zl(_))return m(f,x,_,y);if(ml(_))return v(f,x,_,y);iu(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,_),x.return=f,f=x):(n(f,x),x=Sd(_,f.mode,y),x.return=f,f=x),o(f)):n(f,x)}return g}var $a=uM(!0),hM=uM(!1),jh=Hs(null),Xh=null,ba=null,og=null;function ag(){og=ba=Xh=null}function lg(t){var e=jh.current;Lt(jh),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function za(t,e){Xh=t,og=ba=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($n=!0),t.firstContext=null)}function yi(t){var e=t._currentValue;if(og!==t)if(t={context:t,memoizedValue:e,next:null},ba===null){if(Xh===null)throw Error(ae(308));ba=t,Xh.dependencies={lanes:0,firstContext:t}}else ba=ba.next=t;return e}var uo=null;function cg(t){uo===null?uo=[t]:uo.push(t)}function fM(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cg(e)):(n.next=r.next,r.next=n),e.interleaved=n,zr(t,i)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fs=!1;function ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dM(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zr(t,n)}return r=i.interleaved,r===null?(e.next=e,cg(i)):(e.next=r.next,r.next=e),i.interleaved=e,zr(t,n)}function _h(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,q0(t,n)}}function sv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $h(t,e,n,i){var r=t.updateQueue;fs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){u=m.call(p,u,d);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(p,u,d):m,d==null)break e;u=Ft({},u,d);break e;case 2:fs=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lo|=o,t.lanes=o,t.memoizedState=u}}function ov(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Oc={},or=Hs(Oc),yc=Hs(Oc),Sc=Hs(Oc);function ho(t){if(t===Oc)throw Error(ae(174));return t}function hg(t,e){switch(At(Sc,e),At(yc,t),At(or,Oc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gp(e,t)}Lt(or),At(or,e)}function Ya(){Lt(or),Lt(yc),Lt(Sc)}function pM(t){ho(Sc.current);var e=ho(or.current),n=Gp(e,t.type);e!==n&&(At(yc,t),At(or,n))}function fg(t){yc.current===t&&(Lt(or),Lt(yc))}var Ot=Hs(0);function Yh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function dg(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var vh=Hr.ReactCurrentDispatcher,gd=Hr.ReactCurrentBatchConfig,Do=0,zt=null,Yt=null,sn=null,qh=!1,Ql=!1,Mc=0,lb=0;function vn(){throw Error(ae(321))}function pg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gi(t[n],e[n]))return!1;return!0}function mg(t,e,n,i,r,s){if(Do=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vh.current=t===null||t.memoizedState===null?fb:db,t=n(i,r),Ql){s=0;do{if(Ql=!1,Mc=0,25<=s)throw Error(ae(301));s+=1,sn=Yt=null,e.updateQueue=null,vh.current=pb,t=n(i,r)}while(Ql)}if(vh.current=Kh,e=Yt!==null&&Yt.next!==null,Do=0,sn=Yt=zt=null,qh=!1,e)throw Error(ae(300));return t}function gg(){var t=Mc!==0;return Mc=0,t}function Ji(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?zt.memoizedState=sn=t:sn=sn.next=t,sn}function Si(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=sn===null?zt.memoizedState:sn.next;if(e!==null)sn=e,Yt=t;else{if(t===null)throw Error(ae(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},sn===null?zt.memoizedState=sn=t:sn=sn.next=t}return sn}function wc(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=Si(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Do&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,zt.lanes|=h,Lo|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gi(i,e.memoizedState)||($n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,zt.lanes|=s,Lo|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=Si(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gi(s,e.memoizedState)||($n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function mM(){}function gM(t,e){var n=zt,i=Si(),r=e(),s=!Gi(i.memoizedState,r);if(s&&(i.memoizedState=r,$n=!0),i=i.queue,_g(xM.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||sn!==null&&sn.memoizedState.tag&1){if(n.flags|=2048,Ec(9,vM.bind(null,n,i,r,e),void 0,null),ln===null)throw Error(ae(349));Do&30||_M(n,e,r)}return r}function _M(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vM(t,e,n,i){e.value=n,e.getSnapshot=i,yM(e)&&SM(t)}function xM(t,e,n){return n(function(){yM(e)&&SM(t)})}function yM(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gi(t,n)}catch{return!0}}function SM(t){var e=zr(t,1);e!==null&&Vi(e,t,1,-1)}function av(t){var e=Ji();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wc,lastRenderedState:t},e.queue=t,t=t.dispatch=hb.bind(null,zt,t),[e.memoizedState,t]}function Ec(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function MM(){return Si().memoizedState}function xh(t,e,n,i){var r=Ji();zt.flags|=t,r.memoizedState=Ec(1|e,n,void 0,i===void 0?null:i)}function Df(t,e,n,i){var r=Si();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var o=Yt.memoizedState;if(s=o.destroy,i!==null&&pg(i,o.deps)){r.memoizedState=Ec(e,n,s,i);return}}zt.flags|=t,r.memoizedState=Ec(1|e,n,s,i)}function lv(t,e){return xh(8390656,8,t,e)}function _g(t,e){return Df(2048,8,t,e)}function wM(t,e){return Df(4,2,t,e)}function EM(t,e){return Df(4,4,t,e)}function TM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bM(t,e,n){return n=n!=null?n.concat([t]):null,Df(4,4,TM.bind(null,e,t),n)}function vg(){}function AM(t,e){var n=Si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function CM(t,e){var n=Si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function RM(t,e,n){return Do&21?(Gi(n,e)||(n=IS(),zt.lanes|=n,Lo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$n=!0),t.memoizedState=n)}function cb(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=gd.transition;gd.transition={};try{t(!1),e()}finally{xt=n,gd.transition=i}}function PM(){return Si().memoizedState}function ub(t,e,n){var i=Ds(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},DM(t))LM(e,n);else if(n=fM(t,e,n,i),n!==null){var r=Un();Vi(n,t,i,r),NM(n,e,i)}}function hb(t,e,n){var i=Ds(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(DM(t))LM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gi(a,o)){var l=e.interleaved;l===null?(r.next=r,cg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fM(t,e,r,i),n!==null&&(r=Un(),Vi(n,t,i,r),NM(n,e,i))}}function DM(t){var e=t.alternate;return t===zt||e!==null&&e===zt}function LM(t,e){Ql=qh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,q0(t,n)}}var Kh={readContext:yi,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},fb={readContext:yi,useCallback:function(t,e){return Ji().memoizedState=[t,e===void 0?null:e],t},useContext:yi,useEffect:lv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xh(4194308,4,TM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xh(4194308,4,t,e)},useInsertionEffect:function(t,e){return xh(4,2,t,e)},useMemo:function(t,e){var n=Ji();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ji();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ub.bind(null,zt,t),[i.memoizedState,t]},useRef:function(t){var e=Ji();return t={current:t},e.memoizedState=t},useState:av,useDebugValue:vg,useDeferredValue:function(t){return Ji().memoizedState=t},useTransition:function(){var t=av(!1),e=t[0];return t=cb.bind(null,t[1]),Ji().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=zt,r=Ji();if(Ut){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),ln===null)throw Error(ae(349));Do&30||_M(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lv(xM.bind(null,i,s,t),[t]),i.flags|=2048,Ec(9,vM.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ji(),e=ln.identifierPrefix;if(Ut){var n=Cr,i=Ar;n=(i&~(1<<32-Bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mc++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},db={readContext:yi,useCallback:AM,useContext:yi,useEffect:_g,useImperativeHandle:bM,useInsertionEffect:wM,useLayoutEffect:EM,useMemo:CM,useReducer:_d,useRef:MM,useState:function(){return _d(wc)},useDebugValue:vg,useDeferredValue:function(t){var e=Si();return RM(e,Yt.memoizedState,t)},useTransition:function(){var t=_d(wc)[0],e=Si().memoizedState;return[t,e]},useMutableSource:mM,useSyncExternalStore:gM,useId:PM,unstable_isNewReconciler:!1},pb={readContext:yi,useCallback:AM,useContext:yi,useEffect:_g,useImperativeHandle:bM,useInsertionEffect:wM,useLayoutEffect:EM,useMemo:CM,useReducer:vd,useRef:MM,useState:function(){return vd(wc)},useDebugValue:vg,useDeferredValue:function(t){var e=Si();return Yt===null?e.memoizedState=t:RM(e,Yt.memoizedState,t)},useTransition:function(){var t=vd(wc)[0],e=Si().memoizedState;return[t,e]},useMutableSource:mM,useSyncExternalStore:gM,useId:PM,unstable_isNewReconciler:!1};function Di(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function um(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lf={isMounted:function(t){return(t=t._reactInternals)?ko(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Ds(t),s=Pr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rs(t,s,r),e!==null&&(Vi(e,t,r,i),_h(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Ds(t),s=Pr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rs(t,s,r),e!==null&&(Vi(e,t,r,i),_h(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Un(),i=Ds(t),r=Pr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rs(t,r,i),e!==null&&(Vi(e,t,i,n),_h(e,t,i))}};function cv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gc(n,i)||!gc(r,s):!0}function IM(t,e,n){var i=!1,r=Us,s=e.contextType;return typeof s=="object"&&s!==null?s=yi(s):(r=Kn(e)?Ro:An.current,i=e.contextTypes,s=(i=i!=null)?ja(t,r):Us),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function uv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lf.enqueueReplaceState(e,e.state,null)}function hm(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ug(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yi(s):(s=Kn(e)?Ro:An.current,r.context=ja(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(um(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lf.enqueueReplaceState(r,r.state,null),$h(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qa(t,e){try{var n="",i=e;do n+=H2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mb=typeof WeakMap=="function"?WeakMap:Map;function UM(t,e,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qh||(Qh=!0,Mm=i),fm(t,e)},n}function OM(t,e,n){n=Pr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof i!="function"&&(Ps===null?Ps=new Set([this]):Ps.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Rb.bind(null,t,e,n),e.then(t,t))}function fv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pr(-1,1),e.tag=2,Rs(n,e,1))),n.lanes|=1),t)}var gb=Hr.ReactCurrentOwner,$n=!1;function Dn(t,e,n,i){e.child=t===null?hM(e,null,n,i):$a(e,t.child,n,i)}function pv(t,e,n,i,r){n=n.render;var s=e.ref;return za(e,r),i=mg(t,e,n,i,s,r),n=gg(),t!==null&&!$n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fr(t,e,r)):(Ut&&n&&ig(e),e.flags|=1,Dn(t,e,i,r),e.child)}function mv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zM(t,e,s,i,r)):(t=wh(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gc,n(o,i)&&t.ref===e.ref)return Fr(t,e,r)}return e.flags|=1,t=Ls(s,i),t.ref=e.ref,t.return=e,e.child=t}function zM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(gc(s,i)&&t.ref===e.ref)if($n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&($n=!0);else return e.lanes=t.lanes,Fr(t,e,r)}return dm(t,e,n,i,r)}function FM(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Ca,ti),ti|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,At(Ca,ti),ti|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,At(Ca,ti),ti|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,At(Ca,ti),ti|=i;return Dn(t,e,r,n),e.child}function kM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dm(t,e,n,i,r){var s=Kn(n)?Ro:An.current;return s=ja(e,s),za(e,r),n=mg(t,e,n,i,s,r),i=gg(),t!==null&&!$n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fr(t,e,r)):(Ut&&i&&ig(e),e.flags|=1,Dn(t,e,n,r),e.child)}function gv(t,e,n,i,r){if(Kn(n)){var s=!0;Hh(e)}else s=!1;if(za(e,r),e.stateNode===null)yh(t,e),IM(e,n,i),hm(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yi(c):(c=Kn(n)?Ro:An.current,c=ja(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&uv(e,o,i,c),fs=!1;var d=e.memoizedState;o.state=d,$h(e,i,o,r),l=e.memoizedState,a!==i||d!==l||qn.current||fs?(typeof h=="function"&&(um(e,n,h,i),l=e.memoizedState),(a=fs||cv(e,n,a,i,d,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dM(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Di(e.type,a),o.props=c,u=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yi(l):(l=Kn(n)?Ro:An.current,l=ja(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==l)&&uv(e,o,i,l),fs=!1,d=e.memoizedState,o.state=d,$h(e,i,o,r);var m=e.memoizedState;a!==u||d!==m||qn.current||fs?(typeof p=="function"&&(um(e,n,p,i),m=e.memoizedState),(c=fs||cv(e,n,c,i,d,m,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return pm(t,e,n,i,s,r)}function pm(t,e,n,i,r,s){kM(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&tv(e,n,!1),Fr(t,e,s);i=e.stateNode,gb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$a(e,t.child,null,s),e.child=$a(e,null,a,s)):Dn(t,e,a,s),e.memoizedState=i.state,r&&tv(e,n,!0),e.child}function BM(t){var e=t.stateNode;e.pendingContext?ev(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ev(t,e.context,!1),hg(t,e.containerInfo)}function _v(t,e,n,i,r){return Xa(),sg(r),e.flags|=256,Dn(t,e,n,i),e.child}var mm={dehydrated:null,treeContext:null,retryLane:0};function gm(t){return{baseLanes:t,cachePool:null,transitions:null}}function VM(t,e,n){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),At(Ot,r&1),t===null)return lm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uf(o,i,0,null),t=yo(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gm(n),e.memoizedState=mm,t):xg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _b(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ls(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=yo(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mm,i}return s=t.child,t=s.sibling,i=Ls(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xg(t,e){return e=Uf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,i){return i!==null&&sg(i),$a(e,t.child,null,n),t=xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _b(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xd(Error(ae(422))),ru(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uf({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$a(e,t.child,null,o),e.child.memoizedState=gm(o),e.memoizedState=mm,s);if(!(e.mode&1))return ru(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=xd(s,i,void 0),ru(t,e,o,i)}if(a=(o&t.childLanes)!==0,$n||a){if(i=ln,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zr(t,r),Vi(i,t,r,-1))}return Tg(),i=xd(Error(ae(421))),ru(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Pb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ni=Cs(r.nextSibling),ri=e,Ut=!0,Ni=null,t!==null&&(di[pi++]=Ar,di[pi++]=Cr,di[pi++]=Po,Ar=t.id,Cr=t.overflow,Po=e),e=xg(e,i.children),e.flags|=4096,e)}function vv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cm(t.return,e,n)}function yd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function HM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dn(t,e,i.children,n),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vv(t,n,e);else if(t.tag===19)vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(At(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yh(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yh(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yd(e,!0,n,null,s);break;case"together":yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ls(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ls(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vb(t,e,n){switch(e.tag){case 3:BM(e),Xa();break;case 5:pM(e);break;case 1:Kn(e.type)&&Hh(e);break;case 4:hg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;At(jh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(At(Ot,Ot.current&1),e.flags|=128,null):n&e.child.childLanes?VM(t,e,n):(At(Ot,Ot.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);At(Ot,Ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return HM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),At(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,FM(t,e,n)}return Fr(t,e,n)}var GM,_m,WM,jM;GM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_m=function(){};WM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ho(or.current);var s=null;switch(n){case"input":r=kp(t,r),i=kp(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=Hp(t,r),i=Hp(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bh)}Wp(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jM=function(t,e,n,i){n!==i&&(e.flags|=4)};function Sl(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xb(t,e,n){var i=e.pendingProps;switch(rg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Kn(e.type)&&Vh(),xn(e),null;case 3:return i=e.stateNode,Ya(),Lt(qn),Lt(An),dg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ni!==null&&(Tm(Ni),Ni=null))),_m(t,e),xn(e),null;case 5:fg(e);var r=ho(Sc.current);if(n=e.type,t!==null&&e.stateNode!=null)WM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return xn(e),null}if(t=ho(or.current),nu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[tr]=e,i[xc]=s,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<kl.length;r++)Pt(kl[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":A_(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":R_(i,s),Pt("invalid",i)}Wp(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tu(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tu(i.textContent,a,t),r=["children",""+a]):cc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(n){case"input":$c(i),C_(i,s,!0);break;case"textarea":$c(i),P_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[tr]=e,t[xc]=i,GM(t,e,!1,!1),e.stateNode=t;e:{switch(o=jp(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),r=i;break;case"iframe":case"object":case"embed":Pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<kl.length;r++)Pt(kl[r],t);r=i;break;case"source":Pt("error",t),r=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),r=i;break;case"details":Pt("toggle",t),r=i;break;case"input":A_(t,i),r=kp(t,i),Pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":R_(t,i),r=Hp(t,i),Pt("invalid",t);break;default:r=i}Wp(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?MS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uc(t,l):typeof l=="number"&&uc(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",t):l!=null&&G0(t,s,l,o))}switch(n){case"input":$c(t),C_(t,i,!1);break;case"textarea":$c(t),P_(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Is(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Na(t,!!i.multiple,s,!1):i.defaultValue!=null&&Na(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bh)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)jM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=ho(Sc.current),ho(or.current),nu(e)){if(i=e.stateNode,n=e.memoizedProps,i[tr]=e,(s=i.nodeValue!==n)&&(t=ri,t!==null))switch(t.tag){case 3:tu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[tr]=e,e.stateNode=i}return xn(e),null;case 13:if(Lt(Ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&ni!==null&&e.mode&1&&!(e.flags&128))cM(),Xa(),e.flags|=98560,s=!1;else if(s=nu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[tr]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),s=!1}else Ni!==null&&(Tm(Ni),Ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?Qt===0&&(Qt=3):Tg())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Ya(),_m(t,e),t===null&&_c(e.stateNode.containerInfo),xn(e),null;case 10:return lg(e.type._context),xn(e),null;case 17:return Kn(e.type)&&Vh(),xn(e),null;case 19:if(Lt(Ot),s=e.memoizedState,s===null)return xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Sl(s,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yh(t),o!==null){for(e.flags|=128,Sl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return At(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>Ka&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yh(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ut)return xn(e),null}else 2*Ht()-s.renderingStartTime>Ka&&n!==1073741824&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=Ot.current,At(Ot,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return Eg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ti&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function yb(t,e){switch(rg(e),e.tag){case 1:return Kn(e.type)&&Vh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ya(),Lt(qn),Lt(An),dg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fg(e),null;case 13:if(Lt(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Xa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lt(Ot),null;case 4:return Ya(),null;case 10:return lg(e.type._context),null;case 22:case 23:return Eg(),null;case 24:return null;default:return null}}var su=!1,wn=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Aa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Vt(t,e,i)}else n.current=null}function vm(t,e,n){try{n()}catch(i){Vt(t,e,i)}}var xv=!1;function Mb(t,e){if(tm=zh,t=KS(),ng(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,u=t,d=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nm={focusedElem:t,selectionRange:n},zh=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Di(e.type,v),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return m=xv,xv=!1,m}function Jl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vm(e,n,s)}r=r.next}while(r!==i)}}function Nf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XM(t){var e=t.alternate;e!==null&&(t.alternate=null,XM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[xc],delete e[sm],delete e[rb],delete e[sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $M(t){return t.tag===5||t.tag===3||t.tag===4}function yv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$M(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ym(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bh));else if(i!==4&&(t=t.child,t!==null))for(ym(t,e,n),t=t.sibling;t!==null;)ym(t,e,n),t=t.sibling}function Sm(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}var fn=null,Li=!1;function Xr(t,e,n){for(n=n.child;n!==null;)YM(t,e,n),n=n.sibling}function YM(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Tf,n)}catch{}switch(n.tag){case 5:wn||Aa(n,e);case 6:var i=fn,r=Li;fn=null,Xr(t,e,n),fn=i,Li=r,fn!==null&&(Li?(t=fn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fn.removeChild(n.stateNode));break;case 18:fn!==null&&(Li?(t=fn,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),pc(t)):dd(fn,n.stateNode));break;case 4:i=fn,r=Li,fn=n.stateNode.containerInfo,Li=!0,Xr(t,e,n),fn=i,Li=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vm(n,e,o),r=r.next}while(r!==i)}Xr(t,e,n);break;case 1:if(!wn&&(Aa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Vt(n,e,a)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(wn=(i=wn)||n.memoizedState!==null,Xr(t,e,n),wn=i):Xr(t,e,n);break;default:Xr(t,e,n)}}function Sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sb),e.forEach(function(i){var r=Db.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fn=a.stateNode,Li=!1;break e;case 3:fn=a.stateNode.containerInfo,Li=!0;break e;case 4:fn=a.stateNode.containerInfo,Li=!0;break e}a=a.return}if(fn===null)throw Error(ae(160));YM(s,o,r),fn=null,Li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qM(e,t),e=e.sibling}function qM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(e,t),$i(t),i&4){try{Jl(3,t,t.return),Nf(3,t)}catch(v){Vt(t,t.return,v)}try{Jl(5,t,t.return)}catch(v){Vt(t,t.return,v)}}break;case 1:Ti(e,t),$i(t),i&512&&n!==null&&Aa(n,n.return);break;case 5:if(Ti(e,t),$i(t),i&512&&n!==null&&Aa(n,n.return),t.flags&32){var r=t.stateNode;try{uc(r,"")}catch(v){Vt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_S(r,s),jp(a,o);var c=jp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],u=l[o+1];h==="style"?MS(r,u):h==="dangerouslySetInnerHTML"?yS(r,u):h==="children"?uc(r,u):G0(r,h,u,c)}switch(a){case"input":Bp(r,s);break;case"textarea":vS(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Na(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Na(r,!!s.multiple,s.defaultValue,!0):Na(r,!!s.multiple,s.multiple?[]:"",!1))}r[xc]=s}catch(v){Vt(t,t.return,v)}}break;case 6:if(Ti(e,t),$i(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Vt(t,t.return,v)}}break;case 3:if(Ti(e,t),$i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pc(e.containerInfo)}catch(v){Vt(t,t.return,v)}break;case 4:Ti(e,t),$i(t);break;case 13:Ti(e,t),$i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mg=Ht())),i&4&&Sv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(wn=(c=wn)||h,Ti(e,t),wn=c):Ti(e,t),$i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Te=t,h=t.child;h!==null;){for(u=Te=h;Te!==null;){switch(d=Te,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jl(4,d,d.return);break;case 1:Aa(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Vt(i,n,v)}}break;case 5:Aa(d,d.return);break;case 22:if(d.memoizedState!==null){wv(u);continue}}p!==null?(p.return=d,Te=p):wv(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=SS("display",o))}catch(v){Vt(t,t.return,v)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){Vt(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Ti(e,t),$i(t),i&4&&Sv(t);break;case 21:break;default:Ti(e,t),$i(t)}}function $i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($M(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uc(r,""),i.flags&=-33);var s=yv(t);Sm(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yv(t);ym(t,a,o);break;default:throw Error(ae(161))}}catch(l){Vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wb(t,e,n){Te=t,KM(t)}function KM(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||su;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||wn;a=su;var c=wn;if(su=o,(wn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Ev(r):l!==null?(l.return=o,Te=l):Ev(r);for(;s!==null;)Te=s,KM(s),s=s.sibling;Te=r,su=a,wn=c}Mv(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Mv(t)}}function Mv(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wn||Nf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ov(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ov(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&pc(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}wn||e.flags&512&&xm(e)}catch(d){Vt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function wv(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Ev(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nf(4,e)}catch(l){Vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{xm(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{xm(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var Eb=Math.ceil,Zh=Hr.ReactCurrentDispatcher,yg=Hr.ReactCurrentOwner,vi=Hr.ReactCurrentBatchConfig,lt=0,ln=null,Xt=null,mn=0,ti=0,Ca=Hs(0),Qt=0,Tc=null,Lo=0,If=0,Sg=0,ec=null,Wn=null,Mg=0,Ka=1/0,wr=null,Qh=!1,Mm=null,Ps=null,ou=!1,ys=null,Jh=0,tc=0,wm=null,Sh=-1,Mh=0;function Un(){return lt&6?Ht():Sh!==-1?Sh:Sh=Ht()}function Ds(t){return t.mode&1?lt&2&&mn!==0?mn&-mn:ab.transition!==null?(Mh===0&&(Mh=IS()),Mh):(t=xt,t!==0||(t=window.event,t=t===void 0?16:VS(t.type)),t):1}function Vi(t,e,n,i){if(50<tc)throw tc=0,wm=null,Error(ae(185));Nc(t,n,i),(!(lt&2)||t!==ln)&&(t===ln&&(!(lt&2)&&(If|=n),Qt===4&&_s(t,mn)),Zn(t,i),n===1&&lt===0&&!(e.mode&1)&&(Ka=Ht()+500,Pf&&Gs()))}function Zn(t,e){var n=t.callbackNode;aT(t,e);var i=Oh(t,t===ln?mn:0);if(i===0)n!==null&&N_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&N_(n),e===1)t.tag===0?ob(Tv.bind(null,t)):oM(Tv.bind(null,t)),nb(function(){!(lt&6)&&Gs()}),n=null;else{switch(US(i)){case 1:n=Y0;break;case 4:n=LS;break;case 16:n=Uh;break;case 536870912:n=NS;break;default:n=Uh}n=rw(n,ZM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ZM(t,e){if(Sh=-1,Mh=0,lt&6)throw Error(ae(327));var n=t.callbackNode;if(Fa()&&t.callbackNode!==n)return null;var i=Oh(t,t===ln?mn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ef(t,i);else{e=i;var r=lt;lt|=2;var s=JM();(ln!==t||mn!==e)&&(wr=null,Ka=Ht()+500,xo(t,e));do try{Ab();break}catch(a){QM(t,a)}while(!0);ag(),Zh.current=s,lt=r,Xt!==null?e=0:(ln=null,mn=0,e=Qt)}if(e!==0){if(e===2&&(r=Kp(t),r!==0&&(i=r,e=Em(t,r))),e===1)throw n=Tc,xo(t,0),_s(t,i),Zn(t,Ht()),n;if(e===6)_s(t,i);else{if(r=t.current.alternate,!(i&30)&&!Tb(r)&&(e=ef(t,i),e===2&&(s=Kp(t),s!==0&&(i=s,e=Em(t,s))),e===1))throw n=Tc,xo(t,0),_s(t,i),Zn(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:no(t,Wn,wr);break;case 3:if(_s(t,i),(i&130023424)===i&&(e=Mg+500-Ht(),10<e)){if(Oh(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rm(no.bind(null,t,Wn,wr),e);break}no(t,Wn,wr);break;case 4:if(_s(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Eb(i/1960))-i,10<i){t.timeoutHandle=rm(no.bind(null,t,Wn,wr),i);break}no(t,Wn,wr);break;case 5:no(t,Wn,wr);break;default:throw Error(ae(329))}}}return Zn(t,Ht()),t.callbackNode===n?ZM.bind(null,t):null}function Em(t,e){var n=ec;return t.current.memoizedState.isDehydrated&&(xo(t,e).flags|=256),t=ef(t,e),t!==2&&(e=Wn,Wn=n,e!==null&&Tm(e)),t}function Tm(t){Wn===null?Wn=t:Wn.push.apply(Wn,t)}function Tb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _s(t,e){for(e&=~Sg,e&=~If,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bi(e),i=1<<n;t[n]=-1,e&=~i}}function Tv(t){if(lt&6)throw Error(ae(327));Fa();var e=Oh(t,0);if(!(e&1))return Zn(t,Ht()),null;var n=ef(t,e);if(t.tag!==0&&n===2){var i=Kp(t);i!==0&&(e=i,n=Em(t,i))}if(n===1)throw n=Tc,xo(t,0),_s(t,e),Zn(t,Ht()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,no(t,Wn,wr),Zn(t,Ht()),null}function wg(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Ka=Ht()+500,Pf&&Gs())}}function No(t){ys!==null&&ys.tag===0&&!(lt&6)&&Fa();var e=lt;lt|=1;var n=vi.transition,i=xt;try{if(vi.transition=null,xt=1,t)return t()}finally{xt=i,vi.transition=n,lt=e,!(lt&6)&&Gs()}}function Eg(){ti=Ca.current,Lt(Ca)}function xo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tb(n)),Xt!==null)for(n=Xt.return;n!==null;){var i=n;switch(rg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vh();break;case 3:Ya(),Lt(qn),Lt(An),dg();break;case 5:fg(i);break;case 4:Ya();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:lg(i.type._context);break;case 22:case 23:Eg()}n=n.return}if(ln=t,Xt=t=Ls(t.current,null),mn=ti=e,Qt=0,Tc=null,Sg=If=Lo=0,Wn=ec=null,uo!==null){for(e=0;e<uo.length;e++)if(n=uo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}uo=null}return t}function QM(t,e){do{var n=Xt;try{if(ag(),vh.current=Kh,qh){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qh=!1}if(Do=0,sn=Yt=zt=null,Ql=!1,Mc=0,yg.current=null,n===null||n.return===null){Qt=1,Tc=e,Xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=mn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=fv(o);if(p!==null){p.flags&=-257,dv(p,o,a,s,e),p.mode&1&&hv(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){hv(s,c,e),Tg();break e}l=Error(ae(426))}}else if(Ut&&a.mode&1){var g=fv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dv(g,o,a,s,e),sg(qa(l,a));break e}}s=l=qa(l,a),Qt!==4&&(Qt=2),ec===null?ec=[s]:ec.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=UM(s,l,e);sv(s,f);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ps===null||!Ps.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=OM(s,a,e);sv(s,y);break e}}s=s.return}while(s!==null)}tw(n)}catch(P){e=P,Xt===n&&n!==null&&(Xt=n=n.return);continue}break}while(!0)}function JM(){var t=Zh.current;return Zh.current=Kh,t===null?Kh:t}function Tg(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),ln===null||!(Lo&268435455)&&!(If&268435455)||_s(ln,mn)}function ef(t,e){var n=lt;lt|=2;var i=JM();(ln!==t||mn!==e)&&(wr=null,xo(t,e));do try{bb();break}catch(r){QM(t,r)}while(!0);if(ag(),lt=n,Zh.current=i,Xt!==null)throw Error(ae(261));return ln=null,mn=0,Qt}function bb(){for(;Xt!==null;)ew(Xt)}function Ab(){for(;Xt!==null&&!Q2();)ew(Xt)}function ew(t){var e=iw(t.alternate,t,ti);t.memoizedProps=t.pendingProps,e===null?tw(t):Xt=e,yg.current=null}function tw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yb(n,e),n!==null){n.flags&=32767,Xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Xt=null;return}}else if(n=xb(n,e,ti),n!==null){Xt=n;return}if(e=e.sibling,e!==null){Xt=e;return}Xt=e=t}while(e!==null);Qt===0&&(Qt=5)}function no(t,e,n){var i=xt,r=vi.transition;try{vi.transition=null,xt=1,Cb(t,e,n,i)}finally{vi.transition=r,xt=i}return null}function Cb(t,e,n,i){do Fa();while(ys!==null);if(lt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lT(t,s),t===ln&&(Xt=ln=null,mn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ou||(ou=!0,rw(Uh,function(){return Fa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vi.transition,vi.transition=null;var o=xt;xt=1;var a=lt;lt|=4,yg.current=null,Mb(t,n),qM(n,t),YT(nm),zh=!!tm,nm=tm=null,t.current=n,wb(n),J2(),lt=a,xt=o,vi.transition=s}else t.current=n;if(ou&&(ou=!1,ys=t,Jh=r),s=t.pendingLanes,s===0&&(Ps=null),nT(n.stateNode),Zn(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qh)throw Qh=!1,t=Mm,Mm=null,t;return Jh&1&&t.tag!==0&&Fa(),s=t.pendingLanes,s&1?t===wm?tc++:(tc=0,wm=t):tc=0,Gs(),null}function Fa(){if(ys!==null){var t=US(Jh),e=vi.transition,n=xt;try{if(vi.transition=null,xt=16>t?16:t,ys===null)var i=!1;else{if(t=ys,ys=null,Jh=0,lt&6)throw Error(ae(331));var r=lt;for(lt|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var h=Te;switch(h.tag){case 0:case 11:case 15:Jl(8,h,s)}var u=h.child;if(u!==null)u.return=h,Te=u;else for(;Te!==null;){h=Te;var d=h.sibling,p=h.return;if(XM(h),h===c){Te=null;break}if(d!==null){d.return=p,Te=d;break}Te=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){o=Te;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Te=_;else e:for(o=x;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nf(9,a)}}catch(P){Vt(a,a.return,P)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(lt=r,Gs(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Tf,t)}catch{}i=!0}return i}finally{xt=n,vi.transition=e}}return!1}function bv(t,e,n){e=qa(n,e),e=UM(t,e,1),t=Rs(t,e,1),e=Un(),t!==null&&(Nc(t,1,e),Zn(t,e))}function Vt(t,e,n){if(t.tag===3)bv(t,t,n);else for(;e!==null;){if(e.tag===3){bv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ps===null||!Ps.has(i))){t=qa(n,t),t=OM(e,t,1),e=Rs(e,t,1),t=Un(),e!==null&&(Nc(e,1,t),Zn(e,t));break}}e=e.return}}function Rb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Un(),t.pingedLanes|=t.suspendedLanes&n,ln===t&&(mn&n)===n&&(Qt===4||Qt===3&&(mn&130023424)===mn&&500>Ht()-Mg?xo(t,0):Sg|=n),Zn(t,e)}function nw(t,e){e===0&&(t.mode&1?(e=Kc,Kc<<=1,!(Kc&130023424)&&(Kc=4194304)):e=1);var n=Un();t=zr(t,e),t!==null&&(Nc(t,e,n),Zn(t,n))}function Pb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nw(t,n)}function Db(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),nw(t,n)}var iw;iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qn.current)$n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $n=!1,vb(t,e,n);$n=!!(t.flags&131072)}else $n=!1,Ut&&e.flags&1048576&&aM(e,Wh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yh(t,e),t=e.pendingProps;var r=ja(e,An.current);za(e,n),r=mg(null,e,i,t,r,n);var s=gg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kn(i)?(s=!0,Hh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ug(e),r.updater=Lf,e.stateNode=r,r._reactInternals=e,hm(e,i,t,n),e=pm(null,e,i,!0,s,n)):(e.tag=0,Ut&&s&&ig(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yh(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Nb(i),t=Di(i,t),r){case 0:e=dm(null,e,i,t,n);break e;case 1:e=gv(null,e,i,t,n);break e;case 11:e=pv(null,e,i,t,n);break e;case 14:e=mv(null,e,i,Di(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),dm(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),gv(t,e,i,r,n);case 3:e:{if(BM(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dM(t,e),$h(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qa(Error(ae(423)),e),e=_v(t,e,i,n,r);break e}else if(i!==r){r=qa(Error(ae(424)),e),e=_v(t,e,i,n,r);break e}else for(ni=Cs(e.stateNode.containerInfo.firstChild),ri=e,Ut=!0,Ni=null,n=hM(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xa(),i===r){e=Fr(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return pM(e),t===null&&lm(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,im(i,r)?o=null:s!==null&&im(i,s)&&(e.flags|=32),kM(t,e),Dn(t,e,o,n),e.child;case 6:return t===null&&lm(e),null;case 13:return VM(t,e,n);case 4:return hg(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$a(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),pv(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,At(jh,i._currentValue),i._currentValue=o,s!==null)if(Gi(s.value,o)){if(s.children===r.children&&!qn.current){e=Fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,za(e,n),r=yi(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=Di(i,e.pendingProps),r=Di(i.type,r),mv(t,e,i,r,n);case 15:return zM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),yh(t,e),e.tag=1,Kn(i)?(t=!0,Hh(e)):t=!1,za(e,n),IM(e,i,r),hm(e,i,r,n),pm(null,e,i,!0,t,n);case 19:return HM(t,e,n);case 22:return FM(t,e,n)}throw Error(ae(156,e.tag))};function rw(t,e){return DS(t,e)}function Lb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,e,n,i){return new Lb(t,e,n,i)}function bg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nb(t){if(typeof t=="function")return bg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===j0)return 11;if(t===X0)return 14}return 2}function Ls(t,e){var n=t.alternate;return n===null?(n=_i(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wh(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case va:return yo(n.children,r,s,e);case W0:o=8,r|=8;break;case Up:return t=_i(12,n,e,r|2),t.elementType=Up,t.lanes=s,t;case Op:return t=_i(13,n,e,r),t.elementType=Op,t.lanes=s,t;case zp:return t=_i(19,n,e,r),t.elementType=zp,t.lanes=s,t;case pS:return Uf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fS:o=10;break e;case dS:o=9;break e;case j0:o=11;break e;case X0:o=14;break e;case hs:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=_i(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yo(t,e,n,i){return t=_i(7,t,i,e),t.lanes=n,t}function Uf(t,e,n,i){return t=_i(22,t,i,e),t.elementType=pS,t.lanes=n,t.stateNode={isHidden:!1},t}function Sd(t,e,n){return t=_i(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=_i(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ib(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ag(t,e,n,i,r,s,o,a,l){return t=new Ib(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_i(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ug(s),t}function Ub(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_a,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sw(t){if(!t)return Us;t=t._reactInternals;e:{if(ko(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(Kn(n))return sM(t,n,e)}return e}function ow(t,e,n,i,r,s,o,a,l){return t=Ag(n,i,!0,t,r,s,o,a,l),t.context=sw(null),n=t.current,i=Un(),r=Ds(n),s=Pr(i,r),s.callback=e??null,Rs(n,s,r),t.current.lanes=r,Nc(t,r,i),Zn(t,i),t}function Of(t,e,n,i){var r=e.current,s=Un(),o=Ds(r);return n=sw(n),e.context===null?e.context=n:e.pendingContext=n,e=Pr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rs(r,e,o),t!==null&&(Vi(t,r,o,s),_h(t,r,o)),o}function tf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cg(t,e){Av(t,e),(t=t.alternate)&&Av(t,e)}function Ob(){return null}var aw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rg(t){this._internalRoot=t}zf.prototype.render=Rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Of(t,e,null,null)};zf.prototype.unmount=Rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;No(function(){Of(null,t,null,null)}),e[Or]=null}};function zf(t){this._internalRoot=t}zf.prototype.unstable_scheduleHydration=function(t){if(t){var e=FS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gs.length&&e!==0&&e<gs[n].priority;n++);gs.splice(n,0,t),n===0&&BS(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cv(){}function zb(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tf(o);s.call(c)}}var o=ow(e,i,t,0,null,!1,!1,"",Cv);return t._reactRootContainer=o,t[Or]=o.current,_c(t.nodeType===8?t.parentNode:t),No(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tf(l);a.call(c)}}var l=Ag(t,0,!1,null,null,!1,!1,"",Cv);return t._reactRootContainer=l,t[Or]=l.current,_c(t.nodeType===8?t.parentNode:t),No(function(){Of(e,l,n,i)}),l}function kf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tf(o);a.call(l)}}Of(e,o,t,r)}else o=zb(n,e,t,r,i);return tf(o)}OS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fl(e.pendingLanes);n!==0&&(q0(e,n|1),Zn(e,Ht()),!(lt&6)&&(Ka=Ht()+500,Gs()))}break;case 13:No(function(){var i=zr(t,1);if(i!==null){var r=Un();Vi(i,t,1,r)}}),Cg(t,1)}};K0=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=Un();Vi(e,t,134217728,n)}Cg(t,134217728)}};zS=function(t){if(t.tag===13){var e=Ds(t),n=zr(t,e);if(n!==null){var i=Un();Vi(n,t,e,i)}Cg(t,e)}};FS=function(){return xt};kS=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};$p=function(t,e,n){switch(e){case"input":if(Bp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rf(i);if(!r)throw Error(ae(90));gS(i),Bp(i,r)}}}break;case"textarea":vS(t,n);break;case"select":e=n.value,e!=null&&Na(t,!!n.multiple,e,!1)}};TS=wg;bS=No;var Fb={usingClientEntryPoint:!1,Events:[Uc,Ma,Rf,wS,ES,wg]},Ml={findFiberByHostInstance:co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kb={bundleType:Ml.bundleType,version:Ml.version,rendererPackageName:Ml.rendererPackageName,rendererConfig:Ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RS(t),t===null?null:t.stateNode},findFiberByHostInstance:Ml.findFiberByHostInstance||Ob,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Tf=au.inject(kb),sr=au}catch{}}ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fb;ai.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(ae(200));return Ub(t,e,null,n)};ai.createRoot=function(t,e){if(!Pg(t))throw Error(ae(299));var n=!1,i="",r=aw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ag(t,1,!1,null,null,n,!1,i,r),t[Or]=e.current,_c(t.nodeType===8?t.parentNode:t),new Rg(e)};ai.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=RS(e),t=t===null?null:t.stateNode,t};ai.flushSync=function(t){return No(t)};ai.hydrate=function(t,e,n){if(!Ff(e))throw Error(ae(200));return kf(null,t,e,!0,n)};ai.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=aw;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ow(e,null,t,1,n??null,r,!1,s,o),t[Or]=e.current,_c(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zf(e)};ai.render=function(t,e,n){if(!Ff(e))throw Error(ae(200));return kf(null,t,e,!1,n)};ai.unmountComponentAtNode=function(t){if(!Ff(t))throw Error(ae(40));return t._reactRootContainer?(No(function(){kf(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};ai.unstable_batchedUpdates=wg;ai.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ff(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return kf(t,e,n,!1,i)};ai.version="18.3.1-next-f1338f8080-20240426";function lw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lw)}catch(t){console.error(t)}}lw(),lS.exports=ai;var Bb=lS.exports,cw,Rv=Bb;cw=Rv.createRoot,Rv.hydrateRoot;const E=(t,e)=>({through:[t,e]}),M=(t,e,n=0)=>({w:[t,e,n]}),ze=t=>({fn:t}),fe=(t,e,n={})=>({kind:"fold",line:t,move:e,dir:"valley",...n}),Je=(t,e,n={})=>({kind:"fold",line:t,move:e,dir:"mountain",...n}),Ie=(t,e,n={})=>({kind:"crease",line:t,move:e,...n}),N=(t,e,n={})=>({line:t,move:e,...n}),gt=(t,e=[0],n,i)=>({kind:"mech",moves:t,drive:e,samples:n,solveEnd:i}),oe=(...t)=>({kind:"mech",moves:t,drive:t.map((e,n)=>n)}),Dg=(t,e,n={})=>({kind:"cut",from:t,to:e,...n}),Ke={kind:"turn"},Qe=(t,e="z")=>({kind:"rotate",deg:t,axis:e}),mi=t=>[1-t[0],1-t[1]],uw=t=>[t[1],t[0]],Cn=t=>t*Math.PI/180,Bt=Math.SQRT1_2,Ln=Bt-.5,pn=[.5,Bt],Eh=[0,Ln],wd=[1,Ln],ar=[.5,Ln],So=[.5,2*Bt-Ln],lu=[.25,(Bt+Ln)/2],cu=[.75,(Bt+Ln)/2],bc=t=>t[0]<.5,nf=t=>t[0]>.5,Wo=[0,-1,0],Vb=gt([N(E(pn,Eh),[.5,Ln+.1],{all:!0,has:"!F",hint:!1}),N(E(pn,ar),[.7,Ln+.1],{all:!0,has:"!F",dir:"mountain",parent:0}),N(E(pn,ar),[.7,2*Bt-Ln-.1],{all:!0,has:"F"})]),Ed=ze(t=>t(ar).lerp(t(So),.5)),Pv=ze(t=>t(So).lerp(t(ar),.2)),Hb=gt([N(E(pn,ar),Ed,{all:!0,region:bc,hint:!1}),N(E(pn,Ed),Pv,{all:!0,region:bc,dir:"mountain",parent:0}),N(E(pn,Ed),Pv,{all:!0,region:nf})]),Gb=t=>gt([N(E(lu,cu),So,{all:!0,has:"F !T",normal:Wo,angle:t}),N(E(lu,So),pn,{all:!0,has:"F T",region:bc,normal:Wo,parent:0,angle:t,hint:!1}),N(E(cu,So),pn,{all:!0,has:"F T",region:nf,normal:Wo,parent:0,angle:t,tie:{to:1,k:1},hint:!1}),N(E(lu,cu),ar,{all:!0,has:"!F !T",normal:Wo,angle:t,tie:{to:0,k:-1}}),N(E(lu,ar),pn,{all:!0,has:"!F T",region:bc,normal:Wo,parent:3,angle:t,tie:{to:1,k:-1},hint:!1}),N(E(cu,ar),pn,{all:!0,has:"!F T",region:nf,normal:Wo,parent:3,angle:t,tie:{to:1,k:-1},hint:!1})],[0],60,!0),Wb={id:"boat",name:"纸船",cat:"玩具和交通",level:2,paperName:"群青",paper:{w:1,h:2*Bt},blurb:"先折成一顶帽子，再翻两次，最后一拉就变成船。",techs:["折痕","撑开压平"],thumbView:{az:-24,el:24},steps:[{text:"用一张长方形的纸（A4），白色的一面朝上、竖着放。把上边向下对折。",ops:[fe(E([0,Bt],[1,Bt]),[.5,1.2],{tag:"F"})]},{text:"左右对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([.5,0],pn),[.2,.3],{all:!0})]},{text:"把上面两个角折到中线，下面留出一条边。",ops:[oe(N(E(pn,Eh),[.05,Bt-.05],{all:!0,tag:"F"}),N(E(pn,wd),[.95,Bt-.05],{all:!0,tag:"F"}))]},{text:"把下面那条边前面的一层向上折，压在两个三角上。",ops:[fe(E([0,2*Bt-Ln],[1,2*Bt-Ln]),[.5,2*Bt-.05],{region:t=>t[1]>Bt})]},{text:"这条边两头多出来的小角，沿三角的斜边向后折。",ops:[oe(N(E(pn,Eh),[.03,2*Bt-.03],{region:t=>t[1]>Bt,dir:"mountain",tag:"-F"}),N(E(pn,wd),[.97,2*Bt-.03],{region:t=>t[1]>Bt,dir:"mountain",tag:"-F"}))]},{text:"翻面。",ops:[Ke]},{text:"这一面的边也向上折。",ops:[fe(E([0,Ln],[1,Ln]),[.5,.05],{region:t=>t[1]<Bt})]},{text:"两头的小角同样向后折。现在是一顶帽子。",captions:[{at:0,text:"两头的小角同样向后折。"},{at:.85,text:"现在是一顶帽子。"}],ops:[oe(N(E(pn,Eh),[.03,.03],{region:t=>t[1]<Bt,dir:"mountain",tag:"F"}),N(E(pn,wd),[.97,.03],{region:t=>t[1]<Bt,dir:"mountain",tag:"F"}))]},{text:"手指从下面伸进帽子里把它撑开，让左右两个角碰到一起，然后压平。帽子变成了一个菱形。",tech:"撑开压平",ops:[Vb],inset:{az:0,el:86,label:"俯视"},captions:[{at:0,text:"手指从下面伸进帽子里，把它撑开"},{at:.5,pause:1100,text:"左右两个角正在向中间靠"},{at:.86,text:"两个角碰到一起，朝另一个方向压平"}]},{text:"转一下，让开口的一角朝向自己。",ops:[Qe(-45)]},{text:"把下角前面的一层向上折到上角。",ops:[fe(E(ar,So),[.95,Ln+.02],{all:!0,region:nf,tag:"T"})]},{text:"翻面。",ops:[Ke]},{text:"这一面的下角也向上折。现在是一个三角形。",captions:[{at:0,text:"这一面的下角也向上折。"},{at:.85,text:"现在是一个三角形。"}],ops:[fe(E(ar,So),[.05,Ln+.02],{all:!0,region:bc,tag:"T"})]},{text:"再从下面撑开，让左右两个角碰到一起，压平成一个小菱形。",tech:"撑开压平",ops:[Hb],inset:{az:0,el:86,label:"俯视"},captions:[{at:0,text:"和刚才一样，从下面撑开"},{at:.5,pause:900,text:"左右两个角向中间靠"},{at:.86,text:"压平成小菱形"}]},{text:"转一下，让能分开的两个尖角朝上。",ops:[Qe(45)]},{text:"把它立起来。",ops:[Qe(90,"x")],view:{az:-20,el:20}},{text:"捏住上面左右两个尖角，慢慢向两边拉开。前后两片会绕着底边向上翻，变成船舷；中间立着的三角是帆。完成！",ops:[Gb(146)],view:{az:-24,el:24,zoom:.8},inset:{az:0,el:82,label:"俯视"},captions:[{at:0,text:"捏住上面两个尖角，向两边拉"},{at:.5,pause:1100,text:"船舷绕着底边向上翻，船头船尾自己展开"},{at:.9,text:"拉到底，把船底整理平"}]}]},jb=Object.freeze(Object.defineProperty({__proto__:null,default:Wb},Symbol.toStringTag,{value:"Module"})),cs=1.4,$r=1,Yr=.09,jo=cs/2,Xb={id:"book",name:"书",cat:"器物和盒子",level:1,paperName:"朱红",paper:{w:cs,h:$r},blurb:"翻开的一本书，白色的书页，红色的封面，当中立着书脊。",techs:[],view:{az:0,el:62},thumbView:{az:0,el:60},steps:[{text:"白色的一面朝上，长方形的纸横着放。把左边折进来一条窄边。",ops:[fe(E([Yr,0],[Yr,$r]),[.03,.5])]},{text:"右边也折进来一条同样宽的窄边。",ops:[fe(E([cs-Yr,0],[cs-Yr,$r]),[cs-.03,.5])]},{text:"上边折进来一条窄边，下边也折进来。四条窄边围成封面的边。",ops:[fe(E([0,$r-Yr],[cs,$r-Yr]),[jo,$r-.03],{all:!0}),fe(E([0,Yr],[cs,Yr]),[jo,.03],{all:!0})]},{text:"沿中线把两页同时向上立起来一点，中线是书脊。完成！像一本摊开的书。",captions:[{at:0,text:"沿中线把两页同时向上立起来一点。"},{at:.85,text:"完成！中线是书脊。"}],ops:[oe(N(E([jo,0],[jo,$r]),[.3,.5],{all:!0,dir:"valley",angle:28}),N(E([jo,0],[jo,$r]),[cs-.3,.5],{all:!0,dir:"valley",angle:28}))],view:{az:0,el:28}}]},$b=Object.freeze(Object.defineProperty({__proto__:null,default:Xb},Symbol.toStringTag,{value:"Module"})),Yb={id:"burger",name:"汉堡",cat:"花草和节日",level:1,paperName:"茶",blurb:"圆圆的面包盖，中间夹着一层白色的馅，底下还有一片面包。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。把上边向下折一大条，露出来的有色面是上面的面包。",ops:[fe(E([0,.75],[1,.75]),[.5,.95],{all:!0})]},{text:"把下边向上折一条，这是下面的面包。两片面包中间露出来的白色，是夹在里面的生菜和奶酪。",ops:[fe(E([0,.2],[1,.2]),[.5,.05],{all:!0})]},{text:"把上面面包的左右两个角向后折掉一大块，折线是斜的，面包盖有了圆圆的肩膀。",ops:[oe(N(E(M(-.5,.02),M(-.2,.25)),M(-.49,.24),{all:!0,dir:"mountain"}),N(E(M(.5,.02),M(.2,.25)),M(.49,.24),{all:!0,dir:"mountain"}))]},{text:"再把面包盖上面的两个角向后折掉一点点，盖子就圆鼓鼓的了。",ops:[oe(N(E(M(-.3,.173),M(-.1,.25)),M(-.2,.249),{all:!0,dir:"mountain"}),N(E(M(.3,.173),M(.1,.25)),M(.2,.249),{all:!0,dir:"mountain"}))]},{text:"最后把下面面包的两个下角向后折一点点。完成！上面是面包盖，中间是白色的夹心，下面是底座。",captions:[{at:0,text:"把下面面包的两个下角向后折一点点。"},{at:.85,text:"完成！面包盖、夹心、底座，一个汉堡。"}],ops:[oe(N(E(M(-.5,-.2),M(-.4,-.3)),M(-.49,-.29),{all:!0,dir:"mountain"}),N(E(M(.5,-.2),M(.4,-.3)),M(.49,-.29),{all:!0,dir:"mountain"}))]}]},qb=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),wl=[.5,.5],Io=1e-9,Td=t=>t[1]>t[0]-Io&&t[0]+t[1]>1-Io,Dv=t=>t[0]>t[1]-Io&&t[0]+t[1]>1-Io,Lv=t=>t[1]>t[0]-Io&&t[0]+t[1]<1+Io,Nv=t=>t[1]>.5-Io,Iv=(t,e)=>n=>t(n)||e(n),uu=38*Math.PI/180,Kb=gt([N(E(wl,[1,0]),[.9,.3],{dir:"valley",region:Iv(Dv,Td)}),N(E(wl,[1,.5]),[.9,.7],{dir:"mountain",parent:0,region:Iv(Dv,Td)}),N(E(wl,[1,1]),[.5,.9],{dir:"valley",parent:1,region:Td}),N(E(wl,[0,0]),[.1,.3],{dir:"valley",region:Lv,tie:{to:0,k:1}}),N(E(wl,[0,.5]),[.1,.7],{dir:"mountain",parent:3,region:Lv,tie:{to:1,k:1}})]),Zb={id:"butterfly",name:"蝴蝶",cat:"动物",level:2,paperName:"杏黄",colorUp:!0,blurb:"上面两片大翅膀，下面两片小翅膀，翅膀微微翘起。",techs:["折痕","收拢"],view:{az:0,el:70},steps:[{text:"有颜色的一面朝上。上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,.5],[1,.5]),[.5,1])]},{text:"左右对折，压出折痕后打开。",ops:[Ie(E([.5,0],[.5,1]),[1,.5])]},{text:"翻面，白色的一面朝上。",ops:[Ke]},{text:"沿对角线对折，压出折痕后打开。",ops:[Ie(E([0,0],[1,1]),[0,1])]},{text:"另一条对角线也同样折出折痕。",ops:[Ie(E([1,0],[0,1]),[1,1])]},{text:"捏住左右两边的中点向里推，上半张沿横折痕翻下来，压平成一个三角形。这叫“三角基本形”。",tech:"收拢",ops:[Kb],inset:{el:86,az:0,label:"俯视"},captions:[{at:0,text:"捏住左右两边的中点，向里推"},{at:.5,pause:1100,text:"两边收进去，上半张翻下来"},{at:.86,text:"压平成一个三角形"}]},{text:"把最上面一层的左右两个角斜着向上翻，折线从底边中点出发，角尖翻到顶角的两旁。",ops:[oe(N(E(M(0,-.5),M(Math.cos(uu),-.5+Math.sin(uu))),M(.45,-.48),{all:!0,region:Nv}),N(E(M(0,-.5),M(-Math.cos(uu),-.5+Math.sin(uu))),M(-.45,-.48),{all:!0,region:Nv}))]},{text:"把它倒过来：后面大三角的两个角在上面，是上翅；刚才翻上去的两个角朝下，是下翅。",ops:[Qe(180)]},{text:"沿中线把左右两边稍微向上折起，翅膀就立起来了。完成！中间细细的一条是身体。",captions:[{at:0,text:"沿中线把左右两边稍微向上折起。"},{at:.85,text:"完成！中间细细的一条是身体。"}],ops:[oe(N(E(M(0,-1),M(0,1)),M(.4,.4),{all:!0,angle:25}),N(E(M(0,-1),M(0,1)),M(-.4,.4),{all:!0,angle:25}))],view:{az:0,el:55}}],thumbView:{az:0,el:60}},Qb=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lg="170",ka={ROTATE:0,DOLLY:1,PAN:2},Ra={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jb=0,Uv=1,eA=2,Ng=1,tA=2,xr=3,kr=0,bn=1,Ii=2,lr=0,Ba=1,Ov=2,zv=3,Fv=4,hw=5,so=100,nA=101,iA=102,rA=103,sA=104,bm=200,fw=201,dw=202,oA=203,Am=204,Cm=205,aA=206,lA=207,cA=208,uA=209,hA=210,fA=211,dA=212,pA=213,mA=214,Rm=0,Pm=1,Dm=2,Za=3,Lm=4,Nm=5,Im=6,Um=7,pw=0,gA=1,_A=2,Ns=0,vA=1,xA=2,yA=3,SA=4,MA=5,wA=6,mw=7,gw=300,Qa=301,Ja=302,Om=303,zm=304,Bf=306,Ac=1e3,fo=1001,Fm=1002,In=1003,EA=1004,hu=1005,ir=1006,bd=1007,po=1008,Br=1009,_w=1010,vw=1011,Cc=1012,Ig=1013,Uo=1014,rr=1015,zc=1016,Ug=1017,Og=1018,el=1020,xw=35902,yw=1021,Sw=1022,Fi=1023,Mw=1024,ww=1025,Va=1026,tl=1027,Ew=1028,zg=1029,Tw=1030,Fg=1031,kg=1033,Th=33776,bh=33777,Ah=33778,Ch=33779,km=35840,Bm=35841,Vm=35842,Hm=35843,Gm=36196,Wm=37492,jm=37496,Xm=37808,$m=37809,Ym=37810,qm=37811,Km=37812,Zm=37813,Qm=37814,Jm=37815,e0=37816,t0=37817,n0=37818,i0=37819,r0=37820,s0=37821,Rh=36492,o0=36494,a0=36495,bw=36283,l0=36284,c0=36285,u0=36286,TA=3200,bA=3201,Aw=0,AA=1,vs="",Gn="srgb",cl="srgb-linear",Vf="linear",wt="srgb",Xo=7680,kv=519,CA=512,RA=513,PA=514,Cw=515,DA=516,LA=517,NA=518,IA=519,h0=35044,Bv="300 es",Rr=2e3,rf=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vv=1234567;const nc=Math.PI/180,nl=180/Math.PI;function Dr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[t&255]+yn[t>>8&255]+yn[t>>16&255]+yn[t>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Bg(t,e){return(t%e+e)%e}function UA(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function OA(t,e,n){return t!==e?(n-t)/(e-t):0}function ic(t,e,n){return(1-n)*t+n*e}function zA(t,e,n,i){return ic(t,e,1-Math.exp(-n*i))}function FA(t,e=1){return e-Math.abs(Bg(t,e*2)-e)}function kA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function BA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function VA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function HA(t,e){return t+Math.random()*(e-t)}function GA(t){return t*(.5-Math.random())}function WA(t){t!==void 0&&(Vv=t);let e=Vv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jA(t){return t*nc}function XA(t){return t*nl}function $A(t){return(t&t-1)===0&&t!==0}function YA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function qA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function KA(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rw={DEG2RAD:nc,RAD2DEG:nl,generateUUID:Dr,clamp:qt,euclideanModulo:Bg,mapLinear:UA,inverseLerp:OA,lerp:ic,damp:zA,pingpong:FA,smoothstep:kA,smootherstep:BA,randInt:VA,randFloat:HA,randFloatSpread:GA,seededRandom:WA,degToRad:jA,radToDeg:XA,isPowerOfTwo:$A,ceilPowerOfTwo:YA,floorPowerOfTwo:qA,setQuaternionFromProperEuler:KA,normalize:vt,denormalize:Ui};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],v=r[0],g=r[3],f=r[6],x=r[1],_=r[4],y=r[7],P=r[2],D=r[5],A=r[8];return s[0]=o*v+a*x+l*P,s[3]=o*g+a*_+l*D,s[6]=o*f+a*y+l*A,s[1]=c*v+h*x+u*P,s[4]=c*g+h*_+u*D,s[7]=c*f+h*y+u*A,s[2]=d*v+p*x+m*P,s[5]=d*g+p*_+m*D,s[8]=d*f+p*y+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,m=n*u+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ad.makeScale(e,n)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new qe;function Pw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZA(){const t=sf("canvas");return t.style.display="block",t}const Hv={};function Bl(t){t in Hv||(Hv[t]=!0,console.warn(t))}function QA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function JA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===wt&&(t.r=Lr(t.r),t.g=Lr(t.g),t.b=Lr(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===wt&&(t.r=Ha(t.r),t.g=Ha(t.g),t.b=Ha(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===vs?Vf:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ha(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Gv=[.64,.33,.3,.6,.15,.06],Wv=[.2126,.7152,.0722],jv=[.3127,.329],Xv=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[cl]:{primaries:Gv,whitePoint:jv,transfer:Vf,toXYZ:Xv,fromXYZ:$v,luminanceCoefficients:Wv,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:Gv,whitePoint:jv,transfer:wt,toXYZ:Xv,fromXYZ:$v,luminanceCoefficients:Wv,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let $o;class tC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$o===void 0&&($o=sf("canvas")),$o.width=e.width,$o.height=e.height;const i=$o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$o}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Lr(n[i]/255)*255):n[i]=Lr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nC=0;class Dw{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cd(r[o].image)):s.push(Cd(r[o]))}else s=Cd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iC=0;class On extends Bo{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,i=fo,r=fo,s=ir,o=po,a=Fi,l=Br,c=On.DEFAULT_ANISOTROPY,h=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Dr(),this.name="",this.source=new Dw(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case fo:e.x=e.x<0?0:1;break;case Fm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case fo:e.y=e.y<0?0:1;break;case Fm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=gw;On.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,P=(f+1)/2,D=(h+d)/4,A=(u+v)/4,R=(m+g)/4;return _>y&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=D/i,s=A/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=D/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rC extends Bo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ir,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dw(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends rC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lw extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sC extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(u!==v||l!==d||c!==p||h!==m){let g=1-a;const f=l*d+c*p+h*m+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const P=Math.sqrt(_),D=Math.atan2(P,f*x);g=Math.sin(g*D)/P,a=Math.sin(a*D)/P}const y=a*x;if(l=l*g+d*y,c=c*g+p*y,h=h*g+m*y,u=u*g+v*y,g===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+h*u+l*p-c*d,e[n+1]=l*m+h*d+c*u-a*p,e[n+2]=c*m+h*p+a*d-l*u,e[n+3]=h*m-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new I,Yv=new Os;class Ws{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fu.copy(i.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),du.subVectors(this.max,El),Yo.subVectors(e.a,El),qo.subVectors(e.b,El),Ko.subVectors(e.c,El),qr.subVectors(qo,Yo),Kr.subVectors(Ko,qo),Xs.subVectors(Yo,Ko);let n=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-Xs.z,Xs.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,Xs.z,0,-Xs.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-Xs.y,Xs.x,0];return!Pd(n,Yo,qo,Ko,du)||(n=[1,0,0,0,1,0,0,0,1],!Pd(n,Yo,qo,Ko,du))?!1:(pu.crossVectors(qr,Kr),n=[pu.x,pu.y,pu.z],Pd(n,Yo,qo,Ko,du))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dr=[new I,new I,new I,new I,new I,new I,new I,new I],bi=new I,fu=new Ws,Yo=new I,qo=new I,Ko=new I,qr=new I,Kr=new I,Xs=new I,El=new I,du=new I,pu=new I,$s=new I;function Pd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$s.fromArray(t,s);const a=r.x*Math.abs($s.x)+r.y*Math.abs($s.y)+r.z*Math.abs($s.z),l=e.dot($s),c=n.dot($s),h=i.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const oC=new Ws,Tl=new I,Dd=new I;class Fc{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const n=Tl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Tl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Dd)),this.expandByPoint(Tl.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pr=new I,Ld=new I,mu=new I,Zr=new I,Nd=new I,gu=new I,Id=new I;class Nw{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,n),pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ld.copy(e).add(n).multiplyScalar(.5),mu.copy(n).sub(e).normalize(),Zr.copy(this.origin).sub(Ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(mu),a=Zr.dot(this.direction),l=-Zr.dot(mu),c=Zr.lengthSq(),h=Math.abs(1-o*o);let u,d,p,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ld).addScaledVector(mu,d),p}intersectSphere(e,n){pr.subVectors(e.center,this.origin);const i=pr.dot(this.direction),r=pr.dot(pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,n,i,r,s){Nd.subVectors(n,e),gu.subVectors(i,e),Id.crossVectors(Nd,gu);let o=this.direction.dot(Id),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=a*this.direction.dot(gu.crossVectors(Zr,gu));if(l<0)return null;const c=a*this.direction.dot(Nd.cross(Zr));if(c<0||l+c>o)return null;const h=-a*Zr.dot(Id);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,h,u,d,p,m,v,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,u,d,p,m,v,g)}set(e,n,i,r,s,o,a,l,c,h,u,d,p,m,v,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),o=1/Zo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,m=a*h,v=a*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,m=c*h,v=c*u;n[0]=d+v*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=p*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,m=c*h,v=c*u;n[0]=d-v*a,n[4]=-o*u,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*h,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,m=a*h,v=a*u;n[0]=l*h,n[4]=m*c-p,n[8]=d*c+v,n[1]=l*u,n[5]=v*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*h,n[4]=v-d*u,n[8]=m*u+p,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*u+m,n[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+v,n[5]=o*h,n[9]=p*u-m,n[2]=m*u-p,n[6]=a*h,n[10]=v*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aC,e,lC)}lookAt(e,n,i){const r=this.elements;return Jn.subVectors(e,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Qr.crossVectors(i,Jn),Qr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Qr.crossVectors(i,Jn)),Qr.normalize(),_u.crossVectors(Jn,Qr),r[0]=Qr.x,r[4]=_u.x,r[8]=Jn.x,r[1]=Qr.y,r[5]=_u.y,r[9]=Jn.y,r[2]=Qr.z,r[6]=_u.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],v=i[6],g=i[10],f=i[14],x=i[3],_=i[7],y=i[11],P=i[15],D=r[0],A=r[4],R=r[8],T=r[12],S=r[1],C=r[5],z=r[9],F=r[13],j=r[2],Q=r[6],k=r[10],X=r[14],O=r[3],$=r[7],J=r[11],ce=r[15];return s[0]=o*D+a*S+l*j+c*O,s[4]=o*A+a*C+l*Q+c*$,s[8]=o*R+a*z+l*k+c*J,s[12]=o*T+a*F+l*X+c*ce,s[1]=h*D+u*S+d*j+p*O,s[5]=h*A+u*C+d*Q+p*$,s[9]=h*R+u*z+d*k+p*J,s[13]=h*T+u*F+d*X+p*ce,s[2]=m*D+v*S+g*j+f*O,s[6]=m*A+v*C+g*Q+f*$,s[10]=m*R+v*z+g*k+f*J,s[14]=m*T+v*F+g*X+f*ce,s[3]=x*D+_*S+y*j+P*O,s[7]=x*A+_*C+y*Q+P*$,s[11]=x*R+_*z+y*k+P*J,s[15]=x*T+_*F+y*X+P*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],v=e[7],g=e[11],f=e[15];return m*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+n*c*u-n*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-r*a*h-n*l*u+n*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],x=u*g*c-v*d*c+v*l*p-a*g*p-u*l*f+a*d*f,_=m*d*c-h*g*c-m*l*p+o*g*p+h*l*f-o*d*f,y=h*v*c-m*u*c+m*a*p-o*v*p-h*a*f+o*u*f,P=m*u*l-h*v*l-m*a*d+o*v*d+h*a*g-o*u*g,D=n*x+i*_+r*y+s*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=x*A,e[1]=(v*d*s-u*g*s-v*r*p+i*g*p+u*r*f-i*d*f)*A,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*f+i*l*f)*A,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(h*g*s-m*d*s+m*r*p-n*g*p-h*r*f+n*d*f)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(m*u*s-h*v*s-m*i*p+n*v*p+h*i*f-n*u*f)*A,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*f+n*a*f)*A,e[11]=(h*a*s-o*u*s-h*i*c+n*u*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(h*v*r-m*u*r+m*i*d-n*v*d-h*i*g+n*u*g)*A,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*g-n*a*g)*A,e[15]=(o*u*r-h*a*r+h*i*l-n*u*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,m=s*u,v=o*h,g=o*u,f=a*u,x=l*c,_=l*h,y=l*u,P=i.x,D=i.y,A=i.z;return r[0]=(1-(v+f))*P,r[1]=(p+y)*P,r[2]=(m-_)*P,r[3]=0,r[4]=(p-y)*D,r[5]=(1-(d+f))*D,r[6]=(g+x)*D,r[7]=0,r[8]=(m+_)*A,r[9]=(g-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),a=Zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ai.copy(this);const c=1/s,h=1/o,u=1/a;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,n.setFromRotationMatrix(Ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Rr){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r);let p,m;if(a===Rr)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===rf)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Rr){const l=this.elements,c=1/(n-e),h=1/(i-r),u=1/(o-s),d=(n+e)*c,p=(i+r)*h;let m,v;if(a===Rr)m=(o+s)*u,v=-2*u;else if(a===rf)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zo=new I,Ai=new ft,aC=new I(0,0,0),lC=new I(1,1,1),Qr=new I,_u=new I,Jn=new I,qv=new ft,Kv=new Os;class cr{constructor(e=0,n=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Iw{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cC=0;const Zv=new I,Qo=new Os,mr=new ft,vu=new I,bl=new I,uC=new I,hC=new Os,Qv=new I(1,0,0),Jv=new I(0,1,0),ex=new I(0,0,1),tx={type:"added"},fC={type:"removed"},Jo={type:"childadded",child:null},Ud={type:"childremoved",child:null};class Jt extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new I,n=new cr,i=new Os,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis(ex,e)}translateOnAxis(e,n){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis(ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vu.copy(e):vu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(bl,vu,this.up):mr.lookAt(vu,bl,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(mr),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tx),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fC),Ud.child=e,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tx),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,uC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,hC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new I,gr=new I,Od=new I,_r=new I,ea=new I,ta=new I,nx=new I,zd=new I,Fd=new I,kd=new I,Bd=new at,Vd=new at,Hd=new at;class Oi{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ci.subVectors(e,n),r.cross(Ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ci.subVectors(r,n),gr.subVectors(i,n),Od.subVectors(e,n);const o=Ci.dot(Ci),a=Ci.dot(gr),l=Ci.dot(Od),c=gr.dot(gr),h=gr.dot(Od),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Bd.setScalar(0),Vd.setScalar(0),Hd.setScalar(0),Bd.fromBufferAttribute(e,n),Vd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bd,s.x),o.addScaledVector(Vd,s.y),o.addScaledVector(Hd,s.z),o}static isFrontFacing(e,n,i,r){return Ci.subVectors(i,n),gr.subVectors(e,n),Ci.cross(gr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ci.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),zd.subVectors(e,i);const l=ea.dot(zd),c=ta.dot(zd);if(l<=0&&c<=0)return n.copy(i);Fd.subVectors(e,r);const h=ea.dot(Fd),u=ta.dot(Fd);if(h>=0&&u<=h)return n.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ea,o);kd.subVectors(e,s);const p=ea.dot(kd),m=ta.dot(kd);if(m>=0&&p<=m)return n.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(ta,a);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return nx.subVectors(s,r),a=(u-h)/(u-h+(p-m)),n.copy(r).addScaledVector(nx,a);const f=1/(g+v+d);return o=v*f,a=d*f,n.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Bg(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gd(o,s,e+1/3),this.g=Gd(o,s,e),this.b=Gd(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Uw[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return ot.fromWorkingColorSpace(Sn.copy(this),e),Math.round(qt(Sn.r*255,0,255))*65536+Math.round(qt(Sn.g*255,0,255))*256+Math.round(qt(Sn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Gn){ot.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+n,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Jr),e.getHSL(xu);const i=ic(Jr.h,xu.h,n),r=ic(Jr.s,xu.s,n),s=ic(Jr.l,xu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new rt;rt.NAMES=Uw;let dC=0;class ul extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=Dr(),this.name="",this.blending=Ba,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Am,this.blendDst=Cm,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Am&&(i.blendSrc=this.blendSrc),this.blendDst!==Cm&&(i.blendDst=this.blendDst),this.blendEquation!==so&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rc extends ul{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=pw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new I,yu=new Me;class Hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=h0,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yu.fromBufferAttribute(this,n),yu.applyMatrix3(e),this.setXY(n,yu.x,yu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ui(n,this.array)),n}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ui(n,this.array)),n}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ui(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ui(n,this.array)),n}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h0&&(e.usage=this.usage),e}}class Ow extends Hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zw extends Hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends Hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pC=0;const ui=new ft,Wd=new Jt,na=new I,ei=new Ws,Al=new Ws,nn=new I;class oi extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pw(e)?zw:Ow)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,i){return ui.makeTranslation(e,n,i),this.applyMatrix4(ui),this}scale(e,n,i){return ui.makeScale(e,n,i),this.applyMatrix4(ui),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(ei.min,Al.min),ei.expandByPoint(nn),nn.addVectors(ei.max,Al.max),ei.expandByPoint(nn)):(ei.expandByPoint(Al.min),ei.expandByPoint(Al.max))}ei.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(na.fromBufferAttribute(e,c),nn.add(na)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new Me,p=new Me,m=new Me,v=new I,g=new I;function f(R,T,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(d),m.sub(d);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(v),a[T].add(v),a[S].add(v),l[R].add(g),l[T].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,T=x.length;R<T;++R){const S=x[R],C=S.start,z=S.count;for(let F=C,j=C+z;F<j;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new I,y=new I,P=new I,D=new I;function A(R){P.fromBufferAttribute(r,R),D.copy(P);const T=a[R];_.copy(T),_.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(D,T);const C=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,T=x.length;R<T;++R){const S=x[R],C=S.start,z=S.count;for(let F=C,j=C+z;F<j;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Hi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ix=new ft,Ys=new Nw,Su=new Fc,rx=new I,Mu=new I,wu=new I,Eu=new I,jd=new I,Tu=new I,sx=new I,bu=new I;class dt extends Jt{constructor(e=new oi,n=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(jd.fromBufferAttribute(u,e),o?Tu.addScaledVector(jd,h):Tu.addScaledVector(jd.sub(n),h))}n.add(Tu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Su.copy(i.boundingSphere),Su.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Su.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Su,rx)===null||Ys.origin.distanceToSquared(rx)>(e.far-e.near)**2))&&(ix.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(ix),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ys)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,P=_;y<P;y+=3){const D=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);r=Au(this,f,e,i,c,h,u,D,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=Au(this,o,e,i,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,P=_;y<P;y+=3){const D=y,A=y+1,R=y+2;r=Au(this,f,e,i,c,h,u,D,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=g,_=g+1,y=g+2;r=Au(this,o,e,i,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function mC(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;bu.copy(a),bu.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bu);return c<n.near||c>n.far?null:{distance:c,point:bu.clone(),object:t}}function Au(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Mu),t.getVertexPosition(l,wu),t.getVertexPosition(c,Eu);const h=mC(t,e,n,i,Mu,wu,Eu,sx);if(h){const u=new I;Oi.getBarycoord(sx,Mu,wu,Eu,u),r&&(h.uv=Oi.getInterpolatedAttribute(r,a,l,c,u,new Me)),s&&(h.uv1=Oi.getInterpolatedAttribute(s,a,l,c,u,new Me)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Oi.getNormal(Mu,wu,Eu,d.normal),h.face=d,h.barycoord=u}return h}class hl extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function m(v,g,f,x,_,y,P,D,A,R,T){const S=y/A,C=P/R,z=y/2,F=P/2,j=D/2,Q=A+1,k=R+1;let X=0,O=0;const $=new I;for(let J=0;J<k;J++){const ce=J*C-F;for(let pe=0;pe<Q;pe++){const We=pe*S-z;$[v]=We*x,$[g]=ce*_,$[f]=j,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[f]=D>0?1:-1,h.push($.x,$.y,$.z),u.push(pe/A),u.push(1-J/R),X+=1}}for(let J=0;J<R;J++)for(let ce=0;ce<A;ce++){const pe=d+ce+Q*J,We=d+ce+Q*(J+1),ee=d+(ce+1)+Q*(J+1),re=d+(ce+1)+Q*J;l.push(pe,We,re),l.push(We,ee,re),O+=6}a.addGroup(p,O,T),p+=O,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function il(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Pn(t){const e={};for(let n=0;n<t.length;n++){const i=il(t[n]);for(const r in i)e[r]=i[r]}return e}function gC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fw(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Vg={clone:il,merge:Pn};var _C=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ul{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_C,this.fragmentShader=vC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=il(e.uniforms),this.uniformsGroups=gC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kw extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Rr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new I,ox=new Me,ax=new Me;class Nn extends kw{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,n){return this.getViewBounds(e,ox,ax),n.subVectors(ax,ox)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ia=-90,ra=1;class xC extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(ia,ra,e,n);r.layers=this.layers,this.add(r);const s=new Nn(ia,ra,e,n);s.layers=this.layers,this.add(s);const o=new Nn(ia,ra,e,n);o.layers=this.layers,this.add(o);const a=new Nn(ia,ra,e,n);a.layers=this.layers,this.add(a);const l=new Nn(ia,ra,e,n);l.layers=this.layers,this.add(l);const c=new Nn(ia,ra,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Rr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Bw extends On{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Qa,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yC extends ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bw(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ir}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hl(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:il(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:lr});s.uniforms.tEquirect.value=n;const o=new dt(r,s),a=n.minFilter;return n.minFilter===po&&(n.minFilter=ir),new xC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Xd=new I,SC=new I,MC=new qe;class ds{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Xd.subVectors(i,n).cross(SC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Xd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MC.getNormalMatrix(e),r=this.coplanarPoint(Xd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Fc,Cu=new I;class Hg{constructor(e=new ds,n=new ds,i=new ds,r=new ds,s=new ds,o=new ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Rr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],v=r[10],g=r[11],f=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,g-p,y-f).normalize(),i[1].setComponents(l+s,d+c,g+p,y+f).normalize(),i[2].setComponents(l+o,d+h,g+m,y+x).normalize(),i[3].setComponents(l-o,d-h,g-m,y-x).normalize(),i[4].setComponents(l-a,d-u,g-v,y-_).normalize(),n===Rr)i[5].setComponents(l+a,d+u,g+v,y+_).normalize();else if(n===rf)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cu.x=r.normal.x>0?e.max.x:e.min.x,Cu.y=r.normal.y>0?e.max.y:e.min.y,Cu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vw(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wC(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],v=u[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const v=u[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Mo extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=n/l,p=[],m=[],v=[],g=[];for(let f=0;f<h;f++){const x=f*d-o;for(let _=0;_<c;_++){const y=_*u-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,y=x+c*(f+1),P=x+1+c*(f+1),D=x+1+c*f;p.push(_,y,D),p.push(y,P,D)}this.setIndex(p),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var EC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$C=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ER=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$R=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_P=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:EC,alphahash_pars_fragment:TC,alphamap_fragment:bC,alphamap_pars_fragment:AC,alphatest_fragment:CC,alphatest_pars_fragment:RC,aomap_fragment:PC,aomap_pars_fragment:DC,batching_pars_vertex:LC,batching_vertex:NC,begin_vertex:IC,beginnormal_vertex:UC,bsdfs:OC,iridescence_fragment:zC,bumpmap_pars_fragment:FC,clipping_planes_fragment:kC,clipping_planes_pars_fragment:BC,clipping_planes_pars_vertex:VC,clipping_planes_vertex:HC,color_fragment:GC,color_pars_fragment:WC,color_pars_vertex:jC,color_vertex:XC,common:$C,cube_uv_reflection_fragment:YC,defaultnormal_vertex:qC,displacementmap_pars_vertex:KC,displacementmap_vertex:ZC,emissivemap_fragment:QC,emissivemap_pars_fragment:JC,colorspace_fragment:eR,colorspace_pars_fragment:tR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:rR,envmap_pars_vertex:sR,envmap_physical_pars_fragment:gR,envmap_vertex:oR,fog_vertex:aR,fog_pars_vertex:lR,fog_fragment:cR,fog_pars_fragment:uR,gradientmap_pars_fragment:hR,lightmap_pars_fragment:fR,lights_lambert_fragment:dR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:_R,lights_toon_pars_fragment:vR,lights_phong_fragment:xR,lights_phong_pars_fragment:yR,lights_physical_fragment:SR,lights_physical_pars_fragment:MR,lights_fragment_begin:wR,lights_fragment_maps:ER,lights_fragment_end:TR,logdepthbuf_fragment:bR,logdepthbuf_pars_fragment:AR,logdepthbuf_pars_vertex:CR,logdepthbuf_vertex:RR,map_fragment:PR,map_pars_fragment:DR,map_particle_fragment:LR,map_particle_pars_fragment:NR,metalnessmap_fragment:IR,metalnessmap_pars_fragment:UR,morphinstance_vertex:OR,morphcolor_vertex:zR,morphnormal_vertex:FR,morphtarget_pars_vertex:kR,morphtarget_vertex:BR,normal_fragment_begin:VR,normal_fragment_maps:HR,normal_pars_fragment:GR,normal_pars_vertex:WR,normal_vertex:jR,normalmap_pars_fragment:XR,clearcoat_normal_fragment_begin:$R,clearcoat_normal_fragment_maps:YR,clearcoat_pars_fragment:qR,iridescence_pars_fragment:KR,opaque_fragment:ZR,packing:QR,premultiplied_alpha_fragment:JR,project_vertex:eP,dithering_fragment:tP,dithering_pars_fragment:nP,roughnessmap_fragment:iP,roughnessmap_pars_fragment:rP,shadowmap_pars_fragment:sP,shadowmap_pars_vertex:oP,shadowmap_vertex:aP,shadowmask_pars_fragment:lP,skinbase_vertex:cP,skinning_pars_vertex:uP,skinning_vertex:hP,skinnormal_vertex:fP,specularmap_fragment:dP,specularmap_pars_fragment:pP,tonemapping_fragment:mP,tonemapping_pars_fragment:gP,transmission_fragment:_P,transmission_pars_fragment:vP,uv_pars_fragment:xP,uv_pars_vertex:yP,uv_vertex:SP,worldpos_vertex:MP,background_vert:wP,background_frag:EP,backgroundCube_vert:TP,backgroundCube_frag:bP,cube_vert:AP,cube_frag:CP,depth_vert:RP,depth_frag:PP,distanceRGBA_vert:DP,distanceRGBA_frag:LP,equirect_vert:NP,equirect_frag:IP,linedashed_vert:UP,linedashed_frag:OP,meshbasic_vert:zP,meshbasic_frag:FP,meshlambert_vert:kP,meshlambert_frag:BP,meshmatcap_vert:VP,meshmatcap_frag:HP,meshnormal_vert:GP,meshnormal_frag:WP,meshphong_vert:jP,meshphong_frag:XP,meshphysical_vert:$P,meshphysical_frag:YP,meshtoon_vert:qP,meshtoon_frag:KP,points_vert:ZP,points_frag:QP,shadow_vert:JP,shadow_frag:e3,sprite_vert:t3,sprite_frag:n3},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},jn={basic:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Pn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Pn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Pn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Pn([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Pn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};jn.physical={uniforms:Pn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ru={r:0,b:0,g:0},Ks=new cr,i3=new ft;function r3(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function v(x){let _=!1;const y=m(x);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===Bf)?(h===void 0&&(h=new dt(new hl(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:il(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ks.copy(_.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i3.makeRotationFromEuler(Ks)),h.material.toneMapped=ot.getTransfer(y.colorSpace)!==wt,(u!==y||d!==y.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new Mo(2,2),new ii({name:"BackgroundMaterial",uniforms:il(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(Ru,Fw(t)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:g}}function s3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,C,z,F,j){let Q=!1;const k=u(F,z,C);s!==k&&(s=k,c(s.object)),Q=p(S,F,z,j),Q&&m(S,F,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(S,C,z,F),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function u(S,C,z){const F=z.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let Q=j[C.id];Q===void 0&&(Q={},j[C.id]=Q);let k=Q[F];return k===void 0&&(k=d(l()),Q[F]=k),k}function d(S){const C=[],z=[],F=[];for(let j=0;j<n;j++)C[j]=0,z[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,C,z,F){const j=s.attributes,Q=C.attributes;let k=0;const X=z.getAttributes();for(const O in X)if(X[O].location>=0){const J=j[O];let ce=Q[O];if(ce===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function m(S,C,z,F){const j={},Q=C.attributes;let k=0;const X=z.getAttributes();for(const O in X)if(X[O].location>=0){let J=Q[O];J===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),j[O]=ce,k++}s.attributes=j,s.attributesNum=k,s.index=F}function v(){const S=s.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function g(S){f(S,0)}function f(S,C){const z=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;z[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),j[S]!==C&&(t.vertexAttribDivisor(S,C),j[S]=C)}function x(){const S=s.newAttributes,C=s.enabledAttributes;for(let z=0,F=C.length;z<F;z++)C[z]!==S[z]&&(t.disableVertexAttribArray(z),C[z]=0)}function _(S,C,z,F,j,Q,k){k===!0?t.vertexAttribIPointer(S,C,z,j,Q):t.vertexAttribPointer(S,C,z,F,j,Q)}function y(S,C,z,F){v();const j=F.attributes,Q=z.getAttributes(),k=C.defaultAttributeValues;for(const X in Q){const O=Q[X];if(O.location>=0){let $=j[X];if($===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const J=$.normalized,ce=$.itemSize,pe=e.get($);if(pe===void 0)continue;const We=pe.buffer,ee=pe.type,re=pe.bytesPerElement,se=ee===t.INT||ee===t.UNSIGNED_INT||$.gpuType===Ig;if($.isInterleavedBufferAttribute){const le=$.data,be=le.stride,Fe=$.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<O.locationSize;Ve++)f(O.location+Ve,le.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<O.locationSize;Ve++)g(O.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ve=0;Ve<O.locationSize;Ve++)_(O.location+Ve,ce/O.locationSize,ee,J,be*re,(Fe+ce/O.locationSize*Ve)*re,se)}else{if($.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)f(O.location+le,$.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<O.locationSize;le++)g(O.location+le);t.bindBuffer(t.ARRAY_BUFFER,We);for(let le=0;le<O.locationSize;le++)_(O.location+le,ce/O.locationSize,ee,J,ce*re,ce/O.locationSize*le*re,se)}}else if(k!==void 0){const J=k[X];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(O.location,J);break;case 3:t.vertexAttrib3fv(O.location,J);break;case 4:t.vertexAttrib4fv(O.location,J);break;default:t.vertexAttrib1fv(O.location,J)}}}}x()}function P(){R();for(const S in i){const C=i[S];for(const z in C){const F=C[z];for(const j in F)h(F[j].object),delete F[j];delete C[z]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const z in C){const F=C[z];for(const j in F)h(F[j].object),delete F[j];delete C[z]}delete i[S.id]}function A(S){for(const C in i){const z=i[C];if(z[S.id]===void 0)continue;const F=z[S.id];for(const j in F)h(F[j].object),delete F[j];delete z[S.id]}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function o3(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];n.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function a3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Fi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===zc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Br&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rr&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:D}}function l3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ds,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,f=t.get(u);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,_=x*4;let y=f.clippingState||null;l.value=y,y=h(m,d,_,p);for(let P=0;P!==_;++P)y[P]=n[P];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function c3(t){let e=new WeakMap;function n(o,a){return a===Om?o.mapping=Qa:a===zm&&(o.mapping=Ja),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Om||a===zm)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yC(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class of extends kw{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Pa=4,lx=[.125,.215,.35,.446,.526,.582],oo=20,$d=new of,cx=new rt;let Yd=null,qd=0,Kd=0,Zd=!1;const io=(1+Math.sqrt(5))/2,sa=1/io,ux=[new I(-io,sa,0),new I(io,sa,0),new I(-sa,0,io),new I(sa,0,io),new I(0,io,-sa),new I(0,io,sa),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,qd,Kd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Pu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qa||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ir,minFilter:ir,generateMipmaps:!1,type:zc,format:Fi,colorSpace:cl,depthBuffer:!1},r=hx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hx(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u3(s)),this._blurMaterial=h3(s,e,n)}return r}_compileMaterial(e){const n=new dt(this._lodPlanes[0],e);this._renderer.compile(n,$d)}_sceneToCubeUV(e,n,i,r){const a=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cx),h.toneMapping=Ns,h.autoClear=!1;const p=new Rc({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),m=new dt(new hl,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(cx),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Pu(r,x*_,f>2?_:0,_,_),h.setRenderTarget(r),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qa||e.mapping===Ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$d)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ux[(r-s-1)%ux.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oo-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):oo;g>oo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${oo}`);const f=[];let x=0;for(let A=0;A<oo;++A){const R=A/v,T=Math.exp(-R*R/2);f.push(T),A===0?x+=T:A<g&&(x+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const y=this._sizeLods[r],P=3*y*(r>_-Pa?r-_+Pa:0),D=4*(this._cubeSize-y);Pu(n,P,D,3*y,2*y),l.setRenderTarget(n),l.render(u,$d)}}function u3(t){const e=[],n=[],i=[];let r=t;const s=t-Pa+1+lx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Pa?l=lx[o-t+Pa-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,v=3,g=2,f=1,x=new Float32Array(v*m*p),_=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,R=D>2?0:-1,T=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(T,v*m*D),_.set(d,g*m*D);const S=[D,D,D,D,D,D];y.set(S,f*m*D)}const P=new oi;P.setAttribute("position",new Hi(x,v)),P.setAttribute("uv",new Hi(_,g)),P.setAttribute("faceIndex",new Hi(y,f)),e.push(P),r>Pa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hx(t,e,n){const i=new ki(t,e,n);return i.texture.mapping=Bf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h3(t,e,n){const i=new Float32Array(oo),r=new I(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:oo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function fx(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function dx(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Gg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Om||l===zm,h=l===Qa||l===Ja;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new f0(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new f0(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function d3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function p3(t,e,n,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,f=v.length;g<f;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const m in p){const v=p[m];for(let g=0,f=v.length;g<f;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,m=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const P=x[_+0],D=x[_+1],A=x[_+2];d.push(P,D,D,A,A,P)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const P=_+0,D=_+1,A=_+2;d.push(P,D,D,A,A,P)}}else return;const g=new(Pw(d)?zw:Ow)(d,1);g.version=v;const f=s.get(u);f&&e.remove(f),s.set(u,g)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function m3(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,d*o,m),n.update(p,i,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];n.update(g,i,1)}function u(d,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,m);let f=0;for(let x=0;x<m;x++)f+=p[x]*v[x];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _3(t,e,n){const i=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let P=a.attributes.position.count*y,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*D*4*u),R=new Lw(A,P,D,u);R.type=rr,R.needsUpdate=!0;const T=y*4;for(let C=0;C<u;C++){const z=f[C],F=x[C],j=_[C],Q=P*D*4*C;for(let k=0;k<z.count;k++){const X=k*T;m===!0&&(r.fromBufferAttribute(z,k),A[Q+X+0]=r.x,A[Q+X+1]=r.y,A[Q+X+2]=r.z,A[Q+X+3]=0),v===!0&&(r.fromBufferAttribute(F,k),A[Q+X+4]=r.x,A[Q+X+5]=r.y,A[Q+X+6]=r.z,A[Q+X+7]=0),g===!0&&(r.fromBufferAttribute(j,k),A[Q+X+8]=r.x,A[Q+X+9]=r.y,A[Q+X+10]=r.z,A[Q+X+11]=j.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new Me(P,D)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function v3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Wg extends On{constructor(e,n,i,r,s,o,a,l,c,h=Va){if(h!==Va&&h!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Va&&(i=Uo),i===void 0&&h===tl&&(i=el),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Hw=new On,px=new Wg(1,1),Gw=new Lw,Ww=new sC,jw=new Bw,mx=[],gx=[],_x=new Float32Array(16),vx=new Float32Array(9),xx=new Float32Array(4);function fl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mx[r];if(s===void 0&&(s=new Float32Array(r),mx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hf(t,e){let n=gx[e];n===void 0&&(n=new Int32Array(e),gx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function x3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function w3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;xx.set(i),t.uniformMatrix2fv(this.addr,!1,xx),tn(n,i)}}function E3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;vx.set(i),t.uniformMatrix3fv(this.addr,!1,vx),tn(n,i)}}function T3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;_x.set(i),t.uniformMatrix4fv(this.addr,!1,_x),tn(n,i)}}function b3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function P3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function N3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(px.compareFunction=Cw,s=px):s=Hw,n.setTexture2D(e||s,r)}function U3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ww,r)}function O3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jw,r)}function z3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gw,r)}function F3(t){switch(t){case 5126:return x3;case 35664:return y3;case 35665:return S3;case 35666:return M3;case 35674:return w3;case 35675:return E3;case 35676:return T3;case 5124:case 35670:return b3;case 35667:case 35671:return A3;case 35668:case 35672:return C3;case 35669:case 35673:return R3;case 5125:return P3;case 36294:return D3;case 36295:return L3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return I3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return O3;case 36289:case 36303:case 36311:case 36292:return z3}}function k3(t,e){t.uniform1fv(this.addr,e)}function B3(t,e){const n=fl(e,this.size,2);t.uniform2fv(this.addr,n)}function V3(t,e){const n=fl(e,this.size,3);t.uniform3fv(this.addr,n)}function H3(t,e){const n=fl(e,this.size,4);t.uniform4fv(this.addr,n)}function G3(t,e){const n=fl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W3(t,e){const n=fl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function j3(t,e){const n=fl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X3(t,e){t.uniform1iv(this.addr,e)}function $3(t,e){t.uniform2iv(this.addr,e)}function Y3(t,e){t.uniform3iv(this.addr,e)}function q3(t,e){t.uniform4iv(this.addr,e)}function K3(t,e){t.uniform1uiv(this.addr,e)}function Z3(t,e){t.uniform2uiv(this.addr,e)}function Q3(t,e){t.uniform3uiv(this.addr,e)}function J3(t,e){t.uniform4uiv(this.addr,e)}function eD(t,e,n){const i=this.cache,r=e.length,s=Hf(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Hw,s[o])}function tD(t,e,n){const i=this.cache,r=e.length,s=Hf(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ww,s[o])}function nD(t,e,n){const i=this.cache,r=e.length,s=Hf(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||jw,s[o])}function iD(t,e,n){const i=this.cache,r=e.length,s=Hf(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Gw,s[o])}function rD(t){switch(t){case 5126:return k3;case 35664:return B3;case 35665:return V3;case 35666:return H3;case 35674:return G3;case 35675:return W3;case 35676:return j3;case 5124:case 35670:return X3;case 35667:case 35671:return $3;case 35668:case 35672:return Y3;case 35669:case 35673:return q3;case 5125:return K3;case 36294:return Z3;case 36295:return Q3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return eD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}class sD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=F3(n.type)}}class oD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rD(n.type)}}class aD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function yx(t,e){t.seq.push(e),t.map[e.id]=e}function lD(t,e,n){const i=t.name,r=i.length;for(Qd.lastIndex=0;;){const s=Qd.exec(i),o=Qd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yx(n,c===void 0?new sD(a,t,e):new oD(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new aD(a),yx(n,u)),n=u}}}class Ph{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Sx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cD=37297;let uD=0;function hD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Mx=new qe;function fD(t){ot._getMatrix(Mx,ot.workingColorSpace,t);const e=`mat3( ${Mx.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Vf:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hD(t.getShaderSource(e),o)}else return r}function dD(t,e){const n=fD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pD(t,e){let n;switch(e){case vA:n="Linear";break;case xA:n="Reinhard";break;case yA:n="Cineon";break;case SA:n="ACESFilmic";break;case wA:n="AgX";break;case mw:n="Neutral";break;case MA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Du=new I;function mD(){ot.getLuminanceCoefficients(Du);const t=Du.x.toFixed(4),e=Du.y.toFixed(4),n=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function _D(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vl(t){return t!==""}function Ex(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xD=/^[ \t]*#include +<([\w\d./]+)>/gm;function d0(t){return t.replace(xD,SD)}const yD=new Map;function SD(t,e){let n=je[e];if(n===void 0){const i=yD.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return d0(n)}const MD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bx(t){return t.replace(MD,wD)}function wD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ax(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ED(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function TD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qa:case Ja:e="ENVMAP_TYPE_CUBE";break;case Bf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ja:e="ENVMAP_MODE_REFRACTION";break}return e}function AD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case pw:e="ENVMAP_BLENDING_MULTIPLY";break;case gA:e="ENVMAP_BLENDING_MIX";break;case _A:e="ENVMAP_BLENDING_ADD";break}return e}function CD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ED(n),c=TD(n),h=bD(n),u=AD(n),d=CD(n),p=gD(n),m=_D(s),v=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Vl).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Vl).join(`
`),f.length>0&&(f+=`
`)):(g=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),f=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ns?"#define TONE_MAPPING":"",n.toneMapping!==Ns?je.tonemapping_pars_fragment:"",n.toneMapping!==Ns?pD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,dD("linearToOutputTexel",n.outputColorSpace),mD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vl).join(`
`)),o=d0(o),o=Ex(o,n),o=Tx(o,n),a=d0(a),a=Ex(a,n),a=Tx(a,n),o=bx(o),a=bx(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+g+o,y=x+f+a,P=Sx(r,r.VERTEX_SHADER,_),D=Sx(r,r.FRAGMENT_SHADER,y);r.attachShader(v,P),r.attachShader(v,D),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(D).trim();let Q=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,D);else{const X=wx(r,P,"vertex"),O=wx(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+X+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||j==="")&&(k=!1);k&&(C.diagnostics={runnable:Q,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:j,prefix:f}})}r.deleteShader(P),r.deleteShader(D),R=new Ph(r,v),T=vD(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,cD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uD++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let PD=0;class DD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LD(e),n.set(e,i)),i}}class LD{constructor(e){this.id=PD++,this.code=e,this.usedTimes=0}}function ND(t,e,n,i,r,s,o){const a=new Iw,l=new DD,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,S,C,z,F){const j=z.fog,Q=F.geometry,k=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||k),O=X&&X.mapping===Bf?X.image.height:null,$=m[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ce=J!==void 0?J.length:0;let pe=0;Q.morphAttributes.position!==void 0&&(pe=1),Q.morphAttributes.normal!==void 0&&(pe=2),Q.morphAttributes.color!==void 0&&(pe=3);let We,ee,re,se;if($){const _t=jn[$];We=_t.vertexShader,ee=_t.fragmentShader}else We=T.vertexShader,ee=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),se=l.getFragmentShaderID(T);const le=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,it=!!T.map,Xe=!!T.matcap,yt=!!X,H=!!T.aoMap,St=!!T.lightMap,He=!!T.bumpMap,Re=!!T.normalMap,Ae=!!T.displacementMap,ut=!!T.emissiveMap,Oe=!!T.metalnessMap,b=!!T.roughnessMap,w=T.anisotropy>0,B=T.clearcoat>0,Y=T.dispersion>0,ne=T.iridescence>0,K=T.sheen>0,ge=T.transmission>0,de=w&&!!T.anisotropyMap,ve=B&&!!T.clearcoatMap,nt=B&&!!T.clearcoatNormalMap,ue=B&&!!T.clearcoatRoughnessMap,we=ne&&!!T.iridescenceMap,ke=ne&&!!T.iridescenceThicknessMap,Be=K&&!!T.sheenColorMap,Ee=K&&!!T.sheenRoughnessMap,st=!!T.specularMap,Ze=!!T.specularColorMap,Tt=!!T.specularIntensityMap,V=ge&&!!T.transmissionMap,_e=ge&&!!T.thicknessMap,te=!!T.gradientMap,ie=!!T.alphaMap,Se=T.alphaTest>0,xe=!!T.alphaHash,$e=!!T.extensions;let kt=Ns;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(kt=t.toneMapping);const _n={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:ee,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:cl,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Xe,envMap:yt,envMapMode:yt&&X.mapping,envMapCubeUVHeight:O,aoMap:H,lightMap:St,bumpMap:He,normalMap:Re,displacementMap:d&&Ae,emissiveMap:ut,normalMapObjectSpace:Re&&T.normalMapType===AA,normalMapTangentSpace:Re&&T.normalMapType===Aw,metalnessMap:Oe,roughnessMap:b,anisotropy:w,anisotropyMap:de,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:nt,clearcoatRoughnessMap:ue,dispersion:Y,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:ke,sheen:K,sheenColorMap:Be,sheenRoughnessMap:Ee,specularMap:st,specularColorMap:Ze,specularIntensityMap:Tt,transmission:ge,transmissionMap:V,thicknessMap:_e,gradientMap:te,opaque:T.transparent===!1&&T.blending===Ba&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:xe,combine:T.combine,mapUv:it&&v(T.map.channel),aoMapUv:H&&v(T.aoMap.channel),lightMapUv:St&&v(T.lightMap.channel),bumpMapUv:He&&v(T.bumpMap.channel),normalMapUv:Re&&v(T.normalMap.channel),displacementMapUv:Ae&&v(T.displacementMap.channel),emissiveMapUv:ut&&v(T.emissiveMap.channel),metalnessMapUv:Oe&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:de&&v(T.anisotropyMap.channel),clearcoatMapUv:ve&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(T.sheenRoughnessMap.channel),specularMapUv:st&&v(T.specularMap.channel),specularColorMapUv:Ze&&v(T.specularColorMap.channel),specularIntensityMapUv:Tt&&v(T.specularIntensityMap.channel),transmissionMapUv:V&&v(T.transmissionMap.channel),thicknessMapUv:_e&&v(T.thicknessMap.channel),alphaMapUv:ie&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Re||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(it||ie),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:kt,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&ot.getTransfer(T.map.colorSpace)===wt,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&ot.getTransfer(T.emissiveMap.colorSpace)===wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ii,flipSided:T.side===bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _n.vertexUv1s=c.has(1),_n.vertexUv2s=c.has(2),_n.vertexUv3s=c.has(3),c.clear(),_n}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(x(S,T),_(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function x(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=m[T.type];let C;if(S){const z=jn[S];C=Vg.clone(z.uniforms)}else C=T.uniforms;return C}function P(T,S){let C;for(let z=0,F=h.length;z<F;z++){const j=h[z];if(j.cacheKey===S){C=j,++C.usedTimes;break}}return C===void 0&&(C=new RD(t,S,T,s),h.push(C)),C}function D(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:R}}function ID(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function UD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,d,p,m,v,g){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},t[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=v,f.group=g),e++,f}function a(u,d,p,m,v,g){const f=o(u,d,p,m,v,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(u,d,p,m,v,g){const f=o(u,d,p,m,v,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(u,d){n.length>1&&n.sort(u||UD),i.length>1&&i.sort(d||Cx),r.length>1&&r.sort(d||Cx)}function h(){for(let u=e,d=t.length;u<d;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function OD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Rx,t.set(i,[o])):r>=s.length?(o=new Rx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new rt};break;case"SpotLight":n={position:new I,direction:new I,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function FD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kD=0;function BD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VD(t){const e=new zD,n=FD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ft,o=new ft;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,v=0,g=0,f=0,x=0,_=0,y=0,P=0,D=0,A=0;c.sort(BD);for(let T=0,S=c.length;T<S;T++){const C=c[T],z=C.color,F=C.intensity,j=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],F);A++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,O=n.get(C);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=C.shadow.matrix,x++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(z).multiplyScalar(F),k.distance=j,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[v]=k;const X=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,X.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[v]=X.matrix,C.castShadow){const O=n.get(C);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=Q,y++}v++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(z).multiplyScalar(F),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=k,g++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,O=n.get(C);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=C.shadow.matrix,_++}i.point[m]=k,m++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(F),k.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[f]=k,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==P||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,R.directionalLength=p,R.pointLength=m,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=P,R.numLightProbes=A,i.version=kD++)}function l(c,h){let u=0,d=0,p=0,m=0,v=0;const g=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),u++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Px(t){const e=new VD(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function HD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Px(t),e.set(r,[a])):s>=o.length?(a=new Px(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class GD extends ul{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=TA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WD extends ul{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $D(t,e,n){let i=new Hg;const r=new Me,s=new Me,o=new at,a=new GD({depthPacking:bA}),l=new WD,c={},h=n.maxTextureSize,u={[kr]:bn,[bn]:kr,[Ii]:Ii},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:jD,fragmentShader:XD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new oi;m.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ng;let f=this.type;this.render=function(D,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),z=t.state;z.setBlending(lr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==xr&&this.type===xr,j=f===xr&&this.type!==xr;for(let Q=0,k=D.length;Q<k;Q++){const X=D[Q],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const $=O.getFrameExtents();if(r.multiply($),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null||F===!0||j===!0){const ce=this.type!==xr?{minFilter:In,magFilter:In}:{};O.map!==null&&O.map.dispose(),O.map=new ki(r.x,r.y,ce),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const J=O.getViewportCount();for(let ce=0;ce<J;ce++){const pe=O.getViewport(ce);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),z.viewport(o),O.updateMatrices(X,ce),i=O.getFrustum(),y(A,R,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===xr&&x(O,R),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(T,S,C)};function x(D,A){const R=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(A,null,R,p,v,null)}function _(D,A,R,T){let S=null;const C=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,F=A.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Q=j[F];Q===void 0&&(Q=S.clone(),j[F]=Q,A.addEventListener("dispose",P)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,T===xr?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=R}return S}function y(D,A,R,T,S){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===xr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const F=e.update(D),j=D.material;if(Array.isArray(j)){const Q=F.groups;for(let k=0,X=Q.length;k<X;k++){const O=Q[k],$=j[O.materialIndex];if($&&$.visible){const J=_(D,$,T,S);D.onBeforeShadow(t,D,A,R,F,J,O),t.renderBufferDirect(R,null,F,J,D,O),D.onAfterShadow(t,D,A,R,F,J,O)}}}else if(j.visible){const Q=_(D,j,T,S);D.onBeforeShadow(t,D,A,R,F,Q,null),t.renderBufferDirect(R,null,F,Q,D,null),D.onAfterShadow(t,D,A,R,F,Q,null)}}const z=D.children;for(let F=0,j=z.length;F<j;F++)y(z[F],A,R,T,S)}function P(D){D.target.removeEventListener("dispose",P);for(const R in c){const T=c[R],S=D.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const YD={[Rm]:Pm,[Dm]:Im,[Lm]:Um,[Za]:Nm,[Pm]:Rm,[Im]:Dm,[Um]:Lm,[Nm]:Za};function qD(t,e){function n(){let V=!1;const _e=new at;let te=null;const ie=new at(0,0,0,0);return{setMask:function(Se){te!==Se&&!V&&(t.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){V=Se},setClear:function(Se,xe,$e,kt,_n){_n===!0&&(Se*=kt,xe*=kt,$e*=kt),_e.set(Se,xe,$e,kt),ie.equals(_e)===!1&&(t.clearColor(Se,xe,$e,kt),ie.copy(_e))},reset:function(){V=!1,te=null,ie.set(-1,0,0,0)}}}function i(){let V=!1,_e=!1,te=null,ie=null,Se=null;return{setReversed:function(xe){if(_e!==xe){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const kt=Se;Se=null,this.setClear(kt)}_e=xe},getReversed:function(){return _e},setTest:function(xe){xe?le(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(xe){te!==xe&&!V&&(t.depthMask(xe),te=xe)},setFunc:function(xe){if(_e&&(xe=YD[xe]),ie!==xe){switch(xe){case Rm:t.depthFunc(t.NEVER);break;case Pm:t.depthFunc(t.ALWAYS);break;case Dm:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case Lm:t.depthFunc(t.EQUAL);break;case Nm:t.depthFunc(t.GEQUAL);break;case Im:t.depthFunc(t.GREATER);break;case Um:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Se!==xe&&(_e&&(xe=1-xe),t.clearDepth(xe),Se=xe)},reset:function(){V=!1,te=null,ie=null,Se=null,_e=!1}}}function r(){let V=!1,_e=null,te=null,ie=null,Se=null,xe=null,$e=null,kt=null,_n=null;return{setTest:function(_t){V||(_t?le(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!V&&(t.stencilMask(_t),_e=_t)},setFunc:function(_t,wi,hr){(te!==_t||ie!==wi||Se!==hr)&&(t.stencilFunc(_t,wi,hr),te=_t,ie=wi,Se=hr)},setOp:function(_t,wi,hr){(xe!==_t||$e!==wi||kt!==hr)&&(t.stencilOp(_t,wi,hr),xe=_t,$e=wi,kt=hr)},setLocked:function(_t){V=_t},setClear:function(_t){_n!==_t&&(t.clearStencil(_t),_n=_t)},reset:function(){V=!1,_e=null,te=null,ie=null,Se=null,xe=null,$e=null,kt=null,_n=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,v=!1,g=null,f=null,x=null,_=null,y=null,P=null,D=null,A=new rt(0,0,0),R=0,T=!1,S=null,C=null,z=null,F=null,j=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=X>=2);let $=null,J={};const ce=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),We=new at().fromArray(ce),ee=new at().fromArray(pe);function re(V,_e,te,ie){const Se=new Uint8Array(4),xe=t.createTexture();t.bindTexture(V,xe),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<te;$e++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(_e+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return xe}const se={};se[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Za),He(!1),Re(Uv),le(t.CULL_FACE),H(lr);function le(V){h[V]!==!0&&(t.enable(V),h[V]=!0)}function be(V){h[V]!==!1&&(t.disable(V),h[V]=!1)}function Fe(V,_e){return u[V]!==_e?(t.bindFramebuffer(V,_e),u[V]=_e,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=_e),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ve(V,_e){let te=p,ie=!1;if(V){te=d.get(_e),te===void 0&&(te=[],d.set(_e,te));const Se=V.textures;if(te.length!==Se.length||te[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,$e=Se.length;xe<$e;xe++)te[xe]=t.COLOR_ATTACHMENT0+xe;te.length=Se.length,ie=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ie=!0);ie&&t.drawBuffers(te)}function it(V){return m!==V?(t.useProgram(V),m=V,!0):!1}const Xe={[so]:t.FUNC_ADD,[nA]:t.FUNC_SUBTRACT,[iA]:t.FUNC_REVERSE_SUBTRACT};Xe[rA]=t.MIN,Xe[sA]=t.MAX;const yt={[bm]:t.ZERO,[fw]:t.ONE,[dw]:t.SRC_COLOR,[Am]:t.SRC_ALPHA,[hA]:t.SRC_ALPHA_SATURATE,[cA]:t.DST_COLOR,[aA]:t.DST_ALPHA,[oA]:t.ONE_MINUS_SRC_COLOR,[Cm]:t.ONE_MINUS_SRC_ALPHA,[uA]:t.ONE_MINUS_DST_COLOR,[lA]:t.ONE_MINUS_DST_ALPHA,[fA]:t.CONSTANT_COLOR,[dA]:t.ONE_MINUS_CONSTANT_COLOR,[pA]:t.CONSTANT_ALPHA,[mA]:t.ONE_MINUS_CONSTANT_ALPHA};function H(V,_e,te,ie,Se,xe,$e,kt,_n,_t){if(V===lr){v===!0&&(be(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),V!==hw){if(V!==g||_t!==T){if((f!==so||y!==so)&&(t.blendEquation(t.FUNC_ADD),f=so,y=so),_t)switch(V){case Ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ov:t.blendFunc(t.ONE,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ov:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,_=null,P=null,D=null,A.set(0,0,0),R=0,g=V,T=_t}return}Se=Se||_e,xe=xe||te,$e=$e||ie,(_e!==f||Se!==y)&&(t.blendEquationSeparate(Xe[_e],Xe[Se]),f=_e,y=Se),(te!==x||ie!==_||xe!==P||$e!==D)&&(t.blendFuncSeparate(yt[te],yt[ie],yt[xe],yt[$e]),x=te,_=ie,P=xe,D=$e),(kt.equals(A)===!1||_n!==R)&&(t.blendColor(kt.r,kt.g,kt.b,_n),A.copy(kt),R=_n),g=V,T=!1}function St(V,_e){V.side===Ii?be(t.CULL_FACE):le(t.CULL_FACE);let te=V.side===bn;_e&&(te=!te),He(te),V.blending===Ba&&V.transparent===!1?H(lr):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ie=V.stencilWrite;a.setTest(ie),ie&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ut(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(V){S!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),S=V)}function Re(V){V!==Jb?(le(t.CULL_FACE),V!==C&&(V===Uv?t.cullFace(t.BACK):V===eA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),C=V}function Ae(V){V!==z&&(k&&t.lineWidth(V),z=V)}function ut(V,_e,te){V?(le(t.POLYGON_OFFSET_FILL),(F!==_e||j!==te)&&(t.polygonOffset(_e,te),F=_e,j=te)):be(t.POLYGON_OFFSET_FILL)}function Oe(V){V?le(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function b(V){V===void 0&&(V=t.TEXTURE0+Q-1),$!==V&&(t.activeTexture(V),$=V)}function w(V,_e,te){te===void 0&&($===null?te=t.TEXTURE0+Q-1:te=$);let ie=J[te];ie===void 0&&(ie={type:void 0,texture:void 0},J[te]=ie),(ie.type!==V||ie.texture!==_e)&&($!==te&&(t.activeTexture(te),$=te),t.bindTexture(V,_e||se[V]),ie.type=V,ie.texture=_e)}function B(){const V=J[$];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(V){We.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),We.copy(V))}function Ee(V){ee.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let ie=te.get(V);ie===void 0&&(ie=t.getUniformBlockIndex(_e,V.name),te.set(V,ie))}function Ze(V,_e){const ie=c.get(_e).get(V);l.get(_e)!==ie&&(t.uniformBlockBinding(_e,ie,V.__bindingPointIndex),l.set(_e,ie))}function Tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,J={},u={},d=new WeakMap,p=[],m=null,v=!1,g=null,f=null,x=null,_=null,y=null,P=null,D=null,A=new rt(0,0,0),R=0,T=!1,S=null,C=null,z=null,F=null,j=null,We.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Fe,drawBuffers:Ve,useProgram:it,setBlending:H,setMaterial:St,setFlipSided:He,setCullFace:Re,setLineWidth:Ae,setPolygonOffset:ut,setScissorTest:Oe,activeTexture:b,bindTexture:w,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:ne,texImage2D:we,texImage3D:ke,updateUBOMapping:st,uniformBlockBinding:Ze,texStorage2D:nt,texStorage3D:ue,texSubImage2D:K,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Be,viewport:Ee,reset:Tt}}function Dx(t,e,n,i){const r=KD(i);switch(n){case yw:return t*e;case Mw:return t*e;case ww:return t*e*2;case Ew:return t*e/r.components*r.byteLength;case zg:return t*e/r.components*r.byteLength;case Tw:return t*e*2/r.components*r.byteLength;case Fg:return t*e*2/r.components*r.byteLength;case Sw:return t*e*3/r.components*r.byteLength;case Fi:return t*e*4/r.components*r.byteLength;case kg:return t*e*4/r.components*r.byteLength;case Th:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ah:case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bm:case Hm:return Math.max(t,16)*Math.max(e,8)/4;case km:case Vm:return Math.max(t,8)*Math.max(e,8)/2;case Gm:case Wm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $m:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ym:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Km:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case e0:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case t0:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case n0:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case i0:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case r0:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case s0:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rh:case o0:case a0:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bw:case l0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case c0:case u0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KD(t){switch(t){case Br:case _w:return{byteLength:1,components:1};case Cc:case vw:case zc:return{byteLength:2,components:1};case Ug:case Og:return{byteLength:2,components:4};case Uo:case Ig:case rr:return{byteLength:4,components:1};case xw:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function ZD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,w){return p?new OffscreenCanvas(b,w):sf("canvas")}function v(b,w,B){let Y=1;const ne=Oe(b);if((ne.width>B||ne.height>B)&&(Y=B/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(Y*ne.width),ge=Math.floor(Y*ne.height);u===void 0&&(u=m(K,ge));const de=w?m(K,ge):u;return de.width=K,de.height=ge,de.getContext("2d").drawImage(b,0,0,K,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+ge+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){t.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(b,w,B,Y,ne=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=w;if(w===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),w===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),w===t.RGBA){const ge=ne?Vf:ot.getTransfer(Y);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=ge===wt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(b,w){let B;return b?w===null||w===Uo||w===el?B=t.DEPTH24_STENCIL8:w===rr?B=t.DEPTH32F_STENCIL8:w===Cc&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Uo||w===el?B=t.DEPTH_COMPONENT24:w===rr?B=t.DEPTH_COMPONENT32F:w===Cc&&(B=t.DEPTH_COMPONENT16),B}function P(b,w){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==In&&b.minFilter!==ir?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function D(b){const w=b.target;w.removeEventListener("dispose",D),R(w),w.isVideoTexture&&h.delete(w)}function A(b){const w=b.target;w.removeEventListener("dispose",A),S(w)}function R(b){const w=i.get(b);if(w.__webglInit===void 0)return;const B=b.source,Y=d.get(B);if(Y){const ne=Y[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(b),Object.keys(Y).length===0&&d.delete(B)}i.remove(b)}function T(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const B=b.source,Y=d.get(B);delete Y[w.__cacheKey],o.memory.textures--}function S(b){const w=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let ne=0;ne<w.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)t.deleteFramebuffer(w.__webglFramebuffer[Y]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=b.textures;for(let Y=0,ne=B.length;Y<ne;Y++){const K=i.get(B[Y]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(b)}let C=0;function z(){C=0}function F(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function j(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function Q(b,w){const B=i.get(b);if(b.isVideoTexture&&Ae(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,b,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function k(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ee(B,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function X(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ee(B,b,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function O(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){re(B,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const $={[Ac]:t.REPEAT,[fo]:t.CLAMP_TO_EDGE,[Fm]:t.MIRRORED_REPEAT},J={[In]:t.NEAREST,[EA]:t.NEAREST_MIPMAP_NEAREST,[hu]:t.NEAREST_MIPMAP_LINEAR,[ir]:t.LINEAR,[bd]:t.LINEAR_MIPMAP_NEAREST,[po]:t.LINEAR_MIPMAP_LINEAR},ce={[CA]:t.NEVER,[IA]:t.ALWAYS,[RA]:t.LESS,[Cw]:t.LEQUAL,[PA]:t.EQUAL,[NA]:t.GEQUAL,[DA]:t.GREATER,[LA]:t.NOTEQUAL};function pe(b,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ir||w.magFilter===bd||w.magFilter===hu||w.magFilter===po||w.minFilter===ir||w.minFilter===bd||w.minFilter===hu||w.minFilter===po)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,$[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,$[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,$[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,J[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==hu&&w.minFilter!==po||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function We(b,w){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",D));const Y=w.source;let ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));const K=j(w);if(K!==b.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[K].usedTimes++;const ge=ne[b.__cacheKey];ge!==void 0&&(ne[b.__cacheKey].usedTimes--,ge.usedTimes===0&&T(w)),b.__cacheKey=K,b.__webglTexture=ne[K].texture}return B}function ee(b,w,B){let Y=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=We(b,w),K=w.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+B);const ge=i.get(K);if(K.version!==ge.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const de=ot.getPrimaries(ot.workingColorSpace),ve=w.colorSpace===vs?null:ot.getPrimaries(w.colorSpace),nt=w.colorSpace===vs||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ue=v(w.image,!1,r.maxTextureSize);ue=ut(w,ue);const we=s.convert(w.format,w.colorSpace),ke=s.convert(w.type);let Be=_(w.internalFormat,we,ke,w.colorSpace,w.isVideoTexture);pe(Y,w);let Ee;const st=w.mipmaps,Ze=w.isVideoTexture!==!0,Tt=ge.__version===void 0||ne===!0,V=K.dataReady,_e=P(w,ue);if(w.isDepthTexture)Be=y(w.format===tl,w.type),Tt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Be,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Be,ue.width,ue.height,0,we,ke,null));else if(w.isDataTexture)if(st.length>0){Ze&&Tt&&n.texStorage2D(t.TEXTURE_2D,_e,Be,st[0].width,st[0].height);for(let te=0,ie=st.length;te<ie;te++)Ee=st[te],Ze?V&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,te,Be,Ee.width,Ee.height,0,we,ke,Ee.data);w.generateMipmaps=!1}else Ze?(Tt&&n.texStorage2D(t.TEXTURE_2D,_e,Be,ue.width,ue.height),V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,we,ke,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Be,ue.width,ue.height,0,we,ke,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Be,st[0].width,st[0].height,ue.depth);for(let te=0,ie=st.length;te<ie;te++)if(Ee=st[te],w.format!==Fi)if(we!==null)if(Ze){if(V)if(w.layerUpdates.size>0){const Se=Dx(Ee.width,Ee.height,w.format,w.type);for(const xe of w.layerUpdates){const $e=Ee.data.subarray(xe*Se/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Se/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,xe,Ee.width,Ee.height,1,we,$e)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,ue.depth,we,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Be,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,ue.depth,we,ke,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Be,Ee.width,Ee.height,ue.depth,0,we,ke,Ee.data)}else{Ze&&Tt&&n.texStorage2D(t.TEXTURE_2D,_e,Be,st[0].width,st[0].height);for(let te=0,ie=st.length;te<ie;te++)Ee=st[te],w.format!==Fi?we!==null?Ze?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,te,Be,Ee.width,Ee.height,0,we,ke,Ee.data)}else if(w.isDataArrayTexture)if(Ze){if(Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Be,ue.width,ue.height,ue.depth),V)if(w.layerUpdates.size>0){const te=Dx(ue.width,ue.height,w.format,w.type);for(const ie of w.layerUpdates){const Se=ue.data.subarray(ie*te/ue.data.BYTES_PER_ELEMENT,(ie+1)*te/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,we,ke,Se)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,ke,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,ue.width,ue.height,ue.depth,0,we,ke,ue.data);else if(w.isData3DTexture)Ze?(Tt&&n.texStorage3D(t.TEXTURE_3D,_e,Be,ue.width,ue.height,ue.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,ke,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Be,ue.width,ue.height,ue.depth,0,we,ke,ue.data);else if(w.isFramebufferTexture){if(Tt)if(Ze)n.texStorage2D(t.TEXTURE_2D,_e,Be,ue.width,ue.height);else{let te=ue.width,ie=ue.height;for(let Se=0;Se<_e;Se++)n.texImage2D(t.TEXTURE_2D,Se,Be,te,ie,0,we,ke,null),te>>=1,ie>>=1}}else if(st.length>0){if(Ze&&Tt){const te=Oe(st[0]);n.texStorage2D(t.TEXTURE_2D,_e,Be,te.width,te.height)}for(let te=0,ie=st.length;te<ie;te++)Ee=st[te],Ze?V&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,we,ke,Ee):n.texImage2D(t.TEXTURE_2D,te,Be,we,ke,Ee);w.generateMipmaps=!1}else if(Ze){if(Tt){const te=Oe(ue);n.texStorage2D(t.TEXTURE_2D,_e,Be,te.width,te.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,ke,ue)}else n.texImage2D(t.TEXTURE_2D,0,Be,we,ke,ue);g(w)&&f(Y),ge.__version=K.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function re(b,w,B){if(w.image.length!==6)return;const Y=We(b,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const K=i.get(ne);if(ne.version!==K.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const ge=ot.getPrimaries(ot.workingColorSpace),de=w.colorSpace===vs?null:ot.getPrimaries(w.colorSpace),ve=w.colorSpace===vs||ge===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,we=[];for(let ie=0;ie<6;ie++)!nt&&!ue?we[ie]=v(w.image[ie],!0,r.maxCubemapSize):we[ie]=ue?w.image[ie].image:w.image[ie],we[ie]=ut(w,we[ie]);const ke=we[0],Be=s.convert(w.format,w.colorSpace),Ee=s.convert(w.type),st=_(w.internalFormat,Be,Ee,w.colorSpace),Ze=w.isVideoTexture!==!0,Tt=K.__version===void 0||Y===!0,V=ne.dataReady;let _e=P(w,ke);pe(t.TEXTURE_CUBE_MAP,w);let te;if(nt){Ze&&Tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,st,ke.width,ke.height);for(let ie=0;ie<6;ie++){te=we[ie].mipmaps;for(let Se=0;Se<te.length;Se++){const xe=te[Se];w.format!==Fi?Be!==null?Ze?V&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,xe.width,xe.height,Be,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,st,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,xe.width,xe.height,Be,Ee,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,st,xe.width,xe.height,0,Be,Ee,xe.data)}}}else{if(te=w.mipmaps,Ze&&Tt){te.length>0&&_e++;const ie=Oe(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,st,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){Ze?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we[ie].width,we[ie].height,Be,Ee,we[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,we[ie].width,we[ie].height,0,Be,Ee,we[ie].data);for(let Se=0;Se<te.length;Se++){const $e=te[Se].image[ie].image;Ze?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,$e.width,$e.height,Be,Ee,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,st,$e.width,$e.height,0,Be,Ee,$e.data)}}else{Ze?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,Ee,we[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,Be,Ee,we[ie]);for(let Se=0;Se<te.length;Se++){const xe=te[Se];Ze?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Be,Ee,xe.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,st,Be,Ee,xe.image[ie])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),K.__version=ne.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function se(b,w,B,Y,ne,K){const ge=s.convert(B.format,B.colorSpace),de=s.convert(B.type),ve=_(B.internalFormat,ge,de,B.colorSpace),nt=i.get(w),ue=i.get(B);if(ue.__renderTarget=w,!nt.__hasExternalTextures){const we=Math.max(1,w.width>>K),ke=Math.max(1,w.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,ve,we,ke,w.depth,0,ge,de,null):n.texImage2D(ne,K,ve,we,ke,0,ge,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Re(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,0,He(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer){const Y=w.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,K=y(w.stencilBuffer,ne),ge=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=He(w);Re(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,K,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,K,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,K,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,b)}else{const Y=w.textures;for(let ne=0;ne<Y.length;ne++){const K=Y[ne],ge=s.convert(K.format,K.colorSpace),de=s.convert(K.type),ve=_(K.internalFormat,ge,de,K.colorSpace),nt=He(w);B&&Re(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,ve,w.width,w.height):Re(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt,ve,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ve,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ne=Y.__webglTexture,K=He(w);if(w.depthTexture.format===Va)Re(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(w.depthTexture.format===tl)Re(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const w=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=Y}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,b)}else if(B){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=t.createRenderbuffer(),le(w.__webglDepthbuffer[Y],b,!1);else{const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),le(w.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(b,w,B){const Y=i.get(b);w!==void 0&&se(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Fe(b)}function it(b){const w=b.texture,B=i.get(b),Y=i.get(w);b.addEventListener("dispose",A);const ne=b.textures,K=b.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=w.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ve=0;ve<w.mipmaps.length;ve++)B.__webglFramebuffer[de][ve]=t.createFramebuffer()}else B.__webglFramebuffer[de]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)B.__webglFramebuffer[de]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ge)for(let de=0,ve=ne.length;de<ve;de++){const nt=i.get(ne[de]);nt.__webglTexture===void 0&&(nt.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ve=ne[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const nt=s.convert(ve.format,ve.colorSpace),ue=s.convert(ve.type),we=_(ve.internalFormat,nt,ue,ve.colorSpace,b.isXRRenderTarget===!0),ke=He(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,we,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),le(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(t.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)se(B.__webglFramebuffer[de][ve],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else se(B.__webglFramebuffer[de],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let de=0,ve=ne.length;de<ve;de++){const nt=ne[de],ue=i.get(nt);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),pe(t.TEXTURE_2D,nt),se(B.__webglFramebuffer,b,nt,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(nt)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Y.__webglTexture),pe(de,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)se(B.__webglFramebuffer[ve],b,w,t.COLOR_ATTACHMENT0,de,ve);else se(B.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,de,0);g(w)&&f(de),n.unbindTexture()}b.depthBuffer&&Fe(b)}function Xe(b){const w=b.textures;for(let B=0,Y=w.length;B<Y;B++){const ne=w[B];if(g(ne)){const K=x(b),ge=i.get(ne).__webglTexture;n.bindTexture(K,ge),f(K),n.unbindTexture()}}}const yt=[],H=[];function St(b){if(b.samples>0){if(Re(b)===!1){const w=b.textures,B=b.width,Y=b.height;let ne=t.COLOR_BUFFER_BIT;const K=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(b),de=w.length>1;if(de)for(let ve=0;ve<w.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const nt=i.get(w[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,nt,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,ne,t.NEAREST),l===!0&&(yt.length=0,H.length=0,yt.push(t.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(yt.push(K),H.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,H)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<w.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const nt=i.get(w[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,nt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function He(b){return Math.min(r.maxSamples,b.samples)}function Re(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ae(b){const w=o.render.frame;h.get(b)!==w&&(h.set(b,w),b.update())}function ut(b,w){const B=b.colorSpace,Y=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==cl&&B!==vs&&(ot.getTransfer(B)===wt?(Y!==Fi||ne!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=Ve,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Re}function QD(t,e){function n(i,r=vs){let s;const o=ot.getTransfer(r);if(i===Br)return t.UNSIGNED_BYTE;if(i===Ug)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Og)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xw)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_w)return t.BYTE;if(i===vw)return t.SHORT;if(i===Cc)return t.UNSIGNED_SHORT;if(i===Ig)return t.INT;if(i===Uo)return t.UNSIGNED_INT;if(i===rr)return t.FLOAT;if(i===zc)return t.HALF_FLOAT;if(i===yw)return t.ALPHA;if(i===Sw)return t.RGB;if(i===Fi)return t.RGBA;if(i===Mw)return t.LUMINANCE;if(i===ww)return t.LUMINANCE_ALPHA;if(i===Va)return t.DEPTH_COMPONENT;if(i===tl)return t.DEPTH_STENCIL;if(i===Ew)return t.RED;if(i===zg)return t.RED_INTEGER;if(i===Tw)return t.RG;if(i===Fg)return t.RG_INTEGER;if(i===kg)return t.RGBA_INTEGER;if(i===Th||i===bh||i===Ah||i===Ch)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Th)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ah)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ch)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Th)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ah)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ch)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===km||i===Bm||i===Vm||i===Hm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===km)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gm||i===Wm||i===jm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gm||i===Wm)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xm||i===$m||i===Ym||i===qm||i===Km||i===Zm||i===Qm||i===Jm||i===e0||i===t0||i===n0||i===i0||i===r0||i===s0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$m)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ym)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Km)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===e0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===t0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===n0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===i0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===r0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===s0)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rh||i===o0||i===a0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rh)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===o0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===a0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bw||i===l0||i===c0||i===u0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===l0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===c0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===u0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===el?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class JD extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eL={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const tL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new On,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ii({vertexShader:tL,fragmentShader:nL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dt(new Mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rL extends Bo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null;const v=new iL,g=n.getContextAttributes();let f=null,x=null;const _=[],y=[],P=new Me;let D=null;const A=new Nn;A.viewport=new at;const R=new Nn;R.viewport=new at;const T=[A,R],S=new JD;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=_[ee];return re===void 0&&(re=new Jd,_[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=_[ee];return re===void 0&&(re=new Jd,_[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=_[ee];return re===void 0&&(re=new Jd,_[ee]=re),re.getHandSpace()};function F(ee){const re=y.indexOf(ee.inputSource);if(re===-1)return;const se=_[re];se!==void 0&&(se.update(ee.inputSource,ee.frame,c||o),se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<_.length;ee++){const re=y[ee];re!==null&&(y[ee]=null,_[ee].disconnect(re))}C=null,z=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,x=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ki(p.framebufferWidth,p.framebufferHeight,{format:Fi,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,se=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?tl:Va,se=g.stencil?el:Uo);const be={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,n),d=u.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ki(d.textureWidth,d.textureHeight,{format:Fi,type:Br,depthTexture:new Wg(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(ee){for(let re=0;re<ee.removed.length;re++){const se=ee.removed[re],le=y.indexOf(se);le>=0&&(y[le]=null,_[le].disconnect(se))}for(let re=0;re<ee.added.length;re++){const se=ee.added[re];let le=y.indexOf(se);if(le===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=y.length){y.push(se),le=Fe;break}else if(y[Fe]===null){y[Fe]=se,le=Fe;break}if(le===-1)break}const be=_[le];be&&be.connect(se)}}const k=new I,X=new I;function O(ee,re,se){k.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const le=k.distanceTo(X),be=re.projectionMatrix.elements,Fe=se.projectionMatrix.elements,Ve=be[14]/(be[10]-1),it=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],yt=(be[9]-1)/be[5],H=(be[8]-1)/be[0],St=(Fe[8]+1)/Fe[0],He=Ve*H,Re=Ve*St,Ae=le/(-H+St),ut=Ae*-H;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ut),ee.translateZ(Ae),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),be[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Oe=Ve+Ae,b=it+Ae,w=He-ut,B=Re+(le-ut),Y=Xe*it/b*Oe,ne=yt*it/b*Oe;ee.projectionMatrix.makePerspective(w,B,Y,ne,Oe,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function $(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let re=ee.near,se=ee.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(se=v.depthFar)),S.near=R.near=A.near=re,S.far=R.far=A.far=se,(C!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far),A.layers.mask=ee.layers.mask|2,R.layers.mask=ee.layers.mask|4,S.layers.mask=A.layers.mask|R.layers.mask;const le=ee.parent,be=S.cameras;$(S,le);for(let Fe=0;Fe<be.length;Fe++)$(be[Fe],le);be.length===2?O(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),J(ee,S,le)};function J(ee,re,se){se===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=nl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ce=null;function pe(ee,re){if(h=re.getViewerPose(c||o),m=re,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let le=!1;se.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Fe=0;Fe<se.length;Fe++){const Ve=se[Fe];let it=null;if(p!==null)it=p.getViewport(Ve);else{const yt=u.getViewSubImage(d,Ve);it=yt.viewport,Fe===0&&(e.setRenderTargetTextures(x,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(x))}let Xe=T[Fe];Xe===void 0&&(Xe=new Nn,Xe.layers.enable(Fe),Xe.viewport=new at,T[Fe]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),Fe===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Fe=u.getDepthInformation(se[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let se=0;se<_.length;se++){const le=y[se],be=_[se];le!==null&&be!==void 0&&be.update(le,re,c||o)}ce&&ce(ee,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const We=new Vw;We.setAnimationLoop(pe),this.setAnimationLoop=function(ee){ce=ee},this.dispose=function(){}}}const Zs=new cr,sL=new ft;function oL(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Fw(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),u(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),v(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===bn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===bn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,Zs.copy(y),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.envMapRotation.value.setFromMatrix4(sL.makeRotationFromEuler(Zs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(m(x),y=h(x),r[x.id]=y,x.addEventListener("dispose",g));const P=_.program;i.updateUBOMapping(x,P);const D=e.render.frame;s[x.id]!==D&&(d(x),s[x.id]=D)}function h(x){const _=u();x.__bindingPointIndex=_;const y=t.createBuffer(),P=x.__size,D=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let D=0,A=y.length;D<A;D++){const R=Array.isArray(y[D])?y[D]:[y[D]];for(let T=0,S=R.length;T<S;T++){const C=R[T];if(p(C,D,T,P)===!0){const z=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let Q=0;Q<F.length;Q++){const k=F[Q],X=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,z+j,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,y,P){const D=x.value,A=_+"_"+y;if(P[A]===void 0)return typeof D=="number"||typeof D=="boolean"?P[A]=D:P[A]=D.clone(),!0;{const R=P[A];if(typeof D=="number"||typeof D=="boolean"){if(R!==D)return P[A]=D,!0}else if(R.equals(D)===!1)return R.copy(D),!0}return!1}function m(x){const _=x.uniforms;let y=0;const P=16;for(let A=0,R=_.length;A<R;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,C=T.length;S<C;S++){const z=T[S],F=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Q=F.length;j<Q;j++){const k=F[j],X=v(k),O=y%P,$=O%X.boundary,J=O+$;y+=$,J!==0&&P-J<X.storage&&(y+=P-J),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=X.storage}}}const D=y%P;return D>0&&(y+=P-D),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class lL{constructor(e={}){const{canvas:n=ZA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const x=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Ns,this.toneMappingExposure=1;const y=this;let P=!1,D=0,A=0,R=null,T=-1,S=null;const C=new at,z=new at;let F=null;const j=new rt(0);let Q=0,k=n.width,X=n.height,O=1,$=null,J=null;const ce=new at(0,0,k,X),pe=new at(0,0,k,X);let We=!1;const ee=new Hg;let re=!1,se=!1;const le=new ft,be=new ft,Fe=new I,Ve=new at,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function yt(){return R===null?O:1}let H=i;function St(L,G){return n.getContext(L,G)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lg}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",xe,!1),H===null){const G="webgl2";if(H=St(G,L),H===null)throw St(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let He,Re,Ae,ut,Oe,b,w,B,Y,ne,K,ge,de,ve,nt,ue,we,ke,Be,Ee,st,Ze,Tt,V;function _e(){He=new d3(H),He.init(),Ze=new QD(H,He),Re=new a3(H,He,e,Ze),Ae=new qD(H,He),Re.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),ut=new g3(H),Oe=new ID,b=new ZD(H,He,Ae,Oe,Re,Ze,ut),w=new c3(y),B=new f3(y),Y=new wC(H),Tt=new s3(H,Y),ne=new p3(H,Y,ut,Tt),K=new v3(H,ne,Y,ut),Be=new _3(H,Re,b),ue=new l3(Oe),ge=new ND(y,w,B,He,Re,Tt,ue),de=new oL(y,Oe),ve=new OD,nt=new HD(He),ke=new r3(y,w,B,Ae,K,p,l),we=new $D(y,K,Re),V=new aL(H,ut,Re,Ae),Ee=new o3(H,He,ut),st=new m3(H,He,ut),ut.programs=ge.programs,y.capabilities=Re,y.extensions=He,y.properties=Oe,y.renderLists=ve,y.shadowMap=we,y.state=Ae,y.info=ut}_e();const te=new rL(y,H);this.xr=te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const L=He.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=He.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(L){L!==void 0&&(O=L,this.setSize(k,X,!1))},this.getSize=function(L){return L.set(k,X)},this.setSize=function(L,G,q=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,X=G,n.width=Math.floor(L*O),n.height=Math.floor(G*O),q===!0&&(n.style.width=L+"px",n.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(k*O,X*O).floor()},this.setDrawingBufferSize=function(L,G,q){k=L,X=G,O=q,n.width=Math.floor(L*q),n.height=Math.floor(G*q),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(C)},this.getViewport=function(L){return L.copy(ce)},this.setViewport=function(L,G,q,Z){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,G,q,Z),Ae.viewport(C.copy(ce).multiplyScalar(O).round())},this.getScissor=function(L){return L.copy(pe)},this.setScissor=function(L,G,q,Z){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,G,q,Z),Ae.scissor(z.copy(pe).multiplyScalar(O).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(L){Ae.setScissorTest(We=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){J=L},this.getClearColor=function(L){return L.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(L=!0,G=!0,q=!0){let Z=0;if(L){let W=!1;if(R!==null){const he=R.texture.format;W=he===kg||he===Fg||he===zg}if(W){const he=R.texture.type,ye=he===Br||he===Uo||he===Cc||he===el||he===Ug||he===Og,De=ke.getClearColor(),Le=ke.getClearAlpha(),Ge=De.r,Ye=De.g,Ne=De.b;ye?(m[0]=Ge,m[1]=Ye,m[2]=Ne,m[3]=Le,H.clearBufferuiv(H.COLOR,0,m)):(v[0]=Ge,v[1]=Ye,v[2]=Ne,v[3]=Le,H.clearBufferiv(H.COLOR,0,v))}else Z|=H.COLOR_BUFFER_BIT}G&&(Z|=H.DEPTH_BUFFER_BIT),q&&(Z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),ve.dispose(),nt.dispose(),Oe.dispose(),w.dispose(),B.dispose(),K.dispose(),Tt.dispose(),V.dispose(),ge.dispose(),te.dispose(),te.removeEventListener("sessionstart",d_),te.removeEventListener("sessionend",p_),js.stop()};function ie(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=ut.autoReset,G=we.enabled,q=we.autoUpdate,Z=we.needsUpdate,W=we.type;_e(),ut.autoReset=L,we.enabled=G,we.autoUpdate=q,we.needsUpdate=Z,we.type=W}function xe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function $e(L){const G=L.target;G.removeEventListener("dispose",$e),kt(G)}function kt(L){_n(L),Oe.remove(L)}function _n(L){const G=Oe.get(L).programs;G!==void 0&&(G.forEach(function(q){ge.releaseProgram(q)}),L.isShaderMaterial&&ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,q,Z,W,he){G===null&&(G=it);const ye=W.isMesh&&W.matrixWorld.determinant()<0,De=f2(L,G,q,Z,W);Ae.setMaterial(Z,ye);let Le=q.index,Ge=1;if(Z.wireframe===!0){if(Le=ne.getWireframeAttribute(q),Le===void 0)return;Ge=2}const Ye=q.drawRange,Ne=q.attributes.position;let ht=Ye.start*Ge,bt=(Ye.start+Ye.count)*Ge;he!==null&&(ht=Math.max(ht,he.start*Ge),bt=Math.min(bt,(he.start+he.count)*Ge)),Le!==null?(ht=Math.max(ht,0),bt=Math.min(bt,Le.count)):Ne!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ne.count));const Ct=bt-ht;if(Ct<0||Ct===1/0)return;Tt.setup(W,Z,De,q,Le);let Bn,pt=Ee;if(Le!==null&&(Bn=Y.get(Le),pt=st,pt.setIndex(Bn)),W.isMesh)Z.wireframe===!0?(Ae.setLineWidth(Z.wireframeLinewidth*yt()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(W.isLine){let Ue=Z.linewidth;Ue===void 0&&(Ue=1),Ae.setLineWidth(Ue*yt()),W.isLineSegments?pt.setMode(H.LINES):W.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else W.isPoints?pt.setMode(H.POINTS):W.isSprite&&pt.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)pt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,fr=W._multiDrawCounts,mt=W._multiDrawCount,Ei=Le?Y.get(Le).bytesPerElement:1,Ho=Oe.get(Z).currentProgram.getUniforms();for(let Qn=0;Qn<mt;Qn++)Ho.setValue(H,"_gl_DrawID",Qn),pt.render(Ue[Qn]/Ei,fr[Qn])}else if(W.isInstancedMesh)pt.renderInstances(ht,Ct,W.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,fr=Math.min(q.instanceCount,Ue);pt.renderInstances(ht,Ct,fr)}else pt.render(ht,Ct)};function _t(L,G,q){L.transparent===!0&&L.side===Ii&&L.forceSinglePass===!1?(L.side=bn,L.needsUpdate=!0,Wc(L,G,q),L.side=kr,L.needsUpdate=!0,Wc(L,G,q),L.side=Ii):Wc(L,G,q)}this.compile=function(L,G,q=null){q===null&&(q=L),f=nt.get(q),f.init(G),_.push(f),q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),L!==q&&L.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();const Z=new Set;return L.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const De=he[ye];_t(De,q,W),Z.add(De)}else _t(he,q,W),Z.add(he)}),_.pop(),f=null,Z},this.compileAsync=function(L,G,q=null){const Z=this.compile(L,G,q);return new Promise(W=>{function he(){if(Z.forEach(function(ye){Oe.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){W(L);return}setTimeout(he,10)}He.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let wi=null;function hr(L){wi&&wi(L)}function d_(){js.stop()}function p_(){js.start()}const js=new Vw;js.setAnimationLoop(hr),typeof self<"u"&&js.setContext(self),this.setAnimationLoop=function(L){wi=L,te.setAnimationLoop(L),L===null?js.stop():js.start()},te.addEventListener("sessionstart",d_),te.addEventListener("sessionend",p_),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(G),G=te.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,G,R),f=nt.get(L,_.length),f.init(G),_.push(f),be.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(be),se=this.localClippingEnabled,re=ue.init(this.clippingPlanes,se),g=ve.get(L,x.length),g.init(),x.push(g),te.enabled===!0&&te.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&Kf(he,G,-1/0,y.sortObjects)}Kf(L,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort($,J),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&ke.addToRenderList(g,L),this.info.render.frame++,re===!0&&ue.beginShadows();const q=f.state.shadowsArray;we.render(q,L,G),re===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,W=g.transmissive;if(f.setupLights(),G.isArrayCamera){const he=G.cameras;if(W.length>0)for(let ye=0,De=he.length;ye<De;ye++){const Le=he[ye];g_(Z,W,L,Le)}Xe&&ke.render(L);for(let ye=0,De=he.length;ye<De;ye++){const Le=he[ye];m_(g,L,Le,Le.viewport)}}else W.length>0&&g_(Z,W,L,G),Xe&&ke.render(L),m_(g,L,G);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(y,L,G),Tt.resetDefaultState(),T=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],re===!0&&ue.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Kf(L,G,q,Z){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ee.intersectsSprite(L)){Z&&Ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(be);const ye=K.update(L),De=L.material;De.visible&&g.push(L,ye,De,q,Ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ee.intersectsObject(L))){const ye=K.update(L),De=L.material;if(Z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ve.copy(L.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ve.copy(ye.boundingSphere.center)),Ve.applyMatrix4(L.matrixWorld).applyMatrix4(be)),Array.isArray(De)){const Le=ye.groups;for(let Ge=0,Ye=Le.length;Ge<Ye;Ge++){const Ne=Le[Ge],ht=De[Ne.materialIndex];ht&&ht.visible&&g.push(L,ye,ht,q,Ve.z,Ne)}}else De.visible&&g.push(L,ye,De,q,Ve.z,null)}}const he=L.children;for(let ye=0,De=he.length;ye<De;ye++)Kf(he[ye],G,q,Z)}function m_(L,G,q,Z){const W=L.opaque,he=L.transmissive,ye=L.transparent;f.setupLightsView(q),re===!0&&ue.setGlobalState(y.clippingPlanes,q),Z&&Ae.viewport(C.copy(Z)),W.length>0&&Gc(W,G,q),he.length>0&&Gc(he,G,q),ye.length>0&&Gc(ye,G,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function g_(L,G,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new ki(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?zc:Br,minFilter:po,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const he=f.state.transmissionRenderTarget[Z.id],ye=Z.viewport||C;he.setSize(ye.z,ye.w);const De=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(j),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&ke.render(q);const Le=y.toneMapping;y.toneMapping=Ns;const Ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),re===!0&&ue.setGlobalState(y.clippingPlanes,Z),Gc(L,q,Z),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ne=0,ht=G.length;Ne<ht;Ne++){const bt=G[Ne],Ct=bt.object,Bn=bt.geometry,pt=bt.material,Ue=bt.group;if(pt.side===Ii&&Ct.layers.test(Z.layers)){const fr=pt.side;pt.side=bn,pt.needsUpdate=!0,__(Ct,q,Z,Bn,pt,Ue),pt.side=fr,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}y.setRenderTarget(De),y.setClearColor(j,Q),Ge!==void 0&&(Z.viewport=Ge),y.toneMapping=Le}function Gc(L,G,q){const Z=G.isScene===!0?G.overrideMaterial:null;for(let W=0,he=L.length;W<he;W++){const ye=L[W],De=ye.object,Le=ye.geometry,Ge=Z===null?ye.material:Z,Ye=ye.group;De.layers.test(q.layers)&&__(De,G,q,Le,Ge,Ye)}}function __(L,G,q,Z,W,he){L.onBeforeRender(y,G,q,Z,W,he),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),W.onBeforeRender(y,G,q,Z,L,he),W.transparent===!0&&W.side===Ii&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,y.renderBufferDirect(q,G,Z,W,L,he),W.side=kr,W.needsUpdate=!0,y.renderBufferDirect(q,G,Z,W,L,he),W.side=Ii):y.renderBufferDirect(q,G,Z,W,L,he),L.onAfterRender(y,G,q,Z,W,he)}function Wc(L,G,q){G.isScene!==!0&&(G=it);const Z=Oe.get(L),W=f.state.lights,he=f.state.shadowsArray,ye=W.state.version,De=ge.getParameters(L,W.state,he,G,q),Le=ge.getProgramCacheKey(De);let Ge=Z.programs;Z.environment=L.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(L.isMeshStandardMaterial?B:w).get(L.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&L.envMap===null?G.environmentRotation:L.envMapRotation,Ge===void 0&&(L.addEventListener("dispose",$e),Ge=new Map,Z.programs=Ge);let Ye=Ge.get(Le);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===ye)return x_(L,De),Ye}else De.uniforms=ge.getUniforms(L),L.onBeforeCompile(De,y),Ye=ge.acquireProgram(De,Le),Ge.set(Le,Ye),Z.uniforms=De.uniforms;const Ne=Z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ne.clippingPlanes=ue.uniform),x_(L,De),Z.needsLights=p2(L),Z.lightsStateVersion=ye,Z.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function v_(L){if(L.uniformsList===null){const G=L.currentProgram.getUniforms();L.uniformsList=Ph.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function x_(L,G){const q=Oe.get(L);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function f2(L,G,q,Z,W){G.isScene!==!0&&(G=it),b.resetTextureUnits();const he=G.fog,ye=Z.isMeshStandardMaterial?G.environment:null,De=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cl,Le=(Z.isMeshStandardMaterial?B:w).get(Z.envMap||ye),Ge=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let Ct=Ns;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const Bn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=Bn!==void 0?Bn.length:0,Ue=Oe.get(Z),fr=f.state.lights;if(re===!0&&(se===!0||L!==S)){const ci=L===S&&Z.id===T;ue.setState(Z,L,ci)}let mt=!1;Z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==fr.state.version||Ue.outputColorSpace!==De||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Le||Z.fog===!0&&Ue.fog!==he||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ue.numPlanes||Ue.numIntersection!==ue.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==Ye||Ue.morphTargets!==Ne||Ue.morphNormals!==ht||Ue.morphColors!==bt||Ue.toneMapping!==Ct||Ue.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Ue.__version=Z.version);let Ei=Ue.currentProgram;mt===!0&&(Ei=Wc(Z,G,W));let Ho=!1,Qn=!1,dl=!1;const Rt=Ei.getUniforms(),Xi=Ue.uniforms;if(Ae.useProgram(Ei.program)&&(Ho=!0,Qn=!0,dl=!0),Z.id!==T&&(T=Z.id,Qn=!0),Ho||S!==L){Ae.buffers.depth.getReversed()?(le.copy(L.projectionMatrix),JA(le),eC(le),Rt.setValue(H,"projectionMatrix",le)):Rt.setValue(H,"projectionMatrix",L.projectionMatrix),Rt.setValue(H,"viewMatrix",L.matrixWorldInverse);const Wr=Rt.map.cameraPosition;Wr!==void 0&&Wr.setValue(H,Fe.setFromMatrixPosition(L.matrixWorld)),Re.logarithmicDepthBuffer&&Rt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Rt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Qn=!0,dl=!0)}if(W.isSkinnedMesh){Rt.setOptional(H,W,"bindMatrix"),Rt.setOptional(H,W,"bindMatrixInverse");const ci=W.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),Rt.setValue(H,"boneTexture",ci.boneTexture,b))}W.isBatchedMesh&&(Rt.setOptional(H,W,"batchingTexture"),Rt.setValue(H,"batchingTexture",W._matricesTexture,b),Rt.setOptional(H,W,"batchingIdTexture"),Rt.setValue(H,"batchingIdTexture",W._indirectTexture,b),Rt.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&Rt.setValue(H,"batchingColorTexture",W._colorsTexture,b));const pl=q.morphAttributes;if((pl.position!==void 0||pl.normal!==void 0||pl.color!==void 0)&&Be.update(W,q,Ei),(Qn||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,Rt.setValue(H,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xi.envMap.value=Le,Xi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(Xi.envMapIntensity.value=G.environmentIntensity),Qn&&(Rt.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&d2(Xi,dl),he&&Z.fog===!0&&de.refreshFogUniforms(Xi,he),de.refreshMaterialUniforms(Xi,Z,O,X,f.state.transmissionRenderTarget[L.id]),Ph.upload(H,v_(Ue),Xi,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ph.upload(H,v_(Ue),Xi,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Rt.setValue(H,"center",W.center),Rt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(H,"normalMatrix",W.normalMatrix),Rt.setValue(H,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ci=Z.uniformsGroups;for(let Wr=0,jr=ci.length;Wr<jr;Wr++){const y_=ci[Wr];V.update(y_,Ei),V.bind(y_,Ei)}}return Ei}function d2(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function p2(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,G,q){Oe.get(L.texture).__webglTexture=G,Oe.get(L.depthTexture).__webglTexture=q;const Z=Oe.get(L);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,G){const q=Oe.get(L);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,q=0){R=L,D=G,A=q;let Z=!0,W=null,he=!1,ye=!1;if(L){const Le=Oe.get(L);if(Le.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(H.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)b.setupRenderTarget(L);else if(Le.__hasExternalTextures)b.rebindTextures(L,Oe.get(L.texture).__webglTexture,Oe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ne=L.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&Oe.has(Ne)&&(L.width!==Ne.image.width||L.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(L)}}const Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);const Ye=Oe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?W=Ye[G][q]:W=Ye[G],he=!0):L.samples>0&&b.useMultisampledRTT(L)===!1?W=Oe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?W=Ye[q]:W=Ye,C.copy(L.viewport),z.copy(L.scissor),F=L.scissorTest}else C.copy(ce).multiplyScalar(O).floor(),z.copy(pe).multiplyScalar(O).floor(),F=We;if(Ae.bindFramebuffer(H.FRAMEBUFFER,W)&&Z&&Ae.drawBuffers(L,W),Ae.viewport(C),Ae.scissor(z),Ae.setScissorTest(F),he){const Le=Oe.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,q)}else if(ye){const Le=Oe.get(L.texture),Ge=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,q||0,Ge)}T=-1},this.readRenderTargetPixels=function(L,G,q,Z,W,he,ye){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Oe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){Ae.bindFramebuffer(H.FRAMEBUFFER,De);try{const Le=L.texture,Ge=Le.format,Ye=Le.type;if(!Re.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-Z&&q>=0&&q<=L.height-W&&H.readPixels(G,q,Z,W,Ze.convert(Ge),Ze.convert(Ye),he)}finally{const Le=R!==null?Oe.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(L,G,q,Z,W,he,ye){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Oe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){const Le=L.texture,Ge=Le.format,Ye=Le.type;if(!Re.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=L.width-Z&&q>=0&&q<=L.height-W){Ae.bindFramebuffer(H.FRAMEBUFFER,De);const Ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.bufferData(H.PIXEL_PACK_BUFFER,he.byteLength,H.STREAM_READ),H.readPixels(G,q,Z,W,Ze.convert(Ge),Ze.convert(Ye),0);const ht=R!==null?Oe.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,ht);const bt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await QA(H,bt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,he),H.deleteBuffer(Ne),H.deleteSync(bt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,G=null,q=0){L.isTexture!==!0&&(Bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,L=arguments[1]);const Z=Math.pow(2,-q),W=Math.floor(L.image.width*Z),he=Math.floor(L.image.height*Z),ye=G!==null?G.x:0,De=G!==null?G.y:0;b.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,ye,De,W,he),Ae.unbindTexture()},this.copyTextureToTexture=function(L,G,q=null,Z=null,W=0){L.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,L=arguments[1],G=arguments[2],W=arguments[3]||0,q=null);let he,ye,De,Le,Ge,Ye,Ne,ht,bt;const Ct=L.isCompressedTexture?L.mipmaps[W]:L.image;q!==null?(he=q.max.x-q.min.x,ye=q.max.y-q.min.y,De=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,Ge=q.min.y,Ye=q.isBox3?q.min.z:0):(he=Ct.width,ye=Ct.height,De=Ct.depth||1,Le=0,Ge=0,Ye=0),Z!==null?(Ne=Z.x,ht=Z.y,bt=Z.z):(Ne=0,ht=0,bt=0);const Bn=Ze.convert(G.format),pt=Ze.convert(G.type);let Ue;G.isData3DTexture?(b.setTexture3D(G,0),Ue=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Ue=H.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Ue=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const fr=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ei=H.getParameter(H.UNPACK_SKIP_PIXELS),Ho=H.getParameter(H.UNPACK_SKIP_ROWS),Qn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ge),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const dl=L.isDataArrayTexture||L.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const Xi=Oe.get(L),pl=Oe.get(G),ci=Oe.get(Xi.__renderTarget),Wr=Oe.get(pl.__renderTarget);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,ci.__webglFramebuffer),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let jr=0;jr<De;jr++)dl&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(L).__webglTexture,W,Ye+jr),L.isDepthTexture?(Rt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(G).__webglTexture,W,bt+jr),H.blitFramebuffer(Le,Ge,he,ye,Ne,ht,he,ye,H.DEPTH_BUFFER_BIT,H.NEAREST)):Rt?H.copyTexSubImage3D(Ue,W,Ne,ht,bt+jr,Le,Ge,he,ye):H.copyTexSubImage2D(Ue,W,Ne,ht,bt+jr,Le,Ge,he,ye);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rt?L.isDataTexture||L.isData3DTexture?H.texSubImage3D(Ue,W,Ne,ht,bt,he,ye,De,Bn,pt,Ct.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Ue,W,Ne,ht,bt,he,ye,De,Bn,Ct.data):H.texSubImage3D(Ue,W,Ne,ht,bt,he,ye,De,Bn,pt,Ct):L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,Ne,ht,he,ye,Bn,pt,Ct.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,Ne,ht,Ct.width,Ct.height,Bn,Ct.data):H.texSubImage2D(H.TEXTURE_2D,W,Ne,ht,he,ye,Bn,pt,Ct);H.pixelStorei(H.UNPACK_ROW_LENGTH,fr),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ei),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ho),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qn),W===0&&G.generateMipmaps&&H.generateMipmap(Ue),Ae.unbindTexture()},this.copyTextureToTexture3D=function(L,G,q=null,Z=null,W=0){return L.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,L=arguments[2],G=arguments[3],W=arguments[4]||0),Bl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,G,q,Z,W)},this.initRenderTarget=function(L){Oe.get(L).__webglFramebuffer===void 0&&b.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?b.setTextureCube(L,0):L.isData3DTexture?b.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?b.setTexture2DArray(L,0):b.setTexture2D(L,0),Ae.unbindTexture()},this.resetState=function(){D=0,A=0,R=null,Ae.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}class p0 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cL{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=h0,this.updateRanges=[],this.version=0,this.uuid=Dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new I;class Ss{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix4(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.applyNormalMatrix(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.transformDirection(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ui(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ui(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ui(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ui(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Hi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xw extends On{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new ft;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(qt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(qt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $w extends Gr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uL extends $w{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jg(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Lu=new I,ep=new jg,tp=new jg,np=new jg;class Yw extends Gr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Lu.subVectors(r[0],r[1]).add(r[0]),c=Lu);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Lu.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Lu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ep.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),tp.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),np.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(ep.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tp.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),np.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ep.calc(l),tp.calc(l),np.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lx(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function hL(t,e){const n=1-t;return n*n*e}function fL(t,e){return 2*(1-t)*t*e}function dL(t,e){return t*t*e}function rc(t,e,n,i){return hL(t,e)+fL(t,n)+dL(t,i)}function pL(t,e){const n=1-t;return n*n*n*e}function mL(t,e){const n=1-t;return 3*n*n*t*e}function gL(t,e){return 3*(1-t)*t*t*e}function _L(t,e){return t*t*t*e}function sc(t,e,n,i,r){return pL(t,e)+mL(t,n)+gL(t,i)+_L(t,r)}class vL extends Gr{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sc(e,r.x,s.x,o.x,a.x),sc(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xL extends Gr{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sc(e,r.x,s.x,o.x,a.x),sc(e,r.y,s.y,o.y,a.y),sc(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yL extends Gr{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SL extends Gr{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ML extends Gr{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(rc(e,r.x,s.x,o.x),rc(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qw extends Gr{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(rc(e,r.x,s.x,o.x),rc(e,r.y,s.y,o.y),rc(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wL extends Gr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Lx(a,l.x,c.x,h.x,u.x),Lx(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var EL=Object.freeze({__proto__:null,ArcCurve:uL,CatmullRomCurve3:Yw,CubicBezierCurve:vL,CubicBezierCurve3:xL,EllipseCurve:$w,LineCurve:yL,LineCurve3:SL,QuadraticBezierCurve:ML,QuadraticBezierCurve3:qw,SplineCurve:wL});class Xg extends oi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let m=0;const v=[],g=i/2;let f=0;x(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function x(){const y=new I,P=new I;let D=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const T=[],S=R/s,C=S*(n-e)+e;for(let z=0;z<=r;z++){const F=z/r,j=F*l+a,Q=Math.sin(j),k=Math.cos(j);P.x=C*Q,P.y=-S*i+g,P.z=C*k,u.push(P.x,P.y,P.z),y.set(Q,A,k).normalize(),d.push(y.x,y.y,y.z),p.push(F,1-S),T.push(m++)}v.push(T)}for(let R=0;R<r;R++)for(let T=0;T<s;T++){const S=v[T][R],C=v[T+1][R],z=v[T+1][R+1],F=v[T][R+1];(e>0||T!==0)&&(h.push(S,C,F),D+=3),(n>0||T!==s-1)&&(h.push(C,z,F),D+=3)}c.addGroup(f,D,0),f+=D}function _(y){const P=m,D=new Me,A=new I;let R=0;const T=y===!0?e:n,S=y===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,g*S,0),d.push(0,S,0),p.push(.5,.5),m++;const C=m;for(let z=0;z<=r;z++){const j=z/r*l+a,Q=Math.cos(j),k=Math.sin(j);A.x=T*k,A.y=g*S,A.z=T*Q,u.push(A.x,A.y,A.z),d.push(0,S,0),D.x=Q*.5+.5,D.y=k*.5*S+.5,p.push(D.x,D.y),m++}for(let z=0;z<r;z++){const F=P+z,j=C+z;y===!0?h.push(j,j+1,F):h.push(j+1,j,F),R+=3}c.addGroup(f,R,y===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xg(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $g extends Xg{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $g(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yg extends oi{constructor(e=new qw(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new Me;let h=new I;const u=[],d=[],p=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function v(){for(let _=0;_<n;_++)g(_);g(s===!1?n:0),x(),f()}function g(_){h=e.getPointAt(_/n,h);const y=o.normals[_],P=o.binormals[_];for(let D=0;D<=r;D++){const A=D/r*Math.PI*2,R=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+R*P.x,l.y=T*y.y+R*P.y,l.z=T*y.z+R*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=n;_++)for(let y=1;y<=r;y++){const P=(r+1)*(_-1)+(y-1),D=(r+1)*_+(y-1),A=(r+1)*_+y,R=(r+1)*(_-1)+y;m.push(P,D,R),m.push(D,A,R)}}function x(){for(let _=0;_<=n;_++)for(let y=0;y<=r;y++)c.x=_/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yg(new EL[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class TL extends oi{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,p=u.count;for(let m=d,v=d+p;m<v;m+=3)for(let g=0;g<3;g++){const f=a.getX(m+g),x=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,x),Nx(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),Nx(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Gt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Nx(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class bL extends ul{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class af extends ul{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aw,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gf extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class AL extends Gf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ip=new ft,Ix=new I,Ux=new I;class qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hg,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ix.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ix),Ux.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ux),n.updateMatrixWorld(),ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CL extends qg{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=nl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RL extends Gf{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new CL}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ox=new ft,Cl=new I,rp=new I;class PL extends qg{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cl),rp.copy(i.position),rp.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(rp),i.updateMatrixWorld(),r.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Ox.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ox)}}class DL extends Gf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LL extends qg{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NL extends Gf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new LL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IL extends oi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class m0 extends cL{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class zx{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fx=new I,Nu=new I;class UL{constructor(e=new I,n=new I){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Fx.subVectors(e,this.start),Nu.subVectors(this.end,this.start);const i=Nu.dot(Nu);let s=Nu.dot(Fx)/i;return n&&(s=qt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class OL extends Bo{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lg);const yr=.08,g0=.5-yr,Mt=g0/2,Ga=62;function Kw(t){const e=Cn(t),n=new I(Math.cos(e),0,Math.sin(e)),i=new I(0,Math.cos(e),Math.sin(e)),r=n.clone().add(i),s=new I().crossVectors(n,i).normalize(),o=Math.SQRT1_2/(1+n.dot(i)),a=Math.sqrt(Math.max(0,1-o*o*r.lengthSq())),l=r.clone().multiplyScalar(o).addScaledVector(s,a),c=r.clone().multiplyScalar(o).addScaledVector(s,-a),h=l.x+l.y>c.x+c.y?l:c,u=new I(-Math.sin(e),0,Math.cos(e)),d=new I().crossVectors(n,h).normalize(),p=new I().crossVectors(h,i).normalize(),m=(v,g,f)=>Math.atan2(new I().crossVectors(v,g).dot(f),v.dot(g))*180/Math.PI;return[m(u,d,n),m(d,p,h)]}const kx=40,Kg=Array.from({length:kx+1},(t,e)=>e/kx),zL=Kg.map(t=>[t,Ga*t]),FL=Kg.map(t=>[t,Kw(Ga*t)[0]]),kL=Kg.map(t=>[t,Kw(Ga*t)[1]]),BL=(()=>{const t=[N(E(M(Mt,-1),M(Mt,1)),M(.3,0),{all:!0,where:e=>e.x>Mt,keys:zL}),N(E(M(-Mt,-1),M(-Mt,1)),M(-.3,0),{all:!0,where:e=>e.x<-Mt,angle:Ga,tie:{to:0,k:1}}),N(E(M(-1,Mt),M(1,Mt)),M(0,.3),{all:!0,where:e=>Math.abs(e.x)<Mt&&e.y>Mt,angle:Ga,tie:{to:0,k:1}}),N(E(M(-1,-Mt),M(1,-Mt)),M(0,-.3),{all:!0,where:e=>Math.abs(e.x)<Mt&&e.y<-Mt,angle:Ga,tie:{to:0,k:1}})];for(const e of[1,-1])for(const n of[1,-1]){const i=e>0?0:1,r=s=>e*s.x>Mt&&n*s.y>Mt;t.push(N(E(M(-1,n*Mt),M(1,n*Mt)),M(e*.36,n*.27),{all:!0,where:r,parent:i,keys:FL,hint:!1})),t.push(N(E(M(e*Mt,n*Mt),M(e*g0,n*g0)),M(e*.27,n*.36),{all:!0,where:r,parent:t.length-1,keys:kL}))}return gt(t,[0])})(),VL={id:"candy-dish",name:"糖果碟",cat:"器物和盒子",level:1,paperName:"浅粉",blurb:"斜斜的四面墙，四个角各伸出一只尖耳朵，像一朵打开的花，放几颗糖正好。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:-25,el:42},steps:[{text:"白色的一面朝上。把左边和右边各向里折一条窄边，宽度和手指差不多。",ops:[oe(N(E([1-yr,0],[1-yr,1]),[.99,.5]),N(E([yr,0],[yr,1]),[.01,.5]))]},{text:"上边和下边也各向里折一条一样宽的窄边，四周就有了一圈有颜色的边。",ops:[oe(N(E([0,1-yr],[1,1-yr]),[.5,.99],{all:!0}),N(E([0,yr],[1,yr]),[.5,.01],{all:!0}))]},{text:"把下边折到纸的正中间，压出折痕后打开；上边也一样。",tech:"折痕",ops:[Ie(E(M(-1,-Mt),M(1,-Mt)),M(0,-.4),{all:!0}),Ie(E(M(-1,Mt),M(1,Mt)),M(0,.4),{all:!0})]},{text:"左边和右边也分别折到正中间，压出折痕后打开。纸上有了一个“井”字，中间的方块是碟底。",ops:[Ie(E(M(-Mt,-1),M(-Mt,1)),M(-.4,0),{all:!0}),Ie(E(M(Mt,-1),M(Mt,1)),M(.4,0),{all:!0})]},{text:"沿着“井”字把四条边斜斜地立起来，成为碟子的墙。四个角上的小方块会顺着对角线对折，变成尖尖的耳朵伸到外面。完成！",ops:[BL],view:{az:-25,el:42},captions:[{at:0,text:"沿着“井”字把四条边斜斜地立起来"},{at:.5,pause:900,text:"四个角上的小方块顺着对角线对折"},{at:.88,text:"完成！四只尖耳朵伸在外面，就是糖果碟。"}]}]},HL=Object.freeze(Object.defineProperty({__proto__:null,default:VL},Symbol.toStringTag,{value:"Module"})),GL=[1,0],WL=[0,1],jL={id:"cat",name:"小猫",cat:"动物",level:1,paperName:"杏黄",blurb:"平平的头顶，两只竖起来的尖耳朵。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"下角向上折到上角，对折成三角形。",ops:[fe(E(GL,WL),[.2,.2])]},{text:"把上面的尖角向下折，头顶变平。",ops:[fe(E([1,.594],[.594,1]),[.98,.98],{all:!0})]},{text:"把左右两个角斜着向上折，角尖要高出头顶，做成耳朵。",ops:[oe(N(E([.606,.394],[.897,.322]),[.98,.03],{all:!0}),N(E([.394,.606],[.322,.897]),[.03,.98],{all:!0}))]},{text:"翻面。完成！",captions:[{at:0,text:"翻面。"},{at:.85,text:"完成！"}],ops:[Ke]}]},XL=Object.freeze(Object.defineProperty({__proto__:null,default:jL},Symbol.toStringTag,{value:"Module"})),$L=[0,0],YL={id:"chestnut",name:"栗子",cat:"花草和节日",level:1,paperName:"茶",colorUp:!0,blurb:"棕色的栗子，尖尖的头，圆圆的肩，底下露出一块浅色的底。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"有颜色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把下角向上折，角尖落在中心的下面一点。折上来的白色三角形就是栗子的底。",ops:[fe({pointTo:[$L,[.38,.38]]},[.02,.02])]},{text:"把左右两个角向后折掉一块，折线是竖直的，栗子变得胖胖的。",ops:[oe(N({through:[M(-.5,-.3),M(-.5,.3)]},M(-.65,0),{all:!0,dir:"mountain"}),N({through:[M(.5,-.3),M(.5,.3)]},M(.65,0),{all:!0,dir:"mountain"}))]},{text:"把左右肩上的角和底部的两个角各向后折掉一小块，栗子就圆了。",ops:[oe(N({through:[M(-.5,.1),M(-.35,.357)]},M(-.48,.2),{all:!0,dir:"mountain"}),N({through:[M(.5,.1),M(.35,.357)]},M(.48,.2),{all:!0,dir:"mountain"}),N({through:[M(-.5,-.1),M(-.35,-.3)]},M(-.48,-.2),{all:!0,dir:"mountain"}),N({through:[M(.5,-.1),M(.35,-.3)]},M(.48,-.2),{all:!0,dir:"mountain"}))]},{text:"最后把最上面的尖角向后折一点点。完成！棕色的壳，浅色的底。",captions:[{at:0,text:"最后把最上面的尖角向后折一点点。"},{at:.85,text:"完成！棕色的壳，浅色的底。"}],ops:[Je({through:[M(-.05,.62),M(.05,.62)]},M(0,.69),{all:!0})]}]},qL=Object.freeze(Object.defineProperty({__proto__:null,default:YL},Symbol.toStringTag,{value:"Module"})),Ri=1.8,Bx=.45,KL={id:"chopstick-sleeve",name:"筷子套",cat:"器物和盒子",level:1,paperName:"朱红",paper:{w:1,h:Ri},blurb:"一个窄长的小口袋，白色的尖领口朝上，筷子从领口插进去。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，纸竖着放。把左边向里折，折线在离左边四分之一的地方。",ops:[fe(E([.25,0],[.25,Ri]),[.05,Ri/2])]},{text:"右边也向里折，两片在中间碰在一起。",ops:[fe(E([.75,0],[.75,Ri]),[.95,Ri/2])]},{text:"把两片上端靠中间的角各向外折一下，露出里面白色的纸，就是“V”形的领子。",ops:[oe(N(E([0,Ri-Bx],[.25,Ri]),[.02,Ri-.02],{region:t=>t[0]<.25}),N(E([1,Ri-Bx],[.75,Ri]),[.98,Ri-.02],{region:t=>t[0]>.75}))]},{text:"把下边向后折上去一小段，口袋的底就封住了。完成！筷子从领口插进去。",captions:[{at:0,text:"把下边向后折上去一小段，口袋的底就封住了。"},{at:.85,text:"完成！筷子从领口插进去。"}],ops:[Je(E([0,.3],[1,.3]),[.5,.05],{all:!0})]}]},ZL=Object.freeze(Object.defineProperty({__proto__:null,default:KL},Symbol.toStringTag,{value:"Module"})),Vx=[1,0],Hx=[1,1],Gx=[0,1],QL=t=>t[0]<.5&&t[1]<.5,JL=t=>t[0]>.5&&t[1]>.5,eN=t=>t[0]>.5&&t[1]<.5,tN=t=>t[0]<.5&&t[1]>.5,nN={id:"cicada",name:"蝉",cat:"动物",level:1,paperName:"嫩绿",blurb:"两层尖角错开折下来，就是蝉背上的纹路。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"下角向上折到上角，对折成三角形。",ops:[fe(E(Vx,Gx),[.2,.2])]},{text:"把左右两个角向上折到顶角。",ops:[oe(N({pointTo:[Vx,Hx]},[.97,.03],{all:!0}),N({pointTo:[Gx,Hx]},[.03,.97],{all:!0}))]},{text:"把刚折上去的两个角再向下折，角尖朝下、稍微分开，这是翅膀。",ops:[oe(N(E(M(0,.4),M(.3,.445)),M(.02,.62),{all:!0,region:eN}),N(E(M(0,.4),M(-.3,.445)),M(-.02,.62),{all:!0,region:tN}))]},{text:"顶角有两层。把上面一层向下折。",ops:[fe(E(M(-.3,.47),M(.3,.47)),[.03,.03],{region:QL})]},{text:"把下面一层也向下折，比刚才那层高一点，露出一道边。",ops:[fe(E(M(-.3,.53),M(.3,.53)),[.97,.97],{region:JL})]},{text:"把左右两边向后折，身体变窄。完成！",captions:[{at:0,text:"把左右两边向后折，身体变窄。"},{at:.85,text:"完成！"}],ops:[oe(N(E(M(.2,-.2),M(.2,.6)),M(.5,.2),{all:!0,dir:"mountain"}),N(E(M(-.2,-.2),M(-.2,.6)),M(-.5,.2),{all:!0,dir:"mountain"}))]}]},iN=Object.freeze(Object.defineProperty({__proto__:null,default:nN},Symbol.toStringTag,{value:"Module"})),Iu=[.5,.5],ts=Math.SQRT2/4,rN={id:"coaster",name:"杯垫",cat:"器物和盒子",level:1,paperName:"天蓝",blurb:"先四个角折到中心，再把新的四个角折一半进去，得到一个八角形的小杯垫。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。沿对角线对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,0],[1,1]),[1,0])]},{text:"另一条对角线也折出折痕。两条折痕交叉的地方是中心。",ops:[Ie(E([1,0],[0,1]),[1,1])]},{text:"把纸转成菱形。",ops:[Qe(45)]},{text:"把四个角都折到中心，变成一个正方形。",ops:[oe(N({pointTo:[[0,0],Iu]},[.02,.02]),N({pointTo:[[1,0],Iu]},[.98,.02]),N({pointTo:[[1,1],Iu]},[.98,.98]),N({pointTo:[[0,1],Iu]},[.02,.98]))]},{text:"正方形的四个角再向中心折，折到离中心还差一半的地方。中间留一块方方的空。完成！八角形的杯垫，放杯子刚好。",captions:[{at:0,text:"正方形的四个角再向中心折，折到离中心还差一半的地方。"},{at:.85,text:"完成！八角形的杯垫，放杯子刚好。"}],ops:[oe(...[[ts,ts],[-ts,ts],[-ts,-ts],[ts,-ts]].map(([t,e])=>N({pointTo:[M(t,e),M(t*.4,e*.4)]},M(t,e),{all:!0})))]}]},sN=Object.freeze(Object.defineProperty({__proto__:null,default:rN},Symbol.toStringTag,{value:"Module"})),Rl=[.5,.5],Oo=1e-9,sp=t=>t[1]>t[0]-Oo&&t[0]+t[1]>1-Oo,Wx=t=>t[0]>t[1]-Oo&&t[0]+t[1]>1-Oo,jx=t=>t[1]>t[0]-Oo&&t[0]+t[1]<1+Oo,Xx=t=>t[1]>.5-Oo,$x=(t,e)=>n=>t(n)||e(n),Uu=26*Math.PI/180,oN=gt([N(E(Rl,[1,0]),[.9,.3],{dir:"valley",region:$x(Wx,sp)}),N(E(Rl,[1,.5]),[.9,.7],{dir:"mountain",parent:0,region:$x(Wx,sp)}),N(E(Rl,[1,1]),[.5,.9],{dir:"valley",parent:1,region:sp}),N(E(Rl,[0,0]),[.1,.3],{dir:"valley",region:jx,tie:{to:0,k:1}}),N(E(Rl,[0,.5]),[.1,.7],{dir:"mountain",parent:3,region:jx,tie:{to:1,k:1}})]),aN={id:"crab",name:"螃蟹",cat:"动物",level:2,paperName:"朱红",colorUp:!0,blurb:"举着两只大钳子、顶着一对眼睛的红螃蟹。",techs:["折痕","收拢"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"有颜色的一面朝上。上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,.5],[1,.5]),[.5,1])]},{text:"左右对折，压出折痕后打开。",ops:[Ie(E([.5,0],[.5,1]),[1,.5])]},{text:"翻面，白色的一面朝上。",ops:[Ke]},{text:"沿对角线对折，压出折痕后打开。",ops:[Ie(E([0,0],[1,1]),[0,1])]},{text:"另一条对角线也同样折出折痕。",ops:[Ie(E([1,0],[0,1]),[1,1])]},{text:"捏住左右两边的中点向里推，上半张沿横折痕翻下来，压平成一个三角形。这叫“三角基本形”。",tech:"收拢",ops:[oN],inset:{el:86,az:0,label:"俯视"},captions:[{at:0,text:"捏住左右两边的中点，向里推"},{at:.5,pause:1100,text:"两边收进去，上半张翻下来"},{at:.86,text:"压平成一个三角形"}]},{text:"把最上面一层的左右两个角斜着向上翻，折线从底边中点出发，两个角尖朝上分开。这是一对大钳子。",ops:[oe(N(E(M(0,-.5),M(Math.cos(Uu),-.5+Math.sin(Uu))),M(.45,-.48),{all:!0,region:Xx,tag:"claw"}),N(E(M(0,-.5),M(-Math.cos(Uu),-.5+Math.sin(Uu))),M(-.45,-.48),{all:!0,region:Xx,tag:"claw"}))]},{text:"把两只钳子中间的顶角向后折，上边变平。",ops:[Je(E(M(-1,-.25),M(1,-.25)),M(0,-.05),{all:!0,has:"!claw"})]},{text:"把下面左右两个角斜着向后折。角尖会从背后翻到上边，露在钳子里面，就是螃蟹的一对眼睛。完成！",captions:[{at:0,text:"把下面左右两个角斜着向后折。"},{at:.85,text:"完成！角尖从背后露出来，是一对眼睛。"}],ops:[oe(N(E(M(-.12,-.5),M(-.5,-.12)),M(-.49,-.49),{all:!0,dir:"mountain"}),N(E(M(.12,-.5),M(.5,-.12)),M(.49,-.49),{all:!0,dir:"mountain"}))]}]},lN=Object.freeze(Object.defineProperty({__proto__:null,default:aN},Symbol.toStringTag,{value:"Module"})),Pe=[.5,.5],zn=.5*Math.tan(Math.PI/8),wo=1e-9,Zg=t=>t[0]>.5-wo&&t[1]>.5-wo,kc=t=>Zg(mi(t)),Qg=t=>t[0]>.5-wo&&t[1]<.5+wo&&t[0]+t[1]>1-wo,Zw=t=>Qg(uw(t)),cN=t=>Zw(mi(t)),uN=t=>Qg(mi(t)),Nr=t=>t[0]+t[1]>1-wo,Ir=t=>t[0]+t[1]<1+wo,hN=gt([N(E(Pe,[.5,0]),[.6,.1],{dir:"valley",region:t=>t[0]>.5}),N(E(Pe,[1,0]),[.9,.3],{dir:"mountain",parent:0,region:t=>t[0]>.5}),N(E(Pe,[1,.5]),[.75,.75],{dir:"valley",parent:1,region:t=>t[0]>.5}),N(E(Pe,[0,.5]),[.1,.6],{dir:"valley",region:t=>t[0]<.5&&t[1]>.5,tie:{to:0,k:1}}),N(E(Pe,[0,1]),[.3,.9],{dir:"mountain",parent:3,region:t=>t[0]<.5&&t[1]>.5,tie:{to:1,k:1}})]),Wf=()=>[{text:"有颜色的一面朝上。沿对角线对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,0],[1,1]),[1,0])]},{text:"另一条对角线也同样折出折痕。",ops:[Ie(E([1,0],[0,1]),[1,1])]},{text:"翻面，白色的一面朝上。",ops:[Ke]},{text:"上下对折，压出折痕后打开。",ops:[Ie(E([0,.5],[1,.5]),[.5,0])]},{text:"左右对折，压出折痕后打开。",ops:[Ie(E([.5,0],[.5,1]),[0,.5])]},{text:"捏住左右两边的中点向中间推，四个角沿折痕收拢到一起，压平成一个小正方形。这就是“正方基本形”。",tech:"收拢",ops:[hN],inset:{el:86,az:0,label:"俯视"},captions:[{at:0,text:"捏住左右两边的中点，轻轻向中间推"},{at:.5,pause:1100,text:"四个角一起向中间收，像合上一把伞"},{at:.86,text:"压平成小正方形，四个角都叠在一处"}]},{text:"转一下，让开口的一角朝向自己。",ops:[Qe(-45)]}],Kt={c:[1,1],e1:[1-zn,.5],e2:[.5,1-zn],s1:[.98,.6],s2:[.6,.98],t1:[.98,.4],t2:[.4,.98],q:Zg,r1:Qg,r2:Zw},Yn={c:[0,0],e1:mi(Kt.e1),e2:mi(Kt.e2),s1:mi(Kt.s1),s2:mi(Kt.s2),t1:mi(Kt.t1),t2:mi(Kt.t2),q:kc,r1:uN,r2:cN},Yx=t=>oe(N(E(t.c,t.e1),t.s1),N(E(t.c,t.e2),t.s2)),fN=t=>gt([N(E(t.e1,t.e2),[.5+(t.c[0]-.5)*.8,.5+(t.c[1]-.5)*.8],{region:t.q}),N(E(t.c,t.e1),t.s1,{region:t.q,dir:"mountain",parent:0}),N(E(t.c,t.e2),t.s2,{region:t.q,dir:"mountain",parent:0,tie:{to:1,k:1}}),N(E(t.c,t.e1),t.t1,{region:t.r1}),N(E(t.c,t.e2),t.t2,{region:t.r2,tie:{to:3,k:1}})]),_0=(t,e)=>[{text:e?"这一面也一样：把左右两条下边对齐中线折过来。":"把最上面一层的左右两条下边对齐中线折过来。",ops:[Yx(t)]},{text:"把上面的三角形沿两个折角的上沿向下折，压出折痕后打开。",ops:[Ie(E(t.e1,t.e2),Pe,{all:!0})]},{text:"把刚才折过来的两边打开。",ops:[Yx(t)]},{text:e?"同样做花瓣折：提起下角向上翻，两边收向中线，压平。":"捏住最上面一层的下角，沿横折痕向上提；两边会顺着刚才的折痕向中线收拢，压平成细长的菱形。这叫“花瓣折”。",tech:"花瓣折",ops:[fN(t)],inset:{az:0,el:10,label:"正面平视"},captions:[{at:0,text:"只捏最上面一层的这个角，向上提",point:t.c},{at:.45,pause:1100,text:"两边不用另外折，它会顺着折痕自己收进来"},{at:.86,text:"压平成细长的菱形"}]}],Vo=()=>[...Wf(),..._0(Kt,!1),{text:"翻面。",ops:[Ke]},..._0(Yn,!0)],Qw=Math.tan(Math.PI/16),qx=.5*Qw,Wt={tip:[1,0],top:[1,.5],nar:[1-qx,.5],seed:[(3-qx-zn)/3,1/3]},Jg=(t,e)=>({tip:e(t.tip),top:e(t.top),nar:e(t.nar),seed:e(t.seed)}),Wi=Jg(Wt,uw),e_=Jg(Wt,mi),t_=Jg(Wi,mi),lf=(t,e)=>oe(N(E(t.tip,t.nar),t.seed),N(E(e.tip,e.nar),e.seed)),Bc=t=>t[0]>.5&&t[1]<.5,Jw=t=>t[0]<.5&&t[1]>.5,Ou=(t,e)=>n=>t(n)&&e(n),zs=(t,e)=>{const n=c=>c(t.top),i=c=>c(t.nar).sub(c(t.top)).normalize(),r=c=>c(t.tip).sub(c(t.top)).normalize(),s=ze(c=>n(c).add(i(c).multiplyScalar(Math.cos(Cn(e)))).add(r(c).multiplyScalar(Math.sin(Cn(e))))),o=ze(c=>n(c).add(i(c).multiplyScalar(.1))),a=ze(c=>n(c).add(r(c).multiplyScalar(.3)).add(i(c).multiplyScalar(.02))),l=(c,h)=>c.clone().sub(n(h)).dot(i(h))>0;return gt([N(E(Pe,t.tip),o,{all:!0,region:Nr,angle:0,open:89}),N(E(Pe,t.tip),o,{all:!0,region:Ir,angle:0,tie:{to:0,k:-1}}),N(E(t.top,s),a,{all:!0,region:Nr,where:l,dir:"mountain",parent:0}),N(E(t.top,s),a,{all:!0,region:Ir,where:l,dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],72)},n_=(t,e)=>{const n=u=>u(t.top),i=u=>u(t.tip),r=u=>i(u).sub(n(u)).normalize(),s=u=>{const d=r(u),p=new I(-d.y,d.x,0),m=u(t.nar).sub(n(u));return p.dot(m)>0?p:p.negate()},o=u=>i(u).sub(r(u).multiplyScalar(.115)),a=ze(u=>o(u).add(r(u).add(s(u)).normalize())),l=ze(u=>o(u).add(s(u).multiplyScalar(.008)).sub(r(u).multiplyScalar(.03))),c=ze(u=>i(u).sub(r(u).multiplyScalar(.03)).add(s(u).multiplyScalar(.003))),h={zero:ze(u=>i(u).sub(r(u).multiplyScalar(.205))),one:ze(u=>i(u).sub(r(u).multiplyScalar(.135)))};return gt([N(E(t.top,t.tip),l,{all:!0,region:Ou(e,Nr),angle:0,open:88,soft:h}),N(E(t.top,t.tip),l,{all:!0,region:Ou(e,Ir),angle:0,tie:{to:0,k:-1},soft:h}),N(E(ze(o),a),c,{all:!0,region:Ou(e,Nr),dir:"mountain",parent:0}),N(E(ze(o),a),c,{all:!0,region:Ou(e,Ir),dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],64)},dN=(2*zn/(2*zn+Qw)-.5)/.5,Hl=(t,e,n)=>[e[0]+n*(t[0]-e[0]),e[1]+n*(t[1]-e[1])],cf=(t,e)=>Hl(t,e,dN),Kx=[cf(Kt.c,Kt.e1),cf(Kt.c,Kt.e2)],Zx=[cf(Yn.c,Yn.e1),cf(Yn.c,Yn.e2)],uf=t=>oe(N(E(Kx[0],Kx[1]),[.9,.9],{angle:t,normal:[0,-1,0]}),N(E(Zx[0],Zx[1]),[.1,.1],{angle:t,dir:"mountain",normal:[0,-1,0]})),Qx=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],hf=(t,e,n,i)=>{const r=Qx(t.top,t.tip,n),s=m=>m(r),o=m=>m(t.top),a=m=>m(t.nar).sub(m(t.top)).normalize(),l=m=>m(t.tip).sub(m(t.top)).normalize(),c=ze(m=>s(m).add(a(m).multiplyScalar(Math.cos(Cn(i)))).add(l(m).multiplyScalar(Math.sin(Cn(i))))),h=ze(m=>o(m).add(a(m).multiplyScalar(.1))),u=ze(m=>m(Qx(r,t.tip,.6)).add(a(m).multiplyScalar(.004))),d=(m,v)=>m.clone().sub(o(v)).dot(a(v))>0,p=m=>v=>m(v)&&e(v);return gt([N(E(Pe,t.tip),h,{all:!0,region:Nr,where:d,angle:0,open:89,hint:!1}),N(E(Pe,t.tip),h,{all:!0,region:Ir,where:d,angle:0,tie:{to:0,k:-1},hint:!1}),N(E(r,c),u,{all:!0,region:p(Nr),dir:"mountain",parent:0}),N(E(r,c),u,{all:!0,region:p(Ir),dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],72)},eE=(t,e,n,i,r,s,o,a=!1)=>{const l=d=>{const p=d(e),m=p.clone().sub(d(t)).normalize(),v=d(n).sub(p),g=v.addScaledVector(m,-v.dot(m)).normalize();return{T:p,dir:m,perp:g}},c=(d,p=0)=>ze(m=>{const{T:v,dir:g,perp:f}=l(m);return v.addScaledVector(g,-d).addScaledVector(f,p)}),h=ze(d=>{const{T:p,dir:m,perp:v}=l(d);return p.addScaledVector(m,-i+Math.cos(Cn(r))).addScaledVector(v,Math.sin(Cn(r)))}),u={zero:c(i+.2),one:c(i+.07)};return gt([N(E(t,e),c(i+.05,.01),{all:!0,region:s,angle:0,open:88,soft:u,hint:!1}),N(E(t,e),c(i+.05,.01),{all:!0,region:o,angle:0,tie:{to:0,k:-1},soft:u,hint:!1}),N(E(c(i),h),c(i*.3,i*.03),{all:!0,region:s,dir:a?"valley":"mountain",parent:0}),N(E(c(i),h),c(i*.3,i*.03),{all:!0,region:o,dir:a?"mountain":"valley",parent:1,tie:{to:2,k:-1}})],[2],64)},pN={id:"crane",name:"千纸鹤",cat:"动物",level:2,paperName:"朱红",colorUp:!0,blurb:"最有名的折纸。折好以后把两片翅膀向下拉开，就能立在桌上。",techs:["收拢","花瓣折","内翻折"],steps:[...Vo(),{text:"下半部分是分开的两条“腿”。把这一面两条腿的外侧边对齐中线折过去，让腿变细。",ops:[lf(t_,e_)]},{text:"翻面。",ops:[Ke]},{text:"这一面也一样，把两条腿折细。",ops:[lf(Wt,Wi)]},{text:"做脖子：把一条腿向上内翻折。先像翻书一样把这一侧稍微打开，把腿沿折线翻到前后两层之间，再合上。",tech:"内翻折",ops:[zs(Wt,12)],inset:{az:74,el:12,zoom:1.2,label:"侧面"},captions:[{at:0,text:"这条腿要翻到前后两层之间去"},{at:.285,pause:1300,text:"先把这一侧像翻书一样打开"},{at:.45,text:"腿沿折线向上翻"},{at:.7,pause:1100,text:"腿从前后两层之间翻上去"},{at:.9,text:"合上，压平"}]},{text:"另一条腿也同样向上内翻折，做成尾巴。",tech:"内翻折",ops:[zs(Wi,12)],inset:{az:-74,el:12,zoom:1.2,label:"侧面"},captions:[{at:0,text:"另一条腿同样做"},{at:.285,pause:900,text:"先打开这一侧"},{at:.7,pause:900,text:"翻进两层之间，再合上"}]},{text:"做头：把脖子的尖端向下内翻折。把脖子尖端的两层撑开一点，尖角往里一按就翻过去了。",tech:"内翻折",ops:[n_(Wt,Bc)],captions:[{at:0,text:"脖子的尖端要向下翻，做成头"},{at:.3,pause:1300,text:"只把尖端的两层撑开一点"},{at:.8,text:"尖角向里一按，翻过去，再捏合"}],view:{az:-30,el:46,zoom:2.6,focus:ze(t=>t(Wt.tip).lerp(t(Wt.top),.25))}},{text:"把鹤立起来。",ops:[Qe(90,"x")],view:{az:-20,el:22}},{text:"把前后两片翅膀向下折，展开。完成！",captions:[{at:0,text:"把前后两片翅膀向下折，展开。"},{at:.85,text:"完成！"}],ops:[uf(96)],view:{az:-28,el:26}}],finale:[uf(-30)],thumbView:{az:-28,el:26}},mN=Object.freeze(Object.defineProperty({__proto__:null,default:pN},Symbol.toStringTag,{value:"Module"})),ff=1e-9,tE=t=>t[0]>.5-ff&&t[1]>.5-ff,gN=t=>tE(t)&&t[0]>t[1]-ff,_N=t=>tE(t)&&t[1]>t[0]-ff,vN=_N,xN=gN,yN=ze(t=>t([.75,.75]).add(new I(.1,0,0))),SN={id:"crow",name:"乌鸦",cat:"动物",level:2,paperName:"藏青",colorUp:!0,blurb:"黑黑的身子斜立着，尖嘴朝前，底下伸出一只小脚。",techs:["收拢","花瓣折","内翻折"],view:{az:0,el:66},thumbView:{az:0,el:76},steps:[...Vo(),{text:"把这一面朝上的那片大尖角沿横折痕向下折，盖在两条“腿”上。",ops:[fe(E(Yn.e1,Yn.e2),[.1,.1],{region:kc})]},{text:"翻面。",ops:[Ke]},{text:"做脚：在左边那条腿靠下的地方内翻折。先像翻书一样把这一侧稍微打开，把腿尖沿斜线向外翻出去，再合上。",tech:"内翻折",ops:[hf(Wt,Bc,.72,50)],captions:[{at:0,text:"左边这条腿的下半截要向外翻，做成脚"},{at:.285,pause:1200,text:"先把这一侧像翻书一样打开"},{at:.6,text:"腿尖沿斜线向外翻"},{at:.9,text:"合上，压平。一只脚伸了出来"}],view:{az:0,el:60,zoom:1.8,focus:ze(t=>t(Wt.tip))}},{text:"右边那条腿也同样内翻折，做成另一只脚。",tech:"内翻折",ops:[hf(Wi,Jw,.72,50)],view:{az:0,el:60,zoom:1.8,focus:ze(t=>t(Wi.tip))}},{text:"沿中线把右半边折到左边，整个对折。",ops:[fe(E(Pe,[1,1]),yN,{all:!0})]},{text:"做头：把最上面的尖角向前内翻折。把尖端的两层撑开一点，尖角向里一按翻过去，再捏合，伸出来的就是嘴。",tech:"内翻折",ops:[eE([.6,.6],[1,1],[.95,.7],.2,62,vN,xN)],captions:[{at:0,text:"最上面的尖角要向前翻，做成头"},{at:.3,pause:1200,text:"只把尖端的两层撑开一点"},{at:.8,text:"尖角向里一按，翻过去，再捏合"}],view:{az:0,el:60,zoom:1.8,focus:[.9,.9]}},{text:"把它斜过来，让背朝后、嘴朝前。完成！一只站着的乌鸦。",captions:[{at:0,text:"把它斜过来，让背朝后、嘴朝前。"},{at:.8,text:"完成！一只站着的乌鸦。"}],ops:[Qe(28)]}]},MN=Object.freeze(Object.defineProperty({__proto__:null,default:SN},Symbol.toStringTag,{value:"Module"})),op=[1,0],wN=[1,1],zu=[0,1],jf=2-Math.SQRT2,Gl=[1,jf],v0=[jf,1],x0=[(1+jf)/2,.5],EN=[x0[0]+.2,x0[1]+.2*(1-jf)],TN=gt([N(E(v0,Gl),[.05,.05],{place:{below:[.97,.1]},roll:.016,keys:[[0,0],[.4,100],[.56,110],[1,180]]}),N(E(x0,EN),[.97,.1],{region:t=>t[0]+t[1]>1,hint:!1,soft:{zero:[.75,.25],one:[.9,.4]},keys:[[.26,0],[.42,9],[.86,7],[1,0]]})],[0]),bN={id:"cup",name:"纸杯",cat:"器物和盒子",level:1,paperName:"天蓝",blurb:"真的能装东西的杯子，八步折好。",techs:["折痕","塞入"],steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"下角向上折到上角，对折成三角形。",ops:[fe(E(op,zu),[.2,.2])]},{text:"把左边的斜边对齐底边折一下，压出折痕后打开。折痕碰到右斜边的地方是下一步的记号。",tech:"折痕",ops:[Ie({lineTo:[[zu,wN],[zu,op]]},[.3,.98],{all:!0})],captions:[{at:0,text:"左边的斜边对齐底边折一下"},{at:.5,text:"压出折痕"},{at:.6,pause:1e3,text:"打开。折痕碰到右斜边的地方就是记号",point:Gl}]},{text:"把左角折到右斜边的记号上。折好后上沿应该是水平的。",ops:[fe({pointTo:[zu,Gl]},[.02,.98],{all:!0})],captions:[{at:0,text:"左角折向右斜边上的记号",point:Gl},{at:.8,text:"角尖对准记号，上沿应该是水平的"}]},{text:"右角也折到左边对称的位置。",ops:[fe({pointTo:[op,v0]},[.98,.02],{all:!0})],captions:[{at:0,text:"右角折到左边对称的位置"},{at:.8,text:"两片的上沿连成一条水平线"}]},{text:"把上角前面的一层向下折，插进前面那片的口袋里（口袋在它的上沿，两层纸之间）。",tech:"塞入",ops:[TN],shots:[{at:0,az:-62,el:17,zoom:1.5}],captions:[{at:0,text:"上角前面这一层向前弯下来，先不要压出折痕"},{at:.47,pause:1100,text:"口袋在这一片的上沿，角尖对准它",point:ze(t=>t([.99,.36]))},{at:.6,text:"顺着口袋往下送，一直送到底"},{at:.92,text:"送到底了，把上沿压平"}]},{text:"翻面。",ops:[Ke]},{text:"剩下的上角也向下折。完成！从上面把杯口撑开，就是一个纸杯。",captions:[{at:0,text:"剩下的上角也向下折。"},{at:.85,text:"完成！从上面把杯口撑开，就是一个纸杯。"}],ops:[fe(E(v0,Gl),[.95,.95])]}]},AN=Object.freeze(Object.defineProperty({__proto__:null,default:bN},Symbol.toStringTag,{value:"Module"})),Fu=.04,Jx=.14,CN={id:"dino",name:"长颈恐龙",cat:"动物",level:2,paperName:"嫩绿",colorUp:!0,blurb:"长长的脖子，拖在身后的尾巴，两条腿一前一后站着。",techs:["收拢","花瓣折","内翻折"],view:{az:0,el:66},thumbView:{az:0,el:76},steps:[...Vo(),{text:"翻面。下半部分是分开的两条“腿”，这次不用折细。",ops:[Ke]},{text:"做脖子：把左边那条腿向左上方内翻折。先像翻书一样把这一侧稍微打开，把腿沿折线翻到前后两层之间，再合上。",tech:"内翻折",ops:[zs(Wt,30)],captions:[{at:0,text:"左边这条腿要翻到前后两层之间去"},{at:.285,pause:1300,text:"先把这一侧像翻书一样打开"},{at:.45,text:"腿沿折线向左上方翻"},{at:.9,text:"合上，压平。这是伸向前的长脖子"}]},{text:"右边那条腿也内翻折，但折线更斜：翻出去以后几乎是平的，是拖在后面的尾巴。",tech:"内翻折",ops:[zs(Wi,48)],captions:[{at:0,text:"右边那条腿同样做，折线更斜"},{at:.285,pause:900,text:"先打开这一侧"},{at:.9,text:"合上。尾巴几乎是平的"}]},{text:"做头：把脖子的尖端向下内翻折。把尖端的两层撑开一点，尖角往里一按就翻过去了。",tech:"内翻折",ops:[n_(Wt,Bc)],captions:[{at:0,text:"脖子的尖端要向下翻，做成头"},{at:.3,pause:1300,text:"只把尖端的两层撑开一点"},{at:.8,text:"尖角向里一按，翻过去，再捏合"}],view:{az:0,el:60,zoom:2.2,focus:ze(t=>t(Wt.tip).lerp(t(Wt.top),.25))}},{text:"做腿：上面两片大尖角在千纸鹤里是翅膀，这里用来当腿。把前面一片沿斜线向下折，尖角伸到身体下面。",ops:[fe(E(Hl(Kt.c,Kt.e1,Fu),Hl(Kt.c,Kt.e2,Fu+Jx)),[.9,.9])]},{text:"把后面一片向后、向下折，折线朝另一边斜，两条腿就一前一后分开了。完成！长脖子、长尾巴，站着的恐龙。",captions:[{at:0,text:"把后面一片向后、向下折，折线朝另一边斜。"},{at:.85,text:"完成！长脖子、长尾巴，两条腿一前一后。"}],ops:[Je(E(Hl(Yn.c,Yn.e1,Fu),Hl(Yn.c,Yn.e2,Fu+Jx)),[.1,.1])]}]},RN=Object.freeze(Object.defineProperty({__proto__:null,default:CN},Symbol.toStringTag,{value:"Module"})),PN=[1,0],DN=[0,1],LN={id:"dog",name:"小狗",cat:"动物",level:1,paperName:"茶",blurb:"四步折出耷拉着耳朵的小狗脸，可以再画上眼睛和鼻子。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"上角向下折到下角，对折成倒三角形。",ops:[fe(E(PN,DN),[.8,.8])]},{text:"把左右两个角斜着向下折，做成耷拉的耳朵。",ops:[oe(N(E([.72,.28],[.8,0]),[.97,.02],{all:!0}),N(E([.28,.72],[0,.8]),[.02,.97],{all:!0}))]},{text:"把下面的尖角向后折一点，做成下巴。完成！",captions:[{at:0,text:"把下面的尖角向后折一点，做成下巴。"},{at:.85,text:"完成！"}],ops:[Je(E([.2,0],[0,.2]),[.02,.02],{all:!0})]}]},NN=Object.freeze(Object.defineProperty({__proto__:null,default:LN},Symbol.toStringTag,{value:"Module"})),nE=t=>({tip:[t.tip[0],1-t.tip[1]],top:[t.top[0],1-t.top[1]],nar:[t.nar[0],1-t.nar[1]],seed:[t.seed[0],1-t.seed[1]]}),iE=t=>({tip:[1-t.tip[0],t.tip[1]],top:[1-t.top[0],t.top[1]],nar:[1-t.nar[0],t.nar[1]],seed:[1-t.seed[0],t.seed[1]]}),IN=nE(Wt),UN=iE(Wi),ON=nE(e_),zN=iE(t_),e1=(t,e)=>oe(N(E(t.tip,t.nar),t.seed,{tag:"ts"}),N(E(e.tip,e.nar),e.seed,{tag:"ts"})),FN=.36,ku=FN*Math.SQRT1_2,t1=[[ku+.02,ku-.02],[ku-.02,ku+.02]],Bu=.1*Math.SQRT1_2,n1=[[Bu+.006,Bu-.006],[Bu-.006,Bu+.006]],df=[1,0],kN=[1,.5],BN=t=>t[0]>.5&&t[1]<.5||t[0]<.5&&t[1]>.5,y0=11.25*Math.PI/180,rE=(t,e)=>{const n=t(df),i=t(kN).sub(n).normalize();return n.addScaledVector(i,e*Math.cos(y0)).add(new I(0,-e*Math.sin(y0),0))},VN=.14,sE=(.5-VN)/Math.cos(y0),i1=18*Math.PI/180,HN=()=>{const t=c=>rE(c,sE),e=E(ze(t),ze(c=>t(c).add(new I(0,-1,0)))),n=E(ze(t),ze(c=>t(c).add(new I(-Math.sin(i1),Math.cos(i1),0)))),i=ze(c=>c(Pe).add(new I(-.45,0,0))),r=(c,h)=>{const u=h(df),d=t(h).sub(u).normalize(),p=c.clone().sub(u);return d.x*p.y-d.y*p.x>0},s=(c,h,u)=>N(u?n:e,i,{all:!0,dir:h,angle:90,region:c,has:"!ts",where:(d,p)=>d.x<t(p).x&&r(d,p)===u}),o=(c,h)=>N(e,i,{all:!0,dir:h,angle:90,region:c,has:"ts"}),a=c=>c[0]<.5&&c[1]>.5,l=c=>c[0]>.5&&c[1]<.5;return[s(a,"valley",!0),s(a,"valley",!1),o(a,"valley"),s(l,"mountain",!0),s(l,"mountain",!1),o(l,"mountain")]},GN={id:"dragonfly",name:"蜻蜓",cat:"动物",level:2,paperName:"竹青",colorUp:!0,blurb:"四片翅膀平平地张着，身后拖着细长的尾巴。翅膀要用剪刀从中间剪开。",techs:["收拢","花瓣折","内翻折","剪开"],view:{az:0,el:66},thumbView:{az:28,el:44},steps:[...Vo(),{text:"翻面。现在上半部分是一片大尖角，中间有一条缝；下半部分是分开的两条“腿”。",ops:[Ke]},{text:"把上面那片大尖角的两条外侧边对齐中线折过去，尖角就细了。",ops:[e1(IN,UN)]},{text:"翻面。",ops:[Ke]},{text:"这一面上面的大尖角也同样折细。",ops:[e1(ON,zN)]},{text:"翻面。",ops:[Ke]},{text:"做翅膀：把左边那条腿向外内翻折，一直翻到水平。先像翻书一样把这一侧稍微打开，把腿沿斜线翻到前后两层之间，再合上。",tech:"内翻折",ops:[zs(Wt,45)],captions:[{at:0,text:"左边这条腿要翻到前后两层之间去"},{at:.285,pause:1300,text:"先把这一侧像翻书一样打开"},{at:.45,text:"腿沿斜线向外翻，一直翻到水平"},{at:.9,text:"合上，压平。这是一只翅膀"}]},{text:"右边那条腿也同样向外内翻折到水平。两只翅膀平平地伸向两边。",tech:"内翻折",ops:[zs(Wi,45)],captions:[{at:0,text:"右边那条腿同样做"},{at:.285,pause:900,text:"先打开这一侧"},{at:.9,text:"合上。两只翅膀平平地伸向两边"}]},{text:"翻面。上面的细尖角有前后两片。",ops:[Ke]},{text:"把前面那片细尖角向下折，折线比翅膀高一些。折下来的一段是头，留在上面的那片是尾巴。",ops:[fe(E(t1[0],t1[1]),[.1,.1],{region:t=>kc(t)&&t[0]+t[1]<.5+zn-1e-9,tag:"head"})]},{text:"把头的尖端向上折回一小段，头就是钝的了。",ops:[fe(E(n1[0],n1[1]),[0,0],{all:!0,has:"head"})],view:{az:0,el:62,zoom:1.8,focus:[.1,.1]}},{text:"沿中线把整个作品向后对折，两只翅膀叠在一起。",ops:[Je(E(Pe,[1,1]),ze(t=>t(Pe).add(new I(.1,0,0))),{all:!0})]},{text:"这一步要用剪刀：从翅膀尖沿翅膀的中线向里剪，剪到离身体还有一小段的地方停下。两只翅膀叠着一起剪。",tech:"剪开",ops:[Dg(df,ze(t=>rE(t,sE)),{region:BN})],captions:[{at:0,text:"这一步要用剪刀",point:df},{at:.5,text:"沿翅膀的中线从翅尖向里剪，两只翅膀叠着一起剪"}]},{text:"把两只翅膀分别向两边折平。每只翅膀剪开的两片各折各的：靠头的一片折线是直的，靠尾巴的一片折线斜一点，折过去就向后斜。",ops:[oe(...HN())],view:{az:28,el:40},captions:[{at:0,text:"把两只翅膀分别向两边折平"},{at:.5,text:"靠尾巴的那一片折线斜一点，折过去就向后斜"}]},{text:"把它翻过来立着放，翅膀在上、身体在下。完成！一只张着四片翅膀的蜻蜓。",ops:[Qe(90,"y")],view:{az:28,el:40},captions:[{at:0,text:"把它翻过来立着放，翅膀在上、身体在下。"},{at:.8,text:"完成！一只张着四片翅膀的蜻蜓。"}]}]},WN=Object.freeze(Object.defineProperty({__proto__:null,default:GN},Symbol.toStringTag,{value:"Module"})),jN=[0,0],XN=[1,0],$N=[1,1],YN=[0,1],r1=[.5,.5],qN={id:"envelope",name:"信封",cat:"器物和盒子",level:1,paperName:"竹青",blurb:"不用胶水的小信封，可以装一张字条。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把左右两个角折到中心。",ops:[oe(N({pointTo:[XN,r1]},[.98,.02]),N({pointTo:[YN,r1]},[.02,.98]))]},{text:"把下角向上折，要折过中心一点，盖住刚才两个角的角尖。",ops:[fe({pointTo:[jN,[.6,.6]]},[.02,.02],{all:!0})]},{text:"把上角向下折，盖在最上面，就是封口。完成！把字条从封口下面放进去。",captions:[{at:0,text:"把上角向下折，盖在最上面，就是封口。"},{at:.85,text:"完成！把字条从封口下面放进去。"}],ops:[fe({pointTo:[$N,[.47,.47]]},[.98,.98],{all:!0})]}]},KN=Object.freeze(Object.defineProperty({__proto__:null,default:qN},Symbol.toStringTag,{value:"Module"})),ZN={id:"flapping-bird",name:"振翅鹤",cat:"动物",level:2,paperName:"群青",colorUp:!0,blurb:"会动的折纸：捏住胸口，拉一拉尾巴，两片翅膀就上下扇动。",techs:["收拢","花瓣折","内翻折"],steps:[...Vo(),{text:"翻面。下半部分是分开的两条“腿”，这次不用折细。",ops:[Ke]},{text:"做脖子：把一条腿向斜上方内翻折。先像翻书一样把这一侧稍微打开，把腿沿折线翻到前后两层之间，再合上。",tech:"内翻折",ops:[zs(Wt,22)],inset:{az:74,el:12,zoom:1.2,label:"侧面"},captions:[{at:0,text:"这条腿要翻到前后两层之间去"},{at:.285,pause:1300,text:"先把这一侧像翻书一样打开"},{at:.45,text:"腿沿折线向斜上方翻"},{at:.7,pause:1100,text:"腿从前后两层之间翻上去"},{at:.9,text:"合上，压平"}]},{text:"另一条腿也同样向斜上方内翻折，做成尾巴。",tech:"内翻折",ops:[zs(Wi,22)],inset:{az:-74,el:12,zoom:1.2,label:"侧面"},captions:[{at:0,text:"另一条腿同样做"},{at:.285,pause:900,text:"先打开这一侧"},{at:.7,pause:900,text:"翻进两层之间，再合上"}]},{text:"做头：把脖子的尖端向下内翻折。把尖端的两层撑开一点，尖角往里一按就翻过去了。",tech:"内翻折",ops:[n_(Wt,Bc)],captions:[{at:0,text:"脖子的尖端要向下翻，做成头"},{at:.3,pause:1300,text:"只把尖端的两层撑开一点"},{at:.8,text:"尖角向里一按，翻过去，再捏合"}],view:{az:-30,el:46,zoom:2.2,focus:ze(t=>t(Wt.tip).lerp(t(Wt.top),.25))}},{text:"把它立起来。",ops:[Qe(90,"x")],view:{az:-20,el:22}},{text:"把前后两片翅膀向下折到差不多水平。完成！一只手捏住胸口，另一只手轻轻拉尾巴，翅膀就会扇动。",captions:[{at:0,text:"把前后两片翅膀向下折到差不多水平。"},{at:.85,text:"完成！捏住胸口，拉一拉尾巴，翅膀就会扇动。"}],ops:[uf(72)],view:{az:-28,el:26}}],finale:[uf(38)],thumbView:{az:-28,el:26}},QN=Object.freeze(Object.defineProperty({__proto__:null,default:ZN},Symbol.toStringTag,{value:"Module"})),s1=[0,0],ap=[1,0],lp=[1,1],o1=[0,1],ns=[.5,.5],JN=[.5,0],eI=[1,.5],tI=[.5,1],nI=[0,.5],iI=t=>{let e=Math.atan2(t.y,t.x)*180/Math.PI;for(;e<225;)e+=360;return e},a1=.25,rI=t=>M(a1*Math.cos(Cn(t))*(t%90?Math.SQRT2:1),a1*Math.sin(Cn(t))*(t%90?Math.SQRT2:1)),sI=t=>M(.12*Math.cos(Cn(t)),.12*Math.sin(Cn(t))),oI=gt([270,315,360,405,450,495,540].map((t,e)=>N(E(M(0,0),rI(t)),sI(t+22.5),{all:!0,where:n=>iI(n)>t,dir:t%90?"mountain":"valley",...e>0?{parent:e-1}:{},...t%90===0&&e>0?{tie:{to:0,k:1}}:{},...t%90&&e>1?{tie:{to:1,k:1}}:{},...e===0?{angle:180}:{}})),[0],60,!0),aI={id:"fortune-teller",name:"东南西北",cat:"玩具和交通",level:1,paperName:"天蓝",blurb:"课间最流行的小游戏：四个角折到中心两次，手指伸进去一开一合。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:-30,el:30},steps:[{text:"白色的一面朝上。沿两条对角线各对折一次，压出折痕后打开，折痕的交点就是中心。",tech:"折痕",ops:[Ie(E(s1,lp),ap),Ie(E(ap,o1),lp)]},{text:"把四个角都折到中心。",ops:[oe(N({pointTo:[s1,ns]},[.02,.02]),N({pointTo:[ap,ns]},[.98,.02]),N({pointTo:[lp,ns]},[.98,.98]),N({pointTo:[o1,ns]},[.02,.98]))]},{text:"翻面。",ops:[Ke]},{text:"把这一面的四个角也折到中心。",ops:[oe(N({pointTo:[JN,ns]},[.5,.03],{all:!0}),N({pointTo:[eI,ns]},[.97,.5],{all:!0}),N({pointTo:[tI,ns]},[.5,.97],{all:!0}),N({pointTo:[nI,ns]},[.03,.5],{all:!0}))]},{text:"左右对折，压出折痕后打开；再上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([.5,.2],[.5,.8]),[.3,.5],{all:!0}),Ie(E([.2,.5],[.8,.5]),[.5,.3],{all:!0})]},{text:"从下面捏住四个角，一起往中间合拢，四条边的中点跟着向里收，每个小方格对折成一个口袋。",ops:[oI],view:{az:-30,el:40}},{text:"把它立起来，四个角朝上。完成！两手的拇指和食指从下面伸进四个口袋，就能一开一合地玩了。",captions:[{at:0,text:"把它立起来，四个角朝上。"},{at:.85,text:"完成！两手的拇指和食指从下面伸进四个口袋，就能一开一合地玩了。"}],ops:[Qe(45),Qe(-90,"x")],view:{az:-30,el:30}}]},lI=Object.freeze(Object.defineProperty({__proto__:null,default:aI},Symbol.toStringTag,{value:"Module"})),cI=[1,0],uI=[0,1],hI={id:"fox",name:"狐狸",cat:"动物",level:1,paperName:"橙",blurb:"两只大耳朵、一个尖下巴，四步就是一只狐狸。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"上角向下折到下角，对折成倒三角形。",ops:[fe(E(cI,uI),[.8,.8])]},{text:"把左右两个角向上折，折线都从下面的尖角出发。两个角会高出上边，就是耳朵。",ops:[oe(N(E([.783,.217],[0,0]),[.97,.02],{all:!0}),N(E([.217,.783],[0,0]),[.02,.97],{all:!0}))]},{text:"翻面。完成！尖的一头是鼻子。",captions:[{at:0,text:"翻面。"},{at:.85,text:"完成！尖的一头是鼻子。"}],ops:[Ke]}]},fI=Object.freeze(Object.defineProperty({__proto__:null,default:hI},Symbol.toStringTag,{value:"Module"})),Er=Math.SQRT2,cp=[.5,Er],l1=[.5,0],dI=.12,go=(Er+dI)/2,oc=[.5,go],S0=go-.5,c1=S0+.01,oE=.1,u1=E(oc,[.5-oE,0]),h1=E(oc,[.5+oE,0]),pI=t=>t[0]<.5,mI=t=>t[0]>.5,gI=t=>t[1]>go,_I={id:"glider",name:"滑翔机",cat:"玩具和交通",level:1,paperName:"天蓝",paper:{w:1,h:Er},blurb:"机头折进去一个小三角，把两边锁住，滑得又远又稳。",techs:["折痕"],thumbView:{az:-35,el:28},steps:[{text:"用一张长方形的纸（A4），白色的一面朝上、竖着放。左右对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E(l1,cp),[.2,.5])]},{text:"把上面两个角折到中线。",ops:[oe(N(E(cp,[0,Er-.5]),[.02,Er-.02]),N(E(cp,[1,Er-.5]),[.98,Er-.02]))]},{text:"把上面的尖角向下折，角尖停在离下边两指宽的地方。",ops:[fe(E([0,go],[1,go]),[.5,Er-.05],{all:!0})]},{text:"把新的两个上角再折到中线。两个角尖碰在一起，下面还露出刚才那个尖角的一小截。",ops:[oe(N(E(oc,[0,S0]),[.02,go-.02],{all:!0}),N(E(oc,[1,S0]),[.98,go-.02],{all:!0}))]},{text:"把露出来的小尖角向上折，压住两个角尖。这个小三角就是“锁”，两边不会散开。",ops:[fe(E([0,c1],[1,c1]),[.5,Er-.01],{all:!0,region:gI})]},{text:"沿中线向后对折，小三角留在外面。",ops:[Je(E(l1,oc),[.3,.1],{all:!0})],view:{az:-20,el:50}},{text:"折机翼：从机头折到机尾，机身留一指宽，把上面这一片折下来。",ops:[fe(h1,[.95,.15],{all:!0,region:mI,tag:"wr"})]},{text:"另一片向后折，和前面的机翼对齐。",ops:[Je(u1,[.05,.15],{all:!0,region:pI,tag:"wl"})]},{text:"把飞机立起来，机腹朝下。",ops:[Qe(-90,"y")],view:{az:-35,el:28}},{text:"把两片机翼向两边展平。完成！捏住机腹轻轻向前送出去，它会平平地滑很远。",captions:[{at:0,text:"把两片机翼向两边展平。"},{at:.85,text:"完成！捏住机腹轻轻向前送出去。"}],ops:[oe(N(h1,[.95,.15],{all:!0,has:"wr",dir:"valley",angle:90,normal:[-1,0,0]}),N(u1,[.05,.15],{all:!0,has:"wl",dir:"mountain",angle:90,normal:[-1,0,0]}))],view:{az:-35,el:28}}]},vI=Object.freeze(Object.defineProperty({__proto__:null,default:_I},Symbol.toStringTag,{value:"Module"})),xI=[0,0],yI=[1,1],SI=[.5,.5],f1=[.375,.375],MI={id:"heart",name:"爱心",cat:"花草和节日",level:1,paperName:"朱红",blurb:"一张方纸折出的爱心，可以夹在信里。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把上角折到中心。",ops:[fe({pointTo:[yI,SI]},[.98,.98])]},{text:"把下角向上折到上边的中点。",ops:[fe({pointTo:[xI,[.75,.75]]},[.02,.02])]},{text:"把下边的右半向上折，对齐中间的竖线；左半也一样。",ops:[oe(N(E(f1,[.9,.375]),[.78,.08],{all:!0}),N(E(f1,[.375,.9]),[.08,.78],{all:!0}))]},{text:"把上面两个尖角和左右两个角都向后折一点，爱心就圆润了。完成！",captions:[{at:0,text:"把上面两个尖角和左右两个角都向后折一点。"},{at:.85,text:"完成！"}],ops:[oe(N(E(M(-.6,.46),M(.6,.46)),M(0,.6),{all:!0,dir:"mountain"}),N(E(M(.4,-.1),M(.4,.5)),M(.6,.26),{all:!0,dir:"mountain"}),N(E(M(-.4,-.1),M(-.4,.5)),M(-.6,.26),{all:!0,dir:"mountain"}))]}]},wI=Object.freeze(Object.defineProperty({__proto__:null,default:MI},Symbol.toStringTag,{value:"Module"})),Yi=t=>t[0]<1.5,Pl=t=>t[0]>1.5,oa={all:!0,dir:"mountain"},Vu=.2,d1=.1,is=.4,up=t=>E(M(-1,t),M(1,t)),EI={id:"hot-air-balloon",name:"热气球",cat:"玩具和交通",level:1,paperName:"朱红",colorUp:!0,blurb:"两张纸：一张折成上圆下窄的大气球，一张折成白色的小吊篮，放在气球下面。",techs:[],sheets:[{at:[0,.5]},{at:[0,-.5]}],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"准备两张纸，有颜色的一面朝上，一上一下挨着放。上面一张折气球，下面一张折吊篮。先把上面那张的两个上角向后折，气球顶就圆了。",ops:[oe(N(E(M(-.5,.78),M(-.28,1)),M(-.49,.99),{...oa,region:Yi}),N(E(M(.5,.78),M(.28,1)),M(.49,.99),{...oa,region:Yi}))]},{text:"把气球的两个下角斜着向后折：折线从两边离下边一小半高的地方，斜着通到下边中间，下面收窄成一个小口。",ops:[oe(N(E(M(-.5,is),M(-d1,0)),M(-.49,.01),{...oa,region:Yi}),N(E(M(.5,is),M(d1,0)),M(.49,.01),{...oa,region:Yi}))]},{text:"两边的折角再向后折一点点，气球的腰就圆了。",ops:[oe(N(E(M(-.5,is+.1),M(-.42,is-.08)),M(-.495,is),{...oa,region:Yi}),N(E(M(.5,is+.1),M(.42,is-.08)),M(.495,is),{...oa,region:Yi}))]},{text:"气球顶上的四个折角也都向后折一点点，气球顶更圆了。",ops:[Je(E(M(-.5,.68),M(-.43,.85)),M(-.495,.77),{all:!0,region:Yi}),Je(E(M(.5,.68),M(.43,.85)),M(.495,.77),{all:!0,region:Yi}),Je(E(M(-.35,.93),M(-.18,1)),M(-.28,.995),{all:!0,region:Yi}),Je(E(M(.35,.93),M(.18,1)),M(.28,.995),{all:!0,region:Yi})]},{text:"再折吊篮：把下面那张纸的下边向上折到上边，对折，露出白色。",ops:[fe(up(-.5),M(0,-.99),{all:!0,region:Pl})]},{text:"再从下往上对折一次。",ops:[fe(up(-.25),M(0,-.45),{all:!0,region:Pl})]},{text:"再从下往上对折一次，成了一条窄窄的白条。",ops:[fe(up(-.125),M(0,-.2),{all:!0,region:Pl})]},{text:"把白条的左右两头向后折，只留中间一小块，这就是吊篮，正好挂在气球的下口。完成！",captions:[{at:0,text:"把白条的左右两头向后折。"},{at:.85,text:"完成！圆鼓鼓的热气球，下面挂着白色的吊篮。"}],ops:[Je(E(M(-Vu,-1),M(-Vu,0)),M(-.45,-.06),{all:!0,region:Pl}),Je(E(M(Vu,-1),M(Vu,0)),M(.45,-.06),{all:!0,region:Pl})]}]},TI=Object.freeze(Object.defineProperty({__proto__:null,default:EI},Symbol.toStringTag,{value:"Module"})),p1=t=>{const e=r=>t(r)[0]<.250000001,n=r=>e(r)&&r[1]<.5,i=r=>e(r)&&r[1]>.5;return gt([N(E(t([.25,0]),t([.25,.5])),t([.1,.1]),{region:n,hint:!1}),N(E(t([.25,.5]),t([0,.25])),t([.05,.45]),{region:n,dir:"mountain",parent:0}),N(E(t([.25,.5]),t([0,.75])),t([.05,.55]),{region:i})])},bI=t=>t,AI=t=>[1-t[0],t[1]],CI={id:"house",name:"小房子",cat:"玩具和交通",level:1,paperName:"朱红",blurb:"红屋顶、白墙的小房子，五步折成。",techs:["折痕","压折"],steps:[{text:"白色的一面朝上。把上边向下对折。",ops:[fe(E([0,.5],[1,.5]),[.5,.9])]},{text:"左右对折，压出折痕后打开。这条折痕是中线。",captions:[{at:0,text:"左右对折，压出折痕后打开。"},{at:.72,text:"这条折痕是中线。"}],tech:"折痕",ops:[Ie(E([.5,0],[.5,.5]),[.1,.25],{all:!0})]},{text:"把左右两边向中线对齐折过来。",ops:[oe(N(E([.25,0],[.25,.5]),[.05,.25],{all:!0}),N(E([.75,0],[.75,.5]),[.95,.25],{all:!0}))]},{text:"左边这一片是两层的口袋。手指从中间伸进去把上面一层向左拉开，口袋顶上的角会摊开，压平成一个三角形屋顶。这叫“压折”。",tech:"压折",ops:[p1(bI)],inset:{az:-90,el:10,zoom:1.6,label:"侧面"},captions:[{at:0,text:"手指从中间伸进这个口袋，把上面一层向外拉",point:[.03,.3]},{at:.5,pause:1100,text:"口袋立起来了，顶上的角正在摊开"},{at:.86,text:"压平：上面是三角形屋顶，下面是墙"}]},{text:"右边也同样撑开、压平。完成！",tech:"压折",ops:[p1(AI)],inset:{az:90,el:10,zoom:1.6,label:"侧面"},captions:[{at:0,text:"右边的口袋同样撑开",point:[.97,.3]},{at:.5,pause:900,text:"立起来以后往下压"},{at:.86,text:"压平，两边对称"}]}]},RI=Object.freeze(Object.defineProperty({__proto__:null,default:CI},Symbol.toStringTag,{value:"Module"})),Hu=[0,0],PI=[1,0],m1=[1,1],DI=[0,1],LI={id:"icecream",name:"冰淇淋",cat:"花草和节日",level:1,paperName:"杏黄",blurb:"风筝形的下半是脆筒，露出白纸的上半是一球冰淇淋。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把下面的两条边都折到中间的竖线上，折线从下角出发，折出一个风筝形。下半是脆筒。",ops:[oe(N({lineTo:[[Hu,PI],[Hu,m1]]},[.9,.1],{all:!0}),N({lineTo:[[Hu,DI],[Hu,m1]]},[.1,.9],{all:!0}))]},{text:"把最上面的尖角向后折一小段，白色的一球冰淇淋就变得圆平了。完成！",captions:[{at:0,text:"把最上面的尖角向后折一小段。"},{at:.85,text:"完成！"}],ops:[Je(E(M(-.5,.5),M(.5,.5)),M(0,.65),{all:!0})]}]},NI=Object.freeze(Object.defineProperty({__proto__:null,default:LI},Symbol.toStringTag,{value:"Module"})),aE=.4,i_=2+aE,Xf=1+aE,ps=1e-9,g1=(t,e)=>{const n=a=>{const l=e(a);return l[1]>=0&&l[1]<=1&&l[1]>l[0]-ps&&l[0]+l[1]>1-ps},i=a=>{const l=e(a);return l[1]>=0&&l[1]<=1&&l[0]>l[1]-ps&&l[0]+l[1]>1-ps},r=a=>{const l=e(a);return l[1]>=0&&l[1]<=1&&l[1]>l[0]-ps&&l[0]+l[1]<1+ps},s=(a,l)=>c=>a(c)||l(c),o=t([.5,.5]);return gt([N(E(o,t([1,0])),t([.9,.3]),{dir:"valley",region:s(i,n)}),N(E(o,t([1,.5])),t([.9,.7]),{dir:"mountain",parent:0,region:s(i,n)}),N(E(o,t([1,1])),t([.5,.9]),{dir:"valley",parent:1,region:n}),N(E(o,t([0,0])),t([.1,.3]),{dir:"valley",region:r,tie:{to:0,k:1}}),N(E(o,t([0,.5])),t([.1,.7]),{dir:"mountain",parent:3,region:r,tie:{to:1,k:1}})])},qi=t=>[t[0],t[1]+Xf],II=t=>[t[0],t[1]-Xf],Pi=t=>[t[0],1-t[1]],UI=Pi,aa=Xf-i_/2,Qs=1-i_/2,rs=18*Math.PI/180,_1=0,hp=.19,v1=t=>t[1]>Xf+.5-ps,x1=t=>t[1]<.5+ps,OI={id:"jumping-frog",name:"会跳的青蛙",cat:"动物",level:2,paperName:"嫩绿",colorUp:!0,paper:{w:1,h:i_},blurb:"前腿、后腿都张开的小青蛙，肚子底下有一道弹簧褶，按一下后背就会跳。",techs:["折痕","收拢"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"用一张长条纸，有颜色的一面朝上，竖着放。上端和下端各是一个正方形：把这两个正方形各自上下对折，压出横折痕后打开。",tech:"折痕",ops:[Ie(E(qi([0,.5]),qi([1,.5])),qi([.5,1])),Ie(E(Pi([0,.5]),Pi([1,.5])),Pi([.5,1]))]},{text:"翻面，白色的一面朝上。",ops:[Ke]},{text:"在上端的正方形里折出两条对角线折痕。",ops:[Ie(E(qi([0,0]),qi([1,1])),qi([0,1])),Ie(E(qi([1,0]),qi([0,1])),qi([1,1]))]},{text:"下端的正方形也折出两条对角线折痕。",ops:[Ie(E(Pi([0,0]),Pi([1,1])),Pi([0,1])),Ie(E(Pi([1,0]),Pi([0,1])),Pi([1,1]))]},{text:"捏住上端两边的横折痕向里推，最上面的三角形翻下来，压平成一个三角形，这是头。",tech:"收拢",ops:[g1(qi,II)],captions:[{at:0,text:"捏住上端两边的横折痕，向里推"},{at:.5,pause:900,text:"两边收进去，最上面的三角形翻下来"},{at:.86,text:"压平成一个三角形，这是头"}]},{text:"下端也同样收拢成一个三角形，这是屁股。",tech:"收拢",ops:[g1(Pi,UI)]},{text:"把头上最上面一层的左右两个角斜着向上翻出去，折线从三角形底边的中点出发。这是两条前腿。",ops:[oe(N(E(M(0,aa),M(Math.cos(rs),aa+Math.sin(rs))),M(.45,aa+.02),{all:!0,region:v1,tag:"leg"}),N(E(M(0,aa),M(-Math.cos(rs),aa+Math.sin(rs))),M(-.45,aa+.02),{all:!0,region:v1,tag:"leg"}))]},{text:"屁股上的两个角也同样斜着向下翻出去，这是两条后腿。",ops:[oe(N(E(M(0,Qs),M(Math.cos(rs),Qs-Math.sin(rs))),M(.45,Qs-.02),{all:!0,region:x1,tag:"leg"}),N(E(M(0,Qs),M(-Math.cos(rs),Qs-Math.sin(rs))),M(-.45,Qs-.02),{all:!0,region:x1,tag:"leg"}))]},{text:"做弹簧：沿身体的中线，把下半截整个向上折。",ops:[fe(E(M(-1,_1),M(1,_1)),M(0,Qs-.3),{all:!0,tag:"z"})]},{text:"再沿头的底边把它向下折回去，身体折成了一道“Z”形的弹簧褶。完成！用手指按一下后背再往后一滑，青蛙就会跳起来。",captions:[{at:0,text:"沿头的底边把它向下折回去。"},{at:.85,text:"完成！按一下后背再往后一滑，青蛙就会跳。"}],ops:[fe(E(M(-1,hp),M(1,hp)),M(0,hp+.05),{all:!0,has:"z"})]}]},zI=Object.freeze(Object.defineProperty({__proto__:null,default:OI},Symbol.toStringTag,{value:"Module"})),FI=21*Math.PI/180,Gu=Math.tan(FI),y1=Math.SQRT1_2,S1=(t,e)=>M((t-e)*y1,(t+e-1)*y1),kI={id:"leaf",name:"叶子",cat:"花草和节日",level:1,paperName:"嫩绿",blurb:"一片细长的绿叶子，两头尖尖，中间一条白色的叶脉。",techs:[],view:{az:0,el:70},thumbView:{az:-30,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把下面的两条边向中间的竖对角线折，但不要折到线上，留一点点白。",ops:[oe(N(E([0,0],[1,Gu]),[.97,.03]),N(E([0,0],[Gu,1]),[.03,.97]))]},{text:"上面的两条边也一样，折向竖对角线，留一点点白。中间露出的白线就是叶脉。",ops:[oe(N(E([1,1],S1(1-Gu,0)),M(.4,.26),{all:!0}),N(E([1,1],S1(0,1-Gu)),M(-.4,.26),{all:!0}))]},{text:"把左右两个尖角向后折掉一小块，叶子就圆一些。完成！斜着放，就是一片带白叶脉的叶子。",captions:[{at:0,text:"把左右两个尖角向后折掉一小块。"},{at:.85,text:"完成！斜着放，就是一片带白叶脉的叶子。"}],ops:[oe(N(E(M(.22,.21),M(.27,-.11)),M(.3,0),{all:!0,dir:"mountain"}),N(E(M(-.22,.21),M(-.27,-.11)),M(-.3,0),{all:!0,dir:"mountain"}))]}]},BI=Object.freeze(Object.defineProperty({__proto__:null,default:kI},Symbol.toStringTag,{value:"Module"})),VI={A:[0,0],B:[1,0],C:[1,1],D:[0,1]},HI={C1:[.5,1],D2:[.5,1],C2:[1,.5],B1:[1,.5],B2:[.5,0],A1:[.5,0],A2:[0,.5],D1:[0,.5]},ct=t=>VI[t[0]],En=t=>HI[t],ji=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],br=(...t)=>[t.reduce((e,n)=>e+n[0],0)/t.length,t.reduce((e,n)=>e+n[1],0)/t.length],Wu=(t,e,n)=>(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0]),Fs=(t,e,n)=>i=>{const r=Math.sign(Wu(t,e,n));return r*Wu(t,e,i)>-1e-9&&r*Wu(e,n,i)>-1e-9&&r*Wu(n,t,i)>-1e-9},lE=Math.tan(Math.PI/8),M0=(1-Math.SQRT1_2)/2,Tn=t=>ji(En(t),ct(t),lE),Nt=t=>{const e=En(t),n=ct(t);return[e[0]+2*M0*(Pe[0]-e[0]+n[0]-e[0]),e[1]+2*M0*(Pe[1]-e[1]+n[1]-e[1])]},$f=t=>ji(En(t),Pe,2*M0),xi=t=>Fs(Pe,ct(t),En(t)),Wl=t=>Fs(Pe,Tn(t),En(t)),ks=t=>Fs(Pe,Tn(t),ct(t)),Mi=(...t)=>e=>t.some(n=>n(e)),M1=t=>br(Pe,Tn(t),En(t)),zo=t=>br(Pe,Tn(t),ct(t)),Ms=(t,e)=>gt([N(E(Pe,ct(t)),zo(t),{region:xi(t),hint:!1}),N(E(Pe,Tn(t)),M1(t),{region:xi(t),dir:"mountain",parent:0}),N(E(Pe,Tn(e)),M1(e),{region:xi(e)})],[0],60),It=(...t)=>({kind:"fold",line:E(Pe,ct(t[0])),move:zo(t[0]),dir:"valley",all:!0,region:Mi(...t.map(xi))}),GI=(t,e,n="mountain")=>gt([N(E(Nt(t),Nt(e)),br(En(t),$f(t),Nt(t)),{region:Mi(Wl(t),Wl(e))}),N(E(Nt(t),En(t)),br(Nt(t),Tn(t),En(t)),{region:Wl(t),parent:0,dir:n}),N(E(Nt(e),En(e)),br(Nt(e),Tn(e),En(e)),{region:Wl(e),parent:0,dir:n,tie:{to:1,k:1}}),N(E(ct(t),Nt(t)),br(ct(t),Tn(t),Nt(t)),{region:ks(t)}),N(E(ct(e),Nt(e)),br(ct(e),Tn(e),Nt(e)),{region:ks(e),tie:{to:3,k:1}})],[0],72),w1=t=>Mi(Fs($f(t),Nt(t),En(t)),Fs(Nt(t),Tn(t),En(t))),WI=(t,e)=>({kind:"fold",line:E(Nt(t),Nt(e)),move:br(En(t),$f(t),Nt(t)),dir:"valley",all:!0,region:Mi(w1(t),w1(e))}),E1=.5/Math.cos(Math.PI/8),jI=E1/(E1+Math.SQRT1_2),ss=t=>{const e=ji(Tn(t),ct(t),jI),n=Nt(t),i=ct(t),r=[Pe[0]*.2+n[0]*.7+i[0]*.1,Pe[1]*.2+n[1]*.7+i[1]*.1];return N(E(Pe,ji(Pe,e,.4)),r,{region:xi(t),all:!0})},cE=.6,uE=(1-cE)*Math.SQRT1_2,r_=t=>ji(Pe,ct(t),cE),w0=(t,e)=>{const n=e*Math.PI/180;return ji(ct(t),Nt(t),uE*Math.sin(n)/Math.sin(n+Math.PI/8)/(.5*Math.SQRT1_2/Math.cos(Math.PI/8)))},XI=(t,e)=>Mi(Fs(ct(t),r_(t),w0(t,e)),Fs(ct(t),w0(t,e),ji(ct(t),Tn(t),uE/(.5*(1-lE))))),E0=t=>{const e=ct(t),n=Nt(t);return[e[0]*.9+n[0]*.07+Pe[0]*.03,e[1]*.9+n[1]*.07+Pe[1]*.03]},T0=(t,e,n)=>N(E(r_(t),w0(t,e)),E0(t),{all:!0,...n}),ju=(t,e,n,i,r=50)=>gt([N(E(Pe,ct(t)),zo(t),{all:!0,region:Mi(...n.map(xi)),angle:0,open:89,hint:!1}),N(E(Pe,ct(t)),zo(e),{all:!0,region:Mi(...i.map(xi)),angle:0,tie:{to:0,k:-1},hint:!1}),T0(t,r,{region:ks(t),dir:"mountain",parent:0}),T0(e,r,{region:ks(e),dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],72),hE=(t,e,n=65)=>gt([...t.map(([i,r,s])=>N(E(Pe,r_(i[0])),zo(i[0]),{all:!0,region:Mi(...i.map(xi)),dir:r,angle:s,hint:!1})),...e.map(([i,r,s])=>T0(i,50,{region:XI(i,50),parent:r,dir:s,angle:n,hint:!1}))],t.map((i,r)=>r),60,!0),$I=(t,e)=>[t,e].map(n=>({kind:"crease",line:E(ct(n),Nt(n)),move:br(ct(n),Tn(n),Nt(n)),all:!0,region:Mi(ks(n),Wl(n))})),Xu=(t,e)=>({kind:"fold",line:E(Tn(t),Tn(e)),move:ct(t),dir:"valley",region:Mi(ks(t),ks(e))}),$u=(t,e,n,i)=>[{text:n===1?"眼前是一个风筝面，中间横着一条纸边。把下面两条斜边对齐中线各折一下，压出折痕后打开。":"这个面也一样：下面两条斜边对齐中线各折一下，压出折痕后打开。",tech:"折痕",ops:$I(t,e)},{text:n===1?"捏住横边的中点向上提。两侧会顺着刚才的折痕向中线收拢，原来叠着的两层在这里摊开成一层；压平后，横边变成一个尖朝上的小三角。这也是一种“花瓣折”。":"捏住横边的中点向上提，两侧向中线收拢，压平。",tech:"花瓣折",ops:[GI(t,e)],captions:n===1?[{at:0,text:"捏住横边的中点，向上提",point:En(t)},{at:.4,pause:1100,text:"两侧顺着折痕向中线收拢，叠着的两层在这里摊开"},{at:.86,text:"压平：横边变成一个尖朝上的小三角"}]:void 0},...i?[{text:n===4?"小三角向下折。四个面都做完了，这就是“青蛙基本形”。":"把这个小三角向下折。",ops:[WI(t,e)]}]:[]],fE=(t=!0)=>[...Wf(),{text:"右边最上面的一片是对折着的两层。把它竖起来，手指从下面伸进两层之间撑开，让它的折边对准中线，压平成一个风筝形。这叫“压折”。",tech:"压折",ops:[Ms("C1","D2")],captions:[{at:0,text:"把右边最上面的一片竖起来"},{at:.45,pause:1100,text:"手指从下面伸进两层之间，把它撑开"},{at:.86,text:"折边对准中线，压平成风筝形"}]},{text:"把风筝形的左半边像翻书一样翻到右边。",ops:[It("C1")]},{text:"左边最上面的一片也同样竖起来、撑开、压平。",tech:"压折",ops:[Ms("C2","B1")]},{text:"翻面。",ops:[Ke]},{text:"这一面也一样：左边最上面的一片竖起来、撑开、压平。",tech:"压折",ops:[Ms("A2","D1")]},{text:"把风筝形的右半边翻到左边。",ops:[It("A2")]},{text:"右边最上面的一片也撑开、压平。现在四片都压成了风筝形。",tech:"压折",ops:[Ms("A1","B2")]},{text:"把左边最上面的两片翻到右边。这样左右各四片，一样厚。",ops:[It("A1","A2")]},...$u("A2","D1",1,t),{text:"把左边最上面的两片翻到右边，露出下一个风筝面。",ops:[It("D1","D2")]},...$u("D2","C1",2,t),{text:"翻面。",ops:[Ke]},...$u("C2","B1",3,t),{text:"把左边最上面的两片翻到右边，露出最后一个风筝面。",ops:[It("B1","B2")]},...$u("B2","A1",4,t)],YI=t=>[{text:"把右边最上面的一片翻到左边。眼前换成一个没有小三角的光滑的面。",ops:[It("B2")]},{text:"翻面。",ops:[Ke]},{text:"这一面也把右边最上面的一片翻到左边，同样是光滑的面。",ops:[It("D2")]},{text:"把上面尖角两侧的边对齐中线折过来，这里有好几层，要一起折。尖的一头就变细了。",ops:[oe(ss("D2"),ss("D1"))]},{text:"翻面。",ops:[Ke]},{text:"这一面也同样把两条边对齐中线折过来。",ops:[oe(ss("B1"),ss("B2"))]},{text:"把左边最上面的两片翻到右边，又是一个光滑的面。",ops:[It("B2","A1")]},{text:"同样把两条边对齐中线折过来。",ops:[oe(ss("A1"),ss("A2"))]},{text:"翻面。",ops:[Ke]},{text:"把左边最上面的两片翻到右边，这是最后一个光滑的面。",ops:[It("D2","C1")]},{text:t,ops:[oe(ss("C2"),ss("C1"))]}],qI=Math.SQRT1_2*Math.tan(Math.PI/16)/(Math.tan(Math.PI/8)+Math.tan(Math.PI/16))/(Math.SQRT2/4),dE=t=>ji(Pe,Nt(t),qI),os=t=>{const e=Nt(t),n=ct(t),i=[Pe[0]*.2+e[0]*.7+n[0]*.1,Pe[1]*.2+e[1]*.7+n[1]*.1];return N(E(n,dE(t)),i,{region:xi(t),all:!0})},pE=.525,T1=t=>ji(Pe,ct(t),pE),KI=(1-pE)*Math.SQRT1_2,ZI=t=>Fs($f(t),Nt(t),En(t)),b1=t=>{const e=xi(t),n=ZI(t);return i=>e(i)&&!n(i)},QI=(t,e)=>{const n=ks(t),i=ct(t);return r=>n(r)&&Math.hypot(r[0]-i[0],r[1]-i[1])<e},JI=(t,e)=>ji(ct(t),Pe,e/Math.SQRT1_2),mE=(t,e)=>{const n=dE(t),i=ct(t);return ji(i,n,e/Math.hypot(n[0]-i[0],n[1]-i[1]))},eU=(t,e,n,i,r)=>{const s=r*Math.PI/180,o=a=>E(T1(a),ze(l=>{const c=l(T1(a)),h=l(ct(a)).sub(c).normalize(),u=l(mE(a,.15)).sub(c);return u.addScaledVector(h,-u.dot(h)).normalize(),c.addScaledVector(h,Math.cos(s)).addScaledVector(u,Math.sin(s))}));return gt([N(E(Pe,ct(t)),zo(t),{all:!0,region:Mi(...n.map(xi)),angle:0,open:89,hint:!1}),N(E(Pe,ct(t)),zo(e),{all:!0,region:Mi(...i.map(xi)),angle:0,tie:{to:0,k:-1},hint:!1}),N(o(t),E0(t),{all:!0,region:b1(t),dir:"mountain",parent:0}),N(o(e),E0(e),{all:!0,region:b1(e),dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],72)},A1=(t,e,n,i,r)=>{const s=JI(t,n),o=ct(t),a=mE(t,i*.6),l=m=>QI(m,n*.8),c=m=>{const v=m(o),g=v.clone().sub(m(s)).normalize(),f=m(a).sub(v),x=f.addScaledVector(g,-f.dot(g)).normalize();return{T:v,dir:g,perp:x}},h=r*Math.PI/180,u=(m,v=0)=>ze(g=>{const{T:f,dir:x,perp:_}=c(g);return f.addScaledVector(x,-m).addScaledVector(_,v)}),d=ze(m=>{const{T:v,dir:g,perp:f}=c(m);return v.addScaledVector(g,-i+Math.cos(h)).addScaledVector(f,Math.sin(h))}),p={zero:u(i+.055),one:u(i+.018)};return gt([N(E(s,o),u(i+.03,.004),{all:!0,region:l(t),angle:0,open:88,soft:p,hint:!1}),N(E(s,o),u(i+.03,.004),{all:!0,region:l(e),angle:0,tie:{to:0,k:-1},soft:p,hint:!1}),N(E(u(i),d),u(i*.3,i*.02),{all:!0,region:l(t),dir:"mountain",parent:0}),N(E(u(i),d),u(i*.3,i*.02),{all:!0,region:l(e),dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],64)},tU=KI,nU={id:"lily",name:"百合",cat:"花草和节日",level:3,paperName:"桃",colorUp:!0,blurb:"四片花瓣向四面张开的百合。一共五十步，是这里最费工夫的花。",techs:["收拢","压折","花瓣折","内翻折"],view:{az:0,el:62},thumbView:{az:-32,el:30},steps:[...fE(),...YI("最后一个面也折细。四个面都折好了，下面宽的一头是四片花瓣。"),{text:"做花瓣。左边夹在中间的是一片对折着的花瓣：把它上下的纸像翻书一样打开，把这片花瓣的尖沿斜线向外翻出去，再合上。这是“内翻折”。",tech:"内翻折",ops:[ju("B1","B2",["C2","B1"],["B2","A1"])],captions:[{at:0,text:"左边夹在中间的是一片对折着的花瓣"},{at:.285,pause:1200,text:"把它上下的纸像翻书一样打开"},{at:.5,text:"花瓣尖沿斜线向外翻"},{at:.9,text:"合上，压平。花瓣尖从左边伸了出来"}]},{text:"右边夹在中间的那片花瓣也同样向外翻。",tech:"内翻折",ops:[ju("D2","D1",["C1","D2"],["D1","A2"])]},{text:"把左边最上面的一片翻到右边，正面这片花瓣就对折合上了。",ops:[It("C2")]},{text:"把这片合上的花瓣的尖也向外内翻折。",tech:"内翻折",ops:[ju("C2","C1",["C2"],["C1","D2","D1","A2"])]},{text:"翻面。",ops:[Ke]},{text:"把右边最上面的一片翻到左边，最后一片花瓣也对折合上了。",ops:[It("A1")]},{text:"同样把它的尖向外内翻折。四片花瓣的尖都翻出来了。",tech:"内翻折",ops:[ju("A1","A2",["A1"],["A2","D1","D2","C1","C2"])]},{text:"捏住细的一头，把四片花瓣分别拉向前、后、左、右，每片花瓣从中间张开，花就开了。",ops:[hE([[["B2"],"valley",45],[["B1"],"mountain",45],[["A1"],"valley",135],[["A2","D1"],"valley",45],[["D2","C1"],"mountain",45],[["C2"],"mountain",135]],[["B2",0,"valley"],["B1",1,"mountain"],["A1",2,"valley"],["A2",3,"mountain"],["D1",3,"valley"],["D2",4,"mountain"],["C1",4,"valley"],["C2",5,"mountain"]])],view:{az:-30,el:40}},{text:"把花立起来。完成！真的纸还可以用笔杆把花瓣再向外卷一卷，更像百合。",captions:[{at:0,text:"把花立起来。"},{at:.8,text:"完成！真的纸还可以用笔杆把花瓣再向外卷一卷。"}],ops:[Qe(-90,"x")],view:{az:-32,el:30}}]},iU=Object.freeze(Object.defineProperty({__proto__:null,default:nU},Symbol.toStringTag,{value:"Module"})),Sr=Math.SQRT2,hi=(t,e)=>M(t-Sr/2,e-.5),Hn=.4,C1=t=>t[1]>Hn,rU=t=>t[1]<Hn,sU={id:"motorboat",name:"汽艇",cat:"玩具和交通",level:1,paperName:"朱红",paper:{w:Sr,h:1},blurb:"红色的船身、白色的船舱，船头高高翘起，像在水上飞快地跑。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"用一张长方形的纸（A4），白色的一面朝上、横着放。把下边向上折，上面留出一截白色。",ops:[fe(E([0,Hn],[Sr,Hn]),[Sr/2,.02])]},{text:"把红色这一片的上边向下折一窄条，露出一道白边。这是船舷。",ops:[fe(E(hi(0,2*Hn-.05),hi(Sr,2*Hn-.05)),[Sr/2,.01],{region:rU})]},{text:"做船舱：把上面白色一截的左右两头斜着向后折，前面斜一点，后面斜得少一些。",ops:[oe(N(E(hi(.82,1),hi(1.08,2*Hn)),[Sr-.02,.98],{region:C1,dir:"mountain"}),N(E(hi(.32,1),hi(.14,2*Hn)),[.02,.98],{region:C1,dir:"mountain"}))]},{text:"把右下角斜着向后折，船头就翘起来了；左下角也向后折一小块。完成！右边是船头，白色的是船舱。",captions:[{at:0,text:"右下角斜着向后折，船头翘起来；左下角也折一小块。"},{at:.85,text:"完成！右边是船头，白色的是船舱。"}],ops:[oe(N(E(hi(.96,Hn),hi(Sr,Hn+.2)),hi(Sr-.02,Hn+.02),{all:!0,dir:"mountain"}),N(E(hi(0,Hn+.1),hi(.1,Hn)),hi(.02,Hn+.02),{all:!0,dir:"mountain"}))]}]},oU=Object.freeze(Object.defineProperty({__proto__:null,default:sU},Symbol.toStringTag,{value:"Module"})),b0=.66,R1=.55,cn=b0-.5,P1=t=>e=>t<0?e[0]<.25:e[0]>.75,aU={id:"mushroom",name:"蘑菇",cat:"花草和节日",level:1,paperName:"朱红",blurb:"红红的大伞盖，底下一根白白的蘑菇柄。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。把上边向下折，折下来大约三分之一，露出来的有色面是伞盖。",ops:[fe(E([0,b0],[1,b0]),[.5,.98])]},{text:"把左右两边都向后折，折到中间对齐。前面剩下一条：上面红，下面白。",ops:[oe(N(E([.25,0],[.25,1]),[.05,.3],{all:!0,dir:"mountain"}),N(E([.75,0],[.75,1]),[.95,.3],{all:!0,dir:"mountain"}))]},{text:"把后面两片的上角斜着向外翻出来：折线从上边的外角斜着落到中线上。翻出来的红色三角形伸在两边，伞盖就比柄宽了。",ops:[oe(N(E(M(-.25,cn),M(0,cn-R1)),[.02,.65],{all:!0,region:P1(-1),dir:"mountain"}),N(E(M(.25,cn),M(0,cn-R1)),[.98,.65],{all:!0,region:P1(1),dir:"mountain"}))],captions:[{at:0,text:"把后面那片的上角向外翻出来",point:M(-.25,cn)},{at:.8,text:"红色的三角伸在两边，伞盖变宽了"}]},{text:"把伞盖上面的两个角和两边的尖角都向后折掉一小块，伞盖就圆了。",ops:[oe(N(E(M(-.33,cn-.1),M(-.12,cn)),M(-.25,cn-.01),{all:!0,dir:"mountain"}),N(E(M(.33,cn-.1),M(.12,cn)),M(.25,cn-.01),{all:!0,dir:"mountain"}),N(E(M(-.36,cn),M(-.36,cn-.4)),M(-.39,cn-.2),{all:!0,dir:"mountain"}),N(E(M(.36,cn),M(.36,cn-.4)),M(.39,cn-.2),{all:!0,dir:"mountain"}))]},{text:"把柄下面的两个角也向后折一点。完成！红伞盖、白柄的小蘑菇。",captions:[{at:0,text:"把柄下面的两个角向后折一点。"},{at:.85,text:"完成！红伞盖、白柄的小蘑菇。"}],ops:[oe(N(E(M(-.25,-.42),M(-.17,-.5)),M(-.24,-.49),{all:!0,dir:"mountain"}),N(E(M(.25,-.42),M(.17,-.5)),M(.24,-.49),{all:!0,dir:"mountain"}))]}]},lU=Object.freeze(Object.defineProperty({__proto__:null,default:aU},Symbol.toStringTag,{value:"Module"})),Yu=[0,0],cU=[1,0],as=[1,1],uU=[0,1],hU=[0,.586],fU=[.586,0],dU={id:"necktie",name:"领带",cat:"玩具和交通",level:1,paperName:"藏青",blurb:"上面细细的领结，往下渐渐变宽，最下面一个尖角。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把左上、右上两条边都折到中间的竖线上，上面变成一个尖尖的细角。",ops:[oe(N({lineTo:[[as,uU],[as,Yu]]},[.1,.95],{all:!0}),N({lineTo:[[as,cU],[as,Yu]]},[.95,.1],{all:!0}))]},{text:"再把左右两条斜边折到中间的竖线上，整条纸变得更窄、更细长。",ops:[fe({lineTo:[[as,hU],[as,Yu]]},M(-.3,-.3),{all:!0}),fe({lineTo:[[as,fU],[as,Yu]]},M(.3,-.3),{all:!0})]},{text:"把最上面的尖角向下折一小段，上面就变平了，这是领结。",ops:[fe(E(M(-.2,.5),M(.2,.5)),M(0,.65),{all:!0})]},{text:"翻面。完成！上面是领结，下面是领带，尖的一头朝下。",captions:[{at:0,text:"翻面。"},{at:.85,text:"完成！上面是领结，下面是领带。"}],ops:[Ke]}]},pU=Object.freeze(Object.defineProperty({__proto__:null,default:dU},Symbol.toStringTag,{value:"Module"})),A0=Math.PI/180,ac=(t,e=.3)=>[Pe[0]+e*Math.cos(t*A0),Pe[1]+e*Math.sin(t*A0)],gE=t=>(Math.atan2(t[1]-Pe[1],t[0]-Pe[0])/A0+360)%360,_E=(t,e)=>n=>{const i=gE(n),r=t===1?225+11.25*e:135+11.25*e,s=t===1?315-11.25*e:225-11.25*e;return i>r+1e-6&&i<s-1e-6&&Math.hypot(n[0]-Pe[0],n[1]-Pe[1])>1e-6},vE=(t,e)=>E(Pe,ac(225+t*11.25*e)),xE=t=>ac(225+t*41,.3),la=(t,e)=>fe(vE(t,e),xE(t),{all:!0,region:_E(t,e-1)}),ca=(t,e)=>Ie(vE(t,e),xE(t),{all:!0,region:_E(t,0)}),pf=t=>t[0]>.5-1e-9&&t[1]>.5-1e-9&&t[0]+t[1]>1.5-zn-1e-9,mU=ze(t=>t([.75,.75]).add(new I(.1,0,0))),yE=t=>t[0]>t[1]+1e-9,SE=t=>t[1]>t[0]+1e-9,mf=(t,e)=>n=>t(n)&&e(n),D1=[(1.5-zn)/2,(1.5-zn)/2],ME=t=>[D1[0]+t*Math.SQRT1_2,D1[1]+t*Math.SQRT1_2],gU=(t,e,n)=>{const i=yE,r=SE,s=Kt.e1,o=Kt.e2,a=[.95,.9],l=[.9,.95],c=[.9,.6],h=[.6,.9],u=ME(n);return gt([N(E(Pe,[1,1]),c,{all:!0,region:i,angle:0,open:89,hint:!1}),N(E(Pe,[1,1]),h,{all:!0,region:r,angle:0,tie:{to:0,k:-1},hint:!1}),N(E(u,s),a,{all:!0,region:mf(pf,i),dir:e,parent:0,tag:"neck"}),N(E(u,o),l,{all:!0,region:mf(pf,r),dir:"mountain",parent:1,tie:{to:2,k:-1},tag:"neck"})],[2],72)},wE=.138,_U=gU("A","valley",wE),L1=[0,-1,0],EE=(t,e)=>{const n=[];for(const i of[1,-1]){const r=n.length,s=a=>l=>{const c=gE(l);return Math.hypot(l[0]-Pe[0],l[1]-Pe[1])>1e-6&&(i===1?c>225+1e-6&&c<a-1e-6:c<225-1e-6&&c>a+1e-6)},o=ac(225+i*5,.3);n.push(N(E(Pe,ac(225+i*90)),o,{normal:L1,all:!0,region:s(225+i*90),dir:e.open>0?"valley":"mountain",angle:Math.abs(e.open),open:i===1?e.open:void 0,tie:i===-1?{to:0,k:-1}:void 0,hint:!1}));for(let a=1;a<=7;a++){const l=225+i*(90-11.25*a),c=(a%2===0?e.r:1)*(i===1?1:-1);n.push(N(E(Pe,ac(l)),o,{normal:L1,all:!0,region:s(l),parent:r+a-1,angle:t,dir:e.d1,tie:i===1&&a===1?void 0:{to:1,k:c},hint:!1}))}}return gt(n,[1],60,!0)},N1={az:115,el:18},vU={id:"peacock",name:"孔雀",cat:"动物",level:2,paperName:"群青",colorUp:!0,blurb:"身后的尾羽像扇子一样一道一道展开。最后一步是把折好的褶拉开，开屏。",techs:["收拢","花瓣折","褶","外翻折"],view:{az:0,el:66},thumbView:{az:130,el:22},steps:[...Wf(),..._0(Kt,!1),{text:"翻面。这一面没有做花瓣折，还是一个小正方形，上面伸出刚才翻上去的大尖角。",ops:[Ke]},{text:"先在右半边折出三道折痕，都从上面的角出发，把右半边分成四等份：先对半折一道，再在两边各折一道。两层一起折。",tech:"折痕",ops:[ca(1,2),ca(1,1),ca(1,3)]},{text:"像折扇子一样：沿最靠边的那道折痕，把右半边向中间折过去。",tech:"褶",ops:[la(1,1)]},{text:"沿下一道折痕再折一次。",tech:"褶",ops:[la(1,2)]},{text:"沿最后一道折痕再折一次。右半边折成了窄窄的一叠，像一把合着的扇子。",tech:"褶",ops:[la(1,3)]},{text:"左半边也一样，先折出三道折痕。",tech:"折痕",ops:[ca(-1,2),ca(-1,1),ca(-1,3)]},{text:"沿最靠边的折痕把左半边向中间折过去。",tech:"褶",ops:[la(-1,1)]},{text:"沿下一道折痕再折一次。",tech:"褶",ops:[la(-1,2)]},{text:"沿最后一道折痕再折一次。左右两叠褶并排靠在中线两边。",tech:"褶",ops:[la(-1,3)]},{text:"沿中线把右半边折到左边，整个对折。两叠褶夹在里面。",ops:[fe(E(Pe,[1,1]),mU,{all:!0})]},{text:"转个方向，让长长的直边朝上：这是背。左边伸出去的尖角要做脖子。",ops:[Qe(90)]},{text:"做脖子：把左边的尖角向上外翻折。先把前后两层像翻书一样打开，尖角沿斜线翻上去、包在外面，再合上。",tech:"外翻折",ops:[_U],captions:[{at:0,text:"左边的尖角要翻上去，做成脖子"},{at:.285,pause:1300,text:"先把前后两层像翻书一样打开"},{at:.5,text:"尖角沿斜线向上翻，包在外面"},{at:.9,text:"合上，压平。脖子立起来了"}]},{text:"做头：把脖子的尖端向前外翻折一小段。只把尖端的两层撑开一点，翻过去包在外面，再捏合。",tech:"外翻折",ops:[eE(ME(wE),[1,1],[.95,.9],.1,120,mf(pf,yE),mf(pf,SE),!0)],captions:[{at:0,text:"脖子的尖端要向前翻，做成头"},{at:.3,pause:1200,text:"只把尖端的两层撑开一点"},{at:.8,text:"翻过去包在外面，再捏合"}],view:{az:0,el:60,zoom:2,focus:[.95,.95]}},{text:"把它立起来，背朝上、肚子朝下。背上夹着的就是那两叠褶。",ops:[Qe(90,"x")],view:N1},{text:"开屏：捏住两叠褶的外端，一左一右向外拉开。每道褶都张开一些，两叠在正中间连着，展成一面立在身后的扇子。完成！",ops:[EE(140,{r:.7,d1:"valley",open:90})],view:N1,captions:[{at:0,text:"捏住背上两叠褶的外端"},{at:.25,pause:900,text:"先把两叠分别向两旁翻开"},{at:.5,text:"再把每道褶都拉开一些"},{at:.9,text:"完成！孔雀开屏了。"}]}]},xU=Object.freeze(Object.defineProperty({__proto__:null,default:vU,spread:EE},Symbol.toStringTag,{value:"Module"})),gf=[0,0],_f=[1,1],I1=t=>t[1]>t[0]-1e-9,U1=t=>t[1]<t[0]+1e-9,C0=[.7334,.7334],R0=M(-.152,.555),yU=t=>gt([N(E(gf,_f),M(-.1,0),{all:!0,region:I1,angle:0,open:89}),N(E(gf,_f),M(-.1,0),{all:!0,region:U1,angle:0,tie:{to:0,k:-1}}),N(E(C0,R0),M(-.01,.65),{all:!0,region:I1,dir:t,parent:0}),N(E(C0,R0),M(-.01,.65),{all:!0,region:U1,dir:"valley",parent:1,tie:{to:2,k:-1}})],[2],72),SU={id:"penguin2",name:"企鹅",cat:"动物",level:1,paperName:"黑",colorUp:!0,blurb:"细高的黑身子，胸前一块白肚皮，尖尖的小嘴朝前伸。",techs:["折痕","外翻折"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"黑色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"左右对折，压出竖着的折痕后打开。",tech:"折痕",ops:[Ie(E(gf,_f),[1,0])]},{text:"把左右两个角向中间折，角尖不要碰到中间的折痕。折过来的白色是企鹅的肚皮。",ops:[oe(N(E(M(-.36,-.5),M(-.36,.5)),[0,1]),N(E(M(.36,-.5),M(.36,.5)),[1,0]))]},{text:"把下角向后折，企鹅就能站稳了。",ops:[Je(E(M(-.5,-.47),M(.5,-.47)),M(0,-.7),{all:!0})]},{text:"沿中间的折痕把右半边向后折，对折。",ops:[Je(E(gf,_f),M(.3,0),{all:!0})]},{text:"把上角斜着向左下折，压出折痕后打开。这条折痕下一步要用。",tech:"折痕",ops:[Ie(E(C0,R0),M(-.01,.65),{all:!0})]},{text:"做头：沿刚才的折痕把上角外翻折。先把前后两层像翻书一样分开，上角沿折线翻到外面，包住背，再合上。角尖伸出左边，是企鹅的嘴。完成！",tech:"外翻折",captions:[{at:0,text:"上角要翻到外面，包住背"},{at:.285,pause:1100,text:"先把前后两层分开"},{at:.7,text:"上角翻到外面，再合上"},{at:.92,text:"完成！白肚皮朝前，尖嘴伸出来。"}],inset:{az:0,el:10,label:"正面"},ops:[yU("mountain")]}]},MU=Object.freeze(Object.defineProperty({__proto__:null,default:SU},Symbol.toStringTag,{value:"Module"})),O1=.11,Mn=.14,wU={id:"photo-frame",name:"相框",cat:"器物和盒子",level:1,paperName:"杏黄",blurb:"四条边向里折，露出中间一块白色的“照片”，颜色的边框就是相框。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。把左边向里折一条窄边，折线离纸边约一指宽。",ops:[fe(E([Mn,0],[Mn,1]),[.03,.5])]},{text:"右边也向里折一条同样宽的窄边。",ops:[fe(E([1-Mn,0],[1-Mn,1]),[.97,.5])]},{text:"把上边折进来，同样宽。两头会压在左右窄边的上面。",ops:[fe(E([0,1-Mn],[1,1-Mn]),[.5,.97],{all:!0})]},{text:"下边也折进来，同样宽。四条窄边围成一个方框。",ops:[fe(E([0,Mn],[1,Mn]),[.5,.03],{all:!0})]},{text:"把四个角向后折掉一小块，相框的边角就变得整齐。完成！把照片放在白色的地方。",captions:[{at:0,text:"把四个角向后折掉一小块。"},{at:.85,text:"完成！把照片放在白色的地方。"}],ops:[oe(...[[Mn,Mn,1,1],[1-Mn,Mn,-1,1],[1-Mn,1-Mn,-1,-1],[Mn,1-Mn,1,-1]].map(([t,e,n,i])=>N(E([t,e+i*O1],[t+n*O1,e]),[t-n*.01,e-i*.01],{all:!0,dir:"mountain"})))]}]},EU=Object.freeze(Object.defineProperty({__proto__:null,default:wU},Symbol.toStringTag,{value:"Module"})),Da={TL:t=>t,TR:t=>[1-t[0],t[1]],BL:t=>[t[0],1-t[1]],BR:t=>[1-t[0],1-t[1]]},gi=1e-9,z1=(t,e,n,i)=>{const r=a=>{const l=t(a);return l[0]<.25+gi&&l[1]>.75-gi},s=a=>{const l=t(a);return l[0]<.25+gi&&l[1]>.5-gi&&l[1]<.75+gi},o=a=>i===void 0?void 0:{to:i+a,k:1};return[N(E(t([.25,.75]),t([.25,1])),t([.1,.9]),{region:r,parent:e,tie:o(0),hint:!1}),N(E(t([.25,.75]),t([0,1])),t([.05,.8]),{region:r,parent:n,dir:"mountain",tie:o(1)}),N(E(t([.25,.75]),t([0,.5])),t([.05,.7]),{region:s,tie:{to:e,k:1}})]},F1=t=>{const e=t?Da.TL:Da.BL,n=t?Da.TR:Da.BR,i=t?.25:-.25,r=s=>t?s[1]>.75-gi:s[1]<.25+gi;return gt([N(E(M(-1,i),M(1,i)),M(0,t?.4:-.4),{all:!0,region:r}),...z1(e,0,1),...z1(n,0,4,1)],[0],72)},TU=t=>e=>{const n=t(e);return n[0]>.5+gi||n[1]<.5-gi?!1:n[1]>.75-gi||n[0]<.25+gi&&n[1]>.5+n[0]-gi},k1=(t,e,n)=>({kind:"fold",line:E(M(0,0),M(e*.25,n*.25)),move:M(e*.4,n*.02),dir:"valley",all:!0,region:TU(t)}),bU=()=>[{text:"白色的一面朝上。上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,.5],[1,.5]),[.5,.9])]},{text:"左右对折，压出折痕后打开。两条折痕交在纸的中心。",ops:[Ie(E([.5,0],[.5,1]),[.1,.5])]},{text:"把左右两条边对齐中间的竖折痕折过来。",ops:[oe(N(E([.25,0],[.25,1]),[.05,.5]),N(E([.75,0],[.75,1]),[.95,.5]))]},{text:"把上边向下对齐中间的横折痕折一下，压出折痕后打开；下边也一样。",ops:[Ie(E(M(-1,.25),M(1,.25)),M(0,.4),{all:!0}),Ie(E(M(-1,-.25),M(1,-.25)),M(0,-.4),{all:!0})]},{text:"上边的中间有一条缝。两只手各捏住缝两旁最上面一层的角，向左右两边拉开，同时让上边沿刚才的折痕折下来；压平后左右各伸出一个尖角。这是两次“压折”一起做。",tech:"压折",ops:[F1(!0)],inset:{az:0,el:12,label:"平视"},captions:[{at:0,text:"捏住上边中缝两旁最上面一层的角"},{at:.45,pause:1100,text:"向左右两边拉开，上边跟着折下来"},{at:.86,text:"压平：左右各伸出一个尖角"}]},{text:"下边也同样：两个角向左右拉开，下边向上折，压平。这个六边形叫“风车基本形”。",tech:"压折",ops:[F1(!1)]}],AU={id:"pinwheel",name:"风车",cat:"玩具和交通",level:2,paperName:"朱红",blurb:"四片叶片朝同一个方向转。用图钉钉在筷子上，迎风就能转。",techs:["折痕","压折"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[...bU(),{text:"左右各有上下两片三角形的叶片。把左上那片沿斜线向上翻，尖角从朝左变成朝上。",ops:[k1(Da.TL,-1,1)]},{text:"把右下那片沿斜线向下翻，尖角朝下。完成！四片叶片朝同一个方向转。",captions:[{at:0,text:"把右下那片沿斜线向下翻，尖角朝下。"},{at:.85,text:"完成！四片叶片朝同一个方向转。"}],ops:[k1(Da.BR,1,-1)]}]},CU=Object.freeze(Object.defineProperty({__proto__:null,default:AU},Symbol.toStringTag,{value:"Module"})),ao=Math.SQRT2,ms=[.5,ao],B1=[.5,0],V1=ao-.5*Math.tan(67.5*Math.PI/180),TE=.11,H1=E(ms,[.5-TE,0]),G1=E(ms,[.5+TE,0]),RU=t=>t[0]<.5,PU=t=>t[0]>.5,DU={id:"plane",name:"纸飞机",cat:"玩具和交通",level:1,paperName:"橙",paper:{w:1,h:ao},blurb:"最常见的尖头纸飞机，用一张 A4 纸。机翼宽，飞得稳。",techs:["折痕"],thumbView:{az:-35,el:28},steps:[{text:"用一张长方形的纸（A4）。竖着对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E(B1,ms),[.2,.5])]},{text:"把上面两个角折到中线。",ops:[oe(N(E(ms,[0,ao-.5]),[.02,ao-.02]),N(E(ms,[1,ao-.5]),[.98,ao-.02]))]},{text:"把两条斜边再向中线对齐折一次，机头变尖。",ops:[oe(N(E(ms,[0,V1]),[.01,.6],{all:!0}),N(E(ms,[1,V1]),[.99,.6],{all:!0}))]},{text:"沿中线向后对折，刚才折的两片留在外面。",ops:[Je(E(B1,ms),[.2,.5],{all:!0})],view:{az:-20,el:50}},{text:"折机翼：从机头折到机尾，机身留一指宽，把上面这一片折下来。",ops:[fe(G1,[.95,.15],{all:!0,region:PU,tag:"wr"})]},{text:"另一片向后折，和前面的机翼对齐。",ops:[Je(H1,[.05,.15],{all:!0,region:RU,tag:"wl"})]},{text:"把飞机立起来，机腹朝下。",ops:[Qe(-90,"y")],view:{az:-35,el:28}},{text:"把两片机翼向两边展平。完成！捏住机腹向前平推就能飞。",captions:[{at:0,text:"把两片机翼向两边展平。"},{at:.85,text:"完成！捏住机腹向前平推就能飞。"}],ops:[oe(N(G1,[.95,.15],{all:!0,has:"wr",dir:"valley",angle:90,normal:[-1,0,0]}),N(H1,[.05,.15],{all:!0,has:"wl",dir:"mountain",angle:90,normal:[-1,0,0]}))],view:{az:-35,el:28}}]},LU=Object.freeze(Object.defineProperty({__proto__:null,default:DU},Symbol.toStringTag,{value:"Module"})),NU={id:"red-envelope",name:"红包",cat:"花草和节日",level:1,paperName:"朱红",colorUp:!0,blurb:"过年用的红包：竖长的红纸袋，上面盖着一个尖尖的白色封口。",techs:["折痕"],paper:{w:.6,h:1.4},view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"这是一张竖着的长方形纸，有颜色的一面朝上。左右对折，压出折痕后打开，这条中线用来对准封口。",tech:"折痕",ops:[Ie(E([.3,0],[.3,1.4]),[.1,.7],{all:!0})]},{text:"把下边向后折上去一截，这是红包装钱的口袋，正面看不见。",ops:[Je(E([0,.25],[.6,.25]),[.3,.1],{all:!0})]},{text:"把上边向下折一大截，露出来的白色就是红包的封口。",ops:[fe(E([0,1],[.6,1]),[.3,1.3],{all:!0,tag:"flap"})]},{text:"把封口的左下角和右下角向后折，折到封口和红纸之间，折线从两边斜着折向中线，封口就变成尖尖的，指着下面。",ops:[oe(N(E(M(-.3,.12),M(0,-.1)),M(-.29,-.09),{all:!0,has:"flap",dir:"mountain",place:{below:[.3,1.2]}}),N(E(M(.3,.12),M(0,-.1)),M(.29,-.09),{all:!0,has:"flap",dir:"mountain",place:{below:[.3,1.2]}}))]},{text:"把红包下面的两个角向后折掉一小块，角就圆了。完成！红红的红包，上面盖着白色的尖封口。",captions:[{at:0,text:"把下面的两个角向后折掉一小块。"},{at:.85,text:"完成！红红的红包，白色的尖封口。"}],ops:[oe(N(E(M(-.3,-.35),M(-.2,-.45)),M(-.29,-.44),{all:!0,dir:"mountain"}),N(E(M(.3,-.35),M(.2,-.45)),M(.29,-.44),{all:!0,dir:"mountain"}))]}]},IU=Object.freeze(Object.defineProperty({__proto__:null,default:NU},Symbol.toStringTag,{value:"Module"})),Ki=Math.SQRT2,UU=t=>t[0]<.25,OU=t=>t[0]>.75,W1=.25*Math.tan(67.5*Math.PI/180),zU={id:"rocket",name:"火箭",cat:"玩具和交通",level:1,paperName:"朱红",paper:{w:1,h:Ki},blurb:"尖尖的头、细长的身子、两片张开的尾翼，一张 A4 纸五步折成。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"用一张长方形的纸（A4），白色的一面朝上、竖着放。左右对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([.5,0],[.5,Ki]),[.1,.5])]},{text:"把左右两边折到中间的折痕上，像关上两扇门。",ops:[oe(N(E([.25,0],[.25,Ki]),[.05,.5]),N(E([.75,0],[.75,Ki]),[.95,.5]))]},{text:"把上面两个角折到中线上，上头变尖，这是火箭头。",ops:[oe(N(E([.5,Ki],[.25,Ki-.25]),[.27,Ki-.01],{all:!0}),N(E([.5,Ki],[.75,Ki-.25]),[.73,Ki-.01],{all:!0}))]},{text:"做尾翼：从左下角斜着向上折一条线，把左边那扇门的下半截向外翻出去，伸出边外的尖角就是尾翼；右边也一样。",ops:[oe(N(E([0,W1],[.25,0]),[.01,.01],{region:UU}),N(E([1,W1],[.75,0]),[.99,.01],{region:OU}))]},{text:"翻面。完成！尖头朝上，两片尾翼张开，准备发射。",captions:[{at:0,text:"翻面。"},{at:.85,text:"完成！尖头朝上，两片尾翼张开，准备发射。"}],ops:[Ke]}]},FU=Object.freeze(Object.defineProperty({__proto__:null,default:zU},Symbol.toStringTag,{value:"Module"})),kU=[1,0],BU=[0,1],j1=Math.SQRT1_2/2,qu=.1,fp=t=>E(M(-1,t),M(1,t)),VU={id:"sailboat2",name:"小帆船",cat:"玩具和交通",level:1,paperName:"群青",colorUp:!0,blurb:"一大一小两片白帆，中间隔着一道缝，底下是有颜色的船身。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"有颜色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把下角向上折到上角，对折成三角形。",ops:[fe(E(kU,BU),[.2,.2])]},{text:"把左角折到上面的尖上，压出折痕后打开。右角也向上折一次再打开，但折线从底边中点往右挪一指宽，右角落在尖的右下方。",tech:"折痕",ops:[Ie(E(M(0,0),M(-1,1)),[.02,.95],{all:!0}),Ie(E(M(qu,0),M(1,1-qu)),[.95,.02],{all:!0})],captions:[{at:0,text:"左角折到上面的尖上，再打开"},{at:.5,text:"右角的折线往右挪一指，折一次再打开"}]},{text:"只把最上面一层的尖角向下折，尖角碰到底边的中点。",ops:[fe(fp(j1),[.04,.04],{region:t=>t[0]+t[1]<.6})]},{text:"沿刚才的两条折痕，把左右两个角一起向上折。左角碰到上面的尖，右角落在尖的右下方，两片中间留出一道缝。",ops:[oe(N(E(M(0,0),M(-1,1)),[.02,.95],{all:!0}),N(E(M(qu,0),M(1,1-qu)),[.95,.02],{all:!0}))]},{text:"翻面。",ops:[Ke]},{text:"把上面的尖角向下折，尖角碰到底下的尖。有颜色的三角是船身，上面露出一大一小两片白帆。",ops:[fe(fp(j1),[.96,.96],{region:t=>t[0]+t[1]>1.4})]},{text:"把船底的尖角向后折上去一点，船底就平了，还能当支架让小船立住。完成！",captions:[{at:0,text:"把船底的尖角向后折上去一点。"},{at:.85,text:"完成！一大一小两片白帆，有颜色的船身。"}],ops:[Je(fp(.15),M(0,.03),{all:!0})]}]},HU=Object.freeze(Object.defineProperty({__proto__:null,default:VU},Symbol.toStringTag,{value:"Module"})),bE=1e-9,X1=(t,e)=>[t*Math.SQRT1_2+e,t*Math.SQRT1_2-e],$1=t=>E(X1(t,.01),X1(t,-.01)),GU=t=>kc(t)&&t[0]+t[1]<.5+zn-bE,AE=t=>Zg(t)&&t[0]+t[1]>1.5-zn+bE,Y1=.38,q1=48*Math.PI/180,P0=[1-Y1*Math.SQRT1_2,1-Y1*Math.SQRT1_2],K1=t=>{const e=i=>{const r=i(P0),s=i([1,1]).sub(r).normalize();return{E:r,up:s,side:new I(s.y,-s.x,0).multiplyScalar(t)}},n=(i,r)=>ze(s=>{const{E:o,up:a,side:l}=e(s);return o.addScaledVector(a,i).addScaledVector(l,r)});return N(E(ze(i=>e(i).E),n(Math.cos(q1),Math.sin(q1))),n(.3,.01),{all:!0,region:AE,where:(i,r)=>{const{E:s,side:o}=e(r);return i.clone().sub(s).dot(o)>0}})},WU={id:"sea-turtle",name:"海龟",cat:"动物",level:2,paperName:"竹青",colorUp:!0,blurb:"圆鼓鼓的背甲，四只鳍向外划着，后面拖一条小尾巴。前鳍要用剪刀剪开。",techs:["收拢","花瓣折","内翻折","剪开"],view:{az:0,el:66},thumbView:{az:0,el:76},steps:[...Vo(),{text:"把这一面朝上的那片大尖角沿横折痕向下折，盖在两条“腿”上。这一片是背甲。",ops:[fe(E(Yn.e1,Yn.e2),[.1,.1],{region:kc})]},{text:"把背甲的尖端向上折，折线在背甲下半截的中间偏上。",ops:[fe($1(.3),[0,0],{all:!0,region:GU,tag:"tail"})]},{text:"再把尖端向下折回去，露出一个小尖：这是尾巴。背甲的下边变成平的了。",ops:[fe($1(.175),[0,0],{all:!0,has:"tail"})]},{text:"翻面。上面是另一片大尖角，下面是分开的两条腿。",ops:[Ke]},{text:"做后鳍：在左边那条腿靠上的地方内翻折。先像翻书一样把这一侧稍微打开，把腿的下半截沿斜线向外翻到水平，再合上。",tech:"内翻折",ops:[hf(Wt,Bc,.34,45)],captions:[{at:0,text:"左边这条腿的下半截要向外翻，做成后鳍"},{at:.285,pause:1200,text:"先把这一侧像翻书一样打开"},{at:.6,text:"腿的下半截沿斜线向外翻到水平"},{at:.9,text:"合上，压平。一只后鳍伸了出来"}]},{text:"右边那条腿也同样内翻折，做成另一只后鳍。",tech:"内翻折",ops:[hf(Wi,Jw,.34,45)]},{text:"这一步要用剪刀：把上面那片大尖角沿中线从尖端向下剪开，剪到离横折痕还有一小段的地方停下。",tech:"剪开",ops:[Dg([1,1],P0,{region:AE})],captions:[{at:0,text:"这一步要用剪刀",point:[1,1]},{at:.5,text:"沿中线从尖端向下剪，离横折痕还有一小段时停下",point:P0}]},{text:"把剪开的两半分别斜着向外折，折线从剪口的尽头出发。这是两只前鳍。",ops:[oe(K1(1),K1(-1))]},{text:"翻面，背甲朝上。完成！一只划着水的海龟。",ops:[Ke],captions:[{at:0,text:"翻面，背甲朝上。"},{at:.8,text:"完成！一只划着水的海龟。"}]}]},jU=Object.freeze(Object.defineProperty({__proto__:null,default:WU},Symbol.toStringTag,{value:"Module"})),XU=[.22,.1],$U=t=>t[0]<.15,dp=t=>fe(E([.15,t+.15],[.3,t]),XU),YU={id:"snake",name:"蛇",cat:"动物",level:1,paperName:"嫩绿",paper:{w:.6,h:2},blurb:"一根细长条弯来弯去，尖尖的尾巴，扁扁的头。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"准备一张长条纸，白色的一面朝上、竖着放。左右对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([.3,0],[.3,2]),[.02,1])]},{text:"把左右两条长边折到中间的折痕上。",ops:[oe(N(E([.15,0],[.15,2]),[.02,1]),N(E([.45,0],[.45,2]),[.58,1]))]},{text:"沿中线把右半边向后折，变成一根细长条。",ops:[Je(E([.3,0],[.3,2]),M(.08,0),{all:!0})]},{text:"做头：把上头左边的角向后折一点点，头变圆；再把右上角最上面一层向前折下来，露出一小块白色，这是眼睛。",ops:[Je(E(M(-.15,.96),M(-.11,1)),M(-.149,.999),{all:!0}),fe(E(M(-.07,1),M(0,.93)),M(-.001,.999),{region:$U})]},{text:"把下头的右下角斜着向后折；再沿着新的斜边向后折一次，尾巴变得又细又尖。",ops:[Je(E(M(-.15,-1),M(0,-.85)),M(-.01,-.99),{all:!0}),Je(E(M(-.15,-1),M(0,-.64)),M(-.01,-.86),{all:!0})]},{text:"把细长条斜过来，头在左上。",ops:[Qe(45)]},{text:"在离头不远的地方斜着折一下，后面一截拐个弯朝右上。",ops:[dp(1.45)]},{text:"再往下一点斜着折回来，后面一截朝右下。",ops:[dp(1)]},{text:"再折一次，尾巴朝右上翘起来。完成！一条弯弯曲曲的蛇。",captions:[{at:0,text:"再斜着折一次。"},{at:.85,text:"完成！一条弯弯曲曲的蛇。"}],ops:[dp(.55)]}]},qU=Object.freeze(Object.defineProperty({__proto__:null,default:YU},Symbol.toStringTag,{value:"Module"})),Z1=[0,0],pp=[1,0],mp=[1,1],Q1=[0,1],Ku=[.5,.5],_o=Math.SQRT2/4,et=_o/2;function CE(t){if(t>=90-1e-9)return[135,-180];const e=Cn(t),n=new I(Math.cos(e),0,Math.sin(e)),i=new I(0,Math.cos(e),Math.sin(e)),r=n.clone().add(i),s=new I().crossVectors(n,i).normalize(),o=Math.SQRT1_2/(1+n.dot(i)),a=Math.sqrt(Math.max(0,1-o*o*r.lengthSq())),l=r.clone().multiplyScalar(o).addScaledVector(s,a),c=r.clone().multiplyScalar(o).addScaledVector(s,-a),h=l.x+l.y<c.x+c.y?l:c,u=new I(-Math.sin(e),0,Math.cos(e)),d=new I().crossVectors(n,h).normalize(),p=new I().crossVectors(h,i).normalize(),m=(v,g,f)=>Math.atan2(new I().crossVectors(v,g).dot(f),v.dot(g))*180/Math.PI;return[m(u,d,n),m(d,p,h)]}const Pc=.62,J1=40,s_=Array.from({length:J1+1},(t,e)=>e/J1*Pc),KU=[...s_.map(t=>[t,90*t/Pc]),[1,90]],ZU=[...s_.map(t=>[t,CE(90*t/Pc)[0]]),[1,90]],QU=[...s_.map(t=>[t,CE(90*t/Pc)[1]]),[Pc+.01,-180.15],[.985,-180.15],[1,-180]],JU=(()=>{const t=[N(E(M(et,-1),M(et,1)),M(.3,0),{all:!0,where:e=>e.x>et,keys:KU}),N(E(M(-et,-1),M(-et,1)),M(-.3,0),{all:!0,where:e=>e.x<-et,angle:90,tie:{to:0,k:1}}),N(E(M(-1,et),M(1,et)),M(0,.3),{all:!0,where:e=>Math.abs(e.x)<et&&e.y>et,angle:90,tie:{to:0,k:1}}),N(E(M(-1,-et),M(1,-et)),M(0,-.3),{all:!0,where:e=>Math.abs(e.x)<et&&e.y<-et,angle:90,tie:{to:0,k:1}})];for(const e of[1,-1])for(const n of[1,-1]){const i=e>0?0:1,r=s=>e*s.x>et&&n*s.y>et;t.push(N(E(M(-1,n*et),M(1,n*et)),M(e*.3,n*.25),{all:!0,where:r,parent:i,keys:ZU,hint:!1})),t.push(N(E(M(e*et,n*et),M(e*_o,n*_o)),M(e*.2,n*.32),{all:!0,where:r,parent:t.length-1,keys:QU}))}return gt(t,[0])})(),ey=t=>gt([N(E(M(-1,t*et,et),M(1,t*et,et)),M(0,t*et,.5),{all:!0,normal:[0,1,0],dir:t>0?"mountain":"valley"}),N(E(M(-1,t*et,2*et),M(1,t*et,2*et)),M(0,t*et,.5),{all:!0,normal:[0,1,0],parent:0,angle:90,dir:t>0?"valley":"mountain"})]),e5={id:"square-box",name:"方盒",cat:"器物和盒子",level:1,paperName:"朱红",blurb:"不用胶水，一张方纸折成结实的小方盒，能装糖果、回形针。",techs:["折痕"],thumbView:{az:-30,el:40},steps:[{text:"白色的一面朝上。沿对角线对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E(Z1,mp),pp)]},{text:"另一条对角线也折出折痕。两条折痕交叉的地方是中心。",ops:[Ie(E(pp,Q1),mp)]},{text:"把四个角都折到中心。",ops:[oe(N({pointTo:[Z1,Ku]},[.02,.02]),N({pointTo:[pp,Ku]},[.98,.02]),N({pointTo:[mp,Ku]},[.98,.98]),N({pointTo:[Q1,Ku]},[.02,.98]))]},{text:"转一下，让它的边横平竖直。",ops:[Qe(45)],view:{az:0,el:70}},{text:"把下边折到中间的横线上，压出折痕后打开。",ops:[Ie(E(M(-1,-et),M(1,-et)),M(0,-.3),{all:!0})],view:{az:0,el:70}},{text:"上边也折到中间的横线上，压出折痕后打开。",ops:[Ie(E(M(-1,et),M(1,et)),M(0,.3),{all:!0})],view:{az:0,el:70}},{text:"左边折到中间的竖线上，压出折痕后打开。",ops:[Ie(E(M(-et,-1),M(-et,1)),M(-.3,0),{all:!0})],view:{az:0,el:70}},{text:"右边也折到中间的竖线上，压出折痕后打开。现在纸上有一个井字形的折痕。",ops:[Ie(E(M(et,-1),M(et,1)),M(.3,0),{all:!0})],view:{az:0,el:70}},{text:"把上下两个角打开，左右两个角保持折着。",ops:[oe(N(E(M(-1,_o),M(1,_o)),[.97,.97],{hint:!1}),N(E(M(-1,-_o),M(1,-_o)),[.03,.03],{hint:!1}))],view:{az:0,el:70}},{text:"把左右两边沿折痕立起来，成为两面墙。上下两头也跟着立起来，四个角的纸顺着折痕向盒子里面收进去，贴在两头的墙内侧。",ops:[JU],view:{az:-30,el:40},captions:[{at:0,text:"把左右两边沿折痕立起来"},{at:.45,pause:1e3,text:"上下两头跟着立起，四个角向里收"},{at:.85,text:"四面墙都立直了，角上的纸贴在两头的墙里面"}]},{text:"把上面这一头的尖角沿墙的上沿折进盒子里，压住里面收进来的角，尖角碰到盒底中心。",ops:[ey(1)],view:{az:-30,el:40}},{text:"另一头的尖角也同样折进去。完成！一个结实的方盒子。",captions:[{at:0,text:"另一头的尖角也同样折进去。"},{at:.85,text:"完成！一个结实的方盒子。"}],ops:[ey(-1)],view:{az:-30,el:40}}]},t5=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),n5={id:"stocking",name:"圣诞袜",cat:"花草和节日",level:1,paperName:"朱红",colorUp:!0,blurb:"长条纸折成红袜子，白袜口、白脚尖，可以挂在床头等礼物。",techs:[],paper:{w:.4,h:1.5},view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"这是一张长条纸，有颜色的一面朝上。把最上面的一条向下折，露出白色，这是袜口。",ops:[fe(E([0,1.3],[.4,1.3]),[.2,1.45],{all:!0})]},{text:"长条的下半段斜着向后折：折线从左边斜到右边偏下，折过去的一段变成向右伸出的脚，脚尖是白色的。",ops:[Je(E([0,.7],[.4,.3]),[.2,.05],{all:!0})]},{text:"把脚尖右边的两个角向后折一点点，脚尖就圆了。",ops:[oe(N(E(M(.4,-.05),M(.5,-.15)),M(.48,-.07),{all:!0,dir:"mountain",where:t=>t.x>.08}),N(E(M(.4,-.45),M(.5,-.35)),M(.48,-.43),{all:!0,dir:"mountain",where:t=>t.x>.08}))]},{text:"把袜子左下角（脚后跟）向后折一点点，也圆一些。完成！",captions:[{at:0,text:"把左下角向后折一点点。"},{at:.85,text:"完成！红袜子，白袜口。"}],ops:[Je(E(M(-.2,.05),M(-.1,-.15)),M(-.19,-.04),{all:!0})]}]},i5=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),ua=t=>t[0]<1.5,Dl=t=>t[0]>1.5,Zu=t=>E(M(-1,t),M(1,t)),r5={id:"submarine",name:"潜水艇",cat:"玩具和交通",level:1,paperName:"杏黄",blurb:"两张纸：一张折成长长的船身，船头圆、船尾尖；一张折成小方块，放在上面做指挥塔。",techs:[],sheets:[{at:[0,-.5]},{at:[0,.5]}],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"准备两张纸，白色的一面朝上，一上一下挨着放。先折下面一张：把下边向上折到上边，对折。",ops:[fe(Zu(-.5),M(0,-.99),{all:!0,region:ua})]},{text:"再从下往上对折一次，成了一条长长的船身。",ops:[fe(Zu(-.25),M(0,-.45),{all:!0,region:ua})]},{text:"船尾（右边）的上下两个角都向后折，船尾就尖了。",ops:[Je(E(M(.5,-.07),M(.26,0)),M(.49,-.01),{all:!0,region:ua}),Je(E(M(.5,-.25+.07),M(.26,-.25)),M(.49,-.25+.01),{all:!0,region:ua})]},{text:"船头（左边）的上下两个角向后折一小点，船头就圆了。",ops:[Je(E(M(-.5,-.07),M(-.43,0)),M(-.495,-.005),{all:!0,region:ua}),Je(E(M(-.5,-.25+.07),M(-.43,-.25)),M(-.495,-.25+.005),{all:!0,region:ua})]},{text:"再折上面一张：把上边向下折到下边，对折。",ops:[fe(Zu(.5),M(0,.99),{all:!0,region:Dl})]},{text:"再从上往下对折一次。",ops:[fe(Zu(.25),M(0,.45),{all:!0,region:Dl})]},{text:"把这一条的左右两头都向后折到中间，像关上两扇门。",ops:[Je(E(M(-.25,0),M(-.25,1)),M(-.45,.1),{all:!0,region:Dl}),Je(E(M(.25,0),M(.25,1)),M(.45,.1),{all:!0,region:Dl})]},{text:"再把右半边向后对折，成了一个小方块，这就是指挥塔，立在船身上面靠船头的地方。完成！",captions:[{at:0,text:"把右半边向后对折。"},{at:.85,text:"完成！长长的船身，上面立着指挥塔，潜水艇要下潜了。"}],ops:[Je(E(M(0,0),M(0,1)),M(.2,.1),{all:!0,region:Dl})]}]},s5=Object.freeze(Object.defineProperty({__proto__:null,default:r5},Symbol.toStringTag,{value:"Module"})),RE=1e-9,o5=t=>t[0]>t[1]+RE,a5=t=>t[1]>t[0]+RE,PE=(t,e)=>n=>t(n)&&e(n),D0=.11,ty=[(1.5-zn)/2+D0*Math.SQRT1_2,(1.5-zn)/2+D0*Math.SQRT1_2],ny=(t,e,n,i)=>fe(E(Pe,i),n,{all:!0,region:PE(t,e)}),iy=(t,e,n,i,r)=>{const s=o=>{const a=o(e),l=o(t.c).sub(a).normalize(),c=o(n).sub(a);return c.addScaledVector(l,-c.dot(l)).normalize(),{M:a,up:l,side:c}};return fe(E(e,ze(o=>{const{M:a,up:l,side:c}=s(o);return a.add(l).add(c)})),t.c,{all:!0,region:o=>i(o)&&Math.hypot(o[0]-Pe[0],o[1]-Pe[1])>.19,where:(o,a)=>{const{M:l,up:c,side:h}=s(a),u=o.clone().sub(l);return u.dot(h)>.004&&u.dot(c)>-D0-.004},place:{above:r}})},l5=o5,c5=a5,u5=[.25,.3],h5=[.1,.2],f5=[.3,.37],d5=[1-(1.5-zn)/2,1-(1.5-zn)/2],gp=t=>{const e=(n,i)=>{const r=n(d5),s=n(Pe).sub(r).normalize();return r.addScaledVector(s,t).add(new I(-s.y,s.x,0).multiplyScalar(i))};return E(ze(n=>e(n,-1)),ze(n=>e(n,1)))},DE=t=>t[0]>.5&&t[1]<.5,p5=t=>t[0]<.5&&t[1]>.5,m5=p5,_p=[0,1],lo=[1,0],ry=.36,vf=[1-.5*ry,.5*ry],sy=(t,e)=>{const n=20*Math.PI/180,i=E(vf,ze(s=>{const o=s(vf),a=s(lo).sub(o).normalize(),l=s(e).sub(o);return l.addScaledVector(a,-l.dot(a)).normalize(),o.addScaledVector(a,Math.cos(n)).addScaledVector(l,Math.sin(n))})),r=[lo[0]+(e[0]-lo[0])*.12,lo[1]+(e[1]-lo[1])*.12];return N(i,r,{all:!0,region:PE(t,DE)})},g5={id:"swallow",name:"燕子",cat:"动物",level:2,paperName:"藏青",colorUp:!0,blurb:"张开的两只翅膀，头顶一个小尖嘴，尾巴剪开折成燕尾。最后一步要用剪刀。",techs:["收拢","花瓣折","剪开"],view:{az:0,el:66},thumbView:{az:0,el:76},steps:[...Vo(),{text:"下半部分是分开的两条“腿”。把这一面两条腿的外侧边对齐中线折过去，让腿变细。",ops:[lf(t_,e_)]},{text:"翻面。",ops:[Ke]},{text:"这一面也一样，把两条腿折细。",ops:[lf(Wt,Wi)]},{text:"像翻书一样，把这一面的一半绕中线翻到另一边。上面那片大尖角会跟着对折起来，变成窄窄的一片。",ops:[ny(Nr,l5,[.75,.7],[1,1])]},{text:"把对折着的大尖角斜着折向一旁：折线从中线上比尖角根部高一点的地方出发，斜 45 度。尖角从翻过来的那一页底下伸出去，这是一只翅膀。",ops:[iy(Kt,ty,[.9,.8],Nr,[.7,.63])],captions:[{at:0,text:"把对折着的大尖角斜着折向一旁"},{at:.85,text:"它从翻过来的那一页底下伸出去：这是一只翅膀"}]},{text:"翻面。",ops:[Ke]},{text:"这一面也同样翻一页，另一片大尖角也对折起来。",ops:[ny(Ir,c5,u5,[0,0])]},{text:"同样把它斜着折向一旁。两只翅膀一左一右张开了，下面是前后叠着的两条腿。",ops:[iy(Yn,mi(ty),h5,Ir,f5)]},{text:"把前面那条腿从翅膀下面一点的地方向上折，折过头顶。",ops:[fe(gp(-.03),_p,{all:!0,region:m5,tag:"head"})]},{text:"再把伸过头顶的那一段向下折回来，折线和头顶齐平。",ops:[fe(gp(.2),_p,{all:!0,has:"head",tag:"beak"})]},{text:"把折下来的尖角再向上折一小段，尖尖地伸出头顶，这是嘴。",ops:[fe(gp(.09),_p,{all:!0,has:"beak"})]},{text:"翻面。",ops:[Ke]},{text:"这一步要用剪刀：把下面这条长尖角沿中线从尖端向上剪开，剪到三分之一多一点的地方停下。",tech:"剪开",ops:[Dg(lo,vf,{region:DE})],captions:[{at:0,text:"这一步要用剪刀",point:lo},{at:.5,text:"沿中线从尖端向上剪，剪到三分之一多一点的地方停下",point:vf}]},{text:"把剪开的两半分别斜着向外折，尾巴就分了叉。完成！一只展翅的燕子。",captions:[{at:0,text:"把剪开的两半分别斜着向外折。"},{at:.85,text:"完成！一只展翅的燕子。"}],ops:[oe(sy(Nr,[.9,.3]),sy(Ir,[.7,.1]))]}]},_5=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),oy=Math.tan(Math.PI/8),zi=[0,0],lc=[1,1],xf=t=>t[1]>t[0],yf=t=>t[1]<t[0],v5=t=>[t*Math.SQRT1_2,t*Math.SQRT1_2],ws=[0,-1,0],x5=.46,vp=.12,Eo=v5(x5),y5=t=>{const e=a=>a(Eo),n=a=>a(lc).sub(a(zi)).normalize(),i=()=>new I(0,0,-1),r=ze(a=>e(a).add(n(a).multiplyScalar(Math.cos(Cn(t)))).add(i().multiplyScalar(Math.sin(Cn(t))))),s=ze(a=>e(a).add(n(a).multiplyScalar(.2)).add(i().multiplyScalar(.05))),o=ze(a=>e(a).sub(n(a).multiplyScalar(.2)).add(i().multiplyScalar(.02)));return gt([N(E(zi,lc),s,{all:!0,region:xf,angle:0,open:89,normal:ws}),N(E(zi,lc),s,{all:!0,region:yf,angle:0,tie:{to:0,k:-1},normal:ws}),N(E(Eo,r),o,{all:!0,region:xf,dir:"valley",parent:0,normal:ws}),N(E(Eo,r),o,{all:!0,region:yf,dir:"mountain",parent:1,tie:{to:2,k:-1},normal:ws})],[2],72)},S5=t=>{const e=u=>u(Eo),n=u=>u(zi),i=u=>n(u).sub(e(u)).normalize(),r=u=>{const d=i(u),p=u([.08,.2]).sub(e(u));return p.sub(d.clone().multiplyScalar(p.dot(d))).normalize()},s=u=>n(u).sub(i(u).multiplyScalar(vp)),o=ze(u=>s(u).sub(i(u).multiplyScalar(Math.cos(Cn(t)))).add(r(u).multiplyScalar(Math.sin(Cn(t))))),a=ze(u=>s(u).sub(i(u).multiplyScalar(.08)).add(r(u).multiplyScalar(.01))),l=ze(u=>n(u).sub(i(u).multiplyScalar(.03)).add(r(u).multiplyScalar(.004))),c={zero:ze(u=>n(u).sub(i(u).multiplyScalar(vp+.3))),one:ze(u=>n(u).sub(i(u).multiplyScalar(vp+.09)))},h=(u,d)=>u.z>e(d).z+.005;return gt([N(E(Eo,zi),a,{all:!0,region:xf,where:h,angle:0,open:88,soft:c,normal:ws}),N(E(Eo,zi),a,{all:!0,region:yf,where:h,angle:0,tie:{to:0,k:-1},soft:c,normal:ws}),N(E(ze(s),o),l,{all:!0,region:xf,where:h,dir:"valley",parent:0,normal:ws}),N(E(ze(s),o),l,{all:!0,region:yf,where:h,dir:"mountain",parent:1,tie:{to:2,k:-1},normal:ws})],[2],64)},M5={id:"swan",name:"天鹅",cat:"动物",level:1,paperName:"天蓝",colorUp:!0,blurb:"细长的脖子，微微低下的头，能立在桌上的天鹅。",techs:["折痕","外翻折"],thumbView:{az:-18,el:14},steps:[{text:"有颜色的一面朝上。沿对角线对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E(zi,lc),[1,0])]},{text:"转一下，让折痕横过来。",ops:[Qe(-45)]},{text:"把左边的两条边对齐中间的折痕折过来，折成风筝形。",ops:[oe(N(E(zi,[1,oy]),[.9,.05]),N(E(zi,[oy,1]),[.05,.9]))]},{text:"沿中间的折痕向下对折，刚才折的两片包在里面。",ops:[fe(E(zi,lc),[.3,.7],{all:!0})],view:{az:-15,el:50}},{text:"把它立起来，折边朝上。尖的一头是脖子，宽的一头是尾巴。",captions:[{at:0,text:"把它立起来，折边朝上。"},{at:.85,text:"尖的一头是脖子，宽的一头是尾巴。"}],ops:[Qe(90,"x")],view:{az:-18,el:14}},{text:"做脖子：把尖的一头向上外翻折。先把前后两片像翻书一样打开，尖端沿折线向后翻，包在脊线外面，再合上。这叫“外翻折”。",tech:"外翻折",ops:[y5(41)],view:{az:-24,el:24},inset:{az:0,el:86,label:"俯视"},captions:[{at:0,text:"尖的一头要翻到外面，包住脊线"},{at:.285,pause:1300,text:"先把前后两片完全打开"},{at:.7,pause:1100,text:"尖端向后翻，包在脊线外面"},{at:.9,text:"合上，脖子就立起来了"}]},{text:"做头：把脖子的尖端向前外翻折。把尖端的两层撑开一点，尖角向前翻下来包住脊线，再捏合。完成！",tech:"外翻折",ops:[S5(47)],captions:[{at:0,text:"脖子尖端再外翻一次，做成头"},{at:.3,pause:1300,text:"只把尖端的两层撑开一点"},{at:.8,text:"尖角向前翻下来，再捏合"}],view:{az:-24,el:20,zoom:2.2,focus:ze(t=>t(zi).lerp(t(Eo),.3))}}]},w5=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),us=Math.SQRT2,ay=us/2,Qu=.3,E5={id:"table",name:"桌子",cat:"玩具和交通",level:1,paperName:"茶",paper:{w:us,h:1},blurb:"一根窄条两头一拐，就是一张四平八稳的小桌子。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"用一张长方形的纸（A4），白色的一面朝上、横着放。上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,.5],[us,.5]),[us/2,.95])]},{text:"把上边和下边都折到中间的折痕上。",ops:[oe(N(E([0,.75],[us,.75]),[us/2,.99]),N(E([0,.25],[us,.25]),[us/2,.01]))]},{text:"再把上下两条折边折到中线上，纸变成更窄的长条。",ops:[oe(N(E(M(-1,.125),M(1,.125)),M(0,.2),{all:!0}),N(E(M(-1,-.125),M(1,-.125)),M(0,-.2),{all:!0}))]},{text:"沿中线把上半条向下对折，成了一根细细的长条。这是桌面。",ops:[fe(E(M(-1,0),M(1,0)),M(0,.1),{all:!0})]},{text:"做桌腿：把长条的右头斜着向下折，折线从上边离中线约三指宽的地方出发，斜着向右下画，右头就竖起来朝下了。左头也一样。完成！上面是桌面，两边是桌腿。",captions:[{at:0,text:"把长条两头斜着向下折，竖起来朝下。"},{at:.85,text:"完成！上面是桌面，两边是桌腿。"}],ops:[oe(N(E(M(Qu,0),M(Qu+1,-1)),M(ay-.05,-.06),{all:!0}),N(E(M(-Qu,0),M(-Qu-1,-1)),M(-ay+.05,-.06),{all:!0}))]}]},T5=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),b5=[0,0],xp=[1,1],LE=.3,A5=[0,1-LE],C5=[1-LE,0],R5={id:"tent",name:"帐篷",cat:"花草和节日",level:1,paperName:"橙",blurb:"尖顶的小帐篷，两扇门帘拉向两边，中间露出白色的门。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"上下对角对折，压出折痕后打开，这条折痕是帐篷的中线。",tech:"折痕",ops:[Ie(E(b5,xp),[.8,.2])]},{text:"做门帘：折线从上角出发，把左边的角折过来，再把右边的角折过来。有颜色的门帘盖在两边，中间留出白色的门。",ops:[oe(N(E(xp,A5),[.02,.98],{all:!0}),N(E(xp,C5),[.98,.02],{all:!0}))]},{text:"把下面的尖角向后折上去，帐篷的底边就平了。完成！尖尖的帐篷，门帘拉开，露出白色的门。",captions:[{at:0,text:"把下面的尖角向后折上去。"},{at:.85,text:"完成！尖尖的帐篷，门帘拉开，露出白色的门。"}],ops:[Je(E(M(-.7,-.2),M(.7,-.2)),M(0,-.7),{all:!0})]}]},P5=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),ha={phi:80,bend:.125,tip:.04,g1:40,g2:45},fa={phi:55,bend:.18,tip:.065,g1:55,g2:42},yp=.065,D5=t=>({o:t([.5,.5]),d:t([.35,.35]).sub(t([.5,.5])).normalize()}),Sp=(t,e)=>ze(n=>{const{o:i,d:r}=D5(n);return i.addScaledVector(r,t).addScaledVector(new I(-r.y,r.x,0),e)}),Ju=(t,e,n,i,r,s,o=!1)=>[{text:s[0],tech:"内翻折",ops:[eU(t,e,n,i,(r?ha:fa).phi)],captions:o?[{at:0,text:"左边夹在中间的是一条对折着的细腿"},{at:.285,pause:1200,text:"把它上下的纸像翻书一样打开"},{at:.5,text:"腿沿斜线向外翻"},{at:.9,text:"合上，压平。大腿从左边伸了出来"}]:void 0},{text:s[1],tech:"内翻折",ops:[A1(t,e,tU,(r?ha:fa).bend,(r?ha:fa).g1)],captions:o?[{at:0,text:"在腿的中间再内翻折一次，做膝盖"},{at:.3,pause:1200,text:"腿很细，只把折点附近的两层撑开一点"},{at:.8,text:"小腿向下翻过去，再捏合"}]:void 0},{text:s[2],tech:"内翻折",ops:[A1(t,e,(r?ha:fa).bend,(r?ha:fa).tip,(r?ha:fa).g2)]}],L5={id:"trad-frog",name:"传统青蛙",cat:"动物",level:3,paperName:"翠绿",colorUp:!0,blurb:"钝钝的头，前腿举在两旁，后腿蹲着，每条腿都折出了关节。五十多步，最考验耐心。",techs:["收拢","压折","花瓣折","内翻折"],view:{az:0,el:62},thumbView:{az:0,el:74},steps:[...fE(!1),{text:"四个面都做完了，这就是“青蛙基本形”，小三角留在上面不用动。把右边最上面的一片翻到左边，眼前换成一个没有小三角的光滑的面。",ops:[It("B2")]},{text:"翻面。",ops:[Ke]},{text:"这一面也把右边最上面的一片翻到左边，同样是光滑的面。",ops:[It("D2")]},{text:"把下面长尖角两侧的边对齐中线折过来，这里有好几层，要一起折。长尖角变细了，这是一条腿。",ops:[oe(os("D2"),os("D1"))]},{text:"翻面。",ops:[Ke]},{text:"这一面也同样把两条边对齐中线折过来。",ops:[oe(os("B1"),os("B2"))]},{text:"把左边最上面的两片翻到右边，又是一个光滑的面。",ops:[It("B2","A1")]},{text:"同样把两条边对齐中线折过来。",ops:[oe(os("A1"),os("A2"))]},{text:"翻面。",ops:[Ke]},{text:"把左边最上面的两片翻到右边，这是最后一个光滑的面。",ops:[It("D2","C1")]},{text:"最后一个面也折细。上面尖的一头是头，下面四条细长的尖角是四条腿。",ops:[oe(os("C2"),os("C1"))]},...Ju("B1","B2",["C2","B1"],["B2","A1"],!1,["做后腿。左边夹在中间的是一条对折着的细腿：把它上下的纸像翻书一样打开，把这条腿沿斜线向外翻出去，再合上。这是“内翻折”，翻出来的是大腿。","在大腿中间再内翻折一次：把折点附近的两层撑开一点，下半截向下翻过去，再捏合。这是膝盖，翻下去的是小腿。","小腿的尖端再向外内翻折一小段，做成脚。"],!0),...Ju("D2","D1",["C1","D2"],["D1","A2"],!1,["右边夹在中间的那条腿也同样向外内翻折。","同样在中间内翻折出膝盖。","尖端向外翻一小段，做成脚。两条后腿好了。"]),{text:"把右边最上面的一片翻到左边，正面这条腿就对折合上了。",ops:[It("C1")]},...Ju("C1","C2",["C1"],["C2","B1","B2","A1"],!0,["做前腿：把这条合上的腿也内翻折。这次折线很陡，腿翻上去以后贴着身体、几乎朝正上方。","在肩膀的高度再内翻折一次，前半截向外拐平，这是肘。","尖端向上翻一小段，做成手。"]),{text:"翻面。",ops:[Ke]},{text:"把右边最上面的一片翻到左边，最后一条腿也对折合上了。",ops:[It("A1")]},...Ju("A1","A2",["A1"],["A2","D1","D2","C1","C2"],!0,["同样把它贴着身体向上内翻折。","在肩膀的高度内翻折，前半截向外拐平。","尖端向上翻一小段，做成手。四条腿都好了。"]),{text:"做头：把最上面的尖角向后折下去，所有层一起折。头就变钝了。完成！前腿举在两旁，后腿蹲着。传统折法最后还会从尾部的小孔吹一口气，让身体鼓起来。",captions:[{at:0,text:"把最上面的尖角向后折下去，所有层一起折。"},{at:.85,text:"完成！头是钝的，前腿举在两旁，后腿蹲着。"}],ops:[Je(E(Sp(yp,-1),Sp(yp,1)),Sp(yp*.3,0),{all:!0})]}]},N5=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),I5=[1,0],U5=[0,1],eh=Math.SQRT1_2,O5={id:"tropical-fish",name:"热带鱼",cat:"动物",level:1,paperName:"橙",blurb:"像神仙鱼一样高高的菱形身子，后面拖着扇子一样分叉的尾巴。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"把上角向下折到下角，对折成三角形。",ops:[fe(E(I5,U5),[.9,.9])]},{text:"把左右两个角都向下折到下角，变成一个小菱形。",ops:[oe(N(E(M(0,0),M(-eh/2,-eh/2)),M(-.69,-.01),{all:!0,tag:"L"}),N(E(M(0,0),M(eh/2,-eh/2)),M(.69,-.01),{all:!0,tag:"R"}))]},{text:"把刚折下来的两个尖角分别向左右斜着折出去，这是分叉的尾巴。",ops:[oe(N(E(M(-.03,-.45),M(-.2,-.75)),M(0,-.69),{all:!0,has:"L"}),N(E(M(.03,-.45),M(.2,-.75)),M(0,-.69),{all:!0,has:"R"}))]},{text:"转一下，让尾巴朝右。完成！尖的一头是嘴，可以再画上眼睛。",captions:[{at:0,text:"转一下，让尾巴朝右。"},{at:.85,text:"完成！高高的菱形身子，扇子一样的尾巴。"}],ops:[Qe(90)]}]},z5=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),th=.3,Js=.3,Ll=.07,vr=(t,e)=>M(t-.5,e-.5),ly=t=>t[1]<.125,cy=t=>t[1]>.875,F5={id:"truck",name:"卡车",cat:"玩具和交通",level:1,paperName:"杏黄",blurb:"方方正正的大货厢，前面一个斜脸的车头，底下露出两个轮子。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。上下对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E([0,.5],[1,.5]),[.5,.95])]},{text:"把上边向下折到上半张的一半，下边也向上折到下半张的一半，成了两条窄条。",ops:[oe(N(E([0,.875],[1,.875]),[.5,.99]),N(E([0,.125],[1,.125]),[.5,.01]))]},{text:"做轮子：把每条窄条两头的角斜着向外翻，让角尖伸出窄条的折边外面。四个角都这样翻。",ops:[oe(N(E([0,.125],[th,0]),[.005,.005],{region:ly}),N(E([1,.125],[1-th,0]),[.995,.005],{region:ly}),N(E([0,.875],[th,1]),[.005,.995],{region:cy}),N(E([1,.875],[1-th,1]),[.995,.995],{region:cy}))],captions:[{at:0,text:"把窄条的角斜着向外翻",point:[.005,.005]},{at:.8,text:"角尖伸出折边外面，这就是轮子"}]},{text:"沿中间的折痕把上半张向下对折，窄条包在里面，轮子从下边露出来。",ops:[fe(E([0,.5],[1,.5]),[.5,.6],{all:!0})]},{text:"压一道褶分出车头：把左边一截向右折过来，再把它往回折，只留下一窄条褶。",ops:[fe(E(vr(Js,.5),vr(Js,0)),vr(.05,.3),{all:!0}),fe(E(vr(Js+Ll,.5),vr(Js+Ll,0)),vr(2*Js-.05,.3),{all:!0,region:t=>t[0]<Js})],captions:[{at:0,text:"左边一截向右折过来"},{at:.5,text:"再往回折，留下一窄条褶"}]},{text:"把车头的左上角向后折，斜边就是前挡风玻璃。完成！左边是车头，右边是大货厢。",captions:[{at:0,text:"把车头的左上角向后折，斜边是前挡风玻璃。"},{at:.85,text:"完成！左边是车头，右边是大货厢。"}],ops:[Je(E(vr(Js+Ll-.04,.5),vr(2*Ll-.001,.3)),vr(2*Ll+.01,.49),{all:!0})]}]},k5=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),B5=[1,0],V5=[0,1],H5={id:"tulip",name:"郁金香",cat:"花草和节日",level:1,paperName:"桃",blurb:"三步折出一朵三瓣的郁金香，最适合第一次折纸。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上，把纸转成菱形。",ops:[Qe(45)]},{text:"下角向上折到上角，对折成三角形。",ops:[fe(E(B5,V5),[.2,.2])]},{text:"把左右两个角斜着向上折，角尖比中间的尖角低一点，就是三片花瓣。完成！",captions:[{at:0,text:"把左右两个角斜着向上折，角尖比中间的尖角低一点。"},{at:.85,text:"完成！三个尖角就是三片花瓣。"}],ops:[oe(N(E([.585,.415],[.883,.376]),[.98,.03],{all:!0}),N(E([.415,.585],[.376,.883]),[.03,.98],{all:!0}))]}]},G5=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),W5=t=>t[1]<.5,j5={id:"watermelon",name:"西瓜片",cat:"花草和节日",level:1,paperName:"朱红",colorUp:!0,blurb:"红红的瓜瓤，边上镶着白色的瓜皮，像刚切开的一块西瓜。",techs:[],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"有颜色的一面朝上，把纸上下对折，把上半张向后折。",ops:[Je(E(M(-.6,0),M(.6,0)),M(0,.4),{all:!0})]},{text:"只折前面这一层：把下边向上折一条窄边，露出来的白色是瓜皮。",ops:[fe(E(M(-.6,-.43),M(.6,-.43)),M(0,-.48),{region:W5})]},{text:"把左下、右下两个角向后折掉一大块，折线是斜的，下面慢慢变圆。",ops:[oe(N(E(M(-.5,-.2),M(-.2,-.5)),M(-.49,-.45),{all:!0,dir:"mountain"}),N(E(M(.5,-.2),M(.2,-.5)),M(.49,-.45),{all:!0,dir:"mountain"}))]},{text:"再把四个小角各向后折掉一点点，半圆就更圆了。完成！红的是瓜瓤，白的是瓜皮。",captions:[{at:0,text:"再把四个小角各向后折掉一点点。"},{at:.85,text:"完成！红的是瓜瓤，白的是瓜皮。"}],ops:[oe(N(E(M(-.5,-.1),M(-.4,-.3)),M(-.49,-.2),{all:!0,dir:"mountain"}),N(E(M(.5,-.1),M(.4,-.3)),M(.49,-.2),{all:!0,dir:"mountain"}),N(E(M(-.3,-.4),M(-.1,-.5)),M(-.2,-.47),{all:!0,dir:"mountain"}),N(E(M(.3,-.4),M(.1,-.5)),M(.2,-.47),{all:!0,dir:"mountain"}))]}]},X5=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),uy=Math.tan(Math.PI/8),hy=[0,0],nh=[1,1],da=-.45,fy=t=>t*Math.PI/180,Mp=[.2,0],dy=50,$5={id:"whale2",name:"鲸鱼",cat:"动物",level:1,paperName:"群青",blurb:"圆鼓鼓的大头，身子越来越细，尾巴斜斜翘起来。",techs:["折痕"],view:{az:0,el:70},thumbView:{az:0,el:78},steps:[{text:"白色的一面朝上。沿对角线对折，压出折痕后打开。",tech:"折痕",ops:[Ie(E(hy,nh),[1,0])]},{text:"转一下，让折痕横过来。",ops:[Qe(-45)]},{text:"把右边的两条边对齐中间的折痕折过来，折成风筝形。",ops:[oe(N(E(nh,[1-uy,0]),[.95,.05]),N(E(nh,[0,1-uy]),[.05,.95]))]},{text:"把左边的尖角向右折一小段，鲸鱼的头就变得又宽又钝。",ops:[fe(E(M(da,-.3),M(da,.3)),[.01,.01])]},{text:"翻面。",ops:[{kind:"turn",axis:"h"}]},{text:"沿中间的折痕把下半边向后折，对折。左边宽的是头，右边尖的是尾巴。",ops:[Je(E(hy,nh),M(0,-.3),{all:!0})]},{text:"把头上面和下面的两个小角向后折，头就圆了。",ops:[oe(N(E(M(da,.17),M(-.385,.322)),M(da+.01,.25),{all:!0,dir:"mountain"}),N(E(M(da,.08),M(-.37,0)),M(da+.01,.01),{all:!0,dir:"mountain"}))]},{text:"把右边细细的尾巴斜着向上折，翘到后上方。完成！可以再画上眼睛。",captions:[{at:0,text:"把细细的尾巴斜着向上折。"},{at:.85,text:"完成！大大的圆头，尾巴向后上方翘起。"}],ops:[fe(E(M(Mp[0],Mp[1]),M(Mp[0]+.3*Math.cos(fy(dy/2)),.3*Math.sin(fy(dy/2)))),M(.65,.01),{all:!0})]}]},Y5=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),q5={id:"xmas-tree",name:"圣诞树",cat:"花草和节日",level:2,paperName:"翠绿",colorUp:!0,blurb:"能立在桌上的圣诞树，八片树枝像打开的伞一样均匀张开。",techs:["收拢","压折"],view:{az:0,el:62},thumbView:{az:-20,el:22},steps:[...Wf(),{text:"右边最上面的一片是对折着的两层。把它竖起来，手指从下面伸进两层之间撑开，让它的折边对准中线，压平成一个风筝形。这叫“压折”。",tech:"压折",ops:[Ms("C1","D2")],captions:[{at:0,text:"把右边最上面的一片竖起来"},{at:.45,pause:1100,text:"手指从下面伸进两层之间，把它撑开"},{at:.86,text:"折边对准中线，压平成风筝形"}]},{text:"把风筝形的左半边像翻书一样翻到右边。",ops:[It("C1")]},{text:"左边最上面的一片也同样竖起来、撑开、压平。",tech:"压折",ops:[Ms("C2","B1")]},{text:"翻面。",ops:[Ke]},{text:"这一面也一样：左边最上面的一片竖起来、撑开、压平。",tech:"压折",ops:[Ms("A2","D1")]},{text:"把风筝形的右半边翻到左边。",ops:[It("A2")]},{text:"右边最上面的一片也撑开、压平。现在四片都压成了风筝形，一共八页。",tech:"压折",ops:[Ms("A1","B2")]},{text:"把左边最上面的两页翻到右边，左右各四页。",ops:[It("A1","A2")]},{text:"把左边最上面的一页翻到右边。眼前换成一个光滑的面，下面是一个纸角。",ops:[It("D1")]},{text:"把下面的纸角向上折，折线是两侧拐角的连线。树底就平了。",ops:[Xu("D1","D2")]},{text:"翻面。",ops:[Ke]},{text:"把左边最上面的一页翻到右边，露出光滑的面。",ops:[It("B1")]},{text:"同样把下面的纸角向上折。",ops:[Xu("B1","B2")]},{text:"把左边最上面的两页翻到右边，又是一个光滑的面。",ops:[It("B2","A1")]},{text:"把纸角向上折。",ops:[Xu("A1","A2")]},{text:"翻面。",ops:[Ke]},{text:"把左边最上面的两页翻到右边，这是最后一个光滑的面。",ops:[It("D2","C1")]},{text:"最后一个纸角也向上折。四个面的底都平了。",ops:[Xu("C2","C1")]},{text:"把八页像打开一把伞那样绕中轴均匀张开，每两页之间隔开一样大。",ops:[hE([[["C2"],"valley",67.5],[["B1"],"valley",22.5],[["B2"],"mountain",22.5],[["A1"],"mountain",67.5],[["C1"],"valley",67.5],[["D2"],"valley",22.5],[["D1"],"mountain",22.5],[["A2"],"mountain",67.5]],[])],view:{az:-25,el:40}},{text:"把树立起来，尖的一头朝上。完成！",captions:[{at:0,text:"把树立起来，尖的一头朝上。"},{at:.8,text:"完成！"}],ops:[Qe(90,"x")],view:{az:-20,el:22}}]},K5=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),py=["动物","玩具和交通","器物和盒子","花草和节日"],Dh={1:"初级",2:"进阶",3:"专家"},Z5=Object.assign({"./m/boat.ts":jb,"./m/book.ts":$b,"./m/burger.ts":qb,"./m/butterfly.ts":Qb,"./m/candy-dish.ts":HL,"./m/cat.ts":XL,"./m/chestnut.ts":qL,"./m/chopstick-sleeve.ts":ZL,"./m/cicada.ts":iN,"./m/coaster.ts":sN,"./m/crab.ts":lN,"./m/crane.ts":mN,"./m/crow.ts":MN,"./m/cup.ts":AN,"./m/dino.ts":RN,"./m/dog.ts":NN,"./m/dragonfly.ts":WN,"./m/envelope.ts":KN,"./m/flapping-bird.ts":QN,"./m/fortune-teller.ts":lI,"./m/fox.ts":fI,"./m/glider.ts":vI,"./m/heart.ts":wI,"./m/hot-air-balloon.ts":TI,"./m/house.ts":RI,"./m/icecream.ts":NI,"./m/jumping-frog.ts":zI,"./m/leaf.ts":BI,"./m/lily.ts":iU,"./m/motorboat.ts":oU,"./m/mushroom.ts":lU,"./m/necktie.ts":pU,"./m/peacock.ts":xU,"./m/penguin2.ts":MU,"./m/photo-frame.ts":EU,"./m/pinwheel.ts":CU,"./m/plane.ts":LU,"./m/red-envelope.ts":IU,"./m/rocket.ts":FU,"./m/sailboat2.ts":HU,"./m/sea-turtle.ts":jU,"./m/snake.ts":qU,"./m/square-box.ts":t5,"./m/stocking.ts":i5,"./m/submarine.ts":s5,"./m/swallow.ts":_5,"./m/swan.ts":w5,"./m/table.ts":T5,"./m/tent.ts":P5,"./m/trad-frog.ts":N5,"./m/tropical-fish.ts":z5,"./m/truck.ts":k5,"./m/tulip.ts":G5,"./m/watermelon.ts":X5,"./m/whale2.ts":Y5,"./m/xmas-tree.ts":K5}),Q5=["fox","dog","cat","cicada","swan","crane","plane","glider","boat","house","fortune-teller","cup","square-box","envelope","heart","tulip","icecream"],my=t=>{const e=Q5.indexOf(t);return e<0?99:e},Mr=Object.values(Z5).map(t=>t.default).filter(t=>t&&t.id).sort((t,e)=>py.indexOf(t.cat)-py.indexOf(e.cat)||my(t.id)-my(e.id)||t.level-e.level||t.steps.length-e.steps.length),J5=t=>Mr.find(e=>e.id===t),To={name:"折一折",tagline:"一步一步折给你看"},eO=[{name:"剪开",text:"要用剪刀：沿画出的线把纸剪开一段，剪到线的尽头为止。小朋友请让大人帮忙。"},{name:"褶",text:"像折扇子一样，一道朝里、一道朝外来回折，把一片纸折成窄窄的一叠。"},{name:"折痕",text:"折一下再打开，在纸上留一条线，给后面的步骤当参照。"},{name:"塞入",text:"把一个角或一条边插进两层纸之间的口袋里，起固定作用。"},{name:"压折",text:"把折过来的一片（两层的口袋）撑开，再压平。口袋顶上的角会摊成一个三角形。"},{name:"撑开压平",text:"从开口把整个作品撑开，让原来在两侧的角碰到一起，再朝另一个方向压平。"},{name:"内翻折",text:"把一个尖角沿折线翻进自己的两层之间。要先把两层撑开，尖角才翻得进去。"},{name:"外翻折",text:"把一个尖角沿折线翻到外面，包住原来的折边。要先把两层打开，尖角才翻得过去。"},{name:"收拢",text:"几条已有的折痕同时折，把纸一下子收成一个基本形。"},{name:"花瓣折",text:"提起一个角向上翻，两条边顺着折痕向中线收拢，形成细长的菱形。"}],NE=1e-7,an=(t,e)=>[t[0]-e[0],t[1]-e[1]],bo=(t,e)=>[t[0]+e[0],t[1]+e[1]],Ao=(t,e)=>[t[0]*e,t[1]*e],Sf=(t,e)=>t[0]*e[0]+t[1]*e[1],Bs=(t,e)=>t[0]*e[1]-t[1]*e[0],Vc=t=>Math.hypot(t[0],t[1]),Es=t=>{const e=Vc(t);return e<NE?[0,0]:[t[0]/e,t[1]/e]},tO=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],gy=(t,e)=>Vc(an(t,e));function rl(t){let e=0;for(let n=0;n<t.length;n++)e+=Bs(t[n],t[(n+1)%t.length]);return e/2}function Xn(t){let e=0,n=0,i=0;for(let r=0;r<t.length;r++){const s=t[r],o=t[(r+1)%t.length],a=Bs(s,o);i+=a,e+=(s[0]+o[0])*a,n+=(s[1]+o[1])*a}if(Math.abs(i)<NE){const r=t.reduce((s,o)=>bo(s,o),[0,0]);return Ao(r,1/t.length)}return[e/(3*i),n/(3*i)]}function nO(t,e,n){return Bs(e,an(n,t))}function IE(t,e,n,i=1e-9){const r=Es(n),s=t.map(p=>nO(e,r,p)),o=s.some(p=>p>i);if(!s.some(p=>p<-i))return[t,null];if(!o)return[null,t];const l=[],c=[];for(let p=0;p<t.length;p++){const m=t[p],v=t[(p+1)%t.length],g=Math.abs(s[p])<=i?0:s[p],f=s[(p+1)%t.length],x=Math.abs(f)<=i?0:f;if(g>=0&&l.push(m),g<=0&&c.push(m),g>0&&x<0||g<0&&x>0){const _=g/(g-x),y=tO(m,v,_);l.push(y),c.push(y)}}const h=p=>iO(p),u=h(l),d=h(c);return u.length<3||Math.abs(rl(u))<1e-10?[null,t]:d.length<3||Math.abs(rl(d))<1e-10?[t,null]:[u,d]}function iO(t){const e=[];for(const n of t)e.length&&gy(e[e.length-1],n)<1e-9||e.push(n);return e.length>1&&gy(e[0],e[e.length-1])<1e-9&&e.pop(),e}function Mf(t,e,n=1e-7){const i=Math.sign(rl(t))||1;for(let r=0;r<t.length;r++){const s=t[r],o=t[(r+1)%t.length],a=Es(an(o,s));if(i*Bs(a,an(e,s))<-n)return!1}return!0}function o_(t,e,n=1e-6){for(const i of[t,e])for(let r=0;r<i.length;r++){const s=i[r],o=i[(r+1)%i.length],a=an(o,s);if(Vc(a)<1e-12)continue;const l=Es([-a[1],a[0]]);let c=1/0,h=-1/0,u=1/0,d=-1/0;for(const p of t){const m=Sf(l,p);c=Math.min(c,m),h=Math.max(h,m)}for(const p of e){const m=Sf(l,p);u=Math.min(u,m),d=Math.max(d,m)}if(h<=u+n||d<=c+n)return!1}return!0}function rO(t,e,n,i){const r=Bs(e,i);if(Math.abs(r)<1e-12)return null;const s=Bs(an(n,t),i)/r;return bo(t,Ao(e,s))}function L0(t){return rl(t)<0?[...t].reverse():t}function UE(t,e,n=1e-10){let i=L0(t);const r=L0(e);for(let s=0;s<r.length&&i;s++){const o=r[s],a=r[(s+1)%r.length],l=an(a,o);Vc(l)<1e-12||(i=IE(i,o,l,1e-10)[0])}return i&&Math.abs(rl(i))>n?i:null}function OE(t,e,n=1e-6){for(let i=0;i<t.length;i++){const r=t[i],s=t[(i+1)%t.length],o=an(s,r),a=Vc(o);if(a<n)continue;const l=Ao(o,1/a);for(let c=0;c<e.length;c++){const h=e[c],u=e[(c+1)%e.length];if(Math.abs(Bs(l,an(h,r)))>n||Math.abs(Bs(l,an(u,r)))>n)continue;const d=Sf(l,an(h,r)),p=Sf(l,an(u,r)),m=Math.max(0,Math.min(d,p)),v=Math.min(a,Math.max(d,p));if(v-m>n)return[bo(r,Ao(l,m)),bo(r,Ao(l,v))]}}return null}const a_=8e-4,sO=.012,zE=(t,e=1)=>[t*2*e,0];function oO(t=1,e=1,n){const i=n&&n.length?n:[{at:[0,0]}];return{faces:i.map((r,s)=>{const[o]=zE(s,t),a=new ft().makeTranslation(r.at[0]-o-t/2,r.at[1]-e/2,0);return{id:s,poly:[[o,0],[o+t,0],[o+t,e],[o,e]],m:a,layer:0}}),paper:{w:t,h:e},nextId:i.length}}function sl(t){return{faces:t.faces.map(e=>({id:e.id,poly:e.poly.map(n=>[n[0],n[1]]),m:e.m.clone(),layer:e.layer,tags:e.tags&&[...e.tags]})),paper:{...t.paper},nextId:t.nextId,thick:t.thick,cuts:t.cuts&&t.cuts.map(([e,n])=>[[e[0],e[1]],[n[0],n[1]]])}}const Zt=(t,e)=>new I(e[0],e[1],0).applyMatrix4(t.m),ur=t=>new I(0,0,1).transformDirection(t.m);function FE(t,e){for(const r of t.faces)if(Mf(r.poly,e,1e-6))return r;let n=t.faces[0],i=1/0;for(const r of t.faces){const s=Xn(r.poly),o=Math.hypot(s[0]-e[0],s[1]-e[1]);o<i&&(i=o,n=r)}return n}function on(t,e){return Array.isArray(e)?Zt(FE(t,e),e):"fn"in e?e.fn(n=>on(t,n)):new I(...e.w)}function aO(t){return t.z<-1e-6||Math.abs(t.z)<=1e-6&&(t.y<-1e-6||Math.abs(t.y)<=1e-6&&t.x<0)?t.clone().negate():t.clone()}function kE(t){const e=Math.abs(t.z)>=.9?new I(1,0,0).sub(t.clone().multiplyScalar(t.x)).normalize():new I().crossVectors(new I(0,0,1),t).normalize(),n=new I().crossVectors(t,e).normalize();return[e,n]}function Dc(t){const e=[];for(const n of t.faces){const i=aO(ur(n)),r=i.dot(Zt(n,n.poly[0]));let s=e.find(o=>o.n.dot(i)>1-1e-7&&Math.abs(o.d-r)<1e-5);if(!s){const[o,a]=kE(i);s={n:i,d:r,e1:o,e2:a,faces:[],poly2:new Map},e.push(s)}s.faces.push(n),s.poly2.set(n.id,n.poly.map(o=>{const a=Zt(n,o);return[a.dot(s.e1),a.dot(s.e2)]}))}return e}const _y=new WeakMap;function lO(t,e){if(!e||!e.length)return t;let[n,i]=t;for(const[r,s]of e){const o=an(i,n),a=Math.hypot(o[0],o[1]);if(a<1e-9)return null;const l=p=>Math.abs(o[0]*(p[1]-n[1])-o[1]*(p[0]-n[0]))/a;if(l(r)>1e-6||l(s)>1e-6)continue;const c=p=>((p[0]-n[0])*o[0]+(p[1]-n[1])*o[1])/(a*a),h=Math.max(0,Math.min(c(r),c(s))),u=Math.min(1,Math.max(c(r),c(s)));if(u-h<1e-6/a)continue;const d=p=>[n[0]+o[0]*p,n[1]+o[1]*p];if(h<1e-6&&u>1-1e-6)return null;h<1e-6?n=d(u):i=d(h)}return Math.hypot(i[0]-n[0],i[1]-n[1])<1e-6?null:[n,i]}function Yf(t){const e=_y.get(t);if(e)return e;const n=[],i=t.faces.map(r=>{let s=1/0,o=1/0,a=-1/0,l=-1/0;for(const c of r.poly)s=Math.min(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[0]),l=Math.max(l,c[1]);return[s,o,a,l]});for(let r=0;r<t.faces.length;r++)for(let s=r+1;s<t.faces.length;s++){const o=i[r],a=i[s];if(o[2]<a[0]-1e-6||a[2]<o[0]-1e-6||o[3]<a[1]-1e-6||a[3]<o[1]-1e-6)continue;const l=OE(t.faces[r].poly,t.faces[s].poly),c=l&&lO(l,t.cuts);c&&n.push({a:t.faces[r].id,b:t.faces[s].id,p:c[0],q:c[1]})}return _y.set(t,n),n}function cO(t,e,n){if("through"in e){const A=on(t,e.through[0]),R=on(t,e.through[1]);return{p:A,d:R.clone().sub(A).normalize()}}const[i,r]=kE(n),s=A=>[A.dot(i),A.dot(r)],o=(A,R)=>i.clone().multiplyScalar(A[0]).add(r.clone().multiplyScalar(A[1])).add(n.clone().multiplyScalar(R));if("pointTo"in e){const A=on(t,e.pointTo[0]),R=on(t,e.pointTo[1]),T=A.dot(n),S=s(A),C=s(R),z=Es(an(C,S));return{p:o(Ao(bo(S,C),.5),T),d:o([-z[1],z[0]],0).normalize()}}const[[a,l],[c,h]]=e.lineTo,u=on(t,a),d=on(t,l),p=on(t,c),m=on(t,h),v=u.dot(n),g=s(u),f=Es(an(s(d),g)),x=s(p),_=Es(an(s(m),x)),y=rO(g,f,x,_);if(!y)return{p:o(Ao(bo(g,x),.5),v),d:o(f,0).normalize()};const P=Es(bo(f,_)),D=Math.hypot(P[0],P[1])<1e-9?[-f[1],f[0]]:P;return{p:o(y,v),d:o(D,0).normalize()}}function BE(t,e,n,i){const r=new I().crossVectors(n,i).normalize(),s=t.m.clone().invert(),o=ur(t),a=new I().crossVectors(o,r);if(a.length()<1e-9)return null;a.normalize();const l=Zt(t,[0,0]),c=new I(1,0,0).transformDirection(t.m),h=new I(0,1,0).transformDirection(t.m),u=r.dot(e.clone().sub(l)),d=r.dot(c),p=r.dot(h),v=(Math.abs(d)>Math.abs(p)?l.clone().add(c.clone().multiplyScalar(u/d)):l.clone().add(h.clone().multiplyScalar(u/p))).clone().applyMatrix4(s),g=a.clone().transformDirection(s);return{p:[v.x,v.y],d:Es([g.x,g.y])}}function Hc(t,e,n){const i=new Os().setFromAxisAngle(e,n),r=new ft().makeRotationFromQuaternion(i);return r.setPosition(t.clone().sub(t.clone().applyMatrix4(r))),r}function VE(t){const e=t.elements;for(let n=0;n<16;n++){const i=Math.round(e[n]);Math.abs(e[n]-i)<1e-10&&(e[n]=i)}}const HE=t=>{const e=t.elements;for(let n=0;n<16;n++)if(Math.abs(e[n]-(n%5===0?1:0))>1e-9)return!1;return!0};function eo(t,e){return t.forEach((n,i)=>{n.tie&&(e[i]=n.tie.k*e[n.tie.to])}),e}function GE(t,e){const n=t.frames.length-1;if(n<=0)return t.frames[0];const i=Math.min(1,Math.max(0,e))*n,r=Math.min(n-1,Math.floor(i)),s=i-r,o=t.frames[r],a=t.frames[r+1];return o.map((l,c)=>l+(a[c]-l)*s)}function Vr(t,e){const n=new Array(t.length),i=r=>{if(n[r])return n[r];const s=t[r],o=Hc(s.origin,s.axis,e[r]);return n[r]=s.parent===void 0?o:i(s.parent).clone().multiply(o),n[r]};return t.forEach((r,s)=>i(s)),n}function uO(t,e){if(!t.soft)return 1;const n=Math.min(1,Math.max(0,e.clone().sub(t.soft.p0).dot(t.soft.dir)/t.soft.len));return n*n*(3-2*n)}const hO=(t,e)=>{const n=t.own.get(e);return n!==void 0&&(!!t.parts[n].soft||!!t.parts[n].roll)},fO=(t,e)=>new ft().makeTranslation(0,0,(t.hop??0)*Math.sin(Math.PI*e));function WE(t,e,n){const i=t.roll,r=Math.min(1,Math.abs(n)/Math.PI),s=e.clone().sub(t.origin),o=s.dot(t.axis),a=s.dot(i.es),l=s.dot(i.fw),c=i.R*Math.min(1,r/.12)*Math.min(1,(1-r)/.16),h=(i.L+1e-6)*(1-r);let u,d;if(a<=h||c<1e-9)a<=h?(u=a,d=l):(u=2*h-a,d=-l);else if(a<=h+Math.PI*c){const p=(a-h)/c;u=h+(c-l)*Math.sin(p),d=c-(c-l)*Math.cos(p)}else{u=h-(a-h-Math.PI*c);const p=u<0?Math.max(0,1+u/(2.5*c)):1;d=2*c*p*p*(3-2*p)-l}return t.origin.clone().addScaledVector(t.axis,o).addScaledVector(i.es,u).addScaledVector(i.fw,d)}function vo(t,e,n,i,r){const s=t.own.get(e);if(s===void 0)return n.clone();const o=t.parts[s];if(o.roll){const l=WE(o,n,i[s]);return o.parent===void 0?l:l.applyMatrix4(r[o.parent])}if(!o.soft)return n.clone().applyMatrix4(r[s]);const a=n.clone().applyMatrix4(Hc(o.origin,o.axis,i[s]*uO(o,n)));return o.parent===void 0?a:a.applyMatrix4(r[o.parent])}function dO(t,e){const n=GE(t,e);return{ang:n,mats:Vr(t.parts,n),hop:fO(t,e)}}function pO(t,e){const n=e.length,i=t.map((r,s)=>[...r,e[s]]);for(let r=0;r<n;r++){let s=r;for(let o=r+1;o<n;o++)Math.abs(i[o][r])>Math.abs(i[s][r])&&(s=o);if(!(Math.abs(i[s][r])<1e-300)){[i[r],i[s]]=[i[s],i[r]];for(let o=0;o<n;o++){if(o===r)continue;const a=i[o][r]/i[r][r];if(a!==0)for(let l=r;l<=n;l++)i[o][l]-=a*i[r][l]}}}return i.map((r,s)=>Math.abs(r[s])<1e-300?0:r[n]/r[s])}function mO(t,e,n=40){let i=[...e],r=t(i),s=r.reduce((l,c)=>l+c*c,0),o=1e-4;const a=i.length;for(let l=0;l<n&&s>1e-24;l++){const c=[];for(let m=0;m<a;m++){const v=[...i];v[m]+=1e-6;const g=[...i];g[m]-=1e-6;const f=t(v),x=t(g);c.push(f.map((_,y)=>(_-x[y])/(2*1e-6)))}const u=Array.from({length:a},(m,v)=>Array.from({length:a},(g,f)=>c[v].reduce((x,_,y)=>x+_*c[f][y],0))),d=c.map(m=>m.reduce((v,g,f)=>v+g*r[f],0));let p=!1;for(let m=0;m<12;m++){const v=u.map((y,P)=>y.map((D,A)=>P===A?D*(1+o)+1e-12:D)),g=pO(v,d.map(y=>-y)),f=i.map((y,P)=>y+g[P]),x=t(f),_=x.reduce((y,P)=>y+P*P,0);if(_<s){i=f,r=x,s=_,o=Math.max(o/4,1e-9),p=!0;break}o*=6}if(!p)break}return{x:i,cost:s}}function N0(t,e){const n=new Map(t.faces.map(r=>[r.id,r])),i=[];for(const r of Yf(t)){if(e.own.get(r.a)===e.own.get(r.b))continue;const s=n.get(r.a),o=n.get(r.b),a=[(r.p[0]+r.q[0])/2,(r.p[1]+r.q[1])/2];for(const l of[r.p,r.q,a])i.push({a:r.a,b:r.b,pa:Zt(s,l),pb:Zt(o,l)})}return i}function vy(t,e,n,i=N0(t,e)){const r=Vr(e.parts,n);let s=0;for(const o of i)s=Math.max(s,vo(e,o.a,o.pa,n,r).distanceTo(vo(e,o.b,o.pb,n,r)));return s}function gO(t,e,n,i,r=!1){const s=e.parts,o=s.length,a=eo(s,s.map(P=>P.target)),l=new Array(o).fill(0),c=()=>Array.from({length:i+1},(P,D)=>a.map(A=>A*D/i));if(!o)return{frames:[l,l],err:0};if(s.some(P=>P.keys)){const P=(S,C)=>{if(C<=S[0][0])return S[0][0]>0?S[0][1]*C/S[0][0]:S[0][1];for(let z=1;z<S.length;z++){if(C>S[z][0])continue;const F=(C-S[z-1][0])/Math.max(1e-9,S[z][0]-S[z-1][0]);return S[z-1][1]+(S[z][1]-S[z-1][1])*F*F*(3-2*F)}return S[S.length-1][1]},D=Math.max(i,60),A=Array.from({length:D+1},(S,C)=>eo(s,s.map((z,F)=>z.keys?P(z.keys,C/D):a[F]*C/D)));A[D]=[...a];let R=0;const T=N0(t,e);for(const S of A)R=Math.max(R,vy(t,e,S,T));return{frames:A,err:R}}const h=(P,D)=>{const A=Vr(s,D),R=[];for(const T of P){const S=vo(e,T.a,T.pa,D,A).sub(vo(e,T.b,T.pb,D,A));R.push(S.x,S.y,S.z)}return R},u=[.31,.74].map(P=>eo(s,s.map((D,A)=>.7*Math.sin(1+A*1.7+P*5)+P))),d=N0(t,e),p=d.filter(P=>u.some(D=>{const A=Vr(s,D);return vo(e,P.a,P.pa,D,A).distanceTo(vo(e,P.b,P.pb,D,A))>1e-9})),m=s.some(P=>P.open!==void 0);if(!p.length&&!m)return{frames:c(),err:0};const v=P=>{const D=u[0],A=eo(s,D.map((S,C)=>C===P?S+.3:S)),R=h(p,D),T=h(p,A);return R.some((S,C)=>Math.abs(S-T[C])>1e-9)},g=[];for(let P=0;P<o;P++)!s[P].tie&&!n.includes(P)&&v(P)&&g.push(P);const f=[l];let x=[...l];if(m)for(let D=1;D<=14;D++){const A=eo(s,s.map(R=>R.open!==void 0?R.open*D/14:0));f.push(A),x=A}const _=[...x];let y=0;for(let P=1;P<=i;P++){const D=P/i,A=s.map((C,z)=>_[z]+(a[z]-_[z])*D),R=g.map(C=>x[C]+(a[C]-_[C])/i),T=C=>{const z=[...A];return g.forEach((F,j)=>z[F]=C[j]),h(p,eo(s,z))};let S=[...A];if(g.length&&(P<i||r)){const C=mO(T,R);g.forEach((z,F)=>S[z]=C.x[F])}S=eo(s,S),P===i&&!r&&(S=[...a]),y=Math.max(y,vy(t,e,S,d)),f.push(S),x=S}return{frames:f,err:y}}function jE(t){const e=new Map;for(const n of Dc(t)){const i=[...n.faces].sort((s,o)=>s.layer-o.layer),r=[];for(let s=0;s<i.length;s++){let o=0;const a=n.poly2.get(i[s].id);for(let l=0;l<s;l++)r[l]+1>o&&o_(a,n.poly2.get(i[l].id))&&(o=r[l]+1);r.push(o),e.set(i[s].id,{depth:o,normal:n.n})}}return e}function l_(t){const e=jE(t),n=new Map;for(const i of t.faces){const r=e.get(i.id);n.set(i.id,r.depth*(t.thick??a_)*(ur(i).dot(r.normal)>=0?1:-1))}return n}function XE(t,e,n){const i=n.frames,r=Vr(n.parts,i[Math.max(0,i.length-2)]),s=Vr(n.parts,i[i.length-1]),o=new Map(t.faces.map(p=>[p.id,p])),a=Dc(t),l=new Map;a.forEach((p,m)=>p.faces.forEach(v=>l.set(v.id,m)));const c=new ft,h=p=>{const m=n.own.get(p);return m===void 0?c:s[m]},u=p=>{const m=n.own.get(p);return m===void 0?c:r[m]},d=p=>HE(h(p));for(const p of Dc(e)){if(p.faces.every(R=>d(R.id)))continue;const m=p.faces,v=m.length,g=m.map(R=>a[l.get(R.id)].n.clone().transformDirection(h(R.id)).dot(p.n)>=0?1:-1),f=m.map(R=>{const T=u(R.id).clone().multiply(o.get(R.id).m),S=new I(0,0,1).transformDirection(T),C=o.get(R.id);return{nn:S,c:S.dot(new I(C.poly[0][0],C.poly[0][1],0).applyMatrix4(T))}}),x=(R,T)=>{const S=p.e1.clone().multiplyScalar(T[0]).add(p.e2.clone().multiplyScalar(T[1])),C=f[R].nn.dot(p.n);return Math.abs(C)<.001?NaN:(f[R].c-f[R].nn.dot(S))/C},_=(R,T)=>l.get(m[R].id)!==l.get(m[T].id)||g[R]!==g[T]?0:Math.sign(o.get(m[R].id).layer-o.get(m[T].id).layer)*g[R],y=m.map(()=>[]),P=new Array(v).fill(0);for(let R=0;R<v;R++)for(let T=R+1;T<v;T++){const S=p.poly2.get(m[R].id),C=p.poly2.get(m[T].id);if(!o_(S,C))continue;const z=d(m[R].id),F=d(m[T].id),j=n.own.get(m[R].id),Q=n.own.get(m[T].id);let k=0;if(z&&F||j!==void 0&&j===Q)k=_(R,T);else{const X=UE(S,C);if(X){const O=Xn(X),$=x(R,O)-x(T,O);Math.abs($)>1e-7&&(k=Math.sign($))}k||(k=_(R,T))}k>0?(y[T].push(R),P[R]++):k<0&&(y[R].push(T),P[T]++)}const D=m.map((R,T)=>x(T,Xn(p.poly2.get(R.id)))||0),A=new Array(v).fill(!1);for(let R=0;R<v;R++){let T=-1;for(let S=0;S<v;S++)A[S]||P[S]>0||(T<0||D[S]<D[T]-1e-12)&&(T=S);if(T<0)for(let S=0;S<v;S++)!A[S]&&(T<0||P[S]<P[T])&&(T=S);A[T]=!0,m[T].layer=R;for(const S of y[T])P[S]--}}}function _O(t,e){const n=e.place.below??e.place.above,i=t.faces.find(c=>!e.faces.has(c.id)&&Mf(c.poly,n,1e-6));if(!i)throw new Error(`place：找不到纸面点 ${n} 所在的不动面片`);const r=Dc(t).find(c=>c.faces.includes(i));if(!r)return;const s=[...r.faces].sort((c,h)=>c.layer-h.layer),o=s.filter(c=>e.faces.has(c.id)),a=s.filter(c=>!e.faces.has(c.id)),l=a.indexOf(i)+(e.place.below?0:1);[...a.slice(0,l),...o,...a.slice(l)].forEach((c,h)=>c.layer=h)}function $E(t,e,n){const[i,r]=IE(e.poly,n.p,n.d,1e-9);return!i||!r?null:[{id:t.nextId++,poly:i,m:e.m.clone(),layer:e.layer,tags:e.tags&&[...e.tags]},{id:t.nextId++,poly:r,m:e.m.clone(),layer:e.layer,tags:e.tags&&[...e.tags]}]}function wp(t,e){var a,l;const n=sl(t),i=[],r=[],s=[];for(const c of e){const h=c.normal?new I(...c.normal).normalize():new I(0,0,1),{p:u,d}=cO(n,c.line,h),p=on(n,c.move),m=k=>on(n,k),v=new I().crossVectors(h,d).normalize(),g=v.multiplyScalar(Math.sign(v.dot(p.clone().sub(u)))||1),f=h.dot(u),x=k=>Math.abs(Math.abs(ur(k).dot(h))-1)<1e-6&&Math.abs(h.dot(Zt(k,k.poly[0]))-f)<1e-5,_=k=>!c.has||c.has.split(/\s+/).filter(Boolean).every(X=>{var O,$;return X[0]==="!"?!((O=k.tags)!=null&&O.includes(X.slice(1))):!!(($=k.tags)!=null&&$.includes(X))}),y=new Set(n.faces.filter(k=>(c.any3d||x(k))&&_(k)&&(!c.region||c.region(Xn(k.poly)))&&(!c.where||c.where(Zt(k,Xn(k.poly)),m))).map(k=>k.id)),P=new Set,D=[];for(const k of n.faces){if(!y.has(k.id)){D.push(k);continue}const X=BE(k,u,d,h),O=X&&$E(n,k,X);if(O){D.push(...O),s.push({orig:k,a:O[0].id,b:O[1].id}),P.add(O[0].id),P.add(O[1].id);for(const $ of i)$.faces.delete(k.id)&&($.faces.add(O[0].id),$.faces.add(O[1].id))}else D.push(k),P.add(k.id)}n.faces=D;const A=n.faces.filter(k=>P.has(k.id)&&g.dot(Zt(k,Xn(k.poly)).sub(u))>1e-7);let R;if(c.all)R=new Set(A.map(k=>k.id));else{const k=Array.isArray(c.move)?A.filter(O=>Mf(O.poly,c.move,1e-6)).slice(0,1):A.filter(O=>{const $=O.m.clone().invert(),J=p.clone().applyMatrix4($);return Math.abs(J.z)<1e-5&&Mf(O.poly,[J.x,J.y],1e-6)});R=new Set(k.map(O=>O.id));const X=[...k];for(;X.length;){const O=X.pop();for(const $ of A){if(R.has($.id))continue;const J=OE(O.poly,$.poly);J&&(J.every(ce=>Zt(O,ce).sub(u).cross(d).length()<1e-6)||(R.add($.id),X.push($)))}}}const T=c.angle??((a=c.keys)!=null&&a.length?c.keys[c.keys.length-1][1]:180),S=(c.dir??"valley")==="valley"?1:-1;let C=1/0,z=-1/0;for(const k of n.faces)if(R.has(k.id))for(const X of k.poly){const O=Zt(k,X).sub(u);if(Math.abs(g.dot(O))<1e-5&&Math.abs(h.dot(O))<1e-5){const $=d.dot(O);C=Math.min(C,$),z=Math.max(z,$)}}isFinite(C)||(C=-.1,z=.1),r.push([u.clone().add(d.clone().multiplyScalar(C)),u.clone().add(d.clone().multiplyScalar(z))]);let F;if(c.soft){const k=on(n,c.soft.zero),O=on(n,c.soft.one).clone().sub(k);F={p0:k,len:O.length(),dir:O.normalize()}}const j=new I().crossVectors(g,h).normalize();let Q;if(c.roll){let k=0;for(const X of n.faces)if(R.has(X.id))for(const O of X.poly)k=Math.max(k,g.dot(Zt(X,O).sub(u)));Q={R:c.roll,es:g.clone().normalize(),fw:new I().crossVectors(j,g).normalize().multiplyScalar(S),L:k}}i.push({faces:R,parent:c.parent,origin:u.clone(),axis:j,roll:Q,target:S*T*Math.PI/180,tie:c.tie,open:c.open===void 0?void 0:c.open*Math.PI/180,soft:F,normal:h,place:c.place,tag:c.tag,hint:c.hint,keys:(l=c.keys)==null?void 0:l.map(([k,X])=>[k,S*X*Math.PI/180])})}const o=(c,h)=>i.every(u=>u.faces.has(c)===u.faces.has(h));for(let c=s.length-1;c>=0;c--){const h=s[c],u=n.faces.find(p=>p.id===h.a),d=n.faces.find(p=>p.id===h.b);if(!(!u||!d||!o(h.a,h.b))){n.faces=n.faces.filter(p=>p.id!==h.a&&p.id!==h.b),n.faces.push({id:h.orig.id,poly:h.orig.poly,m:u.m,layer:u.layer,tags:u.tags});for(const p of i)p.faces.delete(h.a)&&(p.faces.delete(h.b),p.faces.add(h.orig.id))}}return n.faces.sort((c,h)=>c.id-h.id),{pre:n,parts:i,segs:r}}function YE(t){const e=t.map((i,r)=>{let s=0;for(let o=t[r].parent;o!==void 0;o=t[o].parent)s++;return s}),n=new Map;return t.forEach((i,r)=>i.faces.forEach(s=>{const o=n.get(s);(o===void 0||e[r]>e[o])&&n.set(s,r)})),n}function xy(t,e,n){const i=e.parts[n];let r=null,s=1e-4;for(const a of t.faces)if(e.own.get(a.id)===n)for(const l of a.poly){const c=Zt(a,l),h=c.clone().sub(i.origin),u=h.sub(i.axis.clone().multiplyScalar(h.dot(i.axis))).length();u>s&&(s=u,r={id:a.id,x:c})}if(!r)return null;const o=[];for(let a=0;a<=16;a++){const l=.06+.88*a/16,c=GE(e,l);o.push(vo(e,r.id,r.x,c,Vr(e.parts,c)))}return o}function Ep(t,e,n,i,r=!1){const{pre:s,parts:o}=t,a={parts:o,own:YE(o),frames:[],err:0},l=sl(s);if(e==="crease"){const u=Array.from({length:25},(d,p)=>[o[0].target*p/24]);a.frames=[...u,...Array.from({length:14},(d,p)=>[o[0].target*(1-(p+1)/14)])]}else{const u=gO(s,a,n,i,r);a.frames=u.frames,a.err=u.err;const d=Vr(o,a.frames[a.frames.length-1]);for(const p of l.faces){const m=a.own.get(p.id);m===void 0||HE(d[m])||(p.m=d[m].clone().multiply(p.m),VE(p.m))}XE(s,l,a),o.forEach(p=>p.place&&_O(l,p));for(const p of o)if(p.tag)for(const m of l.faces){if(!p.faces.has(m.id))continue;const v=new Set(m.tags??[]);for(const g of p.tag.split(/\s+/).filter(Boolean))g[0]==="-"?v.delete(g.slice(1)):v.add(g);m.tags=[...v]}}const c=[];o.forEach((u,d)=>{!u.faces.size||Math.abs(u.target)<1e-9||u.hint===!1||c.push({a:t.segs[d][0],b:t.segs[d][1],dir:u.target>=0?"valley":"mountain"})});const h=[];if(e!=="crease")for(const u of n){const d=xy(s,a,u);d&&h.push(d)}else{const u={...a,frames:a.frames.slice(0,25)},d=xy(s,u,0);d&&h.push(d)}return{pre:s,post:l,motion:a,hints:c,arrows:h}}function ro(t){const e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0);for(const i of t.faces)for(const r of i.poly){const s=Zt(i,r);e.min(s),n.max(s)}return{min:e,max:n,center:e.clone().add(n).multiplyScalar(.5)}}function vO(t,e){const n=L0(t),[i,r]=e,s=an(r,i);let o=0,a=1;for(let l=0;l<n.length;l++){const c=n[l],h=n[(l+1)%n.length],u=an(h,c),d=Math.hypot(u[0],u[1]);if(d<1e-12)continue;const p=(u[0]*(i[1]-c[1])-u[1]*(i[0]-c[0]))/d+1e-7,m=(u[0]*s[1]-u[1]*s[0])/d;if(Math.abs(m)<1e-12){if(p<0)return null;continue}const v=-p/m;m>0?o=Math.max(o,v):a=Math.min(a,v)}return a-o<1e-6?null:[[i[0]+s[0]*o,i[1]+s[1]*o],[i[0]+s[0]*a,i[1]+s[1]*a]]}function xO(t,e){const n=sl(t),i=new I(0,0,1),r=on(n,e.from),s=on(n,e.to),o=s.clone().sub(r).normalize(),a=i.dot(r),l=p=>!e.has||e.has.split(/\s+/).filter(Boolean).every(m=>{var v,g;return m[0]==="!"?!((v=p.tags)!=null&&v.includes(m.slice(1))):!!((g=p.tags)!=null&&g.includes(m))}),c=n.cuts?[...n.cuts]:[],h=[];for(const p of n.faces){if(!(Math.abs(Math.abs(ur(p).dot(i))-1)<1e-6&&Math.abs(i.dot(Zt(p,p.poly[0]))-a)<1e-5)||!l(p)||e.region&&!e.region(Xn(p.poly))){h.push(p);continue}const v=p.m.clone().invert(),g=r.clone().applyMatrix4(v),f=s.clone().applyMatrix4(v),x=[[g.x,g.y],[f.x,f.y]],_=vO(p.poly,x);if(!_){h.push(p);continue}const y=BE(p,r,o,i),P=y&&$E(n,p,y);P?h.push(...P):h.push(p),c.push(_)}n.faces=h.sort((p,m)=>p.id-m.id),n.cuts=c;const u=sl(n);return{pre:n,post:u,motion:{parts:[],own:new Map,frames:[[],[]],err:0},hints:[],arrows:[],cut:{a:r,b:s}}}function qE(t,e){if(e.kind==="fold")return Ep(wp(t,[e]),"fold",[0],24);if(e.kind==="crease")return Ep(wp(t,[e]),"crease",[0],24);if(e.kind==="mech")return Ep(wp(t,e.moves),"mech",e.drive??[0],e.samples??48,e.solveEnd);if(e.kind==="cut")return xO(t,e);const n=sl(t),i=ro(n),r=i.center.clone();r.z=0;let s,o,a=0;e.kind==="turn"?(s=e.axis==="h"?new I(1,0,0):new I(0,1,0),o=Math.PI,a=(e.axis==="h"?i.max.y-i.min.y:i.max.x-i.min.x)/2+.02):(s=e.axis==="x"?new I(1,0,0):e.axis==="y"?new I(0,1,0):new I(0,0,1),o=e.deg*Math.PI/180);const l={faces:new Set(n.faces.map(d=>d.id)),origin:r,axis:s,target:o,normal:new I(0,0,1)},c={parts:[l],own:YE([l]),frames:Array.from({length:25},(d,p)=>[o*p/24]),err:0,hop:a},h=sl(n),u=Hc(r,s,o);for(const d of h.faces)d.m=u.clone().multiply(d.m),VE(d.m);return XE(n,h,c),{pre:n,post:h,motion:c,hints:[],arrows:[]}}function qf(t,e=1,n=1,i){let r=oO(e,n,i);const s=[];for(const l of t){const c=r,h=[];for(const u of l.ops){const d=qE(r,u);h.push(d),r=d.post}s.push({def:l,start:c,end:r,results:h})}let o=0;for(const l of s)for(const c of jE(l.end).values())o=Math.max(o,c.depth);const a=Math.min(a_,sO/(o+1));for(const l of s){l.start.thick=l.end.thick=a;for(const c of l.results)c.pre.thick=c.post.thick=a}return s}const yy={type:"change"},c_={type:"start"},KE={type:"end"},ih=new Nw,Sy=new ds,yO=Math.cos(70*Rw.DEG2RAD),$t=new I,Vn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tp=1e-6;class SO extends OL{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ka.ROTATE,MIDDLE:ka.DOLLY,RIGHT:ka.PAN},this.touches={ONE:Ra.ROTATE,TWO:Ra.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Os,this._lastTargetPosition=new I,this._quat=new Os().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zx,this._sphericalDelta=new zx,this._scale=1,this._panOffset=new I,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new I,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wO.bind(this),this._onPointerDown=MO.bind(this),this._onPointerUp=EO.bind(this),this._onContextMenu=DO.bind(this),this._onMouseWheel=AO.bind(this),this._onKeyDown=CO.bind(this),this._onTouchStart=RO.bind(this),this._onTouchMove=PO.bind(this),this._onMouseDown=TO.bind(this),this._onMouseMove=bO.bind(this),this._interceptControlDown=LO.bind(this),this._interceptControlUp=NO.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yy),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;$t.copy(n).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),n.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ih.origin.copy(this.object.position),ih.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ih.direction))<yO?this.object.lookAt(this.target):(Sy.setFromNormalAndCoplanarPoint(this.object.up,this.target),ih.intersectPlane(Sy,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tp||this._lastTargetPosition.distanceToSquared(this.target)>Tp?(this.dispatchEvent(yy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){$t.setFromMatrixColumn(n,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,n){this.screenSpacePanning===!0?$t.setFromMatrixColumn(n,1):($t.setFromMatrixColumn(n,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$t.copy(r).sub(this.target);let s=$t.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Me,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function MO(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function wO(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function EO(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(KE),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function TO(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ka.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case ka.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case ka.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(c_)}function bO(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function AO(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(c_),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(KE))}function CO(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function RO(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ra.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Ra.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Ra.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Ra.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(c_)}function PO(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function DO(t){this.enabled!==!1&&t.preventDefault()}function LO(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NO(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const My=new Ws,rh=new I;class I0 extends IL{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new m0(n,6,1);return this.setAttribute("instanceStart",new Ss(i,3,0)),this.setAttribute("instanceEnd",new Ss(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new m0(n,6,1);return this.setAttribute("instanceColorStart",new Ss(i,3,0)),this.setAttribute("instanceColorEnd",new Ss(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new TL(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),My.setFromBufferAttribute(n),this.boundingBox.union(My))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rh.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rh)),rh.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(rh));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jn.line={uniforms:Vg.merge([me.common,me.fog,me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class jl extends ii{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Vg.clone(jn.line.uniforms),vertexShader:jn.line.vertexShader,fragmentShader:jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const bp=new at,wy=new I,Ey=new I,un=new at,hn=new at,Zi=new at,Ap=new I,Cp=new ft,dn=new UL,Ty=new I,sh=new Ws,oh=new Fc,Qi=new at;let nr,Co;function by(t,e,n){return Qi.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),Qi.multiplyScalar(1/Qi.w),Qi.x=Co/n.width,Qi.y=Co/n.height,Qi.applyMatrix4(t.projectionMatrixInverse),Qi.multiplyScalar(1/Qi.w),Math.abs(Math.max(Qi.x,Qi.y))}function IO(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){dn.start.fromBufferAttribute(r,a),dn.end.fromBufferAttribute(s,a),dn.applyMatrix4(n);const c=new I,h=new I;nr.distanceSqToSegment(dn.start,dn.end,h,c),h.distanceTo(c)<Co*.5&&e.push({point:h,pointOnLine:c,distance:nr.origin.distanceTo(h),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function UO(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;nr.at(1,Zi),Zi.w=1,Zi.applyMatrix4(e.matrixWorldInverse),Zi.applyMatrix4(i),Zi.multiplyScalar(1/Zi.w),Zi.x*=s.x/2,Zi.y*=s.y/2,Zi.z=0,Ap.copy(Zi),Cp.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(un.fromBufferAttribute(l,d),hn.fromBufferAttribute(c,d),un.w=1,hn.w=1,un.applyMatrix4(Cp),hn.applyMatrix4(Cp),un.z>u&&hn.z>u)continue;if(un.z>u){const _=un.z-hn.z,y=(un.z-u)/_;un.lerp(hn,y)}else if(hn.z>u){const _=hn.z-un.z,y=(hn.z-u)/_;hn.lerp(un,y)}un.applyMatrix4(i),hn.applyMatrix4(i),un.multiplyScalar(1/un.w),hn.multiplyScalar(1/hn.w),un.x*=s.x/2,un.y*=s.y/2,hn.x*=s.x/2,hn.y*=s.y/2,dn.start.copy(un),dn.start.z=0,dn.end.copy(hn),dn.end.z=0;const v=dn.closestPointToPointParameter(Ap,!0);dn.at(v,Ty);const g=Rw.lerp(un.z,hn.z,v),f=g>=-1&&g<=1,x=Ap.distanceTo(Ty)<Co*.5;if(f&&x){dn.start.fromBufferAttribute(l,d),dn.end.fromBufferAttribute(c,d),dn.start.applyMatrix4(o),dn.end.applyMatrix4(o);const _=new I,y=new I;nr.distanceSqToSegment(dn.start,dn.end,y,_),n.push({point:y,pointOnLine:_,distance:nr.origin.distanceTo(y),object:t,face:null,faceIndex:d,uv:null,uv1:null})}}}class Ay extends dt{constructor(e=new I0,n=new jl({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)wy.fromBufferAttribute(n,o),Ey.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+wy.distanceTo(Ey);const s=new m0(r,2,1);return e.setAttribute("instanceDistanceStart",new Ss(s,1,0)),e.setAttribute("instanceDistanceEnd",new Ss(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;nr=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Co=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),oh.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Co*.5;else{const u=Math.max(r.near,oh.distanceToPoint(nr.origin));c=by(r,u,l.resolution)}if(oh.radius+=c,nr.intersectsSphere(oh)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),sh.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Co*.5;else{const u=Math.max(r.near,sh.distanceToPoint(nr.origin));h=by(r,u,l.resolution)}sh.expandByScalar(h),nr.intersectsBox(sh)!==!1&&(i?IO(this,n):UO(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(bp),this.material.uniforms.resolution.value.set(bp.z,bp.w))}}class OO extends p0{constructor(){super();const e=new hl;e.deleteAttribute("uv");const n=new af({side:bn}),i=new af,r=new DL(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new dt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new dt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new dt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new dt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new dt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new dt(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new dt(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new dt(e,pa(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new dt(e,pa(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const m=new dt(e,pa(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const v=new dt(e,pa(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new dt(e,pa(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const f=new dt(e,pa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function pa(t){const e=new Rc;return e.color.setScalar(t),e}const ZE=512,Cy=new Map;function Ry(t){let e=t>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function u_(t,e,n=ZE){const i=e.color2??"#ffffff";t.fillStyle=e.color,t.fillRect(0,0,n,n);const r=Ry(7);switch(e.kind){case"washi":{for(let o=0;o<900;o++){t.strokeStyle=`rgba(255,255,255,${.08+r()*.12})`,t.lineWidth=.6+r(),t.beginPath();const a=r()*n,l=r()*n,c=r()*Math.PI*2,h=6+r()*26;t.moveTo(a,l),t.quadraticCurveTo(a+Math.cos(c+1)*h*.5,l+Math.sin(c+1)*h*.5,a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}break}case"dots":{t.fillStyle=i;const o=n/12;for(let a=0;a<13;a++)for(let l=0;l<13;l++)t.beginPath(),t.arc(l*o+(a%2?o/2:0),a*o,o*.2,0,Math.PI*2),t.fill();break}case"stripes":{t.fillStyle=i;const o=n/16;for(let a=0;a<16;a+=2)t.fillRect(a*o,0,o,n);break}case"check":{t.fillStyle=i;const o=n/8;for(let a=0;a<8;a++)for(let l=0;l<8;l++)(l+a)%2&&t.fillRect(l*o,a*o,o,o);break}case"seigaiha":{const o=n/10;t.lineWidth=2;for(let a=-1;a<22;a++)for(let l=-1;l<12;l++){const c=l*o*2+(a%2?o:0),h=a*o*.5;for(let u=4;u>=1;u--)t.beginPath(),t.arc(c,h,o*u/4,Math.PI,0),t.fillStyle=u%2?e.color:i,t.fill()}break}case"asanoha":{t.strokeStyle=i,t.lineWidth=1.6;const o=n/6,a=o*Math.sqrt(3)/2;for(let l=-1;l<9;l++)for(let c=-1;c<8;c++){const h=c*o+(l%2?o/2:0),u=l*a,d=[[h,u],[h+o,u],[h+o/2,u+a]],p=h+o/2,m=u+a/3;t.beginPath(),d.forEach(([v,g],f)=>{const[x,_]=d[(f+1)%3];t.moveTo(v,g),t.lineTo(x,_),t.moveTo(v,g),t.lineTo(p,m)}),t.stroke()}break}case"sakura":{t.fillStyle=i;for(let o=0;o<40;o++){const a=r()*n,l=r()*n,c=10+r()*14,h=r()*Math.PI;for(let u=0;u<5;u++){t.beginPath();const d=h+u*Math.PI*2/5;t.ellipse(a+Math.cos(d)*c*.55,l+Math.sin(d)*c*.55,c*.5,c*.3,d,0,Math.PI*2),t.fill()}}break}case"gradient":{const o=t.createLinearGradient(0,0,n,n);o.addColorStop(0,e.color),o.addColorStop(1,i),t.fillStyle=o,t.fillRect(0,0,n,n);break}case"metal":{const o=t.createLinearGradient(0,0,n,n);o.addColorStop(0,e.color),o.addColorStop(.45,i),o.addColorStop(.55,e.color),o.addColorStop(1,i),t.fillStyle=o,t.fillRect(0,0,n,n);for(let a=0;a<n;a+=2)t.fillStyle=`rgba(255,255,255,${r()*.06})`,t.fillRect(0,a,n,1);break}case"glitter":{for(let o=0;o<2600;o++){t.fillStyle=r()>.5?`rgba(255,255,255,${.4+r()*.6})`:i;const a=1+r()*2.2;t.fillRect(r()*n,r()*n,a,a)}break}}const s=Ry(31);for(let o=0;o<2600;o++){t.fillStyle=s()>.5?`rgba(255,255,255,${.02+s()*.05})`:`rgba(40,25,10,${.02+s()*.045})`;const a=.8+s()*1.8;t.fillRect(s()*n,s()*n,a,a)}for(let o=0;o<260;o++){t.strokeStyle=s()>.45?`rgba(255,255,255,${.04+s()*.07})`:`rgba(60,40,20,${.03+s()*.05})`,t.lineWidth=.5+s()*.9,t.beginPath();const a=s()*n,l=s()*n,c=s()*Math.PI*2,h=10+s()*40;t.moveTo(a,l),t.quadraticCurveTo(a+Math.cos(c+.7)*h*.5,l+Math.sin(c+.7)*h*.5,a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}}function Py(t){const e=JSON.stringify(t),n=Cy.get(e);if(n)return n;const i=document.createElement("canvas");i.width=i.height=ZE,u_(i.getContext("2d"),t);const r=new Xw(i);return r.colorSpace=Gn,r.wrapS=r.wrapT=Ac,r.anisotropy=4,Cy.set(e,r),r}function zO(t){return{front:Py(t.front),back:Py(t.back)}}const Dt={kind:"solid",color:"#fbf7ef"},rn=(t,e)=>({name:t,style:{front:{kind:"solid",color:e},back:Dt}}),U0=[rn("朱红","#e2483d"),rn("橙","#f08a24"),rn("杏黄","#f4b81c"),rn("柠檬","#f2e14c"),rn("嫩绿","#9cc84b"),rn("翠绿","#2f9e5b"),rn("竹青","#3aa39a"),rn("天蓝","#4aa3df"),rn("群青","#2b4fae"),rn("藏青","#1f2a4f"),rn("紫","#7a4fb5"),rn("淡紫","#b49fdc"),rn("浅粉","#f4a7b9"),rn("桃","#e86a92"),rn("茶","#8a5a3b"),rn("灰","#8c8c8c"),rn("黑","#222222"),rn("米白","#efe6d2"),{name:"红 / 粉 双色",style:{front:{kind:"solid",color:"#d8343f"},back:{kind:"solid",color:"#f6b6c4"}}},{name:"蓝 / 黄 双色",style:{front:{kind:"solid",color:"#2b6cc4"},back:{kind:"solid",color:"#f6d34a"}}},{name:"绿 / 白 双色",style:{front:{kind:"solid",color:"#2f9e5b"},back:{kind:"solid",color:"#ffffff"}}},{name:"紫 / 橙 双色",style:{front:{kind:"solid",color:"#6b3fa0"},back:{kind:"solid",color:"#f39a3d"}}},{name:"黑 / 金 双色",style:{front:{kind:"solid",color:"#1d1d1d"},back:{kind:"metal",color:"#b8892b",color2:"#f3d77a"}}},{name:"水波·蓝",style:{front:{kind:"seigaiha",color:"#1f4e8c",color2:"#e9eef6"},back:Dt}},{name:"水波·朱",style:{front:{kind:"seigaiha",color:"#c2352b",color2:"#f6e3d6"},back:Dt}},{name:"星纹·红",style:{front:{kind:"asanoha",color:"#c8323c",color2:"#f2c9a8"},back:Dt}},{name:"星纹·藏青",style:{front:{kind:"asanoha",color:"#1f2a4f",color2:"#9fb3d9"},back:Dt}},{name:"小花·粉",style:{front:{kind:"sakura",color:"#f3a6b8",color2:"#ffffff"},back:Dt}},{name:"小花·紫",style:{front:{kind:"sakura",color:"#6c4a9e",color2:"#f2c3d4"},back:Dt}},{name:"水玉·红",style:{front:{kind:"dots",color:"#d8343f",color2:"#ffffff"},back:Dt}},{name:"水玉·蓝",style:{front:{kind:"dots",color:"#2b6cc4",color2:"#ffffff"},back:Dt}},{name:"条纹·黄",style:{front:{kind:"stripes",color:"#f4c430",color2:"#ffffff"},back:Dt}},{name:"条纹·绿",style:{front:{kind:"stripes",color:"#2f9e5b",color2:"#e8f4ea"},back:Dt}},{name:"格子·红",style:{front:{kind:"check",color:"#c8323c",color2:"#f3e0d8"},back:Dt}},{name:"格子·蓝",style:{front:{kind:"check",color:"#2b4fae",color2:"#dbe4f7"},back:Dt}},{name:"宣纸·红",style:{front:{kind:"washi",color:"#c63d3a"},back:{kind:"washi",color:"#f5efe2"}}},{name:"宣纸·蓝",style:{front:{kind:"washi",color:"#2a5a9a"},back:{kind:"washi",color:"#f5efe2"}}},{name:"宣纸·绿",style:{front:{kind:"washi",color:"#4f8a4a"},back:{kind:"washi",color:"#f5efe2"}}},{name:"宣纸·紫",style:{front:{kind:"washi",color:"#6d4a8f"},back:{kind:"washi",color:"#f5efe2"}}},{name:"宣纸·原色",style:{front:{kind:"washi",color:"#ece2cc"},back:{kind:"washi",color:"#f5efe2"}}},{name:"渐变·晚霞",style:{front:{kind:"gradient",color:"#f6a04d",color2:"#d94f7a"},back:Dt}},{name:"渐变·海",style:{front:{kind:"gradient",color:"#3fc1c9",color2:"#2b4fae"},back:Dt}},{name:"渐变·森",style:{front:{kind:"gradient",color:"#c6e377",color2:"#2f7d4f"},back:Dt}},{name:"金",style:{front:{kind:"metal",color:"#b8892b",color2:"#f3d77a"},back:Dt}},{name:"银",style:{front:{kind:"metal",color:"#9aa1a8",color2:"#eef1f4"},back:Dt}},{name:"铜",style:{front:{kind:"metal",color:"#9a5a32",color2:"#e8a77a"},back:Dt}},{name:"玫瑰金",style:{front:{kind:"metal",color:"#c7837a",color2:"#f6d1c6"},back:Dt}},{name:"亮片·金",style:{front:{kind:"glitter",color:"#c9a03a",color2:"#f7e08a"},back:Dt}},{name:"亮片·银",style:{front:{kind:"glitter",color:"#a9b0b8",color2:"#ffffff"},back:Dt}},{name:"亮片·红",style:{front:{kind:"glitter",color:"#b8202f",color2:"#ff7a86"},back:Dt}},{name:"亮片·蓝",style:{front:{kind:"glitter",color:"#1f3f8f",color2:"#7fb2ff"},back:Dt}},{name:"亮片·粉",style:{front:{kind:"glitter",color:"#e06a92",color2:"#ffd1e0"},back:Dt}},{name:"双面·朱红",style:{front:{kind:"solid",color:"#e2483d"},back:{kind:"solid",color:"#e2483d"}}},{name:"双面·藏青",style:{front:{kind:"solid",color:"#1f2a4f"},back:{kind:"solid",color:"#1f2a4f"}}},{name:"白",style:{front:{kind:"solid",color:"#ffffff"},back:{kind:"solid",color:"#f4f1ea"}}}],Dy=new WeakMap,FO=.016,kO=3*Math.PI/180;function Rp(t){const e=Dy.get(t);if(e)return e;const n=new Map;Dy.set(t,n);const i=t.faces,r=new Map(i.map(C=>[C.id,C])),s=new Map(i.map(C=>[C.id,ur(C)])),o=Yf(t),a=new Map(i.map(C=>[C.id,C.id])),l=C=>{let z=C;for(;a.get(z)!==z;)z=a.get(z);return a.set(C,z),z},c=(C,z)=>s.get(C).dot(s.get(z))<-.99;for(const C of o)c(C.a,C.b)||a.set(l(C.a),l(C.b));const h=[];for(const C of o){if(!c(C.a,C.b))continue;const z=l(C.a),F=l(C.b);if(z===F)continue;const j=Zt(r.get(C.a),C.p),Q=Zt(r.get(C.a),C.q).sub(j);if(Q.length()<1e-6)continue;Q.normalize(),h.find(X=>(X.p===z&&X.q===F||X.p===F&&X.q===z)&&Math.abs(X.dir.dot(Q))>.9999&&j.clone().sub(X.origin).cross(X.dir).length()<1e-5)||h.push({p:z,q:F,origin:j,dir:Q,a:C.a,b:C.b})}if(!h.length)return n;const u=[...new Set(i.map(C=>l(C.id)))],d=new Map(u.map(C=>[C,[]]));h.forEach((C,z)=>{d.get(C.p).push({to:C.q,link:z}),d.get(C.q).push({to:C.p,link:z})});const p=new Map;for(const C of i)p.set(l(C.id),(p.get(l(C.id))??0)+Math.abs(rl(C.poly)));const m=u.reduce((C,z)=>p.get(z)>p.get(C)?z:C),v=new Map,g=new Map,f=new Map,x=new Array(h.length).fill(!1);let _=0;const y=(C,z)=>{v.set(C,++_),g.set(C,_);for(const{to:F,link:j}of d.get(C))j!==z&&(v.has(F)?g.set(C,Math.min(g.get(C),v.get(F))):(f.set(F,{panel:C,link:j}),y(F,j),g.set(C,Math.min(g.get(C),g.get(F))),g.get(F)>v.get(C)&&(x[j]=!0)))};y(m,-1);const P=l_(t),D=(C,z)=>{const F=r.get(C);return new I(z[0],z[1],P.get(C)??0).applyMatrix4(F.m)},A=Dc(t),R=new Map;A.forEach((C,z)=>C.faces.forEach(F=>R.set(F.id,z)));const T=C=>{const z=new Set([C]);let F=!0;for(;F;){F=!1;for(const[j,Q]of f)z.has(Q.panel)&&!z.has(j)&&(z.add(j),F=!0)}return z},S=new Map;for(const[C,z]of f){if(!x[z.link])continue;const F=h[z.link],[j,Q]=l(F.a)===C?[F.b,F.a]:[F.a,F.b],k=s.get(j),X=Math.sign(k.dot(D(Q,Xn(r.get(Q).poly)).sub(D(j,Xn(r.get(j).poly)))));if(!X)continue;const O=k.clone().multiplyScalar(X);if(Math.abs(k.z)>.9&&O.z<-.3)continue;const $=T(C),J=i.filter(se=>$.has(l(se.id)));let ce=!1;for(const se of J){const le=R.get(se.id),be=A[le],Fe=be.poly2.get(se.id),Ve=D(se.id,Xn(se.poly));for(const it of be.faces)if(!$.has(l(it.id))&&!(O.dot(D(it.id,Xn(it.poly)).sub(Ve))<=1e-7)&&o_(Fe,be.poly2.get(it.id))){ce=!0;break}if(ce)break}if(ce)continue;let pe=0;for(const se of J)for(const le of se.poly)pe=Math.max(pe,Zt(se,le).sub(F.origin).cross(F.dir).length());if(pe<1e-4)continue;const We=Math.atan(Math.min(FO,pe*Math.tan(kO))/pe),ee=Zt(r.get(Q),Xn(r.get(Q).poly)),re=ee.clone().applyMatrix4(Hc(F.origin,F.dir,We)).sub(ee);S.set(C,{origin:F.origin,axis:F.dir,angle:re.dot(O)>=0?We:-We})}if(!S.size)return n;for(const C of i){const z=[];for(let F=l(C.id);F!==m&&f.has(F);F=f.get(F).panel){const j=S.get(F);j&&z.push(j)}z.length&&n.set(C.id,z)}return n}function Pp(t,e){if(!t||e<=0)return null;const n=new ft;for(const i of t)n.premultiply(Hc(i.origin,i.axis,i.angle*e));return n}const Xl=a_*.12,BO=.011,VO=.42,HO=.0075,GO=1.05,ah=.016,Nl=[-.72,-.95,1.95],Il=2760987;let ls=null;function WO(){if(ls)return ls;const t=512,e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,t,t);let i=20261117;const r=()=>(i=i*1664525+1013904223>>>0)/4294967296,s=n.getImageData(0,0,t,t);for(let o=0;o<s.data.length;o+=4){const a=128+(r()-.5)*46;s.data[o]=s.data[o+1]=s.data[o+2]=a}n.putImageData(s,0,0);for(let o=0;o<1500;o++){const a=r()*t,l=r()*t,c=r()*Math.PI*2,h=8+r()*46;n.strokeStyle=r()>.5?`rgba(255,255,255,${.1+r()*.16})`:`rgba(0,0,0,${.08+r()*.12})`,n.lineWidth=.6+r()*1.1,n.beginPath(),n.moveTo(a,l),n.quadraticCurveTo(a+Math.cos(c+.6)*h*.5,l+Math.sin(c+.6)*h*.5,a+Math.cos(c)*h,l+Math.sin(c)*h),n.stroke()}return ls=new Xw(e),ls.wrapS=ls.wrapT=Ac,ls.repeat.set(3,3),ls.anisotropy=4,ls}const jO=`
#define PCSS_BLOCKERS 14
#define PCSS_TAPS 22
vec2 pcssDisk( int i, int n, float phi ) {
	float r = sqrt( ( float( i ) + 0.5 ) / float( n ) );
	float a = float( i ) * 2.399963 + phi;
	return vec2( cos( a ), sin( a ) ) * r;
}
float pcssShadow( sampler2D shadowMap, vec2 shadowMapSize, float lightSize, vec4 shadowCoord ) {
	vec2 uv = shadowCoord.xy;
	float zR = shadowCoord.z;
	float phi = 6.2831853 * fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) );
	float sum = 0.0, cnt = 0.0;
	for ( int i = 0; i < PCSS_BLOCKERS; i ++ ) {
		float d = unpackRGBAToDepth( textureLod( shadowMap, uv + pcssDisk( i, PCSS_BLOCKERS, phi ) * 0.014 * lightSize, 0.0 ) );
		if ( d < zR ) { sum += d; cnt += 1.0; }
	}
	if ( cnt < 0.5 ) return 1.0;
	float pen = clamp( ( zR - sum / cnt ) * 0.42 * lightSize, 1.2 / shadowMapSize.x, 0.03 );
	float s = 0.0;
	for ( int i = 0; i < PCSS_TAPS; i ++ ) s += step( zR, unpackRGBAToDepth( textureLod( shadowMap, uv + pcssDisk( i, PCSS_TAPS, phi + 1.7 ) * pen, 0.0 ) ) );
	return s / float( PCSS_TAPS );
}
`;{const t=je.shadowmap_pars_fragment,e=t.indexOf("#if defined( SHADOWMAP_TYPE_PCF )"),n=t.indexOf("#elif defined( SHADOWMAP_TYPE_PCF_SOFT )"),i=t.indexOf("float getShadow(");e>0&&n>e&&i>0&&!t.includes("pcssShadow")&&(je.shadowmap_pars_fragment=t.slice(0,i)+jO+t.slice(i,e)+`#if defined( SHADOWMAP_TYPE_PCF )
			shadow = pcssShadow( shadowMap, shadowMapSize, shadowRadius, shadowCoord );
		`+t.slice(n))}const XO=`
varying float vH;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vH = wp.z; gl_Position = projectionMatrix * viewMatrix * wp; }`,$O=`
uniform float z0, range, darkness;
uniform vec3 tint;
varying float vH;
void main() { float k = 1.0 - clamp((vH - z0) / range, 0.0, 1.0); gl_FragColor = vec4(tint, k * k * darkness); }`,YO=`
uniform sampler2D tMap;
uniform vec2 dir;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(tMap, vUv) * 0.2270270270;
  c += (texture2D(tMap, vUv + dir * 1.3846153846) + texture2D(tMap, vUv - dir * 1.3846153846)) * 0.3162162162;
  c += (texture2D(tMap, vUv + dir * 3.2307692308) + texture2D(tMap, vUv - dir * 3.2307692308)) * 0.0702702703;
  gl_FragColor = c;
}`,ma=1.35,Ly=.3,qO=new I,Ny=new WeakMap,lh=t=>{let e=Ny.get(t);return e||(e=l_(t),Ny.set(t,e)),e},Iy=new WeakMap;function ch(t,e,n){const i=Iy.get(e);if(i)return i;const r=new Map(t.faces.map(c=>[c.id,c])),s=new Map,o=new Map,a=(c,h,u)=>{c.has(h)||c.set(h,[]),c.get(h).push(u)};for(const c of Yf(t)){a(o,c.a,c),a(o,c.b,c);const h=r.get(c.a),u=r.get(c.b);n&&n.own.get(c.a)!==n.own.get(c.b)||ur(h).dot(ur(u))<.9999||(a(s,c.a,c),a(s,c.b,c))}const l=new Map;for(const c of t.faces){const h={outline:[],raw:[],fold:[],crease:[]};c.poly.forEach((u,d)=>{const p=c.poly[(d+1)%c.poly.length],m=p[0]-u[0],v=p[1]-u[1],g=Math.hypot(m,v);if(g<1e-9)return;const f=m/g,x=v/g,_=A=>[u[0]+f*A,u[1]+x*A],y=A=>{const R=[];for(const T of A){if(Math.abs(f*(T.p[1]-u[1])-x*(T.p[0]-u[0]))>1e-6||Math.abs(f*(T.q[1]-u[1])-x*(T.q[0]-u[0]))>1e-6)continue;const S=f*(T.p[0]-u[0])+x*(T.p[1]-u[1]),C=f*(T.q[0]-u[0])+x*(T.q[1]-u[1]),z=Math.max(0,Math.min(S,C)),F=Math.min(g,Math.max(S,C));F-z>1e-6&&R.push([z,F])}return R.sort((T,S)=>T[0]-S[0])},P=(A,R,T)=>{let S=0;for(const[C,z]of A)C-S>1e-6&&(T==null||T.push(_(S),_(C))),z>S&&(R==null||R.push(_(Math.max(S,C)),_(z)),S=z);g-S>1e-6&&(T==null||T.push(_(S),_(g)))};P(y(s.get(c.id)??[]),h.crease,h.outline),P(y(o.get(c.id)??[]),null,h.raw);const D=y(s.get(c.id)??[]);for(const[A,R]of y(o.get(c.id)??[])){let T=A;for(const[S,C]of D)C<=T||S>=R||(S-T>1e-6&&h.fold.push(_(T),_(S)),T=Math.max(T,C));R-T>1e-6&&h.fold.push(_(T),_(R))}}),l.set(c.id,h)}return Iy.set(e,l),l}const uh=t=>Math.round(t*1e5),Uy=(t,e,n)=>(e?"s":"r")+t.poly.map(i=>`${uh(i[0])},${uh(i[1])}`).join(";")+"|"+n.outline.map(i=>`${uh(i[0])},${uh(i[1])}`).join(";")+"|"+n.crease.length+"|"+n.raw.length+"|"+n.fold.length;function Oy(t,e){const n=[];for(let i=0;i<t.length;i+=2){const r=t[i],s=t[i+1],o=Math.max(1,Math.ceil(Math.hypot(s[0]-r[0],s[1]-r[1])/e));for(let a=0;a<o;a++)n.push([r[0]+(s[0]-r[0])*a/o,r[1]+(s[1]-r[1])*a/o],[r[0]+(s[0]-r[0])*(a+1)/o,r[1]+(s[1]-r[1])*(a+1)/o])}return n}const KO=t=>[1,-1].flatMap(e=>t.flatMap(n=>[n[0],n[1],e*Xl])),Dp=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,QE=`
precision highp float;
uniform sampler2D tDepth;
uniform vec2 res;
uniform float near, far, tanHalf, aspect;
varying vec2 vUv;
float rawDepth(vec2 uv) { return textureLod(tDepth, uv, 0.0).x; }
float viewZ(float d) { return (near * far) / ((far - near) * d - far); }
vec3 posAt(vec2 uv, float d) { float z = viewZ(d); return vec3((uv * 2.0 - 1.0) * vec2(tanHalf * aspect, tanHalf) * -z, z); }
vec3 pos(vec2 uv) { return posAt(uv, rawDepth(uv)); }`,ZO=QE+`
uniform float radius;
void main() {
  float d = rawDepth(vUv);
  if (d >= 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  vec3 p = posAt(vUv, d);
  vec2 px = 1.0 / res;
  // 法向：左右、上下各取深度变化小的一侧，避开纸边
  vec3 l = pos(vUv - vec2(px.x, 0.0)), r = pos(vUv + vec2(px.x, 0.0));
  vec3 dn = pos(vUv - vec2(0.0, px.y)), u = pos(vUv + vec2(0.0, px.y));
  vec3 dx = abs(r.z - p.z) < abs(p.z - l.z) ? r - p : p - l;
  vec3 dy = abs(u.z - p.z) < abs(p.z - dn.z) ? u - p : p - dn;
  vec3 n = normalize(cross(dx, dy));
  if (n.z < 0.0) n = -n;
  float rpx = radius / (tanHalf * -p.z) * res.y * 0.5;
  // 采样圆盘的转角按 4×4 的格子轮换，后面正好用 4×4 均值抹掉
  vec2 cell = mod(floor(gl_FragCoord.xy), 4.0);
  float phi = 6.2831853 * fract((cell.x * 5.0 + cell.y * 9.0 + 0.5) / 16.0);
  float occ = 0.0;
  const int N = 28;
  const int NEAR = 16; // 前 16 个采样看贴身的层次，其余的看大范围
  for (int i = 0; i < N; i++) {
    bool wide = i >= NEAR;
    float t = wide ? (float(i - NEAR) + 0.5) / float(N - NEAR) : (float(i) + 0.5) / float(NEAR);
    float a = float(i) * 2.399963 + phi;
    float rad = wide ? radius * 5.5 : radius;
    vec2 uv = vUv + vec2(cos(a), sin(a)) * sqrt(t) * rpx * (wide ? 5.5 : 1.0) * px;
    uv = (floor(uv * res) + 0.5) * px; // 对齐到像素中心，否则倾斜纸面上会把半个像素的深度差当成“高出来”
    float ds = rawDepth(uv);
    if (ds >= 1.0) continue;
    vec3 v = posAt(uv, ds) - p;
    float h = dot(v, n);
    float dist = length(v);
    float bias = 0.00035 + 0.02 * dist;
    float w = smoothstep(bias, bias * 2.0, h);
    if (wide) {
      // 大范围：折进去的夹角、靠得近的两片纸之间柔和地变暗（按仰角算，越陡遮得越多）
      w *= clamp(h / max(dist, 1e-5), 0.0, 1.0) * 0.85;
      w *= 1.0 - smoothstep(rad * 0.6, rad * 1.4, dist);
      occ += w * (float(NEAR) / float(N - NEAR)) * 0.55;
    } else {
      w *= mix(1.0, 0.3, smoothstep(0.004, 0.03, h)); // 只高出一两层的给足，离得远的大结构只轻轻带一点
      w *= 1.0 - smoothstep(rad, rad * 2.5, dist);
      occ += w * (1.0 - 0.6 * t);
    }
  }
  gl_FragColor = vec4(vec3(clamp(occ / float(NEAR), 0.0, 1.0)), 1.0);
}`,QO=QE+`
uniform sampler2D tAO;
uniform float strength;
uniform vec3 tint;
void main() {
  float d = rawDepth(vUv);
  if (d >= 1.0) { gl_FragColor = vec4(1.0); return; }
  float z = viewZ(d);
  vec2 px = 1.0 / res;
  float sum = 0.0, wsum = 0.0;
  for (int i = -2; i < 2; i++) for (int j = -2; j < 2; j++) {
    vec2 uv = vUv + (vec2(float(i), float(j)) + 0.5) * px;
    float ds = rawDepth(uv);
    float w = ds < 1.0 && abs(viewZ(ds) - z) < 0.02 ? 1.0 : 0.0; // 不跨过离得远的纸
    sum += textureLod(tAO, uv, 0.0).x * w; wsum += w;
  }
  float occ = clamp(strength * sum / max(wsum, 1.0), 0.0, 1.0);
  gl_FragColor = vec4(mix(vec3(1.0), tint, occ), 1.0);
}`;class JE{constructor(e,n={}){this.host=e,this.scene=new p0,this.root=new mo,this.hintGroup=new mo,this.faceObjs=new Map,this.lightMat=new jl({color:16775920,linewidth:1,transparent:!0,opacity:.9}),this.outlineMat=new jl({color:5061421,linewidth:2,transparent:!0,opacity:.42}),this.creaseMat=new jl({color:Il,linewidth:1,transparent:!0,opacity:.32}),this.paperSize={w:1,h:1},this.layerShade=1,this.onFrame=()=>{},this.camAnim=null,this.raf=0,this.disposed=!1,this.contactCam=new of(-ma,ma,ma,-ma,0,Ly+.02),this.keyDirView={value:new I(0,0,1)},this.postScene=new p0,this.postCam=new of(-1,1,1,-1,0,1),this.pr=1,this.lineMats=[],this.shown=null,this.insetCam=null,this.insetTarget=new I,this.renderer=new lL({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.pr=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Gn,this.renderer.toneMapping=mw,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=n.shadows!==!1,this.renderer.shadowMap.type=Ng,e.appendChild(this.renderer.domElement),this.camera=new Nn(32,1,.08,40),this.camera.position.set(0,-1.2,2.2),this.camera.up.set(0,0,1),this.camera.layers.enable(1),this.controls=new SO(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.minDistance=.3,this.controls.maxDistance=7,this.controls.addEventListener("start",()=>this.camAnim=null);const i=new f0(this.renderer);this.envTex=i.fromScene(new OO,.04).texture,i.dispose(),this.scene.environment=this.envTex,this.scene.environmentIntensity=.5,this.scene.environmentRotation.set(Math.PI/2,0,0),this.scene.add(new AL(16777215,15392715,.6));const r=new NL(16774114,.92);r.position.set(...Nl),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const s=r.shadow.camera;s.left=-1.3,s.right=1.3,s.top=1.3,s.bottom=-1.3,s.near=.3,s.far=6,r.shadow.radius=1,r.shadow.bias=-5e-4,r.shadow.normalBias=.005,this.scene.add(r,r.target),this.key=r,this.fill=new RL(16774114,1.9,0,.78,1,2),this.fill.position.set(...Nl),this.scene.add(this.fill,this.fill.target),this.ground=new dt(new Mo(12,12),new bL({color:3812382,opacity:.36})),this.ground.receiveShadow=!0,this.ground.position.z=-.004,this.scene.add(this.ground),this.contactA=new ki(512,512),this.contactB=new ki(512,512,{depthBuffer:!1}),this.contactMat=new ii({vertexShader:XO,fragmentShader:$O,side:Ii,blending:lr,uniforms:{z0:{value:0},range:{value:Ly},darkness:{value:.5},tint:{value:new rt(3023384)}}}),this.gaussMat=new ii({vertexShader:Dp,fragmentShader:YO,depthTest:!1,depthWrite:!1,blending:lr,uniforms:{tMap:{value:null},dir:{value:new Me}}}),this.contactCam.up.set(0,1,0),this.contactPlane=new dt(new Mo(ma*2,ma*2),new Rc({map:this.contactA.texture,transparent:!0,depthWrite:!1,side:Ii,toneMapped:!1})),this.contactPlane.scale.x=-1,this.contactPlane.renderOrder=-1,this.scene.add(this.contactPlane),this.scene.add(this.root),this.scene.add(this.hintGroup);const o={roughness:.92,metalness:0,bumpMap:WO(),bumpScale:.9};this.frontMat=new af({...o,side:kr}),this.backMat=new af({...o,side:bn});for(const c of[this.frontMat,this.backMat])c.onBeforeCompile=h=>{h.uniforms.uKeyDir=this.keyDirView,h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uKeyDir;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
  reflectedLight.directDiffuse += diffuseColor.rgb * vec3(1.0, 0.95, 0.86) * pow(max(dot(-normal, uKeyDir), 0.0), 0.8) * 0.34;`)};this.setPaper({front:{kind:"solid",color:"#e2483d"},back:{kind:"solid",color:"#fbf7ef"}}),this.depthRT=new ki(4,4,{depthTexture:new Wg(4,4,rr),minFilter:In,magFilter:In}),this.aoRT=new ki(4,4,{minFilter:In,magFilter:In,depthBuffer:!1});const a=()=>({tDepth:{value:this.depthRT.depthTexture},res:{value:new Me(4,4)},near:{value:.1},far:{value:10},tanHalf:{value:.3},aspect:{value:1}});if(this.aoMat=new ii({vertexShader:Dp,fragmentShader:ZO,depthTest:!1,depthWrite:!1,uniforms:{...a(),radius:{value:.02}}}),this.blurMat=new ii({vertexShader:Dp,fragmentShader:QO,depthTest:!1,depthWrite:!1,uniforms:{...a(),tAO:{value:this.aoRT.texture},strength:{value:1.6},tint:{value:new rt(5981748)}},blending:hw,blendSrc:bm,blendDst:dw,blendSrcAlpha:bm,blendDstAlpha:fw}),this.quad=new dt(new Mo(2,2),this.aoMat),this.quad.frustumCulled=!1,this.postScene.add(this.quad),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),n.autoRender===!1)return;const l=()=>{this.disposed||(this.raf=requestAnimationFrame(l),this.onFrame(performance.now()),this.tickCamera(),this.controls.update(),this.draw())};l()}draw(){const e=this.camera,n=this.renderer,i=e.position.distanceTo(this.controls.target);e.near=Math.max(.05,i-1.6),e.far=i+3,e.updateProjectionMatrix(),this.keyDirView.value.copy(this.key.position).sub(this.key.target.position).normalize().transformDirection(e.matrixWorldInverse),this.drawContact();const r=this.layerShade>0;if(r){const s=this.ground.visible,o=this.hintGroup.visible;this.ground.visible=this.hintGroup.visible=!1,this.contactPlane.visible=!1,e.layers.disable(1);const a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,n.setRenderTarget(this.depthRT),n.clear(),n.render(this.scene,e),n.shadowMap.autoUpdate=a,e.layers.enable(1),this.ground.visible=s,this.hintGroup.visible=o,this.contactPlane.visible=!0;for(const l of[this.aoMat,this.blurMat]){const c=l.uniforms;c.near.value=e.near,c.far.value=e.far,c.tanHalf.value=Math.tan(e.fov*Math.PI/360),c.aspect.value=e.aspect}this.quad.material=this.aoMat,n.setRenderTarget(this.aoRT),n.render(this.postScene,this.postCam),n.setRenderTarget(null)}if(n.render(this.scene,e),r&&(this.blurMat.uniforms.strength.value=1.6*this.layerShade,this.quad.material=this.blurMat,n.autoClear=!1,n.render(this.postScene,this.postCam),n.autoClear=!0),this.insetCam){const s=this.insetCam,o=this.insetRect(),a=this.host.clientHeight||1,l=s.position.distanceTo(this.insetTarget);s.near=Math.max(.05,l-1.6),s.far=l+3,s.aspect=o.w/o.h,s.updateProjectionMatrix(),n.setScissorTest(!0),n.setViewport(o.left,a-o.top-o.h,o.w,o.h),n.setScissor(o.left,a-o.top-o.h,o.w,o.h),n.setClearColor(15327178,1),n.clear(),n.render(this.scene,s),n.setClearColor(0,0),n.setScissorTest(!1),n.setViewport(0,0,this.host.clientWidth||1,a)}}insetRect(){const e=this.host.clientWidth||1,n=Math.round(Math.min(250,e*.36)),i=Math.round(n*.8);return{left:e-n-14,top:64,w:n,h:i}}screenOf(e){const n=this.shown;if(!n)return null;let i;if(Array.isArray(e)){const s=FE(n,e),o=this.faceObjs.get(s.id);if(!o||o.soft)return null;i=new I(e[0],e[1],0).applyMatrix4(o.group.matrix)}else i=on(n,e);const r=i.project(this.camera);return r.z>1?null:{x:(r.x+1)/2*(this.host.clientWidth||1),y:(1-r.y)/2*(this.host.clientHeight||1)}}setInset(e,n,i){if(!e||!n){this.insetCam=null;return}const r=ro(n);if(i&&!e.focus){const d=ro(i);r.min.min(d.min),r.max.max(d.max),r.center.copy(r.min).add(r.max).multiplyScalar(.5)}const s=this.insetCam??new Nn(30,1.25,.08,40);s.up.set(0,0,1),s.layers.enable(1);const o=Math.max(r.max.clone().sub(r.min).length()*.5,.18),a=(e.az??-16)*Math.PI/180,l=(e.el??54)*Math.PI/180,c=s.fov*Math.PI/360,h=o/Math.tan(c)*1.08/(e.zoom??1),u=e.focus?on(n,e.focus):r.center.clone();s.position.copy(u).add(new I(Math.sin(a)*Math.cos(l),-Math.cos(a)*Math.cos(l),Math.sin(l)).multiplyScalar(h)),s.lookAt(u),this.insetTarget.copy(u),this.insetCam=s}drawContact(){const e=this.renderer,n=this.ground.position.z,i=this.key.target.position;this.contactCam.position.set(i.x,i.y,n),this.contactCam.lookAt(i.x,i.y,n+1),this.contactCam.updateMatrixWorld(),this.contactPlane.position.set(i.x,i.y,n+8e-4),this.contactMat.uniforms.z0.value=n;const r=this.ground.visible,s=this.hintGroup.visible,o=e.shadowMap.autoUpdate;this.ground.visible=this.hintGroup.visible=this.contactPlane.visible=!1,e.shadowMap.autoUpdate=!1,this.scene.overrideMaterial=this.contactMat,e.setRenderTarget(this.contactA),e.setClearColor(3023384,0),e.clear(),e.render(this.scene,this.contactCam),this.scene.overrideMaterial=null,e.shadowMap.autoUpdate=o,this.ground.visible=r,this.hintGroup.visible=s,this.contactPlane.visible=!0,this.quad.material=this.gaussMat;const a=this.gaussMat.uniforms;for(const l of[2.6,1.2])a.tMap.value=this.contactA.texture,a.dir.value.set(l/512,0),e.setRenderTarget(this.contactB),e.render(this.postScene,this.postCam),a.tMap.value=this.contactB.texture,a.dir.value.set(0,l/512),e.setRenderTarget(this.contactA),e.render(this.postScene,this.postCam);e.setRenderTarget(null),e.setClearColor(0,0)}setPaper(e,n=!1){const i=zO(e);this.frontMat.map=n?i.front:i.back,this.backMat.map=n?i.back:i.front,this.frontMat.needsUpdate=this.backMat.needsUpdate=!0}setLineRes(e,n){const i=this.renderer.getDrawingBufferSize(new Me);e.resolution.copy(i),e.linewidth=n*this.pr}resize(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1;this.renderer.setSize(e,n,!1);const i=this.renderer.getDrawingBufferSize(new Me);this.depthRT.setSize(i.x,i.y),this.aoRT.setSize(i.x,i.y),this.aoMat.uniforms.res.value.copy(i),this.blurMat.uniforms.res.value.copy(i);const r=Math.min(1,Math.max(.55,Math.min(e,n)/620));this.setLineRes(this.outlineMat,1.35*r),this.setLineRes(this.lightMat,.8*r),this.setLineRes(this.creaseMat,.9*r);for(const s of this.lineMats)s.resolution.copy(i);this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}makeLines(e,n,i=1){if(!e.length)return null;const r=new I0;r.setPositions(KO(e).map((o,a)=>a%3===2?o*i:o));const s=new Ay(r,n);return s.layers.set(1),s}buildFace(e,n,i){let r=e.poly,s=[],o=i;if(n){let v=[];for(let x=1;x<e.poly.length-1;x++)v.push([e.poly[0],e.poly[x],e.poly[x+1]]);const g=(x,_)=>[(x[0]+_[0])/2,(x[1]+_[1])/2],f=([x,_,y])=>Math.max(Math.hypot(x[0]-_[0],x[1]-_[1]),Math.hypot(_[0]-y[0],_[1]-y[1]),Math.hypot(y[0]-x[0],y[1]-x[1]));for(let x=0;x<7&&v.some(_=>f(_)>ah);x++)v=v.flatMap(_=>{if(f(_)<=ah)return[_];const[y,P,D]=_,A=g(y,P),R=g(P,D),T=g(D,y);return[[y,A,T],[A,P,R],[T,R,D],[A,R,T]]});r=v.flat(),s=r.map((x,_)=>_),o={outline:Oy(i.outline,ah*1.5),raw:[],fold:[],crease:Oy(i.crease,ah*1.5)}}else for(let v=1;v<e.poly.length-1;v++)s.push(0,v,v+1);const a=new oi;a.setAttribute("position",new Gt(r.flatMap(v=>[v[0],v[1],0]),3)),a.setAttribute("uv",new Gt(r.flatMap(v=>[v[0]/this.paperSize.w,v[1]/this.paperSize.h]),2)),a.setIndex(s),a.computeVertexNormals();const l=new dt(a,this.frontMat),c=new dt(a,this.backMat);l.castShadow=c.castShadow=!0,l.receiveShadow=c.receiveShadow=!0;const h=this.makeLines(o.outline,this.outlineMat),u=n?this.makeLines(o.crease,this.creaseMat):null,d=n?null:this.makeLines(i.raw,this.lightMat,2.2),p=new mo;p.matrixAutoUpdate=!1,p.add(l,c);for(const v of[h,u,d])v&&(p.add(v),n&&(v.frustumCulled=!1));n&&(l.frustumCulled=c.frustumCulled=!1);const m=[];if(!n){const v=Xn(e.poly),g=(f,x,_,y,P)=>{const D=[],A=[],R=[],T=[];for(let S=0;S<f.length;S+=2){const C=f[S],z=f[S+1],F=z[0]-C[0],j=z[1]-C[1],Q=Math.hypot(F,j);if(Q<1e-6)continue;let k=-j/Q,X=F/Q;k*(v[0]-C[0])+X*(v[1]-C[1])<0&&(k=-k,X=-X);const O=UE([C,z,[z[0]+k*x,z[1]+X*x],[C[0]+k*x,C[1]+X*x]],e.poly);if(!O)continue;const $=J=>{const ce=Math.max(0,Math.min(1,((J[0]-C[0])*k+(J[1]-C[1])*X)/x)),pe=_*(1-ce)*(1-ce);D.push(J[0],J[1],0),A.push(y*k*Math.sin(pe),y*X*Math.sin(pe),Math.cos(pe)),R.push(P*k*Math.sin(pe),P*X*Math.sin(pe),Math.cos(pe)),T.push(J[0]/this.paperSize.w,J[1]/this.paperSize.h)};for(let J=1;J<O.length-1;J++)$(O[0]),$(O[J]),$(O[J+1])}if(D.length)for(const[S,C,z]of[[A,this.frontMat,Xl*.4],[R,this.backMat,-Xl*.4]]){const F=new oi;F.setAttribute("position",new Gt(D,3)),F.setAttribute("normal",new Gt(S,3)),F.setAttribute("uv",new Gt(T,2));const j=new dt(F,C);j.position.z=z,j.receiveShadow=!0,j.layers.set(1),p.add(j),m.push(F)}};g(i.crease,BO,VO,1,1),g(i.fold,HO,GO,-1,1)}return this.root.add(p),{sig:Uy(e,n,i),group:p,geo:a,extra:m,outline:h,crease:u,light:d,soft:n?{uv:r,outline:o.outline,crease:o.crease}:void 0}}dropFace(e){var n,i,r;this.root.remove(e.group),e.geo.dispose();for(const s of e.extra)s.dispose();(n=e.outline)==null||n.geometry.dispose(),(i=e.crease)==null||i.geometry.dispose(),(r=e.light)==null||r.geometry.dispose()}sync(e,n,i){this.paperSize=e.paper,this.shown=e;const r=new Map(e.faces.map(s=>[s.id,Uy(s,!!(i!=null&&i(s.id)),n.get(s.id))]));for(const[s,o]of this.faceObjs)r.get(s)!==o.sig&&(this.dropFace(o),this.faceObjs.delete(s));for(const s of e.faces)this.faceObjs.has(s.id)||this.faceObjs.set(s.id,this.buildFace(s,!!(i!=null&&i(s.id)),n.get(s.id)))}showState(e){this.sync(e,ch(e,e));const n=lh(e),i=Rp(e);for(const r of e.faces){const s=this.faceObjs.get(r.id);s.group.matrix.copy(r.m).multiply(new ft().makeTranslation(0,0,n.get(r.id)));const o=Pp(i.get(r.id),1);o&&s.group.matrix.premultiply(o),s.group.matrixWorldNeedsUpdate=!0}this.clearHints()}showOp(e,n){if(n>=1){this.showState(e.post);return}const i=e.motion;this.sync(e.pre,n>.004?ch(e.pre,e,i):ch(e.pre,e.pre),m=>hO(i,m));const r=lh(e.pre),s=lh(e.post),{ang:o,mats:a,hop:l}=dO(i,n),c=m=>{const v=Math.min(1,Math.max(0,m));return v*v*(3-2*v)},h=Rp(e.pre),u=Rp(e.post),d=1-c(n/.14),p=c((n-.86)/.14);for(const m of e.pre.faces){const v=this.faceObjs.get(m.id),g=r.get(m.id),f=s.get(m.id)??g,x=g+(f-g)*n;if(v.soft){const _=i.parts[i.own.get(m.id)],y=_.soft??{p0:_.origin,dir:_.axis,len:1},P=o[i.own.get(m.id)],D=_.parent===void 0?null:a[_.parent].elements,A=l.elements,R=m.m.elements,T=_.origin.x,S=_.origin.y,C=_.origin.z,z=_.axis.x,F=_.axis.y,j=_.axis.z,Q=(X,O,$,J)=>{const ce=x+$;for(let pe=0;pe<X.length;pe++){const We=X[pe][0],ee=X[pe][1];let re=R[0]*We+R[4]*ee+R[8]*ce+R[12],se=R[1]*We+R[5]*ee+R[9]*ce+R[13],le=R[2]*We+R[6]*ee+R[10]*ce+R[14];if(_.roll){const Re=WE(_,qO.set(re,se,le),P);D&&Re.applyMatrix4(a[_.parent]),Re.applyMatrix4(l);const Ae=(J+pe)*3;O[Ae]=Re.x,O[Ae+1]=Re.y,O[Ae+2]=Re.z;continue}let be=((re-y.p0.x)*y.dir.x+(se-y.p0.y)*y.dir.y+(le-y.p0.z)*y.dir.z)/y.len;be=be<0?0:be>1?1:be;const Fe=P*be*be*(3-2*be),Ve=Math.cos(Fe),it=Math.sin(Fe),Xe=re-T,yt=se-S,H=le-C,St=(z*Xe+F*yt+j*H)*(1-Ve);re=T+Xe*Ve+(F*H-j*yt)*it+z*St,se=S+yt*Ve+(j*Xe-z*H)*it+F*St,le=C+H*Ve+(z*yt-F*Xe)*it+j*St;for(const Re of[D,A]){if(!Re)continue;const Ae=Re[0]*re+Re[4]*se+Re[8]*le+Re[12],ut=Re[1]*re+Re[5]*se+Re[9]*le+Re[13],Oe=Re[2]*re+Re[6]*se+Re[10]*le+Re[14];re=Ae,se=ut,le=Oe}const He=(J+pe)*3;O[He]=re,O[He+1]=se,O[He+2]=le}},k=v.geo.getAttribute("position");Q(v.soft.uv,k.array,0,0),k.needsUpdate=!0,v.geo.computeVertexNormals();for(const[X,O]of[[v.outline,v.soft.outline],[v.crease,v.soft.crease]]){if(!X)continue;const $=X.geometry.getAttribute("instanceStart").data;Q(O,$.array,Xl,0),Q(O,$.array,-Xl,O.length),$.needsUpdate=!0}v.group.matrix.identity()}else{const _=i.own.get(m.id),y=l.clone();_!==void 0&&y.multiply(a[_]);const P=Pp(h.get(m.id),d),D=Pp(u.get(m.id),p);P&&y.multiply(P),v.group.matrix.copy(y.multiply(m.m)).multiply(new ft().makeTranslation(0,0,x)),D&&v.group.matrix.premultiply(D)}v.group.matrixWorldNeedsUpdate=!0}}clearHints(){var e,n;for(const i of[...this.hintGroup.children]){this.hintGroup.remove(i);const r=i;(e=r.geometry)==null||e.dispose();const s=r.material;(n=s==null?void 0:s.dispose)==null||n.call(s)}this.lineMats=[]}markLine(e,n,i,r=1){const s=this.renderer.getDrawingBufferSize(new Me);for(const[o,a,l,c]of[[16777215,i+2.4,.85*r,10],[n,i,r,11]]){const h=new I0;h.setPositions(e);const u=new jl({color:o,linewidth:a*this.pr,transparent:!0,opacity:l,depthTest:!1});u.resolution.copy(s),this.lineMats.push(u);const d=new Ay(h,u);d.renderOrder=c,d.frustumCulled=!1,this.hintGroup.add(d)}}showHints(e){this.clearHints();for(const n of e.hints){const i=n.b.clone().sub(n.a),r=i.length();if(r<1e-6)continue;i.normalize();const s=n.dir==="valley"?[.03,.018]:[.044,.013,.007,.013],o=[];for(let a=0,l=0;a<r;l++){const c=s[l%s.length];if(l%2===0){const h=n.a.clone().addScaledVector(i,a),u=n.a.clone().addScaledVector(i,Math.min(r,a+c));o.push(h.x,h.y,h.z,u.x,u.y,u.z)}a+=c}this.markLine(o,n.dir==="valley"?2056104:12597547,2.4)}if(e.hints.length){const n=Vr(e.motion.parts,e.motion.frames[e.motion.frames.length-1]),i=lh(e.post),r=new Map(e.post.faces.map(a=>[a.id,a])),s=ch(e.post,e.post),o=[];for(const a of e.pre.faces){const l=e.motion.own.get(a.id),c=r.get(a.id);if(l===void 0||!c)continue;const h=n[l].elements;if(Math.abs(h[0]-1)+Math.abs(h[5]-1)+Math.abs(h[10]-1)+Math.abs(h[12])+Math.abs(h[13])+Math.abs(h[14])<1e-6)continue;const u=s.get(a.id).outline;for(let d=0;d<u.length;d+=2){const p=new I(u[d][0],u[d][1],i.get(a.id)??0).applyMatrix4(c.m),m=new I(u[d+1][0],u[d+1][1],i.get(a.id)??0).applyMatrix4(c.m);o.push(p.x,p.y,p.z,m.x,m.y,m.z)}}o.length&&o.length<6*60&&this.markLine(o,Il,1.1,.34)}for(const n of e.arrows){if(n.length<2||n[0].distanceTo(n[n.length-1])<.03)continue;const i=new Yw(n),r=n[n.length-1],s=i.getTangent(1).normalize();for(const[o,a,l]of[[16777215,.0056,12],[Il,.003,13]]){const c=new Rc({color:o,depthTest:!1}),h=new dt(new Yg(i,48,a,8),c),u=a>.004,d=new dt(new $g(u?.017:.013,u?.046:.038,18),c.clone());d.position.copy(r).addScaledVector(s,u?.003:.001),d.quaternion.setFromUnitVectors(new I(0,1,0),s),h.renderOrder=d.renderOrder=l,this.hintGroup.add(h,d)}}}showCut(e,n){this.clearHints();const i=e.cut;if(!i)return;const r=i.b.clone().sub(i.a),s=r.length();if(s<1e-6)return;r.normalize();const o=Math.min(1,Math.max(0,(n-.12)/.76)),a=i.a.clone().addScaledVector(r,s*o),l=new I(-r.y,r.x,0);l.lengthSq()<1e-9&&l.set(1,0,0),l.normalize();const c=(m,v,g)=>m.push(v.x,v.y,v.z,g.x,g.y,g.z),h=[];for(let m=s*o;m<s;m+=.03)c(h,i.a.clone().addScaledVector(r,m),i.a.clone().addScaledVector(r,Math.min(s,m+.014)));if(h.length&&this.markLine(h,Il,1.6,.8),o>0){const m=[];c(m,i.a,a),this.markLine(m,Il,2.8)}if(n>=.97)return;const u=(7+15*Math.abs(Math.sin(o*Math.PI*5)))*Math.PI/180,d=a.clone().addScaledVector(r,-.035),p=[];for(const m of[1,-1]){const v=r.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,m*Math.sin(u)),g=d.clone().addScaledVector(v,.085),f=d.clone().addScaledVector(v,-.06);c(p,f,g);const x=f.clone().addScaledVector(v,-.02);for(let _=0;_<12;_++){const y=_/12*Math.PI*2,P=(_+1)/12*Math.PI*2;c(p,x.clone().addScaledVector(r,.02*Math.cos(y)).addScaledVector(l,.02*Math.sin(y)),x.clone().addScaledVector(r,.02*Math.cos(P)).addScaledVector(l,.02*Math.sin(P)))}}this.markLine(p,9056036,2.6)}follow(e,n){const i=ro(e);if(n){const o=ro(n);i.min.min(o.min),i.max.max(o.max),i.center.copy(i.min).add(i.max).multiplyScalar(.5)}this.ground.position.z=Math.min(0,i.min.z)-.004,this.camera.updateMatrixWorld();let r=0;for(let o=0;o<8;o++){const a=new I(o&1?i.max.x:i.min.x,o&2?i.max.y:i.min.y,o&4?i.max.z:i.min.z).project(this.camera);r=Math.max(r,Math.abs(a.x),Math.abs(a.y))}if(r<=.84&&r>=.52)return;const s=this.camera.position.clone().sub(this.controls.target).normalize();this.frame(e,void 0,!0,n,s)}frame(e,n,i=!0,r,s){const o=ro(e);if(r){const f=ro(r);o.min.min(f.min),o.max.max(f.max),o.center.copy(o.min).add(o.max).multiplyScalar(.5)}const a=o.max.clone().sub(o.min),l=Math.max(a.length()*.5,.18),c=((n==null?void 0:n.az)??-16)*Math.PI/180,h=((n==null?void 0:n.el)??54)*Math.PI/180,u=this.camera.fov*Math.PI/360,d=Math.atan(Math.tan(u)*this.camera.aspect),p=l/Math.tan(Math.min(u,d))*.98/((n==null?void 0:n.zoom)??1),m=n!=null&&n.focus?on(e,n.focus):o.center.clone(),v=s?s.clone():new I(Math.sin(c)*Math.cos(h),-Math.cos(c)*Math.cos(h),Math.sin(h)),g=m.clone().add(v.multiplyScalar(p));if(this.ground.position.z=Math.min(0,o.min.z)-.004,this.key.target.position.set(m.x,m.y,0),this.key.position.set(m.x+Nl[0],m.y+Nl[1],Nl[2]),this.fill.target.position.copy(this.key.target.position),this.fill.position.copy(this.key.position),!i){this.camera.position.copy(g),this.controls.target.copy(m),this.camAnim=null;return}this.camAnim={from:this.camera.position.clone(),to:g,tFrom:this.controls.target.clone(),tTo:m,t0:performance.now(),dur:700}}tickCamera(){const e=this.camAnim;if(!e)return;let n=(performance.now()-e.t0)/e.dur;n>=1&&(n=1,this.camAnim=null);const i=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;this.camera.position.lerpVectors(e.from,e.to,i),this.controls.target.lerpVectors(e.tFrom,e.tTo,i)}snapshot(){return this.draw(),this.renderer.domElement.toDataURL("image/png")}dispose(){var e;this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.controls.dispose(),this.clearHints();for(const n of this.faceObjs.values())this.dropFace(n);this.faceObjs.clear(),this.frontMat.dispose(),this.backMat.dispose(),this.envTex.dispose(),this.lightMat.dispose(),this.contactA.dispose(),this.contactB.dispose(),this.contactMat.dispose(),this.gaussMat.dispose(),this.contactPlane.geometry.dispose(),this.contactPlane.material.dispose(),this.outlineMat.dispose(),this.creaseMat.dispose(),this.ground.geometry.dispose(),this.ground.material.dispose(),(e=this.depthRT.depthTexture)==null||e.dispose(),this.depthRT.dispose(),this.aoRT.dispose(),this.aoMat.dispose(),this.blurMat.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}let hh=null,ga=null,zy=Promise.resolve();const Fy=new Map;function JO(t){return hh||(ga=document.createElement("div"),ga.style.cssText=`position:fixed;left:-10000px;top:0;width:${t}px;height:${t}px;pointer-events:none`,document.body.appendChild(ga),hh=new JE(ga,{autoRender:!1})),ga.style.width=ga.style.height=`${t}px`,hh.resize(),hh}function e2(t,e,n){const i=`${t}|${JSON.stringify(n.style)}|${n.colorUp}|${n.size??360}`,r=Fy.get(i);if(r)return Promise.resolve(r);const s=zy.then(()=>new Promise(o=>{const a=JO(n.size??360);a.setPaper(n.style,n.colorUp),a.showState(e),a.frame(e,n.view,!1),a.controls.update();const l=a.snapshot();Fy.set(i,l),o(l)}));return zy=s.catch(()=>{}),s}const t2=t=>`fold.paper.${(t==null?void 0:t.id)??"_"}`,n2=t=>{try{return localStorage.getItem(t2(t))}catch{return null}},ez=(t,e)=>{try{localStorage.setItem(t2(t),e)}catch{}};function i2(t){return U0.find(e=>e.name===t)??U0[0]}function r2(t){const[e,n]=Ce.useState(()=>i2(n2(t)??(t==null?void 0:t.paperName)));return[e,r=>{n(r),ez(t,r.name)}]}function s2(t){return i2(n2(t)??(t==null?void 0:t.paperName))}const o2="fold.done";function a2(){try{return new Set(JSON.parse(localStorage.getItem(o2)??"[]"))}catch{return new Set}}function tz(t){const e=a2();e.add(t);try{localStorage.setItem(o2,JSON.stringify([...e]))}catch{}}const h_="，。、；：？！）》」』”’〉】",f_="（《「『“‘〈【",ky=t=>t!==""&&(h_.includes(t)||f_.includes(t)),By=typeof Intl<"u"?Intl.Segmenter:void 0,Vy=By?new By("zh-Hans",{granularity:"word"}):null;function nz(t){const e=Vy?[...Vy.segment(t)].map(r=>r.segment):[...t],n=[];let i="";for(const r of e){if([...r].every(s=>h_.includes(s))&&n.length){n[n.length-1]+=r;continue}if([...r].every(s=>f_.includes(s))){i+=r;continue}if(/^\s+$/.test(r)){n.length&&(n[n.length-1]+=r);continue}n.push(i+r),i=""}return i&&n.push(i),n}function iz(t,e,n){const i=[...t];return i.map((r,s)=>{const o=s>0?i[s-1]:e,a=s<i.length-1?i[s+1]:n;return h_.includes(r)&&ky(a)||f_.includes(r)&&ky(o)?U.jsx("i",{className:"h",children:r},s):r})}function er({text:t}){const e=Ce.useMemo(()=>nz(t),[t]);return U.jsx("span",{className:"zh",children:e.map((n,i)=>{const r=i>0?[...e[i-1]].pop():"",s=i<e.length-1?[...e[i+1]][0]:"";return U.jsx(Ce.Fragment,{children:U.jsx("span",{className:"w",children:iz(n,r,s)})},i)})})}function rz(t,e){const[n,i]=Ce.useState();return Ce.useEffect(()=>{var l,c;let r=!0,s;try{s=qf(t.steps,(l=t.paper)==null?void 0:l.w,(c=t.paper)==null?void 0:c.h,t.sheets)}catch(h){console.error(t.id,h);return}const o=s[s.length-1],a=s2(t);return e2(`thumb:${t.id}`,o.end,{style:a.style,colorUp:!!t.colorUp,view:{zoom:1.12,...t.thumbView},size:e}).then(h=>r&&i(h)),()=>{r=!1}},[t,e]),n}function l2({right:t}){return U.jsxs("header",{className:"mast wrap",children:[U.jsxs("a",{className:"brand",href:"#/",children:[U.jsx("span",{className:"seal","aria-hidden":"true",children:"折"}),To.name]}),U.jsx("i",{className:"wire","aria-hidden":"true"}),t]})}function Hy({n:t,title:e,mountain:n,id:i}){return U.jsxs("div",{className:`sec${n?" m":""}`,children:[U.jsx("b",{children:t}),U.jsx("h2",{id:i,children:e}),U.jsx("i",{"aria-hidden":"true"})]})}const O0=new Map;function sz(t,e){const n=O0.get(t);return n?Promise.resolve(n):new Promise(i=>{const r=new Image;r.onload=()=>{const o=document.createElement("canvas");o.width=o.height=160;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(r,0,0,160,160);const l=a.getImageData(0,0,160,160).data;let c=160,h=160,u=-1,d=-1;for(let m=0;m<160;m++)for(let v=0;v<160;v++)l[(m*160+v)*4+3]<150||(v<c&&(c=v),v>u&&(u=v),m<h&&(h=m),m>d&&(d=m));const p=u<0?[.1,.1,.9,.9]:[c/160,h/160,(u+1)/160,(d+1)/160];O0.set(t,p),i(p)},r.onerror=()=>i([.1,.1,.9,.9]),r.src=e})}function Gy({model:t,size:e,done:n}){const i=rz(t,e),[r,s]=Ce.useState(()=>O0.get(t.id));Ce.useEffect(()=>{let m=!0;return i&&sz(t.id,i).then(v=>m&&s(v)),()=>{m=!1}},[t.id,i]);const[o,a,l,c]=r??[.1,.1,.9,.9],h=l-o,u=c-a,d=1/Math.max(h,u),p={"--sw":h.toFixed(3),"--sh":u.toFixed(3),"--x0":o,"--y0":a,"--k":d.toFixed(3)};return U.jsx("span",{className:"n-stand",children:U.jsxs("span",{className:`n-art${i&&r?"":" n-wait"}`,style:p,children:[i&&U.jsx("img",{src:i,alt:""}),n&&U.jsx("span",{className:"n-seal n-did",title:"折过","aria-label":"折过",children:"折"})]})})}const c2=[{id:"xmas-tree",t:180,m:120,z:1},{id:"flapping-bird",t:230,m:150,z:2},{id:"lily",t:310,m:170,z:3},{id:"crane",t:232,m:150,z:2},{id:"pinwheel",t:176,m:130,z:1}],Wy=new Set(c2.map(t=>t.id)),jy=[1,.9,1.08,.95,1.04],oz=U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[U.jsx("path",{d:"M5 12h14"}),U.jsx("path",{d:"m12 5 7 7-7 7"})]}),Lp=({kind:t})=>U.jsx("svg",{className:`n-fold n-${t}`,"aria-hidden":"true",children:U.jsx("line",{x1:"0",y1:"1.5",x2:"100%",y2:"1.5"})});function az(){const t=Ce.useMemo(a2,[]),[e,n]=Ce.useState(0),[i,r]=Ce.useState(!1),[s,o]=Ce.useState(!1),a=Ce.useRef(null),l=Ce.useRef(null),c=Ce.useRef(null),h=Ce.useMemo(()=>[3,2,1].flatMap(f=>{if(e!==0&&e!==f)return[];const x=Mr.filter(_=>_.level===f);return[...x.filter(_=>!Wy.has(_.id)),...x.filter(_=>Wy.has(_.id))]}),[e]),u=f=>Mr.find(x=>x.id===f),d=Ce.useMemo(()=>[...Mr].sort((f,x)=>f.level-x.level||f.steps.length-x.steps.length)[0],[]);Ce.useLayoutEffect(()=>{const f=()=>{var R;const y=[...((R=l.current)==null?void 0:R.querySelectorAll(".n-work"))??[]];y.forEach(T=>T.classList.remove("n-drop","n-deep","n-shallow"));let P=null,D=0,A=-1;for(const T of y){const S=T.offsetTop;(P===null||Math.abs(S-P)>4)&&(P=S,D=0,A++),D%2===1&&T.classList.add("n-drop",A%2?"n-shallow":"n-deep"),D++}};f();let x=0;const _=()=>{clearTimeout(x),x=window.setTimeout(f,80)};return addEventListener("resize",_),()=>{removeEventListener("resize",_),clearTimeout(x)}},[h]),Ce.useEffect(()=>{const f=()=>{const x=a.current;if(!x)return;const _=parseFloat(getComputedStyle(x).top)||0;r(x.getBoundingClientRect().top<=_+.5&&scrollY>200)};return f(),addEventListener("scroll",f,{passive:!0}),()=>removeEventListener("scroll",f)},[]);const p=f=>{n(f),o(!0);const x=a.current;if(i&&x&&c.current){const _=c.current.getBoundingClientRect().top+scrollY+72-(parseFloat(getComputedStyle(x).top)||0);scrollTo({top:_,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}},m=Ce.useMemo(()=>{const f={};for(const x of[...Mr].sort((_,y)=>_.level-y.level))x.steps.forEach((_,y)=>{_.tech&&!f[_.tech]&&(f[_.tech]={id:x.id,name:x.name,step:y+1})});return f},[]),v=new Set;let g=0;return U.jsxs("div",{className:"home n-home",children:[U.jsxs("nav",{className:"n-rail","aria-label":"站点",children:[U.jsxs("a",{className:"n-brand",href:"#/",children:[U.jsx("span",{className:"n-seal n-sm","aria-hidden":"true",children:"折"}),U.jsx("span",{className:"n-brand-name",children:To.name})]}),U.jsxs("span",{className:"n-done",children:["已折 ",U.jsx("b",{children:t.size})," / ",Mr.length]})]}),U.jsxs("div",{className:"n-washes","aria-hidden":"true",children:[U.jsx("i",{className:"n-wash n-w1"}),U.jsx("i",{className:"n-wash n-w2"}),U.jsx("i",{className:"n-wash n-w3"}),U.jsx("i",{className:"n-wash n-w4"})]}),U.jsxs("main",{className:"n-main",children:[U.jsxs("section",{className:"n-hero",children:[U.jsx("h1",{className:"n-title","aria-label":"一步一步，折给你看",children:["一步一步","折给你看"].map(f=>U.jsx("span",{"aria-hidden":"true",children:[...f].map((x,_)=>U.jsx("i",{children:x},_))},f))}),U.jsx("span",{className:"n-seal n-title-seal","aria-hidden":"true",children:"纸"}),U.jsxs("div",{className:"n-lead",children:[U.jsxs("p",{children:["拿一张纸，跟着折。",U.jsx("br",{}),"每一步都在屏幕上折给你看，",U.jsx("br",{}),"看不清可以转着看，跟不上可以停下来。"]}),U.jsxs("div",{className:"n-count",children:[Mr.length," 个作品 · 从纸杯到百合"]}),U.jsxs("a",{className:"n-btn",href:`#/m/${d.id}`,children:["从最简单的折起",oz]})]}),U.jsxs("div",{className:"n-stage",children:[U.jsx(Lp,{kind:"valley"}),U.jsx("div",{className:"n-stage-row",children:c2.map(f=>{const x=u(f.id);return x?U.jsxs("a",{className:`n-hw n-lift n-z${f.z}`,href:`#/m/${x.id}`,style:{"--Td":`${f.t}px`,"--Tm":`${f.m}px`},"aria-label":x.name,children:[U.jsx(Gy,{model:x,size:640}),U.jsx("span",{className:"n-tag",children:x.name})]},f.id):null})})]})]}),U.jsxs("section",{className:"n-works",ref:c,children:[U.jsxs("div",{className:"n-sec-head",children:[U.jsxs("h2",{children:[U.jsx("span",{className:"n-num",children:"壹"}),"作品"]}),U.jsx(Lp,{kind:"valley"})]}),U.jsx("div",{className:`n-filters${i?" n-stuck":""}`,ref:a,children:U.jsxs("div",{className:"n-frow",role:"group","aria-label":"难度",children:[U.jsx("span",{className:"n-fl",children:"难度："}),[0,3,2,1].map(f=>U.jsxs("button",{type:"button",className:"n-chip","aria-pressed":e===f,onClick:()=>p(f),children:[f===0?"全部":Dh[f],U.jsx("span",{className:"n-n",children:f===0?Mr.length:Mr.filter(x=>x.level===f).length})]},f))]})}),U.jsx("div",{className:`n-grid${s?" n-fade":""}`,ref:l,children:h.map(f=>{const x=!v.has(f.level);v.add(f.level);const _=f.level===1?jy[g++%jy.length]:1;return U.jsxs("a",{className:`n-work n-lift n-l${f.level}`,href:`#/m/${f.id}`,style:{"--j":_},children:[x&&U.jsx("span",{className:"n-tier",children:Dh[f.level]}),U.jsx(Gy,{model:f,size:f.level===3?640:420,done:t.has(f.id)}),U.jsxs("span",{className:"n-label",children:[U.jsx("span",{className:"n-name",children:f.name}),U.jsxs("span",{className:"n-meta",children:[Dh[f.level]," · ",f.steps.length," 步"]}),U.jsx("span",{className:"n-slip",children:U.jsx(er,{text:f.blurb})})]})]},f.id)})},e)]}),U.jsxs("section",{className:"guide wrap","aria-labelledby":"g1",children:[U.jsxs("div",{className:"g-col",children:[U.jsx(Hy,{n:"贰",title:"先认识几个记号",mountain:!0,id:"g1"}),U.jsxs("ul",{className:"signs",children:[U.jsxs("li",{children:[U.jsx("i",{className:"ln","aria-hidden":"true"}),U.jsx("b",{children:"谷折线"}),U.jsx("span",{children:U.jsx(er,{text:"花青色虚线。沿这条线把纸朝自己这边折，折完像山谷。"})})]}),U.jsxs("li",{children:[U.jsx("i",{className:"ln m","aria-hidden":"true"}),U.jsx("b",{children:"山折线"}),U.jsx("span",{children:U.jsx(er,{text:"红色点划线。沿这条线把纸朝背面折，折完像山脊。"})})]}),U.jsxs("li",{children:[U.jsxs("svg",{className:"ic",viewBox:"0 0 64 30","aria-hidden":"true",children:[U.jsx("path",{d:"M6 24C14 4 44 2 56 18",fill:"none",stroke:"currentColor",strokeWidth:"2.2"}),U.jsx("path",{d:"M58 22l-8-1 5-7z",fill:"currentColor"})]}),U.jsx("b",{children:"箭头和落点"}),U.jsx("span",{children:U.jsx(er,{text:"箭头是纸上某个点要走的路线；淡淡的轮廓是这片纸折完后落下的位置。"})})]}),U.jsxs("li",{children:[U.jsxs("svg",{className:"ic",viewBox:"0 0 64 30","aria-hidden":"true",children:[U.jsx("path",{d:"M4 26h40V8H4z",fill:"#fff",stroke:"currentColor",strokeWidth:"1.6"}),U.jsx("path",{d:"M24 22h36V4H24z",fill:"#fff",stroke:"currentColor",strokeWidth:"1.6"}),U.jsx("path",{d:"M18 8h6v14h-6z",fill:"currentColor",opacity:"0.22"})]}),U.jsx("b",{children:"层次"}),U.jsx("span",{children:U.jsx(er,{text:"叠在上面的纸会沿着自己的边，在下面那层纸上压出一圈暗影。看暗影落在谁身上，就知道谁在下面。"})})]})]})]}),U.jsxs("div",{className:"g-col",children:[U.jsx(Hy,{n:"叁",title:"会用到的折法"}),U.jsx("dl",{className:"techs",children:eO.map(f=>{const x=m[f.name];return U.jsxs("div",{children:[U.jsx("dt",{children:f.name}),U.jsx("dd",{children:U.jsx(er,{text:f.text})}),U.jsx("dd",{className:"go",children:x&&U.jsxs("a",{className:"link",href:`#/m/${x.id}?step=${x.step}`,children:["《",x.name,"》第 ",x.step," 步 →"]})})]},f.name)})})]})]}),U.jsxs("footer",{className:"n-foot",children:[U.jsx(Lp,{kind:"mountain"}),U.jsx("p",{className:"n-say",children:"慢慢折，折对了再往下。"}),U.jsx("p",{className:"n-note",children:"折过哪些、选了什么纸，只记在你自己的浏览器里。"})]})]})]})}function u2({value:t,onPick:e,onClose:n}){return U.jsx("div",{className:"sheet-bg",onClick:n,children:U.jsxs("div",{className:"sheet",role:"dialog","aria-label":"选择纸张",onClick:i=>i.stopPropagation(),children:[U.jsxs("h3",{children:["选纸 ",U.jsx("button",{className:"pop round",onClick:n,"aria-label":"关闭",children:U.jsx("span",{children:"✕"})})]}),U.jsx("div",{className:"swatches",children:U0.map(i=>U.jsxs("button",{className:"swatch","aria-pressed":i.name===t,onClick:()=>e(i),children:[U.jsx(lz,{side:i.style.front}),i.name]},i.name))})]})})}function lz({side:t}){const e=Ce.useRef(null);return Ce.useEffect(()=>{const n=e.current;n.width=n.height=96;const i=n.getContext("2d");i.save(),i.scale(96/512,96/512),u_(i,t,512),i.restore()},[t]),U.jsx("canvas",{ref:e})}let Ul=null,wf=!1;try{wf=localStorage.getItem("fold.mute")==="1"}catch{}function cz(){return Ul||(Ul=new(window.AudioContext||window.webkitAudioContext)),Ul.state==="suspended"&&Ul.resume(),Ul}function Xy(t,e,n,i=1){if(!wf)try{const r=cz(),s=Math.floor(r.sampleRate*t),o=r.createBuffer(1,s,r.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*Math.pow(1-u/s,2);const l=r.createBufferSource();l.buffer=o;const c=r.createBiquadFilter();c.type="bandpass",c.frequency.value=e,c.Q.value=i;const h=r.createGain();h.gain.value=n,l.connect(c).connect(h).connect(r.destination),l.start()}catch{}}const Np={fold:()=>Xy(.35,2400,.25,.7),crease:()=>Xy(.08,900,.5,2),setMuted(t){wf=t;try{localStorage.setItem("fold.mute",t?"1":"0")}catch{}},get muted(){return wf}},$y=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,uz=t=>1e3+28*t.motion.frames.length,h2=[.25,.5,1,2],hz=t=>[{at:0,text:t}],fz=t=>{const e="零一二三四五六七八九";if(t<10)return e[t];const n=Math.floor(t/10),i=t%10;return(n>1?e[n]:"")+"十"+(i?e[i]:"")},dz=()=>{try{const t=Number(localStorage.getItem("fold.speed"));return h2.includes(t)?t:.5}catch{return .5}};function pz({model:t,go:e,startStep:n=0}){const i=Ce.useRef(null),r=Ce.useRef(null),s=Ce.useMemo(()=>{var b,w;return qf(t.steps,(b=t.paper)==null?void 0:b.w,(w=t.paper)==null?void 0:w.h,t.sheets)},[t]),o=s.length,a=Ce.useMemo(()=>{var b;if(!((b=t.finale)!=null&&b.length))return null;try{return t.finale.map(w=>qE(s[o-1].end,w))}catch(w){return console.error(w),null}},[s]),[l,c]=Ce.useState(()=>Math.max(0,Math.min(n,t.steps.length))),[h,u]=Ce.useState(0),[d,p]=Ce.useState(!1),[m,v]=Ce.useState(null),[g,f]=Ce.useState(!1),[x,_]=Ce.useState(dz),y=b=>{_(b);try{localStorage.setItem("fold.speed",String(b))}catch{}},[P,D]=r2(t),A=Ce.useRef({step:l,t:h,anim:m,playing:d,speed:x});A.current={step:l,t:h,anim:m,playing:d,speed:x},Ce.useEffect(()=>{const b=new JE(i.current);return r.current=b,()=>b.dispose()},[]),Ce.useEffect(()=>{var b;(b=r.current)==null||b.setPaper(P.style,!!t.colorUp)},[P,t]);const R=Ce.useMemo(()=>s.map(b=>{const w=b.results.map(uz),B=w.reduce((Y,ne)=>Y+ne,0)||1;return{d:w,total:B}}),[s]),T=b=>{var B,Y;const w=(B=s[b])==null?void 0:B.def;return w?(Y=w.captions)!=null&&Y.length?[...w.captions].sort((ne,K)=>ne.at-K.at):hz(w.text):[]},S=b=>T(b).filter(w=>w.pause).map(w=>({at:w.at,ms:w.pause})),C=b=>{var w;return(((w=R[b])==null?void 0:w.total)??1e3)+S(b).reduce((B,Y)=>B+Y.ms,0)},z=(b,w)=>{var ne;const B=((ne=R[b])==null?void 0:ne.total)??1e3;let Y=0;for(const K of S(b)){const ge=K.at*B+Y;if(w<ge)return(w-Y)/B;if(w<ge+K.ms)return K.at;Y+=K.ms}return Math.min(1,(w-Y)/B)},F=(b,w)=>{var B;return(((B=R[b])==null?void 0:B.total)??1e3)*w+S(b).filter(Y=>Y.at<w-1e-9).reduce((Y,ne)=>Y+ne.ms,0)},j=(b,w)=>{const B=r.current;if(!B)return;if(b>=o){B.showState(s[o-1].end);return}const Y=s[b];if(!Y.results.length||w>=1){B.showState(Y.end);return}let ne=w*R[b].total,K=0;for(;K<Y.results.length-1&&ne>R[b].d[K];)ne-=R[b].d[K],K++;const ge=Math.min(1,ne/R[b].d[K]);B.showOp(Y.results[K],$y(ge)),Y.results[K].cut?B.showCut(Y.results[K],ge):ge<.3?B.showHints(Y.results[K]):B.clearHints()};Ce.useEffect(()=>{j(l,h)},[l,h,s]);const Q=b=>{const w=s[b].def.view;return w!=null&&w.focus?`focus${b}`:(w==null?void 0:w.el)!==void 0&&w.el<36?"low":"flat"},k=b=>{const w=s[b].def.view;return w!=null&&w.focus||Q(b)==="low"?w:t.view},X=(()=>{if(l>=o)return-1;const b=s[l].def.shots??[];let w=-1;return b.forEach((B,Y)=>{h>=B.at-1e-9&&h<1&&(w=Y)}),w})(),O=Ce.useRef(null);Ce.useEffect(()=>{var ne,K,ge,de;const b=Math.min(l,o-1),w=X>=0?s[b].def.shots[X]:null,B=l>=o||(ne=s[b].def.view)!=null&&ne.focus||w!=null&&w.focus?void 0:s[b].start,Y=w?`shot${b}.${X}`:Q(b);O.current===null?(K=r.current)==null||K.frame(s[b].end,w??k(b),!1,B):Y!==O.current?(ge=r.current)==null||ge.frame(s[b].end,w??k(b),!0,B):(de=r.current)==null||de.follow(s[b].end,B),O.current=Y,l>=o&&tz(t.id)},[l,X]);const $=l<o?s[l].def.inset:void 0;Ce.useEffect(()=>{var b,w;$?(b=r.current)==null||b.setInset($,s[l].end,s[l].start):(w=r.current)==null||w.setInset(null)},[l,$]),Ce.useEffect(()=>{const b=r.current;b&&(b.onFrame=w=>{We();const B=A.current;if(!B.anim){if(B.step>=o&&a){const ge=w%(1500*a.length)/1500,de=Math.floor(ge),ve=ge-de;b.showOp(a[de],$y(ve<.5?ve*2:2-ve*2)*.999)}return}const Y=(w-B.anim.t0)*B.speed,ne=z(B.step,Y);u(ne),Y>=C(B.step)&&(A.current.anim=null,le())})},[s,a]);const J=Ce.useRef(void 0),ce=Ce.useRef(null),pe=Ce.useRef(null),We=()=>{const b=pe.current,w=r.current;if(!b||!w)return;const B=J.current,Y=ce.current,ne=i.current,K=B!=null&&B.point&&Y&&ne?w.screenOf(B.point):null;if(!K||!Y||!ne){b.style.opacity="0";return}const ge=ne.getBoundingClientRect(),de=Y.getBoundingClientRect(),ve=de.left+de.width/2-ge.left,nt=de.top-ge.top,ue=b.firstElementChild,we=b.lastElementChild,ke=K.x-ve,Be=K.y-nt,Ee=Math.hypot(ke,Be)||1;ue.setAttribute("x1",String(ve)),ue.setAttribute("y1",String(nt)),ue.setAttribute("x2",String(K.x-ke/Ee*5)),ue.setAttribute("y2",String(K.y-Be/Ee*5)),we.setAttribute("cx",String(K.x)),we.setAttribute("cy",String(K.y)),b.style.opacity="1"},ee=Ce.useRef([]),re=(b,w)=>{ee.current.push(window.setTimeout(b,w))},se=()=>{ee.current.forEach(clearTimeout),ee.current=[]};Ce.useEffect(()=>se,[]);const le=()=>{v(null),u(1),Np.crease(),se(),re(be,300)},be=()=>{se();const b=A.current.step;c(Math.min(o,b+1)),u(0),A.current.playing&&b+1<o?re(()=>{A.current.playing&&Fe(0)},800):p(!1)},Fe=(b=A.current.t)=>{if(A.current.step>=o)return;Np.fold();const w=b>=1?0:b;v({from:0,t0:performance.now()-F(A.current.step,w)/A.current.speed})},Ve=b=>{y(b),A.current.speed=b,A.current.anim&&v({from:0,t0:performance.now()-F(A.current.step,A.current.t)/b})},it=()=>{if(l>=o){se(),c(0),u(0);return}if(p(!1),A.current.playing=!1,m){v(null),A.current.anim=null,Np.crease(),be();return}if(h>=1){be();return}Fe()},Xe=()=>{if(d){se(),p(!1),A.current.playing=!1,v(null);return}if(p(!0),A.current.playing=!0,l>=o){c(0),u(0),re(()=>Fe(0),60);return}if(h>=1){be();return}Fe()},yt=b=>{se(),v(null),A.current.anim=null,p(!1),A.current.playing=!1,c(b),u(0)},H=()=>{if(se(),v(null),p(!1),h>0){u(0);return}c(b=>Math.max(0,b-1)),u(0)};Ce.useEffect(()=>{const b=`#/m/${t.id}${l>0?`?step=${l+1}`:""}`;location.hash!==b&&history.replaceState(null,"",b)},[l,t.id]),Ce.useEffect(()=>{const b=w=>{w.key==="ArrowRight"?it():w.key==="ArrowLeft"?H():w.key===" "&&(w.preventDefault(),Xe())};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)});const St=l>=o,He=s[Math.min(l,o-1)],Re=St?[]:T(l);let Ae=-1;Re.forEach((b,w)=>{h>=b.at-1e-9&&(Ae=w)});const ut=Ae>=0&&h<1?Re[Ae]:void 0;J.current=ut;const Oe=St?"折好了！拖动可以转着看，双指或滚轮可以放大。":He.def.text;return U.jsxs("div",{className:"player",children:[U.jsxs("div",{className:"stage3d",ref:i,children:[U.jsxs("div",{className:"p-top",children:[U.jsx("a",{className:"p-back",href:"#/",onClick:b=>{b.preventDefault(),e("#/")},children:"← 作品"}),U.jsx("i",{className:"wire","aria-hidden":"true"}),U.jsxs("div",{className:"p-title",children:[U.jsx("b",{children:t.name}),U.jsxs("small",{children:[Dh[t.level]," · ",o," 步"]})]}),U.jsx("button",{className:"pop round","aria-label":"选择纸张",onClick:()=>f(!0),children:U.jsx("span",{children:U.jsx(mz,{})})})]}),$&&U.jsx("div",{className:"inset","aria-hidden":"true",children:U.jsx("span",{children:$.label})}),U.jsxs("svg",{className:"p-lead",ref:pe,"aria-hidden":"true",children:[U.jsx("line",{}),U.jsx("circle",{r:"5"})]}),ut&&U.jsxs("div",{className:`p-cap${Re.length===1&&!ut.point?" solo":""}`,role:"status",ref:ce,children:[Re.length>1&&U.jsxs("i",{children:[Ae+1,"/",Re.length]}),U.jsx("span",{children:U.jsx(er,{text:ut.text})})]},`${l}.${Ae}`),U.jsxs("div",{className:"legend","aria-hidden":"true",children:[U.jsxs("span",{children:[U.jsx("b",{style:{background:P.style.front.color}}),"正面"]}),U.jsxs("span",{children:[U.jsx("b",{style:{background:P.style.back.color}}),"背面"]}),U.jsxs("span",{children:[U.jsx("i",{}),"谷折"]}),U.jsxs("span",{children:[U.jsx("i",{className:"m"}),"山折"]})]}),U.jsx("div",{className:"stage-tools",children:U.jsx("button",{className:"pop",onClick:()=>{var b,w;return(w=r.current)==null?void 0:w.frame(He.end,k(Math.min(l,o-1)),!0,St||(b=He.def.view)!=null&&b.focus?void 0:He.start)},children:U.jsx("span",{children:"推荐视角"})})})]}),U.jsxs("div",{className:"panel",children:[U.jsx("nav",{className:"p-steps","aria-label":"步骤",children:s.map((b,w)=>U.jsx("button",{className:w<l?"past":"","aria-current":w===l?"step":void 0,onClick:()=>yt(w),children:w+1},w))}),U.jsx("div",{className:"progress","aria-hidden":"true",children:U.jsx("div",{style:{width:`${(Math.min(l,o)+(St?0:h))/o*100}%`}})}),U.jsxs("div",{className:"p-step","aria-live":"polite",children:[U.jsxs("div",{className:"p-num",children:[U.jsx("b",{children:St?"成":fz(l+1)}),U.jsx("small",{children:St?`共 ${o} 步`:`${l+1} / ${o}`})]}),U.jsxs("div",{children:[!St&&He.def.tech&&U.jsx("span",{className:"p-tech",children:He.def.tech}),St?U.jsx("p",{className:"p-text",children:U.jsx(er,{text:Oe})}):U.jsx("ol",{className:"p-lines",children:Re.map((b,w)=>U.jsx("li",{className:w===Math.max(0,Ae)?"on":w<Ae?"past":"",children:U.jsx(er,{text:b.text})},w))})]})]}),U.jsxs("label",{className:"slider",children:[U.jsx("span",{children:"折到哪儿"}),U.jsx("input",{type:"range",min:0,max:1,step:.002,value:St?1:h,disabled:St,onChange:b=>{se(),v(null),p(!1),u(Number(b.target.value))}})]}),U.jsxs("div",{className:"p-ctrl",children:[U.jsx("button",{className:"pop",onClick:H,disabled:l===0&&h===0,children:U.jsx("span",{children:"上一步"})}),U.jsx("button",{className:"pop main",onClick:it,children:U.jsx("span",{children:St?"从头再来":"下一步"})}),U.jsx("button",{className:"pop","aria-pressed":d,onClick:Xe,children:U.jsx("span",{children:d?"暂停":"自动播放"})})]}),U.jsxs("div",{className:"p-more",children:[U.jsxs("div",{className:"speed",role:"group","aria-label":"播放速度",children:[U.jsx("span",{children:"速度"}),h2.map(b=>U.jsxs("button",{"aria-pressed":x===b,onClick:()=>Ve(b),children:[b,"×"]},b))]}),U.jsxs("span",{className:"p-links",children:[U.jsx("a",{className:"link",href:`#/m/${t.id}/sheet`,children:"下载图纸"}),U.jsx("a",{className:"link",href:`#/m/${t.id}/steps`,children:"全部步骤"})]})]})]}),g&&U.jsx(u2,{value:P.name,onPick:b=>{D(b),f(!1)},onClose:()=>f(!1)})]})}function mz(){return U.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:[U.jsx("path",{d:"M4 4h16v16H4z",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}),U.jsx("path",{d:"M4 20 20 4",stroke:"currentColor",strokeWidth:"2.5",strokeDasharray:"3 3"})]})}function gz({model:t}){const e=Ce.useMemo(()=>{var r,s;return qf(t.steps,(r=t.paper)==null?void 0:r.w,(s=t.paper)==null?void 0:s.h,t.sheets)},[t]),[n,i]=Ce.useState([]);return Ce.useEffect(()=>{let r=!0;const s=s2(t);return(async()=>{const o=[];for(let a=0;a<e.length;a++){if(o[a]=await e2(`step:${t.id}:${a}`,e[a].end,{style:s.style,colorUp:!!t.colorUp,view:e[a].def.view,size:420}),!r)return;i([...o])}})(),()=>{r=!1}},[e]),U.jsxs("div",{className:"book",children:[U.jsx("header",{children:U.jsx(l2,{right:U.jsxs("span",{className:"p-links",children:[U.jsx("a",{className:"link",href:`#/m/${t.id}/sheet`,children:"下载图纸"}),U.jsx("a",{className:"link",href:`#/m/${t.id}`,children:"回到 3D →"})]})})}),U.jsxs("h1",{className:"wrap",children:[t.name," ",U.jsxs("small",{className:"mono",style:{fontSize:13,color:"var(--mute)"},children:["全部 ",e.length," 步"]})]}),U.jsx("ol",{className:"wrap",children:e.map((r,s)=>U.jsxs("li",{children:[U.jsx("div",{className:"img",children:n[s]?U.jsx("img",{src:n[s],alt:`第 ${s+1} 步完成后的样子`}):null}),U.jsx("p",{children:U.jsx(er,{text:r.def.text})})]},s))})]})}function _z(t,e=!0,n=0){const i=zE(n,t.paper.w)[0],r=new Map(t.faces.map(u=>[u.id,u])),s=l_(t),o=(u,d)=>{const p=r.get(u);return new I(d[0],d[1],s.get(u)??0).applyMatrix4(p.m)},a=[],l=u=>e?[u[0]-i,u[1]]:[t.paper.w-(u[0]-i),u[1]];for(const u of Yf(t)){const d=(u.p[0]+u.q[0])/2-i;if(d<-1e-9||d>t.paper.w+1e-9)continue;const p=r.get(u.a),m=r.get(u.b),v=ur(p),g=ur(m);let f;v.dot(g)>.9999?f="aux":f=v.dot(o(u.b,Xn(m.poly)).sub(o(u.a,u.p)))>0===e?"valley":"mountain",a.push({a:l(u.p),b:l(u.q),kind:f})}const c=[],h=(u,d)=>Math.hypot(u[0]-d[0],u[1]-d[1])<1e-6;for(const[u,d]of t.cuts??[]){const p=(u[0]+d[0])/2-i;if(p<-1e-9||p>t.paper.w+1e-9)continue;const m=l(u),v=l(d),g=(f,x)=>Math.abs(m[f]-x)<1e-6&&Math.abs(v[f]-x)<1e-6;g(0,0)||g(0,t.paper.w)||g(1,0)||g(1,t.paper.h)||c.some(f=>h(f.a,m)&&h(f.b,v)||h(f.a,v)&&h(f.b,m))||c.push({a:m,b:v})}return{w:t.paper.w,h:t.paper.h,creases:a,cuts:c}}const fi={w:210,h:297},La="#211c18",Yy="#1f5fa8",qy="#c0392b";function vz(t,e,n){const i=Math.abs(t-e)<1e-9,r=i?n:Math.min(170,224*t/e),s=r*e/t;return{x:(fi.w-r)/2,y:44,w:r,h:s,square:i}}function Ky({title:t,note:e,box:n}){const i=Math.min(fi.h-16,n.y+n.h+14);return U.jsxs(U.Fragment,{children:[U.jsx("text",{x:20,y:22,fontSize:7,fontWeight:600,fill:La,letterSpacing:.6,children:t}),U.jsx("text",{x:20,y:30,fontSize:3.2,fill:"#6b6257",children:e}),U.jsx("text",{x:fi.w-20,y:22,fontSize:3.2,fill:"#6b6257",textAnchor:"end",children:To.name}),U.jsxs("g",{stroke:La,strokeWidth:.2,children:[U.jsx("line",{x1:20,y1:i,x2:70,y2:i}),[0,10,20,30,40,50].map(r=>U.jsx("line",{x1:20+r,y1:i-1.6,x2:20+r,y2:i},r))]}),U.jsx("text",{x:73,y:i+.4,fontSize:2.8,fill:"#6b6257",children:"这一段应该正好 5 厘米。不是的话，打印时请选“实际大小”或 100%，不要选“适合页面”。"})]})}function xz({model:t}){const[e,n]=Ce.useState("both"),[i,r]=Ce.useState(150),[s,o]=r2(t),[a,l]=Ce.useState(!1),c=Ce.useMemo(()=>{var y,P;const _=qf(t.steps,(y=t.paper)==null?void 0:y.w,(P=t.paper)==null?void 0:P.h,t.sheets);return _[_.length-1].end},[t]),h=Ce.useMemo(()=>(t.sheets??[null]).map((_,y)=>_z(c,!t.colorUp,y)),[c,t]),u=h[0],d=vz(u.w,u.h,i),p=d.w/u.w,m=_=>d.x+_*p,v=_=>d.y+d.h-_*p,[g,f]=Ce.useState();Ce.useEffect(()=>{const y=document.createElement("canvas");y.width=y.height=1800,u_(y.getContext("2d"),s.style.front,1800),f(y.toDataURL("image/png"))},[s]),Ce.useEffect(()=>{document.title=`${t.name} 图纸 · ${To.name}`},[t]);const x=`${Math.round(d.w)/10} × ${Math.round(d.h)/10} 厘米`;return U.jsxs("div",{className:"sheets",children:[U.jsxs("div",{className:"sheet-ui",children:[U.jsx(l2,{right:U.jsx("a",{className:"link",href:`#/m/${t.id}`,style:{font:"500 14px/1 var(--sans)"},children:"回到 3D →"})}),U.jsxs("div",{className:"wrap sheet-bar",children:[U.jsxs("h1",{children:[t.name," ",U.jsx("small",{children:"图纸"})]}),U.jsx("div",{className:"seg",role:"group","aria-label":"要哪一种",children:[["both","两页都要"],["cp","折痕图"],["paper","花纹纸"]].map(([_,y])=>U.jsx("button",{"aria-pressed":e===_,onClick:()=>n(_),children:y},_))}),d.square&&U.jsx("div",{className:"seg",role:"group","aria-label":"纸的边长",children:[150,180].map(_=>U.jsxs("button",{"aria-pressed":i===_,onClick:()=>r(_),children:[_/10," 厘米"]},_))}),e!=="cp"&&U.jsx("button",{className:"pop",onClick:()=>l(!0),children:U.jsxs("span",{children:["换花纹：",s.name]})}),U.jsx("button",{className:"pop main",onClick:()=>window.print(),children:U.jsx("span",{children:"打印 / 存为 PDF"})})]}),U.jsxs("p",{className:"wrap sheet-tip",children:["在打印对话框里把“目标打印机”选成“另存为 PDF”就是下载。纸张选 A4，缩放选“实际大小”或 100%。",e==="both"&&"两页可以双面打印（长边翻转）：一面是花纹，另一面是折痕，正好对得上。"]})]}),U.jsxs("div",{className:"pages",children:[e!=="cp"&&U.jsxs("svg",{className:"a4",viewBox:`0 0 ${fi.w} ${fi.h}`,xmlns:"http://www.w3.org/2000/svg",fontFamily:"'Noto Serif SC', serif",children:[U.jsx("rect",{width:fi.w,height:fi.h,fill:"#fff"}),U.jsx(Ky,{title:`${t.name} · 折纸用纸`,note:`花纹：${s.name} · ${x} · 沿边框裁下${h.length>1?` · 这个作品要 ${h.length} 张`:""}`,box:d}),g&&U.jsx("image",{href:g,x:d.x,y:d.y,width:d.w,height:d.h,preserveAspectRatio:"xMidYMid slice"}),U.jsx("rect",{x:d.x,y:d.y,width:d.w,height:d.h,fill:"none",stroke:La,strokeWidth:.25})]}),e!=="paper"&&h.map((_,y)=>U.jsxs("svg",{className:"a4",viewBox:`0 0 ${fi.w} ${fi.h}`,xmlns:"http://www.w3.org/2000/svg",fontFamily:"'Noto Serif SC', serif",children:[U.jsx("rect",{width:fi.w,height:fi.h,fill:"#fff"}),U.jsx(Ky,{title:`${t.name} · 折痕图${h.length>1?`（第 ${y+1} 张纸）`:""}`,note:`从白色的一面看 · ${x} · 谷折 ${_.creases.filter(P=>P.kind==="valley").length} 条，山折 ${_.creases.filter(P=>P.kind==="mountain").length} 条`,box:d}),U.jsx("rect",{x:d.x,y:d.y,width:d.w,height:d.h,fill:"#fff",stroke:La,strokeWidth:.3}),["aux","mountain","valley"].map(P=>U.jsx("g",{fill:"none",strokeLinecap:"butt",stroke:P==="valley"?Yy:P==="mountain"?qy:"#b9b2a6",strokeWidth:P==="aux"?.15:.38,strokeDasharray:P==="valley"?"2.4 1.5":P==="mountain"?"3.4 1.1 0.7 1.1":void 0,children:_.creases.filter(D=>D.kind===P).map((D,A)=>U.jsx("line",{x1:m(D.a[0]),y1:v(D.a[1]),x2:m(D.b[0]),y2:v(D.b[1])},A))},P)),U.jsx("g",{fill:"none",stroke:La,strokeWidth:.7,strokeLinecap:"round",children:_.cuts.map((P,D)=>U.jsx("line",{x1:m(P.a[0]),y1:v(P.a[1]),x2:m(P.b[0]),y2:v(P.b[1])},D))}),U.jsxs("g",{transform:`translate(${fi.w-20-(_.cuts.length?86:62)}, 27)`,fontSize:3,fill:"#6b6257",children:[U.jsx("line",{x1:0,y1:0,x2:11,y2:0,stroke:Yy,strokeWidth:.38,strokeDasharray:"2.4 1.5"}),U.jsx("text",{x:13,y:1,children:"谷折"}),U.jsx("line",{x1:24,y1:0,x2:35,y2:0,stroke:qy,strokeWidth:.38,strokeDasharray:"3.4 1.1 0.7 1.1"}),U.jsx("text",{x:37,y:1,children:"山折"}),U.jsx("line",{x1:48,y1:0,x2:56,y2:0,stroke:"#b9b2a6",strokeWidth:.15}),U.jsx("text",{x:58,y:1,children:"辅助"}),_.cuts.length>0&&U.jsxs(U.Fragment,{children:[U.jsx("line",{x1:68,y1:0,x2:79,y2:0,stroke:La,strokeWidth:.7,strokeLinecap:"round"}),U.jsx("text",{x:81,y:1,children:"剪开"})]})]})]},y))]}),a&&U.jsx(u2,{value:s.name,onPick:_=>{o(_),l(!1)},onClose:()=>l(!1)})]})}function yz(){const[t,e]=Ce.useState(location.hash||"#/");return Ce.useEffect(()=>{const n=()=>e(location.hash||"#/");return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),t}function Sz(){const t=yz(),e=i=>{location.hash=i},n=t.match(/^#\/m\/([\w-]+)(?:\/(steps|sheet))?/);if(Ce.useEffect(()=>{window.scrollTo(0,0)},[t]),n){const i=J5(n[1]);if(i){if(document.title=`${i.name} · ${To.name}`,n[2]==="steps")return U.jsx(gz,{model:i});if(n[2]==="sheet")return U.jsx(xz,{model:i});const r=Number(new URLSearchParams(t.split("?")[1]??"").get("step")??1)-1;return U.jsx(pz,{model:i,go:e,startStep:Number.isFinite(r)?r:0},i.id)}}return document.title=`${To.name} · ${To.tagline}`,U.jsx(az,{})}cw(document.getElementById("root")).render(U.jsx(Sz,{}));"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(t=>t.forEach(e=>e.unregister())).catch(()=>{}),"caches"in window&&caches.keys().then(t=>t.forEach(e=>caches.delete(e))).catch(()=>{}));

module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),u=r.n(o),c=r(2),a=(r.n(c),function(e){return"function"==typeof e});t.default=function(e){var t=e.auth,r=e.component,o=e.redirect,i=n(e,["auth","component","redirect"]),f=a(t)?t(e):t;return u.a.createElement(c.Route,Object.assign({},i,{render:function(e){return f?u.a.createElement(r,e):u.a.createElement(c.Redirect,{to:{pathname:o,state:{from:e.location}}})}}))}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")}]);
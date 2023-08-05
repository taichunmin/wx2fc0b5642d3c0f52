var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){$gwxc++;if($gwxc>=16e3){throw"Dom limit exceeded, please check if there's any mistake you've made."}return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['pages/addGame/addGame.json'] = {"navigationBarTitleText":"添加游戏","usingComponents":{}};
		__wxAppCode__['pages/datas/datas.json'] = {"navigationBarTitleText":"上传数据","usingComponents":{}};
		__wxAppCode__['pages/drag/drag.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/drawer/drawer.json'] = {"component":true,"usingComponents":{"drag":"/pages/drag/drag"}};
		__wxAppCode__['pages/index/index.json'] = {"navigationStyle":"custom","usingComponents":{"list":"/pages/list/list","drawer":"/pages/drawer/drawer","modal":"/pages/modal/modal"}};
		__wxAppCode__['pages/list/list.json'] = {"component":true,"usingComponents":{"modal":"/pages/modal/modal"}};
		__wxAppCode__['pages/login/login.json'] = {"navigationBarTitleText":"登录","usingComponents":{}};
		__wxAppCode__['pages/logs/logs.json'] = {"navigationBarTitleText":"查看启动日志","usingComponents":{}};
		__wxAppCode__['pages/me/me.json'] = {"navigationBarTitleText":"我的","usingComponents":{"modal":"/pages/modal/modal"}};
		__wxAppCode__['pages/modal/modal.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/search/search.json'] = {"navigationBarTitleText":"搜索","usingComponents":{"list":"/pages/list/list"}};
		__wxAppCode__['pages/suggest/suggest.json'] = {"navigationBarTitleText":"意见反馈","usingComponents":{}};
	;var __WXML_DEP__=__WXML_DEP__||{};var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/asyncToGenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/asyncToGenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createForOfIteratorHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createForOfIteratorHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireDefault.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireDefault.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireWildcard.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(t,i,o):t[i]=e[i]}return t.default=e,r&&r.set(e,t),t}module.exports=_interopRequireWildcard;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireWildcard.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/regenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/regenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("common/api.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.addGame=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/game",method:"post",needToken:!0,params:e})},exports.addMySeries=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/my/series",method:"post",needToken:!0,params:e})},exports.addSuggest=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/opinion",method:"post",needToken:!0,params:e})},exports.delMySeries=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/my/series",method:"delete",needToken:!0,params:e})},exports.gameList=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/game",method:"get",needToken:!0,params:e})},exports.getAccessToken=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/token",method:"get",token:e,params:{}})},exports.login=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/user",method:"post",params:e})},exports.mfUpload=function(e){return a.default.ajax({url:"/amiibo/v1/api/mf/upload",method:"post",contentType:"application/x-www-form-urlencoded",needToken:!0,params:e})},exports.mySeriesList=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/my/series",method:"get",needToken:!0,params:e})},exports.seriesList=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/series",method:"get",needToken:!0,params:e})},exports.sortMySeries=function(e){return a.default.ajax({url:"/amiibo/v1/api/applet/my/series",method:"patch",needToken:!0,params:e})},exports.upload=function(e){return a.default.ajax({url:"/amiibo/v1/api/sf/upload",method:"post",contentType:"application/x-www-form-urlencoded",needToken:!0,params:e})};var a=e(require("../utils/request"));
},{isPage:false,isComponent:false,currentFile:'common/api.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("config/config.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=wx.getAccountInfoSync().miniProgram.envVersion,o={dev:{base:"https://www.amibo.com.cn"},pro:{base:"https://www.amibo.com.cn"}};module.exports={api:"develop"===e||"trial"===e?o.dev:o.pro,env:e};
},{isPage:false,isComponent:false,currentFile:'config/config.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("i18n/en.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={languageMap:{"简体中文":"Simplified Chinese","繁体中文":"Traditional Chinese","英文":"English"}};
},{isPage:false,isComponent:false,currentFile:'i18n/en.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("i18n/zh.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,r=require("../@babel/runtime/helpers/defineProperty"),a=(r(e={"简体中文":"简体中文","繁体中文":"繁体中文","英文":"英文","问题和意见反馈":"问题和意见反馈","请输入您要反馈的问题":"问题和意见反馈","上传图片":"问题和意见反馈","联系方式":"问题和意见反馈","请输入联系方式":"问题和意见反馈","提交":"问题和意见反馈","搜索":"问题和意见反馈","恢复出厂设置":"问题和意见反馈","用户登录":"问题和意见反馈","模式设置":"问题和意见反馈","上传数据":"问题和意见反馈","软件语言":"问题和意见反馈","意见反馈":"问题和意见反馈","请点击设备上面的按钮":"问题和意见反馈","登录":"问题和意见反馈","昵称":"问题和意见反馈","数据列表":"问题和意见反馈","我的频道":"问题和意见反馈","长按拖动排序":"问题和意见反馈","添加游戏系列":"问题和意见反馈","设置":"问题和意见反馈","意向系列":"问题和意见反馈","请输入意向系列":"问题和意见反馈","数据名称":"问题和意见反馈","请输入数据名称":"问题和意见反馈","上传图片和数据文件":"问题和意见反馈"},"联系方式","问题和意见反馈"),r(e,"请输入联系方式","问题和意见反馈"),r(e,"数据有效性审核一般在1-3个工作日","问题和意见反馈"),r(e,"提交","问题和意见反馈"),r(e,"确认添加","问题和意见反馈"),r(e,"其他游戏","问题和意见反馈"),r(e,"连接超时，请稍候再试！","问题和意见反馈"),r(e,"网络错误，请稍后再试！","问题和意见反馈"),r(e,"未知系统","问题和意见反馈"),r(e,"没有找到服务","问题和意见反馈"),r(e,"蓝牙未打开,请先打开蓝牙","问题和意见反馈"),r(e,"操作成功","问题和意见反馈"),r(e,"至少上传一张图片","问题和意见反馈"),r(e,"请输入正确格式的手机号","问题和意见反馈"),r(e,"请输入联系方式","问题和意见反馈"),r(e,"提交中","问题和意见反馈"),r(e,"请输入您要反馈的问题","问题和意见反馈"),r(e,"请选择头像或者输入昵称","问题和意见反馈"),r(e,"发送数据成功","问题和意见反馈"),r(e,"请输入游戏名称","问题和意见反馈"),r(e,"请输入数据名称","问题和意见反馈"),r(e,"请选择图片","问题和意见反馈"),r(e,"请选择文件","问题和意见反馈"),r(e,"上传中","问题和意见反馈"),r(e,"请选择.bin格式文件","问题和意见反馈"),r(e,"请至少选择一个系列","问题和意见反馈"),e);module.exports={languageMap:a};
},{isPage:false,isComponent:false,currentFile:'i18n/zh.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("i18n/zh_TC.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={languageMap:{"简体中文":"簡體中文","繁体中文":"繁體中文","英文":"英文"}};
},{isPage:false,isComponent:false,currentFile:'i18n/zh_TC.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/jwt-decode/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,r,t=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},r=function(r,o){if(!e[r])return require(o);if(!e[r].status){var n=e[r].m;n._exports=n._tempexports;var a=Object.getOwnPropertyDescriptor(n,"exports");a&&a.configurable&&Object.defineProperty(n,"exports",{set:function(e){"object"===t(e)&&e!==n._exports&&(n._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(r){n._exports[r]=e[r]}))),n._tempexports=e},get:function(){return n._tempexports}}),e[r].status=1,e[r].func(e[r].req,n,n.exports)}return e[r].m.exports},function(r,t,o){e[r]={status:0,func:t,req:o,m:{exports:{},_tempexports:{}}}}(1681963924580,(function(e,r,t){function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidCharacterError";var n="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,i=0,s="";n=r.charAt(i++);~n&&(t=a%4?64*t+n:n,a++%4)?s+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return s};function a(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return n(r)}}function i(e){this.message=e}function s(e,r){if("string"!=typeof e)throw new i("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(a(e.split(".")[t]))}catch(e){throw new i("Invalid token specified: "+e.message)}}i.prototype=new Error,i.prototype.name="InvalidTokenError";var p=s;p.default=s,p.InvalidTokenError=i,r.exports=p}),(function(e){return r({}[e],e)})),r(1681963924580));
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/jwt-decode/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/bletools.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("./errorInfo.js"),t=require("./constants.js"),n=null,o=null,i=null,c=null;function s(){wx.openBluetoothAdapter({refreshCache:!1,success:function(e){o.bleStateListener(t.STATE_INIT_SUCCESS),wx.onBluetoothAdapterStateChange((function(e){e.discovering?o.bleStateListener(t.STATE_SCANNING):o.bleStateListener(t.STATE_SCANNED)}))},fail:function(e){10001==e.errCode&&(wx.showToast({title:"蓝牙未打开,请先打开蓝牙",icon:"none"}),o.bleStateListener(t.STATE_CLOSE_BLE))}})}function r(e){wx.getBLEDeviceServices({deviceId:e,success:function(n){for(var o=n.services,i=0;i<o.length;i++){var c=o[i].uuid;if(n.services[i].isPrimary)return t.SERUUID=c,void a(e,c)}},fail:function(e){console.log("没有找到服务"),wx.showToast({title:"没有找到服务",icon:"none"})}})}function a(e,n){wx.getBLEDeviceCharacteristics({deviceId:e,serviceId:n,success:function(o){for(var i=o.characteristics,c=0;c<i.length;c++){var s=o.characteristics[c];1==s.properties.notify&&(t.NOTIFYUUID=s.uuid,u(e,n,s.uuid)),1==s.properties.read&&console.log("可读"),1==s.properties.write&&(console.log("查找写服务成功"),t.WRITEUUID=s.uuid)}}})}function u(e,n,i){wx.notifyBLECharacteristicValueChange({deviceId:e,serviceId:n,characteristicId:i,state:!0,success:function(e){wx.onBLECharacteristicValueChange((function(e){var t=S(e.value);wx.setStorageSync("stopCharacter",0),o.notifyListener(t)})),o.bleStateListener(t.STATE_NOTIFY_SUCCESS),c=setTimeout((function(){console.log("断开连接"),v()}),2e4)},fail:function(e){o.bleStateListener(t.STATE_NOTIFY_FAIL),wx.showToast({title:e,icon:"none"})}})}function l(){wx.stopBluetoothDevicesDiscovery({success:function(e){o.bleStateListener(t.STATE_STOP_SUCCESS)},fail:function(e){o.bleStateListener(t.STATE_STOP_FAIL)}})}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)}));return n.join(t)}function f(){wx.closeBluetoothAdapter({success:function(e){v(),wx.removeStorageSync("stopCharacter"),wx.removeStorageSync("isConnect"),wx.removeStorageSync("deviceId"),wx.removeStorageSync("devId"),console.log("销毁页面 释放适配器资源")}})}function T(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var o=0;o<n;o++){var i=parseInt(e[o]),c=parseInt(t[o]);if(i>c)return!0;if(i<c)return!1}return!1}function v(){var e=n;null!=e?(console.log("有设备在连接中"),o.bleStateListener(t.STATE_DISCONNECTED),wx.closeBLEConnection({deviceId:e}),n=null):console.log("没有设备在连接中")}module.exports={ab2hex:S,setThis:function(e){o=e},setSportType:function(e,t){e,t&&"function"==typeof t&&t()},write:function(i){c&&clearTimeout(c),c=setTimeout((function(){console.log("断开连接"),v()}),2e4);var s=new Uint8Array(i.match(/[\da-f]{2}/gi).map((function(e){return parseInt(e,16)}))).buffer;wx.writeBLECharacteristicValue({deviceId:n,serviceId:t.SERUUID,characteristicId:t.WRITEUUID,value:s,success:function(e){o.writeListener(!0)},fail:function(t){wx.showToast({title:e(t.errCode),icon:"none"})}})},startScanBle:function(e,n){v(),wx.startBluetoothDevicesDiscovery({services:n||[],allowDuplicatesKey:!1,success:function(t){wx.onBluetoothDeviceFound((function(t){var n=t.devices;e.success(n)}))}}),null!=i&&clearTimeout(i),i=setTimeout((function(){l(),i=null}),t.SCANTIME)},clear:f,stopBluetoothDevicesDiscovery:l,connectBle:function(e){v();var i=e.deviceId;wx.setStorageSync("deviceId",i),wx.setStorageSync("devId",e.devId),wx.setStorageSync("isConnect",1),l(),n=i,o.bleStateListener(t.STATE_CONNECTING),wx.createBLEConnection({deviceId:i,timeout:t.CONNECTTIME,success:function(e){o.bleStateListener(t.STATE_CONNECTED),wx.setStorageSync("isConnect",1),wx.setBLEMTU({deviceId:i,mtu:160,success:function(e){console.log("setBLEMTU success>>",e)},fail:function(e){console.log("setBLEMTU fail>>",e)}}),r(i)},fail:function(e){o.bleStateListener(t.STATE_CONNECTING_ERROR),wx.setStorageSync("isConnect",0),n=null,wx.showToast({title:e,icon:"none"})}}),wx.onBLEConnectionStateChange((function(e){e.connected||(o.bleStateListener(t.STATE_DISCONNECTED),f(),n=null)}))},initBle:function(e,n){o=e,n;try{var i=wx.getSystemInfoSync();!function(e,n,i){if("android"===e){T(i.substring(8,i.length),"4.3.0")?T(n,"6.5.7")?s():o.bleStateListener(t.STATE_NOTBLE_WCHAT_VERSION):o.bleStateListener(t.STATE_NOTBLE_SYSTEM_VERSION)}else"ios"===e?T(n,"6.5.6")?s():o.bleStateListener(t.STATE_NOTBLE_WCHAT_VERSION):wx.showToast({title:"未知系统",icon:"none"})}(i.platform,i.version,i.system)}catch(e){}},disconnect:v,offBLECharacteristicValueChange:function(){wx.setStorageSync("stopCharacter",1),o.bleStateListener(t.STATE_STOP_CHARACTER),wx.offBLECharacteristicValueChange()},_getDevices:r,getConnectedBluetoothDevices:function(e){wx.getConnectedBluetoothDevices({services:e,success:function(e){console.log("getConnectedBluetoothDevices:ok",e)}})}};
},{isPage:false,isComponent:false,currentFile:'utils/bletools.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/checkToken.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireWildcard"),n=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){var n=wx.getStorageSync("user"),a=wx.getStorageSync("access_token_expiration"),c=wx.getStorageSync("refresh_token_expiration");(new Date).getTime()>=a&&(wx.removeStorageSync("access_token"),wx.removeStorageSync("access_token_expiration"));(new Date).getTime()>=c&&(wx.removeStorageSync("refresh_token"),wx.removeStorageSync("refresh_token_expiration"));var i=wx.getStorageSync("access_token"),s=wx.getStorageSync("refresh_token");return new Promise((function(a,c){var u;if(i&&n&&s)a();else if(!e.needToken||s)if(e.needToken||i||n&&s){if(!e.needRtoken||!s)return!i&&s&&e.needToken?void(r?(console.log("进入循环检测..."),(u=function(){setTimeout((function(){var n=r;console.log(e.url+" | 是否已拿到新的token：",null===n),void 0!==n?null===n?a():u():getApp()&&getApp().toAutoLogin()}),500)})()):r=o.getAccessToken(s).then((function(n){wx.setStorageSync("access_token",n.data.accessToken);var o=new Date(1e3*(0,t.default)(n.data.accessToken).exp);wx.setStorageSync("access_token_expiration",o),r=null,e.needToken&&a()})).catch((function(){r=null,wx.removeStorageSync("user"),wx.removeStorageSync("refresh_token"),wx.removeStorageSync("access_token"),wx.navigateTo({url:"/pages/login/login"})}))):void a();a()}else a();else a()}))};var t=n(require("jwt-decode")),o=e(require("../common/api")),r=(getApp(),null);
},{isPage:false,isComponent:false,currentFile:'utils/checkToken.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/constants.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={NOT_BLE:"您的蓝牙未打开 请打开你的蓝牙后再进入该页面操作",NOT_PERMISSION1:"您的系统版本过低 不支持蓝牙的使用",NOT_PERMISSION2:"您的微信版本过低 不支持蓝牙的使用",SCANING:"设备扫描中...",SCANED:"已停止扫描",ALARM_TITLE:"告警提示",SERUUID:"0000C000-0000-0000-B000-000000000000",NOTIFYUUID:"0000C000-0000-0000-B000-000000000000",WRITEUUID:"0000C000-0000-0000-B000-000000000000",testData1:[1,0,255],STATE_DISCONNECTED:0,STATE_SCANNING:1,STATE_SCANNED:2,STATE_CONNECTING:3,STATE_CONNECTED:4,STATE_CONNECTING_ERROR:6,STATE_NOTIFY_SUCCESS:7,STATE_NOTIFY_FAIL:8,STATE_CLOSE_BLE:9,STATE_NOTBLE_SYSTEM_VERSION:10,STATE_NOTBLE_WCHAT_VERSION:11,STATE_INIT_SUCCESS:12,STATE_STOP_SUCCESS:13,STATE_STOP_FAIL:14,STATE_STOP_CHARACTER:15,CONDITION:"TTR",CONNECTTIME:5e3,SCANTIME:6e4};
},{isPage:false,isComponent:false,currentFile:'utils/constants.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/errorInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={getErrorInfo:function(e){var a="";switch(e){case 0:a="正常";break;case 1e4:a="未初始化蓝牙适配器";break;case 10001:a="当前蓝牙适配器不可用 未初始化蓝牙适配器？ 或是你的手机蓝牙处于关闭状态";break;case 10002:a="没有找到指定设备";break;case 10003:a="连接失败";break;case 10004:a="没有找到指定服务";break;case 10005:a="没有找到指定特征值";break;case 10006:a="当前连接已断开";break;case 10007:a="当前特征值不支持此操作";break;case 10008:a="其余所有系统上报的异常";break;case 10009:a="Android 系统特有，系统版本低于 4.3 不支持 BLE";break;case 10012:a="连接超时";break;case 10013:a="连接 deviceId 为空或者是格式不正确";break;default:a="其他错误"}return a}};
},{isPage:false,isComponent:false,currentFile:'utils/errorInfo.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/language.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();function e(){return wx.getStorageSync("language")||"zh"}function n(){return require("../i18n/"+e()+".js").languageMap}module.exports={getLanguage:e,_t:n,_:function(e){return n()[e]||e}};
},{isPage:false,isComponent:false,currentFile:'utils/language.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/request.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireWildcard"),t=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=require("../@babel/runtime/helpers/defineProperty"),r=require("../@babel/runtime/helpers/objectSpread2"),o=require("../@babel/runtime/helpers/classCallCheck"),l=require("../@babel/runtime/helpers/createClass"),i=t(require("./checkToken")),n=require("../config/config"),s=(t(require("jwt-decode")),e(require("../common/api")),getApp(),new(function(){function e(t,a,r){o(this,e),this.NODE_ENV=n.env,this.header={timeOffset:8e3,"content-type":"application/x-www-form-urlencoded"},this.RESPONSE_STATUS=1,this.header=t,this.NODE_ENV=a,this.RESPONSE_STATUS=r}return l(e,[{key:"request",value:function(e){e.url="".concat(n.api.base).concat(e.url),e.loading&&wx.showLoading({title:"加载中...",mask:!0}),e.params&&(e.data=e.params),(e=r(r({},e),{},{header:a({timeOffset:8e3,"content-type":"application/json"},"content-type",e&&e.contentType?e.contentType:"application/json")})).isJson&&(e=r(r({},e),{},{header:{timeOffset:8e3,"content-type":"application/json"}}));var t=wx.getStorageSync("access_token");return(t||e.token)&&(e=r(r({},e),{},{header:r(r({},e.header),{},{Authorization:"Bearer "+(e.token||t)})})),e}},{key:"response",value:function(e){if(wx.hideLoading(),this.RESPONSE_STATUS)return e.data;var t=e.data||{};if(403===t.code||"403"===t.code){if(!wx.getStorageSync("refresh_token"))return;return wx.clearStorageSync(),e.data}if(t.code,!1!==t.message){var a="ECONNABORTED"===e.code?"连接超时，请稍候再试！":"网络错误，请稍后再试！";wx.showToast({title:t.message||a,icon:"none"})}return e.data}},{key:"ajax",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(a,r){(0,i.default)(t).then((function(){var o=e.request(t);wx.request({url:o.url,data:o.data,header:o.header||e.header,method:o.method||"get",success:function(t){if(200===t.statusCode){e.RESPONSE_STATUS=1;var o=e.response(t);a(o)}else if(401===t.statusCode)e.RESPONSE_STATUS=0,wx.navigateTo({url:"/pages/login/login"});else{e.RESPONSE_STATUS=0;var l=e.response(t);r(l)}},fail:function(t){e.RESPONSE_STATUS=0;var a=e.response(t);r(a)}})}))}))}},{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,a=void 0===t?"localhost":t,r=e.data,o=void 0===r?{}:r,l=e.success,i=void 0===l?null:l,n=e.fail,s=void 0===n?null:n,u=e.complete,c=void 0===u?null:u,d=e.callback,h=void 0===d?null:d,v=e.that,p=void 0===v?null:v;return this.ajax({url:a,data:o,method:"GET",success:i,fail:s,complete:c,callback:h,that:p})}},{key:"post",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,a=void 0===t?"localhost":t,r=e.data,o=void 0===r?{}:r,l=e.success,i=void 0===l?null:l,n=e.fail,s=void 0===n?null:n,u=e.that,c=void 0===u?null:u,d=e.complete,h=void 0===d?null:d,v=e.callback,p=void 0===v?null:v;return this.ajax({url:a,data:o,method:"POST",success:i,fail:s,that:c,complete:h,callback:p})}},{key:"put",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,a=void 0===t?"localhost":t,r=e.data,o=void 0===r?{}:r,l=e.success,i=void 0===l?null:l,n=e.fail,s=void 0===n?null:n,u=e.that,c=void 0===u?null:u,d=e.complete,h=void 0===d?null:d,v=e.callback,p=void 0===v?null:v;return this.ajax({url:a,data:o,method:"POST",success:i,fail:s,that:c,complete:h,callback:p})}}]),e}()));exports.default=s;
},{isPage:false,isComponent:false,currentFile:'utils/request.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../config/config"),e=function(t){return(t=t.toString())[1]?t:"0".concat(t)};module.exports={formatTime:function(t){var n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),a=t.getHours(),i=t.getMinutes(),u=t.getSeconds();return"".concat([n,r,o].map(e).join("/")," ").concat([a,i,u].map(e).join(":"))},hexStringToArrayBuffer:function(t,e){if(t<=0)return new ArrayBuffer(0);if(!e)return new ArrayBuffer(0);e=e.padStart(2*t,"0"),e=function(t){t="0x"+t;for(var e=0,n=0;n<4;n++)e=256*e+(t>>8*n&255);return e}().toString(16);for(var n=new ArrayBuffer(t),r=new DataView(n),o=0,a=0,i=e.length;a<i;a+=2){var u=e.substr(a,2),s=parseInt(u,16);r.setUint8(o,s),o++}return n},uploadFile:function(e){return new Promise((function(n,r){wx.uploadFile({url:"".concat(t.api.base,"/amiibo/v1/api/sf/upload"),filePath:e,header:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+wx.getStorageSync("access_token")},name:"file",success:function(t){if(200!=t.statusCode)return wx.showToast({title:t.errMsg,icon:"none",duration:1e3}),void r(t.errMsg);var e=JSON.parse(t.data);1e4==e.code?n({data:e.data}):(wx.showToast({title:e.msg,icon:"none",duration:1e3}),r(e.msg))},fail:function(t){wx.showToast({title:t,icon:"none",duration:1e3}),r(t)}})}))},downloadFile:function(t){return new Promise((function(e,n){wx.downloadFile({url:t,success:function(t){if(200!==t.statusCode)return wx.showToast({title:t.errMsg,icon:"none",duration:1e3}),void n(t.errMsg);e({data:{url:t.tempFilePath}})},fail:function(t){wx.showToast({title:t,icon:"none",duration:1e3}),n(t)}})}))},toHex:function(t){for(var e=["a","b","c","d","e","f"],n=["0","0","0","0","0","0","0","0"],r=7;t>15;){var o=t%16;if(o>=10){var a=o%10;n[r--]=e[a]}else n[r--]=o.toString();t=Math.floor(t/16)}if(0!=t)if(t>=10){a=t%10;n[r--]=e[a]}else n[r--]=t.toString();return n.join("")},randomNum:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/xxtea.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r=["AjhboiRd7XTWUNxY","ADKbOils7orWVnxY","Ae8Wd0zNtxroCUfg","vKkKitxhtHxOjRtf","hDdsHctNXE8KdjDT","dmql29OXsfZAx3F9","HOwjAkHmEAAuSERN","KnLV7P2k69ylXfe2","WmbxvXIzMCIDDxBT","ivAGUdx6kbyrHwdt","3YAWS83FT14yKDJS","d9lRiiUJIyIdcRAS","VxYRT3tiMZh6Agkr","LGPwbEi3242XKFDT","3Sg9xi0Z9HOJVqj0","d038zFA0FEf3DONY","HRu03Prefrwwuqrm","MDBCd9ZtchbofN97","3IAlM9yWxbUxtV9Y","JJiIBMsGCSTghgY8","dAwwFMHnjAUnifLe","qodU9iz9v8diNAKS","P0eQd3sT0W3EQIxQ","ZMSwtSZshoOtnRds","rmM82IwL6xM9sihA","VxS1ewUd2FK9ls3A","bgHyhhPygZjNqGqr","fGUXus9lH1VSRCAB","c9VyQ1yJh7f7ddm9","ONtLfNG9H2xmnyfI","YcDPE43yEOxcVVM0","Nrd4mXgtDK8GiW8A","SqBcoRBssML682tj","BONAH99rA3Kfgrdk","FXhc4fGJK20Z6qRl","Sc2RsRwcfBy6EUok","DGO9QozzXBXrAQ0d","W9WNbEttU4x0MVr2","dXIioOYO40VH2WAO","lmJObzP88cV7Ded2","8r2WlihHY2wvWdji","xVdl4cY9wOACQBwW","wjQoiQySmXuX9zO7","BFzF9IEGfNZvUyG9","TKQOGf6nOxb3YA10","k30NYzFqTxEH6X2h","27F0RbeP8ZAQvHn3","jdER3e0Zjrv9BE1Y","USjiAETCc6kAJx1C","Iy9jTzb3AQxOFXre","fBJecUHfDwJii9WV"];function t(r,t){var n,e=r.length,i=e>>2;0!=(3&e)&&++i,t?(n=new Array(i+1))[i]=e:n=new Uint32Array(i);for(var A=0;A<e;++A)n[A>>2]|=r[A]<<((3&A)<<3);return n}function n(r,t){var n;n=t?r[r.length-1]:r.length<<2;for(var e=new Uint8Array(n),i=0;i<n;i++)e[i]=r[i>>2]>>((3&i)<<3);return e}function e(r){for(var t=r.length,n=new Uint8Array(3*t),e=0,i=0;i<t;i++){var A=r.charCodeAt(i);if(A<128)n[e++]=A;else if(A<2048)n[e++]=192|A>>6,n[e++]=128|63&A;else{if(!(A<55296||A>57343)){if(i+1<t){var f=r.charCodeAt(i+1);if(A<56320&&56320<=f&&f<=57343){var o=65536+((1023&A)<<10|1023&f);n[e++]=240|o>>18,n[e++]=128|o>>12&63,n[e++]=128|o>>6&63,n[e++]=128|63&o,i++;continue}}throw new Error("Malformed string")}n[e++]=224|A>>12,n[e++]=128|A>>6&63,n[e++]=128|63&A}}return n.subarray(0,e)}module.exports={xxtea_encrypt:function(i,A){for(var f,o,d=t(A=e(r[A]),!1),a=i.length-1,x=i[a],c=i[0],l=Math.floor(6+52/(a+1)),y=0;l-- >0;){o=(y=y+2654435769&4294967295)>>>2&3;for(var h=0;h<a;h++)f=(x>>>5^(c=i[h+1])<<2)+(c>>>3^x<<4)^(y^c)+(d[3&h^o]^x),x=i[h]=i[h]+f&4294967295;f=(x>>>5^(c=i[0])<<2)+(c>>>3^x<<4)^(y^c)+(d[3&h^o]^x),x=i[a]=i[a]+f&4294967295}var w,s=n(i,!1);return w=s,Array.prototype.map.call(new Uint8Array(w),(function(r){return("00"+r.toString(16)).slice(-2)})).join("")}};
},{isPage:false,isComponent:false,currentFile:'utils/xxtea.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("./utils/language.js");App({onLaunch:function(){var t=this,n={};wx.getSystemInfo({success:function(e){n.rpx=e.windowWidth/750;var i=wx.getMenuButtonBoundingClientRect();n.statusBarHeight=e.statusBarHeight,n.allHeight=e.statusBarHeight+i.height+3*(i.top-e.statusBarHeight),n.windowHeight=e.windowHeight,n.windowWidth=e.windowWidth,wx.setStorageSync("systemInfo",JSON.stringify(n)),t.globalData.systemInfo=n},fail:function(t){console.log(t)}})},globalData:{locale:"zh_TC",_t:t._t(),userInfo:null,systemInfo:{},connected:!1}});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./pages/addGame/addGame.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/addGame/addGame.wxml'] = [$gwx_XC_0, './pages/addGame/addGame.wxml'];else __wxAppCode__['pages/addGame/addGame.wxml'] = $gwx_XC_0( './pages/addGame/addGame.wxml' );
	;__wxRoute = "pages/addGame/addGame";__wxRouteBegin = true;__wxAppCurrentFile__="pages/addGame/addGame.js";define("pages/addGame/addGame.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireWildcard"),e=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),n=t(require("../../common/api")),i=getApp();Page({data:{systemInfo:i.globalData.systemInfo,toView:"green",scrollTop:0,dataList:[],checkList:[],mySeriesListIds:[],scrollPosition:{scrollViewHeight:0}},onLoad:function(t){var e=this;this.setData({"scrollPosition.scrollViewHeight":this.data.systemInfo.windowHeight-400*this.data.systemInfo.rpx}),this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(t){e.setData({mySeriesListIds:t.mySeriesListIds})})),this.getSeriesList()},onReady:function(){},onShow:function(){},getSeriesList:function(){var t=this;n.seriesList().then((function(n){var i=n.data,s=n.code,o=n.msg;if(1e4==s){var a,c=[],r=e(i.rows);try{for(r.s();!(a=r.n()).done;){var l=a.value;t.data.mySeriesListIds.includes(l.id)||c.push(l)}}catch(t){r.e(t)}finally{r.f()}t.setData({dataList:c})}else wx.showToast({title:o,icon:"none"})})).catch((function(){}))},checkboxChange:function(t){var e=t.detail.value.map((function(t){return Number(t)}));this.setData({checkList:e})},submitOk:function(){var t=this;this.data.checkList.length?n.addMySeries({seriesIds:this.data.checkList}).then((function(e){e.data;var n=e.code,i=e.msg;1e4==n?(wx.showToast({title:"操作成功",icon:"success"}),t.getOpenerEventChannel().emit("acceptDataFromOpenedPage",{data:"test"}),wx.navigateBack()):wx.showToast({title:i,icon:"none"})})).catch((function(){})):wx.showToast({title:"请至少选择一个系列",icon:"none"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},upper:function(t){},lower:function(t){},scroll:function(t){},scrollToTop:function(){this.setAction({scrollTop:0})}});
},{isPage:true,isComponent:true,currentFile:'pages/addGame/addGame.js'});require("pages/addGame/addGame.js");$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./pages/datas/datas.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/datas/datas.wxml'] = [$gwx_XC_1, './pages/datas/datas.wxml'];else __wxAppCode__['pages/datas/datas.wxml'] = $gwx_XC_1( './pages/datas/datas.wxml' );
	;__wxRoute = "pages/datas/datas";__wxRouteBegin = true;__wxAppCurrentFile__="pages/datas/datas.js";define("pages/datas/datas.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=e(require("../../common/api")),n=require("../../utils/util.js");Page({data:{pickerHidden:!0,chosen:"",uploadImage:"",uploadFile:"",tabList:[],index:0,inputValue:"",seriesId:null},onLoad:function(e){this.getSeriesList()},onReady:function(){},onShow:function(){},getSeriesList:function(){var e=this;i.mySeriesList().then((function(t){var a=t.data,i=t.code,n=t.msg;if(1e4==i){var o=a.rows.filter((function(e){return"user"!=e.creatorType}));e.setData({tabList:o})}else wx.showToast({title:n,icon:"none"})})).catch((function(){}))},bindKeyInput:function(e){this.setData({inputValue:e.detail.value,seriesId:null})},bindPickerChange:function(e){this.setData({index:e.detail.value,seriesId:this.data.tabList[e.detail.value].id,inputValue:this.data.tabList[e.detail.value].name})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},pickerConfirm:function(e){this.setData({pickerHidden:!0}),this.setData({chosen:e.detail.value})},pickerCancel:function(){this.setData({pickerHidden:!0})},pickerShow:function(){this.setData({pickerHidden:!1})},chooseImage:function(){var e=this;wx.chooseMedia({count:1,mediaType:["image"],sourceType:["album","camera"],success:function(t){e.setData({uploadImage:t.tempFiles[0].tempFilePath})}})},chooseFile:function(){var e=this;wx.chooseMessageFile({count:1,type:"file",success:function(t){var a=t.tempFiles[0].path;-1!=a.indexOf(".bin")?e.setData({uploadFile:a}):wx.showToast({title:"请选择.bin格式文件",icon:"none"})}})},formSubmit:function(e){var o=this;return a(t.default.mark((function a(){var s,r,u;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.detail.value.intentionSeries){t.next=3;break}return wx.showToast({title:"请输入游戏名称",icon:"none"}),t.abrupt("return");case 3:if(e.detail.value.name){t.next=6;break}return wx.showToast({title:"请输入数据名称",icon:"none"}),t.abrupt("return");case 6:if(o.data.uploadImage){t.next=9;break}return wx.showToast({title:"请选择图片",icon:"none"}),t.abrupt("return");case 9:if(o.data.uploadFile){t.next=12;break}return wx.showToast({title:"请选择文件",icon:"none"}),t.abrupt("return");case 12:return wx.showLoading({title:"上传中...",mask:!0}),t.next=15,n.uploadFile(o.data.uploadImage);case 15:return s=t.sent,t.next=18,n.uploadFile(o.data.uploadFile);case 18:r=t.sent,u=Object.assign({},e.detail.value,{icon:s.data.url,data:r.data.url,size:r.data.size,seriesId:o.data.seriesId,series:o.data.seriesId?o.data.inputValue:"",intentionSeries:o.data.inputValue}),i.addGame(u).then((function(e){wx.hideLoading();e.data;var t=e.code,a=e.msg;1e4==t?(wx.showToast({title:"操作成功",icon:"success"}),wx.redirectTo({url:"/pages/index/index"})):wx.showToast({title:a,icon:"none"})})).catch((function(e){wx.hideLoading(),wx.showToast({title:e,icon:"none"})}));case 21:case"end":return t.stop()}}),a)})))()}});
},{isPage:true,isComponent:true,currentFile:'pages/datas/datas.js'});require("pages/datas/datas.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./pages/drag/drag.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/drag/drag.wxml'] = [$gwx_XC_2, './pages/drag/drag.wxml'];else __wxAppCode__['pages/drag/drag.wxml'] = $gwx_XC_2( './pages/drag/drag.wxml' );
	;__wxRoute = "pages/drag/drag";__wxRouteBegin = true;__wxAppCurrentFile__="pages/drag/drag.js";define("pages/drag/drag.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../../@babel/runtime/helpers/interopRequireWildcard"),s=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),o=require("../../@babel/runtime/helpers/asyncToGenerator"),i=e(require("../../common/api")),a=getApp();Component({properties:{isDataChange:{type:Boolean,default:!1}},observers:{isDataChange:function(t){t&&this.getMyList(!0)}},data:{systemInfo:a.globalData.systemInfo,optionsListData:[],movableViewPosition:{x:0,y:0,className:"none",data:{}},scrollPosition:{everyOptionCell:70,top:0,scrollTop:0,scrollY:!0,scrollViewHeight:1e3},selectItemInfo:{name:"",sDtSecCode:"",sCode:"",selectIndex:-1,selectPosition:0},isscroll:!0,element:[]},lifetimes:{attached:function(){this.getMyList()},ready:function(){var t=this;wx.createSelectorQuery().in(this).selectAll(".list-item").fields({dataset:!0,size:!0,rect:!0,scrollOffset:!0,context:!0},(function(e){e.length>0&&t.setData({element:e,"scrollPosition.top":260*t.data.systemInfo.rpx,"scrollPosition.scrollViewHeight":t.data.systemInfo.windowHeight-450*t.data.systemInfo.rpx,"scrollPosition.everyOptionCell":140*t.data.systemInfo.rpx,moveAllHeight:e[0].height*e.length+30*t.data.systemInfo.rpx*(e.length-1),moveHeight:e[0].height})})).exec()},moved:function(){console.log("moved")},detached:function(){console.log("detached")}},methods:{seriesClick:function(t){this.triggerEvent("seriesClick",{seriesIndex:t.currentTarget.dataset.index})},getMyList:function(t){var e=this;i.mySeriesList().then((function(s){var o=s.data,i=s.code,a=s.msg;1e4==i?(e.setData({optionsListData:o.rows||[]}),e.triggerEvent("dataChange",{optionsListData:o.rows||[],changeFlag:t})):wx.showToast({title:a,icon:"none"})})).catch((function(){}))},setSort:function(t){for(var e=this,s=[],o=0;o<t.length;o++)s.push({id:t[o].id,index:o+1});i.sortMySeries(s).then((function(t){t.data;var s=t.code,o=t.msg;1e4==s?e.getMyList(!0):wx.showToast({title:o,icon:"none"})})).catch((function(){}))},onscroll:function(t){var e=t.detail.scrollTop;this.setData({"scrollPosition.scrollTop":e})},getOptionInfo:function(t){for(var e=0,s=this.data.optionsListData.length;e<s;e++){var o=this.data.optionsListData[e];if(o.id==t)return o.selectIndex=e,o}return{}},getPositionDomByXY:function(t){for(var e=t.y-this.data.scrollPosition.top+this.data.scrollPosition.scrollTop,s=this.data.optionsListData,o=this.data.scrollPosition.everyOptionCell,i=0,a=s.length;i<a;i++)if(e>=i*o&&e<(i+1)*o)return{data:s[i],index:i};return{data:s[0],index:0}},draggleTouch:function(t){var e=t.type;"touchstart"===e?(this.scrollTouchStart(t),this.setData({isscroll:!1})):"touchmove"===e?this.scrollTouchMove(t):"touchend"===e&&(this.scrollTouchEnd(t),this.setData({isscroll:!0}))},scrollTouchStart:function(t){var e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY},s=this.getPositionDomByXY(e),o=e.y-this.data.scrollPosition.top-this.data.scrollPosition.everyOptionCell/2;this.setData({movableViewPosition:{x:0,y:o,className:"",data:s.data}});var i=s.data.id,a=this.getOptionInfo(i);a.selectPosition=t.changedTouches[0].clientY,a.selectClass="dragSelected",this.data.optionsListData[a.selectIndex].selectClass="dragSelected";var n=this.data.optionsListData;this.setData({"scrollPosition.scrollY":!1,selectItemInfo:a,optionsListData:n,"scrollPosition.selectIndex":a.selectIndex})},scrollTouchMove:function(t){var e=this.data.selectItemInfo,s=e.selectPosition,o=t.changedTouches[0].clientY,i=this.data.scrollPosition.everyOptionCell,a=this.data.optionsListData,n=e.selectIndex,l=t.changedTouches[0].pageY-this.data.scrollPosition.top-this.data.scrollPosition.everyOptionCell/2;this.setData({movableViewPosition:{x:0,y:l,className:"",data:this.data.movableViewPosition.data}}),o-s>0&&n<a.length-1&&a[n].sDtSecCode==e.sDtSecCode&&(a.splice(n,1),a.splice(++n,0,e),s+=i),o-s<0&&n>0&&a[n].sDtSecCode==e.sDtSecCode&&(a.splice(n,1),a.splice(--n,0,e),s-=i),this.setData({"selectItemInfo.selectPosition":s,"selectItemInfo.selectIndex":n,optionsListData:a})},scrollTouchEnd:function(t){var e=this.optionsDataTranlate(this.data.optionsListData,"");this.setData({optionsListData:e,"scrollPosition.scrollY":!0,"movableViewPosition.className":"none"}),this.setSort(e)},optionsDataTranlate:function(t,e){for(var s=0,o=t.length;s<o;s++)t[s].selectClass=e;return t},delete:function(t){var e=this,s=t.currentTarget.dataset.id;i.delMySeries({id:s}).then((function(t){t.data;var s=t.code,o=t.msg;1e4==s?(wx.showToast({title:"操作成功",icon:"success"}),e.getMyList(!0)):wx.showToast({title:o,icon:"none"})})).catch((function(){}))},totop:function(t){for(var e=t.currentTarget.dataset.seccode,s=0,o=this.data.optionsListData.length;s<o;s++){var i=this.data.optionsListData[s];i.sDtSecCode==e&&(s,i)}},systemInfo:(t=o(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){wx.getSystemInfo({success:function(e){t(e)},fail:function(e){t(e)}})})));case 1:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})}});
},{isPage:false,isComponent:true,currentFile:'pages/drag/drag.js'});require("pages/drag/drag.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'dataChange'])
Z([3,'seriesClick'])
Z([[7],[3,'isDataChange']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/drawer/drawer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var fE=_v()
_(r,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
var cF=_mz(z,'drag',['bind:dataChange',1,'bind:seriesClick',1,'isDataChange',2],[],e,s,gg)
_(fE,cF)
}
fE.wxXCkey=1
fE.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/drawer/drawer.wxml'] = [$gwx_XC_3, './pages/drawer/drawer.wxml'];else __wxAppCode__['pages/drawer/drawer.wxml'] = $gwx_XC_3( './pages/drawer/drawer.wxml' );
	;__wxRoute = "pages/drawer/drawer";__wxRouteBegin = true;__wxAppCurrentFile__="pages/drawer/drawer.js";define("pages/drawer/drawer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/interopRequireWildcard")(require("../../common/api"));var e=getApp();Component({properties:{show:{type:Boolean,default:!1}},data:{systemInfo:e.globalData.systemInfo,userInfo:wx.getStorageSync("user"),optionsListData:[],isDataChange:!1},lifetimes:{attached:function(){this.setData({userInfo:wx.getStorageSync("user")})},ready:function(){},moved:function(){console.log("moved")},detached:function(){console.log("detached")}},methods:{cancel:function(e){this.triggerEvent("clickDialog",{isShow:!1})},upper:function(e){console.log(e)},lower:function(e){console.log(e)},scroll:function(e){var t=e.detail.scrollTop;this.setData({"scrollPosition.scrollTop":t})},seriesClick:function(e){this.triggerEvent("seriesClick",e.detail)},dataChange:function(e){console.log(e),this.setData({optionsListData:e.detail.optionsListData}),this.triggerEvent("dataChange",e.detail)},goAdd:function(){var e=this.data.optionsListData.map((function(e){return e.id})),t=this;wx.navigateTo({url:"/pages/addGame/addGame",events:{acceptDataFromOpenedPage:function(e){t.setData({isDataChange:!0})},someEvent:function(e){console.log(e)}},success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",{mySeriesListIds:e})}})},goMe:function(){wx.navigateTo({url:"/pages/me/me"})}}});
},{isPage:false,isComponent:true,currentFile:'pages/drawer/drawer.js'});require("pages/drawer/drawer.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([a,[3,'padding-top:'],[[6],[[7],[3,'systemInfo']],[3,'allHeight']],[3,'px']])
Z([3,'content'])
Z([3,'scroll'])
Z([3,'tabList scroll-view_H'])
Z([[7],[3,'scrollId']])
Z([3,'true'])
Z([[7],[3,'tabList']])
Z([3,'index'])
Z([3,'tabClick'])
Z([a,[3,'tabItem '],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'active'],[1,'']],[3,' tabItem'],[[7],[3,'index']]])
Z(z[10][4])
Z([a,[3,'tabItem'],z[10][4]])
Z([[2,'<'],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'tabList']],[3,'length']],[1,1]]])
Z([[7],[3,'isLoad']])
Z([[6],[[6],[[7],[3,'tabList']],[[7],[3,'currentTab']]],[3,'id']])
Z([3,'clickDialog'])
Z([3,'dataChange'])
Z([3,'seriesClick'])
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var oH=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',2,e,s,gg)
var oJ=_mz(z,'scroll-view',['bindscroll',3,'class',1,'scrollIntoView',2,'scrollX',3],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['bindtap',9,'class',1,'data-index',2,'id',3],[],eN,tM,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,13,eN,tM,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,7,aL,e,s,gg,lK,'item','index','index')
_(cI,oJ)
var fS=_mz(z,'list',['isLoad',14,'seriesId',1],[],e,s,gg)
_(cI,fS)
_(oH,cI)
var cT=_mz(z,'drawer',['bind:clickDialog',16,'bind:dataChange',1,'bind:seriesClick',2,'show',3],[],e,s,gg)
_(oH,cT)
_(r,oH)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_4, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_4( './pages/index/index.wxml' );
	;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireWildcard")(require("../../common/api")),a=getApp();Page({data:{userInfo:a.globalData.systemInfo,systemInfo:a.globalData.systemInfo,tabList:[],currentTab:0,isShow:!1,page:1,list:[],isLoad:!1,scrollId:"tabItem0"},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},goSearch:function(){wx.navigateTo({url:"/pages/search/search"})},onLoad:function(){this.getSeriesList()},dataChange:function(t){this.setData({currentTab:0,tabList:t.detail.optionsListData||[],isLoad:t.detail.changeFlag})},seriesClick:function(t){this.setData({isShow:!1,currentTab:t.detail.seriesIndex,scrollId:".tabItem".concat(t.detail.seriesIndex),isLoad:!0})},getSeriesList:function(){var a=this;t.mySeriesList().then((function(t){var e=t.data,i=t.code,s=t.msg;1e4==i?e.rows&&e.rows.length&&a.setData({tabList:e.rows||[],isLoad:!0}):wx.showToast({title:s,icon:"none"})})).catch((function(){}))},getGameList:function(a){var e=this;t.gameList({page:this.data.page,size:20,seriesId:a,keyword:""}).then((function(t){var a=t.data,i=t.code,s=t.msg;1e4==i?e.setData({list:a.rows||[]}):wx.showToast({title:s,icon:"none"})})).catch((function(){}))},scroll:function(t){},clickDialog:function(t){this.setData({isShow:t.detail.isShow})},showDialog:function(){this.setData({isShow:!0})},tabClick:function(t){this.setData({currentTab:t.currentTarget.dataset.index})}});
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'clickDialog'])
Z([[7],[3,'isShow']])
Z([[2,'!'],[[7],[3,'connected']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/list/list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var oV=_mz(z,'modal',['bind:clickDialog',0,'show',1],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,2,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(r,oV)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/list/list.wxml'] = [$gwx_XC_5, './pages/list/list.wxml'];else __wxAppCode__['pages/list/list.wxml'] = $gwx_XC_5( './pages/list/list.wxml' );
	;__wxRoute = "pages/list/list";__wxRouteBegin = true;__wxAppCurrentFile__="pages/list/list.js";define("pages/list/list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard")(require("../../common/api")),t=require("../../utils/bletools"),a=require("../../utils/constants.js"),s=require("../../utils/util"),i=require("../../utils/xxtea"),o=getApp();Component({properties:{seriesId:{type:Number},search:{type:String,default:""},isLoad:{type:Boolean,default:!1},isClear:{type:Boolean,default:!1}},observers:{"seriesId,isLoad,isClear":function(e,t,a){t&&(this.setData({page:1,list:[]}),this.getGameList()),a&&this.setData({page:1,list:[]})}},data:{systemInfo:o.globalData.systemInfo,scrollTop:0,scrollHeight:0,page:1,list:[],deviceServices:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",newDevices:{},devices:[],connected:o.globalData.connected,chs:[],connectInfo:{},isShow:!1,connectTip:"",disabledScroll:!1,writeDataList:[],writeIndex:0,triggered:!1},lifetimes:{attached:function(){this.setData({connected:o.globalData.connected,connectTip:o.globalData.connected?"发送数据中":""})},ready:function(){},moved:function(){console.log("moved")},detached:function(){console.log("detached")}},methods:{onPulling:function(e){},onRefresh:function(){this._freshing||(this._freshing=!0,this.setData({page:1,disabledScroll:!1}),this.getGameList())},onRestore:function(e){},onAbort:function(e){},onLower:function(e){this.data.disabledScroll||this.getGameList()},getGameList:function(){var t=this,a=1==this.data.page?[]:this.data.list;e.gameList({page:this.data.page,size:20,seriesId:this.data.seriesId,keyword:this.data.search}).then((function(e){t.setData({triggered:!1}),t._freshing=!1;var s=e.data,i=e.code,o=e.msg;if(1e4==i){if(s&&s.rows.length){var c=a.concat(s.rows);t.setData({list:c,page:t.data.page+1,disabledScroll:c.length==s.total})}}else wx.showToast({title:o,icon:"none"})})).catch((function(){t.setData({triggered:!1}),t._freshing=!1}))},pullDownRefresh:function(){this.setData({page:1,list:[],scrollTop:0,disabledScroll:!1}),this.getGameList()},pullUpLoad:function(){this.data.disabledScroll||this.getGameList()},scroll:function(e){this.setData({scrollTop:e.detail.scrollTop})},clickDialog:function(e){this.setData({isShow:e.detail.isShow})},showDialog:function(){this.setData({isShow:!0})},clickList:function(e){if(e.currentTarget.dataset.url){var a=this,c=wx.getFileSystemManager();wx.downloadFile({url:e.currentTarget.dataset.url,success:function(e){200===e.statusCode&&c.readFile({filePath:e.tempFilePath,success:function(e){for(var c=e.data,n=s.randomNum(1e3,9999999),l=n%50,r=new Int32Array(c),d=i.xxtea_encrypt(r,l),h=s.toHex(n),g="",u=h.length-2;u>=0;u-=2)u==h.length-2?g+=h.slice(u):g+=h.slice(u,u+2);var T="cc660096"+d.slice(0,300)+"0000",f="cc660096"+d.slice(300,600)+"0001",S="cc660096"+d.slice(600,900)+"0002",D="cc66005e"+d.slice(900)+g+"0003";a.setData({writeDataList:[T,f,S,D],isShow:!0}),o.globalData.connected?(t.setThis(a),t.write("a6b6",a)):t.initBle(a)}})}})}},bleStateListener:function(e){switch(e){case a.STATE_DISCONNECTED:this.setData({connected:!1,connectTip:"设备连接断开"}),o.globalData.connected=!1,console.log("设备连接断开");break;case a.STATE_SCANNING:console.log("设备正在扫描",a.SCANING),this.setData({connectTip:"正在搜索设备"});break;case a.STATE_SCANNED:console.log("设备扫描结束",a.SCANED);break;case a.STATE_CONNECTING:console.log("设备正在连接"),this.setData({connectTip:"设备正在连接"});break;case a.STATE_CONNECTED:this.setData({connected:!0,connectTip:"设备连接成功"}),o.globalData.connected=!0,console.log("设备连接成功");break;case a.STATE_CONNECTING_ERROR:console.log("连接失败"),this.setData({connected:!1,connectTip:"连接失败"});break;case a.STATE_NOTIFY_SUCCESS:console.log("开启notify成功"),this.setData({connected:!0,connectTip:"发送数据中"}),o.globalData.connected=!0,t.write("a6b6",this);break;case a.STATE_NOTIFY_FAIL:console.log("开启notify失败");break;case a.STATE_CLOSE_BLE:console.log(a.NOT_BLE);break;case a.STATE_NOTBLE_WCHAT_VERSION:console.log(a.NOT_PERMISSION2);break;case a.STATE_NOTBLE_SYSTEM_VERSION:console.log(a.NOT_PERMISSION1);break;case a.STATE_INIT_SUCCESS:console.log("初始化蓝牙适配器成功"),this.startScanBle()}},writeListener:function(e,t){console.log(e?"发送数据成功":t,e)},notifyListener:function(e){"b6a6"==e?t.write("c6a6000400000220",this):"a6c6"==e?(t.write(this.data.writeDataList[0]),this.setData({writeIndex:1})):"66cc"==e?this.data.writeIndex>3?t.write("e33e"):(t.write(this.data.writeDataList[this.data.writeIndex]),this.setData({writeIndex:this.data.writeIndex+1})):"3ee3"==e?t.write("a55a"):"5aa5"==e&&(wx.showToast({title:"发送数据成功",icon:"success"}),this.setData({isShow:!1}))},startScanBle:function(){var e=this;t.startScanBle({success:function(a){a.forEach((function(a){if(a.name||a.localName)return a.advertisServiceUUIDs.includes(e.data.deviceServices.toLocaleUpperCase())&&-1!=a.name.indexOf("amiiboTag")?(e.setData({newDevices:a,connectTip:"开始连接"}),void t.connectBle(a)):void 0}))}},["6e400001-b5a3-f393-e0a9-e50e24dcca9e"])}}});
},{isPage:true,isComponent:true,currentFile:'pages/list/list.js'});require("pages/list/list.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./pages/login/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx_XC_6, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx_XC_6( './pages/login/login.wxml' );
	;__wxRoute = "pages/login/login";__wxRouteBegin = true;__wxAppCurrentFile__="pages/login/login.js";define("pages/login/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),n=require("../../@babel/runtime/helpers/interopRequireDefault"),t=n(require("../../@babel/runtime/regenerator")),a=require("../../@babel/runtime/helpers/asyncToGenerator"),r=e(require("../../common/api")),o=n(require("jwt-decode")),i=(getApp(),require("../../utils/util.js"));Page({data:{encryptedData:"",iv:"",nickName:"",loginCode:"",avatarUrl:"",nickname:"",isCompareVersion:-1},onLoad:function(){wx.getStorageSync("loginCode");wx.login({success:function(e){var n=e.code;wx.setStorageSync("loginCode",n)}});var e=wx.getAppBaseInfo().SDKVersion;this.setData({isCompareVersion:this.compareVersion(e,"2.21.4")})},bindnicknamereview:function(e){console.log(e)},formsubmit:function(e){var n=this;return a(t.default.mark((function a(){var r,o,s;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n,o=e.detail.value.nickname){t.next=5;break}return wx.showToast({title:"请输入昵称",icon:"none"}),t.abrupt("return");case 5:if(s={},n.data.avatarUrl){t.next=12;break}return t.next=9,i.downloadFile("https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0");case 9:s=t.sent,t.next=15;break;case 12:return t.next=14,i.uploadFile(n.data.avatarUrl);case 14:s=t.sent;case 15:wx.checkSession({success:function(e){r.loginApi(o,s.data.url)},fail:function(e){console.log(e),wx.login({success:function(e){var n=e.code;wx.setStorageSync("loginCode",n),r.loginApi(o,s.data.url)}})}});case 16:case"end":return t.stop()}}),a)})))()},loginApi:function(e,n){var t=wx.getStorageSync("loginCode");r.login({code:t,phoneEncryptedData:"",phoneIv:"",nickname:e,head:n}).then((function(e){var n=e.data,t=e.code,a=e.msg;if(1e4==t){wx.setStorageSync("access_token",n.accessToken),wx.setStorageSync("refresh_token",n.refreshToken);var r=new Date(1e3*(0,o.default)(n.accessToken).exp),i=new Date(1e3*(0,o.default)(n.refreshToken).exp);wx.setStorageSync("access_token_expiration",r),wx.setStorageSync("refresh_token_expiration",i),wx.setStorageSync("user",{nickname:n.nickname,head:n.head}),wx.navigateTo({url:"/pages/index/index"})}else wx.showToast({title:a,icon:"none"})})).catch((function(){}))},addAllSerire:function(){r.seriesList().then((function(e){var n=e.data,t=e.code,a=e.msg;if(1e4==t){var o=n.rows?n.rows.map((function(e){return e.id})):[];r.addMySeries({seriesIds:o}).then((function(e){e.data;var n=e.code,t=e.msg;1e4==n||wx.showToast({title:t,icon:"none"})})).catch((function(){}))}else wx.showToast({title:a,icon:"none"})})).catch((function(){}))},onChooseAvatar:function(e){var n=e.detail.avatarUrl;this.setData({avatarUrl:n})},chooseImage:function(){this.getUserProfile()},getUserProfile:function(){var e=this;wx.getUserProfile({desc:"用于获取用户昵称、头像",success:function(n){wx.downloadFile({url:n.userInfo.avatarUrl,success:function(t){console.log(t),200===t.statusCode&&e.setData({avatarUrl:t.tempFilePath,nickname:n.userInfo.nickName})}})},fail:function(e){console.log(e)}})},compareVersion:function(e,n){e=e.split("."),n=n.split(".");for(var t=Math.max(e.length,n.length);e.length<t;)e.push("0");for(;n.length<t;)n.push("0");for(var a=0;a<t;a++){var r=parseInt(e[a]),o=parseInt(n[a]);if(r>o)return 1;if(r<o)return-1}return 0}});
},{isPage:true,isComponent:true,currentFile:'pages/login/login.js'});require("pages/login/login.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./pages/logs/logs.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx_XC_7, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx_XC_7( './pages/logs/logs.wxml' );
	;__wxRoute = "pages/logs/logs";__wxRouteBegin = true;__wxAppCurrentFile__="pages/logs/logs.js";define("pages/logs/logs.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map((function(a){return{date:t.formatTime(new Date(a)),timeStamp:a}}))})}});
},{isPage:true,isComponent:true,currentFile:'pages/logs/logs.js'});require("pages/logs/logs.js");$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'clickDialog'])
Z([[7],[3,'isShow']])
Z([[2,'!'],[[7],[3,'connected']]])
Z(z[2])
Z([[2,'&&'],[[7],[3,'connected']],[[2,'!'],[[7],[3,'isReset']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./pages/me/me.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var t1=_mz(z,'modal',['bind:clickDialog',0,'show',1],[],e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,2,e,s,gg)){e2.wxVkey=1
var o4=_v()
_(e2,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,4,e,s,gg)){b3.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
_(r,t1)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/me/me.wxml'] = [$gwx_XC_8, './pages/me/me.wxml'];else __wxAppCode__['pages/me/me.wxml'] = $gwx_XC_8( './pages/me/me.wxml' );
	;__wxRoute = "pages/me/me";__wxRouteBegin = true;__wxAppCurrentFile__="pages/me/me.js";define("pages/me/me.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),a=require("../../utils/bletools"),t=require("../../utils/constants.js"),n=require("../../utils/language.js"),s=n._;Page({data:{modeList:[{key:"a3b301",name:"自动无限刷模式",desc:"每次刷卡后，会基于同样的数据自动生成新卡，适用于塞尔达等需要无限刷卡的游戏。"},{key:"a3b302",name:"多游戏数据模式",desc:"可以写入多个游戏数据到设备内存，切换数据逐个刷卡。"},{key:"a3b303",name:"固定卡号模式",desc:"数据写入后，每次刷卡卡号固定，适用于喷射战士等需要多次刷同一张卡的游戏。"}],isShow:!1,selectIndex:null,deviceServices:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",newDevices:{},devices:[],connected:e.globalData.connected,chs:[],connectInfo:{},connectTip:"",disabledScroll:!1,isNotify:!1,isReset:!1,langIndex:0,language:"zh",array:[{value:"zh",name:s("简体中文")},{value:"zh_TC",name:s("繁体中文")},{value:"en",name:s("英文")}],_t:""},onLoad:function(a){this.setData({connected:e.globalData.connected,connectTip:"",_t:n._t()})},onReady:function(){var e=n.getLanguage(),a=0;switch(e){case"zh":a=0;break;case"zh_TC":a=1;break;case"en":a=2}this.setData({index:a,language:e,array:[{value:"zh",name:s("简体中文")},{value:"zh_TC",name:s("繁体中文")},{value:"en",name:s("英文")}]})},onShow:function(){},clickDialog:function(e){this.setData({isShow:e.detail.isShow})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},toLogin:function(){wx.redirectTo({url:"/pages/login/login"})},toDatas:function(){wx.navigateTo({url:"/pages/datas/datas"})},toSuggest:function(){wx.navigateTo({url:"/pages/suggest/suggest"})},chooseLanguage:function(e){this.setData({index:e.detail.value,language:this.data.array[e.detail.value].value}),this.switchLanguage()},switchLanguage:function(){wx.setStorageSync("language",this.data.language),this.setData({array:[{value:"zh",name:s("简体中文")},{value:"zh_TC",name:s("繁体中文")},{value:"en",name:s("英文")}]}),this.setData({_t:n._t()})},bindReset:function(){e.globalData.connected?(a.setThis(this),this.setData({isShow:!1}),wx.showModal({title:"提示",content:"确定清除数据吗",success:function(e){e.confirm?a.write("a4b401"):e.cancel&&console.log("用户点击取消")}})):(this.setData({isShow:!0,isReset:!0}),a.initBle(this))},chooseMode:function(){this.setData({isShow:!0,isReset:!1}),e.globalData.connected?a.setThis(this):a.initBle(this)},chooseModeOk:function(e){this.setData({selectIndex:e.currentTarget.dataset.index}),a.write(this.data.modeList[e.currentTarget.dataset.index].key)},bleStateListener:function(n){switch(n){case t.STATE_DISCONNECTED:this.setData({connected:!1,connectTip:""}),e.globalData.connected=!1,console.log("设备连接断开");break;case t.STATE_SCANNING:console.log("设备正在扫描",t.SCANING);break;case t.STATE_SCANNED:console.log("设备扫描结束",t.SCANED);break;case t.STATE_CONNECTING:console.log("设备正在连接");break;case t.STATE_CONNECTED:this.setData({connected:!0,connectTip:"设备连接成功"}),e.globalData.connected=!0,console.log("设备连接成功");break;case t.STATE_CONNECTING_ERROR:console.log("连接失败"),this.setData({connected:!1,connectTip:""}),e.globalData.connected=!1;break;case t.STATE_NOTIFY_SUCCESS:console.log("开启notify成功"),this.setData({connectTip:"设备连接成功",isNotify:!0}),this.data.isReset&&(this.setData({isShow:!1}),wx.showModal({title:"提示",content:"确定清除数据吗",success:function(e){e.confirm?a.write("a4b401"):e.cancel&&console.log("用户点击取消")}}));break;case t.STATE_NOTIFY_FAIL:console.log("开启notify失败");break;case t.STATE_CLOSE_BLE:console.log(t.NOT_BLE);break;case t.STATE_NOTBLE_WCHAT_VERSION:console.log(t.NOT_PERMISSION2);break;case t.STATE_NOTBLE_SYSTEM_VERSION:console.log(t.NOT_PERMISSION1);break;case t.STATE_INIT_SUCCESS:console.log("初始化蓝牙适配器成功"),this.startScanBle()}},writeListener:function(e,a){console.log(e?"发送数据成功":a,e)},notifyListener:function(e){"b3a3"!=e&&"b4a4"!=e||this.setData({isShow:!1,isReset:!1})},startScanBle:function(){var e=this;a.startScanBle({success:function(t){t.forEach((function(t){if(t.name||t.localName)return t.advertisServiceUUIDs.includes(e.data.deviceServices.toLocaleUpperCase())&&-1!=t.name.indexOf("amiiboTag")?(e.setData({newDevices:t,connectTip:"开始连接"}),void a.connectBle(t)):void 0}))}},["6e400001-b5a3-f393-e0a9-e50e24dcca9e"])}});
},{isPage:true,isComponent:true,currentFile:'pages/me/me.js'});require("pages/me/me.js");$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./pages/modal/modal.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var o6=_v()
_(r,o6)
if(_oz(z,0,e,s,gg)){o6.wxVkey=1
var f7=_n('slot')
_(o6,f7)
}
o6.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/modal/modal.wxml'] = [$gwx_XC_9, './pages/modal/modal.wxml'];else __wxAppCode__['pages/modal/modal.wxml'] = $gwx_XC_9( './pages/modal/modal.wxml' );
	;__wxRoute = "pages/modal/modal";__wxRouteBegin = true;__wxAppCurrentFile__="pages/modal/modal.js";define("pages/modal/modal.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{show:{type:Boolean,default:!1}},data:{userInfo:{name:"微信用户",avatar:""},toView:"green",scrollTop:0,dataList:[],hidden:!0,flag:!1,x:0,y:0,elements:[],disabled:!1,moveAllHeight:0,moveHeight:0},onLoad:function(){},methods:{cancel:function(t){console.log(t),this.triggerEvent("clickDialog",{isShow:!1})},upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t)},scrollToTop:function(){this.setAction({scrollTop:0})},tap:function(){for(var t=0;t<order.length;++t)if(order[t]===this.data.toView){this.setData({toView:order[t+1],scrollTop:200*(t+1)});break}},tapMove:function(){this.setData({scrollTop:this.data.scrollTop+10})},goAdd:function(){wx.navigateTo({url:"/pages/addGame/addGame"})},goMe:function(){wx.navigateTo({url:"/pages/me/me"})},_longtap:function(t){t.detail;this.setData({x:t.currentTarget.offsetLeft,y:t.currentTarget.offsetTop}),this.setData({hidden:!1,flag:!0})},touchs:function(t){this.setData({beginIndex:t.currentTarget.dataset.index})},touchend:function(t){if(this.data.flag){for(var e=t.changedTouches[0].pageX,a=t.changedTouches[0].pageY,o=this.data.elements,n=this.data.data,i=0;i<o.length;i++){var s=o[i];if(e>s.left&&e<s.right&&a>s.top&&a<s.bottom){var r=s.dataset.index,l=this.data.beginIndex;if(l<r){for(var c=n[l],d=l;d<r;d++)n[d]=n[d+1];n[r]=c}if(l>r){for(var f=n[l],h=l;h>r;h--)n[h]=n[h-1];n[r]=f}this.setData({data:n})}}this.setData({hidden:!0,flag:!1})}},touchm:function(t){if(this.data.flag){var e=t.touches[0].pageX,a=t.touches[0].pageY;this.setData({x:e-75,y:a-45})}}}});
},{isPage:false,isComponent:true,currentFile:'pages/modal/modal.js'});require("pages/modal/modal.js");$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isClear']])
Z([[7],[3,'isLoad']])
Z([[7],[3,'inputValue']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var h9=_mz(z,'list',['isClear',0,'isLoad',1,'search',1],[],e,s,gg)
_(r,h9)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/search.wxml'] = [$gwx_XC_10, './pages/search/search.wxml'];else __wxAppCode__['pages/search/search.wxml'] = $gwx_XC_10( './pages/search/search.wxml' );
	;__wxRoute = "pages/search/search";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search/search.js";define("pages/search/search.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{inputValue:"",search:"",isLoad:!1,isClear:!1},onLoad:function(n){},onReady:function(){},onShow:function(){},bindKeyInput:function(n){this.setData({inputValue:n.detail.value})},bindSearch:function(){this.data.inputValue?this.setData({isClear:!0,isLoad:!0}):this.setData({isClear:!0,isLoad:!1})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/search/search.js'});require("pages/search/search.js");$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'formReset'])
Z([3,'formSubmit'])
Z([3,'form'])
Z([[2,'<'],[[6],[[7],[3,'picture']],[3,'length']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./pages/suggest/suggest.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var cAB=_mz(z,'form',['catchreset',0,'catchsubmit',1,'class',1],[],e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,3,e,s,gg)){oBB.wxVkey=1
}
oBB.wxXCkey=1
_(r,cAB)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/suggest/suggest.wxml'] = [$gwx_XC_11, './pages/suggest/suggest.wxml'];else __wxAppCode__['pages/suggest/suggest.wxml'] = $gwx_XC_11( './pages/suggest/suggest.wxml' );
	;__wxRoute = "pages/suggest/suggest";__wxRouteBegin = true;__wxAppCurrentFile__="pages/suggest/suggest.js";define("pages/suggest/suggest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=e(require("../../common/api")),r=require("../../utils/util.js");Page({data:{pickerHidden:!0,chosen:"",picture:[],currentNum:0},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},pickerConfirm:function(e){this.setData({pickerHidden:!0}),this.setData({chosen:e.detail.value})},pickerCancel:function(){this.setData({pickerHidden:!0})},pickerShow:function(){this.setData({pickerHidden:!1})},chooseImage:function(){var e=this,t=this.data.picture;wx.chooseMedia({count:3-t.length,mediaType:["image"],sourceType:["album","camera"],success:function(n){e.setData({picture:t.concat(n.tempFiles)})}})},delImage:function(e){this.data.picture.splice(e.currentTarget.dataset.index,1),this.setData({picture:this.data.picture})},descChange:function(e){this.setData({currentNum:e.detail.value.length})},formSubmit:function(e){var c=this;return a(t.default.mark((function a(){var o,s,u,l,d,h;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.detail.value.desc){t.next=3;break}return wx.showToast({title:"请输入您要反馈的问题",icon:"none"}),t.abrupt("return");case 3:if(c.data.picture.length){t.next=6;break}return wx.showToast({title:"至少上传一张图片",icon:"none"}),t.abrupt("return");case 6:wx.showLoading({title:"提交中...",mask:!0}),o=[],s=n(c.data.picture),t.prev=9,s.s();case 11:if((u=s.n()).done){t.next=19;break}return l=u.value,t.next=15,r.uploadFile(l.tempFilePath);case 15:d=t.sent,o.push(d.data.url);case 17:t.next=11;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(9),s.e(t.t0);case 24:return t.prev=24,s.f(),t.finish(24);case 27:h=Object.assign({},e.detail.value,{picture:JSON.stringify(o)}),i.addSuggest(h).then((function(e){wx.hideLoading();e.data;var t=e.code,n=e.msg;1e4==t?(wx.showToast({title:"操作成功",icon:"success"}),wx.navigateBack()):wx.showToast({title:n,icon:"none"})})).catch((function(e){wx.hideLoading(),wx.showToast({title:e,icon:"none"})}));case 29:case"end":return t.stop()}}),a,null,[[9,21,24,27]])})))()},formReset:function(e){this.setData({chosen:""})}});
},{isPage:true,isComponent:true,currentFile:'pages/suggest/suggest.js'});require("pages/suggest/suggest.js");
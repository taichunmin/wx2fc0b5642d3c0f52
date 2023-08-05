var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __mainPageFrameReady__=__globalThis.__mainPageFrameReady__||function(){};var __pageFrameStartTime__=Date.now();var __webviewId__;var __wxAppCode__=__wxAppCode__||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}
if (!__COMMON_STYLESHEETS__.hasOwnProperty('./iconfont.wxss'))__COMMON_STYLESHEETS__['./iconfont.wxss']=["@font-face{font-family:iconfont;src:url(\x22data:font/ttf;charset\x3dutf-8;base64,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Mjc2NzYFJwcGIiY0PwEnJjQ2Mh8BNzYyFhQPARcWFAYiA8A9O2Vo9mhlOz09O2Vo9mhlOz3+87OzChkUCrOzChQZCrOzChkUCrOzChQZAYB7aGU7PT07ZWj2aGU7PT07ZWhls7MKFBkKs7MKGRQKs7MKFBkKs7MKGRQAAAABAAD/oQMYA4AADwAAAT8BASYiBhQXCQEGFBYyNwLpAyv+IxIzJBIBhv56EiQzEgFjAiwB3RIkMxL+ev56EjMkEgAAAAIAAP+EA/0DfQADABsAABMhFSEBJyYiDwEGFRQWOwExMxEzETMxMzI2NTQFA/j8CAMf6RhEGOoULiACaf5mBSAtA313/pD2GRn2FhsfK/5qAZYrHxwAAAAAABIA3gABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADAAgAIgABAAAAAAAEAAgAKgABAAAAAAAFAAsAMgABAAAAAAAGAAgAPQABAAAAAAAKACsARQABAAAAAAALABMAcAADAAEECQAAACYAgwADAAEECQABABAAqQADAAEECQACAA4AuQADAAEECQADABAAxwADAAEECQAEABAA1wADAAEECQAFABYA5wADAAEECQAGABAA/QADAAEECQAKAFYBDQADAAEECQALACYBY0NyZWF0ZWQgYnkgaWNvbmZvbnRpY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQAJc3dpdGNoLU9OCnN3aXRjaC1PRkYPc2hhbmd4aWFqaWFudG91C2ljb24tamlhaGFvDXl1bnNoYW5nY2h1YW4MeWlqaWFuZmFua3VpEXFpYXBpYW5tb3NoaV9rdWFpC3ppeXVhbnhoZHBpBmRlbmdsdQp3ZW5qaWFuamlhBnNoZXpoaQdhbm5pdXp1BXlpY2h1C3poYW94aWFuZ2ppCmtldHVvemh1YWkGeW9uZ2h1B2d1YW5iaTILamlhbnRvdS15b3UHemhpZGluZwAA\x22) format(\x22truetype\x22)}\n.",[1],"iconfont{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:iconfont!important;font-size:",[0,32],";font-style:normal}\n.",[1],"icon-switch-ON:before{content:\x22\\e7d9\x22}\n.",[1],"icon-switch-OFF:before{content:\x22\\e7da\x22}\n.",[1],"icon-shangxiajiantou:before{content:\x22\\e67f\x22}\n.",[1],"icon-icon-jiahao:before{content:\x22\\e68f\x22}\n.",[1],"icon-yunshangchuan:before{content:\x22\\e602\x22}\n.",[1],"icon-yijianfankui:before{content:\x22\\e637\x22}\n.",[1],"icon-qiapianmoshi_kuai:before{content:\x22\\ec7e\x22}\n.",[1],"icon-ziyuanxhdpi:before{content:\x22\\e639\x22}\n.",[1],"icon-denglu:before{content:\x22\\e611\x22}\n.",[1],"icon-wenjianjia:before{content:\x22\\e601\x22}\n.",[1],"icon-shezhi:before{content:\x22\\e615\x22}\n.",[1],"icon-anniuzu:before{content:\x22\\e62f\x22}\n.",[1],"icon-yichu:before{content:\x22\\e798\x22}\n.",[1],"icon-zhaoxiangji:before{content:\x22\\e600\x22}\n.",[1],"icon-ketuozhuai:before{content:\x22\\e617\x22}\n.",[1],"icon-yonghu:before{content:\x22\\e8c8\x22}\n.",[1],"icon-guanbi2:before{content:\x22\\e638\x22}\n.",[1],"icon-jiantou-you:before{content:\x22\\e6c0\x22}\n.",[1],"icon-zhiding:before{content:\x22\\e701\x22}\n",];
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,"./iconfont.wxss"],"body{height:100%;overflow:hidden;width:100%}\nwx-text,wx-view{box-sizing:border-box;font-size:",[0,28],"}\n.",[1],"require{color:red;margin-right:",[0,8],"}\n.",[1],"ellipsis{overflow:hidden;text-overflow:ellipsis;width:100%}\n.",[1],"flex{display:-webkit-flex;display:flex}\n.",[1],"flex-dir-ver{-webkit-flex-direction:column;flex-direction:column}\n.",[1],"aligns-center{-webkit-align-items:center;align-items:center}\n.",[1],"justify-between{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"container{box-sizing:border-box;height:100%}\n.",[1],"content{background:#f5f8ff;height:100%;padding:",[0,20]," ",[0,30],";width:100%}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:71)",{path:"./app.wxss"})();;;}__mainPageFrameReady__();var __pageFrameEndTime__=Date.now();
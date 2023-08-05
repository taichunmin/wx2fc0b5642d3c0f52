$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/login/login.js'});require("pages/login/login.js");
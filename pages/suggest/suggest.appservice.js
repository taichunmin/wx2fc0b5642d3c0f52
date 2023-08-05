$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
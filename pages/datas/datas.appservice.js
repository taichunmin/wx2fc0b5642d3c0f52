$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/datas/datas.js'});require("pages/datas/datas.js");
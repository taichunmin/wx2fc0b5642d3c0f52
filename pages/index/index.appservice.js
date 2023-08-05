$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");
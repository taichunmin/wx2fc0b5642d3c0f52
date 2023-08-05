$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'pages/drag/drag.js'});require("pages/drag/drag.js");
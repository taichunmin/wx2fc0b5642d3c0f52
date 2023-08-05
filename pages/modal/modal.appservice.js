$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'pages/modal/modal.js'});require("pages/modal/modal.js");
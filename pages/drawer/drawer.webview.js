$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'drawer-component'])
Z([3,'cancel'])
Z([3,'mark'])
Z([3,'content'])
Z(z[4])
Z([3,'userInfo'])
Z([3,'avatar'])
Z([[6],[[7],[3,'userInfo']],[3,'head']])
Z([3,'name'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'nickname']]])
Z([3,'tip-wrap'])
Z([3,'我的频道'])
Z([3,'长按拖动排序'])
Z([3,'dataChange'])
Z([3,'seriesClick'])
Z([[7],[3,'isDataChange']])
Z([3,'goAdd'])
Z([3,'btn'])
Z([3,'添加游戏系列'])
Z([3,'goMe'])
Z([3,'foot-wrap'])
Z([3,'iconfont icon-shezhi'])
Z([3,' 设置'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/drawer/drawer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var tYC=_v()
_(r,tYC)
if(_oz(z,0,e,s,gg)){tYC.wxVkey=1
var eZC=_n('view')
_rz(z,eZC,'class',1,e,s,gg)
var b1C=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
_(eZC,b1C)
var o2C=_mz(z,'view',['class',4,'id',1],[],e,s,gg)
var x3C=_n('view')
_rz(z,x3C,'class',6,e,s,gg)
var o4C=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(x3C,o4C)
var f5C=_n('text')
_rz(z,f5C,'class',9,e,s,gg)
var c6C=_oz(z,10,e,s,gg)
_(f5C,c6C)
_(x3C,f5C)
_(o2C,x3C)
var h7C=_n('view')
_rz(z,h7C,'class',11,e,s,gg)
var o8C=_n('text')
var c9C=_oz(z,12,e,s,gg)
_(o8C,c9C)
_(h7C,o8C)
var o0C=_n('text')
var lAD=_oz(z,13,e,s,gg)
_(o0C,lAD)
_(h7C,o0C)
_(o2C,h7C)
var aBD=_mz(z,'drag',['bind:dataChange',14,'bind:seriesClick',1,'isDataChange',2],[],e,s,gg)
_(o2C,aBD)
var tCD=_mz(z,'view',['bindtap',17,'class',1],[],e,s,gg)
var eDD=_oz(z,19,e,s,gg)
_(tCD,eDD)
_(o2C,tCD)
var bED=_mz(z,'view',['bindtap',20,'class',1],[],e,s,gg)
var oFD=_n('text')
_rz(z,oFD,'class',22,e,s,gg)
_(bED,oFD)
var xGD=_oz(z,23,e,s,gg)
_(bED,xGD)
_(o2C,bED)
_(eZC,o2C)
_(tYC,eZC)
}
tYC.wxXCkey=1
tYC.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/drawer/drawer.wxml'] = [$gwx_XC_3, './pages/drawer/drawer.wxml'];else __wxAppCode__['pages/drawer/drawer.wxml'] = $gwx_XC_3( './pages/drawer/drawer.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/drawer/drawer.wxss'] = setCssToHead([[2,"./iconfont.wxss"],".",[1],"drawer-component{height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}\n.",[1],"drawer-component .",[1],"mark{background:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}\n.",[1],"drawer-component .",[1],"content{background:#fff;height:100%;position:relative;width:75%;z-index:1}\n.",[1],"drawer-component .",[1],"userInfo{-webkit-align-items:center;align-items:center;background:#b3ade0;color:#fff;display:-webkit-flex;display:flex;height:",[0,200],";padding-left:",[0,40],";width:100%}\n.",[1],"drawer-component .",[1],"userInfo .",[1],"avatar{border-radius:50%;height:",[0,60],";margin-right:",[0,30],";width:",[0,60],"}\n.",[1],"drawer-component .",[1],"tip-wrap{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:",[0,24],";height:",[0,60],";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ",[0,30],";width:100%}\n.",[1],"drawer-component .",[1],"main-wrap{height:",[0,660],";width:100%}\n.",[1],"drawer-component .",[1],"btn{background:#f2f2f2;border-radius:",[0,6],";bottom:",[0,95],";font-size:",[0,32],";height:",[0,80],";left:50%;line-height:",[0,80],";margin-left:",[0,-150],";position:absolute;text-align:center;width:",[0,300],"}\n.",[1],"drawer-component .",[1],"foot-wrap{-webkit-align-items:center;align-items:center;bottom:",[0,40],";display:-webkit-flex;display:flex;font-size:",[0,32],";-webkit-justify-content:center;justify-content:center;left:",[0,50],";position:fixed}\n.",[1],"drawer-component .",[1],"foot-wrap .",[1],"iconfont{font-size:",[0,36],";margin-right:",[0,10],"}\n.",[1],"outer{border:1px solid red;height:",[0,400],";margin:0 auto;width:",[0,650],"}\n.",[1],"inner,wx-movable-area{height:100%;width:100%}\nwx-movable-view{height:",[0,140],";width:100%}\n.",[1],"item{border:1px solid red;line-height:",[0,150],";text-align:center;width:",[0,150],"}\n.",[1],"index-first,.",[1],"item{display:inline-block;height:",[0,150],"}\n.",[1],"index-first{background:#b22222;width:",[0,15],"}\n.",[1],"item-move{border:1px solid blue;display:inline-block;height:",[0,140],";width:100%}\n.",[1],"edit_row_title .",[1],"edit_col4:before{background-color:#e8e8e8;content:\x22\x22;height:18px;left:0;margin-top:-9px;position:absolute;top:50%;width:1px}\n.",[1],"edit_title_col1{left:10px;position:relative}\n.",[1],"stay_top{height:47px;line-height:47px}\n.",[1],"stay_top .",[1],"edit_row{color:rgba(89,89,89,.8);font-size:14px;height:47px;left:0;padding:0;position:fixed;top:0;width:100%;z-index:99}\n.",[1],"edit_row_holder{background-color:#fff}\n.",[1],"edit_row_on .",[1],"ico_checker{background-position:0 -17px}\n.",[1],"moveable_row{left:0;position:absolute;top:0;width:100%;z-index:100}\n.",[1],"moveable_row .",[1],"edit_row{box-shadow:0 0 12px rgba(0,0,0,.2)}\n.",[1],"dragSelected{background-color:#ccc}\n.",[1],"placeholder{display:inline-block;height:1px;width:1px}\n.",[1],"secname{font-size:17px;line-height:1.2;margin-top:",[0,15],"}\n.",[1],"seccode{color:rgba(89,89,89,.6);font-size:13px;line-height:1.2}\n.",[1],"stay_bottom{height:50px}\n.",[1],"bottom_row{background-color:#fff;border-top:1px solid #a5a5a5;bottom:0;color:#929292;font-size:17px;height:49px;left:0;line-height:49px;overflow:hidden;position:fixed;width:100%;z-index:99}\n.",[1],"stay_bottom .",[1],"all_select .",[1],"ico_checker{background-position:0 -17px}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/drawer/drawer.wxss:1:1490)",{path:"./pages/drawer/drawer.wxss"});
}
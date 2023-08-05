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
Z([3,'container'])
Z([3,'usermotto'])
Z([3,'formsubmit'])
Z([[2,'>='],[[7],[3,'isCompareVersion']],[1,0]])
Z([3,'onChooseAvatar'])
Z([3,'avatar-wrapper'])
Z([3,'chooseAvatar'])
Z([[7],[3,'avatarUrl']])
Z([3,'avatar'])
Z(z[7])
Z([3,'iconfont icon-yonghu'])
Z([3,'chooseImage'])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[7])
Z(z[10])
Z([3,'cell-wrap'])
Z([3,'cell-label'])
Z([3,'昵称'])
Z([3,'cell-content'])
Z([3,'nickname'])
Z([3,'请输入昵称'])
Z(z[21])
Z([[7],[3,'nickname']])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./pages/login/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var tAF=_n('view')
_rz(z,tAF,'class',0,e,s,gg)
var eBF=_n('view')
_rz(z,eBF,'class',1,e,s,gg)
var bCF=_n('form')
_rz(z,bCF,'bindsubmit',2,e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,3,e,s,gg)){oDF.wxVkey=1
var xEF=_mz(z,'button',['bind:chooseavatar',4,'class',1,'openType',2],[],e,s,gg)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,7,e,s,gg)){oFF.wxVkey=1
var fGF=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(oFF,fGF)
}
else{oFF.wxVkey=2
var cHF=_n('view')
_rz(z,cHF,'class',10,e,s,gg)
_(oFF,cHF)
}
oFF.wxXCkey=1
_(oDF,xEF)
}
else{oDF.wxVkey=2
var hIF=_mz(z,'button',['bindtap',11,'class',1],[],e,s,gg)
var oJF=_v()
_(hIF,oJF)
if(_oz(z,13,e,s,gg)){oJF.wxVkey=1
var cKF=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(oJF,cKF)
}
else{oJF.wxVkey=2
var oLF=_n('view')
_rz(z,oLF,'class',16,e,s,gg)
_(oJF,oLF)
}
oJF.wxXCkey=1
_(oDF,hIF)
}
var lMF=_n('view')
_rz(z,lMF,'class',17,e,s,gg)
var aNF=_n('view')
_rz(z,aNF,'class',18,e,s,gg)
var tOF=_oz(z,19,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
var ePF=_n('view')
_rz(z,ePF,'class',20,e,s,gg)
var bQF=_mz(z,'input',['name',21,'placeholder',1,'type',2,'value',3],[],e,s,gg)
_(ePF,bQF)
_(lMF,ePF)
_(bCF,lMF)
var oRF=_mz(z,'button',['formType',25,'type',1],[],e,s,gg)
var xSF=_oz(z,27,e,s,gg)
_(oRF,xSF)
_(bCF,oRF)
oDF.wxXCkey=1
_(eBF,bCF)
_(tAF,eBF)
_(r,tAF)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx_XC_6, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx_XC_6( './pages/login/login.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/login/login.wxss'] = setCssToHead([".",[1],"userinfo{-webkit-align-items:center;align-items:center;color:#aaa;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"userinfo-avatar{border-radius:50%;height:",[0,128],";margin:",[0,20],";overflow:hidden;width:",[0,128],"}\n.",[1],"usermotto{padding:",[0,200]," ",[0,30]," ",[0,40],";width:100%}\n.",[1],"avatar-wrapper{-webkit-align-items:center;align-items:center;border-radius:",[0,16],";display:-webkit-flex;display:flex;height:",[0,120],"!important;-webkit-justify-content:center;justify-content:center;margin-bottom:",[0,80],";margin-top:",[0,80],";padding:0;width:",[0,120],"!important}\n.",[1],"avatar-wrapper .",[1],"avatar{height:100%;width:100%}\n.",[1],"avatar-wrapper .",[1],"iconfont{color:#b2b2b2;font-size:",[0,60],"}\n.",[1],"cell-wrap{-webkit-align-items:center;align-items:center;border-bottom:",[0,2]," solid #ddd;display:-webkit-flex;display:flex;height:",[0,120],";margin-bottom:",[0,300],";width:100%}\n.",[1],"cell-wrap .",[1],"cell-label{width:",[0,200],"}\n.",[1],"cell-wrap .",[1],"cell-content{-webkit-flex:1;flex:1}\n",],undefined,{path:"./pages/login/login.wxss"});
}
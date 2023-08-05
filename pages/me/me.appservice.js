$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/me/me.js'});require("pages/me/me.js");
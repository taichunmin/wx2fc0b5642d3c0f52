$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'clickDialog'])
Z([[7],[3,'isShow']])
Z([[2,'!'],[[7],[3,'connected']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/list/list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var oV=_mz(z,'modal',['bind:clickDialog',0,'show',1],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,2,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(r,oV)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/list/list.wxml'] = [$gwx_XC_5, './pages/list/list.wxml'];else __wxAppCode__['pages/list/list.wxml'] = $gwx_XC_5( './pages/list/list.wxml' );
	;__wxRoute = "pages/list/list";__wxRouteBegin = true;__wxAppCurrentFile__="pages/list/list.js";define("pages/list/list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard")(require("../../common/api")),t=require("../../utils/bletools"),a=require("../../utils/constants.js"),s=require("../../utils/util"),i=require("../../utils/xxtea"),o=getApp();Component({properties:{seriesId:{type:Number},search:{type:String,default:""},isLoad:{type:Boolean,default:!1},isClear:{type:Boolean,default:!1}},observers:{"seriesId,isLoad,isClear":function(e,t,a){t&&(this.setData({page:1,list:[]}),this.getGameList()),a&&this.setData({page:1,list:[]})}},data:{systemInfo:o.globalData.systemInfo,scrollTop:0,scrollHeight:0,page:1,list:[],deviceServices:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",newDevices:{},devices:[],connected:o.globalData.connected,chs:[],connectInfo:{},isShow:!1,connectTip:"",disabledScroll:!1,writeDataList:[],writeIndex:0,triggered:!1},lifetimes:{attached:function(){this.setData({connected:o.globalData.connected,connectTip:o.globalData.connected?"发送数据中":""})},ready:function(){},moved:function(){console.log("moved")},detached:function(){console.log("detached")}},methods:{onPulling:function(e){},onRefresh:function(){this._freshing||(this._freshing=!0,this.setData({page:1,disabledScroll:!1}),this.getGameList())},onRestore:function(e){},onAbort:function(e){},onLower:function(e){this.data.disabledScroll||this.getGameList()},getGameList:function(){var t=this,a=1==this.data.page?[]:this.data.list;e.gameList({page:this.data.page,size:20,seriesId:this.data.seriesId,keyword:this.data.search}).then((function(e){t.setData({triggered:!1}),t._freshing=!1;var s=e.data,i=e.code,o=e.msg;if(1e4==i){if(s&&s.rows.length){var c=a.concat(s.rows);t.setData({list:c,page:t.data.page+1,disabledScroll:c.length==s.total})}}else wx.showToast({title:o,icon:"none"})})).catch((function(){t.setData({triggered:!1}),t._freshing=!1}))},pullDownRefresh:function(){this.setData({page:1,list:[],scrollTop:0,disabledScroll:!1}),this.getGameList()},pullUpLoad:function(){this.data.disabledScroll||this.getGameList()},scroll:function(e){this.setData({scrollTop:e.detail.scrollTop})},clickDialog:function(e){this.setData({isShow:e.detail.isShow})},showDialog:function(){this.setData({isShow:!0})},clickList:function(e){if(e.currentTarget.dataset.url){var a=this,c=wx.getFileSystemManager();wx.downloadFile({url:e.currentTarget.dataset.url,success:function(e){200===e.statusCode&&c.readFile({filePath:e.tempFilePath,success:function(e){for(var c=e.data,n=s.randomNum(1e3,9999999),l=n%50,r=new Int32Array(c),d=i.xxtea_encrypt(r,l),h=s.toHex(n),g="",u=h.length-2;u>=0;u-=2)u==h.length-2?g+=h.slice(u):g+=h.slice(u,u+2);var T="cc660096"+d.slice(0,300)+"0000",f="cc660096"+d.slice(300,600)+"0001",S="cc660096"+d.slice(600,900)+"0002",D="cc66005e"+d.slice(900)+g+"0003";a.setData({writeDataList:[T,f,S,D],isShow:!0}),o.globalData.connected?(t.setThis(a),t.write("a6b6",a)):t.initBle(a)}})}})}},bleStateListener:function(e){switch(e){case a.STATE_DISCONNECTED:this.setData({connected:!1,connectTip:"设备连接断开"}),o.globalData.connected=!1,console.log("设备连接断开");break;case a.STATE_SCANNING:console.log("设备正在扫描",a.SCANING),this.setData({connectTip:"正在搜索设备"});break;case a.STATE_SCANNED:console.log("设备扫描结束",a.SCANED);break;case a.STATE_CONNECTING:console.log("设备正在连接"),this.setData({connectTip:"设备正在连接"});break;case a.STATE_CONNECTED:this.setData({connected:!0,connectTip:"设备连接成功"}),o.globalData.connected=!0,console.log("设备连接成功");break;case a.STATE_CONNECTING_ERROR:console.log("连接失败"),this.setData({connected:!1,connectTip:"连接失败"});break;case a.STATE_NOTIFY_SUCCESS:console.log("开启notify成功"),this.setData({connected:!0,connectTip:"发送数据中"}),o.globalData.connected=!0,t.write("a6b6",this);break;case a.STATE_NOTIFY_FAIL:console.log("开启notify失败");break;case a.STATE_CLOSE_BLE:console.log(a.NOT_BLE);break;case a.STATE_NOTBLE_WCHAT_VERSION:console.log(a.NOT_PERMISSION2);break;case a.STATE_NOTBLE_SYSTEM_VERSION:console.log(a.NOT_PERMISSION1);break;case a.STATE_INIT_SUCCESS:console.log("初始化蓝牙适配器成功"),this.startScanBle()}},writeListener:function(e,t){console.log(e?"发送数据成功":t,e)},notifyListener:function(e){"b6a6"==e?t.write("c6a6000400000220",this):"a6c6"==e?(t.write(this.data.writeDataList[0]),this.setData({writeIndex:1})):"66cc"==e?this.data.writeIndex>3?t.write("e33e"):(t.write(this.data.writeDataList[this.data.writeIndex]),this.setData({writeIndex:this.data.writeIndex+1})):"3ee3"==e?t.write("a55a"):"5aa5"==e&&(wx.showToast({title:"发送数据成功",icon:"success"}),this.setData({isShow:!1}))},startScanBle:function(){var e=this;t.startScanBle({success:function(a){a.forEach((function(a){if(a.name||a.localName)return a.advertisServiceUUIDs.includes(e.data.deviceServices.toLocaleUpperCase())&&-1!=a.name.indexOf("amiiboTag")?(e.setData({newDevices:a,connectTip:"开始连接"}),void t.connectBle(a)):void 0}))}},["6e400001-b5a3-f393-e0a9-e50e24dcca9e"])}}});
},{isPage:true,isComponent:true,currentFile:'pages/list/list.js'});require("pages/list/list.js");
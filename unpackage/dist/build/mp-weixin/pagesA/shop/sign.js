(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/shop/sign"],{"118e":function(t,n,e){"use strict";(function(t){e("a1f9");i(e("66fd"));var n=i(e("609e4"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"36b5":function(t,n,e){},"3bea":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("b206");var i=o(e("7f08"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([e.e("common/vendor"),e.e("components/header")]).then(function(){return resolve(e("6c1c"))}.bind(null,e)).catch(e.oe)},s=function(){Promise.all([e.e("common/vendor"),e.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(e("7308"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{details:"",title:"每日签到",sign7:[1,2,3,4,5,6,7],signData:[],sign_right:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_right.png",sign_rule:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_rule.png",sign_suc:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_suc.png",sign_core:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_core.png",sign_gift:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_gift.png",back2x:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",flag:!0,guanbi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",chengg:t.getStorageSync("endurl")+"images/icon/qiandaochengg2x.png",report_t:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/qiandao2x.png",report_f:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yiqiandao.png",loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif",dat:new Date,dat1:"",dat2:"",time:{year:"",month:"",day:""},load:!0,data_day:"",daySign:"",num:"",showFliter:!1,sign_score:"",score:"",sign_status:"",access_id:"",showSign:[],sign_num:"",complete_report:!1,active:"点击签到",lose:"今日已签",ss:1,sign_status1:!0,signFinish:!0,imgurl:"",returnR:""}},onLoad:function(t){var n=this;this.time.year=this.dat.getFullYear(),this.time.month=this.dat.getMonth()+1,this.time.day=this.dat.getDate(),this.dat1=new Date(2019,n.time.month-1,1).getDay(),this.dat2=new Date(2019,n.time.month,0).getDate()},onShow:function(){this.signFinish=!0,this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},computed:{today:function(t){return this.timeDay==t+1&&this.timeMonth==this.datMonth+1},timeDay:function(t){return this.time.day==t+1},timeMonth:function(){return this.time.month},datMonth:function(){return this.dat.getMonth()},signTextTop:function(){}},methods:{toScore:function(){var n=getCurrentPages();2==n.length&&"pages/tabBar/home"==n[0].route||3==n.length&&"pages/tabBar/home"==n[0].route&&"pages/tabBar/home"==n[1].route?t.navigateTo({url:"/pages/my/myScore"}):t.navigateBack({delta:1})},changeLoginStatus:function(){var t=this;t.access_id=t.$store.state.access_id,t._axios()},in_array:function(t,n){for(var e=0;e<n.length;e++){var i=n[e].toString();if(i==t)return!0}return!1},_back:function(){this.flag=!1,t.navigateBack({delta:1})},_complete_report:function(){this.complete_report=!0},_oncomplete_report:function(){this.complete_report=!1},_sign:function(){var n=this;console.log("===>"+this.signFinish),0!=this.sign_status&&this.signFinish&&(this.signFinish=!1,n.$refs.lktAuthorizeComp.handleAfterAuth(n,"../../pages/login/login?landing_code=1",(function(){if(1==n.sign_status){var e={module:"app",action:"sign",app:"index",access_id:n.access_id};t.request({data:e,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){var i=e.data,o=(i.score,i.sign_score),a=i.num;200==e.data.code?(n.showFliter=!0,n.sign_score=o,n.num=a):404==e.data.code?(t.showToast({title:e.data.message,duration:1500,icon:"none"}),setTimeout((function(){t.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1500)):(n.signFinish=!0,t.showToast({title:e.data.message,duration:1500,icon:"none"})),console.log(e)},error:function(t){n.signFinish=!0,console.log(t)}})}})))},_close:function(){this.showFliter=!1,this._axios()},_axios:function(){this.signData=[],console.log(this.access_id);var n=this,e={module:"app",action:"sign",app:"sign",year:this.time.year,month:this.time.month,access_id:this.access_id};t.request({data:e,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(200==e.data.code){setTimeout((function(){n.load=!1}),200),console.log(e);var o=e.data,a=o.score,s=o.sign_status,c=o.num,r=o.sign_time,u=o.imgurl,g=o.details;n.sign_status=s,0==s&&(n.sign_status1=!1),n.score=a,n.num=c,n.sign_num=r,n.imgurl=u,n.details=(0,i.default)(g);var d=[],h=new Date(2019,n.time.month,0).getDate();if(r.length>0){console.log(r);for(var l=0;l<h;l++){var m="2019-".concat(n.dat.getMonth()+1,"-").concat(l+1);d.push(m);for(var _=0;_<r.length;_++)m==r[_]&&n.showSign.push(r[_])}n.data_day=d}else{for(l=0;l<h;l++){m="2019-".concat(n.dat.getMonth()+1,"-").concat(l+1);d.push(m)}n.showSign=[],n.data_day=d}for(l=0;l<h;l++)n.in_array(n.data_day[l],n.showSign)?n.signData.push(!0):n.signData.push(!1)}else t.showToast({title:e.data.message,duration:1500,icon:"none"});console.log(n.signData)},error:function(t){console.log(t)}})}},components:{Heads:a,wxParse:s}};n.default=c}).call(this,e("543d")["default"])},4329:function(t,n,e){"use strict";var i=e("36b5"),o=e.n(i);o.a},"609e4":function(t,n,e){"use strict";e.r(n);var i=e("7478"),o=e("c834");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("4329");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"6f3e8bde",null,!1,i["a"],s);n["default"]=r.exports},7478:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},c834:function(t,n,e){"use strict";e.r(n);var i=e("3bea"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a}},[["118e","common/runtime","common/vendor"]]]);
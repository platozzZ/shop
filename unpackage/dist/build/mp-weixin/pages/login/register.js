(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"0a79":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n("63c9"),o=n("2f62"),a=n("b206"),i=n("2b43");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",guanbi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",regId:"",toHome:!1,regPWStatus1:!0,regPWStatus2:!0,regBtnStatus:!1,phone_codeStatus2:!1,fastTap:!0,passone:"",passtwo:"",phone_y:"",passone_y:"",passtwo_y:"",pwShow:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwShow.png",pwHide:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwHide.png",phone:"",phone_code:"",one_code:"",time_code:"获取验证码",timer:null,count:"",old_phone:"",flag:!0,fatherId:"",baiduHeadTop:0,Agreement:""}},onLoad:function(t){var e=this;t.fatherId&&(this.fatherId=t.fatherId);var n={module:"app",action:"login",app:"index"};this.$req.post({data:n}).then((function(t){200==t.code&&(e.Agreement=t.Agreement)}))},methods:h({_banck:function(){this.toHome?t.switchTab({url:"../tabBar/home"}):t.navigateBack({delta:2})},_landing_q:function(){this.regId="",this.flag=!1,this.regBtnStatus=!1,this.phone_codeStatus2=!1,this.phone="",this.phone_code="",this.passone="",this.passtwo="",clearInterval(this.timer),this.time_code="获取验证码",this.timer=null,this.count="",this.flag=!0,t.navigateBack({delta:1})},_close_empty:function(t){1==t?this.phone_y=!0:2==t?this.passone_y=!0:3==t&&(this.passtwo_y=!0)},_empty:function(t){1==t?this.regId="":2==t?this.password="":3==t?this.phone="":4==t?this.passone="":5==t&&(this.passtwo="")},_regIdIpt:function(t){t.target.value.length>5&&this.passone.length>5&&this.passtwo.length>5&&6==this.phone_code.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},blurReg:function(e){var n=/^[a-z0-9]{6,15}$/i;if(""!=e.target.value){var s=n.test(e.target.value);1==s||(e.target.value="",t.showToast({title:"请输入6-15位数字或字母账号！",duration:2e3,icon:"none"}))}this.regId=e.target.value},_regPW1Ipt:function(t){this.regId.length>5&&11==this.phone.length&&t.target.value.length>5&&this.passtwo.length>5&&6==this.phone_code.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_regPW2Ipt:function(t){this.regId.length>5&&11==this.phone.length&&this.passone.length>5&&this.passtwo.length>5&&t.target.value.length>5&&6==this.phone_code.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_passone:function(){this.passone_y=!1;var e=/^[a-z0-9]{6,15}$/i;if(""!=this.passone){var n=e.test(this.passone);1==n||(this.passone="",t.showToast({title:"请输入6-15位数字或字母密码！",duration:3e3,icon:"none"}))}},_passtwo_t:function(){this.passtwo_y=!1,this.passone!=this.passtwo&&t.showToast({title:"确认密码与密码不一致",duration:1e3,icon:"none"})},pwStatus:function(t){(0,i.lkt_pwStatus)(t,this)},_regPhoneIpt:function(t){11==t.target.value.length&&this.passone.length>5&&this.passtwo.length>5&&6==this.phone_code.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_telephone:function(t,e){this.one_code=(0,s.telephone)(t),(0,i.lkt_telephone)(e,this)},_phone_code:function(t){(0,i.lkt_phone_code)(t,this)},_regCodeIpt:function(t){this.regId.length>5&&11==this.phone.length&&this.passone.length>5&&this.passtwo.length>5&&6==t.target.value.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_register:function(){var e=this;if(this.phone&&1==this.one_code&&this.passone==this.passtwo&&this.passone){if(!this.fastTap)return;this.fastTap=!1;var n={module:"app",action:"login",app:"user_register",phone:this.phone,password:this.passone,access_id:this.$store.state.access_id,keyCode:this.phone_code,userId:this.regId};""!=this.fatherId&&(n.pid=this.fatherId),n.store_type=1;var s=t.getStorageSync("url");t.request({data:n,url:s,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){e.fastTap=!0;var s=n.data,o=s.code,i=s.message,r=s.access_id,h=(s.y_password,s.wx_status);200==o&&r?(t.showToast({title:"注册成功！",duration:1e3,icon:"none"}),t.setStorageSync("LoingByHand",!0),e.access_id(r),(0,a.setStorage)("access_id",r),setTimeout((function(){t.reLaunch({url:"../tabBar/my",success:function(){1!=h&&(e.$store.state.shouquan=!0)}})}),1e3)):t.showToast({title:i,icon:"none"})},error:function(){e.fastTap=!0}})}else 1!=this.one_code?t.showToast({title:"请输入正确的手机号码！",duration:1e3,icon:"none"}):6!=this.phone_code.length?t.showToast({title:"验证码输入错误！",duration:1e3,icon:"none"}):this.passone!=this.passtwo&&this.passone?t.showToast({title:"两次密码输入不一致，请重新输入！",duration:1e3,icon:"none"}):t.showToast({title:"请填写完整信息！",duration:1e3,icon:"none"})},_navigateTo:function(e){t.navigateTo({url:e})}},(0,o.mapMutations)({access_id:"SET_ACCESS_ID",user_phone:"SET_USER_PHONE"})),computed:{halfWidth:function(){var e=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,n=parseInt(e),s=2*n;return t.upx2px(s)+"px"}}};e.default=u}).call(this,n("543d")["default"])},"26d8":function(t,e,n){"use strict";var s=n("ecc8"),o=n.n(s);o.a},"36e2":function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s}))},"5edd":function(t,e,n){"use strict";(function(t){n("a1f9");s(n("66fd"));var e=s(n("e93c"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},9226:function(t,e,n){"use strict";n.r(e);var s=n("0a79"),o=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=o.a},e93c:function(t,e,n){"use strict";n.r(e);var s=n("36e2"),o=n("9226");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("26d8");var i,r=n("f0c5"),h=Object(r["a"])(o["default"],s["b"],s["c"],!1,null,"2ffa7611",null,!1,s["a"],i);e["default"]=h.exports},ecc8:function(t,e,n){}},[["5edd","common/runtime","common/vendor"]]]);
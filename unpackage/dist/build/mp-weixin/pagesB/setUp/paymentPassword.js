(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/setUp/paymentPassword"],{"03f8":function(t,e,n){"use strict";n.r(e);var s=n("a054"),o=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=o.a},"45b2":function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s}))},9164:function(t,e,n){"use strict";var s=n("e766"),o=n.n(s);o.a},a054:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("b206");var s=function(){Promise.all([n.e("common/vendor"),n.e("components/header")]).then(function(){return resolve(n("6c1c"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/toload").then(function(){return resolve(n("b4d3"))}.bind(null,n)).catch(n.oe)},a={data:function(){return{del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",load:!1,title:"修改支付密码",oldpassword:"",input_oldpassword:"",newpassword:"",againpassword:"",access_id:"",codeone:"",user_phone:"",count:"",display:!0,rez:"",timer:null,fastTap:!0}},created:function(){var e=this;e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){if(e.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):e.$store.state.access_id,e.user_phone=t.getStorageSync("user_phone")?t.getStorageSync("user_phone"):e.$store.state.user_phone,e.load=!0,!e.user_phone)return t.showToast({title:"请先绑定手机号码！",duration:1e3,icon:"none"}),void t.navigateTo({url:"changePhone"})}))}))},components:{Heads:s,toload:o},watch:{newpassword:function(t,e){this.$nextTick((function(){t.toString().length>6&&(this.newpassword=e)}))},againpassword:function(t,e){this.$nextTick((function(){t.toString().length>6&&(this.againpassword=e)}))}},methods:{changeLoginStatus:function(){var e=this;e.access_id=t.getStorageSync("access_id")},_time:function(){var t=this,e=60;this.timer||(this.display=!1,this.count=e,this.timer=setInterval((function(){t.count>0&&t.count<=e?t.count--:(t.display=!0,clearInterval(t.timer),t.timer=null)}),1e3))},_verif:function(){var e=this;if(this.fastTap){this.fastTap=!1;var n={module:"app",action:"user",app:"secret_key",phone:this.user_phone,message_type:0,message_type1:5};console.log(n),t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){e.fastTap=!0;var s=n.data,o=s.code,a=s.message;if(200!=o)t.showToast({title:a,duration:1e3,icon:"none"});else if(200==o){e._time();var i=300,c=i;console.log(i,c);var r=setInterval((function(){c>0&&c<=i?(c--,console.log(c)):(clearInterval(r),r=null,e.code="")}),1e3)}console.log(n)},error:function(t){console.log(t),e.fastTap=!0}})}},_empty:function(t){0==t?this.input_oldpassword="":1==t?this.newpassword="":2==t&&(this.againpassword="")},_newpassword:function(){var e=/^\d{6}$/;if(""!=this.newpassword){if(this.rez=e.test(this.newpassword),1==this.rez)return;this.newpassword="",t.showToast({title:"请输入6位数字密码",duration:1e3,icon:"none"})}},_againpassword:function(){if(""!=this.againpassword){if(this.newpassword==this.againpassword)return;t.showToast({title:"两次密码输入不一致！",duration:1e3,icon:"none"})}},_sub:function(){var e=/^\d{6}$/;""!=this.newpassword&&(this.rez=e.test(this.newpassword));var n=this;if(this.fastTap)if(this.fastTap=!1,""==this.newpassword||""==this.againpassword||6!=this.codeone.length)t.showToast({title:"请填写正确信息！",duration:1e3,icon:"none",success:function(t){n.fastTap=!0}});else if(this.rez)if(""!=this.againpassword&&this.newpassword!=this.againpassword)t.showToast({title:"两次密码输入不一致！",duration:1e3,icon:"none",success:function(t){n.fastTap=!0}});else if(6!=this.codeone.length)t.showToast({title:"请输入正确的验证码！",duration:1e3,icon:"none",success:function(t){n.fastTap=!0}});else if(""!=this.newpassword&&this.newpassword==this.againpassword&&6==this.codeone.length){var s={module:"app",action:"user",app:"modify_payment_password",access_id:this.access_id,x_password:this.newpassword,phoneNum:this.user_phone,keyCode:this.codeone};t.request({data:s,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){n.fastTap=!0,console.log(e);var s=e.data,o=s.code,a=s.message;200==o?(t.showToast({title:"修改成功！",duration:1500,icon:"none",success:function(t){n.fastTap=!0}}),setTimeout((function(){t.navigateBack({url:"../../pagesB/setUp/setUp"})}),1500)):t.showToast({title:a,duration:1e3,icon:"none"})},error:function(t){console.log(t),n.fastTap=!0}})}else t.showToast({title:"请填写正确信息！",duration:1e3,icon:"none",success:function(t){n.fastTap=!0}});else t.showToast({title:"请输入6位数新密码",duration:1e3,icon:"none",success:function(t){n.fastTap=!0}})}}};e.default=a}).call(this,n("543d")["default"])},c44d:function(t,e,n){"use strict";(function(t){n("a1f9");s(n("66fd"));var e=s(n("eb15"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e766:function(t,e,n){},eb15:function(t,e,n){"use strict";n.r(e);var s=n("45b2"),o=n("03f8");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9164");var i,c=n("f0c5"),r=Object(c["a"])(o["default"],s["b"],s["c"],!1,null,"9d3cf036",null,!1,s["a"],i);e["default"]=r.exports}},[["c44d","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-setUp-changePhone"],{"344b":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".border[data-v-2e61f961]{border-bottom:0 solid #eee!important}.head[data-v-2e61f961]{position:fixed;left:0;top:0;background-color:#fff;width:100%;z-index:9999;border-bottom:1px solid #eee}.head .white[data-v-2e61f961]{background:#fff}.header[data-v-2e61f961]{color:#fff;border:none}.header img[data-v-2e61f961]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-2e61f961]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-2e61f961]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-2e61f961]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-2e61f961]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-2e61f961]{background:transparent;border-bottom:0}.title_w[data-v-2e61f961]{color:#fff!important}",""]),e.exports=t},"3cea":function(e,t,n){"use strict";n.r(t);var a=n("f181"),o=n("e1de");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("6923");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"1c645388",null,!1,a["a"],s);t["default"]=c.exports},"3cf1":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".toload[data-v-760eb09a]{\n\t/* min-height: calc(100vh - 90rpx); */}.t-h[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:calc(100vh - %?200?%)}.loadbox[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%;height:%?200?%;border-radius:%?10?%;background-color:rgba(0,0,0,.6);margin:0 auto}.loadbox-img[data-v-760eb09a]{width:%?40?%;height:%?40?%;margin:%?50?% 0 %?20?% 0}.loadbox-text[data-v-760eb09a]{margin-top:%?20?%;color:#fff}",""]),e.exports=t},4284:function(e,t,n){"use strict";n.r(t);var a=n("a7c6"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"4dee":function(e,t,n){"use strict";var a=n("58d2"),o=n.n(a);o.a},"58d2":function(e,t,n){var a=n("344b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("74ed8ca1",a,!0,{sourceMap:!1,shadowMode:!1})},5937:function(e,t,n){"use strict";n.r(t);var a=n("e7e8"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"63c9":function(e,t,n){"use strict";function a(e,t){var n=/^\w{6,20}$/g,a=n.test(e);1==a?uni.showToast({title:"格式正确！",duration:1e3,icon:"none"}):""==e?(t.style.display="block",t.innerHTML="用户名不能为空",uni.showToast({title:"用户名不能为空",duration:1e3,icon:"none"})):(t.style.display="block",e="")}function o(e,t,n){var a=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,o=a.test(e);1==o||(""==e?uni.showToast({title:"密码不能为空！",duration:1e3,icon:"none"}):uni.showToast({title:"请输入6-16位数密码（数字和字母组合）！",duration:1e3,icon:"none"}))}function i(e,t){if(e==t&&""!=t)return 1;""==t?uni.showToast({title:"请输入确认密码！",duration:1e3,icon:"none"}):uni.showToast({title:"两次输入不一致！",duration:1e3,icon:"none"})}function s(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/,n=t.test(e);return 1==n&&11==e.length?1:""==e?2:(console.log(111111),uni.showToast({title:"请输入正确的手机号！",duration:1e3,icon:"none"}),3)}function r(e,t){var n=60;e||(t=n,e=setInterval((function(){t>0&&t<=n?t--:(clearInterval(e),e=null)}),1e3))}function c(e){e="",console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.onblur=a,t.pass=o,t.confirmpass=i,t.telephone=s,t.time=r,t.empty=c},6923:function(e,t,n){"use strict";var a=n("bedc"),o=n.n(a);o.a},"6a89":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:"display:flex;height:"+e.BoxHeight},[n("div",{staticClass:"head",class:{head_w:"1"==e.ishead_w,border:1==e.border}},[n("div",{class:{white:!e.navWhite},style:{height:e.halfWidth}}),n("div",{staticClass:"header"},[e.flag&&!e.returnFlag?n("div",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._back1.apply(void 0,arguments)}}},["1"==e.ishead_w?n("img",{attrs:{src:e.back1}}):n("img",{attrs:{src:e.back}})]):e._e(),e.flag||e.returnFlag?e._e():n("img",{staticClass:"header_img",attrs:{src:e.bback},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._back1.apply(void 0,arguments)}}}),n("p",{class:{title_w:"1"==e.ishead_w}},[e._v(e._s(e.title))])])])])},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},"6c1c":function(e,t,n){"use strict";n.r(t);var a=n("6a89"),o=n("4284");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("4dee");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"2e61f961",null,!1,a["a"],s);t["default"]=c.exports},"983d":function(e,t,n){var a=n("3cf1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("33c5f44a",a,!0,{sourceMap:!1,shadowMode:!1})},9914:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".setup-ul>li[data-v-1c645388]{padding:%?30?% 0;font-size:%?30?%;border-bottom:1px solid #eee}.setup-ul>li span[data-v-1c645388]{margin-right:%?30?%}.last[data-v-1c645388]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.color[data-v-1c645388],\r\n.active[data-v-1c645388]{margin-right:0!important;font-size:%?24?%;cursor:pointer}.last uni-input[data-v-1c645388]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.active[data-v-1c645388]{color:#9d9d9d}.input[data-v-1c645388]{width:%?300?%}.setup-buttom[data-v-1c645388]{border-radius:%?8?%;background-color:#9a9a9a}.sure[data-v-1c645388]{background-color:#020202}\r\n\r\n/* 优化 */.yh-setup-ul[data-v-1c645388]{position:relative}.yh-color[data-v-1c645388]{font-size:%?28?%}.yh-time[data-v-1c645388]{margin:0!important;font-size:%?28?%}.yh-setupButtomWrap[data-v-1c645388]{margin-top:%?70?%}.yh-isSure[data-v-1c645388]{width:%?690?%;height:%?90?%}",""]),e.exports=t},a5f4:function(e,t,n){"use strict";var a=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("6c1c")),i=a(n("b4d3")),s=n("63c9"),r=(n("b206"),{data:function(){return{title:"修改手机号码",display:!0,count:"",timer:null,code:"",newphone:"",passtwo:"",codeone:"",oldphone:"",phone_next:"",access_id:"",fastTap:!0,isSure:!1,load:!1}},mounted:function(){var e=this;setTimeout((function(){console.log("=====>"),console.log(e.$refs),e.$refs.lktAuthorizeComp&&e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){e.oldphone=uni.getStorageSync("user_phone")?uni.getStorageSync("user_phone"):e.$store.state.user_phone,e.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):e.$store.state.access_id,e.load=!0}))}),100)},onLoad:function(e){var t=this,n=uni.getStorageSync("needRegister"),a=uni.getStorageSync("LoingByHand"),o=!a&&n==t.LaiKeTuiCommon.LKT_NRL_TYPE.NRL;o&&(t.title="绑定手机号")},methods:{changeLoginStatus:function(){var e=this;e.access_id=uni.getStorageSync("access_id")},_changeStep:function(e){11==e.detail.value.length&&6==this.codeone.length?this.isSure=!0:6==e.detail.value.length&&11==this.newphone.length?this.isSure=!0:this.isSure=!1},_telephone:function(){this.oldphone!=this.newphone?this.phone_next=(0,s.telephone)(this.newphone):uni.showToast({title:"新号码与旧号码一致！",duration:1e3,icon:"none"})},_verif:function(){if(this.fastTap){this.fastTap=!1;var e=this,t={module:"app",action:"user",app:"secret_key",phone:this.newphone,message_type:0,message_type1:3};this.newphone?uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){e.fastTap=!0;var n=t.data,a=n.code,o=n.message;if(200!=a)uni.showToast({title:o,duration:1e3,icon:"none"});else if(200==a){e._time();var i=300,s=i;console.log(i,s);var r=setInterval((function(){s>0&&s<=i?s--:(clearInterval(r),r=null,e.code="")}),1e3)}console.log(t)},error:function(t){console.log(t),e.fastTap=!0}}):(this.fastTap=!0,uni.showToast({title:"未获取到正确的手机号码！",duration:1e3,icon:"none"}))}},_time:function(){var e=this,t=60;this.timer||(this.display=!1,this.count=t,this.timer=setInterval((function(){e.count>0&&e.count<=t?e.count--:(e.display=!0,clearInterval(e.timer),e.timer=null)}),1e3))},_sub:function(){if(this.fastTap){this.fastTap=!1;var e=this;if(console.log(this.codeone,this.code,this.newphone,this.oldphone),""==this.codeone||""==this.newphone?uni.showToast({title:"请填写完整信息！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}}):6!=this.codeone.length?uni.showToast({title:"验证码错误！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}}):this.oldphone!=this.newphone?(this.fastTap=!0,this.phone_next=(0,s.telephone)(this.newphone)):this.oldphone==this.newphone&&uni.showToast({title:"您输入的手机号码与原号码相同，请重新输入！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}}),6==this.codeone.length&&""!=this.newphone&&this.oldphone!=this.newphone&&1==this.phone_next){var t={module:"app",action:"user",app:"update_phone",access_id:this.access_id,y_phone:this.oldphone,x_phone:this.newphone,keyCode:this.codeone};console.log(t),uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){e.fastTap=!0,console.log(t);var n=t.data,a=n.code,o=n.message;200==a?(uni.showToast({title:"修改成功！",duration:1e3,icon:"none"}),setTimeout((function(){e.$store.state.access_id="",uni.removeStorageSync("access_id"),uni.removeStorageSync("user_phone"),e.$store.state.user_phone="",uni.reLaunch({url:"../../pages/login/login"})}),1e3)):uni.showToast({title:o,duration:1e3,icon:"none"})},error:function(t){console.log(t),e.fastTap=!0}})}else this.fastTap=!0;console.log(this.phone_next)}}},components:{Heads:o.default,toload:i.default}});t.default=r},a7c6:function(e,t,n){"use strict";var a=n("ee27");n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("f3f3")),i=n("2f62"),s=n("b206"),r={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var e=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,t=parseInt(e);return t+"px"},BoxHeight:function(){var e=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,t=0,n=parseInt(e)+uni.upx2px(88);return t=n&&n>0?n:uni.upx2px(88),t+"px"}},onLoad:function(e){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,o.default)({},(0,i.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};t.default=r},ae8a:function(e,t,n){"use strict";var a=n("983d"),o=n.n(a);o.a},b206:function(e,t,n){"use strict";function a(e,t){uni.setStorage({key:e,data:t,success:function(){console.log("setSuccess")}})}function o(e){var t;return uni.getStorage({key:e,success:function(e){t=e.data,console.log("getSuccess")}}),t}function i(e){uni.removeStorage({key:e,success:function(e){console.log("removeSuccess")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setStorage=a,t.getStorage=o,t.removeStorage=i},b4d3:function(e,t,n){"use strict";n.r(t);var a=n("cda2"),o=n("5937");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("ae8a");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"760eb09a",null,!1,a["a"],s);t["default"]=c.exports},bedc:function(e,t,n){var a=n("9914");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("175ac0d1",a,!0,{sourceMap:!1,shadowMode:!1})},cda2:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"toload"},[e.load?e._t("default"):n("v-uni-view",{staticClass:"t-h"},[n("v-uni-view",{staticClass:"loadbox"},[n("v-uni-image",{staticClass:"loadbox-img",attrs:{src:e.loadGif,mode:""}}),n("v-uni-view",{staticClass:"loadbox-text"},[e._v("加载中…")])],1)],1)],2)},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},e1de:function(e,t,n){"use strict";n.r(t);var a=n("a5f4"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},e7e8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif"}},props:["load"]};t.default=a},f181:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(t){arguments[0]=t=e.$handleEvent(t),e.changeLoginStatus.apply(void 0,arguments)}}}),n("heads",{attrs:{title:e.title}}),n("toload",{attrs:{load:e.load}},[n("ul",{staticClass:"setup-ul yh-setup-ul"},[n("li",[n("v-uni-input",{attrs:{"placeholder-style":"color: #b8b8b8;",type:"number",placeholder:"请输入有效的手机号码"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e._changeStep.apply(void 0,arguments)}},model:{value:e.newphone,callback:function(t){e.newphone=t},expression:"newphone"}})],1),n("li",{staticClass:"last"},[n("v-uni-input",{staticClass:"input",attrs:{"placeholder-style":"color: #b8b8b8;",type:"number",placeholder:"请输入手机验证码"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e._changeStep.apply(void 0,arguments)}},model:{value:e.codeone,callback:function(t){e.codeone=t},expression:"codeone"}}),e.display?n("div",{staticClass:"color yh-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._verif.apply(void 0,arguments)}}},[e._v("获取验证码")]):e._e(),e.display?e._e():n("div",{staticClass:"active yh-color"},[n("span",{ref:"time",staticClass:"yh-time"},[e._v(e._s(e.count)+"S")]),e._v("后再次获取")])],1),n("li",{staticClass:"yh-setupButtomWrap",attrs:{id:"setupButtomWrap"}},[n("div",{staticClass:"setup-buttom yh-isSure",class:{sure:e.isSure},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._sub.apply(void 0,arguments)}}},[e._v("确认")])])])])],1)},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/shop/coupon"],{"00aa":function(o,n,t){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t("b206");var i=function(){Promise.all([t.e("common/vendor"),t.e("components/header")]).then(function(){return resolve(t("6c1c"))}.bind(null,t)).catch(t.oe)},e={data:function(){return{returnR:"",back:"",title:"领券中心",access_id:"",list:!1,receive_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lingqu2x.png",noreceive_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/qiangguang2x.png",back_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",huiquan_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/huiquan2x.png",coupon_on:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/coupon_on.png",coupon_no:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_no.png",coupon_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_bg.png",coupon_bg1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_bg1.png",fastTap:!0,frompage:"",noCoupon:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noCoupon.png",loopStatu:!0,isNone:[]}},onLoad:function(o){o.loop&&(this.loopStatu=!1)},onShow:function(){var n=this;n.$nextTick((function(){n.access_id=o.getStorageSync("access_id")?o.getStorageSync("access_id"):n.$store.state.access_id,n.list||o.showLoading({title:"加载中...",mask:!0}),n._axios()}))},methods:{changeLoginStatus:function(){var o=this;o.access_id=o.$store.state.access_id,o._axios()},_mycoupon:function(){var n=this;n.$refs.lktAuthorizeComp.handleAfterAuth(n,"../../pages/login/login?landing_code=coupon",(function(){o.navigateTo({url:"../../pagesB/coupon/mycoupon?loop=false"})}))},_axios:function(){var n=this,t=this,i={module:"app",action:"Coupon",app:"index",access_id:this.access_id};o.request({data:i,url:o.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){o.hideLoading();var e=i.data.list;if(t.list=e,t.fastTap=!0,e&&e.length){for(var a=[],c=0;c<e.length;c++)a.push(!1),"已抢光"==e[c].point&&(a[c]=!0);n.isNone=a}},error:function(o){console.log(o)}})},_receive:function(n,t,i,e){var a=this;if("立即领取"==i){if(!this.fastTap)return;if(this.fastTap=!1,!this.access_id)return o.showToast({title:"未登录，请先登录",duration:1500,icon:"none"}),void setTimeout((function(){o.navigateTo({url:"../../pages/login/login?landing_code=coupon"})}),1500);var c={module:"app",action:"Coupon",app:"receive",access_id:this.access_id,id:t};o.request({data:c,url:o.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){console.log(222),console.log(n);var t=n.data.code;200==t?(o.showToast({title:"领取成功",duration:1500,icon:"none"}),setTimeout((function(){a._axios()}),1500)):404==t?(o.showToast({title:n.data.message,duration:1500,icon:"none"}),setTimeout((function(){o.navigateTo({url:"../../pages/login/login?landing_code=coupon"})}),1500)):(o.showToast({title:n.data.message,duration:1500,icon:"none"}),setTimeout((function(){a._axios()}),1500))},error:function(o){a.fastTap=!0}})}else if("去使用"==i){if(!this.fastTap)return;this.fastTap=!1,e.indexOf("tabBar")>0?o.switchTab({url:e}):o.navigateTo({url:e})}}},components:{heads:i}};n.default=e}).call(this,t("543d")["default"])},"2c99":function(o,n,t){"use strict";t.r(n);var i=t("9753"),e=t("97b8");for(var a in e)"default"!==a&&function(o){t.d(n,o,(function(){return e[o]}))}(a);t("c373");var c,s=t("f0c5"),u=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"12cb61de",null,!1,i["a"],c);n["default"]=u.exports},5475:function(o,n,t){"use strict";(function(o){t("a1f9");i(t("66fd"));var n=i(t("2c99"));function i(o){return o&&o.__esModule?o:{default:o}}o(n.default)}).call(this,t("543d")["createPage"])},9753:function(o,n,t){"use strict";var i,e=function(){var o=this,n=o.$createElement;o._self._c},a=[];t.d(n,"b",(function(){return e})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"97b8":function(o,n,t){"use strict";t.r(n);var i=t("00aa"),e=t.n(i);for(var a in i)"default"!==a&&function(o){t.d(n,o,(function(){return i[o]}))}(a);n["default"]=e.a},c0d5:function(o,n,t){},c373:function(o,n,t){"use strict";var i=t("c0d5"),e=t.n(i);e.a}},[["5475","common/runtime","common/vendor"]]]);
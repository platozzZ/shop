(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/myWallet/recharge"],{"13fd":function(e,t,i){"use strict";(function(e){i("a1f9");n(i("66fd"));var t=n(i("7ac1"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"59d5":function(e,t,i){"use strict";i.r(t);var n=i("cb18"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"7ac1":function(e,t,i){"use strict";i.r(t);var n=i("a00b"),a=i("59d5");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("ea44");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ffdd33c0",null,!1,n["a"],c);t["default"]=r.exports},a00b:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},cb18:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("4795"));i("b206");function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,i,n,a,o,c){try{var s=e[o](c),r=s.value}catch(u){return void i(u)}s.done?t(r):Promise.resolve(r).then(n,a)}function c(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var c=e.apply(t,i);function s(e){o(c,n,a,s,r,"next",e)}function r(e){o(c,n,a,s,r,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([i.e("common/vendor"),i.e("components/header")]).then(function(){return resolve(i("6c1c"))}.bind(null,i)).catch(i.oe)},r={data:function(){return{open_alipay:!1,open_wxpay:!1,title:"充值",pay_y:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yuezhifu2x.png",pay_b:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lALPBb.png",quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehei2x.png",pay_bd:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/baiduzhifu2x.png",pay_zhifub:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/zhifubaozhifu2x.png",pay_weix:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/weixinzhifu2x.png",pay:[{img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/zhifubaozhifu2x.png",name:"支付宝"},{img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/weixinzhifu2x.png",name:"微信支付"}],pay_index:-1,pay_style:"",price:"",enterPay:!1,access_id:"",fastTap:!0,pay_provider:"",aliPayStatue:!1,wxPayStatue:!1,order_list:"",code:"",firstFlag:!0,value_inp:"",min_amount:"",rechargeTitle:"",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",payment:{}}},mounted:function(){var t=this;t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){t.access_id=e.getStorageSync("access_id")?e.getStorageSync("access_id"):t.$store.state.access_id,t._pay(1),t._axios()}))}))},onShow:function(){},watch:{price:function(e,t){this.$nextTick((function(){if(e>.01)if(0==Math.abs(e-t)){this.enterPay=!0;var i=Number(e);isNaN(i)?this.price="0":this.price=i}else if(Math.abs(e-t)<.01){this.enterPay=!0;var n=Number(e).toFixed(2);isNaN(n)?this.price="0":this.price=n}else{this.enterPay=!0;var a=Number(e);isNaN(a)?this.price="0":this.price=a}else this.enterPay=!1}))}},methods:{isPayShow:function(){console.log("============>");var e=this;console.log("me.payment================="+e.payment.mini_wechat),1==e.payment.mini_wechat&&(e.open_wxpay=!0),console.log("############"),console.log(e.payment),console.log("============>")},changeLoginStatus:function(){var t=this;t.access_id=e.getStorageSync("access_id"),t._axios()},_back:function(){e.navigateBack({delta:1})},_axios:function(){var t=this,i={module:"app",action:"recharge",app:"index",access_id:this.access_id};e.request({data:i,url:e.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){200==e.data.code&&(t.min_amount=e.data.min_cz,t.payment=e.data.payment,t.rechargeTitle="金额不小于".concat(t.min_amount,"元 !"),t.isPayShow())}})},_money:function(t){var i=this;console.log(i.min_amount),i.price=Number(t.detail.value);var n=Number(i.min_amount);i.price<n&&(i.price="",e.showToast({title:"充值金额不小于".concat(n,"元,请重新输入!"),duration:1500,icon:"none"})),i.fastTap=!0},toUrl:function(){var t=this,i=window.location.href,n=e.getStorageSync("access_id"),a={type:"jsapi_wechat",access_id:n,app:"get_config",module:"app",action:"commcenter",url:i};e.request({data:a,url:e.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){if(console.log(i),200==i.data.code){var n=i.data.data.config.appid;t.myappid=n;var a=i.data.data.url,o="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n+"&redirect_uri="+a+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";window.location.href=o}else e.showToast({title:i.data.message,duration:1500,icon:"none"})},error:function(e){console.log(e)}})},_checkValue:function(e){var t=this;console.log(t.min_amount),t.price=Number(e.detail.value);var i=Number(t.min_amount);t.price<i?t.fastTap=!1:t.fastTap=!0},pay1:function(){var t=this,i=t.LaiKeTuiCommon.ttIOSCantVisualpay();if(i&&this.fastTap){if(this.fastTap=!1,this.firstFlag=!1,""==this.price)return e.showToast({title:"请输入充值金额！",duration:1e3,icon:"none"}),this.fastTap=!0,void(this.firstFlag=!0);e.showLoading({title:"正在请求支付...",mask:!0}),this.weixinPay()}},baidu_pay:function(){},tt_pay:function(){},getOrderInfo:function(t){var i=this;if(console.log("start##getOrderInfo"),console.log(t),!t)return e.showToast({title:"请选择支付方式！",duration:1e3,icon:"none"}),void(i.firstFlag=!0);(new Date).getTime();var n={access_id:this.access_id,order_list:i.order_list,sNo:i.getCZNo(),title:"充值",module:"app",action:"pay",type:t,total:i.price};e.hideLoading(),console.log("获取请求数据:");var a=i.LaiKeTuiCommon.getMPAliAuthCode();return a.then((function(t){return new Promise((function(t,i){console.log(e.getStorageSync("url")),console.log(JSON.stringify(n,null,4)),e.request({url:e.getStorageSync("url"),data:n,success:function(e){200==e.statusCode&&t(e)},fail:function(e){}})}))}))},getCZNo:function(){var e=(new Date).getTime();return"CZ"+e+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())},alipay_minipay:function(){},rechargeSuccess:function(t){var i=this;setTimeout((function(){e.redirectTo({url:"rechargeSuccess?mylei=1&money="+i.price+"&_type="+t})}),1e3)},weixinPay:function(){var t=this,i=this;this.loading=!0,e.login({provider:"weixin",success:function(n){var a="mini_wechat",o={code:n.code,access_id:t.access_id,sNo:i.getCZNo(),title:"充值",module:"app",action:"pay",type:a,total:i.price};console.log(JSON.stringify(o,null,4)),e.request({url:e.getStorageSync("url"),data:o,success:function(t){if(console.log(JSON.stringify(t,null,4)),200===t.statusCode)if(200==t.statusCode){var n=t.data;console.log("@@"),console.log(JSON.stringify(n)),e.requestPayment({provider:"wxpay",timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:"MD5",paySign:n.paySign,success:function(t){e.showToast({title:"充值成功！",duration:1e3,icon:"none"}),setTimeout((function(){e.redirectTo({url:"rechargeSuccess?mylei=1&type=wx&_type=wx&money="+i.price})}),1e3),e.hideLoading()},fail:function(t){e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){i.fastTap=!0}}),e.hideLoading()}})}else e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){i.fastTap=!0}}),e.hideLoading();else e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){i.fastTap=!0}})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){i.fastTap=!0}}),e.hideLoading()}})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){i.fastTap=!0}}),e.hideLoading()}})},_payFail:function(){var t=this;e.showModal({title:"提示",content:"支付失败，返回我的钱包！",success:function(i){console.log(i),t.firstFlag=!0,console.log("NOT_H5"),t.$store.state.payRes=t.order_list,i.confirm?e.redirectTo({url:"./myWallet"}):i.cancel&&e.switchTab({url:"../../pages/tabBar/home"})}})},pay_wx:function(){var t=this;return c(n.default.mark((function i(){var a,o,c,s;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t,o="app_wechat",1,c="",console.log("this.pay_provider："+t.pay_provider),"alipay"==a.pay_provider?(c="alipay",o="alipay"):(c="wxpay",2),console.log("############"+o),i.next=9,a.getOrderInfo(o);case 9:s=i.sent,console.log(JSON.stringify(s)),console.log(JSON.stringify(s,null,4)),200!==s.statusCode&&a._payFail(),e.hideLoading(),e.requestPayment({provider:c,orderInfo:s.data,success:function(t){console.log("success:"+JSON.stringify(t)),e.showToast({title:"充值成功！",duration:1e3,icon:"none"});var i="rechargeSuccess?mylei=1&money="+a.price;"alipay"==c?i+="&_type=alipay":"wxpay"==c&&(i+="&_type=wx"),setTimeout((function(){e.redirectTo({url:i})}),1e3)},fail:function(t){e.showModal({title:"提示",content:"充值失败,请稍后再试",success:function(e){}}),console.log("fail:"+JSON.stringify(t))}});case 15:case"end":return i.stop()}}),i)})))()},_pay:function(e){this.pay_index=e,this.pay_style=e+1,0==e?this.pay_provider="alipay":1==e?this.pay_provider="app_wechat":2==e&&(this.pay_provider="baidu_pay")}},components:{heads:s}};t.default=r}).call(this,i("543d")["default"])},e55b:function(e,t,i){},ea44:function(e,t,i){"use strict";var n=i("e55b"),a=i.n(n);a.a}},[["13fd","common/runtime","common/vendor"]]]);
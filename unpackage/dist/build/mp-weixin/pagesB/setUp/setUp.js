(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/setUp/setUp"],{"11f2":function(e,t,a){"use strict";a.r(t);var n=a("876c"),o=a("ac0d");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("191b");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7b038ba6",null,!1,n["a"],r);t["default"]=c.exports},"191b":function(e,t,a){"use strict";var n=a("b023"),o=a.n(n);o.a},"52fe":function(e,t,a){"use strict";(function(e){a("a1f9");n(a("66fd"));var t=n(a("11f2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},6136:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("2f62");a("b206");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(){Promise.all([a.e("common/vendor"),a.e("components/header")]).then(function(){return resolve(a("6c1c"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",title:"设置",name:"",id:"",user_id:"",size:"",number_s:"",havePass:!1,havePass1:!1,lktauthflag:!1,bindPhone:"修改手机号",showSetPayPswdFlag:!0,load:!0,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/loading.gif"}},mounted:function(){this.load=!0;var t=this;t.access_id=e.getStorageSync("access_id")?e.getStorageSync("access_id"):t.$store.state.access_id,t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../../pages/login/login?landing_code=1",(function(){t._axios();var a=e.getStorageSync("needRegister"),n=e.getStorageSync("LoingByHand");t.lktauthflag=!n&&a==t.LaiKeTuiCommon.LKT_NRL_TYPE.NRL,t.lktauthflag&&(t.bindPhone="绑定手机号")}))}))},onLoad:function(e){},methods:i({},(0,n.mapMutations)({access_id:"SET_ACCESS_ID"}),{changeLoginStatus:function(){var t=this,a=e.getStorageSync("needRegister"),n=e.getStorageSync("LoingByHand");t.access_id=t.$store.state.access_id,t.lktauthflag=!n&&a==t.LaiKeTuiCommon.LKT_NRL_TYPE.NRL,t.lktauthflag&&(t.bindPhone="绑定手机号"),t._axios()},laikeNavigateTo:function(t,a){var n=this,o=e.getStorageSync("needRegister"),i=e.getStorageSync("LoingByHand");n.lktauthflag=!i&&o==n.LaiKeTuiCommon.LKT_NRL_TYPE.NRL;var r=e.getStorageSync("user_phone")?e.getStorageSync("user_phone"):n.$store.state.user_phone;!n.lktauthflag||r?e.navigateTo({url:a+"?havePass="+this.havePass1}):e.showToast({title:"您未绑定手机号码，请先绑定手机号.",duration:1e3,icon:"none"})},_axios:function(){var t={access_id:this.access_id,module:"app",action:"user",app:"set"},a=this;this.$req.post({data:t}).then((function(t){var n=e.getStorageSync("needRegister"),o=e.getStorageSync("LoingByHand");200==t.code&&(1==t.password_status?a.havePass=!0:0==t.password_status&&(a.havePass=!1),1==t.mima_status?a.havePass1=!0:0==t.mima_status&&(a.havePass1=!1),a.lktauthflag=!o&&n==a.LaiKeTuiCommon.LKT_NRL_TYPE.NRL,a.load=!1)}))},_uni_navigateTo:function(t){e.navigateTo({url:t+"?havePass="+this.havePass1})},quit:function(){var t=this;e.removeStorage({key:"history"}),e.removeStorage({key:"user_phone"}),e.removeStorage({key:"hotStatu"}),this.$store.state.cart=[],this.$store.state.cart_id=[],this.$store.state.nCart=[],this.$store.state.shouquan=!1,e.removeStorageSync("userinfo"),e.removeStorageSync("laiketuiAccessId"),e.removeStorageSync("online"),e.removeStorageSync("LoingByHand");var a={module:"app",action:"login",app:"quit",access_id:this.access_id};this.$req.post({data:a}).then((function(a){t.$store.state.access_id="",e.removeStorage({key:"access_id"}),e.navigateTo({url:"../../pages/login/login?toHome=true&quit=true"})}))}}),computed:{halfWidth:function(){var t=this.$store.state.data_height,a=parseInt(t),n=2*a;return e.upx2px(n)+"px"}},components:{Heads:s}};t.default=c}).call(this,a("543d")["default"])},"876c":function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},ac0d:function(e,t,a){"use strict";a.r(t);var n=a("6136"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},b023:function(e,t,a){}},[["52fe","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/activities_add"],{"0957":function(t,i,e){"use strict";(function(t){e("a1f9");n(e("66fd"));var i=n(e("65bf"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"2b26":function(t,i,e){"use strict";e.r(i);var n=e("5e1a"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"5e1a":function(t,i,e){"use strict";(function(t){function n(t){return o(t)||c(t)||a(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,i){if(t){if("string"===typeof t)return r(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,i):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return r(t)}function r(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=function(){Promise.all([e.e("common/vendor"),e.e("components/header")]).then(function(){return resolve(e("6c1c"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/uni-load-more").then(function(){return resolve(e("ef75"))}.bind(null,e)).catch(e.oe)},d={data:function(){return{title:"添加活动商品",access_id:"",id:"",list:[],classList:[],classList1:[],brandList:[],cid:"",cid1:"",cid2:"",brand_id:"",product_title:"",down:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/down.png",xuanzehui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",xuanzehei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehei2x.png",classFlag:!1,classFlag1:!1,brandFlag:!1,proFlag:!1,qxFlag:!1,page:1,loadingType:0,type:""}},components:{heads:l,uniLoadMore:h},onLoad:function(i){this.id=i.id,this.type=i.type,"pt"==this.type?this.title="添加拼团商品":"ms"==this.type&&(this.title="添加秒杀商品");var e=this;e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){e.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):e.$store.state.access_id,e.list=[],e.loadingType=0,e.page=1,e.qxFlag=!1,e.axios()}))}))},onReachBottom:function(){0==this.loadingType&&(this.loadingType=1,this.page++,this.axios())},computed:{checkNum:function(){var t=0;return this.list.filter((function(i){i.checkMe&&t++})),t},checkList:function(){var t=[];return this.list.filter((function(i){i.checkMe&&(i.act_price=parseInt(.8*Number(i.price)),i.act_num=parseInt(.1*Number(i.num)),i.act_num<1&&(i.act_num=1),t.push(i))})),t}},watch:{cid:function(t){this.brand_id="",t&&this.getBrand(t),this.list=[],this.loadingType=0,this.page=1,this.qxFlag=!1,this.axios()},brand_id:function(t){this.list=[],this.loadingType=0,this.page=1,this.qxFlag=!1,this.axios()},classFlag:function(t){t&&(this.classFlag1=!1,this.brandFlag=!1,this.proFlag=!1)},classFlag1:function(t){t&&(this.classFlag=!1,this.brandFlag=!1,this.proFlag=!1)},brandFlag:function(t){t&&(this.classFlag1=!1,this.classFlag=!1,this.proFlag=!1)},proFlag:function(t){t&&(this.classFlag1=!1,this.brandFlag=!1,this.classFlag=!1)}},onShow:function(){},methods:{changeLoginStatus:function(){me.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):me.$store.state.access_id,me.list=[],me.loadingType=0,me.page=1,me.qxFlag=!1,me.axios()},toAdd:function(){0!=this.checkNum?(t.setStorageSync("checkProList",this.checkList),t.navigateTo({url:"/pagesA/myStore/activities_set?id="+this.id+"&type="+this.type})):t.showToast({title:"请选择商品",icon:"none"})},queding:function(){this.proFlag=!1,this.list=[],this.loadingType=0,this.page=1,this.qxFlag=!1,this.axios()},quxiao:function(){this.proFlag=!1,this.product_title=""},changeBrand:function(t){t.checkMe=!t.checkMe,t.checkMe?(this.brandList.filter((function(i){t.brand_id!=i.brand_id&&(i.checkMe=!1)})),this.brand_id=t.brand_id):this.brand_id=""},changeClass:function(t){t.checkMe=!t.checkMe,t.checkMe?(this.classList.filter((function(i){t.cid!=i.cid&&(i.checkMe=!1)})),this.cid=t.cid,this.cid1=t.cid,this.getClass(t.cid)):(this.cid="",this.cid1="",this.classList1=[],this.brandList=[])},changeClass1:function(t){t.checkMe=!t.checkMe,t.checkMe?(this.classList1.filter((function(i){t.cid!=i.cid&&(i.checkMe=!1)})),this.cid=t.cid,this.cid2=t.cid):this.cid=this.cid1},checkChange:function(t){var i=this;if(t){t.checkMe=!t.checkMe;var e=!0;this.list.filter((function(t){t.checkMe||(e=!1)})),this.qxFlag=e}else this.qxFlag=!this.qxFlag,this.list.filter((function(t){t.checkMe=i.qxFlag}))},closeBg:function(){this.classFlag=!1,this.classFlag1=!1,this.brandFlag=!1,this.proFlag=!1},axios:function(){var i=this,e={module:"app",action:"platform_activities",m:"listdetail",access_id:this.access_id,mch_id:this.$store.state.shop_id?this.$store.state.shop_id:t.getStorageSync("shop_id"),page:this.page,cid:this.cid,brand_id:this.brand_id,product_title:this.product_title};this.$req.post({data:e}).then((function(e){var s=e.code,a=e.pro,c=e.message,o=e.attr;if(200==s){var r;if(0==i.classList.length&&(o.filter((function(t){t.checkMe=!1})),i.classList=o),a.length>0)a.filter((function(t){t.checkMe=!1})),(r=i.list).push.apply(r,n(a)),i.qxFlag=!1;a.length>9?i.loadingType=0:i.loadingType=2}else t.showToast({title:c,icon:"none"})}))},getClass:function(i){var e=this,n={module:"app",action:"platform_activities",m:"pro_class",access_id:this.access_id,cid:i};this.$req.post({data:n}).then((function(i){var n=i.code,s=i.message;200==n?(i.class.filter((function(t){t.checkMe=!1})),e.classList1=i.class):t.showToast({title:s,icon:"none"})}))},getBrand:function(i){var e=this,n={module:"app",action:"platform_activities",m:"pro_brand",access_id:this.access_id,cid:i};this.$req.post({data:n}).then((function(i){var n=i.code,s=i.message,a=i.brand;200==n?(a.filter((function(t){t.checkMe=!1})),e.brandList=a):t.showToast({title:s,icon:"none"})}))}}};i.default=d}).call(this,e("543d")["default"])},"65bf":function(t,i,e){"use strict";e.r(i);var n=e("eefd"),s=e("2b26");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("eaf1");var c,o=e("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"d1dcf75a",null,!1,n["a"],c);i["default"]=r.exports},e554:function(t,i,e){},eaf1:function(t,i,e){"use strict";var n=e("e554"),s=e.n(n);s.a},eefd:function(t,i,e){"use strict";var n,s=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.classFlag=!t.classFlag},t.e1=function(i){t.classFlag1=!t.classFlag1},t.e2=function(i){t.brandFlag=!t.brandFlag},t.e3=function(i){t.proFlag=!t.proFlag})},a=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))}},[["0957","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/distribution/distribution_flow","components/uni-load-more"],{"410f":function(t,e,n){"use strict";var o=n("dfef"),a=n.n(o);a.a},"736d":function(t,e,n){"use strict";(function(t){n("a1f9");o(n("66fd"));var e=o(n("bceb"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"73c4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");n("b206"),a(n("ef75"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{fastTap:!0,head:!0,access_id:"",order:"",bindding_id:"",load:!0,hasFlag:"",total:0,page:0,loadingType:0,emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/fx_nodata1.png",loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},onReachBottom:function(){var e=this;if(0==this.loadingType){this.loadingType=1;var n={module:"app",action:"commcenter",app:"comm_list",access_id:this.access_id,page:this.page};this.order.length>0&&t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log(t);var n=t.data.list;console.log(n),e.page+=1,200==t.data.code?(e.order=e.order.concat(n),e.loadingType=0):e.loadingType=2},error:function(t){console.log(t)}})}},onLoad:function(){var e=this;e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){}))})),e.bindding_id=e.$store.state.bindding_num,e.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):e.$store.state.access_id},computed:{halfWidth:function(){var e=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,n=parseInt(e),o=2*n;return t.upx2px(o)+"px"}},onShow:function(){this.bindding_id=this.$store.state.bindding_num,this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},methods:c({},(0,o.mapMutations)({}),{changeLoginStatus:function(){this.access_id=t.getStorageSync("access_id"),this._axios()},_axios:function(){var t=this,e={module:"app",action:"commcenter",app:"comm_list",access_id:this.access_id,page:this.page};this.$req.post({data:e}).then((function(e){console.log(e,1111),t.load=!1,103==e.code?t.page>0?t.hasFlag=!0:t.hasFlag=!1:200==e.code&&(t.hasFlag=!0,t.order=e.list,t.total=e.total,t.page=1)}))},_back:function(){this.flag=!1,t.navigateBack({delta:1})}})};e.default=s}).call(this,n("543d")["default"])},7534:function(t,e,n){"use strict";var o=n("c59d"),a=n.n(o);a.a},"9c3d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=o},b249:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},bceb:function(t,e,n){"use strict";n.r(e);var o=n("b249"),a=n("e391");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("410f");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"287a49e6",null,!1,o["a"],c);e["default"]=s.exports},c59d:function(t,e,n){},d241:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},dfef:function(t,e,n){},e391:function(t,e,n){"use strict";n.r(e);var o=n("73c4"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},ef75:function(t,e,n){"use strict";n.r(e);var o=n("d241"),a=n("f2f4");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7534");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=s.exports},f2f4:function(t,e,n){"use strict";n.r(e);var o=n("9c3d"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a}},[["736d","common/runtime","common/vendor"]]]);
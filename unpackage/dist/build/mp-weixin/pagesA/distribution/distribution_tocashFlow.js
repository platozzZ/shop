(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/distribution/distribution_tocashFlow","components/uni-load-more"],{"063e":function(t,e,n){"use strict";(function(t){n("a1f9");a(n("66fd"));var e=a(n("7ad5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"28c5":function(t,e,n){"use strict";n.r(e);var a=n("d9d7"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"62a7":function(t,e,n){},7534:function(t,e,n){"use strict";var a=n("c59d"),o=n.n(a);o.a},"7ad5":function(t,e,n){"use strict";n.r(e);var a=n("f80d"),o=n("28c5");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("b2d3");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"05fc8ee4",null,!1,a["a"],c);e["default"]=s.exports},"9c3d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=a},b2d3:function(t,e,n){"use strict";var a=n("62a7"),o=n.n(a);o.a},c59d:function(t,e,n){},d241:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},d9d7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");n("b206"),o(n("ef75"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{fastTap:!0,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",head:!0,access_id:"",order:"",bindding_id:"",load:!0,header:["全部","待审核","审核通过","审核失败"],status_id:"",today:"0000-00-00",statusStr:["审核中","审核成功","审核失败"],hasFlag:"",page:0,total:0,loadingType:0,emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/fx_tixNo.png",title:"提现明细"}},onReachBottom:function(){var e=this;if(0==this.loadingType){this.loadingType=1;var n={module:"app",action:"commcenter",app:"cash_list",access_id:this.access_id,page:this.page,status:e.status_id};this.order.length>0&&t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log(t);var n=t.data.list;console.log(n),e.page+=1,200==t.data.code?(e.order=e.order.concat(n),e.loadingType=0):e.loadingType=2},error:function(t){console.log(t)}})}},onLoad:function(){var e=this;e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){e.bindding_id=e.$store.state.bindding_num,e.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):e.$store.state.access_id,e.access_id&&e._axios(),e._getToday()}))}))},computed:{halfWidth:function(){var e=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,n=parseInt(e),a=2*n;return t.upx2px(a)+"px"}},onShow:function(){this.bindding_id=this.$store.state.bindding_num,this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id},methods:c({},(0,a.mapMutations)({}),{changeLoginStatus:function(){var e=this;e.access_id=t.getStorageSync("access_id"),e._axios()},_goXQ:function(e){this.page=0,t.navigateTo({url:"./distribution_result?txId="+e})},_header_index:function(t){this.status_id=t,this.page=0,this._axios()},_getToday:function(){var t=new Date;this.today=t.getFullYear()+"-"+(parseInt(t.getMonth())+1)+"-"+t.getDate()},_axios:function(){var e=this;console.log(this.bind_st);var n={module:"app",action:"commcenter",app:"cash_list",access_id:this.access_id,page:this.page,status:e.status_id};t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){e.load=!1,103==t.data.code?e.hasFlag=!1:200==t.data.code&&(e.hasFlag=!0,e.order=t.data.list,e.total=t.data.total,e.page=1),console.log(t.data.list)},error:function(t){console.log(t)}})},onReachBottom:function(){var e=this;if(0==this.loadingType){this.loadingType=1,console.log(this.page);var n={module:"app",action:"index",app:"get_more",page:this.page};console.log(n),this.goods_like.length>0&&t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log(t);var n=t.data.data;console.log(n),e.page+=1,n.length>0?(e.goods_like=e.goods_like.concat(n),e.loadingType=0):e.loadingType=2},error:function(t){console.log(t)}})}},_back:function(){this.flag=!1,t.navigateBack({delta:1})}})};e.default=s}).call(this,n("543d")["default"])},ef75:function(t,e,n){"use strict";n.r(e);var a=n("d241"),o=n("f2f4");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7534");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=s.exports},f2f4:function(t,e,n){"use strict";n.r(e);var a=n("9c3d"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},f80d:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))}},[["063e","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-livePlayer"],{"0b9d":function(t,e,i){"use strict";var a=i("46bc"),n=i.n(a);n.a},"1c7f":function(t,e,i){"use strict";i.r(e);var a=i("6734"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"219f":function(t,e,i){"use strict";i.r(e);var a=i("b9b2"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"344b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".border[data-v-2e61f961]{border-bottom:0 solid #eee!important}.head[data-v-2e61f961]{position:fixed;left:0;top:0;background-color:#fff;width:100%;z-index:9999;border-bottom:1px solid #eee}.head .white[data-v-2e61f961]{background:#fff}.header[data-v-2e61f961]{color:#fff;border:none}.header img[data-v-2e61f961]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-2e61f961]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-2e61f961]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-2e61f961]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-2e61f961]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-2e61f961]{background:transparent;border-bottom:0}.title_w[data-v-2e61f961]{color:#fff!important}",""]),t.exports=e},4284:function(t,e,i){"use strict";i.r(e);var a=i("a7c6"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"46bc":function(t,e,i){var a=i("4706");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2a0c5e18",a,!0,{sourceMap:!1,shadowMode:!1})},4706:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.null[data-v-bfdfebc6]{width:100%;line-height:%?100?%;text-align:center;color:#999;font-size:%?24?%;padding-top:50px}.topBarBox[data-v-bfdfebc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?90?%}.topBarBox uni-view[data-v-bfdfebc6]{font-size:%?28?%;color:#999;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.checked[data-v-bfdfebc6]{position:relative;color:#020202!important}.checked[data-v-bfdfebc6]::after{content:"";position:absolute;width:%?120?%;height:2px;background-color:#020202;bottom:0;left:%?64?%}.scroll[data-v-bfdfebc6]{box-sizing:border-box;height:81vh}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},"4dee":function(t,e,i){"use strict";var a=i("58d2"),n=i.n(a);n.a},"58d2":function(t,e,i){var a=i("344b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("74ed8ca1",a,!0,{sourceMap:!1,shadowMode:!1})},"65ca":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"live"},[i("heads",{attrs:{title:"雪地直播",bgHei:"true",navWhite:"true",returnFlag:"1"}}),i("v-uni-view",{staticClass:"topBarBox"},t._l(t.topBar,(function(e,a){return i("v-uni-view",{key:a,class:t.currentIndex==a?"checked":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(a)}}},[t._v(t._s(e))])})),1),t.isNull?i("v-uni-view",{staticClass:"null"},[t._v("暂无直播数据")]):i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":"true"}},[i("v-uni-view",[i("live-item",{attrs:{liveList:t.list}})],1)],1)],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},6734:function(t,e,i){"use strict";var a=i("ee27");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),r=i("2f62"),o={data:function(){return{live:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/live.png",replay:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/replay.png"}},props:["liveList","temp"],created:function(){console.log("收到的值",this.liveList)},methods:(0,n.default)({toRoom:function(t,e,i,a,n){if(6!=t&&7!=t)if(102!=e){if(103==e)return this.replayGoods(n),void uni.navigateTo({url:"../liveReplay/liveReplay?roomID="+t+"&title="+i+"&img="+a});var r=encodeURIComponent(JSON.stringify({name:"hh"}));uni.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t,"&custom_params=").concat(r)})}else uni.showToast({title:"直播未开始",icon:"none"});else uni.showToast({title:"该主播已下架",icon:"none"})}},(0,r.mapMutations)({replayGoods:"SET_REPLAY_GOODS"}))};e.default=o},"6a89":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:"display:flex;height:"+t.BoxHeight},[i("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[i("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),i("div",{staticClass:"header"},[t.flag&&!t.returnFlag?i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?i("img",{attrs:{src:t.back1}}):i("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():i("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),i("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"6c1c":function(t,e,i){"use strict";i.r(e);var a=i("6a89"),n=i("4284");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4dee");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2e61f961",null,!1,a["a"],o);e["default"]=c.exports},"84d0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".liveItem[data-v-7a013428]{width:95%;margin:%?10?% auto;display:grid;grid-column-gap:%?20?%;grid-template-columns:1fr 1fr;font-size:%?24?%}.box[data-v-7a013428]{border-radius:%?20?% %?20?% 0 0;box-shadow:0 0 15px 2px #eee;margin-bottom:%?20?%}.box .imgBox[data-v-7a013428]{position:relative}.box .imgBox img[data-v-7a013428]{width:%?340?%;height:%?440?%;border-radius:%?20?% %?20?% 0 0}.box .imgBox .tips[data-v-7a013428]{position:absolute;top:%?16?%;left:%?10?%;font-size:%?24?%;color:#fff}.box .imgBox .tips uni-view[data-v-7a013428]{padding:%?8?% %?10?%;border-radius:%?20?%}.box .imgBox .tips uni-view uni-image[data-v-7a013428]{width:%?32?%;height:%?32?%;margin-right:%?5?%;vertical-align:middle}.box .imgBox .imgfooter[data-v-7a013428]{width:94%;position:absolute;bottom:0;font-size:%?24?%;padding:%?10?%;color:#fff;background-image:-webkit-linear-gradient(bottom,#333,transparent);background-image:linear-gradient(0deg,#333,transparent)}.box .under[data-v-7a013428]{margin:%?10?%;padding:%?10?% 0 0 0}.red[data-v-7a013428]{background-image:-webkit-linear-gradient(left,#ff7272,#f44);background-image:linear-gradient(90deg,#ff7272,#f44)}.blue[data-v-7a013428]{background-image:-webkit-linear-gradient(left,#50b6f4,#4b9af3);background-image:linear-gradient(90deg,#50b6f4,#4b9af3)}.black[data-v-7a013428]{background-image:-webkit-linear-gradient(left,#ffa03a,#ffbd42);background-image:linear-gradient(90deg,#ffa03a,#ffbd42)}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},a545:function(t,e,i){"use strict";i.r(e);var a=i("65ca"),n=i("219f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0b9d");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"bfdfebc6",null,!1,a["a"],o);e["default"]=c.exports},a7c6:function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),r=i("2f62"),o=i("b206"),s={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,e=0,i=parseInt(t)+uni.upx2px(88);return e=i&&i>0?i:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)({},(0,r.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=s},adeb:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"liveItem"},t._l(t.liveList,(function(e){return i("v-uni-view",{key:e.roomid,staticClass:"box"},[i("v-uni-view",{staticClass:"imgBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toRoom(e.roomid,e.live_status,e.name,e.cover_img,e.goods)}}},[i("img",{attrs:{src:e.cover_img,alt:""}}),i("v-uni-view",{staticClass:"tips"},[101==e.live_status?i("v-uni-view",{staticClass:"red"},[i("v-uni-image",{attrs:{src:t.live}}),i("v-uni-text",[t._v("直播")])],1):102==e.live_status?i("v-uni-view",{staticClass:"black"},[i("v-uni-text",[t._v("未开始")])],1):103==e.live_status?i("v-uni-view",{staticClass:"blue"},[i("v-uni-image",{attrs:{src:t.replay}}),i("v-uni-text",[t._v("回放")])],1):t._e()],1),i("v-uni-view",{staticClass:"imgfooter"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",[t._v(t._s(e.anchor_name))])],1)],1)],1),i("v-uni-view",{staticClass:"under"},[i("v-uni-view",[t._v(t._s(e.name))])],1)],1)})),1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},b206:function(t,e,i){"use strict";function a(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function n(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function r(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=a,e.getStorage=n,e.removeStorage=r},b89f:function(t,e,i){var a=i("84d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("42eec832",a,!0,{sourceMap:!1,shadowMode:!1})},b9b2:function(t,e,i){"use strict";var a=i("ee27");i("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("c964")),r=a(i("6c1c")),o=a(i("d63d")),s={data:function(){return{topBar:["正在直播","未开始","已结束"],currentIndex:0,notStartList:[],endList:[],Listing:[],list:[],isNull:!1,start:0,limit:10}},onLoad:function(){var t=this;this.$nextTick((function(){t.getLiveList()}))},methods:{getLiveList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={module:"app",action:"liveBroadcast",app:"getLiveList",start:t.start,limit:t.limit},e.next=3,t.$req.post({data:i});case 3:a=e.sent,console.log(a),200==a.code?t.classificationByStatus(a.list.room_info):t.isNull=!0;case 6:case"end":return e.stop()}}),e)})))()},classificationByStatus:function(t){var e=this;t.filter((function(t){101==t.live_status?e.Listing.push(t):102==t.live_status?e.notStartList.push(t):103==t.live_status&&e.endList.push(t)})),this.list=this.Listing,this.list.length||(this.isNull=!0)},changeTab:function(t){switch(this.currentIndex=t,t){case 0:this.list=this.Listing;break;case 1:this.list=this.notStartList;break;case 2:this.list=this.endList;break}0===this.list.length?this.isNull=!0:this.isNull=!1}},components:{heads:r.default,liveItem:o.default}};e.default=s},bc83:function(t,e,i){"use strict";var a=i("b89f"),n=i.n(a);n.a},d63d:function(t,e,i){"use strict";i.r(e);var a=i("adeb"),n=i("1c7f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bc83");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7a013428",null,!1,a["a"],o);e["default"]=c.exports}}]);
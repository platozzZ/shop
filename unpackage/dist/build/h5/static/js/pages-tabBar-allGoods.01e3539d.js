(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-allGoods"],{"0885":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order_ii"},[i("heads",{attrs:{title:"全部分类",bgHei:"true",navWhite:"true",returnFlag:"1"}}),t.load?t._e():i("toload",{attrs:{load:t.load}}),t.load?i("div",{staticClass:"order_container"},[i("div",{staticClass:"allgoods_b",style:{paddingBottom:t.h5Height}},[i("ul",{ref:"allgoods_left",staticClass:"allgoods_left"},t._l(t.centre_title,(function(e,a){return i("li",{key:a,staticClass:"allgoods_l",class:{color:t.title_index==a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._title(a)}}},[i("div",[t._v(t._s(e.cate_name))]),i("div",{class:{isborder:t.title_index==a}})])})),0),i("div",{staticClass:"allgoods_right"},[t.centre_list.length>0?i("ul",{staticClass:"allgoods_u"},t._l(t.centre_list,(function(e,a){return i("li",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._goods(e.child_id,e.name)}}},[i("v-uni-image",{staticStyle:{width:"120upx",height:"120upx"},attrs:{"lazy-load":"true",src:e.picture}}),i("p",[t._v(t._s(e.name))])],1)})),0):i("div",[i("div",[i("img",{staticClass:"noFindImg",staticStyle:{"margin-top":"100px"},attrs:{src:t.noOrder}})]),i("span",{staticClass:"noFindText"},[t._v("暂时还没有二级分类哦")])])]),i("div",{staticStyle:{"background-color":"#fff",height:"1px"}})]),i("div",{staticStyle:{"background-color":"#fff",height:"1px"}})]):t._e()],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},2662:function(t,e,i){var a=i("2e7a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("7f60f94e",a,!0,{sourceMap:!1,shadowMode:!1})},"27b2":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("f3f3")),n=i("2f62"),r={data:function(){return{home:!0,shopping:!1,go_shopping:!1,my:!1,home_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home2x.png",home_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home22x.png",shopping_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping2x.png",shopping_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping22x.png",go_shopping_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/go_shopping2x.png",go_shopping_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/go_shopping22x.png",my_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/my2x.png",my_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/my22x.png",index:""}},props:["bottom"],onLoad:function(t){},mounted:function(){this._bottom()},methods:(0,o.default)({a:function(t,e){this.$store.state.tabIndex!=e&&(this.tabIndex(e),uni.navigateTo({url:t}))}},(0,n.mapMutations)({tabIndex:"SET_TAB_INDEX"}),{_bottom:function(){1==this.$store.state.tabIndex?(this.home=!0,this.shopping=!1,this.go_shopping=!1,this.my=!1):2==this.$store.state.tabIndex?(this.go_shopping=!0,this.home=!1,this.shopping=!1,this.my=!1):3==this.$store.state.tabIndex?(this.shopping=!0,this.home=!1,this.go_shopping=!1,this.my=!1):4==this.$store.state.tabIndex&&(this.my=!0,this.home=!1,this.go_shopping=!1,this.shopping=!1),console.log("as4d654as65d4")}})};e.default=r},"2e7a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".bottom[data-v-64d221cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?98?%;width:100%;border-top:1px solid #eee;background-color:#f9f9f9;position:fixed;bottom:0;left:0;z-index:40;-webkit-transform:translateZ(0);transform:translateZ(0)}.li[data-v-64d221cc]{text-align:center;color:#9d9d9d;font-size:%?22?%;width:20%}.bottom img[data-v-64d221cc]{width:%?38?%;height:%?38?%}.color[data-v-64d221cc]{color:#020202}",""]),t.exports=e},"344b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".border[data-v-2e61f961]{border-bottom:0 solid #eee!important}.head[data-v-2e61f961]{position:fixed;left:0;top:0;background-color:#fff;width:100%;z-index:9999;border-bottom:1px solid #eee}.head .white[data-v-2e61f961]{background:#fff}.header[data-v-2e61f961]{color:#fff;border:none}.header img[data-v-2e61f961]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-2e61f961]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-2e61f961]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-2e61f961]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-2e61f961]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-2e61f961]{background:transparent;border-bottom:0}.title_w[data-v-2e61f961]{color:#fff!important}",""]),t.exports=e},"370a":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{height:"98upx",width:"100%"}},[i("ul",{staticClass:"bottom"},[i("li",{staticClass:"li",class:{color:t.home},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.a("home",1)}}},[i("img",{attrs:{src:t.home?t.home_2:t.home_1}}),i("p",[t._v("首页")])]),i("li",{staticClass:"li",class:{color:t.go_shopping},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.a("allGoods",2)}}},[i("img",{attrs:{src:t.go_shopping?t.go_shopping_2:t.go_shopping_1}}),i("p",[t._v("全部产品")])]),i("li",{staticClass:"li",class:{color:t.shopping},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.a("shoppingCart",3)}}},[i("img",{attrs:{src:t.shopping?t.shopping_2:t.shopping_1}}),i("p",[t._v("购物车")])]),i("li",{staticClass:"li",class:{color:t.my},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.a("my",4)}}},[i("img",{attrs:{src:t.my?t.my_2:t.my_1}}),i("p",[t._v("我的")])])])])])},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"3cf1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".toload[data-v-760eb09a]{\n\t/* min-height: calc(100vh - 90rpx); */}.t-h[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:calc(100vh - %?200?%)}.loadbox[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%;height:%?200?%;border-radius:%?10?%;background-color:rgba(0,0,0,.6);margin:0 auto}.loadbox-img[data-v-760eb09a]{width:%?40?%;height:%?40?%;margin:%?50?% 0 %?20?% 0}.loadbox-text[data-v-760eb09a]{margin-top:%?20?%;color:#fff}",""]),t.exports=e},4284:function(t,e,i){"use strict";i.r(e);var a=i("a7c6"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"44c8":function(t,e,i){"use strict";var a=i("2662"),o=i.n(a);o.a},"47ca":function(t,e,i){"use strict";i.r(e);var a=i("5a95"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"4dee":function(t,e,i){"use strict";var a=i("58d2"),o=i.n(a);o.a},"58d2":function(t,e,i){var a=i("344b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("74ed8ca1",a,!0,{sourceMap:!1,shadowMode:!1})},5937:function(t,e,i){"use strict";i.r(e);var a=i("e7e8"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"5a95":function(t,e,i){"use strict";var a=i("ee27");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("f3f3")),n=a(i("edf7")),r=i("2f62"),s=i("b206"),l=a(i("6c1c")),c=a(i("b4d3")),d={data:function(){return{loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif",noOrder:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/fenlei.png",title_index:0,centre_title:"",centre_list:"",cid:"",load:!1,cc:0}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t),i=2*e;return uni.upx2px(i)+"px"},h5Height:function(){var t;return t=100,uni.upx2px(t)+"px"}},components:{Bottom:n.default,heads:l.default,toload:c.default},onLoad:function(t){var e=this;e.LaiKeTuiCommon.getUrlFirst(e._axios),this.storag=uni.getStorageSync("history")},onshow:function(){this.cc=this.$store.state.cindex},methods:(0,o.default)({_axios:function(){var t=this,e={access_id:this.access_id,module:"app",action:"search",app:"index"};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e);var i=e.data.List;t.centre_title=i,t.centre_list=i[0],t.cc=t.$store.state.cindex,t._title(t.cc),t.load=!0},error:function(t){console.log(t)}})},_title:function(t){this.title_index=t,this.centre_list=this.centre_title[t].children,this.cindex(t)},_focus:function(){},_goods:function(t,e){console.log(t),uni.navigateTo({url:"../goods/goods?cid="+t+"&name="+e})}},(0,r.mapMutations)({cindex:"SET_CINDEX"})),watch:{}};e.default=d},"6a89":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:"display:flex;height:"+t.BoxHeight},[i("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[i("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),i("div",{staticClass:"header"},[t.flag&&!t.returnFlag?i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?i("img",{attrs:{src:t.back1}}):i("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():i("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),i("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"6c1c":function(t,e,i){"use strict";i.r(e);var a=i("6a89"),o=i("4284");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("4dee");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"2e61f961",null,!1,a["a"],r);e["default"]=l.exports},"7aeb":function(t,e,i){var a=i("ee2a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6f28493a",a,!0,{sourceMap:!1,shadowMode:!1})},"983d":function(t,e,i){var a=i("3cf1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("33c5f44a",a,!0,{sourceMap:!1,shadowMode:!1})},a7c6:function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("f3f3")),n=i("2f62"),r=i("b206"),s={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=0,i=parseInt(t)+uni.upx2px(88);return e=i&&i>0?i:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,o.default)({},(0,n.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=s},ae8a:function(t,e,i){"use strict";var a=i("983d"),o=i.n(a);o.a},b206:function(t,e,i){"use strict";function a(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function o(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function n(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=a,e.getStorage=o,e.removeStorage=n},b4d3:function(t,e,i){"use strict";i.r(e);var a=i("cda2"),o=i("5937");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("ae8a");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"760eb09a",null,!1,a["a"],r);e["default"]=l.exports},bc75:function(t,e,i){"use strict";i.r(e);var a=i("27b2"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},cda2:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"toload"},[t.load?t._t("default"):i("v-uni-view",{staticClass:"t-h"},[i("v-uni-view",{staticClass:"loadbox"},[i("v-uni-image",{staticClass:"loadbox-img",attrs:{src:t.loadGif,mode:""}}),i("v-uni-view",{staticClass:"loadbox-text"},[t._v("加载中…")])],1)],1)],2)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},d1d1:function(t,e,i){"use strict";i.r(e);var a=i("0885"),o=i("47ca");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("f0b8");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"03397e88",null,!1,a["a"],r);e["default"]=l.exports},e7e8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif"}},props:["load"]};e.default=a},edf7:function(t,e,i){"use strict";i.r(e);var a=i("370a"),o=i("bc75");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("44c8");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"64d221cc",null,!1,a["a"],r);e["default"]=l.exports},ee2a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".home-mesage[data-v-03397e88]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;z-index:9;top:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.home-mesage span[data-v-03397e88]{font-size:%?30?%;color:#000}.allgoods_s[data-v-03397e88]{padding:%?10?% %?30?%}.search[data-v-03397e88]{width:100%;height:%?80?%;background-color:#eee;border-radius:%?10?%;padding:0 %?20?%;position:relative}.searchImg[data-v-03397e88]{width:%?31?%;height:%?31?%;position:absolute;top:%?18?%;left:%?16?%;z-index:9}.search uni-input[data-v-03397e88]{width:90%;height:92%;border:none;background-color:#eee}.allgoods_b[data-v-03397e88]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;box-sizing:border-box;height:100%}.allgoods_left[data-v-03397e88]{width:%?180?%;border-right:1px solid #eee;overflow-y:scroll}.allgoods_left[data-v-03397e88]::-webkit-scrollbar{display:none}.allgoods_right[data-v-03397e88]{width:78%;padding:%?0?%;overflow-y:scroll;text-align:center}.allgoods_right[data-v-03397e88]::-webkit-scrollbar{display:none}.allgoods_right>img[data-v-03397e88]{width:%?510?%;height:%?160?%}.allgoods_l[data-v-03397e88]{font-size:%?28?%;color:#888;position:relative;text-align:center;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.allgoods_l>div[data-v-03397e88]{width:auto;display:inline-block!important;display:inline;padding-bottom:%?10?%}.allgoods_u[data-v-03397e88]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?0?% %?20?%}.allgoods_u>li img[data-v-03397e88]{width:%?98?%;height:%?98?%}.allgoods_u>li p[data-v-03397e88]{font-size:%?26?%;color:#666;text-align:center;margin-top:%?10?%}.allgoods_u>li[data-v-03397e88]{margin-top:%?60?%;text-align:center;width:33%}.allgoods_border[data-v-03397e88]{border-left:%?6?% solid #020202;height:%?30?%;width:%?6?%;position:absolute;top:32%;left:0}.color[data-v-03397e88]{color:#020202;font-weight:700}.isborder[data-v-03397e88]{width:%?30?%!important;height:%?4?%;background-color:#020202;position:absolute;bottom:%?20?%;padding-bottom:0!important;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.allgoods_left[data-v-03397e88],.allgoods_right[data-v-03397e88]{height:100%}.load[data-v-03397e88]{position:fixed;top:0;left:0;width:100%;background-color:#fff}.header[data-v-03397e88]{position:fixed;top:0;left:0;padding:%?20?% %?30?%;text-align:center;background-color:#fff}.header div[data-v-03397e88]{font-size:%?30?%;color:#020202;text-align:center;float:right;margin-top:%?6?%}.serch_img[data-v-03397e88]{height:60%;position:absolute;top:20%;right:0;z-index:99;width:%?30?%}.data_h_h[data-v-03397e88]{position:fixed;top:0;width:100%;background-color:#fff;z-index:9999}.order_container[data-v-03397e88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.order_title[data-v-03397e88]{height:%?88?%}.order_title>div[data-v-03397e88]{z-index:999}.header span[data-v-03397e88]{font-size:%?34?%;position:absolute;left:0;right:0}.order_ii[data-v-03397e88]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}",""]),t.exports=e},f0b8:function(t,e,i){"use strict";var a=i("7aeb"),o=i.n(a);o.a}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/header"],{"28f1":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("2f62"),n=a("b206");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var e=(0,n.getStorage)("data_height")?(0,n.getStorage)("data_height"):this.$store.state.data_height,t=parseInt(e);return t+"px"},BoxHeight:function(){var t=(0,n.getStorage)("data_height")?(0,n.getStorage)("data_height"):this.$store.state.data_height,a=0,r=parseInt(t)+e.upx2px(88);return a=r&&r>0?r:e.upx2px(88),a+"px"}},onLoad:function(e){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:o({},(0,r.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:e.navigateBack({delta:2});break;case 2:e.switchTab({url:"../tabBar/shoppingCart"});break;case 3:e.redirectTo({url:"../login/login.vue"});break;case 4:e.navigateBack({delta:3});break;case 5:e.redirectTo({url:"../order/myOrder"});break;case 6:e.switchTab({url:"../../pages/tabBar/home"});break;case 7:e.switchTab({url:"../../pages/tabBar/my"});break;case 8:e.switchTab({url:"../tabBar/my"});break;case 9:e.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?e.navigateBack({delta:1}):e.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};t.default=u}).call(this,a("543d")["default"])},3434:function(e,t,a){},"37d3":function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}))},4284:function(e,t,a){"use strict";a.r(t);var r=a("28f1"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=n.a},"6c1c":function(e,t,a){"use strict";a.r(t);var r=a("37d3"),n=a("4284");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("bbd9");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"85d90932",null,!1,r["a"],o);t["default"]=u.exports},bbd9:function(e,t,a){"use strict";var r=a("3434"),n=a.n(r);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/header-create-component',
    {
        'components/header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6c1c"))
        })
    },
    [['components/header-create-component']]
]);
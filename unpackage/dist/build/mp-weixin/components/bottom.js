(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bottom"],{4780:function(t,n,o){},bc75:function(t,n,o){"use strict";o.r(n);var e=o("d822"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},c555:function(t,n,o){"use strict";var e=o("4780"),i=o.n(e);i.a},d822:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("2f62");function i(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)}return o}function s(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}function r(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var a={data:function(){return{home:!0,shopping:!1,go_shopping:!1,my:!1,home_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home2x.png",home_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home22x.png",shopping_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping2x.png",shopping_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping22x.png",go_shopping_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/go_shopping2x.png",go_shopping_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/go_shopping22x.png",my_1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/my2x.png",my_2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/my22x.png",index:""}},props:["bottom"],onLoad:function(t){},mounted:function(){this._bottom()},methods:s({a:function(n,o){this.$store.state.tabIndex!=o&&(this.tabIndex(o),t.navigateTo({url:n}))}},(0,e.mapMutations)({tabIndex:"SET_TAB_INDEX"}),{_bottom:function(){1==this.$store.state.tabIndex?(this.home=!0,this.shopping=!1,this.go_shopping=!1,this.my=!1):2==this.$store.state.tabIndex?(this.go_shopping=!0,this.home=!1,this.shopping=!1,this.my=!1):3==this.$store.state.tabIndex?(this.shopping=!0,this.home=!1,this.go_shopping=!1,this.my=!1):4==this.$store.state.tabIndex&&(this.my=!0,this.home=!1,this.go_shopping=!1,this.shopping=!1),console.log("as4d654as65d4")}})};n.default=a}).call(this,o("543d")["default"])},edf7:function(t,n,o){"use strict";o.r(n);var e=o("f487"),i=o("bc75");for(var s in i)"default"!==s&&function(t){o.d(n,t,(function(){return i[t]}))}(s);o("c555");var r,a=o("f0c5"),c=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"16e9cd74",null,!1,e["a"],r);n["default"]=c.exports},f487:function(t,n,o){"use strict";var e,i=function(){var t=this,n=t.$createElement;t._self._c},s=[];o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return s})),o.d(n,"a",(function(){return e}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bottom-create-component',
    {
        'components/bottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("edf7"))
        })
    },
    [['components/bottom-create-component']]
]);
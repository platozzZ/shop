(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-share"],{"2bbf":function(t,e,o){var i=o("9c38");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("d9fe6510",i,!0,{sourceMap:!1,shadowMode:!1})},"4a57":function(t,e,o){"use strict";o.r(e);var i=o("88b6"),a=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},"88b6":function(t,e,o){"use strict";o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o("b206"),o("2a0a");var i={data:function(){return{title:"Hello",guiderImg:[],time:3,timer:"",timeStatu:!1,autoplay:!0,num:1,clear:"",option:""}},onLoad:function(t){var e=this;e.option=t,console.log("=======option"),console.log(e.option),e._geturl().then((function(){e.getImg(),uni.getSystemInfo({success:function(t){e.$store.state.data_height=t.statusBarHeight}})})),this.clear=setInterval(this.countDown,1e3)},onShow:function(){this.timeStatu=!1,this.autoplay=!0,this.time=3},methods:{changeAutoplay:function(t){t.detail.current<=this.num?this.autoplay=!1:(this.num=t.detail.current,this.autoplay=!0)},getImg:function(){var t=this;uni.request({data:{app:"guided_graph",action:"index",module:"app",store_type:2},url:t.$store.state.url,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){t.guiderImg=e.data.list}})},countDown:function(){var t=this;if(1==t.time--){this.timeStatu=!0,console.log("this.option==========="),console.log(this.option.pages),clearInterval(t.clear),uni.setStorageSync("isfx",!0);var e=uni.getStorageSync("isfx");return console.log("isfx-------------------:"+e),"goodsDetailed"==this.option.pages?""!=this.option.fatherId||this.option.fatherId?(uni.setStorageSync("pages","goodsDetailed"),uni.setStorageSync("productId",this.option.productId),uni.setStorageSync("fatherId",this.option.fatherId),uni.switchTab({url:"../../pages/tabBar/home?pages=goodsDetailed&productId="+this.option.productId+"&isfx=true&fatherId="+this.option.fatherId}),console.log("goodsDetailed____2"),!1):(uni.setStorageSync("pages","goodsDetailed"),uni.setStorageSync("productId",this.option.productId),console.log("goodsDetailed____1"),uni.switchTab({url:"../../pages/tabBar/home?pages=goodsDetailed&productId="+this.option.productId+"&isfx=true"}),!1):"groupDetailed"==this.option.pages?(uni.setStorageSync("pages","groupDetailed"),uni.setStorageSync("activity_no",this.option.activity_no),uni.setStorageSync("pro_id",this.option.pro_id),console.log("share_jump____________"),uni.switchTab({url:"../../pages/tabBar/home?pages=groupDetailed&pro_id="+this.option.pro_id+"&activity_no="+this.option.activity_no+"&isfx=true"}),!1):"group_end"==this.option.pages&&(uni.setStorageSync("pages","group_end"),uni.setStorageSync("sNo",this.option.sNo),uni.setStorageSync("friend",!0),uni.switchTab({url:"../../pages/tabBar/home?pages=group_end&sNo="+this.option.sNo+"&friend=true&isfx=true"}),!1)}},_geturl:function(){var t=this;return new Promise((function(e,o){var i={module:"app",action:"url",app:"geturl",get:"mini_url,H5,endurl"};uni.request({data:i,url:t.LaiKeTuiCommon.LKT_API_URL,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(o){200==o.data.code?(t.$store.state.url=o.data.url.mini_url,t.$store.state.h5_url=o.data.url.H5,t.$store.state.endurl=o.data.url.endurl):(t.$store.state.url=t.LaiKeTuiCommon.LKT_API_URL,t.$store.state.h5_url=t.LaiKeTuiCommon.LKT_H5_DEFURL,t.$store.state.endurl=t.LaiKeTuiCommon.LKT_ENDURL),t.$store.state.url=t.$store.state.url+"&store_type=2",uni.setStorageSync("url",t.$store.state.url),uni.setStorageSync("h5_url",t.$store.state.h5_url),uni.setStorageSync("endurl",t.$store.state.endurl),e(t)}})}))}}};e.default=i},9902:function(t,e,o){"use strict";var i,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.guiderImg?o("div",[o("div",{staticClass:"relative"},[o("div",{staticClass:"guiderBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.countDown(!0)}}},[o("span",{staticClass:"time"},[t._v(t._s(t.time))]),t._v("秒后进入")]),o("v-uni-swiper",{staticClass:"swiper",attrs:{circular:"false",autoplay:t.autoplay,"indicator-dots":"true",interval:"1000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAutoplay.apply(void 0,arguments)}}},t._l(t.guiderImg,(function(t,e){return o("v-uni-swiper-item",{key:e},[o("v-uni-image",{staticClass:"image",attrs:{src:t.image}})],1)})),1)],1)]):t._e()},n=[];o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}))},"9c38":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".relative[data-v-7249e0da]{position:relative}.time[data-v-7249e0da]{color:red;margin-right:%?10?%}.guiderBtn[data-v-7249e0da]{position:absolute;top:%?150?%;right:%?80?%;padding:0 %?20?%;height:%?40?%;width:auto;background-color:#000;color:#fff;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?10?%;z-index:999}.image[data-v-7249e0da]{width:100%;height:100vh;position:absolute}.swiper[data-v-7249e0da]{height:100vh}",""]),t.exports=e},b206:function(t,e,o){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function a(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function n(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=a,e.removeStorage=n},d436:function(t,e,o){"use strict";var i=o("2bbf"),a=o.n(i);a.a},ec84:function(t,e,o){"use strict";o.r(e);var i=o("9902"),a=o("4a57");for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);o("d436");var s,r=o("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7249e0da",null,!1,i["a"],s);e["default"]=u.exports}}]);
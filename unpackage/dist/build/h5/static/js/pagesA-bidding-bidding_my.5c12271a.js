(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-bidding-bidding_my"],{"0e8e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};i.default=a},"163d":function(t,i,e){var a=e("7c406");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("78ef6c4a",a,!0,{sourceMap:!1,shadowMode:!1})},"240e":function(t,i,e){var a=e("a6f3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("369cca85",a,!0,{sourceMap:!1,shadowMode:!1})},3257:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},"344b":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".border[data-v-2e61f961]{border-bottom:0 solid #eee!important}.head[data-v-2e61f961]{position:fixed;left:0;top:0;background-color:#fff;width:100%;z-index:9999;border-bottom:1px solid #eee}.head .white[data-v-2e61f961]{background:#fff}.header[data-v-2e61f961]{color:#fff;border:none}.header img[data-v-2e61f961]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-2e61f961]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-2e61f961]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-2e61f961]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-2e61f961]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-2e61f961]{background:transparent;border-bottom:0}.title_w[data-v-2e61f961]{color:#fff!important}",""]),t.exports=i},4284:function(t,i,e){"use strict";e.r(i);var a=e("a7c6"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"4dee":function(t,i,e){"use strict";var a=e("58d2"),n=e.n(a);n.a},"58d2":function(t,i,e){var a=e("344b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("74ed8ca1",a,!0,{sourceMap:!1,shadowMode:!1})},6156:function(t,i,e){"use strict";e.r(i);var a=e("7ffd"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"6a89":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{style:"display:flex;height:"+t.BoxHeight},[e("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[e("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),e("div",{staticClass:"header"},[t.flag&&!t.returnFlag?e("div",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?e("img",{attrs:{src:t.back1}}):e("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():e("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._back1.apply(void 0,arguments)}}}),e("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},"6c1c":function(t,i,e){"use strict";e.r(i);var a=e("6a89"),n=e("4284");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("4dee");var s,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"2e61f961",null,!1,a["a"],s);i["default"]=r.exports},"7c406":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.head[data-v-6d4338cf],\r\n.order_header[data-v-6d4338cf]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-6d4338cf]{height:%?88?%;padding:0 %?30?%;border-bottom:1px solid #eee;font-size:%?40?%;color:#242424}.head_img[data-v-6d4338cf]{width:%?24?%;height:%?36?%}.head_search[data-v-6d4338cf]{width:%?40?%;height:%?40?%;visibility:hidden}.order_header[data-v-6d4338cf]{-webkit-justify-content:space-around;justify-content:space-around;width:100%}.header_li[data-v-6d4338cf]{width:25%;text-align:center;height:%?84?%;line-height:%?84?%;font-size:%?30?%;color:#242424}.header_border[data-v-6d4338cf]{color:#242424;position:relative}.header_border[data-v-6d4338cf]:after{border-bottom:%?5?% solid #d30202;position:absolute;bottom:0;width:50%;content:"";left:25%}.last_right>div[data-v-6d4338cf]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.position_head[data-v-6d4338cf]{position:fixed;left:0;top:0;width:100%;background-color:#fff;z-index:35}\r\n\r\n/* 列表页 */.list_ul[data-v-6d4338cf]{position:relative;padding:%?24?% 0}.list_imgurl[data-v-6d4338cf]{width:%?200?%;height:%?200?%;position:absolute;top:%?24?%;left:%?24?%}.list_content[data-v-6d4338cf]{padding:0 %?24?% 0 %?248?%}.list_title[data-v-6d4338cf]{font-weight:700;font-size:%?28?%;color:#242424;line-height:%?38?%;height:%?76?%;margin-bottom:%?49?%}.list_up[data-v-6d4338cf]{font-size:%?24?%;color:#888;line-height:%?34?%;margin-bottom:%?8?%}.list_up span[data-v-6d4338cf]{color:#d30202;font-size:%?30?%;font-weight:700;margin-right:%?10?%}.list_number[data-v-6d4338cf]{font-size:%?22?%;color:#888;line-height:%?32?%}.list_bottom[data-v-6d4338cf]{margin-top:%?80?%;clear:both;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border-top:1px solid #d2d2d2;position:relative;height:%?80?%;font-size:%?24?%;color:#242424;padding:0 %?30?%}.list_bottom img[data-v-6d4338cf]{width:%?33?%;height:%?35?%;vertical-align:middle;margin:auto 0;margin-left:%?10?%}.list_bottom span[data-v-6d4338cf]{margin:auto 0}.list_nt[data-v-6d4338cf]{color:#d30202;font-size:%?24?%;margin:auto 0;margin-left:%?10?%!important}.list_status[data-v-6d4338cf]{position:absolute;background-size:100% 100%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-weight:700;bottom:%?12?%;right:%?30?%;width:%?176?%;height:%?56?%;text-align:center}.list_status span[data-v-6d4338cf]{margin:auto;color:#fff}.list_height[data-v-6d4338cf]{height:%?10?%;background-color:#f4f4f4}\r\n\r\n/* .list_num{width: 34upx;height: 34upx;line-height: 30upx;border: 3upx solid #fff;border-radius: 50%;background-color: red;font-size: 6upx;text-align: center;position: absolute;top: 11.5upx;right: 9upx;} */\r\n\r\n/* 正在热拍 */.list_content2[data-v-6d4338cf]{padding:%?24?%;position:relative}.list_imgurl2[data-v-6d4338cf]{width:%?227?%;height:%?284?%;display:block;margin:0 auto;margin-bottom:%?16?%}.list_li2 .list_title[data-v-6d4338cf]{height:auto;margin-bottom:%?16?%}.list_times[data-v-6d4338cf]{height:%?35?%;line-height:%?35?%;font-size:%?32?%;color:#242424}.list_times img[data-v-6d4338cf]{width:%?33?%;height:%?35?%;vertical-align:middle;margin:%?-11?% %?16?% 0 0}.list_li2 .list_up[data-v-6d4338cf]{margin-top:%?16?%;margin-bottom:0}.list_li2 .list_up span[data-v-6d4338cf]{margin-right:%?60?%}.list_li2 .list_status[data-v-6d4338cf]{font-size:%?26?%;color:#fefefe;bottom:%?10?%}.load[data-v-6d4338cf]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.1)}.list_break1[data-v-6d4338cf]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.list_break2[data-v-6d4338cf]{word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.list_status_ing[data-v-6d4338cf]{color:#fff;background:#242424;position:absolute;right:15px;width:%?130?%;height:%?50?%;line-height:%?50?%;text-align:center;font-size:%?26?%;color:#fefefe;bottom:%?20?%;border-radius:%?16?%}\r\n\r\n/* 优化 */.yh-ddlist[data-v-6d4338cf]{overflow-x:hidden;position:relative}',""]),t.exports=i},"7ffd":function(t,i,e){"use strict";var a=e("ee27");e("99af"),e("d3b7"),e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("f3f3")),o=a(e("6c1c")),s=e("2f62"),d=(e("b206"),a(e("ef75")),{data:function(){return{title:"我的竞拍",fastTap:!0,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noFind.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",search2x:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/search@2x.png",list_img:"https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1547003354273.png",list_nao:"https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1548060359295.png",list_etc:"https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1548060492548.png",list_bg_pic:"background-image: url(https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1548060492548.png)",list_bg_pro:"background-image: url(https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1548062041627.png)",list_n:!1,head:!0,header:["即将开拍","正在热拍"],access_id:"",order:"",status_id:"",dis_play:"",sreach_value:"",page:1,load_next:!0,allLoaded:!1,autoFill:!1,bottomStatus:"",bottomPullText:"上拉加载更多...",bottomDropText:"释放更新...",loading:!1,load:!0,stau_num:null,timer:null,count:"",flag:!0,loadingType:0,value:"",clickFlag:!1}},components:{Heads:o.default},onLoad:function(){this.status_id=this.$store.state.head_id,this.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},computed:{halfWidth:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,i=parseInt(t),e=2*i;return uni.upx2px(e)+"px"}},onShow:function(){var t=this;this.status_id=this.$store.state.head_id;var i=new Promise((function(i,e){t.LaiKeTuiCommon.getLKTApiUrl().then((function(){i(1231)}))}));i.then((function(){t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../../pages/login/login?landing_code=1",(function(){t.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):t.$store.state.access_id,t._axios()}))}))}))},onReachBottom:function(){var t=this;if(t.load_next){t.page+=1;var i={module:"app",auction:"auction",m:"index",type:"my",access_id:this.access_id,page:this.page};uni.request({data:i,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){200==i.data.code&&(i.data.list.length>0?t.order=t.order.concat(i.data.list):(t.load_next=!1,uni.showToast({title:"没有更多了",duration:1500,icon:"none"})))},error:function(t){console.log(t)},complete:function(){uni.hideLoading()}})}else uni.showToast({title:"没有更多了",duration:1500,icon:"none"})},methods:(0,n.default)({},(0,s.mapMutations)({order_id:"SET_ORDER_ID",address_id:"SET_ADDRESS_ID",bindding_num:"SET_BINDDING_NUM",bind_status:"SET_BIND_STATUS",bind_promise:"SET_BIND_PPOMISE",head_id:"SET_HEAD_ID",pay_lx:"SET_PAY_LX"}),{gotoHomePage:function(){var t=this;t.clickFlag||(t.clickFlag=!0,uni.switchTab({url:"../../pages/tabBar/my"}))},_toHome:function(){uni.switchTab({url:"../../pages/tabBar/home"})},_back:function(){this.flag=!1,uni.navigateBack({delta:1})},nav_click:function(t,i,e){this.bindding_num(t),0==this.status_id?(this.bind_promise(0),this.bind_status(0)):2==this.status_id?(this.bind_promise(1),this.bind_status(i)):1==this.status_id&&(1==i?this.bind_promise(e):this.bind_promise(1),this.bind_status(i)),uni.navigateTo({url:"bidding_detailed_Two?mark="+i+"&from_my=1"})},nav_click_sm:function(t,i,e){if(this.bindding_num(t),0==this.status_id?(this.bind_promise(0),this.bind_status(0)):2==this.status_id?(this.bind_promise(1),this.bind_status(i)):1==this.status_id&&(1==i?this.bind_promise(e):this.bind_promise(1),this.bind_status(i)),3==i)return this.pay_lx("jp"),uni.navigateTo({url:"../../pagesA/bidding/bidding_order"}),!1;4==i&&uni.navigateTo({url:"../../pages/order/myOrder"})},_axios:function(){var t=this,i={module:"app",action:"auction",m:"index",access_id:this.access_id,type:"my",page:this.page};console.log(i.type),uni.request({data:i,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){console.log("9090"),console.log(i),t.load=!1;var e=i.data.res;t.order=e,console.log("res=="),console.log(e),e.length<10?t.allLoaded=!0:t.allLoaded=!1},error:function(t){console.log(t)}})}})});i.default=d},"9fcf":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(i){arguments[0]=i=t.$handleEvent(i),t.changeLoginStatus.apply(void 0,arguments)}}}),e("heads",{attrs:{title:t.title}}),e("div",{staticClass:"yh-ddlist"},[e("div",{staticClass:"list_height"}),t.order.length&&!t.load?t._l(t.order,(function(i,a){return e("ul",{key:a,staticClass:"list_ul"},[t.order.length&&!t.load?e("li",{class:1==t.status_id?"list_li2":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav_click(i.id,i.mark,i.is_promise)}}},[e("div",[e("img",{staticClass:"list_imgurl",attrs:{src:i.imgurl}}),e("div",{staticClass:"list_content"},[e("div",{staticClass:"list_title list_break2"},[t._v(t._s(i.title))]),e("div",{staticClass:"list_up list_break1"},[t._v("起拍价"),e("span",[t._v("¥"+t._s(i.price))]),t._v("出价"+t._s(i.pepole)+"人")]),e("div",{staticClass:"list_number list_break1"},[t._v("出价幅度¥"+t._s(i.add_price)+"/次")])]),e("div",{staticClass:"list_bottom"},[e("span",[t._v(t._s(1==i.mark?"进行中":2==i.mark?"已结束":3==i.mark?"待付款":4==i.mark?"已完成":5==i.mark?"已结束":""))]),e("img",{staticClass:"list_time",attrs:{src:t.list_nao}}),3==i.mark?e("span",{staticClass:"list_nt"},[t._v(t._s(i.invalid_time)+"前下单")]):t._e(),4==i.mark&&0==i.is_buy?e("span",{staticClass:"list_nt"},[t._v(t._s(i.endtime)+"截止")]):t._e(),4==i.mark&&1==i.is_buy?e("span",{staticClass:"list_nt"},[t._v(t._s(i.endtime)+"截止")]):t._e(),3!=i.mark&&4!=i.mark?e("span",{staticClass:"list_nt"},[t._v(t._s(i.endtime)+"截止")]):t._e(),3==i.mark||4==i.mark?e("div",{staticClass:"list_status",style:2==i.mark||5==i.mark?t.list_bg_pic:t.list_bg_pro,on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.nav_click_sm(i.id,i.mark,i.is_promise)}}},[e("span",[t._v(t._s(1==i.mark?"继续竞拍":2==i.mark?"已结束":3==i.mark?"待付款":4==i.mark?"我的订单":5==i.mark?"已结束":""))])]):e("div",{staticClass:"list_status",style:2==i.mark||5==i.mark?t.list_bg_pic:t.list_bg_pro},[e("span",[t._v(t._s(1==i.mark?"继续竞拍":2==i.mark?"已结束":3==i.mark?"待付款":4==i.mark?"我的订单":5==i.mark?"已结束":""))])])])]),e("div",{staticClass:"list_height"})]):t._e()])})):t._e()],2),t.order.length||t.load?t._e():e("div",{staticClass:"empty_play"},[e("img",{attrs:{src:t.emptyImg}}),e("p",[t._v("您暂时还没有相关的订单哦")]),e("p",{staticClass:"empty_p"},[t._v("可以去看看有那些想买的")]),e("div",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._toHome()}}},[t._v("去商城逛逛")])]),t.load?e("div",{staticClass:"load"},[e("div",[e("img",{attrs:{src:t.loadImg}}),e("p",[t._v("加载中…")])])]):t._e()],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},a6f3:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".load-more[data-v-3fb1f804]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-3fb1f804]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-3fb1f804]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-3fb1f804]{position:absolute}.load1[data-v-3fb1f804],\n.load2[data-v-3fb1f804],\n.load3[data-v-3fb1f804]{height:24px;width:24px}.load2[data-v-3fb1f804]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-3fb1f804]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-3fb1f804]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-3fb1f804 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-3fb1f804{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=i},a7c6:function(t,i,e){"use strict";var a=e("ee27");e("a9e3"),e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("f3f3")),o=e("2f62"),s=e("b206"),d={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,i=parseInt(t);return i+"px"},BoxHeight:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,i=0,e=parseInt(t)+uni.upx2px(88);return i=e&&e>0?e:uni.upx2px(88),i+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)({},(0,o.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};i.default=d},b206:function(t,i,e){"use strict";function a(t,i){uni.setStorage({key:t,data:i,success:function(){console.log("setSuccess")}})}function n(t){var i;return uni.getStorage({key:t,success:function(t){i=t.data,console.log("getSuccess")}}),i}function o(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(i,"__esModule",{value:!0}),i.setStorage=a,i.getStorage=n,i.removeStorage=o},ca6d:function(t,i,e){"use strict";var a=e("163d"),n=e.n(a);n.a},e5ca:function(t,i,e){"use strict";e.r(i);var a=e("9fcf"),n=e("6156");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("ca6d");var s,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"6d4338cf",null,!1,a["a"],s);i["default"]=r.exports},ef75:function(t,i,e){"use strict";e.r(i);var a=e("3257"),n=e("f2f4");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("fd53");var s,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"3fb1f804",null,!1,a["a"],s);i["default"]=r.exports},f2f4:function(t,i,e){"use strict";e.r(i);var a=e("0e8e"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},fd53:function(t,i,e){"use strict";var a=e("240e"),n=e.n(a);n.a}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/integral/integral_detail"],{"0f73":function(e,i,o){"use strict";o.r(i);var t=o("e04d"),n=o("a2e2");for(var a in n)"default"!==a&&function(e){o.d(i,e,(function(){return n[e]}))}(a);o("c137");var s,r=o("f0c5"),c=Object(r["a"])(n["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],s);i["default"]=c.exports},4731:function(e,i,o){"use strict";(function(e){o("a1f9");t(o("66fd"));var i=t(o("0f73"));function t(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,o("543d")["createPage"])},a2e2:function(e,i,o){"use strict";o.r(i);var t=o("d864"),n=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(i,e,(function(){return t[e]}))}(a);i["default"]=n.a},c137:function(e,i,o){"use strict";var t=o("e126"),n=o.n(t);n.a},d864:function(e,i,o){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;o("2f62"),o("b206");var t,n=o("b8aa");function a(e,i,o){return i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e}var s=function(){Promise.all([o.e("common/vendor"),o.e("components/header")]).then(function(){return resolve(o("6c1c"))}.bind(null,o)).catch(o.oe)},r=function(){Promise.all([o.e("common/vendor"),o.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(o("7308"))}.bind(null,o)).catch(o.oe)},c=(t={data:function(){return{close:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/close_bb.png",saves:"",integral_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral.png",integral_sc1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_sc1.png",integral_sc2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_sc2.png",integral_kf:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_kf.png",yulan:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon1/yulan.gif",fx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/share.png",top_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/kaobei2x.png",niming:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_logo2x.png",wx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",erm_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ewmShare.png",erm_pyq_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wepyq.png",bback_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/bback.png",imgurls:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/landing_logo.png",logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/lktlogo.png",you_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/jiantou2x.png",option:"",comm_count:0,num:"",price:"",imgurl:"",pro:"",comments:"",type:"",access_id:"",g_show:!1,isfx:"",pro_id:"",goods:"",shop_list:"",ewmImg:"",saveEWM:!1,collection:"",collection_id:"",title:"商品详情",is_jifen:!0,is_shop:!1,shop_id:"",sharehrefTitle:"",shareImg:"",shareContent:"",shareHref:"",shareMask:!1,shareDiv:!1,fastTap:!0,isopen:1,shareWay:[],headerplus:!1}},computed:{},onLoad:function(e){this.pro_id=e.pro_id},onShow:function(){this._axios()},onShareAppMessage:function(i){if(0!=this.login_status)return i.from,{title:this.sharehrefTitle,path:this.shareHref2,imageUrl:this.shareImg,bgImgUrl:this.shareImg,success:function(e){this.shareHref2="/pagesB/integral/integral_detail?pro_id="+this.pro_id}};e.navigateTo({url:"../../login/login?landing_code=1"})},methods:{moveHandle:function(){},_back1:function(){this.outtime()},timeout:function(){this.outtime()},outtime:function(){e.showToast({title:"未登录，请先登录",icon:"none",duration:1500}),setTimeout((function(){e.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1e3)},setHead:function(){var i=this,o=e.createSelectorQuery().in(this);o.select("#boxs").boundingClientRect((function(e){e.top>-20?i.headerplus=!1:e.top<-20&&(i.headerplus=!0)})).exec()},_invite:function(e){this.shareDiv=!1,(0,n.LaiKeTuiInvite)(e,this)},_evaluate:function(i){this.bargain?e.navigateTo({url:"../../pages/evaluate/evaluate?bargain=true&pid="+i}):e.navigateTo({url:"../../pages/evaluate/evaluate?pid="+i})},_buy:function(){var i=this;1!=this.goods.is_delete&&0!=this.isopen?this.$refs.lktAuthorizeComp.handleAfterAuth(this,"../../pages/login/login?landing_code=1",(function(){e.navigateTo({url:"../integral/integral_order?id="+i.pro_id})})):e.showToast({title:"该活动已结束！",duration:1500,icon:"none"})},_shareDiv:function(){this.shareDiv=!1},_closeAllMask:function(){this.shareMask=!1,this.saveEWM=!1},_downEWM:function(){e.getImageInfo({src:this.ewmImg,success:function(i){e.saveImageToPhotosAlbum({filePath:i.path,success:function(){e.showToast({title:"保存图片成功",duration:1500,icon:"none"})}})},fail:function(){e.showToast({title:"保存图片失败",duration:1500,icon:"none"})}})},showSaveEWM:function(e){var i=this;i.is_shop?(0,n.LaiKeTuiShopEWM)(e,i):(0,n.LaiKeTuiShowSaveEWM)(e,i)},showShareMask:function(i){var o=this;if(1!=o.goods.is_delete&&0!=o.isopen){if(i&&i>0){console.log("-------------------shop---------------"+i),o.is_shop=!0,o.shop_id=i,o.sharehrefTitle=o.shop_list.shop_name,o.shareImg=o.shop_list.shop_logo,o.shareContent=o.shop_list.shop_name;var t=e.getStorageSync("h5_url");o.shareHref=t+"pagesA/store/store?is_share=true&shop_id="+i,o.shareHref2="/pagesA/store/store?is_share=true&shop_id="+i}else{console.log("-------------------noshop---------------"+o.goods.product_title),o.is_shop=!1,o.shareHref2="/pagesB/integral/integral_detail?pro_id="+o.pro_id,o.sharehrefTitle=o.goods.product_title,o.shareImg=o.goods.imgurl,o.shareContent=o.goods.attribute+o.goods.product_title;t=e.getStorageSync("h5_url");o.shareHref=t+"pagesB/integral/integral_detail?pro_id="+o.pro_id+"&isfx=true"}o.$refs.lktAuthorizeComp.handleAfterAuth(o,"../../pages/login/login?landing_code=1",(function(){o.shareMask=!0}))}else e.showToast({title:"该活动已结束！",duration:1500,icon:"none"})},closeShareMask:function(){this.shareMask=!1,this.overflow="scroll"},_goback:function(){var i=getCurrentPages();1!==i.length?e.navigateBack():e.switchTab({url:"../../pages/tabBar/home"})},_collection:function(){var e=this;e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){(0,n.LaiKeTui_collection)(e)}))},kf:function(i){var o=this;o.$refs.lktAuthorizeComp.handleAfterAuth(o,"../../pages/login/login?landing_code=1",(function(){e.navigateTo({url:"../../pages/message/service?pid="+i})}))},_goStore:function(i){e.navigateTo({url:"../../pagesA/store/store?shop_id="+i})},_axios:function(){var i=this;console.log("----------------------axios-------"+i.pro_id);var o={module:"app",action:"integral",app:"goodsdetail",access_id:i.access_id,id:i.pro_id};e.request({data:o,url:e.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(o){if(console.log(o),200==o.data.code){var t=o.data.goods;t.content=t.content.replace(/<img/g,'<img style="width:100%;"'),i.goods=t,i.shop_list=o.data.shop_list,i.collection=1==i.goods.is_collection,i.collection_id=i.goods.collection_id,i.comments=o.data.comments,i.isopen=o.data.isopen,i.comm_count=o.data.comm_count}else e.showToast({title:o.data.msg,duration:1500,icon:"none"})},error:function(e){console.log(e)}})}}},a(t,"computed",{halfWidth:function(){var i=e.getStorageSync("data_height")?e.getStorageSync("data_height"):this.$store.state.data_height,o=parseInt(i),t=2*o;return e.upx2px(t)+"px"}}),a(t,"components",{heads:s,wxParse:r}),t);i.default=c}).call(this,o("543d")["default"])},e04d:function(e,i,o){"use strict";var t,n=function(){var e=this,i=e.$createElement;e._self._c},a=[];o.d(i,"b",(function(){return n})),o.d(i,"c",(function(){return a})),o.d(i,"a",(function(){return t}))},e126:function(e,i,o){}},[["4731","common/runtime","common/vendor"]]]);
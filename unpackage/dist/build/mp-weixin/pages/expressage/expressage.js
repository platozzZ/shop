(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/expressage/expressage"],{"1f25":function(e,t,n){"use strict";var i=n("e17a"),o=n.n(i);o.a},"25a2":function(e,t,n){"use strict";(function(e){n("a1f9");i(n("66fd"));var t=i(n("4766"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"3f27":function(e,t,n){"use strict";n.r(t);var i=n("e198"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},4766:function(e,t,n){"use strict";n.r(t);var i=n("97f3"),o=n("3f27");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("1f25");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"4c59cfc0",null,!1,i["a"],s);t["default"]=r.exports},"97f3":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},e17a:function(e,t,n){},e198:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("b206"),n("4c9f");var i=function(){Promise.all([n.e("common/vendor"),n.e("components/header")]).then(function(){return resolve(n("6c1c"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{title:"物流信息",sNo:"",arr:new Array(5),access_id:"",courier_num:"",name:"",expressage:"",source:"",msg:"",zwwl:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/zwwl.png"}},onLoad:function(t){if(this.access_id=e.getStorageSync("access_id")?e.getStorageSync("access_id"):this.$store.state.access_id,t.list){var n=JSON.parse(t.list);this.courier_num=n.courier_num,this.name=n.kuaidi_name,this.expressage=n.list||[],0==this.expressage.length&&(this.msg="暂无物流信息")}},onShow:function(){this.$nextTick((function(){this.$refs.lktAuthorizeComp.handleAfterAuth(this,"../login/login?landing_code=1")}))},methods:{changeLoginStatus:function(){this.access_id=e.getStorageSync("access_id"),this._axios()},onCopy:function(){e.setClipboardData({data:this.courier_num,success:function(t){e.showToast({title:"复制成功",icon:"none",duration:1500})}})},onError:function(t){e.showToast({title:"无法复制文本！",duration:1e3,icon:"none"})},_axios:function(){var t=this;e.showLoading({title:"数据加载中..."});var n={module:"app",action:"order",app:"logistics",id:this.sNo,access_id:this.access_id,type:""};1==this.source&&(n.type="pond"),e.request({url:e.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},data:n,method:"POST",success:function(n){if(e.hideLoading(),200==n.data.code){var i=n.data.res;t.courier_num=i[0].courier_num,t.name=i[0].kuaidi_name,t.expressage=i[0].list||[],0==t.expressage.length&&(t.msg="暂无物流信息")}else e.showToast({title:n.data.message,duration:1500,icon:"none"})},fail:function(t){e.showToast({title:"数据加载失败！",duration:2e3,icon:"none"})}})}},components:{heads:i}};t.default=o}).call(this,n("543d")["default"])}},[["25a2","common/runtime","common/vendor"]]]);
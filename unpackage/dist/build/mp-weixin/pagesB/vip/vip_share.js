(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/vip/vip_share"],{"0d7a":function(t,e,n){"use strict";var a=n("c821"),c=n.n(a);c.a},"1a48b":function(t,e,n){"use strict";n.r(e);var a=n("963c"),c=n("cb69");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("0d7a");var s,i=n("f0c5"),r=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"21282413",null,!1,a["a"],s);e["default"]=r.exports},"2c22":function(t,e,n){"use strict";(function(t){n("a1f9");a(n("66fd"));var e=a(n("1a48b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"76b8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){Promise.all([n.e("common/vendor"),n.e("components/header")]).then(function(){return resolve(n("6c1c"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{title:"会员分享",canvas:"",top:"0",saveImgFlag:!0}},components:{Heads:a},onLoad:function(){t.setNavigationBarTitle({title:this.title})},onShow:function(){this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},methods:{_axios:function(){var e,n=this;e=1;var a={access_id:n.access_id,module:"app",action:"recharge",app:"share",store_type:e};t.request({data:a,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){200==t.data.code&&(n.canvas=t.data.imgUrl)},error:function(t){console.log(t)}})},saveImg:function(){if(this.saveImgFlag){this.saveImgFlag=!1;var e=this;t.getImageInfo({src:e.canvas,success:function(n){n.path&&t.saveImageToPhotosAlbum({filePath:n.path,success:function(){t.showToast({icon:"none",title:"保存成功"})},complete:function(){e.saveImgFlag=!0}})}})}}}};e.default=c}).call(this,n("543d")["default"])},"963c":function(t,e,n){"use strict";var a,c=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},c821:function(t,e,n){},cb69:function(t,e,n){"use strict";n.r(e);var a=n("76b8"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=c.a}},[["2c22","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/detailedMesage"],{"20c8":function(t,e,n){"use strict";n.r(e);var a=n("931c"),i=n("97fa");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("d5a4");var o,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"51f1e596",null,!1,a["a"],o);e["default"]=d.exports},"501d":function(t,e,n){},"931c":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}))},"97fa":function(t,e,n){"use strict";n.r(e);var a=n("da34"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},c8e1:function(t,e,n){"use strict";(function(t){n("a1f9");a(n("66fd"));var e=a(n("20c8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d5a4:function(t,e,n){"use strict";var a=n("501d"),i=n.n(a);i.a},da34:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("b206"),i=function(){Promise.all([n.e("common/vendor"),n.e("components/header")]).then(function(){return resolve(n("6c1c"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{title:"系统信息",access_id:"",list:"",id:""}},onLoad:function(t){var e=this;this.access_id=(0,a.getStorage)("access_id")?(0,a.getStorage)("access_id"):this.$store.state.access_id,this.id=t.id,e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../login/login?landing_code=1",(function(){e.getDetailedMesageData()}))}))},onShow:function(){var t=this;t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){t.getDetailedMesageData()}))}))},components:{Heads:i},computed:{halfWidth:function(){var e=(0,a.getStorage)("data_height")?(0,a.getStorage)("data_height"):this.$store.state.data_height,n=parseInt(e),i=2*n;return t.upx2px(i)+"px"}},methods:{changeLoginStatus:function(){this.access_id=t.getStorageSync("access_id"),this.getDetailedMesageData()},getDetailedMesageData:function(){var e=this,n={access_id:this.access_id,id:this.id,type:2,module:"app",action:"message",app:"oneindex"};t.request({data:n,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){200==n.data.code?e.list=n.data.message:t.showToast({title:n.data.message,duration:1500,icon:"none"})},error:function(t){}})}}};e.default=c}).call(this,n("543d")["default"])}},[["c8e1","common/runtime","common/vendor"]]]);
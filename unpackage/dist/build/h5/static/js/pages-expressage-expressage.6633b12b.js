(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-expressage-expressage"],{"1a65":function(e,t,a){"use strict";var i,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(t){arguments[0]=t=e.$handleEvent(t),e.changeLoginStatus.apply(void 0,arguments)}}}),a("heads",{attrs:{title:e.title}}),a("div",{staticClass:"expressage_name"},[a("div",[a("p",[e._v("物流公司："),a("span",[e._v(e._s(e.name))])]),a("p",[e._v("物流单号："+e._s(e.courier_num))])]),a("div",{staticClass:"copy",attrs:{type:"button"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCopy()}}},[e._v("复制")])]),a("v-uni-input",{staticClass:"courier_num_opacity",attrs:{id:"courier_num",type:"text"},model:{value:e.courier_num,callback:function(t){e.courier_num=t},expression:"courier_num"}}),a("div",{staticClass:"lines"}),e.expressage.length>0?a("ul",[e.expressage.length?e._l(e.expressage,(function(t,i){return a("li",{key:i},[a("div",{staticClass:"expressage_right"},[a("p",[e._v(e._s(t.context)),a("span",{staticClass:"expressage_phone"})]),a("p",{staticClass:"expressage_time"},[a("span",[e._v(e._s(t.ftime))])])]),a("div",{staticClass:"expressage_left"},[a("div",{staticClass:"expressage_yuan"}),a("div",{ref:"expressage__xian",refInFor:!0,staticClass:"expressage__xian"})])])})):e._e(),e.expressage.length?e._e():a("li",[a("div",{staticClass:"expressage_right"}),a("div",{staticClass:"expressage_left"},[a("div",{staticClass:"expressage_yuan"}),a("div",{ref:"expressage__xian",staticClass:"expressage__xian"})])])],2):e._e(),e.expressage.length?e._e():a("div",{staticClass:"zwwl"},[a("img",{staticStyle:{width:"200upx",height:"227upx","margin-bottom":"20upx"},attrs:{src:e.zwwl}}),e._v("暂时还没有物流信息哦~")])],1)},n=[];a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}))},"3f27":function(e,t,a){"use strict";a.r(t);var i=a("8a2c"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},4766:function(e,t,a){"use strict";a.r(t);var i=a("1a65"),s=a("3f27");for(var n in s)"default"!==n&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("b8d6");var o,r=a("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"ff9cdfa0",null,!1,i["a"],o);t["default"]=c.exports},5281:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".copy[data-v-ff9cdfa0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.expressage_name[data-v-ff9cdfa0]{margin:%?30?%;position:relative}.expressage_name>div[data-v-ff9cdfa0]:first-child{padding-top:%?20?%}.expressage_name>div p[data-v-ff9cdfa0]{font-size:%?28?%;color:#9d9d9d}.expressage_name>div p[data-v-ff9cdfa0]:first-child{margin-bottom:%?16?%}.courier_num_opacity[data-v-ff9cdfa0]{opacity:0;position:absolute}.expressage_name>div span[data-v-ff9cdfa0]{color:#020202}.copy[data-v-ff9cdfa0]{width:%?100?%;height:%?40?%;border:1px solid #bbb;border-radius:%?8?%;color:#bbb;font-size:%?22?%;position:absolute;right:0;bottom:%?-10?%}ul[data-v-ff9cdfa0]{margin:%?30?%}li[data-v-ff9cdfa0]{padding-left:%?30?%;position:relative;height:%?180?%}.expressage_right p[data-v-ff9cdfa0]{font-size:%?28?%;color:#020202}.expressage_right p[data-v-ff9cdfa0]:first-child{margin-bottom:%?16?%}.expressage_right[data-v-ff9cdfa0]{margin-left:%?30?%}.expressage_time span[data-v-ff9cdfa0]{font-size:%?22?%;color:#9d9d9d}.expressage_phone[data-v-ff9cdfa0]{font-size:%?26?%;color:#0080ff}.expressage_left[data-v-ff9cdfa0]{position:absolute;left:0;bottom:%?10?%;margin-right:%?30?%}.expressage_yuan[data-v-ff9cdfa0]{width:%?20?%;height:%?20?%;border-radius:50%;background-color:#020202}.expressage__xian[data-v-ff9cdfa0]{height:%?124?%;border-left:1px solid #9d9d9d;position:absolute;left:%?9?%;bottom:%?35?%}li:last-child>div[data-v-ff9cdfa0]:last-child{border:none}.copy_input[data-v-ff9cdfa0]{border:none}\r\n\r\n/* 优化 */.lines[data-v-ff9cdfa0]{height:%?30?%;background-color:#eee;width:100%}.zwwl[data-v-ff9cdfa0]{text-align:center;color:#909090;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-top:%?224?%;font-size:%?28?%;color:#888;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),e.exports=t},"8a2c":function(e,t,a){"use strict";var i=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a("5b52"));var s=i(a("6c1c")),n=(a("b206"),a("4c9f")),o={data:function(){return{title:"物流信息",sNo:"",arr:new Array(5),access_id:"",courier_num:"",name:"",expressage:"",source:"",msg:"",zwwl:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/zwwl.png"}},onLoad:function(e){if(this.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,e.list){var t=JSON.parse(e.list);this.courier_num=t.courier_num,this.name=t.kuaidi_name,this.expressage=t.list||[],0==this.expressage.length&&(this.msg="暂无物流信息")}},onShow:function(){this.$nextTick((function(){this.$refs.lktAuthorizeComp.handleAfterAuth(this,"../login/login?landing_code=1")}))},methods:{changeLoginStatus:function(){this.access_id=uni.getStorageSync("access_id"),this._axios()},onCopy:function(){(0,n.copyText)("#courier_num input",this.courier_num)},onError:function(e){uni.showToast({title:"无法复制文本！",duration:1e3,icon:"none"})},_axios:function(){var e=this;uni.showLoading({title:"数据加载中..."});var t={module:"app",action:"order",app:"logistics",id:this.sNo,access_id:this.access_id,type:""};1==this.source&&(t.type="pond"),uni.request({url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},data:t,method:"POST",success:function(t){if(uni.hideLoading(),200==t.data.code){var a=t.data.res;e.courier_num=a[0].courier_num,e.name=a[0].kuaidi_name,e.expressage=a[0].list||[],0==e.expressage.length&&(e.msg="暂无物流信息")}else uni.showToast({title:t.data.message,duration:1500,icon:"none"})},fail:function(e){uni.showToast({title:"数据加载失败！",duration:2e3,icon:"none"})}})}},components:{heads:s.default}};t.default=o},aac7:function(e,t,a){var i=a("5281");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("1603e162",i,!0,{sourceMap:!1,shadowMode:!1})},b8d6:function(e,t,a){"use strict";var i=a("aac7"),s=a.n(i);s.a}}]);
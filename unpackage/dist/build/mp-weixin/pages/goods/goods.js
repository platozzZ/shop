(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"0c1f":function(t,e,i){},2392:function(t,e,i){"use strict";(function(t){i("a1f9");a(i("66fd"));var e=a(i("bb49"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},5038:function(t,e,i){"use strict";var a=i("0c1f"),n=i.n(a);n.a},8964:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.numb>1&&Boolean(t.haveSkuBean)?t.numb--:t.numb},t.e1=function(e){t.numb<t.num&&Boolean(t.haveSkuBean)&&t.numb++})},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},abe3:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=function(){Promise.all([i.e("common/vendor"),i.e("components/header")]).then(function(){return resolve(i("6c1c"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{fastTap:!0,shopImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping_l2x.png",closed:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",noImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noFind.png",title:"",cid:"",loadingType:0,page:1,list:"",jian_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jian2x.png",jian_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jianhui2x.png",jia_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jia+2x.png",jia_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/add+2x.png",attribute_id:"",attrList:"",skuBeanList:"",mask_display:!1,ys_price:"",num:"",price:"",imgurl:"",scan_d:"",pro:"",load_next:!0,haveSkuBean:"",numb:1,access_id:"",proid:"",msg:"",shop_id:""}},onLoad:function(e){this.cid=e.cid,this.title=e.name,this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id,this.shop_id=e.shop_id,this._axios()},onReachBottom:function(){var e=this;if(e.load_next){if(t.showLoading({title:"请稍后..."}),0!=e.loadingType)return;e.loadingType=1,e.page+=1;var i={cid:e.cid,module:"app",action:"search",app:"listdetail",page:e.page,pro:""};e.shop_id&&(i.shop_id=e.shop_id),t.request({data:i,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){t.hideLoading(),i.data.pro.length>0?(e.list=e.list.concat(i.data.pro),e.loadingType=0):(e.load_next=!1,t.showToast({title:"没有更多了",duration:1500,icon:"none"}),e.loadingType=2)},error:function(t){console.log(t)},complete:function(){t.hideLoading()}})}else t.showToast({title:"没有更多了",duration:1500,icon:"none"})},methods:o({_axios:function(){t.showLoading({title:"请稍后..."});var e=this,i={cid:this.cid,module:"app",action:"search",app:"listdetail",page:this.page,pro:""};this.shop_id&&(i.shop_id=this.shop_id),t.request({data:i,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){if(t.hideLoading(),200==i.data.code){var a=i.data,n=a.pro,o=a.pname;e.list=n,e.title=o,o&&t.setNavigationBarTitle({title:o})}else t.showToast({title:i.data.message,duration:1500,icon:"none"})},error:function(t){console.log(t)},complete:function(){t.hideLoading()}})},_goods:function(e){this.pro_id(e),t.navigateTo({url:"../goods/goodsDetailed?pro_id="+e})},shopping_j:function(e){var i=this;if(this.fastTap){this.fastTap=!1,this.proid=e;var a={module:"app",action:"product",app:"index",pro_id:e};t.request({data:a,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(i.fastTap=!0,200==e.data.code){var a=e.data.data,n=(a.collection_id,a.pro),o=(a.comments,a.attrList),s=a.skuBeanList,r=a.qj_price,c=a.type;i.ys_price=r,i.price=r,i.attrList=o,i.skuBeanList=s,i.collection=c,i.imgurl=n.img_arr[0],i.num=n.num,i._spec(),i._mask_display()}else t.showToast({title:e.data.message,duration:1500,icon:"none"})},error:function(t){i.fastTap=!0}})}},_mask_display:function(){if(this.mask_display=!0,!this.haveSkuBean)for(var t=0;t<this.attrList.length;t++){var e=this.attrList[t].attr;1==e.length&&this.showState(0,t)}},_mask_false:function(){if(this.numb=1,this.mask_display=!1,!this.haveSkuBean)for(var t=0;t<this.attrList.length;t++){var e=this.attrList[t].attr;1==e.length&&this.showState(0,t)}},_mask_f:function(){this.haveSkuBean="",this._mask_false(),this.mask_display=!1},_confirm:function(){Boolean(this.haveSkuBean)?0==this.num?t.showToast({title:"库存不足",duration:1e3,icon:"none"}):0!=this.num&&this._shopping():0==this.num?t.showToast({title:"库存不足",duration:1e3,icon:"none"}):t.showToast({title:"请选择完整的商品规格！",duration:1e3,icon:"none"})},_spec:function(){for(var t=this.attrList,e=0;e<t.length;e++){for(var i=t[e],a=[],n=0;n<t.length;n++){var o=t[n];if(o.id!=i.id)for(var s=0;s<o.attr.length;s++){var r=o.attr[s];r.enable&&r.select&&a.push(r)}}for(var c=[],u=this.skuBeanList,d=0;d<u.length;d++){var l=!0,h=u[d];for(n=0;n<a.length;n++){var p=!1;for(s=0;s<h.attributes.length;s++){var f=h.attributes[s];if(a[n].attributeId==f.attributeId&&a[n].id==f.attributeValId){p=!0;break}}l=p&&l}if(l)for(var g=0;g<h.attributes.length;g++){f=h.attributes[g];i.id==f.attributeId&&c.push(f.attributeValId)}}for(var _=c,m=0;m<i.attr.length;m++){var v=i.attr[m];v.enable=-1!=_.indexOf(v.id)}}this.attrList=t,this.skuBeanList=u},showState:function(t,e){var i=this.attrList,a=i[e],n=a.attr[t];if(n.enable){for(var o=!n.select,s=0;s<a.attr.length;s++)a.attr[s].select=!1;n.select=o;for(var r=[],c=0;c<i.length;c++)for(var u=0;u<i[c].attr.length;u++)i[c].attr[u].enable&&i[c].attr[u].select&&r.push(i[c].attr[u]);for(var d=this.skuBeanList,l=[],h=0;h<d.length;h++){for(var p=0,f=0;f<d[h].attributes.length;f++)r.length==d[h].attributes.length?d[h].attributes[f].attributeValId==r[f].id&&p++:"库存清单不存在此属性 ";p==d[h].attributes.length&&l.push(d[h])}for(var g=0;g<r.length;g++)r[g].attributeValue+" ";0!=l.length?(this.num=l[0].count,this.price=l[0].price,this.imgurl=l[0].imgurl,this.haveSkuBean=l[0]):(this.num=this.pro.num,this.price=this.ys_price,this.haveSkuBean=""),this.attrList=i,this._spec()}},in_array:function(t,e){for(var i=0;i<e.length;i++){var a=e[i].toString();if(a==t)return!0}return!1},_shopping:function(){var e=this;if(this.haveSkuBean){var i={module:"app",action:"product",app:"add_cart",pro_id:this.proid,attribute_id:this.haveSkuBean.cid,num:this.numb,type:"addcart"};this.access_id?i.access_id=this.access_id:i.access_id="",this.$store.state.nCart?i.cart_id=this.$store.state.nCart:i.cart_id="",t.request({data:i,url:t.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){var a=i.data,n=a.code,o=a.data;a.message;200==n?(t.showToast({title:"添加成功，在购物车等您哦~",duration:1e3,icon:"none"}),e.haveSkuBean="",e._mask_false()):t.showToast({title:i.data.message,duration:1500,icon:"none"}),o.cart_id&&(e.in_array(o.cart_id,e.$store.state.nCart)||e.$store.state.nCart.push(o.cart_id))},error:function(t){console.log(t)}})}else this._mask_display()}},(0,a.mapMutations)({pro_id:"SET_PRO_ID",cindex:"SET_CINDEX"})),components:{Heads:r}};e.default=c}).call(this,i("543d")["default"])},bb49:function(t,e,i){"use strict";i.r(e);var a=i("8964"),n=i("d4dd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5038");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},d4dd:function(t,e,i){"use strict";i.r(e);var a=i("abe3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}},[["2392","common/runtime","common/vendor"]]]);
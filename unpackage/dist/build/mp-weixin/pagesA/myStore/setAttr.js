(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/setAttr"],{"085f":function(t,a,e){"use strict";e.r(a);var r=e("f3fd"),i=e("7390");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("5e6e");var o,n=e("f0c5"),l=Object(n["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);a["default"]=l.exports},"4b36":function(t,a,e){},5458:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=function(){Promise.all([e.e("common/vendor"),e.e("components/header")]).then(function(){return resolve(e("6c1c"))}.bind(null,e)).catch(e.oe)},i={data:function(){return{jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",chooseImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/chooseMe.png",quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehei2x.png",delete_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/deletes2x.png",title:"设置属性",pageFlag:!1,access_id:"",attrList:[],chooseAttr:"",attrDataList:{},attr_group:[],attr_arr:[],costM:"",oldM:"",sellM:"",stock:"",stockWarn:"",attrStyle:1,addList:[],addAttrName:""}},watch:{attrStyle:function(t){1==t?this._table():this._abbTable()}},onLoad:function(a){this.access_id=t.getStorageSync("access_id")?t.getStorageSync("access_id"):this.$store.state.access_id,t.getStorageSync("upload_chooseAttr")?(this.attr_group=t.getStorageSync("upload_attr_group"),this.attr_arr=t.getStorageSync("upload_attr_arr"),this.chooseAttr=t.getStorageSync("upload_chooseAttr"),this.title="选择属性名称",this._axios(this.chooseAttr,1)):t.getStorageSync("upload_attr_group")&&(this.attrStyle=2,this.addList=t.getStorageSync("upload_attr_group"),this.attr_arr=t.getStorageSync("upload_attr_arr"),this.pageFlag=!1,this.title="设置属性"),this.costM=a.costM,this.oldM=a.oldM,this.sellM=a.sellM,this.stock=a.stock,this.stockWarn=a.stockWarn},methods:{deleteAttr:function(t){var a=this;this.chooseAttr=this.chooseAttr.replace(","+t,"").replace(t+",","").replace(t,""),this.$delete(this.attrDataList,t);this.attr_group.filter((function(e,r){e.attr_group_name==t&&a.attr_group.splice(r,1)}));this._table()},addAttr:function(){if(this.addAttrName=this.addAttrName.replace(/(^\s*)|(\s*$)/g,""),this.addAttrName){var a=this,e=a.addAttrName,r=a.addList.find((function(t){return t.attr_group_name==e}));if(r)t.showToast({title:"属性名已添加",icon:"none"});else{var i={module:"app",action:"mch",m:"get_attribute_value",access_id:this.access_id,attribute_str:e};this.$req.post({data:i}).then((function(t){if(200==t.code&&t.list.list[e].length>0){var r=t.list.list[e],i=[];r.filter((function(t){i.push({attr_name:t.value})})),a.addList.push({attr_group_name:e,childValue:"",attr_list:i}),a._abbTable()}else a.addList.push({attr_group_name:e,childValue:"",attr_list:[]});a.addAttrName=""}))}}else t.showToast({title:"请填写属性名",icon:"none"})},removeAttrName:function(t){this.addList.splice(t,1),this._abbTable()},addAttrValue:function(a){if(a.childValue=a.childValue.replace(/(^\s*)|(\s*$)/g,""),a.childValue){var e=a.attr_list.find((function(t){return t.attr_name==a.childValue}));e?t.showToast({title:"属性值已添加",icon:"none"}):(a.attr_list.push({attr_name:a.childValue}),a.childValue="",this._abbTable())}else t.showToast({title:"请填写属性值",icon:"none"})},removeAttrValue:function(t,a){t.attr_list.splice(a,1),this._abbTable()},_clickAttr:function(){this._axios(this.chooseAttr)},_chooseAttr:function(t,a){if(t.status=!t.status,t.status){var e=(this.chooseAttr?",":"")+t.text;this.chooseAttr+=e}else this.chooseAttr=this.chooseAttr.replace(","+t.text,"").replace(t.text+",","").replace(t.text,"")},_saveAttr:function(){this.chooseAttr?(this.attr_arr=[],this.attr_group=[],this._axios(this.chooseAttr,1)):t.showToast({title:"请选择属性名称",icon:"none"})},removeAttr:function(){console.log(this.attrDataList)},_chooseAttrData:function(t,a,e){if(t.status=!t.status,t.status){for(var r=!0,i=0;i<this.attr_group.length;i++)if(this.attr_group[i].attr_group_name==e){r=!1,this.attr_group[i].attr_list.push({attr_name:t.value});break}r&&this.attr_group.push({attr_group_name:e,attr_list:[{attr_name:t.value}]})}else for(var s=0;s<this.attr_group.length;s++)if(this.attr_group[s].attr_group_name==e){for(var o=this.attr_group[s].attr_list,n=0;n<o.length;n++)if(o[n].attr_name==t.value){this.attr_group[s].attr_list.splice(n,1),0==this.attr_group[s].attr_list.length&&this.attr_group.splice(s,1);break}break}this._table()},_table:function(){for(var t=this,a=0,e=[],r=0;r<this.attr_group.length;r++){var i=this.attr_group[r].attr_list;a=0==a?i.length:i.length>0?i.length*a:a}for(var s=0;s<a;s++)e.push({cbj:t.costM,yj:t.oldM,sj:t.sellM,kucun:t.stock,attr_list:[]});this.attr_arr=e;var o=JSON.parse(JSON.stringify(this.attr_group));this._tableList(o,0,a,a)},_abbTable:function(){for(var t=this,a=0,e=[],r=0;r<this.addList.length;r++){var i=this.addList[r].attr_list;a=0==a?i.length:i.length>0?i.length*a:a}for(var s=0;s<a;s++)e.push({cbj:t.costM,yj:t.oldM,sj:t.sellM,kucun:t.stock,attr_list:[]});this.attr_arr=e;var o=JSON.parse(JSON.stringify(this.addList));this._tableList(o,0,a,a)},_tableList:function(t,a,e,r){if(!t[a])return a<t.length-1?(t.splice(a,1),void this._tableList(t,a,e,r)):void 0;if(0==t[a].attr_list.length)return t.splice(a,1),void this._tableList(t,a,e,r);var i=JSON.parse(JSON.stringify(this.attr_arr)),s=0,o=t[a].attr_group_name;if(0==a)for(var n=0;n<t[a].attr_list.length;n++)for(var l=t[a].attr_list[n].attr_name,u=0;u<e/t[a].attr_list.length;u++)i[s].attr_list.push({attr_id:"",attr_name:l,attr_group_name:o}),s++;else if(a<t.length-1){r=Math.round(r/t[a-1].attr_list.length);for(var c=0;c<e/r;c++)for(n=0;n<t[a].attr_list.length;n++)for(l=t[a].attr_list[n].attr_name,u=0;u<r/t[a].attr_list.length;u++)i[s].attr_list.push({attr_id:"",attr_name:l,attr_group_name:o}),s++}else for(u=0;u<e/t[a].attr_list.length;u++)for(n=0;n<t[a].attr_list.length;n++){l=t[a].attr_list[n].attr_name;i[s].attr_list.push({attr_id:"",attr_name:l,attr_group_name:o}),s++}this.attr_arr=i,a++,a<t.length&&this._tableList(t,a,e,r)},_axios:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,r=this,i="get_attribute_name";e&&(i="get_attribute_value");var s={module:"app",action:"mch",m:i,access_id:this.access_id,attribute_str:a,attr_arr:this.attr_group.length>0?JSON.stringify(this.attr_group):""};t.request({url:t.getStorageSync("url"),data:s,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){200==t.data.code&&(e?(r.pageFlag=!1,r.title="设置属性",r.attrDataList=t.data.list.list):(r.pageFlag=!0,r.title="选择属性名称",r.attrList=t.data.list.attribute))}})},_complete:function(){if(0!=this.attr_arr.length)1==this.attrStyle?(t.setStorageSync("upload_attr_group",this.attr_group),t.setStorageSync("upload_attr_arr",this.attr_arr),t.setStorageSync("upload_chooseAttr",this.chooseAttr)):(t.setStorageSync("upload_attr_group",this.addList),t.setStorageSync("upload_attr_arr",this.attr_arr),t.removeStorageSync("upload_chooseAttr")),t.navigateBack({delta:1});else{var a=1==this.attrStyle?"请选择属性":"请添加属性";t.showToast({title:a,icon:"none"})}}},computed:{},components:{heads:r}};a.default=i}).call(this,e("543d")["default"])},"5e6e":function(t,a,e){"use strict";var r=e("4b36"),i=e.n(r);i.a},7390:function(t,a,e){"use strict";e.r(a);var r=e("5458"),i=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(a,t,(function(){return r[t]}))}(s);a["default"]=i.a},f3fd:function(t,a,e){"use strict";var r,i=function(){var t=this,a=t.$createElement;t._self._c;t._isMounted||(t.e0=function(a){t.attrStyle=1},t.e1=function(a){t.attrStyle=2})},s=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return r}))},f583:function(t,a,e){"use strict";(function(t){e("a1f9");r(e("66fd"));var a=r(e("085f"));function r(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])}},[["f583","common/runtime","common/vendor"]]]);
<template>
	<div ref='cart' class="cart_f">
		<lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
		<heads :title='title' returnR='6'></heads>
		
		<paymodel v-model="pay_display" @success="_confirm" @cancel="_cancel"/>
		
		<!-- 请求加载数据 -->
		<div class='load' v-if=" load || !(price>=0)">
			<div>
				<img :src="loadGif" />
				<p>加载中</p>
			</div>
		</div>
		<!-- 渲染数据  -->
		<div v-else class="order_detail">
			<!-- 收货方式：自提还是快递 -->
			<div class='afhalen_box' v-if='shop_status == 1'>
				<div class="list-title">
					收货方式
				</div>
				<div class="switch-box" @tap="sChange">
					<text>自提</text>
					<text>快递</text>
					<div class="switch-item" :style="'transform: translateX('+afhalen_translateX+'px);'"></div>
				</div>
			</div>
			
			<!-- 选择自提后显示 -->
			<div v-if="afhalen_translateX>5&&shop_list.length!=0" class="receiving" @tap="_uni_navigateTo('../../pagesA/myStore/storeList?shop_id='+pro[0].shop_id)">
				<!-- 选择自提店铺 -->
				<div class="afhalen_box afhalen_shop" >
					<text>{{shop_list.address}}</text>
				</div>
				<!-- 用户资料 -->
				<div class="afhalen_box yh-afhalen_box" @tap.stop="true">
					<input class="yh-afhalen-inputa" type="text" v-model="address.name"/>
					<input class="yh-afhalen-inputb" type="text" v-model="address.tel"/>
				</div>
			</div>
			<!--没有地址-->
			<div class='address_two yh-address_two' @tap="_uni_navigateTo('../../pagesA/myStore/storeList?shop_id='+pro[0].shop_id)" v-if="afhalen_translateX>5&&shop_list.length==0">
				<span>请选择门店</span>
			</div>
			<!-- 选择快递后,显示地址 -->
			<div class='address_one' @tap="_uni_navigateTo('../address/receivingAddress?state_manage=1&addre_id='+address.id)"
			 v-if='afhalen_translateX<=5&&adds_f'>
				<div class="yh-one-box">
					<span class="yh-one-spana">{{address.name}}</span>
					<span class="yh-one-spanb">{{address.tel}}</span>
					<p>{{address.address_xq}}</p>
				</div>
				<img class='arrow' :src="jiantou" />
			</div>
			<!--没有地址-->
			<div class='address_two' @tap="_uni_navigateTo('../address/addAddress?state_addre=1&addNum=0')" v-if='afhalen_translateX<=5&&!adds_f'>
				<span>+</span>
				<span>点击添加地址</span>
			</div>
			
			<!--灰色间隔-->
			<div class="yh-line"></div>
			<!--商品列表-->
			<div v-if="pay_name!='jp'">
				<ul v-for='(items,indexs) in pro' :key='indexs'>
					<li v-if='items.shop_id' class='storeLi'>
						<img :src="storeImg" class="yh-storeLi-imga">
						{{items.shop_name}}
						<img :src="jiantou" class="yh-jiantou-img">
					</li>
					<li class='goods' v-for="(item,index) in items.list" :key='index'>
						<img :src="item.img" />
						<div class='goods_right'>
							<p>{{item.product_title}}</p>
							<div class='goods_bottom'>
								<p><span class="yh-goods_bottom-span">￥</span>{{item.price}}</p>
							
								<div class='format'>
									<p class="yh-format-p">规格：{{item.color?item.color:''}}{{item.name?item.name:''}}{{item.size?item.size:''}}</p>
									<p class="yh-format-pa">x{{item.num}}</p>
								</div>
							</div>
						</div>
					</li>
					<div class="yh-items"></div>	
				</ul>
			</div>

			<ul v-if="pay_name=='jp'">
				<li class='goods'>
					<img :src="jp_imgurl" />
					<div class='goods_right'>
						<p>{{jp_name}}</p>
						<div class='goods_bottom'>
							<p><span class="yh-goods_bottom-span">￥</span>{{ jp_total }}</p>
						</div>
					</div>
				</li>
			</ul>
			<!--运费、优惠券、合计信息-->
			<ul>
				<li class='order_coupon' v-if="pay_name!='jp'&&!bargain && coupon_status && is_distribution!=1">
					<span>使用优惠券</span>
					<div @tap="_coupon">
						<span>{{coupon_name?(coupon_name=='不使用优惠券'?'不使用优惠券':(coupon_name=='0'?coupon_name1:'已优惠：'+ coupon_name +'元'+ coupon_name1)):'未使用优惠券'}}</span>
						<img class='arrow' :src="jiantou" style='margin-left: 20upx;'/>
					</div>
				</li>
				<li class='order_coupon' v-if="pay_name!='jp'&&!bargain && isDistribution==false && is_distribution!=1 && is_subtraction == 1 && ((reduce_money == 0 && reduce_name != '')||(reduce_money > 0 && reduce_name == ''))">
					<span>满减优惠</span>
					<span v-if="reduce_money == 0 && reduce_name != ''">{{reduce_name}}</span>
					<span v-else>{{reduce_money}}</span>
				</li>
				<li class='order_coupon' v-if="grade_rate!=1">
					<span>会员等级折扣</span>
					<span>{{grade_rate*10}}折</span>
				</li>
				<li class='order_coupon' v-if="is_distribution==1 && discount!=1">
					<span>分销等级购物折扣</span>
					<span>{{discount*10}}折</span>
				</li>
				<li class='order_coupon' v-if="pay_name!='jp'">
					<span>运费</span>
					<span v-if="freightt==0">包邮</span>
					<span v-else>￥{{freightt}}</span>
				</li>
				<li class='order_coupon' >
					<span>订单备注</span>
					<span class="yh-order_coupon-spana"><input type="text" v-model="remarks" placeholder="选填，请先和商家协商一致" placeholder-style="color:#b8b8b8"></span>
				</li>
				<li class='order_coupon' v-if="pay_name!='jp'">
					<span></span>
					<span v-if='!bargain' class="yh-order_coupon-spanb">
						<!-- #ifndef MP-BAIDU || MP-ALIPAY -->
						合计：<font class="yh-order_coupon-fonta">￥{{pay_name=='jp'?jp_zong:price2}}</font>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU || MP-ALIPAY-->
						合计：<span class="yh-order_coupon-fonta">￥{{pay_name=='jp'?jp_zong:price2}}</span>
						<!-- #endif -->
					</span>
					<span v-else>
						<!-- #ifndef MP-BAIDU || MP-ALIPAY -->
						合计：<font class="yh-order_coupon-fonta">￥{{price2}}</font>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU || MP-ALIPAY-->
						合计：<span class="yh-order_coupon-fonta">￥{{price2}}</span>
						<!-- #endif -->
						
					</span>
				</li>
			</ul>
			
			<!--灰色间隔-->
			<div class="yh-line"></div>
			<!--支付方式-->
			<ul style=''>
				<div>
				
					<li class='order_coupon' v-if='!bargain'>
						<span class="yh-order_coupon-spanc">请选择支付方式</span>
						<!-- <span>￥{{needpay}}</span> -->
					</li>
					<li class='order_coupon' v-else>
						<span class="yh-order_coupon-spanc">请选择支付方式</span>
						<span>￥{{needpay.length != 0?needpay:price2}}</span>
					</li>
					
					<li class='pay' @tap='chooseWay("balance")' v-if="open_wallet">
						<div class="yh-pay">
							<div class="pay_yue yh-pay-wx-d">
								<div class="yh-pay-s">
									<img class='pay_img' :src="pay_y" alt="">
									<div class="yh-pay_div">
										<p class="yh-pay_div-p">
											余额支付<text style="color: #999999;">（余额￥{{ user_money }}）</text>
										</p>
									</div>
								</div>
								<img class='quan_img' :src="useWallte?quan_hei:quan_hui" />
							</div>
						</div>
					</li>
					
					<!-- #ifdef MP-BAIDU -->
					<li class='pay' @tap='chooseWay("baidu")' v-if="payment.baidu_pay == 1">
						<div class="yh-pay">
							<div class="pay_yue yh-pay-wx-d">
								<div class="yh-pay-s">
									<img class='pay_img' :src="pay_bd" alt="">
									<div class="yh-pay_div">
										<p class="yh-pay_div-p">
											百度支付
										</p>
									</div>
								</div>
								<img class='quan_img' :src="baidupayStatue?quan_hei:quan_hui" />
							</div>
						</div>
					</li>
					<!-- #endif -->
					
					<!-- 微信支付 -->
					<!-- #ifdef APP-PLUS || MP-WEIXIN || H5 -->
					<li class='pay' @tap='chooseWay("wxPay")' v-if="open_wxpay == true">
						<div class="yh-pay">
							<div class="pay_yue yh-pay-wx-d">
								<div class="yh-pay-s">
									<img class='pay_img' :src="pay_w" alt="">
									<div class="yh-pay_div">
										<p class="yh-pay_div-p">
											微信支付
										</p>
									</div>
								</div>
								<img class='quan_img' :src="wxPayStatue?quan_hei:quan_hui" />
							</div>
						</div>
					</li>
					<!-- #endif -->
					
					<!-- 支付宝支付 -->
					<!-- #ifdef APP-PLUS || MP-ALIPAY || MP-TOUTIAO-->
					<li class='pay' @tap='chooseWay("aliPay")' v-if="open_alipay == true">
						<div class="yh-pay">
							<div class="pay_yue yh-pay-wx-d">
								<div class="yh-pay-s">
									<img class='pay_img' :src="pay_z" alt="">
									<div class="yh-pay_div">
										<p class="yh-pay_div-p">
											支付宝支付
										</p>
									</div>
								</div>
								<img class='quan_img' :src="aliPayStatue?quan_hei:quan_hui" />
							</div>
						</div>
					</li>
					<!-- #endif -->
					
				</div>
			</ul>
			<div class='foot' id='foot' :class='ishide==1?"hide":""'>
				<div>
					<p class="yh-pay-ye">付款金额：￥{{price2}}</p>
				</div>
				<p @tap="_pay_style()">立即支付</p>
			</div>
		</div>
		<!-- 高度屏幕小的时候解决选择不到微信支付的问题 -->
		<div class="yh-wx-pay">
		</div>

		<!--没有设置支付密码提示框-->
		<div class='payment_pass' v-if="password_display">
			<div class='payment_c'>
				<div class='payment_ww'>无支付密码，前往设置！</div>
				<div class="payment_tt payment_boo" @tap="_password_status">
					去设置
				</div>
			</div>
		</div>
		<!--  优惠券    -->
		<div class='copon_div' v-if="use_coupon">
			<ul class='coupon_ul'>
				<li class='coupon_sue' v-for="(item,index) in coupon_list" @tap="_coupon_use(index,item.id,item.coupon_status)"
				 :key='index'>
					<span v-if="item.activity_type == 1" v-text="item.name?item.name:''+':免邮'"></span>
					<span v-else v-text="item.name&&item.name=='不使用优惠券'?'不使用优惠券':item.name+':优惠'+item.money+'元'+item.coupon_name"></span>
					<img class="yh-img-s" :src="item.id==coupon_id?quan_hei:quan_hui" />
				</li>
			</ul>
			<div class="copou_close" @tap="_closeCoupon">关闭</div>
		</div>
	</div>
</template>

<script>
	import heads from '../../components/header.vue'
	import Maskm from '../../components/maskM.vue'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	import paymodel from '@/components/paymodel.vue'
	import {
		mapMutations
	} from 'vuex'
	
	import {
		getStorage
	} from '../../common/storage.js'
	
	import { laikeUseyue,laikePayThree,
	laikeChooseWay,laikeSwitchChange,laikeChangeValue,
	laikeGetPayType,laikePayAtOnce,laikeShowCoupon,laikeCloseCoupon,laikeChooseCoupon 
	} from '../../static/js/pay/orderDetailsr.js'

	export default {
		data() {
			return {
				open_wxpay: false,
				open_alipay: false,
				open_wallet: false,
				// integral_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + "images/icon/integral_hei.png",
				payment:'',
				afhalen: false,  //判断商家是否支持自提
				afhalen_translateX:'0',
				order_no: '',
				bargain_id: '',
				isDistribution: false, //是否是分销商品？true是，false不是
				order_list: '',
				showPayWay1: false,
				showPayWay: false,
				makeOrd: false,
				load: true,
				ycoupon_name: '',
				notWallte: false,
				useWallte: false,	// 余额支付
				returnR:'',
				value: '',
				value2: '',
				cpId: '',
				title: '确认订单信息',
				adds: '', //地址
				adds_f: '', //地址状态
				price: '', //商品总价
				price1: this.products_total + this.freight - this.coupon_name - Number(this.reduce_money), //计算后的价格
				price2: 0,
				remarks:'',
				_isopen: true,
				products_total: '',
				reduce_money: "",
				is_subtraction: 1,
				reduce_name: "",
				pro: '', //购买商品列表
				user_money: '', //账户余额
				needpay: '', //还需支付
				jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/jiantou2x.png',
				storeImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/store.png',
				guanbiImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/close2x.png',
				pay_y: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/yuezhifu2x.png',
				pay_z: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/zhifubaozhifu2x.png',
				pay_w: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/weixinzhifu2x.png',
				pay_bd: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/baiduzhifu2x.png',
				pay_b: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/lALPBb.png',
				quan_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/xuanzehui2x.png',
				quan_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/xuanzehei2x.png',
				zfb: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/zhifubaozhifu2x.png',
				wx: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/weixinzhifu2x.png',
				yezf: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/yuezhifu2x.png',
				loadGif: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/5-121204193R7.gif',
				back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/back2x.png',
				ishide:0,//是否隐藏底部支付栏 1隐藏 0不隐藏
				loading:false,
				pay: [{
						imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + "images/icon1/yuezhifu2x.png",
						name: '钱包余额'
					},
					{
						imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + "images/icon1/weixinzhifu2x.png",
						name: '微信支付'
					},
					{
						imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + "images/icon1/zhifubaozhifu2x.png",
						name: '支付宝'
					}
				], //支付方式 
				pay_index: -1,
				pay_style: '', //支付方式
				content: '是否抵扣余额？',
				mask_value: '',
				orde_id: '',
				addre_id: '',
				or_id: '',
				sNo: '',
				num: '',
				access_id: '',
				digits: ['', '', '', '', '', ''], //input框位数控制,这里可以配置多少个“输入框”
				msg: '',
				msgLength: 0,
				page: 0,
				pay_display: false, //支付密码框显示
				password_status: '', //判定是否已经设置支付密码
				password_display: false, //前往设置支付密码提示框
				use_coupon: false,
				coupon_money: '', //优惠券金额
				coupon_list: '', //可使用优惠券
				coupon_id: [],
				coupon_name: '',
				coupon_name1: '',
				coupon_status:false,
				freight: '',
				freightt: '',
				name: '',
				channel: '',
				erroTime: 0,
				enterless: true,
				is_distribution:0,
				discount:1,//分销折扣
				grade_rate:1,//会员等级折扣
				cart_id: "",
				address_id: "",
				hc_address_id: "",
				focus: true,
				providerList: '',
				address: {
					name:''
				},
				aliPayStatue: false,
				wxPayStatue: false,
				baidupayStatue:false,
				fastTap: true,
				bind_id: "", //竞拍商品id
				pay_name: "", //pt是普通订单过来的，jp就是竞拍带过来的
				jp_address: "",
				jp_imgurl: "",
				jp_name: "",
				jp_total: "",
				jp_zong: "",
				total: '',
				bargain: '',
				h5_content: '',
				code: '',
				myappid: '',
				firstFlag: true,
				head: true, //头部切换
				can_pay:true,
				oldheight:'',
				buy_again:'',//是否为再次购买 true 是  false 否
				shop_status:'',
				shop_address_id:'',
				shop_list:[],
				payTitle:"",
				tt_alipay_app:false,//是否头条支付宝APP支付
				tmplIds:['2KrrJchj92YRKhZZ0SSHz76dmrT0cLBJ2Wfe0','ncs3u3Bmmi0jW7EXAik4KQvxF3JxbaulWNwbLXDto','CZAPo_TqOOeC5K7XYvBeB_LXmyXKIhXkZROArNZDwQ8'],//微信订阅消息模板
			}
		},
		beforeDestroy() {
			var me = this
			this.$store.state.order_id = ''
			if (!this.bargain && this.pay_name != 'jp') {
				
				let data = {
					module: 'app',
					app: "leave_Settlement",
					action: 'order',
					access_id: me.access_id,
					order_list: me.order_list,
					price: me.value
				}
				//离开界面的时候去生成订单
				this.$req.post({ data })
				
				if(this.buy_again){
					let data = {
						module: 'app',
						app: "del_cart",
						action: 'order',
						access_id: me.access_id,
						cart_id: me.cart_id
					}
					this.$req.post({ data })
				}
				uni.removeStorageSync("goodsInfo");
				me.$store.state.cart_id = "";
			}
		},
		onLoad(option) {
			this.afhalen_translateX = uni.upx2px(2)
			let me = this;

			me.$store.state.address_id = me.$store.state.address_id_def
			me.cpId = option.product

			me.returnR = option.returnR;

			if(option.buy_again == true || option.buy_again == 'true'){
				me.buy_again = true
			}
			// #ifdef H5 
			var storage=window.localStorage;
			if(storage['bargain']){
				me.cpId = storage['product']
			}
			// #endif
			
			// #ifndef MP-ALIPAY
			uni.onWindowResize((res) => {
				if(me.oldheight==''){
					me.oldheight = res.size.windowHeight
					me._hide()
				}else{
					if(Number(me.oldheight)<Number(res.size.windowHeight)) {
						me.oldheight = res.size.windowHeight
						me._show()
					} else if (Number(me.oldheight)==Number(res.size.windowHeight)) {
						me._show()
					} else {
						me._hide()
					}
				}
			})
			// #endif
			if(me.cpId){
				uni.setStorageSync("goodsInfo",me.cpId);
			}
			
			if(option.canshu){
				uni.setStorageSync("canshu",option.canshu)
			}
			
			if(option.isDistribution == 1&& option.isDistribution != 'false'){
				me.isDistribution = true
			}

			me.bargain = option.bargain
			me.bargain_id = option.bargain_id
			me.order_no = option.order_no
			// #ifdef H5 
			if(storage['bargain']){
				me.bargain = storage['bargain']?storage['bargain']:me.bargain
				me.bargain_id = storage['bargain_id']?storage['bargain_id']:me.bargain_id
				me.order_no = storage['order_no']?storage['order_no']:me.order_no
			}
			//解决获取code后价格变为普通商品价格的问题
			if(option.product){
				var kanjia = JSON.parse(option.product)
				if (kanjia[3]) {
					console.log('========.bargain=========');
					console.log(kanjia);
					me.bargain = kanjia[3]&&kanjia[3].bargain?kanjia[3].bargain:me.bargain
					me.bargain_id = kanjia[4]&&kanjia[4].bargain_id?kanjia[4].bargain_id:me.bargain_id
					me.order_no = kanjia[5]&&kanjia[5].order_no?kanjia[5].order_no:me.order_no
				}
			}
			
			// #endif	
			me.orde_id = me.$store.state.order_id
			me.cart_id = me.$store.state.cart_id
			
			if( option.cart_id){
				me.cart_id = option.cart_id
				me.$store.state.cart_id = me.cart_id ;
			}
				
			// #ifdef H5 
			var storage=window.localStorage;
			if(storage['cart_id'] != null && storage['cart_id'] != ''){
				me.cart_id = storage['cart_id']
				storage['cart_id'] = ''
			}
			// #endif
			me.pay_name = me.$store.state.pay_lx
			me.bind_id = me.$store.state.bindding_num
			me.access_id = uni.getStorageSync('access_id') ? uni.getStorageSync('access_id') : this.$store.state.access_id
			uni.getProvider({
				service: "payment",
				success: (e) => {
					me.providerList = e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								return {
									name: '支付宝',
									id: value,
									loading: false
								}
							case 'wxpay':
								return {
									name: '微信',
									id: value,
									loading: false
								}
						}
					});
				},
				fail: (e) => {
					console.log("获取支付通道失败：", e);
				}
			});
			
			me.$nextTick(function(){
				// #ifndef MP-ALIPAY
				me.$refs.lktAuthorizeComp.handleAfterAuth(me,'../login/login?landing_code=1',function(){
				// #endif
					// #ifndef H5
					me._axios();
					// #endif
				// #ifndef MP-ALIPAY
				});
				// #endif
			});
			
			// let me = this;
			me.$nextTick(function(){
				// #ifndef MP-ALIPAY
				me.$refs.lktAuthorizeComp.handleAfterAuth(me,'../login/login?landing_code=1',function(){
				// #endif
					me.orde_id = me.$store.state.order_id
					me.cart_id = me.$store.state.cart_id
					// #ifdef H5 
					var storage=window.localStorage;
					if(storage['cart_id'] != null && storage['cart_id'] != ''){
						me.cart_id = storage['cart_id']
						storage['cart_id'] = ''
					}
					// #endif
					me.address_id = me.$store.state.address_id
					me.$store.state.address_id = me.$store.state.address_id_def
					me.shop_address_id = uni.getStorageSync('shop_address_id')
					console.log(me.shop_address_id)
					me.pay_name = me.$store.state.pay_lx
					me.bind_id = me.$store.state.bindding_num
					me.firstFlag = true
					me.access_id = uni.getStorageSync('access_id') ? uni.getStorageSync('access_id') : me.$store.state.access_id
					var lkt_address_id_def = uni.getStorageSync("lkt_address_id_def");
					if(lkt_address_id_def){
						me.adds_f= true;
					}else if( me.$store.state.address_id_def == '' || me.$store.state.address_id_def == undefined ){
						me.adds_f = false;
					} else {
						me.adds_f= true;
					}
					
					// #ifdef H5 
					// H5打开微信支付
					var a = window.location.href;
					if (a.split('?').length > 1) {
						var str = a.split('?')[1]
						var arr = str.split('&')
						for(var i in arr){
							if( typeof arr[i] == "String" || typeof arr[i] == "string" ){
								if(arr[i].substring(0, 4)=='code'){
									str = arr[i].substring(5)
									me.code = str
								}
							}
						}
					}
					if (me.code == '') {
						storage.removeItem("bargain")
						storage.removeItem("bargain_id")
						storage.removeItem("order_no")
						storage.removeItem("product")
						uni.removeStorageSync('bargain')
						me.toUrl();
						// console.log('---window.location.href----'+window.location.href);
						// location.href = window.location.href+'&code=123'
					}
					// #endif
					me._axios();
				// #ifndef MP-ALIPAY
				});
				// #endif
			});
			
		},
		onUnload(){
			
		},
		onShow() {
			var me = this
			// 每次进入页面接受自提选择的页面
			if(me.hc_address_id != me.$store.state.address_id){
				me.hc_address_id = me.address_id = me.$store.state.address_id;
			}
			
			if(uni.getStorageSync("store_choose")){
				this.afhalen_shop = uni.getStorageSync("store_choose").name
				uni.removeStorageSync("store_choose")
			}
			
			me.shop_address_id = uni.getStorageSync('shop_address_id')
			me._axios('onshow');
			
			// #ifdef MP-WEIXIN
			me.LaiKeTuiCommon.getWXTmplIds(me);
			// #endif
			
				
			console.log(me.open_wxpay + "======open_alipay========" + me.open_alipay)
			
		},
		methods: {
			/**
			 * 判断支付是否显示
			 * type 1.微信 2.支付宝
			 * */
			isshow:function(){
				var me = this
				
				
				// #ifdef H5
				if(me.payment.jsapi_wechat == 1){
					me.open_wxpay = true;
				}
				// #endif
				
				// #ifdef MP-WEIXIN
				console.log("me.payment================="+me.payment.mini_wechat)
				if(me.payment.mini_wechat == 1){
					me.open_wxpay = true;
				}
				// #endif
				
				
				// #ifdef APP-PLUS
				if(me.payment.app_wechat == 1){
					me.open_wxpay = true;
				}
				if(me.payment.alipay == 1){
					me.open_alipay = true;
				}
				// #endif
				
				
				// #ifdef MP-ALIPAY
				if(me.payment.alipay_minipay == 1){
					me.open_alipay = true;
				}
				// #endif
				
				
				// #ifdef MP-TOUTIAO
				if(me.payment.tt_alipay == 1){
					me.open_alipay = true;
				}
				// #endif
				
				if(me.payment.wallet_pay == 1){
					this.chooseWay("balance")
					me.open_wallet = true
					me.useWallte = true
					
				}
			},
			/**
			 * 
			 * 
			 * */
			sChange:function(){
				if(this.afhalen_translateX>5){
					this.afhalen_translateX = uni.upx2px(2);
					this._axios('onshow');
				}else{
					this.freight = this.freightt = 0;
					this.afhalen_translateX = uni.upx2px(70)
				}
				console.log(this.afhalen_translateX);
			},
			/**
			 * 
			 * 
			 * */
			changeLoginStatus:function(){
				var me = this;
				me.access_id = uni.getStorageSync('access_id');
				me._axios("==");
			},
			/**
			 * 
			 * 
			 * */
			_hide:function(){
				this.ishide = 1
			},
			/**
			 * 
			 * 
			 * */
			_show:function(){
				this.ishide = 0
				if(this.value.length == 0){
					this.value = 0
				}
			},
			/**
			 * 
			 * 
			 * */
			_back:function(){
				console.log('_back');
				switch(this.returnR){
					case '1':
					uni.switchTab({
						url:'../tabBar/shoppingCart'
					});break;
					case '2':
					uni.navigateBack({
						delta:1
					});break;
					default:
					uni.switchTab({
						url:'../tabBar/home'
					})
				}
			},
			/**
			 * 
			 * 
			 * */
			toUrl:function() {
				this.laikepay.toUrl(this);
			},
			/**
			 * 
			 * 
			 * */

			replaceInput:function(event) {
				this.value = Math.abs(event.detail.value)
				this._usyue()
			},
			/**
			 * 
			 * 
			 * */
			_usyue: function() {
				laikeUseyue(this);
			},
			/**
			 * 
			 * 
			 * */
			payThree:function() {
				laikePayThree(this);
			},
			/**
			 * 
			 * 
			 * */
			_showPayWay:function() {
				var me = this
				this.showPayWay1 = true
				setTimeout(function() {
					me.showPayWay = false
					me.showPayWay1 = false
				}, 500);
			},
			/**
			 * 
			 * 
			 * */
			forgetPW:function() {
				uni.navigateTo({
					url: '../../pagesB/setUp/paymentPassword'
				})
			},
			/**
			 * 
			 * 
			 * */
			chooseWay:function(way) {
				//选择支付方式
				laikeChooseWay(this,way);
			},
			/**
			 * 
			 * 
			 * */
			switchChange:function(e) {
				laikeSwitchChange(e,this);
			},
			/**
			 * 
			 * 
			 * */
			_uni_navigateTo:function(url) {
				uni.navigateTo({
					url
				})
			},
			/**
			 * 
			 * 
			 * */
			getOrderIn:function(type) {
				return this.laikepay.getOrderInfo(this,type);
			},
			/**
			 * 
			 * 
			 * */
			weixinPay:function() {
				this.laikepay.weixin_minipay(this);
			},
			/**
			 * 
			 * 
			 * */
			pay_wx:function(type) {
				this.laikepay.laikePayMain(this,type)
			},
			/**
			 * 
			 * 
			 * */
			_coupon:function() {
				//弹出优惠券选择层
				laikeShowCoupon(this);
			},
			/**
			 * 
			 * 
			 * */
			_closeCoupon:function() {
				//关闭优惠券选择层
				laikeCloseCoupon(this);
			},
			/**
			 * 
			 * 
			 * */
			in_array:function(stringToSearch, arrayToSearch) {
				for (let s = 0; s < arrayToSearch.length; s++) {
					let thisEntry = arrayToSearch[s].toString();
					if (thisEntry == stringToSearch) {
						return true;
					}
				}
				return false;
			},
			/**
			 * 
			 * 
			 * */
			_coupon_use:function(index, id, coupon_status) {
				laikeChooseCoupon(this,index, id, coupon_status);
			},
			/**
			 * 
			 * 
			 * */
			focust:function() {
				this.focus = true
			},

			...mapMutations({
				order_id: 'SET_ORDER_ID',
				status: 'SET_STATUS',
				h_content: 'SET_H_CONTENT',
			}),
			/**
			 * @description 是否已经选择支付方式
			 * 
			 * */
			_gotPayType:function(){
				laikeGetPayType(this);
			},
			
			//立即支付
			_pay_style:function() {
				let me = this;
				// #ifdef MP-WEIXIN
				uni.showLoading({
					title:'请稍等..'
				})
				wx.requestSubscribeMessage({
				  tmplIds: me.tmplIds,
				  success (res) {
					  uni.hideLoading();
					  console.log('微信小程序订阅消息授权成功');
					  laikePayAtOnce(me);
				  },fail(res1){
					  uni.hideLoading();
					  laikePayAtOnce(me);
					  console.log(res1);
					  console.log('微信小程序订阅消息授权失败');
				  }
				});
				// #endif
				// #ifndef MP-WEIXIN
				laikePayAtOnce(me);
				// #endif
			},

			//支付密码框确认
			_confirm:function(payNum) {
				this.msg = payNum
				this.laikepay.laike_walletpay_ok(this);
			},
			//支付密码框取消
			_cancel:function (){
				this.laikepay.laike_walletpay_cancel(this);
			},
			//余额支付请求
			_payAxios:function(type) {
				this.laikepay.laike_walletpay(this,type);
			},
			//跳设置支付密码页面
			_password_status:function() {
				uni.navigateTo({
					url: '../../pagesB/setUp/payment'
				});
				this.password_display = false
			},
			//节奏遮罩层传值
			_mask_value:function(mask_value) {
				this.mask_value = mask_value;
				if (mask_value == '确认') {
					if (this.pay_style == 3) {
						//第三方接口，传的金额为余额抵扣后的金额，扣款成功调用余额抵扣接口
						this._deduction()
					}
				}
			},
			_axios:function(type='') {
				
				var me = this;
				let product = uni.getStorageSync("goodsInfo");
				if (me.pay_name == "jp") {
					console.log("_axios_jp________");
					var data = {
						module: "app",
						action: "order",
						auction_id: me.bind_id,
						product_type: 'JP',
						access_id: this.access_id,
						app: "Settlement"
					}
					if (this.cpId) {
						data.product = product
						data.cart_id='';
					}
				} else if (me.bargain) {
					console.log("_axios_bargain________");
					var data = {
						module: "app",
						action: "order",
						product_type: 'KJ',
						access_id: this.access_id,
						app: "Settlement",
						bargain_id: this.bargain_id,
						address_id: this.address_id,
					}
					if (this.cpId) {
						data.product = product
						data.cart_id='';
					}
				} else {
					console.log("_axios_else________");
					var data = {
						module: 'app',
						action: 'order',
						app: 'Settlement',
						cart_id: this.cart_id,
						access_id: this.access_id,
						address_id: this.address_id,
						canshu:uni.getStorageSync("canshu")
					}
					if (product) {
						data.product = product;
						data.cart_id='';
					}
				}
				if(me.afhalen_translateX > 5){
					data.shop_address_id = me.shop_address_id
				}
				uni.request({
					data,
					url:  uni.getStorageSync("url"),
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					success: (res) => {
						if(res.data.status === 0 ){
							console.log("JSON.stringify(data)");
							console.log(JSON.stringify(data));
							console.log(JSON.stringify(res));
							me.load = false;
							// uni.showToast({
							// 	title: '交易异常',
							// 	icon: 'none'
							// });
							return;
						}
						let {
							data: {
								addemt,
								address,
								coupon_id,
								payment,
								freight,
								name,
								password_status,
								products,
								products_total,
								total,
								user_money,
								enterless,
								is_distribution,
								discount,
								grade_rate,
							}
						} = res
						// 砍价商品请求的数据
						let coupon_money = res.data.coupon_money || 0;
						let reduce_money = res.data.reduce_money || 0;
						me.address = address
						me.price = total
						me.total = total
						me.payment = payment
						if(products && products.length > 0){
						me.pro = products
						me.payTitle = products[0].list[0].product_title;
						console.log("me.payTitle");
						console.log(me.payTitle);
						}
					
						me.user_money = user_money
						if(address){
							me.addre_id = address.id;
							if(!me.$store.state.address_id_def){
								me.$store.state.address_id_def = address.id
							}
						}
						
						me.password_status = password_status
						if(type != 'onshow'){
							me.coupon_name = coupon_money
							me.coupon_id = coupon_id
							me.coupon_name1 = res.data.coupon_name
							me.isshow();
						}else{
							if(uni.getStorageSync('chooseAddress')){
								me.address = uni.getStorageSync('chooseAddress')
								me.addre_id=uni.getStorageSync('chooseAddress').id
							}
						}
						me.coupon_status = res.data.coupon_status
						me.name = name
						me.enterless = enterless
						me.is_distribution = is_distribution
						me.discount = discount?discount:1
						me.grade_rate = grade_rate?grade_rate:1
						me.reduce_money = reduce_money
						me.reduce_name = res.data.reduce_name
						me.is_subtraction = res.data.is_subtraction
						me.products_total = products_total
						if (me.user_money > me.total) {
							me.pay_index = 0
							me.pay_style = 1
						} else {
							me.pay_index = 1
							me.pay_style = 2
						}
						if (me.address) {
							if (me.address.length != 0) {
								me.adds_f = true
							} else {
								me.adds_f = false
							}
						}
						if(res.data.shop_status && res.data.shop_list){
							me.shop_status = res.data.shop_status
							me.shop_list = res.data.shop_list
							if(res.data.shop_list.length == 0){
								me.shop_address_id = ''
								uni.setStorageSync("shop_address_id",'')
							}else{
								me.shop_address_id = res.data.shop_list.id
								uni.setStorageSync("shop_address_id",res.data.shop_list.id)
							}
						}
						// 运费赋值留到最后，计算价格是放在运费的监听函数里
						me.freightt = parseFloat(freight).toFixed(2);
						me.freight = freight;
						
						me.load = false
						
						// me.isshow();
					},
					error: function(err) {
						console.log(err)
					}
				})
			},
			changeValue:function(newValue, oldValue) {
				var me = this
				laikeChangeValue(me,newValue,oldValue);

			},
			_yueInput(e){
				if(e.detail.value.length==6){
					// 100毫秒延迟，保证msg的值已经变了
					setTimeout(()=>{
						this.laikepay.laike_walletpay_ok(this)
					},100)
				}
			}
		},
		onUnload() {
			if(uni.getStorageSync('chooseAddress')){
				uni.removeStorageSync('chooseAddress')
			}
		},
		components: {
			heads,
			Maskm,
			wxParse,
			paymodel
		},
		watch: {
			pay_display(v){
				console.log('我被动了？',v)
			},
			address_id(n,o) {
				if(o){
					this._axios("address");
				}
			},
			msg(curVal) {
				this.msgLength = curVal.length;
			},
			'page': {
				handler: function(newValue, oldValue) {
					if (oldValue == 0 && newValue == 1) {
						//第一次进入页面，自动获得焦点，这里可优化。
						this.timer = setTimeout(() => {}, 500);
					}
				},
				deep: true
			},
			freight:function(){
				console.log("freight:function");
				var me = this;
				if(true){
					console.log("___________________");
					console.log(me.freight);
					me.price1 = (me.products_total - me.coupon_name - me.reduce_money) * me.discount * me.grade_rate + me.freight
					me.price2 = me.price1.toFixed(2)
					if(me.useWallte){
						if(Number(me.user_money) > Number(me.price2)){
							console.log('me.value11111111111111111');
							console.log(me.value);
							me.value = me.price2
							console.log(me.value);
					
						}else{
							me.needpay = me.price2 - me.value;
							console.log('me.needpay1');
							console.log(me.needpay);
						}
					}
					if(me.price2 < 0){
						me.price2 = 0.01
						uni.showToast({
							title: '价格小于0——3',
							icon: 'none',
							duration: 1500
						});
					}
					let should_pay = (this.products_total - this.coupon_name - this.reduce_money)*this.grade_rate + this.freight
					//当交易金额小于等于0时,终止交易
					if( should_pay < 0 ){
						should_pay = 0.01;
						uni.showToast({
							title: '价格小于0——2',
							icon: 'none',
							duration: 1500
						});
					}
					me.needpay = me.price2 - me.value;
					console.log('me.needpay2');
					console.log(me.needpay);
				}
			},
			coupon_name: function(newValue, oldValue) {
				this.changeValue(newValue, oldValue)
			},
			value: function(newValue, oldValue) {
				this.changeValue(newValue, oldValue)
			},
			price1: function(newValue, oldValue) {
				var me = this
				this.$nextTick(function() {
					if(me.useWallte){
						console.log("me.useWallte1");
						me.price1 = (me.products_total - me.coupon_name - me.reduce_money) * me.discount * me.grade_rate + me.freight - me.value
					}else{
						console.log("me.useWallte2");
						if(((me.products_total - me.coupon_name) * me.discount * me.grade_rate - me.reduce_money) <=0){
							uni.showToast({
								title: '价格小于0——1',
								icon: 'none',
								duration: 1500
							});
							me.price1 = (me.products_total - me.coupon_name - me.reduce_money) * me.discount * me.grade_rate + me.freight + 0.01
						}else{
							me.price1 = (me.products_total - me.coupon_name - me.reduce_money) * me.discount * me.grade_rate + me.freight
						}
					}
					me.price1 = Number(me.price1).toFixed(2)
			
					me.needpay = me.price1
			
					console.log('me.needpay3');
					console.log(me.needpay);
				})
			}
		},
	}
</script>

<style scoped>
	@import url("../../static/css/pay/orderDetailsr.css");
</style>

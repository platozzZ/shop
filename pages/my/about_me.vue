<template>
	<div class='us-all'>
		
		<div class="yh-title">
			<heads :title='title'></heads>
		</div>
		
		<div class="logo" :style="{top:halfWidth}">
			<img :src="log" />
		</div>
		
		<div class="about-us">
			<p>雪地属于湖南壹拾捌号网络技术有限公司，立足媒体艺术之都-长沙，致力于电商系统的服务，多年
				来创造出许多优秀的案例，在业界有口皆碑，享有盛誉，未来将与时俱进，携手客户共同锻造出跟多著名品牌。</p>
			<p class='margin_b'><span>公司电话：</span>0731-89567846</p>
			<p class='margin_b'><span>公司地址：</span>湖南省长沙市岳麓区绿地中央广场5栋3408室</p>
			<p class='margin_b'><span>公司官网：</span>www.laiketui.com</p>
			<!--<p class='margin_b'><span>CoCo微信：</span>laiketui</p>-->
		</div>
	</div>
</template>

<script>
	import Heads from '../../components/header.vue'

	export default {
		data() {
			return {
				title: '关于我们',
				log: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/15306155488.png'
			}
		},
		components: {
			Heads
		},
		computed: {
			halfWidth() {
				var gru = this.$store.state.data_height
				var heigh = parseInt(gru)
				var he = heigh * 2
				return uni.upx2px(he) + 'px';
			},
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import url("../../static/css/my/about_me.css");
</style>

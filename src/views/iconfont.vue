<template>
	<div id="iconfont">
		<div v-for="(item, index) in dataSource" :key="index" @click="() => copyText(item.font_class)">
			<span class="iconfont" :class="'icon-'+item.font_class"></span>
			<p>{{item.font_class}}</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dataSource: []
		}
	},
	created() {
		this.requestData();
	},
	methods: {
		async requestData() {
			const data = require('@/assets/img/AntDesignIcon/iconfont.json');
			this.dataSource = data.glyphs;
		},
		copyText(text) {
			var input = document.createElement('input');
			let val = `<span class="iconfont icon-`+text+`"></span>`;
			input.value = val;
			document.body.appendChild(input);
			input.select();
			document.execCommand('copy');
		}
	}
};
</script>
<style lang="less" scoped>
@radius: 10px;
#iconfont {
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;

	> div {
		width: 10.1%;
		margin: .5%;
		height: 100px;
		background: #fff;
		border-radius: @radius;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> span {
			font-size: 30px;
			color: @themeColor1;
		}

		> p {
			margin-top: 10px;
			width: 60%;
			text-align: center;
			word-wrap: break-all;
    		word-break: break-all;
			color: @themeColor1;
		}
	}
}
</style>
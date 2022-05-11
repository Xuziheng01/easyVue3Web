<template>
	<div id="ttf">
		<div 
			v-for="(item, index) in dataSource" 
			:key="index" 
			:style="'font-family:'+item+''"
			@click="() => onPressFont(item)"
		>
			<p>{{item}}</p>
			<div>
				<p>这里是测试文字为了更直观的让您感受到不同字体的特点。</p>
				<p>Here is the test text, in order to make you feel the characteristics of different fonts more intuitively.</p>
			</div>
		</div>
	</div>
</template>
<script>
import { setTheme } from "@/theme/theme.js";
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
			let arr = [];
			const files = require.context('@/assets/font/ttf', false);
			files.keys().forEach(path=> {
				let text = path.slice(2).slice(0, -4);
				arr.push(text);
			})
			this.dataSource = arr;
		},
		// 点击选择字体
		onPressFont(item) {
			setTheme(item, 'FontFamily');
			this.$message({
				message: '设置全局文字成功',
				type: 'success',
			})
		},
	}
};
</script>
<style lang="less" scoped>
@radius: 10px;
#ttf {
	padding-bottom: 15px;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	
	> div {
		margin: 15px 15px 0 0;
		padding: 20px;
		border-radius: 10px;
		background: #fff;
		cursor: pointer;

		> p {
			font-size: 26px;
			font-weight: 600;
			color: @themeColor1;
		}

		> div {
			
			> p {
				margin-top: 10px;
				font-size: 26px;
			}
		}
	}
}
</style>
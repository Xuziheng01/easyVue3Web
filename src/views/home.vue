<template>
	<div id="home">
		<div 
			v-for="(item, index) in dataSource" 
			:key="index" 
			:style="'background-image: linear-gradient(to right bottom, '+item.data.themeColor1+','+item.data.themeColor7+');'"
			@click="() => onPressTheme(item.name)"
		>
			<b>{{item.name}}</b>
			<p v-for="(val, key, _index) in item.data" :key="_index" :style="'background: '+val">{{val}}</p>
		</div>
	</div>
</template>
<script>
import { setTheme } from "@/theme/theme.js";
import { themes } from "@/theme/model.js";
export default {
	data() {
		return {
            dataSource: [],
		}
	},
	created() {
		this.initTheme();
	},
	methods: {
		initTheme () {
			let arr = [];
			for (let index in themes) {
				let item = {
					name: index,
					data: themes[index],
				}
				arr.push(item)
			}
			this.dataSource = arr;
		},
		onPressTheme (e) {
			setTheme(e, 'themeColor');
			this.$message({
				message: '设置主题成功',
				type: 'success',
			})
		},
		custom() {
			let newColor = {
				r: 12,
				g: 33,
				b: 234,
			};
			let newPrimaryColor = `${newColor.r},${newColor.g},${newColor.b}`;
			localStorage.setItem("themeColor", newPrimaryColor); // 将新的主题色存入本地
			setTheme(e, 'themeColor');
		},
		async requestData() {
			let url = this.$api.sysUserList;
			let params = {

			};
			let result = await this.$post(url, params);
			if (result.code === this.$serve.SUCCESS_CODE) {

			} else {

			}
		},
	}
};
</script>
<style lang="less" scoped>
@radius: 10px;
#home {
	width: 100%;
	height: 100%;
	padding-bottom: 15px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	overflow-y: scroll;

    > div {
		margin: 15px 15px 0 0;
		width: calc((100% - 45px) / 3);
		height: 500px;
		border-radius: @radius;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		> b {
			width: 60%;
			text-align: center;
			font-size: 20px;
			color: #fff;
			word-wrap: break-all;
    		word-break: break-all;
		}

		> p {
			margin-top: 10px;
			width: 50%;
			height: 40px;
			border-radius: @radius;
			color: #fff;
			line-height: 40px;
			text-align: center;
		}
    }
}
</style>
<template>
    <div id="shop">
		<!-- <img class="img1" :src="$assets.Images.img_shopBg3" alt=""> -->
		<!-- <img class="img2" :src="$assets.Images.img_shopBg3" alt=""> -->
		<div>
			<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
				<template v-slot:loading>
					<div 
						class="tips" 
						style="
							width: calc(100vw - 20px);
							padding: 10px 0;
							display: flex;
							align-items: center;
							justify-content: center;
						"
					>
						<img :src="$assets.Images.icon_loading" alt="">
						<p>加载中...</p>
					</div>
				</template>
				<van-list
					class="van-list"
					v-model:loading="loading"
					:finished="finished"
					:offset="offset"
					@load="onLoad"
				>
					<template v-slot:loading>
						<div class="tips">
							<img :src="$assets.Images.icon_loading" alt="">
							<p>加载中...</p>
						</div>
					</template>
					<template v-slot:finished>
						<div class="tips">
							<img :src="$assets.Images.icon_finish" alt="">
							<p>加载完毕</p>
						</div>
					</template>
					<template v-slot:error>
						<div class="tips">
							<img :src="$assets.Images.icon_error" alt="">
							<p>失败</p>
						</div>
					</template>
					<template v-slot>
						<ShopItem
							class="item"
							v-for="(item, index) in dataSource" 
							:key="index"
							:item="item"
						></ShopItem>
					</template>
				</van-list>
			</van-pull-refresh>
		</div>
	</div>
</template>
<script>
import ShopItem from '@/components/Item/ShopItem.vue';
import router from '@/router';
export default {
	components: {
		ShopItem,
	},
	data() {
		return {
			offset: '',
			refreshing: false,
			loading: true,
			finished: false,
			// dataSource: new Array(10).fill({name: '123',})
			dataSource: [{
				id: '1',
				img: 'list1',
				name: '衣服1',
				store: '青岛双星专卖店',
				price: 24,
				originalPrice: 30,
				icon: ['clothes3', 'clothes4', 'clothes5'],
			},{
				id: '2',
				img: 'list2',
				name: '衣服2',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes1', 'clothes2', 'clothes7', 'clothes8'],
			},{
				id: '3',
				img: 'list3',
				name: '衣服3',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes1', 'clothes2', 'clothes6'],
			},{
				id: '4',
				img: 'list4',
				name: '衣服4',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes1'],
			},{
				id: '5',
				img: 'list5',
				name: '衣服5',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes1', 'clothes2', 'clothes8'],
			},{
				id: '6',
				img: 'list6',
				name: '衣服6',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes2', 'clothes5'],
			},{
				id: '7',
				img: 'list7',
				name: '衣服7',
				store: '青岛双星专卖店',
				price: 500,
				originalPrice: 600,
				icon: ['clothes1', 'clothes2'],
			}]
		}
	},
	created() {
		this.requestData();
	},
	methods: {
		async requestData() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);
		},
		// 滚动条与底部距离小于 offset 时触发
		onLoad() {
			setTimeout(() => {
				this.loading = true;
				this.finished = true;
			}, 1000);
		},
		onRefresh () {
			setTimeout(() => {
				this.refreshing = false;
			}, 1000);
		},
	}
};
</script>
<style lang="less" scoped>
	::-webkit-scrollbar { width: 0 !important; } 
	::-webkit-scrollbar { width: 0 !important;height: 0; }
	
	#shop {
		position: relative;
		height: 100%;
		display: flex;

		> .img1 {
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		> .img2 {
			position: absolute;
			top: 10px;
			left: 15px;
			width: calc(100% - 20px);
			height: calc(100% - 30px);
			border-radius: 10px;
			filter: blur(30px);
		}

		> div {
			position: relative;
			flex: 1;
			margin: 10px 15px;
			border-radius: 10px;
			overflow-y: scroll;
			overflow-x: hidden;
			background: rgba(255, 255, 255, .3);
			box-shadow: 0 0 10px #c1c1c1;

			.van-list {
				position: relative;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}
		}
	}

	.tips {
		width: calc(100vw - 110px);
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		> img {
			width: 26px;
			height: 26px;
			margin-right: 6px;
		}

		> p {
			font-size: 16px;
			color: #333;
		}
	}
</style>
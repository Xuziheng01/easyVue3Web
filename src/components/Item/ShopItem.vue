<template>
	<el-skeleton class="ShopItem" :loading="loading" animated>
		<template #template>
			<div class="card">
				<el-skeleton-item 
					class="image"
					variant="image"
				/>
				<div>
					<el-skeleton-item variant="p" class="p" style="width: 30%"/>
					<el-skeleton-item variant="p" class="p"/>
					<el-skeleton-item variant="p" class="p"/>
					<el-skeleton-item variant="p" class="p" style="width: 60%" />
				</div>
			</div>
		</template>
		<template #default>
			<div class="card" @click="onPressItem">
				<img
					class="image"
					:src="$assets.Images[item.img]"
				/>
				<div>
					<p class="p">{{item.name}}</p>
					<p class="text">{{item.store}}</p>
					<div>
						<img
							v-for="(_item, _index) in item.icon"
							:key="_index"
						 	:src="$assets.Images[_item]"
						>
					</div>
					<p class="price">
						￥{{item.price}}
						<span>￥{{item.originalPrice}}</span>
					</p>
				</div>
			</div>
		</template>
	</el-skeleton>
</template>

<script>
export default {
	name: "ShopItem",
	props: {
		item: Object,
	},
	data() {
		return {
			loading: true,
		}
	},
	created() {
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	},
	methods: {
		// 点击单个商品
		onPressItem () {
			this.$router.push({name: 'goodsDetail',  params:{
				id: this.item.id
			}})
		},
	}
};
</script>

<style lang="less" scoped>

	.el-skeleton {
		width: 10%;

		> .card {
			width: 100%;
			margin: 0 0;
		}
	}
	.card {
		width: 10%;
		margin: 10px 0;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		> .image {
			width: 100%;
			height: 200px;
			object-fit: cover;
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		> div {
			height: 100px;
			margin-top: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			> .p {
				font-size: 16px;
				color: #333;
				font-weight: 600;
			}

			> .text {
				font-size: 14px;
				color: #666;
			}

			> div {
				display: flex;
				align-items: center;

				> img {
					width: 26px;
					height: 26px;
					object-fit: contain;
				}
			}

			> .price {
				font-size: 16px;
				color: #f10;
				font-weight: 600;

				> span {
					font-size: 14px;
					color: #999;
					font-weight: 400;
					text-decoration:line-through;
				}
			}
		}
	}
</style>

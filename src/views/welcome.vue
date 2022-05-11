<template>
	<div id="welcome">
		<div class="left">
			<div class="search">
				<span class="iconfont icon-search"></span>
				<input type="text" placeholder="search...">
				<img :src="$assets.Images.avatar6" alt="">
			</div>
			<div class="list">
				<div v-for="(item, index) in dataSource1" :key="index">
					<div class="header">
						<img :src="$assets.Images[item.avatar]" alt="">
						<div class="center">
							<p>{{item.name}}</p>
							<span>{{item.time}}</span>
						</div>
						<div class="right">
							<span v-if="item.star" class="iconfont icon-favorites-fill"></span>
							<span v-else class="iconfont icon-favorites"></span>
						</div>
					</div>
					<div class="ps">{{item.ps}}</div>
					<div class="text">{{item.text}}</div>
					<img v-if="!!item.banner" :src="$assets.Images[item.banner]" alt="">
				</div>
			</div>
		</div>
		<div class="right">
			<div v-for="(item, index) in dataSource2" :key="index">
				<div class="header">
					<img :src="$assets.Images[item.avatar]" alt="">
					<div class="center">
						<p>{{item.name}}</p>
						<span>{{item.time}}</span>
					</div>
					<div class="right">
						<span v-if="item.star" class="iconfont icon-favorites-fill"></span>
						<span v-else class="iconfont icon-favorites"></span>
					</div>
				</div>
				<div class="ps">{{item.ps}}</div>
				<div class="text">{{item.text}}</div>
				<div class="btn">
					<div>BTN1</div>
					<div>BTN2</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dataSource1: [{
					avatar: 'avatar1',
					name: 'Sa Dari',
					time: '20 min ago',
					ps: 'To tom, Ziad and Licy',
					text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
					star: true,
				}, {
					avatar: 'avatar2',
					name: 'Sa Dari',
					time: '20 min ago',
					ps: 'To tom, Ziad and Licy',
					text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
					star: false,
					banner: 'list11',
				}, {
					avatar: 'avatar3',
					name: 'Sa Dari',
					time: '20 min ago',
					ps: 'To tom, Ziad and Licy',
					text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
					star: true,
					banner: 'list2',
				}, {
					avatar: 'avatar4',
					name: 'Sa Dari',
					time: '20 min ago',
					ps: 'To tom, Ziad and Licy',
					text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
					star: false,
					banner: 'list3',
				}, {
					avatar: 'avatar5',
					name: 'Sa Dari',
					time: '20 min ago',
					ps: 'To tom, Ziad and Licy',
					text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
					star: false,
				}
			],
			dataSource2: [{
				avatar: 'avatar3',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。部署到多种设备，只需要一份代码库，支持移动、网页、桌面和嵌入式设备。在工程中可以使用插件、自动化测试、开发者工具以及任何可以用来帮助构建高质量应用的工具。Flutter 由 Google 支持并广泛使用，全球性的开发者社区广泛参与和维护，并得到众多世界知名品牌的信任。Flutter 由 Dart 强力驱动，为全平台优化，构建快速应用。',
				star: false,
				banner: '',
			},{
				avatar: 'avatar6',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
				star: false,
				banner: '',
			},{
				avatar: 'avatar7',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
				star: true,
				banner: '',
			},{
				avatar: 'avatar8',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'An unfolded posture refers to the opened screen.',
				star: false,
				banner: '',
			},{
				avatar: 'avatar9',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
				star: true,
				banner: '',
			},{
				avatar: 'avatar1',
				name: 'Sa Dari',
				time: '20 min ago',
				ps: 'To tom, Ziad and Licy',
				text: 'An unfolded posture refers to the opened screen, which is typically double the size of the front screen or the size of a small tablet. An unfolded posture can have landscape and portrait orientations.',
				star: false,
				banner: '',
			}],
		}
	},
	methods: {

	}
};
</script>
<style lang="less" scoped>
@radius: 10px;
#welcome {
	width: 100%;
	height: 100%;
	display: flex;

	> .left {
		position: relative;
		flex: 2;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		> .search {
			position: absolute;
			top: 15px;
			z-index: 2;
			height: 80px;
			width: 100%;
			padding: 10px 10px 10px 30px;
			box-sizing: border-box;
			border-radius: 40px;
			background: #fff;
			display: flex;
			align-items: center;

			> span {
				font-size: 30px;
				color: #333;
			}

			> input {
				flex: 1;
				padding: 10px;
				font-size: 16px;
			}

			> img {
				width: 60px;
				height: 60px;
				border-radius: 30px;
				background: #e1e1e1;
			}
		}

		> .list {
			position: relative;
			flex: 1;
			padding: 95px 0px 15px;
			overflow-y: scroll;

			> div {
				padding: 30px 30px 10px;
				margin-top: 15px;
				border-radius: @radius;
				background: #fff;
				letter-spacing: 1.5px;

				> .header {
					padding-bottom: 20px;
					display: flex;
					align-items: center;

					> img {
						width: 60px;
						height: 60px;
						border-radius: 50%;
						background: #e1e1e1;
					}

					> .center {
						flex: 1;
						padding: 0 10px;

						> p {
							margin-bottom: 10px;
							font-size: 16px;
							color: #333;
						}

						> span {
							font-size: 14px;
							color: #999;
						}
					}

					> .right {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						background: @themeColor4;
						cursor: pointer;
						text-align: center;
						line-height: 50px;

						> span {
							font-size: 30px;
							color: @themeColor1;
						}
					}
				}

				> .ps {
					padding-bottom: 20px;
					font-size: 18px;
					color: #333;
				}

				> .text {
					margin-bottom: 20px;
					font-size: 14px;
					color: #333;
					line-height: 20px;
				}

				> img {
					margin-bottom: 20px;
					width: 100%;
					border-radius: @radius;
				}
			}

			> :nth-child(2) {
				background: @themeColor6;
			}

			> :nth-child(3) {
				background: @themeColor5;
			}
		}
	}

	> .right {
		flex: 3;
		padding: 0 15px 15px;
		overflow-y: scroll;

		> div {
			margin-top: 15px;
			padding: 30px;
			border-radius: @radius;
			background: #fff;
			letter-spacing: 1.5px;

			> .header {
				padding-bottom: 30px;
				display: flex;
				align-items: center;

				> img {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					background: #e1e1e1;
				}

				> .center {
					flex: 1;
					padding: 0 10px;

					> p {
						margin-bottom: 10px;
						font-size: 16px;
						color: #333;
					}

					> span {
						font-size: 14px;
						color: #999;
					}
				}

				> .right {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background: @themeColor4;
					cursor: pointer;
					text-align: center;
					line-height: 50px;

					> span {
						font-size: 30px;
						color: @themeColor1;
					}
				}
			}

			> .ps {
				padding-bottom: 30px;
				font-size: 14px;
				color: #999;
			}

			> .text {
				padding-bottom: 30px;
				font-size: 14px;
				color: #333;
				line-height: 20px;
			}

			> .btn {
				display: flex;

				> div {
					flex: 1;
					margin: 0 10px;
					height: 40px;
					border-radius: 20px;
					background: @themeColor4;
					text-align: center;
					line-height: 40px;
					font-weight: 600;
					color: @themeColor1;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
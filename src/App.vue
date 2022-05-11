<template>
	<div id="app" class="font-family: @themeFontFamily">
		<div id="app-nav">
			<div class="menu">
				<div @click="onPressRouter('/')">
					<span class="iconfont icon-all"></span>
				</div>
			</div>
			<div class="list">
				<div class="nav-tab" v-if="active!==''" :style="'top: '+((active+1)*80-65)+'px'"></div>
				<div
					v-for="(item, index) in nav" 
					:key="index"
					@click="onPressRouter(item.router, index)"
					class="nav"
				>
					<img v-if="item.logoType === 'img'" :src="item.logo" alt="error"/>
					<span v-if="item.logoType === 'iconfont'" class="iconfont" :class="item.logo"></span>
				</div>
			</div>
		</div>	
		<div id="app-page">
			<router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition || 'fade'" mode="out-in">
					<keep-alive>
						<div>
							<component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
						</div>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import { getTheme } from "@/theme/theme";
import '@/assets/font/font.css';
export default {
	name: "App",
	components: {

	},
	data() {
		return {
			active: '',
			nav: [
				{name: '主题', logoType: 'iconfont', logo: 'icon-integral', router: '/home'},
				{name: '图标', logoType: 'iconfont', logo: 'icon-smile', router: '/iconfont'},
				{name: '字体', logoType: 'iconfont', logo: 'icon-text', router: '/ttf'},
				{name: '商城', logoType: 'img', logo: this.$assets.Images.tab_shop, router: '/shop'},
				{name: '购物车', logoType: 'img', logo: this.$assets.Images.tab_cart, router: '/cart'},
				{name: '我的', logoType: 'img', logo: this.$assets.Images.tab_mine, router: '/mine'},
			],
		}
	},
	created() {
		// 初始化主题色
		getTheme && getTheme('themeColor'),getTheme('FontFamily');
	},
	mounted() {
		// 初始化nav-tab位置
		this.getNavTab();
	},
	methods: {
		// 初始化nav-tab位置 （这路由mounted好了还要等会才能拿到能不能行了老铁）
		getNavTab () {
			setTimeout(() => {
				let hasRouter = false;
				this.nav.forEach((item, index) => {
					if (item.router === this.$route.path) {
						this.active = index;
						hasRouter = true
					}
				})
				if (!hasRouter) this.active = ''
			}, 500);
		},
		// 点击nav的路由操作
		onPressRouter(router, index, link="") {
			// wwelcome页面不需要navtab跟随
			if (index === undefined) {
				this.active = '';
			} else {
				this.active = index;
			}
            let url = window.location.href;
            if (router === 'web') {
                window.location.href = url+link;
            } else {
                this.$router.push({path: router})
            }
        },
	}
};
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	::-webkit-scrollbar {
		width: 0;
	};
	
}
input {
	border: 0;
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0);// 透明背景
}
img {
	border: 0;
}
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;
	background-image: linear-gradient(to right bottom, @themeColor7, @themeColor4);
	font-family: @themeFontFamily;

	> #app-nav {
		width: 80px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		> .menu {

			> div {
				width: 100%;
				height: 80px;
				min-height: 80px;
				display: flex;
				align-items: center;
				justify-content: center;

				> .iconfont {
					font-size: 40px;
					color: @themeColor1;
				}
			}
		}

		> .list {
			position: relative;
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow-y: scroll;

			// 移动的那个块
			> .nav-tab {
				position: absolute;
				width: 50px;
				height: 50px;
				border-radius: 5px;
				background: @themeColor4;
				transition: top .2s;
			}

			> .nav {
				position: relative;
				width: 100%;
				height: 80px;
				min-height: 80px;
				display: flex;
				align-items: center;
				justify-content: center;
				
				> img {
					width: 40px;
					height: 40px;
				}

				> .iconfont {
					font-size: 40px;
					color: @themeColor1;
				}
			}
		}
	}

	> #app-page {
		flex: 1;
		overflow: hidden;

		> div {
			width: 100%;
			height: 100%;
		}
	}
}
</style>

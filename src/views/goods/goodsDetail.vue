<template>
    <div class="back" @click="onPressBack">
        <img :src="$assets.Images.icon_back" alt="">
    </div>
    <div id="goodsDetail">
        <img :src="$assets.Images.list1" alt="">
        <p>Minimal Stand</p>
        <div class="price">
            <p>$50</p>
        </div>
        <div class="star">
            <img :src="$assets.Images.icon_star" alt="">
            <p>4.5</p>
            <span>(50 reviews)</span>
        </div>
        <span>text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  text content  </span>
    </div>
</template>
<script>
import router from '@/router';
export default {
	data() {
		return {
            
        }
	},
	created() {
		this.requestData();
	},
	methods: {
		async requestData() {
			let url = this.$api.sysUserList;
			let params = {
                id: this.$route.params.id
			};
			let result = await this.$post(url, params);
			if (result.code === this.$serve.SUCCESS_CODE) {

			} else {

			}
		},
        // 点击回退
        onPressBack () {
            router.go(-1)
        }
	}
};
</script>
<style lang="less" scoped>
@themeColor: #757cff;
    .back {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 60px;
        height: 60px;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 0 20px #e1e1e1;
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
            width: 30px;
            height: 30px;
        }
    }

    #goodsDetail {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        > img {
            margin-left: auto;
            width: calc(100vw - 50px);
            height: 400px;
            min-height: 400px;
            border-bottom-left-radius: 30px;
            object-fit: cover;
        }

        > p {
            margin: 10px 15px 0;
            color: #333;
            font-size: 26px;
            font-weight: 600;
            line-height: 30px;
        }

        > .price {
            margin: 10px 15px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > p {
                font-size: 36px;
                color: #333;
                font-weight: 600;
            }
        }

        > .star {
            margin: 10px 15px 0;
            display: flex;
            align-items: center;

            > img {
                width: 26px;
                height: 26px;
            }

            > p {
                margin-left: 10px;
                font-size: 20px;
                color: #333;
                font-weight: 600;
            }

            > span {
                margin-left: 20px;
                font-size: 14px;
                color: #333;
            }
        }

        > span {
            margin: 10px 15px;
            color: #666;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>
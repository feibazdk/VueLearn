<template lang="html">
    <div class="headerTop">
        <!-- 1.0 轮播图：mint-ui中的 swipe组件实现 -->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item> -->
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        this.getImgs();
    },
    methods : {
        getImgs(){
            var url = "http://182.254.146.100:8899/api/getlunbo";

            this.$http.get(url).then(function(res){
                    var data = res.body;
                    // 错误处理
                    if(data.status != 0){
                        Toast(data.message);
                        return;
                    }
                    // 如果服务器返回的数据正常则赋值给list
					this.list = data.message;
                })
        }
    }
}
</script>

<style scoped>
    .mint-swipe{
		height: 300px;
	}
	.mint-swipe-item img{
        width: 100%;
        height: 100%
	}
	.mint-swipe-item{
		background-color: red;
		width: 100%;
		height: 300px;
	}
</style>

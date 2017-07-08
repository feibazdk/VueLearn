<template lang="html">
    <div class="headerTop">
        <!-- 图片分类 -->
        <div class="cate">
            <ul v-bind="{style : 'width:' + ulWidth + 'px'}">
                <li>全部</li>
                <li v-for="item in cates">{{item.title}}</li>
            </ul>
        </div>

        <!--2.0 图片列表-->
		<div id="imglist">

		</div>
    </div>
</template>

<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';
export default {
    data(){
        // 用来存储图片分类数据的数组
        return {
            ulWidth : 320,
            cates : []
        }
    },
    created(){
        this.getcates();
    },
    methods:{
        getcates(){
            var url = common.apidomain + "/api/getimgcategory";

            this.$http.get(url).then(function(res){
                if (res.body.status != 0) {
                    Toast(res.body.message);
                    return;
                }
                this.cates = res.body.message;

                var w = 62;
                var count = res.body.message.length + 1;
                this.ulWidth = w * count;
            })
        }
    }
}
</script>

<style lang="css" scope>
    /*1.0 图片分类*/
	.cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	.cate ul{
	    /*width: 1000px;*/
		margin: 0px;
		padding-left: 10px;
	}
	.cate li{
		list-style: none;
		display: inline-block;
		color:#0094ff;
		font-size: 14px;
		padding-left: 6px;
	}
</style>

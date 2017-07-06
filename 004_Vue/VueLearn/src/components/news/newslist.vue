<template lang="html">
    <div class="headerTop">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"  v-for="item in list">
                <router-link to="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <div class="ft">
							<span>发表时间:{{item.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
							<span class="click">点击数：{{item.click}}</span>
						</div>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../../statics/imgs/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../../statics/imgs/cbd.jpg">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li> -->
        </ul>
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
        this.getNewsList();
        console.log(1);
    },
    methods : {
        getNewsList(){
            var url = "http://182.254.146.100:8899/api/getnewslist";

            this.$http.get(url).then(function(res){
                var body = res.body;
                if (body.status != 0) {
                    Toast(body.message);
                }

                this.list = body.message;
            })
        }
    }
}
</script>

<style scope>
    .mui-table-view img{
        height:80px;
        width:80px;
    }

    .mui-table-view .mui-media-object{
        max-width: 80px;
        line-height: 80px;
    }

    .ft{
        margin-top: 1.5em;
        font-size: 14px;
        color:#0094ff;
    }

    .ft .click{
        margin-left: 20px;
    }
</style>

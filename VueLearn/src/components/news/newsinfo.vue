<template lang="html">
    <div class="headerTop">
        <!--1.0 实现新闻详情-->
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{info.add_time | datafmt('YYYY-MM-DD')}} {{info.click}}次浏览</p>
        </div>
        <div class="content" v-html="info.content"></div>

        <!--2.0 实现评论组件的集成-->
        <!--10.2 实现评论组件-->
        <comment :id = "id"></comment>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import common from '../../kits/common.js';
import comment from '../subcom/comment.vue';

export default {
    components : {
        comment
    },
    data(){
        return {
            id : 0,
            info : {}
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.getInfo();
    },
    methods : {
        getInfo : function(){
            var url = common.apidomain + '/api/getnew/'+this.id;

            this.$http.get(url).then(function(res){
                var body = res.body;
                if (body.status != 0) {
                    Toast(body.message);
                    return ;
                }

                this.info = body.message[0];
            })
        }
    }
}
</script>

<style scope>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.5);
    }

    .title,.content{
        padding: 5px;
    }
</style>

<template lang="html">
    <div class="headerTop">
        <div class="postcomment">
            <h3>评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您要评论的内容" v-model="postcontent"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
    </div>
</template>

<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            // 用来自动火毒用户填写的评论内容
            postcontent : ""
        }
    },
    props : ["id"],
    created(){

    },
    methods : {
        postcomment : function(){
            var url = common.apidomain + '/api/postcomment/'+this.id;

            this.$http.post(url, { content : this.postcontent},{emulateJSON:true})
                .then(function(res){
                    Toast(res.body.message);
                    this.postcontent = ""
                })
        }
    }
}

</script>

<style scope>
    .postcomment{
        padding: 5px;
    }
    .p{
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }

    /*2.0 评论列表的样式*/
    .list{
        padding: 5px;
    }
    .title{
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0,0,0,0.1);
    }
</style>

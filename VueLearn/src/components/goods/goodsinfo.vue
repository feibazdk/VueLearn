<template lang="html">
    <div class="headerTop">
        <slider :imgs="imgs"></slider>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import common from '../../kits/common.js';
import slider from '../subcom/slider.vue';
export default {
    components : {
        slider
    },
    data(){
        return {
            id : 0, // 表示商品的ID
            imgs : []
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.getImgs();
    },
    methods : {
        getImgs(){
            var url  = common.apidomain + '/api/getthumimages/'+this.id;
            this.$http.get(url).then(function(res){
                var data = res.body;
                // 错误处理
                if(data.status != 0){
                    Toast(data.message);
                    return;
                }
                //判断状态
                this.imgs = data.message;
            })
        }
    }
}
    </script>

    <style lang="css" scoped>
    </style>

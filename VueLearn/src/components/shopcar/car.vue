<template lang="html">
    <div class="headerTop">
        <div class="row" v-for="(item,index) in datalist">
            <mt-switch class="switch" v-model="value[index]"></mt-switch>
            <img class="img" :src="item.thumb_path" alt="商品图片" >
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}</li>
                        <li><carinputnumber :initCount="item.cou" :goodsid="item.id" v-on:cardataobj="getiInputNumber"></carinputnumber></li>
                        <li><a href="#">删除</a></li>
                    </ul>

                </div>
            </div>
        </div>

        <div class="total">
            <div class="desc">
                <ul>
                    <li>总计(不含运费)</li>
                    <li>已勾选商品{{totalcount}}件,总价：￥{{totalAmount}}元</li>
                </ul>
            </div>
            <div class="button">
                <mt-button  type="danger" size="small">去结算</mt-button>
            </div>
        </div>

        {{value}}
    </div>
</template>

<script>
import {getgoodsObject, updateData} from '../../kits/localSg.js';
import common from '../../kits/common.js';
import carinputnumber from '../subcom/carinputNumber.vue';
import { Toast } from 'mint-ui';
export default {
    components:{
        carinputnumber
    },
    computed : {
        totalcount(){
            var trueArr = this.value.filter(function(item){ return item });
            var amount = 0;
            this.value.forEach((item, index) => {
                if (item) {
                    var count = this.datalist[index].cou;
                    var price = this.datalist[index].sell_price;
                    var itemamount = count * price;
                    amount += itemamount;
                }
            })
            this.totalAmount = amount;
            return trueArr.length;
        }
    },
    data(){
        return {
            totalAmount : 0,
            value:[],
            datalist:[
                // {
                //     "cou": 1,
                //     "id": 87,
                //     "title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
                //     "sell_price": 2195,
                //     "thumb_path": "http://182.254.146.100:8899/upload/201504/20/thumb_201504200046594439.jpg"
                // },
                // {
                //     "cou": 1,
                //     "id": 88,
                //     "title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
                //     "sell_price": 5780,
                //     "thumb_path": "http://182.254.146.100:8899/upload/201504/20/thumb_201504200059017695.jpg"
                // }
            ]
        }
    },
    created(){
        this.getdatalist();
    },
    methods : {
        getiInputNumber(resObj){
            console.log(resObj);
            updateData(resObj);
            for (var i = 0; i < this.datalist.length; i++) {
                if (this.datalist[i].id == resObj.goodslist) {
                    if (resObj.type == 'add') {
                        this.datalist[i].acou = this.datalist[i] + 1;
                    }else {
                        this.datalist[i].acou = this.datalist[i] - 1;
                    }
                    break;
                }
            }
        },
        getdatalist(){
            var obj = getgoodsObject();

            var idstring = "";

            for (var key in obj) {
                idstring += key + ',';
            }

            idstring = idstring.substring(0,idstring.length-1);

            var url  = common.apidomain + '/api/goods/getshopcarlist/'+idstring;

            this.$http.get(url).then(function(res){
                //状态值的判断
                if(res.body.status != 0 ){
                    Toast(res.body.message);
                    return;
                }

                res.body.message.forEach((item) => {
                    item.cou = obj[item.id];
                    this.value.push(false)
                })

                this.datalist = res.body.message;
            });
        }
    }
}
</script>

<style scoped>
    .row{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        height: 102px;
        display: flex;
    }

    .switch{
        flex:0 0 52px;
    }

    .img{
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
    }

    .inforight{
        margin-left: 5px;
        flex:1;
    }
    .inforight ul{
        padding-left: 0px;
    }
    .inforight li{
        list-style: none;
        display: inline-block;
    }

    .inforight h4{
        color: #0094ff;
        font-size: 14px;
    }

    .bottom li:first-child{
        color:red;
        margin-right: 10px;
    }

    .bottom li:last-child{
        margin-left: 10px;
    }
    .total{
        height: 100px;
        background-color: rgba(0,0,0,0.1);
        display: flex;
        padding: 5px;;
    }

    .total ul {
        padding-left: 0px;
    }
    .total li{
        list-style: none;
        font-size: 14px;
    }

    .button{
        flex:0 0 60px;
        margin: 30px 0 0 0 ;
    }

    .desc{

        flex:1;
    }
</style>

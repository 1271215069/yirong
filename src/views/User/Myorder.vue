<template>
    <div class="myorder">
        <div class="orderlist" v-for="(item,index) in kflist" :key="index">
            <div class="headimg">
                <img :src="require('@/assets/img/Pres/kf1.png')" alt="">
            </div>
            <div class="ordertext">
                <div class="btnline">
                    助理：{{item.user_nicename}}
                    <button>QQ:{{item.qq}}</button>
                    <!-- @click.prevent="toqq(item.qq)" -->
                </div>
                <p class="ordernum">订单号：{{item.order_sn}}</p>
                <div class="orderline"></div>
                <p class="orderstatus" v-if="item.tech_type=='2'">正在为您服务.....</p>
                <p class="orderstatus" v-if="item.tech_type=='1'">等待分配技术助理<span>（请您耐心等候...）</span></p>
                <p class="orderstatus" v-if="item.tech_type=='3'">服务已完成<span>（恭喜您已获得审批）</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"myorder",
    data(){
        return{
            status:2,
            kflist:[],
        }
    },
    components:{

    },
    methods:{
        toqq(num){
            // num=1271215069; 
            var kefu101 = "http://wpa.qq.com/msgrd?v=3&uin="+num+"&site=oicqzone.com&menu=yes";//QQ
        	var kefu102 = "mqqwpa://im/chat?chat_type=wpa&uin=381232999&version=1&src_type=web&web_src=oicqzone.com";//微信
            window.open(kefu101);
        }
    },
    mounted(){
        this.action({
            moduleName:"ordertech",
                url:'/order/ordertech',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                }
        }).then(res=>{
            if(res.code==200){
                this.kflist=res.data.data;
                console.log(this.kflist)
            }else{
                this.$vux.toast.text(res.message)
            }
        }).catch(err=>{})
        console.log(557)
    }
}
</script>
<style lang="less" scoped>
.myorder{
    .orderlist{
        background: #fff;
        padding: 7px 4%;
        overflow: hidden;
        margin-top: 15px;
        .headimg{
            width: 18%;
            float: left;
            img{
                width: 100%;
                display: block;
            }
        }
        .ordertext{
            float: right;
            width: 78%;
            .btnline{
                font-size: 18px;
                color:#666666;
                overflow: hidden;
                line-height: 40px;
                button,botton:focus{
                    border: none;
                    outline: none;
                    line-height: 30px;
                    background: #00cccc;
                    color: #fff;
                    font-size: 14px;
                    padding: 0 10px;
                    border-radius: 15px;
                    margin-left: 10px;
                    float: right;
                    margin-top: 5px;
                }
            }
            .ordernum{
                color: #ff6600;
                font-size: 14px;
                line-height: 30px;
            }
            .orderline{
                height: 1px;
                width: 100%;
                background: #999999;
            }
            .orderstatus{
                color: #999999;
                font-size: 14px;
                 line-height: 30px;
                 span{
                     color: #00cacc;
                 }
            }
        }
    }
}
</style>

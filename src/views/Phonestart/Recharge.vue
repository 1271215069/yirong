<template>
    <div class="Recharge">
        <div class="mymessage">
            <div class="left">
                <img :src="require('@/assets/img/Pres/mymessage.png')" alt="">
            </div>
            <div class="right">
                <p>188****0000</p>
                <p>账户余额：¥ 0</p>
            </div>
        </div>
        <div class="recontent">
            <img :src="require('@/assets/img/Pres/wallet.png')" alt="">
            <p class="retext">充值金额</p>
            <p class="renum">¥ 199</p>
        </div>
        <div class="submit" @click="checkre">立即充值</div>
    </div>
</template>
<script>
export default {
    name:"recharge",
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        checkre(){

        }
    },
}
</script>
<style lang="less" scoped>
.Recharge{
    .mymessage{
        background: #ff6600;
        padding: 20px;
        overflow: hidden;
        .left{
            float: left;
            img{
                width: 50px;
                height: 50px;
                display: block;
            }
        }
        .right{
            float: left;
            padding-left: 15px;
            p{
                color: #fff;
            }
            p:nth-child(1){
                font-size: 16px;
            }
            p:nth-child(2){
                font-size: 14px;
            }
        }
    }
    .recontent{
        img{
            width: 70px;
            height: 68px;
            display: block;
            margin: 0 auto;
            margin-top: 80px;
        }
        .retext{
            font-size: 18px;
            text-align: center;
            color:#ff6633;
            line-height: 40px;
        }
        .renum{
            font-size: 36px;
            text-align: center;
            color:#ff6633;
            line-height: 42px;
        }
    }
    .submit{
        width: 90%;
        margin: 0 auto;
        height: 45px;
        line-height: 45px;
        border-radius: 23px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background:linear-gradient(to left,#f4a223 ,#f46a21);
        margin-top: 70px;
    }
}
</style>

<template>
    <div class="order">
        <div class="titleimg">
            <img :src="require('@/assets/img/Pres/wwn11.png')" alt="">
            <div class="price">¥199</div>
        </div>
        <div class="submit" @click="checksub">支付</div>
    </div>
</template>
<script>
export default {
    name:"createorder",
    data(){
        return{

        }
    },
    methods:{
        checksub(){
            this.action({
                    moduleName:"createOrder",
                    url:'/pay/createOrder',
                    method:'post',
                    isFormData:true,
                    data:{
                        token:this.airforce.login_post.data.token,
                        type:"1",
                    }
                }).then(res=>{
                    if(res.code==200){
                       this.$router.push("/Sqxx?oid="+res.data.m_id);
                    }else{
                       this.$vux.toast.text(res.message);
                    }
                }).catch(err=>{})
        }
    }
}
</script>
<style lang="less" scoped>
.order{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/Pres/orderbj.png) no-repeat;
    background-size: cover;
    .titleimg{
        width: 80%;
        padding: 230px 0 0 0;
        margin: 0 auto;
        img{
            display: inline-block;
            width: 100%;
            position: relative;
            z-index: 20;
        }
        .price{
            // width: 80%;
            margin: 0 auto;
            background: #3B72ED;
            box-sizing: border-box;
            padding: 20px;
            position: relative;
            top: -20px;
            z-index: 10;
            border-radius: 5px;
            text-align: center;
            color: #D6D696;
            font-size: 30px;
            font-weight: 500;
        }
    }
    .submit{
            width: 80%;
            margin: 0 auto;
            height: 45px;
            line-height: 45px;
            border-radius: 23px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            background: #3B72ED;
            //background:linear-gradient(to left,#568BFF ,#3B72ED);
            margin-top: 30px;
        }
}
</style>

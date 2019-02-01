<template>
    <div class="smsver">
        <group gutter="0" class="gutter">
            <x-input title="手机号" v-model="tel" placeholder="请输入手机号码"></x-input>
        </group>
        <group gutter="0" class="gutter yzm">
            <x-input title="验证码" v-model="yzm" placeholder="请输入短信验证码"></x-input>  
            <span class="yzmbtn" @click.prevent="getyzm">获取验证码</span>
        </group>
        <div class="submit" @click="checksub">确认提交</div>
        <p class="wxts">温馨提示！此次手机验证仅供平台数据统计。后续页面如再次手机验证是为贷款资料进件正常需求，请放心填写。给您带来不便，敬请谅解！我们将严格保护您的个人隐私，绝不泄露。</p>
    </div>
</template>
<script>
import { XInput,Group } from 'vux'
export default {
    name:"smsver",
    components:{XInput,Group},
    data(){
        return{
            tel:"",
            yzm:""
        }
    },
    methods:{
        getyzm(){//获取验证码
        console.log(87878)
            this.action({
                moduleName:"getcode",
                url:'/member/getcode',
                method:'post',
                isFormData:true,
                data:{
                    phone:this.tel,
                }
            }).then(res=>{
                if(res.code==200){
                    this.$vux.toast.text(res.message);
                }else{
                    this.$vux.toast.text(res.message);
                }
            }).catch(err=>{})
        },
        checksub(){
            let hashobj={};
            try{
                let urlhash=window.location.href.split("?");
                let hashlist=urlhash[1].split("&");

                for(let i=0;i<hashlist.length;i++){
                    let iarr = hashlist[i].split("=");
                    hashobj[iarr[0]] =iarr[1];
                }
                console.log(hashobj)
            }catch(e){}
            // this.action({
            //             moduleName:"Oid",
            //             goods:{
            //                 oid:"79"
            //             }
            //         })
            this.action({
                moduleName:"regorder",
                url:'/order/regorder',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                    phone:this.tel,
                    code:this.yzm,
                    push_id:hashobj.push_id,
                    order_id:hashobj.orderid,
                }
            }).then(res=>{
                if(res.code==200){
                    window.location.href=this.airforce.Oid.url;
                }else{
                    this.$vux.toast.text(res.message);
                }
            }).catch(err=>{})
        }
    }
}
</script>
<style lang="less" scoped>

.gutter{
    &/deep/ .weui-cells:before{
            border: none;
        }
}



.yzm{
    position: relative;
    z-index: 9;
    &/deep/ .yzmbtn{
        position: absolute;
        right: 15px;
        top: 8px;
        font-size: 14px;
        padding: 5px 8px;
        background: #00CCCC;
        color:#fff;
        border-radius:16px; 
        z-index: 10;
    }
}
.wxts{
    width: 70%;
    margin: 30px auto 0;
    font-size: 14px;
    color: #999999;
    text-align: center;
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
        margin-top: 60px;
    }
</style>

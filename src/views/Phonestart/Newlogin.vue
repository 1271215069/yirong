<template>
    <div class="login">
        <p class="title">您好，请登陆！</p>
        <group class="inputbox" gutter="0">
            <x-input class="xinput" placeholder="请输入手机号码" v-model="phone">
                <img slot="label" :src="require('@/assets/img/Pres/phone.png')" alt="">
            </x-input>
        </group>
        <group class="inputbox" gutter="0">
            <x-input class="xinput" type="password" placeholder="请输入密码" v-model="psd">
                <img slot="label" :src="require('@/assets/img/Pres/lock.png')" alt="">
            </x-input>
        </group>
        <div class="titlelist">
            <span class="subtitle left" @click.prevent="forget">忘记密码</span>
            <span class="subtitle right" @click.prevent="register">没有账号？前去注册</span>
        </div>
        <div class="submit" @click.prevent="checksub">确认提交</div>
    </div>
</template>
<script>
import { XInput,Group,XDialog  } from 'vux';
export default {
    name:"login",
    components:{
        XInput,
        Group,
        XDialog 
    },
    data(){
        return{
            phone:"",
            psd:""
        }
    },
    methods:{
        forget(){
            this.$router.push("/Pforgetpsd");
        },
        register(){
            this.$router.push("/Pregister")
        },
        checksub(){//登陆的方法
            let telzz= /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            if(this.phone==""){
                this.$vux.toast.text("请输入手机号码")
                return;
            }
            if (!telzz.test(this.phone)){
                this.$vux.toast.text("请输入有效的手机号码！")
                return;
            }
            if(this.psd==""){
                this.$vux.toast.text("请输入密码")
                return;
            }
            this.action({
                moduleName:"login",
                url:'/member/login',
                method:'post',
                isFormData:true,
                data:{
                    phone:this.phone,
                    password:this.psd,
                }
            }).then(res=>{
                if(res.code==200){
                    this.$vux.toast.text("登陆成功");
                    
                    localStorage.login_post = JSON.stringify(res);
                    setTimeout(() => {
                        this.$router.push('/Createorder');
                    }, 2000);
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch(err=>{})
        }
    }
}
</script>
<style lang="less" scoped>
.login{
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
    .title{
        font-size: 30px;
        color:#ff6633;
        line-height: 120px;
        padding-left: 40px;
    }
    .inputbox{
        border-bottom: 1px solid #dcdcdc;
        margin-left: 25px;
        margin-right: 25px;
        position: relative;
        &/deep/ .weui-cells:before{
            border: none;
        }
        &/deep/ .vux-no-group-title{
            label{
                img{
                    width: 18px;
                    height: 18px;
                    display: block;
                    float: left;
                    margin-top: 19px;
                }
                .sureread{
                    color: #aab2bd;
                    line-height: 56px;
                    padding-left: 5px;
                    a{
                        color:#ff6633;
                    }
                }
                input[type=checkbox]{
                    display: none;
                }
            }
        }
        .xinput{
            padding: 15px 0;
            img{
                width: 20px;
                height: 20px;
                display: block;
                margin-right: 5px;
            }
            
        }
        .getyz{
                line-height: 56px;
                position: absolute;
                right: 0;
                top: 0;
                color: #aab2bd;
                span{
                    color: #ff6633;
                }
            }  
    }
    .titlelist{
        box-sizing: border-box;
        margin: 10px 25px 20px;
        overflow: hidden;
        .subtitle{
            color: #ff6633;
            font-size: 14px;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
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
        margin-top: 60px;
    }
}
</style>

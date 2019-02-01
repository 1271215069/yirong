<template>
    <div class="Loadjs">
        <div v-if="!kf.kgy" class="icon">
            <img :src="require('@/assets/img/Pres/wait.png')" alt="">
        </div>
        <p v-if="!kf.kgy">尊敬的用户，恭喜你成功提交申请，我们会在5-10分钟内给您安排技术人员辅助您申请贷款,请前往公众号个人中心-我的订单内查看客服联系方式或在当前页面等待</p>
        <P v-if="kf.kgy">尊敬的用户，已为您分配技术人员</P>
        <ul v-if="kf.kgy">
            <li>
                <span class="title">客服姓名：</span>
                <span class="kftext">{{kf.name}}</span>
            </li>
            <li>
                <span class="title">联系QQ：</span>
                <span class="kftext">{{kf.QQ}}</span>
            </li>
        </ul>
        <div v-if="kf.kgy" class="go" @click="go">前去申请</div>
    </div>
</template>
<script>
export default {
    name:"loadjs",
    data(){
        return{
            kf:{
                kgy:false,
                name:"",
                QQ:""
            },
            interval:"",
            noid:""
        }
    },
    methods:{
        go(){
            this.action({
                moduleName:"orderlist",
                url:'/order/orderlist',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                }
            }).then(res=>{
                if(res.code==200){ 
                    for(let m=0;m<res.data.data.length;m++){
                        
                        if(res.data.data[m].id==this.noid){
                            console.log(222)
                            if(res.data.data[m].push_array_id==null){
                                this.$vux.toast.text("您当前暂未匹配产品，请联系技术人员为您匹配产品")
                            }else{
                                clearInterval(this.interval);
                                this.$router.push("/AntPushShop?router=AntPushShop&token="+this.airforce.login_post.data.token) 
                            }
                        }
                    }
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch(err=>{})
          
        },
        getoid(){//获取改用户的订单id，如不是会员跳支付，如是判断有无分配客服信息，有就显示跳转按钮
            this.action({
                moduleName:"findOrder",
                url:'/Order/findOrder',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                }
            }).then(res=>{
                if(res.code==200){
                    this.noid=res.data.id;
                    this.getdata();
                }else if(res.code==400){
                    this.$vux.toast.text(res.message)
                    setTimeout(() => {
                        this.$router.push("/Createorder")
                    }, 2000);
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch(err=>{})
        },
        creatorder(){//创建订单
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
                                
                            }else{
                                this.$vux.toast.text(res.message)
                            }
                        }).catch(err=>{})
            },
        getdata(){//获取分配的客服信息的方法
            // let hashobj={};
            // try{
            //     let urlhash=window.location.href.split("?");
            //     let hashlist=urlhash[1].split("&");

            //     for(let i=0;i<hashlist.length;i++){
            //         let iarr = hashlist[i].split("=");
            //         hashobj[iarr[0]] =iarr[1];
            //     }
            //     console.log(hashobj)
            // }catch(e){}


            this.action({
                url:'/order/ordertechdetail',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                    o_id:this.noid
                }
            }).then(res=>{
                console.log(res)
                if(res.code==200){
                    if(res.data.tech_type==0){
                        this.kf.kgy=false;
                        let that=this;
                        setTimeout(that.getdata,10000);
                    }else if(res.data.tech_type==1){
                        this.kf.kgy=true;
                        this.kf.name=res.data.user_nicename;
                        this.kf.QQ=res.data.qq;
                    }
                }else{
                    this.$vux.toast.text(res.message)
                    let that=this;
                    setTimeout(that.getdata,10000);
                }
            }).catch(err=>{})
        }
    },
    mounted(){

        this.getoid();
    }
}
</script>
<style lang="less" scoped>
.Loadjs{
    .icon{
        width: 120px;
        height: 120px;
        margin: 50px auto 50px;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    p{
        width: 60%;
        margin: 0 auto;
        margin-top: 30px;
        color: #f46a21;
        text-align: center;
        font-size: 16px;
    }
    ul{
        margin-top: 30px;
        li{
            line-height: 30px;
            .title{
                display: inline-block;
                width: 50%;
                text-align: right;
            }
        }
    }
    .go{
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

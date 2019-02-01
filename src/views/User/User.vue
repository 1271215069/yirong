<template>
    <div class="User">
        <div class="User-header">
            <flexbox>
                <flexbox-item span="80">
                    <div class="box">
                        <input type="file" @change="updata">
                        <img class="touxiang" :src="defaultImg"/>
                    </div>
                </flexbox-item>
                <flexbox-item class="top-right" @click.native="xgzl">
                    <div>昵称：{{airforce.prefectInfo.nick_name}}</div>
                    <div>会员ID：{{airforce.prefectInfo.id}}</div>
                </flexbox-item>
            </flexbox>
            
            <!-- <flexbox class="bottom" v-if="isBan">
                <flexbox-item class="flexbox-item-bottom left">
                    <h1>{{airforce.prefectInfo.member_wallet | member_wallet}}</h1>
                    <p>金币余额</p>
                </flexbox-item>
                <flexbox-item class="flexbox-item-bottom content">
                    <h1>{{airforce.prefectInfo.maid_money}}</h1>
                    <p>待审核佣金</p>
                </flexbox-item>
                <flexbox-item class="flexbox-item-bottom right">
                    <h1>{{airforce.prefectInfo.cash | member_wallet}}</h1>
                    <p>已提金额</p>
                </flexbox-item>
            </flexbox>
            <div  class="title" v-if="isBan">
                <span>[会员等级：{{airforce.prefectInfo.grade | vipState}}]</span>
            </div>
            <div  class="title" v-if="isBan">
                <span @click="doTel(airforce.prefectInfo.referee)">推荐人（{{airforce.prefectInfo.referee}}）</span>
            </div> -->
        </div>
        <group class="textcontent" gutter="0">
            <cell title="手机号" :value="airforce.prefectInfo.phone"></cell>
            <cell title="微信号" :value="airforce.prefectInfo.wx_number"></cell>
            <cell title="推荐人" :value="airforce.prefectInfo.referee"></cell>
            <cell title="地址" :value="airforce.prefectInfo.address"></cell>
            <cell title="我的订单" is-link link="/Myorder"></cell>
        </group>
        <!-- <group class="User-group User-group-top" v-if="isBan">
            <cell :title="MyWallet.title" @cell-font-size="fz"  :is-link="true" :link="MyWallet.route" class="User-cell">
                <img slot="icon" v-if="MyWallet.img" class="iconfont icon1" :src="MyWallet.img" alt="">
                <img slot="icon" v-else class="iconfont icon1" src="http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5" alt="">
                <span>{{airforce.prefectInfo | walletAll}}</span>
            </cell>
        </group> -->
        <!-- <div class="iconsBox">
            <flexbox :gutter="0" wrap="wrap" class="iconsBox-flexbox">
                <flexbox-item @click.native="go(item)" :span="1/4" v-for="(item,index) in configs" :key="`configs${index}`" :class="`configs${index}`">
                    <img :src="item.img">
                    <div :class="{text:true,select:item.bool}">{{item.title}}</div>
                </flexbox-item>
            </flexbox>
        </div> -->
    </div>
</template>

<script>
    import { Group, Cell, Flexbox, FlexboxItem } from "vux"
import { setTimeout } from 'timers';
    export default {
        name: "user",
        components:{ Group, Cell, Flexbox, FlexboxItem },
        data(){
            return {
                bj: require('@/assets/img/Login/touxiang_bj.png'),
                fz:'14px',
                MyWallet:{},
                configs:[
                    {
                        title:"--",
                        link:'/AgentUpgrade',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/MyContacts',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/Xgzl',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/WithdrawalRecord',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/IncomeDetailsList',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/AntPush',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                    {
                        title:"--",
                        link:'/Myorder',
                        img:'http://placeholder.qiniudn.com/60x60/e5e5e5/e5e5e5',
                    },
                ],
            }
        },
        methods:{
            updata(ev){
                this.$vux.loading.show({text: '上传中..'});
                //头像上传的方法
                this.action({
                    moduleName:'uploadimg',
                    url:"/member/uploadimg",
                    method:"post",
                    isFormData:true,
                    data:{
                        token:this.airforce.login_post.data.token,
                        type:'head',
                        head:ev.target.files[0],
                    }
                }).then(res=>{
                    if(res.code != 200){
                        this.$vux.toast.text(res.message);
                        return;
                    };
                    this.$vux.toast.text("头像上传成功");
                    this.action({
                        moduleName:"login_post",
                        goods:{
                            data:{
                                head_pic:res.data.head_pic
                            }
                        }
                    });
                    localStorage.login_post = JSON.stringify(this.airforce.login_post);
                }).catch(err=>{
                    this.$vux.toast.text(err);
                })
            },
            xgzl(){
                this.$router.push("/Xgzl");
            },
            doTel(tel){
                this.$vux.confirm.show({
                    title:"温馨提示",
                    content:"确定拨打号码【"+tel+"】?",
                    onConfirm:()=>{
                        location.href = 'tel:'+tel;
                    }
                });
            },
            go(item){
                if(item.route && item.route.length > 0){
                    this.$router.push(item.route+"?id="+item.id);
                    return;
                }
                this.$router.push("/DocDetails?docSee="+item.url+"&docSeeTitle="+item.title);
            },
            init(){
                try {
                    this.configs = this.airforce.configs_post.data.filter(e=>e.type == '4');
                    this.MyWallet = _.find(this.airforce.configs_post.data,{type:"9"})
                }catch (e){}
            },
            getorderid(){//根据token获取订单id
                let noid="";
                let that=this;
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
                        noid=res.data.id;
                        
                        this.judgestatus(noid);
                    }else if(res.code==400){//非会员用户情况
                        
                        this.creatorder();
                    }else{
                        this.$vux.toast.text(res.message)
                    }
                }).catch(err=>{})
            },
            judgestatus(woid){//更具订单id获取订单详情判断支付状态
                this.action({
                            moduleName:"orderdetail",
                            url:'/order/orderdetail',
                            method:'post',
                            isFormData:true,
                            data:{
                                token:this.airforce.login_post.data.token,
                                id:woid,
                            }
                        }).then(result=>{
                            if(result.code==200){
                                // if(result.data.status=='1'|| result.data.status=='5'){//订单未付款或已完成
                                //     console.log("需要支付")
                                    
                                // }else 
                                if(result.data.status=='2'){//如果是订单已付款
                                    let kffp=result.data.tech_type;
                                    let orderid=result.data.id;
                                    
                                    this.judginfo(kffp,orderid);
                                    // if(result.data.tech_type=='1'){//如果是已付款未分配
                                    //     this.$router.push("/Loadjs");
                                    // }
                                }else{//除了已付款状态之外的情况
                                    this.creatorder();
                                }
                            }else{
                                this.$vux.toast.text(result.message)
                            }
                        }).catch(error=>{})
            },
            judginfo(kffp,orderid){//判断用户详细信息是否完善
                this.action({
                    moduleName:"memberdDetail",
                    url:'/member/memberdDetail',
                    method:'post',
                    isFormData:true,
                    data:{
                        token:this.airforce.login_post.data.token,
                    }
                }).then(res=>{
                    if(res.code==200){
                        if(res.data.detail_id==null){//未完善
                            this.$router.push("/Sqxx?token="+this.airforce.login_post.data.token+"&router=Sqxx&oid="+orderid);
                        }else{//以完善
                            if(kffp=='1'){//未分配客服
                                this.$router.push("/Loadjs");
                            }else{//已分配客服
                                return;
                            }
                        }
                    }else{
                        this.$vux.toast.text(res.message)
                    }
                }).catch(err=>{})
            },
            creatorder(){//创建订单
                //console.log("跳支付")
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
                                window.location.href=res.data.url;
                            }else{
                                this.$vux.toast.text(res.message)
                            }
                        }).catch(err=>{})
            }
        },
        computed:{
            defaultImg(){
                try {
                    if(this.airforce.login_post.data.head_pic){
                        return this.airforce.login_post.data.head_pic;
                    }
                }catch (e){}
                return require('@/assets/img/Login/touxiang.png');
            },
            configs_post_data(){
                try {
                    return this.airforce.configs_post.data;
                }catch (e){}
            },
            isBan(){
                try {
                    if(this.airforce.configs_post.data){
                        var Data = _.find(this.airforce.configs_post.data,{type:'14'})
                        if(Data.url == "on"){
                            return true;
                        }
                        return false;
                    }
                }catch (e){}
                return false;
            }
        },
        mounted(){
            if(this.configs_post_data){
                this.init();
            };
            this.action({
                moduleName:'layout',
                goods:{
                    clickRight:()=>{
                        this.$router.push("/Sz")
                    }
                }
            });
            if(!this.airforce.memberdDetail_post || this.airforce.memberdDetail_post.code != 200){
                this.$vuz.loading.show({theme:"transparent"});
                this.action({
                    moduleName:'memberdDetail_post',
                    url:"/member/memberdDetail",
                    method:"post",
                    data:{
                        token:this.airforce.login_post.data.token,
                    }
                }).then(res=>{
                    this.$vuz.loading.hide();
                    if(res.code == 200){
                        try {
                            res.data.address_all = JSON.parse(res.data.address_all);
                        }catch (e){}
                        this.action({
                            moduleName:'prefectInfo',
                            goods:res.data
                        })

                    }
                }).catch(err=>{
                    this.$vuz.loading.hide();
                })
            }

        this.getorderid();











        },
        watch:{
            configs_post_data(){
                this.init();
            }
        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color.less";
.fz{
    font-size: 12px;
}
.User{
    padding-bottom: 50px;
    .User-header{
        background-color: @theme-color;
        text-align: center;
        position: relative;
        padding: 0 @paIndex;
        padding-bottom: 15px;
        padding-top: 15px;
        @zindex:60px;
        @index:15px;
        @s:3.5s;
        @animationOpt:bounce @s infinite ease-in-out;
        @keyframes bounce {
            0%{
                box-shadow:
                        0 0 0 0 @rgba_ffffff_05;
            }
            25%{
                box-shadow:
                        0 0 0 @index/2 @rgba_ffffff_05;
            }
            50%{
                box-shadow:
                        0 0 0 @index/2 @rgba_ffffff_05,
                        0 0 0 @index @rgba_ffffff_05;
            }
            100% {
                box-shadow:0 0 0 0 @rgba_ffffff_05;
            }
        }
        
        .box{
            color: @cor_ffffff;
            display: inline-block;
            width: @zindex;
            height: @zindex;
            line-height: @zindex;
            border-radius: 100%;
            background-color: @rgba_ffffff_18;
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            overflow: hidden;
            //animation: @animationOpt;
            //-webkit-animation: @animationOpt;
            //margin-bottom: @index;
            position: relative;
            z-index: 2;
            input[type=file]{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
            }
            .touxiang{
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
        .title{
            position: relative;
            z-index: 2;
            color: @cor_ffffff;
            font-size: 12px;
            a{
                 position: relative;
            z-index: 3;
            color: @cor_ffffff;
            font-size: 12px;
            }
        }
        .touxiang_bj{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        .top-right{
            color: @cor_ffffff;
            font-size: 14px;
            line-height: 25px;
            .icon-right(@cor_ffffff);
        }
        .bottom{
            .flexbox-item-bottom{
                text-align: center;
                color: @cor_ffffff;
                border-right: 1px solid @cor_ffffff*0.9;
                margin: @maTop 0;
                margin-top: @maTop !important;
                h1{
                    font-size: 18px;
                    font-weight: initial;
                }
                p{
                    font-size: 12px;
                }
                &.right{
                    border: none;
                }
            }
        }
        .textcontent{
            &/deep/ .weui-cells{
                font-size: 10px;
            }
        }
    }
    &/deep/ .User-group{
        .vux-no-group-title{
            margin: 0;
            margin-top: @maTop;
            .iconfont{
                margin-right: @maTop;
                font-size: 24px;
                line-height: 30px;
            }
        }
        &.User-group-top{
            .vux-no-group-title{
                margin: 0;
            }
        }
    }
    .iconsBox{
        background-color: @cor_ffffff;
        padding: @maTop @paIndex;
        text-align: center;
        margin-top: @maTop;
        font-size: 12px;
        padding-bottom: 0;
        .iconsBox-flexbox{
            margin: 0;
        }
        img{
            display: inline-block;
            width: 40px;
            height: 40px;
        }
        div{
            margin-bottom: @maTop;
        }
        *{
            text-align:center;
        }
    }
    .icon1{
        width: 30px;
        height: 30px;
    }
}
</style>
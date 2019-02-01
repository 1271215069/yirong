<template>
    <div class="Sqxx">
        <div class="colorhead">申请信息</div>
        <div class="sqcontent">
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="kfnum" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">QQ：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="username" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">姓名：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="tel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">手机号：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">手机号是否本人实名登记：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sfsm=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sfsm=='1' || sfsm!='2'" alt="">
                            <input type="radio" value="2" v-model="sfsm">
                            <span>是</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sfsm=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sfsm=='2' || sfsm!='1'" alt="">
                            <input type="radio" value="1" v-model="sfsm">
                            <span>否</span>
                        </label>
                    </div>
                </cell-box>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="tellong" text-align="right" placeholder="月份">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">手机号用时多长时间：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">手机型号：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sjxh=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sjxh=='0' || sjxh!='1'" alt="">
                            <input type="radio" value="1" v-model="sjxh">
                            <span>IOS</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sjxh=='0'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sjxh=='1' || sjxh!='0'" alt="">
                            <input type="radio" value="0" v-model="sjxh">
                            <span>安卓</span>
                        </label>
                    </div>
                </cell-box>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="sfz" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">身份证号码：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="address" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">现住地址：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="zmf" text-align="right" placeholder="不填默认为无">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">芝麻分多少分：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="bankcard" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">有哪些银行信用卡：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">公积金：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="gjj=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="gjj=='2' || gjj!='1'" alt="">
                            <input type="radio" value="1" v-model="gjj">
                            <span>有</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="gjj=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="gjj=='1' || gjj!='2'" alt="">
                            <input type="radio" value="2" v-model="gjj">
                            <span>否</span>
                        </label>
                    </div>
                </cell-box>
            </group>

            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">社保：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sb=='1'" sb="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sb=='2' || sb!='1'" alt="">
                            <input type="radio" value="1" v-model="sb">
                            <span>有</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="sb=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="sb=='1' || sb!='2'" alt="">
                            <input type="radio" value="2" v-model="sb">
                            <span>否</span>
                        </label>
                    </div>
                </cell-box>
            </group>

            <group class="listbox" gutter="0">
                <popup-picker v-model="xxw" :data="xllist">
                    <template slot="title" slot-scope="props">
                        <span class="must">（必填）</span>
                        <span class="sqtitle">学信网学历：</span>
                    </template>
                </popup-picker>
            </group>

            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="workaddname" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">工作单位全称：</span>
                </x-input>
            </group>

            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">是否结婚：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="marry=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="marry=='1' || marry!='2' || marry=='3'" alt="">
                            <input type="radio" value="2" v-model="marry">
                            <span>否</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="marry=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="marry=='2' || marry!='1' || marry=='3'" alt="">
                            <input type="radio" value="1" v-model="marry">
                            <span>是</span> 
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="marry=='3'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="marry=='1' || marry!='3' || marry=='2'" alt="">
                            <input type="radio" value="3" v-model="marry">
                            <span>离异</span>
                        </label>
                    </div>
                </cell-box>
            </group>


            <group v-if="marry=='1'" class="listbox" gutter="0">
                <x-input class="xinput" v-model="spousename" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">配偶姓名：</span>
                </x-input>
            </group>
            <group v-if="marry=='1'" class="listbox" gutter="0">
                <x-input class="xinput" v-model="spousetel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">配偶电话：</span>
                </x-input>
            </group>


            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="dadname" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">父亲姓名：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="dadtel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">父亲电话：</span>
                </x-input>
            </group>


            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="momname" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">母亲姓名：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="momtel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">母亲电话：</span>
                </x-input>
            </group>


             <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="friendname" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">朋友姓名：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="friendtel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">朋友电话：</span>
                </x-input>
            </group>   


            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="colleaguename" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">现单位同事姓名：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="colleaguetel" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">现单位同事电话：</span>
                </x-input>
            </group>   


            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">当前网贷平台是否逾期：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="wdyq=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="wdyq=='1' || wdyq!='2'" alt="">
                            <input type="radio" value="2" v-model="wdyq">
                            <span>是</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="wdyq=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="wdyq=='2' || wdyq!='1'" alt="">
                            <input type="radio" value="1" v-model="wdyq">
                            <span>否</span>
                        </label>
                    </div>
                </cell-box>
            </group>


            <group class="listbox" gutter="0">
                <cell-box class="sqcellbox">
                    <span class="must">（必填）</span>
                    <span class="sqtitle">当前信用卡有没有逾期：</span>
                    <div class="sqcellright">
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="xykyq=='2'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="xykyq=='1' || xykyq!='2'" alt="">
                            <input type="radio" value="2" v-model="xykyq">
                            <span>是</span>
                        </label>
                        <label class="sqlabel">
                            <img :src="require('@/assets/img/Pres/sqchecked.png')" v-if="xykyq=='1'" alt="">
                            <img :src="require('@/assets/img/Pres/sqcheck.png')" v-if="xykyq=='2' || xykyq!='1'" alt="">
                            <input type="radio" value="1" v-model="xykyq">
                            <span>否</span>
                        </label>
                    </div>
                </cell-box>
            </group>


            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="yxkpt" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">已下款的有哪些平台：</span>
                </x-input>
            </group>
            <group class="listbox" gutter="0">
                <x-input class="xinput" v-model="wxkpt" text-align="right">
                    <span class="must" slot="label">（必填）</span>
                    <span class="sqtitle" slot="label">未下款的有哪些平台：</span>
                </x-input>
            </group>
            <p class="careful"><span></span> 以上信息需真实有效，因信息虚假拒绝概不负责 !</p>

            <div class="submit" @click="checksub">确认提交</div>
            <!-- <div @click="ee">jajajaj</div> -->
        </div>
    </div>
</template>
<script>
import { Group,XInput,CellBox,PopupPicker    } from 'vux'
export default {
    name:"",
    components:{
        Group,
        XInput,
        CellBox,
        PopupPicker  
    },
    data(){
        return{
            kfnum:"",//客服QQ
            username:"",//姓名
            tel:"",//电话
            sfsm:"",//手机号是否本人实名登记：2是 1否
            tellong:"",//手机用时长
            sjxh:"",//手机型号 1ios 2安卓
            sfz:"",//身份证号
            address:"",//现住地址
            zmf:"",//芝麻分
            bankcard:"",//有哪些银行信用卡
            gjj:"",//公积金 1有 2否
            sb:"",//社保 1有 2否
            xxw:[],//学信网学历
            xllist:[["本科","大专","无"]],
            workaddname:"",//工作单位全称
            marry:"",//是否结婚 1是 2否 3离异
            spousename:"",//配偶姓名
            spousetel:"",//配偶电话
            dadname:"",//父亲姓名
            dadtel:"",//父亲电话
            momname:"",//母亲姓名
            momtel:"",//母亲电话
            friendname:"",//朋友姓名
            friendtel:"",//朋友电话
            colleaguename:"",//同事姓名
            colleaguetel:"",//同事电话
            wdyq:"",//当前网贷平台是否逾期
            xykyq:"",//当前信用卡有没有逾期
            yxkpt:"",//已下款平台
            wxkpt:"",//未下款平台
        }
    },
    methods:{
        ee(){
            this.$router.push("/Loadjs");
        },
        checksub(){
            // this.action({
            //             moduleName:"Oid",
            //             goods:{
            //                 oid:"79"
            //             }
            //         })
            //         return;
            console.log(typeof(this.marry))
            let myteltype="";//手机类型
            let telzz= /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            let sfzzz= /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
            
            if(this.kfnum==""){
                this.$vux.toast.text("请输入QQ");
                return;
            }
            if(this.username==""){
                this.$vux.toast.text("请输入姓名");
                return;
            }
            if(this.tel==""){
                this.$vux.toast.text("请输入电话");
                return;
            }
            if (!telzz.test(this.tel)){
                this.$vux.toast.text("请输入有效的电话号码！")
                return;
            }
            if(this.sfsm==""){
                this.$vux.toast.text("请选择手机号是否本人实名登记");
                return;
            }
            if(this.tellong==""){
                this.$vux.toast.text("请输入手机号用时多长时间");
                return;
            }
            if(this.sjxh==""){
                this.$vux.toast.text("请选择手机型号");
                return;
            }else if(this.sjxh=="0"){
                myteltype="安卓";
            }else if(this.sjxh=="1"){
                myteltype="IOS";
            }
            if(this.sfz==""){
                this.$vux.toast.text("请输入身份证号");
                return;
            }
            if (!sfzzz.test(this.sfz)){
                this.$vux.toast.text("请输入合法的身份证！")
                return;
            }
            if(this.address==""){
                this.$vux.toast.text("请输入现住地址");
                return;
            }
            if(this.zmf==""){
                this.zmf="无";
            }
            if(this.bankcard==""){
                this.$vux.toast.text("请输入有哪些银行信用卡");
                return;
            }
            if(this.gjj==""){
                this.$vux.toast.text("请选择是否有公积金");
                return;
            }
            if(this.sb==""){
                this.$vux.toast.text("请选择是否有社保");
                return;
            }
            if(this.xxw.length==0){
                this.$vux.toast.text("请选择学信网学历");
                return;
            }
            if(this.workaddname==""){
                this.$vux.toast.text("请输入工作单位全称");
                return;
            }
            if(this.marry==""){
                this.$vux.toast.text("请选择是否结婚");
                return;
            }else if(this.marry=="1"){
                if(this.spousename==""){
                    this.$vux.toast.text("请输入配偶姓名");
                    return;
                }
                if(this.spousetel==""){
                    this.$vux.toast.text("请输入配偶电话");
                    return;
                }
                if (!telzz.test(this.spousetel)){
                    this.$vux.toast.text("请输入有效的配偶电话号码！")
                    return;
                }
            }
            if(this.dadname==""){
                    this.$vux.toast.text("请输入父亲姓名");
                    return;
            }
            if(this.dadtel==""){
                    this.$vux.toast.text("请输入父亲电话");
                    return;
            }
            if(!telzz.test(this.dadtel)){
                    this.$vux.toast.text("请输入有效的父亲电话号码！")
                    return;
            }
            if(this.momname==""){
                    this.$vux.toast.text("请输入母亲姓名");
                    return;
            }
            if(this.momtel==""){
                    this.$vux.toast.text("请输入母亲电话");
                    return;
            }
            if(!telzz.test(this.momtel)){
                    this.$vux.toast.text("请输入有效的母亲电话号码！")
                    return;
            }
            if(this.friendname==""){
                    this.$vux.toast.text("请输入朋友姓名");
                    return;
            }
            if(this.friendtel==""){
                    this.$vux.toast.text("请输入朋友电话");
                    return;
            }
            if(!telzz.test(this.friendtel)){
                    this.$vux.toast.text("请输入有效的朋友电话号码！")
                    return;
            }
            if(this.colleaguename==""){
                    this.$vux.toast.text("请输入同事姓名");
                    return;
            }
            if(this.colleaguetel==""){
                    this.$vux.toast.text("请输入同事电话");
                    return;
            }
            if(!telzz.test(this.colleaguetel)){
                    this.$vux.toast.text("请输入有效的同事电话号码！")
                    return;
            }
            if(this.wdyq==""){
                    this.$vux.toast.text("请选择当前网贷平台是否逾期");
                    return;
            }
            if(this.xykyq==""){
                    this.$vux.toast.text("请选择当前信用卡有没有逾期");
                    return;
            }
            if(this.yxkpt==""){
                    this.$vux.toast.text("请输入已下款的有哪些平台");
                    return;
            }
            if(this.wxkpt==""){
                    this.$vux.toast.text("请输入未下款的有哪些平台");
                    return;
            }
            //获取token
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
            this.action({
                moduleName:"addmember",
                url:'/member/addmember',
                method:'post',
                isFormData:true,
                data:{
                    token:this.airforce.login_post.data.token,
                    o_id:hashobj.oid,
                    name:this.username,
                    phone:this.tel,
                    phone_time:this.tellong,
                    phone_type:myteltype,
                    is_phone_true:this.sfsm,
                    id_card:this.sfz,
                    address:this.address,
                    alipay_core:this.zmf,
                    mpf:this.gjj,
                    social_security:this.sb,
                    education:this.xxw[0],
                    company:this.workaddname,
                    is_merry:this.marry,
                    is_wandai:this.wdyq,
                    is_iccard:this.xykyq,
                    father_name:this.dadname,
                    father_phone:this.dadtel,
                    mother_name:this.momname,
                    mother_phone:this.momtel,
                    friend_name:this.friendname,
                    friend_phone:this.friendtel,
                    wife_name:this.spousename,
                    wife_phone:this.spousetel,
                    true_pingtai:this.yxkpt,
                    false_pingtai:this.wxkpt,
                    contact_number:this.kfnum,
                    bank:this.bankcard,
                }
            }).then(res=>{
                if(res.code==200){
                    this.$vux.toast.text(res.message);
                    this.action({
                        moduleName:"Oid",
                        goods:{
                            oid:hashobj.oid
                        }
                    })
                    this.$router.push("/Loadjs?router=Loadjs&token="+this.airforce.login_post.data.token+"&oid="+hashobj.oid);
                }else{
                    this.$vux.toast.text(res.message);
                }
            }).catch(err=>{})
        }
    },
    mounted(){
        // let aa=1;
        // let bb=3; 
        // if(aa==1 || bb==2){
        //     console.log(true)
        // }else{
        //     console.log(false)
        // }
        this.tel=this.airforce.login_post.data.phone;
        this.action({//判断详细信息是否完善
                        moduleName:"memberdDetail",
                        url:'/member/memberdDetail',
                        method:'post',
                        isFormData:true,
                        data:{
                            token:this.airforce.login_post.data.token,
                        }
                    }).then(res=>{
                        if(res.code==200){
                            if(res.data.detail_id==null){
                                return;
                            }else{
                                this.$router.push("/Loadjs");
                            }
                        }else{
                            this.$vux.toast.text(res.message)
                        }
                    }).catch(err=>{})

    }
}
</script>
<style lang="less" scoped>
.Sqxx{
    background: #fff;
    .colorhead{
        background: #ff6633;
        color: #fff;
        font-size: 30px;
        text-align: center;
        padding: 30px 0;
        margin-bottom: 35px;
    }
    .sqcontent{
        .listbox{
            &/deep/ .weui-cells:before{
                border-top: none;
            }
            &/deep/ .must{
                color:#ff6600;
                font-size: 16px;
            }
            .sqtitle{
                font-size: 16px;
                padding-right: 5px;
                color:#ababab;
            }
            .xinput{
                padding: 10px 7px;
            }
            &/deep/ .weui-cells{
                   .vux-cell-box{
                       .weui-cell{
                           padding: 10px 7px;
                       }
                   }
               }
           .sqcellbox{
               padding: 10px 7px;
               .sqcellright{
                   position: absolute; right:5px;text-align:right;
               }
               &/deep/ .sqlabel{
                   margin-right: 5px;
                   img{
                       width: 14px;
                       height: 14px;
                       display: inline-block;
                   }
                   input{
                       display: none;
                   }
                   span{
                       color:#ababab;
                       font-size: 16px;
                   }
               }
           }
        }
        .careful{
            color: #ff6600;
            font-size: 14px;
             line-height: 17px;
             margin: 10px 0;
            span{
                width: 17px;
                height: 17px;
                display:block;
                float: left;
                margin-right: 7px;
                margin-left: 15px;
                background:  url(../../assets/img/Pres/sqicon.png) no-repeat;
                background-size: cover;
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
}
</style>

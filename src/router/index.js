import Vue from 'vue'
import Router from 'vue-router'
import utils from '@/utils/utils.js'
Vue.use(Router)
export default new Router({
    routes: [
        // { path: '/', redirect: 'Register'},
        // todo Dome
        utils.importVueInit('Dome/Dome','/Dome','Dome'),
        // todo 登陆
        // utils.importVueInit('Login/LoginApp','/Login','登录',{
        //     meta:{
        //         footerShow:false,
        //         headerShow:false,
        //         menuName:'Login'
        //     }
        // }),
        // utils.importVueInit('Login/LoginWx','/Login','登录',{
        //     meta:{
        //         footerShow:false,
        //         headerShow:false,
        //         menuName:'Login'
        //     }
        // }),
        // utils.importVueInit('Login/LoginApp','/Login','登录',{
        //     meta:{
        //         footerShow:false,
        //         headerShow:false,
        //         menuName:'LoginApp'
        //     }
        // }),
        utils.importVueInit('Phonestart/Newlogin','/Login','登录',{
            meta:{
                footerShow:false,
                right:'',
            }
        }),
        utils.importVueInit('Phonestart/Pforgetpsd','/Pforgetpsd','忘记密码',{
            meta:{
                footerShow:false,
                right:'',
            }
        }),
        utils.importVueInit({
            name: 'Layout/Layout',
            path: '/',
            component: require("@/views/Layout/Layout.vue").default,
            redirect: '/Home',
            children: [
                //todo 引导页
                utils.importVueInit('GuidePage/GuidePage','/GuidePage','引导页',{
                    meta:{
                        headerShow:false,
                        footerShow:false,
                        right:'',
                        left:'',
                        bodyColor:"#fff",
                        menuName:"GuidePage"
                    }
                }),
                // todo 注册
                utils.importVueInit('Login/Register','/Register','注册',{
                    meta:{
                        type:'3',
                        footerShow:false,
                    }
                }),
                // todo 忘记密码
                utils.importVueInit('Login/ForgetPwd','/ForgetPwd','重置密码',{
                    meta:{
                        type:'3',
                        footerShow:false,
                    }
                }),
                // todo 账号申诉
                utils.importVueInit('Login/AccountAppeal','/AccountAppeal','账号申诉',{
                    meta:{
                        type:'3',
                        footerShow:false,
                    }
                }),
                // todo 首页
                utils.importVueInit('Home/Home','/Home','首页',{
                    meta:{
                        type:'5',
                        left:'&#xe7bb;',
                        menuName:'Home'
                    }
                }),
                // todo 分享
                utils.importVueInit('Share/index','/Share','分享',{
                    meta:{
                        left:'',
                        right:'',
                        menuName:'Share'
                    }
                }),
                // todo 分享二维码图片
                utils.importVueInit('Share/qrCode','/qrCode','分享二维吗',{
                    meta:{
                        right:'保存',
                        footerShow:false,
                    }
                }),
                // todo 朋友圈
                utils.importVueInit('Share/Friendster','/Friendster','朋友圈',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 消息列表
                utils.importVueInit('Message/Message','/Message','消息列表',{
                    meta:{
                        left:'',
                        right:'',
                        menuName:'Message',
                    }
                }),
                //todo 消息详情
                utils.importVueInit('Message/MessageDetails','/MessageDetails','消息详情',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                //todo 个人中心
                utils.importVueInit('User/User','/User','个人中心',{
                    meta:{
                        left:'',
                        right:'&#xe6d6;',
                        menuName:'User',
                        footerShow:false,
                    }
                }),
                //todo 设置
                utils.importVueInit('User/Sz','/Sz','设置',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 修改密码
                utils.importVueInit('User/Xgmm','/Xgmm','修改密码',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 关于
                utils.importVueInit('User/About','/About','关于',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 我的资料
                utils.importVueInit('User/Xgzl','/Xgzl','我的资料',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 我的钱包
                utils.importVueInit('User/MyWallet','/MyWallet','我的钱包',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 提现
                utils.importVueInit('User/Withdraw','/Withdraw','提现',{
                    meta:{
                        right:'&#xe60b;',
                        footerShow:false,
                    }
                }),
                //todo 收款绑定账号
                utils.importVueInit('User/BindAccount','/BindAccount','收款绑定账号',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 代理升级
                utils.importVueInit('User/AgentUpgrade','/AgentUpgrade','订购产品',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 我的通讯录
                utils.importVueInit('User/MyContacts','/MyContacts','我的通讯录',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 提现记录
                utils.importVueInit('User/WithdrawalRecord','/WithdrawalRecord','提现记录',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 收入明细
                utils.importVueInit('User/IncomeDetailsList','/IncomeDetailsList','收入明细',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 收入明细详情
                utils.importVueInit('User/IncomeDetails','/IncomeDetails','收入明细详情',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 蚂蚁地推
                utils.importVueInit('User/AntPush','/AntPush','蚂蚁地推',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 推广详情页
                utils.importVueInit('User/AntPushDetails','/AntPushDetails','推广详情页',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 推广二维码
                utils.importVueInit('User/pushQrCode','/pushQrCode','推广二维码',{
                    meta:{
                        right:'',
                        footerShow:false,
                    }
                }),
                //todo 贷款超市
                utils.importVueInit('User/AntPushShop','/AntPushShop','贷款超市',{
                    meta:{
                        right:'',
                        footerShow:false,
                        left:'',
                        menuName:'AntPushShop'
                    }
                }),
                //todo 文档详情
                utils.importVueInit('Message/DocDetails','/DocDetails','文档详情',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                //todo 申请详情
                utils.importVueInit('ApplicationDetails/index','/ApplicationDetails','申请详情',{
                    meta:{
                        headerShow:false,
                        footerShow:false,
                        right:'',
                        left:'',
                        bodyColor:"#fff"
                    }
                }),
                utils.importVueInit('Phonestart/Pregister','/Pregister','开始注册',{
                    meta:{
                        type:'3',
                        footerShow:false,
                    }
                }),
                utils.importVueInit('Phonestart/Recharge','/Recharge','会员充值',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                utils.importVueInit('Phonestart/Sqxx','/Sqxx','申请信息',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                utils.importVueInit('Phonestart/Createorder','/Createorder','订单支付',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                
                utils.importVueInit('Phonestart/Loadjs','/Loadjs','分配技术人员',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                utils.importVueInit('User/Myorder','/Myorder','订单技术助理',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
                utils.importVueInit('User/Smsver','/Smsver','手机短信验证',{
                    meta:{
                        footerShow:false,
                        right:'',
                    }
                }),
            ]
        }),
    ]
})

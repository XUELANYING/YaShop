<template>
    <div class="setMine">
         <div class="top">
             <router-link to="/mine">
                 <i class="fa fa-angle-left font-30"></i>
             </router-link>       
            <span>设置</span>
            <b class="fa fa-ellipsis-h font-24" style="font-size:24px;" @click="handleCommon()"></b>
        </div>
        <transition name="sport">
                <div class="tologinT" v-show="flag">
                    <keep-alive>
                    <component :is="CommonList"></component>
                </keep-alive>
        </div>
        </transition>
       
        <div class="SetT">
            <div class="Setbox">
                <div class="Centop">
                         <div class="ConTLeft"></div>
                         <ul>
                             <router-link to="/tologin">
                                 <li class="li1">登录</li>
                             </router-link>
                             <router-link to="/register">
                                <li>注册</li>
                             </router-link>
                         </ul>
                </div>
                <div class="CentB">
                    <span>收货地址管理</span>
                    <i class="fa fa-angle-right grey-9 font-20"></i>
                </div>
            </div>
            <div class="SetboxCon">
                <p>账户管理</p>
                <ul>
                    <li>
                        <b>账号绑定</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                    <li>
                        <b>登录密码</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                    <li>
                        <b>支付密码</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                    <li>
                        <b>我的特权</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                </ul>
            </div>
            <div class="SetboxCon">
                <p>系统设置</p>
                <ul>
                    <li>
                        <b>人脸识别</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                </ul>
            </div>
            <div class="SetboxCon">
                <p>关于丫丫</p>
                <ul>
                    <li>
                        <b>意见反馈</b>
                        <i class="fa fa-angle-right grey-9 font-20"></i>
                    </li>
                    <li>
                        <b>全国服务热线</b>
                        <span class="fa fa-volume-control-phone">4009-955-966</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import CommonOlist from '../commonlist/index.vue'
export default {
    data() {
        return {
            flag:false,
            CommonList:"CommonOlist"
        }
    },
    components:{
        CommonOlist
    },
    methods: {
        handleCommon(){
            this.flag = !this.flag
        }
    },
}
</script>
<style>
.setMine{
    height:100%;
    overflow: auto;

}
.setMine .top {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  font-size: 0.35rem;
}
.SetT{
    padding:0.2rem 0.2rem;  
}
.SetT .Setbox{
    width:7rem;
    height:3rem;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.08);
}
.Setbox .Centop{
    display:flex;
    padding-top:0.5rem;
    padding-left:0.2rem;
}
.Setbox .Centop .ConTLeft{
    width:1.6rem;
    height:1.6rem;
    border-radius: 0.8rem;
    background:url(https://img2.yaya.cn//images/usericon.png.webp);
    background-size:100%;
}
.Setbox .Centop ul{
    display: flex;
    align-items: center;
    margin-left:0.2rem;
}
.Setbox .Centop ul li{
    font-size:0.3rem;
    padding:0 0.2rem;
    color:#333;
}
.Setbox .Centop ul .li1{
    padding:0 0.2rem;
    border-right:0.01rem solid #000;
}
.Setbox .CentB{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:0.3rem;
    padding:0 0.2rem;
}
.SetboxCon p{
    padding:0.4rem 0;
}
.SetboxCon ul{
     box-shadow: 0 1px 10px 0 rgba(0,0,0,.08);
     border-radius: 5px;
}
.SetboxCon ul li{
     display: flex;
     justify-content: space-between;
     align-items: center;
     height:0.9rem;
     border-bottom:1px solid #ccc;
     padding:0 0.2rem;
}
.SetboxCon ul li span{
    color:#4fb99f;
}
/* .sport-enter-active,.sport-leave-active{
    transition:linear 2s;
}
.sport-enter,.sport-leave-to{
    height:0;
} */
</style>


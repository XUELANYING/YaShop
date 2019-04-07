<template>
    <div class="login">
        <div class="top">
             <router-link to="/mine">
                 <i class="fa fa-angle-left font-30"></i>
             </router-link>    
            <span>用户注册</span>
            <b class="fa fa-ellipsis-h font-24" style="font-size:24px;" @click="handleCommon"></b>
        </div>
         <div class="tologinT" v-show="flag">
            <keep-alive>
            <component :is="CommonName"></component>
            </keep-alive>
        </div>
        <div class="Con">
            <div class="ConT">
                <i class="fa fa-mobile font-24 grey-6" style="font-size:0.55rem"></i>
                <input type="text" placeholder="手机号码">
            </div>
            <div class="ConT">
                <i class="fa fa-adjust font-16 grey-6"></i>
                <input type="text" placeholder="图片验证码">
                <span class="Cspn"></span>
            </div>
            <div class="ConT">
                <i class="fa fa-unlock-alt font-18 grey-6"></i>
                <input type="text" placeholder="短信验证">
                <span class="spn">发送</span>
            </div>
            <div class="ConB">
                <button>下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import Commonlist from '../commonlist/index.vue'
export default {
    data() {
        return {
            flag:false,
            CommonName:"Commonlist"
        }
    },
    methods: {
        handleCommon(){
            this.flag = !this.flag
        }
    },
    components:{
        Commonlist
    }
}
</script>
<style>
    .login .top{
        height:0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 0.2rem;
        border-bottom:0.01rem solid #eee;
        font-size:0.35rem;
    }
    .Con{
        padding:0.7rem 0.5rem;
    }
    .Con .ConT{

        border-bottom:0.01rem solid #ccc;
        display: flex;
        align-items: center;
    }
    .Con .ConT i{
        height:1rem;
        line-height: 1rem;
        font-size:0.4rem;
        color:#bbb;
        display:block;
        width:0.4rem;
        text-align: center;
    }
    .Con .ConT input{
        height:0.9rem;
        border:none;
        margin-left: 0.2rem;
    }
    .Con .ConT .spn{
        display: block;
        width:1.2rem;
        height:0.6rem;
        color:#bbb;
        border-left:1px solid #bbb;
        text-align: center;
        line-height: 0.6rem;
        font-size:0.3rem;
        margin-left:1.2rem;
    }
    .Con .ConB button{
        width:6.2rem;
        height:0.9rem;
        line-height: 0.9rem;
        text-align: center;
        color:white;
        background:#dfdfdf;
        border:none;
        margin-top:0.4rem;
    }
</style>


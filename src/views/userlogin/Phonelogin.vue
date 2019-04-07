<template>
    <div class="Ueselogin">
        <div class="Con">
            <div class="ConT">
                <i class="fa fa-user-o font-18 grey-6"></i>
                <input type="text" placeholder="手机号码">
            </div>
             <div class="ConT">
                <i class="fa fa-unlock-alt font-20 grey-6"></i>
                <input type="password" placeholder="动态密码">
                <p class="Conp">获取验证码</p>
            </div>
            <div class="ConT">
                <b>三个月内免登录</b>
            </div>
             <div class="ConB">
                <button>登录</button>
            </div>
            <div class="ConBottom">
                <span>新用户注册</span>
                <b>忘记密码</b>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
     .Con{
        padding:0.7rem 0.5rem;
    }
    .Con .ConT{
         height:1rem;
        border-bottom:0.01rem solid #ccc;
        display: flex;
        align-items: center;
        color:#6b6b6b;
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
    .Con .ConT .Conp{
        padding:0.1rem;
        border:0.01rem solid #78b;
        border-radius: 0.08rem;
        color:#78b;
        margin-left:1rem;
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
        border-radius: 0.1rem;
    }
    .ConBottom{
          width:6.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:0.5rem;
    }
</style>


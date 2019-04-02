<template>
    <div class="tologin">
         <div class="top">
            <i class="fa fa-angle-left font-30"></i>
            <span>登录</span>
            <b class="fa fa-ellipsis-h font-24" style="font-size:24px;"></b>
        </div>
        <div class="Con">
            <ul>
                <li class="uli1" @click="handleLoginli(1)" :class="activeIndedx==1?'active':''">账号密码登录</li>
                <li @click="handleLoginli(2)" :class="activeIndedx==2?'active':''">短信验证码登录</li>
            </ul>
        </div>
        <keep-alive>
            <component :is="loginName"></component>
        </keep-alive>
    </div>
</template>
<script>
import Userlogin from './userlogin.vue'
import Phonelogin from './Phonelogin.vue'
export default {
  name: "tologin",
  data() {
    return {
        activeIndedx:1,
        loginName:"Userlogin"
    };
  },
  components:{
      Userlogin,
      Phonelogin
  },
  methods: {
        handleLoginli(n){ 
             this.activeIndedx = n
                switch(n){
                case 1 : this.loginName="Userlogin";
                break;
                case 2 : this.loginName="Phonelogin"
            }
        }
    }
}
</script>
<style>
.tologin .top {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  border-bottom: 0.01rem solid #eee;
  font-size: 0.35rem;
}
.tologin .Con ul {
  display: flex;
  margin-left: 0.7rem;
  font-size: 0.25rem;
}
.tologin .Con ul li {
  padding: 0 0.5rem;
}
.tologin .Con .uli1 {
  border-right: 1px solid #ccc;
}
.tologin .Con ul .active{
  color:#4fb99f;
}
</style>


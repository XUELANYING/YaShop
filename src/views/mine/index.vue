<template>
    <div class="foot">
        <div class="top">
            <i></i>
            <div class="topR">
                <router-link to="/setMine">
                    <span>设置</span>
                </router-link>
                <b class="fa fa-cog font-18"></b>
            </div>
        </div>
        <div class="footBtm">
         <div class="Ftop">
             <div class="FtopT"></div>
             <div class="Con">
                 <div class="ConCent">
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
                     <div class="CentBottom">
                         <p v-for="(sum,index) in MineArr.property">
                             <span>{{sum.number}}</span>
                             <b>{{sum.title}}</b>
                         </p>
                     </div>
                 </div>
             </div>
        </div>
        <div class="Bottom">
            <div class="btn" v-for="(item,index) in MineArr.menu" :key="index">
                <div class="btnR">
                    <span>{{item.title}}</span>   
                    <p>
                        <i>{{item.moreText}}</i>
                        <b></b>
                    </p>                
                </div>
                <div class="btnB">
                    <ul>
                        <li v-for="(last,nums) in item.item" :key="nums">
                            <i :style="{backgroundImage:`url(`+last.imagePath+`)`}"></i>
                            <span>{{last.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    name:"foot",
    data() {
        return {

        }               
    },  
    created() {
        this.Minelistme()
    },
    computed: {
        ...Vuex.mapState({
            MineArr:state=>state.Minelist.MineAry
        })
    },
    methods: {
        ...Vuex.mapActions({
            Minelistme:"Minelist/Minelistme"
        })
    },
}
</script>
<style>
.foot{
    overflow: auto;
    display: flex;
    flex-direction: column;
    height:100%;
}
.foot .top{
    width:100%;
    height:1rem;
    line-height: 1rem;
    background:url(https://img2.yaya.cn/newstatic//917/71061e936d4dd8.png);
    background-size:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:0.1rem;
    color:white;  
    font-size:0.4rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 1;
}
.top i{
    font-size:0.6rem;
    margin-left:0.3rem;
}
.top .topR{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:0.3rem;
}
.top .topR span{
    margin-right:0.1rem;
    font-size:0.3rem;
    color:#fff;
}
.foot .footBtm{
    display: flex;
    flex-direction: column;
    padding-bottom:0.88rem
}
.foot .footBtm .Bottom{
    flex-shrink: 0;
}
.foot .Ftop .FtopT{
    height:2rem;
    background:url(https://img2.yaya.cn/newstatic//917/71061e936d4dd8.png);
    background-size:100%;
}
.Ftop .Con{
    height:3.2rem;
    position: relative;
}
.Ftop .Con .ConCent{
    width:90%;
    height:4rem;
    position:absolute;
    top:-0.7rem;
    left:0.35rem;
    background:white;
    border-radius: 0.1rem;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.08);
}
.Con .Centop{
    display:flex;
    padding-top:0.5rem;
    padding-left:0.2rem;
}
.Con .Centop .ConTLeft{
    width:1.6rem;
    height:1.6rem;
    border-radius: 0.8rem;
    background:url(https://img2.yaya.cn//images/usericon.png.webp);
    background-size:100%;
}
.Con .Centop ul{
    display: flex;
    align-items: center;
    margin-left:0.2rem;
}
.Con .Centop ul li{
    font-size:0.3rem;
    padding:0 0.2rem;
    color:#000;
}
.Con .Centop ul .li1{
    padding:0 0.2rem;
    border-right:0.01rem solid #000;
}
.Con .CentBottom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:0.6rem;
}
.Con .CentBottom p{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Con .CentBottom b{
  margin-top:0.2rem;
}
.Bottom .btn .btnR{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Bottom .btn .btnR{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.2rem;
    padding-top:0.4rem
}
.Bottom .btn .btnR p{
   font-size:0.3rem;
    color:#ccc;
}
.Bottom .btn .btnR span{
   font-size:0.4rem;
}
.Bottom .btn .btnR b{
   font-size:0.2rem;
   margin-left:0.1rem
}
.Bottom .btn .btnB{
    padding:0 0.3rem;
}
.Bottom .btn .btnB ul{
    display: flex;
    justify-content: space-around;
    border-bottom: 0.01rem solid #ddd;
    padding: 0.3rem 0;
}
.Bottom .btn .btnB ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Bottom .btn .btnB ul li i{
   display: block;
   width:0.8rem;
   height:0.8rem;
   background-size:100%;
   margin-bottom: 0.1rem;
}
</style>


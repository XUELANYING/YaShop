<template>
    <div class="top-wrap">

            <div class="top">
                <div class="left-side">
                    <i class="fa fa-angle-left font-30" @click="banck()"></i>
                </div>
                <div>
                    <div class="middle">
                        <i class="fa fa-map-marker font-18 main-color"></i>
                        <span>丰台区</span>
                    </div>
                </div>
                <div class="right-side" @click="hideMenu()">
                    <span>
                        切换城市
                        <i class="fa fa-angle-right font-16"></i>
                    </span>
                </div>

                <div class="mask" v-show="isShows" @click="hideMenu()"></div>


            </div>
        <Map/>
        <div class="storesTabs">
            <div>
                <span @click="handleMap(1)" :class="nty == 1? 'active':''">全部</span>
            </div>
            <div>
                <span @click="handleMap(2)"  :class="nty == 2? 'active':''">附近门店</span>
            </div>
        </div>
        <transition name="slide-fade">
            <div class="city-list" v-show="isShow">

                <div class="city-tit">
                    <h3>切换城市</h3>
                    <span @click="hideMenu()">×</span>
                </div>
                <div class="city">
                    <div class="hot-city">
                        <h4 class="hot-city-title">热门城市</h4>
                        <ul class="hot-city-list">
                            <li v-for="item in getHotCityList">{{item.name}}</li>
                        </ul>
                    </div>
                     <div class="selectCity">
                         <h4 class="hot-city-title margin-top-03">选择城市</h4>

                            <ul class="city-tabs">
                                <li :class="n==1? 'city-tab-item cur':'city-tab-item'" @click="handleTo(1)">{{this.$store.state.stores.province}}</li>
                                <li :class="n==2? 'city-tab-item cur':'city-tab-item'" @click="handleTo(2)">{{this.$store.state.stores.municipality}}</li>
                                <li :class="n==3? 'city-tab-item cur':'city-tab-item'" @click="handleTo(3)">{{this.$store.state.stores.area}}</li>
                            </ul>
                             <div class="city-box-wrap">
                                 <component :is="curView"></component>

                             </div>
                     </div>
                </div>
            </div>

        </transition>

    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import Province from './cityTab/province'
    import Municipality from './cityTab/municipality'
    import Area from './cityTab/area'
    import Map from './map'

    export default {
        name: "stores",
        created(){
            this.getHotCity()

            this.Observer.$on("handleTo",(data)=>{
                switch (data) {
                    case 1: {
                        this.$store.state.stores.n = 1
                        this.curView = "Province";
                        break;
                    }
                    case 2: {
                        this.$store.state.stores.n = 2
                        this.curView = "Municipality";
                        break;
                    }
                    case 3: {
                        this.$store.state.stores.n = 3
                        this.curView = 'Area';
                        break;
                    }
                }
            })
        },
        data(){
            return{
                isShow:false,
                isShows:false,
                curView:"Province",
                nty:1


            }
        },
        methods:{
            hideMenu () {
                if (this.isShow) {
                    this.isShow = false;
                    this.isShows = false
                } else {
                    this.isShow = true;
                    this.isShows = true
                }
            },
            handleMap(n){
                this.nty = n
            },
            banck(){
                this.$router.back()
            },
            ...mapActions({
                getHotCity:"stores/getHotCity",
            }),
            handleTo(n){
                this.Observer.$emit("handleTo",n)
            }
        },
        computed:{
            ...mapState({
                getHotCityList:state=>state.stores.hotCities,
                n:state=>state.stores.n
             })
        },
        components:{
            Province,
            Municipality,
            Area,
            Map
        }

    }
</script>

<style scoped>

    .top,.storesTabs{
        height: 0.88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: fixed;
        background: #fff;
    }
    .top{
        top: 0;
       left:0;
        z-index: 5;
    }
    .storesTabs{
        top: 0.88rem;
        left: 0;
    }
    .top>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top .left-side{
        height: 0.88rem;
        width: 0.88rem;
        font-size: 30px;
    }
    .top .middle{
        font-size: 18px;
        font-weight: 500;
        height: 0.88rem;
        line-height: 0.88rem;
    }
    .top .middle i{
        color: #4fb99f;
        margin-right: 0.1rem;
    }
    .top .right-side{
       /* width: 1.225rem;*/
        height: 0.88rem;
        font-size: 13px;
        color: #9c9c9c;
        padding-right: 0.2rem;
    }
    .storesTabs{
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
    }
    .storesTabs>div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
    .storesTabs>div>.active{
        color: #f21c1c;
        border-bottom: 2px solid #f21c1c;
        height: 0.86rem;
        line-height: 0.9rem;
        font-size: 15px;
        font-weight: 500;
    }

    /*动态*/

    .city-list{
        width: 7.5rem;
        height:69%;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 11;
        display: flex;
        flex-direction: column;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all  .3s cubic-bezier(.645,.045,.355,1);
    }
    .slide-fade-leave-to,.slide-fade-enter{
        transform: translateY(460px);
        opacity: 0;
    }
    .mask {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        z-index: 10;
        background: rgba(0,0,0,0.7);
    }

    /*city-list*/
.city-tit>h3{
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    position: relative;
    text-align: center;
}
    .city-tit span{
        height: 0.9rem;
        width: 0.9rem;
        position: absolute;
        top: 0;
        right: 0;
        color: #9c9c9c;
        font-size: 30px;
        line-height: 0.8rem;
        text-align: center;
    }
    .hot-city-title{
        height: 0.48rem;
        line-height: 0.48rem;
        padding: 0 0.2rem;
        font-size: 13px;
        color: #999;
    }
    .hot-city-list{

        height: 1.52rem;
        display: flex;
        padding: 0 0.2rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .margin-top-03{
        margin-top: 0.3rem;
    }
    .hot-city-list li{
        width:2.1rem;
        height: 0.56rem;
        line-height: 0.56rem;
        text-align: center;
        color: #333;
        border:1px solid #dfdfdf;
        border-radius: 0.6rem;
        margin-top: 0.16rem;
        font-size: 13px;
    }
    .city-tabs{
        height: 0.84rem;
        line-height: 0.84rem;
        display: flex;
        border-bottom: 1px solid #dfdfdf;
    }
   .selectCity .city-tabs .cur{
        color: #4fb99f;
        border-bottom: 2px solid #4fb99f;
    }
    .city-tabs .city-tab-item{
        margin: 0 0.2rem;
        font-weight: 700;
        color: #333;
        font-size: 14px;
    }
    .city-box-wrap{
        width: 100%;
        height: 5.6rem;
        display: flex;
        flex-direction: column;

    }

</style>
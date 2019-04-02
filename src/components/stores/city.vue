<template>
    <div>
        <div class="city-tit">
            <h3>切换城市</h3>
            <span>×</span>
        </div>
        <div class="city">
            <div class="hot-city">
                <h4 class="hot-city-title">热门城市</h4>
                <ul class="hot-city-list">
                    <li v-for="item in getHotCity">{{item}}</li>
                </ul>
            </div>
            <!-- <div class="city-list">
                 <h4>选择城市</h4>
             </div>-->
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "city",
        computed:{
            ...mapState({
                getHotCity:state=>state.getHotCity.hotCities
            })
        },
        watch:{

        }
    }
</script>

<style scoped>
    .city-tit>h3{
        font-size: 16px;
        font-weight: 700;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        position: relative;
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .hot-city-list li{
        width:2.2rem;
        height: 0.56rem;
        line-height: 0.56rem;
        text-align: center;
        color: #333;
        border:1px solid #dfdfdf;
        border-radius: 0.6rem;
        margin-top: 0.16rem;
        font-size: 13px;
    }
</style>
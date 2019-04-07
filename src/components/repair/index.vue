<template>
    <BScroll ref="repair">
    <div class="mainC">
        <!--轮播图-->
        <div class="nav">
            <Banner ref="repairBanner">
                <div class="swiper-slide" v-for="item in banner">
                    <img :src="item.imagePath" alt="">
                </div>
            </Banner>
        </div>

        <!--图片banner-->
        <div class="floor-img">
            <a href="#" v-for="item in logo">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!--process-->
        <div class="process">
            <img v-for="item in process" :src="item.imagePath" alt="">
        </div>

        <!--recycle-pic-->
        <div class="recycle-pic">
            <div v-for="item in repairStyle">
                <img :src="item.imagePath" alt="">
            </div>
        </div>
        <div class="re-more">
            <img src="https://img2.yaya.cn/newstatic/767/34063e94ee081c.png.webp" alt="">
        </div>

        <!--丫丫推荐-->
        <div>
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/918/70fa7fb5a3e4ad.png.webp" alt="">
            </div>
            <div class="recommend">
                <!---->
                <div v-for="item in yayarecom">
                    <img :src="item.imagePath" alt="">
                </div>
            </div>
        </div>


        <!--预约维修-->
        <div class="order">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/765/340654a87011c6.png.webp" alt="">
            </div>
            <div class="order-img">
                <div v-for="item in threetemp">
                    <img :src="item.imagePath" alt="">
                </div>
            </div>
        </div>


        <!--我们的优势-->
        <div class="recycle-server">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/766/3406646dfcebca.png.webp" alt="">
            </div>
            <div class="recycle-server-img">
                <div v-for="item in goodgood">
                    <img :src="item.imagePath" alt="">
                </div>
            </div>

        </div>










    </div>
    </BScroll>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    export default {
        name: "index",
        created(){
            this.getHotBrands("1039463340404862983",1,0)
        },
        methods:{
            ...mapActions({
                getHotBrands:"repair/getHotBrands"
            })
        },
        computed:{
            ...mapState({
                banner:state=>state.repair.banner,
                logo:state=>state.repair.logo,
                process:state=>state.repair.process,
                repairStyle:state=>state.repair.repairStyle,
                yayarecom:state=>state.repair.yayarecom,
                threetemp:state=>state.repair.threetemp,
                goodgood:state=>state.repair.goodgood
            })
        },
        mounted(){
            this.$refs.repairBanner;
            this.$refs.repair;
        }
    }
</script>

<style scoped>
    .mainC{
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
        padding-bottom: 2.88rem;
    }
    /**/
    .nav{
        height:3.75rem;
        background: linear-gradient(#52c5a9,#52c5a9 70%,#fff 0,#fff);
        display: flex;
        justify-content: center;
        padding: 0.15rem;
    }
    .nav-box,.nav-box li{
        height: 3.45rem;
        width:6.9rem;
        border-radius: 0.1rem;
        overflow: hidden;
    }
    .nav-box ul li img{
        width:100%;
        height: 100%;
    }
    .floor-img{
        height: 1.5rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .floor-img a{
        display: block;
        height: 1.5rem;
        width: 1.5rem;
    }
    .floor-img a img{
        width: 100%;
        height: 100%;
    }
    .floor-tops{
        height: 0.68rem;
        margin: 0.3rem;
        display: flex;
        background: #fde9e9;
        border-radius: 1rem;
        align-items: center;
        overflow: hidden;
    }
    .floor-tops>img{
        margin: 0 0.24rem;
        width: 1.36rem;
        height: 0.31rem;
    }
    .floor-tops-box>a{
        display: block;
        height: 0.68rem;
        width: 5.06rem;
        display: flex;
        align-items: center;
        color: #333;
    }
    .floor-tops-box>a>span{
        height: 0.336rem;
        width: 3.7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    /*floor-top-img*/
    .floor-top-img{
        height: 0.88rem;
        width: 100%;
        overflow: hidden;
    }
    .floor-top-img img{
        width: 100%;
        height: 100%;
    }

    /*process*/
    .process{
        height: 0.88rem;
        width: 100%;
        display: flex;
    }
    .process>img{
        height:100%;
        width: 100%;
    }

    /*recycle-pic*/
    .recycle-pic{
        width: 100%;
        display: flex;
        background: #fff;
        flex-wrap: wrap;
    }
    .recycle-pic>div{
        width: 50%;
        height: 2.5rem;
        overflow: hidden;
    }
    .recycle-pic>div>img{
        height: 100%;
        width: 100%;
    }
    .re-more{
        height: 0.88rem;
        width: 100%;
    }
    .re-more>img{
        height: 100%;
        width: 100%;
    }






    /**/
    .recycle-server-img{
        height: 2.5rem;
        width: 100%;
        display: flex;
    }
    .recycle-server-img>div{
        width: 50%;
        height: 100%;
    }
    .recycle-server-img>div>img{
        width: 100%;
        height: 100%;
    }
    .access-img>div{
        height: 2.03rem;
        width: 100%;
    }
    .access-img>div>img{
        width: 100%;
        height: 100%;
    }

    /*推荐*/
    .recommend{
        height: 2.5rem;
        width: 100%;
        display: flex;
    }
    .recommend>div{
        width: 25%;
        height: 100%;
    }
    .recommend>div>img{
        width: 100%;
        height: 100%;
    }

    /*预约*/
    .order-img{
        height: 1.25rem;
        width: 100%;
        display: flex;
    }
    .order-img>div{
        width: 50%;
        height: 100%;
    }
    .order-img>div>img{
        width: 100%;
        height: 100%;
    }
</style>
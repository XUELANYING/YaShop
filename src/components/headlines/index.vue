<template>
    <BScroll ref="headline">
    <div class="mainC">
        <!---->

            <Banner>
                <div class="swiper-slide item-tit" v-for="item in banner" ref="topsbanner">
                    <img :src="item.imagePath" alt="">
                    <div>

                        <p class="tit-tag">{{item.title}}</p>
                        <p class="olist">
                            <span class="active"></span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </Banner>

            <div v-for="item in headlineList" :class="item.big == 0? 'news-item':'item-tit'" >
                <div class="news-img">
                    <img :src="item.imagePath" alt="">
                </div>
                <div :class="item.big == 0? 'news-con':''">
                    <p :class="item.big == 0 ? 'news-con-tit':'tit-tag'">{{item.title}}</p>
                    <p :class="item.big == 0 ? 'news-con-bottom':'olist'">
                        <span v-if="!item.big">{{item.author}}</span>
                        <span v-if="!item.big">{{item.pageView}}</span>
                    </p>
                </div>
            </div>


            <!--<div class="item-tit">
                <div class="news-img">
                    <img src="https://img2.yaya.cn//pic/edt/news/20190128/20190128141416_4786.jpg" alt="">
                </div>
            <div>
                <p class="tit-tag">3.8女王节 给本宫打折 iPhone XR女王价￥4970</p>
                <p class="olist">
                    <span class="active"></span>
                    <span></span>
                </p>
            </div>-->

        </div>
    </BScroll>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "headlines",
        created(){
            this.getHotBrands("1039463340404862981",1,0)
        },
        computed:{
            ...mapState({
                banner:state=>state.headline.banner,
                headlineList:state=>state.headline.headlineList
            })
        },
        methods:{
            ...mapActions({
                getHotBrands:"headline/getHotBrands",
            })
        },
        mounted(){
          this.$refs.topsbanner;
          this.$refs.headline;
        },
        watch:{

        }
    }
</script>

<style scoped lang="scss">
    .mainC{
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
        padding-bottom: 2.88rem;
    }
    /*内容*/
    .item-tit,.item-tit .news-img{
        height: 3.75rem;
        width: 100%;
        position: relative;
    }
    .news-img img{
        height: 100%;
        width: 100%;
    }
    .item-tit>div{
        height: 0.8rem;
        width: 7.1rem;
        background: rgba(0,0,0,.6);
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        font-size: 14px;
        line-height: 0.8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .item-tit>div>.tit-tag{
        width:100%;
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .item-tit>div>.olist>span{
        display: flex;
        height: 0.16rem;
        width: 0.16rem;
        border-radius: 50%;
        background: hsla(0,0%,100%,.8);
        margin: 0 0.04rem;
    }
    .item-tit>div>p>.active{
        background: #ff6700;
    }
    .item-tit>div>.olist{
        display: flex;
    }

    /*新闻*/
    .news-item{
        width: 7.1rem;
        height: 1.2rem;
        padding: 0.2rem;
        display: flex;
    }
    .news-item .news-img{
        height: 1.2rem;
        width: 1.6rem;
    }
    .news-item .news-img img{
        width: 100%;
        height: 100%;
    }
    .news-con{
        width: 5.3rem;
        height: 1.2rem;
        margin-left: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
   .news-con-bottom{
        display: flex;
        justify-content: space-between;
        color: #9c9c9c;
        width: 100%;
    }
    .news-con .news-con-tit{
        font-size: 15px;
        color: #333;
    }
</style>
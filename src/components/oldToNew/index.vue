<template>
    <div class="mainC">
        <!--轮播图-->
        <div class="nav">
            <div class="nav-box">
                <ul>
                    <li>
                        <img src="https://img2.yaya.cn/newstatic/1383/c9e6d653731127.jpg.webp" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!--图片banner-->
        <div class="floor-img">
            <a href="#" v-for="item in icon">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!--process-->
        <div class="process">
            <div v-for="item in process">
                <img :src="item.imagePath" alt="">
            </div>
        </div>

        <!--recycle-pic-->
        <div class="recycle-pic">
            <div v-for="item in recycle">
                <img :src="item.imagePath" alt="">
            </div>
        </div>

        <!--热门回收品牌-->
        <div class="recycle-brands">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/767/2b5bd950e7a2c9.png.webp" alt="">
            </div>
            <div class="brands">
                <div class="brands-img" v-for="item in hotBrands">
                    <img :src="item.imagePath" alt="">
                </div>

            </div>
        </div>

        <!--热门回收机型-->
        <div class="floor-goods">
            <!--楼层图-->
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/766/2b5c122e5bb22f.png.webp" alt="">
            </div>

            <div class="floor-goods-box">
                <div class="item-goods" v-for="(item,index) in hotmoblie">
                    <div class="goods-img">
                        <img :src="item.imagePath" alt="">
                    </div>

                    <div class="goods-title">
                        <p class="goods-name">{{item.title}}</p>
                        <p class="good-tag">{{item.hint}}</p>
                        <p class="goods-price">{{item.price}}</p>
                    </div>
                </div>

                <div class="resouce-more">
                    <img src="https://img2.yaya.cn/newstatic/767/39629e8245cee8.png.webp" alt="">
                </div>
            </div>

        </div>

        <!--回收服务-->
        <div class="recycle-server">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/768/2b5c1bc2b2d9ff.png.webp" alt="">
            </div>
            <div class="recycle-server-img">
                <div v-for="item in server">
                    <img :src="item.imagePath" alt="">
                </div>
            </div>

        </div>

        <!--access-->
        <div>
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/765/2b5c32e1f51851.png.webp" alt="">
            </div>
            <div class="access-img">
                <div v-for="item in access">
                    <img :src="item.imagePath" alt="">
                </div>

            </div>
        </div>







    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        created(){
            this.getHotBrands();
        },
        name: "oldtonew",
        computed:{
            ...mapState({
                getHappyShare:state=>state.oldtonew.getHappyShare,
                process:state=>state.oldtonew.process,
                icon:state=>state.oldtonew.icon,
                recycle:state=>state.oldtonew.recycle,
                hotBrands:state=>state.oldtonew.hotBrands,
                hotmoblie:state=>state.oldtonew.hotmoblie,
                server:state=>state.oldtonew.server,
                access:state=>state.oldtonew.access
            })
        },
        methods:{
            ...mapActions({
                getHotBrands:"oldtonew/getHotBrands"
            })
        }
    }
</script>

<style scoped>
    .mainC{
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
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
        height: 1.25rem;
        width: 100%;
        display: flex;
    }
    .process>div{
        width: 50%;
        height: 100%;
        overflow: hidden;
    }
    .process>div>img{
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

    /*floor-goods*/
    .floor-goods{
        display: flex;
        flex-direction: column;
        padding:0 0.28rem;
    }
    .floor-goods-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .item-goods{
        height:4.68rem;
        width: 3.37rem;
        margin-top: 0.1rem;
        padding-bottom: 0.2rem;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
        border-radius: 0.06rem;
        flex-shrink: 0;
    }
    .item-goods .goods-img{
        height: 3rem;
        width: 3rem;
        overflow: hidden;
        margin: 0.2rem;
    }
    .item-goods .goods-img img{
        height: 100%;
        width: 100%;
    }
    .item-goods .good-tag{
        margin-top:0.2rem;
        font-size: 12px;
        color: #9c9c9c;
    }
    .item-goods .goods-title{
        margin: 0.1rem 0.3rem;
        width: 2.8rem;
        height: 100%;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-goods .goods-price{
        color: #e73828;
        font-size: 15px;
    }

    /*brands*/
    .brands{
        display: flex;
        flex-wrap: wrap;
    }
    .brands .brands-img{
        height: 1.5rem;
        width: 1.5rem;
        overflow: hidden;
    }
    .brands .brands-img img{
        width: 100%;
        height: 100%;
    }
    .resouce-more{
        width: 100%;
        height: 0.88rem;
        overflow: hidden;
    }
    .resouce-more img{
        width: 100%;
        height: 100%;
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
</style>
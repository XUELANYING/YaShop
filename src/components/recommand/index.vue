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

            <!--floor-tops-->
            <div class="floor-tops">
                <img src="//img2.yaya.cn/m/static/assets/news-yaya.99199d98b7d678f8666ff3794f55e550.png" alt="">
                <div class="floor-tops-box">
                    <a href="#">
                        <span>【喜闹元宵】一元复始 万象更新 新年购机最高立减1500元</span>
                        <div>
                            <img src="" alt="">
                        </div>
                    </a>
                </div>
            </div>

            <!--floor-pic-->
            <div class="floor-pic">
                <a href="#" class="pic-l">
                    <img src="https://img2.yaya.cn/newstatic/1378/c9f7c38efa4d1d.png.webp" alt="">
                </a>
                <a href="#" class="pic-m">
                    <img src="https://img2.yaya.cn/newstatic/1381/c9fa1aba5bf657.jpg.webp" alt="">
                </a>
                <a href="#" class="pic-r">
                    <img src="https://img2.yaya.cn/newstatic/1378/c9fa249de855eb.jpg.webp" alt="">
                </a>
            </div>

            <div class="floor-pic-m">
                <a href="#" class="pic-pm">
                    <img src="https://img2.yaya.cn/newstatic/1377/c9f8437f4fa555.png.webp" alt="">
                </a>
                <a href="#" class="pic-pm">
                    <img src="https://img2.yaya.cn/newstatic/1377/c41009fb39862e.png.webp" alt="">
                </a>
            </div>

            <div class="floor-pic">
                <a href="#" class="pic-l">
                    <img src="https://img2.yaya.cn/newstatic/1377/c4103cfb9ca62a.png.webp" alt="">
                </a>
                <a href="#" class="pic-l">
                    <img src="https://img2.yaya.cn/newstatic/1381/c410426eb17cc1.png.webp" alt="">
                </a>
            </div>

            <!--实惠精选-->
            <div class="floor-shihui">
                <!--楼层图-->
                <div class="floor-top-img">
                    <img src="https://img2.yaya.cn/newstatic/917/70e2315b0fbb04.jpg.webp" alt="">
                </div>
                <div class="floor-con">
                    <!--item-->
                    <div class="floor-item" v-for="(item,index) in recommandList">
                        <div class="floor-item-img">
                            <img :src="item.imagePath" alt="">
                        </div>
                        <div class="floor-item-con">
                            <p class="item-name">{{item.title}}</p>
                            <p class="item-detail">{{item.sellingPoint}}</p>
                            <p class="item-price">{{item.price}}</p>
                        </div>
                    </div>

                    <div class="floor-item item-more">
                        查看全部
                    </div>
                </div>
            </div>

            <!--手机精品-->
            <div class="floor-jingpin">
                <!--楼层图-->
                <div class="floor-top-img">
                    <img src="https://img2.yaya.cn/newstatic/914/70e241686b23b3.jpg.webp" alt="">
                </div>
                <div>
                    <div class="floor-pic">
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9f7c38efa4d1d.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-m">
                            <img src="https://img2.yaya.cn/newstatic/1381/c9fa1aba5bf657.jpg.webp" alt="">
                        </a>
                        <a href="#" class="pic-r">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9fa249de855eb.jpg.webp" alt="">
                        </a>
                    </div>

                    <div class="floor-pic">
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1377/c4103cfb9ca62a.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1381/c410426eb17cc1.png.webp" alt="">
                        </a>
                    </div>

                    <div class="floor-pic-m">
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c9f8437f4fa555.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c41009fb39862e.png.webp" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <!--乐享生活-->
            <div class="floor-jingpin">
                <!--楼层图-->
                <div class="floor-top-img">
                    <img src="https://img2.yaya.cn/newstatic/913/70e24603cbc451.jpg.webp" alt="">
                </div>
                <div>
                    <div class="floor-pic">
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9f7c38efa4d1d.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-m">
                            <img src="https://img2.yaya.cn/newstatic/1381/c9fa1aba5bf657.jpg.webp" alt="">
                        </a>
                        <a href="#" class="pic-r">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9fa249de855eb.jpg.webp" alt="">
                        </a>
                    </div>

                    <div class="floor-pic">
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1377/c4103cfb9ca62a.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1381/c410426eb17cc1.png.webp" alt="">
                        </a>
                    </div>

                    <div class="floor-pic-m">
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c9f8437f4fa555.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c41009fb39862e.png.webp" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <!--趣购频道-->
            <div class="floor-jingpin">
                <!--楼层图-->
                <div class="floor-top-img">
                    <img src="https://img2.yaya.cn/newstatic/913/70e24d1eed90f9.jpg.webp" alt="">
                </div>
                <div>
                    <div class="floor-pic">
                        <a href="#" class="pic-l">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9f7c38efa4d1d.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-m">
                            <img src="https://img2.yaya.cn/newstatic/1381/c9fa1aba5bf657.jpg.webp" alt="">
                        </a>
                        <a href="#" class="pic-r">
                            <img src="https://img2.yaya.cn/newstatic/1378/c9fa249de855eb.jpg.webp" alt="">
                        </a>
                    </div>

                    <div class="floor-pic-m">
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c9f8437f4fa555.png.webp" alt="">
                        </a>
                        <a href="#" class="pic-pm">
                            <img src="https://img2.yaya.cn/newstatic/1377/c41009fb39862e.png.webp" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <!--发现好货-->
            <div class="floor-goods">
                <!--楼层图-->
                <div class="floor-top-img">
                    <img src="https://img2.yaya.cn/newstatic/912/70e2536aef6973.jpg.webp" alt="">
                </div>
                <div class="floor-goods-box">


                    <div class="item-goods" v-for="(item,index) in pageList">
                        <div class="goods-img">
                            <img :src="item.imagePath" alt="">
                        </div>
                        <div class="goods-tag">
                            <span>{{item.sellingPoint}}</span>
                        </div>
                        <div class="goods-title">
                            <p class="goods-name">{{item.title}}</p>
                            <p class="goods-price">{{item.price}}</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "recommand",
        computed:{
            ...mapState({
                recommandList:state=>state.recommand.substantialList,
                pageList:state=>state.recommand.pageList,
                icon:state=>state.recommand.icon
            })
        }
    }
</script>

<style scoped>
    .mainC{
        display: flex;
        width: 100%;
        flex-direction: column;
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


    .floor-pic{
        height: 2.5rem;
        width: 100%;
        display: flex;
    }

    .floor-pic .pic-l{
        width: 3.75rem;
        height: 100%;
    }
    .floor-pic .pic-m{
        width: 2.5rem;
        height: 100%;
    }
    .floor-pic .pic-r{
        width:2.5rem;
        height: 100%;
    }
    .floor-pic img, .floor-pic-m .pic-pm img{
        height: 100%;
        width: 100%;
    }

    .floor-pic-m{
        height: 1.25rem;
        width: 100%;
        display: flex;
    }
    .floor-pic-m .pic-pm{
        width: 3.75rem;
        height: 100%;
    }
    /*shihui*/
    .floor-shihui{
        height: 5.66rem;
        width: 100%;
    }
    .floor-top-img{
        height: 0.88rem;
        width: 100%;
        overflow: hidden;
    }
    .floor-top-img img{
        width: 100%;
        height: 100%;
    }
    .floor-con{
        display: flex;
        padding: 0.3rem;
        flex: 1;
        overflow: auto;
    }
    /**/
    .floor-con .floor-item{
        height: 3.86rem;
        width: 2.8rem;
        padding: 0.2rem;
        box-shadow: 0 0 10px #e1e1e1;
        border-radius: 0.06rem;
        margin-right: 0.2rem;
        overflow: hidden;
        flex-shrink: 0;
    }
    .floor-item-img{
        height: 2.4rem;
        width: 2.4rem;
        overflow: hidden;
    }
    .floor-item .floor-item-img img{
        height: 100%;
        width: 100%;
    }
    .floor-item p{
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 0.06rem;
    }
    .floor-item .item-detail{
        font-size: 12px;
        color: #9c9c9c;
    }
    .floor-item .item-price{
        font-size: 14px;
        color: #e73828;
    }
    .item-more{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        color: #9c9c9c;
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
    .item-goods .goods-tag{
        padding: 0.1rem 0.3rem ;
        font-size: 13px;
        color: #87acd8;
        background:#ebf6fe;
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
</style>
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
            <a href="#">
                <img src="https://img2.yaya.cn/newstatic/1378/c309507a498708.png.webp" alt="">
            </a>
            <a href="#">
                <img src="https://img2.yaya.cn/newstatic/1378/c309507a498708.png.webp" alt="">
            </a>
            <a href="#">
                <img src="https://img2.yaya.cn/newstatic/1378/c309507a498708.png.webp" alt="">
            </a>
            <a href="#">
                <img src="https://img2.yaya.cn/newstatic/1378/c309507a498708.png.webp" alt="">
            </a>
            <a href="#">
                <img src="https://img2.yaya.cn/newstatic/1378/c309507a498708.png.webp" alt="">
            </a>

        </div>

        <!--process-->
        <div class="process">
            <img src="https://img2.yaya.cn/newstatic/768/36b489156de0f9.png.webp" alt="">
        </div>

        <!--recycle-pic-->
        <div class="recycle-pic">
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
            </div>
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
            </div>
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
            </div>
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
            </div>
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
            </div>
            <div>
                <img src="https://img2.yaya.cn/newstatic/918/70c02a76eccedf.png.webp" alt="">
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
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/364853a67829af.jpg.webp" alt="">
                </div>
                <!---->
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/364853a67829af.jpg.webp" alt="">
                </div>
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/364853a67829af.jpg.webp" alt="">
                </div>
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/364853a67829af.jpg.webp" alt="">
                </div>
            </div>
        </div>


        <!--预约维修-->
        <div class="order">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/765/340654a87011c6.png.webp" alt="">
            </div>
            <div class="order-img">
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/364fb97f729b85.jpg.webp" alt="">
                </div>
                <div>
                    <img src="https://img2.yaya.cn/newstatic/766/364fbaa04910af.jpg.webp" alt="">
                </div>
            </div>
        </div>


        <!--我们的优势-->
        <div class="recycle-server">
            <div class="floor-top-img">
                <img src="https://img2.yaya.cn/newstatic/766/3406646dfcebca.png.webp" alt="">
            </div>
            <div class="recycle-server-img">
                <div>
                    <img src="https://img2.yaya.cn/newstatic/765/34066a0f128bbd.png.webp" alt="">
                </div>
                <div>
                    <img src="https://img2.yaya.cn/newstatic/771/34066b39de7bad.png.webp" alt="">
                </div>
            </div>

        </div>










    </div>

</template>

<script>
    export default {
        name: "index"
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
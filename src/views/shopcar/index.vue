<template>
<div>
    <div class="top">
        <p>编辑</p>
        <div class="bg-card">
            <p class="car">购物车</p>
            <p class="count">共<span>0</span>件商品</p>
        </div>
    </div>
    <div class="cart-wrap">
        <div class="cart-wrap-position">
            <div class="cart">
                <div class="cart-item">
                    <div class="group-title"></div>
                    <div class="product">
                        <div class="product-item">
                            <div>

                            </div>
                            <div>
                                <a href="#"></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>


        <div class="recommend">
            <div class="title-image"><img src="https://img2.yaya.cn/newstatic/767/3174479e1a14d5.png" alt=""></div>
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
    .top{
        background: url("//img2.ch999img.com/pic/topic/2018091809055194.png")no-repeat top;
        background-size: cover;
        width: 7.5rem;
        overflow: hidden;
        height: 2.625rem;
        color: #fff;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    }
    .top>p{
        height: 0.88rem;

        line-height: 0.88rem;
    }
    .bg-card{
        padding: 0.2rem;
    }
    .bg-card .car{
        font-size: 18px;
        font-weight: 700;
    }
    .bg-card .count{
        font-size: 13px;
        opacity: .7;
    }


    /*cart*/
    .cart-wrap{
        width: 7.5rem;
        min-height: 0.8rem;

    }
    cart-wrap-position{
        position: relative;
        width: 100%;
    }
    .cart{
        position: absolute;
        top:2.1rem;
        left:0.28rem;
    }
    .cart-item{
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
        border-radius: 0.08rem;
        background: #fff;
        margin-bottom:0.3rem;
    }

    .group-title{
        height: 0.8rem;
        width: 6.54rem;
        padding: 0 0.2rem;
        overflow: hidden;
        border-bottom: 1px solid #dfdfdf;
    }
    .product-item{
        height: 2.12rem;
        background: #fff;
        padding: 0.2rem 0;
    }
    .recommend{
        height: 0.82rem;
        margin-top: 3.12rem;
        padding: 0 0.2rem;
    }
    .title-image{
        width: 6.94rem;
        height: 0.82rem;
        padding: 0 0.06rem;

    }
    .title-image img{
        height: 100%;
        width: 100%;
    }
</style>
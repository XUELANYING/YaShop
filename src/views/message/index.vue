<template>
    <div>
        <div class="top">
            <div class="top-wrap">
                <div class="msg-card">
                    <h3>消息中心</h3>
                    <p>共<span>0</span>条未读消息</p>
                </div>
            </div>
            <!--定位盒子-->
            <div class="msg-nav">
                <div class="msg-nav-item">
                    <div class="image-wrap">
                        <img src="https://img2.yaya.cn//newstatic/916/71e026db23deb9.png" alt="">
                    </div>
                    <span>消息通知</span>
                </div>
                <!---->
                <div class="msg-nav-item">
                    <div class="image-wrap">
                        <img src="https://img2.yaya.cn//newstatic/918/70ce1bb7d1e983.png" alt="">
                    </div>
                    <span>丫丫活动</span>
                </div>
                <div class="msg-nav-item">
                    <div class="image-wrap">
                        <img src="https://img2.yaya.cn//newstatic/917/70ce22c994a79f.png" alt="">
                    </div>
                    <span>丫丫推荐</span>
                </div>
                <div class="msg-nav-item">
                    <div class="image-wrap">
                        <img src="https://img2.yaya.cn//newstatic/914/70ce2f332c3bb4.png" alt="">
                    </div>
                    <span>丫丫客服</span>
                </div>
            </div>
        </div>


        <!--无内容显示-->
        <div class="no-comments">
            <div>
                <img src="data:image/png;base64,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" alt="">
            </div>
            <p>暂无相关内容</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style scoped>
    .top{
        height: 3.3rem;
        position: relative;
    }
    .top-wrap{
        height: 1.92rem;
        background: url("//img2.ch999img.com/pic/topic/2018091809055194.png")no-repeat bottom;
        background-size: cover;
    }
    .msg-card h3{
        font-size: 18px;
        color: #fff;
        line-height: 0.6rem;
        font-weight: 700;
    }
    .msg-nav {
        width: 6.5rem;
        height: 1.9rem;
        padding: 0 0.2rem;
        position: absolute;
        box-shadow: 0 2px 5px #ccc;
        background: #fff;
        left: 0.3rem;
        top: 1.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 0.08rem;
    }
    .msg-nav .msg-nav-item .image-wrap{
        height: 0.8rem;
        width: 0.8rem;
        overflow: hidden;
        border-radius: 50%;
    }
    .msg-card{
        padding: 0.2rem;
    }
    .msg-card p{
        color: #fff;
        font-size: 13px;
    }
    .msg-nav-item .image-wrap img{
        width: 100%;
        height: 100%;
    }


    /*no-comments*/
    .no-comments{
        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left:-0.8rem ;
        margin-top: -0.8rem;
    }
    .no-comments>div{
        height: 1.2rem;
        width: 1.2rem;
    }
    .no-comments>div>img{
        width: 100%;
        height: 100%;
    }
    .no-comments>p{
        margin-top: 0.1rem;
        color:#9c9c9c;
        text-align: center;
    }
</style>
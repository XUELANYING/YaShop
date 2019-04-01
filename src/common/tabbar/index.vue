<template>
    <div id="footer">
        <router-link v-for="(item,index) in tabbar" :to="item.path" tag="div">
            <!--<i></i>--><img :src="item.img" alt="">
            <span>{{item.title}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tabBar",
        data() {
            return {
                tabbar: [
                    {
                        title: "首页",
                        img: "https://img2.yaya.cn/newstatic/917/70e1ebf9437eb5.png",
                        path: '/home'
                    },
                    {
                        title: "分类",
                        img: "https://img2.yaya.cn/newstatic/770/364f6b7e419f4a.png",
                        path: '/classify'
                    },
                    {
                        title: "消息",
                        img: "https://img2.yaya.cn/newstatic/766/31fabea5dde74a.png",
                        path: '/message'
                    },
                    {
                        title: "购物车",
                        img: "https://img2.yaya.cn/newstatic/768/31fac0693aab8a.png",
                        path: '/shopcar'
                    },
                    {
                        title: "我的",
                        img: "https://img2.yaya.cn/newstatic/770/31fac2759665d7.png",
                        path: '/mine'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #footer {
        height: 1rem;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: hsla(0, 0%, 98%, .98);
        box-shadow: 0 -1px 2px #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #footer > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #333;
        font-size: 10px;
        margin-top: 0.1rem;
    }

    #footer .router-link-active {
        color: #4fb99f;
    }

    #footer > div > img {
        height: 0.48rem;
        width: 0.48rem;
    }

    /*#footer>a>i{
        display: block;
        height: 0.48rem;
        width: 0.48rem;
        background: #000;
    }*/
</style>
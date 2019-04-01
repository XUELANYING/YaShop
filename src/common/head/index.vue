<template>
    <div id="top">
        <div class="top-wrap">
            <div class="wrap">
                <a href="#">朝阳区
                    <i class="fa fa-angle-down font-16 ml-5"></i>
                </a>
                <div class="line"></div>
                <router-link class="search-box" tag="div" to="/search">
                    <i class="fa fa-search mr-5 white"></i>
                    <span>iphone XR MAX</span>
                </router-link>
            </div>

            <div class="tabs">
                <span @click="changeView(1)" :class="activeIndex == 1? 'active':''">推荐</span>
                <span @click="changeView(2)" :class="activeIndex == 2? 'active':''">以旧换新</span>
                <span @click="changeView(3)" :class="activeIndex == 3? 'active':''">手机快修</span>
                <span @click="changeView(4)" :class="activeIndex == 4? 'active':''">头条</span>
            </div>

        </div>

    </div>
</template>

<script>


    export default {

        name: "top",

        data() {
            return {
                activeIndex: 1
            }
        },
        methods: {
            changeView(n) {
                this.activeIndex = n;
                this.Observer.$emit("handleTo", n)
            }
        }

    }
</script>

<style scoped>
    #top {
        height: 1.88rem;
        width: 100%;
        background: #52c5a9 url(//img2.yaya.cn/m/static/assets/bg_yaya_M1.5ee5a18d5501316b817eb4d27e0f7a36.png) no-repeat bottom;
        background-size: cover;
        padding: 0 0.3rem;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
    }

    .top-wrap {
        height: 1.88rem;
        width: 100%;
    }

    .wrap {
        display: flex;
        height: 0.68rem;
        margin: 0.28rem 0;
        background: rgba(0, 0, 0, .4);
        border-radius: 0.6rem;
        align-items: center;
        color: #fff;
        font-size: 14px;
    }

    .wrap a {
        display: block;
        color: #fff;
        padding: 0 0.3rem;
        max-width: 1.8rem;
        line-height: 0.6rem;
        height: 0.6rem;
    }

    .line {
        height: 0.28rem;
        width: 0.04rem;
        background: #fff;
        opacity: .6;
    }

    .search-box {
        padding: 0 0.2rem;
    }

    .search-box i {
        margin-right: 0.1rem;
    }

    .search-box span {
        opacity: .6;
    }

    .tabs {
        display: flex;
    }

    .tabs span {
        margin: 0 0.2rem;
        height: 0.8rem;
        opacity: .8;
        font-size: 15px;
        color: #fff;
    }

    .active {
        font-size: 16px;
        color: #fff;
        font-weight: 700;
    }
</style>
<template>

    <div>
        <div id="head">
            <div class="wh44">
                <i class="fa fa-angle-left font-30 back" @click="back()"></i>
            </div>
            <div class="head-search">
                <i class="fa fa-search grey-9"></i>
                <span>iPhone XR</span>
            </div>
            <div class="wh44">
                <i class="fa fa-ellipsis-h font-24"></i>
            </div>

        </div>

        <div class="mainC">
            <!--分类左边-->
            <div class="sticky">
                <ul>
                    <li v-for="(item,index) in category" @click="handleCategory(index)" :class="nowIndex==index? 'active':''">{{item.title}}</li>
                </ul>
            </div>

            <!--分类右边-->

            <div class="cate-child">
                <a href="#" v-if="category[nowIndex]">
                    <img :src="category[nowIndex].picture">
                </a>

                <div class="cate-item-wrap" v-if="category[nowIndex].children" v-for="(item,index) in category[nowIndex].children">
                    <div class="cate-item-title" v-text="item.title"></div>
                    <div class="item-wrap">
                        <a href="#" v-if="category[nowIndex].children.length > 0" v-for="(val,ind) in item.children">
                            <img :src="val.picture" alt="">
                            <span v-text="val.title"></span>
                        </a>
                    </div>
                </div>

                </div>
            </div>
    </div>

</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "classify",
        data(){
          return{
              nowIndex:0
          }
        },
        created(){
            this.getCategory();
        },
        methods:{
            back(){
                this.$router.back()
            },
            ...mapActions({
                getCategory:"classify/getCategory"
            }),
            handleCategory(index){
                this.nowIndex = index;
                //console.log(this.cateItem)
            }
        },
        computed:{
            ...mapState({
                category:state => state.classify.category,
                firstChilds:state =>state.classify.firstChilds,
                firstCate:state =>state.classify.firstCate
            })
        }
    }
</script>

<style scoped>
    #head{
        height: 0.88rem;
        width: 100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    #head i{
        font-size: 24px;
    }
    #head .back{
        font-size: 30px;
    }
    #head .head-search{
        width: 5.77rem;
        height: 0.56rem;
        padding:0 0.2rem;
        background: #f5f5f5;
        color: #9c9c9c;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        font-size: 14px;
    }
    #head .head-search i{
        margin-right: 0.15rem;
        font-size: 14px;
    }
    #head .wh44{
        height: 0.88rem;
        width: 0.88rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /**/
    .mainC{
        display: flex;
        flex-direction: row;
        width: 100%;
        background: #fff;
        padding-top: 0.88rem;
    }
    .mainC .banner{
        height: 3.75rem;
    }
    .mainC .banner>img{
        width: 100%;
        height: 100%;
    }
    /*sticky*/
    .sticky{
        width:1.875rem;
        height: 100%;
        background: #f5f5f5;
    }
    .sticky ul .active{
        color: #f21c1c;
        background: #fff;
        border-left:2px solid #f21c1c;
    }
    .sticky ul li{
        height: 0.88rem;
        width: 1.555rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0 0.16rem;
        font-size: 14px;
        font-weight: 500;
        color: #333;
    }
   
    .cate-child{
        width: 5.625rem;
        height:12rem;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .cate-child>a{
        display: block;
        width:5.25rem;
        flex-shrink: 0;
        height: 1.75rem;
        margin: 0.2rem;
        margin-bottom: 0rem;
        border-radius: 0.08rem;
        overflow: hidden;
    }
    .cate-child>a>img{
        height: 100%;
        width: 100%;
    }
    .cate-item-wrap{
        width: 5.25rem;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
        border-radius: 0.1rem;
        overflow: hidden;
        margin: 0.3rem 0.195rem;
        flex-shrink: 0;
    }
    .cate-item-title{
        padding: 0 0.2rem;
        font-size: 14px;
        height: 0.6rem;
        line-height: 0.6rem;

    }
    .item-wrap{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .item-wrap>a{
        display: flex;
        height: 1.775rem;
        width: 1.735rem;
        padding: 0.2rem 0;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
    }
    .item-wrap>a>img{
        height: 1.385rem;
        width: 1.385rem;
        margin-bottom: 0.1rem;
    }
    .item-wrap>a>span{
        color: #333;
    }
    .fade-out-enter-active, .fade-out-leave-active {
        transition: opacity 2s;
    }

    .fade-out-enter, .fade-out-leave-to {
        opacity: 0;
    }
</style>
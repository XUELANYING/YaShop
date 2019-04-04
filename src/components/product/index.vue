<template>
    <div class="product">
        <div id="head">
            <div class="wh44">
                <i class="fa fa-angle-left font-30 back" @click="back()"></i>
            </div>
            <div class="details-tab">
                <ul>
                    <li class="cur">商品</li>
                    <li>评论</li>
                    <li>详情</li>
                </ul>
            </div>
            <div class="wh44">
                <i class="fa fa-ellipsis-h font-24"></i>
            </div>

        </div>
        <!--<h2>商品详情{{id}}======{{details}}</h2>-->
      <!--  <div class="pic-group">
            <div class="pic-box">
                <mt-swipe :auto="2000">
                    <mt-swipe-item v-for="item in detailList">
                        <a :href="item.href" rel="external nofollow" >
                            <img :src="item.imagePath"/>
                        </a>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>-->
        <div class="banner">
            <mt-swipe>
                <mt-swipe-item v-for="item in detailList.pictures">
                    <a>
                        <img :src="item" class="img"/>
                    </a>
                </mt-swipe-item>
            </mt-swipe>

           <!-- <div class="swiper-container banner-pagination">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in detailList.pictures"><img :src="item" alt=""></div>
                </div>
            </div>-->
            <div class="olist">
                <div>视频</div>
                <div>图片</div>
                <div>实拍</div>
            </div>
        </div>

        <div class="product-wrapper">
            <p class="product-title">{{detailList.productName +" "+ detailList.skuName + tag}}</p>
            <p class="product-profile">{{activities.profile.title}}</p>
            <p class="product-price">￥{{detailList.price}}</p>

            <div class="option-row">
                <span><i class="icon icon-trends"></i>价格走势</span>
                <span><i class="icon icon-trends"></i>价格走势</span>
                <span><i class="icon icon-trends"></i>价格走势</span>
                <span><i class="icon icon-trends"></i>价格走势</span>
            </div>
        </div>

        <div class="spec-params-wrapper">
            <div class="module-title">
                <span>规</span>
                <span>格</span>
            </div>
            <div class="module-content">
                <div class="spec-params-item" v-for="item in detailList.params">
                    <img :src="item.imgPath" alt="">
                    <p class="txt">{{item.key}}</p>
                    <p class="txt">{{item.value}}</p>
                </div>
            </div>
        </div>


        <div class="spec-params-wrapper pro-wrap">
            <div>
                <div class="module-header">
                    <p>促销活动</p>
                    <i class="more"></i>
                </div>
                <div class="module-cont">
                    <div v-for="item in activities.promotions">
                        <span class="txt-mark">{{item.title}}</span>
                        <span class="txt">{{item.description}}</span>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>

        <div class="rank-wrap">
            <p>销量排行</p>
            <div>{{detailList.rank.text}}</div>
            <i class="fa fa-angle-right grey-9 ml-5 font-18"></i>
        </div>

        <div class="rank-wrap">
            <p>已选</p>
            <div class="weight"><span>{{detailList.skuName}}</span><span>1件</span></div>
            <i class="more"></i>
        </div>

        <div class="spec-params-wrapper pro-wrap">
            <div>
                <div class="module-header">
                    <p>送至</p>
                    <div>河北省沧州市海兴县</div>
                    <i class="more"></i>
                </div>
                <div class="module-prompt">
                    <div>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="recommendPackage">
            <p class="recommendPackage-title">推荐套餐</p>
            <div class="recommendPackage-con">
                <img :src="mainList.picUrl" alt="">
                <div>
                    <p class="recom-name">{{mainList.name}}</p>
                    <p class="recom-price">￥{{mainList.price}}</p>
                </div>
            </div>
            <div class="recommendPackage-goodList" v-for="item in partList">
                <span></span>
                <img :src="item.picUrl" alt="">
                <div>
                    <p>{{item.name}}</p>
                    <p class="recom-price">
                        <span>￥{{item.reducedPrice}}</span>
                        <span class="margin-left02">￥{{item.price}}</span>
                    </p>
                </div>
            </div>
            <div class="total margin-left01">总价 <span></span> <span></span> 节省 <span></span> </div>
            <div class="recommend-btn">购买此套餐(<span>2</span>件商品)</div>
        </div>

        <div class="recommendProduct">
                <div class="recommend-title">
                    <p class="recom-title">推荐商品</p>
                    <p>查看更多 <i class="fa fa-angle-right grey-9 ml-5 font-18"></i></p>
                </div>
            <div>
                <div class="mySwiper">
                    <div class="img-slide" v-for="item in recommendList">
                        <img :src="item.imagePath" alt="">
                        <p class="slide-name">{{item.name}}</p>
                        <p class="swiper-price">{{item.price | formatMoney}}</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="comment">
            <div class="comment-tit">
                <p>评论</p>
                <p>更多评价<i class="fa fa-angle-right grey-9 ml-5 font-18"></i></p>
            </div>
            <div class="comment-item">
                <div>
                    <div class="userimg"><img :src="detailList.comment.list[0].avatar" alt=""></div>
                    <div>
                        <div class="usermsg">
                            <p class="user">{{detailList.comment.list[0].userName}}</p>
                            <p class="uptime">{{detailList.comment.list[0].commentTime}}</p>
                        </div>
                        <div class="start"><i class="fa fa-star"></i></div>
                    </div>



                </div>
                <p class="comment-con">{{detailList.comment.list[0].content}}</p>
                <div class="dianzan">
                    <span class="dianzan-left"> <i class="fa fa-thumbs-o-up"></i> 点赞</span>
                    <i class="fa fa-edit mr-5 font-16"></i>
                </div>
            </div>
        </div>

        <div class="rank-wrap">
            <p>暂无问答</p>
            <div class="wenda">
                <div class="wen"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABUlJREFUWAm9WF1oHFUUvndmZ7PZ7Mb4U6k6uyYmJqAYH4I2wZ++CFVELaXFPhT8SR9S65ugPklA8UFLURGFSmihQdBiQYsS2qotpfXFUBTjT5pNdnc2tTW1sTubzW52do7fnbjLzGZnspttvBDm3HO+c84355575244W8NYiEb7iow9xon6iegezthNjPMbEOoqI/qTGLvIOR+XGPsqmEyOQ4aqtoFYtQ1qbw8sFIs7TcZeQtIHavNi4MlngT0UUpR3+fT0tdX8aiKUiUS24BVHUI07VgvoYf9b4vztltbWD/nExJIbzpMQ9fa2ZObn94HIkFuANejPSYqyLTQzc7marysh6upq1fP5E1ieB6s5NqJD0pQkSVtb0F+VcdB3K4dVmXz+6/UgI7Jh+dUi0clcR0dPZfYVhLA8HMv0BZ4PV4Kv65yobalQOEbR6I32uCsI6ZHIIMhssYMqZZTcwF/NW7nS3za/WzfNUducOXoo096+0SwWf8NStdlBDpnzaV9T02YqFDYAOwZWt2Jv/4MzKe7AlSacKxA78ZKBkqryiao8EUqlxoTeZzeSab7pSUaAiQrNqnqJnzqVSkci2/FGJ2S/vzcYi2n2WHY53d19C89mT4L8/XZ9SSbO36Hh4eN8eNgsLxn19QVB6NkSyOPZk4nF3hP2Vk07gyTHzXzevaICNzl5BWfQB24xUb37MgcPbhX2coUW5ua2YR52cxJ6nLqnfbL8fNEwhtLR6OtQneGm2Q9S51Gt9ApfIpPL8o5wIvE9k6TLrIgPjtsgEvmPlgmB5XNu2JIepR1rjsfjmY6OT1mh8JPQg8zyIHLslpIavaWWECVdtSfyP4lVUuyE+qsBvXTon59Jkvbi7a/YcQjaZhiGWNZNdr2njI2kz81tsgjpXV0bKJcLeTpUMSp+//bA9PSFKiamd3Y+Tfl81c9DNbzQoaHbLUKyYdxluKE89E2KckmYcXYNoeRPCRnN+21I0/aHY7G/dFUtr6iwrTZM07zdIlQ0zchqYC87sj4D++MCYxLdjMd+Idc7sGlus7Y93mqxXuf1wKMnF60KgZmjKetNhkBn4bPR8uP8x3r9S3hUOmURYrJ8kRn1d1GuUBBbXQ9r2lt4ir/ywA2zTTcMDrI1DyzXMiFx7KdVNQHPO2v2BtAoFEZzqvpik8/nqPCiLIf1paUD9cQSWFlRfl+ukJhx/h2+Uy8IsdaBnfUI7qIXliqra5sD43pdtedB20zgCJksf8tg/NIOaERG8Jfxgo9ySdoRCga/EbHw46DZMybREWEvVyg8OHhMHxmZQpW63BzxGZCFDd8v6+mGw31jLKBpMYedaLNjbpugz4h8vs+EytFzOOD2oMQf2bAOEW/+K46I13DW7ALO/WbA+Qywh3F7SOLZBOwAAu1yBLNPOD+Em4PVLg5CpKrNOmPiuPf86ttjNSxznpZ8vu7SrxB7DzGeSokD8peGk9QRABV/o0RGuDkI/Rfnah3xGoJieT4JJZPv24NUI9RtB6yXDDJHQwMDeyrjO3pIj0bvRSP+H0s2Gg4EdvOpqXwlofK2FwbshlcrAdd5ruMX614s02G3uOUK4Y78EM4XcWkv69yc1qDP4Fb5MVeUfeKe5OVvJaeenrCezZ5HiTq9wPXYEFjc6E/jxD4SIvocO7imzWItWSabPdAIGSQ38QMgAQJ/QB7HspwLEv3Ak8n5el5CYH34388rOHl3ejnitM2BcByYWSSeRdIUZA2JNfjOhPz+WLUG9YrpZvOhkXejrNeQRIMcR/IE5DgSxyWiBMmy1oL/5UCP9lr/8S92FwqKAZWPVQAAAABJRU5ErkJggg==" alt=""></div>
                <span>这货怎么样？问问买过的人吧 <i class="fa fa-angle-right grey-9 ml-5 font-18"></i></span>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import {Swipe, SwipeItem} from 'mint-ui'
    import 'mint-ui/lib/style.css'
    export default {
        created(){
            this. getDetails(this.id);
            this.getActivity("",this.shopFlag,this.id)
            /*for (var i = 0 ; i < this.pageList.length;i++){
                if(this.id==this.pageList[i].id){
                    this.details=this.pageList[i]
                   this.$store.state.recommand.details = this.details
                    break
                }
            }*/
            window.localStorage.setItem("product",JSON.stringify(this.details))


        },
        name: "product",
        data(){
            return{
                details:{
                }
            }
        },
        props:{
            id:{
                type:String,
                default:""
            }
        },
        computed:{
            ...mapState({
                detailList:function(state){
                   return state.product.detailList
                },
                tag:state=>state.product.tags,
                activities:state=>state.product.activities,
                recommendList:state=>state.product.recommendList,
                partList:state=>state.product.partList,
                mainList:state=>state.product.mainList,
            })
        },
        methods:{
            ...mapActions({
               getDetails:"product/getDetails",
                getActivity:"product/getActivity"
            }),
            back(){
                this.$router.back()
            }
        },
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem
        },
        mounted(){
            new Swiper('.mySwiper');

            },

        watch:{
            recommendList(){
                this.$nextTick(()=>{
                    new Swiper(this.$refs.myswiper,{
                        /*autoplay:{
                            disableOnInteraction:false
                        },*/
                        pagination:{
                            el:".mySwiper"
                        },
                       /* slidesPerView: 3,//一行显示3个
                        slidesPerColumn: 2,//显示2行*/
                    });
                })
            }
        },
        filters:{
            formatMoney:function (value) {
                return "￥"+value
            }
        }
    }
</script>

<style scoped>
    .product{
        background:rgb(245, 245, 245);
    }
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
    #head .details-tab ul{
        width: 5.74rem;
        height: 0.88rem;
        display: flex;
        justify-content: center;
        font-size: 16px;
    }
    #head .details-tab ul li{
        width: 0.64rem;
        height: 0.88rem;
        margin-left: 0.44rem;
        line-height: 0.88rem;
        text-align: center;
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

    .banner{
        height: 7.48rem;
        margin-top: 0.88rem;
        background: #fff;
    }
     .banner .banner-pagination{
         height: 6.98rem;
        width: 100%;
    }
     .swiper-slide{
         height: 6.98rem;
     }
    .pic-box .mt-swipe a{
        display: block;
        height: 5.62rem;
        width: 100%;
    }
    .banner img{
        height: 100%;
        width: 100%;
    }
    .olist{
    height: 0.5rem;
    width: 100%;
    display: flex;
        justify-content: center;
}
    .olist>div{
        width: 1.05rem;
        height: 0.44rem;
        border: .5px solid #dfdfdf;
        border-radius: 0.56rem;
        margin: 0 0.06rem;
        line-height: 0.4rem;
        text-align: center;
    }

    .product-wrapper{
        height: 3.92rem;
        padding: 0.26rem 0.2rem 0.2rem;
        background: #fff;
    }
    .product-title{
        font-size: 16px;
        color: #333;
        line-height: 30px;
        font-weight: 700;
    }
    .product-profile{
        color: #e73828;
        line-height: 30px;
        font-size: 14px;
    }
    .product-price{
        font-size: 28px;
        color: #e73828;
        margin: 0.24rem 0 .36rem;
    }
    .product-wrapper .option-row{
        display: flex;
        height: 0.28rem;
        margin :0.1rem 0 0.14rem;
        justify-content: space-around;
    }

    .spec-params-wrapper{
        background: #fff;
        height: 1.92rem;
        padding-left: 0.28rem;
        display: flex;
        margin-top: 0.2rem;
    }
    .module-title{
        width: 0.96rem;
        padding-right: 0.3rem;
        color: #9c9c9c;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .module-content{
        flex: 1;
        overflow: auto;
        display: flex;
    }
    .spec-params-item{
        width: 1.72rem;
        height: 1.92rem;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
    }
    .spec-params-item img{
        height: 0.44rem;
        width: 0.44rem;
        margin:0 auto;
    }
    .spec-params-item p{
        width: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        margin-top: 0.1rem;
        color: #333;
    }
    .module-header{
        height: 0.32rem;
        width: 6.94rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.32rem;
    }
    .module-header p,.rank-wrap p{
        color: #9c9c9c;
    }
    .module-header .more,.rank-wrap .more{
        display: block;
        height: 0.32rem;
        width: 0.32rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDA3OUFDMTQzMTFFNjk0N0VGNkQxOERERDdCOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDA3OUJDMTQzMTFFNjk0N0VGNkQxOERERDdCOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTgwMDc5OEMxNDMxMUU2OTQ3RUY2RDE4REREN0I4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMDc5OUMxNDMxMUU2OTQ3RUY2RDE4REREN0I4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm3a57wAAADeSURBVHjaYvz//z8DPQATA53AqEWjFg1ji1jmzp2LUzI5OZkBnzwpalmgvrIAYlWo2G0gPgHE/7CoTQJiByBmBOL9QDwPiP+gqWMD4m4gjoGqWwzEpSxQS3SQFOpANZ9CMyARiH2R+CD2TyBeiKauC4jzkPgg9ncmJJ8gA00sYo5YxNyxiMViEUula6q7jUX8Bhax/VjEdmERW4xFbA4LNOIZ0BLDaSyK50Mj1xHJ4iVY1JVB1cUiWVzLAk1dx6AYHwAlkFlQjA/8AuJ8KKZ/hmUcrWFHLRq1iGIAEGAAJ6EwvI5SbZEAAAAASUVORK5CYII=) no-repeat 50%;
        background-size:100% ;
    }
    .pro-wrap{
        padding: 0.28rem;
        height: 1.46rem;
    }
    .module-cont div{
        height: 0.38rem;
        margin-top: 0.2rem;
        display: flex;
    }
    .module-cont div .txt-mark{
        height: 0.3rem;
        width: 1.08rem;
        border: 1px solid #4fb99f;
        color:#4fb99f;
        border-radius: 0.2rem;
        margin-right: 0.08rem;
    }
    .module-cont div .txt{
        height: 0.3rem;
        width: 5.3rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 14px;
    }
    .rank-wrap{
        background: #fff;
        height: 0.32rem;
        padding: 0.28rem;
        display: flex;
        margin-top: 0.2rem;
        justify-content: space-between;
    }
    .rank-wrap div{
        font-size: 14px;
    }
    .rank-wrap .font-18{
        font-size: 18px;
    }
    .rank-wrap .weight{
        font-weight: 700;
    }
    .module-prompt{
        width: 5.68rem;
        height: 0.788rem;
        padding-left: 1.26rem;
    }

    .recommendPackage{
        min-height: 5.06rem;
        width: 6.94rem;
        padding: 0.28rem;
        background: #fff;
        margin-top: 0.2rem;
    }
    .recommendPackage>p{
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 13px;
        font-weight: 600;
    }
    .recommendPackage-con{
        height: 0.96rem;
        width: 6.94rem;
        display: flex;
        padding-top:0.2rem ;
        margin-top:0.1rem ;
    }
    .recommendPackage-con img,.recommendPackage-goodList img{
        height: 0.96rem;
        width: 0.96rem;
    }
    .recommendPackage-con>div{
        height: 0.96rem;
    }
    .recommendPackage-con>div>p,.recommendPackage-goodList>div>p{
        font-size: 12px;
        margin-left: 0.2rem;
        color: #333;
        line-height: 20px;
    }
    .recommendPackage-con>div .recom-price,.recommendPackage-goodList>div .recom-price{
        color: #e73828;
    }

    .recommendPackage-goodList{
        display: flex;
        align-items: center;
        margin-top: 0.34rem;
    }
    .recommendPackage-goodList>span{
        height: 0.32rem;
        width: 0.32rem;
        border:1px solid #ccc;
        border-radius: 50%;
        background:rgb(79, 185, 159);
        margin-left: 0.1rem;
    }
    .recommendPackage-goodList img{
        margin: 0 0.2rem;
    }
    .margin-left02{
        margin-left: 0.2rem;
    }
    .recommend-btn{
        height: 0.98rem;
        width: 6.94rem;
        background: #f21c1c;
        border-radius: 0.08rem;
        color: #fff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.1rem 0 0.2rem;
    }
    .total{
        height: 0.3rem;
        width: 6.94rem;
        padding: 0.2rem 0;
        margin-top: 0.2rem;
    }
    .margin-left01{
        margin-left: 0.1rem;
        font-size: 14px;
    }

    .recommendProduct{
        margin-top: 0.2rem;
        background: #fff;
        padding: 0.28rem;
    }
    .recommend-title,.comment-tit{
        display: flex;
        justify-content: space-between;
    }
    .recom-title,.comment-tit{
        font-weight: 600;
        font-size: 13px;
    }
    .img-slide{
        height: 3.4rem;
        width: 2rem;
        background: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .img-slide img{
        margin-top: 0.2rem;
        height: 2rem;
        width: 2rem;
    }
    .img-slide .slide-name{
        color: #6b6b6b;
        height: 0.6rem;
        width: 1.94rem;
        margin:0.1rem 0 0 0.06rem;
    }
    .img-slide .swiper-price{
        height: 0.3rem;
        width: 1.94rem;
        margin: 0.2rem 0 0 0.06rem;
    }
    /*.swiper-container {
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }*/
    .mySwiper{
        height: 6.8rem;
        width: 6.94rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
    }
    .comment{
        margin-top: 0.2rem;
        background: #fff;
        padding: 0.2rem 0.28rem 0.28rem;
    }
    .comment-item{
        padding-top: 0.2rem;

    }
    .comment-item>div{
        display: flex;
    }
    .comment-item>div .userimg{
        height: 0.66rem;
        width: 0.66rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .comment-item>div .userimg img{
        height: 100%;
        width: 100%;
        background: #9F9F9F;
    }
    .usermsg{
        width: 6.08rem;
        height: 0.28rem;
        display: flex;
        justify-content: space-between;
        padding-left: 0.2rem;
    }
    .comment-con{
        min-height: 0.76rem;
        width: 6.94rem;
        margin-top: 0.175rem;
        color: #333;
    }
    .dianzan{
        margin-top: 0.2rem;
        color: #9c9c9c;
        font-size: 14px;
    }
    .dianzan-left{
        margin-right: 0.2rem;
    }
    .wen{
        height: 0.36rem;
        width: 0.36rem;
    }
    .wen img{
        height: 100%;
        width: 100%;
    }
    .wenda{
        display: flex;
        font-size: 12px;
        color: #9c9c9c;
    }
    .comment-con{
        font-size: 16px;
    }
    .start{
        margin-left: 0.2rem;
        color: #f9be00;
    }

    .cur{
        border-bottom: 2px solid #9F9F9F;
    }
</style>
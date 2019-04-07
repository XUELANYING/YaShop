<template>
    <div class="swiper-container navbox" ref="navBox">
        <div class="swiper-wrapper">
            <slot></slot>
           <!-- <div class="swiper-slide" v-for="item in banner">
                <img :src="item.imagePath" alt="">
            </div>-->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "banner",
        mounted(){
            new Swiper(this.$refs.navBox,{
                loop: true,
                autoplay:{
                    disableOnInteraction:false
                },
                pagination:{
                    el:".navBox"
                }
            })
        },
       /* watch:{
            banner(){
                this.$nextTick(()=>{
                    new Swiper(this.$refs.navBox,{
                        loop: true,
                        autoplay:{
                            disableOnInteraction:false
                        },
                        pagination:{
                            el:".navBox"
                        }
                    });
                });

            }
        }*/
    }
</script>

<style scoped>
   /* .navbox,navbox>div>div{
        height: 3.45rem;
        width:6.9rem;
        border-radius: 0.1rem;
        overflow: hidden;
    }*/
    .navbox img{
        width:100%;
        height: 100%;
    }
</style>
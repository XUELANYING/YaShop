<template>
    <div ref="details">
        <ul class="detailTab">
            <li>图文详情</li>
            <li>详细参数</li>
            <li>售后保障</li>
        </ul>
        <div></div>
        <div class="intro" v-html="introduction" ></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    export default {
        name: "introduction",
        created(){

        },
        computed:{
            ...mapState({
                introduction:state=>state.product.introduction
            })
        },
        methods:{
            ...mapActions({

            })
        }
    }
</script>

<style scoped lang="scss">
.detailTab{
    height: 0.88rem;
    display: flex;
    background: #fff;
    margin-top: 0.2rem;
    font-size: 15px;
    color: #9c9c9c;
    border-bottom: 1px solid #dfdfdf;
    li{
        width: 2.5rem;
        display: flex;
        line-height: 0.88rem;
       display: flex;
        justify-content: center;
    }
}
.intro{
    width: 100%;
}
    .intro p{
        width: 410px;

    }
</style>
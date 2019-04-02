<template>
    <div class="city-box-wrap">
    <div class="city-box">
        <span v-for="item in cityList">{{item.name}}</span>
    </div>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name: "province",
    data(){
        return {
            cityList:[]
        }
    },
        created(){
            this.getMunicipalityList();
            this.Observer.$on("msgSend",(index)=>{
               this.cityList = this.$store.state.stores.cityList[index].children;
                console.log(this.cityList)
            })
    },
    methods:{
        ...mapActions({
            getMunicipalityList:"stores/getCityList"
        })
    },
    computed:{
        ...mapState({
            /*cityList:state=>state.stores.cityList*/
        })
    }
}
</script>

<style scoped>
.city-box{padding:  0.24rem 0.2rem;
    width: 100%;
    height: 5.6rem;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
}
.city-box span{
    display: block;
    width: 24%;
    height: 0.7rem;
    padding-right: 0.06rem;
    flex-shrink: 0;
    line-height: 0.7rem;
    color: #333;
    font-size: 14px;
}
</style>
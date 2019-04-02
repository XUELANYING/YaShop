<template>
    <div class="city-box-wrap">
        <div class="city-box">
            <span v-for="(item,index) in cityList"  @click="handleMark(index)">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "province",
        created(){
            this.getCityList()
        },
        methods:{
            ...mapActions({
                getCityList:"stores/getCityList"
            }),
            handleMark(index){
               /* if( this.$store.state.stores.cityList[index].parentCode == 0){
                    this.$store.state.stores.province = this.$store.state.stores.cityList[index].name;
                    this.$store.state.stores.cityList = this.$store.state.stores.cityList[index].children;
                    this.$store.state.stores.n = 2;
                }else if( this.$store.state.stores.cityList[index].parentCode == this.$store.state.stores.cityList[index].id){
                    this.$store.state.stores.municipality = this.$store.state.stores.cityList[index].name;
                    this.$store.state.stores.cityList = this.$store.state.stores.cityList[index].children;
                    this.$store.state.stores.n = 3;
                }else if( this.$store.state.stores.cityList[index].length==0){
                    this.$store.state.stores.area = this.$store.state.stores.cityList[index].name
                }*/
                this.$store.state.stores.province = this.$store.state.stores.cityList[index].name;
                this.$store.state.stores.cityList = this.$store.state.stores.cityList[index].children;
                this.$store.state.stores.n = 2;
                this.Observer.$emit("msgSend",index);
            }
        },
        computed:{
            ...mapState({
                cityList:state=>state.stores.cityList
            })
        },
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
    .now{
        color: #9c9c9c;
    }
</style>
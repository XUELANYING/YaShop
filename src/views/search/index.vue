<template>
    <div class="seach">
        <div class="Seachtop">
            <i class="fa fa-angle-left font-30"></i>
            <p>
                <b class="fa fa-search grey-9 font-13"></b>
                <input type="text" placeholder="iPone XS Max">
            </p>
            <span>搜索</span>
        </div>
        <div class="SeachCon">
            <p>热门搜索</p>
        </div>
        <div class="SeachBom">
            <ul>
                <li v-for="(item,index) in SearchOlist">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    name:"search",
    data() {
        return {
           
        }
    },
    created() {
        this.getSearchList();
        //  console.log(this.getSearchList())
    },
    computed: {
        ...Vuex.mapState({
            SearchOlist:state=>state.searchlist.SearchUlist
        })
    },
    methods: {
        ...Vuex.mapActions({
            getSearchList:"searchlist/getSearchList"       
        })
    },
}
</script>
<style>
    .Seachtop{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:0.01rem solid #f5f5f5; 
        font-size:0.3rem;
        padding:0 0.2rem;
    }
    .Seachtop i{
        font-size:0.55rem;
    }
    .Seachtop p{
        width:5.7rem;
        background: #f5f5f5;
        border-radius: 0.3rem;
    }
     .Seachtop p input{
        border:none;
        height:0.5rem;
        background:#f5f5f5;
    }
    .Seachtop p b{
        font-size:0.3rem;
        color:#9c9c9c;
        padding:0.2rem;
    }
    .SeachCon p{
        padding:0.3rem 0 0 0.2rem;
        font-size:0.3rem;
    }
    .SeachBom{
        overflow: auto;
        flex-wrap: wrap;
    }
    .SeachBom ul{
        display: flex;
        align-items: center;
        padding:10px;
        
        
    } 
    .SeachBom ul li{
        height:28px;
        line-height: 28px;
        padding:0 10px;
        background:#f5f5f5;
        border-radius: 14px;
        margin:0 0.1rem;
        flex-shrink: 0;
    }
</style>

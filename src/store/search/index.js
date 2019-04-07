import {getSearchList} from '../../api/api.js'
export default{
    namespaced: true,
    state:{
        SearchUlist:[]
    },
    actions:{
        async getSearchList({commit},params){
            let data = await getSearchList(params);
            console.log(data)
            // console.log(data.data.hotSearch)
         commit("getMutationSearchlist",data.data.hotSearch)
        }
    },
    mutations:{
        getMutationSearchlist(state,params){
            // console.log(params)
            state.SearchUlist = params;
        }
    },
    getter:{

    }
}
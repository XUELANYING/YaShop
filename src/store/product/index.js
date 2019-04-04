import {getDetails,getActivity} from "../../api/api.js"
export default {
    state:{
        detailList:{},
        tags:"",
        activities:{},
        recommendList:[]
    },
    mutations:{
        getMutationDetails(state,params){
            state.detailList=params;
            state.tags="";
            for (var i = 0 ; i < state.detailList.tags.length ; i++ ){
                state.tags += state.detailList.tags[i]
            }

            console.log(state.detailList)
        },
        getMutationActivity(state,params){
            state.activities=params
            console.log(state.activities)
            state.recommendList = params.accessories.list
            console.log( state.recommendList)
        }

    },
    actions:{
        async getDetails({commit},params){
            let data = await getDetails(params);
          //  console.log(data)
            commit("getMutationDetails",data.data)
        },
        async getActivity({commit},params){
            let data = await getActivity(params);

            commit("getMutationActivity",data.data)
        }

    },
    namespaced:true
}
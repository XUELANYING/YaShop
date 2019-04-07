import {getDetails,getActivity,detailIntroduction} from "../../api/api.js"
export default {
    state:{
        detailList:JSON.parse(window.sessionStorage.getItem("detailList")) || [],
        tags:"",
        activities:JSON.parse(window.sessionStorage.getItem("activities")) || [],
        recommendList:JSON.parse(window.sessionStorage.getItem("recommendList")) || [],
        partList:JSON.parse(window.sessionStorage.getItem("partList")) || [],
        mainList:JSON.parse(window.sessionStorage.getItem("mainList")) || [],
        introduction:""
    },
    mutations:{
        getMutationDetails(state,params){
            state.detailList=params;
            state.tags="";
            for (var i = 0 ; i < state.detailList.tags.length ; i++ ){
                state.tags += state.detailList.tags[i]
            }
            window.sessionStorage.setItem('detailList', JSON.stringify(state.detailList))
           // console.log(state.detailList)
        },
        getMutationActivity(state,params){
            state.activities=params
            //console.log(state.activities)
            window.sessionStorage.setItem('activities', JSON.stringify(state.activities))
            state.recommendList = params.accessories.list;
            window.sessionStorage.setItem('recommendList', JSON.stringify(state.recommendList))
            //console.log( state.recommendList)
            state.partList = params.recommendPackage.goodsList;
            window.sessionStorage.setItem('partList', JSON.stringify(state.partList))
            state.mainList = params.recommendPackage.mainProduct;
            window.sessionStorage.setItem('mainList', JSON.stringify(state.mainList))
        },
        detailIntroduction(state,params){
            state.introduction=params
            console.log(state.introduction)
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
        },
        async detailIntroduction({commit},params){
            let data = await detailIntroduction(params)
            console.log(data)
            commit("detailIntroduction",data.data.introduction)
        }

    },
    namespaced:true
}
import {getSubstantial,getPageList} from "../../api/api.js"
export default {
    state:{
        substantialList:[],
        pageList:[],
        happyShare:[],
        icon:[],
        banner:[],
        headline:[],
        details:[]
    },
    mutations: {
        getMutationSubstantial(state, params) {
            state.substantialList = params;
            //console.log(params)
        },
        getMutationPageList(state, params) {
            //banner
            state.banner=params.floor[0].content;
            //头条
            state.headline = params.floor[4].content
            //好货
            state.pageList = params.floor[22].content;
            for(var i = 0 ; i<params.floor[23].content.length;i++){
                state.pageList.push(params.floor[23].content[i])
            }
           // console.log(state.pageList)
            //乐享生活
            for (var i = 15;i < 18;i++){
                for (var j = 0;j<params.floor[i].content.length;j++){
                    state.happyShare.push(params.floor[i].content[j])
                }
            }
            //图标
            state.icon=params.floor[1].content
            console.log(state.icon)
            //console.log(state.happyShare)
            //console.log(state.pageList)

        },
    },
    actions:{
        async getSubstantial({commit},params){
            let data = await getSubstantial(params);
            //console.log(data)
            commit("getMutationSubstantial",data.data.optimize)
        },
        async getPageList({commit},params){
            let data = await getPageList(params);
           // console.log(data)
            commit("getMutationPageList",data.data.container)
        }
    },
    namespaced: true,
}
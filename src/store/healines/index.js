import {getHotBrands} from "../../api/api.js"
export default {
    state:{
       banner:[],
        headlineList:[]
    },
    mutations: {
        getMutationtops(state, params) {
            state.banner = params[0].content
            state.headlineList = params[1].content
            console.log(state.headlineList)
        },

    },
    actions:{
        async getHotBrands({commit},params){
            let data = await getHotBrands(params);
            commit("getMutationtops",data.data.container.floor)
        },

    },
    namespaced: true,
}
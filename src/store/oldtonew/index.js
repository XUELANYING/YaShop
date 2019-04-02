import {getHotBrands} from "../../api/api.js"
export default {
    state:{
        hotBrandsList:[],
        icon:[]
    },
    mutations: {
        getMutationHotBrands(state, params) {
            state.hotBrandsList = params;
            state.icon = params[1].content
            console.log(state.icon)
        },

    },
    actions:{
        async getHotBrands({commit},params){
            let data = await getHotBrands(params);
            console.log(data)
            commit("getMutationHotBrands",data.data.container.floor)
        },

    },
    namespaced: true,
}
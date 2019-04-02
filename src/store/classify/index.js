import {getCategory} from "../../api/api.js"
export default {
    state:{
        category:[]
    },
    mutations: {
        getMutationCategory(state, params) {
            state.category = params
            //console.log(state.category)
        },

    },
    actions:{
        async getCategory({commit},params){
            let data = await getCategory(params);
            // console.log(data)
            commit("getMutationCategory",data.data)
        },

    },
    namespaced: true,
}
import {getCategory} from "../../api/api.js"
export default {
    state:{
        category:[],
        firstCate:null,
        firstChilds:null
    },
    mutations: {
        getMutationCategory(state, params) {
            state.category = params
            state.firstCate = params[0]
            state.firstChilds = params[0].children
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
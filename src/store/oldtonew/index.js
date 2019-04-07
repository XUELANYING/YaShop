import {getHotBrands} from "../../api/api.js"
export default {
    state:{
        hotBrandsList:[],
        process:[],
        icon:[],
        recycle:[],
        hotBrands:[],
        hotmoblie:[],
        server:[],
        access:[],
        banner:[]
    },
    mutations: {
        getMutationHotBrands(state, params) {
            state.banner=params[0].content;
            state.hotBrandsList = params;
            state.icon = params[1].content;
            state.process = params[2].content;
            state.recycle =[]
            for (var i = 3 ; i < 5 ; i++ ){
                for (var j = 0 ; j < params[i].content.length;j++){
                    state.recycle.push(params[i].content[j]);
                }
            }
            state.hotBrands = []
            for (var i = 6 ; i < 8 ; i++ ){
                for (var j = 0 ; j < params[i].content.length;j++){
                    state.hotBrands.push(params[i].content[j]);
                }
            }
            state.hotmoblie = params[9].content;
            state.server = params[12].content;
            state.access=[]
            for (var i = 14 ; i < 17 ; i++ ){
                for (var j = 0 ; j < params[i].content.length;j++){
                    state.access.push(params[i].content[j]);
                }
            }

            //console.log(state.access)
        },

    },
    actions:{
        async getHotBrands({commit},params){
            let data = await getHotBrands(params);
           // console.log(data)
            commit("getMutationHotBrands",data.data.container.floor)
        },

    },
    namespaced: true,
}
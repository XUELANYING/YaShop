import {getHotBrands} from "../../api/api.js"
export default {
    state:{
        banner:[],
        logo:[],
        process:[],
        repairStyle:[],
        yayarecom:[],
        threetemp:[],
        goodgood:[]
    },
    mutations: {
        getMutationtops(state, params) {
            state.banner = params[0].content;
            state.logo = params[1].content;
            state.process = params[2].content;
            state.repairStyle = []
            for (var i = 3; i < 6;i++){
                for (var j = 0 ; j < params[i].content.length ; j++ ){
                    state.repairStyle.push(params[i].content[j])
                }
            }
            state.yayarecom =params[8].content
            state.threetemp =params[10].content
            state.goodgood=params[12].content
            console.log(state.repairStyle)
        },

    },
    actions:{
        async getHotBrands({commit},params){
            let data = await getHotBrands(params);
            console.log(data)
            commit("getMutationtops",data.data.container.floor)
        },

    },
    namespaced: true,
}
import {getMineList} from '../../api/api.js'
export default {
    namespaced: true,
    state:{
        MineAry:[]
    },
    actions:{
       async Minelistme({commit},params){
            let data = await getMineList(params);
            // console.log(data)
            commit("MineMutlistme",data.data)
        }
    },
    mutations:{
        MineMutlistme(state,params){
            state.MineAry = params
        }
    },
    getter:{

    }
}
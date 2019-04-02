import {getHotCity,getCityList} from "../../api/api.js"
export default {
    state:{
        hotCities: [],
        cityList:[],
        municipalityList:[],
        province:"贵州省",
        municipality:"请选择",
        area:"请选择",
        n:1
    },
    mutations:{
        getMutationHotCity(state,params){
            state.hotCities=params
            //console.log(state.hotCities)
        },
        getMutationCityList(state,params){
            state.cityList = params;


        }
    },
    actions:{
        async getHotCity({commit},params){
            let data = await getHotCity(params);
            //console.log(data)
            commit("getMutationHotCity",data.data)
        },
        async getCityList({commit},params){
            let data = await getCityList(params);
            console.log(data.data)
            commit("getMutationCityList",data.data)
        }
    },
   namespaced:true
}
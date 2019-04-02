import Vue from 'vue'
import Vuex from 'vuex'
import recommand from './recommand/index'
import oldtonew from './oldtonew/index'
import searchlist from './search/index'
import Minelist from './mine/index'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        recommand,
        oldtonew,
        searchlist,
        Minelist
    }
})

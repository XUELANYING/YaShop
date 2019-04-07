import Vue from 'vue'
import Vuex from 'vuex'
import recommand from './recommand/index'
import oldtonew from './oldtonew/index'
import stores from './stores/index'
import classify from './classify/index'
import product from './product/index'
import headline from './healines/index'
import repair from './repair/index'
import searchlist from './search/index'
import Minelist from './mine/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        recommand,
        oldtonew,
        stores,
        classify,
        product,
        headline,
        repair,
        searchlist,
        Minelist
    }
})

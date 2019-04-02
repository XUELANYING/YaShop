import Vue from 'vue'
import Vuex from 'vuex'
import recommand from './recommand/index'
import oldtonew from './oldtonew/index'
import stores from './stores/index'
import classify from './classify/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        recommand,
        oldtonew,
        stores,
        classify
    }
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Classify from './classify'
import Message from './message'
import Mine from './mine'
import Shopcar from './shopcar'
import Search from './search'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        Home,
        Classify,
        Message,
        Mine,
        Shopcar,
        Search,
        {
            path: "**",
            redirect: "/home"
        }
    ]
})

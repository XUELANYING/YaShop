import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Classify from './classify'
import Message from './message'
import Mine from './mine'
import Shopcar from './shopcar'
import Search from './search'
import Userlogin from './uselogin'
import Register from './register'

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
        Register,
        Userlogin,
        {
            path: "**",
            redirect: "/home"
        }
    ]
})

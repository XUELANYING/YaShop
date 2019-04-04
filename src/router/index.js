import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Classify from './classify'
import Message from './message'
import Mine from './mine'
import Shopcar from './shopcar'
import Search from './search'
import Stores from './stores'
import Product from './product'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/home",
            meta:{
                title:"首页"
            }
        },
        Home,
        Classify,
        Message,
        Mine,
        Shopcar,
        Search,
        Stores,
        Product,
        {
            path: "**",
            redirect: "/home",
            meta:{
                title:"首页"
            }
        }
    ]
})
/*router.beforeEach((to, from, next) => {
    const nextRouter = ["search","mine","stores"];
    if(nextRouter.indexOf(to.name)!= -1){
        if(to.meta.requireAuth==false){
            router.push({ name: 'login' })
        }
    }
    next()
});*/
router.beforeEach((to,form,next)=>{
    document.title=to.meta.title;
    next()
})
export default router;
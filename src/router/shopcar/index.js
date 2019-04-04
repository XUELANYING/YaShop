export default {
    path: "/shopcar",
    component: () => import("@/views/shopcar"),
    name: "shopcar",
    meta:{
        tabFlag:true,
        title:"购物车",
        index:3
    }
}
export default {
    path: "/home",
    component: () => import("@/views/home"),
    name: "home",
    meta:{
        title:"首页",
        tabFlag:true,
        index:0
    }
}
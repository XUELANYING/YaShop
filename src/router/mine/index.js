export default {
    path: "/mine",
    component: () => import("@/views/mine"),
    name: "mine",
    meta:{
        tabFlag:true,
        title:"我的"
    }
}
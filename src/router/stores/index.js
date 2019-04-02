export default {
    path: "/stores",
    component: () => import("../../components/stores"),
    name: "stores",
    meta:{
        title:"本地服务",
        tabFlag:false,
    }
}
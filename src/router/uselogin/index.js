export default {
    path: "/tologin",
    component: () => import("@/views/userlogin/tologin.vue"),
    name: "tologin",
    meta:{
        tabFlag:true,
        title:"用户登录"
    }
}
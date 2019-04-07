export default {
    path: "/register",
    component: () => import("@/views/register"),
    name: "register",
    meta:{
        tabFlag:true,
        title:"用户注册"
    }
}
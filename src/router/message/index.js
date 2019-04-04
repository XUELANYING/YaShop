export default {
    path: "/message",
    component: () => import("@/views/message"),
    name: "message",
    meta:{
        tabFlag:false,
        title:"消息",
        index:2
    }
}
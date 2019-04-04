export default {
    path: "/product",
    component: () => import("../../components/product"),
    name: "product",
    meta:{
        tabFlag:false,
        title:"商品",
        index:4
    },
    props:true
}
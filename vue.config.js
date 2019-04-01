module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"https://m.yaya.cn",
                changeOrigin:true,
                pathRewrite: {
                    "^/api":""
                }
            }
        }
    }
}

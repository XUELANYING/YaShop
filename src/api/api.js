import http from "../utils/http.js";

export const getSubstantial = ()=>http("get","/api/web/api/floors/specialEnjoy/v1");

export const getPageList  = (label=0,page=1,random=0)=>http("get","/api/web/api/floors/v1",{label:label,page:page,random:random});

export const getHotBrands = (labelId='1039463340404862980',page=1,random=0)=>http("get","/api/web/api/floors/v1",{label:labelId,page:page,random:random});

export const getHotCity = () => http("get","/api/web/api/area/hotArea/v1");

export const getCityList = (op=1) =>http("get","/api/web/api/area/allAreaTree/v1",{optimize:op})

export const getCategory = () => http("get","/api/web/api/products/category/v1")
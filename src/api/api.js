import http from "../utils/http.js";

export const getSubstantial = ()=>http("get","/api/web/api/floors/specialEnjoy/v1");

export const getPageList  = (label=0,page=1,random=0)=>http("get","/api/web/api/floors/v1",{label:label,page:page,random:random});

export const getHotBrands = (labelId='1039463340404862980',page=1,random=0)=>http("get","/api/web/api/floors/v1",{label:labelId,page:page,random:random});
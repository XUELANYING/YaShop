import http from "../utils/http.js";

export const getSubstantial = ()=>http("get","/api/web/api/floors/specialEnjoy/v1");

export const getPageList  = (label=0,page=1,random=0)=>http("get","/api/web/api/floors/v1",{label:label,page:page,random:random});

export const getHotBrands = (labelId,page,random)=>http("get","/api/web/api/floors/v1",{label:labelId,page:page,random:random});

export const getHotCity = () => http("get","/api/web/api/area/hotArea/v1");

export const getCityList = (op=1) =>http("get","/api/web/api/area/allAreaTree/v1",{optimize:op})

export const getCategory = () => http("get","/api/web/api/products/category/v1")

export const getDetails = (id) => http("get","/api/web/api/sc/products/getDetailStatic/v2",{ppid:id});

export const getActivity= (from,flag,id) => http("get","/api/web/api/cc/products/productCityDetail/v4?from=&shopFlag=false&ppid=75045",{from:from,shopFlag:flag,ppid:id});

export const detailIntroduction  = (p,id)=>http("get","/api/web/api/sc/products/detailIntroduction/v2?position=&ppid=74082",{position:p,ppid:id});

export const getMineList = (v="0.8379303317852096") => http("get","/api/web/api/member/index/v1?",{v:v});

export const getSearchList = ()=>http("get","/api/web/api/search/hotAndHistorySearch/v1?history=");

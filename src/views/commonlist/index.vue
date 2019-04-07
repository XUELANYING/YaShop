<template>
    <div class="Common">
            <ul> 
                <li>
                    <router-link to="/home" tag="li">
                        <i class="fa fa-home"></i>
                        <b>首页</b>
                    </router-link>              
                </li>
                <li>
                    <router-link to="/classify" tag="li">
                        <i class="fa fa-reorder"></i>
                        <b>分类</b>
                    </router-link>
                
                </li>
                <li>
                    <router-link to="/shopcar" tag="li">
                        <i class="fa fa-shopping-cart"></i>
                        <b>购物车</b>
                    </router-link>
                
                </li>
                <li>
                    <router-link to="/mine" tag="li">
                        <i class="fa fa-user"></i>
                            <b>我的</b>
                    </router-link>
                
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .Common ul{
        height:1.1rem;
        background:#000;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color:#9c9c9c;
    }
    .Common ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Common ul li i{
        font-size:0.5rem;
    }
</style>


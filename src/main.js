import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import Observer from './Observer';
import BScroll from "@/common/BScroll"
import Banner from "@/common/Banner"

// 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

//把VueVideoPlayer导入并挂在到vue上
import VideoPlayer from 'vue-video-player'
import 'videojs-flash' // 引入才能播放rtmp视频
import 'videojs-contrib-hls' // 引入才能播放m3u8文件
Vue.use(VideoPlayer);

Vue.config.productionTip = false
Vue.prototype.Observer = Observer;

Vue.component("BScroll",BScroll);
Vue.component("Banner",Banner);


new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')

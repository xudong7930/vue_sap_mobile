import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import App from '@/App'


import routers from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.prototype.$http = Axios;

// Axios.defaults.baseURL = 'https://localhost:8080';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 配置路由
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routers,
    linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

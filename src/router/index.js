import Home from '@/router/home'


// 合并数组
const merge = function() {
    return Array.prototype.concat.apply([], arguments);
}

const routers = merge(Home);
// routers.push({path: '*', component: _404 });

export default routers;
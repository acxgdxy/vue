// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
// import router from './router/index'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter)
//自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })

Vue.directive('theme', {
  bind(el, binding, vnode){
    let width = window.innerWidth;
    if (width >= 1200) {
      el.style.maxWidth = "1140px";
    }
    else if(width >= 992){
      el.style.maxWidth = '960px';
    }


    el.style.background = "#6677cc";
    el.style.padding = '20px';

  }
})

// //全局自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
//
// Vue.filter("snippet",function(value){
//   return value.slice(0,50) + "...";
// })

/* eslint-disable no-new */


//创建路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router

})

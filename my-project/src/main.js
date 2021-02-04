// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//利用npm install vue --save 来安装vue 然后在入口文件中导入，这样下面就可以进行实例化了
import Vue from 'vue'
// 关于app这个组件的代码被封装起来放到一个其他的文件夹中，保证入口main.js中代码很简介
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
     App,
     },
  template: '<App/>'
})

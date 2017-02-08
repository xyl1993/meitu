// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app.vue'
import router from './router/index.js'

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})

// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true;
Vue.config.ignoredElements = [
  'my-custom-web-component', 'another-web-component'
]
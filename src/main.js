// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import underscore from 'vue-underscore';

Vue.config.productionTip = false
Vue.prototype.$hostname = 'http://logger.test/api/v1';
Vue.use(underscore);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/iconfont.css'
import mavonEditor from 'mavon-editor';

import 'mavon-editor/dist/css/index.css'
import {post,fetch,patch,put,del} from './request/http'
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.config.productionTip = false
document.title = '纳兰词'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import Button from '@/components/Button';

Vue.config.productionTip = false;
Vue.component('Button', Button);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

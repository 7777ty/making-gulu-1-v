import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import gbutton from '@/components/gbutton.vue';
import icon from '@/components/icon.vue';
import ggroup from '@/components/ggroup.vue';



Vue.config.productionTip = false;
Vue.component('gbutton', gbutton);
Vue.component('icon',icon);
Vue.component('ggroup',ggroup);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

//单元测试
{
    console.log(gbutton);
}

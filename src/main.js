import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        filters: {
            grayscale: 0,
            sepia: 0,
            saturate: 100,
            hueRotate: 0,
            invert: 0,
            opacity: 100,
            brightness: 100,
            contrast: 100,
            blur: 0
        }
    },
    mutations: {
        updateFilterVal(state ,{filterName, newVal}) {
            if(!state.filters[filterName] === undefined) throw Error('Wrong filter name!');
            state.filters[filterName] = newVal;
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

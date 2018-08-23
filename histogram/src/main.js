import Vue from 'vue'
import App from './App.vue'
import Histogram from './Histogram.vue'

var VueD3 = require('vue-d3')
Vue.use(VueD3)

Vue.component('histogram', Histogram);

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import Histogram from './Histogram.vue'

Vue.component('histogram', Histogram);

new Vue({
  el: '#app',
  render: h => h(App)
})

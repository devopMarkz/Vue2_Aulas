import Vue from 'vue'
import App from './App.vue'
import HeaderGeral from './components/HeaderGeral.vue'

Vue.component('HeaderGeral', HeaderGeral);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

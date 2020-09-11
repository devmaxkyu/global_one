import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import {Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { Splitter, PanelBar, TabStrip , LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'

Vue.config.productionTip = false
Vue.component(Calendar.name, Calendar)
Vue.use(LayoutInstaller)
Vue.use(ButtonsInstaller)

new Vue({  
  router,  
  render: h => h(App),
  components: {
    Calendar, Button, Splitter, PanelBar, TabStrip 
  }  
}).$mount('#app')

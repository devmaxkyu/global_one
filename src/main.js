import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import {Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { Splitter, PanelBar, TabStrip , LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
import { DropDownList, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { TreeView, TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'

Vue.config.productionTip = false
Vue.component(Calendar.name, Calendar)
Vue.use(LayoutInstaller)
Vue.use(ButtonsInstaller)
Vue.use(DropdownsInstaller)
Vue.use(TreeViewInstaller)


new Vue({  
  router,  
  render: h => h(App),
  components: {
    Calendar, Button, Splitter, PanelBar, TabStrip, DropDownList, TreeView
  }  
}).$mount('#app')

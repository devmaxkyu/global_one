import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
// import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import {Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { Splitter, PanelBar, TabStrip , LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
import { DropDownList, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { TreeView, TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'
import Vuex from 'vuex'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { Input } from '@progress/kendo-vue-inputs';
var _ = require('lodash');

Vue.config.productionTip = false
// Vue.component(Calendar.name, Calendar)
Vue.use(LayoutInstaller)
Vue.use(ButtonsInstaller)
Vue.use(DropdownsInstaller)
Vue.use(TreeViewInstaller)
Vue.use(Vuex)
Vue.component('k-input', Input);
const requireComponent = require.context(
  // The relative path of the components folder
  './views/tabs',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)


requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})


const store = new Vuex.Store({
  state: {
    leftMenuCollapsed: false,
    activeTabName: "Main",
    tabNameList: ["Main"]
  },
  mutations: {
    toggleLeftMenuCollapsed (state) {
      state.leftMenuCollapsed = !state.leftMenuCollapsed
    },
    setActiveTabName(state, tabName){
      let index = _.findIndex(state.tabNameList, function(t) { return t == tabName; });
      if(index == -1){
          state.tabNameList.push(tabName)
      }
      state.activeTabName = tabName
    },
    addTabName(state, tabName){
      state.tabNameList.push(tabName)
    },
    removeTabName(state, tabName){
      let index = _.findIndex(state.tabNameList, function(t) { return t == tabName; });
      if(index > 0){
        if(state.activeTabName == tabName){
          state.activeTabName = state.tabNameList[index - 1]
        }
        let clonedTabList = state.tabNameList.slice()
        _.pullAt(clonedTabList, index)
        state.tabNameList = clonedTabList
      }
    },
    removeAllTabName(state){
      if(state.tabNameList.length > 1){
        state.tabNameList = _.pullAt(state.tabNameList, 0)
        state.activeTabName = state.tabNameList[0]
      }
    }
  }
})



new Vue({  
  router,  
  render: h => h(App),
  store: store,
  components: {
    Button, Splitter, PanelBar, TabStrip, DropDownList, TreeView
  }  
}).$mount('#app')

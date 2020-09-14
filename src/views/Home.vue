<template>
  <div class="home" ref="spliterContainer">
      <kendo-splitter style="height:100%" :panes="panes" :orientation="'horizontal'">
        <div>
            <!-- <SideNav v-on:select-menu="onChangeMenu"/> -->
            <SideNavNew v-on:menu-change="onMenuChange" v-on:submenu-change="onSubMenuChange"/>
        </div>
        <div>
            <TabView :value="selectedTabName"/>
            <!-- <kendo-tabstrip
              :value="currentTabName"
              :dataTextField="'tabName'" 
              :dataImageUrlField="'imageUrl'"
              :dataContentField="'content'"
              :dataContentUrlField="'contentUrl'"
              :dataSource="tabSource"
            >
            </kendo-tabstrip> -->
        </div>
      </kendo-splitter>    
  </div>
</template>

<script>
// @ is an alias to /src
import SideNavNew from '@/components/SideNavNew.vue'
import TabView from '@/views/TabView.vue'

export default {
  name: 'Home',
  data () {
      return {
          selectedTabName: "home",
          // currentTabName: "Home",
          panes: [ { collapsible: true, collapsedSize: "32px", max: "30%", size:"20%", min: "44px", scrollable: false, resizable: true }, {} ],
          // tabSource: [
          //   { tabName: 'Home', content: "Logo Image", imageUrl: "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png"},
          //   { tabName: 'Sub link 1', contentUrl: "http://localhost:8080/about"}
          // ]
      }
  },
  methods: {
    onMenuChange: function(value){
      console.log('menu', value)
      // check if already opened
      // let tabName = `Tab${value}`
      // let existing = this.tabSource.find(it=> it.tabName === tabName)
      // if(!existing){
      //   // append tab if no opened
      //   this.tabSource.push({ tabName: tabName, content: `Tab${value} content`})
      // }
    },
    onSubMenuChange: function(value){
      console.log('sub menu', value)
      this.selectedTabName = value
    }
  },
  components: { SideNavNew, TabView }
}
</script>

<style scoped>
  .home {
    flex: 1;
  }
  .home >>> .k-tabstrip-wrapper {
    height:100%;
  }

  .k-state-collapsed >>> span.k-panelbar-expand {
    display: none !important;
  }

  .k-state-collapsed >>> span.k-panelbar-collapse {
      display: none !important;
  }
</style>
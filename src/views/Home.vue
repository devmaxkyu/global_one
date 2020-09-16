<template>
  <div class="home" ref="spliterContainer">
      <kendo-splitter ref=splitter style="height:100%" :panes="panes" :orientation="'horizontal'">
        <div>
            <SideNavContainer/>
        </div>
        <div>
            <TabView/>
        </div>
      </kendo-splitter>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNavContainer from '@/components/SideNavContainer.vue'
import TabView from '@/views/TabView.vue'

// import { EventBus } from '@/helpers/EventBus.js'

// Listen for the i-got-clicked event and its payload.
// EventBus.$on( 'toggle-spliter-collapse', () => {
//   console.log(`Oh, that's nice. It's gotten clicks! :)`)
// });

export default {
  name: 'Home',
  // data () {
  //     return {
  //         panes: [ { collapsible: true, collapsedSize: "32px", max: "30%", size:"20%", min: "44px", scrollable: false, resizable: true }, {} ],
  //     }
  // },
  // methods: {

  // },
  components: { SideNavContainer, TabView },
  computed: {
    panes() {
      return [ { collapsible: this.$store.state.leftMenuCollapsed, collapsedSize: "32px", max: "30%", size:"20%", min: "44px", scrollable: false, resizable: true }, {} ]
    }
  }
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
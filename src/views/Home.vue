<template>
  <div class="home" ref="spliterContainer">
      <kendo-splitter style="height:100%" :panes="panes" :orientation="'horizontal'">
        <div>
            <SideNav/>
        </div>
        <div>
            <kendo-tabstrip>
                <ul>
                    <li class="k-state-active">
                        <span class="k-icon k-i-home"></span>
                    </li>
                </ul>
                <div>
                    <p>Here Logo Image</p>
                </div>
            </kendo-tabstrip>
        </div>
      </kendo-splitter>    
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '@/components/SideNav.vue'

export default {
  name: 'Home',
  data () {
      return {
          panes: [ { collapsible: true, collapsedSize: "5%", max: "30%", size:"20%", min: "5%", scrollable: false, resizable: true }, {} ]
      }
  },
  components: { SideNav }
}
</script>

<style scoped>
  .home {
    flex: 1;
  }
</style>
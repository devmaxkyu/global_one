<template>
  <div class="home" ref="spliterContainer">
      <kendo-splitter style="height:100%" :panes="panes" :orientation="'horizontal'">
        <div>
            <kendo-panelbar  expandMode="single">
                <li>
                    GLOBAL ONE
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>              
                <li>
                    My Menu
                    <ul>
                        <li>Sub Item 1
                            <ul>
                                <li>Sub Item 1.1</li>
                                <li>Sub Item 1.2</li>
                                <li>Sub Item 1.3</li>
                            </ul>
                        </li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Forwarder
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Warehouse
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Settlement
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Accounting
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Management Information
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    System Management
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    Customer Service
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>
                <li>
                    EDI Management
                    <ul>
                        <li>Sub Item 1</li>
                        <li>Sub Item 2</li>
                        <li>Sub Item 3</li>
                    </ul>
                </li>                                                                                                                                              
            </kendo-panelbar>          
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
export default {
  name: 'Home',
  data () {
      return {
          panes: [ { collapsible: true, collapsedSize: "5%", max: "30%", size:"20%", min: "5%", scrollable: false, resizable: true }, {} ]
      }
  }
}
</script>

<style scoped>
  .home {
    flex: 1;
  }
</style>
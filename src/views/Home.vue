<template>
  <div class="home">
      <kendo-splitter :panes="panes" :orientation="'horizontal'">
        <div>Side Navigation</div>
        <div>Here Content</div>
      </kendo-splitter>    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
      return {
          panes: [ { collapsible: true, collapsedSize: "5%", max: "30%", size:"20%", min: "5%" }, {} ]
      }
  }
}
</script>

<style scoped>
  .home {
    flex: 1;
  }
</style>
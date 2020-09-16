<template>
    <div class="tab-view">
        <div class="tab-nav">
            <div class="tab-links" ref="links" id="tab_links">            
                <TabLink v-for="item in tabNameList_" :key="item" :closeable="'Main'!=item" :value="item" :isActive="item==activeTabName"/>
            </div>
            <span style="margin-right:10px" v-on:click="onCloseAllTabs" class="k-icon k-i-close"></span>
        </div>
        <div class="content" ref="container" id="tab_container">
            <component v-bind:is="activeTabName"></component>
        </div>
    </div>
</template>

<script>
import TabLink from '@/components/TabLink.vue'

export default {
    name: "TabView",
    components: { TabLink },
    computed: {
        activeTabName(){
            return this.$store.state.activeTabName
        },
        tabNameList_(){
            console.log(this.$store.state.tabNameList)
            return this.$store.state.tabNameList
        }
    },
    methods:{
        onCloseAllTabs(){
            this.$store.commit('removeAllTabName')
        }
    }
}
</script>

<style scoped>
    .tab-nav {
        display: flex;
        border-bottom: 1px solid red;
        align-items: center;
    }
    .tab-links {
        display: flex;
        
        flex:1;
    }
    .tab-links >>> .active{
        color: blue !important;
        border: 1px solid red;
        border-bottom: 1px solid white;
    }
    .tab-view {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .content {
        flex:1;
        display: flex;
    }
   * >>> .tab-content{
       display: flex;
       flex: 1;
   }
   .k-i-close:hover{
       color:red;
   }
</style>
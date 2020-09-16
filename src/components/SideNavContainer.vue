<template>
    <div class="menu-container">
        <div class="menu-preview">
            <SideNavMenuItem v-on:select-menu="onMenuChange" :value="selectedMenu"/>
            <MenuPreview v-on:select-submenu="onSubMenuChange" :value="selectedMenu"/>
        </div>
        <div class="menu-list">
            <SideNavMenuItem v-on:select-menu="onMenuChange" value="Menu Item 1"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" value="Menu Item 2"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" value="Menu Item 3"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" value="Menu Item 4"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" value="Menu Item 5"/>
        </div>
    </div>
</template>

<script>
import SideNavMenuItem from '@/components/SideNavMenuItem.vue'
import MenuPreview from '@/components/MenuPreview.vue'

export default {
    name: "SideNavContainer",
    data() {
        return {
            selectedMenu: "Menu Item 1"
        }
    },
    components: { SideNavMenuItem, MenuPreview },
    methods: {
        onMenuChange: function(value){
            this.selectedMenu = value
        },
        onSubMenuChange: function(value){
            this.$store.commit('setActiveTabName', value)
        }
    }
}
</script>

<style scoped>
    .menu-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .menu-preview {
        flex: 1;
        display:flex;
        flex-direction: column;
    }

    .menu-list {
        display: flex;
        flex-direction: column;
    }
</style>
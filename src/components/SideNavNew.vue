<template>
    <div class="menu-container">
        <div class="menu-preview">
            <SideNavMenuItem v-on:select-menu="onMenuChange" :label="selectedMenu"/>
            <MenuPreview :label="selectedMenu"/>
        </div>
        <div class="menu-list">
            <SideNavMenuItem v-on:select-menu="onMenuChange" label="Menu Item 1"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" label="Menu Item 2"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" label="Menu Item 3"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" label="Menu Item 4"/>
            <SideNavMenuItem v-on:select-menu="onMenuChange" label="Menu Item 5"/>
        </div>
    </div>
</template>

<script>
import SideNavMenuItem from '@/components/SideNavMenuItem.vue'
import MenuPreview from '@/components/MenuPreview.vue'

export default {
    name: "SideNavNew",
    data() {
        return {
            selectedMenu: "Menu Item 1"
        }
    },
    components: { SideNavMenuItem, MenuPreview },
    methods: {
        onMenuChange: function(label){
            this.selectedMenu = label
            this.$emit('menu-change', label)
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
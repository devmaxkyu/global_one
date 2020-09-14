<template>
    <div class="preview-box">
        <div class="bar">{{value}}</div>
        <div class="tree">
            <kendo-treeview>
                <li data-expanded="true">
                    <span class="k-icon k-i-folder"></span>
                    Sub Menus
                    <ul>
                        <li @click="$emit('select-submenu', 'about')"><span class="k-icon k-i-html5"></span>about component</li>
                        <li @click="$emit('select-submenu', 'contacts')"><span class="k-icon k-i-html5"></span>contacts component</li>
                        <li @click="$emit('select-submenu', 'portfolio')"><span class="k-icon k-i-html5"></span>portfolio component</li>
                    </ul>
                </li>
            </kendo-treeview>            
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuPreview",
    props: ["value"],
    methods: {
        onClick: function(e) {
            console.log('tree item', e)
        }
    }
}
</script>

<style scoped>
    .preview-box {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
    .bar {
        width:32px;
        min-width:32px;
        justify-content: center;
        align-items: center;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        background-color: #e8e8e8;;
    }
    .tree {
        flex:1;
    }
</style>
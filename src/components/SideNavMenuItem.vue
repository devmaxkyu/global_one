<template>
    <div class="menu-item">
        <span class="k-icon k-i-pin icon-font-size"></span>
        <div class="link">
            <kendo-button @click="$emit('select-menu', value)" style="width:100%; justify-content: flex-start" class="k-bare">{{value}}</kendo-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideNavMenuItem",
    props: ["value"]
}
</script>

<style scoped>
    .menu-item {
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .link {
        font-size: 1rem;
        flex: 1;
        background-color:#628bd069;
    }
    .icon-font-size {
        font-size: 32px;
        background-color: #628bd0;
    }
</style>
<template>
    <div class="preview-box">
        <div class="bar">{{label}}</div>
        <div class="tree">Tree Sub Menu</div>
    </div>
</template>

<script>
export default {
    name: "MenuPreview",
    props: ["label"]
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
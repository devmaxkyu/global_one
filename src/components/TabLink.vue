<template>
    <div v-on:click="onClick" v-bind:class="{ active: isActive }" class="tab-link">{{value}}<span v-if="closeable" v-on:click.stop="onClose" class="k-icon k-i-close"></span></div>
</template>

<script>
export default {
    name: "TabLink",
    props: ["value", "isActive", "closeable"],
    methods: {
        onClick: function(){
            this.$store.commit("setActiveTabName", this.value)
        },
        onClose: function(){
            this.$store.commit("removeTabName", this.value)
        }
    }
}
</script>

<style scoped>
    .tab-link {
        color: grey;
        padding: 5px;
        cursor: pointer;
        margin-bottom: -1px;
    }
    .k-i-close:hover {
        color:red !important;
    }
</style>
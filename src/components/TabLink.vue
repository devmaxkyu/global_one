<template>
    <div @click="onClick" class="tab-link active" :tab-index="index">{{value}}</div>
</template>

<script>
export default {
    name: "TabLink",
    props: ["value", "index"],
    methods: {
        onClick: function(e){
            let tabIndex = parseInt(e.target.getAttribute('tab-index'))
            let tabContainer = document.getElementById("tab_container")
            let tabLinks = document.getElementById("tab_links")
            
            tabContainer.children.forEach((element, index) => {
                if(index != tabIndex){                    
                    element.classList.remove('active')
                    tabLinks.children[index].classList.remove('active')
                }
            });

            e.target.classList.add('active')
            tabContainer.children[tabIndex].classList.add("active")
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
</style>
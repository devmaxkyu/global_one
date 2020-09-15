<template>
    <div class="tab-view">
        <div class="tab-links" ref="links" id="tab_links"></div>
        <div class="content" ref="container" id="tab_container"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import TabLink from '@/components/TabLink.vue'
import About from '@/views/tabs/About.vue'
import Contacts from '@/views/tabs/Contacts.vue'
import Portfolio from '@/views/tabs/Portfolio.vue'
import Main from '@/views/tabs/Main.vue'

export default {
    name: "TabView",
    props: ["value"],
    mounted(){
        let ComponentClass = Vue.extend(Main)
        let instance = new ComponentClass()
        instance.$mount()
        this.$refs.container.appendChild(instance.$el)

        ComponentClass = Vue.extend(TabLink)
        instance = new ComponentClass({propsData: {value: "home", index: 0}})
        instance.$mount()
        this.$refs.links.appendChild(instance.$el)
    },
    watch: {
        value: function(newVal, oldVal) { // watch it
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            let ComponentClass = null
            switch(newVal){
                case "about":
                    ComponentClass = Vue.extend(About)
                    break
                case "contacts":
                    ComponentClass = Vue.extend(Contacts)
                    break
                case "portfolio":
                    ComponentClass = Vue.extend(Portfolio)
                    break
                default:
                    ComponentClass = Vue.extend(Main)
            }
            
            let instance = new ComponentClass()
            instance.$mount()
            console.log('tab change value', newVal)            
            let noAppend = false
            let activeIndex = null
            this.$refs.container.children.forEach((element, index) => {
                let name = element.getAttribute("name")
                console.log('element style', name)
                if(name == newVal){
                    activeIndex = index
                    noAppend = true
                }else{
                    element.classList.remove('active')
                    this.$refs.links.children[index].classList.remove('active')
                }
            });

            if(!noAppend){
                this.$refs.container.appendChild(instance.$el)
                // Tab Links
                ComponentClass = Vue.extend(TabLink)
                instance = new ComponentClass({propsData: {value: newVal, index: this.$refs.container.children.length - 1}})
                instance.$mount()
                this.$refs.links.appendChild(instance.$el)
            }else{
                this.$refs.container.children[activeIndex].classList.add('active')
                this.$refs.links.children[activeIndex].classList.add('active')
            }
        }
    }
}
</script>

<style scoped>
    .tab-links {
        display: flex;
        border-bottom: 1px solid red;
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
    .content >>> .active {        
        display: flex !important;
    }
   * >>> .tab-content{
       display: none;
       flex: 1;
   }
</style>
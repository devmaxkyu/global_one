<template>
    <kendo-panelbar  expandMode="single">
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> GLOBAL ONE
            <ul>
                <li v-on:click="$emit('select-menu', 1)">Test Item 1</li>
                <li v-on:click="$emit('select-menu', 2)">Test Item 2</li>
                <li v-on:click="$emit('select-menu', 3)">Test Item 3</li>
            </ul>
        </li>              
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> My Menu
            <ul>
                <li>Sub Item 1
                    <ul>
                        <li>Sub Item 1.1</li>
                        <li>Sub Item 1.2</li>
                        <li>Sub Item 1.3</li>
                    </ul>
                </li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Forwarder
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Warehouse
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Settlement
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Accounting
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Management Information
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> System Management
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> Customer Service
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
            <span class="k-icon k-i-pin icon-font-size"></span> EDI Management
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>                                                                                                                                              
    </kendo-panelbar>        
</template>

<script>
export default {
    name: 'SideNav',
    methods: {
        onClick: function(e){
            console.log(e)
        }
    }
}
</script>

<style scoped>
/* * >>> .k-link {
    padding: 0 !important;
} */
.icon-font-size {
    font-size: 28px;
    margin-right: 8px;
}
</style>
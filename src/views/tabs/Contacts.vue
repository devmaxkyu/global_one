<template>
    <div class="tab-content" name="contacts">
        <Grid :style="{height: '450px'}"
            :data-items="products"
            :filterable="true"
            :filter="filter"
            @filterchange="filterChange"
            :pageable="true"
            :skip="skip"
            :take="take"
            :total="total"
            :columns="columns"
            @pagechange="pageChangeHandler">
        </Grid>
    </div>    
</template>

<script>
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';

export default {
    name: "Contacts",
    data: function () {
        return {
            dataItems: [],
            skip: 0,
            take: 10,
            filter: {
                logic: "and",
                filters: [
                    { field: "UnitPrice", operator: "neq", value: 2 }
                ]
            },
            columns: [
                { field: 'ProductID', filterable:false, title: 'ID', width:'50px'},
                { field: 'ProductName', title: 'Product Name'},
                { field: 'FirstOrderedOn', filter:'date', title: 'FirstOrderedOn'},
                { field: 'UnitPrice', filter:'numeric', title: 'UnitPrice'},
                { field: 'Discontinued', filter:'boolean', title: 'Discontinued'}
            ]
        };
    },
    computed: {
        result: {
            get: function() {
                return this.dataItems.slice(this.skip, this.take + this.skip);
            }
        },
        total () {
            return this.dataItems ? this.dataItems.length : 0;
        },
        products: function() {
            return filterBy(this.result, this.filter);
        }
    },
    methods: {
        pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]            
            const firstOrderedOn = [new Date(1990, 3, 23), new Date(2010, 8, 8), new Date(2002, 9, 13), new Date(2000, 1, 1), new Date(1988, 1, 30), new Date(2017, 9, 9), new Date(2011, 5, 1), new Date(2001, 11, 23), new Date(1999, 9, 18)]
            const discontinued = [true, false]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                FirstOrderedOn: firstOrderedOn[Math.floor(Math.random() * firstOrderedOn.length)],
                Discontinued: discontinued[Math.floor(Math.random() * discontinued.length)]
            }));
        },
        filterChange: function(ev) {
            this.filter = ev.filter;
        },
        // filterRender: function(h, defaultRendering)        {
        //     return defaultRendering;
        // }
    },
    mounted() {
        this.dataItems = this.createRandomData(1000);
    },
    components: { Grid }
}
</script>
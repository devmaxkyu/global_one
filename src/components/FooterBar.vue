<template>
    <div class="footer">
        <div class="options">
            <kendo-dropdownlist :autoWidth="true" v-model="optionValue"
                        :data-source="optionSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'">
            </kendo-dropdownlist>
            <kendo-button class="k-bare" icon="reset"></kendo-button>
            <kendo-button class="k-bare" icon="undo"></kendo-button>
            <kendo-dropdownlist style="width: auto" v-model="countryCode"
                        :data-source="countrySourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'">
            </kendo-dropdownlist>
        </div>
        <p>COPYRIGHT@2008 SERVERSIDE. ALL RIGHT RESERVED</p>
    </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
      return {
            optionValue: "0",
            optionSourceArray: [
                { text: 'Option', value: '0' },
                { text: 'Small', value: '1' },
                { text: 'Medium', value: '2' },
                { text: 'Large', value: '3' },
                { text: 'X-Large', value: '4' },
                { text: '2X-Large', value: '5' }
            ],
            countryCode: "0",
            countrySourceArray: [
                { text: 'China', value: '0' },
                { text: 'Korea', value: '1' },
                { text: 'Unite State', value: '2' },
            ],
        }
  }
}
</script>

<style scoped>
    .footer {
        display: flex;
        font-size: 0.7rem;
        align-items: center;
        justify-content: center;
    }
    .options {
        position: absolute;
        left: 20px;
    }
</style>
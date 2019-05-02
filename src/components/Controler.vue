<template>
    <div class="slider-wrapper">
        <p>{{labelText}}</p>
        <el-slider v-model="value" @input="handleOnInput"></el-slider>
    </div>
</template>

<script>
export default {
    props: {
        text: {
			type: String,
            default: "FilterName"
		},
		initValue: {
			type: Number,
			default: 0
		}
    },
    data() {
        return {
			value: this.initValue,
			labelText: this.text
        };
    },
    methods: {
        handleOnInput() {
            console.log(`${this.value}\t Controler-${this.text}`);
            // update the filter value state.
            this.$root.store.updateFilterVal(this.text, this.value);
        }
    }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
    margin: 30px 0;
}
</style>

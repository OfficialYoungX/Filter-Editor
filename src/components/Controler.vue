<template>
    <div class="slider-wrapper">
        <p class="controler__title">{{labelText}}</p>
        <el-slider v-model="value" @input="handleOnInput"></el-slider>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        labelText: {
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
            label: this.labelText
        }
    },
    methods: {
        ...mapMutations({
            updateFilterVal: 'updateFilterVal'
        }),
        handleOnInput() {
            // eslint-disable-next-line
            console.log(`${this.value}\t Controler-${this.label}`);
            // update the filter value state.
            // this.$store.commit('updateFilterVal', {filterName: this.label, newVal: this.value});
            this.updateFilterVal({filterName: this.label, newVal: this.value});
        }
    }
};
</script>

<style lang="scss" scoped>
@import './../assets/scss/_var.scss';
.slider-wrapper {
    margin: 30px 0;
}

.controler__title {
    color: $blue;
    font-weight: bold;
}
</style>

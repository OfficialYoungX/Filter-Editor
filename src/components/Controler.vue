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
            default: "text"
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
            this.$emit("on-input", [this.value, this.labelText]);
        }
    }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
    margin: 30px 0;
}
</style>

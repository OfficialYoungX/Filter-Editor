<template>
    <div class = 'controler-slide' >
        <Controler v-for="(filter, index) in filters" :text="filter[0]" :initValue="filter[1]" :key="index"  @on-input="handleOnInput"/>
    </div>
</template>

<script>
import Controler from "./Controler";

export default {
    components: {
        Controler
    },
    data() {
        return {
            filters: [["grayscale", 0], ["sepia", 0], ["saturate",100], ["hueRotate",0], ["invert", 0], ["opacity",100], ["brightness",100], ["contrast",100], ["blur", 0]],
            isHovered: false
        };
    },
    methods: {
        handleOnInput(val) {
            this.$emit("on-control", val);
        }
    }
};
</script>

<style lang="scss" scoped>
.controler-slide {
    padding: 1rem 2.5rem;
}
</style>

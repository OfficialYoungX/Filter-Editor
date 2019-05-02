<template>
    <div class = 'controler-slide' >
        <Controler v-for="(val, name) in filters" :text="name" :initValue="val" :key="name"/>
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
            filters: this.$root.store.state.filters,
            isHovered: false
        };
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.controler-slide {
    padding: 1rem 2.5rem;
    // background: red;
}
</style>

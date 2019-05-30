<template>
    <div id="app">
        <div class="app__head">
            <img class="head__logo" src="./assets/logo.svg" alt="logo">
            <span class="head__title">
               <strong class="head__title--strong">Filter Editor</strong> 
               A web filter editor application baseed on 
               <strong>CSS-Filter</strong>
            </span>
        </div>
        <div class="workshop-wrapper">
            <div class="upload-wrapper">
                <Uploader :filters="controlVal" @on-upload="handleOnUpload"/>
            </div>
            <div class="controler-wrapper">
                <ControlSlide @on-control="handleOnControl"/>
            </div>
        </div>
    </div>
</template>

<script>
import ControlSlide from "./components/ControlSlide";
import Uploader from "./components/Uploader";

export default {
    name: "app",
    components: {
        Uploader,
        ControlSlide
    },
    data() {
        return {
            isUpload: false,
            controlVal: this.$root.store.state.filters,
            isHovered: false
        };
    },
    methods: {
        handleOnUpload() {
            this.isUpload = true;
        },
        handleOnControl(val) {
            this.controlVal = val;
        },
        handleMouseover() {
            this.isHovered = true;
        },
        handleMouseout() {
            this.isHovered = false;
        }
    }
};
</script>

<style lang="scss">
@import './assets/scss/_var.scss';
@import './assets/scss/_shadow-border.scss';

html {
    width: 100%;
    height: 100%;
    font-size: 16px;
}
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black;
    width: 100%;
    height: 100%;
}

.app__head {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    // box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.05);
    @include shadow-border(0, 2px);
    z-index: 10;
    background: $white;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    .head__logo {
        display: inline-block;
        height: 2.5rem;
        // animation: an_hue_rotate 2s linear forwards infinite;
        // @keyframes an_hue_rotate {
        //     from {
        //         filter: hue-rotate(0);
        //     }
        //     to {
        //         filter: hue-rotate(360deg);
        //     }
        // }
    }
    .head__title {
        text-align: center;
        font-weight: normal;
        color: grey;
        margin-left: 1.5rem;
        .head__title--strong {
            color: $blue; 
        }
    }
}

.workshop-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.upload-wrapper {
    width: 100%;
    // height: calc(100% - 6.5rem);
    margin: 1rem;
    margin-top: 6.5rem;
    @include shadow-border(-5px,5px);

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}
.controler-wrapper {
    width: 24rem;
    margin: 1rem;
    margin-top: 6.5rem;
    margin-right: .5rem;
    @include shadow-border(-5px,5px);

    overflow: hidden;
    overflow-y: scroll;
    background: $white;

    // hide the scroll bar
    &::-webkit-scrollbar {
        width: 0px !important;
    }
}
</style>

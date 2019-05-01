<template>
    <div id="app">
        <div class="app__head">
            <img class="head__logo" src="./assets/logo.png" alt="logo">
            <h1 class="head__title">
                Css Filter Editor
            </h1>
        </div>
        <div class="workshop-wrapper">
            <div class="upload-wrapper">
                <Uploader :filterValue="controlVal" @on-upload="handleOnUpload"/>
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
            controlVal: [],
            isHovered: false,
            notUse: 'old'
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
// variable
$black: #000000;
$gray: #ececec;
$white: #ffffff;

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

    overflow: hidden;
}

.app__head {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);
    z-index: 10;
    background: $white;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    .head__logo {
        display: inline-block;
        height: 2.5rem;
    }
    .head__title {
        text-align: center;
        font-weight: lighter;
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
    height: 100%;
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
.controler-wrapper {
    width: 24rem;
    margin: 1rem;
    margin-top: 6.5rem;
    margin-right: 0;
    box-shadow: -2px -2px 10px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    overflow-y: scroll;
    background: $white;
    border-radius: 4px 0 0 4px;

    // hide the scroll bar
    &::-webkit-scrollbar {
        width: 0 !important;
    }
}
</style>

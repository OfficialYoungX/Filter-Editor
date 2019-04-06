<template>
    <div id="app" :class="{'app__background--uploaded': isUpload}">
        <div class="upload-wrapper">
            <Uploader :filterValue="controlVal" @on-upload="handleOnUpload"/>
        </div>
        <div class="controler-wrapper">
            <ControlSlide @on-control="handleOnControl"/>
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
            controlVal: 0
        };
    },
    methods: {
        handleOnUpload() {
            this.isUpload = true;
        },
        handleOnControl(val) {
            console.log(`Vue:${val}`);
            this.controlVal = val;
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
    color: #2c3e50;

    width: 100%;
    height: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;

    overflow: hidden;
}
.app__background--uploaded {
	transition: background 0.6s linear;
    background: $black;
}
.upload-wrapper {
    width: calc(100% - 24rem);
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
.controler-wrapper {
    width: 20rem;
    margin: 1rem;
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.249);
    overflow: hidden;
    overflow-y: scroll;
    background: $white;
}

.controler-wrapper,
.upload-wrapper {
    border-radius: 10px;
}
</style>

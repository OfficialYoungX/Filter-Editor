<template>
    <div class="uploader-wrapper">
        <el-upload
            :drag="true"
            :action="actionURL"
            :on-change="handleOnChange"
            :show-file-list="false"
            v-show="!isUpload"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">上传 svg / png / jpg / jpeg /...</div>
        </el-upload>
        <!-- stketch board -->
        <img
            v-show="isUpload"
            :style="{width:`100vmin`, filter: `${filterParameter}`}"
            :src="imageURL"
        >
    </div>
</template>

<script>
export default {
    props: {
        filterValue: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            actionURL: "https://jsonplaceholder.typicode.com/posts/",
            imageURL: "",
            isUpload: false,
            filters: {
                grayscale: 0,
                sepia: 0,
                saturate: 100,
                hueRotate: 0,
                invert: 0,
                opacity: 100,
                brightness: 100,
                contrast: 100,
                blur: 0
            }
        };
    },
    watch: {
        filterValue: function() {
            this.filters[this.filterValue[1]] = this.filterValue[0];
        }
    },
    computed: {
        filterParameter() {
            const filters = this.filters;
            return `grayscale(${filters.grayscale}%)
             sepia(${filters.sepia}%) 
             saturate(${filters.saturate}%)
             hue-rotate(${(filters.hueRotate / 100) * 360}deg) 
             invert(${filters.invert}%) 
             opacity(${filters.opacity}%) 
             brightness(${filters.brightness / 100}) 
             contrast(${filters.contrast}%) 
             blur(${filters.blur}px)`;
            // return '';
        }
    },
    methods: {
        handleOnChange(file, fileList) {
            this.imageURL = window.URL.createObjectURL(file.raw);
            this.isUpload = true;
            this.$emit("on-upload", true);
        }
    }
};
</script>

<style lang="scss" scoped>
.uploader-wrapper {
    width: 100%;
    height: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


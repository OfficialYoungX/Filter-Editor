<template>
    <div class="uploader-wrapper" @paste="handleOnpaste">
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
            class="unploader__sketch-board"
            v-show="isUpload"
            :style="{filter: `${filterParameter}`}"
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
        }
    },
    methods: {
        handleOnChange(file) {
            this.imageURL = window.URL.createObjectURL(file.raw);
            // console.log(file.raw);
            this.isUpload = true;
            this.$emit("on-upload", true);
        },
        /**
         * @param {EventObj} e
         */
        getImageURLFromPaste(e) {
            try{
                if(!(e.clipboardData && e.clipboardData.items)) {
                    throw new Error('Paste Fail');
                }
            }catch (e){
                return;
            }
            // 只取最近的一个文件
            const imageRaw = e.clipboardData.items[0].getAsFile(); // 得到粘贴板上的图片的缓存路径
            const imageURL = URL.createObjectURL(imageRaw); // 通过缓存路径创建图片引用
            return imageURL;
        },
        handleOnpaste(e) {
            this.imageURL = this.getImageURLFromPaste(e);
            this.isUpload = true;
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

.unploader__sketch-board {
    width: 100vmin;
    // object-fit: contain;
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
}
</style>


<template>
    <div class="uploader" @paste="handleOnpaste" @mousewheel="handleOnmouseWheel">
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
        <!-- clear button -->
        <!-- <span style="position: absolute; top:50%; left:20%;">Close X </span> -->
        <!-- stketch board -->
        <img
            class="uploader__sketch-board"
            v-show="isUpload"
            :src="imageURL"
            :style="{filter: CSSFilterVal, transform: `scale(${scale})`}"
        >
    </div>
</template>

<script>
export default {
    props: {
        filters: {
            type: Object,
            default: () => ({
                grayscale: 0,
                sepia: 0,
                saturate: 100,
                hueRotate: 0,
                invert: 0,
                opacity: 100,
                brightness: 100,
                contrast: 100,
                blur: 0
            })
        }
    },
    data() {
        return {
            actionURL: "https://jsonplaceholder.typicode.com/posts/",
            imageURL: "",
            isUpload: false,
            scale: 1,
            
        };
    },
    computed: {
        CSSFilterVal() {
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
            this.isUpload = true;
            this.$emit("on-upload", true);
        },
        getImageURLFromPaste(e) {
            try {
                if (!(e.clipboardData && e.clipboardData.items)) {
                    throw new Error("Paste Fail");
                }
            } catch (e) {
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
        },
        handleOnmouseWheel(e) {
            console.log(this.$store.state);
            this.zoomSketchBoard(e, 1.2);
        },
        zoomSketchBoard(e, alpha = 1.1) {
            let deltaY = e.deltaY;
            if(deltaY < 0) {
                this.scale /= alpha;
            }else {
                this.scale *= alpha;
            }
            this.scale = this.scale < 0.01 ? 0.01 : this.scale;
            this.scale = this.scale > 10 ? 10 : this.scale;
            // eslint-disable-next-line
            console.log(this.scale);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/ins/cssgram.scss';

.uploader {
    width: 100%;
    height: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    &__sketch-board {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }
}

.uploader__sketch-board{
    transition: transform 0.2s ease-out;
}

</style>


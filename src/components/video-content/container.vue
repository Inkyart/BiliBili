<!-- 视频与视频相关的容器 -->
<template>
    <v-video></v-video>
    <v-barrage></v-barrage>
</template>
<script>
import VVideo from './video' // 导入视频
import VBarrage from './barrage' // 导入弹幕输入框
export default {
    components: {
        VVideo,
        VBarrage
    }
}
</script>

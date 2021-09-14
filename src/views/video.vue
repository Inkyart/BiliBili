<!-- 视频页 -->
<template>
    <div class="video">
        <v-header></v-header>
        <v-content></v-content>
    </div>
</template>
<script>
import VHeader from '../components/head/index'
import VContent from '../components/video-content/index'
export default {
    components: {
        VHeader, VContent
    }
}
</script>
<style lang="scss" scoped></style>

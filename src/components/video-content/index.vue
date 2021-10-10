<!-- 视频页 内容 -->
<template>
    <div class="container">
        <div class="container-content">
            <div class="content-left">
                <div class="content-video-container">
                    <v-data></v-data>
                </div>
                <div class="content-common-container">
                    <v-common></v-common>
                </div>
            </div>
            <div class="content-right">
                <div class="content-issuer"><v-issuer></v-issuer></div>
                <div class="content-setting"><v-setting></v-setting></div>
                <div class="content-list"><v-list></v-list></div>
            </div>
        </div>
    </div>
</template>
<script>
import VIssuer from './issuer' // 导入 UP主 信息
import VList from './list' // 导入 视频推荐列表
import VSetting from './setting/setting' // 导入 弹幕设置
import VData from './data' // 导入视频
import VCommon from '../common/index' // 导入评论
export default {
    components: {
        VIssuer,
        VList,
        VSetting,
        VData,
        VCommon
    }
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    position: relative;
}
.container-content {
    width: 80%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    > div {
        // display: flex;
        // flex-flow: wrap row;
        min-height: 300px;
        position: relative;
    }
}
.content-left {
    width: 1200px;
    display: flex;
    flex-flow: nowrap column;
    align-items: flex-end;
    justify-content: flex-start;
    > .content-common-container,
    > .content-video-container{
        width: 1140px;
        display: flex;
        flex-flow: nowrap row;
        align-items: flex-start;
    }
    > .content-common-container{
        min-height: 2000px;
    }
}
.content-right {
    margin-left: 35px;
    width: 600px;
    display: flex;
    flex-flow: nowrap column;
    align-items: flex-start;
    position: relative;
}
.content-issuer,
.content-setting,
.content-list{
    position: relative;
    width: 100%;
}
</style>

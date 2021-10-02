<!-- 视频页 内容 -->
<template>
    <div class="container">
        <div class="container-content">
            <div class="content-left">
                <v-data></v-data>
                <v-common></v-common>
            </div>
            <div class="content-right">
                <v-issuer></v-issuer>
                <v-setting></v-setting>
                <v-list></v-list>
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
    flex-flow: nowrap row;
    justify-content: flex-end;
}
.content-right {
    margin-left: 35px;
    width: 600px;
    display: flex;
    flex-flow: nowrap column;
    align-items: flex-start;
}
</style>

<!-- 视频的数据 包含视频本身 -->
<template>
    <div class="data">
        <div class="data-head">
            <div class="data-head-title">
                <h2>
                    {{ title }}
                </h2>
            </div>
            <div class="data-head-data">
                <span class="data-playback">{{ playback }} 播放</span> ·
                <span class="data-barrage">{{ barrage }} 弹幕</span>
                <span class="data-date">{{ date }}</span>
            </div>
        </div>
        <v-video></v-video>
        <v-barrage></v-barrage>
        <div class="data-bottom">
            <div class="data-bottom-left">
                <div class="data-like"><i class="icons"></i>{{ like }}</div>
                <div class="data-coin"><i class="icons"></i>{{ coin }}</div>
                <div class="data-collect"><i class="icons"></i>{{ collect }}</div>
                <div class="data-forward"><i class="icons"></i>{{ forward }}</div>
            </div>
            <div class="data-bottom-right">
                <span>稿件投诉</span>
                <span>笔记</span>
                <span></span>
            </div>
        </div>
        <div class="data-introduction-container">
            <div class="data-text">{{ introduction }}</div>
            <div class="data-tag"></div>
        </div>
    </div>
</template>
<script>
import VVideo from './video'
import VBarrage from './barrage' // 导入弹幕输入框
export default {
    components: { VVideo, VBarrage },
    data () {
        return {
            title: 'xxxx', // 视频标题
            playback: 0, // 播放量
            barrage: 0, // 弹幕量
            date: (() => {
                const date = new Date()
                const year = date.getFullYear()
                const mon = date.getMonth()
                const day = date.getDate()
                const hour = date.getHours()
                const min = date.getMinutes()
                const sec = date.getSeconds()
                return `   ${year}-${mon}-${day}  ${hour}:${min}:${sec}`
            })(), // 日期
            like: 0, // 点赞数
            coin: 0, // 投币
            collect: 0, // 收藏
            forward: 0, // 转发
            introduction: 'xxxxxxx' // 简介
        }
    }
}
</script>
<style lang="scss" scoped>
.icons{
    display: block;
    width:30px;
    height:30px;
}
.data {
    width: 1400px;
    height: 800px;
    box-shadow: 0 0 3px 0 red;
}
.data-head {
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    .data-head-title {
        width: 100%;
        text-align: left;
    }
    .data-head-data {
        width: 100%;
        height: 30px;
        color: rgb(160, 160, 160);
        text-align: left;
        font-size: 14px;
        > span {
            margin-left: 5px;
        }
        > .data-date {
            margin-left: 15px;
        }
    }
}
.data-bottom {
    width: 100%;
    height: 40px;
    box-shadow: 0 0 2px 0 red;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
}
.data-bottom-left{
    width: 600px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 3px 0 red;
    > div {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        &:first-of-type ~ div{
            margin-left: 15px;
        }
    }
}
.data-bottom-right{
    width:300px;
    height: 40px;
    box-shadow: 0 0 3px 0 red;
}
</style>

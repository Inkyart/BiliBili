<!-- 视频的数据 包含视频本身 -->
<template>
    <div class="data">
        <div class="data-head">
            <div class="data-head-title">
                <span>{{ title }}</span>
            </div>
            <div class="data-head-data">
                <span class="data-playback">{{ playback }} 播放</span> ·
                <span class="data-barrage">{{ barrage }} 弹幕</span>
                <span class="data-date">{{ date }}</span>
            </div>
        </div>
        <div class="data-container">
            <v-video></v-video>
            <v-barrage></v-barrage>
        </div>
        <div class="data-bottom">
            <div class="data-bottom-left">
                <div class="data-like"><i class="icons"></i>{{ like }}</div>
                <div class="data-coin"><i class="icons"></i>{{ coin }}</div>
                <div class="data-collect">
                    <i class="icons"></i>{{ collect }}
                </div>
                <div class="data-forward">
                    <i class="icons"></i>{{ forward }}
                </div>
            </div>
            <div class="data-bottom-right">
                <span>稿件投诉</span>
                <span>笔记</span>
                <span></span>
            </div>
        </div>
        <div class="data-introduction-container">
            <div class="data-text" :class="{ active: flod }" ref="flod">
                {{ introduction }}
            </div>
            <span
                v-if="show"
                @click="flod = !flod"
                :class="{ active: !flod }"
                >{{ flod ? '展开更多' : '收起' }}</span
            >
        </div>
        <div class="data-tag"></div>
    </div>
</template>
<script>
import VVideo from './video'
import VBarrage from './barrage/barrage' // 导入弹幕输入框
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
            introduction:
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 简介
            flod: false, // 是否有折叠
            show: false // 是否显示折叠开关
        }
    },
    mounted () {
        if (this.$refs.flod.offsetHeight >= 64) {
            this.flod = true
            this.show = true
        }
    }
}
</script>
<style lang="scss" scoped>
.icons {
    display: block;
    width: 30px;
    height: 30px;
}
.data {
    width: 1400px;
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
        font-size: 28px;
        font-weight: 500;
    }
    .data-head-data {
        width: 100%;
        height: 30px;
        color: rgb(160, 160, 160);
        text-align: left;
        font-size: 14px;
        > span:first-of-type ~ span {
            margin-left: 5px;
        }
        > .data-date {
            margin-left: 15px;
        }
    }
}
.data-container{
    box-shadow: 0 0 5px 2px rgba(160, 160, 160,0.1);
}
.data-bottom {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
}
.data-bottom-left {
    width: 600px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    > div {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        &:first-of-type ~ div {
            margin-left: 15px;
        }
    }
}
.data-bottom-right {
    width: 300px;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
}
.data-introduction-container {
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-flow: nowrap column;
    align-items: flex-start;
    justify-content: space-around;
    box-shadow: 0 1px 0 0 #f1f1f1, 0 -1px 0 0 #f1f1f1;
    > .data-text {
        width: 460px;
        text-align: left;
        word-wrap: break-word;
        overflow: hidden;
        &.active {
            height: 65px;
        }
    }
    > .active {
        margin-top: 5px;
    }
    > span:hover {
        color: #00a1d6;
    }
}
</style>

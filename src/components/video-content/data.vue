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
                <div class="data-like">
                    <i class="icons icons-like"></i>{{ like }}
                </div>
                <div class="data-coin">
                    <i class="icons icons-coin"></i>{{ coin }}
                </div>
                <div class="data-collect">
                    <i class="icons icons-collect"></i>{{ collect }}
                </div>
                <div class="data-forward">
                    <i class="icons icons-forward"></i>{{ forward }}
                </div>
            </div>
            <div class="data-bottom-right">
                <span class="data-complaint">稿件投诉</span>
                <span class="data-note">
                    <i class="icons icons-note"></i>
                    <span>笔记</span>
                </span>
                <span></span>
            </div>
        </div>
        <div class="data-introduction-container">
            <div class="data-text" :class="{ active: flod }" ref="flod">
                <span> {{ introduction }}</span>
            </div>
            <span v-if="show" @click="flod = !flod">{{
                flod ? '展开更多' : '收起'
            }}</span>
        </div>
        <div class="data-tag">
            <div class="tag"><span>标签</span></div>
        </div>
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
            introduction: '简介', // 简介
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
.data {
    width: 1135px;
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
.data-container {
    width: 1135px;
    box-shadow: 0 0 5px 2px rgba(160, 160, 160, 0.1);
}
.data-bottom {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 0 0 #f1f1f1;
}
.data-bottom-left {
    width: 600px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    > div {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        &:hover {
            color: #00a1d6;
            .icons::before {
                color: #00a1d6;
            }
        }
        &:first-of-type ~ div {
            margin-left: 15px;
        }
    }
}
.data-bottom-right {
    user-select: none;
    width: 300px;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    > .data-complaint:hover {
        color: #00a1d6;
    }
    > .data-note {
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 20px;
        padding: 5px 0;
        box-shadow: 0 0 0 1px #00a1d6;
        color: #00a1d6;
        > .icons::before {
            color: #00a1d6;
            margin-left: 10px;
        }
        > span {
            margin-left: 20px;
        }
        &:hover {
            color: white;
            background: #00a1d6;
            > .icons::before {
                color: white;
            }
        }
    }
}
.data-introduction-container {
    width: 100%;
    margin-top: 10px;
    > .data-text {
        width: 460px;
        text-align: left;
        word-wrap: break-word;
        &.active {
            height: 65px;
            overflow: hidden;
        }
    }
    > span {
        display: inline-block;
        width: 100%;
        text-align: left;
        margin: 5px 0;
    }
    > span:hover {
        color: #00a1d6;
    }
}
.data-tag {
    padding: 10px 0;
    box-shadow: 0 1px 0 0 #f1f1f1;
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    > .tag {
        background-color: rgba(160, 160, 160, 0.1);
        border-radius: 25px;
        height: 28px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        min-width: 44px;
        font-size: 18px;
        margin: 5px;
        &:hover {
            box-shadow: 0 0 0 1px #00a1d6;
            color: #00a1d6;
        }
    }
}
</style>

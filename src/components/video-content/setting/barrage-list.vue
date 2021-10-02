<!-- 设置的弹幕列表部分 -->
<template>
    <div class="barrage-list">
        <div class="barrage-list-header">
            <div class="barrage-sort-videoTime videoTime">时间</div>
            <div class="barrage-sort-content content">
                弹幕内容 ( {{ barrageNum }} )
            </div>
            <div class="barrage-sort-sendTime sendTime">发送时间</div>
        </div>
        <div class="barrage-list-body">
            <ul class="barrage-list-container">
                <li
                    class="barrage-list-item"
                    v-for="(item, index) in barrageList"
                    :key="index"
                >
                    <div class="report">
                        <span>举报</span>
                        <span>屏蔽用户</span>
                    </div>
                    <div class="videoTime">{{ item.videoTime }}</div>
                    <div class="content">{{ item.content }}</div>
                    <div class="sendTime">{{ item.sendTime }}</div>
                </li>
            </ul>
        </div>
        <div class="barrage-list-calendar" v-show="history">
            <v-calendar></v-calendar>
        </div>
        <div class="barrage-list-foot" @click="history = !history">
            <span>查看历史弹幕</span>
        </div>
    </div>
</template>
<script>
import VCalendar from './calendar'
export default {
    data () {
        return {
            barrageNum: 0, // 弹幕总数
            barrageList: [
                {
                    videoTime: '00:00',
                    content: '阿巴巴爸爸吧',
                    sendTime: '08-08 21:00'
                },
                {
                    videoTime: '00:00',
                    content: '挖地道多多多多多多多多多多多多多',
                    sendTime: '08-08 21:00'
                },
                {
                    videoTime: '00:00',
                    content: '阿瓦',
                    sendTime: '08-08 21:00'
                },
                {
                    videoTime: '00:00',
                    content: '挺好的给',
                    sendTime: '08-08 21:00'
                }
            ], // 弹幕列表
            history: false // 是否显示日历以查看历史弹幕
        }
    },
    components: {
        VCalendar
    }
}
</script>
<style lang="scss" scoped>
.videoTime {
    padding-left: 12px;
    width: 15%;
    padding-left: 5%;
    text-align: left;
    color: rgb(160, 160, 160);
}
.content {
    padding-left: 12px;
    width: 50%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
}
.sendTime {
    padding-left: 12px;
    width: 30%;
    overflow: hidden;
    text-align: left;
    color: rgb(160, 160, 160);
}
.barrage-list {
    width: 310px;
    height: 100%;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.barrage-list-header {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    color: rgb(160, 160, 160);
    font-size: 16px;
    padding: 3px 0;
    text-align: center;
    padding-right: 3px;
}
.barrage-list-body {
    width: 100%;
    height: 580px;
    position: relative;
    .barrage-list-container {
        height: 580px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 6px;
            transition: 0.2s;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
        &:hover {
            &::-webkit-scrollbar-thumb {
                width: 6px;
                border-radius: 50px;
                background: rgb(160, 160, 160);
            }
        }
    }
    .barrage-list-item {
        overflow: hidden;
        width: 100%;
        font-size: 17px;
        display: inline-flex;
        flex-flow: nowrap row;
        justify-content: space-evenly;
        align-items: center;
        white-space: nowrap;
        font-size: 18px;
        line-height: 1.5em;
        position: relative;
        user-select: none;
        > .sendTime{
            font-size: 12px;
        }
        > .report {
            display: none;
        }
        &:hover {
            > .report {
                display: block;
                position: absolute;
                right: 0;
                width: 48%;
                padding: 0 3px;
                background: white;
                display: flex;
                flex-flow: nowrap row;
                justify-content: space-between;
                align-items: center;
                height: 90%;
                z-index: 8;
                > span {
                    color: #00a1d6;
                    padding: 2px 8px;
                    height: 85%;
                    display: inline-flex;
                    flex-flow: nowrap row;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #00a1d6;
                    &:hover {
                        background: #00a1d6;
                        color: white;
                    }
                }
            }
        }
    }
}
.barrage-list-calendar {
    position: absolute;
    width: 240px;
    height: 210px;
    bottom: 40px;
}
.barrage-list-foot {
    width: 100%;
    background: rgba(160, 160, 160, 0.2);
    font-size: 18px;
    padding: 4px 0;
    user-select: none;
}
</style>

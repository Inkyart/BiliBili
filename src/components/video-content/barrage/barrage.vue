<!-- 弹幕输入框 -->
<template>
    <div class="barrage">
        <div class="barrage-left">
            <span class="watch-pop">0 人正在看</span>
        </div>
        <div class="barrage-right">
            <div class="barrage-watch">
                <div
                    @mousemove="show = true"
                    @mouseleave="show = false"
                    class="switch-container"
                    @click="active = !active"
                    :class="{ active: active }"
                >
                    <div class="switch-title" v-show="show">
                        <span>{{ active ? '关闭' : '开启' }}弹幕</span>
                    </div>
                    <div class="switch-content">
                        <span>弹</span>
                    </div>
                </div>
            </div>
            <div
                class="barrage-setting"
                @mouseover="showSetting = true"
                @mouseout="showSetting = false"
            >
                <span class="icons icons-setting">
                    <icons-setting></icons-setting>
                </span>
                <v-setting v-show="showSetting"></v-setting>
            </div>
            <div class="barrage-input">
                <span
                    @mousemove="showFont = true"
                    @mouseleave="showFont = false"
                    >A<v-font v-show="showFont"></v-font
                ></span>
                <input type="text" placeholder="发个友善的弹幕见证当下" />
                <a>弹幕礼仪 <span class="icons icons-right"></span></a>
                <button>
                    <span>发送</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import VFont from './font-setting.vue' // 字体设置
import VSetting from './barrage-setting.vue' // 弹幕设置
import iconsSetting from '../../icons/setting.vue' // 图标
export default {
    components: {
        VFont,
        VSetting,
        iconsSetting
    },
    data () {
        return {
            active: false, // 是否开启弹幕
            show: false, // 是否显示 开关弹幕提示
            showFont: false, // 是否显示 弹幕字体相关设置
            showSetting: false // 是否显示 弹幕设置
        }
    }
}
</script>
<style lang="scss" scoped>
.icons.icons-right {
    display: inline-block;
    position: absolute;
    top:0px;
}
.barrage {
    padding-left: 1%;
    width: 99%;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
}
.barrage-left,
.barrage-right {
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    &.barrage-left {
        width: 300px;
        text-overflow: ellipsis;
    }
    &.barrage-right {
        width: 800px;
        justify-content: space-evenly;
    }
}
.switch-container {
    width: 28px;
    height: 18px;
    padding: 1px;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgb(160, 160, 160);
    background-color: rgb(160, 160, 160);
    position: relative;
    > input[type='checkbox'] {
        width: 100%;
        height: 100%;
    }
    > .switch-content {
        width: 18px;
        height: 18px;
        box-shadow: 0 0 2px 0 rgb(160, 160, 160);
        border-radius: 50%;
        background-color: white;
        transition: 0.2s;
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        color: rgb(160, 160, 160);
    }
    &.active {
        background: #00a1d6;
        > .switch-content {
            margin-left: 10px;
            color: #00a1d6;
        }
    }
    .switch-title {
        position: absolute;
        width: 75px;
        font-size: 18px;
        background: #000;
        color: white;
        top: -35px;
        left: -20px;
    }
}
.barrage-setting {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
}
.barrage-input {
    user-select: none;
    width: 705px;
    height: 30px;
    background-color: rgba(160, 160, 160, 0.1);
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    > span {
        width: 30px;
        text-decoration: underline 2px;
        font-weight: 600;
        position: relative;
        &:hover {
            color: #00a1d6;
        }
    }
    > input {
        width: 530px;
        border: none;
        outline: none;
        background-color: transparent;
    }
    > button {
        width: 60px;
        height: 30px;
        border: none;
        box-shadow: 0 0 1px 0 rgb(160, 160, 160);
        background-color: #00a1d6;
        color: white;
        font-weight: 600;
        font-size: 18px;
    }
    > a {
        width: 90px;
        text-align: left;
        display: inline;
        padding: 4px 0;
        position: relative;
        font-weight: 600;
        color: rgb(160, 160, 160);
        > span::before{
            margin-top: 8px;
            margin-left: 10px;
        }
        &:hover {
            color: #00a1d6;
            > span::before{
                color: #00a1d6;
            }
        }
    }
}
</style>

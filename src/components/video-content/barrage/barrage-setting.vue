<!-- 弹幕的屏蔽设定 -->
<template>
    <div
        class="settings-container"
        :style="{
            width: show ? '266px' : '310px',
            height: show ? '254px' : '359px'
        }"
    >
        <div
            class="settings-content"
            :style="{
                transform: !show ? 'translateX(0px)' : 'translateX(320px)'
            }"
        >
            <div class="settings-class">
                <span class="settings-title">按类型屏蔽</span>
                <div class="settings-class-container">
                    <div
                        class="settings-class-mode"
                        :class="{ active: show_scroll }"
                        @click="show_scroll = !show_scroll"
                    >
                        <span class="icons icons-scroll">
                            <icons-scroll :active="show_scroll"></icons-scroll
                        ></span>

                        <span>滚动</span>
                    </div>
                    <div
                        class="settings-class-mode"
                        :class="{ active: show_top }"
                        @click="show_top = !show_top"
                    >
                        <span class="icons icons-top"
                            ><icons-top :active="show_top"></icons-top
                        ></span>

                        <span>顶部</span>
                    </div>
                    <div
                        class="settings-class-mode"
                        :class="{ active: show_bottom }"
                        @click="show_bottom = !show_bottom"
                    >
                        <span class="icons icons-bottom"
                            ><icons-bottom :active="show_bottom"></icons-bottom
                        ></span>

                        <span>底部</span>
                    </div>
                    <div
                        class="settings-class-mode"
                        :class="{ active: show_colors }"
                        @click="show_colors = !show_colors"
                    >
                        <span class="icons icons-colors"
                            ><icons-colors :active="show_colors"></icons-colors
                        ></span>

                        <span>彩色</span>
                    </div>
                    <div
                        class="settings-class-mode"
                        :class="{ active: show_senior }"
                        @click="show_senior = !show_senior"
                    >
                        <span class="icons icons-senior">
                            <icons-senior :active="show_senior"></icons-senior
                        ></span>

                        <span>高级</span>
                    </div>
                </div>
            </div>
            <div class="settings-check">
                <div class="settings-ai">
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        v-model="shield"
                    /><span @click="shield = !shield">智能云屏蔽</span>
                    <span class="ai-title" v-if="!shield"
                        >全站视频将按照等级屏蔽弹幕</span
                    >
                    <span class="ai-level" v-if="shield"
                        ><span
                            ><v-slide
                                :max="10"
                                :min="1"
                                :step="1"
                                @handle="Mshield"
                                :scale="new Array(10)"
                                :text="false"
                            ></v-slide
                        ></span>
                        <span>{{ shieldLevel }}级</span></span
                    >
                </div>
                <div class="settings-screen">
                    <span
                        class="settings-screen-container"
                        @click="scale = !scale"
                    >
                        <input type="checkbox" name="" id="" v-model="scale" />
                        <span>弹幕随屏幕缩放</span>
                    </span>
                    <span
                        class="settings-screen-container"
                        @click="blocking = !blocking"
                    >
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            v-model="blocking"
                        />
                        <span>防挡字幕</span>
                    </span>
                    <span
                        class="settings-screen-container"
                        @click="aiBlocking = !aiBlocking"
                    >
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            v-model="aiBlocking"
                        />
                        <span>智能防挡弹幕</span>
                    </span>
                </div>
            </div>
            <div class="settings-btn">
                <div class="settings-add">添加屏蔽词</div>
                <div class="settings-sync">同步屏蔽词</div>
            </div>
            <div class="settings-progress">
                <div class="settings-opacity">
                    <span>不透明度</span>
                    <div class="settings-slide">
                        <v-slide
                            :max="100"
                            :min="10"
                            :step="1"
                            @handle="Mopacity"
                        ></v-slide>
                    </div>
                    <span>{{ opacity }}%</span>
                </div>
                <div class="settings-showArea">
                    <span>显示区域</span>
                    <div class="settings-slide">
                        <v-slide
                            :scale="['1/4', '半屏', '3/4', '不重叠', '无限']"
                            :max="5"
                            :min="1"
                            :step="1"
                            @handle="MshowArea"
                        ></v-slide>
                    </div>
                    <span>{{ shwoArea }}</span>
                </div>
                <div class="settings-font">
                    <span>弹幕字号</span>
                    <div class="settings-slide">
                        <v-slide
                            :max="120"
                            :min="0"
                            :step="1"
                            @handle="Mfont"
                        ></v-slide>
                    </div>
                    <span>{{ font }}%</span>
                </div>
                <div class="settings-speed">
                    <span>弹幕速度</span>
                    <div class="settings-slide">
                        <v-slide
                            :scale="['极慢', '', '适中', '', '极快']"
                            :max="5"
                            :min="1"
                            :step="1"
                            @handle="Mspeed"
                        ></v-slide>
                    </div>
                    <span>{{ speed }}</span>
                </div>
            </div>
            <div class="settings-senior" @click="show = true">
                <span>高级设置</span>
                <span>></span>
            </div>
        </div>
        <div
            class="senior-content"
            :style="{
                transform: show ? 'translateX(0px)' : 'translateX(320px)'
            }"
        >
            <v-senior @toggle="toggle"></v-senior>
        </div>
    </div>
</template>
<script>
import iconsTop from '../../icons/top.vue' // 图标
import iconsBottom from '../../icons/bottom.vue' // 图标
import iconsScroll from '../../icons/scroll.vue' // 图标
import iconsSenior from '../../icons/senior.vue' // 图标
import iconsColors from '../../icons/colors.vue' // 图标

import VSlide from '../../slide/index.vue' // 滑动条
import VSenior from './setting-senior.vue' // 高级设置
export default {
    components: {
        iconsTop,
        iconsBottom,
        iconsScroll,
        iconsSenior,
        iconsColors,
        VSlide,
        VSenior
    },
    data () {
        return {
            show: false, // 是否显示高级设置
            shieldLevel: 1, // 屏蔽等级
            mode: [], // 屏蔽模式
            opacity: 10, // 弹幕不透明度
            shwoArea: '1/4', // 弹幕显示区域
            font: 50, // 弹幕字号
            speed: '极慢', // 弹幕速度
            show_scroll: false, // 是否屏蔽滚动弹幕
            show_top: false, // 是否屏蔽顶部弹幕
            show_bottom: false, // 是否屏蔽底部弹幕
            show_colors: false, // 是否屏蔽彩色弹幕
            show_senior: false, // 是否屏蔽高级弹幕
            shield: false, // 是否智能云屏蔽
            scale: false, // 是否弹幕随屏幕缩放
            blocking: false, // 是否防挡字幕
            aiBlocking: false // 是否智能防挡字幕
        }
    },
    methods: {
        Mopacity (value) {
            this.opacity = value
        },
        MshowArea (value) {
            const area = ['1/4', '半屏', '3/4', '不重叠', '无限']
            this.shwoArea = area[value - 1]
        },
        Mfont (value) {
            this.font = 50 + value
        },
        Mspeed (value) {
            const speed = ['极慢', '较慢', '适中', '较快', '极快']
            this.speed = speed[value - 1]
        },
        Mshield (value) {
            this.shieldLevel = value
        },
        toggle () {
            console.log('s')
            this.show = false
        }
    }
}
</script>
<style lang="scss" scoped>
.settings-container {
    position: absolute;
    bottom: 0px;
    left: -155px;
    width: 310px;
    height: 400px;
    transition: 0.2s;
    padding-bottom: 40px;
    overflow: hidden;
    > .settings-content {
        padding: 5px;
        transition: 0.2s;
        width: 310px;
        color: white;
        display: flex;
        flex-flow: nowrap column;
        background: rgba(21, 21, 21, 0.9);
    }
}
.settings-title {
    width: 100%;
    text-align: left;
    font-size: 18px;
}
.settings-class {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    margin-left: 15px;
    > .settings-class-container {
        width: 100%;
        height: 60px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        > .settings-class-mode {
            display: flex;
            flex-flow: nowrap column;
            align-items: flex-start;
            justify-content: space-between;
            height: 50px;
            width: 50px;
            user-select: none;
            &.active {
                color: #00a1d6;
            }
        }
    }
}
.settings-check {
    width: calc(100% - 30px);
    margin-left: 15px;
    display: flex;
    flex-flow: wrap row;
    user-select: none;
    height: 50px;
    > .settings-ai,
    > .settings-screen {
        margin: 3px 0;
        width: 100%;
        height: 20px;
        display: flex;
        flex-flow: nowrap row;
        white-space: nowrap;
        align-items: center;
        input {
            position: relative;
            -webkit-appearance: none;
            width: 10px;
            height: 10px;
            margin-right: 3px;
            &:before {
                position: absolute;
                content: '';
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: transparent;
                border-radius: 1px;
                box-shadow: 0 0 0 1px rgb(160, 160, 160);
            }
            &:checked::after {
                position: absolute;
                content: '\2714';
                background-color: #00a1d6;
                top: -3px;
                left: -3px;
                height: 140%;
                width: 140%;
                font-size: 12px;
                padding: 1px;
                display: flex;
                flex-flow: nowrap row;
                align-items: center;
                font-weight: 600;
                transform: scale(0.7);
            }
            &:checked {
                margin-right: 3px;
            }
        }
        > .settings-screen-container {
            &:hover {
                color: #00a1d6;
                > input::before{
                    box-shadow: 0 0 0 1px #00a1d6;
                }
            }
            width: 30%;
            display: flex;
            flex-flow: nowrap row;
            align-items: center;
            justify-content: flex-start;
            > span {
                width: 0%;
                transform: scale(0.8, 0.99);
            }
            &:first-of-type {
                margin-right: 26px;
            }
            &:last-of-type {
                margin-left: -12px;
            }
        }
    }
    > .settings-ai {
        > input {
            margin-right: 13px;
        }
        > input + span:hover {
            color: #00a1d6;
        }
        > .ai-title {
            color: rgb(160, 160, 160);
            transform: scale(0.8, 0.99);
            margin-left: -8px;
        }
        > .ai-level {
            color: rgb(160, 160, 160);
            width: 175px;
            height: 20px;
            display: flex;
            flex-flow: nowrap row;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            > span:first-of-type {
                width: 165px;
                position: relative;
                height: 2px;
                display: flex;
                flex-flow: nowrap row;
                justify-content: flex-start;
                align-items: center;
            }
            > span:last-of-type {
                width: 10px;
                text-align: right;
            }
        }
    }
}
.settings-btn {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    margin-left: -2px;
    > div {
        width: 130px;
        height: 20px;
        font-size: 16px;
        background: gray;
        &:hover {
            background: rgb(170, 170, 170);
        }
    }
}
.settings-progress {
    width: 100%;
    height: 140px;
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    > div {
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 20px;
        > span:first-of-type {
            width: 70px;
        }
        > span:last-of-type {
            width: 50px;
        }
        > .settings-slide {
            width: 130px;
            height: 2px;
            position: relative;
            display: flex;
            flex-flow: nowrap row;
            justify-content: center;
            align-items: center;
        }
    }
}
.settings-senior {
    width: calc(100% - 36px);
    margin-left: 18px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    box-shadow: 0 -1px 0 0 rgba(160, 160, 160, 0.2);
    height: 30px;
    user-select: none;
    &:hover {
        color: #00a1d6;
    }
}
.senior-content {
    transition: 0.2s;
}
</style>

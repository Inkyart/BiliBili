<!-- 弹幕的字体设置 -->
<template>
    <div class="font">
        <div class="font-container">
            <div class="font-area">
                <span class="font-title">字号</span>
                <div class="font-size">
                    <div
                        class="font-size-small"
                        @click="size = 'small'"
                        :class="{ active: size === 'small' }"
                    >
                        小
                    </div>
                    <div
                        class="font-size-normal"
                        @click="size = 'normal'"
                        :class="{ active: size === 'normal' }"
                    >
                        标准
                    </div>
                </div>
            </div>
            <div class="font-area">
                <span class="font-title">模式</span>
                <div class="font-mode">
                    <div
                        class="font-mode-scroll"
                        @click="mode = 'scroll'"
                        :class="{ active: mode === 'scroll' }"
                    >
                        <span class="icons icons-scroll">
                            <icons-scroll></icons-scroll>
                        </span>
                        <span>滚动</span>
                    </div>
                    <div
                        class="font-mode-top"
                        @click="mode = 'top'"
                        :class="{ active: mode === 'top' }"
                    >
                        <span class="icons icons-top">
                            <icons-top></icons-top>
                        </span>
                        <span>顶部</span>
                    </div>
                    <div
                        class="font-mode-bottom"
                        @click="mode = 'bottom'"
                        :class="{ active: mode === 'bottom' }"
                    >
                        <span class="icons icons-bottom">
                            <icons-bottom></icons-bottom>
                        </span>
                        <span>底部</span>
                    </div>
                </div>
            </div>
            <div class="font-area">
                <span class="font-title">颜色</span>
                <div class="font-color">
                    <div class="font-color-input">
                        <input type="text" @input="input" v-model="color" />
                        <div
                            class="font-color-live"
                            :style="{ 'background-color': color }"
                        ></div>
                    </div>
                    <div class="font-color-preset">
                        <div class="color-preset-row">
                            <div
                                @click="active"
                                v-for="(color, index) in colorList1"
                                :key="index"
                                class="color"
                                :style="{ background: color }"
                            ></div>
                        </div>
                        <div class="color-preset-row">
                            <div
                                @click="active"
                                v-for="(color, index) in colorList2"
                                :key="index"
                                class="color"
                                :style="{ background: color }"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import colorHex from '@/util/rgb-hex'
import iconsTop from '../../icons/top.vue'
import iconsBottom from '../../icons/bottom.vue'
import iconsScroll from '../../icons/scroll.vue'
export default {
    components: {
        iconsTop,
        iconsBottom,
        iconsScroll
    },
    data () {
        return {
            colorList1: [
                // 预设颜色列表 1
                '#FE0302',
                '#FF7204',
                '#FFAA02',
                '#FFD302',
                '#FFFF00',
                '#FFD302',
                '#00CD00'
            ],
            colorList2: [
                // 预设颜色列表 2
                '#019899',
                '#4266BE',
                '#89D5FF',
                '#CC0273',
                '#222222',
                '#9B9B9B',
                '#FFFFFF'
            ],
            color: '#FFFFFF', // 当前选定预设颜色元素
            size: 'normal', // 默认字体大小 标准
            mode: 'scroll' // 默认滚动
        }
    },
    methods: {
        // 用于激活预设颜色
        active (e) {
            if (document.getElementsByClassName('color active')[0]) {
                document
                    .getElementsByClassName('color active')[0]
                    .setAttribute('class', 'color')
            }
            e.target.className += ' active'
            this.color = colorHex(
                String(e.target.style.background)
            ).toUpperCase()
        },
        // 用于检测 输入 颜色
        input (e) {
            if (document.getElementsByClassName('color active')[0]) {
                document
                    .getElementsByClassName('color active')[0]
                    .setAttribute('class', 'color')
            }
            if (e.target.value.length <= 1) e.target.value = '#'
        }
    }
}
</script>
<style lang="scss" scoped>
.font {
    position: absolute;
    width: 210px;
    height: 240px;
    left: -105px;
    bottom: 0;
    padding-bottom: 50px;
}
.font-container {
    background: rgba(21, 21, 21, 0.9);
    color: white;
    width: 210px;
    height: 250px;
    padding: 4px 3px;
}
.font-area {
    display: flex;
    flex-flow: wrap row;
    > .font-title {
        width: 100%;
        font-size: 16px;
        text-align: left;
        margin: 15px 0 0 15px;
    }
}
.font-size,
.font-mode,
.font-color {
    width: 100%;
    display: flex;
    color: rgb(226, 226, 226);
    &.font-size {
        flex-flow: nowrap row;
        justify-content: space-evenly;
        > .font-size-small,
        > .font-size-normal {
            width: 80px;
            background: rgb(90, 90, 90);
            &:hover {
                background: rgb(128, 128, 128);
            }
            &.active {
                color: white;
                background: #00a1d6;
            }
        }
    }

    &.font-mode {
        flex-flow: wrap row;
        justify-content: flex-start;
        > .font-mode-scroll,
        > .font-mode-top,
        > .font-mode-bottom {
            display: flex;
            flex-flow: nowrap column;
            align-items: center;
            justify-content:center;
            width: 35px;
            margin-left: 15px;
            &:hover {
                color: white;
            }
            &.active {
                color: #00a1d6
            }
        }
    }

    &.font-color {
        flex-flow: nowrap column;
    }
}
.font-color-input {
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    > input {
        width: 110px;
        margin-left: 15px;
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        background-color: transparent;
        outline: none;
        color: white;
        font-size: 16px;
        position: relative;
        padding-left: 10px;
    }
    > .font-color-live {
        width: 40px;
        height: 22px;
        background-color: #fff;
        border-radius: 2px;
        margin-left: 20px;
        box-shadow: 0 0 1px 0 rgb(206, 206, 206);
    }
}
.font-color-preset {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-evenly;
    height: 40px;
    margin: 0px 2px;
    > .color-preset-row {
        width: 100%;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-evenly;
        align-items: center;
        > .color {
            width: 15px;
            height: 15px;
            border-radius: 2px;
            position: relative;
            box-shadow: 0 0 1px 1px rgb(90, 90, 90);
            &.active {
                &::after {
                    content: '';
                    position: absolute;
                    border-radius: 2px;
                    width: 17px;
                    height: 17px;
                    top: -1px;
                    left: -1px;
                    box-shadow: 0 0 1px 1px white;
                }
            }
        }
    }
}
</style>

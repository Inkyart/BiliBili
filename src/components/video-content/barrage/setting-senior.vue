<!-- 弹幕高级设置 -->
<template>
    <div class="senior">
        <div class="senior-title" @click="handle">
            <span>&lt;</span>
            <span>更多弹幕设置</span>
        </div>
        <div class="senior-check">
            <div class="auto-density" @click="auto = !auto">
                <input type="checkbox" name="" id="" v-model="auto" />自动密度
            </div>
            <div class="sync-speed" @click="sync = !sync">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    v-model="sync"
                />弹幕速度同步播放倍数
            </div>
        </div>
        <div class="senior-font">
            <span class="setting-title">弹幕字体</span>
            <div
                class="font-select-container"
                @mouseover="showFont = true"
                @mouseout="showFont = false"
            >
                <span>
                    <span>{{ font }}</span>
                    <span></span>
                </span>
                <ul v-show="showFont" class="font-select">
                    <li @click="font = '黑体'">黑体</li>
                    <li @click="font = '宋体'">宋体</li>
                    <li @click="font = '新宋体'">新宋体</li>
                    <li @click="font = '仿宋'">仿宋</li>
                    <li @click="font = '微软雅黑'">微软雅黑</li>
                    <li @click="font = '微软雅黑 Light'">
                        微软雅黑 Light
                    </li>
                    <li @click="font = 'Noto Sans DemiLight'">
                        Noto Sans DemiLight
                    </li>
                    <li @click="font = 'Noto Sans Regular'">
                        Noto Sans Regular
                    </li>
                </ul>
            </div>
            <div class="setting-font-strong">
                <input type="checkbox" name="strong" v-model="strong" /><label
                    for="strong"
                    >粗体</label
                >
            </div>
        </div>
        <div class="senior-stroke">
            <div class="setting-title">描边类型</div>
            <div
                :class="{ active: stroke === 'strong' }"
                @click="stroke = 'strong'"
            >
                重墨
            </div>
            <div
                :class="{ active: stroke === 'stroke' }"
                @click="stroke = 'stroke'"
            >
                描边
            </div>
            <div
                :class="{ active: stroke === 'shadow' }"
                @click="stroke = 'shadow'"
            >
                45°投影
            </div>
        </div>
        <div class="senior-default">
            <span>恢复默认设置</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            auto: false, // 是否自动密度
            sync: false, // 是否同步速度
            font: '黑体', // 当前字体
            showFont: false, // 是否显示字体列表
            stroke: '' // 描边类型
        }
    },
    methods: {
        handle () {
            this.$emit('toggle')
        }
    }
}
</script>
<style lang="scss" scoped>
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
        box-shadow: 0 0 0 1px rgb(160, 160, 160);
        border-radius: 1px;
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
.senior {
    position: absolute;
    bottom: 104px;
    width: 266px;
    height: 248px;
    padding: 6px 0;
    color: white;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
    align-items: center;
    background: rgba(21, 21, 21, 0.9);
}
.senior-title {
    width: 100%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    padding: 4px 0;
    box-shadow: 0 1px 0 0 rgba(160, 160, 160, 0.2);
    user-select: none;
    margin-bottom: 10px;
    &:hover {
        color: #00a1d6;
    }
    > span:first-child {
        margin-left: 15px;
        margin-right: 5px;
    }
}
.senior-check {
    width: calc(100% - 30px);
    margin-left: 15px;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    > div {
        user-select: none;
        &:hover {
            color: #00a1d6;
            input::before {
                box-shadow: 0 0 0 1px #00a1d6;
            }
        }
    }
}
.senior-font {
    width: calc(100% - 30px);
    margin-left: 15px;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    > .setting-title {
        width: 100%;
        text-align: left;
        margin: 3px 0;
    }
    > select {
        background: transparent;
        color: white;
        width: 150px;
        margin-right: 20px;
        > option {
            color: #000;
        }
    }
    > .setting-font-strong {
        width: 50px;
        height: 20px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
    }
}
.font-select-container {
    width: 160px;
    text-align: left;
    height: 20px;
    box-shadow: 0 0 0 1px rgba(160, 160, 160, 0.2);
    border-radius: 1px;
    margin-right: 15px;
    > span {
        width: 94%;
        padding: 0 3%;
        height: 20px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
        > span:last-of-type {
            display: block;
            width: 0px;
            height: 0px;
            border: 5px solid transparent;
            border-top-color: rgb(160, 160, 160);
            margin-top: 5px;
        }
    }
    > ul {
        box-shadow: 0 0 0 1px rgba(160, 160, 160, 0.2);
        height: 90px;
        overflow: auto;
        background-color: rgba(21, 21, 21, 0.9);
        &::-webkit-scrollbar {
            background-color: transparent;
            width: 6px;
        }
        &::-webkit-scrollbar-thumb {
            height: 60px;
            background: rgb(160, 160, 160);
            border-radius: 25px;
        }
        li {
            user-select: none;
            width: 100%;
            &:hover {
                background-color: rgba(160, 160, 160, 0.2);
            }
        }
    }
}
.senior-stroke {
    width: calc(100% - 30px);
    margin-left: 15px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-evenly;
    align-items: center;
    user-select: none;
    > .setting-title {
        width: 100%;
        text-align: left;
        & ~ div {
            width: 30%;
            background: rgb(129, 129, 129);
            &:hover {
                background: rgb(160, 160, 160);
            }
        }
        & ~ .active {
            background: #00a1d6;
            &:hover {
                background-color: #00a1d6;
            }
        }
    }
}
.senior-default {
    width: 100%;
    box-shadow: 0 -1px 0 0 rgb(160 160 160 / 20%);
    height: 10px;
    padding: 5px 0;
    margin-bottom: 20px;
    text-align: left;
    > span {
        margin-top: 5px;
        margin-left: 28px;
        display: inline-block;
        box-shadow: 0 0 0 1px rgb(160, 160, 160);
        height: 20px;
        width: 45%;
        text-align: center;
        user-select: none;
        &:hover {
            color: #00a1d6;
            box-shadow: 0 0 0 1px #00a1d6;
        }
    }
}
</style>

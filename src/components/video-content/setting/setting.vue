<!-- 弹幕设置 -->
<template>
    <div class="setting">
        <div class="setting-title">
            <span
                ><span>{{ ['弹幕列表', '屏蔽设定', '高级弹幕'][mode] }}</span>
                <i @click="show_list = !show_list" class="icons icons-list"></i>
                <ul
                    class="setting-list"
                    v-show="show_list"
                    @click="show_list = false"
                >
                    <li
                        class="setting-list-item"
                        @click="mode = 0"
                        v-show="mode != 0"
                    >
                        弹幕列表
                    </li>
                    <li
                        class="setting-list-item"
                        @click="mode = 1"
                        v-show="mode != 1"
                    >
                        屏蔽设定
                    </li>
                    <li
                        class="setting-list-item"
                        @click="mode = 2"
                        v-show="mode != 2"
                    >
                        高级弹幕
                    </li>
                </ul>
            </span>
            <span @click="fold = !fold">{{ fold ? '展开' : '收起' }}</span>
        </div>
        <div class="setting-container" :class="fold ? 'container-fold' : ''">
            <!-- 弹幕列表 -->
            <div v-show="mode === 0" class="setting-content-container">
                <barrage-list></barrage-list>
            </div>
            <!-- 屏蔽设定 -->
            <div v-show="mode === 1" class="setting-content-container">
                <shield-list></shield-list>
            </div>
            <!-- 高级弹幕 -->
            <div v-show="mode === 2" class="setting-content-container">
                <senior-barrage></senior-barrage>
            </div>
        </div>
    </div>
</template>
<script>
import seniorBarrage from './senior-barrage.vue' // 高级弹幕
import shieldList from './shield-list.vue' // 屏蔽设定
import barrageList from './barrage-list.vue' // 弹幕列表
export default {
    data () {
        return {
            mode: 0, // 模式
            fold: true, // 是否折叠
            show_list: false // 是否显示列表
        }
    },
    components: {
        seniorBarrage,
        shieldList,
        barrageList
    }
}
</script>
<style lang="scss" scoped>
.container-fold {
    height: 0px !important;
}
.setting {
    width: 100%;
    border-radius: 1px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.setting-title {
    user-select: none;
    width: 90%;
    padding: 0 5%;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    background: rgba(160, 160, 160, 0.1);
    z-index: 2;
    > span:first-child {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        font-size: 16px;
        > .icons {
            margin-left: 15px;
        }
        > .icons:hover {
            &::before {
                color: #00a1d6;
            }
        }
    }
}
.setting-list {
    position: absolute;
    width: 75px;
    top: 30px;
    left: 0px;
    background-color: white;
    box-shadow: 0 0 1px 1px rgba(160, 160, 160, 0.2);
    border-radius: 1px;
    font-size: 12px;
    .setting-list-item {
        height: 20px;
        padding: 5px;
        margin: 8px 0;
        &:hover {
            background: rgba(160, 160, 160, 0.2);
            color: #00a1d6;
        }
    }
}
.setting-container {
    width: 100%;
    overflow: hidden;
    height: 650px;
    transition: height 0.2s;
    box-shadow: 0 1px 0 0 rgba(160, 160, 160, 0.2);
    > .setting-content-container {
        height: 650px;
        width: 100%;
    }
}
</style>

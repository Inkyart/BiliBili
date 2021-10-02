<!-- 设置的屏蔽列表部分 -->
<template>
    <div class="shield">
        <div class="shield-header">
            <h3>屏蔽列表</h3>
            <div class="shield-switch-container" :class="{ active: shield }">
                <input type="checkbox" v-model="shield" />
                <div
                    class="shield-switch-btn"
                    :class="{ active: shield }"
                ></div>
            </div>
            <div class="shield-sync">
                <i class="icons icons-sync"></i>
                <span>同步屏蔽列表</span>
            </div>
        </div>
        <div v-show="shield" class="shield-body">
            <div class="shield-input">
                <input
                    type="text"
                    placeholder='添加屏蔽词,正则以"/"开头 "/"结尾'
                    v-model="shield_content"
                />
                <button @click="addShield">
                    <div
                        class="shield-input-message"
                        :class="{
                            short: clickMsg === '已屏蔽',
                            long: clickMsg === '已添加该屏蔽词，并已同步到云端'
                        }"
                    >
                        {{ clickMsg }}
                    </div>
                    添加
                </button>
            </div>
            <div class="shield-tab">
                <div class="shield-tab-header">
                    <div
                        class="tab-texts"
                        @click="tab = 0"
                        :class="{ active: tab === 0 }"
                    >
                        屏蔽文本
                    </div>
                    <div
                        class="tab-regex"
                        @click="tab = 1"
                        :class="{ active: tab === 1 }"
                    >
                        屏蔽正则
                    </div>
                    <div
                        class="tab-users"
                        @click="tab = 2"
                        :class="{ active: tab === 2 }"
                    >
                        屏蔽用户
                    </div>
                </div>
                <div
                    class="shield-tab-container"
                    :class="{ null: !tabList[tab].length }"
                >
                    <div class="shield-tab-head">
                        <span
                            >内容（{{
                                tabList[tab].length === 0
                                    ? '-'
                                    : tabList[tab].length
                            }}）</span
                        >
                        <div class="shield-tab-editer">
                            <span>状态</span>
                            <span>操作</span>
                            <span>同步</span>
                        </div>
                    </div>
                    <div class="shield-tab-body">
                        <div class="shield-tab-content">
                            <ul class="shield-list-container">
                                <li
                                    class="shield-list-item"
                                    v-for="(item, index) in tabList[tab]"
                                    :key="index"
                                    :class="{
                                        close: tabListClose[tab].includes(item)
                                    }"
                                >
                                    <span class="shield-content">{{
                                        item
                                    }}</span>
                                    <span>
                                        <span
                                            class="shield-content-status"
                                            @click="toggle(item)"
                                            >{{
                                                tabListClose[tab].includes(item)
                                                    ? '关闭'
                                                    : '启用'
                                            }}</span
                                        >
                                        <span
                                            class="shield-content-handle"
                                            @click="remove(item)"
                                        >
                                            <i class="icons icons-remove"></i>
                                        </span>
                                        <span class="shield-content-sync">
                                            <i class="icons icons-correct"></i>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="shield-tab-content shield-tab-regex"></div> -->
                        <!-- <div class="shield-tab-content shield-tab-users"></div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            shield: true, // 是否开启屏蔽词
            tab: 0, // 屏蔽选项卡默认为 屏蔽文本
            shield_content: '', // 待添加的屏蔽内容
            tabList: [
                // 选项卡内容列表
                [], // 选项卡内容列表 文本内容
                [], // 选项卡内容列表 正则
                [] // 选项卡内容列表 用户
            ],
            tabListClose: [
                [], // 选项卡内容列表 文本内容
                [], // 选项卡内容列表 正则
                [] // 选项卡内容列表 用户
            ], // 已关闭的内容
            clickMsg: '' // 添加屏蔽词之后的提示
        }
    },
    methods: {
        /**
         * 用于进行切换屏蔽内容状态
         * @param {string} item - 屏蔽内容字符串
         */
        toggle (item) {
            // 如果 在 对应的屏蔽内容列表中
            if (this.tabListClose[this.tab].includes(item)) {
                // 删除
                this.tabListClose[this.tab].splice(
                    this.tabListClose[this.tab].indexOf(item),
                    1
                )
                // 否则添加
            } else this.tabListClose[this.tab].push(item)
        },
        /**
         * 用于删除屏蔽内容
         * @param {object} item - 即将要删除的屏蔽的内容
         */
        remove (item) {
            this.tabList[this.tab].splice(
                this.tabList[this.tab].indexOf(item),
                1
            )
        },
        /** 用于添加屏蔽内容 */
        addShield () {
            const reg = new RegExp('^/.+/$') // 匹配是否为正则
            const regs = new RegExp('^/(.+)/$') // 匹配正则内容

            // 为空直接返回
            if (this.shield_content === '') return

            if (
                // 如果是正则 和
                reg.test(this.shield_content)
            ) {
                if (
                    // 二次判定
                    // 正则列表中没有此正则
                    !this.tabList[1].includes(regs.exec(this.shield_content)[1])
                ) {
                    this.tabList[1].push(regs.exec(this.shield_content)[1])
                }
            }

            if (
                // 屏蔽词不存在 和
                !this.tabList[0].includes(this.shield_content)
            ) {
                // 则添加
                this.tabList[0].push(this.shield_content)
                // 变更提示信息
                this.clickMsg = '已添加该屏蔽词，并已同步到云端'
            } else {
                // 变更提示信息
                this.clickMsg = '已屏蔽'
            }
            setTimeout(() => {
                this.clickMsg = ''
            }, 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
.shield {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &:hover {
        &::-webkit-scrollbar-track {
            background-color: rgb(160, 160, 160, 0.2);
        }
        &::-webkit-scrollbar-thumb {
            width: 6px;
            background: rgb(128, 128, 128);
            border-radius: 25px;
        }
    }
}
.shield-header {
    padding: 6px 0;
    width: 90%;
    margin-left: 5%;
    height: 30px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
}
.shield-switch-container {
    width: 35px;
    height: 20px;
    padding: 1px;
    background-color: gray;
    border-radius: 50px;
    position: relative;
    margin-left: 15px;
    &.active {
        background-color: #00a1d6;
    }
    > input {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    > .shield-switch-btn {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        transition: 0.3s;
        &.active {
            margin-left: 15px;
        }
    }
}
.shield-sync {
    width: 125px;
    position: absolute;
    right: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-end;
    align-items: center;
    color: #00a1d6;
    > .icons::before {
        color: #00a1d6;
        font-size: 18px;
    }
    > span {
        white-space: nowrap;
    }
}
.shield-body {
    width: 100%;
    height: 620px;
}
.shield-input {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 8px 0;
    margin-left: 5%;
    > input {
        width: 210px;
        border: 1px solid rgb(128, 128, 128);
        height: 20px;
        outline: none;
        font-size: 18px;
    }
    > button {
        width: 60px;
        text-align: center;
        border: none;
        font-size: 18px;
        height: 25px;
        position: relative;
    }
}
.shield-input-message {
    position: absolute;
    background: rgb(0, 0, 0, 0.79);
    color: white;
    white-space: nowrap;
    opacity: 0;
    border-radius: 5px;
    z-index: 999;
    transition: 0.3s;
    &.long {
        transition: 0.3s;
        top: -30px;
        left: -210px;
        opacity: 1;
    }
    &.short {
        transition: 0.3s;
        top: -30px;
        opacity: 1;
    }
}
.shield-tab {
    width: 90%;
    margin-left: 5%;
    height: 570px;
}
.shield-tab-header {
    width: 100%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    > div {
        font-size: 18px;
        &.active {
            color: #00a1d6;
            box-shadow: 0 1px 0 0 #00a1d6;
        }
    }
    > div:first-of-type ~ div {
        margin-left: 12px;
    }
}
.shield-tab-container {
    width: 100%;
    background: rgb(160, 160, 160, 0.2);
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 0;
    &.null {
        min-height: 145px;
    }
}
.shield-tab-head {
    width: 95%;
    padding: 5px 2.5%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    color: rgb(160, 160, 160);
    font-size: 17px;
    height: 20px;
    > div:last-of-type {
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
        width: 120px;
    }
}
.shield-tab-content {
    width: 95%;
    margin-left: 2.5%;
    min-height: 20px;
    padding-bottom: 10px;
}
.shield-list-item {
    width: 100%;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-size: 18px;
    user-select: none;
    &.close {
        background: rgba(160, 160, 160, 0.15);
        > span {
            color: rgb(160, 160, 160, 0.6);
        }
    }
    &:hover {
        background: rgba(160, 160, 160, 0.15);
    }
    > span:first-child {
        width: 50%;
        padding-left: 2%;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    > span:last-child {
        user-select: none;
        width: 44%;
        display: inline-flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 99;
        > span {
            color: #00a1d6;
        }
    }
    .shield-content-handle:hover {
        > .icons::before {
            color: #00a1d6;
        }
    }
}
</style>

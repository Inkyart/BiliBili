<!-- 评论组件 -->
<template>
    <div class="common">
        <div class="common-header">
            <h3 class="common-title">
                <span>{{ commonNum }} </span>
                评论
            </h3>
            <div class="common-sort">
                <div
                    @click="heatSort"
                    :class="{ active: sort === 'heat' }"
                    class="sort common-sort-heat"
                >
                    按热度排序
                </div>
                <div
                    @click="timeSort"
                    :class="{ active: sort === 'time' }"
                    class="sort common-sort-time"
                >
                    按时间排序
                </div>
            </div>
        </div>
        <div class="common-input">
            <v-input @sendCommon="sendCommon"></v-input>
        </div>
        <div class="common-list">
            <ul class="common-list-container">
                <li
                    class="common-list-item"
                    v-for="(item, commonIndex) in commonList"
                    :key="commonIndex"
                >
                    <div class="list-item-common">
                        <v-common
                            :name="item.name"
                            :time="item.data.date"
                            :content="item.content"
                            :bad="item.data.bad"
                            :good="item.data.good"
                            :reply="item.reply"
                            :level="item.level"
                            :index="commonIndex"
                            @clickReply="clickReply"
                        ></v-common>
                    </div>
                    <div class="list-item-reply" v-if="item.replyList">
                        <v-common
                            v-for="(item, replyIndex) in item.replyList"
                            :key="replyIndex"
                            :name="item.name"
                            :time="item.data.date"
                            :content="item.content"
                            :bad="item.data.bad"
                            :good="item.data.good"
                            :reply="item.reply"
                            :level="item.level"
                            :index="commonIndex"
                            @clickReply="clickReply"
                        ></v-common>
                    </div>
                    <div class="list-item-reply" v-show="index === commonIndex">
                        <v-input @sendCommon="sendCommon" :reply="true" :replyName="replyName"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import VInput from './input.vue'
import VCommon from './common.vue'
export default {
    components: {
        VInput,
        VCommon
    },
    data () {
        return {
            commonList: [], // 回复列表
            commonNum: 0, // 回复数目
            index: null, // 显示回复索引
            replyName: '', // 回复的用户名
            name: '', // 用户名称
            timeSortOrder: 1, // 时间排序升降序
            heatSortOrder: 1, // 热度排序升降序
            sort: 'heat'
        }
    },
    methods: {
        /**
         * 用于回复
         * @param {number} index - 索引
         * @param {string} name - 回复用户名
         * @param {boolean} index - 是否是回复 即 回复的评论是否已是回复
         */
        clickReply (index, name) {
            // 如果 当前显示的回复 索引 等于 index 和 回复的用户名称与 name 一致 即 再次点击回复时
            if (this.index === index && this.replyName === name) {
                // 清空并停止函数
                this.index = ''
            } else {
                this.index = index
                this.replyName = name
            }
        },
        /**
         * 用于回复
         * @param {object} common - 回复内容数据
         * @param {boolean} reply - 是否是回复
         */
        sendCommon (common, reply) {
            if (reply) {
                this.commonList[this.index].replyList.push(common)
            } else {
                this.commonList.push(common)
            }
            this.commonNum += 1
        },
        timeSort () {
            this.sort = 'time'
            this.commonList.sort((a, b) => a.data.date < b.data.date ? this.timeSortOrder : -this.timeSortOrder)
            this.timeSortOrder = -this.timeSortOrder
        },
        heatSort () {
            this.sort = 'heat'
        }
    }
}
</script>
<style lang="scss" scoped>
.common {
    position: relative;
    height: 500px;
    width: 100%;
}
.common-header {
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    margin: 25px 0;
    > .common-title {
        width: 100%;
        text-align: left;
        padding-bottom: 20px;
        font-size: 18px;
        > span {
            font-size: 16px;
        }
    }
    > .common-sort {
        width: 100%;
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 0 1px 0 0 rgb(160, 160, 160, 0.2);
        font-size: 18px;
        font-weight: 700;
        > .sort {
            width: 92px;
            padding: 3px 0;
            position: relative;
            user-select: none;
            &:last-of-type {
                margin-left: 20px;
            }
        }
        > .active,
        > .sort:hover {
            color: #00a1d6;
        }
        > .active {
            &::after {
                position: absolute;
                content: '';
                left: calc(50% - 5px);
                height: 0;
                width: 0;
                bottom: 0;
                border: 3px solid transparent;
                border-bottom-color: #00a1d6;
            }
            box-shadow: 0 1px 0 0 #00a1d6;
        }
    }
}
.common-list,
.common-list-container,
.common-list-item {
    width: 100%;
    position: relative;
    &::after {
        position: absolute;
        content: '';
        width: 92.5%;
        height: 1px;
        background: rgb(160, 160, 160, 0.2);
        bottom: 0;
        right: 0;
    }
    > .list-item-common {
        width: 100%;
    }
    > .list-item-reply {
        width: 92.5%;
        position: relative;
        left: 7.5%;
    }
    > .list-item-flod {
        width: 100%;
        text-align: left;
        background-color: red;
    }
}
</style>

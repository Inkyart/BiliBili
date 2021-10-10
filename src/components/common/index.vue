<!-- 评论组件 -->
<template>
    <div class="common">
        <div class="common-header">
            <h3 class="common-title">
                <span>{{ commonList.length }} </span>
                评论
            </h3>
            <div class="common-sort">
                <div
                    @click="sort = 'heat'"
                    :class="{ active: sort === 'heat' }"
                    class="sort common-sort-heat"
                >
                    按热度排序
                </div>
                <div
                    @click="sort = 'time'"
                    :class="{ active: sort === 'time' }"
                    class="sort common-sort-time"
                >
                    按时间排序
                </div>
            </div>
        </div>
        <div class="common-input">
            <v-input></v-input>
        </div>
        <div class="common-list">
            <ul class="common-list-container">
                <li
                    class="common-list-item"
                    v-for="(item, index) in commonList"
                    :key="index"
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
                            :index="index"
                            @clickReply="clickReply"
                        ></v-common>
                    </div>
                    <div class="list-item-reply" v-if="!item.reply">
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
                            :index="index"
                            @clickReply="clickReply"
                        ></v-common>
                    </div>
                    <div class="list-item-reply" v-show="reply === index">
                        <v-input
                            :replyName="replyName"
                            @sendCommon="sendCommon"
                            :ref="input"
                        />
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
            sort: 'heat', // 默认以热度排序
            commonList: [
                {
                    name: '甲', // 用户名
                    level: 2, // 用户等级
                    userImg: '', // 用户头像
                    content:
                        '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                    data: {
                        // 评论数据
                        date: '2021-09-27 07:55', // 日期
                        good: 999, // 点赞
                        bad: 0 // 点踩
                    },
                    reply: false, // 是否是回复
                    replyList: [] // 回复内容列表
                },
                {
                    name: '乙', // 用户名
                    level: 5, // 用户等级
                    userImg: '', // 用户头像
                    content:
                        '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                    data: {
                        // 评论数据
                        date: '2021-09-27 07:55', // 日期
                        good: 999, // 点赞
                        bad: 0 // 点踩
                    },
                    reply: false, // 是否是回复
                    replyList: [
                        {
                            name: '丙', // 用户名
                            level: 6, // 用户等级
                            userImg: '', // 用户头像
                            content:
                                '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                            data: {
                                // 评论数据
                                date: '2021-09-27 07:55', // 日期
                                good: 999, // 点赞
                                bad: 0 // 点踩
                            },
                            reply: true, // 是否是回复
                            replyList: [] // 回复内容列表
                        },
                        {
                            name: '丁', // 用户名
                            level: 2, // 用户等级
                            userImg: '', // 用户头像
                            content:
                                'awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', // 用户评论内容
                            data: {
                                // 评论数据
                                date: '2021-09-27 07:55', // 日期
                                good: 999, // 点赞
                                bad: 0 // 点踩
                            },
                            reply: true, // 是否是回复
                            replyList: [] // 回复内容列表
                        },
                        {
                            name: '任', // 用户名
                            level: 4, // 用户等级
                            userImg: '', // 用户头像
                            content:
                                '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                            data: {
                                // 评论数据
                                date: '2021-09-27 07:55', // 日期
                                good: 999, // 点赞
                                bad: 0 // 点踩
                            },
                            reply: true, // 是否是回复
                            replyList: [] // 回复内容列表
                        }
                    ] // 回复内容列表
                },
                {
                    name: '葵', // 用户名
                    level: 2, // 用户等级
                    userImg: '', // 用户头像
                    content:
                        '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                    data: {
                        // 评论数据
                        date: '2021-09-27 07:55', // 日期
                        good: 999, // 点赞
                        bad: 0 // 点踩
                    },
                    reply: false, // 是否是回复
                    replyList: [] // 回复内容列表
                },
                {
                    name: '戌', // 用户名
                    level: 3, // 用户等级
                    userImg: '', // 用户头像
                    content:
                        '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内', // 用户评论内容
                    data: {
                        // 评论数据
                        date: '2021-09-27 07:55', // 日期
                        good: 999, // 点赞
                        bad: 0 // 点踩
                    },
                    reply: false, // 是否是回复
                    replyList: [] // 回复内容列表
                }
            ],
            reply: null, // 显示回复索引
            replyName: '' // 回复的用户名
        }
    },
    methods: {
        /**
         * 用于回复
         * @param {number} key - 索引
         * @param {string} name - 回复用户名
         * @param {boolean} reply - 是否是回复 即 回复的评论是否已是回复
         */
        clickReply (key, name) {
            // 如果 当前显示的回复 索引 等于 key 和 回复的用户名称与 name 一致 即 再次点击回复时
            if (this.reply === key && this.replyName === name) {
                // 清空并停止函数
                this.reply = ''
            } else {
                this.reply = key
                this.replyName = name
            }
        },
        sendCommon () {}
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
}
</style>

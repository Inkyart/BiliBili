i<!-- 评论组件 -->
<template>
    <div class="item">
        <div
            class="item-userImg"
            @mouseover="show = true"
        >
            <div class="item-user-card" v-show="show" @mouseout="show = false">
                <v-card :issuer="name" :style="{'bottom': reply ? '-80px' : '-60px'}"></v-card>
            </div>
            <div
                class="item-userImg-container"
                :style="
                    reply
                        ? { width: '24px', height: '24px' }
                        : { width: '48px', height: '48px' }
                "
            >
                <img src="" alt="" />
            </div>
        </div>
        <div :class="reply ? 'reply' : 'item-container'">
            <div class="item-user-container">
                <div v-if="!reply" class="item-user-name">{{ name }}</div>
                <i v-if="!reply" :class="'icons icons-level-' + level"></i>
                <span class="item-user-reply" v-if="reply">
                    <p>
                        {{ name }}
                        <i :class="'icons icons-level-' + level"></i>
                    </p>
                    <p
                        :style="{
                            textIndent: `calc(${name.length - 1}em + 50px)`
                        }"
                    >
                        {{ content }}
                    </p>
                </span>
            </div>
            <div v-if="!reply" class="item-content">{{ content }}</div>
            <div class="item-data">
                <span>
                    <span class="date">{{ time }}</span>
                    <span class="good" @click="clickGood"
                        ><i
                            :class="{ active: click_good }"
                            class="icons icons-good"
                        ></i
                        ><span v-if="goodNumber > 0">{{
                            goodNumber
                        }}</span></span
                    >
                    <span class="bad" @click="clickBad"
                        ><i
                            :class="{ active: click_bad }"
                            class="icons icons-bad"
                        ></i
                    ></span>
                    <span class="item-reply" @click="clickReply">回复</span>
                </span>
                <span v-if="!reply"> <i class="icons icons-list"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
import VCard from '../card/card.vue'
export default {
    components: {
        VCard
    },
    props: {
        name: {
            // 用户名
            type: String,
            default: '用户名'
        },
        content: {
            // 用户评论内容
            type: String,
            default: '评论内容'
        },
        time: {
            // 用户评论时间
            type: [String, Date],
            default: '评论时间'
        },
        good: {
            // 点赞数
            type: Number,
            default: 0
        },
        bad: {
            // 点踩数
            type: Number,
            default: 0
        },
        reply: {
            // 是否是回复
            type: Boolean,
            default: false
        },
        level: {
            // 用户等级
            type: Number,
            default: 0
        },
        index: {
            // 不是回复的索引
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            click_good: false, // 是否点赞
            click_bad: false, // 是否点踩
            goodNumber: this.good, // 将获取到的点赞数引用，因为子组件无法修改 props
            show: false // 是否显示个人迷你资料卡
        }
    },
    methods: {
        // 点赞
        clickGood () {
            if (this.click_good) this.goodNumber -= 1
            else this.goodNumber += 1
            this.click_good = !this.click_good

            if (this.click_bad) this.badNumber -= 1
            this.click_bad = false
        },
        // 点踩
        clickBad () {
            this.clickGood()
            this.click_bad = true
        },
        // 回复
        clickReply () {
            this.$emit('clickReply', this.index, this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    width: 100%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 8px 0;
    position: relative;
    z-index: 8;
}
.item-userImg {
    border-radius: 50%;
    position: relative;
    .item-userImg-container {
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        > img {
            width: 100%;
            height: 100%;
        }
    }
}

.item-container {
    width: 92.5%;
    display: flex;
    flex-flow: nowrap column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 10px;

    > .item-user-container,
    > .item-content,
    > .item-data {
        width: 100%;
        text-align: left;
        font-size: 18px;
        &.item-content {
            margin: 5px 0;
        }
    }
    > .item-user-container {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        > .item-user-name {
            margin-right: 8px;
        }
    }
}
.item-data {
    font-size: 12px;
    color: rgb(160, 160, 160);
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    > span {
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        &:first-of-type ~ span {
            margin: 0 3px;
        }
        > .good,
        > .bad {
            margin: 0 3px;
            &.active i::before {
                color: #00a1d6;
            }
        }
    }
}
.item-reply {
    &:hover {
        background: rgb(160, 160, 160, 0.2);
        user-select: none;
        cursor: pointer;
        color: #00a1d6;
        border-radius: 5px;
    }
}
.reply {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
    min-height: 60px;
    > .item-user-container {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: wrap row;
        > .item-user-reply {
            text-align: left;
            line-height: 20px;
            width: 100%;
            display: flex;
            flex-flow: wrap row;
            word-wrap: break-word;

            p:first-child {
                display: flex;
                flex-flow: nowrap row;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                > i {
                    margin-left: 8px;
                }
            }

            p:last-child {
                width: 100%;
            }
        }
    }
    > .item-data {
        width: 100%;
    }
    > .item-content {
        margin-left: 25px;
    }
}
</style>

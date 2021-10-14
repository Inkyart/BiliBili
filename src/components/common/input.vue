<!-- 评论组件的发表部分 -->
<template>
    <div class="input">
        <div class="input-userImg">
            <img src="" alt="" />
        </div>
        <div class="input-container">
            <textarea
                class="input-content"
                :placeholder="replyName === '' ? '发一条友善的评论' : `回复 @ ${replyName} :`"
                v-model="common"
            ></textarea>
            <button @click="send"><span>发表评论</span></button>
        </div>
    </div>
</template>
<script>
import randomNumber from '../../util/randomNum'
import date from '../../util/date'
export default {
    props: {
        // 被回复的用户名
        replyName: {
            type: String,
            default: ''
        },
        // 回复的用户名
        data: {
            type: Map,
            default: {
                name: '用户名',
                level: Math.floor(Math.random() * 7),
                userImg: ''
            }
        },
        // 是否是回复
        reply: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            common: ''
        }
    },
    methods: {
        send () {
            if (this.common === '') return

            const common = {
                // name: this.data.name, // 用户名
                name: this.userName(),
                level: this.data.level, // 用户等级
                userImg: this.data.userImg, // 用户头像
                content: (() => {
                    // 评论内容
                    if (this.reply) {
                        return `回复 @${this.replyName}: ${this.common}`
                    } else return this.common
                })(),
                data: {
                    // 评论数据
                    date: date(), // 日期
                    good: 0, // 点赞
                    bad: 0 // 点踩
                },
                reply: this.reply, // 是否是回复
                replyList: [] // 回复内容列表
            }

            this.$emit('sendCommon', common, this.reply) // 触发事件 发表评论
            this.common = '' // 清空评论内容
        },
        // 用于生成一次性用户名
        userName () {
            let name = ''
            for (let i = 0; i < parseInt(Math.random() * 17, 10); i++) {
                name += String.fromCharCode(randomNumber(0x4e00, 0x9fa5, 10))
            }
            return name
        }
    }
}
</script>
<style lang="scss" scoped>
.input {
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}
.input-userImg {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 50%;
    > img {
        width: 100%;
        height: 100%;
    }
}
.input-container {
    width: 92.5%;
    height: 65px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    > button {
        height: 65px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #00a1d6;
        border-radius: 5px;
        > span {
            width: 50%;
            color: white;
            font-size: 18px;
        }
        &:hover {
            background-color: #02abe4;
        }
    }
    > textarea {
        width: 90%;
        padding: 5px 0 0 1%;
        height: 60px;
        resize: none;
        border-radius: 5px;
        outline: none;
        border: 1px solid rgba(160, 160, 160, 0.2);
        background: rgba(160, 160, 160, 0.1);
        &:focus,
        &:hover {
            background-color: white;
            border: 1px solid #00a1d6;
        }
    }
}
</style>

<!-- 评论组件的发表部分 -->
<template>
    <div class="input">
        <div class="input-userImg">
            <img src="" alt="" />
        </div>
        <div class="input-container">
            <textarea
                class="input-content"
                :placeholder="
                    replyName === ''
                        ? '发一条友善的评论'
                        : `回复 @${replyName} :`
                "
                v-model="common"
            ></textarea>
            <button><span>发表评论</span></button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // 回复的用户名
        replyName: {
            type: String,
            default: ''
        }
    },
    data () {
        return {}
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

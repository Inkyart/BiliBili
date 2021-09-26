<!-- 迷你简介 -->
<template>
    <div class="card">
        <div class="card-container">
            <div class="card-background">
                <img :src="img" alt="" />
            </div>
            <div class="card-content">
                <div class="card-content-left">
                    <div class="card-userImg">
                        <img :src="background" alt="" />
                    </div>
                </div>
                <div class="card-content-right">
                    <div class="card-name">
                        <span>{{ issuer }}</span>
                        <span :class="'level-' + level"></span>
                    </div>
                    <div class="card-foucsFan">
                        <span>关注: {{ foucs }}</span>
                        <span>粉丝: {{ fans }}</span>
                    </div>
                    <div class="card-introduction">
                        <span>{{ introduction }}</span>
                    </div>
                    <div class="card-btn">
                        <button class="card-foucs">
                            <span>+关注</span>
                        </button>
                        <button class="card-sendMsg">
                            <span>发消息</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        issuer: {
            type: String
        },
        introduction: {
            type: String
        },
        fans: {
            type: Number
        },
        img: {
            type: String
        }
    },
    data () {
        return {
            foucs: 0, // 关注数
            level: 1, // 等级
            background: '' // 用户资料卡背景
        }
    }
}
</script>
<style lang="scss" scoped>
.card {
    top: 0;
    height: 350px;
    width: 350px;
    position: absolute;
    right: 40px;
    padding-top: 80px;
}
.card-container {
    width:100%;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgb(160, 160, 160);
    padding: 0 25px;
}
.card-background {
    height: 100px;
    width: 100%;
}
.card-content {
    width: 100%;
    background-color: white;
    display: flex;
    flex-flow: nowrap row;
    position: relative;
    max-height: 300px;
}
.card-content-left,
.card-content-right {
    position: relative;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    &.card-content-left {
        width: 60px;
    }
    &.card-content-right {
        width: calc(100% - 60px);
        align-items: flex-start;
        justify-content: space-around;
    }
}
.card-userImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    overflow: hidden;
    > img {
        width: 100%;
        height: 100%;
    }
}
.card-name {
    width: 100%;
    height: 20px;
    text-align: left;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    > span:first-of-type {
        font-size: 18px;
        font-weight: 700;
    }
    > span:last-of-type {
        display: inline-block;
        width: 19px;
        height: 9px;
        padding: 1px 0;
        vertical-align: middle;
        margin-left: 8px;
        background-image: url('../../assets/icons/icons-comment.png');
        background-repeat: no-repeat;
    }
    .level-6 {
        background-position: -23px -410px;
    }
    .level-5 {
        background-position: -23px -346px;
    }
    .level-4 {
        background-position: -23px -282px;
    }
    .level-3 {
        background-position: -23px -218px;
    }
    .level-2 {
        background-position: -23px -154px;
    }
    .level-1 {
        background-position: -23px -90px;
    }
    .level-0 {
        background-position: -23px -26px;
    }
}
.card-foucsFan {
    min-width: 40%;
    max-width: 60%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    font-size: 16px;
}
.card-introduction {
    width: 90%;
    padding: 10px 2.5% 10px 0;
    overflow: hidden;
    color: rgb(160, 160, 160);
    text-align: left;
    > span {
        width: 100%;
        word-wrap: break-word;
    }
}
.card-btn {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    > button {
        width: 70px;
        height: 40px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 2px 0 rgb(160, 160, 160);
        &.card-foucs {
            background-color: #00a1d6;
            color: white;
            font-size: 18px;
        }
        &.card-sendMsg {
            background-color: white;
            margin-left: 50px;
        }
    }
}
</style>

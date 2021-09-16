<!-- 发行者 UP主 -->
<template>
    <div class="issuer">
        <div
            class="issuer-container"
            @mousemove="show = true"
            @mouseleave="show = false"
        >
            <img src="img" alt="" class="issuer-container-img" />
            <v-introduction
                v-show="show"
                :issuer="issuerName"
                :introduction="issuerIntroduction"
                :fans="fans"
                :img="img"
            ></v-introduction>
        </div>
        <div class="issuer-info">
            <div class="issuer-info-name">
                <span>{{ issuerName }}</span>
            </div>
            <div class="issuer-info-sendMsg">
                <span>发消息</span>
            </div>
            <div class="issuer-info-introduction">
                <span>{{ issuerIntroduction }}</span>
            </div>
            <div class="issuer-info-focus">
                <button>
                    <span>+</span><span>关注</span><span>{{ fans }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import VIntroduction from './card.vue'
export default {
    components: {
        VIntroduction
    },
    data () {
        return {
            issuerName: 'xxxx', // UP主名
            issuerIntroduction:
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 简介
            fans: 0, // 关注（粉丝）数
            show: false, // 迷你简介是否显示
            img: '' // 用户头像
        }
    }
}
</script>
<style lang="scss" scoped>
.issuer {
    width: 300px;
    height: 80px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 0;
}
.issuer-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 5px;
}

.issuer-container-img {
    width: 100%;
    height: 100%;
}
.issuer-info {
    width: 240px;
    height: 80px;
    display: flex;
    flex-flow: wrap row;
    align-items: flex-start;
    justify-content: space;
}
.issuer-info-name {
    height: 22px;
    padding: 1px 0;
    > span {
        font-size: 22px;
    }
}
.issuer-info-sendMsg {
    margin-left: 4px;
    height: 12px;
    padding: 3px 0;
    > span {
        font-size: 16px;
    }
}
.issuer-info-introduction {
    width: 240px;
    text-align: left;
    height: 25px;
    color: rgb(160, 160, 160);
    overflow: hidden;
    text-overflow: ellipsis;
}
.issuer-info-focus {
    width: 160px;
    height: 50px;
    > button {
        width: 100%;
        border: none;
        background-color: #00a1d6;
        color: white;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-evenly;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
    }
}
</style>

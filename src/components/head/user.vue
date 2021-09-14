<!-- 页面头部的 用户相关部分 -->
<template>
    <div class="user">
        <!-- 用户头像 -->
        <div
            @mouseover="mouse()"
            @mouseleave="leave()"
            :class="over ? 'user-imgContainer-active' : 'user-imgContainer'"
        >
            <img src="" alt="" class="user-imgContainer-img" />
            <v-info v-show="over"></v-info>
        </div>
        <!-- 用户相关 -->
        <div class="user-link">
            <div class="user-link-member"><span>大会员</span></div>
            <div class="user-link-message"><span>信息</span></div>
            <div class="user-link-dynamic"><span>动态</span></div>
            <div class="user-link-collect"><span>收藏</span></div>
            <div class="user-link-history"><span>历史</span></div>
            <div class="user-link-creation"><span>创作中心</span></div>
            <div class="user-link-contribute"><span>投稿</span></div>
        </div>
    </div>
</template>
<script>
import VInfo from './info' // 导入 用户信息
export default {
    components: {
        VInfo
    },
    data () {
        return {
            over: false
        }
    },
    methods: {
        mouse () {
            this.over = true
        },
        leave () {
            this.over = false
        }
    }
}
</script>
<style lang="scss" scoped>
.user {
    width: 515px;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
}
.user-imgContainer {
    width: 60px;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.user-imgContainer-active {
    width: 60px;
    height: 60px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    position: relative;
    > img {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 1px solid #000;
        border-radius: 50%;
        overflow: hidden;
        z-index: 66;
        top: 15px;
    }
}
.user-imgContainer-img {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 50%;
    overflow: hidden;
}
.user-link {
    width: 450px;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
}
.user-link > div {
    height: 35px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    > span {
        font-size: 18px;
        font-weight: 400;
    }
}
.user-link-contribute {
    width: 100px;
    background-color: #fb7299;
    color: white;
}
</style>

<!-- 视频推荐列表 -->
<template>
    <div class="list">
        <div class="list-header">
            <span>接下来播放</span>
            <span>
                <span>自动连播</span>
                <div
                    class="list-switch-container"
                    :class="{ active: autoPlay }"
                >
                    <input type="checkbox" v-model="autoPlay" />
                    <div
                        class="list-switch-content"
                        :class="{ active: autoPlay }"
                    ></div>
                </div>
            </span>
        </div>
        <div class="list-body">
            <ul class="list-container">
                <li
                    class="list-item"
                    v-for="(item, index) in videoList"
                    :key="index"
                    :class="{ first: index === 0 }"
                >
                    <div class="list-item-img">
                        <img :src="item.img" alt="" />
                    </div>
                    <div class="list-item-text">
                        <div class="list-item-title">{{ item.title }}</div>
                        <div class="list-item-issuer">
                            <span>{{ item.issuer }}</span>
                        </div>
                        <div class="list-item-data">
                            <span class="list-item-data-plays"
                                >{{ item.plays }}播放</span
                            >
                            <span class="list-item-data-barrages"
                                >{{ item.barrages }}弹幕</span
                            >
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            autoPlay: false, // 是否自动播放
            videoList: [
                {
                    title: '视频标题', // 视频标题
                    img: '', // 视频封面图像
                    issuer: '甲', // 视频发布者
                    plays: 0, // 视频播放数量
                    barrages: 0 // 视频包含弹幕数量
                }
            ] // 视频推荐列表
        }
    }
}
</script>
<style lang="scss" scoped>
.list,
.list-body,
.list-header,
.list-container {
    width: 100%;
}
.list-header {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-weight: 600;
    > span {
        height: 30px;
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
    }
    > span:last-of-type {
        width: 110px;
        justify-content: space-between;
        color: rgb(160, 160, 160);
    }
}
.list-switch-container {
    width: 30px;
    background: rgb(160, 160, 160, 0.4);
    border-radius: 25px;
    height: 18px;
    padding: 2px;
    position: relative;
    &.active {
        background: #00a1d6;
        transition: 0.2s;
    }
    > input[type='checkbox'] {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .list-switch-content {
        width: 20px;
        height: 18px;
        background: white;
        border-radius: 50%;
        transition: 0.2s;
        &.active {
            margin-left: 10px;
            transition: 0.2s;
        }
    }
}
.list-item {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
	margin: 8px 0;
    > div {
        height: 80px;
    }
    > div:first-of-type {
        width: 44%;
        > img {
            width: 100%;
            height: 100%;
        }
    }
    > div:last-of-type {
        width: 53%;
        display: flex;
        flex-flow: nowrap column;
        justify-content: space-between;
        align-items: flex-start;
    }
    &.first {
        padding-bottom: 15px;
        box-shadow: 0 1px 0 0 rgb(160, 160, 160, 0.3);
		margin-bottom: 15px;
    }
}
.list-item-title {
    width: 167px;
    height: 40px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2; //超出2行显示省略号，可修改数字
    -webkit-box-orient: vertical;
    text-align: left;
}
.list-item-issuer {
    width: 100%;
    height: 20px;
    text-align: left;
    color: rgb(160, 160, 160);
}
.list-item-data {
    width: 100%;
    height: 20px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    color: rgb(160, 160, 160);
}
</style>

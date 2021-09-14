<!-- 用户的信息 -->
<template>
    <div class="info">
        <div class="info-name">
            <span>{{ userName }}</span>
        </div>
        <div class="info-level">
            <span>等级{{ userLevel }}</span>
            <span>{{ userSchedule }}</span>
            <div class="info-schedule-container">
                <div class="info-schedule"></div>
            </div>
        </div>
        <div class="info-token">
            <div>
                <div class="info-coin">{{ userCoin }}</div>
                <div class="info-BCurrency">{{ BCurrency }}</div>
            </div>
            <div>
                <div class="info-email">e</div>
                <div class="info-phone">p</div>
            </div>
        </div>
        <div class="info-socialContact">
            <div class="info-focusOn">
                <span>关注</span><span>{{ userFocus }}</span>
            </div>
            <div class="info-fan">
                <span>粉丝</span><span>{{ userFan }}</span>
            </div>
            <div class="info-dynamic">
                <span>动态</span><span>{{ userDynamic }}</span>
            </div>
        </div>
        <div class="info-userCenter">
            <span>个人中心</span>
        </div>
        <div class="info-submitManage">
            <span>投稿管理</span>
        </div>
        <div class="info-wallet">
            <span>B币钱包</span>
        </div>
        <div class="info-orderCenter">
            <span>订单中心</span>
        </div>
        <div class="info-liveStreamingCenter">
            <span>直播中心</span>
        </div>
        <div class="info-mineCourse">
            <span>我的课程</span>
        </div>
		<div class="info-exit">
			<span>退出</span>
		</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userName: 'XXXX',
            userLevel: 1,
            userSchedule: '10/100',
            userCoin: 0,
            BCurrency: 0,
            userFocus: 0,
            userFan: 0,
            userDynamic: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.info {
	padding-top: 40px;
    position: absolute;
    width: 250px;
    height: 480px;
    top: 55px;
    background-color: white;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 0 0 rgb(240, 240, 240), -1px 0 0 0 rgb(240, 240, 240);
    border-radius: 0 0 10px 10px;
    > div {
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
    }
}
.info-name {
	width: 250px;
    justify-content: center;
}
.info-level {
	width: 210px;
    justify-content: space-between;
    font-size: 16px;
    position: relative;
    padding: 0 0 8px 0;
}
.info-schedule-container {
	width: 210px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(240, 240, 240);
    > .info-schedule {
        width: 10%;
        height: 2px;
        background-color: rgb(255, 174, 0);
    }
}
.info-token {
	width: 210px;
    justify-content: space-between;
    > div {
        width: 50%;
        display: flex;
        flex-flow: nowrap row;
        justify-content: start;
        align-items: center;
        &:last-child {
            justify-content: end;
        }
    }
}
.info-socialContact {
	width: 200px;
    justify-content: space-between;
    height: 40px;
    box-shadow: 0 1px 0 0 rgb(235, 235, 235), 0 -1px 0 0 rgb(235, 235, 235);
    padding: 4px 25px 10px 25px;
    > div {
        height: 30px;
        display: flex;
        flex-flow: wrap column;
        justify-content: space-between;
        align-items: center;
        > span {
            width: 100%;
            text-align: center;
            color: rgb(160, 160, 160);
            height: 20px;
            &:last-child {
                height: 10px;
                color: #000;
            }
        }
    }
    & ~ div {
		width: 230px;
        justify-content: flex-start;
		> span {
			margin-left: 15%;
		}
    }
}
.info-exit{
	width: 250px;
	border-top: 1px solid rgb(235, 235, 235);
	height: 40px;
	align-items: center;
}
</style>

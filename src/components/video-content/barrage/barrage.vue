<!-- 弹幕输入框 -->
<template>
    <div class="barrage">
        <div class="barrage-left">
            <span class="watch-pop">0 人正在看</span>
        </div>
        <div class="barrage-right">
            <div class="barrage-watch">
                <div
                    class="switch-container"
                    @click="active = !active"
                    :class="{active:active}"
                >
                    <div class="switch-content">
						<span>弹</span>
					</div>
                </div>
            </div>
            <div class="barrage-setting">
				<span class="icons"></span>
			</div>
            <div class="barrage-input">
				<span>A</span>
				<input type="text" placeholder="发个友善的弹幕见证当下">
				<a>弹幕礼仪 <span class="icons icons-right"></span></a>
				<button>
					<span>发送</span>
				</button>
			</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: false // 是否开启弹幕
        }
    }
}
</script>
<style lang="scss" scoped>
.icons.icons-right{
	width: 6px;
	height: 6px;
	transform: rotateZ(45deg);
	display: inline-block;
	border-right: 2px solid rgb(160, 160, 160);
	border-top: 2px solid rgb(160, 160, 160);
	position: absolute;
	right: 10px;
	top: calc(50% - 4px);
}
.barrage {
    padding-left:1%;
    width: 99%;
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
	padding-top: 5px;
}
.barrage-left,
.barrage-right {
    height: 40px;
    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    &.barrage-left {
        width: 300px;
        text-overflow: ellipsis;
    }
    &.barrage-right {
        width: 800px;
		justify-content: space-evenly;
    }
}
.switch-container {
    width: 28px;
    height: 18px;
	padding: 1px;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgb(160, 160, 160);
	background-color: rgb(160, 160, 160);
    > input[type='checkbox'] {
        width: 100%;
        height: 100%;
    }
	> .switch-content{
		width: 18px;
		height: 18px;
		box-shadow: 0 0 2px 0 rgb(160, 160, 160);
		border-radius: 50%;
		background-color: white;
		transition: 0.2s;
		display: flex;
		flex-flow: nowrap row;
		justify-content: center;
		align-items: center;
		color: rgb(160, 160, 160);
	}
    &.active {
        background: #00a1d6;
		> .switch-content{
			margin-left: 10px;
			color:#00a1d6;
		}
    }
}
.barrage-setting{
	width:30px;
	height:20px;
	box-shadow: 0 0 3px 0 red;
}
.barrage-input{
	width:705px;
	height:30px;
	background-color: rgba(160, 160, 160,0.1);
	display: flex;
	flex-flow: nowrap row;
	justify-content: flex-start;
	align-items: center;
	> span{
		width: 30px;
		text-decoration: underline 2px;
		font-weight: 600;
	}
	> input {
		width: 530px;
		border: none;
		outline: none;
		background-color: transparent;
	}
	> button{
		width: 60px;
		height: 30px;
		border: none;
		box-shadow: 0 0 1px 0 rgb(160, 160, 160);
		background-color: #00a1d6;
		color: white;
		font-weight: 600;
		font-size: 18px;
	}
	> a{
		width: 90px;
		text-align: left;
		display: inline;
		padding: 4px 0 ;
		position: relative;
		font-weight: 600;
		color: rgb(160, 160, 160);
		&:hover{
			color:#00a1d6;
			> span {
				border-color: #00a1d6;
			}
		}
	}
}
</style>

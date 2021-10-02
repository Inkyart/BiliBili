<!-- 日历 -->
<template>
    <div class="calendar">
        <div class="calendar-header">
            <div class="calendar-upMonth" @click="upMonth">
                <i class="icons icons-left"></i>
            </div>
            <div class="calendar-date">
                <span>{{ Year }}年</span>
                <span
                    >{{
                        [
                            '一',
                            '二',
                            '三',
                            '四',
                            '五',
                            '六',
                            '七',
                            '八',
                            '九',
                            '十',
                            '十一',
                            '十二'
                        ][Month]
                    }}月</span
                >
            </div>
            <div class="calendar-downMonth" @click="downMonth">
                <i class="icons icons-right"></i>
            </div>
        </div>
        <div class="calendar-body">
            <div class="calendar-table">
                <div class="calendar-table-head">
                    <div class="calendar-day"><span>日</span></div>
                    <div class="calendar-day"><span>一</span></div>
                    <div class="calendar-day"><span>二</span></div>
                    <div class="calendar-day"><span>三</span></div>
                    <div class="calendar-day"><span>四</span></div>
                    <div class="calendar-day"><span>五</span></div>
                    <div class="calendar-day"><span>六</span></div>
                </div>
                <div class="calendar-table-body">
                    <div
                        class="calendar-day"
                        v-for="(item, index) in dateList"
                        :key="index"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import date from '../../../util/calendar'
export default {
    data () {
        return {
            Month: new Date().getMonth(),
            Year: new Date().getFullYear(),
            dateList: date().dateList // 日期列表
        }
    },
    methods: {
        upMonth () {
            if (this.Month - 1 < 0) {
                this.Year -= 1
                this.Month = 11
            } else this.Month -= 1
            this.dateList = date(this.Month, this.Year).dateList
        },
        downMonth () {
            if (this.Month + 1 > new Date().getMonth()) return
            if (this.Month + 1 > 11) {
                this.Year += 1
                this.Month = 0
            } else this.Month += 1
            this.dateList = date(this.Month, this.Year).dateList
        }
    }
}
</script>
<style lang="scss" scoped>
.calendar {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 3px 1px rgba(160, 160, 160, 0.2);
}
.calendar-header {
    width: 100%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
    box-shadow: 0 1px 0 0 rgba(160, 160, 160, 0.2);
    > .calendar-date {
        width: 140px;
        height: 30px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        color: rgb(160, 160, 160);
        font-size: 14px;
    }
}
.calendar-body {
    width: 100%;
    height: 180px;
}
.calendar-table {
    width: 100%;
    height: 100%;
}
.calendar-day {
    width: 34px;
    font-size: 16px;
    text-align: center;
}
.calendar-table-head {
    width: 99%;
    height: 30px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 500;
}
.calendar-table-body {
    width: 100%;
    height: 150px;
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    color: rgb(160, 160, 160);
    > .calendar-day{
        font-size: 14px;
        user-select: none;
        &:hover{
            box-shadow: 0 0 0 1px #00a1d6;
        }
    }
}
</style>

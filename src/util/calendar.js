/**
 * 用于返回日期
 * @param {number} month - 需要获取的月份 默认是当前月份 月份从 0 开始
 * @param {number} fullYear - 需要获取的年份 默认是当前年份
 */
function calendar (
    month = new Date().getMonth(),
    fullYear = new Date().getFullYear()
) {
    const now = new Date() // 创建新的日期对象
    now.setFullYear(fullYear) // 设置年份为传入的年份
    now.setMonth(month) // 设置月份为传入的月
    now.setDate(1) // 将日期设置为 当月第一天
    const day = now.getDay() // 获取当月第一天是星期几
    const year = now.getFullYear() // 获取年份
    const date = [
        31,
        (() => {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return 29 // 闰年
            } else return 28 // 平年
        })(),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][now.getMonth()] // 获取当月天数

    const dateList = (() => {
        const list = []
        for (let i = 0; i < day; i++) {
            list.push('')
        }
        for (let i = 1; i <= date; i++) {
            list.push(String(i))
        }
        return list
    })()

    return {
        year,
        dateList,
        month
    }
}

export default calendar

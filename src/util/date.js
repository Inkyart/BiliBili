/**
 * 用于返回当前日期的数据
 * 返回格式为 yyyy-mm-dd hour:min:sec
 */
function date () {
    const now = new Date()
    const year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    if (hour < 10) hour = '0' + hour
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

export default date

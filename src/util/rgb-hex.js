/** 用于将 rgb 转换为 hex 格式 */
function colorHex (rgb) {
    // RGB颜色值的正则
    const reg = /^(rgb|RGB)/
    const color = rgb
    if (reg.test(color)) {
        let strHex = '#'
        // 把RGB的3个数值变成数组
        const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
        // 转成16进制
        for (var i = 0; i < colorArr.length; i++) {
            let hex = Number(colorArr[i]).toString(16)
            if (hex === '0') hex += hex
            else if (hex < 10) hex = '0' + hex
            strHex += hex
        }
        return strHex
    } else {
        return String(color)
    }
}
export default colorHex

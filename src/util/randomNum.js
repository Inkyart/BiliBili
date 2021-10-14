/**
 * 返回指定范围内的随机数
 * @param {String | Number} minNum 最小数
 * @param {String | Number} maxNum 最大数
 * @param {Number} radix 进制
 */
function randomNumber (minNum, maxNum, radix) {
    const [min, max] = [parseInt(minNum, radix), parseInt(maxNum, radix)]
    return parseInt(Math.random() * (max - min + 1) + min, radix)
}

export default randomNumber

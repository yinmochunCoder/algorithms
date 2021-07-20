const utils = {
    // 获得随机数
    getRandom: function (min, max, number) {
        let nums = [], differ = max - min
        return function () {
            for (let index = 1; index <= number; index++) {
                nums.push(parseInt(Math.random() * differ + min))
            }
            return nums
        }
    }
};
export default utils


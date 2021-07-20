import utils from './utils.js'
import bubbleSort from './bubbleSort.js'

class CompareAlgorithm {
    constructor() {}
    // 冒泡排序
    bubbleSort(nums) {
        return bubbleSort(nums)
    }
}



let instance = new CompareAlgorithm(),
    nums = utils.getRandom(1, 100, 15)(),
    result = instance.bubbleSort(nums)
    console.log(result)



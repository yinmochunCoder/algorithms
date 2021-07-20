/**
 * 冒泡排序
 * **/
function BubbleSort(nums) {
    // 循环的次数
    for (let compareNums = 0; compareNums < nums.length; compareNums++) {
        // 在循环内的比较次数
        for (let index = 0; index < nums.length - compareNums; index++) {
            if (nums[index+1] < nums[index]) {
                [nums[index], nums[index+1]] = [nums[index+1], nums[index]]
            }
        }
    }
    return nums
}
export default BubbleSort;





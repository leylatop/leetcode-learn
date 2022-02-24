/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i in nums) {
        for(let j in nums) {
            if(i!==j && nums[i] + nums[j] === target) {
                return [Number.parseInt(i), Number.parseInt(j)]
            }
        }
    }
};

var nums = [3,3]
var target = 6
console.log(twoSum(nums, target));
function twoSum(nums: number[], target: number): number[] {
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let x = 0; x < nums.length; x++) {
            if (i >= x) continue;
            if (nums[i] + nums[x] === target) {
                answer.push(i, x);
                break;
            }
        }
    }
    return answer;
};
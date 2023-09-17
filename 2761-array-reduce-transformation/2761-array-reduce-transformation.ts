type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let val: number = init;
    nums.forEach((n: number) => {
        val = fn(val, n)
    })
    return val;
};
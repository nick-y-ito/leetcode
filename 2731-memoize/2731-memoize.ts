type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    const called = new Map();
    const answer = new Map();
    return function (...args) {
        if (called.get(JSON.stringify(args))) {
            return answer.get(JSON.stringify(args));
        }
        const result = fn(...args);
        called.set(JSON.stringify(args), true);
        answer.set(JSON.stringify(args), result);
        return result;
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
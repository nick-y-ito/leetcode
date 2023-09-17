type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    const resetVal = init;
    let currentVal = init;
    return {
        increment: () =>  ++currentVal,
        decrement: () => --currentVal,
        reset: () => currentVal = resetVal,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
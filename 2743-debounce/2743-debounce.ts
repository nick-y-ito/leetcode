type F = (...args: number[]) => void

const debounce = (fn: F, t: number): F => { // t = 50
    let timer: ReturnType<typeof setTimeout>;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { fn(...args) }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */